import { CHEV, yearOf, titleCase } from "./format.ts";
import { byId, detailTexts, focusQuiet, layer, onScreen } from "./dom.ts";
import { GYN } from "./live.ts";
import { AXIS, pendingGeom } from "./charts.ts";
import { deficitHistory, marketCycles } from "./data.ts";
import { cycLabel, cycleByName, cycleSpanYears, openCycle } from "./model.ts";

export type HeadGroup = { key: string; label: string; on: boolean; value: string; rows: string };
export type HistHeadSpec = { mark?: () => string; title?: string | (() => string); menu?: () => HeadGroup[] };
export type PageStore = { mode: Record<string, string | undefined>; cycles: Record<string, string | null | undefined>; range: Record<string, string>; stops: Record<string, string[]>; head: Record<string, HistHeadSpec>; y0: Record<string, number | undefined>; when: Record<string, string | undefined> };
type GeomVal = ChartGeom["vals"][number];
type TimelineSource = { series?: Point[]; depth?: number | null };
export var page = {
  mode: undefined,
  cycles: undefined,
  range: undefined,
  stops: undefined,
  head: undefined,
  y0: undefined,
  when: {}
} as unknown as PageStore;
// ---- the history card's head ----
export var HIST_NOTE: Record<string, string | (() => string)> = {};
var DOTS = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
  '<circle cx="5.4" cy="12" r="1.75"/><circle cx="12" cy="12" r="1.75"/><circle cx="18.6" cy="12" r="1.75"/></svg>';
export function headPickRow(on: boolean, attr: string, key: string, label: string){
  return '<button type="button" class="cycsel-opt bh-pick' + (on ? " on" : "") +
    '" aria-pressed="' + (on ? "true" : "false") + '" ' + attr + '="' + key + '">' +
    '<span class="cycsel-tick" aria-hidden="true"></span>' +
    '<span class="cycsel-nm">' + label + '</span></button>';
}
export function histHead(id: string){
  var H = page.head[id];
  if (!H) return "";
  var t = typeof H.title === "function" ? H.title() : H.title;
  return '<div class="band-head">' +
    (H.mark ? '<span class="bh-mark" aria-hidden="true">' + H.mark() + '</span>' : "") +
    '<h2 class="bh-title">' + titleCase(t) + '</h2>' +
    '<span class="bh-sigma" id="bh-sigma-' + id + '" hidden></span>' +
    '<div class="bh-more-wrap"><button type="button" class="bh-more" data-head-more="' + id + '" ' +
      'aria-expanded="' + (headMenuFor === id ? "true" : "false") +
      '" aria-label="More about this chart">' + DOTS + '</button>' +
    '<div class="cycsel-menu bh-menu"' + (headMenuFor === id ? "" : " hidden") + '>' +
      (headMenuFor === id ? headMenuHtml(id) : "") + '</div></div>' +
  '</div>';
}
var headNoteIdx: Record<string, number> = {};
function headMenuHtml(id: string): string {
  var H = page.head[id] || {} as HistHeadSpec;
  var groups = H.menu ? H.menu() : [];
  var extra: string;
  if (!groups.length) extra = "";
  else if (headSubFor){
    var g = groups.filter(function(x){ return x.key === headSubFor; })[0];
    if (!g){ headSubFor = null; return headMenuHtml(id); }
    return '<button type="button" class="cycsel-opt bh-back" data-head-grp="" aria-label="Back from ' + g.label + '">' +
      CHEV + '<span class="cycsel-nm">' + g.label + '</span></button>' +
      '<div class="bh-sep"></div>' + g.rows;
  }
  else extra = groups.map(function(x){
    return '<button type="button" class="cycsel-opt bh-grp-row" ' +
      'data-head-grp="' + x.key + '"><span class="cycsel-nm">' + x.label + '</span>' +
      '<span class="cycsel-yr">' + (x.on ? x.value : "") + '</span>' + CHEV + '</button>';
  }).join("") + '<div class="bh-sep"></div>';
  var note = typeof HIST_NOTE[id] === "function" ? (HIST_NOTE[id] as () => string)() : HIST_NOTE[id];
  if (!note) return extra;
  if (headNoteIdx[id] == null){ headNoteIdx[id] = detailTexts.length; detailTexts.push(""); }
  detailTexts[headNoteIdx[id]] = note;
  return extra +
    '<button type="button" class="cycsel-opt bh-opt" data-detail-idx="' +
    headNoteIdx[id] + '"><span class="cycsel-nm">About this reading</span></button>';
}
var headMenuFor: string | null = null;
var headSubFor: string | null = null;
function paintHeadMenus(){
  var heads = document.querySelectorAll(".band-head");
  for (var i = 0; i < heads.length; i++){
    var btn = heads[i].querySelector(".bh-more"), menu = heads[i].querySelector<HTMLElement>(".bh-menu");
    if (!btn || !menu) continue;
    var on = btn.getAttribute("data-head-more") === headMenuFor;
    if (on && headMenuFor !== null) menu.innerHTML = headMenuHtml(headMenuFor);
    menu.hidden = !on;
    btn.setAttribute("aria-expanded", on ? "true" : "false");
  }
}
function headMoreBtn(id: string | null): HTMLElement | undefined {
  return Array.prototype.filter.call(document.querySelectorAll(".bh-more[data-head-more]"), function(b: HTMLElement){
    return b.getAttribute("data-head-more") === id && onScreen(b); })[0];
}
function headMenuFirst(){
  var b = headMoreBtn(headMenuFor), wrap = b && b.closest(".bh-more-wrap"), menu = wrap && wrap.querySelector<HTMLElement>(".bh-menu");
  focusQuiet(menu && menu.querySelector("button"));
}
function headMenuShut(refocus: boolean){
  var id = headMenuFor;
  headMenuFor = null; headSubFor = null; paintHeadMenus();
  if (refocus) focusQuiet(headMoreBtn(id));
}
export function histNote(head: string, info: string | (() => string)){ if (head && info) HIST_NOTE[head] = info; }
var TIMELINE_STOPS = [
  { key:"cycle",  label:"Current cycle" },
  { key:"5y",     label:"5Y",  span:5 },
  { key:"10y",    label:"10Y", span:10 },
  { key:"25y",    label:"25Y", span:25 },
  { key:"max",    label:"Max", span:Infinity },
  { key:"cycles", label:"Cycles" }
];
export function timelineSpan(key: string | undefined){
  if (key === "cycle") return cycleSpanYears();
  for (var i = 0; i < TIMELINE_STOPS.length; i++) if (TIMELINE_STOPS[i].key === key) return TIMELINE_STOPS[i].span;
  return null;
}
export function timelineFor(o: TimelineSource & { stops: string[] }){
  var ser = o.series || [], n = ser.length;
  var depth = o.depth != null ? o.depth : (n ? yearOf(ser[n - 1]) - yearOf(ser[0]) + 1 : 0);
  var hasCycle = o.stops.indexOf("cycle") !== -1;
  return TIMELINE_STOPS.filter(function(r){
    if (o.stops.indexOf(r.key) === -1) return false;
    if (r.span == null || r.span === Infinity) return true;
    if (hasCycle && r.span === 5) return false;
    return depth >= r.span;
  });
}
export function timelineWindow<T extends Point>(series: T[], key: string): T[] {
  var sp = timelineSpan(key);
  if (sp == null || sp === Infinity || !series.length) return series;
  var first = yearOf(series[series.length - 1]) - sp + 1;
  return series.filter(function(d){ return yearOf(d) >= first; });
}
export function windowScale(vals: (number | null)[], must?: number[]){
  var clean = vals.filter(function(v){ return v != null && isFinite(v); }) as number[];
  if (!clean.length) return { lo:0, hi:1, ticks:[0, 1] };
  var lo = Math.min.apply(null, clean), hi = Math.max.apply(null, clean);
  (must || []).forEach(function(m){ lo = Math.min(lo, m); hi = Math.max(hi, m); });
  if (hi === lo){ hi += 1; lo -= 1; }
  var pad = (hi - lo) * 0.08; lo -= pad; hi += pad;
  var raw = (hi - lo) / 5, mag = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10));
  var step = [1, 2, 2.5, 5, 10].map(function(m){ return m * mag; })
              .filter(function(x){ return x >= raw; })[0] || 10 * mag;
  var ticks: number[] = [], t = Math.ceil(lo / step) * step;
  for (var guard = 0; t <= hi + step * 1e-9 && guard < 40; t += step, guard++)
    ticks.push(Math.abs(t) < step * 1e-6 ? 0 : t);
  return { lo:lo, hi:hi, ticks:ticks };
}
export function histReadEnsure(host: HTMLElement){
  var cont = (host.closest(".page-chart, .spread-history") || host.parentNode || host) as HTMLElement;
  var el = cont.querySelector<HTMLElement>(":scope > .hist-read");
  if (!el){
    el = document.createElement("div");
    el.className = "hist-read";
    el.innerHTML = '<div class="hr-plate"><div class="hr-label"></div><div class="hr-value"></div></div>';
    var svg = cont.querySelector("svg.vh-svg") || cont.querySelector("svg.hist-svg") ||
              cont.querySelector(".chart-shell > svg") || cont.querySelector(".dchart > svg") ||
              cont.querySelector("svg");
    var anchor: Node | null = svg;
    while (anchor && anchor.parentNode !== cont) anchor = anchor.parentNode;
    cont.insertBefore(el, anchor || cont.firstChild);
    cont.classList.add("has-hist-read");
  }
  if (!el.firstElementChild || el.firstElementChild.className !== "hr-plate")
    el.innerHTML = '<div class="hr-plate"><div class="hr-label"></div><div class="hr-value"></div></div>';
  host.__readEl = el;
  return el;
}
function geomFmt(g: ChartGeom){ return function(v: number){ return String(g.fmt ? g.fmt(v) : v.toFixed(1) + "%").replace(/^-/, "\u2212"); }; }
function attrNum(el: Element, name: string){ return parseFloat(el.getAttribute(name) || ""); }
export function histReadFill(host: HTMLElement, d: GeomVal | undefined, i?: number){
  var g = host.__geom, el = host.__readEl;
  if (!g || !el) return;
  var fmt = geomFmt(g);
  var atRest = !d || d.v == null;
  if (atRest){
    var vv = g.vals || [];
    for (var k = vv.length - 1; k >= 0; k--)
    { var c = vv[k]; if (c && c.v != null && isFinite(c.v)){ d = c; i = k; break; } }
  }
  if (!d || d.v == null || i == null){ el.classList.remove("on"); host.classList.remove("resting"); return; }
  host.classList.toggle("resting", atRest);
  var lab = g.at(d, i), val = fmt(d.v);
  var plate = el.firstElementChild as HTMLElement | null;
  if (!plate) return;
  plate.children[0].textContent = lab;
  plate.children[1].innerHTML = val;
  var svg = host.querySelector("svg.hist-svg") || host.querySelector("svg.vh-svg") || host.querySelector("svg");
  if (!svg){ el.classList.remove("on"); return; }
  var sb = svg.getBoundingClientRect(), eb = el.getBoundingClientRect();
  if (!sb.width || !eb.width){ el.classList.remove("on"); return; }
  el.classList.add("on");
  var scale = sb.width / g.W || 1;
  var cross = svg.querySelector(".hist-cross");
  if (cross){
    var cx = (g.L + (g.R - g.L) * i / Math.max(1, g.n - 1)).toFixed(1);
    cross.setAttribute("x1", cx); cross.setAttribute("x2", cx);
  }
  var fr = svg.querySelector(".bt-frame");
  var frTop = fr ? attrNum(fr, "y") : g.T - AXIS.LEG;
  var cp = el.offsetParent ? el.offsetParent.getBoundingClientRect() : eb;
  var plateTop = sb.top - cp.top + (frTop + AXIS.LEG + 10) * scale;
  var colX = sb.left - eb.left + (g.L + (g.R - g.L) * i / Math.max(1, g.n - 1)) * scale;
  plate.classList.remove("compact");
  var w = plate.offsetWidth;
  if (w > (g.R - g.L) * scale * 0.6){ plate.classList.add("compact"); w = plate.offsetWidth; }
  var fx0 = fr ? attrNum(fr, "x") : g.L;
  var fx1 = fr ? fx0 + attrNum(fr, "width") : g.R;
  var lo = (sb.left - eb.left) + (fx0 + AXIS.L) * scale, hi = (sb.left - eb.left) + (fx1 - AXIS.R) * scale;
  var mx = i === 0 ? lo
         : i === g.n - 1 ? hi - w
         : Math.max(lo, Math.min(hi - w, colX - w / 2));
  el.style.top = plateTop.toFixed(1) + "px";
  if (!plate.__placed) plate.style.transition = "none";
  plate.style.marginLeft = mx.toFixed(1) + "px";
  if (!plate.__placed){ void plate.offsetWidth; plate.style.transition = ""; plate.__placed = true; }

}
function histAxisEnds(svg: SVGSVGElement, fr: Element | null){
  if (!fr || !svg.getBBox) return;
  var x0 = attrNum(fr, "x"), x1 = x0 + attrNum(fr, "width");
  Array.prototype.forEach.call(svg.querySelectorAll(".bt-xl"), function(t: SVGTextElement){
    var bb;
    try { bb = t.getBBox(); } catch (e) { return; }
    if (!bb.width) return;
    if (bb.x < x0){ t.setAttribute("text-anchor", "start"); t.setAttribute("x", x0.toFixed(1)); }
    else if (bb.x + bb.width > x1){ t.setAttribute("text-anchor", "end"); t.setAttribute("x", x1.toFixed(1)); }
  });
}
export function histLegend(host: HTMLElement){
  var g = host.__geom;
  var svg = host.querySelector<SVGSVGElement>("svg.hist-svg") || host.querySelector<SVGSVGElement>("svg.vh-svg") || host.querySelector("svg");
  if (!svg) return;
  var old = svg.querySelector(".hist-legend");
  if (old) old.remove();
  histAxisEnds(svg, svg.querySelector(".bt-frame"));
  if (!g || g.B == null) return;
  var refs = (g.refs || []).filter(function(r){ return r && (r.v == null || isFinite(r.v)); });
  if (!refs.length) return;
  var fmt = geomFmt(g);
  var NS: "http://www.w3.org/2000/svg" = "http://www.w3.org/2000/svg";
  var grp = document.createElementNS(NS, "g");
  grp.setAttribute("class", "hist-legend");
  grp.setAttribute("aria-hidden", "true");
  var fr = svg.querySelector(".bt-frame");
  var INSET = 6, PLATE_H = 15, PAD_X = 6;
  var frTop = fr ? attrNum(fr, "y") : g.T - AXIS.LEG;
  var frRight = fr ? attrNum(fr, "x") + attrNum(fr, "width") : g.R;
  var y = frTop + INSET + PLATE_H / 2, MARK = 12, PAD = 5, GAP = 13, items: { t: SVGTextElement; m: SVGRectElement | SVGLineElement; w: number }[] = [];
  var plate = document.createElementNS(NS, "rect");
  plate.setAttribute("class", "chart-label-plate");
  plate.setAttribute("rx", "5");
  plate.setAttribute("y", (frTop + INSET).toFixed(1));
  plate.setAttribute("height", String(PLATE_H));
  grp.appendChild(plate);
  refs.forEach(function(r){
    var t = document.createElementNS(NS, "text");
    t.setAttribute("class", "hl-lab");
    t.setAttribute("y", (y + 3.2).toFixed(1));
    t.textContent = r.v == null ? r.label : r.label + " " + fmt(r.v);
    grp.appendChild(t);
    var m = document.createElementNS(NS, r.swatch ? "rect" : "line");
    if (r.swatch){
      m.setAttribute("class", "hl-sw"); m.setAttribute("fill", r.swatch);
      m.setAttribute("width", "9"); m.setAttribute("height", "9"); m.setAttribute("rx", "2");
    } else m.setAttribute("class", r.cls || (r.dash ? "vh-mean" : "temp-avg"));
    if (r.swatch) m.setAttribute("y", (y - 4.5).toFixed(1));
    else { m.setAttribute("y1", y.toFixed(1)); m.setAttribute("y2", y.toFixed(1)); }
    grp.appendChild(m);
    items.push({ t:t, m:m, w:0 });
  });
  svg.appendChild(grp);
  var total = 0;
  items.forEach(function(it){
    it.w = MARK + PAD + (it.t.getComputedTextLength ? it.t.getComputedTextLength() : it.t.textContent!.length * 5);
    total += it.w;
  });
  total += GAP * (items.length - 1);
  var x = Math.max(g.L + PAD_X, frRight - INSET - PAD_X - total);
  plate.setAttribute("x", (x - PAD_X).toFixed(1));
  plate.setAttribute("width", (total + PAD_X * 2).toFixed(1));
  items.forEach(function(it){
    if (it.m.tagName === "rect") it.m.setAttribute("x", (x + 1.5).toFixed(1));
    else { it.m.setAttribute("x1", x.toFixed(1)); it.m.setAttribute("x2", (x + MARK).toFixed(1)); }
    it.t.setAttribute("x", (x + MARK + PAD).toFixed(1));
    x += it.w + GAP;
  });
}
export function refitHistory(box: Element | null, build: (w: number) => string){
  if (!box || !build) return;
  var svg = box.querySelector("svg.vh-svg, svg.hist-svg");
  if (!svg) return;
  var w = Math.round(svg.getBoundingClientRect().width);
  if (!w) return;
  var vb = parseFloat((svg.getAttribute("viewBox") || "").split(" ")[2]);
  if (!(vb > 0) || Math.abs(vb - w) <= 1) return;
  svg.outerHTML = build(w);
}
function wireHistHover(host: HTMLElement, tipId: string){
  if (!host) return;
  histReadEnsure(host);
  histReadFill(host, null);
  histLegend(host);
  histLive(host);
  if (host.__hovWired) return;
  host.__hovWired = true;
  var tip = byId(tipId);
  function hide(){
    if (tip){ tip.style.opacity = "0"; tip.hidden = true; }
    host.classList.remove("hovering");
    if (host.__onCol){ host.__onCol.classList.remove("on"); host.__onCol = null; }
    histReadFill(host, null);
  }
  function at(e: PointerEvent){
    var col0 = host.querySelector<SVGElement>(".hcol");
    var g = host.__geom;
    var svg = (col0 && col0.ownerSVGElement) || host.querySelector("svg.hist-svg") || host.querySelector("svg");
    if (!g || !svg || !tip) return;
    var box = svg.getBoundingClientRect();
    var scale = box.width / g.W || 1;
    var x = (e.clientX - box.left) / scale;
    var hPad = (g.R - g.L) / Math.max(1, 2 * (g.n - 1));
    if (x < g.L - hPad || x > g.R + hPad){ hide(); return; }
    var i = Math.round((x - g.L) / Math.max(1, g.R - g.L) * (g.n - 1));
    histShow(host, svg, Math.max(0, Math.min(g.n - 1, i)));
  }
  host.addEventListener("pointermove", at);
  host.addEventListener("pointerdown", at);
  host.addEventListener("pointerleave", function(e){ if (e.pointerType !== "touch") hide(); });
  histKeysWire(host, hide);
}
function histShow(host: HTMLElement, svg: Element, i: number){
  var g = host.__geom, d = g && g.vals[i]; if (!d) return false;
  host.classList.add("hovering");
  if (host.__onCol) host.__onCol.classList.remove("on");
  var col = svg.querySelectorAll(".hcol")[i];
  if (col){ col.classList.add("on"); host.__onCol = col; }
  histReadFill(host, d, i);
  return true;
}
function histLive(host: HTMLElement){
  var live = host.querySelector<HTMLElement>(":scope > .sr-only[aria-live]"), named = host.querySelector("svg[aria-label]");
  if (!live){ live = document.createElement("span"); live.className = "sr-only"; live.setAttribute("aria-live", "polite"); host.appendChild(live); }
  host.setAttribute("tabindex", "0"); host.setAttribute("role", "group");
  host.setAttribute("aria-label", (named ? named.getAttribute("aria-label") + ". " : "") + "Left and right arrows read each value.");
  return live;
}
function histKeysWire(host: HTMLElement, hide: () => void){
  host.addEventListener("blur", function(){ host.__keyI = null; hide(); });
  host.addEventListener("keydown", function(e){
    var g = host.__geom, svg = host.querySelector("svg.hist-svg, svg.vh-svg") || host.querySelector("svg");
    var step = ({ ArrowLeft:-1, ArrowRight:1 } as Record<string, number>)[e.key];
    if (!g || !svg || (step == null && e.key !== "Home" && e.key !== "End")) return;
    e.preventDefault();
    var i = e.key === "Home" ? 0 : e.key === "End" ? g.n - 1 : Math.max(0, Math.min(g.n - 1, host.__keyI == null ? g.n - 1 : host.__keyI + step));
    host.__keyI = i;
    if (!histShow(host, svg, i)) return;
    var read = histReadEnsure(host), part = function(s: string){ var n = read && read.querySelector(s); return n ? n.textContent : ""; };
    histLive(host).textContent = [part(".hr-label"), part(".hr-value")].filter(Boolean).join(", ");
  });
}
export function mWindowFrom(len: number, key: string | undefined){
  var sp = timelineSpan(key);
  return (sp == null || sp === Infinity) ? 0 : Math.max(0, len - sp * 12);
}
export function qWindowFrom(len: number, key: string | undefined){
  var sp = timelineSpan(key);
  return (sp == null || sp === Infinity) ? 0 : Math.max(0, len - sp * 4);
}
export function defFrom(key: string){
  var sp = timelineSpan(key);
  return (sp == null || sp === Infinity) ? 0 : Math.max(0, deficitHistory.length - sp);
}
export function tabSegs(items: string[][], active: string | undefined, attr: string){
  var any = items.some(function(t){ return t[0] === active; });
  return items.map(function(t, i){
    var on = t[0] === active;
    return '<button type="button" class="range-seg' + (on ? " on" : "") + '" role="tab" aria-selected="' + on +
      '" tabindex="' + (on || (!any && !i) ? 0 : -1) + '" ' + attr + '="' + t[0] + '">' + t[1] + '</button>';
  }).join("");
}
export function tabBar(attrs: string, items: string[][], active: string | undefined, attr: string, cls?: string){
  return '<div class="rangebar' + (cls ? " " + cls : "") + '" role="tablist" ' + attrs + '>' + tabSegs(items, active, attr) + '</div>';
}
function modeBar(id: string, active: string | undefined, extra?: string[][]){
  return tabBar('data-mode-for="' + id + '"', [["cycles", "Cycles"], ["calendar", "Years"]].concat(extra || []), active, "data-mode");
}
export var pickerOpen: Record<string, boolean> = {};
export function controlKeys(el: Element | null): string[] {
  var box = el && el.closest && el.closest("[data-mode-for], [data-range-for], [data-cycles-for]");
  return box && el ? controlKeysIn(box, el) : [];
}
function controlKeysIn(box: Element, el: Element): string[] {
  var a = ["data-mode-for", "data-range-for", "data-cycles-for"].filter(function(n){ return box.hasAttribute(n); })[0];
  var b = ["data-mode", "data-range", "data-cycle", "data-picker-toggle"].filter(function(n){ return el.hasAttribute(n); })[0];
  var at = "[" + a + '="' + box.getAttribute(a) + '"] ';
  return (b ? [at + "[" + b + '="' + el.getAttribute(b) + '"]'] : []).concat(a === "data-cycles-for" ? [at + "[data-picker-toggle]"] : []);
}
export function histControls(id: string, tl: TimelineSource, minYear?: number | null, extra?: string[][]){
  var mode = page.mode[id], on = mode === "cycles";
  if (minYear == null) minYear = page.y0[id];
  var known = mode === "cycles" || mode === "calendar";
  return controlsBox(modeBar(id, mode, extra) +
    (!known ? "" : on ? cyclePicker(id, page.cycles[id], minYear)
                      : rangeBar(id, timelineFor({ series:tl.series, depth:tl.depth, stops:page.stops[id] }), page.range[id])));
}
function controlsBox(inner: string){ return '<div class="hist-controls">' + inner + '</div>'; }
export function pageCycle(id: string, y0?: number | null){
  var c = page.mode[id] === "cycles" ? (cycleByName(page.cycles[id]) || openCycle()) : null;
  if (y0 == null) y0 = page.y0[id];
  return c && y0 != null && c.from < y0 ? openCycle() : c;
}
function cyclePicker(id: string, picked: string | null | undefined, minYear?: number | null){
  var rows = marketCycles.slice().reverse()
    .filter(function(c){ return minYear == null || c.from >= minYear; });
  var cur = cycleByName(picked) || openCycle();
  if (rows.indexOf(cur) === -1) cur = rows[0] || cur;
  return pickList(id, rows.map(function(c){ var L = cycLabel(c); return { attr:"data-cycle", key:c.name, name:L.name, aside:L.years, on:c.name === cur.name }; }));
}
type PickRow = { attr: string; key: string; name: string; aside: string; on: boolean };
function pickList(id: string, rows: PickRow[]){
  var cur = rows.filter(function(r){ return r.on; })[0] || rows[0], open = !!pickerOpen[id];
  return '<div class="cycsel' + (open ? " open" : "") + '" data-cycles-for="' + id + '">' +
    '<button type="button" class="cycsel-btn" data-picker-toggle="1" aria-haspopup="listbox" aria-expanded="' +
      (open ? "true" : "false") + '"><span class="cycsel-nm">' + cur.name + '</span>' +
      '<span class="cycsel-yr">' + cur.aside + '</span>' + CHEV + '</button>' +
    '<div class="cycsel-menu" role="listbox"' + (open ? "" : " hidden") + '>' +
    rows.map(function(r){
      return '<button type="button" class="cycsel-opt' + (r.on ? " on" : "") + '" role="option" aria-selected="' +
        (r.on ? "true" : "false") + '" ' + r.attr + '="' + r.key + '">' +
        '<span class="cycsel-tick" aria-hidden="true"></span><span class="cycsel-nm">' + r.name +
        '</span><span class="cycsel-yr">' + r.aside + '</span></button>';
    }).join("") + '</div></div>';
}
export function periodControls(id: string, rows: { key: string; name: string; cycle: Cycle }[], picked: string){
  return controlsBox(modeBar(id, page.mode[id], [["quarters", "Quarters"]]) + (page.mode[id] === "cycles" ? cyclePicker(id, page.cycles[id]) :
    pickList(id, rows.slice().reverse().map(function(d){ return { attr:"data-when", key:d.key, name:d.name, aside:cycLabel(d.cycle).name, on:d.key === picked }; }))));
}
export function rangeBar(id: string, ranges: { key: string; label: string }[] | null | undefined, active: string){
  if (!ranges || ranges.length < 2) return "";
  return tabBar('data-range-for="' + id + '"', ranges.map(function(r){ return [r.key, r.label]; }), active, "data-range");
}
export function headSigma(id: string, text?: string | null){
  var el = byId("bh-sigma-" + id); if (!el) return;
  el.textContent = text == null ? "" : "(Σ" + text + ")";
  el.hidden = text == null;
}
export function attachHistory(host: HTMLElement | null, tipId?: string | null, expect?: string){
  if (!host) return null;
  var g = pendingGeom;
  if (expect && (!g || g.src !== expect))
    (window.__geomMiss = window.__geomMiss || []).push(expect + " wanted, " + (g ? g.src : "none") + " pending");
  host.__geom = g;
  if (tipId) wireHistHover(host, tipId);
  return g;
}

export function bootHistory(){
  layer(0, { open:function(){ return headMenuFor !== null; }, close:function(){ headMenuShut(true); } });
  document.addEventListener("click", function(e){
    var pick = (e.target as Element).closest && (e.target as Element).closest(".bh-pick");
    var grp = (e.target as Element).closest && (e.target as Element).closest("[data-head-grp]");
    if (grp){ headSubFor = grp.getAttribute("data-head-grp") || null; paintHeadMenus(); headMenuFirst(); return; }
    if (pick){
      var from = headMenuFor;
      headMenuShut(false);
      var mat = pick.getAttribute("data-ylm-mat");
      if (mat) GYN.fire("pickSeries", null, mat);
      else GYN.fire("pickSpread", pick.getAttribute("data-hzn-spread"));
      focusQuiet(headMoreBtn(from));
      return;
    }
    var btn = (e.target as Element).closest && (e.target as Element).closest("[data-head-more]");
    if (!btn){ if (headMenuFor !== null) headMenuShut(false); return; }
    var id = btn.getAttribute("data-head-more");
    headMenuFor = (headMenuFor === id || id === null || !HIST_NOTE[id]) ? null : id;
    headSubFor = null;
    paintHeadMenus();
    if (headMenuFor) headMenuFirst();
  });
}
