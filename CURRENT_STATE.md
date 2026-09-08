# Current State

Last updated: 2026-09-08

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — LESSON_2_V1_SUPERSEDED — LESSON_2_V2_FAILED_USER_VISUAL_REVIEW — HIGH_RISK_REFERENCE_LOCK_COMPLETE — HIGH_RISK_VISUAL_PACK_PIXEL_QA_FAIL — ASSET_PANEL_REPAIR_NEXT — LESSON_2_FULL_REBUILD_BLOCKED — LESSON_3_ON_HOLD**

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

## Visual pack status

Manifest:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/HIGH_RISK_VISUAL_PACK_MANIFEST_2026-09-08.md`

Metadata/text QA:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/HIGH_RISK_VISUAL_PACK_METADATA_QA_2026-09-08.md`

Pixel-level QA:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/HIGH_RISK_VISUAL_PACK_PIXEL_QA_2026-09-08.md`

Current corrected Canva design ID:

`DAHUl-r85fw`

Page count:

`7`

Metadata/text checks:

- exactly seven Canva page records exist;
- visible text is Bangla-first;
- no standalone `TIR` remains.

Pixel-level disposition:

**FAIL — USER REVIEW DEFERRED**

Material defects found in the source render path:

- HRV-02 coin: physical/context images did not render reliably; footer/text crowding also observed;
- HRV-03 fish: realistic/context panel not dependable in the local render path;
- HRV-04 mirage: real-road context panel not dependable in the local render path;
- HRV-07 optical fibre: real-fibre context panel not dependable in the local render path.

The pure deterministic geometry pages HRV-01, HRV-05 and HRV-06 remain usable as science-reference components, but the seven-page pack cannot be approved until the affected asset panels are repaired and rerendered.

## Important block

Do not send the current pack for user approval yet.
Do not assemble full Lesson 2 v3.
Do not start Lesson 3.

## Visual construction rule for repair

- repair affected physical/context panels using transport-safe embedded/local raster assets or Canva-native asset placement;
- realistic object/context layer must remain separate from science-critical geometry;
- science-critical layer remains deterministic PptxGenJS/SVG;
- rerender all seven pages after repair;
- no blank, broken-image, clipped-label or unreadable object panel may remain.

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

## Next authorized action

**Repair HRV-02, HRV-03, HRV-04 and HRV-07 asset panels; rerender all seven high-risk pages; rerun pixel QA.**

Only after that passes may the pack be shown to the user for visual approval.
