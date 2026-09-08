# Science Slides Production System v2

Version: 2.1
Date adopted: 2026-09-08
Last audited: 2026-09-08
Status: **ACTIVE — CANONICAL PRODUCTION ARCHITECTURE — AUDIT-HARDENED**

## 0. Purpose and precedence

This is the canonical production architecture for Science Slides. It was created after the Chapter 11 Lesson 2 visual-production failure analysis and hardened after a repository-wide plan audit.

Goals, in order of importance:

1. maximum practical scientific accuracy;
2. NCTB/class/exam appropriateness without treating NCTB as automatic scientific authority;
3. pedagogical clarity and realistic 60-minute timing;
4. projector readability, accessibility and visual engagement;
5. correct routing of photos, diagrams, equations, animations, videos, simulations and interactives;
6. deterministic control of science-critical geometry/topology/notation;
7. reasonable production time through reuse, risk-based QA and selective revalidation;
8. reproducibility and durable recovery from GitHub;
9. minimal user involvement in internal debugging.

If older repository wording conflicts with this file on production architecture, risk routing, repair strategy, current first-pilot status, or user-review order, this file wins unless a later dated durable decision explicitly supersedes it.

---

## 1. Failure analysis that triggered v2

Lesson 2 exposed these recurring failure classes:

- science-critical diagrams repeatedly edited as raster/composite assets;
- wrong angle construction despite earlier presence-oriented checks;
- terminology drift;
- realistic images that did not actually communicate the claimed phenomenon;
- clipping/overlap visible only after export;
- optical-fibre labels/geometry becoming confusing;
- physical/context imagery not recognizable at classroom scale;
- user review finding defects that should have been caught internally;
- repeated edit -> approval -> export -> repair loops consuming unreasonable time;
- final rendered pixels differing from editor/metadata expectations.

Core lesson:

**Science-critical production must be source-controlled and testable. A design editor may assist, but it must not become the scientific control system.**

---

## 2. Permanent production chain

**Scientific Truth Layer -> Structured Lesson Specification -> Risk Classification -> Visual/Media Router -> Specialized Asset or Component Route -> Controlled PptxGenJS Assembly -> Automated QA -> Semantic Science QA -> Direct Pixel QA -> Compatibility/Export/Offline QA -> Internal PASS -> User Acceptance -> Durable GitHub Checkpoint**

One production framework is used across science, but different scientific needs may use different specialized engines.

PptxGenJS is the primary controlled assembly/orchestration layer, not the only possible visual generator.

---

## 3. No-reset migration rule

Adopting or improving the workflow does **not** cancel valid completed work.

For any in-progress lesson:

1. recover current canonical state;
2. preserve verified analysis, sources, wording, storyboard, terminology, approved assets and accepted science;
3. classify existing production outputs as:
   - `REUSE_AS_IS`
   - `REUSE_AS_REFERENCE`
   - `PORT_TO_CONTROLLED_COMPONENT`
   - `REPAIR`
   - `RETIRE`;
4. rebuild only defective, fragile, unreproducible or incompatible layers;
5. continue from the nearest valid checkpoint.

Historical failed artifacts remain regression evidence, not classroom-ready authority.

Current Chapter 11 rule:

- Lesson 1 remains completed/user-approved baseline work;
- Lesson 2 continues from its current high-risk-visual checkpoint;
- Lesson 3+ use this system from the start.

---

## 4. Scientific Truth Layer

Before production, establish what is scientifically and pedagogically allowed to appear.

Preserve as applicable:

- NCTB scope and exam context;
- learning outcomes;
- definitions/laws/principles;
- formulas, symbols, units and sign conventions;
- terminology lock;
- misconceptions;
- textbook ambiguity/error register;
- verified current-science interpretation;
- source hierarchy;
- prerequisite relationships;
- age/class-level depth limits;
- safety constraints for experiments/demonstrations;
- model/idealization limits;
- freshness requirements for changeable claims/data.

When NCTB wording and precise science differ, explicitly separate:

`TEXTBOOK/EXAM WORDING -> SCIENTIFICALLY PRECISE FORM -> CLASSROOM WORDING`

No renderer or image generator may silently reinterpret this layer.

---

## 5. Source freshness classification

Every material source-dependent claim should be treated as one of:

- `STABLE` — basic laws/definitions unlikely to change;
- `REVISION_SENSITIVE` — taxonomy, nomenclature, standards, technology, health/environment guidance or other content that can be revised;
- `CURRENT_DATA` — statistics, current measurements, contemporary environmental/astronomical/technology data.

Rules:

- `STABLE`: verify with authoritative source; no artificial recurring recheck is required.
- `REVISION_SENSITIVE`: record source date/edition and verify against a current authoritative source before content freeze.
- `CURRENT_DATA`: record value date + source date + last verification date; recheck at production time if classroom wording depends on the current value.

A source being recent does not automatically make its science correct; freshness and authority are separate checks.

---

## 6. Structured Lesson Specification — source of truth for build

Every production lesson must have a structured specification before final build. A Markdown table, YAML/JSON, or equivalent consistent schema is acceptable if it is machine-readable enough for production.

Minimum fields per slide/state:

- `slide_id`
- `segment` = CORE/FLEX/STRETCH
- `learning_goal`
- `student_copy`
- `teacher_note`
- `concept_type`
- `science_risk` = R1/R2/R3
- `visual_route`
- `required_invariants`
- `source_refs`
- `source_freshness`
- `dynamic_mode`
- `offline_fallback`
- `safety_status` where relevant
- `accessibility_notes` where relevant
- `model_or_scale_note` where relevant
- `estimated_time`
- `qa_status`

The renderer may format the specification. It must not invent new core science.

---

## 7. Science-risk classification

### R1 — Low risk

Errors are unlikely to teach incorrect science.

Examples: title/background, decorative context image, low-risk icon, recap styling.

QA: normal source/text/layout/render checks.

### R2 — Medium risk

Interpretation matters, but exact geometry/topology is not the primary scientific claim.

Examples: apparatus photograph, organism/object photograph, qualitative process flow, contextual real-world example.

QA: source/provenance + recognizability + controlled labels + render inspection.

### R3 — High risk

Geometry, topology, scale, position, sequence, notation or structure carries scientific meaning.

Examples:

- optics ray/angle diagrams;
- forces/vectors;
- circuits;
- graphs/scales;
- anatomy with position-sensitive labels;
- chromosome/cell-stage relationships;
- chemical structures;
- molecular geometry when material;
- orbital/phase geometry;
- experiment geometry;
- quantitative models.

R3 hard rule:

**Unconstrained generative AI must not be the scientific authority.**

---

## 8. Adaptive visual/media router

Choose representation by scientific need, not by whichever tool is already open.

| Need | Primary route |
|---|---|
| optics rays/angles/normals | deterministic SVG/code/vector |
| mechanics force/vector | deterministic vector component |
| circuit topology | topology-driven deterministic component |
| graphs/axes/scales | programmatic graph/chart |
| formula/equation | verified native text or LaTeX/Math -> SVG |
| chemical equation | structured equation renderer |
| chemical structure/bonding | verified chemistry renderer/reference + controlled labels |
| real organism/plant/apparatus/object | authoritative/real licensed photo first |
| anatomy | authoritative scientific illustration + editable controlled overlay |
| cell/tissue | microscopy/reference visual or controlled scientific illustration |
| earth/geology | authoritative diagram/data + controlled labels |
| astronomy | authoritative agency imagery/data + deterministic overlay |
| maps | verified geographic data/map + controlled annotation |
| abstract process | deterministic schematic/flow |
| continuous motion | staged states, animation or video depending on objective |
| parameter exploration | simulation/interactive |
| demonstration phenomenon | real demo/video/photo + static fallback |

Decision order:

1. Does geometry/topology/scale/notation carry meaning? -> deterministic/structured route.
2. Otherwise, is real appearance scientifically useful? -> authoritative real/educational visual first.
3. Is continuous change essential to understanding? -> animation/video.
4. Must students manipulate parameters? -> simulation/interactive.
5. Otherwise -> controlled illustration/schematic.

---

## 9. Domain-specific accuracy contracts

### Physics

Check as applicable: direction, normal/reference axis, angle endpoints, sign convention, vector direction/magnitude, force application point, circuit connectivity, ray topology, graph axes/units/scales, boundary conditions, object/image orientation.

### Chemistry

Check: formula/subscript/superscript, charge, valency/oxidation state where relevant, balancing, state/conditions, bond connectivity, model limits, apparatus arrangement, no impossible AI-invented structure.

### Biology

Check: anatomical orientation, relative structure position, process direction, structure-function relationship, stage/chromosome sequence, scale, microscopy-vs-illustration distinction, labels, no decorative anatomy treated as authority.

### Earth/Environmental Science

Check: direction/orientation, map legend, scale, layer order, temporal/geological sequence, units, data date/source, causal wording, and `not to scale` where applicable.

### Astronomy

Check: relative position, phase/orbit geometry, direction, scale disclaimer, image/data provenance, and avoidance of false size/distance implications.

---

## 10. Quantitative and numerical integrity gate

For calculations, graphs, equations and quantitative claims:

- verify formula/law selection;
- verify units and conversions;
- run dimensional-consistency checks where applicable;
- independently recompute worked numerical answers;
- verify sign/rounding/precision appropriate to the syllabus and given data;
- verify graph axes, units, scale, plotted points/trend and intercept interpretation;
- preserve the exact source expression where renderer-sensitive.

A visually correct equation with a wrong value/unit fails science QA.

---

## 11. Experiment/demo safety gate

Any classroom experiment, demonstration or suggested student activity that involves heat, flame, chemicals, electricity, glass, pressure, biological material, sharp objects, lasers/bright sources, moving equipment or other plausible hazards must have an explicit safety review before it enters CORE/FLEX.

Record where relevant:

- hazard(s);
- teacher-only vs student-permitted action;
- PPE/equipment requirement;
- safe setup/disposal;
- prohibited unsafe variant;
- safer substitute/static fallback;
- whether the classroom profile supports the activity.

If safety cannot be established, do not recommend the live activity; use a safe demonstration resource/static explanation instead.

---

## 12. Model, idealization and scale transparency

Scientific visuals frequently simplify reality. Whenever a simplification could materially mislead students, explicitly mark or explain it.

Examples:

- `সরলীকৃত চিত্র`;
- `স্কেল অনুযায়ী নয়`;
- ideal ray model;
- particle model;
- schematic anatomy;
- exaggerated layer thickness;
- symbolic circuit layout.

A model may simplify complexity, but it must not imply a materially false relationship.

---

## 13. Accessibility and multimodal clarity

Final teaching meaning must not depend only on color, motion or audio.

Check as applicable:

- high contrast at projector scale;
- color is not the sole carrier of a critical distinction;
- line style/shape/text labels support color-coded meanings;
- essential labels are readable without zooming;
- videos have usable captions or teacher-readable transcript/summary when language/audio matters;
- essential animation meaning also exists in a static/final state;
- alt text is recorded for reusable digital image assets where practical;
- avoid flashing or unnecessarily distracting motion.

Accessibility is part of classroom usability, not optional polish.

---

## 14. Scientific component library and golden masters

Reusable tested components should live under a shared library such as:

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

Each R3 component should preserve:

- source/build code;
- parameters;
- semantic invariants/tests;
- rendered golden reference;
- usage notes;
- source basis;
- terminology assumptions;
- version/change record.

### Golden-master regression rule

When a previously approved R3 component changes, rerender it and compare against the last approved golden reference. Any material geometry, label, crop or readability change requires targeted re-QA before reuse.

Do not rebuild approved components from scratch unless requirements changed.

---

## 15. New R3 component independent-review trigger

A targeted independent second review is required before a **new R3 component family** becomes a reusable golden master, and may also be triggered when:

- authoritative sources conflict;
- a component has repeated material failure;
- the concept is unusually subtle/contested;
- a model/simplification could easily mislead.

The second review can be another authoritative source plus a targeted independent AI/reviewer check where useful. Findings are advisory until independently reconciled against authoritative evidence.

Routine reuse of an already approved unchanged component does not require a fresh external review every time.

---

## 16. Image policy

Priority for scientific/context imagery:

1. authoritative real/open/licensed image or scientific agency source;
2. authoritative educational/scientific illustration;
3. controlled AI-generated contextual/illustrative image when authoritative alternatives are unsuitable;
4. simplified controlled schematic when pedagogically superior.

AI-generated imagery may provide context but must not determine final science-critical labels, equations, ray paths, angles, graph scales, circuit topology, anatomy topology, chemical structures or exact quantitative relationships.

Preferred separation:

- photo/background = raster;
- scientific geometry = SVG/vector/native shapes;
- Bangla labels = editable native text where practical;
- equations = verified native text or controlled SVG.

Do not bake editable scientific labels into raster/generated images when avoidable.

---

## 17. Dynamic, animation and simulation routing

Preferred science-critical progression:

1. `PREDICT_THEN_REVEAL`;
2. `STAGED_REVEAL` with duplicate/sequential states;
3. deterministic diagram-state sequence;
4. native PowerPoint animation only when it adds real value and can be tested;
5. video/animation for continuous motion;
6. simulation for parameter manipulation.

Every classroom-critical simulation/online resource requires:

- instructional purpose;
- prediction/observation prompt;
- debrief/check;
- launch/setup time budget;
- verified source/link;
- licensing note where relevant;
- static/offline fallback.

CORE must not depend on internet unless reliability is explicitly established.

---

## 18. Controlled assembly

PptxGenJS is the canonical primary assembly route for:

- 16:9 lesson decks;
- frozen wording;
- Bangla typography;
- editable labels;
- native/vector overlays;
- images/media;
- staged states;
- links/buttons;
- speaker-note `[Sources]` blocks;
- consistent layouts;
- reproducible PPTX generation.

Canva is optional finishing/asset support, not science authority.

If Canva materially edits a controlled deck, post-Canva science/render/export QA is mandatory and the pre-Canva source remains the scientific authority.

---

## 19. Automated QA pipeline

Run applicable automated checks before user review.

### Structural

- expected slide IDs/count;
- missing/duplicate/blank slide;
- asset existence;
- broken media/link checks where practical;
- manifest consistency;
- required source-note presence.

### Text

- exact copy drift;
- terminology lock;
- prohibited/outdated terms;
- Bangla-first policy;
- unexplained acronym;
- formula/symbol integrity;
- minimum readable-size warnings.

### Layout

- overflow;
- out-of-bounds;
- unintended overlap;
- unsafe margins;
- image crop/focal loss;
- essential-label size;
- contrast/readability warnings where practical.

### Quantitative

- formula/unit/checksum tests where applicable;
- graph/data consistency;
- dimensional checks where appropriate.

---

## 20. Semantic science tests for R3

Tests must check meaning, not presence only.

Example — critical angle:

```text
incident medium = dense
exit medium = optically lighter
normal passes incidence point
angle arc endpoints lie on incident ray and normal
i = C
refracted ray lies along interface
r = 90 degrees
reflected ray remains in dense medium
```

Example — full internal reflection:

```text
incident from dense side
angle i is measured between incident ray and normal
i > C
reflected ray remains in dense medium
transmitted/refracted ray count = 0
```

Example — optical fibre:

```text
core/cladding distinction present
n_core > n_cladding when index relation is taught
ray remains inside core
reflection points lie on core-cladding boundary
no simplified ray segment propagates through cladding
```

Equivalent semantic contracts should be created for circuits, anatomy, chemistry structures, graphs and other R3 families where practical.

---

## 21. Direct pixel QA

Automated tests never replace inspection of final rendered pixels.

Required route:

`PPTX -> rendered PNGs -> montage overview -> individual R3 inspection`

Inspect:

- blank/broken/missing content;
- clipping/overlap;
- Bangla glyphs/line breaks;
- diagram-label relation;
- ray/arrow direction;
- image recognizability;
- projector readability;
- contrast/color-independent meaning;
- visual ambiguity;
- final science meaning.

R3 pages must be inspected individually.

---

## 22. Two-pass science review

### Pass A — pre-build

What science are we intending to teach?

Review sources, terminology, formulas, invariants, safety and model limits.

### Pass B — post-render

What science will a student actually infer from the rendered slide?

This catches correct source content rendered in a misleading way.

---

## 23. User-review policy

The user is not the primary internal QA detector.

Before showing a production pack/deck to the user:

1. build;
2. automated QA;
3. semantic science QA;
4. direct pixel QA;
5. internal repair/rebuild if needed;
6. second internal QA.

User review is mainly for final acceptance, subjective visual preference, classroom-specific choice, or approval of a genuinely new master visual family.

Connector-required save approval is an exception.

---

## 24. Repair circuit breaker

For one visual/component:

- first material failure -> repair from controlled source;
- second material failure -> stop micro-patching and clean rebuild;
- rebuild still fails -> change representation route;
- roughly 20–30 minutes of non-converging repair -> route-change trigger.

Examples of route change:

- composite raster -> photo + separate deterministic schematic;
- AI illustration -> authoritative image + controlled overlay;
- native animation -> staged states;
- overloaded single slide -> split states.

A single slide consuming days is a process failure.

---

## 25. Selective invalidation — efficiency rule

Do not rerun every expensive stage after every small change. Revalidate only what can logically be affected.

| Change | Minimum required revalidation |
|---|---|
| source/science claim changes | science review + affected copy + affected visuals + downstream render/export |
| terminology/copy changes | text lint + affected layout/render + science meaning check |
| R3 geometry changes | semantic tests + affected pixel QA + downstream export |
| photo/context asset only | recognizability/crop/layout + affected pixel QA |
| visual-only low-risk spacing | layout/render QA for affected slides |
| animation/link/media changes | playback/link/offline QA for affected items |
| toolchain/font/export method changes | broader compatibility/render regression |

This rule prevents both under-testing and wasteful full re-audits.

---

## 26. No-silent-failure rule

If a source, asset or tool fails, do not silently substitute an unrelated image, blank panel, placeholder or unverified generated output.

Use an explicit state such as:

`ASSET_BLOCKED`, `SOURCE_BLOCKED`, `RENDER_BLOCKED`, or `COMPATIBILITY_PENDING`

Then use a documented fallback route.

---

## 27. Classroom readability and density

Principles:

- one primary teaching purpose per slide/state;
- split/stage rather than shrink essential content;
- essential labels must be projector readable;
- high contrast for critical text/lines;
- avoid textbook dumps and decorative clutter.

Typical starting ranges, not rigid absolutes:

- title: ~28–34+ pt;
- main student text: ~20–24+ pt;
- essential diagram labels: ideally ~18–20+ pt.

Actual rendered readability decides PASS/FAIL.

---

## 28. Source/provenance and media record

Every externally sourced non-trivial claim and asset must be traceable.

Record as applicable:

- source/creator/organization;
- URL/reference;
- date/edition;
- freshness class and last verification date;
- license/reuse status;
- real/generated/modified status;
- generation route;
- intended slide/use;
- static fallback;
- safety note for demos;
- AI-generated disclosure where relevant.

Speaker notes should include `[Sources]` blocks for externally sourced non-trivial claims/assets used in the final deck.

---

## 29. Compatibility/export/offline gate

A deck is not classroom-ready because it renders successfully.

Verify the exact delivery artifact:

- Microsoft PowerPoint opens without repair/recovery warning when testing is available;
- Bangla/notation survives;
- editability survives where expected;
- links/buttons work;
- reveal/animation/media works where used;
- verified PDF fallback exists;
- static/offline fallback exists for classroom-critical online content;
- no science drift after finishing/export.

If PowerPoint testing is unavailable, status must remain explicit, e.g. `DELIVERY_COMPATIBILITY_PENDING`; do not claim a tested PowerPoint PASS.

---

## 30. Status ladder

Use precise states rather than vague “done”:

`DRAFT -> CONTENT_VERIFIED -> CONTENT_FROZEN -> BUILT -> INTERNAL_QA_PASS -> USER_ACCEPTED -> DELIVERY_VERIFIED -> CLASSROOM_READY`

A lesson may skip `USER_ACCEPTED` only when user approval is not required by current project state/policy.

`CLASSROOM_READY` requires all applicable hard gates, not just a successful render.

---

## 31. Production-speed strategy

Use the minimum rigor appropriate to risk.

### FAST path

Mostly R1/R2. Normal source/text/layout/render QA.

### STANDARD path

Mixed normal science lesson. Full content/visual/render lesson QA.

### HIGH-RISK path

R3-heavy or previously failed. Reference lock, semantic contracts, controlled components, individual pixel QA, stricter acceptance.

Planning targets after content freeze and component-library maturity:

| Lesson type | Target range |
|---|---:|
| mostly text/photo/simple visuals | ~45–90 min |
| normal science lesson | ~1.5–2.5 h |
| multiple new R3 visuals | ~2–4 h |
| heavy new simulation/animation/visual system | ~3–5 h |

These are targets, not guarantees. Reusable component work should reduce later cost.

---

## 32. Chapter intake under v2.1

For every new chapter:

1. source integrity;
2. topic/concept inventory;
3. textbook error/confusion register;
4. scientific verification + freshness map;
5. R1/R2/R3 risk map;
6. safety map for experiments/demos;
7. visual/media/simulation opportunity map;
8. lesson split and timing;
9. component/golden-master reuse check;
10. new component requirements;
11. storyboard + structured specification;
12. content freeze;
13. build and risk-routed QA.

Search for an authoritative existing resource or approved reusable component before generating a new asset.

---

## 33. Repository layout and versioning

Prefer semantic names over `final_v5_corrected` names.

Recommended lesson-local layout:

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

Build identity should come from source version/commit/checksum.

Approved reusable components belong under `components/` with source + tests + golden render.

---

## 34. Current Chapter 11 migration

### Lesson 1

Completed/user-approved baseline. Preserve. Do not rebuild solely because v2.1 exists.

### Lesson 2

Do not restart. Reuse completed analysis, source reconciliation, storyboard, terminology, reference locks, accepted wording/assets and regression evidence.

Current immediate production migration:

- HRV-01..04: retain as validated references/assets unless fresh evidence shows regression;
- HRV-05: port corrected critical-angle geometry to a controlled reusable component;
- HRV-06: port corrected TIR geometry to a controlled reusable component;
- HRV-07: rebuild/port first as a clean controlled optical-fibre component; do not return to raster micro-patching.

Then build one controlled high-risk validation pack, run internal automated + semantic + pixel QA, show the internally-passed pack once for user acceptance, and assemble the full Lesson 2 from already-validated content/assets.

### Lesson 3+

Use v2.1 from the start.

---

## 35. New-chat recovery

Every new production chat must recover from GitHub, not from chat memory.

Minimum precedence:

1. `CURRENT_STATE.md` — exact checkpoint;
2. `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md` — this architecture;
3. `NEW_CHAT_START.md`;
4. later dated durable decision;
5. active chapter/lesson locks/specs/QA;
6. supporting policies.

Never infer that a new workflow invalidates already-verified prior work.

---

## 36. Durable operating principle

**AI plans and assists. Authoritative evidence determines scientific truth. Risk classification determines rigor. Deterministic components control science-critical geometry. Specialized tools create the right media for the concept. PptxGenJS assembles. Automated tests catch mechanical and semantic defects. Rendered pixels are independently inspected. Safety, accessibility, model limits, freshness and compatibility are explicit gates. Revalidation is selective. The user reviews internally-passed work, not unfinished debugging. GitHub preserves enough state for a fresh chat to resume exactly where the previous one stopped.**
