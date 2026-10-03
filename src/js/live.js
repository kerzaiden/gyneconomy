import { fmtAsOf } from "./format.js";

export var liveAsOf = {}, liveApplied = {};
export function merge(base, over){
  var o = {};
  if (base && typeof base === "object" && !Array.isArray(base))
    for (var b in base) if (Object.prototype.hasOwnProperty.call(base, b)) o[b] = base[b];
  for (var k in over) if (Object.prototype.hasOwnProperty.call(over, k)) o[k] = over[k];
  return o;
}
function docValue(d){
  if (!d || typeof d !== "object") return null;
  if (d.kind === "series") return Array.isArray(d.rows) ? d.rows : null;
  if (d.kind === "scalar") return d.value === undefined ? null : d.value;
  if (d.kind !== "object") return null;
  var over = {}, any = false;
  for (var k in d) if (k !== "kind" && Object.prototype.hasOwnProperty.call(d, k)){ over[k] = d[k]; any = true; }
  return any ? over : null;
}
function docOk(name, d){
  var r = READINGS[name];
  try { return !!r && shapeOk(r, docValue(d)) && plainText(d); } catch (e) { return false; }
}
export function plainText(v){
  if (typeof v === "string") return !/[<>"]/.test(v);
  if (v && typeof v === "object") return Object.keys(v).every(function(k){ return plainText(k) && plainText(v[k]); });
  return true;
}
export function LIVE(name, fallback){
  var d = LIVE_CACHE[name];
  if (!docOk(name, d)) return fallback;
  liveApplied[name] = JSON.stringify(d);
  if (d.asOf) liveAsOf[name] = fmtAsOf(d.asOf);
  return d.kind === "object" ? merge(fallback, docValue(d)) : docValue(d);
}
export function liveIsoOf(name){
  try { return JSON.parse(liveApplied[name] || "{}").asOf || ""; } catch (e) { return ""; }
}
export function liveInto(name){
  var v = LIVE(name, null);
  if (v != null) READINGS[name].set(v);
}
/* ---- The first series to come from outside the file ---- */
export function repaintLive(){
  LIVE_NAMES.forEach(function(n){
    (painters[n] || []).forEach(function(fn){ try { fn(); } catch (e) { if (window.console) console.warn("repaint " + n + " failed", e); } });
  });
}
function shapeOk(r, v){
  if (r.kind === "series") return Array.isArray(v) && v.length > 0 && (r.ok ? !!r.ok(v) : true);
  if (r.kind === "scalar") return typeof v === "number" && v >= r.band[0] && v <= r.band[1];
  if (!v || typeof v !== "object" || Array.isArray(v)) return false;
  return r.ok ? !!r.ok(v) : true;
}
export var GYN = {
  steps: [],
  step: function(name, fn, kind){ this.steps.push({ name: name, fn: fn, kind: kind }); return fn; },
  of: function(kind){ return this.steps.filter(function(s){ return s.kind === kind; }); },
  repeatable: function(){
    return this.steps.filter(function(s){
      return s.kind === "check" || s.kind === "derive" || s.kind === "render";
    });
  },
  acts: {},
  on: function(name, fn){ this.acts[name] = fn; return fn; },
  has: function(name){ return typeof this.acts[name] === "function"; },
  fire: function(name, a, b){
    if (this.has(name)) return this.acts[name](a, b);
    (window.__actMiss = window.__actMiss || []).push(name);
  },
  render: function(){
    this.repeatable().forEach(function(s){
      try { s.fn(); } catch (e) { if (window.console) console.warn("GYN.render: " + s.name, e); }
    });
    return this.repeatable().length;
  }
};

export var LIVE_NAMES, LIVE_CACHE, READINGS;
var painters = {};
export function defineReadings(r){
  READINGS = r;
  LIVE_NAMES = Object.keys(r);
}
export function onLive(name, fn){ (painters[name] || (painters[name] = [])).push(fn); }
export function exposeLive(){
  try { window.__GYN = GYN; GYN.applyLive = applyLive; GYN.READINGS = READINGS; } catch (e) {}
}
var KINDS = ["object", "series", "scalar"];
export function checkLiveCoverage(){
  var bad = [];
  LIVE_NAMES.forEach(function(n){
    var r = READINGS[n], shows = (painters[n] && painters[n].length) ? 1 : 0;
    if (KINDS.indexOf(r.kind) < 0) bad.push(n + ": kind " + r.kind);
    if (r.kind === "scalar" && !(r.band && r.band.length === 2 && r.band[0] < r.band[1]))
      bad.push(n + ": a scalar needs a band");
    if (typeof r.set !== "function") bad.push(n + ": nowhere to land");
    if (shows + (r.onOpen ? 1 : 0) !== 1)
      bad.push(n + ": " + (shows ? (r.onOpen ? "paints AND declares onOpen" : "") : "no painter and no onOpen"));
    (painters[n] || []).forEach(function(f){ if (typeof f !== "function") bad.push(n + ": painter is not a function"); });
  });
  if (bad.length && window.console) console.warn("reading registry: " + bad.join(", "));
}
function receive(next, mode){
  var names = Object.keys(next).filter(function(n){ return docOk(n, next[n]); });
  if (!names.length) return 0;
  var fresh = {}, moved = 0;
  names.forEach(function(n){ fresh[n] = next[n]; });
  var now = mode === "replace" ? fresh : merge(LIVE_CACHE, fresh);
  try { window.localStorage.setItem("gyn.live", JSON.stringify(now)); } catch (e) {}
  LIVE_CACHE = now;
  names.forEach(function(name){
    var doc = JSON.stringify(next[name]);
    if (next[name].asOf) liveAsOf[name] = fmtAsOf(next[name].asOf);
    if (liveApplied[name] === doc) return;
    if (applyLive(name, docValue(next[name]))) { liveApplied[name] = doc; moved++; }
  });
  return moved;
}
function applyLive(name, value){
  if (value == null) return false;
  var r = READINGS[name];
  if (!r) return false;
  try {
    if (!shapeOk(r, value)) return false;
    r.set(value);
  } catch (e) { return false; }
  (painters[name] || []).concat(painters["*"] || []).forEach(function(fn){
    try { fn(); } catch (e) { if (window.console) console.warn("repaint " + name + " failed", e); }
  });
  return true;
}
export function refreshLiveData(){
  if (!window.claude || typeof window.claude.use !== "function") return;
  window.claude.use("db").then(function(db){
    if (!db) return;
    return Promise.all(LIVE_NAMES.map(function(name){
      return db.doc("data/" + name).get().then(function(row){
        var d = row && (row.data || row);
        return (d && typeof d === "object") ? [name, d] : null;
      }).catch(function(){ return null; });
    })).then(function(rows){
      var next = {}, got = 0;
      rows.forEach(function(r){ if (r){ next[r[0]] = r[1]; got++; } });
      if (!got) return;
      receive(next, "replace");
    });
  }).catch(function(){});
}
export function fetchSiteData(){
  try {
    if (window.top !== window.self) return;
    if (location.protocol !== "http:" && location.protocol !== "https:") return;
    if (typeof fetch !== "function") return;
  } catch (e) { return; }
  fetch("data/live.json", { cache: "no-store" }).then(function(r){
    return r.ok ? r.json() : null;
  }).then(function(doc){
    if (!doc || typeof doc !== "object") return;
    var next = {};
    for (var k in doc) if (k !== "_meta" && Object.prototype.hasOwnProperty.call(doc, k)) next[k] = doc[k];
    receive(next, "merge");
  }).catch(function(){  });
}

export function bootLive(){
  LIVE_CACHE = (function(){
    try { return JSON.parse(window.localStorage.getItem("gyn.live") || "{}") || {}; }
    catch (e) { return {}; }
  })();
}
