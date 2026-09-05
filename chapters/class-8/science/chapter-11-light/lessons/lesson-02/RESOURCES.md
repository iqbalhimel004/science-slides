# Resources / Assets — Lesson 2

Lesson: `প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন`
Date: 2026-09-05
Status: RESOURCE_MAPPING_DRAFT_COMPLETE

Purpose: identify trusted external resources and deterministic/custom visuals before rendering. CORE must remain fully teachable offline.

## R2-01 — Apparent-position ray construction

- Lesson: 2
- Target slides: `L2-S02`–`L2-S06`
- Type: custom diagram sequence
- Topic/purpose: actual position vs apparent position; backward extension of refracted rays; stick/coin/fish applications
- Visual purpose: Explain / Sequence / Apply
- Source basis: NCTB printed pp.111–112; `SOURCE_MAP.md` S2/S3; coverage B11-012
- Existing or custom: custom redraw
- Why selected: a single consistent ray-visual grammar avoids switching between unrelated textbook/example drawings and makes the virtual/apparent-position idea visible.
- Scientific suitability: must show real rays reaching the eye and dashed backward extensions locating the apparent position; dashed lines are not actual light paths.
- Age/class suitability: high; concrete Class-8 visual.
- Planned classroom time: distributed across 10–13 min
- Reuse mode: custom redraw
- Visible attribution required?: no external visual reused; source provenance remains in storyboard/notes.
- License/usage status: project-created diagram.
- Accessibility note: use labels/arrows/line style, not color alone, to distinguish real rays from backward extensions.
- Static/offline fallback: the diagram itself is static; progressive reveal may be replaced by staged static copies.
- QA status: SPECIFIED — BUILD/RENDER QA PENDING

## R2-02 — Mirage temperature-gradient diagram

- Lesson: 2
- Target slide: `L2-S07`
- Type: custom scientific diagram
- Topic/purpose: explain inferior mirage qualitatively using temperature/refractive-index gradient and progressive ray bending.
- Visual purpose: Explain / Sequence
- Source basis: `SOURCE_ISSUES.md` SI-11-005; `SOURCE_MAP.md` S20; OpenStax refraction treatment.
- Existing or custom: custom redraw preferred.
- Why selected: avoids the misleading single hard mirror-like air boundary often implied by simplified textbook diagrams.
- Scientific suitability:
  - show hotter air near ground and cooler air above;
  - show a ray curving/stepping progressively through the gradient toward the observer;
  - show the eye extrapolating the arriving ray backward to a virtual image below/near the road;
  - do not draw an actual water surface.
- Age/class suitability: high if kept qualitative; no gradient-index mathematics.
- Planned classroom time: 4 min
- Reuse mode: custom redraw
- Visible attribution required?: no external figure reused.
- License/usage status: project-created diagram.
- Accessibility note: label `বাস্তব রশ্মির পথ` and `চোখের কল্পিত backward extension`; do not encode temperature solely by color.
- Static/offline fallback: static diagram is primary.
- QA status: SPECIFIED — BUILD/RENDER QA PENDING

## R2-03 — Critical-angle / TIR three-state sequence

- Lesson: 2
- Target slides: `L2-S08`–`L2-S11`
- Type: custom ray-diagram sequence
- Topic/purpose: connect increasing incidence angle to `i < C`, `i = C`, `i > C` behavior.
- Visual purpose: Sequence / Predict / Practice
- Source basis: NCTB printed pp.112–113; `SOURCE_MAP.md` S4; `SOURCE_ISSUES.md` SI-11-002 as a general angle/normal guardrail.
- Existing or custom: custom redraw
- Why selected: the three states need exact geometry and consistent normal/angle labels; deterministic redraw is safer than decorative AI imagery.
- Scientific suitability:
  - ray travels from higher-index/optically denser medium toward lower-index/rarer medium;
  - `i < C`: refracted ray exists and bends away from normal;
  - `i = C`: refracted ray is along the interface, `r = 90°`;
  - `i > C`: total internal reflection; no transmitted refracted ray in the ideal geometric-optics model.
- Age/class suitability: high.
- Planned classroom time: about 16 min across sequence + hinge.
- Reuse mode: custom redraw
- Visible attribution required?: no external visual reused.
- License/usage status: project-created diagram.
- Accessibility note: all states explicitly titled; angle labels and arrowheads visible; no meaning depends on color.
- Static/offline fallback: three standalone static panels.
- QA status: SPECIFIED — BUILD/RENDER QA PENDING

## R2-04 — Optical-fibre cutaway

- Lesson: 2
- Target slides: `L2-S12`–`L2-S13`
- Type: custom schematic
- Topic/purpose: repeated TIR guiding light through a fibre; connect to medical and communication uses.
- Visual purpose: Explain / Apply
- Source basis: NCTB printed p.113; `SOURCE_MAP.md` S4; OpenStax total-internal-reflection/fibre-optics treatment.
- Existing or custom: custom redraw
- Why selected: simple cutaway can preserve scientifically essential ray directions without unnecessary cable engineering detail.
- Scientific suitability:
  - show repeated internal reflections in the guiding region;
  - optional small supplementary label: real fibres use a higher-index core with lower-index cladding to support guidance; do not assess detailed core/cladding engineering in CORE;
  - do not depict light as stored inside the fibre.
- Age/class suitability: high.
- Planned classroom time: 6 min
- Reuse mode: custom redraw
- Visible attribution required?: no external figure reused.
- License/usage status: project-created diagram.
- Accessibility note: pair arrows with labels; avoid glow-only representation.
- Static/offline fallback: static cutaway is primary.
- QA status: SPECIFIED — BUILD/RENDER QA PENDING

## R2-05 — PhET `Bending Light`

- Lesson: 2
- Target slide: `L2-F01`
- Type: simulation
- Topic/purpose: teacher-controlled visual check of refraction, critical-angle approach and TIR.
- Visual purpose: Predict / Explain / Practice
- Source/creator/organization: PhET Interactive Simulations, University of Colorado Boulder
- URL/reference: `https://phet.colorado.edu/en/simulations/bending-light`
- Existing or custom: existing trusted resource
- Why selected: directly supports boundary/normal/refraction/TIR visualization and lets the teacher vary incidence angle interactively.
- Scientific suitability: high for qualitative refraction/TIR; do not use it to introduce numerical Snell-law calculations in CORE.
- Age/class suitability: high under teacher control.
- Planned classroom time: 4 min FLEX only.
- Reuse mode: live source playback/link; no unauthorized derivative needed.
- Visible attribution required?: Yes when sharing/redistributing simulation or derivative. Preferred attribution: `Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC BY-NC 4.0 (https://phet.colorado.edu).`
- License/usage status: PhET states regular HTML simulations are CC BY-NC 4.0 and may be used free by K–12/higher-education students and educators for non-commercial classroom use with attribution. Verified 2026-09-05 from PhET licensing page.
- Accessibility note: teacher narrates what is changing; do not rely on color alone for ray identity.
- Static/offline fallback: `R2-03` three-state static sequence. PhET also documents offline access/download options, but the lesson does not depend on them.
- QA status: URL/LICENSE VERIFIED — CLASSROOM DEVICE TEST PENDING

## R2-06 — Textbook-style TIR practice redraw

- Lesson: 2
- Target slide: `L2-F02`
- Type: custom practice diagram
- Topic/purpose: ray classification / short-answer or CQ-style application based on the chapter exercise geometry.
- Visual purpose: Practice / Predict
- Source basis: NCTB printed pp.117–118 / PDF pp.122–123; coverage C11-018/C11-019.
- Existing or custom: custom redraw from the scientific geometry rather than copying the page design.
- Why selected: projector-safe labels and simplified geometry improve readability while preserving exam-facing reasoning.
- Scientific suitability: final labels/directions must be checked against the visible source page and current TIR rules.
- Age/class suitability: high.
- Planned classroom time: 4 min FLEX.
- Reuse mode: custom redraw.
- Visible attribution required?: source provenance in notes; do not present as an official NCTB reproduction.
- License/usage status: project-created diagram based on underlying scientific problem structure.
- Static/offline fallback: static slide is primary.
- QA status: SPECIFIED — SOURCE-PAGE/RENDER QA PENDING

## Resource-level decisions

1. No CORE slide depends on internet access.
2. PhET is FLEX only and has a complete static fallback.
3. Mirage, critical-angle/TIR and optical-fibre visuals should be deterministic scientific diagrams, not unconstrained generative imagery.
4. If progressive reveal is unreliable in the selected renderer, use sequential static states without changing the lesson timing.
5. All custom ray diagrams require arrow-direction, normal, angle and medium-label QA after rendering.
