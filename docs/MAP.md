# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,301 lines**, about 674 KB, roughly **191 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `34b121d` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,371 | the whole stylesheet, every token and rule |
| **Markup** | 1,372–1,755 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,756–8,268 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,269–8,301 | </body></html> |

Counts: **427** top-level functions, **190** top-level vars, **10** top-level IIFEs in the script.

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
| 4,747 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,749_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,750 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,751 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,756_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,757 | `TIMING` | `var TIMING =` |
| 4,763 | `CATEGORIES` | `var CATEGORIES =` |
| 4,769 | `ROSTER` | `var ROSTER =` |
| 4,819 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,820 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,822 | `pageState` | `function pageState(` |
| 4,827 | `pageMode` | `var pageMode =` |
| 4,828 | `pageCycles` | `var pageCycles =` |
| 4,829 | `pageRange` | `var pageRange =` |
| 4,830 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,831 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,832 | `keyed` | `function keyed(` |
| 4,839 | `hyMonths` | `function hyMonths(` |
| 4,842 | `prettyKey` | `function prettyKey(` |
| 4,847 | `lastDate` | `function lastDate(` |
| 4,848 | `compiledDay` | `function compiledDay(` |
| 4,849 | `labPeriod` | `function labPeriod(` |
| 4,850 | `rosterFor` | `function rosterFor(` |
| 4,851 | `rowReadings` | `function rowReadings(` |
| 4,852 | `indOf` | `function indOf(` |
| 4,853 | `peekOf` | `function peekOf(` |
| 4,858 | `cardDate` | `function cardDate(` |
| 4,859 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,880_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,881 | `slopeOf` | `function slopeOf(` |
| 4,886 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,887 | `readSeason` | `function readSeason(` |
| 4,906 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,907 | `qLabel` | `function qLabel(` |
| 4,923 | `SEASON_YEARS` | `var SEASON_YEARS =` |
| 4,940 | `seasonTrack` | `var seasonTrack =` |
| 4,941 | `closingReading` | `function closingReading(` |
| 4,951 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,953_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,954 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,955 | `seasonTitle` | `function seasonTitle(` |
| 4,956 | `monthLabel` | `function monthLabel(` |
| 4,957 | `cycleReturns` | `function cycleReturns(` |
| 4,967 | `cycleModel` | `function cycleModel(` |
| 4,998 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 5,006 | `seasonWhyFor` | `function seasonWhyFor(` |
| 5,012 | `nowModel` | `var nowModel =` |
| 5,013 | `readingNow` | `var readingNow =` |
| 5,014 | `cpiNow` | `var cpiNow =` |
| 5,015 | `growthSlopeQ` | `var growthSlopeQ =` |
| 5,016 | `currentSeason` | `var currentSeason =` |
| 5,017 | `seasonWhy` | `var seasonWhy =` |
| 5,019 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 5,021_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,022 | `rankToDate` | `function rankToDate(` |
| 5,026 | `marketCache` | `var marketCache =` |
| 5,027 | `marketMonths` | `function marketMonths(` |
| 5,034 | `yearAfter` | `function yearAfter(` |
| 5,038 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 5,043_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,044 | `rankIn` | `function rankIn(` |
| 5,049 | `moodLists` | `var moodLists =` |
| 5,050 | `moodSeries` | `function moodSeries(` |
| 5,058 | `moodAt` | `function moodAt(` |
| 5,064 | `MOOD_TURN` | `var MOOD_TURN =` |
| 5,065 | `MOOD_RISING` | `var MOOD_RISING =` |
| 5,066 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 5,067 | `moodWord` | `function moodWord(` |
| 5,071 | `moodRead` | `function moodRead(` |
| 5,078 | `moodCache` | `var moodCache =` |
| 5,079 | `moodTrack` | `function moodTrack(` |
| 5,085 | `moodToday` | `function moodToday(` |
| 5,090 | `cycleStory` | `function cycleStory(` |
| 5,101 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,112 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,113 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,114 | `spreadLabel` | `function spreadLabel(` |
| 5,118 | `policyFacts` | `function policyFacts(` |
| 5,125 | `policyFactRows` | `function policyFactRows(` |
| 5,131 | `allSources` | `var allSources =` |
| 5,146 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,158_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,159 | `SVG_NS` | `var SVG_NS =` |
| 5,160 | `svgEl` | `function svgEl(` |
| 5,165 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,199_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,200 | `clampPct` | `function clampPct(` |
| 5,203 | `detailTexts` | `var detailTexts =` |
| 5,204 | `detailSlots` | `var detailSlots =` |
| 5,205 | `detailSlot` | `function detailSlot(` |
| 5,215 | `metricSheet` | `function metricSheet(` |
| 5,220 | `ledeHtml` | `function ledeHtml(` |
| 5,221 | `facts` | `function facts(` |
| 5,222 | `factsFrom` | `function factsFrom(` |
| 5,226 | `expandBtn` | `function expandBtn(` |
| 5,230 | `sheetRenderers` | `var sheetRenderers =` |
| 5,231 | `drawsPage` | `function drawsPage(` |
| 5,232 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,261_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,264 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,265_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,266 | `subjectRow` | `function subjectRow(` |
| 5,276 | `subjectIcon` | `function subjectIcon(` |
| 5,277 | `srcHtml` | `function srcHtml(` |
| 5,278 | `timingMark` | `function timingMark(` |
| 5,286 | `timingPill` | `function timingPill(` |
| 5,295 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,303 | `seatPageFoot` | `function seatPageFoot(` |
| 5,315 | `timingMembers` | `var timingMembers =` |
| 5,317 | `registerTiming` | `function registerTiming(` |
| 5,319 | `headHtml` | `function headHtml(` |
| 5,324 | `heldHighlights` | `var heldHighlights =` |
| 5,325 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,352_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,353 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,354 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,362 | `withLatestPoint` | `function withLatestPoint(` |
| 5,367 | `pressureMaturities` | `function pressureMaturities(` |
| 5,391 | `registerFlowPages` | `function registerFlowPages(` |
| 5,445 | `renderPressureRow` | `function renderPressureRow(` |
| 5,453 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,472 | `ylmColumns` | `function ylmColumns(` |
| 5,492 | `ylmFitLine` | `function ylmFitLine(` |
| 5,504 | `pressureHead` | `function pressureHead(` |
| 5,522 | `showPressureView` | `function showPressureView(` |
| 5,527 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,660_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,661 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,698_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,699 | `spreadSeries` | `function spreadSeries(` |
| 5,743 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,869_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,870 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: the Treasury spreads, inside Pressure

_line 5,896_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,897 | `renderHorizonPage` | `function renderHorizonPage(` |
| 5,921 | `spreadInsights` | `function spreadInsights(` |

### RENDER: Valuation (slow)

_line 5,951_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,952 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,960_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,961 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 6,058_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,059 | `renderVolatility` | `function renderVolatility(` |
| 6,104 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,134_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,135 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,156_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,157 | `totalRiseIn` | `function totalRiseIn(` |
| 6,167 | `eraInflation` | `function eraInflation(` |
| 6,178 | `eraGrowth` | `function eraGrowth(` |
| 6,194 | `fmtSigned` | `function fmtSigned(` |
| 6,195 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,196 | `growthShown` | `function growthShown(` |
| 6,197 | `growthShownCap` | `function growthShownCap(` |
| 6,198 | `phaseClass` | `function phaseClass(` |
| 6,199 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,203 | `cycleViewEl` | `var cycleViewEl =` |
| 6,204 | `shownEra` | `var shownEra =` |
| 6,205 | `calendarReset` | `var calendarReset =` |
| 6,206 | `metricPageReset` | `var metricPageReset =` |
| 6,207 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,208 | `topbarBack` | `var topbarBack =` |
| 6,209 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,216_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,217 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,298_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,299 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,317_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,318 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,339_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,341 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,342 | `hubSet` | `function hubSet(` |
| 6,353 | `quarterPopup` | `function quarterPopup(` |
| 6,376 | `hubShowDefault` | `function hubShowDefault(` |
| 6,385 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,391 | `hubShowYear` | `function hubShowYear(` |
| 6,401 | `renderCycleDial` | `function renderCycleDial(` |
| 6,482 | `m2Step` | `function m2Step(` |
| 6,485 | `heatStep` | `function heatStep(` |
| 6,489 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,500_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,501 | `renderCycleView` | `function renderCycleView(` |
| 6,507 | `shownEraModel` | `var shownEraModel =` |
| 6,508 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,510_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,511 | `stripGroupName` | `var stripGroupName =` |
| 6,512 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,540 | `marketStripHtml` | `function marketStripHtml(` |
| 6,574 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,575 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,604_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,605 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,611 | `debtSvg` | `function debtSvg(` |
| 6,612 | `interestSvg` | `function interestSvg(` |
| 6,614 | `budgetSvg` | `function budgetSvg(` |
| 6,616 | `lede` | `function lede(` |
| 6,617 | `periodOf` | `function periodOf(` |
| 6,618 | `meterWord` | `function meterWord(` |
| 6,619 | `splitPages` | `function splitPages(` |
| 6,636 | `confidencePage` | `function confidencePage(` |
| 6,642 | `marketPage` | `function marketPage(` |
| 6,648 | `productivityPage` | `function productivityPage(` |
| 6,653 | `splitSpec` | `function splitSpec(` |
| 6,659 | `splitInfo` | `function splitInfo(` |
| 6,663 | `periodTicks` | `function periodTicks(` |
| 6,668 | `periodOfSeries` | `function periodOfSeries(` |
| 6,669 | `drawSplit` | `function drawSplit(` |
| 6,686 | `mountSplit` | `function mountSplit(` |
| 6,699 | `splitPeek` | `function splitPeek(` |
| 6,706 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,714 | `deficitPeek` | `function deficitPeek(` |
| 6,718 | `catSheet` | `function catSheet(` |
| 6,723 | `groupId` | `function groupId(` |
| 6,724 | `groupCard` | `function groupCard(` |
| 6,732 | `groupSheet` | `function groupSheet(` |
| 6,739 | `appendPicks` | `function appendPicks(` |
| 6,747 | `doorSel` | `function doorSel(` |
| 6,748 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,760_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,761 | `buffettInsight` | `function buffettInsight(` |
| 6,776 | `debtInsight` | `function debtInsight(` |
| 6,791 | `productivityInsight` | `function productivityInsight(` |
| 6,801 | `confidenceInsight` | `function confidenceInsight(` |
| 6,812 | `ORDINAL` | `var ORDINAL =` |
| 6,813 | `marketInsight` | `function marketInsight(` |
| 6,825 | `interestInsight` | `function interestInsight(` |
| 6,840 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,863 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,883 | `activityStackHtml` | `function activityStackHtml(` |
| 6,893 | `seatTemperature` | `function seatTemperature(` |
| 6,901 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,934_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,935 | `partsOf` | `function partsOf(` |
| 6,944 | `authored` | `function authored(` |
| 6,945 | `registerRoster` | `function registerRoster(` |
| 6,967 | `indRow` | `function indRow(` |
| 6,971 | `IND_ORDER` | `var IND_ORDER =` |
| 6,972 | `indGroupRow` | `function indGroupRow(` |
| 6,977 | `catMembers` | `function catMembers(` |
| 6,985 | `indRows` | `function indRows(` |
| 6,999 | `indCategoryHtml` | `function indCategoryHtml(` |
| 7,007 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 7,009_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,010 | `NAV` | `var NAV =` |
| 7,011 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,105_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,106 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,153_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,154 | `qPretty` | `function qPretty(` |
| 7,155 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,156 | `peekArt` | `function peekArt(` |
| 7,157 | `indPeriod` | `function indPeriod(` |
| 7,161 | `catItem` | `function catItem(` |
| 7,208 | `insightCirculation` | `function insightCirculation(` |
| 7,241 | `insightWeather` | `function insightWeather(` |
| 7,281 | `seasonCards` | `function seasonCards(` |
| 7,287 | `marketCycleCard` | `function marketCycleCard(` |
| 7,299 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,303 | `seasonName` | `function seasonName(` |
| 7,304 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,311 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,316 | `curvePath` | `function curvePath(` |
| 7,324 | `moodCallout` | `function moodCallout(` |
| 7,328 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,340 | `moodInfo` | `function moodInfo(` |
| 7,349 | `moodFigures` | `function moodFigures(` |
| 7,355 | `moodCard` | `function moodCard(` |
| 7,359 | `insightMood` | `function insightMood(` |
| 7,365 | `storyBeats` | `function storyBeats(` |
| 7,376 | `storyText` | `function storyText(` |
| 7,380 | `PAIR_ART` | `var PAIR_ART =` |
| 7,386 | `placeSignPair` | `function placeSignPair(` |
| 7,409 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,425 | `buildCategories` | `function buildCategories(` |
| 7,441 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,479_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,480 | `capeFmt1` | `function capeFmt1(` |
| 7,481 | `actCycleMonths` | `function actCycleMonths(` |
| 7,489 | `householdsHighlights` | `function householdsHighlights(` |
| 7,508 | `redrawSheet` | `function redrawSheet(` |
| 7,512 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,557 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,594 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,641 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,671 | `valuationHighlights` | `function valuationHighlights(` |
| 7,684 | `tempHighlights` | `function tempHighlights(` |
| 7,701 | `gdpHighlights` | `function gdpHighlights(` |
| 7,716 | `renderMetricPages` | `function renderMetricPages(` |
| 7,726 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,736_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,737 | `todayFace` | `function todayFace(` |
| 7,743 | `readDoor` | `function readDoor(` |
| 7,751 | `pct` | `function pct(` |
| 7,752 | `rosterRows` | `function rosterRows(` |
| 7,753 | `eraEnds` | `function eraEnds(` |
| 7,760 | `eraMove` | `function eraMove(` |
| 7,764 | `HORMONES` | `var HORMONES =` |
| 7,765 | `analysisFor` | `function analysisFor(` |
| 7,771 | `dxRow` | `function dxRow(` |
| 7,772 | `dxText` | `function dxText(` |
| 7,773 | `dxSection` | `function dxSection(` |
| 7,774 | `systemHtml` | `function systemHtml(` |
| 7,777 | `dxHead` | `function dxHead(` |
| 7,782 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,791 | `acrossCycle` | `function acrossCycle(` |
| 7,798 | `moodDoor` | `function moodDoor(` |
| 7,803 | `trendText` | `function trendText(` |
| 7,804 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,808 | `replaceInsights` | `function replaceInsights(` |
| 7,814 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,818 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,831_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,832 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,833 | `cycleDataOn` | `function cycleDataOn(` |
| 7,834 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,854 | `wireCycleData` | `function wireCycleData(` |
| 7,869 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,914_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,915 | `eraOpen` | `var eraOpen =` |
| 7,916 | `kT` | `function kT(` |
| 7,920 | `upTo` | `function upTo(` |
| 7,921 | `pairAt` | `function pairAt(` |
| 7,922 | `eraReading` | `function eraReading(` |
| 7,932 | `eraFig` | `function eraFig(` |
| 7,939 | `eraValue` | `function eraValue(` |
| 7,945 | `eraRange` | `function eraRange(` |
| 7,950 | `eraMini` | `function eraMini(` |
| 7,955 | `eraCard` | `function eraCard(` |
| 7,974 | `eraCards` | `function eraCards(` |
| 7,980 | `eraShow` | `function eraShow(` |
| 7,987 | `enterEra` | `function enterEra(` |
| 7,994 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,001_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,002 | `rosterRow` | `function rosterRow(` |
| 8,015 | `__roster` | `var __roster =` |
| 8,016 | `readingRoster` | `function readingRoster(` |
| 8,023 | `withUnit` | `function withUnit(` |
| 8,024 | `pastFigure` | `function pastFigure(` |
| 8,028 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,030_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,031 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,055 | `placeWords` | `function placeWords(` |
| 8,059 | `symptomNote` | `function symptomNote(` |
| 8,066 | `symptomRow` | `function symptomRow(` |
| 8,073 | `cycleTrack` | `function cycleTrack(` |
| 8,088 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,096_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,097 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,146_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,147 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,178_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,179 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **10 compute a value**, 10 in all. They run in source
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
| 4,601–4,921 | `marketReading` | The S&P 500, year by year |
| 4,908–4,921 | `seasonTrackAll` | The season, computed |
| 4,924–4,939 | `seasonTrackYears` | The season, computed |
| 4,946–4,950 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,576 |
| `pressure-range` | 2,012 |
| `sheet-marker-deficit` | 7,573 |
| `sheet-metric-gdp` | 7,537 |
| `sheet-metric-households` | 7,595 |
| `sheet-metric-temp` | 7,513 |
| `sheet-metric-valuation` | 7,615 |
| `sheet-sign-activity` | 7,558 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,580 |
| `desire-range` | 5,427 |
| `fear-range` | 6,067 |
| `pressure-range` | 5,632 |
| `pulse-range` | 5,395 |
| `sheet-metric-gdp` | 7,538 |
| `sheet-metric-temp` | 7,514 |
| `sheet-metric-valuation` | 7,616 |
| `volume-range` | 5,411 |

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

