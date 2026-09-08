# Current State

Last updated: 2026-09-08

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Canonical production architecture

**Science Slides Production System v2.1 is ACTIVE and audit-hardened.**

Read first:

- `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
- `SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`

Core rule:

**Do not reset valid prior work. Continue from the latest valid checkpoint and rebuild only defective/fragile production layers.**

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**LESSON_1_BASELINE_APPROVED — LESSON_2_CONTINUES_WITHOUT_RESET — CONTROLLED_R3_PACK_V0_3_USER_ACCEPTED — CURRENT_COPY_SPEC_V2_1_LOCKED — FULL_LESSON_2_V0_1_SUPERSEDED_AFTER_TARGETED_PIXEL_DEFECT — FULL_LESSON_2_CONTROLLED_BUILD_V0_2_INTERNAL_QA_PASS — USER_FINAL_REVIEW_NEXT — CLASSROOM_READY_PENDING — LESSON_3_ON_HOLD**

## Lesson 1

**COMPLETED / USER-APPROVED BASELINE — PRESERVE**

## Lesson 2 accepted high-risk foundation

The user accepted:

- `Lesson2_R3_Optics_Controlled_Validation_v0_3.pptx`
- `Lesson2_R3_Optics_Controlled_Validation_v0_3.pdf`

This accepted pack remains the visual/science basis for HRV-01..07.

## Current copy/spec

Canonical current spec:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/LESSON_2_COPY_SPEC_V2_1_2026-09-08.md`

Current student-facing terminology:

- `ঘন মাধ্যম`
- `হালকা মাধ্যম`

Visible slides are student-facing. Teacher narration/operational prompts belong in notes.

## Full Lesson 2 v0.1 disposition

`Lesson2_Controlled_Full_v0_1` is now **SUPERSEDED AS FINAL-REVIEW CANDIDATE**.

Reason:

Targeted individual inspection after the first full build found that the larger-incidence label on the `সংকট কোণের পথে` slide was cropped at the right edge even though overflow QA passed.

The v0.1 artifact remains historical regression evidence.

## Current full Lesson 2 controlled build v0.2

Artifacts:

- `Lesson2_Controlled_Full_v0_2.pptx`
- `Lesson2_Controlled_Full_v0_2.pdf`

QA checkpoint:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/FULL_LESSON_2_CONTROLLED_BUILD_V0_2_QA_2026-09-08.md`

Source:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/build_lesson2_controlled_v0_2.js`

Slide/PDF page count:

`19`

Internal v0.2 results:

- PptxGenJS controlled build: PASS;
- `slides_test.py`: PASS — no overflow;
- render: PASS — 19 PNG slides;
- PDF export: PASS — 19 pages;
- semantic report: PASS;
- full montage inspection: PASS for user final-review candidate;
- targeted individual inspection completed for newly generated/materially changed R3/R3-adjacent slides;
- cropped increasing-incidence label fixed (`বড় i → r বেশি`);
- title slide is Bangla-first;
- internal `L2-Sxx` labels removed from newly generated visible student surfaces;
- optional slide uses student-facing wording rather than visible `FLEX` workflow terminology;
- official PhET `Bending Light` simulation is linked as optional enrichment, with static/offline fallback;
- accepted HRV-02/04 corrections and controlled HRV-05/06/07 science are retained.

Artifact fingerprints:

- PPTX SHA-256: `d758683a7760ea51468b1b0c1485f2f085a8e2843848d60ed27e2007bdfa0d7a`
- PDF SHA-256: `fb11a4a79d469c2b49031576345beb023d53842dddd5f3fe01cc264973f2214c`
- montage SHA-256: `de1caa0b76cc6696e86da85f8444346cce201edd1786e436c6d3f9bb7f50ef7f`
- semantic report SHA-256: `b51cebccb0f3f9fe8e4e74fc9b79fec2ffd68cf63e9cc19e03a4370fbc62bbcb`
- build source SHA-256: `6c5b3429bcb584fc580fb358b391caa23de0efc67ecd99d3a39e9a3c8439c170`

Library copies:

- `/Science Slides/Lesson2_Controlled_Full_v0_2.pptx`
- `/Science Slides/Lesson2_Controlled_Full_v0_2.pdf`

## Current gate

**USER FINAL REVIEW OF FULL LESSON 2 V0.2 IS NEXT.**

Do not mark `CLASSROOM_READY` yet.

If the user accepts v0.2:

1. record final visual/science acceptance;
2. run/record exact Microsoft PowerPoint smoke test if a real PowerPoint environment is available;
3. verify final PDF/offline package;
4. set the delivery state accurately;
5. checkpoint before Lesson 3.

If the user finds a targeted defect, revise only affected slides/components and selectively revalidate. Do not restart Lesson 2.

## Execution-time pending gates

- exact Microsoft PowerPoint opening/playback;
- actual classroom/projector behavior;
- live network availability for optional online resources;
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
