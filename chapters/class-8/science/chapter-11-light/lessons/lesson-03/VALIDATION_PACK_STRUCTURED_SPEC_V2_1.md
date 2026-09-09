# Lesson 3 R3 Validation Pack Structured Spec — v2.1

Status: **READY_FOR_INTERNAL_BUILD — NOT_USER_REVIEWED — NOT_FULL_DECK**
Date: 2026-09-09
Lesson: Class 8 Science, Chapter 11 — Lesson 3
Topic: উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা

## Purpose

Freeze the Bangla-first student-facing copy and production requirements for the first compact R3 validation pack before any full Lesson 3 deck assembly.

This file is the build authority for the validation pack only. It does not replace the full Lesson 3 storyboard.

## Global build rules

- Visible slide surface must be student-facing only.
- No visible internal IDs, QA status, `FLEX`, teacher-script labels, or workflow language.
- Teacher narration, source notes, board-work suggestions and QA details go to speaker notes/GitHub records.
- Use controlled PptxGenJS assembly with deterministic vector/SVG/native geometry for R3 science visuals.
- Generative AI must not determine ray geometry, eye anatomy topology, labels or corrective-lens direction.
- All R3 slides require semantic QA, individual rendered-pixel QA and Lesson 2 regression checks before user review.
- CORE scope excludes lens formula, sign convention and lens-power calculation.

## Validation pack slide list

### VP-01 — Convex ও Concave lens: parallel rays কী করে?

- Segment: validation / CORE prerequisite
- Learning goal: Students distinguish converging and diverging lens action qualitatively.
- Science risk: R3
- Visual route: deterministic ray diagram, two panels.
- Visible student copy:
  - Title: `Convex ও Concave lens: parallel rays কী করে?`
  - Left label: `Convex lens — rays একদিকে জড়ো হয়`
  - Right label: `Concave lens — rays ছড়িয়ে যায়`
  - Small note: `সরলীকৃত ray model`
- Diagram requirements:
  - Left: incident rays parallel to principal axis; emergent rays converge toward focus on outgoing side.
  - Right: incident rays parallel to principal axis; emergent rays diverge after lens.
  - Direction arrows on real rays.
  - Principal axis visible.
  - No formula or numerical focal length.
- Speaker-note purpose:
  - Connect to Lesson 2 refraction: lens has two curved refracting surfaces.
  - State that concave lens is introduced only as a prerequisite for spectacles.
- Source refs: S18; SC-L3-01; SC-L3-02.
- Applicable regression checks: F-001, F-008, F-009, F-010, F-011, F-012.

### VP-02 — Focus ও focal length

- Segment: validation / CORE prerequisite
- Learning goal: Students locate principal focus and focal length for a convex lens qualitatively.
- Science risk: R3
- Visual route: deterministic ray diagram.
- Visible student copy:
  - Title: `Focus ও focal length`
  - Label: `F = principal focus`
  - Label: `focal length = lens-এর মাঝখান থেকে F পর্যন্ত দূরত্ব`
  - Small note: `স্কেল অনুযায়ী নয়`
- Diagram requirements:
  - Convex lens on vertical line; principal axis horizontal.
  - Parallel incident rays converge at `F` on principal axis after passing lens.
  - Focal length indicator from simplified optical center/thin-lens center to `F`.
  - No sign convention; no equation.
- Speaker-note purpose:
  - Use `focus` and `focal length` only as concepts needed for magnifying glass.
- Source refs: S7, S8, S18; SC-L3-01.
- Applicable regression checks: F-001, F-008, F-009, F-011, F-012.

### VP-03 — Real image বনাম Virtual image

- Segment: validation / CORE vocabulary
- Learning goal: Students distinguish real and virtual image by ray behavior.
- Science risk: R3
- Visual route: deterministic two-panel ray comparison.
- Visible student copy:
  - Title: `Real image বনাম Virtual image`
  - Left label: `Real image: বাস্তব rays মিলিত হয়`
  - Right label: `Virtual image: dashed extension মিলিত বলে মনে হয়`
  - Callout: `দাগকাটা রেখা = সহায়ক construction line, বাস্তব light path নয়`
- Diagram requirements:
  - Real panel: solid rays converge at image point; screen cue optional.
  - Virtual panel: outgoing solid rays diverge; dashed backward extensions meet at apparent image point.
  - Dashed lines visually distinct from real rays.
  - No arrowheads on dashed backward extensions unless explicitly styled as construction indicators.
- Speaker-note purpose:
  - Real image can be caught on a screen; virtual image cannot be caught at the apparent point because rays do not actually meet there.
- Source refs: S8; SC-L3-03.
- Applicable regression checks: F-001, F-008, F-009, F-010, F-011, F-012.

### VP-04 — Magnifying glass: object focal length-এর ভেতরে

- Segment: validation / CORE explanation
- Learning goal: Students explain why a magnifying glass forms a virtual, erect and enlarged image.
- Science risk: R3
- Visual route: deterministic ray construction.
- Visible student copy:
  - Title: `Magnifying glass: object focal length-এর ভেতরে`
  - Key statement: `Object F-এর ভেতরে থাকলে image হয় virtual, erect ও enlarged`
  - Labels: `object`, `F`, `virtual enlarged image`, `দাগকাটা extension`
- Diagram requirements:
  - Convex lens.
  - Object between object-side focus and lens.
  - At least two principal rays from object top.
  - Actual emergent rays diverge on far side.
  - Dashed backward extensions meet on object side.
  - Virtual image is upright and larger than object.
  - No claim that convex lens always magnifies.
- Speaker-note purpose:
  - Emphasize object position; magnifying glass works in this specific arrangement.
- Source refs: NCTB magnifier scope; S7, S8; SC-L3-04.
- Applicable regression checks: F-001, F-008, F-009, F-010, F-011, F-012.

### VP-05 — Human eye: focusing system ও receiving layer

- Segment: validation / CORE anatomy-optics bridge
- Learning goal: Students identify major eye parts by function and avoid the lens-only focusing misconception.
- Science risk: R3
- Visual route: controlled simplified eye cross-section.
- Visible student copy:
  - Title: `Human eye: focusing system ও receiving layer`
  - Key statement: `Cornea বেশি initial bending করে; crystalline lens fine focus করে`
  - Labels: `cornea`, `iris`, `pupil opening`, `crystalline lens`, `retina`, `sclera`, `choroid`, `aqueous humour`, `vitreous humour`
  - Small note: `সরলীকৃত cross-section`
- Diagram requirements:
  - Cornea as curved transparent front surface.
  - Iris surrounding pupil; pupil shown as opening, not solid body.
  - Crystalline lens behind pupil/iris region.
  - Retina lining posterior inner wall.
  - Aqueous humour in anterior chamber; vitreous humour in large posterior cavity.
  - Labels point accurately and do not overlap anatomy.
  - Light path toward retina may be shown only if it does not obscure anatomy.
- Speaker-note purpose:
  - Group parts functionally instead of isolated memorization.
  - Mention NCTB eye scope and current-science clarification about cornea/lens roles.
- Source refs: NCTB eye scope; S9, S16, S17; SI-11-006; SC-L3-05; SC-L3-07.
- Applicable regression checks: F-004, F-008, F-009, F-010, F-011, F-012.

### VP-06 — Accommodation: focus করতে lens সরে না, shape বদলায়

- Segment: validation / CORE explanation
- Learning goal: Students understand accommodation as lens-shape/optical-power adjustment with fixed retina distance.
- Science risk: R3
- Visual route: deterministic two-state eye comparison.
- Visible student copy:
  - Title: `Accommodation: focus করতে lens সরে না, shape বদলায়`
  - Left label: `দূরের বস্তু`
  - Right label: `কাছের বস্তু`
  - Key statement: `Retina স্থির থাকে; crystalline lens-এর shape/optical power বদলায়`
  - Small note: `সরলীকৃত চিত্র`
- Diagram requirements:
  - Same eye outline/retina position in both states.
  - Crystalline lens curvature differs between near/far states.
  - No lens translation toward/away from retina.
  - Rays/focus shown only if they remain visually clear and scientifically consistent.
  - Cornea/lens focusing hierarchy not contradicted.
- Speaker-note purpose:
  - Explicitly reject the camera-like misconception that the eye moves its lens backward/forward to focus.
- Source refs: S17; SI-11-006; SI-11-007; SC-L3-06.
- Applicable regression checks: F-005, F-008, F-009, F-010, F-011, F-012.

### VP-07 — Spectacles: myopia ও hyperopia correction ধারণা

- Segment: validation / supplementary support for NCTB outcome gap
- Learning goal: Students know the qualitative corrective-lens direction for myopia and hyperopia.
- Science risk: R3
- Visual route: deterministic paired correction schematic.
- Visible student copy:
  - Title: `Spectacles: myopia ও hyperopia correction ধারণা`
  - Left label: `Myopia → diverging / concave lens`
  - Right label: `Hyperopia → converging / convex lens`
  - Small note: `NCTB outcome আছে; body explanation নেই — এখানে সংক্ষিপ্ত support idea`
- Diagram requirements:
  - Myopia correction uses diverging/concave spectacle lens before eye.
  - Hyperopia correction uses converging/convex spectacle lens before eye.
  - Corrected focus lands on retina.
  - If uncorrected focus is shown: myopia in front of retina; hyperopia behind retina in simplified near-object case.
  - No lens-power calculation.
  - Corrective ray direction must not reverse the defect.
- Speaker-note purpose:
  - Mark spectacles as supplementary because the NCTB chapter opener lists the outcome but the body omits the explanation.
- Source refs: NCTB learning outcome; S10, S18; SI-11-001; SC-L3-08; SC-L3-09; SC-L3-10.
- Applicable regression checks: F-001, F-005, F-008, F-009, F-010, F-011, F-012.

## Validation pack QA hard gate

Before showing the validation pack to the user:

1. render every slide individually to PNG;
2. inspect every R3 slide at rendered pixel level, not montage only;
3. verify all semantic contracts SC-L3-01 through SC-L3-11 as applicable;
4. apply the active prebuild regression checklist;
5. proofread all visible Bangla labels after render;
6. perform adversarial student-inference review;
7. run a second internal QA pass after any repair;
8. record the QA result in `production/`.

Current status: **SPEC_READY_FOR_INTERNAL_BUILD**.
