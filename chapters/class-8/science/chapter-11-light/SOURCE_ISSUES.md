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
- Status: `PENDING_VERIFICATION` against official curriculum/teacher guide or another authoritative NCTB source.
- Classroom treatment: **do not invent a spectacles section** and do not silently mark the outcome as covered until resolved.

### SI-11-002 — Refraction wording can sound universal even though normal incidence is an exception to direction change

- Source location: printed p.109 / PDF p.114, introductory refraction explanation; later rules on printed pp.110–111 / PDF pp.115–116.
- Observation: the introductory wording can be read as light necessarily changing direction whenever it enters another transparent medium.
- Internal context: the later chapter explicitly notes that for perpendicular/normal incidence the incidence/refraction angle is zero and the ray direction does not change.
- Classification: `POTENTIALLY_MISLEADING / INTERNAL_NUANCE`.
- Status: `PENDING_VERIFICATION` for final exam-safe wording.
- Proposed classroom clarification: refraction is associated with a change in speed on entering another medium; an obliquely incident ray generally changes direction, while a normally incident ray does not deviate.

### SI-11-003 — Equal incident/emergent-angle statement must not be generalized beyond the stated geometry

- Source location: refraction-rules discussion around printed pp.110–111 / PDF pp.115–116.
- Observation: wording states that after entering another medium and emerging back into the same first medium, the incident and emergent angles are equal.
- Risk: this equality depends on the interface geometry, notably a parallel-sided slab; it is not a universal result for arbitrary interfaces.
- Classification: `POTENTIALLY_OVERGENERALIZED`.
- Status: `PENDING_VERIFICATION` with authoritative optics source before content freeze.
- Classroom treatment: preserve textbook/exam context but explicitly bind the equality to the demonstrated parallel-sided glass-block/slab arrangement if verification confirms.

### SI-11-004 — Photographic-camera treatment is film-camera specific and may be mistaken for modern digital-camera operation

- Source location: printed p.115 / PDF p.120.
- Observation: exposure, photographic plate, silver halide, developer, hypo/sodium thiosulphate and negative-image processing are described.
- Classification: `CORRECT_BUT_CONTEXT_SPECIFIC` pending chemistry/source verification of exact process wording.
- Status: `PENDING_VERIFICATION`.
- Classroom treatment: label it clearly as the textbook's photographic/film-camera model; do not imply that digital cameras use this chemical process.

## Future issue-record rule

For each issue, preserve four separate layers where applicable:

1. **Textbook/source statement** — what the NCTB source actually says.
2. **Scientific assessment** — correct / simplified / ambiguous / misleading / erroneous / missing.
3. **Verified clarification/correction** — supported by authoritative evidence.
4. **Classroom/exam treatment** — how the deck should teach it while remaining scientifically correct and NCTB-aware.

Every `VERIFIED_TEXTBOOK_ERROR` must include an authoritative verification reference in the chapter source map before final deck freeze.
