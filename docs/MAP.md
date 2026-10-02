# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,390 lines**, about 658 KB, roughly **187 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `c14365a` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,386 | the whole stylesheet, every token and rule |
| **Markup** | 1,387–1,792 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,793–8,357 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,358–8,390 | </body></html> |

Counts: **427** top-level functions, **189** top-level vars, **9** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,793_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,795 | `byId` | `function byId(` |
| 1,803 | `byIdMaybe` | `function byIdMaybe(` |
| 1,804 | `put` | `function put(` |
| 1,809 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,811_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,812 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,813 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,814 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,815 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,819 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,824_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,825 | `wheelMeta` | `var wheelMeta =` |
| 1,833 | `seasonOverride` | `var seasonOverride =` |
| 1,834 | `cycleNowNote` | `var cycleNowNote =` |
| 1,836 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,914 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,956 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,957 | `volatilityHistory` | `var volatilityHistory =` |
| 1,959 | `fiscalHistory` | `var fiscalHistory =` |
| 1,965 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,967 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,977 | `productivityHistory` | `var productivityHistory =` |
| 1,979 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |
| 1,981 | `confidenceHistory` | `var confidenceHistory =` |

### Live data without a render refactor

_line 1,983_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,988 | `merge` | `function merge(` |
| 1,995 | `LIVE` | `function LIVE(` |
| 2,009 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,012_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,014 | `paintReading` | `function paintReading(` |
| 2,031 | `repaintVolatility` | `function repaintVolatility(` |
| 2,035 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,043 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,048 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,052 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,057_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,058 | `READINGS` | `var READINGS =` |
| 2,113 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,114 | `KINDS` | `var KINDS =` |
| 2,115 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,129 | `receive` | `function receive(` |
| 2,145 | `liveAsOf` | `var liveAsOf =` |
| 2,146 | `fmtAsOf` | `function fmtAsOf(` |
| 2,151 | `applyLive` | `function applyLive(` |
| 2,164 | `shapeOk` | `function shapeOk(` |
| 2,171 | `repaintPolicy` | `function repaintPolicy(` |
| 2,177 | `GYN` | `var GYN =` |
| 2,204 | `refreshLiveData` | `function refreshLiveData(` |
| 2,222 | `fetchSiteData` | `function fetchSiteData(` |
| 2,238 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,243_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,244 | `yieldCurve` | `var yieldCurve =` |
| 2,250 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,251 | `curveAsOf` | `function curveAsOf(` |
| 2,256 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,257 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,262 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,264_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,265 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,266 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,267 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,268 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,269 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,271_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,272 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,278 | `uninvLagToday` | `var uninvLagToday =` |
| 2,283 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,289 | `gdpSrc` | `var gdpSrc =` |
| 2,292 | `labPanel` | `var labPanel =` |
| 2,321 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,322_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,329 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,330 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,357_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,358 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,364 | `confidenceWord` | `function confidenceWord(` |

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

_line 2,418_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,419 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,422 | `timelineSpan` | `function timelineSpan(` |
| 2,427 | `timelineFor` | `function timelineFor(` |
| 2,438 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,444_ · 29 declarations

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
| 2,669 | `DEF_1983` | `var DEF_1983 =` |
| 2,670 | `defFrom` | `function defFrom(` |
| 2,675 | `deficitChart` | `function deficitChart(` |
| 2,743 | `deficitBlock` | `function deficitBlock(` |
| 2,783 | `buffettHistory` | `var buffettHistory =` |
| 2,785 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,786 | `hyDates` | `var hyDates =` |
| 2,787 | `hyOas` | `var hyOas =` |
| 2,788 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,795 | `hyAt` | `function hyAt(` |
| 2,799 | `hyLabel` | `function hyLabel(` |
| 2,800 | `hyNum` | `function hyNum(` |
| 2,801 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,809 | `hyQuarters` | `function hyQuarters(` |
| 2,817 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,819 | `capeHistory` | `var capeHistory =` |
| 2,821 | `longCycleSrc` | `var longCycleSrc =` |
| 2,837 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,851_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,852 | `sentiment` | `var sentiment =` |
| 2,868 | `valuation` | `var valuation =` |
| 2,889 | `valRow` | `function valRow(` |
| 2,894 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,897 | `coincident` | `var coincident =` |
| 2,947 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,953 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,954 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,955 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,957_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,958 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,959 | `m2vHistory` | `var m2vHistory =` |
| 2,975 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,027 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,069_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,070 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,071 | `DOTS` | `var DOTS =` |
| 3,073 | `headPickRow` | `function headPickRow(` |
| 3,079 | `histHead` | `function histHead(` |
| 3,094 | `headNoteIdx` | `var headNoteIdx =` |
| 3,095 | `headMenuHtml` | `function headMenuHtml(` |
| 3,120 | `headMenuFor` | `var headMenuFor =` |
| 3,121 | `headSubFor` | `var headSubFor =` |
| 3,122 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,151 | `histNote` | `function histNote(` |
| 3,152 | `meterFlagged` | `function meterFlagged(` |
| 3,159 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,182 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,196 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,209 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,214 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,218 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,230 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,244 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,258 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,277 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,308 | `desireBlock` | `function desireBlock(` |
| 3,319 | `volumeBlock` | `function volumeBlock(` |
| 3,331 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,343 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,350_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,351 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,352 | `m2Level` | `var m2Level =` |
| 3,373 | `m2Yoy` | `var m2Yoy =` |
| 3,374 | `M2_NORM` | `var M2_NORM =` |
| 3,376 | `volumeVerdict` | `function volumeVerdict(` |
| 3,384 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,385 | `unempHistory` | `var unempHistory =` |
| 3,391 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,400 | `NROU_NOW` | `var NROU_NOW =` |
| 3,401 | `unempState` | `function unempState(` |
| 3,407 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,459_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,460 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,469 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,525 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,526 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,527 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,528_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,530 | `householdsChart` | `function householdsChart(` |
| 3,580 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,633 | `GDP_NORM` | `var GDP_NORM =` |
| 3,634 | `gdpNowQ` | `var gdpNowQ =` |
| 3,635 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,657 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,708 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,753 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,761 | `velocityVerdict` | `function velocityVerdict(` |
| 3,769 | `derivePulseTag` | `function derivePulseTag(` |
| 3,775 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,807_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,808 | `seasonReading` | `var seasonReading =` |
| 3,852 | `frameworkRows` | `var frameworkRows =` |
| 3,862 | `vixRow` | `var vixRow =` |
| 3,863 | `VIX_CALM` | `var VIX_CALM =` |
| 3,864 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,868 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,875_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,876 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,885_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,886 | `calendarTodayY` | `var calendarTodayY =` |
| 3,888 | `vix3mClose` | `var vix3mClose =` |
| 3,889 | `fearCurve` | `function fearCurve(` |
| 3,894 | `curveVerdict` | `function curveVerdict(` |
| 3,899 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,908_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,909 | `modeBar` | `function modeBar(` |
| 3,916 | `pickerOpen` | `var pickerOpen =` |
| 3,917 | `cycleByName` | `function cycleByName(` |
| 3,921 | `openCycle` | `function openCycle(` |
| 3,925 | `cycleSlice` | `function cycleSlice(` |
| 3,933 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,941 | `cycleMonths` | `function cycleMonths(` |
| 3,949 | `histControls` | `function histControls(` |
| 3,958 | `pageCycle` | `function pageCycle(` |
| 3,962 | `cycLabel` | `function cycLabel(` |
| 3,966 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,971 | `cyclePicker` | `function cyclePicker(` |
| 3,990 | `rangeBar` | `function rangeBar(` |
| 3,997 | `trendOf` | `function trendOf(` |
| 4,012 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,016 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 4,027_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,028 | `yearOf` | `function yearOf(` |
| 4,029 | `mean` | `function mean(` |

### The record rows

_line 4,030_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,031 | `headSigma` | `function headSigma(` |
| 4,036 | `atQuarter` | `function atQuarter(` |
| 4,037 | `atMonth` | `function atMonth(` |
| 4,038 | `ordinal` | `function ordinal(` |
| 4,039 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,042_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,043 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,050 | `moreRow` | `function moreRow(` |
| 4,056 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,057 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,063_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,064 | `xLabelOf` | `function xLabelOf(` |
| 4,074 | `fitLine` | `function fitLine(` |
| 4,078 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,096_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,097 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,105 | `vGrid` | `function vGrid(` |
| 4,109 | `COL_FILL` | `var COL_FILL =` |
| 4,110 | `colPath` | `function colPath(` |
| 4,115 | `colWidth` | `function colWidth(` |
| 4,120 | `AXIS` | `var AXIS =` |
| 4,121 | `histFrame` | `function histFrame(` |
| 4,128 | `xLabel` | `function xLabel(` |
| 4,131 | `crossLine` | `function crossLine(` |
| 4,134 | `zeroRule` | `function zeroRule(` |
| 4,137 | `meanRule` | `function meanRule(` |
| 4,138 | `pendingGeom` | `var pendingGeom =` |
| 4,139 | `publishGeom` | `function publishGeom(` |
| 4,140 | `attachHistory` | `function attachHistory(` |
| 4,149 | `histBar` | `function histBar(` |
| 4,152 | `histTip` | `function histTip(` |
| 4,153 | `avgRule` | `function avgRule(` |
| 4,156 | `vhOpen` | `function vhOpen(` |
| 4,157 | `chartAxes` | `function chartAxes(` |
| 4,187 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,222_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,224 | `maxIn` | `function maxIn(` |
| 4,229 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,230 | `PEEK_W` | `var PEEK_W =` |
| 4,231 | `PEEK_H` | `var PEEK_H =` |
| 4,232 | `colPeek` | `function colPeek(` |
| 4,250 | `meterPeek` | `function meterPeek(` |
| 4,267 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,272 | `pressureZone` | `function pressureZone(` |
| 4,278 | `HZN_BACK` | `var HZN_BACK =` |
| 4,279 | `hznLast` | `function hznLast(` |
| 4,280 | `hznBack` | `function hznBack(` |
| 4,281 | `horizonWord` | `function horizonWord(` |
| 4,301 | `HZN_METERS` | `var HZN_METERS =` |
| 4,309 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,330 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,335 | `RISK_RISK` | `var RISK_RISK =` |
| 4,340 | `riskCell` | `function riskCell(` |
| 4,341 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,371 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,396_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,397 | `pulseClipN` | `var pulseClipN =` |
| 4,398 | `beatPath` | `function beatPath(` |
| 4,415 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,429 | `pulsePeek` | `function pulsePeek(` |
| 4,432 | `pulseBlock` | `function pulseBlock(` |
| 4,449 | `CHEV` | `var CHEV =` |
| 4,450 | `peekCard` | `function peekCard(` |
| 4,469 | `dropSvg` | `function dropSvg(` |
| 4,471 | `volumeSvg` | `function volumeSvg(` |
| 4,475 | `gaugeSvg` | `function gaugeSvg(` |
| 4,479 | `diamondSvg` | `function diamondSvg(` |
| 4,483 | `sproutSvg` | `function sproutSvg(` |
| 4,491 | `markSvg` | `function markSvg(` |
| 4,494 | `hormoneSvg` | `function hormoneSvg(` |
| 4,499 | `flameSvg` | `function flameSvg(` |
| 4,502 | `clockSvg` | `function clockSvg(` |
| 4,503 | `gearSvg` | `function gearSvg(` |
| 4,511 | `thermoSvg` | `function thermoSvg(` |
| 4,514 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,516 | `trendUpSvg` | `function trendUpSvg(` |
| 4,518 | `ecgSvg` | `function ecgSvg(` |
| 4,520 | `circulationSvg` | `function circulationSvg(` |
| 4,521 | `weatherSvg` | `function weatherSvg(` |
| 4,529 | `moodSvg` | `function moodSvg(` |
| 4,533 | `boltSvg` | `function boltSvg(` |
| 4,534 | `houseSvg` | `function houseSvg(` |
| 4,537 | `marketSvg` | `function marketSvg(` |
| 4,540 | `bagSvg` | `function bagSvg(` |
| 4,543 | `sunriseSvg` | `function sunriseSvg(` |
| 4,547 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,555_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,556 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,557 | `dsrHistory` | `var dsrHistory =` |
| 4,558 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,559 | `savHistory` | `var savHistory =` |
| 4,562 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,571 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,572 | `dsrNow` | `var dsrNow =` |
| 4,573 | `savNow` | `var savNow =` |
| 4,574 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,575 | `householdsWord` | `function householdsWord(` |
| 4,582 | `householdsNow` | `var householdsNow =` |
| 4,583 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,600 | `savInfoHtml` | `function savInfoHtml(` |
| 4,618 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,625 | `curveSub` | `var curveSub =` |
| 4,626 | `vixPct` | `function vixPct(` |
| 4,630 | `curveNoteFull` | `var curveNoteFull =` |
| 4,641 | `volatilityRing` | `function volatilityRing(` |
| 4,646 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,647 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,662 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,667_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,668 | `sp500Years` | `var sp500Years =` |
| 4,669 | `marketWord` | `function marketWord(` |
| 4,692 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,702 | `marketCycles` | `var marketCycles =` |
| 4,730 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,732_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,733 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,734 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,739_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,740 | `TIMING` | `var TIMING =` |
| 4,746 | `CATEGORIES` | `var CATEGORIES =` |
| 4,752 | `ROSTER` | `var ROSTER =` |
| 4,806 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,807 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,809 | `pageState` | `function pageState(` |
| 4,814 | `pageMode` | `var pageMode =` |
| 4,815 | `pageCycles` | `var pageCycles =` |
| 4,816 | `pageRange` | `var pageRange =` |
| 4,817 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,818 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,819 | `keyed` | `function keyed(` |
| 4,826 | `hyMonths` | `function hyMonths(` |
| 4,829 | `prettyKey` | `function prettyKey(` |
| 4,834 | `lastDate` | `function lastDate(` |
| 4,835 | `compiledDay` | `function compiledDay(` |
| 4,836 | `labPeriod` | `function labPeriod(` |
| 4,837 | `rosterFor` | `function rosterFor(` |
| 4,838 | `rowReadings` | `function rowReadings(` |
| 4,839 | `indOf` | `function indOf(` |
| 4,840 | `peekOf` | `function peekOf(` |
| 4,845 | `cardDate` | `function cardDate(` |
| 4,846 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,867_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,868 | `slopeOf` | `function slopeOf(` |
| 4,873 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,874 | `readSeason` | `function readSeason(` |
| 4,893 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,894 | `qLabel` | `function qLabel(` |
| 4,915 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,917_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,918 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,919 | `seasonTitle` | `function seasonTitle(` |
| 4,920 | `monthLabel` | `function monthLabel(` |
| 4,921 | `cycleReturns` | `function cycleReturns(` |
| 4,931 | `cycleModel` | `function cycleModel(` |
| 4,962 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,970 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,976 | `nowModel` | `var nowModel =` |
| 4,977 | `readingNow` | `var readingNow =` |
| 4,978 | `cpiNow` | `var cpiNow =` |
| 4,979 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,980 | `currentSeason` | `var currentSeason =` |
| 4,981 | `seasonWhy` | `var seasonWhy =` |
| 4,983 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,985_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,986 | `CALM` | `var CALM =` |
| 4,987 | `FEELINGS` | `var FEELINGS =` |
| 4,988 | `FEELING_STATE` | `var FEELING_STATE =` |
| 4,989 | `seasonHalf` | `function seasonHalf(` |
| 4,990 | `rankToDate` | `function rankToDate(` |
| 4,994 | `readFeeling` | `function readFeeling(` |
| 5,005 | `readPosture` | `function readPosture(` |
| 5,013 | `marketCache` | `var marketCache =` |
| 5,014 | `marketMonths` | `function marketMonths(` |
| 5,034 | `seasonInMonth` | `function seasonInMonth(` |
| 5,039 | `stretchRank` | `function stretchRank(` |
| 5,042 | `marketFacts` | `function marketFacts(` |
| 5,053 | `followedCache` | `var followedCache =` |
| 5,054 | `whatFollowed` | `function whatFollowed(` |
| 5,077 | `trackCache` | `var trackCache =` |
| 5,078 | `feelingTrack` | `function feelingTrack(` |
| 5,090 | `monthsApart` | `function monthsApart(` |
| 5,091 | `feelingSpells` | `function feelingSpells(` |
| 5,102 | `spellRecord` | `function spellRecord(` |
| 5,109 | `lastFeeling` | `function lastFeeling(` |
| 5,114 | `diagnoseClose` | `function diagnoseClose(` |
| 5,122 | `diagnoseToday` | `function diagnoseToday(` |
| 5,137 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,148 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,149 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,150 | `spreadLabel` | `function spreadLabel(` |
| 5,154 | `policyFacts` | `function policyFacts(` |
| 5,161 | `policyFactRows` | `function policyFactRows(` |
| 5,167 | `allSources` | `var allSources =` |
| 5,181 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,193_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,194 | `SVG_NS` | `var SVG_NS =` |
| 5,195 | `svgEl` | `function svgEl(` |
| 5,200 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,234_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,235 | `clampPct` | `function clampPct(` |
| 5,238 | `detailTexts` | `var detailTexts =` |
| 5,239 | `detailSlots` | `var detailSlots =` |
| 5,240 | `detailSlot` | `function detailSlot(` |
| 5,250 | `metricSheet` | `function metricSheet(` |
| 5,255 | `ledeHtml` | `function ledeHtml(` |
| 5,256 | `facts` | `function facts(` |
| 5,257 | `factsFrom` | `function factsFrom(` |
| 5,261 | `expandBtn` | `function expandBtn(` |
| 5,265 | `sheetRenderers` | `var sheetRenderers =` |
| 5,266 | `drawsPage` | `function drawsPage(` |
| 5,267 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,296_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,299 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,300_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,301 | `subjectRow` | `function subjectRow(` |
| 5,311 | `subjectIcon` | `function subjectIcon(` |
| 5,312 | `srcHtml` | `function srcHtml(` |
| 5,313 | `timingMark` | `function timingMark(` |
| 5,321 | `timingPill` | `function timingPill(` |
| 5,330 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,338 | `seatPageFoot` | `function seatPageFoot(` |
| 5,350 | `timingMembers` | `var timingMembers =` |
| 5,352 | `registerTiming` | `function registerTiming(` |
| 5,354 | `headHtml` | `function headHtml(` |
| 5,359 | `heldHighlights` | `var heldHighlights =` |
| 5,360 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,387_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,388 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,389 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,397 | `withLatestPoint` | `function withLatestPoint(` |
| 5,402 | `pressureMaturities` | `function pressureMaturities(` |
| 5,426 | `registerFlowPages` | `function registerFlowPages(` |
| 5,480 | `renderPressureRow` | `function renderPressureRow(` |
| 5,488 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,507 | `ylmColumns` | `function ylmColumns(` |
| 5,527 | `ylmFitLine` | `function ylmFitLine(` |
| 5,539 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,680_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,681 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,718_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,719 | `spreadSeries` | `function spreadSeries(` |
| 5,763 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,889_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,890 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,916_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,917 | `drawHznHead` | `function drawHznHead(` |
| 5,931 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,990_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,991 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,999_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,000 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,097_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,098 | `renderVolatility` | `function renderVolatility(` |
| 6,143 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,173_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,174 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,204_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,205 | `totalRiseIn` | `function totalRiseIn(` |
| 6,215 | `eraInflation` | `function eraInflation(` |
| 6,226 | `eraGrowth` | `function eraGrowth(` |
| 6,242 | `fmtSigned` | `function fmtSigned(` |
| 6,243 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,244 | `growthShown` | `function growthShown(` |
| 6,245 | `growthShownCap` | `function growthShownCap(` |
| 6,246 | `phaseClass` | `function phaseClass(` |
| 6,247 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,251 | `cycleViewEl` | `var cycleViewEl =` |
| 6,252 | `shownEra` | `var shownEra =` |
| 6,253 | `calendarReset` | `var calendarReset =` |
| 6,254 | `metricPageReset` | `var metricPageReset =` |
| 6,255 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,256 | `topbarBack` | `var topbarBack =` |
| 6,257 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,264_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,265 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,346_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,347 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,365_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,366 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,387_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,389 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,390 | `hubSet` | `function hubSet(` |
| 6,401 | `quarterPopup` | `function quarterPopup(` |
| 6,424 | `hubShowDefault` | `function hubShowDefault(` |
| 6,433 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,439 | `hubShowYear` | `function hubShowYear(` |
| 6,449 | `renderCycleDial` | `function renderCycleDial(` |
| 6,530 | `m2Step` | `function m2Step(` |
| 6,533 | `heatStep` | `function heatStep(` |
| 6,537 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,548_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,549 | `renderCycleView` | `function renderCycleView(` |
| 6,555 | `shownEraModel` | `var shownEraModel =` |
| 6,556 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,558_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,559 | `stripGroupName` | `var stripGroupName =` |
| 6,560 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,588 | `marketStripHtml` | `function marketStripHtml(` |
| 6,622 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,623 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,652_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,653 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,659 | `debtSvg` | `function debtSvg(` |
| 6,660 | `interestSvg` | `function interestSvg(` |
| 6,662 | `budgetSvg` | `function budgetSvg(` |
| 6,664 | `lede` | `function lede(` |
| 6,665 | `periodOf` | `function periodOf(` |
| 6,666 | `meterWord` | `function meterWord(` |
| 6,667 | `splitPages` | `function splitPages(` |
| 6,684 | `confidencePage` | `function confidencePage(` |
| 6,690 | `marketPage` | `function marketPage(` |
| 6,696 | `productivityPage` | `function productivityPage(` |
| 6,701 | `splitSpec` | `function splitSpec(` |
| 6,707 | `splitInfo` | `function splitInfo(` |
| 6,711 | `periodTicks` | `function periodTicks(` |
| 6,716 | `periodOfSeries` | `function periodOfSeries(` |
| 6,717 | `drawSplit` | `function drawSplit(` |
| 6,734 | `mountSplit` | `function mountSplit(` |
| 6,747 | `splitPeek` | `function splitPeek(` |
| 6,754 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,762 | `deficitPeek` | `function deficitPeek(` |
| 6,766 | `catSheet` | `function catSheet(` |
| 6,771 | `groupId` | `function groupId(` |
| 6,772 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,773 | `seatGroups` | `function seatGroups(` |
| 6,776 | `groupSheet` | `function groupSheet(` |
| 6,786 | `appendPicks` | `function appendPicks(` |
| 6,794 | `doorSel` | `function doorSel(` |
| 6,795 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,807_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,808 | `buffettInsight` | `function buffettInsight(` |
| 6,823 | `debtInsight` | `function debtInsight(` |
| 6,838 | `productivityInsight` | `function productivityInsight(` |
| 6,848 | `confidenceInsight` | `function confidenceInsight(` |
| 6,859 | `ORDINAL` | `var ORDINAL =` |
| 6,860 | `marketInsight` | `function marketInsight(` |
| 6,872 | `interestInsight` | `function interestInsight(` |
| 6,887 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,910 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,930 | `activityStackHtml` | `function activityStackHtml(` |
| 6,940 | `seatTemperature` | `function seatTemperature(` |
| 6,948 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,981_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,982 | `partsOf` | `function partsOf(` |
| 6,991 | `authored` | `function authored(` |
| 6,992 | `registerRoster` | `function registerRoster(` |
| 7,014 | `indRow` | `function indRow(` |
| 7,018 | `IND_ORDER` | `var IND_ORDER =` |
| 7,019 | `indGroupRow` | `function indGroupRow(` |
| 7,024 | `indRows` | `function indRows(` |
| 7,038 | `indCategoryHtml` | `function indCategoryHtml(` |
| 7,046 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 7,048_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,049 | `NAV` | `var NAV =` |
| 7,050 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,144_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,145 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,192_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,193 | `qPretty` | `function qPretty(` |
| 7,194 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,195 | `peekArt` | `function peekArt(` |
| 7,196 | `indPeriod` | `function indPeriod(` |
| 7,200 | `catItem` | `function catItem(` |
| 7,250 | `insightCirculation` | `function insightCirculation(` |
| 7,283 | `insightWeather` | `function insightWeather(` |
| 7,323 | `seasonCards` | `function seasonCards(` |
| 7,329 | `marketCycleCard` | `function marketCycleCard(` |
| 7,341 | `EMOTION_CURVE` | `var EMOTION_CURVE =` |
| 7,345 | `EMO_PLACE` | `var EMO_PLACE =` |
| 7,346 | `curvePath` | `function curvePath(` |
| 7,354 | `emotionCurveSvg` | `function emotionCurveSvg(` |
| 7,367 | `insightMood` | `function insightMood(` |
| 7,377 | `PAIR_ART` | `var PAIR_ART =` |
| 7,383 | `placeSignPair` | `function placeSignPair(` |
| 7,406 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,422 | `buildCategories` | `function buildCategories(` |
| 7,438 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,476_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,477 | `capeFmt1` | `function capeFmt1(` |
| 7,478 | `actCycleMonths` | `function actCycleMonths(` |
| 7,486 | `householdsHighlights` | `function householdsHighlights(` |
| 7,505 | `redrawSheet` | `function redrawSheet(` |
| 7,509 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,554 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,591 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,638 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,668 | `valuationHighlights` | `function valuationHighlights(` |
| 7,681 | `tempHighlights` | `function tempHighlights(` |
| 7,698 | `gdpHighlights` | `function gdpHighlights(` |
| 7,713 | `renderMetricPages` | `function renderMetricPages(` |
| 7,723 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,733_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,734 | `FEELING_RULES` | `var FEELING_RULES =` |
| 7,743 | `POSTURE_STATE` | `var POSTURE_STATE =` |
| 7,744 | `POSTURE_SAYS` | `var POSTURE_SAYS =` |
| 7,751 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,755 | `todayFace` | `function todayFace(` |
| 7,761 | `readDoor` | `function readDoor(` |
| 7,769 | `pct` | `function pct(` |
| 7,770 | `rosterRows` | `function rosterRows(` |
| 7,771 | `eraEnds` | `function eraEnds(` |
| 7,778 | `eraMove` | `function eraMove(` |
| 7,782 | `HORMONES` | `var HORMONES =` |
| 7,783 | `analysisFor` | `function analysisFor(` |
| 7,789 | `dxRow` | `function dxRow(` |
| 7,793 | `dxText` | `function dxText(` |
| 7,794 | `dxSection` | `function dxSection(` |
| 7,795 | `systemHtml` | `function systemHtml(` |
| 7,798 | `dxHead` | `function dxHead(` |
| 7,803 | `postureLine` | `function postureLine(` |
| 7,807 | `diagnosisInfo` | `function diagnosisInfo(` |
| 7,815 | `assessmentFor` | `function assessmentFor(` |
| 7,825 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,834 | `acrossCycle` | `function acrossCycle(` |
| 7,841 | `SEASON_ORDER` | `var SEASON_ORDER =` |
| 7,842 | `feelingBySeason` | `function feelingBySeason(` |
| 7,849 | `trendBarsSvg` | `function trendBarsSvg(` |
| 7,868 | `trendCardHtml` | `function trendCardHtml(` |
| 7,883 | `spellLines` | `function spellLines(` |
| 7,899 | `trendSub` | `function trendSub(` |
| 7,900 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,904 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,911 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,924_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,925 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,926 | `cycleDataOn` | `function cycleDataOn(` |
| 7,927 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,947 | `wireCycleData` | `function wireCycleData(` |
| 7,962 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 8,007_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,008 | `eraOpen` | `var eraOpen =` |
| 8,009 | `kT` | `function kT(` |
| 8,013 | `upTo` | `function upTo(` |
| 8,014 | `pairAt` | `function pairAt(` |
| 8,015 | `eraReading` | `function eraReading(` |
| 8,025 | `eraFig` | `function eraFig(` |
| 8,032 | `eraValue` | `function eraValue(` |
| 8,038 | `eraRange` | `function eraRange(` |
| 8,043 | `eraMini` | `function eraMini(` |
| 8,048 | `eraCard` | `function eraCard(` |
| 8,067 | `eraShow` | `function eraShow(` |
| 8,076 | `enterEra` | `function enterEra(` |
| 8,083 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,090_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,091 | `rosterRow` | `function rosterRow(` |
| 8,104 | `__roster` | `var __roster =` |
| 8,105 | `readingRoster` | `function readingRoster(` |
| 8,112 | `withUnit` | `function withUnit(` |
| 8,113 | `pastFigure` | `function pastFigure(` |
| 8,117 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,119_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,120 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,144 | `placeWords` | `function placeWords(` |
| 8,148 | `symptomNote` | `function symptomNote(` |
| 8,155 | `symptomRow` | `function symptomRow(` |
| 8,162 | `cycleTrack` | `function cycleTrack(` |
| 8,177 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,185_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,186 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,235_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,236 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,267_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,268 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **9 compute a value**, 9 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,984–1,987 | `LIVE_CACHE` | Live data without a render refactor |
| 2,324–2,328 | `productivityRecord` | Productivity growth is not in this panel |
| 2,341–2,363 | `productivityReading` | Productivity growth is not in this panel |
| 2,359–2,363 | `confidenceRecord` | Consumer confidence |
| 2,370–4,300 | `confidenceReading` | Consumer confidence |
| 4,287–4,300 | `horizonRead` | A series' highest reading within a span |
| 4,673–4,908 | `marketReading` | The S&P 500, year by year |
| 4,895–4,908 | `seasonTrackAll` | The season, computed |
| 4,910–4,914 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,573 |
| `pressure-range` | 2,050 |
| `sheet-marker-deficit` | 7,570 |
| `sheet-metric-gdp` | 7,534 |
| `sheet-metric-households` | 7,592 |
| `sheet-metric-temp` | 7,510 |
| `sheet-metric-valuation` | 7,612 |
| `sheet-sign-activity` | 7,555 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,577 |
| `desire-range` | 5,462 |
| `fear-range` | 6,106 |
| `hzn-range` | 5,939 |
| `pressure-range` | 5,643 |
| `pulse-range` | 5,430 |
| `sheet-metric-gdp` | 7,535 |
| `sheet-metric-temp` | 7,511 |
| `sheet-metric-valuation` | 7,613 |
| `volume-range` | 5,446 |

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
| 751 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 826 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 899 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,068 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,083 | The symptoms: a cycle's years against today |
| 1,159 | hero: yield curve |
| 1,191 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,210 | 10Y-3M spread history (quarterly, with recession bands) |
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

Every `id` in the static DOM (105), which is what the renderers fill:

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
| 1,452 | `gdp-trend` |
| 1,454 | `gdp-highlights` |
| 1,458 | `sheet-marker-deficit` |
| 1,458 | `deficit-timing` |
| 1,460 | `sheet-metric-households` |
| 1,461 | `households-timing` |
| 1,462 | `households-chart` |
| 1,463 | `households-highlights` |
| 1,466 | `sheet-metric-valuation` |
| 1,467 | `valuation-timing` |
| 1,468 | `valuation-chart` |
| 1,469 | `valuation-highlights` |
| 1,476 | `subj-value-hormones` |
| 1,477 | `subj-say-hormones` |
| 1,483 | `hormones-history` |
| 1,484 | `hormones-insights` |
| 1,493 | `subj-value-horizon` |
| 1,494 | `subj-say-horizon` |
| 1,495 | `subj-spark-horizon` |
| 1,501 | `hzn-timeline` |
| 1,503 | `hzn-head` |
| 1,504 | `spread-history-shell` |
| 1,505 | `spread-history-svg` |
| 1,506 | `spread-history-tooltip` |
| 1,508 | `hzn-trend` |
| 1,510 | `horizon-insights` |
| 1,519 | `subj-value-pressure` |
| 1,520 | `subj-say-pressure` |
| 1,526 | `pressure-timeline` |
| 1,528 | `pressure-head` |
| 1,529 | `ylm-shell` |
| 1,530 | `ylm-svg` |
| 1,531 | `ylm-tooltip` |
| 1,533 | `ylm-trend` |
| 1,535 | `pressure-insights` |
| 1,542 | `subj-ring-sentiment` |
| 1,545 | `subj-value-sentiment` |
| 1,546 | `subj-say-sentiment` |
| 1,547 | `subj-spark-sentiment` |
| 1,553 | `fear-history` |
| 1,554 | `curve-highlights` |
| 1,560 | `signs-list` |
| 1,566 | `calendar-list` |
| 1,573 | `cycle-data` |
| 1,575 | `cycle-legend` |
| 1,576 | `cycle-list` |
| 1,577 | `cycle-more` |
| 1,578 | `cycle-more-label` |
| 1,583 | `calendar-cycle` |
| 1,603 | `search-home` |
| 1,605 | `search-input` |
| 1,607 | `search-list` |
| 1,611 | `more-menu` |
| 1,614 | `menu-back` |
| 1,628 | `sources-open` |
| 1,636 | `appearance-current` |
| 1,642 | `sheet-howto` |
| 1,685 | `sheet-book` |
| 1,716 | `seasons-kicker` |
| 1,718 | `seasons-rows` |
| 1,721 | `framework-kicker` |
| 1,724 | `framework-rows` |
| 1,734 | `sheet-appearance` |
| 1,742 | `theme-toggle` |
| 1,749 | `sheet-contact` |
| 1,758 | `contact-form` |
| 1,759 | `contact-title` |
| 1,760 | `contact-message` |
| 1,762 | `contact-hint` |
| 1,763 | `contact-send` |
| 1,769 | `sheet-sources` |
| 1,772 | `sources-back` |
| 1,777 | `asof-text` |
| 1,778 | `sources-groups` |
| 1,784 | `detail-backdrop` |
| 1,786 | `detail-modal-close` |
| 1,787 | `detail-modal-body` |

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

