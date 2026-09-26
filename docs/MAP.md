# Map of `index.html`

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

`index.html` is **13,040 lines**, about 1065 KB, roughly **302 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -n 'function moodFrom(' index.html` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `46881a2` on 2026-09-26.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,905 | the whole stylesheet, every token and rule |
| **Markup** | 2,906–3,631 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,632–13,016 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,017–13,040 | </body></html> |

Counts: **242** top-level functions, **178** top-level vars, **4** top-level IIFEs in the script.

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

_line 3,884_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,915 | `repaintFigureText` | `function repaintFigureText(` |
| 3,923 | `repaintTag` | `function repaintTag(` |
| 3,931 | `repaintSentiment` | `function repaintSentiment(` |
| 3,942 | `repaintYieldRow` | `function repaintYieldRow(` |
| 3,950 | `repaintValuationRow` | `function repaintValuationRow(` |
| 3,958 | `REPAINT` | `var REPAINT =` |
| 3,974 | `liveAsOf` | `var liveAsOf =` |
| 3,975 | `fmtAsOf` | `function fmtAsOf(` |
| 3,980 | `applyLive` | `function applyLive(` |
| 4,026 | `repaintPolicy` | `function repaintPolicy(` |
| 4,065 | `GYN` | `var GYN =` |
| 4,085 | `refreshLiveData` | `function refreshLiveData(` |
| 4,126 | `fetchSiteData` | `function fetchSiteData(` |
| 4,156 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,170_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,171 | `yieldCurve` | `var yieldCurve =` |
| 4,184 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,208 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,215 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 4,221 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,248 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,250_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,255 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,279 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,303 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,327 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,354 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,379_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,388 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,398 | `uninvLagToday` | `var uninvLagToday =` |
| 4,410 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,423 | `gdpPeers` | `var gdpPeers =` |
| 4,464 | `gdpSrc` | `var gdpSrc =` |
| 4,465 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,470 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,483 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,521_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,543 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,553_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,569 | `stressScoreFor` | `function stressScoreFor(` |
| 4,575 | `stressScore` | `var stressScore =` |
| 4,581 | `powerOf` | `var powerOf =` |
| 4,582 | `powerScore` | `var powerScore =` |
| 4,599 | `stressHistory` | `var stressHistory =` |
| 4,610 | `powerMeter` | `var powerMeter =` |
| 4,612 | `stressNoteFull` | `var stressNoteFull =` |
| 4,644 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,646_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,669 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,670 | `deficitHistory` | `var deficitHistory =` |
| 4,673 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,680 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,682 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,725_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,738 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,751_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,765 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,768 | `timelineSpan` | `function timelineSpan(` |
| 4,774 | `timelineFor` | `function timelineFor(` |
| 4,787 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,793_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,799 | `windowScale` | `function windowScale(` |
| 4,815 | `windowYears` | `function windowYears(` |
| 4,833 | `refName` | `function refName(` |
| 4,840 | `histReadEnsure` | `function histReadEnsure(` |
| 4,871 | `seatBandReading` | `function seatBandReading(` |
| 4,894 | `histReadFill` | `function histReadFill(` |
| 4,930 | `wireHistHover` | `function wireHistHover(` |
| 4,989 | `mWindowFrom` | `function mWindowFrom(` |
| 4,994 | `qWindowFrom` | `function qWindowFrom(` |
| 4,999 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,000 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,002 | `DEF_1983` | `var DEF_1983 =` |
| 5,004 | `defFrom` | `function defFrom(` |
| 5,015 | `deficitChart` | `function deficitChart(` |
| 5,105 | `deficitBlock` | `function deficitBlock(` |
| 5,167 | `buffettHistory` | `var buffettHistory =` |
| 5,197 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,198 | `hyDates` | `var hyDates =` |
| 5,199 | `hyOas` | `var hyOas =` |
| 5,200 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,207 | `hyAt` | `function hyAt(` |
| 5,211 | `hyLabel` | `function hyLabel(` |
| 5,212 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,213 | `hyNum` | `function hyNum(` |
| 5,214 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,224 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,234 | `capeHistory` | `var capeHistory =` |
| 5,236 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,254_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,260 | `sentiment` | `var sentiment =` |
| 5,278 | `valuation` | `var valuation =` |
| 5,315 | `valRow` | `function valRow(` |
| 5,323 | `coincident` | `var coincident =` |
| 5,384 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,402 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,403 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,404 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,406_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,419 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,420 | `m2vHistory` | `var m2vHistory =` |
| 5,440 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,539 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,640 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,641 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 5,681_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,687 | `HIST_NOTE` | `var HIST_NOTE =` |
| 5,688 | `DOTS` | `var DOTS =` |
| 5,690 | `HIST_HEAD` | `var HIST_HEAD =` |
| 5,715 | `histHead` | `function histHead(` |
| 5,733 | `headNoteIdx` | `var headNoteIdx =` |
| 5,734 | `headMenuHtml` | `function headMenuHtml(` |
| 5,754 | `headMenuFor` | `var headMenuFor =` |
| 5,755 | `paintHeadMenus` | `function paintHeadMenus(` |
| 5,781 | `nameWithMark` | `function nameWithMark(` |
| 5,787 | `panelRow` | `function panelRow(` |
| 5,811 | `panelFromMeter` | `function panelFromMeter(` |
| 5,825 | `meterFlagged` | `function meterFlagged(` |
| 5,836 | `desireInfoHtml` | `function desireInfoHtml(` |
| 5,864 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 5,878 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 5,897 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 5,916 | `outputInfoHtml` | `function outputInfoHtml(` |
| 5,930 | `activityInfoHtml` | `function activityInfoHtml(` |
| 5,955 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 5,986 | `desireBlock` | `function desireBlock(` |
| 6,013 | `volumeBlock` | `function volumeBlock(` |
| 6,038 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,061 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,069_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,082 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,083 | `m2Level` | `var m2Level =` |
| 6,105 | `m2Yoy` | `var m2Yoy =` |
| 6,106 | `M2_NORM` | `var M2_NORM =` |
| 6,111 | `volumeVerdict` | `function volumeVerdict(` |
| 6,148 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,149 | `unempHistory` | `var unempHistory =` |
| 6,155 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,170 | `NROU_NOW` | `var NROU_NOW =` |
| 6,171 | `unempState` | `function unempState(` |
| 6,177 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,237 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,238 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,241 | `qAtIndex` | `function qAtIndex(` |
| 6,242 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,250_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,265 | `householdsChart` | `function householdsChart(` |
| 6,329 | `refKey` | `function refKey(` |
| 6,367 | `lastChartAvg` | `var lastChartAvg =` |
| 6,368 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,453 | `GDP_NORM` | `var GDP_NORM =` |
| 6,459 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,460 | `gdpNowQ` | `var gdpNowQ =` |
| 6,461 | `gdpMeter` | `var gdpMeter =` |
| 6,464 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,486 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,552 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,616 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,624 | `velocityVerdict` | `function velocityVerdict(` |
| 6,632 | `derivePulseTag` | `function derivePulseTag(` |
| 6,638 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,698_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,707 | `seasonReading` | `var seasonReading =` |
| 6,756 | `frameworkRows` | `var frameworkRows =` |
| 6,766 | `vixRow` | `var vixRow =` |
| 6,774 | `vixWordOf` | `var vixWordOf =` |
| 6,778 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 6,793_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,797 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 6,806_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,807 | `calendarTodayY` | `var calendarTodayY =` |
| 6,828 | `fearGreed` | `var fearGreed =` |
| 6,832 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 6,837 | `valuationVerdict` | `function valuationVerdict(` |
| 6,855 | `sparkHtml` | `function sparkHtml(` |
| 6,874 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 6,880_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,893 | `modeBar` | `function modeBar(` |
| 6,908 | `pickerOpen` | `var pickerOpen =` |
| 6,912 | `cycleByName` | `function cycleByName(` |
| 6,916 | `openCycle` | `function openCycle(` |
| 6,922 | `cycleSlice` | `function cycleSlice(` |
| 6,931 | `totalGrowthYears` | `function totalGrowthYears(` |
| 6,939 | `cycleMonths` | `function cycleMonths(` |
| 6,958 | `histControls` | `function histControls(` |
| 6,972 | `cycLabel` | `function cycLabel(` |
| 6,988 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 6,997 | `cyclePicker` | `function cyclePicker(` |
| 7,021 | `seriesBar` | `function seriesBar(` |
| 7,028 | `rangeBar` | `function rangeBar(` |
| 7,040 | `trendOf` | `function trendOf(` |
| 7,085 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,095 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,110_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,111 | `yearOf` | `function yearOf(` |
| 7,112 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,113_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,143 | `totalStat` | `function totalStat(` |
| 7,149 | `atQuarter` | `function atQuarter(` |
| 7,150 | `atMonth` | `function atMonth(` |
| 7,151 | `cycleAverages` | `function cycleAverages(` |
| 7,158 | `ordinal` | `function ordinal(` |
| 7,159 | `hiCard` | `function hiCard(` |
| 7,170 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,184_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,191 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,207 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,214 | `moreRow` | `function moreRow(` |
| 7,220 | `powerPageNote` | `var powerPageNote =` |
| 7,221 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,227_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,230 | `xLabelOf` | `function xLabelOf(` |
| 7,250 | `fitGroup` | `function fitGroup(` |
| 7,272 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,331_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,355 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,365 | `vGrid` | `function vGrid(` |
| 7,390 | `COL_FILL` | `var COL_FILL =` |
| 7,397 | `AXIS` | `var AXIS =` |
| 7,398 | `chartAxes` | `function chartAxes(` |
| 7,429 | `divergeChart` | `function divergeChart(` |
| 7,490 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,519_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,527 | `maxIn` | `function maxIn(` |
| 7,540 | `reserveGauge` | `function reserveGauge(` |
| 7,561 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,575 | `PEEK_W` | `var PEEK_W =` |
| 7,578 | `PEEK_H` | `var PEEK_H =` |
| 7,579 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,584 | `colPeek` | `function colPeek(` |
| 7,611 | `meterPeek` | `function meterPeek(` |
| 7,628 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,633 | `pressureZone` | `function pressureZone(` |
| 7,648 | `HZN_BACK` | `var HZN_BACK =` |
| 7,649 | `hznLast` | `function hznLast(` |
| 7,650 | `hznBack` | `function hznBack(` |
| 7,651 | `horizonWord` | `function horizonWord(` |
| 7,676 | `HZN_METERS` | `var HZN_METERS =` |
| 7,684 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 7,708 | `_hznPanel` | `var _hznPanel =` |
| 7,709 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 7,729 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 7,730 | `levelZone` | `function levelZone(` |
| 7,742 | `RISK_REWARD` | `var RISK_REWARD =` |
| 7,747 | `RISK_RISK` | `var RISK_RISK =` |
| 7,752 | `riskCell` | `function riskCell(` |
| 7,753 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 7,784 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 7,809_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,828 | `pulseClipN` | `var pulseClipN =` |
| 7,829 | `beatPath` | `function beatPath(` |
| 7,854 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 7,868 | `pulsePeek` | `function pulsePeek(` |
| 7,876 | `pulseBlock` | `function pulseBlock(` |
| 7,896 | `CHEV` | `var CHEV =` |
| 7,898 | `peekCard` | `function peekCard(` |
| 7,920 | `moodFrom` | `function moodFrom(` |
| 7,957 | `dropSvg` | `function dropSvg(` |
| 7,965 | `speakerSvg` | `function speakerSvg(` |
| 7,973 | `gaugeSvg` | `function gaugeSvg(` |
| 7,977 | `diamondSvg` | `function diamondSvg(` |
| 7,989 | `energyFromReserve` | `function energyFromReserve(` |
| 8,001 | `sproutSvg` | `function sproutSvg(` |
| 8,012 | `markSvg` | `function markSvg(` |
| 8,016 | `flameSvg` | `function flameSvg(` |
| 8,020 | `gearSvg` | `function gearSvg(` |
| 8,033 | `pulseSvg` | `function pulseSvg(` |
| 8,037 | `thermoSvg` | `function thermoSvg(` |
| 8,056 | `trendUpSvg` | `function trendUpSvg(` |
| 8,058 | `ecgSvg` | `function ecgSvg(` |
| 8,072 | `circulationSvg` | `function circulationSvg(` |
| 8,073 | `weatherSvg` | `function weatherSvg(` |
| 8,094 | `moodSvg` | `function moodSvg(` |
| 8,111 | `boltSvg` | `function boltSvg(` |
| 8,114 | `houseSvg` | `function houseSvg(` |
| 8,122 | `sunriseSvg` | `function sunriseSvg(` |
| 8,132 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,144 | `signMarks` | `var signMarks =` |
| 8,151 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,168_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,189 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,190 | `dsrHistory` | `var dsrHistory =` |
| 8,191 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,192 | `savHistory` | `var savHistory =` |
| 8,197 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,207 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,208 | `dsrNow` | `var dsrNow =` |
| 8,209 | `savNow` | `var savNow =` |
| 8,210 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,215 | `householdsWord` | `function householdsWord(` |
| 8,222 | `householdsNow` | `var householdsNow =` |
| 8,229 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,230 | `dsrMeter` | `var dsrMeter =` |
| 8,233 | `savMeter` | `var savMeter =` |
| 8,236 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,253 | `savInfoHtml` | `function savInfoHtml(` |
| 8,271 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,280 | `greedScore` | `var greedScore =` |
| 8,281 | `moodNow` | `var moodNow =` |
| 8,282 | `fgSub` | `var fgSub =` |
| 8,283 | `fgDetailHtml` | `function fgDetailHtml(` |
| 8,284 | `fgNoteFull` | `var fgNoteFull =` |
| 8,290 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,331 | `marketCycles` | `var marketCycles =` |
| 8,361 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,363_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,384 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,385 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,390_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,411 | `slopeOf` | `function slopeOf(` |
| 8,422 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,428 | `readSeason` | `function readSeason(` |
| 8,453 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,455 | `qLabel` | `function qLabel(` |
| 8,479 | `regimeTrack` | `function regimeTrack(` |
| 8,502 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,504_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,511 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,512 | `seasonTitle` | `function seasonTitle(` |
| 8,513 | `monthLabel` | `function monthLabel(` |
| 8,514 | `cycleModel` | `function cycleModel(` |
| 8,566 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,574 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,581 | `nowModel` | `var nowModel =` |
| 8,582 | `readingNow` | `var readingNow =` |
| 8,583 | `cpiNow` | `var cpiNow =` |
| 8,584 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,585 | `currentSeason` | `var currentSeason =` |
| 8,586 | `seasonWhy` | `var seasonWhy =` |
| 8,603 | `seasonGroup` | `function seasonGroup(` |
| 8,612 | `fearGauge` | `function fearGauge(` |
| 8,649 | `vitalRingSvg` | `function vitalRingSvg(` |
| 8,662 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 8,664 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 8,668 | `policyFacts` | `function policyFacts(` |
| 8,680 | `allSources` | `var allSources =` |
| 8,704 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 8,737_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,740 | `SVG_NS` | `var SVG_NS =` |
| 8,741 | `svgEl` | `function svgEl(` |
| 8,754 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 8,790_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,791 | `clampPct` | `function clampPct(` |
| 8,798 | `infoIcon` | `function infoIcon(` |
| 8,807 | `detailTexts` | `var detailTexts =` |
| 8,825 | `detailSlots` | `var detailSlots =` |
| 8,826 | `detailSlot` | `function detailSlot(` |
| 8,837 | `powerPanelHtml` | `var powerPanelHtml =` |
| 8,841 | `_growthPanel` | `var _growthPanel =` |
| 8,842 | `growthPanelHtml` | `function growthPanelHtml(` |
| 8,848 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 8,859 | `facts` | `function facts(` |
| 8,860 | `factsFrom` | `function factsFrom(` |
| 8,864 | `expandBtn` | `function expandBtn(` |
| 8,870 | `sheetRenderers` | `var sheetRenderers =` |
| 8,887 | `pageMode` | `var pageMode =` |
| 8,894 | `pageCycles` | `var pageCycles =` |
| 8,899 | `pageRange` | `var pageRange =` |
| 8,905 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 8,939_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,950 | `meterHtml` | `function meterHtml(` |
| 8,978 | `srcHtml` | `function srcHtml(` |
| 8,987 | `TIMING` | `var TIMING =` |
| 8,993 | `timingMark` | `function timingMark(` |
| 9,007 | `timingPill` | `function timingPill(` |
| 9,028 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,036 | `seatPageFoot` | `function seatPageFoot(` |
| 9,059 | `timingMembers` | `var timingMembers =` |
| 9,060 | `registerTiming` | `function registerTiming(` |
| 9,066 | `headHtml` | `function headHtml(` |
| 9,084 | `heldHighlights` | `var heldHighlights =` |
| 9,085 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,143_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,144 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,511_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,512 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 9,722_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,723 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 9,755_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,761 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 9,845_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,846 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 9,864_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,867 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the mood ring, then the Fear & Greed lead row and its markers

_line 9,890_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,891 | `renderPsychologyTag` | `function renderPsychologyTag(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 9,943_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,946 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,137_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,149 | `totalRiseIn` | `function totalRiseIn(` |
| 10,159 | `eraInflation` | `function eraInflation(` |
| 10,170 | `eraGrowth` | `function eraGrowth(` |
| 10,186 | `fmtSigned` | `function fmtSigned(` |
| 10,191 | `regimeArrow` | `function regimeArrow(` |
| 10,197 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,198 | `growthShown` | `function growthShown(` |
| 10,199 | `growthShownCap` | `function growthShownCap(` |
| 10,200 | `regimeState` | `function regimeState(` |
| 10,204 | `phaseClass` | `function phaseClass(` |
| 10,206 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,218 | `cycleViewEl` | `var cycleViewEl =` |
| 10,222 | `tempCard` | `var tempCard =` |
| 10,223 | `placeCharts` | `function placeCharts(` |
| 10,228 | `shownEra` | `var shownEra =` |
| 10,229 | `calendarReset` | `var calendarReset =` |
| 10,230 | `metricPageReset` | `var metricPageReset =` |
| 10,231 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,234 | `topbarBack` | `var topbarBack =` |
| 10,235 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,242_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,243 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,391_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,392 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,410_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,413 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,434_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,440 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,443 | `hubSet` | `function hubSet(` |
| 10,456 | `quarterPopup` | `function quarterPopup(` |
| 10,489 | `hubShowDefault` | `function hubShowDefault(` |
| 10,498 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,504 | `hubShowYear` | `function hubShowYear(` |
| 10,519 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 10,611_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,614 | `tempState` | `var tempState =` |
| 10,617 | `chartLink` | `var chartLink =` |
| 10,637 | `m2Step` | `function m2Step(` |
| 10,640 | `heatStep` | `function heatStep(` |
| 10,644 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 10,831_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,834 | `drawGrowth` | `function drawGrowth(` |
| 10,973 | `wireResize` | `function wireResize(` |
| 10,979 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 10,991_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,992 | `renderCycleView` | `function renderCycleView(` |
| 11,045 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,056 | `PEER_CARET` | `var PEER_CARET =` |
| 11,057 | `peerList` | `function peerList(` |
| 11,058 | `peerChosen` | `function peerChosen(` |
| 11,059 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,063 | `renderPeerPills` | `function renderPeerPills(` |
| 11,113 | `shownEraModel` | `var shownEraModel =` |
| 11,114 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,116_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,118 | `stripGroupName` | `var stripGroupName =` |
| 11,119 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,165 | `marketStripHtml` | `function marketStripHtml(` |
| 11,206 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,207 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,238_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,239 | `renderCycleList` | `function renderCycleList(` |
| 11,329 | `renderSignsList` | `function renderSignsList(` |
| 11,585 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 12,820_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,821 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 12,883_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,884 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 12,917_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,918 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`WORKING-DOC.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,860–3,863 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 7,657–7,670 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,462–8,475 | `seasonTrackAll` | The season, computed |
| 8,497–8,501 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,291 |
| `desire-range` | 9,457 |
| `hzn-range` | 9,794 |
| `pulse-range` | 9,408 |
| `sheet-marker-deficit` | 12,288 |
| `sheet-metric-gdp` | 12,176 |
| `sheet-metric-households` | 12,322 |
| `sheet-metric-power` | 12,255 |
| `sheet-metric-temp` | 12,126 |
| `sheet-metric-valuation` | 12,363 |
| `sheet-sign-activity` | 12,237 |
| `sheet-sign-desire` | 9,458 |
| `sheet-sign-horizon` | 9,795 |
| `sheet-sign-pulse` | 9,407 |
| `sheet-sign-volume` | 9,431 |
| `sheet-sign-yield` | 9,375 |
| `volume-range` | 9,432 |
| `ylm-range` | 9,503 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,297 |
| `desire-range` | 9,440 |
| `hzn-range` | 9,771 |
| `pulse-range` | 9,385 |
| `sheet-metric-gdp` | 12,177 |
| `sheet-metric-power` | 12,256 |
| `sheet-metric-temp` | 12,127 |
| `sheet-metric-valuation` | 12,364 |
| `volume-range` | 9,412 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 5,691 |
| `sheet-metric-gdp` | 5,692 |
| `sheet-sign-activity` | 5,693 |
| `sheet-metric-power` | 5,694 |
| `sheet-metric-valuation` | 5,696 |
| `sheet-metric-households` | 5,697 |
| `deficit-range` | 5,698 |
| `volume-range` | 5,699 |
| `pulse-range` | 5,700 |
| `hzn-range` | 5,701 |
| `ylm-range` | 5,712 |
| `desire-range` | 5,713 |

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

