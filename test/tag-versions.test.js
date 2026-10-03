#!/usr/bin/env node
const { plan, slug } = require('../tools/tag-versions.js');
const V = require('../tools/version.js');
let pass = 0, fail = 0;
function ok(label, got, want) {
  const g = JSON.stringify(got), w = JSON.stringify(want);
  if (g === w) { pass++; console.log('  ok   ' + label); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + g + '\n       want ' + w); }
}
const c = (sha, subject) => ({ sha, subject });
const builds = { s: 708, t: 709 };
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
ok('minor resets patch', V.next('1.4.2', 'minor'), '1.5.0');
ok('major resets minor and patch', V.next('1.4.2', 'major'), '2.0.0');
ok('patch moves the last number', V.next('1.4.2', 'patch'), '1.4.3');
ok('an exact version is taken as given', V.next('1.4.2', '1.6.0'), '1.6.0');
ok('a bump must say which number moves', V.next('1.4.2', 'bigger'), null);
ok('versions compare by number, not by text', V.compare('1.10.0', '1.9.0') > 0, true);
ok('the newest build counts old and new tags',
   V.fromTags(['v707-tight-types-66\tv707-tight-types-66', 'v1.0.0\t1.0.0 (build 708) — Semantic Versions', 'v703-desire\tv703-desire']),
   { build: 708, version: '1.0.0' });
console.log('\n' + pass + '/' + (pass + fail) + ' passed');
process.exit(fail ? 1 : 0);
