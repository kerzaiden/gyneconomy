# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,204 lines**, about 626 KB, roughly **178 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `43d8fac` on 2026-10-01.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,365 | the whole stylesheet, every token and rule |
| **Markup** | 1,366–1,771 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,772–8,171 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,172–8,204 | </body></html> |

Counts: **381** top-level functions, **186** top-level vars, **6** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,772_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,774 | `byId` | `function byId(` |
| 1,782 | `byIdMaybe` | `function byIdMaybe(` |
| 1,783 | `put` | `function put(` |
| 1,788 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,790_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,791 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,792 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,793 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,794 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,798 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,803_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,804 | `wheelMeta` | `var wheelMeta =` |
| 1,812 | `seasonOverride` | `var seasonOverride =` |
| 1,813 | `cycleNowNote` | `var cycleNowNote =` |
| 1,815 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,893 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,935 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,936 | `volatilityHistory` | `var volatilityHistory =` |
| 1,938 | `fiscalHistory` | `var fiscalHistory =` |
| 1,944 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,946 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,956 | `productivityHistory` | `var productivityHistory =` |
| 1,958 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |

### Live data without a render refactor

_line 1,960_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,965 | `merge` | `function merge(` |
| 1,972 | `LIVE` | `function LIVE(` |
| 1,986 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 1,989_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,991 | `paintReading` | `function paintReading(` |
| 2,008 | `repaintVolatility` | `function repaintVolatility(` |
| 2,012 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,020 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,025 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,029 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,034_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,035 | `READINGS` | `var READINGS =` |
| 2,090 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,091 | `KINDS` | `var KINDS =` |
| 2,092 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,106 | `receive` | `function receive(` |
| 2,122 | `liveAsOf` | `var liveAsOf =` |
| 2,123 | `fmtAsOf` | `function fmtAsOf(` |
| 2,128 | `applyLive` | `function applyLive(` |
| 2,141 | `shapeOk` | `function shapeOk(` |
| 2,148 | `repaintPolicy` | `function repaintPolicy(` |
| 2,154 | `GYN` | `var GYN =` |
| 2,181 | `refreshLiveData` | `function refreshLiveData(` |
| 2,199 | `fetchSiteData` | `function fetchSiteData(` |
| 2,215 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,220_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,221 | `yieldCurve` | `var yieldCurve =` |
| 2,227 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,228 | `curveAsOf` | `function curveAsOf(` |
| 2,233 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,234 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,239 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,241_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,242 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,243 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,244 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,245 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,246 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,248_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,249 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,255 | `uninvLagToday` | `var uninvLagToday =` |
| 2,260 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,266 | `gdpSrc` | `var gdpSrc =` |
| 2,269 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,298_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,306 | `PRODUCTIVITY_TREND` | `var PRODUCTIVITY_TREND =` |
| 2,307 | `productivityWord` | `function productivityWord(` |

### The deficit, year by year

_line 2,336_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,337 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,338 | `deficitHistory` | `var deficitHistory =` |
| 2,341 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,342 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,344 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,353_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,354 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,363_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,364 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,367 | `timelineSpan` | `function timelineSpan(` |
| 2,372 | `timelineFor` | `function timelineFor(` |
| 2,383 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,389_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,390 | `windowScale` | `function windowScale(` |
| 2,405 | `windowYears` | `function windowYears(` |
| 2,413 | `refName` | `function refName(` |
| 2,417 | `histReadEnsure` | `function histReadEnsure(` |
| 2,437 | `histReadFill` | `function histReadFill(` |
| 2,487 | `histAxisEnds` | `function histAxisEnds(` |
| 2,498 | `histLegend` | `function histLegend(` |
| 2,558 | `refitHistory` | `function refitHistory(` |
| 2,568 | `wireHistHover` | `function wireHistHover(` |
| 2,605 | `mWindowFrom` | `function mWindowFrom(` |
| 2,609 | `qWindowFrom` | `function qWindowFrom(` |
| 2,613 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,614 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,616 | `DEF_1983` | `var DEF_1983 =` |
| 2,617 | `defFrom` | `function defFrom(` |
| 2,622 | `deficitChart` | `function deficitChart(` |
| 2,690 | `deficitBlock` | `function deficitBlock(` |
| 2,730 | `buffettHistory` | `var buffettHistory =` |
| 2,732 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,733 | `hyDates` | `var hyDates =` |
| 2,734 | `hyOas` | `var hyOas =` |
| 2,735 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,742 | `hyAt` | `function hyAt(` |
| 2,746 | `hyLabel` | `function hyLabel(` |
| 2,747 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 2,748 | `hyNum` | `function hyNum(` |
| 2,749 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,757 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,767 | `capeHistory` | `var capeHistory =` |
| 2,769 | `longCycleSrc` | `var longCycleSrc =` |
| 2,785 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,799_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,800 | `sentiment` | `var sentiment =` |
| 2,816 | `valuation` | `var valuation =` |
| 2,837 | `valRow` | `function valRow(` |
| 2,842 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,845 | `coincident` | `var coincident =` |
| 2,895 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,901 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,902 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,903 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,905_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,906 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,907 | `m2vHistory` | `var m2vHistory =` |
| 2,923 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 2,977 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,018_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,019 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,020 | `DOTS` | `var DOTS =` |
| 3,022 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,037 | `headPickRow` | `function headPickRow(` |
| 3,043 | `histHead` | `function histHead(` |
| 3,058 | `headNoteIdx` | `var headNoteIdx =` |
| 3,059 | `headMenuHtml` | `function headMenuHtml(` |
| 3,084 | `headMenuFor` | `var headMenuFor =` |
| 3,085 | `headSubFor` | `var headSubFor =` |
| 3,086 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,115 | `histNote` | `function histNote(` |
| 3,116 | `meterFlagged` | `function meterFlagged(` |
| 3,123 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,146 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,160 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,173 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,178 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,192 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,206 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,225 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,256 | `desireBlock` | `function desireBlock(` |
| 3,267 | `volumeBlock` | `function volumeBlock(` |
| 3,279 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,291 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,298_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,299 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,300 | `m2Level` | `var m2Level =` |
| 3,321 | `m2Yoy` | `var m2Yoy =` |
| 3,322 | `M2_NORM` | `var M2_NORM =` |
| 3,324 | `volumeVerdict` | `function volumeVerdict(` |
| 3,332 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,333 | `unempHistory` | `var unempHistory =` |
| 3,339 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,348 | `NROU_NOW` | `var NROU_NOW =` |
| 3,349 | `unempState` | `function unempState(` |
| 3,355 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,409_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,410 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,419 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,477 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,478 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,479 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,480_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,482 | `householdsChart` | `function householdsChart(` |
| 3,531 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,586 | `GDP_NORM` | `var GDP_NORM =` |
| 3,587 | `gdpNowQ` | `var gdpNowQ =` |
| 3,588 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,610 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,663 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,710 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,718 | `velocityVerdict` | `function velocityVerdict(` |
| 3,726 | `derivePulseTag` | `function derivePulseTag(` |
| 3,732 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,764_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,765 | `seasonReading` | `var seasonReading =` |
| 3,809 | `frameworkRows` | `var frameworkRows =` |
| 3,819 | `vixRow` | `var vixRow =` |
| 3,820 | `VIX_CALM` | `var VIX_CALM =` |
| 3,821 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,825 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,832_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,833 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,842_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,843 | `calendarTodayY` | `var calendarTodayY =` |
| 3,845 | `vix3mClose` | `var vix3mClose =` |
| 3,846 | `fearCurve` | `function fearCurve(` |
| 3,851 | `curveVerdict` | `function curveVerdict(` |
| 3,856 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,865_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,866 | `modeBar` | `function modeBar(` |
| 3,873 | `pickerOpen` | `var pickerOpen =` |
| 3,874 | `cycleByName` | `function cycleByName(` |
| 3,878 | `openCycle` | `function openCycle(` |
| 3,882 | `cycleSlice` | `function cycleSlice(` |
| 3,890 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,898 | `cycleMonths` | `function cycleMonths(` |
| 3,906 | `histControls` | `function histControls(` |
| 3,915 | `cycLabel` | `function cycLabel(` |
| 3,919 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,924 | `cyclePicker` | `function cyclePicker(` |
| 3,943 | `rangeBar` | `function rangeBar(` |
| 3,950 | `trendOf` | `function trendOf(` |
| 3,965 | `TREND_ARROW` | `var TREND_ARROW =` |
| 3,969 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 3,980_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,981 | `yearOf` | `function yearOf(` |
| 3,982 | `mean` | `function mean(` |

### The record rows

_line 3,983_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,984 | `headSigma` | `function headSigma(` |
| 3,989 | `atQuarter` | `function atQuarter(` |
| 3,990 | `atMonth` | `function atMonth(` |
| 3,991 | `ordinal` | `function ordinal(` |
| 3,992 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 3,995_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,996 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,003 | `moreRow` | `function moreRow(` |
| 4,009 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,010 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,016_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,017 | `xLabelOf` | `function xLabelOf(` |
| 4,027 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,045_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,046 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,054 | `vGrid` | `function vGrid(` |
| 4,058 | `COL_FILL` | `var COL_FILL =` |
| 4,059 | `colPath` | `function colPath(` |
| 4,064 | `colWidth` | `function colWidth(` |
| 4,069 | `AXIS` | `var AXIS =` |
| 4,070 | `histFrame` | `function histFrame(` |
| 4,077 | `xLabel` | `function xLabel(` |
| 4,080 | `crossLine` | `function crossLine(` |
| 4,083 | `zeroRule` | `function zeroRule(` |
| 4,086 | `meanRule` | `function meanRule(` |
| 4,087 | `pendingGeom` | `var pendingGeom =` |
| 4,088 | `publishGeom` | `function publishGeom(` |
| 4,089 | `attachHistory` | `function attachHistory(` |
| 4,098 | `histBar` | `function histBar(` |
| 4,101 | `histTip` | `function histTip(` |
| 4,102 | `avgRule` | `function avgRule(` |
| 4,105 | `vhOpen` | `function vhOpen(` |
| 4,106 | `chartAxes` | `function chartAxes(` |
| 4,136 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,171_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,173 | `maxIn` | `function maxIn(` |
| 4,178 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,179 | `PEEK_W` | `var PEEK_W =` |
| 4,180 | `PEEK_H` | `var PEEK_H =` |
| 4,181 | `colPeek` | `function colPeek(` |
| 4,199 | `meterPeek` | `function meterPeek(` |
| 4,216 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,221 | `pressureZone` | `function pressureZone(` |
| 4,227 | `HZN_BACK` | `var HZN_BACK =` |
| 4,228 | `hznLast` | `function hznLast(` |
| 4,229 | `hznBack` | `function hznBack(` |
| 4,230 | `horizonWord` | `function horizonWord(` |
| 4,250 | `HZN_METERS` | `var HZN_METERS =` |
| 4,258 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,279 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,284 | `RISK_RISK` | `var RISK_RISK =` |
| 4,289 | `riskCell` | `function riskCell(` |
| 4,290 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,320 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,345_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,346 | `pulseClipN` | `var pulseClipN =` |
| 4,347 | `beatPath` | `function beatPath(` |
| 4,364 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,378 | `pulsePeek` | `function pulsePeek(` |
| 4,381 | `pulseBlock` | `function pulseBlock(` |
| 4,398 | `CHEV` | `var CHEV =` |
| 4,399 | `peekCard` | `function peekCard(` |
| 4,418 | `dropSvg` | `function dropSvg(` |
| 4,420 | `volumeSvg` | `function volumeSvg(` |
| 4,424 | `gaugeSvg` | `function gaugeSvg(` |
| 4,428 | `diamondSvg` | `function diamondSvg(` |
| 4,432 | `sproutSvg` | `function sproutSvg(` |
| 4,440 | `markSvg` | `function markSvg(` |
| 4,443 | `hormoneSvg` | `function hormoneSvg(` |
| 4,448 | `flameSvg` | `function flameSvg(` |
| 4,451 | `clockSvg` | `function clockSvg(` |
| 4,452 | `gearSvg` | `function gearSvg(` |
| 4,460 | `thermoSvg` | `function thermoSvg(` |
| 4,463 | `trendUpSvg` | `function trendUpSvg(` |
| 4,465 | `ecgSvg` | `function ecgSvg(` |
| 4,467 | `circulationSvg` | `function circulationSvg(` |
| 4,468 | `weatherSvg` | `function weatherSvg(` |
| 4,476 | `moodSvg` | `function moodSvg(` |
| 4,480 | `boltSvg` | `function boltSvg(` |
| 4,481 | `houseSvg` | `function houseSvg(` |
| 4,484 | `sunriseSvg` | `function sunriseSvg(` |
| 4,488 | `volatilitySvg` | `function volatilitySvg(` |
| 4,493 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 4,499_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,500 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,501 | `dsrHistory` | `var dsrHistory =` |
| 4,502 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,503 | `savHistory` | `var savHistory =` |
| 4,506 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,515 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,516 | `dsrNow` | `var dsrNow =` |
| 4,517 | `savNow` | `var savNow =` |
| 4,518 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,519 | `householdsWord` | `function householdsWord(` |
| 4,526 | `householdsNow` | `var householdsNow =` |
| 4,527 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,544 | `savInfoHtml` | `function savInfoHtml(` |
| 4,562 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,569 | `curveSub` | `var curveSub =` |
| 4,570 | `vixPct` | `function vixPct(` |
| 4,574 | `curveNoteFull` | `var curveNoteFull =` |
| 4,585 | `volatilityRing` | `function volatilityRing(` |
| 4,590 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,591 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,606 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,612 | `marketCycles` | `var marketCycles =` |
| 4,640 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,642_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,643 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,644 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 4,649_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,650 | `slopeOf` | `function slopeOf(` |
| 4,655 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,656 | `readSeason` | `function readSeason(` |
| 4,675 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,676 | `qLabel` | `function qLabel(` |
| 4,697 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,699_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,700 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,701 | `seasonTitle` | `function seasonTitle(` |
| 4,702 | `monthLabel` | `function monthLabel(` |
| 4,703 | `cycleReturns` | `function cycleReturns(` |
| 4,713 | `cycleModel` | `function cycleModel(` |
| 4,744 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,752 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,758 | `nowModel` | `var nowModel =` |
| 4,759 | `readingNow` | `var readingNow =` |
| 4,760 | `cpiNow` | `var cpiNow =` |
| 4,761 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,762 | `currentSeason` | `var currentSeason =` |
| 4,763 | `seasonWhy` | `var seasonWhy =` |
| 4,765 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,767_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,768 | `CALM` | `var CALM =` |
| 4,769 | `FEELINGS` | `var FEELINGS =` |
| 4,770 | `seasonHalf` | `function seasonHalf(` |
| 4,771 | `rankToDate` | `function rankToDate(` |
| 4,775 | `readFeeling` | `function readFeeling(` |
| 4,786 | `readPosture` | `function readPosture(` |
| 4,794 | `marketCache` | `var marketCache =` |
| 4,795 | `marketMonths` | `function marketMonths(` |
| 4,815 | `seasonInMonth` | `function seasonInMonth(` |
| 4,820 | `stretchRank` | `function stretchRank(` |
| 4,823 | `marketFacts` | `function marketFacts(` |
| 4,834 | `followedCache` | `var followedCache =` |
| 4,835 | `whatFollowed` | `function whatFollowed(` |
| 4,857 | `lastFeeling` | `function lastFeeling(` |
| 4,862 | `diagnoseClose` | `function diagnoseClose(` |
| 4,870 | `diagnoseToday` | `function diagnoseToday(` |
| 4,887 | `vitalRingSvg` | `function vitalRingSvg(` |
| 4,898 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 4,899 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 4,900 | `spreadLabel` | `function spreadLabel(` |
| 4,904 | `policyFacts` | `function policyFacts(` |
| 4,911 | `policyFactRows` | `function policyFactRows(` |
| 4,917 | `allSources` | `var allSources =` |
| 4,931 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 4,943_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,944 | `SVG_NS` | `var SVG_NS =` |
| 4,945 | `svgEl` | `function svgEl(` |
| 4,950 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 4,984_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,985 | `clampPct` | `function clampPct(` |
| 4,988 | `detailTexts` | `var detailTexts =` |
| 4,989 | `detailSlots` | `var detailSlots =` |
| 4,990 | `detailSlot` | `function detailSlot(` |
| 5,000 | `metricSheet` | `function metricSheet(` |
| 5,005 | `ledeHtml` | `function ledeHtml(` |
| 5,006 | `facts` | `function facts(` |
| 5,007 | `factsFrom` | `function factsFrom(` |
| 5,011 | `expandBtn` | `function expandBtn(` |
| 5,015 | `sheetRenderers` | `var sheetRenderers =` |
| 5,016 | `pageMode` | `var pageMode =` |
| 5,021 | `pageCycles` | `var pageCycles =` |
| 5,026 | `pageRange` | `var pageRange =` |
| 5,032 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,061_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,064 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,065_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,066 | `subjectRow` | `function subjectRow(` |
| 5,076 | `subjectIcon` | `function subjectIcon(` |
| 5,077 | `srcHtml` | `function srcHtml(` |
| 5,078 | `TIMING` | `var TIMING =` |
| 5,084 | `timingMark` | `function timingMark(` |
| 5,092 | `timingPill` | `function timingPill(` |
| 5,101 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,109 | `seatPageFoot` | `function seatPageFoot(` |
| 5,121 | `timingMembers` | `var timingMembers =` |
| 5,122 | `registerTiming` | `function registerTiming(` |
| 5,124 | `headHtml` | `function headHtml(` |
| 5,132 | `heldHighlights` | `var heldHighlights =` |
| 5,133 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,160_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,161 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,162 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,170 | `withLatestPoint` | `function withLatestPoint(` |
| 5,175 | `pressureMaturities` | `function pressureMaturities(` |
| 5,199 | `registerFlowPages` | `function registerFlowPages(` |
| 5,258 | `renderPressureRow` | `function renderPressureRow(` |
| 5,266 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,285 | `ylmColumns` | `function ylmColumns(` |
| 5,305 | `ylmFitLine` | `function ylmFitLine(` |
| 5,317 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,462_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,463 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,500_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,501 | `spreadSeries` | `function spreadSeries(` |
| 5,545 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,669_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,670 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,696_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,697 | `drawHznHead` | `function drawHznHead(` |
| 5,712 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,774_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,775 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,783_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,784 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 5,883_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,884 | `renderVolatility` | `function renderVolatility(` |
| 5,933 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 5,963_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,964 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,011_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,012 | `totalRiseIn` | `function totalRiseIn(` |
| 6,022 | `eraInflation` | `function eraInflation(` |
| 6,033 | `eraGrowth` | `function eraGrowth(` |
| 6,049 | `fmtSigned` | `function fmtSigned(` |
| 6,050 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,051 | `growthShown` | `function growthShown(` |
| 6,052 | `growthShownCap` | `function growthShownCap(` |
| 6,053 | `phaseClass` | `function phaseClass(` |
| 6,054 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,058 | `cycleViewEl` | `var cycleViewEl =` |
| 6,059 | `shownEra` | `var shownEra =` |
| 6,060 | `calendarReset` | `var calendarReset =` |
| 6,061 | `metricPageReset` | `var metricPageReset =` |
| 6,062 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,063 | `topbarBack` | `var topbarBack =` |
| 6,064 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,071_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,072 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,153_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,154 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,172_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,173 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,194_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,196 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,197 | `hubSet` | `function hubSet(` |
| 6,208 | `quarterPopup` | `function quarterPopup(` |
| 6,231 | `hubShowDefault` | `function hubShowDefault(` |
| 6,239 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,245 | `hubShowYear` | `function hubShowYear(` |
| 6,255 | `renderCycleDial` | `function renderCycleDial(` |
| 6,336 | `m2Step` | `function m2Step(` |
| 6,339 | `heatStep` | `function heatStep(` |
| 6,343 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,354_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,355 | `renderCycleView` | `function renderCycleView(` |
| 6,361 | `shownEraModel` | `var shownEraModel =` |
| 6,362 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,364_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,365 | `stripGroupName` | `var stripGroupName =` |
| 6,366 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,394 | `marketStripHtml` | `function marketStripHtml(` |
| 6,428 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,429 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,458_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,459 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,465 | `INDICATOR_GROUP` | `var INDICATOR_GROUP =` |
| 6,471 | `SPLIT_PERIOD` | `var SPLIT_PERIOD =` |
| 6,472 | `debtSvg` | `function debtSvg(` |
| 6,473 | `interestSvg` | `function interestSvg(` |
| 6,475 | `budgetSvg` | `function budgetSvg(` |
| 6,477 | `lede` | `function lede(` |
| 6,478 | `periodOf` | `function periodOf(` |
| 6,479 | `qLast` | `function qLast(` |
| 6,480 | `meterWord` | `function meterWord(` |
| 6,481 | `splitSpecs` | `function splitSpecs(` |
| 6,501 | `productivitySpec` | `function productivitySpec(` |
| 6,510 | `splitMid` | `function splitMid(` |
| 6,511 | `splitInfo` | `function splitInfo(` |
| 6,515 | `quarterTicks` | `function quarterTicks(` |
| 6,520 | `drawSplit` | `function drawSplit(` |
| 6,537 | `mountSplit` | `function mountSplit(` |
| 6,552 | `splitPeek` | `function splitPeek(` |
| 6,560 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,568 | `deficitPeek` | `function deficitPeek(` |
| 6,574 | `catSheet` | `function catSheet(` |
| 6,579 | `groupId` | `function groupId(` |
| 6,580 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,581 | `seatGroups` | `function seatGroups(` |
| 6,584 | `groupSheet` | `function groupSheet(` |
| 6,594 | `appendPicks` | `function appendPicks(` |
| 6,602 | `categoryCats` | `function categoryCats(` |

### The split indicators' insights

_line 6,620_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,621 | `buffettInsight` | `function buffettInsight(` |
| 6,636 | `debtInsight` | `function debtInsight(` |
| 6,651 | `productivityInsight` | `function productivityInsight(` |
| 6,661 | `interestInsight` | `function interestInsight(` |
| 6,676 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,706 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,731 | `activityStackHtml` | `function activityStackHtml(` |
| 6,741 | `seatTemperature` | `function seatTemperature(` |
| 6,749 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,784_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,785 | `partsOf` | `function partsOf(` |
| 6,794 | `discOf` | `function discOf(` |
| 6,797 | `authored` | `function authored(` |
| 6,798 | `registerRoster` | `function registerRoster(` |
| 6,832 | `indRow` | `function indRow(` |
| 6,836 | `IND_ORDER` | `var IND_ORDER =` |
| 6,837 | `indGroupRow` | `function indGroupRow(` |
| 6,842 | `indRows` | `function indRows(` |
| 6,856 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 6,865_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,866 | `NAV` | `var NAV =` |
| 6,867 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 6,961_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,962 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,010_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,011 | `fmtDay` | `function fmtDay(` |
| 7,012 | `qPretty` | `function qPretty(` |
| 7,013 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,014 | `peekArt` | `function peekArt(` |
| 7,015 | `indPeriod` | `function indPeriod(` |
| 7,024 | `catItem` | `function catItem(` |
| 7,074 | `insightCirculation` | `function insightCirculation(` |
| 7,107 | `insightWeather` | `function insightWeather(` |
| 7,150 | `CAT_MINI` | `var CAT_MINI =` |
| 7,153 | `placeSignPair` | `function placeSignPair(` |
| 7,185 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,201 | `buildCategories` | `function buildCategories(` |
| 7,236 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,278_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,279 | `capeFmt1` | `function capeFmt1(` |
| 7,280 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 7,281 | `GDP_STOPS` | `var GDP_STOPS =` |
| 7,282 | `VAL_STOPS` | `var VAL_STOPS =` |
| 7,283 | `DEF_STOPS` | `var DEF_STOPS =` |
| 7,284 | `actCycleMonths` | `function actCycleMonths(` |
| 7,292 | `householdsHighlights` | `function householdsHighlights(` |
| 7,311 | `redrawSheet` | `function redrawSheet(` |
| 7,315 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,362 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,401 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,451 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,481 | `valuationHighlights` | `function valuationHighlights(` |
| 7,494 | `tempHighlights` | `function tempHighlights(` |
| 7,511 | `gdpHighlights` | `function gdpHighlights(` |
| 7,526 | `renderMetricPages` | `function renderMetricPages(` |
| 7,536 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,546_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,547 | `DIAG_SYSTEMS` | `var DIAG_SYSTEMS =` |
| 7,554 | `FEELING_RULES` | `var FEELING_RULES =` |
| 7,563 | `FEELING_STATE` | `var FEELING_STATE =` |
| 7,564 | `POSTURE_STATE` | `var POSTURE_STATE =` |
| 7,565 | `POSTURE_SAYS` | `var POSTURE_SAYS =` |
| 7,572 | `BODY_SAYS` | `var BODY_SAYS =` |
| 7,580 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,585 | `readDoor` | `function readDoor(` |
| 7,593 | `pct` | `function pct(` |
| 7,594 | `symptom` | `function symptom(` |
| 7,595 | `momentumSymptom` | `function momentumSymptom(` |
| 7,599 | `symptomsFor` | `function symptomsFor(` |
| 7,607 | `rosterRows` | `function rosterRows(` |
| 7,608 | `closeFigure` | `function closeFigure(` |
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
| 7,682 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,686 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,687 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,700_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,701 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,702 | `cycleDataOn` | `function cycleDataOn(` |
| 7,703 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,723 | `wireCycleData` | `function wireCycleData(` |
| 7,738 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,783_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,784 | `eraOpen` | `var eraOpen =` |
| 7,785 | `kT` | `function kT(` |
| 7,789 | `eraReading` | `function eraReading(` |
| 7,801 | `eraFig` | `function eraFig(` |
| 7,808 | `eraValue` | `function eraValue(` |
| 7,814 | `eraRange` | `function eraRange(` |
| 7,819 | `eraMini` | `function eraMini(` |
| 7,824 | `eraCard` | `function eraCard(` |
| 7,843 | `eraShow` | `function eraShow(` |
| 7,852 | `enterEra` | `function enterEra(` |
| 7,859 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,866_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,867 | `rosterGroups` | `function rosterGroups(` |
| 7,896 | `__roster` | `var __roster =` |
| 7,897 | `readingRoster` | `function readingRoster(` |
| 7,921 | `readFig` | `function readFig(` |
| 7,926 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 7,933_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,934 | `cycleSymptoms` | `function cycleSymptoms(` |
| 7,958 | `placeWords` | `function placeWords(` |
| 7,962 | `symptomNote` | `function symptomNote(` |
| 7,969 | `symptomRow` | `function symptomRow(` |
| 7,976 | `cycleTrack` | `function cycleTrack(` |
| 7,991 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 7,999_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,000 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,049_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,050 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,081_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,082 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **6 compute a value**, 6 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,961–1,964 | `LIVE_CACHE` | Live data without a render refactor |
| 2,300–2,305 | `productivityRecord` | Productivity growth is not in this panel |
| 2,318–4,249 | `productivityReading` | Productivity growth is not in this panel |
| 4,236–4,249 | `horizonRead` | A series' highest reading within a span |
| 4,677–4,690 | `seasonTrackAll` | The season, computed |
| 4,692–4,696 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,382 |
| `desire-range` | 5,250 |
| `fear-range` | 5,928 |
| `hormones-range` | 5,816 |
| `hzn-range` | 5,737 |
| `pressure-range` | 2,027 |
| `pulse-range` | 5,217 |
| `sheet-marker-deficit` | 7,379 |
| `sheet-metric-gdp` | 7,341 |
| `sheet-metric-households` | 7,403 |
| `sheet-metric-temp` | 7,316 |
| `sheet-metric-valuation` | 7,424 |
| `sheet-sign-activity` | 7,364 |
| `sheet-sign-desire` | 5,251 |
| `sheet-sign-horizon` | 5,738 |
| `sheet-sign-hormones` | 5,817 |
| `sheet-sign-pressure` | 5,454 |
| `sheet-sign-pulse` | 5,216 |
| `sheet-sign-sentiment` | 5,929 |
| `sheet-sign-volume` | 5,234 |
| `volume-range` | 5,235 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,386 |
| `desire-range` | 5,239 |
| `fear-range` | 5,895 |
| `hzn-range` | 5,722 |
| `pressure-range` | 5,423 |
| `pulse-range` | 5,203 |
| `sheet-metric-gdp` | 7,342 |
| `sheet-metric-temp` | 7,317 |
| `sheet-metric-valuation` | 7,425 |
| `volume-range` | 5,221 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,023 |
| `sheet-metric-gdp` | 3,024 |
| `sheet-sign-activity` | 3,025 |
| `sheet-metric-valuation` | 3,026 |
| `sheet-metric-households` | 3,027 |
| `deficit-range` | 3,028 |
| `volume-range` | 3,029 |
| `pulse-range` | 3,030 |
| `hzn-range` | 3,031 |
| `desire-range` | 3,032 |
| `fear-range` | 3,033 |
| `hormones-range` | 3,034 |
| `pressure-range` | 3,035 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 148 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 237 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 273 | season strip |
| 299 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 368 | tab bar (app-style segmented navigation) |
| 403 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 419 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 490 | journal (editorial content tab) |
| 496 | content tab: reading companion |
| 545 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 742 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 817 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 890 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,048 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,063 | The symptoms: a cycle's years against today |
| 1,140 | hero: yield curve |
| 1,172 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,191 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,216 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,224 | long cycle (structural layer) |
| 1,231 | indicator grid |
| 1,257 | info icon + popover (progressive disclosure for longer notes) |
| 1,271 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,354 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (104), which is what the renderers fill:

| Line | id |
|---|---|
| 1,370 | `topbar-back` |
| 1,373 | `topbar-title` |
| 1,374 | `menu-btn` |
| 1,388 | `main` |
| 1,391 | `cycle-view` |
| 1,394 | `cycle-kicker` |
| 1,397 | `cycle-dial` |
| 1,399 | `season-wheel-hub-date` |
| 1,400 | `season-wheel-hub-theme` |
| 1,401 | `season-wheel-hub-detail` |
| 1,409 | `today-analysis` |
| 1,410 | `peek-row` |
| 1,411 | `sheet-metric-temp` |
| 1,412 | `temp-timing` |
| 1,413 | `temp-chart` |
| 1,414 | `temp-rangebar` |
| 1,416 | `temp-head` |
| 1,417 | `temp-history` |
| 1,418 | `temp-hist-tooltip` |
| 1,419 | `temp-trend` |
| 1,421 | `temp-highlights` |
| 1,423 | `sheet-metric-gdp` |
| 1,424 | `gdp-timing` |
| 1,425 | `gdp-chart` |
| 1,426 | `gdp-rangebar` |
| 1,428 | `gdp-head` |
| 1,429 | `gdp-history` |
| 1,430 | `gdp-hist-tooltip` |
| 1,431 | `gdp-trend` |
| 1,433 | `gdp-highlights` |
| 1,437 | `sheet-marker-deficit` |
| 1,439 | `sheet-metric-households` |
| 1,440 | `households-timing` |
| 1,441 | `households-chart` |
| 1,442 | `households-highlights` |
| 1,445 | `sheet-metric-valuation` |
| 1,446 | `valuation-timing` |
| 1,447 | `valuation-chart` |
| 1,448 | `valuation-highlights` |
| 1,455 | `subj-value-hormones` |
| 1,456 | `subj-say-hormones` |
| 1,462 | `hormones-history` |
| 1,463 | `hormones-insights` |
| 1,472 | `subj-value-horizon` |
| 1,473 | `subj-say-horizon` |
| 1,474 | `subj-spark-horizon` |
| 1,480 | `hzn-timeline` |
| 1,482 | `hzn-head` |
| 1,483 | `spread-history-shell` |
| 1,484 | `spread-history-svg` |
| 1,485 | `spread-history-tooltip` |
| 1,487 | `hzn-trend` |
| 1,489 | `horizon-insights` |
| 1,498 | `subj-value-pressure` |
| 1,499 | `subj-say-pressure` |
| 1,505 | `pressure-timeline` |
| 1,507 | `pressure-head` |
| 1,508 | `ylm-shell` |
| 1,509 | `ylm-svg` |
| 1,510 | `ylm-tooltip` |
| 1,512 | `ylm-trend` |
| 1,514 | `pressure-insights` |
| 1,521 | `subj-ring-sentiment` |
| 1,524 | `subj-value-sentiment` |
| 1,525 | `subj-say-sentiment` |
| 1,526 | `subj-spark-sentiment` |
| 1,532 | `fear-history` |
| 1,533 | `curve-highlights` |
| 1,539 | `signs-list` |
| 1,545 | `calendar-list` |
| 1,552 | `cycle-data` |
| 1,554 | `cycle-legend` |
| 1,555 | `cycle-list` |
| 1,556 | `cycle-more` |
| 1,557 | `cycle-more-label` |
| 1,562 | `calendar-cycle` |
| 1,582 | `search-home` |
| 1,584 | `search-input` |
| 1,586 | `search-list` |
| 1,590 | `more-menu` |
| 1,593 | `menu-back` |
| 1,607 | `sources-open` |
| 1,615 | `appearance-current` |
| 1,621 | `sheet-howto` |
| 1,664 | `sheet-book` |
| 1,695 | `seasons-kicker` |
| 1,697 | `seasons-rows` |
| 1,700 | `framework-kicker` |
| 1,703 | `framework-rows` |
| 1,713 | `sheet-appearance` |
| 1,721 | `theme-toggle` |
| 1,728 | `sheet-contact` |
| 1,737 | `contact-form` |
| 1,738 | `contact-title` |
| 1,739 | `contact-message` |
| 1,741 | `contact-hint` |
| 1,742 | `contact-send` |
| 1,748 | `sheet-sources` |
| 1,751 | `sources-back` |
| 1,756 | `asof-text` |
| 1,757 | `sources-groups` |
| 1,763 | `detail-backdrop` |
| 1,765 | `detail-modal-close` |
| 1,766 | `detail-modal-body` |

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

