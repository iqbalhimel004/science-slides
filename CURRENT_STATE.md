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

**LESSON_1_BASELINE_APPROVED — LESSON_2_CONTINUES_WITHOUT_RESET — CONTROLLED_R3_PACK_V0_3_USER_ACCEPTED — CURRENT_COPY_SPEC_V2_1_LOCKED — FULL_LESSON_2_V0_2_SUPERSEDED_AFTER_USER_GEMINI_REVIEW — FULL_LESSON_2_V0_3_SUPERSEDED_AFTER_TARGETED_ANGLE_ARC_REVIEW — FULL_LESSON_2_CONTROLLED_BUILD_V0_4_INTERNAL_QA_PASS — USER_FINAL_REVIEW_NEXT — CLASSROOM_READY_PENDING — LESSON_3_ON_HOLD**

## Lesson 1

**COMPLETED / USER-APPROVED BASELINE — PRESERVE**

## Lesson 2 accepted high-risk foundation

The user accepted the controlled high-risk validation pack v0.3. Later full-deck targeted corrections refine individual student-facing surfaces without resetting the accepted foundation.

## Current copy/spec

Canonical current spec:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/LESSON_2_COPY_SPEC_V2_1_2026-09-08.md`

Current student-facing terminology:

- `ঘন মাধ্যম`
- `হালকা মাধ্যম`

Visible slides are student-facing; teacher narration/operational prompts belong in notes.

## Superseded full builds

- `Lesson2_Controlled_Full_v0_1` — superseded after cropped-label defect.
- `Lesson2_Controlled_Full_v0_2` — superseded after user/Gemini content review.
- `Lesson2_Controlled_Full_v0_3` — superseded only after the user identified unclear/missing angle arcs on the increasing-incidence and critical-angle slides.

These remain regression evidence.

## Current full Lesson 2 controlled build v0.4

Artifacts:

- `Lesson2_Controlled_Full_v0_4.pptx`
- `Lesson2_Controlled_Full_v0_4.pdf`

QA checkpoint:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/FULL_LESSON_2_CONTROLLED_BUILD_V0_4_QA_2026-09-08.md`

Slide/PDF page count:

`18`

### Targeted v0.4 correction

Only the user-identified angle-rendering defect was changed:

- on `সংকট কোণের পথে`, the purple `i` arc is now explicitly between the incident ray and normal, and the orange `r` arc is explicitly between the normal and refracted ray;
- on `সংকট কোণ (C)`, the purple `i = C` arc is explicitly between incident ray and normal, and the orange `r = 90°` is drawn as a clear right angle between the normal and the interface-parallel refracted ray;
- the earlier generic PowerPoint arc shapes were replaced with deterministic segmented arcs for reliable rendering;
- all other v0.3 content/science decisions were preserved.

### Internal v0.4 QA

- PptxGenJS controlled build: PASS;
- `slides_test.py`: PASS — no overflow;
- render: PASS — 18 PNG slides;
- PDF export: PASS — 18 pages;
- targeted direct rendered inspection of slides 11 and 12: PASS;
- no other full-deck content was intentionally changed.

Artifact fingerprints:

- PPTX SHA-256: `538141d96a61f6650f377f0241d5e4ddebeaf0601906fea83e23b3756b1ed5d4`
- PDF SHA-256: `a92d6d7c10f9d2f20b59bc8a8b456e05768a9e947f58a65f275081a7aa326293`
- montage SHA-256: `62eacfcfc91a4cf823022cc73f76c762d43a2c7d403218fdc6341b9b8a5563fb`

Library copies:

- `/Science Slides/Lesson2_Controlled_Full_v0_4.pptx`
- `/Science Slides/Lesson2_Controlled_Full_v0_4.pdf`

## Current gate

**USER FINAL REVIEW OF FULL LESSON 2 V0.4 IS NEXT.**

Do not mark `CLASSROOM_READY` yet.
Do not start Lesson 3 yet.

If the user finds another targeted defect, revise only the affected slide/component and selectively revalidate; do not restart Lesson 2.

## Execution-time pending gates

- exact Microsoft PowerPoint opening/playback in a real PowerPoint environment;
- actual classroom/projector behavior;
- live network availability for optional online resources;
- real post-class timing calibration.

## Universal stage rule

**Finish -> record -> then continue.**

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |
