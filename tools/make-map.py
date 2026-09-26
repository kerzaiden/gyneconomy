#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate docs/MAP.md — a navigation index for index.html.

Why this exists: index.html is ~12,700 lines and ~297,000 tokens, so no session can
read it whole. Without a map you grep blind. With one you find the right 200 lines.

Run it after any STRUCTURAL edit (a new function, a moved section, a new registry
entry). A data-only refresh does not need it, though regenerating is harmless.

    python3 tools/make-map.py            # writes docs/MAP.md
    python3 tools/make-map.py --check    # exit 1 if the map is out of date

LINE NUMBERS GO STALE. Every insertion shifts them. So every entry also carries a
grep ANCHOR, which is what you actually search for; the line number is orientation
only. The map says this about itself, loudly, because a reader who trusts a stale
line number wastes more time than one who has no map at all.
"""
import io, os, re, sys, subprocess, datetime

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(HERE, "index.html")
OUT = os.path.join(HERE, "docs", "MAP.md")

lines = io.open(SRC, encoding="utf-8").read().split("\n")
N = len(lines)


def find(pat, lo=0, hi=None):
    """First 1-based line index matching pat, or None."""
    rx = re.compile(pat)
    for i in range(lo, hi if hi is not None else N):
        if rx.search(lines[i]):
            return i + 1
    return None


# ---- the five regions ----------------------------------------------------
style_open = find(r"^<style>")
style_close = find(r"^</style>")
script_open = find(r"^<script>")
script_close = find(r"^</script>")
assert style_open and style_close and script_open and script_close, "regions not found"

REGIONS = [
    ("Boot", 1, 4, "doctype, meta, and a tiny inline stylesheet that sets the page colour "
                   "before the real tokens exist — mirrors `--page` on purpose, so hex literals here are deliberate"),
    ("Styles", style_open, style_close, "the whole stylesheet, every token and rule"),
    ("Markup", style_close + 1, script_open - 1, "the static DOM: tabs, cards, sheet hosts, slots the renderers fill"),
    ("Script", script_open, script_close, "one IIFE containing everything: data, model, renderers, wiring"),
    ("Close", script_close + 1, N, "</body></html>"),
]

BANNER = re.compile(r"^\s*(?://|/\*)\s*-{3,}\s*(.*?)\s*(?:-{3,}\s*(?:\*/)?)?\s*$")


def banners(lo, hi):
    """(line, title) for each banner comment in [lo, hi]."""
    out = []
    for i in range(lo - 1, min(hi, N)):
        m = BANNER.match(lines[i])
        if not m:
            continue
        t = m.group(1).strip().rstrip("-").strip()
        t = re.sub(r"\s+", " ", t)
        if len(t) < 3:
            continue
        out.append((i + 1, t[:150]))
    return out


def section_of(ln, secs):
    """The banner section a line falls in."""
    cur = None
    for sl, title in secs:
        if sl <= ln:
            cur = title
        else:
            break
    return cur


# ---- script declarations -------------------------------------------------
FN = re.compile(r"^  function ([A-Za-z_$][A-Za-z0-9_$]*)\s*\(")
VAR = re.compile(r"^  var ([A-Za-z_$][A-Za-z0-9_$]*)\s*=")
IIFE = re.compile(r"^  \(function\s*\(")
VIIFE = re.compile(r"^  var ([A-Za-z_$][A-Za-z0-9_$]*)\s*=\s*\(function\s*\(")
CLOSE = re.compile(r"^  \}\)\(\);")

fns, vars_, iifes = [], [], []
for i in range(script_open, script_close - 1):
    ln, text = i + 1, lines[i]
    if IIFE.match(text) or VIIFE.match(text):
        end = None
        for j in range(i + 1, script_close - 1):
            if CLOSE.match(lines[j]):
                end = j + 1
                break
        m = VIIFE.match(text)
        iifes.append((ln, end, m.group(1) if m else None))
        continue
    m = FN.match(text)
    if m:
        fns.append((ln, m.group(1)))
        continue
    m = VAR.match(text)
    if m:
        vars_.append((ln, m.group(1)))

script_secs = banners(script_open, script_close)
style_secs = banners(style_open, style_close)
markup_secs = banners(style_close + 1, script_open - 1)


def registry(pat, lo=None, hi=None):
    """Sorted unique quoted keys matched by pat."""
    rx = re.compile(pat)
    keys = {}
    for i in range(lo or 0, hi or N):
        for k in rx.findall(lines[i]):
            keys.setdefault(k, i + 1)
    return sorted(keys.items())


renderers = registry(r'sheetRenderers\["([^"]+)"\]')
page_ranges = registry(r'pageRange\["([^"]+)"\]')

hh = find(r"var HIST_HEAD = \{")
hist_head = []
if hh:
    for i in range(hh, min(hh + 40, N)):
        if re.match(r"^\s*\};", lines[i]):
            break
        m = re.match(r'^\s*"([^"]+)":', lines[i])
        if m:
            hist_head.append((m.group(1), i + 1))

ids = []
seen = set()
for i in range(style_close, script_open - 1):
    for k in re.findall(r'id="([A-Za-z0-9_-]+)"', lines[i]):
        if k not in seen:
            seen.add(k)
            ids.append((k, i + 1))


# ---- write ---------------------------------------------------------------
def sha():
    try:
        return subprocess.check_output(
            ["git", "-C", HERE, "rev-parse", "--short", "HEAD"],
            stderr=subprocess.DEVNULL).decode().strip()
    except Exception:
        return "unknown"


o = []
w = o.append
w("# Map of `index.html`")
w("")
w("**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).")
w("")
w("`index.html` is **%s lines**, about %d KB, roughly **%d thousand tokens**. No session can read it"
  % ("{:,}".format(N), os.path.getsize(SRC) // 1024, os.path.getsize(SRC) / 3600))
w("whole, so this file exists to get you to the right two hundred lines.")
w("")
w("> **Line numbers go stale; anchors do not.** Every insertion shifts every number below it. Use the")
w("> **anchor** column with grep — `grep -n 'function moodFrom(' index.html` — and treat the line")
w("> number as rough orientation only. If a number is off by a hundred, the map is doing its job and")
w("> just needs regenerating; if an anchor misses, something was renamed and that IS worth knowing.")
w("")
w("Generated from commit `%s` on %s." % (sha(), datetime.date.today().isoformat()))
w("")
w("## The five regions")
w("")
w("| Region | Lines | What |")
w("|---|---|---|")
for name, lo, hi, what in REGIONS:
    w("| **%s** | %s–%s | %s |" % (name, "{:,}".format(lo), "{:,}".format(hi), what))
w("")
w("Counts: **%d** top-level functions, **%d** top-level vars, **%d** top-level IIFEs in the script."
  % (len(fns), len(vars_), len(iifes)))
w("")

w("## Script, section by section")
w("")
w("The script's own banner comments are its spine. Each declaration is listed under the section it")
w("falls in, so you can navigate by concept rather than by name.")
w("")
by_sec = {}
order = []
for ln, name in [(l, n) for l, n in fns] + [(l, n) for l, n in vars_]:
    s = section_of(ln, script_secs) or "(before the first banner)"
    if s not in by_sec:
        by_sec[s] = []
        order.append(s)
    by_sec[s].append((ln, name))
# order sections by their own line, not by first declaration
sec_line = {t: l for l, t in script_secs}
sec_line.setdefault("(before the first banner)", script_open)
for s in sorted(order, key=lambda t: sec_line.get(t, 0)):
    items = sorted(by_sec[s])
    w("### %s" % s)
    w("")
    w("_line %s_ · %d declaration%s" % ("{:,}".format(sec_line.get(s, 0)), len(items), "" if len(items) == 1 else "s"))
    w("")
    w("| Line | Name | Anchor |")
    w("|---|---|---|")
    for ln, name in items:
        kind = "function %s(" % name if any(n == name and l == ln for l, n in fns) else "var %s =" % name
        w("| %s | `%s` | `%s` |" % ("{:,}".format(ln), name, kind))
    w("")

n_side = sum(1 for _, _, nm in iifes if not nm)
n_val = len(iifes) - n_side
w("## The top-level IIFEs")
w("")
w("**%d render at load** (side effect only) and **%d compute a value**, %d in all. They run in source"
  % (n_side, n_val, len(iifes)))
w("order and there is **no boot or re-render function** \u2014 which is why a derived value cannot be")
w("repainted, and why the live-data cache has to apply itself above every consumer instead. See")
w("`ARCHITECTURE.md` \u2192 the cache section. **These counts are measured here, so this table is the")
w("authority for them** and the working document quotes it.")
w("")
w("| Lines | Assigns to | Section it sits in |")
w("|---|---|---|")
for ln, end, name in iifes:
    w("| %s–%s | %s | %s |" % ("{:,}".format(ln), "{:,}".format(end) if end else "?",
                                   ("`%s`" % name) if name else "_(side effect only)_",
                                   section_of(ln, script_secs) or "—"))
w("")

w("## Registries — the lookup tables that route behaviour")
w("")
w("Changing one of these changes what the app does without changing any renderer. Grep the key.")
w("")
for title, rows, note in [
    ("`sheetRenderers`", renderers, "which function draws an inner page, called with the measured width when the page opens"),
    ("`pageRange`", page_ranges, "the window a page's range control starts on"),
    ("`HIST_HEAD`", hist_head, "each history page's badge, title and ⋯ menu — the card head component reads this and no page passes a title"),
]:
    w("### %s" % title)
    w("")
    w("%s" % note)
    w("")
    if not rows:
        w("_none found — if that is wrong, the pattern in `tools/make-map.py` needs updating._")
        w("")
        continue
    w("| Key | Line |")
    w("|---|---|")
    for k, ln in rows:
        w("| `%s` | %s |" % (k, "{:,}".format(ln)))
    w("")

w("## Stylesheet, section by section")
w("")
w("| Line | Section |")
w("|---|---|")
for ln, t in style_secs:
    w("| %s | %s |" % ("{:,}".format(ln), t))
w("")

w("## Markup landmarks")
w("")
w("Banner comments:")
w("")
w("| Line | Section |")
w("|---|---|")
for ln, t in markup_secs:
    w("| %s | %s |" % ("{:,}".format(ln), t))
w("")
w("Every `id` in the static DOM (%d), which is what the renderers fill:" % len(ids))
w("")
w("| Line | id |")
w("|---|---|")
for k, ln in sorted(ids, key=lambda x: x[1]):
    w("| %s | `%s` |" % ("{:,}".format(ln), k))
w("")

w("## Finding things fast")
w("")
w("| To find | grep for |")
w("|---|---|")
for a, b in [
    ("a figure's literal value", "`var <name> = ` — the data objects are all top-level vars in the DATA section"),
    ("what a history page draws", "`HIST_HEAD` for its head, then `sheetRenderers[\"<id>\"]` for its renderer"),
    ("where a band comes from", "the constant name, then read its `(i)` text — every band states its provenance"),
    ("a season decision", "`readSeason(`, `seasonTrackAll`, `cycleModel(`"),
    ("why something looks the way it does", "`Version ` — comments naming a version and quoting Keren are decisions"),
    ("a live-data wiring", "`LIVE(\"` — one line per document, each directly under its literal"),
    ("a CSS rule's only home", "the class name; rules under `.detail-modal`, `.metric-sheet`, `.sign-detail` are scoped and must be restated for a new host"),
]:
    w("| %s | %s |" % (a, b))
w("")

text = "\n".join(o) + "\n"

if "--check" in sys.argv:
    cur = io.open(OUT, encoding="utf-8").read() if os.path.exists(OUT) else ""
    # ignore the generated-from line, which moves with every commit
    strip = lambda s: re.sub(r"Generated from commit .*", "", s)
    if strip(cur) == strip(text):
        print("MAP.md is current")
        sys.exit(0)
    print("MAP.md is OUT OF DATE — run: npm run map")
    sys.exit(1)

io.open(OUT, "w", encoding="utf-8").write(text)
print("wrote %s — %d lines, from a %s-line index.html" % (
    os.path.relpath(OUT, HERE), text.count("\n") + 1, "{:,}".format(N)))
