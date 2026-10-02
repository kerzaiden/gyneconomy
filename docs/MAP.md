# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,405 lines**, about 682 KB, roughly **194 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `237fbfa` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,374 | the whole stylesheet, every token and rule |
| **Markup** | 1,375–1,762 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,763–8,372 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,373–8,405 | </body></html> |

Counts: **447** top-level functions, **192** top-level vars, **10** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,763_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,765 | `byId` | `function byId(` |
| 1,773 | `byIdMaybe` | `function byIdMaybe(` |
| 1,774 | `put` | `function put(` |
| 1,779 | `elFrom` | `function elFrom(` |

### Layers: Escape closes only the topmost open layer; Tab stays inside a dialog

_line 1,780_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,781 | `LAYERS` | `var LAYERS =` |
| 1,782 | `layer` | `function layer(` |
| 1,783 | `onScreen` | `function onScreen(` |
| 1,784 | `focusQuiet` | `function focusQuiet(` |
| 1,785 | `tabStops` | `function tabStops(` |
| 1,789 | `keepTab` | `function keepTab(` |
| 1,801 | `rovingKeys` | `function rovingKeys(` |

### REFRESH: the one date to edit

_line 1,817_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,818 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,819 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,820 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,821 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,825 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,830_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,831 | `wheelMeta` | `var wheelMeta =` |
| 1,839 | `seasonOverride` | `var seasonOverride =` |
| 1,840 | `cycleNowNote` | `var cycleNowNote =` |
| 1,842 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,920 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,962 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,963 | `volatilityHistory` | `var volatilityHistory =` |
| 1,965 | `fiscalHistory` | `var fiscalHistory =` |
| 1,971 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,973 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,983 | `productivityHistory` | `var productivityHistory =` |
| 1,985 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |
| 1,987 | `confidenceHistory` | `var confidenceHistory =` |
| 1,989 | `gdpYoYBefore` | `var gdpYoYBefore =` |
| 1,990 | `cpiYoYBefore` | `var cpiYoYBefore =` |
| 1,991 | `sp500ReturnsBefore` | `var sp500ReturnsBefore =` |
| 1,992 | `gdpGrowthBefore` | `var gdpGrowthBefore =` |

### Live data without a render refactor

_line 1,994_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,001 | `merge` | `function merge(` |
| 2,008 | `LIVE` | `function LIVE(` |
| 2,022 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,025_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,027 | `paintReading` | `function paintReading(` |
| 2,044 | `repaintVolatility` | `function repaintVolatility(` |
| 2,048 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,053 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,057 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,062_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,063 | `READINGS` | `var READINGS =` |
| 2,118 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,119 | `KINDS` | `var KINDS =` |
| 2,120 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,134 | `receive` | `function receive(` |
| 2,150 | `liveAsOf` | `var liveAsOf =` |
| 2,151 | `fmtAsOf` | `function fmtAsOf(` |
| 2,156 | `applyLive` | `function applyLive(` |
| 2,169 | `shapeOk` | `function shapeOk(` |
| 2,176 | `repaintPolicy` | `function repaintPolicy(` |
| 2,182 | `GYN` | `var GYN =` |
| 2,209 | `refreshLiveData` | `function refreshLiveData(` |
| 2,227 | `fetchSiteData` | `function fetchSiteData(` |
| 2,243 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,248_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,249 | `yieldCurve` | `var yieldCurve =` |
| 2,255 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,256 | `curveAsOf` | `function curveAsOf(` |
| 2,261 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,262 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,267 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,269_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,270 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,271 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,272 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,273 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,274 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,276_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,277 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,283 | `uninvLagToday` | `var uninvLagToday =` |
| 2,288 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,295 | `gdpSrc` | `var gdpSrc =` |
| 2,299 | `labPanel` | `var labPanel =` |
| 2,328 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,329_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,336 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,337 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,364_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,365 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,371 | `confidenceWord` | `function confidenceWord(` |

### The deficit, year by year

_line 2,398_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,399 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,400 | `deficitHistory` | `var deficitHistory =` |
| 2,403 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,404 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,406 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,415_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,416 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,425_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,426 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,429 | `timelineSpan` | `function timelineSpan(` |
| 2,434 | `timelineFor` | `function timelineFor(` |
| 2,445 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,451_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,452 | `windowScale` | `function windowScale(` |
| 2,467 | `windowYears` | `function windowYears(` |
| 2,475 | `refName` | `function refName(` |
| 2,479 | `histReadEnsure` | `function histReadEnsure(` |
| 2,499 | `histReadFill` | `function histReadFill(` |
| 2,549 | `histAxisEnds` | `function histAxisEnds(` |
| 2,560 | `histLegend` | `function histLegend(` |
| 2,620 | `refitHistory` | `function refitHistory(` |
| 2,630 | `wireHistHover` | `function wireHistHover(` |
| 2,667 | `mWindowFrom` | `function mWindowFrom(` |
| 2,671 | `qWindowFrom` | `function qWindowFrom(` |
| 2,676 | `DEF_1983` | `var DEF_1983 =` |
| 2,677 | `defFrom` | `function defFrom(` |
| 2,682 | `deficitChart` | `function deficitChart(` |
| 2,750 | `deficitBlock` | `function deficitBlock(` |
| 2,790 | `buffettHistory` | `var buffettHistory =` |
| 2,792 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,793 | `hyDates` | `var hyDates =` |
| 2,794 | `hyOas` | `var hyOas =` |
| 2,795 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,802 | `hyAt` | `function hyAt(` |
| 2,806 | `hyLabel` | `function hyLabel(` |
| 2,807 | `hyNum` | `function hyNum(` |
| 2,808 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,816 | `hyQuarters` | `function hyQuarters(` |
| 2,824 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,826 | `capeHistory` | `var capeHistory =` |
| 2,828 | `longCycleSrc` | `var longCycleSrc =` |
| 2,844 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,858_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,859 | `sentiment` | `var sentiment =` |
| 2,875 | `valuation` | `var valuation =` |
| 2,896 | `valRow` | `function valRow(` |
| 2,901 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,904 | `coincident` | `var coincident =` |
| 2,944 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,950 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,951 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,952 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,954_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,955 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,956 | `m2vHistory` | `var m2vHistory =` |
| 2,972 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,024 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,066_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,067 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,068 | `DOTS` | `var DOTS =` |
| 3,070 | `headPickRow` | `function headPickRow(` |
| 3,076 | `histHead` | `function histHead(` |
| 3,091 | `headNoteIdx` | `var headNoteIdx =` |
| 3,092 | `headMenuHtml` | `function headMenuHtml(` |
| 3,117 | `headMenuFor` | `var headMenuFor =` |
| 3,118 | `headSubFor` | `var headSubFor =` |
| 3,119 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,130 | `headMoreBtn` | `function headMoreBtn(` |
| 3,134 | `headMenuFirst` | `function headMenuFirst(` |
| 3,138 | `headMenuShut` | `function headMenuShut(` |
| 3,165 | `histNote` | `function histNote(` |
| 3,166 | `meterFlagged` | `function meterFlagged(` |
| 3,173 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,196 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,210 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,223 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,228 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,232 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,244 | `productivityInfoHtml` | `function productivityInfoHtml(` |
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

_line 4,396_ · 26 declarations

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
| 4,471 | `gaugeSvg` | `function gaugeSvg(` |
| 4,475 | `diamondSvg` | `function diamondSvg(` |
| 4,479 | `sproutSvg` | `function sproutSvg(` |
| 4,487 | `markSvg` | `function markSvg(` |
| 4,490 | `heartSvg` | `function heartSvg(` |
| 4,492 | `flameSvg` | `function flameSvg(` |
| 4,495 | `clockSvg` | `function clockSvg(` |
| 4,496 | `thermoSvg` | `function thermoSvg(` |
| 4,499 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,501 | `personSvg` | `function personSvg(` |
| 4,503 | `bookSvg` | `function bookSvg(` |
| 4,506 | `ecgSvg` | `function ecgSvg(` |
| 4,508 | `circulationSvg` | `function circulationSvg(` |
| 4,509 | `boltSvg` | `function boltSvg(` |
| 4,510 | `houseSvg` | `function houseSvg(` |
| 4,513 | `marketSvg` | `function marketSvg(` |
| 4,516 | `bagSvg` | `function bagSvg(` |
| 4,519 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,527_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,528 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,529 | `dsrHistory` | `var dsrHistory =` |
| 4,530 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,531 | `savHistory` | `var savHistory =` |
| 4,534 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,543 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,544 | `dsrNow` | `var dsrNow =` |
| 4,545 | `savNow` | `var savNow =` |
| 4,546 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,547 | `householdsWord` | `function householdsWord(` |
| 4,554 | `householdsNow` | `var householdsNow =` |
| 4,555 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,572 | `savInfoHtml` | `function savInfoHtml(` |
| 4,590 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,597 | `curveSub` | `var curveSub =` |
| 4,598 | `vixPct` | `function vixPct(` |
| 4,602 | `curveNoteFull` | `var curveNoteFull =` |
| 4,613 | `volatilityRing` | `function volatilityRing(` |
| 4,618 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,619 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,634 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,639_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,640 | `sp500Years` | `var sp500Years =` |
| 4,641 | `marketWord` | `function marketWord(` |
| 4,645 | `marketCol` | `function marketCol(` |
| 4,646 | `marketPeek` | `function marketPeek(` |
| 4,670 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,680 | `marketCycles` | `var marketCycles =` |
| 4,797 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,799_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,800 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,801 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,806_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,807 | `TIMING` | `var TIMING =` |
| 4,813 | `CATEGORIES` | `var CATEGORIES =` |
| 4,819 | `ROSTER` | `var ROSTER =` |
| 4,869 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,870 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,872 | `pageState` | `function pageState(` |
| 4,877 | `pageMode` | `var pageMode =` |
| 4,878 | `pageCycles` | `var pageCycles =` |
| 4,879 | `pageRange` | `var pageRange =` |
| 4,880 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,881 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,882 | `keyed` | `function keyed(` |
| 4,889 | `hyMonths` | `function hyMonths(` |
| 4,892 | `prettyKey` | `function prettyKey(` |
| 4,897 | `lastDate` | `function lastDate(` |
| 4,898 | `compiledDay` | `function compiledDay(` |
| 4,899 | `labPeriod` | `function labPeriod(` |
| 4,900 | `rosterFor` | `function rosterFor(` |
| 4,901 | `rowReadings` | `function rowReadings(` |
| 4,902 | `indOf` | `function indOf(` |
| 4,903 | `peekOf` | `function peekOf(` |
| 4,908 | `cardDate` | `function cardDate(` |
| 4,909 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,930_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,931 | `slopeOf` | `function slopeOf(` |
| 4,936 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,937 | `readSeason` | `function readSeason(` |
| 4,956 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,957 | `qLabel` | `function qLabel(` |
| 4,973 | `SEASON_YEARS` | `var SEASON_YEARS =` |
| 4,990 | `seasonTrack` | `var seasonTrack =` |
| 4,991 | `closingReading` | `function closingReading(` |
| 5,001 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 5,003_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,004 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 5,005 | `seasonTitle` | `function seasonTitle(` |
| 5,006 | `monthLabel` | `function monthLabel(` |
| 5,007 | `cycleReturns` | `function cycleReturns(` |
| 5,017 | `cycleModel` | `function cycleModel(` |
| 5,048 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 5,056 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,062 | `nowModel` | `var nowModel =` |
| 5,063 | `readingNow` | `var readingNow =` |
| 5,064 | `cpiNow` | `var cpiNow =` |
| 5,065 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,066 | `currentSeason` | `var currentSeason =` |
| 5,067 | `seasonWhy` | `var seasonWhy =` |
| 5,069 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 5,071_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,072 | `rankToDate` | `function rankToDate(` |
| 5,076 | `marketCache` | `var marketCache =` |
| 5,077 | `marketMonths` | `function marketMonths(` |
| 5,084 | `yearAfter` | `function yearAfter(` |
| 5,088 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 5,093_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,094 | `rankIn` | `function rankIn(` |
| 5,099 | `moodLists` | `var moodLists =` |
| 5,100 | `moodSeries` | `function moodSeries(` |
| 5,108 | `moodAt` | `function moodAt(` |
| 5,114 | `MOOD_TURN` | `var MOOD_TURN =` |
| 5,115 | `MOOD_RISING` | `var MOOD_RISING =` |
| 5,116 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 5,117 | `moodWord` | `function moodWord(` |
| 5,121 | `moodRead` | `function moodRead(` |
| 5,128 | `moodCache` | `var moodCache =` |
| 5,129 | `moodTrack` | `function moodTrack(` |
| 5,135 | `moodToday` | `function moodToday(` |
| 5,140 | `cycleStory` | `function cycleStory(` |
| 5,151 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,162 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,163 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,164 | `spreadLabel` | `function spreadLabel(` |
| 5,168 | `policyFacts` | `function policyFacts(` |
| 5,175 | `policyFactRows` | `function policyFactRows(` |
| 5,181 | `allSources` | `var allSources =` |
| 5,196 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,208_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,209 | `SVG_NS` | `var SVG_NS =` |
| 5,210 | `svgEl` | `function svgEl(` |
| 5,215 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,249_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,250 | `clampPct` | `function clampPct(` |
| 5,253 | `detailTexts` | `var detailTexts =` |
| 5,254 | `detailSlots` | `var detailSlots =` |
| 5,255 | `detailSlot` | `function detailSlot(` |
| 5,265 | `metricSheet` | `function metricSheet(` |
| 5,270 | `ledeHtml` | `function ledeHtml(` |
| 5,271 | `facts` | `function facts(` |
| 5,272 | `factsFrom` | `function factsFrom(` |
| 5,276 | `expandBtn` | `function expandBtn(` |
| 5,280 | `sheetRenderers` | `var sheetRenderers =` |
| 5,281 | `drawsPage` | `function drawsPage(` |
| 5,282 | `wireDetailModal` | `function wireDetailModal(` |
| 5,319 | `detailClose` | `var detailClose =` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,322_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,325 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,326_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,327 | `subjectRow` | `function subjectRow(` |
| 5,337 | `subjectIcon` | `function subjectIcon(` |
| 5,338 | `srcHtml` | `function srcHtml(` |
| 5,339 | `timingMark` | `function timingMark(` |
| 5,347 | `timingPill` | `function timingPill(` |
| 5,356 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,364 | `seatPageFoot` | `function seatPageFoot(` |
| 5,376 | `timingMembers` | `var timingMembers =` |
| 5,378 | `registerTiming` | `function registerTiming(` |
| 5,380 | `headHtml` | `function headHtml(` |
| 5,385 | `heldHighlights` | `var heldHighlights =` |
| 5,386 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,413_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,414 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,415 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,423 | `withLatestPoint` | `function withLatestPoint(` |
| 5,428 | `pressureMaturities` | `function pressureMaturities(` |
| 5,452 | `registerFlowPages` | `function registerFlowPages(` |
| 5,506 | `renderPressureRow` | `function renderPressureRow(` |
| 5,514 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,533 | `ylmColumns` | `function ylmColumns(` |
| 5,553 | `ylmFitLine` | `function ylmFitLine(` |
| 5,565 | `pressureHead` | `function pressureHead(` |
| 5,583 | `showPressureView` | `function showPressureView(` |
| 5,588 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,721_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,722 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,759_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,760 | `spreadSeries` | `function spreadSeries(` |
| 5,804 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,930_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,931 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: the Treasury spreads, inside Pressure

_line 5,957_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,958 | `renderHorizonPage` | `function renderHorizonPage(` |
| 5,982 | `spreadInsights` | `function spreadInsights(` |

### RENDER: Valuation (slow)

_line 6,012_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,013 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 6,021_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,022 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,119_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,120 | `renderVolatility` | `function renderVolatility(` |
| 6,165 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,195_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,196 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,217_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,218 | `totalRiseIn` | `function totalRiseIn(` |
| 6,228 | `eraInflation` | `function eraInflation(` |
| 6,239 | `eraGrowth` | `function eraGrowth(` |
| 6,255 | `fmtSigned` | `function fmtSigned(` |
| 6,256 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,257 | `growthShown` | `function growthShown(` |
| 6,258 | `growthShownCap` | `function growthShownCap(` |
| 6,259 | `phaseClass` | `function phaseClass(` |
| 6,260 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,264 | `cycleViewEl` | `var cycleViewEl =` |
| 6,265 | `shownEra` | `var shownEra =` |
| 6,266 | `calendarReset` | `var calendarReset =` |
| 6,267 | `metricPageReset` | `var metricPageReset =` |
| 6,268 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,269 | `topbarBack` | `var topbarBack =` |
| 6,270 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,277_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,278 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,359_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,360 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,379_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,380 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,401_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,403 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,404 | `hubSet` | `function hubSet(` |
| 6,412 | `hubOpen` | `function hubOpen(` |
| 6,419 | `quarterCards` | `function quarterCards(` |
| 6,430 | `popHead` | `function popHead(` |
| 6,431 | `hubLine` | `function hubLine(` |
| 6,432 | `quarterSheet` | `function quarterSheet(` |
| 6,437 | `quarterPopup` | `function quarterPopup(` |
| 6,459 | `hubShowDefault` | `function hubShowDefault(` |
| 6,466 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,471 | `hubShowYear` | `function hubShowYear(` |
| 6,481 | `renderCycleDial` | `function renderCycleDial(` |
| 6,564 | `dialKeyStep` | `function dialKeyStep(` |
| 6,572 | `dialSay` | `function dialSay(` |
| 6,579 | `m2Step` | `function m2Step(` |
| 6,582 | `heatStep` | `function heatStep(` |
| 6,586 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,597_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,598 | `renderCycleView` | `function renderCycleView(` |
| 6,604 | `shownEraModel` | `var shownEraModel =` |
| 6,605 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,607_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,608 | `stripGroupName` | `var stripGroupName =` |
| 6,609 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,637 | `marketStripHtml` | `function marketStripHtml(` |
| 6,671 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,672 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,701_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,702 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,708 | `debtSvg` | `function debtSvg(` |
| 6,709 | `interestSvg` | `function interestSvg(` |
| 6,711 | `budgetSvg` | `function budgetSvg(` |
| 6,713 | `lede` | `function lede(` |
| 6,714 | `periodOf` | `function periodOf(` |
| 6,715 | `meterWord` | `function meterWord(` |
| 6,716 | `splitPages` | `function splitPages(` |
| 6,733 | `confidencePage` | `function confidencePage(` |
| 6,739 | `marketPage` | `function marketPage(` |
| 6,745 | `productivityPage` | `function productivityPage(` |
| 6,750 | `splitSpec` | `function splitSpec(` |
| 6,756 | `splitInfo` | `function splitInfo(` |
| 6,760 | `periodTicks` | `function periodTicks(` |
| 6,765 | `periodOfSeries` | `function periodOfSeries(` |
| 6,766 | `drawSplit` | `function drawSplit(` |
| 6,783 | `mountSplit` | `function mountSplit(` |
| 6,796 | `splitPeek` | `function splitPeek(` |
| 6,803 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,811 | `deficitPeek` | `function deficitPeek(` |
| 6,815 | `catSheet` | `function catSheet(` |
| 6,820 | `catList` | `function catList(` |
| 6,821 | `groupId` | `function groupId(` |
| 6,822 | `groupCard` | `function groupCard(` |
| 6,830 | `groupSheet` | `function groupSheet(` |
| 6,837 | `appendPicks` | `function appendPicks(` |
| 6,845 | `doorSel` | `function doorSel(` |
| 6,846 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,858_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,859 | `buffettInsight` | `function buffettInsight(` |
| 6,874 | `debtInsight` | `function debtInsight(` |
| 6,889 | `productivityInsight` | `function productivityInsight(` |
| 6,899 | `confidenceInsight` | `function confidenceInsight(` |
| 6,910 | `ORDINAL` | `var ORDINAL =` |
| 6,911 | `marketInsight` | `function marketInsight(` |
| 6,923 | `interestInsight` | `function interestInsight(` |
| 6,938 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,961 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,981 | `activityStackHtml` | `function activityStackHtml(` |
| 6,991 | `seatTemperature` | `function seatTemperature(` |
| 6,999 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 7,032_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,033 | `partsOf` | `function partsOf(` |
| 7,042 | `authored` | `function authored(` |
| 7,043 | `registerRoster` | `function registerRoster(` |
| 7,065 | `indRow` | `function indRow(` |
| 7,069 | `IND_ORDER` | `var IND_ORDER =` |
| 7,070 | `indGroupRow` | `function indGroupRow(` |
| 7,075 | `catMembers` | `function catMembers(` |
| 7,083 | `indRows` | `function indRows(` |
| 7,097 | `indCategoryHtml` | `function indCategoryHtml(` |
| 7,104 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 7,106_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,107 | `NAV` | `var NAV =` |
| 7,108 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,203_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,204 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,251_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,252 | `qPretty` | `function qPretty(` |
| 7,253 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,254 | `peekArt` | `function peekArt(` |
| 7,255 | `indPeriod` | `function indPeriod(` |
| 7,259 | `catItem` | `function catItem(` |
| 7,267 | `catCard` | `function catCard(` |
| 7,309 | `insightCirculation` | `function insightCirculation(` |
| 7,342 | `insightWeather` | `function insightWeather(` |
| 7,382 | `seasonCards` | `function seasonCards(` |
| 7,388 | `marketCycleCard` | `function marketCycleCard(` |
| 7,400 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,404 | `seasonName` | `function seasonName(` |
| 7,405 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,412 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,417 | `curvePath` | `function curvePath(` |
| 7,425 | `moodCallout` | `function moodCallout(` |
| 7,429 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,441 | `moodInfo` | `function moodInfo(` |
| 7,450 | `moodFigures` | `function moodFigures(` |
| 7,456 | `moodCard` | `function moodCard(` |
| 7,460 | `insightMood` | `function insightMood(` |
| 7,466 | `storyBeats` | `function storyBeats(` |
| 7,477 | `storyText` | `function storyText(` |
| 7,481 | `PAIR_ART` | `var PAIR_ART =` |
| 7,487 | `placeSignPair` | `function placeSignPair(` |
| 7,510 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,526 | `buildCategories` | `function buildCategories(` |
| 7,542 | `tempPeek` | `function tempPeek(` |
| 7,548 | `gdpPeek` | `function gdpPeek(` |
| 7,553 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,580_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,581 | `capeFmt1` | `function capeFmt1(` |
| 7,582 | `actCycleMonths` | `function actCycleMonths(` |
| 7,590 | `householdsHighlights` | `function householdsHighlights(` |
| 7,609 | `redrawSheet` | `function redrawSheet(` |
| 7,613 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,658 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,695 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,742 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,772 | `valuationHighlights` | `function valuationHighlights(` |
| 7,785 | `tempHighlights` | `function tempHighlights(` |
| 7,802 | `gdpHighlights` | `function gdpHighlights(` |
| 7,817 | `renderMetricPages` | `function renderMetricPages(` |
| 7,827 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,837_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,838 | `todayFace` | `function todayFace(` |
| 7,844 | `readDoor` | `function readDoor(` |
| 7,852 | `pct` | `function pct(` |
| 7,853 | `rosterRows` | `function rosterRows(` |
| 7,854 | `eraEnds` | `function eraEnds(` |
| 7,861 | `eraMove` | `function eraMove(` |
| 7,865 | `HORMONES` | `var HORMONES =` |
| 7,866 | `analysisFor` | `function analysisFor(` |
| 7,872 | `dxRow` | `function dxRow(` |
| 7,873 | `dxText` | `function dxText(` |
| 7,874 | `dxSection` | `function dxSection(` |
| 7,875 | `systemHtml` | `function systemHtml(` |
| 7,878 | `dxHead` | `function dxHead(` |
| 7,883 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,892 | `acrossCycle` | `function acrossCycle(` |
| 7,899 | `moodDoor` | `function moodDoor(` |
| 7,904 | `trendText` | `function trendText(` |
| 7,905 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,909 | `replaceInsights` | `function replaceInsights(` |
| 7,915 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,919 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,932_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,933 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,934 | `cycleDataOn` | `function cycleDataOn(` |
| 7,935 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,955 | `wireCycleData` | `function wireCycleData(` |
| 7,970 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 8,015_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,016 | `eraOpen` | `var eraOpen =` |
| 8,017 | `kT` | `function kT(` |
| 8,021 | `upTo` | `function upTo(` |
| 8,022 | `pairAt` | `function pairAt(` |
| 8,023 | `eraReading` | `function eraReading(` |
| 8,033 | `eraFig` | `function eraFig(` |
| 8,040 | `eraValue` | `function eraValue(` |
| 8,046 | `eraRange` | `function eraRange(` |
| 8,051 | `eraMini` | `function eraMini(` |
| 8,056 | `eraCard` | `function eraCard(` |
| 8,075 | `eraCards` | `function eraCards(` |
| 8,081 | `eraShow` | `function eraShow(` |
| 8,088 | `enterEra` | `function enterEra(` |
| 8,095 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,102_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,103 | `rosterRow` | `function rosterRow(` |
| 8,116 | `__roster` | `var __roster =` |
| 8,117 | `readingRoster` | `function readingRoster(` |
| 8,124 | `withUnit` | `function withUnit(` |
| 8,125 | `pastFigure` | `function pastFigure(` |
| 8,129 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,131_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,132 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,156 | `placeWords` | `function placeWords(` |
| 8,160 | `symptomNote` | `function symptomNote(` |
| 8,167 | `symptomRow` | `function symptomRow(` |
| 8,174 | `cycleTrack` | `function cycleTrack(` |
| 8,189 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,197_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,198 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,247_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,248 | `renderTopbar` | `function renderTopbar(` |
| 8,278 | `wireTabKeys` | `function wireTabKeys(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,281_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,282 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **10 compute a value**, 10 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,997–2,000 | `LIVE_CACHE` | Live data without a render refactor |
| 2,331–2,335 | `productivityRecord` | Productivity growth is not in this panel |
| 2,348–2,370 | `productivityReading` | Productivity growth is not in this panel |
| 2,366–2,370 | `confidenceRecord` | Consumer confidence |
| 2,377–4,300 | `confidenceReading` | Consumer confidence |
| 4,287–4,300 | `horizonRead` | A series' highest reading within a span |
| 4,651–4,971 | `marketReading` | The S&P 500, year by year |
| 4,958–4,971 | `seasonTrackAll` | The season, computed |
| 4,974–4,989 | `seasonTrackYears` | The season, computed |
| 4,996–5,000 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,677 |
| `pressure-range` | 2,055 |
| `sheet-marker-deficit` | 7,674 |
| `sheet-metric-gdp` | 7,638 |
| `sheet-metric-households` | 7,696 |
| `sheet-metric-temp` | 7,614 |
| `sheet-metric-valuation` | 7,716 |
| `sheet-sign-activity` | 7,659 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,681 |
| `desire-range` | 5,488 |
| `fear-range` | 6,128 |
| `pressure-range` | 5,693 |
| `pulse-range` | 5,456 |
| `sheet-metric-gdp` | 7,639 |
| `sheet-metric-temp` | 7,615 |
| `sheet-metric-valuation` | 7,717 |
| `volume-range` | 5,472 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

_none found — if that is wrong, the pattern in `tools/make-map.py` needs updating._

## Stylesheet, section by section

| Line | Section |
|---|---|
| 145 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 239 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 275 | season strip |
| 301 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 365 | tab bar (app-style segmented navigation) |
| 400 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 415 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 488 | journal (editorial content tab) |
| 494 | content tab: reading companion |
| 543 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 737 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 812 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 885 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,054 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,069 | The symptoms: a cycle's years against today |
| 1,146 | hero: yield curve |
| 1,178 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,197 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,224 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,232 | long cycle (structural layer) |
| 1,239 | indicator grid |
| 1,265 | info icon + popover (progressive disclosure for longer notes) |
| 1,279 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,363 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (109), which is what the renderers fill:

| Line | id |
|---|---|
| 1,379 | `topbar-back` |
| 1,382 | `topbar-title` |
| 1,383 | `menu-btn` |
| 1,390 | `tab-cycle` |
| 1,391 | `tab-search` |
| 1,392 | `tab-analysis` |
| 1,393 | `tab-portfolio` |
| 1,397 | `main` |
| 1,399 | `panel-cycle` |
| 1,400 | `cycle-view` |
| 1,403 | `cycle-kicker` |
| 1,406 | `cycle-dial` |
| 1,408 | `season-wheel-hub-open` |
| 1,409 | `season-wheel-hub-date` |
| 1,410 | `season-wheel-hub-theme` |
| 1,411 | `season-wheel-hub-detail` |
| 1,413 | `season-wheel-keys` |
| 1,414 | `season-wheel-live` |
| 1,422 | `today-analysis` |
| 1,423 | `peek-row` |
| 1,424 | `sheet-metric-temp` |
| 1,425 | `temp-timing` |
| 1,426 | `temp-chart` |
| 1,427 | `temp-rangebar` |
| 1,429 | `temp-head` |
| 1,430 | `temp-history` |
| 1,431 | `temp-hist-tooltip` |
| 1,432 | `temp-trend` |
| 1,434 | `temp-highlights` |
| 1,436 | `sheet-metric-gdp` |
| 1,437 | `gdp-timing` |
| 1,438 | `gdp-chart` |
| 1,439 | `gdp-rangebar` |
| 1,441 | `gdp-head` |
| 1,442 | `gdp-history` |
| 1,443 | `gdp-hist-tooltip` |
| 1,444 | `gdp-trend` |
| 1,446 | `gdp-highlights` |
| 1,450 | `sheet-marker-deficit` |
| 1,450 | `deficit-timing` |
| 1,452 | `sheet-metric-households` |
| 1,453 | `households-timing` |
| 1,454 | `households-chart` |
| 1,455 | `households-highlights` |
| 1,458 | `sheet-metric-valuation` |
| 1,459 | `valuation-timing` |
| 1,460 | `valuation-chart` |
| 1,461 | `valuation-highlights` |
| 1,468 | `subj-value-hormones` |
| 1,469 | `subj-say-hormones` |
| 1,475 | `hormones-history` |
| 1,476 | `hormones-insights` |
| 1,485 | `subj-value-pressure` |
| 1,486 | `subj-say-pressure` |
| 1,492 | `pressure-timeline` |
| 1,494 | `pressure-head` |
| 1,495 | `ylm-shell` |
| 1,496 | `ylm-svg` |
| 1,497 | `ylm-tooltip` |
| 1,499 | `spread-history-shell` |
| 1,500 | `spread-history-svg` |
| 1,501 | `spread-history-tooltip` |
| 1,503 | `ylm-trend` |
| 1,505 | `pressure-insights` |
| 1,512 | `subj-ring-sentiment` |
| 1,515 | `subj-value-sentiment` |
| 1,516 | `subj-say-sentiment` |
| 1,517 | `subj-spark-sentiment` |
| 1,523 | `fear-history` |
| 1,524 | `curve-highlights` |
| 1,530 | `signs-list` |
| 1,535 | `panel-analysis` |
| 1,536 | `calendar-list` |
| 1,543 | `cycle-data` |
| 1,545 | `cycle-legend` |
| 1,546 | `cycle-list` |
| 1,547 | `cycle-more` |
| 1,548 | `cycle-more-label` |
| 1,553 | `calendar-cycle` |
| 1,556 | `panel-portfolio` |
| 1,572 | `panel-search` |
| 1,573 | `search-home` |
| 1,575 | `search-input` |
| 1,577 | `search-list` |
| 1,581 | `more-menu` |
| 1,584 | `menu-back` |
| 1,598 | `sources-open` |
| 1,606 | `appearance-current` |
| 1,612 | `sheet-howto` |
| 1,655 | `sheet-book` |
| 1,686 | `seasons-kicker` |
| 1,688 | `seasons-rows` |
| 1,691 | `framework-kicker` |
| 1,694 | `framework-rows` |
| 1,704 | `sheet-appearance` |
| 1,712 | `theme-toggle` |
| 1,719 | `sheet-contact` |
| 1,728 | `contact-form` |
| 1,729 | `contact-title` |
| 1,730 | `contact-message` |
| 1,732 | `contact-hint` |
| 1,733 | `contact-send` |
| 1,739 | `sheet-sources` |
| 1,742 | `sources-back` |
| 1,747 | `asof-text` |
| 1,748 | `sources-groups` |
| 1,754 | `detail-backdrop` |
| 1,756 | `detail-modal-close` |
| 1,757 | `detail-modal-body` |

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

