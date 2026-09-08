# Operating Brief — Science Slides

Version: 4.0
Last revised: 2026-09-08
Status: **ACTIVE — PRODUCTION SYSTEM V2.1**

## Absolute repository boundary

Only writable repository:

`iqbalhimel004/science-slides`

Verify this exact repository before every write. Do not mutate any other connected repository without separate user authorization.

## Project goal

Create scientifically current, source-verified, NCTB-scope-aligned, visually engaging and classroom-reliable science decks for Classes 8–10, normally for one 60-minute class.

Priority order:

1. scientific/source accuracy;
2. pedagogical clarity and cognitive-load control;
3. realistic timing;
4. accessibility/projector usability;
5. student engagement;
6. visual polish.

A beautiful deck with wrong science fails. A correct but unreadable or unreliable deck also fails.

## Canonical production architecture

Read:

`SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`

Current architecture:

**Scientific truth -> structured specification -> R1/R2/R3 risk routing -> specialized visual/media route -> controlled PptxGenJS assembly -> automated QA -> semantic science QA -> direct pixel QA -> compatibility/export/offline QA -> user acceptance -> GitHub checkpoint.**

PptxGenJS is the controlled assembly route. Specialized deterministic components, authoritative imagery, video/animation and simulation may be used according to concept need.

## Source authority

NCTB is primary for syllabus/scope/exam context and local textbook framing. It is not automatic scientific authority.

For material science:

- verify against authoritative current science as appropriate;
- distinguish textbook/exam wording from precise science when they differ;
- record material conflicts;
- never teach a materially false statement merely because it is printed in the book.

Classify source-dependent content as `STABLE`, `REVISION_SENSITIVE`, or `CURRENT_DATA` so freshness checking is proportional rather than arbitrary.

## Default production unit

- user supplies complete chapter PDF/ordered screenshots;
- verify source integrity first;
- analyze the full chapter before deciding lesson count;
- split by instructional load and concept boundaries;
- checkpoint if a chat becomes operationally large.

## No-reset rule

A revised production method does not cancel valid completed work.

For in-progress lessons, reuse verified content/source/storyboard/terminology/assets and rebuild only defective, fragile or unreproducible production layers.

Current Chapter 11:

- Lesson 1 = completed/user-approved baseline; preserve;
- Lesson 2 = continue without reset from current high-risk migration;
- Lesson 3+ = v2.1 from the start.

## 60-minute rule

Normal target:

- CORE: ~40–45 min;
- FLEX: ~5–10 min;
- CORE + FLEX: ~50–55 min;
- contingency: 5–10 min unallocated;
- STRETCH: appendix/enrichment only.

Count teacher explanation, board work, questions, student responses, activities, media/simulation setup and debrief, transitions, practice and exit check as real time.

## Pedagogy spine

Normally include:

- retrieval/prior knowledge;
- coherent explanation;
- purposeful visual/example;
- meaningful student responses;
- hinge/check where useful;
- guided practice/application;
- misconception correction;
- summary + exit check.

Avoid long passive stretches and textbook dumps.

## Risk-routed science production

Use R1/R2/R3 classification.

R3 examples include ray/angle geometry, circuits, graphs/scales, quantitative models, anatomy relationships, chemical structures and orbital geometry.

R3 requirements:

- authoritative/reference lock;
- controlled/deterministic scientific meaning;
- semantic assertions where practical;
- individual rendered inspection;
- post-render student-inference review.

Unconstrained AI must not decide R3 science.

## Quantitative integrity

Verify formulas, units, conversions, calculations, signs, graph axes/scales and dimensional consistency where applicable. Recompute worked numerical answers independently before release.

## Experiment/demo safety

Any suggested activity involving plausible heat, chemical, electrical, glass, pressure, laser/bright light, sharp, biological or mechanical hazard requires explicit safety review. If safety cannot be established, use a safer/static alternative.

## Model/scale transparency

When a scientific visual is simplified or not to scale and that could mislead, state it clearly. A model may simplify, but not materially falsify relationships.

## Accessibility and projector usability

Critical meaning must not depend only on color, motion or audio. Use readable labels, strong contrast, redundant line/text cues where needed, usable captions/summary for important media, and static/final states for essential animation meaning.

## Dynamic engagement

For science-critical progression prefer:

1. predict-then-reveal;
2. staged reveal;
3. deterministic diagram states;
4. native animation only when it adds value and can be tested;
5. video/animation for continuous motion;
6. simulation for parameter manipulation.

Every classroom-critical online/dynamic element requires a static/offline fallback.

## Tool roles

- ChatGPT: lead analysis, pedagogy, source reconciliation, QA and state maintenance.
- PptxGenJS: primary controlled deck assembly/authoring.
- deterministic SVG/code/chart/chemistry/anatomy routes: R3 components as appropriate.
- Canva: optional finishing/context imagery, not science authority.
- Beautiful.ai: low-risk prototype/inspiration only.
- Hyperagent: specialist deterministic SVG/equation/interactive/QA work.
- Gemini: targeted independent review/research at high-value gates.
- NotebookLM: conditional source-grounded support.

## Repair circuit breaker

- first material failure: source-level repair;
- second: clean rebuild, stop micro-patching;
- rebuild still fails: change representation route;
- ~20–30 min non-converging repair: route-change trigger.

## Selective revalidation

After a change, rerun only the checks that can logically be affected, according to the selective-invalidation matrix in Production System v2.1. Do not under-test; do not needlessly rerun the entire workflow.

## User-review rule

Internal QA precedes user review. The user should see internally-passed work, not be used as the primary defect detector. Connector-required save confirmation remains an exception.

## PowerPoint compatibility

For final classroom-ready status, test the exact user-facing PPTX in Microsoft PowerPoint when available.

- repair/recovery warning = hard FAIL;
- verify editability and planned links/reveal/media;
- after normalization/resave, retest affected behavior;
- if PowerPoint testing is unavailable, record `DELIVERY_COMPATIBILITY_PENDING`, not PASS.

## Artifact persistence

GitHub must preserve enough source/spec/test/provenance information to reproduce or verify the build.

For controlled high-risk production preserve:

- structured specification/copy lock;
- build source;
- deterministic component source;
- semantic tests;
- asset/source provenance;
- dynamic manifest;
- artifact fingerprints;
- compatibility/export/offline QA.

Do not commit secrets or font binaries.

## Current first-pilot status

Historical wording that says Lesson 1 must be rebuilt before Lesson 2 is superseded.

Current canonical state is in `CURRENT_STATE.md`: Lesson 1 is completed/user-approved baseline and should not be rebuilt merely because the workflow was revised. Lesson 2 continues from its existing verified work.

## New-chat startup

Read:

1. `CURRENT_STATE.md`
2. `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
3. `NEW_CHAT_START.md`
4. `AGENTS.md`
5. active chapter/lesson state and locks
6. supporting policies as relevant.

## Universal checkpoint

**Finish -> record -> then continue.**

A fresh chat must be able to determine what is complete, what evidence exists, what is unresolved and what the next authorized action is from GitHub alone.
