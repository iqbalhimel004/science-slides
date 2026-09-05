# Current State

Last updated: 2026-09-05

## Project status

Plan v3.0 remains canonical, with durable policy refinements recorded in `OPERATING_BRIEF.md`, `SOURCE_POLICY.md`, `WORKFLOW.md`, `DECISIONS.md` and `GEMINI_REVIEW_WORKFLOW.md`.

The first real chapter is the pilot/calibration chapter. Full chapter analysis is complete, the **four-lesson split is user-approved**, Gemini Review Gate A has been completed externally and independently reconciled, source reconciliation pass 2 is complete, all four lesson plans have been updated with validated Gate A changes, and **Lesson 1 storyboard draft + storyboard QA + coverage mapping are complete**.

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

## Permanent external-prompt rule

Whenever the user must paste a prompt into Gemini, Canva, Beautiful.ai, Hyperagent, Codex or another external tool, ChatGPT must provide the complete prompt in **one self-contained fenced code block** so it can be copied in one action.

Do not split one prompt across multiple blocks or require the user to merge prose manually.

Canonical durable decision: `DECISIONS.md` D-033.

## Permanent Gemini review method

Planned Gemini review gates use a **fresh downloadable single-file Markdown bundle**, not GitHub browsing/import as the default transport.

Canonical procedure:
`GEMINI_REVIEW_WORKFLOW.md`

Required sequence:

1. generate a consolidated bundle from current canonical GitHub files relevant to that review gate;
2. create/update a manifest with included files + fingerprint;
3. give the user the downloadable bundle;
4. give exactly one one-click-copy prompt in a single fenced code block;
5. user uploads bundle to Gemini and returns the full review text;
6. save raw review to GitHub;
7. independently validate material findings;
8. record `ACCEPT / PARTIAL / REJECT` dispositions;
9. implement only validated changes;
10. checkpoint status before moving on.

An old bundle becomes stale immediately when any included canonical file changes.

Future chats must use this same method for Gemini Gate B and later planned Gemini reviews unless the user explicitly changes the workflow.

Canonical durable decision: `DECISIONS.md` D-034.

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
**LESSON_1_STORYBOARD_DRAFT_COMPLETE — LESSON_2_NEXT**

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

## Lesson 1 storyboard — completed draft stage

Canonical files:

- `chapters/class-8/science/chapter-11-light/lessons/lesson-01/LESSON_PLAN.md`
- `chapters/class-8/science/chapter-11-light/lessons/lesson-01/STORYBOARD.md`
- `chapters/class-8/science/chapter-11-light/lessons/lesson-01/QA.md`

Storyboard structure:

- `L1-S01`–`L1-S14`: 14 CORE slides
- `L1-F01`–`L1-F02`: 2 FLEX slides
- CORE: 43 min
- FLEX: 7 min
- CORE + FLEX: 50 min
- contingency: 10 min

Internal storyboard QA:
`PASS_WITH_NONBLOCKING_NOTES` for storyboard stage.

Lesson 1 slide IDs are now mapped in `COVERAGE_MATRIX.md`.

Important storyboard choices:

- darkness/seeing retrieval hook;
- current-science light description + minimal non-assessed photon note;
- chapter-relevant light properties only;
- optical medium recap;
- pencil demo before causal mechanism;
- progressive interface/normal/ray vocabulary;
- optical density vs mass-density clarification;
- normal-incidence no-deviation case;
- paired bending rules + prediction;
- concept-chain summary + 4-question exit check;
- parallel-sided slab kept as FLEX with geometry-bound equal-angle rule;
- CORE has no internet dependency.

## Current source-issue register

- `SI-11-001` spectacles outcome/body gap — documented; science supplement verified.
- `SI-11-002` normal-incidence nuance — resolved.
- `SI-11-003` slab incident/emergent angle geometry — resolved.
- `SI-11-004` film-camera chemistry context — resolved.
- `SI-11-005` mirage visualization/gradient clarification — resolved.
- `SI-11-006` cornea versus lens focusing role — resolved.
- `SI-11-007` eye-camera focusing analogy limit — resolved.

## Key files now authoritative for ongoing storyboard work

- `CHAPTER_ANALYSIS.md`
- `LESSON_SPLIT_PROPOSAL_V2.md`
- `COVERAGE_MATRIX.md`
- `SOURCE_ISSUES.md`
- `SOURCE_MAP.md`
- `lessons/lesson-01/LESSON_PLAN.md`
- `lessons/lesson-01/STORYBOARD.md`
- `lessons/lesson-01/QA.md`
- `lessons/lesson-02/LESSON_PLAN.md`
- `lessons/lesson-03/LESSON_PLAN.md`
- `lessons/lesson-04/LESSON_PLAN.md`
- `reviews/GEMINI_GATE_A_RECONCILIATION_2026-09-05.md`

The earlier Gate A transport bundle is stale because canonical files changed after reconciliation. Do **not** reuse it.

## Gemini cadence evidence

Gate A was useful: it caught sequencing, prerequisite and analogy risks. It also produced at least one overgeneralized camera-focusing statement and an unsourced numeric example, confirming why Gemini findings must be independently validated rather than blindly adopted.

Gate B remains required after all four storyboards/resource mappings and before content freeze.

When Gate B is reached, generate a **fresh downloadable bundle** according to `GEMINI_REVIEW_WORKFLOW.md`; do not ask Gemini to browse GitHub.

## Renderer status

No permanent renderer is locked.

RT-01 remains after content/storyboard freeze prerequisites and before first final deck rendering.

## Next authorized action

1. Develop Lesson 2 storyboard from the Gate-A-reconciled plan.
2. Map Lesson 2 slide IDs into `COVERAGE_MATRIX.md`.
3. Run Lesson 2 storyboard QA and checkpoint.
4. Repeat for Lessons 3 and 4.
5. Complete resource mappings + chapter-wide storyboard audit.
6. Generate fresh downloadable Gemini Gate B bundle + one-click-copy prompt.
7. Reconcile Gate B, run G1–G7, freeze content.
8. Run RT-01, select renderer routing, render and export-QA.

Do not render final decks yet.
