import { CHEV } from "./format.ts";
import { addSources, byId, viewMore } from "./dom.ts";
import { GYN } from "./live.ts";
import { calendarSvg } from "./marks.ts";
import { calendarTodayY } from "./refresh-season.ts";
import { sp500AnnualReturns, typicalCycleYears } from "./data.ts";
import { cycleYtdFraction, diagnoseToday, nowModel, yearGrowth, yearInflation, yearSoFar } from "./model.ts";
import { dxHead, dxSys, econChips, marketPills, strip, stripDots, stripTrack, seasonPills, seasonRuns, seasonRunsLabel } from "./render-core.ts";
import { buildCycleChart, chartDoor, IND } from "./cycle-analysis.ts";
import { lendAiParts, storyCard, wireStory } from "./ai-insights.ts";
import type { CycleModel } from "./model.ts";

var DIAG_SRC = [
  {t:"Cboe via FRED \u2014 CBOE Volatility Index, daily closes since 1990 (VIXCLS), and the VXO for 1986\u20131989 (VXOCLS)", u:"https://fred.stlouisfed.org/series/VIXCLS"},
  {t:"Federal Reserve via FRED \u2014 the Fed\u2019s moves: the discount rate before September 1982 (INTDSRUSM193N), the federal funds target to December 2008 (DFEDTAR) and its upper limit since (DFEDTARU)", u:"https://fred.stlouisfed.org/series/DFEDTARU"},
  {t:"NBER Macrohistory via FRED \u2014 the Federal Reserve Bank of New York\u2019s discount rate, monthly from 1914: the Fed\u2019s moves before 1950 and its rate line before the federal funds rate begins in July 1954 (M13009USM156NNBR)", u:"https://fred.stlouisfed.org/series/M13009USM156NNBR"},
  {t:"Robert Shiller \u2014 U.S. stock market data: the S&P 500\u2019s monthly average and the CAPE ratio", u:"https://shillerdata.com/"}
];
function diagnosisHtml(m: CycleModel){
  if (m.ongoing && !diagnoseToday()) return "";
  return storyCard(m) + chartDoor(m) + yearByYear(m);
}
function yearByYear(m: CycleModel){
  var segs = m.track.filter(function(seg){ return !seg.isNow && seg.to > seg.from; }), rows: string[] = [];
  for (var y = m.era.from; y <= m.endYear; y++){
    var inYear = segs.filter(function(seg){ return parseInt(seg.q, 10) === y; }), ytd = m.ongoing && y === calendarTodayY, now = yearSoFar(y);
    rows.push(yearRow(String(y), yearStrip(inYear, y, !!ytd),
      econChips(ytd ? now.growth : yearGrowth(y), ytd ? now.prices : yearInflation(y), sp500AnnualReturns[y] ?? null, 0, false, " dx-year-foot")));
  }
  return dxSys(" dx-years", dxHead(calendarSvg(), "Year by Year") + rows.reverse().join("") + yearsMore(rows.length > PREVIEW_YEARS));
}
var PREVIEW_YEARS = 3;
function yearsMore(more: boolean){
  return '<button type="button" class="cyc-more dx-years-more" aria-expanded="false"' + (more ? "" : " hidden") + '><span>View more</span>' + CHEV + '</button>';
}
function wireYearsMore(host: HTMLElement){
  var btn = host.querySelector<HTMLElement>(".dx-years-more");
  if (btn && !btn.hidden) viewMore(btn, [].slice.call(host.querySelectorAll(".dx-years .dx-year")).slice(PREVIEW_YEARS));
}
function yearRow(year: string, lead: string, foot: string){
  return '<button class="dx-year" type="button" data-open="' + IND + '" data-title="Elements" data-ind-when="' + year + '">' +
    '<span class="dx-year-n">' + year + '</span><span class="dx-year-v">' + (lead ? '<span class="dx-year-lead">' + lead + '</span>' : "") +
    '</span>' + CHEV + foot + '</button>';
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
  if (host && m){ host.innerHTML = diagnosisHtml(m); wireStory(host); wireYearsMore(host); fitYearDots(); }
}
export function fitYearDots(){
  var host = document.getElementById("diagnosis"), span = Math.max(typicalCycleYears * 4, Math.ceil(nowModel.elapsedYears * 4));
  if (!host) return;
  var row = document.querySelector(".era-row");
  Array.prototype.forEach.call(host.querySelectorAll(".dx-year .strip-dots"), function(d: HTMLElement){
    var box = d.closest(".dx-sys"), cs = getComputedStyle(row || box || d);
    var pitch = box ? (box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)) / span : 0;
    if (!d.clientWidth || !(pitch > 5)) return;
    d.style.justifyContent = "flex-start";
    d.style.gap = (pitch - 5) + "px";
    d.innerHTML = '<i style="margin-left:' + (pitch - 5) + 'px"></i>' + new Array(Math.max(1, Math.floor(d.clientWidth / pitch))).join("<i></i>");
  });
}
function diagnosisHost(home: HTMLElement){
  var host = document.createElement("article"); host.className = "dx"; host.id = "diagnosis";
  home.insertBefore(host, home.firstChild);
  lendAiParts();
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
