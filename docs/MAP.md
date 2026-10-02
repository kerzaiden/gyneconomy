# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,231 lines**, about 661 KB, roughly **188 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `f58b8b4` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,372 | the whole stylesheet, every token and rule |
| **Markup** | 1,373–1,756 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,757–8,198 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,199–8,231 | </body></html> |

Counts: **433** top-level functions, **188** top-level vars, **9** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,757_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,759 | `byId` | `function byId(` |
| 1,767 | `byIdMaybe` | `function byIdMaybe(` |
| 1,768 | `put` | `function put(` |
| 1,773 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,775_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,776 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,777 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,778 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,779 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,783 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,788_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,789 | `wheelMeta` | `var wheelMeta =` |
| 1,797 | `seasonOverride` | `var seasonOverride =` |
| 1,798 | `cycleNowNote` | `var cycleNowNote =` |
| 1,800 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,878 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,920 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,921 | `volatilityHistory` | `var volatilityHistory =` |
| 1,923 | `fiscalHistory` | `var fiscalHistory =` |
| 1,929 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,931 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,941 | `productivityHistory` | `var productivityHistory =` |
| 1,943 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |
| 1,945 | `confidenceHistory` | `var confidenceHistory =` |
| 1,947 | `gdpYoYBefore` | `var gdpYoYBefore =` |
| 1,948 | `cpiYoYBefore` | `var cpiYoYBefore =` |
| 1,949 | `sp500ReturnsBefore` | `var sp500ReturnsBefore =` |

### Live data without a render refactor

_line 1,951_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,958 | `merge` | `function merge(` |
| 1,965 | `LIVE` | `function LIVE(` |
| 1,979 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 1,982_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,984 | `paintReading` | `function paintReading(` |
| 2,001 | `repaintVolatility` | `function repaintVolatility(` |
| 2,005 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,010 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,014 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,019_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,020 | `READINGS` | `var READINGS =` |
| 2,075 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,076 | `KINDS` | `var KINDS =` |
| 2,077 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,091 | `receive` | `function receive(` |
| 2,107 | `liveAsOf` | `var liveAsOf =` |
| 2,108 | `fmtAsOf` | `function fmtAsOf(` |
| 2,113 | `applyLive` | `function applyLive(` |
| 2,126 | `shapeOk` | `function shapeOk(` |
| 2,133 | `repaintPolicy` | `function repaintPolicy(` |
| 2,139 | `GYN` | `var GYN =` |
| 2,166 | `refreshLiveData` | `function refreshLiveData(` |
| 2,184 | `fetchSiteData` | `function fetchSiteData(` |
| 2,200 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,205_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,206 | `yieldCurve` | `var yieldCurve =` |
| 2,212 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,213 | `curveAsOf` | `function curveAsOf(` |
| 2,218 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,219 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,224 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,226_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,227 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,228 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,229 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,230 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,231 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,233_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,234 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,240 | `uninvLagToday` | `var uninvLagToday =` |
| 2,245 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,251 | `gdpSrc` | `var gdpSrc =` |
| 2,254 | `labPanel` | `var labPanel =` |
| 2,283 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,284_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,291 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,292 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,319_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,320 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,326 | `confidenceWord` | `function confidenceWord(` |

### The deficit, year by year

_line 2,353_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,354 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,355 | `deficitHistory` | `var deficitHistory =` |
| 2,358 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,359 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,361 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,370_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,371 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,380_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,381 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,384 | `timelineSpan` | `function timelineSpan(` |
| 2,389 | `timelineFor` | `function timelineFor(` |
| 2,400 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,406_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,407 | `windowScale` | `function windowScale(` |
| 2,422 | `windowYears` | `function windowYears(` |
| 2,430 | `refName` | `function refName(` |
| 2,434 | `histReadEnsure` | `function histReadEnsure(` |
| 2,454 | `histReadFill` | `function histReadFill(` |
| 2,504 | `histAxisEnds` | `function histAxisEnds(` |
| 2,515 | `histLegend` | `function histLegend(` |
| 2,575 | `refitHistory` | `function refitHistory(` |
| 2,585 | `wireHistHover` | `function wireHistHover(` |
| 2,622 | `mWindowFrom` | `function mWindowFrom(` |
| 2,626 | `qWindowFrom` | `function qWindowFrom(` |
| 2,631 | `DEF_1983` | `var DEF_1983 =` |
| 2,632 | `defFrom` | `function defFrom(` |
| 2,637 | `deficitChart` | `function deficitChart(` |
| 2,705 | `deficitBlock` | `function deficitBlock(` |
| 2,745 | `buffettHistory` | `var buffettHistory =` |
| 2,747 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,748 | `hyDates` | `var hyDates =` |
| 2,749 | `hyOas` | `var hyOas =` |
| 2,750 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,757 | `hyAt` | `function hyAt(` |
| 2,761 | `hyLabel` | `function hyLabel(` |
| 2,762 | `hyNum` | `function hyNum(` |
| 2,763 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,771 | `hyQuarters` | `function hyQuarters(` |
| 2,779 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,781 | `capeHistory` | `var capeHistory =` |
| 2,783 | `longCycleSrc` | `var longCycleSrc =` |
| 2,799 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,813_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,814 | `sentiment` | `var sentiment =` |
| 2,830 | `valuation` | `var valuation =` |
| 2,851 | `valRow` | `function valRow(` |
| 2,856 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,859 | `coincident` | `var coincident =` |
| 2,899 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,905 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,906 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,907 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,909_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,910 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,911 | `m2vHistory` | `var m2vHistory =` |
| 2,927 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 2,979 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,021_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,022 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,023 | `DOTS` | `var DOTS =` |
| 3,025 | `headPickRow` | `function headPickRow(` |
| 3,031 | `histHead` | `function histHead(` |
| 3,046 | `headNoteIdx` | `var headNoteIdx =` |
| 3,047 | `headMenuHtml` | `function headMenuHtml(` |
| 3,072 | `headMenuFor` | `var headMenuFor =` |
| 3,073 | `headSubFor` | `var headSubFor =` |
| 3,074 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,103 | `histNote` | `function histNote(` |
| 3,104 | `meterFlagged` | `function meterFlagged(` |
| 3,111 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,134 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,148 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,161 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,166 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,170 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,182 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,196 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,215 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,246 | `desireBlock` | `function desireBlock(` |
| 3,257 | `volumeBlock` | `function volumeBlock(` |
| 3,269 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,281 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,288_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,289 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,290 | `m2Level` | `var m2Level =` |
| 3,311 | `m2Yoy` | `var m2Yoy =` |
| 3,312 | `M2_NORM` | `var M2_NORM =` |
| 3,314 | `volumeVerdict` | `function volumeVerdict(` |
| 3,322 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,323 | `unempHistory` | `var unempHistory =` |
| 3,329 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,338 | `NROU_NOW` | `var NROU_NOW =` |
| 3,339 | `unempState` | `function unempState(` |
| 3,345 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,397_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,398 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,407 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,463 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,464 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,465 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,466_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,468 | `householdsChart` | `function householdsChart(` |
| 3,518 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,571 | `GDP_NORM` | `var GDP_NORM =` |
| 3,572 | `gdpNowQ` | `var gdpNowQ =` |
| 3,573 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,595 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,646 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,691 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,699 | `velocityVerdict` | `function velocityVerdict(` |
| 3,707 | `derivePulseTag` | `function derivePulseTag(` |
| 3,713 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,745_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,746 | `seasonReading` | `var seasonReading =` |
| 3,790 | `frameworkRows` | `var frameworkRows =` |
| 3,800 | `vixRow` | `var vixRow =` |
| 3,801 | `VIX_CALM` | `var VIX_CALM =` |
| 3,802 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,806 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,813_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,814 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,823_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,824 | `calendarTodayY` | `var calendarTodayY =` |
| 3,826 | `vix3mClose` | `var vix3mClose =` |
| 3,827 | `fearCurve` | `function fearCurve(` |
| 3,832 | `curveVerdict` | `function curveVerdict(` |
| 3,837 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,846_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,847 | `modeBar` | `function modeBar(` |
| 3,854 | `pickerOpen` | `var pickerOpen =` |
| 3,855 | `cycleByName` | `function cycleByName(` |
| 3,859 | `openCycle` | `function openCycle(` |
| 3,863 | `cycleSlice` | `function cycleSlice(` |
| 3,871 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,879 | `cycleMonths` | `function cycleMonths(` |
| 3,887 | `histControls` | `function histControls(` |
| 3,896 | `pageCycle` | `function pageCycle(` |
| 3,900 | `cycLabel` | `function cycLabel(` |
| 3,904 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,909 | `cyclePicker` | `function cyclePicker(` |
| 3,928 | `rangeBar` | `function rangeBar(` |
| 3,935 | `trendOf` | `function trendOf(` |
| 3,950 | `TREND_ARROW` | `var TREND_ARROW =` |
| 3,954 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 3,965_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,966 | `yearOf` | `function yearOf(` |
| 3,967 | `mean` | `function mean(` |

### The record rows

_line 3,968_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,969 | `headSigma` | `function headSigma(` |
| 3,974 | `atQuarter` | `function atQuarter(` |
| 3,975 | `atMonth` | `function atMonth(` |
| 3,976 | `ordinal` | `function ordinal(` |
| 3,977 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 3,980_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,981 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 3,988 | `moreRow` | `function moreRow(` |
| 3,994 | `tempCaptionFull` | `var tempCaptionFull =` |
| 3,995 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,001_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,002 | `xLabelOf` | `function xLabelOf(` |
| 4,012 | `fitLine` | `function fitLine(` |
| 4,016 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,034_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,035 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,043 | `vGrid` | `function vGrid(` |
| 4,047 | `COL_FILL` | `var COL_FILL =` |
| 4,048 | `colPath` | `function colPath(` |
| 4,053 | `colWidth` | `function colWidth(` |
| 4,058 | `AXIS` | `var AXIS =` |
| 4,059 | `histFrame` | `function histFrame(` |
| 4,066 | `xLabel` | `function xLabel(` |
| 4,069 | `crossLine` | `function crossLine(` |
| 4,072 | `zeroRule` | `function zeroRule(` |
| 4,075 | `meanRule` | `function meanRule(` |
| 4,076 | `pendingGeom` | `var pendingGeom =` |
| 4,077 | `publishGeom` | `function publishGeom(` |
| 4,078 | `attachHistory` | `function attachHistory(` |
| 4,087 | `histBar` | `function histBar(` |
| 4,090 | `histTip` | `function histTip(` |
| 4,091 | `avgRule` | `function avgRule(` |
| 4,094 | `vhOpen` | `function vhOpen(` |
| 4,095 | `chartAxes` | `function chartAxes(` |
| 4,125 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,160_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,162 | `maxIn` | `function maxIn(` |
| 4,167 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,168 | `PEEK_W` | `var PEEK_W =` |
| 4,169 | `PEEK_H` | `var PEEK_H =` |
| 4,170 | `colPeek` | `function colPeek(` |
| 4,188 | `meterPeek` | `function meterPeek(` |
| 4,205 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,210 | `pressureZone` | `function pressureZone(` |
| 4,216 | `HZN_BACK` | `var HZN_BACK =` |
| 4,217 | `hznLast` | `function hznLast(` |
| 4,218 | `hznBack` | `function hznBack(` |
| 4,219 | `horizonWord` | `function horizonWord(` |
| 4,239 | `HZN_METERS` | `var HZN_METERS =` |
| 4,247 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,268 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,273 | `RISK_RISK` | `var RISK_RISK =` |
| 4,278 | `riskCell` | `function riskCell(` |
| 4,279 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,309 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,334_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,335 | `pulseClipN` | `var pulseClipN =` |
| 4,336 | `beatPath` | `function beatPath(` |
| 4,353 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,367 | `pulsePeek` | `function pulsePeek(` |
| 4,370 | `pulseBlock` | `function pulseBlock(` |
| 4,387 | `CHEV` | `var CHEV =` |
| 4,388 | `peekCard` | `function peekCard(` |
| 4,407 | `dropSvg` | `function dropSvg(` |
| 4,409 | `volumeSvg` | `function volumeSvg(` |
| 4,413 | `gaugeSvg` | `function gaugeSvg(` |
| 4,417 | `diamondSvg` | `function diamondSvg(` |
| 4,421 | `sproutSvg` | `function sproutSvg(` |
| 4,429 | `markSvg` | `function markSvg(` |
| 4,432 | `heartSvg` | `function heartSvg(` |
| 4,434 | `batterySvg` | `function batterySvg(` |
| 4,437 | `flameSvg` | `function flameSvg(` |
| 4,440 | `clockSvg` | `function clockSvg(` |
| 4,441 | `thermoSvg` | `function thermoSvg(` |
| 4,444 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,446 | `trendUpSvg` | `function trendUpSvg(` |
| 4,448 | `ecgSvg` | `function ecgSvg(` |
| 4,450 | `circulationSvg` | `function circulationSvg(` |
| 4,451 | `weatherSvg` | `function weatherSvg(` |
| 4,459 | `moodSvg` | `function moodSvg(` |
| 4,463 | `boltSvg` | `function boltSvg(` |
| 4,464 | `houseSvg` | `function houseSvg(` |
| 4,467 | `marketSvg` | `function marketSvg(` |
| 4,470 | `bagSvg` | `function bagSvg(` |
| 4,473 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,481_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,482 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,483 | `dsrHistory` | `var dsrHistory =` |
| 4,484 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,485 | `savHistory` | `var savHistory =` |
| 4,488 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,497 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,498 | `dsrNow` | `var dsrNow =` |
| 4,499 | `savNow` | `var savNow =` |
| 4,500 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,501 | `householdsWord` | `function householdsWord(` |
| 4,508 | `householdsNow` | `var householdsNow =` |
| 4,509 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,526 | `savInfoHtml` | `function savInfoHtml(` |
| 4,544 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,551 | `curveSub` | `var curveSub =` |
| 4,552 | `vixPct` | `function vixPct(` |
| 4,556 | `curveNoteFull` | `var curveNoteFull =` |
| 4,567 | `volatilityRing` | `function volatilityRing(` |
| 4,572 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,573 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,588 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,593_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,594 | `sp500Years` | `var sp500Years =` |
| 4,595 | `marketWord` | `function marketWord(` |
| 4,618 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,628 | `marketCycles` | `var marketCycles =` |
| 4,656 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,658_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,659 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,660 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,665_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,666 | `TIMING` | `var TIMING =` |
| 4,672 | `CATEGORIES` | `var CATEGORIES =` |
| 4,678 | `ROSTER` | `var ROSTER =` |
| 4,728 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,729 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,731 | `pageState` | `function pageState(` |
| 4,736 | `pageMode` | `var pageMode =` |
| 4,737 | `pageCycles` | `var pageCycles =` |
| 4,738 | `pageRange` | `var pageRange =` |
| 4,739 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,740 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,741 | `keyed` | `function keyed(` |
| 4,748 | `hyMonths` | `function hyMonths(` |
| 4,751 | `prettyKey` | `function prettyKey(` |
| 4,756 | `lastDate` | `function lastDate(` |
| 4,757 | `compiledDay` | `function compiledDay(` |
| 4,758 | `labPeriod` | `function labPeriod(` |
| 4,759 | `rosterFor` | `function rosterFor(` |
| 4,760 | `rowReadings` | `function rowReadings(` |
| 4,761 | `indOf` | `function indOf(` |
| 4,762 | `peekOf` | `function peekOf(` |
| 4,767 | `cardDate` | `function cardDate(` |
| 4,768 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,789_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,790 | `slopeOf` | `function slopeOf(` |
| 4,795 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,796 | `readSeason` | `function readSeason(` |
| 4,815 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,816 | `qLabel` | `function qLabel(` |
| 4,837 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,839_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,840 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,841 | `seasonTitle` | `function seasonTitle(` |
| 4,842 | `monthLabel` | `function monthLabel(` |
| 4,843 | `cycleReturns` | `function cycleReturns(` |
| 4,853 | `cycleModel` | `function cycleModel(` |
| 4,884 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,892 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,898 | `nowModel` | `var nowModel =` |
| 4,899 | `readingNow` | `var readingNow =` |
| 4,900 | `cpiNow` | `var cpiNow =` |
| 4,901 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,902 | `currentSeason` | `var currentSeason =` |
| 4,903 | `seasonWhy` | `var seasonWhy =` |
| 4,905 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,907_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,908 | `rankToDate` | `function rankToDate(` |
| 4,912 | `marketCache` | `var marketCache =` |
| 4,913 | `marketMonths` | `function marketMonths(` |
| 4,921 | `seasonInMonth` | `function seasonInMonth(` |
| 4,926 | `yearAfter` | `function yearAfter(` |
| 4,930 | `trackCache` | `var trackCache =` |
| 4,931 | `feelingTrack` | `function feelingTrack(` |
| 4,939 | `monthsApart` | `function monthsApart(` |
| 4,940 | `feelingSpells` | `function feelingSpells(` |
| 4,951 | `spellRecord` | `function spellRecord(` |
| 4,957 | `diagnoseClose` | `function diagnoseClose(` |
| 4,961 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 4,966_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,967 | `rankIn` | `function rankIn(` |
| 4,972 | `moodLists` | `var moodLists =` |
| 4,973 | `moodSeries` | `function moodSeries(` |
| 4,981 | `moodAt` | `function moodAt(` |
| 4,987 | `MOOD_TURN` | `var MOOD_TURN =` |
| 4,988 | `MOOD_RISING` | `var MOOD_RISING =` |
| 4,989 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 4,990 | `moodWord` | `function moodWord(` |
| 4,994 | `moodRead` | `function moodRead(` |
| 5,001 | `moodCache` | `var moodCache =` |
| 5,002 | `moodTrack` | `function moodTrack(` |
| 5,008 | `moodToday` | `function moodToday(` |
| 5,013 | `cycleStory` | `function cycleStory(` |
| 5,024 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,035 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,036 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,037 | `spreadLabel` | `function spreadLabel(` |
| 5,041 | `policyFacts` | `function policyFacts(` |
| 5,048 | `policyFactRows` | `function policyFactRows(` |
| 5,054 | `allSources` | `var allSources =` |
| 5,068 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,080_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,081 | `SVG_NS` | `var SVG_NS =` |
| 5,082 | `svgEl` | `function svgEl(` |
| 5,087 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,121_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,122 | `clampPct` | `function clampPct(` |
| 5,125 | `detailTexts` | `var detailTexts =` |
| 5,126 | `detailSlots` | `var detailSlots =` |
| 5,127 | `detailSlot` | `function detailSlot(` |
| 5,137 | `metricSheet` | `function metricSheet(` |
| 5,142 | `ledeHtml` | `function ledeHtml(` |
| 5,143 | `facts` | `function facts(` |
| 5,144 | `factsFrom` | `function factsFrom(` |
| 5,148 | `expandBtn` | `function expandBtn(` |
| 5,152 | `sheetRenderers` | `var sheetRenderers =` |
| 5,153 | `drawsPage` | `function drawsPage(` |
| 5,154 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,183_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,186 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,187_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,188 | `subjectRow` | `function subjectRow(` |
| 5,198 | `subjectIcon` | `function subjectIcon(` |
| 5,199 | `srcHtml` | `function srcHtml(` |
| 5,200 | `timingMark` | `function timingMark(` |
| 5,208 | `timingPill` | `function timingPill(` |
| 5,217 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,225 | `seatPageFoot` | `function seatPageFoot(` |
| 5,237 | `timingMembers` | `var timingMembers =` |
| 5,239 | `registerTiming` | `function registerTiming(` |
| 5,241 | `headHtml` | `function headHtml(` |
| 5,246 | `heldHighlights` | `var heldHighlights =` |
| 5,247 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,274_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,275 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,276 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,284 | `withLatestPoint` | `function withLatestPoint(` |
| 5,289 | `pressureMaturities` | `function pressureMaturities(` |
| 5,313 | `registerFlowPages` | `function registerFlowPages(` |
| 5,367 | `renderPressureRow` | `function renderPressureRow(` |
| 5,375 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,394 | `ylmColumns` | `function ylmColumns(` |
| 5,414 | `ylmFitLine` | `function ylmFitLine(` |
| 5,426 | `pressureHead` | `function pressureHead(` |
| 5,444 | `showPressureView` | `function showPressureView(` |
| 5,449 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,582_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,583 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,620_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,621 | `spreadSeries` | `function spreadSeries(` |
| 5,665 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,791_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,792 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: the Treasury spreads, inside Pressure

_line 5,818_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,819 | `renderHorizonPage` | `function renderHorizonPage(` |
| 5,843 | `spreadInsights` | `function spreadInsights(` |

### RENDER: Valuation (slow)

_line 5,873_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,874 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,882_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,883 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 5,980_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,981 | `renderVolatility` | `function renderVolatility(` |
| 6,026 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,056_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,057 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,078_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,079 | `totalRiseIn` | `function totalRiseIn(` |
| 6,089 | `eraInflation` | `function eraInflation(` |
| 6,100 | `eraGrowth` | `function eraGrowth(` |
| 6,116 | `fmtSigned` | `function fmtSigned(` |
| 6,117 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,118 | `growthShown` | `function growthShown(` |
| 6,119 | `growthShownCap` | `function growthShownCap(` |
| 6,120 | `phaseClass` | `function phaseClass(` |
| 6,121 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,125 | `cycleViewEl` | `var cycleViewEl =` |
| 6,126 | `shownEra` | `var shownEra =` |
| 6,127 | `calendarReset` | `var calendarReset =` |
| 6,128 | `metricPageReset` | `var metricPageReset =` |
| 6,129 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,130 | `topbarBack` | `var topbarBack =` |
| 6,131 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,138_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,139 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,220_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,221 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,239_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,240 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,261_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,263 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,264 | `hubSet` | `function hubSet(` |
| 6,275 | `quarterPopup` | `function quarterPopup(` |
| 6,298 | `hubShowDefault` | `function hubShowDefault(` |
| 6,307 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,313 | `hubShowYear` | `function hubShowYear(` |
| 6,323 | `renderCycleDial` | `function renderCycleDial(` |
| 6,404 | `m2Step` | `function m2Step(` |
| 6,407 | `heatStep` | `function heatStep(` |
| 6,411 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,422_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,423 | `renderCycleView` | `function renderCycleView(` |
| 6,429 | `shownEraModel` | `var shownEraModel =` |
| 6,430 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,432_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,433 | `stripGroupName` | `var stripGroupName =` |
| 6,434 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,462 | `marketStripHtml` | `function marketStripHtml(` |
| 6,496 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,497 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,526_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,527 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,533 | `debtSvg` | `function debtSvg(` |
| 6,534 | `interestSvg` | `function interestSvg(` |
| 6,536 | `budgetSvg` | `function budgetSvg(` |
| 6,538 | `lede` | `function lede(` |
| 6,539 | `periodOf` | `function periodOf(` |
| 6,540 | `meterWord` | `function meterWord(` |
| 6,541 | `splitPages` | `function splitPages(` |
| 6,558 | `confidencePage` | `function confidencePage(` |
| 6,564 | `marketPage` | `function marketPage(` |
| 6,570 | `productivityPage` | `function productivityPage(` |
| 6,575 | `splitSpec` | `function splitSpec(` |
| 6,581 | `splitInfo` | `function splitInfo(` |
| 6,585 | `periodTicks` | `function periodTicks(` |
| 6,590 | `periodOfSeries` | `function periodOfSeries(` |
| 6,591 | `drawSplit` | `function drawSplit(` |
| 6,608 | `mountSplit` | `function mountSplit(` |
| 6,621 | `splitPeek` | `function splitPeek(` |
| 6,628 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,636 | `deficitPeek` | `function deficitPeek(` |
| 6,640 | `catSheet` | `function catSheet(` |
| 6,645 | `groupId` | `function groupId(` |
| 6,646 | `groupCard` | `function groupCard(` |
| 6,654 | `groupSheet` | `function groupSheet(` |
| 6,661 | `appendPicks` | `function appendPicks(` |
| 6,669 | `doorSel` | `function doorSel(` |
| 6,670 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,682_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,683 | `buffettInsight` | `function buffettInsight(` |
| 6,698 | `debtInsight` | `function debtInsight(` |
| 6,713 | `productivityInsight` | `function productivityInsight(` |
| 6,723 | `confidenceInsight` | `function confidenceInsight(` |
| 6,734 | `ORDINAL` | `var ORDINAL =` |
| 6,735 | `marketInsight` | `function marketInsight(` |
| 6,747 | `interestInsight` | `function interestInsight(` |
| 6,762 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,785 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,805 | `activityStackHtml` | `function activityStackHtml(` |
| 6,815 | `seatTemperature` | `function seatTemperature(` |
| 6,823 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,856_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,857 | `partsOf` | `function partsOf(` |
| 6,866 | `authored` | `function authored(` |
| 6,867 | `registerRoster` | `function registerRoster(` |
| 6,889 | `indRow` | `function indRow(` |
| 6,893 | `IND_ORDER` | `var IND_ORDER =` |
| 6,894 | `indGroupRow` | `function indGroupRow(` |
| 6,899 | `catMembers` | `function catMembers(` |
| 6,907 | `indRows` | `function indRows(` |
| 6,921 | `indCategoryHtml` | `function indCategoryHtml(` |
| 6,929 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 6,931_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,932 | `NAV` | `var NAV =` |
| 6,933 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,027_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,028 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,075_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,076 | `qPretty` | `function qPretty(` |
| 7,077 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,078 | `peekArt` | `function peekArt(` |
| 7,079 | `indPeriod` | `function indPeriod(` |
| 7,083 | `catItem` | `function catItem(` |
| 7,130 | `insightCirculation` | `function insightCirculation(` |
| 7,163 | `insightWeather` | `function insightWeather(` |
| 7,203 | `seasonCards` | `function seasonCards(` |
| 7,209 | `marketCycleCard` | `function marketCycleCard(` |
| 7,221 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,225 | `seasonName` | `function seasonName(` |
| 7,226 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,233 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,238 | `curvePath` | `function curvePath(` |
| 7,246 | `moodCallout` | `function moodCallout(` |
| 7,250 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,262 | `moodInfo` | `function moodInfo(` |
| 7,271 | `moodFigures` | `function moodFigures(` |
| 7,277 | `moodCard` | `function moodCard(` |
| 7,281 | `insightMood` | `function insightMood(` |
| 7,287 | `storyBeats` | `function storyBeats(` |
| 7,298 | `storyText` | `function storyText(` |
| 7,302 | `PAIR_ART` | `var PAIR_ART =` |
| 7,308 | `placeSignPair` | `function placeSignPair(` |
| 7,331 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,347 | `buildCategories` | `function buildCategories(` |
| 7,363 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,401_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,402 | `capeFmt1` | `function capeFmt1(` |
| 7,403 | `actCycleMonths` | `function actCycleMonths(` |
| 7,411 | `householdsHighlights` | `function householdsHighlights(` |
| 7,430 | `redrawSheet` | `function redrawSheet(` |
| 7,434 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,479 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,516 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,563 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,593 | `valuationHighlights` | `function valuationHighlights(` |
| 7,606 | `tempHighlights` | `function tempHighlights(` |
| 7,623 | `gdpHighlights` | `function gdpHighlights(` |
| 7,638 | `renderMetricPages` | `function renderMetricPages(` |
| 7,648 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,658_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,659 | `todayFace` | `function todayFace(` |
| 7,665 | `readDoor` | `function readDoor(` |
| 7,673 | `pct` | `function pct(` |
| 7,674 | `rosterRows` | `function rosterRows(` |
| 7,675 | `eraEnds` | `function eraEnds(` |
| 7,682 | `eraMove` | `function eraMove(` |
| 7,686 | `HORMONES` | `var HORMONES =` |
| 7,687 | `analysisFor` | `function analysisFor(` |
| 7,693 | `dxRow` | `function dxRow(` |
| 7,694 | `dxText` | `function dxText(` |
| 7,695 | `dxSection` | `function dxSection(` |
| 7,696 | `systemHtml` | `function systemHtml(` |
| 7,699 | `dxHead` | `function dxHead(` |
| 7,704 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,713 | `acrossCycle` | `function acrossCycle(` |
| 7,720 | `trendCardHtml` | `function trendCardHtml(` |
| 7,726 | `spellLines` | `function spellLines(` |
| 7,733 | `trendSub` | `function trendSub(` |
| 7,734 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,738 | `replaceInsights` | `function replaceInsights(` |
| 7,744 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,748 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,761_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,762 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,763 | `cycleDataOn` | `function cycleDataOn(` |
| 7,764 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,784 | `wireCycleData` | `function wireCycleData(` |
| 7,799 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,844_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,845 | `eraOpen` | `var eraOpen =` |
| 7,846 | `kT` | `function kT(` |
| 7,850 | `upTo` | `function upTo(` |
| 7,851 | `pairAt` | `function pairAt(` |
| 7,852 | `eraReading` | `function eraReading(` |
| 7,862 | `eraFig` | `function eraFig(` |
| 7,869 | `eraValue` | `function eraValue(` |
| 7,875 | `eraRange` | `function eraRange(` |
| 7,880 | `eraMini` | `function eraMini(` |
| 7,885 | `eraCard` | `function eraCard(` |
| 7,904 | `eraCards` | `function eraCards(` |
| 7,910 | `eraShow` | `function eraShow(` |
| 7,917 | `enterEra` | `function enterEra(` |
| 7,924 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,931_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,932 | `rosterRow` | `function rosterRow(` |
| 7,945 | `__roster` | `var __roster =` |
| 7,946 | `readingRoster` | `function readingRoster(` |
| 7,953 | `withUnit` | `function withUnit(` |
| 7,954 | `pastFigure` | `function pastFigure(` |
| 7,958 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 7,960_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,961 | `cycleSymptoms` | `function cycleSymptoms(` |
| 7,985 | `placeWords` | `function placeWords(` |
| 7,989 | `symptomNote` | `function symptomNote(` |
| 7,996 | `symptomRow` | `function symptomRow(` |
| 8,003 | `cycleTrack` | `function cycleTrack(` |
| 8,018 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,026_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,027 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,076_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,077 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,108_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,109 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **9 compute a value**, 9 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,954–1,957 | `LIVE_CACHE` | Live data without a render refactor |
| 2,286–2,290 | `productivityRecord` | Productivity growth is not in this panel |
| 2,303–2,325 | `productivityReading` | Productivity growth is not in this panel |
| 2,321–2,325 | `confidenceRecord` | Consumer confidence |
| 2,332–4,238 | `confidenceReading` | Consumer confidence |
| 4,225–4,238 | `horizonRead` | A series' highest reading within a span |
| 4,599–4,830 | `marketReading` | The S&P 500, year by year |
| 4,817–4,830 | `seasonTrackAll` | The season, computed |
| 4,832–4,836 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,498 |
| `pressure-range` | 2,012 |
| `sheet-marker-deficit` | 7,495 |
| `sheet-metric-gdp` | 7,459 |
| `sheet-metric-households` | 7,517 |
| `sheet-metric-temp` | 7,435 |
| `sheet-metric-valuation` | 7,537 |
| `sheet-sign-activity` | 7,480 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,502 |
| `desire-range` | 5,349 |
| `fear-range` | 5,989 |
| `pressure-range` | 5,554 |
| `pulse-range` | 5,317 |
| `sheet-metric-gdp` | 7,460 |
| `sheet-metric-temp` | 7,436 |
| `sheet-metric-valuation` | 7,538 |
| `volume-range` | 5,333 |

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
| 1,145 | hero: yield curve |
| 1,177 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,196 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,223 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,231 | long cycle (structural layer) |
| 1,238 | indicator grid |
| 1,264 | info icon + popover (progressive disclosure for longer notes) |
| 1,278 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,361 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (98), which is what the renderers fill:

| Line | id |
|---|---|
| 1,377 | `topbar-back` |
| 1,380 | `topbar-title` |
| 1,381 | `menu-btn` |
| 1,395 | `main` |
| 1,398 | `cycle-view` |
| 1,401 | `cycle-kicker` |
| 1,404 | `cycle-dial` |
| 1,406 | `season-wheel-hub-date` |
| 1,407 | `season-wheel-hub-theme` |
| 1,408 | `season-wheel-hub-detail` |
| 1,416 | `today-analysis` |
| 1,417 | `peek-row` |
| 1,418 | `sheet-metric-temp` |
| 1,419 | `temp-timing` |
| 1,420 | `temp-chart` |
| 1,421 | `temp-rangebar` |
| 1,423 | `temp-head` |
| 1,424 | `temp-history` |
| 1,425 | `temp-hist-tooltip` |
| 1,426 | `temp-trend` |
| 1,428 | `temp-highlights` |
| 1,430 | `sheet-metric-gdp` |
| 1,431 | `gdp-timing` |
| 1,432 | `gdp-chart` |
| 1,433 | `gdp-rangebar` |
| 1,435 | `gdp-head` |
| 1,436 | `gdp-history` |
| 1,437 | `gdp-hist-tooltip` |
| 1,438 | `gdp-trend` |
| 1,440 | `gdp-highlights` |
| 1,444 | `sheet-marker-deficit` |
| 1,444 | `deficit-timing` |
| 1,446 | `sheet-metric-households` |
| 1,447 | `households-timing` |
| 1,448 | `households-chart` |
| 1,449 | `households-highlights` |
| 1,452 | `sheet-metric-valuation` |
| 1,453 | `valuation-timing` |
| 1,454 | `valuation-chart` |
| 1,455 | `valuation-highlights` |
| 1,462 | `subj-value-hormones` |
| 1,463 | `subj-say-hormones` |
| 1,469 | `hormones-history` |
| 1,470 | `hormones-insights` |
| 1,479 | `subj-value-pressure` |
| 1,480 | `subj-say-pressure` |
| 1,486 | `pressure-timeline` |
| 1,488 | `pressure-head` |
| 1,489 | `ylm-shell` |
| 1,490 | `ylm-svg` |
| 1,491 | `ylm-tooltip` |
| 1,493 | `spread-history-shell` |
| 1,494 | `spread-history-svg` |
| 1,495 | `spread-history-tooltip` |
| 1,497 | `ylm-trend` |
| 1,499 | `pressure-insights` |
| 1,506 | `subj-ring-sentiment` |
| 1,509 | `subj-value-sentiment` |
| 1,510 | `subj-say-sentiment` |
| 1,511 | `subj-spark-sentiment` |
| 1,517 | `fear-history` |
| 1,518 | `curve-highlights` |
| 1,524 | `signs-list` |
| 1,530 | `calendar-list` |
| 1,537 | `cycle-data` |
| 1,539 | `cycle-legend` |
| 1,540 | `cycle-list` |
| 1,541 | `cycle-more` |
| 1,542 | `cycle-more-label` |
| 1,547 | `calendar-cycle` |
| 1,567 | `search-home` |
| 1,569 | `search-input` |
| 1,571 | `search-list` |
| 1,575 | `more-menu` |
| 1,578 | `menu-back` |
| 1,592 | `sources-open` |
| 1,600 | `appearance-current` |
| 1,606 | `sheet-howto` |
| 1,649 | `sheet-book` |
| 1,680 | `seasons-kicker` |
| 1,682 | `seasons-rows` |
| 1,685 | `framework-kicker` |
| 1,688 | `framework-rows` |
| 1,698 | `sheet-appearance` |
| 1,706 | `theme-toggle` |
| 1,713 | `sheet-contact` |
| 1,722 | `contact-form` |
| 1,723 | `contact-title` |
| 1,724 | `contact-message` |
| 1,726 | `contact-hint` |
| 1,727 | `contact-send` |
| 1,733 | `sheet-sources` |
| 1,736 | `sources-back` |
| 1,741 | `asof-text` |
| 1,742 | `sources-groups` |
| 1,748 | `detail-backdrop` |
| 1,750 | `detail-modal-close` |
| 1,751 | `detail-modal-body` |

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

