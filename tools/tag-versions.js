#!/usr/bin/env node
const { execSync } = require('child_process');

const LEGACY = /^V(\d{3,}) — (.+)$/;
const SEMVER = /^(\d+\.\d+\.\d+) — (.+?)(?: \(#\d+\))?$/;

function slug(name) {
  return name.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function plan(log, tags, buildAt) {
  const have = new Set(tags);
  const legacy = new Set(tags.map(t => /^v(\d+)-/.exec(t)).filter(Boolean).map(m => Number(m[1])));
  const seen = new Set(), out = [];
  for (const c of log) {
    const s = SEMVER.exec(c.subject), l = !s && LEGACY.exec(c.subject);
    if (s) {
      const tag = 'v' + s[1];
      if (have.has(tag) || seen.has(tag)) continue;
      seen.add(tag);
      out.push({ tag, sha: c.sha, message: s[1] + ' (build ' + buildAt(c.sha) + ') — ' + s[2] });
    } else if (l) {
      const n = Number(l[1]);
      if (legacy.has(n) || seen.has(n)) continue;
      seen.add(n);
      const tag = 'v' + n + '-' + slug(l[2].split(':')[0]);
      out.push({ tag, sha: c.sha, message: tag });
    }
  }
  return out.reverse();
}

function main() {
  const sh = c => execSync(c, { encoding: 'utf8' });
  const log = sh('git log --format=%H%x09%s HEAD').split('\n').filter(Boolean)
    .map(l => { const i = l.indexOf('\t'); return { sha: l.slice(0, i), subject: l.slice(i + 1) }; });
  const buildAt = sha => JSON.parse(sh('git show ' + sha + ':package.json')).build;
  const todo = plan(log, sh('git tag --list "v[0-9]*"').split('\n').filter(Boolean), buildAt);
  if (!todo.length) { console.log('every version is tagged'); return; }
  const apply = process.argv.includes('--apply');
  for (const t of todo) {
    console.log((apply ? 'tag ' : 'would tag ') + t.tag + ' → ' + t.sha.slice(0, 7) + '  ' + t.message);
    if (apply) execSync('git tag -a ' + t.tag + ' -F - ' + t.sha, { input: t.message });
  }
}

if (require.main === module) main(); else module.exports = { plan, slug };
