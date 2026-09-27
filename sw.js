/* Gyneconomy service worker.

   The app is one HTML file whose FIGURES are baked into it, so caching strategy is not a
   detail here: a stale cache means a reader is shown stale economics. Hence:

     navigations / HTML  -> network first, cache as fallback   (fresh when online, works offline)
     everything else     -> cache first, network to fill       (icons, fonts: they do not go stale)

   Bump VERSION on any release that changes the shell. Old caches are dropped on activate.
   Nothing here may throw on a browser without the APIs: the page must work with no worker at all. */

var VERSION = 'gyn-587';
var SHELL = [
  './',
  './index.html',
  './sources.html',
  './manifest.webmanifest',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', function (e) {
  // addAll fails the whole install if ONE entry 404s, which would leave the app uncached and
  // silent about it — so each is added on its own and a miss is survivable.
  e.waitUntil(
    caches.open(VERSION).then(function (c) {
      return Promise.all(SHELL.map(function (u) {
        return c.add(u).catch(function () { /* one missing file must not sink the install */ });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === VERSION ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.origin !== self.location.origin) return;   // fonts and anything else: leave to the browser

  var wantsHtml = req.mode === 'navigate' ||
                  (req.headers.get('accept') || '').indexOf('text/html') !== -1;

  if (wantsHtml) {
    /* Network first, and `no-store` so it MEANS it (Version 551). Without it the fetch goes through
       the browser's own HTTP cache, and GitHub Pages serves this file with a max-age — so "network
       first" could still hand back a page minutes old, which on a page whose figures are baked into
       it is a stale economic reading. */
    e.respondWith(
      fetch(req, { cache: 'no-store' }).then(function (res) {
        var copy = res.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copy); }).catch(function () {});
        return res;
      }).catch(function () {
        return caches.match(req).then(function (hit) {
          return hit || caches.match('./index.html');
        });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        if (res && res.status === 200 && res.type === 'basic') {
          var copy = res.clone();
          caches.open(VERSION).then(function (c) { c.put(req, copy); }).catch(function () {});
        }
        return res;
      });
    })
  );
});
