# Gemini Review Gate B — Raw External Review

Date received: 2026-09-06
Status: RAW_EXTERNAL_REVIEW — NOT CANONICAL UNTIL RECONCILED
Reviewer: Gemini 3.1 Pro / Extended thinking (user-run)
Review mode: Targeted pre-freeze implementation audit

> Important: this file preserves the external review as received. Findings are not automatically accepted. See the separate reconciliation file for independent validation and dispositions.

## 1. Executive verdict

`PASS_WITH_TARGETED_CHANGES`

The slide-level storyboards successfully preserve the Gate-A scientific reconciliations without regressions, maintaining robust guardrails for the normal-incidence exception, mirage gradients, and eye anatomy. However, Lesson 4 is currently overloaded at 54 planned minutes with only 6 minutes of contingency. Attempting to cover film chemistry, a digital-camera comparison, an eye-camera functional table, and a whole-chapter concept map in a single class risks severe cognitive overload and a timing overrun. Targeted compression of the film-vs-digital comparison and merging the concept map into the exit check will safely bring Lesson 4 within acceptable limits before content freeze.

## 2. Gate-A regression check

| Gate-A correction | Current implementation status | Regression? | Exact slide(s) if relevant | Action |
|---|---|---|---|---|
| L1: Phenomenon-first reorder | PRESERVED | No | L1-S06 precedes L1-S09 | None |
| L1: Wave-particle reduced | PRESERVED | No | L1-S03 | None |
| L2: Mirage as gradient | PRESERVED | No | L2-S07 | None |
| L3: Concave lens prerequisite | PRESERVED | No | L3-S01, L3-S02 | None |
| L3: Cornea as primary focusing surface | PRESERVED | No | L3-S09, L3-S10 | None |
| L3: Anatomy organized by function | PRESERVED | No | L3-S08–L3-S11 | None |
| L4: Eye-camera focusing distinction | PRESERVED | No | R4-05 specs | None |
| L4: Film chemistry context-specific | PRESERVED | No | Sequence R4-04 | None |

## 3. Pre-freeze implementation findings

| ID | Severity | Lesson/slide | New finding | Why it matters | Minimal recommended fix | Evidence if scientific |
|---|---|---|---|---|---|---|
| B-01 | HIGH | L4-S08 (Digital Enrichment) | The film-vs-digital comparison risks expanding beyond the 54-minute CORE limit. | Lesson 4 has only 6 minutes of contingency. Extending the digital sensor explanation in CORE will cause an overrun. | Constrain the digital camera mention to a single 1-sentence contrast callout box directly on the film-negative slide. Move digital enrichment to FLEX/STRETCH. | A digital charge-coupled device (CCD) or CMOS sensor records images electronically via pixels, distinguishing it entirely from chemical silver-halide reduction. |
| B-02 | MEDIUM | L2-S09 | The critical angle diagram (`i = C`) explicitly notes "NOT TIR yet" but may omit the partially reflected ray. | At `i = C`, the refracted ray grazes the surface, but partial internal reflection still occurs. Omitting the reflected ray implies zero reflection prior to TIR. | Ensure the diagram specification for L2-S09 explicitly includes the partially reflected ray alongside the grazing refracted ray. | Standard optical physics. |
| B-03 | MEDIUM | L3-S06 | The magnifying glass spec does not explicitly mandate backward dashed extensions for the virtual image. | Students will not understand how a real lens creates a virtual image if the backward geometric construction is absent. | Explicitly require dashed backward ray extensions behind the lens in R3-03 to locate the virtual erect image. | Standard optical physics. |

## 4. Coverage / prerequisite / duplication audit

`NO NEW ISSUE.` All textbook-body items and supplementary bridge concepts are mapped to concrete slides or source-gap treatments. Prerequisite sequencing remains intact.

## 5. Timing and cognitive-load audit

- **Lesson 1:** 50 min planned. Risk: LOW. The pencil demo and basic ray vocabulary provide a solid, appropriately paced foundation.
- **Lesson 2:** 52 min planned. Risk: LOW. The three-state TIR hinge and optical fibre map cleanly.
- **Lesson 3:** 50 min planned. Risk: MEDIUM. Grouped eye anatomy helps, but maintaining a brisk pace through the magnifier construction is critical to avoid drag.
- **Lesson 4:** 54 min planned. Risk: HIGH.
  - Exact likely overrun slide: Film chemistry sequence (`R4-04`) and the separate whole-chapter concept map (`R4-06`).
  - Minimal change needed: Do not treat the whole-chapter concept map as a standalone 5-minute lecture segment. Integrate it directly into the final exit check/synthesis. Limit the digital camera distinction to a 1-sentence banner on the film slide rather than a dedicated slide sequence.

## 6. Visual / diagram / resource risk audit

- Apparent position (L2): The specification strictly distinguishing solid real rays from dashed backward extensions is excellent and must be maintained. Dashed lines represent perceived paths, not actual light.
- Critical angle (L2): Ensure the `i=C` diagram does not erase the partial reflection vector, as that breeds the misconception that reflection only starts at TIR.
- Magnifier (L3): Must show dashed virtual rays converging backwards to form the enlarged image.
- Camera focus (L4): The specification correctly states conventional cameras focus via lens/lens-group translation relative to the sensor, distinguishing it from the eye's accommodation (lens shape change).

## 7. Keep-as-is

- The phenomenon-first restructuring in Lesson 1 (`L1-S06` before `L1-S09`).
- The functional grouping of human eye anatomy in Lesson 3.
- The explicit visual distinction between real rays (solid) and virtual/backward extensions (dashed) across all diagrams.
- The `similar function, not identical structure` guardrail on the eye-camera analogy.

## 8. Final pre-freeze action list

1. Compress the digital camera distinction in Lesson 4 to a single callout banner on the film chemistry slide.
2. Integrate the Lesson 4 whole-chapter concept map into the exit check to recover contingency time.
3. Update the L2-S09 visual specification to explicitly include the partially reflected ray at the critical angle.
4. Update the L3-S06 visual specification to ensure backward dashed extensions are drawn for the magnifier's virtual image.

## 9. Confidence / evidence gaps

Confidence in the pedagogical sequence is high. The primary evidence gap remains the actual drawn ray geometry for all optical systems (refraction, TIR, lenses, magnifier, and camera image formation). Because these diagrams do not yet exist, a rigorous visual QA must occur during rendering to ensure angles, focal points, and dashed-vs-solid lines perfectly match these specifications.
