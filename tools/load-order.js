#!/usr/bin/env node
const fs = require('fs'), path = require('path');
const acorn = require('acorn');

function analyze(mods, bootOrder) {
  const bases = []; let off = 0;
  mods.forEach(m => { bases.push(off); off += m.text.length + 1; });
  const modAt = pos => { let i = bases.length - 1; while (bases[i] > pos) i--; return i; };
  const where = pos => { const m = modAt(pos); return mods[m].name + ':' + mods[m].text.slice(0, pos - bases[m]).split('\n').length; };
  function shift(n, by) {
    if (!n || typeof n.type !== 'string') return;
    n.start += by; n.end += by;
    for (const k in n) { const v = n[k]; if (Array.isArray(v)) v.forEach(x => shift(x, by)); else if (v && typeof v.type === 'string') shift(v, by); }
  }
  const bodies = mods.map((m, i) => { const a = acorn.parse(m.text, { ecmaVersion: 'latest', sourceType: 'module' }); shift(a, bases[i]); return a; }).map(a => a.body
    .filter(s => s.type !== 'ImportDeclaration')
    .map(s => s.type === 'ExportNamedDeclaration' && s.declaration ? s.declaration : s));
  const bootOf = new Map();
  bodies.forEach((body, m) => body.forEach(s => {
    if (s.type === 'FunctionDeclaration' && /^boot[A-Z]/.test(s.id.name)) bootOf.set(s.id.name, { m, s });
  }));
  const top = [];
  bodies.forEach((body, m) => body.forEach(s => {
    if (s.type === 'ExportNamedDeclaration') return;
    if (s.type === 'ExpressionStatement' && s.expression.type === 'CallExpression' && s.expression.callee.type === 'Identifier' && bootOf.has(s.expression.callee.name)) return;
    if (!(s.type === 'FunctionDeclaration' && bootOf.has(s.id.name))) top.push(Object.assign(s, { mod: m }));
  }));
  (bootOrder || []).forEach(name => {
    const b = bootOf.get(name);
    if (!b) throw new Error('main calls ' + name + ', which no module declares');
    b.s.body.body.forEach(s => top.push(Object.assign(s, { mod: b.m })));
  });
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

  const moduleVars = new Set(), moduleFns = new Map(), stores = new Set();
  const plain = v => !isFn(v) && v.type !== 'CallExpression' && v.type !== 'NewExpression';
  top.forEach(s => {
    if (s.type === 'FunctionDeclaration') moduleFns.set(s.id.name, s);
    else declared(s, moduleVars);
    if (s.type === 'VariableDeclaration') s.declarations.forEach(d => {
      if (d.id.type !== 'Identifier' || !d.init || d.init.type !== 'ObjectExpression') return;
      if (!d.init.properties.every(p => p.type === 'Property' && !p.computed && p.key.type === 'Identifier' && plain(p.value))) return;
      stores.add(d.id.name);
      d.init.properties.forEach(p => moduleVars.add(d.id.name + '.' + p.key.name));
    });
  });
  const storeKey = n => n && n.type === 'MemberExpression' && !n.computed && n.object.type === 'Identifier' && stores.has(n.object.name) ? n.object.name + '.' + n.property.name : null;

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
        const sk = storeKey(t);
        if (sk && !local(t.object.name) && moduleVars.has(sk)) {
          if (n.type === 'UpdateExpression' || n.operator !== '=') read({ name: sk, start: t.start });
          visit(n.right); out.writes.add(sk); return;
        }
        if (t.type === 'Identifier') {
          if (!local(t.name) && moduleVars.has(t.name)) {
            if (n.type === 'UpdateExpression' || n.operator !== '=') read(t);
            visit(n.right); out.writes.add(t.name); return;
          }
        }
      }
      if (n.type === 'VariableDeclarator') {
        visit(n.init);
        if (scopes.length === 0 && n.init) pattern(n.id, out.writes);
        if (scopes.length === 0 && n.id.type === 'Identifier' && stores.has(n.id.name))
          n.init.properties.forEach(p => { if (!(p.value.type === 'Identifier' && p.value.name === 'undefined')) out.writes.add(n.id.name + '.' + p.key.name); });
        return;
      }
      if (n.type === 'Identifier') { read(n, parent); return; }
      if (n.type === 'MemberExpression') {
        const sk = storeKey(n);
        if (sk && !local(n.object.name) && moduleVars.has(sk)) read({ name: sk, start: n.start });
        visit(n.object, n); if (n.computed) visit(n.property, n); return;
      }
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

  return { problems, statements: top.length, shared: moduleVars.size, modules: mods.length };
}

module.exports = { analyze };

if (require.main === module) {
  const { scriptModules, bootOrder } = require('./source');
  const { evalOrder } = require('./bundle');
  let r;
  try {
    const mods = scriptModules(), order = evalOrder();
    mods.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
    const main = mods.find(m => m.name === 'js/main.js');
    const boots = [...main.text.matchAll(/^(boot[A-Z]\w*)\(\);$/gm)].map(m => m[1]);
    r = analyze(mods, boots);
  }
  catch (e) { console.error('load-order: ' + e.message); process.exit(2); }
  const problems = r.problems;
  if (problems.length) {
    console.error('LOAD ORDER — ' + problems.length + ' value(s) read before anything sets them:');
    problems.forEach(p => console.error('  ' + p.v.padEnd(22) + ' read at ' + p.use + (p.via.length ? ' (via ' + p.via.join(' → ') + ')' : '') + ', during the statement at ' + p.at));
    console.error('Move the assignment above the first statement that needs it, or the statement below it.');
    process.exit(1);
  }
  console.log('ok: load order — ' + r.statements + ' statements at load across ' + r.modules + ' modules, ' + r.shared + ' shared values, none read before it is set');
}
