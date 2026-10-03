import { fmtAsOf } from "./format.ts";

export type StepKind = "check" | "derive" | "render" | "wire" | "build" | "live" | "mixed";
export type GynStep = { name: string; fn: () => unknown; kind: StepKind };
export type GynAct = (a: never, b: never) => void;
export type Gyn = {
  steps: GynStep[];
  step<F extends () => unknown>(name: string, fn: F, kind: StepKind): F;
  of(kind: StepKind): GynStep[];
  repeatable(): GynStep[];
  acts: Record<string, GynAct>;
  on<F extends GynAct>(name: string, fn: F): F;
  has(name: string): boolean;
  fire(name: string, a?: unknown, b?: unknown): void;
  render(): number;
  applyLive?: (name: string, value: unknown, d?: LiveDoc) => boolean;
  READINGS?: Record<string, LiveReading>;
  ROSTER?: RosterRow[];
};

export var liveAsOf: Record<string, string | undefined> = {}, liveApplied: Record<string, string | undefined> = {};
export function merge<B, O>(base: B, over: O): B & O {
  return Object.assign({}, base && typeof base === "object" && !Array.isArray(base) ? base : {}, over) as B & O;
}
function docValue(d: LiveDoc | null | undefined): unknown {
  if (!d || typeof d !== "object") return null;
  if (d.kind === "series") return Array.isArray(d.rows) ? d.rows : null;
  if (d.kind === "scalar") return d.value === undefined ? null : d.value;
  if (d.kind !== "object") return null;
  var over: Record<string, unknown> = {}, any = false;
  for (var k in d) if (k !== "kind" && Object.prototype.hasOwnProperty.call(d, k)){ over[k] = d[k]; any = true; }
  return any ? over : null;
}
function docOk(name: string, d: LiveDoc | null | undefined){
  var r = READINGS[name];
  try { return !!r && shapeOk(r, docValue(d)) && plainText(d); } catch (e) { return false; }
}
export function plainText(v: unknown): boolean {
  if (typeof v === "string") return !/[<>"]/.test(v);
  if (v && typeof v === "object") return Object.keys(v).every(function(k){ return plainText(k) && plainText((v as Record<string, unknown>)[k]); });
  return true;
}
export function liveIsoOf(name: string): string {
  try { return JSON.parse(liveApplied[name] || "{}").asOf || ""; } catch (e) { return ""; }
}
export function liveInto(name: string){
  var d = LIVE_CACHE[name], r = READINGS[name];
  var file = r && r.fileAsOf ? Date.parse(r.fileAsOf()) : NaN, got = d && d.asOf ? Date.parse(d.asOf) : NaN;
  if (got < file) return false;
  return docOk(name, d) && landLive(name, docValue(d), d);
}
function landLive(name: string, value: unknown, d: LiveDoc | null | undefined){
  var r = READINGS[name], was = liveApplied[name], asOf = liveAsOf[name];
  if (d){ liveApplied[name] = JSON.stringify(d); if (d.asOf) liveAsOf[name] = fmtAsOf(d.asOf); }
  try {
    if (!shapeOk(r, value)) throw new Error("shape");
    r.set(value as never);
    return true;
  } catch (e) { liveApplied[name] = was; liveAsOf[name] = asOf; return false; }
}
/* ---- The first series to come from outside the file ---- */
export function repaintLive(){
  LIVE_NAMES.forEach(function(n){
    (painters[n] || []).forEach(function(fn){ try { fn(); } catch (e) { if (window.console) console.warn("repaint " + n + " failed", e); } });
  });
}
function shapeOk(r: LiveReading, v: unknown){
  if (r.kind === "series") return Array.isArray(v) && v.length > 0 && (r.ok ? !!r.ok(v) : true);
  if (r.kind === "scalar") return typeof v === "number" && v >= r.band[0] && v <= r.band[1];
  if (!v || typeof v !== "object" || Array.isArray(v)) return false;
  return r.ok ? !!r.ok(v as Record<string, unknown>) : true;
}
export var GYN: Gyn = {
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
    if (this.has(name)) return this.acts[name](a as never, b as never);
    (window.__actMiss = window.__actMiss || []).push(name);
  },
  render: function(){
    this.repeatable().forEach(function(s){
      try { s.fn(); } catch (e) { if (window.console) console.warn("GYN.render: " + s.name, e); }
    });
    return this.repeatable().length;
  }
};

export var LIVE_NAMES: string[], LIVE_CACHE: Record<string, LiveDoc>, READINGS: Record<string, LiveReading>;
var painters: Record<string, (() => void)[]> = {};
export function defineReadings(r: Record<string, LiveReading>){
  READINGS = r;
  LIVE_NAMES = Object.keys(r);
}
export function onLive(name: string, fn: () => void){ (painters[name] || (painters[name] = [])).push(fn); }
export function exposeLive(){
  try { window.__GYN = GYN; GYN.applyLive = applyLive; GYN.READINGS = READINGS; } catch (e) {}
}
var KINDS = ["object", "series", "scalar"];
export function checkLiveCoverage(){
  var bad: string[] = [];
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
function receive(next: Record<string, LiveDoc>, mode: "replace" | "merge"){
  var names = Object.keys(next).filter(function(n){ return docOk(n, next[n]); });
  if (!names.length) return 0;
  var fresh: Record<string, LiveDoc> = {}, moved = 0;
  names.forEach(function(name){
    if (liveApplied[name] === JSON.stringify(next[name])) fresh[name] = next[name];
    else if (applyLive(name, docValue(next[name]), next[name])){ fresh[name] = next[name]; moved++; }
  });
  var keep = mode === "replace" ? fresh : merge(LIVE_CACHE, fresh);
  try { window.localStorage.setItem("gyn.live", JSON.stringify(keep)); } catch (e) {}
  LIVE_CACHE = keep;
  return moved;
}
function applyLive(name: string, value: unknown, d?: LiveDoc){
  if (value == null || !READINGS[name] || !landLive(name, value, d)) return false;
  (painters[name] || []).concat(painters["*"] || []).forEach(function(fn){
    try { fn(); } catch (e) { if (window.console) console.warn("repaint " + name + " failed", e); }
  });
  return true;
}
export function refreshLiveData(){
  if (!window.claude || typeof window.claude.use !== "function") return;
  window.claude.use("db").then(function(db){
    if (!db) return null;
    return Promise.all(LIVE_NAMES.map(function(name){
      return db.doc("data/" + name).get().then(function(row: (LiveDoc & { data?: LiveDoc }) | null): [string, LiveDoc] | null {
        var d = row && (row.data || row);
        return (d && typeof d === "object") ? [name, d] : null;
      }).catch(function(){ return null; });
    })).then(function(rows){
      var next: Record<string, LiveDoc> = {}, got = 0;
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
    var next: Record<string, LiveDoc> = {};
    for (var k in doc) if (k !== "_meta" && Object.prototype.hasOwnProperty.call(doc, k)) next[k] = doc[k];
    receive(next, "merge");
  }).catch(function(){  });
}

export function forgetLive(e: unknown){
  var had = false;
  try { had = !!window.localStorage.getItem("gyn.live") && !window.sessionStorage.getItem("gyn.forgot"); } catch (x) {}
  if (!had) throw e;
  try { window.localStorage.removeItem("gyn.live"); window.sessionStorage.setItem("gyn.forgot", "1"); } catch (x) { throw e; }
  window.location.reload();
}
export function bootLive(){
  LIVE_CACHE = (function(){
    try { return JSON.parse(window.localStorage.getItem("gyn.live") || "{}") || {}; }
    catch (e) { return {}; }
  })();
}
