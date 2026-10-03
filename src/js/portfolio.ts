import { auxStat, facts, fmtSigned, srcBlock } from "./format.ts";
import { moreRow, need } from "./dom.ts";
import { cpiYoYHistory } from "./refresh-season.ts";
import { fedFundsHistory, sp500MonthlyHistory } from "./history-fred.ts";
import { marketCycles } from "./data.ts";
import { cycleModel, nowModel, QUARTER_END_MONTH } from "./model.ts";
import type { ModelReading } from "./model.ts";

// ---- PORTFOLIO: the Investment Clock and the All Seasons portfolio ----
type Phase = "reflation" | "recovery" | "overheat" | "stagflation";
type Run = { phase: Phase; stocks: number; cash: number | null; fresh: boolean };

var PHASES: Phase[] = ["reflation", "recovery", "overheat", "stagflation"];
var CLOCK: Record<Phase, { name: string; asset: string; growth: string; prices: string; seasons: string }> = {
  reflation:{ name:"Reflation", asset:"Bonds", growth:"slowing", prices:"cooling", seasons:"Autumn · disinflation, and a cooling Winter" },
  recovery:{ name:"Recovery", asset:"Stocks", growth:"picking up", prices:"cooling", seasons:"Spring · deflation, and a cooling Summer" },
  overheat:{ name:"Overheat", asset:"Commodities", growth:"picking up", prices:"heating", seasons:"Spring · reflation, and Summer" },
  stagflation:{ name:"Stagflation", asset:"Cash", growth:"slowing", prices:"heating", seasons:"Autumn · stagflation, and a heating Winter" }
};
var CLOCK_SRC: Src[] = [
  {t:"Merrill Lynch \u2014 The Investment Clock: Making Money from Macro (T. Greetham and M. Hartnett, 10 November 2004; US data 1973\u20132004), as summarised in Introduction and Applications of the Investment Clock Theory (2024); the original report is not public", u:"https://www.researchgate.net/publication/377733341_Introduction_and_Applications_of_the_Investment_Clock_Theory"}
];
var SEASONS_SRC: Src[] = [
  {t:"Bridgewater Associates — The All Weather Story (2012)", u:"https://www.bridgewater.com/resources/all-weather-story.pdf"},
  {t:"Tony Robbins — Money: Master the Game (Simon & Schuster, 2014), the All Seasons allocation Ray Dalio gave for individuals", u:"https://www.simonandschuster.com/books/MONEY-Master-the-Game/Tony-Robbins/9781476757803"}
];
var ALL_SEASONS = [
  { what:"Stocks", w:30, ink:"--ovulate" },
  { what:"Long-term Treasuries", w:40, ink:"--ff-deep" },
  { what:"Intermediate Treasuries", w:15, ink:"--ff-blue" },
  { what:"Gold", w:7.5, ink:"--season-autumn" },
  { what:"Commodities", w:7.5, ink:"--season-summer" }
];
var WEATHER = [
  { when:"Growth picking up", holds:"Stocks, commodities", test:function(r: ModelReading){ return r.regime === "expansion"; } },
  { when:"Growth slowing", holds:"Treasuries", test:function(r: ModelReading){ return r.regime !== "expansion"; } },
  { when:"Prices heating", holds:"Commodities, gold", test:function(r: ModelReading){ return r.cpiDirection !== "falling"; } },
  { when:"Prices cooling", holds:"Stocks, Treasuries", test:function(r: ModelReading){ return r.cpiDirection === "falling"; } }
];

function phaseOf(r: ModelReading): Phase {
  var cooling = r.cpiDirection === "falling";
  return r.regime === "expansion" ? (cooling ? "recovery" : "overheat") : (cooling ? "reflation" : "stagflation");
}
function monthPlus(m: string, k: number){
  var i = +m.slice(0, 4) * 12 + (+m.slice(5) - 1) + k;
  return Math.floor(i / 12) + "-" + String(i % 12 + 1).padStart(2, "0");
}
var runsCache: Run[] | null = null;
function runs(){
  if (runsCache) return runsCache;
  var sp: Record<string, number> = {}, cpi: Record<string, number> = {}, ff: Record<string, number> = {}, out: Run[] = [], last: Phase | null = null;
  sp500MonthlyHistory.forEach(function(d){ sp[d.m] = d.v; });
  cpiYoYHistory.forEach(function(d){ cpi[d.m] = d.v; });
  fedFundsHistory.forEach(function(d){ if (d.v != null) ff[d.m] = d.v; });
  marketCycles.forEach(function(c){
    cycleModel(c).track.forEach(function(seg){
      if (seg.isNow || seg.reading.annual) return;
      var p = phaseOf(seg.reading), m = seg.q.slice(0, 4) + "-" + QUARTER_END_MONTH[seg.q.slice(5)], m12 = monthPlus(m, 12);
      var fresh = p !== last; last = p;
      if (sp[m] == null || sp[m12] == null || cpi[m12] == null) return;
      var f = 1;
      for (var k = 1; k <= 12 && f; k++) f = ff[monthPlus(m, k)] != null ? f * (1 + ff[monthPlus(m, k)] / 1200) : 0;
      out.push({ phase:p, stocks:(sp[m12] / sp[m] - 1) * 100 - cpi[m12], cash:f ? (f - 1) * 100 - cpi[m12] : null, fresh:fresh });
    });
  });
  return (runsCache = out);
}
function phaseMid(vs: number[]){
  var s = vs.slice().sort(function(a, b){ return a - b; }), n = s.length;
  return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
}
function phaseRecord(p: Phase){
  var r = runs().filter(function(x){ return x.phase === p; }), paired = r.filter(function(x){ return x.cash != null; });
  return { n:r.length, episodes:r.filter(function(x){ return x.fresh; }).length,
           stocks:phaseMid(r.map(function(x){ return x.stocks; })),
           up:Math.round(100 * r.filter(function(x){ return x.stocks > 0; }).length / r.length),
           beat:paired.filter(function(x){ return x.stocks > (x.cash as number); }).length, paired:paired.length };
}

function wedge(cx: number, cy: number, r: number, a0: number, a1: number){
  var p = function(a: number){ return (cx + r * Math.cos(a)).toFixed(1) + "," + (cy + r * Math.sin(a)).toFixed(1); };
  return "M" + cx + "," + cy + "L" + p(a0) + "A" + r + "," + r + " 0 0 1 " + p(a1) + "Z";
}
function phaseClock(now: Phase){
  var S = 300, wide = 380, cx = 190, cy = 150, r = 116, out: string[] = [];
  var at: Record<Phase, number> = { recovery:-Math.PI, overheat:-Math.PI / 2, stagflation:0, reflation:Math.PI / 2 };
  PHASES.forEach(function(p){
    var a0 = at[p], mid = a0 + Math.PI / 4, lx = cx + r * 0.56 * Math.cos(mid), ly = cy + r * 0.56 * Math.sin(mid);
    out.push('<path class="clock-q' + (p === now ? " now" : "") + '" d="' + wedge(cx, cy, r, a0, a0 + Math.PI / 2) + '"/>');
    out.push('<text class="clock-name' + (p === now ? " now" : "") + '" x="' + lx.toFixed(1) + '" y="' + (ly - 4).toFixed(1) + '" text-anchor="middle">' + CLOCK[p].name + '</text>');
    out.push('<text class="clock-asset" x="' + lx.toFixed(1) + '" y="' + (ly + 14).toFixed(1) + '" text-anchor="middle">' + CLOCK[p].asset + '</text>');
  });
  var hand = at[now] + Math.PI / 4;
  out.push('<line class="clock-hand" x1="' + cx + '" y1="' + cy + '" x2="' + (cx + r * 0.3 * Math.cos(hand)).toFixed(1) + '" y2="' + (cy + r * 0.3 * Math.sin(hand)).toFixed(1) + '"/>');
  out.push('<circle class="clock-pin" cx="' + cx + '" cy="' + cy + '" r="5"/>');
  out.push('<text class="clock-axis" x="' + cx + '" y="18" text-anchor="middle">Growth picking up</text>');
  out.push('<text class="clock-axis" x="' + cx + '" y="' + (S - 6) + '" text-anchor="middle">Growth slowing</text>');
  out.push('<text class="clock-axis" x="4" y="' + (cy + 4) + '">Prices</text><text class="clock-axis" x="4" y="' + (cy + 20) + '">cooling</text>');
  out.push('<text class="clock-axis" x="' + (wide - 4) + '" y="' + (cy + 4) + '" text-anchor="end">Prices</text><text class="clock-axis" x="' + (wide - 4) + '" y="' + (cy + 20) + '" text-anchor="end">heating</text>');
  return '<svg class="clock" viewBox="0 0 ' + wide + ' ' + S + '" role="img" aria-label="The Investment Clock, pointing at ' + CLOCK[now].name + '">' + out.join("") + '</svg>';
}
function clockDetail(){
  return '<h4>How the clock reads</h4>' + facts([
    "Merrill Lynch’s Investment Clock (2004) splits the cycle by two directions: whether growth is picking up or slowing, and whether inflation is rising or falling. It turns clockwise, Reflation, Recovery, Overheat, Stagflation, and names the asset that led in each phase in US data from 1973 to 2004.",
    "Here both directions are the Season Model’s own: growth is its expansion or contraction, prices its CPI trend over twelve months, with steady prices counted as heating, as the Season Model counts them.",
    "So each phase holds parts of her seasons: " + PHASES.map(function(p){ return "<b>" + CLOCK[p].name + "</b>, " + CLOCK[p].seasons; }).join("; ") + ". Mind the names: her Spring · reflation sits in the clock\u2019s Overheat, and the clock\u2019s Reflation is slowing growth with cooling prices.",
    "The figures are what followed in the record, every quarter the model has read since 1950: the S&amp;P&nbsp;500’s change over the next twelve months less CPI (prices, not dividends), and cash as the Fed funds rate held for the same twelve months. Neighbouring quarters overlap, so a phase rests on its runs, not its quarters.",
    "The clock’s bonds and commodities need long histories the app does not carry yet. This is the record and a published model, not a forecast or advice."
  ]) + srcBlock(CLOCK_SRC);
}
function clockHtml(r: ModelReading){
  var now = phaseOf(r), c = CLOCK[now], rec = phaseRecord(now);
  var rows = PHASES.map(function(p){
    var x = phaseRecord(p);
    return auxStat({ label:CLOCK[p].name + " · " + CLOCK[p].asset.toLowerCase() + (p === now ? " · today" : ""), value:fmtSigned(x.stocks, 1) + "% · up " + x.up + "%" });
  }).join("");
  return '<div class="cat-analysis cat-mood"><div class="ca-name">Investment Clock</div>' +
    '<p class="ca-say">Growth is ' + c.growth + ' and prices are ' + c.prices + ': on the Investment Clock that is ' + c.name + ', the phase where it favours ' + c.asset.toLowerCase() + '.</p>' +
    phaseClock(now) +
    '<p class="ca-note">In ' + rec.episodes + ' runs of ' + c.name + ' since 1950, stocks beat cash over the next year in ' + rec.beat + ' of ' + rec.paired + ' quarters. Stocks over the next year, after inflation, median and how often up:</p>' +
    rows + moreRow(clockDetail()) + '</div>';
}
function seasonsDetail(){
  return '<h4>How the portfolio reads</h4>' + facts([
    "Bridgewater built All Weather in 1996 on one idea: each asset does well in some economic weather and badly in other, so a portfolio that balances its risk across all four, growth picking up or slowing, inflation rising or falling, needs no one to call the next season.",
    "The All Seasons weights are the version Ray Dalio gave individual investors in Tony Robbins’s Money: Master the Game (2014). Bridgewater’s own fund uses leverage and different weights.",
    "Which assets each weather favours is Bridgewater’s grid, cut to the five assets the portfolio holds. Today’s two are marked from the Season Model’s readings.",
    "Its record needs bond, gold and commodity histories the app does not carry yet. This is a published allocation, not advice."
  ]) + srcBlock(SEASONS_SRC);
}
function seasonsHtml(r: ModelReading){
  var bar = '<div class="strip" role="img" aria-label="' + ALL_SEASONS.map(function(a){ return a.what + " " + a.w + "%"; }).join(", ") + '">' +
    ALL_SEASONS.map(function(a){ return '<span class="strip-run" style="flex:' + a.w + ' 1 0;--season:var(' + a.ink + ')" title="' + a.what + ' ' + a.w + '%"></span>'; }).join("") + '</div>';
  var weights = ALL_SEASONS.map(function(a){ return auxStat({ label:'<span class="season-sw" style="--season:var(' + a.ink + ')"></span>' + a.what, value:a.w + "%" }); }).join("");
  var weather = WEATHER.map(function(w){ return auxStat({ label:w.when + (w.test(r) ? " · today" : ""), value:w.holds, wordy:true }); }).join("");
  return '<div class="cat-analysis cat-mood"><div class="ca-name">All Seasons portfolio</div>' +
    '<p class="ca-say">Bridgewater’s All Weather holds something for every season, so no season has to be called. Its version for individuals:</p>' +
    bar + weights + '<p class="ca-note">What each kind of weather has favoured:</p>' + weather + moreRow(seasonsDetail()) + '</div>';
}
function buildPortfolio(){
  var host = need("panel-portfolio"), r = nowModel.reading;
  host.innerHTML = '<div class="dx" id="portfolio">' + clockHtml(r) + seasonsHtml(r) + '</div>';
}
export function bootPortfolio(){ buildPortfolio(); }
