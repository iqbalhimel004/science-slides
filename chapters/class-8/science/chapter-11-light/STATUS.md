# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science
- Chapter: 11 — আলো
- Last updated: 2026-09-08
- Current status: **CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — PRODUCTION_SYSTEM_V2_ADOPTED — LESSON_2_CONTINUES_WITHOUT_RESET — HIGH_RISK_REFERENCE_LOCK_COMPLETE — LATEST_DIRECT_PDF_QA_PAGES_1_TO_6_ACCEPTABLE — HRV_07_UNRESOLVED — CONTROLLED_COMPONENT_MIGRATION_NEXT — LESSON_2_FULL_BUILD_BLOCKED — LESSON_3_ON_HOLD**

## Canonical production architecture

`/SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`

Durable decision:

`/DECISIONS_ADDENDUM_2026-09-07.md` -> `D-043`

No-reset rule:

**The revised production architecture does not cancel valid completed work. Continue from the latest valid checkpoint and rebuild only defective/fragile production layers.**

## Durable workflow rules

- Production System v2: `/SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`;
- renderer route: `/RENDERER_ROUTING.md`;
- accuracy enforcement: `/ACCURACY_ENFORCEMENT.md`;
- reference-locked visual workflow: `/REFERENCE_LOCKED_VISUAL_PIPELINE.md`;
- student-facing language: `/CLASSROOM_LANGUAGE_POLICY.md`;
- chapter terminology lock: `TERMINOLOGY_LOCK.md`;
- high-risk optics invariants: `DIAGRAM_CONTRACTS.md`;
- visual assets: `/VISUAL_ASSET_ROUTING.md`;
- physical realism: `/PHYSICAL_VISUAL_REALISM_POLICY.md`;
- reproducibility: `/ARTIFACT_PERSISTENCE.md`;
- universal stage rule: **Finish -> record -> then continue.**

## Lesson 1

Disposition:

**COMPLETED / USER-APPROVED BASELINE — PRESERVE**

Do not rebuild Lesson 1 merely because Production System v2 was adopted.

## Lesson 2 historical state

Lesson 2 v1 and v2 historical outputs that failed user/visual review are not classroom-ready and remain regression evidence.

Retain their validated scientific planning/source work where still current.

## Lesson 2 validated work to preserve

- lesson analysis and storyboard;
- source verification/reconciliation;
- terminology lock;
- `DIAGRAM_CONTRACTS.md`;
- high-risk reference lock;
- approved/corrected Bangla-first wording;
- recognizable physical/context assets;
- failure/QA records as regression cases.

Canonical high-risk reference lock:

`lessons/lesson-02/production/HIGH_RISK_REFERENCE_LOCK_2026-09-08.md`

Current Canva design reference:

`DAHUl-r85fw`

Repair Round 3 committed transaction:

`2132969665247235516`

## Latest direct-render evidence

Latest directly inspected user export:

`Lesson 2 High-Risk Visual Pack — Reference Locked v2_20260908_182041_0000.pdf`

Direct-pixel result:

- HRV-01: materially acceptable;
- HRV-02: materially acceptable;
- HRV-03: materially acceptable;
- HRV-04: materially acceptable, mirage visibly represented;
- HRV-05: materially acceptable, critical angle measured from the normal and `হালকা মাধ্যম` used;
- HRV-06: materially acceptable, `i > C` measured from the normal, no transmitted ray, `হালকা মাধ্যম` used;
- HRV-07: **UNRESOLVED / FAIL** due remaining lower explanatory text overlap/crowding.

A cleaner HRV-07 v5 image was prepared in a draft after this QA, but it was not established as a committed final PASS before the project switched to Production System v2. Do not assume that draft is current saved truth.

## V2 migration classification

- HRV-01: `REUSE_AS_REFERENCE`;
- HRV-02: `REUSE_AS_REFERENCE`, retain physical coin assets;
- HRV-03: `REUSE_AS_REFERENCE`, retain fish asset and apparent-depth topology;
- HRV-04: `REUSE_AS_REFERENCE`, retain corrected mirage context/mechanism;
- HRV-05: `PORT_TO_CONTROLLED_COMPONENT`;
- HRV-06: `PORT_TO_CONTROLLED_COMPONENT`;
- HRV-07: `REBUILD/PORT_TO_CONTROLLED_COMPONENT` first.

HRV-05/06 are port targets even though their latest rendered state is acceptable because these R3 optics visuals should become deterministic reusable controlled components rather than remain raster-authority assets.

## Current hard block

Do not call Lesson 2 classroom-ready.
Do not start Lesson 3.
Do not restart Lesson 2 from zero.
Do not return to repeated Canva raster micro-patching as the primary science-production route.

## Next authorized stage

Under Production System v2:

1. read current Lesson 2 locks/specs/source files;
2. build source-controlled reusable optics components, prioritizing HRV-07, then port HRV-05/06;
3. retain HRV-01..04 validated references/assets unless fresh evidence shows regression;
4. assemble a controlled high-risk validation pack with PptxGenJS + deterministic SVG/vector science layers + editable/native labels;
5. run structural/text/layout automated QA;
6. run semantic science assertions;
7. render all pack pages and inspect R3 pages individually;
8. internally repair/rebuild using the v2 circuit breaker until PASS;
9. obtain one user acceptance of the internally-passed pack;
10. assemble full Lesson 2 from all already-validated content/assets;
11. run PowerPoint/export/PDF/offline QA;
12. checkpoint before Lesson 3.
