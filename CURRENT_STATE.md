# Current State

Last updated: 2026-09-05

## Project status

Plan v3.0 is the current canonical operating plan and is **handoff-ready for the first real chapter-production workflow**.

A final pre-handoff consistency audit has been completed. Startup files, legacy agent/style guidance, source/storyboard/QA templates and the Fable-audit reconciliation have been aligned so a new chat does not inherit the earlier Beautiful.ai-default or rigid 7–10-minute attention-reset assumptions.

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

- ChatGPT cannot write to GitHub: **false in this connected workspace**; the GitHub integration exposes write actions
- no ChatGPT ↔ Beautiful.ai integration: **false in this workspace**; Beautiful.ai is connected and exposes presentation actions
- Canva is only an asset tool: **not adopted**; Canva is also a candidate full-deck renderer
- stage-scoped chats must replace one-chat-one-chapter: **not adopted as default**; GitHub checkpoint fallback is used only if needed
- PDF must be the sole canonical source artifact: **not adopted**; GitHub source/storyboard is canonical, PDF is mandatory fallback

Full finding-by-finding disposition and pending items are in `FABLE_AUDIT_RECONCILIATION_2026-09-05.md`.

## Active chapter

None yet.

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

Long-term renderer/tool defaults must not be locked before this evidence exists.

## Renderer status

No permanent default renderer is locked.

Before the first final deck, run RT-01 using representative Bangla/science stress-test content through:

- Beautiful.ai
- Canva
- another practical fallback only if needed

Compare:

- Bangla rendering/conjuncts
- mixed Bangla/English
- equations/subscripts/superscripts/symbols
- diagram labels
- visual quality
- editability
- export fidelity
- projector readability
- workflow time/friction

Record the selected default/fallback in `DECISIONS.md` and this file.

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

Do not assume a supplied NCTB PDF has a reliable text layer. Classify the actual source at intake. OCR/vision may assist, but important definitions/laws/formulas/units/exam-sensitive wording must be verified against the visible page/image when extraction is uncertain.

## Current tool position

- ChatGPT: lead chapter analysis, pedagogy, storyboard, source reconciliation, QA/state coordination
- NotebookLM: conditional source-grounded support when it adds value
- Gemini AI Pro: targeted independent review/research
- Beautiful.ai: candidate full-deck renderer
- Canva: candidate full-deck renderer + specialist visual tool
- Hyperagent: specialist build/QA/interactive engine

Existing trusted educational resources remain preferred before custom media/simulation generation.

## Waiting for

1. the user's first complete Class 8–10 science chapter as PDF or ordered screenshots
2. classroom-profile details when available
3. RT-01 during the first pilot before final deck rendering

## First required deliverable after chapter upload

Do **not** jump directly to slides.

First deliver:

1. input integrity/readability/text-layer result
2. full chapter analysis and concept map
3. definitions/laws/formulas/diagrams/activities/numericals/misconceptions inventory
4. instructional-load estimate
5. justified number of <=60-minute presentations
6. proposed CORE/FLEX/STRETCH lesson boundaries and continuity

Then obtain user approval of the split before final deck production.

## End-of-stage rule

Update GitHub before any stage/chat handoff so the next chat can continue without the previous transcript. Update `FABLE_AUDIT_RECONCILIATION_2026-09-05.md` when a first-pilot pending item becomes resolved or materially reclassified.
