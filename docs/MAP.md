# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,286 lines**, about 673 KB, roughly **191 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `40c5979` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,373 | the whole stylesheet, every token and rule |
| **Markup** | 1,374–1,757 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,758–8,253 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,254–8,286 | </body></html> |

Counts: **424** top-level functions, **190** top-level vars, **10** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,758_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,760 | `byId` | `function byId(` |
| 1,768 | `byIdMaybe` | `function byIdMaybe(` |
| 1,769 | `put` | `function put(` |
| 1,774 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,776_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,777 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,778 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,779 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,780 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,784 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,789_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,790 | `wheelMeta` | `var wheelMeta =` |
| 1,798 | `seasonOverride` | `var seasonOverride =` |
| 1,799 | `cycleNowNote` | `var cycleNowNote =` |
| 1,801 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,879 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,921 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,922 | `volatilityHistory` | `var volatilityHistory =` |
| 1,924 | `fiscalHistory` | `var fiscalHistory =` |
| 1,930 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,932 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,942 | `productivityHistory` | `var productivityHistory =` |
| 1,944 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |
| 1,946 | `confidenceHistory` | `var confidenceHistory =` |
| 1,948 | `gdpYoYBefore` | `var gdpYoYBefore =` |
| 1,949 | `cpiYoYBefore` | `var cpiYoYBefore =` |
| 1,950 | `sp500ReturnsBefore` | `var sp500ReturnsBefore =` |
| 1,951 | `gdpGrowthBefore` | `var gdpGrowthBefore =` |

### Live data without a render refactor

_line 1,953_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,960 | `merge` | `function merge(` |
| 1,967 | `LIVE` | `function LIVE(` |
| 1,981 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 1,984_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,986 | `paintReading` | `function paintReading(` |
| 2,003 | `repaintVolatility` | `function repaintVolatility(` |
| 2,007 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,012 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,016 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,021_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,022 | `READINGS` | `var READINGS =` |
| 2,077 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,078 | `KINDS` | `var KINDS =` |
| 2,079 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,093 | `receive` | `function receive(` |
| 2,109 | `liveAsOf` | `var liveAsOf =` |
| 2,110 | `fmtAsOf` | `function fmtAsOf(` |
| 2,115 | `applyLive` | `function applyLive(` |
| 2,128 | `shapeOk` | `function shapeOk(` |
| 2,135 | `repaintPolicy` | `function repaintPolicy(` |
| 2,141 | `GYN` | `var GYN =` |
| 2,168 | `refreshLiveData` | `function refreshLiveData(` |
| 2,186 | `fetchSiteData` | `function fetchSiteData(` |
| 2,202 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,207_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,208 | `yieldCurve` | `var yieldCurve =` |
| 2,214 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,215 | `curveAsOf` | `function curveAsOf(` |
| 2,220 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,221 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,226 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,228_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,229 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,230 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,231 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,232 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,233 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,235_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,236 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,242 | `uninvLagToday` | `var uninvLagToday =` |
| 2,247 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,254 | `gdpSrc` | `var gdpSrc =` |
| 2,258 | `labPanel` | `var labPanel =` |
| 2,287 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,288_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,295 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,296 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,323_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,324 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,330 | `confidenceWord` | `function confidenceWord(` |

### The deficit, year by year

_line 2,357_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,358 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,359 | `deficitHistory` | `var deficitHistory =` |
| 2,362 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,363 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,365 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,374_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,375 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,384_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,385 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,388 | `timelineSpan` | `function timelineSpan(` |
| 2,393 | `timelineFor` | `function timelineFor(` |
| 2,404 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,410_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,411 | `windowScale` | `function windowScale(` |
| 2,426 | `windowYears` | `function windowYears(` |
| 2,434 | `refName` | `function refName(` |
| 2,438 | `histReadEnsure` | `function histReadEnsure(` |
| 2,458 | `histReadFill` | `function histReadFill(` |
| 2,508 | `histAxisEnds` | `function histAxisEnds(` |
| 2,519 | `histLegend` | `function histLegend(` |
| 2,579 | `refitHistory` | `function refitHistory(` |
| 2,589 | `wireHistHover` | `function wireHistHover(` |
| 2,626 | `mWindowFrom` | `function mWindowFrom(` |
| 2,630 | `qWindowFrom` | `function qWindowFrom(` |
| 2,635 | `DEF_1983` | `var DEF_1983 =` |
| 2,636 | `defFrom` | `function defFrom(` |
| 2,641 | `deficitChart` | `function deficitChart(` |
| 2,709 | `deficitBlock` | `function deficitBlock(` |
| 2,749 | `buffettHistory` | `var buffettHistory =` |
| 2,751 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,752 | `hyDates` | `var hyDates =` |
| 2,753 | `hyOas` | `var hyOas =` |
| 2,754 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,761 | `hyAt` | `function hyAt(` |
| 2,765 | `hyLabel` | `function hyLabel(` |
| 2,766 | `hyNum` | `function hyNum(` |
| 2,767 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,775 | `hyQuarters` | `function hyQuarters(` |
| 2,783 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,785 | `capeHistory` | `var capeHistory =` |
| 2,787 | `longCycleSrc` | `var longCycleSrc =` |
| 2,803 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,817_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,818 | `sentiment` | `var sentiment =` |
| 2,834 | `valuation` | `var valuation =` |
| 2,855 | `valRow` | `function valRow(` |
| 2,860 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,863 | `coincident` | `var coincident =` |
| 2,903 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,909 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,910 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,911 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,913_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,914 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,915 | `m2vHistory` | `var m2vHistory =` |
| 2,931 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 2,983 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,025_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,026 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,027 | `DOTS` | `var DOTS =` |
| 3,029 | `headPickRow` | `function headPickRow(` |
| 3,035 | `histHead` | `function histHead(` |
| 3,050 | `headNoteIdx` | `var headNoteIdx =` |
| 3,051 | `headMenuHtml` | `function headMenuHtml(` |
| 3,076 | `headMenuFor` | `var headMenuFor =` |
| 3,077 | `headSubFor` | `var headSubFor =` |
| 3,078 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,107 | `histNote` | `function histNote(` |
| 3,108 | `meterFlagged` | `function meterFlagged(` |
| 3,115 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,138 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,152 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,165 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,170 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,174 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,186 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,200 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,219 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,250 | `desireBlock` | `function desireBlock(` |
| 3,261 | `volumeBlock` | `function volumeBlock(` |
| 3,273 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,285 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,292_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,293 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,294 | `m2Level` | `var m2Level =` |
| 3,315 | `m2Yoy` | `var m2Yoy =` |
| 3,316 | `M2_NORM` | `var M2_NORM =` |
| 3,318 | `volumeVerdict` | `function volumeVerdict(` |
| 3,326 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,327 | `unempHistory` | `var unempHistory =` |
| 3,333 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,342 | `NROU_NOW` | `var NROU_NOW =` |
| 3,343 | `unempState` | `function unempState(` |
| 3,349 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,401_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,402 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,411 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,467 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,468 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,469 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,470_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,472 | `householdsChart` | `function householdsChart(` |
| 3,522 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,575 | `GDP_NORM` | `var GDP_NORM =` |
| 3,576 | `gdpNowQ` | `var gdpNowQ =` |
| 3,577 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,599 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,650 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,695 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,703 | `velocityVerdict` | `function velocityVerdict(` |
| 3,711 | `derivePulseTag` | `function derivePulseTag(` |
| 3,717 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,749_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,750 | `seasonReading` | `var seasonReading =` |
| 3,794 | `frameworkRows` | `var frameworkRows =` |
| 3,804 | `vixRow` | `var vixRow =` |
| 3,805 | `VIX_CALM` | `var VIX_CALM =` |
| 3,806 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,810 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,817_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,818 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,827_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,828 | `calendarTodayY` | `var calendarTodayY =` |
| 3,830 | `vix3mClose` | `var vix3mClose =` |
| 3,831 | `fearCurve` | `function fearCurve(` |
| 3,836 | `curveVerdict` | `function curveVerdict(` |
| 3,841 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,850_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,851 | `modeBar` | `function modeBar(` |
| 3,858 | `pickerOpen` | `var pickerOpen =` |
| 3,859 | `cycleByName` | `function cycleByName(` |
| 3,863 | `openCycle` | `function openCycle(` |
| 3,867 | `cycleSlice` | `function cycleSlice(` |
| 3,875 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,883 | `cycleMonths` | `function cycleMonths(` |
| 3,891 | `histControls` | `function histControls(` |
| 3,900 | `pageCycle` | `function pageCycle(` |
| 3,904 | `cycLabel` | `function cycLabel(` |
| 3,908 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,913 | `cyclePicker` | `function cyclePicker(` |
| 3,932 | `rangeBar` | `function rangeBar(` |
| 3,939 | `trendOf` | `function trendOf(` |
| 3,954 | `TREND_ARROW` | `var TREND_ARROW =` |
| 3,958 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 3,969_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,970 | `yearOf` | `function yearOf(` |
| 3,971 | `mean` | `function mean(` |

### The record rows

_line 3,972_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,973 | `headSigma` | `function headSigma(` |
| 3,978 | `atQuarter` | `function atQuarter(` |
| 3,979 | `atMonth` | `function atMonth(` |
| 3,980 | `ordinal` | `function ordinal(` |
| 3,981 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 3,984_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,985 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 3,992 | `moreRow` | `function moreRow(` |
| 3,998 | `tempCaptionFull` | `var tempCaptionFull =` |
| 3,999 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,005_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,006 | `xLabelOf` | `function xLabelOf(` |
| 4,016 | `fitLine` | `function fitLine(` |
| 4,020 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,038_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,039 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,047 | `vGrid` | `function vGrid(` |
| 4,051 | `COL_FILL` | `var COL_FILL =` |
| 4,052 | `colPath` | `function colPath(` |
| 4,057 | `colWidth` | `function colWidth(` |
| 4,062 | `AXIS` | `var AXIS =` |
| 4,063 | `histFrame` | `function histFrame(` |
| 4,070 | `xLabel` | `function xLabel(` |
| 4,073 | `crossLine` | `function crossLine(` |
| 4,076 | `zeroRule` | `function zeroRule(` |
| 4,079 | `meanRule` | `function meanRule(` |
| 4,080 | `pendingGeom` | `var pendingGeom =` |
| 4,081 | `publishGeom` | `function publishGeom(` |
| 4,082 | `attachHistory` | `function attachHistory(` |
| 4,091 | `histBar` | `function histBar(` |
| 4,094 | `histTip` | `function histTip(` |
| 4,095 | `avgRule` | `function avgRule(` |
| 4,098 | `vhOpen` | `function vhOpen(` |
| 4,099 | `chartAxes` | `function chartAxes(` |
| 4,129 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,164_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,166 | `maxIn` | `function maxIn(` |
| 4,171 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,172 | `PEEK_W` | `var PEEK_W =` |
| 4,173 | `PEEK_H` | `var PEEK_H =` |
| 4,174 | `colPeek` | `function colPeek(` |
| 4,192 | `meterPeek` | `function meterPeek(` |
| 4,209 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,214 | `pressureZone` | `function pressureZone(` |
| 4,220 | `HZN_BACK` | `var HZN_BACK =` |
| 4,221 | `hznLast` | `function hznLast(` |
| 4,222 | `hznBack` | `function hznBack(` |
| 4,223 | `horizonWord` | `function horizonWord(` |
| 4,243 | `HZN_METERS` | `var HZN_METERS =` |
| 4,251 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,272 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,277 | `RISK_RISK` | `var RISK_RISK =` |
| 4,282 | `riskCell` | `function riskCell(` |
| 4,283 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,313 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,338_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,339 | `pulseClipN` | `var pulseClipN =` |
| 4,340 | `beatPath` | `function beatPath(` |
| 4,357 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,371 | `pulsePeek` | `function pulsePeek(` |
| 4,374 | `pulseBlock` | `function pulseBlock(` |
| 4,391 | `CHEV` | `var CHEV =` |
| 4,392 | `peekCard` | `function peekCard(` |
| 4,411 | `dropSvg` | `function dropSvg(` |
| 4,413 | `gaugeSvg` | `function gaugeSvg(` |
| 4,417 | `diamondSvg` | `function diamondSvg(` |
| 4,421 | `sproutSvg` | `function sproutSvg(` |
| 4,429 | `markSvg` | `function markSvg(` |
| 4,432 | `heartSvg` | `function heartSvg(` |
| 4,434 | `flameSvg` | `function flameSvg(` |
| 4,437 | `clockSvg` | `function clockSvg(` |
| 4,438 | `thermoSvg` | `function thermoSvg(` |
| 4,441 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,443 | `personSvg` | `function personSvg(` |
| 4,445 | `bookSvg` | `function bookSvg(` |
| 4,448 | `ecgSvg` | `function ecgSvg(` |
| 4,450 | `circulationSvg` | `function circulationSvg(` |
| 4,451 | `boltSvg` | `function boltSvg(` |
| 4,452 | `houseSvg` | `function houseSvg(` |
| 4,455 | `marketSvg` | `function marketSvg(` |
| 4,458 | `bagSvg` | `function bagSvg(` |
| 4,461 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,469_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,470 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,471 | `dsrHistory` | `var dsrHistory =` |
| 4,472 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,473 | `savHistory` | `var savHistory =` |
| 4,476 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,485 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,486 | `dsrNow` | `var dsrNow =` |
| 4,487 | `savNow` | `var savNow =` |
| 4,488 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,489 | `householdsWord` | `function householdsWord(` |
| 4,496 | `householdsNow` | `var householdsNow =` |
| 4,497 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,514 | `savInfoHtml` | `function savInfoHtml(` |
| 4,532 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,539 | `curveSub` | `var curveSub =` |
| 4,540 | `vixPct` | `function vixPct(` |
| 4,544 | `curveNoteFull` | `var curveNoteFull =` |
| 4,555 | `volatilityRing` | `function volatilityRing(` |
| 4,560 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,561 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,576 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,581_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,582 | `sp500Years` | `var sp500Years =` |
| 4,583 | `marketWord` | `function marketWord(` |
| 4,606 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,616 | `marketCycles` | `var marketCycles =` |
| 4,733 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,735_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,736 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,737 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,742_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,743 | `TIMING` | `var TIMING =` |
| 4,749 | `CATEGORIES` | `var CATEGORIES =` |
| 4,755 | `ROSTER` | `var ROSTER =` |
| 4,805 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,806 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,808 | `pageState` | `function pageState(` |
| 4,813 | `pageMode` | `var pageMode =` |
| 4,814 | `pageCycles` | `var pageCycles =` |
| 4,815 | `pageRange` | `var pageRange =` |
| 4,816 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,817 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,818 | `keyed` | `function keyed(` |
| 4,825 | `hyMonths` | `function hyMonths(` |
| 4,828 | `prettyKey` | `function prettyKey(` |
| 4,833 | `lastDate` | `function lastDate(` |
| 4,834 | `compiledDay` | `function compiledDay(` |
| 4,835 | `labPeriod` | `function labPeriod(` |
| 4,836 | `rosterFor` | `function rosterFor(` |
| 4,837 | `rowReadings` | `function rowReadings(` |
| 4,838 | `indOf` | `function indOf(` |
| 4,839 | `peekOf` | `function peekOf(` |
| 4,844 | `cardDate` | `function cardDate(` |
| 4,845 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,866_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,867 | `slopeOf` | `function slopeOf(` |
| 4,872 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,873 | `readSeason` | `function readSeason(` |
| 4,892 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,893 | `qLabel` | `function qLabel(` |
| 4,909 | `SEASON_YEARS` | `var SEASON_YEARS =` |
| 4,926 | `seasonTrack` | `var seasonTrack =` |
| 4,927 | `closingReading` | `function closingReading(` |
| 4,937 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,939_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,940 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,941 | `seasonTitle` | `function seasonTitle(` |
| 4,942 | `monthLabel` | `function monthLabel(` |
| 4,943 | `cycleReturns` | `function cycleReturns(` |
| 4,953 | `cycleModel` | `function cycleModel(` |
| 4,984 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,992 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,998 | `nowModel` | `var nowModel =` |
| 4,999 | `readingNow` | `var readingNow =` |
| 5,000 | `cpiNow` | `var cpiNow =` |
| 5,001 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,002 | `currentSeason` | `var currentSeason =` |
| 5,003 | `seasonWhy` | `var seasonWhy =` |
| 5,005 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 5,007_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,008 | `rankToDate` | `function rankToDate(` |
| 5,012 | `marketCache` | `var marketCache =` |
| 5,013 | `marketMonths` | `function marketMonths(` |
| 5,020 | `yearAfter` | `function yearAfter(` |
| 5,024 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 5,029_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,030 | `rankIn` | `function rankIn(` |
| 5,035 | `moodLists` | `var moodLists =` |
| 5,036 | `moodSeries` | `function moodSeries(` |
| 5,044 | `moodAt` | `function moodAt(` |
| 5,050 | `MOOD_TURN` | `var MOOD_TURN =` |
| 5,051 | `MOOD_RISING` | `var MOOD_RISING =` |
| 5,052 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 5,053 | `moodWord` | `function moodWord(` |
| 5,057 | `moodRead` | `function moodRead(` |
| 5,064 | `moodCache` | `var moodCache =` |
| 5,065 | `moodTrack` | `function moodTrack(` |
| 5,071 | `moodToday` | `function moodToday(` |
| 5,076 | `cycleStory` | `function cycleStory(` |
| 5,087 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,098 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,099 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,100 | `spreadLabel` | `function spreadLabel(` |
| 5,104 | `policyFacts` | `function policyFacts(` |
| 5,111 | `policyFactRows` | `function policyFactRows(` |
| 5,117 | `allSources` | `var allSources =` |
| 5,132 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,144_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,145 | `SVG_NS` | `var SVG_NS =` |
| 5,146 | `svgEl` | `function svgEl(` |
| 5,151 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,185_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,186 | `clampPct` | `function clampPct(` |
| 5,189 | `detailTexts` | `var detailTexts =` |
| 5,190 | `detailSlots` | `var detailSlots =` |
| 5,191 | `detailSlot` | `function detailSlot(` |
| 5,201 | `metricSheet` | `function metricSheet(` |
| 5,206 | `ledeHtml` | `function ledeHtml(` |
| 5,207 | `facts` | `function facts(` |
| 5,208 | `factsFrom` | `function factsFrom(` |
| 5,212 | `expandBtn` | `function expandBtn(` |
| 5,216 | `sheetRenderers` | `var sheetRenderers =` |
| 5,217 | `drawsPage` | `function drawsPage(` |
| 5,218 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,247_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,250 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,251_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,252 | `subjectRow` | `function subjectRow(` |
| 5,262 | `subjectIcon` | `function subjectIcon(` |
| 5,263 | `srcHtml` | `function srcHtml(` |
| 5,264 | `timingMark` | `function timingMark(` |
| 5,272 | `timingPill` | `function timingPill(` |
| 5,281 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,289 | `seatPageFoot` | `function seatPageFoot(` |
| 5,301 | `timingMembers` | `var timingMembers =` |
| 5,303 | `registerTiming` | `function registerTiming(` |
| 5,305 | `headHtml` | `function headHtml(` |
| 5,310 | `heldHighlights` | `var heldHighlights =` |
| 5,311 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,338_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,339 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,340 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,348 | `withLatestPoint` | `function withLatestPoint(` |
| 5,353 | `pressureMaturities` | `function pressureMaturities(` |
| 5,377 | `registerFlowPages` | `function registerFlowPages(` |
| 5,431 | `renderPressureRow` | `function renderPressureRow(` |
| 5,439 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,458 | `ylmColumns` | `function ylmColumns(` |
| 5,478 | `ylmFitLine` | `function ylmFitLine(` |
| 5,490 | `pressureHead` | `function pressureHead(` |
| 5,508 | `showPressureView` | `function showPressureView(` |
| 5,513 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,646_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,647 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,684_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,685 | `spreadSeries` | `function spreadSeries(` |
| 5,729 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,855_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,856 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: the Treasury spreads, inside Pressure

_line 5,882_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,883 | `renderHorizonPage` | `function renderHorizonPage(` |
| 5,907 | `spreadInsights` | `function spreadInsights(` |

### RENDER: Valuation (slow)

_line 5,937_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,938 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,946_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,947 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,044_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,045 | `renderVolatility` | `function renderVolatility(` |
| 6,090 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,120_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,121 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,142_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,143 | `totalRiseIn` | `function totalRiseIn(` |
| 6,153 | `eraInflation` | `function eraInflation(` |
| 6,164 | `eraGrowth` | `function eraGrowth(` |
| 6,180 | `fmtSigned` | `function fmtSigned(` |
| 6,181 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,182 | `growthShown` | `function growthShown(` |
| 6,183 | `growthShownCap` | `function growthShownCap(` |
| 6,184 | `phaseClass` | `function phaseClass(` |
| 6,185 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,189 | `cycleViewEl` | `var cycleViewEl =` |
| 6,190 | `shownEra` | `var shownEra =` |
| 6,191 | `calendarReset` | `var calendarReset =` |
| 6,192 | `metricPageReset` | `var metricPageReset =` |
| 6,193 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,194 | `topbarBack` | `var topbarBack =` |
| 6,195 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,202_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,203 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,284_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,285 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,303_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,304 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,325_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,327 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,328 | `hubSet` | `function hubSet(` |
| 6,339 | `quarterPopup` | `function quarterPopup(` |
| 6,362 | `hubShowDefault` | `function hubShowDefault(` |
| 6,371 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,377 | `hubShowYear` | `function hubShowYear(` |
| 6,387 | `renderCycleDial` | `function renderCycleDial(` |
| 6,468 | `m2Step` | `function m2Step(` |
| 6,471 | `heatStep` | `function heatStep(` |
| 6,475 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,486_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,487 | `renderCycleView` | `function renderCycleView(` |
| 6,493 | `shownEraModel` | `var shownEraModel =` |
| 6,494 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,496_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,497 | `stripGroupName` | `var stripGroupName =` |
| 6,498 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,526 | `marketStripHtml` | `function marketStripHtml(` |
| 6,560 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,561 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,590_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,591 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,597 | `debtSvg` | `function debtSvg(` |
| 6,598 | `interestSvg` | `function interestSvg(` |
| 6,600 | `budgetSvg` | `function budgetSvg(` |
| 6,602 | `lede` | `function lede(` |
| 6,603 | `periodOf` | `function periodOf(` |
| 6,604 | `meterWord` | `function meterWord(` |
| 6,605 | `splitPages` | `function splitPages(` |
| 6,622 | `confidencePage` | `function confidencePage(` |
| 6,628 | `marketPage` | `function marketPage(` |
| 6,634 | `productivityPage` | `function productivityPage(` |
| 6,639 | `splitSpec` | `function splitSpec(` |
| 6,645 | `splitInfo` | `function splitInfo(` |
| 6,649 | `periodTicks` | `function periodTicks(` |
| 6,654 | `periodOfSeries` | `function periodOfSeries(` |
| 6,655 | `drawSplit` | `function drawSplit(` |
| 6,672 | `mountSplit` | `function mountSplit(` |
| 6,685 | `splitPeek` | `function splitPeek(` |
| 6,692 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,700 | `deficitPeek` | `function deficitPeek(` |
| 6,704 | `catSheet` | `function catSheet(` |
| 6,709 | `groupId` | `function groupId(` |
| 6,710 | `groupCard` | `function groupCard(` |
| 6,718 | `groupSheet` | `function groupSheet(` |
| 6,725 | `appendPicks` | `function appendPicks(` |
| 6,733 | `doorSel` | `function doorSel(` |
| 6,734 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,746_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,747 | `buffettInsight` | `function buffettInsight(` |
| 6,762 | `debtInsight` | `function debtInsight(` |
| 6,777 | `productivityInsight` | `function productivityInsight(` |
| 6,787 | `confidenceInsight` | `function confidenceInsight(` |
| 6,798 | `ORDINAL` | `var ORDINAL =` |
| 6,799 | `marketInsight` | `function marketInsight(` |
| 6,811 | `interestInsight` | `function interestInsight(` |
| 6,826 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,849 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,869 | `activityStackHtml` | `function activityStackHtml(` |
| 6,879 | `seatTemperature` | `function seatTemperature(` |
| 6,887 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,920_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,921 | `partsOf` | `function partsOf(` |
| 6,930 | `authored` | `function authored(` |
| 6,931 | `registerRoster` | `function registerRoster(` |
| 6,953 | `indRow` | `function indRow(` |
| 6,957 | `IND_ORDER` | `var IND_ORDER =` |
| 6,958 | `indGroupRow` | `function indGroupRow(` |
| 6,963 | `catMembers` | `function catMembers(` |
| 6,971 | `indRows` | `function indRows(` |
| 6,985 | `indCategoryHtml` | `function indCategoryHtml(` |
| 6,992 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 6,994_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,995 | `NAV` | `var NAV =` |
| 6,996 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,090_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,091 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,138_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,139 | `qPretty` | `function qPretty(` |
| 7,140 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,141 | `peekArt` | `function peekArt(` |
| 7,142 | `indPeriod` | `function indPeriod(` |
| 7,146 | `catItem` | `function catItem(` |
| 7,193 | `insightCirculation` | `function insightCirculation(` |
| 7,226 | `insightWeather` | `function insightWeather(` |
| 7,266 | `seasonCards` | `function seasonCards(` |
| 7,272 | `marketCycleCard` | `function marketCycleCard(` |
| 7,284 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,288 | `seasonName` | `function seasonName(` |
| 7,289 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,296 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,301 | `curvePath` | `function curvePath(` |
| 7,309 | `moodCallout` | `function moodCallout(` |
| 7,313 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,325 | `moodInfo` | `function moodInfo(` |
| 7,334 | `moodFigures` | `function moodFigures(` |
| 7,340 | `moodCard` | `function moodCard(` |
| 7,344 | `insightMood` | `function insightMood(` |
| 7,350 | `storyBeats` | `function storyBeats(` |
| 7,361 | `storyText` | `function storyText(` |
| 7,365 | `PAIR_ART` | `var PAIR_ART =` |
| 7,371 | `placeSignPair` | `function placeSignPair(` |
| 7,394 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,410 | `buildCategories` | `function buildCategories(` |
| 7,426 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,464_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,465 | `capeFmt1` | `function capeFmt1(` |
| 7,466 | `actCycleMonths` | `function actCycleMonths(` |
| 7,474 | `householdsHighlights` | `function householdsHighlights(` |
| 7,493 | `redrawSheet` | `function redrawSheet(` |
| 7,497 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,542 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,579 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,626 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,656 | `valuationHighlights` | `function valuationHighlights(` |
| 7,669 | `tempHighlights` | `function tempHighlights(` |
| 7,686 | `gdpHighlights` | `function gdpHighlights(` |
| 7,701 | `renderMetricPages` | `function renderMetricPages(` |
| 7,711 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,721_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,722 | `todayFace` | `function todayFace(` |
| 7,728 | `readDoor` | `function readDoor(` |
| 7,736 | `pct` | `function pct(` |
| 7,737 | `rosterRows` | `function rosterRows(` |
| 7,738 | `eraEnds` | `function eraEnds(` |
| 7,745 | `eraMove` | `function eraMove(` |
| 7,749 | `HORMONES` | `var HORMONES =` |
| 7,750 | `analysisFor` | `function analysisFor(` |
| 7,756 | `dxRow` | `function dxRow(` |
| 7,757 | `dxText` | `function dxText(` |
| 7,758 | `dxSection` | `function dxSection(` |
| 7,759 | `systemHtml` | `function systemHtml(` |
| 7,762 | `dxHead` | `function dxHead(` |
| 7,767 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,776 | `acrossCycle` | `function acrossCycle(` |
| 7,783 | `moodDoor` | `function moodDoor(` |
| 7,788 | `trendText` | `function trendText(` |
| 7,789 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,793 | `replaceInsights` | `function replaceInsights(` |
| 7,799 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,803 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,816_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,817 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,818 | `cycleDataOn` | `function cycleDataOn(` |
| 7,819 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,839 | `wireCycleData` | `function wireCycleData(` |
| 7,854 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,899_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,900 | `eraOpen` | `var eraOpen =` |
| 7,901 | `kT` | `function kT(` |
| 7,905 | `upTo` | `function upTo(` |
| 7,906 | `pairAt` | `function pairAt(` |
| 7,907 | `eraReading` | `function eraReading(` |
| 7,917 | `eraFig` | `function eraFig(` |
| 7,924 | `eraValue` | `function eraValue(` |
| 7,930 | `eraRange` | `function eraRange(` |
| 7,935 | `eraMini` | `function eraMini(` |
| 7,940 | `eraCard` | `function eraCard(` |
| 7,959 | `eraCards` | `function eraCards(` |
| 7,965 | `eraShow` | `function eraShow(` |
| 7,972 | `enterEra` | `function enterEra(` |
| 7,979 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,986_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,987 | `rosterRow` | `function rosterRow(` |
| 8,000 | `__roster` | `var __roster =` |
| 8,001 | `readingRoster` | `function readingRoster(` |
| 8,008 | `withUnit` | `function withUnit(` |
| 8,009 | `pastFigure` | `function pastFigure(` |
| 8,013 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,015_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,016 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,040 | `placeWords` | `function placeWords(` |
| 8,044 | `symptomNote` | `function symptomNote(` |
| 8,051 | `symptomRow` | `function symptomRow(` |
| 8,058 | `cycleTrack` | `function cycleTrack(` |
| 8,073 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,081_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,082 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,131_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,132 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,163_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,164 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **10 compute a value**, 10 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,956–1,959 | `LIVE_CACHE` | Live data without a render refactor |
| 2,290–2,294 | `productivityRecord` | Productivity growth is not in this panel |
| 2,307–2,329 | `productivityReading` | Productivity growth is not in this panel |
| 2,325–2,329 | `confidenceRecord` | Consumer confidence |
| 2,336–4,242 | `confidenceReading` | Consumer confidence |
| 4,229–4,242 | `horizonRead` | A series' highest reading within a span |
| 4,587–4,907 | `marketReading` | The S&P 500, year by year |
| 4,894–4,907 | `seasonTrackAll` | The season, computed |
| 4,910–4,925 | `seasonTrackYears` | The season, computed |
| 4,932–4,936 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,561 |
| `pressure-range` | 2,014 |
| `sheet-marker-deficit` | 7,558 |
| `sheet-metric-gdp` | 7,522 |
| `sheet-metric-households` | 7,580 |
| `sheet-metric-temp` | 7,498 |
| `sheet-metric-valuation` | 7,600 |
| `sheet-sign-activity` | 7,543 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,565 |
| `desire-range` | 5,413 |
| `fear-range` | 6,053 |
| `pressure-range` | 5,618 |
| `pulse-range` | 5,381 |
| `sheet-metric-gdp` | 7,523 |
| `sheet-metric-temp` | 7,499 |
| `sheet-metric-valuation` | 7,601 |
| `volume-range` | 5,397 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

_none found — if that is wrong, the pattern in `tools/make-map.py` needs updating._

## Stylesheet, section by section

| Line | Section |
|---|---|
| 148 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 237 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 273 | season strip |
| 299 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 366 | tab bar (app-style segmented navigation) |
| 401 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 416 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 489 | journal (editorial content tab) |
| 495 | content tab: reading companion |
| 544 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
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
| 1,362 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (98), which is what the renderers fill:

| Line | id |
|---|---|
| 1,378 | `topbar-back` |
| 1,381 | `topbar-title` |
| 1,382 | `menu-btn` |
| 1,396 | `main` |
| 1,399 | `cycle-view` |
| 1,402 | `cycle-kicker` |
| 1,405 | `cycle-dial` |
| 1,407 | `season-wheel-hub-date` |
| 1,408 | `season-wheel-hub-theme` |
| 1,409 | `season-wheel-hub-detail` |
| 1,417 | `today-analysis` |
| 1,418 | `peek-row` |
| 1,419 | `sheet-metric-temp` |
| 1,420 | `temp-timing` |
| 1,421 | `temp-chart` |
| 1,422 | `temp-rangebar` |
| 1,424 | `temp-head` |
| 1,425 | `temp-history` |
| 1,426 | `temp-hist-tooltip` |
| 1,427 | `temp-trend` |
| 1,429 | `temp-highlights` |
| 1,431 | `sheet-metric-gdp` |
| 1,432 | `gdp-timing` |
| 1,433 | `gdp-chart` |
| 1,434 | `gdp-rangebar` |
| 1,436 | `gdp-head` |
| 1,437 | `gdp-history` |
| 1,438 | `gdp-hist-tooltip` |
| 1,439 | `gdp-trend` |
| 1,441 | `gdp-highlights` |
| 1,445 | `sheet-marker-deficit` |
| 1,445 | `deficit-timing` |
| 1,447 | `sheet-metric-households` |
| 1,448 | `households-timing` |
| 1,449 | `households-chart` |
| 1,450 | `households-highlights` |
| 1,453 | `sheet-metric-valuation` |
| 1,454 | `valuation-timing` |
| 1,455 | `valuation-chart` |
| 1,456 | `valuation-highlights` |
| 1,463 | `subj-value-hormones` |
| 1,464 | `subj-say-hormones` |
| 1,470 | `hormones-history` |
| 1,471 | `hormones-insights` |
| 1,480 | `subj-value-pressure` |
| 1,481 | `subj-say-pressure` |
| 1,487 | `pressure-timeline` |
| 1,489 | `pressure-head` |
| 1,490 | `ylm-shell` |
| 1,491 | `ylm-svg` |
| 1,492 | `ylm-tooltip` |
| 1,494 | `spread-history-shell` |
| 1,495 | `spread-history-svg` |
| 1,496 | `spread-history-tooltip` |
| 1,498 | `ylm-trend` |
| 1,500 | `pressure-insights` |
| 1,507 | `subj-ring-sentiment` |
| 1,510 | `subj-value-sentiment` |
| 1,511 | `subj-say-sentiment` |
| 1,512 | `subj-spark-sentiment` |
| 1,518 | `fear-history` |
| 1,519 | `curve-highlights` |
| 1,525 | `signs-list` |
| 1,531 | `calendar-list` |
| 1,538 | `cycle-data` |
| 1,540 | `cycle-legend` |
| 1,541 | `cycle-list` |
| 1,542 | `cycle-more` |
| 1,543 | `cycle-more-label` |
| 1,548 | `calendar-cycle` |
| 1,568 | `search-home` |
| 1,570 | `search-input` |
| 1,572 | `search-list` |
| 1,576 | `more-menu` |
| 1,579 | `menu-back` |
| 1,593 | `sources-open` |
| 1,601 | `appearance-current` |
| 1,607 | `sheet-howto` |
| 1,650 | `sheet-book` |
| 1,681 | `seasons-kicker` |
| 1,683 | `seasons-rows` |
| 1,686 | `framework-kicker` |
| 1,689 | `framework-rows` |
| 1,699 | `sheet-appearance` |
| 1,707 | `theme-toggle` |
| 1,714 | `sheet-contact` |
| 1,723 | `contact-form` |
| 1,724 | `contact-title` |
| 1,725 | `contact-message` |
| 1,727 | `contact-hint` |
| 1,728 | `contact-send` |
| 1,734 | `sheet-sources` |
| 1,737 | `sources-back` |
| 1,742 | `asof-text` |
| 1,743 | `sources-groups` |
| 1,749 | `detail-backdrop` |
| 1,751 | `detail-modal-close` |
| 1,752 | `detail-modal-body` |

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

