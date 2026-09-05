# Final Pre-Freeze QA — Class 8 Science, Chapter 11: আলো

Date: 2026-09-06
Status: FINAL_G1_G7_PASS — CONTENT_STORYBOARD_FREEZE_APPROVED

## Inputs

- full chapter analysis
- approved four-lesson split
- Gate A raw review + reconciliation
- all four lesson plans
- all four storyboards
- all four resource maps
- coverage matrix
- source issues + source map
- chapter-wide storyboard audit
- targeted Gate B raw review + reconciliation

## Final gate results

| Gate | Result | Evidence / remaining note |
|---|---|---|
| G1 Curriculum / scope | PASS | All NCTB body topics C11-001–C11-021 mapped or explicitly treated as source gap/supplement. |
| G2 Critical source verification | PASS_FOR_FREEZE | Major science/source issues reconciled; Gate B introduced no unresolved scientific blocker. |
| G3 Scientific accuracy | PASS_FOR_SPEC | Normal incidence, mirage gradient, critical angle/TIR, lens/magnifier, eye, spectacles, camera/film context and analogy limits are controlled. Actual rendered ray/anatomy visuals still require visual QA. |
| G4 Timing realism | PASS | L1 50, L2 52, L3 50, L4 revised to 50 planned minutes. All retain 8–10 min contingency. |
| G5 Pedagogy / cognitive load | PASS | Retrieval, progressive explanation, hinge checks, misconception correction, guided practice and exits retained. Gate B reduced L4 density. |
| G6 Resource / fallback suitability | PASS_FOR_SPEC | CORE remains offline-capable; online interactions are optional/FLEX; high-risk visuals are custom/deterministic. |
| G7 Storyboard readiness | PASS | Stable slide IDs, content, timing, visual intent, sources, student response and fallback specifications exist for all four lessons. |

## Gate B reconciliation summary

- `B-01` L4 timing/density: ACCEPTED with corrected slide references. Dedicated digital CORE slide removed; digital contrast reduced to one line on film-chemistry slide; chapter map merged with final exit. L4 becomes 42 CORE + 8 FLEX = 50 min.
- `B-02` reflected ray at critical angle: PARTIAL ACCEPT. L2-S09/R2-03 now require a reflected ray plus grazing refracted ray at `i=C`, without introducing reflected-power fractions.
- `B-03` magnifier dashed extensions: REJECTED because L3-S06/R3-03 already explicitly required backward dashed extensions.

## Frozen chapter timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

Chapter planned CORE + FLEX total: **202 minutes**.

## Content/storyboard freeze meaning

The following are now frozen unless a later renderer/build QA reveals a material scientific or usability defect:

- four-lesson boundaries;
- slide IDs and instructional sequence;
- CORE/FLEX classification;
- scientific wording/guardrails at storyboard level;
- source-gap/supplement labels;
- resource specifications;
- timing architecture.

This freeze does **not** mean the chapter is classroom-ready yet.

## Remaining build/production gates

1. RT-01 renderer calibration: Beautiful.ai vs Canva with Bangla/science stress content.
2. Build high-risk deterministic visuals/ray diagrams.
3. Scientific visual QA after drawing.
4. Renderer-specific layout/readability QA.
5. Export/playback/offline QA.
6. PDF fallback generation and verification.
7. Chapter-wide final rendered coverage/continuity audit.
8. Classroom-ready package.

## Mandatory visual-build checks

- L1: normal, bending, slab geometry.
- L2: actual/apparent rays; mirage gradient; `i<C`, `i=C`, `i>C`; reflected ray at `i=C`; fibre arrows.
- L3: magnifier dashed backward extensions; eye anatomy; accommodation; corrective lenses.
- L4: real/inverted camera image; aperture/shutter process; film chemistry; eye-camera analogy limits.

## Final pre-freeze verdict

`PASS — CONTENT/STORYBOARD FREEZE APPROVED`

Next stage: RT-01 renderer calibration, then production visual build/rendering. No additional Gemini planning review is required unless a later build introduces a material content/science regression.
