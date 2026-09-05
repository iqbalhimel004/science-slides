# Tool Routing Policy

Version: 3.0
Last revised: 2026-09-05

## Principle

No tool is the permanent default merely because it is powerful or previously preferred. Route each task to the simplest tool that produces the best verified classroom outcome.

Renderer choices are conditional on real Bangla/science output tests.

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
2. pre-freeze review of difficult scientific claims, misconceptions, exam-wording risk, or missing coverage
3. targeted Deep Research for external resources when normal search is insufficient

Findings must be independently validated before changing canonical state.

## Beautiful.ai

Beautiful.ai is a **candidate full-deck renderer**, not an unconditional permanent default.

Verified workspace capability: the connected Beautiful.ai integration can list/retrieve presentations and templates, create presentations from structured outlines, review outlines, and export supported presentations.

Strengths to evaluate during RT-01:

- fast structured deck assembly
- consistent hierarchy/layout
- template adherence
- standard concept/definition/comparison/process slides
- convenient export/playback workflows

Risks to test:

- Bangla rendering and line breaks
- equations/symbols
- diagram labels
- export fidelity
- editability/workflow friction

Do not let the renderer rewrite verified science, definitions, formulas, units or meaning.

## Canva

Canva is both:

1. a **candidate full-deck renderer**, and
2. a specialist visual-production tool.

Verified workspace capability: the connected Canva integration can generate presentations/designs, use presentation templates/brand templates when available, import supported files, create/edit designs, and export supported designs.

Use Canva when it wins on:

- custom visual composition
- infographics
- worksheets/handouts/posters
- bespoke diagrams/callouts
- difficult visual slides
- reusable visual components
- full visual/diagram-heavy lessons if RT-01 proves better Bangla/export/classroom results than Beautiful.ai

Avoid building the same full deck in both Canva and Beautiful.ai unless doing a deliberate comparison or one renderer is needed for a specific fallback.

## Renderer decision after RT-01

Use the same stress-test content in candidate renderers and compare:

- Bangla conjuncts/mixed Bangla-English
- font size/readability
- scientific symbols, units, subscripts/superscripts/equations
- diagram labels
- visual quality
- editability
- export quality
- projector readability
- workflow time/friction

Then record:

- default standard-deck renderer
- specialist/fallback renderer
- export/fallback format

Do not decide solely from vendor documentation.

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

## Equations and scientific notation

Until the chosen renderer is proven reliable for complex equations/chemistry notation, store the source expression in the storyboard and render complex expressions through a controlled method (for example LaTeX/MathJax → SVG/PNG) when necessary. Verify the final appearance after export.

## Cost/efficiency

Quality outranks token/credit minimization, but avoid:

- duplicate full-model reviews
- unnecessary custom media
- repeated source research
- moving content across tools without a comparative advantage

## Fallback principle

If a preferred tool cannot reliably perform a task, record the limitation and route to the next suitable tool without changing the scientific/source authority chain.
