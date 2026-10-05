import { auxStat, facts, srcBlock } from "./format.ts";
import { moreRow, need, trendDoor, trendSoon, trendText } from "./dom.ts";
import { clockSvg, slidersSvg, umbrellaSvg } from "./marks.ts";
import { CLOCK_SRC } from "./data.ts";
import { nowModel } from "./model.ts";
import type { ModelReading } from "./model.ts";
import { metricSheet, sheetRenderers, strip } from "./render-core.ts";

// ---- PORTFOLIO: All Weather, the Investment Clock and Custom ----
type Phase = { key: string; name: string; growth: string; prices: string; holds: string; at: [number, number] };

var WEATHER_ID = "sheet-all-weather", CLOCK_ID = "sheet-investment-clock";
var WEATHER_NAME = "All Weather", CLOCK_NAME = "Investment Clock";
var WEATHER_SRC: Src[] = [
  {t:"Bridgewater Associates — The All Weather Story (2012)", u:"https://www.bridgewater.com/resources/all-weather-story.pdf"},
  {t:"Tony Robbins — Money: Master the Game (Simon & Schuster, 2014), the All Seasons allocation Ray Dalio gave for individuals", u:"https://www.simonandschuster.com/books/MONEY-Master-the-Game/Tony-Robbins/9781476757803"}
];
var ALL_WEATHER = [
  { what:"Stocks", w:30, ink:"--ovulate" },
  { what:"Long-term Treasuries", w:40, ink:"--ff-deep" },
  { what:"Intermediate Treasuries", w:15, ink:"--ff-blue" },
  { what:"Gold", w:7.5, ink:"--season-autumn" },
  { what:"Commodities", w:7.5, ink:"--season-summer" }
];
var WEATHER = [
  { when:"Growth picking up", holds:"Stocks, commodities", test:function(r: ModelReading){ return r.regime === "expansion"; } },
  { when:"Growth slowing", holds:"Treasuries", test:function(r: ModelReading){ return r.regime !== "expansion"; } },
  { when:"Prices heating", holds:"Gold, commodities", test:function(r: ModelReading){ return r.cpiDirection === "rising"; } },
  { when:"Prices cooling", holds:"Stocks, Treasuries", test:function(r: ModelReading){ return r.cpiDirection === "falling"; } }
];
var PHASES: Phase[] = [
  { key:"reflation", name:"Reflation", growth:"slowing", prices:"falling", holds:"Bonds", at:[1, 1.5] },
  { key:"recovery", name:"Recovery", growth:"picking up", prices:"falling", holds:"Stocks", at:[0.5, 1] },
  { key:"overheat", name:"Overheat", growth:"picking up", prices:"rising", holds:"Commodities", at:[0, 0.5] },
  { key:"stagflation", name:"Stagflation", growth:"slowing", prices:"rising", holds:"Cash", at:[1.5, 2] }
];

function say(t: string){ return '<p class="method-say">' + t + '</p>'; }
function methodPage(id: string, body: string, detail: string){ need(id).innerHTML = '<div class="method-card cat-mood">' + body + moreRow(detail) + '</div>'; }
function weatherStrip(){
  return strip("", ALL_WEATHER.map(function(a){ return a.what + " " + a.w + "%"; }).join(", "),
    ALL_WEATHER.map(function(a){ return '<span class="strip-run" style="flex:' + a.w + ' 1 0;--season:var(' + a.ink + ')"></span>'; }).join(""));
}
function weatherDetail(){
  return '<h4>How All Weather Reads</h4>' + facts([
    "Bridgewater built All Weather in 1996 on one idea: every asset does well in some economic weather and badly in another, so a portfolio that balances its risk across all four, growth picking up or slowing, prices heating or cooling, needs no one to call the next season.",
    "These weights are the version Ray Dalio gave individual investors in Tony Robbins’s Money: Master the Game (2014). Bridgewater’s own fund uses leverage and different weights. The mix is held all the time and brought back to its weights from time to time; it is never timed.",
    "Which assets each weather favours is Bridgewater’s grid, cut to the five assets the mix holds. Today’s weather is marked from the Season Model: growth by its regime, prices by the direction of inflation. Prices holding steady mark neither.",
    "This is a published allocation, not advice."
  ]) + srcBlock(WEATHER_SRC);
}
function drawWeather(){
  var r = nowModel.reading;
  var weights = ALL_WEATHER.map(function(a){ return auxStat({ label:'<span class="season-sw" style="--season:var(' + a.ink + ')"></span>' + a.what, value:a.w + "%" }); }).join("");
  var weather = WEATHER.map(function(w){ return auxStat({ label:w.when + (w.test(r) ? " · today" : ""), value:w.holds, wordy:true }); }).join("");
  methodPage(WEATHER_ID, say("Something for every kind of economic weather, held all the time, so no season has to be called. The mix Ray Dalio gave individual investors:") +
    weatherStrip() + weights + say("What each kind of weather has favoured:") + weather, weatherDetail());
}
function phaseOf(r: ModelReading): Phase {
  var up = r.regime === "expansion", cooling = r.cpiDirection === "falling";
  return PHASES[up ? (cooling ? 1 : 2) : (cooling ? 0 : 3)];
}
function arc(a0: number, a1: number){
  var p = function(a: number){ return (150 + 96 * Math.cos(a * Math.PI)).toFixed(1) + "," + (130 - 96 * Math.sin(a * Math.PI)).toFixed(1); };
  return "M150,130L" + p(a1) + "A96,96 0 0 1 " + p(a0) + "Z";
}
function clockFace(now: Phase){
  var parts = PHASES.map(function(p){
    var m = (p.at[0] + p.at[1]) / 2 * Math.PI, x = 150 + 56 * Math.cos(m), y = 130 - 56 * Math.sin(m), cur = p === now ? " now" : "";
    return '<path class="clock-q' + cur + '" d="' + arc(p.at[0], p.at[1]) + '"/>' +
      '<text class="clock-name' + cur + '" x="' + x.toFixed(1) + '" y="' + (y - 3).toFixed(1) + '" text-anchor="middle">' + p.name + '</text>' +
      '<text class="clock-asset' + cur + '" x="' + x.toFixed(1) + '" y="' + (y + 13).toFixed(1) + '" text-anchor="middle">' + p.holds + '</text>';
  });
  var axes = '<text class="clock-axis" x="150" y="22" text-anchor="middle">Growth picking up</text>' +
    '<text class="clock-axis" x="150" y="248" text-anchor="middle">Growth slowing</text>' +
    '<text class="clock-axis" x="27" y="128" text-anchor="middle">Prices<tspan x="27" dy="13">falling</tspan></text>' +
    '<text class="clock-axis" x="273" y="128" text-anchor="middle">Prices<tspan x="273" dy="13">rising</tspan></text>';
  return '<svg class="clock" viewBox="0 0 300 260" role="img" aria-label="The Investment Clock, at ' + now.name + '">' + parts.join("") + axes + '</svg>';
}
function clockDetail(){
  return '<h4>How the Clock Reads</h4>' + facts([
    "Merrill Lynch’s Investment Clock (2004) splits the economy into four phases by two questions: is growth above or below its trend, and are prices rising or falling? Across its record, each phase had an asset that led: bonds in Reflation, stocks in Recovery, commodities in Overheat and cash in Stagflation. The clock usually turns Reflation, Recovery, Overheat, Stagflation, but it can skip a phase or turn back.",
    "Today’s phase is read from the Season Model, over the same windows: growth by its regime, at or above its potential or below it, and prices by the direction of inflation. Prices holding steady count with rising, since the clock has no steady phase; that is Claude’s call.",
    "The clock names one asset for each phase, not a mix; a portfolio that follows it moves between them as the phases turn. This is a published method, not advice."
  ]) + srcBlock(CLOCK_SRC);
}
function drawClock(){
  var now = phaseOf(nowModel.reading);
  var rows = PHASES.map(function(p){ return auxStat({ label:p.name + (p === now ? " · today" : "") + '<small>Growth ' + p.growth + ', prices ' + p.prices + '</small>', value:p.holds, wordy:true }); }).join("");
  methodPage(CLOCK_ID, say('Today reads ' + now.name + ': growth ' + now.growth + ' and prices ' + (now.prices === "rising" && nowModel.reading.cpiDirection === "steady" ? "holding steady" : now.prices) + '. In this phase the clock holds ' + now.holds.toLowerCase() + '.') +
    clockFace(now) + rows, clockDetail());
}
function homeHtml(){
  var now = phaseOf(nowModel.reading);
  return trendDoor(WEATHER_ID, WEATHER_NAME, umbrellaSvg(), WEATHER_NAME, trendText("Something for every kind of weather, held all the time, never timed.") + weatherStrip()) +
    trendDoor(CLOCK_ID, CLOCK_NAME, clockSvg(), CLOCK_NAME, trendText("Today reads " + now.name + ", when the clock holds " + now.holds.toLowerCase() + ".")) +
    trendSoon(slidersSvg(), "Custom", trendText("Her own mix, set by her own rules."));
}
function portfolioSheets(panel: HTMLElement){
  [WEATHER_ID, CLOCK_ID].forEach(function(id){ panel.appendChild(metricSheet(id)); });
  sheetRenderers[WEATHER_ID] = drawWeather; sheetRenderers[CLOCK_ID] = drawClock;
}
function buildPortfolio(){
  var panel = need("panel-portfolio"); panel.innerHTML = '<div class="dx" id="portfolio-home">' + homeHtml() + '</div>';
  portfolioSheets(panel);
}
export function bootPortfolio(){ buildPortfolio(); }
