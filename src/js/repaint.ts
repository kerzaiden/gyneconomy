import { byIdMaybe, put, ui } from "./dom.ts";
import { checkLiveCoverage, exposeLive, fetchSiteData, GYN, onLive, refreshLiveData } from "./live.ts";
import { curveAt, fedFundsRange, now, policyDirection, syncCapeHistory, valRow } from "./data.ts";
import { forgetMood, nowModel } from "./model.ts";
import { policyFactRows, volatilityRing, volatilityTag } from "./readings.ts";
import { CATEGORIES, paintWhen } from "./roster.ts";
import { sheetRenderers } from "./render-core.ts";
import { replaceInsight } from "./insights.ts";
import { renderDiagnosis } from "./diagnosis.ts";
import { forgetLabs } from "./cycle-analysis.ts";
import { forgetEchoes } from "./ai-insights.ts";

function paintReading(sheet: string, value: string | number, tag: Tag | null){
  var doors = document.querySelectorAll('[data-open="' + sheet + '"], [data-preview="' + sheet + '"]'), painted = 0;
  Array.prototype.forEach.call(doors, function(d: Element){
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
  Array.prototype.forEach.call(document.querySelectorAll('[data-open="sheet-sign-sentiment"]'), function(d: Element){
    var m = d.__today ? null : d.querySelector(".ci-mini, .subject-ring");
    if (m) m.innerHTML = volatilityRing();
  });
}
function paintTag(d: Element, tag: Tag){
  var t = d.querySelector(".tag") || d.querySelector(".ci-word");
  if (!t) return;
  t.textContent = tag.text;
  if (tag.state != null && /\btag\b/.test(t.className))
    t.className = "tag " + tag.state + (/\bci-word\b/.test(t.className) ? " ci-word" : "");
}
function repaintVolatility(){
  repaintVolatilityRing();
  paintReading("sheet-sign-sentiment", now.vixRow!.flagValue, volatilityTag());
}
function repaintPressureRow(){
  var y10 = curveAt("10Y");
  if (y10 == null) return;
  paintReading("sheet-sign-pressure", y10.toFixed(2) + "%", null);
}
function repaintPressureChart(){
  var s = byIdMaybe("sheet-sign-pressure");
  if (s && !s.hidden && sheetRenderers["pressure-range"]) sheetRenderers["pressure-range"]();
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
function repaintStatistics(){
  forgetLabs(); forgetEchoes();
  ["chart-home", "sheet-ai-insights"].forEach(function(id){ var el = byIdMaybe(id); if (el && !el.hidden && sheetRenderers[id]) sheetRenderers[id](); });
}
function repaintDiagnosis(){
  if (!ui.eraOpen) renderDiagnosis(nowModel);
  CATEGORIES.forEach(replaceInsight);
}

export function bootRepaint(){
  onLive("fedFunds", repaintPolicy);
  onLive("yieldCurve", repaintPressureRow);
  onLive("yieldCurve", repaintPressureChart);
  onLive("valuation", repaintValuationRow);
  onLive("vixClose", repaintVolatility);
  onLive("capeValue", repaintValuationRow);
  onLive("capeValue", syncCape);
  onLive("*", repaintStatistics);
  onLive("*", repaintDiagnosis);
  exposeLive();
  GYN.step("checkLiveCoverage", checkLiveCoverage, "check");
  checkLiveCoverage();
  GYN.step("refreshLiveData", refreshLiveData, "live");
  refreshLiveData();
  GYN.step("fetchSiteData", fetchSiteData, "live");
  fetchSiteData();
}
