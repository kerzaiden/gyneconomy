import { byId } from "./dom.ts";
import { gdpQuarterlyYoY } from "./refresh-season.ts";
import { CAPE_FAIR, capeHistory, dsrNow, m2Yoy, now, PULSE_PRE2008, SAV_OFFSET, savHistory, savNow, syncCapeHistory, valRow } from "./data.ts";
import { nowModel } from "./model.ts";
import { householdsNow, indOf } from "./readings.ts";
import { m2Step } from "./history-charts.ts";
import { CATEGORIES, peekOf, ROSTER, ROSTER_BY } from "./roster.ts";
import { gdpPeek, tempPeek } from "./render-core.ts";
import { appendPicks, catPicks, catSheet, indicatorPeeks } from "./indicators.ts";
import { INSIGHT } from "./insights.ts";
/* ---- THE CYCLE TAB: cards and categories ---- */
var PAIR_ART: Record<string, (ind: Indicator) => PeekCardOpts> = {
  "sheet-sign-pulse": function(ind){ return { pulse:{ rate:ind.meter.value, ref:PULSE_PRE2008 } }; },
  "sheet-sign-volume": function(){
    return { cols:m2Yoy.filter(function(x){ return x != null; }), colBase:0, colRule:true, colClass:function(v: number){ return "m2-col " + m2Step(v); } };
  }
};
function placeSignPair(){
  var pair = ROSTER.filter(function(R){ return R.door === "pair"; }).map(function(R){
    var ind = indOf(R);
    if (!ind) return "";
    var card = PAIR_ART[R.id](ind);
    card.value = ind.metric; card.word = ind.tag!.text; card.state = ind.tag!.state;
    return peekOf(R.id, card);
  }).join("");
  if (!pair) return;
  var after = byId("sheet-sign-sentiment");
  if (!after || !after.parentNode) return;
  var row = document.createElement("div");
  row.className = "peek-row"; row.id = "peek-row-signs";
  row.innerHTML = pair;
  after.parentNode.insertBefore(row, after.nextSibling);

  var horm = document.querySelector('.sign-row[data-subject="hormones"]');
  var hormSheet = byId("sheet-sign-hormones");
  if (horm && hormSheet && horm.parentNode === row.parentNode){
    row.parentNode!.insertBefore(horm, row);
    horm.parentNode!.insertBefore(hormSheet, horm.nextSibling);
  }
}
function swapSentimentActivity(){
  var sent = document.querySelector('.sign-row[data-open="sheet-sign-sentiment"]');
  var act  = document.querySelector('.sign-row[data-open="sheet-sign-activity"]');
  var sentSheet = byId("sheet-sign-sentiment");
  var actSheet  = byId("sheet-sign-activity");
  if (!sent || !act || !sentSheet || !actSheet) return;
  var mSent = document.createComment("sentiment slot"), mAct = document.createComment("activity slot");
  sent.parentNode!.insertBefore(mSent, sent);
  act.parentNode!.insertBefore(mAct, act);
  mSent.parentNode!.insertBefore(act, mSent);
  act.parentNode!.insertBefore(actSheet, act.nextSibling);
  mAct.parentNode!.insertBefore(sent, mAct);
  sent.parentNode!.insertBefore(sentSheet, sent.nextSibling);
  mSent.parentNode!.removeChild(mSent);
  mAct.parentNode!.removeChild(mAct);
}
function buildCategories(){
  var host = byId("today-analysis"); if (!host) return;
  CATEGORIES.forEach(function(c){
    var sheet = catSheet("sheet-cat-" + c.key, c.key);
    var items = document.createElement("div"); items.className = "cat-list";
    appendPicks(items, catPicks(c), c.key);
    sheet.appendChild(items);
    var tog = INSIGHT[c.key as keyof typeof INSIGHT] ? INSIGHT[c.key as keyof typeof INSIGHT]() : "";
    if (tog) sheet.insertAdjacentHTML("beforeend", tog);
    host!.appendChild(sheet);
  });
  ["peek-row", "peek-row-signs", "signs-list"].forEach(function(id){
    var el = byId(id);
    if (el && !el.querySelector("*") && el.parentNode) el.parentNode.removeChild(el);
  });
}
export function renderPeekAndCategories(){
  var host = byId("peek-row"); if (!host) return null;
  var tempInd = indOf(ROSTER_BY["sheet-metric-temp"]);
  var r = nowModel.reading, era = nowModel.era;
  var gq = gdpQuarterlyYoY.filter(function(d){ return parseInt(d.q.slice(0, 4), 10) >= era.from; });
  var capeNow = valRow("cape")!.meter.value!, buffNow = valRow("buffett")!.meter.value;
  syncCapeHistory();
  host.innerHTML =
    tempPeek(r, tempInd!.metric, nowModel.cpi) + gdpPeek(r, gq) +
    peekOf("sheet-metric-valuation", { value:capeNow.toFixed(1) + "\u00d7", word:now.valuation.tag!.text,
               state:now.valuation.tag!.state,
               cols:capeHistory.map(function(d){ return d.v; }), colBase:CAPE_FAIR,
               colClass:function(v: number){ return "dv-bar " + (v > CAPE_FAIR ? "over" : "under"); } }) +
    peekOf("sheet-metric-households", { value:dsrNow.toFixed(1) + "/" + savNow.toFixed(1),
               word:householdsNow.word, state:householdsNow.state,
               cols:savHistory.slice(SAV_OFFSET), colBase:0,
               colClass:function(){ return "hh-col"; } }) +
    indicatorPeeks();

  placeSignPair();
  swapSentimentActivity();
  buildCategories();

  return { host:host, tempInd:tempInd, r:r, gq:gq, capeNow:capeNow, buffNow:buffNow };
}
