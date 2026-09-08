# Controlled Optics Components v0.1 — QA Checkpoint

Date: 2026-09-08
Status: **COMPONENT_SOURCE_COMMITTED — SEMANTIC_TESTS_PASS — 3-SLIDE R3 RENDER QA PASS — FULL 7-PAGE VALIDATION PACK NOT YET COMPLETE**

## Scope

Production System v2.1 migration stage for Lesson 2:

- HRV-07 optical fibre rebuilt first as a controlled deterministic component;
- HRV-05 critical-angle geometry ported to a reusable controlled component;
- HRV-06 full-internal-reflection geometry ported to a reusable controlled component.

Canonical component source:

`/components/optics/ch11_l2_r3_optics_components_v0_1.js`

Semantic test source:

`/components/optics/test_ch11_l2_r3_optics_components_v0_1.js`

## Semantic results

### HRV-05 — Critical angle

PASS:

- horizontal interface;
- perpendicular normal through incidence point;
- `i = C` arc constructed between incident ray and normal;
- refracted ray lies along interface (`r = 90°`);
- reflected ray remains in dense medium;
- current student-facing terminology uses `ঘন মাধ্যম` / `হালকা মাধ্যম`.

### HRV-06 — Full internal reflection

PASS:

- horizontal interface;
- perpendicular normal through incidence point;
- `i > C` arc constructed between incident ray and normal;
- reflected ray remains in dense medium;
- no outside transmitted/refracted ray exists in the idealized diagram;
- current student-facing terminology uses `ঘন মাধ্যম` / `হালকা মাধ্যম`.

### HRV-07 — Optical fibre

PASS:

- core and cladding are visually separated;
- every intended reflection vertex lies on a core-cladding boundary;
- all ray vertices remain inside the core in the simplified TIR path;
- repeated internal reflection is visible;
- no simplified ray segment propagates through the cladding;
- labels are separated from the ray path;
- visible explanation says the fibre guides/carries light, not stores it.

## Controlled validation render

A 3-slide PptxGenJS validation deck was generated from the controlled source and rendered to PNG.

Automated structural/layout result:

- `slides_test.py`: PASS — no overflow detected.

Direct pixel inspection result after one internal label-placement refinement:

- HRV-05: PASS for geometry, terminology and projector-scale readability;
- HRV-06: PASS for geometry, no-transmitted-ray condition and readability;
- HRV-07: PASS for boundary-reflection geometry and removal of the previous lower-text overlap/crowding failure.

## Important limitation

This checkpoint is **not** the final High-Risk Visual Pack approval.

HRV-01..04 remain retained validated references/assets from the latest direct user-export review. The next stage must assemble the complete controlled high-risk validation pack using the retained HRV-01..04 references plus the new controlled HRV-05..07 components, then rerun full pack automated + semantic + pixel QA before user acceptance.

## Next action

1. assemble the complete controlled high-risk validation pack;
2. reuse HRV-01..04 rather than restart them;
3. run full pack structural/text/layout QA;
4. run applicable semantic tests;
5. render every page and inspect all R3 pages individually;
6. only after internal PASS show one pack to the user for acceptance.
