# Lesson 2 High-Risk Visual Pack — Pixel-Level QA

Date: 2026-09-08
Status: **POST_REPAIR_QA_PARTIAL — STRUCTURE/GEOMETRY PASS — DIRECT PIXEL INSPECTION STILL REQUIRED — USER_REVIEW_DEFERRED — FULL_LESSON_2_BLOCKED**

## Scope

This record supersedes the earlier pre-repair-only interpretation while preserving its history.

Current Canva design:

`DAHUl-r85fw`

Page count returned by Canva after repair:

`7`

The asset-panel repair is committed. This checkpoint records the post-repair QA that can be established from fresh Canva design/page evidence, editable-element geometry, asset metadata, text content and the deterministic geometry checker.

It does **not** claim a full pixel-level PASS because this execution environment cannot ingest Canva's signed render thumbnails back into the visual inspection pipeline at usable resolution. The canonical rule that metadata/structure alone cannot substitute for pixel inspection remains in force.

## Post-repair evidence obtained

### Page/render mapping

Fresh Canva `get-design-pages` evidence returned exactly seven page records, all `1280 x 720`, with the expected page order:

1. HRV-01 — আপাত অবস্থান;
2. HRV-02 — মুদ্রা;
3. HRV-03 — মাছের আপাত গভীরতা;
4. HRV-04 — মরীচিকা;
5. HRV-05 — সংকট কোণ;
6. HRV-06 — পূর্ণ অভ্যন্তরীণ প্রতিফলন;
7. HRV-07 — অপটিক্যাল ফাইবার.

No page record is missing.

### Repaired context assets

Fresh Canva editable-element evidence confirms the repaired raster assets remain present in the design:

- HRV-02: two raster coin-demonstration images remain bound;
- HRV-03: raster fish context asset `MAHUmoH9khY` remains present;
- HRV-04: raster hot-road context asset `MAHUmv3go28` remains present;
- HRV-07: raster cable/fibre context asset `MAHUmqQ_Rak` remains present.

The new context images are separate from the science-critical deterministic diagram images.

### Text/language checks

Fresh Canva text fetch confirms:

- visible student-facing copy remains Bangla-first;
- no standalone `TIR` is present;
- HRV-02 states that the coin does not move and the ray path changes;
- HRV-03 states that apparent fish position is nearer the surface than the real fish;
- HRV-04 states that the road is not actually water-covered and that ray bending is gradual rather than a hard mirror-like boundary;
- HRV-05 states `i = C`, `r = 90°`, and that this is not yet full internal reflection;
- HRV-06 states `i > C` and no outside refracted ray;
- HRV-07 states that optical fibre guides/carries light and does not store light.

### Deterministic science geometry

Canonical checker:

`check_l2_geometry_contracts.py`

Fresh execution result:

`DIAGRAM_CONTRACTS_L2_V2: PASS`

The checker validates the locked controlled-build invariants for:

- apparent position: two real rays + two backward extensions, apparent point shallower than real object;
- fish apparent depth: two real rays + two backward extensions, apparent fish shallower than real fish;
- critical angle: denser-to-rarer, refracted ray along interface at `r = 90°`, reflected ray remains in denser medium;
- full internal reflection: reflected ray remains in denser medium, no transmitted/refracted ray;
- mirage: gradual multi-segment bending and no single hard mirror-like boundary.

This complements but does not replace rendered visual inspection.

## Layout finding and correction during post-repair QA

Fresh Canva editable-element geometry exposed one remaining layout risk on HRV-04: the revised left-panel context label had expanded vertically after the wording change.

Correction committed in Canva transaction:

`5929504143379362817`

The HRV-04 context label was resized/repositioned without changing the science diagram or other pages.

## Source/metadata caveat

Visible captions for HRV-03/04/07 now correctly identify the repaired context images as Pexels-sourced. Canva presenter notes still contain some older Wikimedia/CC0 source wording from the pre-repair pack. GitHub's asset-repair checkpoint records the actual repaired asset provenance. Presenter-note reconciliation remains required before a final release artifact is called source-clean.

## What is established now

PASS at this stage:

- exact Canva page count = 7;
- expected HRV page order is present;
- repaired raster assets persist in the Canva design structure;
- Bangla-first visible copy remains present;
- deterministic geometry checker passes;
- HRV-04 post-repair label expansion was detected and corrected;
- no evidence was found that HRV-01/05/06 were unintentionally changed.

## What is NOT yet established

A full pixel-level PASS is **not** yet established for:

- actual rendered recognizability of coin/fish/hot-road/fibre panels at classroom viewing scale;
- absence of any visual crop, clipping, broken-image rendering or layering defect in the final rasterized page output;
- projector readability of every label;
- visual correctness of every ray/label after final Canva rasterization;
- exact PPTX/PDF export survival.

Reason: the current execution environment can obtain Canva render-thumbnail URLs but cannot ingest those signed thumbnail images back into the internal visual-inspection toolchain at usable resolution. Treating the structural/metadata checks above as pixel QA would violate the project's hard QA rule.

## Current disposition

**POST_REPAIR_QA_PARTIAL — DIRECT RENDER INSPECTION REQUIRED — USER_REVIEW DEFERRED**

Do not call the High-Risk Visual Pack approved.
Do not assemble full Lesson 2 v3.
Do not start Lesson 3.

## Next authorized action

Obtain a directly inspectable raster/PDF/PPTX export of all seven pages, or perform equivalent direct visual inspection of each page in an environment where the rendered pixels are accessible to the reviewer. Then verify:

1. all seven pages individually;
2. no blank/missing page;
3. no broken/disappearing context asset;
4. recognizable physical/context visuals;
5. no clipping/crowding/incorrect layering;
6. readable Bangla-first labels at projector scale;
7. science topology against `DIAGRAM_CONTRACTS.md` and the reference lock;
8. exact HRV ID ↔ rendered page mapping.

Only after those checks pass may the pack be sent to the user for visual/science approval.
