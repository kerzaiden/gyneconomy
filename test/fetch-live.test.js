#!/usr/bin/env node
const { capeFromRows, priceFromRows, fedMove, assemble, FOMC_DECISIONS } = require('../tools/fetch-live.js');

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

console.log('\npriceFromRows — tools/fetch-live.js\n');
ok("the price is the column headed P on Shiller's lowest heading row", priceFromRows(stacked, '1950-01', '2026-09'),
   [{ m: '2026-07', v: 7481.34 }, { m: '2026-08', v: 7711.32 }]);
ok('the running month is left out until it closes', priceFromRows(stacked, '1950-01', '2026-09').length, 2);
ok('a ONE-digit month is October here too', priceFromRows([['Date', 'P'], [2025.1, 6000], [2025.11, 6100]], '1950-01'),
   [{ m: '2025-10', v: 6000 }, { m: '2025-11', v: 6100 }]);
ok('months before the start are left out', priceFromRows([['Date', 'P'], ['1949.12', 16.5], ['1950.01', 16.9]], '1950-01'),
   [{ m: '1950-01', v: 16.9 }]);
try { priceFromRows([['Date', 'Price'], ['2026.03', 6100]], '1950-01'); fail++; console.log('  FAIL real Price is not P'); }
catch (e) { if (/no header row/.test(e.message)) { pass++; console.log('  ok   the real Price column is never taken for P      threw'); } else { fail++; console.log('  FAIL ' + e.message); } }
try { priceFromRows([['Date', 'P'], ['2026.03', 900000]], '1950-01'); fail++; console.log('  FAIL band'); }
catch (e) { if (/out of band/.test(e.message)) { pass++; console.log('  ok   a price outside the band is refused             threw'); } else { fail++; console.log('  FAIL ' + e.message); } }

console.log('\nfedMove and assemble — tools/fetch-live.js\n');
const days = (from, n, v) => Array.from({ length: n }, (_, i) => ({
  date: new Date(Date.parse(from + 'T00:00:00Z') + i * 86400000).toISOString().slice(0, 10), value: String(v) }));
const hike = days('2026-08-01', 47, 3.75).concat(days('2026-09-17', 10, 4)).reverse();
ok('a hike is dated by its FOMC decision, not the day it took effect', fedMove(hike, '2026-09-26', FOMC_DECISIONS),
   { lastMove: '+0.25', lastMoveLabel: 'raised a quarter point', asOf: 'Sep 16, 2026', next: 'Oct 28, 2026' });
const cut = days('2026-09-17', 42, 4).concat(days('2026-10-29', 5, 3.5));
ok('a half-point cut, and the next decision after it', fedMove(cut, '2026-11-02', FOMC_DECISIONS),
   { lastMove: '-0.50', lastMoveLabel: 'cut half a point', asOf: 'Oct 28, 2026', next: 'Dec 9, 2026' });
ok('no next decision past the end of the calendar', fedMove(cut, '2026-12-10', FOMC_DECISIONS).next, '');
ok('a move off the calendar is dated the day before it took effect', fedMove(days('2026-03-01', 3, 2).concat(days('2026-03-04', 2, 1.5)), '2026-03-06', []).asOf,
   'Mar 3, 2026');
ok('missing values are skipped', fedMove([{ date: '2026-09-18', value: '.' }].concat(hike), '2026-09-26', FOMC_DECISIONS).lastMove, '+0.25');
try { fedMove(days('2026-01-01', 30, 4), '2026-02-01', FOMC_DECISIONS); fail++; console.log('  FAIL no change'); }
catch (e) { if (/no change/.test(e.message)) { pass++; console.log('  ok   a flat history is refused, not guessed            threw'); } else { fail++; console.log('  FAIL ' + e.message); } }
ok('a reading that failed keeps its previous document',
   assemble({ vixClose: { v: 1 }, capeValue: { v: 2 }, _meta: { old: true } }, { vixClose: { v: 3 }, _meta: { now: true } }),
   { vixClose: { v: 3 }, capeValue: { v: 2 }, _meta: { now: true } });
ok('a first run has nothing to keep', assemble(null, { yieldCurve: 1 }), { yieldCurve: 1 });

console.log('\n' + pass + '/' + (pass + fail) + ' passed\n');
process.exit(fail ? 1 : 0);
