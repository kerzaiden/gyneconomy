# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,353 lines**, about 656 KB, roughly **186 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `5a052de` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,392 | the whole stylesheet, every token and rule |
| **Markup** | 1,393–1,798 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,799–8,320 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,321–8,353 | </body></html> |

Counts: **419** top-level functions, **188** top-level vars, **9** top-level IIFEs in the script.

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

_line 4,402_ · 30 declarations

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
| 4,543 | `marketSvg` | `function marketSvg(` |
| 4,546 | `bagSvg` | `function bagSvg(` |
| 4,549 | `sunriseSvg` | `function sunriseSvg(` |
| 4,553 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,561_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,562 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,563 | `dsrHistory` | `var dsrHistory =` |
| 4,564 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,565 | `savHistory` | `var savHistory =` |
| 4,568 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,577 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,578 | `dsrNow` | `var dsrNow =` |
| 4,579 | `savNow` | `var savNow =` |
| 4,580 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,581 | `householdsWord` | `function householdsWord(` |
| 4,588 | `householdsNow` | `var householdsNow =` |
| 4,589 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,606 | `savInfoHtml` | `function savInfoHtml(` |
| 4,624 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,631 | `curveSub` | `var curveSub =` |
| 4,632 | `vixPct` | `function vixPct(` |
| 4,636 | `curveNoteFull` | `var curveNoteFull =` |
| 4,647 | `volatilityRing` | `function volatilityRing(` |
| 4,652 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,653 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,668 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,673_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,674 | `sp500Years` | `var sp500Years =` |
| 4,675 | `marketWord` | `function marketWord(` |
| 4,698 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,708 | `marketCycles` | `var marketCycles =` |
| 4,736 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,738_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,739 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,740 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,745_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,746 | `TIMING` | `var TIMING =` |
| 4,752 | `CATEGORIES` | `var CATEGORIES =` |
| 4,758 | `ROSTER` | `var ROSTER =` |
| 4,812 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,813 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,815 | `pageState` | `function pageState(` |
| 4,820 | `pageMode` | `var pageMode =` |
| 4,821 | `pageCycles` | `var pageCycles =` |
| 4,822 | `pageRange` | `var pageRange =` |
| 4,823 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,824 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,825 | `keyed` | `function keyed(` |
| 4,832 | `hyMonths` | `function hyMonths(` |
| 4,835 | `prettyKey` | `function prettyKey(` |
| 4,840 | `lastDate` | `function lastDate(` |
| 4,841 | `compiledDay` | `function compiledDay(` |
| 4,842 | `labPeriod` | `function labPeriod(` |
| 4,843 | `rosterFor` | `function rosterFor(` |
| 4,844 | `rowReadings` | `function rowReadings(` |
| 4,845 | `indOf` | `function indOf(` |
| 4,846 | `peekOf` | `function peekOf(` |
| 4,851 | `cardDate` | `function cardDate(` |
| 4,852 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,873_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,874 | `slopeOf` | `function slopeOf(` |
| 4,879 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,880 | `readSeason` | `function readSeason(` |
| 4,899 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,900 | `qLabel` | `function qLabel(` |
| 4,921 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,923_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,924 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,925 | `seasonTitle` | `function seasonTitle(` |
| 4,926 | `monthLabel` | `function monthLabel(` |
| 4,927 | `cycleReturns` | `function cycleReturns(` |
| 4,937 | `cycleModel` | `function cycleModel(` |
| 4,968 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,976 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,982 | `nowModel` | `var nowModel =` |
| 4,983 | `readingNow` | `var readingNow =` |
| 4,984 | `cpiNow` | `var cpiNow =` |
| 4,985 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,986 | `currentSeason` | `var currentSeason =` |
| 4,987 | `seasonWhy` | `var seasonWhy =` |
| 4,989 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,991_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,992 | `CALM` | `var CALM =` |
| 4,993 | `FEELINGS` | `var FEELINGS =` |
| 4,994 | `FEELING_STATE` | `var FEELING_STATE =` |
| 4,995 | `seasonHalf` | `function seasonHalf(` |
| 4,996 | `rankToDate` | `function rankToDate(` |
| 5,000 | `readFeeling` | `function readFeeling(` |
| 5,011 | `readPosture` | `function readPosture(` |
| 5,019 | `marketCache` | `var marketCache =` |
| 5,020 | `marketMonths` | `function marketMonths(` |
| 5,040 | `seasonInMonth` | `function seasonInMonth(` |
| 5,045 | `stretchRank` | `function stretchRank(` |
| 5,048 | `marketFacts` | `function marketFacts(` |
| 5,059 | `followedCache` | `var followedCache =` |
| 5,060 | `whatFollowed` | `function whatFollowed(` |
| 5,083 | `lastFeeling` | `function lastFeeling(` |
| 5,088 | `diagnoseClose` | `function diagnoseClose(` |
| 5,096 | `diagnoseToday` | `function diagnoseToday(` |
| 5,111 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,122 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,123 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,124 | `spreadLabel` | `function spreadLabel(` |
| 5,128 | `policyFacts` | `function policyFacts(` |
| 5,135 | `policyFactRows` | `function policyFactRows(` |
| 5,141 | `allSources` | `var allSources =` |
| 5,155 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,167_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,168 | `SVG_NS` | `var SVG_NS =` |
| 5,169 | `svgEl` | `function svgEl(` |
| 5,174 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,208_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,209 | `clampPct` | `function clampPct(` |
| 5,212 | `detailTexts` | `var detailTexts =` |
| 5,213 | `detailSlots` | `var detailSlots =` |
| 5,214 | `detailSlot` | `function detailSlot(` |
| 5,224 | `metricSheet` | `function metricSheet(` |
| 5,229 | `ledeHtml` | `function ledeHtml(` |
| 5,230 | `facts` | `function facts(` |
| 5,231 | `factsFrom` | `function factsFrom(` |
| 5,235 | `expandBtn` | `function expandBtn(` |
| 5,239 | `sheetRenderers` | `var sheetRenderers =` |
| 5,240 | `drawsPage` | `function drawsPage(` |
| 5,241 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,270_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,273 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,274_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,275 | `subjectRow` | `function subjectRow(` |
| 5,285 | `subjectIcon` | `function subjectIcon(` |
| 5,286 | `srcHtml` | `function srcHtml(` |
| 5,287 | `timingMark` | `function timingMark(` |
| 5,295 | `timingPill` | `function timingPill(` |
| 5,304 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,312 | `seatPageFoot` | `function seatPageFoot(` |
| 5,324 | `timingMembers` | `var timingMembers =` |
| 5,326 | `registerTiming` | `function registerTiming(` |
| 5,328 | `headHtml` | `function headHtml(` |
| 5,333 | `heldHighlights` | `var heldHighlights =` |
| 5,334 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,361_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,362 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,363 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,371 | `withLatestPoint` | `function withLatestPoint(` |
| 5,376 | `pressureMaturities` | `function pressureMaturities(` |
| 5,400 | `registerFlowPages` | `function registerFlowPages(` |
| 5,454 | `renderPressureRow` | `function renderPressureRow(` |
| 5,462 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,481 | `ylmColumns` | `function ylmColumns(` |
| 5,501 | `ylmFitLine` | `function ylmFitLine(` |
| 5,513 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,654_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,655 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,692_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,693 | `spreadSeries` | `function spreadSeries(` |
| 5,737 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,863_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,864 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,890_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,891 | `drawHznHead` | `function drawHznHead(` |
| 5,905 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,964_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,965 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,973_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,974 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,071_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,072 | `renderVolatility` | `function renderVolatility(` |
| 6,117 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,147_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,148 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,178_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,179 | `totalRiseIn` | `function totalRiseIn(` |
| 6,189 | `eraInflation` | `function eraInflation(` |
| 6,200 | `eraGrowth` | `function eraGrowth(` |
| 6,216 | `fmtSigned` | `function fmtSigned(` |
| 6,217 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,218 | `growthShown` | `function growthShown(` |
| 6,219 | `growthShownCap` | `function growthShownCap(` |
| 6,220 | `phaseClass` | `function phaseClass(` |
| 6,221 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,225 | `cycleViewEl` | `var cycleViewEl =` |
| 6,226 | `shownEra` | `var shownEra =` |
| 6,227 | `calendarReset` | `var calendarReset =` |
| 6,228 | `metricPageReset` | `var metricPageReset =` |
| 6,229 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,230 | `topbarBack` | `var topbarBack =` |
| 6,231 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,238_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,239 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,320_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,321 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,339_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,340 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,361_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,363 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,364 | `hubSet` | `function hubSet(` |
| 6,375 | `quarterPopup` | `function quarterPopup(` |
| 6,398 | `hubShowDefault` | `function hubShowDefault(` |
| 6,407 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,413 | `hubShowYear` | `function hubShowYear(` |
| 6,423 | `renderCycleDial` | `function renderCycleDial(` |
| 6,504 | `m2Step` | `function m2Step(` |
| 6,507 | `heatStep` | `function heatStep(` |
| 6,511 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,522_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,523 | `renderCycleView` | `function renderCycleView(` |
| 6,529 | `shownEraModel` | `var shownEraModel =` |
| 6,530 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,532_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,533 | `stripGroupName` | `var stripGroupName =` |
| 6,534 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,562 | `marketStripHtml` | `function marketStripHtml(` |
| 6,596 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,597 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,626_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,627 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,633 | `debtSvg` | `function debtSvg(` |
| 6,634 | `interestSvg` | `function interestSvg(` |
| 6,636 | `budgetSvg` | `function budgetSvg(` |
| 6,638 | `lede` | `function lede(` |
| 6,639 | `periodOf` | `function periodOf(` |
| 6,640 | `meterWord` | `function meterWord(` |
| 6,641 | `splitPages` | `function splitPages(` |
| 6,658 | `confidencePage` | `function confidencePage(` |
| 6,664 | `marketPage` | `function marketPage(` |
| 6,670 | `productivityPage` | `function productivityPage(` |
| 6,675 | `splitSpec` | `function splitSpec(` |
| 6,681 | `splitInfo` | `function splitInfo(` |
| 6,685 | `periodTicks` | `function periodTicks(` |
| 6,690 | `periodOfSeries` | `function periodOfSeries(` |
| 6,691 | `drawSplit` | `function drawSplit(` |
| 6,708 | `mountSplit` | `function mountSplit(` |
| 6,721 | `splitPeek` | `function splitPeek(` |
| 6,728 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,736 | `deficitPeek` | `function deficitPeek(` |
| 6,740 | `catSheet` | `function catSheet(` |
| 6,745 | `groupId` | `function groupId(` |
| 6,746 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,747 | `seatGroups` | `function seatGroups(` |
| 6,750 | `groupSheet` | `function groupSheet(` |
| 6,760 | `appendPicks` | `function appendPicks(` |
| 6,768 | `doorSel` | `function doorSel(` |
| 6,769 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,781_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,782 | `buffettInsight` | `function buffettInsight(` |
| 6,797 | `debtInsight` | `function debtInsight(` |
| 6,812 | `productivityInsight` | `function productivityInsight(` |
| 6,822 | `confidenceInsight` | `function confidenceInsight(` |
| 6,833 | `ORDINAL` | `var ORDINAL =` |
| 6,834 | `marketInsight` | `function marketInsight(` |
| 6,846 | `interestInsight` | `function interestInsight(` |
| 6,861 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,884 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,904 | `activityStackHtml` | `function activityStackHtml(` |
| 6,914 | `seatTemperature` | `function seatTemperature(` |
| 6,922 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,955_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,956 | `partsOf` | `function partsOf(` |
| 6,965 | `authored` | `function authored(` |
| 6,966 | `registerRoster` | `function registerRoster(` |
| 6,988 | `indRow` | `function indRow(` |
| 6,992 | `IND_ORDER` | `var IND_ORDER =` |
| 6,993 | `indGroupRow` | `function indGroupRow(` |
| 6,998 | `indRows` | `function indRows(` |
| 7,012 | `indCategoryHtml` | `function indCategoryHtml(` |
| 7,020 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 7,022_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,023 | `NAV` | `var NAV =` |
| 7,024 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,118_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,119 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,166_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,167 | `qPretty` | `function qPretty(` |
| 7,168 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,169 | `peekArt` | `function peekArt(` |
| 7,170 | `indPeriod` | `function indPeriod(` |
| 7,174 | `catItem` | `function catItem(` |
| 7,224 | `insightCirculation` | `function insightCirculation(` |
| 7,257 | `insightWeather` | `function insightWeather(` |
| 7,297 | `seasonCards` | `function seasonCards(` |
| 7,303 | `marketCycleCard` | `function marketCycleCard(` |
| 7,315 | `EMOTION_CURVE` | `var EMOTION_CURVE =` |
| 7,319 | `EMO_PLACE` | `var EMO_PLACE =` |
| 7,320 | `curvePath` | `function curvePath(` |
| 7,328 | `emotionCurveSvg` | `function emotionCurveSvg(` |
| 7,341 | `insightMood` | `function insightMood(` |
| 7,351 | `PAIR_ART` | `var PAIR_ART =` |
| 7,357 | `placeSignPair` | `function placeSignPair(` |
| 7,380 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,396 | `buildCategories` | `function buildCategories(` |
| 7,412 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,450_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,451 | `capeFmt1` | `function capeFmt1(` |
| 7,452 | `actCycleMonths` | `function actCycleMonths(` |
| 7,460 | `householdsHighlights` | `function householdsHighlights(` |
| 7,479 | `redrawSheet` | `function redrawSheet(` |
| 7,483 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,528 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,565 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,612 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,642 | `valuationHighlights` | `function valuationHighlights(` |
| 7,655 | `tempHighlights` | `function tempHighlights(` |
| 7,672 | `gdpHighlights` | `function gdpHighlights(` |
| 7,687 | `renderMetricPages` | `function renderMetricPages(` |
| 7,697 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,707_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,708 | `FEELING_RULES` | `var FEELING_RULES =` |
| 7,717 | `POSTURE_STATE` | `var POSTURE_STATE =` |
| 7,718 | `POSTURE_SAYS` | `var POSTURE_SAYS =` |
| 7,725 | `BODY_SAYS` | `var BODY_SAYS =` |
| 7,733 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,738 | `todayFace` | `function todayFace(` |
| 7,744 | `readDoor` | `function readDoor(` |
| 7,752 | `pct` | `function pct(` |
| 7,753 | `rosterRows` | `function rosterRows(` |
| 7,754 | `eraMove` | `function eraMove(` |
| 7,762 | `analysisFor` | `function analysisFor(` |
| 7,769 | `dxRow` | `function dxRow(` |
| 7,773 | `dxText` | `function dxText(` |
| 7,774 | `dxSection` | `function dxSection(` |
| 7,775 | `systemHtml` | `function systemHtml(` |
| 7,778 | `dxHead` | `function dxHead(` |
| 7,783 | `postureLine` | `function postureLine(` |
| 7,787 | `diagnosisInfo` | `function diagnosisInfo(` |
| 7,795 | `assessmentFor` | `function assessmentFor(` |
| 7,805 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,821 | `SEASON_ORDER` | `var SEASON_ORDER =` |
| 7,822 | `feelingBySeason` | `function feelingBySeason(` |
| 7,829 | `trendBarsSvg` | `function trendBarsSvg(` |
| 7,848 | `trendCardHtml` | `function trendCardHtml(` |
| 7,863 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,867 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,874 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,887_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,888 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,889 | `cycleDataOn` | `function cycleDataOn(` |
| 7,890 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,910 | `wireCycleData` | `function wireCycleData(` |
| 7,925 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,970_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,971 | `eraOpen` | `var eraOpen =` |
| 7,972 | `kT` | `function kT(` |
| 7,976 | `upTo` | `function upTo(` |
| 7,977 | `pairAt` | `function pairAt(` |
| 7,978 | `eraReading` | `function eraReading(` |
| 7,988 | `eraFig` | `function eraFig(` |
| 7,995 | `eraValue` | `function eraValue(` |
| 8,001 | `eraRange` | `function eraRange(` |
| 8,006 | `eraMini` | `function eraMini(` |
| 8,011 | `eraCard` | `function eraCard(` |
| 8,030 | `eraShow` | `function eraShow(` |
| 8,039 | `enterEra` | `function enterEra(` |
| 8,046 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,053_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,054 | `rosterRow` | `function rosterRow(` |
| 8,067 | `__roster` | `var __roster =` |
| 8,068 | `readingRoster` | `function readingRoster(` |
| 8,075 | `withUnit` | `function withUnit(` |
| 8,076 | `pastFigure` | `function pastFigure(` |
| 8,080 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,082_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,083 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,107 | `placeWords` | `function placeWords(` |
| 8,111 | `symptomNote` | `function symptomNote(` |
| 8,118 | `symptomRow` | `function symptomRow(` |
| 8,125 | `cycleTrack` | `function cycleTrack(` |
| 8,140 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,148_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,149 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,198_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,199 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,230_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,231 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **9 compute a value**, 9 in all. They run in source
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
| 4,679–4,914 | `marketReading` | The S&P 500, year by year |
| 4,901–4,914 | `seasonTrackAll` | The season, computed |
| 4,916–4,920 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,547 |
| `pressure-range` | 2,056 |
| `sheet-marker-deficit` | 7,544 |
| `sheet-metric-gdp` | 7,508 |
| `sheet-metric-households` | 7,566 |
| `sheet-metric-temp` | 7,484 |
| `sheet-metric-valuation` | 7,586 |
| `sheet-sign-activity` | 7,529 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,551 |
| `desire-range` | 5,436 |
| `fear-range` | 6,080 |
| `hzn-range` | 5,913 |
| `pressure-range` | 5,617 |
| `pulse-range` | 5,404 |
| `sheet-metric-gdp` | 7,509 |
| `sheet-metric-temp` | 7,485 |
| `sheet-metric-valuation` | 7,587 |
| `volume-range` | 5,420 |

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

