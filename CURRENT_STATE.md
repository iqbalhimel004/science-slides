# Current State

Last updated: 2026-09-08

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Canonical production architecture

**Science Slides Production System v2.1 is ACTIVE and audit-hardened.**

Read first:

`SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`

Durable architecture refinement:

`SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`

Core rule:

**Do not reset valid prior work. Continue from the latest valid checkpoint and rebuild only defective/fragile production layers.**

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**LESSON_1_BASELINE_APPROVED — LESSON_2_CONTINUES_WITHOUT_RESET — CONTROLLED_R3_PACK_V0_3_USER_ACCEPTED — CURRENT_COPY_SPEC_V2_1_LOCKED — FULL_LESSON_2_CONTROLLED_BUILD_V0_1_INTERNAL_QA_PASS — USER_FINAL_REVIEW_NEXT — CLASSROOM_READY_PENDING — LESSON_3_ON_HOLD**

## Lesson 1

**COMPLETED / USER-APPROVED BASELINE — PRESERVE**

## Lesson 2 validation pack

The user accepted the v0.3 controlled high-risk validation pack as the basis for continuing Lesson 2.

Accepted artifact family:

- `Lesson2_R3_Optics_Controlled_Validation_v0_3.pptx`
- `Lesson2_R3_Optics_Controlled_Validation_v0_3.pdf`

The accepted pack established the current student-facing slide-surface rule and corrected HRV-02/04 plus the controlled HRV-05/06/07 components.

## Current exact copy/spec

Canonical current spec:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/LESSON_2_COPY_SPEC_V2_1_2026-09-08.md`

It supersedes historical `SLIDE_COPY_V2.md` for new controlled production while retaining valid older content.

Current student-facing medium terminology:

- `ঘন মাধ্যম`
- `হালকা মাধ্যম`

No visible standalone `TIR` and no visible teacher-script framing such as `বোর্ডে বলার মূল কথা`.

## Full Lesson 2 controlled build v0.1

Artifact:

`Lesson2_Controlled_Full_v0_1.pptx`

PDF fallback:

`Lesson2_Controlled_Full_v0_1.pdf`

QA checkpoint:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/FULL_LESSON_2_CONTROLLED_BUILD_V0_1_QA_2026-09-08.md`

Slide count:

`19`

Internal results:

- PptxGenJS controlled build succeeded;
- `slides_test.py`: PASS — no overflow;
- rendered PNG count: 19;
- PDF export: PASS — 19 pages;
- semantic report: PASS;
- direct rendered montage/selected-slide review: PASS for user final-review candidate;
- accepted HRV-01..07 visual science retained;
- additional deterministic visuals added for construction-line explanation, pencil/straw apparent bending, increasing incidence and three-state classification;
- visible student-facing slides contain concise information/visuals; teacher-only directions are in notes;
- CORE lesson remains offline capable; FLEX simulation has a static fallback.

Artifact fingerprints:

- PPTX SHA-256: `eab012473f62a8e2a60db1337f49ef5d4c3ce31c2d22ff6d0520c47ae04f1ef5`
- PDF SHA-256: `7471e6a385366772e24ebdaf351a310b23d34d4655dc3200ceb22ba8cf320919`
- montage SHA-256: `497adf486230f8ac4c3c67b9ddfd9d7207d39e8140446203ced1435b753770ba`

Library copies:

- `/Science Slides/Lesson2_Controlled_Full_v0_1.pptx`
- `/Science Slides/Lesson2_Controlled_Full_v0_1.pdf`

## Current gate

**USER FINAL REVIEW OF FULL LESSON 2 V0.1 IS NEXT.**

Do not mark `CLASSROOM_READY` yet.

After final user acceptance:

1. record acceptance;
2. run/record exact Microsoft PowerPoint smoke test if available;
3. verify final PDF/offline fallback package;
4. mark Lesson 2 delivery state appropriately;
5. checkpoint before Lesson 3.

If the user finds targeted defects, revise only affected slides/components using selective revalidation; do not restart Lesson 2.

## Execution-time pending gates

- exact Microsoft PowerPoint opening/playback of the final PPTX;
- actual classroom device/projector behavior;
- live network availability for optional resources;
- real post-class timing calibration.

## Hard blocks

Do not call Lesson 2 classroom-ready yet.
Do not start Lesson 3 yet.
Do not return to Canva raster micro-patching as the primary science-production route.

## Universal stage rule

**Finish -> record -> then continue.**

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |
