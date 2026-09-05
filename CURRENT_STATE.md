# Current State

Last updated: 2026-09-05

## Project status

Plan v3.0 remains the canonical production plan, with durable policy refinements now recorded in `OPERATING_BRIEF.md` v3.2, `SOURCE_POLICY.md` v3.1, `WORKFLOW.md` v3.1 and `DECISIONS.md` D-031/D-032.

The first real chapter is in the pilot workflow. Full chapter analysis is complete, the revised **four-lesson split has been explicitly approved by the user**, source reconciliation pass 1 is complete, the coverage matrix has been remapped to four lessons, and detailed lesson-plan drafts exist for all four lessons.

## Canonical repository

`iqbalhimel004/science-slides`

This is the only repository authorized for writes for this project.

## New durable source-authority rule

NCTB is used as the primary syllabus/chapter/exam-context source, but **not as automatic scientific authority**.

The user explicitly warned that the underlying textbooks may preserve old content across yearly reprints. Therefore:

- never infer scientific currentness from a recent print/revision year alone;
- verify material scientific claims against current authoritative sources;
- when NCTB is outdated, ambiguous, misleading or wrong, record the textbook statement and the verified current science separately;
- teach the scientifically correct/current explanation;
- preserve NCTB/exam wording separately when students may encounter it;
- record verified mismatches in `SOURCE_ISSUES.md` / `SOURCE_MAP.md`.

See:
- `OPERATING_BRIEF.md`
- `SOURCE_POLICY.md`
- `DECISIONS.md` D-006 and D-031

## New universal checkpoint rule

**Finish → record → then continue.**

A meaningful task/stage is not operationally complete until its durable result is saved to GitHub. After analysis, verification, lesson planning, Gemini review/reconciliation, storyboard, resource mapping, QA, RT-01, rendering, export QA or other durable work:

- save/update the relevant artifact;
- update chapter/lesson `STATUS.md` and `CURRENT_STATE.md` when applicable;
- update `DECISIONS.md` when a durable rule changes;
- update Fable reconciliation when a pilot item is resolved/materially reclassified.

A new chat must be able to understand completed work, evidence, decisions, unresolved items and the next authorized action from GitHub alone.

See:
- `OPERATING_BRIEF.md`
- `WORKFLOW.md`
- `DECISIONS.md` D-032

## Active textbook baseline

The user supplied the full **2026 Class 8 Science** PDF.

Canonical source record:

`sources/class-8/science/2026/SOURCE_RECORD.md`

Book identity verified from front matter:

- `বিজ্ঞান — অষ্টম শ্রেণি`
- National Curriculum and Textbook Board, Bangladesh
- for the 2026 school year
- revised October 2025

Important interpretation: this publication/revision metadata is source identity only; it does not establish that all underlying scientific content was substantively updated.

The working copy is an image/scanned PDF with unreliable/absent native text extraction. Raw PDF inspection reports 162 pages, while the ChatGPT file-ingestion layer exposed 150 pages. Therefore visible rendered pages plus raw-PDF preflight are authoritative for page integrity; OCR/extractor page counts are advisory only.

The project uses a durable source/version architecture:

- project-wide navigation/status: `CURRICULUM_INDEX.md`
- versioned source record: `sources/class-8/science/2026/SOURCE_RECORD.md`
- chapter concept inventory: `CHAPTER_ANALYSIS.md`
- chapter topic-to-lesson/slide traceability: `COVERAGE_MATRIX.md`
- textbook ambiguity/error/gap register: `SOURCE_ISSUES.md`
- detailed claim provenance: `SOURCE_MAP.md`

Do not commit full textbook PDFs to Git by default; preserve links, edition metadata, fingerprints/checksums and page mappings instead.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical chapter path:

`chapters/class-8/science/chapter-11-light/`

Current status:

`DETAILED_PLANS_COMPLETE_PRE_STORYBOARD_REVIEW`

Key files:

- `STATUS.md`
- `CHAPTER_ANALYSIS.md`
- `COVERAGE_MATRIX.md`
- `SOURCE_ISSUES.md`
- `SOURCE_MAP.md`
- `LESSON_SPLIT_PROPOSAL_V2.md`
- `lessons/lesson-01/LESSON_PLAN.md`
- `lessons/lesson-02/LESSON_PLAN.md`
- `lessons/lesson-03/LESSON_PLAN.md`
- `lessons/lesson-04/LESSON_PLAN.md`

2026 source range:

- printed textbook pages 108–118
- working-copy PDF pages 113–123

## Approved lesson split

1. **আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম** — CORE 44 + FLEX 8 = 52 min
2. **প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন** — CORE 44 + FLEX 8 = 52 min
3. **উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা** — CORE 45 + FLEX 8 = 53 min
4. **আলোক-চিত্রগ্রাহী ক্যামেরা, চোখের সাথে তুলনা ও অধ্যায় সংশ্লেষ** — CORE 44 + FLEX 8 = 52 min

Estimated total planned instructional load: approximately 209 minutes across four 60-minute classes, excluding unallocated contingency and STRETCH.

## Source reconciliation pass 1

Resolved/clarified:

- normal-incidence nuance: resolved; no directional deviation at normal incidence although speed may change
- equal incident/emergent angle: bound specifically to the demonstrated parallel-sided slab geometry
- film-camera chemistry: independently verified and must be labelled as film-camera context
- spectacles: NCTB outcome/body mismatch remains a documented source gap; basic corrective-lens science is independently verified and may be used only as clearly labelled supplementary support

Detailed evidence: `SOURCE_MAP.md` and `SOURCE_ISSUES.md`.

Under the new source-authority policy, slide-level verification must treat current authoritative science as controlling scientific correctness even when NCTB wording differs.

## Detailed planning status

- Lesson 1: detailed plan draft complete
- Lesson 2: detailed plan draft complete
- Lesson 3: detailed plan draft complete
- Lesson 4: detailed plan draft complete

Each plan includes:

- learning goals
- NCTB vs supplementary-source separation
- minute-level CORE/FLEX timing
- misconceptions
- student-response/hinge/exit elements
- board-writing/visual/resource notes where relevant
- offline/static fallback expectations

## Gemini review cadence

Gemini is an independent reviewer, not a second author.

### Gate A — next action, before storyboard investment

Review the approved four-lesson split, source map/issues, coverage matrix and all four lesson plans for:

- decomposition/scope sanity
- missing prerequisites / duplication
- timing plausibility
- misconception coverage
- difficult-science risk
- outdated-textbook risk
- exam-sensitive wording risk

Only independently validated findings may alter canonical state.

### Gate B — after all four storyboards/resource mappings, immediately before content freeze

Review slide-level coverage, science, continuity, cognitive load, timing, misconceptions and exam-facing risk. Reconcile and checkpoint validated findings before G1–G7 freeze decision.

## Renderer status

No permanent default renderer is locked.

Before the first final deck, run RT-01 using representative Bangla/science stress-test content through Beautiful.ai and Canva, adding another practical fallback only if needed.

## Next authorized action

1. perform Gemini Review Gate A;
2. independently validate/reconcile findings;
3. checkpoint the completed review/dispositions immediately in GitHub;
4. then begin Lesson 1 storyboard and continue Lessons 2–4;
5. populate exact slide IDs into `COVERAGE_MATRIX.md` as storyboards stabilize;
6. run Gemini Gate B before content freeze;
7. pass G1–G7, freeze content, then RT-01 and rendering.

Final content freeze and final deck rendering remain blocked until applicable review/QA/RT-01 gates pass.
