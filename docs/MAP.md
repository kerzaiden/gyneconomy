# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,291 lines**, about 633 KB, roughly **180 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `5bf8330` on 2026-10-01.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,366 | the whole stylesheet, every token and rule |
| **Markup** | 1,367–1,772 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,773–8,258 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,259–8,291 | </body></html> |

Counts: **384** top-level functions, **188** top-level vars, **6** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,773_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,775 | `byId` | `function byId(` |
| 1,783 | `byIdMaybe` | `function byIdMaybe(` |
| 1,784 | `put` | `function put(` |
| 1,789 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,791_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,792 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,793 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,794 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,795 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,799 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,804_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,805 | `wheelMeta` | `var wheelMeta =` |
| 1,813 | `seasonOverride` | `var seasonOverride =` |
| 1,814 | `cycleNowNote` | `var cycleNowNote =` |
| 1,816 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,894 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,936 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,937 | `volatilityHistory` | `var volatilityHistory =` |
| 1,939 | `fiscalHistory` | `var fiscalHistory =` |
| 1,945 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,947 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,957 | `productivityHistory` | `var productivityHistory =` |
| 1,959 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |

### Live data without a render refactor

_line 1,961_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,966 | `merge` | `function merge(` |
| 1,973 | `LIVE` | `function LIVE(` |
| 1,987 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 1,990_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,992 | `paintReading` | `function paintReading(` |
| 2,009 | `repaintVolatility` | `function repaintVolatility(` |
| 2,013 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,021 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,026 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,030 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,035_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,036 | `READINGS` | `var READINGS =` |
| 2,091 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,092 | `KINDS` | `var KINDS =` |
| 2,093 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,107 | `receive` | `function receive(` |
| 2,123 | `liveAsOf` | `var liveAsOf =` |
| 2,124 | `fmtAsOf` | `function fmtAsOf(` |
| 2,129 | `applyLive` | `function applyLive(` |
| 2,142 | `shapeOk` | `function shapeOk(` |
| 2,149 | `repaintPolicy` | `function repaintPolicy(` |
| 2,155 | `GYN` | `var GYN =` |
| 2,182 | `refreshLiveData` | `function refreshLiveData(` |
| 2,200 | `fetchSiteData` | `function fetchSiteData(` |
| 2,216 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,221_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,222 | `yieldCurve` | `var yieldCurve =` |
| 2,228 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,229 | `curveAsOf` | `function curveAsOf(` |
| 2,234 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,235 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,240 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,242_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,243 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,244 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,245 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,246 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,247 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,249_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,250 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,256 | `uninvLagToday` | `var uninvLagToday =` |
| 2,261 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,267 | `gdpPeers` | `var gdpPeers =` |
| 2,308 | `gdpSrc` | `var gdpSrc =` |
| 2,309 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,315 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,344_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,352 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,353 | `productivityWord` | `function productivityWord(` |

### The deficit, year by year

_line 2,382_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,383 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,384 | `deficitHistory` | `var deficitHistory =` |
| 2,387 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,388 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,390 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,399_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,400 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,409_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,410 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,413 | `timelineSpan` | `function timelineSpan(` |
| 2,418 | `timelineFor` | `function timelineFor(` |
| 2,429 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,435_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,436 | `windowScale` | `function windowScale(` |
| 2,451 | `windowYears` | `function windowYears(` |
| 2,459 | `refName` | `function refName(` |
| 2,463 | `histReadEnsure` | `function histReadEnsure(` |
| 2,483 | `histReadFill` | `function histReadFill(` |
| 2,533 | `histAxisEnds` | `function histAxisEnds(` |
| 2,544 | `histLegend` | `function histLegend(` |
| 2,604 | `refitHistory` | `function refitHistory(` |
| 2,614 | `wireHistHover` | `function wireHistHover(` |
| 2,651 | `mWindowFrom` | `function mWindowFrom(` |
| 2,655 | `qWindowFrom` | `function qWindowFrom(` |
| 2,659 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,660 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,662 | `DEF_1983` | `var DEF_1983 =` |
| 2,663 | `defFrom` | `function defFrom(` |
| 2,668 | `deficitChart` | `function deficitChart(` |
| 2,736 | `deficitBlock` | `function deficitBlock(` |
| 2,776 | `buffettHistory` | `var buffettHistory =` |
| 2,778 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,779 | `hyDates` | `var hyDates =` |
| 2,780 | `hyOas` | `var hyOas =` |
| 2,781 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,788 | `hyAt` | `function hyAt(` |
| 2,792 | `hyLabel` | `function hyLabel(` |
| 2,793 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 2,794 | `hyNum` | `function hyNum(` |
| 2,795 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,803 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,813 | `capeHistory` | `var capeHistory =` |
| 2,815 | `longCycleSrc` | `var longCycleSrc =` |
| 2,831 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,845_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,846 | `sentiment` | `var sentiment =` |
| 2,862 | `valuation` | `var valuation =` |
| 2,883 | `valRow` | `function valRow(` |
| 2,888 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,891 | `coincident` | `var coincident =` |
| 2,941 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,947 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,948 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,949 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,951_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,952 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,953 | `m2vHistory` | `var m2vHistory =` |
| 2,969 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,023 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,064_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,065 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,066 | `DOTS` | `var DOTS =` |
| 3,068 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,083 | `headPickRow` | `function headPickRow(` |
| 3,089 | `histHead` | `function histHead(` |
| 3,104 | `headNoteIdx` | `var headNoteIdx =` |
| 3,105 | `headMenuHtml` | `function headMenuHtml(` |
| 3,130 | `headMenuFor` | `var headMenuFor =` |
| 3,131 | `headSubFor` | `var headSubFor =` |
| 3,132 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,163 | `histNote` | `function histNote(` |
| 3,164 | `meterFlagged` | `function meterFlagged(` |
| 3,171 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,194 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,208 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,221 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,226 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,240 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,254 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,273 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,304 | `desireBlock` | `function desireBlock(` |
| 3,315 | `volumeBlock` | `function volumeBlock(` |
| 3,327 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,339 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,346_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,347 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,348 | `m2Level` | `var m2Level =` |
| 3,369 | `m2Yoy` | `var m2Yoy =` |
| 3,370 | `M2_NORM` | `var M2_NORM =` |
| 3,372 | `volumeVerdict` | `function volumeVerdict(` |
| 3,380 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,381 | `unempHistory` | `var unempHistory =` |
| 3,387 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,396 | `NROU_NOW` | `var NROU_NOW =` |
| 3,397 | `unempState` | `function unempState(` |
| 3,403 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,457_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,458 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,467 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,525 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,526 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,527 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,528_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,530 | `householdsChart` | `function householdsChart(` |
| 3,579 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,634 | `GDP_NORM` | `var GDP_NORM =` |
| 3,635 | `gdpNowQ` | `var gdpNowQ =` |
| 3,636 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,658 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,711 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,758 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,766 | `velocityVerdict` | `function velocityVerdict(` |
| 3,774 | `derivePulseTag` | `function derivePulseTag(` |
| 3,780 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,812_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,813 | `seasonReading` | `var seasonReading =` |
| 3,857 | `frameworkRows` | `var frameworkRows =` |
| 3,867 | `vixRow` | `var vixRow =` |
| 3,868 | `VIX_CALM` | `var VIX_CALM =` |
| 3,869 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,873 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,880_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,881 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,890_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,891 | `calendarTodayY` | `var calendarTodayY =` |
| 3,893 | `vix3mClose` | `var vix3mClose =` |
| 3,894 | `fearCurve` | `function fearCurve(` |
| 3,899 | `curveVerdict` | `function curveVerdict(` |
| 3,904 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,913_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,914 | `modeBar` | `function modeBar(` |
| 3,921 | `pickerOpen` | `var pickerOpen =` |
| 3,922 | `cycleByName` | `function cycleByName(` |
| 3,926 | `openCycle` | `function openCycle(` |
| 3,930 | `cycleSlice` | `function cycleSlice(` |
| 3,938 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,946 | `cycleMonths` | `function cycleMonths(` |
| 3,954 | `histControls` | `function histControls(` |
| 3,963 | `cycLabel` | `function cycLabel(` |
| 3,967 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,972 | `cyclePicker` | `function cyclePicker(` |
| 3,991 | `rangeBar` | `function rangeBar(` |
| 3,998 | `trendOf` | `function trendOf(` |
| 4,013 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,017 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 4,028_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,029 | `yearOf` | `function yearOf(` |
| 4,030 | `mean` | `function mean(` |

### The record rows

_line 4,031_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,032 | `headSigma` | `function headSigma(` |
| 4,037 | `atQuarter` | `function atQuarter(` |
| 4,038 | `atMonth` | `function atMonth(` |
| 4,039 | `ordinal` | `function ordinal(` |
| 4,040 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,043_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,044 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,051 | `moreRow` | `function moreRow(` |
| 4,057 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,058 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,064_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,065 | `xLabelOf` | `function xLabelOf(` |
| 4,075 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,093_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,094 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,102 | `vGrid` | `function vGrid(` |
| 4,106 | `COL_FILL` | `var COL_FILL =` |
| 4,107 | `colPath` | `function colPath(` |
| 4,112 | `colWidth` | `function colWidth(` |
| 4,117 | `AXIS` | `var AXIS =` |
| 4,118 | `histFrame` | `function histFrame(` |
| 4,125 | `xLabel` | `function xLabel(` |
| 4,128 | `crossLine` | `function crossLine(` |
| 4,131 | `zeroRule` | `function zeroRule(` |
| 4,134 | `meanRule` | `function meanRule(` |
| 4,135 | `pendingGeom` | `var pendingGeom =` |
| 4,136 | `publishGeom` | `function publishGeom(` |
| 4,137 | `attachHistory` | `function attachHistory(` |
| 4,146 | `histBar` | `function histBar(` |
| 4,149 | `histTip` | `function histTip(` |
| 4,150 | `avgRule` | `function avgRule(` |
| 4,153 | `vhOpen` | `function vhOpen(` |
| 4,154 | `chartAxes` | `function chartAxes(` |
| 4,184 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,219_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,221 | `maxIn` | `function maxIn(` |
| 4,226 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,227 | `PEEK_W` | `var PEEK_W =` |
| 4,228 | `PEEK_H` | `var PEEK_H =` |
| 4,229 | `colPeek` | `function colPeek(` |
| 4,247 | `meterPeek` | `function meterPeek(` |
| 4,264 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,269 | `pressureZone` | `function pressureZone(` |
| 4,275 | `HZN_BACK` | `var HZN_BACK =` |
| 4,276 | `hznLast` | `function hznLast(` |
| 4,277 | `hznBack` | `function hznBack(` |
| 4,278 | `horizonWord` | `function horizonWord(` |
| 4,298 | `HZN_METERS` | `var HZN_METERS =` |
| 4,306 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,327 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,332 | `RISK_RISK` | `var RISK_RISK =` |
| 4,337 | `riskCell` | `function riskCell(` |
| 4,338 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,368 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,393_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,394 | `pulseClipN` | `var pulseClipN =` |
| 4,395 | `beatPath` | `function beatPath(` |
| 4,412 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,426 | `pulsePeek` | `function pulsePeek(` |
| 4,429 | `pulseBlock` | `function pulseBlock(` |
| 4,446 | `CHEV` | `var CHEV =` |
| 4,447 | `peekCard` | `function peekCard(` |
| 4,466 | `dropSvg` | `function dropSvg(` |
| 4,468 | `volumeSvg` | `function volumeSvg(` |
| 4,472 | `gaugeSvg` | `function gaugeSvg(` |
| 4,476 | `diamondSvg` | `function diamondSvg(` |
| 4,480 | `sproutSvg` | `function sproutSvg(` |
| 4,488 | `markSvg` | `function markSvg(` |
| 4,491 | `hormoneSvg` | `function hormoneSvg(` |
| 4,496 | `flameSvg` | `function flameSvg(` |
| 4,499 | `clockSvg` | `function clockSvg(` |
| 4,500 | `gearSvg` | `function gearSvg(` |
| 4,508 | `thermoSvg` | `function thermoSvg(` |
| 4,511 | `trendUpSvg` | `function trendUpSvg(` |
| 4,513 | `ecgSvg` | `function ecgSvg(` |
| 4,515 | `circulationSvg` | `function circulationSvg(` |
| 4,516 | `weatherSvg` | `function weatherSvg(` |
| 4,524 | `moodSvg` | `function moodSvg(` |
| 4,528 | `boltSvg` | `function boltSvg(` |
| 4,529 | `houseSvg` | `function houseSvg(` |
| 4,532 | `sunriseSvg` | `function sunriseSvg(` |
| 4,536 | `volatilitySvg` | `function volatilitySvg(` |
| 4,541 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 4,547_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,548 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,549 | `dsrHistory` | `var dsrHistory =` |
| 4,550 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,551 | `savHistory` | `var savHistory =` |
| 4,554 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,563 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,564 | `dsrNow` | `var dsrNow =` |
| 4,565 | `savNow` | `var savNow =` |
| 4,566 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,567 | `householdsWord` | `function householdsWord(` |
| 4,574 | `householdsNow` | `var householdsNow =` |
| 4,575 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,592 | `savInfoHtml` | `function savInfoHtml(` |
| 4,610 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,617 | `curveSub` | `var curveSub =` |
| 4,618 | `vixPct` | `function vixPct(` |
| 4,622 | `curveNoteFull` | `var curveNoteFull =` |
| 4,633 | `volatilityRing` | `function volatilityRing(` |
| 4,638 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,639 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,654 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,660 | `marketCycles` | `var marketCycles =` |
| 4,688 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,690_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,691 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,692 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 4,697_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,698 | `slopeOf` | `function slopeOf(` |
| 4,703 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,704 | `readSeason` | `function readSeason(` |
| 4,723 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,724 | `qLabel` | `function qLabel(` |
| 4,739 | `regimeTrack` | `function regimeTrack(` |
| 4,756 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,758_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,759 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,760 | `seasonTitle` | `function seasonTitle(` |
| 4,761 | `monthLabel` | `function monthLabel(` |
| 4,762 | `cycleReturns` | `function cycleReturns(` |
| 4,772 | `cycleModel` | `function cycleModel(` |
| 4,803 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,811 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,817 | `nowModel` | `var nowModel =` |
| 4,818 | `readingNow` | `var readingNow =` |
| 4,819 | `cpiNow` | `var cpiNow =` |
| 4,820 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,821 | `currentSeason` | `var currentSeason =` |
| 4,822 | `seasonWhy` | `var seasonWhy =` |
| 4,824 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,826_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,827 | `CALM` | `var CALM =` |
| 4,828 | `FEELINGS` | `var FEELINGS =` |
| 4,829 | `seasonHalf` | `function seasonHalf(` |
| 4,830 | `rankToDate` | `function rankToDate(` |
| 4,834 | `readFeeling` | `function readFeeling(` |
| 4,845 | `readPosture` | `function readPosture(` |
| 4,853 | `marketCache` | `var marketCache =` |
| 4,854 | `marketMonths` | `function marketMonths(` |
| 4,874 | `seasonInMonth` | `function seasonInMonth(` |
| 4,879 | `stretchRank` | `function stretchRank(` |
| 4,882 | `marketFacts` | `function marketFacts(` |
| 4,893 | `followedCache` | `var followedCache =` |
| 4,894 | `whatFollowed` | `function whatFollowed(` |
| 4,916 | `lastFeeling` | `function lastFeeling(` |
| 4,921 | `diagnoseClose` | `function diagnoseClose(` |
| 4,929 | `diagnoseToday` | `function diagnoseToday(` |
| 4,946 | `vitalRingSvg` | `function vitalRingSvg(` |
| 4,957 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 4,958 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 4,959 | `spreadLabel` | `function spreadLabel(` |
| 4,963 | `policyFacts` | `function policyFacts(` |
| 4,970 | `policyFactRows` | `function policyFactRows(` |
| 4,976 | `allSources` | `var allSources =` |
| 4,990 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,002_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,003 | `SVG_NS` | `var SVG_NS =` |
| 5,004 | `svgEl` | `function svgEl(` |
| 5,009 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,043_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,044 | `clampPct` | `function clampPct(` |
| 5,047 | `detailTexts` | `var detailTexts =` |
| 5,048 | `detailSlots` | `var detailSlots =` |
| 5,049 | `detailSlot` | `function detailSlot(` |
| 5,059 | `metricSheet` | `function metricSheet(` |
| 5,064 | `ledeHtml` | `function ledeHtml(` |
| 5,065 | `facts` | `function facts(` |
| 5,066 | `factsFrom` | `function factsFrom(` |
| 5,070 | `expandBtn` | `function expandBtn(` |
| 5,074 | `sheetRenderers` | `var sheetRenderers =` |
| 5,075 | `pageMode` | `var pageMode =` |
| 5,080 | `pageCycles` | `var pageCycles =` |
| 5,085 | `pageRange` | `var pageRange =` |
| 5,091 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,120_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,123 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,124_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,125 | `subjectRow` | `function subjectRow(` |
| 5,135 | `subjectIcon` | `function subjectIcon(` |
| 5,136 | `srcHtml` | `function srcHtml(` |
| 5,137 | `TIMING` | `var TIMING =` |
| 5,143 | `timingMark` | `function timingMark(` |
| 5,151 | `timingPill` | `function timingPill(` |
| 5,160 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,168 | `seatPageFoot` | `function seatPageFoot(` |
| 5,180 | `timingMembers` | `var timingMembers =` |
| 5,181 | `registerTiming` | `function registerTiming(` |
| 5,183 | `headHtml` | `function headHtml(` |
| 5,191 | `heldHighlights` | `var heldHighlights =` |
| 5,192 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,219_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,220 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,221 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,229 | `withLatestPoint` | `function withLatestPoint(` |
| 5,234 | `pressureMaturities` | `function pressureMaturities(` |
| 5,258 | `registerFlowPages` | `function registerFlowPages(` |
| 5,317 | `renderPressureRow` | `function renderPressureRow(` |
| 5,325 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,344 | `ylmColumns` | `function ylmColumns(` |
| 5,364 | `ylmFitLine` | `function ylmFitLine(` |
| 5,376 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,521_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,522 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,559_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,560 | `spreadSeries` | `function spreadSeries(` |
| 5,604 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,728_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,729 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,755_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,756 | `drawHznHead` | `function drawHznHead(` |
| 5,771 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,833_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,834 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,842_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,843 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 5,942_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,943 | `renderVolatility` | `function renderVolatility(` |
| 5,992 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,022_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,023 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,070_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,071 | `totalRiseIn` | `function totalRiseIn(` |
| 6,081 | `eraInflation` | `function eraInflation(` |
| 6,092 | `eraGrowth` | `function eraGrowth(` |
| 6,108 | `fmtSigned` | `function fmtSigned(` |
| 6,109 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,110 | `growthShown` | `function growthShown(` |
| 6,111 | `growthShownCap` | `function growthShownCap(` |
| 6,112 | `phaseClass` | `function phaseClass(` |
| 6,113 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,117 | `cycleViewEl` | `var cycleViewEl =` |
| 6,118 | `shownEra` | `var shownEra =` |
| 6,119 | `calendarReset` | `var calendarReset =` |
| 6,120 | `metricPageReset` | `var metricPageReset =` |
| 6,121 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,122 | `topbarBack` | `var topbarBack =` |
| 6,123 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,130_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,131 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,212_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,213 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,231_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,232 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,253_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,255 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,256 | `hubSet` | `function hubSet(` |
| 6,267 | `quarterPopup` | `function quarterPopup(` |
| 6,290 | `hubShowDefault` | `function hubShowDefault(` |
| 6,298 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,304 | `hubShowYear` | `function hubShowYear(` |
| 6,314 | `renderCycleDial` | `function renderCycleDial(` |
| 6,395 | `m2Step` | `function m2Step(` |
| 6,398 | `heatStep` | `function heatStep(` |
| 6,402 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,414_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,415 | `renderCycleView` | `function renderCycleView(` |

### The economy the Growth chart draws

_line 6,420_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,421 | `peerChosen` | `function peerChosen(` |
| 6,422 | `peerReaches` | `function peerReaches(` |
| 6,448 | `shownEraModel` | `var shownEraModel =` |
| 6,449 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,451_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,452 | `stripGroupName` | `var stripGroupName =` |
| 6,453 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,481 | `marketStripHtml` | `function marketStripHtml(` |
| 6,515 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,516 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,545_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,546 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,552 | `INDICATOR_GROUP` | `var INDICATOR_GROUP =` |
| 6,558 | `SPLIT_PERIOD` | `var SPLIT_PERIOD =` |
| 6,559 | `debtSvg` | `function debtSvg(` |
| 6,560 | `interestSvg` | `function interestSvg(` |
| 6,562 | `budgetSvg` | `function budgetSvg(` |
| 6,564 | `lede` | `function lede(` |
| 6,565 | `periodOf` | `function periodOf(` |
| 6,566 | `qLast` | `function qLast(` |
| 6,567 | `meterWord` | `function meterWord(` |
| 6,568 | `splitSpecs` | `function splitSpecs(` |
| 6,588 | `productivitySpec` | `function productivitySpec(` |
| 6,597 | `splitMid` | `function splitMid(` |
| 6,598 | `splitInfo` | `function splitInfo(` |
| 6,602 | `quarterTicks` | `function quarterTicks(` |
| 6,607 | `drawSplit` | `function drawSplit(` |
| 6,624 | `mountSplit` | `function mountSplit(` |
| 6,639 | `splitPeek` | `function splitPeek(` |
| 6,647 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,655 | `deficitPeek` | `function deficitPeek(` |
| 6,661 | `catSheet` | `function catSheet(` |
| 6,666 | `groupId` | `function groupId(` |
| 6,667 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,668 | `seatGroups` | `function seatGroups(` |
| 6,671 | `groupSheet` | `function groupSheet(` |
| 6,681 | `appendPicks` | `function appendPicks(` |
| 6,689 | `categoryCats` | `function categoryCats(` |

### The split indicators' insights

_line 6,707_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,708 | `buffettInsight` | `function buffettInsight(` |
| 6,723 | `debtInsight` | `function debtInsight(` |
| 6,738 | `productivityInsight` | `function productivityInsight(` |
| 6,748 | `interestInsight` | `function interestInsight(` |
| 6,763 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,793 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,818 | `activityStackHtml` | `function activityStackHtml(` |
| 6,828 | `seatTemperature` | `function seatTemperature(` |
| 6,836 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,871_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,872 | `partsOf` | `function partsOf(` |
| 6,881 | `discOf` | `function discOf(` |
| 6,884 | `authored` | `function authored(` |
| 6,885 | `registerRoster` | `function registerRoster(` |
| 6,919 | `indRow` | `function indRow(` |
| 6,923 | `IND_ORDER` | `var IND_ORDER =` |
| 6,924 | `indGroupRow` | `function indGroupRow(` |
| 6,929 | `indRows` | `function indRows(` |
| 6,943 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 6,952_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,953 | `NAV` | `var NAV =` |
| 6,954 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,048_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,049 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,097_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,098 | `fmtDay` | `function fmtDay(` |
| 7,099 | `qPretty` | `function qPretty(` |
| 7,100 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,101 | `peekArt` | `function peekArt(` |
| 7,102 | `indPeriod` | `function indPeriod(` |
| 7,111 | `catItem` | `function catItem(` |
| 7,161 | `insightCirculation` | `function insightCirculation(` |
| 7,194 | `insightWeather` | `function insightWeather(` |
| 7,237 | `CAT_MINI` | `var CAT_MINI =` |
| 7,240 | `placeSignPair` | `function placeSignPair(` |
| 7,272 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,288 | `buildCategories` | `function buildCategories(` |
| 7,323 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,365_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,366 | `capeFmt1` | `function capeFmt1(` |
| 7,367 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 7,368 | `GDP_STOPS` | `var GDP_STOPS =` |
| 7,369 | `VAL_STOPS` | `var VAL_STOPS =` |
| 7,370 | `DEF_STOPS` | `var DEF_STOPS =` |
| 7,371 | `actCycleMonths` | `function actCycleMonths(` |
| 7,379 | `householdsHighlights` | `function householdsHighlights(` |
| 7,398 | `redrawSheet` | `function redrawSheet(` |
| 7,402 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,449 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,488 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,538 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,568 | `valuationHighlights` | `function valuationHighlights(` |
| 7,581 | `tempHighlights` | `function tempHighlights(` |
| 7,598 | `gdpHighlights` | `function gdpHighlights(` |
| 7,613 | `renderMetricPages` | `function renderMetricPages(` |
| 7,623 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,633_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,634 | `DIAG_SYSTEMS` | `var DIAG_SYSTEMS =` |
| 7,641 | `FEELING_RULES` | `var FEELING_RULES =` |
| 7,650 | `FEELING_STATE` | `var FEELING_STATE =` |
| 7,651 | `POSTURE_STATE` | `var POSTURE_STATE =` |
| 7,652 | `POSTURE_SAYS` | `var POSTURE_SAYS =` |
| 7,659 | `BODY_SAYS` | `var BODY_SAYS =` |
| 7,667 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,672 | `readDoor` | `function readDoor(` |
| 7,680 | `pct` | `function pct(` |
| 7,681 | `symptom` | `function symptom(` |
| 7,682 | `momentumSymptom` | `function momentumSymptom(` |
| 7,686 | `symptomsFor` | `function symptomsFor(` |
| 7,694 | `rosterRows` | `function rosterRows(` |
| 7,695 | `closeFigure` | `function closeFigure(` |
| 7,699 | `eraMove` | `function eraMove(` |
| 7,707 | `analysisFor` | `function analysisFor(` |
| 7,715 | `dxRow` | `function dxRow(` |
| 7,719 | `dxSection` | `function dxSection(` |
| 7,720 | `systemHtml` | `function systemHtml(` |
| 7,723 | `dxHead` | `function dxHead(` |
| 7,728 | `postureLine` | `function postureLine(` |
| 7,732 | `diagnosisInfo` | `function diagnosisInfo(` |
| 7,740 | `assessmentFor` | `function assessmentFor(` |
| 7,750 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,769 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,773 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,774 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,787_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,788 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,789 | `cycleDataOn` | `function cycleDataOn(` |
| 7,790 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,810 | `wireCycleData` | `function wireCycleData(` |
| 7,825 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,870_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,871 | `eraOpen` | `var eraOpen =` |
| 7,872 | `kT` | `function kT(` |
| 7,876 | `eraReading` | `function eraReading(` |
| 7,888 | `eraFig` | `function eraFig(` |
| 7,895 | `eraValue` | `function eraValue(` |
| 7,901 | `eraRange` | `function eraRange(` |
| 7,906 | `eraMini` | `function eraMini(` |
| 7,911 | `eraCard` | `function eraCard(` |
| 7,930 | `eraShow` | `function eraShow(` |
| 7,939 | `enterEra` | `function enterEra(` |
| 7,946 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,953_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,954 | `rosterGroups` | `function rosterGroups(` |
| 7,983 | `__roster` | `var __roster =` |
| 7,984 | `readingRoster` | `function readingRoster(` |
| 8,008 | `readFig` | `function readFig(` |
| 8,013 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,020_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,021 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,045 | `placeWords` | `function placeWords(` |
| 8,049 | `symptomNote` | `function symptomNote(` |
| 8,056 | `symptomRow` | `function symptomRow(` |
| 8,063 | `cycleTrack` | `function cycleTrack(` |
| 8,078 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,086_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,087 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,136_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,137 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,168_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,169 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **6 compute a value**, 6 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,962–1,965 | `LIVE_CACHE` | Live data without a render refactor |
| 2,346–2,351 | `productivityRecord` | Productivity growth is not in this panel |
| 2,364–4,297 | `productivityReading` | Productivity growth is not in this panel |
| 4,284–4,297 | `horizonRead` | A series' highest reading within a span |
| 4,725–4,738 | `seasonTrackAll` | The season, computed |
| 4,751–4,755 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,469 |
| `desire-range` | 5,309 |
| `fear-range` | 5,987 |
| `hormones-range` | 5,875 |
| `hzn-range` | 5,796 |
| `pressure-range` | 2,028 |
| `pulse-range` | 5,276 |
| `sheet-marker-deficit` | 7,466 |
| `sheet-metric-gdp` | 7,428 |
| `sheet-metric-households` | 7,490 |
| `sheet-metric-temp` | 7,403 |
| `sheet-metric-valuation` | 7,511 |
| `sheet-sign-activity` | 7,451 |
| `sheet-sign-desire` | 5,310 |
| `sheet-sign-horizon` | 5,797 |
| `sheet-sign-hormones` | 5,876 |
| `sheet-sign-pressure` | 5,513 |
| `sheet-sign-pulse` | 5,275 |
| `sheet-sign-sentiment` | 5,988 |
| `sheet-sign-volume` | 5,293 |
| `volume-range` | 5,294 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,473 |
| `desire-range` | 5,298 |
| `fear-range` | 5,954 |
| `hzn-range` | 5,781 |
| `pressure-range` | 5,482 |
| `pulse-range` | 5,262 |
| `sheet-metric-gdp` | 7,429 |
| `sheet-metric-temp` | 7,404 |
| `sheet-metric-valuation` | 7,512 |
| `volume-range` | 5,280 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,069 |
| `sheet-metric-gdp` | 3,070 |
| `sheet-sign-activity` | 3,071 |
| `sheet-metric-valuation` | 3,072 |
| `sheet-metric-households` | 3,073 |
| `deficit-range` | 3,074 |
| `volume-range` | 3,075 |
| `pulse-range` | 3,076 |
| `hzn-range` | 3,077 |
| `desire-range` | 3,078 |
| `fear-range` | 3,079 |
| `hormones-range` | 3,080 |
| `pressure-range` | 3,081 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 148 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 237 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 273 | season strip |
| 299 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 368 | tab bar (app-style segmented navigation) |
| 403 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 419 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 490 | journal (editorial content tab) |
| 496 | content tab: reading companion |
| 545 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 742 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 817 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 890 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,048 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,063 | The symptoms: a cycle's years against today |
| 1,140 | hero: yield curve |
| 1,173 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,192 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,217 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,225 | long cycle (structural layer) |
| 1,232 | indicator grid |
| 1,258 | info icon + popover (progressive disclosure for longer notes) |
| 1,272 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,355 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (104), which is what the renderers fill:

| Line | id |
|---|---|
| 1,371 | `topbar-back` |
| 1,374 | `topbar-title` |
| 1,375 | `menu-btn` |
| 1,389 | `main` |
| 1,392 | `cycle-view` |
| 1,395 | `cycle-kicker` |
| 1,398 | `cycle-dial` |
| 1,400 | `season-wheel-hub-date` |
| 1,401 | `season-wheel-hub-theme` |
| 1,402 | `season-wheel-hub-detail` |
| 1,410 | `today-analysis` |
| 1,411 | `peek-row` |
| 1,412 | `sheet-metric-temp` |
| 1,413 | `temp-timing` |
| 1,414 | `temp-chart` |
| 1,415 | `temp-rangebar` |
| 1,417 | `temp-head` |
| 1,418 | `temp-history` |
| 1,419 | `temp-hist-tooltip` |
| 1,420 | `temp-trend` |
| 1,422 | `temp-highlights` |
| 1,424 | `sheet-metric-gdp` |
| 1,425 | `gdp-timing` |
| 1,426 | `gdp-chart` |
| 1,427 | `gdp-rangebar` |
| 1,429 | `gdp-head` |
| 1,430 | `gdp-history` |
| 1,431 | `gdp-hist-tooltip` |
| 1,432 | `gdp-trend` |
| 1,434 | `gdp-highlights` |
| 1,438 | `sheet-marker-deficit` |
| 1,440 | `sheet-metric-households` |
| 1,441 | `households-timing` |
| 1,442 | `households-chart` |
| 1,443 | `households-highlights` |
| 1,446 | `sheet-metric-valuation` |
| 1,447 | `valuation-timing` |
| 1,448 | `valuation-chart` |
| 1,449 | `valuation-highlights` |
| 1,456 | `subj-value-hormones` |
| 1,457 | `subj-say-hormones` |
| 1,463 | `hormones-history` |
| 1,464 | `hormones-insights` |
| 1,473 | `subj-value-horizon` |
| 1,474 | `subj-say-horizon` |
| 1,475 | `subj-spark-horizon` |
| 1,481 | `hzn-timeline` |
| 1,483 | `hzn-head` |
| 1,484 | `spread-history-shell` |
| 1,485 | `spread-history-svg` |
| 1,486 | `spread-history-tooltip` |
| 1,488 | `hzn-trend` |
| 1,490 | `horizon-insights` |
| 1,499 | `subj-value-pressure` |
| 1,500 | `subj-say-pressure` |
| 1,506 | `pressure-timeline` |
| 1,508 | `pressure-head` |
| 1,509 | `ylm-shell` |
| 1,510 | `ylm-svg` |
| 1,511 | `ylm-tooltip` |
| 1,513 | `ylm-trend` |
| 1,515 | `pressure-insights` |
| 1,522 | `subj-ring-sentiment` |
| 1,525 | `subj-value-sentiment` |
| 1,526 | `subj-say-sentiment` |
| 1,527 | `subj-spark-sentiment` |
| 1,533 | `fear-history` |
| 1,534 | `curve-highlights` |
| 1,540 | `signs-list` |
| 1,546 | `calendar-list` |
| 1,553 | `cycle-data` |
| 1,555 | `cycle-legend` |
| 1,556 | `cycle-list` |
| 1,557 | `cycle-more` |
| 1,558 | `cycle-more-label` |
| 1,563 | `calendar-cycle` |
| 1,583 | `search-home` |
| 1,585 | `search-input` |
| 1,587 | `search-list` |
| 1,591 | `more-menu` |
| 1,594 | `menu-back` |
| 1,608 | `sources-open` |
| 1,616 | `appearance-current` |
| 1,622 | `sheet-howto` |
| 1,665 | `sheet-book` |
| 1,696 | `seasons-kicker` |
| 1,698 | `seasons-rows` |
| 1,701 | `framework-kicker` |
| 1,704 | `framework-rows` |
| 1,714 | `sheet-appearance` |
| 1,722 | `theme-toggle` |
| 1,729 | `sheet-contact` |
| 1,738 | `contact-form` |
| 1,739 | `contact-title` |
| 1,740 | `contact-message` |
| 1,742 | `contact-hint` |
| 1,743 | `contact-send` |
| 1,749 | `sheet-sources` |
| 1,752 | `sources-back` |
| 1,757 | `asof-text` |
| 1,758 | `sources-groups` |
| 1,764 | `detail-backdrop` |
| 1,766 | `detail-modal-close` |
| 1,767 | `detail-modal-body` |

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

