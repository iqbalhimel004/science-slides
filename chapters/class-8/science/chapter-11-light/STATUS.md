# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science
- Chapter: 11 — আলো
- Last updated: 2026-09-08
- Current status: **CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — PRODUCTION_SYSTEM_V2_1_AUDIT_HARDENED — LESSON_2_CONTINUES_WITHOUT_RESET — HIGH_RISK_REFERENCE_LOCK_COMPLETE — HRV_01_TO_04_RETAINED_AS_VALIDATED_REFERENCES — CONTROLLED_HRV_05_06_07_COMPONENTS_V0_1_COMMITTED — SEMANTIC_TESTS_PASS — 3_SLIDE_R3_RENDER_QA_PASS — COMPLETE_7_PAGE_CONTROLLED_VALIDATION_PACK_NEXT — LESSON_2_FULL_BUILD_BLOCKED — LESSON_3_ON_HOLD**

## Canonical architecture

- `/SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md` v2.1
- `/CURRENT_STATE.md`
- `/DECISIONS_ADDENDUM_2026-09-07.md` D-043/D-044

No-reset rule: valid completed work is preserved; only defective/fragile production layers are rebuilt.

## Lesson 1

**COMPLETED / USER-APPROVED BASELINE — PRESERVE**

No workflow-driven restart is required.

## Lesson 2 validated work to preserve

- analysis/storyboard;
- source reconciliation;
- validated student-copy concepts;
- current terminology lock;
- diagram/reference contracts;
- accepted physical/context assets;
- HRV-01..04 latest validated references;
- historical failure/QA records as regression evidence.

Migration override:

`lessons/lesson-02/production/PRODUCTION_SYSTEM_V2_1_MIGRATION_2026-09-08.md`

## Current terminology override

Current revised Lesson 2 student-facing medium terminology:

- `ঘন মাধ্যম`
- `হালকা মাধ্যম`

Historical `বিরল মাধ্যম` wording in v2 files is superseded for new production except explicit textbook/exam quotation.

## Latest retained direct-render evidence

Latest inspected PDF:

`Lesson 2 High-Risk Visual Pack — Reference Locked v2_20260908_182041_0000.pdf`

Retained reference disposition:

- HRV-01: materially acceptable;
- HRV-02: materially acceptable;
- HRV-03: materially acceptable;
- HRV-04: materially acceptable;
- old HRV-05/06 renders: materially acceptable reference only;
- old HRV-07 raster: failed regression evidence.

## Controlled optics components v0.1

Committed source:

`/components/optics/ch11_l2_r3_optics_components_v0_1.js`

Committed semantic tests:

`/components/optics/test_ch11_l2_r3_optics_components_v0_1.js`

QA checkpoint:

`lessons/lesson-02/production/CONTROLLED_OPTICS_COMPONENTS_V0_1_QA_2026-09-08.md`

Current results:

- HRV-05 critical angle: semantic PASS + rendered component PASS;
- HRV-06 full internal reflection: semantic PASS + rendered component PASS;
- HRV-07 optical fibre: semantic PASS + rendered component PASS;
- 3-slide PptxGenJS validation build: generated;
- overflow test: PASS;
- direct-pixel review: PASS after internal label-placement refinement.

These results do **not** yet approve the complete seven-page visual pack.

## Audit-hardening controls mandatory

As applicable:

- source freshness classification;
- quantitative/unit/dimensional checks;
- demo/experiment safety;
- model/scale transparency;
- accessibility/color-independent meaning;
- semantic R3 tests;
- golden-master regression;
- targeted independent review for new R3 component families;
- selective revalidation;
- user review after internal PASS.

## Current hard block

Do not call Lesson 2 classroom-ready.
Do not start Lesson 3.
Do not restart Lesson 2 from zero.
Do not resume Canva raster micro-patching as primary science production.

## Next authorized stage

1. build the complete controlled seven-page validation pack using retained HRV-01..04 and new HRV-05..07 components;
2. run full-pack automated structural/text/layout checks;
3. run applicable semantic science tests;
4. render all seven pages and inspect R3 pages individually;
5. run accessibility/projector and post-render student-inference QA;
6. internally repair/rebuild until PASS;
7. obtain one user acceptance;
8. create current exact Lesson 2 copy/spec;
9. assemble full Lesson 2 from validated work;
10. run compatibility/export/offline QA;
11. checkpoint before Lesson 3.

## Execution-time pending gates

PowerPoint exact-artifact testing, actual classroom device/projector behavior, live network availability and post-class timing remain pending until tested.
