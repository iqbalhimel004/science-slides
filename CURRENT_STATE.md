# Current State

Last updated: 2026-09-05

## Project status

Plan v3.0 remains canonical, with durable policy refinements recorded in `OPERATING_BRIEF.md`, `SOURCE_POLICY.md`, `WORKFLOW.md`, `DECISIONS.md` and `GEMINI_REVIEW_WORKFLOW.md`.

The first real chapter is the pilot/calibration chapter. Full chapter analysis is complete, the **four-lesson split is user-approved**, Gemini Review Gate A has been completed externally and independently reconciled, source reconciliation pass 2 is complete, all four lesson plans are Gate-A reconciled, and **Lesson 1 + Lesson 2 + Lesson 3 storyboard draft stages are now complete**. Lessons 2 and 3 have explicit resource/asset maps.

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
**LESSONS_1_2_3_STORYBOARDS_DRAFT_COMPLETE — LESSON_4_NEXT**

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

Internal QA: `PASS_WITH_NONBLOCKING_NOTES`.

## Lesson 3 storyboard — complete draft stage

Canonical files:
- `lessons/lesson-03/LESSON_PLAN.md`
- `lessons/lesson-03/STORYBOARD.md`
- `lessons/lesson-03/RESOURCES.md`
- `lessons/lesson-03/QA.md`

Structure:
- `L3-S01`–`L3-S13`: 13 CORE slides
- `L3-F01`–`L3-F02`: 2 FLEX slides
- CORE 42 min + FLEX 8 min = 50 min
- contingency 10 min

Important decisions:
- convex/converging and concave/diverging action introduced qualitatively only;
- no lens formula, power, sign convention or numerical ray-tracing burden in CORE;
- focus/focal length introduced only for magnifier reasoning;
- real/virtual and orientation/magnification vocabulary kept to the minimum needed by this chapter;
- magnifier requires object inside focal length and forms virtual, erect, enlarged image;
- eye anatomy is staged by functional group rather than textbook-dump labelling;
- cornea is explicitly the major initial refracting/focusing surface and crystalline lens fine-tunes through accommodation;
- pupil is an opening in the iris;
- accommodation uses lens-shape/optical-power change, not movement toward/away from retina;
- spectacles content is visibly marked as supplementary source-gap repair;
- myopia gets the minimum diverging-lens prerequisite and hyperopia the minimum converging-lens correction concept;
- no internet is required for CORE.

Resource map IDs:
- `R3-01` converging/diverging lens comparison
- `R3-02` image-vocabulary mini-panels
- `R3-03` magnifying-glass ray construction
- `R3-04` human-eye functional-group cross-section
- `R3-05` accommodation two-state sequence
- `R3-06` spectacles minimum correction concept
- `R3-07` eye labelling practice
- `R3-08` corrective-lens FLEX extension

Internal QA: `PASS_WITH_NONBLOCKING_NOTES` for storyboard stage.

Lesson 3 slide IDs are mapped in `COVERAGE_MATRIX.md`.

Before content freeze, magnifier rays, eye anatomy labels, accommodation visual and corrective-lens ray diagrams must be scientifically/visually inspected after drawing.

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
- Lesson 3: concrete slide IDs mapped.
- Lesson 4: pending.

## Gemini cadence evidence

Gate A was useful but required independent validation. Gate B remains mandatory after all four storyboards/resource mappings and before content freeze.

When Gate B is reached, generate a **fresh downloadable bundle** according to `GEMINI_REVIEW_WORKFLOW.md`; do not ask Gemini to browse GitHub.

## Renderer status

No permanent renderer is locked. RT-01 remains after storyboard/content-freeze prerequisites and before final deck rendering.

## Next authorized action

1. Develop Lesson 4 storyboard + resource mapping from the Gate-A-reconciled plan.
2. Map Lesson 4 slide IDs into `COVERAGE_MATRIX.md`.
3. Run Lesson 4 storyboard QA and checkpoint.
4. Run chapter-wide storyboard/resource/duplication audit.
5. Generate a fresh downloadable Gemini Gate B bundle + one-click-copy prompt.
6. Reconcile Gate B, run final G1–G7, freeze content.
7. Run RT-01, select renderer routing, render and export-QA.

Do not render final decks yet.
