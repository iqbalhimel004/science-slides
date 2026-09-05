# Resource / Asset Map — Lesson 1

Date: 2026-09-06
Lesson: `আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম`
Status: RESOURCE_MAP_DRAFT_COMPLETE

All CORE resources must work offline. High-risk ray diagrams should be deterministic/custom and checked after rendering.

## R1-01 — Dark vs illuminated seeing hook

- Target slides: L1-S01, L1-S02
- Type: image/process visual
- Purpose: establish that vision requires light reaching the eye
- Visual purpose: Motivate / Sequence
- Source mode: custom/generated or legally sourced simple visual
- Scientific guardrail: emitted/reflected light must be shown reaching the eye; do not begin eye anatomy here
- Offline fallback: primary static asset
- QA status: SPEC_COMPLETE — BUILD_QA_PENDING

## R1-02 — Light definition / chapter-relevant properties schematic

- Target slides: L1-S03, L1-S04
- Type: schematic
- Purpose: show a minimal modern description of light and only the properties needed by the chapter
- Visual purpose: Explain / Locate
- Source basis: S11/S12 for light context; S2/S3 for geometric-optics/refraction context
- Guardrail: photon note remains non-assessed; no decorative quantum imagery implying photons are tiny material balls
- Offline fallback: primary static asset
- QA status: SPEC_COMPLETE — WORDING/VISUAL_QA_PENDING

## R1-03 — Optical medium/transmission recap

- Target slide: L1-S05
- Type: comparison cards
- Purpose: rapid transparent/translucent/opaque recognition and optical-medium examples
- Visual purpose: Compare / Explain
- Source mode: custom schematic
- Guardrail: recap only; avoid turning into a separate content block
- Offline fallback: primary static asset
- QA status: SPEC_COMPLETE

## R1-04 — Pencil-in-water live demo + static fallback

- Target slide: L1-S06
- Type: live demonstration + image fallback
- Purpose: phenomenon-first observation of refraction
- Visual purpose: Observe / Predict
- Materials: transparent glass/beaker, water, pencil/straw
- Existing or custom: classroom live demo
- Static fallback: custom/licensed high-contrast photo showing partial immersion
- Guardrail: students observe before speed-change explanation
- QA status: CLASSROOM_SETUP_SIMPLE — FALLBACK_ASSET_PENDING

## R1-05 — Interface/normal/ray-vocabulary diagram

- Target slides: L1-S07, L1-S08
- Type: deterministic ray diagram
- Purpose: boundary, point of incidence, normal, incident/refracted ray, `i`, `r`; reflection vs refraction
- Visual purpose: Locate / Explain / Compare
- Source basis: NCTB pp.109–110 + S2/S3
- Guardrail: angles measured from normal, not surface
- Offline fallback: primary static staged versions
- QA status: SPEC_COMPLETE — RAY/LABEL_QA_PENDING

## R1-06 — Speed-change / optical-density / normal-incidence comparison

- Target slides: L1-S09, L1-S10
- Type: comparison diagram
- Purpose: qualitative causal bridge and normal-incidence exception
- Visual purpose: Compare / Explain
- Source basis: S2/S3/S13; SI-11-002
- Guardrails:
  - optical density ≠ mass density
  - normal incidence changes speed but not ray direction
  - no unsourced numeric material example
- Offline fallback: primary static asset
- QA status: SPEC_COMPLETE — SCIENTIFIC_DIAGRAM_QA_PENDING

## R1-07 — Rarer→denser / denser→rarer paired ray diagrams

- Target slides: L1-S11, L1-S12
- Type: deterministic ray diagram
- Purpose: bending-direction prediction
- Visual purpose: Compare / Predict / Practice
- Source basis: NCTB pp.110–111 + S2/S3
- Guardrail: statements apply to oblique incidence; retain normal-incidence exception
- Offline fallback: primary static asset
- QA status: SPEC_COMPLETE — RAY_GEOMETRY_QA_PENDING

## R1-08 — Parallel-sided glass slab FLEX diagram

- Target slide: L1-F01
- Type: deterministic diagram / optional apparatus demo
- Purpose: show incident/refracted/emergent rays and geometry-bound equality/parallel emergence
- Visual purpose: Explain / Practice
- Source basis: NCTB pp.110–111; S5/S6; SI-11-003
- Guardrail: equal incident/emergent angle only in the demonstrated parallel-sided slab geometry; do not generalize
- Offline fallback: primary static diagram
- QA status: SPEC_COMPLETE — GEOMETRY_QA_PENDING

## R1-09 — PhET Bending Light optional support

- Target: FLEX/teacher support only
- Type: simulation
- Purpose: optional dynamic visualization of refraction
- Source/creator: PhET Interactive Simulations, University of Colorado Boulder
- URL/reference: `https://phet.colorado.edu/en/simulations/bending-light`
- Reuse mode: official online simulation/link
- Planned classroom role: optional only; not required for CORE
- Static fallback: R1-05/R1-06/R1-07 staged diagrams
- QA status: OPTIONAL — LINK_CHECK_LATER

## Resource build priority

1. R1-05 ray vocabulary
2. R1-06 normal/oblique + optical-density clarification
3. R1-07 bending-rule pair
4. R1-04 pencil demo fallback
5. R1-08 slab FLEX
6. R1-01 seeing hook
7. R1-02 light-properties schematic
8. R1-03 medium recap
9. R1-09 optional simulation

## Final resource rule

Do not freeze Lesson 1 until:
- all ray directions and angle labels are visually checked;
- optical-density wording remains qualitative and scientifically safe;
- normal-incidence case is explicit;
- slab geometry is not overgeneralized;
- the photon note does not dominate or mislead;
- all CORE resources work without internet.
