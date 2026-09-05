# Slide Style Guide

Version: 3.0
Last revised: 2026-09-05

## Format

- Default aspect ratio: 16:9 widescreen.
- Design for classroom projectors first, laptop/mobile second.
- Prefer high contrast and generous spacing.
- Keep a consistent visual system across Classes 8–10.
- Use layout variation intentionally so the deck does not feel visually repetitive.

## Primary design objective

Slides must be scientifically correct, cognitively clear, and visually compelling enough to sustain student attention. Visual polish must serve comprehension, curiosity, memory, or participation rather than decoration for its own sake.

Priority order remains:

1. scientific/source accuracy
2. pedagogical clarity and cognitive-load control
3. realistic timing
4. student attention and visual engagement
5. visual polish

## Language

- Main teaching language: Bangla.
- Introduce important English scientific terms in parentheses on first meaningful occurrence, e.g. `ঘনত্ব (Density)`.
- Do not duplicate whole paragraphs in both languages.
- Use terminology consistent with the supplied NCTB source unless a correction/clarification is explicitly documented.

## Content density and cognitive load

- Prefer one major teaching idea per slide.
- Avoid long copied textbook paragraphs.
- Use short bullets, labelled visuals, equations and examples where they teach better than prose.
- Put extended explanation in teacher notes rather than crowding the projected slide.
- Do not show a long paragraph that the teacher is expected to read aloud word-for-word.
- Segment complex processes and multi-step reasoning when showing everything at once would overload students.
- Remove decorative items that compete with the focal teaching point.

## Visual hierarchy

Each slide needs an obvious first focal point where practical.

Use scale, spacing, contrast, alignment, grouping, arrows/callouts, numbering and controlled emphasis.

Avoid highlighting everything.

## Typography

- Final Bangla font choices are **not locked before RT-01**.
- Candidate fonts must be tested for Bangla conjuncts, mixed Bangla/English, numerals, symbols and exported/projected output.
- Titles must be readable from the back of a normal classroom.
- Body text and diagram labels must remain large enough for projection.
- Do not shrink text to rescue an overcrowded slide; simplify or split it.
- Verify Bangla conjuncts, punctuation, equations, symbols and line breaks in the actual artifact.

The first pilot chapter should establish numeric font/density baselines from real output rather than arbitrary pre-locking.

## Color and contrast

- Use a restrained project palette with limited accent colors.
- Aim for approximately 4.5:1 contrast for normal text and 3:1 for large text/important labels where practical.
- Classroom projection may require stronger contrast than the minimum target.
- Do not rely on color alone to convey category, direction, state, correctness or comparison.
- Avoid pastel-on-pastel combinations for essential text.

## Standard slide families

Maintain reusable patterns for:

- lesson opening/hook
- retrieval/prior-knowledge opener
- learning outcomes where useful
- definition/key term
- concept explanation
- labelled diagram/process
- law/formula
- worked numerical
- compare/contrast
- misconception/refutation
- simulation/video/resource launch
- student practice/check for understanding
- prediction/reveal
- summary
- exit question

Not every lesson needs every family.

## Visual rhythm and attention management

Avoid long runs of slides with the same composition. Variation should support lesson flow, not create chaos.

Do **not** enforce a rigid 7–10-minute “attention span” timer.

Instead:

- structure lessons into meaningful segments
- normally end major segments with a student response, retrieval prompt, prediction, explanation, practice item, diagram interaction, hinge question or observation
- avoid teacher-only exposition remaining cognitively unchanged for roughly more than 10 minutes when a meaningful response can be inserted

This is a practical heuristic, not a biological rule.

## Grade calibration

### Class 8
- more concrete, familiar, real-life visuals
- lower information density
- larger diagrams
- shorter text blocks
- stronger guided cues

### Class 9
- balanced visuals, definitions, applications and equations
- moderate density
- stronger compare/contrast and process reasoning

### Class 10
- slightly higher conceptual and exam-facing density where justified
- more structured formulas, worked examples, synthesis and labelled diagrams
- still avoid textbook-page-style slides

## Definition slide

Where appropriate show:

- term in Bangla + English
- exam-safe/source-grounded definition
- a separate clearly labelled simple explanation if useful
- a relevant visual/example only if it improves understanding

Do not merge the simple explanation into the authoritative definition without marking the distinction.

## Equation/numerical slide

Use a predictable structure:

Problem → Given → Required → Formula → Substitution → Calculation → Answer + unit → Interpretation where useful

If the selected renderer handles complex equations, chemistry notation, subscripts or superscripts unreliably, preserve the source expression in the storyboard and use a controlled rendering method such as LaTeX/MathJax → SVG/PNG. Verify the exported result visually.

## Diagram standard

Scientific correctness outranks aesthetics. Verify labels, arrows/directions, polarity, axes/scales, anatomy/structure, circuit connections, ray/wave directions, relative position and units/symbols.

Preferred hierarchy:

1. trusted textbook/authoritative diagram when suitable and legally usable
2. custom redrawn/code-generated/Canva diagram based on verified science
3. AI-generated labelled diagram only with strict scientific verification/redraw as needed

## Image standard

Prefer images that create context, curiosity, comparison or application. Avoid random stock photography that does not help teach the concept. Keep illustration/image style reasonably consistent within one lesson.

## Visual purpose

Every nontrivial visual should have at least one explicit purpose:

- Motivate
- Explain
- Compare
- Locate
- Sequence
- Quantify
- Predict
- Practice
- Summarize

If no purpose applies, question whether the visual belongs.

## Motion and animation

Use motion only when it helps communicate sequence, change over time, causality, movement/direction, progressive construction or meaningful reveal.

Avoid decorative spins, bounces and excessive transitions.

Every important animated/interactive element needs a usable static fallback.

## Video/simulation slide

Keep the slide itself simple:

- what students should observe/predict
- launch link/button/QR if needed
- one or two guiding questions
- planned duration
- static fallback reference

After the resource, include a brief interpretation/check.

For externally hosted video, use the legal source/embed and a relevant timestamped segment rather than creating an unauthorized downloaded excerpt.

## Renderer policy

There is **no permanent default renderer before RT-01**.

- Beautiful.ai: candidate full-deck renderer, especially for structured decks
- Canva: candidate full-deck renderer and specialist for bespoke visuals/infographics/worksheets/diagrams
- Hyperagent: specialist for programmatic SVG/equation assets, custom HTML/JS interaction and deterministic QA

The first pilot chapter must compare real output and workflow friction before locking long-term defaults.

## Accessibility and classroom practicality

- Do not rely on color alone to convey a scientific distinction.
- Avoid cluttered backgrounds.
- Ensure labels remain legible after projection.
- Keep critical information away from slide edges.
- Prefer stable static fallbacks for any online resource that may fail during class.
- If a key visual requires zooming to teach, redesign it.

## Final artifact validation

Judge the deck in the actual delivery format, not only in the editor.

Check:

- Bangla rendering
- font substitution
- equations/symbols
- image crops
- diagram label size
- links and QR codes
- video/simulation launch behaviour
- animation behaviour where used
- contrast and readability after export/projection
- static/offline fallbacks
- PDF fallback

Detailed visual principles also live in `VISUAL_ENGAGEMENT_SYSTEM.md`.
