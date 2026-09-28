#!/usr/bin/env node
/* Tests for the pure parts of tools/fetch-fred-history.js — the windowing and joining, which have
   no network in them. The fetching itself is proved by the backfill workflow's own run against
   FRED; what is testable without a network is tested without one, the rule fetch-live.test.js set.

   Every case here is a mistake that was actually available to make. The joining cases are the
   important ones: the fear curve is a ratio of two prices ON THE SAME DAY, and a version that
   averaged each leg over a month, or that carried a stale far leg forward, would report a curve
   shape that never traded — and it would look entirely plausible on the chart.

   Usage: node test/fetch-fred-history.test.js        Exit 0 = every case passed. */
const { monthEnd, curveMonthly, monthlyLevels, quarterly, band } = require('../tools/fetch-fred-history.js');

let pass = 0, fail = 0;
function ok(label, got, want) {
  const g = JSON.stringify(got), w = JSON.stringify(want);
  if (g === w) { pass++; console.log('  ok   ' + label.padEnd(46) + (g.length < 58 ? g : '')); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + g + '\n       want ' + w); }
}
function throws(label, fn, re) {
  try { fn(); fail++; console.log('  FAIL ' + label + ' — did not throw'); }
  catch (e) {
    if (re.test(e.message)) { pass++; console.log('  ok   ' + label.padEnd(46) + 'threw'); }
    else { fail++; console.log('  FAIL ' + label + ' — wrong error: ' + e.message); }
  }
}

const d = (date, v) => ({ date, v });

/* ---- monthEnd: the LAST day of each month, never the first and never an average ---- */
ok('takes the last day of the month',
   [...monthEnd([d('2026-01-02', 1), d('2026-01-30', 9)]).entries()].map(([m, r]) => [m, r.v]),
   [['2026-01', 9]]);
ok('keeps one entry per month',
   [...monthEnd([d('2026-01-30', 1), d('2026-02-02', 2), d('2026-02-27', 3)]).keys()],
   ['2026-01', '2026-02']);
ok('a month with no days never appears',
   [...monthEnd([d('2026-01-30', 1), d('2026-03-02', 3)]).keys()],
   ['2026-01', '2026-03']);
throws('an unparsable date', () => monthEnd([d('Jan 2026', 1)]), /unparsable date/);

/* ---- curveMonthly: the ratio is same-day, or it is not a ratio ---- */
ok('ratio is computed per day, sampled at month end',
   curveMonthly([d('2026-01-05', 14), d('2026-01-30', 15)],
                [d('2026-01-05', 20), d('2026-01-30', 20)], 0.3, 2.5),
   [{ m: '2026-01', v: 0.75 }]);
ok('a day the far leg did not print is not a day the ratio existed',
   curveMonthly([d('2026-01-05', 14), d('2026-01-30', 15)],
                [d('2026-01-05', 20)], 0.3, 2.5),
   [{ m: '2026-01', v: 0.7 }]);
ok('a month where only the near leg printed is left out',
   curveMonthly([d('2026-02-10', 14)], [d('2026-01-05', 20)], 0.3, 2.5),
   []);
ok('rounds to three decimals, as fearCurve() does',
   curveMonthly([d('2026-01-30', 14.21)], [d('2026-01-30', 17.61)], 0.3, 2.5),
   [{ m: '2026-01', v: 0.807 }]);
ok('an inverted curve is kept — it is the reading that matters most',
   curveMonthly([d('2026-01-30', 30)], [d('2026-01-30', 25)], 0.3, 2.5),
   [{ m: '2026-01', v: 1.2 }]);
ok('a zero far leg cannot divide and is dropped',
   curveMonthly([d('2026-01-30', 14)], [d('2026-01-30', 0)], 0.3, 2.5),
   []);
ok('a ratio outside its band is dropped, not clamped',
   curveMonthly([d('2026-01-30', 14)], [d('2026-01-30', 199)], 0.3, 2.5),
   []);
ok('a leg outside its own band is dropped',
   curveMonthly([d('2026-01-30', 900)], [d('2026-01-30', 900)], 0.3, 2.5),
   []);

/* ---- monthlyLevels: a monthly series straight through ---- */
ok('a monthly series keeps its months',
   monthlyLevels([d('1954-07-01', 0.8), d('1954-08-01', 1.22)], 0, 25),
   [{ m: '1954-07', v: 0.8 }, { m: '1954-08', v: 1.22 }]);
ok('a level outside the band is left out, not clamped',
   monthlyLevels([d('1954-07-01', 0.8), d('1954-08-01', 99)], 0, 25),
   [{ m: '1954-07', v: 0.8 }]);
ok('zero is a real policy rate and survives the band',
   monthlyLevels([d('2015-01-01', 0)], 0, 25), [{ m: '2015-01', v: 0 }]);

/* ---- quarterly: FRED dates a quarter at its first month, and only at its first month ---- */
ok('each quarter start month names its quarter',
   quarterly([d('1990-01-01', 1), d('1990-04-01', 2), d('1990-07-01', 3), d('1990-10-01', 4)], -100, 100),
   [{ q: '1990 Q1', v: 1 }, { q: '1990 Q2', v: 2 }, { q: '1990 Q3', v: 3 }, { q: '1990 Q4', v: 4 }]);
ok('a series starting mid-year keeps its own first quarter',
   quarterly([d('1990-04-01', 8.3)], -100, 100), [{ q: '1990 Q2', v: 8.3 }]);
/* Every bank easing is −100 and this is a real reading, not an error: the band has to be signed or
   the loosest quarters in the record would be dropped as impossible. */
ok('a net easing survives the band',
   quarterly([d('2010-01-01', -22.2)], -100, 100), [{ q: '2010 Q1', v: -22.2 }]);
ok('zero is the definitional midpoint and is a reading',
   quarterly([d('2026-07-01', 0)], -100, 100), [{ q: '2026 Q3', v: 0 }]);
ok('a value outside the band is left out, not clamped',
   quarterly([d('2008-10-01', 83.6), d('2008-07-01', 580)], -100, 100), [{ q: '2008 Q4', v: 83.6 }]);
throws('a month that is not a quarter start',
   () => quarterly([d('1990-05-01', 1)], -100, 100), /not a quarter start/);

/* ---- band ---- */
ok('band rejects a non-number', band('4.2', 0, 25), false);
ok('band rejects NaN', band(NaN, 0, 25), false);
ok('band is inclusive at both ends', [band(0, 0, 25), band(25, 0, 25)], [true, true]);

console.log('\n' + (fail ? fail + ' FAILED, ' : '') + pass + '/' + (pass + fail) + ' passed\n');
process.exit(fail ? 1 : 0);
