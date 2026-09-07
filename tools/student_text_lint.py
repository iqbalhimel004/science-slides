#!/usr/bin/env python3
"""Simple PPTX student-facing text linter for Science Slides.

Usage:
    python tools/student_text_lint.py deck.pptx

The goal is not linguistic perfection. It is a cheap hard guardrail against
known production drift: unexplained English fragments/acronyms in Bangla-first
student-facing decks.
"""

from zipfile import ZipFile
from pathlib import Path
import re
import sys
import html

if len(sys.argv) != 2:
    print("Usage: student_text_lint.py <deck.pptx>")
    sys.exit(2)

ppt = Path(sys.argv[1])

ALLOW_PHRASES = [
    "PhET Bending Light",
    "Physics Classroom Refraction Interactive",
]

# Known unwanted classroom-visible fragments. Extend chapter-locally as needed.
FORBIDDEN = {
    "TIR",
    "boundary",
    "bending",
    "diagram",
    "reveal",
    "transmitted",
    "ray",
    "Exit",
    "Check",
    "Hinge",
    "Live",
    "demo",
    "interface",
    "Normal",
    "Refraction",
    "Reflection",
    "speed",
    "guide",
    "store",
    "data",
    "transmission",
    "endoscope",
    "fiber",
    "fibre",
}

with ZipFile(ppt) as z:
    slide_names = sorted(
        n for n in z.namelist()
        if n.startswith("ppt/slides/slide") and n.endswith(".xml")
    )
    slides = []
    for name in slide_names:
        xml = z.read(name).decode("utf-8", "ignore")
        parts = [html.unescape(x) for x in re.findall(r"<a:t>(.*?)</a:t>", xml)]
        slides.append((name, " ".join(parts)))

failures = []
for name, text in slides:
    reduced = text
    for phrase in ALLOW_PHRASES:
        reduced = reduced.replace(phrase, "")

    # Remove allowed scientific symbols and slide-number placeholders.
    reduced = re.sub(r"<number>", "", reduced)
    reduced = re.sub(r"\b[iIrC]\b", "", reduced)
    reduced = re.sub(r"\b\d+\b", "", reduced)

    latin_words = re.findall(r"[A-Za-z][A-Za-z]+", reduced)
    bad = sorted({w for w in latin_words if w in FORBIDDEN or len(w) > 1})
    if bad:
        failures.append((name, bad, text))

if failures:
    print("BANGLA_TERMINOLOGY_LINT: FAIL")
    for name, bad, text in failures:
        print(f"{name}: {', '.join(bad)}")
        print("  " + text[:350])
    sys.exit(1)

print("BANGLA_TERMINOLOGY_LINT: PASS")
