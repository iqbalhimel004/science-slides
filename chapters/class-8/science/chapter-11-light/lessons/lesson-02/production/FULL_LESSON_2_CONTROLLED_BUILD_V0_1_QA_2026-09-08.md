# Full Lesson 2 Controlled Build v0.1 QA — 2026-09-08

Status: **INTERNAL_QA_PASS — USER_FINAL_REVIEW_NEXT — CLASSROOM_READY_PENDING**

Production architecture:

- `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md` v2.1;
- `SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`;
- chapter `TERMINOLOGY_LOCK.md` v1.1;
- chapter `DIAGRAM_CONTRACTS.md` v1.1.

## Scope

This checkpoint records the first controlled full Lesson 2 deck after user acceptance of the v0.3 high-risk validation pack.

It does **not** mark the lesson `CLASSROOM_READY` yet. User final review and exact delivery-artifact checks remain pending.

## Artifact identity

Local generated artifacts:

- PPTX: `Lesson2_Controlled_Full_v0_1.pptx`
- PDF: `Lesson2_Controlled_Full_v0_1.pdf`
- render folder: `Lesson2_Controlled_Full_v0_1/`
- montage: `montage_full_v0_1.png`
- semantic report: `Lesson2_Controlled_Full_v0_1_semantic_report.json`

SHA-256:

- PPTX: `eab012473f62a8e2a60db1337f49ef5d4c3ce31c2d22ff6d0520c47ae04f1ef5`
- PDF: `7471e6a385366772e24ebdaf351a310b23d34d4655dc3200ceb22ba8cf320919`
- montage: `497adf486230f8ac4c3c67b9ddfd9d7207d39e8140446203ced1435b753770ba`
- semantic report JSON: `51f0cece5d592966fb6761cc2f2fe556aa991f09b09acf4956740b83ac7e4af5`
- runtime build script: `b40003d397b7179e5e6a08f4cd1914de533ff9a67ab13ff4276b2760aab00407`

Library save target:

- `/Science Slides/Lesson2_Controlled_Full_v0_1.pptx`
- `/Science Slides/Lesson2_Controlled_Full_v0_1.pdf`

## Slide count and sequence

PDF page count: `19`

Deck sequence:

1. lesson title;
2. retrieval questions;
3. retrieval answers;
4. today's learning targets;
5. apparent position;
6. real ray vs dashed construction line;
7. pencil/straw apparent bending;
8. coin visibility after water;
9. fish apparent depth;
10. mirage;
11. increasing incidence angle;
12. critical angle;
13. full internal reflection;
14. three-state classification question;
15. three-state answer;
16. optical fibre;
17. uses;
18. summary + quick check;
19. optional FLEX simulation/practice fallback.

## Build route

- PptxGenJS controlled assembly;
- user-accepted validation pack v0.3 reused for the high-risk validated visual surfaces;
- additional deterministic visuals generated for construction-line explanation, pencil/straw apparent bending, increasing incidence and three-state classification;
- teacher-only directions placed in speaker notes rather than visible slide-script boxes;
- visible slides contain student-facing diagrams, concise information and required labels.

## Automated QA

### Overflow

Command:

`slides_test.py Lesson2_Controlled_Full_v0_1.pptx`

Result:

`PASS — no overflow detected`

### Render

Command:

`render_slides.py Lesson2_Controlled_Full_v0_1.pptx`

Result:

`PASS — 19 PNG slides rendered`

### PDF export

LibreOffice headless PDF export succeeded.

PDF page count:

`19`

## Semantic report

Semantic report status: **PASS**

Recorded assertions:

- uses `ঘন মাধ্যম` / `হালকা মাধ্যম` in current critical-angle/TIR production;
- no visible standalone `TIR` intended;
- teacher-facing prompts moved to notes;
- accepted validation pack v0.3 reused for HRV-01..07;
- increasing-incidence and three-state hinge visuals generated;
- CORE lesson remains offline capable;
- FLEX simulation has static fallback.

## Direct rendered review

Direct rendered montage and selected individual slides were inspected.

Internal result: **PASS FOR USER FINAL REVIEW CANDIDATE**

Confirmed:

- no blank/missing slide in the 19-page output;
- high-risk validation visuals remain present;
- HRV-02 blocked-line-of-sight / refracted-ray contrast is retained;
- HRV-04 mirage context and mechanism remain separated;
- HRV-05 critical-angle construction remains from accepted controlled component;
- HRV-06 TIR construction remains from accepted controlled component;
- HRV-07 optical-fibre boundary-reflection visual remains from accepted controlled component;
- visible teacher-script framing such as `বোর্ডে বলার মূল কথা` is absent;
- visible `Exit check` / standalone `TIR` wording from early draft was removed before this checkpoint;
- `হালকা মাধ্যম` terminology is used on current critical-angle/TIR slides.

## Known delivery limitations

The exact Microsoft PowerPoint opening/playback test is still pending in a real PowerPoint environment.

Actual classroom projector readability and real timing calibration also remain execution-time gates. They must not be silently treated as passed.

## Current disposition

**FULL_LESSON_2_CONTROLLED_BUILD_V0_1_INTERNAL_QA_PASS — USER_FINAL_REVIEW_NEXT**

Do not mark `CLASSROOM_READY` until final user review and required delivery checks pass.
Do not start Lesson 3 until this checkpoint is accepted or revised.
