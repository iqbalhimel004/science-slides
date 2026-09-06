# Agent Operating Rules

Version: 4.1
Last revised: 2026-09-06
Status: **ACTIVE — POST-RT-01 / POST-PILOT-COMPATIBILITY UPDATE**

## Absolute write boundary

For this project, writes are authorized only to:

`iqbalhimel004/science-slides`

Before every GitHub write, verify the exact `repository_full_name`. Abort if it differs.

## Canonical memory and startup

GitHub is the durable source of truth. Chat history is temporary context.

For the active first pilot chapter, recover state in this order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
5. `ARTIFACT_PERSISTENCE.md`
6. active chapter `STATUS.md`
7. active lesson storyboard/resources/latest production QA/design revision
8. deeper policy/template files only when relevant

## Precedence rule

If an older file conflicts with current routing/state, prefer:

1. `CURRENT_STATE.md`
2. `RENDERER_ROUTING.md`
3. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
4. `ARTIFACT_PERSISTENCE.md`
5. active chapter `STATUS.md`
6. latest stage-specific QA/reconciliation record
7. older planning/audit records

Do not revive pre-RT-01 or pre-pilot-production assumptions.

## Normal production scope

Default: one complete textbook chapter per production chat.

If context becomes operationally too large, save an exact GitHub checkpoint before continuing in a new chat.

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

Count questions, student responses, board work, examples, activities, media setup/debrief, simulation/interaction time, transitions and exit checks as real time.

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
- high visual engagement without decorative clutter;
- no rigid 7–10-minute attention-span rule;
- motion only when pedagogically justified;
- static/offline fallback for classroom-critical online/animated elements.

A concept-heavy lesson must not become fully static merely because that is easier to generate. Storyboard-planned progressive reveal, prediction, live demo, simulation or interaction must either be implemented or intentionally reclassified with a reason.

## Tool routing — locked after RT-01

Canonical record: `RENDERER_ROUTING.md`.

- ChatGPT: lead content/pedagogy/QA/state coordination.
- PptxGenJS: **primary controlled science-deck authoring/rendering route**.
- Canva: optional controlled-import finishing/editing/hosting; native AI is not the final science authority.
- Beautiful.ai: low-risk layout exploration/prototyping only.
- Hyperagent: specialist deterministic SVG/equation/interactive/QA work where it adds value.
- Gemini AI Pro: independent targeted review/research.
- NotebookLM: conditional source-grounded support only when useful.

## Microsoft PowerPoint compatibility — mandatory production gate

The first Lesson 1 pilot proved that internal ZIP/XML/LibreOffice/render checks are not sufficient: Microsoft PowerPoint may still show a repair warning.

Therefore:

- the exact user-facing PPTX must be smoke-tested in Microsoft PowerPoint when PowerPoint is available;
- any repair/recovery warning means that artifact FAILS;
- only the repaired/rebuilt artifact that opens without warning may become current;
- after any LibreOffice or other normalization/resave operation, retest planned animation/reveal/hyperlink/media behaviour in PowerPoint;
- do not assume a normalization pass preserves native animation or interactive features.

Read `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md` for the full gate.

## Progressive reveal / animation preference

For science-critical progressive construction:

1. staged duplicate-slide reveal / predict-then-reveal;
2. deterministic static states;
3. PowerPoint-native animation only when it adds real instructional value and can be reliably tested.

This preference protects PowerPoint compatibility and PDF/static fallback while still keeping lessons dynamic.

## Visual-attractiveness hard gate

A scientifically correct but materially unattractive, repetitive, box-heavy or utilitarian pilot deck is not classroom-ready.

The first pilot must establish a user-approved visual/motion standard before later lessons inherit it.

Lesson 1 v2 is the current master-style prototype.

## Controlled artifact persistence

Read and follow `ARTIFACT_PERSISTENCE.md`.

From Lesson 1 v2 onward, a controlled deck is not durably checkpointed until reproducible source/build records, artifact fingerprints, dynamic implementation records, compatibility status and production QA are committed.

Do not commit font files, secrets or credentials.

## External-prompt rule

Any prompt the user must paste into an external tool must be provided as one self-contained fenced code block.

## Completion discipline

A chapter is not complete until source/science/timing/pedagogy/visual/PowerPoint-compatibility/export/fallback/coverage/continuity/reproducibility checks pass and repository state is updated.

Universal stage rule:

**Finish → record → then continue.**
