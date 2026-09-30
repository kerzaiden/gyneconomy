# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,066 lines**, about 587 KB, roughly **167 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `15e8fb4` on 2026-09-30.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,386 | the whole stylesheet, every token and rule |
| **Markup** | 1,387–1,795 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,796–8,033 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,034–8,066 | </body></html> |

Counts: **348** top-level functions, **177** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,796_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,798 | `byId` | `function byId(` |
| 1,806 | `byIdMaybe` | `function byIdMaybe(` |
| 1,807 | `put` | `function put(` |
| 1,812 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,814_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,815 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,816 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,817 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,818 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,822 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,827_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,828 | `wheelMeta` | `var wheelMeta =` |
| 1,836 | `seasonOverride` | `var seasonOverride =` |
| 1,837 | `cycleNowNote` | `var cycleNowNote =` |
| 1,839 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,917 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,958 | `gdpLevels` | `var gdpLevels =` |
| 1,967 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,968 | `fearCurveHistory` | `var fearCurveHistory =` |
| 1,970 | `fiscalHistory` | `var fiscalHistory =` |
| 1,976 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,978 | `treasuryQuarterly` | `var treasuryQuarterly =` |

### Live data without a render refactor

_line 1,988_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,993 | `merge` | `function merge(` |
| 2,000 | `LIVE` | `function LIVE(` |
| 2,014 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,017_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,019 | `paintReading` | `function paintReading(` |
| 2,036 | `repaintFearCurve` | `function repaintFearCurve(` |
| 2,042 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,050 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,055 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,059 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,064_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,065 | `READINGS` | `var READINGS =` |
| 2,121 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,122 | `KINDS` | `var KINDS =` |
| 2,123 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,137 | `receive` | `function receive(` |
| 2,153 | `liveAsOf` | `var liveAsOf =` |
| 2,154 | `fmtAsOf` | `function fmtAsOf(` |
| 2,159 | `applyLive` | `function applyLive(` |
| 2,172 | `shapeOk` | `function shapeOk(` |
| 2,179 | `repaintPolicy` | `function repaintPolicy(` |
| 2,185 | `GYN` | `var GYN =` |
| 2,212 | `refreshLiveData` | `function refreshLiveData(` |
| 2,230 | `fetchSiteData` | `function fetchSiteData(` |
| 2,246 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,251_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,252 | `yieldCurve` | `var yieldCurve =` |
| 2,258 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,259 | `curveAsOf` | `function curveAsOf(` |
| 2,264 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,265 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,270 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,272_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,273 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,274 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,275 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,276 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,277 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,279_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,280 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,286 | `uninvLagToday` | `var uninvLagToday =` |
| 2,291 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,297 | `gdpPeers` | `var gdpPeers =` |
| 2,338 | `gdpSrc` | `var gdpSrc =` |
| 2,339 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,345 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,374_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,376 | `productivityReading` | `var productivityReading =` |

### The deficit, year by year

_line 2,389_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,390 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,391 | `deficitHistory` | `var deficitHistory =` |
| 2,394 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,395 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,397 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,406_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,407 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,417_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,418 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,421 | `timelineSpan` | `function timelineSpan(` |
| 2,426 | `timelineFor` | `function timelineFor(` |
| 2,437 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,443_ · 31 declarations

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
| 2,667 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,668 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,670 | `DEF_1983` | `var DEF_1983 =` |
| 2,671 | `defFrom` | `function defFrom(` |
| 2,676 | `deficitChart` | `function deficitChart(` |
| 2,744 | `deficitBlock` | `function deficitBlock(` |
| 2,784 | `buffettHistory` | `var buffettHistory =` |
| 2,786 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,787 | `hyDates` | `var hyDates =` |
| 2,788 | `hyOas` | `var hyOas =` |
| 2,789 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,796 | `hyAt` | `function hyAt(` |
| 2,800 | `hyLabel` | `function hyLabel(` |
| 2,801 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 2,802 | `hyNum` | `function hyNum(` |
| 2,803 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,811 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,821 | `capeHistory` | `var capeHistory =` |
| 2,823 | `longCycleSrc` | `var longCycleSrc =` |
| 2,839 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,853_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,854 | `sentiment` | `var sentiment =` |
| 2,870 | `valuation` | `var valuation =` |
| 2,891 | `valRow` | `function valRow(` |
| 2,896 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,899 | `coincident` | `var coincident =` |
| 2,949 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,955 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,956 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,957 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,959_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,960 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,961 | `m2vHistory` | `var m2vHistory =` |
| 2,977 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,031 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,072_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,073 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,074 | `DOTS` | `var DOTS =` |
| 3,076 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,091 | `headPickRow` | `function headPickRow(` |
| 3,097 | `histHead` | `function histHead(` |
| 3,112 | `headNoteIdx` | `var headNoteIdx =` |
| 3,113 | `headMenuHtml` | `function headMenuHtml(` |
| 3,138 | `headMenuFor` | `var headMenuFor =` |
| 3,139 | `headSubFor` | `var headSubFor =` |
| 3,140 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,171 | `histNote` | `function histNote(` |
| 3,172 | `meterFlagged` | `function meterFlagged(` |
| 3,179 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,202 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,216 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,229 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,234 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,249 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,263 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,282 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,313 | `desireBlock` | `function desireBlock(` |
| 3,324 | `volumeBlock` | `function volumeBlock(` |
| 3,336 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,348 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,355_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,356 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,357 | `m2Level` | `var m2Level =` |
| 3,378 | `m2Yoy` | `var m2Yoy =` |
| 3,379 | `M2_NORM` | `var M2_NORM =` |
| 3,381 | `volumeVerdict` | `function volumeVerdict(` |
| 3,389 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,390 | `unempHistory` | `var unempHistory =` |
| 3,396 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,405 | `NROU_NOW` | `var NROU_NOW =` |
| 3,406 | `unempState` | `function unempState(` |
| 3,412 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,466_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,467 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,476 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,534 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,535 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,536 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,537_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,539 | `householdsChart` | `function householdsChart(` |
| 3,588 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,643 | `GDP_NORM` | `var GDP_NORM =` |
| 3,644 | `gdpNowQ` | `var gdpNowQ =` |
| 3,645 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,667 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,720 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,767 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,775 | `velocityVerdict` | `function velocityVerdict(` |
| 3,783 | `derivePulseTag` | `function derivePulseTag(` |
| 3,789 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,821_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,822 | `seasonReading` | `var seasonReading =` |
| 3,866 | `frameworkRows` | `var frameworkRows =` |
| 3,876 | `vixRow` | `var vixRow =` |
| 3,877 | `vixWordOf` | `var vixWordOf =` |
| 3,881 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,891_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,892 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,901_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,902 | `calendarTodayY` | `var calendarTodayY =` |
| 3,904 | `vix3mClose` | `var vix3mClose =` |
| 3,905 | `fearCurve` | `function fearCurve(` |
| 3,910 | `curveVerdict` | `function curveVerdict(` |
| 3,915 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,924_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,925 | `modeBar` | `function modeBar(` |
| 3,932 | `pickerOpen` | `var pickerOpen =` |
| 3,933 | `cycleByName` | `function cycleByName(` |
| 3,937 | `openCycle` | `function openCycle(` |
| 3,941 | `cycleSlice` | `function cycleSlice(` |
| 3,949 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,957 | `cycleMonths` | `function cycleMonths(` |
| 3,965 | `histControls` | `function histControls(` |
| 3,974 | `cycLabel` | `function cycLabel(` |
| 3,978 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,983 | `cyclePicker` | `function cyclePicker(` |
| 4,002 | `rangeBar` | `function rangeBar(` |
| 4,009 | `trendOf` | `function trendOf(` |
| 4,024 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,028 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,039_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,040 | `yearOf` | `function yearOf(` |
| 4,041 | `mean` | `function mean(` |

### The record rows

_line 4,042_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,043 | `headSigma` | `function headSigma(` |
| 4,048 | `atQuarter` | `function atQuarter(` |
| 4,049 | `atMonth` | `function atMonth(` |
| 4,050 | `ordinal` | `function ordinal(` |
| 4,051 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,054_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,055 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,062 | `moreRow` | `function moreRow(` |
| 4,068 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,069 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,075_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,076 | `xLabelOf` | `function xLabelOf(` |
| 4,086 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,104_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,105 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,113 | `vGrid` | `function vGrid(` |
| 4,117 | `COL_FILL` | `var COL_FILL =` |
| 4,118 | `colPath` | `function colPath(` |
| 4,123 | `colWidth` | `function colWidth(` |
| 4,128 | `AXIS` | `var AXIS =` |
| 4,129 | `histFrame` | `function histFrame(` |
| 4,136 | `xLabel` | `function xLabel(` |
| 4,139 | `crossLine` | `function crossLine(` |
| 4,142 | `zeroRule` | `function zeroRule(` |
| 4,145 | `meanRule` | `function meanRule(` |
| 4,146 | `pendingGeom` | `var pendingGeom =` |
| 4,147 | `publishGeom` | `function publishGeom(` |
| 4,148 | `attachHistory` | `function attachHistory(` |
| 4,157 | `histBar` | `function histBar(` |
| 4,160 | `histTip` | `function histTip(` |
| 4,161 | `avgRule` | `function avgRule(` |
| 4,164 | `vhOpen` | `function vhOpen(` |
| 4,165 | `chartAxes` | `function chartAxes(` |
| 4,195 | `divergeChart` | `function divergeChart(` |
| 4,229 | `pairChart` | `function pairChart(` |

### A series' highest reading within a span

_line 4,257_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,259 | `maxIn` | `function maxIn(` |
| 4,264 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,265 | `PEEK_W` | `var PEEK_W =` |
| 4,266 | `PEEK_H` | `var PEEK_H =` |
| 4,267 | `colPeek` | `function colPeek(` |
| 4,285 | `meterPeek` | `function meterPeek(` |
| 4,302 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,307 | `pressureZone` | `function pressureZone(` |
| 4,313 | `HZN_BACK` | `var HZN_BACK =` |
| 4,314 | `hznLast` | `function hznLast(` |
| 4,315 | `hznBack` | `function hznBack(` |
| 4,316 | `horizonWord` | `function horizonWord(` |
| 4,336 | `HZN_METERS` | `var HZN_METERS =` |
| 4,344 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,365 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,370 | `RISK_RISK` | `var RISK_RISK =` |
| 4,375 | `riskCell` | `function riskCell(` |
| 4,376 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,406 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,431_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,432 | `pulseClipN` | `var pulseClipN =` |
| 4,433 | `beatPath` | `function beatPath(` |
| 4,450 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,464 | `pulsePeek` | `function pulsePeek(` |
| 4,467 | `pulseBlock` | `function pulseBlock(` |
| 4,484 | `CHEV` | `var CHEV =` |
| 4,485 | `peekCard` | `function peekCard(` |
| 4,504 | `dropSvg` | `function dropSvg(` |
| 4,506 | `volumeSvg` | `function volumeSvg(` |
| 4,510 | `gaugeSvg` | `function gaugeSvg(` |
| 4,514 | `diamondSvg` | `function diamondSvg(` |
| 4,518 | `sproutSvg` | `function sproutSvg(` |
| 4,526 | `markSvg` | `function markSvg(` |
| 4,529 | `hormoneSvg` | `function hormoneSvg(` |
| 4,534 | `flameSvg` | `function flameSvg(` |
| 4,537 | `clockSvg` | `function clockSvg(` |
| 4,538 | `gearSvg` | `function gearSvg(` |
| 4,546 | `thermoSvg` | `function thermoSvg(` |
| 4,549 | `trendUpSvg` | `function trendUpSvg(` |
| 4,551 | `ecgSvg` | `function ecgSvg(` |
| 4,553 | `circulationSvg` | `function circulationSvg(` |
| 4,554 | `weatherSvg` | `function weatherSvg(` |
| 4,562 | `moodSvg` | `function moodSvg(` |
| 4,566 | `boltSvg` | `function boltSvg(` |
| 4,567 | `houseSvg` | `function houseSvg(` |
| 4,570 | `sunriseSvg` | `function sunriseSvg(` |
| 4,574 | `umbrellaSvg` | `function umbrellaSvg(` |
| 4,578 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 4,584_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,585 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,586 | `dsrHistory` | `var dsrHistory =` |
| 4,587 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,588 | `savHistory` | `var savHistory =` |
| 4,591 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,600 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,601 | `dsrNow` | `var dsrNow =` |
| 4,602 | `savNow` | `var savNow =` |
| 4,603 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,604 | `householdsWord` | `function householdsWord(` |
| 4,611 | `householdsNow` | `var householdsNow =` |
| 4,612 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,629 | `savInfoHtml` | `function savInfoHtml(` |
| 4,647 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,654 | `curveNow` | `var curveNow =` |
| 4,655 | `curveTag` | `var curveTag =` |
| 4,656 | `curveSub` | `var curveSub =` |
| 4,657 | `curvePct` | `function curvePct(` |
| 4,658 | `curveNoteFull` | `var curveNoteFull =` |
| 4,673 | `curveDetailHtml` | `function curveDetailHtml(` |
| 4,677 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,683 | `marketCycles` | `var marketCycles =` |
| 4,711 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,713_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,714 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,715 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 4,720_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,721 | `slopeOf` | `function slopeOf(` |
| 4,726 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,727 | `readSeason` | `function readSeason(` |
| 4,746 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,747 | `qLabel` | `function qLabel(` |
| 4,762 | `regimeTrack` | `function regimeTrack(` |
| 4,782 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,784_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,785 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,786 | `seasonTitle` | `function seasonTitle(` |
| 4,787 | `monthLabel` | `function monthLabel(` |
| 4,788 | `cycleModel` | `function cycleModel(` |
| 4,825 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,833 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,839 | `nowModel` | `var nowModel =` |
| 4,840 | `readingNow` | `var readingNow =` |
| 4,841 | `cpiNow` | `var cpiNow =` |
| 4,842 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,843 | `currentSeason` | `var currentSeason =` |
| 4,844 | `seasonWhy` | `var seasonWhy =` |
| 4,846 | `seasonGroup` | `function seasonGroup(` |
| 4,849 | `vitalRingSvg` | `function vitalRingSvg(` |
| 4,860 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 4,861 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 4,862 | `spreadLabel` | `function spreadLabel(` |
| 4,866 | `policyFacts` | `function policyFacts(` |
| 4,873 | `policyFactRows` | `function policyFactRows(` |
| 4,879 | `allSources` | `var allSources =` |
| 4,893 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 4,905_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,906 | `SVG_NS` | `var SVG_NS =` |
| 4,907 | `svgEl` | `function svgEl(` |
| 4,912 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 4,946_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,947 | `clampPct` | `function clampPct(` |
| 4,950 | `detailTexts` | `var detailTexts =` |
| 4,951 | `detailSlots` | `var detailSlots =` |
| 4,952 | `detailSlot` | `function detailSlot(` |
| 4,962 | `facts` | `function facts(` |
| 4,963 | `factsFrom` | `function factsFrom(` |
| 4,967 | `expandBtn` | `function expandBtn(` |
| 4,971 | `sheetRenderers` | `var sheetRenderers =` |
| 4,972 | `pageMode` | `var pageMode =` |
| 4,977 | `pageCycles` | `var pageCycles =` |
| 4,982 | `pageRange` | `var pageRange =` |
| 4,988 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,017_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,020 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,021_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,022 | `subjectRow` | `function subjectRow(` |
| 5,032 | `subjectIcon` | `function subjectIcon(` |
| 5,033 | `srcHtml` | `function srcHtml(` |
| 5,034 | `TIMING` | `var TIMING =` |
| 5,040 | `timingMark` | `function timingMark(` |
| 5,048 | `timingPill` | `function timingPill(` |
| 5,057 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,065 | `seatPageFoot` | `function seatPageFoot(` |
| 5,077 | `timingMembers` | `var timingMembers =` |
| 5,078 | `registerTiming` | `function registerTiming(` |
| 5,080 | `headHtml` | `function headHtml(` |
| 5,088 | `heldHighlights` | `var heldHighlights =` |
| 5,089 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,116_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,117 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,118 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,126 | `withLatestPoint` | `function withLatestPoint(` |
| 5,131 | `pressureMaturities` | `function pressureMaturities(` |
| 5,155 | `registerFlowPages` | `function registerFlowPages(` |
| 5,214 | `renderPressureRow` | `function renderPressureRow(` |
| 5,222 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,241 | `ylmColumns` | `function ylmColumns(` |
| 5,261 | `ylmFitLine` | `function ylmFitLine(` |
| 5,273 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,418_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,419 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,456_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,457 | `spreadSeries` | `function spreadSeries(` |
| 5,501 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,625_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,626 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,652_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,653 | `drawHznHead` | `function drawHznHead(` |
| 5,668 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,730_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,731 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,739_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,740 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 5,839_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,840 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 5,912_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,913 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 5,960_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,961 | `totalRiseIn` | `function totalRiseIn(` |
| 5,971 | `eraInflation` | `function eraInflation(` |
| 5,982 | `eraGrowth` | `function eraGrowth(` |
| 5,998 | `fmtSigned` | `function fmtSigned(` |
| 5,999 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,000 | `growthShown` | `function growthShown(` |
| 6,001 | `growthShownCap` | `function growthShownCap(` |
| 6,002 | `phaseClass` | `function phaseClass(` |
| 6,003 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,008 | `cycleViewEl` | `var cycleViewEl =` |
| 6,009 | `shownEra` | `var shownEra =` |
| 6,010 | `calendarReset` | `var calendarReset =` |
| 6,011 | `metricPageReset` | `var metricPageReset =` |
| 6,012 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,013 | `topbarBack` | `var topbarBack =` |
| 6,014 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,021_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,022 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,103_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,104 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,122_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,123 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,144_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,146 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,147 | `hubSet` | `function hubSet(` |
| 6,158 | `quarterPopup` | `function quarterPopup(` |
| 6,181 | `hubShowDefault` | `function hubShowDefault(` |
| 6,189 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,195 | `hubShowYear` | `function hubShowYear(` |
| 6,205 | `renderCycleDial` | `function renderCycleDial(` |
| 6,286 | `m2Step` | `function m2Step(` |
| 6,289 | `heatStep` | `function heatStep(` |
| 6,293 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,305_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,306 | `renderCycleView` | `function renderCycleView(` |

### The economy the Growth chart draws

_line 6,311_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,312 | `peerChosen` | `function peerChosen(` |
| 6,313 | `peerReaches` | `function peerReaches(` |
| 6,339 | `shownEraModel` | `var shownEraModel =` |
| 6,340 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,342_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,343 | `stripGroupName` | `var stripGroupName =` |
| 6,344 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,372 | `marketStripHtml` | `function marketStripHtml(` |
| 6,406 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,407 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,436_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,437 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,443 | `INDICATOR_GROUP` | `var INDICATOR_GROUP =` |
| 6,449 | `SPLIT_PERIOD` | `var SPLIT_PERIOD =` |
| 6,450 | `debtSvg` | `function debtSvg(` |
| 6,451 | `interestSvg` | `function interestSvg(` |
| 6,453 | `budgetSvg` | `function budgetSvg(` |
| 6,455 | `lede` | `function lede(` |
| 6,456 | `periodOf` | `function periodOf(` |
| 6,457 | `qLast` | `function qLast(` |
| 6,458 | `meterWord` | `function meterWord(` |
| 6,459 | `splitSpecs` | `function splitSpecs(` |
| 6,479 | `productivitySpec` | `function productivitySpec(` |
| 6,488 | `splitMid` | `function splitMid(` |
| 6,489 | `splitInfo` | `function splitInfo(` |
| 6,493 | `quarterTicks` | `function quarterTicks(` |
| 6,498 | `drawSplit` | `function drawSplit(` |
| 6,515 | `mountSplit` | `function mountSplit(` |
| 6,531 | `splitPeek` | `function splitPeek(` |
| 6,539 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,547 | `deficitPeek` | `function deficitPeek(` |
| 6,553 | `catSheet` | `function catSheet(` |
| 6,558 | `groupId` | `function groupId(` |
| 6,559 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,560 | `seatGroups` | `function seatGroups(` |
| 6,563 | `groupSheet` | `function groupSheet(` |
| 6,573 | `appendPicks` | `function appendPicks(` |
| 6,581 | `categoryCats` | `function categoryCats(` |

### The split indicators' insights

_line 6,599_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,600 | `buffettInsight` | `function buffettInsight(` |
| 6,615 | `debtInsight` | `function debtInsight(` |
| 6,630 | `productivityInsight` | `function productivityInsight(` |
| 6,640 | `interestInsight` | `function interestInsight(` |
| 6,655 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,686 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,711 | `activityStackHtml` | `function activityStackHtml(` |
| 6,721 | `seatTemperature` | `function seatTemperature(` |
| 6,729 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,765_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,766 | `partsOf` | `function partsOf(` |
| 6,775 | `discOf` | `function discOf(` |
| 6,778 | `authored` | `function authored(` |
| 6,779 | `registerRoster` | `function registerRoster(` |
| 6,813 | `indRow` | `function indRow(` |
| 6,817 | `IND_ORDER` | `var IND_ORDER =` |
| 6,818 | `indGroupRow` | `function indGroupRow(` |
| 6,823 | `indRows` | `function indRows(` |
| 6,837 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 6,846_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,847 | `NAV` | `var NAV =` |
| 6,848 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 6,942_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,943 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 6,991_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,992 | `fmtDay` | `function fmtDay(` |
| 6,993 | `qPretty` | `function qPretty(` |
| 6,994 | `DATED_UNIT` | `var DATED_UNIT =` |
| 6,995 | `peekArt` | `function peekArt(` |
| 6,996 | `indPeriod` | `function indPeriod(` |
| 7,005 | `catItem` | `function catItem(` |
| 7,055 | `insightCirculation` | `function insightCirculation(` |
| 7,088 | `insightWeather` | `function insightWeather(` |
| 7,131 | `CAT_MINI` | `var CAT_MINI =` |
| 7,134 | `placeSignPair` | `function placeSignPair(` |
| 7,166 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,182 | `buildCategories` | `function buildCategories(` |
| 7,224 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,266_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,267 | `capeFmt1` | `function capeFmt1(` |
| 7,268 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 7,269 | `GDP_STOPS` | `var GDP_STOPS =` |
| 7,270 | `VAL_STOPS` | `var VAL_STOPS =` |
| 7,271 | `DEF_STOPS` | `var DEF_STOPS =` |
| 7,272 | `qShort` | `function qShort(` |
| 7,273 | `yoyPairs` | `function yoyPairs(` |
| 7,283 | `actCycleMonths` | `function actCycleMonths(` |
| 7,291 | `householdsHighlights` | `function householdsHighlights(` |
| 7,310 | `redrawSheet` | `function redrawSheet(` |
| 7,314 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,378 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,417 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,467 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,497 | `valuationHighlights` | `function valuationHighlights(` |
| 7,510 | `tempHighlights` | `function tempHighlights(` |
| 7,527 | `gdpHighlights` | `function gdpHighlights(` |
| 7,542 | `renderMetricPages` | `function renderMetricPages(` |
| 7,552 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,565_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,566 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,567 | `cycleDataOn` | `function cycleDataOn(` |
| 7,568 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,588 | `wireCycleData` | `function wireCycleData(` |
| 7,603 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,648_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,649 | `eraOpen` | `var eraOpen =` |
| 7,650 | `kT` | `function kT(` |
| 7,654 | `eraReading` | `function eraReading(` |
| 7,666 | `eraFig` | `function eraFig(` |
| 7,673 | `eraValue` | `function eraValue(` |
| 7,679 | `eraRange` | `function eraRange(` |
| 7,684 | `eraMini` | `function eraMini(` |
| 7,689 | `eraCard` | `function eraCard(` |
| 7,708 | `eraShow` | `function eraShow(` |
| 7,718 | `enterEra` | `function enterEra(` |
| 7,725 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,732_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,733 | `rosterGroups` | `function rosterGroups(` |
| 7,761 | `__roster` | `var __roster =` |
| 7,762 | `readingRoster` | `function readingRoster(` |
| 7,783 | `readFig` | `function readFig(` |
| 7,788 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 7,795_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,796 | `cycleSymptoms` | `function cycleSymptoms(` |
| 7,820 | `placeWords` | `function placeWords(` |
| 7,824 | `symptomNote` | `function symptomNote(` |
| 7,831 | `symptomRow` | `function symptomRow(` |
| 7,838 | `cycleTrack` | `function cycleTrack(` |
| 7,853 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 7,861_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,862 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 7,911_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,912 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 7,943_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,944 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,989–1,992 | `LIVE_CACHE` | Live data without a render refactor |
| 4,322–4,335 | `horizonRead` | A series' highest reading within a span |
| 4,748–4,761 | `seasonTrackAll` | The season, computed |
| 4,777–4,781 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,398 |
| `desire-range` | 5,206 |
| `fear-range` | 5,883 |
| `hormones-range` | 5,772 |
| `hzn-range` | 5,693 |
| `pressure-range` | 2,057 |
| `pulse-range` | 5,173 |
| `sheet-marker-deficit` | 7,395 |
| `sheet-metric-gdp` | 7,340 |
| `sheet-metric-households` | 7,419 |
| `sheet-metric-temp` | 7,315 |
| `sheet-metric-valuation` | 7,440 |
| `sheet-sign-activity` | 7,380 |
| `sheet-sign-desire` | 5,207 |
| `sheet-sign-horizon` | 5,694 |
| `sheet-sign-hormones` | 5,773 |
| `sheet-sign-pressure` | 5,410 |
| `sheet-sign-pulse` | 5,172 |
| `sheet-sign-sentiment` | 5,884 |
| `sheet-sign-volume` | 5,190 |
| `volume-range` | 5,191 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,402 |
| `desire-range` | 5,195 |
| `fear-range` | 5,852 |
| `hzn-range` | 5,678 |
| `pressure-range` | 5,379 |
| `pulse-range` | 5,159 |
| `sheet-metric-gdp` | 7,341 |
| `sheet-metric-temp` | 7,316 |
| `sheet-metric-valuation` | 7,441 |
| `volume-range` | 5,177 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,077 |
| `sheet-metric-gdp` | 3,078 |
| `sheet-sign-activity` | 3,079 |
| `sheet-metric-valuation` | 3,080 |
| `sheet-metric-households` | 3,081 |
| `deficit-range` | 3,082 |
| `volume-range` | 3,083 |
| `pulse-range` | 3,084 |
| `hzn-range` | 3,085 |
| `desire-range` | 3,086 |
| `fear-range` | 3,087 |
| `hormones-range` | 3,088 |
| `pressure-range` | 3,089 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 158 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 247 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 283 | season strip |
| 310 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 379 | tab bar (app-style segmented navigation) |
| 414 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 430 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 501 | journal (editorial content tab) |
| 507 | content tab: reading companion |
| 556 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 745 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 820 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 893 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,068 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,083 | The symptoms: a cycle's years against today |
| 1,160 | hero: yield curve |
| 1,193 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,212 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,237 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,245 | long cycle (structural layer) |
| 1,252 | indicator grid |
| 1,278 | info icon + popover (progressive disclosure for longer notes) |
| 1,292 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,375 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (106), which is what the renderers fill:

| Line | id |
|---|---|
| 1,391 | `topbar-back` |
| 1,394 | `topbar-title` |
| 1,395 | `menu-btn` |
| 1,409 | `main` |
| 1,412 | `cycle-view` |
| 1,415 | `cycle-kicker` |
| 1,418 | `cycle-dial` |
| 1,420 | `season-wheel-hub-date` |
| 1,421 | `season-wheel-hub-theme` |
| 1,422 | `season-wheel-hub-detail` |
| 1,430 | `today-analysis` |
| 1,431 | `peek-row` |
| 1,432 | `sheet-metric-temp` |
| 1,433 | `temp-timing` |
| 1,434 | `temp-chart` |
| 1,435 | `temp-rangebar` |
| 1,437 | `temp-head` |
| 1,438 | `temp-history` |
| 1,439 | `temp-hist-tooltip` |
| 1,440 | `temp-trend` |
| 1,442 | `temp-highlights` |
| 1,444 | `sheet-metric-gdp` |
| 1,445 | `gdp-timing` |
| 1,446 | `gdp-chart` |
| 1,447 | `gdp-rangebar` |
| 1,449 | `gdp-head` |
| 1,450 | `gdp-history` |
| 1,451 | `gdp-hist-tooltip` |
| 1,452 | `gdp-yoy` |
| 1,453 | `gdp-trend` |
| 1,455 | `gdp-highlights` |
| 1,459 | `sheet-marker-deficit` |
| 1,461 | `sheet-metric-households` |
| 1,462 | `households-timing` |
| 1,463 | `households-chart` |
| 1,464 | `households-highlights` |
| 1,467 | `sheet-metric-valuation` |
| 1,468 | `valuation-timing` |
| 1,469 | `valuation-chart` |
| 1,470 | `valuation-highlights` |
| 1,477 | `subj-value-hormones` |
| 1,478 | `subj-say-hormones` |
| 1,484 | `hormones-history` |
| 1,485 | `hormones-insights` |
| 1,494 | `subj-value-horizon` |
| 1,495 | `subj-say-horizon` |
| 1,496 | `subj-spark-horizon` |
| 1,502 | `hzn-timeline` |
| 1,504 | `hzn-head` |
| 1,505 | `spread-history-shell` |
| 1,506 | `spread-history-svg` |
| 1,507 | `spread-history-tooltip` |
| 1,509 | `hzn-trend` |
| 1,511 | `horizon-insights` |
| 1,520 | `subj-value-pressure` |
| 1,521 | `subj-say-pressure` |
| 1,527 | `pressure-timeline` |
| 1,529 | `pressure-head` |
| 1,530 | `ylm-shell` |
| 1,531 | `ylm-svg` |
| 1,532 | `ylm-tooltip` |
| 1,534 | `ylm-trend` |
| 1,536 | `pressure-insights` |
| 1,543 | `subj-ring-sentiment` |
| 1,546 | `subj-value-sentiment` |
| 1,547 | `subj-say-sentiment` |
| 1,548 | `subj-spark-sentiment` |
| 1,554 | `fear-history` |
| 1,555 | `curve-highlights` |
| 1,561 | `signs-list` |
| 1,567 | `calendar-list` |
| 1,574 | `cycle-data` |
| 1,576 | `cycle-legend` |
| 1,577 | `cycle-list` |
| 1,578 | `cycle-more` |
| 1,579 | `cycle-more-label` |
| 1,584 | `calendar-cycle` |
| 1,585 | `calendar-cycle-slot` |
| 1,606 | `search-home` |
| 1,608 | `search-input` |
| 1,610 | `search-list` |
| 1,614 | `more-menu` |
| 1,617 | `menu-back` |
| 1,631 | `sources-open` |
| 1,639 | `appearance-current` |
| 1,645 | `sheet-howto` |
| 1,688 | `sheet-book` |
| 1,719 | `seasons-kicker` |
| 1,721 | `seasons-rows` |
| 1,724 | `framework-kicker` |
| 1,727 | `framework-rows` |
| 1,737 | `sheet-appearance` |
| 1,745 | `theme-toggle` |
| 1,752 | `sheet-contact` |
| 1,761 | `contact-form` |
| 1,762 | `contact-title` |
| 1,763 | `contact-message` |
| 1,765 | `contact-hint` |
| 1,766 | `contact-send` |
| 1,772 | `sheet-sources` |
| 1,775 | `sources-back` |
| 1,780 | `asof-text` |
| 1,781 | `sources-groups` |
| 1,787 | `detail-backdrop` |
| 1,789 | `detail-modal-close` |
| 1,790 | `detail-modal-body` |

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

