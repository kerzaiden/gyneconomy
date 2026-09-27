# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,667 lines**, about 1119 KB, roughly **318 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `01c30d2` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,040 | the whole stylesheet, every token and rule |
| **Markup** | 3,041–3,762 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,763–13,614 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,615–13,667 | </body></html> |

Counts: **248** top-level functions, **177** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,768_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,772 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,773 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,774 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,792 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,796 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,801_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,811 | `wheelMeta` | `var wheelMeta =` |
| 3,822 | `seasonOverride` | `var seasonOverride =` |
| 3,825 | `cycleNowNote` | `var cycleNowNote =` |
| 3,834 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,920 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,965 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,978_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,995 | `LIVE` | `function LIVE(` |
| 4,022 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,030 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,031 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,034_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,065 | `repaintFigureText` | `function repaintFigureText(` |
| 4,073 | `repaintTag` | `function repaintTag(` |
| 4,083 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,108 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,116 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,124 | `REPAINT` | `var REPAINT =` |
| 4,141 | `liveAsOf` | `var liveAsOf =` |
| 4,142 | `fmtAsOf` | `function fmtAsOf(` |
| 4,147 | `applyLive` | `function applyLive(` |
| 4,223 | `repaintPolicy` | `function repaintPolicy(` |
| 4,273 | `GYN` | `var GYN =` |
| 4,293 | `refreshLiveData` | `function refreshLiveData(` |
| 4,334 | `fetchSiteData` | `function fetchSiteData(` |
| 4,364 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,378_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,379 | `yieldCurve` | `var yieldCurve =` |
| 4,392 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,416 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,428 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,456_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,461 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,485 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,509 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,533 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,560 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,585_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,594 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,604 | `uninvLagToday` | `var uninvLagToday =` |
| 4,616 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,629 | `gdpPeers` | `var gdpPeers =` |
| 4,670 | `gdpSrc` | `var gdpSrc =` |
| 4,671 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,676 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,689 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,727_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,749 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,759_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,775 | `stressScoreFor` | `function stressScoreFor(` |
| 4,781 | `stressScore` | `var stressScore =` |
| 4,787 | `powerOf` | `var powerOf =` |
| 4,788 | `powerScore` | `var powerScore =` |
| 4,805 | `stressHistory` | `var stressHistory =` |
| 4,816 | `powerMeter` | `var powerMeter =` |
| 4,818 | `stressNoteFull` | `var stressNoteFull =` |
| 4,850 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,852_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,875 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,876 | `deficitHistory` | `var deficitHistory =` |
| 4,879 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,886 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,888 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,931_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,944 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,957_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,971 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,974 | `timelineSpan` | `function timelineSpan(` |
| 4,980 | `timelineFor` | `function timelineFor(` |
| 4,993 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,999_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,005 | `windowScale` | `function windowScale(` |
| 5,021 | `windowYears` | `function windowYears(` |
| 5,039 | `refName` | `function refName(` |
| 5,046 | `histReadEnsure` | `function histReadEnsure(` |
| 5,085 | `seatBandReading` | `function seatBandReading(` |
| 5,108 | `histReadFill` | `function histReadFill(` |
| 5,236 | `histAxisEnds` | `function histAxisEnds(` |
| 5,247 | `histLegend` | `function histLegend(` |
| 5,335 | `refitHistory` | `function refitHistory(` |
| 5,347 | `wireHistHover` | `function wireHistHover(` |
| 5,406 | `mWindowFrom` | `function mWindowFrom(` |
| 5,411 | `qWindowFrom` | `function qWindowFrom(` |
| 5,416 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,417 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,419 | `DEF_1983` | `var DEF_1983 =` |
| 5,421 | `defFrom` | `function defFrom(` |
| 5,432 | `deficitChart` | `function deficitChart(` |
| 5,522 | `deficitBlock` | `function deficitBlock(` |
| 5,584 | `buffettHistory` | `var buffettHistory =` |
| 5,614 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,615 | `hyDates` | `var hyDates =` |
| 5,616 | `hyOas` | `var hyOas =` |
| 5,617 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,624 | `hyAt` | `function hyAt(` |
| 5,628 | `hyLabel` | `function hyLabel(` |
| 5,629 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,630 | `hyNum` | `function hyNum(` |
| 5,631 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,641 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,651 | `capeHistory` | `var capeHistory =` |
| 5,653 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,671_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,677 | `sentiment` | `var sentiment =` |
| 5,695 | `valuation` | `var valuation =` |
| 5,732 | `valRow` | `function valRow(` |
| 5,740 | `coincident` | `var coincident =` |
| 5,801 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,819 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,820 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,821 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,823_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,836 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,837 | `m2vHistory` | `var m2vHistory =` |
| 5,857 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,950 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,040 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,041 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,081_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,087 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,088 | `DOTS` | `var DOTS =` |
| 6,090 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,115 | `histHead` | `function histHead(` |
| 6,136 | `headNoteIdx` | `var headNoteIdx =` |
| 6,137 | `headMenuHtml` | `function headMenuHtml(` |
| 6,157 | `headMenuFor` | `var headMenuFor =` |
| 6,158 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,184 | `nameWithMark` | `function nameWithMark(` |
| 6,190 | `panelRow` | `function panelRow(` |
| 6,216 | `panelFromMeter` | `function panelFromMeter(` |
| 6,230 | `meterFlagged` | `function meterFlagged(` |
| 6,241 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,269 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,283 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,302 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,321 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,335 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,360 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,391 | `desireBlock` | `function desireBlock(` |
| 6,418 | `volumeBlock` | `function volumeBlock(` |
| 6,443 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,466 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,474_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,487 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,488 | `m2Level` | `var m2Level =` |
| 6,510 | `m2Yoy` | `var m2Yoy =` |
| 6,511 | `M2_NORM` | `var M2_NORM =` |
| 6,516 | `volumeVerdict` | `function volumeVerdict(` |
| 6,553 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,554 | `unempHistory` | `var unempHistory =` |
| 6,560 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,575 | `NROU_NOW` | `var NROU_NOW =` |
| 6,576 | `unempState` | `function unempState(` |
| 6,582 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,647 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,648 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,651 | `qAtIndex` | `function qAtIndex(` |
| 6,652 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,660_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,675 | `householdsChart` | `function householdsChart(` |
| 6,743 | `lastChartAvg` | `var lastChartAvg =` |
| 6,744 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,829 | `GDP_NORM` | `var GDP_NORM =` |
| 6,835 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,836 | `gdpNowQ` | `var gdpNowQ =` |
| 6,837 | `gdpMeter` | `var gdpMeter =` |
| 6,840 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,862 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,928 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,992 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,000 | `velocityVerdict` | `function velocityVerdict(` |
| 7,008 | `derivePulseTag` | `function derivePulseTag(` |
| 7,014 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,074_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,083 | `seasonReading` | `var seasonReading =` |
| 7,132 | `frameworkRows` | `var frameworkRows =` |
| 7,142 | `vixRow` | `var vixRow =` |
| 7,150 | `vixWordOf` | `var vixWordOf =` |
| 7,154 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,169_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,173 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,182_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,183 | `calendarTodayY` | `var calendarTodayY =` |
| 7,214 | `vix3mClose` | `var vix3mClose =` |
| 7,215 | `fearCurve` | `function fearCurve(` |
| 7,222 | `curveVerdict` | `function curveVerdict(` |
| 7,229 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,234 | `valuationVerdict` | `function valuationVerdict(` |
| 7,252 | `sparkHtml` | `function sparkHtml(` |
| 7,271 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,277_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,290 | `modeBar` | `function modeBar(` |
| 7,305 | `pickerOpen` | `var pickerOpen =` |
| 7,309 | `cycleByName` | `function cycleByName(` |
| 7,313 | `openCycle` | `function openCycle(` |
| 7,319 | `cycleSlice` | `function cycleSlice(` |
| 7,328 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,336 | `cycleMonths` | `function cycleMonths(` |
| 7,355 | `histControls` | `function histControls(` |
| 7,369 | `cycLabel` | `function cycLabel(` |
| 7,385 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,394 | `cyclePicker` | `function cyclePicker(` |
| 7,418 | `seriesBar` | `function seriesBar(` |
| 7,425 | `rangeBar` | `function rangeBar(` |
| 7,437 | `trendOf` | `function trendOf(` |
| 7,482 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,492 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,513_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,514 | `yearOf` | `function yearOf(` |
| 7,515 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,516_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,546 | `totalStat` | `function totalStat(` |
| 7,552 | `atQuarter` | `function atQuarter(` |
| 7,553 | `atMonth` | `function atMonth(` |
| 7,554 | `cycleAverages` | `function cycleAverages(` |
| 7,561 | `ordinal` | `function ordinal(` |
| 7,562 | `hiCard` | `function hiCard(` |
| 7,573 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,587_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,594 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,610 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,617 | `moreRow` | `function moreRow(` |
| 7,623 | `powerPageNote` | `var powerPageNote =` |
| 7,624 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,630_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,633 | `xLabelOf` | `function xLabelOf(` |
| 7,653 | `fitGroup` | `function fitGroup(` |
| 7,675 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,734_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,758 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,768 | `vGrid` | `function vGrid(` |
| 7,793 | `COL_FILL` | `var COL_FILL =` |
| 7,826 | `colPath` | `function colPath(` |
| 7,831 | `colWidth` | `function colWidth(` |
| 7,878 | `AXIS` | `var AXIS =` |
| 7,879 | `chartAxes` | `function chartAxes(` |
| 7,933 | `divergeChart` | `function divergeChart(` |
| 7,994 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,023_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,031 | `maxIn` | `function maxIn(` |
| 8,044 | `reserveGauge` | `function reserveGauge(` |
| 8,065 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,079 | `PEEK_W` | `var PEEK_W =` |
| 8,082 | `PEEK_H` | `var PEEK_H =` |
| 8,083 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 8,088 | `colPeek` | `function colPeek(` |
| 8,115 | `meterPeek` | `function meterPeek(` |
| 8,132 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,137 | `pressureZone` | `function pressureZone(` |
| 8,152 | `HZN_BACK` | `var HZN_BACK =` |
| 8,153 | `hznLast` | `function hznLast(` |
| 8,154 | `hznBack` | `function hznBack(` |
| 8,155 | `horizonWord` | `function horizonWord(` |
| 8,180 | `HZN_METERS` | `var HZN_METERS =` |
| 8,188 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,212 | `_hznPanel` | `var _hznPanel =` |
| 8,213 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,233 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,234 | `levelZone` | `function levelZone(` |
| 8,246 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,251 | `RISK_RISK` | `var RISK_RISK =` |
| 8,256 | `riskCell` | `function riskCell(` |
| 8,257 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,288 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,313_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,332 | `pulseClipN` | `var pulseClipN =` |
| 8,333 | `beatPath` | `function beatPath(` |
| 8,358 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,372 | `pulsePeek` | `function pulsePeek(` |
| 8,380 | `pulseBlock` | `function pulseBlock(` |
| 8,400 | `CHEV` | `var CHEV =` |
| 8,402 | `peekCard` | `function peekCard(` |
| 8,453 | `dropSvg` | `function dropSvg(` |
| 8,461 | `speakerSvg` | `function speakerSvg(` |
| 8,469 | `gaugeSvg` | `function gaugeSvg(` |
| 8,473 | `diamondSvg` | `function diamondSvg(` |
| 8,485 | `energyFromReserve` | `function energyFromReserve(` |
| 8,497 | `sproutSvg` | `function sproutSvg(` |
| 8,508 | `markSvg` | `function markSvg(` |
| 8,512 | `flameSvg` | `function flameSvg(` |
| 8,516 | `gearSvg` | `function gearSvg(` |
| 8,529 | `pulseSvg` | `function pulseSvg(` |
| 8,533 | `thermoSvg` | `function thermoSvg(` |
| 8,552 | `trendUpSvg` | `function trendUpSvg(` |
| 8,554 | `ecgSvg` | `function ecgSvg(` |
| 8,568 | `circulationSvg` | `function circulationSvg(` |
| 8,569 | `weatherSvg` | `function weatherSvg(` |
| 8,590 | `moodSvg` | `function moodSvg(` |
| 8,607 | `boltSvg` | `function boltSvg(` |
| 8,610 | `houseSvg` | `function houseSvg(` |
| 8,618 | `sunriseSvg` | `function sunriseSvg(` |
| 8,628 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,640 | `signMarks` | `var signMarks =` |
| 8,647 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,664_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,685 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,686 | `dsrHistory` | `var dsrHistory =` |
| 8,687 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,688 | `savHistory` | `var savHistory =` |
| 8,693 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,703 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,704 | `dsrNow` | `var dsrNow =` |
| 8,705 | `savNow` | `var savNow =` |
| 8,706 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,711 | `householdsWord` | `function householdsWord(` |
| 8,718 | `householdsNow` | `var householdsNow =` |
| 8,725 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,726 | `dsrMeter` | `var dsrMeter =` |
| 8,729 | `savMeter` | `var savMeter =` |
| 8,732 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,749 | `savInfoHtml` | `function savInfoHtml(` |
| 8,767 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,776 | `curveNow` | `var curveNow =` |
| 8,777 | `curveTag` | `var curveTag =` |
| 8,778 | `curveSub` | `var curveSub =` |
| 8,782 | `curvePct` | `function curvePct(` |
| 8,783 | `curveNoteFull` | `var curveNoteFull =` |
| 8,798 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,806 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,847 | `marketCycles` | `var marketCycles =` |
| 8,877 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,879_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,900 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,901 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,906_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,927 | `slopeOf` | `function slopeOf(` |
| 8,938 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,944 | `readSeason` | `function readSeason(` |
| 8,969 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,971 | `qLabel` | `function qLabel(` |
| 8,995 | `regimeTrack` | `function regimeTrack(` |
| 9,018 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,020_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,027 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,028 | `seasonTitle` | `function seasonTitle(` |
| 9,029 | `monthLabel` | `function monthLabel(` |
| 9,030 | `cycleModel` | `function cycleModel(` |
| 9,082 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,090 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,097 | `nowModel` | `var nowModel =` |
| 9,098 | `readingNow` | `var readingNow =` |
| 9,099 | `cpiNow` | `var cpiNow =` |
| 9,100 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,101 | `currentSeason` | `var currentSeason =` |
| 9,102 | `seasonWhy` | `var seasonWhy =` |
| 9,119 | `seasonGroup` | `function seasonGroup(` |
| 9,133 | `arcGauge` | `function arcGauge(` |
| 9,172 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,185 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,187 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,191 | `policyFacts` | `function policyFacts(` |
| 9,203 | `allSources` | `var allSources =` |
| 9,227 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,260_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,263 | `SVG_NS` | `var SVG_NS =` |
| 9,264 | `svgEl` | `function svgEl(` |
| 9,277 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,313_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,314 | `clampPct` | `function clampPct(` |
| 9,321 | `infoIcon` | `function infoIcon(` |
| 9,330 | `detailTexts` | `var detailTexts =` |
| 9,348 | `detailSlots` | `var detailSlots =` |
| 9,349 | `detailSlot` | `function detailSlot(` |
| 9,360 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,364 | `_growthPanel` | `var _growthPanel =` |
| 9,365 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,371 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,382 | `facts` | `function facts(` |
| 9,383 | `factsFrom` | `function factsFrom(` |
| 9,387 | `expandBtn` | `function expandBtn(` |
| 9,393 | `sheetRenderers` | `var sheetRenderers =` |
| 9,410 | `pageMode` | `var pageMode =` |
| 9,417 | `pageCycles` | `var pageCycles =` |
| 9,422 | `pageRange` | `var pageRange =` |
| 9,428 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,462_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,473 | `meterHtml` | `function meterHtml(` |
| 9,501 | `srcHtml` | `function srcHtml(` |
| 9,510 | `TIMING` | `var TIMING =` |
| 9,516 | `timingMark` | `function timingMark(` |
| 9,530 | `timingPill` | `function timingPill(` |
| 9,551 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,559 | `seatPageFoot` | `function seatPageFoot(` |
| 9,582 | `timingMembers` | `var timingMembers =` |
| 9,583 | `registerTiming` | `function registerTiming(` |
| 9,589 | `headHtml` | `function headHtml(` |
| 9,607 | `heldHighlights` | `var heldHighlights =` |
| 9,608 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,666_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,667 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,040_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,041 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,264_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,265 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,297_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,303 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,387_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,388 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,406_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,409 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,432_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,433 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,484_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,487 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,680_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,692 | `totalRiseIn` | `function totalRiseIn(` |
| 10,702 | `eraInflation` | `function eraInflation(` |
| 10,713 | `eraGrowth` | `function eraGrowth(` |
| 10,729 | `fmtSigned` | `function fmtSigned(` |
| 10,734 | `regimeArrow` | `function regimeArrow(` |
| 10,740 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,741 | `growthShown` | `function growthShown(` |
| 10,742 | `growthShownCap` | `function growthShownCap(` |
| 10,743 | `regimeState` | `function regimeState(` |
| 10,747 | `phaseClass` | `function phaseClass(` |
| 10,749 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,761 | `cycleViewEl` | `var cycleViewEl =` |
| 10,765 | `tempCard` | `var tempCard =` |
| 10,766 | `placeCharts` | `function placeCharts(` |
| 10,771 | `shownEra` | `var shownEra =` |
| 10,772 | `calendarReset` | `var calendarReset =` |
| 10,773 | `metricPageReset` | `var metricPageReset =` |
| 10,774 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,777 | `topbarBack` | `var topbarBack =` |
| 10,778 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,785_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,786 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,947_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,948 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,966_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,969 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,990_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,996 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,999 | `hubSet` | `function hubSet(` |
| 11,012 | `quarterPopup` | `function quarterPopup(` |
| 11,045 | `hubShowDefault` | `function hubShowDefault(` |
| 11,054 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,060 | `hubShowYear` | `function hubShowYear(` |
| 11,075 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,167_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,170 | `tempState` | `var tempState =` |
| 11,173 | `chartLink` | `var chartLink =` |
| 11,193 | `m2Step` | `function m2Step(` |
| 11,196 | `heatStep` | `function heatStep(` |
| 11,200 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,387_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,390 | `drawGrowth` | `function drawGrowth(` |
| 11,529 | `wireResize` | `function wireResize(` |
| 11,535 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,547_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,548 | `renderCycleView` | `function renderCycleView(` |
| 11,601 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,612 | `PEER_CARET` | `var PEER_CARET =` |
| 11,613 | `peerList` | `function peerList(` |
| 11,614 | `peerChosen` | `function peerChosen(` |
| 11,615 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,619 | `renderPeerPills` | `function renderPeerPills(` |
| 11,669 | `shownEraModel` | `var shownEraModel =` |
| 11,670 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,672_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,674 | `stripGroupName` | `var stripGroupName =` |
| 11,675 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,721 | `marketStripHtml` | `function marketStripHtml(` |
| 11,784 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,785 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,815_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,816 | `renderCycleList` | `function renderCycleList(` |
| 11,906 | `renderSignsList` | `function renderSignsList(` |
| 12,168 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,413_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,414 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,476_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,477 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,510_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,511 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,991–3,994 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,161–8,174 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,978–8,991 | `seasonTrackAll` | The season, computed |
| 9,013–9,017 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,878 |
| `desire-range` | 9,986 |
| `hzn-range` | 10,336 |
| `pulse-range` | 9,937 |
| `sheet-marker-deficit` | 12,875 |
| `sheet-metric-gdp` | 12,759 |
| `sheet-metric-households` | 12,909 |
| `sheet-metric-power` | 12,838 |
| `sheet-metric-temp` | 12,709 |
| `sheet-metric-valuation` | 12,951 |
| `sheet-sign-activity` | 12,820 |
| `sheet-sign-desire` | 9,987 |
| `sheet-sign-horizon` | 10,337 |
| `sheet-sign-pulse` | 9,936 |
| `sheet-sign-volume` | 9,960 |
| `sheet-sign-yield` | 9,904 |
| `volume-range` | 9,961 |
| `ylm-range` | 10,032 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,884 |
| `desire-range` | 9,969 |
| `hzn-range` | 10,313 |
| `pulse-range` | 9,914 |
| `sheet-metric-gdp` | 12,760 |
| `sheet-metric-power` | 12,839 |
| `sheet-metric-temp` | 12,710 |
| `sheet-metric-valuation` | 12,952 |
| `volume-range` | 9,941 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,091 |
| `sheet-metric-gdp` | 6,092 |
| `sheet-sign-activity` | 6,093 |
| `sheet-metric-power` | 6,094 |
| `sheet-metric-valuation` | 6,096 |
| `sheet-metric-households` | 6,097 |
| `deficit-range` | 6,098 |
| `volume-range` | 6,099 |
| `pulse-range` | 6,100 |
| `hzn-range` | 6,101 |
| `ylm-range` | 6,112 |
| `desire-range` | 6,113 |

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
| 1,946 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,435 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,483 | hero: yield curve |
| 2,579 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,658 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,757 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,782 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,797 | long cycle (structural layer) |
| 2,838 | indicator grid |
| 2,881 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,898 | info icon + popover (progressive disclosure for longer notes) |
| 2,919 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,014 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (145), which is what the renderers fill:

| Line | id |
|---|---|
| 3,046 | `topbar-back` |
| 3,049 | `topbar-title` |
| 3,050 | `menu-btn` |
| 3,067 | `main` |
| 3,074 | `cycle-view` |
| 3,082 | `cycle-kicker` |
| 3,088 | `cycle-dial` |
| 3,090 | `season-wheel-hub-date` |
| 3,091 | `season-wheel-hub-theme` |
| 3,092 | `season-wheel-hub-detail` |
| 3,100 | `temp-card` |
| 3,102 | `temp-kicker` |
| 3,103 | `temp-sub` |
| 3,106 | `temp-svg` |
| 3,107 | `temp-tooltip` |
| 3,113 | `temp-stats` |
| 3,120 | `growth-card` |
| 3,123 | `growth-kicker` |
| 3,123 | `growth-phase` |
| 3,123 | `growth-sub` |
| 3,123 | `growth-peers` |
| 3,124 | `growth-svg` |
| 3,124 | `growth-tooltip` |
| 3,129 | `growth-stats` |
| 3,138 | `today-analysis` |
| 3,142 | `peek-row` |
| 3,146 | `sheet-metric-temp` |
| 3,147 | `temp-timing` |
| 3,148 | `temp-chart` |
| 3,150 | `temp-rangebar` |
| 3,152 | `temp-head` |
| 3,153 | `slot-temp` |
| 3,154 | `temp-history` |
| 3,155 | `temp-hist-tooltip` |
| 3,158 | `temp-trend` |
| 3,162 | `temp-highlights` |
| 3,165 | `sheet-metric-gdp` |
| 3,166 | `gdp-timing` |
| 3,167 | `gdp-chart` |
| 3,168 | `gdp-rangebar` |
| 3,170 | `gdp-head` |
| 3,171 | `slot-growth` |
| 3,172 | `gdp-history` |
| 3,173 | `gdp-hist-tooltip` |
| 3,174 | `gdp-yoy` |
| 3,184 | `gdp-trend` |
| 3,186 | `gdp-panel` |
| 3,191 | `subj-ring-gdp` |
| 3,193 | `subj-label-gdp` |
| 3,194 | `subj-value-gdp` |
| 3,195 | `subj-say-gdp` |
| 3,196 | `subj-spark-gdp` |
| 3,201 | `subj-ctx-gdp` |
| 3,204 | `gdp-highlights` |
| 3,212 | `sheet-metric-power` |
| 3,213 | `power-timing` |
| 3,214 | `power-head` |
| 3,215 | `power-chart` |
| 3,219 | `subj-ring-resilience` |
| 3,222 | `subj-value-resilience` |
| 3,223 | `subj-say-resilience` |
| 3,228 | `subj-ctx-resilience` |
| 3,232 | `longcycle-title` |
| 3,234 | `longcycle-tag` |
| 3,248 | `power-highlights` |
| 3,255 | `sheet-marker-deficit` |
| 3,261 | `sheet-metric-households` |
| 3,262 | `households-timing` |
| 3,263 | `households-chart` |
| 3,264 | `households-highlights` |
| 3,268 | `sheet-metric-valuation` |
| 3,269 | `valuation-timing` |
| 3,270 | `valuation-head` |
| 3,271 | `valuation-chart` |
| 3,275 | `subj-ring-valuation` |
| 3,278 | `subj-value-valuation` |
| 3,279 | `subj-say-valuation` |
| 3,284 | `subj-ctx-valuation` |
| 3,288 | `valuation-title` |
| 3,290 | `valuation-tag` |
| 3,297 | `valuation-highlights` |
| 3,303 | `subj-ring-yield` |
| 3,306 | `subj-value-yield` |
| 3,307 | `subj-say-yield` |
| 3,308 | `subj-spark-yield` |
| 3,339 | `ylm-series` |
| 3,344 | `ylm-head` |
| 3,345 | `ylm-shell` |
| 3,346 | `ylm-svg` |
| 3,347 | `ylm-tooltip` |
| 3,350 | `ylm-trend` |
| 3,353 | `pressure-insights` |
| 3,354 | `pressure-highlights` |
| 3,380 | `subj-value-horizon` |
| 3,381 | `subj-say-horizon` |
| 3,382 | `subj-spark-horizon` |
| 3,392 | `hzn-timeline` |
| 3,394 | `hzn-head` |
| 3,395 | `spread-history-shell` |
| 3,396 | `spread-history-svg` |
| 3,397 | `spread-history-tooltip` |
| 3,400 | `hzn-trend` |
| 3,402 | `hzn-panel` |
| 3,404 | `horizon-insights` |
| 3,405 | `horizon-highlights` |
| 3,412 | `subj-ring-sentiment` |
| 3,415 | `subj-value-sentiment` |
| 3,416 | `subj-say-sentiment` |
| 3,417 | `subj-spark-sentiment` |
| 3,429 | `curve-gauge` |
| 3,430 | `curve-vix` |
| 3,431 | `curve-highlights` |
| 3,445 | `signs-list` |
| 3,456 | `calendar-list` |
| 3,461 | `indicators-peek` |
| 3,507 | `cycle-list` |
| 3,513 | `cycle-more` |
| 3,514 | `cycle-more-label` |
| 3,523 | `calendar-cycle` |
| 3,524 | `calendar-cycle-slot` |
| 3,575 | `seasons-kicker` |
| 3,576 | `seasons-rows` |
| 3,580 | `framework-kicker` |
| 3,582 | `framework-rows` |
| 3,589 | `more-menu` |
| 3,592 | `menu-back` |
| 3,606 | `sources-open` |
| 3,614 | `appearance-current` |
| 3,622 | `sheet-howto` |
| 3,666 | `sheet-book` |
| 3,698 | `sheet-appearance` |
| 3,706 | `theme-toggle` |
| 3,713 | `sheet-contact` |
| 3,722 | `contact-form` |
| 3,723 | `contact-title` |
| 3,724 | `contact-message` |
| 3,726 | `contact-hint` |
| 3,727 | `contact-send` |
| 3,736 | `sheet-sources` |
| 3,739 | `sources-back` |
| 3,746 | `asof-text` |
| 3,747 | `sources-groups` |
| 3,754 | `detail-backdrop` |
| 3,756 | `detail-modal-close` |
| 3,757 | `detail-modal-body` |

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

