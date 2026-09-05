# Quality Gates

Version: 2.0

A lesson or chapter cannot advance merely because a draft exists. It advances only when the applicable gate passes.

## Gate G0 - Input integrity

PASS only if:

- complete chapter is supplied
- page/screenshot order is known
- required text, equations, tables, and diagrams are readable
- missing/cropped material is resolved or explicitly documented

## Gate G1 - Curriculum and scope

PASS only if:

- lesson content maps to the supplied chapter and intended class level
- no important textbook subsection is accidentally omitted
- unnecessary off-syllabus depth is controlled
- prerequisites are identified

## Gate G2 - Source verification

PASS only if:

- key definitions are source-traceable
- important laws/formulas/units are verified
- exam-sensitive wording prioritizes authoritative syllabus sources
- source conflicts are resolved or explicitly flagged

## Gate G3 - Scientific accuracy

PASS only if:

- concepts are scientifically correct
- diagrams/process directions/labels are correct
- formulas and units are correct
- worked calculations are checked
- simplifications do not become materially false
- misconceptions introduced by wording or visuals are removed

## Gate G4 - Lesson timing

PASS only if:

- planned duration targets 50-55 minutes where practical
- planned duration never exceeds 60 minutes
- questions, activities, examples, simulations, video discussion, and transitions are included in timing
- enough practical classroom buffer remains

FAIL action: reduce/split/resequence the lesson. Do not solve timing failure by assuming unrealistically fast teaching.

## Gate G5 - Pedagogy, clarity, and cognitive load

PASS only if:

- learning outcomes are explicit and meaningful
- concept sequence is logical
- explanations are age-appropriate
- important misconceptions are addressed where relevant
- guided practice/check-for-understanding exists
- slide text is not a textbook dump
- complex material is segmented where needed
- redundant on-screen prose is controlled
- decorative elements do not compete with core teaching content
- attention resets are used where pedagogically useful rather than as empty activity

## Gate G6 - Resource suitability

PASS only if each used external resource is:

- scientifically correct
- relevant to the intended lesson
- age-appropriate
- classroom-usable
- not excessively long/complex for the planned time
- accessible in the intended environment
- accompanied by licensing/usage notes where material
- accompanied by a practical fallback if its failure would materially disrupt core instruction

## Gate G7 - Storyboard readiness

PASS only if every slide/item has enough specification to render without inventing core science:

- purpose
- core content
- visual/resource need
- visual purpose where nontrivial
- estimated time
- source reference
- teacher/student action where relevant
- attention/interaction role where relevant
- fallback for core online/interactive elements where needed

## Gate G8 - Content freeze

PASS only after G1-G7 are satisfied for the lesson and the user/content owner has no unresolved material content changes.

Once frozen, design tools may improve layout and visual treatment but must not silently change scientific facts, definitions, formulas, units, or meaning.

Any meaning-changing edit reopens the relevant content/science/source gates.

## Gate G9 - Visual engagement and UI quality

PASS only if:

- the deck is visually attractive, modern, and age-appropriate
- each slide has a clear focal point and hierarchy
- visual variation is sufficient to avoid monotony without becoming chaotic
- images/illustrations/diagrams have a teaching purpose rather than serving as filler
- subject styling is coherent with the project master identity
- visual signaling helps students follow relationships or sequence
- motion/animation, if used, has a pedagogical purpose
- the deck avoids childish gimmicks, excessive decorative effects, and distracting motion
- grade-level visual density is appropriate

## Gate G10 - Accessibility and projector usability

PASS only if:

- key text and labels are readable from a normal classroom viewing distance
- contrast is strong enough for projection; target approximately 4.5:1 for normal text and 3:1 for large text/important labels where practical
- meaning does not depend on color alone
- Bangla glyphs/conjuncts render correctly
- equations and symbols render correctly
- diagram labels remain legible
- no key visual requires zooming to teach
- critical content stays safely inside slide margins

## Gate G11 - Final artifact/export QA

PASS only after checking the actual classroom delivery format, not just the editor.

Verify as applicable:

- Beautiful.ai playback
- exported PDF/PPTX
- Bangla font substitution
- image crop/position
- equation/symbol integrity
- links
- QR codes
- embedded/linked media
- animation behavior
- simulation/video launch path
- static fallbacks

## Gate G12 - Chapter-wide coverage

After all lessons are built, map the original chapter subsection-by-subsection to:

- Covered
- Supplementary
- Homework/self-study
- Intentionally omitted with reason

PASS only if nothing important disappeared silently during lesson splitting.

## Gate G13 - Cross-lesson continuity and duplication

PASS only if:

- lesson order is coherent
- prerequisites appear before dependent concepts
- repeated content is either necessary recap or removed
- each lesson has a clear bridge from/to adjacent lessons
- visual conventions remain consistent enough that students do not have to relearn the interface each lesson

## Gate G14 - Final chapter completion

PASS only when:

- all lesson gates pass
- chapter coverage audit passes
- duplication/continuity audit passes
- final classroom artifacts are validated
- current project state is updated
- chapter status is recorded as classroom-ready or complete

## Optional Gate G15 - Post-class calibration

After teaching, compare estimated vs actual timing and record classroom observations. Also record which visuals, activities, questions, and resources sustained attention or caused confusion. Use the evidence to improve later versions and the project's timing/design heuristics.
