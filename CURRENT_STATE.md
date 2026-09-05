# Current State

Last updated: 2026-09-05

## Project status

Plan v3.0 is the current canonical operating plan.

The first real chapter is in the pilot workflow. Full chapter analysis is complete and a three-lesson split is proposed but not yet approved.

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

The project now uses a durable source/version architecture:

- project-wide navigation/status: `CURRICULUM_INDEX.md`
- versioned source record: `sources/class-8/science/2026/SOURCE_RECORD.md`
- chapter concept inventory: `CHAPTER_ANALYSIS.md`
- chapter topic-to-lesson/slide traceability: `COVERAGE_MATRIX.md`
- textbook ambiguity/error/gap register: `SOURCE_ISSUES.md`
- detailed claim provenance later: `SOURCE_MAP.md`

Do not commit full textbook PDFs to Git by default; preserve links, edition metadata, fingerprints/checksums and page mappings instead.

## First-pilot bootstrap — mandatory

For the first real chapter, a new chat must read:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `FABLE_AUDIT_RECONCILIATION_2026-09-05.md`
4. `CLASSROOM_PROFILE.md`
5. `PROJECT_MASTER.md`
6. `WORKFLOW.md`
7. `SOURCE_POLICY.md`
8. `TOOL_ROUTING.md`
9. `QUALITY_GATES.md`
10. `SLIDE_STYLE_GUIDE.md`
11. `VISUAL_ENGAGEMENT_SYSTEM.md`
12. `DECISIONS.md`
13. task-relevant files under `templates/`

For this first pilot, do not use the usual minimal-read shortcut.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical chapter path:

`chapters/class-8/science/chapter-11-light/`

Current status:

`ANALYSIS_COMPLETE_SPLIT_PENDING_APPROVAL`

Key files:

- `STATUS.md`
- `CHAPTER_ANALYSIS.md`
- `COVERAGE_MATRIX.md`
- `SOURCE_ISSUES.md`

2026 source range:

- printed textbook pages 108–118
- working-copy PDF pages 113–123

## Proposed lesson split — awaiting user approval

1. **আলোর প্রতিসরণ: ধারণা, নিয়ম ও দৈনন্দিন প্রয়োগ** — CORE 44 + FLEX 8 = 52 min
2. **সংকট কোণ, পূর্ণ অভ্যন্তরীণ প্রতিফলন, অপটিক্যাল ফাইবার ও ম্যাগনিফাইং গ্লাস** — CORE 44 + FLEX 7 = 51 min
3. **মানব চক্ষু, আলোক-চিত্রগ্রাহী ক্যামেরা ও তুলনা** — CORE 45 + FLEX 8 = 53 min

Estimated total planned instructional load: approximately 156 minutes across three 60-minute classes, excluding contingency and STRETCH.

No storyboard, content freeze or renderer output is authorized before user split approval.

## Source issues confirmed/flagged

- The 2026 chapter opener includes `চশমার কাজ ব্যাখ্যা করতে পারব`, but the full chapter through printed p.118 contains no corresponding spectacles-working subsection. This is now confirmed as a source-internal gap, while its curriculum/teacher-guide treatment remains pending verification.
- Introductory refraction wording may sound more universal than the later normal-incidence exception; final classroom wording requires source/science reconciliation.
- Equal incident/emergent-angle wording must be bound to the demonstrated geometry rather than generalized without verification.
- Photographic-camera chemistry must be clearly labelled as the film-camera model and independently checked before freeze.

Full records: `chapters/class-8/science/chapter-11-light/SOURCE_ISSUES.md`.

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

Pilot evidence already obtained:

- full-PDF ingestion behavior has been tested for this source;
- native/extracted text is unreliable, but page rendering/vision is usable;
- raw-PDF page count and file-ingestion page count can disagree, so raw preflight + visible page verification is necessary;
- chapter/source folder convention and project-wide curriculum index have now been instantiated from real workflow evidence.

## Renderer status

No permanent default renderer is locked.

Before the first final deck, run RT-01 using representative Bangla/science stress-test content through Beautiful.ai and Canva, adding another practical fallback only if needed.

This chapter strongly tests Bangla/mixed-script rendering, degree symbols, ray labels, diagram labels, comparison tables and projector readability, but remains weak as a complex-equation/chemistry-notation stress test.

## Timing status

Confirmed project requirement: one deck must fit within one 60-minute class.

Current model:

- CORE: approximately 40–45 minutes
- FLEX: approximately 5–10 minutes
- planned CORE + FLEX: approximately 50–55 minutes
- contingency: 5–10 minutes intentionally unallocated
- STRETCH: appendix/enrichment only

All student responses, board writing, media setup/debrief, activities and transitions count as time.

## Current tool position

- ChatGPT: lead chapter analysis, pedagogy, storyboard, source reconciliation, QA/state coordination
- NotebookLM: conditional source-grounded support when it adds value
- Gemini AI Pro: targeted independent review/research
- Beautiful.ai: candidate full-deck renderer
- Canva: candidate full-deck renderer + specialist visual tool
- Hyperagent: specialist build/QA/interactive engine

## Waiting for

1. user approval/revision of the three-lesson split
2. authoritative reconciliation of flagged source issues before content freeze
3. classroom-profile details when available
4. RT-01 before the first final deck

## Next action after split approval

Proceed to source reconciliation/verification, approved lesson planning and resource discovery. Then populate concrete slide identifiers into `COVERAGE_MATRIX.md` as storyboards are created.

## End-of-stage rule

Update GitHub before any stage/chat handoff so the next chat can continue without the previous transcript. Update `FABLE_AUDIT_RECONCILIATION_2026-09-05.md` when a first-pilot pending item becomes resolved or materially reclassified.
