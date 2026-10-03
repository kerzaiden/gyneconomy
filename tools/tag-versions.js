#!/usr/bin/env node
const { execSync, execFileSync } = require('child_process');
const { compare } = require('./version.js');

const LEGACY = /^V(\d{3,}) — (.+)$/;
const SEMVER = /^(\d+\.\d+\.\d+) — (.+?)(?: \(#\d+\))?$/;
const TRAILER = /^(Co-Authored-By|Claude-Session|Signed-off-by):/i;

function slug(name) {
  return name.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function line(log) {
  const out = [];
  let floor = null;
  for (const c of log) {
    const s = SEMVER.exec(c.subject);
    if (!s || (floor !== null && compare(s[1], floor) >= 0)) continue;
    floor = s[1];
    out.push({ sha: c.sha, version: s[1], name: s[2] });
  }
  return out;
}

function plan(log, tags, buildAt) {
  const have = new Set(tags);
  const legacy = new Set(tags.map(t => /^v(\d+)-/.exec(t)).filter(Boolean).map(m => Number(m[1])));
  const current = new Map(line(log).map(v => [v.sha, v]));
  const seen = new Set(), out = [];
  for (const c of log) {
    const s = SEMVER.exec(c.subject), l = !s && LEGACY.exec(c.subject), v = current.get(c.sha);
    if (s && v) {
      const tag = 'v' + v.version;
      if (have.has(tag)) continue;
      out.push({ tag, sha: c.sha, message: v.version + ' (build ' + buildAt(c.sha) + ') — ' + v.name });
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

function notes(body, build) {
  const kept = body.split('\n').filter(l => !TRAILER.test(l)).join('\n').trim();
  return 'Build ' + build + '.' + (kept ? '\n\n' + kept : '') + '\n';
}

function pushTag(tag) {
  try {
    execFileSync('git', ['push', 'origin', 'refs/tags/' + tag], { stdio: ['ignore', 'ignore', 'pipe'] });
    return true;
  } catch (e) {
    execFileSync('git', ['tag', '-d', tag], { stdio: 'ignore' });
    return false;
  }
}

function hasRelease(tag) {
  try { execFileSync('gh', ['release', 'view', tag], { stdio: 'ignore' }); return true; } catch (e) { return false; }
}

function release(sh, log, buildAt) {
  const tags = new Set(sh('git tag --list "v[0-9]*.*"').split('\n').filter(Boolean));
  const todo = line(log).filter(v => tags.has('v' + v.version)).reverse();
  todo.forEach((v, i) => {
    const tag = 'v' + v.version;
    if (hasRelease(tag)) return;
    execFileSync('gh', ['release', 'create', tag, '--verify-tag', '--latest=' + (i === todo.length - 1),
      '--title', v.version + ' — ' + v.name, '--notes-file', '-'],
      { input: notes(sh('git log -1 --format=%b ' + v.sha), buildAt(v.sha)), stdio: ['pipe', 'ignore', 'inherit'] });
    console.log('release ' + tag);
  });
}

function main() {
  const sh = c => execSync(c, { encoding: 'utf8' });
  const log = sh('git log --format=%H%x09%s HEAD').split('\n').filter(Boolean)
    .map(l => { const i = l.indexOf('\t'); return { sha: l.slice(0, i), subject: l.slice(i + 1) }; });
  const buildAt = sha => JSON.parse(sh('git show ' + sha + ':package.json')).build;
  const todo = plan(log, sh('git tag --list "v[0-9]*"').split('\n').filter(Boolean), buildAt);
  const apply = process.argv.includes('--apply'), lost = [];
  if (!todo.length) console.log('every version is tagged');
  for (const t of todo) {
    console.log((apply ? 'tag ' : 'would tag ') + t.tag + ' → ' + t.sha.slice(0, 7) + '  ' + t.message);
    if (!apply) continue;
    execSync('git tag -a ' + t.tag + ' -F - ' + t.sha, { input: t.message });
    if (!pushTag(t.tag)) lost.push(t.tag);
  }
  if (lost.length) console.log('\nrefused by GitHub, left untagged: ' + lost.join(', '));
  if (process.argv.includes('--release')) release(sh, log, buildAt);
  if (lost.some(t => /^v\d+\.\d+\.\d+$/.test(t))) process.exitCode = 1;
}

if (require.main === module) main(); else module.exports = { plan, line, notes, slug };
