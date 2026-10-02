# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,519 lines**, about 687 KB, roughly **195 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `6b87df4` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,374 | the whole stylesheet, every token and rule |
| **Markup** | 1,375–1,762 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,763–8,475 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,476–8,519 | </body></html> |

Counts: **470** top-level functions, **193** top-level vars, **10** top-level IIFEs in the script.

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

_line 2,510_ · 31 declarations

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
| 2,721 | `histShow` | `function histShow(` |
| 2,730 | `histKeysWire` | `function histKeysWire(` |
| 2,750 | `mWindowFrom` | `function mWindowFrom(` |
| 2,754 | `qWindowFrom` | `function qWindowFrom(` |
| 2,759 | `DEF_1983` | `var DEF_1983 =` |
| 2,760 | `defFrom` | `function defFrom(` |
| 2,765 | `deficitChart` | `function deficitChart(` |
| 2,833 | `deficitBlock` | `function deficitBlock(` |
| 2,873 | `buffettHistory` | `var buffettHistory =` |
| 2,875 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,876 | `hyDates` | `var hyDates =` |
| 2,877 | `hyOas` | `var hyOas =` |
| 2,878 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,885 | `hyAt` | `function hyAt(` |
| 2,889 | `hyLabel` | `function hyLabel(` |
| 2,890 | `hyNum` | `function hyNum(` |
| 2,891 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,899 | `hyQuarters` | `function hyQuarters(` |
| 2,907 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,909 | `capeHistory` | `var capeHistory =` |
| 2,911 | `longCycleSrc` | `var longCycleSrc =` |
| 2,927 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,941_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,942 | `sentiment` | `var sentiment =` |
| 2,959 | `valuation` | `var valuation =` |
| 2,980 | `valRow` | `function valRow(` |
| 2,985 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,989 | `coincident` | `var coincident =` |
| 3,030 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 3,036 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 3,037 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 3,038 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 3,040_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,041 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 3,042 | `m2vHistory` | `var m2vHistory =` |
| 3,058 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,110 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,152_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,153 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,154 | `DOTS` | `var DOTS =` |
| 3,156 | `headPickRow` | `function headPickRow(` |
| 3,162 | `histHead` | `function histHead(` |
| 3,177 | `headNoteIdx` | `var headNoteIdx =` |
| 3,178 | `headMenuHtml` | `function headMenuHtml(` |
| 3,203 | `headMenuFor` | `var headMenuFor =` |
| 3,204 | `headSubFor` | `var headSubFor =` |
| 3,205 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,216 | `headMoreBtn` | `function headMoreBtn(` |
| 3,220 | `headMenuFirst` | `function headMenuFirst(` |
| 3,224 | `headMenuShut` | `function headMenuShut(` |
| 3,251 | `histNote` | `function histNote(` |
| 3,252 | `meterFlagged` | `function meterFlagged(` |
| 3,259 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,282 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,296 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,309 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,314 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,318 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,330 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,344 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,363 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,394 | `desireBlock` | `function desireBlock(` |
| 3,405 | `volumeBlock` | `function volumeBlock(` |
| 3,417 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,429 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,436_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,437 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,438 | `m2Level` | `var m2Level =` |
| 3,459 | `m2Yoy` | `var m2Yoy =` |
| 3,460 | `M2_NORM` | `var M2_NORM =` |
| 3,462 | `volumeVerdict` | `function volumeVerdict(` |
| 3,470 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,471 | `unempHistory` | `var unempHistory =` |
| 3,477 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,486 | `NROU_NOW` | `var NROU_NOW =` |
| 3,487 | `unempState` | `function unempState(` |
| 3,493 | `yearTicks` | `function yearTicks(` |
| 3,508 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,549_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,550 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,559 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,604 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,605 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,606 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,607_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,609 | `householdsChart` | `function householdsChart(` |
| 3,659 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,701 | `GDP_NORM` | `var GDP_NORM =` |
| 3,702 | `gdpNowQ` | `var gdpNowQ =` |
| 3,703 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,725 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,776 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,821 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,829 | `velocityVerdict` | `function velocityVerdict(` |
| 3,837 | `derivePulseTag` | `function derivePulseTag(` |
| 3,843 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,875_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,876 | `seasonReading` | `var seasonReading =` |
| 3,920 | `frameworkRows` | `var frameworkRows =` |
| 3,930 | `vixRow` | `var vixRow =` |
| 3,931 | `VIX_CALM` | `var VIX_CALM =` |
| 3,932 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,936 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,943_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,944 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,953_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,954 | `calendarTodayY` | `var calendarTodayY =` |
| 3,956 | `vix3mClose` | `var vix3mClose =` |
| 3,957 | `fearCurve` | `function fearCurve(` |
| 3,962 | `curveVerdict` | `function curveVerdict(` |
| 3,967 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,976_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,977 | `modeBar` | `function modeBar(` |
| 3,984 | `pickerOpen` | `var pickerOpen =` |
| 3,985 | `cycleByName` | `function cycleByName(` |
| 3,989 | `openCycle` | `function openCycle(` |
| 3,993 | `cycleSlice` | `function cycleSlice(` |
| 4,001 | `totalGrowthYears` | `function totalGrowthYears(` |
| 4,009 | `cycleMonths` | `function cycleMonths(` |
| 4,017 | `histControls` | `function histControls(` |
| 4,026 | `pageCycle` | `function pageCycle(` |
| 4,030 | `cycLabel` | `function cycLabel(` |
| 4,034 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 4,039 | `cyclePicker` | `function cyclePicker(` |
| 4,058 | `rangeBar` | `function rangeBar(` |
| 4,065 | `trendOf` | `function trendOf(` |
| 4,080 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,084 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 4,095_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,096 | `yearOf` | `function yearOf(` |
| 4,097 | `mean` | `function mean(` |

### The record rows

_line 4,098_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,099 | `headSigma` | `function headSigma(` |
| 4,104 | `atQuarter` | `function atQuarter(` |
| 4,105 | `atMonth` | `function atMonth(` |
| 4,106 | `ordinal` | `function ordinal(` |
| 4,107 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,110_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,111 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,118 | `moreRow` | `function moreRow(` |
| 4,124 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,125 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,131_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,132 | `xLabelOf` | `function xLabelOf(` |
| 4,142 | `fitLine` | `function fitLine(` |
| 4,146 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,164_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,165 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,173 | `vGrid` | `function vGrid(` |
| 4,177 | `COL_FILL` | `var COL_FILL =` |
| 4,178 | `colPath` | `function colPath(` |
| 4,183 | `colWidth` | `function colWidth(` |
| 4,188 | `AXIS` | `var AXIS =` |
| 4,189 | `histFrame` | `function histFrame(` |
| 4,196 | `xLabel` | `function xLabel(` |
| 4,199 | `crossLine` | `function crossLine(` |
| 4,202 | `zeroRule` | `function zeroRule(` |
| 4,205 | `meanRule` | `function meanRule(` |
| 4,206 | `pendingGeom` | `var pendingGeom =` |
| 4,207 | `publishGeom` | `function publishGeom(` |
| 4,208 | `attachHistory` | `function attachHistory(` |
| 4,217 | `histBar` | `function histBar(` |
| 4,220 | `histTip` | `function histTip(` |
| 4,221 | `avgRule` | `function avgRule(` |
| 4,224 | `vhOpen` | `function vhOpen(` |
| 4,225 | `chartAxes` | `function chartAxes(` |
| 4,255 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,290_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,292 | `maxIn` | `function maxIn(` |
| 4,297 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,298 | `PEEK_W` | `var PEEK_W =` |
| 4,299 | `PEEK_H` | `var PEEK_H =` |
| 4,300 | `colPeek` | `function colPeek(` |
| 4,318 | `meterPeek` | `function meterPeek(` |
| 4,335 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,340 | `pressureZone` | `function pressureZone(` |
| 4,346 | `HZN_BACK` | `var HZN_BACK =` |
| 4,347 | `hznLast` | `function hznLast(` |
| 4,348 | `hznRecord` | `function hznRecord(` |
| 4,352 | `hznBack` | `function hznBack(` |
| 4,353 | `horizonWord` | `function horizonWord(` |
| 4,373 | `HZN_METERS` | `var HZN_METERS =` |
| 4,381 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,402 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,407 | `RISK_RISK` | `var RISK_RISK =` |
| 4,412 | `riskCell` | `function riskCell(` |
| 4,413 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,443 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,468_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,469 | `pulseClipN` | `var pulseClipN =` |
| 4,470 | `beatPath` | `function beatPath(` |
| 4,487 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,501 | `pulsePeek` | `function pulsePeek(` |
| 4,504 | `pulseBlock` | `function pulseBlock(` |
| 4,521 | `CHEV` | `var CHEV =` |
| 4,522 | `peekCard` | `function peekCard(` |
| 4,541 | `dropSvg` | `function dropSvg(` |
| 4,543 | `gaugeSvg` | `function gaugeSvg(` |
| 4,547 | `diamondSvg` | `function diamondSvg(` |
| 4,551 | `sproutSvg` | `function sproutSvg(` |
| 4,559 | `markSvg` | `function markSvg(` |
| 4,562 | `heartSvg` | `function heartSvg(` |
| 4,564 | `flameSvg` | `function flameSvg(` |
| 4,567 | `clockSvg` | `function clockSvg(` |
| 4,568 | `thermoSvg` | `function thermoSvg(` |
| 4,571 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,573 | `personSvg` | `function personSvg(` |
| 4,575 | `bookSvg` | `function bookSvg(` |
| 4,578 | `ecgSvg` | `function ecgSvg(` |
| 4,580 | `circulationSvg` | `function circulationSvg(` |
| 4,581 | `boltSvg` | `function boltSvg(` |
| 4,582 | `houseSvg` | `function houseSvg(` |
| 4,585 | `marketSvg` | `function marketSvg(` |
| 4,588 | `bagSvg` | `function bagSvg(` |
| 4,591 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,599_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,600 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,601 | `dsrHistory` | `var dsrHistory =` |
| 4,602 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,603 | `savHistory` | `var savHistory =` |
| 4,606 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,615 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,616 | `dsrNow` | `var dsrNow =` |
| 4,617 | `savNow` | `var savNow =` |
| 4,618 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,619 | `householdsWord` | `function householdsWord(` |
| 4,626 | `householdsNow` | `var householdsNow =` |
| 4,627 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,644 | `savInfoHtml` | `function savInfoHtml(` |
| 4,662 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,669 | `curveSub` | `var curveSub =` |
| 4,670 | `vixPct` | `function vixPct(` |
| 4,674 | `curveNoteFull` | `var curveNoteFull =` |
| 4,685 | `volatilityRing` | `function volatilityRing(` |
| 4,690 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,691 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,706 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,711_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,712 | `sp500Years` | `var sp500Years =` |
| 4,713 | `marketWord` | `function marketWord(` |
| 4,717 | `marketCol` | `function marketCol(` |
| 4,718 | `marketPeek` | `function marketPeek(` |
| 4,742 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,752 | `marketCycles` | `var marketCycles =` |
| 4,869 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,871_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,872 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,873 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,878_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,879 | `TIMING` | `var TIMING =` |
| 4,885 | `CATEGORIES` | `var CATEGORIES =` |
| 4,891 | `ROSTER` | `var ROSTER =` |
| 4,941 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,942 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,944 | `pageState` | `function pageState(` |
| 4,949 | `pageMode` | `var pageMode =` |
| 4,950 | `pageCycles` | `var pageCycles =` |
| 4,951 | `pageRange` | `var pageRange =` |
| 4,952 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,953 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,954 | `keyed` | `function keyed(` |
| 4,961 | `hyMonths` | `function hyMonths(` |
| 4,964 | `prettyKey` | `function prettyKey(` |
| 4,969 | `lastDate` | `function lastDate(` |
| 4,970 | `compiledDay` | `function compiledDay(` |
| 4,971 | `isoLabel` | `function isoLabel(` |
| 4,975 | `paintWhen` | `function paintWhen(` |
| 4,980 | `labPeriod` | `function labPeriod(` |
| 4,981 | `rosterFor` | `function rosterFor(` |
| 4,982 | `rowReadings` | `function rowReadings(` |
| 4,983 | `indOf` | `function indOf(` |
| 4,984 | `peekOf` | `function peekOf(` |
| 4,989 | `cardDate` | `function cardDate(` |
| 4,990 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 5,011_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,012 | `slopeOf` | `function slopeOf(` |
| 5,017 | `monthIndex` | `function monthIndex(` |
| 5,018 | `cpiTrend` | `function cpiTrend(` |
| 5,025 | `cpiYear` | `function cpiYear(` |
| 5,029 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 5,030 | `readSeason` | `function readSeason(` |
| 5,049 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 5,050 | `qLabel` | `function qLabel(` |
| 5,066 | `SEASON_YEARS` | `var SEASON_YEARS =` |
| 5,083 | `seasonTrack` | `var seasonTrack =` |
| 5,084 | `closingReading` | `function closingReading(` |
| 5,094 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 5,096_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,097 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 5,098 | `seasonTitle` | `function seasonTitle(` |
| 5,099 | `monthLabel` | `function monthLabel(` |
| 5,100 | `cycleReturns` | `function cycleReturns(` |
| 5,110 | `cycleModel` | `function cycleModel(` |
| 5,141 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 5,149 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,155 | `nowModel` | `var nowModel =` |
| 5,156 | `readingNow` | `var readingNow =` |
| 5,157 | `cpiNow` | `var cpiNow =` |
| 5,158 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,159 | `currentSeason` | `var currentSeason =` |
| 5,160 | `seasonWhy` | `var seasonWhy =` |
| 5,162 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 5,164_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,165 | `rankToDate` | `function rankToDate(` |
| 5,169 | `marketCache` | `var marketCache =` |
| 5,170 | `marketMonths` | `function marketMonths(` |
| 5,177 | `yearAfter` | `function yearAfter(` |
| 5,181 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 5,186_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,187 | `rankIn` | `function rankIn(` |
| 5,192 | `moodLists` | `var moodLists =` |
| 5,193 | `moodSeries` | `function moodSeries(` |
| 5,201 | `moodAt` | `function moodAt(` |
| 5,207 | `MOOD_TURN` | `var MOOD_TURN =` |
| 5,208 | `MOOD_RISING` | `var MOOD_RISING =` |
| 5,209 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 5,210 | `moodWord` | `function moodWord(` |
| 5,214 | `moodRead` | `function moodRead(` |
| 5,221 | `moodCache` | `var moodCache =` |
| 5,222 | `moodTrack` | `function moodTrack(` |
| 5,228 | `moodToday` | `function moodToday(` |
| 5,233 | `cycleStory` | `function cycleStory(` |
| 5,244 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,255 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,256 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,257 | `spreadLabel` | `function spreadLabel(` |
| 5,261 | `policyFacts` | `function policyFacts(` |
| 5,268 | `policyFactRows` | `function policyFactRows(` |
| 5,274 | `allSources` | `var allSources =` |
| 5,289 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,301_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,302 | `SVG_NS` | `var SVG_NS =` |
| 5,303 | `svgEl` | `function svgEl(` |
| 5,308 | `attachHoverTracking` | `function attachHoverTracking(` |
| 5,339 | `hoverAway` | `var hoverAway =` |
| 5,340 | `hoverAwayAdd` | `function hoverAwayAdd(` |
| 5,348 | `hoverAwayLive` | `function hoverAwayLive(` |

### RENDER: range bars + card helpers

_line 5,352_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,353 | `clampPct` | `function clampPct(` |
| 5,356 | `detailTexts` | `var detailTexts =` |
| 5,357 | `detailSlots` | `var detailSlots =` |
| 5,358 | `detailSlot` | `function detailSlot(` |
| 5,368 | `metricSheet` | `function metricSheet(` |
| 5,373 | `ledeHtml` | `function ledeHtml(` |
| 5,374 | `facts` | `function facts(` |
| 5,375 | `factsFrom` | `function factsFrom(` |
| 5,379 | `expandBtn` | `function expandBtn(` |
| 5,383 | `sheetRenderers` | `var sheetRenderers =` |
| 5,384 | `drawsPage` | `function drawsPage(` |
| 5,385 | `wireDetailModal` | `function wireDetailModal(` |
| 5,422 | `detailClose` | `var detailClose =` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,425_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,428 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,429_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,430 | `subjectRow` | `function subjectRow(` |
| 5,440 | `subjectIcon` | `function subjectIcon(` |
| 5,441 | `srcHtml` | `function srcHtml(` |
| 5,442 | `timingMark` | `function timingMark(` |
| 5,450 | `timingPill` | `function timingPill(` |
| 5,459 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,467 | `seatPageFoot` | `function seatPageFoot(` |
| 5,479 | `timingMembers` | `var timingMembers =` |
| 5,481 | `registerTiming` | `function registerTiming(` |
| 5,483 | `headHtml` | `function headHtml(` |
| 5,488 | `heldHighlights` | `var heldHighlights =` |
| 5,489 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,516_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,517 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,518 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,526 | `withLatestPoint` | `function withLatestPoint(` |
| 5,531 | `pressureMaturities` | `function pressureMaturities(` |
| 5,555 | `registerFlowPages` | `function registerFlowPages(` |
| 5,609 | `renderPressureRow` | `function renderPressureRow(` |
| 5,617 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,636 | `ylmColumns` | `function ylmColumns(` |
| 5,656 | `ylmFitLine` | `function ylmFitLine(` |
| 5,668 | `pressureHead` | `function pressureHead(` |
| 5,686 | `showPressureView` | `function showPressureView(` |
| 5,691 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,824_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,825 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,862_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,863 | `spreadSeries` | `function spreadSeries(` |
| 5,907 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 6,033_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,034 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: the Treasury spreads, inside Pressure

_line 6,060_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,061 | `renderHorizonPage` | `function renderHorizonPage(` |
| 6,085 | `spreadInsights` | `function spreadInsights(` |

### RENDER: Valuation (slow)

_line 6,115_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,116 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 6,124_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,125 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,222_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,223 | `renderVolatility` | `function renderVolatility(` |
| 6,268 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,298_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,299 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,320_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,321 | `totalRiseIn` | `function totalRiseIn(` |
| 6,331 | `eraInflation` | `function eraInflation(` |
| 6,342 | `eraGrowth` | `function eraGrowth(` |
| 6,358 | `fmtSigned` | `function fmtSigned(` |
| 6,359 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,360 | `growthShown` | `function growthShown(` |
| 6,361 | `growthShownCap` | `function growthShownCap(` |
| 6,362 | `phaseClass` | `function phaseClass(` |
| 6,363 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,367 | `cycleViewEl` | `var cycleViewEl =` |
| 6,368 | `shownEra` | `var shownEra =` |
| 6,369 | `calendarReset` | `var calendarReset =` |
| 6,370 | `metricPageReset` | `var metricPageReset =` |
| 6,371 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,372 | `topbarBack` | `var topbarBack =` |
| 6,373 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,380_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,381 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,462_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,463 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,482_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,483 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,504_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,506 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,507 | `hubSet` | `function hubSet(` |
| 6,515 | `hubOpen` | `function hubOpen(` |
| 6,522 | `quarterCards` | `function quarterCards(` |
| 6,533 | `popHead` | `function popHead(` |
| 6,534 | `hubLine` | `function hubLine(` |
| 6,535 | `quarterSheet` | `function quarterSheet(` |
| 6,540 | `quarterPopup` | `function quarterPopup(` |
| 6,562 | `hubShowDefault` | `function hubShowDefault(` |
| 6,569 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,574 | `hubShowYear` | `function hubShowYear(` |
| 6,584 | `renderCycleDial` | `function renderCycleDial(` |
| 6,667 | `dialKeyStep` | `function dialKeyStep(` |
| 6,675 | `dialSay` | `function dialSay(` |
| 6,682 | `m2Step` | `function m2Step(` |
| 6,685 | `heatStep` | `function heatStep(` |
| 6,689 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,700_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,701 | `renderCycleView` | `function renderCycleView(` |
| 6,707 | `shownEraModel` | `var shownEraModel =` |
| 6,708 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,710_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,711 | `stripGroupName` | `var stripGroupName =` |
| 6,712 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,740 | `marketStripHtml` | `function marketStripHtml(` |
| 6,774 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,775 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,804_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,805 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,811 | `debtSvg` | `function debtSvg(` |
| 6,812 | `interestSvg` | `function interestSvg(` |
| 6,814 | `budgetSvg` | `function budgetSvg(` |
| 6,816 | `lede` | `function lede(` |
| 6,817 | `periodOf` | `function periodOf(` |
| 6,818 | `meterWord` | `function meterWord(` |
| 6,819 | `splitPages` | `function splitPages(` |
| 6,836 | `confidencePage` | `function confidencePage(` |
| 6,842 | `marketPage` | `function marketPage(` |
| 6,848 | `productivityPage` | `function productivityPage(` |
| 6,853 | `splitSpec` | `function splitSpec(` |
| 6,859 | `splitInfo` | `function splitInfo(` |
| 6,863 | `periodTicks` | `function periodTicks(` |
| 6,868 | `periodOfSeries` | `function periodOfSeries(` |
| 6,869 | `drawSplit` | `function drawSplit(` |
| 6,886 | `mountSplit` | `function mountSplit(` |
| 6,899 | `splitPeek` | `function splitPeek(` |
| 6,906 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,914 | `deficitPeek` | `function deficitPeek(` |
| 6,918 | `catSheet` | `function catSheet(` |
| 6,923 | `catList` | `function catList(` |
| 6,924 | `groupId` | `function groupId(` |
| 6,925 | `groupCard` | `function groupCard(` |
| 6,933 | `groupSheet` | `function groupSheet(` |
| 6,940 | `appendPicks` | `function appendPicks(` |
| 6,948 | `doorSel` | `function doorSel(` |
| 6,949 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,961_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,962 | `buffettInsight` | `function buffettInsight(` |
| 6,977 | `debtInsight` | `function debtInsight(` |
| 6,992 | `productivityInsight` | `function productivityInsight(` |
| 7,002 | `confidenceInsight` | `function confidenceInsight(` |
| 7,013 | `ORDINAL` | `var ORDINAL =` |
| 7,014 | `marketInsight` | `function marketInsight(` |
| 7,026 | `interestInsight` | `function interestInsight(` |
| 7,041 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 7,064 | `orderMetricSheets` | `function orderMetricSheets(` |
| 7,084 | `activityStackHtml` | `function activityStackHtml(` |
| 7,094 | `seatTemperature` | `function seatTemperature(` |
| 7,102 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 7,135_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,136 | `partsOf` | `function partsOf(` |
| 7,145 | `authored` | `function authored(` |
| 7,146 | `registerRoster` | `function registerRoster(` |
| 7,168 | `indRow` | `function indRow(` |
| 7,172 | `IND_ORDER` | `var IND_ORDER =` |
| 7,173 | `indGroupRow` | `function indGroupRow(` |
| 7,178 | `catMembers` | `function catMembers(` |
| 7,186 | `indRows` | `function indRows(` |
| 7,200 | `indCategoryHtml` | `function indCategoryHtml(` |
| 7,207 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 7,209_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,210 | `NAV` | `var NAV =` |
| 7,211 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,306_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,307 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,354_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,355 | `qPretty` | `function qPretty(` |
| 7,356 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,357 | `peekArt` | `function peekArt(` |
| 7,358 | `indPeriod` | `function indPeriod(` |
| 7,362 | `catItem` | `function catItem(` |
| 7,370 | `catCard` | `function catCard(` |
| 7,412 | `insightCirculation` | `function insightCirculation(` |
| 7,445 | `insightWeather` | `function insightWeather(` |
| 7,485 | `seasonCards` | `function seasonCards(` |
| 7,491 | `marketCycleCard` | `function marketCycleCard(` |
| 7,503 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,507 | `seasonName` | `function seasonName(` |
| 7,508 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,515 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,520 | `curvePath` | `function curvePath(` |
| 7,528 | `moodCallout` | `function moodCallout(` |
| 7,532 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,544 | `moodInfo` | `function moodInfo(` |
| 7,553 | `moodFigures` | `function moodFigures(` |
| 7,559 | `moodCard` | `function moodCard(` |
| 7,563 | `insightMood` | `function insightMood(` |
| 7,569 | `storyBeats` | `function storyBeats(` |
| 7,580 | `storyText` | `function storyText(` |
| 7,584 | `PAIR_ART` | `var PAIR_ART =` |
| 7,590 | `placeSignPair` | `function placeSignPair(` |
| 7,613 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,629 | `buildCategories` | `function buildCategories(` |
| 7,645 | `tempPeek` | `function tempPeek(` |
| 7,651 | `gdpPeek` | `function gdpPeek(` |
| 7,656 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,683_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,684 | `capeFmt1` | `function capeFmt1(` |
| 7,685 | `actCycleMonths` | `function actCycleMonths(` |
| 7,693 | `householdsHighlights` | `function householdsHighlights(` |
| 7,712 | `redrawSheet` | `function redrawSheet(` |
| 7,716 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,761 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,798 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,845 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,875 | `valuationHighlights` | `function valuationHighlights(` |
| 7,888 | `tempHighlights` | `function tempHighlights(` |
| 7,905 | `gdpHighlights` | `function gdpHighlights(` |
| 7,920 | `renderMetricPages` | `function renderMetricPages(` |
| 7,930 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,940_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,941 | `todayFace` | `function todayFace(` |
| 7,947 | `readDoor` | `function readDoor(` |
| 7,955 | `pct` | `function pct(` |
| 7,956 | `rosterRows` | `function rosterRows(` |
| 7,957 | `eraEnds` | `function eraEnds(` |
| 7,964 | `eraMove` | `function eraMove(` |
| 7,968 | `HORMONES` | `var HORMONES =` |
| 7,969 | `analysisFor` | `function analysisFor(` |
| 7,975 | `dxRow` | `function dxRow(` |
| 7,976 | `dxText` | `function dxText(` |
| 7,977 | `dxSection` | `function dxSection(` |
| 7,978 | `systemHtml` | `function systemHtml(` |
| 7,981 | `dxHead` | `function dxHead(` |
| 7,986 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,995 | `acrossCycle` | `function acrossCycle(` |
| 8,002 | `moodDoor` | `function moodDoor(` |
| 8,007 | `trendText` | `function trendText(` |
| 8,008 | `renderDiagnosis` | `function renderDiagnosis(` |
| 8,012 | `replaceInsights` | `function replaceInsights(` |
| 8,018 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 8,022 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 8,035_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,036 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 8,037 | `cycleDataOn` | `function cycleDataOn(` |
| 8,038 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 8,058 | `wireCycleData` | `function wireCycleData(` |
| 8,073 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 8,118_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,119 | `eraOpen` | `var eraOpen =` |
| 8,120 | `kT` | `function kT(` |
| 8,124 | `upTo` | `function upTo(` |
| 8,125 | `pairAt` | `function pairAt(` |
| 8,126 | `eraReading` | `function eraReading(` |
| 8,136 | `eraFig` | `function eraFig(` |
| 8,143 | `eraValue` | `function eraValue(` |
| 8,149 | `eraRange` | `function eraRange(` |
| 8,154 | `eraMini` | `function eraMini(` |
| 8,159 | `eraCard` | `function eraCard(` |
| 8,178 | `eraCards` | `function eraCards(` |
| 8,184 | `eraShow` | `function eraShow(` |
| 8,191 | `enterEra` | `function enterEra(` |
| 8,198 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,205_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,206 | `rosterRow` | `function rosterRow(` |
| 8,219 | `__roster` | `var __roster =` |
| 8,220 | `readingRoster` | `function readingRoster(` |
| 8,227 | `withUnit` | `function withUnit(` |
| 8,228 | `pastFigure` | `function pastFigure(` |
| 8,232 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,234_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,235 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,259 | `placeWords` | `function placeWords(` |
| 8,263 | `symptomNote` | `function symptomNote(` |
| 8,270 | `symptomRow` | `function symptomRow(` |
| 8,277 | `cycleTrack` | `function cycleTrack(` |
| 8,292 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,300_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,301 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,350_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,351 | `renderTopbar` | `function renderTopbar(` |
| 8,381 | `wireTabKeys` | `function wireTabKeys(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,384_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,385 | `wireContactForm` | `function wireContactForm(` |

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
| 2,436–4,372 | `confidenceReading` | Consumer confidence |
| 4,359–4,372 | `horizonRead` | A series' highest reading within a span |
| 4,723–5,064 | `marketReading` | The S&P 500, year by year |
| 5,051–5,064 | `seasonTrackAll` | The season, computed |
| 5,067–5,082 | `seasonTrackYears` | The season, computed |
| 5,089–5,093 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,780 |
| `pressure-range` | 2,078 |
| `sheet-marker-deficit` | 7,777 |
| `sheet-metric-gdp` | 7,741 |
| `sheet-metric-households` | 7,799 |
| `sheet-metric-temp` | 7,717 |
| `sheet-metric-valuation` | 7,819 |
| `sheet-sign-activity` | 7,762 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,784 |
| `desire-range` | 5,591 |
| `fear-range` | 6,231 |
| `pressure-range` | 5,796 |
| `pulse-range` | 5,559 |
| `sheet-metric-gdp` | 7,742 |
| `sheet-metric-temp` | 7,718 |
| `sheet-metric-valuation` | 7,820 |
| `volume-range` | 5,575 |

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

