# Durable Decisions

## D-001 - GitHub is canonical project memory

Decision: Use `iqbalhimel004/science-slides` as the durable source of truth. Chat history is temporary working context.

Reason: New chats must be able to recover project state without re-explaining prior work.

## D-002 - Absolute repository write boundary

Decision: Science Slides work may write only to `iqbalhimel004/science-slides`.

Reason: Multiple unrelated repositories are connected and must not be modified accidentally.

## D-003 - One chat handles one complete chapter

Decision: Normal production workflow uses one chat per textbook chapter.

Reason: Keeps context bounded while allowing full chapter-level coverage and continuity audits.

## D-004 - Lesson count is derived after full chapter analysis

Decision: Do not predetermine the number of presentations from page count. Analyze the complete chapter first, estimate instructional load, and split by concept boundaries.

Reason: Page length is a poor proxy for teaching time and conceptual difficulty.

## D-005 - 60-minute hard ceiling

Decision: Each presentation should target 50-55 minutes of planned teaching and must not exceed 60 minutes.

Reason: Real classrooms need buffer for questions, transitions, board work, and technical delays.

## D-006 - NCTB-first source hierarchy

Decision: Use NCTB textbook/curriculum/teacher guide as the primary syllabus authority. Use established sources such as 10 Minute School for corroboration and clearer explanation; use authoritative international sources as appropriate.

Reason: Classroom and exam wording must remain aligned with the syllabus while preserving scientific correctness.

## D-007 - Definitions and critical science are source-traceable

Decision: Important definitions, laws, formulas, units, and syllabus-critical claims must not rely solely on model memory when reliable sources are available.

Reason: Reduces hallucination and makes later QA/review auditable.

## D-008 - Existing resources before custom generation

Decision: Search for trusted existing simulations, animations, videos, and diagrams before creating custom versions.

Reason: Existing high-quality resources are often more reliable and save time/credits.

## D-009 - Beautiful.ai is the primary deck renderer

Decision: After content freeze, use Beautiful.ai as the default final presentation design/rendering system.

Reason: It is well suited to structured presentation generation and consistent layout.

## D-010 - Canva is a supplementary visual tool

Decision: Use Canva for infographics, worksheets, posters, custom diagrams, visual explainers, and special layouts where it is clearly superior to the default renderer.

Reason: Avoid forcing every visual task through one presentation tool.

## D-011 - Hyperagent is a specialist gap-filler

Decision: Reserve Hyperagent for custom simulations, advanced interactive visualizations, or short media that existing trusted resources cannot adequately provide.

Reason: Preserve high-value credits and avoid redundant media generation.

## D-012 - Gemini is an independent reviewer, not automatic authority

Decision: Gemini may audit difficult science, decomposition, missing topics, and the master workflow, but its findings must be independently validated before changing canonical state.

Reason: Independent model review is useful, but model agreement is not evidence by itself.

## D-013 - Chapter-level final coverage audit is mandatory

Decision: After all lesson decks are complete, compare them back to the original chapter and classify every meaningful subsection as covered, supplementary, homework/self-study, or intentionally omitted with reason.

Reason: Lesson-by-lesson QA alone can miss content lost during decomposition.

## D-014 - Visual engagement is a first-class quality requirement

Decision: A deck must be visually attractive, modern, age-appropriate, and attention-retaining while remaining scientifically rigorous and cognitively clear.

Reason: Correct content alone is insufficient for effective classroom presentation.

## D-015 - Attention resets are planned heuristically

Decision: Where pedagogically useful, include a meaningful attention reset roughly every 7-10 minutes through prediction, retrieval, visual reveal, mini-demo, short practice, or similar purposeful activity.

Reason: Long visually/cognitively static stretches reduce attention. The cadence is a heuristic, not a rigid timer.

## D-016 - Cognitive-load control is explicit

Decision: Control redundancy, decorative clutter, split attention, and overloaded slides; segment complex material when needed.

Reason: Attractive design must not increase cognitive load.

## D-017 - Every nontrivial visual needs an instructional purpose

Decision: Storyboards classify visuals as Motivate, Explain, Compare, Locate, Sequence, Quantify, Predict, Practice, or Summarize.

Reason: Prevents filler imagery and keeps visual design tied to learning.

## D-018 - Motion must be pedagogically justified

Decision: Use animation/motion only to explain sequence, change, causality, direction, progressive construction, or meaningful reveal. Important motion/interaction requires a static fallback.

Reason: Decorative motion can distract students and creates classroom reliability risk.

## D-019 - Master visual system is calibrated from the first completed chapter

Decision: The first completed chapter will establish the reusable typography, spacing, palette, subject cues, illustration style, equation/diagram treatment, and standard slide families.

Reason: A tested real chapter is a better calibration source than an abstract theme specification.

## D-020 - Actual classroom artifact must pass export/playback QA

Decision: A deck is not classroom-ready until the real delivery format has been checked for Bangla rendering, equations, crops, labels, links/QRs, media, animation, and fallbacks.

Reason: Editor correctness does not guarantee exported or projected correctness.

## D-021 - Grade-level visual density is calibrated

Decision: Keep one project identity but tune density by grade: Class 8 more concrete/visual, Class 9 balanced, Class 10 slightly denser where justified.

Reason: Visual complexity should match student age and curricular demands.
