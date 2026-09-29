#!/usr/bin/env node
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const { strip } = require('./strip');

const ROOT = path.join(__dirname, '..');
const arg = process.argv.slice(2);
const base = (arg.find(a => a.startsWith('--base=')) || '--base=HEAD').slice(7);
const git = (...a) => execFileSync('git', a, { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 << 20 });

const manifest = JSON.parse(git('show', base + ':src/manifest.json'));
const baseText = manifest.map(p => git('show', base + ':src/' + p));
const work = p => fs.readFileSync(path.join(ROOT, 'src', p), 'utf8');

let named = arg.filter(a => !a.startsWith('--'));
const all = !named.length;
if (all) named = manifest.filter((p, i) => work(p) !== baseText[i]);
for (const p of named) if (!manifest.includes(p)) { console.error('not a part in the manifest: ' + p); process.exit(2); }

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
  const want = await strip(baseText.join('\n'));
  let bad = 0;
  for (const p of named) {
    const i = manifest.indexOf(p);
    const mixed = baseText.slice(); mixed[i] = work(p);
    const got = await strip(mixed.join('\n'));
    const v = verdict(want, got, !p.endsWith('.js'));
    if (v === 'DIFFERENT') bad++;
    console.log('  ' + v.padEnd(16) + p.padEnd(26) + String(lines(baseText[i])).padStart(6) + ' → '
                + String(lines(mixed[i])).padStart(5) + ' source lines' + (v === 'DIFFERENT' ? where(want, got) : ''));
  }
  if (all && named.length > 1) {
    const got = await strip(manifest.map(work).join('\n'));
    const v = verdict(want, got, true);
    if (v === 'DIFFERENT') bad++;
    console.log('  ' + v.padEnd(16) + 'all parts together' + (v === 'DIFFERENT' ? where(want, got) : ''));
  }
  if (!named.length) console.log('  nothing differs from ' + base);
  process.exit(bad ? 1 : 0);
})().catch(e => { console.error('FAILED: ' + e.message); process.exit(1); });
