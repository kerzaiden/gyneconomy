# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,366 lines**, about 638 KB, roughly **181 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `10b3bc9` on 2026-10-01.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,397 | the whole stylesheet, every token and rule |
| **Markup** | 1,398–1,804 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,805–8,333 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,334–8,366 | </body></html> |

Counts: **385** top-level functions, **189** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,805_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,807 | `byId` | `function byId(` |
| 1,815 | `byIdMaybe` | `function byIdMaybe(` |
| 1,816 | `put` | `function put(` |
| 1,821 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,823_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,824 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,825 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,826 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,827 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,831 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,836_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,837 | `wheelMeta` | `var wheelMeta =` |
| 1,845 | `seasonOverride` | `var seasonOverride =` |
| 1,846 | `cycleNowNote` | `var cycleNowNote =` |
| 1,848 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,926 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,967 | `gdpLevels` | `var gdpLevels =` |
| 1,976 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,977 | `volatilityHistory` | `var volatilityHistory =` |
| 1,979 | `fiscalHistory` | `var fiscalHistory =` |
| 1,985 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,987 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,997 | `productivityHistory` | `var productivityHistory =` |
| 1,999 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |

### Live data without a render refactor

_line 2,001_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,006 | `merge` | `function merge(` |
| 2,013 | `LIVE` | `function LIVE(` |
| 2,027 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,030_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,032 | `paintReading` | `function paintReading(` |
| 2,049 | `repaintVolatility` | `function repaintVolatility(` |
| 2,053 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,061 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,066 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,070 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,075_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,076 | `READINGS` | `var READINGS =` |
| 2,131 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,132 | `KINDS` | `var KINDS =` |
| 2,133 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,147 | `receive` | `function receive(` |
| 2,163 | `liveAsOf` | `var liveAsOf =` |
| 2,164 | `fmtAsOf` | `function fmtAsOf(` |
| 2,169 | `applyLive` | `function applyLive(` |
| 2,182 | `shapeOk` | `function shapeOk(` |
| 2,189 | `repaintPolicy` | `function repaintPolicy(` |
| 2,195 | `GYN` | `var GYN =` |
| 2,222 | `refreshLiveData` | `function refreshLiveData(` |
| 2,240 | `fetchSiteData` | `function fetchSiteData(` |
| 2,256 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,261_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,262 | `yieldCurve` | `var yieldCurve =` |
| 2,268 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,269 | `curveAsOf` | `function curveAsOf(` |
| 2,274 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,275 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,280 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,282_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,283 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,284 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,285 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,286 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,287 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,289_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,290 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,296 | `uninvLagToday` | `var uninvLagToday =` |
| 2,301 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,307 | `gdpPeers` | `var gdpPeers =` |
| 2,348 | `gdpSrc` | `var gdpSrc =` |
| 2,349 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,355 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,384_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,386 | `productivityReading` | `var productivityReading =` |

### The deficit, year by year

_line 2,399_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,400 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,401 | `deficitHistory` | `var deficitHistory =` |
| 2,404 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,405 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,407 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,416_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,417 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,427_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,428 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,431 | `timelineSpan` | `function timelineSpan(` |
| 2,436 | `timelineFor` | `function timelineFor(` |
| 2,447 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,453_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,454 | `windowScale` | `function windowScale(` |
| 2,469 | `windowYears` | `function windowYears(` |
| 2,477 | `refName` | `function refName(` |
| 2,481 | `histReadEnsure` | `function histReadEnsure(` |
| 2,501 | `histReadFill` | `function histReadFill(` |
| 2,551 | `histAxisEnds` | `function histAxisEnds(` |
| 2,562 | `histLegend` | `function histLegend(` |
| 2,622 | `refitHistory` | `function refitHistory(` |
| 2,632 | `wireHistHover` | `function wireHistHover(` |
| 2,669 | `mWindowFrom` | `function mWindowFrom(` |
| 2,673 | `qWindowFrom` | `function qWindowFrom(` |
| 2,677 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,678 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,680 | `DEF_1983` | `var DEF_1983 =` |
| 2,681 | `defFrom` | `function defFrom(` |
| 2,686 | `deficitChart` | `function deficitChart(` |
| 2,754 | `deficitBlock` | `function deficitBlock(` |
| 2,794 | `buffettHistory` | `var buffettHistory =` |
| 2,796 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,797 | `hyDates` | `var hyDates =` |
| 2,798 | `hyOas` | `var hyOas =` |
| 2,799 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,806 | `hyAt` | `function hyAt(` |
| 2,810 | `hyLabel` | `function hyLabel(` |
| 2,811 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 2,812 | `hyNum` | `function hyNum(` |
| 2,813 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,821 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,831 | `capeHistory` | `var capeHistory =` |
| 2,833 | `longCycleSrc` | `var longCycleSrc =` |
| 2,849 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,863_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,864 | `sentiment` | `var sentiment =` |
| 2,880 | `valuation` | `var valuation =` |
| 2,901 | `valRow` | `function valRow(` |
| 2,906 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,909 | `coincident` | `var coincident =` |
| 2,959 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,965 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,966 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,967 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,969_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,970 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,971 | `m2vHistory` | `var m2vHistory =` |
| 2,987 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,041 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,082_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,083 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,084 | `DOTS` | `var DOTS =` |
| 3,086 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,101 | `headPickRow` | `function headPickRow(` |
| 3,107 | `histHead` | `function histHead(` |
| 3,122 | `headNoteIdx` | `var headNoteIdx =` |
| 3,123 | `headMenuHtml` | `function headMenuHtml(` |
| 3,148 | `headMenuFor` | `var headMenuFor =` |
| 3,149 | `headSubFor` | `var headSubFor =` |
| 3,150 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,181 | `histNote` | `function histNote(` |
| 3,182 | `meterFlagged` | `function meterFlagged(` |
| 3,189 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,212 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,226 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,239 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,244 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,259 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,273 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,292 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,323 | `desireBlock` | `function desireBlock(` |
| 3,334 | `volumeBlock` | `function volumeBlock(` |
| 3,346 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,358 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,365_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,366 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,367 | `m2Level` | `var m2Level =` |
| 3,388 | `m2Yoy` | `var m2Yoy =` |
| 3,389 | `M2_NORM` | `var M2_NORM =` |
| 3,391 | `volumeVerdict` | `function volumeVerdict(` |
| 3,399 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,400 | `unempHistory` | `var unempHistory =` |
| 3,406 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,415 | `NROU_NOW` | `var NROU_NOW =` |
| 3,416 | `unempState` | `function unempState(` |
| 3,422 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,476_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,477 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,486 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,544 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,545 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,546 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,547_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,549 | `householdsChart` | `function householdsChart(` |
| 3,598 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,653 | `GDP_NORM` | `var GDP_NORM =` |
| 3,654 | `gdpNowQ` | `var gdpNowQ =` |
| 3,655 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,677 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,730 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,777 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,785 | `velocityVerdict` | `function velocityVerdict(` |
| 3,793 | `derivePulseTag` | `function derivePulseTag(` |
| 3,799 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,831_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,832 | `seasonReading` | `var seasonReading =` |
| 3,876 | `frameworkRows` | `var frameworkRows =` |
| 3,886 | `vixRow` | `var vixRow =` |
| 3,887 | `VIX_CALM` | `var VIX_CALM =` |
| 3,888 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,892 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,899_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,900 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,909_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,910 | `calendarTodayY` | `var calendarTodayY =` |
| 3,912 | `vix3mClose` | `var vix3mClose =` |
| 3,913 | `fearCurve` | `function fearCurve(` |
| 3,918 | `curveVerdict` | `function curveVerdict(` |
| 3,923 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,932_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,933 | `modeBar` | `function modeBar(` |
| 3,940 | `pickerOpen` | `var pickerOpen =` |
| 3,941 | `cycleByName` | `function cycleByName(` |
| 3,945 | `openCycle` | `function openCycle(` |
| 3,949 | `cycleSlice` | `function cycleSlice(` |
| 3,957 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,965 | `cycleMonths` | `function cycleMonths(` |
| 3,973 | `histControls` | `function histControls(` |
| 3,982 | `cycLabel` | `function cycLabel(` |
| 3,986 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,991 | `cyclePicker` | `function cyclePicker(` |
| 4,010 | `rangeBar` | `function rangeBar(` |
| 4,017 | `trendOf` | `function trendOf(` |
| 4,032 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,036 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,047_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,048 | `yearOf` | `function yearOf(` |
| 4,049 | `mean` | `function mean(` |

### The record rows

_line 4,050_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,051 | `headSigma` | `function headSigma(` |
| 4,056 | `atQuarter` | `function atQuarter(` |
| 4,057 | `atMonth` | `function atMonth(` |
| 4,058 | `ordinal` | `function ordinal(` |
| 4,059 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,062_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,063 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,070 | `moreRow` | `function moreRow(` |
| 4,076 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,077 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,083_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,084 | `xLabelOf` | `function xLabelOf(` |
| 4,094 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,112_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,113 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,121 | `vGrid` | `function vGrid(` |
| 4,125 | `COL_FILL` | `var COL_FILL =` |
| 4,126 | `colPath` | `function colPath(` |
| 4,131 | `colWidth` | `function colWidth(` |
| 4,136 | `AXIS` | `var AXIS =` |
| 4,137 | `histFrame` | `function histFrame(` |
| 4,144 | `xLabel` | `function xLabel(` |
| 4,147 | `crossLine` | `function crossLine(` |
| 4,150 | `zeroRule` | `function zeroRule(` |
| 4,153 | `meanRule` | `function meanRule(` |
| 4,154 | `pendingGeom` | `var pendingGeom =` |
| 4,155 | `publishGeom` | `function publishGeom(` |
| 4,156 | `attachHistory` | `function attachHistory(` |
| 4,165 | `histBar` | `function histBar(` |
| 4,168 | `histTip` | `function histTip(` |
| 4,169 | `avgRule` | `function avgRule(` |
| 4,172 | `vhOpen` | `function vhOpen(` |
| 4,173 | `chartAxes` | `function chartAxes(` |
| 4,203 | `divergeChart` | `function divergeChart(` |
| 4,237 | `pairChart` | `function pairChart(` |

### A series' highest reading within a span

_line 4,265_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,267 | `maxIn` | `function maxIn(` |
| 4,272 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,273 | `PEEK_W` | `var PEEK_W =` |
| 4,274 | `PEEK_H` | `var PEEK_H =` |
| 4,275 | `colPeek` | `function colPeek(` |
| 4,293 | `meterPeek` | `function meterPeek(` |
| 4,310 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,315 | `pressureZone` | `function pressureZone(` |
| 4,321 | `HZN_BACK` | `var HZN_BACK =` |
| 4,322 | `hznLast` | `function hznLast(` |
| 4,323 | `hznBack` | `function hznBack(` |
| 4,324 | `horizonWord` | `function horizonWord(` |
| 4,344 | `HZN_METERS` | `var HZN_METERS =` |
| 4,352 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,373 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,378 | `RISK_RISK` | `var RISK_RISK =` |
| 4,383 | `riskCell` | `function riskCell(` |
| 4,384 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,414 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,439_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,440 | `pulseClipN` | `var pulseClipN =` |
| 4,441 | `beatPath` | `function beatPath(` |
| 4,458 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,472 | `pulsePeek` | `function pulsePeek(` |
| 4,475 | `pulseBlock` | `function pulseBlock(` |
| 4,492 | `CHEV` | `var CHEV =` |
| 4,493 | `peekCard` | `function peekCard(` |
| 4,512 | `dropSvg` | `function dropSvg(` |
| 4,514 | `volumeSvg` | `function volumeSvg(` |
| 4,518 | `gaugeSvg` | `function gaugeSvg(` |
| 4,522 | `diamondSvg` | `function diamondSvg(` |
| 4,526 | `sproutSvg` | `function sproutSvg(` |
| 4,534 | `markSvg` | `function markSvg(` |
| 4,537 | `hormoneSvg` | `function hormoneSvg(` |
| 4,542 | `flameSvg` | `function flameSvg(` |
| 4,545 | `clockSvg` | `function clockSvg(` |
| 4,546 | `gearSvg` | `function gearSvg(` |
| 4,554 | `thermoSvg` | `function thermoSvg(` |
| 4,557 | `trendUpSvg` | `function trendUpSvg(` |
| 4,559 | `ecgSvg` | `function ecgSvg(` |
| 4,561 | `circulationSvg` | `function circulationSvg(` |
| 4,562 | `weatherSvg` | `function weatherSvg(` |
| 4,570 | `moodSvg` | `function moodSvg(` |
| 4,574 | `boltSvg` | `function boltSvg(` |
| 4,575 | `houseSvg` | `function houseSvg(` |
| 4,578 | `sunriseSvg` | `function sunriseSvg(` |
| 4,582 | `volatilitySvg` | `function volatilitySvg(` |
| 4,587 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 4,593_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,594 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,595 | `dsrHistory` | `var dsrHistory =` |
| 4,596 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,597 | `savHistory` | `var savHistory =` |
| 4,600 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,609 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,610 | `dsrNow` | `var dsrNow =` |
| 4,611 | `savNow` | `var savNow =` |
| 4,612 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,613 | `householdsWord` | `function householdsWord(` |
| 4,620 | `householdsNow` | `var householdsNow =` |
| 4,621 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,638 | `savInfoHtml` | `function savInfoHtml(` |
| 4,656 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,663 | `curveSub` | `var curveSub =` |
| 4,664 | `vixPct` | `function vixPct(` |
| 4,668 | `curveNoteFull` | `var curveNoteFull =` |
| 4,679 | `volatilityRing` | `function volatilityRing(` |
| 4,684 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,685 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,700 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,706 | `marketCycles` | `var marketCycles =` |
| 4,734 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,736_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,737 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,738 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 4,743_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,744 | `slopeOf` | `function slopeOf(` |
| 4,749 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,750 | `readSeason` | `function readSeason(` |
| 4,769 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,770 | `qLabel` | `function qLabel(` |
| 4,785 | `regimeTrack` | `function regimeTrack(` |
| 4,805 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,807_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,808 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,809 | `seasonTitle` | `function seasonTitle(` |
| 4,810 | `monthLabel` | `function monthLabel(` |
| 4,811 | `cycleModel` | `function cycleModel(` |
| 4,848 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,856 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,862 | `nowModel` | `var nowModel =` |
| 4,863 | `readingNow` | `var readingNow =` |
| 4,864 | `cpiNow` | `var cpiNow =` |
| 4,865 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,866 | `currentSeason` | `var currentSeason =` |
| 4,867 | `seasonWhy` | `var seasonWhy =` |
| 4,869 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,871_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,872 | `CALM` | `var CALM =` |
| 4,873 | `FEELINGS` | `var FEELINGS =` |
| 4,874 | `seasonHalf` | `function seasonHalf(` |
| 4,875 | `rankToDate` | `function rankToDate(` |
| 4,879 | `readFeeling` | `function readFeeling(` |
| 4,890 | `readPosture` | `function readPosture(` |
| 4,898 | `marketCache` | `var marketCache =` |
| 4,899 | `marketMonths` | `function marketMonths(` |
| 4,919 | `seasonInMonth` | `function seasonInMonth(` |
| 4,924 | `stretchRank` | `function stretchRank(` |
| 4,927 | `marketFacts` | `function marketFacts(` |
| 4,938 | `followedCache` | `var followedCache =` |
| 4,939 | `whatFollowed` | `function whatFollowed(` |
| 4,961 | `lastFeeling` | `function lastFeeling(` |
| 4,966 | `diagnoseClose` | `function diagnoseClose(` |
| 4,974 | `diagnoseToday` | `function diagnoseToday(` |
| 4,991 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,002 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,003 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,004 | `spreadLabel` | `function spreadLabel(` |
| 5,008 | `policyFacts` | `function policyFacts(` |
| 5,015 | `policyFactRows` | `function policyFactRows(` |
| 5,021 | `allSources` | `var allSources =` |
| 5,035 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,047_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,048 | `SVG_NS` | `var SVG_NS =` |
| 5,049 | `svgEl` | `function svgEl(` |
| 5,054 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,088_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,089 | `clampPct` | `function clampPct(` |
| 5,092 | `detailTexts` | `var detailTexts =` |
| 5,093 | `detailSlots` | `var detailSlots =` |
| 5,094 | `detailSlot` | `function detailSlot(` |
| 5,104 | `metricSheet` | `function metricSheet(` |
| 5,109 | `ledeHtml` | `function ledeHtml(` |
| 5,110 | `facts` | `function facts(` |
| 5,111 | `factsFrom` | `function factsFrom(` |
| 5,115 | `expandBtn` | `function expandBtn(` |
| 5,119 | `sheetRenderers` | `var sheetRenderers =` |
| 5,120 | `pageMode` | `var pageMode =` |
| 5,125 | `pageCycles` | `var pageCycles =` |
| 5,130 | `pageRange` | `var pageRange =` |
| 5,136 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,165_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,168 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,169_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,170 | `subjectRow` | `function subjectRow(` |
| 5,180 | `subjectIcon` | `function subjectIcon(` |
| 5,181 | `srcHtml` | `function srcHtml(` |
| 5,182 | `TIMING` | `var TIMING =` |
| 5,188 | `timingMark` | `function timingMark(` |
| 5,196 | `timingPill` | `function timingPill(` |
| 5,205 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,213 | `seatPageFoot` | `function seatPageFoot(` |
| 5,225 | `timingMembers` | `var timingMembers =` |
| 5,226 | `registerTiming` | `function registerTiming(` |
| 5,228 | `headHtml` | `function headHtml(` |
| 5,236 | `heldHighlights` | `var heldHighlights =` |
| 5,237 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,264_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,265 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,266 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,274 | `withLatestPoint` | `function withLatestPoint(` |
| 5,279 | `pressureMaturities` | `function pressureMaturities(` |
| 5,303 | `registerFlowPages` | `function registerFlowPages(` |
| 5,362 | `renderPressureRow` | `function renderPressureRow(` |
| 5,370 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,389 | `ylmColumns` | `function ylmColumns(` |
| 5,409 | `ylmFitLine` | `function ylmFitLine(` |
| 5,421 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,566_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,567 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,604_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,605 | `spreadSeries` | `function spreadSeries(` |
| 5,649 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,773_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,774 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,800_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,801 | `drawHznHead` | `function drawHznHead(` |
| 5,816 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,878_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,879 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,887_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,888 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 5,987_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,988 | `renderVolatility` | `function renderVolatility(` |
| 6,037 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,067_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,068 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,115_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,116 | `totalRiseIn` | `function totalRiseIn(` |
| 6,126 | `eraInflation` | `function eraInflation(` |
| 6,137 | `eraGrowth` | `function eraGrowth(` |
| 6,153 | `fmtSigned` | `function fmtSigned(` |
| 6,154 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,155 | `growthShown` | `function growthShown(` |
| 6,156 | `growthShownCap` | `function growthShownCap(` |
| 6,157 | `phaseClass` | `function phaseClass(` |
| 6,158 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,163 | `cycleViewEl` | `var cycleViewEl =` |
| 6,164 | `shownEra` | `var shownEra =` |
| 6,165 | `calendarReset` | `var calendarReset =` |
| 6,166 | `metricPageReset` | `var metricPageReset =` |
| 6,167 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,168 | `topbarBack` | `var topbarBack =` |
| 6,169 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,176_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,177 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,258_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,259 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,277_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,278 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,299_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,301 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,302 | `hubSet` | `function hubSet(` |
| 6,313 | `quarterPopup` | `function quarterPopup(` |
| 6,336 | `hubShowDefault` | `function hubShowDefault(` |
| 6,344 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,350 | `hubShowYear` | `function hubShowYear(` |
| 6,360 | `renderCycleDial` | `function renderCycleDial(` |
| 6,441 | `m2Step` | `function m2Step(` |
| 6,444 | `heatStep` | `function heatStep(` |
| 6,448 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,460_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,461 | `renderCycleView` | `function renderCycleView(` |

### The economy the Growth chart draws

_line 6,466_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,467 | `peerChosen` | `function peerChosen(` |
| 6,468 | `peerReaches` | `function peerReaches(` |
| 6,494 | `shownEraModel` | `var shownEraModel =` |
| 6,495 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,497_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,498 | `stripGroupName` | `var stripGroupName =` |
| 6,499 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,527 | `marketStripHtml` | `function marketStripHtml(` |
| 6,561 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,562 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,591_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,592 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,598 | `INDICATOR_GROUP` | `var INDICATOR_GROUP =` |
| 6,604 | `SPLIT_PERIOD` | `var SPLIT_PERIOD =` |
| 6,605 | `debtSvg` | `function debtSvg(` |
| 6,606 | `interestSvg` | `function interestSvg(` |
| 6,608 | `budgetSvg` | `function budgetSvg(` |
| 6,610 | `lede` | `function lede(` |
| 6,611 | `periodOf` | `function periodOf(` |
| 6,612 | `qLast` | `function qLast(` |
| 6,613 | `meterWord` | `function meterWord(` |
| 6,614 | `splitSpecs` | `function splitSpecs(` |
| 6,634 | `productivitySpec` | `function productivitySpec(` |
| 6,643 | `splitMid` | `function splitMid(` |
| 6,644 | `splitInfo` | `function splitInfo(` |
| 6,648 | `quarterTicks` | `function quarterTicks(` |
| 6,653 | `drawSplit` | `function drawSplit(` |
| 6,670 | `mountSplit` | `function mountSplit(` |
| 6,685 | `splitPeek` | `function splitPeek(` |
| 6,693 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,701 | `deficitPeek` | `function deficitPeek(` |
| 6,707 | `catSheet` | `function catSheet(` |
| 6,712 | `groupId` | `function groupId(` |
| 6,713 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,714 | `seatGroups` | `function seatGroups(` |
| 6,717 | `groupSheet` | `function groupSheet(` |
| 6,727 | `appendPicks` | `function appendPicks(` |
| 6,735 | `categoryCats` | `function categoryCats(` |

### The split indicators' insights

_line 6,753_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,754 | `buffettInsight` | `function buffettInsight(` |
| 6,769 | `debtInsight` | `function debtInsight(` |
| 6,784 | `productivityInsight` | `function productivityInsight(` |
| 6,794 | `interestInsight` | `function interestInsight(` |
| 6,809 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,839 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,864 | `activityStackHtml` | `function activityStackHtml(` |
| 6,874 | `seatTemperature` | `function seatTemperature(` |
| 6,882 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,917_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,918 | `partsOf` | `function partsOf(` |
| 6,927 | `discOf` | `function discOf(` |
| 6,930 | `authored` | `function authored(` |
| 6,931 | `registerRoster` | `function registerRoster(` |
| 6,965 | `indRow` | `function indRow(` |
| 6,969 | `IND_ORDER` | `var IND_ORDER =` |
| 6,970 | `indGroupRow` | `function indGroupRow(` |
| 6,975 | `indRows` | `function indRows(` |
| 6,989 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 6,998_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,999 | `NAV` | `var NAV =` |
| 7,000 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,094_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,095 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,143_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,144 | `fmtDay` | `function fmtDay(` |
| 7,145 | `qPretty` | `function qPretty(` |
| 7,146 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,147 | `peekArt` | `function peekArt(` |
| 7,148 | `indPeriod` | `function indPeriod(` |
| 7,157 | `catItem` | `function catItem(` |
| 7,207 | `insightCirculation` | `function insightCirculation(` |
| 7,240 | `insightWeather` | `function insightWeather(` |
| 7,283 | `CAT_MINI` | `var CAT_MINI =` |
| 7,286 | `placeSignPair` | `function placeSignPair(` |
| 7,318 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,334 | `buildCategories` | `function buildCategories(` |
| 7,369 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,411_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,412 | `capeFmt1` | `function capeFmt1(` |
| 7,413 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 7,414 | `GDP_STOPS` | `var GDP_STOPS =` |
| 7,415 | `VAL_STOPS` | `var VAL_STOPS =` |
| 7,416 | `DEF_STOPS` | `var DEF_STOPS =` |
| 7,417 | `qShort` | `function qShort(` |
| 7,418 | `yoyPairs` | `function yoyPairs(` |
| 7,428 | `actCycleMonths` | `function actCycleMonths(` |
| 7,436 | `householdsHighlights` | `function householdsHighlights(` |
| 7,455 | `redrawSheet` | `function redrawSheet(` |
| 7,459 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,523 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,562 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
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
| 7,708 | `DIAG_SYSTEMS` | `var DIAG_SYSTEMS =` |
| 7,715 | `FEELING_RULES` | `var FEELING_RULES =` |
| 7,724 | `FEELING_STATE` | `var FEELING_STATE =` |
| 7,725 | `POSTURE_STATE` | `var POSTURE_STATE =` |
| 7,726 | `POSTURE_SAYS` | `var POSTURE_SAYS =` |
| 7,733 | `BODY_SAYS` | `var BODY_SAYS =` |
| 7,741 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,746 | `readDoor` | `function readDoor(` |
| 7,754 | `pct` | `function pct(` |
| 7,755 | `symptom` | `function symptom(` |
| 7,756 | `momentumSymptom` | `function momentumSymptom(` |
| 7,760 | `symptomsFor` | `function symptomsFor(` |
| 7,768 | `rosterRows` | `function rosterRows(` |
| 7,773 | `closeFigure` | `function closeFigure(` |
| 7,777 | `eraMove` | `function eraMove(` |
| 7,785 | `analysisFor` | `function analysisFor(` |
| 7,793 | `dxRow` | `function dxRow(` |
| 7,797 | `dxSection` | `function dxSection(` |
| 7,798 | `systemHtml` | `function systemHtml(` |
| 7,801 | `dxHead` | `function dxHead(` |
| 7,806 | `postureLine` | `function postureLine(` |
| 7,810 | `diagnosisInfo` | `function diagnosisInfo(` |
| 7,818 | `assessmentFor` | `function assessmentFor(` |
| 7,828 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,847 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,851 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,852 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,865_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,866 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,867 | `cycleDataOn` | `function cycleDataOn(` |
| 7,868 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,888 | `wireCycleData` | `function wireCycleData(` |
| 7,903 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,948_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,949 | `eraOpen` | `var eraOpen =` |
| 7,950 | `kT` | `function kT(` |
| 7,954 | `eraReading` | `function eraReading(` |
| 7,966 | `eraFig` | `function eraFig(` |
| 7,973 | `eraValue` | `function eraValue(` |
| 7,979 | `eraRange` | `function eraRange(` |
| 7,984 | `eraMini` | `function eraMini(` |
| 7,989 | `eraCard` | `function eraCard(` |
| 8,008 | `eraShow` | `function eraShow(` |
| 8,018 | `enterEra` | `function enterEra(` |
| 8,025 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,032_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,033 | `rosterGroups` | `function rosterGroups(` |
| 8,061 | `__roster` | `var __roster =` |
| 8,062 | `readingRoster` | `function readingRoster(` |
| 8,083 | `readFig` | `function readFig(` |
| 8,088 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,095_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,096 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,120 | `placeWords` | `function placeWords(` |
| 8,124 | `symptomNote` | `function symptomNote(` |
| 8,131 | `symptomRow` | `function symptomRow(` |
| 8,138 | `cycleTrack` | `function cycleTrack(` |
| 8,153 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,161_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,162 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,211_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,212 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,243_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,244 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 2,002–2,005 | `LIVE_CACHE` | Live data without a render refactor |
| 4,330–4,343 | `horizonRead` | A series' highest reading within a span |
| 4,771–4,784 | `seasonTrackAll` | The season, computed |
| 4,800–4,804 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,543 |
| `desire-range` | 5,354 |
| `fear-range` | 6,032 |
| `hormones-range` | 5,920 |
| `hzn-range` | 5,841 |
| `pressure-range` | 2,068 |
| `pulse-range` | 5,321 |
| `sheet-marker-deficit` | 7,540 |
| `sheet-metric-gdp` | 7,485 |
| `sheet-metric-households` | 7,564 |
| `sheet-metric-temp` | 7,460 |
| `sheet-metric-valuation` | 7,585 |
| `sheet-sign-activity` | 7,525 |
| `sheet-sign-desire` | 5,355 |
| `sheet-sign-horizon` | 5,842 |
| `sheet-sign-hormones` | 5,921 |
| `sheet-sign-pressure` | 5,558 |
| `sheet-sign-pulse` | 5,320 |
| `sheet-sign-sentiment` | 6,033 |
| `sheet-sign-volume` | 5,338 |
| `volume-range` | 5,339 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,547 |
| `desire-range` | 5,343 |
| `fear-range` | 5,999 |
| `hzn-range` | 5,826 |
| `pressure-range` | 5,527 |
| `pulse-range` | 5,307 |
| `sheet-metric-gdp` | 7,486 |
| `sheet-metric-temp` | 7,461 |
| `sheet-metric-valuation` | 7,586 |
| `volume-range` | 5,325 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,087 |
| `sheet-metric-gdp` | 3,088 |
| `sheet-sign-activity` | 3,089 |
| `sheet-metric-valuation` | 3,090 |
| `sheet-metric-households` | 3,091 |
| `deficit-range` | 3,092 |
| `volume-range` | 3,093 |
| `pulse-range` | 3,094 |
| `hzn-range` | 3,095 |
| `desire-range` | 3,096 |
| `fear-range` | 3,097 |
| `hormones-range` | 3,098 |
| `pressure-range` | 3,099 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 158 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 247 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 283 | season strip |
| 311 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 380 | tab bar (app-style segmented navigation) |
| 416 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 432 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 503 | journal (editorial content tab) |
| 509 | content tab: reading companion |
| 558 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 756 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 831 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 904 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,079 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,094 | The symptoms: a cycle's years against today |
| 1,171 | hero: yield curve |
| 1,204 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,223 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,248 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,256 | long cycle (structural layer) |
| 1,263 | indicator grid |
| 1,289 | info icon + popover (progressive disclosure for longer notes) |
| 1,303 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,386 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (105), which is what the renderers fill:

| Line | id |
|---|---|
| 1,402 | `topbar-back` |
| 1,405 | `topbar-title` |
| 1,406 | `menu-btn` |
| 1,420 | `main` |
| 1,423 | `cycle-view` |
| 1,426 | `cycle-kicker` |
| 1,429 | `cycle-dial` |
| 1,431 | `season-wheel-hub-date` |
| 1,432 | `season-wheel-hub-theme` |
| 1,433 | `season-wheel-hub-detail` |
| 1,441 | `today-analysis` |
| 1,442 | `peek-row` |
| 1,443 | `sheet-metric-temp` |
| 1,444 | `temp-timing` |
| 1,445 | `temp-chart` |
| 1,446 | `temp-rangebar` |
| 1,448 | `temp-head` |
| 1,449 | `temp-history` |
| 1,450 | `temp-hist-tooltip` |
| 1,451 | `temp-trend` |
| 1,453 | `temp-highlights` |
| 1,455 | `sheet-metric-gdp` |
| 1,456 | `gdp-timing` |
| 1,457 | `gdp-chart` |
| 1,458 | `gdp-rangebar` |
| 1,460 | `gdp-head` |
| 1,461 | `gdp-history` |
| 1,462 | `gdp-hist-tooltip` |
| 1,463 | `gdp-yoy` |
| 1,464 | `gdp-trend` |
| 1,466 | `gdp-highlights` |
| 1,470 | `sheet-marker-deficit` |
| 1,472 | `sheet-metric-households` |
| 1,473 | `households-timing` |
| 1,474 | `households-chart` |
| 1,475 | `households-highlights` |
| 1,478 | `sheet-metric-valuation` |
| 1,479 | `valuation-timing` |
| 1,480 | `valuation-chart` |
| 1,481 | `valuation-highlights` |
| 1,488 | `subj-value-hormones` |
| 1,489 | `subj-say-hormones` |
| 1,495 | `hormones-history` |
| 1,496 | `hormones-insights` |
| 1,505 | `subj-value-horizon` |
| 1,506 | `subj-say-horizon` |
| 1,507 | `subj-spark-horizon` |
| 1,513 | `hzn-timeline` |
| 1,515 | `hzn-head` |
| 1,516 | `spread-history-shell` |
| 1,517 | `spread-history-svg` |
| 1,518 | `spread-history-tooltip` |
| 1,520 | `hzn-trend` |
| 1,522 | `horizon-insights` |
| 1,531 | `subj-value-pressure` |
| 1,532 | `subj-say-pressure` |
| 1,538 | `pressure-timeline` |
| 1,540 | `pressure-head` |
| 1,541 | `ylm-shell` |
| 1,542 | `ylm-svg` |
| 1,543 | `ylm-tooltip` |
| 1,545 | `ylm-trend` |
| 1,547 | `pressure-insights` |
| 1,554 | `subj-ring-sentiment` |
| 1,557 | `subj-value-sentiment` |
| 1,558 | `subj-say-sentiment` |
| 1,559 | `subj-spark-sentiment` |
| 1,565 | `fear-history` |
| 1,566 | `curve-highlights` |
| 1,572 | `signs-list` |
| 1,578 | `calendar-list` |
| 1,585 | `cycle-data` |
| 1,587 | `cycle-legend` |
| 1,588 | `cycle-list` |
| 1,589 | `cycle-more` |
| 1,590 | `cycle-more-label` |
| 1,595 | `calendar-cycle` |
| 1,615 | `search-home` |
| 1,617 | `search-input` |
| 1,619 | `search-list` |
| 1,623 | `more-menu` |
| 1,626 | `menu-back` |
| 1,640 | `sources-open` |
| 1,648 | `appearance-current` |
| 1,654 | `sheet-howto` |
| 1,697 | `sheet-book` |
| 1,728 | `seasons-kicker` |
| 1,730 | `seasons-rows` |
| 1,733 | `framework-kicker` |
| 1,736 | `framework-rows` |
| 1,746 | `sheet-appearance` |
| 1,754 | `theme-toggle` |
| 1,761 | `sheet-contact` |
| 1,770 | `contact-form` |
| 1,771 | `contact-title` |
| 1,772 | `contact-message` |
| 1,774 | `contact-hint` |
| 1,775 | `contact-send` |
| 1,781 | `sheet-sources` |
| 1,784 | `sources-back` |
| 1,789 | `asof-text` |
| 1,790 | `sources-groups` |
| 1,796 | `detail-backdrop` |
| 1,798 | `detail-modal-close` |
| 1,799 | `detail-modal-body` |

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

