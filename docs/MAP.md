# Map of `index.html`

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

`index.html` is **13,051 lines**, about 1066 KB, roughly **303 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -n 'function moodFrom(' index.html` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `e1e293b` on 2026-09-26.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,905 | the whole stylesheet, every token and rule |
| **Markup** | 2,906–3,631 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,632–13,027 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,028–13,051 | </body></html> |

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
| 4,076 | `GYN` | `var GYN =` |
| 4,096 | `refreshLiveData` | `function refreshLiveData(` |
| 4,137 | `fetchSiteData` | `function fetchSiteData(` |
| 4,167 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,181_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,182 | `yieldCurve` | `var yieldCurve =` |
| 4,195 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,219 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,226 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 4,232 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,259 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,261_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,266 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,290 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,314 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,338 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,365 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,390_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,399 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,409 | `uninvLagToday` | `var uninvLagToday =` |
| 4,421 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,434 | `gdpPeers` | `var gdpPeers =` |
| 4,475 | `gdpSrc` | `var gdpSrc =` |
| 4,476 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,481 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,494 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,532_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,554 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,564_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,580 | `stressScoreFor` | `function stressScoreFor(` |
| 4,586 | `stressScore` | `var stressScore =` |
| 4,592 | `powerOf` | `var powerOf =` |
| 4,593 | `powerScore` | `var powerScore =` |
| 4,610 | `stressHistory` | `var stressHistory =` |
| 4,621 | `powerMeter` | `var powerMeter =` |
| 4,623 | `stressNoteFull` | `var stressNoteFull =` |
| 4,655 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,657_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,680 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,681 | `deficitHistory` | `var deficitHistory =` |
| 4,684 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,691 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,693 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,736_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,749 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,762_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,776 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,779 | `timelineSpan` | `function timelineSpan(` |
| 4,785 | `timelineFor` | `function timelineFor(` |
| 4,798 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,804_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,810 | `windowScale` | `function windowScale(` |
| 4,826 | `windowYears` | `function windowYears(` |
| 4,844 | `refName` | `function refName(` |
| 4,851 | `histReadEnsure` | `function histReadEnsure(` |
| 4,882 | `seatBandReading` | `function seatBandReading(` |
| 4,905 | `histReadFill` | `function histReadFill(` |
| 4,941 | `wireHistHover` | `function wireHistHover(` |
| 5,000 | `mWindowFrom` | `function mWindowFrom(` |
| 5,005 | `qWindowFrom` | `function qWindowFrom(` |
| 5,010 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,011 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,013 | `DEF_1983` | `var DEF_1983 =` |
| 5,015 | `defFrom` | `function defFrom(` |
| 5,026 | `deficitChart` | `function deficitChart(` |
| 5,116 | `deficitBlock` | `function deficitBlock(` |
| 5,178 | `buffettHistory` | `var buffettHistory =` |
| 5,208 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,209 | `hyDates` | `var hyDates =` |
| 5,210 | `hyOas` | `var hyOas =` |
| 5,211 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,218 | `hyAt` | `function hyAt(` |
| 5,222 | `hyLabel` | `function hyLabel(` |
| 5,223 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,224 | `hyNum` | `function hyNum(` |
| 5,225 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,235 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,245 | `capeHistory` | `var capeHistory =` |
| 5,247 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,265_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,271 | `sentiment` | `var sentiment =` |
| 5,289 | `valuation` | `var valuation =` |
| 5,326 | `valRow` | `function valRow(` |
| 5,334 | `coincident` | `var coincident =` |
| 5,395 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,413 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,414 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,415 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,417_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,430 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,431 | `m2vHistory` | `var m2vHistory =` |
| 5,451 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,550 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,651 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,652 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 5,692_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,698 | `HIST_NOTE` | `var HIST_NOTE =` |
| 5,699 | `DOTS` | `var DOTS =` |
| 5,701 | `HIST_HEAD` | `var HIST_HEAD =` |
| 5,726 | `histHead` | `function histHead(` |
| 5,744 | `headNoteIdx` | `var headNoteIdx =` |
| 5,745 | `headMenuHtml` | `function headMenuHtml(` |
| 5,765 | `headMenuFor` | `var headMenuFor =` |
| 5,766 | `paintHeadMenus` | `function paintHeadMenus(` |
| 5,792 | `nameWithMark` | `function nameWithMark(` |
| 5,798 | `panelRow` | `function panelRow(` |
| 5,822 | `panelFromMeter` | `function panelFromMeter(` |
| 5,836 | `meterFlagged` | `function meterFlagged(` |
| 5,847 | `desireInfoHtml` | `function desireInfoHtml(` |
| 5,875 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 5,889 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 5,908 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 5,927 | `outputInfoHtml` | `function outputInfoHtml(` |
| 5,941 | `activityInfoHtml` | `function activityInfoHtml(` |
| 5,966 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 5,997 | `desireBlock` | `function desireBlock(` |
| 6,024 | `volumeBlock` | `function volumeBlock(` |
| 6,049 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,072 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,080_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,093 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,094 | `m2Level` | `var m2Level =` |
| 6,116 | `m2Yoy` | `var m2Yoy =` |
| 6,117 | `M2_NORM` | `var M2_NORM =` |
| 6,122 | `volumeVerdict` | `function volumeVerdict(` |
| 6,159 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,160 | `unempHistory` | `var unempHistory =` |
| 6,166 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,181 | `NROU_NOW` | `var NROU_NOW =` |
| 6,182 | `unempState` | `function unempState(` |
| 6,188 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,248 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,249 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,252 | `qAtIndex` | `function qAtIndex(` |
| 6,253 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,261_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,276 | `householdsChart` | `function householdsChart(` |
| 6,340 | `refKey` | `function refKey(` |
| 6,378 | `lastChartAvg` | `var lastChartAvg =` |
| 6,379 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,464 | `GDP_NORM` | `var GDP_NORM =` |
| 6,470 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,471 | `gdpNowQ` | `var gdpNowQ =` |
| 6,472 | `gdpMeter` | `var gdpMeter =` |
| 6,475 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,497 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,563 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,627 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,635 | `velocityVerdict` | `function velocityVerdict(` |
| 6,643 | `derivePulseTag` | `function derivePulseTag(` |
| 6,649 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,709_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,718 | `seasonReading` | `var seasonReading =` |
| 6,767 | `frameworkRows` | `var frameworkRows =` |
| 6,777 | `vixRow` | `var vixRow =` |
| 6,785 | `vixWordOf` | `var vixWordOf =` |
| 6,789 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 6,804_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,808 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 6,817_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,818 | `calendarTodayY` | `var calendarTodayY =` |
| 6,839 | `fearGreed` | `var fearGreed =` |
| 6,843 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 6,848 | `valuationVerdict` | `function valuationVerdict(` |
| 6,866 | `sparkHtml` | `function sparkHtml(` |
| 6,885 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 6,891_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,904 | `modeBar` | `function modeBar(` |
| 6,919 | `pickerOpen` | `var pickerOpen =` |
| 6,923 | `cycleByName` | `function cycleByName(` |
| 6,927 | `openCycle` | `function openCycle(` |
| 6,933 | `cycleSlice` | `function cycleSlice(` |
| 6,942 | `totalGrowthYears` | `function totalGrowthYears(` |
| 6,950 | `cycleMonths` | `function cycleMonths(` |
| 6,969 | `histControls` | `function histControls(` |
| 6,983 | `cycLabel` | `function cycLabel(` |
| 6,999 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,008 | `cyclePicker` | `function cyclePicker(` |
| 7,032 | `seriesBar` | `function seriesBar(` |
| 7,039 | `rangeBar` | `function rangeBar(` |
| 7,051 | `trendOf` | `function trendOf(` |
| 7,096 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,106 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,121_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,122 | `yearOf` | `function yearOf(` |
| 7,123 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,124_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,154 | `totalStat` | `function totalStat(` |
| 7,160 | `atQuarter` | `function atQuarter(` |
| 7,161 | `atMonth` | `function atMonth(` |
| 7,162 | `cycleAverages` | `function cycleAverages(` |
| 7,169 | `ordinal` | `function ordinal(` |
| 7,170 | `hiCard` | `function hiCard(` |
| 7,181 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,195_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,202 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,218 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,225 | `moreRow` | `function moreRow(` |
| 7,231 | `powerPageNote` | `var powerPageNote =` |
| 7,232 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,238_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,241 | `xLabelOf` | `function xLabelOf(` |
| 7,261 | `fitGroup` | `function fitGroup(` |
| 7,283 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,342_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,366 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,376 | `vGrid` | `function vGrid(` |
| 7,401 | `COL_FILL` | `var COL_FILL =` |
| 7,408 | `AXIS` | `var AXIS =` |
| 7,409 | `chartAxes` | `function chartAxes(` |
| 7,440 | `divergeChart` | `function divergeChart(` |
| 7,501 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,530_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,538 | `maxIn` | `function maxIn(` |
| 7,551 | `reserveGauge` | `function reserveGauge(` |
| 7,572 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,586 | `PEEK_W` | `var PEEK_W =` |
| 7,589 | `PEEK_H` | `var PEEK_H =` |
| 7,590 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,595 | `colPeek` | `function colPeek(` |
| 7,622 | `meterPeek` | `function meterPeek(` |
| 7,639 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,644 | `pressureZone` | `function pressureZone(` |
| 7,659 | `HZN_BACK` | `var HZN_BACK =` |
| 7,660 | `hznLast` | `function hznLast(` |
| 7,661 | `hznBack` | `function hznBack(` |
| 7,662 | `horizonWord` | `function horizonWord(` |
| 7,687 | `HZN_METERS` | `var HZN_METERS =` |
| 7,695 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 7,719 | `_hznPanel` | `var _hznPanel =` |
| 7,720 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 7,740 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 7,741 | `levelZone` | `function levelZone(` |
| 7,753 | `RISK_REWARD` | `var RISK_REWARD =` |
| 7,758 | `RISK_RISK` | `var RISK_RISK =` |
| 7,763 | `riskCell` | `function riskCell(` |
| 7,764 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 7,795 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 7,820_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,839 | `pulseClipN` | `var pulseClipN =` |
| 7,840 | `beatPath` | `function beatPath(` |
| 7,865 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 7,879 | `pulsePeek` | `function pulsePeek(` |
| 7,887 | `pulseBlock` | `function pulseBlock(` |
| 7,907 | `CHEV` | `var CHEV =` |
| 7,909 | `peekCard` | `function peekCard(` |
| 7,931 | `moodFrom` | `function moodFrom(` |
| 7,968 | `dropSvg` | `function dropSvg(` |
| 7,976 | `speakerSvg` | `function speakerSvg(` |
| 7,984 | `gaugeSvg` | `function gaugeSvg(` |
| 7,988 | `diamondSvg` | `function diamondSvg(` |
| 8,000 | `energyFromReserve` | `function energyFromReserve(` |
| 8,012 | `sproutSvg` | `function sproutSvg(` |
| 8,023 | `markSvg` | `function markSvg(` |
| 8,027 | `flameSvg` | `function flameSvg(` |
| 8,031 | `gearSvg` | `function gearSvg(` |
| 8,044 | `pulseSvg` | `function pulseSvg(` |
| 8,048 | `thermoSvg` | `function thermoSvg(` |
| 8,067 | `trendUpSvg` | `function trendUpSvg(` |
| 8,069 | `ecgSvg` | `function ecgSvg(` |
| 8,083 | `circulationSvg` | `function circulationSvg(` |
| 8,084 | `weatherSvg` | `function weatherSvg(` |
| 8,105 | `moodSvg` | `function moodSvg(` |
| 8,122 | `boltSvg` | `function boltSvg(` |
| 8,125 | `houseSvg` | `function houseSvg(` |
| 8,133 | `sunriseSvg` | `function sunriseSvg(` |
| 8,143 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,155 | `signMarks` | `var signMarks =` |
| 8,162 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,179_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,200 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,201 | `dsrHistory` | `var dsrHistory =` |
| 8,202 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,203 | `savHistory` | `var savHistory =` |
| 8,208 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,218 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,219 | `dsrNow` | `var dsrNow =` |
| 8,220 | `savNow` | `var savNow =` |
| 8,221 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,226 | `householdsWord` | `function householdsWord(` |
| 8,233 | `householdsNow` | `var householdsNow =` |
| 8,240 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,241 | `dsrMeter` | `var dsrMeter =` |
| 8,244 | `savMeter` | `var savMeter =` |
| 8,247 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,264 | `savInfoHtml` | `function savInfoHtml(` |
| 8,282 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,291 | `greedScore` | `var greedScore =` |
| 8,292 | `moodNow` | `var moodNow =` |
| 8,293 | `fgSub` | `var fgSub =` |
| 8,294 | `fgDetailHtml` | `function fgDetailHtml(` |
| 8,295 | `fgNoteFull` | `var fgNoteFull =` |
| 8,301 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,342 | `marketCycles` | `var marketCycles =` |
| 8,372 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,374_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,395 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,396 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,401_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,422 | `slopeOf` | `function slopeOf(` |
| 8,433 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,439 | `readSeason` | `function readSeason(` |
| 8,464 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,466 | `qLabel` | `function qLabel(` |
| 8,490 | `regimeTrack` | `function regimeTrack(` |
| 8,513 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,515_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,522 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,523 | `seasonTitle` | `function seasonTitle(` |
| 8,524 | `monthLabel` | `function monthLabel(` |
| 8,525 | `cycleModel` | `function cycleModel(` |
| 8,577 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,585 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,592 | `nowModel` | `var nowModel =` |
| 8,593 | `readingNow` | `var readingNow =` |
| 8,594 | `cpiNow` | `var cpiNow =` |
| 8,595 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,596 | `currentSeason` | `var currentSeason =` |
| 8,597 | `seasonWhy` | `var seasonWhy =` |
| 8,614 | `seasonGroup` | `function seasonGroup(` |
| 8,623 | `fearGauge` | `function fearGauge(` |
| 8,660 | `vitalRingSvg` | `function vitalRingSvg(` |
| 8,673 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 8,675 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 8,679 | `policyFacts` | `function policyFacts(` |
| 8,691 | `allSources` | `var allSources =` |
| 8,715 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 8,748_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,751 | `SVG_NS` | `var SVG_NS =` |
| 8,752 | `svgEl` | `function svgEl(` |
| 8,765 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 8,801_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,802 | `clampPct` | `function clampPct(` |
| 8,809 | `infoIcon` | `function infoIcon(` |
| 8,818 | `detailTexts` | `var detailTexts =` |
| 8,836 | `detailSlots` | `var detailSlots =` |
| 8,837 | `detailSlot` | `function detailSlot(` |
| 8,848 | `powerPanelHtml` | `var powerPanelHtml =` |
| 8,852 | `_growthPanel` | `var _growthPanel =` |
| 8,853 | `growthPanelHtml` | `function growthPanelHtml(` |
| 8,859 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 8,870 | `facts` | `function facts(` |
| 8,871 | `factsFrom` | `function factsFrom(` |
| 8,875 | `expandBtn` | `function expandBtn(` |
| 8,881 | `sheetRenderers` | `var sheetRenderers =` |
| 8,898 | `pageMode` | `var pageMode =` |
| 8,905 | `pageCycles` | `var pageCycles =` |
| 8,910 | `pageRange` | `var pageRange =` |
| 8,916 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 8,950_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,961 | `meterHtml` | `function meterHtml(` |
| 8,989 | `srcHtml` | `function srcHtml(` |
| 8,998 | `TIMING` | `var TIMING =` |
| 9,004 | `timingMark` | `function timingMark(` |
| 9,018 | `timingPill` | `function timingPill(` |
| 9,039 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,047 | `seatPageFoot` | `function seatPageFoot(` |
| 9,070 | `timingMembers` | `var timingMembers =` |
| 9,071 | `registerTiming` | `function registerTiming(` |
| 9,077 | `headHtml` | `function headHtml(` |
| 9,095 | `heldHighlights` | `var heldHighlights =` |
| 9,096 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,154_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,155 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,522_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,523 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 9,733_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,734 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 9,766_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,772 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 9,856_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,857 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 9,875_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,878 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the mood ring, then the Fear & Greed lead row and its markers

_line 9,901_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,902 | `renderPsychologyTag` | `function renderPsychologyTag(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 9,954_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,957 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,148_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,160 | `totalRiseIn` | `function totalRiseIn(` |
| 10,170 | `eraInflation` | `function eraInflation(` |
| 10,181 | `eraGrowth` | `function eraGrowth(` |
| 10,197 | `fmtSigned` | `function fmtSigned(` |
| 10,202 | `regimeArrow` | `function regimeArrow(` |
| 10,208 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,209 | `growthShown` | `function growthShown(` |
| 10,210 | `growthShownCap` | `function growthShownCap(` |
| 10,211 | `regimeState` | `function regimeState(` |
| 10,215 | `phaseClass` | `function phaseClass(` |
| 10,217 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,229 | `cycleViewEl` | `var cycleViewEl =` |
| 10,233 | `tempCard` | `var tempCard =` |
| 10,234 | `placeCharts` | `function placeCharts(` |
| 10,239 | `shownEra` | `var shownEra =` |
| 10,240 | `calendarReset` | `var calendarReset =` |
| 10,241 | `metricPageReset` | `var metricPageReset =` |
| 10,242 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,245 | `topbarBack` | `var topbarBack =` |
| 10,246 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,253_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,254 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,402_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,403 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,421_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,424 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,445_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,451 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,454 | `hubSet` | `function hubSet(` |
| 10,467 | `quarterPopup` | `function quarterPopup(` |
| 10,500 | `hubShowDefault` | `function hubShowDefault(` |
| 10,509 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,515 | `hubShowYear` | `function hubShowYear(` |
| 10,530 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 10,622_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,625 | `tempState` | `var tempState =` |
| 10,628 | `chartLink` | `var chartLink =` |
| 10,648 | `m2Step` | `function m2Step(` |
| 10,651 | `heatStep` | `function heatStep(` |
| 10,655 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 10,842_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,845 | `drawGrowth` | `function drawGrowth(` |
| 10,984 | `wireResize` | `function wireResize(` |
| 10,990 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,002_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,003 | `renderCycleView` | `function renderCycleView(` |
| 11,056 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,067 | `PEER_CARET` | `var PEER_CARET =` |
| 11,068 | `peerList` | `function peerList(` |
| 11,069 | `peerChosen` | `function peerChosen(` |
| 11,070 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,074 | `renderPeerPills` | `function renderPeerPills(` |
| 11,124 | `shownEraModel` | `var shownEraModel =` |
| 11,125 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,127_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,129 | `stripGroupName` | `var stripGroupName =` |
| 11,130 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,176 | `marketStripHtml` | `function marketStripHtml(` |
| 11,217 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,218 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,249_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,250 | `renderCycleList` | `function renderCycleList(` |
| 11,340 | `renderSignsList` | `function renderSignsList(` |
| 11,596 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 12,831_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,832 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 12,894_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,895 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 12,928_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,929 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`WORKING-DOC.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,860–3,863 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 7,668–7,681 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,473–8,486 | `seasonTrackAll` | The season, computed |
| 8,508–8,512 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,302 |
| `desire-range` | 9,468 |
| `hzn-range` | 9,805 |
| `pulse-range` | 9,419 |
| `sheet-marker-deficit` | 12,299 |
| `sheet-metric-gdp` | 12,187 |
| `sheet-metric-households` | 12,333 |
| `sheet-metric-power` | 12,266 |
| `sheet-metric-temp` | 12,137 |
| `sheet-metric-valuation` | 12,374 |
| `sheet-sign-activity` | 12,248 |
| `sheet-sign-desire` | 9,469 |
| `sheet-sign-horizon` | 9,806 |
| `sheet-sign-pulse` | 9,418 |
| `sheet-sign-volume` | 9,442 |
| `sheet-sign-yield` | 9,386 |
| `volume-range` | 9,443 |
| `ylm-range` | 9,514 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,308 |
| `desire-range` | 9,451 |
| `hzn-range` | 9,782 |
| `pulse-range` | 9,396 |
| `sheet-metric-gdp` | 12,188 |
| `sheet-metric-power` | 12,267 |
| `sheet-metric-temp` | 12,138 |
| `sheet-metric-valuation` | 12,375 |
| `volume-range` | 9,423 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 5,702 |
| `sheet-metric-gdp` | 5,703 |
| `sheet-sign-activity` | 5,704 |
| `sheet-metric-power` | 5,705 |
| `sheet-metric-valuation` | 5,707 |
| `sheet-metric-households` | 5,708 |
| `deficit-range` | 5,709 |
| `volume-range` | 5,710 |
| `pulse-range` | 5,711 |
| `hzn-range` | 5,712 |
| `ylm-range` | 5,723 |
| `desire-range` | 5,724 |

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

