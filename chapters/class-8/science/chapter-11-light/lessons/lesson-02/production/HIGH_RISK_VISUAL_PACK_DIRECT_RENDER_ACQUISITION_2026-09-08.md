# High-Risk Visual Pack Direct Render Acquisition — 2026-09-08

## Scope

Active Canva design:

`DAHUl-r85fw`

Active stage:

`POST_REPAIR_QA_PARTIAL — DIRECT_RENDER_INSPECTION_REQUIRED`

This checkpoint records the next-step attempt to obtain directly inspectable rendered pages after the asset-panel repair and HRV-04 layout correction.

## Fresh Canva evidence

A fresh `get-design-pages` call returned exactly seven page records, all at design dimensions `1280 x 720`:

1. HRV-01 — apparent position / apparent depth;
2. HRV-02 — coin visibility after water is added;
3. HRV-03 — fish apparent depth;
4. HRV-04 — road mirage / hot-road context;
5. HRV-05 — critical angle;
6. HRV-06 — full internal reflection;
7. HRV-07 — optical fibre.

The Canva page records expose time-limited render-thumbnail URLs, including updated version `3` URLs after the repair/correction transactions.

## Acquisition result

Direct file acquisition for internal pixel QA is still blocked in the current execution environment.

Observed limitations:

- the connected Canva toolset exposes page thumbnails and design content, but no supported export/download action for PPTX/PDF/PNG was available in the current connector surface;
- the retrieved Canva thumbnail URLs are visible as signed URLs, but they could not be downloaded into the internal inspection container because DNS resolution for Canva media hosts failed in the container environment;
- therefore, the reviewer still cannot inspect the rendered pixels at a trustworthy resolution inside the QA toolchain.

## Current disposition

The pack remains:

**POST_REPAIR_QA_PARTIAL — DIRECT_RENDER_EXPORT_REQUIRED — USER_REVIEW_DEFERRED — FULL_LESSON_2_BLOCKED**

Do not mark the high-risk pack as PASS.
Do not assemble full Lesson 2 v3.
Do not start Lesson 3.

## Required unblock input

One of the following directly inspectable artifacts is required:

1. Canva-exported PDF of the seven-page visual pack;
2. Canva-exported PPTX of the seven-page visual pack;
3. seven full-resolution PNG/JPG page exports;
4. seven clear screenshots captured from Canva presentation/page view.

After receipt, run page-by-page pixel QA for:

- exact page count and HRV mapping;
- no blank/missing/broken image region;
- recognizability of coin/fish/hot-road/fibre physical panels;
- no clipping/crowding/layering issue;
- readable Bangla-first text at projector scale;
- deterministic ray/geometry topology against `DIAGRAM_CONTRACTS.md` and `HIGH_RISK_REFERENCE_LOCK_2026-09-08.md`;
- source/visible-caption consistency before final release.
