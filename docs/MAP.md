# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,100 lines**, about 618 KB, roughly **175 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `da0c79d` on 2026-10-01.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,360 | the whole stylesheet, every token and rule |
| **Markup** | 1,361–1,766 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,767–8,067 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,068–8,100 | </body></html> |

Counts: **398** top-level functions, **180** top-level vars, **6** top-level IIFEs in the script.

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
| 2,969 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,010_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,011 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,012 | `DOTS` | `var DOTS =` |
| 3,014 | `headPickRow` | `function headPickRow(` |
| 3,020 | `histHead` | `function histHead(` |
| 3,035 | `headNoteIdx` | `var headNoteIdx =` |
| 3,036 | `headMenuHtml` | `function headMenuHtml(` |
| 3,061 | `headMenuFor` | `var headMenuFor =` |
| 3,062 | `headSubFor` | `var headSubFor =` |
| 3,063 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,092 | `histNote` | `function histNote(` |
| 3,093 | `meterFlagged` | `function meterFlagged(` |
| 3,100 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,123 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,137 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,150 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,155 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,169 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,183 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,202 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,233 | `desireBlock` | `function desireBlock(` |
| 3,244 | `volumeBlock` | `function volumeBlock(` |
| 3,256 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,268 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,275_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,276 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,277 | `m2Level` | `var m2Level =` |
| 3,298 | `m2Yoy` | `var m2Yoy =` |
| 3,299 | `M2_NORM` | `var M2_NORM =` |
| 3,301 | `volumeVerdict` | `function volumeVerdict(` |
| 3,309 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,310 | `unempHistory` | `var unempHistory =` |
| 3,316 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,325 | `NROU_NOW` | `var NROU_NOW =` |
| 3,326 | `unempState` | `function unempState(` |
| 3,332 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,386_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,387 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,396 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,454 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,455 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,456 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,457_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,459 | `householdsChart` | `function householdsChart(` |
| 3,508 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,563 | `GDP_NORM` | `var GDP_NORM =` |
| 3,564 | `gdpNowQ` | `var gdpNowQ =` |
| 3,565 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,587 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,640 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,687 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,695 | `velocityVerdict` | `function velocityVerdict(` |
| 3,703 | `derivePulseTag` | `function derivePulseTag(` |
| 3,709 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,741_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,742 | `seasonReading` | `var seasonReading =` |
| 3,786 | `frameworkRows` | `var frameworkRows =` |
| 3,796 | `vixRow` | `var vixRow =` |
| 3,797 | `VIX_CALM` | `var VIX_CALM =` |
| 3,798 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,802 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,809_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,810 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,819_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,820 | `calendarTodayY` | `var calendarTodayY =` |
| 3,822 | `vix3mClose` | `var vix3mClose =` |
| 3,823 | `fearCurve` | `function fearCurve(` |
| 3,828 | `curveVerdict` | `function curveVerdict(` |
| 3,833 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,842_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,843 | `modeBar` | `function modeBar(` |
| 3,850 | `pickerOpen` | `var pickerOpen =` |
| 3,851 | `cycleByName` | `function cycleByName(` |
| 3,855 | `openCycle` | `function openCycle(` |
| 3,859 | `cycleSlice` | `function cycleSlice(` |
| 3,867 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,875 | `cycleMonths` | `function cycleMonths(` |
| 3,883 | `histControls` | `function histControls(` |
| 3,892 | `pageCycle` | `function pageCycle(` |
| 3,896 | `cycLabel` | `function cycLabel(` |
| 3,900 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,905 | `cyclePicker` | `function cyclePicker(` |
| 3,924 | `rangeBar` | `function rangeBar(` |
| 3,931 | `trendOf` | `function trendOf(` |
| 3,946 | `TREND_ARROW` | `var TREND_ARROW =` |
| 3,950 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 3,961_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,962 | `yearOf` | `function yearOf(` |
| 3,963 | `mean` | `function mean(` |

### The record rows

_line 3,964_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,965 | `headSigma` | `function headSigma(` |
| 3,970 | `atQuarter` | `function atQuarter(` |
| 3,971 | `atMonth` | `function atMonth(` |
| 3,972 | `ordinal` | `function ordinal(` |
| 3,973 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 3,976_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,977 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 3,984 | `moreRow` | `function moreRow(` |
| 3,990 | `tempCaptionFull` | `var tempCaptionFull =` |
| 3,991 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 3,997_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,998 | `xLabelOf` | `function xLabelOf(` |
| 4,008 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,026_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,027 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,035 | `vGrid` | `function vGrid(` |
| 4,039 | `COL_FILL` | `var COL_FILL =` |
| 4,040 | `colPath` | `function colPath(` |
| 4,045 | `colWidth` | `function colWidth(` |
| 4,050 | `AXIS` | `var AXIS =` |
| 4,051 | `histFrame` | `function histFrame(` |
| 4,058 | `xLabel` | `function xLabel(` |
| 4,061 | `crossLine` | `function crossLine(` |
| 4,064 | `zeroRule` | `function zeroRule(` |
| 4,067 | `meanRule` | `function meanRule(` |
| 4,068 | `pendingGeom` | `var pendingGeom =` |
| 4,069 | `publishGeom` | `function publishGeom(` |
| 4,070 | `attachHistory` | `function attachHistory(` |
| 4,079 | `histBar` | `function histBar(` |
| 4,082 | `histTip` | `function histTip(` |
| 4,083 | `avgRule` | `function avgRule(` |
| 4,086 | `vhOpen` | `function vhOpen(` |
| 4,087 | `chartAxes` | `function chartAxes(` |
| 4,117 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,152_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,154 | `maxIn` | `function maxIn(` |
| 4,159 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,160 | `PEEK_W` | `var PEEK_W =` |
| 4,161 | `PEEK_H` | `var PEEK_H =` |
| 4,162 | `colPeek` | `function colPeek(` |
| 4,180 | `meterPeek` | `function meterPeek(` |
| 4,197 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,202 | `pressureZone` | `function pressureZone(` |
| 4,208 | `HZN_BACK` | `var HZN_BACK =` |
| 4,209 | `hznLast` | `function hznLast(` |
| 4,210 | `hznBack` | `function hznBack(` |
| 4,211 | `horizonWord` | `function horizonWord(` |
| 4,231 | `HZN_METERS` | `var HZN_METERS =` |
| 4,239 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,260 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,265 | `RISK_RISK` | `var RISK_RISK =` |
| 4,270 | `riskCell` | `function riskCell(` |
| 4,271 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,301 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,326_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,327 | `pulseClipN` | `var pulseClipN =` |
| 4,328 | `beatPath` | `function beatPath(` |
| 4,345 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,359 | `pulsePeek` | `function pulsePeek(` |
| 4,362 | `pulseBlock` | `function pulseBlock(` |
| 4,379 | `CHEV` | `var CHEV =` |
| 4,380 | `peekCard` | `function peekCard(` |
| 4,399 | `dropSvg` | `function dropSvg(` |
| 4,401 | `volumeSvg` | `function volumeSvg(` |
| 4,405 | `gaugeSvg` | `function gaugeSvg(` |
| 4,409 | `diamondSvg` | `function diamondSvg(` |
| 4,413 | `sproutSvg` | `function sproutSvg(` |
| 4,421 | `markSvg` | `function markSvg(` |
| 4,424 | `hormoneSvg` | `function hormoneSvg(` |
| 4,429 | `flameSvg` | `function flameSvg(` |
| 4,432 | `clockSvg` | `function clockSvg(` |
| 4,433 | `gearSvg` | `function gearSvg(` |
| 4,441 | `thermoSvg` | `function thermoSvg(` |
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

_line 4,627_ · 22 declarations

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
| 4,721 | `indOf` | `function indOf(` |
| 4,722 | `peekOf` | `function peekOf(` |
| 4,727 | `cardDate` | `function cardDate(` |
| 4,728 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,749_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,750 | `slopeOf` | `function slopeOf(` |
| 4,755 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,756 | `readSeason` | `function readSeason(` |
| 4,775 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,776 | `qLabel` | `function qLabel(` |
| 4,797 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,799_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,800 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,801 | `seasonTitle` | `function seasonTitle(` |
| 4,802 | `monthLabel` | `function monthLabel(` |
| 4,803 | `cycleReturns` | `function cycleReturns(` |
| 4,813 | `cycleModel` | `function cycleModel(` |
| 4,844 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,852 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,858 | `nowModel` | `var nowModel =` |
| 4,859 | `readingNow` | `var readingNow =` |
| 4,860 | `cpiNow` | `var cpiNow =` |
| 4,861 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,862 | `currentSeason` | `var currentSeason =` |
| 4,863 | `seasonWhy` | `var seasonWhy =` |
| 4,865 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,867_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,868 | `CALM` | `var CALM =` |
| 4,869 | `FEELINGS` | `var FEELINGS =` |
| 4,870 | `seasonHalf` | `function seasonHalf(` |
| 4,871 | `rankToDate` | `function rankToDate(` |
| 4,875 | `readFeeling` | `function readFeeling(` |
| 4,886 | `readPosture` | `function readPosture(` |
| 4,894 | `marketCache` | `var marketCache =` |
| 4,895 | `marketMonths` | `function marketMonths(` |
| 4,915 | `seasonInMonth` | `function seasonInMonth(` |
| 4,920 | `stretchRank` | `function stretchRank(` |
| 4,923 | `marketFacts` | `function marketFacts(` |
| 4,934 | `followedCache` | `var followedCache =` |
| 4,935 | `whatFollowed` | `function whatFollowed(` |
| 4,957 | `lastFeeling` | `function lastFeeling(` |
| 4,962 | `diagnoseClose` | `function diagnoseClose(` |
| 4,970 | `diagnoseToday` | `function diagnoseToday(` |
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

_line 5,737_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,738 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,764_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,765 | `drawHznHead` | `function drawHznHead(` |
| 5,779 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,838_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,839 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,847_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,848 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 5,945_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,946 | `renderVolatility` | `function renderVolatility(` |
| 5,991 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,021_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,022 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,052_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,053 | `totalRiseIn` | `function totalRiseIn(` |
| 6,063 | `eraInflation` | `function eraInflation(` |
| 6,074 | `eraGrowth` | `function eraGrowth(` |
| 6,090 | `fmtSigned` | `function fmtSigned(` |
| 6,091 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,092 | `growthShown` | `function growthShown(` |
| 6,093 | `growthShownCap` | `function growthShownCap(` |
| 6,094 | `phaseClass` | `function phaseClass(` |
| 6,095 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,099 | `cycleViewEl` | `var cycleViewEl =` |
| 6,100 | `shownEra` | `var shownEra =` |
| 6,101 | `calendarReset` | `var calendarReset =` |
| 6,102 | `metricPageReset` | `var metricPageReset =` |
| 6,103 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,104 | `topbarBack` | `var topbarBack =` |
| 6,105 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,112_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,113 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,194_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,195 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,213_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,214 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,235_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,237 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,238 | `hubSet` | `function hubSet(` |
| 6,249 | `quarterPopup` | `function quarterPopup(` |
| 6,272 | `hubShowDefault` | `function hubShowDefault(` |
| 6,280 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,286 | `hubShowYear` | `function hubShowYear(` |
| 6,296 | `renderCycleDial` | `function renderCycleDial(` |
| 6,377 | `m2Step` | `function m2Step(` |
| 6,380 | `heatStep` | `function heatStep(` |
| 6,384 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,395_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,396 | `renderCycleView` | `function renderCycleView(` |
| 6,402 | `shownEraModel` | `var shownEraModel =` |
| 6,403 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,405_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,406 | `stripGroupName` | `var stripGroupName =` |
| 6,407 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,435 | `marketStripHtml` | `function marketStripHtml(` |
| 6,469 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,470 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,499_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,500 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,506 | `debtSvg` | `function debtSvg(` |
| 6,507 | `interestSvg` | `function interestSvg(` |
| 6,509 | `budgetSvg` | `function budgetSvg(` |
| 6,511 | `lede` | `function lede(` |
| 6,512 | `periodOf` | `function periodOf(` |
| 6,513 | `meterWord` | `function meterWord(` |
| 6,514 | `splitPages` | `function splitPages(` |
| 6,530 | `splitSpec` | `function splitSpec(` |
| 6,536 | `splitInfo` | `function splitInfo(` |
| 6,540 | `quarterTicks` | `function quarterTicks(` |
| 6,545 | `drawSplit` | `function drawSplit(` |
| 6,562 | `mountSplit` | `function mountSplit(` |
| 6,575 | `splitPeek` | `function splitPeek(` |
| 6,582 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,590 | `deficitPeek` | `function deficitPeek(` |
| 6,594 | `catSheet` | `function catSheet(` |
| 6,599 | `groupId` | `function groupId(` |
| 6,600 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,601 | `seatGroups` | `function seatGroups(` |
| 6,604 | `groupSheet` | `function groupSheet(` |
| 6,614 | `appendPicks` | `function appendPicks(` |
| 6,622 | `doorSel` | `function doorSel(` |
| 6,623 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,635_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,636 | `buffettInsight` | `function buffettInsight(` |
| 6,651 | `debtInsight` | `function debtInsight(` |
| 6,666 | `productivityInsight` | `function productivityInsight(` |
| 6,676 | `interestInsight` | `function interestInsight(` |
| 6,691 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,714 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,734 | `activityStackHtml` | `function activityStackHtml(` |
| 6,744 | `seatTemperature` | `function seatTemperature(` |
| 6,752 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,785_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,786 | `partsOf` | `function partsOf(` |
| 6,795 | `authored` | `function authored(` |
| 6,796 | `registerRoster` | `function registerRoster(` |
| 6,818 | `indRow` | `function indRow(` |
| 6,822 | `IND_ORDER` | `var IND_ORDER =` |
| 6,823 | `indGroupRow` | `function indGroupRow(` |
| 6,828 | `indRows` | `function indRows(` |
| 6,842 | `indCategoryHtml` | `function indCategoryHtml(` |
| 6,850 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 6,852_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,853 | `NAV` | `var NAV =` |
| 6,854 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 6,948_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,949 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 6,996_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,997 | `qPretty` | `function qPretty(` |
| 6,998 | `DATED_UNIT` | `var DATED_UNIT =` |
| 6,999 | `peekArt` | `function peekArt(` |
| 7,000 | `indPeriod` | `function indPeriod(` |
| 7,004 | `catItem` | `function catItem(` |
| 7,054 | `insightCirculation` | `function insightCirculation(` |
| 7,087 | `insightWeather` | `function insightWeather(` |
| 7,130 | `PAIR_ART` | `var PAIR_ART =` |
| 7,136 | `placeSignPair` | `function placeSignPair(` |
| 7,159 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,175 | `buildCategories` | `function buildCategories(` |
| 7,191 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,229_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,230 | `capeFmt1` | `function capeFmt1(` |
| 7,231 | `actCycleMonths` | `function actCycleMonths(` |
| 7,239 | `householdsHighlights` | `function householdsHighlights(` |
| 7,258 | `redrawSheet` | `function redrawSheet(` |
| 7,262 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,307 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,344 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,391 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,421 | `valuationHighlights` | `function valuationHighlights(` |
| 7,434 | `tempHighlights` | `function tempHighlights(` |
| 7,451 | `gdpHighlights` | `function gdpHighlights(` |
| 7,466 | `renderMetricPages` | `function renderMetricPages(` |
| 7,476 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,486_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,487 | `FEELING_RULES` | `var FEELING_RULES =` |
| 7,496 | `FEELING_STATE` | `var FEELING_STATE =` |
| 7,497 | `POSTURE_STATE` | `var POSTURE_STATE =` |
| 7,498 | `POSTURE_SAYS` | `var POSTURE_SAYS =` |
| 7,505 | `BODY_SAYS` | `var BODY_SAYS =` |
| 7,513 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,518 | `todayFace` | `function todayFace(` |
| 7,524 | `readDoor` | `function readDoor(` |
| 7,532 | `pct` | `function pct(` |
| 7,533 | `symptom` | `function symptom(` |
| 7,534 | `momentumSymptom` | `function momentumSymptom(` |
| 7,538 | `symptomsFor` | `function symptomsFor(` |
| 7,546 | `rosterRows` | `function rosterRows(` |
| 7,547 | `eraMove` | `function eraMove(` |
| 7,555 | `analysisFor` | `function analysisFor(` |
| 7,563 | `dxRow` | `function dxRow(` |
| 7,567 | `dxSection` | `function dxSection(` |
| 7,568 | `systemHtml` | `function systemHtml(` |
| 7,571 | `dxHead` | `function dxHead(` |
| 7,576 | `postureLine` | `function postureLine(` |
| 7,580 | `diagnosisInfo` | `function diagnosisInfo(` |
| 7,588 | `assessmentFor` | `function assessmentFor(` |
| 7,598 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,616 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,620 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,621 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,634_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,635 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,636 | `cycleDataOn` | `function cycleDataOn(` |
| 7,637 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,657 | `wireCycleData` | `function wireCycleData(` |
| 7,672 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,717_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,718 | `eraOpen` | `var eraOpen =` |
| 7,719 | `kT` | `function kT(` |
| 7,723 | `upTo` | `function upTo(` |
| 7,724 | `pairAt` | `function pairAt(` |
| 7,725 | `eraReading` | `function eraReading(` |
| 7,735 | `eraFig` | `function eraFig(` |
| 7,742 | `eraValue` | `function eraValue(` |
| 7,748 | `eraRange` | `function eraRange(` |
| 7,753 | `eraMini` | `function eraMini(` |
| 7,758 | `eraCard` | `function eraCard(` |
| 7,777 | `eraShow` | `function eraShow(` |
| 7,786 | `enterEra` | `function enterEra(` |
| 7,793 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,800_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,801 | `rosterRow` | `function rosterRow(` |
| 7,814 | `__roster` | `var __roster =` |
| 7,815 | `readingRoster` | `function readingRoster(` |
| 7,822 | `withUnit` | `function withUnit(` |
| 7,823 | `pastFigure` | `function pastFigure(` |
| 7,827 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 7,829_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,830 | `cycleSymptoms` | `function cycleSymptoms(` |
| 7,854 | `placeWords` | `function placeWords(` |
| 7,858 | `symptomNote` | `function symptomNote(` |
| 7,865 | `symptomRow` | `function symptomRow(` |
| 7,872 | `cycleTrack` | `function cycleTrack(` |
| 7,887 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 7,895_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,896 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 7,945_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,946 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 7,977_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,978 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **6 compute a value**, 6 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,956–1,959 | `LIVE_CACHE` | Live data without a render refactor |
| 2,296–2,300 | `productivityRecord` | Productivity growth is not in this panel |
| 2,313–4,230 | `productivityReading` | Productivity growth is not in this panel |
| 4,217–4,230 | `horizonRead` | A series' highest reading within a span |
| 4,777–4,790 | `seasonTrackAll` | The season, computed |
| 4,792–4,796 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,326 |
| `pressure-range` | 2,022 |
| `sheet-marker-deficit` | 7,323 |
| `sheet-metric-gdp` | 7,287 |
| `sheet-metric-households` | 7,345 |
| `sheet-metric-temp` | 7,263 |
| `sheet-metric-valuation` | 7,365 |
| `sheet-sign-activity` | 7,308 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,330 |
| `desire-range` | 5,312 |
| `fear-range` | 5,954 |
| `hzn-range` | 5,787 |
| `pressure-range` | 5,493 |
| `pulse-range` | 5,280 |
| `sheet-metric-gdp` | 7,288 |
| `sheet-metric-temp` | 7,264 |
| `sheet-metric-valuation` | 7,366 |
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

