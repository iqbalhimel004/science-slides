# New Chat Recovery Protocol

Version: 5.0
Last revised: 2026-09-08
Status: **ACTIVE — SCIENCE SLIDES PRODUCTION SYSTEM V2**

## 1. Verify repository identity first

Authorized write repository:

`iqbalhimel004/science-slides`

Do not write to any other connected repository.

## 2. Mandatory production recovery sequence

For any active production lesson, read in this order:

1. `CURRENT_STATE.md`
2. `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
3. `OPERATING_BRIEF.md`
4. `REFERENCE_LOCKED_VISUAL_PIPELINE.md`
5. `ACCURACY_ENFORCEMENT.md`
6. `QUALITY_GATES.md`
7. `RENDERER_ROUTING.md`
8. `VISUAL_ASSET_ROUTING.md`
9. `PHYSICAL_VISUAL_REALISM_POLICY.md`
10. `CLASSROOM_LANGUAGE_POLICY.md`
11. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
12. `SIMULATION_RESOURCE_ROUTING.md`
13. `ARTIFACT_PERSISTENCE.md`
14. active chapter `STATUS.md`
15. active chapter `TERMINOLOGY_LOCK.md` if present
16. active chapter/lesson `DIAGRAM_CONTRACTS.md` if present
17. active lesson `STORYBOARD.md`, `RESOURCES.md`, latest `production/SLIDE_COPY_V*.md`, structured spec/dynamic manifest, latest failure/production QA
18. deeper policy/template files only when needed

Do **not** depend on prior chat memory for technical terminology, slide copy, high-risk visual geometry, current artifact approval state, production route or remaining work.

## 3. Canonical precedence

If old chat history or older repository wording conflicts with current policy, use this precedence:

1. `CURRENT_STATE.md` — exact current checkpoint;
2. `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md` — canonical production architecture and migration behavior;
3. later dated durable decision/addendum;
4. `REFERENCE_LOCKED_VISUAL_PIPELINE.md`;
5. `ACCURACY_ENFORCEMENT.md`;
6. active chapter `TERMINOLOGY_LOCK.md`;
7. active chapter/lesson `DIAGRAM_CONTRACTS.md`;
8. `RENDERER_ROUTING.md`;
9. `VISUAL_ASSET_ROUTING.md`;
10. `CLASSROOM_LANGUAGE_POLICY.md`;
11. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`;
12. active chapter `STATUS.md`;
13. latest stage-specific failure/QA/reconciliation record;
14. older historical planning/audit documents.

A later user visual rejection supersedes an older internal QA pass.

## 4. No-reset migration rule

Adopting a newer production architecture does **not** cancel valid prior work.

For an in-progress lesson:

1. recover the latest canonical checkpoint;
2. preserve completed content analysis, source verification, storyboard, terminology locks, diagram contracts, approved assets and accepted visuals when still valid;
3. classify existing production outputs as `REUSE_AS_IS`, `REUSE_AS_REFERENCE`, `PORT_TO_CONTROLLED_COMPONENT`, `REPAIR`, or `RETIRE`;
4. rebuild only defective/fragile/unreproducible rendering layers;
5. continue from the nearest valid checkpoint rather than restarting the lesson.

Current Chapter 11 implication:

- Lesson 1 remains completed/approved baseline work;
- Lesson 2 remains in progress and must continue from its current high-risk visual checkpoint;
- Lesson 3+ use Production System v2 from the start.

## 5. Risk-routed production rule

Every production visual should be classified:

- `R1` low risk;
- `R2` medium risk;
- `R3` high risk.

R3 visuals carry scientific meaning through geometry/topology/scale/notation/position and must not use unconstrained generative AI as science authority.

Use the adaptive visual router defined in `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`.

## 6. High-risk visual hard gate

If the active lesson has R3/high-risk visuals, or a previous user review rejected visuals, do not assemble/release a full classroom deck until the applicable high-risk gate passes.

Required sequence:

1. lock authoritative/reference topology and invariants;
2. freeze Bangla-first visible labels/copy;
3. choose the correct visual route;
4. build science-critical geometry/topology deterministically;
5. run semantic science assertions where practical;
6. render every high-risk visual individually;
7. verify no blank/missing page;
8. run direct pixel QA;
9. internally repair/rebuild and rerun QA;
10. obtain user acceptance only after internal PASS;
11. then assemble/release the full lesson deck.

## 7. Accuracy-enforcement rule — mandatory

Before a science deck may be called `INTERNAL_QA_PASS`:

1. freeze exact student-facing copy in `production/SLIDE_COPY_V*.md` or equivalent structured spec;
2. follow chapter `TERMINOLOGY_LOCK.md`;
3. run student-facing terminology lint where practical;
4. enforce high-risk `DIAGRAM_CONTRACTS.md` / semantic contracts;
5. run programmatic geometry assertions where practical;
6. render and inspect each high-risk slide individually;
7. run expected-slide/blank-page check;
8. run overflow/overlap/out-of-bounds/render/export checks;
9. perform post-render science review: what will the student actually infer?;
10. test exact PPTX in Microsoft PowerPoint when user-side PowerPoint is available.

A montage-only review or `slides_test.py` PASS is never sufficient science QA.

## 8. Bangla-first classroom language

Student-facing slides use textbook-facing Bangla first.

- full Bangla term is primary;
- English is optional parenthetical support or a proper resource name;
- symbols such as `i`, `r`, `C` are introduced after their Bangla meaning;
- standalone English acronyms such as `TIR` are not allowed as the primary Class-8 teaching term;
- questions/instructions must be complete, standalone-readable sentences.

Canonical policy:

`CLASSROOM_LANGUAGE_POLICY.md`

## 9. Renderer route — already decided

Current default deck-production route:

**Controlled PptxGenJS -> deterministic/specialized scientific assets -> automated + semantic QA -> direct rendered-pixel QA -> optional Canva controlled finishing -> verified PPTX + verified PDF/static fallback.**

- PptxGenJS: primary controlled assembly/authoring route.
- Specialized deterministic code/SVG/chart/chemistry/anatomy routes: science-critical asset route as applicable.
- Canva: optional finishing/realistic context asset tool; not science authority.
- Beautiful.ai: low-risk prototype/layout inspiration only.

## 10. Visual asset route

For photos/realistic physical-object visuals, default priority:

1. verified existing real/authoritative/open/licensed visual;
2. authoritative educational illustration;
3. connected Canva / Canva AI / Canva Pro or another approved generator for context imagery;
4. controlled illustration/schematic when more appropriate.

Science-critical labels, rays, normals, angles, scales, graphs, notation, circuit topology, anatomy topology and chemical structures remain controlled/deterministic.

Do not bake editable scientific text into raster imagery when avoidable.

## 11. Repair circuit breaker

For one visual:

- first material failure -> repair from controlled source;
- second material failure -> stop micro-patching and cleanly rebuild the visual/component;
- rebuild still fails -> change representation route;
- roughly 20–30 minutes of non-converging repeated repair -> route-change trigger.

Do not spend days repeatedly patching one slide.

## 12. User-review rule

The user is not the primary internal QA detector.

Before user review:

1. build;
2. automated QA;
3. semantic science QA;
4. direct pixel QA;
5. internal repair/rebuild if needed;
6. second internal QA.

Ask the user mainly for final acceptance, subjective design preference, or approval of a new visual family. Connector-required explicit save approvals are an exception.

## 13. Physical realism + science clarity

Real physical objects should look recognizably real when practical, but photorealism never outranks scientific clarity.

When geometry matters:

- prefer straight-on / orthographic / side / cross-sectional views;
- avoid perspective that conflicts with deterministic overlays;
- use realistic-object + deterministic schematic hybrid when clearer;
- use pure schematic geometry when realism reduces clarity.

## 14. Dynamic engagement / simulation rule

Preferred science-critical progression:

1. `PREDICT_THEN_REVEAL`;
2. `STAGED_REVEAL`;
3. deterministic diagram states;
4. native animation only when materially useful and reliably testable;
5. video/animation for continuous motion;
6. simulation for parameter manipulation.

Every important online/interactive item requires a static/offline fallback.

## 15. Blank/missing page rule

For every pack/deck export:

- expected slide count must match;
- each planned slide ID must render to non-blank content;
- no unexpected blank page is allowed;
- no high-risk visual may disappear during normalization/export.

Unexpected blank page = hard FAIL.

## 16. PowerPoint compatibility

- PowerPoint repair/recovery warning = hard FAIL;
- test exact user-facing PPTX when available;
- after normalization/resave, retest links/reveal/interaction/media;
- verify PDF/static fallback separately.

## 17. Source/science rule

NCTB controls curriculum/scope/exam context, not automatic scientific truth. Material scientific claims are verified against current authoritative sources; mismatches are documented.

## 18. Timing rule

For a 60-minute class:

- CORE: about 40–45 min;
- FLEX: about 5–10 min;
- planned CORE + FLEX: about 50–55 min;
- contingency: 5–10 min unallocated;
- STRETCH: appendix/enrichment only.

## 19. Artifact persistence

Follow `ARTIFACT_PERSISTENCE.md` and Production System v2.

For high-risk controlled production preserve:

- structured lesson/slide specification;
- exact slide-copy lock;
- generator/build source or reproducible specification;
- artifact fingerprints;
- deterministic visual/component source;
- semantic/geometry tests;
- terminology lint/checker source;
- high-risk visual review status;
- asset provenance;
- dynamic implementation manifest;
- PowerPoint compatibility status;
- export/fallback QA.

## 20. End-of-stage checkpoint

**Finish -> record -> then continue.**

The next chat must be able to continue from GitHub without needing the previous transcript.
