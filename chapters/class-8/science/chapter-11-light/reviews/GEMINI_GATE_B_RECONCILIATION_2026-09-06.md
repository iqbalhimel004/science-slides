# Gemini Review Gate B — Independent Reconciliation

Date: 2026-09-06
Status: RECONCILED — TARGETED CHANGES APPROVED
Chapter: Class 8 Science, Chapter 11 — আলো

External verdict: `PASS_WITH_TARGETED_CHANGES`

Canonical verdict after independent validation:

**ACCEPT WITH TARGETED CHANGES; NO MATERIAL REPLAN REQUIRED.**

Gate B found no Gate-A regression, no missing chapter coverage, no prerequisite break and no cross-lesson duplication problem. One timing/cognitive-load finding is accepted with slide-ID correction, one critical-angle visual finding is partially accepted with tighter physics wording, and the magnifier finding is rejected because the required dashed backward extensions were already explicit in both storyboard and resource specification.

## Independent evidence checked

### OpenStax — Total Internal Reflection

Source:
`https://openstax.org/books/university-physics-volume-3/pages/1-4-total-internal-reflection`

Relevant evidence:

- at the critical angle, the refracted angle is `90°`;
- OpenStax Figure 1.14(b) includes a reflected ray at the same time as the grazing refracted ray;
- for incidence greater than the critical angle, total internal reflection occurs;
- the reflected ray obeys the law of reflection in the progression.

Canonical implication:

- the `i = C` visual should show a reflected ray as well as the grazing refracted ray;
- do **not** label that reflected ray `partial` or assign a reflected fraction in this Class-8 treatment, because that would introduce Fresnel-amplitude detail not needed by the syllabus and Gemini did not source/derive that quantitative characterization.

### OpenStax — Simple Magnifier

Source:
`https://openstax.org/books/university-physics-volume-3/pages/2-7-the-simple-magnifier`

Relevant evidence:

- with the object inside the focal length of a convex lens, the image is virtual, upright and enlarged;
- OpenStax explicitly shows back extensions of the rays forming the virtual image.

Canonical implication:

- dashed backward extensions are scientifically appropriate;
- however, the project already required them before Gate B.

### OpenStax — Camera / digital image recording

Source:
`https://openstax.org/books/university-physics-volume-3/pages/2-6-the-camera`

Relevant evidence:

- historical photographic recording used light-sensitive silver compounds;
- digital imaging records optical information electronically using sensor pixels; the OpenStax discussion uses CCD as the representative example;
- digital image recording is therefore distinct from silver-halide developer/fixer processing.

Canonical implication:

- a one-sentence film-vs-digital contrast is scientifically defensible;
- detailed sensor architecture is unnecessary in CORE.

## Finding dispositions

### B-01 — Lesson 4 density / separate digital comparison + standalone chapter map

**Disposition: ACCEPT WITH TARGETED IMPLEMENTATION CHANGE.**

Gemini's exact slide reference `L4-S08 (Digital Enrichment)` is incorrect. In the canonical storyboard:

- dedicated film-vs-digital comparison is `L4-S11`;
- standalone chapter concept map is `L4-S12`;
- `L4-S08` is the eye-camera shared-function comparison.

The underlying timing concern is valid. The 54-minute planned total left only 6 minutes of contingency and Lesson 4 was the densest lesson.

Validated change:

1. remove the dedicated CORE film-vs-digital slide;
2. keep only a one-sentence digital contrast callout on the film-chemistry slide;
3. move any detailed digital-camera enrichment to STRETCH;
4. merge the chapter concept map into the final synthesis/exit slide rather than a standalone 5-minute segment;
5. rebase Lesson 4 timing after the merge.

Expected revised timing: approximately `42 min CORE + 8 min FLEX = 50 min`, restoring about 10 minutes contingency.

### B-02 — Reflected ray at the critical angle

**Disposition: PARTIAL ACCEPT.**

Accepted:

- the `i = C` panel should explicitly show a reflected ray together with the grazing refracted ray;
- otherwise students may incorrectly infer that reflection begins only after the critical angle.

Not accepted as written:

- Gemini's label `partially reflected ray` is not adopted. The Class-8 storyboard does not need Fresnel power fractions, and the authoritative OpenStax evidence needed here only establishes that the reflected ray should be present in the critical-angle panel.

Validated change:

- update `L2-S09` and `R2-03` to show the reflected ray at `i = C`, without quantifying or labelling its fraction.

### B-03 — Magnifier backward dashed extensions missing

**Disposition: REJECT — ALREADY IMPLEMENTED.**

Gemini missed existing canonical specifications.

`L3-S06` already states:

- outgoing rays diverge;
- their backward extensions meet on the object side;
- the image is virtual, erect and enlarged.

`R3-03` already explicitly requires:

- solid actual rays;
- dashed backward extensions;
- explicit `F` marks;
- object inside focal length.

No content change is required. Final rendered ray geometry remains a later visual-QA item.

## Gate-A regression review

Accepted as accurate:

- L1 phenomenon-first sequence preserved;
- L1 quantum content kept minimal/non-assessed;
- L2 mirage gradient clarification preserved;
- L3 diverging-lens prerequisite preserved;
- L3 cornea/lens focusing roles preserved;
- L3 functional eye grouping preserved;
- L4 eye-camera focusing-mechanism distinction preserved;
- L4 film-camera chemistry remains context-specific.

No Gate-A regression requires repair.

## Coverage / prerequisite / duplication

Gemini reported `NO NEW ISSUE`; independent chapter audit agrees.

- no textbook-body topic is unmapped;
- supplementary additions remain bounded;
- prerequisite order is coherent;
- purposeful retrieval is not material duplication.

## Canonical changes authorized by this reconciliation

1. L2 `STORYBOARD.md`: add reflected ray to `L2-S09` critical-angle visual specification.
2. L2 `RESOURCES.md`: require reflected ray in `R2-03` at `i=C`, without power-fraction language.
3. L4 `STORYBOARD.md`: remove dedicated CORE digital-comparison slide; integrate one-sentence digital contrast into film-chemistry slide; merge chapter concept map into final synthesis/exit; renumber final CORE sequence cleanly; rebase timing to 42 CORE + 8 FLEX = 50 min.
4. L4 `LESSON_PLAN.md`: rebase sequence/timing to revised storyboard.
5. L4 `RESOURCES.md`: make detailed digital camera panel STRETCH only; re-target concept-map resource to integrated final synthesis.
6. `SOURCE_MAP.md`: strengthen S4 visual note that a reflected ray is present at the critical-angle state; use S19 as the authoritative support for the one-sentence digital-recording contrast.
7. `COVERAGE_MATRIX.md`: update any Lesson 4 slide IDs after clean renumbering.
8. Rerun relevant lesson/chapter QA and final G1–G7 checks.

## Remaining visual-build evidence gaps

These do not block storyboard/content freeze but must block final classroom-ready export until checked:

- actual ray geometry after drawing;
- magnifier virtual-image construction after drawing;
- eye anatomy labels and accommodation visual;
- corrective-lens rays;
- camera real/inverted image geometry;
- Bangla/notation rendering;
- projector readability;
- export/static-fallback fidelity.

These belong to RT-01/render/visual/export QA, not another planning review.
