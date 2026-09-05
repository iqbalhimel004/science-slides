# Current State

Last updated: 2026-09-06

## Canonical repository

`iqbalhimel004/science-slides`

This is the only repository authorized for writes for this project.

## Durable rules

- NCTB controls syllabus/exam context, not automatic scientific truth.
- Material science is checked against current authoritative sources.
- **Finish → record → then continue.**
- External-tool prompts are one self-contained fenced code block for one-click copy (`D-033`).
- Planned Gemini reviews use a fresh downloadable single-file Markdown bundle, not GitHub browsing/import (`D-034`).
- Gemini Gate B is a **targeted implementation audit**, not a second Gate A (`D-035`).

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical path:
`chapters/class-8/science/chapter-11-light/`

Current status:
**GEMINI_GATE_B_TARGETED_BUNDLE_READY — EXTERNAL_RUN_PENDING**

## Production state

All four lesson plans, storyboards, resource maps and storyboard QA records exist. All textbook-body coverage rows are mapped to concrete slide IDs/dispositions. Chapter-wide storyboard/resource/duplication audit is complete.

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 46 | 8 | 54 | 6 |

Chapter planned CORE + FLEX total: **206 minutes**.

L4 is closest to the ceiling. Do not add more CORE content before Gate B reconciliation.

## Gate A

Completed externally and independently reconciled.

Canonical Gate-A result:
**ACCEPT WITH TARGETED CHANGES; NO MATERIAL REPLAN REQUIRED**

Important accepted corrections remain canonical:
- L1 phenomenon-first sequencing;
- normal-incidence exception;
- optical-density clarification;
- slab geometry limit;
- mirage gradient/progressive bending;
- minimal diverging-lens prerequisite before myopia correction;
- cornea major initial focusing + crystalline-lens accommodation;
- spectacles clearly labelled supplementary source-gap repair;
- film-camera chemistry context label;
- eye-camera shared-function/different-mechanism guardrail.

## Chapter audit

Canonical audit:
`chapters/class-8/science/chapter-11-light/CHAPTER_STORYBOARD_AUDIT.md`

Verdict:
**PASS_TO_GEMINI_GATE_B_WITH_TARGETED_NOTES**

No material lesson-boundary change, missing textbook-body topic or material duplication was found. All CORE lessons are offline-capable.

## Gate B — targeted method

Gate B must **not** repeat Gate A. It reviews only new implementation-layer risk:

- regression against accepted Gate-A corrections;
- slide-level science drift;
- misleading diagram/visual specifications;
- missing coverage/prerequisite/continuity;
- unnecessary duplication;
- timing/cognitive-load risk;
- resource/fallback risk;
- pre-freeze blockers.

Previously reconciled science is treated as established unless the current storyboard introduces a contradiction, omission, regression or new implementation risk.

Canonical instructions:
`chapters/class-8/science/chapter-11-light/reviews/GEMINI_GATE_B_TARGETED_PROMPT.md`

## Gate B transport bundle

User-download filename:
`GEMINI_GATE_B_TARGETED_BUNDLE.md`

Bundle manifest:
`chapters/class-8/science/chapter-11-light/reviews/GEMINI_GATE_B_BUNDLE_MANIFEST.md`

Snapshot:
- size: `18,656 bytes`
- SHA-256: `3d4e7b78700399cf3baaa46693f21f1ef5a796057c7023a5d919c27b34145fa8`

The bundle is a transport snapshot, not canonical truth. If any review-relevant canonical file changes before Gemini runs, regenerate the bundle.

## Remaining pre-freeze work

1. User uploads current Gate B bundle to Gemini and returns full review text.
2. Save raw review in GitHub.
3. Independently validate every material **new** finding.
4. Record `ACCEPT / PARTIAL / REJECT`.
5. Implement only validated changes.
6. Checkpoint status.
7. Run final relevant G1–G7 and content freeze.
8. Then run RT-01, select renderer routing, render, export/projector/offline QA.

Do not content-freeze or render final decks before Gate B reconciliation.
