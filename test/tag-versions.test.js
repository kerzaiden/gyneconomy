#!/usr/bin/env node
const { plan, line, taken, notes, slug } = require('../tools/tag-versions.js');
const V = require('../tools/version.js');
let pass = 0, fail = 0;
function ok(label, got, want) {
  const g = JSON.stringify(got), w = JSON.stringify(want);
  if (g === w) { pass++; console.log('  ok   ' + label); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + g + '\n       want ' + w); }
}
const c = (sha, subject) => ({ sha, subject });
const builds = { s: 708, t: 709, z: 727, n: 728 };
const at = sha => builds[sha];
ok('names match the existing tags', slug('Gross And Held'), 'gross-and-held');
ok('punctuation becomes one dash', slug("Data, Enforced"), 'data-enforced');
ok('an old version is tagged by its number, oldest first',
   plan([c('c', 'V645 — Daily Refresh'), c('b', 'V644 — Latest Close'), c('a', 'V642 — In Step')], ['v642-in-step'], at),
   [{ tag: 'v644-latest-close', sha: 'b', message: 'v644-latest-close' }, { tag: 'v645-daily-refresh', sha: 'c', message: 'v645-daily-refresh' }]);
ok('an old version that lands late is still tagged',
   plan([c('d', 'V703 — Desire as Durables (#65)')], ['v707-tight-types-66'], at),
   [{ tag: 'v703-desire-as-durables-65', sha: 'd', message: 'v703-desire-as-durables-65' }]);
ok('a semantic version is tagged vX.Y.Z, its build and name in the message',
   plan([c('t', '1.1.0 — Next Thing (#68)'), c('s', '1.0.0 — Semantic Versions (#67)')], [], at),
   [{ tag: 'v1.0.0', sha: 's', message: '1.0.0 (build 708) — Semantic Versions' }, { tag: 'v1.1.0', sha: 't', message: '1.1.0 (build 709) — Next Thing' }]);
ok('data commits and ordinary commits are not versions',
   plan([c('d', 'Data: yieldCurve, fedFunds'), c('e', 'Backfill: Fed funds')], [], at), []);
ok('the newest commit of a number wins',
   plan([c('new', 'V619 — One Paint: ledger, .tag 11 → 10'), c('old', 'V619 — One Paint')], [], at),
   [{ tag: 'v619-one-paint', sha: 'new', message: 'v619-one-paint' }]);
ok('nothing to do when everything is tagged',
   plan([c('s', '1.0.0 — Semantic Versions'), c('a', 'V642 — In Step')], ['v1.0.0', 'v642-in-step'], at), []);
ok('a line given up for a lower number is not tagged again',
   plan([c('n', '0.1.0 — Tags And Releases (#82)'), c('z', '0.0.9 — Model Cards (#81)'), c('t', '1.1.0 — Next Thing (#68)')], [], at),
   [{ tag: 'v0.0.9', sha: 'z', message: '0.0.9 (build 727) — Model Cards' }, { tag: 'v0.1.0', sha: 'n', message: '0.1.0 (build 728) — Tags And Releases' }]);
ok('the current line runs newest first, each number below the one after it',
   line([c('n', '0.1.0 — B'), c('z', '0.0.9 — A'), c('t', '1.1.0 — Old')]).map(v => v.version), ['0.1.0', '0.0.9']);
ok('a version whose tag already names a commit of the line given up is reported, not tagged or released',
   [plan([c('n2', '1.0.0 — First Draft (#99)'), c('n', '0.1.0 — B'), c('s', '1.0.0 — Semantic Versions (#67)')], ['v1.0.0', 'v0.1.0'], at),
    taken([c('n2', '1.0.0 — First Draft (#99)'), c('n', '0.1.0 — B'), c('s', '1.0.0 — Semantic Versions (#67)')], { 'v1.0.0': 's', 'v0.1.0': 'n' })],
   [[], [{ tag: 'v1.0.0', sha: 'n2', held: 's' }]]);
ok('a version tagged on its own commit is not reported', taken([c('n', '0.1.0 — B')], { 'v0.1.0': 'n' }), []);
ok('release notes open with the build and drop the trailers',
   notes('* one change\n\nCo-Authored-By: someone\nClaude-Session: link', 728), 'Build 728.\n\n* one change\n');
ok('minor resets patch', V.next('1.4.2', 'minor'), '1.5.0');
ok('major resets minor and patch', V.next('1.4.2', 'major'), '2.0.0');
ok('major refuses on 0.x, which keeps 1.0.0 for the finished draft', V.next('0.0.9', 'major'), null);
ok('1.0.0 is given exactly', V.next('0.9.3', '1.0.0'), '1.0.0');
ok('patch moves the last number', V.next('1.4.2', 'patch'), '1.4.3');
ok('an exact version is taken as given', V.next('1.4.2', '1.6.0'), '1.6.0');
ok('a bump must say which number moves', V.next('1.4.2', 'bigger'), null);
ok('versions compare by number, not by text', V.compare('1.10.0', '1.9.0') > 0, true);
ok('the newest build counts old and new tags',
   V.fromTags(['v707-tight-types-66\tv707-tight-types-66', 'v1.0.0\t1.0.0 (build 708) — Semantic Versions', 'v703-desire\tv703-desire']),
   { build: 708, version: '1.0.0' });
console.log('\n' + pass + '/' + (pass + fail) + ' passed');
process.exit(fail ? 1 : 0);
