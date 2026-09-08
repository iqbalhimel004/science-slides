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

**LESSON_1_BASELINE_APPROVED — LESSON_2_V0_5_USER_ACCEPTED_FOR_CONTINUATION_WITH_DELIVERY_GATES_PENDING — LESSON_2_FAILURE_REGRESSION_REGISTRY_ACTIVE — LESSON_3_START_AUTHORIZED — LESSON_3_PRODUCTION_HANDOFF_READY — LESSON_4_ON_HOLD**

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

The registry converts Lesson 2 failures into explicit F-xxx prevention/regression checks, including:

- incorrect/ambiguous science-critical angle geometry;
- critical-angle vs TIR conflation;
- optical-fibre boundary/topology and label failures;
- context images that do not visibly show the claimed phenomenon;
- comparison visuals that do not communicate what changed/why;
- misleading mirage mechanism;
- terminology drift;
- raster text/geometry coupling;
- editor/metadata QA being mistaken for final pixel QA;
- user becoming the primary defect detector;
- visible teacher/workflow language;
- Bangla typo/label corruption;
- unnecessary repetition;
- uncritical external-AI feedback adoption;
- targeted edits causing collateral regressions;
- non-converging repair loops.

Any applicable regression item left unanswered blocks `INTERNAL_QA_PASS`.

## Lesson 2 durable production lessons

These are mandatory for Lesson 3+:

1. visible slide = student-facing learning surface; teacher narration belongs in notes;
2. R3 science geometry/topology must be controlled/deterministic and semantically tested;
3. final rendered pixels, not metadata/editor view, determine visual PASS/FAIL;
4. every new/materially changed R3 slide must be individually rendered and inspected;
5. a targeted user correction defines a hard edit boundary — follow `TARGETED_REVISION_SCOPE_LOCK.md`;
6. when practical, untouched slides in targeted revisions must remain pixel-identical to the prior artifact;
7. external AI/reviewer feedback is advisory until independently checked against authoritative science/contracts;
8. avoid raster micro-patching as the primary science-authoring route;
9. keep scientific geometry, labels and student-facing copy separate/editable where practical;
10. no visible internal workflow language (`FLEX`, `Lx-Sxx`, QA status, `শিক্ষক বলবেন`, `বোর্ডে বলার মূল কথা`);
11. use Bangla-first classroom wording and projector-readable labels;
12. `slides_test.py`/overflow PASS is not a science PASS; semantic + pixel QA remain mandatory;
13. known Lesson 2 failures must be actively regression-tested before user review.

## Lesson 3 — ACTIVE NEXT WORK

Canonical topic:

**উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা**

Existing planning assets already in GitHub and must be reused/audited rather than recreated from zero:

- `chapters/class-8/science/chapter-11-light/lessons/lesson-03/LESSON_PLAN.md`
- `chapters/class-8/science/chapter-11-light/lessons/lesson-03/STORYBOARD.md`
- `chapters/class-8/science/chapter-11-light/lessons/lesson-03/RESOURCES.md`
- `chapters/class-8/science/chapter-11-light/lessons/lesson-03/QA.md`
- `chapters/class-8/science/chapter-11-light/lessons/lesson-03/SEMANTIC_CONTRACTS_V2_1.md`

Fresh-chat handoff:

`chapters/class-8/science/chapter-11-light/lessons/lesson-03/production/LESSON_3_PRODUCTION_HANDOFF_2026-09-09.md`

Target timing remains:

- CORE: 42 min
- FLEX: 8 min
- contingency: 10 min

## Lesson 3 first-stage gate

Do **not** immediately build the full Lesson 3 deck in a fresh chat.

First:

1. recover/read canonical files;
2. audit existing Lesson 3 plan/storyboard/resources against Production System v2.1 and Lesson 2 failure registry;
3. verify critical NCTB/source-gap wording;
4. create/update exact Bangla-first structured copy/spec;
5. create/review Lesson 3-specific semantic/diagram contracts;
6. create a Lesson 3 prebuild regression checklist referencing applicable F-xxx entries from `LESSON_2_FAILURE_REGISTRY_AND_REGRESSION_TESTS.md`;
7. build a small R3 validation pack containing at least:
   - converging/diverging lens + focus/focal length;
   - real vs virtual image convention;
   - magnifying-glass ray construction;
   - human-eye cross-section;
   - accommodation;
   - myopia/hyperopia corrective-lens concept;
8. automated QA + semantic QA + individual pixel QA + known-failure regression QA;
9. internally repair until PASS;
10. perform adversarial student-inference review + second internal QA;
11. show the user one internally-passed validation pack;
12. only after that user acceptance, build the full Lesson 3 deck.

## Hard blocks

- Do not restart Lessons 1 or 2.
- Do not start Lesson 4 yet.
- Do not treat Canva or generative imagery as scientific authority for R3 visuals.
- Do not expose unfinished R3 visuals to the user before internal semantic/pixel/regression QA.
- Do not call `INTERNAL_QA_PASS` while an applicable Lesson 2 regression item remains unverified.

## Universal stage rule

**Finish -> record -> then continue.**
