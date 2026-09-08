# Current State

Last updated: 2026-09-08

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Canonical production architecture

**Science Slides Production System v2.1 is ACTIVE and audit-hardened.**

Read first:

- `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
- `SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`

Core rule:

**Do not reset valid prior work. Continue from the latest valid checkpoint and rebuild only defective/fragile production layers.**

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**LESSON_1_BASELINE_APPROVED — LESSON_2_CONTINUES_WITHOUT_RESET — CONTROLLED_R3_PACK_V0_3_USER_ACCEPTED — FULL_LESSON_2_V0_4_SUPERSEDED_AFTER_USER_IMAGE_ONLY_RESTORE_REQUEST — FULL_LESSON_2_CONTROLLED_BUILD_V0_5_INTERNAL_QA_PASS — USER_FINAL_REVIEW_NEXT — CLASSROOM_READY_PENDING — LESSON_3_ON_HOLD**

## Lesson 1

**COMPLETED / USER-APPROVED BASELINE — PRESERVE**

## Lesson 2 current review candidate

Artifacts:

- `Lesson2_Controlled_Full_v0_5.pptx`
- `Lesson2_Controlled_Full_v0_5.pdf`

QA checkpoint:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/FULL_LESSON_2_CONTROLLED_BUILD_V0_5_QA_2026-09-08.md`

Slide/PDF page count:

`18`

## v0.5 targeted scope

The user explicitly required **image-only** correction.

Changed:

- slide 9 fish apparent-depth visual panel;
- slide 10 mirage visual panels.

Preserved unchanged:

- all surrounding slide text and layout;
- slides 11–12 corrected angle constructions from v0.4;
- all other slides/content/notes/terminology/order.

Rendered SHA comparison confirms:

- slides 1–8: identical to v0.4;
- slide 9: changed;
- slide 10: changed;
- slides 11–18: identical to v0.4.

## QA

- `slides_test.py`: PASS — no overflow;
- render: PASS — 18 PNG slides;
- PDF export: PASS — 18 pages;
- direct rendered inspection of slides 9 and 10 completed;
- angle slides 11 and 12 remain pixel-identical to v0.4.

Library copies:

- `/Science Slides/Lesson2_Controlled_Full_v0_5.pptx`
- `/Science Slides/Lesson2_Controlled_Full_v0_5.pdf`

## Current gate

**USER FINAL REVIEW OF FULL LESSON 2 V0.5 IS NEXT.**

Do not mark Lesson 2 `CLASSROOM_READY` yet.
Do not start Lesson 3 yet.

If the user finds another targeted defect, change only the explicitly requested slide/component and selectively revalidate.

## Execution-time pending gates

- exact Microsoft PowerPoint opening/playback in a real PowerPoint environment;
- actual classroom/projector behavior;
- optional internet availability;
- post-class timing calibration.

## Universal stage rule

**Finish -> record -> then continue.**
