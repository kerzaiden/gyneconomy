export function lede(text: string){ return '<p class="hi-lede">' + text + '</p>'; }
export var MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
export function fmtAsOf(iso: string | null | undefined){
  var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
  if (!m) return "";
  return MONTHS_SHORT[Number(m[2]) - 1] + " " + Number(m[3]) + " " + m[1];
}
export function isoDay(s: string | null | undefined){
  var t = String(s || ""), iso = /^(\d{4})-(\d{2})-(\d{2})$/.exec(t), shown = /^([A-Z][a-z]{2}) (\d{1,2}),? (\d{4})$/.exec(t);
  var y = iso ? +iso[1] : shown ? +shown[3] : 0, m = iso ? +iso[2] : shown ? MONTHS_SHORT.indexOf(shown[1]) + 1 : 0, d = iso ? +iso[3] : shown ? +shown[2] : 0;
  var at = new Date(Date.UTC(y, m - 1, d));
  return y && m >= 1 && at.getUTCMonth() === m - 1 && at.getUTCDate() === d ? at.toISOString().slice(0, 10) : "";
}
export function qAtIndex(y0: number, i: number){ return (y0 + Math.floor(i / 4)) + " Q" + (i % 4 + 1); }
export function yearOf(d: Point){ if (d.y != null) return d.y; var k = d.q || d.m; if (!k) throw new Error("a point has no date"); return parseInt(k.slice(0, 4), 10); }
export function metered(m: Meter): number { if (m.value == null) throw new Error("a meter has no value"); return m.value; }
export function tagFor(x: { tag: Tag | null }): Tag { if (!x.tag) throw new Error("a reading drawn before its tag was set"); return x.tag; }
export function stateOf(t: Tag): Tone { if (t.state == null) throw new Error("the tag " + t.text + " has no state"); return t.state; }
export function bandEnds(o: Band | undefined, lo: number, hi: number): [number, number] {
  if (!o) return [lo, hi];
  if ("from" in o) return [o.from, o.to];
  return "gte" in o ? [o.gte, hi] : [lo, o.lte];
}
export function pctl(a: readonly number[], p: number){
  var s = a.slice().sort(function(x, y){ return x - y; }), h = (s.length - 1) * p, l = Math.floor(h);
  return s[l] + (s[Math.min(l + 1, s.length - 1)] - s[l]) * (h - l);
}
export function round1(v: number){ return Math.round(v * 10) / 10; }
export function mean(a: number[]){ return a.reduce(function(x: number, y: number){ return x + y; }, 0) / a.length; }
export function listed(xs: string[]){ return xs.length > 1 ? xs.slice(0, -1).join(", ") + " and " + xs[xs.length - 1] : xs[0] || ""; }
var NUMBER_WORDS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
export function numberWord(n: number, upTo?: number){ return n <= (upTo == null ? 12 : upTo) && NUMBER_WORDS[n] || String(n); }
export function capFirst(t: string){ return t.charAt(0).toUpperCase() + t.slice(1); }
export function atQuarter(d: { q: string }){ return d.q; }
export function atMonth(d: { m: string }){ return MONTHS_SHORT[parseInt(d.m.slice(5, 7), 10) - 1] + " " + d.m.slice(0, 4); }
export function ordinal(n: number){ var t = n % 100, o = ["th","st","nd","rd"][(t - 20) % 10] || ["th","st","nd","rd"][t] || "th"; return n + o; }
var MINOR = ["a", "an", "and", "as", "at", "but", "by", "for", "in", "nor", "of", "on", "or", "per", "the", "to", "via", "vs"];
function capWord(w: string, edge: boolean){
  return !edge && MINOR.indexOf(w) >= 0 ? w : w.split("-").map(capFirst).join("-");
}
export function titleCase(html?: string){
  var parts = (html || "").split(/(<[^>]*>)/), words = parts.filter(function(p, i){ return i % 2 === 0; }).join(" ").split(/\s+/).filter(Boolean), n = 0;
  return parts.map(function(p, i){
    return i % 2 ? p : p.replace(/[^\s]+/g, function(w){ n++; return capWord(w, n === 1 || n === words.length); });
  }).join("");
}
export function hiCard(name: string, state: Tone, text?: string | null, body?: string, phrase?: boolean){
  return '<div class="hi-card"><span class="hi-name ' + state + '">' + (phrase ? name : titleCase(name)) + '</span>' + (text ? '<p>' + text + '</p>' : "") + (body || "") + '</div>';
}
export function dropWhatIsShown(full: string | null | undefined, shown: string | null | undefined){
  if (!full || !shown) return full || "";
  var norm = function(x: string){ return x.replace(/\s+/g, " ").trim(); }, seen = norm(shown);
  var parts = full.split(/(?<=[.!?])\s+/), i = 0;
  while (i < parts.length && parts[i] && seen.indexOf(norm(parts[i])) !== -1) i++;
  return i ? parts.slice(i).join(" ").replace(/^\s+/, "") : full;
}
export function highlightsHtml(cards: string[], cyclesHtml?: string, moreHtml?: string){
  if (!cards.length && !cyclesHtml && !moreHtml) return "";
  return '<section class="highlights insights"><div class="hi-head">Insights</div>' + cards.join("") +
    (cyclesHtml || "") + (moreHtml || "") + '</section>';
}
export function maxIn<P extends Point & { v: number }>(series: P[], from: number, to: number){
  var vs = series.filter(function(d: P){ var y = yearOf(d); return y >= from && y <= to; });
  return vs.length ? vs.reduce(function(a: P, b: P){ return b.v > a.v ? b : a; }) : null;
}
export var CHEV = '<span class="peek-chev" aria-hidden="true"><svg viewBox="0 0 6 10"><path d="M1.1 1 L4.9 5 L1.1 9"/></svg></span>';
export function pointLabel(d: { d?: string; m?: string; q?: string; y?: number }){ return d.d ? fmtAsOf(d.d) : d.m ? atMonth({ m:d.m }) : d.q ? qLabel(d.q) : "FY" + d.y; }
export function qLabel(q: string){ var m = /^(\d{4}) (Q[1-4])$/.exec(q); return m ? m[2] + " " + m[1] : q; }
export function monthLabel(m: string){ return MONTHS_SHORT[parseInt(m.slice(5, 7), 10) - 1] + " " + m.slice(0, 4); }
export function ledeHtml(text: string){ return '<p class="lede">' + text + '</p>'; }
export function auxStat(f: { label: string; value: string | number; wordy?: boolean }){
  return '<div class="aux-stat' + (f.wordy ? " wordy" : "") + '"><span>' + f.label + '</span><b>' + f.value + '</b></div>';
}
export function facts(list: string[]){ return '<ul class="facts">' + list.map(function(f: string){ return "<li>" + f + "</li>"; }).join("") + '</ul>'; }
export function factsFrom(text: unknown){
  var parts = String(text).replace(/\s+/g, " ").trim().split(/(?<=[.!?])\s+(?=[A-Z(“"'"'"'])/);
  return facts(parts.filter(function(x){ return x.trim(); }));
}
export function qYears(d: readonly { q: string }[], sep: string){ return d.length ? d[0].q.slice(0, 4) + sep + d[d.length - 1].q.slice(0, 4) : ""; }
type Side = { state: State; text: string; says: string };
export function sideWord(o: { line: number; above: Side; below: Side; strict?: boolean }){
  return function(v: number): Side {
    var w = (o.strict ? v > o.line : v >= o.line) ? o.above : o.below;
    return { state:w.state, text:w.text, says:w.says };
  };
}
export type KeyRow = [string, string, string?, string?];
export function keySwatch(shape: string, tone: string, style?: string){
  return '<i class="key-sw ' + shape + (tone ? " " + tone : "") + '"' + (style ? ' style="' + style + '"' : "") + '></i>';
}
export function legendKey(rows: KeyRow[], o: { shape: string; cls: string; row?: string; inline?: boolean }){
  var box = o.inline ? "p" : "ul", tag = o.inline ? "span" : "li";
  return '<' + box + ' class="key-list ' + o.cls + '">' + rows.map(function(r){
    return '<' + tag + (o.row ? ' class="' + o.row + '"' : "") + '>' + (r[3] || keySwatch(o.shape, r[0])) + r[1] + (r[2] ? '<small>' + r[2] + '</small>' : "") + '</' + tag + '>';
  }).join(o.inline ? " " : "") + '</' + box + '>';
}
export function readingNote(n: { title?: string; sub?: string; lead?: string; paras?: string[]; src?: Src[] }){
  return (n.title != null ? '<h4>' + n.title + '</h4>' : '') + (n.sub != null ? '<div class="marker-sub">' + n.sub + '</div>' : '') + (n.lead != null ? '<p class="caption">' + n.lead + '</p>' : '') +
    (n.paras || []).map(function(p){ return '<p class="caption follow">' + p + '</p>'; }).join("") + (n.src ? srcBlock(n.src) : '');
}
export function srcBlock(list: Src[]){ return '<div class="src">' + srcHtml(list) + '</div>'; }
function srcHtml(list: Src[]){ return list.map(function(s: Src){ return '<a href="' + s.u + '" target="_blank" rel="noopener">' + s.t + '</a>'; }).join(" · "); }
export function fmtSigned(v: number, dp: number){ var a = Math.abs(v).toFixed(dp); return (+a === 0 ? "" : v > 0 ? "+" : "\u2212") + a; }
export function hubLine(html: string){ return '<span class="hub-line">' + html + '</span>'; }
export function capeFmt1(v: number){ return v.toFixed(1) + "\u00d7"; }
