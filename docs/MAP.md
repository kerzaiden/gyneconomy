# Map of `index.html`

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

`index.html` is **13,111 lines**, about 1070 KB, roughly **304 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -n 'function moodFrom(' index.html` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `ebc4f41` on 2026-09-26.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,911 | the whole stylesheet, every token and rule |
| **Markup** | 2,912–3,644 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,645–13,087 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,088–13,111 | </body></html> |

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
| 3,893 | `LIVE_DOCS` | `var LIVE_DOCS =` |
| 3,895 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 3,896 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,899_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,930 | `repaintFigureText` | `function repaintFigureText(` |
| 3,938 | `repaintTag` | `function repaintTag(` |
| 3,946 | `repaintSentiment` | `function repaintSentiment(` |
| 3,960 | `repaintYieldRow` | `function repaintYieldRow(` |
| 3,968 | `repaintValuationRow` | `function repaintValuationRow(` |
| 3,976 | `REPAINT` | `var REPAINT =` |
| 3,993 | `liveAsOf` | `var liveAsOf =` |
| 3,994 | `fmtAsOf` | `function fmtAsOf(` |
| 3,999 | `applyLive` | `function applyLive(` |
| 4,072 | `repaintPolicy` | `function repaintPolicy(` |
| 4,122 | `GYN` | `var GYN =` |
| 4,142 | `refreshLiveData` | `function refreshLiveData(` |
| 4,183 | `fetchSiteData` | `function fetchSiteData(` |
| 4,213 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,227_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,228 | `yieldCurve` | `var yieldCurve =` |
| 4,241 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,265 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,272 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 4,278 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,305 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,307_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,312 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,336 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,360 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,384 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,411 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,436_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,445 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,455 | `uninvLagToday` | `var uninvLagToday =` |
| 4,467 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,480 | `gdpPeers` | `var gdpPeers =` |
| 4,521 | `gdpSrc` | `var gdpSrc =` |
| 4,522 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,527 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,540 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,578_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,600 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,610_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,626 | `stressScoreFor` | `function stressScoreFor(` |
| 4,632 | `stressScore` | `var stressScore =` |
| 4,638 | `powerOf` | `var powerOf =` |
| 4,639 | `powerScore` | `var powerScore =` |
| 4,656 | `stressHistory` | `var stressHistory =` |
| 4,667 | `powerMeter` | `var powerMeter =` |
| 4,669 | `stressNoteFull` | `var stressNoteFull =` |
| 4,701 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,703_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,726 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,727 | `deficitHistory` | `var deficitHistory =` |
| 4,730 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,737 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,739 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,782_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,795 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,808_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,822 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,825 | `timelineSpan` | `function timelineSpan(` |
| 4,831 | `timelineFor` | `function timelineFor(` |
| 4,844 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,850_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,856 | `windowScale` | `function windowScale(` |
| 4,872 | `windowYears` | `function windowYears(` |
| 4,890 | `refName` | `function refName(` |
| 4,897 | `histReadEnsure` | `function histReadEnsure(` |
| 4,928 | `seatBandReading` | `function seatBandReading(` |
| 4,951 | `histReadFill` | `function histReadFill(` |
| 4,987 | `wireHistHover` | `function wireHistHover(` |
| 5,046 | `mWindowFrom` | `function mWindowFrom(` |
| 5,051 | `qWindowFrom` | `function qWindowFrom(` |
| 5,056 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,057 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,059 | `DEF_1983` | `var DEF_1983 =` |
| 5,061 | `defFrom` | `function defFrom(` |
| 5,072 | `deficitChart` | `function deficitChart(` |
| 5,162 | `deficitBlock` | `function deficitBlock(` |
| 5,224 | `buffettHistory` | `var buffettHistory =` |
| 5,254 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,255 | `hyDates` | `var hyDates =` |
| 5,256 | `hyOas` | `var hyOas =` |
| 5,257 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,264 | `hyAt` | `function hyAt(` |
| 5,268 | `hyLabel` | `function hyLabel(` |
| 5,269 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,270 | `hyNum` | `function hyNum(` |
| 5,271 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,281 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,291 | `capeHistory` | `var capeHistory =` |
| 5,293 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,311_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,317 | `sentiment` | `var sentiment =` |
| 5,335 | `valuation` | `var valuation =` |
| 5,372 | `valRow` | `function valRow(` |
| 5,380 | `coincident` | `var coincident =` |
| 5,441 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,459 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,460 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,461 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,463_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,476 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,477 | `m2vHistory` | `var m2vHistory =` |
| 5,497 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,596 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,697 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,698 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 5,738_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,744 | `HIST_NOTE` | `var HIST_NOTE =` |
| 5,745 | `DOTS` | `var DOTS =` |
| 5,747 | `HIST_HEAD` | `var HIST_HEAD =` |
| 5,772 | `histHead` | `function histHead(` |
| 5,793 | `headNoteIdx` | `var headNoteIdx =` |
| 5,794 | `headMenuHtml` | `function headMenuHtml(` |
| 5,814 | `headMenuFor` | `var headMenuFor =` |
| 5,815 | `paintHeadMenus` | `function paintHeadMenus(` |
| 5,841 | `nameWithMark` | `function nameWithMark(` |
| 5,847 | `panelRow` | `function panelRow(` |
| 5,873 | `panelFromMeter` | `function panelFromMeter(` |
| 5,887 | `meterFlagged` | `function meterFlagged(` |
| 5,898 | `desireInfoHtml` | `function desireInfoHtml(` |
| 5,926 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 5,940 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 5,959 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 5,978 | `outputInfoHtml` | `function outputInfoHtml(` |
| 5,992 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,017 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,048 | `desireBlock` | `function desireBlock(` |
| 6,075 | `volumeBlock` | `function volumeBlock(` |
| 6,100 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,123 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,131_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,144 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,145 | `m2Level` | `var m2Level =` |
| 6,167 | `m2Yoy` | `var m2Yoy =` |
| 6,168 | `M2_NORM` | `var M2_NORM =` |
| 6,173 | `volumeVerdict` | `function volumeVerdict(` |
| 6,210 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,211 | `unempHistory` | `var unempHistory =` |
| 6,217 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,232 | `NROU_NOW` | `var NROU_NOW =` |
| 6,233 | `unempState` | `function unempState(` |
| 6,239 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,299 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,300 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,303 | `qAtIndex` | `function qAtIndex(` |
| 6,304 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,312_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,327 | `householdsChart` | `function householdsChart(` |
| 6,391 | `refKey` | `function refKey(` |
| 6,429 | `lastChartAvg` | `var lastChartAvg =` |
| 6,430 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,515 | `GDP_NORM` | `var GDP_NORM =` |
| 6,521 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,522 | `gdpNowQ` | `var gdpNowQ =` |
| 6,523 | `gdpMeter` | `var gdpMeter =` |
| 6,526 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,548 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,614 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,678 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,686 | `velocityVerdict` | `function velocityVerdict(` |
| 6,694 | `derivePulseTag` | `function derivePulseTag(` |
| 6,700 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,760_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,769 | `seasonReading` | `var seasonReading =` |
| 6,818 | `frameworkRows` | `var frameworkRows =` |
| 6,828 | `vixRow` | `var vixRow =` |
| 6,836 | `vixWordOf` | `var vixWordOf =` |
| 6,840 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 6,855_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,859 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 6,868_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,869 | `calendarTodayY` | `var calendarTodayY =` |
| 6,890 | `fearGreed` | `var fearGreed =` |
| 6,894 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 6,899 | `valuationVerdict` | `function valuationVerdict(` |
| 6,917 | `sparkHtml` | `function sparkHtml(` |
| 6,936 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 6,942_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,955 | `modeBar` | `function modeBar(` |
| 6,970 | `pickerOpen` | `var pickerOpen =` |
| 6,974 | `cycleByName` | `function cycleByName(` |
| 6,978 | `openCycle` | `function openCycle(` |
| 6,984 | `cycleSlice` | `function cycleSlice(` |
| 6,993 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,001 | `cycleMonths` | `function cycleMonths(` |
| 7,020 | `histControls` | `function histControls(` |
| 7,034 | `cycLabel` | `function cycLabel(` |
| 7,050 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,059 | `cyclePicker` | `function cyclePicker(` |
| 7,083 | `seriesBar` | `function seriesBar(` |
| 7,090 | `rangeBar` | `function rangeBar(` |
| 7,102 | `trendOf` | `function trendOf(` |
| 7,147 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,157 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,172_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,173 | `yearOf` | `function yearOf(` |
| 7,174 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,175_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,205 | `totalStat` | `function totalStat(` |
| 7,211 | `atQuarter` | `function atQuarter(` |
| 7,212 | `atMonth` | `function atMonth(` |
| 7,213 | `cycleAverages` | `function cycleAverages(` |
| 7,220 | `ordinal` | `function ordinal(` |
| 7,221 | `hiCard` | `function hiCard(` |
| 7,232 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,246_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,253 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,269 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,276 | `moreRow` | `function moreRow(` |
| 7,282 | `powerPageNote` | `var powerPageNote =` |
| 7,283 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,289_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,292 | `xLabelOf` | `function xLabelOf(` |
| 7,312 | `fitGroup` | `function fitGroup(` |
| 7,334 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,393_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,417 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,427 | `vGrid` | `function vGrid(` |
| 7,452 | `COL_FILL` | `var COL_FILL =` |
| 7,459 | `AXIS` | `var AXIS =` |
| 7,460 | `chartAxes` | `function chartAxes(` |
| 7,491 | `divergeChart` | `function divergeChart(` |
| 7,552 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,581_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,589 | `maxIn` | `function maxIn(` |
| 7,602 | `reserveGauge` | `function reserveGauge(` |
| 7,623 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,637 | `PEEK_W` | `var PEEK_W =` |
| 7,640 | `PEEK_H` | `var PEEK_H =` |
| 7,641 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,646 | `colPeek` | `function colPeek(` |
| 7,673 | `meterPeek` | `function meterPeek(` |
| 7,690 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,695 | `pressureZone` | `function pressureZone(` |
| 7,710 | `HZN_BACK` | `var HZN_BACK =` |
| 7,711 | `hznLast` | `function hznLast(` |
| 7,712 | `hznBack` | `function hznBack(` |
| 7,713 | `horizonWord` | `function horizonWord(` |
| 7,738 | `HZN_METERS` | `var HZN_METERS =` |
| 7,746 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 7,770 | `_hznPanel` | `var _hznPanel =` |
| 7,771 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 7,791 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 7,792 | `levelZone` | `function levelZone(` |
| 7,804 | `RISK_REWARD` | `var RISK_REWARD =` |
| 7,809 | `RISK_RISK` | `var RISK_RISK =` |
| 7,814 | `riskCell` | `function riskCell(` |
| 7,815 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 7,846 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 7,871_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,890 | `pulseClipN` | `var pulseClipN =` |
| 7,891 | `beatPath` | `function beatPath(` |
| 7,916 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 7,930 | `pulsePeek` | `function pulsePeek(` |
| 7,938 | `pulseBlock` | `function pulseBlock(` |
| 7,958 | `CHEV` | `var CHEV =` |
| 7,960 | `peekCard` | `function peekCard(` |
| 7,982 | `moodFrom` | `function moodFrom(` |
| 8,019 | `dropSvg` | `function dropSvg(` |
| 8,027 | `speakerSvg` | `function speakerSvg(` |
| 8,035 | `gaugeSvg` | `function gaugeSvg(` |
| 8,039 | `diamondSvg` | `function diamondSvg(` |
| 8,051 | `energyFromReserve` | `function energyFromReserve(` |
| 8,063 | `sproutSvg` | `function sproutSvg(` |
| 8,074 | `markSvg` | `function markSvg(` |
| 8,078 | `flameSvg` | `function flameSvg(` |
| 8,082 | `gearSvg` | `function gearSvg(` |
| 8,095 | `pulseSvg` | `function pulseSvg(` |
| 8,099 | `thermoSvg` | `function thermoSvg(` |
| 8,118 | `trendUpSvg` | `function trendUpSvg(` |
| 8,120 | `ecgSvg` | `function ecgSvg(` |
| 8,134 | `circulationSvg` | `function circulationSvg(` |
| 8,135 | `weatherSvg` | `function weatherSvg(` |
| 8,156 | `moodSvg` | `function moodSvg(` |
| 8,173 | `boltSvg` | `function boltSvg(` |
| 8,176 | `houseSvg` | `function houseSvg(` |
| 8,184 | `sunriseSvg` | `function sunriseSvg(` |
| 8,194 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,206 | `signMarks` | `var signMarks =` |
| 8,213 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,230_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,251 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,252 | `dsrHistory` | `var dsrHistory =` |
| 8,253 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,254 | `savHistory` | `var savHistory =` |
| 8,259 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,269 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,270 | `dsrNow` | `var dsrNow =` |
| 8,271 | `savNow` | `var savNow =` |
| 8,272 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,277 | `householdsWord` | `function householdsWord(` |
| 8,284 | `householdsNow` | `var householdsNow =` |
| 8,291 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,292 | `dsrMeter` | `var dsrMeter =` |
| 8,295 | `savMeter` | `var savMeter =` |
| 8,298 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,315 | `savInfoHtml` | `function savInfoHtml(` |
| 8,333 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,342 | `greedScore` | `var greedScore =` |
| 8,343 | `moodNow` | `var moodNow =` |
| 8,344 | `fgSub` | `var fgSub =` |
| 8,345 | `fgDetailHtml` | `function fgDetailHtml(` |
| 8,346 | `fgNoteFull` | `var fgNoteFull =` |
| 8,352 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,393 | `marketCycles` | `var marketCycles =` |
| 8,423 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,425_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,446 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,447 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,452_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,473 | `slopeOf` | `function slopeOf(` |
| 8,484 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,490 | `readSeason` | `function readSeason(` |
| 8,515 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,517 | `qLabel` | `function qLabel(` |
| 8,541 | `regimeTrack` | `function regimeTrack(` |
| 8,564 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,566_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,573 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,574 | `seasonTitle` | `function seasonTitle(` |
| 8,575 | `monthLabel` | `function monthLabel(` |
| 8,576 | `cycleModel` | `function cycleModel(` |
| 8,628 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,636 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,643 | `nowModel` | `var nowModel =` |
| 8,644 | `readingNow` | `var readingNow =` |
| 8,645 | `cpiNow` | `var cpiNow =` |
| 8,646 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,647 | `currentSeason` | `var currentSeason =` |
| 8,648 | `seasonWhy` | `var seasonWhy =` |
| 8,665 | `seasonGroup` | `function seasonGroup(` |
| 8,674 | `fearGauge` | `function fearGauge(` |
| 8,711 | `vitalRingSvg` | `function vitalRingSvg(` |
| 8,724 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 8,726 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 8,730 | `policyFacts` | `function policyFacts(` |
| 8,742 | `allSources` | `var allSources =` |
| 8,766 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 8,799_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,802 | `SVG_NS` | `var SVG_NS =` |
| 8,803 | `svgEl` | `function svgEl(` |
| 8,816 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 8,852_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,853 | `clampPct` | `function clampPct(` |
| 8,860 | `infoIcon` | `function infoIcon(` |
| 8,869 | `detailTexts` | `var detailTexts =` |
| 8,887 | `detailSlots` | `var detailSlots =` |
| 8,888 | `detailSlot` | `function detailSlot(` |
| 8,899 | `powerPanelHtml` | `var powerPanelHtml =` |
| 8,903 | `_growthPanel` | `var _growthPanel =` |
| 8,904 | `growthPanelHtml` | `function growthPanelHtml(` |
| 8,910 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 8,921 | `facts` | `function facts(` |
| 8,922 | `factsFrom` | `function factsFrom(` |
| 8,926 | `expandBtn` | `function expandBtn(` |
| 8,932 | `sheetRenderers` | `var sheetRenderers =` |
| 8,949 | `pageMode` | `var pageMode =` |
| 8,956 | `pageCycles` | `var pageCycles =` |
| 8,961 | `pageRange` | `var pageRange =` |
| 8,967 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,001_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,012 | `meterHtml` | `function meterHtml(` |
| 9,040 | `srcHtml` | `function srcHtml(` |
| 9,049 | `TIMING` | `var TIMING =` |
| 9,055 | `timingMark` | `function timingMark(` |
| 9,069 | `timingPill` | `function timingPill(` |
| 9,090 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,098 | `seatPageFoot` | `function seatPageFoot(` |
| 9,121 | `timingMembers` | `var timingMembers =` |
| 9,122 | `registerTiming` | `function registerTiming(` |
| 9,128 | `headHtml` | `function headHtml(` |
| 9,146 | `heldHighlights` | `var heldHighlights =` |
| 9,147 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,205_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,206 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,573_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,574 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 9,784_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,785 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 9,817_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,823 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 9,907_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,908 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 9,926_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,929 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the mood ring, then the Fear & Greed lead row and its markers

_line 9,952_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,953 | `renderPsychologyTag` | `function renderPsychologyTag(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,009_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,012 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,203_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,215 | `totalRiseIn` | `function totalRiseIn(` |
| 10,225 | `eraInflation` | `function eraInflation(` |
| 10,236 | `eraGrowth` | `function eraGrowth(` |
| 10,252 | `fmtSigned` | `function fmtSigned(` |
| 10,257 | `regimeArrow` | `function regimeArrow(` |
| 10,263 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,264 | `growthShown` | `function growthShown(` |
| 10,265 | `growthShownCap` | `function growthShownCap(` |
| 10,266 | `regimeState` | `function regimeState(` |
| 10,270 | `phaseClass` | `function phaseClass(` |
| 10,272 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,284 | `cycleViewEl` | `var cycleViewEl =` |
| 10,288 | `tempCard` | `var tempCard =` |
| 10,289 | `placeCharts` | `function placeCharts(` |
| 10,294 | `shownEra` | `var shownEra =` |
| 10,295 | `calendarReset` | `var calendarReset =` |
| 10,296 | `metricPageReset` | `var metricPageReset =` |
| 10,297 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,300 | `topbarBack` | `var topbarBack =` |
| 10,301 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,308_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,309 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,457_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,458 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,476_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,479 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,500_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,506 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,509 | `hubSet` | `function hubSet(` |
| 10,522 | `quarterPopup` | `function quarterPopup(` |
| 10,555 | `hubShowDefault` | `function hubShowDefault(` |
| 10,564 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,570 | `hubShowYear` | `function hubShowYear(` |
| 10,585 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 10,677_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,680 | `tempState` | `var tempState =` |
| 10,683 | `chartLink` | `var chartLink =` |
| 10,703 | `m2Step` | `function m2Step(` |
| 10,706 | `heatStep` | `function heatStep(` |
| 10,710 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 10,897_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,900 | `drawGrowth` | `function drawGrowth(` |
| 11,039 | `wireResize` | `function wireResize(` |
| 11,045 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,057_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,058 | `renderCycleView` | `function renderCycleView(` |
| 11,111 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,122 | `PEER_CARET` | `var PEER_CARET =` |
| 11,123 | `peerList` | `function peerList(` |
| 11,124 | `peerChosen` | `function peerChosen(` |
| 11,125 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,129 | `renderPeerPills` | `function renderPeerPills(` |
| 11,179 | `shownEraModel` | `var shownEraModel =` |
| 11,180 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,182_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,184 | `stripGroupName` | `var stripGroupName =` |
| 11,185 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,231 | `marketStripHtml` | `function marketStripHtml(` |
| 11,272 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,273 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,304_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,305 | `renderCycleList` | `function renderCycleList(` |
| 11,395 | `renderSignsList` | `function renderSignsList(` |
| 11,651 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 12,886_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,887 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 12,949_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,950 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 12,983_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,984 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,873–3,876 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 7,719–7,732 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,524–8,537 | `seasonTrackAll` | The season, computed |
| 8,559–8,563 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,357 |
| `desire-range` | 9,519 |
| `hzn-range` | 9,856 |
| `pulse-range` | 9,470 |
| `sheet-marker-deficit` | 12,354 |
| `sheet-metric-gdp` | 12,242 |
| `sheet-metric-households` | 12,388 |
| `sheet-metric-power` | 12,321 |
| `sheet-metric-temp` | 12,192 |
| `sheet-metric-valuation` | 12,429 |
| `sheet-sign-activity` | 12,303 |
| `sheet-sign-desire` | 9,520 |
| `sheet-sign-horizon` | 9,857 |
| `sheet-sign-pulse` | 9,469 |
| `sheet-sign-volume` | 9,493 |
| `sheet-sign-yield` | 9,437 |
| `volume-range` | 9,494 |
| `ylm-range` | 9,565 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,363 |
| `desire-range` | 9,502 |
| `hzn-range` | 9,833 |
| `pulse-range` | 9,447 |
| `sheet-metric-gdp` | 12,243 |
| `sheet-metric-power` | 12,322 |
| `sheet-metric-temp` | 12,193 |
| `sheet-metric-valuation` | 12,430 |
| `volume-range` | 9,474 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 5,748 |
| `sheet-metric-gdp` | 5,749 |
| `sheet-sign-activity` | 5,750 |
| `sheet-metric-power` | 5,751 |
| `sheet-metric-valuation` | 5,753 |
| `sheet-metric-households` | 5,754 |
| `deficit-range` | 5,755 |
| `volume-range` | 5,756 |
| `pulse-range` | 5,757 |
| `hzn-range` | 5,758 |
| `ylm-range` | 5,769 |
| `desire-range` | 5,770 |

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

