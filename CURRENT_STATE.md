# Current State

Last updated: 2026-09-05

## Project status

Plan v3.0 is the current canonical operating plan.

The first real chapter has now entered the pilot workflow. Full intake and chapter-wide analysis are complete, and a three-lesson split is proposed but not yet approved.

## Canonical repository

`iqbalhimel004/science-slides`

This is the only repository authorized for writes for this project.

## First-pilot bootstrap — mandatory

For the **first real chapter**, a new chat must read:

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

For this first pilot, do not use the usual minimal-read shortcut. The pilot must carry forward every unresolved renderer/tool/typography/equation/workflow item from the Fable reconciliation.

After the first pilot resolves those items, the compact recovery sequence in `OPERATING_BRIEF.md` may be restored for later chapters.

## External Fable 5.1 audit reconciliation

Accepted material improvements include:

- corrected 60-minute timing architecture: CORE + FLEX + unallocated contingency
- classroom-profile file instead of guessing hardware/connectivity
- scanned/image source handling and visible-page verification of critical wording
- RT-01 renderer calibration before locking a default renderer
- stronger Bangla/equation/export checks
- PDF/static/offline fallback policy
- stronger retrieval/hinge/practice/exit pedagogy spine
- replacement of rigid attention-reset timing with segment/response design
- clearer Tier-2 vs Tier-3 source roles
- expanded Hyperagent build/QA/interactive role

Rejected/corrected audit assumptions include:

- ChatGPT cannot write to GitHub: false in this connected workspace
- no ChatGPT ↔ Beautiful.ai integration: false in this workspace
- Canva is only an asset tool: not adopted
- stage-scoped chats must replace one-chat-one-chapter: not adopted as default
- PDF must be the sole canonical source artifact: not adopted

Full finding-by-finding disposition and pending items remain in `FABLE_AUDIT_RECONCILIATION_2026-09-05.md`.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical chapter path:

`chapters/class-8/science/chapter-11-light/`

Current chapter status:

`ANALYSIS_COMPLETE_SPLIT_PENDING_APPROVAL`

Key files:

- `chapters/class-8/science/chapter-11-light/STATUS.md`
- `chapters/class-8/science/chapter-11-light/CHAPTER_ANALYSIS.md`

## First-pilot intake result

- Source supplied as ordered screenshots/image-only pages.
- Visible-page verification was practical without OCR for this chapter.
- G0 is `PASS_WITH_NOTES`: no material missing content was found; overlapping screenshots compensate for minor UI overlays/crops.
- A visible `২০২৫` source-year marker exists, but full edition/publication metadata is not identifiable from the screenshots alone.
- Important unresolved source issue: chapter-opening outcomes include `চশমার কাজ ব্যাখ্যা করতে পারব`, but no spectacles explanation appears in the supplied continuous chapter pages. Do not invent it; resolve against official source/curriculum before content freeze.

## Proposed lesson split — awaiting user approval

1. **আলোর প্রতিসরণ: ধারণা, নিয়ম ও দৈনন্দিন প্রয়োগ** — CORE 44 + FLEX 8 = 52 min
2. **সংকট কোণ, পূর্ণ অভ্যন্তরীণ প্রতিফলন, অপটিক্যাল ফাইবার ও ম্যাগনিফাইং গ্লাস** — CORE 44 + FLEX 7 = 51 min
3. **মানব চক্ষু, আলোক-চিত্রগ্রাহী ক্যামেরা ও তুলনা** — CORE 45 + FLEX 8 = 53 min

Estimated total planned instructional load: approximately 156 minutes across three 60-minute classes, excluding contingency and STRETCH.

No storyboard, content freeze or renderer output is authorized before user split approval.

## First chapter = pilot/calibration chapter

The first completed chapter must provide evidence for:

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
- source text-layer/OCR/vision reliability
- realism of CORE/FLEX/contingency timing
- which policy/template files are genuinely useful vs redundant

Current pilot evidence: screenshot/vision ingestion works well for this chapter; this does not establish general PDF/OCR reliability across future chapters.

## Renderer status

No permanent default renderer is locked.

Before the first final deck, run RT-01 using representative Bangla/science stress-test content through Beautiful.ai and Canva, adding another practical fallback only if needed.

This chapter strongly tests Bangla/mixed-script rendering, degree symbols, ray labels, diagram labels, comparison tables and projector readability, but it is weak as a complex-equation/chemistry-notation stress test. RT-01 therefore still needs an explicit representative equation/notation item.

## Timing status

Confirmed project requirement: one deck must fit within one 60-minute class.

Current model:

- CORE: approximately 40–45 minutes non-skippable
- FLEX: approximately 5–10 minutes useful but skippable
- planned CORE + FLEX: approximately 50–55 minutes
- contingency: 5–10 minutes intentionally unallocated inside the 60-minute class
- STRETCH: appendix/enrichment only

All student responses, board writing, media setup/debrief, activities and transitions count as time.

## Current source rule

Do not assume a supplied NCTB source has a reliable text layer. Classify the actual source at intake. OCR/vision may assist, but important definitions/laws/formulas/units/exam-sensitive wording must be verified against the visible page/image when extraction is uncertain.

## Current tool position

- ChatGPT: lead chapter analysis, pedagogy, storyboard, source reconciliation, QA/state coordination
- NotebookLM: conditional source-grounded support when it adds value
- Gemini AI Pro: targeted independent review/research
- Beautiful.ai: candidate full-deck renderer
- Canva: candidate full-deck renderer + specialist visual tool
- Hyperagent: specialist build/QA/interactive engine

Existing trusted educational resources remain preferred before custom media/simulation generation.

## Waiting for

1. user approval/revision of the three-lesson split
2. resolution of the spectacles outcome/source discrepancy before content freeze
3. classroom-profile details when available
4. RT-01 before the first final deck

## Next action after split approval

Proceed to source reconciliation/verification, approved lesson planning and resource discovery. Do not render final decks before the applicable quality gates and RT-01.

## End-of-stage rule

Update GitHub before any stage/chat handoff so the next chat can continue without the previous transcript. Update `FABLE_AUDIT_RECONCILIATION_2026-09-05.md` when a first-pilot pending item becomes resolved or materially reclassified.
