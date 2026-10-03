import { CHEV, yearOf } from "./format.js";
import { byId, detailTexts, focusQuiet, layer, onScreen } from "./dom.js";
import { GYN } from "./live.js";
import { AXIS, pendingGeom } from "./charts.js";
import { deficitHistory, hyAt, hyDates, hyNum, marketCycles } from "./data.js";
import { cycLabel, cycleByName, cycleSpanYears, openCycle } from "./model.js";

export var page = {
  mode: undefined,
  cycles: undefined,
  range: undefined,
  stops: undefined,
  head: undefined
};
/* ---- the history card's head ---- */
export var HIST_NOTE = {};
var DOTS = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
  '<circle cx="5.4" cy="12" r="1.75"/><circle cx="12" cy="12" r="1.75"/><circle cx="18.6" cy="12" r="1.75"/></svg>';
export function headPickRow(on, attr, key, label){
  return '<button type="button" class="cycsel-opt bh-pick' + (on ? " on" : "") +
    '" aria-pressed="' + (on ? "true" : "false") + '" ' + attr + '="' + key + '">' +
    '<span class="cycsel-tick" aria-hidden="true"></span>' +
    '<span class="cycsel-nm">' + label + '</span></button>';
}
export function histHead(id){
  var H = page.head[id];
  if (!H) return "";
  var t = typeof H.title === "function" ? H.title() : H.title;
  return '<div class="band-head">' +
    (H.mark ? '<span class="bh-mark" aria-hidden="true">' + H.mark() + '</span>' : "") +
    '<h2 class="bh-title">' + t + '</h2>' +
    '<span class="bh-sigma" id="bh-sigma-' + id + '" hidden></span>' +
    '<div class="bh-more-wrap"><button type="button" class="bh-more" data-head-more="' + id + '" ' +
      'aria-expanded="' + (headMenuFor === id ? "true" : "false") +
      '" aria-label="More about this chart">' + DOTS + '</button>' +
    '<div class="cycsel-menu bh-menu"' + (headMenuFor === id ? "" : " hidden") + '>' +
      (headMenuFor === id ? headMenuHtml(id) : "") + '</div></div>' +
  '</div>';
}
var headNoteIdx = {};
function headMenuHtml(id){
  var H = page.head[id] || {};
  var groups = H.menu ? H.menu() : [];
  var extra;
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
  var note = HIST_NOTE[id];
  if (!note) return extra;
  if (headNoteIdx[id] == null){ headNoteIdx[id] = detailTexts.length; detailTexts.push(""); }
  detailTexts[headNoteIdx[id]] = note;
  return extra +
    '<button type="button" class="cycsel-opt bh-opt" data-detail-idx="' +
    headNoteIdx[id] + '"><span class="cycsel-nm">About this reading</span></button>';
}
var headMenuFor = null;
var headSubFor = null;
function paintHeadMenus(){
  var heads = document.querySelectorAll(".band-head");
  for (var i = 0; i < heads.length; i++){
    var btn = heads[i].querySelector(".bh-more"), menu = heads[i].querySelector(".bh-menu");
    if (!btn || !menu) continue;
    var on = btn.getAttribute("data-head-more") === headMenuFor;
    if (on) menu.innerHTML = headMenuHtml(headMenuFor);
    menu.hidden = !on;
    btn.setAttribute("aria-expanded", on ? "true" : "false");
  }
}
function headMoreBtn(id){
  return Array.prototype.filter.call(document.querySelectorAll(".bh-more[data-head-more]"), function(b){
    return b.getAttribute("data-head-more") === id && onScreen(b); })[0];
}
function headMenuFirst(){
  var b = headMoreBtn(headMenuFor), menu = b && b.closest(".bh-more-wrap").querySelector(".bh-menu");
  focusQuiet(menu && menu.querySelector("button"));
}
function headMenuShut(refocus){
  var id = headMenuFor;
  headMenuFor = null; headSubFor = null; paintHeadMenus();
  if (refocus) focusQuiet(headMoreBtn(id));
}
export function histNote(head, info){ if (head && info) HIST_NOTE[head] = info; }
var TIMELINE_STOPS = [
  { key:"cycle",  label:"Current cycle" },
  { key:"1y",     label:"1Y",  span:1 },
  { key:"5y",     label:"5Y",  span:5 },
  { key:"10y",    label:"10Y", span:10 },
  { key:"25y",    label:"25Y", span:25 },
  { key:"max",    label:"Max", span:Infinity },
  { key:"cycles", label:"Cycles" }
];
export function timelineSpan(key){
  if (key === "cycle") return cycleSpanYears();
  for (var i = 0; i < TIMELINE_STOPS.length; i++) if (TIMELINE_STOPS[i].key === key) return TIMELINE_STOPS[i].span;
  return null;
}
export function timelineFor(o){
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
export function timelineWindow(series, key){
  var sp = timelineSpan(key);
  if (sp == null || sp === Infinity || !series.length) return series;
  var first = yearOf(series[series.length - 1]) - sp + 1;
  return series.filter(function(d){ return yearOf(d) >= first; });
}
export function windowScale(vals, must){
  var clean = vals.filter(function(v){ return v != null && isFinite(v); });
  if (!clean.length) return { lo:0, hi:1, ticks:[0, 1] };
  var lo = Math.min.apply(null, clean), hi = Math.max.apply(null, clean);
  (must || []).forEach(function(m){ lo = Math.min(lo, m); hi = Math.max(hi, m); });
  if (hi === lo){ hi += 1; lo -= 1; }
  var pad = (hi - lo) * 0.08; lo -= pad; hi += pad;
  var raw = (hi - lo) / 5, mag = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10));
  var step = [1, 2, 2.5, 5, 10].map(function(m){ return m * mag; })
              .filter(function(x){ return x >= raw; })[0] || 10 * mag;
  var ticks = [], t = Math.ceil(lo / step) * step;
  for (var guard = 0; t <= hi + step * 1e-9 && guard < 40; t += step, guard++)
    ticks.push(Math.abs(t) < step * 1e-6 ? 0 : t);
  return { lo:lo, hi:hi, ticks:ticks };
}
export function histReadEnsure(host){
  var cont = host.closest(".page-chart, .spread-history") || host.parentNode || host;
  var el = cont.querySelector(":scope > .hist-read");
  if (!el){
    el = document.createElement("div");
    el.className = "hist-read";
    el.innerHTML = '<div class="hr-plate"><div class="hr-label"></div><div class="hr-value"></div></div>';
    var svg = cont.querySelector("svg.vh-svg") || cont.querySelector("svg.hist-svg") ||
              cont.querySelector(".chart-shell > svg") || cont.querySelector(".dchart > svg") ||
              cont.querySelector("svg");
    var anchor = svg;
    while (anchor && anchor.parentNode !== cont) anchor = anchor.parentNode;
    cont.insertBefore(el, anchor || cont.firstChild);
    cont.classList.add("has-hist-read");
  }
  if (!el.firstElementChild || el.firstElementChild.className !== "hr-plate")
    el.innerHTML = '<div class="hr-plate"><div class="hr-label"></div><div class="hr-value"></div></div>';
  host.__readEl = el;
  return el;
}
export function histReadFill(host, d, i){
  var g = host.__geom, el = host.__readEl;
  if (!g || !el) return;
  var fmt = function(v){
    return String(g.fmt ? g.fmt(v) : v.toFixed(1) + "%").replace(/^-/, "\u2212");
  };
  var atRest = !d || d.v == null;
  if (atRest){
    var vv = g.vals || [];
    for (var k = vv.length - 1; k >= 0; k--)
      if (vv[k] && vv[k].v != null && isFinite(vv[k].v)){ d = vv[k]; i = k; break; }
    if (!d || d.v == null){ el.classList.remove("on"); host.classList.remove("resting"); return; }
  }
  host.classList.toggle("resting", atRest);
  var lab = g.at(d, i), val = fmt(d.v);
  var plate = el.firstElementChild;
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
  var frTop = fr ? parseFloat(fr.getAttribute("y")) : g.T - AXIS.LEG;
  var cp = el.offsetParent ? el.offsetParent.getBoundingClientRect() : eb;
  var plateTop = sb.top - cp.top + (frTop + AXIS.LEG + 10) * scale;
  var colX = sb.left - eb.left + (g.L + (g.R - g.L) * i / Math.max(1, g.n - 1)) * scale;
  plate.classList.remove("compact");
  var w = plate.offsetWidth;
  if (w > (g.R - g.L) * scale * 0.6){ plate.classList.add("compact"); w = plate.offsetWidth; }
  var fx0 = fr ? parseFloat(fr.getAttribute("x")) : g.L;
  var fx1 = fr ? fx0 + parseFloat(fr.getAttribute("width")) : g.R;
  var lo = (sb.left - eb.left) + (fx0 + AXIS.L) * scale, hi = (sb.left - eb.left) + (fx1 - AXIS.R) * scale;
  var mx = i === 0 ? lo
         : i === g.n - 1 ? hi - w
         : Math.max(lo, Math.min(hi - w, colX - w / 2));
  el.style.top = plateTop.toFixed(1) + "px";
  if (!plate.__placed) plate.style.transition = "none";
  plate.style.marginLeft = mx.toFixed(1) + "px";
  if (!plate.__placed){ void plate.offsetWidth; plate.style.transition = ""; plate.__placed = true; }

}
function histAxisEnds(svg, fr){
  if (!fr || !svg.getBBox) return;
  var x0 = parseFloat(fr.getAttribute("x")), x1 = x0 + parseFloat(fr.getAttribute("width"));
  Array.prototype.forEach.call(svg.querySelectorAll(".bt-xl"), function(t){
    var bb;
    try { bb = t.getBBox(); } catch (e) { return; }
    if (!bb.width) return;
    if (bb.x < x0){ t.setAttribute("text-anchor", "start"); t.setAttribute("x", x0.toFixed(1)); }
    else if (bb.x + bb.width > x1){ t.setAttribute("text-anchor", "end"); t.setAttribute("x", x1.toFixed(1)); }
  });
}
export function histLegend(host){
  var g = host.__geom;
  var svg = host.querySelector("svg.hist-svg") || host.querySelector("svg.vh-svg") || host.querySelector("svg");
  if (!svg) return;
  var old = svg.querySelector(".hist-legend");
  if (old) old.parentNode.removeChild(old);
  histAxisEnds(svg, svg.querySelector(".bt-frame"));
  if (!g || g.B == null) return;
  var refs = (g.refs || []).filter(function(r){ return r && (r.v == null || isFinite(r.v)); });
  if (!refs.length) return;
  var fmt = function(v){ return String(g.fmt ? g.fmt(v) : v.toFixed(1) + "%").replace(/^-/, "\u2212"); };
  var NS = "http://www.w3.org/2000/svg";
  var grp = document.createElementNS(NS, "g");
  grp.setAttribute("class", "hist-legend");
  grp.setAttribute("aria-hidden", "true");
  var fr = svg.querySelector(".bt-frame");
  var INSET = 6, PLATE_H = 15, PAD_X = 6;
  var frTop = fr ? parseFloat(fr.getAttribute("y")) : g.T - AXIS.LEG;
  var frRight = fr ? parseFloat(fr.getAttribute("x")) + parseFloat(fr.getAttribute("width")) : g.R;
  var y = frTop + INSET + PLATE_H / 2, MARK = 12, PAD = 5, GAP = 13, items = [];
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
    items.push({ t:t, m:m });
  });
  svg.appendChild(grp);
  var total = 0;
  items.forEach(function(it){
    it.w = MARK + PAD + (it.t.getComputedTextLength ? it.t.getComputedTextLength() : it.t.textContent.length * 5);
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
export function refitHistory(box, build){
  if (!box || !build) return;
  var svg = box.querySelector("svg.vh-svg, svg.hist-svg");
  if (!svg) return;
  var w = Math.round(svg.getBoundingClientRect().width);
  if (!w) return;
  var vb = parseFloat((svg.getAttribute("viewBox") || "").split(" ")[2]);
  if (!(vb > 0) || Math.abs(vb - w) <= 1) return;
  svg.outerHTML = build(w);
}
function wireHistHover(host, tipId){
  if (!host) return;
  histReadEnsure(host);
  histReadFill(host, null);
  histLegend(host);
  if (host.__hovWired) return;
  host.__hovWired = true;
  var tip = byId(tipId);
  function hide(){
    if (tip){ tip.style.opacity = "0"; tip.hidden = true; }
    host.classList.remove("hovering");
    if (host.__onCol){ host.__onCol.classList.remove("on"); host.__onCol = null; }
    histReadFill(host, null);
  }
  function at(e){
    var col0 = host.querySelector(".hcol");
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
function histShow(host, svg, i){
  var d = host.__geom.vals[i]; if (!d) return false;
  host.classList.add("hovering");
  if (host.__onCol) host.__onCol.classList.remove("on");
  var col = svg.querySelectorAll(".hcol")[i];
  if (col){ col.classList.add("on"); host.__onCol = col; }
  histReadFill(host, d, i);
  return true;
}
function histKeysWire(host, hide){
  var live = document.createElement("span");
  live.className = "sr-only"; live.setAttribute("aria-live", "polite");
  host.appendChild(live);
  var named = host.querySelector("svg[aria-label]");
  host.setAttribute("tabindex", "0"); host.setAttribute("role", "group");
  host.setAttribute("aria-label", (named ? named.getAttribute("aria-label") + ". " : "") + "Left and right arrows read each value.");
  host.addEventListener("blur", function(){ host.__keyI = null; hide(); });
  host.addEventListener("keydown", function(e){
    var g = host.__geom, svg = host.querySelector("svg.hist-svg, svg.vh-svg") || host.querySelector("svg");
    var step = { ArrowLeft:-1, ArrowRight:1 }[e.key], i = host.__keyI == null ? g && g.n - 1 : host.__keyI;
    if (!g || !svg || (step == null && e.key !== "Home" && e.key !== "End")) return;
    e.preventDefault();
    i = e.key === "Home" ? 0 : e.key === "End" ? g.n - 1 : Math.max(0, Math.min(g.n - 1, i + (host.__keyI == null ? 0 : step)));
    host.__keyI = i;
    if (!histShow(host, svg, i)) return;
    var read = histReadEnsure(host), part = function(s){ var n = read && read.querySelector(s); return n ? n.textContent : ""; };
    live.textContent = [part(".hr-label"), part(".hr-value")].filter(Boolean).join(", ");
  });
}
export function mWindowFrom(len, key){
  var sp = timelineSpan(key);
  return (sp == null || sp === Infinity) ? 0 : Math.max(0, len - sp * 12);
}
export function qWindowFrom(len, key){
  var sp = timelineSpan(key);
  return (sp == null || sp === Infinity) ? 0 : Math.max(0, len - sp * 4);
}
export function defFrom(key){
  var sp = timelineSpan(key);
  return (sp == null || sp === Infinity) ? 0 : Math.max(0, deficitHistory.length - sp);
}
export function hyWindowFrom(key){
  var sp = timelineSpan(key);
  if (sp == null || sp === Infinity) return 0;
  var last = hyAt(hyDates.length - 1);
  var cut = (last.y - sp) * 10000 + last.m * 100 + last.d;
  for (var i = 0; i < hyDates.length; i++) if (hyNum(i) >= cut) return i;
  return 0;
}
function modeBar(id, active, extra){
  return '<div class="rangebar" role="tablist" data-mode-for="' + id + '">' +
    [["cycles", "Cycles"], ["calendar", "Years"]].concat(extra || []).map(function(m){
      return '<button type="button" class="range-seg' + (m[0] === active ? " on" : "") + '" role="tab" ' +
        'aria-selected="' + (m[0] === active ? "true" : "false") + '" data-mode="' + m[0] + '">' + m[1] + '</button>';
    }).join("") + '</div>';
}
export var pickerOpen = {};
export function histControls(id, tl, minYear, extra){
  var mode = page.mode[id], on = mode === "cycles";
  var known = mode === "cycles" || mode === "calendar";
  return '<div class="hist-controls">' +
    modeBar(id, mode, extra) +
    (!known ? "" : on ? cyclePicker(id, page.cycles[id], minYear)
                      : rangeBar(id, timelineFor({ series:tl.series, depth:tl.depth, stops:page.stops[id] }), page.range[id])) +
  '</div>';
}
export function pageCycle(id, y0){
  var c = page.mode[id] === "cycles" ? (cycleByName(page.cycles[id]) || openCycle()) : null;
  return c && c.from < y0 ? openCycle() : c;
}
function cyclePicker(id, picked, minYear){
  var rows = marketCycles.slice().reverse()
    .filter(function(c){ return minYear == null || c.from >= minYear; });
  var cur = cycleByName(picked) || openCycle();
  if (rows.indexOf(cur) === -1) cur = rows[0] || cur;
  var CL = cycLabel(cur), open = !!pickerOpen[id];
  return '<div class="cycsel' + (open ? " open" : "") + '" data-cycles-for="' + id + '">' +
    '<button type="button" class="cycsel-btn" data-picker-toggle="1" aria-haspopup="listbox" aria-expanded="' +
      (open ? "true" : "false") + '"><span class="cycsel-nm">' + CL.name + '</span>' +
      '<span class="cycsel-yr">' + CL.years + '</span>' + CHEV + '</button>' +
    '<div class="cycsel-menu" role="listbox"' + (open ? "" : " hidden") + '>' +
    rows.map(function(c){
      var sel = c.name === cur.name, L = cycLabel(c);
      return '<button type="button" class="cycsel-opt' + (sel ? " on" : "") + '" role="option" aria-selected="' +
        (sel ? "true" : "false") + '" data-cycle="' + c.name + '">' +
        '<span class="cycsel-tick" aria-hidden="true"></span><span class="cycsel-nm">' + L.name +
        '</span><span class="cycsel-yr">' + L.years + '</span></button>';
    }).join("") + '</div></div>';
}
export function rangeBar(id, ranges, active){
  if (!ranges || ranges.length < 2) return "";
  return '<div class="rangebar" role="tablist" data-range-for="' + id + '">' + ranges.map(function(r){
    return '<button type="button" class="range-seg' + (r.key === active ? " on" : "") + '" role="tab" ' +
      'aria-selected="' + (r.key === active ? "true" : "false") + '" data-range="' + r.key + '">' + r.label + '</button>';
  }).join("") + '</div>';
}
export function headSigma(id, text){
  var el = byId("bh-sigma-" + id); if (!el) return;
  el.textContent = text == null ? "" : "(Σ" + text + ")";
  el.hidden = text == null;
}
export function attachHistory(host, tipId, expect){
  if (!host) return null;
  var g = pendingGeom;
  if (expect && (!g || g.src !== expect))
    (window.__geomMiss = window.__geomMiss || []).push(expect + " wanted, " + (g ? g.src : "none") + " pending");
  host.__geom = g;
  if (tipId) wireHistHover(host, tipId);
  return g;
}

export function bootHistory(){
  window.__histRead = function(host, d, i){ if (host) histReadFill(host, d, i); };
  layer(0, { open:function(){ return headMenuFor !== null; }, close:function(){ headMenuShut(true); } });
  document.addEventListener("click", function(e){
    var pick = e.target.closest && e.target.closest(".bh-pick");
    var grp = e.target.closest && e.target.closest("[data-head-grp]");
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
    var btn = e.target.closest && e.target.closest("[data-head-more]");
    if (!btn){ if (headMenuFor !== null) headMenuShut(false); return; }
    var id = btn.getAttribute("data-head-more");
    headMenuFor = (headMenuFor === id || !HIST_NOTE[id]) ? null : id;
    headSubFor = null;
    paintHeadMenus();
    if (headMenuFor) headMenuFirst();
  });
}
