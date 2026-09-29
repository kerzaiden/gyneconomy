# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,798 lines**, about 628 KB, roughly **178 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `59e3cfc` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,528 | the whole stylesheet, every token and rule |
| **Markup** | 1,529–2,030 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 2,031–8,765 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,766–8,798 | </body></html> |

Counts: **319** top-level functions, **191** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 2,031_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,033 | `byId` | `function byId(` |
| 2,041 | `byIdMaybe` | `function byIdMaybe(` |
| 2,042 | `put` | `function put(` |
| 2,047 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 2,049_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,050 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 2,051 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 2,052 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 2,053 | `hubTodayHtml` | `function hubTodayHtml(` |
| 2,057 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 2,062_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,063 | `wheelMeta` | `var wheelMeta =` |
| 2,071 | `seasonOverride` | `var seasonOverride =` |
| 2,072 | `cycleNowNote` | `var cycleNowNote =` |
| 2,074 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 2,152 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 2,193 | `gdpLevels` | `var gdpLevels =` |
| 2,202 | `fedFundsHistory` | `var fedFundsHistory =` |
| 2,203 | `fearCurveHistory` | `var fearCurveHistory =` |
| 2,205 | `fiscalHistory` | `var fiscalHistory =` |
| 2,211 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 2,213 | `treasuryQuarterly` | `var treasuryQuarterly =` |

### Live data without a render refactor

_line 2,223_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,228 | `merge` | `function merge(` |
| 2,235 | `LIVE` | `function LIVE(` |
| 2,249 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,252_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,254 | `paintReading` | `function paintReading(` |
| 2,271 | `repaintFearCurve` | `function repaintFearCurve(` |
| 2,277 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,285 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,290 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,294 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,299_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,300 | `READINGS` | `var READINGS =` |
| 2,356 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,357 | `KINDS` | `var KINDS =` |
| 2,358 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,372 | `receive` | `function receive(` |
| 2,388 | `liveAsOf` | `var liveAsOf =` |
| 2,389 | `fmtAsOf` | `function fmtAsOf(` |
| 2,394 | `applyLive` | `function applyLive(` |
| 2,407 | `shapeOk` | `function shapeOk(` |
| 2,414 | `repaintPolicy` | `function repaintPolicy(` |
| 2,420 | `GYN` | `var GYN =` |
| 2,447 | `refreshLiveData` | `function refreshLiveData(` |
| 2,465 | `fetchSiteData` | `function fetchSiteData(` |
| 2,481 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,486_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,487 | `yieldCurve` | `var yieldCurve =` |
| 2,493 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,494 | `curveAsOf` | `function curveAsOf(` |
| 2,499 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,500 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,505 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,507_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,508 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,509 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,510 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,511 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,512 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,514_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,515 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,521 | `uninvLagToday` | `var uninvLagToday =` |
| 2,526 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,532 | `gdpPeers` | `var gdpPeers =` |
| 2,573 | `gdpSrc` | `var gdpSrc =` |
| 2,574 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,579 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 2,581 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,608_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,610 | `productivityReading` | `var productivityReading =` |

### Institutional trust is not in this panel

_line 2,619_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,621 | `stressScoreFor` | `function stressScoreFor(` |
| 2,627 | `stressScore` | `var stressScore =` |
| 2,628 | `powerOf` | `var powerOf =` |
| 2,629 | `powerScore` | `var powerScore =` |
| 2,631 | `stressHistory` | `var stressHistory =` |
| 2,637 | `powerMeter` | `var powerMeter =` |
| 2,639 | `stressNoteFull` | `var stressNoteFull =` |
| 2,641 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year

_line 2,643_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,644 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,645 | `deficitHistory` | `var deficitHistory =` |
| 2,648 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,649 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,651 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,660_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,661 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,671_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,672 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,675 | `timelineSpan` | `function timelineSpan(` |
| 2,680 | `timelineFor` | `function timelineFor(` |
| 2,691 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,697_ · 32 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,698 | `windowScale` | `function windowScale(` |
| 2,713 | `windowYears` | `function windowYears(` |
| 2,721 | `refName` | `function refName(` |
| 2,725 | `histReadEnsure` | `function histReadEnsure(` |
| 2,746 | `seatBandReading` | `function seatBandReading(` |
| 2,762 | `histReadFill` | `function histReadFill(` |
| 2,812 | `histAxisEnds` | `function histAxisEnds(` |
| 2,823 | `histLegend` | `function histLegend(` |
| 2,883 | `refitHistory` | `function refitHistory(` |
| 2,893 | `wireHistHover` | `function wireHistHover(` |
| 2,930 | `mWindowFrom` | `function mWindowFrom(` |
| 2,934 | `qWindowFrom` | `function qWindowFrom(` |
| 2,938 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,939 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,941 | `DEF_1983` | `var DEF_1983 =` |
| 2,942 | `defFrom` | `function defFrom(` |
| 2,947 | `deficitChart` | `function deficitChart(` |
| 3,015 | `deficitBlock` | `function deficitBlock(` |
| 3,055 | `buffettHistory` | `var buffettHistory =` |
| 3,057 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 3,058 | `hyDates` | `var hyDates =` |
| 3,059 | `hyOas` | `var hyOas =` |
| 3,060 | `checkDesireWindow` | `function checkDesireWindow(` |
| 3,067 | `hyAt` | `function hyAt(` |
| 3,071 | `hyLabel` | `function hyLabel(` |
| 3,072 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 3,073 | `hyNum` | `function hyNum(` |
| 3,074 | `hyWindowFrom` | `function hyWindowFrom(` |
| 3,082 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 3,092 | `capeHistory` | `var capeHistory =` |
| 3,094 | `longCycleSrc` | `var longCycleSrc =` |
| 3,110 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 3,129_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,130 | `sentiment` | `var sentiment =` |
| 3,146 | `valuation` | `var valuation =` |
| 3,167 | `valRow` | `function valRow(` |
| 3,174 | `coincident` | `var coincident =` |
| 3,220 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 3,226 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 3,227 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 3,228 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 3,230_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,231 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 3,232 | `m2vHistory` | `var m2vHistory =` |
| 3,248 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,302 | `desireHistoryChart` | `function desireHistoryChart(` |
| 3,342 | `PBAR_GAP` | `var PBAR_GAP =` |
| 3,343 | `panelBar` | `function panelBar(` |

### the history card's head

_line 3,374_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,375 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,376 | `DOTS` | `var DOTS =` |
| 3,378 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,395 | `headPickRow` | `function headPickRow(` |
| 3,401 | `histHead` | `function histHead(` |
| 3,416 | `headNoteIdx` | `var headNoteIdx =` |
| 3,417 | `headMenuHtml` | `function headMenuHtml(` |
| 3,442 | `headMenuFor` | `var headMenuFor =` |
| 3,443 | `headSubFor` | `var headSubFor =` |
| 3,444 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,475 | `nameWithMark` | `function nameWithMark(` |
| 3,481 | `panelRow` | `function panelRow(` |
| 3,494 | `panelFromMeter` | `function panelFromMeter(` |
| 3,502 | `meterFlagged` | `function meterFlagged(` |
| 3,509 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,532 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,546 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,559 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,578 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,592 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,611 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,642 | `desireBlock` | `function desireBlock(` |
| 3,654 | `volumeBlock` | `function volumeBlock(` |
| 3,667 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,683 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,690_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,691 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,692 | `m2Level` | `var m2Level =` |
| 3,713 | `m2Yoy` | `var m2Yoy =` |
| 3,714 | `M2_NORM` | `var M2_NORM =` |
| 3,716 | `volumeVerdict` | `function volumeVerdict(` |
| 3,724 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,725 | `unempHistory` | `var unempHistory =` |
| 3,731 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,740 | `NROU_NOW` | `var NROU_NOW =` |
| 3,741 | `unempState` | `function unempState(` |
| 3,747 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,801_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,802 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,811 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,869 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,870 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,871 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,872_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,874 | `householdsChart` | `function householdsChart(` |
| 3,923 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,978 | `GDP_NORM` | `var GDP_NORM =` |
| 3,979 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 3,980 | `gdpNowQ` | `var gdpNowQ =` |
| 3,981 | `gdpMeter` | `var gdpMeter =` |
| 3,984 | `growthInfoHtml` | `function growthInfoHtml(` |
| 4,006 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 4,059 | `m2GrowthChart` | `function m2GrowthChart(` |
| 4,106 | `checkMoneyStock` | `function checkMoneyStock(` |
| 4,114 | `velocityVerdict` | `function velocityVerdict(` |
| 4,122 | `derivePulseTag` | `function derivePulseTag(` |
| 4,128 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 4,158_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,159 | `seasonReading` | `var seasonReading =` |
| 4,203 | `frameworkRows` | `var frameworkRows =` |
| 4,213 | `vixRow` | `var vixRow =` |
| 4,214 | `vixWordOf` | `var vixWordOf =` |
| 4,218 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 4,228_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,229 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 4,238_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,239 | `calendarTodayY` | `var calendarTodayY =` |
| 4,241 | `vix3mClose` | `var vix3mClose =` |
| 4,242 | `fearCurve` | `function fearCurve(` |
| 4,247 | `curveVerdict` | `function curveVerdict(` |
| 4,252 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 4,253 | `valuationVerdict` | `function valuationVerdict(` |
| 4,261 | `sparkHtml` | `function sparkHtml(` |
| 4,280 | `lastN` | `function lastN(` |

### The range bar

_line 4,282_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,283 | `modeBar` | `function modeBar(` |
| 4,290 | `pickerOpen` | `var pickerOpen =` |
| 4,291 | `cycleByName` | `function cycleByName(` |
| 4,295 | `openCycle` | `function openCycle(` |
| 4,299 | `cycleSlice` | `function cycleSlice(` |
| 4,307 | `totalGrowthYears` | `function totalGrowthYears(` |
| 4,315 | `cycleMonths` | `function cycleMonths(` |
| 4,323 | `histControls` | `function histControls(` |
| 4,332 | `cycLabel` | `function cycLabel(` |
| 4,336 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 4,341 | `cyclePicker` | `function cyclePicker(` |
| 4,360 | `rangeBar` | `function rangeBar(` |
| 4,367 | `trendOf` | `function trendOf(` |
| 4,382 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,386 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,397_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,398 | `yearOf` | `function yearOf(` |
| 4,399 | `mean` | `function mean(` |

### The record rows

_line 4,400_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,401 | `headSigma` | `function headSigma(` |
| 4,406 | `atQuarter` | `function atQuarter(` |
| 4,407 | `atMonth` | `function atMonth(` |
| 4,408 | `cycleAverages` | `function cycleAverages(` |
| 4,415 | `ordinal` | `function ordinal(` |
| 4,416 | `hiCard` | `function hiCard(` |
| 4,419 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component

_line 4,433_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,434 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 4,440 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,447 | `moreRow` | `function moreRow(` |
| 4,453 | `powerPageNote` | `var powerPageNote =` |
| 4,454 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,460_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,461 | `xLabelOf` | `function xLabelOf(` |
| 4,471 | `fitGroup` | `function fitGroup(` |
| 4,488 | `reserveChart` | `function reserveChart(` |

### The history component's axes

_line 4,522_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,523 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,531 | `vGrid` | `function vGrid(` |
| 4,535 | `COL_FILL` | `var COL_FILL =` |
| 4,536 | `colPath` | `function colPath(` |
| 4,541 | `colWidth` | `function colWidth(` |
| 4,546 | `AXIS` | `var AXIS =` |
| 4,547 | `histFrame` | `function histFrame(` |
| 4,554 | `xLabel` | `function xLabel(` |
| 4,557 | `crossLine` | `function crossLine(` |
| 4,560 | `zeroRule` | `function zeroRule(` |
| 4,563 | `meanRule` | `function meanRule(` |
| 4,564 | `pendingGeom` | `var pendingGeom =` |
| 4,565 | `publishGeom` | `function publishGeom(` |
| 4,566 | `attachHistory` | `function attachHistory(` |
| 4,575 | `histBar` | `function histBar(` |
| 4,578 | `histTip` | `function histTip(` |
| 4,579 | `avgRule` | `function avgRule(` |
| 4,582 | `vhOpen` | `function vhOpen(` |
| 4,583 | `chartAxes` | `function chartAxes(` |
| 4,613 | `divergeChart` | `function divergeChart(` |
| 4,647 | `pairChart` | `function pairChart(` |

### The inner pages' chart (kept for nothing — see above)

_line 4,675_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,677 | `maxIn` | `function maxIn(` |
| 4,682 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,683 | `PEEK_W` | `var PEEK_W =` |
| 4,684 | `PEEK_H` | `var PEEK_H =` |
| 4,685 | `colPeek` | `function colPeek(` |
| 4,703 | `meterPeek` | `function meterPeek(` |
| 4,720 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,725 | `pressureZone` | `function pressureZone(` |
| 4,731 | `HZN_BACK` | `var HZN_BACK =` |
| 4,732 | `hznLast` | `function hznLast(` |
| 4,733 | `hznBack` | `function hznBack(` |
| 4,734 | `horizonWord` | `function horizonWord(` |
| 4,754 | `HZN_METERS` | `var HZN_METERS =` |
| 4,762 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,783 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,788 | `RISK_RISK` | `var RISK_RISK =` |
| 4,793 | `riskCell` | `function riskCell(` |
| 4,794 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,824 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,849_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,850 | `pulseClipN` | `var pulseClipN =` |
| 4,851 | `beatPath` | `function beatPath(` |
| 4,868 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,882 | `pulsePeek` | `function pulsePeek(` |
| 4,885 | `pulseBlock` | `function pulseBlock(` |
| 4,902 | `CHEV` | `var CHEV =` |
| 4,903 | `peekCard` | `function peekCard(` |
| 4,922 | `dropSvg` | `function dropSvg(` |
| 4,924 | `volumeSvg` | `function volumeSvg(` |
| 4,928 | `gaugeSvg` | `function gaugeSvg(` |
| 4,932 | `diamondSvg` | `function diamondSvg(` |
| 4,936 | `energyFromReserve` | `function energyFromReserve(` |
| 4,944 | `sproutSvg` | `function sproutSvg(` |
| 4,952 | `markSvg` | `function markSvg(` |
| 4,955 | `hormoneSvg` | `function hormoneSvg(` |
| 4,960 | `flameSvg` | `function flameSvg(` |
| 4,963 | `gearSvg` | `function gearSvg(` |
| 4,971 | `thermoSvg` | `function thermoSvg(` |
| 4,974 | `trendUpSvg` | `function trendUpSvg(` |
| 4,976 | `ecgSvg` | `function ecgSvg(` |
| 4,978 | `circulationSvg` | `function circulationSvg(` |
| 4,979 | `weatherSvg` | `function weatherSvg(` |
| 4,987 | `moodSvg` | `function moodSvg(` |
| 4,991 | `boltSvg` | `function boltSvg(` |
| 4,992 | `houseSvg` | `function houseSvg(` |
| 4,995 | `sunriseSvg` | `function sunriseSvg(` |
| 4,999 | `umbrellaSvg` | `function umbrellaSvg(` |
| 5,003 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 5,009_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,010 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 5,011 | `dsrHistory` | `var dsrHistory =` |
| 5,012 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 5,013 | `savHistory` | `var savHistory =` |
| 5,016 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 5,025 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 5,026 | `dsrNow` | `var dsrNow =` |
| 5,027 | `savNow` | `var savNow =` |
| 5,028 | `DSR_MEAN` | `var DSR_MEAN =` |
| 5,029 | `householdsWord` | `function householdsWord(` |
| 5,036 | `householdsNow` | `var householdsNow =` |
| 5,037 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 5,038 | `dsrMeter` | `var dsrMeter =` |
| 5,041 | `savMeter` | `var savMeter =` |
| 5,044 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 5,061 | `savInfoHtml` | `function savInfoHtml(` |
| 5,079 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 5,086 | `curveNow` | `var curveNow =` |
| 5,087 | `curveTag` | `var curveTag =` |
| 5,088 | `curveSub` | `var curveSub =` |
| 5,089 | `curvePct` | `function curvePct(` |
| 5,090 | `curveNoteFull` | `var curveNoteFull =` |
| 5,105 | `curveDetailHtml` | `function curveDetailHtml(` |
| 5,109 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 5,115 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside

_line 5,143_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,144 | `marketTops` | `var marketTops =` |
| 5,154 | `marketTopsSrc` | `var marketTopsSrc =` |
| 5,157 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 5,159_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,160 | `typicalCycleYears` | `var typicalCycleYears =` |
| 5,161 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 5,166_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,167 | `slopeOf` | `function slopeOf(` |
| 5,172 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 5,173 | `readSeason` | `function readSeason(` |
| 5,192 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 5,193 | `qLabel` | `function qLabel(` |
| 5,208 | `regimeTrack` | `function regimeTrack(` |
| 5,228 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 5,230_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,231 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 5,232 | `seasonTitle` | `function seasonTitle(` |
| 5,233 | `monthLabel` | `function monthLabel(` |
| 5,234 | `cycleModel` | `function cycleModel(` |
| 5,271 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 5,279 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,285 | `nowModel` | `var nowModel =` |
| 5,286 | `readingNow` | `var readingNow =` |
| 5,287 | `cpiNow` | `var cpiNow =` |
| 5,288 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,289 | `currentSeason` | `var currentSeason =` |
| 5,290 | `seasonWhy` | `var seasonWhy =` |
| 5,292 | `seasonGroup` | `function seasonGroup(` |
| 5,294 | `arcGauge` | `function arcGauge(` |
| 5,328 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,339 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,340 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,341 | `spreadLabel` | `function spreadLabel(` |
| 5,345 | `policyFacts` | `function policyFacts(` |
| 5,352 | `policyFactRows` | `function policyFactRows(` |
| 5,358 | `allSources` | `var allSources =` |
| 5,372 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,384_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,385 | `SVG_NS` | `var SVG_NS =` |
| 5,386 | `svgEl` | `function svgEl(` |
| 5,391 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,425_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,426 | `clampPct` | `function clampPct(` |
| 5,428 | `infoIcon` | `function infoIcon(` |
| 5,433 | `detailTexts` | `var detailTexts =` |
| 5,434 | `detailSlots` | `var detailSlots =` |
| 5,435 | `detailSlot` | `function detailSlot(` |
| 5,445 | `powerPanelHtml` | `var powerPanelHtml =` |
| 5,446 | `_growthPanel` | `var _growthPanel =` |
| 5,447 | `growthPanelHtml` | `function growthPanelHtml(` |
| 5,453 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 5,461 | `facts` | `function facts(` |
| 5,462 | `factsFrom` | `function factsFrom(` |
| 5,466 | `expandBtn` | `function expandBtn(` |
| 5,470 | `sheetRenderers` | `var sheetRenderers =` |
| 5,471 | `pageMode` | `var pageMode =` |
| 5,476 | `pageCycles` | `var pageCycles =` |
| 5,481 | `pageRange` | `var pageRange =` |
| 5,487 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,516_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,519 | `meterHtml` | `function meterHtml(` |
| 5,543 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,544_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,545 | `subjectRow` | `function subjectRow(` |
| 5,555 | `subjectIcon` | `function subjectIcon(` |
| 5,556 | `srcHtml` | `function srcHtml(` |
| 5,557 | `TIMING` | `var TIMING =` |
| 5,563 | `timingMark` | `function timingMark(` |
| 5,571 | `timingPill` | `function timingPill(` |
| 5,580 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,588 | `seatPageFoot` | `function seatPageFoot(` |
| 5,600 | `timingMembers` | `var timingMembers =` |
| 5,601 | `registerTiming` | `function registerTiming(` |
| 5,603 | `headHtml` | `function headHtml(` |
| 5,611 | `heldHighlights` | `var heldHighlights =` |
| 5,612 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,640_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,641 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,642 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,650 | `withLatestPoint` | `function withLatestPoint(` |
| 5,655 | `pressureMaturities` | `function pressureMaturities(` |
| 5,679 | `registerFlowPages` | `function registerFlowPages(` |
| 5,738 | `renderPressureRow` | `function renderPressureRow(` |
| 5,746 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,960_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,961 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,998_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,999 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 6,165_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,166 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 6,192_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,193 | `drawHznHead` | `function drawHznHead(` |
| 6,208 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 6,270_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,271 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 6,285_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,286 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones

_line 6,307_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,308 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 6,407_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,408 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,481_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,482 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,545_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,546 | `totalRiseIn` | `function totalRiseIn(` |
| 6,556 | `eraInflation` | `function eraInflation(` |
| 6,567 | `eraGrowth` | `function eraGrowth(` |
| 6,583 | `fmtSigned` | `function fmtSigned(` |
| 6,584 | `regimeArrow` | `function regimeArrow(` |
| 6,585 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,586 | `growthShown` | `function growthShown(` |
| 6,587 | `growthShownCap` | `function growthShownCap(` |
| 6,588 | `regimeState` | `function regimeState(` |
| 6,589 | `phaseClass` | `function phaseClass(` |
| 6,590 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,595 | `cycleViewEl` | `var cycleViewEl =` |
| 6,596 | `tempCard` | `var tempCard =` |
| 6,597 | `placeCharts` | `function placeCharts(` |
| 6,602 | `shownEra` | `var shownEra =` |
| 6,603 | `calendarReset` | `var calendarReset =` |
| 6,604 | `metricPageReset` | `var metricPageReset =` |
| 6,605 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,606 | `topbarBack` | `var topbarBack =` |
| 6,607 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,614_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,615 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,696_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,697 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,715_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,716 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,737_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,739 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,740 | `hubSet` | `function hubSet(` |
| 6,751 | `quarterPopup` | `function quarterPopup(` |
| 6,774 | `hubShowDefault` | `function hubShowDefault(` |
| 6,782 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,788 | `hubShowYear` | `function hubShowYear(` |
| 6,798 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: the cycle's months, against the 2% target

_line 6,879_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,880 | `tempState` | `var tempState =` |
| 6,881 | `chartLink` | `var chartLink =` |
| 6,882 | `m2Step` | `function m2Step(` |
| 6,885 | `heatStep` | `function heatStep(` |
| 6,889 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 7,045_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,046 | `drawGrowth` | `function drawGrowth(` |
| 7,159 | `wireResize` | `function wireResize(` |
| 7,165 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 7,177_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,178 | `renderCycleView` | `function renderCycleView(` |
| 7,212 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws

_line 7,220_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,221 | `peerChosen` | `function peerChosen(` |
| 7,222 | `peerReaches` | `function peerReaches(` |
| 7,250 | `shownEraModel` | `var shownEraModel =` |
| 7,251 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 7,253_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,254 | `stripGroupName` | `var stripGroupName =` |
| 7,255 | `seasonStripHtml` | `function seasonStripHtml(` |
| 7,283 | `marketStripHtml` | `function marketStripHtml(` |
| 7,317 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 7,318 | `settleStrips` | `function settleStrips(` |
| 7,349 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 7,510_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,511 | `partsOf` | `function partsOf(` |
| 7,520 | `discOf` | `function discOf(` |
| 7,523 | `authored` | `function authored(` |
| 7,524 | `registerRoster` | `function registerRoster(` |
| 7,558 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER

_line 7,570_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,571 | `NAV` | `var NAV =` |
| 7,572 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,666_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,667 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories

_line 7,712_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,713 | `fmtDay` | `function fmtDay(` |
| 7,714 | `qPretty` | `function qPretty(` |
| 7,715 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,716 | `peekArt` | `function peekArt(` |
| 7,717 | `indPeriod` | `function indPeriod(` |
| 7,726 | `catItem` | `function catItem(` |
| 7,780 | `insightCirculation` | `function insightCirculation(` |
| 7,813 | `insightWeather` | `function insightWeather(` |
| 7,856 | `CAT_MINI` | `var CAT_MINI =` |
| 7,859 | `placeSignPair` | `function placeSignPair(` |
| 7,891 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,907 | `buildCategories` | `function buildCategories(` |
| 7,973 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 8,019_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,020 | `pct0` | `function pct0(` |
| 8,021 | `capeFmt1` | `function capeFmt1(` |
| 8,022 | `reserveState` | `function reserveState(` |
| 8,023 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 8,024 | `GDP_STOPS` | `var GDP_STOPS =` |
| 8,025 | `POWER_STOPS` | `var POWER_STOPS =` |
| 8,026 | `VAL_STOPS` | `var VAL_STOPS =` |
| 8,027 | `DEF_STOPS` | `var DEF_STOPS =` |
| 8,028 | `qShort` | `function qShort(` |
| 8,029 | `yoyPairs` | `function yoyPairs(` |
| 8,039 | `actCycleMonths` | `function actCycleMonths(` |
| 8,047 | `householdsHighlights` | `function householdsHighlights(` |
| 8,066 | `redrawSheet` | `function redrawSheet(` |
| 8,070 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 8,137 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 8,201 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 8,252 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 8,282 | `powerHighlights` | `function powerHighlights(` |
| 8,302 | `valuationHighlights` | `function valuationHighlights(` |
| 8,324 | `tempHighlights` | `function tempHighlights(` |
| 8,341 | `gdpHighlights` | `function gdpHighlights(` |
| 8,356 | `renderMetricPages` | `function renderMetricPages(` |
| 8,369 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 8,382_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,383 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories

_line 8,448_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,449 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES

_line 8,482_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,483 | `__roster` | `var __roster =` |
| 8,484 | `readingRoster` | `function readingRoster(` |
| 8,527 | `readFig` | `function readFig(` |
| 8,532 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top

_line 8,539_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,540 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 8,593_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,594 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 8,643_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,644 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,675_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,676 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 2,224–2,227 | `LIVE_CACHE` | Live data without a render refactor |
| 4,740–4,753 | `horizonRead` | The inner pages' chart (kept for nothing — see above) |
| 5,194–5,207 | `seasonTrackAll` | The season, computed |
| 5,223–5,227 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 8,182 |
| `desire-range` | 5,730 |
| `fear-range` | 6,452 |
| `hormones-range` | 6,340 |
| `hzn-range` | 6,233 |
| `pressure-range` | 2,292 |
| `pulse-range` | 5,697 |
| `sheet-marker-deficit` | 8,179 |
| `sheet-metric-gdp` | 8,097 |
| `sheet-metric-households` | 8,203 |
| `sheet-metric-power` | 8,154 |
| `sheet-metric-temp` | 8,071 |
| `sheet-metric-valuation` | 8,224 |
| `sheet-sign-activity` | 8,139 |
| `sheet-sign-desire` | 5,731 |
| `sheet-sign-horizon` | 6,234 |
| `sheet-sign-hormones` | 6,341 |
| `sheet-sign-pressure` | 5,952 |
| `sheet-sign-pulse` | 5,696 |
| `sheet-sign-sentiment` | 6,453 |
| `sheet-sign-volume` | 5,714 |
| `volume-range` | 5,715 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 8,186 |
| `desire-range` | 5,719 |
| `fear-range` | 6,420 |
| `hzn-range` | 6,218 |
| `pressure-range` | 5,921 |
| `pulse-range` | 5,683 |
| `sheet-metric-gdp` | 8,098 |
| `sheet-metric-power` | 8,155 |
| `sheet-metric-temp` | 8,072 |
| `sheet-metric-valuation` | 8,225 |
| `volume-range` | 5,701 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,379 |
| `sheet-metric-gdp` | 3,380 |
| `sheet-sign-activity` | 3,381 |
| `sheet-metric-power` | 3,382 |
| `sheet-metric-valuation` | 3,384 |
| `sheet-metric-households` | 3,385 |
| `deficit-range` | 3,386 |
| `volume-range` | 3,387 |
| `pulse-range` | 3,388 |
| `hzn-range` | 3,389 |
| `desire-range` | 3,390 |
| `fear-range` | 3,391 |
| `hormones-range` | 3,392 |
| `pressure-range` | 3,393 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 158 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 247 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 285 | season strip |
| 312 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 379 | tab bar (app-style segmented navigation) |
| 414 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 430 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 524 | journal (editorial content tab) |
| 530 | content tab: reading companion |
| 579 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 792 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 807 | the reading, after the blood-panel design Keren sent: title, then the figure, flagged in |
| 811 | the panel bar. Keren, V479: "if there's a normal range, I would want to see it in a consistent |
| 817 | one row, as the panel Keren sent lays a marker out: name and figure on the left, the spectrum |
| 827 | the reading's own container, below the history (Keren, V520). `seatBandReading` moves whatever the page |
| 928 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 1,003 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,216 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,235 | Rhymes: today beside one past top |
| 1,260 | A closed cycle's categories |
| 1,281 | hero: yield curve |
| 1,314 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,333 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,358 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,366 | long cycle (structural layer) |
| 1,380 | indicator grid |
| 1,406 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 1,420 | info icon + popover (progressive disclosure for longer notes) |
| 1,434 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,517 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (145), which is what the renderers fill:

| Line | id |
|---|---|
| 1,533 | `topbar-back` |
| 1,536 | `topbar-title` |
| 1,537 | `menu-btn` |
| 1,551 | `main` |
| 1,554 | `cycle-view` |
| 1,557 | `cycle-kicker` |
| 1,560 | `cycle-dial` |
| 1,562 | `season-wheel-hub-date` |
| 1,563 | `season-wheel-hub-theme` |
| 1,564 | `season-wheel-hub-detail` |
| 1,570 | `temp-card` |
| 1,572 | `temp-kicker` |
| 1,573 | `temp-sub` |
| 1,576 | `temp-svg` |
| 1,577 | `temp-tooltip` |
| 1,579 | `temp-stats` |
| 1,582 | `growth-card` |
| 1,583 | `growth-kicker` |
| 1,583 | `growth-phase` |
| 1,583 | `growth-sub` |
| 1,584 | `growth-svg` |
| 1,584 | `growth-tooltip` |
| 1,585 | `growth-stats` |
| 1,590 | `today-analysis` |
| 1,591 | `peek-row` |
| 1,592 | `sheet-metric-temp` |
| 1,593 | `temp-timing` |
| 1,594 | `temp-chart` |
| 1,595 | `temp-rangebar` |
| 1,597 | `temp-head` |
| 1,598 | `slot-temp` |
| 1,599 | `temp-history` |
| 1,600 | `temp-hist-tooltip` |
| 1,601 | `temp-trend` |
| 1,603 | `temp-highlights` |
| 1,605 | `sheet-metric-gdp` |
| 1,606 | `gdp-timing` |
| 1,607 | `gdp-chart` |
| 1,608 | `gdp-rangebar` |
| 1,610 | `gdp-head` |
| 1,611 | `slot-growth` |
| 1,612 | `gdp-history` |
| 1,613 | `gdp-hist-tooltip` |
| 1,614 | `gdp-yoy` |
| 1,615 | `gdp-trend` |
| 1,616 | `gdp-panel` |
| 1,620 | `subj-ring-gdp` |
| 1,622 | `subj-label-gdp` |
| 1,623 | `subj-value-gdp` |
| 1,624 | `subj-say-gdp` |
| 1,625 | `subj-spark-gdp` |
| 1,630 | `subj-ctx-gdp` |
| 1,633 | `gdp-highlights` |
| 1,636 | `sheet-metric-power` |
| 1,637 | `power-timing` |
| 1,638 | `power-head` |
| 1,639 | `power-chart` |
| 1,642 | `subj-ring-resilience` |
| 1,645 | `subj-value-resilience` |
| 1,646 | `subj-say-resilience` |
| 1,651 | `subj-ctx-resilience` |
| 1,655 | `longcycle-title` |
| 1,657 | `longcycle-tag` |
| 1,663 | `power-highlights` |
| 1,666 | `sheet-marker-deficit` |
| 1,668 | `sheet-metric-households` |
| 1,669 | `households-timing` |
| 1,670 | `households-chart` |
| 1,671 | `households-highlights` |
| 1,674 | `sheet-metric-valuation` |
| 1,675 | `valuation-timing` |
| 1,676 | `valuation-head` |
| 1,677 | `valuation-chart` |
| 1,680 | `subj-ring-valuation` |
| 1,683 | `subj-value-valuation` |
| 1,684 | `subj-say-valuation` |
| 1,689 | `subj-ctx-valuation` |
| 1,693 | `valuation-title` |
| 1,695 | `valuation-tag` |
| 1,700 | `valuation-highlights` |
| 1,707 | `subj-value-hormones` |
| 1,708 | `subj-say-hormones` |
| 1,714 | `hormones-history` |
| 1,715 | `hormones-insights` |
| 1,724 | `subj-value-horizon` |
| 1,725 | `subj-say-horizon` |
| 1,726 | `subj-spark-horizon` |
| 1,732 | `hzn-timeline` |
| 1,734 | `hzn-head` |
| 1,735 | `spread-history-shell` |
| 1,736 | `spread-history-svg` |
| 1,737 | `spread-history-tooltip` |
| 1,739 | `hzn-trend` |
| 1,741 | `horizon-insights` |
| 1,750 | `subj-value-pressure` |
| 1,751 | `subj-say-pressure` |
| 1,757 | `pressure-timeline` |
| 1,759 | `pressure-head` |
| 1,760 | `ylm-shell` |
| 1,761 | `ylm-svg` |
| 1,762 | `ylm-tooltip` |
| 1,764 | `ylm-trend` |
| 1,766 | `pressure-insights` |
| 1,773 | `subj-ring-sentiment` |
| 1,776 | `subj-value-sentiment` |
| 1,777 | `subj-say-sentiment` |
| 1,778 | `subj-spark-sentiment` |
| 1,784 | `fear-history` |
| 1,785 | `curve-highlights` |
| 1,791 | `signs-list` |
| 1,797 | `calendar-list` |
| 1,798 | `rhymes-card` |
| 1,807 | `rhy-pick` |
| 1,808 | `rhy-body` |
| 1,816 | `cycle-list` |
| 1,817 | `cycle-more` |
| 1,818 | `cycle-more-label` |
| 1,823 | `calendar-cycle` |
| 1,824 | `calendar-cycle-slot` |
| 1,825 | `cycle-cats` |
| 1,858 | `seasons-kicker` |
| 1,859 | `seasons-rows` |
| 1,863 | `framework-kicker` |
| 1,865 | `framework-rows` |
| 1,870 | `more-menu` |
| 1,873 | `menu-back` |
| 1,887 | `sources-open` |
| 1,895 | `appearance-current` |
| 1,901 | `sheet-howto` |
| 1,944 | `sheet-book` |
| 1,972 | `sheet-appearance` |
| 1,980 | `theme-toggle` |
| 1,987 | `sheet-contact` |
| 1,996 | `contact-form` |
| 1,997 | `contact-title` |
| 1,998 | `contact-message` |
| 2,000 | `contact-hint` |
| 2,001 | `contact-send` |
| 2,007 | `sheet-sources` |
| 2,010 | `sources-back` |
| 2,015 | `asof-text` |
| 2,016 | `sources-groups` |
| 2,022 | `detail-backdrop` |
| 2,024 | `detail-modal-close` |
| 2,025 | `detail-modal-body` |

## Finding things fast

| To find | grep for |
|---|---|
| a figure's literal value | `var <name> = ` — the data objects are all top-level vars in the DATA section |
| what a history page draws | `HIST_HEAD` for its head, then `sheetRenderers["<id>"]` for its renderer |
| where a band comes from | the constant name, then read its `(i)` text — every band states its provenance |
| a season decision | `readSeason(`, `seasonTrackAll`, `cycleModel(` |
| why something looks the way it does | `docs/DECISIONS.md` for Keren's decisions, `docs/ARCHITECTURE.md` for the reasons, `git log -S` for the history |
| a live-data wiring | `LIVE("` — one line per document, each directly under its literal |
| a CSS rule's only home | the class name; rules under `.detail-modal`, `.metric-sheet`, `.sign-detail` are scoped and must be restated for a new host |

