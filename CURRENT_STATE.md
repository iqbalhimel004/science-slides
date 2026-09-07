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
- Reference-locked visual gate: `REFERENCE_LOCKED_VISUAL_PIPELINE.md`.
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

**CONTENT_STORYBOARD_FROZEN — LESSON_1_BASELINE_APPROVED — LESSON_2_V1_SUPERSEDED — LESSON_2_V2_FAILED_USER_VISUAL_REVIEW — HIGH_RISK_VISUAL_PACK_GATE_ACTIVE — LESSON_2_FULL_REBUILD_BLOCKED — LESSON_3_ON_HOLD**

## Why Lesson 2 v2 is no longer an internal pass

User visual review found that the delivered v2 still failed important classroom-visual requirements:

- coin/fish/context visuals were not recognizably realistic enough;
- several high-risk diagrams remained hard to interpret as physical situations;
- a blank rendered/exported page appeared even though prior page-count/render checks passed;
- the approved `reference-locked hybrid visual + High-Risk Visual Pack first` workflow had not been durably enforced before full deck assembly.

Therefore all earlier wording that calls Lesson 2 v2 `INTERNAL_QA_PASS` is superseded by the current state.

Lesson 2 v2 disposition:

**FAILED_USER_VISUAL_REVIEW — DO_NOT_USE FOR CLASSROOM — REBUILD REQUIRED AFTER HIGH-RISK VISUAL APPROVAL**

## Accuracy and visual safeguards now active

Root:

- `ACCURACY_ENFORCEMENT.md`
- `REFERENCE_LOCKED_VISUAL_PIPELINE.md`
- `QUALITY_GATES.md`
- `CLASSROOM_LANGUAGE_POLICY.md`
- `VISUAL_ASSET_ROUTING.md`
- `PHYSICAL_VISUAL_REALISM_POLICY.md`
- `tools/student_text_lint.py`

Chapter:

- `chapters/class-8/science/chapter-11-light/TERMINOLOGY_LOCK.md`
- `chapters/class-8/science/chapter-11-light/DIAGRAM_CONTRACTS.md`

Durable decisions:

- `DECISIONS_ADDENDUM_2026-09-07.md` D-040, D-041, D-042

## Mandatory production sequence from now on

For a lesson with high-risk science visuals:

1. verify content/storyboard and source basis;
2. freeze exact student-facing copy;
3. follow terminology lock;
4. identify high-risk visual set;
5. lock authoritative/reference topology and invariants for each visual;
6. build a separate High-Risk Visual Pack only;
7. use recognizable real/Canva/external base imagery for physical/context objects where useful;
8. use deterministic PptxGenJS/SVG for rays, normals, angles, labels and scientific topology;
9. run terminology lint + diagram/geometry contracts;
10. render each high-risk visual individually;
11. check expected visual/page manifest and reject blank/missing pages;
12. obtain user visual/science approval of the High-Risk Visual Pack;
13. only then assemble the full lesson deck;
14. run full PowerPoint/PDF/export QA and user smoke test;
15. checkpoint before continuing.

## Lesson 2 high-risk visual set

The next deliverable is **not** the full Lesson 2 deck.

The pre-deck visual pack must cover:

1. apparent position / apparent depth;
2. coin becoming visible after water is added;
3. fish appearing shallower;
4. road mirage / temperature-gradient refraction;
5. critical angle;
6. full internal reflection;
7. optical fibre.

## Visual construction rule for this pack

- physical/context base assets: verified existing real/open/licensed source first, or connected Canva/Canva AI/Canva Pro where generation is needed;
- ChatGPT-native image generation: not routine/default;
- science-critical layer: deterministic PptxGenJS/SVG only;
- when realism and exact geometry conflict: use a two-panel hybrid (real/context visual + clean schematic) instead of forcing both into one image.

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
3. `REFERENCE_LOCKED_VISUAL_PIPELINE.md`
4. `ACCURACY_ENFORCEMENT.md`
5. `QUALITY_GATES.md`
6. `RENDERER_ROUTING.md`
7. `VISUAL_ASSET_ROUTING.md`
8. `PHYSICAL_VISUAL_REALISM_POLICY.md`
9. `CLASSROOM_LANGUAGE_POLICY.md`
10. active chapter `TERMINOLOGY_LOCK.md`
11. active chapter `DIAGRAM_CONTRACTS.md`
12. active lesson storyboard/resources/copy lock/latest failure or QA record
13. other task-relevant policies

## Next authorized action

**Build and review Lesson 2 High-Risk Visual Pack.**

Do not assemble a new full Lesson 2 deck and do not start Lesson 3 until the High-Risk Visual Pack is approved.
