#!/usr/bin/env node
/* Move the app to its next version number.

     npm run bump          # one past the higher of package.json and the newest tag
                           #   (V647: tags are made by the Tag workflow after a merge, so a checkout
                           #   can be a version ahead of its newest tag; counting from the tag alone
                           #   named V644 twice)
     npm run bump 640      # a number you name

   Writes package.json and stamps sw.js from it (see tools/version.js). Run it before committing a
   V6NN version, so the commit, the tag, the package and the worker's cache name all say the same thing. */
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
