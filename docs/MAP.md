# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,082 lines**, about 604 KB, roughly **172 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `b3148bc` on 2026-10-01.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,386 | the whole stylesheet, every token and rule |
| **Markup** | 1,387–1,795 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,796–8,049 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,050–8,082 | </body></html> |

Counts: **351** top-level functions, **177** top-level vars, **4** top-level IIFEs in the script.

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
| 1,968 | `fearCurveHistory` | `var fearCurveHistory =` |
| 1,969 | `volatilityHistory` | `var volatilityHistory =` |
| 1,971 | `fiscalHistory` | `var fiscalHistory =` |
| 1,977 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,979 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,989 | `productivityHistory` | `var productivityHistory =` |

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
| 3,881 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,886_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,887 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,896_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,897 | `calendarTodayY` | `var calendarTodayY =` |
| 3,899 | `vix3mClose` | `var vix3mClose =` |
| 3,900 | `fearCurve` | `function fearCurve(` |
| 3,905 | `curveVerdict` | `function curveVerdict(` |
| 3,910 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,919_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,920 | `modeBar` | `function modeBar(` |
| 3,927 | `pickerOpen` | `var pickerOpen =` |
| 3,928 | `cycleByName` | `function cycleByName(` |
| 3,932 | `openCycle` | `function openCycle(` |
| 3,936 | `cycleSlice` | `function cycleSlice(` |
| 3,944 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,952 | `cycleMonths` | `function cycleMonths(` |
| 3,960 | `histControls` | `function histControls(` |
| 3,969 | `cycLabel` | `function cycLabel(` |
| 3,973 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,978 | `cyclePicker` | `function cyclePicker(` |
| 3,997 | `rangeBar` | `function rangeBar(` |
| 4,004 | `trendOf` | `function trendOf(` |
| 4,019 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,023 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,034_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,035 | `yearOf` | `function yearOf(` |
| 4,036 | `mean` | `function mean(` |

### The record rows

_line 4,037_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,038 | `headSigma` | `function headSigma(` |
| 4,043 | `atQuarter` | `function atQuarter(` |
| 4,044 | `atMonth` | `function atMonth(` |
| 4,045 | `ordinal` | `function ordinal(` |
| 4,046 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,049_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,050 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,057 | `moreRow` | `function moreRow(` |
| 4,063 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,064 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,070_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,071 | `xLabelOf` | `function xLabelOf(` |
| 4,081 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,099_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,100 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,108 | `vGrid` | `function vGrid(` |
| 4,112 | `COL_FILL` | `var COL_FILL =` |
| 4,113 | `colPath` | `function colPath(` |
| 4,118 | `colWidth` | `function colWidth(` |
| 4,123 | `AXIS` | `var AXIS =` |
| 4,124 | `histFrame` | `function histFrame(` |
| 4,131 | `xLabel` | `function xLabel(` |
| 4,134 | `crossLine` | `function crossLine(` |
| 4,137 | `zeroRule` | `function zeroRule(` |
| 4,140 | `meanRule` | `function meanRule(` |
| 4,141 | `pendingGeom` | `var pendingGeom =` |
| 4,142 | `publishGeom` | `function publishGeom(` |
| 4,143 | `attachHistory` | `function attachHistory(` |
| 4,152 | `histBar` | `function histBar(` |
| 4,155 | `histTip` | `function histTip(` |
| 4,156 | `avgRule` | `function avgRule(` |
| 4,159 | `vhOpen` | `function vhOpen(` |
| 4,160 | `chartAxes` | `function chartAxes(` |
| 4,190 | `divergeChart` | `function divergeChart(` |
| 4,224 | `pairChart` | `function pairChart(` |

### A series' highest reading within a span

_line 4,252_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,254 | `maxIn` | `function maxIn(` |
| 4,259 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,260 | `PEEK_W` | `var PEEK_W =` |
| 4,261 | `PEEK_H` | `var PEEK_H =` |
| 4,262 | `colPeek` | `function colPeek(` |
| 4,280 | `meterPeek` | `function meterPeek(` |
| 4,297 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,302 | `pressureZone` | `function pressureZone(` |
| 4,308 | `HZN_BACK` | `var HZN_BACK =` |
| 4,309 | `hznLast` | `function hznLast(` |
| 4,310 | `hznBack` | `function hznBack(` |
| 4,311 | `horizonWord` | `function horizonWord(` |
| 4,331 | `HZN_METERS` | `var HZN_METERS =` |
| 4,339 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,360 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,365 | `RISK_RISK` | `var RISK_RISK =` |
| 4,370 | `riskCell` | `function riskCell(` |
| 4,371 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,401 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,426_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,427 | `pulseClipN` | `var pulseClipN =` |
| 4,428 | `beatPath` | `function beatPath(` |
| 4,445 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,459 | `pulsePeek` | `function pulsePeek(` |
| 4,462 | `pulseBlock` | `function pulseBlock(` |
| 4,479 | `CHEV` | `var CHEV =` |
| 4,480 | `peekCard` | `function peekCard(` |
| 4,499 | `dropSvg` | `function dropSvg(` |
| 4,501 | `volumeSvg` | `function volumeSvg(` |
| 4,505 | `gaugeSvg` | `function gaugeSvg(` |
| 4,509 | `diamondSvg` | `function diamondSvg(` |
| 4,513 | `sproutSvg` | `function sproutSvg(` |
| 4,521 | `markSvg` | `function markSvg(` |
| 4,524 | `hormoneSvg` | `function hormoneSvg(` |
| 4,529 | `flameSvg` | `function flameSvg(` |
| 4,532 | `clockSvg` | `function clockSvg(` |
| 4,533 | `gearSvg` | `function gearSvg(` |
| 4,541 | `thermoSvg` | `function thermoSvg(` |
| 4,544 | `trendUpSvg` | `function trendUpSvg(` |
| 4,546 | `ecgSvg` | `function ecgSvg(` |
| 4,548 | `circulationSvg` | `function circulationSvg(` |
| 4,549 | `weatherSvg` | `function weatherSvg(` |
| 4,557 | `moodSvg` | `function moodSvg(` |
| 4,561 | `boltSvg` | `function boltSvg(` |
| 4,562 | `houseSvg` | `function houseSvg(` |
| 4,565 | `sunriseSvg` | `function sunriseSvg(` |
| 4,569 | `umbrellaSvg` | `function umbrellaSvg(` |
| 4,573 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 4,579_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,580 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,581 | `dsrHistory` | `var dsrHistory =` |
| 4,582 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,583 | `savHistory` | `var savHistory =` |
| 4,586 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,595 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,596 | `dsrNow` | `var dsrNow =` |
| 4,597 | `savNow` | `var savNow =` |
| 4,598 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,599 | `householdsWord` | `function householdsWord(` |
| 4,606 | `householdsNow` | `var householdsNow =` |
| 4,607 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,624 | `savInfoHtml` | `function savInfoHtml(` |
| 4,642 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,649 | `curveSub` | `var curveSub =` |
| 4,650 | `vixPct` | `function vixPct(` |
| 4,654 | `curveNoteFull` | `var curveNoteFull =` |
| 4,665 | `volatilityRing` | `function volatilityRing(` |
| 4,670 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,671 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,686 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,692 | `marketCycles` | `var marketCycles =` |
| 4,720 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,722_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,723 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,724 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 4,729_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,730 | `slopeOf` | `function slopeOf(` |
| 4,735 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,736 | `readSeason` | `function readSeason(` |
| 4,755 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,756 | `qLabel` | `function qLabel(` |
| 4,771 | `regimeTrack` | `function regimeTrack(` |
| 4,791 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,793_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,794 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,795 | `seasonTitle` | `function seasonTitle(` |
| 4,796 | `monthLabel` | `function monthLabel(` |
| 4,797 | `cycleModel` | `function cycleModel(` |
| 4,834 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,842 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,848 | `nowModel` | `var nowModel =` |
| 4,849 | `readingNow` | `var readingNow =` |
| 4,850 | `cpiNow` | `var cpiNow =` |
| 4,851 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,852 | `currentSeason` | `var currentSeason =` |
| 4,853 | `seasonWhy` | `var seasonWhy =` |
| 4,855 | `seasonGroup` | `function seasonGroup(` |
| 4,858 | `vitalRingSvg` | `function vitalRingSvg(` |
| 4,869 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 4,870 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 4,871 | `spreadLabel` | `function spreadLabel(` |
| 4,875 | `policyFacts` | `function policyFacts(` |
| 4,882 | `policyFactRows` | `function policyFactRows(` |
| 4,888 | `allSources` | `var allSources =` |
| 4,902 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 4,914_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,915 | `SVG_NS` | `var SVG_NS =` |
| 4,916 | `svgEl` | `function svgEl(` |
| 4,921 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 4,955_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,956 | `clampPct` | `function clampPct(` |
| 4,959 | `detailTexts` | `var detailTexts =` |
| 4,960 | `detailSlots` | `var detailSlots =` |
| 4,961 | `detailSlot` | `function detailSlot(` |
| 4,971 | `facts` | `function facts(` |
| 4,972 | `factsFrom` | `function factsFrom(` |
| 4,976 | `expandBtn` | `function expandBtn(` |
| 4,980 | `sheetRenderers` | `var sheetRenderers =` |
| 4,981 | `pageMode` | `var pageMode =` |
| 4,986 | `pageCycles` | `var pageCycles =` |
| 4,991 | `pageRange` | `var pageRange =` |
| 4,997 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,026_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,029 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,030_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,031 | `subjectRow` | `function subjectRow(` |
| 5,041 | `subjectIcon` | `function subjectIcon(` |
| 5,042 | `srcHtml` | `function srcHtml(` |
| 5,043 | `TIMING` | `var TIMING =` |
| 5,049 | `timingMark` | `function timingMark(` |
| 5,057 | `timingPill` | `function timingPill(` |
| 5,066 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,074 | `seatPageFoot` | `function seatPageFoot(` |
| 5,086 | `timingMembers` | `var timingMembers =` |
| 5,087 | `registerTiming` | `function registerTiming(` |
| 5,089 | `headHtml` | `function headHtml(` |
| 5,097 | `heldHighlights` | `var heldHighlights =` |
| 5,098 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,125_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,126 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,127 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,135 | `withLatestPoint` | `function withLatestPoint(` |
| 5,140 | `pressureMaturities` | `function pressureMaturities(` |
| 5,164 | `registerFlowPages` | `function registerFlowPages(` |
| 5,223 | `renderPressureRow` | `function renderPressureRow(` |
| 5,231 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,250 | `ylmColumns` | `function ylmColumns(` |
| 5,270 | `ylmFitLine` | `function ylmFitLine(` |
| 5,282 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,427_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,428 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,465_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,466 | `spreadSeries` | `function spreadSeries(` |
| 5,510 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,634_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,635 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,661_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,662 | `drawHznHead` | `function drawHznHead(` |
| 5,677 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,739_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,740 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,748_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,749 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 5,848_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,849 | `renderVolatility` | `function renderVolatility(` |
| 5,898 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 5,928_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,929 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 5,976_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,977 | `totalRiseIn` | `function totalRiseIn(` |
| 5,987 | `eraInflation` | `function eraInflation(` |
| 5,998 | `eraGrowth` | `function eraGrowth(` |
| 6,014 | `fmtSigned` | `function fmtSigned(` |
| 6,015 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,016 | `growthShown` | `function growthShown(` |
| 6,017 | `growthShownCap` | `function growthShownCap(` |
| 6,018 | `phaseClass` | `function phaseClass(` |
| 6,019 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,024 | `cycleViewEl` | `var cycleViewEl =` |
| 6,025 | `shownEra` | `var shownEra =` |
| 6,026 | `calendarReset` | `var calendarReset =` |
| 6,027 | `metricPageReset` | `var metricPageReset =` |
| 6,028 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,029 | `topbarBack` | `var topbarBack =` |
| 6,030 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,037_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,038 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,119_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,120 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,138_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,139 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,160_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,162 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,163 | `hubSet` | `function hubSet(` |
| 6,174 | `quarterPopup` | `function quarterPopup(` |
| 6,197 | `hubShowDefault` | `function hubShowDefault(` |
| 6,205 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,211 | `hubShowYear` | `function hubShowYear(` |
| 6,221 | `renderCycleDial` | `function renderCycleDial(` |
| 6,302 | `m2Step` | `function m2Step(` |
| 6,305 | `heatStep` | `function heatStep(` |
| 6,309 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,321_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,322 | `renderCycleView` | `function renderCycleView(` |

### The economy the Growth chart draws

_line 6,327_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,328 | `peerChosen` | `function peerChosen(` |
| 6,329 | `peerReaches` | `function peerReaches(` |
| 6,355 | `shownEraModel` | `var shownEraModel =` |
| 6,356 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,358_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,359 | `stripGroupName` | `var stripGroupName =` |
| 6,360 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,388 | `marketStripHtml` | `function marketStripHtml(` |
| 6,422 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,423 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,452_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,453 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,459 | `INDICATOR_GROUP` | `var INDICATOR_GROUP =` |
| 6,465 | `SPLIT_PERIOD` | `var SPLIT_PERIOD =` |
| 6,466 | `debtSvg` | `function debtSvg(` |
| 6,467 | `interestSvg` | `function interestSvg(` |
| 6,469 | `budgetSvg` | `function budgetSvg(` |
| 6,471 | `lede` | `function lede(` |
| 6,472 | `periodOf` | `function periodOf(` |
| 6,473 | `qLast` | `function qLast(` |
| 6,474 | `meterWord` | `function meterWord(` |
| 6,475 | `splitSpecs` | `function splitSpecs(` |
| 6,495 | `productivitySpec` | `function productivitySpec(` |
| 6,504 | `splitMid` | `function splitMid(` |
| 6,505 | `splitInfo` | `function splitInfo(` |
| 6,509 | `quarterTicks` | `function quarterTicks(` |
| 6,514 | `drawSplit` | `function drawSplit(` |
| 6,531 | `mountSplit` | `function mountSplit(` |
| 6,547 | `splitPeek` | `function splitPeek(` |
| 6,555 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,563 | `deficitPeek` | `function deficitPeek(` |
| 6,569 | `catSheet` | `function catSheet(` |
| 6,574 | `groupId` | `function groupId(` |
| 6,575 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,576 | `seatGroups` | `function seatGroups(` |
| 6,579 | `groupSheet` | `function groupSheet(` |
| 6,589 | `appendPicks` | `function appendPicks(` |
| 6,597 | `categoryCats` | `function categoryCats(` |

### The split indicators' insights

_line 6,615_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,616 | `buffettInsight` | `function buffettInsight(` |
| 6,631 | `debtInsight` | `function debtInsight(` |
| 6,646 | `productivityInsight` | `function productivityInsight(` |
| 6,656 | `interestInsight` | `function interestInsight(` |
| 6,671 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,702 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,727 | `activityStackHtml` | `function activityStackHtml(` |
| 6,737 | `seatTemperature` | `function seatTemperature(` |
| 6,745 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,781_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,782 | `partsOf` | `function partsOf(` |
| 6,791 | `discOf` | `function discOf(` |
| 6,794 | `authored` | `function authored(` |
| 6,795 | `registerRoster` | `function registerRoster(` |
| 6,829 | `indRow` | `function indRow(` |
| 6,833 | `IND_ORDER` | `var IND_ORDER =` |
| 6,834 | `indGroupRow` | `function indGroupRow(` |
| 6,839 | `indRows` | `function indRows(` |
| 6,853 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 6,862_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,863 | `NAV` | `var NAV =` |
| 6,864 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 6,958_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,959 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,007_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,008 | `fmtDay` | `function fmtDay(` |
| 7,009 | `qPretty` | `function qPretty(` |
| 7,010 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,011 | `peekArt` | `function peekArt(` |
| 7,012 | `indPeriod` | `function indPeriod(` |
| 7,021 | `catItem` | `function catItem(` |
| 7,071 | `insightCirculation` | `function insightCirculation(` |
| 7,104 | `insightWeather` | `function insightWeather(` |
| 7,147 | `CAT_MINI` | `var CAT_MINI =` |
| 7,150 | `placeSignPair` | `function placeSignPair(` |
| 7,182 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,198 | `buildCategories` | `function buildCategories(` |
| 7,240 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,282_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,283 | `capeFmt1` | `function capeFmt1(` |
| 7,284 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 7,285 | `GDP_STOPS` | `var GDP_STOPS =` |
| 7,286 | `VAL_STOPS` | `var VAL_STOPS =` |
| 7,287 | `DEF_STOPS` | `var DEF_STOPS =` |
| 7,288 | `qShort` | `function qShort(` |
| 7,289 | `yoyPairs` | `function yoyPairs(` |
| 7,299 | `actCycleMonths` | `function actCycleMonths(` |
| 7,307 | `householdsHighlights` | `function householdsHighlights(` |
| 7,326 | `redrawSheet` | `function redrawSheet(` |
| 7,330 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,394 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,433 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,483 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,513 | `valuationHighlights` | `function valuationHighlights(` |
| 7,526 | `tempHighlights` | `function tempHighlights(` |
| 7,543 | `gdpHighlights` | `function gdpHighlights(` |
| 7,558 | `renderMetricPages` | `function renderMetricPages(` |
| 7,568 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,581_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,582 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,583 | `cycleDataOn` | `function cycleDataOn(` |
| 7,584 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,604 | `wireCycleData` | `function wireCycleData(` |
| 7,619 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,664_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,665 | `eraOpen` | `var eraOpen =` |
| 7,666 | `kT` | `function kT(` |
| 7,670 | `eraReading` | `function eraReading(` |
| 7,682 | `eraFig` | `function eraFig(` |
| 7,689 | `eraValue` | `function eraValue(` |
| 7,695 | `eraRange` | `function eraRange(` |
| 7,700 | `eraMini` | `function eraMini(` |
| 7,705 | `eraCard` | `function eraCard(` |
| 7,724 | `eraShow` | `function eraShow(` |
| 7,734 | `enterEra` | `function enterEra(` |
| 7,741 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,748_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,749 | `rosterGroups` | `function rosterGroups(` |
| 7,777 | `__roster` | `var __roster =` |
| 7,778 | `readingRoster` | `function readingRoster(` |
| 7,799 | `readFig` | `function readFig(` |
| 7,804 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 7,811_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,812 | `cycleSymptoms` | `function cycleSymptoms(` |
| 7,836 | `placeWords` | `function placeWords(` |
| 7,840 | `symptomNote` | `function symptomNote(` |
| 7,847 | `symptomRow` | `function symptomRow(` |
| 7,854 | `cycleTrack` | `function cycleTrack(` |
| 7,869 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 7,877_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,878 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 7,927_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,928 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 7,959_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,960 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,992–1,995 | `LIVE_CACHE` | Live data without a render refactor |
| 4,317–4,330 | `horizonRead` | A series' highest reading within a span |
| 4,757–4,770 | `seasonTrackAll` | The season, computed |
| 4,786–4,790 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,414 |
| `desire-range` | 5,215 |
| `fear-range` | 5,893 |
| `hormones-range` | 5,781 |
| `hzn-range` | 5,702 |
| `pressure-range` | 2,058 |
| `pulse-range` | 5,182 |
| `sheet-marker-deficit` | 7,411 |
| `sheet-metric-gdp` | 7,356 |
| `sheet-metric-households` | 7,435 |
| `sheet-metric-temp` | 7,331 |
| `sheet-metric-valuation` | 7,456 |
| `sheet-sign-activity` | 7,396 |
| `sheet-sign-desire` | 5,216 |
| `sheet-sign-horizon` | 5,703 |
| `sheet-sign-hormones` | 5,782 |
| `sheet-sign-pressure` | 5,419 |
| `sheet-sign-pulse` | 5,181 |
| `sheet-sign-sentiment` | 5,894 |
| `sheet-sign-volume` | 5,199 |
| `volume-range` | 5,200 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,418 |
| `desire-range` | 5,204 |
| `fear-range` | 5,860 |
| `hzn-range` | 5,687 |
| `pressure-range` | 5,388 |
| `pulse-range` | 5,168 |
| `sheet-metric-gdp` | 7,357 |
| `sheet-metric-temp` | 7,332 |
| `sheet-metric-valuation` | 7,457 |
| `volume-range` | 5,186 |

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

