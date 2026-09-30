# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **9,023 lines**, about 645 KB, roughly **183 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `c4c92da` on 2026-09-30.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,583 | the whole stylesheet, every token and rule |
| **Markup** | 1,584–2,081 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 2,082–8,990 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,991–9,023 | </body></html> |

Counts: **355** top-level functions, **194** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 2,082_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,084 | `byId` | `function byId(` |
| 2,092 | `byIdMaybe` | `function byIdMaybe(` |
| 2,093 | `put` | `function put(` |
| 2,098 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 2,100_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,101 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 2,102 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 2,103 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 2,104 | `hubTodayHtml` | `function hubTodayHtml(` |
| 2,108 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 2,113_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,114 | `wheelMeta` | `var wheelMeta =` |
| 2,122 | `seasonOverride` | `var seasonOverride =` |
| 2,123 | `cycleNowNote` | `var cycleNowNote =` |
| 2,125 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 2,203 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 2,244 | `gdpLevels` | `var gdpLevels =` |
| 2,253 | `fedFundsHistory` | `var fedFundsHistory =` |
| 2,254 | `fearCurveHistory` | `var fearCurveHistory =` |
| 2,256 | `fiscalHistory` | `var fiscalHistory =` |
| 2,262 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 2,264 | `treasuryQuarterly` | `var treasuryQuarterly =` |

### Live data without a render refactor

_line 2,274_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,279 | `merge` | `function merge(` |
| 2,286 | `LIVE` | `function LIVE(` |
| 2,300 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,303_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,305 | `paintReading` | `function paintReading(` |
| 2,322 | `repaintFearCurve` | `function repaintFearCurve(` |
| 2,328 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,336 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,341 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,345 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,350_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,351 | `READINGS` | `var READINGS =` |
| 2,407 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,408 | `KINDS` | `var KINDS =` |
| 2,409 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,423 | `receive` | `function receive(` |
| 2,439 | `liveAsOf` | `var liveAsOf =` |
| 2,440 | `fmtAsOf` | `function fmtAsOf(` |
| 2,445 | `applyLive` | `function applyLive(` |
| 2,458 | `shapeOk` | `function shapeOk(` |
| 2,465 | `repaintPolicy` | `function repaintPolicy(` |
| 2,471 | `GYN` | `var GYN =` |
| 2,498 | `refreshLiveData` | `function refreshLiveData(` |
| 2,516 | `fetchSiteData` | `function fetchSiteData(` |
| 2,532 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,537_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,538 | `yieldCurve` | `var yieldCurve =` |
| 2,544 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,545 | `curveAsOf` | `function curveAsOf(` |
| 2,550 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,551 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,556 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,558_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,559 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,560 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,561 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,562 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,563 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,565_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,566 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,572 | `uninvLagToday` | `var uninvLagToday =` |
| 2,577 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,583 | `gdpPeers` | `var gdpPeers =` |
| 2,624 | `gdpSrc` | `var gdpSrc =` |
| 2,625 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,630 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 2,632 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,661_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,663 | `productivityReading` | `var productivityReading =` |

### Institutional trust is not in this panel

_line 2,672_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,674 | `stressScoreFor` | `function stressScoreFor(` |
| 2,680 | `stressScore` | `var stressScore =` |
| 2,681 | `powerOf` | `var powerOf =` |
| 2,682 | `powerScore` | `var powerScore =` |
| 2,684 | `stressHistory` | `var stressHistory =` |
| 2,690 | `powerMeter` | `var powerMeter =` |
| 2,692 | `stressNoteFull` | `var stressNoteFull =` |
| 2,694 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year

_line 2,696_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,697 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,698 | `deficitHistory` | `var deficitHistory =` |
| 2,701 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,702 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,704 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,713_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,714 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,724_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,725 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,728 | `timelineSpan` | `function timelineSpan(` |
| 2,733 | `timelineFor` | `function timelineFor(` |
| 2,744 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,750_ · 32 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,751 | `windowScale` | `function windowScale(` |
| 2,766 | `windowYears` | `function windowYears(` |
| 2,774 | `refName` | `function refName(` |
| 2,778 | `histReadEnsure` | `function histReadEnsure(` |
| 2,799 | `seatBandReading` | `function seatBandReading(` |
| 2,815 | `histReadFill` | `function histReadFill(` |
| 2,865 | `histAxisEnds` | `function histAxisEnds(` |
| 2,876 | `histLegend` | `function histLegend(` |
| 2,936 | `refitHistory` | `function refitHistory(` |
| 2,946 | `wireHistHover` | `function wireHistHover(` |
| 2,983 | `mWindowFrom` | `function mWindowFrom(` |
| 2,987 | `qWindowFrom` | `function qWindowFrom(` |
| 2,991 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,992 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,994 | `DEF_1983` | `var DEF_1983 =` |
| 2,995 | `defFrom` | `function defFrom(` |
| 3,000 | `deficitChart` | `function deficitChart(` |
| 3,068 | `deficitBlock` | `function deficitBlock(` |
| 3,108 | `buffettHistory` | `var buffettHistory =` |
| 3,110 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 3,111 | `hyDates` | `var hyDates =` |
| 3,112 | `hyOas` | `var hyOas =` |
| 3,113 | `checkDesireWindow` | `function checkDesireWindow(` |
| 3,120 | `hyAt` | `function hyAt(` |
| 3,124 | `hyLabel` | `function hyLabel(` |
| 3,125 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 3,126 | `hyNum` | `function hyNum(` |
| 3,127 | `hyWindowFrom` | `function hyWindowFrom(` |
| 3,135 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 3,145 | `capeHistory` | `var capeHistory =` |
| 3,147 | `longCycleSrc` | `var longCycleSrc =` |
| 3,163 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 3,182_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,183 | `sentiment` | `var sentiment =` |
| 3,199 | `valuation` | `var valuation =` |
| 3,220 | `valRow` | `function valRow(` |
| 3,225 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 3,228 | `coincident` | `var coincident =` |
| 3,273 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 3,279 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 3,280 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 3,281 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 3,283_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,284 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 3,285 | `m2vHistory` | `var m2vHistory =` |
| 3,301 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,355 | `desireHistoryChart` | `function desireHistoryChart(` |
| 3,395 | `PBAR_GAP` | `var PBAR_GAP =` |
| 3,396 | `panelBar` | `function panelBar(` |

### the history card's head

_line 3,427_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,428 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,429 | `DOTS` | `var DOTS =` |
| 3,431 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,448 | `headPickRow` | `function headPickRow(` |
| 3,454 | `histHead` | `function histHead(` |
| 3,469 | `headNoteIdx` | `var headNoteIdx =` |
| 3,470 | `headMenuHtml` | `function headMenuHtml(` |
| 3,495 | `headMenuFor` | `var headMenuFor =` |
| 3,496 | `headSubFor` | `var headSubFor =` |
| 3,497 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,528 | `nameWithMark` | `function nameWithMark(` |
| 3,534 | `panelRow` | `function panelRow(` |
| 3,547 | `panelFromMeter` | `function panelFromMeter(` |
| 3,555 | `meterFlagged` | `function meterFlagged(` |
| 3,562 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,585 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,599 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,612 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,631 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,645 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,664 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,695 | `desireBlock` | `function desireBlock(` |
| 3,707 | `volumeBlock` | `function volumeBlock(` |
| 3,720 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,736 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,743_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,744 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,745 | `m2Level` | `var m2Level =` |
| 3,766 | `m2Yoy` | `var m2Yoy =` |
| 3,767 | `M2_NORM` | `var M2_NORM =` |
| 3,769 | `volumeVerdict` | `function volumeVerdict(` |
| 3,777 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,778 | `unempHistory` | `var unempHistory =` |
| 3,784 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,793 | `NROU_NOW` | `var NROU_NOW =` |
| 3,794 | `unempState` | `function unempState(` |
| 3,800 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,854_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,855 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,864 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,922 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,923 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,924 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,925_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,927 | `householdsChart` | `function householdsChart(` |
| 3,976 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 4,031 | `GDP_NORM` | `var GDP_NORM =` |
| 4,032 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 4,033 | `gdpNowQ` | `var gdpNowQ =` |
| 4,034 | `gdpMeter` | `var gdpMeter =` |
| 4,037 | `growthInfoHtml` | `function growthInfoHtml(` |
| 4,059 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 4,112 | `m2GrowthChart` | `function m2GrowthChart(` |
| 4,159 | `checkMoneyStock` | `function checkMoneyStock(` |
| 4,167 | `velocityVerdict` | `function velocityVerdict(` |
| 4,175 | `derivePulseTag` | `function derivePulseTag(` |
| 4,181 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 4,211_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,212 | `seasonReading` | `var seasonReading =` |
| 4,256 | `frameworkRows` | `var frameworkRows =` |
| 4,266 | `vixRow` | `var vixRow =` |
| 4,267 | `vixWordOf` | `var vixWordOf =` |
| 4,271 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 4,281_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,282 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 4,291_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,292 | `calendarTodayY` | `var calendarTodayY =` |
| 4,294 | `vix3mClose` | `var vix3mClose =` |
| 4,295 | `fearCurve` | `function fearCurve(` |
| 4,300 | `curveVerdict` | `function curveVerdict(` |
| 4,305 | `valuationVerdict` | `function valuationVerdict(` |
| 4,313 | `sparkHtml` | `function sparkHtml(` |
| 4,332 | `lastN` | `function lastN(` |

### The range bar

_line 4,334_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,335 | `modeBar` | `function modeBar(` |
| 4,342 | `pickerOpen` | `var pickerOpen =` |
| 4,343 | `cycleByName` | `function cycleByName(` |
| 4,347 | `openCycle` | `function openCycle(` |
| 4,351 | `cycleSlice` | `function cycleSlice(` |
| 4,359 | `totalGrowthYears` | `function totalGrowthYears(` |
| 4,367 | `cycleMonths` | `function cycleMonths(` |
| 4,375 | `histControls` | `function histControls(` |
| 4,384 | `cycLabel` | `function cycLabel(` |
| 4,388 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 4,393 | `cyclePicker` | `function cyclePicker(` |
| 4,412 | `rangeBar` | `function rangeBar(` |
| 4,419 | `trendOf` | `function trendOf(` |
| 4,434 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,438 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,449_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,450 | `yearOf` | `function yearOf(` |
| 4,451 | `mean` | `function mean(` |

### The record rows

_line 4,452_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,453 | `headSigma` | `function headSigma(` |
| 4,458 | `atQuarter` | `function atQuarter(` |
| 4,459 | `atMonth` | `function atMonth(` |
| 4,460 | `cycleAverages` | `function cycleAverages(` |
| 4,467 | `ordinal` | `function ordinal(` |
| 4,468 | `hiCard` | `function hiCard(` |
| 4,471 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component

_line 4,485_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,486 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 4,492 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,499 | `moreRow` | `function moreRow(` |
| 4,505 | `powerPageNote` | `var powerPageNote =` |
| 4,506 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,512_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,513 | `xLabelOf` | `function xLabelOf(` |
| 4,523 | `fitGroup` | `function fitGroup(` |
| 4,540 | `reserveChart` | `function reserveChart(` |

### The history component's axes

_line 4,574_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,575 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,583 | `vGrid` | `function vGrid(` |
| 4,587 | `COL_FILL` | `var COL_FILL =` |
| 4,588 | `colPath` | `function colPath(` |
| 4,593 | `colWidth` | `function colWidth(` |
| 4,598 | `AXIS` | `var AXIS =` |
| 4,599 | `histFrame` | `function histFrame(` |
| 4,606 | `xLabel` | `function xLabel(` |
| 4,609 | `crossLine` | `function crossLine(` |
| 4,612 | `zeroRule` | `function zeroRule(` |
| 4,615 | `meanRule` | `function meanRule(` |
| 4,616 | `pendingGeom` | `var pendingGeom =` |
| 4,617 | `publishGeom` | `function publishGeom(` |
| 4,618 | `attachHistory` | `function attachHistory(` |
| 4,627 | `histBar` | `function histBar(` |
| 4,630 | `histTip` | `function histTip(` |
| 4,631 | `avgRule` | `function avgRule(` |
| 4,634 | `vhOpen` | `function vhOpen(` |
| 4,635 | `chartAxes` | `function chartAxes(` |
| 4,665 | `divergeChart` | `function divergeChart(` |
| 4,699 | `pairChart` | `function pairChart(` |

### The inner pages' chart (kept for nothing — see above)

_line 4,727_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,729 | `maxIn` | `function maxIn(` |
| 4,734 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,735 | `PEEK_W` | `var PEEK_W =` |
| 4,736 | `PEEK_H` | `var PEEK_H =` |
| 4,737 | `colPeek` | `function colPeek(` |
| 4,755 | `meterPeek` | `function meterPeek(` |
| 4,772 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,777 | `pressureZone` | `function pressureZone(` |
| 4,783 | `HZN_BACK` | `var HZN_BACK =` |
| 4,784 | `hznLast` | `function hznLast(` |
| 4,785 | `hznBack` | `function hznBack(` |
| 4,786 | `horizonWord` | `function horizonWord(` |
| 4,806 | `HZN_METERS` | `var HZN_METERS =` |
| 4,814 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,835 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,840 | `RISK_RISK` | `var RISK_RISK =` |
| 4,845 | `riskCell` | `function riskCell(` |
| 4,846 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,876 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,901_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,902 | `pulseClipN` | `var pulseClipN =` |
| 4,903 | `beatPath` | `function beatPath(` |
| 4,920 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,934 | `pulsePeek` | `function pulsePeek(` |
| 4,937 | `pulseBlock` | `function pulseBlock(` |
| 4,954 | `CHEV` | `var CHEV =` |
| 4,955 | `peekCard` | `function peekCard(` |
| 4,974 | `dropSvg` | `function dropSvg(` |
| 4,976 | `volumeSvg` | `function volumeSvg(` |
| 4,980 | `gaugeSvg` | `function gaugeSvg(` |
| 4,984 | `diamondSvg` | `function diamondSvg(` |
| 4,988 | `energyFromReserve` | `function energyFromReserve(` |
| 4,996 | `sproutSvg` | `function sproutSvg(` |
| 5,004 | `markSvg` | `function markSvg(` |
| 5,007 | `hormoneSvg` | `function hormoneSvg(` |
| 5,012 | `flameSvg` | `function flameSvg(` |
| 5,015 | `gearSvg` | `function gearSvg(` |
| 5,023 | `thermoSvg` | `function thermoSvg(` |
| 5,026 | `trendUpSvg` | `function trendUpSvg(` |
| 5,028 | `ecgSvg` | `function ecgSvg(` |
| 5,030 | `circulationSvg` | `function circulationSvg(` |
| 5,031 | `weatherSvg` | `function weatherSvg(` |
| 5,039 | `moodSvg` | `function moodSvg(` |
| 5,043 | `boltSvg` | `function boltSvg(` |
| 5,044 | `houseSvg` | `function houseSvg(` |
| 5,047 | `sunriseSvg` | `function sunriseSvg(` |
| 5,051 | `umbrellaSvg` | `function umbrellaSvg(` |
| 5,055 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 5,061_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,062 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 5,063 | `dsrHistory` | `var dsrHistory =` |
| 5,064 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 5,065 | `savHistory` | `var savHistory =` |
| 5,068 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 5,077 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 5,078 | `dsrNow` | `var dsrNow =` |
| 5,079 | `savNow` | `var savNow =` |
| 5,080 | `DSR_MEAN` | `var DSR_MEAN =` |
| 5,081 | `householdsWord` | `function householdsWord(` |
| 5,088 | `householdsNow` | `var householdsNow =` |
| 5,089 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 5,090 | `dsrMeter` | `var dsrMeter =` |
| 5,093 | `savMeter` | `var savMeter =` |
| 5,096 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 5,113 | `savInfoHtml` | `function savInfoHtml(` |
| 5,131 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 5,138 | `curveNow` | `var curveNow =` |
| 5,139 | `curveTag` | `var curveTag =` |
| 5,140 | `curveSub` | `var curveSub =` |
| 5,141 | `curvePct` | `function curvePct(` |
| 5,142 | `curveNoteFull` | `var curveNoteFull =` |
| 5,157 | `curveDetailHtml` | `function curveDetailHtml(` |
| 5,161 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 5,167 | `marketCycles` | `var marketCycles =` |
| 5,195 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 5,197_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,198 | `typicalCycleYears` | `var typicalCycleYears =` |
| 5,199 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 5,204_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,205 | `slopeOf` | `function slopeOf(` |
| 5,210 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 5,211 | `readSeason` | `function readSeason(` |
| 5,230 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 5,231 | `qLabel` | `function qLabel(` |
| 5,246 | `regimeTrack` | `function regimeTrack(` |
| 5,266 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 5,268_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,269 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 5,270 | `seasonTitle` | `function seasonTitle(` |
| 5,271 | `monthLabel` | `function monthLabel(` |
| 5,272 | `cycleModel` | `function cycleModel(` |
| 5,309 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 5,317 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,323 | `nowModel` | `var nowModel =` |
| 5,324 | `readingNow` | `var readingNow =` |
| 5,325 | `cpiNow` | `var cpiNow =` |
| 5,326 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,327 | `currentSeason` | `var currentSeason =` |
| 5,328 | `seasonWhy` | `var seasonWhy =` |
| 5,330 | `seasonGroup` | `function seasonGroup(` |
| 5,332 | `arcGauge` | `function arcGauge(` |
| 5,366 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,377 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,378 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,379 | `spreadLabel` | `function spreadLabel(` |
| 5,383 | `policyFacts` | `function policyFacts(` |
| 5,390 | `policyFactRows` | `function policyFactRows(` |
| 5,396 | `allSources` | `var allSources =` |
| 5,410 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,422_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,423 | `SVG_NS` | `var SVG_NS =` |
| 5,424 | `svgEl` | `function svgEl(` |
| 5,429 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,463_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,464 | `clampPct` | `function clampPct(` |
| 5,466 | `infoIcon` | `function infoIcon(` |
| 5,471 | `detailTexts` | `var detailTexts =` |
| 5,472 | `detailSlots` | `var detailSlots =` |
| 5,473 | `detailSlot` | `function detailSlot(` |
| 5,483 | `powerPanelHtml` | `var powerPanelHtml =` |
| 5,484 | `_growthPanel` | `var _growthPanel =` |
| 5,485 | `growthPanelHtml` | `function growthPanelHtml(` |
| 5,491 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 5,499 | `facts` | `function facts(` |
| 5,500 | `factsFrom` | `function factsFrom(` |
| 5,504 | `expandBtn` | `function expandBtn(` |
| 5,508 | `sheetRenderers` | `var sheetRenderers =` |
| 5,509 | `pageMode` | `var pageMode =` |
| 5,514 | `pageCycles` | `var pageCycles =` |
| 5,519 | `pageRange` | `var pageRange =` |
| 5,525 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,554_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,557 | `meterHtml` | `function meterHtml(` |
| 5,581 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,582_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,583 | `subjectRow` | `function subjectRow(` |
| 5,593 | `subjectIcon` | `function subjectIcon(` |
| 5,594 | `srcHtml` | `function srcHtml(` |
| 5,595 | `TIMING` | `var TIMING =` |
| 5,601 | `timingMark` | `function timingMark(` |
| 5,609 | `timingPill` | `function timingPill(` |
| 5,618 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,626 | `seatPageFoot` | `function seatPageFoot(` |
| 5,638 | `timingMembers` | `var timingMembers =` |
| 5,639 | `registerTiming` | `function registerTiming(` |
| 5,641 | `headHtml` | `function headHtml(` |
| 5,649 | `heldHighlights` | `var heldHighlights =` |
| 5,650 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,678_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,679 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,680 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,688 | `withLatestPoint` | `function withLatestPoint(` |
| 5,693 | `pressureMaturities` | `function pressureMaturities(` |
| 5,717 | `registerFlowPages` | `function registerFlowPages(` |
| 5,776 | `renderPressureRow` | `function renderPressureRow(` |
| 5,784 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,803 | `ylmColumns` | `function ylmColumns(` |
| 5,823 | `ylmFitLine` | `function ylmFitLine(` |
| 5,835 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,981_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,982 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 6,019_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,020 | `spreadSeries` | `function spreadSeries(` |
| 6,064 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 6,189_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,190 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 6,216_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,217 | `drawHznHead` | `function drawHznHead(` |
| 6,232 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 6,294_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,295 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 6,310_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,311 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones

_line 6,332_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,333 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 6,432_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,433 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,506_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,507 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,570_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,571 | `totalRiseIn` | `function totalRiseIn(` |
| 6,581 | `eraInflation` | `function eraInflation(` |
| 6,592 | `eraGrowth` | `function eraGrowth(` |
| 6,608 | `fmtSigned` | `function fmtSigned(` |
| 6,609 | `regimeArrow` | `function regimeArrow(` |
| 6,610 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,611 | `growthShown` | `function growthShown(` |
| 6,612 | `growthShownCap` | `function growthShownCap(` |
| 6,613 | `regimeState` | `function regimeState(` |
| 6,614 | `phaseClass` | `function phaseClass(` |
| 6,615 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,620 | `cycleViewEl` | `var cycleViewEl =` |
| 6,621 | `tempCard` | `var tempCard =` |
| 6,622 | `placeCharts` | `function placeCharts(` |
| 6,627 | `shownEra` | `var shownEra =` |
| 6,628 | `calendarReset` | `var calendarReset =` |
| 6,629 | `metricPageReset` | `var metricPageReset =` |
| 6,630 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,631 | `topbarBack` | `var topbarBack =` |
| 6,632 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,639_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,640 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,721_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,722 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,740_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,741 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,762_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,764 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,765 | `hubSet` | `function hubSet(` |
| 6,776 | `quarterPopup` | `function quarterPopup(` |
| 6,799 | `hubShowDefault` | `function hubShowDefault(` |
| 6,807 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,813 | `hubShowYear` | `function hubShowYear(` |
| 6,823 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: the cycle's months, against the 2% target

_line 6,904_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,905 | `tempState` | `var tempState =` |
| 6,906 | `chartLink` | `var chartLink =` |
| 6,907 | `m2Step` | `function m2Step(` |
| 6,910 | `heatStep` | `function heatStep(` |
| 6,914 | `drawTempFit` | `function drawTempFit(` |
| 6,929 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 7,071_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,072 | `drawGrowth` | `function drawGrowth(` |
| 7,185 | `wireResize` | `function wireResize(` |
| 7,191 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 7,203_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,204 | `renderCycleView` | `function renderCycleView(` |
| 7,238 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws

_line 7,246_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,247 | `peerChosen` | `function peerChosen(` |
| 7,248 | `peerReaches` | `function peerReaches(` |
| 7,276 | `shownEraModel` | `var shownEraModel =` |
| 7,277 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 7,279_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,280 | `stripGroupName` | `var stripGroupName =` |
| 7,281 | `seasonStripHtml` | `function seasonStripHtml(` |
| 7,309 | `marketStripHtml` | `function marketStripHtml(` |
| 7,343 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 7,344 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 7,373_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,374 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 7,380 | `INDICATOR_GROUP` | `var INDICATOR_GROUP =` |
| 7,385 | `SPLIT_PERIOD` | `var SPLIT_PERIOD =` |
| 7,386 | `debtSvg` | `function debtSvg(` |
| 7,387 | `interestSvg` | `function interestSvg(` |
| 7,389 | `budgetSvg` | `function budgetSvg(` |
| 7,391 | `lede` | `function lede(` |
| 7,392 | `periodOf` | `function periodOf(` |
| 7,393 | `qLast` | `function qLast(` |
| 7,394 | `meterWord` | `function meterWord(` |
| 7,395 | `splitSpecs` | `function splitSpecs(` |
| 7,415 | `splitInfo` | `function splitInfo(` |
| 7,419 | `quarterTicks` | `function quarterTicks(` |
| 7,424 | `drawSplit` | `function drawSplit(` |
| 7,443 | `mountSplit` | `function mountSplit(` |
| 7,459 | `splitPeek` | `function splitPeek(` |
| 7,467 | `indicatorPeeks` | `function indicatorPeeks(` |
| 7,477 | `appendPicks` | `function appendPicks(` |
| 7,486 | `categoryCats` | `function categoryCats(` |

### The split indicators' insights

_line 7,504_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,505 | `buffettInsight` | `function buffettInsight(` |
| 7,520 | `debtInsight` | `function debtInsight(` |
| 7,535 | `interestInsight` | `function interestInsight(` |
| 7,550 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 7,581 | `orderMetricSheets` | `function orderMetricSheets(` |
| 7,606 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 7,716_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,717 | `partsOf` | `function partsOf(` |
| 7,726 | `discOf` | `function discOf(` |
| 7,729 | `authored` | `function authored(` |
| 7,730 | `registerRoster` | `function registerRoster(` |
| 7,764 | `indRow` | `function indRow(` |
| 7,768 | `IND_ORDER` | `var IND_ORDER =` |
| 7,769 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 7,785_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,786 | `NAV` | `var NAV =` |
| 7,787 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,881_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,882 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,930_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,931 | `fmtDay` | `function fmtDay(` |
| 7,932 | `qPretty` | `function qPretty(` |
| 7,933 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,934 | `peekArt` | `function peekArt(` |
| 7,935 | `indPeriod` | `function indPeriod(` |
| 7,944 | `catItem` | `function catItem(` |
| 7,998 | `insightCirculation` | `function insightCirculation(` |
| 8,031 | `insightWeather` | `function insightWeather(` |
| 8,074 | `CAT_MINI` | `var CAT_MINI =` |
| 8,077 | `placeSignPair` | `function placeSignPair(` |
| 8,109 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 8,125 | `buildCategories` | `function buildCategories(` |
| 8,169 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 8,215_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,216 | `pct0` | `function pct0(` |
| 8,217 | `capeFmt1` | `function capeFmt1(` |
| 8,218 | `reserveState` | `function reserveState(` |
| 8,219 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 8,220 | `GDP_STOPS` | `var GDP_STOPS =` |
| 8,221 | `POWER_STOPS` | `var POWER_STOPS =` |
| 8,222 | `VAL_STOPS` | `var VAL_STOPS =` |
| 8,223 | `DEF_STOPS` | `var DEF_STOPS =` |
| 8,224 | `qShort` | `function qShort(` |
| 8,225 | `yoyPairs` | `function yoyPairs(` |
| 8,235 | `actCycleMonths` | `function actCycleMonths(` |
| 8,243 | `householdsHighlights` | `function householdsHighlights(` |
| 8,262 | `redrawSheet` | `function redrawSheet(` |
| 8,266 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 8,333 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 8,397 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 8,448 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 8,478 | `powerHighlights` | `function powerHighlights(` |
| 8,498 | `valuationHighlights` | `function valuationHighlights(` |
| 8,511 | `tempHighlights` | `function tempHighlights(` |
| 8,528 | `gdpHighlights` | `function gdpHighlights(` |
| 8,543 | `renderMetricPages` | `function renderMetricPages(` |
| 8,556 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 8,569_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,570 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 8,571 | `cycleDataOn` | `function cycleDataOn(` |
| 8,572 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 8,592 | `wireCycleData` | `function wireCycleData(` |
| 8,607 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories

_line 8,654_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,655 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES

_line 8,688_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,689 | `rosterGroups` | `function rosterGroups(` |
| 8,718 | `__roster` | `var __roster =` |
| 8,719 | `readingRoster` | `function readingRoster(` |
| 8,740 | `readFig` | `function readFig(` |
| 8,745 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,752_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,753 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,777 | `placeWords` | `function placeWords(` |
| 8,781 | `symptomNote` | `function symptomNote(` |
| 8,788 | `symptomRow` | `function symptomRow(` |
| 8,795 | `cycleTrack` | `function cycleTrack(` |
| 8,810 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,818_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,819 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,868_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,869 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,900_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,901 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 2,275–2,278 | `LIVE_CACHE` | Live data without a render refactor |
| 4,792–4,805 | `horizonRead` | The inner pages' chart (kept for nothing — see above) |
| 5,232–5,245 | `seasonTrackAll` | The season, computed |
| 5,261–5,265 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 8,378 |
| `desire-range` | 5,768 |
| `fear-range` | 6,477 |
| `hormones-range` | 6,365 |
| `hzn-range` | 6,257 |
| `pressure-range` | 2,343 |
| `pulse-range` | 5,735 |
| `sheet-marker-deficit` | 8,375 |
| `sheet-metric-gdp` | 8,293 |
| `sheet-metric-households` | 8,399 |
| `sheet-metric-power` | 8,350 |
| `sheet-metric-temp` | 8,267 |
| `sheet-metric-valuation` | 8,420 |
| `sheet-sign-activity` | 8,335 |
| `sheet-sign-desire` | 5,769 |
| `sheet-sign-horizon` | 6,258 |
| `sheet-sign-hormones` | 6,366 |
| `sheet-sign-pressure` | 5,973 |
| `sheet-sign-pulse` | 5,734 |
| `sheet-sign-sentiment` | 6,478 |
| `sheet-sign-volume` | 5,752 |
| `volume-range` | 5,753 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 8,382 |
| `desire-range` | 5,757 |
| `fear-range` | 6,445 |
| `hzn-range` | 6,242 |
| `pressure-range` | 5,942 |
| `pulse-range` | 5,721 |
| `sheet-metric-gdp` | 8,294 |
| `sheet-metric-power` | 8,351 |
| `sheet-metric-temp` | 8,268 |
| `sheet-metric-valuation` | 8,421 |
| `volume-range` | 5,739 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,432 |
| `sheet-metric-gdp` | 3,433 |
| `sheet-sign-activity` | 3,434 |
| `sheet-metric-power` | 3,435 |
| `sheet-metric-valuation` | 3,437 |
| `sheet-metric-households` | 3,438 |
| `deficit-range` | 3,439 |
| `volume-range` | 3,440 |
| `pulse-range` | 3,441 |
| `hzn-range` | 3,442 |
| `desire-range` | 3,443 |
| `fear-range` | 3,444 |
| `hormones-range` | 3,445 |
| `pressure-range` | 3,446 |

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
| 1,294 | A closed cycle's categories |
| 1,336 | hero: yield curve |
| 1,369 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,388 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,413 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,421 | long cycle (structural layer) |
| 1,435 | indicator grid |
| 1,461 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 1,475 | info icon + popover (progressive disclosure for longer notes) |
| 1,489 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,572 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (147), which is what the renderers fill:

| Line | id |
|---|---|
| 1,588 | `topbar-back` |
| 1,591 | `topbar-title` |
| 1,592 | `menu-btn` |
| 1,606 | `main` |
| 1,609 | `cycle-view` |
| 1,612 | `cycle-kicker` |
| 1,615 | `cycle-dial` |
| 1,617 | `season-wheel-hub-date` |
| 1,618 | `season-wheel-hub-theme` |
| 1,619 | `season-wheel-hub-detail` |
| 1,625 | `temp-card` |
| 1,627 | `temp-kicker` |
| 1,628 | `temp-sub` |
| 1,631 | `temp-svg` |
| 1,632 | `temp-tooltip` |
| 1,634 | `temp-stats` |
| 1,637 | `growth-card` |
| 1,638 | `growth-kicker` |
| 1,638 | `growth-phase` |
| 1,638 | `growth-sub` |
| 1,639 | `growth-svg` |
| 1,639 | `growth-tooltip` |
| 1,640 | `growth-stats` |
| 1,645 | `today-analysis` |
| 1,646 | `peek-row` |
| 1,647 | `sheet-metric-temp` |
| 1,648 | `temp-timing` |
| 1,649 | `temp-chart` |
| 1,650 | `temp-rangebar` |
| 1,652 | `temp-head` |
| 1,653 | `slot-temp` |
| 1,654 | `temp-history` |
| 1,655 | `temp-hist-tooltip` |
| 1,656 | `temp-trend` |
| 1,658 | `temp-highlights` |
| 1,660 | `sheet-metric-gdp` |
| 1,661 | `gdp-timing` |
| 1,662 | `gdp-chart` |
| 1,663 | `gdp-rangebar` |
| 1,665 | `gdp-head` |
| 1,666 | `slot-growth` |
| 1,667 | `gdp-history` |
| 1,668 | `gdp-hist-tooltip` |
| 1,669 | `gdp-yoy` |
| 1,670 | `gdp-trend` |
| 1,671 | `gdp-panel` |
| 1,675 | `subj-ring-gdp` |
| 1,677 | `subj-label-gdp` |
| 1,678 | `subj-value-gdp` |
| 1,679 | `subj-say-gdp` |
| 1,680 | `subj-spark-gdp` |
| 1,685 | `subj-ctx-gdp` |
| 1,688 | `gdp-highlights` |
| 1,691 | `sheet-metric-power` |
| 1,692 | `power-timing` |
| 1,693 | `power-head` |
| 1,694 | `power-chart` |
| 1,697 | `subj-ring-resilience` |
| 1,700 | `subj-value-resilience` |
| 1,701 | `subj-say-resilience` |
| 1,706 | `subj-ctx-resilience` |
| 1,710 | `longcycle-title` |
| 1,712 | `longcycle-tag` |
| 1,718 | `power-highlights` |
| 1,721 | `sheet-marker-deficit` |
| 1,723 | `sheet-metric-households` |
| 1,724 | `households-timing` |
| 1,725 | `households-chart` |
| 1,726 | `households-highlights` |
| 1,729 | `sheet-metric-valuation` |
| 1,730 | `valuation-timing` |
| 1,731 | `valuation-head` |
| 1,732 | `valuation-chart` |
| 1,735 | `subj-ring-valuation` |
| 1,738 | `subj-value-valuation` |
| 1,739 | `subj-say-valuation` |
| 1,744 | `subj-ctx-valuation` |
| 1,748 | `valuation-title` |
| 1,750 | `valuation-tag` |
| 1,755 | `valuation-highlights` |
| 1,762 | `subj-value-hormones` |
| 1,763 | `subj-say-hormones` |
| 1,769 | `hormones-history` |
| 1,770 | `hormones-insights` |
| 1,779 | `subj-value-horizon` |
| 1,780 | `subj-say-horizon` |
| 1,781 | `subj-spark-horizon` |
| 1,787 | `hzn-timeline` |
| 1,789 | `hzn-head` |
| 1,790 | `spread-history-shell` |
| 1,791 | `spread-history-svg` |
| 1,792 | `spread-history-tooltip` |
| 1,794 | `hzn-trend` |
| 1,796 | `horizon-insights` |
| 1,805 | `subj-value-pressure` |
| 1,806 | `subj-say-pressure` |
| 1,812 | `pressure-timeline` |
| 1,814 | `pressure-head` |
| 1,815 | `ylm-shell` |
| 1,816 | `ylm-svg` |
| 1,817 | `ylm-tooltip` |
| 1,819 | `ylm-trend` |
| 1,821 | `pressure-insights` |
| 1,828 | `subj-ring-sentiment` |
| 1,831 | `subj-value-sentiment` |
| 1,832 | `subj-say-sentiment` |
| 1,833 | `subj-spark-sentiment` |
| 1,839 | `fear-history` |
| 1,840 | `curve-highlights` |
| 1,846 | `signs-list` |
| 1,852 | `calendar-list` |
| 1,859 | `cycle-data` |
| 1,861 | `cycle-legend` |
| 1,862 | `cycle-list` |
| 1,863 | `cycle-more` |
| 1,864 | `cycle-more-label` |
| 1,869 | `calendar-cycle` |
| 1,870 | `calendar-cycle-slot` |
| 1,871 | `cycle-cats` |
| 1,892 | `search-home` |
| 1,894 | `search-input` |
| 1,896 | `search-list` |
| 1,900 | `more-menu` |
| 1,903 | `menu-back` |
| 1,917 | `sources-open` |
| 1,925 | `appearance-current` |
| 1,931 | `sheet-howto` |
| 1,974 | `sheet-book` |
| 2,005 | `seasons-kicker` |
| 2,007 | `seasons-rows` |
| 2,010 | `framework-kicker` |
| 2,013 | `framework-rows` |
| 2,023 | `sheet-appearance` |
| 2,031 | `theme-toggle` |
| 2,038 | `sheet-contact` |
| 2,047 | `contact-form` |
| 2,048 | `contact-title` |
| 2,049 | `contact-message` |
| 2,051 | `contact-hint` |
| 2,052 | `contact-send` |
| 2,058 | `sheet-sources` |
| 2,061 | `sources-back` |
| 2,066 | `asof-text` |
| 2,067 | `sources-groups` |
| 2,073 | `detail-backdrop` |
| 2,075 | `detail-modal-close` |
| 2,076 | `detail-modal-body` |

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

