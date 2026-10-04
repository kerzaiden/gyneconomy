const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const DOC = path.join(ROOT, 'docs', 'DESIGN-SYSTEM.md');
const css = fs.readFileSync(path.join(ROOT, 'src', 'styles.css'), 'utf8');
const head = fs.readFileSync(path.join(ROOT, 'src', 'page-head.html'), 'utf8');
const ARTIFACT = 'https://claude.ai/artifact/SJtyaefrGJLftH7j45P9aX';
const APP = 'https://claude.ai/artifact/2xTPnvFGpfjNxPnjqHVEZF';

function block(at) {
  const open = css.indexOf('{', at), out = {};
  let depth = 0, end = open;
  for (let i = open; i < css.length; i++) {
    if (css[i] === '{') depth++;
    if (css[i] === '}' && --depth === 0) { end = i; break; }
  }
  css.slice(open + 1, end).replace(/--([\w-]+)\s*:\s*([^;]+);/g, (m, k, v) => { out[k] = v.trim(); return m; });
  return out;
}
function need(re) {
  const m = re.exec(css);
  if (!m) throw new Error('design-doc: no ' + re);
  return m.index;
}
const light = block(need(/^ {2}:root\{/m));
const dark = block(need(/:root\[data-theme="dark"\]\{\n/));
const scale = block(need(/^ {2}:root\{\n {4}--badge-fill/m));
const darkSeasons = block(need(/:root\[data-theme="dark"\]\{ --badge-fill/));

const short = v => v.length > 60 ? v.slice(0, 57) + '…' : v;
const cell = v => v == null ? '—' : '`' + short(v).replace(/\|/g, '\\|') + '`';
function table(keys, a, b, heads) {
  return '| ' + heads.join(' | ') + ' |\n|' + heads.map(() => '---').join('|') + '|\n' +
    keys.map(k => '| `--' + k + '` | ' + cell(a[k]) + (b ? ' | ' + cell(b[k]) : '') + ' |').join('\n') + '\n';
}
const pick = (o, re) => Object.keys(o).filter(k => re.test(k));
const fonts = (/family=([^"]+)"/.exec(head) || ['', ''])[1].split('&family=').map(f => f.replace(/[:&].*$/, '').replace(/\+/g, ' '));

function doc() {
  const colours = Object.keys(light).filter(k => !/^splash/.test(k));
  return [
    '# Design system',
    '',
    'Generated from `src/styles.css` and `src/page-head.html` by `npm run map`; `npm run check` fails when it is stale.',
    'Never edit it by hand: change the tokens, then run `npm run map`. Why each rule holds is in `docs/DECISIONS.md`.',
    '',
    '- **Living reference:** the design-system artifact, ' + ARTIFACT + ' (tokens, components, previews).',
    '- **The app itself:** ' + APP + '.',
    '- **Where it came from (0.6.2–0.6.3):** Keren\'s plum health-app reference (dark plum, light pink, apricot to marigold) and the Clair hormone app (Cormorant titles, grey-and-white segmented bar). White containers on an apricot-and-blush splash; plum for brand and ink.',
    '',
    '## Type',
    '',
    'Fonts: ' + fonts.map(f => '**' + f + '**').join(', ') + '. Cormorant Garamond 500 upright sets titles and page names; Public Sans sets everything else; IBM Plex Mono sets figures in charts.',
    '',
    table(pick(scale, /^type-/), scale, null, ['Token', 'Size']),
    '## Spacing and shape',
    '',
    '`--pad` is the space inside a container and `--gap` the space between containers; a new container takes `margin-top:var(--gap)`.',
    '',
    table(pick(scale, /^(pad|gap|gap-top|topbar-gap|radius|radius-inner|mini-w|mini-h)$/), scale, null, ['Token', 'Value']),
    '## Colour',
    '',
    'Light and dark values of every colour token. Dark applies under `prefers-color-scheme: dark` and under `data-theme="dark"`.',
    '',
    table(colours, light, dark, ['Token', 'Light', 'Dark']),
    '## Seasons',
    '',
    table(pick(scale, /^season-/), scale, darkSeasons, ['Token', 'Light', 'Dark']),
    '## Splash',
    '',
    'Two fixed layers behind every page (`body::before` apricot `--splash-a`, `body::after` blush `--splash-b`), three soft blobs each. They breathe slowly and, where scroll-driven animation exists, flow apart as the page scrolls; with reduced motion they hold still.',
    '',
    '## Components',
    '',
    'The shared components and the classes they own are listed in `docs/COMPONENTS.md`; the source map is `docs/MAP.md`.',
    ''
  ].join('\n');
}

if (process.argv[2] === '--check') {
  const now = fs.existsSync(DOC) ? fs.readFileSync(DOC, 'utf8') : '';
  if (now !== doc()) { console.error('DESIGN-SYSTEM.md is OUT OF DATE — run: npm run map'); process.exit(1); }
  console.log('DESIGN-SYSTEM.md is current');
} else {
  fs.writeFileSync(DOC, doc());
  console.log('wrote docs/DESIGN-SYSTEM.md');
}
