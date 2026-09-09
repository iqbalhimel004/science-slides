# QA — Lesson 3 Current Production State

Version: Production System v2.1
Date: 2026-09-09
Status: **R3_VALIDATION_PACK_V1_8_PASS_FOR_USER_REVIEW — AWAITING_USER_ACCEPTANCE — FULL_DECK_BLOCKED**

## Identity

- Chapter: Class 8 Science, Chapter 11 — আলো
- Lesson: 3 — উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা
- Class period target: 60 min
- Planned CORE: 42 min
- Planned FLEX: 8 min
- Contingency: 10 min

## Precedence

Current canonical direction:

- Lesson 1 remains completed/user-approved baseline.
- Lesson 2 v0.5 remains accepted for continuation; unresolved delivery/runtime gates remain pending.
- Lesson 3 is active.
- Lesson 4 remains on hold.
- Full Lesson 3 build remains blocked until the user accepts the R3 validation pack.

Read with:

- `/CURRENT_STATE.md`
- `/SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
- `/LESSON_2_FAILURE_REGISTRY_AND_REGRESSION_TESTS.md`
- `/TARGETED_REVISION_SCOPE_LOCK.md`
- `/SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`
- `SEMANTIC_CONTRACTS_V2_1.md`
- `PREBUILD_REGRESSION_CHECKLIST_V2_1.md`
- `VALIDATION_PACK_STRUCTURED_SPEC_V2_1.md`
- `production/LESSON_3_STARTUP_AUDIT_2026-09-09.md`
- `production/LESSON_3_R3_VALIDATION_PACK_V1_8_QA_2026-09-09.md`

## Validation-history correction

The earlier `v0.9` validation pack was rejected by the user because the science diagrams were materially unreliable. It must not be treated as an accepted baseline or evidence of a passed R3 gate.

The R3 visual layer was therefore clean-rebuilt instead of micro-patched.

## Current validation artifact

`Lesson3_R3_Validation_Pack_v1_8_rebuild`

Seven controlled slides:

1. converging/diverging lens action;
2. principal focus and focal length;
3. real vs virtual image convention;
4. magnifying-glass construction;
5. human-eye cross-section;
6. accommodation;
7. myopia/hyperopia correction.

## Current gate summary

| Area | State |
|---|---|
| NCTB scope/source-gap | PASS_WITH_SOURCE_GAP_NOTE |
| Bangla-first student copy | PASS for validation pack |
| deterministic R3 geometry | PASS |
| semantic-contract QA | PASS |
| numeric geometry invariants | PASS |
| `slides_test.py` | PASS — no overflow |
| severe text-overlap diagnostics | PASS — 0 severe warnings |
| individual PPTX rendered-pixel QA | PASS |
| PDF export/render parity QA | PASS at inspected level |
| adversarial student-inference review | PASS |
| exact Microsoft PowerPoint delivery compatibility | PENDING |
| projector/classroom validation | PENDING |
| validation-pack user acceptance | PENDING |
| full Lesson 3 deck | BLOCKED |

## Critical science disposition

### Lens action / focus

- Convex lens: principal-axis-parallel rays converge toward the outgoing-side principal focus.
- Concave lens: rays diverge; dashed backward extensions indicate a virtual principal focus.
- Focal length is shown along the principal axis from optical center `O` to `F`.

### Real vs virtual image

- Real-image position is formed by actual solid rays intersecting.
- Virtual-image position is formed only by dashed backward extensions.
- Dashed construction lines are not real light paths.

### Magnifying glass

- Object is inside focal length, between object-side `F` and `O`.
- Emergent rays diverge.
- Backward extensions meet on the object side.
- Image is virtual, upright and enlarged.

### Human eye

- Pupil is represented as an opening between iris segments.
- Cornea is a distinct curved transparent front surface and provides most initial refraction.
- Crystalline lens fine-tunes focus.
- Aqueous humour is anterior; vitreous humour fills the large posterior cavity.
- Posterior order is retina (inner), choroid, sclera/outer wall in the simplified model.
- Modeled focus lands on the retinal layer.

### Accommodation

- Retina remains fixed.
- Crystalline-lens center remains fixed.
- Near/far states differ by lens curvature/optical power, not lens translation.
- Internal QA specifically caught and corrected an earlier rebuild defect where changing lens width shifted its center; v1.8 locks the center.

### Spectacles

- Myopia correction = concave/diverging lens.
- Hyperopia correction = convex/converging lens.
- Eye interior is shown only as an equivalent converging optical system in the correction schematic.
- No power/diopter calculation is introduced.

## Remaining hard gates before full Lesson 3 build

1. User reviews the internally-passed v1.8 validation pack.
2. Any user correction is handled under `TARGETED_REVISION_SCOPE_LOCK.md`.
3. User accepts the validation visuals.
4. Only then assemble the full Lesson 3 PPTX/PDF.

## Current decision

**PASS_FOR_USER_REVIEW — AWAITING_USER_ACCEPTANCE — NOT_CLASSROOM_READY — FULL_LESSON_3_BUILD_BLOCKED**
