# Current State

Last updated: 2026-09-05

## Project status

Plan v3.0 remains canonical, with durable policy refinements recorded in `OPERATING_BRIEF.md`, `SOURCE_POLICY.md`, `WORKFLOW.md`, `DECISIONS.md` and `GEMINI_REVIEW_WORKFLOW.md`.

The first real chapter is the pilot/calibration chapter. Full chapter analysis is complete, the **four-lesson split is user-approved**, Gemini Review Gate A has been completed externally and independently reconciled, source reconciliation pass 2 is complete, all four lesson plans are Gate-A reconciled, and **Lesson 1 + Lesson 2 storyboard draft stages are now complete**. Lesson 2 also has an explicit resource/asset map.

## Canonical repository

`iqbalhimel004/science-slides`

This is the only repository authorized for writes for this project.

## Durable source-authority rule

NCTB is the syllabus/chapter/exam-context source, **not automatic scientific authority**. Material science must be checked against current authoritative sources; outdated or misleading textbook treatment is preserved separately for exam awareness and corrected in classroom teaching.

## Universal checkpoint rule

**Finish → record → then continue.** Every meaningful completed stage must be saved to GitHub before proceeding.

## Permanent external-prompt rule

All prompts intended for Gemini/Canva/Beautiful.ai/Hyperagent/Codex or another external tool must be delivered in **one self-contained fenced code block** for one-click copy. Durable decision: `D-033`.

## Permanent Gemini review method

Planned Gemini review gates use a **fresh downloadable single-file Markdown bundle** plus one copy-ready prompt. Do not rely on Gemini browsing GitHub/imported repositories. Old bundles become stale when included canonical files change. Canonical procedure: `GEMINI_REVIEW_WORKFLOW.md`. Durable decision: `D-034`.

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
**LESSONS_1_2_STORYBOARDS_DRAFT_COMPLETE — LESSON_3_NEXT**

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

Canonical verdict:
**ACCEPT WITH TARGETED CHANGES; NO MATERIAL REPLAN REQUIRED**

## Lesson 1 storyboard — complete draft stage

Canonical files:
- `lessons/lesson-01/LESSON_PLAN.md`
- `lessons/lesson-01/STORYBOARD.md`
- `lessons/lesson-01/QA.md`

Structure:
- `L1-S01`–`L1-S14`: 14 CORE slides
- `L1-F01`–`L1-F02`: 2 FLEX slides
- CORE 43 min + FLEX 7 min = 50 min
- contingency 10 min

Internal QA: `PASS_WITH_NONBLOCKING_NOTES`.

Lesson 1 slide IDs are mapped in `COVERAGE_MATRIX.md`.

## Lesson 2 storyboard — complete draft stage

Canonical files:
- `lessons/lesson-02/LESSON_PLAN.md`
- `lessons/lesson-02/STORYBOARD.md`
- `lessons/lesson-02/RESOURCES.md`
- `lessons/lesson-02/QA.md`

Structure:
- `L2-S01`–`L2-S14`: 14 CORE slides
- `L2-F01`–`L2-F02`: 2 FLEX slides
- CORE 44 min + FLEX 8 min = 52 min
- contingency 8 min

Important decisions:
- actual/apparent position uses solid real rays + dashed backward extensions;
- stick, coin and fish applications precede the more abstract mirage/critical-angle sequence;
- mirage uses a temperature/refractive-index gradient visual, not a single hard mirror boundary;
- critical angle is explicitly the `r = 90°` threshold, not TIR itself;
- TIR requires both higher-index→lower-index propagation and `i > C`;
- optical fibre follows as repeated-TIR application;
- optional core/cladding note remains non-assessed and supplementary;
- PhET `Bending Light` is FLEX only; CORE remains fully offline;
- deterministic/custom ray diagrams are required for all high-risk scientific visuals.

Resource map IDs:
- `R2-01` apparent-position ray construction
- `R2-02` mirage gradient diagram
- `R2-03` critical-angle/TIR three-state sequence
- `R2-04` optical-fibre cutaway
- `R2-05` PhET Bending Light FLEX simulation
- `R2-06` textbook-style TIR practice redraw

Internal QA: `PASS_WITH_NONBLOCKING_NOTES` for storyboard stage.

Lesson 2 slide IDs are now mapped in `COVERAGE_MATRIX.md`.

## Current source-issue register

- `SI-11-001` spectacles outcome/body gap — documented; science supplement verified.
- `SI-11-002` normal-incidence nuance — resolved.
- `SI-11-003` slab incident/emergent angle geometry — resolved.
- `SI-11-004` film-camera chemistry context — resolved.
- `SI-11-005` mirage visualization/gradient clarification — resolved.
- `SI-11-006` cornea versus lens focusing role — resolved.
- `SI-11-007` eye-camera focusing analogy limit — resolved.

## Coverage state

- Lesson 1: concrete slide IDs mapped.
- Lesson 2: concrete slide IDs mapped.
- Lessons 3–4: pending.

## Gemini cadence evidence

Gate A was useful but required independent validation. Gate B remains mandatory after all four storyboards/resource mappings and before content freeze.

When Gate B is reached, generate a **fresh downloadable bundle** according to `GEMINI_REVIEW_WORKFLOW.md`; do not ask Gemini to browse GitHub.

## Renderer status

No permanent renderer is locked. RT-01 remains after storyboard/content-freeze prerequisites and before final deck rendering.

## Next authorized action

1. Develop Lesson 3 storyboard + resource mapping from the Gate-A-reconciled plan.
2. Map Lesson 3 slide IDs into `COVERAGE_MATRIX.md`.
3. Run Lesson 3 storyboard QA and checkpoint.
4. Repeat for Lesson 4.
5. Run chapter-wide storyboard/resource/duplication audit.
6. Generate a fresh downloadable Gemini Gate B bundle + one-click-copy prompt.
7. Reconcile Gate B, run final G1–G7, freeze content.
8. Run RT-01, select renderer routing, render and export-QA.

Do not render final decks yet.
