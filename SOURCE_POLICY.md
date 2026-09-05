# Source and Verification Policy

Version: 3.1
Last revised: 2026-09-05

## Purpose

Keep classroom content aligned with the current NCTB syllabus/exam context while ensuring that the science actually taught is current, correct, traceable and independently verified.

## Authority model

NCTB has two different roles that must not be conflated:

1. **Syllabus/scope authority** — what the class/chapter expects students to encounter, textbook sequence, learning outcomes, terminology and exam-facing context.
2. **Scientific authority** — whether a scientific statement, explanation, diagram, definition, law, formula, unit or process is currently correct.

NCTB is authoritative for role (1), but **not automatically for role (2)**.

The user has explicitly warned that these textbooks may preserve old scientific content across yearly reprints. Therefore a current publication/reprint/revision label must never be treated as evidence that the underlying science was substantively updated unless actual content changes are verified.

## Source hierarchy

### Tier S — Syllabus / exam-context authority

Prefer:

- current NCTB textbook
- official curriculum/syllabus
- official teacher guide, when genuinely matched to the same curriculum/version

Use Tier S for:

- chapter scope
- learning outcomes
- what students are expected to know
- local terminology
- exam-facing wording/context
- identifying gaps, omissions, legacy wording or outdated claims that students may encounter

Tier S does **not** by itself validate scientific truth.

### Tier A — Current authoritative scientific sources

Use these to verify the science that will actually be taught.

Prefer the best available domain-appropriate sources, including:

- peer-reviewed or professional scientific organizations
- recognized universities and high-quality open university textbooks
- major public scientific, health and standards agencies
- authoritative institutional references
- primary literature when necessary for a genuinely current/contested point

Examples may include NASA, NIH, WHO, CDC, NIST, IUPAC, Royal Society of Chemistry, Physics organizations, OpenStax, reputable university materials and equivalent subject-specific authorities.

For important scientific claims, Tier A overrides a materially wrong, outdated or misleading NCTB statement.

### Tier B — Established Bangladeshi education sources

Examples include:

- 10 Minute School
- established academic/educational platforms
- recognized reference materials

Use Tier B for:

- local wording/convention
- teaching ideas
- examples
- student-friendly explanation
- exam-preparation conventions

Tier B does not independently establish scientific truth merely because it is popular.

Avoid unnecessary verbatim copying of proprietary secondary-source wording. Prefer original classroom explanation grounded in verified science.

## Required verification rule

For every material scientific claim that appears in CORE teaching content, especially:

- definitions
- laws
- formulas
- units/constants
- causal explanations
- anatomy/physiology statements
- chemistry processes
- diagrams and labels
- optical/electrical/mechanical relationships
- historically or technologically outdated material

perform an independent current-source check when practical.

For routine stable facts, one strong current authoritative source may be enough. For higher-risk, surprising, outdated-looking, exam-sensitive or conflicting claims, use more than one good source or a stronger primary/professional source.

## Textbook-versus-science conflict rule

When NCTB and current authoritative science differ:

1. record what NCTB actually says and its page/location;
2. classify the issue: outdated / simplified / ambiguous / misleading / factual error / missing content / terminology mismatch;
3. record the current authoritative scientific position and evidence;
4. decide classroom treatment;
5. if exam relevance makes the NCTB wording important, explicitly distinguish:
   - **Textbook/exam wording**
   - **Scientifically correct/current explanation**
6. do not teach a materially false statement merely to mirror the textbook.

Every verified mismatch should be recorded in `SOURCE_ISSUES.md` and supported in `SOURCE_MAP.md` before content freeze.

## Scanned/image-based textbook rule

Do not assume a supplied PDF has a reliable text layer.

At intake classify the source as:

- reliable text layer
- partial/unreliable text layer
- image/scanned pages
- screenshots

OCR/text extraction may assist navigation, but when textbook wording matters the visible page/image is authoritative for **what the textbook says**.

For important textbook statements, source records should note when practical:

- page/image reference
- extraction/OCR status
- whether wording was visually verified against the page
- verifier/date when material

Do not silently trust OCR when Bangla conjuncts, symbols, formula notation or scientific terms look uncertain.

## Definition rule

For important terms:

1. identify the NCTB/exam-facing wording where relevant;
2. verify what the textbook actually says against the visible page when extraction is uncertain;
3. independently verify scientific meaning with current authoritative sources;
4. keep textbook/exam wording distinct from the scientifically precise classroom explanation when they differ materially;
5. do not label model-generated wording as an official textbook definition.

## Formula, law, unit and numerical rule

Important formulas, laws, constants, units and numerical relationships must be independently checked against current authoritative material. Worked calculations must be verified, including units and notation.

If the renderer handles complex mathematical or chemical notation unreliably, preserve the source expression in the storyboard and use a controlled rendering method for the visual artifact.

## Currentness rule

Do not infer scientific currentness from:

- a recent print year
- a recent cover date
- a yearly reprint
- a generic `revised` label

unless the actual scientific content change is evidenced.

For topics where knowledge, technology, health guidance, taxonomy, nomenclature or standards can change, explicitly prefer current authoritative sources.

## External web material

Do not use random blogs, anonymous coaching pages, SEO content or unsourced social posts as scientific authority when better sources exist.

## Citation and traceability record

Capture enough information to recover the evidence:

- source title
- publisher/organization
- class/subject/chapter where relevant
- edition/year when relevant
- page/section/image reference
- URL when external
- access/check date when useful
- supported claim/definition/formula
- OCR/extraction status where relevant
- verification status
- whether the source is being used for syllabus context or scientific validation

## Classroom slide citations

Not every classroom slide needs a visible long citation. Source traceability must exist in GitHub even when the projected slide stays visually clean. Use visible attribution where pedagogically, legally or academically useful.

## Copyright and reuse discipline

Being online does not automatically make content reusable without restriction.

For external images, diagrams, videos, simulations or excerpts:

- record creator/source
- record license/usage restrictions when material
- prefer linking/embedding according to source terms rather than copying restricted material
- do not create unauthorized downloaded video excerpts as a workaround
- use a timestamped source segment or legal embed when appropriate
- provide a static fallback for classroom-critical online media

## Model-use rule

AI models may explain, reorganize, simplify, compare and teach verified material. They must not be the sole authority for important scientific claims when reliable current sources are available.
