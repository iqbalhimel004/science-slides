# Visual Engagement System

Version: 3.0
Last revised: 2026-09-05

## Objective

Make every classroom deck visually attractive enough to capture and sustain student attention while preserving scientific accuracy, cognitive clarity, accessibility and teaching pace.

Attractiveness is not decoration. Visual design must improve attention, comprehension, memory, curiosity or participation.

## Design principles

### 1. One clear focal point per slide
Use scale, spacing, contrast, position and limited emphasis so students know where to look first.

### 2. Visual storytelling over text dumping
Prefer labelled diagrams, comparisons, process steps, worked examples, progressive construction and meaningful real-world visuals over dense prose.

### 3. Coherence
Remove visuals that do not serve the learning objective. Decorative imagery must not compete with core information.

### 4. Signaling
Use headings, arrows, callouts, numbering, highlighting and spatial grouping to show relationships and direct attention.

### 5. Segmentation
Break complex processes into digestible stages rather than displaying everything at once when that would overload students.

### 6. Redundancy control
Do not project a long paragraph and read the same paragraph aloud. Slides should support teacher explanation, not duplicate it word-for-word.

## Attention management

Do not use a rigid 7–10-minute “attention span” rule.

Instead:

- structure the lesson into meaningful teaching segments
- normally end each major segment with a student response, retrieval prompt, prediction, explanation, practice item, diagram interaction, mini-demo, hinge question or observation
- avoid teacher-only exposition remaining cognitively unchanged for roughly more than 10 minutes when a meaningful response can be inserted
- use novelty only when it supports learning

This is a practical heuristic, not a biological timing law.

## Visual rhythm across a deck

Avoid long sequences of visually identical slides. Rotate among appropriate slide families while keeping a consistent design identity.

Useful families include:

- strong visual hook
- retrieval opener
- concise concept slide
- diagram/process slide
- definition/key-term slide
- example/application slide
- misconception/refutation slide
- worked numerical
- prediction/practice slide
- simulation/video launch
- summary/exit slide

Variation should feel intentional, not chaotic.

## Grade calibration

### Class 8
- more concrete visuals and familiar examples
- lower information density
- larger diagrams and shorter text blocks
- stronger guidance and prediction prompts

### Class 9
- balanced visuals, definitions, equations and applications
- moderate density
- more compare/contrast and process reasoning

### Class 10
- slightly higher conceptual/exam-facing density where needed
- structured formulas, worked examples, diagrams and synthesis
- still avoid textbook-page-style slides

## Subject visual identity

Maintain one project-wide identity while allowing restrained subject cues.

Possible motifs:

- Physics: geometric/technical
- Chemistry: molecular/lab/process
- Biology: organic/system/process
- General science: neutral integrated-science

Do not rely only on color for subject identity or meaning.

## Color and contrast

- Prefer high contrast suitable for classroom projectors.
- Aim for approximately 4.5:1 contrast for normal text and 3:1 for large text/important labels where practical.
- Never rely on color alone to distinguish categories, directions, states or correctness.
- Use a restrained palette.
- Avoid low-contrast pastel-on-pastel combinations for core text.

## Typography

- Use Bangla-compatible fonts proven by RT-01 in the selected renderer/export path.
- Keep clear hierarchy for title, key term, body, formula, label and caption.
- Do not shrink text to rescue an overcrowded slide; simplify or split it.
- Verify Bangla conjuncts, punctuation, equations, symbols and line breaks in the actual artifact.

Do not permanently lock specific fonts until the first renderer calibration proves they render reliably in the chosen workflow.

## Image and illustration style

Prefer visuals that are:

- scientifically accurate
- age-appropriate
- clean
- consistent within the lesson
- large enough for the back of the classroom

Avoid random stock-photo decoration. A photo should create context, curiosity, comparison or application.

## Scientific diagrams

Preferred hierarchy:

1. trusted textbook/authoritative diagram when suitable and legally usable
2. custom redrawn/code-generated/Canva diagram based on verified science
3. AI-generated diagram only with strict scientific QA

Verify labels, arrows, axes, polarity, directions, units, structural positions and relationships.

## Equations and notation

If the selected renderer does not reliably support complex equations, chemistry notation or mixed-script scientific text, preserve the source expression in the storyboard and use a controlled equation rendering path such as LaTeX/MathJax to SVG/PNG. Verify the final exported result.

## Motion and animation

Use motion only when it helps explain:

- sequence
- change over time
- causality
- movement/direction
- progressive construction
- meaningful reveal

Avoid decorative spins, bounces and excessive transitions.

Every important animated/interactive element needs a usable static fallback.

## Video and simulation

Use only when the resource teaches something better than a static slide/teacher explanation.

Before launch, give students a purpose such as:

- what should you observe?
- what should you predict?
- which variable changes?
- what evidence should you look for?

Afterward, include a brief interpretation/check.

For externally hosted video, use the legal source/embed and a relevant timestamped segment rather than downloading/creating an unauthorized excerpt. Keep a static fallback for classroom-critical use.

## Visual purpose taxonomy

Every nontrivial visual in a storyboard should state at least one purpose:

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

## Renderer calibration

Before selecting the project-wide default renderer, run RT-01 with the same stress-test content in Beautiful.ai and Canva and compare Bangla, equations, diagram labels, visual quality, editability, exports and projector readability.

The selected renderer must serve the teaching objective. Another renderer may still be used for specific lesson types when it has a clear advantage.

## Master visual system calibration

The first completed chapter establishes the reusable visual system after RT-01:

- title hierarchy
- Bangla/English typography pairing
- spacing
- background families
- accent palette
- subject cues
- illustration/icon style
- image treatment
- callout system
- equation/numerical treatment
- diagram label style
- standard slide families

Record durable changes in `DECISIONS.md`.

## Export and classroom validation

Do not judge the design only in the editor. Validate the actual artifact used in class.

Check:

- Bangla rendering
- font substitution
- equation/symbol rendering
- image cropping
- diagram label size
- contrast
- links/QRs
- media/simulation launch
- animation behaviour where used
- static/offline fallback
- PDF fallback

If a key visual requires zooming or labels cannot be read from normal classroom distance, the slide fails.
