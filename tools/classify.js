/* Measure what each registered step actually DOES, by running it.

     node tools/classify.js index.html

   Reading kinds off the source does not work: counting DOM writes in a step's body counts the
   writes inside its event HANDLERS, which fire later and say nothing about the step. That
   mislabelled six pure wirers as "mixed" in Version 531 and hid that the 1,228-line
   renderPagesAndNav binds nothing at all.

   So: patch addEventListener, run the step, watch. Listeners bound means it must run once. DOM
   settled with no listeners means it may run again. The kinds in index.html are set from this. */
const { chromium } = require('playwright');
const fs = require('fs');
const CHROME = process.env.GYN_CHROME
  || (fs.existsSync('/opt/pw-browsers/chromium-1194/chrome-linux/chrome')
      ? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' : chromium.executablePath());

(async () => {
  const file = process.argv[2] || 'index.html';
  const b = await chromium.launch({ executablePath: CHROME });
  const ctx = await b.newContext({ viewport: { width: 414, height: 1000 } });
  const p = await ctx.newPage();
  await p.route('**/*', r => { const u = r.request().url();
    (u.startsWith('file://') || u.startsWith('data:') || u.startsWith('blob:')) ? r.continue() : r.abort(); });
  await p.goto('file://' + require('path').resolve(file));
  await p.waitForTimeout(1500);

  const rows = await p.evaluate(() => {
    const G = window.__GYN;
    if (!G) return null;
    const out = [];
    const orig = EventTarget.prototype.addEventListener;
    for (const s of G.steps) {
      if (s.kind === 'live' || s.kind === 'build') { out.push({ n: s.name, k: s.kind, skipped: true }); continue; }
      let listeners = 0;
      EventTarget.prototype.addEventListener = function () { listeners++; return orig.apply(this, arguments); };
      const before = document.body.innerHTML;
      let err = '';
      try { s.fn(); } catch (e) { err = String(e).slice(0, 60); }
      const after = document.body.innerHTML;
      EventTarget.prototype.addEventListener = orig;
      out.push({ n: s.name, k: s.kind, listeners, changed: before !== after,
                 delta: after.length - before.length, err });
    }
    return out;
  });

  if (!rows) { console.error('no registry — is this the right file?'); process.exit(2); }
  console.log('measured by running each step:\n');
  for (const r of rows) {
    if (r.skipped) { console.log('  ' + r.n.padEnd(26) + r.k.padEnd(8) + 'not run (one-shot or a data source)'); continue; }
    const should = r.err ? 'threw'
      : r.listeners && r.changed ? 'mixed'
      : r.listeners ? 'wire'
      : r.changed ? 'render?' : 'render';
    const agree = should === r.k || (should === 'render' && r.k === 'check') || (should === 'render' && r.k === 'derive');
    console.log('  ' + (agree ? '    ' : '  ! ') + r.n.padEnd(26) + ('declared ' + r.k).padEnd(18)
      + String(r.listeners).padStart(2) + ' listeners  '
      + (r.changed ? ('DOM ' + (r.delta >= 0 ? '+' : '') + r.delta) : 'DOM settled').padEnd(14)
      + 'measured ' + should + (r.err ? '  ' + r.err : ''));
  }
  console.log('\n! marks a declared kind the measurement disagrees with.');
  await b.close();
})();
