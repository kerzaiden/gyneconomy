const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'), SRC = path.join(ROOT, 'src/js');
const LEDGER = path.join(ROOT, 'test/components.json');

const FN = /^(?:export )?function ([A-Za-z0-9_$]+)\(/;

const CODE = [];
function scan() {
  const css = fs.readFileSync(path.join(ROOT, 'src/styles.css'), 'utf8');
  const defined = new Set([...css.matchAll(/\.([a-z][a-z0-9-]+)/g)].map(m => m[1]));
  const where = new Map();
  for (const file of fs.readdirSync(SRC).sort()) {
    let fn = '(top level)';
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
      CODE.push({ file: file.replace(/^\d+[a-z]?-/, ''), fn, line, def: !!m });
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

function sizes() {
  const ts = require('typescript');
  const out = {}, loose = [];
  for (const file of fs.readdirSync(SRC).filter(f => f.endsWith('.ts')).sort()) {
    const sf = ts.createSourceFile(file, fs.readFileSync(path.join(SRC, file), 'utf8'), ts.ScriptTarget.Latest, true);
    const line = p => sf.getLineAndCharacterOfPosition(p).line;
    (function walk(n) {
      if (ts.isFunctionLike(n) && n.body) {
        const len = line(n.end) - line(n.getStart(sf)) + 1;
        if (ts.isFunctionDeclaration(n) && n.name && n.parent === sf) out[n.name.text] = len;
        else loose.push({ at: file + ':' + (line(n.getStart(sf)) + 1), len });
      }
      ts.forEachChild(n, walk);
    })(sf);
  }
  return { named: out, loose };
}

function callers(name) {
  const re = new RegExp('(^|[^A-Za-z0-9_$.])' + name.replace(/\$/g, '\\$') + '\\s*\\(');
  const out = new Set();
  for (const c of CODE) if (c.fn !== name && !c.def && re.test(c.line)) out.add(c.file + ':' + c.fn);
  return [...out].sort();
}
function allFunctions() {
  const out = [];
  for (const c of CODE) if (c.def) out.push({ name: c.fn, file: c.file });
  return out;
}
function componentsDoc() {
  const byFn = new Map();
  for (const [c, v] of owned) {
    const fn = [...v][0];
    if (!byFn.has(fn)) byFn.set(fn, []);
    byFn.get(fn).push(c);
  }
  const files = fs.readdirSync(SRC).sort().map(f => f.replace(/^\d+[a-z]?-/, ''));
  const rows = [...byFn].map(([k, cs]) => {
    const [file, fn] = k.split(':');
    return { file, fn, classes: cs.sort(), used: callers(fn) };
  }).filter(r => r.fn !== '(top level)');
  rows.sort((a, b) => files.indexOf(a.file) - files.indexOf(b.file) || a.fn.localeCompare(b.fn));
  const head = (() => { try { return require('child_process').execSync('git rev-parse --short HEAD', { cwd: ROOT }).toString().trim(); } catch (e) { return '?'; } })();
  const L = [];
  L.push('# Components');
  L.push('');
  L.push('**Generated. Do not hand-edit** — run `npm run map`. `npm run check` fails if this page is stale.');
  L.push('');
  L.push('A **component** here is a function and the CSS classes only it writes. Nothing declares itself one; the list');
  L.push('is derived from the source by `tools/components.js`, the same scan that stops a pattern being retyped. So a');
  L.push('name on this page is a name you can use — in a request, a commit, a conversation — and it points at exactly');
  L.push('one function. **Owns** is the classes no other function emits. **Used by** is every top-level function that');
  L.push('calls it, by file.');
  L.push('');
  L.push(`Generated from commit \`${head}\` on ${new Date().toISOString().slice(0, 10)}. **${rows.length} components**, **${shared.length} shared patterns**.`);
  L.push('');
  let cur = null;
  for (const r of rows) {
    if (r.file !== cur) { cur = r.file; L.push(`## ${cur}`); L.push(''); L.push('| Component | Owns | Used by |'); L.push('|---|---|---|'); }
    const owns = r.classes.map(c => '`.' + c + '`').join(' ');
    const used = r.used.length ? r.used.map(u => '`' + u + '`').join(', ') : '—';
    L.push(`| **\`${r.fn}\`** | ${owns} | ${used} |`);
    if (rows[rows.indexOf(r) + 1] && rows[rows.indexOf(r) + 1].file !== cur) L.push('');
  }
  L.push('');
  const seen = new Set(rows.map(r => r.fn));
  const vocab = [];
  for (const f of allFunctions()) {
    if (seen.has(f.name)) continue;
    const u = callers(f.name);
    if (u.length >= 3) vocab.push({ ...f, used: u });
  }
  vocab.sort((a, b) => b.used.length - a.used.length || a.name.localeCompare(b.name));
  L.push('## Vocabulary');
  L.push('');
  L.push('Functions that own no class of their own but are called from three or more places — the words every');
  L.push('renderer speaks. Listed most-used first.');
  L.push('');
  L.push('| Function | Lives in | Called from |');
  L.push('|---|---|---|');
  for (const v of vocab) L.push(`| **\`${v.name}\`** | ${v.file} | ${v.used.length} places |`);
  L.push('');
  L.push('## Shared patterns');
  L.push('');
  L.push('Classes written from more than one function — a pattern being retyped. The ledger (`test/components.json`)');
  L.push('records these counts and `npm run check` fails if any of them grows. This list can only shrink.');
  L.push('');
  L.push('| Class | Places | Written by |');
  L.push('|---|---|---|');
  for (const [c, v] of shared) L.push(`| \`.${c}\` | ${v.size} | ${[...v].sort().map(x => '`' + x + '`').join(', ')} |`);
  L.push('');
  return L.join('\n');
}
const DOC = path.join(ROOT, 'docs/COMPONENTS.md');
const stripDate = t => t.replace(/on \d{4}-\d{2}-\d{2}\./, 'on DATE.').replace(/commit `[0-9a-f?]+`/, 'commit `HEAD`');

const arg = process.argv[2];

if (arg === '--doc') {
  const text = componentsDoc(), was = fs.existsSync(DOC) ? fs.readFileSync(DOC, 'utf8') : '';
  if (stripDate(was) === stripDate(text)) { console.log('COMPONENTS.md is current'); process.exit(0); }
  fs.writeFileSync(DOC, text);
  console.log(`wrote docs/COMPONENTS.md — ${text.split('\n').length} lines`);
  process.exit(0);
}
if (arg === '--doc-check') {
  const now = fs.existsSync(DOC) ? fs.readFileSync(DOC, 'utf8') : '';
  if (stripDate(now) !== stripDate(componentsDoc())) { console.error('COMPONENTS.md is OUT OF DATE — run: npm run map'); process.exit(1); }
  console.log('COMPONENTS.md is current');
  process.exit(0);
}

if (arg === '--bless') {
  const out = { '#functions': sizes().named };
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
  const FN_MAX = 150;
  const caps = past['#functions'] || {}, all = sizes(), now = all.named, longer = [];
  all.loose.filter(f => f.len > FN_MAX).forEach(f => longer.push('the function at ' + f.at + ' is ' + f.len + ' lines; no function may pass ' + FN_MAX));
  for (const [fn, n] of Object.entries(now)) {
    if (n > FN_MAX) longer.push(fn + ' is ' + n + ' lines; no function may pass ' + FN_MAX);
    else if (caps[fn] != null && n > caps[fn]) longer.push(fn + ' ' + caps[fn] + ' -> ' + n + ' lines');
  }
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
