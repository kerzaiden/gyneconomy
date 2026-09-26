# Map of `index.html`

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

`index.html` is **12,804 lines**, about 1052 KB, roughly **299 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -n 'function moodFrom(' index.html` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `0a65372` on 2026-09-26.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,905 | the whole stylesheet, every token and rule |
| **Markup** | 2,906–3,631 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,632–12,780 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 12,781–12,804 | </body></html> |

Counts: **232** top-level functions, **175** top-level vars, **4** top-level IIFEs in the script.

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

_line 3,884_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,901 | `repaintPolicy` | `function repaintPolicy(` |
| 3,934 | `GYN` | `var GYN =` |
| 3,953 | `refreshLiveData` | `function refreshLiveData(` |
| 3,977 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 3,991_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,992 | `yieldCurve` | `var yieldCurve =` |
| 4,005 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,029 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,036 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 4,042 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,069 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,071_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,076 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,100 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,124 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,148 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,175 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,200_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,209 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,219 | `uninvLagToday` | `var uninvLagToday =` |
| 4,231 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,244 | `gdpPeers` | `var gdpPeers =` |
| 4,285 | `gdpSrc` | `var gdpSrc =` |
| 4,286 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,291 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,304 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,342_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,364 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,374_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,390 | `stressScoreFor` | `function stressScoreFor(` |
| 4,396 | `stressScore` | `var stressScore =` |
| 4,402 | `powerOf` | `var powerOf =` |
| 4,403 | `powerScore` | `var powerScore =` |
| 4,420 | `stressHistory` | `var stressHistory =` |
| 4,431 | `powerMeter` | `var powerMeter =` |
| 4,433 | `stressNoteFull` | `var stressNoteFull =` |
| 4,465 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,467_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,490 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,491 | `deficitHistory` | `var deficitHistory =` |
| 4,494 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,501 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,503 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,546_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,559 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,572_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,586 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,589 | `timelineSpan` | `function timelineSpan(` |
| 4,595 | `timelineFor` | `function timelineFor(` |
| 4,608 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,614_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,620 | `windowScale` | `function windowScale(` |
| 4,636 | `windowYears` | `function windowYears(` |
| 4,654 | `refName` | `function refName(` |
| 4,661 | `histReadEnsure` | `function histReadEnsure(` |
| 4,692 | `seatBandReading` | `function seatBandReading(` |
| 4,715 | `histReadFill` | `function histReadFill(` |
| 4,751 | `wireHistHover` | `function wireHistHover(` |
| 4,810 | `mWindowFrom` | `function mWindowFrom(` |
| 4,815 | `qWindowFrom` | `function qWindowFrom(` |
| 4,820 | `VOL_STOPS` | `var VOL_STOPS =` |
| 4,821 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 4,823 | `DEF_1983` | `var DEF_1983 =` |
| 4,825 | `defFrom` | `function defFrom(` |
| 4,836 | `deficitChart` | `function deficitChart(` |
| 4,926 | `deficitBlock` | `function deficitBlock(` |
| 4,988 | `buffettHistory` | `var buffettHistory =` |
| 5,018 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,019 | `hyDates` | `var hyDates =` |
| 5,020 | `hyOas` | `var hyOas =` |
| 5,021 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,028 | `hyAt` | `function hyAt(` |
| 5,032 | `hyLabel` | `function hyLabel(` |
| 5,033 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,034 | `hyNum` | `function hyNum(` |
| 5,035 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,045 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,055 | `capeHistory` | `var capeHistory =` |
| 5,057 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,075_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,081 | `sentiment` | `var sentiment =` |
| 5,099 | `valuation` | `var valuation =` |
| 5,136 | `valRow` | `function valRow(` |
| 5,144 | `coincident` | `var coincident =` |
| 5,205 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,223 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,224 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,225 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,227_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,240 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,241 | `m2vHistory` | `var m2vHistory =` |
| 5,261 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,360 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,461 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,462 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 5,502_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,508 | `HIST_NOTE` | `var HIST_NOTE =` |
| 5,509 | `DOTS` | `var DOTS =` |
| 5,511 | `HIST_HEAD` | `var HIST_HEAD =` |
| 5,536 | `histHead` | `function histHead(` |
| 5,554 | `headNoteIdx` | `var headNoteIdx =` |
| 5,555 | `headMenuHtml` | `function headMenuHtml(` |
| 5,575 | `headMenuFor` | `var headMenuFor =` |
| 5,576 | `paintHeadMenus` | `function paintHeadMenus(` |
| 5,602 | `nameWithMark` | `function nameWithMark(` |
| 5,608 | `panelRow` | `function panelRow(` |
| 5,632 | `panelFromMeter` | `function panelFromMeter(` |
| 5,646 | `meterFlagged` | `function meterFlagged(` |
| 5,657 | `desireInfoHtml` | `function desireInfoHtml(` |
| 5,685 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 5,699 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 5,718 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 5,737 | `outputInfoHtml` | `function outputInfoHtml(` |
| 5,751 | `activityInfoHtml` | `function activityInfoHtml(` |
| 5,776 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 5,807 | `desireBlock` | `function desireBlock(` |
| 5,834 | `volumeBlock` | `function volumeBlock(` |
| 5,859 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 5,882 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 5,890_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,903 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 5,904 | `m2Level` | `var m2Level =` |
| 5,926 | `m2Yoy` | `var m2Yoy =` |
| 5,927 | `M2_NORM` | `var M2_NORM =` |
| 5,932 | `volumeVerdict` | `function volumeVerdict(` |
| 5,969 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 5,970 | `unempHistory` | `var unempHistory =` |
| 5,976 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 5,991 | `NROU_NOW` | `var NROU_NOW =` |
| 5,992 | `unempState` | `function unempState(` |
| 5,998 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,058 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,059 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,062 | `qAtIndex` | `function qAtIndex(` |
| 6,063 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,071_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,086 | `householdsChart` | `function householdsChart(` |
| 6,150 | `refKey` | `function refKey(` |
| 6,188 | `lastChartAvg` | `var lastChartAvg =` |
| 6,189 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,274 | `GDP_NORM` | `var GDP_NORM =` |
| 6,280 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,281 | `gdpNowQ` | `var gdpNowQ =` |
| 6,282 | `gdpMeter` | `var gdpMeter =` |
| 6,285 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,307 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,373 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,437 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,445 | `velocityVerdict` | `function velocityVerdict(` |
| 6,453 | `derivePulseTag` | `function derivePulseTag(` |
| 6,459 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,519_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,528 | `seasonReading` | `var seasonReading =` |
| 6,577 | `frameworkRows` | `var frameworkRows =` |
| 6,587 | `vixRow` | `var vixRow =` |
| 6,595 | `vixWordOf` | `var vixWordOf =` |
| 6,599 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 6,614_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,618 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 6,627_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,628 | `calendarTodayY` | `var calendarTodayY =` |
| 6,649 | `fearGreed` | `var fearGreed =` |
| 6,653 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 6,658 | `valuationVerdict` | `function valuationVerdict(` |
| 6,676 | `sparkHtml` | `function sparkHtml(` |
| 6,695 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 6,701_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,714 | `modeBar` | `function modeBar(` |
| 6,729 | `pickerOpen` | `var pickerOpen =` |
| 6,733 | `cycleByName` | `function cycleByName(` |
| 6,737 | `openCycle` | `function openCycle(` |
| 6,743 | `cycleSlice` | `function cycleSlice(` |
| 6,752 | `totalGrowthYears` | `function totalGrowthYears(` |
| 6,760 | `cycleMonths` | `function cycleMonths(` |
| 6,779 | `histControls` | `function histControls(` |
| 6,793 | `cycLabel` | `function cycLabel(` |
| 6,809 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 6,818 | `cyclePicker` | `function cyclePicker(` |
| 6,842 | `seriesBar` | `function seriesBar(` |
| 6,849 | `rangeBar` | `function rangeBar(` |
| 6,861 | `trendOf` | `function trendOf(` |
| 6,906 | `TREND_ARROW` | `var TREND_ARROW =` |
| 6,916 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 6,931_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,932 | `yearOf` | `function yearOf(` |
| 6,933 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 6,934_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,964 | `totalStat` | `function totalStat(` |
| 6,970 | `atQuarter` | `function atQuarter(` |
| 6,971 | `atMonth` | `function atMonth(` |
| 6,972 | `cycleAverages` | `function cycleAverages(` |
| 6,979 | `ordinal` | `function ordinal(` |
| 6,980 | `hiCard` | `function hiCard(` |
| 6,991 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,005_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,012 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,028 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,035 | `moreRow` | `function moreRow(` |
| 7,041 | `powerPageNote` | `var powerPageNote =` |
| 7,042 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,048_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,051 | `xLabelOf` | `function xLabelOf(` |
| 7,071 | `fitGroup` | `function fitGroup(` |
| 7,093 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,152_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,176 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,186 | `vGrid` | `function vGrid(` |
| 7,211 | `COL_FILL` | `var COL_FILL =` |
| 7,218 | `AXIS` | `var AXIS =` |
| 7,219 | `chartAxes` | `function chartAxes(` |
| 7,250 | `divergeChart` | `function divergeChart(` |
| 7,311 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,340_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,348 | `maxIn` | `function maxIn(` |
| 7,361 | `reserveGauge` | `function reserveGauge(` |
| 7,382 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,396 | `PEEK_W` | `var PEEK_W =` |
| 7,399 | `PEEK_H` | `var PEEK_H =` |
| 7,400 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,405 | `colPeek` | `function colPeek(` |
| 7,432 | `meterPeek` | `function meterPeek(` |
| 7,449 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,454 | `pressureZone` | `function pressureZone(` |
| 7,469 | `HZN_BACK` | `var HZN_BACK =` |
| 7,470 | `hznLast` | `function hznLast(` |
| 7,471 | `hznBack` | `function hznBack(` |
| 7,472 | `horizonWord` | `function horizonWord(` |
| 7,497 | `HZN_METERS` | `var HZN_METERS =` |
| 7,505 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 7,529 | `_hznPanel` | `var _hznPanel =` |
| 7,530 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 7,550 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 7,551 | `levelZone` | `function levelZone(` |
| 7,563 | `RISK_REWARD` | `var RISK_REWARD =` |
| 7,568 | `RISK_RISK` | `var RISK_RISK =` |
| 7,573 | `riskCell` | `function riskCell(` |
| 7,574 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 7,605 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 7,630_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,649 | `pulseClipN` | `var pulseClipN =` |
| 7,650 | `beatPath` | `function beatPath(` |
| 7,675 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 7,689 | `pulsePeek` | `function pulsePeek(` |
| 7,697 | `pulseBlock` | `function pulseBlock(` |
| 7,717 | `CHEV` | `var CHEV =` |
| 7,719 | `peekCard` | `function peekCard(` |
| 7,741 | `moodFrom` | `function moodFrom(` |
| 7,778 | `dropSvg` | `function dropSvg(` |
| 7,786 | `speakerSvg` | `function speakerSvg(` |
| 7,794 | `gaugeSvg` | `function gaugeSvg(` |
| 7,798 | `diamondSvg` | `function diamondSvg(` |
| 7,810 | `energyFromReserve` | `function energyFromReserve(` |
| 7,822 | `sproutSvg` | `function sproutSvg(` |
| 7,833 | `markSvg` | `function markSvg(` |
| 7,837 | `flameSvg` | `function flameSvg(` |
| 7,841 | `gearSvg` | `function gearSvg(` |
| 7,854 | `pulseSvg` | `function pulseSvg(` |
| 7,858 | `thermoSvg` | `function thermoSvg(` |
| 7,877 | `trendUpSvg` | `function trendUpSvg(` |
| 7,879 | `ecgSvg` | `function ecgSvg(` |
| 7,893 | `circulationSvg` | `function circulationSvg(` |
| 7,894 | `weatherSvg` | `function weatherSvg(` |
| 7,915 | `moodSvg` | `function moodSvg(` |
| 7,932 | `boltSvg` | `function boltSvg(` |
| 7,935 | `houseSvg` | `function houseSvg(` |
| 7,943 | `sunriseSvg` | `function sunriseSvg(` |
| 7,953 | `umbrellaSvg` | `function umbrellaSvg(` |
| 7,965 | `signMarks` | `var signMarks =` |
| 7,972 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 7,989_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,010 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,011 | `dsrHistory` | `var dsrHistory =` |
| 8,012 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,013 | `savHistory` | `var savHistory =` |
| 8,018 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,028 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,029 | `dsrNow` | `var dsrNow =` |
| 8,030 | `savNow` | `var savNow =` |
| 8,031 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,036 | `householdsWord` | `function householdsWord(` |
| 8,043 | `householdsNow` | `var householdsNow =` |
| 8,050 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,051 | `dsrMeter` | `var dsrMeter =` |
| 8,054 | `savMeter` | `var savMeter =` |
| 8,057 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,074 | `savInfoHtml` | `function savInfoHtml(` |
| 8,092 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,101 | `greedScore` | `var greedScore =` |
| 8,102 | `moodNow` | `var moodNow =` |
| 8,103 | `fgSub` | `var fgSub =` |
| 8,104 | `fgDetailHtml` | `function fgDetailHtml(` |
| 8,105 | `fgNoteFull` | `var fgNoteFull =` |
| 8,111 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,152 | `marketCycles` | `var marketCycles =` |
| 8,182 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,184_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,205 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,206 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,211_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,232 | `slopeOf` | `function slopeOf(` |
| 8,243 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,249 | `readSeason` | `function readSeason(` |
| 8,274 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,276 | `qLabel` | `function qLabel(` |
| 8,300 | `regimeTrack` | `function regimeTrack(` |
| 8,323 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,325_ · 19 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,332 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,333 | `seasonTitle` | `function seasonTitle(` |
| 8,334 | `monthLabel` | `function monthLabel(` |
| 8,335 | `cycleModel` | `function cycleModel(` |
| 8,387 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,395 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,402 | `nowModel` | `var nowModel =` |
| 8,403 | `readingNow` | `var readingNow =` |
| 8,404 | `cpiNow` | `var cpiNow =` |
| 8,405 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,406 | `currentSeason` | `var currentSeason =` |
| 8,407 | `seasonWhy` | `var seasonWhy =` |
| 8,424 | `seasonGroup` | `function seasonGroup(` |
| 8,433 | `fearGauge` | `function fearGauge(` |
| 8,470 | `vitalRingSvg` | `function vitalRingSvg(` |
| 8,483 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 8,485 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 8,489 | `policyFacts` | `function policyFacts(` |
| 8,501 | `allSources` | `var allSources =` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 8,536_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,539 | `SVG_NS` | `var SVG_NS =` |
| 8,540 | `svgEl` | `function svgEl(` |
| 8,553 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 8,589_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,590 | `clampPct` | `function clampPct(` |
| 8,597 | `infoIcon` | `function infoIcon(` |
| 8,606 | `detailTexts` | `var detailTexts =` |
| 8,608 | `powerPanelHtml` | `var powerPanelHtml =` |
| 8,612 | `_growthPanel` | `var _growthPanel =` |
| 8,613 | `growthPanelHtml` | `function growthPanelHtml(` |
| 8,619 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 8,630 | `facts` | `function facts(` |
| 8,631 | `factsFrom` | `function factsFrom(` |
| 8,635 | `expandBtn` | `function expandBtn(` |
| 8,642 | `sheetRenderers` | `var sheetRenderers =` |
| 8,659 | `pageMode` | `var pageMode =` |
| 8,666 | `pageCycles` | `var pageCycles =` |
| 8,671 | `pageRange` | `var pageRange =` |
| 8,677 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 8,711_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,722 | `meterHtml` | `function meterHtml(` |
| 8,750 | `srcHtml` | `function srcHtml(` |
| 8,759 | `TIMING` | `var TIMING =` |
| 8,765 | `timingMark` | `function timingMark(` |
| 8,779 | `timingPill` | `function timingPill(` |
| 8,800 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 8,808 | `seatPageFoot` | `function seatPageFoot(` |
| 8,831 | `timingMembers` | `var timingMembers =` |
| 8,832 | `registerTiming` | `function registerTiming(` |
| 8,838 | `headHtml` | `function headHtml(` |
| 8,856 | `heldHighlights` | `var heldHighlights =` |
| 8,857 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 8,915_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 8,916 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,283_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,284 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 9,494_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,495 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 9,527_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,533 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 9,617_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,618 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 9,636_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,639 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the mood ring, then the Fear & Greed lead row and its markers

_line 9,662_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,663 | `renderPsychologyTag` | `function renderPsychologyTag(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 9,715_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,718 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 9,909_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,921 | `totalRiseIn` | `function totalRiseIn(` |
| 9,931 | `eraInflation` | `function eraInflation(` |
| 9,942 | `eraGrowth` | `function eraGrowth(` |
| 9,958 | `fmtSigned` | `function fmtSigned(` |
| 9,963 | `regimeArrow` | `function regimeArrow(` |
| 9,969 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 9,970 | `growthShown` | `function growthShown(` |
| 9,971 | `growthShownCap` | `function growthShownCap(` |
| 9,972 | `regimeState` | `function regimeState(` |
| 9,976 | `phaseClass` | `function phaseClass(` |
| 9,978 | `eraMarketTotal` | `function eraMarketTotal(` |
| 9,990 | `cycleViewEl` | `var cycleViewEl =` |
| 9,994 | `tempCard` | `var tempCard =` |
| 9,995 | `placeCharts` | `function placeCharts(` |
| 10,000 | `shownEra` | `var shownEra =` |
| 10,001 | `calendarReset` | `var calendarReset =` |
| 10,002 | `metricPageReset` | `var metricPageReset =` |
| 10,003 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,006 | `topbarBack` | `var topbarBack =` |
| 10,007 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,014_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,015 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,163_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,164 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,182_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,185 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,206_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,212 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,215 | `hubSet` | `function hubSet(` |
| 10,228 | `quarterPopup` | `function quarterPopup(` |
| 10,261 | `hubShowDefault` | `function hubShowDefault(` |
| 10,270 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,276 | `hubShowYear` | `function hubShowYear(` |
| 10,291 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 10,383_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,386 | `tempState` | `var tempState =` |
| 10,389 | `chartLink` | `var chartLink =` |
| 10,409 | `m2Step` | `function m2Step(` |
| 10,412 | `heatStep` | `function heatStep(` |
| 10,416 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 10,603_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,606 | `drawGrowth` | `function drawGrowth(` |
| 10,745 | `wireResize` | `function wireResize(` |
| 10,751 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 10,763_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,764 | `renderCycleView` | `function renderCycleView(` |
| 10,817 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 10,828 | `PEER_CARET` | `var PEER_CARET =` |
| 10,829 | `peerList` | `function peerList(` |
| 10,830 | `peerChosen` | `function peerChosen(` |
| 10,831 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 10,835 | `renderPeerPills` | `function renderPeerPills(` |
| 10,885 | `shownEraModel` | `var shownEraModel =` |
| 10,886 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 10,888_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,890 | `stripGroupName` | `var stripGroupName =` |
| 10,891 | `seasonStripHtml` | `function seasonStripHtml(` |
| 10,937 | `marketStripHtml` | `function marketStripHtml(` |
| 10,978 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 10,979 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,010_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,011 | `renderCycleList` | `function renderCycleList(` |
| 11,101 | `renderSignsList` | `function renderSignsList(` |
| 11,349 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 12,584_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,585 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 12,647_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,648 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 12,681_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,682 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`WORKING-DOC.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,860–3,863 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 7,478–7,491 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,283–8,296 | `seasonTrackAll` | The season, computed |
| 8,318–8,322 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,055 |
| `desire-range` | 9,229 |
| `hzn-range` | 9,566 |
| `pulse-range` | 9,180 |
| `sheet-marker-deficit` | 12,052 |
| `sheet-metric-gdp` | 11,940 |
| `sheet-metric-households` | 12,086 |
| `sheet-metric-power` | 12,019 |
| `sheet-metric-temp` | 11,890 |
| `sheet-metric-valuation` | 12,127 |
| `sheet-sign-activity` | 12,001 |
| `sheet-sign-desire` | 9,230 |
| `sheet-sign-horizon` | 9,567 |
| `sheet-sign-pulse` | 9,179 |
| `sheet-sign-volume` | 9,203 |
| `sheet-sign-yield` | 9,147 |
| `volume-range` | 9,204 |
| `ylm-range` | 9,275 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,061 |
| `desire-range` | 9,212 |
| `hzn-range` | 9,543 |
| `pulse-range` | 9,157 |
| `sheet-metric-gdp` | 11,941 |
| `sheet-metric-power` | 12,020 |
| `sheet-metric-temp` | 11,891 |
| `sheet-metric-valuation` | 12,128 |
| `volume-range` | 9,184 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 5,512 |
| `sheet-metric-gdp` | 5,513 |
| `sheet-sign-activity` | 5,514 |
| `sheet-metric-power` | 5,515 |
| `sheet-metric-valuation` | 5,517 |
| `sheet-metric-households` | 5,518 |
| `deficit-range` | 5,519 |
| `volume-range` | 5,520 |
| `pulse-range` | 5,521 |
| `hzn-range` | 5,522 |
| `ylm-range` | 5,533 |
| `desire-range` | 5,534 |

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

