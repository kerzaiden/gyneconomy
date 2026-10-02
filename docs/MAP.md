# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,311 lines**, about 653 KB, roughly **185 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `1c5b44b` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,371 | the whole stylesheet, every token and rule |
| **Markup** | 1,372–1,777 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,778–8,278 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,279–8,311 | </body></html> |

Counts: **432** top-level functions, **186** top-level vars, **9** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,778_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,780 | `byId` | `function byId(` |
| 1,788 | `byIdMaybe` | `function byIdMaybe(` |
| 1,789 | `put` | `function put(` |
| 1,794 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,796_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,797 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,798 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,799 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,800 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,804 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,809_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,810 | `wheelMeta` | `var wheelMeta =` |
| 1,818 | `seasonOverride` | `var seasonOverride =` |
| 1,819 | `cycleNowNote` | `var cycleNowNote =` |
| 1,821 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,899 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,941 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,942 | `volatilityHistory` | `var volatilityHistory =` |
| 1,944 | `fiscalHistory` | `var fiscalHistory =` |
| 1,950 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,952 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,962 | `productivityHistory` | `var productivityHistory =` |
| 1,964 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |
| 1,966 | `confidenceHistory` | `var confidenceHistory =` |

### Live data without a render refactor

_line 1,968_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,973 | `merge` | `function merge(` |
| 1,980 | `LIVE` | `function LIVE(` |
| 1,994 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 1,997_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,999 | `paintReading` | `function paintReading(` |
| 2,016 | `repaintVolatility` | `function repaintVolatility(` |
| 2,020 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,028 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,033 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,037 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,042_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,043 | `READINGS` | `var READINGS =` |
| 2,098 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,099 | `KINDS` | `var KINDS =` |
| 2,100 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,114 | `receive` | `function receive(` |
| 2,130 | `liveAsOf` | `var liveAsOf =` |
| 2,131 | `fmtAsOf` | `function fmtAsOf(` |
| 2,136 | `applyLive` | `function applyLive(` |
| 2,149 | `shapeOk` | `function shapeOk(` |
| 2,156 | `repaintPolicy` | `function repaintPolicy(` |
| 2,162 | `GYN` | `var GYN =` |
| 2,189 | `refreshLiveData` | `function refreshLiveData(` |
| 2,207 | `fetchSiteData` | `function fetchSiteData(` |
| 2,223 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,228_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,229 | `yieldCurve` | `var yieldCurve =` |
| 2,235 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,236 | `curveAsOf` | `function curveAsOf(` |
| 2,241 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,242 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,247 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,249_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,250 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,251 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,252 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,253 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,254 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,256_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,257 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,263 | `uninvLagToday` | `var uninvLagToday =` |
| 2,268 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,274 | `gdpSrc` | `var gdpSrc =` |
| 2,277 | `labPanel` | `var labPanel =` |
| 2,306 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,307_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,314 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,315 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,342_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,343 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,349 | `confidenceWord` | `function confidenceWord(` |

### The deficit, year by year

_line 2,376_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,377 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,378 | `deficitHistory` | `var deficitHistory =` |
| 2,381 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,382 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,384 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,393_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,394 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,403_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,404 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,407 | `timelineSpan` | `function timelineSpan(` |
| 2,412 | `timelineFor` | `function timelineFor(` |
| 2,423 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,429_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,430 | `windowScale` | `function windowScale(` |
| 2,445 | `windowYears` | `function windowYears(` |
| 2,453 | `refName` | `function refName(` |
| 2,457 | `histReadEnsure` | `function histReadEnsure(` |
| 2,477 | `histReadFill` | `function histReadFill(` |
| 2,527 | `histAxisEnds` | `function histAxisEnds(` |
| 2,538 | `histLegend` | `function histLegend(` |
| 2,598 | `refitHistory` | `function refitHistory(` |
| 2,608 | `wireHistHover` | `function wireHistHover(` |
| 2,645 | `mWindowFrom` | `function mWindowFrom(` |
| 2,649 | `qWindowFrom` | `function qWindowFrom(` |
| 2,654 | `DEF_1983` | `var DEF_1983 =` |
| 2,655 | `defFrom` | `function defFrom(` |
| 2,660 | `deficitChart` | `function deficitChart(` |
| 2,728 | `deficitBlock` | `function deficitBlock(` |
| 2,768 | `buffettHistory` | `var buffettHistory =` |
| 2,770 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,771 | `hyDates` | `var hyDates =` |
| 2,772 | `hyOas` | `var hyOas =` |
| 2,773 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,780 | `hyAt` | `function hyAt(` |
| 2,784 | `hyLabel` | `function hyLabel(` |
| 2,785 | `hyNum` | `function hyNum(` |
| 2,786 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,794 | `hyQuarters` | `function hyQuarters(` |
| 2,802 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,804 | `capeHistory` | `var capeHistory =` |
| 2,806 | `longCycleSrc` | `var longCycleSrc =` |
| 2,822 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,836_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,837 | `sentiment` | `var sentiment =` |
| 2,853 | `valuation` | `var valuation =` |
| 2,874 | `valRow` | `function valRow(` |
| 2,879 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,882 | `coincident` | `var coincident =` |
| 2,932 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,938 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,939 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,940 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,942_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,943 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,944 | `m2vHistory` | `var m2vHistory =` |
| 2,960 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,012 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,054_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,055 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,056 | `DOTS` | `var DOTS =` |
| 3,058 | `headPickRow` | `function headPickRow(` |
| 3,064 | `histHead` | `function histHead(` |
| 3,079 | `headNoteIdx` | `var headNoteIdx =` |
| 3,080 | `headMenuHtml` | `function headMenuHtml(` |
| 3,105 | `headMenuFor` | `var headMenuFor =` |
| 3,106 | `headSubFor` | `var headSubFor =` |
| 3,107 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,136 | `histNote` | `function histNote(` |
| 3,137 | `meterFlagged` | `function meterFlagged(` |
| 3,144 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,167 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,181 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,194 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,199 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,203 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,215 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,229 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,243 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,262 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,293 | `desireBlock` | `function desireBlock(` |
| 3,304 | `volumeBlock` | `function volumeBlock(` |
| 3,316 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,328 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,335_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,336 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,337 | `m2Level` | `var m2Level =` |
| 3,358 | `m2Yoy` | `var m2Yoy =` |
| 3,359 | `M2_NORM` | `var M2_NORM =` |
| 3,361 | `volumeVerdict` | `function volumeVerdict(` |
| 3,369 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,370 | `unempHistory` | `var unempHistory =` |
| 3,376 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,385 | `NROU_NOW` | `var NROU_NOW =` |
| 3,386 | `unempState` | `function unempState(` |
| 3,392 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,444_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,445 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,454 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,510 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,511 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,512 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,513_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,515 | `householdsChart` | `function householdsChart(` |
| 3,565 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,618 | `GDP_NORM` | `var GDP_NORM =` |
| 3,619 | `gdpNowQ` | `var gdpNowQ =` |
| 3,620 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,642 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,693 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,738 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,746 | `velocityVerdict` | `function velocityVerdict(` |
| 3,754 | `derivePulseTag` | `function derivePulseTag(` |
| 3,760 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,792_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,793 | `seasonReading` | `var seasonReading =` |
| 3,837 | `frameworkRows` | `var frameworkRows =` |
| 3,847 | `vixRow` | `var vixRow =` |
| 3,848 | `VIX_CALM` | `var VIX_CALM =` |
| 3,849 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,853 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,860_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,861 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,870_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,871 | `calendarTodayY` | `var calendarTodayY =` |
| 3,873 | `vix3mClose` | `var vix3mClose =` |
| 3,874 | `fearCurve` | `function fearCurve(` |
| 3,879 | `curveVerdict` | `function curveVerdict(` |
| 3,884 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,893_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,894 | `modeBar` | `function modeBar(` |
| 3,901 | `pickerOpen` | `var pickerOpen =` |
| 3,902 | `cycleByName` | `function cycleByName(` |
| 3,906 | `openCycle` | `function openCycle(` |
| 3,910 | `cycleSlice` | `function cycleSlice(` |
| 3,918 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,926 | `cycleMonths` | `function cycleMonths(` |
| 3,934 | `histControls` | `function histControls(` |
| 3,943 | `pageCycle` | `function pageCycle(` |
| 3,947 | `cycLabel` | `function cycLabel(` |
| 3,951 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,956 | `cyclePicker` | `function cyclePicker(` |
| 3,975 | `rangeBar` | `function rangeBar(` |
| 3,982 | `trendOf` | `function trendOf(` |
| 3,997 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,001 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 4,012_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,013 | `yearOf` | `function yearOf(` |
| 4,014 | `mean` | `function mean(` |

### The record rows

_line 4,015_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,016 | `headSigma` | `function headSigma(` |
| 4,021 | `atQuarter` | `function atQuarter(` |
| 4,022 | `atMonth` | `function atMonth(` |
| 4,023 | `ordinal` | `function ordinal(` |
| 4,024 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,027_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,028 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,035 | `moreRow` | `function moreRow(` |
| 4,041 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,042 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,048_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,049 | `xLabelOf` | `function xLabelOf(` |
| 4,059 | `fitLine` | `function fitLine(` |
| 4,063 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,081_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,082 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,090 | `vGrid` | `function vGrid(` |
| 4,094 | `COL_FILL` | `var COL_FILL =` |
| 4,095 | `colPath` | `function colPath(` |
| 4,100 | `colWidth` | `function colWidth(` |
| 4,105 | `AXIS` | `var AXIS =` |
| 4,106 | `histFrame` | `function histFrame(` |
| 4,113 | `xLabel` | `function xLabel(` |
| 4,116 | `crossLine` | `function crossLine(` |
| 4,119 | `zeroRule` | `function zeroRule(` |
| 4,122 | `meanRule` | `function meanRule(` |
| 4,123 | `pendingGeom` | `var pendingGeom =` |
| 4,124 | `publishGeom` | `function publishGeom(` |
| 4,125 | `attachHistory` | `function attachHistory(` |
| 4,134 | `histBar` | `function histBar(` |
| 4,137 | `histTip` | `function histTip(` |
| 4,138 | `avgRule` | `function avgRule(` |
| 4,141 | `vhOpen` | `function vhOpen(` |
| 4,142 | `chartAxes` | `function chartAxes(` |
| 4,172 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,207_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,209 | `maxIn` | `function maxIn(` |
| 4,214 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,215 | `PEEK_W` | `var PEEK_W =` |
| 4,216 | `PEEK_H` | `var PEEK_H =` |
| 4,217 | `colPeek` | `function colPeek(` |
| 4,235 | `meterPeek` | `function meterPeek(` |
| 4,252 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,257 | `pressureZone` | `function pressureZone(` |
| 4,263 | `HZN_BACK` | `var HZN_BACK =` |
| 4,264 | `hznLast` | `function hznLast(` |
| 4,265 | `hznBack` | `function hznBack(` |
| 4,266 | `horizonWord` | `function horizonWord(` |
| 4,286 | `HZN_METERS` | `var HZN_METERS =` |
| 4,294 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,315 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,320 | `RISK_RISK` | `var RISK_RISK =` |
| 4,325 | `riskCell` | `function riskCell(` |
| 4,326 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,356 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,381_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,382 | `pulseClipN` | `var pulseClipN =` |
| 4,383 | `beatPath` | `function beatPath(` |
| 4,400 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,414 | `pulsePeek` | `function pulsePeek(` |
| 4,417 | `pulseBlock` | `function pulseBlock(` |
| 4,434 | `CHEV` | `var CHEV =` |
| 4,435 | `peekCard` | `function peekCard(` |
| 4,454 | `dropSvg` | `function dropSvg(` |
| 4,456 | `volumeSvg` | `function volumeSvg(` |
| 4,460 | `gaugeSvg` | `function gaugeSvg(` |
| 4,464 | `diamondSvg` | `function diamondSvg(` |
| 4,468 | `sproutSvg` | `function sproutSvg(` |
| 4,476 | `markSvg` | `function markSvg(` |
| 4,479 | `hormoneSvg` | `function hormoneSvg(` |
| 4,484 | `flameSvg` | `function flameSvg(` |
| 4,487 | `clockSvg` | `function clockSvg(` |
| 4,488 | `gearSvg` | `function gearSvg(` |
| 4,496 | `thermoSvg` | `function thermoSvg(` |
| 4,499 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,501 | `trendUpSvg` | `function trendUpSvg(` |
| 4,503 | `ecgSvg` | `function ecgSvg(` |
| 4,505 | `circulationSvg` | `function circulationSvg(` |
| 4,506 | `weatherSvg` | `function weatherSvg(` |
| 4,514 | `moodSvg` | `function moodSvg(` |
| 4,518 | `boltSvg` | `function boltSvg(` |
| 4,519 | `houseSvg` | `function houseSvg(` |
| 4,522 | `marketSvg` | `function marketSvg(` |
| 4,525 | `bagSvg` | `function bagSvg(` |
| 4,528 | `sunriseSvg` | `function sunriseSvg(` |
| 4,532 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,540_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,541 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,542 | `dsrHistory` | `var dsrHistory =` |
| 4,543 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,544 | `savHistory` | `var savHistory =` |
| 4,547 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,556 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,557 | `dsrNow` | `var dsrNow =` |
| 4,558 | `savNow` | `var savNow =` |
| 4,559 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,560 | `householdsWord` | `function householdsWord(` |
| 4,567 | `householdsNow` | `var householdsNow =` |
| 4,568 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,585 | `savInfoHtml` | `function savInfoHtml(` |
| 4,603 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,610 | `curveSub` | `var curveSub =` |
| 4,611 | `vixPct` | `function vixPct(` |
| 4,615 | `curveNoteFull` | `var curveNoteFull =` |
| 4,626 | `volatilityRing` | `function volatilityRing(` |
| 4,631 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,632 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,647 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,652_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,653 | `sp500Years` | `var sp500Years =` |
| 4,654 | `marketWord` | `function marketWord(` |
| 4,677 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,687 | `marketCycles` | `var marketCycles =` |
| 4,715 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,717_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,718 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,719 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,724_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,725 | `TIMING` | `var TIMING =` |
| 4,731 | `CATEGORIES` | `var CATEGORIES =` |
| 4,737 | `ROSTER` | `var ROSTER =` |
| 4,791 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,792 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,794 | `pageState` | `function pageState(` |
| 4,799 | `pageMode` | `var pageMode =` |
| 4,800 | `pageCycles` | `var pageCycles =` |
| 4,801 | `pageRange` | `var pageRange =` |
| 4,802 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,803 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,804 | `keyed` | `function keyed(` |
| 4,811 | `hyMonths` | `function hyMonths(` |
| 4,814 | `prettyKey` | `function prettyKey(` |
| 4,819 | `lastDate` | `function lastDate(` |
| 4,820 | `compiledDay` | `function compiledDay(` |
| 4,821 | `labPeriod` | `function labPeriod(` |
| 4,822 | `rosterFor` | `function rosterFor(` |
| 4,823 | `rowReadings` | `function rowReadings(` |
| 4,824 | `indOf` | `function indOf(` |
| 4,825 | `peekOf` | `function peekOf(` |
| 4,830 | `cardDate` | `function cardDate(` |
| 4,831 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,852_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,853 | `slopeOf` | `function slopeOf(` |
| 4,858 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,859 | `readSeason` | `function readSeason(` |
| 4,878 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,879 | `qLabel` | `function qLabel(` |
| 4,900 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,902_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,903 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,904 | `seasonTitle` | `function seasonTitle(` |
| 4,905 | `monthLabel` | `function monthLabel(` |
| 4,906 | `cycleReturns` | `function cycleReturns(` |
| 4,916 | `cycleModel` | `function cycleModel(` |
| 4,947 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,955 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,961 | `nowModel` | `var nowModel =` |
| 4,962 | `readingNow` | `var readingNow =` |
| 4,963 | `cpiNow` | `var cpiNow =` |
| 4,964 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,965 | `currentSeason` | `var currentSeason =` |
| 4,966 | `seasonWhy` | `var seasonWhy =` |
| 4,968 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,970_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,971 | `rankToDate` | `function rankToDate(` |
| 4,975 | `marketCache` | `var marketCache =` |
| 4,976 | `marketMonths` | `function marketMonths(` |
| 4,984 | `seasonInMonth` | `function seasonInMonth(` |
| 4,989 | `yearAfter` | `function yearAfter(` |
| 4,993 | `trackCache` | `var trackCache =` |
| 4,994 | `feelingTrack` | `function feelingTrack(` |
| 5,002 | `monthsApart` | `function monthsApart(` |
| 5,003 | `feelingSpells` | `function feelingSpells(` |
| 5,014 | `spellRecord` | `function spellRecord(` |
| 5,020 | `diagnoseClose` | `function diagnoseClose(` |
| 5,024 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 5,029_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,030 | `rankIn` | `function rankIn(` |
| 5,035 | `moodLists` | `var moodLists =` |
| 5,036 | `moodSeries` | `function moodSeries(` |
| 5,044 | `moodAt` | `function moodAt(` |
| 5,050 | `MOOD_TURN` | `var MOOD_TURN =` |
| 5,051 | `MOOD_RISING` | `var MOOD_RISING =` |
| 5,052 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 5,053 | `moodWord` | `function moodWord(` |
| 5,057 | `moodRead` | `function moodRead(` |
| 5,064 | `moodCache` | `var moodCache =` |
| 5,065 | `moodTrack` | `function moodTrack(` |
| 5,071 | `moodToday` | `function moodToday(` |
| 5,076 | `cycleStory` | `function cycleStory(` |
| 5,087 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,098 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,099 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,100 | `spreadLabel` | `function spreadLabel(` |
| 5,104 | `policyFacts` | `function policyFacts(` |
| 5,111 | `policyFactRows` | `function policyFactRows(` |
| 5,117 | `allSources` | `var allSources =` |
| 5,131 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,143_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,144 | `SVG_NS` | `var SVG_NS =` |
| 5,145 | `svgEl` | `function svgEl(` |
| 5,150 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,184_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,185 | `clampPct` | `function clampPct(` |
| 5,188 | `detailTexts` | `var detailTexts =` |
| 5,189 | `detailSlots` | `var detailSlots =` |
| 5,190 | `detailSlot` | `function detailSlot(` |
| 5,200 | `metricSheet` | `function metricSheet(` |
| 5,205 | `ledeHtml` | `function ledeHtml(` |
| 5,206 | `facts` | `function facts(` |
| 5,207 | `factsFrom` | `function factsFrom(` |
| 5,211 | `expandBtn` | `function expandBtn(` |
| 5,215 | `sheetRenderers` | `var sheetRenderers =` |
| 5,216 | `drawsPage` | `function drawsPage(` |
| 5,217 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,246_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,249 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,250_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,251 | `subjectRow` | `function subjectRow(` |
| 5,261 | `subjectIcon` | `function subjectIcon(` |
| 5,262 | `srcHtml` | `function srcHtml(` |
| 5,263 | `timingMark` | `function timingMark(` |
| 5,271 | `timingPill` | `function timingPill(` |
| 5,280 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,288 | `seatPageFoot` | `function seatPageFoot(` |
| 5,300 | `timingMembers` | `var timingMembers =` |
| 5,302 | `registerTiming` | `function registerTiming(` |
| 5,304 | `headHtml` | `function headHtml(` |
| 5,309 | `heldHighlights` | `var heldHighlights =` |
| 5,310 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,337_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,338 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,339 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,347 | `withLatestPoint` | `function withLatestPoint(` |
| 5,352 | `pressureMaturities` | `function pressureMaturities(` |
| 5,376 | `registerFlowPages` | `function registerFlowPages(` |
| 5,430 | `renderPressureRow` | `function renderPressureRow(` |
| 5,438 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,457 | `ylmColumns` | `function ylmColumns(` |
| 5,477 | `ylmFitLine` | `function ylmFitLine(` |
| 5,489 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,630_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,631 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,668_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,669 | `spreadSeries` | `function spreadSeries(` |
| 5,713 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,839_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,840 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,866_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,867 | `drawHznHead` | `function drawHznHead(` |
| 5,881 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,940_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,941 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,949_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,950 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,047_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,048 | `renderVolatility` | `function renderVolatility(` |
| 6,093 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,123_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,124 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,154_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,155 | `totalRiseIn` | `function totalRiseIn(` |
| 6,165 | `eraInflation` | `function eraInflation(` |
| 6,176 | `eraGrowth` | `function eraGrowth(` |
| 6,192 | `fmtSigned` | `function fmtSigned(` |
| 6,193 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,194 | `growthShown` | `function growthShown(` |
| 6,195 | `growthShownCap` | `function growthShownCap(` |
| 6,196 | `phaseClass` | `function phaseClass(` |
| 6,197 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,201 | `cycleViewEl` | `var cycleViewEl =` |
| 6,202 | `shownEra` | `var shownEra =` |
| 6,203 | `calendarReset` | `var calendarReset =` |
| 6,204 | `metricPageReset` | `var metricPageReset =` |
| 6,205 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,206 | `topbarBack` | `var topbarBack =` |
| 6,207 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,214_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,215 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,296_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,297 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,315_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,316 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,337_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,339 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,340 | `hubSet` | `function hubSet(` |
| 6,351 | `quarterPopup` | `function quarterPopup(` |
| 6,374 | `hubShowDefault` | `function hubShowDefault(` |
| 6,383 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,389 | `hubShowYear` | `function hubShowYear(` |
| 6,399 | `renderCycleDial` | `function renderCycleDial(` |
| 6,480 | `m2Step` | `function m2Step(` |
| 6,483 | `heatStep` | `function heatStep(` |
| 6,487 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,498_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,499 | `renderCycleView` | `function renderCycleView(` |
| 6,505 | `shownEraModel` | `var shownEraModel =` |
| 6,506 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,508_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,509 | `stripGroupName` | `var stripGroupName =` |
| 6,510 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,538 | `marketStripHtml` | `function marketStripHtml(` |
| 6,572 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,573 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,602_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,603 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,609 | `debtSvg` | `function debtSvg(` |
| 6,610 | `interestSvg` | `function interestSvg(` |
| 6,612 | `budgetSvg` | `function budgetSvg(` |
| 6,614 | `lede` | `function lede(` |
| 6,615 | `periodOf` | `function periodOf(` |
| 6,616 | `meterWord` | `function meterWord(` |
| 6,617 | `splitPages` | `function splitPages(` |
| 6,634 | `confidencePage` | `function confidencePage(` |
| 6,640 | `marketPage` | `function marketPage(` |
| 6,646 | `productivityPage` | `function productivityPage(` |
| 6,651 | `splitSpec` | `function splitSpec(` |
| 6,657 | `splitInfo` | `function splitInfo(` |
| 6,661 | `periodTicks` | `function periodTicks(` |
| 6,666 | `periodOfSeries` | `function periodOfSeries(` |
| 6,667 | `drawSplit` | `function drawSplit(` |
| 6,684 | `mountSplit` | `function mountSplit(` |
| 6,697 | `splitPeek` | `function splitPeek(` |
| 6,704 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,712 | `deficitPeek` | `function deficitPeek(` |
| 6,716 | `catSheet` | `function catSheet(` |
| 6,721 | `groupId` | `function groupId(` |
| 6,722 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,723 | `seatGroups` | `function seatGroups(` |
| 6,726 | `groupSheet` | `function groupSheet(` |
| 6,736 | `appendPicks` | `function appendPicks(` |
| 6,744 | `doorSel` | `function doorSel(` |
| 6,745 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,757_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,758 | `buffettInsight` | `function buffettInsight(` |
| 6,773 | `debtInsight` | `function debtInsight(` |
| 6,788 | `productivityInsight` | `function productivityInsight(` |
| 6,798 | `confidenceInsight` | `function confidenceInsight(` |
| 6,809 | `ORDINAL` | `var ORDINAL =` |
| 6,810 | `marketInsight` | `function marketInsight(` |
| 6,822 | `interestInsight` | `function interestInsight(` |
| 6,837 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,860 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,880 | `activityStackHtml` | `function activityStackHtml(` |
| 6,890 | `seatTemperature` | `function seatTemperature(` |
| 6,898 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,931_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,932 | `partsOf` | `function partsOf(` |
| 6,941 | `authored` | `function authored(` |
| 6,942 | `registerRoster` | `function registerRoster(` |
| 6,964 | `indRow` | `function indRow(` |
| 6,968 | `IND_ORDER` | `var IND_ORDER =` |
| 6,969 | `indGroupRow` | `function indGroupRow(` |
| 6,974 | `indRows` | `function indRows(` |
| 6,988 | `indCategoryHtml` | `function indCategoryHtml(` |
| 6,996 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 6,998_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,999 | `NAV` | `var NAV =` |
| 7,000 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,094_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,095 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,142_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,143 | `qPretty` | `function qPretty(` |
| 7,144 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,145 | `peekArt` | `function peekArt(` |
| 7,146 | `indPeriod` | `function indPeriod(` |
| 7,150 | `catItem` | `function catItem(` |
| 7,200 | `insightCirculation` | `function insightCirculation(` |
| 7,233 | `insightWeather` | `function insightWeather(` |
| 7,273 | `seasonCards` | `function seasonCards(` |
| 7,279 | `marketCycleCard` | `function marketCycleCard(` |
| 7,291 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,295 | `seasonName` | `function seasonName(` |
| 7,296 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,303 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,308 | `curvePath` | `function curvePath(` |
| 7,316 | `moodCallout` | `function moodCallout(` |
| 7,320 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,332 | `moodInfo` | `function moodInfo(` |
| 7,340 | `moodCard` | `function moodCard(` |
| 7,346 | `insightMood` | `function insightMood(` |
| 7,353 | `storyText` | `function storyText(` |
| 7,365 | `storyInfo` | `function storyInfo(` |
| 7,371 | `storyHtml` | `function storyHtml(` |
| 7,378 | `PAIR_ART` | `var PAIR_ART =` |
| 7,384 | `placeSignPair` | `function placeSignPair(` |
| 7,407 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,423 | `buildCategories` | `function buildCategories(` |
| 7,439 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,477_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,478 | `capeFmt1` | `function capeFmt1(` |
| 7,479 | `actCycleMonths` | `function actCycleMonths(` |
| 7,487 | `householdsHighlights` | `function householdsHighlights(` |
| 7,506 | `redrawSheet` | `function redrawSheet(` |
| 7,510 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,555 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,592 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,639 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,669 | `valuationHighlights` | `function valuationHighlights(` |
| 7,682 | `tempHighlights` | `function tempHighlights(` |
| 7,699 | `gdpHighlights` | `function gdpHighlights(` |
| 7,714 | `renderMetricPages` | `function renderMetricPages(` |
| 7,724 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,734_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,735 | `todayFace` | `function todayFace(` |
| 7,741 | `readDoor` | `function readDoor(` |
| 7,749 | `pct` | `function pct(` |
| 7,750 | `rosterRows` | `function rosterRows(` |
| 7,751 | `eraEnds` | `function eraEnds(` |
| 7,758 | `eraMove` | `function eraMove(` |
| 7,762 | `HORMONES` | `var HORMONES =` |
| 7,763 | `analysisFor` | `function analysisFor(` |
| 7,769 | `dxRow` | `function dxRow(` |
| 7,770 | `dxText` | `function dxText(` |
| 7,771 | `dxSection` | `function dxSection(` |
| 7,772 | `systemHtml` | `function systemHtml(` |
| 7,775 | `dxHead` | `function dxHead(` |
| 7,780 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,789 | `acrossCycle` | `function acrossCycle(` |
| 7,796 | `trendCardHtml` | `function trendCardHtml(` |
| 7,802 | `spellLines` | `function spellLines(` |
| 7,817 | `trendSub` | `function trendSub(` |
| 7,818 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,822 | `replaceInsights` | `function replaceInsights(` |
| 7,828 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,832 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,845_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,846 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,847 | `cycleDataOn` | `function cycleDataOn(` |
| 7,848 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,868 | `wireCycleData` | `function wireCycleData(` |
| 7,883 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,928_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,929 | `eraOpen` | `var eraOpen =` |
| 7,930 | `kT` | `function kT(` |
| 7,934 | `upTo` | `function upTo(` |
| 7,935 | `pairAt` | `function pairAt(` |
| 7,936 | `eraReading` | `function eraReading(` |
| 7,946 | `eraFig` | `function eraFig(` |
| 7,953 | `eraValue` | `function eraValue(` |
| 7,959 | `eraRange` | `function eraRange(` |
| 7,964 | `eraMini` | `function eraMini(` |
| 7,969 | `eraCard` | `function eraCard(` |
| 7,988 | `eraShow` | `function eraShow(` |
| 7,997 | `enterEra` | `function enterEra(` |
| 8,004 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,011_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,012 | `rosterRow` | `function rosterRow(` |
| 8,025 | `__roster` | `var __roster =` |
| 8,026 | `readingRoster` | `function readingRoster(` |
| 8,033 | `withUnit` | `function withUnit(` |
| 8,034 | `pastFigure` | `function pastFigure(` |
| 8,038 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,040_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,041 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,065 | `placeWords` | `function placeWords(` |
| 8,069 | `symptomNote` | `function symptomNote(` |
| 8,076 | `symptomRow` | `function symptomRow(` |
| 8,083 | `cycleTrack` | `function cycleTrack(` |
| 8,098 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,106_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,107 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,156_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,157 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,188_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,189 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **9 compute a value**, 9 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,969–1,972 | `LIVE_CACHE` | Live data without a render refactor |
| 2,309–2,313 | `productivityRecord` | Productivity growth is not in this panel |
| 2,326–2,348 | `productivityReading` | Productivity growth is not in this panel |
| 2,344–2,348 | `confidenceRecord` | Consumer confidence |
| 2,355–4,285 | `confidenceReading` | Consumer confidence |
| 4,272–4,285 | `horizonRead` | A series' highest reading within a span |
| 4,658–4,893 | `marketReading` | The S&P 500, year by year |
| 4,880–4,893 | `seasonTrackAll` | The season, computed |
| 4,895–4,899 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,574 |
| `pressure-range` | 2,035 |
| `sheet-marker-deficit` | 7,571 |
| `sheet-metric-gdp` | 7,535 |
| `sheet-metric-households` | 7,593 |
| `sheet-metric-temp` | 7,511 |
| `sheet-metric-valuation` | 7,613 |
| `sheet-sign-activity` | 7,556 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,578 |
| `desire-range` | 5,412 |
| `fear-range` | 6,056 |
| `hzn-range` | 5,889 |
| `pressure-range` | 5,593 |
| `pulse-range` | 5,380 |
| `sheet-metric-gdp` | 7,536 |
| `sheet-metric-temp` | 7,512 |
| `sheet-metric-valuation` | 7,614 |
| `volume-range` | 5,396 |

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
| 736 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 811 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 884 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,053 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,068 | The symptoms: a cycle's years against today |
| 1,144 | hero: yield curve |
| 1,176 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,195 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,222 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,230 | long cycle (structural layer) |
| 1,237 | indicator grid |
| 1,263 | info icon + popover (progressive disclosure for longer notes) |
| 1,277 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,360 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (105), which is what the renderers fill:

| Line | id |
|---|---|
| 1,376 | `topbar-back` |
| 1,379 | `topbar-title` |
| 1,380 | `menu-btn` |
| 1,394 | `main` |
| 1,397 | `cycle-view` |
| 1,400 | `cycle-kicker` |
| 1,403 | `cycle-dial` |
| 1,405 | `season-wheel-hub-date` |
| 1,406 | `season-wheel-hub-theme` |
| 1,407 | `season-wheel-hub-detail` |
| 1,415 | `today-analysis` |
| 1,416 | `peek-row` |
| 1,417 | `sheet-metric-temp` |
| 1,418 | `temp-timing` |
| 1,419 | `temp-chart` |
| 1,420 | `temp-rangebar` |
| 1,422 | `temp-head` |
| 1,423 | `temp-history` |
| 1,424 | `temp-hist-tooltip` |
| 1,425 | `temp-trend` |
| 1,427 | `temp-highlights` |
| 1,429 | `sheet-metric-gdp` |
| 1,430 | `gdp-timing` |
| 1,431 | `gdp-chart` |
| 1,432 | `gdp-rangebar` |
| 1,434 | `gdp-head` |
| 1,435 | `gdp-history` |
| 1,436 | `gdp-hist-tooltip` |
| 1,437 | `gdp-trend` |
| 1,439 | `gdp-highlights` |
| 1,443 | `sheet-marker-deficit` |
| 1,443 | `deficit-timing` |
| 1,445 | `sheet-metric-households` |
| 1,446 | `households-timing` |
| 1,447 | `households-chart` |
| 1,448 | `households-highlights` |
| 1,451 | `sheet-metric-valuation` |
| 1,452 | `valuation-timing` |
| 1,453 | `valuation-chart` |
| 1,454 | `valuation-highlights` |
| 1,461 | `subj-value-hormones` |
| 1,462 | `subj-say-hormones` |
| 1,468 | `hormones-history` |
| 1,469 | `hormones-insights` |
| 1,478 | `subj-value-horizon` |
| 1,479 | `subj-say-horizon` |
| 1,480 | `subj-spark-horizon` |
| 1,486 | `hzn-timeline` |
| 1,488 | `hzn-head` |
| 1,489 | `spread-history-shell` |
| 1,490 | `spread-history-svg` |
| 1,491 | `spread-history-tooltip` |
| 1,493 | `hzn-trend` |
| 1,495 | `horizon-insights` |
| 1,504 | `subj-value-pressure` |
| 1,505 | `subj-say-pressure` |
| 1,511 | `pressure-timeline` |
| 1,513 | `pressure-head` |
| 1,514 | `ylm-shell` |
| 1,515 | `ylm-svg` |
| 1,516 | `ylm-tooltip` |
| 1,518 | `ylm-trend` |
| 1,520 | `pressure-insights` |
| 1,527 | `subj-ring-sentiment` |
| 1,530 | `subj-value-sentiment` |
| 1,531 | `subj-say-sentiment` |
| 1,532 | `subj-spark-sentiment` |
| 1,538 | `fear-history` |
| 1,539 | `curve-highlights` |
| 1,545 | `signs-list` |
| 1,551 | `calendar-list` |
| 1,558 | `cycle-data` |
| 1,560 | `cycle-legend` |
| 1,561 | `cycle-list` |
| 1,562 | `cycle-more` |
| 1,563 | `cycle-more-label` |
| 1,568 | `calendar-cycle` |
| 1,588 | `search-home` |
| 1,590 | `search-input` |
| 1,592 | `search-list` |
| 1,596 | `more-menu` |
| 1,599 | `menu-back` |
| 1,613 | `sources-open` |
| 1,621 | `appearance-current` |
| 1,627 | `sheet-howto` |
| 1,670 | `sheet-book` |
| 1,701 | `seasons-kicker` |
| 1,703 | `seasons-rows` |
| 1,706 | `framework-kicker` |
| 1,709 | `framework-rows` |
| 1,719 | `sheet-appearance` |
| 1,727 | `theme-toggle` |
| 1,734 | `sheet-contact` |
| 1,743 | `contact-form` |
| 1,744 | `contact-title` |
| 1,745 | `contact-message` |
| 1,747 | `contact-hint` |
| 1,748 | `contact-send` |
| 1,754 | `sheet-sources` |
| 1,757 | `sources-back` |
| 1,762 | `asof-text` |
| 1,763 | `sources-groups` |
| 1,769 | `detail-backdrop` |
| 1,771 | `detail-modal-close` |
| 1,772 | `detail-modal-body` |

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

