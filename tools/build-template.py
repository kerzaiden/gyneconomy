#!/usr/bin/env python3
"""The build pattern for index.html. Copy this, fill in the edits, run it.

The rule this enforces: every edit asserts its anchor BEFORE anything is written,
and the file is written once at the very end. A failed assertion therefore means
nothing was written and nothing was lost.

Never hand-edit a large region of index.html. Never re-type a region from tool
output, which can be truncated.

Gotchas that have cost real time:
  * index.html contains literal \\uXXXX escapes as TEXT in places, and real
    punctuation in others. Check with `cat -A` or repr() before matching.
  * In a Python heredoc, write "\\u2014" to match a real em dash (Python converts
    it). Writing "\\\\u2014" produces the literal six characters and will not match.
  * An anchor assert says nothing about well-formedness. A replacement that drops
    a closing brace kills every CSS rule after it — run `npm run css` afterwards.
"""
import sys

SRC = sys.argv[1] if len(sys.argv) > 1 else "index.html"
OUT = sys.argv[2] if len(sys.argv) > 2 else SRC

s = open(SRC, encoding="utf-8").read()


def rep(old, new, label, n=1):
    """Replace `old` with `new`, asserting it appears exactly `n` times."""
    global s
    c = s.count(old)
    assert c == n, "%s: expected %d, found %d" % (label, n, c)
    s = s.replace(old, new)


def check(lines, idx, fragment):
    """For line-index surgery: assert line `idx` contains `fragment`.
    Apply line deletions BOTTOM-UP so earlier indices stay valid."""
    assert fragment in lines[idx], "line %d is %r, expected %r" % (idx, lines[idx][:80], fragment)


# ---- edits go here -------------------------------------------------------
# rep("var OLD = 1;", "var OLD = 2;", "the thing")
# -------------------------------------------------------------------------

import re as _re
assert not _re.search(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}", s), \
    "an email address reached the markup — refusing to write"

open(OUT, "w", encoding="utf-8").write(s)
print("wrote %s (%d bytes)" % (OUT, len(s)))
