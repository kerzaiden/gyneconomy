#!/usr/bin/env node
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const axe = require('axe-core');

const FILE = path.resolve(process.argv.find(a => a.endsWith('.html')) || 'index.html');
const CHECK = process.argv.includes('--check');
const CHROME = process.env.GYN_CHROME
  || (fs.existsSync('/opt/pw-browsers/chromium-1194/chrome-linux/chrome')
      ? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' : chromium.executablePath());

const run = async (p, label, out) => {
  await p.evaluate(axe.source);
  const r = await p.evaluate(async () => await window.axe.run(document, {
    resultTypes: ['violations'],
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'] }
  }));
  for (const v of r.violations) {
    out.push({ label, id: v.id, impact: v.impact, help: v.help, n: v.nodes.length,
               sample: (v.nodes[0] && v.nodes[0].target && v.nodes[0].target.join(' ')) || '',
               snippet: ((v.nodes[0] && v.nodes[0].html) || '').slice(0, 110) });
  }
};

const settle = p => p.evaluate(() => new Promise(done => requestAnimationFrame(() => requestAnimationFrame(() =>
  Promise.all(document.getAnimations().filter(a => a.effect && isFinite(a.effect.getComputedTiming().endTime)).map(a => a.finished.catch(() => null))).then(() => done())))));
const open = async (p, file) => {
  await p.goto('file://' + file);
  await p.waitForFunction(() => window.__GYN && document.getElementById('diagnosis'));
  await settle(p);
};
const tap = async (p, sel, until) => {
  const hit = await p.evaluate(s => { const e = [...document.querySelectorAll(s)].find(x => x.offsetParent !== null);
    if (!e) return false; e.click(); return true; }, sel);
  if (!hit) return false;
  if (until) await p.waitForFunction(until);
  await settle(p);
  return true;
};

(async () => {
  const b = await chromium.launch({ executablePath: CHROME });
  const out = [], skipped = [];
  let states = 0;
  const audit = async (p, label) => { states++; await run(p, label, out); };
  for (const [w, scheme] of [[414, 'light'], [1280, 'dark']]) {
    const ctx = await b.newContext({ viewport: { width: w, height: 900 }, colorScheme: scheme });
    const p = await ctx.newPage();
    await p.route('**/*', r => { const u = r.request().url();
      (u.startsWith('file://') || u.startsWith('data:') || u.startsWith('blob:')) ? r.continue() : r.abort(); });
    const at = w + '/' + scheme;
    await open(p, FILE);
    await audit(p, at + ' home');
    for (const t of ['analysis', 'chart', 'portfolio']) {
      if (await tap(p, '.tab-btn[data-tab="' + t + '"]')) await audit(p, at + ' tab:' + t);
      else skipped.push(at + ' tab:' + t);
    }
    await open(p, FILE);
    if (await tap(p, '[data-open="sheet-cat-weather"]') &&
        await tap(p, '.cat-item[data-open="sheet-metric-temp"]', () => document.querySelector('#metric-page .page-chart'))) {
      await audit(p, at + ' page:Temperature');
      if (await tap(p, '#metric-page .expand-btn, #metric-page .more-row, .more-row', () => document.querySelector('#detail-backdrop.show')))
        await audit(p, at + ' modal');
      else skipped.push(at + ' modal');
    } else skipped.push(at + ' page:Temperature');
    await open(p, FILE);
    if (await tap(p, '.menu-btn', () => document.querySelector('.more-menu.in'))) {
      await audit(p, at + ' menu');
      if (await tap(p, '[data-sheet="book"]')) await audit(p, at + ' about');
      else skipped.push(at + ' about');
    } else skipped.push(at + ' menu');
    await ctx.close();
  }
  await b.close();

  const byRule = new Map();
  for (const v of out) {
    const k = v.id;
    if (!byRule.has(k)) byRule.set(k, { id: v.id, impact: v.impact, help: v.help, nodes: 0, where: new Set(), sample: v.sample, snippet: v.snippet });
    const e = byRule.get(k); e.nodes += v.n; e.where.add(v.label);
  }
  const order = { critical: 0, serious: 1, moderate: 2, minor: 3 };
  const rules = [...byRule.values()].sort((a, b) => (order[a.impact] ?? 9) - (order[b.impact] ?? 9));

  console.log('axe-core ' + axe.version + ' — ' + FILE.split('/').pop() + ', ' + states + ' states\n');
  if (skipped.length) console.log('  not reached: ' + skipped.join(', ') + '\n');
  if (!rules.length) console.log('  no violations');
  for (const r of rules) {
    console.log('  [' + (r.impact || '?').toUpperCase() + '] ' + r.id + ' — ' + r.help);
    console.log('      ' + r.nodes + ' node(s) across ' + r.where.size + ' state(s), e.g. ' + [...r.where][0]);
    if (r.sample) console.log('      at: ' + r.sample);
    if (r.snippet) console.log('      ' + r.snippet.replace(/\s+/g, ' '));
  }
  const bad = rules.filter(r => r.impact === 'serious' || r.impact === 'critical');
  console.log('\n' + rules.length + ' distinct rule(s); ' + bad.length + ' serious or critical');
  if (CHECK) process.exit(bad.length || skipped.length ? 1 : 0);
})();
