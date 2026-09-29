#!/usr/bin/env node
/* Removes every comment from the app's source, keeping only one-line section titles.

   Keren, V650: "I think you can just remove all the comments … nobody can follow up on so many comments."
   The why behind the code lives in docs/ARCHITECTURE.md, her decisions in docs/DECISIONS.md and the rules
   in CLAUDE.md; the history is in git. A section title (a comment that is only `---- Title ----`)
   is kept, because tools/make-map.py builds the navigation map from them.

   Comments are found with acorn, the parser terser depends on, because a comment cannot be found by
   pattern in JavaScript (see tools/strip.js). The generated part js/03b-history-fred.js is left alone:
   the backfill writes it, header and all.

   Usage: node tools/uncomment.js            rewrite src/ in place
          node tools/uncomment.js --check    exit 1 if any comment other than a section title remains
   Then: node tools/comment-proof.js proves the page it builds is unchanged. */
const fs = require('fs'), path = require('path');
const acorn = require('acorn');

const ROOT = path.join(__dirname, '..'), SRC = path.join(ROOT, 'src');
const CHECK = process.argv.includes('--check');
const SKIP = new Set(['js/03b-history-fred.js']);
const manifest = JSON.parse(fs.readFileSync(path.join(SRC, 'manifest.json'), 'utf8'));
const text = manifest.map(p => fs.readFileSync(path.join(SRC, p), 'utf8'));
const starts = []; let off = 0;
text.forEach(t => { starts.push(off); off += t.length + 1; });
const joined = text.join('\n');
const partAt = pos => { let i = starts.length - 1; while (starts[i] > pos) i--; return i; };

/* CSS: a scanner that skips strings and url(), as tools/strip.js does. */
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
function comments() {
  const found = [];
  const re = /(<(script|style)\b[^>]*>)([\s\S]*?)(<\/\2>)/gi;
  let m, at = 0;
  const markup = (s, from) => { let c; const r = /<!--([\s\S]*?)-->/g; while ((c = r.exec(s))) found.push({ start: from + c.index, end: from + r.lastIndex, kind: 'html', value: c[1] }); };
  while ((m = re.exec(joined))) {
    markup(joined.slice(at, m.index), at);
    const body = m[3], from = m.index + m[1].length;
    if (m[2].toLowerCase() === 'script')
      acorn.parse(body, { ecmaVersion: 'latest', allowReturnOutsideFunction: true,
        onComment: (block, value, s, e) => found.push({ start: from + s, end: from + e, kind: block ? 'block' : 'line', value }) });
    else cssComments(body, from, found);
    at = re.lastIndex;
  }
  markup(joined.slice(at), at);
  return found.filter(c => !SKIP.has(manifest[partAt(c.start)]));
}

/* A section title: the comment's first line is dashes, a title, and optionally dashes. */
const TITLE = /^\s*-{3,}\s*(.*?)\s*-*\s*$/;
function title(c) {
  if (c.kind === 'html') return null;
  const m = c.value.split('\n')[0].match(TITLE);
  if (!m) return null;
  const t = m[1].replace(/\s+/g, ' ').trim();
  return t.length >= 3 ? t : null;
}
function titled(c) {
  const t = title(c);
  return c.kind === 'line' ? '// ---- ' + t + ' ----' : '/* ---- ' + t + ' ---- */';
}

const all = comments();
const stray = all.filter(c => !title(c) || c.value.includes('\n') || c.value.trim() !== ('---- ' + title(c) + ' ----'));

if (CHECK) {
  const bad = all.filter(c => !title(c) || c.value.trim() !== '---- ' + title(c) + ' ----');
  if (bad.length) {
    const c = bad[0], i = partAt(c.start), line = text[i].slice(0, c.start - starts[i]).split('\n').length;
    console.error(bad.length + ' comment(s) in src/ — the app keeps none but one-line section titles. First: src/' + manifest[i] + ':' + line
      + '\n  run: node tools/uncomment.js   (the why belongs in docs/ARCHITECTURE.md, a decision of Keren\'s in docs/DECISIONS.md)');
    process.exit(1);
  }
  console.log('ok: no comments in src/ but ' + all.length + ' section titles');
  process.exit(0);
}

/* Rewrite each part from its last comment to its first, so earlier offsets stay valid. */
const byPart = new Map();
for (const c of stray) { const i = partAt(c.start); if (!byPart.has(i)) byPart.set(i, []); byPart.get(i).push(c); }
let removed = 0, kept = 0;
for (const [i, list] of byPart) {
  let s = text[i];
  list.sort((a, b) => b.start - a.start);
  for (const c of list) {
    const a = c.start - starts[i], b = c.end - starts[i];
    const ls = s.lastIndexOf('\n', a - 1) + 1, le = s.indexOf('\n', b), lineEnd = le < 0 ? s.length : le;
    const before = s.slice(ls, a), after = s.slice(b, lineEnd);
    if (title(c)) { s = s.slice(0, a) + titled(c) + s.slice(b); kept++; continue; }
    removed++;
    if (!before.trim() && !after.trim()) {
      s = s.slice(0, ls) + s.slice(le < 0 ? s.length : le + 1);          // a comment on its own line(s): the lines go
    } else if (!after.trim()) {
      s = s.slice(0, ls) + before.replace(/\s+$/, '') + s.slice(lineEnd); // a trailing comment: it and the space before it go
    } else {
      const gap = /\S$/.test(before) && /^\S/.test(after) ? ' ' : '';
      s = s.slice(0, a) + gap + s.slice(b);                             // inside a line: keep the tokens apart
    }
  }
  s = s.replace(/\n[ \t]*\n([ \t]*\n)+/g, '\n\n');                        // never two blank lines in a row
  fs.writeFileSync(path.join(SRC, manifest[i]), s);
}
console.log('removed ' + removed + ' comments, kept ' + kept + ' section titles as one line, in ' + byPart.size + ' parts');
