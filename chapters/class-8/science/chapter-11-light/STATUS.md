# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science
- Chapter: 11 — আলো
- Last updated: 2026-09-06
- Current status: **CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — LESSON_2_V1_BUILT_INTERNAL_QA_PASS — USER_REVIEW_PENDING — LESSON_3_ON_HOLD**

## Durable workflow rules

- renderer route: `RENDERER_ROUTING.md` / D-036;
- PowerPoint smoke test: hard gate D-037;
- dynamic engagement/UI: hard gate D-038;
- simulation selection: multi-source, concept-fit driven D-039;
- visual assets: `VISUAL_ASSET_ROUTING.md`, Canva/external-first realistic base + deterministic science overlay;
- student-facing language: `CLASSROOM_LANGUAGE_POLICY.md`;
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

## Lesson 2 v1

Built and internally QA-checked.

Current artifact family:

- `Class8_Science_Ch11_Lesson2_ApparentPosition_TIR_PPTX_SAFE.pptx`
- `Class8_Science_Ch11_Lesson2_ApparentPosition_TIR_PPTX_SAFE.pdf`

Fingerprints:

- PPTX: `157b5f8ae2fb21a26dbf514d42ca149c9079c1fb42502327de841a6c8d250ba5`
- PDF: `ab639041ca653ec3b0de7c645872869cdaec0bd16a2064d333566d66b2f31212`

Durable production records:

- `lessons/lesson-02/production/DYNAMIC_MANIFEST.md`
- `lessons/lesson-02/production/BUILD_SPEC_V1_2026-09-06.md`
- `lessons/lesson-02/production/PRODUCTION_QA_V1_2026-09-06.md`

## Lesson 2 content implemented

- retrieval from Lesson 1;
- actual vs apparent position;
- backward ray tracing;
- stick/pencil, coin and fish examples;
- mirage using gradual atmospheric-gradient model;
- increasing incidence-angle sequence;
- critical angle `r=90°` with reflected ray present;
- two TIR conditions;
- `i<C / i=C / i>C` three-state hinge;
- optical-fibre repeated TIR;
- use cases;
- FLEX simulation links;
- FLEX TIR classification practice.

## Lesson 2 internal QA

- LibreOffice normalization: PASS
- `slides_test.py`: PASS — no overflow
- PPTX render: PASS
- PDF export/render: PASS
- PDF pages: 22
- science-critical geometry: internal PASS at prototype level
- severe unintended text overlap: none remaining

## Visual asset routing result

No ChatGPT-native image generation was used for Lesson 2.

The current build uses controlled schematic/illustrative visuals where exact optical geometry is primary. If user review identifies a physical-object visual as too schematic, the base visual must be replaced through verified existing/Canva-first routing while preserving deterministic PptxGenJS science overlays.

## Remaining gate

User must review Lesson 2 in Microsoft PowerPoint and report:

- repair warning YES/NO;
- simulation links working/not working;
- staged reveal flow;
- Bangla terminology;
- apparent-position/mirage/TIR/fibre visual clarity;
- any visual that should be upgraded to a more realistic Canva/external base asset;
- overall acceptance or specific revisions.

## Next authorized stage

**Lesson 2 user PowerPoint + visual review.**

Lesson 3 remains on hold until Lesson 2 is approved or revised to approval.
