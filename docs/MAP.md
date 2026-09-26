# Map of `index.html`

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

`index.html` is **13,137 lines**, about 1072 KB, roughly **305 thousand tokens**. No session can read it
whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the
> **anchor** column with grep — `grep -n 'function moodFrom(' index.html` — and treat the line
> number as rough orientation only. If a number is off by a hundred, the map is doing its job and
> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.

Generated from commit `38773e5` on 2026-09-26.

## The five regions

| Region | Lines | What |
|---|---|---|
| **Boot** | 1–4 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate |
| **Styles** | 5–2,911 | the whole stylesheet, every token and rule |
| **Markup** | 2,912–3,644 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| **Script** | 3,645–13,113 | one IIFE containing everything: data, model, renderers, wiring |
| **Close** | 13,114–13,137 | </body></html> |

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
| 3,912 | `LIVE_SCALARS` | `var LIVE_SCALARS =` |
| 3,913 | `fedFunds` | `var fedFunds =` |

### Version 525: the first series to come from outside the file

_line 3,916_ · 14 declarations

| Line | Name | Anchor |
|---|---|---|
| 3,947 | `repaintFigureText` | `function repaintFigureText(` |
| 3,955 | `repaintTag` | `function repaintTag(` |
| 3,963 | `repaintSentiment` | `function repaintSentiment(` |
| 3,977 | `repaintYieldRow` | `function repaintYieldRow(` |
| 3,985 | `repaintValuationRow` | `function repaintValuationRow(` |
| 3,993 | `REPAINT` | `var REPAINT =` |
| 4,010 | `liveAsOf` | `var liveAsOf =` |
| 4,011 | `fmtAsOf` | `function fmtAsOf(` |
| 4,016 | `applyLive` | `function applyLive(` |
| 4,098 | `repaintPolicy` | `function repaintPolicy(` |
| 4,148 | `GYN` | `var GYN =` |
| 4,168 | `refreshLiveData` | `function refreshLiveData(` |
| 4,209 | `fetchSiteData` | `function fetchSiteData(` |
| 4,239 | `fedFundsRange` | `function fedFundsRange(` |

### DATA (single source of truth — edit here on refresh)

_line 4,253_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,254 | `yieldCurve` | `var yieldCurve =` |
| 4,267 | `t10y3mHistory` | `var t10y3mHistory =` |
| 4,291 | `t10y3mRecessions` | `var t10y3mRecessions =` |
| 4,298 | `t10y3mUninversion` | `var t10y3mUninversion =` |
| 4,304 | `t10y2yHistory` | `var t10y2yHistory =` |
| 4,331 | `t10y2yUninversion` | `var t10y2yUninversion =` |

### Yield LEVELS by maturity, quarterly, Q1 2005–Q3 2026 — not spreads, the actual yields themselves,

_line 4,333_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,338 | `t3mYieldHistory` | `var t3mYieldHistory =` |
| 4,362 | `t2yYieldHistory` | `var t2yYieldHistory =` |
| 4,386 | `t5yYieldHistory` | `var t5yYieldHistory =` |
| 4,410 | `t10yYieldHistory` | `var t10yYieldHistory =` |
| 4,437 | `t30yYieldHistory` | `var t30yYieldHistory =` |

### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

_line 4,462_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,471 | `uninvLagCycles` | `var uninvLagCycles =` |
| 4,481 | `uninvLagToday` | `var uninvLagToday =` |
| 4,493 | `usRealGdpGrowth` | `var usRealGdpGrowth =` |
| 4,506 | `gdpPeers` | `var gdpPeers =` |
| 4,547 | `gdpSrc` | `var gdpSrc =` |
| 4,548 | `gdpPeerSrc` | `var gdpPeerSrc =` |
| 4,553 | `longCycleImpressionShort` | `var longCycleImpressionShort =` |
| 4,566 | `labPanel` | `var labPanel =` |

### Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —

_line 4,604_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,626 | `productivityReading` | `var productivityReading =` |

### Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —

_line 4,636_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,652 | `stressScoreFor` | `function stressScoreFor(` |
| 4,658 | `stressScore` | `var stressScore =` |
| 4,664 | `powerOf` | `var powerOf =` |
| 4,665 | `powerScore` | `var powerScore =` |
| 4,682 | `stressHistory` | `var stressHistory =` |
| 4,693 | `powerMeter` | `var powerMeter =` |
| 4,695 | `stressNoteFull` | `var stressNoteFull =` |
| 4,727 | `powerHistory` | `var powerHistory =` |

### The deficit, year by year (Version 358)

_line 4,729_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,752 | `DEF_FROM_YEAR` | `var DEF_FROM_YEAR =` |
| 4,753 | `deficitHistory` | `var deficitHistory =` |
| 4,756 | `DEF_MEAN` | `var DEF_MEAN =` |
| 4,763 | `DEF_RECESSION_FY` | `var DEF_RECESSION_FY =` |
| 4,765 | `checkDeficitHistory` | `function checkDeficitHistory(` |

### Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to

_line 4,808_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 4,821 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

### Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as

_line 4,834_ · 4 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,848 | `cycleSpanYears` | `function cycleSpanYears(` |
| 4,851 | `timelineSpan` | `function timelineSpan(` |
| 4,857 | `timelineFor` | `function timelineFor(` |
| 4,870 | `timelineWindow` | `function timelineWindow(` |

### What a windowed record chart needs, once (Version 367)

_line 4,876_ · 28 declarations

| Line | Name | Anchor |
|---|---|---|
| 4,882 | `windowScale` | `function windowScale(` |
| 4,898 | `windowYears` | `function windowYears(` |
| 4,916 | `refName` | `function refName(` |
| 4,923 | `histReadEnsure` | `function histReadEnsure(` |
| 4,954 | `seatBandReading` | `function seatBandReading(` |
| 4,977 | `histReadFill` | `function histReadFill(` |
| 5,013 | `wireHistHover` | `function wireHistHover(` |
| 5,072 | `mWindowFrom` | `function mWindowFrom(` |
| 5,077 | `qWindowFrom` | `function qWindowFrom(` |
| 5,082 | `VOL_STOPS` | `var VOL_STOPS =` |
| 5,083 | `PULSE_STOPS` | `var PULSE_STOPS =` |
| 5,085 | `DEF_1983` | `var DEF_1983 =` |
| 5,087 | `defFrom` | `function defFrom(` |
| 5,098 | `deficitChart` | `function deficitChart(` |
| 5,188 | `deficitBlock` | `function deficitBlock(` |
| 5,250 | `buffettHistory` | `var buffettHistory =` |
| 5,280 | `HY_NORM_LO` | `var HY_NORM_LO =` |
| 5,281 | `hyDates` | `var hyDates =` |
| 5,282 | `hyOas` | `var hyOas =` |
| 5,283 | `checkDesireWindow` | `function checkDesireWindow(` |
| 5,290 | `hyAt` | `function hyAt(` |
| 5,294 | `hyLabel` | `function hyLabel(` |
| 5,295 | `DESIRE_STOPS` | `var DESIRE_STOPS =` |
| 5,296 | `hyNum` | `function hyNum(` |
| 5,297 | `hyWindowFrom` | `function hyWindowFrom(` |
| 5,307 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 5,317 | `capeHistory` | `var capeHistory =` |
| 5,319 | `longCycleSrc` | `var longCycleSrc =` |

### Sentiment (fast) and Valuation (slow) — split in Version 231

_line 5,337_ · 8 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,343 | `sentiment` | `var sentiment =` |
| 5,361 | `valuation` | `var valuation =` |
| 5,398 | `valRow` | `function valRow(` |
| 5,406 | `coincident` | `var coincident =` |
| 5,467 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 5,485 | `PULSE_WINDOW` | `var PULSE_WINDOW =` |
| 5,486 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 5,487 | `PULSE_PRE2008` | `var PULSE_PRE2008 =` |

### The whole record, opened from the mark (Version 299)

_line 5,489_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,502 | `M2V_FROM_YEAR` | `var M2V_FROM_YEAR =` |
| 5,503 | `m2vHistory` | `var m2vHistory =` |
| 5,523 | `velocityHistoryChart` | `function velocityHistoryChart(` |
| 5,622 | `desireHistoryChart` | `function desireHistoryChart(` |
| 5,723 | `PBAR_GAP` | `var PBAR_GAP =` |
| 5,724 | `panelBar` | `function panelBar(` |

### Version 518: the history card's head

_line 5,764_ · 23 declarations

| Line | Name | Anchor |
|---|---|---|
| 5,770 | `HIST_NOTE` | `var HIST_NOTE =` |
| 5,771 | `DOTS` | `var DOTS =` |
| 5,773 | `HIST_HEAD` | `var HIST_HEAD =` |
| 5,798 | `histHead` | `function histHead(` |
| 5,819 | `headNoteIdx` | `var headNoteIdx =` |
| 5,820 | `headMenuHtml` | `function headMenuHtml(` |
| 5,840 | `headMenuFor` | `var headMenuFor =` |
| 5,841 | `paintHeadMenus` | `function paintHeadMenus(` |
| 5,867 | `nameWithMark` | `function nameWithMark(` |
| 5,873 | `panelRow` | `function panelRow(` |
| 5,899 | `panelFromMeter` | `function panelFromMeter(` |
| 5,913 | `meterFlagged` | `function meterFlagged(` |
| 5,924 | `desireInfoHtml` | `function desireInfoHtml(` |
| 5,952 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 5,966 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 5,985 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 6,004 | `outputInfoHtml` | `function outputInfoHtml(` |
| 6,018 | `activityInfoHtml` | `function activityInfoHtml(` |
| 6,043 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 6,074 | `desireBlock` | `function desireBlock(` |
| 6,101 | `volumeBlock` | `function volumeBlock(` |
| 6,126 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 6,149 | `checkVelocityHistory` | `function checkVelocityHistory(` |

### Volume: how much blood there is (Version 306)

_line 6,157_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,170 | `M2_FROM_YEAR` | `var M2_FROM_YEAR =` |
| 6,171 | `m2Level` | `var m2Level =` |
| 6,193 | `m2Yoy` | `var m2Yoy =` |
| 6,194 | `M2_NORM` | `var M2_NORM =` |
| 6,199 | `volumeVerdict` | `function volumeVerdict(` |
| 6,236 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 6,237 | `unempHistory` | `var unempHistory =` |
| 6,243 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 6,258 | `NROU_NOW` | `var NROU_NOW =` |
| 6,259 | `unempState` | `function unempState(` |
| 6,265 | `unempHistoryChart` | `function unempHistoryChart(` |
| 6,325 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 6,326 | `CPI_TARGET` | `var CPI_TARGET =` |
| 6,329 | `qAtIndex` | `function qAtIndex(` |
| 6,330 | `lastHistGeom` | `var lastHistGeom =` |

### Version 431: the reference key, shared (the rollout, stage one)

_line 6,338_ · 15 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,353 | `householdsChart` | `function householdsChart(` |
| 6,417 | `refKey` | `function refKey(` |
| 6,455 | `lastChartAvg` | `var lastChartAvg =` |
| 6,456 | `cpiHistoryChart` | `function cpiHistoryChart(` |
| 6,541 | `GDP_NORM` | `var GDP_NORM =` |
| 6,547 | `GDP_BAND_LO` | `var GDP_BAND_LO =` |
| 6,548 | `gdpNowQ` | `var gdpNowQ =` |
| 6,549 | `gdpMeter` | `var gdpMeter =` |
| 6,552 | `growthInfoHtml` | `function growthInfoHtml(` |
| 6,574 | `gdpHistoryChart` | `function gdpHistoryChart(` |
| 6,640 | `m2GrowthChart` | `function m2GrowthChart(` |
| 6,704 | `checkMoneyStock` | `function checkMoneyStock(` |
| 6,712 | `velocityVerdict` | `function velocityVerdict(` |
| 6,720 | `derivePulseTag` | `function derivePulseTag(` |
| 6,726 | `lagging` | `var lagging =` |

### Content tab: reading companion

_line 6,786_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,795 | `seasonReading` | `var seasonReading =` |
| 6,844 | `frameworkRows` | `var frameworkRows =` |
| 6,854 | `vixRow` | `var vixRow =` |
| 6,862 | `vixWordOf` | `var vixWordOf =` |
| 6,866 | `vixInd` | `var vixInd =` |

### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

_line 6,881_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 6,885 | `tempInfo` | `var tempInfo =` |

### Daily Feeling/Energy readout (Cycle tab)

_line 6,894_ · 6 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,895 | `calendarTodayY` | `var calendarTodayY =` |
| 6,916 | `fearGreed` | `var fearGreed =` |
| 6,920 | `CAPE_FAIR` | `var CAPE_FAIR =` |
| 6,925 | `valuationVerdict` | `function valuationVerdict(` |
| 6,943 | `sparkHtml` | `function sparkHtml(` |
| 6,962 | `lastN` | `function lastN(` |

### The range bar (Version 263)

_line 6,968_ · 16 declarations

| Line | Name | Anchor |
|---|---|---|
| 6,981 | `modeBar` | `function modeBar(` |
| 6,996 | `pickerOpen` | `var pickerOpen =` |
| 7,000 | `cycleByName` | `function cycleByName(` |
| 7,004 | `openCycle` | `function openCycle(` |
| 7,010 | `cycleSlice` | `function cycleSlice(` |
| 7,019 | `totalGrowthYears` | `function totalGrowthYears(` |
| 7,027 | `cycleMonths` | `function cycleMonths(` |
| 7,046 | `histControls` | `function histControls(` |
| 7,060 | `cycLabel` | `function cycLabel(` |
| 7,076 | `cycleQtrIdx` | `function cycleQtrIdx(` |
| 7,085 | `cyclePicker` | `function cyclePicker(` |
| 7,109 | `seriesBar` | `function seriesBar(` |
| 7,116 | `rangeBar` | `function rangeBar(` |
| 7,128 | `trendOf` | `function trendOf(` |
| 7,173 | `TREND_ARROW` | `var TREND_ARROW =` |
| 7,183 | `trendPill` | `function trendPill(` |

### Highlights: what the series says about today, computed (Version 255)

_line 7,198_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,199 | `yearOf` | `function yearOf(` |
| 7,200 | `mean` | `function mean(` |

### The record rows (Version 374)

_line 7,201_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,231 | `totalStat` | `function totalStat(` |
| 7,237 | `atQuarter` | `function atQuarter(` |
| 7,238 | `atMonth` | `function atMonth(` |
| 7,239 | `cycleAverages` | `function cycleAverages(` |
| 7,246 | `ordinal` | `function ordinal(` |
| 7,247 | `hiCard` | `function hiCard(` |
| 7,258 | `cycleStrip` | `function cycleStrip(` |

### The cycle average component (Version 366)

_line 7,272_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,279 | `cycleAverageBlock` | `function cycleAverageBlock(` |
| 7,295 | `dropWhatIsShown` | `function dropWhatIsShown(` |
| 7,302 | `moreRow` | `function moreRow(` |
| 7,308 | `powerPageNote` | `var powerPageNote =` |
| 7,309 | `highlightsHtml` | `function highlightsHtml(` |

### The inner pages' charts (Version 257)

_line 7,315_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,318 | `xLabelOf` | `function xLabelOf(` |
| 7,338 | `fitGroup` | `function fitGroup(` |
| 7,360 | `reserveChart` | `function reserveChart(` |

### The history component's axes (Version 399, Keren: "the history component should be the same on all

_line 7,419_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,443 | `appendSvgMarkup` | `function appendSvgMarkup(` |
| 7,453 | `vGrid` | `function vGrid(` |
| 7,478 | `COL_FILL` | `var COL_FILL =` |
| 7,485 | `AXIS` | `var AXIS =` |
| 7,486 | `chartAxes` | `function chartAxes(` |
| 7,517 | `divergeChart` | `function divergeChart(` |
| 7,578 | `pairChart` | `function pairChart(` |

### The inner pages' chart (Version 255, kept for nothing — see above)

_line 7,607_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,615 | `maxIn` | `function maxIn(` |
| 7,628 | `reserveGauge` | `function reserveGauge(` |
| 7,649 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 7,663 | `PEEK_W` | `var PEEK_W =` |
| 7,666 | `PEEK_H` | `var PEEK_H =` |
| 7,667 | `PEEK_GAUGE` | `var PEEK_GAUGE =` |
| 7,672 | `colPeek` | `function colPeek(` |
| 7,699 | `meterPeek` | `function meterPeek(` |
| 7,716 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 7,721 | `pressureZone` | `function pressureZone(` |
| 7,736 | `HZN_BACK` | `var HZN_BACK =` |
| 7,737 | `hznLast` | `function hznLast(` |
| 7,738 | `hznBack` | `function hznBack(` |
| 7,739 | `horizonWord` | `function horizonWord(` |
| 7,764 | `HZN_METERS` | `var HZN_METERS =` |
| 7,772 | `horizonInfoHtml` | `function horizonInfoHtml(` |
| 7,796 | `_hznPanel` | `var _hznPanel =` |
| 7,797 | `horizonPanelHtml` | `function horizonPanelHtml(` |
| 7,817 | `LEVEL_MAX` | `var LEVEL_MAX =` |
| 7,818 | `levelZone` | `function levelZone(` |
| 7,830 | `RISK_REWARD` | `var RISK_REWARD =` |
| 7,835 | `RISK_RISK` | `var RISK_RISK =` |
| 7,840 | `riskCell` | `function riskCell(` |
| 7,841 | `riskMatrixBlock` | `function riskMatrixBlock(` |
| 7,872 | `riskMatrixNote` | `var riskMatrixNote =` |

### THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse

_line 7,897_ · 30 declarations

| Line | Name | Anchor |
|---|---|---|
| 7,916 | `pulseClipN` | `var pulseClipN =` |
| 7,917 | `beatPath` | `function beatPath(` |
| 7,942 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 7,956 | `pulsePeek` | `function pulsePeek(` |
| 7,964 | `pulseBlock` | `function pulseBlock(` |
| 7,984 | `CHEV` | `var CHEV =` |
| 7,986 | `peekCard` | `function peekCard(` |
| 8,008 | `moodFrom` | `function moodFrom(` |
| 8,045 | `dropSvg` | `function dropSvg(` |
| 8,053 | `speakerSvg` | `function speakerSvg(` |
| 8,061 | `gaugeSvg` | `function gaugeSvg(` |
| 8,065 | `diamondSvg` | `function diamondSvg(` |
| 8,077 | `energyFromReserve` | `function energyFromReserve(` |
| 8,089 | `sproutSvg` | `function sproutSvg(` |
| 8,100 | `markSvg` | `function markSvg(` |
| 8,104 | `flameSvg` | `function flameSvg(` |
| 8,108 | `gearSvg` | `function gearSvg(` |
| 8,121 | `pulseSvg` | `function pulseSvg(` |
| 8,125 | `thermoSvg` | `function thermoSvg(` |
| 8,144 | `trendUpSvg` | `function trendUpSvg(` |
| 8,146 | `ecgSvg` | `function ecgSvg(` |
| 8,160 | `circulationSvg` | `function circulationSvg(` |
| 8,161 | `weatherSvg` | `function weatherSvg(` |
| 8,182 | `moodSvg` | `function moodSvg(` |
| 8,199 | `boltSvg` | `function boltSvg(` |
| 8,202 | `houseSvg` | `function houseSvg(` |
| 8,210 | `sunriseSvg` | `function sunriseSvg(` |
| 8,220 | `umbrellaSvg` | `function umbrellaSvg(` |
| 8,232 | `signMarks` | `var signMarks =` |
| 8,239 | `batteryIconSvg` | `function batteryIconSvg(` |

### Load: what households owe, and what they keep (Version 460, Keren)

_line 8,256_ · 25 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,277 | `DSR_FROM_YEAR` | `var DSR_FROM_YEAR =` |
| 8,278 | `dsrHistory` | `var dsrHistory =` |
| 8,279 | `SAV_FROM_YEAR` | `var SAV_FROM_YEAR =` |
| 8,280 | `savHistory` | `var savHistory =` |
| 8,285 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 8,295 | `SAV_OFFSET` | `var SAV_OFFSET =` |
| 8,296 | `dsrNow` | `var dsrNow =` |
| 8,297 | `savNow` | `var savNow =` |
| 8,298 | `DSR_MEAN` | `var DSR_MEAN =` |
| 8,303 | `householdsWord` | `function householdsWord(` |
| 8,310 | `householdsNow` | `var householdsNow =` |
| 8,317 | `SAV_BAND_LO` | `var SAV_BAND_LO =` |
| 8,318 | `dsrMeter` | `var dsrMeter =` |
| 8,321 | `savMeter` | `var savMeter =` |
| 8,324 | `dsrInfoHtml` | `function dsrInfoHtml(` |
| 8,341 | `savInfoHtml` | `function savInfoHtml(` |
| 8,359 | `sp500AnnualReturns` | `var sp500AnnualReturns =` |
| 8,368 | `greedScore` | `var greedScore =` |
| 8,369 | `moodNow` | `var moodNow =` |
| 8,370 | `fgSub` | `var fgSub =` |
| 8,371 | `fgDetailHtml` | `function fgDetailHtml(` |
| 8,372 | `fgNoteFull` | `var fgNoteFull =` |
| 8,378 | `sp500AnnualReturnSource` | `var sp500AnnualReturnSource =` |
| 8,419 | `marketCycles` | `var marketCycles =` |
| 8,449 | `currentEra` | `var currentEra =` |

### A typical cycle's length (the dial's scale)

_line 8,451_ · 2 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,472 | `typicalCycleYears` | `var typicalCycleYears =` |
| 8,473 | `typicalCycleSrc` | `var typicalCycleSrc =` |

### The season, computed

_line 8,478_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,499 | `slopeOf` | `function slopeOf(` |
| 8,510 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 8,516 | `readSeason` | `function readSeason(` |
| 8,541 | `QUARTER_END_MONTH` | `var QUARTER_END_MONTH =` |
| 8,543 | `qLabel` | `function qLabel(` |
| 8,567 | `regimeTrack` | `function regimeTrack(` |
| 8,590 | `quarterRegime` | `function quarterRegime(` |

### One cycle, as the cycle view reads it

_line 8,592_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,599 | `cycleYtdFraction` | `var cycleYtdFraction =` |
| 8,600 | `seasonTitle` | `function seasonTitle(` |
| 8,601 | `monthLabel` | `function monthLabel(` |
| 8,602 | `cycleModel` | `function cycleModel(` |
| 8,654 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 8,662 | `seasonWhyFor` | `function seasonWhyFor(` |
| 8,669 | `nowModel` | `var nowModel =` |
| 8,670 | `readingNow` | `var readingNow =` |
| 8,671 | `cpiNow` | `var cpiNow =` |
| 8,672 | `growthSlopeQ` | `var growthSlopeQ =` |
| 8,673 | `currentSeason` | `var currentSeason =` |
| 8,674 | `seasonWhy` | `var seasonWhy =` |
| 8,691 | `seasonGroup` | `function seasonGroup(` |
| 8,700 | `fearGauge` | `function fearGauge(` |
| 8,737 | `vitalRingSvg` | `function vitalRingSvg(` |
| 8,750 | `SPREAD_DETAIL` | `var SPREAD_DETAIL =` |
| 8,752 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 8,756 | `policyFacts` | `function policyFacts(` |
| 8,768 | `allSources` | `var allSources =` |
| 8,792 | `addSources` | `function addSources(` |

### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

_line 8,825_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,828 | `SVG_NS` | `var SVG_NS =` |
| 8,829 | `svgEl` | `function svgEl(` |
| 8,842 | `attachHoverTracking` | `function attachHoverTracking(` |

### RENDER: range bars + card helpers

_line 8,878_ · 17 declarations

| Line | Name | Anchor |
|---|---|---|
| 8,879 | `clampPct` | `function clampPct(` |
| 8,886 | `infoIcon` | `function infoIcon(` |
| 8,895 | `detailTexts` | `var detailTexts =` |
| 8,913 | `detailSlots` | `var detailSlots =` |
| 8,914 | `detailSlot` | `function detailSlot(` |
| 8,925 | `powerPanelHtml` | `var powerPanelHtml =` |
| 8,929 | `_growthPanel` | `var _growthPanel =` |
| 8,930 | `growthPanelHtml` | `function growthPanelHtml(` |
| 8,936 | `householdsPanelHtml` | `function householdsPanelHtml(` |
| 8,947 | `facts` | `function facts(` |
| 8,948 | `factsFrom` | `function factsFrom(` |
| 8,952 | `expandBtn` | `function expandBtn(` |
| 8,958 | `sheetRenderers` | `var sheetRenderers =` |
| 8,975 | `pageMode` | `var pageMode =` |
| 8,982 | `pageCycles` | `var pageCycles =` |
| 8,987 | `pageRange` | `var pageRange =` |
| 8,993 | `wireDetailModal` | `function wireDetailModal(` |

### RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab)

_line 9,027_ · 12 declarations

| Line | Name | Anchor |
|---|---|---|
| 9,038 | `meterHtml` | `function meterHtml(` |
| 9,066 | `srcHtml` | `function srcHtml(` |
| 9,075 | `TIMING` | `var TIMING =` |
| 9,081 | `timingMark` | `function timingMark(` |
| 9,095 | `timingPill` | `function timingPill(` |
| 9,116 | `collapseEmptyBlocks` | `function collapseEmptyBlocks(` |
| 9,124 | `seatPageFoot` | `function seatPageFoot(` |
| 9,147 | `timingMembers` | `var timingMembers =` |
| 9,148 | `registerTiming` | `function registerTiming(` |
| 9,154 | `headHtml` | `function headHtml(` |
| 9,172 | `heldHighlights` | `var heldHighlights =` |
| 9,173 | `cardDetailHtml` | `function cardDetailHtml(` |

### RENDER: yield-by-maturity comparison chart (multiselect by maturity)

_line 9,231_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,232 | `renderPressurePage` | `function renderPressurePage(` |

### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

_line 9,599_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,600 | `renderSpreadHistory` | `function renderSpreadHistory(` |

### RENDER: un-inversion-to-recession historical lag panel

_line 9,810_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,811 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

### RENDER: Horizon — the spread's own page (Version 473)

_line 9,843_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,849 | `renderHorizonPage` | `function renderHorizonPage(` |

### RENDER: Valuation (slow) — split off Sentiment in Version 231

_line 9,933_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,934 | `renderValuationTag` | `function renderValuationTag(` |

### RENDER: lab panel (long cycle) — overall stress composite is the table's own lead row

_line 9,952_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,955 | `renderLongCycleTag` | `function renderLongCycleTag(` |

### RENDER: Sentiment (fast) — the mood ring, then the Fear & Greed lead row and its markers

_line 9,978_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 9,979 | `renderPsychologyTag` | `function renderPsychologyTag(` |

### RENDER: Analysis subjects — one headline figure per collapsible section

_line 10,035_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,038 | `renderSubjectRows` | `function renderSubjectRows(` |

### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

_line 10,229_ · 20 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,241 | `totalRiseIn` | `function totalRiseIn(` |
| 10,251 | `eraInflation` | `function eraInflation(` |
| 10,262 | `eraGrowth` | `function eraGrowth(` |
| 10,278 | `fmtSigned` | `function fmtSigned(` |
| 10,283 | `regimeArrow` | `function regimeArrow(` |
| 10,289 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 10,290 | `growthShown` | `function growthShown(` |
| 10,291 | `growthShownCap` | `function growthShownCap(` |
| 10,292 | `regimeState` | `function regimeState(` |
| 10,296 | `phaseClass` | `function phaseClass(` |
| 10,298 | `eraMarketTotal` | `function eraMarketTotal(` |
| 10,310 | `cycleViewEl` | `var cycleViewEl =` |
| 10,314 | `tempCard` | `var tempCard =` |
| 10,315 | `placeCharts` | `function placeCharts(` |
| 10,320 | `shownEra` | `var shownEra =` |
| 10,321 | `calendarReset` | `var calendarReset =` |
| 10,322 | `metricPageReset` | `var metricPageReset =` |
| 10,323 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 10,326 | `topbarBack` | `var topbarBack =` |
| 10,327 | `setTopbar` | `function setTopbar(` |

### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

_line 10,334_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,335 | `drawDial` | `function drawDial(` |

### the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice

_line 10,483_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,484 | `wireThemeChoice` | `function wireThemeChoice(` |

### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours

_line 10,502_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 10,505 | `renderCycleKicker` | `function renderCycleKicker(` |

### the hub: the reading inside the circle

_line 10,526_ · 7 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,532 | `hubDetailIdx` | `var hubDetailIdx =` |
| 10,535 | `hubSet` | `function hubSet(` |
| 10,548 | `quarterPopup` | `function quarterPopup(` |
| 10,581 | `hubShowDefault` | `function hubShowDefault(` |
| 10,590 | `hubShowQuarter` | `function hubShowQuarter(` |
| 10,596 | `hubShowYear` | `function hubShowYear(` |
| 10,611 | `renderCycleDial` | `function renderCycleDial(` |

### the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156)

_line 10,703_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,706 | `tempState` | `var tempState =` |
| 10,709 | `chartLink` | `var chartLink =` |
| 10,729 | `m2Step` | `function m2Step(` |
| 10,732 | `heatStep` | `function heatStep(` |
| 10,736 | `drawTemperature` | `function drawTemperature(` |

### the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align)

_line 10,923_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 10,926 | `drawGrowth` | `function drawGrowth(` |
| 11,065 | `wireResize` | `function wireResize(` |
| 11,071 | `growthDetail` | `var growthDetail =` |

### the whole view, for one cycle

_line 11,083_ · 9 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,084 | `renderCycleView` | `function renderCycleView(` |
| 11,137 | `renderGrowthPhase` | `function renderGrowthPhase(` |
| 11,148 | `PEER_CARET` | `var PEER_CARET =` |
| 11,149 | `peerList` | `function peerList(` |
| 11,150 | `peerChosen` | `function peerChosen(` |
| 11,151 | `peerTriggerHtml` | `function peerTriggerHtml(` |
| 11,155 | `renderPeerPills` | `function renderPeerPills(` |
| 11,205 | `shownEraModel` | `var shownEraModel =` |
| 11,206 | `showCycle` | `function showCycle(` |

### A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the

_line 11,208_ · 5 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,210 | `stripGroupName` | `var stripGroupName =` |
| 11,211 | `seasonStripHtml` | `function seasonStripHtml(` |
| 11,257 | `marketStripHtml` | `function marketStripHtml(` |
| 11,298 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 11,299 | `settleStrips` | `function settleStrips(` |

### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

_line 11,330_ · 3 declarations

| Line | Name | Anchor |
|---|---|---|
| 11,331 | `renderCycleList` | `function renderCycleList(` |
| 11,421 | `renderSignsList` | `function renderSignsList(` |
| 11,677 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### RENDER: Content tab — reading companion (season reading · flagged now · framework)

_line 12,912_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,913 | `renderSeasonRows` | `function renderSeasonRows(` |

### TAB NAVIGATION (Cycle / Calendar / Analysis / Content)

_line 12,975_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 12,976 | `renderTopbar` | `function renderTopbar(` |

### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

_line 13,009_ · 1 declaration

| Line | Name | Anchor |
|---|---|---|
| 13,010 | `wireContactForm` | `function wireContactForm(` |

## The top-level IIFEs

**0 render at load** (side effect only) and **4 compute a value**, 4 in all. They run in source
order and there is **no boot or re-render function** — which is why a derived value cannot be
repainted, and why the live-data cache has to apply itself above every consumer instead. See
`ARCHITECTURE.md` → the cache section. **These counts are measured here, so this table is the
authority for them** and the working document quotes it.

| Lines | Assigns to | Section it sits in |
|---|---|---|
| 3,873–3,876 | `LIVE_CACHE` | Version 528: live data without a render refactor |
| 7,745–7,758 | `horizonRead` | The inner pages' chart (Version 255, kept for nothing — see above) |
| 8,550–8,563 | `seasonTrackAll` | The season, computed |
| 8,585–8,589 | `regimeByQ` | The season, computed |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Line |
|---|---|
| `deficit-range` | 12,383 |
| `desire-range` | 9,545 |
| `hzn-range` | 9,882 |
| `pulse-range` | 9,496 |
| `sheet-marker-deficit` | 12,380 |
| `sheet-metric-gdp` | 12,268 |
| `sheet-metric-households` | 12,414 |
| `sheet-metric-power` | 12,347 |
| `sheet-metric-temp` | 12,218 |
| `sheet-metric-valuation` | 12,455 |
| `sheet-sign-activity` | 12,329 |
| `sheet-sign-desire` | 9,546 |
| `sheet-sign-horizon` | 9,883 |
| `sheet-sign-pulse` | 9,495 |
| `sheet-sign-volume` | 9,519 |
| `sheet-sign-yield` | 9,463 |
| `volume-range` | 9,520 |
| `ylm-range` | 9,591 |

### `pageRange`

the window a page's range control starts on

| Key | Line |
|---|---|
| `deficit-range` | 12,389 |
| `desire-range` | 9,528 |
| `hzn-range` | 9,859 |
| `pulse-range` | 9,473 |
| `sheet-metric-gdp` | 12,269 |
| `sheet-metric-power` | 12,348 |
| `sheet-metric-temp` | 12,219 |
| `sheet-metric-valuation` | 12,456 |
| `volume-range` | 9,500 |

### `HIST_HEAD`

each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title

| Key | Line |
|---|---|
| `sheet-metric-temp` | 5,774 |
| `sheet-metric-gdp` | 5,775 |
| `sheet-sign-activity` | 5,776 |
| `sheet-metric-power` | 5,777 |
| `sheet-metric-valuation` | 5,779 |
| `sheet-metric-households` | 5,780 |
| `deficit-range` | 5,781 |
| `volume-range` | 5,782 |
| `pulse-range` | 5,783 |
| `hzn-range` | 5,784 |
| `ylm-range` | 5,795 |
| `desire-range` | 5,796 |

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

