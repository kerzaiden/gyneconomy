#!/usr/bin/env node
/* Tests for the pure parts of tools/fetch-live.js — the sheet-reading step, which has no network
   in it and so can be pinned here. The fetching itself is proved by the Data workflow's own run
   against the live sources; what is testable without a network is tested without one.

   Every case here is a mistake that was actually available to make. The date cases are the
   important ones: Shiller writes a month as YYYY.MM with a ONE-DIGIT month, so 2026.1 is October,
   and reading it as a fraction (or as January) is wrong by nine months.

   Usage: node test/fetch-live.test.js        Exit 0 = every case passed. */
const { capeFromRows, fearGreedFromPayload } = require('../tools/fetch-live.js');

let pass = 0, fail = 0;
function ok(label, got, want) {
  const g = JSON.stringify(got), w = JSON.stringify(want);
  if (g === w) { pass++; console.log('  ok   ' + label.padEnd(44) + (g.length < 60 ? g : '')); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + g + '\n       want ' + w); }
}
function throws(label, rows, re) {
  try { capeFromRows(rows); fail++; console.log('  FAIL ' + label + ' — did not throw'); }
  catch (e) {
    if (re.test(e.message)) { pass++; console.log('  ok   ' + label.padEnd(44) + 'threw'); }
    else { fail++; console.log('  FAIL ' + label + ' — wrong error: ' + e.message); }
  }
}

/* Shiller's layout, as the workbook actually presents it: several title and note rows, a header
   row well down the sheet, a wide row of columns, then the monthly series, then footnotes. */
const sheet = (rows) => [
  ['Robert J. Shiller, Irrational Exuberance', '', '', ''],
  ['Stock market data used in my book', '', '', ''],
  [],
  ['Date', 'S&P Comp.', 'Dividend', 'CAPE'],
  ...rows,
  ['Note: the CAPE is the cyclically adjusted price-earnings ratio.', '', '', '']
];

console.log('\ncapeFromRows — tools/fetch-live.js\n');

ok('a two-digit month',        capeFromRows(sheet([['2026.03', 6100, 75, 38.42]])),
   { value: 38.42, date: '2026-03-01', headerRow: 4 });
ok('a ONE-digit month is × 10', capeFromRows(sheet([['2026.1', 6100, 75, 41.3]])),
   { value: 41.3, date: '2026-10-01', headerRow: 4 });
ok('.01 is January, not October', capeFromRows(sheet([['2026.01', 6100, 75, 40]])),
   { value: 40, date: '2026-01-01', headerRow: 4 });
ok('December',                 capeFromRows(sheet([['2025.12', 6000, 74, 39.1]])),
   { value: 39.1, date: '2025-12-01', headerRow: 4 });
ok('a numeric cell, not a string', capeFromRows(sheet([[2026.1, 6100, 75, 41.3]])),
   { value: 41.3, date: '2026-10-01', headerRow: 4 });
ok('takes the LAST row with a reading',
   capeFromRows(sheet([['2026.01', 6000, 74, 40.1], ['2026.02', 6050, 74, 40.8], ['2026.03', 6100, 75, 41.3]])),
   { value: 41.3, date: '2026-03-01', headerRow: 4 });
ok('skips trailing rows with no reading',
   capeFromRows(sheet([['2026.02', 6050, 74, 40.8], ['2026.03', 6100, 75, ''], ['2026.04', 6150, 75, null]])),
   { value: 40.8, date: '2026-02-01', headerRow: 4 });
ok('rounds to two decimals',   capeFromRows(sheet([['2026.03', 6100, 75, 38.416666]])),
   { value: 38.42, date: '2026-03-01', headerRow: 4 });
ok('finds P/E10, the old column name',
   capeFromRows([['Date', 'S&P Comp.', 'P/E10'], ['1999.12', 1428, 44.19]]),
   { value: 44.19, date: '1999-12-01', headerRow: 1 });
ok('reads the column by NAME, not position',
   capeFromRows([['CAPE', 'Dividend', 'Date'], [41.3, 75, '2026.03']]),
   { value: 41.3, date: '2026-03-01', headerRow: 1 });

throws('a sheet with no CAPE column',   [['Date', 'Home price index'], ['2026.03', 312.4]], /no header row/);
throws('a sheet with no Date column',   [['Month', 'CAPE'], ['2026.03', 41.3]],            /no header row/);
throws('a header but no readings',      sheet([['2026.03', 6100, 75, '']]),                /no CAPE reading/);
throws('a value below the band',        sheet([['2026.03', 6100, 75, 2]]),                 /out of band/);
throws('a value above the band',        sheet([['2026.03', 6100, 75, 900]]),               /out of band/);
throws('an unparsable date',            sheet([['March 2026', 6100, 75, 41.3]]),           /unparsable/);
throws('an impossible month',           sheet([['2026.13', 6100, 75, 41.3]]),              /impossible month/);

/* ---- fearGreedFromPayload: CNN's payload -> the page's own object ----
   The shape here is the one the live endpoint actually returns, observed once before this was
   written. The important assertion is that the BAND WORD is copied and never derived: CNN owns
   those thresholds, and a score of 37 must print CNN's word for 37, whatever that word is. */
const fg = (over) => ({ fear_and_greed: Object.assign({
  score: 37, rating: 'fear', timestamp: '2026-09-25T23:59:59+00:00',
  previous_close: 36.1142857142857, previous_1_week: 30.4285714285714,
  previous_1_month: 59.60000000000001, previous_1_year: 50.65714285714286
}, over) });

console.log('\nfearGreedFromPayload — tools/fetch-live.js\n');

ok('the live shape, all five fields', fearGreedFromPayload(fg()),
   { value: 37, label: 'Fear', asOf: '2026-09-25', weekAgo: 30, monthAgo: 60 });
ok('two-word ratings are title-cased', fearGreedFromPayload(fg({ rating: 'extreme greed', score: 84 })).label,
   'Extreme Greed');
ok('the word is COPIED, not derived from the score',
   fearGreedFromPayload(fg({ score: 37, rating: 'neutral' })).label, 'Neutral');
ok('fractional history rounds', fearGreedFromPayload(fg({ previous_1_week: 30.49 })).weekAgo, 30);
ok('a boundary score is fine', fearGreedFromPayload(fg({ score: 0 })).value, 0);

function fgThrows(label, payload, re) {
  try { fearGreedFromPayload(payload); fail++; console.log('  FAIL ' + label + ' — did not throw'); }
  catch (e) {
    if (re.test(e.message)) { pass++; console.log('  ok   ' + label.padEnd(44) + 'threw'); }
    else { fail++; console.log('  FAIL ' + label + ' — wrong error: ' + e.message); }
  }
}
fgThrows('an empty payload',            {},                                  /no fear_and_greed/);
fgThrows('a rating CNN does not use',   fg({ rating: 'panic' }),             /unrecognised CNN rating/);
fgThrows('a missing rating',            fg({ rating: null }),                /unrecognised CNN rating/);
fgThrows('a score above 100',           fg({ score: 137 }),                  /score .* out of band/);
fgThrows('a non-numeric score',         fg({ score: 'high' }),               /score .* out of band/);
fgThrows('a missing week-ago figure',   fg({ previous_1_week: null }),       /previous_1_week/);
fgThrows('an unparsable timestamp',     fg({ timestamp: 'last Friday' }),    /unparsable timestamp/);

console.log('\n' + pass + '/' + (pass + fail) + ' passed\n');
process.exit(fail ? 1 : 0);
