# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,250 lines**, about 650 KB, roughly **185 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `5c88b3c` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,372 | the whole stylesheet, every token and rule |
| **Markup** | 1,373–1,756 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,757–8,217 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,218–8,250 | </body></html> |

Counts: **433** top-level functions, **186** top-level vars, **9** top-level IIFEs in the script.

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

_line 1,788_ · 13 declarations

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

### Live data without a render refactor

_line 1,947_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,952 | `merge` | `function merge(` |
| 1,959 | `LIVE` | `function LIVE(` |
| 1,973 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 1,976_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,978 | `paintReading` | `function paintReading(` |
| 1,995 | `repaintVolatility` | `function repaintVolatility(` |
| 1,999 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,004 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,008 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,013_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,014 | `READINGS` | `var READINGS =` |
| 2,069 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,070 | `KINDS` | `var KINDS =` |
| 2,071 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,085 | `receive` | `function receive(` |
| 2,101 | `liveAsOf` | `var liveAsOf =` |
| 2,102 | `fmtAsOf` | `function fmtAsOf(` |
| 2,107 | `applyLive` | `function applyLive(` |
| 2,120 | `shapeOk` | `function shapeOk(` |
| 2,127 | `repaintPolicy` | `function repaintPolicy(` |
| 2,133 | `GYN` | `var GYN =` |
| 2,160 | `refreshLiveData` | `function refreshLiveData(` |
| 2,178 | `fetchSiteData` | `function fetchSiteData(` |
| 2,194 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,199_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,200 | `yieldCurve` | `var yieldCurve =` |
| 2,206 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,207 | `curveAsOf` | `function curveAsOf(` |
| 2,212 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,213 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,218 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,220_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,221 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,222 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,223 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,224 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,225 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,227_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,228 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,234 | `uninvLagToday` | `var uninvLagToday =` |
| 2,239 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,245 | `gdpSrc` | `var gdpSrc =` |
| 2,248 | `labPanel` | `var labPanel =` |
| 2,277 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,278_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,285 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,286 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,313_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,314 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,320 | `confidenceWord` | `function confidenceWord(` |

### The deficit, year by year

_line 2,347_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,348 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,349 | `deficitHistory` | `var deficitHistory =` |
| 2,352 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,353 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,355 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,364_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,365 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,374_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,375 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,378 | `timelineSpan` | `function timelineSpan(` |
| 2,383 | `timelineFor` | `function timelineFor(` |
| 2,394 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,400_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,401 | `windowScale` | `function windowScale(` |
| 2,416 | `windowYears` | `function windowYears(` |
| 2,424 | `refName` | `function refName(` |
| 2,428 | `histReadEnsure` | `function histReadEnsure(` |
| 2,448 | `histReadFill` | `function histReadFill(` |
| 2,498 | `histAxisEnds` | `function histAxisEnds(` |
| 2,509 | `histLegend` | `function histLegend(` |
| 2,569 | `refitHistory` | `function refitHistory(` |
| 2,579 | `wireHistHover` | `function wireHistHover(` |
| 2,616 | `mWindowFrom` | `function mWindowFrom(` |
| 2,620 | `qWindowFrom` | `function qWindowFrom(` |
| 2,625 | `DEF_1983` | `var DEF_1983 =` |
| 2,626 | `defFrom` | `function defFrom(` |
| 2,631 | `deficitChart` | `function deficitChart(` |
| 2,699 | `deficitBlock` | `function deficitBlock(` |
| 2,739 | `buffettHistory` | `var buffettHistory =` |
| 2,741 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,742 | `hyDates` | `var hyDates =` |
| 2,743 | `hyOas` | `var hyOas =` |
| 2,744 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,751 | `hyAt` | `function hyAt(` |
| 2,755 | `hyLabel` | `function hyLabel(` |
| 2,756 | `hyNum` | `function hyNum(` |
| 2,757 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,765 | `hyQuarters` | `function hyQuarters(` |
| 2,773 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,775 | `capeHistory` | `var capeHistory =` |
| 2,777 | `longCycleSrc` | `var longCycleSrc =` |
| 2,793 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,807_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,808 | `sentiment` | `var sentiment =` |
| 2,824 | `valuation` | `var valuation =` |
| 2,845 | `valRow` | `function valRow(` |
| 2,850 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,853 | `coincident` | `var coincident =` |
| 2,903 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,909 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,910 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,911 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,913_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,914 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,915 | `m2vHistory` | `var m2vHistory =` |
| 2,931 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 2,983 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,025_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,026 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,027 | `DOTS` | `var DOTS =` |
| 3,029 | `headPickRow` | `function headPickRow(` |
| 3,035 | `histHead` | `function histHead(` |
| 3,050 | `headNoteIdx` | `var headNoteIdx =` |
| 3,051 | `headMenuHtml` | `function headMenuHtml(` |
| 3,076 | `headMenuFor` | `var headMenuFor =` |
| 3,077 | `headSubFor` | `var headSubFor =` |
| 3,078 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,107 | `histNote` | `function histNote(` |
| 3,108 | `meterFlagged` | `function meterFlagged(` |
| 3,115 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,138 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,152 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,165 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,170 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,174 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,186 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,200 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,214 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,233 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,264 | `desireBlock` | `function desireBlock(` |
| 3,275 | `volumeBlock` | `function volumeBlock(` |
| 3,287 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,299 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,306_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,307 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,308 | `m2Level` | `var m2Level =` |
| 3,329 | `m2Yoy` | `var m2Yoy =` |
| 3,330 | `M2_NORM` | `var M2_NORM =` |
| 3,332 | `volumeVerdict` | `function volumeVerdict(` |
| 3,340 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,341 | `unempHistory` | `var unempHistory =` |
| 3,347 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,356 | `NROU_NOW` | `var NROU_NOW =` |
| 3,357 | `unempState` | `function unempState(` |
| 3,363 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,415_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,416 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,425 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,481 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,482 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,483 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,484_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,486 | `householdsChart` | `function householdsChart(` |
| 3,536 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,589 | `GDP_NORM` | `var GDP_NORM =` |
| 3,590 | `gdpNowQ` | `var gdpNowQ =` |
| 3,591 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,613 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,664 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,709 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,717 | `velocityVerdict` | `function velocityVerdict(` |
| 3,725 | `derivePulseTag` | `function derivePulseTag(` |
| 3,731 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,763_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,764 | `seasonReading` | `var seasonReading =` |
| 3,808 | `frameworkRows` | `var frameworkRows =` |
| 3,818 | `vixRow` | `var vixRow =` |
| 3,819 | `VIX_CALM` | `var VIX_CALM =` |
| 3,820 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,824 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,831_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,832 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,841_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,842 | `calendarTodayY` | `var calendarTodayY =` |
| 3,844 | `vix3mClose` | `var vix3mClose =` |
| 3,845 | `fearCurve` | `function fearCurve(` |
| 3,850 | `curveVerdict` | `function curveVerdict(` |
| 3,855 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,864_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,865 | `modeBar` | `function modeBar(` |
| 3,872 | `pickerOpen` | `var pickerOpen =` |
| 3,873 | `cycleByName` | `function cycleByName(` |
| 3,877 | `openCycle` | `function openCycle(` |
| 3,881 | `cycleSlice` | `function cycleSlice(` |
| 3,889 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,897 | `cycleMonths` | `function cycleMonths(` |
| 3,905 | `histControls` | `function histControls(` |
| 3,914 | `pageCycle` | `function pageCycle(` |
| 3,918 | `cycLabel` | `function cycLabel(` |
| 3,922 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,927 | `cyclePicker` | `function cyclePicker(` |
| 3,946 | `rangeBar` | `function rangeBar(` |
| 3,953 | `trendOf` | `function trendOf(` |
| 3,968 | `TREND_ARROW` | `var TREND_ARROW =` |
| 3,972 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 3,983_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,984 | `yearOf` | `function yearOf(` |
| 3,985 | `mean` | `function mean(` |

### The record rows

_line 3,986_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,987 | `headSigma` | `function headSigma(` |
| 3,992 | `atQuarter` | `function atQuarter(` |
| 3,993 | `atMonth` | `function atMonth(` |
| 3,994 | `ordinal` | `function ordinal(` |
| 3,995 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 3,998_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,999 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,006 | `moreRow` | `function moreRow(` |
| 4,012 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,013 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,019_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,020 | `xLabelOf` | `function xLabelOf(` |
| 4,030 | `fitLine` | `function fitLine(` |
| 4,034 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,052_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,053 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,061 | `vGrid` | `function vGrid(` |
| 4,065 | `COL_FILL` | `var COL_FILL =` |
| 4,066 | `colPath` | `function colPath(` |
| 4,071 | `colWidth` | `function colWidth(` |
| 4,076 | `AXIS` | `var AXIS =` |
| 4,077 | `histFrame` | `function histFrame(` |
| 4,084 | `xLabel` | `function xLabel(` |
| 4,087 | `crossLine` | `function crossLine(` |
| 4,090 | `zeroRule` | `function zeroRule(` |
| 4,093 | `meanRule` | `function meanRule(` |
| 4,094 | `pendingGeom` | `var pendingGeom =` |
| 4,095 | `publishGeom` | `function publishGeom(` |
| 4,096 | `attachHistory` | `function attachHistory(` |
| 4,105 | `histBar` | `function histBar(` |
| 4,108 | `histTip` | `function histTip(` |
| 4,109 | `avgRule` | `function avgRule(` |
| 4,112 | `vhOpen` | `function vhOpen(` |
| 4,113 | `chartAxes` | `function chartAxes(` |
| 4,143 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,178_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,180 | `maxIn` | `function maxIn(` |
| 4,185 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,186 | `PEEK_W` | `var PEEK_W =` |
| 4,187 | `PEEK_H` | `var PEEK_H =` |
| 4,188 | `colPeek` | `function colPeek(` |
| 4,206 | `meterPeek` | `function meterPeek(` |
| 4,223 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,228 | `pressureZone` | `function pressureZone(` |
| 4,234 | `HZN_BACK` | `var HZN_BACK =` |
| 4,235 | `hznLast` | `function hznLast(` |
| 4,236 | `hznBack` | `function hznBack(` |
| 4,237 | `horizonWord` | `function horizonWord(` |
| 4,257 | `HZN_METERS` | `var HZN_METERS =` |
| 4,265 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,286 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,291 | `RISK_RISK` | `var RISK_RISK =` |
| 4,296 | `riskCell` | `function riskCell(` |
| 4,297 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,327 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,352_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,353 | `pulseClipN` | `var pulseClipN =` |
| 4,354 | `beatPath` | `function beatPath(` |
| 4,371 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,385 | `pulsePeek` | `function pulsePeek(` |
| 4,388 | `pulseBlock` | `function pulseBlock(` |
| 4,405 | `CHEV` | `var CHEV =` |
| 4,406 | `peekCard` | `function peekCard(` |
| 4,425 | `dropSvg` | `function dropSvg(` |
| 4,427 | `volumeSvg` | `function volumeSvg(` |
| 4,431 | `gaugeSvg` | `function gaugeSvg(` |
| 4,435 | `diamondSvg` | `function diamondSvg(` |
| 4,439 | `sproutSvg` | `function sproutSvg(` |
| 4,447 | `markSvg` | `function markSvg(` |
| 4,450 | `hormoneSvg` | `function hormoneSvg(` |
| 4,455 | `flameSvg` | `function flameSvg(` |
| 4,458 | `clockSvg` | `function clockSvg(` |
| 4,459 | `gearSvg` | `function gearSvg(` |
| 4,467 | `thermoSvg` | `function thermoSvg(` |
| 4,470 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,472 | `trendUpSvg` | `function trendUpSvg(` |
| 4,474 | `ecgSvg` | `function ecgSvg(` |
| 4,476 | `circulationSvg` | `function circulationSvg(` |
| 4,477 | `weatherSvg` | `function weatherSvg(` |
| 4,485 | `moodSvg` | `function moodSvg(` |
| 4,489 | `boltSvg` | `function boltSvg(` |
| 4,490 | `houseSvg` | `function houseSvg(` |
| 4,493 | `marketSvg` | `function marketSvg(` |
| 4,496 | `bagSvg` | `function bagSvg(` |
| 4,499 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,507_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,508 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,509 | `dsrHistory` | `var dsrHistory =` |
| 4,510 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,511 | `savHistory` | `var savHistory =` |
| 4,514 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,523 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,524 | `dsrNow` | `var dsrNow =` |
| 4,525 | `savNow` | `var savNow =` |
| 4,526 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,527 | `householdsWord` | `function householdsWord(` |
| 4,534 | `householdsNow` | `var householdsNow =` |
| 4,535 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,552 | `savInfoHtml` | `function savInfoHtml(` |
| 4,570 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,577 | `curveSub` | `var curveSub =` |
| 4,578 | `vixPct` | `function vixPct(` |
| 4,582 | `curveNoteFull` | `var curveNoteFull =` |
| 4,593 | `volatilityRing` | `function volatilityRing(` |
| 4,598 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,599 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,614 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,619_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,620 | `sp500Years` | `var sp500Years =` |
| 4,621 | `marketWord` | `function marketWord(` |
| 4,644 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,654 | `marketCycles` | `var marketCycles =` |
| 4,682 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,684_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,685 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,686 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,691_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,692 | `TIMING` | `var TIMING =` |
| 4,698 | `CATEGORIES` | `var CATEGORIES =` |
| 4,704 | `ROSTER` | `var ROSTER =` |
| 4,756 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,757 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,759 | `pageState` | `function pageState(` |
| 4,764 | `pageMode` | `var pageMode =` |
| 4,765 | `pageCycles` | `var pageCycles =` |
| 4,766 | `pageRange` | `var pageRange =` |
| 4,767 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,768 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,769 | `keyed` | `function keyed(` |
| 4,776 | `hyMonths` | `function hyMonths(` |
| 4,779 | `prettyKey` | `function prettyKey(` |
| 4,784 | `lastDate` | `function lastDate(` |
| 4,785 | `compiledDay` | `function compiledDay(` |
| 4,786 | `labPeriod` | `function labPeriod(` |
| 4,787 | `rosterFor` | `function rosterFor(` |
| 4,788 | `rowReadings` | `function rowReadings(` |
| 4,789 | `indOf` | `function indOf(` |
| 4,790 | `peekOf` | `function peekOf(` |
| 4,795 | `cardDate` | `function cardDate(` |
| 4,796 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,817_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,818 | `slopeOf` | `function slopeOf(` |
| 4,823 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,824 | `readSeason` | `function readSeason(` |
| 4,843 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,844 | `qLabel` | `function qLabel(` |
| 4,865 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,867_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,868 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,869 | `seasonTitle` | `function seasonTitle(` |
| 4,870 | `monthLabel` | `function monthLabel(` |
| 4,871 | `cycleReturns` | `function cycleReturns(` |
| 4,881 | `cycleModel` | `function cycleModel(` |
| 4,912 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,920 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,926 | `nowModel` | `var nowModel =` |
| 4,927 | `readingNow` | `var readingNow =` |
| 4,928 | `cpiNow` | `var cpiNow =` |
| 4,929 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,930 | `currentSeason` | `var currentSeason =` |
| 4,931 | `seasonWhy` | `var seasonWhy =` |
| 4,933 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,935_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,936 | `rankToDate` | `function rankToDate(` |
| 4,940 | `marketCache` | `var marketCache =` |
| 4,941 | `marketMonths` | `function marketMonths(` |
| 4,949 | `seasonInMonth` | `function seasonInMonth(` |
| 4,954 | `yearAfter` | `function yearAfter(` |
| 4,958 | `trackCache` | `var trackCache =` |
| 4,959 | `feelingTrack` | `function feelingTrack(` |
| 4,967 | `monthsApart` | `function monthsApart(` |
| 4,968 | `feelingSpells` | `function feelingSpells(` |
| 4,979 | `spellRecord` | `function spellRecord(` |
| 4,985 | `diagnoseClose` | `function diagnoseClose(` |
| 4,989 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 4,994_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,995 | `rankIn` | `function rankIn(` |
| 5,000 | `moodLists` | `var moodLists =` |
| 5,001 | `moodSeries` | `function moodSeries(` |
| 5,009 | `moodAt` | `function moodAt(` |
| 5,015 | `MOOD_TURN` | `var MOOD_TURN =` |
| 5,016 | `MOOD_RISING` | `var MOOD_RISING =` |
| 5,017 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 5,018 | `moodWord` | `function moodWord(` |
| 5,022 | `moodRead` | `function moodRead(` |
| 5,029 | `moodCache` | `var moodCache =` |
| 5,030 | `moodTrack` | `function moodTrack(` |
| 5,036 | `moodToday` | `function moodToday(` |
| 5,041 | `cycleStory` | `function cycleStory(` |
| 5,052 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,063 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,064 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,065 | `spreadLabel` | `function spreadLabel(` |
| 5,069 | `policyFacts` | `function policyFacts(` |
| 5,076 | `policyFactRows` | `function policyFactRows(` |
| 5,082 | `allSources` | `var allSources =` |
| 5,096 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,108_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,109 | `SVG_NS` | `var SVG_NS =` |
| 5,110 | `svgEl` | `function svgEl(` |
| 5,115 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,149_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,150 | `clampPct` | `function clampPct(` |
| 5,153 | `detailTexts` | `var detailTexts =` |
| 5,154 | `detailSlots` | `var detailSlots =` |
| 5,155 | `detailSlot` | `function detailSlot(` |
| 5,165 | `metricSheet` | `function metricSheet(` |
| 5,170 | `ledeHtml` | `function ledeHtml(` |
| 5,171 | `facts` | `function facts(` |
| 5,172 | `factsFrom` | `function factsFrom(` |
| 5,176 | `expandBtn` | `function expandBtn(` |
| 5,180 | `sheetRenderers` | `var sheetRenderers =` |
| 5,181 | `drawsPage` | `function drawsPage(` |
| 5,182 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,211_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,214 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,215_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,216 | `subjectRow` | `function subjectRow(` |
| 5,226 | `subjectIcon` | `function subjectIcon(` |
| 5,227 | `srcHtml` | `function srcHtml(` |
| 5,228 | `timingMark` | `function timingMark(` |
| 5,236 | `timingPill` | `function timingPill(` |
| 5,245 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,253 | `seatPageFoot` | `function seatPageFoot(` |
| 5,265 | `timingMembers` | `var timingMembers =` |
| 5,267 | `registerTiming` | `function registerTiming(` |
| 5,269 | `headHtml` | `function headHtml(` |
| 5,274 | `heldHighlights` | `var heldHighlights =` |
| 5,275 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,302_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,303 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,304 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,312 | `withLatestPoint` | `function withLatestPoint(` |
| 5,317 | `pressureMaturities` | `function pressureMaturities(` |
| 5,341 | `registerFlowPages` | `function registerFlowPages(` |
| 5,395 | `renderPressureRow` | `function renderPressureRow(` |
| 5,403 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,422 | `ylmColumns` | `function ylmColumns(` |
| 5,442 | `ylmFitLine` | `function ylmFitLine(` |
| 5,454 | `pressureHead` | `function pressureHead(` |
| 5,472 | `showPressureView` | `function showPressureView(` |
| 5,477 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,610_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,611 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,648_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,649 | `spreadSeries` | `function spreadSeries(` |
| 5,693 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,819_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,820 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: the Treasury spreads, inside Pressure

_line 5,846_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,847 | `renderHorizonPage` | `function renderHorizonPage(` |
| 5,871 | `spreadInsights` | `function spreadInsights(` |

### RENDER: Valuation (slow)

_line 5,901_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,902 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,910_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,911 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,008_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,009 | `renderVolatility` | `function renderVolatility(` |
| 6,054 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,084_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,085 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,106_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,107 | `totalRiseIn` | `function totalRiseIn(` |
| 6,117 | `eraInflation` | `function eraInflation(` |
| 6,128 | `eraGrowth` | `function eraGrowth(` |
| 6,144 | `fmtSigned` | `function fmtSigned(` |
| 6,145 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,146 | `growthShown` | `function growthShown(` |
| 6,147 | `growthShownCap` | `function growthShownCap(` |
| 6,148 | `phaseClass` | `function phaseClass(` |
| 6,149 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,153 | `cycleViewEl` | `var cycleViewEl =` |
| 6,154 | `shownEra` | `var shownEra =` |
| 6,155 | `calendarReset` | `var calendarReset =` |
| 6,156 | `metricPageReset` | `var metricPageReset =` |
| 6,157 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,158 | `topbarBack` | `var topbarBack =` |
| 6,159 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,166_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,167 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,248_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,249 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,267_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,268 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,289_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,291 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,292 | `hubSet` | `function hubSet(` |
| 6,303 | `quarterPopup` | `function quarterPopup(` |
| 6,326 | `hubShowDefault` | `function hubShowDefault(` |
| 6,335 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,341 | `hubShowYear` | `function hubShowYear(` |
| 6,351 | `renderCycleDial` | `function renderCycleDial(` |
| 6,432 | `m2Step` | `function m2Step(` |
| 6,435 | `heatStep` | `function heatStep(` |
| 6,439 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,450_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,451 | `renderCycleView` | `function renderCycleView(` |
| 6,457 | `shownEraModel` | `var shownEraModel =` |
| 6,458 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,460_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,461 | `stripGroupName` | `var stripGroupName =` |
| 6,462 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,490 | `marketStripHtml` | `function marketStripHtml(` |
| 6,524 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,525 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,554_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,555 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,561 | `debtSvg` | `function debtSvg(` |
| 6,562 | `interestSvg` | `function interestSvg(` |
| 6,564 | `budgetSvg` | `function budgetSvg(` |
| 6,566 | `lede` | `function lede(` |
| 6,567 | `periodOf` | `function periodOf(` |
| 6,568 | `meterWord` | `function meterWord(` |
| 6,569 | `splitPages` | `function splitPages(` |
| 6,586 | `confidencePage` | `function confidencePage(` |
| 6,592 | `marketPage` | `function marketPage(` |
| 6,598 | `productivityPage` | `function productivityPage(` |
| 6,603 | `splitSpec` | `function splitSpec(` |
| 6,609 | `splitInfo` | `function splitInfo(` |
| 6,613 | `periodTicks` | `function periodTicks(` |
| 6,618 | `periodOfSeries` | `function periodOfSeries(` |
| 6,619 | `drawSplit` | `function drawSplit(` |
| 6,636 | `mountSplit` | `function mountSplit(` |
| 6,649 | `splitPeek` | `function splitPeek(` |
| 6,656 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,664 | `deficitPeek` | `function deficitPeek(` |
| 6,668 | `catSheet` | `function catSheet(` |
| 6,673 | `groupId` | `function groupId(` |
| 6,674 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,675 | `seatGroups` | `function seatGroups(` |
| 6,678 | `groupSheet` | `function groupSheet(` |
| 6,688 | `appendPicks` | `function appendPicks(` |
| 6,696 | `doorSel` | `function doorSel(` |
| 6,697 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,709_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,710 | `buffettInsight` | `function buffettInsight(` |
| 6,725 | `debtInsight` | `function debtInsight(` |
| 6,740 | `productivityInsight` | `function productivityInsight(` |
| 6,750 | `confidenceInsight` | `function confidenceInsight(` |
| 6,761 | `ORDINAL` | `var ORDINAL =` |
| 6,762 | `marketInsight` | `function marketInsight(` |
| 6,774 | `interestInsight` | `function interestInsight(` |
| 6,789 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,812 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,832 | `activityStackHtml` | `function activityStackHtml(` |
| 6,842 | `seatTemperature` | `function seatTemperature(` |
| 6,850 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,883_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,884 | `partsOf` | `function partsOf(` |
| 6,893 | `authored` | `function authored(` |
| 6,894 | `registerRoster` | `function registerRoster(` |
| 6,916 | `indRow` | `function indRow(` |
| 6,920 | `IND_ORDER` | `var IND_ORDER =` |
| 6,921 | `indGroupRow` | `function indGroupRow(` |
| 6,926 | `indRows` | `function indRows(` |
| 6,940 | `indCategoryHtml` | `function indCategoryHtml(` |
| 6,948 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 6,950_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,951 | `NAV` | `var NAV =` |
| 6,952 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,046_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,047 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,094_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,095 | `qPretty` | `function qPretty(` |
| 7,096 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,097 | `peekArt` | `function peekArt(` |
| 7,098 | `indPeriod` | `function indPeriod(` |
| 7,102 | `catItem` | `function catItem(` |
| 7,149 | `insightCirculation` | `function insightCirculation(` |
| 7,182 | `insightWeather` | `function insightWeather(` |
| 7,222 | `seasonCards` | `function seasonCards(` |
| 7,228 | `marketCycleCard` | `function marketCycleCard(` |
| 7,240 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,244 | `seasonName` | `function seasonName(` |
| 7,245 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,252 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,257 | `curvePath` | `function curvePath(` |
| 7,265 | `moodCallout` | `function moodCallout(` |
| 7,269 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,281 | `moodInfo` | `function moodInfo(` |
| 7,290 | `moodFigures` | `function moodFigures(` |
| 7,296 | `moodCard` | `function moodCard(` |
| 7,300 | `insightMood` | `function insightMood(` |
| 7,306 | `storyBeats` | `function storyBeats(` |
| 7,317 | `storyText` | `function storyText(` |
| 7,321 | `PAIR_ART` | `var PAIR_ART =` |
| 7,327 | `placeSignPair` | `function placeSignPair(` |
| 7,350 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,366 | `buildCategories` | `function buildCategories(` |
| 7,382 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,420_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,421 | `capeFmt1` | `function capeFmt1(` |
| 7,422 | `actCycleMonths` | `function actCycleMonths(` |
| 7,430 | `householdsHighlights` | `function householdsHighlights(` |
| 7,449 | `redrawSheet` | `function redrawSheet(` |
| 7,453 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,498 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,535 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,582 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,612 | `valuationHighlights` | `function valuationHighlights(` |
| 7,625 | `tempHighlights` | `function tempHighlights(` |
| 7,642 | `gdpHighlights` | `function gdpHighlights(` |
| 7,657 | `renderMetricPages` | `function renderMetricPages(` |
| 7,667 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,677_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,678 | `todayFace` | `function todayFace(` |
| 7,684 | `readDoor` | `function readDoor(` |
| 7,692 | `pct` | `function pct(` |
| 7,693 | `rosterRows` | `function rosterRows(` |
| 7,694 | `eraEnds` | `function eraEnds(` |
| 7,701 | `eraMove` | `function eraMove(` |
| 7,705 | `HORMONES` | `var HORMONES =` |
| 7,706 | `analysisFor` | `function analysisFor(` |
| 7,712 | `dxRow` | `function dxRow(` |
| 7,713 | `dxText` | `function dxText(` |
| 7,714 | `dxSection` | `function dxSection(` |
| 7,715 | `systemHtml` | `function systemHtml(` |
| 7,718 | `dxHead` | `function dxHead(` |
| 7,723 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,732 | `acrossCycle` | `function acrossCycle(` |
| 7,739 | `trendCardHtml` | `function trendCardHtml(` |
| 7,745 | `spellLines` | `function spellLines(` |
| 7,752 | `trendSub` | `function trendSub(` |
| 7,753 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,757 | `replaceInsights` | `function replaceInsights(` |
| 7,763 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,767 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,780_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,781 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,782 | `cycleDataOn` | `function cycleDataOn(` |
| 7,783 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,803 | `wireCycleData` | `function wireCycleData(` |
| 7,818 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,863_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,864 | `eraOpen` | `var eraOpen =` |
| 7,865 | `kT` | `function kT(` |
| 7,869 | `upTo` | `function upTo(` |
| 7,870 | `pairAt` | `function pairAt(` |
| 7,871 | `eraReading` | `function eraReading(` |
| 7,881 | `eraFig` | `function eraFig(` |
| 7,888 | `eraValue` | `function eraValue(` |
| 7,894 | `eraRange` | `function eraRange(` |
| 7,899 | `eraMini` | `function eraMini(` |
| 7,904 | `eraCard` | `function eraCard(` |
| 7,923 | `eraCards` | `function eraCards(` |
| 7,929 | `eraShow` | `function eraShow(` |
| 7,936 | `enterEra` | `function enterEra(` |
| 7,943 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,950_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,951 | `rosterRow` | `function rosterRow(` |
| 7,964 | `__roster` | `var __roster =` |
| 7,965 | `readingRoster` | `function readingRoster(` |
| 7,972 | `withUnit` | `function withUnit(` |
| 7,973 | `pastFigure` | `function pastFigure(` |
| 7,977 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 7,979_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,980 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,004 | `placeWords` | `function placeWords(` |
| 8,008 | `symptomNote` | `function symptomNote(` |
| 8,015 | `symptomRow` | `function symptomRow(` |
| 8,022 | `cycleTrack` | `function cycleTrack(` |
| 8,037 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,045_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,046 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,095_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,096 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,127_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,128 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **9 compute a value**, 9 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,948–1,951 | `LIVE_CACHE` | Live data without a render refactor |
| 2,280–2,284 | `productivityRecord` | Productivity growth is not in this panel |
| 2,297–2,319 | `productivityReading` | Productivity growth is not in this panel |
| 2,315–2,319 | `confidenceRecord` | Consumer confidence |
| 2,326–4,256 | `confidenceReading` | Consumer confidence |
| 4,243–4,256 | `horizonRead` | A series' highest reading within a span |
| 4,625–4,858 | `marketReading` | The S&P 500, year by year |
| 4,845–4,858 | `seasonTrackAll` | The season, computed |
| 4,860–4,864 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,517 |
| `pressure-range` | 2,006 |
| `sheet-marker-deficit` | 7,514 |
| `sheet-metric-gdp` | 7,478 |
| `sheet-metric-households` | 7,536 |
| `sheet-metric-temp` | 7,454 |
| `sheet-metric-valuation` | 7,556 |
| `sheet-sign-activity` | 7,499 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,521 |
| `desire-range` | 5,377 |
| `fear-range` | 6,017 |
| `pressure-range` | 5,582 |
| `pulse-range` | 5,345 |
| `sheet-metric-gdp` | 7,479 |
| `sheet-metric-temp` | 7,455 |
| `sheet-metric-valuation` | 7,557 |
| `volume-range` | 5,361 |

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

