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

## Repository/plan audit — complete

The production-plan/repository consistency audit is complete. Production System v2.1 contains source-freshness, quantitative, safety, model/scale, accessibility, semantic-R3, golden-master regression and selective-revalidation controls.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — PRODUCTION_SYSTEM_V2_1_AUDIT_HARDENED — LESSON_2_CONTINUES_WITHOUT_RESET — HIGH_RISK_REFERENCE_LOCK_COMPLETE — HRV_01_TO_04_RETAINED_AS_VALIDATED_REFERENCES — CONTROLLED_HRV_05_06_07_COMPONENTS_V0_1_COMMITTED — SEMANTIC_TESTS_PASS — 3_SLIDE_R3_RENDER_QA_PASS — COMPLETE_7_PAGE_CONTROLLED_VALIDATION_PACK_NEXT — FULL_LESSON_2_BLOCKED — LESSON_3_ON_HOLD**

## Lesson 1

**COMPLETED / USER-APPROVED BASELINE — PRESERVE**

Do not rebuild Lesson 1 merely because the production system changed.

## Lesson 2 — no-reset migration

Retain/reuse all still-valid work:

- lesson/chapter analysis;
- source verification/reconciliation;
- storyboard;
- validated student-copy concepts;
- current terminology lock;
- `DIAGRAM_CONTRACTS.md`;
- high-risk reference lock;
- recognizable physical/context assets;
- accepted HRV-04 mirage context;
- direct-render evidence for HRV-01..06;
- QA/failure records as regression evidence.

Historical Lesson 2 v1/v2 artifacts that failed review are not classroom-ready.

Canonical migration override:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/PRODUCTION_SYSTEM_V2_1_MIGRATION_2026-09-08.md`

## Current Chapter 11 terminology

For revised Lesson 2 critical-angle/TIR student-facing content:

- `ঘন মাধ্যম`
- `হালকা মাধ্যম`

Older `বিরল মাধ্যম` wording is historical unless explicitly quoted as textbook/exam wording.

## Retained high-risk evidence

Latest inspected user export:

`Lesson 2 High-Risk Visual Pack — Reference Locked v2_20260908_182041_0000.pdf`

Retained disposition:

- HRV-01: materially acceptable reference;
- HRV-02: materially acceptable reference;
- HRV-03: materially acceptable reference, fish recognizable;
- HRV-04: materially acceptable reference, mirage communicated;
- HRV-05/06: old rendered versions were materially acceptable references but are now superseded for controlled production by source-controlled components;
- HRV-07: old raster version remains failed regression evidence and is superseded for controlled production by the new component candidate.

## Controlled optics components v0.1 — completed checkpoint

Committed controlled source:

`components/optics/ch11_l2_r3_optics_components_v0_1.js`

Committed semantic test:

`components/optics/test_ch11_l2_r3_optics_components_v0_1.js`

QA checkpoint:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/CONTROLLED_OPTICS_COMPONENTS_V0_1_QA_2026-09-08.md`

Results:

- HRV-05 critical-angle component: semantic PASS;
- HRV-06 full-internal-reflection component: semantic PASS;
- HRV-07 optical-fibre component: semantic PASS;
- PptxGenJS 3-slide validation build: generated successfully;
- `slides_test.py`: PASS, no overflow;
- direct rendered-pixel review: PASS for all three component slides after internal label-placement refinement.

Key semantic controls now enforced:

- incidence angles are defined from the normal;
- HRV-05 `r = 90°` ray lies along the interface;
- HRV-06 outside transmitted/refracted ray count is zero;
- HRV-07 every intended reflection vertex lies on a core-cladding boundary and the ray remains inside the core in the simplified path;
- current terminology uses `ঘন মাধ্যম` / `হালকা মাধ্যম`.

## Important limitation

The complete seven-page controlled High-Risk Visual Pack is **not yet internally complete**.

HRV-01..04 are retained rather than rebuilt, but they still need to be incorporated into the complete controlled validation pack and rechecked together with the new HRV-05..07 components before user acceptance.

## Immediate next authorized action

1. assemble the complete controlled seven-page high-risk validation pack using retained HRV-01..04 references/assets and new controlled HRV-05..07 components;
2. run structural/text/layout QA on the complete pack;
3. run applicable semantic science assertions;
4. render every page and inspect every R3 page individually;
5. run accessibility/projector and post-render student-inference review;
6. internally repair/rebuild until PASS using the circuit breaker and selective revalidation;
7. show one internally-passed complete pack for user acceptance;
8. create the current exact Lesson 2 copy lock/structured spec;
9. assemble the full Lesson 2 controlled PPTX from already-validated content/assets;
10. run PowerPoint/export/PDF/offline QA;
11. checkpoint before Lesson 3.

## Current hard blocks

Do not call Lesson 2 classroom-ready yet.
Do not start Lesson 3 yet.
Do not return to repeated Canva raster micro-patching as the primary science-production route.

## Execution-time gates not yet certifiable

- exact Microsoft PowerPoint opening/playback of the future final PPTX;
- actual classroom device/projector behavior;
- live internet/resource availability at teaching time;
- real post-class timing calibration.

Use explicit pending status until tested.

## Universal stage rule

**Finish -> record -> then continue.**

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |
