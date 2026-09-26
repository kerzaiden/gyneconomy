const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage();
  await p.goto('file://' + process.argv[2]); await p.waitForTimeout(1200);
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
