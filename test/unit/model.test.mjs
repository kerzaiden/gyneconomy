import test from 'node:test';
import assert from 'node:assert/strict';
import { errors } from './dom.mjs';
import { cycleModel, cycleReturns, cycleStory, diagnoseToday, moodTrack, moodToday } from '../../src/js/model.ts';
import { marketCycles } from '../../src/js/data.ts';
import { sp500MonthlyHistory } from '../../src/js/history-fred.ts';

const SEASONS = ['spring', 'springdeflation', 'summer', 'autumn', 'lateautumn', 'winter'];
const STAGES = ['Despair', 'Depression', 'Hope', 'Optimism', 'Excitement', 'Thrill', 'Euphoria', 'Panic', 'Desperation', 'Fear', 'Denial', 'Anxiety'];

test('the app boots with no error', () => assert.deepEqual(errors, []));

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
