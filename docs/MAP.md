# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,353 lines**, about 656 KB, roughly **186 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `8c7ee1c` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,385 | the whole stylesheet, every token and rule |
| **Markup** | 1,386–1,791 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,792–8,320 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,321–8,353 | </body></html> |

Counts: **435** top-level functions, **189** top-level vars, **9** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,792_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,794 | `byId` | `function byId(` |
| 1,802 | `byIdMaybe` | `function byIdMaybe(` |
| 1,803 | `put` | `function put(` |
| 1,808 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,810_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,811 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,812 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,813 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,814 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,818 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,823_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,824 | `wheelMeta` | `var wheelMeta =` |
| 1,832 | `seasonOverride` | `var seasonOverride =` |
| 1,833 | `cycleNowNote` | `var cycleNowNote =` |
| 1,835 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,913 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,955 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,956 | `volatilityHistory` | `var volatilityHistory =` |
| 1,958 | `fiscalHistory` | `var fiscalHistory =` |
| 1,964 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,966 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,976 | `productivityHistory` | `var productivityHistory =` |
| 1,978 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |
| 1,980 | `confidenceHistory` | `var confidenceHistory =` |

### Live data without a render refactor

_line 1,982_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,987 | `merge` | `function merge(` |
| 1,994 | `LIVE` | `function LIVE(` |
| 2,008 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,011_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,013 | `paintReading` | `function paintReading(` |
| 2,030 | `repaintVolatility` | `function repaintVolatility(` |
| 2,034 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,042 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,047 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,051 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,056_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,057 | `READINGS` | `var READINGS =` |
| 2,112 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,113 | `KINDS` | `var KINDS =` |
| 2,114 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,128 | `receive` | `function receive(` |
| 2,144 | `liveAsOf` | `var liveAsOf =` |
| 2,145 | `fmtAsOf` | `function fmtAsOf(` |
| 2,150 | `applyLive` | `function applyLive(` |
| 2,163 | `shapeOk` | `function shapeOk(` |
| 2,170 | `repaintPolicy` | `function repaintPolicy(` |
| 2,176 | `GYN` | `var GYN =` |
| 2,203 | `refreshLiveData` | `function refreshLiveData(` |
| 2,221 | `fetchSiteData` | `function fetchSiteData(` |
| 2,237 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,242_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,243 | `yieldCurve` | `var yieldCurve =` |
| 2,249 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,250 | `curveAsOf` | `function curveAsOf(` |
| 2,255 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,256 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,261 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,263_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,264 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,265 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,266 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,267 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,268 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,270_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,271 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,277 | `uninvLagToday` | `var uninvLagToday =` |
| 2,282 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,288 | `gdpSrc` | `var gdpSrc =` |
| 2,291 | `labPanel` | `var labPanel =` |
| 2,320 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,321_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,328 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,329 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,356_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,357 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,363 | `confidenceWord` | `function confidenceWord(` |

### The deficit, year by year

_line 2,390_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,391 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,392 | `deficitHistory` | `var deficitHistory =` |
| 2,395 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,396 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,398 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,407_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,408 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,417_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,418 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,421 | `timelineSpan` | `function timelineSpan(` |
| 2,426 | `timelineFor` | `function timelineFor(` |
| 2,437 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,443_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,444 | `windowScale` | `function windowScale(` |
| 2,459 | `windowYears` | `function windowYears(` |
| 2,467 | `refName` | `function refName(` |
| 2,471 | `histReadEnsure` | `function histReadEnsure(` |
| 2,491 | `histReadFill` | `function histReadFill(` |
| 2,541 | `histAxisEnds` | `function histAxisEnds(` |
| 2,552 | `histLegend` | `function histLegend(` |
| 2,612 | `refitHistory` | `function refitHistory(` |
| 2,622 | `wireHistHover` | `function wireHistHover(` |
| 2,659 | `mWindowFrom` | `function mWindowFrom(` |
| 2,663 | `qWindowFrom` | `function qWindowFrom(` |
| 2,668 | `DEF_1983` | `var DEF_1983 =` |
| 2,669 | `defFrom` | `function defFrom(` |
| 2,674 | `deficitChart` | `function deficitChart(` |
| 2,742 | `deficitBlock` | `function deficitBlock(` |
| 2,782 | `buffettHistory` | `var buffettHistory =` |
| 2,784 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,785 | `hyDates` | `var hyDates =` |
| 2,786 | `hyOas` | `var hyOas =` |
| 2,787 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,794 | `hyAt` | `function hyAt(` |
| 2,798 | `hyLabel` | `function hyLabel(` |
| 2,799 | `hyNum` | `function hyNum(` |
| 2,800 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,808 | `hyQuarters` | `function hyQuarters(` |
| 2,816 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,818 | `capeHistory` | `var capeHistory =` |
| 2,820 | `longCycleSrc` | `var longCycleSrc =` |
| 2,836 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,850_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,851 | `sentiment` | `var sentiment =` |
| 2,867 | `valuation` | `var valuation =` |
| 2,888 | `valRow` | `function valRow(` |
| 2,893 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,896 | `coincident` | `var coincident =` |
| 2,946 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,952 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,953 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,954 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,956_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,957 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,958 | `m2vHistory` | `var m2vHistory =` |
| 2,974 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,026 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,068_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,069 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,070 | `DOTS` | `var DOTS =` |
| 3,072 | `headPickRow` | `function headPickRow(` |
| 3,078 | `histHead` | `function histHead(` |
| 3,093 | `headNoteIdx` | `var headNoteIdx =` |
| 3,094 | `headMenuHtml` | `function headMenuHtml(` |
| 3,119 | `headMenuFor` | `var headMenuFor =` |
| 3,120 | `headSubFor` | `var headSubFor =` |
| 3,121 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,150 | `histNote` | `function histNote(` |
| 3,151 | `meterFlagged` | `function meterFlagged(` |
| 3,158 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,181 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,195 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,208 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,213 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,217 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,229 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,243 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,257 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,276 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,307 | `desireBlock` | `function desireBlock(` |
| 3,318 | `volumeBlock` | `function volumeBlock(` |
| 3,330 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,342 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,349_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,350 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,351 | `m2Level` | `var m2Level =` |
| 3,372 | `m2Yoy` | `var m2Yoy =` |
| 3,373 | `M2_NORM` | `var M2_NORM =` |
| 3,375 | `volumeVerdict` | `function volumeVerdict(` |
| 3,383 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,384 | `unempHistory` | `var unempHistory =` |
| 3,390 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,399 | `NROU_NOW` | `var NROU_NOW =` |
| 3,400 | `unempState` | `function unempState(` |
| 3,406 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,458_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,459 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,468 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,524 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,525 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,526 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,527_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,529 | `householdsChart` | `function householdsChart(` |
| 3,579 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,632 | `GDP_NORM` | `var GDP_NORM =` |
| 3,633 | `gdpNowQ` | `var gdpNowQ =` |
| 3,634 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,656 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,707 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,752 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,760 | `velocityVerdict` | `function velocityVerdict(` |
| 3,768 | `derivePulseTag` | `function derivePulseTag(` |
| 3,774 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,806_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,807 | `seasonReading` | `var seasonReading =` |
| 3,851 | `frameworkRows` | `var frameworkRows =` |
| 3,861 | `vixRow` | `var vixRow =` |
| 3,862 | `VIX_CALM` | `var VIX_CALM =` |
| 3,863 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,867 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,874_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,875 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,884_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,885 | `calendarTodayY` | `var calendarTodayY =` |
| 3,887 | `vix3mClose` | `var vix3mClose =` |
| 3,888 | `fearCurve` | `function fearCurve(` |
| 3,893 | `curveVerdict` | `function curveVerdict(` |
| 3,898 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,907_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,908 | `modeBar` | `function modeBar(` |
| 3,915 | `pickerOpen` | `var pickerOpen =` |
| 3,916 | `cycleByName` | `function cycleByName(` |
| 3,920 | `openCycle` | `function openCycle(` |
| 3,924 | `cycleSlice` | `function cycleSlice(` |
| 3,932 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,940 | `cycleMonths` | `function cycleMonths(` |
| 3,948 | `histControls` | `function histControls(` |
| 3,957 | `pageCycle` | `function pageCycle(` |
| 3,961 | `cycLabel` | `function cycLabel(` |
| 3,965 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,970 | `cyclePicker` | `function cyclePicker(` |
| 3,989 | `rangeBar` | `function rangeBar(` |
| 3,996 | `trendOf` | `function trendOf(` |
| 4,011 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,015 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 4,026_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,027 | `yearOf` | `function yearOf(` |
| 4,028 | `mean` | `function mean(` |

### The record rows

_line 4,029_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,030 | `headSigma` | `function headSigma(` |
| 4,035 | `atQuarter` | `function atQuarter(` |
| 4,036 | `atMonth` | `function atMonth(` |
| 4,037 | `ordinal` | `function ordinal(` |
| 4,038 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,041_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,042 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,049 | `moreRow` | `function moreRow(` |
| 4,055 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,056 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,062_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,063 | `xLabelOf` | `function xLabelOf(` |
| 4,073 | `fitLine` | `function fitLine(` |
| 4,077 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,095_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,096 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,104 | `vGrid` | `function vGrid(` |
| 4,108 | `COL_FILL` | `var COL_FILL =` |
| 4,109 | `colPath` | `function colPath(` |
| 4,114 | `colWidth` | `function colWidth(` |
| 4,119 | `AXIS` | `var AXIS =` |
| 4,120 | `histFrame` | `function histFrame(` |
| 4,127 | `xLabel` | `function xLabel(` |
| 4,130 | `crossLine` | `function crossLine(` |
| 4,133 | `zeroRule` | `function zeroRule(` |
| 4,136 | `meanRule` | `function meanRule(` |
| 4,137 | `pendingGeom` | `var pendingGeom =` |
| 4,138 | `publishGeom` | `function publishGeom(` |
| 4,139 | `attachHistory` | `function attachHistory(` |
| 4,148 | `histBar` | `function histBar(` |
| 4,151 | `histTip` | `function histTip(` |
| 4,152 | `avgRule` | `function avgRule(` |
| 4,155 | `vhOpen` | `function vhOpen(` |
| 4,156 | `chartAxes` | `function chartAxes(` |
| 4,186 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,221_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,223 | `maxIn` | `function maxIn(` |
| 4,228 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,229 | `PEEK_W` | `var PEEK_W =` |
| 4,230 | `PEEK_H` | `var PEEK_H =` |
| 4,231 | `colPeek` | `function colPeek(` |
| 4,249 | `meterPeek` | `function meterPeek(` |
| 4,266 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,271 | `pressureZone` | `function pressureZone(` |
| 4,277 | `HZN_BACK` | `var HZN_BACK =` |
| 4,278 | `hznLast` | `function hznLast(` |
| 4,279 | `hznBack` | `function hznBack(` |
| 4,280 | `horizonWord` | `function horizonWord(` |
| 4,300 | `HZN_METERS` | `var HZN_METERS =` |
| 4,308 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,329 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,334 | `RISK_RISK` | `var RISK_RISK =` |
| 4,339 | `riskCell` | `function riskCell(` |
| 4,340 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,370 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,395_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,396 | `pulseClipN` | `var pulseClipN =` |
| 4,397 | `beatPath` | `function beatPath(` |
| 4,414 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,428 | `pulsePeek` | `function pulsePeek(` |
| 4,431 | `pulseBlock` | `function pulseBlock(` |
| 4,448 | `CHEV` | `var CHEV =` |
| 4,449 | `peekCard` | `function peekCard(` |
| 4,468 | `dropSvg` | `function dropSvg(` |
| 4,470 | `volumeSvg` | `function volumeSvg(` |
| 4,474 | `gaugeSvg` | `function gaugeSvg(` |
| 4,478 | `diamondSvg` | `function diamondSvg(` |
| 4,482 | `sproutSvg` | `function sproutSvg(` |
| 4,490 | `markSvg` | `function markSvg(` |
| 4,493 | `hormoneSvg` | `function hormoneSvg(` |
| 4,498 | `flameSvg` | `function flameSvg(` |
| 4,501 | `clockSvg` | `function clockSvg(` |
| 4,502 | `gearSvg` | `function gearSvg(` |
| 4,510 | `thermoSvg` | `function thermoSvg(` |
| 4,513 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,515 | `trendUpSvg` | `function trendUpSvg(` |
| 4,517 | `ecgSvg` | `function ecgSvg(` |
| 4,519 | `circulationSvg` | `function circulationSvg(` |
| 4,520 | `weatherSvg` | `function weatherSvg(` |
| 4,528 | `moodSvg` | `function moodSvg(` |
| 4,532 | `boltSvg` | `function boltSvg(` |
| 4,533 | `houseSvg` | `function houseSvg(` |
| 4,536 | `marketSvg` | `function marketSvg(` |
| 4,539 | `bagSvg` | `function bagSvg(` |
| 4,542 | `sunriseSvg` | `function sunriseSvg(` |
| 4,546 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,554_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,555 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,556 | `dsrHistory` | `var dsrHistory =` |
| 4,557 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,558 | `savHistory` | `var savHistory =` |
| 4,561 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,570 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,571 | `dsrNow` | `var dsrNow =` |
| 4,572 | `savNow` | `var savNow =` |
| 4,573 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,574 | `householdsWord` | `function householdsWord(` |
| 4,581 | `householdsNow` | `var householdsNow =` |
| 4,582 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,599 | `savInfoHtml` | `function savInfoHtml(` |
| 4,617 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,624 | `curveSub` | `var curveSub =` |
| 4,625 | `vixPct` | `function vixPct(` |
| 4,629 | `curveNoteFull` | `var curveNoteFull =` |
| 4,640 | `volatilityRing` | `function volatilityRing(` |
| 4,645 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,646 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,661 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,666_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,667 | `sp500Years` | `var sp500Years =` |
| 4,668 | `marketWord` | `function marketWord(` |
| 4,691 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,701 | `marketCycles` | `var marketCycles =` |
| 4,729 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,731_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,732 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,733 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,738_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,739 | `TIMING` | `var TIMING =` |
| 4,745 | `CATEGORIES` | `var CATEGORIES =` |
| 4,751 | `ROSTER` | `var ROSTER =` |
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

_line 4,866_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,867 | `slopeOf` | `function slopeOf(` |
| 4,872 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,873 | `readSeason` | `function readSeason(` |
| 4,892 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,893 | `qLabel` | `function qLabel(` |
| 4,914 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,916_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,917 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,918 | `seasonTitle` | `function seasonTitle(` |
| 4,919 | `monthLabel` | `function monthLabel(` |
| 4,920 | `cycleReturns` | `function cycleReturns(` |
| 4,930 | `cycleModel` | `function cycleModel(` |
| 4,961 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,969 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,975 | `nowModel` | `var nowModel =` |
| 4,976 | `readingNow` | `var readingNow =` |
| 4,977 | `cpiNow` | `var cpiNow =` |
| 4,978 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,979 | `currentSeason` | `var currentSeason =` |
| 4,980 | `seasonWhy` | `var seasonWhy =` |
| 4,982 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,984_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,985 | `rankToDate` | `function rankToDate(` |
| 4,989 | `marketCache` | `var marketCache =` |
| 4,990 | `marketMonths` | `function marketMonths(` |
| 4,998 | `seasonInMonth` | `function seasonInMonth(` |
| 5,003 | `yearAfter` | `function yearAfter(` |
| 5,007 | `trackCache` | `var trackCache =` |
| 5,008 | `feelingTrack` | `function feelingTrack(` |
| 5,016 | `explained` | `function explained(` |
| 5,022 | `slid` | `function slid(` |
| 5,023 | `monthsApart` | `function monthsApart(` |
| 5,024 | `feelingSpells` | `function feelingSpells(` |
| 5,035 | `spellRecord` | `function spellRecord(` |
| 5,041 | `diagnoseClose` | `function diagnoseClose(` |
| 5,045 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 5,050_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,051 | `rankIn` | `function rankIn(` |
| 5,056 | `moodLists` | `var moodLists =` |
| 5,057 | `moodSeries` | `function moodSeries(` |
| 5,065 | `moodAt` | `function moodAt(` |
| 5,071 | `MOOD_TURN` | `var MOOD_TURN =` |
| 5,072 | `MOOD_RISING` | `var MOOD_RISING =` |
| 5,073 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 5,074 | `moodWord` | `function moodWord(` |
| 5,078 | `moodRead` | `function moodRead(` |
| 5,085 | `moodCache` | `var moodCache =` |
| 5,086 | `moodTrack` | `function moodTrack(` |
| 5,092 | `moodToday` | `function moodToday(` |
| 5,097 | `emoCache` | `var emoCache =` |
| 5,098 | `emotionSeason` | `function emotionSeason(` |
| 5,116 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,127 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,128 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,129 | `spreadLabel` | `function spreadLabel(` |
| 5,133 | `policyFacts` | `function policyFacts(` |
| 5,140 | `policyFactRows` | `function policyFactRows(` |
| 5,146 | `allSources` | `var allSources =` |
| 5,160 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,172_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,173 | `SVG_NS` | `var SVG_NS =` |
| 5,174 | `svgEl` | `function svgEl(` |
| 5,179 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,213_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,214 | `clampPct` | `function clampPct(` |
| 5,217 | `detailTexts` | `var detailTexts =` |
| 5,218 | `detailSlots` | `var detailSlots =` |
| 5,219 | `detailSlot` | `function detailSlot(` |
| 5,229 | `metricSheet` | `function metricSheet(` |
| 5,234 | `ledeHtml` | `function ledeHtml(` |
| 5,235 | `facts` | `function facts(` |
| 5,236 | `factsFrom` | `function factsFrom(` |
| 5,240 | `expandBtn` | `function expandBtn(` |
| 5,244 | `sheetRenderers` | `var sheetRenderers =` |
| 5,245 | `drawsPage` | `function drawsPage(` |
| 5,246 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,275_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,278 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,279_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,280 | `subjectRow` | `function subjectRow(` |
| 5,290 | `subjectIcon` | `function subjectIcon(` |
| 5,291 | `srcHtml` | `function srcHtml(` |
| 5,292 | `timingMark` | `function timingMark(` |
| 5,300 | `timingPill` | `function timingPill(` |
| 5,309 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,317 | `seatPageFoot` | `function seatPageFoot(` |
| 5,329 | `timingMembers` | `var timingMembers =` |
| 5,331 | `registerTiming` | `function registerTiming(` |
| 5,333 | `headHtml` | `function headHtml(` |
| 5,338 | `heldHighlights` | `var heldHighlights =` |
| 5,339 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,366_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,367 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,368 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,376 | `withLatestPoint` | `function withLatestPoint(` |
| 5,381 | `pressureMaturities` | `function pressureMaturities(` |
| 5,405 | `registerFlowPages` | `function registerFlowPages(` |
| 5,459 | `renderPressureRow` | `function renderPressureRow(` |
| 5,467 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,486 | `ylmColumns` | `function ylmColumns(` |
| 5,506 | `ylmFitLine` | `function ylmFitLine(` |
| 5,518 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,659_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,660 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,697_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,698 | `spreadSeries` | `function spreadSeries(` |
| 5,742 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,868_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,869 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,895_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,896 | `drawHznHead` | `function drawHznHead(` |
| 5,910 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,969_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,970 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,978_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,979 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,076_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,077 | `renderVolatility` | `function renderVolatility(` |
| 6,122 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,152_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,153 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,183_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,184 | `totalRiseIn` | `function totalRiseIn(` |
| 6,194 | `eraInflation` | `function eraInflation(` |
| 6,205 | `eraGrowth` | `function eraGrowth(` |
| 6,221 | `fmtSigned` | `function fmtSigned(` |
| 6,222 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,223 | `growthShown` | `function growthShown(` |
| 6,224 | `growthShownCap` | `function growthShownCap(` |
| 6,225 | `phaseClass` | `function phaseClass(` |
| 6,226 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,230 | `cycleViewEl` | `var cycleViewEl =` |
| 6,231 | `shownEra` | `var shownEra =` |
| 6,232 | `calendarReset` | `var calendarReset =` |
| 6,233 | `metricPageReset` | `var metricPageReset =` |
| 6,234 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,235 | `topbarBack` | `var topbarBack =` |
| 6,236 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,243_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,244 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,325_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,326 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,344_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,345 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,366_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,368 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,369 | `hubSet` | `function hubSet(` |
| 6,380 | `quarterPopup` | `function quarterPopup(` |
| 6,403 | `hubShowDefault` | `function hubShowDefault(` |
| 6,412 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,418 | `hubShowYear` | `function hubShowYear(` |
| 6,428 | `renderCycleDial` | `function renderCycleDial(` |
| 6,509 | `m2Step` | `function m2Step(` |
| 6,512 | `heatStep` | `function heatStep(` |
| 6,516 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,527_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,528 | `renderCycleView` | `function renderCycleView(` |
| 6,534 | `shownEraModel` | `var shownEraModel =` |
| 6,535 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,537_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,538 | `stripGroupName` | `var stripGroupName =` |
| 6,539 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,567 | `marketStripHtml` | `function marketStripHtml(` |
| 6,601 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,602 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,631_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,632 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,638 | `debtSvg` | `function debtSvg(` |
| 6,639 | `interestSvg` | `function interestSvg(` |
| 6,641 | `budgetSvg` | `function budgetSvg(` |
| 6,643 | `lede` | `function lede(` |
| 6,644 | `periodOf` | `function periodOf(` |
| 6,645 | `meterWord` | `function meterWord(` |
| 6,646 | `splitPages` | `function splitPages(` |
| 6,663 | `confidencePage` | `function confidencePage(` |
| 6,669 | `marketPage` | `function marketPage(` |
| 6,675 | `productivityPage` | `function productivityPage(` |
| 6,680 | `splitSpec` | `function splitSpec(` |
| 6,686 | `splitInfo` | `function splitInfo(` |
| 6,690 | `periodTicks` | `function periodTicks(` |
| 6,695 | `periodOfSeries` | `function periodOfSeries(` |
| 6,696 | `drawSplit` | `function drawSplit(` |
| 6,713 | `mountSplit` | `function mountSplit(` |
| 6,726 | `splitPeek` | `function splitPeek(` |
| 6,733 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,741 | `deficitPeek` | `function deficitPeek(` |
| 6,745 | `catSheet` | `function catSheet(` |
| 6,750 | `groupId` | `function groupId(` |
| 6,751 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,752 | `seatGroups` | `function seatGroups(` |
| 6,755 | `groupSheet` | `function groupSheet(` |
| 6,765 | `appendPicks` | `function appendPicks(` |
| 6,773 | `doorSel` | `function doorSel(` |
| 6,774 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,786_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,787 | `buffettInsight` | `function buffettInsight(` |
| 6,802 | `debtInsight` | `function debtInsight(` |
| 6,817 | `productivityInsight` | `function productivityInsight(` |
| 6,827 | `confidenceInsight` | `function confidenceInsight(` |
| 6,838 | `ORDINAL` | `var ORDINAL =` |
| 6,839 | `marketInsight` | `function marketInsight(` |
| 6,851 | `interestInsight` | `function interestInsight(` |
| 6,866 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,889 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,909 | `activityStackHtml` | `function activityStackHtml(` |
| 6,919 | `seatTemperature` | `function seatTemperature(` |
| 6,927 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,960_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,961 | `partsOf` | `function partsOf(` |
| 6,970 | `authored` | `function authored(` |
| 6,971 | `registerRoster` | `function registerRoster(` |
| 6,993 | `indRow` | `function indRow(` |
| 6,997 | `IND_ORDER` | `var IND_ORDER =` |
| 6,998 | `indGroupRow` | `function indGroupRow(` |
| 7,003 | `indRows` | `function indRows(` |
| 7,017 | `indCategoryHtml` | `function indCategoryHtml(` |
| 7,025 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 7,027_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,028 | `NAV` | `var NAV =` |
| 7,029 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,123_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,124 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,171_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,172 | `qPretty` | `function qPretty(` |
| 7,173 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,174 | `peekArt` | `function peekArt(` |
| 7,175 | `indPeriod` | `function indPeriod(` |
| 7,179 | `catItem` | `function catItem(` |
| 7,229 | `insightCirculation` | `function insightCirculation(` |
| 7,262 | `insightWeather` | `function insightWeather(` |
| 7,302 | `seasonCards` | `function seasonCards(` |
| 7,308 | `marketCycleCard` | `function marketCycleCard(` |
| 7,320 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,324 | `THIN_MONTHS` | `var THIN_MONTHS =` |
| 7,325 | `SEASON_ORDER` | `var SEASON_ORDER =` |
| 7,326 | `seasonName` | `function seasonName(` |
| 7,327 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,334 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,339 | `curvePath` | `function curvePath(` |
| 7,347 | `moodCallout` | `function moodCallout(` |
| 7,351 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,363 | `moodInfo` | `function moodInfo(` |
| 7,371 | `moodCard` | `function moodCard(` |
| 7,377 | `insightMood` | `function insightMood(` |
| 7,384 | `emoCell` | `function emoCell(` |
| 7,390 | `emotionGrid` | `function emotionGrid(` |
| 7,401 | `emotionSeasonInfo` | `function emotionSeasonInfo(` |
| 7,409 | `emotionSeasonHtml` | `function emotionSeasonHtml(` |
| 7,420 | `PAIR_ART` | `var PAIR_ART =` |
| 7,426 | `placeSignPair` | `function placeSignPair(` |
| 7,449 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,465 | `buildCategories` | `function buildCategories(` |
| 7,481 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,519_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,520 | `capeFmt1` | `function capeFmt1(` |
| 7,521 | `actCycleMonths` | `function actCycleMonths(` |
| 7,529 | `householdsHighlights` | `function householdsHighlights(` |
| 7,548 | `redrawSheet` | `function redrawSheet(` |
| 7,552 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,597 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,634 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,681 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,711 | `valuationHighlights` | `function valuationHighlights(` |
| 7,724 | `tempHighlights` | `function tempHighlights(` |
| 7,741 | `gdpHighlights` | `function gdpHighlights(` |
| 7,756 | `renderMetricPages` | `function renderMetricPages(` |
| 7,766 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,776_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,777 | `todayFace` | `function todayFace(` |
| 7,783 | `readDoor` | `function readDoor(` |
| 7,791 | `pct` | `function pct(` |
| 7,792 | `rosterRows` | `function rosterRows(` |
| 7,793 | `eraEnds` | `function eraEnds(` |
| 7,800 | `eraMove` | `function eraMove(` |
| 7,804 | `HORMONES` | `var HORMONES =` |
| 7,805 | `analysisFor` | `function analysisFor(` |
| 7,811 | `dxRow` | `function dxRow(` |
| 7,812 | `dxText` | `function dxText(` |
| 7,813 | `dxSection` | `function dxSection(` |
| 7,814 | `systemHtml` | `function systemHtml(` |
| 7,817 | `dxHead` | `function dxHead(` |
| 7,822 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,831 | `acrossCycle` | `function acrossCycle(` |
| 7,838 | `trendCardHtml` | `function trendCardHtml(` |
| 7,844 | `spellLines` | `function spellLines(` |
| 7,859 | `trendSub` | `function trendSub(` |
| 7,860 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,864 | `replaceInsights` | `function replaceInsights(` |
| 7,870 | `repaintDiagnosis` | `function repaintDiagnosis(` |
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
| 1,983–1,986 | `LIVE_CACHE` | Live data without a render refactor |
| 2,323–2,327 | `productivityRecord` | Productivity growth is not in this panel |
| 2,340–2,362 | `productivityReading` | Productivity growth is not in this panel |
| 2,358–2,362 | `confidenceRecord` | Consumer confidence |
| 2,369–4,299 | `confidenceReading` | Consumer confidence |
| 4,286–4,299 | `horizonRead` | A series' highest reading within a span |
| 4,672–4,907 | `marketReading` | The S&P 500, year by year |
| 4,894–4,907 | `seasonTrackAll` | The season, computed |
| 4,909–4,913 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,616 |
| `pressure-range` | 2,049 |
| `sheet-marker-deficit` | 7,613 |
| `sheet-metric-gdp` | 7,577 |
| `sheet-metric-households` | 7,635 |
| `sheet-metric-temp` | 7,553 |
| `sheet-metric-valuation` | 7,655 |
| `sheet-sign-activity` | 7,598 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,620 |
| `desire-range` | 5,441 |
| `fear-range` | 6,085 |
| `hzn-range` | 5,918 |
| `pressure-range` | 5,622 |
| `pulse-range` | 5,409 |
| `sheet-metric-gdp` | 7,578 |
| `sheet-metric-temp` | 7,554 |
| `sheet-metric-valuation` | 7,656 |
| `volume-range` | 5,425 |

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
| 750 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 825 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 898 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,067 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,082 | The symptoms: a cycle's years against today |
| 1,158 | hero: yield curve |
| 1,190 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,209 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,236 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,244 | long cycle (structural layer) |
| 1,251 | indicator grid |
| 1,277 | info icon + popover (progressive disclosure for longer notes) |
| 1,291 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,374 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (105), which is what the renderers fill:

| Line | id |
|---|---|
| 1,390 | `topbar-back` |
| 1,393 | `topbar-title` |
| 1,394 | `menu-btn` |
| 1,408 | `main` |
| 1,411 | `cycle-view` |
| 1,414 | `cycle-kicker` |
| 1,417 | `cycle-dial` |
| 1,419 | `season-wheel-hub-date` |
| 1,420 | `season-wheel-hub-theme` |
| 1,421 | `season-wheel-hub-detail` |
| 1,429 | `today-analysis` |
| 1,430 | `peek-row` |
| 1,431 | `sheet-metric-temp` |
| 1,432 | `temp-timing` |
| 1,433 | `temp-chart` |
| 1,434 | `temp-rangebar` |
| 1,436 | `temp-head` |
| 1,437 | `temp-history` |
| 1,438 | `temp-hist-tooltip` |
| 1,439 | `temp-trend` |
| 1,441 | `temp-highlights` |
| 1,443 | `sheet-metric-gdp` |
| 1,444 | `gdp-timing` |
| 1,445 | `gdp-chart` |
| 1,446 | `gdp-rangebar` |
| 1,448 | `gdp-head` |
| 1,449 | `gdp-history` |
| 1,450 | `gdp-hist-tooltip` |
| 1,451 | `gdp-trend` |
| 1,453 | `gdp-highlights` |
| 1,457 | `sheet-marker-deficit` |
| 1,457 | `deficit-timing` |
| 1,459 | `sheet-metric-households` |
| 1,460 | `households-timing` |
| 1,461 | `households-chart` |
| 1,462 | `households-highlights` |
| 1,465 | `sheet-metric-valuation` |
| 1,466 | `valuation-timing` |
| 1,467 | `valuation-chart` |
| 1,468 | `valuation-highlights` |
| 1,475 | `subj-value-hormones` |
| 1,476 | `subj-say-hormones` |
| 1,482 | `hormones-history` |
| 1,483 | `hormones-insights` |
| 1,492 | `subj-value-horizon` |
| 1,493 | `subj-say-horizon` |
| 1,494 | `subj-spark-horizon` |
| 1,500 | `hzn-timeline` |
| 1,502 | `hzn-head` |
| 1,503 | `spread-history-shell` |
| 1,504 | `spread-history-svg` |
| 1,505 | `spread-history-tooltip` |
| 1,507 | `hzn-trend` |
| 1,509 | `horizon-insights` |
| 1,518 | `subj-value-pressure` |
| 1,519 | `subj-say-pressure` |
| 1,525 | `pressure-timeline` |
| 1,527 | `pressure-head` |
| 1,528 | `ylm-shell` |
| 1,529 | `ylm-svg` |
| 1,530 | `ylm-tooltip` |
| 1,532 | `ylm-trend` |
| 1,534 | `pressure-insights` |
| 1,541 | `subj-ring-sentiment` |
| 1,544 | `subj-value-sentiment` |
| 1,545 | `subj-say-sentiment` |
| 1,546 | `subj-spark-sentiment` |
| 1,552 | `fear-history` |
| 1,553 | `curve-highlights` |
| 1,559 | `signs-list` |
| 1,565 | `calendar-list` |
| 1,572 | `cycle-data` |
| 1,574 | `cycle-legend` |
| 1,575 | `cycle-list` |
| 1,576 | `cycle-more` |
| 1,577 | `cycle-more-label` |
| 1,582 | `calendar-cycle` |
| 1,602 | `search-home` |
| 1,604 | `search-input` |
| 1,606 | `search-list` |
| 1,610 | `more-menu` |
| 1,613 | `menu-back` |
| 1,627 | `sources-open` |
| 1,635 | `appearance-current` |
| 1,641 | `sheet-howto` |
| 1,684 | `sheet-book` |
| 1,715 | `seasons-kicker` |
| 1,717 | `seasons-rows` |
| 1,720 | `framework-kicker` |
| 1,723 | `framework-rows` |
| 1,733 | `sheet-appearance` |
| 1,741 | `theme-toggle` |
| 1,748 | `sheet-contact` |
| 1,757 | `contact-form` |
| 1,758 | `contact-title` |
| 1,759 | `contact-message` |
| 1,761 | `contact-hint` |
| 1,762 | `contact-send` |
| 1,768 | `sheet-sources` |
| 1,771 | `sources-back` |
| 1,776 | `asof-text` |
| 1,777 | `sources-groups` |
| 1,783 | `detail-backdrop` |
| 1,785 | `detail-modal-close` |
| 1,786 | `detail-modal-body` |

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

