# Slide Style Guide

Version: 4.1
Last revised: 2026-09-06
Status: **ACTIVE — POST-RT-01 / POST-PILOT-ENGAGEMENT UPDATE**

## Format

- Default aspect ratio: 16:9 widescreen.
- Design for classroom projectors first, laptop/mobile second.
- Prefer high contrast and generous spacing.
- Keep a consistent visual system across Classes 8–10.
- Use layout variation intentionally so the deck does not feel repetitive.

## Primary design objective

Slides must be scientifically correct, cognitively clear and visually compelling enough to support attention and understanding. Visual polish must serve comprehension, curiosity, memory or participation.

Priority order:

1. scientific/source accuracy
2. pedagogical clarity and cognitive-load control
3. realistic timing
4. student attention and visual engagement
5. visual polish

A deck that is scientifically correct but visually unfinished, repetitive or utilitarian is not `CLASSROOM_READY` for the first pilot.

## Language

- Main teaching language: Bangla.
- Introduce important English scientific terms in parentheses on first meaningful occurrence when useful.
- Do not duplicate full paragraphs in both languages.
- Use NCTB terminology where appropriate, but preserve documented current-science corrections/clarifications.

## Content density

- Prefer one major teaching idea per slide.
- Avoid textbook paragraph dumps.
- Use short text blocks, labelled visuals, equations and examples where they teach better than prose.
- Put extended explanation in teacher notes rather than projected text.
- Do not shrink text to rescue an overcrowded slide; simplify or split it.
- Segment complex processes and reasoning.

## Visual hierarchy

Each slide should have an obvious first focal point where practical.

Use scale, spacing, contrast, alignment, grouping, arrows/callouts, numbering and controlled emphasis.

Avoid highlighting everything.

## Typography — post-RT-01

Current controlled production baseline:

- Bangla: `Noto Sans Bengali`
- Latin/scientific notation: `Noto Sans` where needed

Rules:

- titles must be readable from the back of a normal classroom;
- body text and diagram labels must remain projector-legible;
- mixed Bangla/English text must be checked in the actual rendered/exported artifact;
- do not rely on proprietary renderer font packages for final portability;
- final numeric font-size/density baselines remain pilot-calibration items;
- font files themselves must not be shared/committed as project artifacts.

## Scientific notation

RT-01 showed renderer-specific notation failures are possible.

Operational rule:

- straightforward Unicode such as `°`, `10⁸`, `H₂O`, `CO₂`, `≠` may remain native text only after actual export verification;
- comparison symbols and renderer-sensitive notation must be checked in the final artifact;
- complex equations/chemistry may use controlled LaTeX/MathJax → SVG/PNG fallback;
- preserve source expressions in storyboard/source records.

## Color and contrast

- Use a restrained but visually distinctive palette with limited accent colors.
- Physics/general-science decks may use a dark or light technical base with a small number of high-contrast accents, provided projector readability remains strong.
- Aim for approximately 4.5:1 contrast for normal text and 3:1 for large text/important labels where practical.
- Do not rely on color alone to convey category, direction, state, correctness or comparison.
- Avoid pastel-on-pastel combinations for essential text.
- Avoid a monotonous all-white-card look across the deck.

## UI / composition quality

The first pilot establishes a reusable visual language. Slides should look intentionally designed, not like a technical report exported to PowerPoint.

Required direction:

- strong hook/opening visual when appropriate;
- generous whitespace with purposeful balance rather than empty unused space;
- clear foreground/background hierarchy;
- large science diagrams and contextual imagery;
- consistent callout/badge/label language;
- restrained use of gradient, glow, transparency or depth only when it improves hierarchy;
- distinct visual treatment for observation, prediction, explanation, rule, misconception, practice, simulation/resource and exit states;
- visually varied slide families while retaining one coherent lesson identity.

Avoid:

- repetitive white rectangles/cards on nearly every slide;
- generic template blocks;
- flat diagram dumps with no focal guidance;
- token icons that add no teaching value;
- tiny captions carrying essential content;
- random stock decoration;
- large blank zones without instructional purpose.

## Standard slide families

Reusable patterns may include:

- hook/retrieval opener
- observation/demo prompt
- definition/key term
- concept explanation
- labelled diagram/process
- rule/law/formula
- compare/contrast
- misconception/refutation
- simulation/video/resource launch
- practice/check-for-understanding
- prediction/reveal
- summary
- exit question

Not every lesson needs every family.

## Visual rhythm and attention management

Avoid long runs of identical compositions.

Do **not** enforce a rigid 7–10-minute attention-span timer.

Instead:

- structure lessons into meaningful segments;
- normally end major segments with a student response, retrieval prompt, prediction, explanation, practice item, diagram interaction, hinge question or observation;
- avoid long teacher-only exposition when a meaningful response can be inserted;
- use visual novelty only when it supports the teaching sequence.

## Grade calibration

### Class 8
- more concrete/familiar visuals
- lower information density
- larger diagrams
- shorter text blocks
- stronger guided cues
- more prediction/reveal and observation-based interaction where useful

### Class 9
- balanced visuals, definitions, applications and equations
- moderate density
- stronger compare/contrast and process reasoning

### Class 10
- slightly higher conceptual/exam-facing density where justified
- more structured formulas, worked examples, synthesis and labelled diagrams
- still avoid textbook-page-style slides

## Diagram standard

Scientific correctness outranks aesthetics.

Verify labels, arrows/directions, polarity, axes/scales, anatomy/structure, circuit connections, ray/wave directions, relative position and units/symbols.

Preferred hierarchy:

1. trusted authoritative/textbook diagram when suitable and legally usable;
2. deterministic custom redraw/code-generated SVG/shape visual based on verified science;
3. AI-generated labelled diagram only with strict scientific verification/redraw.

High-risk ray optics, lens constructions, circuits and anatomy paths should normally be deterministic.

## Image standard

Prefer images that create context, curiosity, comparison or application. Avoid random stock photography that does not teach.

Keep illustration/image style reasonably consistent within one lesson.

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

## Motion / progressive reveal — mandatory planning discipline

Motion is not required on every slide, but dynamic teaching must not disappear during production.

For each relevant segment choose one:

- `STATIC_INTENTIONAL`
- `STAGED_REVEAL`
- `PREDICT_THEN_REVEAL`
- `NATIVE_ANIMATION`
- `INTERACTIVE_NAVIGATION`
- `LIVE_DEMO`
- `SIMULATION`
- `VIDEO/ANIMATION_RESOURCE`

Use motion only when it helps communicate sequence, change, causality, direction, progressive construction or reveal.

Avoid decorative spins/bounces/excessive transitions.

### Compatibility preference

For science-critical progressive construction, staged duplicate-slide states are preferred over fragile native animation when both teach the concept equally well.

Use native PowerPoint animation when it adds clear instructional value and the exact artifact can be playback-tested in Microsoft PowerPoint.

Every important dynamic/interactive element needs a usable static fallback.

## Video / simulation slide

Keep it simple:

- what students should observe/predict;
- launch link/button/QR if needed;
- one or two guiding questions;
- planned duration;
- static fallback reference;
- brief interpretation/check after use.

Use legal source/embed playback rather than unauthorized downloaded excerpts.

CORE must remain teachable if an optional online simulation fails unless classroom reliability has been explicitly confirmed.

## Renderer policy — locked after RT-01

Canonical routing:

`RENDERER_ROUTING.md`

Default route:

**Controlled PptxGenJS → deterministic SVG/shape science visuals → rendered QA → optional Canva controlled-import finishing → verified PPTX + verified PDF.**

### PptxGenJS

Primary controlled authoring/rendering route.

### Canva

Optional finishing/editing environment after controlled PPTX import. Native Canva AI is not the final authority for science-critical wording or diagrams.

### Beautiful.ai

Low-risk layout exploration/prototyping only.

### Hyperagent

Specialist deterministic SVG/equation/interactive/QA work where it adds value.

## Microsoft PowerPoint compatibility

Internal generation success is not enough.

For the exact classroom PPTX, when PowerPoint is available:

- open it in Microsoft PowerPoint;
- confirm there is no repair/recovery warning;
- verify expected editability;
- verify planned reveals, hyperlinks, buttons, media or native animations;
- if the file was normalized/resaved through LibreOffice or another tool, retest those behaviours afterward.

A repair warning means that artifact is not classroom-ready.

See `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`.

## Accessibility and classroom practicality

- Do not rely on color alone for scientific distinctions.
- Avoid cluttered backgrounds.
- Ensure labels remain legible after projection.
- Keep critical information away from slide edges.
- Prefer stable static fallbacks for classroom-critical online resources.
- If a key visual requires zooming to teach, redesign it.

## First-pilot approval rule

Lesson 1 v2 is the master visual/motion prototype.

Before Lessons 2–4 inherit the style:

- Lesson 1 v2 must pass visual-engagement QA;
- exact PPTX must pass PowerPoint compatibility/playback QA;
- PDF/static fallback must pass;
- the user must approve the overall UI/motion direction.

## Final artifact validation

Judge the deck in the actual delivery format, not only in the editor.

Check:

- Bangla rendering;
- font substitution;
- equations/symbols;
- image crops;
- diagram label size;
- links/QR codes;
- media/simulation launch behaviour;
- animation/reveal behaviour where used;
- contrast/readability after export/projection;
- static/offline fallbacks;
- PPTX editability where required;
- Microsoft PowerPoint repair warning status;
- PDF fallback;
- no scientific content drift.

Follow `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md` and `ARTIFACT_PERSISTENCE.md`.
