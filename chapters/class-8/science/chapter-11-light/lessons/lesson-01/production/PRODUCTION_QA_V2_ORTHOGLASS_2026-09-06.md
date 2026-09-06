# Lesson 1 v2 QA — Orthographic Realistic Glass Correction

Date: 2026-09-06
Status: **ORTHOGRAPHIC_REAL_GLASS_CORRECTION_BUILT — USER_REVIEW_PENDING**

## User feedback addressed

The user reported that the previous glass-slab visual was not acceptable because the glass object was realistic but the ray overlay did not share the same optical/perspective plane. This feedback is accepted.

## Correction implemented

Slides affected:

- `L1-F01a` / physical slide 26
- `L1-F01b` / physical slide 27

Change:

- replaced the perspective 3D glass image with a straight-on/orthographic photorealistic glass slab image;
- retained deterministic ray overlays;
- restored geometry clarity by using vertical parallel slab faces and horizontal normals;
- kept the staged pair: prediction first, answer/explanation second;
- retained Bangla-first textbook-facing labels.

## Why this is better

The previous perspective image created a conflict between 3D visual perspective and 2D ray geometry. The new version separates roles clearly:

- the glass object looks physically realistic;
- the optical ray construction remains textbook-correct and deterministic;
- the first and second বিভেদতল are visibly parallel;
- the অভিলম্ব lines are easy to interpret;
- the emergent ray is parallel to the incident ray in the intended parallel-sided slab construction.

## Current user-facing artifacts

- PPTX: `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_OrthoGlass_PPTX_SAFE.pptx`
- PDF: `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_OrthoGlass_PPTX_SAFE.pdf`

Fingerprints:

- PPTX: `b626024aee467d1635d6d5bde3757e27c2360252b21dc7ea1e5dd0e6bb5df925`
- PDF: `bfbf8a4b6e8562946793953cc2622b6ebd53cc0b273e8e8f061717693eeb4fd3`
- cropped orthographic glass asset: `ffc4d995edc1abf77b1deac7a3438008942af826f72d12697a5fe3b1d07bb3e1`

Reproducibility sources:

- base build: `build_lesson1_v2.js`
- Bangla terminology patch: `patch_lesson1_v2_bangla_textbook_language.py`
- orthographic glass patch: `patch_lesson1_v2_orthographic_glass_slides.py`

## Internal QA

Completed:

- PPTX ZIP integrity: PASS
- LibreOffice normalization: PASS
- PPTX render: PASS
- slide 26 visual inspection: PASS_WITH_USER_REVIEW_PENDING
- slide 27 visual inspection: PASS_WITH_USER_REVIEW_PENDING
- PDF export: PASS
- PDF render: PASS

`slides_test.py` was attempted but timed out on this image-heavy PPTX. This is recorded as a tooling limitation, not a classroom artifact pass. Rendering and ZIP checks were used for this focused correction; Microsoft PowerPoint user-side smoke test remains mandatory.

## Science QA

PASS at focused correction level.

- Incident ray, refracted ray and emergent ray are labelled in Bangla.
- First and second interfaces are identified.
- Normals are shown at the relevant vertical interfaces.
- Refracted ray inside the denser glass is closer to the normal than the incident/emergent rays.
- Emergent ray is drawn parallel to the incident ray in the parallel-sided slab geometry.
- The bottom statement keeps the textbook guardrail: the rule is geometry-bound and lateral shift may occur.

## Remaining user gate

The user should review the latest `OrthoGlass` PPTX and confirm:

1. Microsoft PowerPoint opens without repair warning;
2. slides 26-27 now look realistic enough;
3. the ray diagram is clear and not perspective-confusing;
4. the overall Lesson 1 visual/motion direction is approved for Lesson 2.

Lesson 2 remains on hold until this gate is passed.
