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
- RT-01 renderer route is now locked by evidence (`D-036`).

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical path:
`chapters/class-8/science/chapter-11-light/`

Current status:
**CONTENT_STORYBOARD_FROZEN — RT_01_COMPLETE — CONTROLLED_PPTX_ROUTE_LOCKED — LESSON_1_PRODUCTION_NEXT**

## Review state

Gate A: completed + reconciled.

Gate B: completed + reconciled.

Canonical Gate B result:
**ACCEPT WITH TARGETED CHANGES; NO MATERIAL REPLAN REQUIRED**

No further Gemini planning review is required unless production introduces a new material science/content regression.

## Frozen lesson timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

Chapter planned CORE + FLEX total: **202 minutes**.

## Final pre-freeze QA

Canonical file:
`chapters/class-8/science/chapter-11-light/FINAL_PRE_FREEZE_QA_2026-09-06.md`

Result:
`PASS — CONTENT/STORYBOARD FREEZE APPROVED`

## RT-01 completed

Canonical record:
`chapters/class-8/science/chapter-11-light/RT01_RENDERER_CALIBRATION_2026-09-06.md`

Final verdict:
`RT_01_COMPLETE — CONTROLLED_PPTX_PRIMARY — CANVA_CONTROLLED_IMPORT_FINISHING — DIRECT_PPTX_PDF_FALLBACK`

### Evidence summary

**Canva native AI**
- notation largely survived;
- projector-small body/table text;
- unrelated template artifacts appeared;
- critical-angle diagram was not deterministic/reliable enough.

**Beautiful.ai native**
- cleaner standard layouts than Canva native;
- editable PPTX/PDF export works;
- exported PPTX passed overflow test;
- however `<`/`>` were exported as escaped text in the TIR stress row;
- requested critical-angle ray diagram was omitted;
- verified science wording was rewritten, including material drift in the critical-angle and film-exposure treatment;
- exported PPTX references Beautiful.ai font packages (`Satoshi Black`, `DM Mono Regular`), creating portability dependence if fonts are not installed.

**Controlled PptxGenJS → Canva import**
- critical Bangla/notation text preservation passed at Canva content layer;
- deterministic diagrams remain under project control;
- Canva remains useful as a finishing/editing/hosting environment after controlled import.

## Locked renderer/tool route

### Primary production authoring/rendering

**Controlled PptxGenJS**

Use:
- deterministic shapes/SVG for optics/science-critical visuals;
- project-controlled wording;
- project-controlled typography/layout;
- 16:9 source deck.

### Optional finishing environment

**Canva via controlled PPTX import**

Use only when manual polish/hosting/editing materially improves the deck and does not change verified science. Run post-import QA.

### Classroom fallback/delivery

**Direct controlled PPTX + verified PDF fallback**

PDF remains mandatory for portability/offline safety.

### Beautiful.ai after RT-01

Not an unattended science full-deck renderer. May be used only for low-risk layout prototyping/inspiration where all rewritten content is revalidated.

### Native Canva AI after RT-01

Not the default authoring route. May be used only for low-risk visual inspiration/components; not for deterministic scientific diagrams or frozen wording without controlled replacement/QA.

## What is frozen

Unless later production reveals a material scientific/usability defect:
- four-lesson architecture;
- slide IDs and sequence;
- CORE/FLEX classification;
- storyboard scientific wording and misconception guardrails;
- source-gap/supplement labels;
- timing architecture;
- resource specifications.

## What is still pending

The chapter is **not classroom-ready yet**.

Pending:
- Lesson 1 deterministic visual construction and controlled PPTX build;
- Lesson 1 rendered scientific/typographic/projector QA;
- Lesson 1 verified PDF fallback;
- repeat production/QA for Lessons 2–4;
- offline/static fallback verification;
- final rendered chapter-wide audit;
- final classroom-ready package and status.

## Next authorized action

Proceed to **Lesson 1 production**:

1. read frozen `lesson-01/STORYBOARD.md`, `lesson-01/RESOURCES.md` and QA notes;
2. construct deterministic high-risk visuals first;
3. assemble the controlled 16:9 PPTX in PptxGenJS;
4. render and inspect actual slides;
5. run scientific diagram, Bangla/notation, projector-readability and export QA;
6. optionally import to Canva for finishing only if useful;
7. generate and verify PDF fallback;
8. checkpoint Lesson 1 before Lesson 2.
