# High-Risk Visual Pack Asset Repair — 2026-09-08

## Scope

Active design:

`DAHUl-r85fw`

Title:

`Lesson 2 High-Risk Visual Pack — Reference Locked v2`

This checkpoint records the asset-panel repair stage for the Lesson 2 high-risk visual pack. It does **not** approve the full pack and does **not** authorize the full Lesson 2 v3 rebuild.

## Pre-repair state

Previous canonical pixel-level QA failed because four physical/context panels were not dependable in the source/local render path:

- HRV-02 coin: context-image render path unreliable; footer/text crowding observed;
- HRV-03 fish: realistic/context panel not dependable in source/local render path;
- HRV-04 mirage: real-road context panel not dependable in source/local render path;
- HRV-07 optical fibre: real-fibre context panel not dependable in source/local render path.

HRV-01, HRV-05 and HRV-06 deterministic science geometry remained usable and were not intentionally changed.

## Repair actions committed in Canva

Canva edit transaction:

`8433505536310832264`

Status:

`committed`

Committed repair actions:

1. HRV-02 coin panel
   - rebound the two existing raster JPG coin-demonstration assets;
   - added meaningful alt text to the two coin context images;
   - moved the real-demonstration caption upward to reduce footer/text crowding;
   - left the deterministic science diagram on the right side intact.

2. HRV-03 fish apparent-depth panel
   - inserted a transport-safe raster fish/context image on the physical/context side;
   - preserved the existing deterministic science diagram on the right side;
   - changed the source caption from CC0 wording to Pexels wording because the repair asset is Pexels-sourced.

3. HRV-04 mirage panel
   - inserted a transport-safe raster hot-road/desert-road context image on the physical/context side;
   - preserved the deterministic temperature-gradient/refraction explanation diagram on the right side;
   - changed the left-panel label from an asserted real mirage photo to a hot-road context label:
     `গরম রাস্তার বাস্তব প্রেক্ষাপট`;
   - changed the caption to avoid falsely implying that the context photograph itself is a verified mirage photograph.

4. HRV-07 optical-fibre panel
   - inserted a transport-safe raster optical-fibre/cable context image on the physical/context side;
   - preserved the deterministic repeated-internal-reflection science diagram on the right side;
   - changed the source caption from CC0 wording to Pexels wording because the repair asset is Pexels-sourced.

## New Canva raster assets

- HRV-03 fish context image
  - Canva asset id: `MAHUmoH9khY`
  - Canva name: `HRV-03_Fish_underwater_Pexels.jpg`
  - Raster metadata: `4608 x 3072`
  - Source page: `https://www.pexels.com/photo/underwater-shot-of-fish-in-ocean-5919895/`
  - Direct import URL used by Canva: `https://images.pexels.com/photos/5919895/pexels-photo-5919895.jpeg?cs=srgb&dl=pexels-beatrice-galli-2240819-5919895.jpg&fm=jpg`

- HRV-04 hot-road context image
  - Canva asset id: `MAHUmv3go28`
  - Canva name: `HRV-04_Hot_road_landscape_Pexels.jpg`
  - Raster metadata: `5827 x 3885`
  - Source page: `https://www.pexels.com/photo/empty-road-2450291/`
  - Direct import URL used by Canva: `https://images.pexels.com/photos/2450291/pexels-photo-2450291.jpeg`

- HRV-07 optical-fibre context image
  - Canva asset id: `MAHUmqQ_Rak`
  - Canva name: `HRV-07_Fiber_optic_cables_Pexels.jpg`
  - Raster metadata: `5422 x 3615`
  - Source page: `https://www.pexels.com/photo/cables-in-close-up-photography-1624895/`
  - Direct import URL used by Canva: `https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg?cs=srgb&dl=pexels-brett-sayles-1624895.jpg&fm=jpg`

## Post-commit evidence

Post-commit Canva design metadata:

- design id: `DAHUl-r85fw`;
- page count: `7`;
- updated timestamp returned by Canva: `1788863388`;
- edit URL returned after commit: `https://www.canva.com/d/19vsAN_LhtpEzX4`;
- view URL returned after commit: `https://www.canva.com/d/Ji8oVVRzPWXc4BP`.

Post-commit page render request returned seven Canva page records, all with `1280 x 720` dimensions.

## QA disposition

Current stage disposition:

**ASSET PANEL REPAIR COMMITTED — POST-REPAIR PIXEL QA NEXT**

The asset-repair mutation has been committed, but this checkpoint does **not** convert the pack to user-review-ready status.

Remaining required checks before user approval:

1. rerender all seven pages individually at usable resolution;
2. verify that HRV-02/03/04/07 physical/context panels remain visible and recognizable after export/render;
3. verify no blank/broken image panel remains;
4. verify no clipping/crowding remains;
5. verify deterministic science geometry on HRV-01/02/03/04/05/06/07 still follows `DIAGRAM_CONTRACTS.md` and `HIGH_RISK_REFERENCE_LOCK_2026-09-08.md`;
6. verify Bangla-first student-facing language;
7. verify exact page count = 7;
8. update the pixel QA record with PASS/FAIL.

## Known caveat

The visible slide captions were updated where the repaired assets use Pexels sources. However, Canva presenter-note/source metadata may still contain older CC0/Wikimedia wording on some pages because the available editing operation updated visible slide content, not necessarily presenter notes. Before final approval or export package release, source metadata must be reconciled in the GitHub production record and, if required by the delivery artifact, in Canva presenter notes.

## Current block remains

Do not assemble full Lesson 2 v3 yet.
Do not start Lesson 3.
Do not present the pack as approved until post-repair pixel QA passes.
