# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,311 lines**, about 676 KB, roughly **192 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `86b7a73` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,368 | the whole stylesheet, every token and rule |
| **Markup** | 1,369–1,754 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,755–8,278 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,279–8,311 | </body></html> |

Counts: **435** top-level functions, **190** top-level vars, **10** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,755_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,757 | `byId` | `function byId(` |
| 1,765 | `byIdMaybe` | `function byIdMaybe(` |
| 1,766 | `put` | `function put(` |
| 1,771 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,773_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,774 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,775 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,776 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,777 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,781 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,786_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,787 | `wheelMeta` | `var wheelMeta =` |
| 1,795 | `seasonOverride` | `var seasonOverride =` |
| 1,796 | `cycleNowNote` | `var cycleNowNote =` |
| 1,798 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,876 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,918 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,919 | `volatilityHistory` | `var volatilityHistory =` |
| 1,921 | `fiscalHistory` | `var fiscalHistory =` |
| 1,927 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,929 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,939 | `productivityHistory` | `var productivityHistory =` |
| 1,941 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |
| 1,943 | `confidenceHistory` | `var confidenceHistory =` |
| 1,945 | `gdpYoYBefore` | `var gdpYoYBefore =` |
| 1,946 | `cpiYoYBefore` | `var cpiYoYBefore =` |
| 1,947 | `sp500ReturnsBefore` | `var sp500ReturnsBefore =` |
| 1,948 | `gdpGrowthBefore` | `var gdpGrowthBefore =` |

### Live data without a render refactor

_line 1,950_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,957 | `merge` | `function merge(` |
| 1,964 | `LIVE` | `function LIVE(` |
| 1,978 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 1,981_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,983 | `paintReading` | `function paintReading(` |
| 2,000 | `repaintVolatility` | `function repaintVolatility(` |
| 2,004 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,009 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,013 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,018_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,019 | `READINGS` | `var READINGS =` |
| 2,074 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,075 | `KINDS` | `var KINDS =` |
| 2,076 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,090 | `receive` | `function receive(` |
| 2,106 | `liveAsOf` | `var liveAsOf =` |
| 2,107 | `fmtAsOf` | `function fmtAsOf(` |
| 2,112 | `applyLive` | `function applyLive(` |
| 2,125 | `shapeOk` | `function shapeOk(` |
| 2,132 | `repaintPolicy` | `function repaintPolicy(` |
| 2,138 | `GYN` | `var GYN =` |
| 2,165 | `refreshLiveData` | `function refreshLiveData(` |
| 2,183 | `fetchSiteData` | `function fetchSiteData(` |
| 2,199 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,204_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,205 | `yieldCurve` | `var yieldCurve =` |
| 2,211 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,212 | `curveAsOf` | `function curveAsOf(` |
| 2,217 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,218 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,223 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,225_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,226 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,227 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,228 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,229 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,230 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,232_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,233 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,239 | `uninvLagToday` | `var uninvLagToday =` |
| 2,244 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,251 | `gdpSrc` | `var gdpSrc =` |
| 2,255 | `labPanel` | `var labPanel =` |
| 2,284 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,285_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,292 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,293 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,320_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,321 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,327 | `confidenceWord` | `function confidenceWord(` |

### The deficit, year by year

_line 2,354_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,355 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,356 | `deficitHistory` | `var deficitHistory =` |
| 2,359 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,360 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,362 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,371_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,372 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,381_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,382 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,385 | `timelineSpan` | `function timelineSpan(` |
| 2,390 | `timelineFor` | `function timelineFor(` |
| 2,401 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,407_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,408 | `windowScale` | `function windowScale(` |
| 2,423 | `windowYears` | `function windowYears(` |
| 2,431 | `refName` | `function refName(` |
| 2,435 | `histReadEnsure` | `function histReadEnsure(` |
| 2,455 | `histReadFill` | `function histReadFill(` |
| 2,505 | `histAxisEnds` | `function histAxisEnds(` |
| 2,516 | `histLegend` | `function histLegend(` |
| 2,576 | `refitHistory` | `function refitHistory(` |
| 2,586 | `wireHistHover` | `function wireHistHover(` |
| 2,623 | `mWindowFrom` | `function mWindowFrom(` |
| 2,627 | `qWindowFrom` | `function qWindowFrom(` |
| 2,632 | `DEF_1983` | `var DEF_1983 =` |
| 2,633 | `defFrom` | `function defFrom(` |
| 2,638 | `deficitChart` | `function deficitChart(` |
| 2,706 | `deficitBlock` | `function deficitBlock(` |
| 2,746 | `buffettHistory` | `var buffettHistory =` |
| 2,748 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,749 | `hyDates` | `var hyDates =` |
| 2,750 | `hyOas` | `var hyOas =` |
| 2,751 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,758 | `hyAt` | `function hyAt(` |
| 2,762 | `hyLabel` | `function hyLabel(` |
| 2,763 | `hyNum` | `function hyNum(` |
| 2,764 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,772 | `hyQuarters` | `function hyQuarters(` |
| 2,780 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,782 | `capeHistory` | `var capeHistory =` |
| 2,784 | `longCycleSrc` | `var longCycleSrc =` |
| 2,800 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,814_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,815 | `sentiment` | `var sentiment =` |
| 2,831 | `valuation` | `var valuation =` |
| 2,852 | `valRow` | `function valRow(` |
| 2,857 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,860 | `coincident` | `var coincident =` |
| 2,900 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,906 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,907 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,908 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,910_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,911 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,912 | `m2vHistory` | `var m2vHistory =` |
| 2,928 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 2,980 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,022_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,023 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,024 | `DOTS` | `var DOTS =` |
| 3,026 | `headPickRow` | `function headPickRow(` |
| 3,032 | `histHead` | `function histHead(` |
| 3,047 | `headNoteIdx` | `var headNoteIdx =` |
| 3,048 | `headMenuHtml` | `function headMenuHtml(` |
| 3,073 | `headMenuFor` | `var headMenuFor =` |
| 3,074 | `headSubFor` | `var headSubFor =` |
| 3,075 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,104 | `histNote` | `function histNote(` |
| 3,105 | `meterFlagged` | `function meterFlagged(` |
| 3,112 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,135 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,149 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,162 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,167 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,171 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,183 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,197 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,216 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,247 | `desireBlock` | `function desireBlock(` |
| 3,258 | `volumeBlock` | `function volumeBlock(` |
| 3,270 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,282 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,289_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,290 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,291 | `m2Level` | `var m2Level =` |
| 3,312 | `m2Yoy` | `var m2Yoy =` |
| 3,313 | `M2_NORM` | `var M2_NORM =` |
| 3,315 | `volumeVerdict` | `function volumeVerdict(` |
| 3,323 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,324 | `unempHistory` | `var unempHistory =` |
| 3,330 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,339 | `NROU_NOW` | `var NROU_NOW =` |
| 3,340 | `unempState` | `function unempState(` |
| 3,346 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,398_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,399 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,408 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,464 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,465 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,466 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,467_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,469 | `householdsChart` | `function householdsChart(` |
| 3,519 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,572 | `GDP_NORM` | `var GDP_NORM =` |
| 3,573 | `gdpNowQ` | `var gdpNowQ =` |
| 3,574 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,596 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,647 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,692 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,700 | `velocityVerdict` | `function velocityVerdict(` |
| 3,708 | `derivePulseTag` | `function derivePulseTag(` |
| 3,714 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,746_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,747 | `seasonReading` | `var seasonReading =` |
| 3,791 | `frameworkRows` | `var frameworkRows =` |
| 3,801 | `vixRow` | `var vixRow =` |
| 3,802 | `VIX_CALM` | `var VIX_CALM =` |
| 3,803 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,807 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,814_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,815 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,824_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,825 | `calendarTodayY` | `var calendarTodayY =` |
| 3,827 | `vix3mClose` | `var vix3mClose =` |
| 3,828 | `fearCurve` | `function fearCurve(` |
| 3,833 | `curveVerdict` | `function curveVerdict(` |
| 3,838 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,847_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,848 | `modeBar` | `function modeBar(` |
| 3,855 | `pickerOpen` | `var pickerOpen =` |
| 3,856 | `cycleByName` | `function cycleByName(` |
| 3,860 | `openCycle` | `function openCycle(` |
| 3,864 | `cycleSlice` | `function cycleSlice(` |
| 3,872 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,880 | `cycleMonths` | `function cycleMonths(` |
| 3,888 | `histControls` | `function histControls(` |
| 3,897 | `pageCycle` | `function pageCycle(` |
| 3,901 | `cycLabel` | `function cycLabel(` |
| 3,905 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,910 | `cyclePicker` | `function cyclePicker(` |
| 3,929 | `rangeBar` | `function rangeBar(` |
| 3,936 | `trendOf` | `function trendOf(` |
| 3,951 | `TREND_ARROW` | `var TREND_ARROW =` |
| 3,955 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 3,966_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,967 | `yearOf` | `function yearOf(` |
| 3,968 | `mean` | `function mean(` |

### The record rows

_line 3,969_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,970 | `headSigma` | `function headSigma(` |
| 3,975 | `atQuarter` | `function atQuarter(` |
| 3,976 | `atMonth` | `function atMonth(` |
| 3,977 | `ordinal` | `function ordinal(` |
| 3,978 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 3,981_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,982 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 3,989 | `moreRow` | `function moreRow(` |
| 3,995 | `tempCaptionFull` | `var tempCaptionFull =` |
| 3,996 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,002_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,003 | `xLabelOf` | `function xLabelOf(` |
| 4,013 | `fitLine` | `function fitLine(` |
| 4,017 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,035_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,036 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,044 | `vGrid` | `function vGrid(` |
| 4,048 | `COL_FILL` | `var COL_FILL =` |
| 4,049 | `colPath` | `function colPath(` |
| 4,054 | `colWidth` | `function colWidth(` |
| 4,059 | `AXIS` | `var AXIS =` |
| 4,060 | `histFrame` | `function histFrame(` |
| 4,067 | `xLabel` | `function xLabel(` |
| 4,070 | `crossLine` | `function crossLine(` |
| 4,073 | `zeroRule` | `function zeroRule(` |
| 4,076 | `meanRule` | `function meanRule(` |
| 4,077 | `pendingGeom` | `var pendingGeom =` |
| 4,078 | `publishGeom` | `function publishGeom(` |
| 4,079 | `attachHistory` | `function attachHistory(` |
| 4,088 | `histBar` | `function histBar(` |
| 4,091 | `histTip` | `function histTip(` |
| 4,092 | `avgRule` | `function avgRule(` |
| 4,095 | `vhOpen` | `function vhOpen(` |
| 4,096 | `chartAxes` | `function chartAxes(` |
| 4,126 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,161_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,163 | `maxIn` | `function maxIn(` |
| 4,168 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,169 | `PEEK_W` | `var PEEK_W =` |
| 4,170 | `PEEK_H` | `var PEEK_H =` |
| 4,171 | `colPeek` | `function colPeek(` |
| 4,189 | `meterPeek` | `function meterPeek(` |
| 4,206 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,211 | `pressureZone` | `function pressureZone(` |
| 4,217 | `HZN_BACK` | `var HZN_BACK =` |
| 4,218 | `hznLast` | `function hznLast(` |
| 4,219 | `hznBack` | `function hznBack(` |
| 4,220 | `horizonWord` | `function horizonWord(` |
| 4,240 | `HZN_METERS` | `var HZN_METERS =` |
| 4,248 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,269 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,274 | `RISK_RISK` | `var RISK_RISK =` |
| 4,279 | `riskCell` | `function riskCell(` |
| 4,280 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,310 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,335_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,336 | `pulseClipN` | `var pulseClipN =` |
| 4,337 | `beatPath` | `function beatPath(` |
| 4,354 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,368 | `pulsePeek` | `function pulsePeek(` |
| 4,371 | `pulseBlock` | `function pulseBlock(` |
| 4,388 | `CHEV` | `var CHEV =` |
| 4,389 | `peekCard` | `function peekCard(` |
| 4,408 | `dropSvg` | `function dropSvg(` |
| 4,410 | `gaugeSvg` | `function gaugeSvg(` |
| 4,414 | `diamondSvg` | `function diamondSvg(` |
| 4,418 | `sproutSvg` | `function sproutSvg(` |
| 4,426 | `markSvg` | `function markSvg(` |
| 4,429 | `heartSvg` | `function heartSvg(` |
| 4,431 | `flameSvg` | `function flameSvg(` |
| 4,434 | `clockSvg` | `function clockSvg(` |
| 4,435 | `thermoSvg` | `function thermoSvg(` |
| 4,438 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,440 | `personSvg` | `function personSvg(` |
| 4,442 | `bookSvg` | `function bookSvg(` |
| 4,445 | `ecgSvg` | `function ecgSvg(` |
| 4,447 | `circulationSvg` | `function circulationSvg(` |
| 4,448 | `boltSvg` | `function boltSvg(` |
| 4,449 | `houseSvg` | `function houseSvg(` |
| 4,452 | `marketSvg` | `function marketSvg(` |
| 4,455 | `bagSvg` | `function bagSvg(` |
| 4,458 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,466_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,467 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,468 | `dsrHistory` | `var dsrHistory =` |
| 4,469 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,470 | `savHistory` | `var savHistory =` |
| 4,473 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,482 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,483 | `dsrNow` | `var dsrNow =` |
| 4,484 | `savNow` | `var savNow =` |
| 4,485 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,486 | `householdsWord` | `function householdsWord(` |
| 4,493 | `householdsNow` | `var householdsNow =` |
| 4,494 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,511 | `savInfoHtml` | `function savInfoHtml(` |
| 4,529 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,536 | `curveSub` | `var curveSub =` |
| 4,537 | `vixPct` | `function vixPct(` |
| 4,541 | `curveNoteFull` | `var curveNoteFull =` |
| 4,552 | `volatilityRing` | `function volatilityRing(` |
| 4,557 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,558 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,573 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,578_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,579 | `sp500Years` | `var sp500Years =` |
| 4,580 | `marketWord` | `function marketWord(` |
| 4,584 | `marketCol` | `function marketCol(` |
| 4,585 | `marketPeek` | `function marketPeek(` |
| 4,609 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,619 | `marketCycles` | `var marketCycles =` |
| 4,736 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,738_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,739 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,740 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,745_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,746 | `TIMING` | `var TIMING =` |
| 4,752 | `CATEGORIES` | `var CATEGORIES =` |
| 4,758 | `ROSTER` | `var ROSTER =` |
| 4,808 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,809 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,811 | `pageState` | `function pageState(` |
| 4,816 | `pageMode` | `var pageMode =` |
| 4,817 | `pageCycles` | `var pageCycles =` |
| 4,818 | `pageRange` | `var pageRange =` |
| 4,819 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,820 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,821 | `keyed` | `function keyed(` |
| 4,828 | `hyMonths` | `function hyMonths(` |
| 4,831 | `prettyKey` | `function prettyKey(` |
| 4,836 | `lastDate` | `function lastDate(` |
| 4,837 | `compiledDay` | `function compiledDay(` |
| 4,838 | `labPeriod` | `function labPeriod(` |
| 4,839 | `rosterFor` | `function rosterFor(` |
| 4,840 | `rowReadings` | `function rowReadings(` |
| 4,841 | `indOf` | `function indOf(` |
| 4,842 | `peekOf` | `function peekOf(` |
| 4,847 | `cardDate` | `function cardDate(` |
| 4,848 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,869_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,870 | `slopeOf` | `function slopeOf(` |
| 4,875 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,876 | `readSeason` | `function readSeason(` |
| 4,895 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,896 | `qLabel` | `function qLabel(` |
| 4,912 | `SEASON_YEARS` | `var SEASON_YEARS =` |
| 4,929 | `seasonTrack` | `var seasonTrack =` |
| 4,930 | `closingReading` | `function closingReading(` |
| 4,940 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,942_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,943 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,944 | `seasonTitle` | `function seasonTitle(` |
| 4,945 | `monthLabel` | `function monthLabel(` |
| 4,946 | `cycleReturns` | `function cycleReturns(` |
| 4,956 | `cycleModel` | `function cycleModel(` |
| 4,987 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,995 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,001 | `nowModel` | `var nowModel =` |
| 5,002 | `readingNow` | `var readingNow =` |
| 5,003 | `cpiNow` | `var cpiNow =` |
| 5,004 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,005 | `currentSeason` | `var currentSeason =` |
| 5,006 | `seasonWhy` | `var seasonWhy =` |
| 5,008 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 5,010_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,011 | `rankToDate` | `function rankToDate(` |
| 5,015 | `marketCache` | `var marketCache =` |
| 5,016 | `marketMonths` | `function marketMonths(` |
| 5,023 | `yearAfter` | `function yearAfter(` |
| 5,027 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 5,032_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,033 | `rankIn` | `function rankIn(` |
| 5,038 | `moodLists` | `var moodLists =` |
| 5,039 | `moodSeries` | `function moodSeries(` |
| 5,047 | `moodAt` | `function moodAt(` |
| 5,053 | `MOOD_TURN` | `var MOOD_TURN =` |
| 5,054 | `MOOD_RISING` | `var MOOD_RISING =` |
| 5,055 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 5,056 | `moodWord` | `function moodWord(` |
| 5,060 | `moodRead` | `function moodRead(` |
| 5,067 | `moodCache` | `var moodCache =` |
| 5,068 | `moodTrack` | `function moodTrack(` |
| 5,074 | `moodToday` | `function moodToday(` |
| 5,079 | `cycleStory` | `function cycleStory(` |
| 5,090 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,101 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,102 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,103 | `spreadLabel` | `function spreadLabel(` |
| 5,107 | `policyFacts` | `function policyFacts(` |
| 5,114 | `policyFactRows` | `function policyFactRows(` |
| 5,120 | `allSources` | `var allSources =` |
| 5,135 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,147_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,148 | `SVG_NS` | `var SVG_NS =` |
| 5,149 | `svgEl` | `function svgEl(` |
| 5,154 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,188_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,189 | `clampPct` | `function clampPct(` |
| 5,192 | `detailTexts` | `var detailTexts =` |
| 5,193 | `detailSlots` | `var detailSlots =` |
| 5,194 | `detailSlot` | `function detailSlot(` |
| 5,204 | `metricSheet` | `function metricSheet(` |
| 5,209 | `ledeHtml` | `function ledeHtml(` |
| 5,210 | `facts` | `function facts(` |
| 5,211 | `factsFrom` | `function factsFrom(` |
| 5,215 | `expandBtn` | `function expandBtn(` |
| 5,219 | `sheetRenderers` | `var sheetRenderers =` |
| 5,220 | `drawsPage` | `function drawsPage(` |
| 5,221 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,250_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,253 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,254_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,255 | `subjectRow` | `function subjectRow(` |
| 5,265 | `subjectIcon` | `function subjectIcon(` |
| 5,266 | `srcHtml` | `function srcHtml(` |
| 5,267 | `timingMark` | `function timingMark(` |
| 5,275 | `timingPill` | `function timingPill(` |
| 5,284 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,292 | `seatPageFoot` | `function seatPageFoot(` |
| 5,304 | `timingMembers` | `var timingMembers =` |
| 5,306 | `registerTiming` | `function registerTiming(` |
| 5,308 | `headHtml` | `function headHtml(` |
| 5,313 | `heldHighlights` | `var heldHighlights =` |
| 5,314 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,341_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,342 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,343 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,351 | `withLatestPoint` | `function withLatestPoint(` |
| 5,356 | `pressureMaturities` | `function pressureMaturities(` |
| 5,380 | `registerFlowPages` | `function registerFlowPages(` |
| 5,434 | `renderPressureRow` | `function renderPressureRow(` |
| 5,442 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,461 | `ylmColumns` | `function ylmColumns(` |
| 5,481 | `ylmFitLine` | `function ylmFitLine(` |
| 5,493 | `pressureHead` | `function pressureHead(` |
| 5,511 | `showPressureView` | `function showPressureView(` |
| 5,516 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,649_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,650 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,687_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,688 | `spreadSeries` | `function spreadSeries(` |
| 5,732 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,858_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,859 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: the Treasury spreads, inside Pressure

_line 5,885_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,886 | `renderHorizonPage` | `function renderHorizonPage(` |
| 5,910 | `spreadInsights` | `function spreadInsights(` |

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

_line 6,145_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,146 | `totalRiseIn` | `function totalRiseIn(` |
| 6,156 | `eraInflation` | `function eraInflation(` |
| 6,167 | `eraGrowth` | `function eraGrowth(` |
| 6,183 | `fmtSigned` | `function fmtSigned(` |
| 6,184 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,185 | `growthShown` | `function growthShown(` |
| 6,186 | `growthShownCap` | `function growthShownCap(` |
| 6,187 | `phaseClass` | `function phaseClass(` |
| 6,188 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,192 | `cycleViewEl` | `var cycleViewEl =` |
| 6,193 | `shownEra` | `var shownEra =` |
| 6,194 | `calendarReset` | `var calendarReset =` |
| 6,195 | `metricPageReset` | `var metricPageReset =` |
| 6,196 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,197 | `topbarBack` | `var topbarBack =` |
| 6,198 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,205_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,206 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,287_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,288 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,306_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,307 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,328_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,330 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,331 | `hubSet` | `function hubSet(` |
| 6,339 | `hubOpen` | `function hubOpen(` |
| 6,346 | `quarterCards` | `function quarterCards(` |
| 6,357 | `popHead` | `function popHead(` |
| 6,358 | `hubLine` | `function hubLine(` |
| 6,359 | `quarterSheet` | `function quarterSheet(` |
| 6,364 | `quarterPopup` | `function quarterPopup(` |
| 6,386 | `hubShowDefault` | `function hubShowDefault(` |
| 6,393 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,398 | `hubShowYear` | `function hubShowYear(` |
| 6,408 | `renderCycleDial` | `function renderCycleDial(` |
| 6,489 | `m2Step` | `function m2Step(` |
| 6,492 | `heatStep` | `function heatStep(` |
| 6,496 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,507_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,508 | `renderCycleView` | `function renderCycleView(` |
| 6,514 | `shownEraModel` | `var shownEraModel =` |
| 6,515 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,517_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,518 | `stripGroupName` | `var stripGroupName =` |
| 6,519 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,547 | `marketStripHtml` | `function marketStripHtml(` |
| 6,581 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,582 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,611_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,612 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,618 | `debtSvg` | `function debtSvg(` |
| 6,619 | `interestSvg` | `function interestSvg(` |
| 6,621 | `budgetSvg` | `function budgetSvg(` |
| 6,623 | `lede` | `function lede(` |
| 6,624 | `periodOf` | `function periodOf(` |
| 6,625 | `meterWord` | `function meterWord(` |
| 6,626 | `splitPages` | `function splitPages(` |
| 6,643 | `confidencePage` | `function confidencePage(` |
| 6,649 | `marketPage` | `function marketPage(` |
| 6,655 | `productivityPage` | `function productivityPage(` |
| 6,660 | `splitSpec` | `function splitSpec(` |
| 6,666 | `splitInfo` | `function splitInfo(` |
| 6,670 | `periodTicks` | `function periodTicks(` |
| 6,675 | `periodOfSeries` | `function periodOfSeries(` |
| 6,676 | `drawSplit` | `function drawSplit(` |
| 6,693 | `mountSplit` | `function mountSplit(` |
| 6,706 | `splitPeek` | `function splitPeek(` |
| 6,713 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,721 | `deficitPeek` | `function deficitPeek(` |
| 6,725 | `catSheet` | `function catSheet(` |
| 6,730 | `catList` | `function catList(` |
| 6,731 | `groupId` | `function groupId(` |
| 6,732 | `groupCard` | `function groupCard(` |
| 6,740 | `groupSheet` | `function groupSheet(` |
| 6,747 | `appendPicks` | `function appendPicks(` |
| 6,755 | `doorSel` | `function doorSel(` |
| 6,756 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,768_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,769 | `buffettInsight` | `function buffettInsight(` |
| 6,784 | `debtInsight` | `function debtInsight(` |
| 6,799 | `productivityInsight` | `function productivityInsight(` |
| 6,809 | `confidenceInsight` | `function confidenceInsight(` |
| 6,820 | `ORDINAL` | `var ORDINAL =` |
| 6,821 | `marketInsight` | `function marketInsight(` |
| 6,833 | `interestInsight` | `function interestInsight(` |
| 6,848 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,871 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,891 | `activityStackHtml` | `function activityStackHtml(` |
| 6,901 | `seatTemperature` | `function seatTemperature(` |
| 6,909 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,942_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,943 | `partsOf` | `function partsOf(` |
| 6,952 | `authored` | `function authored(` |
| 6,953 | `registerRoster` | `function registerRoster(` |
| 6,975 | `indRow` | `function indRow(` |
| 6,979 | `IND_ORDER` | `var IND_ORDER =` |
| 6,980 | `indGroupRow` | `function indGroupRow(` |
| 6,985 | `catMembers` | `function catMembers(` |
| 6,993 | `indRows` | `function indRows(` |
| 7,007 | `indCategoryHtml` | `function indCategoryHtml(` |
| 7,014 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 7,016_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,017 | `NAV` | `var NAV =` |
| 7,018 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,112_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,113 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,160_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,161 | `qPretty` | `function qPretty(` |
| 7,162 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,163 | `peekArt` | `function peekArt(` |
| 7,164 | `indPeriod` | `function indPeriod(` |
| 7,168 | `catItem` | `function catItem(` |
| 7,176 | `catCard` | `function catCard(` |
| 7,218 | `insightCirculation` | `function insightCirculation(` |
| 7,251 | `insightWeather` | `function insightWeather(` |
| 7,291 | `seasonCards` | `function seasonCards(` |
| 7,297 | `marketCycleCard` | `function marketCycleCard(` |
| 7,309 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,313 | `seasonName` | `function seasonName(` |
| 7,314 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,321 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,326 | `curvePath` | `function curvePath(` |
| 7,334 | `moodCallout` | `function moodCallout(` |
| 7,338 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,350 | `moodInfo` | `function moodInfo(` |
| 7,359 | `moodFigures` | `function moodFigures(` |
| 7,365 | `moodCard` | `function moodCard(` |
| 7,369 | `insightMood` | `function insightMood(` |
| 7,375 | `storyBeats` | `function storyBeats(` |
| 7,386 | `storyText` | `function storyText(` |
| 7,390 | `PAIR_ART` | `var PAIR_ART =` |
| 7,396 | `placeSignPair` | `function placeSignPair(` |
| 7,419 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,435 | `buildCategories` | `function buildCategories(` |
| 7,451 | `tempPeek` | `function tempPeek(` |
| 7,457 | `gdpPeek` | `function gdpPeek(` |
| 7,462 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,489_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,490 | `capeFmt1` | `function capeFmt1(` |
| 7,491 | `actCycleMonths` | `function actCycleMonths(` |
| 7,499 | `householdsHighlights` | `function householdsHighlights(` |
| 7,518 | `redrawSheet` | `function redrawSheet(` |
| 7,522 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,567 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,604 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,651 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,681 | `valuationHighlights` | `function valuationHighlights(` |
| 7,694 | `tempHighlights` | `function tempHighlights(` |
| 7,711 | `gdpHighlights` | `function gdpHighlights(` |
| 7,726 | `renderMetricPages` | `function renderMetricPages(` |
| 7,736 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,746_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,747 | `todayFace` | `function todayFace(` |
| 7,753 | `readDoor` | `function readDoor(` |
| 7,761 | `pct` | `function pct(` |
| 7,762 | `rosterRows` | `function rosterRows(` |
| 7,763 | `eraEnds` | `function eraEnds(` |
| 7,770 | `eraMove` | `function eraMove(` |
| 7,774 | `HORMONES` | `var HORMONES =` |
| 7,775 | `analysisFor` | `function analysisFor(` |
| 7,781 | `dxRow` | `function dxRow(` |
| 7,782 | `dxText` | `function dxText(` |
| 7,783 | `dxSection` | `function dxSection(` |
| 7,784 | `systemHtml` | `function systemHtml(` |
| 7,787 | `dxHead` | `function dxHead(` |
| 7,792 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,801 | `acrossCycle` | `function acrossCycle(` |
| 7,808 | `moodDoor` | `function moodDoor(` |
| 7,813 | `trendText` | `function trendText(` |
| 7,814 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,818 | `replaceInsights` | `function replaceInsights(` |
| 7,824 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,828 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,841_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,842 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,843 | `cycleDataOn` | `function cycleDataOn(` |
| 7,844 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,864 | `wireCycleData` | `function wireCycleData(` |
| 7,879 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,924_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,925 | `eraOpen` | `var eraOpen =` |
| 7,926 | `kT` | `function kT(` |
| 7,930 | `upTo` | `function upTo(` |
| 7,931 | `pairAt` | `function pairAt(` |
| 7,932 | `eraReading` | `function eraReading(` |
| 7,942 | `eraFig` | `function eraFig(` |
| 7,949 | `eraValue` | `function eraValue(` |
| 7,955 | `eraRange` | `function eraRange(` |
| 7,960 | `eraMini` | `function eraMini(` |
| 7,965 | `eraCard` | `function eraCard(` |
| 7,984 | `eraCards` | `function eraCards(` |
| 7,990 | `eraShow` | `function eraShow(` |
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

**0 render at load** (side effect only) and **10 compute a value**, 10 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,953–1,956 | `LIVE_CACHE` | Live data without a render refactor |
| 2,287–2,291 | `productivityRecord` | Productivity growth is not in this panel |
| 2,304–2,326 | `productivityReading` | Productivity growth is not in this panel |
| 2,322–2,326 | `confidenceRecord` | Consumer confidence |
| 2,333–4,239 | `confidenceReading` | Consumer confidence |
| 4,226–4,239 | `horizonRead` | A series' highest reading within a span |
| 4,590–4,910 | `marketReading` | The S&P 500, year by year |
| 4,897–4,910 | `seasonTrackAll` | The season, computed |
| 4,913–4,928 | `seasonTrackYears` | The season, computed |
| 4,935–4,939 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,586 |
| `pressure-range` | 2,011 |
| `sheet-marker-deficit` | 7,583 |
| `sheet-metric-gdp` | 7,547 |
| `sheet-metric-households` | 7,605 |
| `sheet-metric-temp` | 7,523 |
| `sheet-metric-valuation` | 7,625 |
| `sheet-sign-activity` | 7,568 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,590 |
| `desire-range` | 5,416 |
| `fear-range` | 6,056 |
| `pressure-range` | 5,621 |
| `pulse-range` | 5,384 |
| `sheet-metric-gdp` | 7,548 |
| `sheet-metric-temp` | 7,524 |
| `sheet-metric-valuation` | 7,626 |
| `volume-range` | 5,400 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

_none found — if that is wrong, the pattern in `tools/make-map.py` needs updating._

## Stylesheet, section by section

| Line | Section |
|---|---|
| 145 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 234 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 270 | season strip |
| 296 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 360 | tab bar (app-style segmented navigation) |
| 395 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 410 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 483 | journal (editorial content tab) |
| 489 | content tab: reading companion |
| 538 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 731 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 806 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 879 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,048 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,063 | The symptoms: a cycle's years against today |
| 1,140 | hero: yield curve |
| 1,172 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,191 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,218 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,226 | long cycle (structural layer) |
| 1,233 | indicator grid |
| 1,259 | info icon + popover (progressive disclosure for longer notes) |
| 1,273 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,357 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (99), which is what the renderers fill:

| Line | id |
|---|---|
| 1,373 | `topbar-back` |
| 1,376 | `topbar-title` |
| 1,377 | `menu-btn` |
| 1,391 | `main` |
| 1,394 | `cycle-view` |
| 1,397 | `cycle-kicker` |
| 1,400 | `cycle-dial` |
| 1,402 | `season-wheel-hub-open` |
| 1,403 | `season-wheel-hub-date` |
| 1,404 | `season-wheel-hub-theme` |
| 1,405 | `season-wheel-hub-detail` |
| 1,414 | `today-analysis` |
| 1,415 | `peek-row` |
| 1,416 | `sheet-metric-temp` |
| 1,417 | `temp-timing` |
| 1,418 | `temp-chart` |
| 1,419 | `temp-rangebar` |
| 1,421 | `temp-head` |
| 1,422 | `temp-history` |
| 1,423 | `temp-hist-tooltip` |
| 1,424 | `temp-trend` |
| 1,426 | `temp-highlights` |
| 1,428 | `sheet-metric-gdp` |
| 1,429 | `gdp-timing` |
| 1,430 | `gdp-chart` |
| 1,431 | `gdp-rangebar` |
| 1,433 | `gdp-head` |
| 1,434 | `gdp-history` |
| 1,435 | `gdp-hist-tooltip` |
| 1,436 | `gdp-trend` |
| 1,438 | `gdp-highlights` |
| 1,442 | `sheet-marker-deficit` |
| 1,442 | `deficit-timing` |
| 1,444 | `sheet-metric-households` |
| 1,445 | `households-timing` |
| 1,446 | `households-chart` |
| 1,447 | `households-highlights` |
| 1,450 | `sheet-metric-valuation` |
| 1,451 | `valuation-timing` |
| 1,452 | `valuation-chart` |
| 1,453 | `valuation-highlights` |
| 1,460 | `subj-value-hormones` |
| 1,461 | `subj-say-hormones` |
| 1,467 | `hormones-history` |
| 1,468 | `hormones-insights` |
| 1,477 | `subj-value-pressure` |
| 1,478 | `subj-say-pressure` |
| 1,484 | `pressure-timeline` |
| 1,486 | `pressure-head` |
| 1,487 | `ylm-shell` |
| 1,488 | `ylm-svg` |
| 1,489 | `ylm-tooltip` |
| 1,491 | `spread-history-shell` |
| 1,492 | `spread-history-svg` |
| 1,493 | `spread-history-tooltip` |
| 1,495 | `ylm-trend` |
| 1,497 | `pressure-insights` |
| 1,504 | `subj-ring-sentiment` |
| 1,507 | `subj-value-sentiment` |
| 1,508 | `subj-say-sentiment` |
| 1,509 | `subj-spark-sentiment` |
| 1,515 | `fear-history` |
| 1,516 | `curve-highlights` |
| 1,522 | `signs-list` |
| 1,528 | `calendar-list` |
| 1,535 | `cycle-data` |
| 1,537 | `cycle-legend` |
| 1,538 | `cycle-list` |
| 1,539 | `cycle-more` |
| 1,540 | `cycle-more-label` |
| 1,545 | `calendar-cycle` |
| 1,565 | `search-home` |
| 1,567 | `search-input` |
| 1,569 | `search-list` |
| 1,573 | `more-menu` |
| 1,576 | `menu-back` |
| 1,590 | `sources-open` |
| 1,598 | `appearance-current` |
| 1,604 | `sheet-howto` |
| 1,647 | `sheet-book` |
| 1,678 | `seasons-kicker` |
| 1,680 | `seasons-rows` |
| 1,683 | `framework-kicker` |
| 1,686 | `framework-rows` |
| 1,696 | `sheet-appearance` |
| 1,704 | `theme-toggle` |
| 1,711 | `sheet-contact` |
| 1,720 | `contact-form` |
| 1,721 | `contact-title` |
| 1,722 | `contact-message` |
| 1,724 | `contact-hint` |
| 1,725 | `contact-send` |
| 1,731 | `sheet-sources` |
| 1,734 | `sources-back` |
| 1,739 | `asof-text` |
| 1,740 | `sources-groups` |
| 1,746 | `detail-backdrop` |
| 1,748 | `detail-modal-close` |
| 1,749 | `detail-modal-body` |

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

