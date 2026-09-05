# Source Issues / Clarifications — Class 8 Science, Chapter 11: আলো

Source baseline: `NCTB-C8-SCI-2026-REV2025-10`

Purpose: preserve textbook wording problems, omissions, simplifications, source conflicts and verified clarifications separately from the chapter analysis and classroom deck. Do not call something a textbook error until verification supports that classification.

## Status vocabulary

- `OBSERVED` — source-internal issue seen, not yet independently checked.
- `PENDING_VERIFICATION` — authoritative science/source check still required.
- `VERIFIED_CLARIFICATION` — source wording is not necessarily false, but classroom clarification is required.
- `VERIFIED_TEXTBOOK_ERROR` — authoritative evidence confirms a factual/technical error.
- `SOURCE_GAP` — expected/declared content is missing from the source body.
- `RESOLVED` — classroom/exam-safe treatment is decided and source evidence recorded.

## Issue register

### SI-11-001 — Spectacles learning outcome has no corresponding chapter body section

- Source location: printed p.108 / PDF p.113, chapter learning outcomes.
- Source statement: learning outcomes include `চশমার কাজ ব্যাখ্যা করতে পারব`.
- Full chapter checked through printed p.118 / PDF p.123.
- Observation: no spectacles-working explanatory subsection was found in the chapter body or exercise pages.
- Classification: `SOURCE_GAP`.
- Verification result: authoritative optics sources verify the general corrective-lens principle, but a matching 2026 NCTB teacher-guide/body subsection resolving the omission was not established in this pass.
- Status: `VERIFIED_SOURCE_GAP / PARTIALLY_RESOLVED`.
- Classroom treatment:
  - preserve that the outcome exists in NCTB;
  - teach only a concise, clearly labelled supplementary spectacles principle if needed: corrective lenses alter the incoming rays so the eye can focus on the retina; diverging lenses correct myopia and converging lenses correct hyperopia;
  - do not present this as wording copied from the NCTB chapter body;
  - do not expand into lens power or detailed eye-defect numericals in CORE.
- Scientific support: OpenStax `Vision Correction` in `SOURCE_MAP.md`.

### SI-11-002 — Refraction wording can sound universal even though normal incidence is an exception to direction change

- Source location: printed p.109 / PDF p.114, introductory refraction explanation; later rules on printed pp.110–111 / PDF pp.115–116.
- Observation: the introductory wording can be read as light necessarily changing direction whenever it enters another transparent medium.
- Internal context: the later chapter explicitly notes that for perpendicular/normal incidence the incidence/refraction angle is zero and the ray direction does not change.
- Scientific verification: Snell's law and standard refraction treatment confirm that at normal incidence the ray remains undeviated even though propagation speed changes between media.
- Classification: `VERIFIED_CLARIFICATION`.
- Status: `RESOLVED`.
- Classroom treatment: state that refraction involves a change in propagation speed on crossing media; an obliquely incident ray generally changes direction, whereas a normally incident ray does not deviate.
- Scientific support: OpenStax refraction sources in `SOURCE_MAP.md`.

### SI-11-003 — Equal incident/emergent-angle statement must not be generalized beyond the stated geometry

- Source location: refraction-rules discussion around printed pp.110–111 / PDF pp.115–116.
- Observation: wording states that after entering another medium and emerging back into the same first medium, the incident and emergent angles are equal.
- Scientific verification: in a rectangular/parallel-sided slab the emergent ray is parallel to the incident ray and the emergent angle equals the incident angle; this is not a universal rule for arbitrary non-parallel interfaces.
- Classification: `VERIFIED_CLARIFICATION / GEOMETRY_DEPENDENT`.
- Status: `RESOLVED`.
- Classroom treatment: bind the equality explicitly to the demonstrated parallel-sided glass-block/slab arrangement; do not state it as a general law for any two interfaces.
- Scientific support: NCERT ray-optics text and NCERT glass-slab laboratory manual in `SOURCE_MAP.md`.

### SI-11-004 — Photographic-camera treatment is film-camera specific and may be mistaken for modern digital-camera operation

- Source location: printed p.115 / PDF p.120.
- Observation: exposure, photographic plate, silver halide, developer, hypo/sodium thiosulphate and negative-image processing are described.
- Scientific verification:
  - developer reduces exposed silver-halide grains to metallic silver;
  - fixer/hypo (thiosulfate) removes undeveloped/unexposed silver halide by converting it to soluble complexes;
  - the remaining silver pattern forms the negative in black-and-white film processing.
- Classification: `CORRECT_BUT_CONTEXT_SPECIFIC`.
- Status: `RESOLVED_WITH_CONTEXT_LABEL`.
- Classroom treatment:
  - explicitly label this as the textbook's photographic/film-camera chemical process;
  - do not imply that modern digital cameras use photographic-plate/silver-halide chemistry;
  - keep chemistry at the textbook's qualitative level.
- Scientific support: Kodak processing documentation and Chemistry LibreTexts in `SOURCE_MAP.md`.

## Current unresolved source question

The only material unresolved curriculum-source question after this pass is whether a matching 2026 NCTB teacher guide or other official companion source explicitly supplies the missing spectacles subsection. The scientific treatment itself is verified; the NCTB body omission remains documented.

## Future issue-record rule

For each issue, preserve four separate layers where applicable:

1. **Textbook/source statement** — what the NCTB source actually says.
2. **Scientific assessment** — correct / simplified / ambiguous / misleading / erroneous / missing.
3. **Verified clarification/correction** — supported by authoritative evidence.
4. **Classroom/exam treatment** — how the deck should teach it while remaining scientifically correct and NCTB-aware.

Every `VERIFIED_TEXTBOOK_ERROR` must include an authoritative verification reference in the chapter source map before final deck freeze.
