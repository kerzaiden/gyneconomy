#!/usr/bin/env node
const fs = require('fs'), path = require('path');
const { plainJs } = require('../tools/source');

function lift(file, names, vars) {
  const src = plainJs(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'));
  let out = (vars || []).map(v => {
    const m = new RegExp('\\n(?:export )?(var ' + v + '\\s*= [^\\n]*;)').exec(src);
    if (!m) throw new Error('not found in ' + file + ': ' + v);
    return m[1] + '\n';
  }).join('');
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
  return new Function(out + 'return { ' + names.concat(vars || []).join(', ') + ' };')();
}
const { readSeason, cpiTrend, regimeOf, HOLD_BAND } = lift('src/js/model.ts', ['monthIndex', 'cpiTrend', 'cpiDirectionOf', 'regimeOf', 'readSeason'], ['HOLD_BAND']);

let pass = 0, fail = 0;
function ok(label, got, want) {
  if (got === want) { pass++; console.log('  ok   ' + label.padEnd(52) + String(got)); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + got + '\n       want ' + want); }
}
const run = (n, end, step) => Array.from({ length: n }, (_, i) => ({ m: '2025-' + String(i + 1).padStart(2, '0'), v: end - (n - 1 - i) * step }));
const cpi = (end, step) => run(12, end, step);
const P = 2;
const up = { q: '2026 Q2', v: 3 }, down = { q: '2026 Q2', v: 1 };
const season = (c, g, prev) => readSeason(c, g, P, prev).season;

const months = ['2025-08', '2025-09', '2025-11', '2025-12'];
ok('a missing month is a gap in time, not a step', +cpiTrend(months.map((m, i) => ({ m, v: [1, 1.1, 1.3, 1.4][i] }))).toFixed(10), 0.1);

ok('the margin is BEA’s mean absolute revision', HOLD_BAND, 0.47);
ok('growth past the margin above potential is expansion', regimeOf(P + 0.48, P, 'contraction'), 'expansion');
ok('growth past the margin below potential is contraction', regimeOf(P - 0.48, P, 'expansion'), 'contraction');
ok('on the upper edge the side holds', regimeOf(P + 0.47, P, 'contraction'), 'contraction');
ok('on the lower edge the side holds', regimeOf(P - 0.47, P, 'expansion'), 'expansion');
ok('inside the margin with no past, at potential is expansion', regimeOf(P, P, null), 'expansion');
ok('inside the margin with no past, below potential is contraction', regimeOf(P - 0.1, P, null), 'contraction');
ok('positive growth well below potential is contraction', readSeason(cpi(2.0, 0), { q: 'x', v: 0.5 }, P).regime, 'contraction');
ok('shrinking output is contraction', readSeason(cpi(2.0, 0), { q: 'x', v: -1 }, P, 'expansion').regime, 'contraction');

ok('expansion + hot prices        = summer',          season(cpi(4.2, 0.05), up),  'summer');
ok('expansion + cooling prices    = springdeflation', season(cpi(2.0, -0.05), up), 'springdeflation');
ok('expansion + heating prices    = spring',          season(cpi(2.0, 0.05), up),  'spring');
ok('expansion + steady prices     = spring',          season(cpi(2.0, 0), up),     'spring');
ok('expansion + cold prices heating = spring',        season(cpi(0.4, 0.05), up),  'spring');
ok('contraction + cold prices     = winter',          season(cpi(0.4, -0.05), down), 'winter');
ok('contraction + cooling prices  = autumn',          season(cpi(2.0, -0.05), down), 'autumn');
ok('contraction + steady prices   = autumn',          season(cpi(2.0, 0), down),     'autumn');
ok('contraction + heating prices  = lateautumn',      season(cpi(2.0, 0.05), down),  'lateautumn');
ok('contraction + hot prices heating = lateautumn',   season(cpi(4.2, 0.05), down),  'lateautumn');
ok('a contraction held at potential is not spring',   season(cpi(2.0, 0), { q: 'x', v: P }, 'contraction'), 'autumn');
ok('the reading carries its potential', readSeason(cpi(2.0, 0), up, 2.2).potential, 2.2);
ok('an annual reading says so', readSeason(cpi(2.0, 0), up, P, null, true).annual, true);

ok('prices exactly 3.0 are not hot',   readSeason(cpi(3.0, 0), up, P).cpiHot,  false);
ok('prices just over 3.0 are hot',     readSeason(cpi(3.001, 0), up, P).cpiHot, true);
ok('prices exactly 1.0 are not cold',  readSeason(cpi(1.0, 0), down, P).cpiCold, false);
ok('prices just under 1.0 are cold',   readSeason(cpi(0.999, 0), down, P).cpiCold, true);
const at = s => [{ m: '2025-01', v: 0 }, { m: '2025-02', v: s }];
ok('a CPI slope of exactly 0.02 is steady',   readSeason(at(0.02), up, P).cpiDirection, 'steady');
ok('a CPI slope just over 0.02 is rising',    readSeason(at(0.0201), up, P).cpiDirection, 'rising');
ok('a CPI slope of exactly -0.02 is steady',  readSeason(at(-0.02), up, P).cpiDirection, 'steady');
ok('a CPI slope just under -0.02 is falling', readSeason(at(-0.0201), up, P).cpiDirection, 'falling');

ok('3.0 in an expansion is spring',    season(cpi(3.0, 0.05), up),   'spring');
ok('3.001 in an expansion is summer',  season(cpi(3.001, 0.05), up), 'summer');

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
