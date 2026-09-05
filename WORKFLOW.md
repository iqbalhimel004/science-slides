# Chapter Production Workflow

Version: 3.1
Last revised: 2026-09-05

## Phase 0 — Safety and state recovery

1. Verify the exact repository is `iqbalhimel004/science-slides`.
2. Read `OPERATING_BRIEF.md` and `CURRENT_STATE.md`.
3. If a chapter is active, read its `STATUS.md` and only the files needed for the current stage.
4. Read deeper policy files only when relevant to the task.
5. Treat GitHub as canonical operational memory. Do not rely on chat history as the only record of completed work.

## Phase 1 — Chapter intake and source integrity

The user supplies the complete chapter as PDF or ordered screenshots.

Check:

- chapter title and class/subject
- edition/year if identifiable
- first/last page and page continuity
- missing/cropped pages
- readability of Bangla text, equations, tables and diagrams
- source type: reliable text layer / partial text / scanned-image PDF / screenshots

Do not silently infer missing material.

OCR/text extraction may assist, but critical wording must be checked against the visible source page/image when extraction is uncertain.

### Immediate checkpoint

After intake/integrity is complete, save the result in the chapter/source records and update `STATUS.md`/`CURRENT_STATE.md` before moving on.

## Phase 2 — Full chapter analysis

Analyze the complete chapter before lesson splitting.

Record:

- chapter scope and concept map
- curricular/textbook learning outcomes where available
- prerequisites
- key definitions, laws, formulas and units
- diagrams/processes
- experiments/activities
- textbook examples/applications
- numerical/problem-solving load
- misconceptions/difficult points
- exam-facing practice opportunities where appropriate
- total instructional load and visual complexity
- claims/sections that look outdated, ambiguous, scientifically weak or technology-specific and therefore require later verification

At this stage distinguish **what the textbook contains** from whether it is scientifically current/correct.

### Immediate checkpoint

Save `CHAPTER_ANALYSIS.md`, source issues and chapter state before moving on.

## Phase 3 — Determine lesson count and split

Split by logical instructional boundaries and realistic classroom load.

For each proposed lesson specify:

- title
- concepts covered
- prerequisites
- learning outcomes
- CORE content
- FLEX content
- STRETCH/appendix content if useful
- estimated classroom time
- reason for boundary
- bridge from/to adjacent lessons

Default 60-minute model:

- CORE: ~40–45 min
- FLEX: ~5–10 min
- planned CORE + FLEX: ~50–55 min
- contingency: 5–10 min intentionally left unallocated
- STRETCH: not part of planned core delivery

Obtain user approval of the lesson split before final deck production.

### Immediate checkpoint

As soon as the user approves/revises the split, record that exact decision in GitHub before continuing.

## Phase 4 — Source verification and scientific reconciliation

Build claim/source records before content freeze.

### 4A — NCTB role

Use NCTB/current curriculum materials to establish:

- syllabus scope
- learning outcomes
- textbook wording students will encounter
- exam-facing context
- page-level provenance

Do **not** assume NCTB scientific content is current or correct merely because the copy has a recent print/revision year.

### 4B — Current-science verification

For material scientific claims, verify against current authoritative sources appropriate to the subject, such as:

- recognized universities / high-quality open university texts
- professional scientific organizations
- major public scientific, health and standards agencies
- primary literature when genuinely necessary

For every important definition/law/formula/unit/process/diagram/causal claim:

- pin the NCTB page when relevant
- verify what the NCTB page actually says
- independently verify the science
- record mismatches explicitly
- distinguish textbook/exam wording from current scientifically correct explanation
- never teach a materially false statement solely to mirror NCTB

Use Tier B Bangladesh sources for local wording/convention/explanation ideas, not as automatic scientific authority.

### Immediate checkpoint

When source reconciliation for a claim, issue or chapter pass is complete, update `SOURCE_MAP.md`, `SOURCE_ISSUES.md`, applicable lesson files and status immediately.

## Phase 5 — Lesson planning

For each approved lesson create a lesson plan containing:

- learning outcomes
- CORE/FLEX/STRETCH classification
- time budget
- retrieval/prior-knowledge opener
- teaching sequence
- teacher actions
- student actions
- questions/prompts
- hinge/check-for-understanding where useful
- worked examples/numericals
- misconceptions/refutation where relevant
- guided practice/application
- summary + exit check
- homework/enrichment as optional material
- explicit separation of NCTB/exam context from updated scientific explanation when they differ

Every student response, board-writing segment, media launch, transition and debrief counts as time.

### Immediate checkpoint

When a lesson plan is complete enough to advance, save it and update chapter/lesson status before beginning the next major task.

## Phase 6 — Resource discovery

Search existing trusted resources before generating custom equivalents.

Consider:

- simulations
- videos/animations
- diagrams/images
- interactive models
- authoritative visualizations

Record:

- source/creator
- URL/reference
- instructional purpose
- target slide
- classroom time
- licensing/reuse note where material
- online/offline status
- static fallback

For online video, prefer legal embed/source playback with timestamps rather than creating unauthorized clips.

### Immediate checkpoint

Persist accepted resource choices/fallbacks before storyboard rendering depends on them.

## Phase 7 — Storyboard

For every slide/item record:

- slide number/title
- segment: CORE / FLEX / STRETCH
- purpose
- exact approved content or specification
- whether content is NCTB/exam-context, current-science clarification, or supplementary
- visual purpose
- visual/resource requirement
- teacher note
- student action/question
- expected response
- estimated time
- source references
- equation/source notation where relevant
- static/offline fallback when needed
- transition

The planned CORE + FLEX total should normally remain 50–55 minutes and may never exceed the 60-minute class ceiling.

### Immediate checkpoint

Save each stable storyboard/section and update `COVERAGE_MATRIX.md` with concrete slide IDs as soon as the mapping is known.

## Phase 8 — Independent review

Use Gemini selectively, not automatically for every trivial step.

High-value review points:

1. lesson-split/decomposition review for complex chapters or several-lesson chapters
2. pre-freeze review of difficult science, misconception handling, exam-sensitive wording, outdated-textbook risk or missing coverage
3. targeted external research when needed

Findings must be verified independently before incorporation. Gemini cannot override the source hierarchy by itself.

### Immediate checkpoint

Record Gemini review findings, dispositions and validated changes as soon as reconciliation is complete so the review is not repeated unnecessarily.

## Phase 9 — Content QA and freeze

Before rendering, verify:

- curriculum/scope
- source provenance
- scientific accuracy/currentness
- textbook-vs-current-science discrepancies handled correctly
- formulas/units/calculations
- realistic timing
- pedagogy/cognitive load
- misconception handling
- resource suitability
- storyboard completeness

Then obtain/record content approval and mark `CONTENT_FROZEN`.

After freeze, design tools may improve layout/styling but may not silently alter scientific meaning.

### Immediate checkpoint

Content freeze is not complete until canonical files, `STATUS.md` and `CURRENT_STATE.md` record it.

## Phase 10 — Renderer calibration (RT-01)

Before locking a default renderer, run the same small stress-test through Beautiful.ai and Canva; add another fallback renderer only if needed.

Test:

- Bangla conjuncts and mixed Bangla/English
- scientific symbols/units
- subscripts/superscripts/equations
- diagram labels
- visual hierarchy
- editability
- export fidelity
- projector readability
- workflow friction

Record the decision in `DECISIONS.md`.

RT-01 is one-time unless tool behaviour materially changes.

### Immediate checkpoint

Record RT-01 evidence and renderer routing immediately when the comparison is complete.

## Phase 11 — Rendering

Choose the renderer that best fits the lesson and passed calibration.

- Beautiful.ai: candidate for structured full decks
- Canva: candidate for full visual/diagram-heavy decks and bespoke visual work
- Hyperagent: programmatic SVG/equation assets, custom HTML/JS simulations/visualizations, deterministic QA, or other specialist build tasks

Prefer one primary renderer per lesson. Avoid unnecessary cross-tool round trips.

## Phase 12 — Visual, export and classroom QA

Check the actual artifact, not just the editor:

- Bangla rendering and line breaks
- equation/symbol rendering
- text size and contrast
- diagram labels/arrows
- crop/layout integrity
- projector readability
- links/QRs
- media/simulation launch
- static/offline fallback
- no scientific content drift

The classroom package should contain:

1. primary delivery deck
2. PDF fallback
3. fallback resources/assets for classroom-critical online/animated elements
4. GitHub storyboard/source records

### Immediate checkpoint

As each deck passes/fails QA, record its exact status and outstanding defects before proceeding.

## Phase 13 — Chapter-wide final audit

Compare all lessons back to the original chapter and to verified current science.

Every meaningful textbook subsection should be classified as:

- Covered
- Supplementary
- Homework/self-study
- Intentionally omitted with reason
- Corrected/updated from textbook, with source record where applicable

Also verify:

- no unnecessary duplication
- prerequisites precede dependent concepts
- bridges between lessons are coherent
- no important content was lost during splitting
- no outdated or erroneous textbook statement survived uncorrected into teaching content

## Phase 14 — Completion and handoff

Update immediately:

- lesson/chapter QA records
- chapter `STATUS.md`
- `CURRENT_STATE.md`
- `DECISIONS.md` for durable new decisions
- source/resource records
- Fable reconciliation when a pilot item is resolved/materially reclassified

A meaningful stage is not operationally complete until this checkpoint is written.

## Phase 15 — Post-class calibration

For at least the first few lessons/chapters, record:

- actual time
- what overran/finished early
- confusing concepts
- effective resources
- observed misconceptions
- resource/technical failures

Use real classroom evidence to recalibrate future timing and design heuristics.

## Universal checkpoint rule

**Finish → record → then continue.**

Whenever a meaningful task is successfully completed, save the durable result to `iqbalhimel004/science-slides` immediately. A new chat must be able to determine from GitHub alone:

- what has already been completed;
- what evidence/verification exists;
- what decisions were made;
- what remains unresolved;
- the single next authorized action.
