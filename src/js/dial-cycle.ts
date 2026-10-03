import { facts, fmtSigned, hubLine, ledeHtml, monthLabel, popHead, qLabel, srcBlock } from "./format.ts";
import { byId, detailSlot, detailTexts, need, put, rovingKeys, ui } from "./dom.ts";
import { GYN } from "./live.ts";
import { asOfLabel, calendarTodayY, hubTodayHtml, wheelMeta } from "./refresh-season.ts";
import { gdpSrc, sp500AnnualReturns, typicalCycleSrc, typicalCycleYears } from "./data.ts";
import { cycleModel, cycleYtdFraction, seasonGroup, seasonTitle } from "./model.ts";
import { CATEGORIES } from "./roster.ts";
import { renderDiagnosis } from "./diagnosis.ts";
import { quarterSheet } from "./quarter-sheet.ts";
import { cycleViewEl } from "./render-pages.ts";
import type { TrackSeg } from "./model.ts";

type CycleModel = ReturnType<typeof cycleModel>;
type DialQuarter = { seg: TrackSeg; a0: number; a1: number; mid: number };
type DialState = { m: CycleModel; quarters: DialQuarter[]; badgeDeg: number; badgeAt: number; polar: (r: number, deg: number) => string[]; parked: number | null; sheets: Record<number, string> };
type HubOpen = { cat?: (typeof CATEGORIES)[number]; html?: string } | null;
type StripRun = { g: string; n: number; from: string; to: string; seasons: Record<string, boolean> };
type MarketRun = { dir: string; ytd: boolean | undefined; q: number; from: number; to: number };

// ---- the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead ----
function drawDial(m: CycleModel){
  var era = m.era;
  function polar(r: number, deg: number){ var a = (deg - 90) * Math.PI / 180; return [(r * Math.cos(a)).toFixed(2), (r * Math.sin(a)).toFixed(2)]; }
  function arcPath(r: number, a0: number, a1: number){
    if (a1 - a0 >= 359.9) a1 = a0 + 359.9;
    var p0 = polar(r, a0), p1 = polar(r, a1), large = (a1 - a0) > 180 ? 1 : 0;
    return "M" + p0[0] + " " + p0[1] + " A" + r + " " + r + " 0 " + large + " 1 " + p1[0] + " " + p1[1];
  }
  var R = 90;
  var START = 2.5, LEAD = 3, GAP = 5, ORIGIN = START - 1.2, SEAM_END = 360 + START - GAP;
  var MARGIN = 1.2, MIN_CORE = 0.6;
  var ARC = SEAM_END - ORIGIN + MARGIN - LEAD, degPerYear = ARC / m.dialYears;
  var quarterDeg = degPerYear / 4;
  var MOON_W = 7;
  var moonW = Math.max(5.5, Math.min(MOON_W, R * (quarterDeg - 2 * MARGIN - MIN_CORE) * Math.PI / 180));
  var trackW = moonW + 5, capDegT = (trackW / 2) / R * 180 / Math.PI;
  var capDegM = (moonW / 2) / R * 180 / Math.PI;
  var parts = ['<path class="dial-track" d="' + arcPath(R, START - LEAD + capDegT, SEAM_END - capDegT) + '"></path>'];
  var quarters: DialQuarter[] = [];

  var segs = m.track.filter(function(seg){ return !seg.isNow && seg.to > seg.from; });
  var insetDeg = capDegM + MARGIN, runs: { seg: TrackSeg; a0: number; a1: number }[][] = [];
  segs.forEach(function(seg){
    var last = runs[runs.length - 1];
    if (!last || seasonGroup(last[last.length - 1].seg.season) !== seasonGroup(seg.season)) runs.push(last = []);
    last.push({ seg:seg, a0:ORIGIN + seg.from * degPerYear, a1:ORIGIN + seg.to * degPerYear });
  });
  runs.forEach(function(run){
    var r0 = run[0].a0, r1 = run[run.length - 1].a1;
    var v0 = r0 + insetDeg, v1 = r1 - insetDeg;
    if (v1 - v0 < MIN_CORE){ var mid = (r0 + r1) / 2; v0 = mid - MIN_CORE / 2; v1 = mid + MIN_CORE / 2; }
    run.forEach(function(q, k){
      var s0 = v0 + (v1 - v0) * k / run.length, s1 = v0 + (v1 - v0) * (k + 1) / run.length;
      var step = seasonGroup(q.seg.season), i = quarters.length, last = k === run.length - 1;
      quarters.push({ seg:q.seg, a0:q.a0, a1:q.a1, mid:(q.a0 + q.a1) / 2 });
      if (k === 0) parts.push('<path class="dial-moon cap ' + step + '" data-cap="' + i + '" d="' + arcPath(R, v0, v0 + 0.5) + '"></path>');
      if (last) parts.push('<path class="dial-moon cap ' + step + '" data-cap="' + i + '" d="' + arcPath(R, v1 - 0.5, v1) + '"></path>');
      parts.push('<path class="dial-moon ' + step + '" data-q="' + i + '" d="' + arcPath(R, s0, last ? s1 : s1 + 0.35) + '"></path>');
    });
  });
  var RM = 75, peakMark = "";
  for (var y = era.from; y <= m.endYear; y++){
    var isYtd = m.ongoing && y === calendarTodayY, ret = sp500AnnualReturns[y];
    if (ret == null) continue;
    var capDeg = 3 / RM * 180 / Math.PI + 1.2;
    var a0 = ORIGIN + (y - era.from) * degPerYear + capDeg;
    var a1 = ORIGIN + (isYtd ? m.elapsedYears : (y - era.from + 1)) * degPerYear - capDeg;
    if (a1 <= a0) continue;
    parts.push('<path class="dial-mkt ' + (ret >= 0 ? "up" : "down") + (isYtd ? " ytd" : "") + '" data-year="' + y + '" d="' + arcPath(RM, a0, a1) + '"></path>');
    if (y === m.peakYear){
      var pk = polar(RM, (a0 + a1) / 2);
      peakMark = '<g class="dial-peak ' + (ret >= 0 ? "up" : "down") + '" data-year="' + y + '" transform="translate(' + pk[0] + ' ' + pk[1] + ')"><circle class="disc" r="5.2"></circle><circle class="dot" r="1.9"></circle></g>';
    }
  }
  if (peakMark) parts.push(peakMark);
  var lastMoonEnd = ORIGIN + m.track.filter(function(x){ return !x.isNow; }).reduce(function(mx, x){ return Math.max(mx, x.to); }, 0) * degPerYear;
  var BADGE_R = 13, BADGE_AT = R + 3, badgeHalf = BADGE_R / BADGE_AT * 180 / Math.PI;
  var badgeDeg = lastMoonEnd + (BADGE_R + 3.5) / R * 180 / Math.PI;
  if (badgeDeg + badgeHalf > SEAM_END) badgeDeg = 360;
  var bp = polar(BADGE_AT, badgeDeg);
  // ---- horizontal centring (Keren, V414: "make sure the padding from the left and the right of the ----
  parts.push('<g class="dial-today-badge" transform="translate(' + bp[0] + ' ' + bp[1] + ')" style="pointer-events:auto">' +
    '<circle r="' + BADGE_R + '"></circle><text class="lbl" y="-3.6">YEAR</text><text class="num" y="7.4">' + m.yearIndex + '</text></g>');
  if (m.ongoing){
    var degPerQ = degPerYear / 4;
    var dotFrom = ORIGIN + m.elapsedYears * degPerYear;
    var dotTo = SEAM_END - 1;
    var dotN = Math.round((dotTo - dotFrom) / degPerQ);
    for (var q = 0; q < dotN; q++){
      var qp = polar(RM, dotFrom + (dotTo - dotFrom) * (q + 0.5) / dotN);
      parts.push('<circle class="dial-dot" cx="' + qp[0] + '" cy="' + qp[1] + '" r="1.7"></circle>');
    }
  }
  var dialEl = need("cycle-dial");
  dialEl.style.setProperty("--moon-w", moonW.toFixed(2));
  dialEl.style.setProperty("--track-w", trackW.toFixed(2));
  dialEl.style.setProperty("--moon-w-active", (moonW + 5).toFixed(2));
  dialEl.innerHTML = parts.join("");
  dialState = { m:m, quarters:quarters, badgeDeg:badgeDeg, badgeAt:BADGE_AT, polar:polar, parked:null, sheets:{} };
  hubShowDefault();
}
// ---- the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice ----
function wireThemeChoice(){
  var group = need("theme-toggle"), current = byId("appearance-current"); if (!group) return;
  var names = { system:"Use system setting", light:"Light mode", dark:"Dark mode" };
  function paint(){
    var cur = document.documentElement.getAttribute("data-theme") || "system";
    group.querySelectorAll("[data-theme-choice]").forEach(function(b){ b.setAttribute("aria-checked", b.getAttribute("data-theme-choice") === cur ? "true" : "false"); });
    if (current) current.textContent = names[cur as keyof typeof names];
  }
  group.addEventListener("click", function(e){
    var b = (e.target as Element).closest("[data-theme-choice]"), v = b && b.getAttribute("data-theme-choice"); if (v == null) return;
    if (v === "system") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", v);
    try{ if (v === "system") localStorage.removeItem("gyneconomy-theme"); else localStorage.setItem("gyneconomy-theme", v); }catch(err){}
    paint();
  });
  paint();
  rovingKeys(group, "[data-theme-choice]", "aria-checked", true);
}
// ---- the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the ----
function renderCycleKicker(){
  var html = popHead('Legend', 'The outer ring is the cycle season by season — one shape per season, from the quarter it began to the quarter it ended, in its colour; the band inside is the stock market, one segment per year.') +
    '<div class="legend-head">Seasons</div><div class="legend-rows">' +
    [["winter","Winter","below the range"],["spring","Spring","below or within the range"],["summer","Summer","above the range"],["autumn","Autumn","within or above the range"]].map(function(r){
      return '<div class="legend-row"><span class="season-sw ' + r[0] + '"></span>' + r[1] + '<small>' + r[2] + '</small></div>';
    }).join("") + '</div>' +
    '<p class="caption">The seasons wear the temperature\u2019s colours: periwinkle below the 1–3% range, orange above it — deep where a season sits wholly outside the range (Winter, Summer), light where it straddles it (Spring, Autumn). Tap a quarter to read which season it was in, and why, in the centre.</p>' +
    '<div class="legend-head">S&amp;P 500</div><div class="legend-rows">' +
    '<div class="legend-row"><span class="bar" style="background:var(--ovulate)"></span>Bull year<small>positive return</small></div>' +
    '<div class="legend-row"><span class="bar" style="background:var(--bleed-mid)"></span>Bear year<small>negative return</small></div>' +
    '<div class="legend-row"><span class="bar ytd" style="background:var(--ovulate)"></span>Year in progress<small>in progress</small></div>' +
    '<div class="legend-row"><svg viewBox="-7 -7 14 14" aria-hidden="true"><circle r="5.2" fill="var(--surface)" stroke="var(--ovulate)" stroke-width="2"></circle><circle r="1.9" fill="var(--ovulate)"></circle></svg>Peak year<small>highest return</small></div>' +
    '</div>' +
    '<div class="legend-head">The ring\u2019s span</div>' +
    '<p class="caption">An open cycle\u2019s ring is scaled to <b>' + typicalCycleYears + ' years</b>, and the pale dots are what is left of one: a typical full cycle \u2014 one bull market and the bear market that ends it \u2014 has run about five to six and a half years across the long record. A cycle that outlasts it extends the ring instead of overflowing it, which is why the Dot-Com ring spans twelve. It is a typical length, not a forecast.</p>' +
    srcBlock(typicalCycleSrc) +
    '<p class="caption">Press and hold the year badge and drag round the ring to move between quarters; it stays where you leave it, and dragging it back past the last quarter — or tapping anywhere outside the dial — returns it to today. Hover or tap any quarter on the ring to read it in the centre.</p>';
  var idx = detailSlot(html);
  put("cycle-kicker", "Gyneconomy" + '<button type="button" class="info-btn expand-btn" data-detail-idx="' + idx + '" aria-label="Legend" title="Legend">i</button>');
}
// ---- the hub: the reading inside the circle ----
function hubSet(dateHtml: string, meta: (typeof wheelMeta)[Season], y: number, open: HubOpen){
  put("season-wheel-hub-date", dateHtml);
  var themeEl = need("season-wheel-hub-theme"), ret = sp500AnnualReturns[y];
  themeEl.innerHTML = meta.name + '<span class="hub-chev" aria-hidden="true">\u203a</span>'; themeEl.classList.remove("bull", "bear");
  put("season-wheel-hub-detail", (meta.theme ? '<span class="hub-stage">' + meta.theme + '</span>' : '') +
    (ret != null ? hubLine('<b>' + fmtSigned(ret, 1) + '%</b> ' + y) : ''));
  hubOpen(open);
}
function hubOpen(open: HubOpen){
  var b = byId("season-wheel-hub-open") as HTMLButtonElement;
  ["data-open", "data-title", "data-detail-idx"].forEach(function(a){ b.removeAttribute(a); });
  b.disabled = !open; b.classList.toggle("details-link", !!(open && open.html));
  if (open && open.cat){ b.setAttribute("data-open", "sheet-cat-" + open.cat.key); b.setAttribute("data-title", open.cat.title); }
  if (open && open.html){ detailTexts[hubDetailIdx] = open.html; b.setAttribute("data-detail-idx", hubDetailIdx as unknown as string); }
}
function hubShowDefault(){
  if (dialState.parked != null){ hubShowQuarter(dialState.parked); return; }
  var m = dialState.m, meta = wheelMeta[m.season], qs = dialState.quarters, last = qs[qs.length - 1];
  if (m.ongoing){ hubSet(hubTodayHtml(), meta, calendarTodayY, { cat:CATEGORIES.filter(function(c){ return c.onDial; })[0] }); return; }
  var presentSeg = { q:last ? last.seg.q : m.reading!.gdpLatest.q, from:last ? last.seg.from : 0, season:m.season, reading:m.reading! };
  hubSet("<b>Closed,</b> " + monthLabel(m.endMonth), meta, m.endYear, { html:quarterSheet(m, presentSeg, true) });
}
function hubShowQuarter(i: number){
  var q = dialState.quarters[i], cache = dialState.sheets; if (!q) return;
  hubSet("<b>" + qLabel(q.seg.q) + "</b>", wheelMeta[q.seg.season], parseInt(q.seg.q, 10),
    { html:cache[i] || (cache[i] = quarterSheet(dialState.m, q.seg, false)) });
}
function hubShowYear(y: number){
  var m = dialState.m, ret = sp500AnnualReturns[y], isYtd = m.ongoing && y === calendarTodayY;
  var cum = m.cumByYear[y]; hubOpen(null);
  put("season-wheel-hub-date", "<b>" + y + "</b>" + (isYtd ? " · Today" : ""));
  var themeEl = need("season-wheel-hub-theme");
  themeEl.textContent = ret >= 0 ? "Bull year" : "Bear year";
  themeEl.classList.toggle("bull", ret >= 0); themeEl.classList.toggle("bear", ret < 0);
  put("season-wheel-hub-detail", hubLine('S&amp;P 500 total return <b>' + fmtSigned(ret, 1) + '%</b>') +
    (cum != null ? hubLine('<b>' + fmtSigned(cum, 1) + '%</b> since ' + m.era.from + (y === m.peakYear ? ' · <b>Peak year</b>' : '')) : ""));
}
export function one(sel: string): Element { var n = document.querySelector(sel); if (!n) throw new Error("the page has no " + sel); return n; }
export function cycleView(): HTMLElement { if (!cycleViewEl) throw new Error("the cycle view is not built"); return cycleViewEl; }
function renderCycleDial(){
  var dial = need("cycle-dial"), hub = one(".season-wheel-hub");
  var active: Element[] | null = null;
  function mark(i: number | null){
    if (active) active.forEach(function(el){ el.classList.remove("active"); });
    active = i == null ? null : Array.prototype.slice.call(dial.querySelectorAll('.dial-moon[data-q="' + i + '"], .dial-moon.cap[data-cap="' + i + '"]'));
    if (active) active.forEach(function(el){ el.classList.add("active"); });
  }
  var shown = false;
  function readTarget(el: Element){
    var t = el.closest && el.closest("[data-q], [data-year]");
    if (!t) return false;
    var q = t.getAttribute("data-q"); if (q != null){ var i = +q; mark(i); hubShowQuarter(i); }
    else { mark(null); hubShowYear(+(t.getAttribute("data-year") || "")); }
    shown = true;
    return true;
  }
  function reset(){ if (scrubbing || !dialState || !shown) return; shown = false; mark(dialState.parked); hubShowDefault(); }
  dial.addEventListener("mousemove", function(e){ if (scrubbing) return; if (!readTarget(e.target as Element)) reset(); });
  dial.addEventListener("mouseleave", reset);
  dial.addEventListener("touchstart", function(e){ if (scrubbing) return; if (readTarget(e.target as Element)) e.stopPropagation(); }, {passive:true});
  document.addEventListener("click", function(e){
    if (!(e.target instanceof Node) || dial.contains(e.target) || hub.contains(e.target)) return;
    if (!scrubbing && dialState && dialState.parked != null){ shown = false; goTo(-1); return; }
    reset();
  });

  var scrubbing = false;
  function angleAt(clientX: number, clientY: number){
    var box = dial.getBoundingClientRect(), cx = box.left + box.width / 2, cy = box.top + box.height / 2;
    var deg = Math.atan2(clientX - cx, -(clientY - cy)) * 180 / Math.PI;
    return (deg + 360) % 360;
  }
  function quarterAt(deg: number){
    var qs = dialState.quarters, best = -1, bestDist = 1e9;
    var homeDist = Math.min(Math.abs(deg - dialState.badgeDeg), 360 - Math.abs(deg - dialState.badgeDeg));
    for (var i = 0; i < qs.length; i++){
      if (deg >= qs[i].a0 && deg <= qs[i].a1) return i;
      var d = Math.min(Math.abs(deg - qs[i].mid), 360 - Math.abs(deg - qs[i].mid));
      if (d < bestDist){ bestDist = d; best = i; }
    }
    if (homeDist <= bestDist && homeDist <= 30) return -1;
    return bestDist <= 30 ? best : -2;
  }
  function badgeTo(deg: number, yearNum?: number){
    var b = dial.querySelector(".dial-today-badge"), p = dialState.polar(dialState.badgeAt, deg);
    if (!b) return;
    b.setAttribute("transform", "translate(" + p[0] + " " + p[1] + ")");
    var n = b.querySelector(".num"); if (n) n.textContent = (yearNum != null ? yearNum : dialState.m.yearIndex) as unknown as string;
  }
  dial.addEventListener("pointerdown", function(e){
    var b = (e.target as Element).closest && (e.target as Element).closest(".dial-today-badge");
    if (!b || !dialState) return;
    scrubbing = true; b.classList.add("scrubbing"); hub.classList.add("scrubbing");
    try { b.setPointerCapture(e.pointerId); } catch(_){}
    e.preventDefault();
  });
  function goTo(i: number){
    dialState.parked = i >= 0 ? i : null;
    if (i >= 0){ mark(i); hubShowQuarter(i); badgeTo(dialState.quarters[i].mid, Math.floor(dialState.quarters[i].seg.from) + 1); }
    else { mark(null); hubShowDefault(); badgeTo(dialState.badgeDeg); }
  }
  dial.addEventListener("pointermove", function(e){
    if (!scrubbing) return;
    var i = quarterAt(angleAt(e.clientX, e.clientY));
    if (i === -2) return;
    goTo(i);
  });
  function endScrub(e: Event){
    if (!scrubbing) return;
    scrubbing = false;
    var b = dial.querySelector(".dial-today-badge");
    if (b) b.classList.remove("scrubbing");
    hub.classList.remove("scrubbing");
    if (dialState.parked != null) mark(dialState.parked);
  }
  ["pointerup", "pointercancel"].forEach(function(t){ dial.addEventListener(t, endScrub); });
  dial.addEventListener("click", function(e){ var t = !scrubbing && (e.target as Element).closest && (e.target as Element).closest("[data-q]"), q = t && t.getAttribute("data-q"); if (typeof q === "string") goTo(+q); });
  need("season-wheel-hub-open").addEventListener("keydown", function(e){
    var i = dialKeyStep(e.key); if (i == null) return;
    e.preventDefault(); shown = false; goTo(i); dialSay();
  });
}
function dialKeyStep(key: string){
  if (!dialState) return null;
  var n = dialState.quarters.length, at = dialState.parked == null ? n : dialState.parked;
  var to = key === "ArrowLeft" ? at - 1 : key === "ArrowRight" ? at + 1 : key === "Home" ? 0 : key === "End" ? n : null;
  if (to == null) return null;
  to = Math.max(0, Math.min(n, to));
  return to === n ? -1 : to;
}
function dialSay(){
  var m = dialState.m, q = dialState.parked == null ? undefined : dialState.quarters[dialState.parked], meta = wheelMeta[q ? q.seg.season : m.season];
  var when = q ? qLabel(q.seg.q) : m.ongoing ? asOfLabel() : "The cycle's close, " + monthLabel(m.endMonth);
  need("season-wheel-live").textContent = when + ", " + meta.name + (meta.theme ? ", " + meta.theme : "");
}
// ---- the whole view, for one cycle ----
export function renderCycleView(m: CycleModel){
  drawDial(m);
  ui.shownEra = m.era;
  renderDiagnosis(m);
}
export function showCycle(era: Cycle){ if (ui.shownEra !== era) renderCycleView(cycleModel(era)); }
// ---- A cycle's season strip (carried by the one cycle row) ----
var stripGroupName = { winter:"Winter", spring:"Spring", summer:"Summer", autumn:"Autumn" };
function aheadWord(cyc: Cycle){ return cyc.ongoing ? "not yet run" : "shorter than a typical cycle"; }
function stripDots(n: number, title: string){
  return n ? '<span class="strip-dots" style="flex:' + n + ' 1 0" title="' + title + '">' + new Array(n + 1).join("<i></i>") + '</span>' : "";
}
export function seasonStripHtml(cyc: Cycle, spanOverride?: number){
  var groupName: Record<string, string> = stripGroupName;
  return (function(){
    var m = cycleModel(cyc), segs = m.track.filter(function(seg){ return !seg.isNow && seg.to > seg.from; }), runs: StripRun[] = [];
    segs.forEach(function(seg){
      var g = seasonGroup(seg.season), last = runs[runs.length - 1];
      if (!last || last.g !== g) runs.push(last = { g:g, n:0, from:seg.q, to:seg.q, seasons:{} });
      last.n++; last.to = seg.q; last.seasons[seg.season] = true;
    });
    var lead = segs.length ? Math.round(segs[0].from * 4) : 0, done = lead + segs.length;
    var span = Math.max(spanOverride || 0, typicalCycleYears * 4,
                        cyc.ongoing ? Math.ceil(m.elapsedYears * 4) : done);
    var ahead = Math.max(0, span - done);
    var pills = runs.map(function(r){
      var names = Object.keys(r.seasons).map(function(k){ return seasonTitle(wheelMeta[k as Season]); }).join(" · ");
      return '<span class="strip-run ' + r.g + (r.n === 1 ? ' one' : '') + '" style="' +
        'flex:' + r.n + ' 1 0' + '" title="' + groupName[r.g] + ' · ' + (r.n === 1 ? qLabel(r.from) : qLabel(r.from) + ' – ' + qLabel(r.to)) + ' · ' + names + '"></span>';
    }).join("");
    pills = stripDots(lead, "no season read before " + (lead ? qLabel(segs[0].q) : "")) + pills + stripDots(ahead, aheadWord(cyc));
    var lastSeg = segs[segs.length - 1];
    var foot = cyc.ongoing
      ? 'Year <b>' + m.yearIndex + '</b> · now <b>' + wheelMeta[m.season].name + '</b>'
      : '<b>' + Math.round(m.elapsedYears) + ' years</b> · ended in <b>' + wheelMeta[lastSeg.season].name + '</b>';
    return { span:span, done:done, years:(cyc.ongoing ? m.yearIndex : Math.round(m.elapsedYears)),
             strip:'<div class="strip" role="img" aria-label="' + (lead ? 'No season ' + lead + ' quarters, ' : '') + runs.map(function(r){ return groupName[r.g] + ' ' + r.n + (r.n === 1 ? ' quarter' : ' quarters'); }).join(', ') + '">' + pills + '</div>',
             foot:foot };
  })();
}
export function marketStripHtml(cyc: Cycle, spanQ?: number, doneQ?: number){
  var endY = cyc.ongoing ? calendarTodayY : cyc.to!, years: number[] = [];
  for (var y = cyc.from; y <= endY; y++) if (sp500AnnualReturns[y] != null) years.push(y);
  if (!years.length) return "";
  var closedQ = 0;
  years.forEach(function(yy){ if (!(cyc.ongoing && yy === calendarTodayY)) closedQ += 4; });
  var ytdQ = typeof doneQ === "number" ? doneQ - closedQ : Math.round(cycleYtdFraction * 4);
  if (!(ytdQ >= 1)) ytdQ = 1;

  var runs: MarketRun[] = [];
  years.forEach(function(yy){
    var ytd = cyc.ongoing && yy === calendarTodayY;
    var q = ytd ? ytdQ : 4;
    var dir = sp500AnnualReturns[yy] >= 0 ? "up" : "down";
    var last = runs[runs.length - 1];
    if (!last || last.dir !== dir || last.ytd !== ytd) runs.push(last = { dir:dir, ytd:ytd, q:0, from:yy, to:yy });
    last.q += q; last.to = yy;
  });
  var done = runs.reduce(function(a, r){ return a + r.q; }, 0);
  var span = Math.max(spanQ || 0, done);
  var ahead = Math.max(0, span - done);
  var pills = runs.map(function(r){
    var when = r.from === r.to ? String(r.from) : r.from + "–" + r.to;
    return '<span class="strip-run mkt-' + r.dir + (r.ytd ? " ytd" : "") + (r.q <= 1 ? " one" : "") + '" style="' +
      "flex:" + Math.max(r.q, 1) + " 1 0" + '" title="' + when + " · S&P 500 " +
      (r.dir === "up" ? "up" : "down") + (r.ytd ? " so far" : "") + '"></span>';
  }).join("");
  pills += stripDots(ahead, aheadWord(cyc));
  return '<div class="strip mkt-strip" role="img" aria-label="S&P 500 by year: ' +
    runs.map(function(r){ return (r.from === r.to ? r.from : r.from + " to " + r.to) + " " + r.dir; }).join(", ") +
    '">' + pills + "</div>";
}
var STRIP_MIN_RATIO = 1.5;
export function settleStrips(){
  Array.prototype.forEach.call(document.querySelectorAll(".strip"), function(strip: HTMLElement){
    if (!strip.clientWidth || strip.closest(".cyc-scale")) return;
    var runs: HTMLElement[] = Array.prototype.slice.call(strip.querySelectorAll(".strip-run"));
    runs.forEach(function(r){
      r.classList.remove("settled");
      r.style.flex = r.getAttribute("data-flex") || r.style.flex;
      r.style.width = "";
    });
    for (var pass = 0; pass < runs.length; pass++){
      var worst: { el: HTMLElement; w: number } | null = null;
      for (var r of runs){
        if (r.classList.contains("settled")) continue;
        var b = r.getBoundingClientRect();
        if (b.width < b.height * STRIP_MIN_RATIO && (!worst || b.width < worst.w)) worst = { el:r, w:b.width };
      }
      if (!worst) break;
      if (!worst.el.getAttribute("data-flex")) worst.el.setAttribute("data-flex", worst.el.style.flex);
      worst.el.classList.add("settled");
      worst.el.style.flex = "none";
      worst.el.style.width = "15px";
    }
  });
}

export var growthDetail: string;
var dialState: DialState, hubDetailIdx: number;

export function bootDialCycle(){
  GYN.step("wireThemeChoice", wireThemeChoice, "wire");
  wireThemeChoice();
  GYN.step("renderCycleKicker", renderCycleKicker, "render");
  renderCycleKicker();
  hubDetailIdx = detailTexts.length;
  detailTexts.push("");
  GYN.step("renderCycleDial", renderCycleDial, "wire");
  renderCycleDial();
  growthDetail = '<h4>Growth per cycle</h4>' +
    ledeHtml("Real GDP across this cycle, quarter by quarter.") +
    facts([
      'Each point is a quarter against <b>the same quarter a year earlier</b> \u2014 the reading the OECD, Eurostat and the World Bank headline.',
      'US news usually quotes a different figure for \u201cgrowth this quarter\u201d: that quarter against the one before it, compounded to a year. The two can differ without either being wrong.',
      '<b>Gold is quickening growth, periwinkle is slowing growth</b> \u2014 the season model\u2019s own reading, the direction of the trend through the last eight quarters, the same colours as everywhere Growth appears.',
      'That trend turns about nine months after the line does, so a column can stay periwinkle while a quarter or two rise, or gold while one falls below zero. A season is a phase, not a print.',
      'The dashed line is the average over what is drawn; the badge is the latest quarter. Hover any quarter for its reading and its phase.'
    ]) +
    srcBlock(gdpSrc.concat([{t:"BEA via FRED — Real Gross Domestic Product, chained 2017 dollars (GDPC1)", u:"https://fred.stlouisfed.org/series/GDPC1"}]));
  window.addEventListener("resize", (function(){
    var t: ReturnType<typeof setTimeout> | undefined;
    return function(){ clearTimeout(t); t = setTimeout(settleStrips, 120); };
  })());
}
