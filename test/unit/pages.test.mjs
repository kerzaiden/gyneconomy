import test from 'node:test';
import assert from 'node:assert/strict';
import { errors, bootWarnings } from './dom.mjs';
import { sheetRenderers } from '../../src/js/render-core.js';
import { ROSTER } from '../../src/js/roster.js';
import { page, pickerOpen } from '../../src/js/history.js';
import { cycleByName } from '../../src/js/model.js';
import { histFrame } from '../../src/js/charts.js';
import { cpiHistoryChart, gdpHistoryChart, unempHistoryChart, fedFundsHistoryChart, householdsChart, m2GrowthChart, deficitChart, velocityHistoryChart, desireHistoryChart } from '../../src/js/history-charts.js';

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
      assert.equal(h, histFrame(w).H, s.getAttribute('aria-label'));
    });
  }
});

const CHARTS = { cpiHistoryChart, gdpHistoryChart, unempHistoryChart, fedFundsHistoryChart, householdsChart, m2GrowthChart,
  deficitChart, velocityHistoryChart, desireHistoryChart };
for (const [name, chart] of Object.entries(CHARTS)) {
  test(name + ' is drawn to the frame it is given, with every value readable', () => {
    for (const W of WIDTHS) {
      const svg = chart(W);
      const f = histFrame(W), vb = /viewBox="0 0 (\d+) (\d+)"/.exec(svg);
      assert.ok(vb, name + ' has a viewBox');
      assert.deepEqual([+vb[1], +vb[2]], [f.W, f.H], name + ' at ' + W);
      assert.deepEqual(broken(svg), [], name + ' at ' + W);
      assert.match(svg, /aria-label="[^"]{12,}"/, name + ' names itself for a screen reader');
    }
  });
}

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
