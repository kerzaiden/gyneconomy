# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,069 lines**, about 603 KB, roughly **171 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `97838d6` on 2026-10-01.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,386 | the whole stylesheet, every token and rule |
| **Markup** | 1,387–1,795 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,796–8,036 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,037–8,069 | </body></html> |

Counts: **348** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

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
| 2,039 | `repaintFearCurve` | `function repaintFearCurve(` |
| 2,045 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,053 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,058 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,062 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,067_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,068 | `READINGS` | `var READINGS =` |
| 2,124 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,125 | `KINDS` | `var KINDS =` |
| 2,126 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,140 | `receive` | `function receive(` |
| 2,156 | `liveAsOf` | `var liveAsOf =` |
| 2,157 | `fmtAsOf` | `function fmtAsOf(` |
| 2,162 | `applyLive` | `function applyLive(` |
| 2,175 | `shapeOk` | `function shapeOk(` |
| 2,182 | `repaintPolicy` | `function repaintPolicy(` |
| 2,188 | `GYN` | `var GYN =` |
| 2,215 | `refreshLiveData` | `function refreshLiveData(` |
| 2,233 | `fetchSiteData` | `function fetchSiteData(` |
| 2,249 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,254_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,255 | `yieldCurve` | `var yieldCurve =` |
| 2,261 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,262 | `curveAsOf` | `function curveAsOf(` |
| 2,267 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,268 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,273 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,275_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,276 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,277 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,278 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,279 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,280 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,282_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,283 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,289 | `uninvLagToday` | `var uninvLagToday =` |
| 2,294 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,300 | `gdpPeers` | `var gdpPeers =` |
| 2,341 | `gdpSrc` | `var gdpSrc =` |
| 2,342 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,348 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,377_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,379 | `productivityReading` | `var productivityReading =` |

### The deficit, year by year

_line 2,392_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,393 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,394 | `deficitHistory` | `var deficitHistory =` |
| 2,397 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,398 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,400 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,409_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,410 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,420_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,421 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,424 | `timelineSpan` | `function timelineSpan(` |
| 2,429 | `timelineFor` | `function timelineFor(` |
| 2,440 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,446_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,447 | `windowScale` | `function windowScale(` |
| 2,462 | `windowYears` | `function windowYears(` |
| 2,470 | `refName` | `function refName(` |
| 2,474 | `histReadEnsure` | `function histReadEnsure(` |
| 2,494 | `histReadFill` | `function histReadFill(` |
| 2,544 | `histAxisEnds` | `function histAxisEnds(` |
| 2,555 | `histLegend` | `function histLegend(` |
| 2,615 | `refitHistory` | `function refitHistory(` |
| 2,625 | `wireHistHover` | `function wireHistHover(` |
| 2,662 | `mWindowFrom` | `function mWindowFrom(` |
| 2,666 | `qWindowFrom` | `function qWindowFrom(` |
| 2,670 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,671 | `PULSE_STOPS` | `var PULSE_STOPS =` |
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
| 2,804 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 2,805 | `hyNum` | `function hyNum(` |
| 2,806 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,814 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,824 | `capeHistory` | `var capeHistory =` |
| 2,826 | `longCycleSrc` | `var longCycleSrc =` |
| 2,842 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,856_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,857 | `sentiment` | `var sentiment =` |
| 2,873 | `valuation` | `var valuation =` |
| 2,894 | `valRow` | `function valRow(` |
| 2,899 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,902 | `coincident` | `var coincident =` |
| 2,952 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,958 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,959 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,960 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,962_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,963 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,964 | `m2vHistory` | `var m2vHistory =` |
| 2,980 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,034 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,075_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,076 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,077 | `DOTS` | `var DOTS =` |
| 3,079 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,094 | `headPickRow` | `function headPickRow(` |
| 3,100 | `histHead` | `function histHead(` |
| 3,115 | `headNoteIdx` | `var headNoteIdx =` |
| 3,116 | `headMenuHtml` | `function headMenuHtml(` |
| 3,141 | `headMenuFor` | `var headMenuFor =` |
| 3,142 | `headSubFor` | `var headSubFor =` |
| 3,143 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,174 | `histNote` | `function histNote(` |
| 3,175 | `meterFlagged` | `function meterFlagged(` |
| 3,182 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,205 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,219 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,232 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,237 | `productivityInfoHtml` | `function productivityInfoHtml(` |
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

_line 3,469_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,470 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,479 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,537 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,538 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,539 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,540_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,542 | `householdsChart` | `function householdsChart(` |
| 3,591 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,646 | `GDP_NORM` | `var GDP_NORM =` |
| 3,647 | `gdpNowQ` | `var gdpNowQ =` |
| 3,648 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,670 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,723 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,770 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,778 | `velocityVerdict` | `function velocityVerdict(` |
| 3,786 | `derivePulseTag` | `function derivePulseTag(` |
| 3,792 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,824_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,825 | `seasonReading` | `var seasonReading =` |
| 3,869 | `frameworkRows` | `var frameworkRows =` |
| 3,879 | `vixRow` | `var vixRow =` |
| 3,880 | `vixWordOf` | `var vixWordOf =` |
| 3,884 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,894_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,895 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,904_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,905 | `calendarTodayY` | `var calendarTodayY =` |
| 3,907 | `vix3mClose` | `var vix3mClose =` |
| 3,908 | `fearCurve` | `function fearCurve(` |
| 3,913 | `curveVerdict` | `function curveVerdict(` |
| 3,918 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,927_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,928 | `modeBar` | `function modeBar(` |
| 3,935 | `pickerOpen` | `var pickerOpen =` |
| 3,936 | `cycleByName` | `function cycleByName(` |
| 3,940 | `openCycle` | `function openCycle(` |
| 3,944 | `cycleSlice` | `function cycleSlice(` |
| 3,952 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,960 | `cycleMonths` | `function cycleMonths(` |
| 3,968 | `histControls` | `function histControls(` |
| 3,977 | `cycLabel` | `function cycLabel(` |
| 3,981 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,986 | `cyclePicker` | `function cyclePicker(` |
| 4,005 | `rangeBar` | `function rangeBar(` |
| 4,012 | `trendOf` | `function trendOf(` |
| 4,027 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,031 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,042_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,043 | `yearOf` | `function yearOf(` |
| 4,044 | `mean` | `function mean(` |

### The record rows

_line 4,045_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,046 | `headSigma` | `function headSigma(` |
| 4,051 | `atQuarter` | `function atQuarter(` |
| 4,052 | `atMonth` | `function atMonth(` |
| 4,053 | `ordinal` | `function ordinal(` |
| 4,054 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,057_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,058 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,065 | `moreRow` | `function moreRow(` |
| 4,071 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,072 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,078_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,079 | `xLabelOf` | `function xLabelOf(` |
| 4,089 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,107_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,108 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,116 | `vGrid` | `function vGrid(` |
| 4,120 | `COL_FILL` | `var COL_FILL =` |
| 4,121 | `colPath` | `function colPath(` |
| 4,126 | `colWidth` | `function colWidth(` |
| 4,131 | `AXIS` | `var AXIS =` |
| 4,132 | `histFrame` | `function histFrame(` |
| 4,139 | `xLabel` | `function xLabel(` |
| 4,142 | `crossLine` | `function crossLine(` |
| 4,145 | `zeroRule` | `function zeroRule(` |
| 4,148 | `meanRule` | `function meanRule(` |
| 4,149 | `pendingGeom` | `var pendingGeom =` |
| 4,150 | `publishGeom` | `function publishGeom(` |
| 4,151 | `attachHistory` | `function attachHistory(` |
| 4,160 | `histBar` | `function histBar(` |
| 4,163 | `histTip` | `function histTip(` |
| 4,164 | `avgRule` | `function avgRule(` |
| 4,167 | `vhOpen` | `function vhOpen(` |
| 4,168 | `chartAxes` | `function chartAxes(` |
| 4,198 | `divergeChart` | `function divergeChart(` |
| 4,232 | `pairChart` | `function pairChart(` |

### A series' highest reading within a span

_line 4,260_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,262 | `maxIn` | `function maxIn(` |
| 4,267 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,268 | `PEEK_W` | `var PEEK_W =` |
| 4,269 | `PEEK_H` | `var PEEK_H =` |
| 4,270 | `colPeek` | `function colPeek(` |
| 4,288 | `meterPeek` | `function meterPeek(` |
| 4,305 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,310 | `pressureZone` | `function pressureZone(` |
| 4,316 | `HZN_BACK` | `var HZN_BACK =` |
| 4,317 | `hznLast` | `function hznLast(` |
| 4,318 | `hznBack` | `function hznBack(` |
| 4,319 | `horizonWord` | `function horizonWord(` |
| 4,339 | `HZN_METERS` | `var HZN_METERS =` |
| 4,347 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,368 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,373 | `RISK_RISK` | `var RISK_RISK =` |
| 4,378 | `riskCell` | `function riskCell(` |
| 4,379 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,409 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,434_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,435 | `pulseClipN` | `var pulseClipN =` |
| 4,436 | `beatPath` | `function beatPath(` |
| 4,453 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,467 | `pulsePeek` | `function pulsePeek(` |
| 4,470 | `pulseBlock` | `function pulseBlock(` |
| 4,487 | `CHEV` | `var CHEV =` |
| 4,488 | `peekCard` | `function peekCard(` |
| 4,507 | `dropSvg` | `function dropSvg(` |
| 4,509 | `volumeSvg` | `function volumeSvg(` |
| 4,513 | `gaugeSvg` | `function gaugeSvg(` |
| 4,517 | `diamondSvg` | `function diamondSvg(` |
| 4,521 | `sproutSvg` | `function sproutSvg(` |
| 4,529 | `markSvg` | `function markSvg(` |
| 4,532 | `hormoneSvg` | `function hormoneSvg(` |
| 4,537 | `flameSvg` | `function flameSvg(` |
| 4,540 | `clockSvg` | `function clockSvg(` |
| 4,541 | `gearSvg` | `function gearSvg(` |
| 4,549 | `thermoSvg` | `function thermoSvg(` |
| 4,552 | `trendUpSvg` | `function trendUpSvg(` |
| 4,554 | `ecgSvg` | `function ecgSvg(` |
| 4,556 | `circulationSvg` | `function circulationSvg(` |
| 4,557 | `weatherSvg` | `function weatherSvg(` |
| 4,565 | `moodSvg` | `function moodSvg(` |
| 4,569 | `boltSvg` | `function boltSvg(` |
| 4,570 | `houseSvg` | `function houseSvg(` |
| 4,573 | `sunriseSvg` | `function sunriseSvg(` |
| 4,577 | `umbrellaSvg` | `function umbrellaSvg(` |
| 4,581 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 4,587_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,588 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,589 | `dsrHistory` | `var dsrHistory =` |
| 4,590 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,591 | `savHistory` | `var savHistory =` |
| 4,594 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,603 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,604 | `dsrNow` | `var dsrNow =` |
| 4,605 | `savNow` | `var savNow =` |
| 4,606 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,607 | `householdsWord` | `function householdsWord(` |
| 4,614 | `householdsNow` | `var householdsNow =` |
| 4,615 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,632 | `savInfoHtml` | `function savInfoHtml(` |
| 4,650 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,657 | `curveNow` | `var curveNow =` |
| 4,658 | `curveTag` | `var curveTag =` |
| 4,659 | `curveSub` | `var curveSub =` |
| 4,660 | `curvePct` | `function curvePct(` |
| 4,661 | `curveNoteFull` | `var curveNoteFull =` |
| 4,676 | `curveDetailHtml` | `function curveDetailHtml(` |
| 4,680 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,686 | `marketCycles` | `var marketCycles =` |
| 4,714 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,716_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,717 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,718 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 4,723_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,724 | `slopeOf` | `function slopeOf(` |
| 4,729 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,730 | `readSeason` | `function readSeason(` |
| 4,749 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,750 | `qLabel` | `function qLabel(` |
| 4,765 | `regimeTrack` | `function regimeTrack(` |
| 4,785 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,787_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,788 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,789 | `seasonTitle` | `function seasonTitle(` |
| 4,790 | `monthLabel` | `function monthLabel(` |
| 4,791 | `cycleModel` | `function cycleModel(` |
| 4,828 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,836 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,842 | `nowModel` | `var nowModel =` |
| 4,843 | `readingNow` | `var readingNow =` |
| 4,844 | `cpiNow` | `var cpiNow =` |
| 4,845 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,846 | `currentSeason` | `var currentSeason =` |
| 4,847 | `seasonWhy` | `var seasonWhy =` |
| 4,849 | `seasonGroup` | `function seasonGroup(` |
| 4,852 | `vitalRingSvg` | `function vitalRingSvg(` |
| 4,863 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 4,864 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 4,865 | `spreadLabel` | `function spreadLabel(` |
| 4,869 | `policyFacts` | `function policyFacts(` |
| 4,876 | `policyFactRows` | `function policyFactRows(` |
| 4,882 | `allSources` | `var allSources =` |
| 4,896 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 4,908_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,909 | `SVG_NS` | `var SVG_NS =` |
| 4,910 | `svgEl` | `function svgEl(` |
| 4,915 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 4,949_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,950 | `clampPct` | `function clampPct(` |
| 4,953 | `detailTexts` | `var detailTexts =` |
| 4,954 | `detailSlots` | `var detailSlots =` |
| 4,955 | `detailSlot` | `function detailSlot(` |
| 4,965 | `facts` | `function facts(` |
| 4,966 | `factsFrom` | `function factsFrom(` |
| 4,970 | `expandBtn` | `function expandBtn(` |
| 4,974 | `sheetRenderers` | `var sheetRenderers =` |
| 4,975 | `pageMode` | `var pageMode =` |
| 4,980 | `pageCycles` | `var pageCycles =` |
| 4,985 | `pageRange` | `var pageRange =` |
| 4,991 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,020_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,023 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,024_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,025 | `subjectRow` | `function subjectRow(` |
| 5,035 | `subjectIcon` | `function subjectIcon(` |
| 5,036 | `srcHtml` | `function srcHtml(` |
| 5,037 | `TIMING` | `var TIMING =` |
| 5,043 | `timingMark` | `function timingMark(` |
| 5,051 | `timingPill` | `function timingPill(` |
| 5,060 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,068 | `seatPageFoot` | `function seatPageFoot(` |
| 5,080 | `timingMembers` | `var timingMembers =` |
| 5,081 | `registerTiming` | `function registerTiming(` |
| 5,083 | `headHtml` | `function headHtml(` |
| 5,091 | `heldHighlights` | `var heldHighlights =` |
| 5,092 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,119_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,120 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,121 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,129 | `withLatestPoint` | `function withLatestPoint(` |
| 5,134 | `pressureMaturities` | `function pressureMaturities(` |
| 5,158 | `registerFlowPages` | `function registerFlowPages(` |
| 5,217 | `renderPressureRow` | `function renderPressureRow(` |
| 5,225 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,244 | `ylmColumns` | `function ylmColumns(` |
| 5,264 | `ylmFitLine` | `function ylmFitLine(` |
| 5,276 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,421_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,422 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,459_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,460 | `spreadSeries` | `function spreadSeries(` |
| 5,504 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,628_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,629 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,655_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,656 | `drawHznHead` | `function drawHznHead(` |
| 5,671 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,733_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,734 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,742_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,743 | `renderHormones` | `function renderHormones(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 5,842_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,843 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 5,915_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,916 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 5,963_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,964 | `totalRiseIn` | `function totalRiseIn(` |
| 5,974 | `eraInflation` | `function eraInflation(` |
| 5,985 | `eraGrowth` | `function eraGrowth(` |
| 6,001 | `fmtSigned` | `function fmtSigned(` |
| 6,002 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,003 | `growthShown` | `function growthShown(` |
| 6,004 | `growthShownCap` | `function growthShownCap(` |
| 6,005 | `phaseClass` | `function phaseClass(` |
| 6,006 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,011 | `cycleViewEl` | `var cycleViewEl =` |
| 6,012 | `shownEra` | `var shownEra =` |
| 6,013 | `calendarReset` | `var calendarReset =` |
| 6,014 | `metricPageReset` | `var metricPageReset =` |
| 6,015 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,016 | `topbarBack` | `var topbarBack =` |
| 6,017 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,024_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,025 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,106_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,107 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,125_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,126 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,147_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,149 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,150 | `hubSet` | `function hubSet(` |
| 6,161 | `quarterPopup` | `function quarterPopup(` |
| 6,184 | `hubShowDefault` | `function hubShowDefault(` |
| 6,192 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,198 | `hubShowYear` | `function hubShowYear(` |
| 6,208 | `renderCycleDial` | `function renderCycleDial(` |
| 6,289 | `m2Step` | `function m2Step(` |
| 6,292 | `heatStep` | `function heatStep(` |
| 6,296 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,308_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,309 | `renderCycleView` | `function renderCycleView(` |

### The economy the Growth chart draws

_line 6,314_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,315 | `peerChosen` | `function peerChosen(` |
| 6,316 | `peerReaches` | `function peerReaches(` |
| 6,342 | `shownEraModel` | `var shownEraModel =` |
| 6,343 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,345_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,346 | `stripGroupName` | `var stripGroupName =` |
| 6,347 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,375 | `marketStripHtml` | `function marketStripHtml(` |
| 6,409 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,410 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,439_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,440 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,446 | `INDICATOR_GROUP` | `var INDICATOR_GROUP =` |
| 6,452 | `SPLIT_PERIOD` | `var SPLIT_PERIOD =` |
| 6,453 | `debtSvg` | `function debtSvg(` |
| 6,454 | `interestSvg` | `function interestSvg(` |
| 6,456 | `budgetSvg` | `function budgetSvg(` |
| 6,458 | `lede` | `function lede(` |
| 6,459 | `periodOf` | `function periodOf(` |
| 6,460 | `qLast` | `function qLast(` |
| 6,461 | `meterWord` | `function meterWord(` |
| 6,462 | `splitSpecs` | `function splitSpecs(` |
| 6,482 | `productivitySpec` | `function productivitySpec(` |
| 6,491 | `splitMid` | `function splitMid(` |
| 6,492 | `splitInfo` | `function splitInfo(` |
| 6,496 | `quarterTicks` | `function quarterTicks(` |
| 6,501 | `drawSplit` | `function drawSplit(` |
| 6,518 | `mountSplit` | `function mountSplit(` |
| 6,534 | `splitPeek` | `function splitPeek(` |
| 6,542 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,550 | `deficitPeek` | `function deficitPeek(` |
| 6,556 | `catSheet` | `function catSheet(` |
| 6,561 | `groupId` | `function groupId(` |
| 6,562 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,563 | `seatGroups` | `function seatGroups(` |
| 6,566 | `groupSheet` | `function groupSheet(` |
| 6,576 | `appendPicks` | `function appendPicks(` |
| 6,584 | `categoryCats` | `function categoryCats(` |

### The split indicators' insights

_line 6,602_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,603 | `buffettInsight` | `function buffettInsight(` |
| 6,618 | `debtInsight` | `function debtInsight(` |
| 6,633 | `productivityInsight` | `function productivityInsight(` |
| 6,643 | `interestInsight` | `function interestInsight(` |
| 6,658 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,689 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,714 | `activityStackHtml` | `function activityStackHtml(` |
| 6,724 | `seatTemperature` | `function seatTemperature(` |
| 6,732 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,768_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,769 | `partsOf` | `function partsOf(` |
| 6,778 | `discOf` | `function discOf(` |
| 6,781 | `authored` | `function authored(` |
| 6,782 | `registerRoster` | `function registerRoster(` |
| 6,816 | `indRow` | `function indRow(` |
| 6,820 | `IND_ORDER` | `var IND_ORDER =` |
| 6,821 | `indGroupRow` | `function indGroupRow(` |
| 6,826 | `indRows` | `function indRows(` |
| 6,840 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 6,849_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,850 | `NAV` | `var NAV =` |
| 6,851 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 6,945_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,946 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 6,994_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,995 | `fmtDay` | `function fmtDay(` |
| 6,996 | `qPretty` | `function qPretty(` |
| 6,997 | `DATED_UNIT` | `var DATED_UNIT =` |
| 6,998 | `peekArt` | `function peekArt(` |
| 6,999 | `indPeriod` | `function indPeriod(` |
| 7,008 | `catItem` | `function catItem(` |
| 7,058 | `insightCirculation` | `function insightCirculation(` |
| 7,091 | `insightWeather` | `function insightWeather(` |
| 7,134 | `CAT_MINI` | `var CAT_MINI =` |
| 7,137 | `placeSignPair` | `function placeSignPair(` |
| 7,169 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,185 | `buildCategories` | `function buildCategories(` |
| 7,227 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,269_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,270 | `capeFmt1` | `function capeFmt1(` |
| 7,271 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 7,272 | `GDP_STOPS` | `var GDP_STOPS =` |
| 7,273 | `VAL_STOPS` | `var VAL_STOPS =` |
| 7,274 | `DEF_STOPS` | `var DEF_STOPS =` |
| 7,275 | `qShort` | `function qShort(` |
| 7,276 | `yoyPairs` | `function yoyPairs(` |
| 7,286 | `actCycleMonths` | `function actCycleMonths(` |
| 7,294 | `householdsHighlights` | `function householdsHighlights(` |
| 7,313 | `redrawSheet` | `function redrawSheet(` |
| 7,317 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,381 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,420 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,470 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,500 | `valuationHighlights` | `function valuationHighlights(` |
| 7,513 | `tempHighlights` | `function tempHighlights(` |
| 7,530 | `gdpHighlights` | `function gdpHighlights(` |
| 7,545 | `renderMetricPages` | `function renderMetricPages(` |
| 7,555 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,568_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,569 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,570 | `cycleDataOn` | `function cycleDataOn(` |
| 7,571 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,591 | `wireCycleData` | `function wireCycleData(` |
| 7,606 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,651_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,652 | `eraOpen` | `var eraOpen =` |
| 7,653 | `kT` | `function kT(` |
| 7,657 | `eraReading` | `function eraReading(` |
| 7,669 | `eraFig` | `function eraFig(` |
| 7,676 | `eraValue` | `function eraValue(` |
| 7,682 | `eraRange` | `function eraRange(` |
| 7,687 | `eraMini` | `function eraMini(` |
| 7,692 | `eraCard` | `function eraCard(` |
| 7,711 | `eraShow` | `function eraShow(` |
| 7,721 | `enterEra` | `function enterEra(` |
| 7,728 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,735_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,736 | `rosterGroups` | `function rosterGroups(` |
| 7,764 | `__roster` | `var __roster =` |
| 7,765 | `readingRoster` | `function readingRoster(` |
| 7,786 | `readFig` | `function readFig(` |
| 7,791 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 7,798_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,799 | `cycleSymptoms` | `function cycleSymptoms(` |
| 7,823 | `placeWords` | `function placeWords(` |
| 7,827 | `symptomNote` | `function symptomNote(` |
| 7,834 | `symptomRow` | `function symptomRow(` |
| 7,841 | `cycleTrack` | `function cycleTrack(` |
| 7,856 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 7,864_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,865 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 7,914_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,915 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 7,946_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,947 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,992–1,995 | `LIVE_CACHE` | Live data without a render refactor |
| 4,325–4,338 | `horizonRead` | A series' highest reading within a span |
| 4,751–4,764 | `seasonTrackAll` | The season, computed |
| 4,780–4,784 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,401 |
| `desire-range` | 5,209 |
| `fear-range` | 5,886 |
| `hormones-range` | 5,775 |
| `hzn-range` | 5,696 |
| `pressure-range` | 2,060 |
| `pulse-range` | 5,176 |
| `sheet-marker-deficit` | 7,398 |
| `sheet-metric-gdp` | 7,343 |
| `sheet-metric-households` | 7,422 |
| `sheet-metric-temp` | 7,318 |
| `sheet-metric-valuation` | 7,443 |
| `sheet-sign-activity` | 7,383 |
| `sheet-sign-desire` | 5,210 |
| `sheet-sign-horizon` | 5,697 |
| `sheet-sign-hormones` | 5,776 |
| `sheet-sign-pressure` | 5,413 |
| `sheet-sign-pulse` | 5,175 |
| `sheet-sign-sentiment` | 5,887 |
| `sheet-sign-volume` | 5,193 |
| `volume-range` | 5,194 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,405 |
| `desire-range` | 5,198 |
| `fear-range` | 5,855 |
| `hzn-range` | 5,681 |
| `pressure-range` | 5,382 |
| `pulse-range` | 5,162 |
| `sheet-metric-gdp` | 7,344 |
| `sheet-metric-temp` | 7,319 |
| `sheet-metric-valuation` | 7,444 |
| `volume-range` | 5,180 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,080 |
| `sheet-metric-gdp` | 3,081 |
| `sheet-sign-activity` | 3,082 |
| `sheet-metric-valuation` | 3,083 |
| `sheet-metric-households` | 3,084 |
| `deficit-range` | 3,085 |
| `volume-range` | 3,086 |
| `pulse-range` | 3,087 |
| `hzn-range` | 3,088 |
| `desire-range` | 3,089 |
| `fear-range` | 3,090 |
| `hormones-range` | 3,091 |
| `pressure-range` | 3,092 |

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

