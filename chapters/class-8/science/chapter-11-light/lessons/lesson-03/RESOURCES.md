# Resources — Lesson 3: উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা

Status: RESOURCE_MAPPING_DRAFT_COMPLETE
Date: 2026-09-05
Canonical lesson plan: `LESSON_PLAN.md`
Source map: `../../SOURCE_MAP.md`

Purpose: identify every nontrivial visual/resource needed by the Lesson 3 storyboard, prefer authoritative/reference-grade sources, and require static/offline fallbacks for all classroom-critical visuals.

## Resource records

### R3-01 — Converging vs diverging lens comparison

- Lesson: 3
- Target slides: `L3-S02`, `L3-S03`
- Type: deterministic scientific diagram
- Topic/purpose: compare convex/converging and concave/diverging lens action; introduce focus/focal-length language.
- Visual purpose: Compare / Explain
- Source/creator/organization: custom redraw grounded in OpenStax thin-lens treatment (`S18`) and magnifier/lens sources (`S7`, `S8`).
- Existing or custom: custom redraw preferred.
- Why selected: Bangla labels and ray geometry must be large, simple and projector-safe; stock diagrams often add unnecessary notation.
- Scientific suitability: high if final ray directions/focal points are independently checked.
- Age/class suitability: high; qualitative only.
- Planned classroom time: 6 min across S02–S03.
- Reuse mode: custom vector/SVG or renderer-native shape diagram.
- Visible attribution required?: not for a fully original redraw; source record remains in GitHub.
- License/usage status: no copied artwork required.
- Accessibility note: distinguish converging/diverging by ray direction and labels, not color alone.
- Static/offline fallback: static PNG/SVG embedded in deck/PDF.
- Fallback location/reference: lesson asset folder after build.
- QA status: SPECIFIED — actual diagram validation pending.

### R3-02 — Image vocabulary mini-panels

- Lesson: 3
- Target slides: `L3-S04`, `L3-S05`
- Type: conceptual comparison diagram
- Topic/purpose: distinguish real vs virtual, erect vs inverted, magnified vs reduced without introducing lens-formula calculations.
- Visual purpose: Compare / Explain
- Source/creator/organization: custom schematic grounded in OpenStax image-formation source `S8`.
- Existing or custom: custom.
- Why selected: avoids dense textbook ray-construction notation while preserving the specific vocabulary needed for magnifier/eye/camera lessons.
- Scientific suitability: high if virtual-image panel clearly uses dashed extensions and real-image panel uses actual converging rays.
- Age/class suitability: high.
- Planned classroom time: 5 min.
- Reuse mode: custom vector/static infographic.
- Visible attribution required?: no for original schematic.
- License/usage status: no copied artwork required.
- Accessibility note: include text labels `বাস্তব রশ্মি` / `পেছনের extension` and orientation arrows.
- Static/offline fallback: primary resource is static.
- QA status: SPECIFIED — actual diagram validation pending.

### R3-03 — Magnifying-glass ray construction

- Lesson: 3
- Target slide: `L3-S06`
- Type: deterministic scientific ray diagram
- Topic/purpose: show a convex lens used with the object inside the focal length, producing an upright, enlarged virtual image.
- Visual purpose: Explain / Sequence
- Source/creator/organization: custom redraw grounded in OpenStax `Simple Magnifier` (`S7`) and image-formation source `S8`.
- Existing or custom: custom redraw.
- Why selected: this is a high-risk scientific visual; exact ray direction and virtual-image placement matter more than decorative style.
- Scientific suitability: high after geometry QA.
- Age/class suitability: high if only two principal rays and one virtual-image outline are shown.
- Planned classroom time: 5 min.
- Reuse mode: custom SVG/static stages.
- Visible attribution required?: no for original redraw.
- License/usage status: no copied artwork required.
- Accessibility note: solid actual rays, dashed backward extensions, explicit `F` marks and object inside focal length.
- Static/offline fallback: staged static copies if animation/reveal is unreliable.
- QA status: SPECIFIED — final ray geometry must be independently inspected.

### R3-04 — Human-eye cross-section, functional-group version

- Lesson: 3
- Target slides: `L3-S07`–`L3-S11`, `L3-F01`
- Type: anatomical/optical diagram
- Topic/purpose: teach the eye by functional groups while keeping the cornea/lens focusing roles scientifically current.
- Visual purpose: Locate / Explain / Sequence
- Source/creator/organization: custom simplified redraw informed by OpenStax eye sources `S9`, `S16`, `S17` and checked against the visible NCTB eye page for syllabus labels.
- Existing or custom: custom simplified redraw preferred.
- Why selected: textbook scans are not projector-optimal; an original clean cross-section allows large Bangla labels and avoids implying that the crystalline lens alone performs all focusing.
- Scientific suitability: high after anatomy/optics label QA.
- Age/class suitability: high if labels are grouped rather than shown all at once.
- Planned classroom time: 16 min across S07–S11; FLEX labelling 4 min.
- Reuse mode: original vector illustration / renderer-native diagram; no photorealism required.
- Visible attribution required?: no for original redraw; source record retained.
- License/usage status: no copied artwork required.
- Accessibility note: functional groups must be separable by labels/patterns, not color alone; retina/cornea/lens/pupil need back-of-room readability.
- Static/offline fallback: static staged eye diagrams.
- QA status: SPECIFIED — label placement/scientific validation pending.

### R3-05 — Accommodation sequence

- Lesson: 3
- Target slide: `L3-S10`
- Type: two-state optical comparison
- Topic/purpose: show that the eye focuses at different distances by changing crystalline-lens shape/optical power, while retina distance is essentially fixed in the simplified model.
- Visual purpose: Compare / Explain
- Source/creator/organization: custom schematic grounded in OpenStax `The Eye` (`S17`).
- Existing or custom: custom.
- Why selected: prevents the eye-camera misconception that the eye focuses by moving the lens toward/away from the retina.
- Scientific suitability: high after final check.
- Age/class suitability: high; qualitative only.
- Planned classroom time: 4 min.
- Reuse mode: custom two-panel static/vector visual.
- Visible attribution required?: no for original redraw.
- License/usage status: no copied artwork required.
- Accessibility note: use `দূরের বস্তু` / `কাছের বস্তু` labels and shape difference; no numerical diopters.
- Static/offline fallback: primary resource is static.
- QA status: SPECIFIED.

### R3-06 — Spectacles: minimum correction concept

- Lesson: 3
- Target slide: `L3-S12`
- Type: conceptual correction diagram
- Topic/purpose: explain, at minimal level, why a diverging lens is used for myopia and a converging lens for hyperopia.
- Visual purpose: Compare / Explain
- Source/creator/organization: custom schematic grounded in OpenStax `Vision Correction` (`S10`) and thin-lens source `S18`.
- Existing or custom: custom.
- Why selected: NCTB declares a spectacles outcome but omits the body subsection; a concise scientifically verified repair is needed without inflating scope.
- Scientific suitability: high if focus-relative-to-retina language is correct.
- Age/class suitability: moderate/high; keep CORE conceptual and move detailed pair to FLEX if pacing requires.
- Planned classroom time: 4 min CORE.
- Reuse mode: simple custom pair of ray sketches.
- Visible attribution required?: no for original redraw.
- License/usage status: no copied artwork required.
- Accessibility note: label `myopia → diverging lens` and `hyperopia → converging lens`; do not rely on plus/minus lens symbols alone.
- Static/offline fallback: primary resource is static.
- QA status: SPECIFIED — source-gap label mandatory.

### R3-07 — Eye labelling practice

- Lesson: 3
- Target slide: `L3-F01`
- Type: practice diagram
- Topic/purpose: reinforce major eye labels/functions using a large unlabeled/partly labelled version of R3-04.
- Visual purpose: Practice / Locate
- Source/creator/organization: custom derivative of R3-04.
- Existing or custom: custom.
- Why selected: converts anatomy from passive memorization into retrieval.
- Scientific suitability: inherits R3-04 after QA.
- Age/class suitability: high.
- Planned classroom time: 4 min FLEX.
- Reuse mode: static question/answer states.
- Visible attribution required?: no.
- Static/offline fallback: primary resource is static.
- QA status: SPECIFIED.

### R3-08 — Corrective-lens extension pair

- Lesson: 3
- Target slide: `L3-F02`
- Type: optional detailed ray comparison
- Topic/purpose: provide a slightly fuller myopia/hyperopia correction visual if class pace allows.
- Visual purpose: Compare / Practice
- Source/creator/organization: custom, grounded in S10/S18.
- Existing or custom: custom.
- Why selected: makes the CORE one-sentence correction principle visually concrete without making it mandatory.
- Scientific suitability: high after validation.
- Age/class suitability: moderate; FLEX only.
- Planned classroom time: 4 min FLEX.
- Reuse mode: static side-by-side diagram.
- Visible attribution required?: no.
- Static/offline fallback: primary resource is static.
- QA status: SPECIFIED.

## Resource-selection conclusions

- CORE Lesson 3 can be delivered completely offline.
- No external video or simulation is required.
- Because lens rays and eye anatomy are science-sensitive, deterministic custom diagrams are preferred over decorative AI-generated scientific artwork.
- OpenStax sources are used as authoritative scientific references; final visuals should be original simplified redraws unless a separately licensed figure is intentionally reused with attribution.
- The spectacles material must remain visibly marked as **supplementary current-science support for an NCTB learning-outcome gap**.

## Build/QA checklist before content freeze

- [ ] R3-01 converging/diverging ray geometry checked.
- [ ] R3-02 real/virtual dashed-extension convention checked.
- [ ] R3-03 magnifier object is inside focal length and virtual image geometry is correct.
- [ ] R3-04 eye anatomy labels and cornea/lens roles verified.
- [ ] R3-05 accommodation does not imply lens-to-retina translation.
- [ ] R3-06 spectacles pair scientifically checked and labelled supplementary.
- [ ] all Bangla labels are projector-readable after rendering.
- [ ] all meaning remains understandable without color.
- [ ] static resources are included in PDF fallback.
