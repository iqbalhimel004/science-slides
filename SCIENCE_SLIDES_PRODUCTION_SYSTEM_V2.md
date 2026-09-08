# Science Slides Production System v2

Version: 2.0
Date adopted: 2026-09-08
Status: **ACTIVE — CANONICAL PRODUCTION ARCHITECTURE**

## 0. Purpose

This document is the canonical production architecture for Science Slides after the Chapter 11 Lesson 2 visual-production failure analysis.

It exists to achieve all of the following at the same time:

1. maximum practical scientific accuracy;
2. NCTB/class/exam appropriateness;
3. projector-readable and visually engaging slides;
4. support for photos, diagrams, animations, videos, simulations and interactives across different science domains;
5. deterministic control of science-critical geometry and notation;
6. reasonable production time;
7. reproducibility in GitHub;
8. minimal user involvement in internal debugging;
9. reliable continuation across new chats without depending on chat history.

This file refines, but does not discard, the existing policies in `OPERATING_BRIEF.md`, `QUALITY_GATES.md`, `RENDERER_ROUTING.md`, `VISUAL_ASSET_ROUTING.md`, `REFERENCE_LOCKED_VISUAL_PIPELINE.md`, `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`, `ARTIFACT_PERSISTENCE.md` and `WORKFLOW.md`.

If older workflow wording conflicts with this file on production architecture, risk routing, repair strategy, or continuation behavior, this file has precedence unless a later dated durable decision explicitly supersedes it.

---

# 1. Failure analysis that triggered v2

The Lesson 2 high-risk visual pack revealed that the project had good policy intentions but execution drifted into a slow Canva patch loop.

Observed failure classes included:

- science-critical diagrams repeatedly edited as raster/composite assets;
- wrong angle construction despite previous geometry checks;
- student-facing terminology drift (`বিরল মাধ্যম` vs chapter-preferred `হালকা মাধ্যম`);
- a road photo that did not actually communicate mirage;
- clipped or overlapping labels visible only after export;
- optical-fibre labels and ray geometry becoming visually confusing;
- physical/context image recognizability failure;
- user review discovering defects that should have been caught internally;
- repeated edit -> approval -> export -> repair loops consuming unreasonable time;
- final rendered pixels behaving differently from editor/metadata expectations.

The lesson is not that Canva is unusable. The lesson is that **science-critical production must not depend on manual patching inside a design editor as the primary control system**.

---

# 2. Canonical architecture

The permanent production chain is:

**Scientific Truth Layer -> Structured Lesson Specification -> Risk Classification -> Visual Router -> Specialized Asset/Diagram Route -> Controlled PptxGenJS Assembly -> Automated QA -> Semantic Science QA -> Direct Pixel QA -> PowerPoint/Export QA -> User Acceptance -> Durable GitHub Checkpoint**

Important principle:

> One common production system, multiple specialized visual engines.

PptxGenJS is the controlled assembly/orchestration layer. It is **not** required to create every scientific image, animation or simulation itself.

---

# 3. No-reset migration rule — previous work is preserved

Adopting v2 does **not** cancel completed or partially completed work.

Mandatory migration behavior:

- Lesson 1 remains completed/approved baseline work unless later classroom evidence requires a targeted change.
- Lesson 2 content analysis, source reconciliation, storyboard, terminology lock, diagram contracts, reference locks, visual research, corrected assets and QA findings remain valid project assets where still scientifically correct.
- Do not restart Lesson 2 from zero.
- Continue from the latest canonical checkpoint.
- Reuse verified content, verified sources, approved wording, accepted visuals and proven components.
- Rebuild only the rendering/component layer that is defective, fragile, unreproducible or incompatible with v2.
- Historical failed Canva/PPTX artifacts remain regression evidence; do not treat them as current classroom-ready artifacts.

For an in-progress lesson, migration sequence is:

1. recover current canonical state;
2. classify existing outputs as `REUSE_AS_IS`, `REUSE_AS_REFERENCE`, `PORT_TO_CONTROLLED_COMPONENT`, `REPAIR`, or `RETIRE`;
3. continue from the nearest valid checkpoint;
4. never repeat already-completed research/verification merely because the renderer changes.

---

# 4. Scientific Truth Layer

Before production, establish what is scientifically and pedagogically allowed to appear.

For each chapter/lesson preserve:

- NCTB scope and exam context;
- learning outcomes;
- definitions/laws/principles;
- formulas, symbols, units and sign conventions;
- terminology lock;
- common misconceptions;
- textbook ambiguity/error register;
- verified current-science interpretation;
- source hierarchy;
- prerequisite relationships;
- age/class-level depth limits.

NCTB controls curriculum/scope/exam context, not automatic scientific truth.

When NCTB wording and precise current science differ, record separately:

`TEXTBOOK/EXAM WORDING -> SCIENTIFICALLY PRECISE FORM -> CLASSROOM WORDING`

No visual tool may silently reinterpret this layer.

---

# 5. Structured Lesson Specification

Every production lesson should have a machine-readable or consistently structured specification before final build.

Minimum fields per slide/state:

- `slide_id`;
- `segment` = CORE/FLEX/STRETCH;
- `learning_goal`;
- `student_copy`;
- `teacher_note`;
- `concept_type`;
- `science_risk` = R1/R2/R3;
- `visual_route`;
- `required_invariants`;
- `source_refs`;
- `dynamic_mode`;
- `offline_fallback`;
- `estimated_time`;
- `qa_status`.

The renderer may format this specification but must not invent new core science.

---

# 6. Science-risk classification

## R1 — Low risk

Visual errors are unlikely to teach incorrect science.

Examples:

- title/background;
- decorative context image;
- low-risk icon;
- recap styling;
- non-scientific callout.

Allowed: broader Canva/AI/design freedom, subject to normal QA.

## R2 — Medium risk

Visual interpretation matters, but exact geometry/topology is not the primary scientific claim.

Examples:

- apparatus photograph;
- organism/object photograph;
- qualitative process flow;
- contextual real-world example;
- comparison image.

Required: verified reference/provenance, controlled labels, recognizability check.

## R3 — High risk

Visual geometry, topology, scale, position, sequence, notation or structure carries scientific meaning.

Examples:

- optics ray diagrams;
- angle constructions;
- force/vector diagrams;
- circuits;
- graphs/scales;
- anatomy with position-sensitive labels;
- chromosome/cell-stage relationships;
- chemical structural formulae;
- molecular geometry when material;
- orbital/phase geometry;
- experimental geometry;
- quantitative diagrams.

R3 hard rule:

**Unconstrained generative AI must not be the science authority.**

---

# 7. Adaptive Visual Router

Choose the representation based on the scientific need, not on the convenience of one tool.

| Need | Primary route |
|---|---|
| Optics rays / angles / normals | deterministic SVG/code/vector |
| Mechanics force/vector diagrams | deterministic vector component |
| Circuit topology | topology-driven deterministic component |
| Graphs / axes / scales | programmatic chart/graph |
| Formula / equation | verified native text or LaTeX/Math -> SVG |
| Chemical equation | structured equation renderer |
| Chemical structure / bonding | verified chemistry structure renderer/reference + controlled labels |
| Real organism / plant / apparatus / object | authoritative/real licensed photo first |
| Anatomy | authoritative scientific illustration + controlled editable overlay |
| Cell/tissue | microscopy/reference visual or controlled scientific illustration |
| Earth/geology layers | authoritative diagram/data + controlled labels |
| Astronomy | NASA/ESA/authoritative imagery + deterministic overlay |
| Maps | verified geographic data/map source + controlled annotation |
| Abstract process | deterministic schematic/flow |
| Continuous motion | staged reveal, animation or video depending on need |
| Parameter exploration | simulation/interactive |
| Demonstration phenomenon | real demo/video/photo + static fallback |

Decision tree:

1. Does geometry/topology/scale carry scientific meaning? -> deterministic route.
2. Otherwise, is real appearance important? -> authoritative/real visual first.
3. Is the concept time-dependent? -> staged reveal/animation/video.
4. Must students manipulate parameters? -> simulation/interactive.
5. Otherwise -> controlled illustration/schematic.

---

# 8. Domain-specific accuracy contracts

## Physics

Verify as applicable:

- direction;
- normal/reference axis;
- angle definition and angle endpoints;
- sign convention;
- vector magnitude/direction where meaningful;
- force application point;
- circuit connectivity;
- ray topology;
- graph axes/units/scales;
- boundary conditions;
- object/image orientation.

## Chemistry

Verify as applicable:

- formula/subscript/superscript;
- ionic charge;
- valency/oxidation state where relevant;
- balanced equation;
- physical state/condition where relevant;
- bond connectivity;
- molecular representation limits;
- apparatus arrangement;
- no AI-invented impossible structure.

## Biology

Verify as applicable:

- anatomical orientation;
- relative structure position;
- process direction;
- structure-function relation;
- cell-stage/chromosome sequence;
- scale distinction;
- microscopy vs illustration distinction;
- label placement;
- no decorative anatomy treated as authoritative anatomy.

## Earth / Environmental Science

Verify as applicable:

- direction/orientation;
- legend;
- scale;
- layer order;
- geological/temporal sequence;
- units;
- data date/source;
- causal wording;
- `not to scale` marking where needed.

## Astronomy

Verify as applicable:

- relative position;
- phase/orbit geometry;
- direction where relevant;
- scale disclaimer;
- image provenance;
- false size/distance implications avoided.

---

# 9. Scientific Component Library

Reusable, tested components should gradually be built and stored in GitHub.

Recommended structure:

```text
components/
  optics/
  mechanics/
  electricity/
  chemistry/
  biology/
  earth-space/
  graphs/
  equations/
  common/
```

Each reusable R3 component should preserve:

- source/build code;
- input parameters;
- invariants/tests;
- a rendered golden example;
- usage notes;
- approved terminology where applicable.

Once a component is approved, future lessons should reuse it instead of redrawing from scratch.

---

# 10. Image policy

Priority:

1. authoritative/real/open/licensed visual;
2. authoritative educational illustration;
3. controlled AI-generated context/illustration;
4. simplified schematic.

AI-generated imagery is acceptable for:

- contextual scenes;
- non-critical realistic backgrounds;
- otherwise unavailable illustrative context.

AI-generated imagery must not determine final:

- labels;
- equations;
- ray paths;
- angle geometry;
- graph scales;
- circuit topology;
- anatomy topology;
- chemical structure;
- exact quantitative relationships.

High-risk rule:

**Do not bake student-facing scientific labels into a generated/raster image when editable controlled text can be used instead.**

Preferred separation:

- photo/background = raster;
- scientific geometry = SVG/vector;
- Bangla labels = native editable text where practical;
- formulas = native verified text or controlled SVG.

---

# 11. Dynamic / animation / simulation routing

Dynamic implementation is chosen for pedagogical value, not decoration.

Preferred order for science-critical progression:

1. `PREDICT_THEN_REVEAL`;
2. `STAGED_REVEAL` using duplicate/sequential controlled slide states;
3. deterministic diagram-state sequence;
4. native PowerPoint animation when it materially adds value and can be tested;
5. video/animation resource for continuous motion;
6. simulation for parameter manipulation.

Native animation is not mandatory.

Use video/animation when continuous motion itself is important, e.g. wave propagation, heart motion, mitosis motion, orbit, fluid/particle motion.

Use simulation when changing parameters is part of the learning objective.

Every classroom-critical simulation/online resource requires:

- instructional purpose;
- prediction/observation prompt;
- debrief question;
- launch time budget;
- verified link/source;
- static/offline fallback.

CORE learning must not depend on internet unless reliability is explicitly established.

---

# 12. Controlled assembly

PptxGenJS is the canonical primary assembly route.

Responsibilities:

- 16:9 slide assembly;
- frozen wording;
- Bangla typography;
- editable labels;
- native/vector overlays;
- images/media placement;
- staged reveal states;
- hyperlinks/buttons;
- speaker-note sources;
- consistent layout system;
- reproducible PPTX generation.

Canva is optional finishing, not primary science authority.

Canva may be used for:

- low-risk visual polish;
- photo treatment;
- decorative assets;
- manual alignment when truly useful;
- social/derivative designs;
- hosting/presentation.

If Canva materially edits a controlled deck, post-Canva science/render/export QA is mandatory.

---

# 13. Automated QA pipeline

Every build should run applicable automated checks before user review.

## Structural QA

- expected slide IDs/count;
- no missing slide;
- no unexpected blank page;
- asset existence;
- broken media/link detection where practical;
- source-note presence;
- manifest consistency.

## Text QA

- terminology lock;
- forbidden/outdated term detection;
- Bangla-first policy;
- unexplained acronym detection;
- exact copy drift;
- formula/symbol integrity;
- minimum readable size warnings.

## Layout QA

- text overflow;
- out-of-bounds elements;
- unintended overlaps;
- unsafe margins;
- image cropping/focal loss;
- minimum essential-label size;
- contrast/readability warnings where practical.

---

# 14. Semantic science tests

R3 visuals require tests that check scientific meaning, not merely that objects exist.

Example — critical angle:

```text
incident medium = dense
exit medium = light
normal passes through incidence point
angle i is between incident ray and normal
i = C
refracted ray lies along interface
r = 90 degrees
reflected ray remains in dense medium
```

Example — total internal reflection:

```text
incident from dense side
i > C
reflected ray exists in dense medium
transmitted/refracted ray count = 0
```

Example — optical fibre:

```text
core/cladding distinction present
n_core > n_cladding when index relation is taught
ray remains inside core
reflection points lie on core-cladding boundary
no segment incorrectly propagates through cladding in the simplified TIR model
```

Equivalent semantic contracts must be created for circuits, anatomy, chemistry structures, graphs and other R3 visuals where practical.

---

# 15. Direct pixel QA

Automated checks never replace visual inspection of final rendered pixels.

Required production route:

`PPTX -> rendered PNGs -> montage overview -> individual R3 slide inspection`

Inspect:

- blank/broken/missing content;
- clipping;
- overlap;
- Bangla glyphs/line breaks;
- diagram-label relation;
- arrow/ray direction;
- image recognizability;
- projector readability;
- color/contrast;
- visual ambiguity;
- final science meaning.

For R3 slides, individual inspection is mandatory.

---

# 16. Two-pass science review

Every R3-heavy lesson uses two science-review passes.

## Pass A — pre-build

Question:

**What science are we intending to teach?**

Review sources, wording, invariants, formulas and topology.

## Pass B — post-render

Question:

**What science will a student actually infer from the rendered slide?**

This catches cases where correct source content is rendered misleadingly.

---

# 17. User-review policy

The user is not the primary internal QA detector.

Before showing a production pack/deck to the user, the system should complete:

1. build;
2. automated QA;
3. semantic science QA;
4. direct pixel QA;
5. internal repair/rebuild if needed;
6. second internal QA.

User review is primarily for:

- final visual/science acceptance;
- subjective design preference;
- approval of a new master visual family;
- classroom-specific preference.

Do not repeatedly ask the user to approve intermediate micro-edits unless a connector requires explicit save approval or the change is genuinely subjective/material.

---

# 18. Repair circuit breaker

This is a hard time-control rule.

For one slide/visual:

### First material failure

Repair from controlled source and rerun QA.

### Second material failure of the same visual

Stop micro-patching. Rebuild the visual/component cleanly from source/specification.

### Rebuild still fails

Change representation route, e.g.:

- composite raster -> separate photo + deterministic schematic;
- AI illustration -> authoritative image + controlled overlay;
- native animation -> staged reveal;
- complex single slide -> split states.

### Time cap

If one visual is consuming roughly 20–30 minutes of repeated repair without convergence, stop patching and change route.

A single high-risk slide consuming days is a workflow failure and must trigger route change.

---

# 19. No-silent-failure rule

If an asset/tool/source fails, do not substitute an unrelated image, blank panel, placeholder or unverified AI output.

Mark the state explicitly, e.g.:

`ASSET_BLOCKED`

Then use a documented fallback route.

---

# 20. Golden-master library

User-approved and internally verified R3 components/visual families should become reusable golden masters.

Examples:

- critical angle;
- TIR;
- apparent depth;
- lens ray construction;
- common circuit symbols/topologies;
- graph style;
- anatomy overlay style;
- chemistry equation/structure style.

A golden master stores source + tests + rendered reference, not only a screenshot.

---

# 21. Classroom readability and density

Default principles:

- one primary teaching purpose per slide/state;
- essential text must be projector readable;
- essential diagram labels must not require zooming;
- high contrast for science-critical labels;
- secondary attribution may be smaller but must not collide with content;
- split or stage content rather than shrinking essential text;
- avoid dense textbook dumps.

Typical starting ranges, adjustable by slide context:

- title: about 28–34+ pt;
- main student text: about 20–24+ pt;
- essential diagram labels: ideally about 18–20+ pt.

These are starting standards, not rigid absolute values; actual render readability decides PASS/FAIL.

---

# 22. Source/provenance rules

Every externally sourced non-trivial claim and asset must be traceable.

Speaker notes should include `[Sources]` blocks as required by the slide toolchain.

Asset manifest should record as applicable:

- source;
- URL/reference;
- author/organization;
- license/reuse status;
- whether real/generated/modified;
- generation route;
- intended slide/use.

---

# 23. PowerPoint / export / offline gate

A deck is not classroom-ready because it renders successfully.

Verify the exact delivery artifact:

- Microsoft PowerPoint opens without repair/recovery warning when testing is available;
- Bangla and notation survive;
- editability survives where expected;
- links/buttons work;
- animation/reveal/media works where used;
- PDF fallback is verified;
- static/offline fallback exists for classroom-critical online resources;
- no science drift after export/finishing.

---

# 24. Production speed strategy

Use the minimum rigor required by risk, not the same heavy process for every slide.

## FAST path

Mostly R1/R2 content, simple photos/text/flows.

Use normal source, layout, render and text QA.

## STANDARD path

Normal science lesson with mixed content.

Use full content, visual, render and lesson QA.

## HIGH-RISK path

R3-heavy lesson or prior visual failure.

Use reference lock, semantic contracts, controlled components, individual pixel QA and stricter acceptance.

Reasonable production targets after content freeze and after the reusable library matures:

| Lesson type | Target range |
|---|---:|
| mostly text/photo/simple visuals | ~45–90 min |
| normal science lesson | ~1.5–2.5 h |
| multiple new R3 visuals | ~2–4 h |
| heavy new simulation/animation/visual system | ~3–5 h |

These are planning targets, not guarantees. New reusable component families may initially take longer, but their cost must be amortized by reuse.

---

# 25. Chapter intake under v2

For every new chapter:

1. source integrity;
2. topic inventory;
3. textbook error/confusion register;
4. scientific verification map;
5. risk map (R1/R2/R3);
6. visual/media/simulation opportunity map;
7. lesson split and timing;
8. component reuse check;
9. new component requirements;
10. storyboard/specification;
11. build/QA.

Do not create custom assets before checking whether a verified existing resource or reusable component already solves the need.

---

# 26. Versioning / repository layout

Prefer stable semantic names over endless `final_v5_corrected` filenames.

Recommended lesson-local production layout:

```text
production/
  spec/
  src/
  assets/
  tests/
  renders/
  dist/
  QA/
```

Recommended component names describe function, e.g.:

`critical_angle_diagram.svg`
`optical_fibre_tir.svg`

Build identity should come from source version/commit/checksum, not from increasingly long filenames.

---

# 27. Current Chapter 11 migration rule

## Lesson 1

Treat Lesson 1 as completed/approved baseline work. Do not rebuild it merely because v2 is adopted.

Future changes to Lesson 1 should be targeted and evidence-driven.

## Lesson 2

Do not restart.

Retain and reuse:

- completed content analysis and storyboard;
- source map/reconciliation;
- terminology lock;
- diagram contracts;
- seven high-risk reference locks;
- validated physical/context assets;
- accepted corrected concepts/wording;
- failure/QA records as regression evidence.

Continue from the current high-risk-visual checkpoint.

At migration time, previously accepted high-risk pages/visuals are references/components to reuse. Only remaining defective or fragile visuals should be rebuilt/ported first.

When full Lesson 2 assembly resumes, use the v2 controlled production chain. The move to controlled PptxGenJS/source-controlled components is a rendering/production migration, **not a reset of the lesson's already-completed scientific work**.

## Lesson 3+

Use v2 from the start.

---

# 28. Current Lesson 2 immediate continuation

At the time v2 was adopted:

- the latest user-supplied seven-page PDF showed pages 1–6 materially acceptable after the latest corrections;
- HRV-07 still had a remaining text-overlap/readability problem;
- a cleaner HRV-07 v5 replacement was prepared in a Canva draft but was not yet established as a final direct-pixel-QA PASS;
- full Lesson 2 rebuild remained blocked pending completion/acceptance of the high-risk visual gate.

Therefore the next Lesson 2 work is **not** to restart research or recreate all seven visuals.

Next sequence:

1. recover latest canonical state and latest actual saved Canva/PPTX artifacts;
2. treat HRV-01..06 as retained verified references unless fresh evidence shows regression;
3. finish/rebuild HRV-07 under v2 using controlled source/component principles rather than repeated raster micro-patching;
4. rerun direct pixel QA on the seven visual pack pages;
5. obtain one user acceptance of the internally-passed pack;
6. assemble full Lesson 2 using controlled PptxGenJS/source-controlled production;
7. reuse validated content/assets rather than rebuilding from zero;
8. run full lesson automated/science/pixel/PowerPoint/export QA.

---

# 29. New-chat recovery rule

Every new chat working on Science Slides must read this file before production work.

New-chat precedence for production architecture:

1. `CURRENT_STATE.md` — exact current checkpoint;
2. `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md` — canonical production architecture;
3. `OPERATING_BRIEF.md`;
4. `NEW_CHAT_START.md`;
5. `QUALITY_GATES.md`;
6. `RENDERER_ROUTING.md`;
7. active chapter/lesson locks, specs and latest QA/failure records.

Do not infer that adopting a newer workflow cancels prior completed work. Use the no-reset migration rule.

---

# 30. Completion definition

A lesson is `CLASSROOM_READY` only when applicable requirements all pass:

- scientifically correct;
- curriculum/class appropriate;
- terminology consistent;
- formulas/units correct;
- R3 semantics correct;
- actual rendered pixels readable and unambiguous;
- visual design engaging and coherent;
- dynamic/simulation choices justified;
- PowerPoint compatibility verified when available;
- PDF/static fallback verified;
- sources/provenance recorded;
- build/source reproducible;
- user final acceptance obtained where required.

---

# 31. Durable operating principle

**AI plans and assists. Authoritative evidence determines scientific truth. Deterministic components control science-critical geometry. Specialized tools create the right media for the concept. PptxGenJS assembles. Automated tests catch mechanical and semantic defects. Final rendered pixels are independently inspected. The user reviews internally-passed work, not unfinished debugging. GitHub preserves the complete state so the next chat resumes exactly where the previous one stopped.**
