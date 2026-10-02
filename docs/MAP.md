# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,277 lines**, about 633 KB, roughly **180 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `0d92ddd` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,392 | the whole stylesheet, every token and rule |
| **Markup** | 1,393–1,798 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,799–8,244 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,245–8,277 | </body></html> |

Counts: **412** top-level functions, **185** top-level vars, **8** top-level IIFEs in the script.

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

_line 1,830_ · 12 declarations

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

### Live data without a render refactor

_line 1,987_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,992 | `merge` | `function merge(` |
| 1,999 | `LIVE` | `function LIVE(` |
| 2,013 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,016_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,018 | `paintReading` | `function paintReading(` |
| 2,035 | `repaintVolatility` | `function repaintVolatility(` |
| 2,039 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,047 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,052 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,056 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,061_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,062 | `READINGS` | `var READINGS =` |
| 2,117 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,118 | `KINDS` | `var KINDS =` |
| 2,119 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,133 | `receive` | `function receive(` |
| 2,149 | `liveAsOf` | `var liveAsOf =` |
| 2,150 | `fmtAsOf` | `function fmtAsOf(` |
| 2,155 | `applyLive` | `function applyLive(` |
| 2,168 | `shapeOk` | `function shapeOk(` |
| 2,175 | `repaintPolicy` | `function repaintPolicy(` |
| 2,181 | `GYN` | `var GYN =` |
| 2,208 | `refreshLiveData` | `function refreshLiveData(` |
| 2,226 | `fetchSiteData` | `function fetchSiteData(` |
| 2,242 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,247_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,248 | `yieldCurve` | `var yieldCurve =` |
| 2,254 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,255 | `curveAsOf` | `function curveAsOf(` |
| 2,260 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,261 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,266 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,268_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,269 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,270 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,271 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,272 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,273 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,275_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,276 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,282 | `uninvLagToday` | `var uninvLagToday =` |
| 2,287 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,293 | `gdpSrc` | `var gdpSrc =` |
| 2,296 | `labPanel` | `var labPanel =` |
| 2,325 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,326_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,333 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,334 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,361_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,362 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,368 | `confidenceWord` | `function confidenceWord(` |

### The deficit, year by year

_line 2,395_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,396 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,397 | `deficitHistory` | `var deficitHistory =` |
| 2,400 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,401 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,403 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,412_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,413 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,422_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,423 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,426 | `timelineSpan` | `function timelineSpan(` |
| 2,431 | `timelineFor` | `function timelineFor(` |
| 2,442 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,448_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,449 | `windowScale` | `function windowScale(` |
| 2,464 | `windowYears` | `function windowYears(` |
| 2,472 | `refName` | `function refName(` |
| 2,476 | `histReadEnsure` | `function histReadEnsure(` |
| 2,496 | `histReadFill` | `function histReadFill(` |
| 2,546 | `histAxisEnds` | `function histAxisEnds(` |
| 2,557 | `histLegend` | `function histLegend(` |
| 2,617 | `refitHistory` | `function refitHistory(` |
| 2,627 | `wireHistHover` | `function wireHistHover(` |
| 2,664 | `mWindowFrom` | `function mWindowFrom(` |
| 2,668 | `qWindowFrom` | `function qWindowFrom(` |
| 2,673 | `DEF_1983` | `var DEF_1983 =` |
| 2,674 | `defFrom` | `function defFrom(` |
| 2,679 | `deficitChart` | `function deficitChart(` |
| 2,747 | `deficitBlock` | `function deficitBlock(` |
| 2,787 | `buffettHistory` | `var buffettHistory =` |
| 2,789 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,790 | `hyDates` | `var hyDates =` |
| 2,791 | `hyOas` | `var hyOas =` |
| 2,792 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,799 | `hyAt` | `function hyAt(` |
| 2,803 | `hyLabel` | `function hyLabel(` |
| 2,804 | `hyNum` | `function hyNum(` |
| 2,805 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,813 | `hyQuarters` | `function hyQuarters(` |
| 2,821 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,823 | `capeHistory` | `var capeHistory =` |
| 2,825 | `longCycleSrc` | `var longCycleSrc =` |
| 2,841 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,855_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,856 | `sentiment` | `var sentiment =` |
| 2,872 | `valuation` | `var valuation =` |
| 2,893 | `valRow` | `function valRow(` |
| 2,898 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,901 | `coincident` | `var coincident =` |
| 2,951 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,957 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,958 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,959 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,961_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,962 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,963 | `m2vHistory` | `var m2vHistory =` |
| 2,979 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,031 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,073_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,074 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,075 | `DOTS` | `var DOTS =` |
| 3,077 | `headPickRow` | `function headPickRow(` |
| 3,083 | `histHead` | `function histHead(` |
| 3,098 | `headNoteIdx` | `var headNoteIdx =` |
| 3,099 | `headMenuHtml` | `function headMenuHtml(` |
| 3,124 | `headMenuFor` | `var headMenuFor =` |
| 3,125 | `headSubFor` | `var headSubFor =` |
| 3,126 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,155 | `histNote` | `function histNote(` |
| 3,156 | `meterFlagged` | `function meterFlagged(` |
| 3,163 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,186 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,200 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,213 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,218 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,222 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,234 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,248 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,262 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,281 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,312 | `desireBlock` | `function desireBlock(` |
| 3,323 | `volumeBlock` | `function volumeBlock(` |
| 3,335 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,347 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,354_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,355 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,356 | `m2Level` | `var m2Level =` |
| 3,377 | `m2Yoy` | `var m2Yoy =` |
| 3,378 | `M2_NORM` | `var M2_NORM =` |
| 3,380 | `volumeVerdict` | `function volumeVerdict(` |
| 3,388 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,389 | `unempHistory` | `var unempHistory =` |
| 3,395 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,404 | `NROU_NOW` | `var NROU_NOW =` |
| 3,405 | `unempState` | `function unempState(` |
| 3,411 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,463_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,464 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,473 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,529 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,530 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,531 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,532_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,534 | `householdsChart` | `function householdsChart(` |
| 3,584 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,637 | `GDP_NORM` | `var GDP_NORM =` |
| 3,638 | `gdpNowQ` | `var gdpNowQ =` |
| 3,639 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,661 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,712 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,757 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,765 | `velocityVerdict` | `function velocityVerdict(` |
| 3,773 | `derivePulseTag` | `function derivePulseTag(` |
| 3,779 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,811_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,812 | `seasonReading` | `var seasonReading =` |
| 3,856 | `frameworkRows` | `var frameworkRows =` |
| 3,866 | `vixRow` | `var vixRow =` |
| 3,867 | `VIX_CALM` | `var VIX_CALM =` |
| 3,868 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,872 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,879_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,880 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,889_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,890 | `calendarTodayY` | `var calendarTodayY =` |
| 3,892 | `vix3mClose` | `var vix3mClose =` |
| 3,893 | `fearCurve` | `function fearCurve(` |
| 3,898 | `curveVerdict` | `function curveVerdict(` |
| 3,903 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,912_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,913 | `modeBar` | `function modeBar(` |
| 3,920 | `pickerOpen` | `var pickerOpen =` |
| 3,921 | `cycleByName` | `function cycleByName(` |
| 3,925 | `openCycle` | `function openCycle(` |
| 3,929 | `cycleSlice` | `function cycleSlice(` |
| 3,937 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,945 | `cycleMonths` | `function cycleMonths(` |
| 3,953 | `histControls` | `function histControls(` |
| 3,962 | `pageCycle` | `function pageCycle(` |
| 3,966 | `cycLabel` | `function cycLabel(` |
| 3,970 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,975 | `cyclePicker` | `function cyclePicker(` |
| 3,994 | `rangeBar` | `function rangeBar(` |
| 4,001 | `trendOf` | `function trendOf(` |
| 4,016 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,020 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 4,031_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,032 | `yearOf` | `function yearOf(` |
| 4,033 | `mean` | `function mean(` |

### The record rows

_line 4,034_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,035 | `headSigma` | `function headSigma(` |
| 4,040 | `atQuarter` | `function atQuarter(` |
| 4,041 | `atMonth` | `function atMonth(` |
| 4,042 | `ordinal` | `function ordinal(` |
| 4,043 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,046_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,047 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,054 | `moreRow` | `function moreRow(` |
| 4,060 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,061 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,067_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,068 | `xLabelOf` | `function xLabelOf(` |
| 4,078 | `fitLine` | `function fitLine(` |
| 4,082 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,100_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,101 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,109 | `vGrid` | `function vGrid(` |
| 4,113 | `COL_FILL` | `var COL_FILL =` |
| 4,114 | `colPath` | `function colPath(` |
| 4,119 | `colWidth` | `function colWidth(` |
| 4,124 | `AXIS` | `var AXIS =` |
| 4,125 | `histFrame` | `function histFrame(` |
| 4,132 | `xLabel` | `function xLabel(` |
| 4,135 | `crossLine` | `function crossLine(` |
| 4,138 | `zeroRule` | `function zeroRule(` |
| 4,141 | `meanRule` | `function meanRule(` |
| 4,142 | `pendingGeom` | `var pendingGeom =` |
| 4,143 | `publishGeom` | `function publishGeom(` |
| 4,144 | `attachHistory` | `function attachHistory(` |
| 4,153 | `histBar` | `function histBar(` |
| 4,156 | `histTip` | `function histTip(` |
| 4,157 | `avgRule` | `function avgRule(` |
| 4,160 | `vhOpen` | `function vhOpen(` |
| 4,161 | `chartAxes` | `function chartAxes(` |
| 4,191 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,226_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,228 | `maxIn` | `function maxIn(` |
| 4,233 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,234 | `PEEK_W` | `var PEEK_W =` |
| 4,235 | `PEEK_H` | `var PEEK_H =` |
| 4,236 | `colPeek` | `function colPeek(` |
| 4,254 | `meterPeek` | `function meterPeek(` |
| 4,271 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,276 | `pressureZone` | `function pressureZone(` |
| 4,282 | `HZN_BACK` | `var HZN_BACK =` |
| 4,283 | `hznLast` | `function hznLast(` |
| 4,284 | `hznBack` | `function hznBack(` |
| 4,285 | `horizonWord` | `function horizonWord(` |
| 4,305 | `HZN_METERS` | `var HZN_METERS =` |
| 4,313 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,334 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,339 | `RISK_RISK` | `var RISK_RISK =` |
| 4,344 | `riskCell` | `function riskCell(` |
| 4,345 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,375 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,400_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,401 | `pulseClipN` | `var pulseClipN =` |
| 4,402 | `beatPath` | `function beatPath(` |
| 4,419 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,433 | `pulsePeek` | `function pulsePeek(` |
| 4,436 | `pulseBlock` | `function pulseBlock(` |
| 4,453 | `CHEV` | `var CHEV =` |
| 4,454 | `peekCard` | `function peekCard(` |
| 4,473 | `dropSvg` | `function dropSvg(` |
| 4,475 | `volumeSvg` | `function volumeSvg(` |
| 4,479 | `gaugeSvg` | `function gaugeSvg(` |
| 4,483 | `diamondSvg` | `function diamondSvg(` |
| 4,487 | `sproutSvg` | `function sproutSvg(` |
| 4,495 | `markSvg` | `function markSvg(` |
| 4,498 | `hormoneSvg` | `function hormoneSvg(` |
| 4,503 | `flameSvg` | `function flameSvg(` |
| 4,506 | `clockSvg` | `function clockSvg(` |
| 4,507 | `gearSvg` | `function gearSvg(` |
| 4,515 | `thermoSvg` | `function thermoSvg(` |
| 4,518 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,520 | `trendUpSvg` | `function trendUpSvg(` |
| 4,522 | `ecgSvg` | `function ecgSvg(` |
| 4,524 | `circulationSvg` | `function circulationSvg(` |
| 4,525 | `weatherSvg` | `function weatherSvg(` |
| 4,533 | `moodSvg` | `function moodSvg(` |
| 4,537 | `boltSvg` | `function boltSvg(` |
| 4,538 | `houseSvg` | `function houseSvg(` |
| 4,541 | `bagSvg` | `function bagSvg(` |
| 4,544 | `sunriseSvg` | `function sunriseSvg(` |
| 4,548 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,556_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,557 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,558 | `dsrHistory` | `var dsrHistory =` |
| 4,559 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,560 | `savHistory` | `var savHistory =` |
| 4,563 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,572 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,573 | `dsrNow` | `var dsrNow =` |
| 4,574 | `savNow` | `var savNow =` |
| 4,575 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,576 | `householdsWord` | `function householdsWord(` |
| 4,583 | `householdsNow` | `var householdsNow =` |
| 4,584 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,601 | `savInfoHtml` | `function savInfoHtml(` |
| 4,619 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,626 | `curveSub` | `var curveSub =` |
| 4,627 | `vixPct` | `function vixPct(` |
| 4,631 | `curveNoteFull` | `var curveNoteFull =` |
| 4,642 | `volatilityRing` | `function volatilityRing(` |
| 4,647 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,648 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,663 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,669 | `marketCycles` | `var marketCycles =` |
| 4,697 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,699_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,700 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,701 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,706_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,707 | `TIMING` | `var TIMING =` |
| 4,713 | `CATEGORIES` | `var CATEGORIES =` |
| 4,719 | `ROSTER` | `var ROSTER =` |
| 4,771 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,772 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,774 | `pageState` | `function pageState(` |
| 4,779 | `pageMode` | `var pageMode =` |
| 4,780 | `pageCycles` | `var pageCycles =` |
| 4,781 | `pageRange` | `var pageRange =` |
| 4,782 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,783 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,784 | `keyed` | `function keyed(` |
| 4,791 | `hyMonths` | `function hyMonths(` |
| 4,794 | `prettyKey` | `function prettyKey(` |
| 4,799 | `lastDate` | `function lastDate(` |
| 4,800 | `compiledDay` | `function compiledDay(` |
| 4,801 | `labPeriod` | `function labPeriod(` |
| 4,802 | `rosterFor` | `function rosterFor(` |
| 4,803 | `rowReadings` | `function rowReadings(` |
| 4,804 | `indOf` | `function indOf(` |
| 4,805 | `peekOf` | `function peekOf(` |
| 4,810 | `cardDate` | `function cardDate(` |
| 4,811 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,832_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,833 | `slopeOf` | `function slopeOf(` |
| 4,838 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,839 | `readSeason` | `function readSeason(` |
| 4,858 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,859 | `qLabel` | `function qLabel(` |
| 4,880 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,882_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,883 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,884 | `seasonTitle` | `function seasonTitle(` |
| 4,885 | `monthLabel` | `function monthLabel(` |
| 4,886 | `cycleReturns` | `function cycleReturns(` |
| 4,896 | `cycleModel` | `function cycleModel(` |
| 4,927 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,935 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,941 | `nowModel` | `var nowModel =` |
| 4,942 | `readingNow` | `var readingNow =` |
| 4,943 | `cpiNow` | `var cpiNow =` |
| 4,944 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,945 | `currentSeason` | `var currentSeason =` |
| 4,946 | `seasonWhy` | `var seasonWhy =` |
| 4,948 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,950_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,951 | `CALM` | `var CALM =` |
| 4,952 | `FEELINGS` | `var FEELINGS =` |
| 4,953 | `FEELING_STATE` | `var FEELING_STATE =` |
| 4,954 | `seasonHalf` | `function seasonHalf(` |
| 4,955 | `rankToDate` | `function rankToDate(` |
| 4,959 | `readFeeling` | `function readFeeling(` |
| 4,970 | `readPosture` | `function readPosture(` |
| 4,978 | `marketCache` | `var marketCache =` |
| 4,979 | `marketMonths` | `function marketMonths(` |
| 4,999 | `seasonInMonth` | `function seasonInMonth(` |
| 5,004 | `stretchRank` | `function stretchRank(` |
| 5,007 | `marketFacts` | `function marketFacts(` |
| 5,018 | `followedCache` | `var followedCache =` |
| 5,019 | `whatFollowed` | `function whatFollowed(` |
| 5,042 | `lastFeeling` | `function lastFeeling(` |
| 5,047 | `diagnoseClose` | `function diagnoseClose(` |
| 5,055 | `diagnoseToday` | `function diagnoseToday(` |
| 5,070 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,081 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,082 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,083 | `spreadLabel` | `function spreadLabel(` |
| 5,087 | `policyFacts` | `function policyFacts(` |
| 5,094 | `policyFactRows` | `function policyFactRows(` |
| 5,100 | `allSources` | `var allSources =` |
| 5,114 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,126_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,127 | `SVG_NS` | `var SVG_NS =` |
| 5,128 | `svgEl` | `function svgEl(` |
| 5,133 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,167_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,168 | `clampPct` | `function clampPct(` |
| 5,171 | `detailTexts` | `var detailTexts =` |
| 5,172 | `detailSlots` | `var detailSlots =` |
| 5,173 | `detailSlot` | `function detailSlot(` |
| 5,183 | `metricSheet` | `function metricSheet(` |
| 5,188 | `ledeHtml` | `function ledeHtml(` |
| 5,189 | `facts` | `function facts(` |
| 5,190 | `factsFrom` | `function factsFrom(` |
| 5,194 | `expandBtn` | `function expandBtn(` |
| 5,198 | `sheetRenderers` | `var sheetRenderers =` |
| 5,199 | `drawsPage` | `function drawsPage(` |
| 5,200 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,229_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,232 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,233_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,234 | `subjectRow` | `function subjectRow(` |
| 5,244 | `subjectIcon` | `function subjectIcon(` |
| 5,245 | `srcHtml` | `function srcHtml(` |
| 5,246 | `timingMark` | `function timingMark(` |
| 5,254 | `timingPill` | `function timingPill(` |
| 5,263 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,271 | `seatPageFoot` | `function seatPageFoot(` |
| 5,283 | `timingMembers` | `var timingMembers =` |
| 5,285 | `registerTiming` | `function registerTiming(` |
| 5,287 | `headHtml` | `function headHtml(` |
| 5,292 | `heldHighlights` | `var heldHighlights =` |
| 5,293 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,320_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,321 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,322 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,330 | `withLatestPoint` | `function withLatestPoint(` |
| 5,335 | `pressureMaturities` | `function pressureMaturities(` |
| 5,359 | `registerFlowPages` | `function registerFlowPages(` |
| 5,413 | `renderPressureRow` | `function renderPressureRow(` |
| 5,421 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,440 | `ylmColumns` | `function ylmColumns(` |
| 5,460 | `ylmFitLine` | `function ylmFitLine(` |
| 5,472 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,613_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,614 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,651_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,652 | `spreadSeries` | `function spreadSeries(` |
| 5,696 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,822_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,823 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,849_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,850 | `drawHznHead` | `function drawHznHead(` |
| 5,864 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,923_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,924 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,932_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,933 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,030_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,031 | `renderVolatility` | `function renderVolatility(` |
| 6,076 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,106_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,107 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,137_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,138 | `totalRiseIn` | `function totalRiseIn(` |
| 6,148 | `eraInflation` | `function eraInflation(` |
| 6,159 | `eraGrowth` | `function eraGrowth(` |
| 6,175 | `fmtSigned` | `function fmtSigned(` |
| 6,176 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,177 | `growthShown` | `function growthShown(` |
| 6,178 | `growthShownCap` | `function growthShownCap(` |
| 6,179 | `phaseClass` | `function phaseClass(` |
| 6,180 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,184 | `cycleViewEl` | `var cycleViewEl =` |
| 6,185 | `shownEra` | `var shownEra =` |
| 6,186 | `calendarReset` | `var calendarReset =` |
| 6,187 | `metricPageReset` | `var metricPageReset =` |
| 6,188 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,189 | `topbarBack` | `var topbarBack =` |
| 6,190 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,197_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,198 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,279_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,280 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,298_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,299 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,320_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,322 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,323 | `hubSet` | `function hubSet(` |
| 6,334 | `quarterPopup` | `function quarterPopup(` |
| 6,357 | `hubShowDefault` | `function hubShowDefault(` |
| 6,365 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,371 | `hubShowYear` | `function hubShowYear(` |
| 6,381 | `renderCycleDial` | `function renderCycleDial(` |
| 6,462 | `m2Step` | `function m2Step(` |
| 6,465 | `heatStep` | `function heatStep(` |
| 6,469 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,480_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,481 | `renderCycleView` | `function renderCycleView(` |
| 6,487 | `shownEraModel` | `var shownEraModel =` |
| 6,488 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,490_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,491 | `stripGroupName` | `var stripGroupName =` |
| 6,492 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,520 | `marketStripHtml` | `function marketStripHtml(` |
| 6,554 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,555 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,584_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,585 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,591 | `debtSvg` | `function debtSvg(` |
| 6,592 | `interestSvg` | `function interestSvg(` |
| 6,594 | `budgetSvg` | `function budgetSvg(` |
| 6,596 | `lede` | `function lede(` |
| 6,597 | `periodOf` | `function periodOf(` |
| 6,598 | `meterWord` | `function meterWord(` |
| 6,599 | `splitPages` | `function splitPages(` |
| 6,615 | `confidencePage` | `function confidencePage(` |
| 6,621 | `productivityPage` | `function productivityPage(` |
| 6,626 | `splitSpec` | `function splitSpec(` |
| 6,632 | `splitInfo` | `function splitInfo(` |
| 6,636 | `periodTicks` | `function periodTicks(` |
| 6,641 | `periodOfSeries` | `function periodOfSeries(` |
| 6,642 | `drawSplit` | `function drawSplit(` |
| 6,659 | `mountSplit` | `function mountSplit(` |
| 6,672 | `splitPeek` | `function splitPeek(` |
| 6,679 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,687 | `deficitPeek` | `function deficitPeek(` |
| 6,691 | `catSheet` | `function catSheet(` |
| 6,696 | `groupId` | `function groupId(` |
| 6,697 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,698 | `seatGroups` | `function seatGroups(` |
| 6,701 | `groupSheet` | `function groupSheet(` |
| 6,711 | `appendPicks` | `function appendPicks(` |
| 6,719 | `doorSel` | `function doorSel(` |
| 6,720 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,732_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,733 | `buffettInsight` | `function buffettInsight(` |
| 6,748 | `debtInsight` | `function debtInsight(` |
| 6,763 | `productivityInsight` | `function productivityInsight(` |
| 6,773 | `confidenceInsight` | `function confidenceInsight(` |
| 6,784 | `interestInsight` | `function interestInsight(` |
| 6,799 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,822 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,842 | `activityStackHtml` | `function activityStackHtml(` |
| 6,852 | `seatTemperature` | `function seatTemperature(` |
| 6,860 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,893_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,894 | `partsOf` | `function partsOf(` |
| 6,903 | `authored` | `function authored(` |
| 6,904 | `registerRoster` | `function registerRoster(` |
| 6,926 | `indRow` | `function indRow(` |
| 6,930 | `IND_ORDER` | `var IND_ORDER =` |
| 6,931 | `indGroupRow` | `function indGroupRow(` |
| 6,936 | `indRows` | `function indRows(` |
| 6,950 | `indCategoryHtml` | `function indCategoryHtml(` |
| 6,958 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 6,960_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,961 | `NAV` | `var NAV =` |
| 6,962 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,056_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,057 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,104_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,105 | `qPretty` | `function qPretty(` |
| 7,106 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,107 | `peekArt` | `function peekArt(` |
| 7,108 | `indPeriod` | `function indPeriod(` |
| 7,112 | `catItem` | `function catItem(` |
| 7,162 | `insightCirculation` | `function insightCirculation(` |
| 7,195 | `insightWeather` | `function insightWeather(` |
| 7,238 | `EMOTION_CURVE` | `var EMOTION_CURVE =` |
| 7,242 | `EMO_PLACE` | `var EMO_PLACE =` |
| 7,243 | `curvePath` | `function curvePath(` |
| 7,251 | `emotionCurveSvg` | `function emotionCurveSvg(` |
| 7,264 | `insightMood` | `function insightMood(` |
| 7,274 | `PAIR_ART` | `var PAIR_ART =` |
| 7,280 | `placeSignPair` | `function placeSignPair(` |
| 7,303 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,319 | `buildCategories` | `function buildCategories(` |
| 7,335 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,373_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,374 | `capeFmt1` | `function capeFmt1(` |
| 7,375 | `actCycleMonths` | `function actCycleMonths(` |
| 7,383 | `householdsHighlights` | `function householdsHighlights(` |
| 7,402 | `redrawSheet` | `function redrawSheet(` |
| 7,406 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,451 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,488 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,535 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,565 | `valuationHighlights` | `function valuationHighlights(` |
| 7,578 | `tempHighlights` | `function tempHighlights(` |
| 7,595 | `gdpHighlights` | `function gdpHighlights(` |
| 7,610 | `renderMetricPages` | `function renderMetricPages(` |
| 7,620 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,630_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,631 | `FEELING_RULES` | `var FEELING_RULES =` |
| 7,640 | `POSTURE_STATE` | `var POSTURE_STATE =` |
| 7,641 | `POSTURE_SAYS` | `var POSTURE_SAYS =` |
| 7,648 | `BODY_SAYS` | `var BODY_SAYS =` |
| 7,656 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,661 | `todayFace` | `function todayFace(` |
| 7,667 | `readDoor` | `function readDoor(` |
| 7,675 | `pct` | `function pct(` |
| 7,676 | `rosterRows` | `function rosterRows(` |
| 7,677 | `eraMove` | `function eraMove(` |
| 7,685 | `analysisFor` | `function analysisFor(` |
| 7,693 | `dxRow` | `function dxRow(` |
| 7,697 | `dxText` | `function dxText(` |
| 7,698 | `dxSection` | `function dxSection(` |
| 7,699 | `systemHtml` | `function systemHtml(` |
| 7,702 | `dxHead` | `function dxHead(` |
| 7,707 | `postureLine` | `function postureLine(` |
| 7,711 | `diagnosisInfo` | `function diagnosisInfo(` |
| 7,719 | `assessmentFor` | `function assessmentFor(` |
| 7,729 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,745 | `SEASON_ORDER` | `var SEASON_ORDER =` |
| 7,746 | `feelingBySeason` | `function feelingBySeason(` |
| 7,753 | `trendBarsSvg` | `function trendBarsSvg(` |
| 7,772 | `trendCardHtml` | `function trendCardHtml(` |
| 7,787 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,791 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,798 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,811_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,812 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,813 | `cycleDataOn` | `function cycleDataOn(` |
| 7,814 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,834 | `wireCycleData` | `function wireCycleData(` |
| 7,849 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,894_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,895 | `eraOpen` | `var eraOpen =` |
| 7,896 | `kT` | `function kT(` |
| 7,900 | `upTo` | `function upTo(` |
| 7,901 | `pairAt` | `function pairAt(` |
| 7,902 | `eraReading` | `function eraReading(` |
| 7,912 | `eraFig` | `function eraFig(` |
| 7,919 | `eraValue` | `function eraValue(` |
| 7,925 | `eraRange` | `function eraRange(` |
| 7,930 | `eraMini` | `function eraMini(` |
| 7,935 | `eraCard` | `function eraCard(` |
| 7,954 | `eraShow` | `function eraShow(` |
| 7,963 | `enterEra` | `function enterEra(` |
| 7,970 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,977_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,978 | `rosterRow` | `function rosterRow(` |
| 7,991 | `__roster` | `var __roster =` |
| 7,992 | `readingRoster` | `function readingRoster(` |
| 7,999 | `withUnit` | `function withUnit(` |
| 8,000 | `pastFigure` | `function pastFigure(` |
| 8,004 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,006_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,007 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,031 | `placeWords` | `function placeWords(` |
| 8,035 | `symptomNote` | `function symptomNote(` |
| 8,042 | `symptomRow` | `function symptomRow(` |
| 8,049 | `cycleTrack` | `function cycleTrack(` |
| 8,064 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,072_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,073 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,122_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,123 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,154_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,155 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **8 compute a value**, 8 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,988–1,991 | `LIVE_CACHE` | Live data without a render refactor |
| 2,328–2,332 | `productivityRecord` | Productivity growth is not in this panel |
| 2,345–2,367 | `productivityReading` | Productivity growth is not in this panel |
| 2,363–2,367 | `confidenceRecord` | Consumer confidence |
| 2,374–4,304 | `confidenceReading` | Consumer confidence |
| 4,291–4,304 | `horizonRead` | A series' highest reading within a span |
| 4,860–4,873 | `seasonTrackAll` | The season, computed |
| 4,875–4,879 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,470 |
| `pressure-range` | 2,054 |
| `sheet-marker-deficit` | 7,467 |
| `sheet-metric-gdp` | 7,431 |
| `sheet-metric-households` | 7,489 |
| `sheet-metric-temp` | 7,407 |
| `sheet-metric-valuation` | 7,509 |
| `sheet-sign-activity` | 7,452 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,474 |
| `desire-range` | 5,395 |
| `fear-range` | 6,039 |
| `hzn-range` | 5,872 |
| `pressure-range` | 5,576 |
| `pulse-range` | 5,363 |
| `sheet-metric-gdp` | 7,432 |
| `sheet-metric-temp` | 7,408 |
| `sheet-metric-valuation` | 7,510 |
| `volume-range` | 5,379 |

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

