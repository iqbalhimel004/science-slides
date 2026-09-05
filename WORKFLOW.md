# Chapter Production Workflow

Version: 3.0
Last revised: 2026-09-05

## Phase 0 — Safety and state recovery

1. Verify the exact repository is `iqbalhimel004/science-slides`.
2. Read `OPERATING_BRIEF.md` and `CURRENT_STATE.md`.
3. If a chapter is active, read its `STATUS.md` and only the files needed for the current stage.
4. Read deeper policy files only when relevant to the task.

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

## Phase 2 — Full chapter analysis

Analyze the complete chapter before external supplementation or lesson splitting.

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

## Phase 4 — Source verification

Build claim/source records before content freeze.

For important definitions/laws/formulas/units:

- pin source edition/year/page where possible
- verify against the visible NCTB page/image when OCR/extraction is uncertain
- distinguish exam-safe/source-grounded wording from simpler explanation
- use Tier 2 for local wording/convention/explanation ideas
- use authoritative Tier 3 sources for scientific validation when useful
- record material conflicts explicitly

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

Every student response, board-writing segment, media launch, transition and debrief counts as time.

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

## Phase 7 — Storyboard

For every slide/item record:

- slide number/title
- segment: CORE / FLEX / STRETCH
- purpose
- exact approved content or specification
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

## Phase 8 — Independent review

Use Gemini selectively, not automatically for every trivial step.

High-value review points:

1. lesson-split/decomposition review for complex chapters or several-lesson chapters
2. pre-freeze review of difficult science, misconception handling, exam-sensitive wording or missing coverage
3. targeted external research when needed

Findings must be verified before incorporation.

## Phase 9 — Content QA and freeze

Before rendering, verify:

- curriculum/scope
- source provenance
- scientific accuracy
- formulas/units/calculations
- realistic timing
- pedagogy/cognitive load
- misconception handling
- resource suitability
- storyboard completeness

Then obtain/record content approval and mark `CONTENT_FROZEN`.

After freeze, design tools may improve layout/styling but may not silently alter scientific meaning.

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

## Phase 11 — Rendering

Choose the renderer that best fits the lesson and passed calibration.

- Beautiful.ai: strong candidate for structured full decks
- Canva: strong candidate for full visual/diagram-heavy decks and bespoke visual work
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

## Phase 13 — Chapter-wide final audit

Compare all lessons back to the original chapter.

Every meaningful subsection should be classified as:

- Covered
- Supplementary
- Homework/self-study
- Intentionally omitted with reason

Also verify:

- no unnecessary duplication
- prerequisites precede dependent concepts
- bridges between lessons are coherent
- no important content was lost during splitting

## Phase 14 — Completion and handoff

Update:

- lesson/chapter QA records
- chapter `STATUS.md`
- `CURRENT_STATE.md`
- `DECISIONS.md` for durable new decisions
- source/resource records

## Phase 15 — Post-class calibration

For at least the first few lessons/chapters, record:

- actual time
- what overran/finished early
- confusing concepts
- effective resources
- observed misconceptions
- resource/technical failures

Use real classroom evidence to recalibrate future timing and design heuristics.
