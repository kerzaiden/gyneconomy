# Map of `index.html`

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

`index.html` is **13,131 lines**, about 1071 KB, roughly **304 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -n 'function moodFrom(' index.html` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `5fa5848` on 2026-09-26.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,911 | the whole stylesheet, every token and rule |
| **Markup** | 2,912–3,644 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,645–13,107 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,108–13,131 | </body></html> |

Counts: **242** top-level functions, **179** top-level vars, **4** top-level IIFEs in the script.

## Script, section by section

The script's own banner comments are its spine. Each declaration is listed under the section it
falls in, so you can navigate by concept rather than by name.

### REFRESH: the one date to edit

_line 3,650_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,654 | `DATA_COMPILED` | `var DATA_COMPILED =` |
| 3,655 | `MONTHS_SHORT` | `var MONTHS_SHORT =` |
| 3,656 | `dataCompiledLabel` | `var dataCompiledLabel =` |
| 3,674 | `hubTodayHtml` | `function hubTodayHtml(` |
| 3,678 | `asOfLabel` | `function asOfLabel(` |

### SEASON

_line 3,683_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,693 | `wheelMeta` | `var wheelMeta =` |
| 3,704 | `seasonOverride` | `var seasonOverride =` |
| 3,707 | `cycleNowNote` | `var cycleNowNote =` |
| 3,716 | `cpiYoYHistory` | `var cpiYoYHistory =` |
| 3,802 | `gdpQuarterlyYoY` | `var gdpQuarterlyYoY =` |
| 3,847 | `gdpLevels` | `var gdpLevels =` |

### Version 528: live data without a render refactor

_line 3,860_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,877 | `LIVE` | `function LIVE(` |
| 3,904 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,906 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 3,907 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,910_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,941 | `repaintFigureText` | `function repaintFigureText(` |
| 3,949 | `repaintTag` | `function repaintTag(` |
| 3,957 | `repaintSentiment` | `function repaintSentiment(` |
| 3,971 | `repaintYieldRow` | `function repaintYieldRow(` |
| 3,979 | `repaintValuationRow` | `function repaintValuationRow(` |
| 3,987 | `REPAINT` | `var REPAINT =` |
| 4,004 | `liveAsOf` | `var liveAsOf =` |
| 4,005 | `fmtAsOf` | `function fmtAsOf(` |
| 4,010 | `applyLive` | `function applyLive(` |
| 4,092 | `repaintPolicy` | `function repaintPolicy(` |
| 4,142 | `GYN` | `var GYN =` |
| 4,162 | `refreshLiveData` | `function refreshLiveData(` |
| 4,203 | `fetchSiteData` | `function fetchSiteData(` |
| 4,233 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,247_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,248 | `yieldCurve` | `var yieldCurve =` |
| 4,261 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,285 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,292 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 4,298 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,325 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,327_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,332 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,356 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,380 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,404 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,431 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,456_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,465 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,475 | `uninvLagToday` | `var uninvLagToday =` |
| 4,487 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,500 | `gdpPeers` | `var gdpPeers =` |
| 4,541 | `gdpSrc` | `var gdpSrc =` |
| 4,542 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,547 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,560 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,598_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,620 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,630_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,646 | `stressScoreFor` | `function stressScoreFor(` |
| 4,652 | `stressScore` | `var stressScore =` |
| 4,658 | `powerOf` | `var powerOf =` |
| 4,659 | `powerScore` | `var powerScore =` |
| 4,676 | `stressHistory` | `var stressHistory =` |
| 4,687 | `powerMeter` | `var powerMeter =` |
| 4,689 | `stressNoteFull` | `var stressNoteFull =` |
| 4,721 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,723_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,746 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,747 | `deficitHistory` | `var deficitHistory =` |
| 4,750 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,757 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,759 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,802_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,815 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,828_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,842 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,845 | `timelineSpan` | `function timelineSpan(` |
| 4,851 | `timelineFor` | `function timelineFor(` |
| 4,864 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,870_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,876 | `windowScale` | `function windowScale(` |
| 4,892 | `windowYears` | `function windowYears(` |
| 4,910 | `refName` | `function refName(` |
| 4,917 | `histReadEnsure` | `function histReadEnsure(` |
| 4,948 | `seatBandReading` | `function seatBandReading(` |
| 4,971 | `histReadFill` | `function histReadFill(` |
| 5,007 | `wireHistHover` | `function wireHistHover(` |
| 5,066 | `mWindowFrom` | `function mWindowFrom(` |
| 5,071 | `qWindowFrom` | `function qWindowFrom(` |
| 5,076 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,077 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,079 | `DEF_1983` | `var DEF_1983 =` |
| 5,081 | `defFrom` | `function defFrom(` |
| 5,092 | `deficitChart` | `function deficitChart(` |
| 5,182 | `deficitBlock` | `function deficitBlock(` |
| 5,244 | `buffettHistory` | `var buffettHistory =` |
| 5,274 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,275 | `hyDates` | `var hyDates =` |
| 5,276 | `hyOas` | `var hyOas =` |
| 5,277 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,284 | `hyAt` | `function hyAt(` |
| 5,288 | `hyLabel` | `function hyLabel(` |
| 5,289 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,290 | `hyNum` | `function hyNum(` |
| 5,291 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,301 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,311 | `capeHistory` | `var capeHistory =` |
| 5,313 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,331_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,337 | `sentiment` | `var sentiment =` |
| 5,355 | `valuation` | `var valuation =` |
| 5,392 | `valRow` | `function valRow(` |
| 5,400 | `coincident` | `var coincident =` |
| 5,461 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,479 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,480 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,481 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,483_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,496 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,497 | `m2vHistory` | `var m2vHistory =` |
| 5,517 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,616 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,717 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,718 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 5,758_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,764 | `HIST_NOTE` | `var HIST_NOTE =` |
| 5,765 | `DOTS` | `var DOTS =` |
| 5,767 | `HIST_HEAD` | `var HIST_HEAD =` |
| 5,792 | `histHead` | `function histHead(` |
| 5,813 | `headNoteIdx` | `var headNoteIdx =` |
| 5,814 | `headMenuHtml` | `function headMenuHtml(` |
| 5,834 | `headMenuFor` | `var headMenuFor =` |
| 5,835 | `paintHeadMenus` | `function paintHeadMenus(` |
| 5,861 | `nameWithMark` | `function nameWithMark(` |
| 5,867 | `panelRow` | `function panelRow(` |
| 5,893 | `panelFromMeter` | `function panelFromMeter(` |
| 5,907 | `meterFlagged` | `function meterFlagged(` |
| 5,918 | `desireInfoHtml` | `function desireInfoHtml(` |
| 5,946 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 5,960 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 5,979 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 5,998 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,012 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,037 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,068 | `desireBlock` | `function desireBlock(` |
| 6,095 | `volumeBlock` | `function volumeBlock(` |
| 6,120 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,143 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,151_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,164 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,165 | `m2Level` | `var m2Level =` |
| 6,187 | `m2Yoy` | `var m2Yoy =` |
| 6,188 | `M2_NORM` | `var M2_NORM =` |
| 6,193 | `volumeVerdict` | `function volumeVerdict(` |
| 6,230 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,231 | `unempHistory` | `var unempHistory =` |
| 6,237 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,252 | `NROU_NOW` | `var NROU_NOW =` |
| 6,253 | `unempState` | `function unempState(` |
| 6,259 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,319 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,320 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,323 | `qAtIndex` | `function qAtIndex(` |
| 6,324 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,332_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,347 | `householdsChart` | `function householdsChart(` |
| 6,411 | `refKey` | `function refKey(` |
| 6,449 | `lastChartAvg` | `var lastChartAvg =` |
| 6,450 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,535 | `GDP_NORM` | `var GDP_NORM =` |
| 6,541 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,542 | `gdpNowQ` | `var gdpNowQ =` |
| 6,543 | `gdpMeter` | `var gdpMeter =` |
| 6,546 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,568 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,634 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,698 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,706 | `velocityVerdict` | `function velocityVerdict(` |
| 6,714 | `derivePulseTag` | `function derivePulseTag(` |
| 6,720 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,780_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,789 | `seasonReading` | `var seasonReading =` |
| 6,838 | `frameworkRows` | `var frameworkRows =` |
| 6,848 | `vixRow` | `var vixRow =` |
| 6,856 | `vixWordOf` | `var vixWordOf =` |
| 6,860 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 6,875_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,879 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 6,888_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,889 | `calendarTodayY` | `var calendarTodayY =` |
| 6,910 | `fearGreed` | `var fearGreed =` |
| 6,914 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 6,919 | `valuationVerdict` | `function valuationVerdict(` |
| 6,937 | `sparkHtml` | `function sparkHtml(` |
| 6,956 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 6,962_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,975 | `modeBar` | `function modeBar(` |
| 6,990 | `pickerOpen` | `var pickerOpen =` |
| 6,994 | `cycleByName` | `function cycleByName(` |
| 6,998 | `openCycle` | `function openCycle(` |
| 7,004 | `cycleSlice` | `function cycleSlice(` |
| 7,013 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,021 | `cycleMonths` | `function cycleMonths(` |
| 7,040 | `histControls` | `function histControls(` |
| 7,054 | `cycLabel` | `function cycLabel(` |
| 7,070 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,079 | `cyclePicker` | `function cyclePicker(` |
| 7,103 | `seriesBar` | `function seriesBar(` |
| 7,110 | `rangeBar` | `function rangeBar(` |
| 7,122 | `trendOf` | `function trendOf(` |
| 7,167 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,177 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,192_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,193 | `yearOf` | `function yearOf(` |
| 7,194 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,195_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,225 | `totalStat` | `function totalStat(` |
| 7,231 | `atQuarter` | `function atQuarter(` |
| 7,232 | `atMonth` | `function atMonth(` |
| 7,233 | `cycleAverages` | `function cycleAverages(` |
| 7,240 | `ordinal` | `function ordinal(` |
| 7,241 | `hiCard` | `function hiCard(` |
| 7,252 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,266_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,273 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,289 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,296 | `moreRow` | `function moreRow(` |
| 7,302 | `powerPageNote` | `var powerPageNote =` |
| 7,303 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,309_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,312 | `xLabelOf` | `function xLabelOf(` |
| 7,332 | `fitGroup` | `function fitGroup(` |
| 7,354 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,413_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,437 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,447 | `vGrid` | `function vGrid(` |
| 7,472 | `COL_FILL` | `var COL_FILL =` |
| 7,479 | `AXIS` | `var AXIS =` |
| 7,480 | `chartAxes` | `function chartAxes(` |
| 7,511 | `divergeChart` | `function divergeChart(` |
| 7,572 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,601_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,609 | `maxIn` | `function maxIn(` |
| 7,622 | `reserveGauge` | `function reserveGauge(` |
| 7,643 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,657 | `PEEK_W` | `var PEEK_W =` |
| 7,660 | `PEEK_H` | `var PEEK_H =` |
| 7,661 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,666 | `colPeek` | `function colPeek(` |
| 7,693 | `meterPeek` | `function meterPeek(` |
| 7,710 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,715 | `pressureZone` | `function pressureZone(` |
| 7,730 | `HZN_BACK` | `var HZN_BACK =` |
| 7,731 | `hznLast` | `function hznLast(` |
| 7,732 | `hznBack` | `function hznBack(` |
| 7,733 | `horizonWord` | `function horizonWord(` |
| 7,758 | `HZN_METERS` | `var HZN_METERS =` |
| 7,766 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 7,790 | `_hznPanel` | `var _hznPanel =` |
| 7,791 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 7,811 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 7,812 | `levelZone` | `function levelZone(` |
| 7,824 | `RISK_REWARD` | `var RISK_REWARD =` |
| 7,829 | `RISK_RISK` | `var RISK_RISK =` |
| 7,834 | `riskCell` | `function riskCell(` |
| 7,835 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 7,866 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 7,891_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,910 | `pulseClipN` | `var pulseClipN =` |
| 7,911 | `beatPath` | `function beatPath(` |
| 7,936 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 7,950 | `pulsePeek` | `function pulsePeek(` |
| 7,958 | `pulseBlock` | `function pulseBlock(` |
| 7,978 | `CHEV` | `var CHEV =` |
| 7,980 | `peekCard` | `function peekCard(` |
| 8,002 | `moodFrom` | `function moodFrom(` |
| 8,039 | `dropSvg` | `function dropSvg(` |
| 8,047 | `speakerSvg` | `function speakerSvg(` |
| 8,055 | `gaugeSvg` | `function gaugeSvg(` |
| 8,059 | `diamondSvg` | `function diamondSvg(` |
| 8,071 | `energyFromReserve` | `function energyFromReserve(` |
| 8,083 | `sproutSvg` | `function sproutSvg(` |
| 8,094 | `markSvg` | `function markSvg(` |
| 8,098 | `flameSvg` | `function flameSvg(` |
| 8,102 | `gearSvg` | `function gearSvg(` |
| 8,115 | `pulseSvg` | `function pulseSvg(` |
| 8,119 | `thermoSvg` | `function thermoSvg(` |
| 8,138 | `trendUpSvg` | `function trendUpSvg(` |
| 8,140 | `ecgSvg` | `function ecgSvg(` |
| 8,154 | `circulationSvg` | `function circulationSvg(` |
| 8,155 | `weatherSvg` | `function weatherSvg(` |
| 8,176 | `moodSvg` | `function moodSvg(` |
| 8,193 | `boltSvg` | `function boltSvg(` |
| 8,196 | `houseSvg` | `function houseSvg(` |
| 8,204 | `sunriseSvg` | `function sunriseSvg(` |
| 8,214 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,226 | `signMarks` | `var signMarks =` |
| 8,233 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,250_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,271 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,272 | `dsrHistory` | `var dsrHistory =` |
| 8,273 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,274 | `savHistory` | `var savHistory =` |
| 8,279 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,289 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,290 | `dsrNow` | `var dsrNow =` |
| 8,291 | `savNow` | `var savNow =` |
| 8,292 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,297 | `householdsWord` | `function householdsWord(` |
| 8,304 | `householdsNow` | `var householdsNow =` |
| 8,311 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,312 | `dsrMeter` | `var dsrMeter =` |
| 8,315 | `savMeter` | `var savMeter =` |
| 8,318 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,335 | `savInfoHtml` | `function savInfoHtml(` |
| 8,353 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,362 | `greedScore` | `var greedScore =` |
| 8,363 | `moodNow` | `var moodNow =` |
| 8,364 | `fgSub` | `var fgSub =` |
| 8,365 | `fgDetailHtml` | `function fgDetailHtml(` |
| 8,366 | `fgNoteFull` | `var fgNoteFull =` |
| 8,372 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,413 | `marketCycles` | `var marketCycles =` |
| 8,443 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,445_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,466 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,467 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,472_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,493 | `slopeOf` | `function slopeOf(` |
| 8,504 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,510 | `readSeason` | `function readSeason(` |
| 8,535 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,537 | `qLabel` | `function qLabel(` |
| 8,561 | `regimeTrack` | `function regimeTrack(` |
| 8,584 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,586_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,593 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,594 | `seasonTitle` | `function seasonTitle(` |
| 8,595 | `monthLabel` | `function monthLabel(` |
| 8,596 | `cycleModel` | `function cycleModel(` |
| 8,648 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,656 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,663 | `nowModel` | `var nowModel =` |
| 8,664 | `readingNow` | `var readingNow =` |
| 8,665 | `cpiNow` | `var cpiNow =` |
| 8,666 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,667 | `currentSeason` | `var currentSeason =` |
| 8,668 | `seasonWhy` | `var seasonWhy =` |
| 8,685 | `seasonGroup` | `function seasonGroup(` |
| 8,694 | `fearGauge` | `function fearGauge(` |
| 8,731 | `vitalRingSvg` | `function vitalRingSvg(` |
| 8,744 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 8,746 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 8,750 | `policyFacts` | `function policyFacts(` |
| 8,762 | `allSources` | `var allSources =` |
| 8,786 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 8,819_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,822 | `SVG_NS` | `var SVG_NS =` |
| 8,823 | `svgEl` | `function svgEl(` |
| 8,836 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 8,872_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,873 | `clampPct` | `function clampPct(` |
| 8,880 | `infoIcon` | `function infoIcon(` |
| 8,889 | `detailTexts` | `var detailTexts =` |
| 8,907 | `detailSlots` | `var detailSlots =` |
| 8,908 | `detailSlot` | `function detailSlot(` |
| 8,919 | `powerPanelHtml` | `var powerPanelHtml =` |
| 8,923 | `_growthPanel` | `var _growthPanel =` |
| 8,924 | `growthPanelHtml` | `function growthPanelHtml(` |
| 8,930 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 8,941 | `facts` | `function facts(` |
| 8,942 | `factsFrom` | `function factsFrom(` |
| 8,946 | `expandBtn` | `function expandBtn(` |
| 8,952 | `sheetRenderers` | `var sheetRenderers =` |
| 8,969 | `pageMode` | `var pageMode =` |
| 8,976 | `pageCycles` | `var pageCycles =` |
| 8,981 | `pageRange` | `var pageRange =` |
| 8,987 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,021_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,032 | `meterHtml` | `function meterHtml(` |
| 9,060 | `srcHtml` | `function srcHtml(` |
| 9,069 | `TIMING` | `var TIMING =` |
| 9,075 | `timingMark` | `function timingMark(` |
| 9,089 | `timingPill` | `function timingPill(` |
| 9,110 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,118 | `seatPageFoot` | `function seatPageFoot(` |
| 9,141 | `timingMembers` | `var timingMembers =` |
| 9,142 | `registerTiming` | `function registerTiming(` |
| 9,148 | `headHtml` | `function headHtml(` |
| 9,166 | `heldHighlights` | `var heldHighlights =` |
| 9,167 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,225_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,226 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,593_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,594 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 9,804_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,805 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 9,837_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,843 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 9,927_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,928 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 9,946_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,949 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the mood ring, then the Fear & Greed lead row and its markers

_line 9,972_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,973 | `renderPsychologyTag` | `function renderPsychologyTag(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,029_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,032 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,223_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,235 | `totalRiseIn` | `function totalRiseIn(` |
| 10,245 | `eraInflation` | `function eraInflation(` |
| 10,256 | `eraGrowth` | `function eraGrowth(` |
| 10,272 | `fmtSigned` | `function fmtSigned(` |
| 10,277 | `regimeArrow` | `function regimeArrow(` |
| 10,283 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,284 | `growthShown` | `function growthShown(` |
| 10,285 | `growthShownCap` | `function growthShownCap(` |
| 10,286 | `regimeState` | `function regimeState(` |
| 10,290 | `phaseClass` | `function phaseClass(` |
| 10,292 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,304 | `cycleViewEl` | `var cycleViewEl =` |
| 10,308 | `tempCard` | `var tempCard =` |
| 10,309 | `placeCharts` | `function placeCharts(` |
| 10,314 | `shownEra` | `var shownEra =` |
| 10,315 | `calendarReset` | `var calendarReset =` |
| 10,316 | `metricPageReset` | `var metricPageReset =` |
| 10,317 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,320 | `topbarBack` | `var topbarBack =` |
| 10,321 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,328_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,329 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,477_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,478 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,496_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,499 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,520_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,526 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,529 | `hubSet` | `function hubSet(` |
| 10,542 | `quarterPopup` | `function quarterPopup(` |
| 10,575 | `hubShowDefault` | `function hubShowDefault(` |
| 10,584 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,590 | `hubShowYear` | `function hubShowYear(` |
| 10,605 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 10,697_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,700 | `tempState` | `var tempState =` |
| 10,703 | `chartLink` | `var chartLink =` |
| 10,723 | `m2Step` | `function m2Step(` |
| 10,726 | `heatStep` | `function heatStep(` |
| 10,730 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 10,917_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,920 | `drawGrowth` | `function drawGrowth(` |
| 11,059 | `wireResize` | `function wireResize(` |
| 11,065 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,077_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,078 | `renderCycleView` | `function renderCycleView(` |
| 11,131 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,142 | `PEER_CARET` | `var PEER_CARET =` |
| 11,143 | `peerList` | `function peerList(` |
| 11,144 | `peerChosen` | `function peerChosen(` |
| 11,145 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,149 | `renderPeerPills` | `function renderPeerPills(` |
| 11,199 | `shownEraModel` | `var shownEraModel =` |
| 11,200 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,202_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,204 | `stripGroupName` | `var stripGroupName =` |
| 11,205 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,251 | `marketStripHtml` | `function marketStripHtml(` |
| 11,292 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,293 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,324_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,325 | `renderCycleList` | `function renderCycleList(` |
| 11,415 | `renderSignsList` | `function renderSignsList(` |
| 11,671 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 12,906_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,907 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 12,969_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,970 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,003_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,004 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,873–3,876 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 7,739–7,752 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,544–8,557 | `seasonTrackAll` | The season, computed |
| 8,579–8,583 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,377 |
| `desire-range` | 9,539 |
| `hzn-range` | 9,876 |
| `pulse-range` | 9,490 |
| `sheet-marker-deficit` | 12,374 |
| `sheet-metric-gdp` | 12,262 |
| `sheet-metric-households` | 12,408 |
| `sheet-metric-power` | 12,341 |
| `sheet-metric-temp` | 12,212 |
| `sheet-metric-valuation` | 12,449 |
| `sheet-sign-activity` | 12,323 |
| `sheet-sign-desire` | 9,540 |
| `sheet-sign-horizon` | 9,877 |
| `sheet-sign-pulse` | 9,489 |
| `sheet-sign-volume` | 9,513 |
| `sheet-sign-yield` | 9,457 |
| `volume-range` | 9,514 |
| `ylm-range` | 9,585 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,383 |
| `desire-range` | 9,522 |
| `hzn-range` | 9,853 |
| `pulse-range` | 9,467 |
| `sheet-metric-gdp` | 12,263 |
| `sheet-metric-power` | 12,342 |
| `sheet-metric-temp` | 12,213 |
| `sheet-metric-valuation` | 12,450 |
| `volume-range` | 9,494 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 5,768 |
| `sheet-metric-gdp` | 5,769 |
| `sheet-sign-activity` | 5,770 |
| `sheet-metric-power` | 5,771 |
| `sheet-metric-valuation` | 5,773 |
| `sheet-metric-households` | 5,774 |
| `deficit-range` | 5,775 |
| `volume-range` | 5,776 |
| `pulse-range` | 5,777 |
| `hzn-range` | 5,778 |
| `ylm-range` | 5,789 |
| `desire-range` | 5,790 |

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
| 1,871 | One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each |
| 2,329 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 2,377 | hero: yield curve |
| 2,469 | Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so |
| 2,524 | 10Y-3M spread history (quarterly, with recession bands) |
| 2,628 | yield-by-maturity comparison chart — pill toggles (the GDP chart above uses a dropdown instead, |
| 2,653 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 2,668 | long cycle (structural layer) |
| 2,709 | indicator grid |
| 2,752 | indicator range bar: clean "lab result" style (track + optimal zone + one dot) |
| 2,769 | info icon + popover (progressive disclosure for longer notes) |
| 2,790 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 2,885 | footer |

## Markup landmarks

Banner comments:

| Line | Section |
|---|---|

Every `id` in the static DOM (148), which is what the renderers fill:

| Line | id |
|---|---|
| 2,917 | `topbar-back` |
| 2,920 | `topbar-title` |
| 2,921 | `menu-btn` |
| 2,938 | `main` |
| 2,945 | `cycle-view` |
| 2,953 | `cycle-kicker` |
| 2,959 | `cycle-dial` |
| 2,961 | `season-wheel-hub-date` |
| 2,962 | `season-wheel-hub-theme` |
| 2,963 | `season-wheel-hub-detail` |
| 2,971 | `temp-card` |
| 2,973 | `temp-kicker` |
| 2,974 | `temp-sub` |
| 2,977 | `temp-svg` |
| 2,978 | `temp-tooltip` |
| 2,984 | `temp-stats` |
| 2,991 | `growth-card` |
| 2,994 | `growth-kicker` |
| 2,994 | `growth-phase` |
| 2,994 | `growth-sub` |
| 2,994 | `growth-peers` |
| 2,995 | `growth-svg` |
| 2,995 | `growth-tooltip` |
| 3,000 | `growth-stats` |
| 3,009 | `today-analysis` |
| 3,013 | `peek-row` |
| 3,017 | `sheet-metric-temp` |
| 3,018 | `temp-timing` |
| 3,019 | `temp-chart` |
| 3,021 | `temp-rangebar` |
| 3,023 | `temp-head` |
| 3,024 | `slot-temp` |
| 3,025 | `temp-history` |
| 3,026 | `temp-hist-tooltip` |
| 3,029 | `temp-trend` |
| 3,032 | `temp-panel` |
| 3,034 | `temp-highlights` |
| 3,037 | `sheet-metric-gdp` |
| 3,038 | `gdp-timing` |
| 3,039 | `gdp-chart` |
| 3,040 | `gdp-rangebar` |
| 3,042 | `gdp-head` |
| 3,043 | `slot-growth` |
| 3,044 | `gdp-history` |
| 3,045 | `gdp-hist-tooltip` |
| 3,046 | `gdp-yoy` |
| 3,056 | `gdp-trend` |
| 3,058 | `gdp-panel` |
| 3,063 | `subj-ring-gdp` |
| 3,065 | `subj-label-gdp` |
| 3,066 | `subj-value-gdp` |
| 3,067 | `subj-say-gdp` |
| 3,068 | `subj-spark-gdp` |
| 3,073 | `subj-ctx-gdp` |
| 3,076 | `gdp-highlights` |
| 3,084 | `sheet-metric-power` |
| 3,085 | `power-timing` |
| 3,086 | `power-head` |
| 3,087 | `power-chart` |
| 3,091 | `subj-ring-resilience` |
| 3,094 | `subj-value-resilience` |
| 3,095 | `subj-say-resilience` |
| 3,100 | `subj-ctx-resilience` |
| 3,104 | `longcycle-title` |
| 3,106 | `longcycle-tag` |
| 3,120 | `power-highlights` |
| 3,127 | `sheet-marker-deficit` |
| 3,133 | `sheet-metric-households` |
| 3,134 | `households-timing` |
| 3,135 | `households-chart` |
| 3,136 | `households-highlights` |
| 3,140 | `sheet-metric-valuation` |
| 3,141 | `valuation-timing` |
| 3,142 | `valuation-head` |
| 3,143 | `valuation-chart` |
| 3,147 | `subj-ring-valuation` |
| 3,150 | `subj-value-valuation` |
| 3,151 | `subj-say-valuation` |
| 3,156 | `subj-ctx-valuation` |
| 3,160 | `valuation-title` |
| 3,162 | `valuation-tag` |
| 3,169 | `valuation-highlights` |
| 3,175 | `subj-ring-yield` |
| 3,178 | `subj-value-yield` |
| 3,179 | `subj-say-yield` |
| 3,180 | `subj-spark-yield` |
| 3,211 | `ylm-series` |
| 3,216 | `ylm-head` |
| 3,217 | `ylm-shell` |
| 3,218 | `ylm-svg` |
| 3,219 | `ylm-tooltip` |
| 3,222 | `ylm-zone-legend` |
| 3,227 | `ylm-trend` |
| 3,230 | `pressure-insights` |
| 3,231 | `pressure-highlights` |
| 3,257 | `subj-value-horizon` |
| 3,258 | `subj-say-horizon` |
| 3,259 | `subj-spark-horizon` |
| 3,269 | `hzn-timeline` |
| 3,271 | `hzn-head` |
| 3,272 | `spread-history-shell` |
| 3,273 | `spread-history-svg` |
| 3,274 | `spread-history-tooltip` |
| 3,277 | `hzn-zone-legend` |
| 3,282 | `hzn-trend` |
| 3,284 | `hzn-panel` |
| 3,286 | `horizon-insights` |
| 3,287 | `horizon-highlights` |
| 3,294 | `subj-ring-sentiment` |
| 3,297 | `subj-value-sentiment` |
| 3,298 | `subj-say-sentiment` |
| 3,299 | `subj-spark-sentiment` |
| 3,311 | `fg-gauge` |
| 3,312 | `fg-vix` |
| 3,313 | `fg-highlights` |
| 3,327 | `signs-list` |
| 3,338 | `calendar-list` |
| 3,343 | `indicators-peek` |
| 3,389 | `cycle-list` |
| 3,395 | `cycle-more` |
| 3,396 | `cycle-more-label` |
| 3,405 | `calendar-cycle` |
| 3,406 | `calendar-cycle-slot` |
| 3,457 | `seasons-kicker` |
| 3,458 | `seasons-rows` |
| 3,462 | `framework-kicker` |
| 3,464 | `framework-rows` |
| 3,471 | `more-menu` |
| 3,474 | `menu-back` |
| 3,488 | `sources-open` |
| 3,496 | `appearance-current` |
| 3,504 | `sheet-howto` |
| 3,548 | `sheet-book` |
| 3,580 | `sheet-appearance` |
| 3,588 | `theme-toggle` |
| 3,595 | `sheet-contact` |
| 3,604 | `contact-form` |
| 3,605 | `contact-title` |
| 3,606 | `contact-message` |
| 3,608 | `contact-hint` |
| 3,609 | `contact-send` |
| 3,618 | `sheet-sources` |
| 3,621 | `sources-back` |
| 3,628 | `asof-text` |
| 3,629 | `sources-groups` |
| 3,636 | `detail-backdrop` |
| 3,638 | `detail-modal-close` |
| 3,639 | `detail-modal-body` |

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

