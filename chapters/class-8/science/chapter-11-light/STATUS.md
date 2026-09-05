# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science (বিজ্ঞান)
- Chapter: 11 — আলো
- Current status: **LESSONS_1_2_3_STORYBOARDS_DRAFT_COMPLETE — LESSON_4_NEXT**
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
- Coverage matrix: Lessons 1–3 concrete slide IDs mapped; Lesson 4 pending.

## Current production split

| Lesson | Working title | Plan status | Storyboard status | CORE | FLEX | Planned |
|---|---|---|---|---:|---:|---:|
| 1 | আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম | GATE_A_RECONCILED_PLAN | **DRAFT_COMPLETE / QA_PASS_WITH_NOTES** | 43 min | 7 min | 50 min |
| 2 | প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন | GATE_A_RECONCILED_PLAN | **DRAFT_COMPLETE / RESOURCE_MAP_COMPLETE / QA_PASS_WITH_NOTES** | 44 min | 8 min | 52 min |
| 3 | উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা | GATE_A_RECONCILED_PLAN | **DRAFT_COMPLETE / RESOURCE_MAP_COMPLETE / QA_PASS_WITH_NOTES** | 42 min | 8 min | 50 min |
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

Internal QA: `PASS_WITH_NONBLOCKING_NOTES` for storyboard stage.

## Lesson 3 checkpoint

Files:
- `lessons/lesson-03/LESSON_PLAN.md`
- `lessons/lesson-03/STORYBOARD.md`
- `lessons/lesson-03/RESOURCES.md`
- `lessons/lesson-03/QA.md`

Structure:
- 13 CORE slides: `L3-S01`–`L3-S13`
- 2 FLEX slides: `L3-F01`–`L3-F02`
- CORE 42 min + FLEX 8 min = 50 min
- contingency 10 min

Key storyboard decisions:
- minimal converging/diverging lens prerequisite only; no lens formula/power/sign convention;
- focus/focal length introduced only as needed for magnifier reasoning;
- real/virtual + erect/inverted + magnified/reduced vocabulary split across two slides;
- magnifying glass explicitly requires object inside focal length and produces virtual, erect, enlarged image;
- human eye taught by functional groups instead of nine isolated labels;
- cornea identified as the major initial refracting/focusing surface; crystalline lens fine-tunes through accommodation;
- pupil explicitly taught as an opening in the iris;
- accommodation visual must show lens-shape change, not lens translation toward/away from retina;
- spectacles slide clearly labelled supplementary because NCTB outcome exists but body explanation is missing;
- myopia gets a minimal diverging-lens prerequisite; hyperopia gets a minimal converging-lens correction concept;
- CORE remains fully offline.

Resource mapping:
- `R3-01` converging/diverging lens comparison
- `R3-02` image-vocabulary mini-panels
- `R3-03` magnifying-glass ray construction
- `R3-04` human-eye functional-group cross-section
- `R3-05` accommodation two-state sequence
- `R3-06` spectacles minimum correction concept
- `R3-07` eye labelling practice
- `R3-08` corrective-lens FLEX extension

Internal QA: `PASS_WITH_NONBLOCKING_NOTES` for storyboard stage.

Before freeze, magnifier rays, eye labels, accommodation mechanism and corrective-lens diagrams must all be visually/scientifically inspected after drawing.

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
- Coverage audit: Lessons 1–3 mapped; Lesson 4 pending.
- Duplication audit: full four-storyboard audit pending.
- Cross-lesson continuity: PASS at plan level; storyboard-level audit pending.

## Gemini cadence

Gate A is completed and reconciled.

Gate B remains required after **all four storyboards + resource mappings** are complete and immediately before content freeze. Gate B must use the single-file downloadable bundle workflow in `GEMINI_REVIEW_WORKFLOW.md`.

## Next authorized action

1. Develop Lesson 4 storyboard and resource mapping from the Gate-A-reconciled plan.
2. Map Lesson 4 slide IDs into `COVERAGE_MATRIX.md`.
3. Run Lesson 4 storyboard QA and checkpoint.
4. Run chapter-wide storyboard/resource/duplication audit.
5. Generate fresh downloadable Gemini Gate B bundle + one-click-copy prompt.
6. Reconcile Gate B, run final G1–G7, freeze content.
7. Run RT-01, select renderer routing, render and export-QA.

Do not render final decks yet.
