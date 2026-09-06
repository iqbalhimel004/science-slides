# New Chat Recovery Protocol

Version: 4.0
Last revised: 2026-09-06
Status: **ACTIVE — POST-RT-01**

## 1. Verify repository identity first

Authorized write repository:

`iqbalhimel004/science-slides`

Do not write to any other connected repository.

## 2. Current first-pilot recovery sequence

For the active first pilot chapter, read in this order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. active chapter `STATUS.md`
5. active lesson `STORYBOARD.md`, `RESOURCES.md`, and latest production QA if relevant
6. `FABLE_AUDIT_RECONCILIATION_2026-09-05.md` only when unresolved pilot items matter
7. deeper policy/template files only when the current task requires them

Do **not** restart renderer selection. RT-01 is complete.

## 3. Canonical state / precedence

GitHub is the durable source of truth. If old chat history or an older repository section conflicts with current canonical state, use this precedence:

1. `CURRENT_STATE.md`
2. `RENDERER_ROUTING.md`
3. `DECISIONS.md`
4. active chapter `STATUS.md`
5. latest stage-specific QA/reconciliation record
6. older historical planning/audit documents

Historical pre-RT-01 wording must not override current routing.

## 4. Renderer route — already decided

Current default production route:

**Controlled PptxGenJS authoring/rendering → deterministic SVG/shape scientific visuals → rendered QA → optional Canva controlled-import finishing → verified PPTX + verified PDF fallback.**

- PptxGenJS: primary science-deck authoring/rendering route.
- Canva: optional finishing/editing after controlled import; native AI is not the science authority.
- Beautiful.ai: low-risk prototype/layout inspiration only, not unattended full-deck science production.

Read `RENDERER_ROUTING.md` for evidence and exact constraints.

## 5. Active first pilot

Active chapter:

`chapters/class-8/science/chapter-11-light/`

Current production state is recorded in `CURRENT_STATE.md` and chapter `STATUS.md`.

At the 2026-09-06 checkpoint:

- content/storyboards are frozen;
- Gemini Gate A and targeted Gate B are complete/reconciled;
- RT-01 is complete;
- Lesson 1 controlled PPTX/PDF build passed production QA with nonblocking notes;
- Lesson 2 controlled production is the next authorized stage.

Do not redo completed planning/review/calibration unless a new material regression is found.

## 6. Source/science rule

NCTB controls curriculum/scope/exam context, not automatic scientific truth.

For material scientific claims:

- verify against current authoritative sources;
- preserve NCTB/exam wording separately when relevant;
- document mismatches in source issue/map records;
- never restore an outdated textbook claim merely because an old planning file contains it.

## 7. Timing rule

For a 60-minute class:

- CORE: normally about 40–45 min
- FLEX: normally about 5–10 min
- planned CORE + FLEX: about 50–55 min
- contingency: 5–10 min intentionally unallocated
- STRETCH: appendix/enrichment only

Questions, student responses, board work, media setup/debrief, activities and transitions count as real classroom time.

## 8. External prompt rule

Whenever the user must paste a prompt into Gemini, Canva, Beautiful.ai, Hyperagent, Codex or another external tool, provide the complete prompt in **one self-contained fenced code block**.

## 9. Gemini rule

Planned Gemini reviews use `GEMINI_REVIEW_WORKFLOW.md`:

- fresh single-file Markdown bundle from current canonical files;
- downloadable bundle for the user;
- one copy-ready prompt;
- raw response saved first;
- independent validation;
- `ACCEPT / PARTIAL / REJECT` reconciliation;
- checkpoint before continuing.

Gate B is targeted implementation QA, not a repeat of Gate A.

## 10. Artifact persistence rule

Read `ARTIFACT_PERSISTENCE.md` before/while producing controlled decks.

From Lesson 2 onward, a production stage is not durable merely because a PPTX/PDF existed in a temporary runtime. Preserve reproducibility records/source as defined there.

Lesson 1's first controlled build is a documented pilot exception: exact filenames/fingerprints and QA are recorded, but its original generation source was not durably committed. It must be normalized under the artifact-persistence policy before final chapter completion.

## 11. End-of-stage checkpoint

**Finish → record → then continue.**

At each meaningful stage update, as applicable:

- the actual artifact/specification/source file;
- active lesson production QA;
- chapter `STATUS.md`;
- root `CURRENT_STATE.md`;
- `DECISIONS.md` only for durable policy changes;
- source/resource records where affected.

The next chat must be able to continue from GitHub without needing the previous transcript.
