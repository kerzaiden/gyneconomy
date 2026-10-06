import { curveAt, dsrNow, fedFundsRange, fileRow, now, policyDirection, savNow } from "./data.ts";
import { nowModel } from "./model.ts";
import { DATED_UNIT, growthShownCap, householdsNow, volatilityTag } from "./readings.ts";
import { gdpFigure, needInd, tempWord } from "./render-core.ts";
import { meterWord, splitRow } from "./indicators.ts";

export function eraFig(today: string){
  var tok = /[+\-\u2212]?\d[\d,]*(?:\.(\d+))?/.exec(today) || ["", ""];
  var dp = tok[1] ? tok[1].length : 0, pre = today.slice(0, today.indexOf(tok[0])).replace("\u2248", "");
  var suf = (/[^\d]*$/.exec(today) || [""])[0], signed = /^[+\-\u2212]/.test(tok[0]);
  function one(x: number){ var a = Math.abs(x).toFixed(dp); return (+a === 0 ? "" : x < 0 ? "\u2212" : signed ? "+" : "") + a; }
  return function(x: number, y?: number | null){ return pre + one(x) + (y != null ? "/" + one(y) : suf); };
}
export type Face = { text: string; unit: string; word: string };
var OWN_FACE: Record<string, () => [string, string]> = {
  "sheet-metric-temp": function(){ return [needInd("sheet-metric-temp").metric, tempWord(nowModel.reading)]; },
  "sheet-metric-gdp": function(){ return [gdpFigure(nowModel.reading), growthShownCap(nowModel.reading)]; },
  "sheet-metric-valuation": function(){ return [fileRow("cape").flagValue, (now.valuation.tag || { text:"" }).text]; },
  "sheet-metric-households": function(){ return [dsrNow.toFixed(1) + "/" + savNow.toFixed(1), householdsNow.word]; },
  "sheet-sign-hormones": function(){ return [fedFundsRange(), policyDirection()]; },
  "sheet-sign-pressure": function(){ var y = curveAt("10Y"); return [y == null ? "\u2014" : y.toFixed(2) + "%", ""]; },
  "sheet-sign-sentiment": function(){ return [now.vixRow!.flagValue, volatilityTag().text]; }
};
export function todayFace(R: RosterRow): Face {
  var own = OWN_FACE[R.id];
  if (own){ var f = own(); return { text:f[0], unit:R.cardUnit || "", word:f[1] }; }
  if (R.door === "split"){ var row = splitRow(R); return { text:row.flagValue, unit:R.cardUnit || "", word:meterWord(row.meter) }; }
  var ind = needInd(R.id), sub = String(ind.metricSub || "").trim(), m = DATED_UNIT.exec(sub);
  return { text:ind.metric, unit:R.door === "pair" ? R.cardUnit || "" : m ? m[1] : sub, word:ind.tag ? ind.tag.text : "" };
}
export function todayValue(R: RosterRow){
  var face = todayFace(R), m = /[+\-\u2212]?\d[\d,]*(?:\.\d+)?/.exec(face.text);
  if (!m) throw new Error("the reading " + R.id + " shows no figure");
  var v = +m[0].replace("\u2212", "-").replace(/,/g, "");
  return R.flip ? (/surplus/.test(face.unit) ? Math.abs(v) : -Math.abs(v)) : v;
}
