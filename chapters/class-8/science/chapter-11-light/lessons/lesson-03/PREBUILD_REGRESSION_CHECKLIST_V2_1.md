# Lesson 3 Prebuild Regression Checklist — v2.1

Status: **REQUIRED BEFORE FIRST R3 VALIDATION-PACK BUILD**
Date: 2026-09-09

Canonical known-failure source:

`/LESSON_2_FAILURE_REGISTRY_AND_REGRESSION_TESTS.md`

## Purpose

This checklist operationalizes the Lesson 2 failure registry for Lesson 3. The active production chat must complete the applicable items before calling the first Lesson 3 R3 validation pack internally ready.

## A. Scope / copy / slide-surface checks

- [ ] Exact Bangla-first student copy/spec is frozen for the validation pack before build.
- [ ] Teacher narration/board-work guidance is in notes, not visible slide text. Applies F-011.
- [ ] No visible internal IDs/workflow language such as `FLEX`, `L3-Sxx`, QA labels. Applies F-011.
- [ ] Visible Bangla terminology is consistent with active chapter/lesson locks. Applies F-007.
- [ ] Visible labels are proofread after render. Applies F-012.

## B. Visual-purpose checks

For every validation-pack slide:

- [ ] The basic object/phenomenon is identifiable without long verbal rescue. Applies F-004/F-005.
- [ ] If the slide compares two states, what changed and why are visually evident. Applies F-005.
- [ ] A context image is not accepted merely because it is thematically related; final rendered pixels support the claimed phenomenon. Applies F-004.

## C. R3 geometry / topology checks

### R3-01 — converging/diverging lens + focus/focal length

- [ ] Parallel incident rays are actually parallel to the principal axis where that model is used.
- [ ] Convex/converging emergent rays converge toward the principal focus.
- [ ] Focus lies on the principal axis.
- [ ] Focal-length depiction connects the simplified optical center/lens center to F.
- [ ] Concave/diverging emergent rays diverge; no accidental real focus on the outgoing side.
- [ ] If backward extensions are shown for virtual focus, they are dashed and visually distinct. Applies F-001/F-009.

### R3-02 — real vs virtual image convention

- [ ] Real-image location is formed by actual solid rays converging.
- [ ] Virtual-image location is formed only by dashed backward extensions.
- [ ] Dashed construction lines cannot be mistaken for actual light paths. Applies F-008/F-009.

### R3-03 — magnifying glass

- [ ] Object lies inside focal length.
- [ ] At least two principal-ray constructions are mutually consistent.
- [ ] Outgoing real rays diverge after the convex lens.
- [ ] Dashed backward extensions meet on the object side.
- [ ] Virtual image is erect and enlarged.
- [ ] Arrow directions are correct.
- [ ] Diagram does not imply that a convex lens always magnifies regardless of object position. Applies F-001/F-009.

### R3-04 — human-eye cross-section

- [ ] Cornea, iris, pupil opening, crystalline lens, aqueous humour, vitreous humour, retina, sclera and choroid (if shown) are in defensible relative positions.
- [ ] Pupil is visibly represented as an opening, not a solid black anatomical object.
- [ ] Cornea is not visually treated as merely a decorative cover; its optical role is clear.
- [ ] Simplification/scale does not imply a materially false relationship. Applies model-transparency rule.
- [ ] Labels do not overlap anatomy or each other and remain projector-readable. Applies F-003/F-009.

### R3-05 — accommodation

- [ ] Retina position remains fixed in the simplified near/far comparison.
- [ ] Crystalline-lens shape/optical power changes between states.
- [ ] Diagram does not imply lens translation toward/away from the retina.
- [ ] Near/far state labels match the depicted lens shapes.
- [ ] Cornea/lens focusing hierarchy is not contradicted visually.

### R3-06 — myopia/hyperopia correction

- [ ] Myopia uses diverging/concave corrective lens.
- [ ] Hyperopia uses converging/convex corrective lens.
- [ ] If uncorrected focus positions are shown, myopia/hyperopia placement relative to retina is correct.
- [ ] Corrective ray directions do not accidentally reverse the defect.
- [ ] Spectacles content is clearly supplementary to the NCTB body-text gap.

## D. Rendered-pixel QA

For every new/materially changed R3 slide:

- [ ] Render the actual PPTX slide to PNG.
- [ ] Inspect individually, not montage-only. Applies F-009/F-010.
- [ ] No clipping, broken image, blank region, unreadable Bangla glyph, label collision or misleading ray direction.
- [ ] Meaning is not dependent only on color.
- [ ] Essential labels are readable at classroom/projector scale.

## E. Adversarial student-inference review

For each R3 slide explicitly ask:

- [ ] What wrong science could a student infer from this exact rendered image?
- [ ] Could a construction line be mistaken for a real ray?
- [ ] Could a label/arrow imply the wrong structure, direction or relationship?
- [ ] Is any essential mechanism understandable only because the teacher already knows what the slide means?
- [ ] If yes to any risk, rebuild/clarify before user review.

Applies F-004/F-005/F-010.

## F. External-review discipline

- [ ] Any Gemini/other-reviewer finding is classified as `FACTUAL_ERROR`, `SCIENCE_CLARIFICATION`, `PEDAGOGICAL_OPTION`, or `UNSUPPORTED` before application.
- [ ] Factual/science findings are independently checked against authoritative sources/semantic contracts.
- [ ] User-accepted correct content is not changed merely because another AI prefers a different presentation. Applies F-014.

## G. Repair / revision discipline

- [ ] If one visual materially fails once, repair from controlled source.
- [ ] If the same visual materially fails again, stop micro-patching and clean rebuild.
- [ ] If rebuild still fails or repair becomes non-converging, change representation route. Applies F-016.
- [ ] For later targeted revisions, change only the requested target and compare unaffected rendered slides with the previous artifact where practical. Applies F-015.

## H. Pre-user-review hard gate

Before showing the validation pack to the user, all applicable items above must be checked and the QA record must explicitly answer the 15-question mandatory regression gate in `LESSON_2_FAILURE_REGISTRY_AND_REGRESSION_TESTS.md`.

Status options:

- `NOT_STARTED`
- `IN_PROGRESS`
- `BLOCKED`
- `PASS_FOR_R3_VALIDATION_BUILD`
- `PASS_FOR_USER_REVIEW`

Do not use `PASS_FOR_USER_REVIEW` until semantic science QA, direct individual pixel QA, adversarial review, known-failure regression QA and second internal QA are all complete.
