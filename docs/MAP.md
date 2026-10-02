# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,279 lines**, about 651 KB, roughly **185 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `fd08416` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,392 | the whole stylesheet, every token and rule |
| **Markup** | 1,393–1,798 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,799–8,246 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,247–8,279 | </body></html> |

Counts: **412** top-level functions, **186** top-level vars, **8** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,799_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,801 | `byId` | `function byId(` |
| 1,809 | `byIdMaybe` | `function byIdMaybe(` |
| 1,810 | `put` | `function put(` |
| 1,815 | `elFrom` | `function elFrom(` |

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

_line 1,830_ · 13 declarations

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

### Live data without a render refactor

_line 1,989_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,994 | `merge` | `function merge(` |
| 2,001 | `LIVE` | `function LIVE(` |
| 2,015 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,018_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,020 | `paintReading` | `function paintReading(` |
| 2,037 | `repaintVolatility` | `function repaintVolatility(` |
| 2,041 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,049 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,054 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,058 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,063_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,064 | `READINGS` | `var READINGS =` |
| 2,119 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,120 | `KINDS` | `var KINDS =` |
| 2,121 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,135 | `receive` | `function receive(` |
| 2,151 | `liveAsOf` | `var liveAsOf =` |
| 2,152 | `fmtAsOf` | `function fmtAsOf(` |
| 2,157 | `applyLive` | `function applyLive(` |
| 2,170 | `shapeOk` | `function shapeOk(` |
| 2,177 | `repaintPolicy` | `function repaintPolicy(` |
| 2,183 | `GYN` | `var GYN =` |
| 2,210 | `refreshLiveData` | `function refreshLiveData(` |
| 2,228 | `fetchSiteData` | `function fetchSiteData(` |
| 2,244 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,249_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,250 | `yieldCurve` | `var yieldCurve =` |
| 2,256 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,257 | `curveAsOf` | `function curveAsOf(` |
| 2,262 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,263 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,268 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,270_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,271 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,272 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,273 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,274 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,275 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,277_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,278 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,284 | `uninvLagToday` | `var uninvLagToday =` |
| 2,289 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,295 | `gdpSrc` | `var gdpSrc =` |
| 2,298 | `labPanel` | `var labPanel =` |
| 2,327 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,328_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,335 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,336 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,363_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,364 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,370 | `confidenceWord` | `function confidenceWord(` |

### The deficit, year by year

_line 2,397_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,398 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,399 | `deficitHistory` | `var deficitHistory =` |
| 2,402 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,403 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,405 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,414_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,415 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,424_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,425 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,428 | `timelineSpan` | `function timelineSpan(` |
| 2,433 | `timelineFor` | `function timelineFor(` |
| 2,444 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,450_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,451 | `windowScale` | `function windowScale(` |
| 2,466 | `windowYears` | `function windowYears(` |
| 2,474 | `refName` | `function refName(` |
| 2,478 | `histReadEnsure` | `function histReadEnsure(` |
| 2,498 | `histReadFill` | `function histReadFill(` |
| 2,548 | `histAxisEnds` | `function histAxisEnds(` |
| 2,559 | `histLegend` | `function histLegend(` |
| 2,619 | `refitHistory` | `function refitHistory(` |
| 2,629 | `wireHistHover` | `function wireHistHover(` |
| 2,666 | `mWindowFrom` | `function mWindowFrom(` |
| 2,670 | `qWindowFrom` | `function qWindowFrom(` |
| 2,675 | `DEF_1983` | `var DEF_1983 =` |
| 2,676 | `defFrom` | `function defFrom(` |
| 2,681 | `deficitChart` | `function deficitChart(` |
| 2,749 | `deficitBlock` | `function deficitBlock(` |
| 2,789 | `buffettHistory` | `var buffettHistory =` |
| 2,791 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,792 | `hyDates` | `var hyDates =` |
| 2,793 | `hyOas` | `var hyOas =` |
| 2,794 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,801 | `hyAt` | `function hyAt(` |
| 2,805 | `hyLabel` | `function hyLabel(` |
| 2,806 | `hyNum` | `function hyNum(` |
| 2,807 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,815 | `hyQuarters` | `function hyQuarters(` |
| 2,823 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,825 | `capeHistory` | `var capeHistory =` |
| 2,827 | `longCycleSrc` | `var longCycleSrc =` |
| 2,843 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,857_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,858 | `sentiment` | `var sentiment =` |
| 2,874 | `valuation` | `var valuation =` |
| 2,895 | `valRow` | `function valRow(` |
| 2,900 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,903 | `coincident` | `var coincident =` |
| 2,953 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,959 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,960 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,961 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,963_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,964 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,965 | `m2vHistory` | `var m2vHistory =` |
| 2,981 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,033 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,075_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,076 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,077 | `DOTS` | `var DOTS =` |
| 3,079 | `headPickRow` | `function headPickRow(` |
| 3,085 | `histHead` | `function histHead(` |
| 3,100 | `headNoteIdx` | `var headNoteIdx =` |
| 3,101 | `headMenuHtml` | `function headMenuHtml(` |
| 3,126 | `headMenuFor` | `var headMenuFor =` |
| 3,127 | `headSubFor` | `var headSubFor =` |
| 3,128 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,157 | `histNote` | `function histNote(` |
| 3,158 | `meterFlagged` | `function meterFlagged(` |
| 3,165 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,188 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,202 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,215 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,220 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,224 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,236 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,250 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,264 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,283 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,314 | `desireBlock` | `function desireBlock(` |
| 3,325 | `volumeBlock` | `function volumeBlock(` |
| 3,337 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,349 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,356_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,357 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,358 | `m2Level` | `var m2Level =` |
| 3,379 | `m2Yoy` | `var m2Yoy =` |
| 3,380 | `M2_NORM` | `var M2_NORM =` |
| 3,382 | `volumeVerdict` | `function volumeVerdict(` |
| 3,390 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,391 | `unempHistory` | `var unempHistory =` |
| 3,397 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,406 | `NROU_NOW` | `var NROU_NOW =` |
| 3,407 | `unempState` | `function unempState(` |
| 3,413 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,465_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,466 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,475 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,531 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,532 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,533 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,534_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,536 | `householdsChart` | `function householdsChart(` |
| 3,586 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,639 | `GDP_NORM` | `var GDP_NORM =` |
| 3,640 | `gdpNowQ` | `var gdpNowQ =` |
| 3,641 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,663 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,714 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,759 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,767 | `velocityVerdict` | `function velocityVerdict(` |
| 3,775 | `derivePulseTag` | `function derivePulseTag(` |
| 3,781 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,813_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,814 | `seasonReading` | `var seasonReading =` |
| 3,858 | `frameworkRows` | `var frameworkRows =` |
| 3,868 | `vixRow` | `var vixRow =` |
| 3,869 | `VIX_CALM` | `var VIX_CALM =` |
| 3,870 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,874 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,881_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,882 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,891_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,892 | `calendarTodayY` | `var calendarTodayY =` |
| 3,894 | `vix3mClose` | `var vix3mClose =` |
| 3,895 | `fearCurve` | `function fearCurve(` |
| 3,900 | `curveVerdict` | `function curveVerdict(` |
| 3,905 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,914_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,915 | `modeBar` | `function modeBar(` |
| 3,922 | `pickerOpen` | `var pickerOpen =` |
| 3,923 | `cycleByName` | `function cycleByName(` |
| 3,927 | `openCycle` | `function openCycle(` |
| 3,931 | `cycleSlice` | `function cycleSlice(` |
| 3,939 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,947 | `cycleMonths` | `function cycleMonths(` |
| 3,955 | `histControls` | `function histControls(` |
| 3,964 | `pageCycle` | `function pageCycle(` |
| 3,968 | `cycLabel` | `function cycLabel(` |
| 3,972 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,977 | `cyclePicker` | `function cyclePicker(` |
| 3,996 | `rangeBar` | `function rangeBar(` |
| 4,003 | `trendOf` | `function trendOf(` |
| 4,018 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,022 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 4,033_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,034 | `yearOf` | `function yearOf(` |
| 4,035 | `mean` | `function mean(` |

### The record rows

_line 4,036_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,037 | `headSigma` | `function headSigma(` |
| 4,042 | `atQuarter` | `function atQuarter(` |
| 4,043 | `atMonth` | `function atMonth(` |
| 4,044 | `ordinal` | `function ordinal(` |
| 4,045 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,048_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,049 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,056 | `moreRow` | `function moreRow(` |
| 4,062 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,063 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,069_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,070 | `xLabelOf` | `function xLabelOf(` |
| 4,080 | `fitLine` | `function fitLine(` |
| 4,084 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,102_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,103 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,111 | `vGrid` | `function vGrid(` |
| 4,115 | `COL_FILL` | `var COL_FILL =` |
| 4,116 | `colPath` | `function colPath(` |
| 4,121 | `colWidth` | `function colWidth(` |
| 4,126 | `AXIS` | `var AXIS =` |
| 4,127 | `histFrame` | `function histFrame(` |
| 4,134 | `xLabel` | `function xLabel(` |
| 4,137 | `crossLine` | `function crossLine(` |
| 4,140 | `zeroRule` | `function zeroRule(` |
| 4,143 | `meanRule` | `function meanRule(` |
| 4,144 | `pendingGeom` | `var pendingGeom =` |
| 4,145 | `publishGeom` | `function publishGeom(` |
| 4,146 | `attachHistory` | `function attachHistory(` |
| 4,155 | `histBar` | `function histBar(` |
| 4,158 | `histTip` | `function histTip(` |
| 4,159 | `avgRule` | `function avgRule(` |
| 4,162 | `vhOpen` | `function vhOpen(` |
| 4,163 | `chartAxes` | `function chartAxes(` |
| 4,193 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,228_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,230 | `maxIn` | `function maxIn(` |
| 4,235 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,236 | `PEEK_W` | `var PEEK_W =` |
| 4,237 | `PEEK_H` | `var PEEK_H =` |
| 4,238 | `colPeek` | `function colPeek(` |
| 4,256 | `meterPeek` | `function meterPeek(` |
| 4,273 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,278 | `pressureZone` | `function pressureZone(` |
| 4,284 | `HZN_BACK` | `var HZN_BACK =` |
| 4,285 | `hznLast` | `function hznLast(` |
| 4,286 | `hznBack` | `function hznBack(` |
| 4,287 | `horizonWord` | `function horizonWord(` |
| 4,307 | `HZN_METERS` | `var HZN_METERS =` |
| 4,315 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,336 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,341 | `RISK_RISK` | `var RISK_RISK =` |
| 4,346 | `riskCell` | `function riskCell(` |
| 4,347 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,377 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,402_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,403 | `pulseClipN` | `var pulseClipN =` |
| 4,404 | `beatPath` | `function beatPath(` |
| 4,421 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,435 | `pulsePeek` | `function pulsePeek(` |
| 4,438 | `pulseBlock` | `function pulseBlock(` |
| 4,455 | `CHEV` | `var CHEV =` |
| 4,456 | `peekCard` | `function peekCard(` |
| 4,475 | `dropSvg` | `function dropSvg(` |
| 4,477 | `volumeSvg` | `function volumeSvg(` |
| 4,481 | `gaugeSvg` | `function gaugeSvg(` |
| 4,485 | `diamondSvg` | `function diamondSvg(` |
| 4,489 | `sproutSvg` | `function sproutSvg(` |
| 4,497 | `markSvg` | `function markSvg(` |
| 4,500 | `hormoneSvg` | `function hormoneSvg(` |
| 4,505 | `flameSvg` | `function flameSvg(` |
| 4,508 | `clockSvg` | `function clockSvg(` |
| 4,509 | `gearSvg` | `function gearSvg(` |
| 4,517 | `thermoSvg` | `function thermoSvg(` |
| 4,520 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,522 | `trendUpSvg` | `function trendUpSvg(` |
| 4,524 | `ecgSvg` | `function ecgSvg(` |
| 4,526 | `circulationSvg` | `function circulationSvg(` |
| 4,527 | `weatherSvg` | `function weatherSvg(` |
| 4,535 | `moodSvg` | `function moodSvg(` |
| 4,539 | `boltSvg` | `function boltSvg(` |
| 4,540 | `houseSvg` | `function houseSvg(` |
| 4,543 | `bagSvg` | `function bagSvg(` |
| 4,546 | `sunriseSvg` | `function sunriseSvg(` |
| 4,550 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,558_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,559 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,560 | `dsrHistory` | `var dsrHistory =` |
| 4,561 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,562 | `savHistory` | `var savHistory =` |
| 4,565 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,574 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,575 | `dsrNow` | `var dsrNow =` |
| 4,576 | `savNow` | `var savNow =` |
| 4,577 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,578 | `householdsWord` | `function householdsWord(` |
| 4,585 | `householdsNow` | `var householdsNow =` |
| 4,586 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,603 | `savInfoHtml` | `function savInfoHtml(` |
| 4,621 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,628 | `curveSub` | `var curveSub =` |
| 4,629 | `vixPct` | `function vixPct(` |
| 4,633 | `curveNoteFull` | `var curveNoteFull =` |
| 4,644 | `volatilityRing` | `function volatilityRing(` |
| 4,649 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,650 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,665 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,671 | `marketCycles` | `var marketCycles =` |
| 4,699 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,701_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,702 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,703 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,708_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,709 | `TIMING` | `var TIMING =` |
| 4,715 | `CATEGORIES` | `var CATEGORIES =` |
| 4,721 | `ROSTER` | `var ROSTER =` |
| 4,773 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,774 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,776 | `pageState` | `function pageState(` |
| 4,781 | `pageMode` | `var pageMode =` |
| 4,782 | `pageCycles` | `var pageCycles =` |
| 4,783 | `pageRange` | `var pageRange =` |
| 4,784 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,785 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,786 | `keyed` | `function keyed(` |
| 4,793 | `hyMonths` | `function hyMonths(` |
| 4,796 | `prettyKey` | `function prettyKey(` |
| 4,801 | `lastDate` | `function lastDate(` |
| 4,802 | `compiledDay` | `function compiledDay(` |
| 4,803 | `labPeriod` | `function labPeriod(` |
| 4,804 | `rosterFor` | `function rosterFor(` |
| 4,805 | `rowReadings` | `function rowReadings(` |
| 4,806 | `indOf` | `function indOf(` |
| 4,807 | `peekOf` | `function peekOf(` |
| 4,812 | `cardDate` | `function cardDate(` |
| 4,813 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,834_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,835 | `slopeOf` | `function slopeOf(` |
| 4,840 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,841 | `readSeason` | `function readSeason(` |
| 4,860 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,861 | `qLabel` | `function qLabel(` |
| 4,882 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,884_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,885 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,886 | `seasonTitle` | `function seasonTitle(` |
| 4,887 | `monthLabel` | `function monthLabel(` |
| 4,888 | `cycleReturns` | `function cycleReturns(` |
| 4,898 | `cycleModel` | `function cycleModel(` |
| 4,929 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,937 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,943 | `nowModel` | `var nowModel =` |
| 4,944 | `readingNow` | `var readingNow =` |
| 4,945 | `cpiNow` | `var cpiNow =` |
| 4,946 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,947 | `currentSeason` | `var currentSeason =` |
| 4,948 | `seasonWhy` | `var seasonWhy =` |
| 4,950 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,952_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,953 | `CALM` | `var CALM =` |
| 4,954 | `FEELINGS` | `var FEELINGS =` |
| 4,955 | `FEELING_STATE` | `var FEELING_STATE =` |
| 4,956 | `seasonHalf` | `function seasonHalf(` |
| 4,957 | `rankToDate` | `function rankToDate(` |
| 4,961 | `readFeeling` | `function readFeeling(` |
| 4,972 | `readPosture` | `function readPosture(` |
| 4,980 | `marketCache` | `var marketCache =` |
| 4,981 | `marketMonths` | `function marketMonths(` |
| 5,001 | `seasonInMonth` | `function seasonInMonth(` |
| 5,006 | `stretchRank` | `function stretchRank(` |
| 5,009 | `marketFacts` | `function marketFacts(` |
| 5,020 | `followedCache` | `var followedCache =` |
| 5,021 | `whatFollowed` | `function whatFollowed(` |
| 5,044 | `lastFeeling` | `function lastFeeling(` |
| 5,049 | `diagnoseClose` | `function diagnoseClose(` |
| 5,057 | `diagnoseToday` | `function diagnoseToday(` |
| 5,072 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,083 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,084 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,085 | `spreadLabel` | `function spreadLabel(` |
| 5,089 | `policyFacts` | `function policyFacts(` |
| 5,096 | `policyFactRows` | `function policyFactRows(` |
| 5,102 | `allSources` | `var allSources =` |
| 5,116 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,128_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,129 | `SVG_NS` | `var SVG_NS =` |
| 5,130 | `svgEl` | `function svgEl(` |
| 5,135 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,169_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,170 | `clampPct` | `function clampPct(` |
| 5,173 | `detailTexts` | `var detailTexts =` |
| 5,174 | `detailSlots` | `var detailSlots =` |
| 5,175 | `detailSlot` | `function detailSlot(` |
| 5,185 | `metricSheet` | `function metricSheet(` |
| 5,190 | `ledeHtml` | `function ledeHtml(` |
| 5,191 | `facts` | `function facts(` |
| 5,192 | `factsFrom` | `function factsFrom(` |
| 5,196 | `expandBtn` | `function expandBtn(` |
| 5,200 | `sheetRenderers` | `var sheetRenderers =` |
| 5,201 | `drawsPage` | `function drawsPage(` |
| 5,202 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,231_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,234 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,235_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,236 | `subjectRow` | `function subjectRow(` |
| 5,246 | `subjectIcon` | `function subjectIcon(` |
| 5,247 | `srcHtml` | `function srcHtml(` |
| 5,248 | `timingMark` | `function timingMark(` |
| 5,256 | `timingPill` | `function timingPill(` |
| 5,265 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,273 | `seatPageFoot` | `function seatPageFoot(` |
| 5,285 | `timingMembers` | `var timingMembers =` |
| 5,287 | `registerTiming` | `function registerTiming(` |
| 5,289 | `headHtml` | `function headHtml(` |
| 5,294 | `heldHighlights` | `var heldHighlights =` |
| 5,295 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,322_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,323 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,324 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,332 | `withLatestPoint` | `function withLatestPoint(` |
| 5,337 | `pressureMaturities` | `function pressureMaturities(` |
| 5,361 | `registerFlowPages` | `function registerFlowPages(` |
| 5,415 | `renderPressureRow` | `function renderPressureRow(` |
| 5,423 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,442 | `ylmColumns` | `function ylmColumns(` |
| 5,462 | `ylmFitLine` | `function ylmFitLine(` |
| 5,474 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,615_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,616 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,653_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,654 | `spreadSeries` | `function spreadSeries(` |
| 5,698 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,824_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,825 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,851_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,852 | `drawHznHead` | `function drawHznHead(` |
| 5,866 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,925_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,926 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,934_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,935 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,032_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,033 | `renderVolatility` | `function renderVolatility(` |
| 6,078 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,108_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,109 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,139_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,140 | `totalRiseIn` | `function totalRiseIn(` |
| 6,150 | `eraInflation` | `function eraInflation(` |
| 6,161 | `eraGrowth` | `function eraGrowth(` |
| 6,177 | `fmtSigned` | `function fmtSigned(` |
| 6,178 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,179 | `growthShown` | `function growthShown(` |
| 6,180 | `growthShownCap` | `function growthShownCap(` |
| 6,181 | `phaseClass` | `function phaseClass(` |
| 6,182 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,186 | `cycleViewEl` | `var cycleViewEl =` |
| 6,187 | `shownEra` | `var shownEra =` |
| 6,188 | `calendarReset` | `var calendarReset =` |
| 6,189 | `metricPageReset` | `var metricPageReset =` |
| 6,190 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,191 | `topbarBack` | `var topbarBack =` |
| 6,192 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,199_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,200 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,281_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,282 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,300_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,301 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,322_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,324 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,325 | `hubSet` | `function hubSet(` |
| 6,336 | `quarterPopup` | `function quarterPopup(` |
| 6,359 | `hubShowDefault` | `function hubShowDefault(` |
| 6,367 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,373 | `hubShowYear` | `function hubShowYear(` |
| 6,383 | `renderCycleDial` | `function renderCycleDial(` |
| 6,464 | `m2Step` | `function m2Step(` |
| 6,467 | `heatStep` | `function heatStep(` |
| 6,471 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,482_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,483 | `renderCycleView` | `function renderCycleView(` |
| 6,489 | `shownEraModel` | `var shownEraModel =` |
| 6,490 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,492_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,493 | `stripGroupName` | `var stripGroupName =` |
| 6,494 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,522 | `marketStripHtml` | `function marketStripHtml(` |
| 6,556 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,557 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,586_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,587 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,593 | `debtSvg` | `function debtSvg(` |
| 6,594 | `interestSvg` | `function interestSvg(` |
| 6,596 | `budgetSvg` | `function budgetSvg(` |
| 6,598 | `lede` | `function lede(` |
| 6,599 | `periodOf` | `function periodOf(` |
| 6,600 | `meterWord` | `function meterWord(` |
| 6,601 | `splitPages` | `function splitPages(` |
| 6,617 | `confidencePage` | `function confidencePage(` |
| 6,623 | `productivityPage` | `function productivityPage(` |
| 6,628 | `splitSpec` | `function splitSpec(` |
| 6,634 | `splitInfo` | `function splitInfo(` |
| 6,638 | `periodTicks` | `function periodTicks(` |
| 6,643 | `periodOfSeries` | `function periodOfSeries(` |
| 6,644 | `drawSplit` | `function drawSplit(` |
| 6,661 | `mountSplit` | `function mountSplit(` |
| 6,674 | `splitPeek` | `function splitPeek(` |
| 6,681 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,689 | `deficitPeek` | `function deficitPeek(` |
| 6,693 | `catSheet` | `function catSheet(` |
| 6,698 | `groupId` | `function groupId(` |
| 6,699 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,700 | `seatGroups` | `function seatGroups(` |
| 6,703 | `groupSheet` | `function groupSheet(` |
| 6,713 | `appendPicks` | `function appendPicks(` |
| 6,721 | `doorSel` | `function doorSel(` |
| 6,722 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,734_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,735 | `buffettInsight` | `function buffettInsight(` |
| 6,750 | `debtInsight` | `function debtInsight(` |
| 6,765 | `productivityInsight` | `function productivityInsight(` |
| 6,775 | `confidenceInsight` | `function confidenceInsight(` |
| 6,786 | `interestInsight` | `function interestInsight(` |
| 6,801 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,824 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,844 | `activityStackHtml` | `function activityStackHtml(` |
| 6,854 | `seatTemperature` | `function seatTemperature(` |
| 6,862 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,895_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,896 | `partsOf` | `function partsOf(` |
| 6,905 | `authored` | `function authored(` |
| 6,906 | `registerRoster` | `function registerRoster(` |
| 6,928 | `indRow` | `function indRow(` |
| 6,932 | `IND_ORDER` | `var IND_ORDER =` |
| 6,933 | `indGroupRow` | `function indGroupRow(` |
| 6,938 | `indRows` | `function indRows(` |
| 6,952 | `indCategoryHtml` | `function indCategoryHtml(` |
| 6,960 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 6,962_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,963 | `NAV` | `var NAV =` |
| 6,964 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,058_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,059 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,106_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,107 | `qPretty` | `function qPretty(` |
| 7,108 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,109 | `peekArt` | `function peekArt(` |
| 7,110 | `indPeriod` | `function indPeriod(` |
| 7,114 | `catItem` | `function catItem(` |
| 7,164 | `insightCirculation` | `function insightCirculation(` |
| 7,197 | `insightWeather` | `function insightWeather(` |
| 7,240 | `EMOTION_CURVE` | `var EMOTION_CURVE =` |
| 7,244 | `EMO_PLACE` | `var EMO_PLACE =` |
| 7,245 | `curvePath` | `function curvePath(` |
| 7,253 | `emotionCurveSvg` | `function emotionCurveSvg(` |
| 7,266 | `insightMood` | `function insightMood(` |
| 7,276 | `PAIR_ART` | `var PAIR_ART =` |
| 7,282 | `placeSignPair` | `function placeSignPair(` |
| 7,305 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,321 | `buildCategories` | `function buildCategories(` |
| 7,337 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,375_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,376 | `capeFmt1` | `function capeFmt1(` |
| 7,377 | `actCycleMonths` | `function actCycleMonths(` |
| 7,385 | `householdsHighlights` | `function householdsHighlights(` |
| 7,404 | `redrawSheet` | `function redrawSheet(` |
| 7,408 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,453 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,490 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,537 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,567 | `valuationHighlights` | `function valuationHighlights(` |
| 7,580 | `tempHighlights` | `function tempHighlights(` |
| 7,597 | `gdpHighlights` | `function gdpHighlights(` |
| 7,612 | `renderMetricPages` | `function renderMetricPages(` |
| 7,622 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,632_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,633 | `FEELING_RULES` | `var FEELING_RULES =` |
| 7,642 | `POSTURE_STATE` | `var POSTURE_STATE =` |
| 7,643 | `POSTURE_SAYS` | `var POSTURE_SAYS =` |
| 7,650 | `BODY_SAYS` | `var BODY_SAYS =` |
| 7,658 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,663 | `todayFace` | `function todayFace(` |
| 7,669 | `readDoor` | `function readDoor(` |
| 7,677 | `pct` | `function pct(` |
| 7,678 | `rosterRows` | `function rosterRows(` |
| 7,679 | `eraMove` | `function eraMove(` |
| 7,687 | `analysisFor` | `function analysisFor(` |
| 7,695 | `dxRow` | `function dxRow(` |
| 7,699 | `dxText` | `function dxText(` |
| 7,700 | `dxSection` | `function dxSection(` |
| 7,701 | `systemHtml` | `function systemHtml(` |
| 7,704 | `dxHead` | `function dxHead(` |
| 7,709 | `postureLine` | `function postureLine(` |
| 7,713 | `diagnosisInfo` | `function diagnosisInfo(` |
| 7,721 | `assessmentFor` | `function assessmentFor(` |
| 7,731 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,747 | `SEASON_ORDER` | `var SEASON_ORDER =` |
| 7,748 | `feelingBySeason` | `function feelingBySeason(` |
| 7,755 | `trendBarsSvg` | `function trendBarsSvg(` |
| 7,774 | `trendCardHtml` | `function trendCardHtml(` |
| 7,789 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,793 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,800 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,813_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,814 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,815 | `cycleDataOn` | `function cycleDataOn(` |
| 7,816 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,836 | `wireCycleData` | `function wireCycleData(` |
| 7,851 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,896_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,897 | `eraOpen` | `var eraOpen =` |
| 7,898 | `kT` | `function kT(` |
| 7,902 | `upTo` | `function upTo(` |
| 7,903 | `pairAt` | `function pairAt(` |
| 7,904 | `eraReading` | `function eraReading(` |
| 7,914 | `eraFig` | `function eraFig(` |
| 7,921 | `eraValue` | `function eraValue(` |
| 7,927 | `eraRange` | `function eraRange(` |
| 7,932 | `eraMini` | `function eraMini(` |
| 7,937 | `eraCard` | `function eraCard(` |
| 7,956 | `eraShow` | `function eraShow(` |
| 7,965 | `enterEra` | `function enterEra(` |
| 7,972 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,979_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,980 | `rosterRow` | `function rosterRow(` |
| 7,993 | `__roster` | `var __roster =` |
| 7,994 | `readingRoster` | `function readingRoster(` |
| 8,001 | `withUnit` | `function withUnit(` |
| 8,002 | `pastFigure` | `function pastFigure(` |
| 8,006 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,008_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,009 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,033 | `placeWords` | `function placeWords(` |
| 8,037 | `symptomNote` | `function symptomNote(` |
| 8,044 | `symptomRow` | `function symptomRow(` |
| 8,051 | `cycleTrack` | `function cycleTrack(` |
| 8,066 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,074_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,075 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,124_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,125 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,156_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,157 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **8 compute a value**, 8 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,990–1,993 | `LIVE_CACHE` | Live data without a render refactor |
| 2,330–2,334 | `productivityRecord` | Productivity growth is not in this panel |
| 2,347–2,369 | `productivityReading` | Productivity growth is not in this panel |
| 2,365–2,369 | `confidenceRecord` | Consumer confidence |
| 2,376–4,306 | `confidenceReading` | Consumer confidence |
| 4,293–4,306 | `horizonRead` | A series' highest reading within a span |
| 4,862–4,875 | `seasonTrackAll` | The season, computed |
| 4,877–4,881 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,472 |
| `pressure-range` | 2,056 |
| `sheet-marker-deficit` | 7,469 |
| `sheet-metric-gdp` | 7,433 |
| `sheet-metric-households` | 7,491 |
| `sheet-metric-temp` | 7,409 |
| `sheet-metric-valuation` | 7,511 |
| `sheet-sign-activity` | 7,454 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,476 |
| `desire-range` | 5,397 |
| `fear-range` | 6,041 |
| `hzn-range` | 5,874 |
| `pressure-range` | 5,578 |
| `pulse-range` | 5,365 |
| `sheet-metric-gdp` | 7,434 |
| `sheet-metric-temp` | 7,410 |
| `sheet-metric-valuation` | 7,512 |
| `volume-range` | 5,381 |

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
| 757 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 832 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 905 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,074 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,089 | The symptoms: a cycle's years against today |
| 1,165 | hero: yield curve |
| 1,197 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,216 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,243 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,251 | long cycle (structural layer) |
| 1,258 | indicator grid |
| 1,284 | info icon + popover (progressive disclosure for longer notes) |
| 1,298 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,381 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (105), which is what the renderers fill:

| Line | id |
|---|---|
| 1,397 | `topbar-back` |
| 1,400 | `topbar-title` |
| 1,401 | `menu-btn` |
| 1,415 | `main` |
| 1,418 | `cycle-view` |
| 1,421 | `cycle-kicker` |
| 1,424 | `cycle-dial` |
| 1,426 | `season-wheel-hub-date` |
| 1,427 | `season-wheel-hub-theme` |
| 1,428 | `season-wheel-hub-detail` |
| 1,436 | `today-analysis` |
| 1,437 | `peek-row` |
| 1,438 | `sheet-metric-temp` |
| 1,439 | `temp-timing` |
| 1,440 | `temp-chart` |
| 1,441 | `temp-rangebar` |
| 1,443 | `temp-head` |
| 1,444 | `temp-history` |
| 1,445 | `temp-hist-tooltip` |
| 1,446 | `temp-trend` |
| 1,448 | `temp-highlights` |
| 1,450 | `sheet-metric-gdp` |
| 1,451 | `gdp-timing` |
| 1,452 | `gdp-chart` |
| 1,453 | `gdp-rangebar` |
| 1,455 | `gdp-head` |
| 1,456 | `gdp-history` |
| 1,457 | `gdp-hist-tooltip` |
| 1,458 | `gdp-trend` |
| 1,460 | `gdp-highlights` |
| 1,464 | `sheet-marker-deficit` |
| 1,464 | `deficit-timing` |
| 1,466 | `sheet-metric-households` |
| 1,467 | `households-timing` |
| 1,468 | `households-chart` |
| 1,469 | `households-highlights` |
| 1,472 | `sheet-metric-valuation` |
| 1,473 | `valuation-timing` |
| 1,474 | `valuation-chart` |
| 1,475 | `valuation-highlights` |
| 1,482 | `subj-value-hormones` |
| 1,483 | `subj-say-hormones` |
| 1,489 | `hormones-history` |
| 1,490 | `hormones-insights` |
| 1,499 | `subj-value-horizon` |
| 1,500 | `subj-say-horizon` |
| 1,501 | `subj-spark-horizon` |
| 1,507 | `hzn-timeline` |
| 1,509 | `hzn-head` |
| 1,510 | `spread-history-shell` |
| 1,511 | `spread-history-svg` |
| 1,512 | `spread-history-tooltip` |
| 1,514 | `hzn-trend` |
| 1,516 | `horizon-insights` |
| 1,525 | `subj-value-pressure` |
| 1,526 | `subj-say-pressure` |
| 1,532 | `pressure-timeline` |
| 1,534 | `pressure-head` |
| 1,535 | `ylm-shell` |
| 1,536 | `ylm-svg` |
| 1,537 | `ylm-tooltip` |
| 1,539 | `ylm-trend` |
| 1,541 | `pressure-insights` |
| 1,548 | `subj-ring-sentiment` |
| 1,551 | `subj-value-sentiment` |
| 1,552 | `subj-say-sentiment` |
| 1,553 | `subj-spark-sentiment` |
| 1,559 | `fear-history` |
| 1,560 | `curve-highlights` |
| 1,566 | `signs-list` |
| 1,572 | `calendar-list` |
| 1,579 | `cycle-data` |
| 1,581 | `cycle-legend` |
| 1,582 | `cycle-list` |
| 1,583 | `cycle-more` |
| 1,584 | `cycle-more-label` |
| 1,589 | `calendar-cycle` |
| 1,609 | `search-home` |
| 1,611 | `search-input` |
| 1,613 | `search-list` |
| 1,617 | `more-menu` |
| 1,620 | `menu-back` |
| 1,634 | `sources-open` |
| 1,642 | `appearance-current` |
| 1,648 | `sheet-howto` |
| 1,691 | `sheet-book` |
| 1,722 | `seasons-kicker` |
| 1,724 | `seasons-rows` |
| 1,727 | `framework-kicker` |
| 1,730 | `framework-rows` |
| 1,740 | `sheet-appearance` |
| 1,748 | `theme-toggle` |
| 1,755 | `sheet-contact` |
| 1,764 | `contact-form` |
| 1,765 | `contact-title` |
| 1,766 | `contact-message` |
| 1,768 | `contact-hint` |
| 1,769 | `contact-send` |
| 1,775 | `sheet-sources` |
| 1,778 | `sources-back` |
| 1,783 | `asof-text` |
| 1,784 | `sources-groups` |
| 1,790 | `detail-backdrop` |
| 1,792 | `detail-modal-close` |
| 1,793 | `detail-modal-body` |

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

