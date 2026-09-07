# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science
- Chapter: 11 — আলো
- Last updated: 2026-09-07
- Current status: **CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — LESSON_2_V1_SUPERSEDED — LESSON_2_V2_FAILED_USER_VISUAL_REVIEW — HIGH_RISK_VISUAL_PACK_GATE_ACTIVE — LESSON_2_FULL_REBUILD_BLOCKED — LESSON_3_ON_HOLD**

## Durable workflow rules

- renderer route: `RENDERER_ROUTING.md`;
- accuracy enforcement: `ACCURACY_ENFORCEMENT.md`;
- reference-locked visual workflow: `/REFERENCE_LOCKED_VISUAL_PIPELINE.md`;
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

Historical failure record:

`lessons/lesson-02/production/PRODUCTION_QA_V1_2026-09-06.md`

## Lesson 2 v2 — failed user visual review

V2 improved language and several geometry rules, but user visual review found material implementation failures:

- coin/fish physical objects were not recognizably realistic enough;
- apparent-position/context visuals remained too diagrammatic/unclear for the intended classroom presentation;
- mirage/context visual was not acceptable;
- an unexpected blank rendered/exported page appeared;
- the previously approved `High-Risk Visual Pack first` approach had not been turned into a durable hard gate before full deck assembly.

Disposition:

**FAILED_USER_VISUAL_REVIEW — DO NOT USE FOR CLASSROOM**

Any older v2 QA wording that says `INTERNAL_QA_PASS` is superseded.

## Current safeguards

Root/chapter safeguards:

- `/ACCURACY_ENFORCEMENT.md`
- `/REFERENCE_LOCKED_VISUAL_PIPELINE.md`
- `/QUALITY_GATES.md`
- `/CLASSROOM_LANGUAGE_POLICY.md`
- `/VISUAL_ASSET_ROUTING.md`
- `/PHYSICAL_VISUAL_REALISM_POLICY.md`
- `/tools/student_text_lint.py`
- `TERMINOLOGY_LOCK.md`
- `DIAGRAM_CONTRACTS.md`

Durable decisions:

- `/DECISIONS_ADDENDUM_2026-09-07.md` D-040, D-041, D-042

## Current production gate — Lesson 2 High-Risk Visual Pack

Before another full Lesson 2 deck is built, produce and obtain approval for a dedicated pack covering:

1. apparent position / apparent depth;
2. coin visibility after water is added;
3. fish apparent depth;
4. road mirage;
5. critical angle;
6. full internal reflection;
7. optical fibre.

### Visual construction model

- use verified real/open/licensed or Canva/external base assets for recognizable physical objects/context;
- do not use ChatGPT-native image generation by default;
- do not trust generated/stock imagery for science geometry;
- rays, normals, angles, labels, apparent construction and other science-critical topology remain deterministic PptxGenJS/SVG;
- prefer two-panel real/context + schematic layouts when combining realism and exact geometry in one image would be confusing.

### Hard checks before approval

- physical objects recognizable at projection size;
- reference topology/invariants correct;
- Bangla-first labels;
- projector readability;
- no unexpected blank/missing page;
- each visual rendered and inspected individually.

## Next authorized stage

**Build and review Lesson 2 High-Risk Visual Pack only.**

Do not rebuild the full Lesson 2 deck and do not start Lesson 3 until this visual pack is approved.
