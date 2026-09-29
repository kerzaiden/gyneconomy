#!/usr/bin/env node
const fs = require('fs'), path = require('path');
const acorn = require('acorn');
const { minify } = require('terser');

const ROOT = path.join(__dirname, '..'), SRC = path.join(ROOT, 'src');
const CHECK = process.argv.includes('--check');
const manifest = JSON.parse(fs.readFileSync(path.join(SRC, 'manifest.json'), 'utf8'));
const scripts = () => ['tools', 'test'].flatMap(d => fs.readdirSync(path.join(ROOT, d))
  .filter(f => f.endsWith('.js')).map(f => d + '/' + f)).concat(['sw.js']);

const TITLE = /^\s*-{3,}\s*(.*?)\s*-*\s*$/;
function title(c) {
  if (c.kind === 'html') return null;
  const m = c.value.split('\n')[0].match(TITLE);
  if (!m) return null;
  const t = m[1].replace(/\s+/g, ' ').trim();
  return t.length >= 3 ? t : null;
}
const tidyTitle = c => title(c) && !c.value.includes('\n') && c.value.trim() === '---- ' + title(c) + ' ----';

function cssComments(body, from, out) {
  let i = 0;
  while (i < body.length) {
    const c = body[i];
    if (c === '/' && body[i + 1] === '*') {
      const end = body.indexOf('*/', i + 2), e = end < 0 ? body.length : end + 2;
      out.push({ start: from + i, end: from + e, kind: 'css', value: body.slice(i + 2, e - 2) }); i = e; continue;
    }
    if (c === '"' || c === "'") { let j = i + 1; while (j < body.length && body[j] !== c) j += body[j] === '\\' ? 2 : 1; i = j + 1; continue; }
    if (body.startsWith('url(', i)) { const e = body.indexOf(')', i); if (e > 0) { i = e + 1; continue; } }
    i++;
  }
}
function jsComments(code, from, out) {
  acorn.parse(code, { ecmaVersion: 'latest', allowHashBang: true, allowReturnOutsideFunction: true,
    onComment: (block, value, s, e) => { if (!code.startsWith('#!', s)) out.push({ start: from + s, end: from + e, kind: block ? 'block' : 'line', value }); } });
}

function remove(s, list, keepTitles) {
  let removed = 0, kept = 0;
  list.slice().sort((a, b) => b.start - a.start).forEach(c => {
    const a = c.start, b = c.end;
    const ls = s.lastIndexOf('\n', a - 1) + 1, le = s.indexOf('\n', b), lineEnd = le < 0 ? s.length : le;
    const before = s.slice(ls, a), after = s.slice(b, lineEnd);
    if (keepTitles && title(c)) {
      s = s.slice(0, a) + (c.kind === 'line' ? '// ---- ' : '/* ---- ') + title(c) + (c.kind === 'line' ? ' ----' : ' ---- */') + s.slice(b);
      kept++; return;
    }
    removed++;
    if (!before.trim() && !after.trim()) s = s.slice(0, ls) + s.slice(le < 0 ? s.length : le + 1);
    else if (!after.trim()) s = s.slice(0, ls) + before.replace(/\s+$/, '') + s.slice(lineEnd);
    else s = s.slice(0, a) + (/\S$/.test(before) && /^\S/.test(after) ? ' ' : '') + s.slice(b);
  });
  return { s: s.replace(/\n[ \t]*\n([ \t]*\n)+/g, '\n\n').replace(/^(#!.*\n)?\n+/, '$1'), removed, kept };
}

function srcComments(text) {
  const starts = []; let off = 0;
  text.forEach(t => { starts.push(off); off += t.length + 1; });
  const joined = text.join('\n'), found = [];
  const re = /(<(script|style)\b[^>]*>)([\s\S]*?)(<\/\2>)/gi;
  let m, at = 0;
  const markup = (s, from) => { let c; const r = /<!--([\s\S]*?)-->/g; while ((c = r.exec(s))) found.push({ start: from + c.index, end: from + r.lastIndex, kind: 'html', value: c[1] }); };
  while ((m = re.exec(joined))) {
    markup(joined.slice(at, m.index), at);
    const from = m.index + m[1].length;
    if (m[2].toLowerCase() === 'script') jsComments(m[3], from, found); else cssComments(m[3], from, found);
    at = re.lastIndex;
  }
  markup(joined.slice(at), at);
  const partAt = pos => { let i = starts.length - 1; while (starts[i] > pos) i--; return i; };
  return found.map(c => { const i = partAt(c.start); return Object.assign(c, { part: i, start: c.start - starts[i], end: c.end - starts[i] }); });
}

const plain = code => minify(code, { compress: false, mangle: false, format: { comments: false, beautify: true } }).then(r => r.code);

(async () => {
  const text = manifest.map(p => fs.readFileSync(path.join(SRC, p), 'utf8'));
  const inSrc = srcComments(text);
  const files = scripts().map(f => { const s = fs.readFileSync(path.join(ROOT, f), 'utf8'), list = []; jsComments(s, 0, list); return { f, s, list }; });

  if (CHECK) {
    const bad = inSrc.filter(c => !tidyTitle(c)).map(c => 'src/' + manifest[c.part] + ':' + text[c.part].slice(0, c.start).split('\n').length)
      .concat(files.filter(x => x.list.length).map(x => x.f + ':' + x.s.slice(0, x.list[0].start).split('\n').length));
    if (bad.length) {
      console.error('comments in the code — it keeps none but one-line section titles in src/. First: ' + bad[0] + '\n  run: npm run uncomment');
      process.exit(1);
    }
    console.log('ok: no comments in the code');
    return;
  }

  let removed = 0, kept = 0, touched = 0;
  manifest.forEach((p, i) => {
    const list = inSrc.filter(c => c.part === i && !tidyTitle(c));
    if (!list.length) return;
    const r = remove(text[i], list, true);
    fs.writeFileSync(path.join(SRC, p), r.s); removed += r.removed; kept += r.kept; touched++;
  });
  for (const x of files) {
    if (!x.list.length) continue;
    const r = remove(x.s, x.list, false);
    if (await plain(x.s) !== await plain(r.s)) { console.error('REFUSING ' + x.f + ': removing its comments would change its code'); process.exit(1); }
    fs.writeFileSync(path.join(ROOT, x.f), r.s); removed += r.removed; touched++;
  }
  console.log('removed ' + removed + ' comments' + (kept ? ', kept ' + kept + ' section titles' : '') + ' in ' + touched + ' files');
})().catch(e => { console.error('FAILED: ' + e.message); process.exit(1); });
