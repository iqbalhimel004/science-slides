# Current State

Last updated: 2026-09-05

## Project status

Plan v3.0 is the current canonical operating plan.

The first real chapter is in the pilot workflow. Full chapter analysis is complete and the revised **four-lesson split has been explicitly approved by the user**. Source reconciliation pass 1 is complete, the coverage matrix has been remapped to four lessons, and detailed lesson-plan drafts now exist for all four lessons.

## Canonical repository

`iqbalhimel004/science-slides`

This is the only repository authorized for writes for this project.

## Active textbook baseline

The user supplied the full **2026 Class 8 Science** PDF.

Canonical source record:

`sources/class-8/science/2026/SOURCE_RECORD.md`

Book identity verified from front matter:

- `বিজ্ঞান — অষ্টম শ্রেণি`
- National Curriculum and Textbook Board, Bangladesh
- for the 2026 school year
- revised October 2025

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

`SOURCE_RECONCILIATION_AND_LESSON_PLANNING`

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

## Resource candidates identified

- PhET Bending Light — useful for refraction/TIR, with static fallback required
- authoritative static/custom ray diagrams for apparent depth, critical angle/TIR and lens/image relationships
- simplified high-resolution eye/camera diagrams

Existing trusted resources remain preferred before custom media generation.

## First chapter = pilot/calibration chapter

The first completed chapter must still provide evidence for:

- Beautiful.ai vs Canva renderer quality/workflow
- whether a hybrid renderer workflow is worth the complexity
- Bangla typography/conjunct reliability
- equation/chemistry notation workflow
- primary classroom delivery format
- export fidelity and PDF fallback
- projector readability
- Hyperagent SVG/equation/QA value
- NotebookLM usefulness on the actual source
- Gemini review cadence/value
- realism of CORE/FLEX/contingency timing
- which policy/template files are genuinely useful vs redundant

## Renderer status

No permanent default renderer is locked.

Before the first final deck, run RT-01 using representative Bangla/science stress-test content through Beautiful.ai and Canva, adding another practical fallback only if needed.

## Next authorized stage

Proceed to:

1. develop Lesson 1 storyboard first;
2. assign concrete slide identifiers into `COVERAGE_MATRIX.md` as storyboard sections are accepted;
3. continue storyboard development for Lessons 2–4;
4. perform slide-level source/wording QA;
5. run RT-01 before the first final deck.

Final content freeze and final deck rendering remain blocked until applicable source/QA gates pass and RT-01 is completed.

## End-of-stage rule

Update GitHub before any stage/chat handoff so the next chat can continue without the previous transcript. Update `FABLE_AUDIT_RECONCILIATION_2026-09-05.md` when a first-pilot pending item becomes resolved or materially reclassified.
