import { facts, fmtSigned, hiCard, lede, monthLabel, srcBlock } from "./format.ts";
import { moreRow, ui } from "./dom.ts";
import { calendarTodayY, cpiYoYHistory, wheelMeta } from "./refresh-season.ts";
import { M2V_FROM_YEAR, m2vHistory, marketCycles, seasonReading, sp500Years } from "./data.ts";
import { currentEra, cycleNowNote, cycleSlice, cycleStory, MOOD_TURN, moodToday, moodTrack, nowModel, openCycle, seasonTitle, totalGrowthYears, totalRiseIn } from "./model.ts";
import { indOf } from "./readings.ts";
import { ROSTER_BY } from "./roster.ts";
import type { CycleModel, Mood } from "./model.ts";

type WeatherRow = { name: string; from: number; closed: boolean; g: number; p: number; gap: number };
type Story = NonNullable<ReturnType<typeof cycleStory>>;
type StoryBeat = { x: Mood; verb: string; tag?: string };
type MoodRead = Mood & { word: string; pct: number; change: number };

function insightCirculation(){
  var vel = m2vHistory, n = vel.length;
  if (!vel || n < 5) return "";
  var velChg = (vel[n - 1] / vel[n - 5] - 1) * 100;
  var run = 0;
  for (var i = n - 1; i >= 4; i--){ if (vel[i] / vel[i - 4] > 1) run++; else break; }
  var runFromY = M2V_FROM_YEAR + Math.floor((n - run) / 4);
  var lo = Math.min.apply(null, vel), loI = vel.indexOf(lo);
  var offLow = (vel[n - 1] / lo - 1) * 100;
  var volInd = indOf(ROSTER_BY["sheet-sign-volume"]);
  if (!volInd || !volInd.meter || volInd.meter.value == null) return "";
  var volPct = volInd.meter.value;
  var up = volPct > 0, vup = velChg > 0;
  var name = up && vup  ? "Growing and moving faster"
           : up && !vup ? "Added faster than it is used"
           : !up && vup ? "Circulating faster on a smaller stock"
                        : "Draining and slowing";
  var f1 = function(v: number){ return (v >= 0 ? "+" : "\u2212") + Math.abs(v).toFixed(1) + "%"; };
  var circLede = '<p class="hi-lede">Volume is the blood and Pulse is the heart rate; multiplied they ' +
    'are cardiac output — how much money there is times how hard each unit works. Pressure is the ' +
    'resistance that flow meets, and Interest rates are the signal that sets all three.</p>';
  var txt = "M2 is " + f1(volPct) + " over the year and each dollar turns over " +
    f1(velChg).replace("+", "") + " " + (vup ? "more" : "less") + " often than a year ago, so " +
    (up === vup ? "both are pushing the same way." : "they are pulling against each other.");
  if (run >= 8){
    var oc = openCycle();
    txt += " Velocity has risen for " + run + " straight quarters" +
      (oc && runFromY === oc.from ? ", every quarter of this cycle," : ",") +
      " and sits " + offLow.toFixed(0) + "% above its " + (M2V_FROM_YEAR + Math.floor(loI / 4)) + " low.";
  }
  return circLede + hiCard(name, "", txt);
}
function insightWeather(){
  var rows = marketCycles.map(function(c){
    var to = c.to || calendarTodayY;
    var g = totalGrowthYears(c.from, to);
    var sp = cycleSlice(cpiYoYHistory, c);
    var p = sp ? totalRiseIn(cpiYoYHistory.slice(sp[0], sp[1])) : null;
    if (!g || !p) return null;
    return { name:c.name, from:c.from, closed:!c.ongoing, g:g.total, p:p.total, gap:p.total - g.total };
  }).filter(Boolean) as WeatherRow[];
  if (rows.length < 3) return "";
  var now = rows[rows.length - 1];
  var past = rows.slice(0, -1);
  if (!past.length) return "";
  var f1 = function(v: number){ return v.toFixed(1) + "%"; };
  var absGap = function(r: WeatherRow){ return Math.abs(r.gap); };
  var tightest = past.reduce(function(a, b){ return absGap(b) < absGap(a) ? b : a; });
  var widest = rows.reduce(function(a, b){ return absGap(b) > absGap(a) ? b : a; });
  var GAP_BAND = 1.5;
  var run = 0;
  for (var i = rows.length - 1; i >= 0; i--){ if (rows[i].gap > GAP_BAND) run++; else break; }
  var ORD = ["", "", "second", "third", "fourth", "fifth", "sixth"];
  var NUM = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var spell = function(n: number){ return NUM[n] || String(n); };
  var lead = now.gap > GAP_BAND ? "Prices are running ahead of output"
           : now.gap < -GAP_BAND ? "The economy is growing into its prices"
                                 : "Prices and output are keeping pace";
  var txt = lead + ". Since " + now.from + " prices are up " + f1(now.p) + " and the economy is up " +
    f1(now.g) + " \u2014 " + absGap(now).toFixed(1) + " points apart. Over a whole cycle these two normally " +
    "finish close together: the " + spell(past.length) + " closed cycles since " + rows[0].from + " came in " +
    past.map(function(r){ return absGap(r).toFixed(1); }).join(", ") + " points apart, the " + tightest.name +
    " almost exactly level at " + f1(tightest.g) + " against " + f1(tightest.p) + ".";
  if (widest === now)
    txt += " This is the widest gap in the record, and " +
      (run > 1 ? "the " + (ORD[run] || run + "th") + " cycle running with prices ahead" : "prices are ahead") +
      " \u2014 the economy costing more faster than it is growing bigger.";
  else
    txt += " Today's " + absGap(now).toFixed(1) + " points sits inside that range.";
  return lede(cycleNowNote(nowModel)) + seasonCards(nowModel) + marketCycleCard(nowModel) + hiCard("The Barometer", "", txt);
}
function seasonCards(m: CycleModel){
  var r = seasonReading[m.season] || {};
  return (r.economy ? hiCard(seasonTitle(wheelMeta[m.season]), "", r.economy) : "") +
    (r.body ? hiCard("In the Body", "", r.body) : "");
}
function marketCycleCard(m: CycleModel){
  var years = sp500Years.filter(function(d: YearPoint){ return d.y >= m.era.from && d.y <= m.endYear; });
  if (!years.length) return "";
  var bear = years.filter(function(d: YearPoint){ return d.v < 0; }), before = sp500Years.filter(function(d: YearPoint){ return d.y < m.era.from && d.v < 0; }).pop();
  var all = m.cumByYear[years[years.length - 1].y], list = years.map(function(d: YearPoint){
    return d.y + (d.y === calendarTodayY ? " so far" : "") + " " + fmtSigned(d.v, 1) + "%"; }).join(", ");
  var n = function(k: number, what: string){ return (k ? (["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][k - 1] || k) : "no") + " " + what + (k === 1 || !k ? " year" : " years"); };
  var count = n(years.length - bear.length, "bull") + " and " + n(bear.length, "bear");
  return hiCard("The Market This Cycle", bear.length ? "" : "good", "Since the " + m.era.name + " opened in " + m.era.from + ": " + list +
    ". That is " + count + ", " + fmtSigned(all, 1) + "% in all with dividends" +
    (before ? ". The last bear year before it was " + before.y + ", at " + fmtSigned(before.v, 1) + "%." : "."));
}
var MOOD_CHART = [
  ["Optimism", 168, 290, "cream", -23, 7, "end"], ["Excitement", 211, 221, "amber", -23, 0, "end"], ["Thrill", 279, 158, "orange", -21, 0, "end"],
  ["Euphoria", 362, 135, "red", 0, -25, "middle"], ["Anxiety", 438, 163, "wine", 24, -3, "start"], ["Denial", 500, 222, "slate", -23, 7, "end"],
  ["Fear", 548, 296, "cream", -21, 8, "end"], ["Desperation", 594, 374, "amber", -24, 7, "end"], ["Panic", 656, 443, "orange", -23, 13, "end"],
  ["Despair", 744, 475, "red", 0, 41, "middle"], ["Depression", 838, 458, "wine", 24, 14, "start"], ["Hope", 925, 393, "slate", 25, 9, "start"],
  ["Optimism", 978, 310, "cream", -28, -3, "end"]
];
var MOOD_SRC = [
  {t:"Yale Center for Emotional Intelligence \u2014 the Mood Meter (RULER): feelings placed by pleasantness and energy", u:"https://rulerapproach.org/"},
  {t:"CNN Business \u2014 Fear &amp; Greed Index: one 0\u2013100 reading from extreme fear to extreme greed", u:"https://www.cnn.com/markets/fear-and-greed"},
  {t:"Russell Investments \u2014 the cycle of market emotions", u:"https://russellinvestments.com/content/dam/ri/files/au/en-br/financial-professional/insights/cycle-of-market-emotions-poster_AU_NZ.pdf"}
];
function curvePath(pts: number[][]){
  var f = function(p: number[]){ return p[0].toFixed(1) + "," + p[1].toFixed(1); };
  return pts.map(function(p, i){
    if (!i) return "M" + f(p);
    var a = pts[Math.max(0, i - 2)], b = pts[i - 1], d = pts[Math.min(pts.length - 1, i + 1)];
    return "C" + f([b[0] + (p[0] - a[0]) / 6, b[1] + (p[1] - a[1]) / 6]) + " " + f([p[0] - (d[0] - b[0]) / 6, p[1] - (d[1] - b[1]) / 6]) + " " + f(p);
  }).join("");
}
function moodCallout(x: number, y: number, lines: string[], from: number, to: number){
  return '<path class="mood-arrow" d="M' + x + ',' + from + 'V' + to + 'M' + (x - 7) + ',' + (to + (to < from ? 12 : -12)) + 'L' + x + ',' + to + 'L' + (x + 7) + ',' + (to + (to < from ? 12 : -12)) + '"/>' +
    lines.map(function(t, i){ return '<text class="mood-call" x="' + x + '" y="' + (y + i * 34) + '" text-anchor="middle">' + t + '</text>'; }).join("");
}
function moodCycleSvg(now: string){
  var pts = MOOD_CHART.map(function(s){ return [+s[1], +s[2]]; });
  var out = ['<path class="mood-line" d="' + curvePath([[156, 322]].concat(pts, [[995, 272]])) + '"/>',
    moodCallout(362, 430, ["Point of maximum", "financial risk"], 400, 160), moodCallout(745, 195, ["Point of maximum", "financial opportunity"], 245, 452)];
  MOOD_CHART.forEach(function(s){
    var on = s[0] === now ? " now" : "";
    out.push('<circle class="mood-dot ' + s[3] + on + '" cx="' + s[1] + '" cy="' + s[2] + '" r="' + (on ? 19 : 15) + '"/>');
    out.push('<text class="mood-lab' + on + '" x="' + (+s[1] + +s[4]) + '" y="' + (+s[2] + +s[5]) + '" text-anchor="' + s[6] + '">' + String(s[0]).toUpperCase() + '</text>');
  });
  return '<svg class="mood-curve" viewBox="20 80 1060 460" role="img" aria-label="The cycle of market emotions, from optimism through euphoria and despair back to optimism' +
    (now ? ", with today at " + now : "") + '.">' + out.join("") + '</svg>';
}
function isRead(d: Mood): d is MoodRead { return !!d.word && d.pct != null && d.change != null; }
function moodInfo(d: MoodRead){
  return '<h4>Her Mood</h4>' + facts([moodFigures(d),
    "Each reading is ranked against its own history to that month, from 0 (its lowest) to 100 (its highest), turned so that a high rank always means more appetite: valuations (the average of the CAPE and Buffett ranks), calm (the VIX, upside down) and consumer confidence. Her mood is the average of the three.",
    "That mood is then ranked against her own moods before it, since " + monthLabel(moodTrack()[0].m) + ": one investor\u2019s euphoria is not another\u2019s, so the stage is hers. Rising over " + MOOD_TURN + " months, she is on the climbing side of the chart (despair, depression, hope, optimism, excitement, thrill, euphoria); falling, on the descending side (euphoria, anxiety, denial, fear, desperation, panic, despair). Her stage is the one on that side whose height on the chart is nearest her rank.",
    "The chart, its stages and their heights are the cycle of market emotions\u2019, the reference Keren chose; the heights are read off the drawing, 0 at despair and 100 at euphoria. Reading the side by direction is Keren\u2019s call; the three months are Claude\u2019s default.",
    "Desire and the Treasury spread are left out: consumer demand measures what households spend rather than how they feel, the equity risk premium shares its earnings yield with the CAPE the valuations already count, and the yield curve steepens when the Fed cuts into a crash, so its level does not sort mood. This is a description, not a forecast.",
    "Under her stage is the story of the cycle on screen, told from her emotion month by month: where she opened, her high and her low (the months her mood ranked highest and lowest), where she closed or is now, in the order they came, and the two emotions she spent most months in. An open cycle is told to the latest month."
  ]) + srcBlock(MOOD_SRC);
}
function moodFigures(d: MoodRead){
  var r = Math.round, ago = d.ago ? ", " + (d.change > 0 ? "up" : "down") + " from " + r(d.ago.score) + " in " + monthLabel(d.ago.m) : "";
  return "Today her mood reads " + r(d.score) + ago + ". Against her own moods since " + monthLabel(moodTrack()[0].m) +
    " that ranks " + r(d.pct) + " of 100. Valuations rank " + r(d.valuations) + ", calm " + r(d.calm) + " and confidence " + r(d.confidence) +
    ": the market alone reads " + r(d.market) + ", households " + r(d.confidence) + ".";
}
function moodCard(d: MoodRead){
  var c = ui.eraOpen || currentEra, s = cycleStory(c);
  return hiCard("She\u2019s in " + d.word, "", s ? c.name + ", " + c.from + "\u2013" + (c.to || "now") + ". " + storyText(s, c.ongoing) : moodFigures(d));
}
function insightMood(){
  var d = moodToday();
  var intro = lede("Markets move through feelings in a familiar order: optimism rising to euphoria, the point of most financial risk, then down through anxiety and fear to despair, the point of most opportunity, and back through hope. Her mood is read against her own history, because one investor\u2019s euphoria is not another\u2019s.");
  if (!d || !isRead(d)) return intro;
  return intro + '<figure class="mood-fig">' + moodCycleSvg(d.word) + '</figure>' + moodCard(d) + moodInfo(d);
}
function storyBeats(s: Story, open: boolean | undefined){
  var ev: StoryBeat[] = [{ x:s.first, verb:"opened in" }, { x:s.last, verb:open ? "is now in" : "closed in" }];
  ([[s.hi, "her high"], [s.lo, "her low"]] as [Mood, string][]).forEach(function(p){
    var same = ev.filter(function(e){ return e.x.m === p[0].m; })[0];
    if (same) same.tag = (same.tag ? same.tag + " and " : "") + p[1];
    else ev.push({ x:p[0], verb:p[0] === s.hi ? "rose to" : "fell to", tag:p[1] });
  });
  ev.sort(function(a, b){ return a.x.m < b.x.m ? -1 : a.x.m > b.x.m ? 1 : 0; });
  var parts = ev.map(function(e){ return e.verb + " " + e.x.word + " (" + monthLabel(e.x.m) + (e.tag ? ", " + e.tag : "") + ")"; });
  return "She " + parts.slice(0, -1).join(", ") + " and " + parts[parts.length - 1] + ".";
}
function storyText(s: Story, open: boolean | undefined){
  return storyBeats(s, open) + " Most of it she spent in " +
    s.most.map(function(m){ return m.word + " (" + m.n + (m.n === 1 ? " month)" : " months)"); }).join(" and ") + ".";
}
var INSIGHT: Record<string, () => string> = { weather:insightWeather, circulation:insightCirculation, mood:insightMood };
export function insightRow(key: string){ return '<div class="cat-more">' + moreRow(INSIGHT[key] ? INSIGHT[key]() : "") + '</div>'; }
export function replaceInsight(c: { key: string }){
  var box = document.querySelector("#sheet-cat-" + c.key + " .cat-more");
  if (box) box.outerHTML = insightRow(c.key);
}
