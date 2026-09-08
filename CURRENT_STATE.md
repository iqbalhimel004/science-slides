# Current State

Last updated: 2026-09-08

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — LESSON_2_V1_SUPERSEDED — LESSON_2_V2_FAILED_USER_VISUAL_REVIEW — HIGH_RISK_REFERENCE_LOCK_COMPLETE — HIGH_RISK_ASSET_PANEL_REPAIR_COMMITTED — DIRECT_PIXEL_QA_FAIL — REPAIR_ROUND_2_COMMITTED — DIRECT_PIXEL_QA_RERUN_NEXT — LESSON_2_FULL_REBUILD_BLOCKED — LESSON_3_ON_HOLD**

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

## Direct pixel QA result before Repair Round 2

The user-supplied seven-page PDF was rendered at 200 DPI and every page was visually inspected.

Result:

**DIRECT_PIXEL_QA_FAIL — REPAIR_ROUND_2_REQUIRED**

Mandatory defects identified:

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

- HRV-03: replaced the generic underwater context image with a transport-safe raster Pexels image containing a clearly recognizable underwater fish; science diagram preserved separately;
- HRV-06: replaced the deterministic TIR diagram asset with a corrected version in which the two-condition box and `বাইরে প্রতিসরিত রশ্মি নেই` label are separated and fully readable; incident/reflected-ray geometry and `i > C` condition preserved;
- HRV-07: replaced the deterministic fibre diagram asset with a corrected version using a high-contrast core label while preserving repeated internal reflection geometry;
- HRV-04 and HRV-05 were not intentionally changed.

New Canva asset IDs:

- HRV-03 clear-fish context: `MAHUm-0AwNE`;
- HRV-06 corrected TIR diagram: `MAHUm3jdg3Y`;
- HRV-07 corrected optical-fibre diagram: `MAHUmzHZPrI`.

## Current block

Do not assemble full Lesson 2 v3.
Do not start Lesson 3.
Do not call the High-Risk Visual Pack approved yet.

## Next authorized action

**Export the updated seven-page Canva visual pack again and rerun direct pixel-level QA on all seven rendered pages.**

The rerun must verify:

- exact page count = 7;
- HRV-03 fish is clearly recognizable at classroom scale;
- HRV-06 overlap is gone and all condition/no-transmitted-ray labels are readable;
- HRV-07 core label contrast is sufficient;
- no regressions on HRV-01/02/04/05;
- no blank/broken/missing image region;
- projector readability;
- science topology remains compliant with `DIAGRAM_CONTRACTS.md` and the reference lock.

Only after this direct QA passes may the pack be shown to the user for visual/science approval and the full Lesson 2 v3 rebuild gate be considered.

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |
