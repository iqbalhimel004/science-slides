# Current State

Last updated: 2026-09-05

## Project status

Plan v3.0 is the current canonical operating plan.

The first real chapter is in the pilot workflow. Full chapter analysis is complete. The initial three-lesson split has been revised to a **four-lesson proposal** after the user requested the prerequisite/related concepts necessary for deep understanding of the chapter, not only the explicit textbook sequence. The revised split is still awaiting user approval.

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
- detailed claim provenance later: `SOURCE_MAP.md`

Do not commit full textbook PDFs to Git by default; preserve links, edition metadata, fingerprints/checksums and page mappings instead.

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
- `LESSON_SPLIT_PROPOSAL_V2.md`

2026 source range:

- printed textbook pages 108–118
- working-copy PDF pages 113–123

## Revised lesson split — awaiting user approval

1. **আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম** — CORE 44 + FLEX 8 = 52 min
2. **প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন** — CORE 44 + FLEX 8 = 52 min
3. **উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা** — CORE 45 + FLEX 8 = 53 min
4. **আলোক-চিত্রগ্রাহী ক্যামেরা, চোখের সাথে তুলনা ও অধ্যায় সংশ্লেষ** — CORE 44 + FLEX 8 = 52 min

Estimated total planned instructional load: approximately 209 minutes across four 60-minute classes, excluding unallocated contingency and STRETCH.

The revised split adds clearly labelled supplementary prerequisite/bridge concepts needed for conceptual understanding:

- what light is; minimal photon/wave overview
- how seeing occurs
- chapter-relevant properties of light
- optical medium and transparent/translucent/opaque recap
- interface, normal and angle measurement
- reflection vs refraction
- propagation-speed change; optical density vs ordinary mass density
- normal-incidence exception
- actual vs apparent position
- convex-lens focus/focal-length prerequisite
- real/virtual, erect/inverted, magnified/reduced image vocabulary
- focusing/accommodation bridge for eye/camera

These additions must not be presented as verbatim NCTB chapter body content.

No storyboard, content freeze or renderer output is authorized before user split approval.

## Source issues confirmed/flagged

- The 2026 chapter opener includes `চশমার কাজ ব্যাখ্যা করতে পারব`, but the full chapter through printed p.118 contains no corresponding spectacles-working subsection. A 5-minute Lesson 3 slot is reserved but not content-frozen; intended scope must be verified before use.
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

## Renderer status

No permanent default renderer is locked.

Before the first final deck, run RT-01 using representative Bangla/science stress-test content through Beautiful.ai and Canva, adding another practical fallback only if needed.

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

1. user approval/revision of the four-lesson split in `LESSON_SPLIT_PROPOSAL_V2.md`
2. authoritative reconciliation of flagged source issues before content freeze
3. classroom-profile details when available
4. RT-01 before the first final deck

## Next action after split approval

Proceed to source reconciliation/verification, approved lesson planning and resource discovery. Then remap `COVERAGE_MATRIX.md` to the approved four-lesson structure and populate concrete slide identifiers as storyboards are created.

## End-of-stage rule

Update GitHub before any stage/chat handoff so the next chat can continue without the previous transcript. Update `FABLE_AUDIT_RECONCILIATION_2026-09-05.md` when a first-pilot pending item becomes resolved or materially reclassified.
