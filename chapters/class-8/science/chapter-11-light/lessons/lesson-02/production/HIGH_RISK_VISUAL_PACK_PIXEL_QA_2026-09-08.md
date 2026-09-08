# Lesson 2 High-Risk Visual Pack — Pixel-Level QA

Date: 2026-09-08
Status: **PIXEL_QA_FAIL — USER_REVIEW_DEFERRED — FULL_LESSON_2_BLOCKED**

## Scope

This checkpoint records pixel-level inspection of the locally rendered source review pack that was imported into Canva. It complements the Canva metadata/text QA. It does not approve the pack.

## Result summary

The pack is **not ready for user review yet**.

Material visual defects remain in the source render used for the review pack:

- HRV-02 coin page: external context images did not render in the local source render; placeholder/broken-image regions are visible. Bottom explanatory text is also crowded/partly clipped by the footer bar.
- HRV-03 fish page: the realistic fish/context panel is not dependable in the local render path; only the deterministic schematic is trustworthy at this stage.
- HRV-04 mirage page: the real-road context panel is not dependable in the local render path; only the deterministic gradient schematic is trustworthy at this stage.
- HRV-07 optical-fibre page: the real-fibre context panel is not dependable in the local render path; only the deterministic cutaway is trustworthy at this stage.

The pure deterministic geometry pages HRV-01, HRV-05 and HRV-06 are visually present and conceptually aligned with the reference lock, but the complete seven-page pack cannot pass while the physical/context panels are unresolved.

## Important interpretation

Canva metadata confirms that seven pages and imported assets exist, but metadata/text success does not substitute for pixel-level verification. The local source render demonstrates that the asset transport/render path can fail even when the design metadata looks healthy.

Therefore:

- do **not** send the current pack to the user for approval;
- do **not** assemble full Lesson 2 v3;
- do **not** mark the visual pack PASS;
- rebuild the affected physical/context panels using a transport-safe asset route (embedded/local raster asset or Canva-native asset placement) and re-render all seven pages.

## Next authorized action

Repair HRV-02, HRV-03, HRV-04 and HRV-07 asset embedding/placement, then rerun individual page renders and blank/recognizability checks before presenting the pack to the user.
