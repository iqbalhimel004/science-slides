# Quality Gates

Version: 4.0
Last revised: 2026-09-06
Status: **ACTIVE — POST-PILOT-COMPATIBILITY UPDATE**

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

For concept-heavy segments, the production handoff must also record a dynamic implementation decision where relevant: `STATIC_INTENTIONAL`, `STAGED_REVEAL`, `NATIVE_ANIMATION`, `PREDICT_THEN_REVEAL`, `LIVE_DEMO`, `SIMULATION`, `INTERACTIVE_NAVIGATION`, or `VIDEO/ANIMATION_RESOURCE`.

## G8 — Content freeze

PASS only after G1–G7 are satisfied and there are no unresolved material content changes.

After freeze, design tools may improve layout/styling but must not silently change facts, definitions, formulas, units or meaning.

## G9 — Renderer calibration

RT-01 is complete for the first pilot. Current routing is defined in `RENDERER_ROUTING.md`.

Repeat calibration only if tool behavior materially changes or the user explicitly requests reconsideration.

## G10 — Visual engagement and classroom usability

PASS only if the **actual rendered deck**, not just the storyboard, satisfies all applicable requirements:

- one clear focal point/hierarchy exists where practical
- projected text and labels are readable
- visual density is controlled
- layout variation supports attention without chaos
- visuals serve an instructional purpose
- Bangla/English terminology is consistent
- diagrams remain scientifically correct
- motion/reveal is pedagogically justified
- storyboard-planned progressive construction/reveal is actually implemented or intentionally reclassified with reason
- concept-heavy lessons are not static by accident
- simulation/demo/interactive support is included where it materially improves learning and was planned
- decorative clutter is controlled
- repetitive cards/boxes do not dominate the deck
- hook, prediction, explanation, rule, misconception, practice, simulation and exit states are visually differentiated where appropriate
- the first-pilot master visual direction receives user approval before it is propagated to later lessons

A scientifically correct but materially unattractive, overly utilitarian, or accidentally all-static pilot deck FAILS G10.

## G11 — PowerPoint compatibility, export, playback and offline reliability

PASS only if the exact classroom delivery artifacts are checked.

### Microsoft PowerPoint compatibility

For PPTX delivery:

- exact user-facing PPTX is opened/tested in Microsoft PowerPoint when PowerPoint is available
- no repair/recovery warning appears
- editable text/shapes remain intact where expected
- links/buttons used in class work
- planned reveal/animation/interaction behavior works in PowerPoint
- if LibreOffice or another tool normalized/resaved the PPTX, PowerPoint playback is retested afterward

A PowerPoint repair warning is an automatic G11 FAIL for that artifact.

### Export/playback/offline

Also verify:

- Bangla rendering/line breaks
- equations/symbols
- image crops
- diagram labels
- links/QRs
- media/simulation launch paths
- animation/reveal behavior where used
- static/offline fallback
- verified PDF fallback availability
- no scientific content drift after finishing/export

For fragile progressive explanation, staged duplicate-slide reveal states are preferred over native animation when they provide the same instructional value with greater compatibility.

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
- the approved first-pilot visual/motion system is applied consistently without making every lesson visually identical

## G14 — Artifact persistence / reproducibility

PASS only if the controlled production is durably recoverable under `ARTIFACT_PERSISTENCE.md`:

- current artifact filenames/fingerprints are recorded
- generator/build source or reproducible specification is committed
- deterministic scientific visual sources/specs are retained where needed
- asset provenance is recorded
- export method is recorded
- PowerPoint compatibility result is recorded
- simulation/interactive/link fallback status is recorded

## G15 — Final chapter completion

PASS only when all applicable lesson gates pass, chapter coverage/continuity pass, classroom artifacts are compatible and visually approved, reproducibility is complete, and repository state is updated.

## Optional G16 — Post-class calibration

After teaching, compare estimated vs actual timing and record confusion points, resource failures, compatibility problems and successful visual/interactive elements. Use evidence to improve later versions.

## Canonical production reliability policy

For detailed implementation rules read:

`PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`

This policy was added after the first Lesson 1 pilot revealed both a Microsoft PowerPoint repair warning and an under-implemented visual/animation/simulation layer.
