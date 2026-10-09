import test from 'node:test';
import assert from 'node:assert/strict';
import { errors, bootWarnings, window } from './dom.mjs';
import { sheetRenderers } from '../../src/js/render-core.ts';
import { ROSTER } from '../../src/js/roster.ts';
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

test('AI Insights opens on every cycle with its story, rates and risks; the open cycle adds Claude\u2019s chapters, every figure filled, and moments from closed cycles', async () => {
  const { echoes } = await import('../../src/js/ai-insights.ts');
  const { renderDiagnosis } = await import('../../src/js/diagnosis.ts');
  const { cycleModel, nowModel } = await import('../../src/js/model.ts');
  assert.ok(document.querySelector('#diagnosis [data-open="sheet-ai-insights"] .ai-clamp'));
  sheetRenderers['sheet-ai-insights']();
  const page = document.getElementById('sheet-ai-insights');
  assert.deepEqual(broken(page.innerHTML), []);
  assert.ok(!/[{}]|—/.test([...page.querySelectorAll('.ai-p')].map(p => p.textContent).join('')));
  assert.deepEqual([...page.querySelectorAll('.trend-card .trend-head')].map(h => h.textContent), [nowModel.era.name, 'Interest Rates', 'The Economy', 'The Market', 'Risk Factors', 'Closest Moments']);
  assert.equal(page.querySelectorAll('.ai-echo').length, 3);
  const { riskLabs } = await import('../../src/js/cycle-analysis.ts');
  const { marketCycles } = await import('../../src/js/data.ts');
  const risks = riskLabs(marketCycles.indexOf(nowModel.era)).map(l => l.name).sort();
  assert.ok(risks.length > 0);
  assert.deepEqual([...page.querySelectorAll('.ai-rank span:first-child')].map(s => s.textContent).sort(), risks);
  assert.equal(page.querySelectorAll('.ai-tile').length, 6);
  assert.ok(echoes().every(e => !e.cycle.ongoing));
  const { ratesStory } = await import('../../src/js/fed-phases.ts');
  const heads = () => [...page.querySelectorAll('.trend-card .trend-head')].map(h => h.textContent);
  const rates = () => page.querySelectorAll('.trend-card')[1].querySelector('.ai-p').textContent;
  assert.equal(rates(), ratesStory(nowModel.era));
  for (const c of marketCycles.filter(c => !c.ongoing)) {
    renderDiagnosis(cycleModel(c));
    assert.equal(document.querySelector('#diagnosis [data-open="sheet-ai-insights"] .ai-clamp').textContent, c.blurb, c.name);
    sheetRenderers['sheet-ai-insights']();
    assert.deepEqual(heads(), [c.name, 'Interest Rates', 'Risk Factors'], c.name);
    assert.equal(rates(), ratesStory(c), c.name);
    assert.ok(page.querySelector('.lab-score'), c.name + ' score');
    const named = riskLabs(marketCycles.indexOf(c)).map(l => l.name).filter(n => page.textContent.includes(n));
    assert.equal(page.querySelectorAll('.ai-rank').length, named.length, c.name + ' risks');
    assert.deepEqual(broken(page.innerHTML), [], c.name);
  }
  renderDiagnosis(nowModel);
  sheetRenderers['sheet-ai-insights']();
  assert.equal(heads()[0], nowModel.era.name);
});

test('every cycle page, open or closed, is built in one shape', async () => {
  const { renderDiagnosis } = await import('../../src/js/diagnosis.ts');
  const { cycleModel, nowModel } = await import('../../src/js/model.ts');
  const { marketCycles } = await import('../../src/js/data.ts');
  const shape = () => [...document.getElementById('diagnosis').children].filter(c => !c.matches('[data-open="sheet-ai-insights"]')).map(c => c.tagName + '.' + c.className + '>' +
    [...c.children].filter(k => !k.matches('.dx-year, .fp-marks')).map(k => k.tagName + '.' + k.className).join(','));
  const today = shape();
  const off = marketCycles.filter(c => !c.ongoing).filter(c => { renderDiagnosis(cycleModel(c)); return shape().join('|') !== today.join('|'); });
  renderDiagnosis(nowModel);
  assert.equal(today.length, 2);
  assert.deepEqual(off.map(c => c.name), []);
});
