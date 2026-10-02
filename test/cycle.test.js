#!/usr/bin/env node
const fs = require('fs'), path = require('path');

const SRC = fs.readFileSync(path.join(__dirname, '..', 'src/js/08-model.js'), 'utf8');
function lift(names, env) {
  const win = /\n {2}(var GROWTH_WINDOW = [^\n]*;)/.exec(SRC);
  if (!win) throw new Error('the growth window is not in 08-model.js');
  let out = win[1] + '\n' + Object.keys(env || {}).map(k => 'var ' + k + ' = __env.' + k + ';\n').join('');
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
  return new Function('__env', out + 'return { ' + names.join(', ') + ', GROWTH_WINDOW };')(env || {});
}
const { rankToDate } = lift(['rankToDate']);

let pass = 0, fail = 0;
function ok(label, got, want) {
  const g = JSON.stringify(got), w = JSON.stringify(want);
  if (g === w) { pass++; console.log('  ok   ' + label.padEnd(58) + g); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + g + '\n       want ' + w); }
}

console.log('\nrankToDate\n');
const twelve = Array.from({ length: 12 }, (_, i) => i + 1);
ok('the share of earlier months below the value', rankToDate(twelve, 7), 50);
ok('above every earlier month is 100', rankToDate(twelve, 99), 100);
ok('fewer than twelve earlier months is no rank yet', rankToDate([1, 2, 3], 2), null);

console.log('\nyearAfter, cycleStory \u2014 the record\n');
{
  const months = ['2001-06', '2001-07', '2001-08', '2001-09', '2001-10', '2001-11', '2001-12'];
  const words = ['Hope', 'Hope', 'Optimism', 'Hope', 'Hope', 'Hope', 'Fear'];
  const sp = Array.from({ length: 30 }, (_, i) => ({ m: (2001 + Math.floor((i + 5) / 12)) + '-' + String((i + 5) % 12 + 1).padStart(2, '0'), v: 100 + (i % 3 ? i : -i) }));
  const env = { QUARTER_END_MONTH: { Q1: '03', Q2: '06', Q3: '09', Q4: '12' }, sp500MonthlyHistory: sp,
    seasonTrackAll: [{ y: 2001, qn: 'Q2', reading: { season: 'summer' } }, { y: 2001, qn: 'Q4', reading: { season: 'lateautumn' } }],
    moodTrack: () => months.map((m, i) => ({ m, word: words[i], pct: [40, 45, 90, 30, 35, 50, 10][i] })), moodToday: () => ({ m: '2001-12', word: 'Hope', pct: 60 }), marketCache: null, trackCache: null,
    seasonGroup: k => k === 'springdeflation' ? 'spring' : k === 'lateautumn' ? 'autumn' : k };
  const M = lift(['marketMonths', 'yearAfter', 'cycleStory'], env);
  ok('a year later is the S&P 500 twelve months on', +M.yearAfter(M.marketMonths(), sp[0].m).toFixed(4), +(sp[12].v / sp[0].v - 1).toFixed(4));
  const st = M.cycleStory({ from: 2001, to: 2001 });
  ok('a cycle\u2019s story: where she opened, her high, her low, where she closed', [st.first.m, st.hi.m, st.lo.m, st.last.m], ['2001-06', '2001-08', '2001-12', '2001-12']);
  ok('the two emotions she spent most months in', st.most, [{ word: 'Hope', n: 5 }, { word: 'Optimism', n: 1 }]);
  ok('an open cycle ends on today', M.cycleStory({ from: 2001, to: null, ongoing: true }).last.pct, 60);
  ok('a cycle with under two months read has no story', M.cycleStory({ from: 1990, to: 1990 }), null);
}

console.log('\ncycleReturns — the peak is the best single year, never compounded\n');
{
  const { cycleReturns } = lift(['cycleReturns'], { sp500AnnualReturns: { 2019: 30, 2020: 16, 2021: 27, 2022: -18 } });
  const r = cycleReturns(2019, 2022);
  ok('the peak year is the year with the best return', r.peakYear, 2019);
  ok('the total compounds year by year', +r.cumByYear[2021].toFixed(2), 91.52);
}

console.log('\nThe growth window is said one way\n');
{
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
  for (const v of ['MOOD_TURN', 'MOOD_RISING', 'MOOD_FALLING']) env[v] = new Function('return ' + new RegExp('var ' + v + ' = ([^;]*);').exec(SRC)[1])();
  const M = lift(['rankToDate', 'rankIn', 'moodSeries', 'moodAt', 'moodWord', 'moodRead', 'moodTrack'], env);
  const top = M.moodAt('2001-12');
  ok('rising valuations and confidence and a falling VIX all rank at the top', [top.valuations, top.calm, top.confidence, top.score], [100, 100, 100, 100]);
  ok('a new low in the VIX is calm, a new high is not', [M.moodAt('2001-12', 0).calm, M.moodAt('2001-12', 99).calm], [100, 0]);
  ok('the market is valuations and calm; households are confidence', [M.moodAt('2001-12', 99).market, M.moodAt('2001-12', 99).confidence], [50, 100]);
  ok('a month with fewer than twelve earlier ones has no mood', M.moodAt('2000-12'), null);
  ok('the track starts at the first month every reading can rank', M.moodTrack()[0].m, '2001-01');
  ok('rising, the stage is the nearest on the climbing side', [M.moodWord(38, 1), M.moodWord(37, 1), M.moodWord(97, 1), M.moodWord(2, 1)], ['Optimism', 'Hope', 'Euphoria', 'Despair']);
  ok('falling, the nearest on the descending side', [M.moodWord(90, -1), M.moodWord(60, -1), M.moodWord(20, -1), M.moodWord(4, -1)], ['Anxiety', 'Fear', 'Desperation', 'Despair']);
  ok('unchanged counts as falling; no rank or no turn is no stage', [M.moodWord(52, 0), M.moodWord(null, 1), M.moodWord(50, null)], ['Fear', null, null]);
  const before = Array.from({ length: 12 }, (_, i) => ({ m: 'm' + i, score: i * 5 })), x = M.moodRead({ score: 30 }, before);
  ok('a month is ranked against her moods before it, and turns against three months back', [x.pct, x.change, x.ago.m, x.word], [50, -15, 'm9', 'Fear']);
}
function GROWTH_WINDOW_OF(src) { return +/var GROWTH_WINDOW = (\d+);/.exec(src)[1]; }

console.log('\n' + (fail ? fail + ' FAILED, ' : '') + pass + '/' + (pass + fail) + ' passed\n');
process.exit(fail ? 1 : 0);
