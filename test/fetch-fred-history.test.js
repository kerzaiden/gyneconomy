#!/usr/bin/env node
/* Tests for the pure parts of tools/fetch-fred-history.js — the windowing and joining, which have
   no network in them. The fetching itself is proved by the backfill workflow's own run against
   FRED; what is testable without a network is tested without one, the rule fetch-live.test.js set.

   Every case here is a mistake that was actually available to make. The joining cases are the
   important ones: the fear curve is a ratio of two prices ON THE SAME DAY, and a version that
   averaged each leg over a month, or that carried a stale far leg forward, would report a curve
   shape that never traded — and it would look entirely plausible on the chart.

   Usage: node test/fetch-fred-history.test.js        Exit 0 = every case passed. */
const { monthEnd, curveMonthly, monthlyLevels, quarterly, quarterlyMean, spreadQuarterly, withoutGap, fiscalYears, band, emit } = require('../tools/fetch-fred-history.js');

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

/* ---- quarterlyMean: the calendar quarter's average, two decimals ---- */
ok('three months average into their quarter',
   quarterlyMean([d('2026-07-01', 4.5), d('2026-08-01', 4.7), d('2026-09-01', 4.9)], 0, 25).map(x => [x.q, x.v, x.n]),
   [['2026 Q3', 4.7, 3]]);
ok('months split at the quarter boundary',
   quarterlyMean([d('2026-06-01', 1), d('2026-07-01', 2)], 0, 25).map(x => x.q), ['2026 Q2', '2026 Q3']);
ok('a negative spread averages as a negative',
   quarterlyMean([d('2023-04-03', -1.5), d('2023-04-04', -1.3)], -10, 25).map(x => x.v), [-1.4]);
ok('a value outside the band is left out of the mean, not clamped',
   quarterlyMean([d('2026-07-01', 4), d('2026-07-02', 99)], 0, 25).map(x => [x.v, x.n]), [[4, 1]]);
/* ---- spreadQuarterly: the hand method, long mean less short mean, rounded ONCE ---- */
const qm = (rows) => quarterlyMean(rows, 0, 25);
ok('a spread rounds the difference, not each leg',
   /* 4.304 and 2.546 round to 4.30 and 2.55, whose difference is 1.75; the true difference, 1.758, is 1.76 */
   spreadQuarterly(qm([d('2005-01-01', 4.304)]), qm([d('2005-01-01', 2.546)])).map(x => x.v), [1.76]);
ok('an inverted spread is negative',
   spreadQuarterly(qm([d('2023-04-01', 3.6)]), qm([d('2023-04-01', 5.1)])).map(x => x.v), [-1.5]);
ok('a quarter only one leg printed is left out',
   spreadQuarterly(qm([d('2026-04-01', 4), d('2026-07-01', 4)]), qm([d('2026-04-01', 3)])).map(x => x.q), ['2026 Q2']);
ok('a spread is partial when either leg is',
   spreadQuarterly([{ q: '2026 Q3', v: 4, raw: 4, partial: true }], [{ q: '2026 Q3', v: 3, raw: 3 }]).map(x => x.partial), [true]);
ok('a null leg writes no spread',
   spreadQuarterly([{ q: '2005 Q1', v: null, raw: null }], [{ q: '2005 Q1', v: 2, raw: 2 }]), []);

/* ---- withoutGap: no 30-year bond Feb 2002 – Feb 2006, so no 30-year yield ---- */
const g30 = [d('2005-10-01', 4.6), d('2005-11-01', 4.7), d('2006-01-01', 4.5), d('2006-02-01', 4.6), d('2006-03-01', 4.7)];
ok('a quarter wholly inside the gap is null',
   withoutGap(qm(g30), g30, ['2002-03', '2006-01']).map(x => [x.q, x.v]), [['2005 Q4', null], ['2006 Q1', 4.6]]);

ok('the treasury block is written with its partial mark',
   /treasuryQuarterly = \{\s*y10:\[\{q:"2026 Q3",v:4\.7,partial:true\}\]/.test(emit([], [], 'x', null,
     { y10: [{ q: '2026 Q3', v: 4.7, partial: true }] })), true);

/* ---- fiscalYears: OMB's fiscal year N is dated N-01-01 on FRED, and nothing else is one ---- */
ok('a fiscal-year series keeps its years',
   fiscalYears([d('1946-01-01', 106.3), d('2007-01-01', 34.79)], 0, 300),
   [{ y: 1946, v: 106.3 }, { y: 2007, v: 34.79 }]);
ok('a deficit is negative and survives a two-sided band',
   fiscalYears([d('1943-01-01', -26.9)], -50, 50), [{ y: 1943, v: -26.9 }]);
ok('a value outside the band is left out, not clamped',
   fiscalYears([d('1946-01-01', 999)], 0, 300), []);
throws('a date that is not 1 January is refused', () => fiscalYears([d('1946-10-01', 1)], 0, 300), /not a fiscal-year date/);

/* ---- emit: the stamp is the fetch date (V643 found it arriving as the third argument's neighbour) ---- */
ok('the generated file carries its fetch date',
   /Fetched 2026-09-29\./.test(emit([], [], '2026-09-29')), true);
ok('without fiscal data, no fiscal block is written',
   /fiscalHistory/.test(emit([], [], '2026-09-29')), false);
ok('with fiscal data, the block is written',
   /var fiscalHistory = \{\s*gross:\[\{y:1946,v:118\}\]/.test(emit([], [], 'x',
     { gross: [{ y: 1946, v: 118 }], held: [], interest: [], budget: [], grossQ: [] })), true);

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
