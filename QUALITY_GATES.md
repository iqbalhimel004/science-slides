# Quality Gates

Version: 4.1
Last revised: 2026-09-07
Status: **ACTIVE — ACCURACY-ENFORCEMENT UPDATE**

A lesson or chapter advances only when every applicable gate passes. Rendering, overflow checks or visual attractiveness alone are never sufficient evidence of science correctness.

## G0 — Input integrity

PASS only if:

- complete chapter/source material is supplied;
- page/screenshot order is known;
- text, equations, tables and diagrams are readable enough to analyze;
- text-layer status is classified;
- missing/cropped material is resolved or documented.

## G1 — Curriculum and scope

PASS only if:

- lesson content maps to the supplied chapter and intended class level;
- important learning outcomes/subsections are represented;
- unnecessary depth is controlled;
- prerequisites are identified.

## G2 — Source verification

PASS only if:

- key definitions are source-traceable;
- important laws/formulas/units are verified;
- exam-sensitive wording prioritizes authoritative syllabus sources;
- critical extracted wording is checked against the visible source page when reliability is uncertain;
- source conflicts are resolved or explicitly flagged.

## G3 — Scientific accuracy

PASS only if:

- concepts are scientifically correct;
- diagrams/process directions/labels are correct;
- formulas and units are correct;
- worked calculations are checked;
- simplifications do not become materially false;
- misleading wording/visuals are removed.

### G3A — Student-facing copy and terminology lock

For technical science lessons, PASS only if:

- exact visible copy is frozen in `production/SLIDE_COPY_V*.md` before final rendering;
- questions/explanations are standalone-readable, not fragmentary shorthand;
- chapter `TERMINOLOGY_LOCK.md` is followed where present;
- symbols/acronyms are introduced before use;
- Bangla-first policy is followed;
- automated student-text lint passes when programmatic production makes it practical;
- any lint exception is explicitly justified.

A deck with unexplained acronyms, avoidable mixed-language fragments or production-time wording drift FAILS G3A.

### G3B — Diagram-contract and geometry enforcement

For high-risk visuals, PASS only if:

- a chapter/lesson `DIAGRAM_CONTRACTS.md` or equivalent invariant specification exists;
- required rays/labels/positions are present;
- programmatic coordinate/geometry assertions pass where practical;
- each high-risk slide is rendered and inspected individually, not only through a montage;
- the rendered slide is checked against the invariant list.

Examples of high-risk visuals include apparent-image/depth diagrams, critical angle, full internal reflection, lens ray construction, circuits, anatomy, graphs/scales and equation-heavy visual models.

Any missing or wrong invariant is an automatic FAIL even when the slide looks attractive.

## G4 — Realistic 60-minute timing

PASS only if:

- CORE is normally about 40–45 minutes;
- FLEX is normally about 5–10 minutes;
- planned CORE + FLEX is normally about 50–55 minutes;
- 5–10 minutes remains unallocated contingency;
- STRETCH is appendix-only;
- questions, board work, activities, examples, media setup/debrief, transitions and exit check are included;
- FLEX can be dropped without breaking the lesson.

FAIL action: reduce/split/resequence. Do not assume unrealistically fast teaching.

## G5 — Pedagogy and cognitive load

PASS only if:

- learning outcomes are meaningful;
- sequence is logical;
- explanations are age-appropriate;
- prior knowledge is activated;
- major segments normally end with student response;
- checks/misconceptions/practice are present where useful;
- summary and exit check are retained;
- text is not a textbook dump.

## G6 — Resource suitability

PASS only if each external resource is:

- scientifically correct;
- relevant and age-appropriate;
- classroom-usable;
- not excessively long/complex;
- legally/reasonably reusable;
- accompanied by practical fallback if classroom-critical.

## G7 — Storyboard readiness

PASS only if every slide/item has enough specification to render without inventing core science:

- CORE/FLEX/STRETCH segment;
- purpose/content;
- visual purpose/resource need;
- estimated time;
- source reference;
- teacher/student action where relevant;
- equation/source notation where relevant;
- fallback where needed.

For concept-heavy segments, record a dynamic implementation decision where relevant: `STATIC_INTENTIONAL`, `STAGED_REVEAL`, `NATIVE_ANIMATION`, `PREDICT_THEN_REVEAL`, `LIVE_DEMO`, `SIMULATION`, `INTERACTIVE_NAVIGATION`, or `VIDEO/ANIMATION_RESOURCE`.

## G8 — Content freeze

PASS only after G1–G7 are satisfied and there are no unresolved material content changes.

After freeze, design tools may improve layout/styling but must not silently change facts, definitions, formulas, units or meaning.

## G9 — Renderer calibration

RT-01 is complete for the first pilot. Current routing is defined in `RENDERER_ROUTING.md`.

Repeat calibration only if tool behavior materially changes or the user explicitly requests reconsideration.

## G10 — Visual engagement and classroom usability

PASS only if the **actual rendered deck** satisfies applicable requirements:

- one clear focal point/hierarchy exists where practical;
- projected text and labels are readable;
- visual density is controlled;
- layout variation supports attention without chaos;
- visuals serve an instructional purpose;
- terminology is consistent;
- diagrams remain scientifically correct;
- motion/reveal is justified and implemented;
- concept-heavy lessons are not static by accident;
- simulation/demo/interactive support is included where useful and planned;
- decorative clutter/repetitive cards are controlled;
- hook, prediction, explanation, rule, misconception, practice, simulation and exit states are differentiated where appropriate.

A scientifically correct but materially unattractive/overly utilitarian deck fails G10. Conversely, an attractive deck with incorrect geometry fails G3/G3B.

## G11 — PowerPoint compatibility, export, playback and offline reliability

PASS only if the exact classroom delivery artifacts are checked.

### Microsoft PowerPoint compatibility

- exact user-facing PPTX is opened/tested in Microsoft PowerPoint when available;
- no repair/recovery warning appears;
- editable text/shapes remain intact where expected;
- links/buttons work;
- reveal/animation/interaction works;
- after normalization/resave, playback is retested.

A PowerPoint repair warning is an automatic FAIL for that artifact.

### Export/playback/offline

Also verify:

- Bangla rendering/line breaks;
- equations/symbols;
- image crops;
- diagram labels;
- links/QRs;
- media/simulation launch paths;
- static/offline fallback;
- verified PDF fallback;
- no science drift after finishing/export.

## G12 — Chapter-wide coverage

Map every meaningful original subsection to:

- Covered
- Supplementary
- Homework/self-study
- Intentionally omitted with reason

PASS only if nothing important disappeared silently.

## G13 — Cross-lesson continuity and duplication

PASS only if:

- order is coherent;
- prerequisites precede dependent concepts;
- repetition is purposeful recap or removed;
- lessons bridge logically;
- the approved visual/motion system is applied consistently without making every lesson identical.

## G14 — Artifact persistence / reproducibility

PASS only if production is durably recoverable under `ARTIFACT_PERSISTENCE.md`:

- current artifact filenames/fingerprints are recorded;
- generator/build source or reproducible specification is committed;
- deterministic visual sources/specs are retained;
- asset provenance is recorded;
- export method is recorded;
- PowerPoint compatibility result is recorded;
- simulation/interactive/fallback status is recorded;
- copy-lock/lint/diagram-contract artifacts are retained for high-risk lessons.

## G15 — Final chapter completion

PASS only when all applicable lesson gates pass, chapter coverage/continuity pass, classroom artifacts are compatible and visually approved, reproducibility is complete, and repository state is updated.

## Optional G16 — Post-class calibration

After teaching, compare estimated vs actual timing and record confusion points, resource failures, compatibility problems and successful visual/interactive elements.

## Mandatory accuracy workflow

For production details read:

- `ACCURACY_ENFORCEMENT.md`
- `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
- `CLASSROOM_LANGUAGE_POLICY.md`
- active chapter `TERMINOLOGY_LOCK.md` / `DIAGRAM_CONTRACTS.md` when present.

Lesson 2 v1 is the regression example showing why overflow/render/montage checks cannot substitute for copy and geometry enforcement.
