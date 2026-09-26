# Map of `index.html`

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

`index.html` is **12,937 lines**, about 1059 KB, roughly **301 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -n 'function moodFrom(' index.html` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `348949d` on 2026-09-26.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,905 | the whole stylesheet, every token and rule |
| **Markup** | 2,906–3,631 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,632–12,913 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 12,914–12,937 | </body></html> |

Counts: **239** top-level functions, **177** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,637_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,641 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,642 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,643 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,661 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,665 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,670_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,680 | `wheelMeta` | `var wheelMeta =` |
| 3,691 | `seasonOverride` | `var seasonOverride =` |
| 3,694 | `cycleNowNote` | `var cycleNowNote =` |
| 3,703 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,789 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,834 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,847_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,864 | `LIVE` | `function LIVE(` |
| 3,880 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,881 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,884_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,915 | `repaintFigureText` | `function repaintFigureText(` |
| 3,923 | `repaintTag` | `function repaintTag(` |
| 3,931 | `repaintSentiment` | `function repaintSentiment(` |
| 3,942 | `repaintYieldRow` | `function repaintYieldRow(` |
| 3,950 | `repaintValuationRow` | `function repaintValuationRow(` |
| 3,958 | `REPAINT` | `var REPAINT =` |
| 3,971 | `applyLive` | `function applyLive(` |
| 3,993 | `repaintPolicy` | `function repaintPolicy(` |
| 4,026 | `GYN` | `var GYN =` |
| 4,045 | `refreshLiveData` | `function refreshLiveData(` |
| 4,075 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,089_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,090 | `yieldCurve` | `var yieldCurve =` |
| 4,103 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,127 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,134 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 4,140 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,167 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,169_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,174 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,198 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,222 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,246 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,273 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,298_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,307 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,317 | `uninvLagToday` | `var uninvLagToday =` |
| 4,329 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,342 | `gdpPeers` | `var gdpPeers =` |
| 4,383 | `gdpSrc` | `var gdpSrc =` |
| 4,384 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,389 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,402 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,440_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,462 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,472_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,488 | `stressScoreFor` | `function stressScoreFor(` |
| 4,494 | `stressScore` | `var stressScore =` |
| 4,500 | `powerOf` | `var powerOf =` |
| 4,501 | `powerScore` | `var powerScore =` |
| 4,518 | `stressHistory` | `var stressHistory =` |
| 4,529 | `powerMeter` | `var powerMeter =` |
| 4,531 | `stressNoteFull` | `var stressNoteFull =` |
| 4,563 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,565_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,588 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,589 | `deficitHistory` | `var deficitHistory =` |
| 4,592 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,599 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,601 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,644_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,657 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,670_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,684 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,687 | `timelineSpan` | `function timelineSpan(` |
| 4,693 | `timelineFor` | `function timelineFor(` |
| 4,706 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,712_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,718 | `windowScale` | `function windowScale(` |
| 4,734 | `windowYears` | `function windowYears(` |
| 4,752 | `refName` | `function refName(` |
| 4,759 | `histReadEnsure` | `function histReadEnsure(` |
| 4,790 | `seatBandReading` | `function seatBandReading(` |
| 4,813 | `histReadFill` | `function histReadFill(` |
| 4,849 | `wireHistHover` | `function wireHistHover(` |
| 4,908 | `mWindowFrom` | `function mWindowFrom(` |
| 4,913 | `qWindowFrom` | `function qWindowFrom(` |
| 4,918 | `VOL_STOPS` | `var VOL_STOPS =` |
| 4,919 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 4,921 | `DEF_1983` | `var DEF_1983 =` |
| 4,923 | `defFrom` | `function defFrom(` |
| 4,934 | `deficitChart` | `function deficitChart(` |
| 5,024 | `deficitBlock` | `function deficitBlock(` |
| 5,086 | `buffettHistory` | `var buffettHistory =` |
| 5,116 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,117 | `hyDates` | `var hyDates =` |
| 5,118 | `hyOas` | `var hyOas =` |
| 5,119 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,126 | `hyAt` | `function hyAt(` |
| 5,130 | `hyLabel` | `function hyLabel(` |
| 5,131 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,132 | `hyNum` | `function hyNum(` |
| 5,133 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,143 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,153 | `capeHistory` | `var capeHistory =` |
| 5,155 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,173_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,179 | `sentiment` | `var sentiment =` |
| 5,197 | `valuation` | `var valuation =` |
| 5,234 | `valRow` | `function valRow(` |
| 5,242 | `coincident` | `var coincident =` |
| 5,303 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,321 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,322 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,323 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,325_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,338 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,339 | `m2vHistory` | `var m2vHistory =` |
| 5,359 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,458 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,559 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,560 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 5,600_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,606 | `HIST_NOTE` | `var HIST_NOTE =` |
| 5,607 | `DOTS` | `var DOTS =` |
| 5,609 | `HIST_HEAD` | `var HIST_HEAD =` |
| 5,634 | `histHead` | `function histHead(` |
| 5,652 | `headNoteIdx` | `var headNoteIdx =` |
| 5,653 | `headMenuHtml` | `function headMenuHtml(` |
| 5,673 | `headMenuFor` | `var headMenuFor =` |
| 5,674 | `paintHeadMenus` | `function paintHeadMenus(` |
| 5,700 | `nameWithMark` | `function nameWithMark(` |
| 5,706 | `panelRow` | `function panelRow(` |
| 5,730 | `panelFromMeter` | `function panelFromMeter(` |
| 5,744 | `meterFlagged` | `function meterFlagged(` |
| 5,755 | `desireInfoHtml` | `function desireInfoHtml(` |
| 5,783 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 5,797 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 5,816 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 5,835 | `outputInfoHtml` | `function outputInfoHtml(` |
| 5,849 | `activityInfoHtml` | `function activityInfoHtml(` |
| 5,874 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 5,905 | `desireBlock` | `function desireBlock(` |
| 5,932 | `volumeBlock` | `function volumeBlock(` |
| 5,957 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 5,980 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 5,988_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,001 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,002 | `m2Level` | `var m2Level =` |
| 6,024 | `m2Yoy` | `var m2Yoy =` |
| 6,025 | `M2_NORM` | `var M2_NORM =` |
| 6,030 | `volumeVerdict` | `function volumeVerdict(` |
| 6,067 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,068 | `unempHistory` | `var unempHistory =` |
| 6,074 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,089 | `NROU_NOW` | `var NROU_NOW =` |
| 6,090 | `unempState` | `function unempState(` |
| 6,096 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,156 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,157 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,160 | `qAtIndex` | `function qAtIndex(` |
| 6,161 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,169_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,184 | `householdsChart` | `function householdsChart(` |
| 6,248 | `refKey` | `function refKey(` |
| 6,286 | `lastChartAvg` | `var lastChartAvg =` |
| 6,287 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,372 | `GDP_NORM` | `var GDP_NORM =` |
| 6,378 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,379 | `gdpNowQ` | `var gdpNowQ =` |
| 6,380 | `gdpMeter` | `var gdpMeter =` |
| 6,383 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,405 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,471 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,535 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,543 | `velocityVerdict` | `function velocityVerdict(` |
| 6,551 | `derivePulseTag` | `function derivePulseTag(` |
| 6,557 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,617_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,626 | `seasonReading` | `var seasonReading =` |
| 6,675 | `frameworkRows` | `var frameworkRows =` |
| 6,685 | `vixRow` | `var vixRow =` |
| 6,693 | `vixWordOf` | `var vixWordOf =` |
| 6,697 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 6,712_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,716 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 6,725_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,726 | `calendarTodayY` | `var calendarTodayY =` |
| 6,747 | `fearGreed` | `var fearGreed =` |
| 6,751 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 6,756 | `valuationVerdict` | `function valuationVerdict(` |
| 6,774 | `sparkHtml` | `function sparkHtml(` |
| 6,793 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 6,799_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,812 | `modeBar` | `function modeBar(` |
| 6,827 | `pickerOpen` | `var pickerOpen =` |
| 6,831 | `cycleByName` | `function cycleByName(` |
| 6,835 | `openCycle` | `function openCycle(` |
| 6,841 | `cycleSlice` | `function cycleSlice(` |
| 6,850 | `totalGrowthYears` | `function totalGrowthYears(` |
| 6,858 | `cycleMonths` | `function cycleMonths(` |
| 6,877 | `histControls` | `function histControls(` |
| 6,891 | `cycLabel` | `function cycLabel(` |
| 6,907 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 6,916 | `cyclePicker` | `function cyclePicker(` |
| 6,940 | `seriesBar` | `function seriesBar(` |
| 6,947 | `rangeBar` | `function rangeBar(` |
| 6,959 | `trendOf` | `function trendOf(` |
| 7,004 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,014 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,029_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,030 | `yearOf` | `function yearOf(` |
| 7,031 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,032_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,062 | `totalStat` | `function totalStat(` |
| 7,068 | `atQuarter` | `function atQuarter(` |
| 7,069 | `atMonth` | `function atMonth(` |
| 7,070 | `cycleAverages` | `function cycleAverages(` |
| 7,077 | `ordinal` | `function ordinal(` |
| 7,078 | `hiCard` | `function hiCard(` |
| 7,089 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,103_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,110 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,126 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,133 | `moreRow` | `function moreRow(` |
| 7,139 | `powerPageNote` | `var powerPageNote =` |
| 7,140 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,146_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,149 | `xLabelOf` | `function xLabelOf(` |
| 7,169 | `fitGroup` | `function fitGroup(` |
| 7,191 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,250_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,274 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,284 | `vGrid` | `function vGrid(` |
| 7,309 | `COL_FILL` | `var COL_FILL =` |
| 7,316 | `AXIS` | `var AXIS =` |
| 7,317 | `chartAxes` | `function chartAxes(` |
| 7,348 | `divergeChart` | `function divergeChart(` |
| 7,409 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,438_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,446 | `maxIn` | `function maxIn(` |
| 7,459 | `reserveGauge` | `function reserveGauge(` |
| 7,480 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,494 | `PEEK_W` | `var PEEK_W =` |
| 7,497 | `PEEK_H` | `var PEEK_H =` |
| 7,498 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,503 | `colPeek` | `function colPeek(` |
| 7,530 | `meterPeek` | `function meterPeek(` |
| 7,547 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,552 | `pressureZone` | `function pressureZone(` |
| 7,567 | `HZN_BACK` | `var HZN_BACK =` |
| 7,568 | `hznLast` | `function hznLast(` |
| 7,569 | `hznBack` | `function hznBack(` |
| 7,570 | `horizonWord` | `function horizonWord(` |
| 7,595 | `HZN_METERS` | `var HZN_METERS =` |
| 7,603 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 7,627 | `_hznPanel` | `var _hznPanel =` |
| 7,628 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 7,648 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 7,649 | `levelZone` | `function levelZone(` |
| 7,661 | `RISK_REWARD` | `var RISK_REWARD =` |
| 7,666 | `RISK_RISK` | `var RISK_RISK =` |
| 7,671 | `riskCell` | `function riskCell(` |
| 7,672 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 7,703 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 7,728_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,747 | `pulseClipN` | `var pulseClipN =` |
| 7,748 | `beatPath` | `function beatPath(` |
| 7,773 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 7,787 | `pulsePeek` | `function pulsePeek(` |
| 7,795 | `pulseBlock` | `function pulseBlock(` |
| 7,815 | `CHEV` | `var CHEV =` |
| 7,817 | `peekCard` | `function peekCard(` |
| 7,839 | `moodFrom` | `function moodFrom(` |
| 7,876 | `dropSvg` | `function dropSvg(` |
| 7,884 | `speakerSvg` | `function speakerSvg(` |
| 7,892 | `gaugeSvg` | `function gaugeSvg(` |
| 7,896 | `diamondSvg` | `function diamondSvg(` |
| 7,908 | `energyFromReserve` | `function energyFromReserve(` |
| 7,920 | `sproutSvg` | `function sproutSvg(` |
| 7,931 | `markSvg` | `function markSvg(` |
| 7,935 | `flameSvg` | `function flameSvg(` |
| 7,939 | `gearSvg` | `function gearSvg(` |
| 7,952 | `pulseSvg` | `function pulseSvg(` |
| 7,956 | `thermoSvg` | `function thermoSvg(` |
| 7,975 | `trendUpSvg` | `function trendUpSvg(` |
| 7,977 | `ecgSvg` | `function ecgSvg(` |
| 7,991 | `circulationSvg` | `function circulationSvg(` |
| 7,992 | `weatherSvg` | `function weatherSvg(` |
| 8,013 | `moodSvg` | `function moodSvg(` |
| 8,030 | `boltSvg` | `function boltSvg(` |
| 8,033 | `houseSvg` | `function houseSvg(` |
| 8,041 | `sunriseSvg` | `function sunriseSvg(` |
| 8,051 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,063 | `signMarks` | `var signMarks =` |
| 8,070 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,087_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,108 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,109 | `dsrHistory` | `var dsrHistory =` |
| 8,110 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,111 | `savHistory` | `var savHistory =` |
| 8,116 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,126 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,127 | `dsrNow` | `var dsrNow =` |
| 8,128 | `savNow` | `var savNow =` |
| 8,129 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,134 | `householdsWord` | `function householdsWord(` |
| 8,141 | `householdsNow` | `var householdsNow =` |
| 8,148 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,149 | `dsrMeter` | `var dsrMeter =` |
| 8,152 | `savMeter` | `var savMeter =` |
| 8,155 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,172 | `savInfoHtml` | `function savInfoHtml(` |
| 8,190 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,199 | `greedScore` | `var greedScore =` |
| 8,200 | `moodNow` | `var moodNow =` |
| 8,201 | `fgSub` | `var fgSub =` |
| 8,202 | `fgDetailHtml` | `function fgDetailHtml(` |
| 8,203 | `fgNoteFull` | `var fgNoteFull =` |
| 8,209 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,250 | `marketCycles` | `var marketCycles =` |
| 8,280 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,282_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,303 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,304 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,309_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,330 | `slopeOf` | `function slopeOf(` |
| 8,341 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,347 | `readSeason` | `function readSeason(` |
| 8,372 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,374 | `qLabel` | `function qLabel(` |
| 8,398 | `regimeTrack` | `function regimeTrack(` |
| 8,421 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,423_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,430 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,431 | `seasonTitle` | `function seasonTitle(` |
| 8,432 | `monthLabel` | `function monthLabel(` |
| 8,433 | `cycleModel` | `function cycleModel(` |
| 8,485 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,493 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,500 | `nowModel` | `var nowModel =` |
| 8,501 | `readingNow` | `var readingNow =` |
| 8,502 | `cpiNow` | `var cpiNow =` |
| 8,503 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,504 | `currentSeason` | `var currentSeason =` |
| 8,505 | `seasonWhy` | `var seasonWhy =` |
| 8,522 | `seasonGroup` | `function seasonGroup(` |
| 8,531 | `fearGauge` | `function fearGauge(` |
| 8,568 | `vitalRingSvg` | `function vitalRingSvg(` |
| 8,581 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 8,583 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 8,587 | `policyFacts` | `function policyFacts(` |
| 8,599 | `allSources` | `var allSources =` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 8,634_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,637 | `SVG_NS` | `var SVG_NS =` |
| 8,638 | `svgEl` | `function svgEl(` |
| 8,651 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 8,687_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,688 | `clampPct` | `function clampPct(` |
| 8,695 | `infoIcon` | `function infoIcon(` |
| 8,704 | `detailTexts` | `var detailTexts =` |
| 8,722 | `detailSlots` | `var detailSlots =` |
| 8,723 | `detailSlot` | `function detailSlot(` |
| 8,734 | `powerPanelHtml` | `var powerPanelHtml =` |
| 8,738 | `_growthPanel` | `var _growthPanel =` |
| 8,739 | `growthPanelHtml` | `function growthPanelHtml(` |
| 8,745 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 8,756 | `facts` | `function facts(` |
| 8,757 | `factsFrom` | `function factsFrom(` |
| 8,761 | `expandBtn` | `function expandBtn(` |
| 8,767 | `sheetRenderers` | `var sheetRenderers =` |
| 8,784 | `pageMode` | `var pageMode =` |
| 8,791 | `pageCycles` | `var pageCycles =` |
| 8,796 | `pageRange` | `var pageRange =` |
| 8,802 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 8,836_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,847 | `meterHtml` | `function meterHtml(` |
| 8,875 | `srcHtml` | `function srcHtml(` |
| 8,884 | `TIMING` | `var TIMING =` |
| 8,890 | `timingMark` | `function timingMark(` |
| 8,904 | `timingPill` | `function timingPill(` |
| 8,925 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 8,933 | `seatPageFoot` | `function seatPageFoot(` |
| 8,956 | `timingMembers` | `var timingMembers =` |
| 8,957 | `registerTiming` | `function registerTiming(` |
| 8,963 | `headHtml` | `function headHtml(` |
| 8,981 | `heldHighlights` | `var heldHighlights =` |
| 8,982 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,040_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,041 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,408_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,409 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 9,619_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,620 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 9,652_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,658 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 9,742_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,743 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 9,761_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,764 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the mood ring, then the Fear & Greed lead row and its markers

_line 9,787_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,788 | `renderPsychologyTag` | `function renderPsychologyTag(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 9,840_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,843 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,034_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,046 | `totalRiseIn` | `function totalRiseIn(` |
| 10,056 | `eraInflation` | `function eraInflation(` |
| 10,067 | `eraGrowth` | `function eraGrowth(` |
| 10,083 | `fmtSigned` | `function fmtSigned(` |
| 10,088 | `regimeArrow` | `function regimeArrow(` |
| 10,094 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,095 | `growthShown` | `function growthShown(` |
| 10,096 | `growthShownCap` | `function growthShownCap(` |
| 10,097 | `regimeState` | `function regimeState(` |
| 10,101 | `phaseClass` | `function phaseClass(` |
| 10,103 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,115 | `cycleViewEl` | `var cycleViewEl =` |
| 10,119 | `tempCard` | `var tempCard =` |
| 10,120 | `placeCharts` | `function placeCharts(` |
| 10,125 | `shownEra` | `var shownEra =` |
| 10,126 | `calendarReset` | `var calendarReset =` |
| 10,127 | `metricPageReset` | `var metricPageReset =` |
| 10,128 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,131 | `topbarBack` | `var topbarBack =` |
| 10,132 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,139_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,140 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,288_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,289 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,307_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,310 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,331_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,337 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,340 | `hubSet` | `function hubSet(` |
| 10,353 | `quarterPopup` | `function quarterPopup(` |
| 10,386 | `hubShowDefault` | `function hubShowDefault(` |
| 10,395 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,401 | `hubShowYear` | `function hubShowYear(` |
| 10,416 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 10,508_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,511 | `tempState` | `var tempState =` |
| 10,514 | `chartLink` | `var chartLink =` |
| 10,534 | `m2Step` | `function m2Step(` |
| 10,537 | `heatStep` | `function heatStep(` |
| 10,541 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 10,728_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,731 | `drawGrowth` | `function drawGrowth(` |
| 10,870 | `wireResize` | `function wireResize(` |
| 10,876 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 10,888_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,889 | `renderCycleView` | `function renderCycleView(` |
| 10,942 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 10,953 | `PEER_CARET` | `var PEER_CARET =` |
| 10,954 | `peerList` | `function peerList(` |
| 10,955 | `peerChosen` | `function peerChosen(` |
| 10,956 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 10,960 | `renderPeerPills` | `function renderPeerPills(` |
| 11,010 | `shownEraModel` | `var shownEraModel =` |
| 11,011 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,013_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,015 | `stripGroupName` | `var stripGroupName =` |
| 11,016 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,062 | `marketStripHtml` | `function marketStripHtml(` |
| 11,103 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,104 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,135_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,136 | `renderCycleList` | `function renderCycleList(` |
| 11,226 | `renderSignsList` | `function renderSignsList(` |
| 11,482 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 12,717_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,718 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 12,780_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,781 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 12,814_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,815 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`WORKING-DOC.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,860–3,863 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 7,576–7,589 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,381–8,394 | `seasonTrackAll` | The season, computed |
| 8,416–8,420 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,188 |
| `desire-range` | 9,354 |
| `hzn-range` | 9,691 |
| `pulse-range` | 9,305 |
| `sheet-marker-deficit` | 12,185 |
| `sheet-metric-gdp` | 12,073 |
| `sheet-metric-households` | 12,219 |
| `sheet-metric-power` | 12,152 |
| `sheet-metric-temp` | 12,023 |
| `sheet-metric-valuation` | 12,260 |
| `sheet-sign-activity` | 12,134 |
| `sheet-sign-desire` | 9,355 |
| `sheet-sign-horizon` | 9,692 |
| `sheet-sign-pulse` | 9,304 |
| `sheet-sign-volume` | 9,328 |
| `sheet-sign-yield` | 9,272 |
| `volume-range` | 9,329 |
| `ylm-range` | 9,400 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,194 |
| `desire-range` | 9,337 |
| `hzn-range` | 9,668 |
| `pulse-range` | 9,282 |
| `sheet-metric-gdp` | 12,074 |
| `sheet-metric-power` | 12,153 |
| `sheet-metric-temp` | 12,024 |
| `sheet-metric-valuation` | 12,261 |
| `volume-range` | 9,309 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 5,610 |
| `sheet-metric-gdp` | 5,611 |
| `sheet-sign-activity` | 5,612 |
| `sheet-metric-power` | 5,613 |
| `sheet-metric-valuation` | 5,615 |
| `sheet-metric-households` | 5,616 |
| `deficit-range` | 5,617 |
| `volume-range` | 5,618 |
| `pulse-range` | 5,619 |
| `hzn-range` | 5,620 |
| `ylm-range` | 5,631 |
| `desire-range` | 5,632 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 189 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 322 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 399 | yearly calendar — one card per year, grouped into five eras |
| 406 | season strip |
| 459 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels \u2026 so if one day |
| 618 | tab bar (app-style segmented navigation) |
| 655 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 683 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 901 | journal (editorial content tab) |
| 907 | content tab: reading companion |
| 965 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,452 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,486 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,496 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,507 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,540 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,720 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,869 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,323 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,371 | hero: yield curve |
| 2,463 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,518 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,622 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,647 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,662 | long cycle (structural layer) |
| 2,703 | indicator grid |
| 2,746 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,763 | info icon + popover (progressive disclosure for longer notes) |
| 2,784 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,879 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (147), which is what the renderers fill:

| Line | id |
|---|---|
| 2,911 | `topbar-back` |
| 2,914 | `topbar-title` |
| 2,915 | `menu-btn` |
| 2,934 | `cycle-view` |
| 2,942 | `cycle-kicker` |
| 2,948 | `cycle-dial` |
| 2,950 | `season-wheel-hub-date` |
| 2,951 | `season-wheel-hub-theme` |
| 2,952 | `season-wheel-hub-detail` |
| 2,960 | `temp-card` |
| 2,962 | `temp-kicker` |
| 2,963 | `temp-sub` |
| 2,966 | `temp-svg` |
| 2,967 | `temp-tooltip` |
| 2,973 | `temp-stats` |
| 2,980 | `growth-card` |
| 2,983 | `growth-kicker` |
| 2,983 | `growth-phase` |
| 2,983 | `growth-sub` |
| 2,983 | `growth-peers` |
| 2,984 | `growth-svg` |
| 2,984 | `growth-tooltip` |
| 2,989 | `growth-stats` |
| 2,998 | `today-analysis` |
| 3,002 | `peek-row` |
| 3,006 | `sheet-metric-temp` |
| 3,007 | `temp-timing` |
| 3,008 | `temp-chart` |
| 3,010 | `temp-rangebar` |
| 3,012 | `temp-head` |
| 3,013 | `slot-temp` |
| 3,014 | `temp-history` |
| 3,015 | `temp-hist-tooltip` |
| 3,018 | `temp-trend` |
| 3,021 | `temp-panel` |
| 3,023 | `temp-highlights` |
| 3,026 | `sheet-metric-gdp` |
| 3,027 | `gdp-timing` |
| 3,028 | `gdp-chart` |
| 3,029 | `gdp-rangebar` |
| 3,031 | `gdp-head` |
| 3,032 | `slot-growth` |
| 3,033 | `gdp-history` |
| 3,034 | `gdp-hist-tooltip` |
| 3,035 | `gdp-yoy` |
| 3,045 | `gdp-trend` |
| 3,047 | `gdp-panel` |
| 3,052 | `subj-ring-gdp` |
| 3,054 | `subj-label-gdp` |
| 3,055 | `subj-value-gdp` |
| 3,056 | `subj-say-gdp` |
| 3,057 | `subj-spark-gdp` |
| 3,062 | `subj-ctx-gdp` |
| 3,065 | `gdp-highlights` |
| 3,073 | `sheet-metric-power` |
| 3,074 | `power-timing` |
| 3,075 | `power-head` |
| 3,076 | `power-chart` |
| 3,080 | `subj-ring-resilience` |
| 3,083 | `subj-value-resilience` |
| 3,084 | `subj-say-resilience` |
| 3,089 | `subj-ctx-resilience` |
| 3,093 | `longcycle-title` |
| 3,095 | `longcycle-tag` |
| 3,109 | `power-highlights` |
| 3,116 | `sheet-marker-deficit` |
| 3,122 | `sheet-metric-households` |
| 3,123 | `households-timing` |
| 3,124 | `households-chart` |
| 3,125 | `households-highlights` |
| 3,129 | `sheet-metric-valuation` |
| 3,130 | `valuation-timing` |
| 3,131 | `valuation-head` |
| 3,132 | `valuation-chart` |
| 3,136 | `subj-ring-valuation` |
| 3,139 | `subj-value-valuation` |
| 3,140 | `subj-say-valuation` |
| 3,145 | `subj-ctx-valuation` |
| 3,149 | `valuation-title` |
| 3,151 | `valuation-tag` |
| 3,158 | `valuation-highlights` |
| 3,164 | `subj-ring-yield` |
| 3,167 | `subj-value-yield` |
| 3,168 | `subj-say-yield` |
| 3,169 | `subj-spark-yield` |
| 3,200 | `ylm-series` |
| 3,205 | `ylm-head` |
| 3,206 | `ylm-shell` |
| 3,207 | `ylm-svg` |
| 3,208 | `ylm-tooltip` |
| 3,211 | `ylm-zone-legend` |
| 3,216 | `ylm-trend` |
| 3,219 | `pressure-insights` |
| 3,220 | `pressure-highlights` |
| 3,246 | `subj-value-horizon` |
| 3,247 | `subj-say-horizon` |
| 3,248 | `subj-spark-horizon` |
| 3,258 | `hzn-timeline` |
| 3,260 | `hzn-head` |
| 3,261 | `spread-history-shell` |
| 3,262 | `spread-history-svg` |
| 3,263 | `spread-history-tooltip` |
| 3,266 | `hzn-zone-legend` |
| 3,271 | `hzn-trend` |
| 3,273 | `hzn-panel` |
| 3,275 | `horizon-insights` |
| 3,276 | `horizon-highlights` |
| 3,283 | `subj-ring-sentiment` |
| 3,286 | `subj-value-sentiment` |
| 3,287 | `subj-say-sentiment` |
| 3,288 | `subj-spark-sentiment` |
| 3,300 | `fg-gauge` |
| 3,301 | `fg-vix` |
| 3,302 | `fg-highlights` |
| 3,316 | `signs-list` |
| 3,327 | `calendar-list` |
| 3,332 | `indicators-peek` |
| 3,378 | `cycle-list` |
| 3,384 | `cycle-more` |
| 3,385 | `cycle-more-label` |
| 3,394 | `calendar-cycle` |
| 3,395 | `calendar-cycle-slot` |
| 3,446 | `seasons-kicker` |
| 3,447 | `seasons-rows` |
| 3,451 | `framework-kicker` |
| 3,453 | `framework-rows` |
| 3,460 | `more-menu` |
| 3,463 | `menu-back` |
| 3,477 | `sources-open` |
| 3,485 | `appearance-current` |
| 3,493 | `sheet-howto` |
| 3,537 | `sheet-book` |
| 3,569 | `sheet-appearance` |
| 3,577 | `theme-toggle` |
| 3,584 | `sheet-contact` |
| 3,593 | `contact-form` |
| 3,594 | `contact-title` |
| 3,595 | `contact-message` |
| 3,597 | `contact-hint` |
| 3,598 | `contact-send` |
| 3,607 | `sheet-sources` |
| 3,610 | `sources-back` |
| 3,617 | `asof-text` |
| 3,618 | `sources-groups` |
| 3,623 | `detail-backdrop` |
| 3,625 | `detail-modal-close` |
| 3,626 | `detail-modal-body` |

## Finding things fast

| To find | grep for |
|---|---|
| a figure's literal value | `var <name> = ` — the data objects are all top-level vars in the DATA section |
| what a history page draws | `HIST_HEAD` for its head, then `sheetRenderers["<id>"]` for its renderer |
| where a band comes from | the constant name, then read its `(i)` text — every band states its provenance |
| a season decision | `readSeason(`, `seasonTrackAll`, `cycleModel(` |
| why something looks the way it does | `Version ` — comments naming a version and quoting Keren are decisions |
| a live-data wiring | `LIVE("` — one line per document, each directly under its literal |
| a CSS rule's only home | the class name; rules under `.detail-modal`, `.metric-sheet`, `.sign-detail` are scoped and must be restated for a new host |

