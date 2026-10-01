# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,367 lines**, about 638 KB, roughly **181 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `88c033c` on 2026-10-01.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,396 | the whole stylesheet, every token and rule |
| **Markup** | 1,397–1,805 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,806–8,334 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,335–8,367 | </body></html> |

Counts: **385** top-level functions, **189** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,806_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,808 | `byId` | `function byId(` |
| 1,816 | `byIdMaybe` | `function byIdMaybe(` |
| 1,817 | `put` | `function put(` |
| 1,822 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,824_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,825 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,826 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,827 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,828 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,832 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,837_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,838 | `wheelMeta` | `var wheelMeta =` |
| 1,846 | `seasonOverride` | `var seasonOverride =` |
| 1,847 | `cycleNowNote` | `var cycleNowNote =` |
| 1,849 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,927 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,968 | `gdpLevels` | `var gdpLevels =` |
| 1,977 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,978 | `volatilityHistory` | `var volatilityHistory =` |
| 1,980 | `fiscalHistory` | `var fiscalHistory =` |
| 1,986 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,988 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,998 | `productivityHistory` | `var productivityHistory =` |
| 2,000 | `sp500MonthlyHistory` | `var sp500MonthlyHistory =` |

### Live data without a render refactor

_line 2,002_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,007 | `merge` | `function merge(` |
| 2,014 | `LIVE` | `function LIVE(` |
| 2,028 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,031_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,033 | `paintReading` | `function paintReading(` |
| 2,050 | `repaintVolatility` | `function repaintVolatility(` |
| 2,054 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,062 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,067 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,071 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,076_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,077 | `READINGS` | `var READINGS =` |
| 2,132 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,133 | `KINDS` | `var KINDS =` |
| 2,134 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,148 | `receive` | `function receive(` |
| 2,164 | `liveAsOf` | `var liveAsOf =` |
| 2,165 | `fmtAsOf` | `function fmtAsOf(` |
| 2,170 | `applyLive` | `function applyLive(` |
| 2,183 | `shapeOk` | `function shapeOk(` |
| 2,190 | `repaintPolicy` | `function repaintPolicy(` |
| 2,196 | `GYN` | `var GYN =` |
| 2,223 | `refreshLiveData` | `function refreshLiveData(` |
| 2,241 | `fetchSiteData` | `function fetchSiteData(` |
| 2,257 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,262_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,263 | `yieldCurve` | `var yieldCurve =` |
| 2,269 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,270 | `curveAsOf` | `function curveAsOf(` |
| 2,275 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,276 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,281 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,283_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,284 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,285 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,286 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,287 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,288 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,290_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,291 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,297 | `uninvLagToday` | `var uninvLagToday =` |
| 2,302 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,308 | `gdpPeers` | `var gdpPeers =` |
| 2,349 | `gdpSrc` | `var gdpSrc =` |
| 2,350 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,356 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,385_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,387 | `productivityReading` | `var productivityReading =` |

### The deficit, year by year

_line 2,400_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,401 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,402 | `deficitHistory` | `var deficitHistory =` |
| 2,405 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,406 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,408 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,417_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,418 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,428_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,429 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,432 | `timelineSpan` | `function timelineSpan(` |
| 2,437 | `timelineFor` | `function timelineFor(` |
| 2,448 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,454_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,455 | `windowScale` | `function windowScale(` |
| 2,470 | `windowYears` | `function windowYears(` |
| 2,478 | `refName` | `function refName(` |
| 2,482 | `histReadEnsure` | `function histReadEnsure(` |
| 2,502 | `histReadFill` | `function histReadFill(` |
| 2,552 | `histAxisEnds` | `function histAxisEnds(` |
| 2,563 | `histLegend` | `function histLegend(` |
| 2,623 | `refitHistory` | `function refitHistory(` |
| 2,633 | `wireHistHover` | `function wireHistHover(` |
| 2,670 | `mWindowFrom` | `function mWindowFrom(` |
| 2,674 | `qWindowFrom` | `function qWindowFrom(` |
| 2,678 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,679 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,681 | `DEF_1983` | `var DEF_1983 =` |
| 2,682 | `defFrom` | `function defFrom(` |
| 2,687 | `deficitChart` | `function deficitChart(` |
| 2,755 | `deficitBlock` | `function deficitBlock(` |
| 2,795 | `buffettHistory` | `var buffettHistory =` |
| 2,797 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,798 | `hyDates` | `var hyDates =` |
| 2,799 | `hyOas` | `var hyOas =` |
| 2,800 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,807 | `hyAt` | `function hyAt(` |
| 2,811 | `hyLabel` | `function hyLabel(` |
| 2,812 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 2,813 | `hyNum` | `function hyNum(` |
| 2,814 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,822 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,832 | `capeHistory` | `var capeHistory =` |
| 2,834 | `longCycleSrc` | `var longCycleSrc =` |
| 2,850 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,864_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,865 | `sentiment` | `var sentiment =` |
| 2,881 | `valuation` | `var valuation =` |
| 2,902 | `valRow` | `function valRow(` |
| 2,907 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,910 | `coincident` | `var coincident =` |
| 2,960 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,966 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,967 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,968 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,970_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,971 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,972 | `m2vHistory` | `var m2vHistory =` |
| 2,988 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,042 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,083_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,084 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,085 | `DOTS` | `var DOTS =` |
| 3,087 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,102 | `headPickRow` | `function headPickRow(` |
| 3,108 | `histHead` | `function histHead(` |
| 3,123 | `headNoteIdx` | `var headNoteIdx =` |
| 3,124 | `headMenuHtml` | `function headMenuHtml(` |
| 3,149 | `headMenuFor` | `var headMenuFor =` |
| 3,150 | `headSubFor` | `var headSubFor =` |
| 3,151 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,182 | `histNote` | `function histNote(` |
| 3,183 | `meterFlagged` | `function meterFlagged(` |
| 3,190 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,213 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,227 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,240 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,245 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,260 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,274 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,293 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,324 | `desireBlock` | `function desireBlock(` |
| 3,335 | `volumeBlock` | `function volumeBlock(` |
| 3,347 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,359 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,366_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,367 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,368 | `m2Level` | `var m2Level =` |
| 3,389 | `m2Yoy` | `var m2Yoy =` |
| 3,390 | `M2_NORM` | `var M2_NORM =` |
| 3,392 | `volumeVerdict` | `function volumeVerdict(` |
| 3,400 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,401 | `unempHistory` | `var unempHistory =` |
| 3,407 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,416 | `NROU_NOW` | `var NROU_NOW =` |
| 3,417 | `unempState` | `function unempState(` |
| 3,423 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,477_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,478 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,487 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,545 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,546 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,547 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,548_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,550 | `householdsChart` | `function householdsChart(` |
| 3,599 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,654 | `GDP_NORM` | `var GDP_NORM =` |
| 3,655 | `gdpNowQ` | `var gdpNowQ =` |
| 3,656 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,678 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,731 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,778 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,786 | `velocityVerdict` | `function velocityVerdict(` |
| 3,794 | `derivePulseTag` | `function derivePulseTag(` |
| 3,800 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,832_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,833 | `seasonReading` | `var seasonReading =` |
| 3,877 | `frameworkRows` | `var frameworkRows =` |
| 3,887 | `vixRow` | `var vixRow =` |
| 3,888 | `VIX_CALM` | `var VIX_CALM =` |
| 3,889 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,893 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,900_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,901 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,910_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,911 | `calendarTodayY` | `var calendarTodayY =` |
| 3,913 | `vix3mClose` | `var vix3mClose =` |
| 3,914 | `fearCurve` | `function fearCurve(` |
| 3,919 | `curveVerdict` | `function curveVerdict(` |
| 3,924 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,933_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,934 | `modeBar` | `function modeBar(` |
| 3,941 | `pickerOpen` | `var pickerOpen =` |
| 3,942 | `cycleByName` | `function cycleByName(` |
| 3,946 | `openCycle` | `function openCycle(` |
| 3,950 | `cycleSlice` | `function cycleSlice(` |
| 3,958 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,966 | `cycleMonths` | `function cycleMonths(` |
| 3,974 | `histControls` | `function histControls(` |
| 3,983 | `cycLabel` | `function cycLabel(` |
| 3,987 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,992 | `cyclePicker` | `function cyclePicker(` |
| 4,011 | `rangeBar` | `function rangeBar(` |
| 4,018 | `trendOf` | `function trendOf(` |
| 4,033 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,037 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,048_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,049 | `yearOf` | `function yearOf(` |
| 4,050 | `mean` | `function mean(` |

### The record rows

_line 4,051_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,052 | `headSigma` | `function headSigma(` |
| 4,057 | `atQuarter` | `function atQuarter(` |
| 4,058 | `atMonth` | `function atMonth(` |
| 4,059 | `ordinal` | `function ordinal(` |
| 4,060 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,063_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,064 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,071 | `moreRow` | `function moreRow(` |
| 4,077 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,078 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,084_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,085 | `xLabelOf` | `function xLabelOf(` |
| 4,095 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,113_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,114 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,122 | `vGrid` | `function vGrid(` |
| 4,126 | `COL_FILL` | `var COL_FILL =` |
| 4,127 | `colPath` | `function colPath(` |
| 4,132 | `colWidth` | `function colWidth(` |
| 4,137 | `AXIS` | `var AXIS =` |
| 4,138 | `histFrame` | `function histFrame(` |
| 4,145 | `xLabel` | `function xLabel(` |
| 4,148 | `crossLine` | `function crossLine(` |
| 4,151 | `zeroRule` | `function zeroRule(` |
| 4,154 | `meanRule` | `function meanRule(` |
| 4,155 | `pendingGeom` | `var pendingGeom =` |
| 4,156 | `publishGeom` | `function publishGeom(` |
| 4,157 | `attachHistory` | `function attachHistory(` |
| 4,166 | `histBar` | `function histBar(` |
| 4,169 | `histTip` | `function histTip(` |
| 4,170 | `avgRule` | `function avgRule(` |
| 4,173 | `vhOpen` | `function vhOpen(` |
| 4,174 | `chartAxes` | `function chartAxes(` |
| 4,204 | `divergeChart` | `function divergeChart(` |
| 4,238 | `pairChart` | `function pairChart(` |

### A series' highest reading within a span

_line 4,266_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,268 | `maxIn` | `function maxIn(` |
| 4,273 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,274 | `PEEK_W` | `var PEEK_W =` |
| 4,275 | `PEEK_H` | `var PEEK_H =` |
| 4,276 | `colPeek` | `function colPeek(` |
| 4,294 | `meterPeek` | `function meterPeek(` |
| 4,311 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,316 | `pressureZone` | `function pressureZone(` |
| 4,322 | `HZN_BACK` | `var HZN_BACK =` |
| 4,323 | `hznLast` | `function hznLast(` |
| 4,324 | `hznBack` | `function hznBack(` |
| 4,325 | `horizonWord` | `function horizonWord(` |
| 4,345 | `HZN_METERS` | `var HZN_METERS =` |
| 4,353 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,374 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,379 | `RISK_RISK` | `var RISK_RISK =` |
| 4,384 | `riskCell` | `function riskCell(` |
| 4,385 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,415 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,440_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,441 | `pulseClipN` | `var pulseClipN =` |
| 4,442 | `beatPath` | `function beatPath(` |
| 4,459 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,473 | `pulsePeek` | `function pulsePeek(` |
| 4,476 | `pulseBlock` | `function pulseBlock(` |
| 4,493 | `CHEV` | `var CHEV =` |
| 4,494 | `peekCard` | `function peekCard(` |
| 4,513 | `dropSvg` | `function dropSvg(` |
| 4,515 | `volumeSvg` | `function volumeSvg(` |
| 4,519 | `gaugeSvg` | `function gaugeSvg(` |
| 4,523 | `diamondSvg` | `function diamondSvg(` |
| 4,527 | `sproutSvg` | `function sproutSvg(` |
| 4,535 | `markSvg` | `function markSvg(` |
| 4,538 | `hormoneSvg` | `function hormoneSvg(` |
| 4,543 | `flameSvg` | `function flameSvg(` |
| 4,546 | `clockSvg` | `function clockSvg(` |
| 4,547 | `gearSvg` | `function gearSvg(` |
| 4,555 | `thermoSvg` | `function thermoSvg(` |
| 4,558 | `trendUpSvg` | `function trendUpSvg(` |
| 4,560 | `ecgSvg` | `function ecgSvg(` |
| 4,562 | `circulationSvg` | `function circulationSvg(` |
| 4,563 | `weatherSvg` | `function weatherSvg(` |
| 4,571 | `moodSvg` | `function moodSvg(` |
| 4,575 | `boltSvg` | `function boltSvg(` |
| 4,576 | `houseSvg` | `function houseSvg(` |
| 4,579 | `sunriseSvg` | `function sunriseSvg(` |
| 4,583 | `volatilitySvg` | `function volatilitySvg(` |
| 4,588 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 4,594_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,595 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,596 | `dsrHistory` | `var dsrHistory =` |
| 4,597 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,598 | `savHistory` | `var savHistory =` |
| 4,601 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,610 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,611 | `dsrNow` | `var dsrNow =` |
| 4,612 | `savNow` | `var savNow =` |
| 4,613 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,614 | `householdsWord` | `function householdsWord(` |
| 4,621 | `householdsNow` | `var householdsNow =` |
| 4,622 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,639 | `savInfoHtml` | `function savInfoHtml(` |
| 4,657 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,664 | `curveSub` | `var curveSub =` |
| 4,665 | `vixPct` | `function vixPct(` |
| 4,669 | `curveNoteFull` | `var curveNoteFull =` |
| 4,680 | `volatilityRing` | `function volatilityRing(` |
| 4,685 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,686 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,701 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,707 | `marketCycles` | `var marketCycles =` |
| 4,735 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,737_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,738 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,739 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 4,744_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,745 | `slopeOf` | `function slopeOf(` |
| 4,750 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,751 | `readSeason` | `function readSeason(` |
| 4,770 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,771 | `qLabel` | `function qLabel(` |
| 4,786 | `regimeTrack` | `function regimeTrack(` |
| 4,806 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,808_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,809 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,810 | `seasonTitle` | `function seasonTitle(` |
| 4,811 | `monthLabel` | `function monthLabel(` |
| 4,812 | `cycleModel` | `function cycleModel(` |
| 4,849 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,857 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,863 | `nowModel` | `var nowModel =` |
| 4,864 | `readingNow` | `var readingNow =` |
| 4,865 | `cpiNow` | `var cpiNow =` |
| 4,866 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,867 | `currentSeason` | `var currentSeason =` |
| 4,868 | `seasonWhy` | `var seasonWhy =` |
| 4,870 | `seasonGroup` | `function seasonGroup(` |

### The diagnosis: how she feels, and what has followed

_line 4,872_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,873 | `CALM` | `var CALM =` |
| 4,874 | `FEELINGS` | `var FEELINGS =` |
| 4,875 | `seasonHalf` | `function seasonHalf(` |
| 4,876 | `rankToDate` | `function rankToDate(` |
| 4,880 | `readFeeling` | `function readFeeling(` |
| 4,891 | `readPosture` | `function readPosture(` |
| 4,899 | `marketCache` | `var marketCache =` |
| 4,900 | `marketMonths` | `function marketMonths(` |
| 4,920 | `seasonInMonth` | `function seasonInMonth(` |
| 4,925 | `stretchRank` | `function stretchRank(` |
| 4,928 | `marketFacts` | `function marketFacts(` |
| 4,939 | `followedCache` | `var followedCache =` |
| 4,940 | `whatFollowed` | `function whatFollowed(` |
| 4,962 | `lastFeeling` | `function lastFeeling(` |
| 4,967 | `diagnoseClose` | `function diagnoseClose(` |
| 4,975 | `diagnoseToday` | `function diagnoseToday(` |
| 4,992 | `vitalRingSvg` | `function vitalRingSvg(` |
| 5,003 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 5,004 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 5,005 | `spreadLabel` | `function spreadLabel(` |
| 5,009 | `policyFacts` | `function policyFacts(` |
| 5,016 | `policyFactRows` | `function policyFactRows(` |
| 5,022 | `allSources` | `var allSources =` |
| 5,036 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 5,048_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,049 | `SVG_NS` | `var SVG_NS =` |
| 5,050 | `svgEl` | `function svgEl(` |
| 5,055 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 5,089_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,090 | `clampPct` | `function clampPct(` |
| 5,093 | `detailTexts` | `var detailTexts =` |
| 5,094 | `detailSlots` | `var detailSlots =` |
| 5,095 | `detailSlot` | `function detailSlot(` |
| 5,105 | `metricSheet` | `function metricSheet(` |
| 5,110 | `ledeHtml` | `function ledeHtml(` |
| 5,111 | `facts` | `function facts(` |
| 5,112 | `factsFrom` | `function factsFrom(` |
| 5,116 | `expandBtn` | `function expandBtn(` |
| 5,120 | `sheetRenderers` | `var sheetRenderers =` |
| 5,121 | `pageMode` | `var pageMode =` |
| 5,126 | `pageCycles` | `var pageCycles =` |
| 5,131 | `pageRange` | `var pageRange =` |
| 5,137 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,166_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,169 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,170_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,171 | `subjectRow` | `function subjectRow(` |
| 5,181 | `subjectIcon` | `function subjectIcon(` |
| 5,182 | `srcHtml` | `function srcHtml(` |
| 5,183 | `TIMING` | `var TIMING =` |
| 5,189 | `timingMark` | `function timingMark(` |
| 5,197 | `timingPill` | `function timingPill(` |
| 5,206 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,214 | `seatPageFoot` | `function seatPageFoot(` |
| 5,226 | `timingMembers` | `var timingMembers =` |
| 5,227 | `registerTiming` | `function registerTiming(` |
| 5,229 | `headHtml` | `function headHtml(` |
| 5,237 | `heldHighlights` | `var heldHighlights =` |
| 5,238 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,265_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,266 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,267 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,275 | `withLatestPoint` | `function withLatestPoint(` |
| 5,280 | `pressureMaturities` | `function pressureMaturities(` |
| 5,304 | `registerFlowPages` | `function registerFlowPages(` |
| 5,363 | `renderPressureRow` | `function renderPressureRow(` |
| 5,371 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,390 | `ylmColumns` | `function ylmColumns(` |
| 5,410 | `ylmFitLine` | `function ylmFitLine(` |
| 5,422 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,567_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,568 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,605_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,606 | `spreadSeries` | `function spreadSeries(` |
| 5,650 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,774_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,775 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,801_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,802 | `drawHznHead` | `function drawHznHead(` |
| 5,817 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,879_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,880 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,888_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,889 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 5,988_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,989 | `renderVolatility` | `function renderVolatility(` |
| 6,038 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 6,068_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,069 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 6,116_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,117 | `totalRiseIn` | `function totalRiseIn(` |
| 6,127 | `eraInflation` | `function eraInflation(` |
| 6,138 | `eraGrowth` | `function eraGrowth(` |
| 6,154 | `fmtSigned` | `function fmtSigned(` |
| 6,155 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,156 | `growthShown` | `function growthShown(` |
| 6,157 | `growthShownCap` | `function growthShownCap(` |
| 6,158 | `phaseClass` | `function phaseClass(` |
| 6,159 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,164 | `cycleViewEl` | `var cycleViewEl =` |
| 6,165 | `shownEra` | `var shownEra =` |
| 6,166 | `calendarReset` | `var calendarReset =` |
| 6,167 | `metricPageReset` | `var metricPageReset =` |
| 6,168 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,169 | `topbarBack` | `var topbarBack =` |
| 6,170 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,177_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,178 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,259_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,260 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,278_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,279 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,300_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,302 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,303 | `hubSet` | `function hubSet(` |
| 6,314 | `quarterPopup` | `function quarterPopup(` |
| 6,337 | `hubShowDefault` | `function hubShowDefault(` |
| 6,345 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,351 | `hubShowYear` | `function hubShowYear(` |
| 6,361 | `renderCycleDial` | `function renderCycleDial(` |
| 6,442 | `m2Step` | `function m2Step(` |
| 6,445 | `heatStep` | `function heatStep(` |
| 6,449 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,461_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,462 | `renderCycleView` | `function renderCycleView(` |

### The economy the Growth chart draws

_line 6,467_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,468 | `peerChosen` | `function peerChosen(` |
| 6,469 | `peerReaches` | `function peerReaches(` |
| 6,495 | `shownEraModel` | `var shownEraModel =` |
| 6,496 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,498_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,499 | `stripGroupName` | `var stripGroupName =` |
| 6,500 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,528 | `marketStripHtml` | `function marketStripHtml(` |
| 6,562 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,563 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,592_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,593 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,599 | `INDICATOR_GROUP` | `var INDICATOR_GROUP =` |
| 6,605 | `SPLIT_PERIOD` | `var SPLIT_PERIOD =` |
| 6,606 | `debtSvg` | `function debtSvg(` |
| 6,607 | `interestSvg` | `function interestSvg(` |
| 6,609 | `budgetSvg` | `function budgetSvg(` |
| 6,611 | `lede` | `function lede(` |
| 6,612 | `periodOf` | `function periodOf(` |
| 6,613 | `qLast` | `function qLast(` |
| 6,614 | `meterWord` | `function meterWord(` |
| 6,615 | `splitSpecs` | `function splitSpecs(` |
| 6,635 | `productivitySpec` | `function productivitySpec(` |
| 6,644 | `splitMid` | `function splitMid(` |
| 6,645 | `splitInfo` | `function splitInfo(` |
| 6,649 | `quarterTicks` | `function quarterTicks(` |
| 6,654 | `drawSplit` | `function drawSplit(` |
| 6,671 | `mountSplit` | `function mountSplit(` |
| 6,686 | `splitPeek` | `function splitPeek(` |
| 6,694 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,702 | `deficitPeek` | `function deficitPeek(` |
| 6,708 | `catSheet` | `function catSheet(` |
| 6,713 | `groupId` | `function groupId(` |
| 6,714 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,715 | `seatGroups` | `function seatGroups(` |
| 6,718 | `groupSheet` | `function groupSheet(` |
| 6,728 | `appendPicks` | `function appendPicks(` |
| 6,736 | `categoryCats` | `function categoryCats(` |

### The split indicators' insights

_line 6,754_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,755 | `buffettInsight` | `function buffettInsight(` |
| 6,770 | `debtInsight` | `function debtInsight(` |
| 6,785 | `productivityInsight` | `function productivityInsight(` |
| 6,795 | `interestInsight` | `function interestInsight(` |
| 6,810 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,840 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,865 | `activityStackHtml` | `function activityStackHtml(` |
| 6,875 | `seatTemperature` | `function seatTemperature(` |
| 6,883 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,918_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,919 | `partsOf` | `function partsOf(` |
| 6,928 | `discOf` | `function discOf(` |
| 6,931 | `authored` | `function authored(` |
| 6,932 | `registerRoster` | `function registerRoster(` |
| 6,966 | `indRow` | `function indRow(` |
| 6,970 | `IND_ORDER` | `var IND_ORDER =` |
| 6,971 | `indGroupRow` | `function indGroupRow(` |
| 6,976 | `indRows` | `function indRows(` |
| 6,990 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 6,999_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,000 | `NAV` | `var NAV =` |
| 7,001 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 7,095_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,096 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,144_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,145 | `fmtDay` | `function fmtDay(` |
| 7,146 | `qPretty` | `function qPretty(` |
| 7,147 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,148 | `peekArt` | `function peekArt(` |
| 7,149 | `indPeriod` | `function indPeriod(` |
| 7,158 | `catItem` | `function catItem(` |
| 7,208 | `insightCirculation` | `function insightCirculation(` |
| 7,241 | `insightWeather` | `function insightWeather(` |
| 7,284 | `CAT_MINI` | `var CAT_MINI =` |
| 7,287 | `placeSignPair` | `function placeSignPair(` |
| 7,319 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,335 | `buildCategories` | `function buildCategories(` |
| 7,370 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,412_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,413 | `capeFmt1` | `function capeFmt1(` |
| 7,414 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 7,415 | `GDP_STOPS` | `var GDP_STOPS =` |
| 7,416 | `VAL_STOPS` | `var VAL_STOPS =` |
| 7,417 | `DEF_STOPS` | `var DEF_STOPS =` |
| 7,418 | `qShort` | `function qShort(` |
| 7,419 | `yoyPairs` | `function yoyPairs(` |
| 7,429 | `actCycleMonths` | `function actCycleMonths(` |
| 7,437 | `householdsHighlights` | `function householdsHighlights(` |
| 7,456 | `redrawSheet` | `function redrawSheet(` |
| 7,460 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,524 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,563 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,613 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,643 | `valuationHighlights` | `function valuationHighlights(` |
| 7,656 | `tempHighlights` | `function tempHighlights(` |
| 7,673 | `gdpHighlights` | `function gdpHighlights(` |
| 7,688 | `renderMetricPages` | `function renderMetricPages(` |
| 7,698 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### The Diagnosis: under the dial, today or at a cycle's close

_line 7,708_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,709 | `DIAG_SYSTEMS` | `var DIAG_SYSTEMS =` |
| 7,716 | `FEELING_RULES` | `var FEELING_RULES =` |
| 7,725 | `FEELING_STATE` | `var FEELING_STATE =` |
| 7,726 | `POSTURE_STATE` | `var POSTURE_STATE =` |
| 7,727 | `POSTURE_SAYS` | `var POSTURE_SAYS =` |
| 7,734 | `BODY_SAYS` | `var BODY_SAYS =` |
| 7,742 | `DIAG_SRC` | `var DIAG_SRC =` |
| 7,747 | `readDoor` | `function readDoor(` |
| 7,755 | `pct` | `function pct(` |
| 7,756 | `symptom` | `function symptom(` |
| 7,757 | `momentumSymptom` | `function momentumSymptom(` |
| 7,761 | `symptomsFor` | `function symptomsFor(` |
| 7,769 | `rosterRows` | `function rosterRows(` |
| 7,774 | `closeFigure` | `function closeFigure(` |
| 7,778 | `eraMove` | `function eraMove(` |
| 7,786 | `analysisFor` | `function analysisFor(` |
| 7,794 | `dxRow` | `function dxRow(` |
| 7,798 | `dxSection` | `function dxSection(` |
| 7,799 | `systemHtml` | `function systemHtml(` |
| 7,802 | `dxHead` | `function dxHead(` |
| 7,807 | `postureLine` | `function postureLine(` |
| 7,811 | `diagnosisInfo` | `function diagnosisInfo(` |
| 7,819 | `assessmentFor` | `function assessmentFor(` |
| 7,829 | `diagnosisHtml` | `function diagnosisHtml(` |
| 7,848 | `renderDiagnosis` | `function renderDiagnosis(` |
| 7,852 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 7,853 | `buildDiagnosis` | `function buildDiagnosis(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,866_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,867 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,868 | `cycleDataOn` | `function cycleDataOn(` |
| 7,869 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,889 | `wireCycleData` | `function wireCycleData(` |
| 7,904 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,949_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,950 | `eraOpen` | `var eraOpen =` |
| 7,951 | `kT` | `function kT(` |
| 7,955 | `eraReading` | `function eraReading(` |
| 7,967 | `eraFig` | `function eraFig(` |
| 7,974 | `eraValue` | `function eraValue(` |
| 7,980 | `eraRange` | `function eraRange(` |
| 7,985 | `eraMini` | `function eraMini(` |
| 7,990 | `eraCard` | `function eraCard(` |
| 8,009 | `eraShow` | `function eraShow(` |
| 8,019 | `enterEra` | `function enterEra(` |
| 8,026 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 8,033_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,034 | `rosterGroups` | `function rosterGroups(` |
| 8,062 | `__roster` | `var __roster =` |
| 8,063 | `readingRoster` | `function readingRoster(` |
| 8,084 | `readFig` | `function readFig(` |
| 8,089 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 8,096_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,097 | `cycleSymptoms` | `function cycleSymptoms(` |
| 8,121 | `placeWords` | `function placeWords(` |
| 8,125 | `symptomNote` | `function symptomNote(` |
| 8,132 | `symptomRow` | `function symptomRow(` |
| 8,139 | `cycleTrack` | `function cycleTrack(` |
| 8,154 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 8,162_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,163 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 8,212_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,213 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 8,244_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,245 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 2,003–2,006 | `LIVE_CACHE` | Live data without a render refactor |
| 4,331–4,344 | `horizonRead` | A series' highest reading within a span |
| 4,772–4,785 | `seasonTrackAll` | The season, computed |
| 4,801–4,805 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,544 |
| `desire-range` | 5,355 |
| `fear-range` | 6,033 |
| `hormones-range` | 5,921 |
| `hzn-range` | 5,842 |
| `pressure-range` | 2,069 |
| `pulse-range` | 5,322 |
| `sheet-marker-deficit` | 7,541 |
| `sheet-metric-gdp` | 7,486 |
| `sheet-metric-households` | 7,565 |
| `sheet-metric-temp` | 7,461 |
| `sheet-metric-valuation` | 7,586 |
| `sheet-sign-activity` | 7,526 |
| `sheet-sign-desire` | 5,356 |
| `sheet-sign-horizon` | 5,843 |
| `sheet-sign-hormones` | 5,922 |
| `sheet-sign-pressure` | 5,559 |
| `sheet-sign-pulse` | 5,321 |
| `sheet-sign-sentiment` | 6,034 |
| `sheet-sign-volume` | 5,339 |
| `volume-range` | 5,340 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,548 |
| `desire-range` | 5,344 |
| `fear-range` | 6,000 |
| `hzn-range` | 5,827 |
| `pressure-range` | 5,528 |
| `pulse-range` | 5,308 |
| `sheet-metric-gdp` | 7,487 |
| `sheet-metric-temp` | 7,462 |
| `sheet-metric-valuation` | 7,587 |
| `volume-range` | 5,326 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,088 |
| `sheet-metric-gdp` | 3,089 |
| `sheet-sign-activity` | 3,090 |
| `sheet-metric-valuation` | 3,091 |
| `sheet-metric-households` | 3,092 |
| `deficit-range` | 3,093 |
| `volume-range` | 3,094 |
| `pulse-range` | 3,095 |
| `hzn-range` | 3,096 |
| `desire-range` | 3,097 |
| `fear-range` | 3,098 |
| `hormones-range` | 3,099 |
| `pressure-range` | 3,100 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 158 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 247 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 283 | season strip |
| 311 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 380 | tab bar (app-style segmented navigation) |
| 415 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 431 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 502 | journal (editorial content tab) |
| 508 | content tab: reading companion |
| 557 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 755 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 830 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 903 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,078 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,093 | The symptoms: a cycle's years against today |
| 1,170 | hero: yield curve |
| 1,203 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,222 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,247 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,255 | long cycle (structural layer) |
| 1,262 | indicator grid |
| 1,288 | info icon + popover (progressive disclosure for longer notes) |
| 1,302 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,385 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (106), which is what the renderers fill:

| Line | id |
|---|---|
| 1,401 | `topbar-back` |
| 1,404 | `topbar-title` |
| 1,405 | `menu-btn` |
| 1,419 | `main` |
| 1,422 | `cycle-view` |
| 1,425 | `cycle-kicker` |
| 1,428 | `cycle-dial` |
| 1,430 | `season-wheel-hub-date` |
| 1,431 | `season-wheel-hub-theme` |
| 1,432 | `season-wheel-hub-detail` |
| 1,440 | `today-analysis` |
| 1,441 | `peek-row` |
| 1,442 | `sheet-metric-temp` |
| 1,443 | `temp-timing` |
| 1,444 | `temp-chart` |
| 1,445 | `temp-rangebar` |
| 1,447 | `temp-head` |
| 1,448 | `temp-history` |
| 1,449 | `temp-hist-tooltip` |
| 1,450 | `temp-trend` |
| 1,452 | `temp-highlights` |
| 1,454 | `sheet-metric-gdp` |
| 1,455 | `gdp-timing` |
| 1,456 | `gdp-chart` |
| 1,457 | `gdp-rangebar` |
| 1,459 | `gdp-head` |
| 1,460 | `gdp-history` |
| 1,461 | `gdp-hist-tooltip` |
| 1,462 | `gdp-yoy` |
| 1,463 | `gdp-trend` |
| 1,465 | `gdp-highlights` |
| 1,469 | `sheet-marker-deficit` |
| 1,471 | `sheet-metric-households` |
| 1,472 | `households-timing` |
| 1,473 | `households-chart` |
| 1,474 | `households-highlights` |
| 1,477 | `sheet-metric-valuation` |
| 1,478 | `valuation-timing` |
| 1,479 | `valuation-chart` |
| 1,480 | `valuation-highlights` |
| 1,487 | `subj-value-hormones` |
| 1,488 | `subj-say-hormones` |
| 1,494 | `hormones-history` |
| 1,495 | `hormones-insights` |
| 1,504 | `subj-value-horizon` |
| 1,505 | `subj-say-horizon` |
| 1,506 | `subj-spark-horizon` |
| 1,512 | `hzn-timeline` |
| 1,514 | `hzn-head` |
| 1,515 | `spread-history-shell` |
| 1,516 | `spread-history-svg` |
| 1,517 | `spread-history-tooltip` |
| 1,519 | `hzn-trend` |
| 1,521 | `horizon-insights` |
| 1,530 | `subj-value-pressure` |
| 1,531 | `subj-say-pressure` |
| 1,537 | `pressure-timeline` |
| 1,539 | `pressure-head` |
| 1,540 | `ylm-shell` |
| 1,541 | `ylm-svg` |
| 1,542 | `ylm-tooltip` |
| 1,544 | `ylm-trend` |
| 1,546 | `pressure-insights` |
| 1,553 | `subj-ring-sentiment` |
| 1,556 | `subj-value-sentiment` |
| 1,557 | `subj-say-sentiment` |
| 1,558 | `subj-spark-sentiment` |
| 1,564 | `fear-history` |
| 1,565 | `curve-highlights` |
| 1,571 | `signs-list` |
| 1,577 | `calendar-list` |
| 1,584 | `cycle-data` |
| 1,586 | `cycle-legend` |
| 1,587 | `cycle-list` |
| 1,588 | `cycle-more` |
| 1,589 | `cycle-more-label` |
| 1,594 | `calendar-cycle` |
| 1,595 | `calendar-cycle-slot` |
| 1,616 | `search-home` |
| 1,618 | `search-input` |
| 1,620 | `search-list` |
| 1,624 | `more-menu` |
| 1,627 | `menu-back` |
| 1,641 | `sources-open` |
| 1,649 | `appearance-current` |
| 1,655 | `sheet-howto` |
| 1,698 | `sheet-book` |
| 1,729 | `seasons-kicker` |
| 1,731 | `seasons-rows` |
| 1,734 | `framework-kicker` |
| 1,737 | `framework-rows` |
| 1,747 | `sheet-appearance` |
| 1,755 | `theme-toggle` |
| 1,762 | `sheet-contact` |
| 1,771 | `contact-form` |
| 1,772 | `contact-title` |
| 1,773 | `contact-message` |
| 1,775 | `contact-hint` |
| 1,776 | `contact-send` |
| 1,782 | `sheet-sources` |
| 1,785 | `sources-back` |
| 1,790 | `asof-text` |
| 1,791 | `sources-groups` |
| 1,797 | `detail-backdrop` |
| 1,799 | `detail-modal-close` |
| 1,800 | `detail-modal-body` |

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

