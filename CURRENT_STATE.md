# Current State

Last updated: 2026-09-08

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Canonical production architecture

**Science Slides Production System v2.1 is ACTIVE and audit-hardened.**

Read first:

`SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`

Durable decisions:

- `DECISIONS_ADDENDUM_2026-09-07.md` -> D-043
- `DECISIONS_ADDENDUM_2026-09-07.md` -> D-044

Core rule:

**Do not reset valid prior work. Continue from the latest valid checkpoint and rebuild only defective/fragile production layers.**

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — PRODUCTION_SYSTEM_V2_1_AUDIT_HARDENED — LESSON_2_CONTINUES_WITHOUT_RESET — CONTROLLED_HRV_05_06_07_COMPONENTS_COMMITTED — COMPLETE_7_PAGE_CONTROLLED_VALIDATION_PACK_INTERNAL_QA_PASS — USER_ACCEPTANCE_NEXT — FULL_LESSON_2_BLOCKED — LESSON_3_ON_HOLD**

## Lesson 1

**COMPLETED / USER-APPROVED BASELINE — PRESERVE**

Do not rebuild Lesson 1 merely because the production system changed.

## Lesson 2 retained work

Retain/reuse all still-valid work:

- lesson/chapter analysis;
- source verification/reconciliation;
- storyboard;
- validated student-copy concepts;
- current terminology lock;
- `DIAGRAM_CONTRACTS.md`;
- high-risk reference lock;
- recognizable physical/context assets;
- accepted mirage context/mechanism;
- historical QA/failure records as regression evidence.

Canonical migration override:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/PRODUCTION_SYSTEM_V2_1_MIGRATION_2026-09-08.md`

## Current terminology

Revised Lesson 2 student-facing critical-angle/TIR terminology:

- `ঘন মাধ্যম`
- `হালকা মাধ্যম`

Historical `বিরল মাধ্যম` wording remains historical unless explicitly quoted as textbook/exam wording.

## Controlled optics components

Committed source:

`components/optics/ch11_l2_r3_optics_components_v0_1.js`

Committed semantic tests:

`components/optics/test_ch11_l2_r3_optics_components_v0_1.js`

The controlled component checkpoint established semantic and rendered PASS for:

- HRV-05 critical angle;
- HRV-06 full internal reflection;
- HRV-07 optical fibre.

## Complete seven-page controlled validation pack — internal PASS

A complete seven-page controlled high-risk validation pack has now been assembled using retained HRV-01..04 science/reference work plus the controlled HRV-05..07 components.

Artifact:

`Lesson2_R3_Optics_Controlled_Validation_v0_2.pptx`

PDF fallback:

`Lesson2_R3_Optics_Controlled_Validation_v0_2.pdf`

QA checkpoint:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/CONTROLLED_R3_VALIDATION_PACK_QA_2026-09-08.md`

Internal results:

- slide count: 7;
- `slides_test.py`: PASS, no overflow;
- PptxGenJS helper overlap/out-of-bounds warnings: none in final build;
- render: PASS, seven PNG slides;
- PDF export: PASS, seven pages, unencrypted;
- semantic science report: PASS for HRV-01..07;
- direct pixel QA: PASS for user-review candidate;
- current Bangla-first terminology: PASS;
- HRV-05 angle: from normal, `r = 90°` along interface;
- HRV-06: `i > C`, no outside refracted ray;
- HRV-07: reflection vertices on core–cladding boundary and previous text-overlap issue removed;
- HRV-04: generated mirage context is explicitly disclosed as explanatory imagery and scientific mechanism remains separately controlled.

Artifact fingerprints:

- PPTX SHA-256: `32e1ff790c46fcf20b469c64a5867a4dd358b5cdfd7b9b949cda5afb3ae9dbb9`
- PDF SHA-256: `5346b57614da1d88461a4405a969c871cae2254bb949be4266fad6f83d827cbb`

## Current gate

**USER ACCEPTANCE OF THE INTERNALLY-PASSED 7-PAGE VALIDATION PACK IS NEXT.**

Do not assemble the full Lesson 2 controlled PPTX until the user accepts this pack or gives targeted revision instructions.

After user acceptance:

1. create the current exact Lesson 2 copy lock/structured spec from already-validated content plus v2.1 terminology;
2. assemble the full Lesson 2 controlled PPTX;
3. run full lesson automated/text/layout/semantic/pixel QA;
4. run PowerPoint/export/PDF/offline QA;
5. obtain final user acceptance;
6. checkpoint before Lesson 3.

## Hard blocks

Do not call Lesson 2 classroom-ready yet.
Do not start Lesson 3 yet.
Do not return to repeated Canva raster micro-patching as the primary science-production route.

## Execution-time gates still pending

- exact Microsoft PowerPoint opening/playback of future final Lesson 2 PPTX;
- actual classroom device/projector behavior;
- live internet/resource availability at teaching time;
- real post-class timing calibration.

Use explicit pending statuses until tested.

## Universal stage rule

**Finish -> record -> then continue.**

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |
