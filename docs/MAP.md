# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **12,654 lines**, about 1018 KB, roughly **289 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `10f9c34` on 2026-09-29.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,404 | the whole stylesheet, every token and rule |
| **Markup** | 2,405–3,110 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,111–12,607 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 12,608–12,654 | </body></html> |

Counts: **290** top-level functions, **184** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 3,111_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,123 | `byId` | `function byId(` |
| 3,131 | `byIdMaybe` | `function byIdMaybe(` |
| 3,136 | `put` | `function put(` |
| 3,143 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 3,147_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,151 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,152 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,153 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,162 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,166 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,171_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,178 | `wheelMeta` | `var wheelMeta =` |
| 3,189 | `seasonOverride` | `var seasonOverride =` |
| 3,192 | `cycleNowNote` | `var cycleNowNote =` |
| 3,200 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,286 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,331 | `gdpLevels` | `var gdpLevels =` |
| 3,357 | `fedFundsHistory` | `var fedFundsHistory =` |
| 3,358 | `fearCurveHistory` | `var fearCurveHistory =` |
| 3,366 | `fiscalHistory` | `var fiscalHistory =` |
| 3,372 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 3,377 | `treasuryQuarterly` | `var treasuryQuarterly =` |

### Live data without a render refactor

_line 3,387_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,403 | `merge` | `function merge(` |
| 3,410 | `LIVE` | `function LIVE(` |
| 3,431 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 3,434_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,465 | `paintReading` | `function paintReading(` |
| 3,487 | `repaintFearCurve` | `function repaintFearCurve(` |
| 3,504 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 3,514 | `repaintPressureRow` | `function repaintPressureRow(` |
| 3,520 | `repaintPressureChart` | `function repaintPressureChart(` |
| 3,524 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 3,529_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,551 | `READINGS` | `var READINGS =` |
| 3,620 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 3,621 | `KINDS` | `var KINDS =` |
| 3,622 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 3,641 | `receive` | `function receive(` |
| 3,660 | `liveAsOf` | `var liveAsOf =` |
| 3,661 | `fmtAsOf` | `function fmtAsOf(` |
| 3,674 | `applyLive` | `function applyLive(` |
| 3,689 | `shapeOk` | `function shapeOk(` |
| 3,698 | `repaintPolicy` | `function repaintPolicy(` |
| 3,746 | `GYN` | `var GYN =` |
| 3,786 | `refreshLiveData` | `function refreshLiveData(` |
| 3,815 | `fetchSiteData` | `function fetchSiteData(` |
| 3,831 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 3,841_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,842 | `yieldCurve` | `var yieldCurve =` |
| 3,851 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 3,852 | `curveAsOf` | `function curveAsOf(` |
| 3,866 | `t10y3mHistory` | `var t10y3mHistory =` |
| 3,867 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 3,877 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 3,882_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,887 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 3,888 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 3,889 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 3,890 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 3,895 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 3,897_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,906 | `uninvLagCycles` | `var uninvLagCycles =` |
| 3,916 | `uninvLagToday` | `var uninvLagToday =` |
| 3,924 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 3,936 | `gdpPeers` | `var gdpPeers =` |
| 3,977 | `gdpSrc` | `var gdpSrc =` |
| 3,978 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 3,983 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 3,995 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 4,034_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,044 | `productivityReading` | `var productivityReading =` |

### Institutional trust is not in this panel

_line 4,054_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,065 | `stressScoreFor` | `function stressScoreFor(` |
| 4,071 | `stressScore` | `var stressScore =` |
| 4,077 | `powerOf` | `var powerOf =` |
| 4,078 | `powerScore` | `var powerScore =` |
| 4,085 | `stressHistory` | `var stressHistory =` |
| 4,098 | `powerMeter` | `var powerMeter =` |
| 4,100 | `stressNoteFull` | `var stressNoteFull =` |
| 4,113 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year

_line 4,115_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,131 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,132 | `deficitHistory` | `var deficitHistory =` |
| 4,135 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,142 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,144 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,173_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,178 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,190_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,195 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,198 | `timelineSpan` | `function timelineSpan(` |
| 4,204 | `timelineFor` | `function timelineFor(` |
| 4,217 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 4,223_ · 32 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,227 | `windowScale` | `function windowScale(` |
| 4,243 | `windowYears` | `function windowYears(` |
| 4,253 | `refName` | `function refName(` |
| 4,261 | `histReadEnsure` | `function histReadEnsure(` |
| 4,293 | `seatBandReading` | `function seatBandReading(` |
| 4,315 | `histReadFill` | `function histReadFill(` |
| 4,400 | `histAxisEnds` | `function histAxisEnds(` |
| 4,415 | `histLegend` | `function histLegend(` |
| 4,489 | `refitHistory` | `function refitHistory(` |
| 4,504 | `wireHistHover` | `function wireHistHover(` |
| 4,560 | `mWindowFrom` | `function mWindowFrom(` |
| 4,565 | `qWindowFrom` | `function qWindowFrom(` |
| 4,570 | `VOL_STOPS` | `var VOL_STOPS =` |
| 4,571 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 4,573 | `DEF_1983` | `var DEF_1983 =` |
| 4,575 | `defFrom` | `function defFrom(` |
| 4,584 | `deficitChart` | `function deficitChart(` |
| 4,664 | `deficitBlock` | `function deficitBlock(` |
| 4,718 | `buffettHistory` | `var buffettHistory =` |
| 4,735 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 4,736 | `hyDates` | `var hyDates =` |
| 4,737 | `hyOas` | `var hyOas =` |
| 4,738 | `checkDesireWindow` | `function checkDesireWindow(` |
| 4,745 | `hyAt` | `function hyAt(` |
| 4,749 | `hyLabel` | `function hyLabel(` |
| 4,750 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 4,751 | `hyNum` | `function hyNum(` |
| 4,752 | `hyWindowFrom` | `function hyWindowFrom(` |
| 4,762 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 4,776 | `capeHistory` | `var capeHistory =` |
| 4,778 | `longCycleSrc` | `var longCycleSrc =` |
| 4,797 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 4,819_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,823 | `sentiment` | `var sentiment =` |
| 4,841 | `valuation` | `var valuation =` |
| 4,872 | `valRow` | `function valRow(` |
| 4,880 | `coincident` | `var coincident =` |
| 4,935 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 4,946 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 4,947 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 4,948 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 4,950_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,956 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 4,957 | `m2vHistory` | `var m2vHistory =` |
| 4,976 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,048 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,106 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,107 | `panelBar` | `function panelBar(` |

### the history card's head

_line 5,143_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,149 | `HIST_NOTE` | `var HIST_NOTE =` |
| 5,150 | `DOTS` | `var DOTS =` |
| 5,156 | `HIST_HEAD` | `var HIST_HEAD =` |
| 5,184 | `headPickRow` | `function headPickRow(` |
| 5,190 | `histHead` | `function histHead(` |
| 5,213 | `headNoteIdx` | `var headNoteIdx =` |
| 5,214 | `headMenuHtml` | `function headMenuHtml(` |
| 5,264 | `headMenuFor` | `var headMenuFor =` |
| 5,266 | `headSubFor` | `var headSubFor =` |
| 5,267 | `paintHeadMenus` | `function paintHeadMenus(` |
| 5,311 | `nameWithMark` | `function nameWithMark(` |
| 5,317 | `panelRow` | `function panelRow(` |
| 5,348 | `panelFromMeter` | `function panelFromMeter(` |
| 5,359 | `meterFlagged` | `function meterFlagged(` |
| 5,369 | `desireInfoHtml` | `function desireInfoHtml(` |
| 5,396 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 5,410 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 5,425 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 5,444 | `outputInfoHtml` | `function outputInfoHtml(` |
| 5,459 | `activityInfoHtml` | `function activityInfoHtml(` |
| 5,482 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 5,513 | `desireBlock` | `function desireBlock(` |
| 5,530 | `volumeBlock` | `function volumeBlock(` |
| 5,550 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 5,571 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 5,579_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,589 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 5,590 | `m2Level` | `var m2Level =` |
| 5,612 | `m2Yoy` | `var m2Yoy =` |
| 5,613 | `M2_NORM` | `var M2_NORM =` |
| 5,618 | `volumeVerdict` | `function volumeVerdict(` |
| 5,632 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 5,633 | `unempHistory` | `var unempHistory =` |
| 5,639 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 5,654 | `NROU_NOW` | `var NROU_NOW =` |
| 5,655 | `unempState` | `function unempState(` |
| 5,661 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 5,721_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,729 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 5,739 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 5,804 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 5,805 | `CPI_TARGET` | `var CPI_TARGET =` |
| 5,808 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 5,812_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,822 | `householdsChart` | `function householdsChart(` |
| 5,894 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 5,967 | `GDP_NORM` | `var GDP_NORM =` |
| 5,972 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 5,973 | `gdpNowQ` | `var gdpNowQ =` |
| 5,974 | `gdpMeter` | `var gdpMeter =` |
| 5,977 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,005 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,065 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,121 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,129 | `velocityVerdict` | `function velocityVerdict(` |
| 6,137 | `derivePulseTag` | `function derivePulseTag(` |
| 6,143 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,191_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,200 | `seasonReading` | `var seasonReading =` |
| 6,248 | `frameworkRows` | `var frameworkRows =` |
| 6,258 | `vixRow` | `var vixRow =` |
| 6,264 | `vixWordOf` | `var vixWordOf =` |
| 6,268 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 6,282_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,286 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 6,295_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,296 | `calendarTodayY` | `var calendarTodayY =` |
| 6,321 | `vix3mClose` | `var vix3mClose =` |
| 6,322 | `fearCurve` | `function fearCurve(` |
| 6,329 | `curveVerdict` | `function curveVerdict(` |
| 6,336 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 6,340 | `valuationVerdict` | `function valuationVerdict(` |
| 6,351 | `sparkHtml` | `function sparkHtml(` |
| 6,370 | `lastN` | `function lastN(` |

### The range bar

_line 6,372_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,383 | `modeBar` | `function modeBar(` |
| 6,392 | `pickerOpen` | `var pickerOpen =` |
| 6,396 | `cycleByName` | `function cycleByName(` |
| 6,400 | `openCycle` | `function openCycle(` |
| 6,405 | `cycleSlice` | `function cycleSlice(` |
| 6,414 | `totalGrowthYears` | `function totalGrowthYears(` |
| 6,423 | `cycleMonths` | `function cycleMonths(` |
| 6,436 | `histControls` | `function histControls(` |
| 6,449 | `cycLabel` | `function cycLabel(` |
| 6,462 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 6,471 | `cyclePicker` | `function cyclePicker(` |
| 6,490 | `rangeBar` | `function rangeBar(` |
| 6,501 | `trendOf` | `function trendOf(` |
| 6,543 | `TREND_ARROW` | `var TREND_ARROW =` |
| 6,553 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 6,570_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,571 | `yearOf` | `function yearOf(` |
| 6,572 | `mean` | `function mean(` |

### The record rows

_line 6,573_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,581 | `headSigma` | `function headSigma(` |
| 6,589 | `atQuarter` | `function atQuarter(` |
| 6,590 | `atMonth` | `function atMonth(` |
| 6,591 | `cycleAverages` | `function cycleAverages(` |
| 6,598 | `ordinal` | `function ordinal(` |
| 6,599 | `hiCard` | `function hiCard(` |
| 6,609 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component

_line 6,623_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,628 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 6,644 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 6,651 | `moreRow` | `function moreRow(` |
| 6,657 | `powerPageNote` | `var powerPageNote =` |
| 6,658 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 6,668_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,671 | `xLabelOf` | `function xLabelOf(` |
| 6,688 | `fitGroup` | `function fitGroup(` |
| 6,709 | `reserveChart` | `function reserveChart(` |

### The history component's axes

_line 6,758_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,778 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 6,788 | `vGrid` | `function vGrid(` |
| 6,798 | `COL_FILL` | `var COL_FILL =` |
| 6,820 | `colPath` | `function colPath(` |
| 6,825 | `colWidth` | `function colWidth(` |
| 6,856 | `AXIS` | `var AXIS =` |
| 6,868 | `histFrame` | `function histFrame(` |
| 6,880 | `xLabel` | `function xLabel(` |
| 6,884 | `crossLine` | `function crossLine(` |
| 6,889 | `zeroRule` | `function zeroRule(` |
| 6,892 | `meanRule` | `function meanRule(` |
| 6,902 | `pendingGeom` | `var pendingGeom =` |
| 6,903 | `publishGeom` | `function publishGeom(` |
| 6,904 | `attachHistory` | `function attachHistory(` |
| 6,918 | `histBar` | `function histBar(` |
| 6,921 | `histTip` | `function histTip(` |
| 6,924 | `avgRule` | `function avgRule(` |
| 6,927 | `vhOpen` | `function vhOpen(` |
| 6,928 | `chartAxes` | `function chartAxes(` |
| 6,983 | `divergeChart` | `function divergeChart(` |
| 7,038 | `pairChart` | `function pairChart(` |

### The inner pages' chart (kept for nothing — see above)

_line 7,067_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,071 | `maxIn` | `function maxIn(` |
| 7,086 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,091 | `PEEK_W` | `var PEEK_W =` |
| 7,093 | `PEEK_H` | `var PEEK_H =` |
| 7,098 | `colPeek` | `function colPeek(` |
| 7,125 | `meterPeek` | `function meterPeek(` |
| 7,142 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,147 | `pressureZone` | `function pressureZone(` |
| 7,162 | `HZN_BACK` | `var HZN_BACK =` |
| 7,163 | `hznLast` | `function hznLast(` |
| 7,164 | `hznBack` | `function hznBack(` |
| 7,165 | `horizonWord` | `function horizonWord(` |
| 7,190 | `HZN_METERS` | `var HZN_METERS =` |
| 7,198 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 7,229 | `RISK_REWARD` | `var RISK_REWARD =` |
| 7,234 | `RISK_RISK` | `var RISK_RISK =` |
| 7,239 | `riskCell` | `function riskCell(` |
| 7,240 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 7,271 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 7,296_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,311 | `pulseClipN` | `var pulseClipN =` |
| 7,312 | `beatPath` | `function beatPath(` |
| 7,335 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 7,349 | `pulsePeek` | `function pulsePeek(` |
| 7,356 | `pulseBlock` | `function pulseBlock(` |
| 7,376 | `CHEV` | `var CHEV =` |
| 7,378 | `peekCard` | `function peekCard(` |
| 7,405 | `dropSvg` | `function dropSvg(` |
| 7,412 | `volumeSvg` | `function volumeSvg(` |
| 7,420 | `gaugeSvg` | `function gaugeSvg(` |
| 7,430 | `diamondSvg` | `function diamondSvg(` |
| 7,440 | `energyFromReserve` | `function energyFromReserve(` |
| 7,452 | `sproutSvg` | `function sproutSvg(` |
| 7,464 | `markSvg` | `function markSvg(` |
| 7,470 | `hormoneSvg` | `function hormoneSvg(` |
| 7,476 | `flameSvg` | `function flameSvg(` |
| 7,482 | `gearSvg` | `function gearSvg(` |
| 7,491 | `thermoSvg` | `function thermoSvg(` |
| 7,499 | `trendUpSvg` | `function trendUpSvg(` |
| 7,506 | `ecgSvg` | `function ecgSvg(` |
| 7,511 | `circulationSvg` | `function circulationSvg(` |
| 7,512 | `weatherSvg` | `function weatherSvg(` |
| 7,524 | `moodSvg` | `function moodSvg(` |
| 7,535 | `boltSvg` | `function boltSvg(` |
| 7,538 | `houseSvg` | `function houseSvg(` |
| 7,545 | `sunriseSvg` | `function sunriseSvg(` |
| 7,555 | `umbrellaSvg` | `function umbrellaSvg(` |
| 7,559 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 7,572_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,592 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 7,593 | `dsrHistory` | `var dsrHistory =` |
| 7,594 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 7,595 | `savHistory` | `var savHistory =` |
| 7,600 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 7,610 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 7,611 | `dsrNow` | `var dsrNow =` |
| 7,612 | `savNow` | `var savNow =` |
| 7,613 | `DSR_MEAN` | `var DSR_MEAN =` |
| 7,618 | `householdsWord` | `function householdsWord(` |
| 7,625 | `householdsNow` | `var householdsNow =` |
| 7,631 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 7,632 | `dsrMeter` | `var dsrMeter =` |
| 7,635 | `savMeter` | `var savMeter =` |
| 7,638 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 7,655 | `savInfoHtml` | `function savInfoHtml(` |
| 7,673 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 7,682 | `curveNow` | `var curveNow =` |
| 7,683 | `curveTag` | `var curveTag =` |
| 7,684 | `curveSub` | `var curveSub =` |
| 7,688 | `curvePct` | `function curvePct(` |
| 7,689 | `curveNoteFull` | `var curveNoteFull =` |
| 7,704 | `curveDetailHtml` | `function curveDetailHtml(` |
| 7,712 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 7,738 | `marketCycles` | `var marketCycles =` |

### The tops a reader can stand beside

_line 7,766_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,780 | `marketTops` | `var marketTops =` |
| 7,790 | `marketTopsSrc` | `var marketTopsSrc =` |
| 7,795 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 7,797_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,817 | `typicalCycleYears` | `var typicalCycleYears =` |
| 7,818 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 7,823_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,843 | `slopeOf` | `function slopeOf(` |
| 7,854 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 7,860 | `readSeason` | `function readSeason(` |
| 7,881 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 7,883 | `qLabel` | `function qLabel(` |
| 7,906 | `regimeTrack` | `function regimeTrack(` |
| 7,929 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 7,931_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,936 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 7,937 | `seasonTitle` | `function seasonTitle(` |
| 7,938 | `monthLabel` | `function monthLabel(` |
| 7,939 | `cycleModel` | `function cycleModel(` |
| 7,988 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 7,996 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,003 | `nowModel` | `var nowModel =` |
| 8,004 | `readingNow` | `var readingNow =` |
| 8,005 | `cpiNow` | `var cpiNow =` |
| 8,006 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,007 | `currentSeason` | `var currentSeason =` |
| 8,008 | `seasonWhy` | `var seasonWhy =` |
| 8,019 | `seasonGroup` | `function seasonGroup(` |
| 8,031 | `arcGauge` | `function arcGauge(` |
| 8,072 | `vitalRingSvg` | `function vitalRingSvg(` |
| 8,085 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 8,088 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 8,090 | `spreadLabel` | `function spreadLabel(` |
| 8,097 | `policyFacts` | `function policyFacts(` |
| 8,110 | `policyFactRows` | `function policyFactRows(` |
| 8,116 | `allSources` | `var allSources =` |
| 8,137 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 8,170_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,173 | `SVG_NS` | `var SVG_NS =` |
| 8,174 | `svgEl` | `function svgEl(` |
| 8,186 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 8,222_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,223 | `clampPct` | `function clampPct(` |
| 8,228 | `infoIcon` | `function infoIcon(` |
| 8,235 | `detailTexts` | `var detailTexts =` |
| 8,240 | `detailSlots` | `var detailSlots =` |
| 8,241 | `detailSlot` | `function detailSlot(` |
| 8,252 | `powerPanelHtml` | `var powerPanelHtml =` |
| 8,255 | `_growthPanel` | `var _growthPanel =` |
| 8,256 | `growthPanelHtml` | `function growthPanelHtml(` |
| 8,262 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 8,273 | `facts` | `function facts(` |
| 8,274 | `factsFrom` | `function factsFrom(` |
| 8,278 | `expandBtn` | `function expandBtn(` |
| 8,283 | `sheetRenderers` | `var sheetRenderers =` |
| 8,287 | `pageMode` | `var pageMode =` |
| 8,293 | `pageCycles` | `var pageCycles =` |
| 8,302 | `pageRange` | `var pageRange =` |
| 8,308 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 8,342_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,351 | `meterHtml` | `function meterHtml(` |
| 8,377 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 8,378_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,383 | `subjectRow` | `function subjectRow(` |
| 8,395 | `subjectIcon` | `function subjectIcon(` |
| 8,396 | `srcHtml` | `function srcHtml(` |
| 8,402 | `TIMING` | `var TIMING =` |
| 8,408 | `timingMark` | `function timingMark(` |
| 8,419 | `timingPill` | `function timingPill(` |
| 8,435 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 8,443 | `seatPageFoot` | `function seatPageFoot(` |
| 8,461 | `timingMembers` | `var timingMembers =` |
| 8,462 | `registerTiming` | `function registerTiming(` |
| 8,466 | `headHtml` | `function headHtml(` |
| 8,480 | `heldHighlights` | `var heldHighlights =` |
| 8,481 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 8,529_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,537 | `CURVE_KEY` | `var CURVE_KEY =` |
| 8,538 | `latestYieldPoint` | `function latestYieldPoint(` |
| 8,546 | `withLatestPoint` | `function withLatestPoint(` |
| 8,551 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 8,908_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,915 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 8,952_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,953 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 9,160_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,161 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 9,189_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,196 | `drawHznHead` | `function drawHznHead(` |
| 9,211 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 9,284_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,285 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 9,303_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,306 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones

_line 9,329_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,339 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 9,467_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,468 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 9,581_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,584 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 9,686_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,695 | `totalRiseIn` | `function totalRiseIn(` |
| 9,705 | `eraInflation` | `function eraInflation(` |
| 9,716 | `eraGrowth` | `function eraGrowth(` |
| 9,735 | `fmtSigned` | `function fmtSigned(` |
| 9,740 | `regimeArrow` | `function regimeArrow(` |
| 9,746 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 9,747 | `growthShown` | `function growthShown(` |
| 9,748 | `growthShownCap` | `function growthShownCap(` |
| 9,749 | `regimeState` | `function regimeState(` |
| 9,753 | `phaseClass` | `function phaseClass(` |
| 9,755 | `eraMarketTotal` | `function eraMarketTotal(` |
| 9,767 | `cycleViewEl` | `var cycleViewEl =` |
| 9,770 | `tempCard` | `var tempCard =` |
| 9,771 | `placeCharts` | `function placeCharts(` |
| 9,776 | `shownEra` | `var shownEra =` |
| 9,777 | `calendarReset` | `var calendarReset =` |
| 9,778 | `metricPageReset` | `var metricPageReset =` |
| 9,779 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 9,782 | `topbarBack` | `var topbarBack =` |
| 9,783 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 9,790_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,791 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 9,929_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,930 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 9,948_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,950 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 9,971_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,977 | `hubDetailIdx` | `var hubDetailIdx =` |
| 9,980 | `hubSet` | `function hubSet(` |
| 9,993 | `quarterPopup` | `function quarterPopup(` |
| 10,023 | `hubShowDefault` | `function hubShowDefault(` |
| 10,032 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,038 | `hubShowYear` | `function hubShowYear(` |
| 10,053 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: the cycle's months, against the 2% target

_line 10,144_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,147 | `tempState` | `var tempState =` |
| 10,150 | `chartLink` | `var chartLink =` |
| 10,164 | `m2Step` | `function m2Step(` |
| 10,169 | `heatStep` | `function heatStep(` |
| 10,173 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 10,354_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,357 | `drawGrowth` | `function drawGrowth(` |
| 10,493 | `wireResize` | `function wireResize(` |
| 10,499 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 10,511_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,512 | `renderCycleView` | `function renderCycleView(` |
| 10,569 | `renderGrowthPhase` | `function renderGrowthPhase(` |

### The economy the Growth chart draws

_line 10,577_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,583 | `peerChosen` | `function peerChosen(` |
| 10,584 | `peerReaches` | `function peerReaches(` |
| 10,614 | `shownEraModel` | `var shownEraModel =` |
| 10,615 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 10,617_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,618 | `stripGroupName` | `var stripGroupName =` |
| 10,619 | `seasonStripHtml` | `function seasonStripHtml(` |
| 10,661 | `marketStripHtml` | `function marketStripHtml(` |
| 10,713 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 10,714 | `settleStrips` | `function settleStrips(` |
| 10,748 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 10,978_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,986 | `partsOf` | `function partsOf(` |
| 10,995 | `discOf` | `function discOf(` |
| 11,001 | `authored` | `function authored(` |
| 11,005 | `registerRoster` | `function registerRoster(` |
| 11,043 | `memberRow` | `function memberRow(` |

### THE NAVIGATION CONTROLLER

_line 11,055_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,059 | `NAV` | `var NAV =` |
| 11,060 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 11,173_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,176 | `buildIndicatorSheet` | `function buildIndicatorSheet(` |

### THE CYCLE TAB: cards and categories

_line 11,231_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,238 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 11,648_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,651 | `renderMetricPages` | `function renderMetricPages(` |

### GDP growth

_line 12,048_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,094 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,121_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,122 | `renderCycleList` | `function renderCycleList(` |

### RENDER: a closed cycle's four categories

_line 12,211_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,222 | `renderCycleCats` | `function renderCycleCats(` |

### THE ROSTER AS SERIES

_line 12,262_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,269 | `__roster` | `var __roster =` |
| 12,270 | `readingRoster` | `function readingRoster(` |
| 12,322 | `readFig` | `function readFig(` |
| 12,330 | `prettyK` | `function prettyK(` |

### RENDER: Rhymes — today beside a past top

_line 12,337_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,358 | `renderRhymes` | `function renderRhymes(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 12,411_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,412 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 12,469_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,470 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 12,503_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,504 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,398–3,401 | `LIVE_CACHE` | Live data without a render refactor |
| 7,171–7,184 | `horizonRead` | The inner pages' chart (kept for nothing — see above) |
| 7,889–7,902 | `seasonTrackAll` | The season, computed |
| 7,924–7,928 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 11,840 |
| `desire-range` | 8,826 |
| `fear-range` | 9,547 |
| `hormones-range` | 9,373 |
| `hzn-range` | 9,239 |
| `pressure-range` | 3,522 |
| `pulse-range` | 8,784 |
| `sheet-marker-deficit` | 11,837 |
| `sheet-metric-gdp` | 11,733 |
| `sheet-metric-households` | 11,867 |
| `sheet-metric-power` | 11,804 |
| `sheet-metric-temp` | 11,695 |
| `sheet-metric-valuation` | 11,911 |
| `sheet-sign-activity` | 11,788 |
| `sheet-sign-desire` | 8,827 |
| `sheet-sign-horizon` | 9,240 |
| `sheet-sign-hormones` | 9,375 |
| `sheet-sign-pressure` | 8,890 |
| `sheet-sign-pulse` | 8,783 |
| `sheet-sign-sentiment` | 9,551 |
| `sheet-sign-volume` | 8,803 |
| `volume-range` | 8,804 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 11,846 |
| `desire-range` | 8,811 |
| `fear-range` | 9,505 |
| `hzn-range` | 9,221 |
| `pressure-range` | 8,852 |
| `pulse-range` | 8,768 |
| `sheet-metric-gdp` | 11,734 |
| `sheet-metric-power` | 11,805 |
| `sheet-metric-temp` | 11,696 |
| `sheet-metric-valuation` | 11,912 |
| `volume-range` | 8,788 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 5,161 |
| `sheet-metric-gdp` | 5,162 |
| `sheet-sign-activity` | 5,165 |
| `sheet-metric-power` | 5,166 |
| `sheet-metric-valuation` | 5,168 |
| `sheet-metric-households` | 5,169 |
| `deficit-range` | 5,170 |
| `volume-range` | 5,171 |
| `pulse-range` | 5,172 |
| `hzn-range` | 5,176 |
| `desire-range` | 5,177 |
| `fear-range` | 5,178 |
| `hormones-range` | 5,179 |
| `pressure-range` | 5,180 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 180 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 294 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 366 | yearly calendar — one card per year, grouped into five eras |
| 373 | season strip |
| 419 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 535 | tab bar (app-style segmented navigation) |
| 583 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 617 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 778 | journal (editorial content tab) |
| 784 | content tab: reading companion |
| 839 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,196 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 1,220 | the reading, after the blood-panel design Keren sent: title, then the figure, flagged in |
| 1,226 | the panel bar. Keren, V479: "if there's a normal range, I would want to see it in a consistent |
| 1,234 | one row, as the panel Keren sent lays a marker out: name and figure on the left, the spectrum |
| 1,255 | the reading's own container, below the history (Keren, V520). `seatBandReading` moves whatever the page |
| 1,401 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 1,530 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,898 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,936 | Rhymes: today beside one past top |
| 1,971 | A closed cycle's categories |
| 1,997 | hero: yield curve |
| 2,058 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 2,107 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,148 | yield-by-maturity comparison chart: pill toggles; the marks reuse .gdp-line/.gdp-dot/.gdp-tooltip, |
| 2,168 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,183 | long cycle (structural layer) |
| 2,222 | indicator grid |
| 2,259 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,275 | info icon + popover (progressive disclosure for longer notes) |
| 2,292 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,387 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (145), which is what the renderers fill:

| Line | id |
|---|---|
| 2,410 | `topbar-back` |
| 2,413 | `topbar-title` |
| 2,414 | `menu-btn` |
| 2,431 | `main` |
| 2,438 | `cycle-view` |
| 2,446 | `cycle-kicker` |
| 2,451 | `cycle-dial` |
| 2,453 | `season-wheel-hub-date` |
| 2,454 | `season-wheel-hub-theme` |
| 2,455 | `season-wheel-hub-detail` |
| 2,463 | `temp-card` |
| 2,465 | `temp-kicker` |
| 2,466 | `temp-sub` |
| 2,469 | `temp-svg` |
| 2,470 | `temp-tooltip` |
| 2,475 | `temp-stats` |
| 2,482 | `growth-card` |
| 2,485 | `growth-kicker` |
| 2,485 | `growth-phase` |
| 2,485 | `growth-sub` |
| 2,486 | `growth-svg` |
| 2,486 | `growth-tooltip` |
| 2,488 | `growth-stats` |
| 2,495 | `today-analysis` |
| 2,498 | `peek-row` |
| 2,502 | `sheet-metric-temp` |
| 2,503 | `temp-timing` |
| 2,504 | `temp-chart` |
| 2,506 | `temp-rangebar` |
| 2,508 | `temp-head` |
| 2,509 | `slot-temp` |
| 2,510 | `temp-history` |
| 2,511 | `temp-hist-tooltip` |
| 2,514 | `temp-trend` |
| 2,519 | `temp-highlights` |
| 2,522 | `sheet-metric-gdp` |
| 2,523 | `gdp-timing` |
| 2,524 | `gdp-chart` |
| 2,525 | `gdp-rangebar` |
| 2,527 | `gdp-head` |
| 2,528 | `slot-growth` |
| 2,529 | `gdp-history` |
| 2,530 | `gdp-hist-tooltip` |
| 2,531 | `gdp-yoy` |
| 2,536 | `gdp-trend` |
| 2,538 | `gdp-panel` |
| 2,543 | `subj-ring-gdp` |
| 2,545 | `subj-label-gdp` |
| 2,546 | `subj-value-gdp` |
| 2,547 | `subj-say-gdp` |
| 2,548 | `subj-spark-gdp` |
| 2,553 | `subj-ctx-gdp` |
| 2,556 | `gdp-highlights` |
| 2,563 | `sheet-metric-power` |
| 2,564 | `power-timing` |
| 2,565 | `power-head` |
| 2,566 | `power-chart` |
| 2,570 | `subj-ring-resilience` |
| 2,573 | `subj-value-resilience` |
| 2,574 | `subj-say-resilience` |
| 2,579 | `subj-ctx-resilience` |
| 2,583 | `longcycle-title` |
| 2,585 | `longcycle-tag` |
| 2,598 | `power-highlights` |
| 2,605 | `sheet-marker-deficit` |
| 2,610 | `sheet-metric-households` |
| 2,611 | `households-timing` |
| 2,612 | `households-chart` |
| 2,613 | `households-highlights` |
| 2,617 | `sheet-metric-valuation` |
| 2,618 | `valuation-timing` |
| 2,619 | `valuation-head` |
| 2,620 | `valuation-chart` |
| 2,624 | `subj-ring-valuation` |
| 2,627 | `subj-value-valuation` |
| 2,628 | `subj-say-valuation` |
| 2,633 | `subj-ctx-valuation` |
| 2,637 | `valuation-title` |
| 2,639 | `valuation-tag` |
| 2,646 | `valuation-highlights` |
| 2,659 | `subj-value-hormones` |
| 2,660 | `subj-say-hormones` |
| 2,668 | `hormones-history` |
| 2,675 | `hormones-insights` |
| 2,696 | `subj-value-horizon` |
| 2,697 | `subj-say-horizon` |
| 2,698 | `subj-spark-horizon` |
| 2,707 | `hzn-timeline` |
| 2,709 | `hzn-head` |
| 2,710 | `spread-history-shell` |
| 2,711 | `spread-history-svg` |
| 2,712 | `spread-history-tooltip` |
| 2,718 | `hzn-trend` |
| 2,720 | `horizon-insights` |
| 2,745 | `subj-value-pressure` |
| 2,746 | `subj-say-pressure` |
| 2,752 | `pressure-timeline` |
| 2,754 | `pressure-head` |
| 2,755 | `ylm-shell` |
| 2,756 | `ylm-svg` |
| 2,757 | `ylm-tooltip` |
| 2,759 | `ylm-trend` |
| 2,765 | `pressure-insights` |
| 2,772 | `subj-ring-sentiment` |
| 2,775 | `subj-value-sentiment` |
| 2,776 | `subj-say-sentiment` |
| 2,777 | `subj-spark-sentiment` |
| 2,790 | `fear-history` |
| 2,791 | `curve-highlights` |
| 2,803 | `signs-list` |
| 2,813 | `calendar-list` |
| 2,824 | `rhymes-card` |
| 2,835 | `rhy-pick` |
| 2,836 | `rhy-body` |
| 2,852 | `cycle-list` |
| 2,858 | `cycle-more` |
| 2,859 | `cycle-more-label` |
| 2,867 | `calendar-cycle` |
| 2,868 | `calendar-cycle-slot` |
| 2,874 | `cycle-cats` |
| 2,923 | `seasons-kicker` |
| 2,924 | `seasons-rows` |
| 2,928 | `framework-kicker` |
| 2,930 | `framework-rows` |
| 2,937 | `more-menu` |
| 2,940 | `menu-back` |
| 2,954 | `sources-open` |
| 2,962 | `appearance-current` |
| 2,970 | `sheet-howto` |
| 3,014 | `sheet-book` |
| 3,043 | `sheet-appearance` |
| 3,051 | `theme-toggle` |
| 3,061 | `sheet-contact` |
| 3,070 | `contact-form` |
| 3,071 | `contact-title` |
| 3,072 | `contact-message` |
| 3,074 | `contact-hint` |
| 3,075 | `contact-send` |
| 3,084 | `sheet-sources` |
| 3,087 | `sources-back` |
| 3,094 | `asof-text` |
| 3,095 | `sources-groups` |
| 3,102 | `detail-backdrop` |
| 3,104 | `detail-modal-close` |
| 3,105 | `detail-modal-body` |

## Finding things fast

| To find | grep for |
|---|---|
| a figure's literal value | `var <name> = ` — the data objects are all top-level vars in the DATA section |
| what a history page draws | `HIST_HEAD` for its head, then `sheetRenderers["<id>"]` for its renderer |
| where a band comes from | the constant name, then read its `(i)` text — every band states its provenance |
| a season decision | `readSeason(`, `seasonTrackAll`, `cycleModel(` |
| why something looks the way it does | `Keren, V` — a comment citing her is a decision; `docs/DECISIONS.md` has her words, and git the history |
| a live-data wiring | `LIVE("` — one line per document, each directly under its literal |
| a CSS rule's only home | the class name; rules under `.detail-modal`, `.metric-sheet`, `.sign-detail` are scoped and must be restated for a new host |

