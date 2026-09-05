# Gemini Gate A Consolidated Bundle — Manifest

Date: 2026-09-05
Status: GENERATED_FOR_USER_UPLOAD
Repository: `iqbalhimel004/science-slides`

## Purpose

A single Markdown bundle was generated for direct upload to Gemini because Gemini's repository import exposed an unreadable compressed representation and Gemini browsing could not fetch `github.com` / `raw.githubusercontent.com` in the user's session.

The generated user-delivery file is:

`GEMINI_GATE_A_BUNDLE.md`

Generated size: **77,451 bytes**  
SHA-256: `277087d105fe114bb95f531e8653d6c0c20454f541f1b51e8e5bf8063ed2e26f`

The bundle is a transport artifact, not a new source of truth. The canonical editable source remains the individual GitHub files listed below.

## Bundle contents

The bundle concatenates the following current canonical files, with file-boundary markers:

1. `reviews/GEMINI_GATE_A_PROMPT.md`
2. `CHAPTER_ANALYSIS.md`
3. `LESSON_SPLIT_PROPOSAL_V2.md`
4. `COVERAGE_MATRIX.md`
5. `SOURCE_ISSUES.md`
6. `SOURCE_MAP.md`
7. `lessons/lesson-01/LESSON_PLAN.md`
8. `lessons/lesson-02/LESSON_PLAN.md`
9. `lessons/lesson-03/LESSON_PLAN.md`
10. `lessons/lesson-04/LESSON_PLAN.md`

## Important correction captured before bundle generation

`CHAPTER_ANALYSIS.md` had retained stale first-draft three-lesson language even after the user approved four lessons. Before bundle generation it was rebased to:

- the full 2026 textbook source baseline;
- the approved four-lesson architecture;
- the current source-authority rule: NCTB controls curriculum/scope/exam context, while current authoritative sources control scientific correctness;
- current source issues and planning gate state.

Therefore the generated bundle uses the corrected four-lesson chapter analysis, not the stale three-lesson draft.

## Exact Gemini instruction

Attach `GEMINI_GATE_A_BUNDLE.md` to Gemini and send:

> Read the attached `GEMINI_GATE_A_BUNDLE.md` completely. Perform the full independent Gate A review exactly according to the instructions contained inside the file. Do not skip any required section. Independently verify material scientific claims using current authoritative sources.

Recommended model: Gemini Pro with extended/deep reasoning available in the user's interface.

## After Gemini responds

Do not treat the Gemini output as canonical automatically.

Required workflow:

1. return the full Gemini response to ChatGPT;
2. save the raw review in this `reviews/` directory;
3. independently validate every material finding against authoritative sources and actual NCTB source pages where relevant;
4. record `ACCEPT / PARTIAL / REJECT` dispositions with reasons;
5. update lesson/source files only for validated findings;
6. update `STATUS.md` and `CURRENT_STATE.md` immediately;
7. only then begin Lesson 1 storyboard.

## Reproduction rule

If the transport bundle ever needs regeneration, rebuild it from the ten canonical files above in the same order. Do not treat an older downloaded bundle as authoritative after any of those source files changes.
