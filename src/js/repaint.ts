import { byIdMaybe, put, ui } from "./dom.ts";
import { checkLiveCoverage, exposeLive, fetchSiteData, GYN, onLive, refreshLiveData } from "./live.ts";
import { syncCapeHistory } from "./data.ts";
import { forgetMood, nowModel } from "./model.ts";
import { policyFactRows } from "./readings.ts";
import { sheetRenderers } from "./render-core.ts";
import { renderDiagnosis } from "./diagnosis.ts";
import { forgetLabs } from "./cycle-analysis.ts";
import { redrawReport } from "./ai-insights.ts";

function repaintPressureChart(){
  ["sheet-sign-pressure", "sheet-sign-spreads"].forEach(function(id){ var s = byIdMaybe(id); if (s && !s.hidden && sheetRenderers[id]) sheetRenderers[id](); });
}
function syncCape(){ syncCapeHistory(); forgetMood(); }
function repaintPolicy(){ put("policy-facts", policyFactRows()); }
function repaintDiagnosis(){
  if (!ui.eraOpen) renderDiagnosis(nowModel);
}
function repaintDerived(){
  forgetLabs();
  repaintDiagnosis();
  ["chart-home", "sheet-find"].forEach(function(id){ var el = byIdMaybe(id); if (el && !el.hidden && sheetRenderers[id]) sheetRenderers[id](); });
}

export function bootRepaint(){
  onLive("fedFunds", repaintPolicy);
  onLive("yieldCurve", repaintPressureChart);
  onLive("capeValue", syncCape);
  onLive("weatherReport", redrawReport);
  onLive("*", repaintDerived);
  exposeLive();
  GYN.step("checkLiveCoverage", checkLiveCoverage, "check");
  checkLiveCoverage();
  GYN.step("refreshLiveData", refreshLiveData, "live");
  refreshLiveData();
  GYN.step("fetchSiteData", fetchSiteData, "live");
  fetchSiteData();
}
