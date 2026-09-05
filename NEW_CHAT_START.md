# New Chat Recovery Protocol

Version: 3.0
Last revised: 2026-09-05

## 1. Verify repository identity first

Authorized write repository:

`iqbalhimel004/science-slides`

Do not write to any other connected repository.

## 2. Minimal recovery sequence

Read in this order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. active chapter `STATUS.md`, if one exists
4. only the current chapter/lesson files needed for the immediate task

Read `PROJECT_MASTER.md`, `WORKFLOW.md`, `SOURCE_POLICY.md`, `QUALITY_GATES.md`, `TOOL_ROUTING.md`, `SLIDE_STYLE_GUIDE.md`, `VISUAL_ENGAGEMENT_SYSTEM.md`, or `DECISIONS.md` only when the task specifically requires those details.

This replaces the former requirement to preload every root policy file into every new chat.

## 3. Canonical-state rule

Use the repository as the source of truth. If an old conversation conflicts with current repository state, prefer the current repository unless the user explicitly overrides it.

## 4. Chapter scope

Default: one production chat handles one complete textbook chapter.

If the chat becomes operationally too large, do not rely on an ad-hoc conversational summary. Save the exact stage/status and required handoff state in GitHub before continuing in a new chat.

## 5. Chapter intake

If no chapter is active, wait for the user to provide the complete chapter PDF or ordered screenshots.

Then:

- verify completeness/order/readability
- classify text-layer/OCR reliability
- analyze the full visible chapter before lesson splitting
- verify critical wording against visible source pages where extraction is uncertain

## 6. Timing rule

For the current 60-minute requirement:

- CORE ~40–45 min
- FLEX ~5–10 min
- CORE + FLEX target ~50–55 min
- 5–10 min contingency remains unallocated
- STRETCH is appendix-only

## 7. End-of-stage handoff

Update as applicable:

- `CURRENT_STATE.md`
- chapter `STATUS.md`
- chapter/lesson source/storyboard/QA files
- `DECISIONS.md` for durable new decisions

The next chat must be able to continue from GitHub without needing the previous chat transcript.
