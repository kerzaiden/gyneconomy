# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,382 lines**, about 639 KB, roughly **181 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `8bcc9d0` on 2026-10-01.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,397 | the whole stylesheet, every token and rule |
| **Markup** | 1,398–1,804 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,805–8,349 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,350–8,382 | </body></html> |

Counts: **387** top-level functions, **188** top-level vars, **6** top-level IIFEs in the script.

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
| 2,406 | `checkProductivityWord` | `function checkProductivityWord(` |

### The deficit, year by year

_line 2,414_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,415 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,416 | `deficitHistory` | `var deficitHistory =` |
| 2,419 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,420 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,422 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,431_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,432 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,442_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,443 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,446 | `timelineSpan` | `function timelineSpan(` |
| 2,451 | `timelineFor` | `function timelineFor(` |
| 2,462 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,468_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,469 | `windowScale` | `function windowScale(` |
| 2,484 | `windowYears` | `function windowYears(` |
| 2,492 | `refName` | `function refName(` |
| 2,496 | `histReadEnsure` | `function histReadEnsure(` |
| 2,516 | `histReadFill` | `function histReadFill(` |
| 2,566 | `histAxisEnds` | `function histAxisEnds(` |
| 2,577 | `histLegend` | `function histLegend(` |
| 2,637 | `refitHistory` | `function refitHistory(` |
| 2,647 | `wireHistHover` | `function wireHistHover(` |
| 2,684 | `mWindowFrom` | `function mWindowFrom(` |
| 2,688 | `qWindowFrom` | `function qWindowFrom(` |
| 2,692 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,693 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,695 | `DEF_1983` | `var DEF_1983 =` |
| 2,696 | `defFrom` | `function defFrom(` |
| 2,701 | `deficitChart` | `function deficitChart(` |
| 2,769 | `deficitBlock` | `function deficitBlock(` |
| 2,809 | `buffettHistory` | `var buffettHistory =` |
| 2,811 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,812 | `hyDates` | `var hyDates =` |
| 2,813 | `hyOas` | `var hyOas =` |
| 2,814 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,821 | `hyAt` | `function hyAt(` |
| 2,825 | `hyLabel` | `function hyLabel(` |
| 2,826 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 2,827 | `hyNum` | `function hyNum(` |
| 2,828 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,836 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,846 | `capeHistory` | `var capeHistory =` |
| 2,848 | `longCycleSrc` | `var longCycleSrc =` |
| 2,864 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,878_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,879 | `sentiment` | `var sentiment =` |
| 2,895 | `valuation` | `var valuation =` |
| 2,916 | `valRow` | `function valRow(` |
| 2,921 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,924 | `coincident` | `var coincident =` |
| 2,974 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,980 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,981 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,982 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,984_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,985 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,986 | `m2vHistory` | `var m2vHistory =` |
| 3,002 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,056 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,097_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,098 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,099 | `DOTS` | `var DOTS =` |
| 3,101 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,116 | `headPickRow` | `function headPickRow(` |
| 3,122 | `histHead` | `function histHead(` |
| 3,137 | `headNoteIdx` | `var headNoteIdx =` |
| 3,138 | `headMenuHtml` | `function headMenuHtml(` |
| 3,163 | `headMenuFor` | `var headMenuFor =` |
| 3,164 | `headSubFor` | `var headSubFor =` |
| 3,165 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,196 | `histNote` | `function histNote(` |
| 3,197 | `meterFlagged` | `function meterFlagged(` |
| 3,204 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,227 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,241 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,254 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,259 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,274 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,288 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,307 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,338 | `desireBlock` | `function desireBlock(` |
| 3,349 | `volumeBlock` | `function volumeBlock(` |
| 3,361 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,373 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,380_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,381 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,382 | `m2Level` | `var m2Level =` |
| 3,403 | `m2Yoy` | `var m2Yoy =` |
| 3,404 | `M2_NORM` | `var M2_NORM =` |
| 3,406 | `volumeVerdict` | `function volumeVerdict(` |
| 3,414 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,415 | `unempHistory` | `var unempHistory =` |
| 3,421 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,430 | `NROU_NOW` | `var NROU_NOW =` |
| 3,431 | `unempState` | `function unempState(` |
| 3,437 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,491_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,492 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,501 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,559 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,560 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,561 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,562_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,564 | `householdsChart` | `function householdsChart(` |
| 3,613 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,668 | `GDP_NORM` | `var GDP_NORM =` |
| 3,669 | `gdpNowQ` | `var gdpNowQ =` |
| 3,670 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,692 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,745 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,792 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,800 | `velocityVerdict` | `function velocityVerdict(` |
| 3,808 | `derivePulseTag` | `function derivePulseTag(` |
| 3,814 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,846_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,847 | `seasonReading` | `var seasonReading =` |
| 3,891 | `frameworkRows` | `var frameworkRows =` |
| 3,901 | `vixRow` | `var vixRow =` |
| 3,902 | `VIX_CALM` | `var VIX_CALM =` |
| 3,903 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,907 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,914_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,915 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,924_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,925 | `calendarTodayY` | `var calendarTodayY =` |
| 3,927 | `vix3mClose` | `var vix3mClose =` |
| 3,928 | `fearCurve` | `function fearCurve(` |
| 3,933 | `curveVerdict` | `function curveVerdict(` |
| 3,938 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,947_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,948 | `modeBar` | `function modeBar(` |
| 3,955 | `pickerOpen` | `var pickerOpen =` |
| 3,956 | `cycleByName` | `function cycleByName(` |
| 3,960 | `openCycle` | `function openCycle(` |
| 3,964 | `cycleSlice` | `function cycleSlice(` |
| 3,972 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,980 | `cycleMonths` | `function cycleMonths(` |
| 3,988 | `histControls` | `function histControls(` |
| 3,997 | `cycLabel` | `function cycLabel(` |
| 4,001 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 4,006 | `cyclePicker` | `function cyclePicker(` |
| 4,025 | `rangeBar` | `function rangeBar(` |
| 4,032 | `trendOf` | `function trendOf(` |
| 4,047 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,051 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,062_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,063 | `yearOf` | `function yearOf(` |
| 4,064 | `mean` | `function mean(` |

### The record rows

_line 4,065_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,066 | `headSigma` | `function headSigma(` |
| 4,071 | `atQuarter` | `function atQuarter(` |
| 4,072 | `atMonth` | `function atMonth(` |
| 4,073 | `ordinal` | `function ordinal(` |
| 4,074 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,077_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,078 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,085 | `moreRow` | `function moreRow(` |
| 4,091 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,092 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,098_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,099 | `xLabelOf` | `function xLabelOf(` |
| 4,109 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,127_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,128 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,136 | `vGrid` | `function vGrid(` |
| 4,140 | `COL_FILL` | `var COL_FILL =` |
| 4,141 | `colPath` | `function colPath(` |
| 4,146 | `colWidth` | `function colWidth(` |
| 4,151 | `AXIS` | `var AXIS =` |
| 4,152 | `histFrame` | `function histFrame(` |
| 4,159 | `xLabel` | `function xLabel(` |
| 4,162 | `crossLine` | `function crossLine(` |
| 4,165 | `zeroRule` | `function zeroRule(` |
| 4,168 | `meanRule` | `function meanRule(` |
| 4,169 | `pendingGeom` | `var pendingGeom =` |
| 4,170 | `publishGeom` | `function publishGeom(` |
| 4,171 | `attachHistory` | `function attachHistory(` |
| 4,180 | `histBar` | `function histBar(` |
| 4,183 | `histTip` | `function histTip(` |
| 4,184 | `avgRule` | `function avgRule(` |
| 4,187 | `vhOpen` | `function vhOpen(` |
| 4,188 | `chartAxes` | `function chartAxes(` |
| 4,218 | `divergeChart` | `function divergeChart(` |
| 4,252 | `pairChart` | `function pairChart(` |

### A series' highest reading within a span

_line 4,280_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,282 | `maxIn` | `function maxIn(` |
| 4,287 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,288 | `PEEK_W` | `var PEEK_W =` |
| 4,289 | `PEEK_H` | `var PEEK_H =` |
| 4,290 | `colPeek` | `function colPeek(` |
| 4,308 | `meterPeek` | `function meterPeek(` |
| 4,325 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,330 | `pressureZone` | `function pressureZone(` |
| 4,336 | `HZN_BACK` | `var HZN_BACK =` |
| 4,337 | `hznLast` | `function hznLast(` |
| 4,338 | `hznBack` | `function hznBack(` |
| 4,339 | `horizonWord` | `function horizonWord(` |
| 4,359 | `HZN_METERS` | `var HZN_METERS =` |
| 4,367 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,388 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,393 | `RISK_RISK` | `var RISK_RISK =` |
| 4,398 | `riskCell` | `function riskCell(` |
| 4,399 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,429 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,454_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,455 | `pulseClipN` | `var pulseClipN =` |
| 4,456 | `beatPath` | `function beatPath(` |
| 4,473 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,487 | `pulsePeek` | `function pulsePeek(` |
| 4,490 | `pulseBlock` | `function pulseBlock(` |
| 4,507 | `CHEV` | `var CHEV =` |
| 4,508 | `peekCard` | `function peekCard(` |
| 4,527 | `dropSvg` | `function dropSvg(` |
| 4,529 | `volumeSvg` | `function volumeSvg(` |
| 4,533 | `gaugeSvg` | `function gaugeSvg(` |
| 4,537 | `diamondSvg` | `function diamondSvg(` |
| 4,541 | `sproutSvg` | `function sproutSvg(` |
| 4,549 | `markSvg` | `function markSvg(` |
| 4,552 | `hormoneSvg` | `function hormoneSvg(` |
| 4,557 | `flameSvg` | `function flameSvg(` |
| 4,560 | `clockSvg` | `function clockSvg(` |
| 4,561 | `gearSvg` | `function gearSvg(` |
| 4,569 | `thermoSvg` | `function thermoSvg(` |
| 4,572 | `trendUpSvg` | `function trendUpSvg(` |
| 4,574 | `ecgSvg` | `function ecgSvg(` |
| 4,576 | `circulationSvg` | `function circulationSvg(` |
| 4,577 | `weatherSvg` | `function weatherSvg(` |
| 4,585 | `moodSvg` | `function moodSvg(` |
| 4,589 | `boltSvg` | `function boltSvg(` |
| 4,590 | `houseSvg` | `function houseSvg(` |
| 4,593 | `sunriseSvg` | `function sunriseSvg(` |
| 4,597 | `volatilitySvg` | `function volatilitySvg(` |
| 4,602 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 4,608_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,609 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,610 | `dsrHistory` | `var dsrHistory =` |
| 4,611 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,612 | `savHistory` | `var savHistory =` |
| 4,615 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,624 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,625 | `dsrNow` | `var dsrNow =` |
| 4,626 | `savNow` | `var savNow =` |
| 4,627 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,628 | `householdsWord` | `function householdsWord(` |
| 4,635 | `householdsNow` | `var householdsNow =` |
| 4,636 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,653 | `savInfoHtml` | `function savInfoHtml(` |
| 4,671 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,678 | `curveSub` | `var curveSub =` |
| 4,679 | `vixPct` | `function vixPct(` |
| 4,683 | `curveNoteFull` | `var curveNoteFull =` |
| 4,694 | `volatilityRing` | `function volatilityRing(` |
| 4,699 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,700 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,715 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,721 | `marketCycles` | `var marketCycles =` |
| 4,749 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,751_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,752 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,753 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 4,758_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,759 | `slopeOf` | `function slopeOf(` |
| 4,764 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,765 | `readSeason` | `function readSeason(` |
| 4,784 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,785 | `qLabel` | `function qLabel(` |
| 4,800 | `regimeTrack` | `function regimeTrack(` |
| 4,817 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,819_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,820 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,821 | `seasonTitle` | `function seasonTitle(` |
| 4,822 | `monthLabel` | `function monthLabel(` |
| 4,823 | `cycleReturns` | `function cycleReturns(` |
| 4,833 | `cycleModel` | `function cycleModel(` |
| 4,864 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,872 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,878 | `nowModel` | `var nowModel =` |
| 4,879 | `readingNow` | `var readingNow =` |
| 4,880 | `cpiNow` | `var cpiNow =` |
| 4,881 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,882 | `currentSeason` | `var currentSeason =` |
| 4,883 | `seasonWhy` | `var seasonWhy =` |
| 4,885 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,887_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,888 | `CALM` | `var CALM =` |
| 4,889 | `FEELINGS` | `var FEELINGS =` |
| 4,890 | `seasonHalf` | `function seasonHalf(` |
| 4,891 | `rankToDate` | `function rankToDate(` |
| 4,895 | `readFeeling` | `function readFeeling(` |
| 4,906 | `readPosture` | `function readPosture(` |
| 4,914 | `marketCache` | `var marketCache =` |
| 4,915 | `marketMonths` | `function marketMonths(` |
| 4,935 | `seasonInMonth` | `function seasonInMonth(` |
| 4,940 | `stretchRank` | `function stretchRank(` |
| 4,943 | `marketFacts` | `function marketFacts(` |
| 4,954 | `followedCache` | `var followedCache =` |
| 4,955 | `whatFollowed` | `function whatFollowed(` |
| 4,977 | `lastFeeling` | `function lastFeeling(` |
| 4,982 | `diagnoseClose` | `function diagnoseClose(` |
| 4,990 | `diagnoseToday` | `function diagnoseToday(` |
| 5,007 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,018 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,019 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,020 | `spreadLabel` | `function spreadLabel(` |
| 5,024 | `policyFacts` | `function policyFacts(` |
| 5,031 | `policyFactRows` | `function policyFactRows(` |
| 5,037 | `allSources` | `var allSources =` |
| 5,051 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,063_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,064 | `SVG_NS` | `var SVG_NS =` |
| 5,065 | `svgEl` | `function svgEl(` |
| 5,070 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,104_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,105 | `clampPct` | `function clampPct(` |
| 5,108 | `detailTexts` | `var detailTexts =` |
| 5,109 | `detailSlots` | `var detailSlots =` |
| 5,110 | `detailSlot` | `function detailSlot(` |
| 5,120 | `metricSheet` | `function metricSheet(` |
| 5,125 | `ledeHtml` | `function ledeHtml(` |
| 5,126 | `facts` | `function facts(` |
| 5,127 | `factsFrom` | `function factsFrom(` |
| 5,131 | `expandBtn` | `function expandBtn(` |
| 5,135 | `sheetRenderers` | `var sheetRenderers =` |
| 5,136 | `pageMode` | `var pageMode =` |
| 5,141 | `pageCycles` | `var pageCycles =` |
| 5,146 | `pageRange` | `var pageRange =` |
| 5,152 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,181_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,184 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,185_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,186 | `subjectRow` | `function subjectRow(` |
| 5,196 | `subjectIcon` | `function subjectIcon(` |
| 5,197 | `srcHtml` | `function srcHtml(` |
| 5,198 | `TIMING` | `var TIMING =` |
| 5,204 | `timingMark` | `function timingMark(` |
| 5,212 | `timingPill` | `function timingPill(` |
| 5,221 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,229 | `seatPageFoot` | `function seatPageFoot(` |
| 5,241 | `timingMembers` | `var timingMembers =` |
| 5,242 | `registerTiming` | `function registerTiming(` |
| 5,244 | `headHtml` | `function headHtml(` |
| 5,252 | `heldHighlights` | `var heldHighlights =` |
| 5,253 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,280_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,281 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,282 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,290 | `withLatestPoint` | `function withLatestPoint(` |
| 5,295 | `pressureMaturities` | `function pressureMaturities(` |
| 5,319 | `registerFlowPages` | `function registerFlowPages(` |
| 5,378 | `renderPressureRow` | `function renderPressureRow(` |
| 5,386 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,405 | `ylmColumns` | `function ylmColumns(` |
| 5,425 | `ylmFitLine` | `function ylmFitLine(` |
| 5,437 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,582_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,583 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,620_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,621 | `spreadSeries` | `function spreadSeries(` |
| 5,665 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,789_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,790 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,816_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,817 | `drawHznHead` | `function drawHznHead(` |
| 5,832 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,894_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,895 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,903_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,904 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,003_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,004 | `renderVolatility` | `function renderVolatility(` |
| 6,053 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,083_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,084 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,131_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,132 | `totalRiseIn` | `function totalRiseIn(` |
| 6,142 | `eraInflation` | `function eraInflation(` |
| 6,153 | `eraGrowth` | `function eraGrowth(` |
| 6,169 | `fmtSigned` | `function fmtSigned(` |
| 6,170 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,171 | `growthShown` | `function growthShown(` |
| 6,172 | `growthShownCap` | `function growthShownCap(` |
| 6,173 | `phaseClass` | `function phaseClass(` |
| 6,174 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,178 | `cycleViewEl` | `var cycleViewEl =` |
| 6,179 | `shownEra` | `var shownEra =` |
| 6,180 | `calendarReset` | `var calendarReset =` |
| 6,181 | `metricPageReset` | `var metricPageReset =` |
| 6,182 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,183 | `topbarBack` | `var topbarBack =` |
| 6,184 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,191_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,192 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,273_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,274 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,292_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,293 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,314_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,316 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,317 | `hubSet` | `function hubSet(` |
| 6,328 | `quarterPopup` | `function quarterPopup(` |
| 6,351 | `hubShowDefault` | `function hubShowDefault(` |
| 6,359 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,365 | `hubShowYear` | `function hubShowYear(` |
| 6,375 | `renderCycleDial` | `function renderCycleDial(` |
| 6,456 | `m2Step` | `function m2Step(` |
| 6,459 | `heatStep` | `function heatStep(` |
| 6,463 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,475_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,476 | `renderCycleView` | `function renderCycleView(` |

### The economy the Growth chart draws

_line 6,481_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,482 | `peerChosen` | `function peerChosen(` |
| 6,483 | `peerReaches` | `function peerReaches(` |
| 6,509 | `shownEraModel` | `var shownEraModel =` |
| 6,510 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,512_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,513 | `stripGroupName` | `var stripGroupName =` |
| 6,514 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,542 | `marketStripHtml` | `function marketStripHtml(` |
| 6,576 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,577 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,606_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,607 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,613 | `INDICATOR_GROUP` | `var INDICATOR_GROUP =` |
| 6,619 | `SPLIT_PERIOD` | `var SPLIT_PERIOD =` |
| 6,620 | `debtSvg` | `function debtSvg(` |
| 6,621 | `interestSvg` | `function interestSvg(` |
| 6,623 | `budgetSvg` | `function budgetSvg(` |
| 6,625 | `lede` | `function lede(` |
| 6,626 | `periodOf` | `function periodOf(` |
| 6,627 | `qLast` | `function qLast(` |
| 6,628 | `meterWord` | `function meterWord(` |
| 6,629 | `splitSpecs` | `function splitSpecs(` |
| 6,649 | `productivitySpec` | `function productivitySpec(` |
| 6,658 | `splitMid` | `function splitMid(` |
| 6,659 | `splitInfo` | `function splitInfo(` |
| 6,663 | `quarterTicks` | `function quarterTicks(` |
| 6,668 | `drawSplit` | `function drawSplit(` |
| 6,685 | `mountSplit` | `function mountSplit(` |
| 6,700 | `splitPeek` | `function splitPeek(` |
| 6,708 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,716 | `deficitPeek` | `function deficitPeek(` |
| 6,722 | `catSheet` | `function catSheet(` |
| 6,727 | `groupId` | `function groupId(` |
| 6,728 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,729 | `seatGroups` | `function seatGroups(` |
| 6,732 | `groupSheet` | `function groupSheet(` |
| 6,742 | `appendPicks` | `function appendPicks(` |
| 6,750 | `categoryCats` | `function categoryCats(` |

### The split indicators' insights

_line 6,768_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,769 | `buffettInsight` | `function buffettInsight(` |
| 6,784 | `debtInsight` | `function debtInsight(` |
| 6,799 | `productivityInsight` | `function productivityInsight(` |
| 6,809 | `interestInsight` | `function interestInsight(` |
| 6,824 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,854 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,879 | `activityStackHtml` | `function activityStackHtml(` |
| 6,889 | `seatTemperature` | `function seatTemperature(` |
| 6,897 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,932_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,933 | `partsOf` | `function partsOf(` |
| 6,942 | `discOf` | `function discOf(` |
| 6,945 | `authored` | `function authored(` |
| 6,946 | `registerRoster` | `function registerRoster(` |
| 6,980 | `indRow` | `function indRow(` |
| 6,984 | `IND_ORDER` | `var IND_ORDER =` |
| 6,985 | `indGroupRow` | `function indGroupRow(` |
| 6,990 | `indRows` | `function indRows(` |
| 7,004 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 7,013_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,014 | `NAV` | `var NAV =` |
| 7,015 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,109_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,110 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,158_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,159 | `fmtDay` | `function fmtDay(` |
| 7,160 | `qPretty` | `function qPretty(` |
| 7,161 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,162 | `peekArt` | `function peekArt(` |
| 7,163 | `indPeriod` | `function indPeriod(` |
| 7,172 | `catItem` | `function catItem(` |
| 7,222 | `insightCirculation` | `function insightCirculation(` |
| 7,255 | `insightWeather` | `function insightWeather(` |
| 7,298 | `CAT_MINI` | `var CAT_MINI =` |
| 7,301 | `placeSignPair` | `function placeSignPair(` |
| 7,333 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,349 | `buildCategories` | `function buildCategories(` |
| 7,384 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,426_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,427 | `capeFmt1` | `function capeFmt1(` |
| 7,428 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 7,429 | `GDP_STOPS` | `var GDP_STOPS =` |
| 7,430 | `VAL_STOPS` | `var VAL_STOPS =` |
| 7,431 | `DEF_STOPS` | `var DEF_STOPS =` |
| 7,432 | `qShort` | `function qShort(` |
| 7,433 | `yoyPairs` | `function yoyPairs(` |
| 7,443 | `actCycleMonths` | `function actCycleMonths(` |
| 7,451 | `householdsHighlights` | `function householdsHighlights(` |
| 7,470 | `redrawSheet` | `function redrawSheet(` |
| 7,474 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,538 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,577 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,627 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,657 | `valuationHighlights` | `function valuationHighlights(` |
| 7,670 | `tempHighlights` | `function tempHighlights(` |
| 7,687 | `gdpHighlights` | `function gdpHighlights(` |
| 7,702 | `renderMetricPages` | `function renderMetricPages(` |
| 7,712 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,722_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,723 | `DIAG_SYSTEMS` | `var DIAG_SYSTEMS =` |
| 7,730 | `FEELING_RULES` | `var FEELING_RULES =` |
| 7,739 | `FEELING_STATE` | `var FEELING_STATE =` |
| 7,740 | `POSTURE_STATE` | `var POSTURE_STATE =` |
| 7,741 | `POSTURE_SAYS` | `var POSTURE_SAYS =` |
| 7,748 | `BODY_SAYS` | `var BODY_SAYS =` |
| 7,756 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,761 | `readDoor` | `function readDoor(` |
| 7,769 | `pct` | `function pct(` |
| 7,770 | `symptom` | `function symptom(` |
| 7,771 | `momentumSymptom` | `function momentumSymptom(` |
| 7,775 | `symptomsFor` | `function symptomsFor(` |
| 7,783 | `rosterRows` | `function rosterRows(` |
| 7,788 | `closeFigure` | `function closeFigure(` |
| 7,792 | `eraMove` | `function eraMove(` |
| 7,800 | `analysisFor` | `function analysisFor(` |
| 7,808 | `dxRow` | `function dxRow(` |
| 7,812 | `dxSection` | `function dxSection(` |
| 7,813 | `systemHtml` | `function systemHtml(` |
| 7,816 | `dxHead` | `function dxHead(` |
| 7,821 | `postureLine` | `function postureLine(` |
| 7,825 | `diagnosisInfo` | `function diagnosisInfo(` |
| 7,833 | `assessmentFor` | `function assessmentFor(` |
| 7,843 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,862 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,866 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,867 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,880_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,881 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,882 | `cycleDataOn` | `function cycleDataOn(` |
| 7,883 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,903 | `wireCycleData` | `function wireCycleData(` |
| 7,918 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,963_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,964 | `eraOpen` | `var eraOpen =` |
| 7,965 | `kT` | `function kT(` |
| 7,969 | `eraReading` | `function eraReading(` |
| 7,981 | `eraFig` | `function eraFig(` |
| 7,988 | `eraValue` | `function eraValue(` |
| 7,994 | `eraRange` | `function eraRange(` |
| 7,999 | `eraMini` | `function eraMini(` |
| 8,004 | `eraCard` | `function eraCard(` |
| 8,023 | `eraShow` | `function eraShow(` |
| 8,033 | `enterEra` | `function enterEra(` |
| 8,040 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,047_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,048 | `rosterGroups` | `function rosterGroups(` |
| 8,077 | `__roster` | `var __roster =` |
| 8,078 | `readingRoster` | `function readingRoster(` |
| 8,099 | `readFig` | `function readFig(` |
| 8,104 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,111_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,112 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,136 | `placeWords` | `function placeWords(` |
| 8,140 | `symptomNote` | `function symptomNote(` |
| 8,147 | `symptomRow` | `function symptomRow(` |
| 8,154 | `cycleTrack` | `function cycleTrack(` |
| 8,169 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,177_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,178 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,227_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,228 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,259_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,260 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **6 compute a value**, 6 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 2,002–2,005 | `LIVE_CACHE` | Live data without a render refactor |
| 2,386–2,391 | `productivityRecord` | Productivity growth is not in this panel |
| 2,392–4,358 | `productivityReading` | Productivity growth is not in this panel |
| 4,345–4,358 | `horizonRead` | A series' highest reading within a span |
| 4,786–4,799 | `seasonTrackAll` | The season, computed |
| 4,812–4,816 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,558 |
| `desire-range` | 5,370 |
| `fear-range` | 6,048 |
| `hormones-range` | 5,936 |
| `hzn-range` | 5,857 |
| `pressure-range` | 2,068 |
| `pulse-range` | 5,337 |
| `sheet-marker-deficit` | 7,555 |
| `sheet-metric-gdp` | 7,500 |
| `sheet-metric-households` | 7,579 |
| `sheet-metric-temp` | 7,475 |
| `sheet-metric-valuation` | 7,600 |
| `sheet-sign-activity` | 7,540 |
| `sheet-sign-desire` | 5,371 |
| `sheet-sign-horizon` | 5,858 |
| `sheet-sign-hormones` | 5,937 |
| `sheet-sign-pressure` | 5,574 |
| `sheet-sign-pulse` | 5,336 |
| `sheet-sign-sentiment` | 6,049 |
| `sheet-sign-volume` | 5,354 |
| `volume-range` | 5,355 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,562 |
| `desire-range` | 5,359 |
| `fear-range` | 6,015 |
| `hzn-range` | 5,842 |
| `pressure-range` | 5,543 |
| `pulse-range` | 5,323 |
| `sheet-metric-gdp` | 7,501 |
| `sheet-metric-temp` | 7,476 |
| `sheet-metric-valuation` | 7,601 |
| `volume-range` | 5,341 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,102 |
| `sheet-metric-gdp` | 3,103 |
| `sheet-sign-activity` | 3,104 |
| `sheet-metric-valuation` | 3,105 |
| `sheet-metric-households` | 3,106 |
| `deficit-range` | 3,107 |
| `volume-range` | 3,108 |
| `pulse-range` | 3,109 |
| `hzn-range` | 3,110 |
| `desire-range` | 3,111 |
| `fear-range` | 3,112 |
| `hormones-range` | 3,113 |
| `pressure-range` | 3,114 |

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

