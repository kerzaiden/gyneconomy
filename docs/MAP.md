# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,395 lines**, about 679 KB, roughly **193 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `237fbfa` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,368 | the whole stylesheet, every token and rule |
| **Markup** | 1,369–1,754 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,755–8,351 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,352–8,395 | </body></html> |

Counts: **455** top-level functions, **191** top-level vars, **10** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,755_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,757 | `byId` | `function byId(` |
| 1,765 | `byIdMaybe` | `function byIdMaybe(` |
| 1,766 | `put` | `function put(` |
| 1,771 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,773_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,774 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,775 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,776 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,777 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,781 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,786_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,787 | `wheelMeta` | `var wheelMeta =` |
| 1,795 | `seasonOverride` | `var seasonOverride =` |
| 1,796 | `cycleNowNote` | `var cycleNowNote =` |
| 1,798 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,876 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,918 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,919 | `volatilityHistory` | `var volatilityHistory =` |
| 1,921 | `fiscalHistory` | `var fiscalHistory =` |
| 1,927 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,929 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,939 | `productivityHistory` | `var productivityHistory =` |
| 1,941 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |
| 1,943 | `confidenceHistory` | `var confidenceHistory =` |
| 1,945 | `gdpYoYBefore` | `var gdpYoYBefore =` |
| 1,946 | `cpiYoYBefore` | `var cpiYoYBefore =` |
| 1,947 | `sp500ReturnsBefore` | `var sp500ReturnsBefore =` |
| 1,948 | `gdpGrowthBefore` | `var gdpGrowthBefore =` |

### Live data without a render refactor

_line 1,950_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,957 | `liveAsOf` | `var liveAsOf =` |
| 1,958 | `merge` | `function merge(` |
| 1,965 | `docValue` | `function docValue(` |
| 1,974 | `docOk` | `function docOk(` |
| 1,978 | `LIVE` | `function LIVE(` |
| 1,985 | `liveIsoOf` | `function liveIsoOf(` |
| 1,988 | `liveInto` | `function liveInto(` |
| 1,992 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 1,994_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,996 | `paintReading` | `function paintReading(` |
| 2,010 | `paintTag` | `function paintTag(` |
| 2,017 | `repaintVolatility` | `function repaintVolatility(` |
| 2,021 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,026 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,030 | `repaintLive` | `function repaintLive(` |
| 2,035 | `desireRow` | `function desireRow(` |
| 2,036 | `repaintDesire` | `function repaintDesire(` |
| 2,044 | `syncCapeHistory` | `function syncCapeHistory(` |
| 2,049 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,054_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,055 | `READINGS` | `var READINGS =` |
| 2,124 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,126 | `isNum` | `function isNum(` |
| 2,127 | `rowsOk` | `function rowsOk(` |
| 2,130 | `KINDS` | `var KINDS =` |
| 2,131 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,145 | `receive` | `function receive(` |
| 2,161 | `fmtAsOf` | `function fmtAsOf(` |
| 2,166 | `applyLive` | `function applyLive(` |
| 2,179 | `shapeOk` | `function shapeOk(` |
| 2,186 | `repaintPolicy` | `function repaintPolicy(` |
| 2,192 | `GYN` | `var GYN =` |
| 2,219 | `refreshLiveData` | `function refreshLiveData(` |
| 2,237 | `fetchSiteData` | `function fetchSiteData(` |
| 2,253 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,258_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,259 | `yieldCurve` | `var yieldCurve =` |
| 2,265 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,266 | `curveAsOf` | `function curveAsOf(` |
| 2,270 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,271 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,276 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,278_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,279 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,280 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,281 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,282 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,283 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,285_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,286 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,292 | `uninvLagToday` | `var uninvLagToday =` |
| 2,297 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,304 | `gdpSrc` | `var gdpSrc =` |
| 2,308 | `labPanel` | `var labPanel =` |
| 2,337 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,338_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,345 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,346 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,373_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,374 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,380 | `confidenceWord` | `function confidenceWord(` |

### The deficit, year by year

_line 2,407_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,408 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,409 | `deficitHistory` | `var deficitHistory =` |
| 2,412 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,413 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,415 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,424_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,425 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,434_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,435 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,438 | `timelineSpan` | `function timelineSpan(` |
| 2,443 | `timelineFor` | `function timelineFor(` |
| 2,454 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,460_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,461 | `windowScale` | `function windowScale(` |
| 2,476 | `windowYears` | `function windowYears(` |
| 2,484 | `refName` | `function refName(` |
| 2,488 | `histReadEnsure` | `function histReadEnsure(` |
| 2,508 | `histReadFill` | `function histReadFill(` |
| 2,558 | `histAxisEnds` | `function histAxisEnds(` |
| 2,569 | `histLegend` | `function histLegend(` |
| 2,629 | `refitHistory` | `function refitHistory(` |
| 2,639 | `wireHistHover` | `function wireHistHover(` |
| 2,676 | `mWindowFrom` | `function mWindowFrom(` |
| 2,680 | `qWindowFrom` | `function qWindowFrom(` |
| 2,685 | `DEF_1983` | `var DEF_1983 =` |
| 2,686 | `defFrom` | `function defFrom(` |
| 2,691 | `deficitChart` | `function deficitChart(` |
| 2,759 | `deficitBlock` | `function deficitBlock(` |
| 2,799 | `buffettHistory` | `var buffettHistory =` |
| 2,801 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,802 | `hyDates` | `var hyDates =` |
| 2,803 | `hyOas` | `var hyOas =` |
| 2,804 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,811 | `hyAt` | `function hyAt(` |
| 2,815 | `hyLabel` | `function hyLabel(` |
| 2,816 | `hyNum` | `function hyNum(` |
| 2,817 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,825 | `hyQuarters` | `function hyQuarters(` |
| 2,833 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,835 | `capeHistory` | `var capeHistory =` |
| 2,837 | `longCycleSrc` | `var longCycleSrc =` |
| 2,853 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,867_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,868 | `sentiment` | `var sentiment =` |
| 2,885 | `valuation` | `var valuation =` |
| 2,906 | `valRow` | `function valRow(` |
| 2,911 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,915 | `coincident` | `var coincident =` |
| 2,956 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,962 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,963 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,964 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,966_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,967 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,968 | `m2vHistory` | `var m2vHistory =` |
| 2,984 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,036 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,078_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,079 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,080 | `DOTS` | `var DOTS =` |
| 3,082 | `headPickRow` | `function headPickRow(` |
| 3,088 | `histHead` | `function histHead(` |
| 3,103 | `headNoteIdx` | `var headNoteIdx =` |
| 3,104 | `headMenuHtml` | `function headMenuHtml(` |
| 3,129 | `headMenuFor` | `var headMenuFor =` |
| 3,130 | `headSubFor` | `var headSubFor =` |
| 3,131 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,160 | `histNote` | `function histNote(` |
| 3,161 | `meterFlagged` | `function meterFlagged(` |
| 3,168 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,191 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,205 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,218 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,223 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,227 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,239 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,253 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,272 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,303 | `desireBlock` | `function desireBlock(` |
| 3,314 | `volumeBlock` | `function volumeBlock(` |
| 3,326 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,338 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,345_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,346 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,347 | `m2Level` | `var m2Level =` |
| 3,368 | `m2Yoy` | `var m2Yoy =` |
| 3,369 | `M2_NORM` | `var M2_NORM =` |
| 3,371 | `volumeVerdict` | `function volumeVerdict(` |
| 3,379 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,380 | `unempHistory` | `var unempHistory =` |
| 3,386 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,395 | `NROU_NOW` | `var NROU_NOW =` |
| 3,396 | `unempState` | `function unempState(` |
| 3,402 | `yearTicks` | `function yearTicks(` |
| 3,417 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,458_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,459 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,468 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,513 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,514 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,515 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,516_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,518 | `householdsChart` | `function householdsChart(` |
| 3,568 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,610 | `GDP_NORM` | `var GDP_NORM =` |
| 3,611 | `gdpNowQ` | `var gdpNowQ =` |
| 3,612 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,634 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,685 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,730 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,738 | `velocityVerdict` | `function velocityVerdict(` |
| 3,746 | `derivePulseTag` | `function derivePulseTag(` |
| 3,752 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,784_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,785 | `seasonReading` | `var seasonReading =` |
| 3,829 | `frameworkRows` | `var frameworkRows =` |
| 3,839 | `vixRow` | `var vixRow =` |
| 3,840 | `VIX_CALM` | `var VIX_CALM =` |
| 3,841 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,845 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,852_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,853 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,862_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,863 | `calendarTodayY` | `var calendarTodayY =` |
| 3,865 | `vix3mClose` | `var vix3mClose =` |
| 3,866 | `fearCurve` | `function fearCurve(` |
| 3,871 | `curveVerdict` | `function curveVerdict(` |
| 3,876 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,885_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,886 | `modeBar` | `function modeBar(` |
| 3,893 | `pickerOpen` | `var pickerOpen =` |
| 3,894 | `cycleByName` | `function cycleByName(` |
| 3,898 | `openCycle` | `function openCycle(` |
| 3,902 | `cycleSlice` | `function cycleSlice(` |
| 3,910 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,918 | `cycleMonths` | `function cycleMonths(` |
| 3,926 | `histControls` | `function histControls(` |
| 3,935 | `pageCycle` | `function pageCycle(` |
| 3,939 | `cycLabel` | `function cycLabel(` |
| 3,943 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,948 | `cyclePicker` | `function cyclePicker(` |
| 3,967 | `rangeBar` | `function rangeBar(` |
| 3,974 | `trendOf` | `function trendOf(` |
| 3,989 | `TREND_ARROW` | `var TREND_ARROW =` |
| 3,993 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 4,004_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,005 | `yearOf` | `function yearOf(` |
| 4,006 | `mean` | `function mean(` |

### The record rows

_line 4,007_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,008 | `headSigma` | `function headSigma(` |
| 4,013 | `atQuarter` | `function atQuarter(` |
| 4,014 | `atMonth` | `function atMonth(` |
| 4,015 | `ordinal` | `function ordinal(` |
| 4,016 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,019_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,020 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,027 | `moreRow` | `function moreRow(` |
| 4,033 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,034 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,040_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,041 | `xLabelOf` | `function xLabelOf(` |
| 4,051 | `fitLine` | `function fitLine(` |
| 4,055 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,073_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,074 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,082 | `vGrid` | `function vGrid(` |
| 4,086 | `COL_FILL` | `var COL_FILL =` |
| 4,087 | `colPath` | `function colPath(` |
| 4,092 | `colWidth` | `function colWidth(` |
| 4,097 | `AXIS` | `var AXIS =` |
| 4,098 | `histFrame` | `function histFrame(` |
| 4,105 | `xLabel` | `function xLabel(` |
| 4,108 | `crossLine` | `function crossLine(` |
| 4,111 | `zeroRule` | `function zeroRule(` |
| 4,114 | `meanRule` | `function meanRule(` |
| 4,115 | `pendingGeom` | `var pendingGeom =` |
| 4,116 | `publishGeom` | `function publishGeom(` |
| 4,117 | `attachHistory` | `function attachHistory(` |
| 4,126 | `histBar` | `function histBar(` |
| 4,129 | `histTip` | `function histTip(` |
| 4,130 | `avgRule` | `function avgRule(` |
| 4,133 | `vhOpen` | `function vhOpen(` |
| 4,134 | `chartAxes` | `function chartAxes(` |
| 4,164 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,199_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,201 | `maxIn` | `function maxIn(` |
| 4,206 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,207 | `PEEK_W` | `var PEEK_W =` |
| 4,208 | `PEEK_H` | `var PEEK_H =` |
| 4,209 | `colPeek` | `function colPeek(` |
| 4,227 | `meterPeek` | `function meterPeek(` |
| 4,244 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,249 | `pressureZone` | `function pressureZone(` |
| 4,255 | `HZN_BACK` | `var HZN_BACK =` |
| 4,256 | `hznLast` | `function hznLast(` |
| 4,257 | `hznRecord` | `function hznRecord(` |
| 4,261 | `hznBack` | `function hznBack(` |
| 4,262 | `horizonWord` | `function horizonWord(` |
| 4,282 | `HZN_METERS` | `var HZN_METERS =` |
| 4,290 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,311 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,316 | `RISK_RISK` | `var RISK_RISK =` |
| 4,321 | `riskCell` | `function riskCell(` |
| 4,322 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,352 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,377_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,378 | `pulseClipN` | `var pulseClipN =` |
| 4,379 | `beatPath` | `function beatPath(` |
| 4,396 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,410 | `pulsePeek` | `function pulsePeek(` |
| 4,413 | `pulseBlock` | `function pulseBlock(` |
| 4,430 | `CHEV` | `var CHEV =` |
| 4,431 | `peekCard` | `function peekCard(` |
| 4,450 | `dropSvg` | `function dropSvg(` |
| 4,452 | `gaugeSvg` | `function gaugeSvg(` |
| 4,456 | `diamondSvg` | `function diamondSvg(` |
| 4,460 | `sproutSvg` | `function sproutSvg(` |
| 4,468 | `markSvg` | `function markSvg(` |
| 4,471 | `heartSvg` | `function heartSvg(` |
| 4,473 | `flameSvg` | `function flameSvg(` |
| 4,476 | `clockSvg` | `function clockSvg(` |
| 4,477 | `thermoSvg` | `function thermoSvg(` |
| 4,480 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,482 | `personSvg` | `function personSvg(` |
| 4,484 | `bookSvg` | `function bookSvg(` |
| 4,487 | `ecgSvg` | `function ecgSvg(` |
| 4,489 | `circulationSvg` | `function circulationSvg(` |
| 4,490 | `boltSvg` | `function boltSvg(` |
| 4,491 | `houseSvg` | `function houseSvg(` |
| 4,494 | `marketSvg` | `function marketSvg(` |
| 4,497 | `bagSvg` | `function bagSvg(` |
| 4,500 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,508_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,509 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,510 | `dsrHistory` | `var dsrHistory =` |
| 4,511 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,512 | `savHistory` | `var savHistory =` |
| 4,515 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,524 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,525 | `dsrNow` | `var dsrNow =` |
| 4,526 | `savNow` | `var savNow =` |
| 4,527 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,528 | `householdsWord` | `function householdsWord(` |
| 4,535 | `householdsNow` | `var householdsNow =` |
| 4,536 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,553 | `savInfoHtml` | `function savInfoHtml(` |
| 4,571 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,578 | `curveSub` | `var curveSub =` |
| 4,579 | `vixPct` | `function vixPct(` |
| 4,583 | `curveNoteFull` | `var curveNoteFull =` |
| 4,594 | `volatilityRing` | `function volatilityRing(` |
| 4,599 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,600 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,615 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,620_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,621 | `sp500Years` | `var sp500Years =` |
| 4,622 | `marketWord` | `function marketWord(` |
| 4,626 | `marketCol` | `function marketCol(` |
| 4,627 | `marketPeek` | `function marketPeek(` |
| 4,651 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,661 | `marketCycles` | `var marketCycles =` |
| 4,778 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,780_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,781 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,782 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,787_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,788 | `TIMING` | `var TIMING =` |
| 4,794 | `CATEGORIES` | `var CATEGORIES =` |
| 4,800 | `ROSTER` | `var ROSTER =` |
| 4,850 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,851 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,853 | `pageState` | `function pageState(` |
| 4,858 | `pageMode` | `var pageMode =` |
| 4,859 | `pageCycles` | `var pageCycles =` |
| 4,860 | `pageRange` | `var pageRange =` |
| 4,861 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,862 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,863 | `keyed` | `function keyed(` |
| 4,870 | `hyMonths` | `function hyMonths(` |
| 4,873 | `prettyKey` | `function prettyKey(` |
| 4,878 | `lastDate` | `function lastDate(` |
| 4,879 | `compiledDay` | `function compiledDay(` |
| 4,880 | `isoLabel` | `function isoLabel(` |
| 4,884 | `paintWhen` | `function paintWhen(` |
| 4,889 | `labPeriod` | `function labPeriod(` |
| 4,890 | `rosterFor` | `function rosterFor(` |
| 4,891 | `rowReadings` | `function rowReadings(` |
| 4,892 | `indOf` | `function indOf(` |
| 4,893 | `peekOf` | `function peekOf(` |
| 4,898 | `cardDate` | `function cardDate(` |
| 4,899 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,920_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,921 | `slopeOf` | `function slopeOf(` |
| 4,926 | `monthIndex` | `function monthIndex(` |
| 4,927 | `trendOf` | `function trendOf(` |
| 4,934 | `cpiYear` | `function cpiYear(` |
| 4,938 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,939 | `readSeason` | `function readSeason(` |
| 4,958 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,959 | `qLabel` | `function qLabel(` |
| 4,975 | `SEASON_YEARS` | `var SEASON_YEARS =` |
| 4,992 | `seasonTrack` | `var seasonTrack =` |
| 4,993 | `closingReading` | `function closingReading(` |
| 5,003 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 5,005_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,006 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 5,007 | `seasonTitle` | `function seasonTitle(` |
| 5,008 | `monthLabel` | `function monthLabel(` |
| 5,009 | `cycleReturns` | `function cycleReturns(` |
| 5,019 | `cycleModel` | `function cycleModel(` |
| 5,050 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 5,058 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,064 | `nowModel` | `var nowModel =` |
| 5,065 | `readingNow` | `var readingNow =` |
| 5,066 | `cpiNow` | `var cpiNow =` |
| 5,067 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,068 | `currentSeason` | `var currentSeason =` |
| 5,069 | `seasonWhy` | `var seasonWhy =` |
| 5,071 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 5,073_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,074 | `rankToDate` | `function rankToDate(` |
| 5,078 | `marketCache` | `var marketCache =` |
| 5,079 | `marketMonths` | `function marketMonths(` |
| 5,086 | `yearAfter` | `function yearAfter(` |
| 5,090 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 5,095_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,096 | `rankIn` | `function rankIn(` |
| 5,101 | `moodLists` | `var moodLists =` |
| 5,102 | `moodSeries` | `function moodSeries(` |
| 5,110 | `moodAt` | `function moodAt(` |
| 5,116 | `MOOD_TURN` | `var MOOD_TURN =` |
| 5,117 | `MOOD_RISING` | `var MOOD_RISING =` |
| 5,118 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 5,119 | `moodWord` | `function moodWord(` |
| 5,123 | `moodRead` | `function moodRead(` |
| 5,130 | `moodCache` | `var moodCache =` |
| 5,131 | `moodTrack` | `function moodTrack(` |
| 5,137 | `moodToday` | `function moodToday(` |
| 5,142 | `cycleStory` | `function cycleStory(` |
| 5,153 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,164 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,165 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,166 | `spreadLabel` | `function spreadLabel(` |
| 5,170 | `policyFacts` | `function policyFacts(` |
| 5,177 | `policyFactRows` | `function policyFactRows(` |
| 5,183 | `allSources` | `var allSources =` |
| 5,198 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,210_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,211 | `SVG_NS` | `var SVG_NS =` |
| 5,212 | `svgEl` | `function svgEl(` |
| 5,217 | `attachHoverTracking` | `function attachHoverTracking(` |
| 5,248 | `hoverAway` | `var hoverAway =` |
| 5,249 | `hoverAwayAdd` | `function hoverAwayAdd(` |
| 5,257 | `hoverAwayLive` | `function hoverAwayLive(` |

### RENDER: range bars + card helpers

_line 5,261_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,262 | `clampPct` | `function clampPct(` |
| 5,265 | `detailTexts` | `var detailTexts =` |
| 5,266 | `detailSlots` | `var detailSlots =` |
| 5,267 | `detailSlot` | `function detailSlot(` |
| 5,277 | `metricSheet` | `function metricSheet(` |
| 5,282 | `ledeHtml` | `function ledeHtml(` |
| 5,283 | `facts` | `function facts(` |
| 5,284 | `factsFrom` | `function factsFrom(` |
| 5,288 | `expandBtn` | `function expandBtn(` |
| 5,292 | `sheetRenderers` | `var sheetRenderers =` |
| 5,293 | `drawsPage` | `function drawsPage(` |
| 5,294 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,323_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,326 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,327_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,328 | `subjectRow` | `function subjectRow(` |
| 5,338 | `subjectIcon` | `function subjectIcon(` |
| 5,339 | `srcHtml` | `function srcHtml(` |
| 5,340 | `timingMark` | `function timingMark(` |
| 5,348 | `timingPill` | `function timingPill(` |
| 5,357 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,365 | `seatPageFoot` | `function seatPageFoot(` |
| 5,377 | `timingMembers` | `var timingMembers =` |
| 5,379 | `registerTiming` | `function registerTiming(` |
| 5,381 | `headHtml` | `function headHtml(` |
| 5,386 | `heldHighlights` | `var heldHighlights =` |
| 5,387 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,414_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,415 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,416 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,424 | `withLatestPoint` | `function withLatestPoint(` |
| 5,429 | `pressureMaturities` | `function pressureMaturities(` |
| 5,453 | `registerFlowPages` | `function registerFlowPages(` |
| 5,507 | `renderPressureRow` | `function renderPressureRow(` |
| 5,515 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,534 | `ylmColumns` | `function ylmColumns(` |
| 5,554 | `ylmFitLine` | `function ylmFitLine(` |
| 5,566 | `pressureHead` | `function pressureHead(` |
| 5,584 | `showPressureView` | `function showPressureView(` |
| 5,589 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,722_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,723 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,760_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,761 | `spreadSeries` | `function spreadSeries(` |
| 5,805 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,931_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,932 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: the Treasury spreads, inside Pressure

_line 5,958_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,959 | `renderHorizonPage` | `function renderHorizonPage(` |
| 5,983 | `spreadInsights` | `function spreadInsights(` |

### RENDER: Valuation (slow)

_line 6,013_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,014 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 6,022_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,023 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,120_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,121 | `renderVolatility` | `function renderVolatility(` |
| 6,166 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,196_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,197 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,218_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,219 | `totalRiseIn` | `function totalRiseIn(` |
| 6,229 | `eraInflation` | `function eraInflation(` |
| 6,240 | `eraGrowth` | `function eraGrowth(` |
| 6,256 | `fmtSigned` | `function fmtSigned(` |
| 6,257 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,258 | `growthShown` | `function growthShown(` |
| 6,259 | `growthShownCap` | `function growthShownCap(` |
| 6,260 | `phaseClass` | `function phaseClass(` |
| 6,261 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,265 | `cycleViewEl` | `var cycleViewEl =` |
| 6,266 | `shownEra` | `var shownEra =` |
| 6,267 | `calendarReset` | `var calendarReset =` |
| 6,268 | `metricPageReset` | `var metricPageReset =` |
| 6,269 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,270 | `topbarBack` | `var topbarBack =` |
| 6,271 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,278_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,279 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,360_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,361 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,379_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,380 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,401_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,403 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,404 | `hubSet` | `function hubSet(` |
| 6,412 | `hubOpen` | `function hubOpen(` |
| 6,419 | `quarterCards` | `function quarterCards(` |
| 6,430 | `popHead` | `function popHead(` |
| 6,431 | `hubLine` | `function hubLine(` |
| 6,432 | `quarterSheet` | `function quarterSheet(` |
| 6,437 | `quarterPopup` | `function quarterPopup(` |
| 6,459 | `hubShowDefault` | `function hubShowDefault(` |
| 6,466 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,471 | `hubShowYear` | `function hubShowYear(` |
| 6,481 | `renderCycleDial` | `function renderCycleDial(` |
| 6,562 | `m2Step` | `function m2Step(` |
| 6,565 | `heatStep` | `function heatStep(` |
| 6,569 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,580_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,581 | `renderCycleView` | `function renderCycleView(` |
| 6,587 | `shownEraModel` | `var shownEraModel =` |
| 6,588 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,590_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,591 | `stripGroupName` | `var stripGroupName =` |
| 6,592 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,620 | `marketStripHtml` | `function marketStripHtml(` |
| 6,654 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,655 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,684_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,685 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,691 | `debtSvg` | `function debtSvg(` |
| 6,692 | `interestSvg` | `function interestSvg(` |
| 6,694 | `budgetSvg` | `function budgetSvg(` |
| 6,696 | `lede` | `function lede(` |
| 6,697 | `periodOf` | `function periodOf(` |
| 6,698 | `meterWord` | `function meterWord(` |
| 6,699 | `splitPages` | `function splitPages(` |
| 6,716 | `confidencePage` | `function confidencePage(` |
| 6,722 | `marketPage` | `function marketPage(` |
| 6,728 | `productivityPage` | `function productivityPage(` |
| 6,733 | `splitSpec` | `function splitSpec(` |
| 6,739 | `splitInfo` | `function splitInfo(` |
| 6,743 | `periodTicks` | `function periodTicks(` |
| 6,748 | `periodOfSeries` | `function periodOfSeries(` |
| 6,749 | `drawSplit` | `function drawSplit(` |
| 6,766 | `mountSplit` | `function mountSplit(` |
| 6,779 | `splitPeek` | `function splitPeek(` |
| 6,786 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,794 | `deficitPeek` | `function deficitPeek(` |
| 6,798 | `catSheet` | `function catSheet(` |
| 6,803 | `catList` | `function catList(` |
| 6,804 | `groupId` | `function groupId(` |
| 6,805 | `groupCard` | `function groupCard(` |
| 6,813 | `groupSheet` | `function groupSheet(` |
| 6,820 | `appendPicks` | `function appendPicks(` |
| 6,828 | `doorSel` | `function doorSel(` |
| 6,829 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,841_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,842 | `buffettInsight` | `function buffettInsight(` |
| 6,857 | `debtInsight` | `function debtInsight(` |
| 6,872 | `productivityInsight` | `function productivityInsight(` |
| 6,882 | `confidenceInsight` | `function confidenceInsight(` |
| 6,893 | `ORDINAL` | `var ORDINAL =` |
| 6,894 | `marketInsight` | `function marketInsight(` |
| 6,906 | `interestInsight` | `function interestInsight(` |
| 6,921 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,944 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,964 | `activityStackHtml` | `function activityStackHtml(` |
| 6,974 | `seatTemperature` | `function seatTemperature(` |
| 6,982 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 7,015_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,016 | `partsOf` | `function partsOf(` |
| 7,025 | `authored` | `function authored(` |
| 7,026 | `registerRoster` | `function registerRoster(` |
| 7,048 | `indRow` | `function indRow(` |
| 7,052 | `IND_ORDER` | `var IND_ORDER =` |
| 7,053 | `indGroupRow` | `function indGroupRow(` |
| 7,058 | `catMembers` | `function catMembers(` |
| 7,066 | `indRows` | `function indRows(` |
| 7,080 | `indCategoryHtml` | `function indCategoryHtml(` |
| 7,087 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 7,089_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,090 | `NAV` | `var NAV =` |
| 7,091 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,185_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,186 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,233_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,234 | `qPretty` | `function qPretty(` |
| 7,235 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,236 | `peekArt` | `function peekArt(` |
| 7,237 | `indPeriod` | `function indPeriod(` |
| 7,241 | `catItem` | `function catItem(` |
| 7,249 | `catCard` | `function catCard(` |
| 7,291 | `insightCirculation` | `function insightCirculation(` |
| 7,324 | `insightWeather` | `function insightWeather(` |
| 7,364 | `seasonCards` | `function seasonCards(` |
| 7,370 | `marketCycleCard` | `function marketCycleCard(` |
| 7,382 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,386 | `seasonName` | `function seasonName(` |
| 7,387 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,394 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,399 | `curvePath` | `function curvePath(` |
| 7,407 | `moodCallout` | `function moodCallout(` |
| 7,411 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,423 | `moodInfo` | `function moodInfo(` |
| 7,432 | `moodFigures` | `function moodFigures(` |
| 7,438 | `moodCard` | `function moodCard(` |
| 7,442 | `insightMood` | `function insightMood(` |
| 7,448 | `storyBeats` | `function storyBeats(` |
| 7,459 | `storyText` | `function storyText(` |
| 7,463 | `PAIR_ART` | `var PAIR_ART =` |
| 7,469 | `placeSignPair` | `function placeSignPair(` |
| 7,492 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,508 | `buildCategories` | `function buildCategories(` |
| 7,524 | `tempPeek` | `function tempPeek(` |
| 7,530 | `gdpPeek` | `function gdpPeek(` |
| 7,535 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,562_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,563 | `capeFmt1` | `function capeFmt1(` |
| 7,564 | `actCycleMonths` | `function actCycleMonths(` |
| 7,572 | `householdsHighlights` | `function householdsHighlights(` |
| 7,591 | `redrawSheet` | `function redrawSheet(` |
| 7,595 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,640 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,677 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,724 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,754 | `valuationHighlights` | `function valuationHighlights(` |
| 7,767 | `tempHighlights` | `function tempHighlights(` |
| 7,784 | `gdpHighlights` | `function gdpHighlights(` |
| 7,799 | `renderMetricPages` | `function renderMetricPages(` |
| 7,809 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,819_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,820 | `todayFace` | `function todayFace(` |
| 7,826 | `readDoor` | `function readDoor(` |
| 7,834 | `pct` | `function pct(` |
| 7,835 | `rosterRows` | `function rosterRows(` |
| 7,836 | `eraEnds` | `function eraEnds(` |
| 7,843 | `eraMove` | `function eraMove(` |
| 7,847 | `HORMONES` | `var HORMONES =` |
| 7,848 | `analysisFor` | `function analysisFor(` |
| 7,854 | `dxRow` | `function dxRow(` |
| 7,855 | `dxText` | `function dxText(` |
| 7,856 | `dxSection` | `function dxSection(` |
| 7,857 | `systemHtml` | `function systemHtml(` |
| 7,860 | `dxHead` | `function dxHead(` |
| 7,865 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,874 | `acrossCycle` | `function acrossCycle(` |
| 7,881 | `moodDoor` | `function moodDoor(` |
| 7,886 | `trendText` | `function trendText(` |
| 7,887 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,891 | `replaceInsights` | `function replaceInsights(` |
| 7,897 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,901 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,914_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,915 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,916 | `cycleDataOn` | `function cycleDataOn(` |
| 7,917 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,937 | `wireCycleData` | `function wireCycleData(` |
| 7,952 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,997_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,998 | `eraOpen` | `var eraOpen =` |
| 7,999 | `kT` | `function kT(` |
| 8,003 | `upTo` | `function upTo(` |
| 8,004 | `pairAt` | `function pairAt(` |
| 8,005 | `eraReading` | `function eraReading(` |
| 8,015 | `eraFig` | `function eraFig(` |
| 8,022 | `eraValue` | `function eraValue(` |
| 8,028 | `eraRange` | `function eraRange(` |
| 8,033 | `eraMini` | `function eraMini(` |
| 8,038 | `eraCard` | `function eraCard(` |
| 8,057 | `eraCards` | `function eraCards(` |
| 8,063 | `eraShow` | `function eraShow(` |
| 8,070 | `enterEra` | `function enterEra(` |
| 8,077 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,084_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,085 | `rosterRow` | `function rosterRow(` |
| 8,098 | `__roster` | `var __roster =` |
| 8,099 | `readingRoster` | `function readingRoster(` |
| 8,106 | `withUnit` | `function withUnit(` |
| 8,107 | `pastFigure` | `function pastFigure(` |
| 8,111 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,113_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,114 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,138 | `placeWords` | `function placeWords(` |
| 8,142 | `symptomNote` | `function symptomNote(` |
| 8,149 | `symptomRow` | `function symptomRow(` |
| 8,156 | `cycleTrack` | `function cycleTrack(` |
| 8,171 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,179_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,180 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,229_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,230 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,261_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,262 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **10 compute a value**, 10 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,953–1,956 | `LIVE_CACHE` | Live data without a render refactor |
| 2,340–2,344 | `productivityRecord` | Productivity growth is not in this panel |
| 2,357–2,379 | `productivityReading` | Productivity growth is not in this panel |
| 2,375–2,379 | `confidenceRecord` | Consumer confidence |
| 2,386–4,281 | `confidenceReading` | Consumer confidence |
| 4,268–4,281 | `horizonRead` | A series' highest reading within a span |
| 4,632–4,973 | `marketReading` | The S&P 500, year by year |
| 4,960–4,973 | `seasonTrackAll` | The season, computed |
| 4,976–4,991 | `seasonTrackYears` | The season, computed |
| 4,998–5,002 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,659 |
| `pressure-range` | 2,028 |
| `sheet-marker-deficit` | 7,656 |
| `sheet-metric-gdp` | 7,620 |
| `sheet-metric-households` | 7,678 |
| `sheet-metric-temp` | 7,596 |
| `sheet-metric-valuation` | 7,698 |
| `sheet-sign-activity` | 7,641 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,663 |
| `desire-range` | 5,489 |
| `fear-range` | 6,129 |
| `pressure-range` | 5,694 |
| `pulse-range` | 5,457 |
| `sheet-metric-gdp` | 7,621 |
| `sheet-metric-temp` | 7,597 |
| `sheet-metric-valuation` | 7,699 |
| `volume-range` | 5,473 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

_none found — if that is wrong, the pattern in `tools/make-map.py` needs updating._

## Stylesheet, section by section

| Line | Section |
|---|---|
| 145 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 234 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 270 | season strip |
| 296 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 360 | tab bar (app-style segmented navigation) |
| 395 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 410 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 483 | journal (editorial content tab) |
| 489 | content tab: reading companion |
| 538 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 731 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 806 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 879 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,048 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,063 | The symptoms: a cycle's years against today |
| 1,140 | hero: yield curve |
| 1,172 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,191 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,218 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,226 | long cycle (structural layer) |
| 1,233 | indicator grid |
| 1,259 | info icon + popover (progressive disclosure for longer notes) |
| 1,273 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,357 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (99), which is what the renderers fill:

| Line | id |
|---|---|
| 1,373 | `topbar-back` |
| 1,376 | `topbar-title` |
| 1,377 | `menu-btn` |
| 1,391 | `main` |
| 1,394 | `cycle-view` |
| 1,397 | `cycle-kicker` |
| 1,400 | `cycle-dial` |
| 1,402 | `season-wheel-hub-open` |
| 1,403 | `season-wheel-hub-date` |
| 1,404 | `season-wheel-hub-theme` |
| 1,405 | `season-wheel-hub-detail` |
| 1,414 | `today-analysis` |
| 1,415 | `peek-row` |
| 1,416 | `sheet-metric-temp` |
| 1,417 | `temp-timing` |
| 1,418 | `temp-chart` |
| 1,419 | `temp-rangebar` |
| 1,421 | `temp-head` |
| 1,422 | `temp-history` |
| 1,423 | `temp-hist-tooltip` |
| 1,424 | `temp-trend` |
| 1,426 | `temp-highlights` |
| 1,428 | `sheet-metric-gdp` |
| 1,429 | `gdp-timing` |
| 1,430 | `gdp-chart` |
| 1,431 | `gdp-rangebar` |
| 1,433 | `gdp-head` |
| 1,434 | `gdp-history` |
| 1,435 | `gdp-hist-tooltip` |
| 1,436 | `gdp-trend` |
| 1,438 | `gdp-highlights` |
| 1,442 | `sheet-marker-deficit` |
| 1,442 | `deficit-timing` |
| 1,444 | `sheet-metric-households` |
| 1,445 | `households-timing` |
| 1,446 | `households-chart` |
| 1,447 | `households-highlights` |
| 1,450 | `sheet-metric-valuation` |
| 1,451 | `valuation-timing` |
| 1,452 | `valuation-chart` |
| 1,453 | `valuation-highlights` |
| 1,460 | `subj-value-hormones` |
| 1,461 | `subj-say-hormones` |
| 1,467 | `hormones-history` |
| 1,468 | `hormones-insights` |
| 1,477 | `subj-value-pressure` |
| 1,478 | `subj-say-pressure` |
| 1,484 | `pressure-timeline` |
| 1,486 | `pressure-head` |
| 1,487 | `ylm-shell` |
| 1,488 | `ylm-svg` |
| 1,489 | `ylm-tooltip` |
| 1,491 | `spread-history-shell` |
| 1,492 | `spread-history-svg` |
| 1,493 | `spread-history-tooltip` |
| 1,495 | `ylm-trend` |
| 1,497 | `pressure-insights` |
| 1,504 | `subj-ring-sentiment` |
| 1,507 | `subj-value-sentiment` |
| 1,508 | `subj-say-sentiment` |
| 1,509 | `subj-spark-sentiment` |
| 1,515 | `fear-history` |
| 1,516 | `curve-highlights` |
| 1,522 | `signs-list` |
| 1,528 | `calendar-list` |
| 1,535 | `cycle-data` |
| 1,537 | `cycle-legend` |
| 1,538 | `cycle-list` |
| 1,539 | `cycle-more` |
| 1,540 | `cycle-more-label` |
| 1,545 | `calendar-cycle` |
| 1,565 | `search-home` |
| 1,567 | `search-input` |
| 1,569 | `search-list` |
| 1,573 | `more-menu` |
| 1,576 | `menu-back` |
| 1,590 | `sources-open` |
| 1,598 | `appearance-current` |
| 1,604 | `sheet-howto` |
| 1,647 | `sheet-book` |
| 1,678 | `seasons-kicker` |
| 1,680 | `seasons-rows` |
| 1,683 | `framework-kicker` |
| 1,686 | `framework-rows` |
| 1,696 | `sheet-appearance` |
| 1,704 | `theme-toggle` |
| 1,711 | `sheet-contact` |
| 1,720 | `contact-form` |
| 1,721 | `contact-title` |
| 1,722 | `contact-message` |
| 1,724 | `contact-hint` |
| 1,725 | `contact-send` |
| 1,731 | `sheet-sources` |
| 1,734 | `sources-back` |
| 1,739 | `asof-text` |
| 1,740 | `sources-groups` |
| 1,746 | `detail-backdrop` |
| 1,748 | `detail-modal-close` |
| 1,749 | `detail-modal-body` |

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

