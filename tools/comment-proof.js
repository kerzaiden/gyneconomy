#!/usr/bin/env node
const fs = require('fs'), os = require('os'), path = require('path'), { execFileSync } = require('child_process');
const { strip } = require('./strip');
const { bundle } = require('./bundle');

const ROOT = path.join(__dirname, '..');
const arg = process.argv.slice(2);
const base = (arg.find(a => a.startsWith('--base=')) || '--base=HEAD').slice(7);
const git = (...a) => execFileSync('git', a, { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 << 20 });

const listed = s => s.split('\n').filter(Boolean).filter(f => !f.endsWith('/package.json') || f.startsWith('src/js/')).map(f => f.slice(4));
const baseFiles = listed(git('ls-tree', '-r', '--name-only', base, 'src'));
const workFiles = listed(git('ls-files', '--cached', '--others', '--exclude-standard', 'src'));
const baseText = new Map(baseFiles.map(f => [f, git('show', base + ':src/' + f)]));
const work = f => fs.readFileSync(path.join(ROOT, 'src', f), 'utf8');

let named = arg.filter(a => !a.startsWith('--'));
const all = !named.length;
const layout = baseText.get('manifest.json') !== work('manifest.json');
if (all) named = workFiles.filter(f => f !== 'manifest.json' && baseText.has(f) && work(f) !== baseText.get(f));
if (layout) console.log('  the manifest changed since ' + base + ': only the whole page can be compared');
if (layout) named = [];
for (const p of named) if (!baseText.has(p)) { console.error('not a file of src/ at ' + base + ': ' + p); process.exit(2); }

const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'comment-proof-'));
let run = 0;
function page(tree) {
  const dir = path.join(TMP, String(run++));
  tree.forEach((text, f) => { fs.mkdirSync(path.dirname(path.join(dir, f)), { recursive: true }); fs.writeFileSync(path.join(dir, f), text); });
  const manifest = JSON.parse(tree.get('manifest.json'));
  return strip(manifest.map(p => /\.[jt]s$/.test(p) && /^(import|export) /m.test(tree.get(p)) ? bundle(path.join(dir, p)) : tree.get(p)).join('\n'));
}

const lines = s => s.split('\n').length;
function verdict(a, b, markup) {
  if (a === b) return 'IDENTICAL';
  if (markup && a.replace(/\s+/g, ' ') === b.replace(/\s+/g, ' ')) return 'WHITESPACE-ONLY';
  return 'DIFFERENT';
}
function where(a, b) {
  let i = 0; while (i < a.length && a[i] === b[i]) i++;
  const show = s => s.slice(Math.max(0, i - 70), i + 90).replace(/\n/g, '\\n');
  return '\n    base:    …' + show(a) + '\n    working: …' + show(b);
}

(async () => {
  const want = await page(baseText);
  let bad = 0;
  for (const p of named) {
    const mixed = new Map(baseText); mixed.set(p, work(p));
    const got = await page(mixed);
    const v = verdict(want, got, !/\.[jt]s$/.test(p));
    if (v === 'DIFFERENT') bad++;
    console.log('  ' + v.padEnd(16) + p.padEnd(26) + String(lines(baseText.get(p))).padStart(6) + ' → '
                + String(lines(mixed.get(p))).padStart(5) + ' source lines' + (v === 'DIFFERENT' ? where(want, got) : ''));
  }
  if (all && (named.length > 1 || layout)) {
    const got = await page(new Map(workFiles.map(f => [f, work(f)])));
    const v = verdict(want, got, true);
    if (v === 'DIFFERENT') bad++;
    console.log('  ' + v.padEnd(16) + 'all files together' + (v === 'DIFFERENT' ? where(want, got) : ''));
  }
  if (!named.length && !layout) console.log('  nothing differs from ' + base);
  fs.rmSync(TMP, { recursive: true, force: true });
  process.exit(bad ? 1 : 0);
})().catch(e => { console.error('FAILED: ' + e.message); fs.rmSync(TMP, { recursive: true, force: true }); process.exit(1); });
