import { CHEV, fmtSigned } from "./format.ts";
import { addSources, byId, detailSlot, trendDoor, trendText } from "./dom.ts";
import { GYN } from "./live.ts";
import { bookSvg, calendarSvg } from "./marks.ts";
import { calendarTodayY } from "./refresh-season.ts";
import { sp500AnnualReturns } from "./data.ts";
import { quarterSheet } from "./quarter-sheet.ts";
import { diagnoseToday, nowModel, yearAfter, yearGrowth, yearInflation, yearSoFar } from "./model.ts";
import { econChips, seasonPills, seasonRuns, seasonRunsLabel } from "./render-core.ts";
import { CATEGORIES } from "./roster.ts";
import { buildCycleChart, chartDoor } from "./cycle-analysis.ts";
import type { CycleModel } from "./model.ts";

var DIAG_SRC = [
  {t:"Cboe via FRED \u2014 CBOE Volatility Index, daily closes since 1990 (VIXCLS), and the VXO for 1986\u20131989 (VXOCLS)", u:"https://fred.stlouisfed.org/series/VIXCLS"},
  {t:"Robert Shiller \u2014 U.S. stock market data: the S&P 500\u2019s monthly average and the CAPE ratio", u:"https://shillerdata.com/"}
];
function diagnosisHtml(m: CycleModel){
  var after = m.ongoing ? null : yearAfter(m.endYear);
  if (m.ongoing && !diagnoseToday()) return "";
  return moodDoor(m.era.name, trendText(m.era.story)) +
    chartDoor(m) + yearByYear(m, after != null ? yearRow("After", "The S&amp;P&nbsp;500 the year after the close", "<b>" + fmtSigned(after, 1) + "%</b>") : "");
}
function yearByYear(m: CycleModel, after: string){
  var segs = m.track.filter(function(seg){ return !seg.isNow && seg.to > seg.from; }), rows: string[] = [];
  for (var y = m.era.from; y <= m.endYear; y++){
    var inYear = segs.filter(function(seg){ return parseInt(seg.q, 10) === y; }), ytd = m.ongoing && y === calendarTodayY, now = yearSoFar(y);
    rows.push(yearRow(String(y), yearStrip(inYear), "", inYear.length ? quarterSheet(m, inYear[inYear.length - 1], false) : undefined,
      econChips(ytd ? now.growth : yearGrowth(y), ytd ? now.prices : yearInflation(y), sp500AnnualReturns[y] ?? null, 0, false, " dx-year-foot")));
  }
  return '<section class="dx-sys dx-years"><div class="dx-sys-head"><span class="dx-mark" aria-hidden="true">' + calendarSvg() + '</span>Year by year</div>' +
    after + rows.reverse().join("") + '</section>';
}
function yearRow(year: string, lead: string, line: string, sheet?: string, foot?: string){
  var tag = sheet != null ? "button" : "div";
  return '<' + tag + ' class="dx-year' + (sheet != null ? ' details-link" type="button" data-detail-idx="' + detailSlot(sheet) : "") + '">' +
    '<span class="dx-year-n">' + year + '</span><span class="dx-year-v">' + (lead ? '<span class="dx-year-lead">' + lead + '</span>' : "") +
    (line ? '<span class="dx-year-line">' + line + '</span>' : "") + '</span>' + (sheet != null ? CHEV : "") + (foot || "") + '</' + tag + '>';
}
function yearStrip(inYear: CycleModel["track"]){
  var runs = seasonRuns(inYear);
  var rest = 4 - inYear.length;
  return '<span class="strip" role="img" aria-label="' + seasonRunsLabel(runs) + '">' + seasonPills(runs, true) + (rest ? '<span style="flex:' + rest + ' 1 0"></span>' : "") + '</span>';
}
function moodDoor(head: string, body: string){
  var mood = CATEGORIES.filter(function(c){ return c.key === "mood"; })[0];
  return trendDoor("sheet-cat-mood", mood.title, bookSvg(), head || mood.title, body);
}
export function renderDiagnosis(m: CycleModel){
  var host = document.getElementById("diagnosis");
  if (host && m) host.innerHTML = diagnosisHtml(m);
}
function diagnosisHost(home: HTMLElement){
  var host = document.createElement("article"); host.className = "dx"; host.id = "diagnosis";
  home.insertBefore(host, home.firstChild);
  buildCycleChart(home);
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
