# Current State

Last updated: 2026-09-06

## Project status

Plan v3.0 remains canonical, with durable policy refinements recorded in `OPERATING_BRIEF.md`, `SOURCE_POLICY.md`, `WORKFLOW.md`, `DECISIONS.md` and `GEMINI_REVIEW_WORKFLOW.md`.

The first real chapter is the pilot/calibration chapter. Full chapter analysis is complete, the four-lesson split is user-approved, Gemini Review Gate A is completed and independently reconciled, source reconciliation pass 2 is complete, all four lesson plans/storyboards/resource maps/QA records now exist, all textbook-body coverage rows are mapped to concrete slide IDs/dispositions, and the chapter-wide storyboard/resource/duplication audit is complete.

## Canonical repository

`iqbalhimel004/science-slides`

This is the only repository authorized for writes for this project.

## Durable workflow rules

- NCTB controls syllabus/exam context, not automatic scientific truth.
- Material science must be checked against current authoritative sources.
- **Finish → record → then continue.**
- External-tool prompts must be one self-contained fenced code block for one-click copy (`D-033`).
- Planned Gemini reviews use a fresh single-file downloadable Markdown bundle, not GitHub browsing/import (`D-034`, `GEMINI_REVIEW_WORKFLOW.md`).

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical path:
`chapters/class-8/science/chapter-11-light/`

Current status:
**ALL_4_STORYBOARDS_MAPPED — CHAPTER_AUDIT_COMPLETE — GEMINI_GATE_B_NEXT**

## Current four-lesson production state

| Lesson | CORE | FLEX | Planned | Contingency | Storyboard/resource/QA |
|---|---:|---:|---:|---:|---|
| L1 | 43 | 7 | 50 | 10 | complete draft stage |
| L2 | 44 | 8 | 52 | 8 | complete draft stage |
| L3 | 42 | 8 | 50 | 10 | complete draft stage |
| L4 | 46 | 8 | 54 | 6 | complete draft stage |

Chapter planned CORE + FLEX total: **206 minutes**.

Lesson 4's storyboard-level timing superseded the older 44-minute CORE estimate. The current 54-minute planned total still passes the project timing rule but must not absorb more CORE content without removing/compressing something else.

## Canonical lesson artifacts

### Lesson 1
- `lessons/lesson-01/LESSON_PLAN.md`
- `lessons/lesson-01/STORYBOARD.md`
- `lessons/lesson-01/RESOURCES.md`
- `lessons/lesson-01/QA.md`

### Lesson 2
- `lessons/lesson-02/LESSON_PLAN.md`
- `lessons/lesson-02/STORYBOARD.md`
- `lessons/lesson-02/RESOURCES.md`
- `lessons/lesson-02/QA.md`

### Lesson 3
- `lessons/lesson-03/LESSON_PLAN.md`
- `lessons/lesson-03/STORYBOARD.md`
- `lessons/lesson-03/RESOURCES.md`
- `lessons/lesson-03/QA.md`

### Lesson 4
- `lessons/lesson-04/LESSON_PLAN.md`
- `lessons/lesson-04/STORYBOARD.md`
- `lessons/lesson-04/RESOURCES.md`
- `lessons/lesson-04/QA.md`

## Coverage and audit

`COVERAGE_MATRIX.md` now maps C11-001 through C11-021 and all approved supplementary bridge concepts to concrete slide IDs/dispositions.

Chapter-wide audit:
`chapters/class-8/science/chapter-11-light/CHAPTER_STORYBOARD_AUDIT.md`

Audit verdict:
**PASS_TO_GEMINI_GATE_B_WITH_TARGETED_NOTES**

No material lesson-boundary change or missing textbook-body topic was found. Purposeful retrieval/repetition is justified. All four CORE lessons are offline-capable.

## Remaining scientific/source risks before freeze

- built ray diagrams must be visually checked for geometry/direction/labels;
- eye anatomy/accommodation/corrective-lens diagrams must be checked after drawing;
- film-processing wording must remain accurate after visual compression;
- pin a current authoritative digital-camera source if L4-S11 remains CORE;
- NCTB exercise-based redraws must be visually compared with the visible textbook pages;
- Gemini Gate B must be completed and independently reconciled.

## Gemini review state

Gate A:
- external review completed
- raw review saved
- independent reconciliation completed
- validated changes implemented

Gate B:
**READY TO PACKAGE — NOT YET RUN**

Required method:
1. generate fresh consolidated Markdown bundle from current canonical files;
2. record manifest/checksum/fingerprint in GitHub;
3. give user the downloadable bundle;
4. provide exactly one one-click-copy Gemini prompt in one fenced block;
5. user uploads bundle to Gemini and returns full review;
6. save raw review, independently validate findings, disposition ACCEPT/PARTIAL/REJECT;
7. implement validated changes and checkpoint.

## Renderer status

No renderer is locked. RT-01 remains after Gate B reconciliation and final content QA/freeze prerequisites.

## Next authorized action

**Generate the fresh Gemini Gate B bundle and manifest.**

Do not content-freeze or render final decks before Gate B reconciliation and the final G1–G7 pass.
