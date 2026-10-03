export function lede(text){ return '<p class="hi-lede">' + text + '</p>'; }
export var MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
export function fmtAsOf(iso){
  var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
  if (!m) return "";
  return MONTHS_SHORT[Number(m[2]) - 1] + " " + Number(m[3]) + " " + m[1];
}
export function qAtIndex(y0, i){ return (y0 + Math.floor(i / 4)) + " Q" + (i % 4 + 1); }
export function yearOf(d){ return d.y != null ? d.y : parseInt((d.q || d.m).slice(0, 4), 10); }
export function mean(a){ return a.reduce(function(x, y){ return x + y; }, 0) / a.length; }
export function atQuarter(d){ return d.q; }
export function atMonth(d){ return MONTHS_SHORT[parseInt(d.m.slice(5, 7), 10) - 1] + " " + d.m.slice(0, 4); }
export function ordinal(n){ var t = n % 100, o = ["th","st","nd","rd"][(t - 20) % 10] || ["th","st","nd","rd"][t] || "th"; return n + o; }
export function hiCard(name, state, text, body){
  return '<div class="hi-card"><span class="hi-name ' + state + '">' + name + '</span>' + (text ? '<p>' + text + '</p>' : "") + (body || "") + '</div>';
}
export function dropWhatIsShown(full, shown){
  if (!full || !shown) return full || "";
  var norm = function(x){ return x.replace(/\s+/g, " ").trim(); }, seen = norm(shown);
  var parts = full.split(/(?<=[.!?])\s+/), i = 0;
  while (i < parts.length && parts[i] && seen.indexOf(norm(parts[i])) !== -1) i++;
  return i ? parts.slice(i).join(" ").replace(/^\s+/, "") : full;
}
export function highlightsHtml(cards, cyclesHtml, moreHtml, head){
  if (!cards.length && !cyclesHtml && !moreHtml) return "";
  return '<section class="highlights insights"><div class="hi-head">' + (head || "Insights") + '</div>' + cards.join("") +
    (cyclesHtml || "") + (moreHtml || "") + '</section>';
}
export function maxIn(series, from, to){
  var vs = series.filter(function(d){ var y = yearOf(d); return y >= from && y <= to; });
  return vs.length ? vs.reduce(function(a, b){ return b.v > a.v ? b : a; }) : null;
}
export var CHEV = '<span class="peek-chev" aria-hidden="true"><svg viewBox="0 0 6 10"><path d="M1.1 1 L4.9 5 L1.1 9"/></svg></span>';
export function prettyKey(k){
  if (/^\d{4}-\d{2}$/.test(k)) return MONTHS_SHORT[+k.slice(5) - 1] + " " + k.slice(0, 4);
  if (/^\d{4} Q[1-4]$/.test(k)) return k.slice(5) + " " + k.slice(0, 4);
  return k;
}
export function qLabel(q){ var m = /^(\d{4}) (Q[1-4])$/.exec(q); return m ? m[2] + " " + m[1] : q; }
export function monthLabel(m){ return MONTHS_SHORT[parseInt(m.slice(5, 7), 10) - 1] + " " + m.slice(0, 4); }
export function clampPct(v, lo, hi){ return Math.max(0, Math.min(100, ((v - lo) / (hi - lo)) * 100)); }
export function ledeHtml(text){ return '<p class="lede">' + text + '</p>'; }
export function facts(list){ return '<ul class="facts">' + list.map(function(f){ return "<li>" + f + "</li>"; }).join("") + '</ul>'; }
export function factsFrom(text){
  var parts = String(text).replace(/\s+/g, " ").trim().split(/(?<=[.!?])\s+(?=[A-Z(“"'"'"'])/);
  return facts(parts.filter(function(x){ return x.trim(); }));
}
export function srcBlock(list){ return '<div class="src">' + srcHtml(list) + '</div>'; }
function srcHtml(list){ return list.map(function(s){ return '<a href="' + s.u + '" target="_blank" rel="noopener">' + s.t + '</a>'; }).join(" · "); }
export function fmtSigned(v, dp){ var a = Math.abs(v).toFixed(dp); return (+a === 0 ? "" : v > 0 ? "+" : "\u2212") + a; }
export function popHead(title, sub){ return '<h4>' + title + '</h4><span class="marker-sub">' + sub + '</span>'; }
export function hubLine(html){ return '<span class="hub-line">' + html + '</span>'; }
export function qPretty(q){ var p = String(q).split(" "); return p.length > 1 ? p[1] + " " + p[0] : String(q); }
export function seasonName(s){ return s.charAt(0).toUpperCase() + s.slice(1); }
export function capeFmt1(v){ return v.toFixed(1) + "\u00d7"; }
export function withUnit(fig, unit){ return fig + (unit && !/[%\u00d7]/.test(fig) ? " " + unit : ""); }
