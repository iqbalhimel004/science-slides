# Lesson 3 Semantic Contracts — Production System v2.1

Status: **ACTIVE — REQUIRED BEFORE R3 INTERNAL_QA_PASS**
Date: 2026-09-09

These contracts supplement the chapter-wide `DIAGRAM_CONTRACTS.md` for Lesson 3 high-risk visuals.

## SC-L3-01 — Converging lens / focus

Required:

- principal axis is visible when the focus relation is taught;
- incident model rays are parallel to the principal axis when demonstrating the principal focus;
- after a convex/converging lens, those rays converge toward the same principal focus in the simplified thin-lens model;
- focus lies on the principal axis;
- focal length is shown from optical center/thin-lens center to focus;
- ray arrows show direction of light travel;
- do not imply every arbitrary ray must pass through focus;
- no lens formula/sign convention/power calculation in CORE.

FAIL if rays converge before the lens, focus is off-axis without reason, arrows reverse, or the drawing implies a false universal rule.

## SC-L3-02 — Diverging lens

Required:

- incident demonstration rays are parallel where the principal-focus idea is used;
- after a concave/diverging lens, real rays spread apart;
- if virtual focus is shown, only dashed backward extensions meet at the virtual focus;
- real outgoing rays must not visibly converge on the outgoing side.

## SC-L3-03 — Real vs virtual image convention

### Real image

- actual solid rays converge at the image location;
- if screen language is used, it is consistent with a real image.

### Virtual image

- actual solid rays do not meet at the perceived image location;
- dashed backward extensions meet at the perceived image location;
- dashed extensions are visually distinguishable from real rays;
- arrowheads are only on real light paths, not on geometric backward extensions unless clearly styled as construction indicators.

## SC-L3-04 — Magnifying glass

Required:

- lens is convex/converging;
- object is placed between the lens and the object-side focal point (`u < f` qualitatively; no formula required);
- at least two consistent principal-ray constructions are shown;
- actual emergent rays diverge on the far side of the lens;
- dashed backward extensions meet on the object side;
- virtual image is erect relative to object;
- virtual image is larger than object;
- labels do not imply the virtual image is physically located where real rays meet;
- no statement that a convex lens always magnifies regardless of object position.

## SC-L3-05 — Human-eye anatomy overview

Simplified cross-section must be anatomically defensible at Class 8 level.

Required positions/relations when shown:

- cornea forms the transparent curved front surface;
- iris lies behind/adjacent to the corneal front region and surrounds the pupil;
- pupil is an opening through the iris, not a solid black body;
- crystalline lens lies behind the iris/pupil region;
- aqueous humour is in the anterior chamber region;
- vitreous humour occupies most of the large internal posterior cavity;
- retina lines the inner posterior region;
- sclera is the tough outer coat;
- choroid lies internal to sclera where included;
- labels point to the intended structure and do not cross so heavily that anatomy becomes ambiguous.

Hard science messaging:

- cornea provides most of the eye's initial refractive focusing;
- crystalline lens fine-tunes focus;
- do not present the crystalline lens as the only refracting/focusing element.

## SC-L3-06 — Accommodation

Required two-state concept:

- retinal position remains fixed in the simplified comparison;
- crystalline-lens shape/curvature changes between near and far viewing states;
- diagram must not imply that the lens translates materially toward/away from retina to focus;
- near/far labels must match the depicted state;
- if ciliary action is mentioned, wording must remain qualitative and scientifically consistent;
- cornea remains the main initial refractive surface; lens changes optical power for fine focus.

## SC-L3-07 — Retinal image/pathway

Required if shown:

- incoming light path is consistent with cornea -> pupil -> crystalline lens -> vitreous -> retina;
- image is focused on retina, not behind or in front of retina in the normal-eye diagram;
- retina is described as light-sensitive receiving tissue, not a film strip storing a photograph;
- any inverted retinal image depiction must be scientifically consistent and not confuse it with the student's final perceived orientation unless explained.

## SC-L3-08 — Myopia correction

If the uncorrected defect is shown:

- distant-object rays focus in front of retina in the simplified myopia diagram.

Correction:

- a diverging/concave lens is placed before the eye;
- corrective lens makes incoming rays less convergent / more divergent before the eye so the eye system focuses them on retina;
- corrected focus lands on retina;
- do not reverse the defect or use a converging corrective lens for myopia.

## SC-L3-09 — Hyperopia correction

If the uncorrected defect is shown:

- in the simplified near-object hyperopia diagram, eye's focusing is insufficient and rays would tend to focus behind retina.

Correction:

- a converging/convex lens is placed before the eye;
- corrective lens increases convergence before the eye so the combined system focuses on retina;
- corrected focus lands on retina;
- do not reverse the defect or use a diverging corrective lens for hyperopia.

## SC-L3-10 — Spectacles scope/disclosure

Because the NCTB chapter opener lists the learning outcome but the explanatory body subsection is absent:

- student-facing deck may teach the concise correction principle;
- teacher notes/source record must mark this as supplementary current-science support for a source gap;
- do not falsely attribute the detailed explanatory wording to the NCTB body;
- no lens-power calculation in CORE.

## SC-L3-11 — Visual surface and accessibility

For every R3 slide:

- critical meaning must not rely on color alone;
- essential labels are projector-readable;
- ray types are differentiated by solid/dashed style and labels, not color only;
- no teacher-script boxes on visible surface;
- no internal IDs/workflow labels visible;
- no overlapping labels that obscure anatomy/rays;
- final rendered PNG must be individually inspected.

## Required QA evidence before validation-pack user review

For each R3 visual family, record:

1. source basis;
2. semantic contract checks;
3. automated overflow/out-of-bounds result;
4. direct rendered-pixel inspection result;
5. any simplification/model disclosure;
6. PASS/FAIL and repair history.

A presence-only checker is insufficient. The relationships above must be visually true in the final render.
