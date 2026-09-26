# Map of `index.html`

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

`index.html` is **13,074 lines**, about 1068 KB, roughly **303 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -n 'function moodFrom(' index.html` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `54157bc` on 2026-09-26.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,911 | the whole stylesheet, every token and rule |
| **Markup** | 2,912–3,644 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,645–13,050 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,051–13,074 | </body></html> |

Counts: **242** top-level functions, **178** top-level vars, **4** top-level IIFEs in the script.

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

_line 3,860_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,877 | `LIVE` | `function LIVE(` |
| 3,893 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,894 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,897_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,928 | `repaintFigureText` | `function repaintFigureText(` |
| 3,936 | `repaintTag` | `function repaintTag(` |
| 3,944 | `repaintSentiment` | `function repaintSentiment(` |
| 3,955 | `repaintYieldRow` | `function repaintYieldRow(` |
| 3,963 | `repaintValuationRow` | `function repaintValuationRow(` |
| 3,971 | `REPAINT` | `var REPAINT =` |
| 3,987 | `liveAsOf` | `var liveAsOf =` |
| 3,988 | `fmtAsOf` | `function fmtAsOf(` |
| 3,993 | `applyLive` | `function applyLive(` |
| 4,039 | `repaintPolicy` | `function repaintPolicy(` |
| 4,089 | `GYN` | `var GYN =` |
| 4,109 | `refreshLiveData` | `function refreshLiveData(` |
| 4,150 | `fetchSiteData` | `function fetchSiteData(` |
| 4,180 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,194_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,195 | `yieldCurve` | `var yieldCurve =` |
| 4,208 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,232 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,239 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 4,245 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,272 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,274_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,279 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,303 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,327 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,351 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,378 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,403_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,412 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,422 | `uninvLagToday` | `var uninvLagToday =` |
| 4,434 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,447 | `gdpPeers` | `var gdpPeers =` |
| 4,488 | `gdpSrc` | `var gdpSrc =` |
| 4,489 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,494 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,507 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,545_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,567 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,577_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,593 | `stressScoreFor` | `function stressScoreFor(` |
| 4,599 | `stressScore` | `var stressScore =` |
| 4,605 | `powerOf` | `var powerOf =` |
| 4,606 | `powerScore` | `var powerScore =` |
| 4,623 | `stressHistory` | `var stressHistory =` |
| 4,634 | `powerMeter` | `var powerMeter =` |
| 4,636 | `stressNoteFull` | `var stressNoteFull =` |
| 4,668 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,670_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,693 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,694 | `deficitHistory` | `var deficitHistory =` |
| 4,697 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,704 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,706 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,749_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,762 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,775_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,789 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,792 | `timelineSpan` | `function timelineSpan(` |
| 4,798 | `timelineFor` | `function timelineFor(` |
| 4,811 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,817_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,823 | `windowScale` | `function windowScale(` |
| 4,839 | `windowYears` | `function windowYears(` |
| 4,857 | `refName` | `function refName(` |
| 4,864 | `histReadEnsure` | `function histReadEnsure(` |
| 4,895 | `seatBandReading` | `function seatBandReading(` |
| 4,918 | `histReadFill` | `function histReadFill(` |
| 4,954 | `wireHistHover` | `function wireHistHover(` |
| 5,013 | `mWindowFrom` | `function mWindowFrom(` |
| 5,018 | `qWindowFrom` | `function qWindowFrom(` |
| 5,023 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,024 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,026 | `DEF_1983` | `var DEF_1983 =` |
| 5,028 | `defFrom` | `function defFrom(` |
| 5,039 | `deficitChart` | `function deficitChart(` |
| 5,129 | `deficitBlock` | `function deficitBlock(` |
| 5,191 | `buffettHistory` | `var buffettHistory =` |
| 5,221 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,222 | `hyDates` | `var hyDates =` |
| 5,223 | `hyOas` | `var hyOas =` |
| 5,224 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,231 | `hyAt` | `function hyAt(` |
| 5,235 | `hyLabel` | `function hyLabel(` |
| 5,236 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,237 | `hyNum` | `function hyNum(` |
| 5,238 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,248 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,258 | `capeHistory` | `var capeHistory =` |
| 5,260 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,278_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,284 | `sentiment` | `var sentiment =` |
| 5,302 | `valuation` | `var valuation =` |
| 5,339 | `valRow` | `function valRow(` |
| 5,347 | `coincident` | `var coincident =` |
| 5,408 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,426 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,427 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,428 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,430_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,443 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,444 | `m2vHistory` | `var m2vHistory =` |
| 5,464 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,563 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,664 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,665 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 5,705_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,711 | `HIST_NOTE` | `var HIST_NOTE =` |
| 5,712 | `DOTS` | `var DOTS =` |
| 5,714 | `HIST_HEAD` | `var HIST_HEAD =` |
| 5,739 | `histHead` | `function histHead(` |
| 5,760 | `headNoteIdx` | `var headNoteIdx =` |
| 5,761 | `headMenuHtml` | `function headMenuHtml(` |
| 5,781 | `headMenuFor` | `var headMenuFor =` |
| 5,782 | `paintHeadMenus` | `function paintHeadMenus(` |
| 5,808 | `nameWithMark` | `function nameWithMark(` |
| 5,814 | `panelRow` | `function panelRow(` |
| 5,840 | `panelFromMeter` | `function panelFromMeter(` |
| 5,854 | `meterFlagged` | `function meterFlagged(` |
| 5,865 | `desireInfoHtml` | `function desireInfoHtml(` |
| 5,893 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 5,907 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 5,926 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 5,945 | `outputInfoHtml` | `function outputInfoHtml(` |
| 5,959 | `activityInfoHtml` | `function activityInfoHtml(` |
| 5,984 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,015 | `desireBlock` | `function desireBlock(` |
| 6,042 | `volumeBlock` | `function volumeBlock(` |
| 6,067 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,090 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,098_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,111 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,112 | `m2Level` | `var m2Level =` |
| 6,134 | `m2Yoy` | `var m2Yoy =` |
| 6,135 | `M2_NORM` | `var M2_NORM =` |
| 6,140 | `volumeVerdict` | `function volumeVerdict(` |
| 6,177 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,178 | `unempHistory` | `var unempHistory =` |
| 6,184 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,199 | `NROU_NOW` | `var NROU_NOW =` |
| 6,200 | `unempState` | `function unempState(` |
| 6,206 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,266 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,267 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,270 | `qAtIndex` | `function qAtIndex(` |
| 6,271 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,279_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,294 | `householdsChart` | `function householdsChart(` |
| 6,358 | `refKey` | `function refKey(` |
| 6,396 | `lastChartAvg` | `var lastChartAvg =` |
| 6,397 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,482 | `GDP_NORM` | `var GDP_NORM =` |
| 6,488 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,489 | `gdpNowQ` | `var gdpNowQ =` |
| 6,490 | `gdpMeter` | `var gdpMeter =` |
| 6,493 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,515 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,581 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,645 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,653 | `velocityVerdict` | `function velocityVerdict(` |
| 6,661 | `derivePulseTag` | `function derivePulseTag(` |
| 6,667 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,727_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,736 | `seasonReading` | `var seasonReading =` |
| 6,785 | `frameworkRows` | `var frameworkRows =` |
| 6,795 | `vixRow` | `var vixRow =` |
| 6,803 | `vixWordOf` | `var vixWordOf =` |
| 6,807 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 6,822_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,826 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 6,835_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,836 | `calendarTodayY` | `var calendarTodayY =` |
| 6,857 | `fearGreed` | `var fearGreed =` |
| 6,861 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 6,866 | `valuationVerdict` | `function valuationVerdict(` |
| 6,884 | `sparkHtml` | `function sparkHtml(` |
| 6,903 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 6,909_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,922 | `modeBar` | `function modeBar(` |
| 6,937 | `pickerOpen` | `var pickerOpen =` |
| 6,941 | `cycleByName` | `function cycleByName(` |
| 6,945 | `openCycle` | `function openCycle(` |
| 6,951 | `cycleSlice` | `function cycleSlice(` |
| 6,960 | `totalGrowthYears` | `function totalGrowthYears(` |
| 6,968 | `cycleMonths` | `function cycleMonths(` |
| 6,987 | `histControls` | `function histControls(` |
| 7,001 | `cycLabel` | `function cycLabel(` |
| 7,017 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,026 | `cyclePicker` | `function cyclePicker(` |
| 7,050 | `seriesBar` | `function seriesBar(` |
| 7,057 | `rangeBar` | `function rangeBar(` |
| 7,069 | `trendOf` | `function trendOf(` |
| 7,114 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,124 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,139_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,140 | `yearOf` | `function yearOf(` |
| 7,141 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,142_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,172 | `totalStat` | `function totalStat(` |
| 7,178 | `atQuarter` | `function atQuarter(` |
| 7,179 | `atMonth` | `function atMonth(` |
| 7,180 | `cycleAverages` | `function cycleAverages(` |
| 7,187 | `ordinal` | `function ordinal(` |
| 7,188 | `hiCard` | `function hiCard(` |
| 7,199 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,213_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,220 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,236 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,243 | `moreRow` | `function moreRow(` |
| 7,249 | `powerPageNote` | `var powerPageNote =` |
| 7,250 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,256_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,259 | `xLabelOf` | `function xLabelOf(` |
| 7,279 | `fitGroup` | `function fitGroup(` |
| 7,301 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,360_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,384 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,394 | `vGrid` | `function vGrid(` |
| 7,419 | `COL_FILL` | `var COL_FILL =` |
| 7,426 | `AXIS` | `var AXIS =` |
| 7,427 | `chartAxes` | `function chartAxes(` |
| 7,458 | `divergeChart` | `function divergeChart(` |
| 7,519 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,548_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,556 | `maxIn` | `function maxIn(` |
| 7,569 | `reserveGauge` | `function reserveGauge(` |
| 7,590 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,604 | `PEEK_W` | `var PEEK_W =` |
| 7,607 | `PEEK_H` | `var PEEK_H =` |
| 7,608 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,613 | `colPeek` | `function colPeek(` |
| 7,640 | `meterPeek` | `function meterPeek(` |
| 7,657 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,662 | `pressureZone` | `function pressureZone(` |
| 7,677 | `HZN_BACK` | `var HZN_BACK =` |
| 7,678 | `hznLast` | `function hznLast(` |
| 7,679 | `hznBack` | `function hznBack(` |
| 7,680 | `horizonWord` | `function horizonWord(` |
| 7,705 | `HZN_METERS` | `var HZN_METERS =` |
| 7,713 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 7,737 | `_hznPanel` | `var _hznPanel =` |
| 7,738 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 7,758 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 7,759 | `levelZone` | `function levelZone(` |
| 7,771 | `RISK_REWARD` | `var RISK_REWARD =` |
| 7,776 | `RISK_RISK` | `var RISK_RISK =` |
| 7,781 | `riskCell` | `function riskCell(` |
| 7,782 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 7,813 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 7,838_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,857 | `pulseClipN` | `var pulseClipN =` |
| 7,858 | `beatPath` | `function beatPath(` |
| 7,883 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 7,897 | `pulsePeek` | `function pulsePeek(` |
| 7,905 | `pulseBlock` | `function pulseBlock(` |
| 7,925 | `CHEV` | `var CHEV =` |
| 7,927 | `peekCard` | `function peekCard(` |
| 7,949 | `moodFrom` | `function moodFrom(` |
| 7,986 | `dropSvg` | `function dropSvg(` |
| 7,994 | `speakerSvg` | `function speakerSvg(` |
| 8,002 | `gaugeSvg` | `function gaugeSvg(` |
| 8,006 | `diamondSvg` | `function diamondSvg(` |
| 8,018 | `energyFromReserve` | `function energyFromReserve(` |
| 8,030 | `sproutSvg` | `function sproutSvg(` |
| 8,041 | `markSvg` | `function markSvg(` |
| 8,045 | `flameSvg` | `function flameSvg(` |
| 8,049 | `gearSvg` | `function gearSvg(` |
| 8,062 | `pulseSvg` | `function pulseSvg(` |
| 8,066 | `thermoSvg` | `function thermoSvg(` |
| 8,085 | `trendUpSvg` | `function trendUpSvg(` |
| 8,087 | `ecgSvg` | `function ecgSvg(` |
| 8,101 | `circulationSvg` | `function circulationSvg(` |
| 8,102 | `weatherSvg` | `function weatherSvg(` |
| 8,123 | `moodSvg` | `function moodSvg(` |
| 8,140 | `boltSvg` | `function boltSvg(` |
| 8,143 | `houseSvg` | `function houseSvg(` |
| 8,151 | `sunriseSvg` | `function sunriseSvg(` |
| 8,161 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,173 | `signMarks` | `var signMarks =` |
| 8,180 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,197_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,218 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,219 | `dsrHistory` | `var dsrHistory =` |
| 8,220 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,221 | `savHistory` | `var savHistory =` |
| 8,226 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,236 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,237 | `dsrNow` | `var dsrNow =` |
| 8,238 | `savNow` | `var savNow =` |
| 8,239 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,244 | `householdsWord` | `function householdsWord(` |
| 8,251 | `householdsNow` | `var householdsNow =` |
| 8,258 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,259 | `dsrMeter` | `var dsrMeter =` |
| 8,262 | `savMeter` | `var savMeter =` |
| 8,265 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,282 | `savInfoHtml` | `function savInfoHtml(` |
| 8,300 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,309 | `greedScore` | `var greedScore =` |
| 8,310 | `moodNow` | `var moodNow =` |
| 8,311 | `fgSub` | `var fgSub =` |
| 8,312 | `fgDetailHtml` | `function fgDetailHtml(` |
| 8,313 | `fgNoteFull` | `var fgNoteFull =` |
| 8,319 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,360 | `marketCycles` | `var marketCycles =` |
| 8,390 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,392_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,413 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,414 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,419_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,440 | `slopeOf` | `function slopeOf(` |
| 8,451 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,457 | `readSeason` | `function readSeason(` |
| 8,482 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,484 | `qLabel` | `function qLabel(` |
| 8,508 | `regimeTrack` | `function regimeTrack(` |
| 8,531 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,533_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,540 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,541 | `seasonTitle` | `function seasonTitle(` |
| 8,542 | `monthLabel` | `function monthLabel(` |
| 8,543 | `cycleModel` | `function cycleModel(` |
| 8,595 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,603 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,610 | `nowModel` | `var nowModel =` |
| 8,611 | `readingNow` | `var readingNow =` |
| 8,612 | `cpiNow` | `var cpiNow =` |
| 8,613 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,614 | `currentSeason` | `var currentSeason =` |
| 8,615 | `seasonWhy` | `var seasonWhy =` |
| 8,632 | `seasonGroup` | `function seasonGroup(` |
| 8,641 | `fearGauge` | `function fearGauge(` |
| 8,678 | `vitalRingSvg` | `function vitalRingSvg(` |
| 8,691 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 8,693 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 8,697 | `policyFacts` | `function policyFacts(` |
| 8,709 | `allSources` | `var allSources =` |
| 8,733 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 8,766_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,769 | `SVG_NS` | `var SVG_NS =` |
| 8,770 | `svgEl` | `function svgEl(` |
| 8,783 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 8,819_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,820 | `clampPct` | `function clampPct(` |
| 8,827 | `infoIcon` | `function infoIcon(` |
| 8,836 | `detailTexts` | `var detailTexts =` |
| 8,854 | `detailSlots` | `var detailSlots =` |
| 8,855 | `detailSlot` | `function detailSlot(` |
| 8,866 | `powerPanelHtml` | `var powerPanelHtml =` |
| 8,870 | `_growthPanel` | `var _growthPanel =` |
| 8,871 | `growthPanelHtml` | `function growthPanelHtml(` |
| 8,877 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 8,888 | `facts` | `function facts(` |
| 8,889 | `factsFrom` | `function factsFrom(` |
| 8,893 | `expandBtn` | `function expandBtn(` |
| 8,899 | `sheetRenderers` | `var sheetRenderers =` |
| 8,916 | `pageMode` | `var pageMode =` |
| 8,923 | `pageCycles` | `var pageCycles =` |
| 8,928 | `pageRange` | `var pageRange =` |
| 8,934 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 8,968_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,979 | `meterHtml` | `function meterHtml(` |
| 9,007 | `srcHtml` | `function srcHtml(` |
| 9,016 | `TIMING` | `var TIMING =` |
| 9,022 | `timingMark` | `function timingMark(` |
| 9,036 | `timingPill` | `function timingPill(` |
| 9,057 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,065 | `seatPageFoot` | `function seatPageFoot(` |
| 9,088 | `timingMembers` | `var timingMembers =` |
| 9,089 | `registerTiming` | `function registerTiming(` |
| 9,095 | `headHtml` | `function headHtml(` |
| 9,113 | `heldHighlights` | `var heldHighlights =` |
| 9,114 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,172_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,173 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,540_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,541 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 9,751_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,752 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 9,784_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,790 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 9,874_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,875 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 9,893_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,896 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the mood ring, then the Fear & Greed lead row and its markers

_line 9,919_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,920 | `renderPsychologyTag` | `function renderPsychologyTag(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 9,972_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,975 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,166_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,178 | `totalRiseIn` | `function totalRiseIn(` |
| 10,188 | `eraInflation` | `function eraInflation(` |
| 10,199 | `eraGrowth` | `function eraGrowth(` |
| 10,215 | `fmtSigned` | `function fmtSigned(` |
| 10,220 | `regimeArrow` | `function regimeArrow(` |
| 10,226 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,227 | `growthShown` | `function growthShown(` |
| 10,228 | `growthShownCap` | `function growthShownCap(` |
| 10,229 | `regimeState` | `function regimeState(` |
| 10,233 | `phaseClass` | `function phaseClass(` |
| 10,235 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,247 | `cycleViewEl` | `var cycleViewEl =` |
| 10,251 | `tempCard` | `var tempCard =` |
| 10,252 | `placeCharts` | `function placeCharts(` |
| 10,257 | `shownEra` | `var shownEra =` |
| 10,258 | `calendarReset` | `var calendarReset =` |
| 10,259 | `metricPageReset` | `var metricPageReset =` |
| 10,260 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,263 | `topbarBack` | `var topbarBack =` |
| 10,264 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,271_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,272 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,420_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,421 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,439_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,442 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,463_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,469 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,472 | `hubSet` | `function hubSet(` |
| 10,485 | `quarterPopup` | `function quarterPopup(` |
| 10,518 | `hubShowDefault` | `function hubShowDefault(` |
| 10,527 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,533 | `hubShowYear` | `function hubShowYear(` |
| 10,548 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 10,640_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,643 | `tempState` | `var tempState =` |
| 10,646 | `chartLink` | `var chartLink =` |
| 10,666 | `m2Step` | `function m2Step(` |
| 10,669 | `heatStep` | `function heatStep(` |
| 10,673 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 10,860_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,863 | `drawGrowth` | `function drawGrowth(` |
| 11,002 | `wireResize` | `function wireResize(` |
| 11,008 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,020_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,021 | `renderCycleView` | `function renderCycleView(` |
| 11,074 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,085 | `PEER_CARET` | `var PEER_CARET =` |
| 11,086 | `peerList` | `function peerList(` |
| 11,087 | `peerChosen` | `function peerChosen(` |
| 11,088 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,092 | `renderPeerPills` | `function renderPeerPills(` |
| 11,142 | `shownEraModel` | `var shownEraModel =` |
| 11,143 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,145_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,147 | `stripGroupName` | `var stripGroupName =` |
| 11,148 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,194 | `marketStripHtml` | `function marketStripHtml(` |
| 11,235 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,236 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,267_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,268 | `renderCycleList` | `function renderCycleList(` |
| 11,358 | `renderSignsList` | `function renderSignsList(` |
| 11,614 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 12,849_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,850 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 12,912_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,913 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 12,946_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,947 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,873–3,876 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 7,686–7,699 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,491–8,504 | `seasonTrackAll` | The season, computed |
| 8,526–8,530 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,320 |
| `desire-range` | 9,486 |
| `hzn-range` | 9,823 |
| `pulse-range` | 9,437 |
| `sheet-marker-deficit` | 12,317 |
| `sheet-metric-gdp` | 12,205 |
| `sheet-metric-households` | 12,351 |
| `sheet-metric-power` | 12,284 |
| `sheet-metric-temp` | 12,155 |
| `sheet-metric-valuation` | 12,392 |
| `sheet-sign-activity` | 12,266 |
| `sheet-sign-desire` | 9,487 |
| `sheet-sign-horizon` | 9,824 |
| `sheet-sign-pulse` | 9,436 |
| `sheet-sign-volume` | 9,460 |
| `sheet-sign-yield` | 9,404 |
| `volume-range` | 9,461 |
| `ylm-range` | 9,532 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,326 |
| `desire-range` | 9,469 |
| `hzn-range` | 9,800 |
| `pulse-range` | 9,414 |
| `sheet-metric-gdp` | 12,206 |
| `sheet-metric-power` | 12,285 |
| `sheet-metric-temp` | 12,156 |
| `sheet-metric-valuation` | 12,393 |
| `volume-range` | 9,441 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 5,715 |
| `sheet-metric-gdp` | 5,716 |
| `sheet-sign-activity` | 5,717 |
| `sheet-metric-power` | 5,718 |
| `sheet-metric-valuation` | 5,720 |
| `sheet-metric-households` | 5,721 |
| `deficit-range` | 5,722 |
| `volume-range` | 5,723 |
| `pulse-range` | 5,724 |
| `hzn-range` | 5,725 |
| `ylm-range` | 5,736 |
| `desire-range` | 5,737 |

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

