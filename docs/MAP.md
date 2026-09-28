# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,313 lines**, about 1197 KB, roughly **340 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `42ab769` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,069 | the whole stylesheet, every token and rule |
| **Markup** | 3,070–3,817 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,818–14,260 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,261–14,313 | </body></html> |

Counts: **253** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,823_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,827 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,828 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,829 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,847 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,851 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,856_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,866 | `wheelMeta` | `var wheelMeta =` |
| 3,877 | `seasonOverride` | `var seasonOverride =` |
| 3,880 | `cycleNowNote` | `var cycleNowNote =` |
| 3,889 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,975 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,020 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,033_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,050 | `LIVE` | `function LIVE(` |
| 4,077 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,085 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,086 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,089_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,120 | `repaintFigureText` | `function repaintFigureText(` |
| 4,133 | `repaintRow` | `function repaintRow(` |
| 4,146 | `repaintTag` | `function repaintTag(` |
| 4,156 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,181 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,189 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,197 | `REPAINT` | `var REPAINT =` |
| 4,214 | `liveAsOf` | `var liveAsOf =` |
| 4,215 | `fmtAsOf` | `function fmtAsOf(` |
| 4,220 | `applyLive` | `function applyLive(` |
| 4,299 | `repaintPolicy` | `function repaintPolicy(` |
| 4,355 | `GYN` | `var GYN =` |
| 4,375 | `refreshLiveData` | `function refreshLiveData(` |
| 4,416 | `fetchSiteData` | `function fetchSiteData(` |
| 4,446 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,460_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,461 | `yieldCurve` | `var yieldCurve =` |
| 4,474 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,498 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,510 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,538_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,543 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,567 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,591 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,615 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,642 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,667_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,676 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,686 | `uninvLagToday` | `var uninvLagToday =` |
| 4,698 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,711 | `gdpPeers` | `var gdpPeers =` |
| 4,752 | `gdpSrc` | `var gdpSrc =` |
| 4,753 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,758 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,771 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,809_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,831 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,841_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,857 | `stressScoreFor` | `function stressScoreFor(` |
| 4,863 | `stressScore` | `var stressScore =` |
| 4,869 | `powerOf` | `var powerOf =` |
| 4,870 | `powerScore` | `var powerScore =` |
| 4,887 | `stressHistory` | `var stressHistory =` |
| 4,898 | `powerMeter` | `var powerMeter =` |
| 4,900 | `stressNoteFull` | `var stressNoteFull =` |
| 4,932 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,934_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,957 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,958 | `deficitHistory` | `var deficitHistory =` |
| 4,961 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,968 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,970 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,018 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,019 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,020 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,037_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,050 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,063_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,077 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,080 | `timelineSpan` | `function timelineSpan(` |
| 5,086 | `timelineFor` | `function timelineFor(` |
| 5,099 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,105_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,111 | `windowScale` | `function windowScale(` |
| 5,127 | `windowYears` | `function windowYears(` |
| 5,145 | `refName` | `function refName(` |
| 5,152 | `histReadEnsure` | `function histReadEnsure(` |
| 5,191 | `seatBandReading` | `function seatBandReading(` |
| 5,214 | `histReadFill` | `function histReadFill(` |
| 5,342 | `histAxisEnds` | `function histAxisEnds(` |
| 5,353 | `histLegend` | `function histLegend(` |
| 5,441 | `refitHistory` | `function refitHistory(` |
| 5,453 | `wireHistHover` | `function wireHistHover(` |
| 5,512 | `mWindowFrom` | `function mWindowFrom(` |
| 5,517 | `qWindowFrom` | `function qWindowFrom(` |
| 5,522 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,523 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,525 | `DEF_1983` | `var DEF_1983 =` |
| 5,527 | `defFrom` | `function defFrom(` |
| 5,538 | `deficitChart` | `function deficitChart(` |
| 5,628 | `deficitBlock` | `function deficitBlock(` |
| 5,690 | `buffettHistory` | `var buffettHistory =` |
| 5,720 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,721 | `hyDates` | `var hyDates =` |
| 5,722 | `hyOas` | `var hyOas =` |
| 5,723 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,730 | `hyAt` | `function hyAt(` |
| 5,734 | `hyLabel` | `function hyLabel(` |
| 5,735 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,736 | `hyNum` | `function hyNum(` |
| 5,737 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,747 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,757 | `capeHistory` | `var capeHistory =` |
| 5,759 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,777_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,783 | `sentiment` | `var sentiment =` |
| 5,801 | `valuation` | `var valuation =` |
| 5,838 | `valRow` | `function valRow(` |
| 5,846 | `coincident` | `var coincident =` |
| 5,907 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,925 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,926 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,927 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,929_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,942 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,943 | `m2vHistory` | `var m2vHistory =` |
| 5,963 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,056 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,146 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,147 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,187_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,193 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,194 | `DOTS` | `var DOTS =` |
| 6,196 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,224 | `histHead` | `function histHead(` |
| 6,248 | `headNoteIdx` | `var headNoteIdx =` |
| 6,249 | `headMenuHtml` | `function headMenuHtml(` |
| 6,307 | `headMenuFor` | `var headMenuFor =` |
| 6,309 | `headSubFor` | `var headSubFor =` |
| 6,310 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,355 | `nameWithMark` | `function nameWithMark(` |
| 6,361 | `panelRow` | `function panelRow(` |
| 6,387 | `panelFromMeter` | `function panelFromMeter(` |
| 6,401 | `meterFlagged` | `function meterFlagged(` |
| 6,412 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,440 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,454 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,473 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,492 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,506 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,531 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,562 | `desireBlock` | `function desireBlock(` |
| 6,589 | `volumeBlock` | `function volumeBlock(` |
| 6,614 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,637 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,645_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,658 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,659 | `m2Level` | `var m2Level =` |
| 6,681 | `m2Yoy` | `var m2Yoy =` |
| 6,682 | `M2_NORM` | `var M2_NORM =` |
| 6,687 | `volumeVerdict` | `function volumeVerdict(` |
| 6,724 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,725 | `unempHistory` | `var unempHistory =` |
| 6,731 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,746 | `NROU_NOW` | `var NROU_NOW =` |
| 6,747 | `unempState` | `function unempState(` |
| 6,753 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,817_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,826 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,835_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,848 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,861 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 6,917 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 6,972 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,973 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,976 | `qAtIndex` | `function qAtIndex(` |
| 6,977 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,985_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,000 | `householdsChart` | `function householdsChart(` |
| 7,068 | `lastChartAvg` | `var lastChartAvg =` |
| 7,069 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,154 | `GDP_NORM` | `var GDP_NORM =` |
| 7,160 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,161 | `gdpNowQ` | `var gdpNowQ =` |
| 7,162 | `gdpMeter` | `var gdpMeter =` |
| 7,165 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,187 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,253 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,317 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,325 | `velocityVerdict` | `function velocityVerdict(` |
| 7,333 | `derivePulseTag` | `function derivePulseTag(` |
| 7,339 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,399_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,408 | `seasonReading` | `var seasonReading =` |
| 7,457 | `frameworkRows` | `var frameworkRows =` |
| 7,467 | `vixRow` | `var vixRow =` |
| 7,475 | `vixWordOf` | `var vixWordOf =` |
| 7,479 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,494_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,498 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,507_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,508 | `calendarTodayY` | `var calendarTodayY =` |
| 7,539 | `vix3mClose` | `var vix3mClose =` |
| 7,540 | `fearCurve` | `function fearCurve(` |
| 7,547 | `curveVerdict` | `function curveVerdict(` |
| 7,554 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,559 | `valuationVerdict` | `function valuationVerdict(` |
| 7,577 | `sparkHtml` | `function sparkHtml(` |
| 7,596 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,602_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,615 | `modeBar` | `function modeBar(` |
| 7,630 | `pickerOpen` | `var pickerOpen =` |
| 7,634 | `cycleByName` | `function cycleByName(` |
| 7,638 | `openCycle` | `function openCycle(` |
| 7,644 | `cycleSlice` | `function cycleSlice(` |
| 7,653 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,661 | `cycleMonths` | `function cycleMonths(` |
| 7,680 | `histControls` | `function histControls(` |
| 7,694 | `cycLabel` | `function cycLabel(` |
| 7,710 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,719 | `cyclePicker` | `function cyclePicker(` |
| 7,738 | `rangeBar` | `function rangeBar(` |
| 7,750 | `trendOf` | `function trendOf(` |
| 7,795 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,805 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,826_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,827 | `yearOf` | `function yearOf(` |
| 7,828 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,829_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,867 | `headSigma` | `function headSigma(` |
| 7,873 | `atQuarter` | `function atQuarter(` |
| 7,874 | `atMonth` | `function atMonth(` |
| 7,875 | `cycleAverages` | `function cycleAverages(` |
| 7,882 | `ordinal` | `function ordinal(` |
| 7,883 | `hiCard` | `function hiCard(` |
| 7,894 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,908_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,915 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,931 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,938 | `moreRow` | `function moreRow(` |
| 7,944 | `powerPageNote` | `var powerPageNote =` |
| 7,945 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,957_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,960 | `xLabelOf` | `function xLabelOf(` |
| 7,980 | `fitGroup` | `function fitGroup(` |
| 8,002 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,061_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,085 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,095 | `vGrid` | `function vGrid(` |
| 8,120 | `COL_FILL` | `var COL_FILL =` |
| 8,153 | `colPath` | `function colPath(` |
| 8,158 | `colWidth` | `function colWidth(` |
| 8,205 | `AXIS` | `var AXIS =` |
| 8,206 | `chartAxes` | `function chartAxes(` |
| 8,266 | `divergeChart` | `function divergeChart(` |
| 8,334 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,363_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,371 | `maxIn` | `function maxIn(` |
| 8,389 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,403 | `PEEK_W` | `var PEEK_W =` |
| 8,406 | `PEEK_H` | `var PEEK_H =` |
| 8,411 | `colPeek` | `function colPeek(` |
| 8,438 | `meterPeek` | `function meterPeek(` |
| 8,455 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,460 | `pressureZone` | `function pressureZone(` |
| 8,475 | `HZN_BACK` | `var HZN_BACK =` |
| 8,476 | `hznLast` | `function hznLast(` |
| 8,477 | `hznBack` | `function hznBack(` |
| 8,478 | `horizonWord` | `function horizonWord(` |
| 8,503 | `HZN_METERS` | `var HZN_METERS =` |
| 8,511 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,552 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,557 | `RISK_RISK` | `var RISK_RISK =` |
| 8,562 | `riskCell` | `function riskCell(` |
| 8,563 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,594 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,619_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,640 | `pulseClipN` | `var pulseClipN =` |
| 8,641 | `beatPath` | `function beatPath(` |
| 8,666 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,680 | `pulsePeek` | `function pulsePeek(` |
| 8,688 | `pulseBlock` | `function pulseBlock(` |
| 8,708 | `CHEV` | `var CHEV =` |
| 8,710 | `peekCard` | `function peekCard(` |
| 8,764 | `dropSvg` | `function dropSvg(` |
| 8,776 | `volumeSvg` | `function volumeSvg(` |
| 8,783 | `gaugeSvg` | `function gaugeSvg(` |
| 8,787 | `diamondSvg` | `function diamondSvg(` |
| 8,801 | `energyFromReserve` | `function energyFromReserve(` |
| 8,813 | `sproutSvg` | `function sproutSvg(` |
| 8,824 | `markSvg` | `function markSvg(` |
| 8,833 | `pressureSvg` | `function pressureSvg(` |
| 8,837 | `hormoneSvg` | `function hormoneSvg(` |
| 8,843 | `flameSvg` | `function flameSvg(` |
| 8,847 | `gearSvg` | `function gearSvg(` |
| 8,859 | `thermoSvg` | `function thermoSvg(` |
| 8,878 | `trendUpSvg` | `function trendUpSvg(` |
| 8,880 | `ecgSvg` | `function ecgSvg(` |
| 8,894 | `circulationSvg` | `function circulationSvg(` |
| 8,895 | `weatherSvg` | `function weatherSvg(` |
| 8,916 | `moodSvg` | `function moodSvg(` |
| 8,940 | `boltSvg` | `function boltSvg(` |
| 8,943 | `houseSvg` | `function houseSvg(` |
| 8,951 | `sunriseSvg` | `function sunriseSvg(` |
| 8,966 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,977 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,994_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,015 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,016 | `dsrHistory` | `var dsrHistory =` |
| 9,017 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,018 | `savHistory` | `var savHistory =` |
| 9,023 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,033 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,034 | `dsrNow` | `var dsrNow =` |
| 9,035 | `savNow` | `var savNow =` |
| 9,036 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,041 | `householdsWord` | `function householdsWord(` |
| 9,048 | `householdsNow` | `var householdsNow =` |
| 9,055 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,056 | `dsrMeter` | `var dsrMeter =` |
| 9,059 | `savMeter` | `var savMeter =` |
| 9,062 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,079 | `savInfoHtml` | `function savInfoHtml(` |
| 9,097 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,106 | `curveNow` | `var curveNow =` |
| 9,107 | `curveTag` | `var curveTag =` |
| 9,108 | `curveSub` | `var curveSub =` |
| 9,112 | `curvePct` | `function curvePct(` |
| 9,113 | `curveNoteFull` | `var curveNoteFull =` |
| 9,128 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,136 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,177 | `marketCycles` | `var marketCycles =` |
| 9,207 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,209_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,230 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,231 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,236_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,257 | `slopeOf` | `function slopeOf(` |
| 9,268 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,274 | `readSeason` | `function readSeason(` |
| 9,299 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,301 | `qLabel` | `function qLabel(` |
| 9,325 | `regimeTrack` | `function regimeTrack(` |
| 9,348 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,350_ · 22 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,357 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,358 | `seasonTitle` | `function seasonTitle(` |
| 9,359 | `monthLabel` | `function monthLabel(` |
| 9,360 | `cycleModel` | `function cycleModel(` |
| 9,412 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,420 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,427 | `nowModel` | `var nowModel =` |
| 9,428 | `readingNow` | `var readingNow =` |
| 9,429 | `cpiNow` | `var cpiNow =` |
| 9,430 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,431 | `currentSeason` | `var currentSeason =` |
| 9,432 | `seasonWhy` | `var seasonWhy =` |
| 9,449 | `seasonGroup` | `function seasonGroup(` |
| 9,463 | `arcGauge` | `function arcGauge(` |
| 9,505 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,518 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,525 | `tsyView` | `var tsyView =` |
| 9,527 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,529 | `spreadLabel` | `function spreadLabel(` |
| 9,536 | `policyFacts` | `function policyFacts(` |
| 9,548 | `allSources` | `var allSources =` |
| 9,572 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,605_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,608 | `SVG_NS` | `var SVG_NS =` |
| 9,609 | `svgEl` | `function svgEl(` |
| 9,622 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,658_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,659 | `clampPct` | `function clampPct(` |
| 9,666 | `infoIcon` | `function infoIcon(` |
| 9,675 | `detailTexts` | `var detailTexts =` |
| 9,693 | `detailSlots` | `var detailSlots =` |
| 9,694 | `detailSlot` | `function detailSlot(` |
| 9,705 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,709 | `_growthPanel` | `var _growthPanel =` |
| 9,710 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,716 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,727 | `facts` | `function facts(` |
| 9,728 | `factsFrom` | `function factsFrom(` |
| 9,732 | `expandBtn` | `function expandBtn(` |
| 9,738 | `sheetRenderers` | `var sheetRenderers =` |
| 9,755 | `pageMode` | `var pageMode =` |
| 9,762 | `pageCycles` | `var pageCycles =` |
| 9,767 | `pageRange` | `var pageRange =` |
| 9,773 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,807_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,818 | `meterHtml` | `function meterHtml(` |
| 9,846 | `srcHtml` | `function srcHtml(` |
| 9,855 | `TIMING` | `var TIMING =` |
| 9,861 | `timingMark` | `function timingMark(` |
| 9,875 | `timingPill` | `function timingPill(` |
| 9,896 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,904 | `seatPageFoot` | `function seatPageFoot(` |
| 9,927 | `timingMembers` | `var timingMembers =` |
| 9,928 | `registerTiming` | `function registerTiming(` |
| 9,934 | `headHtml` | `function headHtml(` |
| 9,952 | `heldHighlights` | `var heldHighlights =` |
| 9,953 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,011_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,012 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,445_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,446 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,669_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,670 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,702_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,708 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,792_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,793 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,811_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,814 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,837_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,849 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 10,940_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,949 | `lendingWord` | `function lendingWord(` |
| 10,957 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,017_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,018 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,142_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,145 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,267_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,279 | `totalRiseIn` | `function totalRiseIn(` |
| 11,289 | `eraInflation` | `function eraInflation(` |
| 11,300 | `eraGrowth` | `function eraGrowth(` |
| 11,316 | `fmtSigned` | `function fmtSigned(` |
| 11,321 | `regimeArrow` | `function regimeArrow(` |
| 11,327 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,328 | `growthShown` | `function growthShown(` |
| 11,329 | `growthShownCap` | `function growthShownCap(` |
| 11,330 | `regimeState` | `function regimeState(` |
| 11,334 | `phaseClass` | `function phaseClass(` |
| 11,336 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,348 | `cycleViewEl` | `var cycleViewEl =` |
| 11,352 | `tempCard` | `var tempCard =` |
| 11,353 | `placeCharts` | `function placeCharts(` |
| 11,358 | `shownEra` | `var shownEra =` |
| 11,359 | `calendarReset` | `var calendarReset =` |
| 11,360 | `metricPageReset` | `var metricPageReset =` |
| 11,361 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,364 | `topbarBack` | `var topbarBack =` |
| 11,365 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,372_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,373 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,534_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,535 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,553_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,556 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,577_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,583 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,586 | `hubSet` | `function hubSet(` |
| 11,599 | `quarterPopup` | `function quarterPopup(` |
| 11,632 | `hubShowDefault` | `function hubShowDefault(` |
| 11,641 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,647 | `hubShowYear` | `function hubShowYear(` |
| 11,662 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,754_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,757 | `tempState` | `var tempState =` |
| 11,760 | `chartLink` | `var chartLink =` |
| 11,780 | `m2Step` | `function m2Step(` |
| 11,783 | `heatStep` | `function heatStep(` |
| 11,787 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,974_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,977 | `drawGrowth` | `function drawGrowth(` |
| 12,116 | `wireResize` | `function wireResize(` |
| 12,122 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,134_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,135 | `renderCycleView` | `function renderCycleView(` |
| 12,188 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 12,199 | `PEER_CARET` | `var PEER_CARET =` |
| 12,200 | `peerList` | `function peerList(` |
| 12,201 | `peerChosen` | `function peerChosen(` |
| 12,202 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 12,206 | `renderPeerPills` | `function renderPeerPills(` |
| 12,256 | `shownEraModel` | `var shownEraModel =` |
| 12,257 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,259_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,261 | `stripGroupName` | `var stripGroupName =` |
| 12,262 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,308 | `marketStripHtml` | `function marketStripHtml(` |
| 12,371 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,372 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,402_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,403 | `renderCycleList` | `function renderCycleList(` |
| 12,493 | `renderSignsList` | `function renderSignsList(` |
| 12,778 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,059_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,060 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,122_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,123 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,156_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,157 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,046–4,049 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,484–8,497 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,308–9,321 | `seasonTrackAll` | The season, computed |
| 9,343–9,347 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,519 |
| `desire-range` | 10,334 |
| `fear-range` | 11,107 |
| `hormones-range` | 10,884 |
| `hzn-range` | 10,438 |
| `hzn-spread` | 10,432 |
| `pressure-range` | 10,984 |
| `pulse-range` | 10,285 |
| `sheet-marker-deficit` | 13,516 |
| `sheet-metric-gdp` | 13,400 |
| `sheet-metric-households` | 13,550 |
| `sheet-metric-power` | 13,479 |
| `sheet-metric-temp` | 13,350 |
| `sheet-metric-valuation` | 13,595 |
| `sheet-sign-activity` | 13,461 |
| `sheet-sign-desire` | 10,335 |
| `sheet-sign-horizon` | 10,439 |
| `sheet-sign-hormones` | 10,887 |
| `sheet-sign-pressure` | 10,985 |
| `sheet-sign-pulse` | 10,284 |
| `sheet-sign-sentiment` | 11,112 |
| `sheet-sign-volume` | 10,308 |
| `volume-range` | 10,309 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,525 |
| `desire-range` | 10,317 |
| `fear-range` | 11,064 |
| `hzn-range` | 10,363 |
| `pulse-range` | 10,262 |
| `sheet-metric-gdp` | 13,401 |
| `sheet-metric-power` | 13,480 |
| `sheet-metric-temp` | 13,351 |
| `sheet-metric-valuation` | 13,596 |
| `volume-range` | 10,289 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,197 |
| `sheet-metric-gdp` | 6,198 |
| `sheet-sign-activity` | 6,205 |
| `sheet-metric-power` | 6,206 |
| `sheet-metric-valuation` | 6,208 |
| `sheet-metric-households` | 6,209 |
| `deficit-range` | 6,210 |
| `volume-range` | 6,211 |
| `pulse-range` | 6,212 |
| `hzn-range` | 6,218 |
| `desire-range` | 6,219 |
| `fear-range` | 6,220 |
| `hormones-range` | 6,221 |
| `pressure-range` | 6,222 |

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
| 2,464 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,512 | hero: yield curve |
| 2,608 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,687 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,786 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,811 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,826 | long cycle (structural layer) |
| 2,867 | indicator grid |
| 2,910 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,927 | info icon + popover (progressive disclosure for longer notes) |
| 2,948 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,043 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (142), which is what the renderers fill:

| Line | id |
|---|---|
| 3,075 | `topbar-back` |
| 3,078 | `topbar-title` |
| 3,079 | `menu-btn` |
| 3,096 | `main` |
| 3,103 | `cycle-view` |
| 3,111 | `cycle-kicker` |
| 3,117 | `cycle-dial` |
| 3,119 | `season-wheel-hub-date` |
| 3,120 | `season-wheel-hub-theme` |
| 3,121 | `season-wheel-hub-detail` |
| 3,129 | `temp-card` |
| 3,131 | `temp-kicker` |
| 3,132 | `temp-sub` |
| 3,135 | `temp-svg` |
| 3,136 | `temp-tooltip` |
| 3,142 | `temp-stats` |
| 3,149 | `growth-card` |
| 3,152 | `growth-kicker` |
| 3,152 | `growth-phase` |
| 3,152 | `growth-sub` |
| 3,152 | `growth-peers` |
| 3,153 | `growth-svg` |
| 3,153 | `growth-tooltip` |
| 3,158 | `growth-stats` |
| 3,167 | `today-analysis` |
| 3,171 | `peek-row` |
| 3,175 | `sheet-metric-temp` |
| 3,176 | `temp-timing` |
| 3,177 | `temp-chart` |
| 3,179 | `temp-rangebar` |
| 3,181 | `temp-head` |
| 3,182 | `slot-temp` |
| 3,183 | `temp-history` |
| 3,184 | `temp-hist-tooltip` |
| 3,187 | `temp-trend` |
| 3,191 | `temp-highlights` |
| 3,194 | `sheet-metric-gdp` |
| 3,195 | `gdp-timing` |
| 3,196 | `gdp-chart` |
| 3,197 | `gdp-rangebar` |
| 3,199 | `gdp-head` |
| 3,200 | `slot-growth` |
| 3,201 | `gdp-history` |
| 3,202 | `gdp-hist-tooltip` |
| 3,203 | `gdp-yoy` |
| 3,213 | `gdp-trend` |
| 3,215 | `gdp-panel` |
| 3,220 | `subj-ring-gdp` |
| 3,222 | `subj-label-gdp` |
| 3,223 | `subj-value-gdp` |
| 3,224 | `subj-say-gdp` |
| 3,225 | `subj-spark-gdp` |
| 3,230 | `subj-ctx-gdp` |
| 3,233 | `gdp-highlights` |
| 3,241 | `sheet-metric-power` |
| 3,242 | `power-timing` |
| 3,243 | `power-head` |
| 3,244 | `power-chart` |
| 3,248 | `subj-ring-resilience` |
| 3,251 | `subj-value-resilience` |
| 3,252 | `subj-say-resilience` |
| 3,257 | `subj-ctx-resilience` |
| 3,261 | `longcycle-title` |
| 3,263 | `longcycle-tag` |
| 3,277 | `power-highlights` |
| 3,284 | `sheet-marker-deficit` |
| 3,290 | `sheet-metric-households` |
| 3,291 | `households-timing` |
| 3,292 | `households-chart` |
| 3,293 | `households-highlights` |
| 3,297 | `sheet-metric-valuation` |
| 3,298 | `valuation-timing` |
| 3,299 | `valuation-head` |
| 3,300 | `valuation-chart` |
| 3,304 | `subj-ring-valuation` |
| 3,307 | `subj-value-valuation` |
| 3,308 | `subj-say-valuation` |
| 3,313 | `subj-ctx-valuation` |
| 3,317 | `valuation-title` |
| 3,319 | `valuation-tag` |
| 3,326 | `valuation-highlights` |
| 3,350 | `subj-value-hormones` |
| 3,351 | `subj-say-hormones` |
| 3,359 | `hormones-history` |
| 3,369 | `hormones-highlights` |
| 3,395 | `subj-value-horizon` |
| 3,396 | `subj-say-horizon` |
| 3,397 | `subj-spark-horizon` |
| 3,407 | `hzn-timeline` |
| 3,409 | `hzn-head` |
| 3,410 | `spread-history-shell` |
| 3,411 | `spread-history-svg` |
| 3,412 | `spread-history-tooltip` |
| 3,417 | `ylm-shell` |
| 3,418 | `ylm-svg` |
| 3,419 | `ylm-tooltip` |
| 3,422 | `hzn-trend` |
| 3,423 | `ylm-trend` |
| 3,425 | `horizon-insights` |
| 3,453 | `subj-value-pressure` |
| 3,454 | `subj-say-pressure` |
| 3,459 | `pressure-history` |
| 3,460 | `pressure-highlights` |
| 3,466 | `subj-ring-sentiment` |
| 3,469 | `subj-value-sentiment` |
| 3,470 | `subj-say-sentiment` |
| 3,471 | `subj-spark-sentiment` |
| 3,485 | `fear-history` |
| 3,486 | `curve-highlights` |
| 3,500 | `signs-list` |
| 3,511 | `calendar-list` |
| 3,516 | `indicators-peek` |
| 3,562 | `cycle-list` |
| 3,568 | `cycle-more` |
| 3,569 | `cycle-more-label` |
| 3,578 | `calendar-cycle` |
| 3,579 | `calendar-cycle-slot` |
| 3,630 | `seasons-kicker` |
| 3,631 | `seasons-rows` |
| 3,635 | `framework-kicker` |
| 3,637 | `framework-rows` |
| 3,644 | `more-menu` |
| 3,647 | `menu-back` |
| 3,661 | `sources-open` |
| 3,669 | `appearance-current` |
| 3,677 | `sheet-howto` |
| 3,721 | `sheet-book` |
| 3,753 | `sheet-appearance` |
| 3,761 | `theme-toggle` |
| 3,768 | `sheet-contact` |
| 3,777 | `contact-form` |
| 3,778 | `contact-title` |
| 3,779 | `contact-message` |
| 3,781 | `contact-hint` |
| 3,782 | `contact-send` |
| 3,791 | `sheet-sources` |
| 3,794 | `sources-back` |
| 3,801 | `asof-text` |
| 3,802 | `sources-groups` |
| 3,809 | `detail-backdrop` |
| 3,811 | `detail-modal-close` |
| 3,812 | `detail-modal-body` |

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

