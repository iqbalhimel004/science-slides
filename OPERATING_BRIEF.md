# Operating Brief — Science Slides

Version: 3.1
Last revised: 2026-09-05

## Absolute repository boundary

This project's only writable repository is:

`iqbalhimel004/science-slides`

Before every GitHub write, verify the exact `repository_full_name`. Abort if it differs. Do not mutate any other connected repository unless the user separately names and authorizes it.

## Project goal

Create source-verified, NCTB-aligned, visually engaging science teaching decks for Classes 8–10 that can be realistically completed within one 60-minute class.

Priority order:

1. scientific/source accuracy
2. pedagogical clarity and cognitive-load control
3. realistic timing
4. student attention and visual engagement
5. visual polish

## Default production unit

- One normal production chat handles one complete textbook chapter.
- The user supplies the complete chapter as PDF or ordered screenshots.
- Analyze the full chapter before deciding presentation count.
- Split by instructional load and concept boundaries, never by page count alone.
- If one chat becomes impractically large, save a complete stage checkpoint in GitHub before continuing in a new chat; this is a fallback, not the default.

## First pilot override

The **first real chapter** is also the project calibration pilot. For that chapter only, do not rely solely on this compact brief.

Mandatory first-pilot read order:

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

Reason: the first pilot must carry forward every accepted/rejected/pending Fable-audit item and must not accidentally restore superseded assumptions such as Beautiful.ai as unconditional default or rigid 7–10-minute attention resets.

After the first pilot resolves the pending renderer/tool/typography/equation/workflow questions, later chapters may return to the compact recovery sequence near the end of this file.

## 60-minute rule

The entire planned classroom sequence — explanation, questions, board work, activities, media, transitions, practice and exit check — should normally total **50–55 minutes**, leaving **5–10 minutes unallocated contingency** inside the 60-minute period.

- hard ceiling: 60 minutes total classroom time
- CORE: non-skippable learning, normally about 40–45 minutes
- FLEX: useful but skippable practice/example, normally about 5–10 minutes
- STRETCH: appendix/enrichment only; never required for the core lesson

Do not solve timing failure by speaking faster, shrinking text or dropping the exit check.

## Source rules

- Current NCTB textbook/curriculum/teacher guide is the primary syllabus authority.
- Pin edition/year and page references where identifiable.
- Important definitions, laws, formulas, units and exam-sensitive claims must be verified against the actual source page/image, not model memory alone.
- Text extraction/OCR may assist, but the visible page is authoritative when extraction is uncertain.
- Established Bangladeshi sources such as 10 Minute School may corroborate local wording/convention and explanation ideas; they are not independent scientific authority by default.
- Authoritative international sources may validate science and supply licensed resources.
- Keep exam-safe/source-grounded wording separate from simpler classroom explanation when useful.
- Record and resolve material source conflicts explicitly.

## Pedagogy spine

Every lesson should normally include:

- retrieval/prior-knowledge opener
- logically sequenced explanation
- purposeful visual/example
- at least one meaningful student response in each major segment
- a mid-lesson hinge/check-for-understanding where useful
- guided practice/application
- misconception correction when relevant
- summary + exit check

Avoid long passive stretches. Do not use a rigid 7–10-minute biological attention-span rule; instead, major segments should normally end with a meaningful student response, and teacher-only exposition should not remain cognitively unchanged for roughly more than 10 minutes when a useful response can be inserted.

## Visual rules

- Visual engagement is mandatory, but decoration must never compete with science.
- One clear focal point per slide where practical.
- Prefer diagrams, process visuals, comparisons, progressive steps and real-world examples over text blocks.
- Use motion only to explain sequence/change/causality/direction/reveal.
- Every important online/animated/interactive element needs a static fallback.
- Bangla typography, equations and labels must be tested in the actual exported/delivery artifact before classroom-ready status.

## Tool roles

- **ChatGPT:** project lead, chapter analysis, lesson architecture, source reconciliation, storyboard, QA and GitHub state maintenance through the connected write-capable GitHub integration.
- **NotebookLM:** conditional source-grounded extraction/citation and student revision materials when it materially helps; never replaces the visible textbook page.
- **Gemini AI Pro:** independent second-opinion review and targeted research at high-value gates, not duplicate authoring by default.
- **Beautiful.ai:** candidate full-deck renderer; use only after renderer calibration confirms suitable Bangla/equation/export reliability for this project.
- **Canva:** candidate full-deck renderer and specialist for bespoke visuals, diagrams, infographics, worksheets and difficult slides; also subject to renderer calibration.
- **Hyperagent:** specialist build/QA/interactive engine for programmatic SVG/equation assets, custom HTML/JS visualizations, deterministic link/asset checks and genuinely needed custom interaction/media.

Existing trusted simulations, videos, diagrams and educational resources should normally be searched before custom generation.

## Renderer calibration

Before the first final chapter deck, run RT-01 using the same representative Bangla/science stress-test content in Beautiful.ai and Canva; add another practical fallback only if needed.

Test:

- Bangla conjuncts and mixed Bangla/English
- scientific symbols, units, subscripts/superscripts and equations
- diagram labels
- visual quality
- projector readability
- PDF/PPTX/export behaviour as applicable
- editability
- workflow time/friction

Do not permanently declare one renderer superior before this real test.

## First-pilot evidence to capture

The first completed chapter should resolve or materially inform:

- Beautiful.ai vs Canva default/fallback routing
- whether hybrid rendering is worth the complexity
- Bangla typography and numeric visual baselines
- native vs controlled equation/chemistry notation path
- primary classroom delivery format
- Hyperagent SVG/equation/QA value
- NotebookLM usefulness on the supplied source
- Gemini review cadence/value
- actual OCR/vision reliability
- realism of the 50–55 minute planning model
- which policy/template files can be safely consolidated after the pilot

Update `DECISIONS.md`, `CURRENT_STATE.md` and the Fable reconciliation as evidence resolves these items.

## Classroom artifact package

GitHub storyboard/content remains the canonical source of truth. A classroom-ready lesson should have:

1. primary delivery deck in the selected renderer/format
2. PDF fallback
3. fallback assets/resources for any classroom-critical online or animated element
4. source/storyboard/resource records in GitHub

## Compact new-chat recovery after the first pilot

Once the first-pilot pending items have been resolved and `CURRENT_STATE.md` explicitly says compact recovery is safe, later chats may read in this order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. active chapter `STATUS.md` if one exists
4. only the relevant chapter/lesson files

Read deeper policy files only when the task requires them.

## Completion

A chapter is complete only after source, science, timing, pedagogy, visual, export/playback, fallback, coverage, duplication and cross-lesson continuity checks pass and repository state is updated.
