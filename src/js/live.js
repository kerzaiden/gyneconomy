import { fmtAsOf } from "./format.js";

export var liveAsOf = {}, liveApplied = {};
export function merge(base, over){
  var o = {};
  if (base && typeof base === "object" && !Array.isArray(base))
    for (var b in base) if (Object.prototype.hasOwnProperty.call(base, b)) o[b] = base[b];
  for (var k in over) if (Object.prototype.hasOwnProperty.call(over, k)) o[k] = over[k];
  return o;
}
export function docValue(d){
  if (!d || typeof d !== "object") return null;
  if (d.kind === "series") return Array.isArray(d.rows) ? d.rows : null;
  if (d.kind === "scalar") return d.value === undefined ? null : d.value;
  if (d.kind !== "object") return null;
  var over = {}, any = false;
  for (var k in d) if (k !== "kind" && Object.prototype.hasOwnProperty.call(d, k)){ over[k] = d[k]; any = true; }
  return any ? over : null;
}
export function docOk(name, d){
  var r = READINGS[name];
  try { return !!r && shapeOk(r, docValue(d)) && JSON.stringify(d).indexOf("<") < 0; } catch (e) { return false; }
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
    (READINGS[n].paint || []).forEach(function(fn){ try { fn(); } catch (e) { if (window.console) console.warn("repaint " + n + " failed", e); } });
  });
}
export function shapeOk(r, v){
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

export function setLIVE_CACHE(v){ LIVE_CACHE = v; return v; }
export function setREADINGS(v){ READINGS = v; return v; }
export function setLIVE_NAMES(v){ LIVE_NAMES = v; return v; }

export var LIVE_NAMES, LIVE_CACHE, READINGS;

export function bootLive(){
  LIVE_CACHE = (function(){
    try { return JSON.parse(window.localStorage.getItem("gyn.live") || "{}") || {}; }
    catch (e) { return {}; }
  })();
}
