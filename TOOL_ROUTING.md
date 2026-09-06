# Tool Routing Policy

Version: 3.2
Last revised: 2026-09-06

## Principle

No tool or simulation provider is the permanent default merely because it is powerful, familiar, or previously preferred. Route each task to the simplest option that produces the best verified classroom outcome.

RT-01 has resolved the first-pilot renderer route: science-critical deck authoring/rendering is controlled, with Canva used as an optional finishing environment rather than as the uncontrolled source of truth.

Simulation routing is separately governed by `SIMULATION_RESOURCE_ROUTING.md`: **multi-source, concept-fit driven, not PhET-only.**

## ChatGPT

Lead system for:

- complete-chapter analysis
- lesson decomposition
- timing architecture
- pedagogy
- storyboard authoring
- source reconciliation
- QA coordination
- final content-freeze decisions
- GitHub project-state maintenance through the connected write-capable GitHub integration available in this workspace

Do not duplicate the same authoring task in Gemini/Hyperagent without a specific review or capability reason.

## NotebookLM

Use conditionally when source-grounded extraction/citations materially help, especially for long chapters or student revision packs.

Good uses:

- source-constrained summaries
- concept maps
- cited source Q&A
- glossary/checklist extraction
- quiz/flashcard/study-guide generation from verified sources

Rules:

- test scanned/image-only PDF behaviour before depending on it
- never treat extracted text/OCR as more authoritative than the visible textbook page
- do not make NotebookLM mandatory when it adds duplicate processing without value

## Gemini AI Pro

Use as an independent reviewer/research layer, not as a second primary author.

Preferred review points:

1. chapter split/decomposition sanity check when the chapter is complex, ambiguous, or produces several lessons
2. targeted pre-freeze implementation audit when a real new risk exists
3. targeted Deep Research for external resources when normal search is insufficient

Findings must be independently validated before changing canonical state.

## Controlled PPTX production — primary route after RT-01

For science-critical classroom decks, the default production route is now:

**PptxGenJS-controlled authoring → deterministic SVG/shape scientific visuals → rendered QA → optional Canva finishing → verified PPTX/PDF delivery.**

Use controlled PPTX authoring for:

- frozen storyboard wording
- Bangla typography/layout control
- ray/optics geometry
- eye/camera/lens diagrams
- equations/chemistry notation requiring deterministic placement
- projector-safe font sizing and visual hierarchy
- final source deck that must not be silently rewritten by an AI renderer

Rules:

- build high-risk scientific visuals deterministically;
- render actual slides and inspect them before classroom-ready status;
- keep PDF as mandatory portable/offline fallback;
- if Canva finishing is used, run post-import QA before export;
- do not let an external renderer rewrite verified science.

## Beautiful.ai

RT-01 result: **not the unattended full-deck renderer for this project.**

Verified strengths:

- fast structured deck assembly
- generally cleaner standard layouts than native Canva generation in RT-01
- editable PPTX export available
- PDF export available
- editor/player accessible

RT-01 failures relevant to this project:

- requested critical-angle diagram was omitted and replaced by text explanation;
- `<`/`>` notation in the TIR stress row exported as escaped text;
- verified wording was rewritten despite exact-text preservation being requested;
- material content drift appeared in critical-angle and film-exposure wording;
- editable export depends on Beautiful.ai font packages for exact typography/portability.

Use Beautiful.ai only for:

- low-risk layout exploration
- visual inspiration
- standard non-critical prototype slides

Any Beautiful.ai-generated wording or diagram used in a final lesson must be reconciled back to the frozen storyboard and independently checked.

## Canva

RT-01 result: **preferred finishing/editing environment after controlled PPTX import; native AI is not the default authoring route.**

### Strong uses

- import controlled PPTX decks
- manual polishing and visual adjustment
- custom visual composition
- infographics
- worksheets/handouts/posters
- bespoke low-risk diagrams/callouts
- presentation hosting/editing
- reusable visual components

### Native-AI limitations found in RT-01

- unrelated template artifacts appeared;
- several body/table/checklist regions were too small for projector-first use;
- critical-angle diagram was visually ambiguous and not deterministic enough;
- generated design emphasized theme decoration over instructional hierarchy.

Therefore:

- do not delegate high-risk labelled scientific diagrams to native Canva generation;
- do not treat native Canva wording as authoritative/frozen content;
- when importing a controlled PPTX, verify that Bangla, notation, diagrams and layout remain intact before delivery/export.

## Hyperagent

Use Hyperagent as a **specialist build/QA/interactive engine**, not merely as a media generator.

Good uses:

- programmatic SVG/scientific visual construction
- equation rendering to SVG/PNG when required
- custom HTML/JavaScript simulations
- Bangla-specific or syllabus-specific interactive visualizations
- link/resource checks
- asset validation
- optional scripted QA for timing tables, links or other deterministic checks
- advanced media only when a real teaching gap remains

Do not use Hyperagent by default for:

- duplicate pedagogy authoring
- decorative AI visuals
- generated labelled scientific diagrams without strict scientific verification/redraw
- generated video when an existing trusted resource or static explanation is sufficient
- classroom-critical early/experimental interactive features without a fallback

## Existing-resource-first policy

For simulations, animations, videos and authoritative visuals, search reputable existing resources first. Custom generation is justified only when the existing option is scientifically unsuitable, too complex, inaccessible, language-inappropriate, or fails a specific teaching objective.

### Simulation provider routing

Do **not** default to PhET merely because it is familiar.

Canonical policy:
`SIMULATION_RESOURCE_ROUTING.md`

Candidate ecosystems may include:

- PhET Interactive Simulations;
- The Physics Classroom Physics Interactives;
- GeoGebra;
- Open Source Physics / ComPADRE;
- reputable university, professional-science, museum, government, or established educational platforms;
- custom Hyperagent/HTML/JS only when existing options fail the objective.

Select per concept using:

- scientific correctness;
- exact concept fit;
- Class 8–10 suitability;
- interaction/measurement quality;
- projector clarity;
- setup/device/login friction;
- licensing/attribution;
- language burden;
- offline/static fallback;
- timing.

Community-created activities require item-level scientific QA.

Do not add two simulations merely for variety. A second resource must serve a distinct instructional role.

## Equations and scientific notation

RT-01 showed that simple Unicode notation can survive in some routes, but renderer-specific failures are possible.

Operational rule:

- straightforward native notation such as `°`, `10⁸`, `H₂O` may remain text only after actual export verification;
- comparison symbols and any renderer-sensitive notation must be checked in the exported file;
- complex equations/chemistry use a controlled LaTeX/MathJax/SVG/PNG fallback when native text is unreliable;
- source expressions remain stored in the storyboard/source record.

## Cost/efficiency

Quality outranks token/credit minimization, but avoid:

- duplicate full-model reviews
- unnecessary custom media
- repeated source research
- moving content across tools without a comparative advantage

## Fallback principle

If a preferred tool cannot reliably perform a task, record the limitation and route to the next suitable tool without changing the scientific/source authority chain.

Current renderer fallback chain:

1. controlled PptxGenJS source deck;
2. optional Canva controlled import for finishing;
3. direct controlled PPTX for classroom delivery;
4. verified PDF fallback for portability/offline use.
