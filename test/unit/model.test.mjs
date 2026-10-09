import test from 'node:test';
import assert from 'node:assert/strict';
import { errors } from './dom.mjs';
import { cycleModel, cycleReturns, cycleStory, diagnoseToday, GNP_TREND, inflationFigure, moodTrack, moodToday, PEAK_TREND, potentialOf, recessionRecord } from '../../src/js/model.ts';
import { potentialYoYHistory } from '../../src/js/history-fred.ts';
import { marketCycles } from '../../src/js/data.ts';
import { sp500MonthlyHistory } from '../../src/js/history-fred.ts';
import { seasonStripHtml } from '../../src/js/dial-cycle.ts';
import { cyclePeak, fedPhases } from '../../src/js/fed-phases.ts';

const SEASONS = ['spring', 'springdeflation', 'summer', 'autumn', 'lateautumn', 'winter'];
const STAGES = ['Despair', 'Depression', 'Hope', 'Optimism', 'Excitement', 'Thrill', 'Euphoria', 'Panic', 'Desperation', 'Fear', 'Denial', 'Anxiety'];

test('the app boots with no error', () => assert.deepEqual(errors, []));

test('the season model reads every NBER recession since 1953, as its (i) says', () => {
  const r = recessionRecord();
  assert.deepEqual([r.from, r.recessions, r.caught, r.total], [1953, 11, 11, 39]);
  assert.ok(r.quarters >= 37 && r.autumn + r.winter >= 37 && r.share < 50, JSON.stringify(r));
});

test('every cycle reads a season, and its track runs without a gap', () => {
  for (const c of marketCycles) {
    const m = cycleModel(c), label = c.from + '–' + (c.to || 'today');
    assert.ok(SEASONS.includes(m.season), label + ' season ' + m.season);
    assert.ok(m.track.length > 0, label + ' has a track');
    m.track.slice(1).forEach((p, i) => assert.equal(p.from, m.track[i].to, label + ' track seam at ' + p.q));
    m.track.forEach(p => assert.ok(SEASONS.includes(p.season), label + ' ' + p.q + ' ' + p.season));
    assert.ok(m.track[m.track.length - 1].to <= m.elapsedYears + 1e-9, label + ' track ends inside the cycle');
  }
});

test('a closed cycle\'s season strip spans its own years, so a season sits under its year', () => {
  for (const c of marketCycles.filter(c => !c.ongoing)) {
    const s = seasonStripHtml(c);
    assert.equal(s.done, (c.to - c.from + 1) * 4, c.name);
    assert.equal(/no season read before/.test(s.strip), cycleModel(c).track[0].from > 0, c.name);
  }
});

test('shrinking output reads as contraction whatever its direction, so 1931 is Winter', () => {
  const all = marketCycles.flatMap(c => cycleModel(c).track);
  all.filter(p => p.reading.gdpLatest.v < 0).forEach(p => assert.equal(p.reading.regime, 'contraction', p.q));
  assert.equal(all.find(p => p.q === '1931 Q1').season, 'winter');
});

test('only the open cycle reaches today, and it ends on now', () => {
  const open = marketCycles.filter(c => c.ongoing);
  assert.equal(open.length, 1);
  const m = cycleModel(open[0]);
  assert.equal(m.track[m.track.length - 1].isNow, true);
  assert.equal(m.season, m.track[m.track.length - 1].season);
});

test('a cycle compounds year by year, and its peak is its best single year', () => {
  for (const c of marketCycles.filter(c => !c.ongoing)) {
    const r = cycleReturns(c.from, c.to), years = Object.keys(r.cumByYear).map(Number);
    let level = 1;
    years.forEach((y, i) => {
      const ret = i ? ((1 + r.cumByYear[y] / 100) / (1 + r.cumByYear[years[i - 1]] / 100) - 1) * 100 : r.cumByYear[y];
      level *= 1 + ret / 100;
      assert.ok(Math.abs((level - 1) * 100 - r.cumByYear[y]) < 1e-9);
    });
    const yearly = years.map((y, i) => i ? (1 + r.cumByYear[y] / 100) / (1 + r.cumByYear[years[i - 1]] / 100) : 1 + r.cumByYear[y] / 100);
    assert.equal(r.peakYear, years[yearly.indexOf(Math.max(...yearly))], c.from + ' peak');
  }
});

test('her mood is a rank from 0 to 100, month by month, on one of the twelve stages', () => {
  const t = moodTrack();
  assert.ok(t.length > 400);
  t.forEach((x, i) => {
    if (i) assert.ok(x.m > t[i - 1].m, 'months run forward at ' + x.m);
    if (x.pct != null) assert.ok(x.pct >= 0 && x.pct <= 100, x.m + ' pct ' + x.pct);
    if (x.word != null) assert.ok(STAGES.includes(x.word), x.m + ' ' + x.word);
  });
});

test('today’s diagnosis is the last S&P month, a stage and a season', () => {
  const d = diagnoseToday();
  assert.equal(d.month, sp500MonthlyHistory[sp500MonthlyHistory.length - 1].m);
  assert.ok(STAGES.includes(d.stage));
  assert.ok(SEASONS.includes(d.season));
  assert.equal(moodToday().word, d.stage);
});

test('a cycle’s story opens before it closes, its high is above its low, and it counts its two commonest feelings', () => {
  let told = 0;
  for (const c of marketCycles) {
    const s = cycleStory(c);
    if (!s) continue;
    told++;
    assert.ok(s.first.m <= s.last.m);
    assert.ok(s.hi.pct >= s.lo.pct);
    assert.ok(s.most.length >= 1 && s.most.length <= 2);
    if (s.most[1]) assert.ok(s.most[0].n >= s.most[1].n);
  }
  assert.ok(told >= 6, told + ' cycles have a story');
});

test('every cycle has a peak: its highest price reading once the decline it inherited has passed', () => {
  assert.deepEqual(cyclePeak('2019-01', '2022-12'), { m: '2022-06', v: 7.22 });
  assert.deepEqual(cyclePeak('2023-01', '2026-09'), { m: '2026-05', v: 3.82 });
  assert.deepEqual(cyclePeak('1970-01', '1974-12'), { m: '1974-11', v: 12.2 });
  assert.deepEqual(cyclePeak('1947-01', '1953-12'), { m: '1951-04', v: 9.6 });
  assert.deepEqual(cyclePeak('1967-01', '1969-12'), { m: '1969-11', v: 5.93 });
  assert.deepEqual(cyclePeak('1991-01', '2002-12'), { m: '1996-12', v: 3.38 });
});

test('the Fed\'s phases alternate, and today\'s move sets the open phase', () => {
  const p = fedPhases();
  p.slice(1).forEach((x, i) => assert.notEqual(x.s, p[i].s, x.m));
  assert.deepEqual(p[p.length - 1], { m: '2026-09', s: 1 });
});

test('potential is the 1929–48 peak trend before CBO and CBO\'s last quarter after it, as the decisions say', () => {
  const first = potentialYoYHistory[0], last = potentialYoYHistory[potentialYoYHistory.length - 1];
  assert.equal(PEAK_TREND.toFixed(2), '3.46');
  assert.deepEqual([first.q, potentialOf('1949 Q4'), potentialOf(first.q), potentialOf('2099 Q1')], ['1950 Q1', PEAK_TREND, first.v, last.v]);
});

test('before 1948 a season is read every quarter from Balke and Gordon\'s GNP, against its own 1929–48 trend', () => {
  assert.equal(GNP_TREND.toFixed(2), '2.34');
  const seasons = {};
  for (const c of marketCycles) for (const s of cycleModel(c).track) seasons[s.q] = s.reading.season;
  assert.deepEqual(['1937 Q1', '1937 Q2', '1937 Q3', '1937 Q4', '1938 Q1'].map(q => seasons[q]), ['summer', 'summer', 'summer', 'lateautumn', 'winter']);
  assert.deepEqual([Object.keys(seasons).filter(q => q < '1948 Q1').length, Object.keys(seasons).sort()[0]], [80, '1928 Q1']);
});

test('a reading past the band never prints as the band\'s edge', () => {
  assert.deepEqual([3.04, 2.96, 3.4, 0.96, 1.04, -0.04, -1.26].map(inflationFigure), ['3.04', '3.0', '3.4', '0.96', '1.0', '0.0', '\u22121.3']);
});

test('every cycle explains the phases under the chart and tells its rates story with its peak month read from the record, tightening shaded, no strip, the levels labelled and the rate named for its series', async () => {
  const { fedEnvironment, ratesStory } = await import('../../src/js/fed-phases.ts');
  const host = document.createElement('div');
  const notes = new Set();
  for (const c of marketCycles) {
    assert.match(c.rates, /\{month\}/, c.name);
    host.innerHTML = fedEnvironment(cycleModel(c));
    const note = host.querySelector('.fp-note');
    assert.ok(note && /Learn more$/.test(note.textContent.trim()), c.name);
    notes.add(note.textContent);
    const story = ratesStory(c);
    assert.ok(story.length > 40 && !/[{}]/.test(story), c.name + ' story');
    assert.equal(host.querySelectorAll('.fp-plot .fp-strip').length, 0, c.name + ' no strip');
    assert.ok(host.querySelectorAll('.fp-plot .fp-band').length <= fedPhases().filter(p => p.s > 0).length, c.name + ' bands');
    const levels = [...host.querySelectorAll('.fp-plot .fp-level-tag')].map(t => t.textContent);
    assert.ok(levels.length && levels.every(t => /^\u2212?\d+%$/.test(t)), c.name + ' level labels ' + levels);
    const legend = [...host.querySelectorAll('.fp-legend li')].map(li => li.textContent).join('|');
    assert.equal(legend, 'Easing|Tightening|Rates|Prices', c.name + ' legend');
  }
  assert.equal(notes.size, 1);
});
