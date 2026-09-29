#!/usr/bin/env node
/* THE MODEL'S OWN TEST.

   Keren, Sep 29 2026: "are we over tested?" By volume, no — 6% of the app is test. But the audit that
   answered her found a hole worth more than everything it found on the other side: nothing anywhere tested
   `readSeason`, the twenty lines that decide which season the economy is in. That function is the claim the
   whole app is built to make. If it started returning Autumn for a Spring quarter, eighty-one browser checks
   would pass, the dial would draw a beautiful ring, and every word on it would be wrong.

   It is tested HERE rather than in the browser because it is a pure function of two number series, and the
   browser suite costs 135 seconds where this costs none. The source is read and the two functions are
   evaluated out of it, so the rule under test is the rule that ships — there is no second copy to drift.

   WHAT IS ASSERTED. Every branch of the season table, and then the four thresholds, which are the interesting
   part: hot is `> 3.0` and cold is `< 1.0`, rising is `> 0.02` and `> 0.025`. Every one is strict, so a
   reading sitting exactly on a threshold falls to the OTHER side, and a later hand changing one `>` to `>=`
   would move real quarters between seasons with nothing to say it had happened.

   Usage: node test/season.test.js        Exit 0 = every case passed. */
const fs = require('fs'), path = require('path');

/* Lift the rule out of the source it ships in. A copy of these twenty lines in a test file would be a second
   place the model lives, which is the one thing this app does not do. */
function lift(file, names) {
  const src = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
  let out = '';
  for (const n of names) {
    const start = src.indexOf('  function ' + n + '(');
    if (start < 0) throw new Error('not found in ' + file + ': ' + n);
    let i = src.indexOf('{', start), depth = 0, j = i;
    for (; j < src.length; j++) {
      if (src[j] === '{') depth++;
      else if (src[j] === '}') { depth--; if (!depth) break; }
    }
    out += src.slice(start, j + 1) + '\n';
  }
  return new Function(out + 'return { ' + names.join(', ') + ' };')();
}
const { slopeOf, readSeason } = lift('src/js/08-model.js', ['slopeOf', 'readSeason']);

let pass = 0, fail = 0;
function ok(label, got, want) {
  if (got === want) { pass++; console.log('  ok   ' + label.padEnd(52) + String(got)); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + got + '\n       want ' + want); }
}
/* A series of `n` readings rising by `step` each time and ENDING on `end`. Ending on the last value rather
   than starting from the first is what lets a case set the level and the direction independently, which is
   exactly what the rule does: the level comes from the last reading, the direction from the whole run. */
const run = (n, end, step) => Array.from({ length: n }, (_, i) => ({ v: end - (n - 1 - i) * step }));
const cpi = (end, step) => run(12, end, step);
const gdp = (end, step) => run(6, end, step);
const season = (c, g, prev) => readSeason(c, g, prev).season;

/* ---- slopeOf: a least-squares fit on evenly spaced points returns the step itself ---- */
ok('flat series has no slope', slopeOf([2, 2, 2, 2]), 0);
ok('a step of 0.5 fits as 0.5', +slopeOf([1, 1.5, 2, 2.5]).toFixed(10), 0.5);
ok('a falling step fits negative', +slopeOf([3, 2.5, 2, 1.5]).toFixed(10), -0.5);
ok('one point has no slope', slopeOf([4]), 0);

/* ---- the season table, branch by branch ----
   Expansion is growth rising; contraction is growth falling. Inside expansion hot prices are Summer and
   direction alone decides the rest; inside contraction cold prices are Winter and direction mirrors it. */
ok('expansion + hot prices        = summer',         season(cpi(4.2, 0.05), gdp(2, 0.05)),  'summer');
ok('expansion + cooling prices    = springdeflation', season(cpi(2.0, -0.05), gdp(2, 0.05)), 'springdeflation');
ok('expansion + heating prices    = spring',         season(cpi(2.0, 0.05), gdp(2, 0.05)),  'spring');
ok('expansion + steady prices     = spring',         season(cpi(2.0, 0), gdp(2, 0.05)),     'spring');
ok('contraction + cold prices     = winter',         season(cpi(0.4, -0.05), gdp(2, -0.05)), 'winter');
ok('contraction + cooling prices  = autumn',         season(cpi(2.0, -0.05), gdp(2, -0.05)), 'autumn');
ok('contraction + heating prices  = lateautumn',     season(cpi(2.0, 0.05), gdp(2, -0.05)),  'lateautumn');
ok('contraction + steady prices   = lateautumn',     season(cpi(2.0, 0), gdp(2, -0.05)),     'lateautumn');

/* ---- flat growth keeps the regime it was already in (Keren, Sep 18 2026) ----
   The whole point of the rule: flat growth after a contraction is still a contraction, not a fresh
   expansion. Without the memory, an economy that stopped falling would be declared to be growing. */
ok('flat growth holds a contraction', readSeason(cpi(2.0, 0), gdp(2, 0), 'contraction').regime, 'contraction');
ok('flat growth holds an expansion',  readSeason(cpi(2.0, 0), gdp(2, 0), 'expansion').regime,  'expansion');
ok('flat growth with no past reads as expansion', readSeason(cpi(2.0, 0), gdp(2, 0), null).regime, 'expansion');
ok('a contraction held flat is not spring', season(cpi(2.0, 0), gdp(2, 0), 'contraction'), 'lateautumn');

/* ---- the four thresholds, each strict, each sitting on the edge ----
   These are the cases a later hand changes by accident. Exactly 3.0 is NOT hot; exactly 1.0 is NOT cold;
   a slope of exactly 0.02 is NOT rising and exactly 0.025 is NOT expansion. Every one of them moves a real
   quarter into a different season, and none of them looks wrong on a chart. */
ok('prices exactly 3.0 are not hot',   readSeason(cpi(3.0, 0), gdp(2, 0.05)).cpiHot,  false);
ok('prices just over 3.0 are hot',     readSeason(cpi(3.001, 0), gdp(2, 0.05)).cpiHot, true);
ok('prices exactly 1.0 are not cold',  readSeason(cpi(1.0, 0), gdp(2, -0.05)).cpiCold, false);
ok('prices just under 1.0 are cold',   readSeason(cpi(0.999, 0), gdp(2, -0.05)).cpiCold, true);
/* The two slope thresholds are tested on a TWO-point series, because that is the only length whose fit is
   exact in binary: for [0, s] the least squares comes to s with no rounding anywhere, where a six-point ramp
   built by repeated subtraction lands a few bits off and a test written that way reports the model wrong when
   the arithmetic is what moved. (That is how this one was found: the six-point version failed and the rule was
   innocent.) `readSeason` never checks the length, so two is a legal series to hand it. */
const at = s => [{ v: 0 }, { v: s }];
ok('a CPI slope of exactly 0.02 is steady',   readSeason(at(0.02), gdp(2, 0.05)).cpiDirection, 'steady');
ok('a CPI slope just over 0.02 is rising',    readSeason(at(0.0201), gdp(2, 0.05)).cpiDirection, 'rising');
ok('a CPI slope of exactly -0.02 is steady',  readSeason(at(-0.02), gdp(2, 0.05)).cpiDirection, 'steady');
ok('a growth slope of exactly 0.025 is flat', readSeason(cpi(2.0, 0), at(0.025), null).growthTrend, 'flat');
ok('a growth slope just over 0.025 rises',    readSeason(cpi(2.0, 0), at(0.0251), null).growthTrend, 'rising');
ok('a growth slope of exactly -0.025 is flat', readSeason(cpi(2.0, 0), at(-0.025), null).growthTrend, 'flat');

/* ---- and the boundary that matters most, said as a season rather than a flag ----
   3.0 against 3.001 is the difference between Spring and Summer on the dial: one is the economy growing
   with prices behaving, the other is the economy overheating. */
ok('3.0 in an expansion is spring',    season(cpi(3.0, 0.05), gdp(2, 0.05)),   'spring');
ok('3.001 in an expansion is summer',  season(cpi(3.001, 0.05), gdp(2, 0.05)), 'summer');

/* ---- THE CYCLE BOUNDARIES ----
   The other half of the model nothing checked. `marketCycles` is the spine every page hangs off: Rhymes reads
   its names, Echoes read its years, the dial measures a cycle's length against it, and every history can be
   sliced by it. A gap between two cycles loses years off the board silently, and an overlap puts one year in
   two cycles and no page would say so \u2014 each would simply count it twice. Read out of the source for the same
   reason as the rule above: one copy, and it is the shipped one. */
const src = fs.readFileSync(path.join(__dirname, '..', 'src/js/07-forms.js'), 'utf8');
const lit = src.slice(src.indexOf('var marketCycles = ['));
const cycles = new Function('return ' + lit.slice(lit.indexOf('['), lit.indexOf('\n  ];') + 4))();

ok('every cycle has a name', cycles.every(c => typeof c.name === 'string' && c.name.length > 3), true);
ok('every cycle starts after it is named', cycles.every(c => c.from > 1900 && c.from < 2100), true);
ok('exactly one cycle is open', cycles.filter(c => c.ongoing).length, 1);
ok('the open cycle is the last', !!cycles[cycles.length - 1].ongoing, true);
ok('only the open cycle has no end', cycles.filter(c => c.to == null).length, 1);
ok('no cycle ends before it starts', cycles.every(c => c.to == null || c.to >= c.from), true);
/* Contiguous AND non-overlapping in one assertion, which is how they have to be read: each closed cycle ends
   exactly the year before the next begins. Say it as the list of gaps so a failure names the seam. */
const seams = cycles.slice(0, -1).map((c, i) => cycles[i + 1].from - c.to);
ok('cycles meet with no gap and no overlap', seams.join(','), seams.map(() => 1).join(','));
ok('the board reaches back to 1991', cycles[0].from, 1991);

console.log('\n' + pass + '/' + (pass + fail) + ' passed');
process.exit(fail ? 1 : 0);
