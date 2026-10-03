import { auxStat, facts, fmtSigned, srcBlock } from "./format.ts";
import { moreRow, need } from "./dom.ts";
import { cpiYoYHistory, wheelMeta } from "./refresh-season.ts";
import { assetReturns } from "./history-fred.ts";
import { marketCycles } from "./data.ts";
import { cycleModel, nowModel, seasonGroup, seasonTitle } from "./model.ts";
import type { ModelReading } from "./model.ts";

// ---- PORTFOLIO: the Season Clock and the All Seasons portfolio ----
type Asset = { key: string; name: string; from: number };
type Cell = { median: number; mean: number; up: number; top: number; n: number };

var ASSETS: Asset[] = [
  { key:"stocks", name:"Stocks", from:0 }, { key:"bonds", name:"Bonds", from:0 }, { key:"baa", name:"Corp.", from:0 },
  { key:"bills", name:"Cash", from:0 }, { key:"gold", name:"Gold", from:1972 }, { key:"estate", name:"Homes", from:0 }
];
var ASSET_INK: Record<string, string> = { stocks:"--ovulate", bonds:"--ff-deep", baa:"--ff-blue", bills:"--ylm-3m", gold:"--season-autumn", estate:"--season-spring" };
var ASSET_FULL: Record<string, string> = { stocks:"Stocks", bonds:"Treasury bonds", baa:"Corporate bonds", bills:"Cash", gold:"Gold", estate:"Homes" };
var MIX_FROM = 1950;
var ASSET_LONG: Record<string, string> = { stocks:"stocks have", bonds:"Treasury bonds have", baa:"corporate bonds have", bills:"cash has", gold:"gold has", estate:"homes have" };
var CLOCK_SEASONS: Season[] = ["winter", "spring", "springdeflation", "summer", "autumn", "lateautumn"];
var CLOCK_SRC: Src[] = [
  {t:"Aswath Damodaran, NYU Stern — Historical Returns on Stocks, Bonds, Bills, Real Estate and Gold, annual since 1928", u:"https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html"},
  {t:"Merrill Lynch — The Investment Clock: Making Money from Macro (T. Greetham and M. Hartnett, 10 November 2004), as summarised in Introduction and Applications of the Investment Clock Theory (2024); the original report is not public", u:"https://www.researchgate.net/publication/377733341_Introduction_and_Applications_of_the_Investment_Clock_Theory"}
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

function mid(vs: number[]){
  var s = vs.slice().sort(function(a, b){ return a - b; }), n = s.length;
  return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
}
var closeOf: Record<number, Season> = {};
function seasonOfYears(){
  var weight: Record<number, Record<string, number>> = {}, out: Record<number, Season> = {};
  marketCycles.forEach(function(c){
    cycleModel(c).track.forEach(function(seg){
      if (seg.isNow) return;
      var y = +seg.q.slice(0, 4), w = weight[y] = weight[y] || {};
      w[seg.season] = (w[seg.season] || 0) + seg.to - seg.from;
      closeOf[y] = seg.season;
    });
  });
  Object.keys(weight).forEach(function(y){
    var w = weight[+y], full = Object.keys(w).reduce(function(a, k){ return a + w[k]; }, 0);
    if (full >= 0.999) out[+y] = Object.keys(w).sort(function(a, b){ return w[b] - w[a]; })[0] as Season;
  });
  return out;
}
var gridCache: Record<string, Record<string, Cell>> | null = null;
function realOf(){
  var infl: Record<number, number> = {}, out: Record<string, Record<number, number>> = {};
  cpiYoYHistory.forEach(function(d){ if (d.m.slice(5) === "12") infl[+d.m.slice(0, 4)] = d.v; });
  ASSETS.forEach(function(a){
    out[a.key] = {};
    (assetReturns[a.key] || []).forEach(function(d){
      if (d.y >= a.from && infl[d.y] != null) out[a.key][d.y] = ((1 + d.v / 100) / (1 + infl[d.y] / 100) - 1) * 100;
    });
  });
  return out;
}
function grid(){
  if (gridCache) return gridCache;
  var real = realOf(), season = seasonOfYears(), out: Record<string, Record<string, Cell>> = {};
  CLOCK_SEASONS.forEach(function(s){
    var years = Object.keys(season).map(Number).filter(function(y){ return season[y] === s && real.stocks[y] != null; });
    out[s] = {};
    ASSETS.forEach(function(a){
      var ys = years.filter(function(y){ return real[a.key][y] != null; }), vs = ys.map(function(y){ return real[a.key][y]; });
      var top = ys.filter(function(y){ return ASSETS.every(function(b){ return real[b.key][y] == null || real[b.key][y] <= real[a.key][y]; }); }).length;
      out[s][a.key] = { median:vs.length ? mid(vs) : NaN, mean:vs.length ? vs.reduce(function(p, q){ return p + q; }, 0) / vs.length : NaN,
                        up:vs.filter(function(v){ return v > 0; }).length, top:top, n:vs.length };
    });
  });
  return (gridCache = out);
}
var yearsCache: { real: Record<string, Record<number, number>>; season: Record<number, Season> } | null = null;
function seasonRecord(){ return yearsCache || (yearsCache = { real:realOf(), season:seasonOfYears() }); }
function mixFor(s: Season, before: number){
  var rec = seasonRecord(), years = Object.keys(rec.season).map(Number).filter(function(y){ return y < before && rec.season[y] === s && rec.real.stocks[y] != null; });
  var held = ASSETS.filter(function(a){
    if (a.from > before - 1) return false;
    var vs = years.filter(function(y){ return rec.real[a.key][y] != null; }).map(function(y){ return rec.real[a.key][y]; });
    return vs.length * 2 < years.length || !years.length || mid(vs) > 0;
  });
  var w: Record<string, number> = {};
  held.forEach(function(a){ w[a.key] = 1 / held.length; });
  return w;
}
type Track = { name: string; cagr: number; worst: number; fall: number };
function walk(name: string, weights: (y: number) => Record<string, number>): Track {
  var rec = seasonRecord(), g = 1, peak = 1, fall = 0, worst = Infinity, n = 0;
  for (var y = MIX_FROM; rec.real.stocks[y] != null; y++){
    var w = weights(y), r = 0;
    Object.keys(w).forEach(function(k){ r += w[k] * (rec.real[k][y] || 0); });
    g *= 1 + r / 100; peak = Math.max(peak, g); fall = Math.min(fall, g / peak - 1); worst = Math.min(worst, r); n++;
  }
  return { name:name, cagr:(Math.pow(g, 1 / n) - 1) * 100, worst:worst, fall:fall * 100 };
}
var tracksCache: Track[] | null = null;
function tracks(){
  return tracksCache || (tracksCache = [
    walk("Season Mix", function(y){ seasonOfYears(); return mixFor(closeOf[y - 1], y); }),
    walk("Equal parts, no season", function(y){ var w: Record<string, number> = {}, on = ASSETS.filter(function(x){ return x.from < y; }); on.forEach(function(x){ w[x.key] = 1 / on.length; }); return w; }),
    walk("All Seasons", function(y): Record<string, number> { return y >= 1973 ? { stocks:0.3, bonds:0.55, gold:0.15 } : { stocks:0.3, bonds:0.55, bills:0.15 }; }),
    walk("Stocks only", function(){ return { stocks:1 }; })
  ]);
}
function mixDetail(){
  return '<h4>How the mix reads</h4>' + facts([
    "The Season Mix holds, in equal parts, every asset that has beaten inflation in the current season on the record: the median of its returns after inflation, in the years that season held, is above zero. An asset with too little record in a season, fewer than half its years, is kept rather than dropped.",
    "Equal parts is the plainest diversification there is, and the season only decides who is in the room. Ray Dalio\u2019s point stands behind it: assets that do not move together cut the depth of a fall more than any one choice can lift the return.",
    "The track record is walked forward with no hindsight: each January from " + MIX_FROM + ", the mix is set from the season at the close of the year before and from the record up to then only. The All Seasons line uses 30% stocks, 55% Treasury bonds and 15% gold (cash before 1973), the nearest the record allows.",
    "Homes are home prices, without rent; gold counts from 1972. Rebalancing costs and taxes are left out. This is the record and a rule, not a forecast or advice."
  ]) + srcBlock(CLOCK_SRC.slice(0, 1));
}
function mixHtml(){
  var now = nowModel.season, w = mixFor(now, 9999), keys = ASSETS.filter(function(a){ return w[a.key]; });
  var bar = '<div class="strip" role="img" aria-label="' + keys.map(function(a){ return ASSET_FULL[a.key] + " " + Math.round(w[a.key] * 100) + "%"; }).join(", ") + '">' +
    keys.map(function(a){ return '<span class="strip-run" style="flex:' + w[a.key] + ' 1 0;--season:var(' + ASSET_INK[a.key] + ')"></span>'; }).join("") + '</div>';
  var rows = ASSETS.map(function(a){
    return auxStat({ label:'<span class="season-sw" style="--season:var(' + (w[a.key] ? ASSET_INK[a.key] : "--border") + ')"></span>' + ASSET_FULL[a.key], value:w[a.key] ? Math.round(w[a.key] * 100) + "%" : "out" });
  }).join("");
  var t = tracks();
  var track = t.map(function(x){ return auxStat({ label:x.name, value:fmtSigned(x.cagr, 1) + "% · fall " + fmtSigned(Math.round(x.fall), 0) + "%" }); }).join("");
  var names = keys.map(function(a){ return ASSET_FULL[a.key].toLowerCase(); });
  return '<div class="cat-analysis cat-mood"><div class="ca-name">Season Mix</div>' +
    '<p class="ca-say">In ' + seasonTitle(wheelMeta[now]) + ', ' + names.slice(0, -1).join(", ") + (names.length > 1 ? " and " : "") + names[names.length - 1] + ' have beaten inflation on the record. The mix holds them in equal parts and rebalances when the season turns.</p>' +
    bar + rows + '<p class="ca-note">Rebalanced each January since ' + MIX_FROM + ', with no hindsight: a year after inflation, and the deepest fall:</p>' + track +
    moreRow(mixDetail()) + '</div>';
}
function counts(s: Season, a: Asset){ var g = grid()[s]; return g[a.key].n * 2 >= g.stocks.n; }
function leader(s: Season){
  var g = grid()[s];
  return ASSETS.filter(function(a){ return counts(s, a); }).sort(function(a, b){ return g[b.key].median - g[a.key].median; })[0];
}
function wedge(cx: number, cy: number, r: number, a0: number, a1: number){
  var p = function(a: number){ return (cx + r * Math.cos(a)).toFixed(1) + "," + (cy + r * Math.sin(a)).toFixed(1); };
  return "M" + cx + "," + cy + "L" + p(a0) + "A" + r + "," + r + " 0 0 1 " + p(a1) + "Z";
}
function seasonClock(now: Season){
  var S = 320, cx = 160, cy = 160, r = 112, out: string[] = [], Q = Math.PI / 2;
  var span: Record<string, [number, number]> = { winter:[-2 * Q, -Q], spring:[-Q, -Q / 2], springdeflation:[-Q / 2, 0], summer:[0, Q], autumn:[Q, 1.5 * Q], lateautumn:[1.5 * Q, 2 * Q] };
  CLOCK_SEASONS.forEach(function(s){
    var a = span[s], m = (a[0] + a[1]) / 2, k = a[1] - a[0] > Q * 0.9 ? 0.55 : 0.68;
    var lx = cx + r * k * Math.cos(m), ly = cy + r * k * Math.sin(m), meta = wheelMeta[s];
    out.push('<path class="clock-q ' + seasonGroup(s) + (s === now ? " now" : "") + '" d="' + wedge(cx, cy, r, a[0], a[1]) + '"/>');
    out.push('<text class="clock-name' + (s === now ? " now" : "") + '" x="' + lx.toFixed(1) + '" y="' + (ly - 3).toFixed(1) + '" text-anchor="middle">' + leader(s).name + '</text>');
    if (meta.theme && s !== "summer" && s !== "winter") out.push('<text class="clock-asset" x="' + lx.toFixed(1) + '" y="' + (ly + 13).toFixed(1) + '" text-anchor="middle">' + meta.theme + '</text>');
  });
  [["Winter", -1.5 * Q], ["Spring", -0.5 * Q], ["Summer", 0.5 * Q], ["Autumn", 1.5 * Q]].forEach(function(l){
    var a = l[1] as number, x = cx + (r + 22) * Math.cos(a), y = cy + (r + 22) * Math.sin(a) + 4;
    out.push('<text class="clock-axis" x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" text-anchor="middle">' + l[0] + '</text>');
  });
  var hand = (span[now][0] + span[now][1]) / 2;
  out.push('<line class="clock-hand" x1="' + cx + '" y1="' + cy + '" x2="' + (cx + r * 0.3 * Math.cos(hand)).toFixed(1) + '" y2="' + (cy + r * 0.3 * Math.sin(hand)).toFixed(1) + '"/>');
  out.push('<circle class="clock-pin" cx="' + cx + '" cy="' + cy + '" r="5"/>');
  return '<svg class="clock" viewBox="0 20 ' + S + ' ' + (S - 40) + '" role="img" aria-label="The Season Clock, pointing at ' + seasonTitle(wheelMeta[now]) + '">' + out.join("") + '</svg>';
}
function heat(v: number, thin: boolean){
  if (isNaN(v) || thin) return '<td class="sc-cell thin">' + (isNaN(v) ? "—" : fmtSigned(v, 0)) + '</td>';
  var p = Math.min(60, Math.round(Math.abs(v) * 3));
  return '<td class="sc-cell" style="background:color-mix(in srgb, var(' + (v >= 0 ? "--ovulate" : "--bleed-mid") + ') ' + p + '%, var(--surface))">' + fmtSigned(v, 0) + '</td>';
}
function gridHtml(now: Season){
  var g = grid();
  return '<table class="sc-grid"><thead><tr><th></th>' + ASSETS.map(function(a){ return '<th>' + a.name + '</th>'; }).join("") + '</tr></thead><tbody>' +
    CLOCK_SEASONS.map(function(s){
      return '<tr' + (s === now ? ' class="now"' : '') + '><th>' + seasonTitle(wheelMeta[s]).replace(" · ", "<br><small>") + (wheelMeta[s].theme ? "</small>" : "") + ' <small>' + g[s].stocks.n + 'y</small></th>' +
        ASSETS.map(function(a){ return heat(g[s][a.key].median, !counts(s, a)); }).join("") + '</tr>';
    }).join("") + '</tbody></table>';
}
function clockDetail(){
  var g = grid();
  return '<h4>How the clock reads</h4>' + facts([
    "The Season Clock is the Investment Clock’s idea, an asset for each phase of the economy, read through her six seasons instead of Merrill Lynch’s four phases, and measured on her own record.",
    "Each calendar year since 1928 is given the season that held most of it, by quarter (by year before 1949). Each cell is the median return of that asset in those years, after that year’s inflation (December CPI); green above zero, red below, deeper the larger.",
    "The returns are Aswath Damodaran’s annual series: the S&amp;P&nbsp;500 with dividends, the 10-year Treasury bond, Baa corporate bonds, the 3-month Treasury bill for cash, home prices, and gold. Gold counts from 1972: before August 1971 its price was fixed by law. A cell measured in fewer than half of its season’s years is left grey and cannot lead.",
    "The clock names the asset with the highest median in each season. " + CLOCK_SEASONS.map(function(s){ var l = leader(s), c = g[s][l.key]; return seasonTitle(wheelMeta[s]) + ": " + ASSET_LONG[l.key].replace(/ ha(ve|s)$/, "") + ", best of the six in " + c.top + " of " + c.n + " years"; }).join("; ") + ".",
    "It describes what each asset did while a season lasted, not what came next: the season at a year’s close says much less about the following year. A season with few years, Winter above all, rests on few episodes. This is the record, not a forecast or advice."
  ]) + srcBlock(CLOCK_SRC);
}
function clockHtml(){
  var now = nowModel.season, l = leader(now), c = grid()[now][l.key];
  return '<div class="cat-analysis cat-mood"><div class="ca-name">Season Clock</div>' +
    '<p class="ca-say">In ' + seasonTitle(wheelMeta[now]) + ', ' + ASSET_LONG[l.key] + ' led: a median ' + fmtSigned(c.median, 1) + '% a year after inflation, best of the six in ' + c.top + ' of ' + c.n + ' years.</p>' +
    seasonClock(now) + '<p class="ca-note">Median return after inflation, by the season that held the year, since 1928:</p>' + gridHtml(now) +
    moreRow(clockDetail()) + '</div>';
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
  host.innerHTML = '<div class="dx" id="portfolio">' + mixHtml() + clockHtml() + seasonsHtml(r) + '</div>';
}
export function bootPortfolio(){ buildPortfolio(); }
