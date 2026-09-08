# Current State

Last updated: 2026-09-08

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Canonical production architecture

**Science Slides Production System v2.1 is ACTIVE and audit-hardened.**

Read first:

`SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`

Durable architecture refinement after user review:

`SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`

Core rule:

**Do not reset valid prior work. Continue from the latest valid checkpoint and rebuild only defective/fragile production layers.**

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**LESSON_1_BASELINE_APPROVED — LESSON_2_CONTINUES_WITHOUT_RESET — CONTROLLED_R3_PACK_V0_2_USER_REVIEW_REJECTED_WITH_TARGETED_FEEDBACK — SLIDE_SURFACE_RULE_REFINED — HRV_02_REBUILT — HRV_04_MECHANISM_REBUILT — CONTROLLED_R3_PACK_V0_3_INTERNAL_QA_PASS — USER_REVIEW_REQUIRED — FULL_LESSON_2_BLOCKED — LESSON_3_ON_HOLD**

## Lesson 1

**COMPLETED / USER-APPROVED BASELINE — PRESERVE**

## Lesson 2 retained work

Retain/reuse all still-valid work:

- lesson/chapter analysis;
- source verification/reconciliation;
- storyboard;
- validated student-copy concepts;
- current terminology lock;
- `DIAGRAM_CONTRACTS.md`;
- high-risk reference lock;
- accepted physical/context assets;
- controlled HRV-05/06/07 components;
- historical QA/failure records as regression evidence.

## User review of controlled pack v0.2

The user did **not** accept v0.2 as final.

Material feedback:

- HRV-02 empty-vessel visual did not clearly show what it meant;
- HRV-04 mirage scientific explanation diagram was not sufficiently correct/clear;
- visible teacher-facing panel `বোর্ডে বলার মূল কথা` should not appear on classroom slides;
- the teacher will explain the slide directly, so visible slides should contain the necessary student-facing diagrams, concise information, animation/video/simulation/media where pedagogically needed, while teacher narration belongs in notes.

This feedback supersedes the prior `USER_ACCEPTANCE_NEXT` wording for v0.2.

## New durable slide-surface rule

Canonical addendum:

`SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`

Visible slide surface = student-facing learning surface.

Teacher prompts, narration cues, board-work suggestions and internal instructions belong in speaker notes/teacher notes.

Slides must contain enough necessary visual/information/media content to support live explanation and must not depend on teacher narration to rescue an unclear visual.

## Controlled validation pack v0.3 — rebuilt

Artifact:

`Lesson2_R3_Optics_Controlled_Validation_v0_3.pptx`

PDF fallback:

`Lesson2_R3_Optics_Controlled_Validation_v0_3.pdf`

QA checkpoint:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/CONTROLLED_R3_VALIDATION_PACK_V0_3_QA_2026-09-08.md`

### HRV-02 correction

- explicit labels distinguish `খালি পাত্রে মুদ্রা দেখা যায় না` vs `পানি দিলে মুদ্রা দেখা যায়`;
- left panel shows a dashed/red straight sight line from coin to eye blocked by the vessel rim;
- right panel shows the water surface and refracted light path reaching the eye;
- coin remains in the same physical position.

### HRV-04 correction

- separate context and scientific mechanism panels retained;
- mechanism shows cooler/optically denser air above and warmer/optically lighter air near the hot road;
- light follows a smooth curved path through the vertical refractive-index gradient;
- final ray reaches the observer after bending upward;
- dashed backward extension indicates the apparent/virtual direction below the road line;
- road is explicitly not real water;
- no single mirror-like boundary is used.

### Global visible-slide correction

- removed visible `বোর্ডে বলার মূল কথা` framing;
- student-facing concise information remains on the slide;
- teacher-only guidance is moved to speaker notes;
- future full Lesson 2 must use necessary diagrams, photos, animation/video/simulation and concise information according to pedagogical need rather than teacher-script boxes.

## v0.3 internal QA

- slide count: 7;
- `slides_test.py`: PASS — no overflow;
- render: PASS — 7 PNG slides;
- PDF export: PASS — 7 pages;
- semantic report: PASS for HRV-01..07;
- direct rendered review completed after targeted HRV-04 label-position correction;
- terminology remains Bangla-first and current.

Fingerprints:

- PPTX SHA-256: `757f48036696b6d5c28aad25a69c77294686995f867affb864d9e18d1d1ccbbb`
- PDF SHA-256: `72fda1d8838f2d09076dc07ce3a6ddbb34eb0254232d0c08815fb8c506325d5c`

## Current gate

**USER REVIEW OF V0.3 IS REQUIRED.**

Do not assemble the full Lesson 2 controlled PPTX until the user accepts v0.3 or gives further targeted revision instructions.

After validation-pack acceptance:

1. create current exact Lesson 2 copy lock / structured specification;
2. map each lesson segment to required visual/media route;
3. assemble full Lesson 2 controlled PPTX;
4. include teacher-only prompts in notes rather than visible teacher-script boxes;
5. run full automated/text/layout/semantic/pixel/accessibility QA;
6. run PowerPoint/export/PDF/offline QA;
7. obtain final user acceptance;
8. checkpoint before Lesson 3.

## Hard blocks

Do not call Lesson 2 classroom-ready yet.
Do not start Lesson 3 yet.
Do not return to repeated Canva raster micro-patching as the primary science-production route.

## Universal stage rule

**Finish -> record -> then continue.**

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |
