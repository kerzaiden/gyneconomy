# Map of `index.html`

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

`index.html` is **13,093 lines**, about 1069 KB, roughly **304 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -n 'function moodFrom(' index.html` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `be08f9b` on 2026-09-26.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,911 | the whole stylesheet, every token and rule |
| **Markup** | 2,912–3,644 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,645–13,069 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,070–13,093 | </body></html> |

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
| 3,957 | `repaintYieldRow` | `function repaintYieldRow(` |
| 3,965 | `repaintValuationRow` | `function repaintValuationRow(` |
| 3,973 | `REPAINT` | `var REPAINT =` |
| 3,990 | `liveAsOf` | `var liveAsOf =` |
| 3,991 | `fmtAsOf` | `function fmtAsOf(` |
| 3,996 | `applyLive` | `function applyLive(` |
| 4,058 | `repaintPolicy` | `function repaintPolicy(` |
| 4,108 | `GYN` | `var GYN =` |
| 4,128 | `refreshLiveData` | `function refreshLiveData(` |
| 4,169 | `fetchSiteData` | `function fetchSiteData(` |
| 4,199 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,213_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,214 | `yieldCurve` | `var yieldCurve =` |
| 4,227 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,251 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,258 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 4,264 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,291 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,293_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,298 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,322 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,346 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,370 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,397 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,422_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,431 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,441 | `uninvLagToday` | `var uninvLagToday =` |
| 4,453 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,466 | `gdpPeers` | `var gdpPeers =` |
| 4,507 | `gdpSrc` | `var gdpSrc =` |
| 4,508 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,513 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,526 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,564_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,586 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,596_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,612 | `stressScoreFor` | `function stressScoreFor(` |
| 4,618 | `stressScore` | `var stressScore =` |
| 4,624 | `powerOf` | `var powerOf =` |
| 4,625 | `powerScore` | `var powerScore =` |
| 4,642 | `stressHistory` | `var stressHistory =` |
| 4,653 | `powerMeter` | `var powerMeter =` |
| 4,655 | `stressNoteFull` | `var stressNoteFull =` |
| 4,687 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,689_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,712 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,713 | `deficitHistory` | `var deficitHistory =` |
| 4,716 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,723 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,725 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,768_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,781 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,794_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,808 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,811 | `timelineSpan` | `function timelineSpan(` |
| 4,817 | `timelineFor` | `function timelineFor(` |
| 4,830 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,836_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,842 | `windowScale` | `function windowScale(` |
| 4,858 | `windowYears` | `function windowYears(` |
| 4,876 | `refName` | `function refName(` |
| 4,883 | `histReadEnsure` | `function histReadEnsure(` |
| 4,914 | `seatBandReading` | `function seatBandReading(` |
| 4,937 | `histReadFill` | `function histReadFill(` |
| 4,973 | `wireHistHover` | `function wireHistHover(` |
| 5,032 | `mWindowFrom` | `function mWindowFrom(` |
| 5,037 | `qWindowFrom` | `function qWindowFrom(` |
| 5,042 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,043 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,045 | `DEF_1983` | `var DEF_1983 =` |
| 5,047 | `defFrom` | `function defFrom(` |
| 5,058 | `deficitChart` | `function deficitChart(` |
| 5,148 | `deficitBlock` | `function deficitBlock(` |
| 5,210 | `buffettHistory` | `var buffettHistory =` |
| 5,240 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,241 | `hyDates` | `var hyDates =` |
| 5,242 | `hyOas` | `var hyOas =` |
| 5,243 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,250 | `hyAt` | `function hyAt(` |
| 5,254 | `hyLabel` | `function hyLabel(` |
| 5,255 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,256 | `hyNum` | `function hyNum(` |
| 5,257 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,267 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,277 | `capeHistory` | `var capeHistory =` |
| 5,279 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,297_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,303 | `sentiment` | `var sentiment =` |
| 5,321 | `valuation` | `var valuation =` |
| 5,358 | `valRow` | `function valRow(` |
| 5,366 | `coincident` | `var coincident =` |
| 5,427 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,445 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,446 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,447 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,449_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,462 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,463 | `m2vHistory` | `var m2vHistory =` |
| 5,483 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,582 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,683 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,684 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 5,724_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,730 | `HIST_NOTE` | `var HIST_NOTE =` |
| 5,731 | `DOTS` | `var DOTS =` |
| 5,733 | `HIST_HEAD` | `var HIST_HEAD =` |
| 5,758 | `histHead` | `function histHead(` |
| 5,779 | `headNoteIdx` | `var headNoteIdx =` |
| 5,780 | `headMenuHtml` | `function headMenuHtml(` |
| 5,800 | `headMenuFor` | `var headMenuFor =` |
| 5,801 | `paintHeadMenus` | `function paintHeadMenus(` |
| 5,827 | `nameWithMark` | `function nameWithMark(` |
| 5,833 | `panelRow` | `function panelRow(` |
| 5,859 | `panelFromMeter` | `function panelFromMeter(` |
| 5,873 | `meterFlagged` | `function meterFlagged(` |
| 5,884 | `desireInfoHtml` | `function desireInfoHtml(` |
| 5,912 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 5,926 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 5,945 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 5,964 | `outputInfoHtml` | `function outputInfoHtml(` |
| 5,978 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,003 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,034 | `desireBlock` | `function desireBlock(` |
| 6,061 | `volumeBlock` | `function volumeBlock(` |
| 6,086 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,109 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,117_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,130 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,131 | `m2Level` | `var m2Level =` |
| 6,153 | `m2Yoy` | `var m2Yoy =` |
| 6,154 | `M2_NORM` | `var M2_NORM =` |
| 6,159 | `volumeVerdict` | `function volumeVerdict(` |
| 6,196 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,197 | `unempHistory` | `var unempHistory =` |
| 6,203 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,218 | `NROU_NOW` | `var NROU_NOW =` |
| 6,219 | `unempState` | `function unempState(` |
| 6,225 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,285 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,286 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,289 | `qAtIndex` | `function qAtIndex(` |
| 6,290 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,298_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,313 | `householdsChart` | `function householdsChart(` |
| 6,377 | `refKey` | `function refKey(` |
| 6,415 | `lastChartAvg` | `var lastChartAvg =` |
| 6,416 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,501 | `GDP_NORM` | `var GDP_NORM =` |
| 6,507 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,508 | `gdpNowQ` | `var gdpNowQ =` |
| 6,509 | `gdpMeter` | `var gdpMeter =` |
| 6,512 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,534 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,600 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,664 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,672 | `velocityVerdict` | `function velocityVerdict(` |
| 6,680 | `derivePulseTag` | `function derivePulseTag(` |
| 6,686 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,746_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,755 | `seasonReading` | `var seasonReading =` |
| 6,804 | `frameworkRows` | `var frameworkRows =` |
| 6,814 | `vixRow` | `var vixRow =` |
| 6,822 | `vixWordOf` | `var vixWordOf =` |
| 6,826 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 6,841_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,845 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 6,854_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,855 | `calendarTodayY` | `var calendarTodayY =` |
| 6,876 | `fearGreed` | `var fearGreed =` |
| 6,880 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 6,885 | `valuationVerdict` | `function valuationVerdict(` |
| 6,903 | `sparkHtml` | `function sparkHtml(` |
| 6,922 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 6,928_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,941 | `modeBar` | `function modeBar(` |
| 6,956 | `pickerOpen` | `var pickerOpen =` |
| 6,960 | `cycleByName` | `function cycleByName(` |
| 6,964 | `openCycle` | `function openCycle(` |
| 6,970 | `cycleSlice` | `function cycleSlice(` |
| 6,979 | `totalGrowthYears` | `function totalGrowthYears(` |
| 6,987 | `cycleMonths` | `function cycleMonths(` |
| 7,006 | `histControls` | `function histControls(` |
| 7,020 | `cycLabel` | `function cycLabel(` |
| 7,036 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,045 | `cyclePicker` | `function cyclePicker(` |
| 7,069 | `seriesBar` | `function seriesBar(` |
| 7,076 | `rangeBar` | `function rangeBar(` |
| 7,088 | `trendOf` | `function trendOf(` |
| 7,133 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,143 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,158_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,159 | `yearOf` | `function yearOf(` |
| 7,160 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,161_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,191 | `totalStat` | `function totalStat(` |
| 7,197 | `atQuarter` | `function atQuarter(` |
| 7,198 | `atMonth` | `function atMonth(` |
| 7,199 | `cycleAverages` | `function cycleAverages(` |
| 7,206 | `ordinal` | `function ordinal(` |
| 7,207 | `hiCard` | `function hiCard(` |
| 7,218 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,232_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,239 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,255 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,262 | `moreRow` | `function moreRow(` |
| 7,268 | `powerPageNote` | `var powerPageNote =` |
| 7,269 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,275_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,278 | `xLabelOf` | `function xLabelOf(` |
| 7,298 | `fitGroup` | `function fitGroup(` |
| 7,320 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,379_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,403 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,413 | `vGrid` | `function vGrid(` |
| 7,438 | `COL_FILL` | `var COL_FILL =` |
| 7,445 | `AXIS` | `var AXIS =` |
| 7,446 | `chartAxes` | `function chartAxes(` |
| 7,477 | `divergeChart` | `function divergeChart(` |
| 7,538 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,567_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,575 | `maxIn` | `function maxIn(` |
| 7,588 | `reserveGauge` | `function reserveGauge(` |
| 7,609 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,623 | `PEEK_W` | `var PEEK_W =` |
| 7,626 | `PEEK_H` | `var PEEK_H =` |
| 7,627 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,632 | `colPeek` | `function colPeek(` |
| 7,659 | `meterPeek` | `function meterPeek(` |
| 7,676 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,681 | `pressureZone` | `function pressureZone(` |
| 7,696 | `HZN_BACK` | `var HZN_BACK =` |
| 7,697 | `hznLast` | `function hznLast(` |
| 7,698 | `hznBack` | `function hznBack(` |
| 7,699 | `horizonWord` | `function horizonWord(` |
| 7,724 | `HZN_METERS` | `var HZN_METERS =` |
| 7,732 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 7,756 | `_hznPanel` | `var _hznPanel =` |
| 7,757 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 7,777 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 7,778 | `levelZone` | `function levelZone(` |
| 7,790 | `RISK_REWARD` | `var RISK_REWARD =` |
| 7,795 | `RISK_RISK` | `var RISK_RISK =` |
| 7,800 | `riskCell` | `function riskCell(` |
| 7,801 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 7,832 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 7,857_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,876 | `pulseClipN` | `var pulseClipN =` |
| 7,877 | `beatPath` | `function beatPath(` |
| 7,902 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 7,916 | `pulsePeek` | `function pulsePeek(` |
| 7,924 | `pulseBlock` | `function pulseBlock(` |
| 7,944 | `CHEV` | `var CHEV =` |
| 7,946 | `peekCard` | `function peekCard(` |
| 7,968 | `moodFrom` | `function moodFrom(` |
| 8,005 | `dropSvg` | `function dropSvg(` |
| 8,013 | `speakerSvg` | `function speakerSvg(` |
| 8,021 | `gaugeSvg` | `function gaugeSvg(` |
| 8,025 | `diamondSvg` | `function diamondSvg(` |
| 8,037 | `energyFromReserve` | `function energyFromReserve(` |
| 8,049 | `sproutSvg` | `function sproutSvg(` |
| 8,060 | `markSvg` | `function markSvg(` |
| 8,064 | `flameSvg` | `function flameSvg(` |
| 8,068 | `gearSvg` | `function gearSvg(` |
| 8,081 | `pulseSvg` | `function pulseSvg(` |
| 8,085 | `thermoSvg` | `function thermoSvg(` |
| 8,104 | `trendUpSvg` | `function trendUpSvg(` |
| 8,106 | `ecgSvg` | `function ecgSvg(` |
| 8,120 | `circulationSvg` | `function circulationSvg(` |
| 8,121 | `weatherSvg` | `function weatherSvg(` |
| 8,142 | `moodSvg` | `function moodSvg(` |
| 8,159 | `boltSvg` | `function boltSvg(` |
| 8,162 | `houseSvg` | `function houseSvg(` |
| 8,170 | `sunriseSvg` | `function sunriseSvg(` |
| 8,180 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,192 | `signMarks` | `var signMarks =` |
| 8,199 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,216_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,237 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,238 | `dsrHistory` | `var dsrHistory =` |
| 8,239 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,240 | `savHistory` | `var savHistory =` |
| 8,245 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,255 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,256 | `dsrNow` | `var dsrNow =` |
| 8,257 | `savNow` | `var savNow =` |
| 8,258 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,263 | `householdsWord` | `function householdsWord(` |
| 8,270 | `householdsNow` | `var householdsNow =` |
| 8,277 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,278 | `dsrMeter` | `var dsrMeter =` |
| 8,281 | `savMeter` | `var savMeter =` |
| 8,284 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,301 | `savInfoHtml` | `function savInfoHtml(` |
| 8,319 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,328 | `greedScore` | `var greedScore =` |
| 8,329 | `moodNow` | `var moodNow =` |
| 8,330 | `fgSub` | `var fgSub =` |
| 8,331 | `fgDetailHtml` | `function fgDetailHtml(` |
| 8,332 | `fgNoteFull` | `var fgNoteFull =` |
| 8,338 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,379 | `marketCycles` | `var marketCycles =` |
| 8,409 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,411_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,432 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,433 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,438_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,459 | `slopeOf` | `function slopeOf(` |
| 8,470 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,476 | `readSeason` | `function readSeason(` |
| 8,501 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,503 | `qLabel` | `function qLabel(` |
| 8,527 | `regimeTrack` | `function regimeTrack(` |
| 8,550 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,552_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,559 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,560 | `seasonTitle` | `function seasonTitle(` |
| 8,561 | `monthLabel` | `function monthLabel(` |
| 8,562 | `cycleModel` | `function cycleModel(` |
| 8,614 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,622 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,629 | `nowModel` | `var nowModel =` |
| 8,630 | `readingNow` | `var readingNow =` |
| 8,631 | `cpiNow` | `var cpiNow =` |
| 8,632 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,633 | `currentSeason` | `var currentSeason =` |
| 8,634 | `seasonWhy` | `var seasonWhy =` |
| 8,651 | `seasonGroup` | `function seasonGroup(` |
| 8,660 | `fearGauge` | `function fearGauge(` |
| 8,697 | `vitalRingSvg` | `function vitalRingSvg(` |
| 8,710 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 8,712 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 8,716 | `policyFacts` | `function policyFacts(` |
| 8,728 | `allSources` | `var allSources =` |
| 8,752 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 8,785_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,788 | `SVG_NS` | `var SVG_NS =` |
| 8,789 | `svgEl` | `function svgEl(` |
| 8,802 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 8,838_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,839 | `clampPct` | `function clampPct(` |
| 8,846 | `infoIcon` | `function infoIcon(` |
| 8,855 | `detailTexts` | `var detailTexts =` |
| 8,873 | `detailSlots` | `var detailSlots =` |
| 8,874 | `detailSlot` | `function detailSlot(` |
| 8,885 | `powerPanelHtml` | `var powerPanelHtml =` |
| 8,889 | `_growthPanel` | `var _growthPanel =` |
| 8,890 | `growthPanelHtml` | `function growthPanelHtml(` |
| 8,896 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 8,907 | `facts` | `function facts(` |
| 8,908 | `factsFrom` | `function factsFrom(` |
| 8,912 | `expandBtn` | `function expandBtn(` |
| 8,918 | `sheetRenderers` | `var sheetRenderers =` |
| 8,935 | `pageMode` | `var pageMode =` |
| 8,942 | `pageCycles` | `var pageCycles =` |
| 8,947 | `pageRange` | `var pageRange =` |
| 8,953 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 8,987_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,998 | `meterHtml` | `function meterHtml(` |
| 9,026 | `srcHtml` | `function srcHtml(` |
| 9,035 | `TIMING` | `var TIMING =` |
| 9,041 | `timingMark` | `function timingMark(` |
| 9,055 | `timingPill` | `function timingPill(` |
| 9,076 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,084 | `seatPageFoot` | `function seatPageFoot(` |
| 9,107 | `timingMembers` | `var timingMembers =` |
| 9,108 | `registerTiming` | `function registerTiming(` |
| 9,114 | `headHtml` | `function headHtml(` |
| 9,132 | `heldHighlights` | `var heldHighlights =` |
| 9,133 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,191_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,192 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,559_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,560 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 9,770_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,771 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 9,803_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,809 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 9,893_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,894 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 9,912_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,915 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the mood ring, then the Fear & Greed lead row and its markers

_line 9,938_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,939 | `renderPsychologyTag` | `function renderPsychologyTag(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 9,991_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,994 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,185_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,197 | `totalRiseIn` | `function totalRiseIn(` |
| 10,207 | `eraInflation` | `function eraInflation(` |
| 10,218 | `eraGrowth` | `function eraGrowth(` |
| 10,234 | `fmtSigned` | `function fmtSigned(` |
| 10,239 | `regimeArrow` | `function regimeArrow(` |
| 10,245 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,246 | `growthShown` | `function growthShown(` |
| 10,247 | `growthShownCap` | `function growthShownCap(` |
| 10,248 | `regimeState` | `function regimeState(` |
| 10,252 | `phaseClass` | `function phaseClass(` |
| 10,254 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,266 | `cycleViewEl` | `var cycleViewEl =` |
| 10,270 | `tempCard` | `var tempCard =` |
| 10,271 | `placeCharts` | `function placeCharts(` |
| 10,276 | `shownEra` | `var shownEra =` |
| 10,277 | `calendarReset` | `var calendarReset =` |
| 10,278 | `metricPageReset` | `var metricPageReset =` |
| 10,279 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,282 | `topbarBack` | `var topbarBack =` |
| 10,283 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,290_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,291 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,439_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,440 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,458_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,461 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,482_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,488 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,491 | `hubSet` | `function hubSet(` |
| 10,504 | `quarterPopup` | `function quarterPopup(` |
| 10,537 | `hubShowDefault` | `function hubShowDefault(` |
| 10,546 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,552 | `hubShowYear` | `function hubShowYear(` |
| 10,567 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 10,659_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,662 | `tempState` | `var tempState =` |
| 10,665 | `chartLink` | `var chartLink =` |
| 10,685 | `m2Step` | `function m2Step(` |
| 10,688 | `heatStep` | `function heatStep(` |
| 10,692 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 10,879_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,882 | `drawGrowth` | `function drawGrowth(` |
| 11,021 | `wireResize` | `function wireResize(` |
| 11,027 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,039_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,040 | `renderCycleView` | `function renderCycleView(` |
| 11,093 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,104 | `PEER_CARET` | `var PEER_CARET =` |
| 11,105 | `peerList` | `function peerList(` |
| 11,106 | `peerChosen` | `function peerChosen(` |
| 11,107 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,111 | `renderPeerPills` | `function renderPeerPills(` |
| 11,161 | `shownEraModel` | `var shownEraModel =` |
| 11,162 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,164_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,166 | `stripGroupName` | `var stripGroupName =` |
| 11,167 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,213 | `marketStripHtml` | `function marketStripHtml(` |
| 11,254 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,255 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,286_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,287 | `renderCycleList` | `function renderCycleList(` |
| 11,377 | `renderSignsList` | `function renderSignsList(` |
| 11,633 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 12,868_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,869 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 12,931_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,932 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 12,965_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,966 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,873–3,876 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 7,705–7,718 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,510–8,523 | `seasonTrackAll` | The season, computed |
| 8,545–8,549 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,339 |
| `desire-range` | 9,505 |
| `hzn-range` | 9,842 |
| `pulse-range` | 9,456 |
| `sheet-marker-deficit` | 12,336 |
| `sheet-metric-gdp` | 12,224 |
| `sheet-metric-households` | 12,370 |
| `sheet-metric-power` | 12,303 |
| `sheet-metric-temp` | 12,174 |
| `sheet-metric-valuation` | 12,411 |
| `sheet-sign-activity` | 12,285 |
| `sheet-sign-desire` | 9,506 |
| `sheet-sign-horizon` | 9,843 |
| `sheet-sign-pulse` | 9,455 |
| `sheet-sign-volume` | 9,479 |
| `sheet-sign-yield` | 9,423 |
| `volume-range` | 9,480 |
| `ylm-range` | 9,551 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,345 |
| `desire-range` | 9,488 |
| `hzn-range` | 9,819 |
| `pulse-range` | 9,433 |
| `sheet-metric-gdp` | 12,225 |
| `sheet-metric-power` | 12,304 |
| `sheet-metric-temp` | 12,175 |
| `sheet-metric-valuation` | 12,412 |
| `volume-range` | 9,460 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 5,734 |
| `sheet-metric-gdp` | 5,735 |
| `sheet-sign-activity` | 5,736 |
| `sheet-metric-power` | 5,737 |
| `sheet-metric-valuation` | 5,739 |
| `sheet-metric-households` | 5,740 |
| `deficit-range` | 5,741 |
| `volume-range` | 5,742 |
| `pulse-range` | 5,743 |
| `hzn-range` | 5,744 |
| `ylm-range` | 5,755 |
| `desire-range` | 5,756 |

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

