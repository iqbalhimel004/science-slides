# Slide Style Guide

Version: 4.0
Last revised: 2026-09-06
Status: **ACTIVE — POST-RT-01**

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

Controlled production is now the default route.

Current production baseline:

- Bangla: `Noto Sans Bengali`
- Latin/scientific notation: `Noto Sans` where needed

Rules:

- titles must be readable from the back of a normal classroom;
- body text and diagram labels must remain projector-legible;
- mixed Bangla/English text must be checked in the actual rendered/exported artifact;
- do not rely on proprietary renderer font packages for final portability;
- final numeric font-size/density baselines remain pilot-calibration items and should be refined from real classroom/projector evidence;
- font files themselves must not be shared/committed as project artifacts.

## Scientific notation

RT-01 showed renderer-specific notation failures are possible.

Operational rule:

- straightforward Unicode such as `°`, `10⁸`, `H₂O`, `CO₂`, `≠` may remain native text only after actual export verification;
- comparison symbols and renderer-sensitive notation must be checked in the final artifact;
- complex equations/chemistry may use controlled LaTeX/MathJax → SVG/PNG fallback;
- preserve source expressions in storyboard/source records.

## Color and contrast

- Use a restrained palette with limited accent colors.
- Aim for strong projection contrast; approximately 4.5:1 normal text and 3:1 large text/important labels where practical.
- Do not rely on color alone to convey category, direction, state, correctness or comparison.
- Avoid pastel-on-pastel combinations for essential text.

## Standard slide families

Reusable patterns may include:

- hook/retrieval opener
- learning outcome where useful
- definition/key term
- concept explanation
- labelled diagram/process
- law/formula
- worked numerical
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
- avoid long teacher-only exposition when a meaningful response can be inserted.

## Grade calibration

### Class 8
- more concrete/familiar visuals
- lower information density
- larger diagrams
- shorter text blocks
- stronger guided cues

### Class 9
- balanced visuals, definitions, applications and equations
- moderate density
- stronger compare/contrast and process reasoning

### Class 10
- slightly higher conceptual/exam-facing density where justified
- more structured formulas, worked examples, synthesis and labelled diagrams
- still avoid textbook-page-style slides

## Definition slide

Where appropriate show:

- term in Bangla + English;
- exam-safe/source-grounded definition;
- separately labelled simple explanation if useful;
- a visual/example only when it improves understanding.

Do not silently blend a simplified explanation into the authoritative definition.

## Equation / numerical slide

Use a predictable structure where applicable:

Problem → Given → Required → Formula → Substitution → Calculation → Answer + unit → Interpretation.

If native text is unreliable, use controlled equation rendering and verify the export visually.

## Diagram standard

Scientific correctness outranks aesthetics.

Verify:

- labels;
- arrows/directions;
- polarity;
- axes/scales;
- anatomy/structure;
- circuit connections;
- ray/wave directions;
- relative position;
- units/symbols.

Preferred hierarchy:

1. trusted authoritative/textbook diagram when suitable and legally usable;
2. deterministic custom redraw/code-generated SVG/shape visual based on verified science;
3. AI-generated labelled diagram only with strict scientific verification/redraw.

High-risk science diagrams such as ray optics, lens constructions, circuits and anatomy paths should normally be deterministic.

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

## Motion and animation

Use motion only when it helps communicate sequence, change, causality, direction, progressive construction or reveal.

Avoid decorative spins/bounces/excessive transitions.

Every important animated/interactive element needs a usable static fallback.

## Video / simulation slide

Keep it simple:

- what students should observe/predict;
- launch link/button/QR if needed;
- one or two guiding questions;
- planned duration;
- static fallback reference.

After the resource, include a brief interpretation/check.

Use legal source/embed playback rather than unauthorized downloaded excerpts.

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

Low-risk layout exploration/prototyping only; not unattended full-deck science production.

### Hyperagent

Specialist deterministic SVG/equation/interactive/QA work where it adds value.

Do not reopen renderer selection unless the user explicitly asks or materially new tool evidence exists.

## Accessibility and classroom practicality

- Do not rely on color alone for scientific distinctions.
- Avoid cluttered backgrounds.
- Ensure labels remain legible after projection.
- Keep critical information away from slide edges.
- Prefer stable static fallbacks for classroom-critical online resources.
- If a key visual requires zooming to teach, redesign it.

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
- animation behaviour where used;
- contrast/readability after export/projection;
- static/offline fallbacks;
- PPTX editability where required;
- PDF fallback;
- no scientific content drift.

Follow `ARTIFACT_PERSISTENCE.md` for reproducibility/source retention.

Detailed visual principles also live in `VISUAL_ENGAGEMENT_SYSTEM.md`.
