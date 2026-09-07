# Current State

Last updated: 2026-09-07

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Durable rules

- NCTB controls syllabus/exam context, not automatic scientific truth.
- Material science is checked against current authoritative sources.
- **Finish -> record -> then continue.**
- Renderer route: `RENDERER_ROUTING.md`.
- Accuracy enforcement: `ACCURACY_ENFORCEMENT.md`.
- PowerPoint smoke testing is a hard compatibility gate.
- Dynamic engagement and attractive classroom UI are hard production gates.
- Simulation selection is multi-source and concept-fit driven.
- Visual asset generation is Canva/external-first with deterministic science overlays.
- Student-facing language is Bangla-first.
- Chapter terminology and high-risk diagram invariants must be locked before build where relevant.
- `ARTIFACT_PERSISTENCE.md` controls reproducibility.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — LESSON_2_V1_SUPERSEDED — ACCURACY_SAFEGUARDS_ACTIVE — LESSON_2_V2_INTERNAL_QA_PASS — USER_POWERPOINT_AND_VISUAL_REVIEW_PENDING — LESSON_3_ON_HOLD**

## Why the workflow changed

Lesson 2 v1 passed overflow/render prototype checks but user review found material language and science-diagram errors. This proved that montage/render checks alone are not enough.

V1 is now explicitly superseded.

Historical failure record:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/PRODUCTION_QA_V1_2026-09-06.md`

## Accuracy safeguards now active

Root:

- `ACCURACY_ENFORCEMENT.md`
- `QUALITY_GATES.md` v4.1
- `CLASSROOM_LANGUAGE_POLICY.md` v1.1
- `tools/student_text_lint.py`

Chapter:

- `chapters/class-8/science/chapter-11-light/TERMINOLOGY_LOCK.md`
- `chapters/class-8/science/chapter-11-light/DIAGRAM_CONTRACTS.md`

Lesson 2:

- `lessons/lesson-02/production/SLIDE_COPY_V2.md`
- `lessons/lesson-02/production/check_l2_geometry_contracts.py`
- `lessons/lesson-02/production/BUILD_SPEC_V2_2026-09-07.md`
- `lessons/lesson-02/production/PRODUCTION_QA_V2_2026-09-07.md`

## Mandatory production sequence from now on

For high-risk science lessons:

1. verify content/storyboard;
2. freeze exact student-facing copy;
3. follow chapter terminology lock;
4. build deterministic high-risk diagrams;
5. run terminology lint;
6. run diagram/geometry contracts;
7. render and inspect high-risk slides individually;
8. run slide overflow/render/export QA;
9. test the exact PPTX in Microsoft PowerPoint when available;
10. checkpoint before continuing.

`INTERNAL_QA_PASS` must not be used unless applicable hard checks above pass.

## Lesson 2 v2 — current artifact

PPTX:
`Class8_Science_Ch11_Lesson2_v2_Bangla_Accurate_PPTX_SAFE.pptx`

SHA-256:
`4136eb757aed1d1992a1238fce48b6fc9ffcca3fed40a7404c2eef38ab845814`

PDF:
`Class8_Science_Ch11_Lesson2_v2_Bangla_Accurate_PPTX_SAFE.pdf`

SHA-256:
`52e3ff2916992a4284749382bbf797794c75309184eb41ae4d1eb898188e6355`

## Lesson 2 v2 QA result

### Copy / terminology

- exact student-facing copy frozen: PASS
- complete readable Bangla questions: PASS
- Bangla-first technical terminology: PASS
- standalone `TIR`: removed
- definition-before-symbol rule: applied
- automated terminology lint: **PASS**

### High-risk diagrams

Focused contracts/checks:

- apparent position: PASS
- backward tracing: PASS
- coin visibility: PASS
- fish apparent depth: PASS
- mirage gradient: PASS
- critical angle: PASS
- full internal reflection: PASS
- three-state comparison: PASS
- optical fibre: PASS

Automated lesson geometry checker:

`DIAGRAM_CONTRACTS_L2_V2: PASS`

Focused rendered high-risk review:

`PASS_WITH_USER_VISUAL_REVIEW_PENDING`

### Technical/export

- LibreOffice normalization: PASS
- `slides_test.py`: PASS — no overflow
- PPTX render: PASS
- PDF export/render: PASS
- PDF pages: 22
- simulation hyperlink relationships present in normalized PPTX

## Visual asset route

No ChatGPT-native image generation was used for Lesson 2 v2.

Science-critical geometry is controlled/deterministic. If a physical/context visual later needs more realism, use verified existing/Canva/external base imagery and keep the science overlay controlled.

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

## New-chat production recovery order

Read:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `ACCURACY_ENFORCEMENT.md`
4. `QUALITY_GATES.md`
5. `RENDERER_ROUTING.md`
6. `VISUAL_ASSET_ROUTING.md`
7. `CLASSROOM_LANGUAGE_POLICY.md`
8. active chapter `TERMINOLOGY_LOCK.md`
9. active chapter `DIAGRAM_CONTRACTS.md`
10. active lesson storyboard/resources/`SLIDE_COPY_V*.md`/latest QA
11. other task-relevant policies

`NEW_CHAT_START.md` contains the full recovery protocol.

## Next authorized action

**User Microsoft PowerPoint + visual review of Lesson 2 v2.**

Do not start Lesson 3 full production until Lesson 2 v2 is approved or revised to approval.
