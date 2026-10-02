#!/usr/bin/env python3
import io, os, re, sys, subprocess, datetime, json

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(HERE, "docs", "MAP.md")
SRC = os.path.join(HERE, "src")
JS = os.path.join(SRC, "js")
ENTRY = "main.js"

def read(p):
    return io.open(p, encoding="utf-8").read()

manifest = json.load(io.open(os.path.join(SRC, "manifest.json"), encoding="utf-8"))
pages = [n for n in manifest if not n.endswith(".js")]
booted = re.findall(r'from "\./([\w-]+\.js)"', read(os.path.join(JS, ENTRY)))
present = sorted(f for f in os.listdir(JS) if f.endswith(".js") and f != ENTRY)
modules = [f for f in booted if f in present] + [f for f in present if f not in booted] + [ENTRY]

text = {n: read(os.path.join(SRC, n)) for n in pages}
for m in modules:
    text["js/" + m] = read(os.path.join(JS, m))
lines = {n: t.split("\n") for n, t in text.items()}
SRC_BYTES = sum(len(t.encode("utf-8")) for t in text.values())
N = sum(len(l) for l in lines.values())

BANNER = re.compile(r"^\s*(?://|/\*)\s*-{3,}\s*(.*?)\s*(?:-{3,}\s*(?:\*/)?)?\s*$")
FN = re.compile(r"^(export )?function ([A-Za-z_$][A-Za-z0-9_$]*)\s*\(")
VAR = re.compile(r"^(export )?var ([A-Za-z_$][A-Za-z0-9_$]*)\s*=")
BOOT = re.compile(r"^export function (boot[A-Z]\w*)\s*\(")

def banners(name):
    out = []
    for i, l in enumerate(lines[name]):
        m = BANNER.match(l)
        if not m:
            continue
        t = re.sub(r"\s+", " ", m.group(1).strip().rstrip("-").strip())
        if len(t) >= 3:
            out.append((i + 1, t[:150]))
    return out

def section_of(ln, secs):
    cur = None
    for sl, title in secs:
        if sl <= ln:
            cur = title
        else:
            break
    return cur

def block_end(name, start):
    ls = lines[name]
    for j in range(start, len(ls)):
        if ls[j] == "}":
            return j + 1
    return None

decls, boots = {}, []
for m in modules:
    n = "js/" + m
    rows = []
    for i, l in enumerate(lines[n]):
        b = BOOT.match(l)
        if b:
            boots.append((n, i + 1, block_end(n, i + 1), b.group(1)))
            continue
        f = FN.match(l)
        if f:
            rows.append((i + 1, f.group(2), "function %s(" % f.group(2), bool(f.group(1))))
            continue
        v = VAR.match(l)
        if v:
            rows.append((i + 1, v.group(2), "var %s =" % v.group(2), bool(v.group(1))))
    decls[n] = rows

def imports_of(n):
    return sorted(set(re.findall(r'from "\./([\w-]+)\.js"', text[n])))

def registry(pat):
    rx = re.compile(pat)
    keys = {}
    for m in modules:
        n = "js/" + m
        for i, l in enumerate(lines[n]):
            for k in rx.findall(l):
                keys.setdefault(k, (n, i + 1))
    return sorted(keys.items())

renderers = registry(r'sheetRenderers\["([^"]+)"\]')
page_ranges = registry(r'pageRange\["([^"]+)"\]')

ids, seen = [], set()
for i, l in enumerate(lines["page-body.html"]):
    for k in re.findall(r'id="([A-Za-z0-9_-]+)"', l):
        if k not in seen:
            seen.add(k)
            ids.append((k, i + 1))

def sha():
    try:
        return subprocess.check_output(["git", "-C", HERE, "rev-parse", "--short", "HEAD"],
                                       stderr=subprocess.DEVNULL).decode().strip()
    except Exception:
        return "unknown"

def num(x):
    return "{:,}".format(x)

o = []
w = o.append
w("# Map of the source")
w("")
w("**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).")
w("")
w("The source is **%s lines** in %d files, about %d KB, roughly **%d thousand tokens**. No session can"
  % (num(N), len(text), SRC_BYTES // 1024, SRC_BYTES / 3600))
w("read it whole, so this file exists to get you to the right two hundred lines.")
w("")
w("> **Line numbers go stale; anchors do not.** Use the **anchor** column with grep —")
w("> `grep -rn 'function curveVerdict(' src/` — and treat `file:line` as rough orientation only.")
w("")
w("Generated from commit `%s` on %s." % (sha(), datetime.date.today().isoformat()))
w("")
w("## The page")
w("")
w("`src/manifest.json` joins these parts into `index.html`. The `.js` entry is bundled by esbuild")
w("(`tools/bundle.js`) into one script in its place.")
w("")
w("| Part | Lines | What |")
w("|---|---|---|")
WHAT = {
    "page-head.html": "doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist",
    "styles.css": "the whole stylesheet, every token and rule",
    "page-body.html": "the static DOM: tabs, cards, sheet hosts, slots the renderers fill",
    "page-tail.html": "the bundle's closing tag, the service-worker registration, </body></html>",
}
for n in manifest:
    if n.endswith(".js"):
        w("| `%s` | %s modules | the entry: imports every module and calls their boots in order |"
          % (n, len(modules)))
    else:
        w("| `%s` | %s | %s |" % (n, num(len(lines[n])), WHAT.get(n, "")))
w("")
w("Counts: **%d** modules, **%d** top-level functions, **%d** top-level vars, **%d** exported names, **%d** boots."
  % (len(modules), sum(1 for r in decls.values() for x in r if x[2].startswith("function")),
     sum(1 for r in decls.values() for x in r if x[2].startswith("var")),
     sum(1 for r in decls.values() for x in r if x[3]) + len(boots), len(boots)))
w("")

w("## Modules, in boot order")
w("")
w("| Module | Lines | Declarations | Imports from |")
w("|---|---|---|---|")
for m in modules:
    n = "js/" + m
    w("| `%s` | %s | %d | %s |" % (n, num(len(lines[n])), len(decls[n]),
                                  ", ".join("`%s`" % i for i in imports_of(n)) or "—"))
w("")

w("## The boots")
w("")
w("A module's top level holds only declarations and values that need nothing else. Whatever runs")
w("at load and reads another module sits in its `boot…()` function, and `js/main.js` calls them in")
w("this order. `tools/load-order.js` proves no shared value is read before something sets it.")
w("")
w("| Order | Boot | Lines |")
w("|---|---|---|")
for k, (n, ln, end, name) in enumerate(boots):
    w("| %d | `%s` | `%s:%s`–%s |" % (k + 1, name, n, num(ln), num(end) if end else "?"))
w("")

w("## Script, module by module")
w("")
w("Each module's banner comments are its spine. Each declaration is listed under the section it")
w("falls in. **export** marks a name other modules import.")
w("")
for m in modules:
    n = "js/" + m
    if not decls[n]:
        continue
    secs = banners(n)
    w("### `%s`" % n)
    w("")
    by_sec, order = {}, []
    for row in decls[n]:
        s = section_of(row[0], secs) or "(before the first banner)"
        if s not in by_sec:
            by_sec[s] = []
            order.append(s)
        by_sec[s].append(row)
    for s in order:
        w("#### %s" % s)
        w("")
        w("| Line | Name | Anchor |")
        w("|---|---|---|")
        for ln, name, anchor, exp in by_sec[s]:
            w("| %s | `%s`%s | `%s` |" % (num(ln), name, " · export" if exp else "", anchor))
        w("")

w("## Registries — the lookup tables that route behaviour")
w("")
w("Changing one of these changes what the app does without changing any renderer. Grep the key.")
w("")
for title, rows, note in [
    ("`sheetRenderers`", renderers, "which function draws an inner page, called with the measured width when the page opens"),
    ("`pageRange`", page_ranges, "the window a page's range control starts on"),
]:
    w("### %s" % title)
    w("")
    w(note)
    w("")
    if not rows:
        w("_none found — if that is wrong, the pattern in `tools/make-map.py` needs updating._")
        w("")
        continue
    w("| Key | Where |")
    w("|---|---|")
    for k, (n, ln) in rows:
        w("| `%s` | `%s:%s` |" % (k, n, num(ln)))
    w("")

w("## Stylesheet, section by section")
w("")
w("| Line | Section |")
w("|---|---|")
for ln, t in banners("styles.css"):
    w("| %s | %s |" % (num(ln), t))
w("")

w("## Markup landmarks")
w("")
w("Banner comments in `page-body.html`:")
w("")
w("| Line | Section |")
w("|---|---|")
for ln, t in banners("page-body.html"):
    w("| %s | %s |" % (num(ln), t))
w("")
w("Every `id` in the static DOM (%d), which is what the renderers fill:" % len(ids))
w("")
w("| Line | id |")
w("|---|---|")
for k, ln in sorted(ids, key=lambda x: x[1]):
    w("| %s | `%s` |" % (num(ln), k))
w("")

w("## Finding things fast")
w("")
w("| To find | grep for |")
w("|---|---|")
for a, b in [
    ("a figure's literal value", "`var <name> = ` — the data objects are top-level vars in `js/data.js` and `js/refresh-season.js`"),
    ("a reading's declaration", "`ROSTER` in `js/roster.js` — one row per reading"),
    ("what a history page draws", "`HIST_HEAD` for its head, then `sheetRenderers[\"<id>\"]` for its renderer"),
    ("where a band comes from", "the constant name, then read its `(i)` text — every band states its provenance"),
    ("a season decision", "`readSeason(`, `seasonTrackAll`, `cycleModel(`"),
    ("who may change a shared value", "`export function set` — a module's setters are the only writes from outside it"),
    ("why something looks the way it does", "`docs/DECISIONS.md` for Keren's decisions, `docs/ARCHITECTURE.md` for the reasons, `git log -S` for the history"),
    ("a live-data wiring", "`LIVE(\"` — one line per document, each directly under its literal"),
]:
    w("| %s | %s |" % (a, b))
w("")

out = "\n".join(o) + "\n"

if "--check" in sys.argv:
    cur = read(OUT) if os.path.exists(OUT) else ""
    strip = lambda s: re.sub(r"Generated from commit .*", "", s)
    if strip(cur) == strip(out):
        print("MAP.md is current")
        sys.exit(0)
    print("MAP.md is OUT OF DATE — run: npm run map")
    sys.exit(1)

io.open(OUT, "w", encoding="utf-8").write(out)
print("wrote %s — %d lines, from %s lines of src/" % (os.path.relpath(OUT, HERE), out.count("\n") + 1, num(N)))
