# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,298 lines**, about 674 KB, roughly **191 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `56b1e8f` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,373 | the whole stylesheet, every token and rule |
| **Markup** | 1,374–1,757 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,758–8,265 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,266–8,298 | </body></html> |

Counts: **426** top-level functions, **190** top-level vars, **10** top-level IIFEs in the script.

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

_line 4,338_ · 28 declarations

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
| 4,451 | `weatherSvg` | `function weatherSvg(` |
| 4,459 | `moodSvg` | `function moodSvg(` |
| 4,463 | `boltSvg` | `function boltSvg(` |
| 4,464 | `houseSvg` | `function houseSvg(` |
| 4,467 | `marketSvg` | `function marketSvg(` |
| 4,470 | `bagSvg` | `function bagSvg(` |
| 4,473 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,481_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,482 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,483 | `dsrHistory` | `var dsrHistory =` |
| 4,484 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,485 | `savHistory` | `var savHistory =` |
| 4,488 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,497 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,498 | `dsrNow` | `var dsrNow =` |
| 4,499 | `savNow` | `var savNow =` |
| 4,500 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,501 | `householdsWord` | `function householdsWord(` |
| 4,508 | `householdsNow` | `var householdsNow =` |
| 4,509 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,526 | `savInfoHtml` | `function savInfoHtml(` |
| 4,544 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,551 | `curveSub` | `var curveSub =` |
| 4,552 | `vixPct` | `function vixPct(` |
| 4,556 | `curveNoteFull` | `var curveNoteFull =` |
| 4,567 | `volatilityRing` | `function volatilityRing(` |
| 4,572 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,573 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,588 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,593_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,594 | `sp500Years` | `var sp500Years =` |
| 4,595 | `marketWord` | `function marketWord(` |
| 4,618 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,628 | `marketCycles` | `var marketCycles =` |
| 4,745 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,747_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,748 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,749 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,754_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,755 | `TIMING` | `var TIMING =` |
| 4,761 | `CATEGORIES` | `var CATEGORIES =` |
| 4,767 | `ROSTER` | `var ROSTER =` |
| 4,817 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,818 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,820 | `pageState` | `function pageState(` |
| 4,825 | `pageMode` | `var pageMode =` |
| 4,826 | `pageCycles` | `var pageCycles =` |
| 4,827 | `pageRange` | `var pageRange =` |
| 4,828 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,829 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,830 | `keyed` | `function keyed(` |
| 4,837 | `hyMonths` | `function hyMonths(` |
| 4,840 | `prettyKey` | `function prettyKey(` |
| 4,845 | `lastDate` | `function lastDate(` |
| 4,846 | `compiledDay` | `function compiledDay(` |
| 4,847 | `labPeriod` | `function labPeriod(` |
| 4,848 | `rosterFor` | `function rosterFor(` |
| 4,849 | `rowReadings` | `function rowReadings(` |
| 4,850 | `indOf` | `function indOf(` |
| 4,851 | `peekOf` | `function peekOf(` |
| 4,856 | `cardDate` | `function cardDate(` |
| 4,857 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,878_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,879 | `slopeOf` | `function slopeOf(` |
| 4,884 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,885 | `readSeason` | `function readSeason(` |
| 4,904 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,905 | `qLabel` | `function qLabel(` |
| 4,921 | `SEASON_YEARS` | `var SEASON_YEARS =` |
| 4,938 | `seasonTrack` | `var seasonTrack =` |
| 4,939 | `closingReading` | `function closingReading(` |
| 4,949 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,951_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,952 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,953 | `seasonTitle` | `function seasonTitle(` |
| 4,954 | `monthLabel` | `function monthLabel(` |
| 4,955 | `cycleReturns` | `function cycleReturns(` |
| 4,965 | `cycleModel` | `function cycleModel(` |
| 4,996 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 5,004 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,010 | `nowModel` | `var nowModel =` |
| 5,011 | `readingNow` | `var readingNow =` |
| 5,012 | `cpiNow` | `var cpiNow =` |
| 5,013 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,014 | `currentSeason` | `var currentSeason =` |
| 5,015 | `seasonWhy` | `var seasonWhy =` |
| 5,017 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 5,019_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,020 | `rankToDate` | `function rankToDate(` |
| 5,024 | `marketCache` | `var marketCache =` |
| 5,025 | `marketMonths` | `function marketMonths(` |
| 5,032 | `yearAfter` | `function yearAfter(` |
| 5,036 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 5,041_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,042 | `rankIn` | `function rankIn(` |
| 5,047 | `moodLists` | `var moodLists =` |
| 5,048 | `moodSeries` | `function moodSeries(` |
| 5,056 | `moodAt` | `function moodAt(` |
| 5,062 | `MOOD_TURN` | `var MOOD_TURN =` |
| 5,063 | `MOOD_RISING` | `var MOOD_RISING =` |
| 5,064 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 5,065 | `moodWord` | `function moodWord(` |
| 5,069 | `moodRead` | `function moodRead(` |
| 5,076 | `moodCache` | `var moodCache =` |
| 5,077 | `moodTrack` | `function moodTrack(` |
| 5,083 | `moodToday` | `function moodToday(` |
| 5,088 | `cycleStory` | `function cycleStory(` |
| 5,099 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,110 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,111 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,112 | `spreadLabel` | `function spreadLabel(` |
| 5,116 | `policyFacts` | `function policyFacts(` |
| 5,123 | `policyFactRows` | `function policyFactRows(` |
| 5,129 | `allSources` | `var allSources =` |
| 5,144 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,156_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,157 | `SVG_NS` | `var SVG_NS =` |
| 5,158 | `svgEl` | `function svgEl(` |
| 5,163 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,197_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,198 | `clampPct` | `function clampPct(` |
| 5,201 | `detailTexts` | `var detailTexts =` |
| 5,202 | `detailSlots` | `var detailSlots =` |
| 5,203 | `detailSlot` | `function detailSlot(` |
| 5,213 | `metricSheet` | `function metricSheet(` |
| 5,218 | `ledeHtml` | `function ledeHtml(` |
| 5,219 | `facts` | `function facts(` |
| 5,220 | `factsFrom` | `function factsFrom(` |
| 5,224 | `expandBtn` | `function expandBtn(` |
| 5,228 | `sheetRenderers` | `var sheetRenderers =` |
| 5,229 | `drawsPage` | `function drawsPage(` |
| 5,230 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,259_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,262 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,263_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,264 | `subjectRow` | `function subjectRow(` |
| 5,274 | `subjectIcon` | `function subjectIcon(` |
| 5,275 | `srcHtml` | `function srcHtml(` |
| 5,276 | `timingMark` | `function timingMark(` |
| 5,284 | `timingPill` | `function timingPill(` |
| 5,293 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,301 | `seatPageFoot` | `function seatPageFoot(` |
| 5,313 | `timingMembers` | `var timingMembers =` |
| 5,315 | `registerTiming` | `function registerTiming(` |
| 5,317 | `headHtml` | `function headHtml(` |
| 5,322 | `heldHighlights` | `var heldHighlights =` |
| 5,323 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,350_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,351 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,352 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,360 | `withLatestPoint` | `function withLatestPoint(` |
| 5,365 | `pressureMaturities` | `function pressureMaturities(` |
| 5,389 | `registerFlowPages` | `function registerFlowPages(` |
| 5,443 | `renderPressureRow` | `function renderPressureRow(` |
| 5,451 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,470 | `ylmColumns` | `function ylmColumns(` |
| 5,490 | `ylmFitLine` | `function ylmFitLine(` |
| 5,502 | `pressureHead` | `function pressureHead(` |
| 5,520 | `showPressureView` | `function showPressureView(` |
| 5,525 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,658_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,659 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,696_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,697 | `spreadSeries` | `function spreadSeries(` |
| 5,741 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,867_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,868 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: the Treasury spreads, inside Pressure

_line 5,894_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,895 | `renderHorizonPage` | `function renderHorizonPage(` |
| 5,919 | `spreadInsights` | `function spreadInsights(` |

### RENDER: Valuation (slow)

_line 5,949_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,950 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,958_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,959 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,056_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,057 | `renderVolatility` | `function renderVolatility(` |
| 6,102 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,132_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,133 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,154_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,155 | `totalRiseIn` | `function totalRiseIn(` |
| 6,165 | `eraInflation` | `function eraInflation(` |
| 6,176 | `eraGrowth` | `function eraGrowth(` |
| 6,192 | `fmtSigned` | `function fmtSigned(` |
| 6,193 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,194 | `growthShown` | `function growthShown(` |
| 6,195 | `growthShownCap` | `function growthShownCap(` |
| 6,196 | `phaseClass` | `function phaseClass(` |
| 6,197 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,201 | `cycleViewEl` | `var cycleViewEl =` |
| 6,202 | `shownEra` | `var shownEra =` |
| 6,203 | `calendarReset` | `var calendarReset =` |
| 6,204 | `metricPageReset` | `var metricPageReset =` |
| 6,205 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,206 | `topbarBack` | `var topbarBack =` |
| 6,207 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,214_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,215 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,296_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,297 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,315_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,316 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,337_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,339 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,340 | `hubSet` | `function hubSet(` |
| 6,351 | `quarterPopup` | `function quarterPopup(` |
| 6,374 | `hubShowDefault` | `function hubShowDefault(` |
| 6,383 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,389 | `hubShowYear` | `function hubShowYear(` |
| 6,399 | `renderCycleDial` | `function renderCycleDial(` |
| 6,480 | `m2Step` | `function m2Step(` |
| 6,483 | `heatStep` | `function heatStep(` |
| 6,487 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,498_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,499 | `renderCycleView` | `function renderCycleView(` |
| 6,505 | `shownEraModel` | `var shownEraModel =` |
| 6,506 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,508_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,509 | `stripGroupName` | `var stripGroupName =` |
| 6,510 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,538 | `marketStripHtml` | `function marketStripHtml(` |
| 6,572 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,573 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,602_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,603 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,609 | `debtSvg` | `function debtSvg(` |
| 6,610 | `interestSvg` | `function interestSvg(` |
| 6,612 | `budgetSvg` | `function budgetSvg(` |
| 6,614 | `lede` | `function lede(` |
| 6,615 | `periodOf` | `function periodOf(` |
| 6,616 | `meterWord` | `function meterWord(` |
| 6,617 | `splitPages` | `function splitPages(` |
| 6,634 | `confidencePage` | `function confidencePage(` |
| 6,640 | `marketPage` | `function marketPage(` |
| 6,646 | `productivityPage` | `function productivityPage(` |
| 6,651 | `splitSpec` | `function splitSpec(` |
| 6,657 | `splitInfo` | `function splitInfo(` |
| 6,661 | `periodTicks` | `function periodTicks(` |
| 6,666 | `periodOfSeries` | `function periodOfSeries(` |
| 6,667 | `drawSplit` | `function drawSplit(` |
| 6,684 | `mountSplit` | `function mountSplit(` |
| 6,697 | `splitPeek` | `function splitPeek(` |
| 6,704 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,712 | `deficitPeek` | `function deficitPeek(` |
| 6,716 | `catSheet` | `function catSheet(` |
| 6,721 | `groupId` | `function groupId(` |
| 6,722 | `groupCard` | `function groupCard(` |
| 6,730 | `groupSheet` | `function groupSheet(` |
| 6,737 | `appendPicks` | `function appendPicks(` |
| 6,745 | `doorSel` | `function doorSel(` |
| 6,746 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,758_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,759 | `buffettInsight` | `function buffettInsight(` |
| 6,774 | `debtInsight` | `function debtInsight(` |
| 6,789 | `productivityInsight` | `function productivityInsight(` |
| 6,799 | `confidenceInsight` | `function confidenceInsight(` |
| 6,810 | `ORDINAL` | `var ORDINAL =` |
| 6,811 | `marketInsight` | `function marketInsight(` |
| 6,823 | `interestInsight` | `function interestInsight(` |
| 6,838 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,861 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,881 | `activityStackHtml` | `function activityStackHtml(` |
| 6,891 | `seatTemperature` | `function seatTemperature(` |
| 6,899 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,932_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,933 | `partsOf` | `function partsOf(` |
| 6,942 | `authored` | `function authored(` |
| 6,943 | `registerRoster` | `function registerRoster(` |
| 6,965 | `indRow` | `function indRow(` |
| 6,969 | `IND_ORDER` | `var IND_ORDER =` |
| 6,970 | `indGroupRow` | `function indGroupRow(` |
| 6,975 | `catMembers` | `function catMembers(` |
| 6,983 | `indRows` | `function indRows(` |
| 6,997 | `indCategoryHtml` | `function indCategoryHtml(` |
| 7,004 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 7,006_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,007 | `NAV` | `var NAV =` |
| 7,008 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,102_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,103 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,150_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,151 | `qPretty` | `function qPretty(` |
| 7,152 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,153 | `peekArt` | `function peekArt(` |
| 7,154 | `indPeriod` | `function indPeriod(` |
| 7,158 | `catItem` | `function catItem(` |
| 7,205 | `insightCirculation` | `function insightCirculation(` |
| 7,238 | `insightWeather` | `function insightWeather(` |
| 7,278 | `seasonCards` | `function seasonCards(` |
| 7,284 | `marketCycleCard` | `function marketCycleCard(` |
| 7,296 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,300 | `seasonName` | `function seasonName(` |
| 7,301 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,308 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,313 | `curvePath` | `function curvePath(` |
| 7,321 | `moodCallout` | `function moodCallout(` |
| 7,325 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,337 | `moodInfo` | `function moodInfo(` |
| 7,346 | `moodFigures` | `function moodFigures(` |
| 7,352 | `moodCard` | `function moodCard(` |
| 7,356 | `insightMood` | `function insightMood(` |
| 7,362 | `storyBeats` | `function storyBeats(` |
| 7,373 | `storyText` | `function storyText(` |
| 7,377 | `PAIR_ART` | `var PAIR_ART =` |
| 7,383 | `placeSignPair` | `function placeSignPair(` |
| 7,406 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,422 | `buildCategories` | `function buildCategories(` |
| 7,438 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,476_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,477 | `capeFmt1` | `function capeFmt1(` |
| 7,478 | `actCycleMonths` | `function actCycleMonths(` |
| 7,486 | `householdsHighlights` | `function householdsHighlights(` |
| 7,505 | `redrawSheet` | `function redrawSheet(` |
| 7,509 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,554 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,591 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,638 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,668 | `valuationHighlights` | `function valuationHighlights(` |
| 7,681 | `tempHighlights` | `function tempHighlights(` |
| 7,698 | `gdpHighlights` | `function gdpHighlights(` |
| 7,713 | `renderMetricPages` | `function renderMetricPages(` |
| 7,723 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,733_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,734 | `todayFace` | `function todayFace(` |
| 7,740 | `readDoor` | `function readDoor(` |
| 7,748 | `pct` | `function pct(` |
| 7,749 | `rosterRows` | `function rosterRows(` |
| 7,750 | `eraEnds` | `function eraEnds(` |
| 7,757 | `eraMove` | `function eraMove(` |
| 7,761 | `HORMONES` | `var HORMONES =` |
| 7,762 | `analysisFor` | `function analysisFor(` |
| 7,768 | `dxRow` | `function dxRow(` |
| 7,769 | `dxText` | `function dxText(` |
| 7,770 | `dxSection` | `function dxSection(` |
| 7,771 | `systemHtml` | `function systemHtml(` |
| 7,774 | `dxHead` | `function dxHead(` |
| 7,779 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,788 | `acrossCycle` | `function acrossCycle(` |
| 7,795 | `moodDoor` | `function moodDoor(` |
| 7,800 | `trendText` | `function trendText(` |
| 7,801 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,805 | `replaceInsights` | `function replaceInsights(` |
| 7,811 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,815 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,828_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,829 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,830 | `cycleDataOn` | `function cycleDataOn(` |
| 7,831 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,851 | `wireCycleData` | `function wireCycleData(` |
| 7,866 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,911_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,912 | `eraOpen` | `var eraOpen =` |
| 7,913 | `kT` | `function kT(` |
| 7,917 | `upTo` | `function upTo(` |
| 7,918 | `pairAt` | `function pairAt(` |
| 7,919 | `eraReading` | `function eraReading(` |
| 7,929 | `eraFig` | `function eraFig(` |
| 7,936 | `eraValue` | `function eraValue(` |
| 7,942 | `eraRange` | `function eraRange(` |
| 7,947 | `eraMini` | `function eraMini(` |
| 7,952 | `eraCard` | `function eraCard(` |
| 7,971 | `eraCards` | `function eraCards(` |
| 7,977 | `eraShow` | `function eraShow(` |
| 7,984 | `enterEra` | `function enterEra(` |
| 7,991 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,998_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,999 | `rosterRow` | `function rosterRow(` |
| 8,012 | `__roster` | `var __roster =` |
| 8,013 | `readingRoster` | `function readingRoster(` |
| 8,020 | `withUnit` | `function withUnit(` |
| 8,021 | `pastFigure` | `function pastFigure(` |
| 8,025 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,027_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,028 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,052 | `placeWords` | `function placeWords(` |
| 8,056 | `symptomNote` | `function symptomNote(` |
| 8,063 | `symptomRow` | `function symptomRow(` |
| 8,070 | `cycleTrack` | `function cycleTrack(` |
| 8,085 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,093_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,094 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,143_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,144 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,175_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,176 | `wireContactForm` | `function wireContactForm(` |

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
| 4,599–4,919 | `marketReading` | The S&P 500, year by year |
| 4,906–4,919 | `seasonTrackAll` | The season, computed |
| 4,922–4,937 | `seasonTrackYears` | The season, computed |
| 4,944–4,948 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,573 |
| `pressure-range` | 2,014 |
| `sheet-marker-deficit` | 7,570 |
| `sheet-metric-gdp` | 7,534 |
| `sheet-metric-households` | 7,592 |
| `sheet-metric-temp` | 7,510 |
| `sheet-metric-valuation` | 7,612 |
| `sheet-sign-activity` | 7,555 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,577 |
| `desire-range` | 5,425 |
| `fear-range` | 6,065 |
| `pressure-range` | 5,630 |
| `pulse-range` | 5,393 |
| `sheet-metric-gdp` | 7,535 |
| `sheet-metric-temp` | 7,511 |
| `sheet-metric-valuation` | 7,613 |
| `volume-range` | 5,409 |

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

