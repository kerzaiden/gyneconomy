#!/usr/bin/env node
/* Tag every version that has landed on main and has no tag yet (V647).

   Run by .github/workflows/tag.yml on every push to main. A version is a commit whose subject is
   "V6NN — Name"; its tag is `v6NN-name-in-kebab-case`, the form every tag since V600 has taken. Claude
   Code sessions in the cloud cannot push tags, so from V643 the tags stopped; this makes them a
   consequence of merging instead of a step someone has to remember.

   It only ADDS tags, and only for versions above the newest one already tagged. It never moves or
   deletes a tag: a tag that points somewhere unexpected is for a person to look at, not for a script
   to rewrite.

   Usage: node tools/tag-versions.js            prints the plan
          node tools/tag-versions.js --apply    creates the tags locally (the workflow pushes them) */
const { execSync } = require('child_process');

const SUBJECT = /^V(\d{3,}) — (.+)$/;

function slug(name) {
  return name.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/* log: [{sha, subject}] newest first; tags: existing tag names. Returns [{tag, sha, n}], oldest first. */
function plan(log, tags) {
  const tagged = tags.map(t => /^v(\d+)-/.exec(t)).filter(Boolean).map(m => Number(m[1]));
  const floor = tagged.length ? Math.max(...tagged) : 0;
  const seen = new Set(), out = [];
  for (const c of log) {
    const m = SUBJECT.exec(c.subject);
    if (!m) continue;
    const n = Number(m[1]);
    if (n <= floor || seen.has(n)) continue;       // newest commit of a number wins; older ones are its drafts
    seen.add(n);
    out.push({ n, sha: c.sha, tag: 'v' + n + '-' + slug(m[2].split(':')[0]) });
  }
  return out.sort((a, b) => a.n - b.n);
}

function main() {
  const sh = c => execSync(c, { encoding: 'utf8' });
  const log = sh('git log --format=%H%x09%s HEAD').split('\n').filter(Boolean)
    .map(l => { const i = l.indexOf('\t'); return { sha: l.slice(0, i), subject: l.slice(i + 1) }; });
  const todo = plan(log, sh('git tag --list "v[0-9]*"').split('\n').filter(Boolean));
  if (!todo.length) { console.log('every version is tagged'); return; }
  for (const t of todo) {
    console.log((process.argv.includes('--apply') ? 'tag ' : 'would tag ') + t.tag + ' → ' + t.sha.slice(0, 7));
    if (process.argv.includes('--apply')) sh('git tag -a ' + t.tag + ' -m ' + t.tag + ' ' + t.sha);
  }
}

if (require.main === module) main(); else module.exports = { plan, slug };
