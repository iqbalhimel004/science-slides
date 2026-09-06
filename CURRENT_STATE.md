# Current State

Last updated: 2026-09-06

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Durable rules

- NCTB controls syllabus/exam context, not automatic scientific truth.
- Material science is checked against current authoritative sources.
- **Finish -> record -> then continue.**
- Renderer route is locked by `D-036` / `RENDERER_ROUTING.md`.
- PowerPoint smoke testing is a hard compatibility gate (`D-037`).
- Dynamic engagement and attractive classroom UI are hard production gates (`D-038`).
- Simulation selection is multi-source and concept-fit driven, not PhET-only (`D-039`).
- Student-facing language is Bangla-first by `CLASSROOM_LANGUAGE_POLICY.md`.
- Physical apparatus visuals follow `PHYSICAL_VISUAL_REALISM_POLICY.md`.
- Physical realism must never reduce science-diagram clarity; for optics, straight-on/orthographic physical views are preferred when ray geometry must be overlaid.
- `ARTIFACT_PERSISTENCE.md` controls reproducibility.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical path:
`chapters/class-8/science/chapter-11-light/`

Current status:

**CONTENT_STORYBOARD_FROZEN — RT_01_COMPLETE — LESSON_1_ORTHOGRAPHIC_REALGLASS_CORRECTION_BUILT — USER_REVIEW_PENDING — LESSON_2_ON_HOLD**

## Latest user feedback — accepted and implemented

The prior realistic 3D glass-slab version was still rejected because the physical perspective of the glass did not align with the 2D ray geometry.

Correction implemented:

- replaced the perspective glass with a straight-on/orthographic photorealistic glass slab;
- retained deterministic ray overlays;
- first and second slab faces are now visually parallel;
- normals are drawn perpendicular to the vertical interfaces;
- incident, refracted and emergent rays share the same 2D optical plane;
- emergent ray is parallel to the incident ray for the parallel-sided slab construction;
- Bangla-first labels and the staged prediction -> answer pair are preserved.

## Current Lesson 1 user-facing artifacts

Use these latest files:

- PPTX: `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_OrthoGlass_PPTX_SAFE.pptx`
- PDF: `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_OrthoGlass_PPTX_SAFE.pdf`

Fingerprints:

- PPTX: `b626024aee467d1635d6d5bde3757e27c2360252b21dc7ea1e5dd0e6bb5df925`
- PDF: `bfbf8a4b6e8562946793953cc2622b6ebd53cc0b273e8e8f061717693eeb4fd3`
- orthographic glass crop asset: `ffc4d995edc1abf77b1deac7a3438008942af826f72d12697a5fe3b1d07bb3e1`

Latest QA record:

`chapters/class-8/science/chapter-11-light/lessons/lesson-01/production/PRODUCTION_QA_V2_ORTHOGLASS_2026-09-06.md`

Reproducibility patch:

`chapters/class-8/science/chapter-11-light/lessons/lesson-01/production/patch_lesson1_v2_orthographic_glass_slides.py`

## Lesson 1 current state

### Science/content

PASS at focused correction level.

### Dynamic/interaction

Retained:

- prediction/reveal states;
- staged ray construction;
- classroom activity slide;
- PhET Bending Light primary simulation link;
- Physics Classroom Refraction Interactive alternate link;
- deterministic static fallbacks.

### Orthographic glass correction

Slides 26-27 now use a straight-on realistic glass slab with deterministic 2D optics geometry rather than a perspective photograph with mismatched ray overlays.

Internal checks:

- PPTX ZIP integrity: PASS;
- LibreOffice normalization: PASS;
- PPTX render: PASS;
- slide 26 visual inspection: PASS_WITH_USER_REVIEW_PENDING;
- slide 27 visual inspection: PASS_WITH_USER_REVIEW_PENDING;
- PDF export/render: PASS.

`slides_test.py` timed out on the image-heavy corrected deck; this is recorded as a tooling limitation rather than silently treated as PASS.

## Remaining hard gates before Lesson 2

User should review the latest `OrthoGlass` PPTX and confirm:

1. Microsoft PowerPoint opens it without repair warning;
2. slides 26-27 are now realistic and scientifically clear;
3. the staged reveal order remains acceptable;
4. the Lesson 1 visual/motion direction is approved as the baseline for Lesson 2.

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

## Next authorized action

**User review of Lesson 1 orthographic-real-glass corrected v2 artifact.**

Do not start Lesson 2 full production until this is approved or revised to approval.
