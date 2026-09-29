#!/usr/bin/env node
const V = require('./version');

const arg = process.argv[2];
const tag = V.newestTag();
let n;
if (arg !== undefined) {
  n = Number(arg);
  if (!Number.isInteger(n) || n <= 0) { console.error('bump: not a version number: ' + arg); process.exit(2); }
} else {
  n = Math.max(V.major(), tag || 0) + 1;
}

const was = V.major();
if (n < was) console.error('bump: ' + n + ' is BELOW the current ' + was + ' — going backwards on purpose?');
V.setPackage(n);
V.stamp();
console.log('version ' + was + ' → ' + n + '  (package.json and sw.js)' + (tag !== null ? '   newest tag: v' + tag : ''));
