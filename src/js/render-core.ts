import { CHEV, fmtSigned, qLabel, titleCase } from "./format.ts";
import { detailTexts, focusQuiet, layer, need, onScreen } from "./dom.ts";
import { GYN } from "./live.ts";
import { dataCompiledLabel, wheelMeta } from "./refresh-season.ts";
import { seasonGroup, seasonTitle } from "./model.ts";
import { ROSTER_BY, TIMING } from "./roster.ts";
import type { ModelReading, TrackSeg } from "./model.ts";

// ---- RENDER: range bars + card helpers ----
export function metricSheet(id: string){
  var sheet = document.createElement("div");
  sheet.className = "metric-sheet"; sheet.id = id; sheet.hidden = true;
  return sheet;
}
export var sheetRenderers: Record<string, (W?: number) => void> = {};
export function drawsPage(id: string, draw: (W?: number) => void){ sheetRenderers[id] = draw; if (ROSTER_BY[id].hk) sheetRenderers[ROSTER_BY[id].hk] = draw; }
function levelHeadings(body: HTMLElement){
  var box = body.closest(".detail-modal"); if (!box) return;
  box.removeAttribute("aria-labelledby");
  Array.prototype.forEach.call(body.querySelectorAll("h4"), function(h, i){
    h.setAttribute("aria-level", i ? "3" : "2");
    if (!i && box){ h.id = "detail-modal-title"; box.setAttribute("aria-labelledby", h.id); }
  });
}
function wireDetailModal(){
  var backdrop = need('detail-backdrop');
  var body = need('detail-modal-body');
  function openFrom(idx: string | null, btn: HTMLElement){
    body.innerHTML = detailTexts[idx as unknown as number];
    levelHeadings(body);
    var sheet = btn && btn.closest && btn.closest(".metric-sheet");
    var chip = sheet && sheet.querySelector(".timing-row");
    if (chip) body.appendChild(chip.cloneNode(true));
    if (!backdrop.classList.contains('show')) opener = btn;
    backdrop.classList.add('show');
    need('detail-modal-close').focus({ preventScroll:true });
  }
  var opener: HTMLElement | null = null;
  function close(){
    if (!backdrop.classList.contains('show')) return;
    backdrop.classList.remove('show'); body.innerHTML = "";
    var from = opener; opener = null;
    if (from && !onScreen(from) && from.closest){ var wrap = from.closest('.bh-more-wrap'); from = wrap && wrap.querySelector<HTMLElement>('.bh-more'); }
    focusQuiet(from);
  }
  detailClose = close;
  layer(1, { open:function(){ return backdrop.classList.contains('show'); }, close:close,
             box:function(){ return backdrop.querySelector('.detail-modal'); } });
  document.addEventListener('click', function(e){
    var btn = (e.target as Element).closest && (e.target as Element).closest<HTMLElement>('.expand-btn, .details-link, .more-row[data-detail-idx], .bh-opt');
    if (btn){ if (btn.closest('summary')) e.preventDefault();
      openFrom(btn.getAttribute('data-detail-idx'), btn); e.stopPropagation(); return; }
    if (e.target === backdrop) close();
  });
  need('detail-modal-close').addEventListener('click', close);
}
export var detailClose: (() => void) | null = null;
// ---- A season strip and the economy's chips, shared by the cycle list and the Diagnosis's years ----
type StripRun = { g: string; n: number; from: string; to: string; seasons: Record<string, boolean> };
var stripGroupName: Record<string, string> = { winter:"Winter", spring:"Spring", summer:"Summer", autumn:"Autumn" };
export function strip(cls: string, label: string, inner: string){
  return '<span class="strip' + cls + '" role="img" aria-label="' + label + '">' + inner + '</span>';
}
export function stripDots(n: number, title: string){
  return n ? '<span class="strip-dots" style="flex:' + n + ' 1 0" title="' + title + '">' + new Array(n + 1).join("<i></i>") + '</span>' : "";
}
export function stripTrack(n: number, title: string){
  return n ? '<span class="strip-track" style="flex:' + n + ' 1 0" title="' + title + '"></span>' : "";
}
export function seasonRuns(segs: TrackSeg[]){
  var runs: StripRun[] = [];
  segs.forEach(function(seg){
    var g = seasonGroup(seg.season), last = runs[runs.length - 1];
    if (!last || last.g !== g) runs.push(last = { g:g, n:0, from:seg.q, to:seg.q, seasons:{} });
    last.n++; last.to = seg.q; last.seasons[seg.season] = true;
  });
  return runs;
}
export function seasonPills(runs: StripRun[], whole: boolean){
  return runs.map(function(r){
    var names = Object.keys(r.seasons).map(function(k){ return seasonTitle(wheelMeta[k as Season]); }).join(" · ");
    return '<span class="strip-run ' + r.g + (r.n === 1 && !whole ? ' one' : '') + '" style="' +
      'flex:' + r.n + ' 1 0' + '" title="' + stripGroupName[r.g] + ' · ' + (r.n === 1 ? qLabel(r.from) : qLabel(r.from) + ' – ' + qLabel(r.to)) + ' · ' + names + '"></span>';
  }).join("");
}
export type MarketRun = { dir: string; ytd: boolean | undefined; q: number; from: number; to: number };
export function marketPills(runs: MarketRun[]){
  return runs.map(function(r){
    var when = r.from === r.to ? String(r.from) : r.from + "–" + r.to;
    return '<span class="strip-run mkt-' + r.dir + (r.ytd ? " ytd" : "") + (r.q <= 1 ? " one" : "") + '" style="' +
      "flex:" + Math.max(r.q, 1) + " 1 0" + '" title="' + when + " · S&P 500 " +
      (r.dir === "up" ? "up" : "down") + (r.ytd ? " so far" : "") + '"></span>';
  }).join("");
}
export function seasonRunsLabel(runs: StripRun[]){
  return runs.map(function(r){ return stripGroupName[r.g] + ' ' + r.n + (r.n === 1 ? ' quarter' : ' quarters'); }).join(', ');
}
export function econChips(growth: number | null, prices: number | null, market: number | null, digits: number, soFar: boolean, cls: string){
  function chip(label: string, v: number | null, unit: string){ return v == null ? "" : '<span class="chip"><i>' + label + '</i>' + fmtSigned(v, digits) + '%' + unit + '</span>'; }
  return '<span class="era-foot' + cls + '"><span class="era-econ">' + chip("Growth", growth, "") + chip("Prices", prices, "") +
    chip("S&amp;P 500", market, soFar ? '<span class="unit"> so far</span>' : "") + '</span></span>';
}
export function dxHead(mark: string, title: string, open?: string){
  var inner = (mark ? '<span class="dx-mark" aria-hidden="true">' + mark + '</span>' : "") + titleCase(title);
  return open ? '<button type="button" class="dx-sys-head"' + open + '>' + inner + CHEV + '</button>' : '<div class="dx-sys-head">' + inner + '</div>';
}
export function dxSys(cls: string, inner: string){ return '<section class="dx-sys' + cls + '">' + inner + '</section>'; }
export function catHeadCard(cls: string, key: string, head: { tag: string; cls: string; attrs: string; name: string; aside: string }, body: string){
  return '<section class="' + cls + ' ind-card cat-' + key + '"><' + head.tag + ' class="' + head.cls + 'cat-head"' + head.attrs + '><span class="ind-cat-name">' + head.name + '</span>' +
    head.aside + '</' + head.tag + '>' + body + '</section>';
}
function timingMark(kind: string){
  var cx = kind === "lagging" ? 4.4 : kind === "leading" ? 15.6 : 10;
  return '<svg viewBox="0 0 20 12" aria-hidden="true">' +
    '<path class="tm-line" d="M2.6,6 H17.4"/><path class="tm-now" d="M10,2 V10"/>' +
    (kind === "structural" ? '<path class="tm-span" d="M4.4,6 H15.6"/>'
                           : '<circle class="tm-dot" cx="' + cx + '" cy="6" r="2.7"/>') +
    '</svg>';
}
export function timingPill(kind: string){
  var t = TIMING[kind as keyof typeof TIMING]; if (!t) return "";
  return '<div class="timing-row">' +
    '<span class="timing ' + kind + '">' + timingMark(kind) + '<b>' + t.label + '</b></span></div>';
}
export function collapseEmptyBlocks(sheet: HTMLElement | null){
  if (!sheet || sheet.hidden || !sheet.offsetHeight) return;
  Array.prototype.forEach.call(sheet.children, function(kid){
    if (kid.classList.contains("page-foot")) return;
    if (!kid.offsetHeight) kid.style.display = "none";
    else if (kid.style.display === "none") kid.style.display = "";
  });
}
export function seatPageFoot(sheet: HTMLElement | null){
  if (!sheet) return;
  var chip = sheet.querySelector(".timing-row"); if (!chip) return;
  var foot = sheet.querySelector(".page-foot");
  if (!foot){ foot = document.createElement("div"); foot.className = "page-foot"; sheet.appendChild(foot); }
  if (chip.parentNode !== foot) foot.appendChild(chip);
  var more = sheet.querySelector(".more-row"), hl = sheet.querySelector(".highlights");
  var home = hl || foot;
  if (more && more.parentNode !== home) home.appendChild(more);
  if (sheet.lastElementChild !== foot) sheet.appendChild(foot);
}
export function tempWord(r: ModelReading){
  return (r.cpiHot ? "Hot" : r.cpiCold ? "Cold" : "Warm") + " \u00b7 " +
    (r.cpiDirection === "rising" ? "heating" : r.cpiDirection === "falling" ? "cooling" : "steady");
}
export function gdpFigure(r: ModelReading){ return fmtSigned(r.gdpLatest.v, 1) + "%"; }

export function bootRenderCore(){
  GYN.step("wireDetailModal", wireDetailModal, "wire");
  wireDetailModal();
  // ---- RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab) ----
  need("asof-text").textContent = "Data compiled " + dataCompiledLabel;
}
