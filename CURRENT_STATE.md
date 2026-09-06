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
- Visual asset generation is now Canva/external-first and controlled-science-overlay driven (`VISUAL_ASSET_ROUTING.md`; durable refinement equivalent to `D-040`).
- Student-facing language is Bangla-first by `CLASSROOM_LANGUAGE_POLICY.md`.
- Physical apparatus visuals follow `PHYSICAL_VISUAL_REALISM_POLICY.md`.
- Physical realism must never reduce science-diagram clarity; for geometry-sensitive optics, straight-on/orthographic physical views are preferred.
- `ARTIFACT_PERSISTENCE.md` controls reproducibility.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical path:
`chapters/class-8/science/chapter-11-light/`

Current status:

**CONTENT_STORYBOARD_FROZEN — RT_01_COMPLETE — LESSON_1_VISUAL_MOTION_BASELINE_APPROVED — CANVA_FIRST_VISUAL_ASSET_ROUTING_LOCKED — LESSON_2_PRODUCTION_NEXT**

## Lesson 1 pilot — final accepted direction

The user accepted the latest orthographic-real-glass correction as visually/scientifically clear.

The Lesson 1 pilot therefore establishes the reusable production baseline:

- controlled PptxGenJS deck authoring;
- Bangla-first textbook-facing language;
- staged prediction/reveal rather than fragile animation where equivalent;
- simulation links only when pedagogically useful, with static fallback;
- realistic physical-object imagery where appropriate;
- deterministic science overlays for rays, normals, angles, labels and geometry;
- Microsoft PowerPoint compatibility testing;
- verified PDF fallback.

Latest Lesson 1 artifact family:

- `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_OrthoGlass_PPTX_SAFE.pptx`
- `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_OrthoGlass_PPTX_SAFE.pdf`

Fingerprints:

- PPTX: `b626024aee467d1635d6d5bde3757e27c2360252b21dc7ea1e5dd0e6bb5df925`
- PDF: `bfbf8a4b6e8562946793953cc2622b6ebd53cc0b273e8e8f061717693eeb4fd3`

Latest focused QA:

`chapters/class-8/science/chapter-11-light/lessons/lesson-01/production/PRODUCTION_QA_V2_ORTHOGLASS_2026-09-06.md`

## Refined visual-asset routing — mandatory for future slides

Canonical policy:

`VISUAL_ASSET_ROUTING.md`

### Default source priority

When a photo or realistic base image is required:

1. use an existing verified real/authoritative/open/licensed visual when it already fits;
2. otherwise use connected **Canva / Canva AI / Canva Pro** generation or licensed assets;
3. otherwise use another connected/legal visual source or generator that offers a clear advantage;
4. use programmatic SVG/Hyperagent/custom construction for deterministic scientific visuals;
5. do **not** routinely use ChatGPT-native image generation; use it only if the user explicitly asks for it or explicitly approves an exception after the other routes are unsuitable/unavailable.

Reason:

- Canva AI can generate realistic physical-object visuals at a more scalable workflow level;
- routine ChatGPT image generation may consume a limited daily quota;
- science-critical geometry should not be entrusted to any unconstrained image generator anyway.

### Role separation

**Canva/external visual generator = realistic physical base asset**

Examples:

- glass;
- lens;
- mirror;
- optical fibre;
- camera;
- laboratory apparatus;
- real-world/context scene;
- orthographic/side-view physical object.

**PptxGenJS/SVG/controlled drawing = scientific authority layer**

Examples:

- ray paths;
- normals;
- incident/refraction/reflection angles;
- scientific labels;
- scales;
- graph geometry;
- circuit topology;
- equation/notation placement;
- exact anatomical/optical paths.

Canva AI must not be allowed to decide these science-critical relationships.

### Viewpoint rule

If a scientific overlay must align to a physical object:

- prefer straight-on, orthographic, side-view or cross-sectional base imagery;
- avoid dramatic perspective that makes 2D geometry ambiguous;
- use a hybrid realistic-object + deterministic schematic if that is clearer.

The Lesson 1 glass-slab sequence is the reference example:

- flat schematic: visually unrealistic;
- 3D perspective realistic slab: physical realism but geometry conflict;
- orthographic realistic slab + deterministic ray overlay: accepted pattern.

## Renderer route — still locked

Deck route remains:

**Controlled PptxGenJS -> deterministic science geometry/labels -> rendered QA -> optional Canva controlled-import finishing -> verified PPTX + verified PDF.**

The new Canva-first asset rule does **not** make Canva the science-content author. It expands Canva's role specifically for realistic base-image/visual asset production and controlled finishing.

Beautiful.ai remains limited to low-risk layout inspiration/prototyping.

## Simulation route

Simulation selection remains multi-source, not PhET-only.

For each concept compare reputable options such as:

- PhET;
- The Physics Classroom;
- GeoGebra;
- Open Source Physics/ComPADRE;
- other reputable scientific/educational sources.

Use custom interaction only when existing resources fail the objective.

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

## New-chat recovery order

Read:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. `VISUAL_ASSET_ROUTING.md`
5. `PHYSICAL_VISUAL_REALISM_POLICY.md`
6. `CLASSROOM_LANGUAGE_POLICY.md`
7. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
8. `SIMULATION_RESOURCE_ROUTING.md`
9. `ARTIFACT_PERSISTENCE.md`
10. active chapter `STATUS.md`
11. active lesson files/production QA

`NEW_CHAT_START.md` contains the full recovery protocol.

## Next authorized action

**Lesson 2 controlled production using the approved Lesson 1 visual/motion/language/realism baseline and the Canva-first external visual-asset policy.**
