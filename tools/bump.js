#!/usr/bin/env node
const V = require('./version');

const kind = process.argv[2];
const was = V.read();
const version = kind && V.next(was.version, kind);
if (!version) {
  if (kind === 'major' && was.version.startsWith('0.')) {
    console.error('bump: 1.0.0 is kept for the finished first draft — before it, a major change moves the minor number (npm run bump minor), and 1.0.0 is given exactly: npm run bump 1.0.0');
    process.exit(2);
  }
  console.error('bump: say which number moves — npm run bump major | minor | patch (or an exact 1.2.3). The rule is in docs/DECISIONS.md, under Versions.');
  process.exit(2);
}
const tags = V.newestTags();
if (tags.version && V.compare(version, tags.version) <= 0)
  console.error('bump: ' + version + ' is not above the newest tag v' + tags.version + ' — going backwards on purpose?');
const now = { version, build: Math.max(was.build, tags.build || 0) + 1 };
V.setPackage(now);
V.stamp();
console.log('version ' + V.label(was) + ' → ' + V.label(now) + '  (package.json, sw.js, the menu)');
