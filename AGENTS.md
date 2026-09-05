# Agent Operating Rules

Version: 3.0
Last revised: 2026-09-05

## Absolute write boundary

For this project, writes are authorized only to:

`iqbalhimel004/science-slides`

Before every GitHub write, verify the exact `repository_full_name`. Abort if it differs. Do not mutate any other connected repository unless the user separately names and authorizes it.

## Canonical memory and startup

GitHub is the durable source of truth. Chat history is temporary context.

For the first pilot chapter, recover state in this order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `FABLE_AUDIT_RECONCILIATION_2026-09-05.md`
4. `CLASSROOM_PROFILE.md`
5. task-relevant deeper policy/template files

The Fable reconciliation is required for the first pilot because it records accepted, rejected, partially accepted and pending audit findings.

## Normal production scope

Default: one complete textbook chapter per production chat.

If context becomes operationally too large, save an exact GitHub checkpoint before continuing in a new chat. Do not depend on an ad-hoc conversational summary.

## Chapter intake non-negotiables

When a chapter PDF/screenshots are supplied:

1. verify chapter identity, completeness, page order, readability and text-layer/OCR status
2. do not silently infer missing/cropped/unreadable content
3. analyze the entire visible chapter before deciding presentation count
4. split by instructional load and concept boundaries, not page count
5. verify critical wording against the visible source page/image when extraction is uncertain
6. propose the <=60-minute lesson split and obtain user approval before final deck production

The first deliverable is chapter analysis/decomposition, not a slide deck.

## 60-minute rule

For the current confirmed 60-minute class requirement:

- CORE: ~40–45 min non-skippable
- FLEX: ~5–10 min useful but skippable
- CORE + FLEX: ~50–55 min planned
- contingency: 5–10 min intentionally unallocated
- STRETCH: appendix/enrichment only

Count questions, student responses, board work, examples, activities, media setup/debrief, transitions and exit check as real time.

## Source discipline

- Current NCTB textbook/curriculum/teacher guide is primary for syllabus scope and exam-sensitive wording.
- Important definitions, laws, formulas, units and syllabus-critical claims must be source-traceable.
- Tier-2 Bangladeshi education sources may corroborate local wording/convention and explanation ideas; they are not independent scientific authority by default.
- Authoritative Tier-3 sources may validate science and provide licensed resources.
- Keep exam-safe/source-grounded wording separate from simpler classroom explanation when useful.
- Record material source conflicts explicitly.

## Pedagogy / visual discipline

- retrieval/prior knowledge at the start
- coherent concept sequence
- meaningful student response in major segments
- hinge/check-for-understanding where useful
- guided practice/application
- misconception correction where relevant
- summary + exit check
- visual engagement without decorative clutter
- no rigid 7–10-minute attention-span rule; use segment/response design instead
- motion only when pedagogically justified
- static/offline fallback for classroom-critical online/animated elements

## Tool-routing rules

Do not assume one renderer is permanently best before testing.

- ChatGPT: lead content/pedagogy/QA/state coordination
- NotebookLM: conditional source-grounded support
- Gemini AI Pro: targeted independent review/research
- Beautiful.ai: candidate full-deck renderer
- Canva: candidate full-deck renderer + specialist visual tool
- Hyperagent: specialist build/QA/interactive engine

Before the first final deck, run RT-01 on representative Bangla/science content and record the renderer decision in `DECISIONS.md`.

## Completion discipline

A chapter is not complete until source/science/timing/pedagogy/visual/export/fallback/coverage/continuity checks pass and repository state is updated.
