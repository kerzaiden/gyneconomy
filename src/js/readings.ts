import { auxStat, bandEnds, facts, fmtSigned, ledeHtml, metered, monthLabel, MONTHS_SHORT, qAtIndex, qPretty, srcBlock, tagFor, titleCase } from "./format.ts";
import { need, ui } from "./dom.ts";
import { defineReadings, GYN, liveAsOf, liveInto, merge } from "./live.ts";
import { colPeek, histBar, histTip, PULSE_WINDOW, pulseTraceSvg, vitalRingSvg } from "./charts.ts";
import { confidenceHistory, durablesHistory, premiumHistory, productivityHistory } from "./history-fred.ts";
import { calendarTodayY, inflationHistory, gdpQuarterlyYoY } from "./refresh-season.ts";
import { ACT_BAND_HI, ACT_BAND_LO, FED_TARGET_SRC, PCE_SRC, PCE_SWITCH_SRC, capeAsOf, CAPE_FAIR, CONFIDENCE_LINE, CONFIDENCE_SRC, curveAsOf, curveSpread, DEF_FROM_YEAR, DEF_MEAN, deficitHistory, deriveUninvLag, DESIRE_LINE, DESIRE_SRC, PREMIUM_LINE, PREMIUM_SRC, DSR_FROM_YEAR, DSR_MEAN, dsrHistory, dsrNow, fedFundsRange, fileRow, GDP_NORM, labRow, M2_PACE_HI, M2_PACE_LO, now, PRODUCTIVITY_SLOWDOWN, PRODUCTIVITY_SRC, PRODUCTIVITY_TREND, PULSE_PRE2008, PULSE_STEADY_HI, PULSE_STEADY_LO, savHistory, savNow, sp500AnnualReturnSource, sp500Years, t10y2yHistory, t10y3mHistory, t10yYieldHistory, t3mYieldHistory, TEMP_BAND_HI, TEMP_BAND_LO, unempHistory, valRow, VIX_CALM, VIX_CONVENTION, VIX_FEAR, VOL_JOIN, M2_FLOOD, PULSE_FLOOR, PULSE_CEIL, SAHM_TRIGGER, unempSahm, sahmOf, SAV_THIN, SAV_LOW, SAV_MID } from "./data.ts";
import { cpiNow, growthWord } from "./model.ts";
import { HIST_NOTE, histHead, histNote } from "./history.ts";

export type SeriesRecord<P> = { now: P; lo: P; hi: P };
type WordReading = Indicator & { tag: Tag; info: () => string; span: string; lead: string; caption: string; page: IndicatorPage };
export type ProductivityReading = WordReading & { wordWhy: string };
export type ConfidenceReading = WordReading & { wordSays: string };
export type DesireReading = WordReading & { wordSays: string };
export type PremiumReading = WordReading & { side: string };
export type MarketReading = WordReading & { wordSays: string; now: YearPoint; lo: YearPoint; hi: YearPoint; open: boolean };
type HznPoint = { v: number | null; partial?: boolean };
type HznAt = { i: number; v: number };
export type HorizonRead = { spread: number; q: HznAt; q2: HznAt; dSpread: number; dLong: number; dShort: number; was: number | null; was2: number | null; d2: number; word: string; state: State };
type WordOf = { state: State; text: string; says: string; why?: string };

function productivityWord(v: number): WordOf & { why: string } {
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
function confidenceWord(v: number): WordOf {
  if (v >= CONFIDENCE_LINE) return { state:"good", text:"Confident",
    says:"above the OECD\u2019s long-term average of 100, the side on which households lean towards spending on major purchases" };
  return { state:"warning", text:"Pessimistic",
    says:"below the OECD\u2019s long-term average of 100, the side on which households lean towards saving more and spending less" };
}
function desireWord(v: number): WordOf {
  if (v >= DESIRE_LINE) return { state:"good", text:"High appetite",
    says:"above zero: households are buying more of what they could put off than they were a year earlier" };
  return { state:"warning", text:"Low appetite",
    says:"below zero: households are buying less of what they could put off than they were a year earlier" };
}
export function deficitBlock(){
  var iSur = -1, i;
  for (i = deficitHistory.length - 1; i >= 0; i--) if (deficitHistory[i] > 0){ iSur = i; break; }
  var lastY = DEF_FROM_YEAR + deficitHistory.length - 1;
  var surCount = deficitHistory.filter(function(v){ return v > 0; }).length;
  var defRow = labRow("sheet-marker-deficit");
  var note = '<h4>Federal Budget Deficit or Surplus</h4>' +
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
export var coincident: Indicator[] = [
  {
    bodyTerm:"Pulse", econTerm:"Money velocity",
    page:{ bare:true, noHead:true, chartFirst:true, peeked:true,
           chart:function(ind){ return pulseBlock(metered(ind.meter), PULSE_PRE2008, ind); } },
    tag:{text:"Recovering", state:"warning"},
    metric:"1.42×", metricSub:"M2 velocity, Q2 2026",
    meter:{min:1.126, max:2.192, value:1.415, optimal:{from:PULSE_PRE2008 * PULSE_STEADY_LO, to:PULSE_PRE2008 * PULSE_STEADY_HI,
           label:(PULSE_PRE2008 * PULSE_STEADY_LO).toFixed(2) + "\u2013" + (PULSE_PRE2008 * PULSE_STEADY_HI).toFixed(2) + "\u00d7"},
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
    meter:{min:-4.64, max:25.61, value:5.66, optimal:{from:M2_PACE_LO, to:M2_PACE_HI, label:M2_PACE_LO + "\u2013" + M2_PACE_HI + "%"},
           ends:{ low:"Draining", zone:"Her pace", high:"Flooding" }},
    shortCaption:"Growing at her ordinary pace again, after the largest transfusion in the record and the only drain.",
    caption:"How much blood there is \u2014 the other half of the number Pulse measures. Nominal output is the money stock times its velocity, so Volume and Pulse are two halves of one reading and neither means much alone: a racing pulse on full volume is exercise, and the same pulse on falling volume is shock. Her volume grew 40% in the twenty-six months to April 2022, the largest transfusion in the record, while velocity fell to its all-time low \u2014 which is why prices stayed quiet far longer than the money alone implied, and why the fever arrived only when circulation picked up on top of the enlarged stock. Then the volume itself was drained: five quarters of year-over-year contraction from 2023 Q1, the only ones in sixty-seven years. Range: +25.6% (2021 Q1) to \u22124.6% (2023 Q2), against a 1960\u20132019 pace of 6.8%.",
    src:[{t:"Federal Reserve via FRED \u2014 M2 money stock, monthly since 1959 (M2SL)", u:"https://fred.stlouisfed.org/series/M2SL"}]
  }
];
function deriveVolumeTag(){
  var vol = coincident.filter(function(c){ return c.bodyTerm === "Volume"; })[0];
  if (vol) vol.tag = volumeVerdict(metered(vol.meter));
}
export function meterFlagged(m: Meter){
  var ends = bandEnds(m.optimal, -Infinity, Infinity);
  return m.value != null && (m.value < ends[0] || m.value > ends[1]);
}
function volumeInfoHtml(ind: Indicator){
  return '<h4>' + titleCase(ind.econTerm) + '</h4>' +
    '<p class="caption">The reading is <b>' + (ind.tag ? ind.tag.text : "") + '</b>. M2 is the money stock \u2014 ' +
      'cash, chequing and savings deposits, and retail money-market funds \u2014 read as the year-over-year change ' +
      '(' + ind.metricSub + ').</p>' +
    '<p class="caption follow"><b>Her pace is ' + M2_PACE_LO + '\u2013' + M2_PACE_HI + '%</b>, and that is a band computed from ' +
      'this page\u2019s own series rather than chosen: across the 240 quarters from 1960 to 2019, M2 grew 6.80% a ' +
      'year on average (median 6.70%), and the tenth to ninetieth percentile runs ' + M2_PACE_LO + '% to ' + M2_PACE_HI + '%. So roughly four ' +
      'quarters in five sat inside this band, and the two ends are what unusual looks like in each direction \u2014 ' +
      '<b>draining</b> below it, <b>flooding</b> above. The ends of the track are the record itself: \u22124.6% in ' +
      '2023 Q2, the only contraction in the series, and +25.6% in 2021 Q1.</p>' +
    '<p class="caption follow">Volume and Pulse are two halves of one number \u2014 nominal output ' +
      'is the money stock times its velocity \u2014 so neither means much read alone.</p>';
}
function pulseInfoHtml(ind: Indicator){
  return '<h4>' + titleCase(ind.econTerm) + '</h4>' +
    '<p class="caption">The reading is <b>' + (ind.tag ? ind.tag.text : "") + '</b>. Velocity is how many times ' +
      'the same dollar changes hands in a year, nominal GDP divided by M2 (' + ind.metricSub + '). The track\u2019s ' +
      'ends are the record: 1.126\u00d7 in 2020 Q2 and 2.192\u00d7 in 1997 Q3.</p>' +
    '<p class="caption follow"><b>The ' + (PULSE_PRE2008 * PULSE_STEADY_LO).toFixed(2) + '\u2013' + (PULSE_PRE2008 * PULSE_STEADY_HI).toFixed(2) + '\u00d7 band is the pre-2008 era\u2019s own middle</b>, not a ' +
      'target \u2014 the tenth to ninetieth percentile of the 196 quarters from 1959 Q1 to 2007 Q4, when velocity averaged ' + PULSE_PRE2008.toFixed(3) + '\u00d7 (median 1.808\u00d7) and ' +
      'ran between ' + (PULSE_PRE2008 * PULSE_FLOOR).toFixed(3) + '\u00d7 and ' + (PULSE_PRE2008 * PULSE_CEIL).toFixed(3) + '\u00d7. Beyond those two, the era\u2019s own extremes, the word is <b>very</b> slow or fast. It is labelled <b>Pre-2008</b> rather than normal for that reason: the ' +
      'collapse after 2008 may be the new ordinary, and calling the old range normal would beg that question.</p>' +
    '<p class="caption follow">The ends mean direction as well as level: <b>slow</b> is money ' +
      'sitting still, the signature of a stalled economy, and <b>fast</b> is money changing hands quickly, which ' +
      'is a busy economy and, past a point, an inflationary one.</p>';
}
function confidenceInfoHtml(f: ConfidenceReading){
  return '<h4>' + titleCase(f.econTerm) + '</h4>' +
    '<p class="caption">The reading is <b>' + f.tag.text + '</b>: ' + f.metric + ', ' + f.wordSays + ' (' + f.metricSub + '). ' +
      'The record, month by month, runs ' + f.span + '.</p>' +
    '<p class="caption follow"><b>The 100 line is the OECD\u2019s own</b>: the index is amplitude adjusted so that ' +
      '100 is its long-term average. In the OECD\u2019s words, a reading above 100 \u201csignals a boost in the consumers\u2019 confidence ' +
      'towards the future economic situation\u201d, with households \u201cless prone to save, and more inclined to spend money on major ' +
      'purchases in the next 12 months\u201d; below 100 indicates \u201ca pessimistic attitude towards future developments in the economy\u201d.</p>' +
    '<p class="caption follow">It is built from household surveys of their finances, the economy, unemployment and ' +
      'saving, and the OECD publishes it a few months after the month it describes, which is why the card\u2019s date trails the others.</p>' +
    srcBlock(CONFIDENCE_SRC);
}
function desireInfoHtml(f: DesireReading){
  return '<h4>' + titleCase(f.econTerm) + '</h4>' +
    '<p class="caption">The reading is <b>' + f.tag.text + '</b>: ' + f.metric + ', ' + f.wordSays + ' (' + f.metricSub + '). ' +
      'The record, month by month, runs ' + f.span + '.</p>' +
    '<p class="caption follow">Durable goods are the BEA\u2019s own category for goods that last three years or more: ' +
      'cars, furniture, appliances, electronics, recreational goods. They are the purchases a household can postpone, so their ' +
      'spending moves with appetite rather than need. The figure is real spending, adjusted for prices, against the same month a year earlier.</p>' +
    '<p class="caption follow"><b>Zero is the only line.</b> Above it she is buying more of what she could do without than a ' +
      'year ago; below it her appetite is low. No other band is drawn.</p>' +
    srcBlock(DESIRE_SRC);
}
function premiumInfoHtml(f: PremiumReading){
  return '<h4>' + titleCase(f.econTerm) + '</h4>' +
    '<p class="caption">' + f.metric + ' (' + f.metricSub + '): ' + f.side + '. ' +
      'The record, month by month, runs ' + f.span + '.</p>' +
    '<p class="caption follow">The equity risk premium is what stocks earn over safe bonds. This is Robert Shiller\u2019s ' +
      'Excess CAPE Yield: the CAPE\u2019s earnings yield (one over the CAPE, ten years of real earnings against today\u2019s price) less the ' +
      'real 10-year Treasury yield (the yield less the inflation of the ten years before). A thin premium is investors asking little ' +
      'for the risk of owning stocks; a wide one is investors asking a lot.</p>' +
    '<p class="caption follow"><b>Zero is the only line</b>, where stocks stop earning more than bonds. No other band is drawn, ' +
      'and the reading carries no word.</p>' +
    srcBlock(PREMIUM_SRC);
}
function productivityInfoHtml(f: ProductivityReading){
  return '<h4>' + titleCase(f.econTerm) + '</h4>' +
    '<p class="caption">The reading is <b>' + f.tag.text + '</b>. Output per hour worked in the nonfarm ' +
      'business sector, against the same quarter a year earlier (' + f.metricSub + '). The record for that ' +
      'series, quarter by quarter, runs ' + f.span + '.</p>' +
    '<p class="caption follow"><b>The 1.3% line is the BLS\u2019s own figure for the slowdown ' +
      'era</b> \u2014 since 2005 productivity has grown at an average of just 1.3% a year, against 2.1% a year ' +
      'across 1947\u20132018. So the band says something narrower than it looks: above the line is <i>better than ' +
      'the slowdown</i>, not <i>at trend</i>. Today\u2019s ' + f.metric + ' ' + f.wordWhy + '.</p>' +
    '<p class="caption follow">This is the reading that says whether capacity is being ' +
      'rebuilt or only borrowed against: an economy can grow by working more hours or by getting more from ' +
      'each one, and only the second kind compounds.</p>' +
    srcBlock(PRODUCTIVITY_SRC);
}
function activityInfoHtml(ind: Indicator){
  return '<h4>' + titleCase(ind.econTerm) + '</h4>' +
    '<p class="caption">The reading is <b>' + (ind.tag ? ind.tag.text : "") + '</b>. The figure is the ' +
      'headline unemployment rate (' + ind.metricSub + '). The ends of the track are the record: 2.5% in ' +
      'mid-1953 and, at the far end, the Census Bureau\u2019s 24.9% estimate for 1933.</p>' +
    '<p class="caption follow"><b>The ' + ACT_BAND_LO + '\u2013' + ACT_BAND_HI + '% band brackets the CBO\u2019s noncyclical rate of ' +
      'unemployment</b> \u2014 its estimate of the rate that remains once demand is neither too hot nor too cold, ' +
      'currently around 4.2%. Be clear about what is sourced and what is not: the CBO\u2019s number is published, ' +
      'the two edges are round figures set either side of it rather than a computed interval. There is no ' +
      'official normal range for unemployment, and this is the honest way to draw one.</p>' +
    '<p class="caption follow">The ends read the opposite way to most bars here: <b>tight</b> ' +
      'is a hot labour market with few people looking, <b>slack</b> is a cold one. And this reading confirms a ' +
      'phase rather than calling it \u2014 unemployment is the textbook lagging indicator, usually trailing a turn ' +
      'by two to three quarters.</p>' +
    srcBlock([
      {t:"CBO via FRED \u2014 Noncyclical Rate of Unemployment (NROU)", u:"https://fred.stlouisfed.org/series/NROU"},
      {t:"BLS via FRED \u2014 Unemployment rate, monthly since 1948 (UNRATE)", u:"https://fred.stlouisfed.org/series/UNRATE"}
    ]);
}
function bandMonths(){
  return inflationHistory.filter(function(d){ return d.v >= TEMP_BAND_LO && d.v <= TEMP_BAND_HI; }).length;
}
function temperatureInfoHtml(ind: Indicator){
  return '<h4>' + titleCase(ind.econTerm) + '</h4>' +
    '<p class="caption">The reading is <b>' + (ind.tag ? ind.tag.text : "") + '</b>. The figure is ' +
      'consumer prices, year over year (' + ind.metricSub + '). The ends of the track are the record, and they ' +
      'are further apart than a modern reader expects: −15.8% in 1921 and +23.7% in 1920, two years apart.</p>' +
    '<p class="caption follow"><b>1–3% is a target band, not a normal range</b> — the one ' +
      'band in this app that describes where prices <i>ought</i> to be rather than where they have been. The ' +
      'Fed publishes a point target of 2%, reaffirmed in the August 2025 revision of its Statement on ' +
      'Longer-Run Goals, and has done since January 2012. It does not publish a band. The point is the ' +
      'Fed’s; the two edges are set a point either side of it as part of the Season Model’s ' +
      'structure, not taken from a source. And the months inside it are not evidence that the band is normal — ' + bandMonths() + ' of the ' + inflationHistory.length + ' ' +
      'months this page can draw, since ' + inflationHistory[0].m.slice(0, 4) + ', have sat inside 1–3%, which is a fact about how often the Fed ' +
      'has hit its target rather than about where prices naturally sit. Widen the window and the band stops ' +
      'describing anything: the ends of this same track are −15.8% and +23.7%.</p>' +
    '<p class="caption follow">The needle is read on the gauge the Fed used in each era. Since ' +
      'January 2000 it is the <b>PCE</b> price index: the FOMC moved its inflation projections to it in its ' +
      'February 2000 Monetary Policy Report, and its 2% target is written on it. Before 2000 it is the ' +
      '<b>CPI</b>, the measure the Fed worked from then. The two are not the same index: the CPI covers only ' +
      'urban out-of-pocket spending, leans harder on shelter and reweights less often, so it usually runs a ' +
      'little higher.</p>' +
    '<p class="caption follow">The two ends are not mirror images. <b>Hot</b> erodes what ' +
      'money buys. <b>Cold</b> sounds like relief and is not: falling prices raise the real weight of every ' +
      'debt already owed and give every buyer a reason to wait, which is why a central bank aims above zero ' +
      'rather than at it.</p>' +
    srcBlock([
      FED_TARGET_SRC, PCE_SWITCH_SRC, PCE_SRC,
      {t:"Cleveland Fed — The CPI versus the PCE price index", u:"https://www.clevelandfed.org/collections/infographics/2024/infogr-20241205-cpi-versus-pce-price-index"},
      {t:"BLS Monthly Labor Review — One hundred years of price change", u:"https://www.bls.gov/opub/mlr/2014/article/one-hundred-years-of-price-change-the-consumer-price-index-and-the-american-inflation-experience.htm"}
    ]);
}
function volumeBlock(ind: Indicator){
  histNote("volume-range", volumeInfoHtml(ind));
  return histBar("", "volume-timeline") +
    '<div class="page-chart pulsebox">' +
    histHead("volume-range") +
    '<div id="m2-record" class="vh-host"></div>' +
    histTip("m2-hist-tooltip") +
    '<div id="volume-trend"></div>' +
    '</div>';
}
function velocityRecordBlock(pulseInd: Indicator | undefined){
  if (pulseInd) histNote("pulse-range", pulseInfoHtml(pulseInd));
  return histBar("", "pulse-timeline") +
    '<div class="page-chart pulsebox">' +
    histHead("pulse-range") +
    '<div id="pulse-record" class="vh-host"></div>' +
    histTip("pulse-hist-tooltip") +
    '<div id="pulse-trend"></div>' +
    '</div>';
}
export function volumeVerdict(g: number): Tag {
  return g < 0     ? { text:"Draining", state:"serious" }
       : g < M2_PACE_LO ? { text:"Thin",     state:"warning" }
       : g < M2_PACE_HI ? { text:"Steady",   state:"good" }
       : g <= M2_FLOOD ? { text:"Filling",  state:"warning" }
                   : { text:"Flooding", state:"serious" };
}
export function unempState(v: number, sahm: number | null){
  return v < ACT_BAND_LO ? "tight"
       : v <= ACT_BAND_HI ? "good"
       : sahm != null && sahm >= SAHM_TRIGGER ? "serious" : "warning";
}
export function sahmNow(){ for (var i = unempSahm.length - 1; i >= 0; i--) if (unempSahm[i] != null) return unempSahm[i]; return null; }
export function growthInfoHtml(){
  return '<h4>Real GDP Growth</h4>' +
    '<p class="caption">The figure is real gross domestic product against the same quarter a year earlier ' +
      '(' + gdpNowQ.q + '), so it is already adjusted for inflation \u2014 this is output, not prices. The ends of ' +
      'the track are the record and they are the same event twice: \u22127.4% in 2020 Q2, the deepest quarter of ' +
      'the pandemic shutdown, and +12.4% a year later, which is that collapse being measured against itself.</p>' +
    '<p class="caption follow"><b>The 1.0\u20134.3% band is computed from this page\u2019s own ' +
      'series, not chosen</b>: across the 154 quarters since 1988 the tenth and ninetieth percentiles fall at ' +
      '0.96% and 4.34%. So roughly four quarters in five have sat inside it, and each end is what unusual looks ' +
      'like in that direction. There is no official normal rate of growth to point at instead, which is why it ' +
      'is drawn this way and said so.</p>' +
    '<p class="caption follow">Two other lines matter more than the edges. The dashed line on ' +
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
function velocityVerdict(v: number): Tag {
  var r = v / PULSE_PRE2008;
  return r < PULSE_FLOOR ? { text:"Very slow", state:"serious" }
       : r < PULSE_STEADY_LO ? { text:"Slow",      state:"warning" }
       : r <= PULSE_STEADY_HI ? { text:"Steady",    state:"good" }
       : r <= PULSE_CEIL ? { text:"Fast",      state:"warning" }
                  : { text:"Very fast", state:"serious" };
}
export function laborWord(v: number): Tag {
  return v < ACT_BAND_LO ? { text:"Tight", state:"warning" } : { text: v <= ACT_BAND_HI ? "Solid" : "Slack", state: unempState(v, sahmNow()) };
}
export function temperatureWord(v: number): Tag {
  return v > TEMP_BAND_HI ? { text:"Running hot", state:"warning" }
       : v < TEMP_BAND_LO ? { text:"Running cold", state:"warning" }
                          : { text:"Warm", state:"good" };
}
function deriveLaggingTags(){
  var u = unempHistory.filter(function(d){ return d.v != null; }), c = inflationHistory[inflationHistory.length - 1];
  var act = lagging.filter(function(x){ return x.bodyTerm === "Activity"; })[0], temp = lagging.filter(function(x){ return x.bodyTerm === "Temperature"; })[0];
  if (act) act.tag = laborWord(u[u.length - 1].v!);
  if (temp) temp.tag = temperatureWord(c.v);
}
function derivePulseTag(){
  var pulse = coincident.filter(function(c){ return c.bodyTerm === "Pulse"; })[0];
  if (pulse) pulse.tag = velocityVerdict(metered(pulse.meter));
}
export var lagging: Indicator[] = [
  {
    bodyTerm:"Activity", econTerm:"Labor market",
    page:{ bare:true, noMark:true, deferHighlights:true, after:activityStackHtml },
    tag:null,
    metric:"4.1%", metricSub:"unemployment rate, Aug 2026",
    meter:{min:2.5,max:24.9,value:4.1,optimal:{from:ACT_BAND_LO,to:ACT_BAND_HI, label:ACT_BAND_LO + "\u2013" + ACT_BAND_HI + "%"},
           ends:{ low:"Tight", zone:"Normal", high:"Slack" }},
    shortCaption:"Ticked up slightly but still low against the full sweep of U.S. history.",
    caption:"Physical activity confirms a phase only after it's underway — unemployment is the textbook lagging indicator, typically trailing a turn by two to three quarters. Ticked up slightly but still low against the full sweep of U.S. history; the modern BLS series (since 1948) set its own record at 14.8% in April 2020 (14.7% as first reported), against a low of 2.5% in mid-1953; the 24.9% at the far end of the bar is the Census Bureau's historical estimate for 1933. August payrolls rose 162,000, beating forecasts.",
    aux:{label:"Initial jobless claims (wk of Sep 12)", value:"196K"},
    get peek(){
      var seen = unempHistory.filter(function(d){ return d.v != null; });
      return colPeek(seen.map(function(d){ return d.v; }), function(v: number, i: number){ return "unemp-col " + unempState(v, sahmOf(seen[i].m)); });
    },
    src:[{t:"BLS — The Employment Situation, August 2026", u:"https://www.bls.gov/news.release/empsit.nr0.htm"},{t:"DOL — Unemployment Insurance Weekly Claims", u:"https://www.dol.gov/ui/data.pdf"},{t:"BLS via FRED — Unemployment rate, monthly since 1948 (UNRATE)", u:"https://fred.stlouisfed.org/series/UNRATE"},{t:"Census Bureau — Historical Statistics of the United States, Colonial Times to 1970 (Series D 85–86, unemployment 1890–1970)", u:"https://www.census.gov/library/publications/1975/compendia/hist_stats_colonial-1970.html"}]
  },
  {
    bodyTerm:"Temperature", econTerm:"Inflation",
    page:{ bare:true, seat:seatTemperature },
    tag:null,
    get metric(){ return cpiNow.toFixed(1) + "%"; }, metricSub:"PCE, YoY, Aug 2026",
    meter:{min:-15.8,max:23.7,value:3.4,optimal:{from:TEMP_BAND_LO,to:TEMP_BAND_HI, label:TEMP_BAND_LO + "\u2013" + TEMP_BAND_HI + "%"},
           ends:{ low:"Cold", high:"Hot" }},
    shortCaption:"",
    caption:"Basal body temperature rises only after ovulation has already happened — prices work the same way, confirming heat that built up earlier rather than predicting it. A touch above target; tame next to the full sweep of U.S. price history, which has run from outright deflation to the 1920 postwar spike and a 14.8% peak in 1980. The Fed's response — the lever pulled after her temperature, not ahead of it — raised the funds rate a quarter point to 3.75–4.00% at the Sep 16 meeting (12–0, unanimous) — its first hike in three years, with the dot plot signaling one more before year-end. Next decision Oct 28, 2026.",
    facts:[],
    aux:[],
    src:[PCE_SRC,{t:"Federal Reserve — FOMC statement, Sep 16 2026", u:"https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm"},{t:"Federal Reserve — FOMC meeting calendars", u:"https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"},{t:"BLS Monthly Labor Review — One hundred years of price change (CPI history since 1913)", u:"https://www.bls.gov/opub/mlr/2014/article/one-hundred-years-of-price-change-the-consumer-price-index-and-the-american-inflation-experience.htm"}]
  }
];
export function volatilityTag(): Tag {
  var v = metered(now.vixRow.meter);
  return v < VIX_CALM ? { text:"Calm", state:"good" }
       : v <= VIX_FEAR ? { text:"Elevated", state:"warning" }
                       : { text:"Fearful", state:"critical" };
}
export function fearCurve(){
  var near = now.vixRow && now.vixRow.meter && now.vixRow.meter.value;
  if (typeof near !== "number" || typeof now.vix3mClose !== "number" || !(now.vix3mClose > 0)) return null;
  return Math.round((near / now.vix3mClose) * 1000) / 1000;
}
export function curveVerdict(r: number | null): Tag {
  return r == null   ? { text:"No reading", state:"norm" }
       : r >= 1      ? { text:"Inverted",   state:"serious" }
                     : { text:"Normal",     state:"good" };
}
export function valuationVerdict(v: number): Tag {
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
  { key:"normal",   label:"Normal",   from:0,   to:4 }
];
export function pressureZone(v: number){
  for (var i = 0; i < PRESSURE_ZONES.length; i++){
    if (v < PRESSURE_ZONES[i].to || i === PRESSURE_ZONES.length - 1) return PRESSURE_ZONES[i];
  }
  return PRESSURE_ZONES[PRESSURE_ZONES.length - 1];
}
var HZN_BACK = 4;
function hznLast(a: HznPoint[]): HznAt | null { for (var i = a.length - 1; i >= 0; i--){ var d = a[i]; if (d.v != null && !d.partial) return { i:i, v:d.v }; } return null; }
function hznNeed(a: HznPoint[]): HznAt { var at = hznLast(a); if (!at) throw new Error("a horizon series has no settled reading"); return at; }
function hznDelta(a: HznPoint[], at: HznAt): number { var was = hznBack(a, at.i, HZN_BACK); if (was == null) throw new Error("a horizon series has no reading " + HZN_BACK + " back"); return at.v - was; }
function hznRecord(a: HznPoint[]){
  var vs = a.filter(function(d){ return d.v != null; }).map(function(d){ return d.v as number; });
  return { min:Math.min.apply(null, vs), max:Math.max.apply(null, vs) };
}
function hznBack(a: HznPoint[], from: number, back: number): number | null { for (var i = from - back; i >= 0; i--) if (a[i].v != null) return a[i].v; return null; }
function horizonWord(sp: number, dLong: number, dShort: number, dSpread: number): { word: string; state: State } {
  if (sp < 0) return { word:"Pessimistic", state:"critical" };
  if (dSpread <= 0.05) return { word:"Guarded", state:"warning" };
  return dLong >= -dShort ? { word:"Optimistic", state:"good" } : { word:"Hopeful", state:"good" };
}
export function horizonInfoHtml(pick: string){
  var m = HZN_METERS[pick], shortLeg = pick === "2y" ? "2-year" : "3-month";
  return '<h4>10-year minus ' + shortLeg + '</h4>' +
    '<p class="caption">What the long end of the curve pays over the short end, in percentage points. It is a ' +
      'forecast rather than a measurement: the long rate is the market’s own average of where it expects the ' +
      'short rate to be for the next ten years, so a curve that slopes down is a market expecting cuts, and a ' +
      'market expecting cuts is a market expecting trouble. The ends of the track are this series’ quarterly ' +
      'record, ' + m.min.toFixed(2) + ' and +' + m.max.toFixed(2) + ' points; the deepest single DAY of the ' +
      'last inversion was −1.89, in May 2023, below the quarterly low because a quarter is an average.</p>' +
    '<p class="caption follow"><b>The line at zero is definitional, not drawn</b> — it is ' +
      'where an upward-sloping curve becomes an inverted one, and it is the threshold the New York Fed’s own ' +
      'recession model is built on, using this exact pair of maturities. That model’s FAQ states that an ' +
      'inversion has preceded every U.S. recession on record since 1960, with a single false signal in 1967. ' +
      'The band is one-sided because a steeper curve is not a worse one: there is nothing to flag above zero.</p>' +
    '<p class="caption follow">Read the caution with the signal, because it is the same ' +
      'source’s. The New York Fed is explicit that it is the <b>level</b> of the spread that forecasts, not the ' +
      'crossing — in two episodes in the 1990s the spread fell to 42 and then 12 basis points without ever ' +
      'inverting, and nothing followed. A reading just above zero is not the all-clear the colour suggests, ' +
      'but no source says where \u201cjust above\u201d ends, so the page draws no zone for it.</p>' +
    String(ui.spreadDetail || "").replace(/^\s*<h4>[\s\S]*?<\/h4>/, "");
}
function pulseBlock(rate: number, ref: number, ind?: Indicator){
  var slower = Math.round((1 - rate / ref) * 100);
  var title = ind
    ? '<div class="spread-history-head"><h4>' + titleCase(ind.econTerm) + '</h4>' +
      '<span class="tag ' + tagFor(ind).state + '">' + tagFor(ind).text + '</span></div>'
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
function householdsWord(bill: number, kept: number): { word: string; state: State } {
  var heavy = bill > DSR_MEAN;
  if (kept < SAV_THIN) return { word:heavy ? "Overstretched" : "Stretched",  state:"serious" };
  if (kept < SAV_LOW) return { word:heavy ? "Stretched"     : "Thin cover", state:"warning" };
  if (kept < SAV_MID) return { word:heavy ? "Thin cover"    : "Covered",    state:"good" };
  return                 { word:heavy ? "Covered" : "Well covered",     state:"good" };
}
export function dsrInfoHtml(){
  return '<h4>Debt Service</h4>' +
    '<p class="caption">What households pay each quarter in required payments on mortgages and consumer debt, ' +
      'as a share of disposable income (' + qAtIndex(DSR_FROM_YEAR, dsrHistory.length - 1) + '). The ends of the ' +
      'track are the record: 15.8% in 2007 Q4, at the top of the housing boom, and 9.1% in 2020 Q2, when ' +
      'payments were being deferred and incomes were being topped up at once.</p>' +
    '<p class="caption follow">The line is <b>this series\u2019 own average since ' + DSR_FROM_YEAR +
      ', ' + DSR_MEAN.toFixed(1) + '%</b> \u2014 and it is the same line this page\u2019s verdict already used, rather ' +
      'than a second opinion drawn beside it. It is one-sided on purpose: a light debt bill is not a condition ' +
      'to flag, and what the reading answers is how far ABOVE the average the burden sits. Today it is below, ' +
      'about a third off the 2007 peak, and has been flat for two years.</p>' +
    '<p class="caption follow">Read it with the cushion below, never alone. The bill is the ' +
      'lighter half of this page\u2019s story; the thin part is what is left over.</p>' +
    srcBlock([
      {t:"Federal Reserve via FRED \u2014 Household Debt Service Payments as a Percent of Disposable Personal Income (TDSP)", u:"https://fred.stlouisfed.org/series/TDSP"}
    ]);
}
export function savInfoHtml(){
  return '<h4>Saving Rate</h4>' +
    '<p class="caption">What is left after households have spent and paid tax, as a share of disposable ' +
      'income. The ends of the track are the record: 1.8% and 24.4% \u2014 the second of those is 2020, when the ' +
      'stimulus payments arrived and there was nothing open to spend them in.</p>' +
    '<p class="caption follow"><b>The 4.5\u201312.2% band is computed rather than chosen</b>: the ' +
      'tenth to ninetieth percentile of the 318 quarters since 1947, a record long enough to have held every ' +
      'kind of decade. Today\u2019s ' + savNow.toFixed(1) + '% sits <b>below</b> it \u2014 only ' +
      savHistory.filter(function(v, i){ return v <= savNow && i < savHistory.length - 1; }).length +
      ' of those quarters have been lower, and a run of them came between 2005 and early 2008.</p>' +
    '<p class="caption follow">This is the reading that sets the page\u2019s word, and the bill ' +
      'above can only make it worse, never better: a household with a cushion can carry a heavy bill, and one ' +
      'without cannot carry a light one.</p>' +
    srcBlock([
      {t:"BEA via FRED \u2014 Personal Saving Rate (PSAVERT)", u:"https://fred.stlouisfed.org/series/PSAVERT"}
    ]);
}
export function vixPct(v: number | null | undefined){
  var m = now.vixRow.meter;
  return v == null ? 0 : Math.max(0, Math.min(100, 100 * Math.log(v / m.min) / Math.log(m.max / m.min)));
}
export function volatilityRing(){
  var m = now.vixRow.meter;
  return vitalRingSvg(vixPct(m.value), "accent", "VIX at " + metered(m).toFixed(2) + ", between its record low of " +
    m.min + " and its record high of " + m.max);
}
export function volatilityDetailHtml(){
  var m = now.vixRow.meter;
  return '<h4>Volatility</h4><div class="marker-sub">Cboe, ' + now.vixRow.sub + '</div>' + facts([
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
export function marketWord(v: number): WordOf {
  if (v >= 0) return { state:"good", text:"Bull year", says:"a positive total return, which the dial draws as a bull year" };
  return { state:"serious", text:"Bear year", says:"a negative total return, which the dial draws as a bear year" };
}
export function marketCol(v: number){ return "dv-bar " + (v >= 0 ? "over" : "under"); }
function marketInfoHtml(f: MarketReading){
  return '<h4>' + titleCase(f.econTerm) + '</h4>' +
    '<p class="caption">The reading is <b>' + f.tag.text + '</b>: ' + f.metric + ' in ' + f.now.y + (f.open ? ' so far' : '') + ', ' + f.wordSays + '. ' +
      'The record, year by year, runs ' + f.span + '.</p>' +
    '<p class="caption follow"><b>The zero line is the definition, not a band</b>: a year the index ends higher, ' +
      'dividends included, is a bull year and one it ends lower is a bear year. These are the same years the dial\u2019s inner band ' +
      'colours, so the card, this chart and the cycle read one number.' + (f.open ? ' ' + f.now.y + ' is still open, so its bar is the year so far.' : '') + '</p>' +
    srcBlock(sp500AnnualReturnSource);
}
export function rowReadings(): Indicator[] { return ([] as Indicator[]).concat(coincident, lagging, [productivityReading, desireReading, premiumReading, confidenceReading, marketReading]); }
export function indOf(R: { term?: string }): Indicator | undefined { return rowReadings().filter(function(x){ return x.bodyTerm === R.term; })[0]; }
function policyFacts(){ return [
  { label:"Fed funds target",  value:fedFundsRange() },
  now.fedFunds.lastMove ? { label:"Last Fed move", value:now.fedFunds.lastMove + " on " + now.fedFunds.asOf.replace(/,\s*\d{4}$/, "") +
                                      (now.fedFunds.vote ? " \u00b7 " + now.fedFunds.vote : ""), wordy:true } : null,
  now.fedFunds.lastMove && now.fedFunds.turnLabel ? { label:now.fedFunds.turnLabel, value:now.fedFunds.turnValue, wordy:true } : null,
  now.fedFunds.next && !(Date.parse(now.fedFunds.next) + 864e5 < Date.now()) ? { label:"Next decision", value:now.fedFunds.next } : null
].filter(Boolean) as AuxFact[]; }
export function policyFactRows(){
  return policyFacts().map(auxStat).join("");
}
export function growthShownCap(r: Parameters<typeof growthWord>[0]){ return growthWord(r) === "contracting" ? "Contraction" : "Expansion"; }
export function phaseClass(regime: string){ return regime === "contraction" ? "phase-down" : "phase-up"; }
function activityStackHtml(ind: Indicator){
  histNote("sheet-sign-activity", activityInfoHtml(ind));
  return histBar("", "act-rangebar") +
    '<div class="page-chart">' +
      histHead("sheet-sign-activity") +
      '<div id="act-history" class="vh-host"></div>' +
      histTip("act-hist-tooltip") +
      '<div id="act-trend"></div>' +
    '</div>';
}
function seatTemperature(ind: Indicator, d: HTMLElement){
  HIST_NOTE["sheet-metric-temp"] = temperatureInfoHtml(ind);
  tempCaptionFull = ind.caption || "";
  tempLeadShown = ind.lead || ind.shortCaption || "";
  var sheet = need("sheet-metric-temp"), fresh = d.querySelector(".sign-detail"); if (!fresh) return;
  var prev = sheet.querySelector(":scope > .sign-detail");
  if (prev) sheet.replaceChild(fresh, prev); else sheet.appendChild(fresh);
}
export var DATED_UNIT = /^(.*?),\s*((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[^,]*|Q[1-4]\s+\d{4})$/;
export function indPeriod(R: { term?: string }){
  var ind = indOf(R), m = ind && DATED_UNIT.exec(String(ind.metricSub || "").trim());
  return m ? m[2] : "";
}

export var productivityReading: ProductivityReading, confidenceRecord: SeriesRecord<MonthPoint>, confidenceReading: ConfidenceReading, desireRecord: SeriesRecord<MonthPoint>, desireReading: DesireReading, premiumRecord: SeriesRecord<MonthPoint>, premiumReading: PremiumReading, tempInfo: string, horizonRead: HorizonRead, householdsNow: { word: string; state: State }, marketReading: MarketReading;
var productivityRecord: SeriesRecord<QuarterPoint>, gdpNowQ: QuarterPoint, HZN_METERS: Record<string, { min: number; max: number }>;

function deriveFeelingReadings(){
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
  desireRecord = (function(){
    var h = durablesHistory;
    return { now:h[h.length - 1], lo:h.reduce(function(a, d){ return d.v < a.v ? d : a; }),
             hi:h.reduce(function(a, d){ return d.v > a.v ? d : a; }) };
  })();
  desireReading = (function(R){
    var word = desireWord(R.now.v), at = monthLabel(R.now.m);
    var span = fmtSigned(R.lo.v, 1) + "% (" + monthLabel(R.lo.m) + ") to " + fmtSigned(R.hi.v, 1) + "% (" + monthLabel(R.hi.m) + ")";
    return {
      bodyTerm:"Desire", info:function(){ return desireInfoHtml(desireReading); },
      page:{ bare:true, chart:function(){ return '<div id="sheet-sign-desire-chart"></div><div id="sheet-sign-desire-highlights"></div>'; } },
      econTerm:"Consumer demand", metricSub:"consumer demand, YoY, " + at,
      metric:fmtSigned(R.now.v, 1) + "%", tag:{ state:word.state, text:word.text }, wordSays:word.says,
      meter:{ min:R.lo.v, max:R.hi.v, value:R.now.v, optimal:{gte:DESIRE_LINE, label:"\u2265 0%"}, ends:{ low:"Low appetite" } },
      span:span,
      get peek(){
        return colPeek(durablesHistory.map(function(d){ return d.v; }), function(v){ return "dv-bar " + (v > 0 ? "over" : "under"); }, 0, true);
      },
      lead:"",
      caption:at + ", consumer demand for durable goods " + fmtSigned(R.now.v, 1) + "% on a year earlier, " + word.says +
        ". The track runs over the monthly record since " + monthLabel(durablesHistory[0].m) + ": " + span + "."
    };
  })(desireRecord);
  premiumRecord = (function(){
    var h = premiumHistory;
    return { now:h[h.length - 1], lo:h.reduce(function(a, d){ return d.v < a.v ? d : a; }),
             hi:h.reduce(function(a, d){ return d.v > a.v ? d : a; }) };
  })();
  premiumReading = (function(R){
    var at = monthLabel(R.now.m);
    var side = "stocks earn " + Math.abs(R.now.v).toFixed(1) + " points a year " + (R.now.v >= PREMIUM_LINE ? "more" : "less") + " than bonds after inflation";
    var span = fmtSigned(R.lo.v, 1) + "% (" + monthLabel(R.lo.m) + ") to " + fmtSigned(R.hi.v, 1) + "% (" + monthLabel(R.hi.m) + ")";
    return {
      bodyTerm:"Equity risk premium", info:function(){ return premiumInfoHtml(premiumReading); },
      page:{ bare:true, chart:function(){ return '<div id="sheet-sign-premium-chart"></div><div id="sheet-sign-premium-highlights"></div>'; } },
      econTerm:"Equity risk premium", metricSub:"Excess CAPE Yield, " + at,
      metric:fmtSigned(R.now.v, 1) + "%", tag:{ state:"norm", text:"" }, side:side,
      meter:{ min:R.lo.v, max:R.hi.v, value:R.now.v, optimal:{gte:PREMIUM_LINE, label:"\u2265 0%"} },
      span:span,
      get peek(){
        return colPeek(premiumHistory.map(function(d){ return d.v; }), function(v){ return "dv-bar " + (v > 0 ? "over" : "under"); }, 0, true);
      },
      lead:"",
      caption:at + ", Shiller\u2019s Excess CAPE Yield at " + fmtSigned(R.now.v, 1) + "%: " + side +
        ". The track runs over the monthly record since " + monthLabel(premiumHistory[0].m) + ": " + span + "."
    };
  })(premiumRecord);
}
export function bootReadings(){
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
  deriveFeelingReadings();
  now.valuation.tag = valuationVerdict(metered(fileRow("cape").meter));
  liveInto("capeValue");
  liveInto("coincident");
  GYN.step("deriveVolumeTag", deriveVolumeTag, "derive");
  deriveVolumeTag();
  gdpNowQ = gdpQuarterlyYoY[gdpQuarterlyYoY.length - 1];
  GYN.step("derivePulseTag", derivePulseTag, "derive");
  derivePulseTag();
  GYN.step("deriveLaggingTags", deriveLaggingTags, "derive");
  deriveLaggingTags();
  // ---- Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring ----
  tempInfo = '<h4>Temperature</h4>' +
    ledeHtml("Her basal temperature: inflation against the 2% the Fed aims at, month by month through this cycle.") +
    facts([
      '<b>Hot above the band, warm inside it, cold below</b> \u2014 red, teal, blue.',
      'The Fed\u2019s goal is a single point, 2% on the PCE index. The <b>1\u20133% band</b> around it is part of the Season Model\u2019s structure. It is read on PCE since 2000, the Fed\u2019s own gauge, and on CPI before it, the gauge the Fed watched then.',
      'One of the two readings a season is computed from: the level, and the direction of the last twelve months.',
      'It confirms heat that has already built rather than predicting it.'
    ]);
  liveInto("vix3mClose");
  GYN.step("deriveHorizon", deriveHorizon, "derive");
  deriveHorizon();
  HZN_METERS = {
    "3m": { min:hznRecord(t10y3mHistory).min, max:hznRecord(t10y3mHistory).max },
    "2y": { min:hznRecord(t10y2yHistory).min, max:hznRecord(t10y2yHistory).max }
  };
  householdsNow = householdsWord(dsrNow, savNow);
  marketReading = (function(h: YearPoint[]){
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
function isNum(x: unknown): x is number { return typeof x === "number" && isFinite(x); }
type LiveRow = { meter?: Meter | null; key?: string; marker?: string; bodyTerm?: string } & Record<string, unknown>;
function rowId(r: LiveRow){ return r.key || r.marker || r.bodyTerm || ""; }
function rowLike(r: LiveRow | null, f: LiveRow){
  var m = r && typeof r === "object" && r.meter;
  if (!r || !m || rowId(r) !== rowId(f) || !(isNum(m.value) && isNum(m.min) && isNum(m.max) && m.min < m.max)) return false;
  return Object.keys(f).every(function(k){ var t = typeof f[k]; return (t !== "string" && t !== "number") || typeof r![k] === t; });
}
function overRows<T extends object>(file: T[], rows: readonly object[]): T[] {
  return file.map(function(f, i){
    var r = rows[i] as LiveRow, o = Object.assign({}, f) as T & LiveRow, m = r.meter as Meter;
    Object.keys(f).forEach(function(k){ var t = typeof (f as LiveRow)[k]; if (t === "string" || t === "number") (o as LiveRow)[k] = r[k]; });
    o.meter = merge(o.meter, { value:m.value, min:m.min, max:m.max });
    return o;
  });
}
function rowsOk(rows: (LiveRow | null)[] | undefined, file: readonly object[]){
  return Array.isArray(rows) && rows.length === file.length && (file as LiveRow[]).every(function(f, i){ return rowLike(rows[i], f); });
}
function deriveHorizon(){
  var sp = curveSpread();
  var sN = hznNeed(t10y3mHistory), lN = hznNeed(t10yYieldHistory), tN = hznNeed(t3mYieldHistory);
  var tN2 = hznNeed(t10y2yHistory);
  var dSpread = hznDelta(t10y3mHistory, sN);
  var dLong   = hznDelta(t10yYieldHistory, lN);
  var dShort  = hznDelta(t3mYieldHistory, tN);
  var w = horizonWord(sp, dLong, dShort, dSpread);
  horizonRead = { spread:sp, q:sN, q2:tN2, dSpread:dSpread, dLong:dLong, dShort:dShort,
    was:hznBack(t10y3mHistory, sN.i, HZN_BACK), was2:hznBack(t10y2yHistory, tN2.i, HZN_BACK),
    d2:hznDelta(t10y2yHistory, tN2),
    word:w.word, state:w.state };
}
function fieldsKept(v: object, target: object){
  var t = target as Record<string, unknown>;
  return Object.entries(v).every(function(e){ return e[0] === "rows" || (t[e[0]] === undefined ? typeof e[1] === "string" : typeof e[1] === typeof t[e[0]] && (typeof e[1] !== "object" || e[1] === null)); });
}
function vixAsOf(){ return String(now.sentiment.rows[0].sub || ""); }
function coincidentAsOf(){ return coincident.map(function(c){ return periodIso(String(c.metricSub || "")); }).sort().pop() || ""; }
function periodIso(sub: string){
  var q = /Q([1-4]) (\d{4})$/.exec(sub), m = /([A-Z][a-z]{2}) (\d{4})$/.exec(sub), i = m ? MONTHS_SHORT.indexOf(m[1]) : -1;
  return q ? q[2] + "-" + ("0" + ((+q[1] - 1) * 3 + 1)).slice(-2) + "-01" : m && i >= 0 ? m[2] + "-" + ("0" + (i + 1)).slice(-2) + "-01" : "";
}
export function bootReadingRegistry(){
  // ---- THE READING REGISTRY ----
  defineReadings({
    fedFunds: {
      kind: "object", fileAsOf: function(){ return now.fedFunds.asOf; },
      ok: function(v: Partial<FedFunds>){ return fieldsKept(v, now.fedFunds) && isNum(v.lo) && isNum(v.hi) && v.lo >= 0 && v.lo <= v.hi && v.hi <= 25; },
      set: function(v: Partial<FedFunds>){
        if (!v.lastMove && (v.lo !== now.fedFunds.lo || v.hi !== now.fedFunds.hi)) v = merge({ lastMove:"", lastMoveLabel:"", asOf:"", next:"" }, v);
        if (v.lastMove !== undefined && (v.lastMove !== now.fedFunds.lastMove || v.asOf !== now.fedFunds.asOf) && !v.turnLabel) v = merge({ turnLabel:"", turnValue:"" }, v);
        if (v.asOf !== undefined && v.asOf !== now.fedFunds.asOf && !v.vote) v = merge({ vote:"" }, v);
        now.fedFunds = merge(now.fedFunds, v);
      }
    },
    yieldCurve: {
      kind: "series", fileAsOf: curveAsOf,
      ok: function(v: CurvePoint[]){
        var has = function(m: string){ return v.some(function(r){ return r.m === m && r.y !== null; }); };
        return v.every(function(r){ return r && typeof r.m === "string" && (r.y === null || (isNum(r.y) && r.y >= 0 && r.y <= 20)); }) && has("10Y") && has("3M");
      },
      set: function(v: CurvePoint[]){ now.yieldCurve = v; deriveUninvLag(); if (horizonRead) deriveHorizon(); }
    },
    sentiment:  {
      kind: "object", fileAsOf: vixAsOf,
      ok: function(v: Partial<typeof now.sentiment>){ return fieldsKept(v, now.sentiment) && (v.rows === undefined || rowsOk(v.rows, now.sentiment.rows)); },
      set: function(v: Partial<typeof now.sentiment>){
        now.sentiment = merge(now.sentiment, v.rows ? merge(v, { rows: overRows(now.sentiment.rows, v.rows) }) : v);
        now.vixRow = now.sentiment.rows[0];
      }, onOpen: true
    },
    valuation:  {
      kind: "object", fileAsOf: capeAsOf,
      ok: function(v: Partial<typeof now.valuation>){ return fieldsKept(v, now.valuation) && (v.rows === undefined || rowsOk(v.rows, now.valuation.rows)); },
      set: function(v: Partial<typeof now.valuation>){
        now.valuation = merge(now.valuation, v.rows ? merge(v, { rows: overRows(now.valuation.rows, v.rows) }) : v);
        var cape = valRow("cape"); if (cape) now.valuation.tag = valuationVerdict(metered(cape.meter));
      }
    },
    coincident: {
      kind: "series", fileAsOf: coincidentAsOf,
      ok: function(v: Indicator[]){ return rowsOk(v as unknown as LiveRow[], coincident); },
      set: function(v: Indicator[]){ coincident = overRows(coincident, v); deriveVolumeTag(); derivePulseTag(); },
      onOpen: true
    },
    vixClose: {
      kind: "scalar", band: [5, 100], fileAsOf: vixAsOf,
      set: function(v: number){
        var row = now.sentiment.rows[0];
        row.meter.value = v;
        row.flagValue = v.toFixed(1);
        if (liveAsOf.vixClose) row.sub = liveAsOf.vixClose;
      }
    },
    vix3mClose: { kind: "scalar", band: [5, 100], fileAsOf: vixAsOf, set: function(v: number){ now.vix3mClose = v; }, onOpen: true },
    capeValue: {
      kind: "scalar", band: [4, 60], fileAsOf: capeAsOf,
      set: function(v: number){
        var row = fileRow("cape");
        row.meter.value = v;
        row.flagValue = v.toFixed(1) + String(row.flagValue || "").replace(/^[\d.,\s-]+/, "");
        if (liveAsOf.capeValue) row.sub = liveAsOf.capeValue;
        now.valuation.tag = valuationVerdict(v);
      }
    }
  });
  liveInto("fedFunds");
}
