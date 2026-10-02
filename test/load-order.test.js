const { analyze } = require('../tools/load-order.js');

let pass = 0, fail = 0;
function ok(label, got, want) {
  const g = JSON.stringify(got), w = JSON.stringify(want);
  if (g === w) { pass++; console.log('  ok   ' + label.padEnd(56) + g); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + g + '\n       want ' + w); }
}
const mods = parts => parts.map((text, i) => ({ name: 'p' + i + '.js', text }));
const late = (...parts) => analyze(mods(parts), []).problems.map(p => p.v);
const booted = (parts, order) => analyze(mods(parts), order).problems.map(p => p.v);

ok('a value read before it is set is caught', late('var a = b + 1;', 'var b = 2;'), ['b']);
ok('a value read after it is set passes', late('var b = 2;', 'var a = b + 1;'), []);
ok('a read inside a called function is caught', late('function f(){ return b; }', 'var a = f();', 'var b = 2;'), ['b']);
ok('a read two calls deep is caught', late('function g(){ return b; } function f(){ return g(); }', 'f();', 'var b = 1;'), ['b']);
ok('a read inside forEach runs now and is caught', late('[1].forEach(function(){ a = b; });', 'var a, b = 1;'), ['b']);
ok('a read inside an event handler runs later and passes', late('document.addEventListener("x", function(){ return b; });', 'var b = 1;'), []);
ok('a function that is only defined, not called, passes', late('function f(){ return b; }', 'var b = 1;', 'f();'), []);
ok('a value the called function sets first passes', late('function init(){ b = 1; return b; }', 'var a = init();', 'var b;'), []);
ok('a local of the same name is not the shared value', late('function f(b){ return b; }', 'f(1);', 'var b = 2;'), []);
ok('a typeof guard is not a read', late('var a = typeof b === "undefined";', 'var b = 1;'), []);
ok('a declaration with no value is not a setting', late('var b;', 'var a = b + 1;', 'b = 2;'), ['b']);
ok('a module export is read like any shared value', late('export var b = c;', 'export var c = 1;'), ['c']);
ok('a boot runs when main calls it, not where it is declared', booted(['export function bootA(){ a = b; }', 'export var b = 1;'], ['bootA']), []);
ok('a boot that reads what a later boot sets is caught', booted(['export var b;\nexport function bootA(){ a = b; }', 'export function bootB(){ b = 1; }'], ['bootA', 'bootB']), ['b']);
ok('the same boots in the other order pass', booted(['export var b;\nexport function bootA(){ a = b; }', 'export function bootB(){ b = 1; }'], ['bootB', 'bootA']), []);
ok('a boot nobody calls does not run', booted(['export function bootA(){ a = b; }', 'var b;'], []), []);

console.log('\n' + pass + '/' + (pass + fail) + ' passed');
process.exit(fail ? 1 : 0);
