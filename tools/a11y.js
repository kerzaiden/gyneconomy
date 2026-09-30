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

(async () => {
  const b = await chromium.launch({ executablePath: CHROME });
  const out = [];
  for (const [w, scheme] of [[414, 'light'], [414, 'dark'], [1280, 'light'], [1280, 'dark']]) {
    const ctx = await b.newContext({ viewport: { width: w, height: 900 }, colorScheme: scheme });
    const p = await ctx.newPage();
    await p.route('**/*', r => { const u = r.request().url();
      (u.startsWith('file://') || u.startsWith('data:') || u.startsWith('blob:')) ? r.continue() : r.abort(); });
    await p.goto('file://' + FILE); await p.waitForTimeout(1400);
    await run(p, w + '/' + scheme + ' home', out);

    for (const t of ['analysis', 'search', 'portfolio']) {
      await p.evaluate(x => { const el = document.querySelector('.tab-btn[data-tab="' + x + '"]'); if (el) el.click(); }, t);
      await p.waitForTimeout(450);
      await run(p, w + '/' + scheme + ' tab:' + t, out);
    }

    await p.goto('file://' + FILE); await p.waitForTimeout(1200);
    const opened = await p.evaluate(() => {
      const cat = document.querySelector('[data-open="sheet-cat-weather"]');
      if (!cat) return false; cat.click(); return true;
    });
    if (opened) {
      await p.waitForTimeout(400);
      await p.evaluate(() => { const i = document.querySelector('.cat-item[data-open="sheet-metric-temp"]'); if (i) i.click(); });
      await p.waitForTimeout(800);
      await run(p, w + '/' + scheme + ' page:Temperature', out);
      const modal = await p.evaluate(() => {
        const e = [...document.querySelectorAll('.expand-btn, .info-btn')].filter(x => x.offsetParent !== null)[0];
        if (!e) return false; e.click(); return true;
      });
      if (modal) { await p.waitForTimeout(500); await run(p, w + '/' + scheme + ' modal', out); }
    }

    await p.goto('file://' + FILE); await p.waitForTimeout(1200);
    await p.evaluate(() => { const m = document.querySelector('.menu-btn'); if (m) m.click(); });
    await p.waitForTimeout(500);
    await run(p, w + '/' + scheme + ' menu', out);
    await p.evaluate(() => { const r = document.querySelector('[data-sheet="book"]'); if (r) r.click(); });
    await p.waitForTimeout(500);
    await run(p, w + '/' + scheme + ' about', out);
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

  console.log('axe-core ' + axe.version + ' — ' + FILE.split('/').pop() + ', 24 states\n');
  if (!rules.length) console.log('  no violations');
  for (const r of rules) {
    console.log('  [' + (r.impact || '?').toUpperCase() + '] ' + r.id + ' — ' + r.help);
    console.log('      ' + r.nodes + ' node(s) across ' + r.where.size + ' state(s), e.g. ' + [...r.where][0]);
    if (r.sample) console.log('      at: ' + r.sample);
    if (r.snippet) console.log('      ' + r.snippet.replace(/\s+/g, ' '));
  }
  const bad = rules.filter(r => r.impact === 'serious' || r.impact === 'critical');
  console.log('\n' + rules.length + ' distinct rule(s); ' + bad.length + ' serious or critical');
  if (CHECK) process.exit(bad.length ? 1 : 0);
})();
