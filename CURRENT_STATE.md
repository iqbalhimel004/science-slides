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
- Visual asset generation is Canva/external-first and controlled-science-overlay driven (`VISUAL_ASSET_ROUTING.md`; D-040 refinement).
- Student-facing language is Bangla-first by `CLASSROOM_LANGUAGE_POLICY.md`.
- Physical apparatus visuals follow `PHYSICAL_VISUAL_REALISM_POLICY.md`.
- `ARTIFACT_PERSISTENCE.md` controls reproducibility.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — LESSON_2_V1_BUILT_INTERNAL_QA_PASS — USER_POWERPOINT_AND_VISUAL_REVIEW_PENDING — LESSON_3_ON_HOLD**

## Lesson 1 baseline

Approved production direction:

- controlled PptxGenJS deck authoring;
- Bangla-first textbook-facing language;
- staged prediction/reveal where it replaces fragile animation;
- simulation links only when useful, with static fallback;
- realistic physical-object imagery where appropriate;
- deterministic science overlays for rays, normals, angles, labels and geometry;
- Microsoft PowerPoint compatibility gate;
- verified PDF fallback.

## Lesson 2 v1 — built

Lesson:
`প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন`

Current user-facing artifacts:

- `Class8_Science_Ch11_Lesson2_ApparentPosition_TIR_PPTX_SAFE.pptx`
- `Class8_Science_Ch11_Lesson2_ApparentPosition_TIR_PPTX_SAFE.pdf`

Fingerprints:

- PPTX: `157b5f8ae2fb21a26dbf514d42ca149c9079c1fb42502327de841a6c8d250ba5`
- PDF: `ab639041ca653ec3b0de7c645872869cdaec0bd16a2064d333566d66b2f31212`

Durable records:

- `lessons/lesson-02/production/DYNAMIC_MANIFEST.md`
- `lessons/lesson-02/production/BUILD_SPEC_V1_2026-09-06.md`
- `lessons/lesson-02/production/PRODUCTION_QA_V1_2026-09-06.md`

## Lesson 2 implementation highlights

- 22 physical slides;
- retrieval predict/reveal;
- actual vs apparent position with backward ray tracing;
- pencil/stick, coin and fish apparent-position examples;
- mirage with gradual refractive-index/temperature-gradient model;
- increasing incidence-angle predict/reveal;
- critical angle with `r=90°` and reflected ray present;
- explicit separation of `i=C` from TIR;
- TIR two-condition slide;
- three-state `i<C / i=C / i>C` hinge;
- optical-fibre repeated-TIR explanation;
- FLEX simulation launch slide;
- FLEX TIR practice reveal.

## Visual asset routing in Lesson 2

No ChatGPT-native image generation was used.

Current v1 mainly uses deterministic PptxGenJS/SVG-style concept visuals. This is intentional where exact ray geometry is the teaching priority.

If user review finds a physical-object scene too schematic, replace only that base visual under `VISUAL_ASSET_ROUTING.md`:

1. verified existing real/open/licensed image; or
2. connected Canva/Canva AI/Canva Pro visual;
3. keep scientific overlays deterministic in PptxGenJS.

## Internal QA

- LibreOffice normalization: PASS
- `slides_test.py`: PASS — no overflow
- PPTX render: PASS
- montage inspection: PASS at prototype level
- PDF export: PASS
- PDF pages: 22
- PDF encrypted: no
- PDF render: PASS
- no severe unintended text overlap remains

## Remaining hard gates before Lesson 3

User should review Lesson 2 v1 and confirm:

1. Microsoft PowerPoint opens without repair warning;
2. staged reveal sequence feels natural;
3. simulation links open;
4. Bangla terminology is acceptable;
5. apparent-position, mirage, critical-angle/TIR and optical-fibre visuals are clear;
6. any physical-object visual that still feels too schematic is identified for Canva/external realistic replacement;
7. overall Lesson 2 UI/visual standard is accepted.

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

## Next authorized action

**User PowerPoint + visual review of Lesson 2 v1.**

Do not start Lesson 3 full production until Lesson 2 is approved or revised to approval.
