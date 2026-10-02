# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,495 lines**, about 686 KB, roughly **195 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `e836806` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,374 | the whole stylesheet, every token and rule |
| **Markup** | 1,375–1,762 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,763–8,451 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,452–8,495 | </body></html> |

Counts: **468** top-level functions, **193** top-level vars, **10** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,763_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,765 | `byId` | `function byId(` |
| 1,773 | `byIdMaybe` | `function byIdMaybe(` |
| 1,774 | `put` | `function put(` |
| 1,779 | `elFrom` | `function elFrom(` |

### Layers: Escape closes only the topmost open layer; Tab stays inside a dialog

_line 1,780_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,781 | `LAYERS` | `var LAYERS =` |
| 1,782 | `layer` | `function layer(` |
| 1,783 | `onScreen` | `function onScreen(` |
| 1,784 | `focusQuiet` | `function focusQuiet(` |
| 1,785 | `tabStops` | `function tabStops(` |
| 1,789 | `keepTab` | `function keepTab(` |
| 1,801 | `rovingKeys` | `function rovingKeys(` |

### REFRESH: the one date to edit

_line 1,817_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,818 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,819 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,820 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,821 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,825 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,830_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,831 | `wheelMeta` | `var wheelMeta =` |
| 1,839 | `seasonOverride` | `var seasonOverride =` |
| 1,840 | `cycleNowNote` | `var cycleNowNote =` |
| 1,842 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,920 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,962 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,963 | `volatilityHistory` | `var volatilityHistory =` |
| 1,965 | `fiscalHistory` | `var fiscalHistory =` |
| 1,971 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,973 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,983 | `productivityHistory` | `var productivityHistory =` |
| 1,985 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |
| 1,987 | `confidenceHistory` | `var confidenceHistory =` |
| 1,989 | `gdpYoYBefore` | `var gdpYoYBefore =` |
| 1,990 | `cpiYoYBefore` | `var cpiYoYBefore =` |
| 1,991 | `sp500ReturnsBefore` | `var sp500ReturnsBefore =` |
| 1,992 | `gdpGrowthBefore` | `var gdpGrowthBefore =` |

### Live data without a render refactor

_line 1,994_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,001 | `liveAsOf` | `var liveAsOf =` |
| 2,002 | `merge` | `function merge(` |
| 2,009 | `docValue` | `function docValue(` |
| 2,018 | `docOk` | `function docOk(` |
| 2,022 | `LIVE` | `function LIVE(` |
| 2,029 | `liveIsoOf` | `function liveIsoOf(` |
| 2,032 | `liveInto` | `function liveInto(` |
| 2,036 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,038_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,040 | `paintReading` | `function paintReading(` |
| 2,054 | `repaintVolatilityRing` | `function repaintVolatilityRing(` |
| 2,060 | `paintTag` | `function paintTag(` |
| 2,067 | `repaintVolatility` | `function repaintVolatility(` |
| 2,071 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,076 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,080 | `repaintLive` | `function repaintLive(` |
| 2,085 | `desireRow` | `function desireRow(` |
| 2,086 | `repaintDesire` | `function repaintDesire(` |
| 2,094 | `syncCapeHistory` | `function syncCapeHistory(` |
| 2,099 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,104_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,105 | `READINGS` | `var READINGS =` |
| 2,174 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,176 | `isNum` | `function isNum(` |
| 2,177 | `rowsOk` | `function rowsOk(` |
| 2,180 | `KINDS` | `var KINDS =` |
| 2,181 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,195 | `receive` | `function receive(` |
| 2,211 | `fmtAsOf` | `function fmtAsOf(` |
| 2,216 | `applyLive` | `function applyLive(` |
| 2,229 | `shapeOk` | `function shapeOk(` |
| 2,236 | `repaintPolicy` | `function repaintPolicy(` |
| 2,242 | `GYN` | `var GYN =` |
| 2,269 | `refreshLiveData` | `function refreshLiveData(` |
| 2,287 | `fetchSiteData` | `function fetchSiteData(` |
| 2,303 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,308_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,309 | `yieldCurve` | `var yieldCurve =` |
| 2,315 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,316 | `curveAsOf` | `function curveAsOf(` |
| 2,320 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,321 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,326 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,328_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,329 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,330 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,331 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,332 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,333 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,335_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,336 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,342 | `uninvLagToday` | `var uninvLagToday =` |
| 2,347 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,354 | `gdpSrc` | `var gdpSrc =` |
| 2,358 | `labPanel` | `var labPanel =` |
| 2,387 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,388_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,395 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,396 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,423_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,424 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,430 | `confidenceWord` | `function confidenceWord(` |

### The deficit, year by year

_line 2,457_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,458 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,459 | `deficitHistory` | `var deficitHistory =` |
| 2,462 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,463 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,465 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,474_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,475 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,484_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,485 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,488 | `timelineSpan` | `function timelineSpan(` |
| 2,493 | `timelineFor` | `function timelineFor(` |
| 2,504 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,510_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,511 | `windowScale` | `function windowScale(` |
| 2,526 | `windowYears` | `function windowYears(` |
| 2,534 | `refName` | `function refName(` |
| 2,538 | `histReadEnsure` | `function histReadEnsure(` |
| 2,558 | `histReadFill` | `function histReadFill(` |
| 2,608 | `histAxisEnds` | `function histAxisEnds(` |
| 2,619 | `histLegend` | `function histLegend(` |
| 2,679 | `refitHistory` | `function refitHistory(` |
| 2,689 | `wireHistHover` | `function wireHistHover(` |
| 2,726 | `mWindowFrom` | `function mWindowFrom(` |
| 2,730 | `qWindowFrom` | `function qWindowFrom(` |
| 2,735 | `DEF_1983` | `var DEF_1983 =` |
| 2,736 | `defFrom` | `function defFrom(` |
| 2,741 | `deficitChart` | `function deficitChart(` |
| 2,809 | `deficitBlock` | `function deficitBlock(` |
| 2,849 | `buffettHistory` | `var buffettHistory =` |
| 2,851 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,852 | `hyDates` | `var hyDates =` |
| 2,853 | `hyOas` | `var hyOas =` |
| 2,854 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,861 | `hyAt` | `function hyAt(` |
| 2,865 | `hyLabel` | `function hyLabel(` |
| 2,866 | `hyNum` | `function hyNum(` |
| 2,867 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,875 | `hyQuarters` | `function hyQuarters(` |
| 2,883 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,885 | `capeHistory` | `var capeHistory =` |
| 2,887 | `longCycleSrc` | `var longCycleSrc =` |
| 2,903 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,917_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,918 | `sentiment` | `var sentiment =` |
| 2,935 | `valuation` | `var valuation =` |
| 2,956 | `valRow` | `function valRow(` |
| 2,961 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,965 | `coincident` | `var coincident =` |
| 3,006 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 3,012 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 3,013 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 3,014 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 3,016_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,017 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 3,018 | `m2vHistory` | `var m2vHistory =` |
| 3,034 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,086 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,128_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,129 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,130 | `DOTS` | `var DOTS =` |
| 3,132 | `headPickRow` | `function headPickRow(` |
| 3,138 | `histHead` | `function histHead(` |
| 3,153 | `headNoteIdx` | `var headNoteIdx =` |
| 3,154 | `headMenuHtml` | `function headMenuHtml(` |
| 3,179 | `headMenuFor` | `var headMenuFor =` |
| 3,180 | `headSubFor` | `var headSubFor =` |
| 3,181 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,192 | `headMoreBtn` | `function headMoreBtn(` |
| 3,196 | `headMenuFirst` | `function headMenuFirst(` |
| 3,200 | `headMenuShut` | `function headMenuShut(` |
| 3,227 | `histNote` | `function histNote(` |
| 3,228 | `meterFlagged` | `function meterFlagged(` |
| 3,235 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,258 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,272 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,285 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,290 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,294 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,306 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,320 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,339 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,370 | `desireBlock` | `function desireBlock(` |
| 3,381 | `volumeBlock` | `function volumeBlock(` |
| 3,393 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,405 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,412_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,413 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,414 | `m2Level` | `var m2Level =` |
| 3,435 | `m2Yoy` | `var m2Yoy =` |
| 3,436 | `M2_NORM` | `var M2_NORM =` |
| 3,438 | `volumeVerdict` | `function volumeVerdict(` |
| 3,446 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,447 | `unempHistory` | `var unempHistory =` |
| 3,453 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,462 | `NROU_NOW` | `var NROU_NOW =` |
| 3,463 | `unempState` | `function unempState(` |
| 3,469 | `yearTicks` | `function yearTicks(` |
| 3,484 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,525_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,526 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,535 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,580 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,581 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,582 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,583_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,585 | `householdsChart` | `function householdsChart(` |
| 3,635 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,677 | `GDP_NORM` | `var GDP_NORM =` |
| 3,678 | `gdpNowQ` | `var gdpNowQ =` |
| 3,679 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,701 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,752 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,797 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,805 | `velocityVerdict` | `function velocityVerdict(` |
| 3,813 | `derivePulseTag` | `function derivePulseTag(` |
| 3,819 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,851_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,852 | `seasonReading` | `var seasonReading =` |
| 3,896 | `frameworkRows` | `var frameworkRows =` |
| 3,906 | `vixRow` | `var vixRow =` |
| 3,907 | `VIX_CALM` | `var VIX_CALM =` |
| 3,908 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,912 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,919_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,920 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,929_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,930 | `calendarTodayY` | `var calendarTodayY =` |
| 3,932 | `vix3mClose` | `var vix3mClose =` |
| 3,933 | `fearCurve` | `function fearCurve(` |
| 3,938 | `curveVerdict` | `function curveVerdict(` |
| 3,943 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,952_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,953 | `modeBar` | `function modeBar(` |
| 3,960 | `pickerOpen` | `var pickerOpen =` |
| 3,961 | `cycleByName` | `function cycleByName(` |
| 3,965 | `openCycle` | `function openCycle(` |
| 3,969 | `cycleSlice` | `function cycleSlice(` |
| 3,977 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,985 | `cycleMonths` | `function cycleMonths(` |
| 3,993 | `histControls` | `function histControls(` |
| 4,002 | `pageCycle` | `function pageCycle(` |
| 4,006 | `cycLabel` | `function cycLabel(` |
| 4,010 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 4,015 | `cyclePicker` | `function cyclePicker(` |
| 4,034 | `rangeBar` | `function rangeBar(` |
| 4,041 | `trendOf` | `function trendOf(` |
| 4,056 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,060 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 4,071_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,072 | `yearOf` | `function yearOf(` |
| 4,073 | `mean` | `function mean(` |

### The record rows

_line 4,074_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,075 | `headSigma` | `function headSigma(` |
| 4,080 | `atQuarter` | `function atQuarter(` |
| 4,081 | `atMonth` | `function atMonth(` |
| 4,082 | `ordinal` | `function ordinal(` |
| 4,083 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,086_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,087 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,094 | `moreRow` | `function moreRow(` |
| 4,100 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,101 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,107_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,108 | `xLabelOf` | `function xLabelOf(` |
| 4,118 | `fitLine` | `function fitLine(` |
| 4,122 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,140_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,141 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,149 | `vGrid` | `function vGrid(` |
| 4,153 | `COL_FILL` | `var COL_FILL =` |
| 4,154 | `colPath` | `function colPath(` |
| 4,159 | `colWidth` | `function colWidth(` |
| 4,164 | `AXIS` | `var AXIS =` |
| 4,165 | `histFrame` | `function histFrame(` |
| 4,172 | `xLabel` | `function xLabel(` |
| 4,175 | `crossLine` | `function crossLine(` |
| 4,178 | `zeroRule` | `function zeroRule(` |
| 4,181 | `meanRule` | `function meanRule(` |
| 4,182 | `pendingGeom` | `var pendingGeom =` |
| 4,183 | `publishGeom` | `function publishGeom(` |
| 4,184 | `attachHistory` | `function attachHistory(` |
| 4,193 | `histBar` | `function histBar(` |
| 4,196 | `histTip` | `function histTip(` |
| 4,197 | `avgRule` | `function avgRule(` |
| 4,200 | `vhOpen` | `function vhOpen(` |
| 4,201 | `chartAxes` | `function chartAxes(` |
| 4,231 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,266_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,268 | `maxIn` | `function maxIn(` |
| 4,273 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,274 | `PEEK_W` | `var PEEK_W =` |
| 4,275 | `PEEK_H` | `var PEEK_H =` |
| 4,276 | `colPeek` | `function colPeek(` |
| 4,294 | `meterPeek` | `function meterPeek(` |
| 4,311 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,316 | `pressureZone` | `function pressureZone(` |
| 4,322 | `HZN_BACK` | `var HZN_BACK =` |
| 4,323 | `hznLast` | `function hznLast(` |
| 4,324 | `hznRecord` | `function hznRecord(` |
| 4,328 | `hznBack` | `function hznBack(` |
| 4,329 | `horizonWord` | `function horizonWord(` |
| 4,349 | `HZN_METERS` | `var HZN_METERS =` |
| 4,357 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,378 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,383 | `RISK_RISK` | `var RISK_RISK =` |
| 4,388 | `riskCell` | `function riskCell(` |
| 4,389 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,419 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,444_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,445 | `pulseClipN` | `var pulseClipN =` |
| 4,446 | `beatPath` | `function beatPath(` |
| 4,463 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,477 | `pulsePeek` | `function pulsePeek(` |
| 4,480 | `pulseBlock` | `function pulseBlock(` |
| 4,497 | `CHEV` | `var CHEV =` |
| 4,498 | `peekCard` | `function peekCard(` |
| 4,517 | `dropSvg` | `function dropSvg(` |
| 4,519 | `gaugeSvg` | `function gaugeSvg(` |
| 4,523 | `diamondSvg` | `function diamondSvg(` |
| 4,527 | `sproutSvg` | `function sproutSvg(` |
| 4,535 | `markSvg` | `function markSvg(` |
| 4,538 | `heartSvg` | `function heartSvg(` |
| 4,540 | `flameSvg` | `function flameSvg(` |
| 4,543 | `clockSvg` | `function clockSvg(` |
| 4,544 | `thermoSvg` | `function thermoSvg(` |
| 4,547 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,549 | `personSvg` | `function personSvg(` |
| 4,551 | `bookSvg` | `function bookSvg(` |
| 4,554 | `ecgSvg` | `function ecgSvg(` |
| 4,556 | `circulationSvg` | `function circulationSvg(` |
| 4,557 | `boltSvg` | `function boltSvg(` |
| 4,558 | `houseSvg` | `function houseSvg(` |
| 4,561 | `marketSvg` | `function marketSvg(` |
| 4,564 | `bagSvg` | `function bagSvg(` |
| 4,567 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,575_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,576 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,577 | `dsrHistory` | `var dsrHistory =` |
| 4,578 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,579 | `savHistory` | `var savHistory =` |
| 4,582 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,591 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,592 | `dsrNow` | `var dsrNow =` |
| 4,593 | `savNow` | `var savNow =` |
| 4,594 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,595 | `householdsWord` | `function householdsWord(` |
| 4,602 | `householdsNow` | `var householdsNow =` |
| 4,603 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,620 | `savInfoHtml` | `function savInfoHtml(` |
| 4,638 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,645 | `curveSub` | `var curveSub =` |
| 4,646 | `vixPct` | `function vixPct(` |
| 4,650 | `curveNoteFull` | `var curveNoteFull =` |
| 4,661 | `volatilityRing` | `function volatilityRing(` |
| 4,666 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,667 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,682 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,687_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,688 | `sp500Years` | `var sp500Years =` |
| 4,689 | `marketWord` | `function marketWord(` |
| 4,693 | `marketCol` | `function marketCol(` |
| 4,694 | `marketPeek` | `function marketPeek(` |
| 4,718 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,728 | `marketCycles` | `var marketCycles =` |
| 4,845 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,847_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,848 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,849 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,854_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,855 | `TIMING` | `var TIMING =` |
| 4,861 | `CATEGORIES` | `var CATEGORIES =` |
| 4,867 | `ROSTER` | `var ROSTER =` |
| 4,917 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,918 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,920 | `pageState` | `function pageState(` |
| 4,925 | `pageMode` | `var pageMode =` |
| 4,926 | `pageCycles` | `var pageCycles =` |
| 4,927 | `pageRange` | `var pageRange =` |
| 4,928 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,929 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,930 | `keyed` | `function keyed(` |
| 4,937 | `hyMonths` | `function hyMonths(` |
| 4,940 | `prettyKey` | `function prettyKey(` |
| 4,945 | `lastDate` | `function lastDate(` |
| 4,946 | `compiledDay` | `function compiledDay(` |
| 4,947 | `isoLabel` | `function isoLabel(` |
| 4,951 | `paintWhen` | `function paintWhen(` |
| 4,956 | `labPeriod` | `function labPeriod(` |
| 4,957 | `rosterFor` | `function rosterFor(` |
| 4,958 | `rowReadings` | `function rowReadings(` |
| 4,959 | `indOf` | `function indOf(` |
| 4,960 | `peekOf` | `function peekOf(` |
| 4,965 | `cardDate` | `function cardDate(` |
| 4,966 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,987_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,988 | `slopeOf` | `function slopeOf(` |
| 4,993 | `monthIndex` | `function monthIndex(` |
| 4,994 | `cpiTrend` | `function cpiTrend(` |
| 5,001 | `cpiYear` | `function cpiYear(` |
| 5,005 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 5,006 | `readSeason` | `function readSeason(` |
| 5,025 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 5,026 | `qLabel` | `function qLabel(` |
| 5,042 | `SEASON_YEARS` | `var SEASON_YEARS =` |
| 5,059 | `seasonTrack` | `var seasonTrack =` |
| 5,060 | `closingReading` | `function closingReading(` |
| 5,070 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 5,072_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,073 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 5,074 | `seasonTitle` | `function seasonTitle(` |
| 5,075 | `monthLabel` | `function monthLabel(` |
| 5,076 | `cycleReturns` | `function cycleReturns(` |
| 5,086 | `cycleModel` | `function cycleModel(` |
| 5,117 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 5,125 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,131 | `nowModel` | `var nowModel =` |
| 5,132 | `readingNow` | `var readingNow =` |
| 5,133 | `cpiNow` | `var cpiNow =` |
| 5,134 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,135 | `currentSeason` | `var currentSeason =` |
| 5,136 | `seasonWhy` | `var seasonWhy =` |
| 5,138 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 5,140_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,141 | `rankToDate` | `function rankToDate(` |
| 5,145 | `marketCache` | `var marketCache =` |
| 5,146 | `marketMonths` | `function marketMonths(` |
| 5,153 | `yearAfter` | `function yearAfter(` |
| 5,157 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 5,162_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,163 | `rankIn` | `function rankIn(` |
| 5,168 | `moodLists` | `var moodLists =` |
| 5,169 | `moodSeries` | `function moodSeries(` |
| 5,177 | `moodAt` | `function moodAt(` |
| 5,183 | `MOOD_TURN` | `var MOOD_TURN =` |
| 5,184 | `MOOD_RISING` | `var MOOD_RISING =` |
| 5,185 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 5,186 | `moodWord` | `function moodWord(` |
| 5,190 | `moodRead` | `function moodRead(` |
| 5,197 | `moodCache` | `var moodCache =` |
| 5,198 | `moodTrack` | `function moodTrack(` |
| 5,204 | `moodToday` | `function moodToday(` |
| 5,209 | `cycleStory` | `function cycleStory(` |
| 5,220 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,231 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,232 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,233 | `spreadLabel` | `function spreadLabel(` |
| 5,237 | `policyFacts` | `function policyFacts(` |
| 5,244 | `policyFactRows` | `function policyFactRows(` |
| 5,250 | `allSources` | `var allSources =` |
| 5,265 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,277_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,278 | `SVG_NS` | `var SVG_NS =` |
| 5,279 | `svgEl` | `function svgEl(` |
| 5,284 | `attachHoverTracking` | `function attachHoverTracking(` |
| 5,315 | `hoverAway` | `var hoverAway =` |
| 5,316 | `hoverAwayAdd` | `function hoverAwayAdd(` |
| 5,324 | `hoverAwayLive` | `function hoverAwayLive(` |

### RENDER: range bars + card helpers

_line 5,328_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,329 | `clampPct` | `function clampPct(` |
| 5,332 | `detailTexts` | `var detailTexts =` |
| 5,333 | `detailSlots` | `var detailSlots =` |
| 5,334 | `detailSlot` | `function detailSlot(` |
| 5,344 | `metricSheet` | `function metricSheet(` |
| 5,349 | `ledeHtml` | `function ledeHtml(` |
| 5,350 | `facts` | `function facts(` |
| 5,351 | `factsFrom` | `function factsFrom(` |
| 5,355 | `expandBtn` | `function expandBtn(` |
| 5,359 | `sheetRenderers` | `var sheetRenderers =` |
| 5,360 | `drawsPage` | `function drawsPage(` |
| 5,361 | `wireDetailModal` | `function wireDetailModal(` |
| 5,398 | `detailClose` | `var detailClose =` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,401_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,404 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,405_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,406 | `subjectRow` | `function subjectRow(` |
| 5,416 | `subjectIcon` | `function subjectIcon(` |
| 5,417 | `srcHtml` | `function srcHtml(` |
| 5,418 | `timingMark` | `function timingMark(` |
| 5,426 | `timingPill` | `function timingPill(` |
| 5,435 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,443 | `seatPageFoot` | `function seatPageFoot(` |
| 5,455 | `timingMembers` | `var timingMembers =` |
| 5,457 | `registerTiming` | `function registerTiming(` |
| 5,459 | `headHtml` | `function headHtml(` |
| 5,464 | `heldHighlights` | `var heldHighlights =` |
| 5,465 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,492_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,493 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,494 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,502 | `withLatestPoint` | `function withLatestPoint(` |
| 5,507 | `pressureMaturities` | `function pressureMaturities(` |
| 5,531 | `registerFlowPages` | `function registerFlowPages(` |
| 5,585 | `renderPressureRow` | `function renderPressureRow(` |
| 5,593 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,612 | `ylmColumns` | `function ylmColumns(` |
| 5,632 | `ylmFitLine` | `function ylmFitLine(` |
| 5,644 | `pressureHead` | `function pressureHead(` |
| 5,662 | `showPressureView` | `function showPressureView(` |
| 5,667 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,800_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,801 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,838_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,839 | `spreadSeries` | `function spreadSeries(` |
| 5,883 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 6,009_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,010 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: the Treasury spreads, inside Pressure

_line 6,036_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,037 | `renderHorizonPage` | `function renderHorizonPage(` |
| 6,061 | `spreadInsights` | `function spreadInsights(` |

### RENDER: Valuation (slow)

_line 6,091_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,092 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 6,100_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,101 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,198_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,199 | `renderVolatility` | `function renderVolatility(` |
| 6,244 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,274_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,275 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,296_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,297 | `totalRiseIn` | `function totalRiseIn(` |
| 6,307 | `eraInflation` | `function eraInflation(` |
| 6,318 | `eraGrowth` | `function eraGrowth(` |
| 6,334 | `fmtSigned` | `function fmtSigned(` |
| 6,335 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,336 | `growthShown` | `function growthShown(` |
| 6,337 | `growthShownCap` | `function growthShownCap(` |
| 6,338 | `phaseClass` | `function phaseClass(` |
| 6,339 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,343 | `cycleViewEl` | `var cycleViewEl =` |
| 6,344 | `shownEra` | `var shownEra =` |
| 6,345 | `calendarReset` | `var calendarReset =` |
| 6,346 | `metricPageReset` | `var metricPageReset =` |
| 6,347 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,348 | `topbarBack` | `var topbarBack =` |
| 6,349 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,356_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,357 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,438_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,439 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,458_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,459 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,480_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,482 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,483 | `hubSet` | `function hubSet(` |
| 6,491 | `hubOpen` | `function hubOpen(` |
| 6,498 | `quarterCards` | `function quarterCards(` |
| 6,509 | `popHead` | `function popHead(` |
| 6,510 | `hubLine` | `function hubLine(` |
| 6,511 | `quarterSheet` | `function quarterSheet(` |
| 6,516 | `quarterPopup` | `function quarterPopup(` |
| 6,538 | `hubShowDefault` | `function hubShowDefault(` |
| 6,545 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,550 | `hubShowYear` | `function hubShowYear(` |
| 6,560 | `renderCycleDial` | `function renderCycleDial(` |
| 6,643 | `dialKeyStep` | `function dialKeyStep(` |
| 6,651 | `dialSay` | `function dialSay(` |
| 6,658 | `m2Step` | `function m2Step(` |
| 6,661 | `heatStep` | `function heatStep(` |
| 6,665 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,676_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,677 | `renderCycleView` | `function renderCycleView(` |
| 6,683 | `shownEraModel` | `var shownEraModel =` |
| 6,684 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,686_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,687 | `stripGroupName` | `var stripGroupName =` |
| 6,688 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,716 | `marketStripHtml` | `function marketStripHtml(` |
| 6,750 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,751 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,780_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,781 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,787 | `debtSvg` | `function debtSvg(` |
| 6,788 | `interestSvg` | `function interestSvg(` |
| 6,790 | `budgetSvg` | `function budgetSvg(` |
| 6,792 | `lede` | `function lede(` |
| 6,793 | `periodOf` | `function periodOf(` |
| 6,794 | `meterWord` | `function meterWord(` |
| 6,795 | `splitPages` | `function splitPages(` |
| 6,812 | `confidencePage` | `function confidencePage(` |
| 6,818 | `marketPage` | `function marketPage(` |
| 6,824 | `productivityPage` | `function productivityPage(` |
| 6,829 | `splitSpec` | `function splitSpec(` |
| 6,835 | `splitInfo` | `function splitInfo(` |
| 6,839 | `periodTicks` | `function periodTicks(` |
| 6,844 | `periodOfSeries` | `function periodOfSeries(` |
| 6,845 | `drawSplit` | `function drawSplit(` |
| 6,862 | `mountSplit` | `function mountSplit(` |
| 6,875 | `splitPeek` | `function splitPeek(` |
| 6,882 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,890 | `deficitPeek` | `function deficitPeek(` |
| 6,894 | `catSheet` | `function catSheet(` |
| 6,899 | `catList` | `function catList(` |
| 6,900 | `groupId` | `function groupId(` |
| 6,901 | `groupCard` | `function groupCard(` |
| 6,909 | `groupSheet` | `function groupSheet(` |
| 6,916 | `appendPicks` | `function appendPicks(` |
| 6,924 | `doorSel` | `function doorSel(` |
| 6,925 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,937_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,938 | `buffettInsight` | `function buffettInsight(` |
| 6,953 | `debtInsight` | `function debtInsight(` |
| 6,968 | `productivityInsight` | `function productivityInsight(` |
| 6,978 | `confidenceInsight` | `function confidenceInsight(` |
| 6,989 | `ORDINAL` | `var ORDINAL =` |
| 6,990 | `marketInsight` | `function marketInsight(` |
| 7,002 | `interestInsight` | `function interestInsight(` |
| 7,017 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 7,040 | `orderMetricSheets` | `function orderMetricSheets(` |
| 7,060 | `activityStackHtml` | `function activityStackHtml(` |
| 7,070 | `seatTemperature` | `function seatTemperature(` |
| 7,078 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 7,111_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,112 | `partsOf` | `function partsOf(` |
| 7,121 | `authored` | `function authored(` |
| 7,122 | `registerRoster` | `function registerRoster(` |
| 7,144 | `indRow` | `function indRow(` |
| 7,148 | `IND_ORDER` | `var IND_ORDER =` |
| 7,149 | `indGroupRow` | `function indGroupRow(` |
| 7,154 | `catMembers` | `function catMembers(` |
| 7,162 | `indRows` | `function indRows(` |
| 7,176 | `indCategoryHtml` | `function indCategoryHtml(` |
| 7,183 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 7,185_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,186 | `NAV` | `var NAV =` |
| 7,187 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,282_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,283 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,330_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,331 | `qPretty` | `function qPretty(` |
| 7,332 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,333 | `peekArt` | `function peekArt(` |
| 7,334 | `indPeriod` | `function indPeriod(` |
| 7,338 | `catItem` | `function catItem(` |
| 7,346 | `catCard` | `function catCard(` |
| 7,388 | `insightCirculation` | `function insightCirculation(` |
| 7,421 | `insightWeather` | `function insightWeather(` |
| 7,461 | `seasonCards` | `function seasonCards(` |
| 7,467 | `marketCycleCard` | `function marketCycleCard(` |
| 7,479 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,483 | `seasonName` | `function seasonName(` |
| 7,484 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,491 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,496 | `curvePath` | `function curvePath(` |
| 7,504 | `moodCallout` | `function moodCallout(` |
| 7,508 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,520 | `moodInfo` | `function moodInfo(` |
| 7,529 | `moodFigures` | `function moodFigures(` |
| 7,535 | `moodCard` | `function moodCard(` |
| 7,539 | `insightMood` | `function insightMood(` |
| 7,545 | `storyBeats` | `function storyBeats(` |
| 7,556 | `storyText` | `function storyText(` |
| 7,560 | `PAIR_ART` | `var PAIR_ART =` |
| 7,566 | `placeSignPair` | `function placeSignPair(` |
| 7,589 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,605 | `buildCategories` | `function buildCategories(` |
| 7,621 | `tempPeek` | `function tempPeek(` |
| 7,627 | `gdpPeek` | `function gdpPeek(` |
| 7,632 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,659_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,660 | `capeFmt1` | `function capeFmt1(` |
| 7,661 | `actCycleMonths` | `function actCycleMonths(` |
| 7,669 | `householdsHighlights` | `function householdsHighlights(` |
| 7,688 | `redrawSheet` | `function redrawSheet(` |
| 7,692 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,737 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,774 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,821 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,851 | `valuationHighlights` | `function valuationHighlights(` |
| 7,864 | `tempHighlights` | `function tempHighlights(` |
| 7,881 | `gdpHighlights` | `function gdpHighlights(` |
| 7,896 | `renderMetricPages` | `function renderMetricPages(` |
| 7,906 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,916_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,917 | `todayFace` | `function todayFace(` |
| 7,923 | `readDoor` | `function readDoor(` |
| 7,931 | `pct` | `function pct(` |
| 7,932 | `rosterRows` | `function rosterRows(` |
| 7,933 | `eraEnds` | `function eraEnds(` |
| 7,940 | `eraMove` | `function eraMove(` |
| 7,944 | `HORMONES` | `var HORMONES =` |
| 7,945 | `analysisFor` | `function analysisFor(` |
| 7,951 | `dxRow` | `function dxRow(` |
| 7,952 | `dxText` | `function dxText(` |
| 7,953 | `dxSection` | `function dxSection(` |
| 7,954 | `systemHtml` | `function systemHtml(` |
| 7,957 | `dxHead` | `function dxHead(` |
| 7,962 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,971 | `acrossCycle` | `function acrossCycle(` |
| 7,978 | `moodDoor` | `function moodDoor(` |
| 7,983 | `trendText` | `function trendText(` |
| 7,984 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,988 | `replaceInsights` | `function replaceInsights(` |
| 7,994 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,998 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 8,011_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,012 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 8,013 | `cycleDataOn` | `function cycleDataOn(` |
| 8,014 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 8,034 | `wireCycleData` | `function wireCycleData(` |
| 8,049 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 8,094_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,095 | `eraOpen` | `var eraOpen =` |
| 8,096 | `kT` | `function kT(` |
| 8,100 | `upTo` | `function upTo(` |
| 8,101 | `pairAt` | `function pairAt(` |
| 8,102 | `eraReading` | `function eraReading(` |
| 8,112 | `eraFig` | `function eraFig(` |
| 8,119 | `eraValue` | `function eraValue(` |
| 8,125 | `eraRange` | `function eraRange(` |
| 8,130 | `eraMini` | `function eraMini(` |
| 8,135 | `eraCard` | `function eraCard(` |
| 8,154 | `eraCards` | `function eraCards(` |
| 8,160 | `eraShow` | `function eraShow(` |
| 8,167 | `enterEra` | `function enterEra(` |
| 8,174 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,181_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,182 | `rosterRow` | `function rosterRow(` |
| 8,195 | `__roster` | `var __roster =` |
| 8,196 | `readingRoster` | `function readingRoster(` |
| 8,203 | `withUnit` | `function withUnit(` |
| 8,204 | `pastFigure` | `function pastFigure(` |
| 8,208 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,210_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,211 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,235 | `placeWords` | `function placeWords(` |
| 8,239 | `symptomNote` | `function symptomNote(` |
| 8,246 | `symptomRow` | `function symptomRow(` |
| 8,253 | `cycleTrack` | `function cycleTrack(` |
| 8,268 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,276_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,277 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,326_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,327 | `renderTopbar` | `function renderTopbar(` |
| 8,357 | `wireTabKeys` | `function wireTabKeys(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,360_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,361 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **10 compute a value**, 10 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,997–2,000 | `LIVE_CACHE` | Live data without a render refactor |
| 2,390–2,394 | `productivityRecord` | Productivity growth is not in this panel |
| 2,407–2,429 | `productivityReading` | Productivity growth is not in this panel |
| 2,425–2,429 | `confidenceRecord` | Consumer confidence |
| 2,436–4,348 | `confidenceReading` | Consumer confidence |
| 4,335–4,348 | `horizonRead` | A series' highest reading within a span |
| 4,699–5,040 | `marketReading` | The S&P 500, year by year |
| 5,027–5,040 | `seasonTrackAll` | The season, computed |
| 5,043–5,058 | `seasonTrackYears` | The season, computed |
| 5,065–5,069 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,756 |
| `pressure-range` | 2,078 |
| `sheet-marker-deficit` | 7,753 |
| `sheet-metric-gdp` | 7,717 |
| `sheet-metric-households` | 7,775 |
| `sheet-metric-temp` | 7,693 |
| `sheet-metric-valuation` | 7,795 |
| `sheet-sign-activity` | 7,738 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,760 |
| `desire-range` | 5,567 |
| `fear-range` | 6,207 |
| `pressure-range` | 5,772 |
| `pulse-range` | 5,535 |
| `sheet-metric-gdp` | 7,718 |
| `sheet-metric-temp` | 7,694 |
| `sheet-metric-valuation` | 7,796 |
| `volume-range` | 5,551 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

_none found — if that is wrong, the pattern in `tools/make-map.py` needs updating._

## Stylesheet, section by section

| Line | Section |
|---|---|
| 145 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 239 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 275 | season strip |
| 301 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 365 | tab bar (app-style segmented navigation) |
| 400 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 415 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 488 | journal (editorial content tab) |
| 494 | content tab: reading companion |
| 543 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 737 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 812 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 885 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,054 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,069 | The symptoms: a cycle's years against today |
| 1,146 | hero: yield curve |
| 1,178 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,197 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,224 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,232 | long cycle (structural layer) |
| 1,239 | indicator grid |
| 1,265 | info icon + popover (progressive disclosure for longer notes) |
| 1,279 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,363 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (109), which is what the renderers fill:

| Line | id |
|---|---|
| 1,379 | `topbar-back` |
| 1,382 | `topbar-title` |
| 1,383 | `menu-btn` |
| 1,390 | `tab-cycle` |
| 1,391 | `tab-search` |
| 1,392 | `tab-analysis` |
| 1,393 | `tab-portfolio` |
| 1,397 | `main` |
| 1,399 | `panel-cycle` |
| 1,400 | `cycle-view` |
| 1,403 | `cycle-kicker` |
| 1,406 | `cycle-dial` |
| 1,408 | `season-wheel-hub-open` |
| 1,409 | `season-wheel-hub-date` |
| 1,410 | `season-wheel-hub-theme` |
| 1,411 | `season-wheel-hub-detail` |
| 1,413 | `season-wheel-keys` |
| 1,414 | `season-wheel-live` |
| 1,422 | `today-analysis` |
| 1,423 | `peek-row` |
| 1,424 | `sheet-metric-temp` |
| 1,425 | `temp-timing` |
| 1,426 | `temp-chart` |
| 1,427 | `temp-rangebar` |
| 1,429 | `temp-head` |
| 1,430 | `temp-history` |
| 1,431 | `temp-hist-tooltip` |
| 1,432 | `temp-trend` |
| 1,434 | `temp-highlights` |
| 1,436 | `sheet-metric-gdp` |
| 1,437 | `gdp-timing` |
| 1,438 | `gdp-chart` |
| 1,439 | `gdp-rangebar` |
| 1,441 | `gdp-head` |
| 1,442 | `gdp-history` |
| 1,443 | `gdp-hist-tooltip` |
| 1,444 | `gdp-trend` |
| 1,446 | `gdp-highlights` |
| 1,450 | `sheet-marker-deficit` |
| 1,450 | `deficit-timing` |
| 1,452 | `sheet-metric-households` |
| 1,453 | `households-timing` |
| 1,454 | `households-chart` |
| 1,455 | `households-highlights` |
| 1,458 | `sheet-metric-valuation` |
| 1,459 | `valuation-timing` |
| 1,460 | `valuation-chart` |
| 1,461 | `valuation-highlights` |
| 1,468 | `subj-value-hormones` |
| 1,469 | `subj-say-hormones` |
| 1,475 | `hormones-history` |
| 1,476 | `hormones-insights` |
| 1,485 | `subj-value-pressure` |
| 1,486 | `subj-say-pressure` |
| 1,492 | `pressure-timeline` |
| 1,494 | `pressure-head` |
| 1,495 | `ylm-shell` |
| 1,496 | `ylm-svg` |
| 1,497 | `ylm-tooltip` |
| 1,499 | `spread-history-shell` |
| 1,500 | `spread-history-svg` |
| 1,501 | `spread-history-tooltip` |
| 1,503 | `ylm-trend` |
| 1,505 | `pressure-insights` |
| 1,512 | `subj-ring-sentiment` |
| 1,515 | `subj-value-sentiment` |
| 1,516 | `subj-say-sentiment` |
| 1,517 | `subj-spark-sentiment` |
| 1,523 | `fear-history` |
| 1,524 | `curve-highlights` |
| 1,530 | `signs-list` |
| 1,535 | `panel-analysis` |
| 1,536 | `calendar-list` |
| 1,543 | `cycle-data` |
| 1,545 | `cycle-legend` |
| 1,546 | `cycle-list` |
| 1,547 | `cycle-more` |
| 1,548 | `cycle-more-label` |
| 1,553 | `calendar-cycle` |
| 1,556 | `panel-portfolio` |
| 1,572 | `panel-search` |
| 1,573 | `search-home` |
| 1,575 | `search-input` |
| 1,577 | `search-list` |
| 1,581 | `more-menu` |
| 1,584 | `menu-back` |
| 1,598 | `sources-open` |
| 1,606 | `appearance-current` |
| 1,612 | `sheet-howto` |
| 1,655 | `sheet-book` |
| 1,686 | `seasons-kicker` |
| 1,688 | `seasons-rows` |
| 1,691 | `framework-kicker` |
| 1,694 | `framework-rows` |
| 1,704 | `sheet-appearance` |
| 1,712 | `theme-toggle` |
| 1,719 | `sheet-contact` |
| 1,728 | `contact-form` |
| 1,729 | `contact-title` |
| 1,730 | `contact-message` |
| 1,732 | `contact-hint` |
| 1,733 | `contact-send` |
| 1,739 | `sheet-sources` |
| 1,742 | `sources-back` |
| 1,747 | `asof-text` |
| 1,748 | `sources-groups` |
| 1,754 | `detail-backdrop` |
| 1,756 | `detail-modal-close` |
| 1,757 | `detail-modal-body` |

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

