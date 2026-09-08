# Current State

Last updated: 2026-09-08

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Canonical production architecture

**Science Slides Production System v2 is ACTIVE.**

Read first for production architecture:

`SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`

Durable decision:

`DECISIONS_ADDENDUM_2026-09-07.md` -> `D-043`

Core rule:

**Do not reset valid prior work. Continue from the latest valid checkpoint and rebuild only defective/fragile production layers.**

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — PRODUCTION_SYSTEM_V2_ADOPTED — LESSON_2_CONTINUES_WITHOUT_RESET — HIGH_RISK_REFERENCE_LOCK_COMPLETE — REPAIR_ROUND_3_COMMITTED — LATEST_DIRECT_PDF_QA_PAGES_1_TO_6_ACCEPTABLE — HRV_07_REMAINS_UNRESOLVED — CONTROLLED_COMPONENT_MIGRATION_NEXT — FULL_LESSON_2_BLOCKED — LESSON_3_ON_HOLD**

## Lesson 1

Disposition:

**COMPLETED / USER-APPROVED BASELINE — PRESERVE**

Production System v2 adoption does not trigger a Lesson 1 rebuild.

Only make targeted future changes if later classroom/compatibility evidence requires them.

## Lesson 2 — no-reset migration

Lesson 2 is not restarted.

Retain and reuse all still-valid work:

- chapter/lesson analysis;
- source verification/reconciliation;
- frozen storyboard;
- terminology lock;
- `DIAGRAM_CONTRACTS.md`;
- high-risk reference lock;
- verified Bangla-first wording;
- accepted/recognizable physical/context assets;
- corrected HRV-04 mirage context;
- corrected HRV-05 critical-angle concept/terminology;
- corrected HRV-06 TIR concept/terminology;
- QA/failure records as regression evidence.

Historical Lesson 2 v1/v2 artifacts that failed review remain regression evidence and must not be used as classroom-ready outputs.

## High-risk visual history

Current Canva design ID:

`DAHUl-r85fw`

Repair Round 2 committed:

`433986704618412418`

Repair Round 3 committed:

`2132969665247235516`

Repair Round 3 included:

- HRV-04: visible road-mirage context + clipped over-photo label removed;
- HRV-05: critical-angle diagram corrected so `i = C` is measured from the normal and `r = 90°` lies along the interface; student-facing terminology uses `হালকা মাধ্যম`;
- HRV-06: TIR diagram corrected so `i > C` is measured from the normal and no transmitted ray is shown; student-facing terminology uses `হালকা মাধ্যম`;
- HRV-07: optical-fibre diagram revised, but later direct export still exposed a remaining readability/overlap defect.

## Latest directly inspected user export

`Lesson 2 High-Risk Visual Pack — Reference Locked v2_20260908_182041_0000.pdf`

This seven-page PDF was directly inspected after Repair Round 3.

Latest direct-pixel disposition:

- HRV-01: materially acceptable;
- HRV-02: materially acceptable;
- HRV-03: materially acceptable and fish recognizable;
- HRV-04: materially acceptable; mirage is visibly communicated and clipped photo label is gone;
- HRV-05: materially acceptable; `i = C` is measured from the normal, `r = 90°` is readable, `হালকা মাধ্যম` is used;
- HRV-06: materially acceptable; `i > C` is measured from the normal, no outside refracted ray is shown, `হালকা মাধ্যম` is used;
- HRV-07: **FAIL / UNRESOLVED** because lower explanatory text remained overlapped/crowded in the rendered page.

A cleaner HRV-07 v5 raster replacement was prepared in a Canva draft during the same chat, but it was **not established as a committed/final direct-pixel-QA PASS before Production System v2 was adopted**. Do not assume that draft is the current saved truth.

## Production System v2 migration classification for Lesson 2 high-risk pack

- HRV-01: `REUSE_AS_REFERENCE` / port only if needed during controlled full-deck build;
- HRV-02: `REUSE_AS_REFERENCE` / retain physical coin assets;
- HRV-03: `REUSE_AS_REFERENCE` / retain recognizable fish asset and verified apparent-depth topology;
- HRV-04: `REUSE_AS_REFERENCE` / retain corrected mirage context and deterministic mechanism concept;
- HRV-05: `PORT_TO_CONTROLLED_COMPONENT` using corrected critical-angle geometry as reference;
- HRV-06: `PORT_TO_CONTROLLED_COMPONENT` using corrected TIR geometry as reference;
- HRV-07: `REBUILD/PORT_TO_CONTROLLED_COMPONENT` first; stop raster micro-patching.

Why HRV-05/06 are marked for controlled component port even though the latest render is acceptable: they are R3 visuals and should become reusable deterministic golden components for the full Lesson 2 build and future optics lessons.

## Immediate next authorized action

**Do not restart Lesson 2 research or rebuild all seven Canva pages.**

Next sequence under Production System v2:

1. recover the latest Lesson 2 specs/locks/source files;
2. create controlled reusable optics components for the remaining R3 production needs, prioritizing HRV-07 optical fibre and then porting HRV-05/06 geometry into source-controlled components;
3. preserve HRV-01..04 as validated references/assets unless fresh evidence shows a regression;
4. assemble a controlled high-risk validation pack with PptxGenJS + editable/native labels + deterministic SVG/vector science layers;
5. run automated structural/text/layout QA;
6. run semantic science assertions;
7. render PNGs and inspect every R3 page individually;
8. internally repair/rebuild until PASS, using the v2 repair circuit breaker;
9. show the internally-passed high-risk pack once for user acceptance;
10. then assemble the full Lesson 2 controlled PPTX using all already-validated content/assets;
11. run full lesson PowerPoint/export/PDF/offline QA;
12. checkpoint before starting Lesson 3.

## Current hard block

Do not call Lesson 2 classroom-ready yet.
Do not start Lesson 3 yet.
Do not return to repeated Canva raster micro-patching as the primary science-production route.

## Active safeguards

- `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
- `NEW_CHAT_START.md`
- `OPERATING_BRIEF.md`
- `ACCURACY_ENFORCEMENT.md`
- `REFERENCE_LOCKED_VISUAL_PIPELINE.md`
- `QUALITY_GATES.md`
- `RENDERER_ROUTING.md`
- `VISUAL_ASSET_ROUTING.md`
- `CLASSROOM_LANGUAGE_POLICY.md`
- `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
- `ARTIFACT_PERSISTENCE.md`
- `chapters/class-8/science/chapter-11-light/TERMINOLOGY_LOCK.md`
- `chapters/class-8/science/chapter-11-light/DIAGRAM_CONTRACTS.md`
- `DECISIONS_ADDENDUM_2026-09-07.md` D-040 through D-043

## Universal stage rule

**Finish -> record -> then continue.**

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |
