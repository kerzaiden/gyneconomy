# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,323 lines**, about 636 KB, roughly **180 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `56b5f7e` on 2026-10-01.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,387 | the whole stylesheet, every token and rule |
| **Markup** | 1,388–1,796 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,797–8,290 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,291–8,323 | </body></html> |

Counts: **376** top-level functions, **189** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,797_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,799 | `byId` | `function byId(` |
| 1,807 | `byIdMaybe` | `function byIdMaybe(` |
| 1,808 | `put` | `function put(` |
| 1,813 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,815_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,816 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,817 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,818 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,819 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,823 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,828_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,829 | `wheelMeta` | `var wheelMeta =` |
| 1,837 | `seasonOverride` | `var seasonOverride =` |
| 1,838 | `cycleNowNote` | `var cycleNowNote =` |
| 1,840 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,918 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,959 | `gdpLevels` | `var gdpLevels =` |
| 1,968 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,969 | `volatilityHistory` | `var volatilityHistory =` |
| 1,971 | `fiscalHistory` | `var fiscalHistory =` |
| 1,977 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,979 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,989 | `productivityHistory` | `var productivityHistory =` |
| 1,991 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |

### Live data without a render refactor

_line 1,993_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,998 | `merge` | `function merge(` |
| 2,005 | `LIVE` | `function LIVE(` |
| 2,019 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,022_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,024 | `paintReading` | `function paintReading(` |
| 2,041 | `repaintVolatility` | `function repaintVolatility(` |
| 2,045 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,053 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,058 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,062 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,067_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,068 | `READINGS` | `var READINGS =` |
| 2,123 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,124 | `KINDS` | `var KINDS =` |
| 2,125 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,139 | `receive` | `function receive(` |
| 2,155 | `liveAsOf` | `var liveAsOf =` |
| 2,156 | `fmtAsOf` | `function fmtAsOf(` |
| 2,161 | `applyLive` | `function applyLive(` |
| 2,174 | `shapeOk` | `function shapeOk(` |
| 2,181 | `repaintPolicy` | `function repaintPolicy(` |
| 2,187 | `GYN` | `var GYN =` |
| 2,214 | `refreshLiveData` | `function refreshLiveData(` |
| 2,232 | `fetchSiteData` | `function fetchSiteData(` |
| 2,248 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,253_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,254 | `yieldCurve` | `var yieldCurve =` |
| 2,260 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,261 | `curveAsOf` | `function curveAsOf(` |
| 2,266 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,267 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,272 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,274_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,275 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,276 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,277 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,278 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,279 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,281_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,282 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,288 | `uninvLagToday` | `var uninvLagToday =` |
| 2,293 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,299 | `gdpPeers` | `var gdpPeers =` |
| 2,340 | `gdpSrc` | `var gdpSrc =` |
| 2,341 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,347 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,376_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,378 | `productivityReading` | `var productivityReading =` |

### The deficit, year by year

_line 2,391_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,392 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,393 | `deficitHistory` | `var deficitHistory =` |
| 2,396 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,397 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,399 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,408_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,409 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,419_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,420 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,423 | `timelineSpan` | `function timelineSpan(` |
| 2,428 | `timelineFor` | `function timelineFor(` |
| 2,439 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,445_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,446 | `windowScale` | `function windowScale(` |
| 2,461 | `windowYears` | `function windowYears(` |
| 2,469 | `refName` | `function refName(` |
| 2,473 | `histReadEnsure` | `function histReadEnsure(` |
| 2,493 | `histReadFill` | `function histReadFill(` |
| 2,543 | `histAxisEnds` | `function histAxisEnds(` |
| 2,554 | `histLegend` | `function histLegend(` |
| 2,614 | `refitHistory` | `function refitHistory(` |
| 2,624 | `wireHistHover` | `function wireHistHover(` |
| 2,661 | `mWindowFrom` | `function mWindowFrom(` |
| 2,665 | `qWindowFrom` | `function qWindowFrom(` |
| 2,669 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,670 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,672 | `DEF_1983` | `var DEF_1983 =` |
| 2,673 | `defFrom` | `function defFrom(` |
| 2,678 | `deficitChart` | `function deficitChart(` |
| 2,746 | `deficitBlock` | `function deficitBlock(` |
| 2,786 | `buffettHistory` | `var buffettHistory =` |
| 2,788 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,789 | `hyDates` | `var hyDates =` |
| 2,790 | `hyOas` | `var hyOas =` |
| 2,791 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,798 | `hyAt` | `function hyAt(` |
| 2,802 | `hyLabel` | `function hyLabel(` |
| 2,803 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 2,804 | `hyNum` | `function hyNum(` |
| 2,805 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,813 | `hyQuarterEnds` | `function hyQuarterEnds(` |
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
| 3,033 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,074_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,075 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,076 | `DOTS` | `var DOTS =` |
| 3,078 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,093 | `headPickRow` | `function headPickRow(` |
| 3,099 | `histHead` | `function histHead(` |
| 3,114 | `headNoteIdx` | `var headNoteIdx =` |
| 3,115 | `headMenuHtml` | `function headMenuHtml(` |
| 3,140 | `headMenuFor` | `var headMenuFor =` |
| 3,141 | `headSubFor` | `var headSubFor =` |
| 3,142 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,173 | `histNote` | `function histNote(` |
| 3,174 | `meterFlagged` | `function meterFlagged(` |
| 3,181 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,204 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,218 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,231 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,236 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,251 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,265 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,284 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,315 | `desireBlock` | `function desireBlock(` |
| 3,326 | `volumeBlock` | `function volumeBlock(` |
| 3,338 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,350 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,357_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,358 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,359 | `m2Level` | `var m2Level =` |
| 3,380 | `m2Yoy` | `var m2Yoy =` |
| 3,381 | `M2_NORM` | `var M2_NORM =` |
| 3,383 | `volumeVerdict` | `function volumeVerdict(` |
| 3,391 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,392 | `unempHistory` | `var unempHistory =` |
| 3,398 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,407 | `NROU_NOW` | `var NROU_NOW =` |
| 3,408 | `unempState` | `function unempState(` |
| 3,414 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,468_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,469 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,478 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,536 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,537 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,538 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,539_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,541 | `householdsChart` | `function householdsChart(` |
| 3,590 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,645 | `GDP_NORM` | `var GDP_NORM =` |
| 3,646 | `gdpNowQ` | `var gdpNowQ =` |
| 3,647 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,669 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,722 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,769 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,777 | `velocityVerdict` | `function velocityVerdict(` |
| 3,785 | `derivePulseTag` | `function derivePulseTag(` |
| 3,791 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,823_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,824 | `seasonReading` | `var seasonReading =` |
| 3,868 | `frameworkRows` | `var frameworkRows =` |
| 3,878 | `vixRow` | `var vixRow =` |
| 3,879 | `VIX_CALM` | `var VIX_CALM =` |
| 3,880 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,884 | `volatilityTag` | `function volatilityTag(` |

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
| 4,574 | `volatilitySvg` | `function volatilitySvg(` |
| 4,579 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 4,585_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,586 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,587 | `dsrHistory` | `var dsrHistory =` |
| 4,588 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,589 | `savHistory` | `var savHistory =` |
| 4,592 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,601 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,602 | `dsrNow` | `var dsrNow =` |
| 4,603 | `savNow` | `var savNow =` |
| 4,604 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,605 | `householdsWord` | `function householdsWord(` |
| 4,612 | `householdsNow` | `var householdsNow =` |
| 4,613 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,630 | `savInfoHtml` | `function savInfoHtml(` |
| 4,648 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,655 | `curveSub` | `var curveSub =` |
| 4,656 | `vixPct` | `function vixPct(` |
| 4,660 | `curveNoteFull` | `var curveNoteFull =` |
| 4,671 | `volatilityRing` | `function volatilityRing(` |
| 4,676 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,677 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,692 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,698 | `marketCycles` | `var marketCycles =` |
| 4,726 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,728_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,729 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,730 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 4,735_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,736 | `slopeOf` | `function slopeOf(` |
| 4,741 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,742 | `readSeason` | `function readSeason(` |
| 4,761 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,762 | `qLabel` | `function qLabel(` |
| 4,777 | `regimeTrack` | `function regimeTrack(` |
| 4,797 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,799_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,800 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,801 | `seasonTitle` | `function seasonTitle(` |
| 4,802 | `monthLabel` | `function monthLabel(` |
| 4,803 | `cycleModel` | `function cycleModel(` |
| 4,840 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,848 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,854 | `nowModel` | `var nowModel =` |
| 4,855 | `readingNow` | `var readingNow =` |
| 4,856 | `cpiNow` | `var cpiNow =` |
| 4,857 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,858 | `currentSeason` | `var currentSeason =` |
| 4,859 | `seasonWhy` | `var seasonWhy =` |
| 4,861 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,863_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,864 | `CALM` | `var CALM =` |
| 4,865 | `FEELINGS` | `var FEELINGS =` |
| 4,866 | `seasonHalf` | `function seasonHalf(` |
| 4,867 | `rankToDate` | `function rankToDate(` |
| 4,871 | `readFeeling` | `function readFeeling(` |
| 4,882 | `readPosture` | `function readPosture(` |
| 4,890 | `marketCache` | `var marketCache =` |
| 4,891 | `marketMonths` | `function marketMonths(` |
| 4,911 | `seasonInMonth` | `function seasonInMonth(` |
| 4,916 | `stretchRank` | `function stretchRank(` |
| 4,919 | `marketFacts` | `function marketFacts(` |
| 4,930 | `followedCache` | `var followedCache =` |
| 4,931 | `whatFollowed` | `function whatFollowed(` |
| 4,953 | `diagnoseToday` | `function diagnoseToday(` |
| 4,973 | `vitalRingSvg` | `function vitalRingSvg(` |
| 4,984 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 4,985 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 4,986 | `spreadLabel` | `function spreadLabel(` |
| 4,990 | `policyFacts` | `function policyFacts(` |
| 4,997 | `policyFactRows` | `function policyFactRows(` |
| 5,003 | `allSources` | `var allSources =` |
| 5,017 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,029_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,030 | `SVG_NS` | `var SVG_NS =` |
| 5,031 | `svgEl` | `function svgEl(` |
| 5,036 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,070_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,071 | `clampPct` | `function clampPct(` |
| 5,074 | `detailTexts` | `var detailTexts =` |
| 5,075 | `detailSlots` | `var detailSlots =` |
| 5,076 | `detailSlot` | `function detailSlot(` |
| 5,086 | `metricSheet` | `function metricSheet(` |
| 5,091 | `ledeHtml` | `function ledeHtml(` |
| 5,092 | `facts` | `function facts(` |
| 5,093 | `factsFrom` | `function factsFrom(` |
| 5,097 | `expandBtn` | `function expandBtn(` |
| 5,101 | `sheetRenderers` | `var sheetRenderers =` |
| 5,102 | `pageMode` | `var pageMode =` |
| 5,107 | `pageCycles` | `var pageCycles =` |
| 5,112 | `pageRange` | `var pageRange =` |
| 5,118 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,147_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,150 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,151_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,152 | `subjectRow` | `function subjectRow(` |
| 5,162 | `subjectIcon` | `function subjectIcon(` |
| 5,163 | `srcHtml` | `function srcHtml(` |
| 5,164 | `TIMING` | `var TIMING =` |
| 5,170 | `timingMark` | `function timingMark(` |
| 5,178 | `timingPill` | `function timingPill(` |
| 5,187 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,195 | `seatPageFoot` | `function seatPageFoot(` |
| 5,207 | `timingMembers` | `var timingMembers =` |
| 5,208 | `registerTiming` | `function registerTiming(` |
| 5,210 | `headHtml` | `function headHtml(` |
| 5,218 | `heldHighlights` | `var heldHighlights =` |
| 5,219 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,246_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,247 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,248 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,256 | `withLatestPoint` | `function withLatestPoint(` |
| 5,261 | `pressureMaturities` | `function pressureMaturities(` |
| 5,285 | `registerFlowPages` | `function registerFlowPages(` |
| 5,344 | `renderPressureRow` | `function renderPressureRow(` |
| 5,352 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,371 | `ylmColumns` | `function ylmColumns(` |
| 5,391 | `ylmFitLine` | `function ylmFitLine(` |
| 5,403 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,548_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,549 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,586_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,587 | `spreadSeries` | `function spreadSeries(` |
| 5,631 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,755_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,756 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,782_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,783 | `drawHznHead` | `function drawHznHead(` |
| 5,798 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,860_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,861 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,869_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,870 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 5,969_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,970 | `renderVolatility` | `function renderVolatility(` |
| 6,019 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,049_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,050 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,097_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,098 | `totalRiseIn` | `function totalRiseIn(` |
| 6,108 | `eraInflation` | `function eraInflation(` |
| 6,119 | `eraGrowth` | `function eraGrowth(` |
| 6,135 | `fmtSigned` | `function fmtSigned(` |
| 6,136 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,137 | `growthShown` | `function growthShown(` |
| 6,138 | `growthShownCap` | `function growthShownCap(` |
| 6,139 | `phaseClass` | `function phaseClass(` |
| 6,140 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,145 | `cycleViewEl` | `var cycleViewEl =` |
| 6,146 | `shownEra` | `var shownEra =` |
| 6,147 | `calendarReset` | `var calendarReset =` |
| 6,148 | `metricPageReset` | `var metricPageReset =` |
| 6,149 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,150 | `topbarBack` | `var topbarBack =` |
| 6,151 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,158_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,159 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,240_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,241 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,259_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,260 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,281_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,283 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,284 | `hubSet` | `function hubSet(` |
| 6,295 | `quarterPopup` | `function quarterPopup(` |
| 6,318 | `hubShowDefault` | `function hubShowDefault(` |
| 6,326 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,332 | `hubShowYear` | `function hubShowYear(` |
| 6,342 | `renderCycleDial` | `function renderCycleDial(` |
| 6,423 | `m2Step` | `function m2Step(` |
| 6,426 | `heatStep` | `function heatStep(` |
| 6,430 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,442_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,443 | `renderCycleView` | `function renderCycleView(` |

### The economy the Growth chart draws

_line 6,448_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,449 | `peerChosen` | `function peerChosen(` |
| 6,450 | `peerReaches` | `function peerReaches(` |
| 6,476 | `shownEraModel` | `var shownEraModel =` |
| 6,477 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,479_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,480 | `stripGroupName` | `var stripGroupName =` |
| 6,481 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,509 | `marketStripHtml` | `function marketStripHtml(` |
| 6,543 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,544 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,573_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,574 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,580 | `INDICATOR_GROUP` | `var INDICATOR_GROUP =` |
| 6,586 | `SPLIT_PERIOD` | `var SPLIT_PERIOD =` |
| 6,587 | `debtSvg` | `function debtSvg(` |
| 6,588 | `interestSvg` | `function interestSvg(` |
| 6,590 | `budgetSvg` | `function budgetSvg(` |
| 6,592 | `lede` | `function lede(` |
| 6,593 | `periodOf` | `function periodOf(` |
| 6,594 | `qLast` | `function qLast(` |
| 6,595 | `meterWord` | `function meterWord(` |
| 6,596 | `splitSpecs` | `function splitSpecs(` |
| 6,616 | `productivitySpec` | `function productivitySpec(` |
| 6,625 | `splitMid` | `function splitMid(` |
| 6,626 | `splitInfo` | `function splitInfo(` |
| 6,630 | `quarterTicks` | `function quarterTicks(` |
| 6,635 | `drawSplit` | `function drawSplit(` |
| 6,652 | `mountSplit` | `function mountSplit(` |
| 6,667 | `splitPeek` | `function splitPeek(` |
| 6,675 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,683 | `deficitPeek` | `function deficitPeek(` |
| 6,689 | `catSheet` | `function catSheet(` |
| 6,694 | `groupId` | `function groupId(` |
| 6,695 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,696 | `seatGroups` | `function seatGroups(` |
| 6,699 | `groupSheet` | `function groupSheet(` |
| 6,709 | `appendPicks` | `function appendPicks(` |
| 6,717 | `categoryCats` | `function categoryCats(` |

### The split indicators' insights

_line 6,735_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,736 | `buffettInsight` | `function buffettInsight(` |
| 6,751 | `debtInsight` | `function debtInsight(` |
| 6,766 | `productivityInsight` | `function productivityInsight(` |
| 6,776 | `interestInsight` | `function interestInsight(` |
| 6,791 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,821 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,846 | `activityStackHtml` | `function activityStackHtml(` |
| 6,856 | `seatTemperature` | `function seatTemperature(` |
| 6,864 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,899_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,900 | `partsOf` | `function partsOf(` |
| 6,909 | `discOf` | `function discOf(` |
| 6,912 | `authored` | `function authored(` |
| 6,913 | `registerRoster` | `function registerRoster(` |
| 6,947 | `indRow` | `function indRow(` |
| 6,951 | `IND_ORDER` | `var IND_ORDER =` |
| 6,952 | `indGroupRow` | `function indGroupRow(` |
| 6,957 | `indRows` | `function indRows(` |
| 6,971 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 6,980_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,981 | `NAV` | `var NAV =` |
| 6,982 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,076_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,077 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,125_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,126 | `fmtDay` | `function fmtDay(` |
| 7,127 | `qPretty` | `function qPretty(` |
| 7,128 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,129 | `peekArt` | `function peekArt(` |
| 7,130 | `indPeriod` | `function indPeriod(` |
| 7,139 | `catItem` | `function catItem(` |
| 7,189 | `insightCirculation` | `function insightCirculation(` |
| 7,222 | `insightWeather` | `function insightWeather(` |
| 7,265 | `CAT_MINI` | `var CAT_MINI =` |
| 7,268 | `placeSignPair` | `function placeSignPair(` |
| 7,300 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,316 | `catRow` | `function catRow(` |
| 7,320 | `buildCategories` | `function buildCategories(` |
| 7,358 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,400_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,401 | `capeFmt1` | `function capeFmt1(` |
| 7,402 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 7,403 | `GDP_STOPS` | `var GDP_STOPS =` |
| 7,404 | `VAL_STOPS` | `var VAL_STOPS =` |
| 7,405 | `DEF_STOPS` | `var DEF_STOPS =` |
| 7,406 | `qShort` | `function qShort(` |
| 7,407 | `yoyPairs` | `function yoyPairs(` |
| 7,417 | `actCycleMonths` | `function actCycleMonths(` |
| 7,425 | `householdsHighlights` | `function householdsHighlights(` |
| 7,444 | `redrawSheet` | `function redrawSheet(` |
| 7,448 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,512 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,551 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,601 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,631 | `valuationHighlights` | `function valuationHighlights(` |
| 7,644 | `tempHighlights` | `function tempHighlights(` |
| 7,661 | `gdpHighlights` | `function gdpHighlights(` |
| 7,676 | `renderMetricPages` | `function renderMetricPages(` |
| 7,686 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: the work-up, how she feels, and the posture

_line 7,696_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,697 | `DIAG_SYSTEMS` | `var DIAG_SYSTEMS =` |
| 7,704 | `FEELING_RULES` | `var FEELING_RULES =` |
| 7,713 | `FEELING_STATE` | `var FEELING_STATE =` |
| 7,714 | `POSTURE_STATE` | `var POSTURE_STATE =` |
| 7,715 | `POSTURE_SAYS` | `var POSTURE_SAYS =` |
| 7,722 | `BODY_SAYS` | `var BODY_SAYS =` |
| 7,730 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,735 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 7,737 | `readDoor` | `function readDoor(` |
| 7,745 | `doorLine` | `function doorLine(` |
| 7,749 | `pct` | `function pct(` |
| 7,750 | `feelingFacts` | `function feelingFacts(` |
| 7,761 | `recordLine` | `function recordLine(` |
| 7,768 | `watchList` | `function watchList(` |
| 7,776 | `diagnosisInfo` | `function diagnosisInfo(` |
| 7,784 | `renderDiagnosisPage` | `function renderDiagnosisPage(` |
| 7,802 | `diagnosisSub` | `function diagnosisSub(` |
| 7,806 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,807 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,822_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,823 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,824 | `cycleDataOn` | `function cycleDataOn(` |
| 7,825 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,845 | `wireCycleData` | `function wireCycleData(` |
| 7,860 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,905_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,906 | `eraOpen` | `var eraOpen =` |
| 7,907 | `kT` | `function kT(` |
| 7,911 | `eraReading` | `function eraReading(` |
| 7,923 | `eraFig` | `function eraFig(` |
| 7,930 | `eraValue` | `function eraValue(` |
| 7,936 | `eraRange` | `function eraRange(` |
| 7,941 | `eraMini` | `function eraMini(` |
| 7,946 | `eraCard` | `function eraCard(` |
| 7,965 | `eraShow` | `function eraShow(` |
| 7,975 | `enterEra` | `function enterEra(` |
| 7,982 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,989_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,990 | `rosterGroups` | `function rosterGroups(` |
| 8,018 | `__roster` | `var __roster =` |
| 8,019 | `readingRoster` | `function readingRoster(` |
| 8,040 | `readFig` | `function readFig(` |
| 8,045 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,052_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,053 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,077 | `placeWords` | `function placeWords(` |
| 8,081 | `symptomNote` | `function symptomNote(` |
| 8,088 | `symptomRow` | `function symptomRow(` |
| 8,095 | `cycleTrack` | `function cycleTrack(` |
| 8,110 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,118_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,119 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,168_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,169 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,200_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,201 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,994–1,997 | `LIVE_CACHE` | Live data without a render refactor |
| 4,322–4,335 | `horizonRead` | A series' highest reading within a span |
| 4,763–4,776 | `seasonTrackAll` | The season, computed |
| 4,792–4,796 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,532 |
| `desire-range` | 5,336 |
| `fear-range` | 6,014 |
| `hormones-range` | 5,902 |
| `hzn-range` | 5,823 |
| `pressure-range` | 2,060 |
| `pulse-range` | 5,303 |
| `sheet-diagnosis` | 7,814 |
| `sheet-marker-deficit` | 7,529 |
| `sheet-metric-gdp` | 7,474 |
| `sheet-metric-households` | 7,553 |
| `sheet-metric-temp` | 7,449 |
| `sheet-metric-valuation` | 7,574 |
| `sheet-sign-activity` | 7,514 |
| `sheet-sign-desire` | 5,337 |
| `sheet-sign-horizon` | 5,824 |
| `sheet-sign-hormones` | 5,903 |
| `sheet-sign-pressure` | 5,540 |
| `sheet-sign-pulse` | 5,302 |
| `sheet-sign-sentiment` | 6,015 |
| `sheet-sign-volume` | 5,320 |
| `volume-range` | 5,321 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,536 |
| `desire-range` | 5,325 |
| `fear-range` | 5,981 |
| `hzn-range` | 5,808 |
| `pressure-range` | 5,509 |
| `pulse-range` | 5,289 |
| `sheet-metric-gdp` | 7,475 |
| `sheet-metric-temp` | 7,450 |
| `sheet-metric-valuation` | 7,575 |
| `volume-range` | 5,307 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,079 |
| `sheet-metric-gdp` | 3,080 |
| `sheet-sign-activity` | 3,081 |
| `sheet-metric-valuation` | 3,082 |
| `sheet-metric-households` | 3,083 |
| `deficit-range` | 3,084 |
| `volume-range` | 3,085 |
| `pulse-range` | 3,086 |
| `hzn-range` | 3,087 |
| `desire-range` | 3,088 |
| `fear-range` | 3,089 |
| `hormones-range` | 3,090 |
| `pressure-range` | 3,091 |

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
| 746 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 821 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 894 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,069 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,084 | The symptoms: a cycle's years against today |
| 1,161 | hero: yield curve |
| 1,194 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,213 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,238 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,246 | long cycle (structural layer) |
| 1,253 | indicator grid |
| 1,279 | info icon + popover (progressive disclosure for longer notes) |
| 1,293 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,376 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (106), which is what the renderers fill:

| Line | id |
|---|---|
| 1,392 | `topbar-back` |
| 1,395 | `topbar-title` |
| 1,396 | `menu-btn` |
| 1,410 | `main` |
| 1,413 | `cycle-view` |
| 1,416 | `cycle-kicker` |
| 1,419 | `cycle-dial` |
| 1,421 | `season-wheel-hub-date` |
| 1,422 | `season-wheel-hub-theme` |
| 1,423 | `season-wheel-hub-detail` |
| 1,431 | `today-analysis` |
| 1,432 | `peek-row` |
| 1,433 | `sheet-metric-temp` |
| 1,434 | `temp-timing` |
| 1,435 | `temp-chart` |
| 1,436 | `temp-rangebar` |
| 1,438 | `temp-head` |
| 1,439 | `temp-history` |
| 1,440 | `temp-hist-tooltip` |
| 1,441 | `temp-trend` |
| 1,443 | `temp-highlights` |
| 1,445 | `sheet-metric-gdp` |
| 1,446 | `gdp-timing` |
| 1,447 | `gdp-chart` |
| 1,448 | `gdp-rangebar` |
| 1,450 | `gdp-head` |
| 1,451 | `gdp-history` |
| 1,452 | `gdp-hist-tooltip` |
| 1,453 | `gdp-yoy` |
| 1,454 | `gdp-trend` |
| 1,456 | `gdp-highlights` |
| 1,460 | `sheet-marker-deficit` |
| 1,462 | `sheet-metric-households` |
| 1,463 | `households-timing` |
| 1,464 | `households-chart` |
| 1,465 | `households-highlights` |
| 1,468 | `sheet-metric-valuation` |
| 1,469 | `valuation-timing` |
| 1,470 | `valuation-chart` |
| 1,471 | `valuation-highlights` |
| 1,478 | `subj-value-hormones` |
| 1,479 | `subj-say-hormones` |
| 1,485 | `hormones-history` |
| 1,486 | `hormones-insights` |
| 1,495 | `subj-value-horizon` |
| 1,496 | `subj-say-horizon` |
| 1,497 | `subj-spark-horizon` |
| 1,503 | `hzn-timeline` |
| 1,505 | `hzn-head` |
| 1,506 | `spread-history-shell` |
| 1,507 | `spread-history-svg` |
| 1,508 | `spread-history-tooltip` |
| 1,510 | `hzn-trend` |
| 1,512 | `horizon-insights` |
| 1,521 | `subj-value-pressure` |
| 1,522 | `subj-say-pressure` |
| 1,528 | `pressure-timeline` |
| 1,530 | `pressure-head` |
| 1,531 | `ylm-shell` |
| 1,532 | `ylm-svg` |
| 1,533 | `ylm-tooltip` |
| 1,535 | `ylm-trend` |
| 1,537 | `pressure-insights` |
| 1,544 | `subj-ring-sentiment` |
| 1,547 | `subj-value-sentiment` |
| 1,548 | `subj-say-sentiment` |
| 1,549 | `subj-spark-sentiment` |
| 1,555 | `fear-history` |
| 1,556 | `curve-highlights` |
| 1,562 | `signs-list` |
| 1,568 | `calendar-list` |
| 1,575 | `cycle-data` |
| 1,577 | `cycle-legend` |
| 1,578 | `cycle-list` |
| 1,579 | `cycle-more` |
| 1,580 | `cycle-more-label` |
| 1,585 | `calendar-cycle` |
| 1,586 | `calendar-cycle-slot` |
| 1,607 | `search-home` |
| 1,609 | `search-input` |
| 1,611 | `search-list` |
| 1,615 | `more-menu` |
| 1,618 | `menu-back` |
| 1,632 | `sources-open` |
| 1,640 | `appearance-current` |
| 1,646 | `sheet-howto` |
| 1,689 | `sheet-book` |
| 1,720 | `seasons-kicker` |
| 1,722 | `seasons-rows` |
| 1,725 | `framework-kicker` |
| 1,728 | `framework-rows` |
| 1,738 | `sheet-appearance` |
| 1,746 | `theme-toggle` |
| 1,753 | `sheet-contact` |
| 1,762 | `contact-form` |
| 1,763 | `contact-title` |
| 1,764 | `contact-message` |
| 1,766 | `contact-hint` |
| 1,767 | `contact-send` |
| 1,773 | `sheet-sources` |
| 1,776 | `sources-back` |
| 1,781 | `asof-text` |
| 1,782 | `sources-groups` |
| 1,788 | `detail-backdrop` |
| 1,790 | `detail-modal-close` |
| 1,791 | `detail-modal-body` |

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

