#!/usr/bin/env node
const { plan, slug } = require('../tools/tag-versions.js');
let pass = 0, fail = 0;
function ok(label, got, want) {
  const g = JSON.stringify(got), w = JSON.stringify(want);
  if (g === w) { pass++; console.log('  ok   ' + label); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + g + '\n       want ' + w); }
}
const c = (sha, subject) => ({ sha, subject });
ok('names match the existing tags', slug('Gross And Held'), 'gross-and-held');
ok('punctuation becomes one dash', slug("Data, Enforced"), 'data-enforced');
ok('only versions above the newest tag are tagged',
   plan([c('c', 'V645 — Daily Refresh'), c('b', 'V644 — Latest Close'), c('a', 'V642 — In Step')], ['v642-in-step', 'v641-gross-and-held']),
   [{ n: 644, sha: 'b', tag: 'v644-latest-close' }, { n: 645, sha: 'c', tag: 'v645-daily-refresh' }]);
ok('data commits and ordinary commits are not versions',
   plan([c('d', 'Data: yieldCurve, fedFunds'), c('e', 'Backfill: Fed funds')], []), []);
ok('the newest commit of a number wins',
   plan([c('new', 'V619 — One Paint: ledger, .tag 11 → 10'), c('old', 'V619 — One Paint')], []),
   [{ n: 619, sha: 'new', tag: 'v619-one-paint' }]);
ok('nothing to do when everything is tagged', plan([c('a', 'V642 — In Step')], ['v642-in-step']), []);
console.log('\n' + pass + '/' + (pass + fail) + ' passed');
process.exit(fail ? 1 : 0);
