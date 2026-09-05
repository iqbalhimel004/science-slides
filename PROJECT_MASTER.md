# Project Master Specification

Version: 3.0
Last revised: 2026-09-05

## Mission

Create source-verified, NCTB-aligned, visually compelling and classroom-reliable science presentations for Classes 8–10.

The goal is not merely a correct slide deck. Each lesson must help students notice, understand, remember, apply and participate while remaining realistic for a single 60-minute class.

## Priority order

When trade-offs exist, prioritize:

1. scientific and source accuracy
2. pedagogical clarity and cognitive-load control
3. realistic classroom timing
4. student attention and visual engagement
5. visual polish

Aesthetic appeal may never override correctness or readability.

## Core production unit

- The user supplies one complete textbook chapter as PDF or ordered screenshots.
- Analyze the complete chapter before deciding presentation count.
- A chapter may produce one or several lesson decks.
- Split by instructional load and logical concept boundaries, not page count.
- Default workflow keeps one complete chapter in one production chat when practical.
- If the chat becomes operationally too large, create a durable GitHub stage checkpoint before continuing in a new chat; this is an exception/fallback, not the normal target.

## 60-minute lesson architecture

Every lesson must fit inside a 60-minute class including teacher explanation, board work, student responses, activities, media, transitions, practice and exit check.

Default planning model:

- CORE: about 40–45 minutes of non-skippable instruction
- FLEX: about 5–10 minutes of useful but skippable practice/example
- planned CORE + FLEX: about 50–55 minutes
- contingency: 5–10 minutes intentionally left unallocated inside the 60-minute class
- STRETCH: appendix/enrichment only; not part of planned core delivery

Do not solve timing failure by speaking unrealistically fast, shrinking slide text, or deleting the exit check.

`CLASSROOM_PROFILE.md` records the assumed period length and classroom environment. If the actual period differs, re-budget before rendering.

## Chapter analysis requirements

Before lesson splitting, identify:

- chapter identity and edition/year where possible
- source completeness/readability/text-layer status
- learning outcomes or explicit curricular objectives where available
- prerequisites
- key concepts
- definitions, laws, formulas, units
- diagrams/processes
- experiments/activities
- worked examples/numericals
- likely misconceptions
- exam-facing practice opportunities where appropriate
- visual complexity
- instructional load

## Source standard

NCTB textbook/curriculum/teacher guide is the primary syllabus authority.

Important definitions, laws, formulas, units and exam-sensitive statements must be traceable to the source and verified against the visible page/image when OCR/text extraction is uncertain.

Established Bangladeshi education sources may corroborate wording and supply explanation ideas. Authoritative international sources may validate science, clarify simplifications and supply licensed educational resources.

Keep:

1. exam-safe/source-grounded definition
2. simpler classroom explanation

as distinct layers when appropriate.

## Pedagogical standard

A lesson should normally include:

- retrieval/prior-knowledge opener
- coherent concept sequence
- purposeful visual/example
- meaningful student response within each major segment
- hinge/check-for-understanding where useful
- guided practice/application
- misconception correction where relevant
- summary and exit check

Avoid long passive stretches. As a heuristic, major teaching segments should normally end in a student response and teacher-only exposition should not remain cognitively unchanged for roughly more than 10 minutes when a meaningful response can be inserted.

## Visual engagement standard

Visual engagement is a first-class quality dimension.

Decks should:

- maintain a clear focal point and hierarchy
- use attractive, modern, age-appropriate layouts
- prefer explanatory diagrams, process visuals, comparisons, worked steps and meaningful imagery over text blocks
- avoid long runs of identical slide layouts
- segment complex ideas
- use signaling such as arrows, grouping, numbering and highlighting
- avoid decorative clutter and redundant on-screen prose
- use motion only when it explains sequence, change, direction, causality or progressive reveal
- provide static fallbacks for important animated/interactive elements

## Grade calibration

- Class 8: more concrete visuals, shorter text blocks, stronger guidance
- Class 9: balanced visuals, definitions, applications, diagrams and equations
- Class 10: slightly higher conceptual/exam-facing density where justified, without becoming textbook-page-like

## Renderer policy

No permanent default renderer is assumed before real project testing.

Candidate full-deck renderers include:

- Beautiful.ai
- Canva

Before the first final deck, run RT-01 using the same Bangla/science stress-test content. Compare:

- Bangla conjunct/rendering quality
- mixed Bangla/English layout
- scientific notation/equations
- diagram labels
- visual quality
- editability
- export quality
- projector readability
- workflow friction

Record the chosen standard renderer and fallback in `DECISIONS.md` after the test.

Hyperagent may support programmatic SVG/equation assets, deterministic QA, custom HTML/JS interaction or other specialist tasks where it has a comparative advantage.

## Existing-resource-first policy

Search for trusted existing simulations, videos, animations, diagrams and authoritative visuals before creating custom equivalents.

Custom generation is justified only when the existing option is scientifically unsuitable, too complex, inaccessible, language-inappropriate, or fails a specific teaching objective.

## Classroom artifact package

GitHub storyboard/content remains the canonical source of truth.

A classroom-ready lesson should include:

1. primary delivery deck in the selected renderer/format
2. PDF fallback
3. static/offline fallback for every classroom-critical online/animated element
4. source/storyboard/resource records in GitHub

## GitHub as canonical memory

This repository is the durable source of truth. Chat history is temporary working context.

New-chat recovery should begin with `OPERATING_BRIEF.md` and `CURRENT_STATE.md`, then only the active chapter/lesson files needed for the task.

## Repository write boundary

Writes are authorized only to:

`iqbalhimel004/science-slides`

Every GitHub write must verify this exact repository identity before execution.

## Final chapter completion standard

A chapter may be marked complete only after:

- full source coverage is confirmed
- lesson split is approved and recorded
- important definitions/formulas/units are verified
- every lesson fits the timing model
- storyboards/decks are complete
- scientific QA passes
- source QA passes
- pedagogy/cognitive-load QA passes
- visual-engagement QA passes
- Bangla/equation/projector/export QA passes
- resource fallback checks pass
- chapter-wide coverage audit passes
- duplication and cross-lesson continuity checks pass
- repository state is updated
