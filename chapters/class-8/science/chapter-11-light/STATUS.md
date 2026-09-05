# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science (বিজ্ঞান)
- Chapter: 11 — আলো
- Current status: **LESSON_1_STORYBOARD_DRAFT_COMPLETE — LESSON_2_NEXT**
- Last updated: 2026-09-05

## Durable workflow rules now active

- External-tool prompts must be delivered in one self-contained fenced code block for one-click copying.
- Planned Gemini review gates use a fresh single consolidated Markdown bundle generated from current canonical GitHub files.
- The user downloads/uploads that bundle to Gemini and runs the supplied one-click-copy prompt.
- Do not depend on Gemini browsing GitHub/importing the repository.
- Old Gemini bundles become stale when any included canonical file changes.
- Canonical procedure: root `GEMINI_REVIEW_WORKFLOW.md`.

## Source intake

- Complete 2026 textbook received: Yes, full PDF supplied by the user.
- Canonical Tier-1 source record: `sources/class-8/science/2026/SOURCE_RECORD.md`
- School-year designation: 2026; book front matter says revised October 2025.
- Chapter printed page range: 108–118.
- Working-copy PDF page range: 113–123.
- Input integrity gate: PASS_WITH_NOTES.
- Source type: image/scanned PDF with unreliable/absent native text extraction.
- Raw working-copy PDF page count: 162.
- ChatGPT file-ingestion layer exposed 150 pages, so extractor page counts must not be treated as authoritative for this file.
- Critical wording verification: visible rendered textbook pages are authoritative; do not rely on OCR-only text.

## Analysis and split

- Chapter analysis: COMPLETE and rebased to full 2026 source.
- Approved lesson count: **4**.
- Lesson split approved by user: **Yes — 2026-09-05**.
- Gemini Gate A did not require a material replan.
- Approved split record: `LESSON_SPLIT_PROPOSAL_V2.md` — includes Gate A refinements.
- Coverage matrix: `COVERAGE_MATRIX.md` — Lesson 1 concrete slide IDs mapped; Lessons 2–4 pending.
- Source issue register: `SOURCE_ISSUES.md`.
- Source map: `SOURCE_MAP.md` — source reconciliation pass 2 complete.

## Current production split

| Lesson | Working title | Plan status | Storyboard status | CORE | FLEX | Planned |
|---|---|---|---|---:|---:|---:|
| 1 | আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম | GATE_A_RECONCILED_PLAN | **DRAFT_COMPLETE / QA_PASS_WITH_NOTES** | 43 min | 7 min | 50 min |
| 2 | প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন | GATE_A_RECONCILED_PLAN | NOT_STARTED | 44 min | 8 min | 52 min |
| 3 | উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা | GATE_A_RECONCILED_PLAN | NOT_STARTED | 42 min | 8 min | 50 min |
| 4 | আলোক-চিত্রগ্রাহী ক্যামেরা, চোখের সাথে তুলনা ও অধ্যায় সংশ্লেষ | GATE_A_RECONCILED_PLAN | NOT_STARTED | 44 min | 8 min | 52 min |

Estimated total planned load: approximately **204 minutes CORE + FLEX** across four classes.

## Lesson 1 storyboard checkpoint

Canonical files:

- `lessons/lesson-01/LESSON_PLAN.md`
- `lessons/lesson-01/STORYBOARD.md`
- `lessons/lesson-01/QA.md`

Storyboard structure:

- 14 CORE slides: `L1-S01`–`L1-S14`
- 2 FLEX slides: `L1-F01`–`L1-F02`
- CORE total: 43 min
- FLEX total: 7 min
- contingency: 10 min

Key storyboard decisions:

- darkness/seeing hook first;
- brief current-science description of light;
- minimal non-assessed photon note only;
- pencil-in-water observation before causal speed-change explanation;
- interface/normal/ray vocabulary built progressively;
- optical density explicitly separated from mass density;
- normal-incidence exception explicit;
- rarer→denser / denser→rarer prediction sequence;
- summary + four-question exit check;
- parallel-sided slab relegated to FLEX with geometry-bound equal-angle clarification;
- no internet dependency for CORE.

Lesson 1 coverage IDs have been written into `COVERAGE_MATRIX.md`.

Lesson 1 internal storyboard QA verdict:

`PASS_WITH_NONBLOCKING_NOTES` for storyboard stage only.

Not yet complete:

- actual visual asset build/licensing records;
- rendered diagram validation;
- RT-01;
- Gemini Gate B;
- content freeze/export QA.

## Gemini Gate A

Raw external review:
- `reviews/GEMINI_GATE_A_RAW_2026-09-05.md`

Independent reconciliation:
- `reviews/GEMINI_GATE_A_RECONCILIATION_2026-09-05.md`

External verdict:
- `PASS_WITH_TARGETED_CHANGES`

Canonical reconciliation verdict:
- **ACCEPT WITH TARGETED CHANGES; NO MATERIAL REPLAN REQUIRED**

## Source reconciliation status

- `SI-11-001` spectacles outcome/body gap: VERIFIED_SOURCE_GAP / PARTIALLY_RESOLVED.
- `SI-11-002` normal-incidence nuance: RESOLVED.
- `SI-11-003` equal incident/emergent angle: RESOLVED as parallel-sided slab geometry dependent.
- `SI-11-004` film-camera chemistry: RESOLVED_WITH_CONTEXT_LABEL.
- `SI-11-005` mirage hard-boundary visualization risk: RESOLVED with gradient clarification.
- `SI-11-006` cornea/lens focusing roles: RESOLVED.
- `SI-11-007` eye-camera focusing analogy limit: RESOLVED.

## Chapter-wide QA

- G0 Input integrity: PASS_WITH_NOTES.
- G1 Curriculum/scope analysis: PASS.
- G2 Critical source verification: PASS_FOR_STORYBOARD.
- G3 Scientific accuracy: PASS_FOR_STORYBOARD.
- G4 Timing: PASS_FOR_STORYBOARD after Gate A refinements.
- G5 Pedagogy/cognitive load: PASS_FOR_STORYBOARD.
- Coverage audit: Lesson 1 slide trace complete; Lessons 2–4 pending.
- Duplication audit: full chapter storyboard audit pending.
- Cross-lesson continuity: PASS at plan level; storyboard-level audit pending.

## Gemini cadence

Gate A is completed and reconciled.

Gate B remains required after **all four storyboards + resource mappings** are complete and immediately before content freeze. Gate B must use the single-file downloadable bundle workflow in `GEMINI_REVIEW_WORKFLOW.md`.

## Next authorized action

1. Develop Lesson 2 storyboard from the Gate-A-reconciled plan.
2. Map Lesson 2 concrete slide IDs into `COVERAGE_MATRIX.md`.
3. Run Lesson 2 storyboard QA/checkpoint.
4. Continue Lessons 3 and 4 similarly.
5. Complete resource mappings and chapter-wide storyboard audit.
6. Generate a fresh downloadable Gemini Gate B bundle + one-click-copy prompt.
7. Reconcile Gate B, run G1–G7, freeze content.
8. Run RT-01, select renderer routing, render and export-QA.

Do not render final decks yet.
