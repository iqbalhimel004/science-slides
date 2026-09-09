# Lesson 3 R3 Validation Pack v1.8 — Internal QA

Date: 2026-09-09
Lesson: Class 8 Science, Chapter 11 — Lesson 3
Topic: উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা
Artifact: `Lesson3_R3_Validation_Pack_v1_8_rebuild.pptx`

## Disposition

**PASS_FOR_USER_REVIEW — NOT_FULL_DECK_READY — DELIVERY_COMPATIBILITY_PENDING**

This v1.8 pack is a clean rebuild after the user rejected v0.9 because the science diagrams were materially unreliable. v0.9 must not be treated as an accepted baseline.

## What changed after the rejection

- All seven science visuals were rebuilt as deterministic/native/SVG geometry rather than patched raster imagery.
- Convex/concave lens profiles were rebuilt.
- Principal focus/focal length was rebuilt with `f = O -> F` along the principal axis.
- Real/virtual image constructions were rebuilt from thin-lens geometry.
- Magnifying-glass construction was rebuilt with object inside focal length, diverging emergent rays and dashed backward extensions.
- Human-eye topology was rebuilt with pupil as an opening, cornea/iris/lens/anterior chamber and posterior retina/choroid/sclera order.
- Accommodation was rebuilt to keep the retinal position fixed and vary crystalline-lens curvature.
- Myopia/hyperopia correction was rebuilt using concave/diverging and convex/converging corrective lenses respectively.

## Important defect caught during internal QA

The first accommodation rebuild still changed the *center position* of the crystalline lens when its width/curvature changed, because the left edge was anchored. That would visually imply lens translation.

This was caught by a numeric geometry invariant check and fixed in v1.8 by locking the crystalline-lens center and changing only its width/curvature. This is specifically required by the Lesson 3 accommodation guardrail.

## Automated/mechanical QA

- `slides_test.py`: **PASS — no overflow**.
- PptxGenJS helper severe text-overlap warnings: **0**.
- Remaining helper overlap warnings are intentional science-geometry intersections (ray through lens, ray meeting focus, anatomy layers, panel-contained content), individually reviewed against the rendered pixels.
- No out-of-bounds failures.

## Numeric semantic geometry QA

A dedicated local invariant check was executed for v1.8:

- Slide 3 real-image state: `u > f`, `v > 0`, inverted image (`m < 0`) — PASS.
- Slide 3 virtual-image state: `u < f`, `v < 0`, upright enlarged image (`m > 1`) — PASS.
- Slide 4 magnifier: `u < f`, `v < 0`, upright enlarged image (`m > 1`) — PASS.
- Slide 6 accommodation: fixed relative lens center in both panels; near lens more curved/wider — PASS.
- Slide 7 correction lock: myopia = concave/diverging; hyperopia = convex/converging — PASS.

## Individual rendered-pixel QA

Every slide was rendered individually from the actual PPTX and inspected.

### Slide 1 — converging/diverging lens action
PASS.

- incident rays parallel to principal axis;
- convex rays converge to outgoing-side principal focus;
- concave rays diverge;
- dashed backward extensions indicate virtual principal focus only;
- no false real focus for concave lens.

### Slide 2 — principal focus and focal length
PASS.

- focus lies on principal axis;
- focal length shown from optical center `O` to `F` along principal axis;
- no formula/sign convention/power calculation introduced.

### Slide 3 — real vs virtual image convention
PASS.

- real image: actual solid rays intersect at image location;
- virtual image: actual rays diverge and only dashed backward extensions meet;
- virtual image is upright/enlarged in the inside-focus state;
- dashed construction cannot be read as a real light path.

### Slide 4 — magnifying glass
PASS.

- convex lens;
- object lies between object-side `F` and `O`;
- one principal ray is parallel then refracted through far focus;
- one principal ray passes through optical center;
- outgoing rays diverge;
- dashed backward extensions meet on object side;
- image is virtual, upright and enlarged.

### Slide 5 — human eye cross-section
PASS for the declared Class-8 simplified model.

- pupil is shown as the opening between iris segments, not a solid black object;
- cornea is a distinct curved transparent front surface;
- crystalline lens lies behind the iris/pupil region;
- aqueous humour is in the front chamber;
- vitreous humour occupies the large posterior cavity;
- posterior order is retina (inner red), choroid (orange), sclera/outer wall;
- modeled rays bend first at the corneal region and are fine-tuned by the crystalline lens;
- focus point lies on the retinal layer.

### Slide 6 — accommodation
PASS after v1.8 correction.

- eye/retina geometry remains fixed between near/far states;
- crystalline-lens center remains fixed;
- far state uses a less curved/flatter lens;
- near state uses a more curved lens;
- diagram does not imply backward/forward translation of the lens;
- both states focus on the retinal layer.

### Slide 7 — myopia/hyperopia correction
PASS for the declared qualitative supplementary model.

- myopia uses concave/diverging spectacle lens before the eye-equivalent converging system;
- hyperopia uses convex/converging spectacle lens;
- corrected rays focus on retina;
- no numerical lens power/diopter calculation;
- eye interior is explicitly labeled as an equivalent converging optical system so the simplified symbol is not mistaken for the crystalline lens alone.

## PDF parity QA

The v1.8 PPTX was exported to PDF with LibreOffice and the PDF was rendered again page-by-page.

Result: **PASS for visual parity at the inspected level**. No broken Bangla glyphs, clipping, missing shapes, or geometry displacement was observed in the PDF render.

## Adversarial student-inference review

Checked specifically for:

- concave lens appearing to form a real outgoing focus — not present;
- dashed virtual construction being mistaken for a real ray — avoided by line style and copy;
- magnifying glass implying convex lenses always magnify — avoided by explicit inside-focus condition;
- pupil being interpreted as a solid structure — avoided;
- cornea being treated as optically irrelevant — avoided;
- accommodation implying lens translation — fixed in v1.8;
- retina moving between near/far states — not implied;
- myopia/hyperopia corrective lens types being reversed — not present.

## Remaining delivery gates

Not yet claimed:

- exact Microsoft PowerPoint opening/playback compatibility;
- real projector/classroom legibility;
- post-class timing calibration.

Therefore this pack is **not yet CLASSROOM_READY** and the full Lesson 3 deck remains blocked until user acceptance of the validation visuals.

## Current decision

**PASS_FOR_USER_REVIEW — AWAITING_USER_ACCEPTANCE — FULL_LESSON_3_BUILD_BLOCKED**
