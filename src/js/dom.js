import { CHEV } from "./format.js";

export function byId(id){
  var n = document.getElementById(id);
  if (!n){
    var m = (window.__elMiss = window.__elMiss || {});
    m[id] = (m[id] || 0) + 1;
  }
  return n;
}
export function byIdMaybe(id){ return document.getElementById(id); }
export function put(target, html){
  var n = (typeof target === "string") ? byId(target) : target;
  if (n) n.innerHTML = html;
  return n;
}
export function elFrom(html){ var t = document.createElement("template"); t.innerHTML = html; return t.content.firstElementChild; }
var LAYERS = [];
export function layer(rank, o){ o.rank = rank; LAYERS.push(o); LAYERS.sort(function(a, b){ return a.rank - b.rank; }); }
export function onScreen(el){ return !!el && el.isConnected && el.getClientRects().length > 0; }
export function focusQuiet(el){ if (!onScreen(el)) return false; el.focus({ preventScroll:true }); return document.activeElement === el; }
function tabStops(box){
  return Array.prototype.filter.call(box.querySelectorAll("a[href], button:not([disabled]), input, textarea, select, [tabindex]"),
    function(n){ return n.tabIndex >= 0 && onScreen(n) && getComputedStyle(n).visibility !== "hidden"; });
}
function keepTab(e, box){
  var stops = tabStops(box), at = document.activeElement;
  if (!stops.length){ e.preventDefault(); return; }
  var first = stops[0], last = stops[stops.length - 1];
  if (!box.contains(at) || (e.shiftKey ? at === first : at === last)){ e.preventDefault(); (e.shiftKey ? last : first).focus(); }
}
export function rovingKeys(box, sel, onAttr, vertical){
  function items(){ return Array.prototype.slice.call(box.querySelectorAll(sel)); }
  function sync(){ items().forEach(function(b){ b.tabIndex = b.getAttribute(onAttr) === "true" ? 0 : -1; }); }
  var step = { ArrowLeft:-1, ArrowRight:1 };
  if (vertical){ step.ArrowUp = -1; step.ArrowDown = 1; }
  box.addEventListener("keydown", function(e){
    var all = items(), i = all.indexOf(e.target); if (i < 0) return;
    var j = e.key === "Home" ? 0 : e.key === "End" ? all.length - 1 : step[e.key] ? (i + step[e.key] + all.length) % all.length : -1;
    if (j < 0) return;
    e.preventDefault(); if (j === i) return;
    all[j].focus(); all[j].click();
  });
  box.addEventListener("click", sync);
  sync();
}
export function moreRow(fullHtml, label){
  if (!fullHtml) return "";
  var idx = detailSlot(fullHtml);
  return '<button type="button" class="more-row" data-detail-idx="' + idx + '">' +
    '<span>' + (label || "More details") + '</span>' + CHEV + '</button>';
}
export function appendSvgMarkup(svg, markup){
  if (!markup) return;
  var doc = new DOMParser().parseFromString(
    '<svg xmlns="http://www.w3.org/2000/svg">' + markup + '</svg>', "image/svg+xml");
  var root = doc.documentElement;
  var kids = Array.prototype.slice.call(root.childNodes);
  for (var i = 0; i < kids.length; i++) svg.appendChild(document.importNode(kids[i], true));
}
export var allSources = [
  {t:"Treasury daily par yield curve rates", u:"https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve&field_tdr_date_value=202609"},
  {t:"FRED — 10Y minus 2Y spread", u:"https://fred.stlouisfed.org/series/T10Y2Y"},
  {t:"FRED — 10Y minus 3M spread", u:"https://fred.stlouisfed.org/series/T10Y3M"},
  {t:"FRED — 10Y minus 3M spread, monthly average (T10Y3MM)", u:"https://fred.stlouisfed.org/series/T10Y3MM"},
  {t:"BLS Employment Situation", u:"https://www.bls.gov/news.release/empsit.nr0.htm"},
  {t:"DOL weekly unemployment claims", u:"https://www.dol.gov/ui/data.pdf"},
  {t:"BLS Consumer Price Index", u:"https://www.bls.gov/news.release/PDF/cpi.PDF"},
  {t:"Federal Reserve FOMC statement", u:"https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm"},
  {t:"FRED — Consumer Price Index for All Urban Consumers (CPIAUCSL)", u:"https://fred.stlouisfed.org/series/CPIAUCSL"},
  {t:"FRED — Consumer Price Index for All Urban Consumers, not seasonally adjusted, before 1948 (CPIAUCNS)", u:"https://fred.stlouisfed.org/series/CPIAUCNS"},
  {t:"FRED — Federal Funds Target Range, upper limit (DFEDTARU)", u:"https://fred.stlouisfed.org/series/DFEDTARU"},
  {t:"FRED — Real Gross Domestic Product, chained 2017 dollars (GDPC1)", u:"https://fred.stlouisfed.org/series/GDPC1"}
];
export function addSources(list){
  if (!list) return;
  var seen = Object.create(null), i;
  for (i = 0; i < allSources.length; i++) if (allSources[i] && allSources[i].u) seen[allSources[i].u] = 1;
  var add = Array.isArray(list) ? list : [list];
  for (i = 0; i < add.length; i++){
    var s = add[i];
    if (!s || !s.u || seen[s.u]) continue;
    allSources.push(s); seen[s.u] = 1;
  }
}
var SVG_NS = "http://www.w3.org/2000/svg";
export function svgEl(tag, attrs){
  var e = document.createElementNS(SVG_NS, tag);
  for (var k in attrs) e.setAttribute(k, attrs[k]);
  return e;
}
export var detailTexts = [];
export function detailSlot(html){
  var key = String(html == null ? "" : html);
  var idx = detailSlots[key];
  if (idx === undefined){
    idx = detailTexts.length;
    detailTexts.push(key);
    detailSlots[key] = idx;
  }
  return idx;
}
export function expandBtn(fullHtml){
  return '<button type="button" class="expand-btn" data-detail-idx="' + detailSlot(fullHtml) +
         '" aria-label="Expand details">i</button>';
}

var detailSlots;

export function bootDom(){
  document.addEventListener("keydown", function(e){
    if (e.key !== "Escape" && e.key !== "Tab") return;
    var top = LAYERS.filter(function(l){ return l.open(); })[0]; if (!top) return;
    if (e.key === "Escape"){ e.preventDefault(); top.close(); return; }
    var box = top.box && top.box(); if (box) keepTab(e, box);
  });
  try{ var savedTheme = localStorage.getItem("gyneconomy-theme"); if (savedTheme === "light" || savedTheme === "dark") document.documentElement.setAttribute("data-theme", savedTheme); }catch(e){}
  detailSlots = Object.create(null);
}
