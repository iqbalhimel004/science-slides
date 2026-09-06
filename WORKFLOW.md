# Chapter Production Workflow

Version: 4.1
Last revised: 2026-09-06
Status: **ACTIVE — POST-RT-01 / POST-PILOT-COMPATIBILITY UPDATE**

## Phase 0 — Safety and state recovery

1. Verify the exact repository is `iqbalhimel004/science-slides`.
2. Read `OPERATING_BRIEF.md` and `CURRENT_STATE.md`.
3. Read `RENDERER_ROUTING.md` before any production/rendering work.
4. Read `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md` before producing or revising classroom PPTX files.
5. If a Gemini review gate is pending/current, read `GEMINI_REVIEW_WORKFLOW.md`.
6. If a chapter is active, read its `STATUS.md` and only the files needed for the current stage.
7. Treat GitHub as canonical operational memory. Do not rely on chat history as the only record of completed work.

## Universal user-prompt rule

Whenever the user must paste a prompt into an external tool, provide the whole prompt in **one self-contained fenced code block** so it can be copied in one action.

## Universal checkpoint rule

**Finish → record → then continue.**

A meaningful stage is not complete until its durable result is saved to GitHub and status is updated as applicable.

---

## Phase 1 — Chapter intake and source integrity

Check chapter identity, edition/year where possible, page continuity, missing/cropped pages, readability of Bangla/equations/tables/diagrams, and text-layer status. Do not silently infer missing material. Verify critical wording against the visible source when extraction is uncertain.

### Checkpoint

Save source identity/integrity records and update `STATUS.md` / `CURRENT_STATE.md`.

---

## Phase 2 — Full chapter analysis

Record chapter scope, learning outcomes, prerequisites, key definitions/laws/formulas/units, diagrams/processes, activities, examples/applications/numericals, misconceptions, exam-facing opportunities, instructional load, visual complexity, and claims that may be outdated/ambiguous/scientifically weak.

Distinguish what the textbook contains from whether it is scientifically current/correct.

### Checkpoint

Save `CHAPTER_ANALYSIS.md`, source issues and chapter state.

---

## Phase 3 — Determine lesson count and split

Split by logical instructional boundaries and realistic classroom load, not page count.

Default 60-minute model:

- CORE ~40–45 min;
- FLEX ~5–10 min;
- planned CORE + FLEX ~50–55 min;
- 5–10 min contingency unallocated;
- STRETCH appendix-only.

Obtain user approval before final deck production and record it immediately.

---

## Phase 4 — Source verification and scientific reconciliation

Use NCTB for syllabus/scope/exam context, not automatic scientific authority. Independently verify material science against current authoritative sources. Record mismatches and preserve exam wording separately where useful.

### Checkpoint

Update `SOURCE_MAP.md`, `SOURCE_ISSUES.md`, relevant lesson files and status.

---

## Phase 5 — Lesson planning

Each lesson plan should contain learning outcomes, CORE/FLEX/STRETCH, timing, retrieval opener, teaching sequence, teacher/student actions, questions, hinge checks, practice/application, misconception correction, summary/exit, and explicit NCTB/current-science distinctions where needed.

Every response, board-writing segment, media launch, transition and debrief counts as real time.

---

## Phase 6 — Resource discovery

Search trusted existing resources before generating custom equivalents. Record source/creator, URL/reference, instructional purpose, target slide, planned time, licensing/reuse note, online/offline status and static fallback.

---

## Phase 7 — Storyboard

For every slide/item record:

- slide ID/title;
- CORE/FLEX/STRETCH;
- purpose;
- approved content/specification;
- visual purpose/resource requirement;
- teacher/student action;
- expected response;
- estimated time;
- source references;
- notation source where relevant;
- fallback;
- transition.

For concept-heavy segments, also record a **dynamic implementation decision** where relevant:

- `STATIC_INTENTIONAL`
- `STAGED_REVEAL`
- `NATIVE_ANIMATION`
- `PREDICT_THEN_REVEAL`
- `LIVE_DEMO`
- `SIMULATION`
- `INTERACTIVE_NAVIGATION`
- `VIDEO/ANIMATION_RESOURCE`

A lesson must not become fully static merely because the first renderer implementation is easier that way.

Update `COVERAGE_MATRIX.md` with concrete slide IDs.

---

## Phase 8 — Independent review

Use Gemini selectively. Follow `GEMINI_REVIEW_WORKFLOW.md`: fresh bundle, one copy-ready prompt, save raw review, independently validate findings, record dispositions, implement only validated changes, then checkpoint.

Gate B is targeted implementation QA, not a duplicate Gate A review.

---

## Phase 9 — Content QA and freeze

Verify curriculum/scope, source provenance, scientific accuracy/currentness, formulas/units/calculations, timing, pedagogy/cognitive load, misconception handling, resource suitability and storyboard completeness.

Mark `CONTENT_FROZEN` only after applicable G1–G7 checks pass and state is recorded.

---

## Phase 10 — Renderer calibration status

RT-01 is complete. Canonical route:

**Controlled PptxGenJS → deterministic SVG/shape science visuals → rendered QA → optional Canva controlled-import finishing → verified PPTX + verified PDF fallback.**

Do not repeat RT-01 unless tool behavior materially changes or the user explicitly asks to reconsider the decision.

---

## Phase 11 — Controlled production

Before building, read `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md` and `ARTIFACT_PERSISTENCE.md`.

Primary production steps:

1. read frozen storyboard/resource/QA files;
2. identify planned dynamic states and ensure none are accidentally omitted;
3. build high-risk scientific visuals deterministically;
4. assemble the controlled 16:9 PPTX with PptxGenJS;
5. implement purposeful staged reveal/predict-then-reveal/interaction/simulation support where planned;
6. render actual slides and run scientific/typographic/layout/projector QA;
7. run visual-engagement QA: hook impact, palette, hierarchy, layout variety, diagram/image integration, card/box repetition, Class-8 attractiveness;
8. optionally import the controlled PPTX to Canva only if manual finishing materially improves the result;
9. if Canva is used, rerun science/notation/layout/export QA and verify no frozen wording/diagram drift;
10. generate and verify PDF/static fallback;
11. normalize/rebuild the PPTX only if needed for compatibility; do not assume a LibreOffice resave preserves animation/media;
12. preserve reproducibility/source records under `ARTIFACT_PERSISTENCE.md`;
13. checkpoint before continuing.

### Production tool roles

- PptxGenJS: primary controlled authoring/rendering.
- Canva: optional finishing/editing after controlled import.
- Beautiful.ai: low-risk prototype/layout inspiration only.
- Hyperagent: specialist deterministic SVG/equation/interactive/QA work where useful.

High-risk scientific diagrams must not be delegated to unconstrained native-AI generation.

### Progressive reveal compatibility preference

When native animation and staged duplicate-slide states teach the same thing, prefer staged states for science-critical progressive construction because they are more robust across PowerPoint/PDF/static fallback workflows.

Use native animation when it adds real instructional value and can be tested reliably in Microsoft PowerPoint.

---

## Phase 12 — Microsoft PowerPoint, visual, export and classroom QA

A PPTX is **not** classroom-ready because it merely passes ZIP/XML parsing, LibreOffice rendering or `slides_test.py`.

Check the exact user-facing artifact.

### Microsoft PowerPoint smoke test

When a PowerPoint environment is available:

- open the exact PPTX in Microsoft PowerPoint;
- confirm no repair/recovery warning;
- verify editability where expected;
- verify buttons/hyperlinks;
- verify planned reveal/animation/interaction behavior;
- if any normalization/resave occurred, retest playback afterward.

A PowerPoint repair warning is a hard FAIL for that artifact.

### Visual / engagement QA

Check:

- strong focal hierarchy;
- projector readability;
- attractive/coherent palette and subject identity;
- visual rhythm and layout variety;
- progressive reveal implemented where planned;
- simulation/demo/interactive support implemented where it materially improves learning;
- no accidental all-static concept-heavy deck;
- no repetitive box-heavy/utilitarian appearance;
- no scientific diagram drift after polish.

### Export / offline QA

Check:

- Bangla rendering and line breaks;
- equation/symbol rendering;
- image crops;
- diagram labels/arrows;
- links/QRs;
- media/simulation launch;
- static/offline fallback;
- PDF fallback;
- no scientific content drift.

Classroom package should contain:

1. controlled editable PPTX;
2. verified PDF fallback;
3. fallback resources/assets for classroom-critical online/animated elements;
4. source/storyboard/resource/production-QA records;
5. reproducibility/build records required by `ARTIFACT_PERSISTENCE.md`.

For the first pilot, user approval of the Lesson 1 v2 visual/motion direction is required before that style is propagated to Lessons 2–4.

---

## Phase 13 — Chapter-wide final audit

Compare all lessons against the original chapter and verified current science. Verify coverage classification, no unnecessary duplication, prerequisite order, coherent bridges, no content loss, no outdated claim surviving uncorrected, visual/motion consistency, and durable artifact traceability.

---

## Phase 14 — Completion and handoff

Update lesson/chapter QA, chapter `STATUS.md`, root `CURRENT_STATE.md`, durable decisions where needed, source/resource records, and pilot reconciliation where materially changed.

A chapter is not complete until applicable quality, compatibility, engagement, fallback and persistence gates pass.

---

## Phase 15 — Post-class calibration

Record actual time, overruns/early finishes, confusing concepts, effective resources, observed misconceptions, technical failures, PowerPoint/playback issues and successful visual/interactive elements. Use real classroom evidence to calibrate future timing/design baselines.
