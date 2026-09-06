# Current State

Last updated: 2026-09-06

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Durable rules

- NCTB controls syllabus/exam context, not automatic scientific truth.
- Material science is checked against current authoritative sources.
- **Finish → record → then continue.**
- External-tool prompts are one self-contained fenced code block for one-click copy (`D-033`).
- Planned Gemini reviews use fresh downloadable single-file bundles (`D-034`).
- Gate B is targeted implementation QA, not a second Gate A (`D-035`).
- RT-01 renderer route is locked by evidence (`D-036`).

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical path:
`chapters/class-8/science/chapter-11-light/`

Current status:
**CONTENT_STORYBOARD_FROZEN — RT_01_COMPLETE — LESSON_1_CONTROLLED_BUILD_PASS_WITH_NOTES — LESSON_2_PRODUCTION_NEXT**

## Review / freeze state

- Gemini Gate A: completed + reconciled
- Gemini Gate B: completed + reconciled
- Final pre-freeze QA: `PASS — CONTENT/STORYBOARD FREEZE APPROVED`
- No further Gemini planning review is required unless production introduces a material regression.

## Frozen lesson timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

Chapter planned CORE + FLEX total: **202 minutes**.

## RT-01 final route

Canonical record:
`chapters/class-8/science/chapter-11-light/RT01_RENDERER_CALIBRATION_2026-09-06.md`

Final verdict:
`RT_01_COMPLETE — CONTROLLED_PPTX_PRIMARY — CANVA_CONTROLLED_IMPORT_FINISHING — DIRECT_PPTX_PDF_FALLBACK`

Primary authoring/rendering: **controlled PptxGenJS**.

Optional finishing: **Canva after controlled PPTX import**, only if it improves the deck without changing verified science.

Classroom delivery/fallback: **controlled PPTX + verified PDF**.

Beautiful.ai and native Canva AI are not unattended science full-deck authoring routes.

## Lesson 1 production checkpoint

Canonical QA record:
`chapters/class-8/science/chapter-11-light/lessons/lesson-01/PRODUCTION_QA_2026-09-06.md`

Status:
`PASS_WITH_NONBLOCKING_NOTES`

Built:
- 16-slide controlled PPTX
- 16-page PDF fallback
- 14 CORE + 2 FLEX

Artifact fingerprints:
- PPTX SHA-256: `baf43046f54165e7bc705c897a02206a8966e3c9294cd3d86d2b1a50f62919c9`
- PDF SHA-256: `a85cc0821c73b9074a827968ecb8834aa0c7bd90dbd185ea248fe9f102ab3b6a`

Production QA completed:
- deterministic ray/optics diagrams built;
- rarer→denser and denser→rarer geometry checked;
- normal-incidence exception explicit;
- optical density ≠ mass density guardrail retained;
- parallel-sided slab geometry remains bounded;
- Bangla rendered using controlled Noto Sans Bengali stack;
- `slides_test.py`: PASS, no overflow;
- PPTX montage inspected;
- PDF montage inspected;
- PDF preflight: 16 pages, openable, non-scanned, unencrypted;
- CORE remains offline-capable.

Nonblocking notes:
- exact reusable numeric projector font baseline will be refined from first real classroom use / continued pilot evidence;
- optional Canva finishing is not required;
- PhET remains FLEX-only and does not block Lesson 1.

## What remains for the chapter

- Lesson 2 controlled PPTX/PDF production + QA;
- Lesson 3 controlled PPTX/PDF production + QA;
- Lesson 4 controlled PPTX/PDF production + QA;
- verify remaining offline/static fallbacks;
- final rendered chapter-wide continuity/coverage audit;
- finalize classroom-ready package and reusable master-theme baselines.

## Next authorized action

Proceed to **Lesson 2 controlled production** using the frozen storyboard/resource map and the same PptxGenJS-first route.
