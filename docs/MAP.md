# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,254 lines**, about 1192 KB, roughly **339 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `6a0254b` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,051 | the whole stylesheet, every token and rule |
| **Markup** | 3,052–3,798 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,799–14,201 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,202–14,254 | </body></html> |

Counts: **253** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,804_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,808 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,809 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,810 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,828 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,832 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,837_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,847 | `wheelMeta` | `var wheelMeta =` |
| 3,858 | `seasonOverride` | `var seasonOverride =` |
| 3,861 | `cycleNowNote` | `var cycleNowNote =` |
| 3,870 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,956 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,001 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,014_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,031 | `LIVE` | `function LIVE(` |
| 4,058 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,066 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,067 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,070_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,101 | `repaintFigureText` | `function repaintFigureText(` |
| 4,114 | `repaintRow` | `function repaintRow(` |
| 4,127 | `repaintTag` | `function repaintTag(` |
| 4,137 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,162 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,170 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,178 | `REPAINT` | `var REPAINT =` |
| 4,195 | `liveAsOf` | `var liveAsOf =` |
| 4,196 | `fmtAsOf` | `function fmtAsOf(` |
| 4,201 | `applyLive` | `function applyLive(` |
| 4,280 | `repaintPolicy` | `function repaintPolicy(` |
| 4,336 | `GYN` | `var GYN =` |
| 4,356 | `refreshLiveData` | `function refreshLiveData(` |
| 4,397 | `fetchSiteData` | `function fetchSiteData(` |
| 4,427 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,441_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,442 | `yieldCurve` | `var yieldCurve =` |
| 4,455 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,479 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,491 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,519_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,524 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,548 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,572 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,596 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,623 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,648_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,657 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,667 | `uninvLagToday` | `var uninvLagToday =` |
| 4,679 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,692 | `gdpPeers` | `var gdpPeers =` |
| 4,733 | `gdpSrc` | `var gdpSrc =` |
| 4,734 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,739 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,752 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,790_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,812 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,822_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,838 | `stressScoreFor` | `function stressScoreFor(` |
| 4,844 | `stressScore` | `var stressScore =` |
| 4,850 | `powerOf` | `var powerOf =` |
| 4,851 | `powerScore` | `var powerScore =` |
| 4,868 | `stressHistory` | `var stressHistory =` |
| 4,879 | `powerMeter` | `var powerMeter =` |
| 4,881 | `stressNoteFull` | `var stressNoteFull =` |
| 4,913 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,915_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,938 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,939 | `deficitHistory` | `var deficitHistory =` |
| 4,942 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,949 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,951 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 4,999 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,000 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,001 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,018_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,031 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,044_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,058 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,061 | `timelineSpan` | `function timelineSpan(` |
| 5,067 | `timelineFor` | `function timelineFor(` |
| 5,080 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,086_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,092 | `windowScale` | `function windowScale(` |
| 5,108 | `windowYears` | `function windowYears(` |
| 5,126 | `refName` | `function refName(` |
| 5,133 | `histReadEnsure` | `function histReadEnsure(` |
| 5,172 | `seatBandReading` | `function seatBandReading(` |
| 5,195 | `histReadFill` | `function histReadFill(` |
| 5,323 | `histAxisEnds` | `function histAxisEnds(` |
| 5,334 | `histLegend` | `function histLegend(` |
| 5,422 | `refitHistory` | `function refitHistory(` |
| 5,434 | `wireHistHover` | `function wireHistHover(` |
| 5,493 | `mWindowFrom` | `function mWindowFrom(` |
| 5,498 | `qWindowFrom` | `function qWindowFrom(` |
| 5,503 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,504 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,506 | `DEF_1983` | `var DEF_1983 =` |
| 5,508 | `defFrom` | `function defFrom(` |
| 5,519 | `deficitChart` | `function deficitChart(` |
| 5,609 | `deficitBlock` | `function deficitBlock(` |
| 5,671 | `buffettHistory` | `var buffettHistory =` |
| 5,701 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,702 | `hyDates` | `var hyDates =` |
| 5,703 | `hyOas` | `var hyOas =` |
| 5,704 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,711 | `hyAt` | `function hyAt(` |
| 5,715 | `hyLabel` | `function hyLabel(` |
| 5,716 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,717 | `hyNum` | `function hyNum(` |
| 5,718 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,728 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,738 | `capeHistory` | `var capeHistory =` |
| 5,740 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,758_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,764 | `sentiment` | `var sentiment =` |
| 5,782 | `valuation` | `var valuation =` |
| 5,819 | `valRow` | `function valRow(` |
| 5,827 | `coincident` | `var coincident =` |
| 5,888 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,906 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,907 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,908 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,910_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,923 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,924 | `m2vHistory` | `var m2vHistory =` |
| 5,944 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,037 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,127 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,128 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,168_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,174 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,175 | `DOTS` | `var DOTS =` |
| 6,177 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,205 | `histHead` | `function histHead(` |
| 6,226 | `headNoteIdx` | `var headNoteIdx =` |
| 6,227 | `headMenuHtml` | `function headMenuHtml(` |
| 6,272 | `headMenuFor` | `var headMenuFor =` |
| 6,274 | `headSubFor` | `var headSubFor =` |
| 6,275 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,319 | `nameWithMark` | `function nameWithMark(` |
| 6,325 | `panelRow` | `function panelRow(` |
| 6,351 | `panelFromMeter` | `function panelFromMeter(` |
| 6,365 | `meterFlagged` | `function meterFlagged(` |
| 6,376 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,404 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,418 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,437 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,456 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,470 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,495 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,526 | `desireBlock` | `function desireBlock(` |
| 6,553 | `volumeBlock` | `function volumeBlock(` |
| 6,578 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,601 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,609_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,622 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,623 | `m2Level` | `var m2Level =` |
| 6,645 | `m2Yoy` | `var m2Yoy =` |
| 6,646 | `M2_NORM` | `var M2_NORM =` |
| 6,651 | `volumeVerdict` | `function volumeVerdict(` |
| 6,688 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,689 | `unempHistory` | `var unempHistory =` |
| 6,695 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,710 | `NROU_NOW` | `var NROU_NOW =` |
| 6,711 | `unempState` | `function unempState(` |
| 6,717 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,781_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,790 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,799_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,812 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,825 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 6,881 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,936 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,937 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,940 | `qAtIndex` | `function qAtIndex(` |
| 6,941 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,949_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,964 | `householdsChart` | `function householdsChart(` |
| 7,032 | `lastChartAvg` | `var lastChartAvg =` |
| 7,033 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,118 | `GDP_NORM` | `var GDP_NORM =` |
| 7,124 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,125 | `gdpNowQ` | `var gdpNowQ =` |
| 7,126 | `gdpMeter` | `var gdpMeter =` |
| 7,129 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,151 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,217 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,281 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,289 | `velocityVerdict` | `function velocityVerdict(` |
| 7,297 | `derivePulseTag` | `function derivePulseTag(` |
| 7,303 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,363_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,372 | `seasonReading` | `var seasonReading =` |
| 7,421 | `frameworkRows` | `var frameworkRows =` |
| 7,431 | `vixRow` | `var vixRow =` |
| 7,439 | `vixWordOf` | `var vixWordOf =` |
| 7,443 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,458_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,462 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,471_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,472 | `calendarTodayY` | `var calendarTodayY =` |
| 7,503 | `vix3mClose` | `var vix3mClose =` |
| 7,504 | `fearCurve` | `function fearCurve(` |
| 7,511 | `curveVerdict` | `function curveVerdict(` |
| 7,518 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,523 | `valuationVerdict` | `function valuationVerdict(` |
| 7,541 | `sparkHtml` | `function sparkHtml(` |
| 7,560 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,566_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,579 | `modeBar` | `function modeBar(` |
| 7,594 | `pickerOpen` | `var pickerOpen =` |
| 7,598 | `cycleByName` | `function cycleByName(` |
| 7,602 | `openCycle` | `function openCycle(` |
| 7,608 | `cycleSlice` | `function cycleSlice(` |
| 7,617 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,625 | `cycleMonths` | `function cycleMonths(` |
| 7,644 | `histControls` | `function histControls(` |
| 7,658 | `cycLabel` | `function cycLabel(` |
| 7,674 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,683 | `cyclePicker` | `function cyclePicker(` |
| 7,702 | `rangeBar` | `function rangeBar(` |
| 7,714 | `trendOf` | `function trendOf(` |
| 7,759 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,769 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,790_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,791 | `yearOf` | `function yearOf(` |
| 7,792 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,793_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,823 | `totalStat` | `function totalStat(` |
| 7,829 | `atQuarter` | `function atQuarter(` |
| 7,830 | `atMonth` | `function atMonth(` |
| 7,831 | `cycleAverages` | `function cycleAverages(` |
| 7,838 | `ordinal` | `function ordinal(` |
| 7,839 | `hiCard` | `function hiCard(` |
| 7,850 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,864_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,871 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,887 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,894 | `moreRow` | `function moreRow(` |
| 7,900 | `powerPageNote` | `var powerPageNote =` |
| 7,901 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,907_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,910 | `xLabelOf` | `function xLabelOf(` |
| 7,930 | `fitGroup` | `function fitGroup(` |
| 7,952 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,011_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,035 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,045 | `vGrid` | `function vGrid(` |
| 8,070 | `COL_FILL` | `var COL_FILL =` |
| 8,103 | `colPath` | `function colPath(` |
| 8,108 | `colWidth` | `function colWidth(` |
| 8,155 | `AXIS` | `var AXIS =` |
| 8,156 | `chartAxes` | `function chartAxes(` |
| 8,216 | `divergeChart` | `function divergeChart(` |
| 8,284 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,313_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,321 | `maxIn` | `function maxIn(` |
| 8,339 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,353 | `PEEK_W` | `var PEEK_W =` |
| 8,356 | `PEEK_H` | `var PEEK_H =` |
| 8,361 | `colPeek` | `function colPeek(` |
| 8,388 | `meterPeek` | `function meterPeek(` |
| 8,405 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,410 | `pressureZone` | `function pressureZone(` |
| 8,425 | `HZN_BACK` | `var HZN_BACK =` |
| 8,426 | `hznLast` | `function hznLast(` |
| 8,427 | `hznBack` | `function hznBack(` |
| 8,428 | `horizonWord` | `function horizonWord(` |
| 8,453 | `HZN_METERS` | `var HZN_METERS =` |
| 8,461 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,502 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,507 | `RISK_RISK` | `var RISK_RISK =` |
| 8,512 | `riskCell` | `function riskCell(` |
| 8,513 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,544 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,569_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,590 | `pulseClipN` | `var pulseClipN =` |
| 8,591 | `beatPath` | `function beatPath(` |
| 8,616 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,630 | `pulsePeek` | `function pulsePeek(` |
| 8,638 | `pulseBlock` | `function pulseBlock(` |
| 8,658 | `CHEV` | `var CHEV =` |
| 8,660 | `peekCard` | `function peekCard(` |
| 8,714 | `dropSvg` | `function dropSvg(` |
| 8,726 | `volumeSvg` | `function volumeSvg(` |
| 8,733 | `gaugeSvg` | `function gaugeSvg(` |
| 8,737 | `diamondSvg` | `function diamondSvg(` |
| 8,751 | `energyFromReserve` | `function energyFromReserve(` |
| 8,763 | `sproutSvg` | `function sproutSvg(` |
| 8,774 | `markSvg` | `function markSvg(` |
| 8,783 | `pressureSvg` | `function pressureSvg(` |
| 8,787 | `hormoneSvg` | `function hormoneSvg(` |
| 8,793 | `flameSvg` | `function flameSvg(` |
| 8,797 | `gearSvg` | `function gearSvg(` |
| 8,809 | `thermoSvg` | `function thermoSvg(` |
| 8,828 | `trendUpSvg` | `function trendUpSvg(` |
| 8,830 | `ecgSvg` | `function ecgSvg(` |
| 8,844 | `circulationSvg` | `function circulationSvg(` |
| 8,845 | `weatherSvg` | `function weatherSvg(` |
| 8,866 | `moodSvg` | `function moodSvg(` |
| 8,890 | `boltSvg` | `function boltSvg(` |
| 8,893 | `houseSvg` | `function houseSvg(` |
| 8,901 | `sunriseSvg` | `function sunriseSvg(` |
| 8,916 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,927 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,944_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,965 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,966 | `dsrHistory` | `var dsrHistory =` |
| 8,967 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,968 | `savHistory` | `var savHistory =` |
| 8,973 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,983 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,984 | `dsrNow` | `var dsrNow =` |
| 8,985 | `savNow` | `var savNow =` |
| 8,986 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,991 | `householdsWord` | `function householdsWord(` |
| 8,998 | `householdsNow` | `var householdsNow =` |
| 9,005 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,006 | `dsrMeter` | `var dsrMeter =` |
| 9,009 | `savMeter` | `var savMeter =` |
| 9,012 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,029 | `savInfoHtml` | `function savInfoHtml(` |
| 9,047 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,056 | `curveNow` | `var curveNow =` |
| 9,057 | `curveTag` | `var curveTag =` |
| 9,058 | `curveSub` | `var curveSub =` |
| 9,062 | `curvePct` | `function curvePct(` |
| 9,063 | `curveNoteFull` | `var curveNoteFull =` |
| 9,078 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,086 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,127 | `marketCycles` | `var marketCycles =` |
| 9,157 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,159_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,180 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,181 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,186_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,207 | `slopeOf` | `function slopeOf(` |
| 9,218 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,224 | `readSeason` | `function readSeason(` |
| 9,249 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,251 | `qLabel` | `function qLabel(` |
| 9,275 | `regimeTrack` | `function regimeTrack(` |
| 9,298 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,300_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,307 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,308 | `seasonTitle` | `function seasonTitle(` |
| 9,309 | `monthLabel` | `function monthLabel(` |
| 9,310 | `cycleModel` | `function cycleModel(` |
| 9,362 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,370 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,377 | `nowModel` | `var nowModel =` |
| 9,378 | `readingNow` | `var readingNow =` |
| 9,379 | `cpiNow` | `var cpiNow =` |
| 9,380 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,381 | `currentSeason` | `var currentSeason =` |
| 9,382 | `seasonWhy` | `var seasonWhy =` |
| 9,399 | `seasonGroup` | `function seasonGroup(` |
| 9,413 | `arcGauge` | `function arcGauge(` |
| 9,455 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,468 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,475 | `tsyView` | `var tsyView =` |
| 9,477 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,479 | `spreadLabel` | `function spreadLabel(` |
| 9,486 | `policyFacts` | `function policyFacts(` |
| 9,498 | `allSources` | `var allSources =` |
| 9,522 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,555_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,558 | `SVG_NS` | `var SVG_NS =` |
| 9,559 | `svgEl` | `function svgEl(` |
| 9,572 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,608_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,609 | `clampPct` | `function clampPct(` |
| 9,616 | `infoIcon` | `function infoIcon(` |
| 9,625 | `detailTexts` | `var detailTexts =` |
| 9,643 | `detailSlots` | `var detailSlots =` |
| 9,644 | `detailSlot` | `function detailSlot(` |
| 9,655 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,659 | `_growthPanel` | `var _growthPanel =` |
| 9,660 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,666 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,677 | `facts` | `function facts(` |
| 9,678 | `factsFrom` | `function factsFrom(` |
| 9,682 | `expandBtn` | `function expandBtn(` |
| 9,688 | `sheetRenderers` | `var sheetRenderers =` |
| 9,705 | `pageMode` | `var pageMode =` |
| 9,712 | `pageCycles` | `var pageCycles =` |
| 9,717 | `pageRange` | `var pageRange =` |
| 9,723 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,757_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,768 | `meterHtml` | `function meterHtml(` |
| 9,796 | `srcHtml` | `function srcHtml(` |
| 9,805 | `TIMING` | `var TIMING =` |
| 9,811 | `timingMark` | `function timingMark(` |
| 9,825 | `timingPill` | `function timingPill(` |
| 9,846 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,854 | `seatPageFoot` | `function seatPageFoot(` |
| 9,877 | `timingMembers` | `var timingMembers =` |
| 9,878 | `registerTiming` | `function registerTiming(` |
| 9,884 | `headHtml` | `function headHtml(` |
| 9,902 | `heldHighlights` | `var heldHighlights =` |
| 9,903 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,961_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,962 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,395_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,396 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,619_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,620 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,652_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,658 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,743_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,744 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,762_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,765 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,788_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,800 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 10,891_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,900 | `lendingWord` | `function lendingWord(` |
| 10,908 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,968_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,969 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,089_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,092 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,214_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,226 | `totalRiseIn` | `function totalRiseIn(` |
| 11,236 | `eraInflation` | `function eraInflation(` |
| 11,247 | `eraGrowth` | `function eraGrowth(` |
| 11,263 | `fmtSigned` | `function fmtSigned(` |
| 11,268 | `regimeArrow` | `function regimeArrow(` |
| 11,274 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,275 | `growthShown` | `function growthShown(` |
| 11,276 | `growthShownCap` | `function growthShownCap(` |
| 11,277 | `regimeState` | `function regimeState(` |
| 11,281 | `phaseClass` | `function phaseClass(` |
| 11,283 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,295 | `cycleViewEl` | `var cycleViewEl =` |
| 11,299 | `tempCard` | `var tempCard =` |
| 11,300 | `placeCharts` | `function placeCharts(` |
| 11,305 | `shownEra` | `var shownEra =` |
| 11,306 | `calendarReset` | `var calendarReset =` |
| 11,307 | `metricPageReset` | `var metricPageReset =` |
| 11,308 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,311 | `topbarBack` | `var topbarBack =` |
| 11,312 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,319_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,320 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,481_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,482 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,500_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,503 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,524_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,530 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,533 | `hubSet` | `function hubSet(` |
| 11,546 | `quarterPopup` | `function quarterPopup(` |
| 11,579 | `hubShowDefault` | `function hubShowDefault(` |
| 11,588 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,594 | `hubShowYear` | `function hubShowYear(` |
| 11,609 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,701_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,704 | `tempState` | `var tempState =` |
| 11,707 | `chartLink` | `var chartLink =` |
| 11,727 | `m2Step` | `function m2Step(` |
| 11,730 | `heatStep` | `function heatStep(` |
| 11,734 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,921_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,924 | `drawGrowth` | `function drawGrowth(` |
| 12,063 | `wireResize` | `function wireResize(` |
| 12,069 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,081_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,082 | `renderCycleView` | `function renderCycleView(` |
| 12,135 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 12,146 | `PEER_CARET` | `var PEER_CARET =` |
| 12,147 | `peerList` | `function peerList(` |
| 12,148 | `peerChosen` | `function peerChosen(` |
| 12,149 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 12,153 | `renderPeerPills` | `function renderPeerPills(` |
| 12,203 | `shownEraModel` | `var shownEraModel =` |
| 12,204 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,206_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,208 | `stripGroupName` | `var stripGroupName =` |
| 12,209 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,255 | `marketStripHtml` | `function marketStripHtml(` |
| 12,318 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,319 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,349_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,350 | `renderCycleList` | `function renderCycleList(` |
| 12,440 | `renderSignsList` | `function renderSignsList(` |
| 12,725 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,000_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,001 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,063_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,064 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,097_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,098 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,027–4,030 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,434–8,447 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,258–9,271 | `seasonTrackAll` | The season, computed |
| 9,293–9,297 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,461 |
| `desire-range` | 10,284 |
| `fear-range` | 11,058 |
| `hormones-range` | 10,835 |
| `hzn-range` | 10,388 |
| `hzn-spread` | 10,382 |
| `pressure-range` | 10,935 |
| `pulse-range` | 10,235 |
| `sheet-marker-deficit` | 13,458 |
| `sheet-metric-gdp` | 13,342 |
| `sheet-metric-households` | 13,492 |
| `sheet-metric-power` | 13,421 |
| `sheet-metric-temp` | 13,292 |
| `sheet-metric-valuation` | 13,534 |
| `sheet-sign-activity` | 13,403 |
| `sheet-sign-desire` | 10,285 |
| `sheet-sign-horizon` | 10,389 |
| `sheet-sign-hormones` | 10,838 |
| `sheet-sign-pressure` | 10,936 |
| `sheet-sign-pulse` | 10,234 |
| `sheet-sign-sentiment` | 11,063 |
| `sheet-sign-volume` | 10,258 |
| `volume-range` | 10,259 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,467 |
| `desire-range` | 10,267 |
| `fear-range` | 11,015 |
| `hzn-range` | 10,313 |
| `pulse-range` | 10,212 |
| `sheet-metric-gdp` | 13,343 |
| `sheet-metric-power` | 13,422 |
| `sheet-metric-temp` | 13,293 |
| `sheet-metric-valuation` | 13,535 |
| `volume-range` | 10,239 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,178 |
| `sheet-metric-gdp` | 6,179 |
| `sheet-sign-activity` | 6,186 |
| `sheet-metric-power` | 6,187 |
| `sheet-metric-valuation` | 6,189 |
| `sheet-metric-households` | 6,190 |
| `deficit-range` | 6,191 |
| `volume-range` | 6,192 |
| `pulse-range` | 6,193 |
| `hzn-range` | 6,199 |
| `desire-range` | 6,200 |
| `fear-range` | 6,201 |
| `hormones-range` | 6,202 |
| `pressure-range` | 6,203 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 189 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 322 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 420 | yearly calendar — one card per year, grouped into five eras |
| 427 | season strip |
| 480 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels \u2026 so if one day |
| 644 | tab bar (app-style segmented navigation) |
| 711 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 750 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 966 | journal (editorial content tab) |
| 972 | content tab: reading companion |
| 1,030 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,502 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,536 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,546 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,557 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,590 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,770 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,947 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,446 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,494 | hero: yield curve |
| 2,590 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,669 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,768 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,793 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,808 | long cycle (structural layer) |
| 2,849 | indicator grid |
| 2,892 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,909 | info icon + popover (progressive disclosure for longer notes) |
| 2,930 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,025 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (143), which is what the renderers fill:

| Line | id |
|---|---|
| 3,057 | `topbar-back` |
| 3,060 | `topbar-title` |
| 3,061 | `menu-btn` |
| 3,078 | `main` |
| 3,085 | `cycle-view` |
| 3,093 | `cycle-kicker` |
| 3,099 | `cycle-dial` |
| 3,101 | `season-wheel-hub-date` |
| 3,102 | `season-wheel-hub-theme` |
| 3,103 | `season-wheel-hub-detail` |
| 3,111 | `temp-card` |
| 3,113 | `temp-kicker` |
| 3,114 | `temp-sub` |
| 3,117 | `temp-svg` |
| 3,118 | `temp-tooltip` |
| 3,124 | `temp-stats` |
| 3,131 | `growth-card` |
| 3,134 | `growth-kicker` |
| 3,134 | `growth-phase` |
| 3,134 | `growth-sub` |
| 3,134 | `growth-peers` |
| 3,135 | `growth-svg` |
| 3,135 | `growth-tooltip` |
| 3,140 | `growth-stats` |
| 3,149 | `today-analysis` |
| 3,153 | `peek-row` |
| 3,157 | `sheet-metric-temp` |
| 3,158 | `temp-timing` |
| 3,159 | `temp-chart` |
| 3,161 | `temp-rangebar` |
| 3,163 | `temp-head` |
| 3,164 | `slot-temp` |
| 3,165 | `temp-history` |
| 3,166 | `temp-hist-tooltip` |
| 3,169 | `temp-trend` |
| 3,173 | `temp-highlights` |
| 3,176 | `sheet-metric-gdp` |
| 3,177 | `gdp-timing` |
| 3,178 | `gdp-chart` |
| 3,179 | `gdp-rangebar` |
| 3,181 | `gdp-head` |
| 3,182 | `slot-growth` |
| 3,183 | `gdp-history` |
| 3,184 | `gdp-hist-tooltip` |
| 3,185 | `gdp-yoy` |
| 3,195 | `gdp-trend` |
| 3,197 | `gdp-panel` |
| 3,202 | `subj-ring-gdp` |
| 3,204 | `subj-label-gdp` |
| 3,205 | `subj-value-gdp` |
| 3,206 | `subj-say-gdp` |
| 3,207 | `subj-spark-gdp` |
| 3,212 | `subj-ctx-gdp` |
| 3,215 | `gdp-highlights` |
| 3,223 | `sheet-metric-power` |
| 3,224 | `power-timing` |
| 3,225 | `power-head` |
| 3,226 | `power-chart` |
| 3,230 | `subj-ring-resilience` |
| 3,233 | `subj-value-resilience` |
| 3,234 | `subj-say-resilience` |
| 3,239 | `subj-ctx-resilience` |
| 3,243 | `longcycle-title` |
| 3,245 | `longcycle-tag` |
| 3,259 | `power-highlights` |
| 3,266 | `sheet-marker-deficit` |
| 3,272 | `sheet-metric-households` |
| 3,273 | `households-timing` |
| 3,274 | `households-chart` |
| 3,275 | `households-highlights` |
| 3,279 | `sheet-metric-valuation` |
| 3,280 | `valuation-timing` |
| 3,281 | `valuation-head` |
| 3,282 | `valuation-chart` |
| 3,286 | `subj-ring-valuation` |
| 3,289 | `subj-value-valuation` |
| 3,290 | `subj-say-valuation` |
| 3,295 | `subj-ctx-valuation` |
| 3,299 | `valuation-title` |
| 3,301 | `valuation-tag` |
| 3,308 | `valuation-highlights` |
| 3,332 | `subj-value-hormones` |
| 3,333 | `subj-say-hormones` |
| 3,341 | `hormones-history` |
| 3,351 | `hormones-highlights` |
| 3,377 | `subj-value-horizon` |
| 3,378 | `subj-say-horizon` |
| 3,379 | `subj-spark-horizon` |
| 3,389 | `hzn-timeline` |
| 3,391 | `hzn-head` |
| 3,392 | `spread-history-shell` |
| 3,393 | `spread-history-svg` |
| 3,394 | `spread-history-tooltip` |
| 3,399 | `ylm-shell` |
| 3,400 | `ylm-svg` |
| 3,401 | `ylm-tooltip` |
| 3,404 | `hzn-trend` |
| 3,405 | `ylm-trend` |
| 3,407 | `horizon-insights` |
| 3,408 | `horizon-highlights` |
| 3,434 | `subj-value-pressure` |
| 3,435 | `subj-say-pressure` |
| 3,440 | `pressure-history` |
| 3,441 | `pressure-highlights` |
| 3,447 | `subj-ring-sentiment` |
| 3,450 | `subj-value-sentiment` |
| 3,451 | `subj-say-sentiment` |
| 3,452 | `subj-spark-sentiment` |
| 3,466 | `fear-history` |
| 3,467 | `curve-highlights` |
| 3,481 | `signs-list` |
| 3,492 | `calendar-list` |
| 3,497 | `indicators-peek` |
| 3,543 | `cycle-list` |
| 3,549 | `cycle-more` |
| 3,550 | `cycle-more-label` |
| 3,559 | `calendar-cycle` |
| 3,560 | `calendar-cycle-slot` |
| 3,611 | `seasons-kicker` |
| 3,612 | `seasons-rows` |
| 3,616 | `framework-kicker` |
| 3,618 | `framework-rows` |
| 3,625 | `more-menu` |
| 3,628 | `menu-back` |
| 3,642 | `sources-open` |
| 3,650 | `appearance-current` |
| 3,658 | `sheet-howto` |
| 3,702 | `sheet-book` |
| 3,734 | `sheet-appearance` |
| 3,742 | `theme-toggle` |
| 3,749 | `sheet-contact` |
| 3,758 | `contact-form` |
| 3,759 | `contact-title` |
| 3,760 | `contact-message` |
| 3,762 | `contact-hint` |
| 3,763 | `contact-send` |
| 3,772 | `sheet-sources` |
| 3,775 | `sources-back` |
| 3,782 | `asof-text` |
| 3,783 | `sources-groups` |
| 3,790 | `detail-backdrop` |
| 3,792 | `detail-modal-close` |
| 3,793 | `detail-modal-body` |

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

