#!/usr/bin/env node
const fs = require('fs'), path = require('path');

const SRC = fs.readFileSync(path.join(__dirname, '..', 'src/js/08-model.js'), 'utf8');
function lift(names, env) {
  const consts = /\n {2}(var CALM = [^\n]*;)/.exec(SRC), win = /\n {2}(var GROWTH_WINDOW = [^\n]*;)/.exec(SRC);
  if (!consts || !win) throw new Error('the diagnosis cut-offs or the growth window are not in 08-model.js');
  let out = consts[1] + '\n' + win[1] + '\n' + Object.keys(env || {}).map(k => 'var ' + k + ' = __env.' + k + ';\n').join('');
  for (const n of names) {
    const start = SRC.indexOf('  function ' + n + '(');
    if (start < 0) throw new Error('not found in 08-model.js: ' + n);
    let i = SRC.indexOf('{', start), depth = 0, j = i;
    for (; j < SRC.length; j++) {
      if (SRC[j] === '{') depth++;
      else if (SRC[j] === '}') { depth--; if (!depth) break; }
    }
    out += SRC.slice(start, j + 1) + '\n';
  }
  return new Function('__env', out + 'return { ' + names.join(', ') + ', GROWTH_WINDOW, CUTS: { CALM, FRIGHTENED, RISE, SLOWING, NEAR_HIGH, STRETCHED } };')(env || {});
}
const { seasonHalf, rankToDate, readFeeling, readPosture, CUTS } = lift(['seasonHalf', 'rankToDate', 'readFeeling', 'readPosture']);

let pass = 0, fail = 0;
function ok(label, got, want) {
  const g = JSON.stringify(got), w = JSON.stringify(want);
  if (g === w) { pass++; console.log('  ok   ' + label.padEnd(58) + g); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + g + '\n       want ' + w); }
}
const base = { dd: 0, mom: 0.2, share: 0.9, wasNegative: false, fear: 40, fear3: 40, fearPeak: 40, stretch: 50 };
const feel = o => readFeeling(Object.assign({}, base, o));

console.log('\nThe cut-offs Keren confirmed (V664)\n');
ok('calm, frightened, rising, slowing, near the high, stretched', CUTS,
   { CALM: 20, FRIGHTENED: 80, RISE: 20, SLOWING: 0.65, NEAR_HIGH: 0.05, STRETCHED: 80 });

console.log('\nseasonHalf — all six seasons\n');
ok('Summer and both Autumns are warm', ['summer', 'autumn', 'lateautumn'].map(seasonHalf), ['warm', 'warm', 'warm']);
ok('Winter and both Springs are cool', ['winter', 'spring', 'springdeflation'].map(seasonHalf), ['cool', 'cool', 'cool']);

console.log('\nrankToDate\n');
const twelve = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
ok('the share of earlier months below the value', rankToDate(twelve, 7), 50);
ok('above every earlier month is 100', rankToDate(twelve, 99), 100);
ok('fewer than twelve earlier months is no rank yet', rankToDate([1, 2, 3], 2), null);

console.log('\nreadFeeling — each rule at its edges, in its order\n');
ok('Capitulation: fear 90 and 15% off the high', feel({ fear: 90, dd: -0.15, mom: -0.2 }), 'Capitulation');
ok('not Capitulation at fear 89', feel({ fear: 89, dd: -0.15, mom: -0.2 }), 'Fear');
ok('not Capitulation at 14% off the high', feel({ fear: 95, dd: -0.14, mom: -0.2 }), 'Fear');
ok('Fear: momentum negative, fear at 60', feel({ fear: 60, mom: -0.01, dd: -0.08 }), 'Fear');
ok('not Fear at 59', feel({ fear: 59, mom: -0.01, dd: -0.03 }), null);
ok('Despondency: 20 down from a frightened peak, 10% off', feel({ fear: 60, fearPeak: 80, dd: -0.10, mom: 0.01 }), 'Despondency');
ok('not Despondency when the peak was 79', feel({ fear: 59, fearPeak: 79, dd: -0.10, mom: 0.01 }), null);
ok('not Despondency 19 down', feel({ fear: 61, fearPeak: 80, dd: -0.12, mom: 0.01 }), null);
ok('Anxiety: up 20 from calm, within 10% of the high', feel({ fear3: 19, fear: 39, dd: -0.10 }), 'Anxiety');
ok('not Anxiety from a reading that was not calm', feel({ fear3: 20, fear: 40, dd: -0.02 }), 'Optimism');
ok('not Anxiety up 19', feel({ fear3: 10, fear: 29, dd: -0.02 }), 'Optimism');
ok('not Anxiety 11% off the high', feel({ fear3: 10, fear: 40, dd: -0.11 }), null);
ok('Hope: momentum just turned positive', feel({ wasNegative: true, mom: 0.01, dd: -0.2 }), 'Hope');
ok('Euphoria: near the high, slowing, calm', feel({ dd: -0.05, share: 0.64, fear: 19 }), 'Euphoria');
ok('not Euphoria at 65% of the best', feel({ dd: -0.05, share: 0.65, fear: 19 }), 'Optimism');
ok('not Euphoria at fear 20, the Optimism of today', feel({ dd: -0.01, share: 0.45, fear: 23 }), 'Optimism');
ok('Optimism: rising, within 5% of the high', feel({ dd: -0.05 }), 'Optimism');
ok('no feeling named 6% off the high and rising', feel({ dd: -0.06 }), null);
ok('no reading without fear', feel({ fear: null }), null);

console.log('\nreadPosture — every feeling in both halves\n');
const P = (s, h, o) => readPosture(s, h, Object.assign({ mom: 0.1, stretch: 50 }, o));
ok('Offense: fear, capitulation or anxiety in a cool body',
   ['Fear', 'Capitulation', 'Anxiety'].map(s => P(s, 'cool', { mom: -0.1 })), ['Offense', 'Offense', 'Offense']);
ok('Patience: fear or capitulation in a warm body',
   ['Fear', 'Capitulation'].map(s => P(s, 'warm', { mom: -0.1 })), ['Patience', 'Patience']);
ok('Defense: momentum negative in a warm body', ['Despondency', 'Anxiety', 'Optimism'].map(s => P(s, 'warm', { mom: -0.01 })),
   ['Defense', 'Defense', 'Defense']);
ok('Prepare: euphoria or optimism, warm, stretch in its top fifth',
   ['Euphoria', 'Optimism'].map(s => P(s, 'warm', { stretch: 80 })), ['Prepare', 'Prepare']);
ok('not Prepare at stretch 79', P('Euphoria', 'warm', { stretch: 79 }), 'Neutral');
ok('Neutral: the same in a cool body', ['Euphoria', 'Optimism', 'Hope', 'Despondency'].map(s => P(s, 'cool', { stretch: 99 })),
   ['Neutral', 'Neutral', 'Neutral', 'Neutral']);
ok('Neutral: hope or anxiety, warm, momentum positive', ['Hope', 'Anxiety'].map(s => P(s, 'warm')), ['Neutral', 'Neutral']);

const near = (a, b) => a != null && Math.abs(a - b) < 1e-9;
const month = i => (2000 + Math.floor(i / 12)) + '-' + String(i % 12 + 1).padStart(2, '0');

console.log('\nmarketMonths — momentum, its best, and the drawdown\n');
{
  const sp = [...Array(12).fill(100), 120, 110, 90, 105].map((v, i) => ({ m: month(i), v }));
  const { marketMonths } = lift(['rankToDate', 'marketMonths'], { sp500MonthlyHistory: sp, volatilityHistory: [], seasonTrackAll: [],
    QUARTER_END_MONTH: { Q1: '03', Q2: '06', Q3: '09', Q4: '12' }, marketCache: null });
  const S = marketMonths();
  ok('no momentum before a year of history', S.mom[11], null);
  ok('momentum is the change on a year earlier', [S.mom[12], S.mom[13]].map(v => +v.toFixed(4)), [0.2, 0.1]);
  ok('the best holds through a slower positive month', +S.best[13].toFixed(4), 0.2);
  ok('a negative month clears the best', S.best[14], null);
  ok('a new run starts its own best, not the old one', +S.best[15].toFixed(4), 0.05);
  ok('the drawdown runs from the highest close so far', +S.dd[14].toFixed(4), -0.25);
}

console.log('\nmarketFacts — each window at its edge\n');
{
  const capeHistory = Array.from({ length: 13 }, (_, k) => ({ y: 1990 + k, v: 10 + k })).concat([{ y: 2003, v: 99 }]);
  const { marketFacts } = lift(['rankToDate', 'stretchRank', 'marketFacts'], { capeHistory });
  const fearRank = [95, 1, 2, 3, 50, 4, 5, 33];
  const S = { spAt: { '2003-08': 5 }, volAt: { '2003-08': 7 }, dd: [0, 0, 0, 0, 0, -0.02], best: [0, 0, 0, 0, 0, 0.2],
              mom: [0.1, -0.1, 0.1, 0.1, 0.1, 0.05], fearRank };
  const f = marketFacts(S, '2003-08');
  ok('the frightened peak looks back six months, not seven', f.fearPeak, 50);
  ok('fear three months ago', f.fear3, 50);
  ok('fear now is this month\u2019s rank', f.fear, 33);
  ok('a negative month four back is not "was negative"', f.wasNegative, false);
  S.mom[2] = -0.1;
  ok('a negative month three back is', marketFacts(S, '2003-08').wasNegative, true);
  ok('the share of the best run', f.share, 0.25);
  ok('the stretch ranks this year\u2019s CAPE against earlier years only', f.stretch, 100);
  ok('a given fear replaces the month\u2019s', marketFacts(S, '2003-08', 12).fear, 12);
}

console.log('\nwhatFollowed, lastFeeling, diagnoseClose — the record and the close\n');
{
  const sp = Array.from({ length: 60 }, (_, i) => ({ m: month(i), v: 100 * Math.pow(1.01, i) }));
  sp[59].v = sp[58].v * 0.94;
  const vol = sp.map(d => ({ m: d.m, v: 20 }));
  const seasons = Array.from({ length: 20 }, (_, k) => ({ y: 2000 + Math.floor(k / 4), qn: 'Q' + (k % 4 + 1), reading: { season: 'summer' } }));
  const env = { sp500MonthlyHistory: sp, volatilityHistory: vol, seasonTrackAll: seasons, capeHistory: [],
    QUARTER_END_MONTH: { Q1: '03', Q2: '06', Q3: '09', Q4: '12' }, marketCache: null, followedCache: null };
  const M = lift(['seasonHalf', 'rankToDate', 'readFeeling', 'readPosture', 'marketMonths', 'seasonInMonth', 'stretchRank',
                  'marketFacts', 'whatFollowed', 'lastFeeling', 'diagnoseClose'], env);
  const rec = M.whatFollowed(), cell = rec.cells['Optimism|warm'];
  ok('the record starts when momentum and a fear rank both exist', rec.from, '2001-01');
  ok('every month with a year still to come is counted, and no later one', cell.months, 36);
  ok('a year later means twelve months, not fewer', near(cell.median, Math.pow(1.01, 12) - 1), true);
  ok('one unbroken spell', cell.spells, 1);
  const S = M.marketMonths();
  ok('a month no rule names carries the last named feeling', [M.readFeeling(M.marketFacts(S, '2004-12')), M.lastFeeling(S, '2004-12')], [null, 'Optimism']);
  const at = M.diagnoseClose({ endMonth: '2002-06', season: 'summer' });
  ok('the close reads its own month', [at.stage, at.carried, at.half], ['Optimism', false, 'warm']);
  ok('what followed the close is the change a year later', near(at.after, Math.pow(1.01, 12) - 1), true);
  ok('a close with no year after it has nothing to report', M.diagnoseClose({ endMonth: '2004-06', season: 'summer' }).after, null);
  ok('a close no rule names says it carried', [M.diagnoseClose({ endMonth: '2004-12', season: 'summer' }).stage, M.diagnoseClose({ endMonth: '2004-12', season: 'summer' }).carried], ['Optimism', true]);
}

console.log('\ncycleReturns — the peak is the best single year, never compounded\n');
{
  const { cycleReturns } = lift(['cycleReturns'], { sp500AnnualReturns: { 2019: 30, 2020: 16, 2021: 27, 2022: -18 } });
  const r = cycleReturns(2019, 2022);
  ok('the peak year is the year with the best return', r.peakYear, 2019);
  ok('the total compounds year by year', +r.cumByYear[2021].toFixed(2), 91.52);
}

console.log('\nregimeTrack — the peers read growth exactly as the season does\n');
{
  const M = lift(['slopeOf', 'readSeason', 'regimeTrack'], {});
  const vals = [3, 3, 3, 3, 3, 3, 2, 1, 0, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 2, 1, 0, -1, -2, -2, -1.96, -1.92, -1.88, -1.84, -1.8, -1.76, -1.72];
  const series = {}; vals.forEach((v, k) => { series[(2000 + Math.floor(k / 4)) + ' Q' + (k % 4 + 1)] = v; });
  const qs = Object.keys(series).sort(), track = M.regimeTrack(series), cpi12 = Array(12).fill({ v: 2 });
  let prev, same = true;
  qs.forEach((q, i) => { if (i < M.GROWTH_WINDOW - 1) return;
    const r = M.readSeason(cpi12, qs.slice(i - M.GROWTH_WINDOW + 1, i + 1).map(k => ({ q: k, v: series[k] })), prev);
    prev = r.regime; if (r.regime !== track[q]) same = false; });
  ok('the same regime as readSeason in every quarter', same, true);
  ok('a flat stretch keeps the regime before it', track[qs[14]], 'contraction');
  ok('a rise of 0.04 a quarter is expansion, past the 0.025 cut', track[qs[qs.length - 1]], 'expansion');
}

console.log('\nThe words say what the rules do\n');
{
  const NAV = fs.readFileSync(path.join(__dirname, '..', 'src/js/12-pages-nav.js'), 'utf8');
  const RULES = new Function('return ' + /var FEELING_RULES = (\{[\s\S]*?\});/.exec(NAV)[1])();
  const body = /function readFeeling\(f\)\{([\s\S]*?)\n {2}\}/.exec(SRC)[1];
  const C = CUTS, pct = x => Math.round(x * 100) + '%';
  const said = line => {
    const out = [], fear = /f\.fear >= (\d+)/.exec(line);
    if (fear) out.push(fear[1] === '90' ? 'top tenth' : 'top ' + (100 - fear[1]) + '%');
    for (const m of line.matchAll(/f\.dd (?:<=|>=) -(0\.\d+)/g)) out.push(pct(+m[1]));
    if (/NEAR_HIGH/.test(line)) out.push(pct(C.NEAR_HIGH));
    if (/SLOWING/.test(line)) out.push(pct(C.SLOWING));
    if (/RISE/.test(line)) out.push(C.RISE + ' points');
    if (/< CALM/.test(line)) out.push('calm');
    if (/FRIGHTENED/.test(line)) out.push('frightened');
    return out;
  };
  const wrong = [];
  body.split('\n').forEach(line => { const m = /return "(\w+)"/.exec(line); if (!m) return;
    said(line).forEach(w => { if (!new RegExp('(^|[^\\d.])' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![\\d])').test(RULES[m[1]] || '')) wrong.push(m[1] + ' does not say ' + w); }); });
  ok('each feeling\u2019s rule text names its cut-offs', wrong, []);
  ok('every feeling has its rule written out', FEELINGS_IN(SRC).filter(n => !RULES[n]), []);
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  const text = fs.readdirSync(path.join(__dirname, '..', 'src/js')).map(n => fs.readFileSync(path.join(__dirname, '..', 'src/js', n), 'utf8')).join('\n') +
               fs.readFileSync(path.join(__dirname, '..', 'src/page-body.html'), 'utf8');
  const windows = [...text.matchAll(/(?:last|past|prior) (\w+) quarters/g)].map(m => m[1]);
  ok('every sentence on growth\u2019s window says ' + words[GROWTH_WINDOW_OF(SRC)] + ' quarters',
     windows.length > 0 && windows.every(w => w === words[GROWTH_WINDOW_OF(SRC)]), true);
}
function FEELINGS_IN(src) { return new Function('return ' + /var FEELINGS = (\[[^\]]*\]);/.exec(src)[1])(); }
function GROWTH_WINDOW_OF(src) { return +/var GROWTH_WINDOW = (\d+);/.exec(src)[1]; }

console.log('\n' + (fail ? fail + ' FAILED, ' : '') + pass + '/' + (pass + fail) + ' passed\n');
process.exit(fail ? 1 : 0);
