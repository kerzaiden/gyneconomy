#!/usr/bin/env node
const path = require('path');
const { pageUrl } = require('../tools/snapshot.js');
let pass = 0, fail = 0;
function ok(label, got, want) {
  const g = JSON.stringify(got), w = JSON.stringify(want);
  if (g === w) { pass++; console.log('  ok   ' + label); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + g + '\n       want ' + w); }
}
const here = pageUrl('index.html'), url = new URL(here);
ok('a relative path becomes a file URL the browser can open', [url.protocol, url.pathname.endsWith('/index.html')], ['file:', true]);
ok('the relative path resolves from where the snapshot runs', decodeURIComponent(url.pathname), path.resolve('index.html'));
ok('an absolute path keeps its place', pageUrl(path.resolve('index.html')), here);
ok('a path with a space is escaped', new URL(pageUrl('/tmp/a b/index.html')).pathname, '/tmp/a%20b/index.html');
console.log(pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
