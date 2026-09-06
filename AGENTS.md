# Agent Operating Rules

Version: 4.0
Last revised: 2026-09-06
Status: **ACTIVE — POST-RT-01**

## Absolute write boundary

For this project, writes are authorized only to:

`iqbalhimel004/science-slides`

Before every GitHub write, verify the exact `repository_full_name`. Abort if it differs. Do not mutate any other connected repository unless the user separately names and authorizes it.

## Canonical memory and startup

GitHub is the durable source of truth. Chat history is temporary context.

For the active first pilot chapter, recover state in this order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. active chapter `STATUS.md`
5. active lesson storyboard/resources/latest production QA
6. deeper policy/template files only when relevant

`FABLE_AUDIT_RECONCILIATION_2026-09-05.md` is historical/pilot evidence; read it when unresolved pilot items matter, not as a replacement for current state.

## Precedence rule

If an older file conflicts with current routing/state, prefer:

1. `CURRENT_STATE.md`
2. `RENDERER_ROUTING.md`
3. `DECISIONS.md`
4. active chapter `STATUS.md`
5. latest stage-specific QA/reconciliation record
6. older planning/audit records

Do not revive pre-RT-01 candidate-renderer assumptions.

## Normal production scope

Default: one complete textbook chapter per production chat.

If context becomes operationally too large, save an exact GitHub checkpoint before continuing in a new chat. Do not depend on an ad-hoc conversational summary.

## Chapter intake non-negotiables

When a chapter PDF/screenshots are supplied:

1. verify chapter identity, completeness, page order, readability and text-layer/OCR status;
2. do not silently infer missing/cropped/unreadable content;
3. analyze the entire visible chapter before deciding presentation count;
4. split by instructional load and concept boundaries, not page count;
5. verify critical wording against the visible source page/image when extraction is uncertain;
6. propose the <=60-minute lesson split and obtain user approval before final deck production.

## 60-minute rule

- CORE: ~40–45 min non-skippable
- FLEX: ~5–10 min useful but skippable
- CORE + FLEX: ~50–55 min planned
- contingency: 5–10 min intentionally unallocated
- STRETCH: appendix/enrichment only

Count questions, student responses, board work, examples, activities, media setup/debrief, transitions and exit checks as real time.

## Source discipline

- NCTB controls syllabus/scope/exam context, not automatic scientific truth.
- Important scientific claims must be checked against current authoritative sources.
- Tier-2 Bangladeshi education sources may support local wording/convention, not independent scientific validation by default.
- Keep exam-facing wording separate from corrected/current-science explanation when necessary.
- Record material source conflicts explicitly.

## Pedagogy / visual discipline

- retrieval/prior knowledge at the start;
- coherent concept sequence;
- meaningful student response in major segments;
- hinge/check-for-understanding where useful;
- guided practice/application;
- misconception correction where relevant;
- summary + exit check;
- visual engagement without decorative clutter;
- no rigid 7–10-minute attention-span rule;
- motion only when pedagogically justified;
- static/offline fallback for classroom-critical online/animated elements.

## Tool routing — locked after RT-01

Canonical record: `RENDERER_ROUTING.md`.

- ChatGPT: lead content/pedagogy/QA/state coordination.
- PptxGenJS: **primary controlled science-deck authoring/rendering route**.
- Canva: optional controlled-import finishing/editing/hosting; native AI is not the final science authority.
- Beautiful.ai: low-risk layout exploration/prototyping only; not unattended full-deck science production.
- Hyperagent: specialist deterministic SVG/equation/interactive/QA work where it adds value.
- Gemini AI Pro: independent targeted review/research, not duplicate primary authoring.
- NotebookLM: conditional source-grounded support only when useful.

Do not rerun RT-01 unless tool behaviour materially changes or the user explicitly asks to reconsider the decision.

## Controlled artifact persistence

Read and follow `ARTIFACT_PERSISTENCE.md`.

From Lesson 2 onward, a controlled deck is not durably checkpointed until reproducible source/build records are committed along with output filenames/fingerprints and production QA.

Do not commit font files, secrets or credentials.

## External-prompt rule

Any prompt the user must paste into an external tool must be provided as one self-contained fenced code block.

## Completion discipline

A chapter is not complete until source/science/timing/pedagogy/visual/export/fallback/coverage/continuity checks pass and repository state is updated.

Universal stage rule:

**Finish → record → then continue.**
