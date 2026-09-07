# Lesson 2 Production QA — v1

Date: 2026-09-06
Lesson: `প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন`
Status: **SUPERSEDED — USER REVIEW FOUND MATERIAL SCIENCE/LANGUAGE FAILURES — DO NOT USE FOR CLASSROOM**

## Historical purpose

This file now records why the original v1 artifact must not be treated as an approved or internally passing lesson.

Original artifacts:

- `Class8_Science_Ch11_Lesson2_ApparentPosition_TIR_PPTX_SAFE.pptx`
- `Class8_Science_Ch11_Lesson2_ApparentPosition_TIR_PPTX_SAFE.pdf`

Original fingerprints:

- PPTX: `157b5f8ae2fb21a26dbf514d42ca149c9079c1fb42502327de841a6c8d250ba5`
- PDF: `ab639041ca653ec3b0de7c645872869cdaec0bd16a2064d333566d66b2f31212`

## User-review failures discovered on 2026-09-07

Material problems included:

1. fragmentary/unclear student-facing Bangla questions;
2. unnecessary English/mixed-language wording;
3. standalone unexplained `TIR` acronym;
4. apparent-position construction using insufficient ray geometry;
5. fish apparent-depth construction using insufficient ray geometry;
6. coin visibility explanation lacking a clear blocked-line-of-sight comparison;
7. critical-angle reflected ray drawn into the wrong medium;
8. full-internal-reflection ray geometry error;
9. hinge wording referred to diagrams that were not actually present on the prompt slide;
10. English terms such as `boundary`, `bending`, `store`, `guide`, `data transmission` appeared despite the Bangla-first policy.

## Root-cause finding

The earlier internal QA over-relied on:

- overflow testing;
- montage-level visual review;
- broad conceptual intent;

and did not enforce:

- exact student-facing copy lock;
- automated terminology lint;
- diagram invariants;
- focused high-risk slide review.

Therefore the earlier `INTERNAL QA PASS` label was incorrect and is retracted.

## Corrective action

The project added:

- `/ACCURACY_ENFORCEMENT.md`
- chapter `TERMINOLOGY_LOCK.md`
- chapter `DIAGRAM_CONTRACTS.md`
- lesson `production/SLIDE_COPY_V2.md`
- root `tools/student_text_lint.py`
- lesson-specific geometry contract checks

Lesson 2 v2 was rebuilt under those safeguards.

## Historical value

Keep v1 only as a regression/failure example. Future chats must not copy its wording or diagrams.
