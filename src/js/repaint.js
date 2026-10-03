import { byIdMaybe, put, ui } from "./dom.js";
import { checkLiveCoverage, exposeLive, fetchSiteData, GYN, onLive, refreshLiveData } from "./live.js";
import { fedFundsRange, now, policyDirection, syncCapeHistory, valRow } from "./data.js";
import { forgetMood, nowModel } from "./model.js";
import { desireRow, policyFactRows, riskMatrixBlock, volatilityRing, volatilityTag } from "./readings.js";
import { CATEGORIES, paintWhen } from "./roster.js";
import { sheetRenderers } from "./render-core.js";
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
  var t = d.querySelector(".tag") || d.querySelector(".ci-word");
  if (!t) return;
  t.textContent = tag.text;
  if (tag.state != null && /\btag\b/.test(t.className))
    t.className = "tag " + tag.state + (/\bci-word\b/.test(t.className) ? " ci-word" : "");
}
function repaintVolatility(){
  repaintVolatilityRing();
  paintReading("sheet-sign-sentiment", now.vixRow.flagValue, volatilityTag());
}
function repaintPressureRow(){
  var h = now.yieldCurve.filter(function(d){ return d.m === "10Y"; })[0];
  if (!h || h.y == null) return;
  paintReading("sheet-sign-pressure", h.y.toFixed(2) + "%", null);
}
function repaintPressureChart(){
  var s = byIdMaybe("sheet-sign-pressure");
  if (s && !s.hidden && sheetRenderers["pressure-range"]) sheetRenderers["pressure-range"]();
}
function repaintDesire(){
  var row = desireRow(), cape = valRow("cape");
  if (!row || !cape) return;
  paintReading("sheet-sign-desire", row.metric, null);
  Array.prototype.forEach.call(document.querySelectorAll(".riskmx"), function(el){
    el.outerHTML = riskMatrixBlock(row.meter.value, cape.meter.value);
  });
}
function syncCape(){ syncCapeHistory(); forgetMood(); }
function repaintValuationRow(){
  var row = valRow("cape");
  if (!row) return;
  paintReading("sheet-metric-valuation", row.flagValue, now.valuation.tag || null);
}
function repaintPolicy(){
  put("policy-facts", policyFactRows());
  paintReading("sheet-sign-hormones", fedFundsRange(), { text:policyDirection() });
}
function repaintDiagnosis(){
  if (!ui.eraOpen) renderDiagnosis(nowModel);
  CATEGORIES.forEach(replaceInsights);
}

export function bootRepaint(){
  onLive("fedFunds", repaintPolicy);
  onLive("yieldCurve", repaintPressureRow);
  onLive("yieldCurve", repaintPressureChart);
  onLive("valuation", repaintValuationRow);
  onLive("vixClose", repaintVolatility);
  onLive("hyOasNow", repaintDesire);
  onLive("capeValue", repaintValuationRow);
  onLive("capeValue", syncCape);
  onLive("capeValue", repaintDesire);
  onLive("*", repaintDiagnosis);
  exposeLive();
  GYN.step("checkLiveCoverage", checkLiveCoverage, "check");
  checkLiveCoverage();
  GYN.step("refreshLiveData", refreshLiveData, "live");
  refreshLiveData();
  GYN.step("fetchSiteData", fetchSiteData, "live");
  fetchSiteData();
}
