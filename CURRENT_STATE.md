# Current State

Last updated: 2026-09-08

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — LESSON_2_V1_SUPERSEDED — LESSON_2_V2_FAILED_USER_VISUAL_REVIEW — HIGH_RISK_REFERENCE_LOCK_COMPLETE — HIGH_RISK_ASSET_PANEL_REPAIR_COMMITTED — DIRECT_PIXEL_QA_FAIL — REPAIR_ROUND_2_COMMITTED — USER_VISUAL_REVIEW_FOUND_ADDITIONAL_DEFECTS — REPAIR_ROUND_3_COMMITTED — DIRECT_PIXEL_QA_RERUN_NEXT — LESSON_2_FULL_REBUILD_BLOCKED — LESSON_3_ON_HOLD**

## Lesson 2 v2 disposition

Lesson 2 v2 remains:

**FAILED_USER_VISUAL_REVIEW — DO NOT USE FOR CLASSROOM — REBUILD REQUIRED AFTER HIGH-RISK VISUAL APPROVAL**

Any older wording that calls Lesson 2 v2 `INTERNAL_QA_PASS` is superseded.

## Active safeguards

- `ACCURACY_ENFORCEMENT.md`
- `REFERENCE_LOCKED_VISUAL_PIPELINE.md`
- `QUALITY_GATES.md`
- `CLASSROOM_LANGUAGE_POLICY.md`
- `VISUAL_ASSET_ROUTING.md`
- `PHYSICAL_VISUAL_REALISM_POLICY.md`
- `tools/student_text_lint.py`
- `chapters/class-8/science/chapter-11-light/TERMINOLOGY_LOCK.md`
- `chapters/class-8/science/chapter-11-light/DIAGRAM_CONTRACTS.md`
- `DECISIONS_ADDENDUM_2026-09-07.md` D-040, D-041, D-042

## Completed checkpoint — reference lock

Canonical Lesson 2 lock:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/HIGH_RISK_REFERENCE_LOCK_2026-09-08.md`

All seven high-risk concepts have explicit reference/topology locks:

1. apparent position / apparent depth;
2. coin visibility after water is added;
3. fish apparent depth;
4. road mirage / temperature-gradient refraction;
5. critical angle;
6. full internal reflection;
7. optical fibre.

## High-risk visual pack

Current corrected Canva design ID:

`DAHUl-r85fw`

Page count:

`7`

Directly inspected user export:

`Lesson 2 High-Risk Visual Pack — Reference Locked v2_20260908_172119_0000.pdf`

## Direct pixel QA result before later repair rounds

The user-supplied seven-page PDF was rendered at 200 DPI and every page was visually inspected.

Result:

**DIRECT_PIXEL_QA_FAIL**

Initial mandatory defects included:

- HRV-03 — underwater context photo did not show a clearly recognizable focal fish at classroom viewing scale;
- HRV-06 — `বাইরে প্রতিসরিত রশ্মি নেই` was materially overlapped/obscured by the two-condition box;
- HRV-07 — core label had insufficient contrast against the light-cyan core.

Canonical pixel-QA record:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/HIGH_RISK_VISUAL_PACK_PIXEL_QA_2026-09-08.md`

## Repair Round 2 — committed

Canva transaction:

`433986704618412418`

Status:

`committed`

Committed changes:

- HRV-03: replaced the generic underwater context image with a transport-safe raster Pexels image containing a clearly recognizable underwater fish;
- HRV-06: replaced the earlier TIR diagram with an overlap-reduced version;
- HRV-07: replaced the earlier fibre diagram with a higher-contrast version.

## User visual review after Repair Round 2

The user identified additional material defects from direct Canva screenshots:

- HRV-05 and HRV-06 angle arcs were drawn incorrectly; the incidence angle must be measured from the normal;
- terminology should use `হালকা মাধ্যম` instead of `বিরল মাধ্যম` in the student-facing copy;
- HRV-04 context photo did not actually show a visible mirage and its over-photo label was clipped;
- HRV-07 optical-fibre diagram remained scientifically/visually confusing, with poor label organization and reflection geometry.

These observations override any earlier assumption that those specific pages were ready.

## Repair Round 3 — committed

Canva transaction:

`2132969665247235516`

Status:

`committed`

Committed changes:

- HRV-04: replaced the plain hot-road image with an AI-generated realistic road-mirage context image showing a water-like distant shimmer/reflection; removed the clipped over-photo label; visible caption now explicitly identifies the scene as AI-generated explanatory imagery;
- HRV-05: replaced the deterministic critical-angle diagram with a corrected version where the `i = C` angle is measured from the normal and `r = 90°` is shown along the interface;
- HRV-05 student-facing medium terminology changed from `বিরল মাধ্যম` to `হালকা মাধ্যম`;
- HRV-06: replaced the deterministic TIR diagram with a corrected version where `i > C` is measured from the normal and no transmitted ray is shown;
- HRV-06 student-facing medium terminology changed from `বিরল মাধ্যম` to `হালকা মাধ্যম`;
- HRV-07: replaced the optical-fibre diagram with a cleaner version where core and cladding are separated and the ray reflects repeatedly at the core–cladding boundary; title/explanatory wording simplified to reduce clutter.

New Canva asset IDs:

- HRV-04 road-mirage context: `MAHUnII28Do`;
- HRV-05 corrected critical-angle diagram: `MAHUnP8tAW4`;
- HRV-06 corrected TIR diagram: `MAHUnOTSNts`;
- HRV-07 corrected optical-fibre diagram: `MAHUnLWxwE0`.

## Current block

Do not assemble full Lesson 2 v3.
Do not start Lesson 3.
Do not call the High-Risk Visual Pack approved yet.

## Next authorized action

**Export the latest seven-page Canva visual pack again and rerun direct pixel-level QA on all seven rendered pages.**

The rerun must verify:

- exact page count = 7;
- HRV-03 fish remains clearly recognizable;
- HRV-04 visibly communicates mirage and has no clipped/overlapping label;
- HRV-05 angle arc is clearly between the incident ray and normal, with `i = C` and `r = 90°` readable;
- HRV-06 angle arc is clearly between the incident ray and normal, with `i > C` readable and no outside refracted ray;
- HRV-07 ray visibly reflects at the core–cladding boundary and all labels are readable;
- `হালকা মাধ্যম` terminology is used consistently where required;
- no regression on HRV-01/02/03;
- no blank/broken/missing image region;
- projector readability;
- science topology remains compliant with `DIAGRAM_CONTRACTS.md` and the reference lock.

Only after this direct QA passes may the pack be shown to the user for final visual/science approval and the full Lesson 2 v3 rebuild gate be considered.

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |
