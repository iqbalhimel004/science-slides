# Current State

Last updated: 2026-09-05

## Project status

Plan v3.0 remains canonical, with durable policy refinements recorded in `OPERATING_BRIEF.md`, `SOURCE_POLICY.md`, `WORKFLOW.md` and `DECISIONS.md`.

The first real chapter is the pilot/calibration chapter. Full chapter analysis is complete, the **four-lesson split is user-approved**, Gemini Review Gate A has been completed externally and independently reconciled, source reconciliation pass 2 is complete, and all four lesson plans have been updated with validated Gate A changes.

## Canonical repository

`iqbalhimel004/science-slides`

This is the only repository authorized for writes for this project.

## Durable source-authority rule

NCTB is the syllabus/chapter/exam-context source, **not automatic scientific authority**.

- do not infer scientific currentness from a recent print/revision year;
- verify material scientific claims against current authoritative sources;
- when NCTB is outdated, ambiguous, misleading or wrong, record textbook wording and current science separately;
- teach scientifically current/correct explanations;
- preserve exam-context wording separately where useful.

## Universal checkpoint rule

**Finish → record → then continue.**

Every meaningful completed stage must be saved to GitHub before proceeding.

## Active textbook baseline

Full **2026 Class 8 Science** PDF supplied by the user.

Canonical source record:
`sources/class-8/science/2026/SOURCE_RECORD.md`

Important source facts:
- printed Chapter 11 range: 108–118
- working-copy PDF range: 113–123
- scanned/image PDF
- raw PDF count: 162 pages
- ChatGPT ingestion exposed 150 pages
- visible rendered pages are authoritative for critical wording

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical path:
`chapters/class-8/science/chapter-11-light/`

Current status:
**GEMINI_GATE_A_RECONCILED — STORYBOARD_READY**

## Current four-lesson plan

1. **আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম** — CORE 43 + FLEX 7 = 50 min
2. **প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন** — CORE 44 + FLEX 8 = 52 min
3. **উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা** — CORE 42 + FLEX 8 = 50 min
4. **আলোক-চিত্রগ্রাহী ক্যামেরা, চোখের সাথে তুলনা ও অধ্যায় সংশ্লেষ** — CORE 44 + FLEX 8 = 52 min

Total planned CORE + FLEX: approximately **204 minutes** across four classes.

## Gemini Review Gate A — completed

Raw external review:
`chapters/class-8/science/chapter-11-light/reviews/GEMINI_GATE_A_RAW_2026-09-05.md`

Independent reconciliation:
`chapters/class-8/science/chapter-11-light/reviews/GEMINI_GATE_A_RECONCILIATION_2026-09-05.md`

Gemini verdict:
`PASS_WITH_TARGETED_CHANGES`

Canonical verdict:
**ACCEPT WITH TARGETED CHANGES; NO MATERIAL REPLAN REQUIRED**

### Implemented changes

- L1: pencil-in-water phenomenon moved before abstract speed-change/optical-density explanation.
- L1: separate wave-particle-duality block removed; only a very brief non-assessed photon note remains because the user explicitly wanted “আলো কী দিয়ে তৈরি” addressed.
- L2: mirage clarified as a refractive-index-gradient / progressively bending ray phenomenon; avoid a single hard mirror-like boundary.
- L3: minimum diverging/concave-lens action introduced before myopia spectacle correction.
- L3: cornea recognized as the major initial focusing surface; crystalline lens fine-tunes through accommodation.
- L3: anatomy reorganized by functional groups to reduce overload.
- L4: eye-camera focusing comparison now explicitly says similar function, different mechanism; no universal claim that all cameras focus by one mechanism.
- Gemini kerosene/water numeric example was not adopted because its specific values were not independently source-pinned.

## Current source-issue register

- `SI-11-001` spectacles outcome/body gap — documented; science supplement verified.
- `SI-11-002` normal-incidence nuance — resolved.
- `SI-11-003` slab incident/emergent angle geometry — resolved.
- `SI-11-004` film-camera chemistry context — resolved.
- `SI-11-005` mirage visualization/gradient clarification — resolved.
- `SI-11-006` cornea versus lens focusing role — resolved.
- `SI-11-007` eye-camera focusing analogy limit — resolved.

## Key files now authoritative for storyboard work

- `CHAPTER_ANALYSIS.md`
- `LESSON_SPLIT_PROPOSAL_V2.md`
- `COVERAGE_MATRIX.md`
- `SOURCE_ISSUES.md`
- `SOURCE_MAP.md`
- `lessons/lesson-01/LESSON_PLAN.md`
- `lessons/lesson-02/LESSON_PLAN.md`
- `lessons/lesson-03/LESSON_PLAN.md`
- `lessons/lesson-04/LESSON_PLAN.md`
- `reviews/GEMINI_GATE_A_RECONCILIATION_2026-09-05.md`

The earlier transport bundle is now stale because canonical files changed after reconciliation. Do **not** reuse `GEMINI_GATE_A_BUNDLE.md` as a source of current planning truth.

## Gemini cadence evidence

Gate A was useful: it caught sequencing, prerequisite and analogy risks. It also produced at least one overgeneralized camera-focusing statement and an unsourced numeric example, confirming why Gemini findings must be independently validated rather than blindly adopted.

Gate B remains required after all four storyboards/resource mappings and before content freeze.

## Renderer status

No permanent renderer is locked.

RT-01 remains after content/storyboard freeze prerequisites and before first final deck rendering.

## Next authorized action

1. Read `templates/STORYBOARD_TEMPLATE.md`.
2. Develop Lesson 1 storyboard from the Gate-A-reconciled plan.
3. Assign slide IDs into `COVERAGE_MATRIX.md` as storyboard sections stabilize.
4. Continue Lessons 2–4 storyboards/resource mapping.
5. Run chapter-wide storyboard audit.
6. Run Gemini Gate B.
7. Reconcile Gate B, run G1–G7, freeze content.
8. Run RT-01, select renderer routing, render and export-QA.

Do not render final decks yet.
