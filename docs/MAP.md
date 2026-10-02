# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,477 lines**, about 666 KB, roughly **189 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `26ccd4f` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,394 | the whole stylesheet, every token and rule |
| **Markup** | 1,395–1,800 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,801–8,444 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,445–8,477 | </body></html> |

Counts: **442** top-level functions, **193** top-level vars, **9** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,801_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,803 | `byId` | `function byId(` |
| 1,811 | `byIdMaybe` | `function byIdMaybe(` |
| 1,812 | `put` | `function put(` |
| 1,817 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,819_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,820 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,821 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,822 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,823 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,827 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,832_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,833 | `wheelMeta` | `var wheelMeta =` |
| 1,841 | `seasonOverride` | `var seasonOverride =` |
| 1,842 | `cycleNowNote` | `var cycleNowNote =` |
| 1,844 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,922 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,964 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,965 | `volatilityHistory` | `var volatilityHistory =` |
| 1,967 | `fiscalHistory` | `var fiscalHistory =` |
| 1,973 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,975 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,985 | `productivityHistory` | `var productivityHistory =` |
| 1,987 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |
| 1,989 | `confidenceHistory` | `var confidenceHistory =` |

### Live data without a render refactor

_line 1,991_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,996 | `merge` | `function merge(` |
| 2,003 | `LIVE` | `function LIVE(` |
| 2,017 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,020_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,022 | `paintReading` | `function paintReading(` |
| 2,039 | `repaintVolatility` | `function repaintVolatility(` |
| 2,043 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,051 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,056 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,060 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,065_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,066 | `READINGS` | `var READINGS =` |
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

_line 2,279_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,280 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,286 | `uninvLagToday` | `var uninvLagToday =` |
| 2,291 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,297 | `gdpSrc` | `var gdpSrc =` |
| 2,300 | `labPanel` | `var labPanel =` |
| 2,329 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,330_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,337 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,338 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,365_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,366 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,372 | `confidenceWord` | `function confidenceWord(` |

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

_line 2,426_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,427 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,430 | `timelineSpan` | `function timelineSpan(` |
| 2,435 | `timelineFor` | `function timelineFor(` |
| 2,446 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,452_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,453 | `windowScale` | `function windowScale(` |
| 2,468 | `windowYears` | `function windowYears(` |
| 2,476 | `refName` | `function refName(` |
| 2,480 | `histReadEnsure` | `function histReadEnsure(` |
| 2,500 | `histReadFill` | `function histReadFill(` |
| 2,550 | `histAxisEnds` | `function histAxisEnds(` |
| 2,561 | `histLegend` | `function histLegend(` |
| 2,621 | `refitHistory` | `function refitHistory(` |
| 2,631 | `wireHistHover` | `function wireHistHover(` |
| 2,668 | `mWindowFrom` | `function mWindowFrom(` |
| 2,672 | `qWindowFrom` | `function qWindowFrom(` |
| 2,677 | `DEF_1983` | `var DEF_1983 =` |
| 2,678 | `defFrom` | `function defFrom(` |
| 2,683 | `deficitChart` | `function deficitChart(` |
| 2,751 | `deficitBlock` | `function deficitBlock(` |
| 2,791 | `buffettHistory` | `var buffettHistory =` |
| 2,793 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,794 | `hyDates` | `var hyDates =` |
| 2,795 | `hyOas` | `var hyOas =` |
| 2,796 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,803 | `hyAt` | `function hyAt(` |
| 2,807 | `hyLabel` | `function hyLabel(` |
| 2,808 | `hyNum` | `function hyNum(` |
| 2,809 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,817 | `hyQuarters` | `function hyQuarters(` |
| 2,825 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,827 | `capeHistory` | `var capeHistory =` |
| 2,829 | `longCycleSrc` | `var longCycleSrc =` |
| 2,845 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,859_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,860 | `sentiment` | `var sentiment =` |
| 2,876 | `valuation` | `var valuation =` |
| 2,897 | `valRow` | `function valRow(` |
| 2,902 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,905 | `coincident` | `var coincident =` |
| 2,955 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,961 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,962 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,963 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,965_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,966 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,967 | `m2vHistory` | `var m2vHistory =` |
| 2,983 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,035 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,077_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,078 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,079 | `DOTS` | `var DOTS =` |
| 3,081 | `headPickRow` | `function headPickRow(` |
| 3,087 | `histHead` | `function histHead(` |
| 3,102 | `headNoteIdx` | `var headNoteIdx =` |
| 3,103 | `headMenuHtml` | `function headMenuHtml(` |
| 3,128 | `headMenuFor` | `var headMenuFor =` |
| 3,129 | `headSubFor` | `var headSubFor =` |
| 3,130 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,159 | `histNote` | `function histNote(` |
| 3,160 | `meterFlagged` | `function meterFlagged(` |
| 3,167 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,190 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,204 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,217 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,222 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,226 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,238 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,252 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,266 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,285 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,316 | `desireBlock` | `function desireBlock(` |
| 3,327 | `volumeBlock` | `function volumeBlock(` |
| 3,339 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,351 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,358_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,359 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,360 | `m2Level` | `var m2Level =` |
| 3,381 | `m2Yoy` | `var m2Yoy =` |
| 3,382 | `M2_NORM` | `var M2_NORM =` |
| 3,384 | `volumeVerdict` | `function volumeVerdict(` |
| 3,392 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,393 | `unempHistory` | `var unempHistory =` |
| 3,399 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,408 | `NROU_NOW` | `var NROU_NOW =` |
| 3,409 | `unempState` | `function unempState(` |
| 3,415 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,467_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,468 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,477 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,533 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,534 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,535 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,536_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,538 | `householdsChart` | `function householdsChart(` |
| 3,588 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,641 | `GDP_NORM` | `var GDP_NORM =` |
| 3,642 | `gdpNowQ` | `var gdpNowQ =` |
| 3,643 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,665 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,716 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,761 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,769 | `velocityVerdict` | `function velocityVerdict(` |
| 3,777 | `derivePulseTag` | `function derivePulseTag(` |
| 3,783 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,815_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,816 | `seasonReading` | `var seasonReading =` |
| 3,860 | `frameworkRows` | `var frameworkRows =` |
| 3,870 | `vixRow` | `var vixRow =` |
| 3,871 | `VIX_CALM` | `var VIX_CALM =` |
| 3,872 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,876 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,883_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,884 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,893_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,894 | `calendarTodayY` | `var calendarTodayY =` |
| 3,896 | `vix3mClose` | `var vix3mClose =` |
| 3,897 | `fearCurve` | `function fearCurve(` |
| 3,902 | `curveVerdict` | `function curveVerdict(` |
| 3,907 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,916_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,917 | `modeBar` | `function modeBar(` |
| 3,924 | `pickerOpen` | `var pickerOpen =` |
| 3,925 | `cycleByName` | `function cycleByName(` |
| 3,929 | `openCycle` | `function openCycle(` |
| 3,933 | `cycleSlice` | `function cycleSlice(` |
| 3,941 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,949 | `cycleMonths` | `function cycleMonths(` |
| 3,957 | `histControls` | `function histControls(` |
| 3,966 | `pageCycle` | `function pageCycle(` |
| 3,970 | `cycLabel` | `function cycLabel(` |
| 3,974 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,979 | `cyclePicker` | `function cyclePicker(` |
| 3,998 | `rangeBar` | `function rangeBar(` |
| 4,005 | `trendOf` | `function trendOf(` |
| 4,020 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,024 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 4,035_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,036 | `yearOf` | `function yearOf(` |
| 4,037 | `mean` | `function mean(` |

### The record rows

_line 4,038_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,039 | `headSigma` | `function headSigma(` |
| 4,044 | `atQuarter` | `function atQuarter(` |
| 4,045 | `atMonth` | `function atMonth(` |
| 4,046 | `ordinal` | `function ordinal(` |
| 4,047 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,050_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,051 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,058 | `moreRow` | `function moreRow(` |
| 4,064 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,065 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,071_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,072 | `xLabelOf` | `function xLabelOf(` |
| 4,082 | `fitLine` | `function fitLine(` |
| 4,086 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,104_ · 20 declarations

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

### A series' highest reading within a span

_line 4,230_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,232 | `maxIn` | `function maxIn(` |
| 4,237 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,238 | `PEEK_W` | `var PEEK_W =` |
| 4,239 | `PEEK_H` | `var PEEK_H =` |
| 4,240 | `colPeek` | `function colPeek(` |
| 4,258 | `meterPeek` | `function meterPeek(` |
| 4,275 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,280 | `pressureZone` | `function pressureZone(` |
| 4,286 | `HZN_BACK` | `var HZN_BACK =` |
| 4,287 | `hznLast` | `function hznLast(` |
| 4,288 | `hznBack` | `function hznBack(` |
| 4,289 | `horizonWord` | `function horizonWord(` |
| 4,309 | `HZN_METERS` | `var HZN_METERS =` |
| 4,317 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,338 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,343 | `RISK_RISK` | `var RISK_RISK =` |
| 4,348 | `riskCell` | `function riskCell(` |
| 4,349 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,379 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,404_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,405 | `pulseClipN` | `var pulseClipN =` |
| 4,406 | `beatPath` | `function beatPath(` |
| 4,423 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,437 | `pulsePeek` | `function pulsePeek(` |
| 4,440 | `pulseBlock` | `function pulseBlock(` |
| 4,457 | `CHEV` | `var CHEV =` |
| 4,458 | `peekCard` | `function peekCard(` |
| 4,477 | `dropSvg` | `function dropSvg(` |
| 4,479 | `volumeSvg` | `function volumeSvg(` |
| 4,483 | `gaugeSvg` | `function gaugeSvg(` |
| 4,487 | `diamondSvg` | `function diamondSvg(` |
| 4,491 | `sproutSvg` | `function sproutSvg(` |
| 4,499 | `markSvg` | `function markSvg(` |
| 4,502 | `hormoneSvg` | `function hormoneSvg(` |
| 4,507 | `flameSvg` | `function flameSvg(` |
| 4,510 | `clockSvg` | `function clockSvg(` |
| 4,511 | `gearSvg` | `function gearSvg(` |
| 4,519 | `thermoSvg` | `function thermoSvg(` |
| 4,522 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,524 | `trendUpSvg` | `function trendUpSvg(` |
| 4,526 | `ecgSvg` | `function ecgSvg(` |
| 4,528 | `circulationSvg` | `function circulationSvg(` |
| 4,529 | `weatherSvg` | `function weatherSvg(` |
| 4,537 | `moodSvg` | `function moodSvg(` |
| 4,541 | `boltSvg` | `function boltSvg(` |
| 4,542 | `houseSvg` | `function houseSvg(` |
| 4,545 | `marketSvg` | `function marketSvg(` |
| 4,548 | `bagSvg` | `function bagSvg(` |
| 4,551 | `sunriseSvg` | `function sunriseSvg(` |
| 4,555 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,563_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,564 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,565 | `dsrHistory` | `var dsrHistory =` |
| 4,566 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,567 | `savHistory` | `var savHistory =` |
| 4,570 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,579 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,580 | `dsrNow` | `var dsrNow =` |
| 4,581 | `savNow` | `var savNow =` |
| 4,582 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,583 | `householdsWord` | `function householdsWord(` |
| 4,590 | `householdsNow` | `var householdsNow =` |
| 4,591 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,608 | `savInfoHtml` | `function savInfoHtml(` |
| 4,626 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,633 | `curveSub` | `var curveSub =` |
| 4,634 | `vixPct` | `function vixPct(` |
| 4,638 | `curveNoteFull` | `var curveNoteFull =` |
| 4,649 | `volatilityRing` | `function volatilityRing(` |
| 4,654 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,655 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,670 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,675_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,676 | `sp500Years` | `var sp500Years =` |
| 4,677 | `marketWord` | `function marketWord(` |
| 4,700 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,710 | `marketCycles` | `var marketCycles =` |
| 4,738 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,740_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,741 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,742 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,747_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,748 | `TIMING` | `var TIMING =` |
| 4,754 | `CATEGORIES` | `var CATEGORIES =` |
| 4,760 | `ROSTER` | `var ROSTER =` |
| 4,814 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,815 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,817 | `pageState` | `function pageState(` |
| 4,822 | `pageMode` | `var pageMode =` |
| 4,823 | `pageCycles` | `var pageCycles =` |
| 4,824 | `pageRange` | `var pageRange =` |
| 4,825 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,826 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,827 | `keyed` | `function keyed(` |
| 4,834 | `hyMonths` | `function hyMonths(` |
| 4,837 | `prettyKey` | `function prettyKey(` |
| 4,842 | `lastDate` | `function lastDate(` |
| 4,843 | `compiledDay` | `function compiledDay(` |
| 4,844 | `labPeriod` | `function labPeriod(` |
| 4,845 | `rosterFor` | `function rosterFor(` |
| 4,846 | `rowReadings` | `function rowReadings(` |
| 4,847 | `indOf` | `function indOf(` |
| 4,848 | `peekOf` | `function peekOf(` |
| 4,853 | `cardDate` | `function cardDate(` |
| 4,854 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,875_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,876 | `slopeOf` | `function slopeOf(` |
| 4,881 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,882 | `readSeason` | `function readSeason(` |
| 4,901 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,902 | `qLabel` | `function qLabel(` |
| 4,923 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,925_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,926 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,927 | `seasonTitle` | `function seasonTitle(` |
| 4,928 | `monthLabel` | `function monthLabel(` |
| 4,929 | `cycleReturns` | `function cycleReturns(` |
| 4,939 | `cycleModel` | `function cycleModel(` |
| 4,970 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,978 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,984 | `nowModel` | `var nowModel =` |
| 4,985 | `readingNow` | `var readingNow =` |
| 4,986 | `cpiNow` | `var cpiNow =` |
| 4,987 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,988 | `currentSeason` | `var currentSeason =` |
| 4,989 | `seasonWhy` | `var seasonWhy =` |
| 4,991 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,993_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,994 | `CALM` | `var CALM =` |
| 4,995 | `FEELINGS` | `var FEELINGS =` |
| 4,996 | `rankToDate` | `function rankToDate(` |
| 5,000 | `readFeeling` | `function readFeeling(` |
| 5,011 | `marketCache` | `var marketCache =` |
| 5,012 | `marketMonths` | `function marketMonths(` |
| 5,032 | `seasonInMonth` | `function seasonInMonth(` |
| 5,037 | `marketFacts` | `function marketFacts(` |
| 5,046 | `followedCache` | `var followedCache =` |
| 5,047 | `whatFollowed` | `function whatFollowed(` |
| 5,062 | `trackCache` | `var trackCache =` |
| 5,063 | `feelingTrack` | `function feelingTrack(` |
| 5,075 | `cramerV` | `function cramerV(` |
| 5,083 | `explained` | `function explained(` |
| 5,089 | `slid` | `function slid(` |
| 5,090 | `testCache` | `var testCache =` |
| 5,091 | `feelingSeasonTest` | `function feelingSeasonTest(` |
| 5,101 | `monthsApart` | `function monthsApart(` |
| 5,102 | `feelingSpells` | `function feelingSpells(` |
| 5,113 | `spellRecord` | `function spellRecord(` |
| 5,120 | `lastFeeling` | `function lastFeeling(` |
| 5,125 | `diagnoseClose` | `function diagnoseClose(` |
| 5,132 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 5,144_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,145 | `rankIn` | `function rankIn(` |
| 5,150 | `moodLists` | `var moodLists =` |
| 5,151 | `moodSeries` | `function moodSeries(` |
| 5,159 | `moodAt` | `function moodAt(` |
| 5,165 | `MOOD_TURN` | `var MOOD_TURN =` |
| 5,166 | `MOOD_RISING` | `var MOOD_RISING =` |
| 5,167 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 5,168 | `moodWord` | `function moodWord(` |
| 5,172 | `moodRead` | `function moodRead(` |
| 5,179 | `moodCache` | `var moodCache =` |
| 5,180 | `moodTrack` | `function moodTrack(` |
| 5,186 | `moodToday` | `function moodToday(` |
| 5,191 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,202 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,203 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,204 | `spreadLabel` | `function spreadLabel(` |
| 5,208 | `policyFacts` | `function policyFacts(` |
| 5,215 | `policyFactRows` | `function policyFactRows(` |
| 5,221 | `allSources` | `var allSources =` |
| 5,235 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,247_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,248 | `SVG_NS` | `var SVG_NS =` |
| 5,249 | `svgEl` | `function svgEl(` |
| 5,254 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,288_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,289 | `clampPct` | `function clampPct(` |
| 5,292 | `detailTexts` | `var detailTexts =` |
| 5,293 | `detailSlots` | `var detailSlots =` |
| 5,294 | `detailSlot` | `function detailSlot(` |
| 5,304 | `metricSheet` | `function metricSheet(` |
| 5,309 | `ledeHtml` | `function ledeHtml(` |
| 5,310 | `facts` | `function facts(` |
| 5,311 | `factsFrom` | `function factsFrom(` |
| 5,315 | `expandBtn` | `function expandBtn(` |
| 5,319 | `sheetRenderers` | `var sheetRenderers =` |
| 5,320 | `drawsPage` | `function drawsPage(` |
| 5,321 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,350_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,353 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,354_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,355 | `subjectRow` | `function subjectRow(` |
| 5,365 | `subjectIcon` | `function subjectIcon(` |
| 5,366 | `srcHtml` | `function srcHtml(` |
| 5,367 | `timingMark` | `function timingMark(` |
| 5,375 | `timingPill` | `function timingPill(` |
| 5,384 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,392 | `seatPageFoot` | `function seatPageFoot(` |
| 5,404 | `timingMembers` | `var timingMembers =` |
| 5,406 | `registerTiming` | `function registerTiming(` |
| 5,408 | `headHtml` | `function headHtml(` |
| 5,413 | `heldHighlights` | `var heldHighlights =` |
| 5,414 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,441_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,442 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,443 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,451 | `withLatestPoint` | `function withLatestPoint(` |
| 5,456 | `pressureMaturities` | `function pressureMaturities(` |
| 5,480 | `registerFlowPages` | `function registerFlowPages(` |
| 5,534 | `renderPressureRow` | `function renderPressureRow(` |
| 5,542 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,561 | `ylmColumns` | `function ylmColumns(` |
| 5,581 | `ylmFitLine` | `function ylmFitLine(` |
| 5,593 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,734_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,735 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,772_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,773 | `spreadSeries` | `function spreadSeries(` |
| 5,817 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,943_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,944 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,970_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,971 | `drawHznHead` | `function drawHznHead(` |
| 5,985 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 6,044_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,045 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 6,053_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,054 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,151_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,152 | `renderVolatility` | `function renderVolatility(` |
| 6,197 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,227_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,228 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,258_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,259 | `totalRiseIn` | `function totalRiseIn(` |
| 6,269 | `eraInflation` | `function eraInflation(` |
| 6,280 | `eraGrowth` | `function eraGrowth(` |
| 6,296 | `fmtSigned` | `function fmtSigned(` |
| 6,297 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,298 | `growthShown` | `function growthShown(` |
| 6,299 | `growthShownCap` | `function growthShownCap(` |
| 6,300 | `phaseClass` | `function phaseClass(` |
| 6,301 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,305 | `cycleViewEl` | `var cycleViewEl =` |
| 6,306 | `shownEra` | `var shownEra =` |
| 6,307 | `calendarReset` | `var calendarReset =` |
| 6,308 | `metricPageReset` | `var metricPageReset =` |
| 6,309 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,310 | `topbarBack` | `var topbarBack =` |
| 6,311 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,318_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,319 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,400_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,401 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,419_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,420 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,441_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,443 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,444 | `hubSet` | `function hubSet(` |
| 6,455 | `quarterPopup` | `function quarterPopup(` |
| 6,478 | `hubShowDefault` | `function hubShowDefault(` |
| 6,487 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,493 | `hubShowYear` | `function hubShowYear(` |
| 6,503 | `renderCycleDial` | `function renderCycleDial(` |
| 6,584 | `m2Step` | `function m2Step(` |
| 6,587 | `heatStep` | `function heatStep(` |
| 6,591 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,602_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,603 | `renderCycleView` | `function renderCycleView(` |
| 6,609 | `shownEraModel` | `var shownEraModel =` |
| 6,610 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,612_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,613 | `stripGroupName` | `var stripGroupName =` |
| 6,614 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,642 | `marketStripHtml` | `function marketStripHtml(` |
| 6,676 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,677 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,706_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,707 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,713 | `debtSvg` | `function debtSvg(` |
| 6,714 | `interestSvg` | `function interestSvg(` |
| 6,716 | `budgetSvg` | `function budgetSvg(` |
| 6,718 | `lede` | `function lede(` |
| 6,719 | `periodOf` | `function periodOf(` |
| 6,720 | `meterWord` | `function meterWord(` |
| 6,721 | `splitPages` | `function splitPages(` |
| 6,738 | `confidencePage` | `function confidencePage(` |
| 6,744 | `marketPage` | `function marketPage(` |
| 6,750 | `productivityPage` | `function productivityPage(` |
| 6,755 | `splitSpec` | `function splitSpec(` |
| 6,761 | `splitInfo` | `function splitInfo(` |
| 6,765 | `periodTicks` | `function periodTicks(` |
| 6,770 | `periodOfSeries` | `function periodOfSeries(` |
| 6,771 | `drawSplit` | `function drawSplit(` |
| 6,788 | `mountSplit` | `function mountSplit(` |
| 6,801 | `splitPeek` | `function splitPeek(` |
| 6,808 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,816 | `deficitPeek` | `function deficitPeek(` |
| 6,820 | `catSheet` | `function catSheet(` |
| 6,825 | `groupId` | `function groupId(` |
| 6,826 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,827 | `seatGroups` | `function seatGroups(` |
| 6,830 | `groupSheet` | `function groupSheet(` |
| 6,840 | `appendPicks` | `function appendPicks(` |
| 6,848 | `doorSel` | `function doorSel(` |
| 6,849 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,861_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,862 | `buffettInsight` | `function buffettInsight(` |
| 6,877 | `debtInsight` | `function debtInsight(` |
| 6,892 | `productivityInsight` | `function productivityInsight(` |
| 6,902 | `confidenceInsight` | `function confidenceInsight(` |
| 6,913 | `ORDINAL` | `var ORDINAL =` |
| 6,914 | `marketInsight` | `function marketInsight(` |
| 6,926 | `interestInsight` | `function interestInsight(` |
| 6,941 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,964 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,984 | `activityStackHtml` | `function activityStackHtml(` |
| 6,994 | `seatTemperature` | `function seatTemperature(` |
| 7,002 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 7,035_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,036 | `partsOf` | `function partsOf(` |
| 7,045 | `authored` | `function authored(` |
| 7,046 | `registerRoster` | `function registerRoster(` |
| 7,068 | `indRow` | `function indRow(` |
| 7,072 | `IND_ORDER` | `var IND_ORDER =` |
| 7,073 | `indGroupRow` | `function indGroupRow(` |
| 7,078 | `indRows` | `function indRows(` |
| 7,092 | `indCategoryHtml` | `function indCategoryHtml(` |
| 7,100 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 7,102_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,103 | `NAV` | `var NAV =` |
| 7,104 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,198_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,199 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,246_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,247 | `qPretty` | `function qPretty(` |
| 7,248 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,249 | `peekArt` | `function peekArt(` |
| 7,250 | `indPeriod` | `function indPeriod(` |
| 7,254 | `catItem` | `function catItem(` |
| 7,304 | `insightCirculation` | `function insightCirculation(` |
| 7,337 | `insightWeather` | `function insightWeather(` |
| 7,377 | `seasonCards` | `function seasonCards(` |
| 7,383 | `marketCycleCard` | `function marketCycleCard(` |
| 7,395 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,402 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,407 | `curvePath` | `function curvePath(` |
| 7,415 | `moodCallout` | `function moodCallout(` |
| 7,419 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,431 | `moodInfo` | `function moodInfo(` |
| 7,439 | `moodCard` | `function moodCard(` |
| 7,445 | `insightMood` | `function insightMood(` |
| 7,451 | `PAIR_ART` | `var PAIR_ART =` |
| 7,457 | `placeSignPair` | `function placeSignPair(` |
| 7,480 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,496 | `buildCategories` | `function buildCategories(` |
| 7,512 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,550_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,551 | `capeFmt1` | `function capeFmt1(` |
| 7,552 | `actCycleMonths` | `function actCycleMonths(` |
| 7,560 | `householdsHighlights` | `function householdsHighlights(` |
| 7,579 | `redrawSheet` | `function redrawSheet(` |
| 7,583 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,628 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,665 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,712 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,742 | `valuationHighlights` | `function valuationHighlights(` |
| 7,755 | `tempHighlights` | `function tempHighlights(` |
| 7,772 | `gdpHighlights` | `function gdpHighlights(` |
| 7,787 | `renderMetricPages` | `function renderMetricPages(` |
| 7,797 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,807_ · 34 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,808 | `FEELING_RULES` | `var FEELING_RULES =` |
| 7,817 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,821 | `todayFace` | `function todayFace(` |
| 7,827 | `readDoor` | `function readDoor(` |
| 7,835 | `pct` | `function pct(` |
| 7,836 | `rosterRows` | `function rosterRows(` |
| 7,837 | `eraEnds` | `function eraEnds(` |
| 7,844 | `eraMove` | `function eraMove(` |
| 7,848 | `HORMONES` | `var HORMONES =` |
| 7,849 | `analysisFor` | `function analysisFor(` |
| 7,855 | `dxRow` | `function dxRow(` |
| 7,856 | `dxText` | `function dxText(` |
| 7,857 | `dxSection` | `function dxSection(` |
| 7,858 | `systemHtml` | `function systemHtml(` |
| 7,861 | `dxHead` | `function dxHead(` |
| 7,866 | `gridNotes` | `function gridNotes(` |
| 7,873 | `diagnosisInfo` | `function diagnosisInfo(` |
| 7,881 | `THIN_MONTHS` | `var THIN_MONTHS =` |
| 7,882 | `share` | `function share(` |
| 7,883 | `gridCell` | `function gridCell(` |
| 7,889 | `feelingGrid` | `function feelingGrid(` |
| 7,899 | `gridLines` | `function gridLines(` |
| 7,911 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,920 | `acrossCycle` | `function acrossCycle(` |
| 7,927 | `SEASON_ORDER` | `var SEASON_ORDER =` |
| 7,928 | `seasonName` | `function seasonName(` |
| 7,929 | `feelingBySeason` | `function feelingBySeason(` |
| 7,936 | `trendBarsSvg` | `function trendBarsSvg(` |
| 7,955 | `trendCardHtml` | `function trendCardHtml(` |
| 7,970 | `spellLines` | `function spellLines(` |
| 7,986 | `trendSub` | `function trendSub(` |
| 7,987 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,991 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,998 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 8,011_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,012 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 8,013 | `cycleDataOn` | `function cycleDataOn(` |
| 8,014 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 8,034 | `wireCycleData` | `function wireCycleData(` |
| 8,049 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 8,094_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,095 | `eraOpen` | `var eraOpen =` |
| 8,096 | `kT` | `function kT(` |
| 8,100 | `upTo` | `function upTo(` |
| 8,101 | `pairAt` | `function pairAt(` |
| 8,102 | `eraReading` | `function eraReading(` |
| 8,112 | `eraFig` | `function eraFig(` |
| 8,119 | `eraValue` | `function eraValue(` |
| 8,125 | `eraRange` | `function eraRange(` |
| 8,130 | `eraMini` | `function eraMini(` |
| 8,135 | `eraCard` | `function eraCard(` |
| 8,154 | `eraShow` | `function eraShow(` |
| 8,163 | `enterEra` | `function enterEra(` |
| 8,170 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,177_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,178 | `rosterRow` | `function rosterRow(` |
| 8,191 | `__roster` | `var __roster =` |
| 8,192 | `readingRoster` | `function readingRoster(` |
| 8,199 | `withUnit` | `function withUnit(` |
| 8,200 | `pastFigure` | `function pastFigure(` |
| 8,204 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,206_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,207 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,231 | `placeWords` | `function placeWords(` |
| 8,235 | `symptomNote` | `function symptomNote(` |
| 8,242 | `symptomRow` | `function symptomRow(` |
| 8,249 | `cycleTrack` | `function cycleTrack(` |
| 8,264 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,272_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,273 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,322_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,323 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,354_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,355 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **9 compute a value**, 9 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,992–1,995 | `LIVE_CACHE` | Live data without a render refactor |
| 2,332–2,336 | `productivityRecord` | Productivity growth is not in this panel |
| 2,349–2,371 | `productivityReading` | Productivity growth is not in this panel |
| 2,367–2,371 | `confidenceRecord` | Consumer confidence |
| 2,378–4,308 | `confidenceReading` | Consumer confidence |
| 4,295–4,308 | `horizonRead` | A series' highest reading within a span |
| 4,681–4,916 | `marketReading` | The S&P 500, year by year |
| 4,903–4,916 | `seasonTrackAll` | The season, computed |
| 4,918–4,922 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,647 |
| `pressure-range` | 2,058 |
| `sheet-marker-deficit` | 7,644 |
| `sheet-metric-gdp` | 7,608 |
| `sheet-metric-households` | 7,666 |
| `sheet-metric-temp` | 7,584 |
| `sheet-metric-valuation` | 7,686 |
| `sheet-sign-activity` | 7,629 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,651 |
| `desire-range` | 5,516 |
| `fear-range` | 6,160 |
| `hzn-range` | 5,993 |
| `pressure-range` | 5,697 |
| `pulse-range` | 5,484 |
| `sheet-metric-gdp` | 7,609 |
| `sheet-metric-temp` | 7,585 |
| `sheet-metric-valuation` | 7,687 |
| `volume-range` | 5,500 |

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
| 759 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 834 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 907 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,076 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,091 | The symptoms: a cycle's years against today |
| 1,167 | hero: yield curve |
| 1,199 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,218 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,245 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,253 | long cycle (structural layer) |
| 1,260 | indicator grid |
| 1,286 | info icon + popover (progressive disclosure for longer notes) |
| 1,300 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,383 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (105), which is what the renderers fill:

| Line | id |
|---|---|
| 1,399 | `topbar-back` |
| 1,402 | `topbar-title` |
| 1,403 | `menu-btn` |
| 1,417 | `main` |
| 1,420 | `cycle-view` |
| 1,423 | `cycle-kicker` |
| 1,426 | `cycle-dial` |
| 1,428 | `season-wheel-hub-date` |
| 1,429 | `season-wheel-hub-theme` |
| 1,430 | `season-wheel-hub-detail` |
| 1,438 | `today-analysis` |
| 1,439 | `peek-row` |
| 1,440 | `sheet-metric-temp` |
| 1,441 | `temp-timing` |
| 1,442 | `temp-chart` |
| 1,443 | `temp-rangebar` |
| 1,445 | `temp-head` |
| 1,446 | `temp-history` |
| 1,447 | `temp-hist-tooltip` |
| 1,448 | `temp-trend` |
| 1,450 | `temp-highlights` |
| 1,452 | `sheet-metric-gdp` |
| 1,453 | `gdp-timing` |
| 1,454 | `gdp-chart` |
| 1,455 | `gdp-rangebar` |
| 1,457 | `gdp-head` |
| 1,458 | `gdp-history` |
| 1,459 | `gdp-hist-tooltip` |
| 1,460 | `gdp-trend` |
| 1,462 | `gdp-highlights` |
| 1,466 | `sheet-marker-deficit` |
| 1,466 | `deficit-timing` |
| 1,468 | `sheet-metric-households` |
| 1,469 | `households-timing` |
| 1,470 | `households-chart` |
| 1,471 | `households-highlights` |
| 1,474 | `sheet-metric-valuation` |
| 1,475 | `valuation-timing` |
| 1,476 | `valuation-chart` |
| 1,477 | `valuation-highlights` |
| 1,484 | `subj-value-hormones` |
| 1,485 | `subj-say-hormones` |
| 1,491 | `hormones-history` |
| 1,492 | `hormones-insights` |
| 1,501 | `subj-value-horizon` |
| 1,502 | `subj-say-horizon` |
| 1,503 | `subj-spark-horizon` |
| 1,509 | `hzn-timeline` |
| 1,511 | `hzn-head` |
| 1,512 | `spread-history-shell` |
| 1,513 | `spread-history-svg` |
| 1,514 | `spread-history-tooltip` |
| 1,516 | `hzn-trend` |
| 1,518 | `horizon-insights` |
| 1,527 | `subj-value-pressure` |
| 1,528 | `subj-say-pressure` |
| 1,534 | `pressure-timeline` |
| 1,536 | `pressure-head` |
| 1,537 | `ylm-shell` |
| 1,538 | `ylm-svg` |
| 1,539 | `ylm-tooltip` |
| 1,541 | `ylm-trend` |
| 1,543 | `pressure-insights` |
| 1,550 | `subj-ring-sentiment` |
| 1,553 | `subj-value-sentiment` |
| 1,554 | `subj-say-sentiment` |
| 1,555 | `subj-spark-sentiment` |
| 1,561 | `fear-history` |
| 1,562 | `curve-highlights` |
| 1,568 | `signs-list` |
| 1,574 | `calendar-list` |
| 1,581 | `cycle-data` |
| 1,583 | `cycle-legend` |
| 1,584 | `cycle-list` |
| 1,585 | `cycle-more` |
| 1,586 | `cycle-more-label` |
| 1,591 | `calendar-cycle` |
| 1,611 | `search-home` |
| 1,613 | `search-input` |
| 1,615 | `search-list` |
| 1,619 | `more-menu` |
| 1,622 | `menu-back` |
| 1,636 | `sources-open` |
| 1,644 | `appearance-current` |
| 1,650 | `sheet-howto` |
| 1,693 | `sheet-book` |
| 1,724 | `seasons-kicker` |
| 1,726 | `seasons-rows` |
| 1,729 | `framework-kicker` |
| 1,732 | `framework-rows` |
| 1,742 | `sheet-appearance` |
| 1,750 | `theme-toggle` |
| 1,757 | `sheet-contact` |
| 1,766 | `contact-form` |
| 1,767 | `contact-title` |
| 1,768 | `contact-message` |
| 1,770 | `contact-hint` |
| 1,771 | `contact-send` |
| 1,777 | `sheet-sources` |
| 1,780 | `sources-back` |
| 1,785 | `asof-text` |
| 1,786 | `sources-groups` |
| 1,792 | `detail-backdrop` |
| 1,794 | `detail-modal-close` |
| 1,795 | `detail-modal-body` |

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

