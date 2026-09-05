# Chapter Production Workflow

## Phase 0 - Safety and state recovery

1. Verify the exact repository is `iqbalhimel004/science-slides`.
2. Read `AGENTS.md`, `PROJECT_MASTER.md`, `CURRENT_STATE.md`, `SOURCE_POLICY.md`, `QUALITY_GATES.md`, `SLIDE_STYLE_GUIDE.md`, `TOOL_ROUTING.md`, and `DECISIONS.md`.
3. Confirm one active chapter only.

## Phase 1 - Chapter intake

The user supplies the complete chapter as PDF or ordered screenshots.

Check before analysis:

- chapter title and class/subject identity
- edition/year if identifiable
- first and last page present
- page order and continuity
- missing pages/screenshots
- readable text, equations, tables, and diagrams
- whether any page is cropped or ambiguous

If essential content is missing or unreadable, stop and ask for the missing material. Do not silently infer it.

## Phase 2 - Textbook-only chapter analysis

Analyze the complete textbook chapter before external research.

Produce `CHAPTER_ANALYSIS.md` containing:

- chapter scope
- concept map
- prerequisites
- key definitions
- laws/formulas/units
- diagrams/processes
- experiments/activities
- numerical/problem-solving requirements
- likely student misconceptions/difficulties
- textbook examples and applications
- approximate total instructional load

## Phase 3 - Determine lesson count and split

Divide the chapter by logical instructional boundaries, not page count.

For each proposed lesson specify:

- title
- concepts covered
- prerequisites
- learning outcomes
- estimated teaching time
- reason for the boundary
- bridge to previous/next lesson

Target 50-55 minutes planned time per lesson; 60 minutes is a hard maximum.

Record the proposed split in `LESSON_SPLIT.md` and obtain user approval before final deck production.

## Phase 4 - Source verification

Build `SOURCE_MAP.md` and lesson-level source records.

Verify syllabus-critical definitions, laws, formulas, units, and claims according to `SOURCE_POLICY.md`.

If NCTB wording is available, preserve its meaning and prioritize it for exam-sensitive content. Use 10 Minute School or another established source for corroboration and/or clearer explanation when useful. Use international authoritative sources for supplementary validation where appropriate.

Flag material source conflicts explicitly.

## Phase 5 - Lesson planning

For each approved lesson create `LESSON_PLAN.md` with:

- target duration
- learning outcomes
- prerequisites
- time budget
- teaching sequence
- teacher actions
- student actions
- planned questions
- examples/numericals
- misconceptions to address
- optional homework/enrichment

Aim for 50-55 planned minutes and retain practical buffer.

## Phase 6 - Resource discovery

Before generating custom assets, search for suitable existing:

- simulations
- videos/animations
- diagrams
- interactive models
- authoritative images/visualizations

Record selected resources in `RESOURCES.md` / `ASSETS.md` with source, URL/reference, purpose, target slide, classroom suitability, and licensing/usage note where relevant.

Custom generation is a fallback, not the default.

## Phase 7 - Storyboard

Create `STORYBOARD.md` for every lesson.

Each slide/item should record:

- slide number
- title
- purpose
- exact approved content or content specification
- visual/resource requirement
- teacher note
- student interaction if any
- estimated time
- source reference(s)
- transition to next idea

The storyboard's total planned time must remain within the lesson limit.

## Phase 8 - Independent review when useful

Use Gemini selectively as an independent/adversarial reviewer for:

- difficult or ambiguous science
- source conflicts
- missing-topic checks
- lesson decomposition sanity checks
- misconception coverage
- final chapter coverage audit

Treat Gemini findings as findings to verify, not automatic truth. Incorporate only validated corrections.

## Phase 9 - Content QA and freeze

Before design/rendering, pass:

- curriculum/scope QA
- source QA
- scientific QA
- formula/unit QA
- timing QA
- pedagogy/clarity QA
- chapter coverage QA for the work completed so far

Once approved, mark content `CONTENT_FROZEN` for design purposes. Design tools must not silently alter scientific content.

## Phase 10 - Final deck rendering

Default renderer: Beautiful.ai.

Use Canva when a custom infographic, worksheet, poster, special diagram, or visually constrained slide is better served there.

Hyperagent is reserved for genuinely needed custom simulation/interactive/media assets.

After rendering, perform visual/classroom QA:

- projector readability
- text density
- Bangla/English terminology consistency
- diagram correctness
- layout hierarchy
- image relevance
- no scientific content drift introduced by the design tool

## Phase 11 - Chapter-wide final audit

Compare the original chapter against all lessons.

Every meaningful subsection must be classified as:

- Covered
- Supplementary
- Homework/self-study
- Intentionally omitted with recorded reason

Also check:

- unnecessary repetition across lessons
- logical continuity between lessons
- no orphan concept lacking prerequisite explanation
- all presentations remain within the timing limit

## Phase 12 - Completion and handoff

Update:

- lesson QA files
- chapter `QA_SUMMARY.md`
- chapter `STATUS.md`
- `CURRENT_STATE.md`
- `DECISIONS.md` for durable decisions

A chapter is not `COMPLETE` until every applicable quality gate passes.

## Phase 13 - Optional post-class calibration

After classroom delivery, record:

- actual time
- slides that were too fast/slow
- confusing concepts
- successful resources
- student misconceptions observed
- activities that overran

Revise to a later version (for example `v1.1`) without losing the prior classroom-ready version history.
