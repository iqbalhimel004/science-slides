# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science
- Chapter: 11 — আলো
- Last updated: 2026-09-09
- Current status: **LESSON_1_BASELINE_APPROVED — LESSON_2_V0_5_USER_ACCEPTED_FOR_CONTINUATION_WITH_DELIVERY_GATES_PENDING — LESSON_3_START_AUTHORIZED — LESSON_3_PRODUCTION_HANDOFF_READY — LESSON_4_ON_HOLD**

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

Do not reopen Lesson 2 unless the user requests a targeted correction or classroom evidence reveals a defect.

## Lesson 3 — current active next work

Topic:

**উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা**

Existing planning files to reuse/audit:

- `lessons/lesson-03/LESSON_PLAN.md`
- `lessons/lesson-03/STORYBOARD.md`
- `lessons/lesson-03/RESOURCES.md`
- `lessons/lesson-03/QA.md`

Fresh-chat production handoff:

`lessons/lesson-03/production/LESSON_3_PRODUCTION_HANDOFF_2026-09-09.md`

Planned timing:

- CORE: 42 min
- FLEX: 8 min
- contingency: 10 min

## Lesson 3 first gate

Before full-deck build:

1. audit current Lesson 3 plan/storyboard/resources against Production System v2.1;
2. verify NCTB/source-gap wording and current science;
3. create/update Bangla-first structured copy/spec;
4. add Lesson 3 semantic/diagram contracts where needed;
5. build compact R3 validation pack for:
   - converging/diverging lens + focus/focal length;
   - real vs virtual image;
   - magnifying-glass ray construction;
   - human-eye cross-section;
   - accommodation;
   - myopia/hyperopia correction;
6. run automated + semantic + individual pixel QA internally;
7. show one internally-passed pack for user acceptance;
8. only then build full Lesson 3 controlled PPTX/PDF.

## Mandatory carry-forward lessons from Lesson 2

- visible slide = student-facing learning surface;
- teacher narration belongs in notes;
- R3 science visuals must be controlled/deterministic;
- final rendered pixels determine visual PASS/FAIL;
- targeted user revisions are hard scope locks;
- external AI/reviewer feedback is advisory until independently verified;
- no collateral redesign during targeted fixes;
- no visible internal workflow jargon;
- Bangla-first and projector-readable labels;
- `slides_test.py` PASS never substitutes for science/pixel QA.

## Hard blocks

- Do not restart Lessons 1 or 2.
- Do not start Lesson 4 yet.
- Do not build the full Lesson 3 deck before the R3 validation stage is internally passed and user-accepted.
