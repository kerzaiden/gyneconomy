/* THE COMPONENT LEDGER.

   Keren, Sep 29 2026: "can we stay consistent in terms of components — name all the components in the app and
   then we use it and reuse it, because it seems that we are writing all over again every time we make a change."

   She is right, and the honest shape of the answer is not a document. A list of component names in a markdown
   file is a promise nobody is held to; it goes stale the first time someone is in a hurry, and this app's rule
   is zero documentation. So the ledger is COMPUTED from the source and ENFORCED by a ratchet.

   WHAT A COMPONENT IS, HERE. A CSS class is emitted by exactly one function. That function is the class's
   component, and the inventory below is derived rather than maintained — add a builder, and it names itself.
   A class emitted from two or more places is the opposite: a pattern being retyped, which is exactly what she
   was feeling.

   THE RATCHET. test/components.json records, for every shared class, how many places write it today. A class
   may lose emitters and never gain one, and a class that is not in the ledger may not become shared at all. So
   the debt can only shrink, and the next feature cannot quietly add to it. There is no big-bang refactor to
   finish before the rule starts working.

     node tools/components.js            the inventory and the shared list
     node tools/components.js --check    fail if anything became more duplicated
     node tools/components.js --bless    record where we are now
*/
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'), SRC = path.join(ROOT, 'src/js');
const LEDGER = path.join(ROOT, 'test/components.json');

const FN = /^  function ([A-Za-z0-9_$]+)\(/;

/* Where each class is written, by the function that writes it. Scoped to the two-space top level because that
   is what this app calls a function: everything deeper is a helper inside one, and counting those would report
   a component as duplicating itself. */
function scan() {
  const css = fs.readFileSync(path.join(ROOT, 'src/styles.css'), 'utf8');
  /* Two characters, not three. The first cut of this used {2,} after the leading letter, which quietly meant
     three characters minimum and made every short class invisible to the ledger — .on, .up, and the whole of
     the .s0–.s5 and .f0–.f5 step families the heat and rate charts use. A ratchet with a blind spot is worse
     than none, because the blind spot is exactly where a modifier gets copied. */
  const defined = new Set([...css.matchAll(/\.([a-z][a-z0-9-]+)/g)].map(m => m[1]));
  const where = new Map();
  for (const file of fs.readdirSync(SRC).sort()) {
    let fn = '(top level)';
    /* Comments are skipped, and the reason is not tidiness. This app explains itself in prose that quotes the
       markup it is about — srcBlock's own note names the `class="src"` it replaced — so a scanner that read
       comments would report a component as its own second author and the ratchet would be measuring the
       writing rather than the code. Block state is tracked across lines because these comments run long; a
       line comment is only honoured when the line STARTS with one, so a `//` inside a URL is left alone. */
    let inBlock = false;
    for (const raw of fs.readFileSync(path.join(SRC, file), 'utf8').split('\n')) {
      let line = raw;
      if (inBlock) {
        const end = line.indexOf('*/');
        if (end < 0) continue;
        line = line.slice(end + 2); inBlock = false;
      }
      const open = line.indexOf('/*');
      if (open >= 0) {
        const close = line.indexOf('*/', open + 2);
        if (close < 0) { inBlock = true; line = line.slice(0, open); }
        else line = line.slice(0, open) + line.slice(close + 2);
      }
      if (line.trim().startsWith('//')) line = '';
      const m = FN.exec(line);
      if (m) fn = m[1];
      const blobs = [...line.matchAll(/class(?:Name)?\s*=\s*"([^"]+)"/g)].map(x => x[1]);
      for (const blob of blobs) for (const c of blob.split(/\s+/)) {
        if (!defined.has(c)) continue;
        if (!where.has(c)) where.set(c, new Set());
        where.get(c).add(file.replace(/^\d+[a-z]?-/, '') + ':' + fn);
      }
    }
  }
  return where;
}

const where = scan();
const shared = [...where].filter(([, v]) => v.size > 1).sort((a, b) => b[1].size - a[1].size);
const owned = [...where].filter(([, v]) => v.size === 1);

const arg = process.argv[2];

if (arg === '--bless') {
  const out = {};
  for (const [c, v] of shared) out[c] = v.size;
  fs.writeFileSync(LEDGER, JSON.stringify(out, null, 2) + '\n');
  console.log(`recorded ${shared.length} shared classes -> test/components.json`);
  process.exit(0);
}

if (arg === '--check') {
  const past = fs.existsSync(LEDGER) ? JSON.parse(fs.readFileSync(LEDGER, 'utf8')) : {};
  const grew = [], fresh = [], shrank = [];
  for (const [c, v] of shared) {
    if (past[c] == null) fresh.push(`.${c} is written from ${v.size} places and is not in the ledger`);
    else if (v.size > past[c]) grew.push(`.${c} ${past[c]} -> ${v.size} places`);
    else if (v.size < past[c]) shrank.push(`.${c} ${past[c]} -> ${v.size}`);
  }
  for (const c of Object.keys(past)) if (!where.has(c) || where.get(c).size === 1) shrank.push(`.${c} ${past[c]} -> 1`);
  if (grew.length || fresh.length) {
    console.error('COMPONENT LEDGER — a pattern got MORE duplicated:\n');
    [...grew, ...fresh].forEach(l => console.error('  ' + l));
    console.error('\nBuild it once and call it, or if the duplication is deliberate, run: npm run comp:bless');
    process.exit(1);
  }
  console.log(shrank.length
    ? `ledger ok — ${shrank.length} pattern(s) less duplicated than recorded:\n  ${shrank.join('\n  ')}\n  run: npm run comp:bless`
    : `ledger ok — ${shared.length} shared classes, none worse`);
  process.exit(0);
}

const byFn = new Map();
for (const [c, v] of owned) {
  const fn = [...v][0];
  if (!byFn.has(fn)) byFn.set(fn, []);
  byFn.get(fn).push(c);
}
const comps = [...byFn].filter(([, cs]) => cs.length >= 2).sort((a, b) => b[1].length - a[1].length);
console.log(`COMPONENTS — a builder and the classes only it writes (${comps.length})\n`);
for (const [fn, cs] of comps) console.log('  %s\n      %s', fn.padEnd(34), cs.map(c => '.' + c).join(' '));
console.log(`\nSHARED — written from more than one place (${shared.length})\n`);
for (const [c, v] of shared) console.log('  .%s %s', c.padEnd(20), String(v.size).padStart(2) + ' places');
