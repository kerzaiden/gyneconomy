#!/usr/bin/env node
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const acorn = require('acorn');

const ROOT = path.join(__dirname, '..');
const rev = process.argv[2] || 'HEAD';
const git = (...a) => execFileSync('git', a, { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 << 20 });
const manifest = JSON.parse(git('show', rev + ':src/manifest.json'));
const text = manifest.map(p => git('show', rev + ':src/' + p));
const tag = git('tag', '--points-at', rev).split('\n').filter(t => /^v\d{3}/.test(t))[0] || git('rev-parse', '--short', rev).trim();

const starts = []; let off = 0;
text.forEach(t => { starts.push(off); off += t.length + 1; });
const joined = text.join('\n');
function locate(pos) {
  let i = starts.length - 1; while (starts[i] > pos) i--;
  return { part: manifest[i], line: text[i].slice(0, pos - starts[i]).split('\n').length };
}

const found = [];
const re = /(<(script|style)\b[^>]*>)([\s\S]*?)(<\/\2>)/gi;
let m, at = 0;
const markup = (s, from) => { let c; const r = /<!--([\s\S]*?)-->/g; while ((c = r.exec(s))) found.push({ start: from + c.index, end: from + r.lastIndex, kind: 'html', value: c[1] }); };
while ((m = re.exec(joined))) {
  markup(joined.slice(at, m.index), at);
  const body = m[3], from = m.index + m[1].length;
  if (m[2].toLowerCase() === 'script') {
    acorn.parse(body, { ecmaVersion: 'latest', allowReturnOutsideFunction: true,
      onComment: (block, value, s, e) => found.push({ start: from + s, end: from + e, kind: block ? 'block' : 'line', value }) });
  } else {
    let c; const r = /\/\*([\s\S]*?)\*\//g;
    while ((c = r.exec(body))) found.push({ start: from + c.index, end: from + r.lastIndex, kind: 'css', value: c[1] });
  }
  at = re.lastIndex;
}
markup(joined.slice(at), at);
found.sort((a, b) => a.start - b.start);

const blocks = [];
for (const c of found) {
  const prev = blocks[blocks.length - 1];
  if (prev && c.kind === 'line' && prev.kind === 'line' && /^[ \t]*\n[ \t]*$/.test(joined.slice(prev.end, c.start)))
    { prev.end = c.end; prev.value += '\n' + c.value; }
  else blocks.push(Object.assign({}, c));
}

function clean(b) {
  const ls = b.value.split('\n').map(l => (b.kind === 'block' || b.kind === 'css') ? l.replace(/^[ \t]*\*(?!\/)[ \t]?/, '') : l);
  const body = ls.map(l => l.replace(/\s+$/, ''));
  const rest = body.slice(1).filter(l => l.trim());
  const ind = rest.length ? Math.min(...rest.map(l => l.match(/^ */)[0].length)) : 0;
  return body.map((l, i) => i ? l.slice(ind) : l.trim()).join('\n').replace(/^\n+|\n+$/g, '');
}
function version(v) {
  const own = v.match(/(?:Version\s+|\bV)(\d{3})\b[\s,;:(—-]*Keren|Keren[\s,;:(—-]*(?:Version\s+|\bV)(\d{3})\b/);
  if (own) return Number(own[1] || own[2]);
  const any = v.match(/(?:Version\s+|\bV)(\d{3})\b/);
  return any ? Number(any[1]) : null;
}
function near(b) {
  const { part, line } = locate(b.start);
  const src = text[manifest.indexOf(part)].split('\n');
  if (part.endsWith('.js') || b.kind === 'line' || b.kind === 'block') {
    for (let i = line - 1; i >= 0; i--) {
      const f = src[i].match(/function\s+([\w$]+)\s*\(|([\w$]+)\s*[:=]\s*function\b/);
      if (f) return 'in or after `' + (f[1] || f[2]) + '`';
    }
    return 'at the top of the part';
  }
  const endLine = locate(b.end).line;
  for (let i = endLine; i < Math.min(src.length, endLine + 6); i++) {
    const s = src[i].trim(); if (!s || s.startsWith('/*') || s.startsWith('<!--')) continue;
    return 'before `' + s.slice(0, 60).replace(/`/g, "'") + (s.length > 60 ? '…' : '') + '`';
  }
  return '';
}

const entries = blocks.filter(b => /Keren/.test(b.value)).map(b => {
  const t = clean(b);
  return Object.assign(locate(b.start), { v: version(t), text: t, near: near(b) });
}).sort((a, b) => (a.v || 9999) - (b.v || 9999) || manifest.indexOf(a.part) - manifest.indexOf(b.part) || a.line - b.line);

const out = [];
out.push('# Keren\'s decisions', '');
out.push('Every design and editorial decision in Gyneconomy is Keren\'s. Until ' + tag + ' they were recorded in the code',
  'comments beside what they govern, together with the history of how each part reached its shape. At Keren\'s',
  'request the history then left the comments, and this register kept the decisions.', '',
  'Part 1 is every comment in the source at ' + tag + ' that names Keren, copied word for word by',
  '`tools/decisions.js`, with the file and line where it stood. It is an archive: a later decision can supersede',
  'an earlier one; the latest on a subject is the one in force. The full annotated source is',
  'still in git:', '', '```sh', 'git show ' + tag + ':src/js/07-forms.js', '```', '',
  'Part 2 is for decisions made after ' + tag + '. Add each one there, with the version and her',
  'words. Since V650 the source has no comments, so this register is the only place a decision is written down.', '');
out.push('## Part 1 · the register at ' + tag, '', entries.length + ' comments, by version, then by file and line.', '');
let last;
for (const e of entries) {
  const head = e.v ? 'V' + e.v : 'Undated';
  if (head !== last) { out.push('### ' + head, ''); last = head; }
  out.push('`' + e.part + '` line ' + e.line + (e.near ? ', ' + e.near : ''), '', '~~~text', e.text, '~~~', '');
}
out.push('## Part 2 · after ' + tag, '', '_None yet._', '');
const OUT = path.join(ROOT, 'docs/DECISIONS.md');
if (fs.existsSync(OUT) && !process.argv.includes('--force')) {
  const kept = fs.readFileSync(OUT, 'utf8').split(/^## Part 2 .*$/m)[1] || '';
  if (kept.trim() !== '_None yet._') {
    console.error('docs/DECISIONS.md already has decisions in part 2 — refusing to overwrite them (--force to regenerate anyway)');
    process.exit(1);
  }
}
fs.writeFileSync(OUT, out.join('\n'));
console.log('wrote docs/DECISIONS.md — ' + entries.length + ' comments naming Keren, from ' + tag);
