import { facts, fmtSigned, ledeHtml, monthLabel, qAtIndex, qPretty, srcBlock } from "./format.js";
import { byId, expandBtn, ui } from "./dom.js";
import { defineReadings, GYN, LIVE, liveAsOf, liveInto, merge } from "./live.js";
import { colPeek, histBar, histTip, PULSE_WINDOW, pulseTraceSvg, vitalRingSvg } from "./charts.js";
import { confidenceHistory, productivityHistory } from "./history-fred.js";
import { calendarTodayY, gdpQuarterlyYoY } from "./refresh-season.js";
import { ACT_BAND_HI, ACT_BAND_LO, CAPE_FAIR, CONFIDENCE_LINE, CONFIDENCE_SRC, DEF_FROM_YEAR, DEF_MEAN, deficitHistory, DSR_FROM_YEAR, DSR_MEAN, dsrHistory, dsrNow, fedFundsRange, GDP_NORM, HY_NORM_HI, HY_NORM_LO, hyQuarterEnds, labRow, m2vHistory, m2Yoy, now, PRODUCTIVITY_SLOWDOWN, PRODUCTIVITY_SRC, PRODUCTIVITY_TREND, PULSE_PRE2008, savHistory, savNow, sp500AnnualReturnSource, sp500Years, t10y2yHistory, t10y3mHistory, t10yYieldHistory, t3mYieldHistory, unempHistory, valRow, VIX_CALM, VIX_CONVENTION, VIX_FEAR, VOL_JOIN } from "./data.js";
import { cpiNow } from "./model.js";
import { HIST_NOTE, histHead, histNote } from "./history.js";

function productivityWord(v){
  if (v >= PRODUCTIVITY_TREND) return { state:"good", text:"Above trend",
    says:"running above the slowdown-era average and at or above the long-run trend",
    why:"clears both lines, so the word is above trend" };
  if (v >= PRODUCTIVITY_SLOWDOWN) return { state:"good", text:"Above the slowdown",
    says:"running above the slowdown-era average but below the long-run trend",
    why:"clears the slowdown line but not the long-run one, so the word is above the slowdown, not above trend" };
  return { state:"warning", text:"Below the slowdown",
    says:"running below even the slowdown-era average",
    why:"is below both lines, so the word is below the slowdown" };
}
function confidenceWord(v){
  if (v >= CONFIDENCE_LINE) return { state:"good", text:"Confident",
    says:"above the OECD\u2019s long-term average of 100, the side on which households lean towards spending on major purchases" };
  return { state:"warning", text:"Pessimistic",
    says:"below the OECD\u2019s long-term average of 100, the side on which households lean towards saving more and spending less" };
}
export function deficitBlock(){
  var lo = Math.min.apply(null, deficitHistory), iLo = deficitHistory.indexOf(lo), iSur = -1, i;
  for (i = deficitHistory.length - 1; i >= 0; i--) if (deficitHistory[i] > 0){ iSur = i; break; }
  var lastY = DEF_FROM_YEAR + deficitHistory.length - 1;
  var surCount = deficitHistory.filter(function(v){ return v > 0; }).length;
  function row(name, val){
    return '<div class="legend-row"><span>' + name + '</span><small>' + val + '</small></div>';
  }
  var defRow = labRow("sheet-marker-deficit");
  var note = '<h4>Federal budget deficit or surplus</h4>' +
    (defRow ? ledeHtml(defRow.note) : '') +
    facts([
      'Every fiscal year since ' + DEF_FROM_YEAR + ' as a share of GDP \u2014 <b>a surplus above the line, a ' +
        'deficit below</b>.',
      'The <b>shaded stretches</b> are fiscal years that contained at least one month of an NBER-dated recession. ' +
        'A fiscal year is not a calendar year, so the rule is stated rather than assumed: the federal year ran ' +
        'July\u2013June through FY1976 and October\u2013September since FY1977.',
      'They carry the whole of what this picture has to say: <b>a deficit this deep has almost always sat inside ' +
        'a recession, in the few years just after one, or at the end of a war.</b>',
      '<b>FY1983</b> \u2014 the year usually named beside today \u2014 is shaded, because the recession it came out of ' +
        'ended two months into it. The dashed line is its level, drawn at every range so the comparison stays on ' +
        'screen even when 1983 is off the left edge. Today\u2019s is five years past the last recession and has not closed.',
      'There have been <b>' + surCount + ' surplus years</b> since ' + DEF_FROM_YEAR + ', none since FY' +
        (DEF_FROM_YEAR + iSur) + '. The average across the whole series is ' + DEF_MEAN.toFixed(1) + '%.',
      'The chart ends at FY' + lastY + ', the last actual \u2014 the Federal budget card carries ' +
        'CBO\u2019s projection for the year in progress, which is why the two figures differ.',
      'The chart starts at <b>FY' + DEF_FROM_YEAR + '</b> because peacetime is the only frame in which 1983 and ' +
        'today are comparable at all. The wartime record sits outside it and is stated rather than drawn: ' +
        '<b>\u221226.9% of GDP in FY1943</b>, which inside the plot would flatten eighty years into a band.'
    ]);
  HIST_NOTE["deficit-range"] = note;
  return histBar("", "deficit-rangebar") +
    '<div class="page-chart pulsebox">' +
    histHead("deficit-range") +
    '<div id="deficit-record" class="vh-host"></div>' +
    histTip("deficit-hist-tooltip") +
    '<div id="deficit-records"></div>' +
    '<div id="deficit-trend"></div></div>';
}
export var coincident = [
  {
    bodyTerm:"Desire", econTerm:"Risk tolerance (credit)",
    page:{ bare:true, noMark:true, deferHighlights:true,
           after:function(ind){ return desireBlock(ind) + riskMatrixBlock(ind.meter.value, valRow("cape").meter.value); } },
    tag:{text:"High appetite", state:"good"},
    metric:"2.80%", metricSub:"high-yield OAS, Sep 24 2026",
    meter:{min:2.41,max:21.82,value:2.80,optimal:{from:3.5,to:6, label:"3.5–6%"},
           ends:{ low:"Tight", zone:"Normal", high:"Wide" }},
    shortCaption:"A touch off its tightest levels, but still near the tightest spread on record — she's in the mood to take risk.",
    aux:{label:"Long-run median, since 1996", value:"~4.5%"},
    get peek(){ return colPeek(hyQuarterEnds(), function(){ return "hy-col"; }); },
    src:[{t:"ICE Data Indices via FRED — ICE BofA US High Yield Index Option-Adjusted Spread (BAMLH0A0HYM2)", u:"https://fred.stlouisfed.org/series/BAMLH0A0HYM2"},{t:"ICE Data Indices — index originator (full history behind the FRED window)", u:"https://www.ice.com/fixed-income-data-services/index-solutions/fixed-income-indices"}]
  },
  {
    bodyTerm:"Pulse", econTerm:"Money velocity",
    page:{ bare:true, noHead:true, chartFirst:true, peeked:true,
           chart:function(ind){ return pulseBlock(ind.meter.value, PULSE_PRE2008, ind); } },
    tag:{text:"Recovering", state:"warning"},
    metric:"1.42×", metricSub:"M2 velocity, Q2 2026",
    meter:{min:1.126, max:2.192, value:1.415, optimal:{from:1.7, to:2.19, label:"1.7–2.2×"},
           ends:{ low:"Slow · hoarding", zone:"Pre-2008", high:"Fast · spending" }},
    shortCaption:"Recovering off an all-time low, but still circulating well under her pre-2008 pace.",
    caption:"Her literal pulse — not a mood, a tempo: how many times the same dollar changes hands in a year (nominal GDP ÷ M2), independent of how anxious or calm she feels. The parallel is arithmetic rather than poetic. A heart's output is its rate times the volume it moves per beat; an economy's nominal output is its velocity times the money it holds. Those are the same equation wearing two sets of names — M2 is the stroke volume, velocity is the pulse rate, and nominal GDP is what the two of them together deliver. Which is also why the spectrum runs the way it does: money sitting still is a body at rest or stalled, money changing hands quickly is a body working hard, and past a point, running hot. One honest caveat — unlike a pulse, this is not measured directly. It is computed, nominal GDP divided by M2, so it can never tell you anything those two have not already said; that is why the post-2008 collapse in velocity surprised a monetary tradition that had assumed it was stable. Steadily recovering off the all-time low set during 2020's stimulus (1.13×), but still running well under the 1.7–2.2× pace that held from the 1960s through the mid-2000s — a slower circulation than her long-run norm, consistent with a system still holding more cash and credit per transaction than it used to.",
    aux:{label:"COVID-era low (2020)", value:"1.13×"},
    src:[{t:"Federal Reserve via FRED — Velocity of M2 Money Stock, quarterly since 1959 (M2V; record low 1.126 in Q2 2020, high 2.192 in Q3 1997)", u:"https://fred.stlouisfed.org/series/M2V"}]
  },
  {
    bodyTerm:"Volume", econTerm:"Money stock (M2)",
    page:{ bare:true, noHead:true, chartFirst:true, peeked:true, chart:function(ind){ return volumeBlock(ind); } },
    tag:null,
    metric:"+5.7%", metricSub:"M2, year over year, Aug 2026",
    meter:{min:-4.64, max:25.61, value:5.66, optimal:{from:3.5, to:10, label:"3.5\u201310%"},
           ends:{ low:"Draining", zone:"Her pace", high:"Flooding" }},
    shortCaption:"Growing at her ordinary pace again, after the largest transfusion in the record and the only drain.",
    caption:"How much blood there is \u2014 the other half of the number Pulse measures. Nominal output is the money stock times its velocity, so Volume and Pulse are two halves of one reading and neither means much alone: a racing pulse on full volume is exercise, and the same pulse on falling volume is shock. Her volume grew 40% in the twenty-six months to April 2022, the largest transfusion in the record, while velocity fell to its all-time low \u2014 which is why prices stayed quiet far longer than the money alone implied, and why the fever arrived only when circulation picked up on top of the enlarged stock. Then the volume itself was drained: five quarters of year-over-year contraction from 2023 Q1, the only ones in sixty-seven years. Range: +25.6% (2021 Q1) to \u22124.6% (2023 Q2), against a 1960\u20132019 pace of 6.8%.",
    src:[{t:"Federal Reserve via FRED \u2014 M2 money stock, monthly since 1959 (M2SL)", u:"https://fred.stlouisfed.org/series/M2SL"}]
  }
];
function deriveVolumeTag(){
  var vol = coincident.filter(function(c){ return c.bodyTerm === "Volume"; })[0];
  if (vol) vol.tag = volumeVerdict(vol.meter.value);
}
export function meterFlagged(m){
  var o = m.optimal || {};
  if (o.from != null) return m.value < o.from || m.value > o.to;
  if (o.gte != null) return m.value < o.gte;
  if (o.lte != null) return m.value > o.lte;
  return false;
}
function desireInfoHtml(ind){
  return '<h4>Risk tolerance (credit)</h4>' +
    '<p class="caption">The reading is <b>' + ind.tag.text + '</b>. The figure is the ICE BofA US High Yield ' +
      'Index option-adjusted spread \u2014 the extra yield investors demand to lend to companies rated below ' +
      'investment grade, over Treasuries of the same maturity, with the value of any embedded options ' +
      'stripped out (' + ind.metricSub + ').</p>' +
    '<p class="caption" style="margin-top:10px;"><b>Normal here is ' + HY_NORM_LO + '\u2013' + HY_NORM_HI +
      '%</b>, and both edges are the credit market\u2019s own breaks rather than a target: below about 3.5% is ' +
      'read as complacency, above about 6% as stress, and above 8% as distress. The long-run median since the ' +
      'index began in 1996 is roughly 4.5%, which sits inside the band. An economy has no level it ought to be ' +
      'at, so none of this is an optimum \u2014 it is where this spread has actually sat.</p>' +
    '<p class="caption" style="margin-top:10px;"><b>Tight</b> means lenders are asking little to take credit ' +
      'risk, so appetite is high; <b>wide</b> means they are asking a lot. That is why the figure flags amber ' +
      'while the reading stays good: abnormally tight spreads are bullish risk appetite AND a historically ' +
      'unusual place for compensation to sit. Both are true of the one number. The ends of the scale are the ' +
      'index\u2019s own record: 2.41% in June 2007 and 21.82% in December 2008.</p>' +
    srcBlock([
      {t:"ICE Data Indices via FRED \u2014 ICE BofA US High Yield Index OAS (BAMLH0A0HYM2)", u:"https://fred.stlouisfed.org/series/BAMLH0A0HYM2"},
      {t:"Trading Economics \u2014 the index\u2019s record high and low since 1996", u:"https://tradingeconomics.com/united-states/bofa-merrill-lynch-us-high-yield-option-adjusted-spread-fed-data.html"},
      {t:"Convex \u2014 high-yield spread regimes and the long-run median", u:"https://convextrade.com/glossary/hy-spreads"},
      {t:"CME Group \u2014 how Fed policy moves corporate bond spreads", u:"https://www.cmegroup.com/openmarkets/interest-rates/2025/How-Fed-Policy-Can-Impact-Corporate-Bond-Spreads.html"}
    ]);
}
function volumeInfoHtml(ind){
  return '<h4>' + ind.econTerm + '</h4>' +
    '<p class="caption">The reading is <b>' + (ind.tag ? ind.tag.text : "") + '</b>. M2 is the money stock \u2014 ' +
      'cash, chequing and savings deposits, and retail money-market funds \u2014 read as the year-over-year change ' +
      '(' + ind.metricSub + ').</p>' +
    '<p class="caption" style="margin-top:10px;"><b>Her pace is 3.5\u201310%</b>, and that is a band computed from ' +
      'this page\u2019s own series rather than chosen: across the 240 quarters from 1960 to 2019, M2 grew 6.80% a ' +
      'year on average (median 6.70%), and the tenth to ninetieth percentile runs 3.3% to 10.3%. So roughly four ' +
      'quarters in five sat inside this band, and the two ends are what unusual looks like in each direction \u2014 ' +
      '<b>draining</b> below it, <b>flooding</b> above. The ends of the track are the record itself: \u22124.6% in ' +
      '2023 Q2, the only contraction in the series, and +25.6% in 2021 Q1.</p>' +
    '<p class="caption" style="margin-top:10px;">Volume and Pulse are two halves of one number \u2014 nominal output ' +
      'is the money stock times its velocity \u2014 so neither means much read alone.</p>';
}
function pulseInfoHtml(ind){
  return '<h4>' + ind.econTerm + '</h4>' +
    '<p class="caption">The reading is <b>' + (ind.tag ? ind.tag.text : "") + '</b>. Velocity is how many times ' +
      'the same dollar changes hands in a year, nominal GDP divided by M2 (' + ind.metricSub + '). The track\u2019s ' +
      'ends are the record: 1.126\u00d7 in 2020 Q2 and 2.192\u00d7 in 1997 Q3.</p>' +
    '<p class="caption" style="margin-top:10px;"><b>The 1.7\u20132.2\u00d7 band is the pre-2008 era\u2019s own range</b>, not a ' +
      'target \u2014 across the 196 quarters from 1959 Q1 to 2007 Q4 velocity averaged 1.857\u00d7 (median 1.808\u00d7) and ' +
      'ran between 1.652\u00d7 and 2.192\u00d7. It is labelled <b>Pre-2008</b> rather than normal for that reason: the ' +
      'collapse after 2008 may be the new ordinary, and calling the old range normal would beg that question.</p>' +
    '<p class="caption" style="margin-top:10px;">The ends mean direction as well as level: <b>slow</b> is money ' +
      'sitting still, the signature of a stalled economy, and <b>fast</b> is money changing hands quickly, which ' +
      'is a busy economy and, past a point, an inflationary one.</p>';
}
function confidenceInfoHtml(f){
  return '<h4>' + f.econTerm + '</h4>' +
    '<p class="caption">The reading is <b>' + f.tag.text + '</b>: ' + f.metric + ', ' + f.wordSays + ' (' + f.metricSub + '). ' +
      'The record, month by month, runs ' + f.span + '.</p>' +
    '<p class="caption" style="margin-top:10px;"><b>The 100 line is the OECD\u2019s own</b>: the index is amplitude adjusted so that ' +
      '100 is its long-term average. In the OECD\u2019s words, a reading above 100 \u201csignals a boost in the consumers\u2019 confidence ' +
      'towards the future economic situation\u201d, with households \u201cless prone to save, and more inclined to spend money on major ' +
      'purchases in the next 12 months\u201d; below 100 indicates \u201ca pessimistic attitude towards future developments in the economy\u201d.</p>' +
    '<p class="caption" style="margin-top:10px;">It is built from household surveys of their finances, the economy, unemployment and ' +
      'saving, and the OECD publishes it a few months after the month it describes, which is why the card\u2019s date trails the others.</p>' +
    srcBlock(CONFIDENCE_SRC);
}
function productivityInfoHtml(f){
  return '<h4>' + f.econTerm + '</h4>' +
    '<p class="caption">The reading is <b>' + f.tag.text + '</b>. Output per hour worked in the nonfarm ' +
      'business sector, against the same quarter a year earlier (' + f.metricSub + '). The record for that ' +
      'series, quarter by quarter, runs ' + f.span + '.</p>' +
    '<p class="caption" style="margin-top:10px;"><b>The 1.3% line is the BLS\u2019s own figure for the slowdown ' +
      'era</b> \u2014 since 2005 productivity has grown at an average of just 1.3% a year, against 2.1% a year ' +
      'across 1947\u20132018. So the band says something narrower than it looks: above the line is <i>better than ' +
      'the slowdown</i>, not <i>at trend</i>. Today\u2019s ' + f.metric + ' ' + f.wordWhy + '.</p>' +
    '<p class="caption" style="margin-top:10px;">This is the reading that says whether capacity is being ' +
      'rebuilt or only borrowed against: an economy can grow by working more hours or by getting more from ' +
      'each one, and only the second kind compounds.</p>' +
    srcBlock(PRODUCTIVITY_SRC);
}
function activityInfoHtml(ind){
  return '<h4>' + ind.econTerm + '</h4>' +
    '<p class="caption">The reading is <b>' + (ind.tag ? ind.tag.text : "") + '</b>. The figure is the ' +
      'headline unemployment rate (' + ind.metricSub + '). The ends of the track are the record: 2.5% in ' +
      'mid-1953 and, at the far end, the Census Bureau\u2019s 24.9% estimate for 1933.</p>' +
    '<p class="caption" style="margin-top:10px;"><b>The 3.5\u20135% band brackets the CBO\u2019s noncyclical rate of ' +
      'unemployment</b> \u2014 its estimate of the rate that remains once demand is neither too hot nor too cold, ' +
      'currently around 4.2%. Be clear about what is sourced and what is not: the CBO\u2019s number is published, ' +
      'the two edges are round figures set either side of it rather than a computed interval. There is no ' +
      'official normal range for unemployment, and this is the honest way to draw one.</p>' +
    '<p class="caption" style="margin-top:10px;">The ends read the opposite way to most bars here: <b>tight</b> ' +
      'is a hot labour market with few people looking, <b>slack</b> is a cold one. And this reading confirms a ' +
      'phase rather than calling it \u2014 unemployment is the textbook lagging indicator, usually trailing a turn ' +
      'by two to three quarters.</p>' +
    srcBlock([
      {t:"CBO via FRED \u2014 Noncyclical Rate of Unemployment (NROU)", u:"https://fred.stlouisfed.org/series/NROU"},
      {t:"BLS via FRED \u2014 Unemployment rate, monthly since 1948 (UNRATE)", u:"https://fred.stlouisfed.org/series/UNRATE"}
    ]);
}
function temperatureInfoHtml(ind){
  return '<h4>' + ind.econTerm + '</h4>' +
    '<p class="caption">The reading is <b>' + (ind.tag ? ind.tag.text : "") + '</b>. The figure is headline ' +
      'consumer prices, year over year (' + ind.metricSub + '). The ends of the track are the record, and they ' +
      'are further apart than a modern reader expects: −15.8% in 1921 and +23.7% in 1920, two years apart.</p>' +
    '<p class="caption" style="margin-top:10px;"><b>1–3% is a target band, not a normal range</b> — the one ' +
      'band in this app that describes where prices <i>ought</i> to be rather than where they have been. The ' +
      'Fed publishes a point target of 2%, reaffirmed in the August 2025 revision of its Statement on ' +
      'Longer-Run Goals, and has done since January 2012. It does not publish a band. The point is the ' +
      'Fed’s; the two edges are set a point either side of it for this page, and that width is a choice, ' +
      'not a source. And the months inside it are not evidence that the band is normal — 258 of the 451 ' +
      'months this page can draw, since 1989, have sat inside 1–3%, which is a fact about how often the Fed ' +
      'has hit its target rather than about where prices naturally sit. Widen the window and the band stops ' +
      'describing anything: the ends of this same track are −15.8% and +23.7%.</p>' +
    '<p class="caption" style="margin-top:10px;">And the needle is not measured on the same index as the ' +
      'target. The Fed’s 2% is the <b>PCE</b> price index; this reading is the <b>CPI</b>, which since 2000 ' +
      'has run 0.39 points higher on average — it covers only urban out-of-pocket spending, leans harder on ' +
      'shelter, and reweights annually rather than monthly, so it catches less of the substitution people do ' +
      'when a price rises. So the gap this bar draws is a little wider than the one the Fed is acting on: ' +
      '3.4% here is nearer 3% on the Fed’s own gauge.</p>' +
    '<p class="caption" style="margin-top:10px;">The two ends are not mirror images. <b>Hot</b> erodes what ' +
      'money buys. <b>Cold</b> sounds like relief and is not: falling prices raise the real weight of every ' +
      'debt already owed and give every buyer a reason to wait, which is why a central bank aims above zero ' +
      'rather than at it.</p>' +
    srcBlock([
      {t:"Federal Reserve — 2025 Statement on Longer-Run Goals and Monetary Policy Strategy", u:"https://www.federalreserve.gov/monetarypolicy/monetary-policy-strategy-tools-and-communications-statement-on-longer-run-goals-monetary-policy-strategy-2025.htm"},
      {t:"Cleveland Fed — The CPI versus the PCE price index", u:"https://www.clevelandfed.org/collections/infographics/2024/infogr-20241205-cpi-versus-pce-price-index"},
      {t:"BLS — Consumer Price Index, August 2026", u:"https://www.bls.gov/news.release/PDF/cpi.PDF"},
      {t:"BLS Monthly Labor Review — One hundred years of price change", u:"https://www.bls.gov/opub/mlr/2014/article/one-hundred-years-of-price-change-the-consumer-price-index-and-the-american-inflation-experience.htm"}
    ]);
}
function desireBlock(ind){
  histNote("desire-range", desireInfoHtml(ind));
  return histBar("", "desire-timeline") +
    '<div class="page-chart pulsebox">' +
    histHead("desire-range") +
    '<div id="desire-record" class="vh-host"></div>' +
    histTip("desire-hist-tooltip") +
    '<div id="desire-trend"></div>' +
  '</div>';
}
function volumeBlock(ind){
  var g = m2Yoy.filter(function(x){ return x != null; });
  var hi = Math.max.apply(null, g), lo = Math.min.apply(null, g);
  histNote("volume-range", volumeInfoHtml(ind));
  return histBar("", "volume-timeline") +
    '<div class="page-chart pulsebox">' +
    histHead("volume-range") +
    '<div id="m2-record" class="vh-host"></div>' +
    histTip("m2-hist-tooltip") +
    '<div id="volume-trend"></div>' +
    '</div>';
}
function velocityRecordBlock(pulseInd){
  var hi = Math.max.apply(null, m2vHistory), lo = Math.min.apply(null, m2vHistory);
  if (pulseInd) histNote("pulse-range", pulseInfoHtml(pulseInd));
  return histBar("", "pulse-timeline") +
    '<div class="page-chart pulsebox">' +
    histHead("pulse-range") +
    '<div id="pulse-record" class="vh-host"></div>' +
    histTip("pulse-hist-tooltip") +
    '<div id="pulse-trend"></div>' +
    '</div>';
}
function volumeVerdict(g){
  return g < 0     ? { text:"Draining", state:"serious" }
       : g < 3.5   ? { text:"Thin",     state:"warning" }
       : g < 10    ? { text:"Steady",   state:"good" }
       : g < 16    ? { text:"Filling",  state:"warning" }
                   : { text:"Flooding", state:"serious" };
}
export function unempState(v){
  return v < ACT_BAND_LO ? "tight"
       : v <= ACT_BAND_HI ? "good"
       : v < 6.5 ? "warning"
       : v < 8.5 ? "serious" : "critical";
}
export function growthInfoHtml(){
  return '<h4>Real GDP growth</h4>' +
    '<p class="caption">The figure is real gross domestic product against the same quarter a year earlier ' +
      '(' + gdpNowQ.q + '), so it is already adjusted for inflation \u2014 this is output, not prices. The ends of ' +
      'the track are the record and they are the same event twice: \u22127.4% in 2020 Q2, the deepest quarter of ' +
      'the pandemic shutdown, and +12.4% a year later, which is that collapse being measured against itself.</p>' +
    '<p class="caption" style="margin-top:10px;"><b>The 1.0\u20134.3% band is computed from this page\u2019s own ' +
      'series, not chosen</b>: across the 154 quarters since 1988 the tenth and ninetieth percentiles fall at ' +
      '0.96% and 4.34%. So roughly four quarters in five have sat inside it, and each end is what unusual looks ' +
      'like in that direction. There is no official normal rate of growth to point at instead, which is why it ' +
      'is drawn this way and said so.</p>' +
    '<p class="caption" style="margin-top:10px;">Two other lines matter more than the edges. The dashed line on ' +
      'the chart is this series\u2019 own long-run average, <b>' + GDP_NORM + '%</b> \u2014 the middle of the record ' +
      'rather than the edge of it, and the honest answer to "is this quick or slow". And the CBO puts the ' +
      'economy\u2019s <b>potential</b> growth \u2014 what it can sustain without overheating \u2014 at 2.1% a year through ' +
      '2030, easing to 1.8% after that as the population ages. Today\u2019s reading sits inside the band, below the ' +
      'long-run average, and almost exactly at potential: the economy is growing about as fast as it can.</p>' +
    srcBlock([
      {t:"BEA \u2014 Gross Domestic Product", u:"https://www.bea.gov/data/gdp/gross-domestic-product"},
      {t:"CBO \u2014 The Budget and Economic Outlook: 2026 to 2036", u:"https://www.cbo.gov/publication/62105"}
    ]);
}
function velocityVerdict(v){
  var r = v / PULSE_PRE2008;
  return r < 0.75 ? { text:"Very slow", state:"serious" }
       : r < 0.95 ? { text:"Slow",      state:"warning" }
       : r < 1.10 ? { text:"Steady",    state:"good" }
       : r < 1.25 ? { text:"Fast",      state:"warning" }
                  : { text:"Very fast", state:"serious" };
}
function derivePulseTag(){
  var pulse = coincident.filter(function(c){ return c.bodyTerm === "Pulse"; })[0];
  if (pulse) pulse.tag = velocityVerdict(pulse.meter.value);
}
export var lagging = [
  {
    bodyTerm:"Activity", econTerm:"Labor market",
    page:{ bare:true, noMark:true, deferHighlights:true, after:activityStackHtml },
    tag:{text:"Solid", state:"good"},
    metric:"4.1%", metricSub:"unemployment rate, Aug 2026",
    meter:{min:2.5,max:24.9,value:4.1,optimal:{from:ACT_BAND_LO,to:ACT_BAND_HI, label:"3.5–5%"},
           ends:{ low:"Tight", zone:"Normal", high:"Slack" }},
    shortCaption:"Ticked up slightly but still low against the full sweep of U.S. history.",
    caption:"Physical activity confirms a phase only after it's underway — unemployment is the textbook lagging indicator, typically trailing a turn by two to three quarters. Ticked up slightly but still low against the full sweep of U.S. history; the modern BLS series (since 1948) set its own record at 14.8% in April 2020 (14.7% as first reported), against a low of 2.5% in mid-1953; the 24.9% at the far end of the bar is the Census Bureau's historical estimate for 1933. August payrolls rose 162,000, beating forecasts.",
    aux:{label:"Initial jobless claims (wk of Sep 12)", value:"196K"},
    get peek(){
      var seen = unempHistory.filter(function(d){ return d.v != null; }).map(function(d){ return d.v; });
      return colPeek(seen, function(v){ return "unemp-col " + unempState(v); });
    },
    src:[{t:"BLS — The Employment Situation, August 2026", u:"https://www.bls.gov/news.release/empsit.nr0.htm"},{t:"DOL — Unemployment Insurance Weekly Claims", u:"https://www.dol.gov/ui/data.pdf"},{t:"BLS via FRED — Unemployment rate, monthly since 1948 (UNRATE)", u:"https://fred.stlouisfed.org/series/UNRATE"},{t:"Census Bureau — Historical Statistics of the United States, Colonial Times to 1970 (Series D 85–86, unemployment 1890–1970)", u:"https://www.census.gov/library/publications/1975/compendia/hist_stats_colonial-1970.html"}]
  },
  {
    bodyTerm:"Temperature", econTerm:"Inflation",
    page:{ bare:true, seat:seatTemperature },
    tag:{text:"Running hot", state:"warning"},
    get metric(){ return cpiNow.toFixed(1) + "%"; }, metricSub:"CPI, YoY, Aug 2026",
    meter:{min:-15.8,max:23.7,value:3.4,optimal:{from:1,to:3, label:"1–3%"},
           ends:{ low:"Cold", high:"Hot" }},
    shortCaption:"",
    caption:"Basal body temperature rises only after ovulation has already happened — CPI works the same way, confirming heat that built up earlier rather than predicting it. A touch above target; tame next to the full sweep of U.S. price history, which has run from outright deflation to the 1920 postwar spike and a 14.8% peak in 1980. The Fed's response — the lever pulled after her temperature, not ahead of it — raised the funds rate a quarter point to 3.75–4.00% at the Sep 16 meeting (12–0, unanimous) — its first hike in three years, with the dot plot signaling one more before year-end. Next decision Oct 28, 2026.",
    facts:[],
    aux:[],
    src:[{t:"BLS — Consumer Price Index, August 2026", u:"https://www.bls.gov/news.release/PDF/cpi.PDF"},{t:"Federal Reserve — FOMC statement, Sep 16 2026", u:"https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm"},{t:"Federal Reserve — FOMC meeting calendars", u:"https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"},{t:"BLS Monthly Labor Review — One hundred years of price change (CPI history since 1913)", u:"https://www.bls.gov/opub/mlr/2014/article/one-hundred-years-of-price-change-the-consumer-price-index-and-the-american-inflation-experience.htm"}]
  }
];
export function volatilityTag(){
  var v = now.vixRow.meter.value;
  return v < VIX_CALM ? { text:"Calm", state:"good" }
       : v <= VIX_FEAR ? { text:"Elevated", state:"warning" }
                       : { text:"Fearful", state:"critical" };
}
export function fearCurve(){
  var near = now.vixRow && now.vixRow.meter && now.vixRow.meter.value;
  if (typeof near !== "number" || typeof now.vix3mClose !== "number" || !(now.vix3mClose > 0)) return null;
  return Math.round((near / now.vix3mClose) * 1000) / 1000;
}
export function curveVerdict(r){
  return r == null   ? { text:"No reading", state:"norm" }
       : r >= 1      ? { text:"Inverted",   state:"serious" }
                     : { text:"Normal",     state:"good" };
}
export function valuationVerdict(v){
  var r = v / CAPE_FAIR;
  return r < 0.75 ? { text:"Highly undervalued", state:"warning" }
       : r < 0.95 ? { text:"Undervalued",        state:"good" }
       : r < 1.15 ? { text:"Fairly valued",      state:"good" }
       : r < 1.60 ? { text:"Overvalued",         state:"warning" }
                  : { text:"Highly overvalued",  state:"serious" };
}
export var tempCaptionFull = "", tempLeadShown = "";
var PRESSURE_ZONES = [
  { key:"inverted", label:"Inverted", from:-2,  to:0 },
  { key:"normal",   label:"Normal",   from:0,   to:2.5 },
  { key:"steep",    label:"Steep",    from:2.5, to:4 }
];
export function pressureZone(v){
  for (var i = 0; i < PRESSURE_ZONES.length; i++){
    if (v < PRESSURE_ZONES[i].to || i === PRESSURE_ZONES.length - 1) return PRESSURE_ZONES[i];
  }
  return PRESSURE_ZONES[PRESSURE_ZONES.length - 1];
}
var HZN_BACK = 4;
function hznLast(a){ for (var i = a.length - 1; i >= 0; i--) if (a[i].v != null && !a[i].partial) return { i:i, v:a[i].v }; return null; }
function hznRecord(a){
  var vs = a.filter(function(d){ return d.v != null; }).map(function(d){ return d.v; });
  return { min:Math.min.apply(null, vs), max:Math.max.apply(null, vs) };
}
function hznBack(a, from, back){ for (var i = from - back; i >= 0; i--) if (a[i].v != null) return a[i].v; return null; }
function horizonWord(sp, dLong, dShort, dSpread){
  if (sp < -0.10) return { word:"Pessimistic", state:"critical" };
  if (sp <  0.25) return { word:"Undecided",   state:"warning" };
  if (dSpread <= 0.05) return { word:"Guarded", state:"warning" };
  return dLong >= -dShort ? { word:"Optimistic", state:"good" } : { word:"Hopeful", state:"good" };
}
export function horizonInfoHtml(pick){
  var m = HZN_METERS[pick], shortLeg = pick === "2y" ? "2-year" : "3-month";
  return '<h4>10-year minus ' + shortLeg + '</h4>' +
    '<p class="caption">What the long end of the curve pays over the short end, in percentage points. It is a ' +
      'forecast rather than a measurement: the long rate is the market’s own average of where it expects the ' +
      'short rate to be for the next ten years, so a curve that slopes down is a market expecting cuts, and a ' +
      'market expecting cuts is a market expecting trouble. The ends of the track are this series’ quarterly ' +
      'record, ' + m.min.toFixed(2) + ' and +' + m.max.toFixed(2) + ' points; the deepest single DAY of the ' +
      'last inversion was −1.89, in May 2023, below the quarterly low because a quarter is an average.</p>' +
    '<p class="caption" style="margin-top:10px;"><b>The line at zero is definitional, not drawn</b> — it is ' +
      'where an upward-sloping curve becomes an inverted one, and it is the threshold the New York Fed’s own ' +
      'recession model is built on, using this exact pair of maturities. That model’s FAQ states that an ' +
      'inversion has preceded every U.S. recession on record since 1960, with a single false signal in 1967. ' +
      'The band is one-sided because a steeper curve is not a worse one: there is nothing to flag above zero.</p>' +
    '<p class="caption" style="margin-top:10px;">Read the caution with the signal, because it is the same ' +
      'source’s. The New York Fed is explicit that it is the <b>level</b> of the spread that forecasts, not the ' +
      'crossing — in two episodes in the 1990s the spread fell to 42 and then 12 basis points without ever ' +
      'inverting, and nothing followed. A reading just above zero is not the all-clear the colour suggests, ' +
      'which is why the word this page gives a spread under 0.25 is <b>Undecided</b>.</p>' +
    String(ui.spreadDetail || "").replace(/^\s*<h4>[\s\S]*?<\/h4>/, "");
}
var RISK_REWARD = [
  { key:"low",  label:"Low",      at:function(v){ return v < 4; } },
  { key:"mod",  label:"Moderate", at:function(v){ return v >= 4 && v <= 10; } },
  { key:"high", label:"High",     at:function(v){ return v > 10; } }
];
var RISK_RISK = [
  { key:"low",  label:"Low",      at:function(v){ return v < 20; } },
  { key:"mod",  label:"Moderate", at:function(v){ return v >= 20 && v <= 30; } },
  { key:"high", label:"High",     at:function(v){ return v > 30; } }
];
function riskCell(bands, v){ var i = 0; bands.forEach(function(b, k){ if (b.at(v)) i = k; }); return i; }
export function riskMatrixBlock(oas, cape){
  var wi = riskCell(RISK_REWARD, oas), ri = riskCell(RISK_RISK, cape);
  var ylabs = [], cells = [];
  for (var r = RISK_RISK.length - 1; r >= 0; r--){
    ylabs.push('<span class="rm-y' + (r === ri ? " on" : "") + '">' + RISK_RISK[r].label + '</span>');
    for (var c = 0; c < RISK_REWARD.length; c++){
      var here = (r === ri && c === wi);
      cells.push('<span class="rm-c s' + (r + (RISK_REWARD.length - 1 - c)) + (here ? " here" : "") + '" title="' +
        RISK_RISK[r].label + ' risk · ' + RISK_REWARD[c].label + ' reward">' +
        (here ? '<i class="rm-mark"></i>' : "") + '</span>');
    }
  }
  var xlabs = RISK_REWARD.map(function(b, i){
    return '<span class="rm-x' + (i === wi ? " on" : "") + '">' + b.label + '</span>';
  }).join("");
  return '<div class="page-chart riskmx">' +
    '<div class="spread-history-head"><h4>Risk / Reward</h4>' + expandBtn(riskMatrixNote) + '</div>' +
    '<div class="rm-frame"><span class="rm-axis rm-axis-y">Risk</span>' +
      '<div class="rm-grid">' +
        '<div class="rm-ylabs">' + ylabs.join("") + '</div>' +
        '<div class="rm-cells">' + cells.join("") + '</div>' +
        '<span></span><div class="rm-xlabs">' + xlabs + '</div>' +
      '</div></div>' +
    '<div class="rm-axis rm-axis-x">Reward</div>' +
    '<p class="pt-note"><b>' + RISK_RISK[ri].label + ' risk</b> (CAPE ' + cape.toFixed(1) + '×) · ' +
      '<b>' + RISK_REWARD[wi].label + ' reward</b> (' + oas.toFixed(2) + '% spread). ' +
      'Risk: CAPE under 20 / 20–30 / over 30. Reward: spread under 4% / 4–10% / over 10%. ' +
      'The grid places the two readings against each other. It does not forecast.</p>' +
  '</div>';
}
var riskMatrixNote =
  '<h4>Risk / Reward</h4>' +
  '<p class="caption">Two readings already on this board, placed against each other because neither answers the ' +
    'other’s question alone. <b>Risk</b> is CAPE, from the Valuations page — how much price sits on a decade of ' +
    'earnings, and so how much there is to give back. <b>Reward</b> is the extra yield demanded to hold junk ' +
    'debt — Desire’s own figure, read forwards: a wide spread is a lot of compensation for the risk, a tight ' +
    'one is very little. This is the same figure the card above tags as high appetite, seen from the other ' +
    'side: <b>high appetite is what a low-reward market looks like from the inside.</b></p>' +
  '<p class="caption" style="margin-top:10px;">How to read it. The two readings are placed against each ' +
    'other rather than divided into a single figure, so what you get is a position on two axes rather than one ' +
    'number. It is also not <b>Value at Risk</b>, which is a different and far more precise measure — the loss ' +
    'not exceeded with a stated probability over a stated horizon. This grid has no distribution, no ' +
    'confidence level and no horizon.</p>' +
  '<p class="caption" style="margin-top:10px;">The bands. A spread under 4% is the euphoric zone (the record ' +
    'low is 2.41%, June 2007), over 10% the distressed one (the record high 21.82%, December 2008), and ' +
    'between them is ordinary. CAPE’s 20 and 30 are round numbers sitting close to the terciles of this ' +
    'app’s own 1970–2026 history (16.9 and 26.5); they split those fifty-seven years twenty-four, ' +
    'twenty-one and twelve.</p>' +
  '<p class="caption" style="margin-top:10px;">No cell carries a rating. The wash deepens toward high risk and ' +
    'low reward because being paid least when there is most to lose is arithmetic about two readings — a ' +
    'description of where you are standing, not a claim about what happens next. The honest way to say more ' +
    'would be to shade each cell by what followed historically, as the un-inversion panel on the Pressure page ' +
    'does; that needs a long spread history, and FRED now serves this series on a rolling three-year window, ' +
    'so the past years cannot be binned.</p>';
function pulseBlock(rate, ref, ind){
  var slower = Math.round((1 - rate / ref) * 100);
  var title = ind
    ? '<div class="spread-history-head"><h4>' + ind.econTerm + '</h4>' +
      '<span class="tag ' + ind.tag.state + '">' + ind.tag.text + '</span></div>'
    : "";
  return velocityRecordBlock(ind) + '<div class="page-chart pulsebox"><div class="pulsetrace">' + title +
    '<div class="pt-head"><span class="pt-k">Now</span><span class="pt-v mono">' + rate.toFixed(2) + '× a year</span></div>' +
    pulseTraceSvg(rate, null, 520, 34, 11, "solo") +
    '<div class="pt-head past"><span class="pt-k">Her pre-2008 pace</span><span class="pt-v mono">' + ref.toFixed(2) + '× a year</span></div>' +
    pulseTraceSvg(ref, null, 520, 34, 11, "solo past") +
    '<p class="pt-note">One beat is one turnover of the same dollar, and both traces run the same ' + PULSE_WINDOW +
    ' years — so the gap you can see is the gap in the number. She turns her money over about ' + slower +
    '% less often than she did across 1959–2007.</p>' +
  '</div></div>';
}
function householdsWord(bill, kept){
  var heavy = bill > DSR_MEAN;
  if (kept < 3)   return { word:heavy ? "Overstretched" : "Stretched",  state:"serious" };
  if (kept < 4.5) return { word:heavy ? "Stretched"     : "Thin cover", state:"warning" };
  if (kept < 7)   return { word:heavy ? "Thin cover"    : "Covered",    state:"good" };
  return                 { word:heavy ? "Covered" : "Well covered",     state:"good" };
}
export function dsrInfoHtml(){
  return '<h4>Debt service</h4>' +
    '<p class="caption">What households pay each quarter in required payments on mortgages and consumer debt, ' +
      'as a share of disposable income (' + qAtIndex(DSR_FROM_YEAR, dsrHistory.length - 1) + '). The ends of the ' +
      'track are the record: 15.8% in 2007 Q4, at the top of the housing boom, and 9.1% in 2020 Q2, when ' +
      'payments were being deferred and incomes were being topped up at once.</p>' +
    '<p class="caption" style="margin-top:10px;">The line is <b>this series\u2019 own average since ' + DSR_FROM_YEAR +
      ', ' + DSR_MEAN.toFixed(1) + '%</b> \u2014 and it is the same line this page\u2019s verdict already used, rather ' +
      'than a second opinion drawn beside it. It is one-sided on purpose: a light debt bill is not a condition ' +
      'to flag, and what the reading answers is how far ABOVE the average the burden sits. Today it is below, ' +
      'about a third off the 2007 peak, and has been flat for two years.</p>' +
    '<p class="caption" style="margin-top:10px;">Read it with the cushion below, never alone. The bill is the ' +
      'lighter half of this page\u2019s story; the thin part is what is left over.</p>' +
    srcBlock([
      {t:"Federal Reserve via FRED \u2014 Household Debt Service Payments as a Percent of Disposable Personal Income (TDSP)", u:"https://fred.stlouisfed.org/series/TDSP"}
    ]);
}
export function savInfoHtml(){
  return '<h4>Saving rate</h4>' +
    '<p class="caption">What is left after households have spent and paid tax, as a share of disposable ' +
      'income. The ends of the track are the record: 1.8% and 24.4% \u2014 the second of those is 2020, when the ' +
      'stimulus payments arrived and there was nothing open to spend them in.</p>' +
    '<p class="caption" style="margin-top:10px;"><b>The 4.5\u201312.2% band is computed rather than chosen</b>: the ' +
      'tenth to ninetieth percentile of the 318 quarters since 1947, a record long enough to have held every ' +
      'kind of decade. Today\u2019s ' + savNow.toFixed(1) + '% sits <b>below</b> it \u2014 only ' +
      savHistory.filter(function(v, i){ return v <= savNow && i < savHistory.length - 1; }).length +
      ' of those quarters have been lower, and a run of them came between 2005 and early 2008.</p>' +
    '<p class="caption" style="margin-top:10px;">This is the reading that sets the page\u2019s word, and the bill ' +
      'above can only make it worse, never better: a household with a cushion can carry a heavy bill, and one ' +
      'without cannot carry a light one.</p>' +
    srcBlock([
      {t:"BEA via FRED \u2014 Personal Saving Rate (PSAVERT)", u:"https://fred.stlouisfed.org/series/PSAVERT"}
    ]);
}
export function vixPct(v){
  var m = now.vixRow.meter;
  return v == null ? 0 : Math.max(0, Math.min(100, 100 * Math.log(v / m.min) / Math.log(m.max / m.min)));
}
export function volatilityRing(){
  var m = now.vixRow.meter;
  return vitalRingSvg(vixPct(m.value), "accent", "VIX at " + m.value.toFixed(2) + ", between its record low of " +
    m.min + " and its record high of " + m.max);
}
export function volatilityDetailHtml(){
  var m = now.vixRow.meter;
  return '<h4>Volatility</h4><div class="marker-sub">' + curveSub + '</div>' + facts([
    'The <b>VIX</b> is Cboe\u2019s volatility index: what options traders pay to insure the S&amp;P 500 against a fall ' +
      'over the next thirty days, as an annual rate.',
    'It climbs when the market is frightened and sinks when it is calm, so it reads contrarian: panic gathers near ' +
      'bottoms, complacency near tops.',
    'The chart is the <b>monthly average of daily closes</b>. Before ' + monthLabel(VOL_JOIN) + ' it is the <b>VXO</b>, ' +
      'Cboe\u2019s original VIX, computed on the S&amp;P 100; the VIX takes over from its first month.',
    'By market convention a VIX <b>below ' + VIX_CALM + '</b> reads calm, <b>' + VIX_CALM + ' to ' + VIX_FEAR + '</b> elevated, ' +
      'and <b>above ' + VIX_FEAR + '</b> fearful; the chart hangs from ' + VIX_CALM + '. The lines are the convention\u2019s, not ours.',
    'Daily record on the VIX since 1990: <b>' + m.min + '</b> low, <b>' + m.max + '</b> high.'
  ]) + srcBlock(now.sentiment.src.concat(VIX_CONVENTION));
}
export function marketWord(v){
  if (v >= 0) return { state:"good", text:"Bull year", says:"a positive total return, which the dial draws as a bull year" };
  return { state:"serious", text:"Bear year", says:"a negative total return, which the dial draws as a bear year" };
}
export function marketCol(v){ return "dv-bar " + (v >= 0 ? "over" : "under"); }
function marketInfoHtml(f){
  return '<h4>' + f.econTerm + '</h4>' +
    '<p class="caption">The reading is <b>' + f.tag.text + '</b>: ' + f.metric + ' in ' + f.now.y + (f.open ? ' so far' : '') + ', ' + f.wordSays + '. ' +
      'The record, year by year, runs ' + f.span + '.</p>' +
    '<p class="caption" style="margin-top:10px;"><b>The zero line is the definition, not a band</b>: a year the index ends higher, ' +
      'dividends included, is a bull year and one it ends lower is a bear year. These are the same years the dial\u2019s inner band ' +
      'colours, so the card, this chart and the cycle read one number.' + (f.open ? ' ' + f.now.y + ' is still open, so its bar is the year so far.' : '') + '</p>' +
    srcBlock(sp500AnnualReturnSource);
}
export function rowReadings(){ return coincident.concat(lagging, [productivityReading, confidenceReading, marketReading]); }
export function indOf(R){ return rowReadings().filter(function(x){ return x.bodyTerm === R.term; })[0]; }
function policyFacts(){ return [
  { label:"Fed funds target",  value:fedFundsRange() },
  now.fedFunds.lastMove ? { label:"Last Fed move", value:now.fedFunds.lastMove + " on " + now.fedFunds.asOf.replace(/,\s*\d{4}$/, "") +
                                      (now.fedFunds.vote ? " \u00b7 " + now.fedFunds.vote : ""), wordy:true } : null,
  { label:"First hike since",  value:"2023 \u00b7 one more signalled",  wordy:true },
  now.fedFunds.next ? { label:"Next decision", value:now.fedFunds.next } : null
].filter(Boolean); }
export function policyFactRows(){
  return policyFacts().map(function(f){
    return '<div class="aux-stat' + (f.wordy ? " wordy" : "") + '"><span>' + f.label + '</span><b>' +
           f.value + '</b></div>';
  }).join("");
}
var GROWTH_SHOWN = { expansion:"expanding", contraction:"contracting", steady:"steady" };
function growthShown(reg){ return GROWTH_SHOWN[reg] || reg; }
export function growthShownCap(reg){ var w = growthShown(reg); return w.charAt(0).toUpperCase() + w.slice(1); }
export function phaseClass(regime){ return regime === "contraction" ? "phase-down" : "phase-up"; }
function activityStackHtml(ind){
  histNote("sheet-sign-activity", activityInfoHtml(ind));
  return histBar("", "act-rangebar") +
    '<div class="page-chart">' +
      histHead("sheet-sign-activity") +
      '<div id="act-history" class="vh-host"></div>' +
      histTip("act-hist-tooltip") +
      '<div id="act-trend"></div>' +
    '</div>';
}
function seatTemperature(ind, d){
  HIST_NOTE["sheet-metric-temp"] = temperatureInfoHtml(ind);
  tempCaptionFull = ind.caption;
  tempLeadShown = ind.lead || ind.shortCaption || "";
  var sheet = byId("sheet-metric-temp"), fresh = d.querySelector(".sign-detail");
  var prev = sheet.querySelector(":scope > .sign-detail");
  if (prev) sheet.replaceChild(fresh, prev); else sheet.appendChild(fresh);
}
export var DATED_UNIT = /^(.*?),\s*((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[^,]*|Q[1-4]\s+\d{4})$/;
export function indPeriod(R){
  var ind = indOf(R), m = ind && DATED_UNIT.exec(String(ind.metricSub || "").trim());
  return m ? m[2] : "";
}


export var productivityReading, confidenceRecord, confidenceReading, tempInfo, horizonRead, householdsNow, marketReading;
var productivityRecord, gdpNowQ, HZN_METERS, curveSub;

export function bootReadings(){
  /* ---- Productivity growth is not in this panel ---- */
  productivityRecord = (function(){
    var h = productivityHistory;
    return { now:h[h.length - 1], lo:h.reduce(function(a, d){ return d.v < a.v ? d : a; }),
             hi:h.reduce(function(a, d){ return d.v > a.v ? d : a; }) };
  })();
  productivityReading = (function(R){
    var word = productivityWord(R.now.v);
    var at = qPretty(R.now.q), span = fmtSigned(R.lo.v, 1) + "% (" + qPretty(R.lo.q) + ") to " + fmtSigned(R.hi.v, 1) + "% (" + qPretty(R.hi.q) + ")";
    return {
      bodyTerm:"Productivity growth", info:function(){ return productivityInfoHtml(productivityReading); },
      page:{ bare:true, chart:function(){ return '<div id="sheet-sign-productivity-growth-chart"></div><div id="sheet-sign-productivity-growth-highlights"></div>'; } },
      econTerm:"Productivity growth", metricSub:"nonfarm business output per hour, YoY, " + at,
      metric:R.now.v.toFixed(1) + "%", tag:{ state:word.state, text:word.text }, wordWhy:word.why,
      meter:{ min:R.lo.v, max:R.hi.v, value:R.now.v, optimal:{gte:PRODUCTIVITY_SLOWDOWN, label:"\u2265 " + PRODUCTIVITY_SLOWDOWN + "% YoY"},
              ends:{ low:"Falling" } },
      span:span,
      lead:"",
      caption:at + ", BLS output per hour vs. a year earlier, " + word.says + " — the reading that says whether capacity is being rebuilt rather than just borrowed against. The track runs over the quarterly record since 1948: " + span + "."
    };
  })(productivityRecord);
  confidenceRecord = (function(){
    var h = confidenceHistory;
    return { now:h[h.length - 1], lo:h.reduce(function(a, d){ return d.v < a.v ? d : a; }),
             hi:h.reduce(function(a, d){ return d.v > a.v ? d : a; }) };
  })();
  confidenceReading = (function(R){
    var word = confidenceWord(R.now.v), at = monthLabel(R.now.m);
    var span = R.lo.v.toFixed(1) + " (" + monthLabel(R.lo.m) + ") to " + R.hi.v.toFixed(1) + " (" + monthLabel(R.hi.m) + ")";
    return {
      bodyTerm:"Confidence", info:function(){ return confidenceInfoHtml(confidenceReading); },
      page:{ bare:true, chart:function(){ return '<div id="sheet-sign-confidence-chart"></div><div id="sheet-sign-confidence-highlights"></div>'; } },
      econTerm:"Confidence", metricSub:"OECD index, United States, " + at,
      metric:R.now.v.toFixed(1), tag:{ state:word.state, text:word.text }, wordSays:word.says,
      meter:{ min:R.lo.v, max:R.hi.v, value:R.now.v, optimal:{gte:CONFIDENCE_LINE, label:"\u2265 100"}, ends:{ low:"Pessimistic" } },
      span:span,
      get peek(){
        return colPeek(confidenceHistory.map(function(d){ return d.v - CONFIDENCE_LINE; }), function(v){ return "dv-bar " + (v > 0 ? "over" : "under"); }, 0, true);
      },
      lead:"",
      caption:at + ", the OECD\u2019s consumer confidence index for the United States at " + R.now.v.toFixed(1) + ", " + word.says +
        ". The track runs over the monthly record since " + monthLabel(confidenceHistory[0].m) + ": " + span + "."
    };
  })(confidenceRecord);
  now.valuation.tag = valuationVerdict(valRow("cape").meter.value);
  liveInto("capeValue");
  coincident = LIVE("coincident", coincident);
  liveInto("hyOasNow");
  GYN.step("deriveVolumeTag", deriveVolumeTag, "derive");
  deriveVolumeTag();
  gdpNowQ = gdpQuarterlyYoY[gdpQuarterlyYoY.length - 1];
  GYN.step("derivePulseTag", derivePulseTag, "derive");
  derivePulseTag();
  // ---- Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring ----
  tempInfo = '<h4>Temperature</h4>' +
    ledeHtml("Her basal temperature: CPI against the 2% the Fed aims at, month by month through this cycle.") +
    facts([
      '<b>Hot above the band, warm inside it, cold below</b> \u2014 red, teal, blue.',
      'The Fed\u2019s goal is a single point, 2% on the PCE index. The <b>1\u20133% band</b> is this board\u2019s own tolerance around it, drawn on CPI because that is the series most readers know.',
      'One of the two readings a season is computed from: the level, and the direction of the last twelve months.',
      'It confirms heat that has already built rather than predicting it.'
    ]);
  now.vix3mClose = LIVE("vix3mClose", 17.61);
  horizonRead = (function(){
    var pick = function(m){ var h = now.yieldCurve.filter(function(d){ return d.m === m; })[0]; return h ? h.y : null; };
    var sp = pick("10Y") - pick("3M");
    var sN = hznLast(t10y3mHistory), lN = hznLast(t10yYieldHistory), tN = hznLast(t3mYieldHistory);
    var tN2 = hznLast(t10y2yHistory);
    var dSpread = sN.v - hznBack(t10y3mHistory, sN.i, HZN_BACK);
    var dLong   = lN.v - hznBack(t10yYieldHistory, lN.i, HZN_BACK);
    var dShort  = tN.v - hznBack(t3mYieldHistory, tN.i, HZN_BACK);
    var w = horizonWord(sp, dLong, dShort, dSpread);
    return { spread:sp, q:sN, q2:tN2, dSpread:dSpread, dLong:dLong, dShort:dShort,
             was:hznBack(t10y3mHistory, sN.i, HZN_BACK), was2:hznBack(t10y2yHistory, tN2.i, HZN_BACK),
             d2:tN2.v - hznBack(t10y2yHistory, tN2.i, HZN_BACK),
             word:w.word, state:w.state };
  })();
  HZN_METERS = {
    "3m": { min:hznRecord(t10y3mHistory).min, max:hznRecord(t10y3mHistory).max, value:horizonRead.spread,
            optimal:{ gte:0, label:"0 and above" }, ends:{ low:"Inverted" } },
    "2y": { min:hznRecord(t10y2yHistory).min, max:hznRecord(t10y2yHistory).max,
            value:(function(){ var p = function(m){ var h = now.yieldCurve.filter(function(d){ return d.m === m; })[0]; return h ? h.y : 0; };
                               return p("10Y") - p("2Y"); })(),
            optimal:{ gte:0, label:"0 and above" }, ends:{ low:"Inverted" } }
  };
  householdsNow = householdsWord(dsrNow, savNow);
  curveSub = "Cboe, " + now.vixRow.sub;
  marketReading = (function(h){
    var now = h[h.length - 1], word = marketWord(now.v), open = now.y === calendarTodayY;
    var lo = h.reduce(function(a, d){ return d.v < a.v ? d : a; }), hi = h.reduce(function(a, d){ return d.v > a.v ? d : a; });
    var span = fmtSigned(lo.v, 1) + "% (" + lo.y + ") to " + fmtSigned(hi.v, 1) + "% (" + hi.y + ")";
    return {
      bodyTerm:"S&P 500", info:function(){ return marketInfoHtml(marketReading); },
      page:{ bare:true, chart:function(){ return '<div id="sheet-sign-market-chart"></div><div id="sheet-sign-market-highlights"></div>'; } },
      econTerm:"S&P 500", metricSub:"total return", now:now, lo:lo, hi:hi, open:open,
      metric:fmtSigned(now.v, 1) + "%", tag:{ state:word.state, text:word.text }, wordSays:word.says,
      meter:{ min:lo.v, max:hi.v, value:now.v, optimal:{ gte:0, label:"\u2265 0%" }, ends:{ low:"Bear year" } },
      span:span,
      get peek(){
        return colPeek(sp500Years.map(function(d){ return d.v; }), marketCol, 0, true);
      },
      lead:"",
      caption:now.y + (open ? " so far" : "") + ", the S&P 500 at " + fmtSigned(now.v, 1) + "% with dividends, " + word.says +
        ". The track runs over every year since " + h[0].y + ": " + span + "."
    };
  })(sp500Years);
}
function isNum(x){ return typeof x === "number" && isFinite(x); }
function rowsOk(rows){
  return Array.isArray(rows) && rows.length > 0 && rows.every(function(r){ return r && typeof r === "object" && (!r.meter || isNum(r.meter.value)); });
}
export function desireRow(){ return coincident.filter(function(c){ return c.bodyTerm === "Desire"; })[0]; }
export function bootReadingRegistry(){
  /* ---- THE READING REGISTRY ---- */
  defineReadings({
    fedFunds: {
      kind: "object",
      ok: function(v){ return isNum(v.lo) && isNum(v.hi) && v.lo >= 0 && v.lo <= v.hi && v.hi <= 25; },
      set: function(v){
        if (!v.lastMove && (v.lo !== now.fedFunds.lo || v.hi !== now.fedFunds.hi)) v = merge(v, { lastMove:"", lastMoveLabel:"", asOf:"" });
        if (v.asOf !== undefined && v.asOf !== now.fedFunds.asOf && !v.vote) v = merge(v, { vote:"" });
        now.fedFunds = merge(now.fedFunds, v);
      }
    },
    yieldCurve: {
      kind: "series",
      ok: function(v){ return v.every(function(r){ return r && typeof r.m === "string" && (r.y === null || isNum(r.y)); }); },
      set: function(v){ now.yieldCurve = v; }
    },
    sentiment:  {
      kind: "object",
      ok: function(v){ return v.rows === undefined || rowsOk(v.rows); },
      set: function(v){ now.sentiment = merge(now.sentiment, v); now.vixRow = now.sentiment.rows[0]; }, onOpen: true
    },
    valuation:  {
      kind: "object",
      ok: function(v){ return v.rows === undefined || rowsOk(v.rows); },
      set: function(v){
        now.valuation = merge(now.valuation, v);
        if (valRow("cape")) now.valuation.tag = valuationVerdict(valRow("cape").meter.value);
      }
    },
    coincident: {
      kind: "series",
      ok: rowsOk,
      set: function(v){ coincident = v; deriveVolumeTag(); derivePulseTag(); },
      onOpen: true
    },
    vixClose: {
      kind: "scalar", band: [5, 100],
      set: function(v){
        var row = now.sentiment.rows[0];
        row.meter.value = v;
        row.flagValue = v.toFixed(1);
        if (liveAsOf.vixClose) row.sub = liveAsOf.vixClose;
      }
    },
    vix3mClose: { kind: "scalar", band: [5, 100], set: function(v){ now.vix3mClose = v; }, onOpen: true },
    hyOasNow: {
      kind: "scalar", band: [1, 30],
      set: function(v){
        var row = desireRow();
        row.meter.value = v;
        row.metric = v.toFixed(2) + "%";
        if (liveAsOf.hyOasNow) row.metricSub = "high-yield OAS, " + liveAsOf.hyOasNow;
      }
    },
    capeValue: {
      kind: "scalar", band: [4, 60],
      set: function(v){
        var row = valRow("cape");
        row.meter.value = v;
        row.flagValue = v.toFixed(1) + String(row.flagValue || "").replace(/^[\d.,\s-]+/, "");
        if (liveAsOf.capeValue) row.sub = liveAsOf.capeValue;
        now.valuation.tag = valuationVerdict(v);
      }
    }
  });
  now.fedFunds = LIVE("fedFunds", now.fedFunds);
}
