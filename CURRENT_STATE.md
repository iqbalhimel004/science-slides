# Current State

Last updated: 2026-09-08

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — LESSON_2_V1_SUPERSEDED — LESSON_2_V2_FAILED_USER_VISUAL_REVIEW — HIGH_RISK_REFERENCE_LOCK_COMPLETE — HIGH_RISK_VISUAL_PACK_BUILT_CANVA_REVIEW_PENDING — LESSON_2_FULL_REBUILD_BLOCKED — LESSON_3_ON_HOLD**

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

## Completed checkpoint — visual pack built

Manifest:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/HIGH_RISK_VISUAL_PACK_MANIFEST_2026-09-08.md`

Canva design ID:

`DAHUl9F8yQc`

Title:

`Lesson 2 High-Risk Visual Pack — Reference Locked v2`

Page count:

`7`

Canva checks completed:

- `get-design-pages`: returned exactly seven page records;
- `get-design-content`: visible text reviewed for Bangla-first wording;
- `get-presenter-notes`: source notes present on all seven pages.

Status:

**USER_REVIEW_PENDING**

## Important block

Do not assemble the full Lesson 2 deck and do not start Lesson 3 until the user approves the High-Risk Visual Pack.

## Visual construction rule for this pack

- physical/context base assets: verified existing real/open/licensed source first, or connected Canva/Canva AI/Canva Pro when generation is needed;
- ChatGPT-native image generation: not routine/default;
- science-critical layer: deterministic PptxGenJS/SVG only;
- when realism and exact geometry conflict: use a two-panel hybrid;
- no generated/stock image is trusted for rays, normals, angles, apparent image positions, labels or scientific topology.

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

## Next authorized action

**User reviews Lesson 2 High-Risk Visual Pack.**

If approved, assemble full Lesson 2 v3 using these approved visuals. If rejected, revise only the failed visuals and keep full Lesson 2 blocked.
