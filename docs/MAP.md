# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,162 lines**, about 623 KB, roughly **177 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `fba9ab0` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,360 | the whole stylesheet, every token and rule |
| **Markup** | 1,361–1,766 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,767–8,129 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,130–8,162 | </body></html> |

Counts: **410** top-level functions, **181** top-level vars, **7** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,767_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,769 | `byId` | `function byId(` |
| 1,777 | `byIdMaybe` | `function byIdMaybe(` |
| 1,778 | `put` | `function put(` |
| 1,783 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,785_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,786 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,787 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,788 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,789 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,793 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,798_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,799 | `wheelMeta` | `var wheelMeta =` |
| 1,807 | `seasonOverride` | `var seasonOverride =` |
| 1,808 | `cycleNowNote` | `var cycleNowNote =` |
| 1,810 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,888 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,930 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,931 | `volatilityHistory` | `var volatilityHistory =` |
| 1,933 | `fiscalHistory` | `var fiscalHistory =` |
| 1,939 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,941 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,951 | `productivityHistory` | `var productivityHistory =` |
| 1,953 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |

### Live data without a render refactor

_line 1,955_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,960 | `merge` | `function merge(` |
| 1,967 | `LIVE` | `function LIVE(` |
| 1,981 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 1,984_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,986 | `paintReading` | `function paintReading(` |
| 2,003 | `repaintVolatility` | `function repaintVolatility(` |
| 2,007 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,015 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,020 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,024 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,029_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,030 | `READINGS` | `var READINGS =` |
| 2,085 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,086 | `KINDS` | `var KINDS =` |
| 2,087 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,101 | `receive` | `function receive(` |
| 2,117 | `liveAsOf` | `var liveAsOf =` |
| 2,118 | `fmtAsOf` | `function fmtAsOf(` |
| 2,123 | `applyLive` | `function applyLive(` |
| 2,136 | `shapeOk` | `function shapeOk(` |
| 2,143 | `repaintPolicy` | `function repaintPolicy(` |
| 2,149 | `GYN` | `var GYN =` |
| 2,176 | `refreshLiveData` | `function refreshLiveData(` |
| 2,194 | `fetchSiteData` | `function fetchSiteData(` |
| 2,210 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,215_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,216 | `yieldCurve` | `var yieldCurve =` |
| 2,222 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,223 | `curveAsOf` | `function curveAsOf(` |
| 2,228 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,229 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,234 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,236_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,237 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,238 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,239 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,240 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,241 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,243_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,244 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,250 | `uninvLagToday` | `var uninvLagToday =` |
| 2,255 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,261 | `gdpSrc` | `var gdpSrc =` |
| 2,264 | `labPanel` | `var labPanel =` |
| 2,293 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,294_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,301 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,302 | `productivityWord` | `function productivityWord(` |

### The deficit, year by year

_line 2,331_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,332 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,333 | `deficitHistory` | `var deficitHistory =` |
| 2,336 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,337 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,339 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,348_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,349 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,358_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,359 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,362 | `timelineSpan` | `function timelineSpan(` |
| 2,367 | `timelineFor` | `function timelineFor(` |
| 2,378 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,384_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,385 | `windowScale` | `function windowScale(` |
| 2,400 | `windowYears` | `function windowYears(` |
| 2,408 | `refName` | `function refName(` |
| 2,412 | `histReadEnsure` | `function histReadEnsure(` |
| 2,432 | `histReadFill` | `function histReadFill(` |
| 2,482 | `histAxisEnds` | `function histAxisEnds(` |
| 2,493 | `histLegend` | `function histLegend(` |
| 2,553 | `refitHistory` | `function refitHistory(` |
| 2,563 | `wireHistHover` | `function wireHistHover(` |
| 2,600 | `mWindowFrom` | `function mWindowFrom(` |
| 2,604 | `qWindowFrom` | `function qWindowFrom(` |
| 2,609 | `DEF_1983` | `var DEF_1983 =` |
| 2,610 | `defFrom` | `function defFrom(` |
| 2,615 | `deficitChart` | `function deficitChart(` |
| 2,683 | `deficitBlock` | `function deficitBlock(` |
| 2,723 | `buffettHistory` | `var buffettHistory =` |
| 2,725 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,726 | `hyDates` | `var hyDates =` |
| 2,727 | `hyOas` | `var hyOas =` |
| 2,728 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,735 | `hyAt` | `function hyAt(` |
| 2,739 | `hyLabel` | `function hyLabel(` |
| 2,740 | `hyNum` | `function hyNum(` |
| 2,741 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,749 | `hyQuarters` | `function hyQuarters(` |
| 2,757 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,759 | `capeHistory` | `var capeHistory =` |
| 2,761 | `longCycleSrc` | `var longCycleSrc =` |
| 2,777 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,791_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,792 | `sentiment` | `var sentiment =` |
| 2,808 | `valuation` | `var valuation =` |
| 2,829 | `valRow` | `function valRow(` |
| 2,834 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,837 | `coincident` | `var coincident =` |
| 2,887 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,893 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,894 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,895 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,897_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,898 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,899 | `m2vHistory` | `var m2vHistory =` |
| 2,915 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 2,967 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,009_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,010 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,011 | `DOTS` | `var DOTS =` |
| 3,013 | `headPickRow` | `function headPickRow(` |
| 3,019 | `histHead` | `function histHead(` |
| 3,034 | `headNoteIdx` | `var headNoteIdx =` |
| 3,035 | `headMenuHtml` | `function headMenuHtml(` |
| 3,060 | `headMenuFor` | `var headMenuFor =` |
| 3,061 | `headSubFor` | `var headSubFor =` |
| 3,062 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,091 | `histNote` | `function histNote(` |
| 3,092 | `meterFlagged` | `function meterFlagged(` |
| 3,099 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,122 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,136 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,149 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,154 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,168 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,182 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,201 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,232 | `desireBlock` | `function desireBlock(` |
| 3,243 | `volumeBlock` | `function volumeBlock(` |
| 3,255 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,267 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,274_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,275 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,276 | `m2Level` | `var m2Level =` |
| 3,297 | `m2Yoy` | `var m2Yoy =` |
| 3,298 | `M2_NORM` | `var M2_NORM =` |
| 3,300 | `volumeVerdict` | `function volumeVerdict(` |
| 3,308 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,309 | `unempHistory` | `var unempHistory =` |
| 3,315 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,324 | `NROU_NOW` | `var NROU_NOW =` |
| 3,325 | `unempState` | `function unempState(` |
| 3,331 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,383_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,384 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,393 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,449 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,450 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,451 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,452_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,454 | `householdsChart` | `function householdsChart(` |
| 3,504 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,557 | `GDP_NORM` | `var GDP_NORM =` |
| 3,558 | `gdpNowQ` | `var gdpNowQ =` |
| 3,559 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,581 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,632 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,677 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,685 | `velocityVerdict` | `function velocityVerdict(` |
| 3,693 | `derivePulseTag` | `function derivePulseTag(` |
| 3,699 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,731_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,732 | `seasonReading` | `var seasonReading =` |
| 3,776 | `frameworkRows` | `var frameworkRows =` |
| 3,786 | `vixRow` | `var vixRow =` |
| 3,787 | `VIX_CALM` | `var VIX_CALM =` |
| 3,788 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,792 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,799_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,800 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,809_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,810 | `calendarTodayY` | `var calendarTodayY =` |
| 3,812 | `vix3mClose` | `var vix3mClose =` |
| 3,813 | `fearCurve` | `function fearCurve(` |
| 3,818 | `curveVerdict` | `function curveVerdict(` |
| 3,823 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,832_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,833 | `modeBar` | `function modeBar(` |
| 3,840 | `pickerOpen` | `var pickerOpen =` |
| 3,841 | `cycleByName` | `function cycleByName(` |
| 3,845 | `openCycle` | `function openCycle(` |
| 3,849 | `cycleSlice` | `function cycleSlice(` |
| 3,857 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,865 | `cycleMonths` | `function cycleMonths(` |
| 3,873 | `histControls` | `function histControls(` |
| 3,882 | `pageCycle` | `function pageCycle(` |
| 3,886 | `cycLabel` | `function cycLabel(` |
| 3,890 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,895 | `cyclePicker` | `function cyclePicker(` |
| 3,914 | `rangeBar` | `function rangeBar(` |
| 3,921 | `trendOf` | `function trendOf(` |
| 3,936 | `TREND_ARROW` | `var TREND_ARROW =` |
| 3,940 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 3,951_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,952 | `yearOf` | `function yearOf(` |
| 3,953 | `mean` | `function mean(` |

### The record rows

_line 3,954_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,955 | `headSigma` | `function headSigma(` |
| 3,960 | `atQuarter` | `function atQuarter(` |
| 3,961 | `atMonth` | `function atMonth(` |
| 3,962 | `ordinal` | `function ordinal(` |
| 3,963 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 3,966_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,967 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 3,974 | `moreRow` | `function moreRow(` |
| 3,980 | `tempCaptionFull` | `var tempCaptionFull =` |
| 3,981 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 3,987_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,988 | `xLabelOf` | `function xLabelOf(` |
| 3,998 | `fitLine` | `function fitLine(` |
| 4,002 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,020_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,021 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,029 | `vGrid` | `function vGrid(` |
| 4,033 | `COL_FILL` | `var COL_FILL =` |
| 4,034 | `colPath` | `function colPath(` |
| 4,039 | `colWidth` | `function colWidth(` |
| 4,044 | `AXIS` | `var AXIS =` |
| 4,045 | `histFrame` | `function histFrame(` |
| 4,052 | `xLabel` | `function xLabel(` |
| 4,055 | `crossLine` | `function crossLine(` |
| 4,058 | `zeroRule` | `function zeroRule(` |
| 4,061 | `meanRule` | `function meanRule(` |
| 4,062 | `pendingGeom` | `var pendingGeom =` |
| 4,063 | `publishGeom` | `function publishGeom(` |
| 4,064 | `attachHistory` | `function attachHistory(` |
| 4,073 | `histBar` | `function histBar(` |
| 4,076 | `histTip` | `function histTip(` |
| 4,077 | `avgRule` | `function avgRule(` |
| 4,080 | `vhOpen` | `function vhOpen(` |
| 4,081 | `chartAxes` | `function chartAxes(` |
| 4,111 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,146_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,148 | `maxIn` | `function maxIn(` |
| 4,153 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,154 | `PEEK_W` | `var PEEK_W =` |
| 4,155 | `PEEK_H` | `var PEEK_H =` |
| 4,156 | `colPeek` | `function colPeek(` |
| 4,174 | `meterPeek` | `function meterPeek(` |
| 4,191 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,196 | `pressureZone` | `function pressureZone(` |
| 4,202 | `HZN_BACK` | `var HZN_BACK =` |
| 4,203 | `hznLast` | `function hznLast(` |
| 4,204 | `hznBack` | `function hznBack(` |
| 4,205 | `horizonWord` | `function horizonWord(` |
| 4,225 | `HZN_METERS` | `var HZN_METERS =` |
| 4,233 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,254 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,259 | `RISK_RISK` | `var RISK_RISK =` |
| 4,264 | `riskCell` | `function riskCell(` |
| 4,265 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,295 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,320_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,321 | `pulseClipN` | `var pulseClipN =` |
| 4,322 | `beatPath` | `function beatPath(` |
| 4,339 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,353 | `pulsePeek` | `function pulsePeek(` |
| 4,356 | `pulseBlock` | `function pulseBlock(` |
| 4,373 | `CHEV` | `var CHEV =` |
| 4,374 | `peekCard` | `function peekCard(` |
| 4,393 | `dropSvg` | `function dropSvg(` |
| 4,395 | `volumeSvg` | `function volumeSvg(` |
| 4,399 | `gaugeSvg` | `function gaugeSvg(` |
| 4,403 | `diamondSvg` | `function diamondSvg(` |
| 4,407 | `sproutSvg` | `function sproutSvg(` |
| 4,415 | `markSvg` | `function markSvg(` |
| 4,418 | `hormoneSvg` | `function hormoneSvg(` |
| 4,423 | `flameSvg` | `function flameSvg(` |
| 4,426 | `clockSvg` | `function clockSvg(` |
| 4,427 | `gearSvg` | `function gearSvg(` |
| 4,435 | `thermoSvg` | `function thermoSvg(` |
| 4,438 | `momentumSvg` | `function momentumSvg(` |
| 4,439 | `trendUpSvg` | `function trendUpSvg(` |
| 4,441 | `ecgSvg` | `function ecgSvg(` |
| 4,443 | `circulationSvg` | `function circulationSvg(` |
| 4,444 | `weatherSvg` | `function weatherSvg(` |
| 4,452 | `moodSvg` | `function moodSvg(` |
| 4,456 | `boltSvg` | `function boltSvg(` |
| 4,457 | `houseSvg` | `function houseSvg(` |
| 4,460 | `sunriseSvg` | `function sunriseSvg(` |
| 4,464 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,472_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,473 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,474 | `dsrHistory` | `var dsrHistory =` |
| 4,475 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,476 | `savHistory` | `var savHistory =` |
| 4,479 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,488 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,489 | `dsrNow` | `var dsrNow =` |
| 4,490 | `savNow` | `var savNow =` |
| 4,491 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,492 | `householdsWord` | `function householdsWord(` |
| 4,499 | `householdsNow` | `var householdsNow =` |
| 4,500 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,517 | `savInfoHtml` | `function savInfoHtml(` |
| 4,535 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,542 | `curveSub` | `var curveSub =` |
| 4,543 | `vixPct` | `function vixPct(` |
| 4,547 | `curveNoteFull` | `var curveNoteFull =` |
| 4,558 | `volatilityRing` | `function volatilityRing(` |
| 4,563 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,564 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,579 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,585 | `marketCycles` | `var marketCycles =` |
| 4,613 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,615_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,616 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,617 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,622_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,623 | `TIMING` | `var TIMING =` |
| 4,629 | `CATEGORIES` | `var CATEGORIES =` |
| 4,635 | `ROSTER` | `var ROSTER =` |
| 4,686 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,687 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,689 | `pageState` | `function pageState(` |
| 4,694 | `pageMode` | `var pageMode =` |
| 4,695 | `pageCycles` | `var pageCycles =` |
| 4,696 | `pageRange` | `var pageRange =` |
| 4,697 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,698 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,699 | `keyed` | `function keyed(` |
| 4,706 | `momentumMonths` | `function momentumMonths(` |
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

_line 4,868_ · 16 declarations

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

### Momentum: the S&P 500 against a year earlier

_line 4,987_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,988 | `MOMENTUM_SRC` | `var MOMENTUM_SRC =` |
| 4,994 | `momentumSeries` | `function momentumSeries(` |
| 4,999 | `momentumPct` | `function momentumPct(` |
| 5,003 | `momentumPace` | `function momentumPace(` |
| 5,004 | `momentumWindows` | `function momentumWindows(` |
| 5,008 | `momentumWord` | `function momentumWord(` |
| 5,013 | `momentumPaces` | `function momentumPaces(` |
| 5,028 | `momentumInfoHtml` | `function momentumInfoHtml(` |
| 5,044 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,055 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,056 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,057 | `spreadLabel` | `function spreadLabel(` |
| 5,061 | `policyFacts` | `function policyFacts(` |
| 5,068 | `policyFactRows` | `function policyFactRows(` |
| 5,074 | `allSources` | `var allSources =` |
| 5,088 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,100_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,101 | `SVG_NS` | `var SVG_NS =` |
| 5,102 | `svgEl` | `function svgEl(` |
| 5,107 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,141_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,142 | `clampPct` | `function clampPct(` |
| 5,145 | `detailTexts` | `var detailTexts =` |
| 5,146 | `detailSlots` | `var detailSlots =` |
| 5,147 | `detailSlot` | `function detailSlot(` |
| 5,157 | `metricSheet` | `function metricSheet(` |
| 5,162 | `ledeHtml` | `function ledeHtml(` |
| 5,163 | `facts` | `function facts(` |
| 5,164 | `factsFrom` | `function factsFrom(` |
| 5,168 | `expandBtn` | `function expandBtn(` |
| 5,172 | `sheetRenderers` | `var sheetRenderers =` |
| 5,173 | `drawsPage` | `function drawsPage(` |
| 5,174 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,203_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,206 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,207_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,208 | `subjectRow` | `function subjectRow(` |
| 5,218 | `subjectIcon` | `function subjectIcon(` |
| 5,219 | `srcHtml` | `function srcHtml(` |
| 5,220 | `timingMark` | `function timingMark(` |
| 5,228 | `timingPill` | `function timingPill(` |
| 5,237 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,245 | `seatPageFoot` | `function seatPageFoot(` |
| 5,257 | `timingMembers` | `var timingMembers =` |
| 5,259 | `registerTiming` | `function registerTiming(` |
| 5,261 | `headHtml` | `function headHtml(` |
| 5,266 | `heldHighlights` | `var heldHighlights =` |
| 5,267 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,294_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,295 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,296 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,304 | `withLatestPoint` | `function withLatestPoint(` |
| 5,309 | `pressureMaturities` | `function pressureMaturities(` |
| 5,333 | `registerFlowPages` | `function registerFlowPages(` |
| 5,387 | `renderPressureRow` | `function renderPressureRow(` |
| 5,395 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,414 | `ylmColumns` | `function ylmColumns(` |
| 5,434 | `ylmFitLine` | `function ylmFitLine(` |
| 5,446 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,587_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,588 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,625_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,626 | `spreadSeries` | `function spreadSeries(` |
| 5,670 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,796_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,797 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,823_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,824 | `drawHznHead` | `function drawHznHead(` |
| 5,838 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,897_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,898 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,906_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,907 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,004_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,005 | `renderVolatility` | `function renderVolatility(` |
| 6,050 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,080_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,081 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,111_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,112 | `totalRiseIn` | `function totalRiseIn(` |
| 6,122 | `eraInflation` | `function eraInflation(` |
| 6,133 | `eraGrowth` | `function eraGrowth(` |
| 6,149 | `fmtSigned` | `function fmtSigned(` |
| 6,150 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,151 | `growthShown` | `function growthShown(` |
| 6,152 | `growthShownCap` | `function growthShownCap(` |
| 6,153 | `phaseClass` | `function phaseClass(` |
| 6,154 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,158 | `cycleViewEl` | `var cycleViewEl =` |
| 6,159 | `shownEra` | `var shownEra =` |
| 6,160 | `calendarReset` | `var calendarReset =` |
| 6,161 | `metricPageReset` | `var metricPageReset =` |
| 6,162 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,163 | `topbarBack` | `var topbarBack =` |
| 6,164 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,171_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,172 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,253_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,254 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,272_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,273 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,294_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,296 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,297 | `hubSet` | `function hubSet(` |
| 6,308 | `quarterPopup` | `function quarterPopup(` |
| 6,331 | `hubShowDefault` | `function hubShowDefault(` |
| 6,339 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,345 | `hubShowYear` | `function hubShowYear(` |
| 6,355 | `renderCycleDial` | `function renderCycleDial(` |
| 6,436 | `m2Step` | `function m2Step(` |
| 6,439 | `heatStep` | `function heatStep(` |
| 6,443 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,454_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,455 | `renderCycleView` | `function renderCycleView(` |
| 6,461 | `shownEraModel` | `var shownEraModel =` |
| 6,462 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,464_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,465 | `stripGroupName` | `var stripGroupName =` |
| 6,466 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,494 | `marketStripHtml` | `function marketStripHtml(` |
| 6,528 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,529 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,558_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,559 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,565 | `debtSvg` | `function debtSvg(` |
| 6,566 | `interestSvg` | `function interestSvg(` |
| 6,568 | `budgetSvg` | `function budgetSvg(` |
| 6,570 | `lede` | `function lede(` |
| 6,571 | `periodOf` | `function periodOf(` |
| 6,572 | `meterWord` | `function meterWord(` |
| 6,573 | `splitPages` | `function splitPages(` |
| 6,589 | `productivityPage` | `function productivityPage(` |
| 6,594 | `momentumPage` | `function momentumPage(` |
| 6,600 | `splitSpec` | `function splitSpec(` |
| 6,606 | `splitInfo` | `function splitInfo(` |
| 6,610 | `periodTicks` | `function periodTicks(` |
| 6,616 | `periodOfSeries` | `function periodOfSeries(` |
| 6,617 | `drawSplit` | `function drawSplit(` |
| 6,634 | `mountSplit` | `function mountSplit(` |
| 6,647 | `splitPeek` | `function splitPeek(` |
| 6,654 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,662 | `deficitPeek` | `function deficitPeek(` |
| 6,666 | `catSheet` | `function catSheet(` |
| 6,671 | `groupId` | `function groupId(` |
| 6,672 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,673 | `seatGroups` | `function seatGroups(` |
| 6,676 | `groupSheet` | `function groupSheet(` |
| 6,686 | `appendPicks` | `function appendPicks(` |
| 6,694 | `doorSel` | `function doorSel(` |
| 6,695 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,707_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,708 | `buffettInsight` | `function buffettInsight(` |
| 6,723 | `debtInsight` | `function debtInsight(` |
| 6,738 | `productivityInsight` | `function productivityInsight(` |
| 6,748 | `momentumInsight` | `function momentumInsight(` |
| 6,754 | `interestInsight` | `function interestInsight(` |
| 6,769 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,792 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,812 | `activityStackHtml` | `function activityStackHtml(` |
| 6,822 | `seatTemperature` | `function seatTemperature(` |
| 6,830 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,863_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,864 | `partsOf` | `function partsOf(` |
| 6,873 | `authored` | `function authored(` |
| 6,874 | `registerRoster` | `function registerRoster(` |
| 6,896 | `indRow` | `function indRow(` |
| 6,900 | `IND_ORDER` | `var IND_ORDER =` |
| 6,901 | `indGroupRow` | `function indGroupRow(` |
| 6,906 | `indRows` | `function indRows(` |
| 6,920 | `indCategoryHtml` | `function indCategoryHtml(` |
| 6,928 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 6,930_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,931 | `NAV` | `var NAV =` |
| 6,932 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,026_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,027 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,074_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,075 | `qPretty` | `function qPretty(` |
| 7,076 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,077 | `peekArt` | `function peekArt(` |
| 7,078 | `indPeriod` | `function indPeriod(` |
| 7,082 | `catItem` | `function catItem(` |
| 7,132 | `insightCirculation` | `function insightCirculation(` |
| 7,165 | `insightWeather` | `function insightWeather(` |
| 7,208 | `PAIR_ART` | `var PAIR_ART =` |
| 7,214 | `placeSignPair` | `function placeSignPair(` |
| 7,237 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,253 | `buildCategories` | `function buildCategories(` |
| 7,269 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,307_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,308 | `capeFmt1` | `function capeFmt1(` |
| 7,309 | `actCycleMonths` | `function actCycleMonths(` |
| 7,317 | `householdsHighlights` | `function householdsHighlights(` |
| 7,336 | `redrawSheet` | `function redrawSheet(` |
| 7,340 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,385 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,422 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,469 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,499 | `valuationHighlights` | `function valuationHighlights(` |
| 7,512 | `tempHighlights` | `function tempHighlights(` |
| 7,529 | `gdpHighlights` | `function gdpHighlights(` |
| 7,544 | `renderMetricPages` | `function renderMetricPages(` |
| 7,554 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,564_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,565 | `FEELING_RULES` | `var FEELING_RULES =` |
| 7,574 | `FEELING_STATE` | `var FEELING_STATE =` |
| 7,575 | `POSTURE_STATE` | `var POSTURE_STATE =` |
| 7,576 | `POSTURE_SAYS` | `var POSTURE_SAYS =` |
| 7,583 | `BODY_SAYS` | `var BODY_SAYS =` |
| 7,591 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,596 | `todayFace` | `function todayFace(` |
| 7,602 | `readDoor` | `function readDoor(` |
| 7,610 | `pct` | `function pct(` |
| 7,611 | `rosterRows` | `function rosterRows(` |
| 7,612 | `eraMove` | `function eraMove(` |
| 7,620 | `analysisFor` | `function analysisFor(` |
| 7,628 | `dxRow` | `function dxRow(` |
| 7,632 | `dxSection` | `function dxSection(` |
| 7,633 | `systemHtml` | `function systemHtml(` |
| 7,636 | `dxHead` | `function dxHead(` |
| 7,641 | `postureLine` | `function postureLine(` |
| 7,645 | `diagnosisInfo` | `function diagnosisInfo(` |
| 7,653 | `assessmentFor` | `function assessmentFor(` |
| 7,663 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,678 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,682 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,683 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,696_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,697 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,698 | `cycleDataOn` | `function cycleDataOn(` |
| 7,699 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,719 | `wireCycleData` | `function wireCycleData(` |
| 7,734 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,779_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,780 | `eraOpen` | `var eraOpen =` |
| 7,781 | `kT` | `function kT(` |
| 7,785 | `upTo` | `function upTo(` |
| 7,786 | `pairAt` | `function pairAt(` |
| 7,787 | `eraReading` | `function eraReading(` |
| 7,797 | `eraFig` | `function eraFig(` |
| 7,804 | `eraValue` | `function eraValue(` |
| 7,810 | `eraRange` | `function eraRange(` |
| 7,815 | `eraMini` | `function eraMini(` |
| 7,820 | `eraCard` | `function eraCard(` |
| 7,839 | `eraShow` | `function eraShow(` |
| 7,848 | `enterEra` | `function enterEra(` |
| 7,855 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,862_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,863 | `rosterRow` | `function rosterRow(` |
| 7,876 | `__roster` | `var __roster =` |
| 7,877 | `readingRoster` | `function readingRoster(` |
| 7,884 | `withUnit` | `function withUnit(` |
| 7,885 | `pastFigure` | `function pastFigure(` |
| 7,889 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 7,891_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,892 | `cycleSymptoms` | `function cycleSymptoms(` |
| 7,916 | `placeWords` | `function placeWords(` |
| 7,920 | `symptomNote` | `function symptomNote(` |
| 7,927 | `symptomRow` | `function symptomRow(` |
| 7,934 | `cycleTrack` | `function cycleTrack(` |
| 7,949 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 7,957_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,958 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,007_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,008 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,039_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,040 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **7 compute a value**, 7 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,956–1,959 | `LIVE_CACHE` | Live data without a render refactor |
| 2,296–2,300 | `productivityRecord` | Productivity growth is not in this panel |
| 2,313–4,224 | `productivityReading` | Productivity growth is not in this panel |
| 4,211–4,224 | `horizonRead` | A series' highest reading within a span |
| 4,778–4,791 | `seasonTrackAll` | The season, computed |
| 4,793–4,797 | `regimeByQ` | The season, computed |
| 5,018–? | `momentumReading` | Momentum: the S&P 500 against a year earlier |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,404 |
| `pressure-range` | 2,022 |
| `sheet-marker-deficit` | 7,401 |
| `sheet-metric-gdp` | 7,365 |
| `sheet-metric-households` | 7,423 |
| `sheet-metric-temp` | 7,341 |
| `sheet-metric-valuation` | 7,443 |
| `sheet-sign-activity` | 7,386 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,408 |
| `desire-range` | 5,369 |
| `fear-range` | 6,013 |
| `hzn-range` | 5,846 |
| `pressure-range` | 5,550 |
| `pulse-range` | 5,337 |
| `sheet-metric-gdp` | 7,366 |
| `sheet-metric-temp` | 7,342 |
| `sheet-metric-valuation` | 7,444 |
| `volume-range` | 5,353 |

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
| 737 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 812 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 885 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,043 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,058 | The symptoms: a cycle's years against today |
| 1,135 | hero: yield curve |
| 1,167 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,186 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,211 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,219 | long cycle (structural layer) |
| 1,226 | indicator grid |
| 1,252 | info icon + popover (progressive disclosure for longer notes) |
| 1,266 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,349 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (105), which is what the renderers fill:

| Line | id |
|---|---|
| 1,365 | `topbar-back` |
| 1,368 | `topbar-title` |
| 1,369 | `menu-btn` |
| 1,383 | `main` |
| 1,386 | `cycle-view` |
| 1,389 | `cycle-kicker` |
| 1,392 | `cycle-dial` |
| 1,394 | `season-wheel-hub-date` |
| 1,395 | `season-wheel-hub-theme` |
| 1,396 | `season-wheel-hub-detail` |
| 1,404 | `today-analysis` |
| 1,405 | `peek-row` |
| 1,406 | `sheet-metric-temp` |
| 1,407 | `temp-timing` |
| 1,408 | `temp-chart` |
| 1,409 | `temp-rangebar` |
| 1,411 | `temp-head` |
| 1,412 | `temp-history` |
| 1,413 | `temp-hist-tooltip` |
| 1,414 | `temp-trend` |
| 1,416 | `temp-highlights` |
| 1,418 | `sheet-metric-gdp` |
| 1,419 | `gdp-timing` |
| 1,420 | `gdp-chart` |
| 1,421 | `gdp-rangebar` |
| 1,423 | `gdp-head` |
| 1,424 | `gdp-history` |
| 1,425 | `gdp-hist-tooltip` |
| 1,426 | `gdp-trend` |
| 1,428 | `gdp-highlights` |
| 1,432 | `sheet-marker-deficit` |
| 1,432 | `deficit-timing` |
| 1,434 | `sheet-metric-households` |
| 1,435 | `households-timing` |
| 1,436 | `households-chart` |
| 1,437 | `households-highlights` |
| 1,440 | `sheet-metric-valuation` |
| 1,441 | `valuation-timing` |
| 1,442 | `valuation-chart` |
| 1,443 | `valuation-highlights` |
| 1,450 | `subj-value-hormones` |
| 1,451 | `subj-say-hormones` |
| 1,457 | `hormones-history` |
| 1,458 | `hormones-insights` |
| 1,467 | `subj-value-horizon` |
| 1,468 | `subj-say-horizon` |
| 1,469 | `subj-spark-horizon` |
| 1,475 | `hzn-timeline` |
| 1,477 | `hzn-head` |
| 1,478 | `spread-history-shell` |
| 1,479 | `spread-history-svg` |
| 1,480 | `spread-history-tooltip` |
| 1,482 | `hzn-trend` |
| 1,484 | `horizon-insights` |
| 1,493 | `subj-value-pressure` |
| 1,494 | `subj-say-pressure` |
| 1,500 | `pressure-timeline` |
| 1,502 | `pressure-head` |
| 1,503 | `ylm-shell` |
| 1,504 | `ylm-svg` |
| 1,505 | `ylm-tooltip` |
| 1,507 | `ylm-trend` |
| 1,509 | `pressure-insights` |
| 1,516 | `subj-ring-sentiment` |
| 1,519 | `subj-value-sentiment` |
| 1,520 | `subj-say-sentiment` |
| 1,521 | `subj-spark-sentiment` |
| 1,527 | `fear-history` |
| 1,528 | `curve-highlights` |
| 1,534 | `signs-list` |
| 1,540 | `calendar-list` |
| 1,547 | `cycle-data` |
| 1,549 | `cycle-legend` |
| 1,550 | `cycle-list` |
| 1,551 | `cycle-more` |
| 1,552 | `cycle-more-label` |
| 1,557 | `calendar-cycle` |
| 1,577 | `search-home` |
| 1,579 | `search-input` |
| 1,581 | `search-list` |
| 1,585 | `more-menu` |
| 1,588 | `menu-back` |
| 1,602 | `sources-open` |
| 1,610 | `appearance-current` |
| 1,616 | `sheet-howto` |
| 1,659 | `sheet-book` |
| 1,690 | `seasons-kicker` |
| 1,692 | `seasons-rows` |
| 1,695 | `framework-kicker` |
| 1,698 | `framework-rows` |
| 1,708 | `sheet-appearance` |
| 1,716 | `theme-toggle` |
| 1,723 | `sheet-contact` |
| 1,732 | `contact-form` |
| 1,733 | `contact-title` |
| 1,734 | `contact-message` |
| 1,736 | `contact-hint` |
| 1,737 | `contact-send` |
| 1,743 | `sheet-sources` |
| 1,746 | `sources-back` |
| 1,751 | `asof-text` |
| 1,752 | `sources-groups` |
| 1,758 | `detail-backdrop` |
| 1,760 | `detail-modal-close` |
| 1,761 | `detail-modal-body` |

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

