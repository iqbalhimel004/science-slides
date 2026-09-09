# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science
- Chapter: 11 — আলো
- Last updated: 2026-09-09
- Current status: **LESSON_1_BASELINE_APPROVED — LESSON_2_V0_5_USER_ACCEPTED_FOR_CONTINUATION_WITH_DELIVERY_GATES_PENDING — LESSON_3_R3_VALIDATION_V1_8_PASS_FOR_USER_REVIEW — AWAITING_USER_ACCEPTANCE — LESSON_4_ON_HOLD**

## Canonical architecture

- `/SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md` v2.1
- `/TARGETED_REVISION_SCOPE_LOCK.md`
- `/SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`
- `/CURRENT_STATE.md`

## Lesson 1

**COMPLETED / USER-APPROVED BASELINE — PRESERVE**

## Lesson 2 handoff state

Latest accepted-for-continuation artifact:

- `Lesson2_Controlled_Full_v0_5.pptx`
- `Lesson2_Controlled_Full_v0_5.pdf`

QA:

`lessons/lesson-02/production/FULL_LESSON_2_CONTROLLED_BUILD_V0_5_QA_2026-09-08.md`

User disposition:

**`মোটামুটি ঠিক আছে সব` — accepted as sufficient to proceed to Lesson 3.**

Do not claim unresolved runtime gates have passed:

- exact Microsoft PowerPoint opening/playback: pending unless later tested;
- projector/classroom behavior: pending;
- optional network availability: pending;
- post-class timing calibration: pending.

## Lesson 3 — current active work

Topic:

**উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা**

Target timing:

- CORE: 42 min
- FLEX: 8 min
- contingency: 10 min

## Lesson 3 validation history

The earlier `Lesson3_R3_Validation_Pack_v0_9` was **user-rejected** because its science diagrams were materially unreliable. It is not an accepted baseline.

The R3 visual layer was clean-rebuilt rather than patched.

## Current validation artifact

**`Lesson3_R3_Validation_Pack_v1_8_rebuild`**

QA record:

`lessons/lesson-03/production/LESSON_3_R3_VALIDATION_PACK_V1_8_QA_2026-09-09.md`

Internal disposition:

**PASS_FOR_USER_REVIEW — AWAITING_USER_ACCEPTANCE — NOT_CLASSROOM_READY**

Validated visual families:

- converging/diverging lens action;
- principal focus and focal length;
- real vs virtual image;
- magnifying-glass ray construction;
- human-eye cross-section;
- accommodation;
- myopia/hyperopia correction.

Completed internal QA:

- deterministic R3 geometry;
- semantic/numeric geometry checks;
- `slides_test.py` no-overflow PASS;
- zero severe text-overlap diagnostics;
- individual PPTX pixel inspection;
- PDF parity inspection;
- adversarial student-inference review.

Important internal correction: accommodation now locks the crystalline-lens center and varies curvature only, so the slide does not imply lens translation toward/away from the retina.

## Remaining gates

Pending:

- user acceptance of v1.8 validation visuals;
- exact Microsoft PowerPoint opening/playback test;
- projector/classroom behavior;
- post-class timing calibration.

## Hard blocks

- Do not restart Lessons 1 or 2.
- Do not start Lesson 4 yet.
- Do not build the full Lesson 3 controlled PPTX/PDF before user acceptance of the validation pack.
- Any requested correction to v1.8 must follow the targeted-revision scope lock.
