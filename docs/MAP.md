# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,093 lines**, about 618 KB, roughly **175 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `4e87252` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,364 | the whole stylesheet, every token and rule |
| **Markup** | 1,365–1,770 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,771–8,060 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,061–8,093 | </body></html> |

Counts: **401** top-level functions, **180** top-level vars, **6** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,771_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,773 | `byId` | `function byId(` |
| 1,781 | `byIdMaybe` | `function byIdMaybe(` |
| 1,782 | `put` | `function put(` |
| 1,787 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,789_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,790 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,791 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,792 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,793 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,797 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,802_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,803 | `wheelMeta` | `var wheelMeta =` |
| 1,811 | `seasonOverride` | `var seasonOverride =` |
| 1,812 | `cycleNowNote` | `var cycleNowNote =` |
| 1,814 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,892 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,934 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,935 | `volatilityHistory` | `var volatilityHistory =` |
| 1,937 | `fiscalHistory` | `var fiscalHistory =` |
| 1,943 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,945 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,955 | `productivityHistory` | `var productivityHistory =` |
| 1,957 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |

### Live data without a render refactor

_line 1,959_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,964 | `merge` | `function merge(` |
| 1,971 | `LIVE` | `function LIVE(` |
| 1,985 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 1,988_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,990 | `paintReading` | `function paintReading(` |
| 2,007 | `repaintVolatility` | `function repaintVolatility(` |
| 2,011 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,019 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,024 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,028 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,033_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,034 | `READINGS` | `var READINGS =` |
| 2,089 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,090 | `KINDS` | `var KINDS =` |
| 2,091 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,105 | `receive` | `function receive(` |
| 2,121 | `liveAsOf` | `var liveAsOf =` |
| 2,122 | `fmtAsOf` | `function fmtAsOf(` |
| 2,127 | `applyLive` | `function applyLive(` |
| 2,140 | `shapeOk` | `function shapeOk(` |
| 2,147 | `repaintPolicy` | `function repaintPolicy(` |
| 2,153 | `GYN` | `var GYN =` |
| 2,180 | `refreshLiveData` | `function refreshLiveData(` |
| 2,198 | `fetchSiteData` | `function fetchSiteData(` |
| 2,214 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,219_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,220 | `yieldCurve` | `var yieldCurve =` |
| 2,226 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,227 | `curveAsOf` | `function curveAsOf(` |
| 2,232 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,233 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,238 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,240_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,241 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,242 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,243 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,244 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,245 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,247_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,248 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,254 | `uninvLagToday` | `var uninvLagToday =` |
| 2,259 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,265 | `gdpSrc` | `var gdpSrc =` |
| 2,268 | `labPanel` | `var labPanel =` |
| 2,297 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,298_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,305 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,306 | `productivityWord` | `function productivityWord(` |

### The deficit, year by year

_line 2,335_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,336 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,337 | `deficitHistory` | `var deficitHistory =` |
| 2,340 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,341 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,343 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,352_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,353 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,362_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,363 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,366 | `timelineSpan` | `function timelineSpan(` |
| 2,371 | `timelineFor` | `function timelineFor(` |
| 2,382 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,388_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,389 | `windowScale` | `function windowScale(` |
| 2,404 | `windowYears` | `function windowYears(` |
| 2,412 | `refName` | `function refName(` |
| 2,416 | `histReadEnsure` | `function histReadEnsure(` |
| 2,436 | `histReadFill` | `function histReadFill(` |
| 2,486 | `histAxisEnds` | `function histAxisEnds(` |
| 2,497 | `histLegend` | `function histLegend(` |
| 2,557 | `refitHistory` | `function refitHistory(` |
| 2,567 | `wireHistHover` | `function wireHistHover(` |
| 2,604 | `mWindowFrom` | `function mWindowFrom(` |
| 2,608 | `qWindowFrom` | `function qWindowFrom(` |
| 2,613 | `DEF_1983` | `var DEF_1983 =` |
| 2,614 | `defFrom` | `function defFrom(` |
| 2,619 | `deficitChart` | `function deficitChart(` |
| 2,687 | `deficitBlock` | `function deficitBlock(` |
| 2,727 | `buffettHistory` | `var buffettHistory =` |
| 2,729 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,730 | `hyDates` | `var hyDates =` |
| 2,731 | `hyOas` | `var hyOas =` |
| 2,732 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,739 | `hyAt` | `function hyAt(` |
| 2,743 | `hyLabel` | `function hyLabel(` |
| 2,744 | `hyNum` | `function hyNum(` |
| 2,745 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,753 | `hyQuarters` | `function hyQuarters(` |
| 2,761 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,763 | `capeHistory` | `var capeHistory =` |
| 2,765 | `longCycleSrc` | `var longCycleSrc =` |
| 2,781 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,795_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,796 | `sentiment` | `var sentiment =` |
| 2,812 | `valuation` | `var valuation =` |
| 2,833 | `valRow` | `function valRow(` |
| 2,838 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,841 | `coincident` | `var coincident =` |
| 2,891 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,897 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,898 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,899 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,901_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,902 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,903 | `m2vHistory` | `var m2vHistory =` |
| 2,919 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 2,971 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,013_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,014 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,015 | `DOTS` | `var DOTS =` |
| 3,017 | `headPickRow` | `function headPickRow(` |
| 3,023 | `histHead` | `function histHead(` |
| 3,038 | `headNoteIdx` | `var headNoteIdx =` |
| 3,039 | `headMenuHtml` | `function headMenuHtml(` |
| 3,064 | `headMenuFor` | `var headMenuFor =` |
| 3,065 | `headSubFor` | `var headSubFor =` |
| 3,066 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,095 | `histNote` | `function histNote(` |
| 3,096 | `meterFlagged` | `function meterFlagged(` |
| 3,103 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,126 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,140 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,153 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,158 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,172 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,186 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,205 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,236 | `desireBlock` | `function desireBlock(` |
| 3,247 | `volumeBlock` | `function volumeBlock(` |
| 3,259 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,271 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,278_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,279 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,280 | `m2Level` | `var m2Level =` |
| 3,301 | `m2Yoy` | `var m2Yoy =` |
| 3,302 | `M2_NORM` | `var M2_NORM =` |
| 3,304 | `volumeVerdict` | `function volumeVerdict(` |
| 3,312 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,313 | `unempHistory` | `var unempHistory =` |
| 3,319 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,328 | `NROU_NOW` | `var NROU_NOW =` |
| 3,329 | `unempState` | `function unempState(` |
| 3,335 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,387_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,388 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,397 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,453 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,454 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,455 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,456_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,458 | `householdsChart` | `function householdsChart(` |
| 3,508 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,561 | `GDP_NORM` | `var GDP_NORM =` |
| 3,562 | `gdpNowQ` | `var gdpNowQ =` |
| 3,563 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,585 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,636 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,681 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,689 | `velocityVerdict` | `function velocityVerdict(` |
| 3,697 | `derivePulseTag` | `function derivePulseTag(` |
| 3,703 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,735_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,736 | `seasonReading` | `var seasonReading =` |
| 3,780 | `frameworkRows` | `var frameworkRows =` |
| 3,790 | `vixRow` | `var vixRow =` |
| 3,791 | `VIX_CALM` | `var VIX_CALM =` |
| 3,792 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,796 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,803_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,804 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,813_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,814 | `calendarTodayY` | `var calendarTodayY =` |
| 3,816 | `vix3mClose` | `var vix3mClose =` |
| 3,817 | `fearCurve` | `function fearCurve(` |
| 3,822 | `curveVerdict` | `function curveVerdict(` |
| 3,827 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,836_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,837 | `modeBar` | `function modeBar(` |
| 3,844 | `pickerOpen` | `var pickerOpen =` |
| 3,845 | `cycleByName` | `function cycleByName(` |
| 3,849 | `openCycle` | `function openCycle(` |
| 3,853 | `cycleSlice` | `function cycleSlice(` |
| 3,861 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,869 | `cycleMonths` | `function cycleMonths(` |
| 3,877 | `histControls` | `function histControls(` |
| 3,886 | `pageCycle` | `function pageCycle(` |
| 3,890 | `cycLabel` | `function cycLabel(` |
| 3,894 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,899 | `cyclePicker` | `function cyclePicker(` |
| 3,918 | `rangeBar` | `function rangeBar(` |
| 3,925 | `trendOf` | `function trendOf(` |
| 3,940 | `TREND_ARROW` | `var TREND_ARROW =` |
| 3,944 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 3,955_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,956 | `yearOf` | `function yearOf(` |
| 3,957 | `mean` | `function mean(` |

### The record rows

_line 3,958_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,959 | `headSigma` | `function headSigma(` |
| 3,964 | `atQuarter` | `function atQuarter(` |
| 3,965 | `atMonth` | `function atMonth(` |
| 3,966 | `ordinal` | `function ordinal(` |
| 3,967 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 3,970_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,971 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 3,978 | `moreRow` | `function moreRow(` |
| 3,984 | `tempCaptionFull` | `var tempCaptionFull =` |
| 3,985 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 3,991_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,992 | `xLabelOf` | `function xLabelOf(` |
| 4,002 | `fitLine` | `function fitLine(` |
| 4,006 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,024_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,025 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,033 | `vGrid` | `function vGrid(` |
| 4,037 | `COL_FILL` | `var COL_FILL =` |
| 4,038 | `colPath` | `function colPath(` |
| 4,043 | `colWidth` | `function colWidth(` |
| 4,048 | `AXIS` | `var AXIS =` |
| 4,049 | `histFrame` | `function histFrame(` |
| 4,056 | `xLabel` | `function xLabel(` |
| 4,059 | `crossLine` | `function crossLine(` |
| 4,062 | `zeroRule` | `function zeroRule(` |
| 4,065 | `meanRule` | `function meanRule(` |
| 4,066 | `pendingGeom` | `var pendingGeom =` |
| 4,067 | `publishGeom` | `function publishGeom(` |
| 4,068 | `attachHistory` | `function attachHistory(` |
| 4,077 | `histBar` | `function histBar(` |
| 4,080 | `histTip` | `function histTip(` |
| 4,081 | `avgRule` | `function avgRule(` |
| 4,084 | `vhOpen` | `function vhOpen(` |
| 4,085 | `chartAxes` | `function chartAxes(` |
| 4,115 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,150_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,152 | `maxIn` | `function maxIn(` |
| 4,157 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,158 | `PEEK_W` | `var PEEK_W =` |
| 4,159 | `PEEK_H` | `var PEEK_H =` |
| 4,160 | `colPeek` | `function colPeek(` |
| 4,178 | `meterPeek` | `function meterPeek(` |
| 4,195 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,200 | `pressureZone` | `function pressureZone(` |
| 4,206 | `HZN_BACK` | `var HZN_BACK =` |
| 4,207 | `hznLast` | `function hznLast(` |
| 4,208 | `hznBack` | `function hznBack(` |
| 4,209 | `horizonWord` | `function horizonWord(` |
| 4,229 | `HZN_METERS` | `var HZN_METERS =` |
| 4,237 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,258 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,263 | `RISK_RISK` | `var RISK_RISK =` |
| 4,268 | `riskCell` | `function riskCell(` |
| 4,269 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,299 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,324_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,325 | `pulseClipN` | `var pulseClipN =` |
| 4,326 | `beatPath` | `function beatPath(` |
| 4,343 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,357 | `pulsePeek` | `function pulsePeek(` |
| 4,360 | `pulseBlock` | `function pulseBlock(` |
| 4,377 | `CHEV` | `var CHEV =` |
| 4,378 | `peekCard` | `function peekCard(` |
| 4,397 | `dropSvg` | `function dropSvg(` |
| 4,399 | `volumeSvg` | `function volumeSvg(` |
| 4,403 | `gaugeSvg` | `function gaugeSvg(` |
| 4,407 | `diamondSvg` | `function diamondSvg(` |
| 4,411 | `sproutSvg` | `function sproutSvg(` |
| 4,419 | `markSvg` | `function markSvg(` |
| 4,422 | `hormoneSvg` | `function hormoneSvg(` |
| 4,427 | `flameSvg` | `function flameSvg(` |
| 4,430 | `clockSvg` | `function clockSvg(` |
| 4,431 | `gearSvg` | `function gearSvg(` |
| 4,439 | `thermoSvg` | `function thermoSvg(` |
| 4,442 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,444 | `trendUpSvg` | `function trendUpSvg(` |
| 4,446 | `ecgSvg` | `function ecgSvg(` |
| 4,448 | `circulationSvg` | `function circulationSvg(` |
| 4,449 | `weatherSvg` | `function weatherSvg(` |
| 4,457 | `moodSvg` | `function moodSvg(` |
| 4,461 | `boltSvg` | `function boltSvg(` |
| 4,462 | `houseSvg` | `function houseSvg(` |
| 4,465 | `sunriseSvg` | `function sunriseSvg(` |
| 4,469 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,477_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,478 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,479 | `dsrHistory` | `var dsrHistory =` |
| 4,480 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,481 | `savHistory` | `var savHistory =` |
| 4,484 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,493 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,494 | `dsrNow` | `var dsrNow =` |
| 4,495 | `savNow` | `var savNow =` |
| 4,496 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,497 | `householdsWord` | `function householdsWord(` |
| 4,504 | `householdsNow` | `var householdsNow =` |
| 4,505 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,522 | `savInfoHtml` | `function savInfoHtml(` |
| 4,540 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,547 | `curveSub` | `var curveSub =` |
| 4,548 | `vixPct` | `function vixPct(` |
| 4,552 | `curveNoteFull` | `var curveNoteFull =` |
| 4,563 | `volatilityRing` | `function volatilityRing(` |
| 4,568 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,569 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,584 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,590 | `marketCycles` | `var marketCycles =` |
| 4,618 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,620_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,621 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,622 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,627_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,628 | `TIMING` | `var TIMING =` |
| 4,634 | `CATEGORIES` | `var CATEGORIES =` |
| 4,640 | `ROSTER` | `var ROSTER =` |
| 4,689 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,690 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,692 | `pageState` | `function pageState(` |
| 4,697 | `pageMode` | `var pageMode =` |
| 4,698 | `pageCycles` | `var pageCycles =` |
| 4,699 | `pageRange` | `var pageRange =` |
| 4,700 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,701 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,702 | `keyed` | `function keyed(` |
| 4,709 | `hyMonths` | `function hyMonths(` |
| 4,712 | `prettyKey` | `function prettyKey(` |
| 4,717 | `lastDate` | `function lastDate(` |
| 4,718 | `compiledDay` | `function compiledDay(` |
| 4,719 | `labPeriod` | `function labPeriod(` |
| 4,720 | `rosterFor` | `function rosterFor(` |
| 4,721 | `rowReadings` | `function rowReadings(` |
| 4,722 | `indOf` | `function indOf(` |
| 4,723 | `peekOf` | `function peekOf(` |
| 4,728 | `cardDate` | `function cardDate(` |
| 4,729 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,750_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,751 | `slopeOf` | `function slopeOf(` |
| 4,756 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,757 | `readSeason` | `function readSeason(` |
| 4,776 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,777 | `qLabel` | `function qLabel(` |
| 4,798 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,800_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,801 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,802 | `seasonTitle` | `function seasonTitle(` |
| 4,803 | `monthLabel` | `function monthLabel(` |
| 4,804 | `cycleReturns` | `function cycleReturns(` |
| 4,814 | `cycleModel` | `function cycleModel(` |
| 4,845 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,853 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,859 | `nowModel` | `var nowModel =` |
| 4,860 | `readingNow` | `var readingNow =` |
| 4,861 | `cpiNow` | `var cpiNow =` |
| 4,862 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,863 | `currentSeason` | `var currentSeason =` |
| 4,864 | `seasonWhy` | `var seasonWhy =` |
| 4,866 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,868_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,869 | `CALM` | `var CALM =` |
| 4,870 | `FEELINGS` | `var FEELINGS =` |
| 4,871 | `seasonHalf` | `function seasonHalf(` |
| 4,872 | `rankToDate` | `function rankToDate(` |
| 4,876 | `readFeeling` | `function readFeeling(` |
| 4,887 | `readPosture` | `function readPosture(` |
| 4,895 | `marketCache` | `var marketCache =` |
| 4,896 | `marketMonths` | `function marketMonths(` |
| 4,916 | `seasonInMonth` | `function seasonInMonth(` |
| 4,921 | `stretchRank` | `function stretchRank(` |
| 4,924 | `marketFacts` | `function marketFacts(` |
| 4,935 | `followedCache` | `var followedCache =` |
| 4,936 | `whatFollowed` | `function whatFollowed(` |
| 4,958 | `lastFeeling` | `function lastFeeling(` |
| 4,963 | `diagnoseClose` | `function diagnoseClose(` |
| 4,971 | `diagnoseToday` | `function diagnoseToday(` |
| 4,987 | `vitalRingSvg` | `function vitalRingSvg(` |
| 4,998 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 4,999 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,000 | `spreadLabel` | `function spreadLabel(` |
| 5,004 | `policyFacts` | `function policyFacts(` |
| 5,011 | `policyFactRows` | `function policyFactRows(` |
| 5,017 | `allSources` | `var allSources =` |
| 5,031 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,043_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,044 | `SVG_NS` | `var SVG_NS =` |
| 5,045 | `svgEl` | `function svgEl(` |
| 5,050 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,084_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,085 | `clampPct` | `function clampPct(` |
| 5,088 | `detailTexts` | `var detailTexts =` |
| 5,089 | `detailSlots` | `var detailSlots =` |
| 5,090 | `detailSlot` | `function detailSlot(` |
| 5,100 | `metricSheet` | `function metricSheet(` |
| 5,105 | `ledeHtml` | `function ledeHtml(` |
| 5,106 | `facts` | `function facts(` |
| 5,107 | `factsFrom` | `function factsFrom(` |
| 5,111 | `expandBtn` | `function expandBtn(` |
| 5,115 | `sheetRenderers` | `var sheetRenderers =` |
| 5,116 | `drawsPage` | `function drawsPage(` |
| 5,117 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,146_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,149 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,150_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,151 | `subjectRow` | `function subjectRow(` |
| 5,161 | `subjectIcon` | `function subjectIcon(` |
| 5,162 | `srcHtml` | `function srcHtml(` |
| 5,163 | `timingMark` | `function timingMark(` |
| 5,171 | `timingPill` | `function timingPill(` |
| 5,180 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,188 | `seatPageFoot` | `function seatPageFoot(` |
| 5,200 | `timingMembers` | `var timingMembers =` |
| 5,202 | `registerTiming` | `function registerTiming(` |
| 5,204 | `headHtml` | `function headHtml(` |
| 5,209 | `heldHighlights` | `var heldHighlights =` |
| 5,210 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,237_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,238 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,239 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,247 | `withLatestPoint` | `function withLatestPoint(` |
| 5,252 | `pressureMaturities` | `function pressureMaturities(` |
| 5,276 | `registerFlowPages` | `function registerFlowPages(` |
| 5,330 | `renderPressureRow` | `function renderPressureRow(` |
| 5,338 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,357 | `ylmColumns` | `function ylmColumns(` |
| 5,377 | `ylmFitLine` | `function ylmFitLine(` |
| 5,389 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,530_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,531 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,568_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,569 | `spreadSeries` | `function spreadSeries(` |
| 5,613 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,739_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,740 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,766_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,767 | `drawHznHead` | `function drawHznHead(` |
| 5,781 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,840_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,841 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,849_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,850 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 5,947_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,948 | `renderVolatility` | `function renderVolatility(` |
| 5,993 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,023_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,024 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,054_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,055 | `totalRiseIn` | `function totalRiseIn(` |
| 6,065 | `eraInflation` | `function eraInflation(` |
| 6,076 | `eraGrowth` | `function eraGrowth(` |
| 6,092 | `fmtSigned` | `function fmtSigned(` |
| 6,093 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,094 | `growthShown` | `function growthShown(` |
| 6,095 | `growthShownCap` | `function growthShownCap(` |
| 6,096 | `phaseClass` | `function phaseClass(` |
| 6,097 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,101 | `cycleViewEl` | `var cycleViewEl =` |
| 6,102 | `shownEra` | `var shownEra =` |
| 6,103 | `calendarReset` | `var calendarReset =` |
| 6,104 | `metricPageReset` | `var metricPageReset =` |
| 6,105 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,106 | `topbarBack` | `var topbarBack =` |
| 6,107 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,114_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,115 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,196_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,197 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,215_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,216 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,237_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,239 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,240 | `hubSet` | `function hubSet(` |
| 6,251 | `quarterPopup` | `function quarterPopup(` |
| 6,274 | `hubShowDefault` | `function hubShowDefault(` |
| 6,282 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,288 | `hubShowYear` | `function hubShowYear(` |
| 6,298 | `renderCycleDial` | `function renderCycleDial(` |
| 6,379 | `m2Step` | `function m2Step(` |
| 6,382 | `heatStep` | `function heatStep(` |
| 6,386 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,397_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,398 | `renderCycleView` | `function renderCycleView(` |
| 6,404 | `shownEraModel` | `var shownEraModel =` |
| 6,405 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,407_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,408 | `stripGroupName` | `var stripGroupName =` |
| 6,409 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,437 | `marketStripHtml` | `function marketStripHtml(` |
| 6,471 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,472 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,501_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,502 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,508 | `debtSvg` | `function debtSvg(` |
| 6,509 | `interestSvg` | `function interestSvg(` |
| 6,511 | `budgetSvg` | `function budgetSvg(` |
| 6,513 | `lede` | `function lede(` |
| 6,514 | `periodOf` | `function periodOf(` |
| 6,515 | `meterWord` | `function meterWord(` |
| 6,516 | `splitPages` | `function splitPages(` |
| 6,531 | `productivityPage` | `function productivityPage(` |
| 6,536 | `splitSpec` | `function splitSpec(` |
| 6,542 | `splitInfo` | `function splitInfo(` |
| 6,546 | `periodTicks` | `function periodTicks(` |
| 6,551 | `periodOfSeries` | `function periodOfSeries(` |
| 6,552 | `drawSplit` | `function drawSplit(` |
| 6,569 | `mountSplit` | `function mountSplit(` |
| 6,582 | `splitPeek` | `function splitPeek(` |
| 6,589 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,597 | `deficitPeek` | `function deficitPeek(` |
| 6,601 | `catSheet` | `function catSheet(` |
| 6,606 | `groupId` | `function groupId(` |
| 6,607 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,608 | `seatGroups` | `function seatGroups(` |
| 6,611 | `groupSheet` | `function groupSheet(` |
| 6,621 | `appendPicks` | `function appendPicks(` |
| 6,629 | `doorSel` | `function doorSel(` |
| 6,630 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,642_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,643 | `buffettInsight` | `function buffettInsight(` |
| 6,658 | `debtInsight` | `function debtInsight(` |
| 6,673 | `productivityInsight` | `function productivityInsight(` |
| 6,683 | `interestInsight` | `function interestInsight(` |
| 6,698 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,721 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,741 | `activityStackHtml` | `function activityStackHtml(` |
| 6,751 | `seatTemperature` | `function seatTemperature(` |
| 6,759 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,792_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,793 | `partsOf` | `function partsOf(` |
| 6,802 | `authored` | `function authored(` |
| 6,803 | `registerRoster` | `function registerRoster(` |
| 6,825 | `indRow` | `function indRow(` |
| 6,829 | `IND_ORDER` | `var IND_ORDER =` |
| 6,830 | `indGroupRow` | `function indGroupRow(` |
| 6,835 | `indRows` | `function indRows(` |
| 6,849 | `indCategoryHtml` | `function indCategoryHtml(` |
| 6,857 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 6,859_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,860 | `NAV` | `var NAV =` |
| 6,861 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 6,955_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,956 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,003_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,004 | `qPretty` | `function qPretty(` |
| 7,005 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,006 | `peekArt` | `function peekArt(` |
| 7,007 | `indPeriod` | `function indPeriod(` |
| 7,011 | `catItem` | `function catItem(` |
| 7,061 | `insightCirculation` | `function insightCirculation(` |
| 7,094 | `insightWeather` | `function insightWeather(` |
| 7,137 | `PAIR_ART` | `var PAIR_ART =` |
| 7,143 | `placeSignPair` | `function placeSignPair(` |
| 7,166 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,182 | `buildCategories` | `function buildCategories(` |
| 7,198 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,236_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,237 | `capeFmt1` | `function capeFmt1(` |
| 7,238 | `actCycleMonths` | `function actCycleMonths(` |
| 7,246 | `householdsHighlights` | `function householdsHighlights(` |
| 7,265 | `redrawSheet` | `function redrawSheet(` |
| 7,269 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,314 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,351 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,398 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,428 | `valuationHighlights` | `function valuationHighlights(` |
| 7,441 | `tempHighlights` | `function tempHighlights(` |
| 7,458 | `gdpHighlights` | `function gdpHighlights(` |
| 7,473 | `renderMetricPages` | `function renderMetricPages(` |
| 7,483 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,493_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,494 | `FEELING_RULES` | `var FEELING_RULES =` |
| 7,503 | `FEELING_STATE` | `var FEELING_STATE =` |
| 7,504 | `POSTURE_STATE` | `var POSTURE_STATE =` |
| 7,505 | `POSTURE_SAYS` | `var POSTURE_SAYS =` |
| 7,512 | `BODY_SAYS` | `var BODY_SAYS =` |
| 7,520 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,525 | `todayFace` | `function todayFace(` |
| 7,531 | `readDoor` | `function readDoor(` |
| 7,539 | `pct` | `function pct(` |
| 7,540 | `rosterRows` | `function rosterRows(` |
| 7,541 | `eraMove` | `function eraMove(` |
| 7,549 | `analysisFor` | `function analysisFor(` |
| 7,557 | `dxRow` | `function dxRow(` |
| 7,561 | `dxText` | `function dxText(` |
| 7,562 | `dxSection` | `function dxSection(` |
| 7,563 | `systemHtml` | `function systemHtml(` |
| 7,566 | `dxHead` | `function dxHead(` |
| 7,571 | `postureLine` | `function postureLine(` |
| 7,575 | `diagnosisInfo` | `function diagnosisInfo(` |
| 7,583 | `assessmentFor` | `function assessmentFor(` |
| 7,593 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,609 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,613 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,614 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,627_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,628 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,629 | `cycleDataOn` | `function cycleDataOn(` |
| 7,630 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,650 | `wireCycleData` | `function wireCycleData(` |
| 7,665 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,710_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,711 | `eraOpen` | `var eraOpen =` |
| 7,712 | `kT` | `function kT(` |
| 7,716 | `upTo` | `function upTo(` |
| 7,717 | `pairAt` | `function pairAt(` |
| 7,718 | `eraReading` | `function eraReading(` |
| 7,728 | `eraFig` | `function eraFig(` |
| 7,735 | `eraValue` | `function eraValue(` |
| 7,741 | `eraRange` | `function eraRange(` |
| 7,746 | `eraMini` | `function eraMini(` |
| 7,751 | `eraCard` | `function eraCard(` |
| 7,770 | `eraShow` | `function eraShow(` |
| 7,779 | `enterEra` | `function enterEra(` |
| 7,786 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,793_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,794 | `rosterRow` | `function rosterRow(` |
| 7,807 | `__roster` | `var __roster =` |
| 7,808 | `readingRoster` | `function readingRoster(` |
| 7,815 | `withUnit` | `function withUnit(` |
| 7,816 | `pastFigure` | `function pastFigure(` |
| 7,820 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 7,822_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,823 | `cycleSymptoms` | `function cycleSymptoms(` |
| 7,847 | `placeWords` | `function placeWords(` |
| 7,851 | `symptomNote` | `function symptomNote(` |
| 7,858 | `symptomRow` | `function symptomRow(` |
| 7,865 | `cycleTrack` | `function cycleTrack(` |
| 7,880 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 7,888_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,889 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 7,938_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,939 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 7,970_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,971 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **6 compute a value**, 6 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,960–1,963 | `LIVE_CACHE` | Live data without a render refactor |
| 2,300–2,304 | `productivityRecord` | Productivity growth is not in this panel |
| 2,317–4,228 | `productivityReading` | Productivity growth is not in this panel |
| 4,215–4,228 | `horizonRead` | A series' highest reading within a span |
| 4,778–4,791 | `seasonTrackAll` | The season, computed |
| 4,793–4,797 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,333 |
| `pressure-range` | 2,026 |
| `sheet-marker-deficit` | 7,330 |
| `sheet-metric-gdp` | 7,294 |
| `sheet-metric-households` | 7,352 |
| `sheet-metric-temp` | 7,270 |
| `sheet-metric-valuation` | 7,372 |
| `sheet-sign-activity` | 7,315 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,337 |
| `desire-range` | 5,312 |
| `fear-range` | 5,956 |
| `hzn-range` | 5,789 |
| `pressure-range` | 5,493 |
| `pulse-range` | 5,280 |
| `sheet-metric-gdp` | 7,295 |
| `sheet-metric-temp` | 7,271 |
| `sheet-metric-valuation` | 7,373 |
| `volume-range` | 5,296 |

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
| 1,137 | hero: yield curve |
| 1,169 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,188 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,215 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,223 | long cycle (structural layer) |
| 1,230 | indicator grid |
| 1,256 | info icon + popover (progressive disclosure for longer notes) |
| 1,270 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,353 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (105), which is what the renderers fill:

| Line | id |
|---|---|
| 1,369 | `topbar-back` |
| 1,372 | `topbar-title` |
| 1,373 | `menu-btn` |
| 1,387 | `main` |
| 1,390 | `cycle-view` |
| 1,393 | `cycle-kicker` |
| 1,396 | `cycle-dial` |
| 1,398 | `season-wheel-hub-date` |
| 1,399 | `season-wheel-hub-theme` |
| 1,400 | `season-wheel-hub-detail` |
| 1,408 | `today-analysis` |
| 1,409 | `peek-row` |
| 1,410 | `sheet-metric-temp` |
| 1,411 | `temp-timing` |
| 1,412 | `temp-chart` |
| 1,413 | `temp-rangebar` |
| 1,415 | `temp-head` |
| 1,416 | `temp-history` |
| 1,417 | `temp-hist-tooltip` |
| 1,418 | `temp-trend` |
| 1,420 | `temp-highlights` |
| 1,422 | `sheet-metric-gdp` |
| 1,423 | `gdp-timing` |
| 1,424 | `gdp-chart` |
| 1,425 | `gdp-rangebar` |
| 1,427 | `gdp-head` |
| 1,428 | `gdp-history` |
| 1,429 | `gdp-hist-tooltip` |
| 1,430 | `gdp-trend` |
| 1,432 | `gdp-highlights` |
| 1,436 | `sheet-marker-deficit` |
| 1,436 | `deficit-timing` |
| 1,438 | `sheet-metric-households` |
| 1,439 | `households-timing` |
| 1,440 | `households-chart` |
| 1,441 | `households-highlights` |
| 1,444 | `sheet-metric-valuation` |
| 1,445 | `valuation-timing` |
| 1,446 | `valuation-chart` |
| 1,447 | `valuation-highlights` |
| 1,454 | `subj-value-hormones` |
| 1,455 | `subj-say-hormones` |
| 1,461 | `hormones-history` |
| 1,462 | `hormones-insights` |
| 1,471 | `subj-value-horizon` |
| 1,472 | `subj-say-horizon` |
| 1,473 | `subj-spark-horizon` |
| 1,479 | `hzn-timeline` |
| 1,481 | `hzn-head` |
| 1,482 | `spread-history-shell` |
| 1,483 | `spread-history-svg` |
| 1,484 | `spread-history-tooltip` |
| 1,486 | `hzn-trend` |
| 1,488 | `horizon-insights` |
| 1,497 | `subj-value-pressure` |
| 1,498 | `subj-say-pressure` |
| 1,504 | `pressure-timeline` |
| 1,506 | `pressure-head` |
| 1,507 | `ylm-shell` |
| 1,508 | `ylm-svg` |
| 1,509 | `ylm-tooltip` |
| 1,511 | `ylm-trend` |
| 1,513 | `pressure-insights` |
| 1,520 | `subj-ring-sentiment` |
| 1,523 | `subj-value-sentiment` |
| 1,524 | `subj-say-sentiment` |
| 1,525 | `subj-spark-sentiment` |
| 1,531 | `fear-history` |
| 1,532 | `curve-highlights` |
| 1,538 | `signs-list` |
| 1,544 | `calendar-list` |
| 1,551 | `cycle-data` |
| 1,553 | `cycle-legend` |
| 1,554 | `cycle-list` |
| 1,555 | `cycle-more` |
| 1,556 | `cycle-more-label` |
| 1,561 | `calendar-cycle` |
| 1,581 | `search-home` |
| 1,583 | `search-input` |
| 1,585 | `search-list` |
| 1,589 | `more-menu` |
| 1,592 | `menu-back` |
| 1,606 | `sources-open` |
| 1,614 | `appearance-current` |
| 1,620 | `sheet-howto` |
| 1,663 | `sheet-book` |
| 1,694 | `seasons-kicker` |
| 1,696 | `seasons-rows` |
| 1,699 | `framework-kicker` |
| 1,702 | `framework-rows` |
| 1,712 | `sheet-appearance` |
| 1,720 | `theme-toggle` |
| 1,727 | `sheet-contact` |
| 1,736 | `contact-form` |
| 1,737 | `contact-title` |
| 1,738 | `contact-message` |
| 1,740 | `contact-hint` |
| 1,741 | `contact-send` |
| 1,747 | `sheet-sources` |
| 1,750 | `sources-back` |
| 1,755 | `asof-text` |
| 1,756 | `sources-groups` |
| 1,762 | `detail-backdrop` |
| 1,764 | `detail-modal-close` |
| 1,765 | `detail-modal-body` |

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

