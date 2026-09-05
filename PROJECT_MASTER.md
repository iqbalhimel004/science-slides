# Project Master Specification

## Mission

Create high-quality, source-verified, classroom-ready science teaching presentations for Classes 8-10. Each presentation must be teachable within a single 60-minute class and should be optimized for clear explanation, conceptual understanding, exam relevance, and practical classroom delivery.

## Scope

Subjects may include general science, physics, chemistry, biology, and related NCTB-aligned content for Classes 8-10.

## Core production unit

- One chat handles one complete textbook chapter.
- One chapter may produce one or multiple presentations.
- Presentation count is determined only after the full chapter is analyzed.
- A presentation targets 50-55 minutes of planned instruction and must never exceed 60 minutes of planned classroom time.

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

If the full content cannot be taught properly within 60 minutes, split it into sequential lessons rather than compressing it unnaturally.

## Time policy

Default target per presentation:

- 50-55 minutes planned instruction
- 5-10 minutes practical classroom buffer
- 60 minutes hard ceiling

The exact internal mix may vary by topic, but every planned element counts toward the time budget, including questions, worked examples, simulations, video discussion, and summary.

## Pedagogical standard

A typical lesson should follow a coherent arc such as:

Hook / prior knowledge -> new concept -> visual/example -> application -> guided practice -> understanding check -> summary/exit check

This is a guideline, not a rigid template. Pedagogy should control structure.

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

## Existing-resource-first policy

Before creating custom simulations, videos, animations, or complex diagrams, search for trusted existing resources. Prefer high-quality existing resources when they are scientifically correct, age-appropriate, classroom-suitable, accessible, and legally usable in the intended manner.

Custom generation is justified when:

- no suitable resource exists
- a Bangla-specific or syllabus-specific version is needed
- existing resources are too complex, cluttered, long, or misleading
- a custom visual materially improves teaching

## Tool architecture

### ChatGPT
Project lead, chapter analyst, lesson architect, storyboard author, source reconciler, QA coordinator, and repository-state maintainer.

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
- visual/classroom usability QA passes
- chapter-wide coverage audit passes
- duplication audit passes
- cross-lesson continuity is checked
- current state is updated
