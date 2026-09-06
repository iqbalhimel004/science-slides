# Gemini Independent Review Protocol

Status: **LEGACY GUIDANCE — SUPERSEDED FOR PLANNED REVIEWS BY `GEMINI_REVIEW_WORKFLOW.md`**

This file preserves the original adversarial-review posture. It is **not** the operational transport/process authority for current planned Gemini review gates.

For any current or future planned Gemini review, use:

`GEMINI_REVIEW_WORKFLOW.md`

That workflow requires:

- a fresh single-file Markdown bundle built from current canonical GitHub files;
- a downloadable bundle for the user;
- one self-contained copy-ready prompt;
- raw Gemini response saved first;
- independent validation of material findings;
- `ACCEPT / PARTIAL / REJECT` reconciliation;
- checkpoint before continuing.

Gate B is targeted implementation QA, not a duplicate Gate A review.

## Preserved review posture

Gemini is an optional independent/adversarial reviewer. It does not replace primary sources, current authoritative science, or canonical project state.

Useful review purposes include:

- difficult or ambiguous science;
- chapter decomposition sanity checks;
- missing-topic detection;
- source conflicts;
- misconception detection;
- targeted pre-freeze implementation risk;
- final coverage/continuity review when warranted.

Ask Gemini to find concrete problems, not merely endorse the plan.

## Acceptance rule

For every Gemini finding:

1. independently verify it against the textbook and/or authoritative sources;
2. classify it as `ACCEPT`, `PARTIAL`, `REJECT`, or unresolved;
3. update canonical files only for validated findings;
4. record durable policy changes in `DECISIONS.md` when relevant.

Model agreement alone is not evidence.

## Precedence

If this legacy file conflicts with `GEMINI_REVIEW_WORKFLOW.md`, `CURRENT_STATE.md`, `OPERATING_BRIEF.md`, or a current chapter review reconciliation, the newer canonical record wins.
