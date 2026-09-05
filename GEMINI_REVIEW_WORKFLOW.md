# Gemini Review Workflow — Science Slides

Version: 1.0
Last revised: 2026-09-05

## Purpose

Standardize all planned Gemini review gates so future chats do not waste time on GitHub import/browsing limitations and the user can run reviews with minimal friction.

## Core rule

For every planned Gemini review gate:

1. build one consolidated Markdown bundle from the **current canonical GitHub files** relevant to that gate;
2. generate the bundle as a downloadable user file;
3. record a GitHub manifest containing:
   - gate name;
   - included canonical files;
   - generation date;
   - file size;
   - SHA-256 or equivalent fingerprint;
   - stale-bundle rule;
4. give the user exactly one self-contained, one-click-copy prompt in a single fenced code block;
5. user uploads the bundle to Gemini and runs the review;
6. user returns Gemini's full text response to ChatGPT;
7. save the raw Gemini review immediately in the chapter `reviews/` directory;
8. independently validate every material Gemini finding against authoritative sources and actual NCTB pages where relevant;
9. record `ACCEPT / PARTIAL / REJECT` dispositions with reasons;
10. implement only validated changes;
11. update relevant canonical artifacts plus `STATUS.md` and `CURRENT_STATE.md` immediately;
12. only then proceed to the next production stage.

## Important constraints

- Do not rely on Gemini being able to browse `github.com`, `raw.githubusercontent.com`, or a GitHub repository import.
- A Gemini bundle is a transport snapshot, **not** a canonical source of truth.
- If any included canonical file changes after bundle generation, the old bundle is stale and must not be reused.
- Gemini is an independent reviewer, not the scientific authority and not the canonical project author.
- Gemini findings never modify the project automatically.
- Current authoritative science overrides outdated textbook science; NCTB remains the curriculum/scope/exam-context source.

## Standard prompt format

Whenever a bundle is ready, provide a single copy-ready prompt like this, customized to the gate:

```text
Read the attached `<BUNDLE_FILENAME>.md` completely before reviewing anything.

Perform the full `<GATE_NAME>` independent review exactly according to the instructions contained inside the bundle. Do not skip any required section or required source file embedded in the bundle.

Important rules:
- Treat NCTB as curriculum/scope/exam-context, not final scientific authority.
- Independently verify material scientific claims using current authoritative sources.
- Flag outdated, misleading, ambiguous, scientifically incorrect, pedagogically weak, duplicated, missing, or unrealistic content where relevant to this gate.
- Cite authoritative evidence for material scientific findings.
- Do not rewrite the entire course for stylistic preference.
- Do not inflate Class 8 scope unnecessarily.
- Use exactly the required output structure specified inside the bundle.

This is an independent read-only review. Return the complete review in text.
```

The actual prompt should remain one fenced code block so the user can copy it in one action.

## Gate A procedure

Purpose: pre-storyboard planning audit.

Bundle should normally include:

- Gate A instructions
- chapter analysis
- approved lesson split
- coverage matrix
- source issues
- source map
- all approved/reconciled detailed lesson plans

After return:

- raw review → GitHub
- independent reconciliation → GitHub
- validated plan/source changes → GitHub
- chapter state becomes storyboard-ready only after reconciliation

## Gate B procedure

Purpose: full pre-content-freeze storyboard audit.

Run only after all lesson storyboards and resource mappings for the chapter are complete.

Bundle should normally include:

- Gate B instructions
- current chapter analysis / approved split
- current source map + source issues
- coverage matrix with actual slide IDs
- all lesson plans
- all four storyboards
- resource/asset records required to understand critical visuals/simulations/fallbacks
- chapter-wide storyboard audit if already available

Gate B should review:

- slide-level scientific wording and diagram risk
- current-science correctness vs outdated NCTB wording
- chapter coverage and omissions
- duplication across presentations
- prerequisite order and cross-lesson continuity
- misconception handling
- cognitive load / visual logic
- realistic timing
- exam-facing gaps or overreach
- resource dependency/fallback risk

After return:

- save raw review
- independently reconcile every material finding
- update only validated items
- rerun relevant G1–G7 checks
- content freeze only after remaining blockers are resolved

## Future/new-chat recovery rule

A new chat that reaches a Gemini review gate must read:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `GEMINI_REVIEW_WORKFLOW.md`
4. active chapter `STATUS.md`
5. gate-relevant chapter/lesson files

Then it must create a fresh single-file review bundle from current canonical files instead of reusing an old bundle or asking Gemini to browse GitHub.

## Copy-ready prompt rule

All external-tool prompts, not only Gemini prompts, should be delivered as one self-contained fenced code block whenever the user is expected to copy/paste them.
