#!/usr/bin/env node
/* Counts the stylesheet's rules and names the last selector — two numbers the suite's
   baseline pins, so a CSS edit that silently drops a block shows up here.
   Usage: node tools/css-count.js index.html */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');

/* Same Chromium resolution as test/gyn-test.js: GYN_CHROME wins, then the cloud
   sandbox's preinstalled build, then whatever Playwright resolves locally. */
const CHROME = (function () {
  if (process.env.GYN_CHROME) return process.env.GYN_CHROME;
  const sandbox = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
  if (fs.existsSync(sandbox)) return sandbox;
  try { return chromium.executablePath(); } catch (e) { return undefined; }
})();

const FILE = process.argv[2] || 'index.html';
/* file:// needs an absolute path — a bare "index.html" becomes file://index.html,
   which resolves to a HOST named index.html and fails with no useful message. */
const ABS = path.resolve(FILE);
if (!fs.existsSync(ABS)) { console.error('not found: ' + ABS); process.exit(2); }
if (!CHROME || !fs.existsSync(CHROME)) {
  console.error('Chromium not found' + (CHROME ? ' at ' + CHROME : '') + '.');
  console.error('Run:  npm run setup');
  process.exit(2);
}

(async () => {
  const b = await chromium.launch({ executablePath: CHROME });
  const p = await b.newPage();
  await p.goto('file://' + ABS); await p.waitForTimeout(1200);
  console.log(JSON.stringify(await p.evaluate(() => {
    let n = 0, last = '';
    for (const sh of document.styleSheets) {
      let rs; try { rs = sh.cssRules; } catch (e) { continue; }
      for (const r of rs) { n++; if (r.selectorText) last = r.selectorText; }
    }
    return { rules: n, last };
  })));
  await b.close();
})();
