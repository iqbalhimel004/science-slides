# Project Master Specification

Version: 2.0
Last revised: 2026-09-05

## Mission

Create high-quality, source-verified, classroom-ready science teaching presentations for Classes 8-10. Each presentation must be teachable within a single 60-minute class and should be optimized for clear explanation, conceptual understanding, exam relevance, practical classroom delivery, and sustained student attention.

The target is not merely a correct slide deck. The target is a visually compelling teaching experience that helps students notice, understand, remember, and participate without sacrificing scientific rigor.

## Scope

Subjects may include general science, physics, chemistry, biology, and related NCTB-aligned content for Classes 8-10.

## Core production unit

- One chat handles one complete textbook chapter.
- One chapter may produce one or multiple presentations.
- Presentation count is determined only after the full chapter is analyzed.
- A presentation targets 50-55 minutes of planned instruction and must never exceed 60 minutes of planned classroom time.
- The user approves the lesson split before final deck production.

## Chapter decomposition principle

Presentation count is based on instructional load and concept boundaries, not page count. Analysis must account for:

- new concepts and prerequisite knowledge
- definitions, laws, formulas, and units
- diagrams and scientific processes
- numerical/problem-solving load
- experiments, demonstrations, or activities
- simulations/videos where pedagogically useful
- misconceptions and likely student difficulty
- guided practice and formative assessment
- transitions between subtopics
- visual complexity and time needed to explain important diagrams/processes
- attention/interaction opportunities required for a realistic 60-minute lesson

If the full content cannot be taught properly within 60 minutes, split it into sequential lessons rather than compressing it unnaturally.

## Time policy

Default target per presentation:

- 50-55 minutes planned instruction
- 5-10 minutes practical classroom buffer
- 60 minutes hard ceiling

The exact internal mix may vary by topic, but every planned element counts toward the time budget, including questions, worked examples, simulations, video discussion, transitions, and summary.

## Pedagogical standard

A typical lesson should follow a coherent arc such as:

Hook / prior knowledge -> new concept -> visual/example -> application -> guided practice -> understanding check -> summary/exit check

This is a guideline, not a rigid template. Pedagogy should control structure.

Where pedagogically appropriate, plan a meaningful attention reset roughly every 7-10 minutes using a prediction, question, visual change, brief practice, reveal, mini-demo, simulation observation, or other purposeful student action. This is a heuristic, not a mandatory timer.

## Visual engagement standard

Visual engagement is a first-class quality dimension, alongside scientific accuracy, source traceability, timing, and pedagogy.

Every deck should:

- have a clear visual hierarchy and obvious focal point on each slide
- use attractive, modern, age-appropriate layouts without becoming decorative or childish
- avoid long runs of visually identical slides
- prefer explanatory diagrams, comparisons, process visuals, worked steps, and meaningful imagery over text blocks
- use deliberate visual signaling such as arrows, grouping, highlighting, and numbering
- segment complex ideas rather than showing everything at once
- control cognitive load and remove distracting or redundant content
- use motion only when it explains sequence, change, causality, direction, or progressive construction
- provide static fallbacks for important animated/interactive elements
- preserve a consistent project-wide design identity while allowing restrained subject-specific visual cues

Detailed rules live in `VISUAL_ENGAGEMENT_SYSTEM.md` and `SLIDE_STYLE_GUIDE.md`.

## Grade calibration

The project keeps one overall design identity, but presentation density is calibrated by grade:

- Class 8: more concrete visuals, shorter text blocks, larger diagrams, stronger guidance
- Class 9: balanced visuals, definitions, applications, equations, and process reasoning
- Class 10: slightly higher conceptual/exam-facing density where justified, while still avoiding textbook-page-style slides

## Source standard

NCTB textbook/curriculum/teacher guide is the primary authority for syllabus-critical content. Important definitions, laws, formulas, units, and exam-sensitive wording must be source-traceable. Established sources such as 10 Minute School may be used for corroboration and student-friendly explanation. International authoritative scientific/educational sources may be used for supplementary validation.

Definitions should distinguish:

1. authoritative/exam-safe definition
2. simpler teacher explanation

Do not blur the two.

## Content standard

- Bangla is the main teaching language.
- Important scientific terminology should normally introduce the English term in parentheses on first meaningful occurrence, e.g. `প্লবতা (Buoyancy)`.
- Avoid duplicating full paragraphs in both languages.
- Keep each slide focused on one major teaching idea where practical.
- Avoid copying textbook paragraphs wholesale onto slides.
- Scientific precision takes priority over decorative visual appeal.
- Visual attractiveness must support, not compete with, instruction.

## Accessibility and projection standard

- Design for classroom projection first.
- Do not rely on color alone to communicate meaning.
- Aim for strong contrast; where practical, target approximately 4.5:1 for normal text and 3:1 for large text/important labels.
- Do not shrink text to rescue an overcrowded slide.
- Verify Bangla glyphs, conjuncts, equations, symbols, labels, and line breaks in the actual classroom artifact/export.
- A key visual that requires zooming to teach is considered a design failure.

## Existing-resource-first policy

Before creating custom simulations, videos, animations, or complex diagrams, search for trusted existing resources. Prefer high-quality existing resources when they are scientifically correct, age-appropriate, classroom-suitable, accessible, and legally usable in the intended manner.

Custom generation is justified when:

- no suitable resource exists
- a Bangla-specific or syllabus-specific version is needed
- existing resources are too complex, cluttered, long, or misleading
- a custom visual materially improves teaching

Every core online resource must have a classroom fallback when failure would materially disrupt the lesson.

## Tool architecture

### ChatGPT
Project lead, chapter analyst, lesson architect, storyboard author, source reconciler, QA coordinator, visual-engagement coordinator, and repository-state maintainer.

### NotebookLM
Optional source-grounding layer for uploaded textbook/reference materials, useful for source-constrained extraction, chapter mapping, study guides, and cross-checking. It does not replace the actual textbook as authority.

### Gemini AI Pro
Independent review and adversarial audit layer for difficult scientific points, decomposition sanity checks, missing-topic checks, source conflicts, and targeted external research.

### Beautiful.ai
Primary final presentation design/rendering system after content is verified and frozen. It must not independently rewrite definitions, formulas, or scientific claims.

### Canva
Secondary visual-production system for infographics, worksheets, posters, diagram cleanup, custom visual layouts, and cases where Beautiful.ai is not the best renderer.

### Hyperagent
Specialist generator for custom interactive simulations, HTML/JS visualizations, advanced visual assets, or short custom media when existing trusted resources are insufficient.

## Design system and master-theme policy

The first completed chapter is used to calibrate a reusable master visual system covering:

- Bangla/English typography hierarchy
- spacing
- background families
- restrained accent palette
- subject accent logic
- icon/illustration style
- image treatment
- equation/numerical styling
- diagram labels/callouts
- standard slide families

Once approved, master-theme changes become durable decisions in `DECISIONS.md`.

## Content-freeze and design-change boundary

After `CONTENT_FROZEN`:

Allowed without reopening science QA:

- layout changes
- crop/position changes
- spacing and hierarchy improvements
- visual styling that preserves meaning

Not allowed without reopening content QA:

- changing definitions
- changing scientific claims
- changing equations/formulas/units
- introducing new explanatory claims
- changing wording in a way that may alter meaning

## GitHub as canonical memory

This repository is the durable project memory. It stores:

- master rules
- decisions
- current state
- lesson split rationale
- source maps
- storyboards
- asset/resource records
- QA results
- chapter completion status
- master visual-system decisions

Chat history is not the canonical source of truth.

## Repository write boundary

Writes are authorized only to:

`iqbalhimel004/science-slides`

Every GitHub write must verify this exact repository identity before execution.

## Final chapter completion standard

A chapter may be marked complete only after:

- full source coverage is confirmed
- lesson split is approved and recorded
- all required definitions/formulas are verified
- every lesson fits the time ceiling
- storyboards/decks are complete
- scientific QA passes
- source QA passes
- pedagogy/cognitive-load QA passes
- visual-engagement QA passes
- accessibility/projector QA passes
- export/playback QA passes for the actual classroom artifact
- resource fallback checks pass
- chapter-wide coverage audit passes
- duplication audit passes
- cross-lesson continuity is checked
- current state is updated
