# Current State

Last updated: 2026-09-09

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Canonical production architecture

**Science Slides Production System v2.1 is ACTIVE and audit-hardened.**

Read first:

- `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
- `LESSON_2_FAILURE_REGISTRY_AND_REGRESSION_TESTS.md`
- `TARGETED_REVISION_SCOPE_LOCK.md`
- `SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`

Core rule:

**Do not reset valid prior work. Continue from the latest valid checkpoint and rebuild only defective/fragile production layers.**

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**LESSON_1_BASELINE_APPROVED — LESSON_2_V0_5_USER_ACCEPTED_FOR_CONTINUATION_WITH_DELIVERY_GATES_PENDING — LESSON_2_FAILURE_REGRESSION_REGISTRY_ACTIVE — LESSON_3_R3_VALIDATION_V1_8_PASS_FOR_USER_REVIEW — AWAITING_USER_ACCEPTANCE — LESSON_4_ON_HOLD**

## Lesson 1

**COMPLETED / USER-APPROVED BASELINE — PRESERVE**

## Lesson 2 final handoff state

Latest artifact family:

- `Lesson2_Controlled_Full_v0_5.pptx`
- `Lesson2_Controlled_Full_v0_5.pdf`

Library:

- `/Science Slides/Lesson2_Controlled_Full_v0_5.pptx`
- `/Science Slides/Lesson2_Controlled_Full_v0_5.pdf`

QA checkpoint:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/FULL_LESSON_2_CONTROLLED_BUILD_V0_5_QA_2026-09-08.md`

User disposition after v0.5:

**`মোটামুটি ঠিক আছে সব` — accepted as sufficient to continue to Lesson 3.**

This is **not** evidence that all delivery/runtime gates passed. Keep these explicit:

- exact Microsoft PowerPoint opening/playback: `DELIVERY_COMPATIBILITY_PENDING` unless tested later;
- actual classroom/projector behavior: pending;
- optional internet availability: pending;
- post-class timing calibration: pending.

Do not reopen Lesson 2 unless the user later requests a targeted correction or classroom evidence reveals a defect.

## Lesson 2 known-failure registry

Canonical regression source:

`LESSON_2_FAILURE_REGISTRY_AND_REGRESSION_TESTS.md`

Status:

**ACTIVE — MANDATORY FOR LESSON 3+ R3 PREBUILD AND PRE-USER-REVIEW QA**

## Lesson 2 durable production lessons

These remain mandatory for Lesson 3+:

1. visible slide = student-facing learning surface; teacher narration belongs in notes;
2. R3 science geometry/topology must be controlled/deterministic and semantically tested;
3. final rendered pixels, not metadata/editor view, determine visual PASS/FAIL;
4. every new/materially changed R3 slide must be individually rendered and inspected;
5. targeted user corrections are hard scope locks;
6. generative imagery is not science authority for R3 visuals;
7. `slides_test.py` PASS does not prove science correctness.

## Lesson 3 — ACTIVE

Topic:

**উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা**

Canonical planning assets:

- `chapters/class-8/science/chapter-11-light/lessons/lesson-03/LESSON_PLAN.md`
- `chapters/class-8/science/chapter-11-light/lessons/lesson-03/STORYBOARD.md`
- `chapters/class-8/science/chapter-11-light/lessons/lesson-03/RESOURCES.md`
- `chapters/class-8/science/chapter-11-light/lessons/lesson-03/QA.md`
- `chapters/class-8/science/chapter-11-light/lessons/lesson-03/SEMANTIC_CONTRACTS_V2_1.md`
- `chapters/class-8/science/chapter-11-light/lessons/lesson-03/VALIDATION_PACK_STRUCTURED_SPEC_V2_1.md`

Target timing remains:

- CORE: 42 min
- FLEX: 8 min
- contingency: 10 min

## Lesson 3 validation-history correction

The earlier `Lesson3_R3_Validation_Pack_v0_9` was rejected by the user because its science diagrams were materially unreliable.

It must not be treated as an accepted baseline or as evidence of a passed R3 gate.

The R3 visual layer was clean-rebuilt rather than micro-patched.

## Lesson 3 current validation checkpoint

Current artifact:

**`Lesson3_R3_Validation_Pack_v1_8_rebuild`**

Internal QA record:

`chapters/class-8/science/chapter-11-light/lessons/lesson-03/production/LESSON_3_R3_VALIDATION_PACK_V1_8_QA_2026-09-09.md`

Current internal disposition:

**PASS_FOR_USER_REVIEW — AWAITING_USER_ACCEPTANCE — NOT_CLASSROOM_READY**

Validation coverage:

- converging/diverging lens action;
- principal focus and focal length;
- real vs virtual image convention;
- magnifying-glass ray construction;
- human-eye cross-section;
- accommodation;
- myopia/hyperopia correction.

QA completed for v1.8:

- deterministic/native/SVG R3 geometry;
- numeric semantic geometry checks;
- `slides_test.py` PASS / no overflow;
- zero severe text-overlap diagnostics;
- individual PPTX rendered-pixel inspection;
- PDF export/render parity inspection;
- adversarial student-inference review.

Important accommodation correction made during internal QA:

- an earlier rebuild changed crystalline-lens center when curvature/width changed;
- v1.8 locks lens center and changes curvature/optical-power representation only;
- retina remains fixed.

## Remaining gates

The following are **not** yet claimed:

- user acceptance of v1.8 validation visuals;
- exact Microsoft PowerPoint opening/playback compatibility;
- real projector/classroom behavior;
- post-class timing calibration.

## Hard blocks

- Do not restart Lessons 1 or 2.
- Do not start Lesson 4 yet.
- Do not build the full Lesson 3 deck before user acceptance of the v1.8 validation pack.
- If the user requests a correction to v1.8, apply `TARGETED_REVISION_SCOPE_LOCK.md` and do not redesign unaffected slides.

## Universal stage rule

**Finish -> record -> then continue.**
