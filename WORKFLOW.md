# Chapter Production Workflow

Version: 4.0
Last revised: 2026-09-06
Status: **ACTIVE — POST-RT-01**

## Phase 0 — Safety and state recovery

1. Verify the exact repository is `iqbalhimel004/science-slides`.
2. Read `OPERATING_BRIEF.md` and `CURRENT_STATE.md`.
3. Read `RENDERER_ROUTING.md` before any production/rendering work.
4. If a Gemini review gate is pending/current, read `GEMINI_REVIEW_WORKFLOW.md`.
5. If a chapter is active, read its `STATUS.md` and only the files needed for the current stage.
6. Treat GitHub as canonical operational memory. Do not rely on chat history as the only record of completed work.

## Universal user-prompt rule

Whenever the user must paste a prompt into an external tool, provide the whole prompt in **one self-contained fenced code block** so it can be copied in one action.

## Universal checkpoint rule

**Finish → record → then continue.**

A meaningful stage is not complete until its durable result is saved to GitHub and status is updated as applicable.

---

## Phase 1 — Chapter intake and source integrity

The user supplies the complete chapter as PDF or ordered screenshots.

Check:

- chapter identity and edition/year where possible;
- first/last page and page continuity;
- missing/cropped pages;
- readability of Bangla text, equations, tables and diagrams;
- source type: reliable text layer / partial text / scanned-image / screenshots.

Do not silently infer missing material. Critical wording must be checked against the visible source page/image when extraction is uncertain.

### Checkpoint

Save source identity/integrity records and update `STATUS.md` / `CURRENT_STATE.md`.

---

## Phase 2 — Full chapter analysis

Record:

- chapter scope and concept map;
- learning outcomes;
- prerequisites;
- key definitions/laws/formulas/units;
- diagrams/processes;
- experiments/activities;
- examples/applications/numericals;
- misconceptions/difficult points;
- exam-facing practice opportunities;
- total instructional load and visual complexity;
- claims that may be outdated/ambiguous/scientifically weak.

Distinguish what the textbook contains from whether it is scientifically current/correct.

### Checkpoint

Save `CHAPTER_ANALYSIS.md`, source issues and chapter state.

---

## Phase 3 — Determine lesson count and split

Split by logical instructional boundaries and realistic classroom load.

For each proposed lesson specify:

- title and concept scope;
- prerequisites;
- learning outcomes;
- CORE/FLEX/STRETCH;
- estimated time;
- boundary rationale;
- bridge to adjacent lessons.

Default 60-minute model:

- CORE ~40–45 min;
- FLEX ~5–10 min;
- planned CORE + FLEX ~50–55 min;
- 5–10 min contingency unallocated;
- STRETCH appendix-only.

Obtain user approval before final deck production.

### Checkpoint

Record approved split immediately.

---

## Phase 4 — Source verification and scientific reconciliation

### NCTB role

Use NCTB/current curriculum materials for:

- syllabus scope;
- learning outcomes;
- textbook wording students will encounter;
- exam-facing context;
- page-level provenance.

Do not treat NCTB as automatic scientific authority.

### Current-science verification

For material claims, verify against appropriate current authoritative sources.

For important definitions/laws/formulas/units/processes/diagrams/causal claims:

- pin NCTB page where relevant;
- verify what the page actually says;
- independently verify current science;
- record mismatches explicitly;
- distinguish exam wording from scientifically correct explanation.

### Checkpoint

Update `SOURCE_MAP.md`, `SOURCE_ISSUES.md`, relevant lesson files and status.

---

## Phase 5 — Lesson planning

Each lesson plan should contain:

- learning outcomes;
- CORE/FLEX/STRETCH classification;
- time budget;
- retrieval/prior-knowledge opener;
- teaching sequence;
- teacher/student actions;
- questions/prompts;
- hinge/check-for-understanding where useful;
- practice/application;
- misconception correction;
- summary + exit check;
- explicit NCTB/current-science distinction where needed.

Every response, board-writing segment, media launch, transition and debrief counts as real time.

### Checkpoint

Save the lesson plan and update state before the next major task.

---

## Phase 6 — Resource discovery

Search trusted existing resources before generating custom equivalents.

Record for accepted resources:

- source/creator;
- URL/reference;
- instructional purpose;
- target slide;
- classroom time;
- licensing/reuse note where material;
- online/offline status;
- static fallback.

### Checkpoint

Persist accepted resource/fallback choices.

---

## Phase 7 — Storyboard

For every slide/item record:

- slide ID/title;
- CORE/FLEX/STRETCH;
- purpose;
- approved content/specification;
- source/current-science/supplementary role;
- visual purpose/resource requirement;
- teacher/student action;
- expected response;
- estimated time;
- source references;
- notation source where relevant;
- fallback;
- transition.

Update `COVERAGE_MATRIX.md` with concrete slide IDs.

### Checkpoint

Save each stable storyboard/resource mapping and update status.

---

## Phase 8 — Independent review

Use Gemini selectively at high-value gates.

Follow `GEMINI_REVIEW_WORKFLOW.md`:

1. fresh single Markdown bundle from current canonical GitHub files;
2. downloadable file;
3. one copy-ready prompt;
4. save raw review first;
5. independently validate material findings;
6. record `ACCEPT / PARTIAL / REJECT`;
7. implement only validated changes;
8. checkpoint.

Gate B is targeted implementation QA, not a duplicate Gate A review.

---

## Phase 9 — Content QA and freeze

Before rendering verify:

- curriculum/scope;
- source provenance;
- scientific accuracy/currentness;
- formulas/units/calculations;
- timing;
- pedagogy/cognitive load;
- misconception handling;
- resource suitability;
- storyboard completeness.

Mark `CONTENT_FROZEN` only after applicable G1–G7 checks pass and state is recorded.

---

## Phase 10 — Renderer calibration status

RT-01 has already been completed for the first pilot.

Canonical routing:

`RENDERER_ROUTING.md`

Durable decision:

`DECISIONS.md` → `D-036`

Current route:

**Controlled PptxGenJS → deterministic SVG/shape science visuals → rendered QA → optional Canva controlled-import finishing → verified PPTX + verified PDF fallback.**

Do not repeat RT-01 unless tool behavior materially changes or the user explicitly asks to reconsider the decision.

---

## Phase 11 — Controlled production

Primary production steps:

1. read frozen storyboard/resource/QA files;
2. build high-risk scientific visuals deterministically;
3. assemble the controlled 16:9 PPTX with PptxGenJS;
4. render actual slides;
5. run scientific/typographic/layout/projector QA;
6. optionally import the controlled PPTX to Canva **only if** manual finishing materially improves the result;
7. if Canva is used, run post-import QA;
8. generate and verify PDF fallback;
9. preserve reproducibility/source records under `ARTIFACT_PERSISTENCE.md`;
10. checkpoint lesson state before continuing.

### Production tool roles

- PptxGenJS: primary controlled authoring/rendering.
- Canva: optional finishing/editing after controlled import.
- Beautiful.ai: low-risk prototype/layout inspiration only.
- Hyperagent: specialist deterministic SVG/equation/interactive/QA tasks where it adds value.

High-risk scientific diagrams must not be delegated to unconstrained native-AI generation.

---

## Phase 12 — Visual, export and classroom QA

Check the actual artifact:

- Bangla rendering and line breaks;
- equation/symbol rendering;
- text size and contrast;
- diagram labels/arrows;
- crop/layout integrity;
- projector readability;
- links/QRs;
- media/simulation launch;
- static/offline fallback;
- no scientific content drift;
- PDF fallback.

Classroom package should contain:

1. controlled editable PPTX;
2. verified PDF fallback;
3. fallback resources/assets for classroom-critical online/animated elements;
4. source/storyboard/resource/production-QA records;
5. reproducibility/build records required by `ARTIFACT_PERSISTENCE.md`.

### Checkpoint

Record exact pass/fail status and outstanding defects.

---

## Phase 13 — Chapter-wide final audit

Compare all lessons against the original chapter and verified current science.

Classify each meaningful textbook subsection as:

- Covered;
- Supplementary;
- Homework/self-study;
- Intentionally omitted with reason;
- Corrected/updated from textbook.

Also verify:

- no unnecessary duplication;
- prerequisites precede dependent concepts;
- lesson bridges are coherent;
- no content was lost during splitting;
- no outdated/erroneous textbook claim survived uncorrected;
- all production artifacts/fallbacks are durable and traceable.

---

## Phase 14 — Completion and handoff

Update:

- lesson/chapter QA records;
- chapter `STATUS.md`;
- root `CURRENT_STATE.md`;
- `DECISIONS.md` for durable policy changes;
- source/resource records;
- pilot reconciliation when a pending item is materially resolved/reclassified.

A chapter is not complete until applicable gates pass and repository state is current.

---

## Phase 15 — Post-class calibration

For the first few lessons/chapters record:

- actual time;
- overruns/early finishes;
- confusing concepts;
- effective resources;
- observed misconceptions;
- technical failures.

Use real classroom evidence to calibrate future timing and design baselines.
