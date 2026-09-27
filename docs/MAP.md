# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,547 lines**, about 1109 KB, roughly **315 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `501df99` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,000 | the whole stylesheet, every token and rule |
| **Markup** | 3,001–3,723 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,724–13,494 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,495–13,547 | </body></html> |

Counts: **245** top-level functions, **177** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,729_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,733 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,734 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,735 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,753 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,757 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,762_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,772 | `wheelMeta` | `var wheelMeta =` |
| 3,783 | `seasonOverride` | `var seasonOverride =` |
| 3,786 | `cycleNowNote` | `var cycleNowNote =` |
| 3,795 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,881 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,926 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,939_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,956 | `LIVE` | `function LIVE(` |
| 3,983 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,991 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 3,992 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,995_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,026 | `repaintFigureText` | `function repaintFigureText(` |
| 4,034 | `repaintTag` | `function repaintTag(` |
| 4,044 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,069 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,077 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,085 | `REPAINT` | `var REPAINT =` |
| 4,102 | `liveAsOf` | `var liveAsOf =` |
| 4,103 | `fmtAsOf` | `function fmtAsOf(` |
| 4,108 | `applyLive` | `function applyLive(` |
| 4,184 | `repaintPolicy` | `function repaintPolicy(` |
| 4,234 | `GYN` | `var GYN =` |
| 4,254 | `refreshLiveData` | `function refreshLiveData(` |
| 4,295 | `fetchSiteData` | `function fetchSiteData(` |
| 4,325 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,339_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,340 | `yieldCurve` | `var yieldCurve =` |
| 4,353 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,377 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,389 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,417_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,422 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,446 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,470 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,494 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,521 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,546_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,555 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,565 | `uninvLagToday` | `var uninvLagToday =` |
| 4,577 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,590 | `gdpPeers` | `var gdpPeers =` |
| 4,631 | `gdpSrc` | `var gdpSrc =` |
| 4,632 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,637 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,650 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,688_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,710 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,720_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,736 | `stressScoreFor` | `function stressScoreFor(` |
| 4,742 | `stressScore` | `var stressScore =` |
| 4,748 | `powerOf` | `var powerOf =` |
| 4,749 | `powerScore` | `var powerScore =` |
| 4,766 | `stressHistory` | `var stressHistory =` |
| 4,777 | `powerMeter` | `var powerMeter =` |
| 4,779 | `stressNoteFull` | `var stressNoteFull =` |
| 4,811 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,813_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,836 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,837 | `deficitHistory` | `var deficitHistory =` |
| 4,840 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,847 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,849 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,892_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,905 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,918_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,932 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,935 | `timelineSpan` | `function timelineSpan(` |
| 4,941 | `timelineFor` | `function timelineFor(` |
| 4,954 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,960_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,966 | `windowScale` | `function windowScale(` |
| 4,982 | `windowYears` | `function windowYears(` |
| 5,000 | `refName` | `function refName(` |
| 5,007 | `histReadEnsure` | `function histReadEnsure(` |
| 5,046 | `seatBandReading` | `function seatBandReading(` |
| 5,069 | `histReadFill` | `function histReadFill(` |
| 5,197 | `histAxisEnds` | `function histAxisEnds(` |
| 5,208 | `histLegend` | `function histLegend(` |
| 5,287 | `wireHistHover` | `function wireHistHover(` |
| 5,346 | `mWindowFrom` | `function mWindowFrom(` |
| 5,351 | `qWindowFrom` | `function qWindowFrom(` |
| 5,356 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,357 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,359 | `DEF_1983` | `var DEF_1983 =` |
| 5,361 | `defFrom` | `function defFrom(` |
| 5,372 | `deficitChart` | `function deficitChart(` |
| 5,462 | `deficitBlock` | `function deficitBlock(` |
| 5,524 | `buffettHistory` | `var buffettHistory =` |
| 5,554 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,555 | `hyDates` | `var hyDates =` |
| 5,556 | `hyOas` | `var hyOas =` |
| 5,557 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,564 | `hyAt` | `function hyAt(` |
| 5,568 | `hyLabel` | `function hyLabel(` |
| 5,569 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,570 | `hyNum` | `function hyNum(` |
| 5,571 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,581 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,591 | `capeHistory` | `var capeHistory =` |
| 5,593 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,611_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,617 | `sentiment` | `var sentiment =` |
| 5,635 | `valuation` | `var valuation =` |
| 5,672 | `valRow` | `function valRow(` |
| 5,680 | `coincident` | `var coincident =` |
| 5,741 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,759 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,760 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,761 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,763_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,776 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,777 | `m2vHistory` | `var m2vHistory =` |
| 5,797 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,890 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,980 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,981 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,021_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,027 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,028 | `DOTS` | `var DOTS =` |
| 6,030 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,055 | `histHead` | `function histHead(` |
| 6,076 | `headNoteIdx` | `var headNoteIdx =` |
| 6,077 | `headMenuHtml` | `function headMenuHtml(` |
| 6,097 | `headMenuFor` | `var headMenuFor =` |
| 6,098 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,124 | `nameWithMark` | `function nameWithMark(` |
| 6,130 | `panelRow` | `function panelRow(` |
| 6,156 | `panelFromMeter` | `function panelFromMeter(` |
| 6,170 | `meterFlagged` | `function meterFlagged(` |
| 6,181 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,209 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,223 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,242 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,261 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,275 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,300 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,331 | `desireBlock` | `function desireBlock(` |
| 6,358 | `volumeBlock` | `function volumeBlock(` |
| 6,383 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,406 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,414_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,427 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,428 | `m2Level` | `var m2Level =` |
| 6,450 | `m2Yoy` | `var m2Yoy =` |
| 6,451 | `M2_NORM` | `var M2_NORM =` |
| 6,456 | `volumeVerdict` | `function volumeVerdict(` |
| 6,493 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,494 | `unempHistory` | `var unempHistory =` |
| 6,500 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,515 | `NROU_NOW` | `var NROU_NOW =` |
| 6,516 | `unempState` | `function unempState(` |
| 6,522 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,587 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,588 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,591 | `qAtIndex` | `function qAtIndex(` |
| 6,592 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,600_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,615 | `householdsChart` | `function householdsChart(` |
| 6,685 | `lastChartAvg` | `var lastChartAvg =` |
| 6,686 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,771 | `GDP_NORM` | `var GDP_NORM =` |
| 6,777 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,778 | `gdpNowQ` | `var gdpNowQ =` |
| 6,779 | `gdpMeter` | `var gdpMeter =` |
| 6,782 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,804 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,870 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,934 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,942 | `velocityVerdict` | `function velocityVerdict(` |
| 6,950 | `derivePulseTag` | `function derivePulseTag(` |
| 6,956 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,016_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,025 | `seasonReading` | `var seasonReading =` |
| 7,074 | `frameworkRows` | `var frameworkRows =` |
| 7,084 | `vixRow` | `var vixRow =` |
| 7,092 | `vixWordOf` | `var vixWordOf =` |
| 7,096 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,111_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,115 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,124_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,125 | `calendarTodayY` | `var calendarTodayY =` |
| 7,156 | `vix3mClose` | `var vix3mClose =` |
| 7,157 | `fearCurve` | `function fearCurve(` |
| 7,164 | `curveVerdict` | `function curveVerdict(` |
| 7,171 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,176 | `valuationVerdict` | `function valuationVerdict(` |
| 7,194 | `sparkHtml` | `function sparkHtml(` |
| 7,213 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,219_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,232 | `modeBar` | `function modeBar(` |
| 7,247 | `pickerOpen` | `var pickerOpen =` |
| 7,251 | `cycleByName` | `function cycleByName(` |
| 7,255 | `openCycle` | `function openCycle(` |
| 7,261 | `cycleSlice` | `function cycleSlice(` |
| 7,270 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,278 | `cycleMonths` | `function cycleMonths(` |
| 7,297 | `histControls` | `function histControls(` |
| 7,311 | `cycLabel` | `function cycLabel(` |
| 7,327 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,336 | `cyclePicker` | `function cyclePicker(` |
| 7,360 | `seriesBar` | `function seriesBar(` |
| 7,367 | `rangeBar` | `function rangeBar(` |
| 7,379 | `trendOf` | `function trendOf(` |
| 7,424 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,434 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,455_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,456 | `yearOf` | `function yearOf(` |
| 7,457 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,458_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,488 | `totalStat` | `function totalStat(` |
| 7,494 | `atQuarter` | `function atQuarter(` |
| 7,495 | `atMonth` | `function atMonth(` |
| 7,496 | `cycleAverages` | `function cycleAverages(` |
| 7,503 | `ordinal` | `function ordinal(` |
| 7,504 | `hiCard` | `function hiCard(` |
| 7,515 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,529_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,536 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,552 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,559 | `moreRow` | `function moreRow(` |
| 7,565 | `powerPageNote` | `var powerPageNote =` |
| 7,566 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,572_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,575 | `xLabelOf` | `function xLabelOf(` |
| 7,595 | `fitGroup` | `function fitGroup(` |
| 7,617 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,676_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,700 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,710 | `vGrid` | `function vGrid(` |
| 7,735 | `COL_FILL` | `var COL_FILL =` |
| 7,778 | `AXIS` | `var AXIS =` |
| 7,779 | `chartAxes` | `function chartAxes(` |
| 7,829 | `divergeChart` | `function divergeChart(` |
| 7,890 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,919_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,927 | `maxIn` | `function maxIn(` |
| 7,940 | `reserveGauge` | `function reserveGauge(` |
| 7,961 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,975 | `PEEK_W` | `var PEEK_W =` |
| 7,978 | `PEEK_H` | `var PEEK_H =` |
| 7,979 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,984 | `colPeek` | `function colPeek(` |
| 8,011 | `meterPeek` | `function meterPeek(` |
| 8,028 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,033 | `pressureZone` | `function pressureZone(` |
| 8,048 | `HZN_BACK` | `var HZN_BACK =` |
| 8,049 | `hznLast` | `function hznLast(` |
| 8,050 | `hznBack` | `function hznBack(` |
| 8,051 | `horizonWord` | `function horizonWord(` |
| 8,076 | `HZN_METERS` | `var HZN_METERS =` |
| 8,084 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,108 | `_hznPanel` | `var _hznPanel =` |
| 8,109 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,129 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,130 | `levelZone` | `function levelZone(` |
| 8,142 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,147 | `RISK_RISK` | `var RISK_RISK =` |
| 8,152 | `riskCell` | `function riskCell(` |
| 8,153 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,184 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,209_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,228 | `pulseClipN` | `var pulseClipN =` |
| 8,229 | `beatPath` | `function beatPath(` |
| 8,254 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,268 | `pulsePeek` | `function pulsePeek(` |
| 8,276 | `pulseBlock` | `function pulseBlock(` |
| 8,296 | `CHEV` | `var CHEV =` |
| 8,298 | `peekCard` | `function peekCard(` |
| 8,349 | `dropSvg` | `function dropSvg(` |
| 8,357 | `speakerSvg` | `function speakerSvg(` |
| 8,365 | `gaugeSvg` | `function gaugeSvg(` |
| 8,369 | `diamondSvg` | `function diamondSvg(` |
| 8,381 | `energyFromReserve` | `function energyFromReserve(` |
| 8,393 | `sproutSvg` | `function sproutSvg(` |
| 8,404 | `markSvg` | `function markSvg(` |
| 8,408 | `flameSvg` | `function flameSvg(` |
| 8,412 | `gearSvg` | `function gearSvg(` |
| 8,425 | `pulseSvg` | `function pulseSvg(` |
| 8,429 | `thermoSvg` | `function thermoSvg(` |
| 8,448 | `trendUpSvg` | `function trendUpSvg(` |
| 8,450 | `ecgSvg` | `function ecgSvg(` |
| 8,464 | `circulationSvg` | `function circulationSvg(` |
| 8,465 | `weatherSvg` | `function weatherSvg(` |
| 8,486 | `moodSvg` | `function moodSvg(` |
| 8,503 | `boltSvg` | `function boltSvg(` |
| 8,506 | `houseSvg` | `function houseSvg(` |
| 8,514 | `sunriseSvg` | `function sunriseSvg(` |
| 8,524 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,536 | `signMarks` | `var signMarks =` |
| 8,543 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,560_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,581 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,582 | `dsrHistory` | `var dsrHistory =` |
| 8,583 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,584 | `savHistory` | `var savHistory =` |
| 8,589 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,599 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,600 | `dsrNow` | `var dsrNow =` |
| 8,601 | `savNow` | `var savNow =` |
| 8,602 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,607 | `householdsWord` | `function householdsWord(` |
| 8,614 | `householdsNow` | `var householdsNow =` |
| 8,621 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,622 | `dsrMeter` | `var dsrMeter =` |
| 8,625 | `savMeter` | `var savMeter =` |
| 8,628 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,645 | `savInfoHtml` | `function savInfoHtml(` |
| 8,663 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,672 | `curveNow` | `var curveNow =` |
| 8,673 | `curveTag` | `var curveTag =` |
| 8,674 | `curveSub` | `var curveSub =` |
| 8,678 | `curvePct` | `function curvePct(` |
| 8,679 | `curveNoteFull` | `var curveNoteFull =` |
| 8,694 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,702 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,743 | `marketCycles` | `var marketCycles =` |
| 8,773 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,775_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,796 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,797 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,802_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,823 | `slopeOf` | `function slopeOf(` |
| 8,834 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,840 | `readSeason` | `function readSeason(` |
| 8,865 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,867 | `qLabel` | `function qLabel(` |
| 8,891 | `regimeTrack` | `function regimeTrack(` |
| 8,914 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,916_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,923 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,924 | `seasonTitle` | `function seasonTitle(` |
| 8,925 | `monthLabel` | `function monthLabel(` |
| 8,926 | `cycleModel` | `function cycleModel(` |
| 8,978 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,986 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,993 | `nowModel` | `var nowModel =` |
| 8,994 | `readingNow` | `var readingNow =` |
| 8,995 | `cpiNow` | `var cpiNow =` |
| 8,996 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,997 | `currentSeason` | `var currentSeason =` |
| 8,998 | `seasonWhy` | `var seasonWhy =` |
| 9,015 | `seasonGroup` | `function seasonGroup(` |
| 9,029 | `arcGauge` | `function arcGauge(` |
| 9,068 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,081 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,083 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,087 | `policyFacts` | `function policyFacts(` |
| 9,099 | `allSources` | `var allSources =` |
| 9,123 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,156_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,159 | `SVG_NS` | `var SVG_NS =` |
| 9,160 | `svgEl` | `function svgEl(` |
| 9,173 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,209_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,210 | `clampPct` | `function clampPct(` |
| 9,217 | `infoIcon` | `function infoIcon(` |
| 9,226 | `detailTexts` | `var detailTexts =` |
| 9,244 | `detailSlots` | `var detailSlots =` |
| 9,245 | `detailSlot` | `function detailSlot(` |
| 9,256 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,260 | `_growthPanel` | `var _growthPanel =` |
| 9,261 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,267 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,278 | `facts` | `function facts(` |
| 9,279 | `factsFrom` | `function factsFrom(` |
| 9,283 | `expandBtn` | `function expandBtn(` |
| 9,289 | `sheetRenderers` | `var sheetRenderers =` |
| 9,306 | `pageMode` | `var pageMode =` |
| 9,313 | `pageCycles` | `var pageCycles =` |
| 9,318 | `pageRange` | `var pageRange =` |
| 9,324 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,358_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,369 | `meterHtml` | `function meterHtml(` |
| 9,397 | `srcHtml` | `function srcHtml(` |
| 9,406 | `TIMING` | `var TIMING =` |
| 9,412 | `timingMark` | `function timingMark(` |
| 9,426 | `timingPill` | `function timingPill(` |
| 9,447 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,455 | `seatPageFoot` | `function seatPageFoot(` |
| 9,478 | `timingMembers` | `var timingMembers =` |
| 9,479 | `registerTiming` | `function registerTiming(` |
| 9,485 | `headHtml` | `function headHtml(` |
| 9,503 | `heldHighlights` | `var heldHighlights =` |
| 9,504 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,562_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,563 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,936_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,937 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,160_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,161 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,193_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,199 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,283_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,284 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,302_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,305 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,328_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,329 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,380_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,383 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,576_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,588 | `totalRiseIn` | `function totalRiseIn(` |
| 10,598 | `eraInflation` | `function eraInflation(` |
| 10,609 | `eraGrowth` | `function eraGrowth(` |
| 10,625 | `fmtSigned` | `function fmtSigned(` |
| 10,630 | `regimeArrow` | `function regimeArrow(` |
| 10,636 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,637 | `growthShown` | `function growthShown(` |
| 10,638 | `growthShownCap` | `function growthShownCap(` |
| 10,639 | `regimeState` | `function regimeState(` |
| 10,643 | `phaseClass` | `function phaseClass(` |
| 10,645 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,657 | `cycleViewEl` | `var cycleViewEl =` |
| 10,661 | `tempCard` | `var tempCard =` |
| 10,662 | `placeCharts` | `function placeCharts(` |
| 10,667 | `shownEra` | `var shownEra =` |
| 10,668 | `calendarReset` | `var calendarReset =` |
| 10,669 | `metricPageReset` | `var metricPageReset =` |
| 10,670 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,673 | `topbarBack` | `var topbarBack =` |
| 10,674 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,681_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,682 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,843_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,844 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,862_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,865 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,886_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,892 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,895 | `hubSet` | `function hubSet(` |
| 10,908 | `quarterPopup` | `function quarterPopup(` |
| 10,941 | `hubShowDefault` | `function hubShowDefault(` |
| 10,950 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,956 | `hubShowYear` | `function hubShowYear(` |
| 10,971 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,063_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,066 | `tempState` | `var tempState =` |
| 11,069 | `chartLink` | `var chartLink =` |
| 11,089 | `m2Step` | `function m2Step(` |
| 11,092 | `heatStep` | `function heatStep(` |
| 11,096 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,283_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,286 | `drawGrowth` | `function drawGrowth(` |
| 11,425 | `wireResize` | `function wireResize(` |
| 11,431 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,443_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,444 | `renderCycleView` | `function renderCycleView(` |
| 11,497 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,508 | `PEER_CARET` | `var PEER_CARET =` |
| 11,509 | `peerList` | `function peerList(` |
| 11,510 | `peerChosen` | `function peerChosen(` |
| 11,511 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,515 | `renderPeerPills` | `function renderPeerPills(` |
| 11,565 | `shownEraModel` | `var shownEraModel =` |
| 11,566 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,568_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,570 | `stripGroupName` | `var stripGroupName =` |
| 11,571 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,617 | `marketStripHtml` | `function marketStripHtml(` |
| 11,680 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,681 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,711_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,712 | `renderCycleList` | `function renderCycleList(` |
| 11,802 | `renderSignsList` | `function renderSignsList(` |
| 12,058 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,293_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,294 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,356_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,357 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,390_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,391 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,952–3,955 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,057–8,070 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,874–8,887 | `seasonTrackAll` | The season, computed |
| 8,909–8,913 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,764 |
| `desire-range` | 9,882 |
| `hzn-range` | 10,232 |
| `pulse-range` | 9,833 |
| `sheet-marker-deficit` | 12,761 |
| `sheet-metric-gdp` | 12,649 |
| `sheet-metric-households` | 12,795 |
| `sheet-metric-power` | 12,728 |
| `sheet-metric-temp` | 12,599 |
| `sheet-metric-valuation` | 12,836 |
| `sheet-sign-activity` | 12,710 |
| `sheet-sign-desire` | 9,883 |
| `sheet-sign-horizon` | 10,233 |
| `sheet-sign-pulse` | 9,832 |
| `sheet-sign-volume` | 9,856 |
| `sheet-sign-yield` | 9,800 |
| `volume-range` | 9,857 |
| `ylm-range` | 9,928 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,770 |
| `desire-range` | 9,865 |
| `hzn-range` | 10,209 |
| `pulse-range` | 9,810 |
| `sheet-metric-gdp` | 12,650 |
| `sheet-metric-power` | 12,729 |
| `sheet-metric-temp` | 12,600 |
| `sheet-metric-valuation` | 12,837 |
| `volume-range` | 9,837 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,031 |
| `sheet-metric-gdp` | 6,032 |
| `sheet-sign-activity` | 6,033 |
| `sheet-metric-power` | 6,034 |
| `sheet-metric-valuation` | 6,036 |
| `sheet-metric-households` | 6,037 |
| `deficit-range` | 6,038 |
| `volume-range` | 6,039 |
| `pulse-range` | 6,040 |
| `hzn-range` | 6,041 |
| `ylm-range` | 6,052 |
| `desire-range` | 6,053 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 189 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 322 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 420 | yearly calendar — one card per year, grouped into five eras |
| 427 | season strip |
| 480 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels \u2026 so if one day |
| 639 | tab bar (app-style segmented navigation) |
| 693 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 721 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 944 | journal (editorial content tab) |
| 950 | content tab: reading companion |
| 1,008 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,500 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,534 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,544 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,555 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,588 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,764 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,930 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,395 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,443 | hero: yield curve |
| 2,539 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,618 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,717 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,742 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,757 | long cycle (structural layer) |
| 2,798 | indicator grid |
| 2,841 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,858 | info icon + popover (progressive disclosure for longer notes) |
| 2,879 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,974 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (146), which is what the renderers fill:

| Line | id |
|---|---|
| 3,006 | `topbar-back` |
| 3,009 | `topbar-title` |
| 3,010 | `menu-btn` |
| 3,027 | `main` |
| 3,034 | `cycle-view` |
| 3,042 | `cycle-kicker` |
| 3,048 | `cycle-dial` |
| 3,050 | `season-wheel-hub-date` |
| 3,051 | `season-wheel-hub-theme` |
| 3,052 | `season-wheel-hub-detail` |
| 3,060 | `temp-card` |
| 3,062 | `temp-kicker` |
| 3,063 | `temp-sub` |
| 3,066 | `temp-svg` |
| 3,067 | `temp-tooltip` |
| 3,073 | `temp-stats` |
| 3,080 | `growth-card` |
| 3,083 | `growth-kicker` |
| 3,083 | `growth-phase` |
| 3,083 | `growth-sub` |
| 3,083 | `growth-peers` |
| 3,084 | `growth-svg` |
| 3,084 | `growth-tooltip` |
| 3,089 | `growth-stats` |
| 3,098 | `today-analysis` |
| 3,102 | `peek-row` |
| 3,106 | `sheet-metric-temp` |
| 3,107 | `temp-timing` |
| 3,108 | `temp-chart` |
| 3,110 | `temp-rangebar` |
| 3,112 | `temp-head` |
| 3,113 | `slot-temp` |
| 3,114 | `temp-history` |
| 3,115 | `temp-hist-tooltip` |
| 3,118 | `temp-trend` |
| 3,121 | `temp-panel` |
| 3,123 | `temp-highlights` |
| 3,126 | `sheet-metric-gdp` |
| 3,127 | `gdp-timing` |
| 3,128 | `gdp-chart` |
| 3,129 | `gdp-rangebar` |
| 3,131 | `gdp-head` |
| 3,132 | `slot-growth` |
| 3,133 | `gdp-history` |
| 3,134 | `gdp-hist-tooltip` |
| 3,135 | `gdp-yoy` |
| 3,145 | `gdp-trend` |
| 3,147 | `gdp-panel` |
| 3,152 | `subj-ring-gdp` |
| 3,154 | `subj-label-gdp` |
| 3,155 | `subj-value-gdp` |
| 3,156 | `subj-say-gdp` |
| 3,157 | `subj-spark-gdp` |
| 3,162 | `subj-ctx-gdp` |
| 3,165 | `gdp-highlights` |
| 3,173 | `sheet-metric-power` |
| 3,174 | `power-timing` |
| 3,175 | `power-head` |
| 3,176 | `power-chart` |
| 3,180 | `subj-ring-resilience` |
| 3,183 | `subj-value-resilience` |
| 3,184 | `subj-say-resilience` |
| 3,189 | `subj-ctx-resilience` |
| 3,193 | `longcycle-title` |
| 3,195 | `longcycle-tag` |
| 3,209 | `power-highlights` |
| 3,216 | `sheet-marker-deficit` |
| 3,222 | `sheet-metric-households` |
| 3,223 | `households-timing` |
| 3,224 | `households-chart` |
| 3,225 | `households-highlights` |
| 3,229 | `sheet-metric-valuation` |
| 3,230 | `valuation-timing` |
| 3,231 | `valuation-head` |
| 3,232 | `valuation-chart` |
| 3,236 | `subj-ring-valuation` |
| 3,239 | `subj-value-valuation` |
| 3,240 | `subj-say-valuation` |
| 3,245 | `subj-ctx-valuation` |
| 3,249 | `valuation-title` |
| 3,251 | `valuation-tag` |
| 3,258 | `valuation-highlights` |
| 3,264 | `subj-ring-yield` |
| 3,267 | `subj-value-yield` |
| 3,268 | `subj-say-yield` |
| 3,269 | `subj-spark-yield` |
| 3,300 | `ylm-series` |
| 3,305 | `ylm-head` |
| 3,306 | `ylm-shell` |
| 3,307 | `ylm-svg` |
| 3,308 | `ylm-tooltip` |
| 3,311 | `ylm-trend` |
| 3,314 | `pressure-insights` |
| 3,315 | `pressure-highlights` |
| 3,341 | `subj-value-horizon` |
| 3,342 | `subj-say-horizon` |
| 3,343 | `subj-spark-horizon` |
| 3,353 | `hzn-timeline` |
| 3,355 | `hzn-head` |
| 3,356 | `spread-history-shell` |
| 3,357 | `spread-history-svg` |
| 3,358 | `spread-history-tooltip` |
| 3,361 | `hzn-trend` |
| 3,363 | `hzn-panel` |
| 3,365 | `horizon-insights` |
| 3,366 | `horizon-highlights` |
| 3,373 | `subj-ring-sentiment` |
| 3,376 | `subj-value-sentiment` |
| 3,377 | `subj-say-sentiment` |
| 3,378 | `subj-spark-sentiment` |
| 3,390 | `curve-gauge` |
| 3,391 | `curve-vix` |
| 3,392 | `curve-highlights` |
| 3,406 | `signs-list` |
| 3,417 | `calendar-list` |
| 3,422 | `indicators-peek` |
| 3,468 | `cycle-list` |
| 3,474 | `cycle-more` |
| 3,475 | `cycle-more-label` |
| 3,484 | `calendar-cycle` |
| 3,485 | `calendar-cycle-slot` |
| 3,536 | `seasons-kicker` |
| 3,537 | `seasons-rows` |
| 3,541 | `framework-kicker` |
| 3,543 | `framework-rows` |
| 3,550 | `more-menu` |
| 3,553 | `menu-back` |
| 3,567 | `sources-open` |
| 3,575 | `appearance-current` |
| 3,583 | `sheet-howto` |
| 3,627 | `sheet-book` |
| 3,659 | `sheet-appearance` |
| 3,667 | `theme-toggle` |
| 3,674 | `sheet-contact` |
| 3,683 | `contact-form` |
| 3,684 | `contact-title` |
| 3,685 | `contact-message` |
| 3,687 | `contact-hint` |
| 3,688 | `contact-send` |
| 3,697 | `sheet-sources` |
| 3,700 | `sources-back` |
| 3,707 | `asof-text` |
| 3,708 | `sources-groups` |
| 3,715 | `detail-backdrop` |
| 3,717 | `detail-modal-close` |
| 3,718 | `detail-modal-body` |

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

