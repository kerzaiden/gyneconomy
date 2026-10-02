# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,225 lines**, about 647 KB, roughly **184 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `1f4503c` on 2026-10-02.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,372 | the whole stylesheet, every token and rule |
| **Markup** | 1,373–1,756 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,757–8,192 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,193–8,225 | </body></html> |

Counts: **433** top-level functions, **185** top-level vars, **9** top-level IIFEs in the script.

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
| 2,893 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,899 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,900 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,901 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,903_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,904 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,905 | `m2vHistory` | `var m2vHistory =` |
| 2,921 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 2,973 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,015_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,016 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,017 | `DOTS` | `var DOTS =` |
| 3,019 | `headPickRow` | `function headPickRow(` |
| 3,025 | `histHead` | `function histHead(` |
| 3,040 | `headNoteIdx` | `var headNoteIdx =` |
| 3,041 | `headMenuHtml` | `function headMenuHtml(` |
| 3,066 | `headMenuFor` | `var headMenuFor =` |
| 3,067 | `headSubFor` | `var headSubFor =` |
| 3,068 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,097 | `histNote` | `function histNote(` |
| 3,098 | `meterFlagged` | `function meterFlagged(` |
| 3,105 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,128 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,142 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,155 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,160 | `CONFIDENCE_SRC` | `var CONFIDENCE_SRC =` |
| 3,164 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 3,176 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,190 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,209 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,240 | `desireBlock` | `function desireBlock(` |
| 3,251 | `volumeBlock` | `function volumeBlock(` |
| 3,263 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,275 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,282_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,283 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,284 | `m2Level` | `var m2Level =` |
| 3,305 | `m2Yoy` | `var m2Yoy =` |
| 3,306 | `M2_NORM` | `var M2_NORM =` |
| 3,308 | `volumeVerdict` | `function volumeVerdict(` |
| 3,316 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,317 | `unempHistory` | `var unempHistory =` |
| 3,323 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,332 | `NROU_NOW` | `var NROU_NOW =` |
| 3,333 | `unempState` | `function unempState(` |
| 3,339 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,391_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,392 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,401 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,457 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,458 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,459 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,460_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,462 | `householdsChart` | `function householdsChart(` |
| 3,512 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,565 | `GDP_NORM` | `var GDP_NORM =` |
| 3,566 | `gdpNowQ` | `var gdpNowQ =` |
| 3,567 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,589 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,640 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,685 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,693 | `velocityVerdict` | `function velocityVerdict(` |
| 3,701 | `derivePulseTag` | `function derivePulseTag(` |
| 3,707 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,739_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,740 | `seasonReading` | `var seasonReading =` |
| 3,784 | `frameworkRows` | `var frameworkRows =` |
| 3,794 | `vixRow` | `var vixRow =` |
| 3,795 | `VIX_CALM` | `var VIX_CALM =` |
| 3,796 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,800 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,807_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,808 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,817_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,818 | `calendarTodayY` | `var calendarTodayY =` |
| 3,820 | `vix3mClose` | `var vix3mClose =` |
| 3,821 | `fearCurve` | `function fearCurve(` |
| 3,826 | `curveVerdict` | `function curveVerdict(` |
| 3,831 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,840_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,841 | `modeBar` | `function modeBar(` |
| 3,848 | `pickerOpen` | `var pickerOpen =` |
| 3,849 | `cycleByName` | `function cycleByName(` |
| 3,853 | `openCycle` | `function openCycle(` |
| 3,857 | `cycleSlice` | `function cycleSlice(` |
| 3,865 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,873 | `cycleMonths` | `function cycleMonths(` |
| 3,881 | `histControls` | `function histControls(` |
| 3,890 | `pageCycle` | `function pageCycle(` |
| 3,894 | `cycLabel` | `function cycLabel(` |
| 3,898 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,903 | `cyclePicker` | `function cyclePicker(` |
| 3,922 | `rangeBar` | `function rangeBar(` |
| 3,929 | `trendOf` | `function trendOf(` |
| 3,944 | `TREND_ARROW` | `var TREND_ARROW =` |
| 3,948 | `trendPill` | `function trendPill(` |

### Insights: what the series says about today, computed

_line 3,959_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,960 | `yearOf` | `function yearOf(` |
| 3,961 | `mean` | `function mean(` |

### The record rows

_line 3,962_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,963 | `headSigma` | `function headSigma(` |
| 3,968 | `atQuarter` | `function atQuarter(` |
| 3,969 | `atMonth` | `function atMonth(` |
| 3,970 | `ordinal` | `function ordinal(` |
| 3,971 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 3,974_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,975 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 3,982 | `moreRow` | `function moreRow(` |
| 3,988 | `tempCaptionFull` | `var tempCaptionFull =` |
| 3,989 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 3,995_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,996 | `xLabelOf` | `function xLabelOf(` |
| 4,006 | `fitLine` | `function fitLine(` |
| 4,010 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,028_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,029 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,037 | `vGrid` | `function vGrid(` |
| 4,041 | `COL_FILL` | `var COL_FILL =` |
| 4,042 | `colPath` | `function colPath(` |
| 4,047 | `colWidth` | `function colWidth(` |
| 4,052 | `AXIS` | `var AXIS =` |
| 4,053 | `histFrame` | `function histFrame(` |
| 4,060 | `xLabel` | `function xLabel(` |
| 4,063 | `crossLine` | `function crossLine(` |
| 4,066 | `zeroRule` | `function zeroRule(` |
| 4,069 | `meanRule` | `function meanRule(` |
| 4,070 | `pendingGeom` | `var pendingGeom =` |
| 4,071 | `publishGeom` | `function publishGeom(` |
| 4,072 | `attachHistory` | `function attachHistory(` |
| 4,081 | `histBar` | `function histBar(` |
| 4,084 | `histTip` | `function histTip(` |
| 4,085 | `avgRule` | `function avgRule(` |
| 4,088 | `vhOpen` | `function vhOpen(` |
| 4,089 | `chartAxes` | `function chartAxes(` |
| 4,119 | `divergeChart` | `function divergeChart(` |

### A series' highest reading within a span

_line 4,154_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,156 | `maxIn` | `function maxIn(` |
| 4,161 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,162 | `PEEK_W` | `var PEEK_W =` |
| 4,163 | `PEEK_H` | `var PEEK_H =` |
| 4,164 | `colPeek` | `function colPeek(` |
| 4,182 | `meterPeek` | `function meterPeek(` |
| 4,199 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,204 | `pressureZone` | `function pressureZone(` |
| 4,210 | `HZN_BACK` | `var HZN_BACK =` |
| 4,211 | `hznLast` | `function hznLast(` |
| 4,212 | `hznBack` | `function hznBack(` |
| 4,213 | `horizonWord` | `function horizonWord(` |
| 4,233 | `HZN_METERS` | `var HZN_METERS =` |
| 4,241 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,262 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,267 | `RISK_RISK` | `var RISK_RISK =` |
| 4,272 | `riskCell` | `function riskCell(` |
| 4,273 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,303 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,328_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,329 | `pulseClipN` | `var pulseClipN =` |
| 4,330 | `beatPath` | `function beatPath(` |
| 4,347 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,361 | `pulsePeek` | `function pulsePeek(` |
| 4,364 | `pulseBlock` | `function pulseBlock(` |
| 4,381 | `CHEV` | `var CHEV =` |
| 4,382 | `peekCard` | `function peekCard(` |
| 4,401 | `dropSvg` | `function dropSvg(` |
| 4,403 | `volumeSvg` | `function volumeSvg(` |
| 4,407 | `gaugeSvg` | `function gaugeSvg(` |
| 4,411 | `diamondSvg` | `function diamondSvg(` |
| 4,415 | `sproutSvg` | `function sproutSvg(` |
| 4,423 | `markSvg` | `function markSvg(` |
| 4,426 | `heartSvg` | `function heartSvg(` |
| 4,428 | `batterySvg` | `function batterySvg(` |
| 4,431 | `flameSvg` | `function flameSvg(` |
| 4,434 | `clockSvg` | `function clockSvg(` |
| 4,435 | `thermoSvg` | `function thermoSvg(` |
| 4,438 | `stethoscopeSvg` | `function stethoscopeSvg(` |
| 4,440 | `trendUpSvg` | `function trendUpSvg(` |
| 4,442 | `ecgSvg` | `function ecgSvg(` |
| 4,444 | `circulationSvg` | `function circulationSvg(` |
| 4,445 | `weatherSvg` | `function weatherSvg(` |
| 4,453 | `moodSvg` | `function moodSvg(` |
| 4,457 | `boltSvg` | `function boltSvg(` |
| 4,458 | `houseSvg` | `function houseSvg(` |
| 4,461 | `marketSvg` | `function marketSvg(` |
| 4,464 | `bagSvg` | `function bagSvg(` |
| 4,467 | `volatilitySvg` | `function volatilitySvg(` |

### Load: what households owe, and what they keep

_line 4,475_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,476 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,477 | `dsrHistory` | `var dsrHistory =` |
| 4,478 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,479 | `savHistory` | `var savHistory =` |
| 4,482 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,491 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,492 | `dsrNow` | `var dsrNow =` |
| 4,493 | `savNow` | `var savNow =` |
| 4,494 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,495 | `householdsWord` | `function householdsWord(` |
| 4,502 | `householdsNow` | `var householdsNow =` |
| 4,503 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,520 | `savInfoHtml` | `function savInfoHtml(` |
| 4,538 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,545 | `curveSub` | `var curveSub =` |
| 4,546 | `vixPct` | `function vixPct(` |
| 4,550 | `curveNoteFull` | `var curveNoteFull =` |
| 4,561 | `volatilityRing` | `function volatilityRing(` |
| 4,566 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,567 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,582 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |

### The S&P 500, year by year

_line 4,587_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,588 | `sp500Years` | `var sp500Years =` |
| 4,589 | `marketWord` | `function marketWord(` |
| 4,612 | `marketInfoHtml` | `function marketInfoHtml(` |
| 4,622 | `marketCycles` | `var marketCycles =` |
| 4,650 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,652_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,653 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,654 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The roster: every reading, declared once

_line 4,659_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,660 | `TIMING` | `var TIMING =` |
| 4,666 | `CATEGORIES` | `var CATEGORIES =` |
| 4,672 | `ROSTER` | `var ROSTER =` |
| 4,722 | `GROUP_MARK` | `var GROUP_MARK =` |
| 4,723 | `ROSTER_BY` | `var ROSTER_BY =` |
| 4,725 | `pageState` | `function pageState(` |
| 4,730 | `pageMode` | `var pageMode =` |
| 4,731 | `pageCycles` | `var pageCycles =` |
| 4,732 | `pageRange` | `var pageRange =` |
| 4,733 | `PAGE_STOPS` | `var PAGE_STOPS =` |
| 4,734 | `HIST_HEAD` | `var HIST_HEAD =` |
| 4,735 | `keyed` | `function keyed(` |
| 4,742 | `hyMonths` | `function hyMonths(` |
| 4,745 | `prettyKey` | `function prettyKey(` |
| 4,750 | `lastDate` | `function lastDate(` |
| 4,751 | `compiledDay` | `function compiledDay(` |
| 4,752 | `labPeriod` | `function labPeriod(` |
| 4,753 | `rosterFor` | `function rosterFor(` |
| 4,754 | `rowReadings` | `function rowReadings(` |
| 4,755 | `indOf` | `function indOf(` |
| 4,756 | `peekOf` | `function peekOf(` |
| 4,761 | `cardDate` | `function cardDate(` |
| 4,762 | `checkRoster` | `function checkRoster(` |

### The season, computed

_line 4,783_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,784 | `slopeOf` | `function slopeOf(` |
| 4,789 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,790 | `readSeason` | `function readSeason(` |
| 4,809 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,810 | `qLabel` | `function qLabel(` |
| 4,831 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,833_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,834 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,835 | `seasonTitle` | `function seasonTitle(` |
| 4,836 | `monthLabel` | `function monthLabel(` |
| 4,837 | `cycleReturns` | `function cycleReturns(` |
| 4,847 | `cycleModel` | `function cycleModel(` |
| 4,878 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,886 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,892 | `nowModel` | `var nowModel =` |
| 4,893 | `readingNow` | `var readingNow =` |
| 4,894 | `cpiNow` | `var cpiNow =` |
| 4,895 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,896 | `currentSeason` | `var currentSeason =` |
| 4,897 | `seasonWhy` | `var seasonWhy =` |
| 4,899 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,901_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,902 | `rankToDate` | `function rankToDate(` |
| 4,906 | `marketCache` | `var marketCache =` |
| 4,907 | `marketMonths` | `function marketMonths(` |
| 4,915 | `seasonInMonth` | `function seasonInMonth(` |
| 4,920 | `yearAfter` | `function yearAfter(` |
| 4,924 | `trackCache` | `var trackCache =` |
| 4,925 | `feelingTrack` | `function feelingTrack(` |
| 4,933 | `monthsApart` | `function monthsApart(` |
| 4,934 | `feelingSpells` | `function feelingSpells(` |
| 4,945 | `spellRecord` | `function spellRecord(` |
| 4,951 | `diagnoseClose` | `function diagnoseClose(` |
| 4,955 | `diagnoseToday` | `function diagnoseToday(` |

### Her mood: one range from Depression to Mania

_line 4,960_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,961 | `rankIn` | `function rankIn(` |
| 4,966 | `moodLists` | `var moodLists =` |
| 4,967 | `moodSeries` | `function moodSeries(` |
| 4,975 | `moodAt` | `function moodAt(` |
| 4,981 | `MOOD_TURN` | `var MOOD_TURN =` |
| 4,982 | `MOOD_RISING` | `var MOOD_RISING =` |
| 4,983 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 4,984 | `moodWord` | `function moodWord(` |
| 4,988 | `moodRead` | `function moodRead(` |
| 4,995 | `moodCache` | `var moodCache =` |
| 4,996 | `moodTrack` | `function moodTrack(` |
| 5,002 | `moodToday` | `function moodToday(` |
| 5,007 | `cycleStory` | `function cycleStory(` |
| 5,018 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,029 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,030 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,031 | `spreadLabel` | `function spreadLabel(` |
| 5,035 | `policyFacts` | `function policyFacts(` |
| 5,042 | `policyFactRows` | `function policyFactRows(` |
| 5,048 | `allSources` | `var allSources =` |
| 5,062 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,074_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,075 | `SVG_NS` | `var SVG_NS =` |
| 5,076 | `svgEl` | `function svgEl(` |
| 5,081 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,115_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,116 | `clampPct` | `function clampPct(` |
| 5,119 | `detailTexts` | `var detailTexts =` |
| 5,120 | `detailSlots` | `var detailSlots =` |
| 5,121 | `detailSlot` | `function detailSlot(` |
| 5,131 | `metricSheet` | `function metricSheet(` |
| 5,136 | `ledeHtml` | `function ledeHtml(` |
| 5,137 | `facts` | `function facts(` |
| 5,138 | `factsFrom` | `function factsFrom(` |
| 5,142 | `expandBtn` | `function expandBtn(` |
| 5,146 | `sheetRenderers` | `var sheetRenderers =` |
| 5,147 | `drawsPage` | `function drawsPage(` |
| 5,148 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,177_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,180 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,181_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,182 | `subjectRow` | `function subjectRow(` |
| 5,192 | `subjectIcon` | `function subjectIcon(` |
| 5,193 | `srcHtml` | `function srcHtml(` |
| 5,194 | `timingMark` | `function timingMark(` |
| 5,202 | `timingPill` | `function timingPill(` |
| 5,211 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,219 | `seatPageFoot` | `function seatPageFoot(` |
| 5,231 | `timingMembers` | `var timingMembers =` |
| 5,233 | `registerTiming` | `function registerTiming(` |
| 5,235 | `headHtml` | `function headHtml(` |
| 5,240 | `heldHighlights` | `var heldHighlights =` |
| 5,241 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,268_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,269 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,270 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,278 | `withLatestPoint` | `function withLatestPoint(` |
| 5,283 | `pressureMaturities` | `function pressureMaturities(` |
| 5,307 | `registerFlowPages` | `function registerFlowPages(` |
| 5,361 | `renderPressureRow` | `function renderPressureRow(` |
| 5,369 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,388 | `ylmColumns` | `function ylmColumns(` |
| 5,408 | `ylmFitLine` | `function ylmFitLine(` |
| 5,420 | `pressureHead` | `function pressureHead(` |
| 5,438 | `showPressureView` | `function showPressureView(` |
| 5,443 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,576_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,577 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,614_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,615 | `spreadSeries` | `function spreadSeries(` |
| 5,659 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,785_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,786 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: the Treasury spreads, inside Pressure

_line 5,812_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,813 | `renderHorizonPage` | `function renderHorizonPage(` |
| 5,837 | `spreadInsights` | `function spreadInsights(` |

### RENDER: Valuation (slow)

_line 5,867_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,868 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,876_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,877 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 5,974_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,975 | `renderVolatility` | `function renderVolatility(` |
| 6,020 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,050_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,051 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,072_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,073 | `totalRiseIn` | `function totalRiseIn(` |
| 6,083 | `eraInflation` | `function eraInflation(` |
| 6,094 | `eraGrowth` | `function eraGrowth(` |
| 6,110 | `fmtSigned` | `function fmtSigned(` |
| 6,111 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,112 | `growthShown` | `function growthShown(` |
| 6,113 | `growthShownCap` | `function growthShownCap(` |
| 6,114 | `phaseClass` | `function phaseClass(` |
| 6,115 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,119 | `cycleViewEl` | `var cycleViewEl =` |
| 6,120 | `shownEra` | `var shownEra =` |
| 6,121 | `calendarReset` | `var calendarReset =` |
| 6,122 | `metricPageReset` | `var metricPageReset =` |
| 6,123 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,124 | `topbarBack` | `var topbarBack =` |
| 6,125 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,132_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,133 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,214_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,215 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,233_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,234 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,255_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,257 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,258 | `hubSet` | `function hubSet(` |
| 6,269 | `quarterPopup` | `function quarterPopup(` |
| 6,292 | `hubShowDefault` | `function hubShowDefault(` |
| 6,301 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,307 | `hubShowYear` | `function hubShowYear(` |
| 6,317 | `renderCycleDial` | `function renderCycleDial(` |
| 6,398 | `m2Step` | `function m2Step(` |
| 6,401 | `heatStep` | `function heatStep(` |
| 6,405 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,416_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,417 | `renderCycleView` | `function renderCycleView(` |
| 6,423 | `shownEraModel` | `var shownEraModel =` |
| 6,424 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,426_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,427 | `stripGroupName` | `var stripGroupName =` |
| 6,428 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,456 | `marketStripHtml` | `function marketStripHtml(` |
| 6,490 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,491 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,520_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,521 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,527 | `debtSvg` | `function debtSvg(` |
| 6,528 | `interestSvg` | `function interestSvg(` |
| 6,530 | `budgetSvg` | `function budgetSvg(` |
| 6,532 | `lede` | `function lede(` |
| 6,533 | `periodOf` | `function periodOf(` |
| 6,534 | `meterWord` | `function meterWord(` |
| 6,535 | `splitPages` | `function splitPages(` |
| 6,552 | `confidencePage` | `function confidencePage(` |
| 6,558 | `marketPage` | `function marketPage(` |
| 6,564 | `productivityPage` | `function productivityPage(` |
| 6,569 | `splitSpec` | `function splitSpec(` |
| 6,575 | `splitInfo` | `function splitInfo(` |
| 6,579 | `periodTicks` | `function periodTicks(` |
| 6,584 | `periodOfSeries` | `function periodOfSeries(` |
| 6,585 | `drawSplit` | `function drawSplit(` |
| 6,602 | `mountSplit` | `function mountSplit(` |
| 6,615 | `splitPeek` | `function splitPeek(` |
| 6,622 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,630 | `deficitPeek` | `function deficitPeek(` |
| 6,634 | `catSheet` | `function catSheet(` |
| 6,639 | `groupId` | `function groupId(` |
| 6,640 | `groupCard` | `function groupCard(` |
| 6,648 | `groupSheet` | `function groupSheet(` |
| 6,655 | `appendPicks` | `function appendPicks(` |
| 6,663 | `doorSel` | `function doorSel(` |
| 6,664 | `catPicks` | `function catPicks(` |

### The split indicators' insights

_line 6,676_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,677 | `buffettInsight` | `function buffettInsight(` |
| 6,692 | `debtInsight` | `function debtInsight(` |
| 6,707 | `productivityInsight` | `function productivityInsight(` |
| 6,717 | `confidenceInsight` | `function confidenceInsight(` |
| 6,728 | `ORDINAL` | `var ORDINAL =` |
| 6,729 | `marketInsight` | `function marketInsight(` |
| 6,741 | `interestInsight` | `function interestInsight(` |
| 6,756 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,779 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,799 | `activityStackHtml` | `function activityStackHtml(` |
| 6,809 | `seatTemperature` | `function seatTemperature(` |
| 6,817 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,850_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,851 | `partsOf` | `function partsOf(` |
| 6,860 | `authored` | `function authored(` |
| 6,861 | `registerRoster` | `function registerRoster(` |
| 6,883 | `indRow` | `function indRow(` |
| 6,887 | `IND_ORDER` | `var IND_ORDER =` |
| 6,888 | `indGroupRow` | `function indGroupRow(` |
| 6,893 | `catMembers` | `function catMembers(` |
| 6,901 | `indRows` | `function indRows(` |
| 6,915 | `indCategoryHtml` | `function indCategoryHtml(` |
| 6,923 | `categoriesShown` | `function categoriesShown(` |

### THE NAVIGATION CONTROLLER

_line 6,925_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,926 | `NAV` | `var NAV =` |
| 6,927 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,021_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,022 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,069_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,070 | `qPretty` | `function qPretty(` |
| 7,071 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,072 | `peekArt` | `function peekArt(` |
| 7,073 | `indPeriod` | `function indPeriod(` |
| 7,077 | `catItem` | `function catItem(` |
| 7,124 | `insightCirculation` | `function insightCirculation(` |
| 7,157 | `insightWeather` | `function insightWeather(` |
| 7,197 | `seasonCards` | `function seasonCards(` |
| 7,203 | `marketCycleCard` | `function marketCycleCard(` |
| 7,215 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,219 | `seasonName` | `function seasonName(` |
| 7,220 | `MOOD_CHART` | `var MOOD_CHART =` |
| 7,227 | `MOOD_SRC` | `var MOOD_SRC =` |
| 7,232 | `curvePath` | `function curvePath(` |
| 7,240 | `moodCallout` | `function moodCallout(` |
| 7,244 | `moodCycleSvg` | `function moodCycleSvg(` |
| 7,256 | `moodInfo` | `function moodInfo(` |
| 7,265 | `moodFigures` | `function moodFigures(` |
| 7,271 | `moodCard` | `function moodCard(` |
| 7,275 | `insightMood` | `function insightMood(` |
| 7,281 | `storyBeats` | `function storyBeats(` |
| 7,292 | `storyText` | `function storyText(` |
| 7,296 | `PAIR_ART` | `var PAIR_ART =` |
| 7,302 | `placeSignPair` | `function placeSignPair(` |
| 7,325 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,341 | `buildCategories` | `function buildCategories(` |
| 7,357 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,395_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,396 | `capeFmt1` | `function capeFmt1(` |
| 7,397 | `actCycleMonths` | `function actCycleMonths(` |
| 7,405 | `householdsHighlights` | `function householdsHighlights(` |
| 7,424 | `redrawSheet` | `function redrawSheet(` |
| 7,428 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,473 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,510 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,557 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,587 | `valuationHighlights` | `function valuationHighlights(` |
| 7,600 | `tempHighlights` | `function tempHighlights(` |
| 7,617 | `gdpHighlights` | `function gdpHighlights(` |
| 7,632 | `renderMetricPages` | `function renderMetricPages(` |
| 7,642 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,652_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,653 | `todayFace` | `function todayFace(` |
| 7,659 | `readDoor` | `function readDoor(` |
| 7,667 | `pct` | `function pct(` |
| 7,668 | `rosterRows` | `function rosterRows(` |
| 7,669 | `eraEnds` | `function eraEnds(` |
| 7,676 | `eraMove` | `function eraMove(` |
| 7,680 | `HORMONES` | `var HORMONES =` |
| 7,681 | `analysisFor` | `function analysisFor(` |
| 7,687 | `dxRow` | `function dxRow(` |
| 7,688 | `dxText` | `function dxText(` |
| 7,689 | `dxSection` | `function dxSection(` |
| 7,690 | `systemHtml` | `function systemHtml(` |
| 7,693 | `dxHead` | `function dxHead(` |
| 7,698 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,707 | `acrossCycle` | `function acrossCycle(` |
| 7,714 | `trendCardHtml` | `function trendCardHtml(` |
| 7,720 | `spellLines` | `function spellLines(` |
| 7,727 | `trendSub` | `function trendSub(` |
| 7,728 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,732 | `replaceInsights` | `function replaceInsights(` |
| 7,738 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,742 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,755_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,756 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,757 | `cycleDataOn` | `function cycleDataOn(` |
| 7,758 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,778 | `wireCycleData` | `function wireCycleData(` |
| 7,793 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,838_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,839 | `eraOpen` | `var eraOpen =` |
| 7,840 | `kT` | `function kT(` |
| 7,844 | `upTo` | `function upTo(` |
| 7,845 | `pairAt` | `function pairAt(` |
| 7,846 | `eraReading` | `function eraReading(` |
| 7,856 | `eraFig` | `function eraFig(` |
| 7,863 | `eraValue` | `function eraValue(` |
| 7,869 | `eraRange` | `function eraRange(` |
| 7,874 | `eraMini` | `function eraMini(` |
| 7,879 | `eraCard` | `function eraCard(` |
| 7,898 | `eraCards` | `function eraCards(` |
| 7,904 | `eraShow` | `function eraShow(` |
| 7,911 | `enterEra` | `function enterEra(` |
| 7,918 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,925_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,926 | `rosterRow` | `function rosterRow(` |
| 7,939 | `__roster` | `var __roster =` |
| 7,940 | `readingRoster` | `function readingRoster(` |
| 7,947 | `withUnit` | `function withUnit(` |
| 7,948 | `pastFigure` | `function pastFigure(` |
| 7,952 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 7,954_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,955 | `cycleSymptoms` | `function cycleSymptoms(` |
| 7,979 | `placeWords` | `function placeWords(` |
| 7,983 | `symptomNote` | `function symptomNote(` |
| 7,990 | `symptomRow` | `function symptomRow(` |
| 7,997 | `cycleTrack` | `function cycleTrack(` |
| 8,012 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,020_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,021 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,070_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,071 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,102_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,103 | `wireContactForm` | `function wireContactForm(` |

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
| 2,326–4,232 | `confidenceReading` | Consumer confidence |
| 4,219–4,232 | `horizonRead` | A series' highest reading within a span |
| 4,593–4,824 | `marketReading` | The S&P 500, year by year |
| 4,811–4,824 | `seasonTrackAll` | The season, computed |
| 4,826–4,830 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,492 |
| `pressure-range` | 2,006 |
| `sheet-marker-deficit` | 7,489 |
| `sheet-metric-gdp` | 7,453 |
| `sheet-metric-households` | 7,511 |
| `sheet-metric-temp` | 7,429 |
| `sheet-metric-valuation` | 7,531 |
| `sheet-sign-activity` | 7,474 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,496 |
| `desire-range` | 5,343 |
| `fear-range` | 5,983 |
| `pressure-range` | 5,548 |
| `pulse-range` | 5,311 |
| `sheet-metric-gdp` | 7,454 |
| `sheet-metric-temp` | 7,430 |
| `sheet-metric-valuation` | 7,532 |
| `volume-range` | 5,327 |

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

