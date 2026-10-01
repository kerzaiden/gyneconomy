# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,084 lines**, about 600 KB, roughly **170 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `713e5a7` on 2026-10-01.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–1,386 | the whole stylesheet, every token and rule |
| **Markup** | 1,387–1,795 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 1,796–8,051 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 8,052–8,084 | </body></html> |

Counts: **351** top-level functions, **177** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### (before the first banner)

_line 1,796_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,798 | `byId` | `function byId(` |
| 1,806 | `byIdMaybe` | `function byIdMaybe(` |
| 1,807 | `put` | `function put(` |
| 1,812 | `elFrom` | `function elFrom(` |

### REFRESH: the one date to edit

_line 1,814_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,815 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 1,816 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 1,817 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 1,818 | `hubTodayHtml` | `function hubTodayHtml(` |
| 1,822 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 1,827_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,828 | `wheelMeta` | `var wheelMeta =` |
| 1,836 | `seasonOverride` | `var seasonOverride =` |
| 1,837 | `cycleNowNote` | `var cycleNowNote =` |
| 1,839 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 1,917 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 1,958 | `gdpLevels` | `var gdpLevels =` |
| 1,967 | `fedFundsHistory` | `var fedFundsHistory =` |
| 1,968 | `volatilityHistory` | `var volatilityHistory =` |
| 1,970 | `fiscalHistory` | `var fiscalHistory =` |
| 1,976 | `grossDebtQuarterly` | `var grossDebtQuarterly =` |
| 1,978 | `treasuryQuarterly` | `var treasuryQuarterly =` |
| 1,988 | `productivityHistory` | `var productivityHistory =` |

### Live data without a render refactor

_line 1,990_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 1,995 | `merge` | `function merge(` |
| 2,002 | `LIVE` | `function LIVE(` |
| 2,016 | `fedFunds` | `var fedFunds =` |

### The first series to come from outside the file

_line 2,019_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,021 | `paintReading` | `function paintReading(` |
| 2,038 | `repaintVolatility` | `function repaintVolatility(` |
| 2,042 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 2,050 | `repaintPressureRow` | `function repaintPressureRow(` |
| 2,055 | `repaintPressureChart` | `function repaintPressureChart(` |
| 2,059 | `repaintValuationRow` | `function repaintValuationRow(` |

### THE READING REGISTRY

_line 2,064_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,065 | `READINGS` | `var READINGS =` |
| 2,120 | `LIVE_NAMES` | `var LIVE_NAMES =` |
| 2,121 | `KINDS` | `var KINDS =` |
| 2,122 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 2,136 | `receive` | `function receive(` |
| 2,152 | `liveAsOf` | `var liveAsOf =` |
| 2,153 | `fmtAsOf` | `function fmtAsOf(` |
| 2,158 | `applyLive` | `function applyLive(` |
| 2,171 | `shapeOk` | `function shapeOk(` |
| 2,178 | `repaintPolicy` | `function repaintPolicy(` |
| 2,184 | `GYN` | `var GYN =` |
| 2,211 | `refreshLiveData` | `function refreshLiveData(` |
| 2,229 | `fetchSiteData` | `function fetchSiteData(` |
| 2,245 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 2,250_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,251 | `yieldCurve` | `var yieldCurve =` |
| 2,257 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 2,258 | `curveAsOf` | `function curveAsOf(` |
| 2,263 | `t10y3mHistory` | `var t10y3mHistory =` |
| 2,264 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 2,269 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,

_line 2,271_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,272 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 2,273 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 2,274 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 2,275 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 2,276 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 2,278_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,279 | `uninvLagCycles` | `var uninvLagCycles =` |
| 2,285 | `uninvLagToday` | `var uninvLagToday =` |
| 2,290 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 2,296 | `gdpPeers` | `var gdpPeers =` |
| 2,337 | `gdpSrc` | `var gdpSrc =` |
| 2,338 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 2,344 | `labPanel` | `var labPanel =` |

### Productivity growth is not in this panel

_line 2,373_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,375 | `productivityReading` | `var productivityReading =` |

### The deficit, year by year

_line 2,388_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,389 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 2,390 | `deficitHistory` | `var deficitHistory =` |
| 2,393 | `DEF_MEAN` | `var DEF_MEAN =` |
| 2,394 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 2,396 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 2,405_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 2,406 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 2,416_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,417 | `cycleSpanYears` | `function cycleSpanYears(` |
| 2,420 | `timelineSpan` | `function timelineSpan(` |
| 2,425 | `timelineFor` | `function timelineFor(` |
| 2,436 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once

_line 2,442_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,443 | `windowScale` | `function windowScale(` |
| 2,458 | `windowYears` | `function windowYears(` |
| 2,466 | `refName` | `function refName(` |
| 2,470 | `histReadEnsure` | `function histReadEnsure(` |
| 2,490 | `histReadFill` | `function histReadFill(` |
| 2,540 | `histAxisEnds` | `function histAxisEnds(` |
| 2,551 | `histLegend` | `function histLegend(` |
| 2,611 | `refitHistory` | `function refitHistory(` |
| 2,621 | `wireHistHover` | `function wireHistHover(` |
| 2,658 | `mWindowFrom` | `function mWindowFrom(` |
| 2,662 | `qWindowFrom` | `function qWindowFrom(` |
| 2,666 | `VOL_STOPS` | `var VOL_STOPS =` |
| 2,667 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 2,669 | `DEF_1983` | `var DEF_1983 =` |
| 2,670 | `defFrom` | `function defFrom(` |
| 2,675 | `deficitChart` | `function deficitChart(` |
| 2,743 | `deficitBlock` | `function deficitBlock(` |
| 2,783 | `buffettHistory` | `var buffettHistory =` |
| 2,785 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 2,786 | `hyDates` | `var hyDates =` |
| 2,787 | `hyOas` | `var hyOas =` |
| 2,788 | `checkDesireWindow` | `function checkDesireWindow(` |
| 2,795 | `hyAt` | `function hyAt(` |
| 2,799 | `hyLabel` | `function hyLabel(` |
| 2,800 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 2,801 | `hyNum` | `function hyNum(` |
| 2,802 | `hyWindowFrom` | `function hyWindowFrom(` |
| 2,810 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 2,820 | `capeHistory` | `var capeHistory =` |
| 2,822 | `longCycleSrc` | `var longCycleSrc =` |
| 2,838 | `checkGrossDebt` | `function checkGrossDebt(` |

### Sentiment (fast) and Valuation (slow)

_line 2,852_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,853 | `sentiment` | `var sentiment =` |
| 2,869 | `valuation` | `var valuation =` |
| 2,890 | `valRow` | `function valRow(` |
| 2,895 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 2,898 | `coincident` | `var coincident =` |
| 2,948 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 2,954 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 2,955 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 2,956 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark

_line 2,958_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 2,959 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 2,960 | `m2vHistory` | `var m2vHistory =` |
| 2,976 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 3,030 | `desireHistoryChart` | `function desireHistoryChart(` |

### the history card's head

_line 3,071_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,072 | `HIST_NOTE` | `var HIST_NOTE =` |
| 3,073 | `DOTS` | `var DOTS =` |
| 3,075 | `HIST_HEAD` | `var HIST_HEAD =` |
| 3,090 | `headPickRow` | `function headPickRow(` |
| 3,096 | `histHead` | `function histHead(` |
| 3,111 | `headNoteIdx` | `var headNoteIdx =` |
| 3,112 | `headMenuHtml` | `function headMenuHtml(` |
| 3,137 | `headMenuFor` | `var headMenuFor =` |
| 3,138 | `headSubFor` | `var headSubFor =` |
| 3,139 | `paintHeadMenus` | `function paintHeadMenus(` |
| 3,170 | `histNote` | `function histNote(` |
| 3,171 | `meterFlagged` | `function meterFlagged(` |
| 3,178 | `desireInfoHtml` | `function desireInfoHtml(` |
| 3,201 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 3,215 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 3,228 | `PRODUCTIVITY_SRC` | `var PRODUCTIVITY_SRC =` |
| 3,233 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 3,248 | `outputInfoHtml` | `function outputInfoHtml(` |
| 3,262 | `activityInfoHtml` | `function activityInfoHtml(` |
| 3,281 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 3,312 | `desireBlock` | `function desireBlock(` |
| 3,323 | `volumeBlock` | `function volumeBlock(` |
| 3,335 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 3,347 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is

_line 3,354_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,355 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 3,356 | `m2Level` | `var m2Level =` |
| 3,377 | `m2Yoy` | `var m2Yoy =` |
| 3,378 | `M2_NORM` | `var M2_NORM =` |
| 3,380 | `volumeVerdict` | `function volumeVerdict(` |
| 3,388 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 3,389 | `unempHistory` | `var unempHistory =` |
| 3,395 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 3,404 | `NROU_NOW` | `var NROU_NOW =` |
| 3,405 | `unempState` | `function unempState(` |
| 3,411 | `unempHistoryChart` | `function unempHistoryChart(` |

### Hormones — the policy rate's history

_line 3,465_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,466 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 3,475 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 3,533 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 3,534 | `CPI_TARGET` | `var CPI_TARGET =` |
| 3,535 | `qAtIndex` | `function qAtIndex(` |

### the reference key, shared

_line 3,536_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,538 | `householdsChart` | `function householdsChart(` |
| 3,587 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 3,642 | `GDP_NORM` | `var GDP_NORM =` |
| 3,643 | `gdpNowQ` | `var gdpNowQ =` |
| 3,644 | `growthInfoHtml` | `function growthInfoHtml(` |
| 3,666 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 3,719 | `m2GrowthChart` | `function m2GrowthChart(` |
| 3,766 | `checkMoneyStock` | `function checkMoneyStock(` |
| 3,774 | `velocityVerdict` | `function velocityVerdict(` |
| 3,782 | `derivePulseTag` | `function derivePulseTag(` |
| 3,788 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 3,820_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,821 | `seasonReading` | `var seasonReading =` |
| 3,865 | `frameworkRows` | `var frameworkRows =` |
| 3,875 | `vixRow` | `var vixRow =` |
| 3,876 | `VIX_CALM` | `var VIX_CALM =` |
| 3,877 | `VIX_CONVENTION` | `var VIX_CONVENTION =` |
| 3,881 | `volatilityTag` | `function volatilityTag(` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 3,888_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 3,889 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 3,898_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,899 | `calendarTodayY` | `var calendarTodayY =` |
| 3,901 | `vix3mClose` | `var vix3mClose =` |
| 3,902 | `fearCurve` | `function fearCurve(` |
| 3,907 | `curveVerdict` | `function curveVerdict(` |
| 3,912 | `valuationVerdict` | `function valuationVerdict(` |

### The range bar

_line 3,921_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,922 | `modeBar` | `function modeBar(` |
| 3,929 | `pickerOpen` | `var pickerOpen =` |
| 3,930 | `cycleByName` | `function cycleByName(` |
| 3,934 | `openCycle` | `function openCycle(` |
| 3,938 | `cycleSlice` | `function cycleSlice(` |
| 3,946 | `totalGrowthYears` | `function totalGrowthYears(` |
| 3,954 | `cycleMonths` | `function cycleMonths(` |
| 3,962 | `histControls` | `function histControls(` |
| 3,971 | `cycLabel` | `function cycLabel(` |
| 3,975 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 3,980 | `cyclePicker` | `function cyclePicker(` |
| 3,999 | `rangeBar` | `function rangeBar(` |
| 4,006 | `trendOf` | `function trendOf(` |
| 4,021 | `TREND_ARROW` | `var TREND_ARROW =` |
| 4,025 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed

_line 4,036_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,037 | `yearOf` | `function yearOf(` |
| 4,038 | `mean` | `function mean(` |

### The record rows

_line 4,039_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,040 | `headSigma` | `function headSigma(` |
| 4,045 | `atQuarter` | `function atQuarter(` |
| 4,046 | `atMonth` | `function atMonth(` |
| 4,047 | `ordinal` | `function ordinal(` |
| 4,048 | `hiCard` | `function hiCard(` |

### The cycle average component

_line 4,051_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,052 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 4,059 | `moreRow` | `function moreRow(` |
| 4,065 | `tempCaptionFull` | `var tempCaptionFull =` |
| 4,066 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts

_line 4,072_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,073 | `xLabelOf` | `function xLabelOf(` |
| 4,083 | `fitGroup` | `function fitGroup(` |

### The history component's axes

_line 4,101_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,102 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 4,110 | `vGrid` | `function vGrid(` |
| 4,114 | `COL_FILL` | `var COL_FILL =` |
| 4,115 | `colPath` | `function colPath(` |
| 4,120 | `colWidth` | `function colWidth(` |
| 4,125 | `AXIS` | `var AXIS =` |
| 4,126 | `histFrame` | `function histFrame(` |
| 4,133 | `xLabel` | `function xLabel(` |
| 4,136 | `crossLine` | `function crossLine(` |
| 4,139 | `zeroRule` | `function zeroRule(` |
| 4,142 | `meanRule` | `function meanRule(` |
| 4,143 | `pendingGeom` | `var pendingGeom =` |
| 4,144 | `publishGeom` | `function publishGeom(` |
| 4,145 | `attachHistory` | `function attachHistory(` |
| 4,154 | `histBar` | `function histBar(` |
| 4,157 | `histTip` | `function histTip(` |
| 4,158 | `avgRule` | `function avgRule(` |
| 4,161 | `vhOpen` | `function vhOpen(` |
| 4,162 | `chartAxes` | `function chartAxes(` |
| 4,192 | `divergeChart` | `function divergeChart(` |
| 4,226 | `pairChart` | `function pairChart(` |

### A series' highest reading within a span

_line 4,254_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,256 | `maxIn` | `function maxIn(` |
| 4,261 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 4,262 | `PEEK_W` | `var PEEK_W =` |
| 4,263 | `PEEK_H` | `var PEEK_H =` |
| 4,264 | `colPeek` | `function colPeek(` |
| 4,282 | `meterPeek` | `function meterPeek(` |
| 4,299 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 4,304 | `pressureZone` | `function pressureZone(` |
| 4,310 | `HZN_BACK` | `var HZN_BACK =` |
| 4,311 | `hznLast` | `function hznLast(` |
| 4,312 | `hznBack` | `function hznBack(` |
| 4,313 | `horizonWord` | `function horizonWord(` |
| 4,333 | `HZN_METERS` | `var HZN_METERS =` |
| 4,341 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 4,362 | `RISK_REWARD` | `var RISK_REWARD =` |
| 4,367 | `RISK_RISK` | `var RISK_RISK =` |
| 4,372 | `riskCell` | `function riskCell(` |
| 4,373 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 4,403 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM: a pulse drawn as a pulse

_line 4,428_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,429 | `pulseClipN` | `var pulseClipN =` |
| 4,430 | `beatPath` | `function beatPath(` |
| 4,447 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 4,461 | `pulsePeek` | `function pulsePeek(` |
| 4,464 | `pulseBlock` | `function pulseBlock(` |
| 4,481 | `CHEV` | `var CHEV =` |
| 4,482 | `peekCard` | `function peekCard(` |
| 4,501 | `dropSvg` | `function dropSvg(` |
| 4,503 | `volumeSvg` | `function volumeSvg(` |
| 4,507 | `gaugeSvg` | `function gaugeSvg(` |
| 4,511 | `diamondSvg` | `function diamondSvg(` |
| 4,515 | `sproutSvg` | `function sproutSvg(` |
| 4,523 | `markSvg` | `function markSvg(` |
| 4,526 | `hormoneSvg` | `function hormoneSvg(` |
| 4,531 | `flameSvg` | `function flameSvg(` |
| 4,534 | `clockSvg` | `function clockSvg(` |
| 4,535 | `gearSvg` | `function gearSvg(` |
| 4,543 | `thermoSvg` | `function thermoSvg(` |
| 4,546 | `trendUpSvg` | `function trendUpSvg(` |
| 4,548 | `ecgSvg` | `function ecgSvg(` |
| 4,550 | `circulationSvg` | `function circulationSvg(` |
| 4,551 | `weatherSvg` | `function weatherSvg(` |
| 4,559 | `moodSvg` | `function moodSvg(` |
| 4,563 | `boltSvg` | `function boltSvg(` |
| 4,564 | `houseSvg` | `function houseSvg(` |
| 4,567 | `sunriseSvg` | `function sunriseSvg(` |
| 4,571 | `umbrellaSvg` | `function umbrellaSvg(` |
| 4,575 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep

_line 4,581_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,582 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 4,583 | `dsrHistory` | `var dsrHistory =` |
| 4,584 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 4,585 | `savHistory` | `var savHistory =` |
| 4,588 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 4,597 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 4,598 | `dsrNow` | `var dsrNow =` |
| 4,599 | `savNow` | `var savNow =` |
| 4,600 | `DSR_MEAN` | `var DSR_MEAN =` |
| 4,601 | `householdsWord` | `function householdsWord(` |
| 4,608 | `householdsNow` | `var householdsNow =` |
| 4,609 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 4,626 | `savInfoHtml` | `function savInfoHtml(` |
| 4,644 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 4,651 | `curveSub` | `var curveSub =` |
| 4,652 | `vixPct` | `function vixPct(` |
| 4,656 | `curveNoteFull` | `var curveNoteFull =` |
| 4,667 | `volatilityRing` | `function volatilityRing(` |
| 4,672 | `VOL_JOIN` | `var VOL_JOIN =` |
| 4,673 | `volatilityDetailHtml` | `function volatilityDetailHtml(` |
| 4,688 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 4,694 | `marketCycles` | `var marketCycles =` |
| 4,722 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 4,724_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,725 | `typicalCycleYears` | `var typicalCycleYears =` |
| 4,726 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 4,731_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,732 | `slopeOf` | `function slopeOf(` |
| 4,737 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 4,738 | `readSeason` | `function readSeason(` |
| 4,757 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 4,758 | `qLabel` | `function qLabel(` |
| 4,773 | `regimeTrack` | `function regimeTrack(` |
| 4,793 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 4,795_ · 21 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,796 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 4,797 | `seasonTitle` | `function seasonTitle(` |
| 4,798 | `monthLabel` | `function monthLabel(` |
| 4,799 | `cycleModel` | `function cycleModel(` |
| 4,836 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 4,844 | `seasonWhyFor` | `function seasonWhyFor(` |
| 4,850 | `nowModel` | `var nowModel =` |
| 4,851 | `readingNow` | `var readingNow =` |
| 4,852 | `cpiNow` | `var cpiNow =` |
| 4,853 | `growthSlopeQ` | `var growthSlopeQ =` |
| 4,854 | `currentSeason` | `var currentSeason =` |
| 4,855 | `seasonWhy` | `var seasonWhy =` |
| 4,857 | `seasonGroup` | `function seasonGroup(` |
| 4,860 | `vitalRingSvg` | `function vitalRingSvg(` |
| 4,871 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 4,872 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 4,873 | `spreadLabel` | `function spreadLabel(` |
| 4,877 | `policyFacts` | `function policyFacts(` |
| 4,884 | `policyFactRows` | `function policyFactRows(` |
| 4,890 | `allSources` | `var allSources =` |
| 4,904 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 4,916_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,917 | `SVG_NS` | `var SVG_NS =` |
| 4,918 | `svgEl` | `function svgEl(` |
| 4,923 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 4,957_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,958 | `clampPct` | `function clampPct(` |
| 4,961 | `detailTexts` | `var detailTexts =` |
| 4,962 | `detailSlots` | `var detailSlots =` |
| 4,963 | `detailSlot` | `function detailSlot(` |
| 4,973 | `facts` | `function facts(` |
| 4,974 | `factsFrom` | `function factsFrom(` |
| 4,978 | `expandBtn` | `function expandBtn(` |
| 4,982 | `sheetRenderers` | `var sheetRenderers =` |
| 4,983 | `pageMode` | `var pageMode =` |
| 4,988 | `pageCycles` | `var pageCycles =` |
| 4,993 | `pageRange` | `var pageRange =` |
| 4,999 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 5,028_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,031 | `srcBlock` | `function srcBlock(` |

### THE SUBJECT ROW

_line 5,032_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,033 | `subjectRow` | `function subjectRow(` |
| 5,043 | `subjectIcon` | `function subjectIcon(` |
| 5,044 | `srcHtml` | `function srcHtml(` |
| 5,045 | `TIMING` | `var TIMING =` |
| 5,051 | `timingMark` | `function timingMark(` |
| 5,059 | `timingPill` | `function timingPill(` |
| 5,068 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 5,076 | `seatPageFoot` | `function seatPageFoot(` |
| 5,088 | `timingMembers` | `var timingMembers =` |
| 5,089 | `registerTiming` | `function registerTiming(` |
| 5,091 | `headHtml` | `function headHtml(` |
| 5,099 | `heldHighlights` | `var heldHighlights =` |
| 5,100 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

_line 5,127_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,128 | `CURVE_KEY` | `var CURVE_KEY =` |
| 5,129 | `latestYieldPoint` | `function latestYieldPoint(` |
| 5,137 | `withLatestPoint` | `function withLatestPoint(` |
| 5,142 | `pressureMaturities` | `function pressureMaturities(` |
| 5,166 | `registerFlowPages` | `function registerFlowPages(` |
| 5,225 | `renderPressureRow` | `function renderPressureRow(` |
| 5,233 | `ylmYearMarks` | `function ylmYearMarks(` |
| 5,252 | `ylmColumns` | `function ylmColumns(` |
| 5,272 | `ylmFitLine` | `function ylmFitLine(` |
| 5,284 | `renderPressurePage` | `function renderPressurePage(` |

### Pressure's Insights

_line 5,429_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,430 | `renderPressureInsights` | `function renderPressureInsights(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 5,467_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,468 | `spreadSeries` | `function spreadSeries(` |
| 5,512 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 5,636_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,637 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page

_line 5,663_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,664 | `drawHznHead` | `function drawHznHead(` |
| 5,679 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow)

_line 5,741_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,742 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: Hormones

_line 5,750_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,751 | `renderHormones` | `function renderHormones(` |

### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

_line 5,850_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,851 | `renderVolatility` | `function renderVolatility(` |
| 5,900 | `volatilityHighlights` | `function volatilityHighlights(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 5,930_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,931 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 5,978_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,979 | `totalRiseIn` | `function totalRiseIn(` |
| 5,989 | `eraInflation` | `function eraInflation(` |
| 6,000 | `eraGrowth` | `function eraGrowth(` |
| 6,016 | `fmtSigned` | `function fmtSigned(` |
| 6,017 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 6,018 | `growthShown` | `function growthShown(` |
| 6,019 | `growthShownCap` | `function growthShownCap(` |
| 6,020 | `phaseClass` | `function phaseClass(` |
| 6,021 | `eraMarketTotal` | `function eraMarketTotal(` |
| 6,026 | `cycleViewEl` | `var cycleViewEl =` |
| 6,027 | `shownEra` | `var shownEra =` |
| 6,028 | `calendarReset` | `var calendarReset =` |
| 6,029 | `metricPageReset` | `var metricPageReset =` |
| 6,030 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 6,031 | `topbarBack` | `var topbarBack =` |
| 6,032 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 6,039_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,040 | `drawDial` | `function drawDial(` |

### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

_line 6,121_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,122 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

_line 6,140_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,141 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 6,162_ · 10 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,164 | `hubDetailIdx` | `var hubDetailIdx =` |
| 6,165 | `hubSet` | `function hubSet(` |
| 6,176 | `quarterPopup` | `function quarterPopup(` |
| 6,199 | `hubShowDefault` | `function hubShowDefault(` |
| 6,207 | `hubShowQuarter` | `function hubShowQuarter(` |
| 6,213 | `hubShowYear` | `function hubShowYear(` |
| 6,223 | `renderCycleDial` | `function renderCycleDial(` |
| 6,304 | `m2Step` | `function m2Step(` |
| 6,307 | `heatStep` | `function heatStep(` |
| 6,311 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 6,323_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,324 | `renderCycleView` | `function renderCycleView(` |

### The economy the Growth chart draws

_line 6,329_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,330 | `peerChosen` | `function peerChosen(` |
| 6,331 | `peerReaches` | `function peerReaches(` |
| 6,357 | `shownEraModel` | `var shownEraModel =` |
| 6,358 | `showCycle` | `function showCycle(` |

### A cycle's season strip (carried by the one cycle row)

_line 6,360_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,361 | `stripGroupName` | `var stripGroupName =` |
| 6,362 | `seasonStripHtml` | `function seasonStripHtml(` |
| 6,390 | `marketStripHtml` | `function marketStripHtml(` |
| 6,424 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 6,425 | `settleStrips` | `function settleStrips(` |

### The split indicators: one card and one page each

_line 6,454_ · 27 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,455 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 6,461 | `INDICATOR_GROUP` | `var INDICATOR_GROUP =` |
| 6,467 | `SPLIT_PERIOD` | `var SPLIT_PERIOD =` |
| 6,468 | `debtSvg` | `function debtSvg(` |
| 6,469 | `interestSvg` | `function interestSvg(` |
| 6,471 | `budgetSvg` | `function budgetSvg(` |
| 6,473 | `lede` | `function lede(` |
| 6,474 | `periodOf` | `function periodOf(` |
| 6,475 | `qLast` | `function qLast(` |
| 6,476 | `meterWord` | `function meterWord(` |
| 6,477 | `splitSpecs` | `function splitSpecs(` |
| 6,497 | `productivitySpec` | `function productivitySpec(` |
| 6,506 | `splitMid` | `function splitMid(` |
| 6,507 | `splitInfo` | `function splitInfo(` |
| 6,511 | `quarterTicks` | `function quarterTicks(` |
| 6,516 | `drawSplit` | `function drawSplit(` |
| 6,533 | `mountSplit` | `function mountSplit(` |
| 6,549 | `splitPeek` | `function splitPeek(` |
| 6,557 | `indicatorPeeks` | `function indicatorPeeks(` |
| 6,565 | `deficitPeek` | `function deficitPeek(` |
| 6,571 | `catSheet` | `function catSheet(` |
| 6,576 | `groupId` | `function groupId(` |
| 6,577 | `GROUP_SEATS` | `var GROUP_SEATS =` |
| 6,578 | `seatGroups` | `function seatGroups(` |
| 6,581 | `groupSheet` | `function groupSheet(` |
| 6,591 | `appendPicks` | `function appendPicks(` |
| 6,599 | `categoryCats` | `function categoryCats(` |

### The split indicators' insights

_line 6,617_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,618 | `buffettInsight` | `function buffettInsight(` |
| 6,633 | `debtInsight` | `function debtInsight(` |
| 6,648 | `productivityInsight` | `function productivityInsight(` |
| 6,658 | `interestInsight` | `function interestInsight(` |
| 6,673 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 6,704 | `orderMetricSheets` | `function orderMetricSheets(` |
| 6,729 | `activityStackHtml` | `function activityStackHtml(` |
| 6,739 | `seatTemperature` | `function seatTemperature(` |
| 6,747 | `renderSignsList` | `function renderSignsList(` |

### THE ROSTER'S OWN PIECES

_line 6,783_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,784 | `partsOf` | `function partsOf(` |
| 6,793 | `discOf` | `function discOf(` |
| 6,796 | `authored` | `function authored(` |
| 6,797 | `registerRoster` | `function registerRoster(` |
| 6,831 | `indRow` | `function indRow(` |
| 6,835 | `IND_ORDER` | `var IND_ORDER =` |
| 6,836 | `indGroupRow` | `function indGroupRow(` |
| 6,841 | `indRows` | `function indRows(` |
| 6,855 | `indCategoryHtml` | `function indCategoryHtml(` |

### THE NAVIGATION CONTROLLER

_line 6,864_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,865 | `NAV` | `var NAV =` |
| 6,866 | `buildNav` | `function buildNav(` |

### ALL INDICATORS

_line 6,960_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,961 | `buildSearch` | `function buildSearch(` |

### THE CYCLE TAB: cards and categories

_line 7,009_ · 13 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,010 | `fmtDay` | `function fmtDay(` |
| 7,011 | `qPretty` | `function qPretty(` |
| 7,012 | `DATED_UNIT` | `var DATED_UNIT =` |
| 7,013 | `peekArt` | `function peekArt(` |
| 7,014 | `indPeriod` | `function indPeriod(` |
| 7,023 | `catItem` | `function catItem(` |
| 7,073 | `insightCirculation` | `function insightCirculation(` |
| 7,106 | `insightWeather` | `function insightWeather(` |
| 7,149 | `CAT_MINI` | `var CAT_MINI =` |
| 7,152 | `placeSignPair` | `function placeSignPair(` |
| 7,184 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 7,200 | `buildCategories` | `function buildCategories(` |
| 7,242 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

### THE INNER PAGES

_line 7,284_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,285 | `capeFmt1` | `function capeFmt1(` |
| 7,286 | `TEMP_STOPS` | `var TEMP_STOPS =` |
| 7,287 | `GDP_STOPS` | `var GDP_STOPS =` |
| 7,288 | `VAL_STOPS` | `var VAL_STOPS =` |
| 7,289 | `DEF_STOPS` | `var DEF_STOPS =` |
| 7,290 | `qShort` | `function qShort(` |
| 7,291 | `yoyPairs` | `function yoyPairs(` |
| 7,301 | `actCycleMonths` | `function actCycleMonths(` |
| 7,309 | `householdsHighlights` | `function householdsHighlights(` |
| 7,328 | `redrawSheet` | `function redrawSheet(` |
| 7,332 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 7,396 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 7,435 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 7,485 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 7,515 | `valuationHighlights` | `function valuationHighlights(` |
| 7,528 | `tempHighlights` | `function tempHighlights(` |
| 7,545 | `gdpHighlights` | `function gdpHighlights(` |
| 7,560 | `renderMetricPages` | `function renderMetricPages(` |
| 7,570 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 7,583_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,584 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 7,585 | `cycleDataOn` | `function cycleDataOn(` |
| 7,586 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 7,606 | `wireCycleData` | `function wireCycleData(` |
| 7,621 | `renderCycleList` | `function renderCycleList(` |

### A closed cycle, shown on the Cycle tab's own page

_line 7,666_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,667 | `eraOpen` | `var eraOpen =` |
| 7,668 | `kT` | `function kT(` |
| 7,672 | `eraReading` | `function eraReading(` |
| 7,684 | `eraFig` | `function eraFig(` |
| 7,691 | `eraValue` | `function eraValue(` |
| 7,697 | `eraRange` | `function eraRange(` |
| 7,702 | `eraMini` | `function eraMini(` |
| 7,707 | `eraCard` | `function eraCard(` |
| 7,726 | `eraShow` | `function eraShow(` |
| 7,736 | `enterEra` | `function enterEra(` |
| 7,743 | `leaveEra` | `function leaveEra(` |

### THE ROSTER AS SERIES

_line 7,750_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,751 | `rosterGroups` | `function rosterGroups(` |
| 7,779 | `__roster` | `var __roster =` |
| 7,780 | `readingRoster` | `function readingRoster(` |
| 7,801 | `readFig` | `function readFig(` |
| 7,806 | `prettyK` | `function prettyK(` |

### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

_line 7,813_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,814 | `cycleSymptoms` | `function cycleSymptoms(` |
| 7,838 | `placeWords` | `function placeWords(` |
| 7,842 | `symptomNote` | `function symptomNote(` |
| 7,849 | `symptomRow` | `function symptomRow(` |
| 7,856 | `cycleTrack` | `function cycleTrack(` |
| 7,871 | `symptomLegend` | `function symptomLegend(` |

### RENDER: About Gyneconomy — the season model and the framework

_line 7,879_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,880 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

_line 7,929_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,930 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 7,961_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,962 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 1,991–1,994 | `LIVE_CACHE` | Live data without a render refactor |
| 4,319–4,332 | `horizonRead` | A series' highest reading within a span |
| 4,759–4,772 | `seasonTrackAll` | The season, computed |
| 4,788–4,792 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 7,416 |
| `desire-range` | 5,217 |
| `fear-range` | 5,895 |
| `hormones-range` | 5,783 |
| `hzn-range` | 5,704 |
| `pressure-range` | 2,057 |
| `pulse-range` | 5,184 |
| `sheet-marker-deficit` | 7,413 |
| `sheet-metric-gdp` | 7,358 |
| `sheet-metric-households` | 7,437 |
| `sheet-metric-temp` | 7,333 |
| `sheet-metric-valuation` | 7,458 |
| `sheet-sign-activity` | 7,398 |
| `sheet-sign-desire` | 5,218 |
| `sheet-sign-horizon` | 5,705 |
| `sheet-sign-hormones` | 5,784 |
| `sheet-sign-pressure` | 5,421 |
| `sheet-sign-pulse` | 5,183 |
| `sheet-sign-sentiment` | 5,896 |
| `sheet-sign-volume` | 5,201 |
| `volume-range` | 5,202 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 7,420 |
| `desire-range` | 5,206 |
| `fear-range` | 5,862 |
| `hzn-range` | 5,689 |
| `pressure-range` | 5,390 |
| `pulse-range` | 5,170 |
| `sheet-metric-gdp` | 7,359 |
| `sheet-metric-temp` | 7,334 |
| `sheet-metric-valuation` | 7,459 |
| `volume-range` | 5,188 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 3,076 |
| `sheet-metric-gdp` | 3,077 |
| `sheet-sign-activity` | 3,078 |
| `sheet-metric-valuation` | 3,079 |
| `sheet-metric-households` | 3,080 |
| `deficit-range` | 3,081 |
| `volume-range` | 3,082 |
| `pulse-range` | 3,083 |
| `hzn-range` | 3,084 |
| `desire-range` | 3,085 |
| `fear-range` | 3,086 |
| `hormones-range` | 3,087 |
| `pressure-range` | 3,088 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 158 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 247 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 283 | season strip |
| 310 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 379 | tab bar (app-style segmented navigation) |
| 414 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 430 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 501 | journal (editorial content tab) |
| 507 | content tab: reading companion |
| 556 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 745 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 820 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 893 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,068 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,083 | The symptoms: a cycle's years against today |
| 1,160 | hero: yield curve |
| 1,193 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,212 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,237 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,245 | long cycle (structural layer) |
| 1,252 | indicator grid |
| 1,278 | info icon + popover (progressive disclosure for longer notes) |
| 1,292 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,375 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (106), which is what the renderers fill:

| Line | id |
|---|---|
| 1,391 | `topbar-back` |
| 1,394 | `topbar-title` |
| 1,395 | `menu-btn` |
| 1,409 | `main` |
| 1,412 | `cycle-view` |
| 1,415 | `cycle-kicker` |
| 1,418 | `cycle-dial` |
| 1,420 | `season-wheel-hub-date` |
| 1,421 | `season-wheel-hub-theme` |
| 1,422 | `season-wheel-hub-detail` |
| 1,430 | `today-analysis` |
| 1,431 | `peek-row` |
| 1,432 | `sheet-metric-temp` |
| 1,433 | `temp-timing` |
| 1,434 | `temp-chart` |
| 1,435 | `temp-rangebar` |
| 1,437 | `temp-head` |
| 1,438 | `temp-history` |
| 1,439 | `temp-hist-tooltip` |
| 1,440 | `temp-trend` |
| 1,442 | `temp-highlights` |
| 1,444 | `sheet-metric-gdp` |
| 1,445 | `gdp-timing` |
| 1,446 | `gdp-chart` |
| 1,447 | `gdp-rangebar` |
| 1,449 | `gdp-head` |
| 1,450 | `gdp-history` |
| 1,451 | `gdp-hist-tooltip` |
| 1,452 | `gdp-yoy` |
| 1,453 | `gdp-trend` |
| 1,455 | `gdp-highlights` |
| 1,459 | `sheet-marker-deficit` |
| 1,461 | `sheet-metric-households` |
| 1,462 | `households-timing` |
| 1,463 | `households-chart` |
| 1,464 | `households-highlights` |
| 1,467 | `sheet-metric-valuation` |
| 1,468 | `valuation-timing` |
| 1,469 | `valuation-chart` |
| 1,470 | `valuation-highlights` |
| 1,477 | `subj-value-hormones` |
| 1,478 | `subj-say-hormones` |
| 1,484 | `hormones-history` |
| 1,485 | `hormones-insights` |
| 1,494 | `subj-value-horizon` |
| 1,495 | `subj-say-horizon` |
| 1,496 | `subj-spark-horizon` |
| 1,502 | `hzn-timeline` |
| 1,504 | `hzn-head` |
| 1,505 | `spread-history-shell` |
| 1,506 | `spread-history-svg` |
| 1,507 | `spread-history-tooltip` |
| 1,509 | `hzn-trend` |
| 1,511 | `horizon-insights` |
| 1,520 | `subj-value-pressure` |
| 1,521 | `subj-say-pressure` |
| 1,527 | `pressure-timeline` |
| 1,529 | `pressure-head` |
| 1,530 | `ylm-shell` |
| 1,531 | `ylm-svg` |
| 1,532 | `ylm-tooltip` |
| 1,534 | `ylm-trend` |
| 1,536 | `pressure-insights` |
| 1,543 | `subj-ring-sentiment` |
| 1,546 | `subj-value-sentiment` |
| 1,547 | `subj-say-sentiment` |
| 1,548 | `subj-spark-sentiment` |
| 1,554 | `fear-history` |
| 1,555 | `curve-highlights` |
| 1,561 | `signs-list` |
| 1,567 | `calendar-list` |
| 1,574 | `cycle-data` |
| 1,576 | `cycle-legend` |
| 1,577 | `cycle-list` |
| 1,578 | `cycle-more` |
| 1,579 | `cycle-more-label` |
| 1,584 | `calendar-cycle` |
| 1,585 | `calendar-cycle-slot` |
| 1,606 | `search-home` |
| 1,608 | `search-input` |
| 1,610 | `search-list` |
| 1,614 | `more-menu` |
| 1,617 | `menu-back` |
| 1,631 | `sources-open` |
| 1,639 | `appearance-current` |
| 1,645 | `sheet-howto` |
| 1,688 | `sheet-book` |
| 1,719 | `seasons-kicker` |
| 1,721 | `seasons-rows` |
| 1,724 | `framework-kicker` |
| 1,727 | `framework-rows` |
| 1,737 | `sheet-appearance` |
| 1,745 | `theme-toggle` |
| 1,752 | `sheet-contact` |
| 1,761 | `contact-form` |
| 1,762 | `contact-title` |
| 1,763 | `contact-message` |
| 1,765 | `contact-hint` |
| 1,766 | `contact-send` |
| 1,772 | `sheet-sources` |
| 1,775 | `sources-back` |
| 1,780 | `asof-text` |
| 1,781 | `sources-groups` |
| 1,787 | `detail-backdrop` |
| 1,789 | `detail-modal-close` |
| 1,790 | `detail-modal-body` |

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

