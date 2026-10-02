# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,091 lines**, about 618 KB, roughly **175 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `a4d503b` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,363 | the whole stylesheet, every token and rule |
| **Markup** | 1,364–1,769 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,770–8,058 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,059–8,091 | </body></html> |

Counts: **401** top-level functions, **180** top-level vars, **6** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,770_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,772 | `byId` | `function byId(` |
| 1,780 | `byIdMaybe` | `function byIdMaybe(` |
| 1,781 | `put` | `function put(` |
| 1,786 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,788_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,789 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,790 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,791 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,792 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,796 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,801_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,802 | `wheelMeta` | `var wheelMeta =` |
| 1,810 | `seasonOverride` | `var seasonOverride =` |
| 1,811 | `cycleNowNote` | `var cycleNowNote =` |
| 1,813 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,891 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,933 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,934 | `volatilityHistory` | `var volatilityHistory =` |
| 1,936 | `fiscalHistory` | `var fiscalHistory =` |
| 1,942 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,944 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,954 | `productivityHistory` | `var productivityHistory =` |
| 1,956 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |

### Live data without a render refactor

_line 1,958_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,963 | `merge` | `function merge(` |
| 1,970 | `LIVE` | `function LIVE(` |
| 1,984 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 1,987_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,989 | `paintReading` | `function paintReading(` |
| 2,006 | `repaintVolatility` | `function repaintVolatility(` |
| 2,010 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,018 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,023 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,027 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,032_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,033 | `READINGS` | `var READINGS =` |
| 2,088 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,089 | `KINDS` | `var KINDS =` |
| 2,090 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,104 | `receive` | `function receive(` |
| 2,120 | `liveAsOf` | `var liveAsOf =` |
| 2,121 | `fmtAsOf` | `function fmtAsOf(` |
| 2,126 | `applyLive` | `function applyLive(` |
| 2,139 | `shapeOk` | `function shapeOk(` |
| 2,146 | `repaintPolicy` | `function repaintPolicy(` |
| 2,152 | `GYN` | `var GYN =` |
| 2,179 | `refreshLiveData` | `function refreshLiveData(` |
| 2,197 | `fetchSiteData` | `function fetchSiteData(` |
| 2,213 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,218_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,219 | `yieldCurve` | `var yieldCurve =` |
| 2,225 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,226 | `curveAsOf` | `function curveAsOf(` |
| 2,231 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,232 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,237 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,239_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,240 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,241 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,242 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,243 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,244 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,246_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,247 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,253 | `uninvLagToday` | `var uninvLagToday =` |
| 2,258 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,264 | `gdpSrc` | `var gdpSrc =` |
| 2,267 | `labPanel` | `var labPanel =` |
| 2,296 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,297_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,304 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,305 | `productivityWord` | `function productivityWord(` |

### The deficit, year by year

_line 2,334_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,335 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,336 | `deficitHistory` | `var deficitHistory =` |
| 2,339 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,340 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,342 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,351_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,352 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,361_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,362 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,365 | `timelineSpan` | `function timelineSpan(` |
| 2,370 | `timelineFor` | `function timelineFor(` |
| 2,381 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,387_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,388 | `windowScale` | `function windowScale(` |
| 2,403 | `windowYears` | `function windowYears(` |
| 2,411 | `refName` | `function refName(` |
| 2,415 | `histReadEnsure` | `function histReadEnsure(` |
| 2,435 | `histReadFill` | `function histReadFill(` |
| 2,485 | `histAxisEnds` | `function histAxisEnds(` |
| 2,496 | `histLegend` | `function histLegend(` |
| 2,556 | `refitHistory` | `function refitHistory(` |
| 2,566 | `wireHistHover` | `function wireHistHover(` |
| 2,603 | `mWindowFrom` | `function mWindowFrom(` |
| 2,607 | `qWindowFrom` | `function qWindowFrom(` |
| 2,612 | `DEF_1983` | `var DEF_1983 =` |
| 2,613 | `defFrom` | `function defFrom(` |
| 2,618 | `deficitChart` | `function deficitChart(` |
| 2,686 | `deficitBlock` | `function deficitBlock(` |
| 2,726 | `buffettHistory` | `var buffettHistory =` |
| 2,728 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,729 | `hyDates` | `var hyDates =` |
| 2,730 | `hyOas` | `var hyOas =` |
| 2,731 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,738 | `hyAt` | `function hyAt(` |
| 2,742 | `hyLabel` | `function hyLabel(` |
| 2,743 | `hyNum` | `function hyNum(` |
| 2,744 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,752 | `hyQuarters` | `function hyQuarters(` |
| 2,760 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,762 | `capeHistory` | `var capeHistory =` |
| 2,764 | `longCycleSrc` | `var longCycleSrc =` |
| 2,780 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,794_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,795 | `sentiment` | `var sentiment =` |
| 2,811 | `valuation` | `var valuation =` |
| 2,832 | `valRow` | `function valRow(` |
| 2,837 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,840 | `coincident` | `var coincident =` |
| 2,890 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,896 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,897 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,898 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,900_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,901 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,902 | `m2vHistory` | `var m2vHistory =` |
| 2,918 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 2,970 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,012_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,013 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,014 | `DOTS` | `var DOTS =` |
| 3,016 | `headPickRow` | `function headPickRow(` |
| 3,022 | `histHead` | `function histHead(` |
| 3,037 | `headNoteIdx` | `var headNoteIdx =` |
| 3,038 | `headMenuHtml` | `function headMenuHtml(` |
| 3,063 | `headMenuFor` | `var headMenuFor =` |
| 3,064 | `headSubFor` | `var headSubFor =` |
| 3,065 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,094 | `histNote` | `function histNote(` |
| 3,095 | `meterFlagged` | `function meterFlagged(` |
| 3,102 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,125 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,139 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,152 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,157 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,171 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,185 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,204 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,235 | `desireBlock` | `function desireBlock(` |
| 3,246 | `volumeBlock` | `function volumeBlock(` |
| 3,258 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,270 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,277_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,278 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,279 | `m2Level` | `var m2Level =` |
| 3,300 | `m2Yoy` | `var m2Yoy =` |
| 3,301 | `M2_NORM` | `var M2_NORM =` |
| 3,303 | `volumeVerdict` | `function volumeVerdict(` |
| 3,311 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,312 | `unempHistory` | `var unempHistory =` |
| 3,318 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,327 | `NROU_NOW` | `var NROU_NOW =` |
| 3,328 | `unempState` | `function unempState(` |
| 3,334 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,386_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,387 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,396 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,452 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,453 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,454 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,455_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,457 | `householdsChart` | `function householdsChart(` |
| 3,507 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,560 | `GDP_NORM` | `var GDP_NORM =` |
| 3,561 | `gdpNowQ` | `var gdpNowQ =` |
| 3,562 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,584 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,635 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,680 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,688 | `velocityVerdict` | `function velocityVerdict(` |
| 3,696 | `derivePulseTag` | `function derivePulseTag(` |
| 3,702 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,734_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,735 | `seasonReading` | `var seasonReading =` |
| 3,779 | `frameworkRows` | `var frameworkRows =` |
| 3,789 | `vixRow` | `var vixRow =` |
| 3,790 | `VIX_CALM` | `var VIX_CALM =` |
| 3,791 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,795 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,802_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,803 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,812_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,813 | `calendarTodayY` | `var calendarTodayY =` |
| 3,815 | `vix3mClose` | `var vix3mClose =` |
| 3,816 | `fearCurve` | `function fearCurve(` |
| 3,821 | `curveVerdict` | `function curveVerdict(` |
| 3,826 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,835_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,836 | `modeBar` | `function modeBar(` |
| 3,843 | `pickerOpen` | `var pickerOpen =` |
| 3,844 | `cycleByName` | `function cycleByName(` |
| 3,848 | `openCycle` | `function openCycle(` |
| 3,852 | `cycleSlice` | `function cycleSlice(` |
| 3,860 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,868 | `cycleMonths` | `function cycleMonths(` |
| 3,876 | `histControls` | `function histControls(` |
| 3,885 | `pageCycle` | `function pageCycle(` |
| 3,889 | `cycLabel` | `function cycLabel(` |
| 3,893 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,898 | `cyclePicker` | `function cyclePicker(` |
| 3,917 | `rangeBar` | `function rangeBar(` |
| 3,924 | `trendOf` | `function trendOf(` |
| 3,939 | `TREND_ARROW` | `var TREND_ARROW =` |
| 3,943 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 3,954_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,955 | `yearOf` | `function yearOf(` |
| 3,956 | `mean` | `function mean(` |

### The record rows

_line 3,957_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,958 | `headSigma` | `function headSigma(` |
| 3,963 | `atQuarter` | `function atQuarter(` |
| 3,964 | `atMonth` | `function atMonth(` |
| 3,965 | `ordinal` | `function ordinal(` |
| 3,966 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 3,969_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,970 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 3,977 | `moreRow` | `function moreRow(` |
| 3,983 | `tempCaptionFull` | `var tempCaptionFull =` |
| 3,984 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 3,990_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,991 | `xLabelOf` | `function xLabelOf(` |
| 4,001 | `fitLine` | `function fitLine(` |
| 4,005 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,023_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,024 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,032 | `vGrid` | `function vGrid(` |
| 4,036 | `COL_FILL` | `var COL_FILL =` |
| 4,037 | `colPath` | `function colPath(` |
| 4,042 | `colWidth` | `function colWidth(` |
| 4,047 | `AXIS` | `var AXIS =` |
| 4,048 | `histFrame` | `function histFrame(` |
| 4,055 | `xLabel` | `function xLabel(` |
| 4,058 | `crossLine` | `function crossLine(` |
| 4,061 | `zeroRule` | `function zeroRule(` |
| 4,064 | `meanRule` | `function meanRule(` |
| 4,065 | `pendingGeom` | `var pendingGeom =` |
| 4,066 | `publishGeom` | `function publishGeom(` |
| 4,067 | `attachHistory` | `function attachHistory(` |
| 4,076 | `histBar` | `function histBar(` |
| 4,079 | `histTip` | `function histTip(` |
| 4,080 | `avgRule` | `function avgRule(` |
| 4,083 | `vhOpen` | `function vhOpen(` |
| 4,084 | `chartAxes` | `function chartAxes(` |
| 4,114 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,149_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,151 | `maxIn` | `function maxIn(` |
| 4,156 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,157 | `PEEK_W` | `var PEEK_W =` |
| 4,158 | `PEEK_H` | `var PEEK_H =` |
| 4,159 | `colPeek` | `function colPeek(` |
| 4,177 | `meterPeek` | `function meterPeek(` |
| 4,194 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,199 | `pressureZone` | `function pressureZone(` |
| 4,205 | `HZN_BACK` | `var HZN_BACK =` |
| 4,206 | `hznLast` | `function hznLast(` |
| 4,207 | `hznBack` | `function hznBack(` |
| 4,208 | `horizonWord` | `function horizonWord(` |
| 4,228 | `HZN_METERS` | `var HZN_METERS =` |
| 4,236 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,257 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,262 | `RISK_RISK` | `var RISK_RISK =` |
| 4,267 | `riskCell` | `function riskCell(` |
| 4,268 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,298 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,323_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,324 | `pulseClipN` | `var pulseClipN =` |
| 4,325 | `beatPath` | `function beatPath(` |
| 4,342 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,356 | `pulsePeek` | `function pulsePeek(` |
| 4,359 | `pulseBlock` | `function pulseBlock(` |
| 4,376 | `CHEV` | `var CHEV =` |
| 4,377 | `peekCard` | `function peekCard(` |
| 4,396 | `dropSvg` | `function dropSvg(` |
| 4,398 | `volumeSvg` | `function volumeSvg(` |
| 4,402 | `gaugeSvg` | `function gaugeSvg(` |
| 4,406 | `diamondSvg` | `function diamondSvg(` |
| 4,410 | `sproutSvg` | `function sproutSvg(` |
| 4,418 | `markSvg` | `function markSvg(` |
| 4,421 | `hormoneSvg` | `function hormoneSvg(` |
| 4,426 | `flameSvg` | `function flameSvg(` |
| 4,429 | `clockSvg` | `function clockSvg(` |
| 4,430 | `gearSvg` | `function gearSvg(` |
| 4,438 | `thermoSvg` | `function thermoSvg(` |
| 4,441 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,443 | `trendUpSvg` | `function trendUpSvg(` |
| 4,445 | `ecgSvg` | `function ecgSvg(` |
| 4,447 | `circulationSvg` | `function circulationSvg(` |
| 4,448 | `weatherSvg` | `function weatherSvg(` |
| 4,456 | `moodSvg` | `function moodSvg(` |
| 4,460 | `boltSvg` | `function boltSvg(` |
| 4,461 | `houseSvg` | `function houseSvg(` |
| 4,464 | `sunriseSvg` | `function sunriseSvg(` |
| 4,468 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,476_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,477 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,478 | `dsrHistory` | `var dsrHistory =` |
| 4,479 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,480 | `savHistory` | `var savHistory =` |
| 4,483 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,492 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,493 | `dsrNow` | `var dsrNow =` |
| 4,494 | `savNow` | `var savNow =` |
| 4,495 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,496 | `householdsWord` | `function householdsWord(` |
| 4,503 | `householdsNow` | `var householdsNow =` |
| 4,504 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,521 | `savInfoHtml` | `function savInfoHtml(` |
| 4,539 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,546 | `curveSub` | `var curveSub =` |
| 4,547 | `vixPct` | `function vixPct(` |
| 4,551 | `curveNoteFull` | `var curveNoteFull =` |
| 4,562 | `volatilityRing` | `function volatilityRing(` |
| 4,567 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,568 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,583 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,589 | `marketCycles` | `var marketCycles =` |
| 4,617 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,619_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,620 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,621 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,626_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,627 | `TIMING` | `var TIMING =` |
| 4,633 | `CATEGORIES` | `var CATEGORIES =` |
| 4,639 | `ROSTER` | `var ROSTER =` |
| 4,688 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,689 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,691 | `pageState` | `function pageState(` |
| 4,696 | `pageMode` | `var pageMode =` |
| 4,697 | `pageCycles` | `var pageCycles =` |
| 4,698 | `pageRange` | `var pageRange =` |
| 4,699 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,700 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,701 | `keyed` | `function keyed(` |
| 4,708 | `hyMonths` | `function hyMonths(` |
| 4,711 | `prettyKey` | `function prettyKey(` |
| 4,716 | `lastDate` | `function lastDate(` |
| 4,717 | `compiledDay` | `function compiledDay(` |
| 4,718 | `labPeriod` | `function labPeriod(` |
| 4,719 | `rosterFor` | `function rosterFor(` |
| 4,720 | `rowReadings` | `function rowReadings(` |
| 4,721 | `indOf` | `function indOf(` |
| 4,722 | `peekOf` | `function peekOf(` |
| 4,727 | `cardDate` | `function cardDate(` |
| 4,728 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,749_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,750 | `slopeOf` | `function slopeOf(` |
| 4,755 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,756 | `readSeason` | `function readSeason(` |
| 4,775 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,776 | `qLabel` | `function qLabel(` |
| 4,797 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,799_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,800 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,801 | `seasonTitle` | `function seasonTitle(` |
| 4,802 | `monthLabel` | `function monthLabel(` |
| 4,803 | `cycleReturns` | `function cycleReturns(` |
| 4,813 | `cycleModel` | `function cycleModel(` |
| 4,844 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,852 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,858 | `nowModel` | `var nowModel =` |
| 4,859 | `readingNow` | `var readingNow =` |
| 4,860 | `cpiNow` | `var cpiNow =` |
| 4,861 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,862 | `currentSeason` | `var currentSeason =` |
| 4,863 | `seasonWhy` | `var seasonWhy =` |
| 4,865 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,867_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,868 | `CALM` | `var CALM =` |
| 4,869 | `FEELINGS` | `var FEELINGS =` |
| 4,870 | `seasonHalf` | `function seasonHalf(` |
| 4,871 | `rankToDate` | `function rankToDate(` |
| 4,875 | `readFeeling` | `function readFeeling(` |
| 4,886 | `readPosture` | `function readPosture(` |
| 4,894 | `marketCache` | `var marketCache =` |
| 4,895 | `marketMonths` | `function marketMonths(` |
| 4,915 | `seasonInMonth` | `function seasonInMonth(` |
| 4,920 | `stretchRank` | `function stretchRank(` |
| 4,923 | `marketFacts` | `function marketFacts(` |
| 4,934 | `followedCache` | `var followedCache =` |
| 4,935 | `whatFollowed` | `function whatFollowed(` |
| 4,957 | `lastFeeling` | `function lastFeeling(` |
| 4,962 | `diagnoseClose` | `function diagnoseClose(` |
| 4,970 | `diagnoseToday` | `function diagnoseToday(` |
| 4,985 | `vitalRingSvg` | `function vitalRingSvg(` |
| 4,996 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 4,997 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 4,998 | `spreadLabel` | `function spreadLabel(` |
| 5,002 | `policyFacts` | `function policyFacts(` |
| 5,009 | `policyFactRows` | `function policyFactRows(` |
| 5,015 | `allSources` | `var allSources =` |
| 5,029 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,041_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,042 | `SVG_NS` | `var SVG_NS =` |
| 5,043 | `svgEl` | `function svgEl(` |
| 5,048 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,082_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,083 | `clampPct` | `function clampPct(` |
| 5,086 | `detailTexts` | `var detailTexts =` |
| 5,087 | `detailSlots` | `var detailSlots =` |
| 5,088 | `detailSlot` | `function detailSlot(` |
| 5,098 | `metricSheet` | `function metricSheet(` |
| 5,103 | `ledeHtml` | `function ledeHtml(` |
| 5,104 | `facts` | `function facts(` |
| 5,105 | `factsFrom` | `function factsFrom(` |
| 5,109 | `expandBtn` | `function expandBtn(` |
| 5,113 | `sheetRenderers` | `var sheetRenderers =` |
| 5,114 | `drawsPage` | `function drawsPage(` |
| 5,115 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,144_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,147 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,148_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,149 | `subjectRow` | `function subjectRow(` |
| 5,159 | `subjectIcon` | `function subjectIcon(` |
| 5,160 | `srcHtml` | `function srcHtml(` |
| 5,161 | `timingMark` | `function timingMark(` |
| 5,169 | `timingPill` | `function timingPill(` |
| 5,178 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,186 | `seatPageFoot` | `function seatPageFoot(` |
| 5,198 | `timingMembers` | `var timingMembers =` |
| 5,200 | `registerTiming` | `function registerTiming(` |
| 5,202 | `headHtml` | `function headHtml(` |
| 5,207 | `heldHighlights` | `var heldHighlights =` |
| 5,208 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,235_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,236 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,237 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,245 | `withLatestPoint` | `function withLatestPoint(` |
| 5,250 | `pressureMaturities` | `function pressureMaturities(` |
| 5,274 | `registerFlowPages` | `function registerFlowPages(` |
| 5,328 | `renderPressureRow` | `function renderPressureRow(` |
| 5,336 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,355 | `ylmColumns` | `function ylmColumns(` |
| 5,375 | `ylmFitLine` | `function ylmFitLine(` |
| 5,387 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,528_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,529 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,566_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,567 | `spreadSeries` | `function spreadSeries(` |
| 5,611 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,737_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,738 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,764_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,765 | `drawHznHead` | `function drawHznHead(` |
| 5,779 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,838_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,839 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,847_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,848 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 5,945_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,946 | `renderVolatility` | `function renderVolatility(` |
| 5,991 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,021_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,022 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,052_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,053 | `totalRiseIn` | `function totalRiseIn(` |
| 6,063 | `eraInflation` | `function eraInflation(` |
| 6,074 | `eraGrowth` | `function eraGrowth(` |
| 6,090 | `fmtSigned` | `function fmtSigned(` |
| 6,091 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,092 | `growthShown` | `function growthShown(` |
| 6,093 | `growthShownCap` | `function growthShownCap(` |
| 6,094 | `phaseClass` | `function phaseClass(` |
| 6,095 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,099 | `cycleViewEl` | `var cycleViewEl =` |
| 6,100 | `shownEra` | `var shownEra =` |
| 6,101 | `calendarReset` | `var calendarReset =` |
| 6,102 | `metricPageReset` | `var metricPageReset =` |
| 6,103 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,104 | `topbarBack` | `var topbarBack =` |
| 6,105 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,112_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,113 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,194_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,195 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,213_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,214 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,235_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,237 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,238 | `hubSet` | `function hubSet(` |
| 6,249 | `quarterPopup` | `function quarterPopup(` |
| 6,272 | `hubShowDefault` | `function hubShowDefault(` |
| 6,280 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,286 | `hubShowYear` | `function hubShowYear(` |
| 6,296 | `renderCycleDial` | `function renderCycleDial(` |
| 6,377 | `m2Step` | `function m2Step(` |
| 6,380 | `heatStep` | `function heatStep(` |
| 6,384 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,395_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,396 | `renderCycleView` | `function renderCycleView(` |
| 6,402 | `shownEraModel` | `var shownEraModel =` |
| 6,403 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,405_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,406 | `stripGroupName` | `var stripGroupName =` |
| 6,407 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,435 | `marketStripHtml` | `function marketStripHtml(` |
| 6,469 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,470 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,499_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,500 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,506 | `debtSvg` | `function debtSvg(` |
| 6,507 | `interestSvg` | `function interestSvg(` |
| 6,509 | `budgetSvg` | `function budgetSvg(` |
| 6,511 | `lede` | `function lede(` |
| 6,512 | `periodOf` | `function periodOf(` |
| 6,513 | `meterWord` | `function meterWord(` |
| 6,514 | `splitPages` | `function splitPages(` |
| 6,529 | `productivityPage` | `function productivityPage(` |
| 6,534 | `splitSpec` | `function splitSpec(` |
| 6,540 | `splitInfo` | `function splitInfo(` |
| 6,544 | `periodTicks` | `function periodTicks(` |
| 6,549 | `periodOfSeries` | `function periodOfSeries(` |
| 6,550 | `drawSplit` | `function drawSplit(` |
| 6,567 | `mountSplit` | `function mountSplit(` |
| 6,580 | `splitPeek` | `function splitPeek(` |
| 6,587 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,595 | `deficitPeek` | `function deficitPeek(` |
| 6,599 | `catSheet` | `function catSheet(` |
| 6,604 | `groupId` | `function groupId(` |
| 6,605 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,606 | `seatGroups` | `function seatGroups(` |
| 6,609 | `groupSheet` | `function groupSheet(` |
| 6,619 | `appendPicks` | `function appendPicks(` |
| 6,627 | `doorSel` | `function doorSel(` |
| 6,628 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,640_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,641 | `buffettInsight` | `function buffettInsight(` |
| 6,656 | `debtInsight` | `function debtInsight(` |
| 6,671 | `productivityInsight` | `function productivityInsight(` |
| 6,681 | `interestInsight` | `function interestInsight(` |
| 6,696 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,719 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,739 | `activityStackHtml` | `function activityStackHtml(` |
| 6,749 | `seatTemperature` | `function seatTemperature(` |
| 6,757 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,790_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,791 | `partsOf` | `function partsOf(` |
| 6,800 | `authored` | `function authored(` |
| 6,801 | `registerRoster` | `function registerRoster(` |
| 6,823 | `indRow` | `function indRow(` |
| 6,827 | `IND_ORDER` | `var IND_ORDER =` |
| 6,828 | `indGroupRow` | `function indGroupRow(` |
| 6,833 | `indRows` | `function indRows(` |
| 6,847 | `indCategoryHtml` | `function indCategoryHtml(` |
| 6,855 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 6,857_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,858 | `NAV` | `var NAV =` |
| 6,859 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 6,953_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,954 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,001_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,002 | `qPretty` | `function qPretty(` |
| 7,003 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,004 | `peekArt` | `function peekArt(` |
| 7,005 | `indPeriod` | `function indPeriod(` |
| 7,009 | `catItem` | `function catItem(` |
| 7,059 | `insightCirculation` | `function insightCirculation(` |
| 7,092 | `insightWeather` | `function insightWeather(` |
| 7,135 | `PAIR_ART` | `var PAIR_ART =` |
| 7,141 | `placeSignPair` | `function placeSignPair(` |
| 7,164 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,180 | `buildCategories` | `function buildCategories(` |
| 7,196 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,234_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,235 | `capeFmt1` | `function capeFmt1(` |
| 7,236 | `actCycleMonths` | `function actCycleMonths(` |
| 7,244 | `householdsHighlights` | `function householdsHighlights(` |
| 7,263 | `redrawSheet` | `function redrawSheet(` |
| 7,267 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,312 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,349 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,396 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,426 | `valuationHighlights` | `function valuationHighlights(` |
| 7,439 | `tempHighlights` | `function tempHighlights(` |
| 7,456 | `gdpHighlights` | `function gdpHighlights(` |
| 7,471 | `renderMetricPages` | `function renderMetricPages(` |
| 7,481 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,491_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,492 | `FEELING_RULES` | `var FEELING_RULES =` |
| 7,501 | `FEELING_STATE` | `var FEELING_STATE =` |
| 7,502 | `POSTURE_STATE` | `var POSTURE_STATE =` |
| 7,503 | `POSTURE_SAYS` | `var POSTURE_SAYS =` |
| 7,510 | `BODY_SAYS` | `var BODY_SAYS =` |
| 7,518 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,523 | `todayFace` | `function todayFace(` |
| 7,529 | `readDoor` | `function readDoor(` |
| 7,537 | `pct` | `function pct(` |
| 7,538 | `rosterRows` | `function rosterRows(` |
| 7,539 | `eraMove` | `function eraMove(` |
| 7,547 | `analysisFor` | `function analysisFor(` |
| 7,555 | `dxRow` | `function dxRow(` |
| 7,559 | `dxText` | `function dxText(` |
| 7,560 | `dxSection` | `function dxSection(` |
| 7,561 | `systemHtml` | `function systemHtml(` |
| 7,564 | `dxHead` | `function dxHead(` |
| 7,569 | `postureLine` | `function postureLine(` |
| 7,573 | `diagnosisInfo` | `function diagnosisInfo(` |
| 7,581 | `assessmentFor` | `function assessmentFor(` |
| 7,591 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,607 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,611 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,612 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,625_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,626 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,627 | `cycleDataOn` | `function cycleDataOn(` |
| 7,628 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,648 | `wireCycleData` | `function wireCycleData(` |
| 7,663 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,708_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,709 | `eraOpen` | `var eraOpen =` |
| 7,710 | `kT` | `function kT(` |
| 7,714 | `upTo` | `function upTo(` |
| 7,715 | `pairAt` | `function pairAt(` |
| 7,716 | `eraReading` | `function eraReading(` |
| 7,726 | `eraFig` | `function eraFig(` |
| 7,733 | `eraValue` | `function eraValue(` |
| 7,739 | `eraRange` | `function eraRange(` |
| 7,744 | `eraMini` | `function eraMini(` |
| 7,749 | `eraCard` | `function eraCard(` |
| 7,768 | `eraShow` | `function eraShow(` |
| 7,777 | `enterEra` | `function enterEra(` |
| 7,784 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,791_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,792 | `rosterRow` | `function rosterRow(` |
| 7,805 | `__roster` | `var __roster =` |
| 7,806 | `readingRoster` | `function readingRoster(` |
| 7,813 | `withUnit` | `function withUnit(` |
| 7,814 | `pastFigure` | `function pastFigure(` |
| 7,818 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 7,820_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,821 | `cycleSymptoms` | `function cycleSymptoms(` |
| 7,845 | `placeWords` | `function placeWords(` |
| 7,849 | `symptomNote` | `function symptomNote(` |
| 7,856 | `symptomRow` | `function symptomRow(` |
| 7,863 | `cycleTrack` | `function cycleTrack(` |
| 7,878 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 7,886_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,887 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 7,936_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,937 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 7,968_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,969 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **6 compute a value**, 6 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,959–1,962 | `LIVE_CACHE` | Live data without a render refactor |
| 2,299–2,303 | `productivityRecord` | Productivity growth is not in this panel |
| 2,316–4,227 | `productivityReading` | Productivity growth is not in this panel |
| 4,214–4,227 | `horizonRead` | A series' highest reading within a span |
| 4,777–4,790 | `seasonTrackAll` | The season, computed |
| 4,792–4,796 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,331 |
| `pressure-range` | 2,025 |
| `sheet-marker-deficit` | 7,328 |
| `sheet-metric-gdp` | 7,292 |
| `sheet-metric-households` | 7,350 |
| `sheet-metric-temp` | 7,268 |
| `sheet-metric-valuation` | 7,370 |
| `sheet-sign-activity` | 7,313 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,335 |
| `desire-range` | 5,310 |
| `fear-range` | 5,954 |
| `hzn-range` | 5,787 |
| `pressure-range` | 5,491 |
| `pulse-range` | 5,278 |
| `sheet-metric-gdp` | 7,293 |
| `sheet-metric-temp` | 7,269 |
| `sheet-metric-valuation` | 7,371 |
| `volume-range` | 5,294 |

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
| 739 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 814 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 887 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,045 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,060 | The symptoms: a cycle's years against today |
| 1,136 | hero: yield curve |
| 1,168 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,187 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,214 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,222 | long cycle (structural layer) |
| 1,229 | indicator grid |
| 1,255 | info icon + popover (progressive disclosure for longer notes) |
| 1,269 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,352 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (105), which is what the renderers fill:

| Line | id |
|---|---|
| 1,368 | `topbar-back` |
| 1,371 | `topbar-title` |
| 1,372 | `menu-btn` |
| 1,386 | `main` |
| 1,389 | `cycle-view` |
| 1,392 | `cycle-kicker` |
| 1,395 | `cycle-dial` |
| 1,397 | `season-wheel-hub-date` |
| 1,398 | `season-wheel-hub-theme` |
| 1,399 | `season-wheel-hub-detail` |
| 1,407 | `today-analysis` |
| 1,408 | `peek-row` |
| 1,409 | `sheet-metric-temp` |
| 1,410 | `temp-timing` |
| 1,411 | `temp-chart` |
| 1,412 | `temp-rangebar` |
| 1,414 | `temp-head` |
| 1,415 | `temp-history` |
| 1,416 | `temp-hist-tooltip` |
| 1,417 | `temp-trend` |
| 1,419 | `temp-highlights` |
| 1,421 | `sheet-metric-gdp` |
| 1,422 | `gdp-timing` |
| 1,423 | `gdp-chart` |
| 1,424 | `gdp-rangebar` |
| 1,426 | `gdp-head` |
| 1,427 | `gdp-history` |
| 1,428 | `gdp-hist-tooltip` |
| 1,429 | `gdp-trend` |
| 1,431 | `gdp-highlights` |
| 1,435 | `sheet-marker-deficit` |
| 1,435 | `deficit-timing` |
| 1,437 | `sheet-metric-households` |
| 1,438 | `households-timing` |
| 1,439 | `households-chart` |
| 1,440 | `households-highlights` |
| 1,443 | `sheet-metric-valuation` |
| 1,444 | `valuation-timing` |
| 1,445 | `valuation-chart` |
| 1,446 | `valuation-highlights` |
| 1,453 | `subj-value-hormones` |
| 1,454 | `subj-say-hormones` |
| 1,460 | `hormones-history` |
| 1,461 | `hormones-insights` |
| 1,470 | `subj-value-horizon` |
| 1,471 | `subj-say-horizon` |
| 1,472 | `subj-spark-horizon` |
| 1,478 | `hzn-timeline` |
| 1,480 | `hzn-head` |
| 1,481 | `spread-history-shell` |
| 1,482 | `spread-history-svg` |
| 1,483 | `spread-history-tooltip` |
| 1,485 | `hzn-trend` |
| 1,487 | `horizon-insights` |
| 1,496 | `subj-value-pressure` |
| 1,497 | `subj-say-pressure` |
| 1,503 | `pressure-timeline` |
| 1,505 | `pressure-head` |
| 1,506 | `ylm-shell` |
| 1,507 | `ylm-svg` |
| 1,508 | `ylm-tooltip` |
| 1,510 | `ylm-trend` |
| 1,512 | `pressure-insights` |
| 1,519 | `subj-ring-sentiment` |
| 1,522 | `subj-value-sentiment` |
| 1,523 | `subj-say-sentiment` |
| 1,524 | `subj-spark-sentiment` |
| 1,530 | `fear-history` |
| 1,531 | `curve-highlights` |
| 1,537 | `signs-list` |
| 1,543 | `calendar-list` |
| 1,550 | `cycle-data` |
| 1,552 | `cycle-legend` |
| 1,553 | `cycle-list` |
| 1,554 | `cycle-more` |
| 1,555 | `cycle-more-label` |
| 1,560 | `calendar-cycle` |
| 1,580 | `search-home` |
| 1,582 | `search-input` |
| 1,584 | `search-list` |
| 1,588 | `more-menu` |
| 1,591 | `menu-back` |
| 1,605 | `sources-open` |
| 1,613 | `appearance-current` |
| 1,619 | `sheet-howto` |
| 1,662 | `sheet-book` |
| 1,693 | `seasons-kicker` |
| 1,695 | `seasons-rows` |
| 1,698 | `framework-kicker` |
| 1,701 | `framework-rows` |
| 1,711 | `sheet-appearance` |
| 1,719 | `theme-toggle` |
| 1,726 | `sheet-contact` |
| 1,735 | `contact-form` |
| 1,736 | `contact-title` |
| 1,737 | `contact-message` |
| 1,739 | `contact-hint` |
| 1,740 | `contact-send` |
| 1,746 | `sheet-sources` |
| 1,749 | `sources-back` |
| 1,754 | `asof-text` |
| 1,755 | `sources-groups` |
| 1,761 | `detail-backdrop` |
| 1,763 | `detail-modal-close` |
| 1,764 | `detail-modal-body` |

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

