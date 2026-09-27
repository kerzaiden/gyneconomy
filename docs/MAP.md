# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **13,596 lines**, about 1113 KB, roughly **316 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -rn 'function curveVerdict(' src/` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `5c676ac` on 2026-09-27.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–3,005 | the whole stylesheet, every token and rule |
| **Markup** | 3,006–3,728 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,729–13,543 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,544–13,596 | </body></html> |

Counts: **247** top-level functions, **177** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,734_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,738 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,739 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,740 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,758 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,762 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,767_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,777 | `wheelMeta` | `var wheelMeta =` |
| 3,788 | `seasonOverride` | `var seasonOverride =` |
| 3,791 | `cycleNowNote` | `var cycleNowNote =` |
| 3,800 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,886 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,931 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,944_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,961 | `LIVE` | `function LIVE(` |
| 3,988 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,996 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 3,997 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 4,000_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,031 | `repaintFigureText` | `function repaintFigureText(` |
| 4,039 | `repaintTag` | `function repaintTag(` |
| 4,049 | `repaintFearCurve` | `function repaintFearCurve(` |
| 4,074 | `repaintYieldRow` | `function repaintYieldRow(` |
| 4,082 | `repaintValuationRow` | `function repaintValuationRow(` |
| 4,090 | `REPAINT` | `var REPAINT =` |
| 4,107 | `liveAsOf` | `var liveAsOf =` |
| 4,108 | `fmtAsOf` | `function fmtAsOf(` |
| 4,113 | `applyLive` | `function applyLive(` |
| 4,189 | `repaintPolicy` | `function repaintPolicy(` |
| 4,239 | `GYN` | `var GYN =` |
| 4,259 | `refreshLiveData` | `function refreshLiveData(` |
| 4,300 | `fetchSiteData` | `function fetchSiteData(` |
| 4,330 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,344_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,345 | `yieldCurve` | `var yieldCurve =` |
| 4,358 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,382 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,394 | `t10y2yHistory` | `var t10y2yHistory =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,422_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,427 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,451 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,475 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,499 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,526 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,551_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,560 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,570 | `uninvLagToday` | `var uninvLagToday =` |
| 4,582 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,595 | `gdpPeers` | `var gdpPeers =` |
| 4,636 | `gdpSrc` | `var gdpSrc =` |
| 4,637 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,642 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,655 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,693_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,715 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,725_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,741 | `stressScoreFor` | `function stressScoreFor(` |
| 4,747 | `stressScore` | `var stressScore =` |
| 4,753 | `powerOf` | `var powerOf =` |
| 4,754 | `powerScore` | `var powerScore =` |
| 4,771 | `stressHistory` | `var stressHistory =` |
| 4,782 | `powerMeter` | `var powerMeter =` |
| 4,784 | `stressNoteFull` | `var stressNoteFull =` |
| 4,816 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,818_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,841 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,842 | `deficitHistory` | `var deficitHistory =` |
| 4,845 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,852 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,854 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,897_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,910 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,923_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,937 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,940 | `timelineSpan` | `function timelineSpan(` |
| 4,946 | `timelineFor` | `function timelineFor(` |
| 4,959 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,965_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,971 | `windowScale` | `function windowScale(` |
| 4,987 | `windowYears` | `function windowYears(` |
| 5,005 | `refName` | `function refName(` |
| 5,012 | `histReadEnsure` | `function histReadEnsure(` |
| 5,051 | `seatBandReading` | `function seatBandReading(` |
| 5,074 | `histReadFill` | `function histReadFill(` |
| 5,202 | `histAxisEnds` | `function histAxisEnds(` |
| 5,213 | `histLegend` | `function histLegend(` |
| 5,292 | `wireHistHover` | `function wireHistHover(` |
| 5,351 | `mWindowFrom` | `function mWindowFrom(` |
| 5,356 | `qWindowFrom` | `function qWindowFrom(` |
| 5,361 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,362 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,364 | `DEF_1983` | `var DEF_1983 =` |
| 5,366 | `defFrom` | `function defFrom(` |
| 5,377 | `deficitChart` | `function deficitChart(` |
| 5,467 | `deficitBlock` | `function deficitBlock(` |
| 5,529 | `buffettHistory` | `var buffettHistory =` |
| 5,559 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,560 | `hyDates` | `var hyDates =` |
| 5,561 | `hyOas` | `var hyOas =` |
| 5,562 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,569 | `hyAt` | `function hyAt(` |
| 5,573 | `hyLabel` | `function hyLabel(` |
| 5,574 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,575 | `hyNum` | `function hyNum(` |
| 5,576 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,586 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,596 | `capeHistory` | `var capeHistory =` |
| 5,598 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,616_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,622 | `sentiment` | `var sentiment =` |
| 5,640 | `valuation` | `var valuation =` |
| 5,677 | `valRow` | `function valRow(` |
| 5,685 | `coincident` | `var coincident =` |
| 5,746 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,764 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,765 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,766 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,768_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,781 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,782 | `m2vHistory` | `var m2vHistory =` |
| 5,802 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,895 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,985 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,986 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 6,026_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,032 | `HIST_NOTE` | `var HIST_NOTE =` |
| 6,033 | `DOTS` | `var DOTS =` |
| 6,035 | `HIST_HEAD` | `var HIST_HEAD =` |
| 6,060 | `histHead` | `function histHead(` |
| 6,081 | `headNoteIdx` | `var headNoteIdx =` |
| 6,082 | `headMenuHtml` | `function headMenuHtml(` |
| 6,102 | `headMenuFor` | `var headMenuFor =` |
| 6,103 | `paintHeadMenus` | `function paintHeadMenus(` |
| 6,129 | `nameWithMark` | `function nameWithMark(` |
| 6,135 | `panelRow` | `function panelRow(` |
| 6,161 | `panelFromMeter` | `function panelFromMeter(` |
| 6,175 | `meterFlagged` | `function meterFlagged(` |
| 6,186 | `desireInfoHtml` | `function desireInfoHtml(` |
| 6,214 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 6,228 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 6,247 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,266 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,280 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,305 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,336 | `desireBlock` | `function desireBlock(` |
| 6,363 | `volumeBlock` | `function volumeBlock(` |
| 6,388 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,411 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,419_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,432 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,433 | `m2Level` | `var m2Level =` |
| 6,455 | `m2Yoy` | `var m2Yoy =` |
| 6,456 | `M2_NORM` | `var M2_NORM =` |
| 6,461 | `volumeVerdict` | `function volumeVerdict(` |
| 6,498 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,499 | `unempHistory` | `var unempHistory =` |
| 6,505 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,520 | `NROU_NOW` | `var NROU_NOW =` |
| 6,521 | `unempState` | `function unempState(` |
| 6,527 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,592 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,593 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,596 | `qAtIndex` | `function qAtIndex(` |
| 6,597 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,605_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,620 | `householdsChart` | `function householdsChart(` |
| 6,688 | `lastChartAvg` | `var lastChartAvg =` |
| 6,689 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,774 | `GDP_NORM` | `var GDP_NORM =` |
| 6,780 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,781 | `gdpNowQ` | `var gdpNowQ =` |
| 6,782 | `gdpMeter` | `var gdpMeter =` |
| 6,785 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,807 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,873 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,937 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,945 | `velocityVerdict` | `function velocityVerdict(` |
| 6,953 | `derivePulseTag` | `function derivePulseTag(` |
| 6,959 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 7,019_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,028 | `seasonReading` | `var seasonReading =` |
| 7,077 | `frameworkRows` | `var frameworkRows =` |
| 7,087 | `vixRow` | `var vixRow =` |
| 7,095 | `vixWordOf` | `var vixWordOf =` |
| 7,099 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 7,114_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 7,118 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 7,127_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,128 | `calendarTodayY` | `var calendarTodayY =` |
| 7,159 | `vix3mClose` | `var vix3mClose =` |
| 7,160 | `fearCurve` | `function fearCurve(` |
| 7,167 | `curveVerdict` | `function curveVerdict(` |
| 7,174 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 7,179 | `valuationVerdict` | `function valuationVerdict(` |
| 7,197 | `sparkHtml` | `function sparkHtml(` |
| 7,216 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 7,222_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,235 | `modeBar` | `function modeBar(` |
| 7,250 | `pickerOpen` | `var pickerOpen =` |
| 7,254 | `cycleByName` | `function cycleByName(` |
| 7,258 | `openCycle` | `function openCycle(` |
| 7,264 | `cycleSlice` | `function cycleSlice(` |
| 7,273 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,281 | `cycleMonths` | `function cycleMonths(` |
| 7,300 | `histControls` | `function histControls(` |
| 7,314 | `cycLabel` | `function cycLabel(` |
| 7,330 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,339 | `cyclePicker` | `function cyclePicker(` |
| 7,363 | `seriesBar` | `function seriesBar(` |
| 7,370 | `rangeBar` | `function rangeBar(` |
| 7,382 | `trendOf` | `function trendOf(` |
| 7,427 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,437 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,458_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,459 | `yearOf` | `function yearOf(` |
| 7,460 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,461_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,491 | `totalStat` | `function totalStat(` |
| 7,497 | `atQuarter` | `function atQuarter(` |
| 7,498 | `atMonth` | `function atMonth(` |
| 7,499 | `cycleAverages` | `function cycleAverages(` |
| 7,506 | `ordinal` | `function ordinal(` |
| 7,507 | `hiCard` | `function hiCard(` |
| 7,518 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,532_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,539 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,555 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,562 | `moreRow` | `function moreRow(` |
| 7,568 | `powerPageNote` | `var powerPageNote =` |
| 7,569 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,575_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,578 | `xLabelOf` | `function xLabelOf(` |
| 7,598 | `fitGroup` | `function fitGroup(` |
| 7,620 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,679_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,703 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,713 | `vGrid` | `function vGrid(` |
| 7,738 | `COL_FILL` | `var COL_FILL =` |
| 7,771 | `colPath` | `function colPath(` |
| 7,776 | `colWidth` | `function colWidth(` |
| 7,823 | `AXIS` | `var AXIS =` |
| 7,824 | `chartAxes` | `function chartAxes(` |
| 7,878 | `divergeChart` | `function divergeChart(` |
| 7,939 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,968_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,976 | `maxIn` | `function maxIn(` |
| 7,989 | `reserveGauge` | `function reserveGauge(` |
| 8,010 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 8,024 | `PEEK_W` | `var PEEK_W =` |
| 8,027 | `PEEK_H` | `var PEEK_H =` |
| 8,028 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 8,033 | `colPeek` | `function colPeek(` |
| 8,060 | `meterPeek` | `function meterPeek(` |
| 8,077 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 8,082 | `pressureZone` | `function pressureZone(` |
| 8,097 | `HZN_BACK` | `var HZN_BACK =` |
| 8,098 | `hznLast` | `function hznLast(` |
| 8,099 | `hznBack` | `function hznBack(` |
| 8,100 | `horizonWord` | `function horizonWord(` |
| 8,125 | `HZN_METERS` | `var HZN_METERS =` |
| 8,133 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 8,157 | `_hznPanel` | `var _hznPanel =` |
| 8,158 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 8,178 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 8,179 | `levelZone` | `function levelZone(` |
| 8,191 | `RISK_REWARD` | `var RISK_REWARD =` |
| 8,196 | `RISK_RISK` | `var RISK_RISK =` |
| 8,201 | `riskCell` | `function riskCell(` |
| 8,202 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 8,233 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 8,258_ · 29 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,277 | `pulseClipN` | `var pulseClipN =` |
| 8,278 | `beatPath` | `function beatPath(` |
| 8,303 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 8,317 | `pulsePeek` | `function pulsePeek(` |
| 8,325 | `pulseBlock` | `function pulseBlock(` |
| 8,345 | `CHEV` | `var CHEV =` |
| 8,347 | `peekCard` | `function peekCard(` |
| 8,398 | `dropSvg` | `function dropSvg(` |
| 8,406 | `speakerSvg` | `function speakerSvg(` |
| 8,414 | `gaugeSvg` | `function gaugeSvg(` |
| 8,418 | `diamondSvg` | `function diamondSvg(` |
| 8,430 | `energyFromReserve` | `function energyFromReserve(` |
| 8,442 | `sproutSvg` | `function sproutSvg(` |
| 8,453 | `markSvg` | `function markSvg(` |
| 8,457 | `flameSvg` | `function flameSvg(` |
| 8,461 | `gearSvg` | `function gearSvg(` |
| 8,474 | `pulseSvg` | `function pulseSvg(` |
| 8,478 | `thermoSvg` | `function thermoSvg(` |
| 8,497 | `trendUpSvg` | `function trendUpSvg(` |
| 8,499 | `ecgSvg` | `function ecgSvg(` |
| 8,513 | `circulationSvg` | `function circulationSvg(` |
| 8,514 | `weatherSvg` | `function weatherSvg(` |
| 8,535 | `moodSvg` | `function moodSvg(` |
| 8,552 | `boltSvg` | `function boltSvg(` |
| 8,555 | `houseSvg` | `function houseSvg(` |
| 8,563 | `sunriseSvg` | `function sunriseSvg(` |
| 8,573 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,585 | `signMarks` | `var signMarks =` |
| 8,592 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,609_ · 26 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,630 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,631 | `dsrHistory` | `var dsrHistory =` |
| 8,632 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,633 | `savHistory` | `var savHistory =` |
| 8,638 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,648 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,649 | `dsrNow` | `var dsrNow =` |
| 8,650 | `savNow` | `var savNow =` |
| 8,651 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,656 | `householdsWord` | `function householdsWord(` |
| 8,663 | `householdsNow` | `var householdsNow =` |
| 8,670 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,671 | `dsrMeter` | `var dsrMeter =` |
| 8,674 | `savMeter` | `var savMeter =` |
| 8,677 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,694 | `savInfoHtml` | `function savInfoHtml(` |
| 8,712 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,721 | `curveNow` | `var curveNow =` |
| 8,722 | `curveTag` | `var curveTag =` |
| 8,723 | `curveSub` | `var curveSub =` |
| 8,727 | `curvePct` | `function curvePct(` |
| 8,728 | `curveNoteFull` | `var curveNoteFull =` |
| 8,743 | `curveDetailHtml` | `function curveDetailHtml(` |
| 8,751 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,792 | `marketCycles` | `var marketCycles =` |
| 8,822 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,824_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,845 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,846 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,851_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,872 | `slopeOf` | `function slopeOf(` |
| 8,883 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,889 | `readSeason` | `function readSeason(` |
| 8,914 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,916 | `qLabel` | `function qLabel(` |
| 8,940 | `regimeTrack` | `function regimeTrack(` |
| 8,963 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,965_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,972 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,973 | `seasonTitle` | `function seasonTitle(` |
| 8,974 | `monthLabel` | `function monthLabel(` |
| 8,975 | `cycleModel` | `function cycleModel(` |
| 9,027 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 9,035 | `seasonWhyFor` | `function seasonWhyFor(` |
| 9,042 | `nowModel` | `var nowModel =` |
| 9,043 | `readingNow` | `var readingNow =` |
| 9,044 | `cpiNow` | `var cpiNow =` |
| 9,045 | `growthSlopeQ` | `var growthSlopeQ =` |
| 9,046 | `currentSeason` | `var currentSeason =` |
| 9,047 | `seasonWhy` | `var seasonWhy =` |
| 9,064 | `seasonGroup` | `function seasonGroup(` |
| 9,078 | `arcGauge` | `function arcGauge(` |
| 9,117 | `vitalRingSvg` | `function vitalRingSvg(` |
| 9,130 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 9,132 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 9,136 | `policyFacts` | `function policyFacts(` |
| 9,148 | `allSources` | `var allSources =` |
| 9,172 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 9,205_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,208 | `SVG_NS` | `var SVG_NS =` |
| 9,209 | `svgEl` | `function svgEl(` |
| 9,222 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 9,258_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,259 | `clampPct` | `function clampPct(` |
| 9,266 | `infoIcon` | `function infoIcon(` |
| 9,275 | `detailTexts` | `var detailTexts =` |
| 9,293 | `detailSlots` | `var detailSlots =` |
| 9,294 | `detailSlot` | `function detailSlot(` |
| 9,305 | `powerPanelHtml` | `var powerPanelHtml =` |
| 9,309 | `_growthPanel` | `var _growthPanel =` |
| 9,310 | `growthPanelHtml` | `function growthPanelHtml(` |
| 9,316 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 9,327 | `facts` | `function facts(` |
| 9,328 | `factsFrom` | `function factsFrom(` |
| 9,332 | `expandBtn` | `function expandBtn(` |
| 9,338 | `sheetRenderers` | `var sheetRenderers =` |
| 9,355 | `pageMode` | `var pageMode =` |
| 9,362 | `pageCycles` | `var pageCycles =` |
| 9,367 | `pageRange` | `var pageRange =` |
| 9,373 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,407_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,418 | `meterHtml` | `function meterHtml(` |
| 9,446 | `srcHtml` | `function srcHtml(` |
| 9,455 | `TIMING` | `var TIMING =` |
| 9,461 | `timingMark` | `function timingMark(` |
| 9,475 | `timingPill` | `function timingPill(` |
| 9,496 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,504 | `seatPageFoot` | `function seatPageFoot(` |
| 9,527 | `timingMembers` | `var timingMembers =` |
| 9,528 | `registerTiming` | `function registerTiming(` |
| 9,534 | `headHtml` | `function headHtml(` |
| 9,552 | `heldHighlights` | `var heldHighlights =` |
| 9,553 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,611_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,612 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,985_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,986 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 10,209_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,210 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 10,242_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,248 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 10,332_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,333 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 10,351_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,354 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the fear curve, then the VIX it is half of

_line 10,377_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,378 | `renderFearCurve` | `function renderFearCurve(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,429_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,432 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,625_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,637 | `totalRiseIn` | `function totalRiseIn(` |
| 10,647 | `eraInflation` | `function eraInflation(` |
| 10,658 | `eraGrowth` | `function eraGrowth(` |
| 10,674 | `fmtSigned` | `function fmtSigned(` |
| 10,679 | `regimeArrow` | `function regimeArrow(` |
| 10,685 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,686 | `growthShown` | `function growthShown(` |
| 10,687 | `growthShownCap` | `function growthShownCap(` |
| 10,688 | `regimeState` | `function regimeState(` |
| 10,692 | `phaseClass` | `function phaseClass(` |
| 10,694 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,706 | `cycleViewEl` | `var cycleViewEl =` |
| 10,710 | `tempCard` | `var tempCard =` |
| 10,711 | `placeCharts` | `function placeCharts(` |
| 10,716 | `shownEra` | `var shownEra =` |
| 10,717 | `calendarReset` | `var calendarReset =` |
| 10,718 | `metricPageReset` | `var metricPageReset =` |
| 10,719 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,722 | `topbarBack` | `var topbarBack =` |
| 10,723 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,730_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,731 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,892_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,893 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,911_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,914 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,935_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,941 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,944 | `hubSet` | `function hubSet(` |
| 10,957 | `quarterPopup` | `function quarterPopup(` |
| 10,990 | `hubShowDefault` | `function hubShowDefault(` |
| 10,999 | `hubShowQuarter` | `function hubShowQuarter(` |
| 11,005 | `hubShowYear` | `function hubShowYear(` |
| 11,020 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 11,112_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,115 | `tempState` | `var tempState =` |
| 11,118 | `chartLink` | `var chartLink =` |
| 11,138 | `m2Step` | `function m2Step(` |
| 11,141 | `heatStep` | `function heatStep(` |
| 11,145 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 11,332_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,335 | `drawGrowth` | `function drawGrowth(` |
| 11,474 | `wireResize` | `function wireResize(` |
| 11,480 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,492_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,493 | `renderCycleView` | `function renderCycleView(` |
| 11,546 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,557 | `PEER_CARET` | `var PEER_CARET =` |
| 11,558 | `peerList` | `function peerList(` |
| 11,559 | `peerChosen` | `function peerChosen(` |
| 11,560 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,564 | `renderPeerPills` | `function renderPeerPills(` |
| 11,614 | `shownEraModel` | `var shownEraModel =` |
| 11,615 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,617_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,619 | `stripGroupName` | `var stripGroupName =` |
| 11,620 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,666 | `marketStripHtml` | `function marketStripHtml(` |
| 11,729 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,730 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,760_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,761 | `renderCycleList` | `function renderCycleList(` |
| 11,851 | `renderSignsList` | `function renderSignsList(` |
| 12,107 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 13,342_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,343 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 13,405_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,406 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,439_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,440 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,957–3,960 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 8,106–8,119 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,923–8,936 | `seasonTrackAll` | The season, computed |
| 8,958–8,962 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,813 |
| `desire-range` | 9,931 |
| `hzn-range` | 10,281 |
| `pulse-range` | 9,882 |
| `sheet-marker-deficit` | 12,810 |
| `sheet-metric-gdp` | 12,698 |
| `sheet-metric-households` | 12,844 |
| `sheet-metric-power` | 12,777 |
| `sheet-metric-temp` | 12,648 |
| `sheet-metric-valuation` | 12,885 |
| `sheet-sign-activity` | 12,759 |
| `sheet-sign-desire` | 9,932 |
| `sheet-sign-horizon` | 10,282 |
| `sheet-sign-pulse` | 9,881 |
| `sheet-sign-volume` | 9,905 |
| `sheet-sign-yield` | 9,849 |
| `volume-range` | 9,906 |
| `ylm-range` | 9,977 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,819 |
| `desire-range` | 9,914 |
| `hzn-range` | 10,258 |
| `pulse-range` | 9,859 |
| `sheet-metric-gdp` | 12,699 |
| `sheet-metric-power` | 12,778 |
| `sheet-metric-temp` | 12,649 |
| `sheet-metric-valuation` | 12,886 |
| `volume-range` | 9,886 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 6,036 |
| `sheet-metric-gdp` | 6,037 |
| `sheet-sign-activity` | 6,038 |
| `sheet-metric-power` | 6,039 |
| `sheet-metric-valuation` | 6,041 |
| `sheet-metric-households` | 6,042 |
| `deficit-range` | 6,043 |
| `volume-range` | 6,044 |
| `pulse-range` | 6,045 |
| `hzn-range` | 6,046 |
| `ylm-range` | 6,057 |
| `desire-range` | 6,058 |

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
| 1,935 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,400 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,448 | hero: yield curve |
| 2,544 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,623 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,722 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,747 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,762 | long cycle (structural layer) |
| 2,803 | indicator grid |
| 2,846 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,863 | info icon + popover (progressive disclosure for longer notes) |
| 2,884 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,979 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (146), which is what the renderers fill:

| Line | id |
|---|---|
| 3,011 | `topbar-back` |
| 3,014 | `topbar-title` |
| 3,015 | `menu-btn` |
| 3,032 | `main` |
| 3,039 | `cycle-view` |
| 3,047 | `cycle-kicker` |
| 3,053 | `cycle-dial` |
| 3,055 | `season-wheel-hub-date` |
| 3,056 | `season-wheel-hub-theme` |
| 3,057 | `season-wheel-hub-detail` |
| 3,065 | `temp-card` |
| 3,067 | `temp-kicker` |
| 3,068 | `temp-sub` |
| 3,071 | `temp-svg` |
| 3,072 | `temp-tooltip` |
| 3,078 | `temp-stats` |
| 3,085 | `growth-card` |
| 3,088 | `growth-kicker` |
| 3,088 | `growth-phase` |
| 3,088 | `growth-sub` |
| 3,088 | `growth-peers` |
| 3,089 | `growth-svg` |
| 3,089 | `growth-tooltip` |
| 3,094 | `growth-stats` |
| 3,103 | `today-analysis` |
| 3,107 | `peek-row` |
| 3,111 | `sheet-metric-temp` |
| 3,112 | `temp-timing` |
| 3,113 | `temp-chart` |
| 3,115 | `temp-rangebar` |
| 3,117 | `temp-head` |
| 3,118 | `slot-temp` |
| 3,119 | `temp-history` |
| 3,120 | `temp-hist-tooltip` |
| 3,123 | `temp-trend` |
| 3,126 | `temp-panel` |
| 3,128 | `temp-highlights` |
| 3,131 | `sheet-metric-gdp` |
| 3,132 | `gdp-timing` |
| 3,133 | `gdp-chart` |
| 3,134 | `gdp-rangebar` |
| 3,136 | `gdp-head` |
| 3,137 | `slot-growth` |
| 3,138 | `gdp-history` |
| 3,139 | `gdp-hist-tooltip` |
| 3,140 | `gdp-yoy` |
| 3,150 | `gdp-trend` |
| 3,152 | `gdp-panel` |
| 3,157 | `subj-ring-gdp` |
| 3,159 | `subj-label-gdp` |
| 3,160 | `subj-value-gdp` |
| 3,161 | `subj-say-gdp` |
| 3,162 | `subj-spark-gdp` |
| 3,167 | `subj-ctx-gdp` |
| 3,170 | `gdp-highlights` |
| 3,178 | `sheet-metric-power` |
| 3,179 | `power-timing` |
| 3,180 | `power-head` |
| 3,181 | `power-chart` |
| 3,185 | `subj-ring-resilience` |
| 3,188 | `subj-value-resilience` |
| 3,189 | `subj-say-resilience` |
| 3,194 | `subj-ctx-resilience` |
| 3,198 | `longcycle-title` |
| 3,200 | `longcycle-tag` |
| 3,214 | `power-highlights` |
| 3,221 | `sheet-marker-deficit` |
| 3,227 | `sheet-metric-households` |
| 3,228 | `households-timing` |
| 3,229 | `households-chart` |
| 3,230 | `households-highlights` |
| 3,234 | `sheet-metric-valuation` |
| 3,235 | `valuation-timing` |
| 3,236 | `valuation-head` |
| 3,237 | `valuation-chart` |
| 3,241 | `subj-ring-valuation` |
| 3,244 | `subj-value-valuation` |
| 3,245 | `subj-say-valuation` |
| 3,250 | `subj-ctx-valuation` |
| 3,254 | `valuation-title` |
| 3,256 | `valuation-tag` |
| 3,263 | `valuation-highlights` |
| 3,269 | `subj-ring-yield` |
| 3,272 | `subj-value-yield` |
| 3,273 | `subj-say-yield` |
| 3,274 | `subj-spark-yield` |
| 3,305 | `ylm-series` |
| 3,310 | `ylm-head` |
| 3,311 | `ylm-shell` |
| 3,312 | `ylm-svg` |
| 3,313 | `ylm-tooltip` |
| 3,316 | `ylm-trend` |
| 3,319 | `pressure-insights` |
| 3,320 | `pressure-highlights` |
| 3,346 | `subj-value-horizon` |
| 3,347 | `subj-say-horizon` |
| 3,348 | `subj-spark-horizon` |
| 3,358 | `hzn-timeline` |
| 3,360 | `hzn-head` |
| 3,361 | `spread-history-shell` |
| 3,362 | `spread-history-svg` |
| 3,363 | `spread-history-tooltip` |
| 3,366 | `hzn-trend` |
| 3,368 | `hzn-panel` |
| 3,370 | `horizon-insights` |
| 3,371 | `horizon-highlights` |
| 3,378 | `subj-ring-sentiment` |
| 3,381 | `subj-value-sentiment` |
| 3,382 | `subj-say-sentiment` |
| 3,383 | `subj-spark-sentiment` |
| 3,395 | `curve-gauge` |
| 3,396 | `curve-vix` |
| 3,397 | `curve-highlights` |
| 3,411 | `signs-list` |
| 3,422 | `calendar-list` |
| 3,427 | `indicators-peek` |
| 3,473 | `cycle-list` |
| 3,479 | `cycle-more` |
| 3,480 | `cycle-more-label` |
| 3,489 | `calendar-cycle` |
| 3,490 | `calendar-cycle-slot` |
| 3,541 | `seasons-kicker` |
| 3,542 | `seasons-rows` |
| 3,546 | `framework-kicker` |
| 3,548 | `framework-rows` |
| 3,555 | `more-menu` |
| 3,558 | `menu-back` |
| 3,572 | `sources-open` |
| 3,580 | `appearance-current` |
| 3,588 | `sheet-howto` |
| 3,632 | `sheet-book` |
| 3,664 | `sheet-appearance` |
| 3,672 | `theme-toggle` |
| 3,679 | `sheet-contact` |
| 3,688 | `contact-form` |
| 3,689 | `contact-title` |
| 3,690 | `contact-message` |
| 3,692 | `contact-hint` |
| 3,693 | `contact-send` |
| 3,702 | `sheet-sources` |
| 3,705 | `sources-back` |
| 3,712 | `asof-text` |
| 3,713 | `sources-groups` |
| 3,720 | `detail-backdrop` |
| 3,722 | `detail-modal-close` |
| 3,723 | `detail-modal-body` |

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

