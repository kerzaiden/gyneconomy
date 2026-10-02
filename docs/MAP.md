# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,302 lines**, about 668 KB, roughly **190 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `73e60f5` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,372 | the whole stylesheet, every token and rule |
| **Markup** | 1,373–1,756 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,757–8,269 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,270–8,302 | </body></html> |

Counts: **436** top-level functions, **189** top-level vars, **9** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,757_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,759 | `byId` | `function byId(` |
| 1,767 | `byIdMaybe` | `function byIdMaybe(` |
| 1,768 | `put` | `function put(` |
| 1,773 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,775_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,776 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,777 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,778 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,779 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,783 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,788_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,789 | `wheelMeta` | `var wheelMeta =` |
| 1,797 | `seasonOverride` | `var seasonOverride =` |
| 1,798 | `cycleNowNote` | `var cycleNowNote =` |
| 1,800 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,878 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,920 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,921 | `volatilityHistory` | `var volatilityHistory =` |
| 1,923 | `fiscalHistory` | `var fiscalHistory =` |
| 1,929 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,931 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,941 | `productivityHistory` | `var productivityHistory =` |
| 1,943 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |
| 1,945 | `confidenceHistory` | `var confidenceHistory =` |
| 1,947 | `gdpYoYBefore` | `var gdpYoYBefore =` |
| 1,948 | `cpiYoYBefore` | `var cpiYoYBefore =` |
| 1,949 | `sp500ReturnsBefore` | `var sp500ReturnsBefore =` |
| 1,950 | `gdpGrowthBefore` | `var gdpGrowthBefore =` |

### Live data without a render refactor

_line 1,952_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,959 | `merge` | `function merge(` |
| 1,966 | `LIVE` | `function LIVE(` |
| 1,980 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 1,983_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,985 | `paintReading` | `function paintReading(` |
| 2,002 | `repaintVolatility` | `function repaintVolatility(` |
| 2,006 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,011 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,015 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,020_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,021 | `READINGS` | `var READINGS =` |
| 2,076 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,077 | `KINDS` | `var KINDS =` |
| 2,078 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,092 | `receive` | `function receive(` |
| 2,108 | `liveAsOf` | `var liveAsOf =` |
| 2,109 | `fmtAsOf` | `function fmtAsOf(` |
| 2,114 | `applyLive` | `function applyLive(` |
| 2,127 | `shapeOk` | `function shapeOk(` |
| 2,134 | `repaintPolicy` | `function repaintPolicy(` |
| 2,140 | `GYN` | `var GYN =` |
| 2,167 | `refreshLiveData` | `function refreshLiveData(` |
| 2,185 | `fetchSiteData` | `function fetchSiteData(` |
| 2,201 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,206_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,207 | `yieldCurve` | `var yieldCurve =` |
| 2,213 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,214 | `curveAsOf` | `function curveAsOf(` |
| 2,219 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,220 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,225 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,227_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,228 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,229 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,230 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,231 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,232 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,234_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,235 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,241 | `uninvLagToday` | `var uninvLagToday =` |
| 2,246 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,253 | `gdpSrc` | `var gdpSrc =` |
| 2,257 | `labPanel` | `var labPanel =` |
| 2,286 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,287_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,294 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,295 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,322_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,323 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,329 | `confidenceWord` | `function confidenceWord(` |

### The deficit, year by year

_line 2,356_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,357 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,358 | `deficitHistory` | `var deficitHistory =` |
| 2,361 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,362 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,364 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,373_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,374 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,383_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,384 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,387 | `timelineSpan` | `function timelineSpan(` |
| 2,392 | `timelineFor` | `function timelineFor(` |
| 2,403 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,409_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,410 | `windowScale` | `function windowScale(` |
| 2,425 | `windowYears` | `function windowYears(` |
| 2,433 | `refName` | `function refName(` |
| 2,437 | `histReadEnsure` | `function histReadEnsure(` |
| 2,457 | `histReadFill` | `function histReadFill(` |
| 2,507 | `histAxisEnds` | `function histAxisEnds(` |
| 2,518 | `histLegend` | `function histLegend(` |
| 2,578 | `refitHistory` | `function refitHistory(` |
| 2,588 | `wireHistHover` | `function wireHistHover(` |
| 2,625 | `mWindowFrom` | `function mWindowFrom(` |
| 2,629 | `qWindowFrom` | `function qWindowFrom(` |
| 2,634 | `DEF_1983` | `var DEF_1983 =` |
| 2,635 | `defFrom` | `function defFrom(` |
| 2,640 | `deficitChart` | `function deficitChart(` |
| 2,708 | `deficitBlock` | `function deficitBlock(` |
| 2,748 | `buffettHistory` | `var buffettHistory =` |
| 2,750 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,751 | `hyDates` | `var hyDates =` |
| 2,752 | `hyOas` | `var hyOas =` |
| 2,753 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,760 | `hyAt` | `function hyAt(` |
| 2,764 | `hyLabel` | `function hyLabel(` |
| 2,765 | `hyNum` | `function hyNum(` |
| 2,766 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,774 | `hyQuarters` | `function hyQuarters(` |
| 2,782 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,784 | `capeHistory` | `var capeHistory =` |
| 2,786 | `longCycleSrc` | `var longCycleSrc =` |
| 2,802 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,816_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,817 | `sentiment` | `var sentiment =` |
| 2,833 | `valuation` | `var valuation =` |
| 2,854 | `valRow` | `function valRow(` |
| 2,859 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,862 | `coincident` | `var coincident =` |
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

_line 3,024_ · 24 declarations

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
| 3,199 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,218 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,249 | `desireBlock` | `function desireBlock(` |
| 3,260 | `volumeBlock` | `function volumeBlock(` |
| 3,272 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,284 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,291_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,292 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,293 | `m2Level` | `var m2Level =` |
| 3,314 | `m2Yoy` | `var m2Yoy =` |
| 3,315 | `M2_NORM` | `var M2_NORM =` |
| 3,317 | `volumeVerdict` | `function volumeVerdict(` |
| 3,325 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,326 | `unempHistory` | `var unempHistory =` |
| 3,332 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,341 | `NROU_NOW` | `var NROU_NOW =` |
| 3,342 | `unempState` | `function unempState(` |
| 3,348 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,400_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,401 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,410 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,466 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,467 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,468 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,469_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,471 | `householdsChart` | `function householdsChart(` |
| 3,521 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,574 | `GDP_NORM` | `var GDP_NORM =` |
| 3,575 | `gdpNowQ` | `var gdpNowQ =` |
| 3,576 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,598 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,649 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,694 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,702 | `velocityVerdict` | `function velocityVerdict(` |
| 3,710 | `derivePulseTag` | `function derivePulseTag(` |
| 3,716 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,748_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,749 | `seasonReading` | `var seasonReading =` |
| 3,793 | `frameworkRows` | `var frameworkRows =` |
| 3,803 | `vixRow` | `var vixRow =` |
| 3,804 | `VIX_CALM` | `var VIX_CALM =` |
| 3,805 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,809 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,816_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,817 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,826_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,827 | `calendarTodayY` | `var calendarTodayY =` |
| 3,829 | `vix3mClose` | `var vix3mClose =` |
| 3,830 | `fearCurve` | `function fearCurve(` |
| 3,835 | `curveVerdict` | `function curveVerdict(` |
| 3,840 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,849_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,850 | `modeBar` | `function modeBar(` |
| 3,857 | `pickerOpen` | `var pickerOpen =` |
| 3,858 | `cycleByName` | `function cycleByName(` |
| 3,862 | `openCycle` | `function openCycle(` |
| 3,866 | `cycleSlice` | `function cycleSlice(` |
| 3,874 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,882 | `cycleMonths` | `function cycleMonths(` |
| 3,890 | `histControls` | `function histControls(` |
| 3,899 | `pageCycle` | `function pageCycle(` |
| 3,903 | `cycLabel` | `function cycLabel(` |
| 3,907 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,912 | `cyclePicker` | `function cyclePicker(` |
| 3,931 | `rangeBar` | `function rangeBar(` |
| 3,938 | `trendOf` | `function trendOf(` |
| 3,953 | `TREND_ARROW` | `var TREND_ARROW =` |
| 3,957 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 3,968_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,969 | `yearOf` | `function yearOf(` |
| 3,970 | `mean` | `function mean(` |

### The record rows

_line 3,971_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,972 | `headSigma` | `function headSigma(` |
| 3,977 | `atQuarter` | `function atQuarter(` |
| 3,978 | `atMonth` | `function atMonth(` |
| 3,979 | `ordinal` | `function ordinal(` |
| 3,980 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 3,983_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,984 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 3,991 | `moreRow` | `function moreRow(` |
| 3,997 | `tempCaptionFull` | `var tempCaptionFull =` |
| 3,998 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,004_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,005 | `xLabelOf` | `function xLabelOf(` |
| 4,015 | `fitLine` | `function fitLine(` |
| 4,019 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,037_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,038 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,046 | `vGrid` | `function vGrid(` |
| 4,050 | `COL_FILL` | `var COL_FILL =` |
| 4,051 | `colPath` | `function colPath(` |
| 4,056 | `colWidth` | `function colWidth(` |
| 4,061 | `AXIS` | `var AXIS =` |
| 4,062 | `histFrame` | `function histFrame(` |
| 4,069 | `xLabel` | `function xLabel(` |
| 4,072 | `crossLine` | `function crossLine(` |
| 4,075 | `zeroRule` | `function zeroRule(` |
| 4,078 | `meanRule` | `function meanRule(` |
| 4,079 | `pendingGeom` | `var pendingGeom =` |
| 4,080 | `publishGeom` | `function publishGeom(` |
| 4,081 | `attachHistory` | `function attachHistory(` |
| 4,090 | `histBar` | `function histBar(` |
| 4,093 | `histTip` | `function histTip(` |
| 4,094 | `avgRule` | `function avgRule(` |
| 4,097 | `vhOpen` | `function vhOpen(` |
| 4,098 | `chartAxes` | `function chartAxes(` |
| 4,128 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,163_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,165 | `maxIn` | `function maxIn(` |
| 4,170 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,171 | `PEEK_W` | `var PEEK_W =` |
| 4,172 | `PEEK_H` | `var PEEK_H =` |
| 4,173 | `colPeek` | `function colPeek(` |
| 4,191 | `meterPeek` | `function meterPeek(` |
| 4,208 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,213 | `pressureZone` | `function pressureZone(` |
| 4,219 | `HZN_BACK` | `var HZN_BACK =` |
| 4,220 | `hznLast` | `function hznLast(` |
| 4,221 | `hznBack` | `function hznBack(` |
| 4,222 | `horizonWord` | `function horizonWord(` |
| 4,242 | `HZN_METERS` | `var HZN_METERS =` |
| 4,250 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,271 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,276 | `RISK_RISK` | `var RISK_RISK =` |
| 4,281 | `riskCell` | `function riskCell(` |
| 4,282 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,312 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,337_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,338 | `pulseClipN` | `var pulseClipN =` |
| 4,339 | `beatPath` | `function beatPath(` |
| 4,356 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,370 | `pulsePeek` | `function pulsePeek(` |
| 4,373 | `pulseBlock` | `function pulseBlock(` |
| 4,390 | `CHEV` | `var CHEV =` |
| 4,391 | `peekCard` | `function peekCard(` |
| 4,410 | `dropSvg` | `function dropSvg(` |
| 4,412 | `volumeSvg` | `function volumeSvg(` |
| 4,416 | `gaugeSvg` | `function gaugeSvg(` |
| 4,420 | `diamondSvg` | `function diamondSvg(` |
| 4,424 | `sproutSvg` | `function sproutSvg(` |
| 4,432 | `markSvg` | `function markSvg(` |
| 4,435 | `heartSvg` | `function heartSvg(` |
| 4,437 | `batterySvg` | `function batterySvg(` |
| 4,440 | `flameSvg` | `function flameSvg(` |
| 4,443 | `clockSvg` | `function clockSvg(` |
| 4,444 | `thermoSvg` | `function thermoSvg(` |
| 4,447 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,449 | `trendUpSvg` | `function trendUpSvg(` |
| 4,451 | `ecgSvg` | `function ecgSvg(` |
| 4,453 | `circulationSvg` | `function circulationSvg(` |
| 4,454 | `weatherSvg` | `function weatherSvg(` |
| 4,462 | `moodSvg` | `function moodSvg(` |
| 4,466 | `boltSvg` | `function boltSvg(` |
| 4,467 | `houseSvg` | `function houseSvg(` |
| 4,470 | `marketSvg` | `function marketSvg(` |
| 4,473 | `bagSvg` | `function bagSvg(` |
| 4,476 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,484_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,485 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,486 | `dsrHistory` | `var dsrHistory =` |
| 4,487 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,488 | `savHistory` | `var savHistory =` |
| 4,491 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,500 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,501 | `dsrNow` | `var dsrNow =` |
| 4,502 | `savNow` | `var savNow =` |
| 4,503 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,504 | `householdsWord` | `function householdsWord(` |
| 4,511 | `householdsNow` | `var householdsNow =` |
| 4,512 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,529 | `savInfoHtml` | `function savInfoHtml(` |
| 4,547 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,554 | `curveSub` | `var curveSub =` |
| 4,555 | `vixPct` | `function vixPct(` |
| 4,559 | `curveNoteFull` | `var curveNoteFull =` |
| 4,570 | `volatilityRing` | `function volatilityRing(` |
| 4,575 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,576 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,591 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,596_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,597 | `sp500Years` | `var sp500Years =` |
| 4,598 | `marketWord` | `function marketWord(` |
| 4,621 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,631 | `marketCycles` | `var marketCycles =` |
| 4,718 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,720_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,721 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,722 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,727_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,728 | `TIMING` | `var TIMING =` |
| 4,734 | `CATEGORIES` | `var CATEGORIES =` |
| 4,740 | `ROSTER` | `var ROSTER =` |
| 4,790 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,791 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,793 | `pageState` | `function pageState(` |
| 4,798 | `pageMode` | `var pageMode =` |
| 4,799 | `pageCycles` | `var pageCycles =` |
| 4,800 | `pageRange` | `var pageRange =` |
| 4,801 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,802 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,803 | `keyed` | `function keyed(` |
| 4,810 | `hyMonths` | `function hyMonths(` |
| 4,813 | `prettyKey` | `function prettyKey(` |
| 4,818 | `lastDate` | `function lastDate(` |
| 4,819 | `compiledDay` | `function compiledDay(` |
| 4,820 | `labPeriod` | `function labPeriod(` |
| 4,821 | `rosterFor` | `function rosterFor(` |
| 4,822 | `rowReadings` | `function rowReadings(` |
| 4,823 | `indOf` | `function indOf(` |
| 4,824 | `peekOf` | `function peekOf(` |
| 4,829 | `cardDate` | `function cardDate(` |
| 4,830 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,851_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,852 | `slopeOf` | `function slopeOf(` |
| 4,857 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,858 | `readSeason` | `function readSeason(` |
| 4,877 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,878 | `qLabel` | `function qLabel(` |
| 4,899 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,901_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,902 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,903 | `seasonTitle` | `function seasonTitle(` |
| 4,904 | `monthLabel` | `function monthLabel(` |
| 4,905 | `cycleReturns` | `function cycleReturns(` |
| 4,915 | `cycleModel` | `function cycleModel(` |
| 4,946 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,954 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,960 | `nowModel` | `var nowModel =` |
| 4,961 | `readingNow` | `var readingNow =` |
| 4,962 | `cpiNow` | `var cpiNow =` |
| 4,963 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,964 | `currentSeason` | `var currentSeason =` |
| 4,965 | `seasonWhy` | `var seasonWhy =` |
| 4,967 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,969_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,970 | `rankToDate` | `function rankToDate(` |
| 4,974 | `marketCache` | `var marketCache =` |
| 4,975 | `marketMonths` | `function marketMonths(` |
| 4,983 | `seasonInMonth` | `function seasonInMonth(` |
| 4,988 | `yearAfter` | `function yearAfter(` |
| 4,992 | `trackCache` | `var trackCache =` |
| 4,993 | `feelingTrack` | `function feelingTrack(` |
| 5,001 | `monthsApart` | `function monthsApart(` |
| 5,002 | `feelingSpells` | `function feelingSpells(` |
| 5,013 | `spellRecord` | `function spellRecord(` |
| 5,019 | `diagnoseClose` | `function diagnoseClose(` |
| 5,023 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 5,028_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,029 | `rankIn` | `function rankIn(` |
| 5,034 | `moodLists` | `var moodLists =` |
| 5,035 | `moodSeries` | `function moodSeries(` |
| 5,043 | `moodAt` | `function moodAt(` |
| 5,049 | `MOOD_TURN` | `var MOOD_TURN =` |
| 5,050 | `MOOD_RISING` | `var MOOD_RISING =` |
| 5,051 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 5,052 | `moodWord` | `function moodWord(` |
| 5,056 | `moodRead` | `function moodRead(` |
| 5,063 | `moodCache` | `var moodCache =` |
| 5,064 | `moodTrack` | `function moodTrack(` |
| 5,070 | `moodToday` | `function moodToday(` |
| 5,075 | `cycleStory` | `function cycleStory(` |
| 5,086 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,097 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,098 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,099 | `spreadLabel` | `function spreadLabel(` |
| 5,103 | `policyFacts` | `function policyFacts(` |
| 5,110 | `policyFactRows` | `function policyFactRows(` |
| 5,116 | `allSources` | `var allSources =` |
| 5,130 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,142_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,143 | `SVG_NS` | `var SVG_NS =` |
| 5,144 | `svgEl` | `function svgEl(` |
| 5,149 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,183_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,184 | `clampPct` | `function clampPct(` |
| 5,187 | `detailTexts` | `var detailTexts =` |
| 5,188 | `detailSlots` | `var detailSlots =` |
| 5,189 | `detailSlot` | `function detailSlot(` |
| 5,199 | `metricSheet` | `function metricSheet(` |
| 5,204 | `ledeHtml` | `function ledeHtml(` |
| 5,205 | `facts` | `function facts(` |
| 5,206 | `factsFrom` | `function factsFrom(` |
| 5,210 | `expandBtn` | `function expandBtn(` |
| 5,214 | `sheetRenderers` | `var sheetRenderers =` |
| 5,215 | `drawsPage` | `function drawsPage(` |
| 5,216 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,245_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,248 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,249_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,250 | `subjectRow` | `function subjectRow(` |
| 5,260 | `subjectIcon` | `function subjectIcon(` |
| 5,261 | `srcHtml` | `function srcHtml(` |
| 5,262 | `timingMark` | `function timingMark(` |
| 5,270 | `timingPill` | `function timingPill(` |
| 5,279 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,287 | `seatPageFoot` | `function seatPageFoot(` |
| 5,299 | `timingMembers` | `var timingMembers =` |
| 5,301 | `registerTiming` | `function registerTiming(` |
| 5,303 | `headHtml` | `function headHtml(` |
| 5,308 | `heldHighlights` | `var heldHighlights =` |
| 5,309 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,336_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,337 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,338 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,346 | `withLatestPoint` | `function withLatestPoint(` |
| 5,351 | `pressureMaturities` | `function pressureMaturities(` |
| 5,375 | `registerFlowPages` | `function registerFlowPages(` |
| 5,429 | `renderPressureRow` | `function renderPressureRow(` |
| 5,437 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,456 | `ylmColumns` | `function ylmColumns(` |
| 5,476 | `ylmFitLine` | `function ylmFitLine(` |
| 5,488 | `pressureHead` | `function pressureHead(` |
| 5,506 | `showPressureView` | `function showPressureView(` |
| 5,511 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,644_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,645 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,682_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,683 | `spreadSeries` | `function spreadSeries(` |
| 5,727 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,853_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,854 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: the Treasury spreads, inside Pressure

_line 5,880_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,881 | `renderHorizonPage` | `function renderHorizonPage(` |
| 5,905 | `spreadInsights` | `function spreadInsights(` |

### RENDER: Valuation (slow)

_line 5,935_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,936 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,944_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,945 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,042_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,043 | `renderVolatility` | `function renderVolatility(` |
| 6,088 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,118_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,119 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,140_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,141 | `totalRiseIn` | `function totalRiseIn(` |
| 6,151 | `eraInflation` | `function eraInflation(` |
| 6,162 | `eraGrowth` | `function eraGrowth(` |
| 6,178 | `fmtSigned` | `function fmtSigned(` |
| 6,179 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,180 | `growthShown` | `function growthShown(` |
| 6,181 | `growthShownCap` | `function growthShownCap(` |
| 6,182 | `phaseClass` | `function phaseClass(` |
| 6,183 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,187 | `cycleViewEl` | `var cycleViewEl =` |
| 6,188 | `shownEra` | `var shownEra =` |
| 6,189 | `calendarReset` | `var calendarReset =` |
| 6,190 | `metricPageReset` | `var metricPageReset =` |
| 6,191 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,192 | `topbarBack` | `var topbarBack =` |
| 6,193 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,200_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,201 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,282_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,283 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,301_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,302 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,323_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,325 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,326 | `hubSet` | `function hubSet(` |
| 6,337 | `quarterPopup` | `function quarterPopup(` |
| 6,360 | `hubShowDefault` | `function hubShowDefault(` |
| 6,369 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,375 | `hubShowYear` | `function hubShowYear(` |
| 6,385 | `renderCycleDial` | `function renderCycleDial(` |
| 6,466 | `m2Step` | `function m2Step(` |
| 6,469 | `heatStep` | `function heatStep(` |
| 6,473 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,484_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,485 | `renderCycleView` | `function renderCycleView(` |
| 6,491 | `shownEraModel` | `var shownEraModel =` |
| 6,492 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,494_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,495 | `stripGroupName` | `var stripGroupName =` |
| 6,496 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,524 | `marketStripHtml` | `function marketStripHtml(` |
| 6,558 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,559 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,588_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,589 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,595 | `debtSvg` | `function debtSvg(` |
| 6,596 | `interestSvg` | `function interestSvg(` |
| 6,598 | `budgetSvg` | `function budgetSvg(` |
| 6,600 | `lede` | `function lede(` |
| 6,601 | `periodOf` | `function periodOf(` |
| 6,602 | `meterWord` | `function meterWord(` |
| 6,603 | `splitPages` | `function splitPages(` |
| 6,620 | `confidencePage` | `function confidencePage(` |
| 6,626 | `marketPage` | `function marketPage(` |
| 6,632 | `productivityPage` | `function productivityPage(` |
| 6,637 | `splitSpec` | `function splitSpec(` |
| 6,643 | `splitInfo` | `function splitInfo(` |
| 6,647 | `periodTicks` | `function periodTicks(` |
| 6,652 | `periodOfSeries` | `function periodOfSeries(` |
| 6,653 | `drawSplit` | `function drawSplit(` |
| 6,670 | `mountSplit` | `function mountSplit(` |
| 6,683 | `splitPeek` | `function splitPeek(` |
| 6,690 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,698 | `deficitPeek` | `function deficitPeek(` |
| 6,702 | `catSheet` | `function catSheet(` |
| 6,707 | `groupId` | `function groupId(` |
| 6,708 | `groupCard` | `function groupCard(` |
| 6,716 | `groupSheet` | `function groupSheet(` |
| 6,723 | `appendPicks` | `function appendPicks(` |
| 6,731 | `doorSel` | `function doorSel(` |
| 6,732 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,744_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,745 | `buffettInsight` | `function buffettInsight(` |
| 6,760 | `debtInsight` | `function debtInsight(` |
| 6,775 | `productivityInsight` | `function productivityInsight(` |
| 6,785 | `confidenceInsight` | `function confidenceInsight(` |
| 6,796 | `ORDINAL` | `var ORDINAL =` |
| 6,797 | `marketInsight` | `function marketInsight(` |
| 6,809 | `interestInsight` | `function interestInsight(` |
| 6,824 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,847 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,867 | `activityStackHtml` | `function activityStackHtml(` |
| 6,877 | `seatTemperature` | `function seatTemperature(` |
| 6,885 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,918_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,919 | `partsOf` | `function partsOf(` |
| 6,928 | `authored` | `function authored(` |
| 6,929 | `registerRoster` | `function registerRoster(` |
| 6,951 | `indRow` | `function indRow(` |
| 6,955 | `IND_ORDER` | `var IND_ORDER =` |
| 6,956 | `indGroupRow` | `function indGroupRow(` |
| 6,961 | `catMembers` | `function catMembers(` |
| 6,969 | `indRows` | `function indRows(` |
| 6,983 | `indCategoryHtml` | `function indCategoryHtml(` |
| 6,991 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 6,993_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,994 | `NAV` | `var NAV =` |
| 6,995 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,089_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,090 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,137_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,138 | `qPretty` | `function qPretty(` |
| 7,139 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,140 | `peekArt` | `function peekArt(` |
| 7,141 | `indPeriod` | `function indPeriod(` |
| 7,145 | `catItem` | `function catItem(` |
| 7,192 | `insightCirculation` | `function insightCirculation(` |
| 7,225 | `insightWeather` | `function insightWeather(` |
| 7,265 | `seasonCards` | `function seasonCards(` |
| 7,271 | `marketCycleCard` | `function marketCycleCard(` |
| 7,283 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,287 | `seasonName` | `function seasonName(` |
| 7,288 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,295 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,300 | `curvePath` | `function curvePath(` |
| 7,308 | `moodCallout` | `function moodCallout(` |
| 7,312 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,324 | `moodInfo` | `function moodInfo(` |
| 7,333 | `moodFigures` | `function moodFigures(` |
| 7,339 | `moodCard` | `function moodCard(` |
| 7,343 | `insightMood` | `function insightMood(` |
| 7,349 | `storyBeats` | `function storyBeats(` |
| 7,360 | `storyText` | `function storyText(` |
| 7,364 | `PAIR_ART` | `var PAIR_ART =` |
| 7,370 | `placeSignPair` | `function placeSignPair(` |
| 7,393 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,409 | `buildCategories` | `function buildCategories(` |
| 7,425 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,463_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,464 | `capeFmt1` | `function capeFmt1(` |
| 7,465 | `actCycleMonths` | `function actCycleMonths(` |
| 7,473 | `householdsHighlights` | `function householdsHighlights(` |
| 7,492 | `redrawSheet` | `function redrawSheet(` |
| 7,496 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,541 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,578 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,625 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,655 | `valuationHighlights` | `function valuationHighlights(` |
| 7,668 | `tempHighlights` | `function tempHighlights(` |
| 7,685 | `gdpHighlights` | `function gdpHighlights(` |
| 7,700 | `renderMetricPages` | `function renderMetricPages(` |
| 7,710 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,720_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,721 | `todayFace` | `function todayFace(` |
| 7,727 | `readDoor` | `function readDoor(` |
| 7,735 | `pct` | `function pct(` |
| 7,736 | `rosterRows` | `function rosterRows(` |
| 7,737 | `eraEnds` | `function eraEnds(` |
| 7,744 | `eraMove` | `function eraMove(` |
| 7,748 | `HORMONES` | `var HORMONES =` |
| 7,749 | `analysisFor` | `function analysisFor(` |
| 7,755 | `dxRow` | `function dxRow(` |
| 7,756 | `dxText` | `function dxText(` |
| 7,757 | `dxSection` | `function dxSection(` |
| 7,758 | `systemHtml` | `function systemHtml(` |
| 7,761 | `dxHead` | `function dxHead(` |
| 7,766 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,776 | `acrossCycle` | `function acrossCycle(` |
| 7,783 | `moodDoor` | `function moodDoor(` |
| 7,788 | `trendCardHtml` | `function trendCardHtml(` |
| 7,792 | `noMoodCardHtml` | `function noMoodCardHtml(` |
| 7,796 | `spellLines` | `function spellLines(` |
| 7,803 | `trendText` | `function trendText(` |
| 7,804 | `trendSub` | `function trendSub(` |
| 7,805 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,809 | `replaceInsights` | `function replaceInsights(` |
| 7,815 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,819 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,832_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,833 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,834 | `cycleDataOn` | `function cycleDataOn(` |
| 7,835 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,855 | `wireCycleData` | `function wireCycleData(` |
| 7,870 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,915_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,916 | `eraOpen` | `var eraOpen =` |
| 7,917 | `kT` | `function kT(` |
| 7,921 | `upTo` | `function upTo(` |
| 7,922 | `pairAt` | `function pairAt(` |
| 7,923 | `eraReading` | `function eraReading(` |
| 7,933 | `eraFig` | `function eraFig(` |
| 7,940 | `eraValue` | `function eraValue(` |
| 7,946 | `eraRange` | `function eraRange(` |
| 7,951 | `eraMini` | `function eraMini(` |
| 7,956 | `eraCard` | `function eraCard(` |
| 7,975 | `eraCards` | `function eraCards(` |
| 7,981 | `eraShow` | `function eraShow(` |
| 7,988 | `enterEra` | `function enterEra(` |
| 7,995 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,002_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,003 | `rosterRow` | `function rosterRow(` |
| 8,016 | `__roster` | `var __roster =` |
| 8,017 | `readingRoster` | `function readingRoster(` |
| 8,024 | `withUnit` | `function withUnit(` |
| 8,025 | `pastFigure` | `function pastFigure(` |
| 8,029 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,031_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,032 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,056 | `placeWords` | `function placeWords(` |
| 8,060 | `symptomNote` | `function symptomNote(` |
| 8,067 | `symptomRow` | `function symptomRow(` |
| 8,074 | `cycleTrack` | `function cycleTrack(` |
| 8,089 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,097_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,098 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,147_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,148 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,179_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,180 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **9 compute a value**, 9 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,955–1,958 | `LIVE_CACHE` | Live data without a render refactor |
| 2,289–2,293 | `productivityRecord` | Productivity growth is not in this panel |
| 2,306–2,328 | `productivityReading` | Productivity growth is not in this panel |
| 2,324–2,328 | `confidenceRecord` | Consumer confidence |
| 2,335–4,241 | `confidenceReading` | Consumer confidence |
| 4,228–4,241 | `horizonRead` | A series' highest reading within a span |
| 4,602–4,892 | `marketReading` | The S&P 500, year by year |
| 4,879–4,892 | `seasonTrackAll` | The season, computed |
| 4,894–4,898 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,560 |
| `pressure-range` | 2,013 |
| `sheet-marker-deficit` | 7,557 |
| `sheet-metric-gdp` | 7,521 |
| `sheet-metric-households` | 7,579 |
| `sheet-metric-temp` | 7,497 |
| `sheet-metric-valuation` | 7,599 |
| `sheet-sign-activity` | 7,542 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,564 |
| `desire-range` | 5,411 |
| `fear-range` | 6,051 |
| `pressure-range` | 5,616 |
| `pulse-range` | 5,379 |
| `sheet-metric-gdp` | 7,522 |
| `sheet-metric-temp` | 7,498 |
| `sheet-metric-valuation` | 7,600 |
| `volume-range` | 5,395 |

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
| 1,145 | hero: yield curve |
| 1,177 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,196 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,223 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,231 | long cycle (structural layer) |
| 1,238 | indicator grid |
| 1,264 | info icon + popover (progressive disclosure for longer notes) |
| 1,278 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,361 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (98), which is what the renderers fill:

| Line | id |
|---|---|
| 1,377 | `topbar-back` |
| 1,380 | `topbar-title` |
| 1,381 | `menu-btn` |
| 1,395 | `main` |
| 1,398 | `cycle-view` |
| 1,401 | `cycle-kicker` |
| 1,404 | `cycle-dial` |
| 1,406 | `season-wheel-hub-date` |
| 1,407 | `season-wheel-hub-theme` |
| 1,408 | `season-wheel-hub-detail` |
| 1,416 | `today-analysis` |
| 1,417 | `peek-row` |
| 1,418 | `sheet-metric-temp` |
| 1,419 | `temp-timing` |
| 1,420 | `temp-chart` |
| 1,421 | `temp-rangebar` |
| 1,423 | `temp-head` |
| 1,424 | `temp-history` |
| 1,425 | `temp-hist-tooltip` |
| 1,426 | `temp-trend` |
| 1,428 | `temp-highlights` |
| 1,430 | `sheet-metric-gdp` |
| 1,431 | `gdp-timing` |
| 1,432 | `gdp-chart` |
| 1,433 | `gdp-rangebar` |
| 1,435 | `gdp-head` |
| 1,436 | `gdp-history` |
| 1,437 | `gdp-hist-tooltip` |
| 1,438 | `gdp-trend` |
| 1,440 | `gdp-highlights` |
| 1,444 | `sheet-marker-deficit` |
| 1,444 | `deficit-timing` |
| 1,446 | `sheet-metric-households` |
| 1,447 | `households-timing` |
| 1,448 | `households-chart` |
| 1,449 | `households-highlights` |
| 1,452 | `sheet-metric-valuation` |
| 1,453 | `valuation-timing` |
| 1,454 | `valuation-chart` |
| 1,455 | `valuation-highlights` |
| 1,462 | `subj-value-hormones` |
| 1,463 | `subj-say-hormones` |
| 1,469 | `hormones-history` |
| 1,470 | `hormones-insights` |
| 1,479 | `subj-value-pressure` |
| 1,480 | `subj-say-pressure` |
| 1,486 | `pressure-timeline` |
| 1,488 | `pressure-head` |
| 1,489 | `ylm-shell` |
| 1,490 | `ylm-svg` |
| 1,491 | `ylm-tooltip` |
| 1,493 | `spread-history-shell` |
| 1,494 | `spread-history-svg` |
| 1,495 | `spread-history-tooltip` |
| 1,497 | `ylm-trend` |
| 1,499 | `pressure-insights` |
| 1,506 | `subj-ring-sentiment` |
| 1,509 | `subj-value-sentiment` |
| 1,510 | `subj-say-sentiment` |
| 1,511 | `subj-spark-sentiment` |
| 1,517 | `fear-history` |
| 1,518 | `curve-highlights` |
| 1,524 | `signs-list` |
| 1,530 | `calendar-list` |
| 1,537 | `cycle-data` |
| 1,539 | `cycle-legend` |
| 1,540 | `cycle-list` |
| 1,541 | `cycle-more` |
| 1,542 | `cycle-more-label` |
| 1,547 | `calendar-cycle` |
| 1,567 | `search-home` |
| 1,569 | `search-input` |
| 1,571 | `search-list` |
| 1,575 | `more-menu` |
| 1,578 | `menu-back` |
| 1,592 | `sources-open` |
| 1,600 | `appearance-current` |
| 1,606 | `sheet-howto` |
| 1,649 | `sheet-book` |
| 1,680 | `seasons-kicker` |
| 1,682 | `seasons-rows` |
| 1,685 | `framework-kicker` |
| 1,688 | `framework-rows` |
| 1,698 | `sheet-appearance` |
| 1,706 | `theme-toggle` |
| 1,713 | `sheet-contact` |
| 1,722 | `contact-form` |
| 1,723 | `contact-title` |
| 1,724 | `contact-message` |
| 1,726 | `contact-hint` |
| 1,727 | `contact-send` |
| 1,733 | `sheet-sources` |
| 1,736 | `sources-back` |
| 1,741 | `asof-text` |
| 1,742 | `sources-groups` |
| 1,748 | `detail-backdrop` |
| 1,750 | `detail-modal-close` |
| 1,751 | `detail-modal-body` |

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

