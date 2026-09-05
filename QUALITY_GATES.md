# Quality Gates

Version: 3.0
Last revised: 2026-09-05

A lesson or chapter advances only when the applicable gate passes.

## G0 — Input integrity

PASS only if:

- complete chapter is supplied
- page/screenshot order is known
- text, equations, tables and diagrams are readable enough to analyze
- text-layer status is classified: reliable / partial / scanned-image / screenshots
- missing/cropped material is resolved or explicitly documented

## G1 — Curriculum and scope

PASS only if:

- lesson content maps to the supplied chapter and intended class level
- important textbook learning outcomes/subsections are represented
- unnecessary off-syllabus depth is controlled
- prerequisites are identified

## G2 — Source verification

PASS only if:

- key definitions are source-traceable
- important laws/formulas/units are verified
- exam-sensitive wording prioritizes authoritative syllabus sources
- critical OCR/extracted wording is checked against the visible source page when reliability is uncertain
- source conflicts are resolved or explicitly flagged

## G3 — Scientific accuracy

PASS only if:

- concepts are scientifically correct
- diagrams/process directions/labels are correct
- formulas and units are correct
- worked calculations are checked
- simplifications do not become materially false
- misleading wording/visuals are removed

## G4 — Realistic 60-minute timing

PASS only if:

- CORE is normally about 40–45 minutes
- FLEX is normally about 5–10 minutes
- planned CORE + FLEX is normally about 50–55 minutes
- 5–10 minutes remains unallocated contingency inside the 60-minute class
- STRETCH is appendix-only and not required
- questions, board work, activities, examples, media setup/debrief, transitions and exit check are included in timing
- FLEX can be dropped without breaking the lesson

FAIL action: reduce/split/resequence. Do not assume unrealistically fast teaching.

## G5 — Pedagogy and cognitive load

PASS only if:

- learning outcomes are meaningful
- sequence is logical
- explanations are age-appropriate
- retrieval/prior knowledge is activated
- major segments normally end with a meaningful student response
- hinge/check-for-understanding exists where useful
- misconceptions are addressed where relevant
- guided practice/application exists
- summary and exit check are retained
- text is not a textbook dump

## G6 — Resource suitability

PASS only if each used external resource is:

- scientifically correct
- relevant
- age-appropriate
- classroom-usable
- not excessively long/complex
- legally/reasonably reusable in the intended manner
- accompanied by a practical static/offline fallback if classroom-critical

## G7 — Storyboard readiness

PASS only if every slide/item has enough specification to render without inventing core science:

- CORE/FLEX/STRETCH segment
- purpose
- content
- visual purpose/resource need
- estimated time
- source reference
- teacher/student action where relevant
- equation/source notation where relevant
- fallback where needed

## G8 — Content freeze

PASS only after G1–G7 are satisfied and there are no unresolved material content changes.

After freeze, design tools may improve layout but must not silently change facts, definitions, formulas, units or meaning.

## G9 — Renderer calibration

Before the first final deck, PASS RT-01 for the selected renderer on:

- Bangla conjuncts and mixed Bangla/English
- scientific symbols and notation
- equations/subscripts/superscripts where needed
- diagram labels
- editability
- export fidelity
- projector readability
- workflow practicality

Once a renderer has passed and been recorded in `DECISIONS.md`, repeat only after material tool/workflow changes.

## G10 — Visual engagement and classroom usability

PASS only if:

- one clear focal point/hierarchy exists where practical
- projected text and labels are readable
- visual density is controlled
- layout variation supports attention without chaos
- visuals serve an instructional purpose
- Bangla/English terminology is consistent
- diagrams remain scientifically correct
- motion is pedagogically justified
- decorative clutter is controlled

## G11 — Export/playback/offline reliability

PASS only if the actual delivery artifact is checked for:

- Bangla rendering/line breaks
- equations/symbols
- image crops
- diagram labels
- links/QRs
- media/simulation launch paths
- static/offline fallback
- PDF fallback availability

## G12 — Chapter-wide coverage

Map every meaningful original subsection to:

- Covered
- Supplementary
- Homework/self-study
- Intentionally omitted with reason

PASS only if nothing important disappeared silently.

## G13 — Cross-lesson continuity and duplication

PASS only if:

- order is coherent
- prerequisites precede dependent concepts
- repetition is purposeful recap or removed
- lessons bridge logically

## G14 — Final chapter completion

PASS only when all applicable lesson gates pass, chapter coverage/continuity pass, and repository state is updated.

## Optional G15 — Post-class calibration

After teaching, compare estimated vs actual timing and record confusion points, resource failures and successful elements. Use evidence to improve later versions.
