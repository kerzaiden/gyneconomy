# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **9,028 lines**, about 645 KB, roughly **183 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `4dfbc57` on 2026-09-30.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,572 | the whole stylesheet, every token and rule |
| **Markup** | 1,573–2,069 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 2,070–8,995 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,996–9,028 | </body></html> |

Counts: **359** top-level functions, **195** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 2,070_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,072 | `byId` | `function byId(` |
| 2,080 | `byIdMaybe` | `function byIdMaybe(` |
| 2,081 | `put` | `function put(` |
| 2,086 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 2,088_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,089 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 2,090 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 2,091 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 2,092 | `hubTodayHtml` | `function hubTodayHtml(` |
| 2,096 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 2,101_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,102 | `wheelMeta` | `var wheelMeta =` |
| 2,110 | `seasonOverride` | `var seasonOverride =` |
| 2,111 | `cycleNowNote` | `var cycleNowNote =` |
| 2,113 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 2,191 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 2,232 | `gdpLevels` | `var gdpLevels =` |
| 2,241 | `fedFundsHistory` | `var fedFundsHistory =` |
| 2,242 | `fearCurveHistory` | `var fearCurveHistory =` |
| 2,244 | `fiscalHistory` | `var fiscalHistory =` |
| 2,250 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 2,252 | `treasuryQuarterly` | `var treasuryQuarterly =` |

### Live data without a render refactor

_line 2,262_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,267 | `merge` | `function merge(` |
| 2,274 | `LIVE` | `function LIVE(` |
| 2,288 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,291_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,293 | `paintReading` | `function paintReading(` |
| 2,310 | `repaintFearCurve` | `function repaintFearCurve(` |
| 2,316 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,324 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,329 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,333 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,338_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,339 | `READINGS` | `var READINGS =` |
| 2,395 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,396 | `KINDS` | `var KINDS =` |
| 2,397 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,411 | `receive` | `function receive(` |
| 2,427 | `liveAsOf` | `var liveAsOf =` |
| 2,428 | `fmtAsOf` | `function fmtAsOf(` |
| 2,433 | `applyLive` | `function applyLive(` |
| 2,446 | `shapeOk` | `function shapeOk(` |
| 2,453 | `repaintPolicy` | `function repaintPolicy(` |
| 2,459 | `GYN` | `var GYN =` |
| 2,486 | `refreshLiveData` | `function refreshLiveData(` |
| 2,504 | `fetchSiteData` | `function fetchSiteData(` |
| 2,520 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,525_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,526 | `yieldCurve` | `var yieldCurve =` |
| 2,532 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,533 | `curveAsOf` | `function curveAsOf(` |
| 2,538 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,539 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,544 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,546_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,547 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,548 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,549 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,550 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,551 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,553_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,554 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,560 | `uninvLagToday` | `var uninvLagToday =` |
| 2,565 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,571 | `gdpPeers` | `var gdpPeers =` |
| 2,612 | `gdpSrc` | `var gdpSrc =` |
| 2,613 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,618 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 2,620 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,649_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,651 | `productivityReading` | `var productivityReading =` |

### Institutional trust is not in this panel

_line 2,660_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,662 | `stressScoreFor` | `function stressScoreFor(` |
| 2,668 | `stressScore` | `var stressScore =` |
| 2,669 | `powerOf` | `var powerOf =` |
| 2,670 | `powerScore` | `var powerScore =` |
| 2,672 | `stressHistory` | `var stressHistory =` |
| 2,678 | `powerMeter` | `var powerMeter =` |
| 2,680 | `stressNoteFull` | `var stressNoteFull =` |
| 2,682 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year

_line 2,684_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,685 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,686 | `deficitHistory` | `var deficitHistory =` |
| 2,689 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,690 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,692 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,701_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,702 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,712_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,713 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,716 | `timelineSpan` | `function timelineSpan(` |
| 2,721 | `timelineFor` | `function timelineFor(` |
| 2,732 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,738_ · 32 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,739 | `windowScale` | `function windowScale(` |
| 2,754 | `windowYears` | `function windowYears(` |
| 2,762 | `refName` | `function refName(` |
| 2,766 | `histReadEnsure` | `function histReadEnsure(` |
| 2,787 | `seatBandReading` | `function seatBandReading(` |
| 2,803 | `histReadFill` | `function histReadFill(` |
| 2,853 | `histAxisEnds` | `function histAxisEnds(` |
| 2,864 | `histLegend` | `function histLegend(` |
| 2,924 | `refitHistory` | `function refitHistory(` |
| 2,934 | `wireHistHover` | `function wireHistHover(` |
| 2,971 | `mWindowFrom` | `function mWindowFrom(` |
| 2,975 | `qWindowFrom` | `function qWindowFrom(` |
| 2,979 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,980 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,982 | `DEF_1983` | `var DEF_1983 =` |
| 2,983 | `defFrom` | `function defFrom(` |
| 2,988 | `deficitChart` | `function deficitChart(` |
| 3,056 | `deficitBlock` | `function deficitBlock(` |
| 3,096 | `buffettHistory` | `var buffettHistory =` |
| 3,098 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 3,099 | `hyDates` | `var hyDates =` |
| 3,100 | `hyOas` | `var hyOas =` |
| 3,101 | `checkDesireWindow` | `function checkDesireWindow(` |
| 3,108 | `hyAt` | `function hyAt(` |
| 3,112 | `hyLabel` | `function hyLabel(` |
| 3,113 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 3,114 | `hyNum` | `function hyNum(` |
| 3,115 | `hyWindowFrom` | `function hyWindowFrom(` |
| 3,123 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 3,133 | `capeHistory` | `var capeHistory =` |
| 3,135 | `longCycleSrc` | `var longCycleSrc =` |
| 3,151 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 3,170_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,171 | `sentiment` | `var sentiment =` |
| 3,187 | `valuation` | `var valuation =` |
| 3,208 | `valRow` | `function valRow(` |
| 3,213 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 3,216 | `coincident` | `var coincident =` |
| 3,261 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 3,267 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 3,268 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 3,269 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 3,271_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,272 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 3,273 | `m2vHistory` | `var m2vHistory =` |
| 3,289 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,343 | `desireHistoryChart` | `function desireHistoryChart(` |
| 3,383 | `PBAR_GAP` | `var PBAR_GAP =` |
| 3,384 | `panelBar` | `function panelBar(` |

### the history card's head

_line 3,415_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,416 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,417 | `DOTS` | `var DOTS =` |
| 3,419 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,436 | `headPickRow` | `function headPickRow(` |
| 3,442 | `histHead` | `function histHead(` |
| 3,457 | `headNoteIdx` | `var headNoteIdx =` |
| 3,458 | `headMenuHtml` | `function headMenuHtml(` |
| 3,483 | `headMenuFor` | `var headMenuFor =` |
| 3,484 | `headSubFor` | `var headSubFor =` |
| 3,485 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,516 | `nameWithMark` | `function nameWithMark(` |
| 3,522 | `panelRow` | `function panelRow(` |
| 3,535 | `panelFromMeter` | `function panelFromMeter(` |
| 3,543 | `meterFlagged` | `function meterFlagged(` |
| 3,550 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,573 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,587 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,600 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,619 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,633 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,652 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,683 | `desireBlock` | `function desireBlock(` |
| 3,695 | `volumeBlock` | `function volumeBlock(` |
| 3,708 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,724 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,731_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,732 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,733 | `m2Level` | `var m2Level =` |
| 3,754 | `m2Yoy` | `var m2Yoy =` |
| 3,755 | `M2_NORM` | `var M2_NORM =` |
| 3,757 | `volumeVerdict` | `function volumeVerdict(` |
| 3,765 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,766 | `unempHistory` | `var unempHistory =` |
| 3,772 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,781 | `NROU_NOW` | `var NROU_NOW =` |
| 3,782 | `unempState` | `function unempState(` |
| 3,788 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,842_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,843 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,852 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,910 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,911 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,912 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,913_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,915 | `householdsChart` | `function householdsChart(` |
| 3,964 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 4,019 | `GDP_NORM` | `var GDP_NORM =` |
| 4,020 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 4,021 | `gdpNowQ` | `var gdpNowQ =` |
| 4,022 | `gdpMeter` | `var gdpMeter =` |
| 4,025 | `growthInfoHtml` | `function growthInfoHtml(` |
| 4,047 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 4,100 | `m2GrowthChart` | `function m2GrowthChart(` |
| 4,147 | `checkMoneyStock` | `function checkMoneyStock(` |
| 4,155 | `velocityVerdict` | `function velocityVerdict(` |
| 4,163 | `derivePulseTag` | `function derivePulseTag(` |
| 4,169 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 4,199_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,200 | `seasonReading` | `var seasonReading =` |
| 4,244 | `frameworkRows` | `var frameworkRows =` |
| 4,254 | `vixRow` | `var vixRow =` |
| 4,255 | `vixWordOf` | `var vixWordOf =` |
| 4,259 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 4,269_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,270 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 4,279_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,280 | `calendarTodayY` | `var calendarTodayY =` |
| 4,282 | `vix3mClose` | `var vix3mClose =` |
| 4,283 | `fearCurve` | `function fearCurve(` |
| 4,288 | `curveVerdict` | `function curveVerdict(` |
| 4,293 | `valuationVerdict` | `function valuationVerdict(` |
| 4,301 | `sparkHtml` | `function sparkHtml(` |
| 4,320 | `lastN` | `function lastN(` |

### The range bar

_line 4,322_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,323 | `modeBar` | `function modeBar(` |
| 4,330 | `pickerOpen` | `var pickerOpen =` |
| 4,331 | `cycleByName` | `function cycleByName(` |
| 4,335 | `openCycle` | `function openCycle(` |
| 4,339 | `cycleSlice` | `function cycleSlice(` |
| 4,347 | `totalGrowthYears` | `function totalGrowthYears(` |
| 4,355 | `cycleMonths` | `function cycleMonths(` |
| 4,363 | `histControls` | `function histControls(` |
| 4,372 | `cycLabel` | `function cycLabel(` |
| 4,376 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 4,381 | `cyclePicker` | `function cyclePicker(` |
| 4,400 | `rangeBar` | `function rangeBar(` |
| 4,407 | `trendOf` | `function trendOf(` |
| 4,422 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,426 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,437_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,438 | `yearOf` | `function yearOf(` |
| 4,439 | `mean` | `function mean(` |

### The record rows

_line 4,440_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,441 | `headSigma` | `function headSigma(` |
| 4,446 | `atQuarter` | `function atQuarter(` |
| 4,447 | `atMonth` | `function atMonth(` |
| 4,448 | `cycleAverages` | `function cycleAverages(` |
| 4,455 | `ordinal` | `function ordinal(` |
| 4,456 | `hiCard` | `function hiCard(` |
| 4,459 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component

_line 4,473_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,474 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 4,480 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,487 | `moreRow` | `function moreRow(` |
| 4,493 | `powerPageNote` | `var powerPageNote =` |
| 4,494 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,500_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,501 | `xLabelOf` | `function xLabelOf(` |
| 4,511 | `fitGroup` | `function fitGroup(` |
| 4,528 | `reserveChart` | `function reserveChart(` |

### The history component's axes

_line 4,562_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,563 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,571 | `vGrid` | `function vGrid(` |
| 4,575 | `COL_FILL` | `var COL_FILL =` |
| 4,576 | `colPath` | `function colPath(` |
| 4,581 | `colWidth` | `function colWidth(` |
| 4,586 | `AXIS` | `var AXIS =` |
| 4,587 | `histFrame` | `function histFrame(` |
| 4,594 | `xLabel` | `function xLabel(` |
| 4,597 | `crossLine` | `function crossLine(` |
| 4,600 | `zeroRule` | `function zeroRule(` |
| 4,603 | `meanRule` | `function meanRule(` |
| 4,604 | `pendingGeom` | `var pendingGeom =` |
| 4,605 | `publishGeom` | `function publishGeom(` |
| 4,606 | `attachHistory` | `function attachHistory(` |
| 4,615 | `histBar` | `function histBar(` |
| 4,618 | `histTip` | `function histTip(` |
| 4,619 | `avgRule` | `function avgRule(` |
| 4,622 | `vhOpen` | `function vhOpen(` |
| 4,623 | `chartAxes` | `function chartAxes(` |
| 4,653 | `divergeChart` | `function divergeChart(` |
| 4,687 | `pairChart` | `function pairChart(` |

### The inner pages' chart (kept for nothing — see above)

_line 4,715_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,717 | `maxIn` | `function maxIn(` |
| 4,722 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,723 | `PEEK_W` | `var PEEK_W =` |
| 4,724 | `PEEK_H` | `var PEEK_H =` |
| 4,725 | `colPeek` | `function colPeek(` |
| 4,743 | `meterPeek` | `function meterPeek(` |
| 4,760 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,765 | `pressureZone` | `function pressureZone(` |
| 4,771 | `HZN_BACK` | `var HZN_BACK =` |
| 4,772 | `hznLast` | `function hznLast(` |
| 4,773 | `hznBack` | `function hznBack(` |
| 4,774 | `horizonWord` | `function horizonWord(` |
| 4,794 | `HZN_METERS` | `var HZN_METERS =` |
| 4,802 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,823 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,828 | `RISK_RISK` | `var RISK_RISK =` |
| 4,833 | `riskCell` | `function riskCell(` |
| 4,834 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,864 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,889_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,890 | `pulseClipN` | `var pulseClipN =` |
| 4,891 | `beatPath` | `function beatPath(` |
| 4,908 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,922 | `pulsePeek` | `function pulsePeek(` |
| 4,925 | `pulseBlock` | `function pulseBlock(` |
| 4,942 | `CHEV` | `var CHEV =` |
| 4,943 | `peekCard` | `function peekCard(` |
| 4,962 | `dropSvg` | `function dropSvg(` |
| 4,964 | `volumeSvg` | `function volumeSvg(` |
| 4,968 | `gaugeSvg` | `function gaugeSvg(` |
| 4,972 | `diamondSvg` | `function diamondSvg(` |
| 4,976 | `energyFromReserve` | `function energyFromReserve(` |
| 4,984 | `sproutSvg` | `function sproutSvg(` |
| 4,992 | `markSvg` | `function markSvg(` |
| 4,995 | `hormoneSvg` | `function hormoneSvg(` |
| 5,000 | `flameSvg` | `function flameSvg(` |
| 5,003 | `gearSvg` | `function gearSvg(` |
| 5,011 | `thermoSvg` | `function thermoSvg(` |
| 5,014 | `trendUpSvg` | `function trendUpSvg(` |
| 5,016 | `ecgSvg` | `function ecgSvg(` |
| 5,018 | `circulationSvg` | `function circulationSvg(` |
| 5,019 | `weatherSvg` | `function weatherSvg(` |
| 5,027 | `moodSvg` | `function moodSvg(` |
| 5,031 | `boltSvg` | `function boltSvg(` |
| 5,032 | `houseSvg` | `function houseSvg(` |
| 5,035 | `sunriseSvg` | `function sunriseSvg(` |
| 5,039 | `umbrellaSvg` | `function umbrellaSvg(` |
| 5,043 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 5,049_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,050 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 5,051 | `dsrHistory` | `var dsrHistory =` |
| 5,052 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 5,053 | `savHistory` | `var savHistory =` |
| 5,056 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 5,065 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 5,066 | `dsrNow` | `var dsrNow =` |
| 5,067 | `savNow` | `var savNow =` |
| 5,068 | `DSR_MEAN` | `var DSR_MEAN =` |
| 5,069 | `householdsWord` | `function householdsWord(` |
| 5,076 | `householdsNow` | `var householdsNow =` |
| 5,077 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 5,078 | `dsrMeter` | `var dsrMeter =` |
| 5,081 | `savMeter` | `var savMeter =` |
| 5,084 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 5,101 | `savInfoHtml` | `function savInfoHtml(` |
| 5,119 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 5,126 | `curveNow` | `var curveNow =` |
| 5,127 | `curveTag` | `var curveTag =` |
| 5,128 | `curveSub` | `var curveSub =` |
| 5,129 | `curvePct` | `function curvePct(` |
| 5,130 | `curveNoteFull` | `var curveNoteFull =` |
| 5,145 | `curveDetailHtml` | `function curveDetailHtml(` |
| 5,149 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 5,155 | `marketCycles` | `var marketCycles =` |
| 5,183 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 5,185_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,186 | `typicalCycleYears` | `var typicalCycleYears =` |
| 5,187 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 5,192_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,193 | `slopeOf` | `function slopeOf(` |
| 5,198 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 5,199 | `readSeason` | `function readSeason(` |
| 5,218 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 5,219 | `qLabel` | `function qLabel(` |
| 5,234 | `regimeTrack` | `function regimeTrack(` |
| 5,254 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 5,256_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,257 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 5,258 | `seasonTitle` | `function seasonTitle(` |
| 5,259 | `monthLabel` | `function monthLabel(` |
| 5,260 | `cycleModel` | `function cycleModel(` |
| 5,297 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 5,305 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,311 | `nowModel` | `var nowModel =` |
| 5,312 | `readingNow` | `var readingNow =` |
| 5,313 | `cpiNow` | `var cpiNow =` |
| 5,314 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,315 | `currentSeason` | `var currentSeason =` |
| 5,316 | `seasonWhy` | `var seasonWhy =` |
| 5,318 | `seasonGroup` | `function seasonGroup(` |
| 5,320 | `arcGauge` | `function arcGauge(` |
| 5,354 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,365 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,366 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,367 | `spreadLabel` | `function spreadLabel(` |
| 5,371 | `policyFacts` | `function policyFacts(` |
| 5,378 | `policyFactRows` | `function policyFactRows(` |
| 5,384 | `allSources` | `var allSources =` |
| 5,398 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,410_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,411 | `SVG_NS` | `var SVG_NS =` |
| 5,412 | `svgEl` | `function svgEl(` |
| 5,417 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,451_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,452 | `clampPct` | `function clampPct(` |
| 5,454 | `infoIcon` | `function infoIcon(` |
| 5,459 | `detailTexts` | `var detailTexts =` |
| 5,460 | `detailSlots` | `var detailSlots =` |
| 5,461 | `detailSlot` | `function detailSlot(` |
| 5,471 | `powerPanelHtml` | `var powerPanelHtml =` |
| 5,472 | `_growthPanel` | `var _growthPanel =` |
| 5,473 | `growthPanelHtml` | `function growthPanelHtml(` |
| 5,479 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 5,487 | `facts` | `function facts(` |
| 5,488 | `factsFrom` | `function factsFrom(` |
| 5,492 | `expandBtn` | `function expandBtn(` |
| 5,496 | `sheetRenderers` | `var sheetRenderers =` |
| 5,497 | `pageMode` | `var pageMode =` |
| 5,502 | `pageCycles` | `var pageCycles =` |
| 5,507 | `pageRange` | `var pageRange =` |
| 5,513 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,542_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,545 | `meterHtml` | `function meterHtml(` |
| 5,569 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,570_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,571 | `subjectRow` | `function subjectRow(` |
| 5,581 | `subjectIcon` | `function subjectIcon(` |
| 5,582 | `srcHtml` | `function srcHtml(` |
| 5,583 | `TIMING` | `var TIMING =` |
| 5,589 | `timingMark` | `function timingMark(` |
| 5,597 | `timingPill` | `function timingPill(` |
| 5,606 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,614 | `seatPageFoot` | `function seatPageFoot(` |
| 5,626 | `timingMembers` | `var timingMembers =` |
| 5,627 | `registerTiming` | `function registerTiming(` |
| 5,629 | `headHtml` | `function headHtml(` |
| 5,637 | `heldHighlights` | `var heldHighlights =` |
| 5,638 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,666_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,667 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,668 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,676 | `withLatestPoint` | `function withLatestPoint(` |
| 5,681 | `pressureMaturities` | `function pressureMaturities(` |
| 5,705 | `registerFlowPages` | `function registerFlowPages(` |
| 5,764 | `renderPressureRow` | `function renderPressureRow(` |
| 5,772 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,791 | `ylmColumns` | `function ylmColumns(` |
| 5,811 | `ylmFitLine` | `function ylmFitLine(` |
| 5,823 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,969_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,970 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 6,007_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,008 | `spreadSeries` | `function spreadSeries(` |
| 6,052 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 6,177_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,178 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 6,204_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,205 | `drawHznHead` | `function drawHznHead(` |
| 6,220 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 6,282_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,283 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 6,298_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,299 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones

_line 6,320_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,321 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 6,420_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,421 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,494_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,495 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,558_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,559 | `totalRiseIn` | `function totalRiseIn(` |
| 6,569 | `eraInflation` | `function eraInflation(` |
| 6,580 | `eraGrowth` | `function eraGrowth(` |
| 6,596 | `fmtSigned` | `function fmtSigned(` |
| 6,597 | `regimeArrow` | `function regimeArrow(` |
| 6,598 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,599 | `growthShown` | `function growthShown(` |
| 6,600 | `growthShownCap` | `function growthShownCap(` |
| 6,601 | `regimeState` | `function regimeState(` |
| 6,602 | `phaseClass` | `function phaseClass(` |
| 6,603 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,608 | `cycleViewEl` | `var cycleViewEl =` |
| 6,609 | `tempCard` | `var tempCard =` |
| 6,610 | `placeCharts` | `function placeCharts(` |
| 6,615 | `shownEra` | `var shownEra =` |
| 6,616 | `calendarReset` | `var calendarReset =` |
| 6,617 | `metricPageReset` | `var metricPageReset =` |
| 6,618 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,619 | `topbarBack` | `var topbarBack =` |
| 6,620 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,627_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,628 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,709_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,710 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,728_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,729 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,750_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,752 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,753 | `hubSet` | `function hubSet(` |
| 6,764 | `quarterPopup` | `function quarterPopup(` |
| 6,787 | `hubShowDefault` | `function hubShowDefault(` |
| 6,795 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,801 | `hubShowYear` | `function hubShowYear(` |
| 6,811 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: the cycle's months, against the 2% target

_line 6,892_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,893 | `tempState` | `var tempState =` |
| 6,894 | `chartLink` | `var chartLink =` |
| 6,895 | `m2Step` | `function m2Step(` |
| 6,898 | `heatStep` | `function heatStep(` |
| 6,902 | `drawTempFit` | `function drawTempFit(` |
| 6,917 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 7,059_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,060 | `drawGrowth` | `function drawGrowth(` |
| 7,173 | `wireResize` | `function wireResize(` |
| 7,179 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 7,191_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,192 | `renderCycleView` | `function renderCycleView(` |
| 7,226 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws

_line 7,234_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,235 | `peerChosen` | `function peerChosen(` |
| 7,236 | `peerReaches` | `function peerReaches(` |
| 7,264 | `shownEraModel` | `var shownEraModel =` |
| 7,265 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 7,267_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,268 | `stripGroupName` | `var stripGroupName =` |
| 7,269 | `seasonStripHtml` | `function seasonStripHtml(` |
| 7,297 | `marketStripHtml` | `function marketStripHtml(` |
| 7,331 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 7,332 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 7,361_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,362 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 7,368 | `INDICATOR_GROUP` | `var INDICATOR_GROUP =` |
| 7,373 | `SPLIT_PERIOD` | `var SPLIT_PERIOD =` |
| 7,374 | `debtSvg` | `function debtSvg(` |
| 7,375 | `interestSvg` | `function interestSvg(` |
| 7,377 | `budgetSvg` | `function budgetSvg(` |
| 7,379 | `lede` | `function lede(` |
| 7,380 | `periodOf` | `function periodOf(` |
| 7,381 | `qLast` | `function qLast(` |
| 7,382 | `meterWord` | `function meterWord(` |
| 7,383 | `splitSpecs` | `function splitSpecs(` |
| 7,403 | `splitInfo` | `function splitInfo(` |
| 7,407 | `quarterTicks` | `function quarterTicks(` |
| 7,412 | `drawSplit` | `function drawSplit(` |
| 7,431 | `mountSplit` | `function mountSplit(` |
| 7,447 | `splitPeek` | `function splitPeek(` |
| 7,455 | `indicatorPeeks` | `function indicatorPeeks(` |
| 7,465 | `appendPicks` | `function appendPicks(` |
| 7,474 | `categoryCats` | `function categoryCats(` |

### The split indicators' insights

_line 7,492_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,493 | `buffettInsight` | `function buffettInsight(` |
| 7,508 | `debtInsight` | `function debtInsight(` |
| 7,523 | `interestInsight` | `function interestInsight(` |
| 7,538 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 7,569 | `orderMetricSheets` | `function orderMetricSheets(` |
| 7,594 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 7,704_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,705 | `partsOf` | `function partsOf(` |
| 7,714 | `discOf` | `function discOf(` |
| 7,717 | `authored` | `function authored(` |
| 7,718 | `registerRoster` | `function registerRoster(` |
| 7,752 | `indRow` | `function indRow(` |
| 7,756 | `IND_ORDER` | `var IND_ORDER =` |
| 7,757 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 7,773_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,774 | `NAV` | `var NAV =` |
| 7,775 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,869_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,870 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,918_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,919 | `fmtDay` | `function fmtDay(` |
| 7,920 | `qPretty` | `function qPretty(` |
| 7,921 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,922 | `peekArt` | `function peekArt(` |
| 7,923 | `indPeriod` | `function indPeriod(` |
| 7,932 | `catItem` | `function catItem(` |
| 7,986 | `insightCirculation` | `function insightCirculation(` |
| 8,019 | `insightWeather` | `function insightWeather(` |
| 8,062 | `CAT_MINI` | `var CAT_MINI =` |
| 8,065 | `placeSignPair` | `function placeSignPair(` |
| 8,097 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 8,113 | `buildCategories` | `function buildCategories(` |
| 8,157 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 8,203_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,204 | `pct0` | `function pct0(` |
| 8,205 | `capeFmt1` | `function capeFmt1(` |
| 8,206 | `reserveState` | `function reserveState(` |
| 8,207 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 8,208 | `GDP_STOPS` | `var GDP_STOPS =` |
| 8,209 | `POWER_STOPS` | `var POWER_STOPS =` |
| 8,210 | `VAL_STOPS` | `var VAL_STOPS =` |
| 8,211 | `DEF_STOPS` | `var DEF_STOPS =` |
| 8,212 | `qShort` | `function qShort(` |
| 8,213 | `yoyPairs` | `function yoyPairs(` |
| 8,223 | `actCycleMonths` | `function actCycleMonths(` |
| 8,231 | `householdsHighlights` | `function householdsHighlights(` |
| 8,250 | `redrawSheet` | `function redrawSheet(` |
| 8,254 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 8,321 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 8,385 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 8,436 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 8,466 | `powerHighlights` | `function powerHighlights(` |
| 8,486 | `valuationHighlights` | `function valuationHighlights(` |
| 8,499 | `tempHighlights` | `function tempHighlights(` |
| 8,516 | `gdpHighlights` | `function gdpHighlights(` |
| 8,531 | `renderMetricPages` | `function renderMetricPages(` |
| 8,544 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 8,557_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,558 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 8,559 | `cycleDataOn` | `function cycleDataOn(` |
| 8,560 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 8,580 | `wireCycleData` | `function wireCycleData(` |
| 8,595 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 8,640_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,641 | `eraOpen` | `var eraOpen =` |
| 8,642 | `eraReading` | `function eraReading(` |
| 8,651 | `eraCard` | `function eraCard(` |
| 8,669 | `eraShow` | `function eraShow(` |
| 8,679 | `enterEra` | `function enterEra(` |
| 8,686 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,693_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,694 | `rosterGroups` | `function rosterGroups(` |
| 8,723 | `__roster` | `var __roster =` |
| 8,724 | `readingRoster` | `function readingRoster(` |
| 8,745 | `readFig` | `function readFig(` |
| 8,750 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,757_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,758 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,782 | `placeWords` | `function placeWords(` |
| 8,786 | `symptomNote` | `function symptomNote(` |
| 8,793 | `symptomRow` | `function symptomRow(` |
| 8,800 | `cycleTrack` | `function cycleTrack(` |
| 8,815 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,823_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,824 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,873_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,874 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,905_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,906 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 2,263–2,266 | `LIVE_CACHE` | Live data without a render refactor |
| 4,780–4,793 | `horizonRead` | The inner pages' chart (kept for nothing — see above) |
| 5,220–5,233 | `seasonTrackAll` | The season, computed |
| 5,249–5,253 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 8,366 |
| `desire-range` | 5,756 |
| `fear-range` | 6,465 |
| `hormones-range` | 6,353 |
| `hzn-range` | 6,245 |
| `pressure-range` | 2,331 |
| `pulse-range` | 5,723 |
| `sheet-marker-deficit` | 8,363 |
| `sheet-metric-gdp` | 8,281 |
| `sheet-metric-households` | 8,387 |
| `sheet-metric-power` | 8,338 |
| `sheet-metric-temp` | 8,255 |
| `sheet-metric-valuation` | 8,408 |
| `sheet-sign-activity` | 8,323 |
| `sheet-sign-desire` | 5,757 |
| `sheet-sign-horizon` | 6,246 |
| `sheet-sign-hormones` | 6,354 |
| `sheet-sign-pressure` | 5,961 |
| `sheet-sign-pulse` | 5,722 |
| `sheet-sign-sentiment` | 6,466 |
| `sheet-sign-volume` | 5,740 |
| `volume-range` | 5,741 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 8,370 |
| `desire-range` | 5,745 |
| `fear-range` | 6,433 |
| `hzn-range` | 6,230 |
| `pressure-range` | 5,930 |
| `pulse-range` | 5,709 |
| `sheet-metric-gdp` | 8,282 |
| `sheet-metric-power` | 8,339 |
| `sheet-metric-temp` | 8,256 |
| `sheet-metric-valuation` | 8,409 |
| `volume-range` | 5,727 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,420 |
| `sheet-metric-gdp` | 3,421 |
| `sheet-sign-activity` | 3,422 |
| `sheet-metric-power` | 3,423 |
| `sheet-metric-valuation` | 3,425 |
| `sheet-metric-households` | 3,426 |
| `deficit-range` | 3,427 |
| `volume-range` | 3,428 |
| `pulse-range` | 3,429 |
| `hzn-range` | 3,430 |
| `desire-range` | 3,431 |
| `fear-range` | 3,432 |
| `hormones-range` | 3,433 |
| `pressure-range` | 3,434 |

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
| 543 | journal (editorial content tab) |
| 549 | content tab: reading companion |
| 598 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 802 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 817 | the reading, after the blood-panel design Keren sent: title, then the figure, flagged in |
| 821 | the panel bar. Keren, V479: "if there's a normal range, I would want to see it in a consistent |
| 827 | one row, as the panel Keren sent lays a marker out: name and figure on the left, the spectrum |
| 837 | the reading's own container, below the history (Keren, V520). `seatBandReading` moves whatever the page |
| 938 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 1,013 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,226 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,245 | The symptoms: a cycle's years against today |
| 1,325 | hero: yield curve |
| 1,358 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,377 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,402 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,410 | long cycle (structural layer) |
| 1,424 | indicator grid |
| 1,450 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 1,464 | info icon + popover (progressive disclosure for longer notes) |
| 1,478 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,561 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (146), which is what the renderers fill:

| Line | id |
|---|---|
| 1,577 | `topbar-back` |
| 1,580 | `topbar-title` |
| 1,581 | `menu-btn` |
| 1,595 | `main` |
| 1,598 | `cycle-view` |
| 1,601 | `cycle-kicker` |
| 1,604 | `cycle-dial` |
| 1,606 | `season-wheel-hub-date` |
| 1,607 | `season-wheel-hub-theme` |
| 1,608 | `season-wheel-hub-detail` |
| 1,614 | `temp-card` |
| 1,616 | `temp-kicker` |
| 1,617 | `temp-sub` |
| 1,620 | `temp-svg` |
| 1,621 | `temp-tooltip` |
| 1,623 | `temp-stats` |
| 1,626 | `growth-card` |
| 1,627 | `growth-kicker` |
| 1,627 | `growth-phase` |
| 1,627 | `growth-sub` |
| 1,628 | `growth-svg` |
| 1,628 | `growth-tooltip` |
| 1,629 | `growth-stats` |
| 1,634 | `today-analysis` |
| 1,635 | `peek-row` |
| 1,636 | `sheet-metric-temp` |
| 1,637 | `temp-timing` |
| 1,638 | `temp-chart` |
| 1,639 | `temp-rangebar` |
| 1,641 | `temp-head` |
| 1,642 | `slot-temp` |
| 1,643 | `temp-history` |
| 1,644 | `temp-hist-tooltip` |
| 1,645 | `temp-trend` |
| 1,647 | `temp-highlights` |
| 1,649 | `sheet-metric-gdp` |
| 1,650 | `gdp-timing` |
| 1,651 | `gdp-chart` |
| 1,652 | `gdp-rangebar` |
| 1,654 | `gdp-head` |
| 1,655 | `slot-growth` |
| 1,656 | `gdp-history` |
| 1,657 | `gdp-hist-tooltip` |
| 1,658 | `gdp-yoy` |
| 1,659 | `gdp-trend` |
| 1,660 | `gdp-panel` |
| 1,664 | `subj-ring-gdp` |
| 1,666 | `subj-label-gdp` |
| 1,667 | `subj-value-gdp` |
| 1,668 | `subj-say-gdp` |
| 1,669 | `subj-spark-gdp` |
| 1,674 | `subj-ctx-gdp` |
| 1,677 | `gdp-highlights` |
| 1,680 | `sheet-metric-power` |
| 1,681 | `power-timing` |
| 1,682 | `power-head` |
| 1,683 | `power-chart` |
| 1,686 | `subj-ring-resilience` |
| 1,689 | `subj-value-resilience` |
| 1,690 | `subj-say-resilience` |
| 1,695 | `subj-ctx-resilience` |
| 1,699 | `longcycle-title` |
| 1,701 | `longcycle-tag` |
| 1,707 | `power-highlights` |
| 1,710 | `sheet-marker-deficit` |
| 1,712 | `sheet-metric-households` |
| 1,713 | `households-timing` |
| 1,714 | `households-chart` |
| 1,715 | `households-highlights` |
| 1,718 | `sheet-metric-valuation` |
| 1,719 | `valuation-timing` |
| 1,720 | `valuation-head` |
| 1,721 | `valuation-chart` |
| 1,724 | `subj-ring-valuation` |
| 1,727 | `subj-value-valuation` |
| 1,728 | `subj-say-valuation` |
| 1,733 | `subj-ctx-valuation` |
| 1,737 | `valuation-title` |
| 1,739 | `valuation-tag` |
| 1,744 | `valuation-highlights` |
| 1,751 | `subj-value-hormones` |
| 1,752 | `subj-say-hormones` |
| 1,758 | `hormones-history` |
| 1,759 | `hormones-insights` |
| 1,768 | `subj-value-horizon` |
| 1,769 | `subj-say-horizon` |
| 1,770 | `subj-spark-horizon` |
| 1,776 | `hzn-timeline` |
| 1,778 | `hzn-head` |
| 1,779 | `spread-history-shell` |
| 1,780 | `spread-history-svg` |
| 1,781 | `spread-history-tooltip` |
| 1,783 | `hzn-trend` |
| 1,785 | `horizon-insights` |
| 1,794 | `subj-value-pressure` |
| 1,795 | `subj-say-pressure` |
| 1,801 | `pressure-timeline` |
| 1,803 | `pressure-head` |
| 1,804 | `ylm-shell` |
| 1,805 | `ylm-svg` |
| 1,806 | `ylm-tooltip` |
| 1,808 | `ylm-trend` |
| 1,810 | `pressure-insights` |
| 1,817 | `subj-ring-sentiment` |
| 1,820 | `subj-value-sentiment` |
| 1,821 | `subj-say-sentiment` |
| 1,822 | `subj-spark-sentiment` |
| 1,828 | `fear-history` |
| 1,829 | `curve-highlights` |
| 1,835 | `signs-list` |
| 1,841 | `calendar-list` |
| 1,848 | `cycle-data` |
| 1,850 | `cycle-legend` |
| 1,851 | `cycle-list` |
| 1,852 | `cycle-more` |
| 1,853 | `cycle-more-label` |
| 1,858 | `calendar-cycle` |
| 1,859 | `calendar-cycle-slot` |
| 1,880 | `search-home` |
| 1,882 | `search-input` |
| 1,884 | `search-list` |
| 1,888 | `more-menu` |
| 1,891 | `menu-back` |
| 1,905 | `sources-open` |
| 1,913 | `appearance-current` |
| 1,919 | `sheet-howto` |
| 1,962 | `sheet-book` |
| 1,993 | `seasons-kicker` |
| 1,995 | `seasons-rows` |
| 1,998 | `framework-kicker` |
| 2,001 | `framework-rows` |
| 2,011 | `sheet-appearance` |
| 2,019 | `theme-toggle` |
| 2,026 | `sheet-contact` |
| 2,035 | `contact-form` |
| 2,036 | `contact-title` |
| 2,037 | `contact-message` |
| 2,039 | `contact-hint` |
| 2,040 | `contact-send` |
| 2,046 | `sheet-sources` |
| 2,049 | `sources-back` |
| 2,054 | `asof-text` |
| 2,055 | `sources-groups` |
| 2,061 | `detail-backdrop` |
| 2,063 | `detail-modal-close` |
| 2,064 | `detail-modal-body` |

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

