# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **14,443 lines**, about 1208 KB, roughly **343 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `df524e7` on 2026-09-28.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,098 | the whole stylesheet, every token and rule |
| **Markup** | 3,099–3,846 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,847–14,390 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 14,391–14,443 | </body></html> |

Counts: **254** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,852_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,856 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,857 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,858 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,876 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,880 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,885_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,895 | `wheelMeta` | `var wheelMeta =` |
| 3,906 | `seasonOverride` | `var seasonOverride =` |
| 3,909 | `cycleNowNote` | `var cycleNowNote =` |
| 3,918 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 4,004 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 4,049 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 4,062_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,079 | `LIVE` | `function LIVE(` |
| 4,106 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 4,114 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 4,115 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,118_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,149 | `repaintFigureText` | `function repaintFigureText(` |
| 4,162 | `repaintRow` | `function repaintRow(` |
| 4,175 | `repaintTag` | `function repaintTag(` |
| 4,185 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,210 | `repaintHorizonRow` | `function repaintHorizonRow(` |
| 4,218 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,226 | `REPAINT` | `var REPAINT =` |
| 4,243 | `liveAsOf` | `var liveAsOf =` |
| 4,244 | `fmtAsOf` | `function fmtAsOf(` |
| 4,249 | `applyLive` | `function applyLive(` |
| 4,328 | `repaintPolicy` | `function repaintPolicy(` |
| 4,382 | `GYN` | `var GYN =` |
| 4,402 | `refreshLiveData` | `function refreshLiveData(` |
| 4,443 | `fetchSiteData` | `function fetchSiteData(` |
| 4,473 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,487_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,488 | `yieldCurve` | `var yieldCurve =` |
| 4,501 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,525 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,537 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,565_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,570 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,594 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,618 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,642 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,669 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,694_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,703 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,713 | `uninvLagToday` | `var uninvLagToday =` |
| 4,725 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,738 | `gdpPeers` | `var gdpPeers =` |
| 4,779 | `gdpSrc` | `var gdpSrc =` |
| 4,780 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,785 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,798 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,836_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,858 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,868_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,884 | `stressScoreFor` | `function stressScoreFor(` |
| 4,890 | `stressScore` | `var stressScore =` |
| 4,896 | `powerOf` | `var powerOf =` |
| 4,897 | `powerScore` | `var powerScore =` |
| 4,914 | `stressHistory` | `var stressHistory =` |
| 4,925 | `powerMeter` | `var powerMeter =` |
| 4,927 | `stressNoteFull` | `var stressNoteFull =` |
| 4,959 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,961_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,984 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,985 | `deficitHistory` | `var deficitHistory =` |
| 4,988 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,995 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,997 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 5,045 | `fedFundsHistory` | `var fedFundsHistory =` |
| 5,046 | `fearCurveHistory` | `var fearCurveHistory =` |
| 5,047 | `lendingStandardsHistory` | `var lendingStandardsHistory =` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 5,064_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 5,077 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 5,090_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,104 | `cycleSpanYears` | `function cycleSpanYears(` |
| 5,107 | `timelineSpan` | `function timelineSpan(` |
| 5,113 | `timelineFor` | `function timelineFor(` |
| 5,126 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 5,132_ · 31 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,138 | `windowScale` | `function windowScale(` |
| 5,154 | `windowYears` | `function windowYears(` |
| 5,172 | `refName` | `function refName(` |
| 5,179 | `histReadEnsure` | `function histReadEnsure(` |
| 5,218 | `seatBandReading` | `function seatBandReading(` |
| 5,241 | `histReadFill` | `function histReadFill(` |
| 5,369 | `histAxisEnds` | `function histAxisEnds(` |
| 5,380 | `histLegend` | `function histLegend(` |
| 5,468 | `refitHistory` | `function refitHistory(` |
| 5,480 | `wireHistHover` | `function wireHistHover(` |
| 5,560 | `mWindowFrom` | `function mWindowFrom(` |
| 5,565 | `qWindowFrom` | `function qWindowFrom(` |
| 5,570 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,571 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,573 | `DEF_1983` | `var DEF_1983 =` |
| 5,575 | `defFrom` | `function defFrom(` |
| 5,586 | `deficitChart` | `function deficitChart(` |
| 5,676 | `deficitBlock` | `function deficitBlock(` |
| 5,738 | `buffettHistory` | `var buffettHistory =` |
| 5,768 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,769 | `hyDates` | `var hyDates =` |
| 5,770 | `hyOas` | `var hyOas =` |
| 5,771 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,778 | `hyAt` | `function hyAt(` |
| 5,782 | `hyLabel` | `function hyLabel(` |
| 5,783 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,784 | `hyNum` | `function hyNum(` |
| 5,785 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,795 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,805 | `capeHistory` | `var capeHistory =` |
| 5,807 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,825_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,831 | `sentiment` | `var sentiment =` |
| 5,849 | `valuation` | `var valuation =` |
| 5,886 | `valRow` | `function valRow(` |
| 5,894 | `coincident` | `var coincident =` |
| 5,955 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,973 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,974 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,975 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,977_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,990 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,991 | `m2vHistory` | `var m2vHistory =` |
| 6,011 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 6,104 | `desireHistoryChart` | `function desireHistoryChart(` |
| 6,194 | `PBAR_GAP` | `var PBAR_GAP =` |
| 6,195 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,235_ · 24 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,241 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,242 | `DOTS` | `var DOTS =` |
| 6,249 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,283 | `histHead` | `function histHead(` |
| 6,307 | `headNoteIdx` | `var headNoteIdx =` |
| 6,308 | `headMenuHtml` | `function headMenuHtml(` |
| 6,366 | `headMenuFor` | `var headMenuFor =` |
| 6,368 | `headSubFor` | `var headSubFor =` |
| 6,369 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,414 | `nameWithMark` | `function nameWithMark(` |
| 6,420 | `panelRow` | `function panelRow(` |
| 6,453 | `panelFromMeter` | `function panelFromMeter(` |
| 6,467 | `meterFlagged` | `function meterFlagged(` |
| 6,478 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,506 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,520 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,539 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,558 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,572 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,597 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,628 | `desireBlock` | `function desireBlock(` |
| 6,655 | `volumeBlock` | `function volumeBlock(` |
| 6,680 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,703 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,711_ · 11 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,724 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,725 | `m2Level` | `var m2Level =` |
| 6,747 | `m2Yoy` | `var m2Yoy =` |
| 6,748 | `M2_NORM` | `var M2_NORM =` |
| 6,753 | `volumeVerdict` | `function volumeVerdict(` |
| 6,790 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,791 | `unempHistory` | `var unempHistory =` |
| 6,797 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,812 | `NROU_NOW` | `var NROU_NOW =` |
| 6,813 | `unempState` | `function unempState(` |
| 6,819 | `unempHistoryChart` | `function unempHistoryChart(` |

### V592: Hormones \u2014 the policy rate's history

_line 6,883_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,892 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |

### V597: Pressure. The resistance the circulating money meets

_line 6,901_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,914 | `checkLendingStandards` | `function checkLendingStandards(` |
| 6,927 | `lendingHistoryChart` | `function lendingHistoryChart(` |
| 6,983 | `fedFundsHistoryChart` | `function fedFundsHistoryChart(` |
| 7,052 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 7,053 | `CPI_TARGET` | `var CPI_TARGET =` |
| 7,056 | `qAtIndex` | `function qAtIndex(` |
| 7,057 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 7,065_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,080 | `householdsChart` | `function householdsChart(` |
| 7,148 | `lastChartAvg` | `var lastChartAvg =` |
| 7,149 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 7,234 | `GDP_NORM` | `var GDP_NORM =` |
| 7,240 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 7,241 | `gdpNowQ` | `var gdpNowQ =` |
| 7,242 | `gdpMeter` | `var gdpMeter =` |
| 7,245 | `growthInfoHtml` | `function growthInfoHtml(` |
| 7,267 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 7,333 | `m2GrowthChart` | `function m2GrowthChart(` |
| 7,397 | `checkMoneyStock` | `function checkMoneyStock(` |
| 7,405 | `velocityVerdict` | `function velocityVerdict(` |
| 7,413 | `derivePulseTag` | `function derivePulseTag(` |
| 7,419 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,479_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,488 | `seasonReading` | `var seasonReading =` |
| 7,537 | `frameworkRows` | `var frameworkRows =` |
| 7,547 | `vixRow` | `var vixRow =` |
| 7,555 | `vixWordOf` | `var vixWordOf =` |
| 7,559 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,574_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,578 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,587_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,588 | `calendarTodayY` | `var calendarTodayY =` |
| 7,619 | `vix3mClose` | `var vix3mClose =` |
| 7,620 | `fearCurve` | `function fearCurve(` |
| 7,627 | `curveVerdict` | `function curveVerdict(` |
| 7,634 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,639 | `valuationVerdict` | `function valuationVerdict(` |
| 7,657 | `sparkHtml` | `function sparkHtml(` |
| 7,676 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,682_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,695 | `modeBar` | `function modeBar(` |
| 7,710 | `pickerOpen` | `var pickerOpen =` |
| 7,714 | `cycleByName` | `function cycleByName(` |
| 7,718 | `openCycle` | `function openCycle(` |
| 7,724 | `cycleSlice` | `function cycleSlice(` |
| 7,733 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,741 | `cycleMonths` | `function cycleMonths(` |
| 7,760 | `histControls` | `function histControls(` |
| 7,774 | `cycLabel` | `function cycLabel(` |
| 7,790 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,799 | `cyclePicker` | `function cyclePicker(` |
| 7,818 | `rangeBar` | `function rangeBar(` |
| 7,830 | `trendOf` | `function trendOf(` |
| 7,875 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,885 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,906_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,907 | `yearOf` | `function yearOf(` |
| 7,908 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,909_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,947 | `headSigma` | `function headSigma(` |
| 7,955 | `atQuarter` | `function atQuarter(` |
| 7,956 | `atMonth` | `function atMonth(` |
| 7,957 | `cycleAverages` | `function cycleAverages(` |
| 7,964 | `ordinal` | `function ordinal(` |
| 7,965 | `hiCard` | `function hiCard(` |
| 7,976 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,990_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,997 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 8,013 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 8,020 | `moreRow` | `function moreRow(` |
| 8,026 | `powerPageNote` | `var powerPageNote =` |
| 8,027 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 8,039_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,042 | `xLabelOf` | `function xLabelOf(` |
| 8,062 | `fitGroup` | `function fitGroup(` |
| 8,084 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 8,143_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,167 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 8,177 | `vGrid` | `function vGrid(` |
| 8,202 | `COL_FILL` | `var COL_FILL =` |
| 8,235 | `colPath` | `function colPath(` |
| 8,240 | `colWidth` | `function colWidth(` |
| 8,287 | `AXIS` | `var AXIS =` |
| 8,288 | `chartAxes` | `function chartAxes(` |
| 8,348 | `divergeChart` | `function divergeChart(` |
| 8,416 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 8,445_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,453 | `maxIn` | `function maxIn(` |
| 8,471 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,485 | `PEEK_W` | `var PEEK_W =` |
| 8,488 | `PEEK_H` | `var PEEK_H =` |
| 8,493 | `colPeek` | `function colPeek(` |
| 8,520 | `meterPeek` | `function meterPeek(` |
| 8,537 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,542 | `pressureZone` | `function pressureZone(` |
| 8,557 | `HZN_BACK` | `var HZN_BACK =` |
| 8,558 | `hznLast` | `function hznLast(` |
| 8,559 | `hznBack` | `function hznBack(` |
| 8,560 | `horizonWord` | `function horizonWord(` |
| 8,585 | `HZN_METERS` | `var HZN_METERS =` |
| 8,593 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,634 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,639 | `RISK_RISK` | `var RISK_RISK =` |
| 8,644 | `riskCell` | `function riskCell(` |
| 8,645 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,676 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,701_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,722 | `pulseClipN` | `var pulseClipN =` |
| 8,723 | `beatPath` | `function beatPath(` |
| 8,748 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,762 | `pulsePeek` | `function pulsePeek(` |
| 8,770 | `pulseBlock` | `function pulseBlock(` |
| 8,790 | `CHEV` | `var CHEV =` |
| 8,792 | `peekCard` | `function peekCard(` |
| 8,846 | `dropSvg` | `function dropSvg(` |
| 8,858 | `volumeSvg` | `function volumeSvg(` |
| 8,865 | `gaugeSvg` | `function gaugeSvg(` |
| 8,869 | `diamondSvg` | `function diamondSvg(` |
| 8,883 | `energyFromReserve` | `function energyFromReserve(` |
| 8,895 | `sproutSvg` | `function sproutSvg(` |
| 8,906 | `markSvg` | `function markSvg(` |
| 8,915 | `pressureSvg` | `function pressureSvg(` |
| 8,919 | `hormoneSvg` | `function hormoneSvg(` |
| 8,925 | `flameSvg` | `function flameSvg(` |
| 8,929 | `gearSvg` | `function gearSvg(` |
| 8,941 | `thermoSvg` | `function thermoSvg(` |
| 8,960 | `trendUpSvg` | `function trendUpSvg(` |
| 8,962 | `ecgSvg` | `function ecgSvg(` |
| 8,976 | `circulationSvg` | `function circulationSvg(` |
| 8,977 | `weatherSvg` | `function weatherSvg(` |
| 8,998 | `moodSvg` | `function moodSvg(` |
| 9,022 | `boltSvg` | `function boltSvg(` |
| 9,025 | `houseSvg` | `function houseSvg(` |
| 9,033 | `sunriseSvg` | `function sunriseSvg(` |
| 9,048 | `umbrellaSvg` | `function umbrellaSvg(` |
| 9,059 | `signMarks` | `var signMarks =` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 9,076_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,097 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 9,098 | `dsrHistory` | `var dsrHistory =` |
| 9,099 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 9,100 | `savHistory` | `var savHistory =` |
| 9,105 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 9,115 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 9,116 | `dsrNow` | `var dsrNow =` |
| 9,117 | `savNow` | `var savNow =` |
| 9,118 | `DSR_MEAN` | `var DSR_MEAN =` |
| 9,123 | `householdsWord` | `function householdsWord(` |
| 9,130 | `householdsNow` | `var householdsNow =` |
| 9,137 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 9,138 | `dsrMeter` | `var dsrMeter =` |
| 9,141 | `savMeter` | `var savMeter =` |
| 9,144 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 9,161 | `savInfoHtml` | `function savInfoHtml(` |
| 9,179 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 9,188 | `curveNow` | `var curveNow =` |
| 9,189 | `curveTag` | `var curveTag =` |
| 9,190 | `curveSub` | `var curveSub =` |
| 9,194 | `curvePct` | `function curvePct(` |
| 9,195 | `curveNoteFull` | `var curveNoteFull =` |
| 9,210 | `curveDetailHtml` | `function curveDetailHtml(` |
| 9,218 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 9,259 | `marketCycles` | `var marketCycles =` |
| 9,289 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 9,291_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,312 | `typicalCycleYears` | `var typicalCycleYears =` |
| 9,313 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 9,318_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,339 | `slopeOf` | `function slopeOf(` |
| 9,350 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 9,356 | `readSeason` | `function readSeason(` |
| 9,381 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 9,383 | `qLabel` | `function qLabel(` |
| 9,407 | `regimeTrack` | `function regimeTrack(` |
| 9,430 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 9,432_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,439 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 9,440 | `seasonTitle` | `function seasonTitle(` |
| 9,441 | `monthLabel` | `function monthLabel(` |
| 9,442 | `cycleModel` | `function cycleModel(` |
| 9,494 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,502 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,509 | `nowModel` | `var nowModel =` |
| 9,510 | `readingNow` | `var readingNow =` |
| 9,511 | `cpiNow` | `var cpiNow =` |
| 9,512 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,513 | `currentSeason` | `var currentSeason =` |
| 9,514 | `seasonWhy` | `var seasonWhy =` |
| 9,531 | `seasonGroup` | `function seasonGroup(` |
| 9,545 | `arcGauge` | `function arcGauge(` |
| 9,587 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,600 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,607 | `tsyView` | `var tsyView =` |
| 9,609 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,611 | `spreadLabel` | `function spreadLabel(` |
| 9,618 | `policyFacts` | `function policyFacts(` |
| 9,632 | `policyFactRows` | `function policyFactRows(` |
| 9,638 | `allSources` | `var allSources =` |
| 9,662 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,695_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,698 | `SVG_NS` | `var SVG_NS =` |
| 9,699 | `svgEl` | `function svgEl(` |
| 9,712 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,748_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,749 | `clampPct` | `function clampPct(` |
| 9,756 | `infoIcon` | `function infoIcon(` |
| 9,765 | `detailTexts` | `var detailTexts =` |
| 9,783 | `detailSlots` | `var detailSlots =` |
| 9,784 | `detailSlot` | `function detailSlot(` |
| 9,795 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,799 | `_growthPanel` | `var _growthPanel =` |
| 9,800 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,806 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,817 | `facts` | `function facts(` |
| 9,818 | `factsFrom` | `function factsFrom(` |
| 9,822 | `expandBtn` | `function expandBtn(` |
| 9,828 | `sheetRenderers` | `var sheetRenderers =` |
| 9,845 | `pageMode` | `var pageMode =` |
| 9,852 | `pageCycles` | `var pageCycles =` |
| 9,857 | `pageRange` | `var pageRange =` |
| 9,863 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,897_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,908 | `meterHtml` | `function meterHtml(` |
| 9,936 | `srcHtml` | `function srcHtml(` |
| 9,945 | `TIMING` | `var TIMING =` |
| 9,951 | `timingMark` | `function timingMark(` |
| 9,965 | `timingPill` | `function timingPill(` |
| 9,986 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,994 | `seatPageFoot` | `function seatPageFoot(` |
| 10,017 | `timingMembers` | `var timingMembers =` |
| 10,018 | `registerTiming` | `function registerTiming(` |
| 10,024 | `headHtml` | `function headHtml(` |
| 10,042 | `heldHighlights` | `var heldHighlights =` |
| 10,043 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 10,101_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,102 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 10,535_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,536 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,759_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,760 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,792_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,798 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,882_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,883 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,901_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,904 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Hormones (V592)

_line 10,927_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,939 | `renderHormones` | `function renderHormones(` |

### RENDER: Pressure (V597)

_line 11,070_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,079 | `lendingWord` | `function lendingWord(` |
| 11,087 | `renderPressure` | `function renderPressure(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 11,147_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,148 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 11,272_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,275 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 11,397_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,409 | `totalRiseIn` | `function totalRiseIn(` |
| 11,419 | `eraInflation` | `function eraInflation(` |
| 11,430 | `eraGrowth` | `function eraGrowth(` |
| 11,446 | `fmtSigned` | `function fmtSigned(` |
| 11,451 | `regimeArrow` | `function regimeArrow(` |
| 11,457 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 11,458 | `growthShown` | `function growthShown(` |
| 11,459 | `growthShownCap` | `function growthShownCap(` |
| 11,460 | `regimeState` | `function regimeState(` |
| 11,464 | `phaseClass` | `function phaseClass(` |
| 11,466 | `eraMarketTotal` | `function eraMarketTotal(` |
| 11,478 | `cycleViewEl` | `var cycleViewEl =` |
| 11,482 | `tempCard` | `var tempCard =` |
| 11,483 | `placeCharts` | `function placeCharts(` |
| 11,488 | `shownEra` | `var shownEra =` |
| 11,489 | `calendarReset` | `var calendarReset =` |
| 11,490 | `metricPageReset` | `var metricPageReset =` |
| 11,491 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 11,494 | `topbarBack` | `var topbarBack =` |
| 11,495 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 11,502_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,503 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 11,664_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,665 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 11,683_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 11,686 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 11,707_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,713 | `hubDetailIdx` | `var hubDetailIdx =` |
| 11,716 | `hubSet` | `function hubSet(` |
| 11,729 | `quarterPopup` | `function quarterPopup(` |
| 11,762 | `hubShowDefault` | `function hubShowDefault(` |
| 11,771 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,777 | `hubShowYear` | `function hubShowYear(` |
| 11,792 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,884_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,887 | `tempState` | `var tempState =` |
| 11,890 | `chartLink` | `var chartLink =` |
| 11,910 | `m2Step` | `function m2Step(` |
| 11,913 | `heatStep` | `function heatStep(` |
| 11,917 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 12,104_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,107 | `drawGrowth` | `function drawGrowth(` |
| 12,246 | `wireResize` | `function wireResize(` |
| 12,252 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 12,264_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,265 | `renderCycleView` | `function renderCycleView(` |
| 12,318 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 12,329 | `PEER_CARET` | `var PEER_CARET =` |
| 12,330 | `peerList` | `function peerList(` |
| 12,331 | `peerChosen` | `function peerChosen(` |
| 12,332 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 12,336 | `renderPeerPills` | `function renderPeerPills(` |
| 12,386 | `shownEraModel` | `var shownEraModel =` |
| 12,387 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 12,389_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,391 | `stripGroupName` | `var stripGroupName =` |
| 12,392 | `seasonStripHtml` | `function seasonStripHtml(` |
| 12,438 | `marketStripHtml` | `function marketStripHtml(` |
| 12,501 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 12,502 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 12,532_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 12,533 | `renderCycleList` | `function renderCycleList(` |
| 12,623 | `renderSignsList` | `function renderSignsList(` |
| 12,908 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 14,189_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,190 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 14,252_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,253 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 14,286_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 14,287 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 4,075–4,078 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,566–8,579 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 9,390–9,403 | `seasonTrackAll` | The season, computed |
| 9,425–9,429 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 13,649 |
| `desire-range` | 10,424 |
| `fear-range` | 11,237 |
| `hormones-range` | 10,974 |
| `hzn-range` | 10,528 |
| `hzn-spread` | 10,522 |
| `pressure-range` | 11,114 |
| `pulse-range` | 10,375 |
| `sheet-marker-deficit` | 13,646 |
| `sheet-metric-gdp` | 13,530 |
| `sheet-metric-households` | 13,680 |
| `sheet-metric-power` | 13,609 |
| `sheet-metric-temp` | 13,480 |
| `sheet-metric-valuation` | 13,725 |
| `sheet-sign-activity` | 13,591 |
| `sheet-sign-desire` | 10,425 |
| `sheet-sign-horizon` | 10,529 |
| `sheet-sign-hormones` | 10,977 |
| `sheet-sign-pressure` | 11,115 |
| `sheet-sign-pulse` | 10,374 |
| `sheet-sign-sentiment` | 11,242 |
| `sheet-sign-volume` | 10,398 |
| `volume-range` | 10,399 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 13,655 |
| `desire-range` | 10,407 |
| `fear-range` | 11,194 |
| `hzn-range` | 10,453 |
| `pulse-range` | 10,352 |
| `sheet-metric-gdp` | 13,531 |
| `sheet-metric-power` | 13,610 |
| `sheet-metric-temp` | 13,481 |
| `sheet-metric-valuation` | 13,726 |
| `volume-range` | 10,379 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,256 |
| `sheet-metric-gdp` | 6,257 |
| `sheet-sign-activity` | 6,264 |
| `sheet-metric-power` | 6,265 |
| `sheet-metric-valuation` | 6,267 |
| `sheet-metric-households` | 6,268 |
| `deficit-range` | 6,269 |
| `volume-range` | 6,270 |
| `pulse-range` | 6,271 |
| `hzn-range` | 6,277 |
| `desire-range` | 6,278 |
| `fear-range` | 6,279 |
| `hormones-range` | 6,280 |
| `pressure-range` | 6,281 |

## Stylesheet, section by section

| Line | Section |
|---|---|
| 192 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 325 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 423 | yearly calendar — one card per year, grouped into five eras |
| 430 | season strip |
| 483 | THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels \u2026 so if one day |
| 652 | tab bar (app-style segmented navigation) |
| 719 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 758 | temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per |
| 974 | journal (editorial content tab) |
| 980 | content tab: reading companion |
| 1,038 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 1,510 | Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different |
| 1,544 | Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the |
| 1,554 | Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a |
| 1,565 | Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure |
| 1,598 | Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever |
| 1,778 | Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that |
| 1,955 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,493 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,541 | hero: yield curve |
| 2,637 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,716 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,815 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,840 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,855 | long cycle (structural layer) |
| 2,896 | indicator grid |
| 2,939 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,956 | info icon + popover (progressive disclosure for longer notes) |
| 2,977 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 3,072 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (142), which is what the renderers fill:

| Line | id |
|---|---|
| 3,104 | `topbar-back` |
| 3,107 | `topbar-title` |
| 3,108 | `menu-btn` |
| 3,125 | `main` |
| 3,132 | `cycle-view` |
| 3,140 | `cycle-kicker` |
| 3,146 | `cycle-dial` |
| 3,148 | `season-wheel-hub-date` |
| 3,149 | `season-wheel-hub-theme` |
| 3,150 | `season-wheel-hub-detail` |
| 3,158 | `temp-card` |
| 3,160 | `temp-kicker` |
| 3,161 | `temp-sub` |
| 3,164 | `temp-svg` |
| 3,165 | `temp-tooltip` |
| 3,171 | `temp-stats` |
| 3,178 | `growth-card` |
| 3,181 | `growth-kicker` |
| 3,181 | `growth-phase` |
| 3,181 | `growth-sub` |
| 3,181 | `growth-peers` |
| 3,182 | `growth-svg` |
| 3,182 | `growth-tooltip` |
| 3,187 | `growth-stats` |
| 3,196 | `today-analysis` |
| 3,200 | `peek-row` |
| 3,204 | `sheet-metric-temp` |
| 3,205 | `temp-timing` |
| 3,206 | `temp-chart` |
| 3,208 | `temp-rangebar` |
| 3,210 | `temp-head` |
| 3,211 | `slot-temp` |
| 3,212 | `temp-history` |
| 3,213 | `temp-hist-tooltip` |
| 3,216 | `temp-trend` |
| 3,220 | `temp-highlights` |
| 3,223 | `sheet-metric-gdp` |
| 3,224 | `gdp-timing` |
| 3,225 | `gdp-chart` |
| 3,226 | `gdp-rangebar` |
| 3,228 | `gdp-head` |
| 3,229 | `slot-growth` |
| 3,230 | `gdp-history` |
| 3,231 | `gdp-hist-tooltip` |
| 3,232 | `gdp-yoy` |
| 3,242 | `gdp-trend` |
| 3,244 | `gdp-panel` |
| 3,249 | `subj-ring-gdp` |
| 3,251 | `subj-label-gdp` |
| 3,252 | `subj-value-gdp` |
| 3,253 | `subj-say-gdp` |
| 3,254 | `subj-spark-gdp` |
| 3,259 | `subj-ctx-gdp` |
| 3,262 | `gdp-highlights` |
| 3,270 | `sheet-metric-power` |
| 3,271 | `power-timing` |
| 3,272 | `power-head` |
| 3,273 | `power-chart` |
| 3,277 | `subj-ring-resilience` |
| 3,280 | `subj-value-resilience` |
| 3,281 | `subj-say-resilience` |
| 3,286 | `subj-ctx-resilience` |
| 3,290 | `longcycle-title` |
| 3,292 | `longcycle-tag` |
| 3,306 | `power-highlights` |
| 3,313 | `sheet-marker-deficit` |
| 3,319 | `sheet-metric-households` |
| 3,320 | `households-timing` |
| 3,321 | `households-chart` |
| 3,322 | `households-highlights` |
| 3,326 | `sheet-metric-valuation` |
| 3,327 | `valuation-timing` |
| 3,328 | `valuation-head` |
| 3,329 | `valuation-chart` |
| 3,333 | `subj-ring-valuation` |
| 3,336 | `subj-value-valuation` |
| 3,337 | `subj-say-valuation` |
| 3,342 | `subj-ctx-valuation` |
| 3,346 | `valuation-title` |
| 3,348 | `valuation-tag` |
| 3,355 | `valuation-highlights` |
| 3,379 | `subj-value-hormones` |
| 3,380 | `subj-say-hormones` |
| 3,388 | `hormones-history` |
| 3,398 | `hormones-insights` |
| 3,424 | `subj-value-horizon` |
| 3,425 | `subj-say-horizon` |
| 3,426 | `subj-spark-horizon` |
| 3,436 | `hzn-timeline` |
| 3,438 | `hzn-head` |
| 3,439 | `spread-history-shell` |
| 3,440 | `spread-history-svg` |
| 3,441 | `spread-history-tooltip` |
| 3,446 | `ylm-shell` |
| 3,447 | `ylm-svg` |
| 3,448 | `ylm-tooltip` |
| 3,451 | `hzn-trend` |
| 3,452 | `ylm-trend` |
| 3,454 | `horizon-insights` |
| 3,482 | `subj-value-pressure` |
| 3,483 | `subj-say-pressure` |
| 3,488 | `pressure-history` |
| 3,489 | `pressure-highlights` |
| 3,495 | `subj-ring-sentiment` |
| 3,498 | `subj-value-sentiment` |
| 3,499 | `subj-say-sentiment` |
| 3,500 | `subj-spark-sentiment` |
| 3,514 | `fear-history` |
| 3,515 | `curve-highlights` |
| 3,529 | `signs-list` |
| 3,540 | `calendar-list` |
| 3,545 | `indicators-peek` |
| 3,591 | `cycle-list` |
| 3,597 | `cycle-more` |
| 3,598 | `cycle-more-label` |
| 3,607 | `calendar-cycle` |
| 3,608 | `calendar-cycle-slot` |
| 3,659 | `seasons-kicker` |
| 3,660 | `seasons-rows` |
| 3,664 | `framework-kicker` |
| 3,666 | `framework-rows` |
| 3,673 | `more-menu` |
| 3,676 | `menu-back` |
| 3,690 | `sources-open` |
| 3,698 | `appearance-current` |
| 3,706 | `sheet-howto` |
| 3,750 | `sheet-book` |
| 3,782 | `sheet-appearance` |
| 3,790 | `theme-toggle` |
| 3,797 | `sheet-contact` |
| 3,806 | `contact-form` |
| 3,807 | `contact-title` |
| 3,808 | `contact-message` |
| 3,810 | `contact-hint` |
| 3,811 | `contact-send` |
| 3,820 | `sheet-sources` |
| 3,823 | `sources-back` |
| 3,830 | `asof-text` |
| 3,831 | `sources-groups` |
| 3,838 | `detail-backdrop` |
| 3,840 | `detail-modal-close` |
| 3,841 | `detail-modal-body` |

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

