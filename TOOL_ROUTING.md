# Tool Routing Policy

## ChatGPT

Default lead system for:

- chapter intake analysis
- lesson decomposition
- timing architecture
- pedagogy
- storyboard creation
- source reconciliation
- QA
- visual-engagement coordination
- final content-freeze decisions
- GitHub project-state maintenance

## NotebookLM

Use when source-grounded study of uploaded textbook/reference material materially helps. Good uses include:

- chapter extraction
- source-constrained summaries
- concept maps
- study-guide generation
- source Q&A
- cross-checking where a chapter is long or dense

Do not treat NotebookLM output as a replacement for the actual source text.

## Gemini AI Pro

Use selectively as an independent reviewer, not as a duplicate author by default. Good uses include:

- adversarial review of chapter decomposition
- difficult fact/definition checks
- missing-topic detection
- source-conflict review
- misconception detection
- external resource research
- final chapter coverage audit

Verify Gemini findings before accepting them.

## Beautiful.ai

Primary final presentation renderer after content freeze.

Use Beautiful.ai by default for:

- complete lesson-deck assembly
- consistent slide layout across a chapter
- typography and hierarchy
- standard concept/definition/comparison/process slides
- charts and structured diagrams supported reliably by the platform
- chapter-wide theme consistency
- final presentation playback/export

Do not let Beautiful.ai independently change verified scientific meaning, definitions, formulas, units, or source-grounded claims.

## Canva

Canva is a secondary specialist visual-production tool, not the default deck-authoring system.

Use Canva when one or more of the following is true:

1. A custom infographic or visual explainer needs more compositional control than Beautiful.ai provides.
2. A worksheet, handout, poster, printable activity, or classroom reference sheet is needed.
3. A scientific diagram needs careful custom layout, annotation, layering, callouts, or cleanup.
4. A special-purpose slide requires a bespoke composition that Beautiful.ai renders poorly or too generically.
5. A visual asset needs image compositing, background treatment, icon/shape arrangement, or a designed illustration panel before being inserted into the main deck.
6. A cover/title visual or chapter-summary visual materially benefits from Canva's design flexibility.
7. A reusable visual template/asset is being created for later use across multiple decks.

Do not route routine text/concept slides to Canva if Beautiful.ai can render them well. Avoid duplicating the whole deck in both tools unless there is a specific reason.

### Canva handoff rule

If a Canva-created visual or full slide is used in the Beautiful.ai deck:

- preserve the approved scientific wording and meaning
- record the asset/source in the lesson resource record when material
- keep text large enough for classroom projection
- preserve editability where practical
- verify Bangla rendering and labels after export/import
- ensure the visual still passes scientific, accessibility, and projector QA

Canva is never the authority for scientific facts, definitions, laws, formulas, or units.

## Beautiful.ai vs Canva decision rule

Choose the simplest reliable path:

- **Routine classroom deck + consistent chapter presentation:** Beautiful.ai
- **Custom infographic / worksheet / poster / bespoke visual composition:** Canva
- **One difficult slide that Beautiful.ai cannot render well:** Canva for that slide/asset, then return to Beautiful.ai for the deck
- **Custom interactive simulation or advanced dynamic visualization:** Hyperagent, not Canva
- **Existing trusted simulation/video/diagram already fits:** reuse it instead of rebuilding in Canva or Hyperagent

The renderer must serve the teaching objective, not the other way around.

## Hyperagent

Use only for high-value custom assets or advanced interaction, for example:

- custom HTML/JavaScript simulations
- Bangla-specific interactive models
- simplified custom visualizations when existing tools are too complex
- advanced media generation
- short custom animation/video when a suitable existing resource is unavailable

Existing trusted online resources should be searched first.

## External resource preference

For simulations/visualizations, prioritize reputable resources such as PhET, GeoGebra, universities, scientific organizations, and established educational platforms when they fit the curriculum and classroom need.

## Cost/efficiency principle

Use the least expensive/complex tool that can reliably achieve the teaching objective. Do not generate custom media merely because generation is available.

## Tool fallback principle

If a preferred tool cannot reliably perform a task, record the limitation and route the task to the next suitable tool without changing the scientific/content authority chain.
