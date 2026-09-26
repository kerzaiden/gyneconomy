#!/usr/bin/env node
/* Tests for the pure parts of tools/fetch-live.js — the sheet-reading step, which has no network
   in it and so can be pinned here. The fetching itself is proved by the Data workflow's own run
   against the live sources; what is testable without a network is tested without one.

   Every case here is a mistake that was actually available to make. The date cases are the
   important ones: Shiller writes a month as YYYY.MM with a ONE-DIGIT month, so 2026.1 is October,
   and reading it as a fraction (or as January) is wrong by nine months.

   Usage: node test/fetch-live.test.js        Exit 0 = every case passed. */
const { capeFromRows } = require('../tools/fetch-live.js');

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

/* The real workbook's STACKED heading, rows 4–7 of ie_data.xls as served in September 2026, cut at
   column 17. Two rows name both Date and CAPE: row 6 ("Date" over "Fraction", "CAPE" over "Excess
   … Yield") and row 7, the real one. Taking the first read the yield (0.0101) and failed the band
   on every run from V541 to this fix. */
const stacked = [
  ['Stock Market Data Used in "Irrational Exuberance"'],
  ['Robert J. Shiller '],
  [],
  [null, null, null, null, '  Consumer', null, null, null, null, 'Real', null, 'Real', 'Earnings', null, 'Earnings'],
  [null, 'S&P', null, null, 'Price', null, 'Long', null, null, 'Total', null, 'TR', 'Ratio', null, 'Ratio', null, 'Excess'],
  [null, 'Comp.', 'Dividend', 'Earnings', 'Index', 'Date  ', 'Interest', 'Real', 'Real', 'Return', 'Real', 'Scaled', 'P/E10 or', null, 'TR P/E10 or', null, 'CAPE'],
  ['Date', 'P', 'D', 'E', 'CPI', 'Fraction', 'Rate GS10', 'Price', 'Dividend', 'Price', 'Earnings', 'Earnings', 'CAPE', null, 'TR CAPE', null, 'Yield'],
  [2026.07, 7481.34, null, null, 333.918, 2026.5416666665253, 4.6, 7480.77, null, 5102978.73, null, null, 40.00863615205683, null, 42.646, null, 0.012301592728882472],
  [2026.08, 7711.32, null, null, 333.901, 2026.6249999998586, 4.68, 7711.13, null, 5260117.47, null, null, 41.11984417915712, null, 43.808, null, 0.010726033068752007],
  [2026.09, 7631.47, null, null, 333.8925, 2026.7083333331918, 4.75, 7631.47, null, 5205779.71, null, null, 40.575838200376445, null, 43.207, null, 0.010101399206805896],
  [null, 'Sept price is Sept 1st close']
];
ok("Shiller's stacked heading: the LOWEST match", capeFromRows(stacked),
   { value: 40.58, date: '2026-09-01', headerRow: 7 });

throws('a sheet with no CAPE column',   [['Date', 'Home price index'], ['2026.03', 312.4]], /no header row/);
throws('a sheet with no Date column',   [['Month', 'CAPE'], ['2026.03', 41.3]],            /no header row/);
throws('a header but no readings',      sheet([['2026.03', 6100, 75, '']]),                /no CAPE reading/);
throws('a value below the band',        sheet([['2026.03', 6100, 75, 2]]),                 /out of band/);
throws('a value above the band',        sheet([['2026.03', 6100, 75, 900]]),               /out of band/);
throws('an unparsable date',            sheet([['March 2026', 6100, 75, 41.3]]),           /unparsable/);
throws('an impossible month',           sheet([['2026.13', 6100, 75, 41.3]]),              /impossible month/);

console.log('\n' + pass + '/' + (pass + fail) + ' passed\n');
process.exit(fail ? 1 : 0);
