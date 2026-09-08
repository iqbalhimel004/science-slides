# Current State

Last updated: 2026-09-08

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — LESSON_2_V1_SUPERSEDED — LESSON_2_V2_FAILED_USER_VISUAL_REVIEW — HIGH_RISK_REFERENCE_LOCK_COMPLETE — HIGH_RISK_ASSET_PANEL_REPAIR_COMMITTED — DIRECT_PIXEL_QA_FAIL — REPAIR_ROUND_2_NEXT — LESSON_2_FULL_REBUILD_BLOCKED — LESSON_3_ON_HOLD**

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

## Direct pixel QA result

The user-supplied seven-page PDF was rendered at 200 DPI and every page was visually inspected.

Result:

**DIRECT_PIXEL_QA_FAIL — REPAIR_ROUND_2_REQUIRED**

Pass/acceptable pages:

- HRV-02 — concept and physical demonstration acceptable; only minor caption-contrast polish desirable;
- HRV-04 — pass;
- HRV-05 — pass.

Mandatory repair targets:

- HRV-03 — current underwater context photo does not show a clearly recognizable focal fish at classroom viewing scale; replace with a transport-safe raster image containing a clearly visible underwater fish;
- HRV-06 — `বাইরে প্রতিসরিত রশ্মি নেই` is materially overlapped/obscured by the two-condition box; reposition/rebuild text layout while preserving TIR geometry;
- HRV-07 — core label has insufficient contrast against the light-cyan core; increase contrast while preserving repeated-reflection geometry.

Recommended polish in the same round:

- HRV-01 — improve green apparent-position/construction-label contrast/placement;
- HRV-02 — improve caption contrast;
- HRV-03 — improve green apparent-position/construction-label contrast if the diagram panel is touched.

Canonical pixel-QA record:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/HIGH_RISK_VISUAL_PACK_PIXEL_QA_2026-09-08.md`

## Current block

Do not assemble full Lesson 2 v3.
Do not start Lesson 3.
Do not call the High-Risk Visual Pack approved.

## Next authorized action

**Repair HRV-03, HRV-06 and HRV-07 in Canva, include low-risk readability polish where safe, then export all seven pages again and rerun direct pixel QA.**

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |
