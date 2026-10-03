#!/usr/bin/env node
const { fontSizes, pageScoped, nameBranches, chartFrames, unused, twice, cycles, layers, layerOrder, unusedTokens, gone, pinned, enclosing } = require('../tools/hygiene.js');

let pass = 0, fail = 0;
function ok(label, got, want) {
  const g = JSON.stringify(got), w = JSON.stringify(want);
  if (g === w) { pass++; console.log('  ok   ' + label); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + g + '\n       want ' + w); }
}

ok('a token font size passes', fontSizes('  .a{ font-size:var(--type-label); }'), []);
ok('a px font size is caught', fontSizes('  .a{ font-size:13px; }').length, 1);
ok('the token definitions themselves pass', fontSizes('    --type-label:11px; --type-meta:12.5px;'), []);
ok('the dial draws in its own units', fontSizes('  .cycle-dial .x{ font-size:4.2px; }'), []);
ok('calc and em pass', fontSizes('  .a{ font-size:calc(var(--dial) * 0.1); } .b{ font-size:0.8em; }'), []);
ok('a style aimed at one page is caught', pageScoped('  #sheet-sign-x .dv-bar{ stroke:red; }').length, 1);
ok('a page id behind an element is caught', pageScoped('  section#sheet-sign-x .dv-bar{ stroke:red; }').length, 1);
ok('a component class passes', pageScoped('  .dv-bar.good-above{ stroke:red; }'), []);
ok('a branch on a reading’s name is caught', nameBranches('a.js', 'if (ind.bodyTerm === "Desire") x();').length, 1);
ok('a lookup by name passes', nameBranches('a.js', 'list.filter(function(c){ return c.bodyTerm === "Desire"; })'), []);
ok('a px size in a script is caught', nameBranches('a.js', "'font-size:20px'").length, 1);
ok('the enclosing function is found', enclosing('\nfunction histFrame(W){\n  var H = 1;\n}', 30), 'histFrame');
ok('a height inside histFrame passes', chartFrames('a.js', '\nexport function histFrame(W){\n  var H = narrow ? 335 : 375;\n}'), []);
ok('a height anywhere else is caught', chartFrames('a.js', '\nfunction drawX(W){\n  var H = 260;\n}').length, 1);
ok('a margin in a mini chart passes', chartFrames('a.js', '\nexport function colPeek(a){\n  var padT = 6;\n}'), []);
ok('a margin in a history chart is caught', chartFrames('a.js', '\nfunction drawX(W){\n  var padB = 30;\n}').length, 1);
ok('an unused function is caught', unused('function lonely(){}', '', ''), ['function lonely is never used']);
ok('a function declared twice is caught', twice('function trendOf(a){}\nexport function trendOf(b){}\n'), ['function trendOf is declared 2 times; the last one silently replaces the others']);
ok('an inner function of the same name is not a second declaration', twice('function draw(){}\n  function draw(){}\n'), []);
ok('modules that import downward pass', cycles({ 'a.js':'import { x } from "./b.js";', 'b.js':'import { y } from "./c.js";', 'c.js':'' }), []);
ok('a circle written with single quotes is caught', cycles({ 'a.js':"import { x } from './b.js';", 'b.js':"import { y } from './a.js';" }).length, 1);
ok('modules that import in a circle are caught', cycles({ 'a.js':'import { x } from "./b.js";', 'b.js':'import { y } from "./a.js";' }), ['modules import in a circle: a.js \u2192 b.js \u2192 a.js']);
ok('a used function passes', unused('function a(){} a();', '', ''), []);
ok('an unused style is caught', unused('', '<div class="b"></div>', '.gone{ x:1 }'), ['style .gone matches nothing in the app']);
ok('a class built at run time passes', unused('', '', '.cat-mood{ x:1 } .f3{ x:1 }'), []);
ok('the bull and bear colours are built at run time', unused('', '', '.mkt-up{ x:1 } .mkt-down{ x:1 }'), []);
ok('an unread token is caught', unusedTokens(':root{ --gone:#000; --kept:#fff; } .a{ color:var(--kept); }', ''), ['token --gone is never read']);
ok('a token set from a script passes', unusedTokens(':root{ --w:11; } .a{ stroke-width:var(--w); }', 'el.style.setProperty("--w", 3);'), []);
ok('a token read from a script passes', unusedTokens(':root{ --c:#000; }', 'getPropertyValue("--c")'), []);
ok('a removed class coming back is caught', gone('.vh-line{ x:1 }').length, 1);
ok('a removed id coming back is caught', gone('<div id="growth-peers"></div>').length, 1);
ok('a longer name that contains a removed one passes', gone('.pbar-wide .xpbar'), []);
ok('the pinned geometry passes', pinned('var COL_FILL = 0.68; var AXIS = { L:37, R:6, T:10, LEG:20, RAIL:5, FOOT:8, READ:61 };'), []);
ok('a moved pin is caught', pinned('var COL_FILL = 0.7; var AXIS = { L:37, R:6, T:10, LEG:20, RAIL:5, FOOT:8, READ:61 };').length, 1);
ok('an unused generic function is caught', unused('function lonely<T>(x: T){ return x; }', '', ''), ['function lonely is never used']);
ok('the layer order is read from the doc', layerOrder('**The modules are layers** From the bottom: `a`, `b`, `main`.\n- next'), ['a', 'b', 'main']);
ok('an import from a layer below passes', layers({ 'a.ts': '', 'b.ts': 'import { x } from "./a.ts";' }, ['a', 'b']), []);
ok('an import from a layer above is caught', layers({ 'a.ts': 'import { y } from "./b.ts";', 'b.ts': '' }, ['a', 'b']).length, 1);
ok('a module missing from the order is caught', layers({ 'c.ts': '' }, ['a']).length, 1);

console.log('\n' + (fail ? fail + ' FAILED, ' : '') + pass + '/' + (pass + fail) + ' passed\n');
process.exit(fail ? 1 : 0);
