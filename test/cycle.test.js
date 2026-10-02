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
  return new Function('__env', out + 'return { ' + names.join(', ') + ', GROWTH_WINDOW, CUTS: { CALM, FRIGHTENED, RISE, SLOWING, NEAR_HIGH } };')(env || {});
}
const { rankToDate, readFeeling, cramerV, explained, CUTS } = lift(['rankToDate', 'readFeeling', 'cramerV', 'explained']);

let pass = 0, fail = 0;
function ok(label, got, want) {
  const g = JSON.stringify(got), w = JSON.stringify(want);
  if (g === w) { pass++; console.log('  ok   ' + label.padEnd(58) + g); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + g + '\n       want ' + w); }
}
const base = { dd: 0, mom: 0.2, share: 0.9, wasNegative: false, fear: 40, fear3: 40, fearPeak: 40 };
const feel = o => readFeeling(Object.assign({}, base, o));

console.log('\nThe cut-offs Keren confirmed (V664)\n');
ok('calm, frightened, rising, slowing, near the high', CUTS,
   { CALM: 20, FRIGHTENED: 80, RISE: 20, SLOWING: 0.65, NEAR_HIGH: 0.05 });

console.log('\ncramerV and explained — the Feeling and season test\n');
ok('V is 1 when each feeling only ever comes in one season', cramerV(['a', 'a', 'b', 'b'], ['x', 'x', 'y', 'y']), 1);
ok('V is 0 when the seasons are spread alike', cramerV(['a', 'a', 'b', 'b'], ['x', 'y', 'x', 'y']), 0);
ok('all of the swing is explained when each cell is one value', explained(['a', 'a', 'b', 'b'], [1, 1, 3, 3]), 1);
ok('none of it when every cell has the same mean', explained(['a', 'a', 'b', 'b'], [1, 3, 1, 3]), 0);

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
  const { marketFacts } = lift(['marketFacts']);
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
  ok('a given fear replaces the month\u2019s', marketFacts(S, '2003-08', 12).fear, 12);
}

console.log('\nwhatFollowed, lastFeeling, diagnoseClose — the record and the close\n');
{
  const sp = Array.from({ length: 60 }, (_, i) => ({ m: month(i), v: 100 * Math.pow(1.01, i) }));
  sp[59].v = sp[58].v * 0.94;
  const vol = sp.map(d => ({ m: d.m, v: 20 }));
  const seasons = Array.from({ length: 20 }, (_, k) => ({ y: 2000 + Math.floor(k / 4), qn: 'Q' + (k % 4 + 1), reading: { season: 'summer' } }));
  const env = { sp500MonthlyHistory: sp, volatilityHistory: vol, seasonTrackAll: seasons,
    QUARTER_END_MONTH: { Q1: '03', Q2: '06', Q3: '09', Q4: '12' }, marketCache: null, followedCache: null };
  const M = lift(['seasonGroup', 'rankToDate', 'readFeeling', 'marketMonths', 'seasonInMonth',
                  'marketFacts', 'whatFollowed', 'lastFeeling', 'diagnoseClose'], env);
  const rec = M.whatFollowed(), cell = rec.cells['Optimism|summer'];
  ok('the record starts when momentum and a fear rank both exist', rec.from, '2001-01');
  ok('every month with a year still to come is counted, and no later one', cell.months, 36);
  ok('each month a year after a rise counts as higher', cell.higher, 36);
  ok('the cells are the four seasons of the dial', Object.keys(rec.cells), ['Optimism|summer']);
  const S = M.marketMonths();
  ok('a month no rule names carries the last named feeling', [M.readFeeling(M.marketFacts(S, '2004-12')), M.lastFeeling(S, '2004-12')], [null, 'Optimism']);
  const at = M.diagnoseClose({ endMonth: '2002-06', season: 'summer' });
  ok('the close reads its own month', [at.stage, at.carried], ['Optimism', false]);
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
console.log('\nProductivity\u2019s word follows the two BLS lines its note cites\n');
{
  const DATA = fs.readFileSync(path.join(__dirname, '..', 'src/js/03-data.js'), 'utf8');
  const consts = /\n {2}(var PRODUCTIVITY_TREND = [^\n]*;)/.exec(DATA)[1];
  const start = DATA.indexOf('  function productivityWord(');
  let i = DATA.indexOf('{', start), d = 0, j = i;
  for (; j < DATA.length; j++) { if (DATA[j] === '{') d++; else if (DATA[j] === '}') { d--; if (!d) break; } }
  const W = new Function(consts + DATA.slice(start, j + 1) + 'return { productivityWord, PRODUCTIVITY_TREND, PRODUCTIVITY_SLOWDOWN };')();
  ok('at or above the long-run line is above trend', [W.productivityWord(2.2).text, W.productivityWord(2.1).text], ['Above trend', 'Above trend']);
  ok('between the lines is above the slowdown', [W.productivityWord(2.09).text, W.productivityWord(1.3).text], ['Above the slowdown', 'Above the slowdown']);
  ok('below the slowdown line says so, and is not good', [W.productivityWord(1.29).text, W.productivityWord(1.29).state], ['Below the slowdown', 'warning']);
  const NOTE = fs.readFileSync(path.join(__dirname, '..', 'src/js/05-history.js'), 'utf8');
  const note = NOTE.slice(NOTE.indexOf('function productivityInfoHtml'), NOTE.indexOf('function outputInfoHtml'));
  ok('the note cites both lines the word is read against',
     [note.indexOf(W.PRODUCTIVITY_SLOWDOWN + '% a year') > -1, note.indexOf(W.PRODUCTIVITY_TREND + '% a year') > -1], [true, true]);
}
console.log('\nmoodAt \u2014 each reading ranked against its own past, turned toward appetite, then averaged\n');
{
  const ramp = (n, f) => Array.from({ length: n }, (_, i) => f(i));
  const months = n => ramp(n, i => ({ m: (2000 + Math.floor(i / 12)) + '-' + String(i % 12 + 1).padStart(2, '0'), v: i }));
  const env = { QUARTER_END_MONTH: { Q1: '03', Q2: '06', Q3: '09', Q4: '12' },
    capeHistory: ramp(30, i => ({ y: 1985 + i, v: i })), buffettHistory: ramp(80, i => ({ q: (1990 + Math.floor(i / 4)) + ' Q' + (i % 4 + 1), v: i })),
    volatilityHistory: months(24).map(d => Object.assign({}, d, { v: 24 - d.v })), confidenceHistory: months(24), sp500MonthlyHistory: months(24), moodLists: null, moodCache: null };
  const M = lift(['rankToDate', 'rankIn', 'moodSeries', 'moodAt', 'moodTrack'], env);
  const top = M.moodAt('2001-12');
  ok('rising valuations and confidence and a falling VIX all rank at the top', [top.valuations, top.calm, top.confidence, top.score], [100, 100, 100, 100]);
  ok('a new low in the VIX is calm, a new high is not', [M.moodAt('2001-12', 0).calm, M.moodAt('2001-12', 99).calm], [100, 0]);
  ok('the market is valuations and calm; households are confidence', [M.moodAt('2001-12', 99).market, M.moodAt('2001-12', 99).confidence], [50, 100]);
  ok('a month with fewer than twelve earlier ones has no mood', M.moodAt('2000-12'), null);
  ok('the track starts at the first month every reading can rank', M.moodTrack()[0].m, '2001-01');
}
function FEELINGS_IN(src) { return new Function('return ' + /var FEELINGS = (\[[^\]]*\]);/.exec(src)[1])(); }
function GROWTH_WINDOW_OF(src) { return +/var GROWTH_WINDOW = (\d+);/.exec(src)[1]; }

console.log('\n' + (fail ? fail + ' FAILED, ' : '') + pass + '/' + (pass + fail) + ' passed\n');
process.exit(fail ? 1 : 0);
