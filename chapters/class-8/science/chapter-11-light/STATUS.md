# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science
- Chapter: 11 — আলো
- Last updated: 2026-09-07
- Current status: **CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — LESSON_2_V1_SUPERSEDED — ACCURACY_SAFEGUARDS_ACTIVE — LESSON_2_V2_INTERNAL_QA_PASS — USER_POWERPOINT_AND_VISUAL_REVIEW_PENDING — LESSON_3_ON_HOLD**

## Durable workflow rules

- renderer route: `RENDERER_ROUTING.md`;
- accuracy enforcement: `ACCURACY_ENFORCEMENT.md`;
- student-facing language: `CLASSROOM_LANGUAGE_POLICY.md`;
- chapter terminology lock: `TERMINOLOGY_LOCK.md`;
- high-risk optics invariants: `DIAGRAM_CONTRACTS.md`;
- PowerPoint smoke test: hard gate;
- dynamic engagement/UI: hard gate;
- simulation selection: multi-source, concept-fit driven;
- visual assets: `VISUAL_ASSET_ROUTING.md`, Canva/external-first realistic base + deterministic science overlay;
- physical realism: `PHYSICAL_VISUAL_REALISM_POLICY.md`;
- reproducibility: `ARTIFACT_PERSISTENCE.md`;
- universal stage rule: **Finish -> record -> then continue.**

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

## Lesson 1

Master visual/language/motion/realism baseline approved by user.

## Lesson 2 v1 — superseded

The original v1 build is **not classroom-ready** and must not be used as a reference implementation.

User review identified:

- fragmentary/unclear wording;
- unnecessary English/mixed-language text;
- unexplained standalone `TIR`;
- insufficient apparent-position/fish ray construction;
- critical-angle reflected ray in the wrong medium;
- full-internal-reflection geometry error;
- hinge wording/visual mismatch.

Historical failure record:

`lessons/lesson-02/production/PRODUCTION_QA_V1_2026-09-06.md`

## Accuracy safeguards added after v1

Root/chapter safeguards:

- `/ACCURACY_ENFORCEMENT.md`
- `/QUALITY_GATES.md` v4.1
- `/CLASSROOM_LANGUAGE_POLICY.md` v1.1
- `/tools/student_text_lint.py`
- `TERMINOLOGY_LOCK.md`
- `DIAGRAM_CONTRACTS.md`

Lesson 2 safeguards:

- `lessons/lesson-02/production/SLIDE_COPY_V2.md`
- `lessons/lesson-02/production/check_l2_geometry_contracts.py`
- `lessons/lesson-02/production/BUILD_SPEC_V2_2026-09-07.md`
- `lessons/lesson-02/production/PRODUCTION_QA_V2_2026-09-07.md`

## Lesson 2 v2 — current artifact

PPTX:
`Class8_Science_Ch11_Lesson2_v2_Bangla_Accurate_PPTX_SAFE.pptx`

SHA-256:
`4136eb757aed1d1992a1238fce48b6fc9ffcca3fed40a7404c2eef38ab845814`

PDF:
`Class8_Science_Ch11_Lesson2_v2_Bangla_Accurate_PPTX_SAFE.pdf`

SHA-256:
`52e3ff2916992a4284749382bbf797794c75309184eb41ae4d1eb898188e6355`

## Lesson 2 v2 QA

### Language/copy

- exact visible copy frozen before final build;
- full Bangla questions/instructions;
- no standalone `TIR`;
- Bangla-first terminology;
- proper simulation names are the main allowed English exception;
- automated terminology lint: **PASS**.

### High-risk science diagrams

Focused contract checks passed for:

- apparent position;
- backward ray tracing;
- coin visibility;
- fish apparent depth;
- mirage gradient;
- critical angle;
- full internal reflection;
- three-state comparison;
- optical fibre.

Automated geometry result:

`DIAGRAM_CONTRACTS_L2_V2: PASS`

Focused rendered high-risk slide review: **PASS_WITH_USER_REVIEW_PENDING**.

### Technical

- LibreOffice normalization: PASS
- `slides_test.py`: PASS — no overflow
- PPTX render: PASS
- PDF export/render: PASS
- PDF pages: 22
- simulation hyperlinks present in normalized PPTX

## Remaining hard gate

User should review Lesson 2 v2 in Microsoft PowerPoint and report:

1. repair/recovery warning YES/NO;
2. simulation links working/not working;
3. staged reveal flow;
4. visible Bangla readability;
5. apparent-position/coin/fish/mirage/critical-angle/full-internal-reflection/fibre clarity;
6. any physical/context visual that should be upgraded through Canva/external realistic asset routing;
7. overall acceptance or specific revisions.

## Next authorized stage

**Lesson 2 v2 user PowerPoint + visual review.**

Lesson 3 remains on hold until Lesson 2 v2 is approved or revised to approval.
