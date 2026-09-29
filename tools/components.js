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

/* THE SECOND HALF OF THE SAME QUESTION (Version 617).

   These components are wired to the document by NAME: 124 ids reached through getElementById, every call
   guarded with `if (!el) return` because any given page renders only some of them. That guard is right, and it
   is also why a name that does not exist fails in total silence \u2014 the same shape as the bug Version 473 found,
   where `if (!row) return` read a missing row as a row to skip and quietly listed six readings out of eleven.
   The audit that prompted this found #pulse-span: three lines computing a sentence about the Pulse window,
   guarded, for an element that has never existed in any version of the markup.
   So the ledger checks the wiring too. An id reached in code must be written in the markup, assigned by a
   literal in code, or belong to one of the families built by concatenation \u2014 listed here, because a short list
   that has to be maintained is honest where a check that cannot see them would not be. */
const DYNAMIC = [/^sheet-/, /^peek-row-/, /^metric-page$/];

function wiring() {
  const markup = ['src/page-body.html', 'src/page-head.html', 'src/page-tail.html']
    .filter(f => fs.existsSync(path.join(ROOT, f)))
    .map(f => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n');
  const js = fs.readdirSync(SRC).map(f => fs.readFileSync(path.join(SRC, f), 'utf8')).join('\n');
  const reached = new Set([...js.matchAll(/getElementById\("([A-Za-z0-9_-]+)"\)/g)].map(m => m[1]));
  const dangling = [];
  for (const id of reached) {
    if (markup.includes('id="' + id + '"') || js.includes('id="' + id + '"')) continue;
    if (js.includes('.id = "' + id + '"')) continue;
    if (DYNAMIC.some(re => re.test(id))) continue;
    dangling.push(id);
  }
  return { reached: reached.size, dangling: dangling.sort() };
}

/* THE PART THAT CANNOT BE SPLIT CHEAPLY CANNOT GROW EITHER (Version 624).

   Keren: "maybe we need to work on it now before we will have to refactor the entire app 200 versions from
   now." The Analysis tab moved out in this version because it was clean to move. What is left is one
   1,270-line function whose five sections share a closure, and lifting those apart is the riskiest surgery in
   the app for a payoff no reader or test would notice.
   So it is not split \u2014 it is CAPPED. Every top-level function's length is recorded, and a function may shrink
   and never grow. Her worry is then handled by a rule rather than by a heroic afternoon: the next feature
   physically cannot make the big one bigger without somebody deciding to, on purpose, in a bless.
   Whole-file sizes are deliberately NOT capped. A file growing by gaining a new function is healthy; the
   thing worth stopping is one function swallowing more. */
function sizes() {
  const out = {};
  for (const file of fs.readdirSync(SRC).sort()) {
    const lines = fs.readFileSync(path.join(SRC, file), 'utf8').split('\n');
    let name = null, start = 0;
    lines.forEach((l, i) => {
      const m = FN.exec(l);
      if (m) { name = m[1]; start = i; }
      else if (name && l === '  }') { out[name] = i - start + 1; name = null; }
    });
  }
  return out;
}

const arg = process.argv[2];

if (arg === '--bless') {
  const out = { '#functions': sizes() };
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
  for (const c of Object.keys(past)) {
    if (c === '#functions') continue;
    if (!where.has(c) || where.get(c).size === 1) shrank.push(`.${c} ${past[c]} -> 1`);
  }
  if (grew.length || fresh.length) {
    console.error('COMPONENT LEDGER — a pattern got MORE duplicated:\n');
    [...grew, ...fresh].forEach(l => console.error('  ' + l));
    console.error('\nBuild it once and call it, or if the duplication is deliberate, run: npm run comp:bless');
    process.exit(1);
  }
  const caps = past['#functions'] || {}, now = sizes(), longer = [];
  for (const [fn, n] of Object.entries(now)) if (caps[fn] != null && n > caps[fn]) longer.push(fn + ' ' + caps[fn] + ' -> ' + n + ' lines');
  if (longer.length) {
    console.error('SIZE \u2014 a function got longer:\\n');
    longer.forEach(l => console.error('  ' + l));
    console.error('\\nSplit it, or if it has to grow, run: npm run comp:bless');
    process.exit(1);
  }

  const w = wiring();
  if (w.dangling.length) {
    console.error('WIRING \u2014 code reaches an element id that nothing ever creates:\n');
    w.dangling.forEach(id => console.error('  #' + id));
    console.error('\nEvery getElementById here is guarded, so this fails in silence. Delete the code, or add the element.');
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
const w = wiring();
console.log('\nWIRING \u2014 %d ids reached in code, %d created nowhere%s\n', w.reached, w.dangling.length,
  w.dangling.length ? ': ' + w.dangling.map(i => '#' + i).join(', ') : '');
console.log(`\nSHARED — written from more than one place (${shared.length})\n`);
for (const [c, v] of shared) console.log('  .%s %s', c.padEnd(20), String(v.size).padStart(2) + ' places');
