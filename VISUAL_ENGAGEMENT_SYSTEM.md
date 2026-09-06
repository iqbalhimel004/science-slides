# Visual Engagement System

Version: 4.0
Last revised: 2026-09-06
Status: **ACTIVE — POST-PILOT-ENGAGEMENT UPDATE**

## Objective

Make every classroom deck visually attractive enough to capture and sustain student attention while preserving scientific accuracy, cognitive clarity, accessibility and teaching pace.

Attractiveness is not decoration. Visual design must improve attention, comprehension, memory, curiosity or participation.

The first Lesson 1 pilot proved that a deck can be scientifically correct and still fail the project goal if it is too static, utilitarian or visually flat. Therefore visual engagement is a **production hard gate**, not an optional finishing step.

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

### 7. Dynamic implementation must survive production
If the storyboard calls for progressive construction, prediction/reveal, simulation, live demo or interaction, the production build must implement it or explicitly record why a static alternative is better.

Do not silently flatten a dynamic storyboard into a static deck.

## Attention management

Do not use a rigid 7–10-minute “attention span” rule.

Instead:

- structure the lesson into meaningful teaching segments;
- normally end each major segment with a student response, retrieval prompt, prediction, explanation, practice item, diagram interaction, mini-demo, hinge question or observation;
- avoid teacher-only exposition remaining cognitively unchanged for roughly more than 10 minutes when a meaningful response can be inserted;
- use novelty only when it supports learning.

## Visual rhythm across a deck

Avoid long sequences of visually identical slides. Rotate among appropriate slide families while keeping a consistent design identity.

Useful families include:

- strong visual hook
- retrieval opener
- observation/demo slide
- concise concept slide
- diagram/process slide
- definition/key-term slide
- example/application slide
- misconception/refutation slide
- prediction/reveal slide
- simulation/video/resource launch
- guided-practice slide
- summary/exit slide

Variation should feel intentional, not chaotic.

## Grade calibration

### Class 8
- more concrete visuals and familiar examples;
- lower information density;
- larger diagrams and shorter text blocks;
- stronger guidance and prediction prompts;
- more observation/prediction/reveal interaction where useful.

### Class 9
- balanced visuals, definitions, equations and applications;
- moderate density;
- more compare/contrast and process reasoning.

### Class 10
- slightly higher conceptual/exam-facing density where needed;
- structured formulas, worked examples, diagrams and synthesis;
- still avoid textbook-page-style slides.

## Subject visual identity

Maintain one project-wide identity while allowing restrained subject cues.

Possible motifs:

- Physics: geometric/technical/light/ray motifs;
- Chemistry: molecular/lab/process;
- Biology: organic/system/process;
- General science: neutral integrated-science.

Do not rely only on color for subject identity or meaning.

## Color and contrast

- Prefer high contrast suitable for classroom projectors.
- Aim for approximately 4.5:1 contrast for normal text and 3:1 for large text/important labels where practical.
- Never rely on color alone to distinguish categories, directions, states or correctness.
- Use a restrained but distinctive palette.
- Avoid low-contrast pastel-on-pastel combinations for core text.
- Avoid monotonous all-white-card compositions across most of a lesson.

## UI / composition quality

A classroom deck should feel intentionally designed.

Prefer:

- strong opening visual impact;
- clear depth/hierarchy;
- large focal science diagrams;
- useful contextual imagery;
- consistent callout/badge/label systems;
- balanced whitespace;
- restrained gradients/transparency/glow/depth where they improve focus;
- distinctive treatments for observation, prediction, explanation, rule, misconception, practice, simulation and exit.

Reject or revise decks materially dominated by:

- repetitive white cards/boxes;
- generic template sections;
- flat technical-report appearance;
- large purposeless empty space;
- dense text plus token icons;
- random stock decoration;
- inconsistent color/illustration language.

## Typography

- Current controlled baseline: `Noto Sans Bengali` + `Noto Sans` where needed.
- Keep clear hierarchy for title, key term, body, formula, label and caption.
- Do not shrink text to rescue an overcrowded slide; simplify or split it.
- Verify Bangla conjuncts, punctuation, equations, symbols and line breaks in the actual artifact.

## Image and illustration style

Prefer visuals that are scientifically accurate, age-appropriate, clean, consistent within the lesson, and large enough for the back of the classroom.

Avoid random stock-photo decoration. A photo should create context, curiosity, comparison or application.

## Scientific diagrams

Preferred hierarchy:

1. trusted textbook/authoritative diagram when suitable and legally usable;
2. deterministic custom redraw/code-generated/controlled Canva visual based on verified science;
3. AI-generated diagram only with strict scientific QA/redraw.

Verify labels, arrows, axes, polarity, directions, units, structural positions and relationships.

## Equations and notation

If native rendering is unreliable, preserve the source expression in the storyboard and use a controlled equation path such as LaTeX/MathJax → SVG/PNG. Verify the final export.

## Dynamic implementation vocabulary

For each relevant segment, production should choose one:

- `STATIC_INTENTIONAL`
- `STAGED_REVEAL`
- `PREDICT_THEN_REVEAL`
- `NATIVE_ANIMATION`
- `INTERACTIVE_NAVIGATION`
- `LIVE_DEMO`
- `SIMULATION`
- `VIDEO/ANIMATION_RESOURCE`

Not every slide needs movement. But a concept-heavy lesson with zero meaningful dynamic engagement must be justified explicitly.

## Motion and animation

Use motion only when it helps explain:

- sequence;
- change over time;
- causality;
- movement/direction;
- progressive construction;
- meaningful reveal.

Avoid decorative spins, bounces and excessive transitions.

### Compatibility hierarchy

For science-critical progressive explanation:

1. `STAGED_REVEAL` / `PREDICT_THEN_REVEAL`;
2. deterministic static states;
3. `NATIVE_ANIMATION` only when it adds real instructional value and can be tested in Microsoft PowerPoint.

Staged reveal is often preferable because it survives PowerPoint/PDF/static fallback workflows more reliably.

Every important animated/interactive element needs a usable static fallback.

## Video and simulation

Use only when the resource teaches something better than a static slide/teacher explanation.

Before launch, give students a purpose:

- what should you observe?
- what should you predict?
- which variable changes?
- what evidence should you look for?

Afterward, include a brief interpretation/check.

For externally hosted resources:

- use the legal source/embed;
- record licensing/attribution where required;
- test link/button/QR;
- keep a static fallback;
- do not make CORE depend on internet unless classroom reliability is explicitly confirmed.

## Visual purpose taxonomy

Every nontrivial visual should state at least one purpose:

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

## First-pilot master visual system

Lesson 1 v2 is now the master visual/motion prototype.

Before Lessons 2–4 inherit the style:

1. build Lesson 1 v2 from frozen science/content;
2. implement planned purposeful dynamic states;
3. integrate optional simulation/interactive support where useful;
4. run visual-attractiveness QA;
5. run Microsoft PowerPoint compatibility/playback QA;
6. verify PDF/static fallback;
7. obtain user approval of the overall UI/motion direction.

This approval step is mandatory for the first pilot because the initial controlled deck was rejected as insufficiently attractive/static.

## Master visual system calibration outputs

The first approved chapter establishes reusable:

- title hierarchy;
- Bangla/English typography pairing;
- spacing;
- background families;
- accent palette;
- subject cues;
- illustration/icon style;
- image treatment;
- callout system;
- equation/diagram treatment;
- simulation/resource launch style;
- staged-reveal patterns;
- standard slide families.

## Export and classroom validation

Do not judge the design only in the editor. Validate the actual artifact used in class.

Check:

- Bangla rendering;
- font substitution;
- equation/symbol rendering;
- image cropping;
- diagram label size;
- contrast;
- links/QRs;
- media/simulation launch;
- animation/reveal behaviour where used;
- Microsoft PowerPoint repair-warning status;
- playback after any normalization/resave;
- static/offline fallback;
- PDF fallback.

If a key visual requires zooming or labels cannot be read from normal classroom distance, the slide fails.

Canonical production reliability policy:

`PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
