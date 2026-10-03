import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import { createRequire } from 'module';
import { trendOf, histFrame, colPath, colWidth, AXIS } from '../../src/js/charts.ts';
import { curveVerdict, valuationVerdict } from '../../src/js/readings.ts';
import { ordinal, yearOf, atMonth, maxIn, mean, dropWhatIsShown, fmtAsOf, isoDay, prettyKey, monthLabel } from '../../src/js/format.ts';
import { CAPE_FAIR, fedFundsRange } from '../../src/js/data.ts';
import { merge, plainText } from '../../src/js/live.ts';
import { seasonGroup, seasonTitle, yearAfter } from '../../src/js/model.ts';
import * as fred from '../../src/js/history-fred.ts';

const require = createRequire(import.meta.url);

test('trendOf fits a straight line and names its direction', () => {
  const up = trendOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'pts', 'month');
  assert.equal(up.word, 'rising');
  assert.deepEqual(up.fit, { slope: 1, intercept: 1, n: 10 });
  assert.equal(trendOf([10, 9, 8, 7, 6, 5, 4, 3], 'pts').word, 'falling');
});

test('trendOf refuses fewer than eight points', () => {
  assert.deepEqual(trendOf([1, 2, 3], 'pts'), { word: 'unavailable', span: '', flat: true });
  assert.deepEqual(trendOf(null), { word: 'unavailable', span: '', flat: true });
});

test('the curve is inverted from a ratio of one', () => {
  assert.equal(curveVerdict(null).text, 'No reading');
  assert.equal(curveVerdict(1).text, 'Inverted');
  assert.equal(curveVerdict(0.999).text, 'Normal');
});

test('the CAPE verdict turns at its stated ratios to fair value', () => {
  const at = r => valuationVerdict(CAPE_FAIR * r).text;
  assert.equal(at(0.74), 'Highly undervalued');
  assert.equal(at(0.75), 'Undervalued');
  assert.equal(at(0.95), 'Fairly valued');
  assert.equal(at(1.15), 'Overvalued');
  assert.equal(at(1.6), 'Highly overvalued');
});

test('histFrame is the one frame: two heights, a floor on width, the pinned axis', () => {
  assert.deepEqual(histFrame(360), { W: 360, narrow: true, H: 335, L: AXIS.L, R: 360 - AXIS.R, T: AXIS.T + AXIS.LEG + AXIS.READ, B: 335 - 17 - AXIS.FOOT });
  assert.equal(histFrame(430).H, 375);
  assert.equal(histFrame(429).H, 335);
  assert.equal(histFrame(100).W, 270);
  assert.equal(histFrame().W, 360);
});

test('a column is a capped stroke, and too short a column is a dot', () => {
  assert.equal(colPath(10, 50, 20, 4), 'M10.0,48.0L10.0,22.0');
  assert.equal(colPath(10, 50, 48, 4), 'M10.0,49.0L10.0,49.0');
  assert.deepEqual([colWidth(0), colWidth(1), colWidth(10), colWidth(100)], [1, 1, 10 * 0.68, 20]);
});

test('ordinals, years and months read the way the app writes them', () => {
  assert.deepEqual([1, 2, 3, 4, 11, 12, 13, 21, 22, 101, 111].map(ordinal), ['1st', '2nd', '3rd', '4th', '11th', '12th', '13th', '21st', '22nd', '101st', '111th']);
  assert.deepEqual([yearOf({ y: 2001 }), yearOf({ q: '2002 Q1' }), yearOf({ m: '2003-04' })], [2001, 2002, 2003]);
  assert.equal(atMonth({ m: '2024-03' }), 'Mar 2024');
  assert.equal(monthLabel('2024-12'), 'Dec 2024');
  assert.equal(prettyKey('2024 Q1'), 'Q1 2024');
});

test('maxIn and mean', () => {
  const s = [{ y: 2000, v: 1 }, { y: 2001, v: 5 }, { y: 2002, v: 9 }];
  assert.deepEqual(maxIn(s, 2000, 2001), { y: 2001, v: 5 });
  assert.equal(maxIn(s, 1990, 1995), null);
  assert.equal(mean([1, 2, 3, 6]), 3);
});

test('a note does not repeat the sentence already on screen', () => {
  assert.equal(dropWhatIsShown('One. Two. Three.', 'One.  Two.'), 'Three.');
  assert.equal(dropWhatIsShown('One. Two. Three.', 'Two.'), 'One. Two. Three.');
  assert.equal(dropWhatIsShown('One. Two.', ''), 'One. Two.');
  assert.equal(dropWhatIsShown(null, 'x'), '');
});

test('seasons group into four, and a theme is lower-cased after the name', () => {
  assert.deepEqual(['summer', 'springdeflation', 'lateautumn', 'winter', 'spring', 'autumn'].map(seasonGroup),
    ['summer', 'spring', 'autumn', 'winter', 'spring', 'autumn']);
  assert.equal(seasonTitle({ name: 'Autumn', theme: 'Stagflation' }), 'Autumn · stagflation');
  assert.equal(seasonTitle({ name: 'Winter' }), 'Winter');
});

test('a year later is twelve months on, or nothing', () => {
  const sp = Array.from({ length: 14 }, (_, i) => ({ m: 'm' + i, v: 100 + i }));
  const S = { sp, spAt: Object.fromEntries(sp.map((d, i) => [d.m, i])) };
  assert.equal(yearAfter(S, 'm0'), 112 / 100 - 1);
  assert.equal(yearAfter(S, 'm2'), null);
  assert.equal(yearAfter(S, 'nope'), null);
});

test('merge lays a live document over the literal, one level deep', () => {
  assert.deepEqual(merge({ a: 1, b: { c: 1 } }, { b: { d: 2 } }), { a: 1, b: { d: 2 } });
});

test('a live document carries plain text only, at any depth', () => {
  assert.equal(plainText({ kind:'object', lastMoveLabel:'raised a quarter point', rows:[{ m:'1M', y:4.1 }] }), true);
  assert.equal(plainText({ kind:'object', lastMoveLabel:'<img src=x onerror=alert(1)>' }), false);
  assert.equal(plainText({ kind:'object', rows:[{ label:'a" onmouseover="x' }] }), false);
  assert.equal(plainText({ kind:'object', ['<b>']:1 }), false);
});

test('dates and the Fed range are written once', () => {
  assert.equal(fmtAsOf('2026-09-30'), 'Sep 30 2026');
  assert.match(fedFundsRange(), /^\d\.\d\d(–\d\.\d\d)?%$/);
});

test('the Fred backfill writes the stored figures back byte for byte', () => {
  const { emit } = require('../../tools/fetch-fred-history.js');
  const early = { gdp: fred.gdpYoYBefore, cpi: fred.cpiYoYBefore, returns: fred.sp500ReturnsBefore, growth: fred.gdpGrowthBefore, assets: fred.assetReturns };
  const fiscal = Object.assign({}, fred.fiscalHistory, { grossQ: fred.grossDebtQuarterly });
  const out = emit(fred.fedFundsHistory, fred.volatilityHistory, fiscal, fred.treasuryQuarterly, fred.productivityHistory,
    fred.sp500MonthlyHistory, fred.confidenceHistory, early, fred.durablesHistory, fred.premiumHistory);
  assert.equal(out, fs.readFileSync(new URL('../../src/data/fred.json', import.meta.url), 'utf8'));
});

test('isoDay reads ISO and display dates alike and refuses days off the calendar', () => {
  assert.deepEqual(['2026-09-22', 'Sep 22 2026', 'Sep 16, 2026', 'Jul 1, 2023', '2024-02-29'].map(isoDay),
    ['2026-09-22', '2026-09-22', '2026-09-16', '2023-07-01', '2024-02-29']);
  assert.deepEqual(['2026-13-05', '2026-02-30', '2025-02-29', 'Foo 1 2026', '', '2026-9-1', null].map(isoDay), ['', '', '', '', '', '', '']);
});
