import { CHEV } from "./format.ts";
import { addSources, byId, detailSlot } from "./dom.ts";
import { GYN } from "./live.ts";
import { calendarSvg, orbitSvg } from "./marks.ts";
import { calendarTodayY } from "./refresh-season.ts";
import { sp500AnnualReturns, typicalCycleYears } from "./data.ts";
import { quarterSheet } from "./quarter-sheet.ts";
import { cycleYtdFraction, diagnoseToday, nowModel, yearGrowth, yearInflation, yearSoFar } from "./model.ts";
import { dxHead, dxSys, econChips, marketPills, strip, stripDots, stripTrack, seasonPills, seasonRuns, seasonRunsLabel } from "./render-core.ts";
import { buildCycleChart, chartDoor } from "./cycle-analysis.ts";
import { aiInsights, buildAiPage } from "./ai-insights.ts";
import { fedPhasesCard } from "./fed-phases.ts";
import type { CycleModel } from "./model.ts";

var DIAG_SRC = [
  {t:"Cboe via FRED \u2014 CBOE Volatility Index, daily closes since 1990 (VIXCLS), and the VXO for 1986\u20131989 (VXOCLS)", u:"https://fred.stlouisfed.org/series/VIXCLS"},
  {t:"Federal Reserve via FRED \u2014 the Fed\u2019s moves: the discount rate before September 1982 (INTDSRUSM193N), the federal funds target to December 2008 (DFEDTAR) and its upper limit since (DFEDTARU)", u:"https://fred.stlouisfed.org/series/DFEDTARU"},
  {t:"Robert Shiller \u2014 U.S. stock market data: the S&P 500\u2019s monthly average and the CAPE ratio", u:"https://shillerdata.com/"}
];
function diagnosisHtml(m: CycleModel){
  if (m.ongoing && !diagnoseToday()) return "";
  return dxSys(" fp", dxHead(orbitSvg(), "Interest Environment") + fedPhasesCard(m)) + cycleCard(m) + yearByYear(m);
}
function cycleCard(m: CycleModel){ return m.ongoing ? aiInsights() : chartDoor(m); }
function yearByYear(m: CycleModel){
  var segs = m.track.filter(function(seg){ return !seg.isNow && seg.to > seg.from; }), rows: string[] = [];
  for (var y = m.era.from; y <= m.endYear; y++){
    var inYear = segs.filter(function(seg){ return parseInt(seg.q, 10) === y; }), ytd = m.ongoing && y === calendarTodayY, now = yearSoFar(y);
    rows.push(yearRow(String(y), yearStrip(inYear, y, !!ytd), inYear.length ? quarterSheet(m, inYear[inYear.length - 1], false) : undefined,
      econChips(ytd ? now.growth : yearGrowth(y), ytd ? now.prices : yearInflation(y), sp500AnnualReturns[y] ?? null, 0, false, " dx-year-foot")));
  }
  return dxSys(" dx-years", dxHead(calendarSvg(), "Year by Year") + rows.reverse().join(""));
}
function yearRow(year: string, lead: string, sheet?: string, foot?: string){
  var tag = sheet != null ? "button" : "div";
  return '<' + tag + ' class="dx-year' + (sheet != null ? ' details-link" type="button" data-detail-idx="' + detailSlot(sheet) : "") + '">' +
    '<span class="dx-year-n">' + year + '</span><span class="dx-year-v">' + (lead ? '<span class="dx-year-lead">' + lead + '</span>' : "") +
    '</span>' + (sheet != null ? CHEV : "") + (foot || "") + '</' + tag + '>';
}
function yearStrip(inYear: CycleModel["track"], y: number, ytd: boolean){
  var runs = seasonRuns(inYear);
  return strip("", seasonRunsLabel(runs), seasonPills(runs, true) + stripGap(4 - inYear.length, ytd, stripTrack)) +
    yearMarket(y, ytd, ytd ? Math.max(1, Math.round(cycleYtdFraction * 4)) : 4);
}
function stripGap(n: number, ytd: boolean, fill: (n: number, title: string) => string){
  return n <= 0 ? "" : ytd ? fill(n, "not yet run") : '<span style="flex:' + n + ' 1 0"></span>';
}
function yearMarket(y: number, ytd: boolean, q: number){
  var ret = sp500AnnualReturns[y], dir = ret >= 0 ? "up" : "down";
  return ret == null ? "" : strip(" mkt-strip", "S&P 500 " + dir + (ytd ? " so far" : ""), marketPills([{ dir: dir, ytd: ytd, q: q, from: y, to: y }]) + stripGap(4 - q, ytd, stripDots));
}
export function renderDiagnosis(m: CycleModel){
  var host = document.getElementById("diagnosis");
  if (host && m){ host.innerHTML = diagnosisHtml(m); fitYearDots(); }
}
export function fitYearDots(){
  var host = document.getElementById("diagnosis"), span = Math.max(typicalCycleYears * 4, Math.ceil(nowModel.elapsedYears * 4));
  if (!host) return;
  var row = document.querySelector(".era-row");
  Array.prototype.forEach.call(host.querySelectorAll(".dx-year .strip-dots"), function(d: HTMLElement){
    var box = d.closest(".dx-sys"), cs = getComputedStyle(row || box || d);
    var pitch = box ? (box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)) / span : 0;
    if (!d.clientWidth || !(pitch > 5)) return;
    d.style.justifyContent = "flex-end";
    d.style.gap = (pitch - 5) + "px";
    d.innerHTML = new Array(Math.max(1, Math.floor((d.clientWidth - 8) / pitch) + 1) + 1).join("<i></i>");
  });
}
function diagnosisHost(home: HTMLElement){
  var host = document.createElement("article"); host.className = "dx"; host.id = "diagnosis";
  home.insertBefore(host, home.firstChild);
  buildDoors(home);
}
function buildDoors(home: HTMLElement){
  buildAiPage(home);
  buildCycleChart();
}
function buildDiagnosis(){
  var home = byId("today-analysis");
  if (!home || document.getElementById("diagnosis")) return;
  diagnosisHost(home);
  renderDiagnosis(nowModel);
  addSources(DIAG_SRC);
}

export function bootDiagnosis(){
  GYN.step("buildDiagnosis", buildDiagnosis, "build");
  buildDiagnosis();
}
