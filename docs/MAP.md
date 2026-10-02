# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,259 lines**, about 650 KB, roughly **185 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `808e215` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,371 | the whole stylesheet, every token and rule |
| **Markup** | 1,372–1,755 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,756–8,226 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,227–8,259 | </body></html> |

Counts: **434** top-level functions, **186** top-level vars, **9** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,756_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,758 | `byId` | `function byId(` |
| 1,766 | `byIdMaybe` | `function byIdMaybe(` |
| 1,767 | `put` | `function put(` |
| 1,772 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,774_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,775 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,776 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,777 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,778 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,782 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,787_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,788 | `wheelMeta` | `var wheelMeta =` |
| 1,796 | `seasonOverride` | `var seasonOverride =` |
| 1,797 | `cycleNowNote` | `var cycleNowNote =` |
| 1,799 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,877 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,919 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,920 | `volatilityHistory` | `var volatilityHistory =` |
| 1,922 | `fiscalHistory` | `var fiscalHistory =` |
| 1,928 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,930 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,940 | `productivityHistory` | `var productivityHistory =` |
| 1,942 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |
| 1,944 | `confidenceHistory` | `var confidenceHistory =` |

### Live data without a render refactor

_line 1,946_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,951 | `merge` | `function merge(` |
| 1,958 | `LIVE` | `function LIVE(` |
| 1,972 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 1,975_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,977 | `paintReading` | `function paintReading(` |
| 1,994 | `repaintVolatility` | `function repaintVolatility(` |
| 1,998 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,003 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,007 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,012_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,013 | `READINGS` | `var READINGS =` |
| 2,068 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,069 | `KINDS` | `var KINDS =` |
| 2,070 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,084 | `receive` | `function receive(` |
| 2,100 | `liveAsOf` | `var liveAsOf =` |
| 2,101 | `fmtAsOf` | `function fmtAsOf(` |
| 2,106 | `applyLive` | `function applyLive(` |
| 2,119 | `shapeOk` | `function shapeOk(` |
| 2,126 | `repaintPolicy` | `function repaintPolicy(` |
| 2,132 | `GYN` | `var GYN =` |
| 2,159 | `refreshLiveData` | `function refreshLiveData(` |
| 2,177 | `fetchSiteData` | `function fetchSiteData(` |
| 2,193 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,198_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,199 | `yieldCurve` | `var yieldCurve =` |
| 2,205 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,206 | `curveAsOf` | `function curveAsOf(` |
| 2,211 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,212 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,217 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,219_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,220 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,221 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,222 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,223 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,224 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,226_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,227 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,233 | `uninvLagToday` | `var uninvLagToday =` |
| 2,238 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,244 | `gdpSrc` | `var gdpSrc =` |
| 2,247 | `labPanel` | `var labPanel =` |
| 2,276 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,277_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,284 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,285 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,312_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,313 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,319 | `confidenceWord` | `function confidenceWord(` |

### The deficit, year by year

_line 2,346_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,347 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,348 | `deficitHistory` | `var deficitHistory =` |
| 2,351 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,352 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,354 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,363_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,364 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,373_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,374 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,377 | `timelineSpan` | `function timelineSpan(` |
| 2,382 | `timelineFor` | `function timelineFor(` |
| 2,393 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,399_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,400 | `windowScale` | `function windowScale(` |
| 2,415 | `windowYears` | `function windowYears(` |
| 2,423 | `refName` | `function refName(` |
| 2,427 | `histReadEnsure` | `function histReadEnsure(` |
| 2,447 | `histReadFill` | `function histReadFill(` |
| 2,497 | `histAxisEnds` | `function histAxisEnds(` |
| 2,508 | `histLegend` | `function histLegend(` |
| 2,568 | `refitHistory` | `function refitHistory(` |
| 2,578 | `wireHistHover` | `function wireHistHover(` |
| 2,615 | `mWindowFrom` | `function mWindowFrom(` |
| 2,619 | `qWindowFrom` | `function qWindowFrom(` |
| 2,624 | `DEF_1983` | `var DEF_1983 =` |
| 2,625 | `defFrom` | `function defFrom(` |
| 2,630 | `deficitChart` | `function deficitChart(` |
| 2,698 | `deficitBlock` | `function deficitBlock(` |
| 2,738 | `buffettHistory` | `var buffettHistory =` |
| 2,740 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,741 | `hyDates` | `var hyDates =` |
| 2,742 | `hyOas` | `var hyOas =` |
| 2,743 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,750 | `hyAt` | `function hyAt(` |
| 2,754 | `hyLabel` | `function hyLabel(` |
| 2,755 | `hyNum` | `function hyNum(` |
| 2,756 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,764 | `hyQuarters` | `function hyQuarters(` |
| 2,772 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,774 | `capeHistory` | `var capeHistory =` |
| 2,776 | `longCycleSrc` | `var longCycleSrc =` |
| 2,792 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,806_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,807 | `sentiment` | `var sentiment =` |
| 2,823 | `valuation` | `var valuation =` |
| 2,844 | `valRow` | `function valRow(` |
| 2,849 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,852 | `coincident` | `var coincident =` |
| 2,902 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,908 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,909 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,910 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,912_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,913 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,914 | `m2vHistory` | `var m2vHistory =` |
| 2,930 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 2,982 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,024_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,025 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,026 | `DOTS` | `var DOTS =` |
| 3,028 | `headPickRow` | `function headPickRow(` |
| 3,034 | `histHead` | `function histHead(` |
| 3,049 | `headNoteIdx` | `var headNoteIdx =` |
| 3,050 | `headMenuHtml` | `function headMenuHtml(` |
| 3,075 | `headMenuFor` | `var headMenuFor =` |
| 3,076 | `headSubFor` | `var headSubFor =` |
| 3,077 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,106 | `histNote` | `function histNote(` |
| 3,107 | `meterFlagged` | `function meterFlagged(` |
| 3,114 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,137 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,151 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,164 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,169 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,173 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,185 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,199 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,213 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,232 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,263 | `desireBlock` | `function desireBlock(` |
| 3,274 | `volumeBlock` | `function volumeBlock(` |
| 3,286 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,298 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,305_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,306 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,307 | `m2Level` | `var m2Level =` |
| 3,328 | `m2Yoy` | `var m2Yoy =` |
| 3,329 | `M2_NORM` | `var M2_NORM =` |
| 3,331 | `volumeVerdict` | `function volumeVerdict(` |
| 3,339 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,340 | `unempHistory` | `var unempHistory =` |
| 3,346 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,355 | `NROU_NOW` | `var NROU_NOW =` |
| 3,356 | `unempState` | `function unempState(` |
| 3,362 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,414_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,415 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,424 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,480 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,481 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,482 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,483_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,485 | `householdsChart` | `function householdsChart(` |
| 3,535 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,588 | `GDP_NORM` | `var GDP_NORM =` |
| 3,589 | `gdpNowQ` | `var gdpNowQ =` |
| 3,590 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,612 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,663 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,708 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,716 | `velocityVerdict` | `function velocityVerdict(` |
| 3,724 | `derivePulseTag` | `function derivePulseTag(` |
| 3,730 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,762_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,763 | `seasonReading` | `var seasonReading =` |
| 3,807 | `frameworkRows` | `var frameworkRows =` |
| 3,817 | `vixRow` | `var vixRow =` |
| 3,818 | `VIX_CALM` | `var VIX_CALM =` |
| 3,819 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,823 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,830_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,831 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,840_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,841 | `calendarTodayY` | `var calendarTodayY =` |
| 3,843 | `vix3mClose` | `var vix3mClose =` |
| 3,844 | `fearCurve` | `function fearCurve(` |
| 3,849 | `curveVerdict` | `function curveVerdict(` |
| 3,854 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,863_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,864 | `modeBar` | `function modeBar(` |
| 3,871 | `pickerOpen` | `var pickerOpen =` |
| 3,872 | `cycleByName` | `function cycleByName(` |
| 3,876 | `openCycle` | `function openCycle(` |
| 3,880 | `cycleSlice` | `function cycleSlice(` |
| 3,888 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,896 | `cycleMonths` | `function cycleMonths(` |
| 3,904 | `histControls` | `function histControls(` |
| 3,913 | `pageCycle` | `function pageCycle(` |
| 3,917 | `cycLabel` | `function cycLabel(` |
| 3,921 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,926 | `cyclePicker` | `function cyclePicker(` |
| 3,945 | `rangeBar` | `function rangeBar(` |
| 3,952 | `trendOf` | `function trendOf(` |
| 3,967 | `TREND_ARROW` | `var TREND_ARROW =` |
| 3,971 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 3,982_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,983 | `yearOf` | `function yearOf(` |
| 3,984 | `mean` | `function mean(` |

### The record rows

_line 3,985_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,986 | `headSigma` | `function headSigma(` |
| 3,991 | `atQuarter` | `function atQuarter(` |
| 3,992 | `atMonth` | `function atMonth(` |
| 3,993 | `ordinal` | `function ordinal(` |
| 3,994 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 3,997_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,998 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,005 | `moreRow` | `function moreRow(` |
| 4,011 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,012 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,018_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,019 | `xLabelOf` | `function xLabelOf(` |
| 4,029 | `fitLine` | `function fitLine(` |
| 4,033 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,051_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,052 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,060 | `vGrid` | `function vGrid(` |
| 4,064 | `COL_FILL` | `var COL_FILL =` |
| 4,065 | `colPath` | `function colPath(` |
| 4,070 | `colWidth` | `function colWidth(` |
| 4,075 | `AXIS` | `var AXIS =` |
| 4,076 | `histFrame` | `function histFrame(` |
| 4,083 | `xLabel` | `function xLabel(` |
| 4,086 | `crossLine` | `function crossLine(` |
| 4,089 | `zeroRule` | `function zeroRule(` |
| 4,092 | `meanRule` | `function meanRule(` |
| 4,093 | `pendingGeom` | `var pendingGeom =` |
| 4,094 | `publishGeom` | `function publishGeom(` |
| 4,095 | `attachHistory` | `function attachHistory(` |
| 4,104 | `histBar` | `function histBar(` |
| 4,107 | `histTip` | `function histTip(` |
| 4,108 | `avgRule` | `function avgRule(` |
| 4,111 | `vhOpen` | `function vhOpen(` |
| 4,112 | `chartAxes` | `function chartAxes(` |
| 4,142 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,177_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,179 | `maxIn` | `function maxIn(` |
| 4,184 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,185 | `PEEK_W` | `var PEEK_W =` |
| 4,186 | `PEEK_H` | `var PEEK_H =` |
| 4,187 | `colPeek` | `function colPeek(` |
| 4,205 | `meterPeek` | `function meterPeek(` |
| 4,222 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,227 | `pressureZone` | `function pressureZone(` |
| 4,233 | `HZN_BACK` | `var HZN_BACK =` |
| 4,234 | `hznLast` | `function hznLast(` |
| 4,235 | `hznBack` | `function hznBack(` |
| 4,236 | `horizonWord` | `function horizonWord(` |
| 4,256 | `HZN_METERS` | `var HZN_METERS =` |
| 4,264 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,285 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,290 | `RISK_RISK` | `var RISK_RISK =` |
| 4,295 | `riskCell` | `function riskCell(` |
| 4,296 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,326 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,351_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,352 | `pulseClipN` | `var pulseClipN =` |
| 4,353 | `beatPath` | `function beatPath(` |
| 4,370 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,384 | `pulsePeek` | `function pulsePeek(` |
| 4,387 | `pulseBlock` | `function pulseBlock(` |
| 4,404 | `CHEV` | `var CHEV =` |
| 4,405 | `peekCard` | `function peekCard(` |
| 4,424 | `dropSvg` | `function dropSvg(` |
| 4,426 | `volumeSvg` | `function volumeSvg(` |
| 4,430 | `gaugeSvg` | `function gaugeSvg(` |
| 4,434 | `diamondSvg` | `function diamondSvg(` |
| 4,438 | `sproutSvg` | `function sproutSvg(` |
| 4,446 | `markSvg` | `function markSvg(` |
| 4,449 | `hormoneSvg` | `function hormoneSvg(` |
| 4,454 | `flameSvg` | `function flameSvg(` |
| 4,457 | `clockSvg` | `function clockSvg(` |
| 4,458 | `gearSvg` | `function gearSvg(` |
| 4,466 | `thermoSvg` | `function thermoSvg(` |
| 4,469 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,471 | `trendUpSvg` | `function trendUpSvg(` |
| 4,473 | `ecgSvg` | `function ecgSvg(` |
| 4,475 | `circulationSvg` | `function circulationSvg(` |
| 4,476 | `weatherSvg` | `function weatherSvg(` |
| 4,484 | `moodSvg` | `function moodSvg(` |
| 4,488 | `boltSvg` | `function boltSvg(` |
| 4,489 | `houseSvg` | `function houseSvg(` |
| 4,492 | `marketSvg` | `function marketSvg(` |
| 4,495 | `bagSvg` | `function bagSvg(` |
| 4,498 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,506_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,507 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,508 | `dsrHistory` | `var dsrHistory =` |
| 4,509 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,510 | `savHistory` | `var savHistory =` |
| 4,513 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,522 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,523 | `dsrNow` | `var dsrNow =` |
| 4,524 | `savNow` | `var savNow =` |
| 4,525 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,526 | `householdsWord` | `function householdsWord(` |
| 4,533 | `householdsNow` | `var householdsNow =` |
| 4,534 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,551 | `savInfoHtml` | `function savInfoHtml(` |
| 4,569 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,576 | `curveSub` | `var curveSub =` |
| 4,577 | `vixPct` | `function vixPct(` |
| 4,581 | `curveNoteFull` | `var curveNoteFull =` |
| 4,592 | `volatilityRing` | `function volatilityRing(` |
| 4,597 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,598 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,613 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,618_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,619 | `sp500Years` | `var sp500Years =` |
| 4,620 | `marketWord` | `function marketWord(` |
| 4,643 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,653 | `marketCycles` | `var marketCycles =` |
| 4,681 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,683_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,684 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,685 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,690_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,691 | `TIMING` | `var TIMING =` |
| 4,697 | `CATEGORIES` | `var CATEGORIES =` |
| 4,703 | `ROSTER` | `var ROSTER =` |
| 4,755 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,756 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,758 | `pageState` | `function pageState(` |
| 4,763 | `pageMode` | `var pageMode =` |
| 4,764 | `pageCycles` | `var pageCycles =` |
| 4,765 | `pageRange` | `var pageRange =` |
| 4,766 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,767 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,768 | `keyed` | `function keyed(` |
| 4,775 | `hyMonths` | `function hyMonths(` |
| 4,778 | `prettyKey` | `function prettyKey(` |
| 4,783 | `lastDate` | `function lastDate(` |
| 4,784 | `compiledDay` | `function compiledDay(` |
| 4,785 | `labPeriod` | `function labPeriod(` |
| 4,786 | `rosterFor` | `function rosterFor(` |
| 4,787 | `rowReadings` | `function rowReadings(` |
| 4,788 | `indOf` | `function indOf(` |
| 4,789 | `peekOf` | `function peekOf(` |
| 4,794 | `cardDate` | `function cardDate(` |
| 4,795 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,816_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,817 | `slopeOf` | `function slopeOf(` |
| 4,822 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,823 | `readSeason` | `function readSeason(` |
| 4,842 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,843 | `qLabel` | `function qLabel(` |
| 4,864 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,866_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,867 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,868 | `seasonTitle` | `function seasonTitle(` |
| 4,869 | `monthLabel` | `function monthLabel(` |
| 4,870 | `cycleReturns` | `function cycleReturns(` |
| 4,880 | `cycleModel` | `function cycleModel(` |
| 4,911 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,919 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,925 | `nowModel` | `var nowModel =` |
| 4,926 | `readingNow` | `var readingNow =` |
| 4,927 | `cpiNow` | `var cpiNow =` |
| 4,928 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,929 | `currentSeason` | `var currentSeason =` |
| 4,930 | `seasonWhy` | `var seasonWhy =` |
| 4,932 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,934_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,935 | `rankToDate` | `function rankToDate(` |
| 4,939 | `marketCache` | `var marketCache =` |
| 4,940 | `marketMonths` | `function marketMonths(` |
| 4,948 | `seasonInMonth` | `function seasonInMonth(` |
| 4,953 | `yearAfter` | `function yearAfter(` |
| 4,957 | `trackCache` | `var trackCache =` |
| 4,958 | `feelingTrack` | `function feelingTrack(` |
| 4,966 | `monthsApart` | `function monthsApart(` |
| 4,967 | `feelingSpells` | `function feelingSpells(` |
| 4,978 | `spellRecord` | `function spellRecord(` |
| 4,984 | `diagnoseClose` | `function diagnoseClose(` |
| 4,988 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 4,993_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,994 | `rankIn` | `function rankIn(` |
| 4,999 | `moodLists` | `var moodLists =` |
| 5,000 | `moodSeries` | `function moodSeries(` |
| 5,008 | `moodAt` | `function moodAt(` |
| 5,014 | `MOOD_TURN` | `var MOOD_TURN =` |
| 5,015 | `MOOD_RISING` | `var MOOD_RISING =` |
| 5,016 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 5,017 | `moodWord` | `function moodWord(` |
| 5,021 | `moodRead` | `function moodRead(` |
| 5,028 | `moodCache` | `var moodCache =` |
| 5,029 | `moodTrack` | `function moodTrack(` |
| 5,035 | `moodToday` | `function moodToday(` |
| 5,040 | `cycleStory` | `function cycleStory(` |
| 5,051 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,062 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,063 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,064 | `spreadLabel` | `function spreadLabel(` |
| 5,068 | `policyFacts` | `function policyFacts(` |
| 5,075 | `policyFactRows` | `function policyFactRows(` |
| 5,081 | `allSources` | `var allSources =` |
| 5,095 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,107_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,108 | `SVG_NS` | `var SVG_NS =` |
| 5,109 | `svgEl` | `function svgEl(` |
| 5,114 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,148_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,149 | `clampPct` | `function clampPct(` |
| 5,152 | `detailTexts` | `var detailTexts =` |
| 5,153 | `detailSlots` | `var detailSlots =` |
| 5,154 | `detailSlot` | `function detailSlot(` |
| 5,164 | `metricSheet` | `function metricSheet(` |
| 5,169 | `ledeHtml` | `function ledeHtml(` |
| 5,170 | `facts` | `function facts(` |
| 5,171 | `factsFrom` | `function factsFrom(` |
| 5,175 | `expandBtn` | `function expandBtn(` |
| 5,179 | `sheetRenderers` | `var sheetRenderers =` |
| 5,180 | `drawsPage` | `function drawsPage(` |
| 5,181 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,210_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,213 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,214_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,215 | `subjectRow` | `function subjectRow(` |
| 5,225 | `subjectIcon` | `function subjectIcon(` |
| 5,226 | `srcHtml` | `function srcHtml(` |
| 5,227 | `timingMark` | `function timingMark(` |
| 5,235 | `timingPill` | `function timingPill(` |
| 5,244 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,252 | `seatPageFoot` | `function seatPageFoot(` |
| 5,264 | `timingMembers` | `var timingMembers =` |
| 5,266 | `registerTiming` | `function registerTiming(` |
| 5,268 | `headHtml` | `function headHtml(` |
| 5,273 | `heldHighlights` | `var heldHighlights =` |
| 5,274 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,301_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,302 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,303 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,311 | `withLatestPoint` | `function withLatestPoint(` |
| 5,316 | `pressureMaturities` | `function pressureMaturities(` |
| 5,340 | `registerFlowPages` | `function registerFlowPages(` |
| 5,394 | `renderPressureRow` | `function renderPressureRow(` |
| 5,402 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,421 | `ylmColumns` | `function ylmColumns(` |
| 5,441 | `ylmFitLine` | `function ylmFitLine(` |
| 5,453 | `pressureHead` | `function pressureHead(` |
| 5,471 | `showPressureView` | `function showPressureView(` |
| 5,476 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,609_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,610 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,647_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,648 | `spreadSeries` | `function spreadSeries(` |
| 5,692 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,818_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,819 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: the Treasury spreads, inside Pressure

_line 5,845_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,846 | `renderHorizonPage` | `function renderHorizonPage(` |
| 5,870 | `spreadInsights` | `function spreadInsights(` |

### RENDER: Valuation (slow)

_line 5,900_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,901 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,909_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,910 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,007_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,008 | `renderVolatility` | `function renderVolatility(` |
| 6,053 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,083_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,084 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,105_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,106 | `totalRiseIn` | `function totalRiseIn(` |
| 6,116 | `eraInflation` | `function eraInflation(` |
| 6,127 | `eraGrowth` | `function eraGrowth(` |
| 6,143 | `fmtSigned` | `function fmtSigned(` |
| 6,144 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,145 | `growthShown` | `function growthShown(` |
| 6,146 | `growthShownCap` | `function growthShownCap(` |
| 6,147 | `phaseClass` | `function phaseClass(` |
| 6,148 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,152 | `cycleViewEl` | `var cycleViewEl =` |
| 6,153 | `shownEra` | `var shownEra =` |
| 6,154 | `calendarReset` | `var calendarReset =` |
| 6,155 | `metricPageReset` | `var metricPageReset =` |
| 6,156 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,157 | `topbarBack` | `var topbarBack =` |
| 6,158 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,165_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,166 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,247_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,248 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,266_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,267 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,288_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,290 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,291 | `hubSet` | `function hubSet(` |
| 6,302 | `quarterPopup` | `function quarterPopup(` |
| 6,325 | `hubShowDefault` | `function hubShowDefault(` |
| 6,334 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,340 | `hubShowYear` | `function hubShowYear(` |
| 6,350 | `renderCycleDial` | `function renderCycleDial(` |
| 6,431 | `m2Step` | `function m2Step(` |
| 6,434 | `heatStep` | `function heatStep(` |
| 6,438 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,449_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,450 | `renderCycleView` | `function renderCycleView(` |
| 6,456 | `shownEraModel` | `var shownEraModel =` |
| 6,457 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,459_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,460 | `stripGroupName` | `var stripGroupName =` |
| 6,461 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,489 | `marketStripHtml` | `function marketStripHtml(` |
| 6,523 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,524 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,553_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,554 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,560 | `debtSvg` | `function debtSvg(` |
| 6,561 | `interestSvg` | `function interestSvg(` |
| 6,563 | `budgetSvg` | `function budgetSvg(` |
| 6,565 | `lede` | `function lede(` |
| 6,566 | `periodOf` | `function periodOf(` |
| 6,567 | `meterWord` | `function meterWord(` |
| 6,568 | `splitPages` | `function splitPages(` |
| 6,585 | `confidencePage` | `function confidencePage(` |
| 6,591 | `marketPage` | `function marketPage(` |
| 6,597 | `productivityPage` | `function productivityPage(` |
| 6,602 | `splitSpec` | `function splitSpec(` |
| 6,608 | `splitInfo` | `function splitInfo(` |
| 6,612 | `periodTicks` | `function periodTicks(` |
| 6,617 | `periodOfSeries` | `function periodOfSeries(` |
| 6,618 | `drawSplit` | `function drawSplit(` |
| 6,635 | `mountSplit` | `function mountSplit(` |
| 6,648 | `splitPeek` | `function splitPeek(` |
| 6,655 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,663 | `deficitPeek` | `function deficitPeek(` |
| 6,667 | `catSheet` | `function catSheet(` |
| 6,672 | `groupId` | `function groupId(` |
| 6,673 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,674 | `seatGroups` | `function seatGroups(` |
| 6,677 | `groupSheet` | `function groupSheet(` |
| 6,687 | `appendPicks` | `function appendPicks(` |
| 6,695 | `doorSel` | `function doorSel(` |
| 6,696 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,708_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,709 | `buffettInsight` | `function buffettInsight(` |
| 6,724 | `debtInsight` | `function debtInsight(` |
| 6,739 | `productivityInsight` | `function productivityInsight(` |
| 6,749 | `confidenceInsight` | `function confidenceInsight(` |
| 6,760 | `ORDINAL` | `var ORDINAL =` |
| 6,761 | `marketInsight` | `function marketInsight(` |
| 6,773 | `interestInsight` | `function interestInsight(` |
| 6,788 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,811 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,831 | `activityStackHtml` | `function activityStackHtml(` |
| 6,841 | `seatTemperature` | `function seatTemperature(` |
| 6,849 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,882_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,883 | `partsOf` | `function partsOf(` |
| 6,892 | `authored` | `function authored(` |
| 6,893 | `registerRoster` | `function registerRoster(` |
| 6,915 | `indRow` | `function indRow(` |
| 6,919 | `IND_ORDER` | `var IND_ORDER =` |
| 6,920 | `indGroupRow` | `function indGroupRow(` |
| 6,925 | `indRows` | `function indRows(` |
| 6,939 | `indCategoryHtml` | `function indCategoryHtml(` |
| 6,947 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 6,949_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,950 | `NAV` | `var NAV =` |
| 6,951 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,045_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,046 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,093_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,094 | `qPretty` | `function qPretty(` |
| 7,095 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,096 | `peekArt` | `function peekArt(` |
| 7,097 | `indPeriod` | `function indPeriod(` |
| 7,101 | `catItem` | `function catItem(` |
| 7,151 | `insightCirculation` | `function insightCirculation(` |
| 7,184 | `insightWeather` | `function insightWeather(` |
| 7,224 | `seasonCards` | `function seasonCards(` |
| 7,230 | `marketCycleCard` | `function marketCycleCard(` |
| 7,242 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,246 | `seasonName` | `function seasonName(` |
| 7,247 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,254 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,259 | `curvePath` | `function curvePath(` |
| 7,267 | `moodCallout` | `function moodCallout(` |
| 7,271 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,283 | `moodInfo` | `function moodInfo(` |
| 7,291 | `moodCard` | `function moodCard(` |
| 7,297 | `insightMood` | `function insightMood(` |
| 7,304 | `storyBeats` | `function storyBeats(` |
| 7,315 | `storyText` | `function storyText(` |
| 7,319 | `storyInfo` | `function storyInfo(` |
| 7,325 | `storyHtml` | `function storyHtml(` |
| 7,330 | `PAIR_ART` | `var PAIR_ART =` |
| 7,336 | `placeSignPair` | `function placeSignPair(` |
| 7,359 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,375 | `buildCategories` | `function buildCategories(` |
| 7,391 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,429_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,430 | `capeFmt1` | `function capeFmt1(` |
| 7,431 | `actCycleMonths` | `function actCycleMonths(` |
| 7,439 | `householdsHighlights` | `function householdsHighlights(` |
| 7,458 | `redrawSheet` | `function redrawSheet(` |
| 7,462 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,507 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,544 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,591 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,621 | `valuationHighlights` | `function valuationHighlights(` |
| 7,634 | `tempHighlights` | `function tempHighlights(` |
| 7,651 | `gdpHighlights` | `function gdpHighlights(` |
| 7,666 | `renderMetricPages` | `function renderMetricPages(` |
| 7,676 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,686_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,687 | `todayFace` | `function todayFace(` |
| 7,693 | `readDoor` | `function readDoor(` |
| 7,701 | `pct` | `function pct(` |
| 7,702 | `rosterRows` | `function rosterRows(` |
| 7,703 | `eraEnds` | `function eraEnds(` |
| 7,710 | `eraMove` | `function eraMove(` |
| 7,714 | `HORMONES` | `var HORMONES =` |
| 7,715 | `analysisFor` | `function analysisFor(` |
| 7,721 | `dxRow` | `function dxRow(` |
| 7,722 | `dxText` | `function dxText(` |
| 7,723 | `dxSection` | `function dxSection(` |
| 7,724 | `systemHtml` | `function systemHtml(` |
| 7,727 | `dxHead` | `function dxHead(` |
| 7,732 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,741 | `acrossCycle` | `function acrossCycle(` |
| 7,748 | `trendCardHtml` | `function trendCardHtml(` |
| 7,754 | `spellLines` | `function spellLines(` |
| 7,761 | `trendSub` | `function trendSub(` |
| 7,762 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,766 | `replaceInsights` | `function replaceInsights(` |
| 7,772 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,776 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,789_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,790 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,791 | `cycleDataOn` | `function cycleDataOn(` |
| 7,792 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,812 | `wireCycleData` | `function wireCycleData(` |
| 7,827 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,872_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,873 | `eraOpen` | `var eraOpen =` |
| 7,874 | `kT` | `function kT(` |
| 7,878 | `upTo` | `function upTo(` |
| 7,879 | `pairAt` | `function pairAt(` |
| 7,880 | `eraReading` | `function eraReading(` |
| 7,890 | `eraFig` | `function eraFig(` |
| 7,897 | `eraValue` | `function eraValue(` |
| 7,903 | `eraRange` | `function eraRange(` |
| 7,908 | `eraMini` | `function eraMini(` |
| 7,913 | `eraCard` | `function eraCard(` |
| 7,932 | `eraCards` | `function eraCards(` |
| 7,938 | `eraShow` | `function eraShow(` |
| 7,945 | `enterEra` | `function enterEra(` |
| 7,952 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,959_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,960 | `rosterRow` | `function rosterRow(` |
| 7,973 | `__roster` | `var __roster =` |
| 7,974 | `readingRoster` | `function readingRoster(` |
| 7,981 | `withUnit` | `function withUnit(` |
| 7,982 | `pastFigure` | `function pastFigure(` |
| 7,986 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 7,988_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,989 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,013 | `placeWords` | `function placeWords(` |
| 8,017 | `symptomNote` | `function symptomNote(` |
| 8,024 | `symptomRow` | `function symptomRow(` |
| 8,031 | `cycleTrack` | `function cycleTrack(` |
| 8,046 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,054_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,055 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,104_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,105 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,136_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,137 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **9 compute a value**, 9 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,947–1,950 | `LIVE_CACHE` | Live data without a render refactor |
| 2,279–2,283 | `productivityRecord` | Productivity growth is not in this panel |
| 2,296–2,318 | `productivityReading` | Productivity growth is not in this panel |
| 2,314–2,318 | `confidenceRecord` | Consumer confidence |
| 2,325–4,255 | `confidenceReading` | Consumer confidence |
| 4,242–4,255 | `horizonRead` | A series' highest reading within a span |
| 4,624–4,857 | `marketReading` | The S&P 500, year by year |
| 4,844–4,857 | `seasonTrackAll` | The season, computed |
| 4,859–4,863 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,526 |
| `pressure-range` | 2,005 |
| `sheet-marker-deficit` | 7,523 |
| `sheet-metric-gdp` | 7,487 |
| `sheet-metric-households` | 7,545 |
| `sheet-metric-temp` | 7,463 |
| `sheet-metric-valuation` | 7,565 |
| `sheet-sign-activity` | 7,508 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,530 |
| `desire-range` | 5,376 |
| `fear-range` | 6,016 |
| `pressure-range` | 5,581 |
| `pulse-range` | 5,344 |
| `sheet-metric-gdp` | 7,488 |
| `sheet-metric-temp` | 7,464 |
| `sheet-metric-valuation` | 7,566 |
| `volume-range` | 5,360 |

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
| 487 | journal (editorial content tab) |
| 493 | content tab: reading companion |
| 542 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 736 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 811 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 884 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,053 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,068 | The symptoms: a cycle's years against today |
| 1,144 | hero: yield curve |
| 1,176 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,195 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,222 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,230 | long cycle (structural layer) |
| 1,237 | indicator grid |
| 1,263 | info icon + popover (progressive disclosure for longer notes) |
| 1,277 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,360 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (98), which is what the renderers fill:

| Line | id |
|---|---|
| 1,376 | `topbar-back` |
| 1,379 | `topbar-title` |
| 1,380 | `menu-btn` |
| 1,394 | `main` |
| 1,397 | `cycle-view` |
| 1,400 | `cycle-kicker` |
| 1,403 | `cycle-dial` |
| 1,405 | `season-wheel-hub-date` |
| 1,406 | `season-wheel-hub-theme` |
| 1,407 | `season-wheel-hub-detail` |
| 1,415 | `today-analysis` |
| 1,416 | `peek-row` |
| 1,417 | `sheet-metric-temp` |
| 1,418 | `temp-timing` |
| 1,419 | `temp-chart` |
| 1,420 | `temp-rangebar` |
| 1,422 | `temp-head` |
| 1,423 | `temp-history` |
| 1,424 | `temp-hist-tooltip` |
| 1,425 | `temp-trend` |
| 1,427 | `temp-highlights` |
| 1,429 | `sheet-metric-gdp` |
| 1,430 | `gdp-timing` |
| 1,431 | `gdp-chart` |
| 1,432 | `gdp-rangebar` |
| 1,434 | `gdp-head` |
| 1,435 | `gdp-history` |
| 1,436 | `gdp-hist-tooltip` |
| 1,437 | `gdp-trend` |
| 1,439 | `gdp-highlights` |
| 1,443 | `sheet-marker-deficit` |
| 1,443 | `deficit-timing` |
| 1,445 | `sheet-metric-households` |
| 1,446 | `households-timing` |
| 1,447 | `households-chart` |
| 1,448 | `households-highlights` |
| 1,451 | `sheet-metric-valuation` |
| 1,452 | `valuation-timing` |
| 1,453 | `valuation-chart` |
| 1,454 | `valuation-highlights` |
| 1,461 | `subj-value-hormones` |
| 1,462 | `subj-say-hormones` |
| 1,468 | `hormones-history` |
| 1,469 | `hormones-insights` |
| 1,478 | `subj-value-pressure` |
| 1,479 | `subj-say-pressure` |
| 1,485 | `pressure-timeline` |
| 1,487 | `pressure-head` |
| 1,488 | `ylm-shell` |
| 1,489 | `ylm-svg` |
| 1,490 | `ylm-tooltip` |
| 1,492 | `spread-history-shell` |
| 1,493 | `spread-history-svg` |
| 1,494 | `spread-history-tooltip` |
| 1,496 | `ylm-trend` |
| 1,498 | `pressure-insights` |
| 1,505 | `subj-ring-sentiment` |
| 1,508 | `subj-value-sentiment` |
| 1,509 | `subj-say-sentiment` |
| 1,510 | `subj-spark-sentiment` |
| 1,516 | `fear-history` |
| 1,517 | `curve-highlights` |
| 1,523 | `signs-list` |
| 1,529 | `calendar-list` |
| 1,536 | `cycle-data` |
| 1,538 | `cycle-legend` |
| 1,539 | `cycle-list` |
| 1,540 | `cycle-more` |
| 1,541 | `cycle-more-label` |
| 1,546 | `calendar-cycle` |
| 1,566 | `search-home` |
| 1,568 | `search-input` |
| 1,570 | `search-list` |
| 1,574 | `more-menu` |
| 1,577 | `menu-back` |
| 1,591 | `sources-open` |
| 1,599 | `appearance-current` |
| 1,605 | `sheet-howto` |
| 1,648 | `sheet-book` |
| 1,679 | `seasons-kicker` |
| 1,681 | `seasons-rows` |
| 1,684 | `framework-kicker` |
| 1,687 | `framework-rows` |
| 1,697 | `sheet-appearance` |
| 1,705 | `theme-toggle` |
| 1,712 | `sheet-contact` |
| 1,721 | `contact-form` |
| 1,722 | `contact-title` |
| 1,723 | `contact-message` |
| 1,725 | `contact-hint` |
| 1,726 | `contact-send` |
| 1,732 | `sheet-sources` |
| 1,735 | `sources-back` |
| 1,740 | `asof-text` |
| 1,741 | `sources-groups` |
| 1,747 | `detail-backdrop` |
| 1,749 | `detail-modal-close` |
| 1,750 | `detail-modal-body` |

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

