# Current State

Last updated: 2026-09-08

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — LESSON_2_V1_SUPERSEDED — LESSON_2_V2_FAILED_USER_VISUAL_REVIEW — HIGH_RISK_REFERENCE_LOCK_COMPLETE — HIGH_RISK_ASSET_PANEL_REPAIR_COMMITTED — POST_REPAIR_QA_PARTIAL — DIRECT_RENDER_INSPECTION_REQUIRED — LESSON_2_FULL_REBUILD_BLOCKED — LESSON_3_ON_HOLD**

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

Manifest:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/HIGH_RISK_VISUAL_PACK_MANIFEST_2026-09-08.md`

Metadata/text QA:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/HIGH_RISK_VISUAL_PACK_METADATA_QA_2026-09-08.md`

Post-repair QA record:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/HIGH_RISK_VISUAL_PACK_PIXEL_QA_2026-09-08.md`

Asset-repair checkpoint:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/HIGH_RISK_VISUAL_PACK_ASSET_REPAIR_2026-09-08.md`

Current corrected Canva design ID:

`DAHUl-r85fw`

Page count:

`7`

## Asset panel repair checkpoint — committed

The previous four material asset-panel defects were repaired in Canva and committed in transaction:

`8433505536310832264`

Repairs:

- HRV-02 coin: the two existing raster coin demonstration images were rebound, alt text added, and the crowded caption moved upward;
- HRV-03 fish: a transport-safe raster real-fish context image was inserted on the physical/context side; deterministic science geometry preserved separately;
- HRV-04 mirage: a transport-safe raster hot-road context image was inserted; the visible wording now identifies it as a hot-road context rather than falsely claiming the photo itself is a verified mirage image; deterministic mirage mechanism diagram preserved separately;
- HRV-07 optical fibre: a transport-safe raster fibre/cable context image was inserted; deterministic repeated-internal-reflection diagram preserved separately.

A follow-up HRV-04 layout correction was committed in Canva transaction:

`5929504143379362817`

The resized/repositioned HRV-04 context label no longer uses the oversized post-wording-change box geometry.

## Post-repair QA evidence

Fresh Canva page evidence confirms:

- exactly seven pages remain;
- all pages are `1280 x 720`;
- expected HRV page order is intact;
- repaired raster context assets remain present on HRV-02/03/04/07;
- visible text remains Bangla-first;
- no standalone `TIR` remains.

Fresh execution of:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/check_l2_geometry_contracts.py`

returned:

`DIAGRAM_CONTRACTS_L2_V2: PASS`

This validates the controlled geometry specifications but does not replace direct rendered-pixel inspection.

## Current QA disposition

**POST_REPAIR_QA_PARTIAL — STRUCTURE/GEOMETRY PASS — DIRECT RENDER INSPECTION REQUIRED**

The current execution environment can obtain Canva page/render thumbnail URLs, but those signed render images cannot be ingested back into the internal visual-inspection toolchain at usable resolution. Therefore a true pixel-level PASS is not claimed.

The pack is still not approved and must not yet be presented as classroom-ready.

## Important block

Do not assemble full Lesson 2 v3.
Do not start Lesson 3.
Do not call the High-Risk Visual Pack approved until direct rendered-page inspection passes.

## Next authorized action

**Obtain a directly inspectable raster/PDF/PPTX export of all seven pages, or perform equivalent direct visual inspection in an environment where the rendered pixels are accessible.**

Required checks include:

- exactly seven rendered pages;
- no blank/missing page;
- no broken/disappearing context asset;
- recognizable coin/fish/hot-road/fibre physical visuals;
- no clipping/crowding/incorrect layering;
- readable Bangla-first labels;
- projector readability;
- science topology against `DIAGRAM_CONTRACTS.md` and the reference lock;
- expected HRV ID ↔ page mapping.

Only after this QA passes may the pack be shown to the user for visual/science approval.

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |
