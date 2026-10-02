# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,247 lines**, about 670 KB, roughly **190 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `90c2c63` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,371 | the whole stylesheet, every token and rule |
| **Markup** | 1,372–1,755 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,756–8,214 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,215–8,247 | </body></html> |

Counts: **426** top-level functions, **188** top-level vars, **9** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,756_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,758 | `byId` | `function byId(` |
| 1,766 | `byIdMaybe` | `function byIdMaybe(` |
| 1,767 | `put` | `function put(` |
| 1,772 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,774_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,775 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,776 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,777 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,778 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,782 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,787_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,788 | `wheelMeta` | `var wheelMeta =` |
| 1,796 | `seasonOverride` | `var seasonOverride =` |
| 1,797 | `cycleNowNote` | `var cycleNowNote =` |
| 1,799 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,877 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,919 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,920 | `volatilityHistory` | `var volatilityHistory =` |
| 1,922 | `fiscalHistory` | `var fiscalHistory =` |
| 1,928 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,930 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,940 | `productivityHistory` | `var productivityHistory =` |
| 1,942 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |
| 1,944 | `confidenceHistory` | `var confidenceHistory =` |
| 1,946 | `gdpYoYBefore` | `var gdpYoYBefore =` |
| 1,947 | `cpiYoYBefore` | `var cpiYoYBefore =` |
| 1,948 | `sp500ReturnsBefore` | `var sp500ReturnsBefore =` |
| 1,949 | `gdpGrowthBefore` | `var gdpGrowthBefore =` |

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
| 2,252 | `gdpSrc` | `var gdpSrc =` |
| 2,256 | `labPanel` | `var labPanel =` |
| 2,285 | `labRow` | `function labRow(` |

### Productivity growth is not in this panel

_line 2,286_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,293 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,294 | `productivityWord` | `function productivityWord(` |

### Consumer confidence

_line 2,321_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,322 | `CONFIDENCE_LINE` | `var CONFIDENCE_LINE =` |
| 2,328 | `confidenceWord` | `function confidenceWord(` |

### The deficit, year by year

_line 2,355_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,356 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,357 | `deficitHistory` | `var deficitHistory =` |
| 2,360 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,361 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,363 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,372_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,373 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,382_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,383 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,386 | `timelineSpan` | `function timelineSpan(` |
| 2,391 | `timelineFor` | `function timelineFor(` |
| 2,402 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,408_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,409 | `windowScale` | `function windowScale(` |
| 2,424 | `windowYears` | `function windowYears(` |
| 2,432 | `refName` | `function refName(` |
| 2,436 | `histReadEnsure` | `function histReadEnsure(` |
| 2,456 | `histReadFill` | `function histReadFill(` |
| 2,506 | `histAxisEnds` | `function histAxisEnds(` |
| 2,517 | `histLegend` | `function histLegend(` |
| 2,577 | `refitHistory` | `function refitHistory(` |
| 2,587 | `wireHistHover` | `function wireHistHover(` |
| 2,624 | `mWindowFrom` | `function mWindowFrom(` |
| 2,628 | `qWindowFrom` | `function qWindowFrom(` |
| 2,633 | `DEF_1983` | `var DEF_1983 =` |
| 2,634 | `defFrom` | `function defFrom(` |
| 2,639 | `deficitChart` | `function deficitChart(` |
| 2,707 | `deficitBlock` | `function deficitBlock(` |
| 2,747 | `buffettHistory` | `var buffettHistory =` |
| 2,749 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,750 | `hyDates` | `var hyDates =` |
| 2,751 | `hyOas` | `var hyOas =` |
| 2,752 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,759 | `hyAt` | `function hyAt(` |
| 2,763 | `hyLabel` | `function hyLabel(` |
| 2,764 | `hyNum` | `function hyNum(` |
| 2,765 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,773 | `hyQuarters` | `function hyQuarters(` |
| 2,781 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,783 | `capeHistory` | `var capeHistory =` |
| 2,785 | `longCycleSrc` | `var longCycleSrc =` |
| 2,801 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,815_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,816 | `sentiment` | `var sentiment =` |
| 2,832 | `valuation` | `var valuation =` |
| 2,853 | `valRow` | `function valRow(` |
| 2,858 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,861 | `coincident` | `var coincident =` |
| 2,901 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,907 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,908 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,909 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,911_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,912 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,913 | `m2vHistory` | `var m2vHistory =` |
| 2,929 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 2,981 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,023_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,024 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,025 | `DOTS` | `var DOTS =` |
| 3,027 | `headPickRow` | `function headPickRow(` |
| 3,033 | `histHead` | `function histHead(` |
| 3,048 | `headNoteIdx` | `var headNoteIdx =` |
| 3,049 | `headMenuHtml` | `function headMenuHtml(` |
| 3,074 | `headMenuFor` | `var headMenuFor =` |
| 3,075 | `headSubFor` | `var headSubFor =` |
| 3,076 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,105 | `histNote` | `function histNote(` |
| 3,106 | `meterFlagged` | `function meterFlagged(` |
| 3,113 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,136 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,150 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,163 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,168 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,172 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,184 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,198 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,217 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,248 | `desireBlock` | `function desireBlock(` |
| 3,259 | `volumeBlock` | `function volumeBlock(` |
| 3,271 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,283 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,290_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,291 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,292 | `m2Level` | `var m2Level =` |
| 3,313 | `m2Yoy` | `var m2Yoy =` |
| 3,314 | `M2_NORM` | `var M2_NORM =` |
| 3,316 | `volumeVerdict` | `function volumeVerdict(` |
| 3,324 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,325 | `unempHistory` | `var unempHistory =` |
| 3,331 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,340 | `NROU_NOW` | `var NROU_NOW =` |
| 3,341 | `unempState` | `function unempState(` |
| 3,347 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,399_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,400 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,409 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,465 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,466 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,467 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,468_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,470 | `householdsChart` | `function householdsChart(` |
| 3,520 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,573 | `GDP_NORM` | `var GDP_NORM =` |
| 3,574 | `gdpNowQ` | `var gdpNowQ =` |
| 3,575 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,597 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,648 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,693 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,701 | `velocityVerdict` | `function velocityVerdict(` |
| 3,709 | `derivePulseTag` | `function derivePulseTag(` |
| 3,715 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,747_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,748 | `seasonReading` | `var seasonReading =` |
| 3,792 | `frameworkRows` | `var frameworkRows =` |
| 3,802 | `vixRow` | `var vixRow =` |
| 3,803 | `VIX_CALM` | `var VIX_CALM =` |
| 3,804 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,808 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,815_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,816 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,825_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,826 | `calendarTodayY` | `var calendarTodayY =` |
| 3,828 | `vix3mClose` | `var vix3mClose =` |
| 3,829 | `fearCurve` | `function fearCurve(` |
| 3,834 | `curveVerdict` | `function curveVerdict(` |
| 3,839 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,848_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,849 | `modeBar` | `function modeBar(` |
| 3,856 | `pickerOpen` | `var pickerOpen =` |
| 3,857 | `cycleByName` | `function cycleByName(` |
| 3,861 | `openCycle` | `function openCycle(` |
| 3,865 | `cycleSlice` | `function cycleSlice(` |
| 3,873 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,881 | `cycleMonths` | `function cycleMonths(` |
| 3,889 | `histControls` | `function histControls(` |
| 3,898 | `pageCycle` | `function pageCycle(` |
| 3,902 | `cycLabel` | `function cycLabel(` |
| 3,906 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,911 | `cyclePicker` | `function cyclePicker(` |
| 3,930 | `rangeBar` | `function rangeBar(` |
| 3,937 | `trendOf` | `function trendOf(` |
| 3,952 | `TREND_ARROW` | `var TREND_ARROW =` |
| 3,956 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 3,967_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,968 | `yearOf` | `function yearOf(` |
| 3,969 | `mean` | `function mean(` |

### The record rows

_line 3,970_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,971 | `headSigma` | `function headSigma(` |
| 3,976 | `atQuarter` | `function atQuarter(` |
| 3,977 | `atMonth` | `function atMonth(` |
| 3,978 | `ordinal` | `function ordinal(` |
| 3,979 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 3,982_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,983 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 3,990 | `moreRow` | `function moreRow(` |
| 3,996 | `tempCaptionFull` | `var tempCaptionFull =` |
| 3,997 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,003_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,004 | `xLabelOf` | `function xLabelOf(` |
| 4,014 | `fitLine` | `function fitLine(` |
| 4,018 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,036_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,037 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,045 | `vGrid` | `function vGrid(` |
| 4,049 | `COL_FILL` | `var COL_FILL =` |
| 4,050 | `colPath` | `function colPath(` |
| 4,055 | `colWidth` | `function colWidth(` |
| 4,060 | `AXIS` | `var AXIS =` |
| 4,061 | `histFrame` | `function histFrame(` |
| 4,068 | `xLabel` | `function xLabel(` |
| 4,071 | `crossLine` | `function crossLine(` |
| 4,074 | `zeroRule` | `function zeroRule(` |
| 4,077 | `meanRule` | `function meanRule(` |
| 4,078 | `pendingGeom` | `var pendingGeom =` |
| 4,079 | `publishGeom` | `function publishGeom(` |
| 4,080 | `attachHistory` | `function attachHistory(` |
| 4,089 | `histBar` | `function histBar(` |
| 4,092 | `histTip` | `function histTip(` |
| 4,093 | `avgRule` | `function avgRule(` |
| 4,096 | `vhOpen` | `function vhOpen(` |
| 4,097 | `chartAxes` | `function chartAxes(` |
| 4,127 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,162_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,164 | `maxIn` | `function maxIn(` |
| 4,169 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,170 | `PEEK_W` | `var PEEK_W =` |
| 4,171 | `PEEK_H` | `var PEEK_H =` |
| 4,172 | `colPeek` | `function colPeek(` |
| 4,190 | `meterPeek` | `function meterPeek(` |
| 4,207 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,212 | `pressureZone` | `function pressureZone(` |
| 4,218 | `HZN_BACK` | `var HZN_BACK =` |
| 4,219 | `hznLast` | `function hznLast(` |
| 4,220 | `hznBack` | `function hznBack(` |
| 4,221 | `horizonWord` | `function horizonWord(` |
| 4,241 | `HZN_METERS` | `var HZN_METERS =` |
| 4,249 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,270 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,275 | `RISK_RISK` | `var RISK_RISK =` |
| 4,280 | `riskCell` | `function riskCell(` |
| 4,281 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,311 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,336_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,337 | `pulseClipN` | `var pulseClipN =` |
| 4,338 | `beatPath` | `function beatPath(` |
| 4,355 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,369 | `pulsePeek` | `function pulsePeek(` |
| 4,372 | `pulseBlock` | `function pulseBlock(` |
| 4,389 | `CHEV` | `var CHEV =` |
| 4,390 | `peekCard` | `function peekCard(` |
| 4,409 | `dropSvg` | `function dropSvg(` |
| 4,411 | `volumeSvg` | `function volumeSvg(` |
| 4,415 | `gaugeSvg` | `function gaugeSvg(` |
| 4,419 | `diamondSvg` | `function diamondSvg(` |
| 4,423 | `sproutSvg` | `function sproutSvg(` |
| 4,431 | `markSvg` | `function markSvg(` |
| 4,434 | `heartSvg` | `function heartSvg(` |
| 4,436 | `batterySvg` | `function batterySvg(` |
| 4,439 | `flameSvg` | `function flameSvg(` |
| 4,442 | `clockSvg` | `function clockSvg(` |
| 4,443 | `thermoSvg` | `function thermoSvg(` |
| 4,446 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,448 | `trendUpSvg` | `function trendUpSvg(` |
| 4,450 | `ecgSvg` | `function ecgSvg(` |
| 4,452 | `circulationSvg` | `function circulationSvg(` |
| 4,453 | `weatherSvg` | `function weatherSvg(` |
| 4,461 | `moodSvg` | `function moodSvg(` |
| 4,465 | `boltSvg` | `function boltSvg(` |
| 4,466 | `houseSvg` | `function houseSvg(` |
| 4,469 | `marketSvg` | `function marketSvg(` |
| 4,472 | `bagSvg` | `function bagSvg(` |
| 4,475 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,483_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,484 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,485 | `dsrHistory` | `var dsrHistory =` |
| 4,486 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,487 | `savHistory` | `var savHistory =` |
| 4,490 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,499 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,500 | `dsrNow` | `var dsrNow =` |
| 4,501 | `savNow` | `var savNow =` |
| 4,502 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,503 | `householdsWord` | `function householdsWord(` |
| 4,510 | `householdsNow` | `var householdsNow =` |
| 4,511 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,528 | `savInfoHtml` | `function savInfoHtml(` |
| 4,546 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,553 | `curveSub` | `var curveSub =` |
| 4,554 | `vixPct` | `function vixPct(` |
| 4,558 | `curveNoteFull` | `var curveNoteFull =` |
| 4,569 | `volatilityRing` | `function volatilityRing(` |
| 4,574 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,575 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,590 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,595_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,596 | `sp500Years` | `var sp500Years =` |
| 4,597 | `marketWord` | `function marketWord(` |
| 4,620 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,630 | `marketCycles` | `var marketCycles =` |
| 4,717 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,719_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,720 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,721 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,726_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,727 | `TIMING` | `var TIMING =` |
| 4,733 | `CATEGORIES` | `var CATEGORIES =` |
| 4,739 | `ROSTER` | `var ROSTER =` |
| 4,789 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,790 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,792 | `pageState` | `function pageState(` |
| 4,797 | `pageMode` | `var pageMode =` |
| 4,798 | `pageCycles` | `var pageCycles =` |
| 4,799 | `pageRange` | `var pageRange =` |
| 4,800 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,801 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,802 | `keyed` | `function keyed(` |
| 4,809 | `hyMonths` | `function hyMonths(` |
| 4,812 | `prettyKey` | `function prettyKey(` |
| 4,817 | `lastDate` | `function lastDate(` |
| 4,818 | `compiledDay` | `function compiledDay(` |
| 4,819 | `labPeriod` | `function labPeriod(` |
| 4,820 | `rosterFor` | `function rosterFor(` |
| 4,821 | `rowReadings` | `function rowReadings(` |
| 4,822 | `indOf` | `function indOf(` |
| 4,823 | `peekOf` | `function peekOf(` |
| 4,828 | `cardDate` | `function cardDate(` |
| 4,829 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,850_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,851 | `slopeOf` | `function slopeOf(` |
| 4,856 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,857 | `readSeason` | `function readSeason(` |
| 4,876 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,877 | `qLabel` | `function qLabel(` |
| 4,898 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,900_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,901 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,902 | `seasonTitle` | `function seasonTitle(` |
| 4,903 | `monthLabel` | `function monthLabel(` |
| 4,904 | `cycleReturns` | `function cycleReturns(` |
| 4,914 | `cycleModel` | `function cycleModel(` |
| 4,945 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,953 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,959 | `nowModel` | `var nowModel =` |
| 4,960 | `readingNow` | `var readingNow =` |
| 4,961 | `cpiNow` | `var cpiNow =` |
| 4,962 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,963 | `currentSeason` | `var currentSeason =` |
| 4,964 | `seasonWhy` | `var seasonWhy =` |
| 4,966 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,968_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,969 | `rankToDate` | `function rankToDate(` |
| 4,973 | `marketCache` | `var marketCache =` |
| 4,974 | `marketMonths` | `function marketMonths(` |
| 4,981 | `yearAfter` | `function yearAfter(` |
| 4,985 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 4,990_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,991 | `rankIn` | `function rankIn(` |
| 4,996 | `moodLists` | `var moodLists =` |
| 4,997 | `moodSeries` | `function moodSeries(` |
| 5,005 | `moodAt` | `function moodAt(` |
| 5,011 | `MOOD_TURN` | `var MOOD_TURN =` |
| 5,012 | `MOOD_RISING` | `var MOOD_RISING =` |
| 5,013 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 5,014 | `moodWord` | `function moodWord(` |
| 5,018 | `moodRead` | `function moodRead(` |
| 5,025 | `moodCache` | `var moodCache =` |
| 5,026 | `moodTrack` | `function moodTrack(` |
| 5,032 | `moodToday` | `function moodToday(` |
| 5,037 | `cycleStory` | `function cycleStory(` |
| 5,048 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,059 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,060 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,061 | `spreadLabel` | `function spreadLabel(` |
| 5,065 | `policyFacts` | `function policyFacts(` |
| 5,072 | `policyFactRows` | `function policyFactRows(` |
| 5,078 | `allSources` | `var allSources =` |
| 5,092 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,104_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,105 | `SVG_NS` | `var SVG_NS =` |
| 5,106 | `svgEl` | `function svgEl(` |
| 5,111 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,145_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,146 | `clampPct` | `function clampPct(` |
| 5,149 | `detailTexts` | `var detailTexts =` |
| 5,150 | `detailSlots` | `var detailSlots =` |
| 5,151 | `detailSlot` | `function detailSlot(` |
| 5,161 | `metricSheet` | `function metricSheet(` |
| 5,166 | `ledeHtml` | `function ledeHtml(` |
| 5,167 | `facts` | `function facts(` |
| 5,168 | `factsFrom` | `function factsFrom(` |
| 5,172 | `expandBtn` | `function expandBtn(` |
| 5,176 | `sheetRenderers` | `var sheetRenderers =` |
| 5,177 | `drawsPage` | `function drawsPage(` |
| 5,178 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,207_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,210 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,211_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,212 | `subjectRow` | `function subjectRow(` |
| 5,222 | `subjectIcon` | `function subjectIcon(` |
| 5,223 | `srcHtml` | `function srcHtml(` |
| 5,224 | `timingMark` | `function timingMark(` |
| 5,232 | `timingPill` | `function timingPill(` |
| 5,241 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,249 | `seatPageFoot` | `function seatPageFoot(` |
| 5,261 | `timingMembers` | `var timingMembers =` |
| 5,263 | `registerTiming` | `function registerTiming(` |
| 5,265 | `headHtml` | `function headHtml(` |
| 5,270 | `heldHighlights` | `var heldHighlights =` |
| 5,271 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,298_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,299 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,300 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,308 | `withLatestPoint` | `function withLatestPoint(` |
| 5,313 | `pressureMaturities` | `function pressureMaturities(` |
| 5,337 | `registerFlowPages` | `function registerFlowPages(` |
| 5,391 | `renderPressureRow` | `function renderPressureRow(` |
| 5,399 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,418 | `ylmColumns` | `function ylmColumns(` |
| 5,438 | `ylmFitLine` | `function ylmFitLine(` |
| 5,450 | `pressureHead` | `function pressureHead(` |
| 5,468 | `showPressureView` | `function showPressureView(` |
| 5,473 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,606_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,607 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,644_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,645 | `spreadSeries` | `function spreadSeries(` |
| 5,689 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,815_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,816 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: the Treasury spreads, inside Pressure

_line 5,842_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,843 | `renderHorizonPage` | `function renderHorizonPage(` |
| 5,867 | `spreadInsights` | `function spreadInsights(` |

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

_line 6,102_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,103 | `totalRiseIn` | `function totalRiseIn(` |
| 6,113 | `eraInflation` | `function eraInflation(` |
| 6,124 | `eraGrowth` | `function eraGrowth(` |
| 6,140 | `fmtSigned` | `function fmtSigned(` |
| 6,141 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,142 | `growthShown` | `function growthShown(` |
| 6,143 | `growthShownCap` | `function growthShownCap(` |
| 6,144 | `phaseClass` | `function phaseClass(` |
| 6,145 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,149 | `cycleViewEl` | `var cycleViewEl =` |
| 6,150 | `shownEra` | `var shownEra =` |
| 6,151 | `calendarReset` | `var calendarReset =` |
| 6,152 | `metricPageReset` | `var metricPageReset =` |
| 6,153 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,154 | `topbarBack` | `var topbarBack =` |
| 6,155 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,162_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,163 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,244_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,245 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,263_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,264 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,285_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,287 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,288 | `hubSet` | `function hubSet(` |
| 6,299 | `quarterPopup` | `function quarterPopup(` |
| 6,322 | `hubShowDefault` | `function hubShowDefault(` |
| 6,331 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,337 | `hubShowYear` | `function hubShowYear(` |
| 6,347 | `renderCycleDial` | `function renderCycleDial(` |
| 6,428 | `m2Step` | `function m2Step(` |
| 6,431 | `heatStep` | `function heatStep(` |
| 6,435 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,446_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,447 | `renderCycleView` | `function renderCycleView(` |
| 6,453 | `shownEraModel` | `var shownEraModel =` |
| 6,454 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,456_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,457 | `stripGroupName` | `var stripGroupName =` |
| 6,458 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,486 | `marketStripHtml` | `function marketStripHtml(` |
| 6,520 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,521 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,550_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,551 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,557 | `debtSvg` | `function debtSvg(` |
| 6,558 | `interestSvg` | `function interestSvg(` |
| 6,560 | `budgetSvg` | `function budgetSvg(` |
| 6,562 | `lede` | `function lede(` |
| 6,563 | `periodOf` | `function periodOf(` |
| 6,564 | `meterWord` | `function meterWord(` |
| 6,565 | `splitPages` | `function splitPages(` |
| 6,582 | `confidencePage` | `function confidencePage(` |
| 6,588 | `marketPage` | `function marketPage(` |
| 6,594 | `productivityPage` | `function productivityPage(` |
| 6,599 | `splitSpec` | `function splitSpec(` |
| 6,605 | `splitInfo` | `function splitInfo(` |
| 6,609 | `periodTicks` | `function periodTicks(` |
| 6,614 | `periodOfSeries` | `function periodOfSeries(` |
| 6,615 | `drawSplit` | `function drawSplit(` |
| 6,632 | `mountSplit` | `function mountSplit(` |
| 6,645 | `splitPeek` | `function splitPeek(` |
| 6,652 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,660 | `deficitPeek` | `function deficitPeek(` |
| 6,664 | `catSheet` | `function catSheet(` |
| 6,669 | `groupId` | `function groupId(` |
| 6,670 | `groupCard` | `function groupCard(` |
| 6,678 | `groupSheet` | `function groupSheet(` |
| 6,685 | `appendPicks` | `function appendPicks(` |
| 6,693 | `doorSel` | `function doorSel(` |
| 6,694 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,706_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,707 | `buffettInsight` | `function buffettInsight(` |
| 6,722 | `debtInsight` | `function debtInsight(` |
| 6,737 | `productivityInsight` | `function productivityInsight(` |
| 6,747 | `confidenceInsight` | `function confidenceInsight(` |
| 6,758 | `ORDINAL` | `var ORDINAL =` |
| 6,759 | `marketInsight` | `function marketInsight(` |
| 6,771 | `interestInsight` | `function interestInsight(` |
| 6,786 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,809 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,829 | `activityStackHtml` | `function activityStackHtml(` |
| 6,839 | `seatTemperature` | `function seatTemperature(` |
| 6,847 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,880_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,881 | `partsOf` | `function partsOf(` |
| 6,890 | `authored` | `function authored(` |
| 6,891 | `registerRoster` | `function registerRoster(` |
| 6,913 | `indRow` | `function indRow(` |
| 6,917 | `IND_ORDER` | `var IND_ORDER =` |
| 6,918 | `indGroupRow` | `function indGroupRow(` |
| 6,923 | `catMembers` | `function catMembers(` |
| 6,931 | `indRows` | `function indRows(` |
| 6,945 | `indCategoryHtml` | `function indCategoryHtml(` |
| 6,953 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 6,955_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,956 | `NAV` | `var NAV =` |
| 6,957 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,051_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,052 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,099_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,100 | `qPretty` | `function qPretty(` |
| 7,101 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,102 | `peekArt` | `function peekArt(` |
| 7,103 | `indPeriod` | `function indPeriod(` |
| 7,107 | `catItem` | `function catItem(` |
| 7,154 | `insightCirculation` | `function insightCirculation(` |
| 7,187 | `insightWeather` | `function insightWeather(` |
| 7,227 | `seasonCards` | `function seasonCards(` |
| 7,233 | `marketCycleCard` | `function marketCycleCard(` |
| 7,245 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,249 | `seasonName` | `function seasonName(` |
| 7,250 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,257 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,262 | `curvePath` | `function curvePath(` |
| 7,270 | `moodCallout` | `function moodCallout(` |
| 7,274 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,286 | `moodInfo` | `function moodInfo(` |
| 7,295 | `moodFigures` | `function moodFigures(` |
| 7,301 | `moodCard` | `function moodCard(` |
| 7,305 | `insightMood` | `function insightMood(` |
| 7,311 | `storyBeats` | `function storyBeats(` |
| 7,322 | `storyText` | `function storyText(` |
| 7,326 | `PAIR_ART` | `var PAIR_ART =` |
| 7,332 | `placeSignPair` | `function placeSignPair(` |
| 7,355 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,371 | `buildCategories` | `function buildCategories(` |
| 7,387 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,425_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,426 | `capeFmt1` | `function capeFmt1(` |
| 7,427 | `actCycleMonths` | `function actCycleMonths(` |
| 7,435 | `householdsHighlights` | `function householdsHighlights(` |
| 7,454 | `redrawSheet` | `function redrawSheet(` |
| 7,458 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,503 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,540 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,587 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,617 | `valuationHighlights` | `function valuationHighlights(` |
| 7,630 | `tempHighlights` | `function tempHighlights(` |
| 7,647 | `gdpHighlights` | `function gdpHighlights(` |
| 7,662 | `renderMetricPages` | `function renderMetricPages(` |
| 7,672 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,682_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,683 | `todayFace` | `function todayFace(` |
| 7,689 | `readDoor` | `function readDoor(` |
| 7,697 | `pct` | `function pct(` |
| 7,698 | `rosterRows` | `function rosterRows(` |
| 7,699 | `eraEnds` | `function eraEnds(` |
| 7,706 | `eraMove` | `function eraMove(` |
| 7,710 | `HORMONES` | `var HORMONES =` |
| 7,711 | `analysisFor` | `function analysisFor(` |
| 7,717 | `dxRow` | `function dxRow(` |
| 7,718 | `dxText` | `function dxText(` |
| 7,719 | `dxSection` | `function dxSection(` |
| 7,720 | `systemHtml` | `function systemHtml(` |
| 7,723 | `dxHead` | `function dxHead(` |
| 7,728 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,737 | `acrossCycle` | `function acrossCycle(` |
| 7,744 | `moodDoor` | `function moodDoor(` |
| 7,749 | `trendText` | `function trendText(` |
| 7,750 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,754 | `replaceInsights` | `function replaceInsights(` |
| 7,760 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,764 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,777_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,778 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,779 | `cycleDataOn` | `function cycleDataOn(` |
| 7,780 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,800 | `wireCycleData` | `function wireCycleData(` |
| 7,815 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,860_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,861 | `eraOpen` | `var eraOpen =` |
| 7,862 | `kT` | `function kT(` |
| 7,866 | `upTo` | `function upTo(` |
| 7,867 | `pairAt` | `function pairAt(` |
| 7,868 | `eraReading` | `function eraReading(` |
| 7,878 | `eraFig` | `function eraFig(` |
| 7,885 | `eraValue` | `function eraValue(` |
| 7,891 | `eraRange` | `function eraRange(` |
| 7,896 | `eraMini` | `function eraMini(` |
| 7,901 | `eraCard` | `function eraCard(` |
| 7,920 | `eraCards` | `function eraCards(` |
| 7,926 | `eraShow` | `function eraShow(` |
| 7,933 | `enterEra` | `function enterEra(` |
| 7,940 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,947_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,948 | `rosterRow` | `function rosterRow(` |
| 7,961 | `__roster` | `var __roster =` |
| 7,962 | `readingRoster` | `function readingRoster(` |
| 7,969 | `withUnit` | `function withUnit(` |
| 7,970 | `pastFigure` | `function pastFigure(` |
| 7,974 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 7,976_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,977 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,001 | `placeWords` | `function placeWords(` |
| 8,005 | `symptomNote` | `function symptomNote(` |
| 8,012 | `symptomRow` | `function symptomRow(` |
| 8,019 | `cycleTrack` | `function cycleTrack(` |
| 8,034 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,042_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,043 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,092_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,093 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,124_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,125 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **9 compute a value**, 9 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,954–1,957 | `LIVE_CACHE` | Live data without a render refactor |
| 2,288–2,292 | `productivityRecord` | Productivity growth is not in this panel |
| 2,305–2,327 | `productivityReading` | Productivity growth is not in this panel |
| 2,323–2,327 | `confidenceRecord` | Consumer confidence |
| 2,334–4,240 | `confidenceReading` | Consumer confidence |
| 4,227–4,240 | `horizonRead` | A series' highest reading within a span |
| 4,601–4,891 | `marketReading` | The S&P 500, year by year |
| 4,878–4,891 | `seasonTrackAll` | The season, computed |
| 4,893–4,897 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,522 |
| `pressure-range` | 2,012 |
| `sheet-marker-deficit` | 7,519 |
| `sheet-metric-gdp` | 7,483 |
| `sheet-metric-households` | 7,541 |
| `sheet-metric-temp` | 7,459 |
| `sheet-metric-valuation` | 7,561 |
| `sheet-sign-activity` | 7,504 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,526 |
| `desire-range` | 5,373 |
| `fear-range` | 6,013 |
| `pressure-range` | 5,578 |
| `pulse-range` | 5,341 |
| `sheet-metric-gdp` | 7,484 |
| `sheet-metric-temp` | 7,460 |
| `sheet-metric-valuation` | 7,562 |
| `volume-range` | 5,357 |

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
| 735 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 810 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 883 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,052 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,067 | The symptoms: a cycle's years against today |
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

Every `id` in the static DOM (98), which is what the renderers fill:

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
| 1,478 | `subj-value-pressure` |
| 1,479 | `subj-say-pressure` |
| 1,485 | `pressure-timeline` |
| 1,487 | `pressure-head` |
| 1,488 | `ylm-shell` |
| 1,489 | `ylm-svg` |
| 1,490 | `ylm-tooltip` |
| 1,492 | `spread-history-shell` |
| 1,493 | `spread-history-svg` |
| 1,494 | `spread-history-tooltip` |
| 1,496 | `ylm-trend` |
| 1,498 | `pressure-insights` |
| 1,505 | `subj-ring-sentiment` |
| 1,508 | `subj-value-sentiment` |
| 1,509 | `subj-say-sentiment` |
| 1,510 | `subj-spark-sentiment` |
| 1,516 | `fear-history` |
| 1,517 | `curve-highlights` |
| 1,523 | `signs-list` |
| 1,529 | `calendar-list` |
| 1,536 | `cycle-data` |
| 1,538 | `cycle-legend` |
| 1,539 | `cycle-list` |
| 1,540 | `cycle-more` |
| 1,541 | `cycle-more-label` |
| 1,546 | `calendar-cycle` |
| 1,566 | `search-home` |
| 1,568 | `search-input` |
| 1,570 | `search-list` |
| 1,574 | `more-menu` |
| 1,577 | `menu-back` |
| 1,591 | `sources-open` |
| 1,599 | `appearance-current` |
| 1,605 | `sheet-howto` |
| 1,648 | `sheet-book` |
| 1,679 | `seasons-kicker` |
| 1,681 | `seasons-rows` |
| 1,684 | `framework-kicker` |
| 1,687 | `framework-rows` |
| 1,697 | `sheet-appearance` |
| 1,705 | `theme-toggle` |
| 1,712 | `sheet-contact` |
| 1,721 | `contact-form` |
| 1,722 | `contact-title` |
| 1,723 | `contact-message` |
| 1,725 | `contact-hint` |
| 1,726 | `contact-send` |
| 1,732 | `sheet-sources` |
| 1,735 | `sources-back` |
| 1,740 | `asof-text` |
| 1,741 | `sources-groups` |
| 1,747 | `detail-backdrop` |
| 1,749 | `detail-modal-close` |
| 1,750 | `detail-modal-body` |

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

