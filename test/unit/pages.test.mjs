import test from 'node:test';
import assert from 'node:assert/strict';
import { errors, bootWarnings, window } from './dom.mjs';
import { sheetRenderers } from '../../src/js/render-core.ts';
import { CATEGORIES, ROSTER } from '../../src/js/roster.ts';
import { page, pickerOpen } from '../../src/js/history.ts';
import { cycleByName } from '../../src/js/model.ts';
import { histFrame } from '../../src/js/charts.ts';
import { cpiHistoryChart, gdpHistoryChart, unempHistoryChart, fedFundsHistoryChart, m2GrowthChart, deficitChart } from '../../src/js/history-charts.ts';
import { pulseStripsChart, pulseBeat } from '../../src/js/pulse-strips.ts';
import { M2V_FROM_YEAR } from '../../src/js/data.ts';

const BROKEN = ['NaN', 'undefined', 'Infinity', '[object Object]'];
const broken = html => BROKEN.filter(b => html.includes(b));
const WIDTHS = [320, 390, 768, 1280];

test('the app boots with no self-check warning', () => {
  assert.deepEqual(bootWarnings, []);
});

test('every reading in the roster has a page that draws it', () => {
  for (const R of ROSTER) {
    assert.equal(typeof sheetRenderers[R.id], 'function', R.name + ' has no renderer');
    assert.equal(page.head[R.hk || R.id].title, R.head, R.name + ' head');
  }
});

for (const id of Object.keys(sheetRenderers)) {
  test('page ' + id + ' draws at every width with no broken value', () => {
    for (const W of WIDTHS) {
      sheetRenderers[id](W);
      const host = document.getElementById(id) || document.getElementById((ROSTER.find(R => R.hk === id) || {}).id) || document.body;
      assert.deepEqual(broken(host.innerHTML), [], id + ' at ' + W + 'px');
    }
    assert.deepEqual(errors, []);
  });
}

test('every history chart on a page sits in the one frame', () => {
  for (const W of WIDTHS) {
    Object.values(sheetRenderers).forEach(draw => draw(W));
    const svgs = [...document.querySelectorAll('svg.vh-svg')];
    assert.ok(svgs.length >= 6);
    svgs.forEach(s => {
      const [, , w, h] = s.getAttribute('viewBox').split(' ').map(Number);
      if (/heartbeat, one strip per year/.test(s.getAttribute('aria-label'))) assert.ok(w === histFrame(w).W && h > 0, 'the Pulse strips take the frame width');
      else assert.equal(h, histFrame(w).H, s.getAttribute('aria-label'));
    });
  }
});

const CHARTS = { cpiHistoryChart, gdpHistoryChart, unempHistoryChart, fedFundsHistoryChart, m2GrowthChart,
  deficitChart, pulseStripsChart: W => pulseStripsChart(W, 250) };
for (const [name, chart] of Object.entries(CHARTS)) {
  test(name + ' is drawn to the frame it is given, with every value readable', () => {
    for (const W of WIDTHS) {
      const svg = chart(W);
      const f = histFrame(W), vb = /viewBox="0 0 (\d+) (\d+)"/.exec(svg);
      assert.ok(vb, name + ' has a viewBox');
      if (name === 'pulseStripsChart') assert.ok(+vb[1] === f.W && +vb[2] > 0, name + ' takes the frame width at ' + W);
      else assert.deepEqual([+vb[1], +vb[2]], [f.W, f.H], name + ' at ' + W);
      assert.deepEqual(broken(svg), [], name + ' at ' + W);
      assert.match(svg, /aria-label="[^"]{12,}"/, name + ' names itself for a screen reader');
    }
  });
}

test('the Pulse strips flatline only the quarters whose fall was far out of the record', () => {
  const q = (y, n) => (y - M2V_FROM_YEAR) * 4 + n - 1;
  assert.equal(pulseBeat(q(2020, 2)), 'flat');
  assert.equal(pulseBeat(q(2008, 4)), 'flat');
  assert.equal(pulseBeat(q(2023, 1)), 'odd');
  assert.equal(pulseBeat(q(2025, 1)), '');
  const svg = pulseStripsChart(390, q(2019, 1), q(2021, 4) + 1);
  assert.equal((svg.match(/class="ps-beat hcol flat"/g) || []).length, 1);
  assert.equal((svg.match(/class="ps-beat hcol/g) || []).length, 12);
});

test('every history chart is reachable by keyboard and keeps its live region when redrawn', () => {
  for (let k = 0; k < 2; k++) Object.values(sheetRenderers).forEach(draw => draw(390));
  const hosts = [...document.querySelectorAll('*')].filter(h => h.__geom);
  assert.ok(hosts.some(h => h.__geom.src === 'spreadHistory'), 'Horizon is a history chart');
  hosts.forEach(h => {
    assert.equal(h.getAttribute('tabindex'), '0', h.__geom.src);
    assert.equal(h.querySelectorAll(':scope > .sr-only[aria-live]').length, 1, h.__geom.src);
  });
});

test('the cycle picker offers only the cycles a chart has years for', () => {
  for (const id of Object.keys(page.y0)) {
    if (!sheetRenderers[id]) continue;
    page.mode[id] = 'cycles'; pickerOpen[id] = true; sheetRenderers[id](390);
    const opts = [...document.querySelectorAll('[data-cycles-for="' + id + '"] .cycsel-opt')];
    opts.forEach(o => assert.ok(cycleByName(o.getAttribute('data-cycle')).from >= page.y0[id], id + ' offers ' + o.getAttribute('data-cycle')));
    pickerOpen[id] = false; page.mode[id] = 'calendar'; sheetRenderers[id](390);
  }
});

test('Escape closes only the cycle picker, and arrow keys move along the window tabs', () => {
  const id = 'deficit-range', key = (type, k, el) => (el || document).dispatchEvent(new KeyboardEvent(type, { key: k, bubbles: true, cancelable: true }));
  page.mode[id] = 'cycles'; sheetRenderers[id](390);
  document.querySelector('[data-cycles-for="' + id + '"] [data-picker-toggle]').click();
  assert.equal(pickerOpen[id], true);
  key('keydown', 'Escape');
  assert.equal(pickerOpen[id], false);
  page.mode[id] = 'calendar'; sheetRenderers[id](390);
  const segs = () => [...document.querySelectorAll('[data-range-for="' + id + '"] .range-seg')];
  const at = segs().findIndex(s => s.classList.contains('on'));
  assert.deepEqual(segs().map(s => s.tabIndex).filter(t => t === 0).length, 1);
  key('keydown', 'ArrowRight', segs()[at]);
  assert.equal(page.range[id], segs()[(at + 1) % segs().length].getAttribute('data-range'));
});

test('every repeatable step converges, and GYN.render() leaves the page as it found it', () => {
  const G = window.__GYN, norm = h => h.replace(/viewBox="0 0 \d+ /g, 'viewBox="0 0 W '), failed = [];
  for (const s of G.repeatable()) {
    let err = '';
    try { s.fn(); } catch (e) { err = String(e).slice(0, 70); }
    const settled = norm(document.body.innerHTML);
    try { if (!err) s.fn(); } catch (e) { err = String(e).slice(0, 70); }
    if (err) failed.push(s.name + ' threw ' + err);
    else if (settled !== norm(document.body.innerHTML)) failed.push(s.name + ' moved');
  }
  const before = norm(document.body.innerHTML);
  G.render();
  assert.deepEqual(failed, []);
  assert.equal(norm(document.body.innerHTML), before);
});

test('every history chart is attached to its readout, so hover and keys reach it', () => {
  let seen = 0;
  const loose = Object.keys(sheetRenderers).flatMap(id => {
    sheetRenderers[id](390);
    const svgs = [...document.querySelectorAll('svg.vh-svg')];
    seen += svgs.length;
    return svgs.filter(svg => { for (let n = svg.parentElement; n; n = n.parentElement) if (n.__geom) return false; return true; })
      .map(svg => id + ': ' + svg.getAttribute('aria-label').slice(0, 40));
  });
  assert.ok(seen > 10, seen + ' charts');
  assert.deepEqual(loose, []);
});

test('every cycle page opens its Weather Report: today an edition with risk factors and six elements, a closed cycle its story and its own risk factors', async () => {
  const { renderDiagnosis } = await import('../../src/js/diagnosis.ts');
  const { cycleModel, nowModel } = await import('../../src/js/model.ts');
  const { riskLabs } = await import('../../src/js/cycle-analysis.ts');
  const { marketCycles, now } = await import('../../src/js/data.ts');
  const { todayFace } = await import('../../src/js/reading.ts');
  const { ROSTER_BY } = await import('../../src/js/roster.ts');
  const card = () => document.querySelector('#diagnosis .trend-card');
  const sheet = () => document.getElementById('sheet-report');
  const home = document.getElementById('chart-home');
  const heads = el => [...el.querySelectorAll('.dx-sys-head, .trend-head')].map(h => h.textContent);
  const open = () => { card().click(); sheetRenderers['sheet-report'](); return sheet(); };
  const risksOf = c => riskLabs(marketCycles.indexOf(c)).map(l => l.name).sort();
  const ranked = el => [...el.querySelectorAll('.ai-rank > span')].map(s => s.firstChild.textContent.trim()).sort();
  page.cycles['chart-home'] = nowModel.era.name; sheetRenderers['chart-home']();
  assert.deepEqual([...home.querySelectorAll('.dx-sys-head')].map(h => h.textContent), ['Cycle Statistics', 'Interest Rates', 'Elements']);
  assert.equal(card().querySelector('.wr-head').textContent, now.report.headline);
  const today = open();
  assert.deepEqual(heads(today), ['Risk Factors', ...CATEGORIES.slice().sort((a, b) => a.shown - b.shown).map(c => c.title), 'Cycle Story']);
  assert.equal(today.querySelector('.wr-title').textContent, now.report.headline);
  assert.ok(today.textContent.includes(now.report.story));
  assert.ok(risksOf(nowModel.era).length > 0);
  assert.deepEqual(ranked(today), risksOf(nowModel.era));
  assert.ok([...today.querySelectorAll('.ai-rank > small')].every(x => /^((Highest|Lowest) on record, which starts in|(Highest|Lowest) since|Its (high|low) since|(Above|Below) every (quarterly|monthly|yearly) reading since|No (quarterly|monthly|yearly) reading has been this (high|low) since) /.test(x.textContent)), 'each risk factor says where it stands in its own record');
  const ten = [...today.querySelectorAll('.ai-rank')].find(b => b.textContent.startsWith('US 10-year Treasury'));
  assert.equal(ten.querySelector('b').textContent, todayFace(ROSTER_BY['sheet-sign-pressure']).text, 'one figure, one number: the risk factor reads today’s close');
  const links = [...today.querySelectorAll('.wr-link')];
  assert.ok(links.length >= 12 && links.every(a => ROSTER_BY[a.dataset.open] && a.dataset.title === ROSTER_BY[a.dataset.open].name), 'every link opens its reading');
  assert.equal(today.querySelector('.ai-pic .more-row').dataset.indCycle, nowModel.era.name);
  today.querySelector('.ai-pic .more-row[data-ind-tier="borderline"]').click();
  sheetRenderers['sheet-find']();
  const left = [...document.querySelectorAll('#sheet-find .lab-item')].filter(li => !li.hidden);
  assert.ok(left.length && left.every(li => li.classList.contains('t-borderline')), 'a risk factor opens Elements on its tier');
  assert.equal(document.querySelector('#sheet-find .labs > .lab-box ~ .trend-card'), null, 'no element carries its own insights');
  assert.deepEqual(broken(today.innerHTML), []);
  for (const c of marketCycles.filter(c => !c.ongoing)) {
    renderDiagnosis(cycleModel(c));
    assert.equal(card().querySelector('.ai-clamp').textContent, c.blurb, c.name);
    const past = open();
    assert.deepEqual(heads(past).filter(h => h !== 'Risk Factors'), ['Cycle Story'], c.name);
    assert.equal(past.querySelector('.wr-title').textContent, c.name);
    assert.equal(past.querySelectorAll('.ai-rank').length, ranked(past).filter(n => risksOf(c).includes(n)).length, c.name + ' risks');
    assert.deepEqual(broken(past.innerHTML), [], c.name);
  }
  renderDiagnosis(nowModel);
  page.cycles['chart-home'] = null; sheetRenderers['chart-home']();
});

test('the shipped edition passes the routine’s own check, and the check catches a forecast, a stray link and a figure the app does not show', async () => {
  const { check } = await import('../../tools/report.mjs');
  const { now } = await import('../../src/js/data.ts');
  const F = { categories: CATEGORIES.map(c => c.key), ids: ROSTER.map(R => R.id), numbers: null };
  const doc = { kind: 'object', ...now.report };
  assert.deepEqual(check(doc, F), []);
  const bad = { ...doc, lede: 'Rates will rise.', elements: { ...doc.elements, mood: 'See [Fear](sheet-nope).' } };
  assert.deepEqual(check(bad, F).map(b => b.split(' ')[0] + ' ' + b.split(' ')[1]), ['lede forecasts:', 'element mood']);
  assert.deepEqual(check({ ...doc, headline: 'Prices at 9.9%, the S&P 500 in Q2 2026' }, { ...F, numbers: ['3.4'] }).filter(b => b.startsWith('headline')), ['headline says 9.9, which no figure in the app shows']);
});

test('every cycle page, open or closed, is built in one shape', async () => {
  const { renderDiagnosis } = await import('../../src/js/diagnosis.ts');
  const { cycleModel, nowModel } = await import('../../src/js/model.ts');
  const { marketCycles } = await import('../../src/js/data.ts');
  const shape = () => [...document.getElementById('diagnosis').children].map(c => c.tagName + '.' + c.className + '>' +
    [...c.children].filter(k => !k.matches('.dx-year, .fp-marks')).map(k => k.tagName + '.' + k.className).join(','));
  const today = shape();
  const off = marketCycles.filter(c => !c.ongoing).filter(c => { renderDiagnosis(cycleModel(c)); return shape().join('|') !== today.join('|'); });
  renderDiagnosis(nowModel);
  assert.equal(today.length, 3);
  assert.deepEqual(off.map(c => c.name), []);
});
