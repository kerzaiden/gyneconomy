import { CHEV, titleCase } from "./format.ts";

export type Layer = { rank?: number; open(): boolean; close(): void; box?: () => Element | null };
export type UiStore = {
  eraOpen: Cycle | null;
  shownEra: Cycle | null;
  topbarBack: (() => void) | null;
  eraPageBack: (() => void) | null;
  heldHighlights: string;
  spreadDetail: string;
  uninvDetail: string;
};

export var ui: UiStore = {
  eraOpen: null,
  shownEra: null,
  topbarBack: null,
  eraPageBack: null,
  heldHighlights: "",
  spreadDetail: "",
  uninvDetail: ""
};
export function byId(id: string): HTMLElement | null {
  var n = document.getElementById(id);
  if (!n){
    var m = (window.__elMiss = window.__elMiss || {});
    m[id] = (m[id] || 0) + 1;
  }
  return n;
}
export function need(id: string): HTMLElement {
  var n = document.getElementById(id);
  if (!n) throw new Error("the page has no #" + id);
  return n;
}
export function byIdMaybe(id: string){ return document.getElementById(id); }
export function put(target: string | Element | null, html: string){
  var n = (typeof target === "string") ? byId(target) : target;
  if (n) n.innerHTML = html;
  return n;
}
export function elFrom(html: string){ var t = document.createElement("template"); t.innerHTML = html; return t.content.firstElementChild; }
var LAYERS: (Layer & { rank: number })[] = [];
export function layer(rank: number, o: Layer){ LAYERS.push(Object.assign(o, { rank: rank })); LAYERS.sort(function(a, b){ return a.rank - b.rank; }); }
export function onScreen(el: Element | null | undefined): boolean { return !!el && el.isConnected && el.getClientRects().length > 0; }
export function focusQuiet(el: HTMLElement | SVGElement | null | undefined){ if (!el || !onScreen(el)) return false; el.focus({ preventScroll:true }); return document.activeElement === el; }
function tabStops(box: Element): HTMLElement[] {
  return Array.prototype.filter.call(box.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input, textarea, select, [tabindex]"),
    function(n: HTMLElement){ return n.tabIndex >= 0 && onScreen(n) && getComputedStyle(n).visibility !== "hidden"; });
}
function keepTab(e: KeyboardEvent, box: Element){
  var stops = tabStops(box), at = document.activeElement;
  if (!stops.length){ e.preventDefault(); return; }
  var first = stops[0], last = stops[stops.length - 1];
  if (!box.contains(at) || (e.shiftKey ? at === first : at === last)){ e.preventDefault(); (e.shiftKey ? last : first).focus(); }
}
export function rovingKeys(box: Element, sel: string, onAttr: string, vertical?: boolean){
  function items(): HTMLElement[] { return Array.prototype.slice.call(box.querySelectorAll(sel)); }
  function sync(){ items().forEach(function(b: HTMLElement){ b.tabIndex = b.getAttribute(onAttr) === "true" ? 0 : -1; }); }
  var step: Record<string, number> = { ArrowLeft:-1, ArrowRight:1 };
  if (vertical){ step.ArrowUp = -1; step.ArrowDown = 1; }
  (box as HTMLElement).addEventListener("keydown", function(e: KeyboardEvent){
    var all = items(), i = all.indexOf(e.target as HTMLElement); if (i < 0) return;
    var j = e.key === "Home" ? 0 : e.key === "End" ? all.length - 1 : step[e.key] ? (i + step[e.key] + all.length) % all.length : -1;
    if (j < 0) return;
    e.preventDefault(); if (j === i) return;
    all[j].focus(); all[j].click();
  });
  box.addEventListener("click", sync);
  sync();
}
export function trendText(t: string, cls?: string){ return '<span class="trend-text' + (cls ? " " + cls : "") + '">' + t + '</span>'; }
function trendHead(mark: string, head: string, end: string){ return '<span class="trend-head"><span class="dx-mark" aria-hidden="true">' + mark + '</span>' + titleCase(head) + end + '</span>'; }
function trendCard(tag: string, cls: string, attrs: string, mark: string, head: string, end: string, body: string){
  return '<' + tag + ' class="trend-card cat-mood' + cls + '"' + attrs + '>' + trendHead(mark, head, end) + body + '</' + tag + '>';
}
export function trendDoor(open: string, title: string, mark: string, head: string, body: string){
  return trendCard("button", "", ' type="button" data-open="' + open + '" data-title="' + title + '"', mark, head, CHEV, body);
}
export function trendJump(attrs: string, mark: string, head: string, body: string){
  return trendCard("button", "", ' type="button"' + attrs, mark, head, CHEV, body);
}
export function trendBox(mark: string, head: string, body: string){ return trendCard("section", " is-box", "", mark, head, "", body); }
export function trendSoon(mark: string, head: string, body: string){
  return trendCard("div", " is-soon", "", mark, head, '<span class="soon-pill">Coming soon</span>', body);
}
export function moreRow(fullHtml: string | null | undefined, label?: string){
  if (!fullHtml) return "";
  var idx = detailSlot(fullHtml);
  return '<button type="button" class="more-row" data-detail-idx="' + idx + '">' +
    '<span>' + (label || "More details") + '</span>' + CHEV + '</button>';
}
export function viewMore(btn: HTMLElement, extra: HTMLElement[]){
  var label = btn.querySelector("span"), open = false;
  function apply(){
    extra.forEach(function(r){ r.hidden = !open; });
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (label) label.textContent = open ? "View less" : "View more";
  }
  apply();
  btn.addEventListener("click", function(){ open = !open; apply(); });
}
export function appendSvgMarkup(svg: Element, markup: string | null | undefined){
  if (!markup) return;
  var doc = new DOMParser().parseFromString(
    '<svg xmlns="http://www.w3.org/2000/svg">' + markup + '</svg>', "image/svg+xml");
  var root = doc.documentElement;
  var kids: Node[] = Array.prototype.slice.call(root.childNodes);
  for (var i = 0; i < kids.length; i++) svg.appendChild(document.importNode(kids[i], true));
}
export var allSources: Src[] = [
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
export function addSources(list: Src | Src[] | null | undefined){
  if (!list) return;
  var seen: Record<string, number> = Object.create(null), i;
  for (i = 0; i < allSources.length; i++) if (allSources[i] && allSources[i].u) seen[allSources[i].u] = 1;
  var add = Array.isArray(list) ? list : [list];
  for (i = 0; i < add.length; i++){
    var s = add[i];
    if (!s || !s.u || seen[s.u]) continue;
    allSources.push(s); seen[s.u] = 1;
  }
}
var SVG_NS = "http://www.w3.org/2000/svg";
export function svgEl(tag: string, attrs: Record<string, string | number>){
  var e = document.createElementNS(SVG_NS, tag);
  for (var k in attrs) e.setAttribute(k, attrs[k] as string);
  return e;
}
export var detailTexts: string[] = [];
export function detailSlot(html: unknown){
  var key = String(html == null ? "" : html);
  var idx = detailSlots[key];
  if (idx === undefined){
    idx = detailTexts.length;
    detailTexts.push(key);
    detailSlots[key] = idx;
  }
  return idx;
}
export function expandBtn(fullHtml: unknown){
  return '<button type="button" class="expand-btn" data-detail-idx="' + detailSlot(fullHtml) +
         '" aria-label="Expand details">i</button>';
}

var detailSlots: Record<string, number>;

export function bootDom(){
  document.addEventListener("keydown", function(e: KeyboardEvent){
    if (e.key !== "Escape" && e.key !== "Tab") return;
    var top = LAYERS.filter(function(l){ return l.open(); })[0]; if (!top) return;
    if (e.key === "Escape"){ e.preventDefault(); top.close(); return; }
    var box = top.box && top.box(); if (box) keepTab(e, box);
  });
  try{ var savedTheme = localStorage.getItem("gyneconomy-theme"); if (savedTheme === "light" || savedTheme === "dark") document.documentElement.setAttribute("data-theme", savedTheme); }catch(e){}
  detailSlots = Object.create(null);
}
