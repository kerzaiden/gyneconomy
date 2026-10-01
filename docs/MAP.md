# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,086 lines**, about 620 KB, roughly **176 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `5c64d22` on 2026-10-01.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,386 | the whole stylesheet, every token and rule |
| **Markup** | 1,387–1,795 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,796–8,053 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,054–8,086 | </body></html> |

Counts: **351** top-level functions, **178** top-level vars, **4** top-level IIFEs in the script.

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

_line 1,827_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,828 | `wheelMeta` | `var wheelMeta =` |
| 1,836 | `seasonOverride` | `var seasonOverride =` |
| 1,837 | `cycleNowNote` | `var cycleNowNote =` |
| 1,839 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,917 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,958 | `gdpLevels` | `var gdpLevels =` |
| 1,967 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,968 | `volatilityHistory` | `var volatilityHistory =` |
| 1,970 | `fiscalHistory` | `var fiscalHistory =` |
| 1,976 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,978 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,988 | `productivityHistory` | `var productivityHistory =` |
| 1,990 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |

### Live data without a render refactor

_line 1,992_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,997 | `merge` | `function merge(` |
| 2,004 | `LIVE` | `function LIVE(` |
| 2,018 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,021_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,023 | `paintReading` | `function paintReading(` |
| 2,040 | `repaintVolatility` | `function repaintVolatility(` |
| 2,044 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,052 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,057 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,061 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,066_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,067 | `READINGS` | `var READINGS =` |
| 2,122 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,123 | `KINDS` | `var KINDS =` |
| 2,124 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,138 | `receive` | `function receive(` |
| 2,154 | `liveAsOf` | `var liveAsOf =` |
| 2,155 | `fmtAsOf` | `function fmtAsOf(` |
| 2,160 | `applyLive` | `function applyLive(` |
| 2,173 | `shapeOk` | `function shapeOk(` |
| 2,180 | `repaintPolicy` | `function repaintPolicy(` |
| 2,186 | `GYN` | `var GYN =` |
| 2,213 | `refreshLiveData` | `function refreshLiveData(` |
| 2,231 | `fetchSiteData` | `function fetchSiteData(` |
| 2,247 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,252_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,253 | `yieldCurve` | `var yieldCurve =` |
| 2,259 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,260 | `curveAsOf` | `function curveAsOf(` |
| 2,265 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,266 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,271 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,273_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,274 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,275 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,276 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,277 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,278 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,280_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,281 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,287 | `uninvLagToday` | `var uninvLagToday =` |
| 2,292 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,298 | `gdpPeers` | `var gdpPeers =` |
| 2,339 | `gdpSrc` | `var gdpSrc =` |
| 2,340 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,346 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,375_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,377 | `productivityReading` | `var productivityReading =` |

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

_line 2,418_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,419 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,422 | `timelineSpan` | `function timelineSpan(` |
| 2,427 | `timelineFor` | `function timelineFor(` |
| 2,438 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,444_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,445 | `windowScale` | `function windowScale(` |
| 2,460 | `windowYears` | `function windowYears(` |
| 2,468 | `refName` | `function refName(` |
| 2,472 | `histReadEnsure` | `function histReadEnsure(` |
| 2,492 | `histReadFill` | `function histReadFill(` |
| 2,542 | `histAxisEnds` | `function histAxisEnds(` |
| 2,553 | `histLegend` | `function histLegend(` |
| 2,613 | `refitHistory` | `function refitHistory(` |
| 2,623 | `wireHistHover` | `function wireHistHover(` |
| 2,660 | `mWindowFrom` | `function mWindowFrom(` |
| 2,664 | `qWindowFrom` | `function qWindowFrom(` |
| 2,668 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,669 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,671 | `DEF_1983` | `var DEF_1983 =` |
| 2,672 | `defFrom` | `function defFrom(` |
| 2,677 | `deficitChart` | `function deficitChart(` |
| 2,745 | `deficitBlock` | `function deficitBlock(` |
| 2,785 | `buffettHistory` | `var buffettHistory =` |
| 2,787 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,788 | `hyDates` | `var hyDates =` |
| 2,789 | `hyOas` | `var hyOas =` |
| 2,790 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,797 | `hyAt` | `function hyAt(` |
| 2,801 | `hyLabel` | `function hyLabel(` |
| 2,802 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 2,803 | `hyNum` | `function hyNum(` |
| 2,804 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,812 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,822 | `capeHistory` | `var capeHistory =` |
| 2,824 | `longCycleSrc` | `var longCycleSrc =` |
| 2,840 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,854_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,855 | `sentiment` | `var sentiment =` |
| 2,871 | `valuation` | `var valuation =` |
| 2,892 | `valRow` | `function valRow(` |
| 2,897 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,900 | `coincident` | `var coincident =` |
| 2,950 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,956 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,957 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,958 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,960_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,961 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,962 | `m2vHistory` | `var m2vHistory =` |
| 2,978 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,032 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,073_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,074 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,075 | `DOTS` | `var DOTS =` |
| 3,077 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,092 | `headPickRow` | `function headPickRow(` |
| 3,098 | `histHead` | `function histHead(` |
| 3,113 | `headNoteIdx` | `var headNoteIdx =` |
| 3,114 | `headMenuHtml` | `function headMenuHtml(` |
| 3,139 | `headMenuFor` | `var headMenuFor =` |
| 3,140 | `headSubFor` | `var headSubFor =` |
| 3,141 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,172 | `histNote` | `function histNote(` |
| 3,173 | `meterFlagged` | `function meterFlagged(` |
| 3,180 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,203 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,217 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,230 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,235 | `productivityInfoHtml` | `function productivityInfoHtml(` |
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

_line 3,467_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,468 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,477 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,535 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,536 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,537 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,538_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,540 | `householdsChart` | `function householdsChart(` |
| 3,589 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,644 | `GDP_NORM` | `var GDP_NORM =` |
| 3,645 | `gdpNowQ` | `var gdpNowQ =` |
| 3,646 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,668 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,721 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,768 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,776 | `velocityVerdict` | `function velocityVerdict(` |
| 3,784 | `derivePulseTag` | `function derivePulseTag(` |
| 3,790 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,822_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,823 | `seasonReading` | `var seasonReading =` |
| 3,867 | `frameworkRows` | `var frameworkRows =` |
| 3,877 | `vixRow` | `var vixRow =` |
| 3,878 | `VIX_CALM` | `var VIX_CALM =` |
| 3,879 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,883 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,890_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,891 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,900_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,901 | `calendarTodayY` | `var calendarTodayY =` |
| 3,903 | `vix3mClose` | `var vix3mClose =` |
| 3,904 | `fearCurve` | `function fearCurve(` |
| 3,909 | `curveVerdict` | `function curveVerdict(` |
| 3,914 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,923_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,924 | `modeBar` | `function modeBar(` |
| 3,931 | `pickerOpen` | `var pickerOpen =` |
| 3,932 | `cycleByName` | `function cycleByName(` |
| 3,936 | `openCycle` | `function openCycle(` |
| 3,940 | `cycleSlice` | `function cycleSlice(` |
| 3,948 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,956 | `cycleMonths` | `function cycleMonths(` |
| 3,964 | `histControls` | `function histControls(` |
| 3,973 | `cycLabel` | `function cycLabel(` |
| 3,977 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,982 | `cyclePicker` | `function cyclePicker(` |
| 4,001 | `rangeBar` | `function rangeBar(` |
| 4,008 | `trendOf` | `function trendOf(` |
| 4,023 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,027 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,038_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,039 | `yearOf` | `function yearOf(` |
| 4,040 | `mean` | `function mean(` |

### The record rows

_line 4,041_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,042 | `headSigma` | `function headSigma(` |
| 4,047 | `atQuarter` | `function atQuarter(` |
| 4,048 | `atMonth` | `function atMonth(` |
| 4,049 | `ordinal` | `function ordinal(` |
| 4,050 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,053_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,054 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,061 | `moreRow` | `function moreRow(` |
| 4,067 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,068 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,074_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,075 | `xLabelOf` | `function xLabelOf(` |
| 4,085 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,103_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,104 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,112 | `vGrid` | `function vGrid(` |
| 4,116 | `COL_FILL` | `var COL_FILL =` |
| 4,117 | `colPath` | `function colPath(` |
| 4,122 | `colWidth` | `function colWidth(` |
| 4,127 | `AXIS` | `var AXIS =` |
| 4,128 | `histFrame` | `function histFrame(` |
| 4,135 | `xLabel` | `function xLabel(` |
| 4,138 | `crossLine` | `function crossLine(` |
| 4,141 | `zeroRule` | `function zeroRule(` |
| 4,144 | `meanRule` | `function meanRule(` |
| 4,145 | `pendingGeom` | `var pendingGeom =` |
| 4,146 | `publishGeom` | `function publishGeom(` |
| 4,147 | `attachHistory` | `function attachHistory(` |
| 4,156 | `histBar` | `function histBar(` |
| 4,159 | `histTip` | `function histTip(` |
| 4,160 | `avgRule` | `function avgRule(` |
| 4,163 | `vhOpen` | `function vhOpen(` |
| 4,164 | `chartAxes` | `function chartAxes(` |
| 4,194 | `divergeChart` | `function divergeChart(` |
| 4,228 | `pairChart` | `function pairChart(` |

### A series' highest reading within a span

_line 4,256_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,258 | `maxIn` | `function maxIn(` |
| 4,263 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,264 | `PEEK_W` | `var PEEK_W =` |
| 4,265 | `PEEK_H` | `var PEEK_H =` |
| 4,266 | `colPeek` | `function colPeek(` |
| 4,284 | `meterPeek` | `function meterPeek(` |
| 4,301 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,306 | `pressureZone` | `function pressureZone(` |
| 4,312 | `HZN_BACK` | `var HZN_BACK =` |
| 4,313 | `hznLast` | `function hznLast(` |
| 4,314 | `hznBack` | `function hznBack(` |
| 4,315 | `horizonWord` | `function horizonWord(` |
| 4,335 | `HZN_METERS` | `var HZN_METERS =` |
| 4,343 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,364 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,369 | `RISK_RISK` | `var RISK_RISK =` |
| 4,374 | `riskCell` | `function riskCell(` |
| 4,375 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,405 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,430_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,431 | `pulseClipN` | `var pulseClipN =` |
| 4,432 | `beatPath` | `function beatPath(` |
| 4,449 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,463 | `pulsePeek` | `function pulsePeek(` |
| 4,466 | `pulseBlock` | `function pulseBlock(` |
| 4,483 | `CHEV` | `var CHEV =` |
| 4,484 | `peekCard` | `function peekCard(` |
| 4,503 | `dropSvg` | `function dropSvg(` |
| 4,505 | `volumeSvg` | `function volumeSvg(` |
| 4,509 | `gaugeSvg` | `function gaugeSvg(` |
| 4,513 | `diamondSvg` | `function diamondSvg(` |
| 4,517 | `sproutSvg` | `function sproutSvg(` |
| 4,525 | `markSvg` | `function markSvg(` |
| 4,528 | `hormoneSvg` | `function hormoneSvg(` |
| 4,533 | `flameSvg` | `function flameSvg(` |
| 4,536 | `clockSvg` | `function clockSvg(` |
| 4,537 | `gearSvg` | `function gearSvg(` |
| 4,545 | `thermoSvg` | `function thermoSvg(` |
| 4,548 | `trendUpSvg` | `function trendUpSvg(` |
| 4,550 | `ecgSvg` | `function ecgSvg(` |
| 4,552 | `circulationSvg` | `function circulationSvg(` |
| 4,553 | `weatherSvg` | `function weatherSvg(` |
| 4,561 | `moodSvg` | `function moodSvg(` |
| 4,565 | `boltSvg` | `function boltSvg(` |
| 4,566 | `houseSvg` | `function houseSvg(` |
| 4,569 | `sunriseSvg` | `function sunriseSvg(` |
| 4,573 | `umbrellaSvg` | `function umbrellaSvg(` |
| 4,577 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 4,583_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,584 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,585 | `dsrHistory` | `var dsrHistory =` |
| 4,586 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,587 | `savHistory` | `var savHistory =` |
| 4,590 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,599 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,600 | `dsrNow` | `var dsrNow =` |
| 4,601 | `savNow` | `var savNow =` |
| 4,602 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,603 | `householdsWord` | `function householdsWord(` |
| 4,610 | `householdsNow` | `var householdsNow =` |
| 4,611 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,628 | `savInfoHtml` | `function savInfoHtml(` |
| 4,646 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,653 | `curveSub` | `var curveSub =` |
| 4,654 | `vixPct` | `function vixPct(` |
| 4,658 | `curveNoteFull` | `var curveNoteFull =` |
| 4,669 | `volatilityRing` | `function volatilityRing(` |
| 4,674 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,675 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,690 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,696 | `marketCycles` | `var marketCycles =` |
| 4,724 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,726_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,727 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,728 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 4,733_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,734 | `slopeOf` | `function slopeOf(` |
| 4,739 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,740 | `readSeason` | `function readSeason(` |
| 4,759 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,760 | `qLabel` | `function qLabel(` |
| 4,775 | `regimeTrack` | `function regimeTrack(` |
| 4,795 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,797_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,798 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,799 | `seasonTitle` | `function seasonTitle(` |
| 4,800 | `monthLabel` | `function monthLabel(` |
| 4,801 | `cycleModel` | `function cycleModel(` |
| 4,838 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,846 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,852 | `nowModel` | `var nowModel =` |
| 4,853 | `readingNow` | `var readingNow =` |
| 4,854 | `cpiNow` | `var cpiNow =` |
| 4,855 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,856 | `currentSeason` | `var currentSeason =` |
| 4,857 | `seasonWhy` | `var seasonWhy =` |
| 4,859 | `seasonGroup` | `function seasonGroup(` |
| 4,862 | `vitalRingSvg` | `function vitalRingSvg(` |
| 4,873 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 4,874 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 4,875 | `spreadLabel` | `function spreadLabel(` |
| 4,879 | `policyFacts` | `function policyFacts(` |
| 4,886 | `policyFactRows` | `function policyFactRows(` |
| 4,892 | `allSources` | `var allSources =` |
| 4,906 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 4,918_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,919 | `SVG_NS` | `var SVG_NS =` |
| 4,920 | `svgEl` | `function svgEl(` |
| 4,925 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 4,959_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,960 | `clampPct` | `function clampPct(` |
| 4,963 | `detailTexts` | `var detailTexts =` |
| 4,964 | `detailSlots` | `var detailSlots =` |
| 4,965 | `detailSlot` | `function detailSlot(` |
| 4,975 | `facts` | `function facts(` |
| 4,976 | `factsFrom` | `function factsFrom(` |
| 4,980 | `expandBtn` | `function expandBtn(` |
| 4,984 | `sheetRenderers` | `var sheetRenderers =` |
| 4,985 | `pageMode` | `var pageMode =` |
| 4,990 | `pageCycles` | `var pageCycles =` |
| 4,995 | `pageRange` | `var pageRange =` |
| 5,001 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,030_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,033 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,034_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,035 | `subjectRow` | `function subjectRow(` |
| 5,045 | `subjectIcon` | `function subjectIcon(` |
| 5,046 | `srcHtml` | `function srcHtml(` |
| 5,047 | `TIMING` | `var TIMING =` |
| 5,053 | `timingMark` | `function timingMark(` |
| 5,061 | `timingPill` | `function timingPill(` |
| 5,070 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,078 | `seatPageFoot` | `function seatPageFoot(` |
| 5,090 | `timingMembers` | `var timingMembers =` |
| 5,091 | `registerTiming` | `function registerTiming(` |
| 5,093 | `headHtml` | `function headHtml(` |
| 5,101 | `heldHighlights` | `var heldHighlights =` |
| 5,102 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,129_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,130 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,131 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,139 | `withLatestPoint` | `function withLatestPoint(` |
| 5,144 | `pressureMaturities` | `function pressureMaturities(` |
| 5,168 | `registerFlowPages` | `function registerFlowPages(` |
| 5,227 | `renderPressureRow` | `function renderPressureRow(` |
| 5,235 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,254 | `ylmColumns` | `function ylmColumns(` |
| 5,274 | `ylmFitLine` | `function ylmFitLine(` |
| 5,286 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,431_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,432 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,469_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,470 | `spreadSeries` | `function spreadSeries(` |
| 5,514 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,638_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,639 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,665_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,666 | `drawHznHead` | `function drawHznHead(` |
| 5,681 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,743_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,744 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,752_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,753 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 5,852_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,853 | `renderVolatility` | `function renderVolatility(` |
| 5,902 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 5,932_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,933 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 5,980_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,981 | `totalRiseIn` | `function totalRiseIn(` |
| 5,991 | `eraInflation` | `function eraInflation(` |
| 6,002 | `eraGrowth` | `function eraGrowth(` |
| 6,018 | `fmtSigned` | `function fmtSigned(` |
| 6,019 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,020 | `growthShown` | `function growthShown(` |
| 6,021 | `growthShownCap` | `function growthShownCap(` |
| 6,022 | `phaseClass` | `function phaseClass(` |
| 6,023 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,028 | `cycleViewEl` | `var cycleViewEl =` |
| 6,029 | `shownEra` | `var shownEra =` |
| 6,030 | `calendarReset` | `var calendarReset =` |
| 6,031 | `metricPageReset` | `var metricPageReset =` |
| 6,032 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,033 | `topbarBack` | `var topbarBack =` |
| 6,034 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,041_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,042 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,123_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,124 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,142_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,143 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,164_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,166 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,167 | `hubSet` | `function hubSet(` |
| 6,178 | `quarterPopup` | `function quarterPopup(` |
| 6,201 | `hubShowDefault` | `function hubShowDefault(` |
| 6,209 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,215 | `hubShowYear` | `function hubShowYear(` |
| 6,225 | `renderCycleDial` | `function renderCycleDial(` |
| 6,306 | `m2Step` | `function m2Step(` |
| 6,309 | `heatStep` | `function heatStep(` |
| 6,313 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,325_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,326 | `renderCycleView` | `function renderCycleView(` |

### The economy the Growth chart draws

_line 6,331_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,332 | `peerChosen` | `function peerChosen(` |
| 6,333 | `peerReaches` | `function peerReaches(` |
| 6,359 | `shownEraModel` | `var shownEraModel =` |
| 6,360 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,362_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,363 | `stripGroupName` | `var stripGroupName =` |
| 6,364 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,392 | `marketStripHtml` | `function marketStripHtml(` |
| 6,426 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,427 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,456_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,457 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,463 | `INDICATOR_GROUP` | `var INDICATOR_GROUP =` |
| 6,469 | `SPLIT_PERIOD` | `var SPLIT_PERIOD =` |
| 6,470 | `debtSvg` | `function debtSvg(` |
| 6,471 | `interestSvg` | `function interestSvg(` |
| 6,473 | `budgetSvg` | `function budgetSvg(` |
| 6,475 | `lede` | `function lede(` |
| 6,476 | `periodOf` | `function periodOf(` |
| 6,477 | `qLast` | `function qLast(` |
| 6,478 | `meterWord` | `function meterWord(` |
| 6,479 | `splitSpecs` | `function splitSpecs(` |
| 6,499 | `productivitySpec` | `function productivitySpec(` |
| 6,508 | `splitMid` | `function splitMid(` |
| 6,509 | `splitInfo` | `function splitInfo(` |
| 6,513 | `quarterTicks` | `function quarterTicks(` |
| 6,518 | `drawSplit` | `function drawSplit(` |
| 6,535 | `mountSplit` | `function mountSplit(` |
| 6,551 | `splitPeek` | `function splitPeek(` |
| 6,559 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,567 | `deficitPeek` | `function deficitPeek(` |
| 6,573 | `catSheet` | `function catSheet(` |
| 6,578 | `groupId` | `function groupId(` |
| 6,579 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,580 | `seatGroups` | `function seatGroups(` |
| 6,583 | `groupSheet` | `function groupSheet(` |
| 6,593 | `appendPicks` | `function appendPicks(` |
| 6,601 | `categoryCats` | `function categoryCats(` |

### The split indicators' insights

_line 6,619_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,620 | `buffettInsight` | `function buffettInsight(` |
| 6,635 | `debtInsight` | `function debtInsight(` |
| 6,650 | `productivityInsight` | `function productivityInsight(` |
| 6,660 | `interestInsight` | `function interestInsight(` |
| 6,675 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,706 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,731 | `activityStackHtml` | `function activityStackHtml(` |
| 6,741 | `seatTemperature` | `function seatTemperature(` |
| 6,749 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,785_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,786 | `partsOf` | `function partsOf(` |
| 6,795 | `discOf` | `function discOf(` |
| 6,798 | `authored` | `function authored(` |
| 6,799 | `registerRoster` | `function registerRoster(` |
| 6,833 | `indRow` | `function indRow(` |
| 6,837 | `IND_ORDER` | `var IND_ORDER =` |
| 6,838 | `indGroupRow` | `function indGroupRow(` |
| 6,843 | `indRows` | `function indRows(` |
| 6,857 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 6,866_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,867 | `NAV` | `var NAV =` |
| 6,868 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 6,962_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,963 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,011_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,012 | `fmtDay` | `function fmtDay(` |
| 7,013 | `qPretty` | `function qPretty(` |
| 7,014 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,015 | `peekArt` | `function peekArt(` |
| 7,016 | `indPeriod` | `function indPeriod(` |
| 7,025 | `catItem` | `function catItem(` |
| 7,075 | `insightCirculation` | `function insightCirculation(` |
| 7,108 | `insightWeather` | `function insightWeather(` |
| 7,151 | `CAT_MINI` | `var CAT_MINI =` |
| 7,154 | `placeSignPair` | `function placeSignPair(` |
| 7,186 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,202 | `buildCategories` | `function buildCategories(` |
| 7,244 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,286_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,287 | `capeFmt1` | `function capeFmt1(` |
| 7,288 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 7,289 | `GDP_STOPS` | `var GDP_STOPS =` |
| 7,290 | `VAL_STOPS` | `var VAL_STOPS =` |
| 7,291 | `DEF_STOPS` | `var DEF_STOPS =` |
| 7,292 | `qShort` | `function qShort(` |
| 7,293 | `yoyPairs` | `function yoyPairs(` |
| 7,303 | `actCycleMonths` | `function actCycleMonths(` |
| 7,311 | `householdsHighlights` | `function householdsHighlights(` |
| 7,330 | `redrawSheet` | `function redrawSheet(` |
| 7,334 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,398 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,437 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,487 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,517 | `valuationHighlights` | `function valuationHighlights(` |
| 7,530 | `tempHighlights` | `function tempHighlights(` |
| 7,547 | `gdpHighlights` | `function gdpHighlights(` |
| 7,562 | `renderMetricPages` | `function renderMetricPages(` |
| 7,572 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,585_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,586 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,587 | `cycleDataOn` | `function cycleDataOn(` |
| 7,588 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,608 | `wireCycleData` | `function wireCycleData(` |
| 7,623 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,668_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,669 | `eraOpen` | `var eraOpen =` |
| 7,670 | `kT` | `function kT(` |
| 7,674 | `eraReading` | `function eraReading(` |
| 7,686 | `eraFig` | `function eraFig(` |
| 7,693 | `eraValue` | `function eraValue(` |
| 7,699 | `eraRange` | `function eraRange(` |
| 7,704 | `eraMini` | `function eraMini(` |
| 7,709 | `eraCard` | `function eraCard(` |
| 7,728 | `eraShow` | `function eraShow(` |
| 7,738 | `enterEra` | `function enterEra(` |
| 7,745 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,752_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,753 | `rosterGroups` | `function rosterGroups(` |
| 7,781 | `__roster` | `var __roster =` |
| 7,782 | `readingRoster` | `function readingRoster(` |
| 7,803 | `readFig` | `function readFig(` |
| 7,808 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 7,815_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,816 | `cycleSymptoms` | `function cycleSymptoms(` |
| 7,840 | `placeWords` | `function placeWords(` |
| 7,844 | `symptomNote` | `function symptomNote(` |
| 7,851 | `symptomRow` | `function symptomRow(` |
| 7,858 | `cycleTrack` | `function cycleTrack(` |
| 7,873 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 7,881_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,882 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 7,931_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,932 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 7,963_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,964 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,993–1,996 | `LIVE_CACHE` | Live data without a render refactor |
| 4,321–4,334 | `horizonRead` | A series' highest reading within a span |
| 4,761–4,774 | `seasonTrackAll` | The season, computed |
| 4,790–4,794 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,418 |
| `desire-range` | 5,219 |
| `fear-range` | 5,897 |
| `hormones-range` | 5,785 |
| `hzn-range` | 5,706 |
| `pressure-range` | 2,059 |
| `pulse-range` | 5,186 |
| `sheet-marker-deficit` | 7,415 |
| `sheet-metric-gdp` | 7,360 |
| `sheet-metric-households` | 7,439 |
| `sheet-metric-temp` | 7,335 |
| `sheet-metric-valuation` | 7,460 |
| `sheet-sign-activity` | 7,400 |
| `sheet-sign-desire` | 5,220 |
| `sheet-sign-horizon` | 5,707 |
| `sheet-sign-hormones` | 5,786 |
| `sheet-sign-pressure` | 5,423 |
| `sheet-sign-pulse` | 5,185 |
| `sheet-sign-sentiment` | 5,898 |
| `sheet-sign-volume` | 5,203 |
| `volume-range` | 5,204 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,422 |
| `desire-range` | 5,208 |
| `fear-range` | 5,864 |
| `hzn-range` | 5,691 |
| `pressure-range` | 5,392 |
| `pulse-range` | 5,172 |
| `sheet-metric-gdp` | 7,361 |
| `sheet-metric-temp` | 7,336 |
| `sheet-metric-valuation` | 7,461 |
| `volume-range` | 5,190 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,078 |
| `sheet-metric-gdp` | 3,079 |
| `sheet-sign-activity` | 3,080 |
| `sheet-metric-valuation` | 3,081 |
| `sheet-metric-households` | 3,082 |
| `deficit-range` | 3,083 |
| `volume-range` | 3,084 |
| `pulse-range` | 3,085 |
| `hzn-range` | 3,086 |
| `desire-range` | 3,087 |
| `fear-range` | 3,088 |
| `hormones-range` | 3,089 |
| `pressure-range` | 3,090 |

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

