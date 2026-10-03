import { fmtAsOf } from "./format.js";
import { byIdMaybe, put } from "./dom.js";
import { docOk, docValue, GYN, LIVE, LIVE_CACHE, LIVE_NAMES, liveApplied, liveAsOf, merge, READINGS, setLIVE_CACHE, setLIVE_NAMES, setREADINGS, shapeOk } from "./live.js";
import { calendarTodayY } from "./refresh-season.js";
import { capeHistory, fedFunds, fedFundsRange, sentiment, setFedFunds, setSentiment, setValuation, setVixRow, setYieldCurve, valRow, valuation, vixRow, yieldCurve } from "./data.js";
import { nowModel, setMoodCache, setMoodLists } from "./model.js";
import { coincident, derivePulseTag, deriveVolumeTag, policyFactRows, riskMatrixBlock, setCoincident, setVix3mClose, valuationVerdict, volatilityRing, volatilityTag } from "./readings.js";
import { CATEGORIES, paintWhen } from "./roster.js";
import { sheetRenderers } from "./render-core.js";
import { eraOpen } from "./era.js";
import { replaceInsights } from "./insights.js";
import { renderDiagnosis } from "./diagnosis.js";

function paintReading(sheet, value, tag){
  var doors = document.querySelectorAll('[data-open="' + sheet + '"], [data-preview="' + sheet + '"]'), painted = 0;
  Array.prototype.forEach.call(doors, function(d){
    if (d.__today){ painted++; return; }
    var v = d.querySelector(".ci-value, .subject-value");
    if (v && v.firstChild && v.firstChild.nodeType === 3){ v.firstChild.nodeValue = String(value); painted++; }
    if (tag) paintTag(d, tag);
  });
  paintWhen(sheet);
  if (doors.length && !painted)
    (window.__paintMiss = window.__paintMiss || []).push(sheet + ": " + doors.length + " doors, none printed");
  return painted;
}
function repaintVolatilityRing(){
  Array.prototype.forEach.call(document.querySelectorAll('[data-open="sheet-sign-sentiment"]'), function(d){
    var m = d.__today ? null : d.querySelector(".ci-mini, .subject-ring");
    if (m) m.innerHTML = volatilityRing();
  });
}
function paintTag(d, tag){
  var t = d.querySelector(".tag");
  if (!t) return;
  t.textContent = tag.text;
  if (tag.state != null && /\btag\b/.test(t.className))
    t.className = "tag " + tag.state + (/\bci-word\b/.test(t.className) ? " ci-word" : "");
}
function repaintVolatility(){
  repaintVolatilityRing();
  paintReading("sheet-sign-sentiment", vixRow.flagValue, volatilityTag());
}
function repaintPressureRow(){
  var h = yieldCurve.filter(function(d){ return d.m === "10Y"; })[0];
  if (!h || h.y == null) return;
  paintReading("sheet-sign-pressure", h.y.toFixed(2) + "%", null);
}
function repaintPressureChart(){
  var s = byIdMaybe("sheet-sign-pressure");
  if (s && !s.hidden && sheetRenderers["pressure-range"]) sheetRenderers["pressure-range"]();
}
function desireRow(){ return coincident.filter(function(c){ return c.bodyTerm === "Desire"; })[0]; }
function repaintDesire(){
  var row = desireRow(), cape = valRow("cape");
  if (!row || !cape) return;
  paintReading("sheet-sign-desire", row.metric, null);
  Array.prototype.forEach.call(document.querySelectorAll(".riskmx"), function(el){
    el.outerHTML = riskMatrixBlock(row.meter.value, cape.meter.value);
  });
}
function syncCapeHistory(){
  var last = capeHistory[capeHistory.length - 1], now = valRow("cape").meter.value;
  if (last.y === calendarTodayY) last.v = now; else capeHistory.push({ y:calendarTodayY, v:now });
  setMoodLists(null); setMoodCache(null);
}
function repaintValuationRow(){
  var row = valRow("cape");
  if (!row) return;
  paintReading("sheet-metric-valuation", row.flagValue, valuation.tag || null);
}
function isNum(x){ return typeof x === "number" && isFinite(x); }
function rowsOk(rows){
  return Array.isArray(rows) && rows.length > 0 && rows.every(function(r){ return r && typeof r === "object" && (!r.meter || isNum(r.meter.value)); });
}
var KINDS = ["object", "series", "scalar"];
function checkLiveCoverage(){
  var bad = [];
  LIVE_NAMES.forEach(function(n){
    var r = READINGS[n], shows = (r.paint && r.paint.length) ? 1 : 0;
    if (KINDS.indexOf(r.kind) < 0) bad.push(n + ": kind " + r.kind);
    if (r.kind === "scalar" && !(r.band && r.band.length === 2 && r.band[0] < r.band[1]))
      bad.push(n + ": a scalar needs a band");
    if (typeof r.set !== "function") bad.push(n + ": nowhere to land");
    if (shows + (r.onOpen ? 1 : 0) !== 1)
      bad.push(n + ": " + (shows ? (r.onOpen ? "paints AND declares onOpen" : "") : "no painter and no onOpen"));
    (r.paint || []).forEach(function(f){ if (typeof f !== "function") bad.push(n + ": painter is not a function"); });
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
  setLIVE_CACHE(now);
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
  (r.paint || []).concat(repaintDiagnosis).forEach(function(fn){
    try { fn(); } catch (e) { if (window.console) console.warn("repaint " + name + " failed", e); }
  });
  return true;
}
function repaintPolicy(){
  var box = put("policy-facts", policyFactRows());
  var dir = /^\+/.test(fedFunds.lastMove) ? "Tightening"
          : /^[-−]/.test(fedFunds.lastMove) ? "Easing" : "On hold";
  paintReading("sheet-sign-hormones", fedFundsRange(), { text:dir });
}
function refreshLiveData(){
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
function fetchSiteData(){
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
function repaintDiagnosis(){
  if (!eraOpen) renderDiagnosis(nowModel);
  CATEGORIES.forEach(replaceInsights);
}

export function bootRepaint(){
  /* ---- THE READING REGISTRY ---- */
  setREADINGS({
    fedFunds: {
      kind: "object",
      ok: function(v){ return isNum(v.lo) && isNum(v.hi) && v.lo >= 0 && v.lo <= v.hi && v.hi <= 25; },
      set: function(v){
        if (!v.lastMove && (v.lo !== fedFunds.lo || v.hi !== fedFunds.hi)) v = merge(v, { lastMove:"", lastMoveLabel:"", asOf:"" });
        if (v.asOf !== undefined && v.asOf !== fedFunds.asOf && !v.vote) v = merge(v, { vote:"" });
        setFedFunds(merge(fedFunds, v));
      },
      paint: [repaintPolicy]
    },
    yieldCurve: {
      kind: "series",
      ok: function(v){ return v.every(function(r){ return r && typeof r.m === "string" && (r.y === null || isNum(r.y)); }); },
      set: function(v){ setYieldCurve(v); }, paint: [repaintPressureRow, repaintPressureChart]
    },
    sentiment:  {
      kind: "object",
      ok: function(v){ return v.rows === undefined || rowsOk(v.rows); },
      set: function(v){ setSentiment(merge(sentiment, v)); setVixRow(sentiment.rows[0]); }, onOpen: true
    },
    valuation:  {
      kind: "object",
      ok: function(v){ return v.rows === undefined || rowsOk(v.rows); },
      set: function(v){
        setValuation(merge(valuation, v));
        if (valRow("cape")) valuation.tag = valuationVerdict(valRow("cape").meter.value);
      },
      paint: [repaintValuationRow]
    },
    coincident: {
      kind: "series",
      ok: rowsOk,
      set: function(v){ setCoincident(v); deriveVolumeTag(); derivePulseTag(); },
      onOpen: true
    },
    vixClose: {
      kind: "scalar", band: [5, 100],
      set: function(v){
        var row = sentiment.rows[0];
        row.meter.value = v;
        row.flagValue = v.toFixed(1);
        if (liveAsOf.vixClose) row.sub = liveAsOf.vixClose;
      },
      paint: [repaintVolatility]
    },
    vix3mClose: { kind: "scalar", band: [5, 100], set: function(v){ setVix3mClose(v); }, onOpen: true },
    hyOasNow: {
      kind: "scalar", band: [1, 30],
      set: function(v){
        var row = desireRow();
        row.meter.value = v;
        row.metric = v.toFixed(2) + "%";
        if (liveAsOf.hyOasNow) row.metricSub = "high-yield OAS, " + liveAsOf.hyOasNow;
      },
      paint: [repaintDesire]
    },
    capeValue: {
      kind: "scalar", band: [4, 60],
      set: function(v){
        var row = valRow("cape");
        row.meter.value = v;
        row.flagValue = v.toFixed(1) + String(row.flagValue || "").replace(/^[\d.,\s-]+/, "");
        if (liveAsOf.capeValue) row.sub = liveAsOf.capeValue;
        valuation.tag = valuationVerdict(v);
      },
      paint: [repaintValuationRow, syncCapeHistory, repaintDesire]
    }
  });
  setLIVE_NAMES(Object.keys(READINGS));
  setFedFunds(LIVE("fedFunds", fedFunds));
  try { window.__GYN = GYN; GYN.applyLive = applyLive; GYN.READINGS = READINGS; } catch (e) {}
  GYN.step("checkLiveCoverage", checkLiveCoverage, "check");
  checkLiveCoverage();
  GYN.step("refreshLiveData", refreshLiveData, "live");
  refreshLiveData();
  GYN.step("fetchSiteData", fetchSiteData, "live");
  fetchSiteData();
}
