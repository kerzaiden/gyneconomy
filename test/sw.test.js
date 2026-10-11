#!/usr/bin/env node
const fs = require('fs'), path = require('path'), vm = require('vm');
let pass = 0, fail = 0;
function ok(label, got, want) {
  const g = JSON.stringify(got), w = JSON.stringify(want);
  if (g === w) { pass++; console.log('  ok   ' + label); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + g + '\n       want ' + w); }
}
const code = fs.readFileSync(path.join(__dirname, '..', 'sw.js'), 'utf8');
const ORIGIN = 'https://gyn.test';
function res(body, status) { return { body, status, ok: status >= 200 && status < 300, type: 'basic', clone() { return res(body, status); } }; }
const VERSION = /var VERSION = '([^']+)'/.exec(code)[1];
function worker(net, names) {
  const store = new Map(), on = {}, deleted = [], asked = [];
  const caches = {
    open: async () => ({ put: async (r, v) => { store.set(typeof r === 'string' ? r : r.url, v); }, add: async u => { store.set(new URL(u, ORIGIN + '/').href, res('shell ' + u, 200)); } }),
    match: async r => store.get(new URL(typeof r === 'string' ? r : r.url, ORIGIN + '/').href),
    keys: async () => names || [], delete: async k => { deleted.push(k); return true; }
  };
  const self = { addEventListener: (k, f) => { on[k] = f; }, location: { origin: ORIGIN }, skipWaiting() {}, clients: { claim() {} } };
  vm.runInNewContext(code, { self, caches, fetch: async u => { asked.push(typeof u === 'string' ? u : u.url); return net(u); }, URL, Promise });
  return {
    store, deleted, asked,
    async install() { let p; on.install({ waitUntil: x => { p = x; } }); await p; },
    async activate() { let p; on.activate({ waitUntil: x => { p = x; } }); await p; },
    async get(p, html) {
      const url = ORIGIN + p, request = { url, method: 'GET', mode: html ? 'navigate' : 'cors', headers: { get: () => '' } };
      let answer;
      on.fetch({ request, respondWith: x => { answer = x; } });
      const r = await answer;
      await new Promise(f => setImmediate(f));
      return r && r.body;
    }
  };
}
(async () => {
  const fresh0 = worker(() => { throw new Error('offline'); });
  await fresh0.install();
  ok('install stores the page the offline fallback serves', fresh0.store.has(ORIGIN + '/index.html'), true);
  ok('offline, a page never visited falls back to the stored app', await fresh0.get('/elsewhere', true), 'shell ./index.html');
  const page = worker(() => res('page v1', 200));
  await page.get('/index.html', true);
  ok('a good page is stored', page.store.get(ORIGIN + '/index.html').body, 'page v1');
  const down = worker(() => res('error page', 503));
  down.store.set(ORIGIN + '/index.html', res('page v1', 200));
  ok('a 503 page gives way to the stored copy', await down.get('/index.html', true), 'page v1');
  ok('the 503 page is never stored', down.store.get(ORIGIN + '/index.html').body, 'page v1');
  const off = worker(() => Promise.reject(new Error('offline')));
  off.store.set(ORIGIN + '/index.html', res('page v1', 200));
  ok('offline, the stored page is served', await off.get('/', true), 'page v1');
  const data = worker(() => res('{"bad":1}', 500));
  data.store.set(ORIGIN + '/data/live.json', res('{"good":1}', 200));
  await data.get('/data/live.json');
  ok('a failed data answer is never stored', data.store.get(ORIGIN + '/data/live.json').body, '{"good":1}');
  const fresh = worker(() => res('{"new":1}', 200));
  ok('fresh data is served and stored', [await fresh.get('/data/live.json'), fresh.store.get(ORIGIN + '/data/live.json').body], ['{"new":1}', '{"new":1}']);
  const old = worker(() => res('', 200), ['gyn-1', VERSION]);
  await old.activate();
  ok('activate deletes every old cache and keeps this version', old.deleted, ['gyn-1']);
  const offData = worker(() => Promise.reject(new Error('offline')));
  offData.store.set(ORIGIN + '/data/live.json', res('{"kept":1}', 200));
  ok('offline, data is served from the cache', await offData.get('/data/live.json'), '{"kept":1}');
  const asset = worker(() => res('icon v2', 200));
  asset.store.set(ORIGIN + '/assets/icon-192.png', res('icon v1', 200));
  ok('a stored asset is served from the cache without asking the network', [await asset.get('/assets/icon-192.png'), asset.asked], ['icon v1', []]);
  ok('an asset not yet stored is fetched once and stored', [await asset.get('/assets/icon-512.png'), asset.store.get(ORIGIN + '/assets/icon-512.png').body, asset.asked.length], ['icon v2', 'icon v2', 1]);
  console.log(pass + ' passed, ' + fail + ' failed');
  process.exit(fail ? 1 : 0);
})();
