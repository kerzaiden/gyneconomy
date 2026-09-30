# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,822 lines**, about 629 KB, roughly **179 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `b8ae7b4` on 2026-09-30.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,553 | the whole stylesheet, every token and rule |
| **Markup** | 1,554–2,046 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 2,047–8,789 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,790–8,822 | </body></html> |

Counts: **334** top-level functions, **190** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 2,047_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,049 | `byId` | `function byId(` |
| 2,057 | `byIdMaybe` | `function byIdMaybe(` |
| 2,058 | `put` | `function put(` |
| 2,063 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 2,065_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,066 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 2,067 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 2,068 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 2,069 | `hubTodayHtml` | `function hubTodayHtml(` |
| 2,073 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 2,078_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,079 | `wheelMeta` | `var wheelMeta =` |
| 2,087 | `seasonOverride` | `var seasonOverride =` |
| 2,088 | `cycleNowNote` | `var cycleNowNote =` |
| 2,090 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 2,168 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 2,209 | `gdpLevels` | `var gdpLevels =` |
| 2,218 | `fedFundsHistory` | `var fedFundsHistory =` |
| 2,219 | `fearCurveHistory` | `var fearCurveHistory =` |
| 2,221 | `fiscalHistory` | `var fiscalHistory =` |
| 2,227 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 2,229 | `treasuryQuarterly` | `var treasuryQuarterly =` |

### Live data without a render refactor

_line 2,239_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,244 | `merge` | `function merge(` |
| 2,251 | `LIVE` | `function LIVE(` |
| 2,265 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,268_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,270 | `paintReading` | `function paintReading(` |
| 2,287 | `repaintFearCurve` | `function repaintFearCurve(` |
| 2,293 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,301 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,306 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,310 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,315_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,316 | `READINGS` | `var READINGS =` |
| 2,372 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,373 | `KINDS` | `var KINDS =` |
| 2,374 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,388 | `receive` | `function receive(` |
| 2,404 | `liveAsOf` | `var liveAsOf =` |
| 2,405 | `fmtAsOf` | `function fmtAsOf(` |
| 2,410 | `applyLive` | `function applyLive(` |
| 2,423 | `shapeOk` | `function shapeOk(` |
| 2,430 | `repaintPolicy` | `function repaintPolicy(` |
| 2,436 | `GYN` | `var GYN =` |
| 2,463 | `refreshLiveData` | `function refreshLiveData(` |
| 2,481 | `fetchSiteData` | `function fetchSiteData(` |
| 2,497 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,502_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,503 | `yieldCurve` | `var yieldCurve =` |
| 2,509 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,510 | `curveAsOf` | `function curveAsOf(` |
| 2,515 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,516 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,521 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,523_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,524 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,525 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,526 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,527 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,528 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,530_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,531 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,537 | `uninvLagToday` | `var uninvLagToday =` |
| 2,542 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,548 | `gdpPeers` | `var gdpPeers =` |
| 2,589 | `gdpSrc` | `var gdpSrc =` |
| 2,590 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,595 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 2,597 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,624_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,626 | `productivityReading` | `var productivityReading =` |

### Institutional trust is not in this panel

_line 2,635_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,637 | `stressScoreFor` | `function stressScoreFor(` |
| 2,643 | `stressScore` | `var stressScore =` |
| 2,644 | `powerOf` | `var powerOf =` |
| 2,645 | `powerScore` | `var powerScore =` |
| 2,647 | `stressHistory` | `var stressHistory =` |
| 2,653 | `powerMeter` | `var powerMeter =` |
| 2,655 | `stressNoteFull` | `var stressNoteFull =` |
| 2,657 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year

_line 2,659_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,660 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,661 | `deficitHistory` | `var deficitHistory =` |
| 2,664 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,665 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,667 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,676_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,677 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,687_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,688 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,691 | `timelineSpan` | `function timelineSpan(` |
| 2,696 | `timelineFor` | `function timelineFor(` |
| 2,707 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,713_ · 32 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,714 | `windowScale` | `function windowScale(` |
| 2,729 | `windowYears` | `function windowYears(` |
| 2,737 | `refName` | `function refName(` |
| 2,741 | `histReadEnsure` | `function histReadEnsure(` |
| 2,762 | `seatBandReading` | `function seatBandReading(` |
| 2,778 | `histReadFill` | `function histReadFill(` |
| 2,828 | `histAxisEnds` | `function histAxisEnds(` |
| 2,839 | `histLegend` | `function histLegend(` |
| 2,899 | `refitHistory` | `function refitHistory(` |
| 2,909 | `wireHistHover` | `function wireHistHover(` |
| 2,946 | `mWindowFrom` | `function mWindowFrom(` |
| 2,950 | `qWindowFrom` | `function qWindowFrom(` |
| 2,954 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,955 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,957 | `DEF_1983` | `var DEF_1983 =` |
| 2,958 | `defFrom` | `function defFrom(` |
| 2,963 | `deficitChart` | `function deficitChart(` |
| 3,031 | `deficitBlock` | `function deficitBlock(` |
| 3,071 | `buffettHistory` | `var buffettHistory =` |
| 3,073 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 3,074 | `hyDates` | `var hyDates =` |
| 3,075 | `hyOas` | `var hyOas =` |
| 3,076 | `checkDesireWindow` | `function checkDesireWindow(` |
| 3,083 | `hyAt` | `function hyAt(` |
| 3,087 | `hyLabel` | `function hyLabel(` |
| 3,088 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 3,089 | `hyNum` | `function hyNum(` |
| 3,090 | `hyWindowFrom` | `function hyWindowFrom(` |
| 3,098 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 3,108 | `capeHistory` | `var capeHistory =` |
| 3,110 | `longCycleSrc` | `var longCycleSrc =` |
| 3,126 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 3,145_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,146 | `sentiment` | `var sentiment =` |
| 3,162 | `valuation` | `var valuation =` |
| 3,183 | `valRow` | `function valRow(` |
| 3,188 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 3,191 | `coincident` | `var coincident =` |
| 3,236 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 3,242 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 3,243 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 3,244 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 3,246_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,247 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 3,248 | `m2vHistory` | `var m2vHistory =` |
| 3,264 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,318 | `desireHistoryChart` | `function desireHistoryChart(` |
| 3,358 | `PBAR_GAP` | `var PBAR_GAP =` |
| 3,359 | `panelBar` | `function panelBar(` |

### the history card's head

_line 3,390_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,391 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,392 | `DOTS` | `var DOTS =` |
| 3,394 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,411 | `headPickRow` | `function headPickRow(` |
| 3,417 | `histHead` | `function histHead(` |
| 3,432 | `headNoteIdx` | `var headNoteIdx =` |
| 3,433 | `headMenuHtml` | `function headMenuHtml(` |
| 3,458 | `headMenuFor` | `var headMenuFor =` |
| 3,459 | `headSubFor` | `var headSubFor =` |
| 3,460 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,491 | `nameWithMark` | `function nameWithMark(` |
| 3,497 | `panelRow` | `function panelRow(` |
| 3,510 | `panelFromMeter` | `function panelFromMeter(` |
| 3,518 | `meterFlagged` | `function meterFlagged(` |
| 3,525 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,548 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,562 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,575 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,594 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,608 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,627 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,658 | `desireBlock` | `function desireBlock(` |
| 3,670 | `volumeBlock` | `function volumeBlock(` |
| 3,683 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,699 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,706_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,707 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,708 | `m2Level` | `var m2Level =` |
| 3,729 | `m2Yoy` | `var m2Yoy =` |
| 3,730 | `M2_NORM` | `var M2_NORM =` |
| 3,732 | `volumeVerdict` | `function volumeVerdict(` |
| 3,740 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,741 | `unempHistory` | `var unempHistory =` |
| 3,747 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,756 | `NROU_NOW` | `var NROU_NOW =` |
| 3,757 | `unempState` | `function unempState(` |
| 3,763 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,817_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,818 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,827 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,885 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,886 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,887 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,888_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,890 | `householdsChart` | `function householdsChart(` |
| 3,939 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,994 | `GDP_NORM` | `var GDP_NORM =` |
| 3,995 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 3,996 | `gdpNowQ` | `var gdpNowQ =` |
| 3,997 | `gdpMeter` | `var gdpMeter =` |
| 4,000 | `growthInfoHtml` | `function growthInfoHtml(` |
| 4,022 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 4,075 | `m2GrowthChart` | `function m2GrowthChart(` |
| 4,122 | `checkMoneyStock` | `function checkMoneyStock(` |
| 4,130 | `velocityVerdict` | `function velocityVerdict(` |
| 4,138 | `derivePulseTag` | `function derivePulseTag(` |
| 4,144 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 4,174_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,175 | `seasonReading` | `var seasonReading =` |
| 4,219 | `frameworkRows` | `var frameworkRows =` |
| 4,229 | `vixRow` | `var vixRow =` |
| 4,230 | `vixWordOf` | `var vixWordOf =` |
| 4,234 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 4,244_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,245 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 4,254_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,255 | `calendarTodayY` | `var calendarTodayY =` |
| 4,257 | `vix3mClose` | `var vix3mClose =` |
| 4,258 | `fearCurve` | `function fearCurve(` |
| 4,263 | `curveVerdict` | `function curveVerdict(` |
| 4,268 | `valuationVerdict` | `function valuationVerdict(` |
| 4,276 | `sparkHtml` | `function sparkHtml(` |
| 4,295 | `lastN` | `function lastN(` |

### The range bar

_line 4,297_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,298 | `modeBar` | `function modeBar(` |
| 4,305 | `pickerOpen` | `var pickerOpen =` |
| 4,306 | `cycleByName` | `function cycleByName(` |
| 4,310 | `openCycle` | `function openCycle(` |
| 4,314 | `cycleSlice` | `function cycleSlice(` |
| 4,322 | `totalGrowthYears` | `function totalGrowthYears(` |
| 4,330 | `cycleMonths` | `function cycleMonths(` |
| 4,338 | `histControls` | `function histControls(` |
| 4,347 | `cycLabel` | `function cycLabel(` |
| 4,351 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 4,356 | `cyclePicker` | `function cyclePicker(` |
| 4,375 | `rangeBar` | `function rangeBar(` |
| 4,382 | `trendOf` | `function trendOf(` |
| 4,397 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,401 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,412_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,413 | `yearOf` | `function yearOf(` |
| 4,414 | `mean` | `function mean(` |

### The record rows

_line 4,415_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,416 | `headSigma` | `function headSigma(` |
| 4,421 | `atQuarter` | `function atQuarter(` |
| 4,422 | `atMonth` | `function atMonth(` |
| 4,423 | `cycleAverages` | `function cycleAverages(` |
| 4,430 | `ordinal` | `function ordinal(` |
| 4,431 | `hiCard` | `function hiCard(` |
| 4,434 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component

_line 4,448_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,449 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 4,455 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,462 | `moreRow` | `function moreRow(` |
| 4,468 | `powerPageNote` | `var powerPageNote =` |
| 4,469 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,475_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,476 | `xLabelOf` | `function xLabelOf(` |
| 4,486 | `fitGroup` | `function fitGroup(` |
| 4,503 | `reserveChart` | `function reserveChart(` |

### The history component's axes

_line 4,537_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,538 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,546 | `vGrid` | `function vGrid(` |
| 4,550 | `COL_FILL` | `var COL_FILL =` |
| 4,551 | `colPath` | `function colPath(` |
| 4,556 | `colWidth` | `function colWidth(` |
| 4,561 | `AXIS` | `var AXIS =` |
| 4,562 | `histFrame` | `function histFrame(` |
| 4,569 | `xLabel` | `function xLabel(` |
| 4,572 | `crossLine` | `function crossLine(` |
| 4,575 | `zeroRule` | `function zeroRule(` |
| 4,578 | `meanRule` | `function meanRule(` |
| 4,579 | `pendingGeom` | `var pendingGeom =` |
| 4,580 | `publishGeom` | `function publishGeom(` |
| 4,581 | `attachHistory` | `function attachHistory(` |
| 4,590 | `histBar` | `function histBar(` |
| 4,593 | `histTip` | `function histTip(` |
| 4,594 | `avgRule` | `function avgRule(` |
| 4,597 | `vhOpen` | `function vhOpen(` |
| 4,598 | `chartAxes` | `function chartAxes(` |
| 4,628 | `divergeChart` | `function divergeChart(` |
| 4,662 | `pairChart` | `function pairChart(` |

### The inner pages' chart (kept for nothing — see above)

_line 4,690_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,692 | `maxIn` | `function maxIn(` |
| 4,697 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,698 | `PEEK_W` | `var PEEK_W =` |
| 4,699 | `PEEK_H` | `var PEEK_H =` |
| 4,700 | `colPeek` | `function colPeek(` |
| 4,718 | `meterPeek` | `function meterPeek(` |
| 4,735 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,740 | `pressureZone` | `function pressureZone(` |
| 4,746 | `HZN_BACK` | `var HZN_BACK =` |
| 4,747 | `hznLast` | `function hznLast(` |
| 4,748 | `hznBack` | `function hznBack(` |
| 4,749 | `horizonWord` | `function horizonWord(` |
| 4,769 | `HZN_METERS` | `var HZN_METERS =` |
| 4,777 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,798 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,803 | `RISK_RISK` | `var RISK_RISK =` |
| 4,808 | `riskCell` | `function riskCell(` |
| 4,809 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,839 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,864_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,865 | `pulseClipN` | `var pulseClipN =` |
| 4,866 | `beatPath` | `function beatPath(` |
| 4,883 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,897 | `pulsePeek` | `function pulsePeek(` |
| 4,900 | `pulseBlock` | `function pulseBlock(` |
| 4,917 | `CHEV` | `var CHEV =` |
| 4,918 | `peekCard` | `function peekCard(` |
| 4,937 | `dropSvg` | `function dropSvg(` |
| 4,939 | `volumeSvg` | `function volumeSvg(` |
| 4,943 | `gaugeSvg` | `function gaugeSvg(` |
| 4,947 | `diamondSvg` | `function diamondSvg(` |
| 4,951 | `energyFromReserve` | `function energyFromReserve(` |
| 4,959 | `sproutSvg` | `function sproutSvg(` |
| 4,967 | `markSvg` | `function markSvg(` |
| 4,970 | `hormoneSvg` | `function hormoneSvg(` |
| 4,975 | `flameSvg` | `function flameSvg(` |
| 4,978 | `gearSvg` | `function gearSvg(` |
| 4,986 | `thermoSvg` | `function thermoSvg(` |
| 4,989 | `trendUpSvg` | `function trendUpSvg(` |
| 4,991 | `ecgSvg` | `function ecgSvg(` |
| 4,993 | `circulationSvg` | `function circulationSvg(` |
| 4,994 | `weatherSvg` | `function weatherSvg(` |
| 5,002 | `moodSvg` | `function moodSvg(` |
| 5,006 | `boltSvg` | `function boltSvg(` |
| 5,007 | `houseSvg` | `function houseSvg(` |
| 5,010 | `sunriseSvg` | `function sunriseSvg(` |
| 5,014 | `umbrellaSvg` | `function umbrellaSvg(` |
| 5,018 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 5,024_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,025 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 5,026 | `dsrHistory` | `var dsrHistory =` |
| 5,027 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 5,028 | `savHistory` | `var savHistory =` |
| 5,031 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 5,040 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 5,041 | `dsrNow` | `var dsrNow =` |
| 5,042 | `savNow` | `var savNow =` |
| 5,043 | `DSR_MEAN` | `var DSR_MEAN =` |
| 5,044 | `householdsWord` | `function householdsWord(` |
| 5,051 | `householdsNow` | `var householdsNow =` |
| 5,052 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 5,053 | `dsrMeter` | `var dsrMeter =` |
| 5,056 | `savMeter` | `var savMeter =` |
| 5,059 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 5,076 | `savInfoHtml` | `function savInfoHtml(` |
| 5,094 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 5,101 | `curveNow` | `var curveNow =` |
| 5,102 | `curveTag` | `var curveTag =` |
| 5,103 | `curveSub` | `var curveSub =` |
| 5,104 | `curvePct` | `function curvePct(` |
| 5,105 | `curveNoteFull` | `var curveNoteFull =` |
| 5,120 | `curveDetailHtml` | `function curveDetailHtml(` |
| 5,124 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 5,130 | `marketCycles` | `var marketCycles =` |
| 5,158 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 5,160_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,161 | `typicalCycleYears` | `var typicalCycleYears =` |
| 5,162 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 5,167_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,168 | `slopeOf` | `function slopeOf(` |
| 5,173 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 5,174 | `readSeason` | `function readSeason(` |
| 5,193 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 5,194 | `qLabel` | `function qLabel(` |
| 5,209 | `regimeTrack` | `function regimeTrack(` |
| 5,229 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 5,231_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,232 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 5,233 | `seasonTitle` | `function seasonTitle(` |
| 5,234 | `monthLabel` | `function monthLabel(` |
| 5,235 | `cycleModel` | `function cycleModel(` |
| 5,272 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 5,280 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,286 | `nowModel` | `var nowModel =` |
| 5,287 | `readingNow` | `var readingNow =` |
| 5,288 | `cpiNow` | `var cpiNow =` |
| 5,289 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,290 | `currentSeason` | `var currentSeason =` |
| 5,291 | `seasonWhy` | `var seasonWhy =` |
| 5,293 | `seasonGroup` | `function seasonGroup(` |
| 5,295 | `arcGauge` | `function arcGauge(` |
| 5,329 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,340 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,341 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,342 | `spreadLabel` | `function spreadLabel(` |
| 5,346 | `policyFacts` | `function policyFacts(` |
| 5,353 | `policyFactRows` | `function policyFactRows(` |
| 5,359 | `allSources` | `var allSources =` |
| 5,373 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,385_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,386 | `SVG_NS` | `var SVG_NS =` |
| 5,387 | `svgEl` | `function svgEl(` |
| 5,392 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,426_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,427 | `clampPct` | `function clampPct(` |
| 5,429 | `infoIcon` | `function infoIcon(` |
| 5,434 | `detailTexts` | `var detailTexts =` |
| 5,435 | `detailSlots` | `var detailSlots =` |
| 5,436 | `detailSlot` | `function detailSlot(` |
| 5,446 | `powerPanelHtml` | `var powerPanelHtml =` |
| 5,447 | `_growthPanel` | `var _growthPanel =` |
| 5,448 | `growthPanelHtml` | `function growthPanelHtml(` |
| 5,454 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 5,462 | `facts` | `function facts(` |
| 5,463 | `factsFrom` | `function factsFrom(` |
| 5,467 | `expandBtn` | `function expandBtn(` |
| 5,471 | `sheetRenderers` | `var sheetRenderers =` |
| 5,472 | `pageMode` | `var pageMode =` |
| 5,477 | `pageCycles` | `var pageCycles =` |
| 5,482 | `pageRange` | `var pageRange =` |
| 5,488 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,517_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,520 | `meterHtml` | `function meterHtml(` |
| 5,544 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,545_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,546 | `subjectRow` | `function subjectRow(` |
| 5,556 | `subjectIcon` | `function subjectIcon(` |
| 5,557 | `srcHtml` | `function srcHtml(` |
| 5,558 | `TIMING` | `var TIMING =` |
| 5,564 | `timingMark` | `function timingMark(` |
| 5,572 | `timingPill` | `function timingPill(` |
| 5,581 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,589 | `seatPageFoot` | `function seatPageFoot(` |
| 5,601 | `timingMembers` | `var timingMembers =` |
| 5,602 | `registerTiming` | `function registerTiming(` |
| 5,604 | `headHtml` | `function headHtml(` |
| 5,612 | `heldHighlights` | `var heldHighlights =` |
| 5,613 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,641_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,642 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,643 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,651 | `withLatestPoint` | `function withLatestPoint(` |
| 5,656 | `pressureMaturities` | `function pressureMaturities(` |
| 5,680 | `registerFlowPages` | `function registerFlowPages(` |
| 5,739 | `renderPressureRow` | `function renderPressureRow(` |
| 5,747 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,766 | `ylmColumns` | `function ylmColumns(` |
| 5,786 | `ylmFitLine` | `function ylmFitLine(` |
| 5,798 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,944_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,945 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,982_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,983 | `spreadSeries` | `function spreadSeries(` |
| 6,027 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 6,152_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,153 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 6,179_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,180 | `drawHznHead` | `function drawHznHead(` |
| 6,195 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 6,257_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,258 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 6,272_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,273 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones

_line 6,294_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,295 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 6,394_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,395 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,468_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,469 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,532_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,533 | `totalRiseIn` | `function totalRiseIn(` |
| 6,543 | `eraInflation` | `function eraInflation(` |
| 6,554 | `eraGrowth` | `function eraGrowth(` |
| 6,570 | `fmtSigned` | `function fmtSigned(` |
| 6,571 | `regimeArrow` | `function regimeArrow(` |
| 6,572 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,573 | `growthShown` | `function growthShown(` |
| 6,574 | `growthShownCap` | `function growthShownCap(` |
| 6,575 | `regimeState` | `function regimeState(` |
| 6,576 | `phaseClass` | `function phaseClass(` |
| 6,577 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,582 | `cycleViewEl` | `var cycleViewEl =` |
| 6,583 | `tempCard` | `var tempCard =` |
| 6,584 | `placeCharts` | `function placeCharts(` |
| 6,589 | `shownEra` | `var shownEra =` |
| 6,590 | `calendarReset` | `var calendarReset =` |
| 6,591 | `metricPageReset` | `var metricPageReset =` |
| 6,592 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,593 | `topbarBack` | `var topbarBack =` |
| 6,594 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,601_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,602 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,683_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,684 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,702_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,703 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,724_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,726 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,727 | `hubSet` | `function hubSet(` |
| 6,738 | `quarterPopup` | `function quarterPopup(` |
| 6,761 | `hubShowDefault` | `function hubShowDefault(` |
| 6,769 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,775 | `hubShowYear` | `function hubShowYear(` |
| 6,785 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: the cycle's months, against the 2% target

_line 6,866_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,867 | `tempState` | `var tempState =` |
| 6,868 | `chartLink` | `var chartLink =` |
| 6,869 | `m2Step` | `function m2Step(` |
| 6,872 | `heatStep` | `function heatStep(` |
| 6,876 | `drawTempFit` | `function drawTempFit(` |
| 6,891 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 7,033_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,034 | `drawGrowth` | `function drawGrowth(` |
| 7,147 | `wireResize` | `function wireResize(` |
| 7,153 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 7,165_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,166 | `renderCycleView` | `function renderCycleView(` |
| 7,200 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws

_line 7,208_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,209 | `peerChosen` | `function peerChosen(` |
| 7,210 | `peerReaches` | `function peerReaches(` |
| 7,238 | `shownEraModel` | `var shownEraModel =` |
| 7,239 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 7,241_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,242 | `stripGroupName` | `var stripGroupName =` |
| 7,243 | `seasonStripHtml` | `function seasonStripHtml(` |
| 7,271 | `marketStripHtml` | `function marketStripHtml(` |
| 7,305 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 7,306 | `settleStrips` | `function settleStrips(` |
| 7,337 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 7,368 | `orderMetricSheets` | `function orderMetricSheets(` |
| 7,393 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 7,503_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,504 | `partsOf` | `function partsOf(` |
| 7,513 | `discOf` | `function discOf(` |
| 7,516 | `authored` | `function authored(` |
| 7,517 | `registerRoster` | `function registerRoster(` |
| 7,551 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER

_line 7,563_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,564 | `NAV` | `var NAV =` |
| 7,565 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,659_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,660 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories

_line 7,705_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,706 | `fmtDay` | `function fmtDay(` |
| 7,707 | `qPretty` | `function qPretty(` |
| 7,708 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,709 | `peekArt` | `function peekArt(` |
| 7,710 | `indPeriod` | `function indPeriod(` |
| 7,719 | `catItem` | `function catItem(` |
| 7,773 | `insightCirculation` | `function insightCirculation(` |
| 7,806 | `insightWeather` | `function insightWeather(` |
| 7,849 | `CAT_MINI` | `var CAT_MINI =` |
| 7,852 | `placeSignPair` | `function placeSignPair(` |
| 7,884 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,900 | `buildCategories` | `function buildCategories(` |
| 7,966 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 8,012_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,013 | `pct0` | `function pct0(` |
| 8,014 | `capeFmt1` | `function capeFmt1(` |
| 8,015 | `reserveState` | `function reserveState(` |
| 8,016 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 8,017 | `GDP_STOPS` | `var GDP_STOPS =` |
| 8,018 | `POWER_STOPS` | `var POWER_STOPS =` |
| 8,019 | `VAL_STOPS` | `var VAL_STOPS =` |
| 8,020 | `DEF_STOPS` | `var DEF_STOPS =` |
| 8,021 | `qShort` | `function qShort(` |
| 8,022 | `yoyPairs` | `function yoyPairs(` |
| 8,032 | `actCycleMonths` | `function actCycleMonths(` |
| 8,040 | `householdsHighlights` | `function householdsHighlights(` |
| 8,059 | `redrawSheet` | `function redrawSheet(` |
| 8,063 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 8,130 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 8,194 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 8,245 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 8,275 | `powerHighlights` | `function powerHighlights(` |
| 8,295 | `valuationHighlights` | `function valuationHighlights(` |
| 8,317 | `tempHighlights` | `function tempHighlights(` |
| 8,334 | `gdpHighlights` | `function gdpHighlights(` |
| 8,349 | `renderMetricPages` | `function renderMetricPages(` |
| 8,362 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 8,375_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,376 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 8,377 | `cycleDataOn` | `function cycleDataOn(` |
| 8,378 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 8,398 | `wireCycleData` | `function wireCycleData(` |
| 8,413 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories

_line 8,460_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,461 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES

_line 8,494_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,495 | `__roster` | `var __roster =` |
| 8,496 | `readingRoster` | `function readingRoster(` |
| 8,539 | `readFig` | `function readFig(` |
| 8,544 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,551_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,552 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,576 | `placeWords` | `function placeWords(` |
| 8,580 | `symptomNote` | `function symptomNote(` |
| 8,587 | `symptomRow` | `function symptomRow(` |
| 8,594 | `cycleTrack` | `function cycleTrack(` |
| 8,609 | `symptomLegend` | `function symptomLegend(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 8,617_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,618 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 8,667_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,668 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,699_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,700 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 2,240–2,243 | `LIVE_CACHE` | Live data without a render refactor |
| 4,755–4,768 | `horizonRead` | The inner pages' chart (kept for nothing — see above) |
| 5,195–5,208 | `seasonTrackAll` | The season, computed |
| 5,224–5,228 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 8,175 |
| `desire-range` | 5,731 |
| `fear-range` | 6,439 |
| `hormones-range` | 6,327 |
| `hzn-range` | 6,220 |
| `pressure-range` | 2,308 |
| `pulse-range` | 5,698 |
| `sheet-marker-deficit` | 8,172 |
| `sheet-metric-gdp` | 8,090 |
| `sheet-metric-households` | 8,196 |
| `sheet-metric-power` | 8,147 |
| `sheet-metric-temp` | 8,064 |
| `sheet-metric-valuation` | 8,217 |
| `sheet-sign-activity` | 8,132 |
| `sheet-sign-desire` | 5,732 |
| `sheet-sign-horizon` | 6,221 |
| `sheet-sign-hormones` | 6,328 |
| `sheet-sign-pressure` | 5,936 |
| `sheet-sign-pulse` | 5,697 |
| `sheet-sign-sentiment` | 6,440 |
| `sheet-sign-volume` | 5,715 |
| `volume-range` | 5,716 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 8,179 |
| `desire-range` | 5,720 |
| `fear-range` | 6,407 |
| `hzn-range` | 6,205 |
| `pressure-range` | 5,905 |
| `pulse-range` | 5,684 |
| `sheet-metric-gdp` | 8,091 |
| `sheet-metric-power` | 8,148 |
| `sheet-metric-temp` | 8,065 |
| `sheet-metric-valuation` | 8,218 |
| `volume-range` | 5,702 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,395 |
| `sheet-metric-gdp` | 3,396 |
| `sheet-sign-activity` | 3,397 |
| `sheet-metric-power` | 3,398 |
| `sheet-metric-valuation` | 3,400 |
| `sheet-metric-households` | 3,401 |
| `deficit-range` | 3,402 |
| `volume-range` | 3,403 |
| `pulse-range` | 3,404 |
| `hzn-range` | 3,405 |
| `desire-range` | 3,406 |
| `fear-range` | 3,407 |
| `hormones-range` | 3,408 |
| `pressure-range` | 3,409 |

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
| 1,235 | The symptoms: a cycle's years against today |
| 1,285 | A closed cycle's categories |
| 1,306 | hero: yield curve |
| 1,339 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,358 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,383 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,391 | long cycle (structural layer) |
| 1,405 | indicator grid |
| 1,431 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 1,445 | info icon + popover (progressive disclosure for longer notes) |
| 1,459 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,542 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (144), which is what the renderers fill:

| Line | id |
|---|---|
| 1,558 | `topbar-back` |
| 1,561 | `topbar-title` |
| 1,562 | `menu-btn` |
| 1,576 | `main` |
| 1,579 | `cycle-view` |
| 1,582 | `cycle-kicker` |
| 1,585 | `cycle-dial` |
| 1,587 | `season-wheel-hub-date` |
| 1,588 | `season-wheel-hub-theme` |
| 1,589 | `season-wheel-hub-detail` |
| 1,595 | `temp-card` |
| 1,597 | `temp-kicker` |
| 1,598 | `temp-sub` |
| 1,601 | `temp-svg` |
| 1,602 | `temp-tooltip` |
| 1,604 | `temp-stats` |
| 1,607 | `growth-card` |
| 1,608 | `growth-kicker` |
| 1,608 | `growth-phase` |
| 1,608 | `growth-sub` |
| 1,609 | `growth-svg` |
| 1,609 | `growth-tooltip` |
| 1,610 | `growth-stats` |
| 1,615 | `today-analysis` |
| 1,616 | `peek-row` |
| 1,617 | `sheet-metric-temp` |
| 1,618 | `temp-timing` |
| 1,619 | `temp-chart` |
| 1,620 | `temp-rangebar` |
| 1,622 | `temp-head` |
| 1,623 | `slot-temp` |
| 1,624 | `temp-history` |
| 1,625 | `temp-hist-tooltip` |
| 1,626 | `temp-trend` |
| 1,628 | `temp-highlights` |
| 1,630 | `sheet-metric-gdp` |
| 1,631 | `gdp-timing` |
| 1,632 | `gdp-chart` |
| 1,633 | `gdp-rangebar` |
| 1,635 | `gdp-head` |
| 1,636 | `slot-growth` |
| 1,637 | `gdp-history` |
| 1,638 | `gdp-hist-tooltip` |
| 1,639 | `gdp-yoy` |
| 1,640 | `gdp-trend` |
| 1,641 | `gdp-panel` |
| 1,645 | `subj-ring-gdp` |
| 1,647 | `subj-label-gdp` |
| 1,648 | `subj-value-gdp` |
| 1,649 | `subj-say-gdp` |
| 1,650 | `subj-spark-gdp` |
| 1,655 | `subj-ctx-gdp` |
| 1,658 | `gdp-highlights` |
| 1,661 | `sheet-metric-power` |
| 1,662 | `power-timing` |
| 1,663 | `power-head` |
| 1,664 | `power-chart` |
| 1,667 | `subj-ring-resilience` |
| 1,670 | `subj-value-resilience` |
| 1,671 | `subj-say-resilience` |
| 1,676 | `subj-ctx-resilience` |
| 1,680 | `longcycle-title` |
| 1,682 | `longcycle-tag` |
| 1,688 | `power-highlights` |
| 1,691 | `sheet-marker-deficit` |
| 1,693 | `sheet-metric-households` |
| 1,694 | `households-timing` |
| 1,695 | `households-chart` |
| 1,696 | `households-highlights` |
| 1,699 | `sheet-metric-valuation` |
| 1,700 | `valuation-timing` |
| 1,701 | `valuation-head` |
| 1,702 | `valuation-chart` |
| 1,705 | `subj-ring-valuation` |
| 1,708 | `subj-value-valuation` |
| 1,709 | `subj-say-valuation` |
| 1,714 | `subj-ctx-valuation` |
| 1,718 | `valuation-title` |
| 1,720 | `valuation-tag` |
| 1,725 | `valuation-highlights` |
| 1,732 | `subj-value-hormones` |
| 1,733 | `subj-say-hormones` |
| 1,739 | `hormones-history` |
| 1,740 | `hormones-insights` |
| 1,749 | `subj-value-horizon` |
| 1,750 | `subj-say-horizon` |
| 1,751 | `subj-spark-horizon` |
| 1,757 | `hzn-timeline` |
| 1,759 | `hzn-head` |
| 1,760 | `spread-history-shell` |
| 1,761 | `spread-history-svg` |
| 1,762 | `spread-history-tooltip` |
| 1,764 | `hzn-trend` |
| 1,766 | `horizon-insights` |
| 1,775 | `subj-value-pressure` |
| 1,776 | `subj-say-pressure` |
| 1,782 | `pressure-timeline` |
| 1,784 | `pressure-head` |
| 1,785 | `ylm-shell` |
| 1,786 | `ylm-svg` |
| 1,787 | `ylm-tooltip` |
| 1,789 | `ylm-trend` |
| 1,791 | `pressure-insights` |
| 1,798 | `subj-ring-sentiment` |
| 1,801 | `subj-value-sentiment` |
| 1,802 | `subj-say-sentiment` |
| 1,803 | `subj-spark-sentiment` |
| 1,809 | `fear-history` |
| 1,810 | `curve-highlights` |
| 1,816 | `signs-list` |
| 1,822 | `calendar-list` |
| 1,829 | `cycle-data` |
| 1,831 | `cycle-legend` |
| 1,832 | `cycle-list` |
| 1,833 | `cycle-more` |
| 1,834 | `cycle-more-label` |
| 1,839 | `calendar-cycle` |
| 1,840 | `calendar-cycle-slot` |
| 1,841 | `cycle-cats` |
| 1,874 | `seasons-kicker` |
| 1,875 | `seasons-rows` |
| 1,879 | `framework-kicker` |
| 1,881 | `framework-rows` |
| 1,886 | `more-menu` |
| 1,889 | `menu-back` |
| 1,903 | `sources-open` |
| 1,911 | `appearance-current` |
| 1,917 | `sheet-howto` |
| 1,960 | `sheet-book` |
| 1,988 | `sheet-appearance` |
| 1,996 | `theme-toggle` |
| 2,003 | `sheet-contact` |
| 2,012 | `contact-form` |
| 2,013 | `contact-title` |
| 2,014 | `contact-message` |
| 2,016 | `contact-hint` |
| 2,017 | `contact-send` |
| 2,023 | `sheet-sources` |
| 2,026 | `sources-back` |
| 2,031 | `asof-text` |
| 2,032 | `sources-groups` |
| 2,038 | `detail-backdrop` |
| 2,040 | `detail-modal-close` |
| 2,041 | `detail-modal-body` |

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

