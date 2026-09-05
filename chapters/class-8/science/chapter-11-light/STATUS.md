# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science (বিজ্ঞান)
- Chapter: 11 — আলো
- Current status: **LESSONS_1_2_STORYBOARDS_DRAFT_COMPLETE — LESSON_3_NEXT**
- Last updated: 2026-09-05

## Durable workflow rules now active

- External-tool prompts must be delivered in one self-contained fenced code block for one-click copying.
- Planned Gemini review gates use a fresh single consolidated Markdown bundle generated from current canonical GitHub files.
- The user downloads/uploads that bundle to Gemini and runs the supplied one-click-copy prompt.
- Do not depend on Gemini browsing GitHub/importing the repository.
- Old Gemini bundles become stale when any included canonical file changes.
- Canonical procedure: root `GEMINI_REVIEW_WORKFLOW.md`.
- Universal stage rule: **Finish → record → then continue.**

## Source intake

- Complete 2026 textbook received: Yes, full PDF supplied by the user.
- Canonical source record: `sources/class-8/science/2026/SOURCE_RECORD.md`
- Printed Chapter 11 range: 108–118.
- Working-copy PDF range: 113–123.
- Source type: scanned/image PDF; visible rendered pages authoritative for critical wording.

## Analysis / source / planning state

- Full chapter analysis: COMPLETE.
- Approved lesson count: **4**.
- Gemini Gate A: COMPLETED + RECONCILED.
- Source reconciliation pass 2: COMPLETE.
- Four lesson plans: GATE_A_RECONCILED_PLAN.
- Coverage matrix: Lessons 1–2 concrete slide IDs mapped; Lessons 3–4 pending.

## Current production split

| Lesson | Working title | Plan status | Storyboard status | CORE | FLEX | Planned |
|---|---|---|---|---:|---:|---:|
| 1 | আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম | GATE_A_RECONCILED_PLAN | **DRAFT_COMPLETE / QA_PASS_WITH_NOTES** | 43 min | 7 min | 50 min |
| 2 | প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন | GATE_A_RECONCILED_PLAN | **DRAFT_COMPLETE / RESOURCE_MAP_COMPLETE / QA_PASS_WITH_NOTES** | 44 min | 8 min | 52 min |
| 3 | উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা | GATE_A_RECONCILED_PLAN | NOT_STARTED | 42 min | 8 min | 50 min |
| 4 | আলোক-চিত্রগ্রাহী ক্যামেরা, চোখের সাথে তুলনা ও অধ্যায় সংশ্লেষ | GATE_A_RECONCILED_PLAN | NOT_STARTED | 44 min | 8 min | 52 min |

Estimated total planned load: approximately **204 minutes CORE + FLEX** across four classes.

## Lesson 1 checkpoint

Files:
- `lessons/lesson-01/LESSON_PLAN.md`
- `lessons/lesson-01/STORYBOARD.md`
- `lessons/lesson-01/QA.md`

Structure:
- 14 CORE slides: `L1-S01`–`L1-S14`
- 2 FLEX slides: `L1-F01`–`L1-F02`
- CORE 43 min + FLEX 7 min = 50 min
- contingency 10 min

Internal QA: `PASS_WITH_NONBLOCKING_NOTES`.

## Lesson 2 checkpoint

Files:
- `lessons/lesson-02/LESSON_PLAN.md`
- `lessons/lesson-02/STORYBOARD.md`
- `lessons/lesson-02/RESOURCES.md`
- `lessons/lesson-02/QA.md`

Structure:
- 14 CORE slides: `L2-S01`–`L2-S14`
- 2 FLEX slides: `L2-F01`–`L2-F02`
- CORE 44 min + FLEX 8 min = 52 min
- contingency 8 min

Key storyboard decisions:
- retrieval of normal/angle/bending rules without reteaching L1;
- actual vs apparent position taught using real rays plus dashed backward extensions;
- stick → coin → fish applications progress from familiar to applied;
- mirage uses temperature/refractive-index gradient + progressive bending, not a single hard mirror-like boundary;
- critical angle built progressively and explicitly separated from TIR;
- TIR requires higher-index→lower-index direction plus `i > C`;
- optical fibre follows immediately as repeated-TIR application;
- PhET `Bending Light` is FLEX only; CORE remains fully offline;
- deterministic/custom scientific diagrams preferred for apparent position, mirage, critical angle/TIR and fibre.

Resource mapping:
- `R2-01` apparent-position ray construction
- `R2-02` mirage gradient diagram
- `R2-03` critical-angle/TIR three-state sequence
- `R2-04` optical-fibre cutaway
- `R2-05` PhET Bending Light FLEX simulation
- `R2-06` textbook-style TIR practice redraw

Internal QA: `PASS_WITH_NONBLOCKING_NOTES` for storyboard stage.

Before freeze, rendered ray geometry, mirage gradient, `i=C` vs `i>C`, fibre arrows and NCTB exercise redraw must all be visually inspected.

## Source reconciliation status

- `SI-11-001` spectacles outcome/body gap: VERIFIED_SOURCE_GAP / PARTIALLY_RESOLVED.
- `SI-11-002` normal-incidence nuance: RESOLVED.
- `SI-11-003` equal incident/emergent angle: RESOLVED as parallel-sided slab geometry dependent.
- `SI-11-004` film-camera chemistry: RESOLVED_WITH_CONTEXT_LABEL.
- `SI-11-005` mirage hard-boundary visualization risk: RESOLVED with gradient clarification.
- `SI-11-006` cornea/lens focusing roles: RESOLVED.
- `SI-11-007` eye-camera focusing analogy limit: RESOLVED.

## Chapter-wide QA state

- G0 Input integrity: PASS_WITH_NOTES.
- G1 Curriculum/scope analysis: PASS.
- G2 Critical source verification: PASS_FOR_STORYBOARD.
- G3 Scientific accuracy: PASS_FOR_STORYBOARD.
- G4 Timing: PASS_FOR_STORYBOARD.
- G5 Pedagogy/cognitive load: PASS_FOR_STORYBOARD.
- Coverage audit: Lessons 1–2 mapped; Lessons 3–4 pending.
- Duplication audit: full four-storyboard audit pending.
- Cross-lesson continuity: PASS at plan level; storyboard-level audit pending.

## Gemini cadence

Gate A is completed and reconciled.

Gate B remains required after **all four storyboards + resource mappings** are complete and immediately before content freeze. Gate B must use the single-file downloadable bundle workflow in `GEMINI_REVIEW_WORKFLOW.md`.

## Next authorized action

1. Develop Lesson 3 storyboard and resource mapping from the Gate-A-reconciled plan.
2. Map Lesson 3 slide IDs into `COVERAGE_MATRIX.md`.
3. Run Lesson 3 storyboard QA and checkpoint.
4. Repeat for Lesson 4.
5. Run chapter-wide storyboard/resource/duplication audit.
6. Generate fresh downloadable Gemini Gate B bundle + one-click-copy prompt.
7. Reconcile Gate B, run final G1–G7, freeze content.
8. Run RT-01, select renderer routing, render and export-QA.

Do not render final decks yet.
