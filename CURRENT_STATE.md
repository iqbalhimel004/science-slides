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

A full production-plan and repository consistency audit was completed on 2026-09-08 before further Lesson 2 build work.

Material gaps found and corrected included:

- stale startup/recovery order that could miss Production System v2;
- stale first-pilot wording implying Lesson 1 must be rebuilt before Lesson 2;
- missing explicit source-freshness, quantitative, safety, model/scale and accessibility controls;
- insufficiently semantic R3 tests (e.g. angle arc existence without endpoint/reference validation);
- no golden-master regression rule for reusable components;
- no selective revalidation matrix to control production time;
- stale QA-template gate numbering;
- Chapter 11 `বিরল মাধ্যম` terminology conflicting with the user-approved current `হালকা মাধ্যম` wording;
- optical-fibre contract not explicitly requiring reflection points on the core-cladding boundary;
- stale Lesson 2 direct-pixel QA file that did not reflect the latest `182041` export.

Canonical v2.1 now includes all these controls.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — PRODUCTION_SYSTEM_V2_1_AUDIT_HARDENED — REPOSITORY_POLICY_ALIGNMENT_COMPLETE — LESSON_2_CONTINUES_WITHOUT_RESET — HIGH_RISK_REFERENCE_LOCK_COMPLETE — LATEST_DIRECT_PDF_QA_PAGES_1_TO_6_ACCEPTABLE — HRV_07_UNRESOLVED — CONTROLLED_COMPONENT_MIGRATION_NEXT — FULL_LESSON_2_BLOCKED — LESSON_3_ON_HOLD**

## Lesson 1

**COMPLETED / USER-APPROVED BASELINE — PRESERVE**

Do not rebuild Lesson 1 merely because the production system changed. Historical reproducibility limitations remain documented, but they are not a reason to discard or restart the approved lesson.

## Lesson 2 — no-reset migration

Retain/reuse all still-valid work:

- lesson/chapter analysis;
- source verification/reconciliation;
- storyboard;
- validated student copy concepts;
- current terminology lock;
- `DIAGRAM_CONTRACTS.md`;
- high-risk reference lock;
- recognizable physical/context assets;
- accepted HRV-04 mirage context;
- accepted corrected HRV-05/06 rendered science as reference;
- QA/failure records as regression evidence.

Historical Lesson 2 v1/v2 artifacts that failed review are not classroom-ready.

Canonical v2.1 Lesson 2 migration override:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/PRODUCTION_SYSTEM_V2_1_MIGRATION_2026-09-08.md`

## Current Chapter 11 terminology

For revised Lesson 2 student-facing critical-angle/TIR content:

- `ঘন মাধ্যম`
- `হালকা মাধ্যম`

Older `বিরল মাধ্যম` wording in historical v2 files is superseded for new production unless explicitly quoted as textbook/exam wording.

Scientific meaning remains lower optical density/refractive index for the `হালকা মাধ্যম` side.

## Latest direct-render evidence

Latest inspected export:

`Lesson 2 High-Risk Visual Pack — Reference Locked v2_20260908_182041_0000.pdf`

Direct-pixel result:

- HRV-01: materially acceptable;
- HRV-02: materially acceptable;
- HRV-03: materially acceptable, fish recognizable;
- HRV-04: materially acceptable, mirage represented and clipped label removed;
- HRV-05: materially acceptable rendered reference; angle from normal, `r = 90°`, `হালকা মাধ্যম`;
- HRV-06: materially acceptable rendered reference; angle from normal, no outside refracted ray, `হালকা মাধ্যম`;
- HRV-07: **UNRESOLVED / FAIL** due lower explanatory text overlap/crowding.

Canonical reconciled pixel-QA record:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/HIGH_RISK_VISUAL_PACK_PIXEL_QA_2026-09-08.md`

A later HRV-07 v5 Canva draft was not established as a committed/final direct-pixel PASS and is not current authority.

## V2.1 migration classification

- HRV-01: `REUSE_AS_REFERENCE`;
- HRV-02: `REUSE_AS_REFERENCE`, retain coin assets;
- HRV-03: `REUSE_AS_REFERENCE`, retain fish asset/topology;
- HRV-04: `REUSE_AS_REFERENCE`, retain mirage context/mechanism;
- HRV-05: `PORT_TO_CONTROLLED_COMPONENT`;
- HRV-06: `PORT_TO_CONTROLLED_COMPONENT`;
- HRV-07: `REBUILD/PORT_TO_CONTROLLED_COMPONENT` first.

## Immediate next authorized action

**No slide/component production begins until this audit checkpoint is recorded; that condition is now satisfied.**

Next production sequence:

1. recover current Lesson 2 locks/specs/migration override;
2. build a source-controlled HRV-07 optical-fibre component first;
3. port HRV-05 critical-angle and HRV-06 TIR into reusable controlled optics components;
4. preserve HRV-01..04 validated references/assets unless regression evidence appears;
5. assemble a controlled high-risk validation pack with PptxGenJS + deterministic science layers + editable/native labels;
6. run automated structural/text/layout/quantitative checks;
7. run semantic science assertions, including angle endpoints and fibre boundary membership;
8. render and inspect every R3 page individually;
9. run accessibility/projector and post-render student-inference review;
10. internally repair/rebuild until PASS using the circuit breaker and selective revalidation;
11. show one internally-passed pack for user acceptance;
12. create a current exact Lesson 2 copy lock/structured spec from already-validated content plus v2.1 terminology override;
13. assemble the full Lesson 2 controlled PPTX;
14. run PowerPoint/export/PDF/offline QA;
15. checkpoint before Lesson 3.

## Current hard blocks

Do not call Lesson 2 classroom-ready yet.
Do not start Lesson 3 yet.
Do not return to repeated Canva raster micro-patching as the primary science-production route.

## Execution-time gates that cannot be pre-certified by repository policy

These are not plan gaps; they must be checked when the relevant artifact/context exists:

- exact Microsoft PowerPoint opening/playback of a new final PPTX;
- actual classroom device/projector behavior when available;
- live internet/resource availability at teaching time;
- real classroom timing/post-class calibration.

Until tested, use explicit pending statuses rather than claiming PASS.

## Active safeguards

- `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md` v2.1
- `NEW_CHAT_START.md` v5.1
- `AGENTS.md` v5.0
- `OPERATING_BRIEF.md` v4.0
- `WORKFLOW.md` v5.0
- `QUALITY_GATES.md` v5.0
- `ACCURACY_ENFORCEMENT.md`
- `REFERENCE_LOCKED_VISUAL_PIPELINE.md`
- `RENDERER_ROUTING.md`
- `VISUAL_ASSET_ROUTING.md`
- `CLASSROOM_LANGUAGE_POLICY.md`
- `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
- `ARTIFACT_PERSISTENCE.md`
- chapter `TERMINOLOGY_LOCK.md` v1.1
- chapter `DIAGRAM_CONTRACTS.md` v1.1
- D-040 through D-044

## Universal stage rule

**Finish -> record -> then continue.**

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |
