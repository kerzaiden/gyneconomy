import test from 'node:test';
import assert from 'node:assert/strict';
import { errors } from './dom.mjs';
import { sheetRenderers } from '../../src/js/render-core.js';
import { ROSTER } from '../../src/js/roster.js';
import { HIST_HEAD } from '../../src/js/history.js';
import { histFrame } from '../../src/js/charts.js';
import { cpiHistoryChart, gdpHistoryChart, unempHistoryChart, fedFundsHistoryChart, householdsChart, m2GrowthChart, deficitChart, velocityHistoryChart, desireHistoryChart } from '../../src/js/history-charts.js';

const BROKEN = ['NaN', 'undefined', 'Infinity', '[object Object]'];
const broken = html => BROKEN.filter(b => html.includes(b));
const WIDTHS = [320, 390, 768, 1280];

test('every reading in the roster has a page that draws it', () => {
  for (const R of ROSTER) {
    assert.equal(typeof sheetRenderers[R.id], 'function', R.name + ' has no renderer');
    assert.equal(HIST_HEAD[R.hk || R.id].title, R.head, R.name + ' head');
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
