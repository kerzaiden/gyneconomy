#!/usr/bin/env node
const fs = require('fs'), path = require('path');
const { plainJs } = require('../tools/source');

function lift(file, names) {
  const src = plainJs(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'));
  let out = '';
  for (const n of names) {
    const found = new RegExp('^(?:export )?function ' + n + '\\(', 'm').exec(src);
    const start = found ? src.indexOf('function ', found.index) : -1;
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
const { slopeOf, readSeason, cpiTrend } = lift('src/js/model.ts', ['slopeOf', 'monthIndex', 'cpiTrend', 'cpiDirectionOf', 'readSeason']);

let pass = 0, fail = 0;
function ok(label, got, want) {
  if (got === want) { pass++; console.log('  ok   ' + label.padEnd(52) + String(got)); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + got + '\n       want ' + want); }
}
const run = (n, end, step) => Array.from({ length: n }, (_, i) => ({ v: end - (n - 1 - i) * step }));
const cpi = (end, step) => run(12, end, step);
const gdp = (end, step) => run(6, end, step);
const season = (c, g, prev) => readSeason(c, g, prev).season;

ok('flat series has no slope', slopeOf([2, 2, 2, 2]), 0);
ok('a step of 0.5 fits as 0.5', +slopeOf([1, 1.5, 2, 2.5]).toFixed(10), 0.5);
ok('a falling step fits negative', +slopeOf([3, 2.5, 2, 1.5]).toFixed(10), -0.5);
ok('one point has no slope', slopeOf([4]), 0);
const months = ['2025-08', '2025-09', '2025-11', '2025-12'];
ok('a missing month is a gap in time, not a step', +cpiTrend(months.map((m, i) => ({ m, v: [1, 1.1, 1.3, 1.4][i] }))).toFixed(10), 0.1);
ok('points with no month fall back to even steps', +cpiTrend([{ v:1 }, { v:1.5 }, { v:2 }]).toFixed(10), 0.5);

ok('expansion + hot prices        = summer',         season(cpi(4.2, 0.05), gdp(2, 0.05)),  'summer');
ok('expansion + cooling prices    = springdeflation', season(cpi(2.0, -0.05), gdp(2, 0.05)), 'springdeflation');
ok('expansion + heating prices    = spring',         season(cpi(2.0, 0.05), gdp(2, 0.05)),  'spring');
ok('expansion + steady prices     = spring',         season(cpi(2.0, 0), gdp(2, 0.05)),     'spring');
ok('contraction + cold prices     = winter',         season(cpi(0.4, -0.05), gdp(2, -0.05)), 'winter');
ok('contraction + cooling prices  = autumn',         season(cpi(2.0, -0.05), gdp(2, -0.05)), 'autumn');
ok('contraction + heating prices  = lateautumn',     season(cpi(2.0, 0.05), gdp(2, -0.05)),  'lateautumn');
ok('contraction + steady prices   = lateautumn',     season(cpi(2.0, 0), gdp(2, -0.05)),     'lateautumn');

ok('flat growth holds a contraction', readSeason(cpi(2.0, 0), gdp(2, 0), 'contraction').regime, 'contraction');
ok('flat growth holds an expansion',  readSeason(cpi(2.0, 0), gdp(2, 0), 'expansion').regime,  'expansion');
ok('flat growth with no past reads as expansion', readSeason(cpi(2.0, 0), gdp(2, 0), null).regime, 'expansion');
ok('a contraction held flat is not spring', season(cpi(2.0, 0), gdp(2, 0), 'contraction'), 'lateautumn');

ok('prices exactly 3.0 are not hot',   readSeason(cpi(3.0, 0), gdp(2, 0.05)).cpiHot,  false);
ok('prices just over 3.0 are hot',     readSeason(cpi(3.001, 0), gdp(2, 0.05)).cpiHot, true);
ok('prices exactly 1.0 are not cold',  readSeason(cpi(1.0, 0), gdp(2, -0.05)).cpiCold, false);
ok('prices just under 1.0 are cold',   readSeason(cpi(0.999, 0), gdp(2, -0.05)).cpiCold, true);
const at = s => [{ v: 0 }, { v: s }];
ok('a CPI slope of exactly 0.02 is steady',   readSeason(at(0.02), gdp(2, 0.05)).cpiDirection, 'steady');
ok('a CPI slope just over 0.02 is rising',    readSeason(at(0.0201), gdp(2, 0.05)).cpiDirection, 'rising');
ok('a CPI slope of exactly -0.02 is steady',  readSeason(at(-0.02), gdp(2, 0.05)).cpiDirection, 'steady');
ok('a growth slope of exactly 0.025 is flat', readSeason(cpi(2.0, 0), at(0.025), null).growthTrend, 'flat');
ok('a growth slope just over 0.025 rises',    readSeason(cpi(2.0, 0), at(0.0251), null).growthTrend, 'rising');
ok('an annual growth slope of exactly 0.1 a year is flat', readSeason(cpi(2.0, 0), [{ v:0 }, { v:0.1 }], null, 4).growthTrend, 'flat');
ok('an annual growth slope just over 0.1 a year rises', readSeason(cpi(2.0, 0), [{ v:0 }, { v:0.1004 }], null, 4).growthTrend, 'rising');
ok('a growth slope of exactly -0.025 is flat', readSeason(cpi(2.0, 0), at(-0.025), null).growthTrend, 'flat');

ok('3.0 in an expansion is spring',    season(cpi(3.0, 0.05), gdp(2, 0.05)),   'spring');
ok('3.001 in an expansion is summer',  season(cpi(3.001, 0.05), gdp(2, 0.05)), 'summer');

const src = plainJs(fs.readFileSync(path.join(__dirname, '..', 'src/js/data.ts'), 'utf8'));
const lit = src.slice(src.search(/var marketCycles\s*=\s*\[/));
const cycles = new Function('return ' + lit.slice(lit.indexOf('['), lit.indexOf('\n];') + 3))();

ok('every cycle has a name', cycles.every(c => typeof c.name === 'string' && c.name.length > 3), true);
ok('every cycle starts after it is named', cycles.every(c => c.from > 1900 && c.from < 2100), true);
ok('exactly one cycle is open', cycles.filter(c => c.ongoing).length, 1);
ok('the open cycle is the last', !!cycles[cycles.length - 1].ongoing, true);
ok('only the open cycle has no end', cycles.filter(c => c.to == null).length, 1);
ok('no cycle ends before it starts', cycles.every(c => c.to == null || c.to >= c.from), true);
const seams = cycles.slice(0, -1).map((c, i) => cycles[i + 1].from - c.to);
ok('cycles meet with no gap and no overlap', seams.join(','), seams.map(() => 1).join(','));
ok('the board reaches back to 1928', cycles[0].from, 1928);

console.log('\n' + pass + '/' + (pass + fail) + ' passed');
process.exit(fail ? 1 : 0);
