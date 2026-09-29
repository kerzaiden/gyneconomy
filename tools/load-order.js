#!/usr/bin/env node
const fs = require('fs'), path = require('path');
const acorn = require('acorn');

function analyze(manifest, text) {
const joined = text.join('\n');
const starts = []; let off = 0;
text.forEach(t => { starts.push(off); off += t.length + 1; });

const scripts = [...joined.matchAll(/<script>([\s\S]*?)<\/script>/g)];
const main = scripts.sort((a, b) => b[1].length - a[1].length)[0];
const base = main.index + '<script>'.length;
const ast = acorn.parse(main[1], { ecmaVersion: 'latest', allowReturnOutsideFunction: true });
const where = pos => {
  const at = base + pos; let i = starts.length - 1; while (starts[i] > at) i--;
  return manifest[i] + ':' + text[i].slice(0, at - starts[i]).split('\n').length;
};

const wrapper = ast.body.find(s => s.type === 'ExpressionStatement' && s.expression.type === 'CallExpression'
  && /Function/.test(s.expression.callee.type));
if (!wrapper) throw new Error('the script is not one wrapped function');
const top = wrapper.expression.callee.body.body;

const isFn = n => n && /^(FunctionDeclaration|FunctionExpression|ArrowFunctionExpression)$/.test(n.type);
function declared(body, into) {
  (function walk(n) {
    if (!n || typeof n.type !== 'string') return;
    if (n.type === 'VariableDeclaration') n.declarations.forEach(d => pattern(d.id, into));
    if (n.type === 'FunctionDeclaration') { into.add(n.id.name); return; }
    if (isFn(n)) return;
    for (const k in n) { const v = n[k]; if (Array.isArray(v)) v.forEach(walk); else if (v && typeof v.type === 'string') walk(v); }
  })(body);
  return into;
}
function pattern(p, into) {
  if (!p) return;
  if (p.type === 'Identifier') into.add(p.name);
  else if (p.type === 'ObjectPattern') p.properties.forEach(q => pattern(q.value || q.argument, into));
  else if (p.type === 'ArrayPattern') p.elements.forEach(e => pattern(e, into));
  else if (p.type === 'AssignmentPattern') pattern(p.left, into);
  else if (p.type === 'RestElement') pattern(p.argument, into);
}

const moduleVars = new Set(), moduleFns = new Map();
top.forEach(s => {
  if (s.type === 'FunctionDeclaration') moduleFns.set(s.id.name, s);
  else declared(s, moduleVars);
});

const RUNS_NOW = new Set(['forEach', 'map', 'filter', 'reduce', 'reduceRight', 'some', 'every', 'sort', 'find', 'findIndex', 'flatMap']);

function effects(node, scopes) {
  const out = { reads: new Map(), writes: new Set(), calls: new Set() };
  const local = name => scopes.some(s => s.has(name));
  function fnScope(f) {
    const s = new Set(); f.params.forEach(p => pattern(p, s));
    if (f.id && f.type === 'FunctionExpression') s.add(f.id.name);
    declared(f.body, s); return s;
  }
  function enter(f) { scopes.push(fnScope(f)); visit(f.body); scopes.pop(); }
  function visit(n, parent) {
    if (!n || typeof n.type !== 'string') return;
    if (n.type === 'FunctionDeclaration') return;
    if (isFn(n)) return;
    if (n.type === 'CallExpression') {
      const c = n.callee;
      if (isFn(c)) enter(c);
      else visit(c, n);
      if (c.type === 'Identifier' && !local(c.name) && moduleFns.has(c.name)) out.calls.add(c.name);
      const runs = c.type === 'MemberExpression' && !c.computed && RUNS_NOW.has(c.property.name);
      n.arguments.forEach(a => {
        if (isFn(a)) { if (runs) enter(a); }
        else { visit(a, n); if (runs && a.type === 'Identifier' && moduleFns.has(a.name) && !local(a.name)) out.calls.add(a.name); }
      });
      return;
    }
    if (n.type === 'UnaryExpression' && n.operator === 'typeof' && n.argument.type === 'Identifier') return;
    if (n.type === 'AssignmentExpression' || n.type === 'UpdateExpression') {
      const t = n.type === 'AssignmentExpression' ? n.left : n.argument;
      if (t.type === 'Identifier') {
        if (!local(t.name) && moduleVars.has(t.name)) {
          if (n.type === 'UpdateExpression' || n.operator !== '=') read(t);
          visit(n.right); out.writes.add(t.name); return;
        }
      }
    }
    if (n.type === 'VariableDeclarator') { visit(n.init); if (scopes.length === 0 && n.init) pattern(n.id, out.writes); return; }
    if (n.type === 'Identifier') { read(n, parent); return; }
    if (n.type === 'MemberExpression') { visit(n.object, n); if (n.computed) visit(n.property, n); return; }
    if (n.type === 'Property') { if (n.computed) visit(n.key, n); visit(n.value, n); return; }
    if (n.type === 'LabeledStatement' || n.type === 'BreakStatement' || n.type === 'ContinueStatement') { if (n.body) visit(n.body, n); return; }
    for (const k in n) {
      const v = n[k];
      if (Array.isArray(v)) v.forEach(x => visit(x, n)); else if (v && typeof v.type === 'string') visit(v, n);
    }
  }
  function read(id) {
    if (local(id.name) || !moduleVars.has(id.name)) return;
    if (!out.reads.has(id.name)) out.reads.set(id.name, id.start);
  }
  if (isFn(node)) enter(node); else visit(node);
  return out;
}

const fnFx = new Map();
moduleFns.forEach((f, name) => fnFx.set(name, effects(f, [])));
const closure = new Map();
function reach(name, seen) {
  if (closure.has(name)) return closure.get(name);
  if (seen.has(name)) return { reads: new Map(), writes: new Set(), via: new Map() };
  seen.add(name);
  const own = fnFx.get(name), r = { reads: new Map(own.reads), writes: new Set(own.writes), via: new Map() };
  own.reads.forEach((_, v) => r.via.set(v, [name]));
  own.calls.forEach(c => {
    const sub = reach(c, seen);
    sub.reads.forEach((p, v) => { if (!r.reads.has(v)) { r.reads.set(v, p); r.via.set(v, [name].concat(sub.via.get(v) || [c])); } });
    sub.writes.forEach(v => r.writes.add(v));
  });
  seen.delete(name);
  if (!seen.size) closure.set(name, r);
  return r;
}

const set = new Set(), problems = [];
top.forEach(s => {
  if (s.type === 'FunctionDeclaration') return;
  const fx = effects(s, []);
  const reads = new Map(), via = new Map(), writes = new Set(fx.writes);
  fx.reads.forEach((p, v) => { reads.set(v, p); via.set(v, []); });
  fx.calls.forEach(c => {
    const r = reach(c, new Set());
    r.reads.forEach((p, v) => { if (!reads.has(v)) { reads.set(v, p); via.set(v, r.via.get(v) || [c]); } });
    r.writes.forEach(v => writes.add(v));
  });
  reads.forEach((p, v) => {
    if (set.has(v) || writes.has(v)) return;
    problems.push({ v, at: where(s.start), use: where(p), via: via.get(v) });
  });
  writes.forEach(v => set.add(v));
});

return { problems, statements: top.length, shared: moduleVars.size };
}

module.exports = { analyze };

if (require.main === module) {
  const SRC = path.join(__dirname, '..', 'src');
  const manifest = JSON.parse(fs.readFileSync(path.join(SRC, 'manifest.json'), 'utf8'));
  let r;
  try { r = analyze(manifest, manifest.map(p => fs.readFileSync(path.join(SRC, p), 'utf8'))); }
  catch (e) { console.error('load-order: ' + e.message); process.exit(2); }
  const problems = r.problems;
if (problems.length) {
  console.error('LOAD ORDER — ' + problems.length + ' value(s) read before anything sets them:');
  problems.forEach(p => console.error('  ' + p.v.padEnd(22) + ' read at ' + p.use + (p.via.length ? ' (via ' + p.via.join(' → ') + ')' : '') + ', during the statement at ' + p.at));
  console.error('Move the assignment above the first statement that needs it, or the statement below it.');
  process.exit(1);
}
console.log('ok: load order — ' + r.statements + ' top-level statements, ' + r.shared + ' shared values, none read before it is set');
}
