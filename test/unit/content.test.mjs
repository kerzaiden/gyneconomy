import test from 'node:test';
import assert from 'node:assert/strict';
import { errors, window } from './dom.mjs';
import { ui } from '../../src/js/dom.ts';
import { refreshLiveData, liveApplied, forgetLive, READINGS } from '../../src/js/live.ts';
import { now, capeHistory, fedFundsRange, labRow, m2vHistory, m2Yoy, unempHistory, unempSahm, sahmOf, M2_PACE_LO, M2_PACE_HI, M2_FLOOD, PULSE_PRE2008, PULSE_STEADY_LO, PULSE_STEADY_HI, PULSE_FLOOR, PULSE_CEIL, SAV_THIN, SAV_LOW, SAV_MID, SAHM_TRIGGER } from '../../src/js/data.ts';
import { cpiYoYHistory, gdpQuarterlyYoY } from '../../src/js/refresh-season.ts';
import { rowReadings, volumeVerdict, laborWord, temperatureWord, unempState } from '../../src/js/readings.ts';
import { ROSTER } from '../../src/js/roster.ts';
import { grossDebtQuarterly, productivityHistory, confidenceHistory, durablesHistory, premiumHistory } from '../../src/js/history-fred.ts';
import { HIST_NOTE } from '../../src/js/history.ts';
import { nowModel, seasonGroup, growthWord, cycleNowNote } from '../../src/js/model.ts';
import { fmtSigned, seasonName } from '../../src/js/format.ts';

const card = sheet => document.querySelector('[data-open="' + sheet + '"]');
const value = sheet => card(sheet).querySelector('.ci-value').firstChild.nodeValue;
const tag = sheet => card(sheet).querySelector('.tag').textContent;
const when = sheet => card(sheet).querySelector('.ci-when').textContent;
const word = sheet => card(sheet).querySelector('.ci-word').textContent;

async function deliver(docs) {
  window.claude = { use: () => Promise.resolve({ doc: path => ({ get: () => {
    const d = docs[path.slice(5)];
    return d ? Promise.resolve({ data: d }) : Promise.reject(new Error('none'));
  } }) }) };
  refreshLiveData();
  for (let i = 0; i < 5; i++) await new Promise(r => setTimeout(r, 0));
  delete window.claude;
}

const last = a => a[a.length - 1];
const r1 = v => (Math.round(v * 10) / 10).toFixed(1);

test('each card prints the last value of its own record', () => {
  const want = {
    'sheet-metric-temp': r1(last(cpiYoYHistory).v) + '%',
    'sheet-metric-gdp': (last(gdpQuarterlyYoY).v >= 0 ? '+' : '\u2212') + r1(Math.abs(last(gdpQuarterlyYoY).v)) + '%',
    'sheet-sign-pulse': last(m2vHistory).toFixed(2) + '\u00d7',
    'sheet-sign-activity': r1(last(unempHistory).v) + '%',
    'sheet-sign-productivity-growth': r1(last(productivityHistory).v) + '%',
    'sheet-sign-desire': fmtSigned(last(durablesHistory).v, 1) + '%',
    'sheet-sign-premium': fmtSigned(last(premiumHistory).v, 1) + '%',
    'sheet-sign-confidence': r1(last(confidenceHistory).v),
    'sheet-metric-debt': r1(last(grossDebtQuarterly).v) + '%'
  };
  for (const [sheet, v] of Object.entries(want)) assert.equal(value(sheet), v, sheet);
});

const BANDS = {
  'CBOE VIX': { lte: 20 }, 'Shiller CAPE': { lte: 17 }, 'Buffett indicator': { lte: 80 },
  Desire: { gte: 0 }, 'Equity risk premium': { gte: 0 }, Pulse: { from: 1.6975, to: 2.1365 }, Volume: { from: 3.4, to: 10.3 }, Activity: { from: 3.5, to: 5 },
  Temperature: { from: 1, to: 3 }, 'Productivity growth': { gte: 1.3 }, Confidence: { gte: 100 }, 'S&P 500': { gte: 0 },
  'sheet-metric-debt': { lte: 70 }, 'sheet-metric-interest': { lte: 2 }, 'sheet-marker-deficit': { lte: 3.8 }
};

function bands() {
  const out = {}, seen = new Set();
  const walk = o => {
    if (!o || typeof o !== 'object' || seen.has(o)) return;
    seen.add(o);
    if (o.meter && o.meter.optimal) { const { label, ...b } = o.meter.optimal; out[o.bodyTerm || o.marker || o.id] = { b, label }; }
    Object.values(o).forEach(walk);
  };
  walk(now); walk(rowReadings()); ROSTER.forEach(R => walk(labRow(R.id)));
  return out;
}

test('every band is the one pinned here, and its label says the same numbers', () => {
  const got = bands();
  assert.deepEqual(Object.fromEntries(Object.entries(got).map(([k, v]) => [k, v.b])), BANDS,
    'a band moved: change it with Keren\u2019s decision, then the pin');
  for (const [k, { b, label }] of Object.entries(got)) {
    const nums = label.match(/\d+(\.\d+)?/g).map(Number);
    const vals = Object.values(b);
    assert.equal(nums.length, vals.length, k + ' label ' + label);
    nums.forEach((n, i) => assert.ok(Math.abs(n - vals[i]) <= 0.05, k + ' label ' + label + ' vs ' + vals[i]));
  }
});

test('Pulse reads Steady exactly where its band is drawn', () => {
  const pulse = rowReadings().find(r => r.bodyTerm === 'Pulse'), o = pulse.meter.optimal, was = pulse.meter.value;
  const at = v => { pulse.meter.value = v; window.__GYN.render(); return pulse.tag.text; };
  assert.deepEqual([at(o.from - 0.001), at(o.from), at(o.to), at(o.to + 0.001)], ['Slow', 'Steady', 'Steady', 'Fast']);
  at(was);
});

test('the labor and temperature words turn at their bands, and the cards follow the record', () => {
  assert.deepEqual([3.4, 3.5, 5, 5.1].map(v => laborWord(v).text), ['Tight', 'Solid', 'Solid', 'Slack']);
  assert.deepEqual([3.4, 3.5, 5.1, 9].map(v => laborWord(v).state), ['warning', 'good', 'warning', 'warning']);
  assert.deepEqual([[4.5, 0.9], [5.1, 0.49], [5.1, 0.5], [9, null]].map(([v, s]) => unempState(v, s)), ['good', 'warning', 'serious', 'warning']);
  assert.deepEqual([0.9, 1, 3, 3.1].map(v => temperatureWord(v).text), ['Running cold', 'Warm', 'Warm', 'Running hot']);
  const u = unempHistory.filter(d => d.v != null);
  assert.equal(tag('sheet-sign-activity'), laborWord(u[u.length - 1].v).text);
  assert.equal(rowReadings().find(r => r.bodyTerm === 'Temperature').tag.text, temperatureWord(cpiYoYHistory[cpiYoYHistory.length - 1].v).text);
});

test('every derived cut-off is computed from its own record (Keren: convention or the cycle data)', () => {
  const m2v = m2vHistory.slice(0, 196), m2 = m2Yoy.slice(4, 244);
  assert.deepEqual([PULSE_PRE2008, PULSE_PRE2008 * PULSE_STEADY_LO, PULSE_PRE2008 * PULSE_STEADY_HI, PULSE_PRE2008 * PULSE_FLOOR, PULSE_PRE2008 * PULSE_CEIL].map(v => +v.toFixed(3)),
    [1.857, 1.698, 2.136, 1.652, 2.192]);
  assert.deepEqual([M2_PACE_LO, M2_PACE_HI, M2_FLOOD], [3.4, 10.3, 13.5]);
  assert.equal(Math.max(...m2).toFixed(1), String(M2_FLOOD));
  assert.deepEqual([SAV_THIN, SAV_LOW, SAV_MID], [3.3, 4.5, 8.75]);
  assert.equal(SAHM_TRIGGER, 0.5);
  assert.equal(Math.max(...m2v), PULSE_PRE2008 * PULSE_CEIL);
  assert.equal(rowReadings().find(r => r.bodyTerm === 'Pulse').tag.text, 'Very slow');
});

test('the Sahm rule reads the three-month average against its low of the twelve months before', () => {
  const i = unempHistory.findIndex(d => d.m === '2020-04');
  assert.ok(unempSahm[i] > 3, 'April 2020 triggers');
  assert.ok(unempSahm[unempHistory.findIndex(d => d.m === '2019-06')] < 0.5, 'mid-2019 does not');
  assert.equal(sahmOf('2020-04'), unempSahm[i]);
});

test('the Volume verdict turns at the edges of her pace', () => {
  const at = g => volumeVerdict(g).text;
  assert.deepEqual([at(-0.1), at(M2_PACE_LO - 0.01), at(M2_PACE_LO), at(M2_PACE_HI - 0.01), at(M2_PACE_HI)],
    ['Draining', 'Thin', 'Steady', 'Steady', 'Filling']);
  assert.deepEqual([at(M2_FLOOD), at(M2_FLOOD + 0.01)], ['Filling', 'Flooding']);
});

const FED = { kind: 'object', lo: 3.75, hi: 4, lastMove: '+0.25', lastMoveLabel: 'raised a quarter point', asOf: 'Sep 16, 2026', next: 'Oct 28, 2026' };

test('the Fed card prints the one Fed funds range', () => {
  assert.equal(value('sheet-sign-hormones'), fedFundsRange());
  assert.equal(tag('sheet-sign-hormones'), 'Tightening');
});

test('the Diagnosis names the model’s season', () => {
  const head = document.querySelector('#diagnosis .trend-head').textContent;
  assert.match(head, new RegExp(' in ' + seasonName(seasonGroup(nowModel.season)) + '$'));
});

test('a live Fed cut reaches every door, its tag and the policy facts', async () => {
  await deliver({ fedFunds: { ...FED, lo: 3.5, hi: 3.75, lastMove: '-0.25', lastMoveLabel: 'cut a quarter point' } });
  assert.equal(now.fedFunds.lo, 3.5);
  const doors = [...document.querySelectorAll('[data-open="sheet-sign-hormones"]')];
  assert.ok(doors.length >= 2);
  doors.forEach(d => assert.match(d.textContent, /3\.50–3\.75%/));
  assert.equal(tag('sheet-sign-hormones'), 'Easing');
  assert.match(document.getElementById('policy-facts').textContent, /3\.50–3\.75%/);
});

test('a live document carrying markup is refused and changes nothing', async () => {
  const before = value('sheet-sign-hormones');
  await deliver({ fedFunds: { ...FED, lo: 5, hi: 5.25, lastMoveLabel: '<img src=x onerror=alert(1)>' } });
  assert.equal(value('sheet-sign-hormones'), before);
  assert.ok(!/onerror/.test(liveApplied.fedFunds || ''));
});

test('a live VIX close reaches the Volatility card; one outside its band is refused', async () => {
  await deliver({ vixClose: { kind: 'scalar', value: 31.7, asOf: '2026-10-01' } });
  assert.equal(value('sheet-sign-sentiment'), '31.7');
  assert.equal(String(now.vixRow.flagValue), '31.7');
  assert.equal(tag('sheet-sign-sentiment'), 'Fearful');
  await deliver({ vixClose: { kind: 'scalar', value: 9999, asOf: '2026-10-02' } });
  assert.equal(value('sheet-sign-sentiment'), '31.7');
});

test('a live yield curve moves the 10-year figure on the Pressure card', async () => {
  const rows = now.yieldCurve.map(r => r.m === '10Y' ? { ...r, y: 4.44 } : r);
  await deliver({ yieldCurve: { kind: 'series', rows, asOf: READINGS.yieldCurve.fileAsOf() } });
  assert.equal(value('sheet-sign-pressure'), '4.44%');
});

test('a live CAPE reaches the Valuations card, and a high-yield spread left in the database is ignored', async () => {
  const desire = value('sheet-sign-desire');
  await deliver({ capeValue: { kind: 'scalar', value: 35.2, asOf: '2026-10-01' }, hyOasNow: { kind: 'scalar', value: 4.1, asOf: '2026-10-01' } });
  assert.equal(value('sheet-metric-valuation'), '35.2×');
  assert.equal(value('sheet-sign-desire'), desire);
  assert.equal(capeHistory[capeHistory.length - 1].v, 35.2, 'the CAPE history takes the live figure too');
  assert.deepEqual(errors, []);
});

test('the debt card reads the last backfilled quarter', () => {
  const last = grossDebtQuarterly[grossDebtQuarterly.length - 1], row = labRow('sheet-metric-debt');
  assert.equal(row.meter.value, Math.round(last.v * 10) / 10);
  assert.equal(row.flagValue, row.meter.value.toFixed(1) + '%');
  assert.match(row.shortNote, new RegExp('^' + last.q.replace(/(\d{4}) (Q\d)/, '$2 $1')));
  assert.match(row.note, new RegExp("Today's " + row.meter.value.toFixed(1) + '%'));
  assert.ok(!/\{\w+\}/.test(row.note));
});

test('a newer live document dates its card with its own day', async () => {
  const next = new Date(Date.parse(READINGS.yieldCurve.fileAsOf()) + 3 * 864e5), iso = next.toISOString().slice(0, 10);
  await deliver({ yieldCurve: { kind: 'series', rows: now.yieldCurve, asOf: iso } });
  assert.equal(when('sheet-sign-pressure'), next.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }));
});

test('a dated document whose day is not ISO is refused', async () => {
  const before = when('sheet-sign-sentiment');
  await deliver({ vixClose: { kind: 'scalar', value: 20, asOf: 'Dec 31, 2099' } });
  assert.equal(when('sheet-sign-sentiment'), before);
  assert.notEqual(liveApplied.vixClose && JSON.parse(liveApplied.vixClose).asOf, 'Dec 31, 2099');
});

test('a live document that would break the page is refused and not kept', async () => {
  const before = value('sheet-sign-sentiment');
  await deliver({ sentiment: { kind: 'object', rows: [{ marker: 'CBOE VIX' }] } });
  await deliver({ yieldCurve: { kind: 'series', rows: now.yieldCurve.filter(r => r.m !== '10Y') } });
  await deliver({ yieldCurve: { kind: 'series', rows: now.yieldCurve.map(r => r.m === '10Y' ? { ...r, y: 52.8 } : r) } });
  assert.equal(value('sheet-sign-sentiment'), before);
  assert.notEqual(value('sheet-sign-pressure'), '52.80%');
  assert.ok(!/CBOE VIX"\}\]/.test(localStorage.getItem('gyn.live') || ''));
});

test('a live panel missing a row the page reads is refused, and an older figure never replaces the file', async () => {
  const cape = now.valuation.rows[0], vix = value('sheet-sign-sentiment');
  await deliver({ valuation: { kind: 'object', rows: [cape] } });
  assert.equal(now.valuation.rows.length, 2);
  await deliver({ valuation: { kind: 'object', rows: now.valuation.rows.map(r => ({ ...r, note: undefined })) } });
  assert.ok(now.valuation.rows.every(r => typeof r.note === 'string'));
  await deliver({ vixClose: { kind: 'scalar', value: 77.7, asOf: '2001-01-02' } });
  assert.equal(value('sheet-sign-sentiment'), vix);
  assert.ok(!/77\.7/.test(localStorage.getItem('gyn.live') || ''));
});

test('a good boot clears the one-reload guard', () => {
  assert.equal(sessionStorage.getItem('gyn.forgot'), null);
});

test('a live CAPE reaches every Valuations door with its verdict word', async () => {
  const doors = () => [...document.querySelectorAll('[data-open="sheet-metric-valuation"]')].map(d => (d.querySelector('.ci-value, .subject-value') || {}).firstChild?.nodeValue.trim());
  await deliver({ capeValue: { kind: 'scalar', value: 18, asOf: '2026-10-05' } });
  assert.equal(word('sheet-metric-valuation'), 'Fairly valued');
  await deliver({ capeValue: { kind: 'scalar', value: 35.2, asOf: '2026-10-06' } });
  assert.equal(word('sheet-metric-valuation'), 'Highly overvalued');
  assert.ok(doors().length >= 1 && doors().every(t => /^35\.2/.test(t)), JSON.stringify(doors()));
});

test('a new Fed range without its move clears the old move and the next date, and the note follows', async () => {
  await deliver({ fedFunds: { kind: 'object', lo: 3.25, hi: 3.5 } });
  assert.equal(now.fedFunds.lastMove, '');
  assert.equal(now.fedFunds.next, '');
  assert.match(HIST_NOTE['hormones-range'](), /Target 3\.25–3\.50%;/);
});

test('the policy facts say how the latest move sits in the run of moves', async () => {
  await deliver({ fedFunds: { ...FED, lo: 3.5, hi: 3.75, lastMove: '-0.25', asOf: 'Oct 28, 2026', turnLabel: 'First cut since', turnValue: '2024' } });
  assert.match(document.getElementById('policy-facts').textContent, /First cut since2024/);
  await deliver({ fedFunds: { ...FED, lo: 3.25, hi: 3.5, lastMove: '-0.25', asOf: 'Dec 9, 2026' } });
  assert.doesNotMatch(document.getElementById('policy-facts').textContent, /since/);
});

test('Growth’s word and Weather’s opening line follow the model', () => {
  const w = growthWord(nowModel.reading);
  assert.equal(word('sheet-metric-gdp').toLowerCase(), nowModel.reading.regime);
  assert.equal(w, nowModel.reading.regime === 'contraction' ? 'contracting' : 'expanding');
  assert.match(cycleNowNote(nowModel), new RegExp({ contracting: 'contracting', expanding: 'expanding' }[w]));
});

test('a boot failure with no stored documents is not swallowed', () => {
  localStorage.removeItem('gyn.live');
  assert.throws(() => forgetLive(new Error('boot')), /boot/);
});

test('a cycle older than a record leaves that card blank and says why', () => {
  document.querySelector('#cycle-list .era-row[data-era="1928"]').click();
  const items = [...document.querySelectorAll('.cat-sheet .cat-item[data-open]:not([data-preview])')].map(n => ({
    open: n.dataset.open, val: n.querySelector('.ci-value').textContent.trim(), word: (n.querySelector('.ci-word') || {}).textContent || '' }));
  const blank = items.filter(i => i.val === '\u2014');
  ui.eraPageBack();
  assert.ok(blank.length > 0 && blank.some(i => i.open === 'sheet-sign-confidence'), JSON.stringify(blank));
  assert.ok(blank.every(i => /^Not measured before |^No history in the app$/.test(i.word)), JSON.stringify(blank));
  assert.deepEqual(errors, []);
});

test('a past cycle shows its own record on the cards and the Diagnosis, and Back restores today', () => {
  const temp = () => document.querySelector('.cat-sheet .cat-item[data-open="sheet-metric-temp"]').textContent;
  const today = temp(), head = document.querySelector('#diagnosis .trend-head').textContent;
  document.querySelector('#cycle-list .era-row[data-era="2009"]').click();
  assert.equal(ui.eraOpen.name, 'Big Tech Cycle');
  assert.equal(document.querySelector('#diagnosis .trend-head').textContent, 'Cycle story');
  assert.match(temp(), /Dec 2018/);
  ui.eraPageBack();
  assert.equal(ui.eraOpen, null);
  assert.equal(document.querySelector('#diagnosis .trend-head').textContent, head);
  assert.equal(temp(), today);
  assert.deepEqual(errors, []);
});

test('each category page opens on its analysis, which follows the cycle on screen', async () => {
  const { criticalR } = await import('../../src/js/category-analysis.ts');
  assert.equal(criticalR(14).toFixed(3), '0.532');
  assert.equal(criticalR(2), 2);
  const say = key => document.querySelector('#sheet-cat-' + key + ' .cat-list > .cat-analysis .ca-say').textContent;
  for (const key of ['weather', 'mood', 'circulation', 'energy']) {
    const box = document.querySelector('#sheet-cat-' + key + ' .cat-list').firstElementChild;
    assert.ok(box.classList.contains('cat-analysis'), key);
    assert.match(box.querySelector('.ca-name').textContent, / analysis$/);
    assert.ok(box.querySelector('svg .ca-line.now'), key);
    assert.match(say(key), /^Since the AI Cycle opened, .+ out of 100\./);
  }
  assert.equal(document.querySelectorAll('.cat-sheet .insights, .cat-sheet .hi-head').length, 0);
  document.querySelector('#sheet-cat-mood .cat-analysis .more-row').click();
  const body = document.getElementById('detail-modal-body');
  assert.match(body.textContent, /She\u2019s in /);
  assert.match(body.textContent, /How the analysis reads/);
  document.getElementById('detail-modal-close').click();
  document.querySelector('#cycle-list .era-row[data-era="2009"]').click();
  assert.match(say('energy'), /^Across the Big Tech Cycle, /);
  ui.eraPageBack();
  assert.match(say('energy'), /^Since the AI Cycle opened, /);
  assert.deepEqual(errors, []);
});

test('a live figure repaints exactly the cards whose roster row declares it', async () => {
  const cards = () => Object.fromEntries([...document.querySelectorAll('.cat-sheet .cat-item[data-open]:not([data-preview])')]
    .map(n => [n.dataset.open, n.querySelector('.ci-value').textContent]));
  const docs = {
    fedFunds: { ...FED, lo: 4.25, hi: 4.5, lastMove: '+0.50', asOf: 'Dec 9, 2026' },
    yieldCurve: { kind: 'series', rows: now.yieldCurve.map(r => r.m === '10Y' ? { ...r, y: 4.77 } : r), asOf: '2026-12-09' },
    vixClose: { kind: 'scalar', value: 41.3, asOf: '2026-12-09' },
    capeValue: { kind: 'scalar', value: 22.2, asOf: '2026-12-01' }
  };
  for (const [name, doc] of Object.entries(docs)) {
    const was = cards();
    await deliver({ [name]: doc });
    const got = cards(), moved = Object.keys(got).filter(k => got[k] !== was[k]).sort();
    assert.deepEqual(moved, ROSTER.filter(R => (R.live || []).includes(name)).map(R => R.id).filter(id => id in got).sort(), name);
  }
});
