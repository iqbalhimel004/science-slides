# Current State

Last updated: 2026-09-06

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Durable rules

- NCTB controls syllabus/exam context, not automatic scientific truth.
- Material science is checked against current authoritative sources.
- **Finish → record → then continue.**
- External-tool prompts are one self-contained fenced code block for one-click copy (`D-033`).
- Planned Gemini reviews use fresh downloadable single-file bundles (`D-034`).
- Gate B is targeted implementation QA, not a second Gate A (`D-035`).
- RT-01 renderer route is locked by evidence (`D-036`).
- Microsoft PowerPoint smoke testing is a hard compatibility gate (`D-037`).
- Dynamic engagement and attractive classroom UI are hard production gates (`D-038`).
- Simulation selection is multi-source and concept-fit driven, not PhET-only (`D-039`).
- `RENDERER_ROUTING.md` is the canonical renderer-routing record.
- `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md` is the canonical PowerPoint-compatibility + animation/simulation/interactive/UI production policy.
- `SIMULATION_RESOURCE_ROUTING.md` is the canonical simulation/interactive provider-selection policy.
- `ARTIFACT_PERSISTENCE.md` is the canonical controlled-deck reproducibility policy.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical path:
`chapters/class-8/science/chapter-11-light/`

Current status:

**CONTENT_STORYBOARD_FROZEN — RT_01_COMPLETE — LESSON_1_SIMULATION_SELECTION_COMPLETE — LESSON_1_V2_BUILT_AND_INTERNAL_QA_PASS — USER_POWERPOINT_SMOKE_TEST_AND_VISUAL_APPROVAL_PENDING — LESSON_2_ON_HOLD**

## Lesson 1 v2 — current production artifact

Lesson 1 visual-engagement prototype v2 has now been built.

User-facing artifacts:

- `Class8_Science_Ch11_Lesson1_v2_Visual_Engagement_PPTX_SAFE.pptx`
- `Class8_Science_Ch11_Lesson1_v2_Visual_Engagement_PPTX_SAFE.pdf`

Durable source and QA:

- `chapters/class-8/science/chapter-11-light/lessons/lesson-01/production/build_lesson1_v2.js`
- `chapters/class-8/science/chapter-11-light/lessons/lesson-01/production/PRODUCTION_QA_V2_2026-09-06.md`
- `chapters/class-8/science/chapter-11-light/lessons/lesson-01/production/ARTIFACT_MANIFEST_V2_2026-09-06.md`
- `chapters/class-8/science/chapter-11-light/lessons/lesson-01/production/DYNAMIC_MANIFEST.md`
- `chapters/class-8/science/chapter-11-light/lessons/lesson-01/production/SIMULATION_CANDIDATE_COMPARISON_2026-09-06.md`

Fingerprints:

- PPTX: `6b0173457053ba42f5fd1fadbf212f56ec6b8a716a5d4e2d1aee85b695819413`
- PDF: `9af37c18c8ef00693107092b7382cfa4a0651a17995f3d2c7185ee0afc2a6caa`
- build source: `48b47ad6e715dd38eb87ee613541677567c72d7442cd969e91a8e72727e73772`

## Lesson 1 v2 — dynamic/engagement implementation

Implemented:

- predict → reveal hook;
- staged source → object → eye sequence;
- medium-classification prediction/reveal;
- live pencil-water observation slide with static fallback;
- staged ray vocabulary construction;
- reflection/refraction prediction/reveal;
- normal-incidence prediction/reveal;
- rarer→denser and denser→rarer prediction/reveal;
- staged parallel-slab FLEX sequence;
- FLEX simulation launch slide;
- PhET Bending Light primary launch target;
- The Physics Classroom Refraction Interactive alternate;
- deterministic static fallbacks for all science-critical content.

Native PowerPoint animation is intentionally not required for v2. Staged duplicate-slide states are the preferred compatibility-safe reveal mechanism.

## Lesson 1 v2 — visual direction

Compared with v1, v2 now uses:

- dark physics/light visual identity;
- stronger contrast;
- larger ray diagrams;
- prediction slides visually separated from explanation slides;
- less repetitive box-heavy layout;
- more visual rhythm and staged progression;
- simulation/demo support integrated into the actual deck.

Internal rendered/PDF montage inspection passed at prototype level.

## Lesson 1 v2 — QA completed

### Package/render

- `slides_test.py`: PASS — no overflow detected.
- LibreOffice-normalized PPTX created to reduce Microsoft PowerPoint repair risk.
- normalized PPTX rendered successfully.
- render montage visually inspected.

### PDF

- pages: 28;
- encrypted: no;
- openable: yes;
- likely scanned: no;
- rendered PDF visually inspected.

### Science

PASS at prototype level for:

- light-to-eye sequence;
- interface/normal/point-of-incidence vocabulary;
- angles measured from normal;
- normal-incidence exception;
- optical density ≠ mass density;
- rarer→denser toward-normal rule;
- denser→rarer away-from-normal rule;
- parallel-sided slab geometry guardrail.

## Lesson 1 v2 — remaining hard gates

Still pending and mandatory before `CLASSROOM_READY` or Lesson 2 production:

1. user opens the exact v2 PPTX in Microsoft PowerPoint;
2. repair/recovery warning must be absent;
3. user checks Slide Show order of staged reveal states;
4. PhET launch hyperlink should be tested;
5. Physics Classroom alternate hyperlink should be tested;
6. user judges overall UI/color/visual attractiveness;
7. user approves or requests specific revision of the master visual/motion direction.

## Simulation selection — Lesson 1

Comparison complete under the multi-source policy.

Primary:

**PhET — Bending Light**

Secondary alternate:

**The Physics Classroom — Refraction Interactive**

GeoGebra remains a reserve geometry option where a verified applet offers a specific advantage.

This does not make PhET the chapter default. Later lessons will select by concept fit again.

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

Chapter planned CORE + FLEX total: **202 minutes**.

## Renderer route — locked

**Controlled PptxGenJS → deterministic SVG/shape science visuals → rendered QA → optional Canva controlled-import finishing → verified PPTX + verified PDF fallback.**

- PptxGenJS: primary controlled production.
- Canva: optional finishing only if it materially improves polish without science drift.
- Beautiful.ai/native Canva AI: not unattended science-critical full-deck authors.

## What remains for the chapter

1. user tests and reviews Lesson 1 v2;
2. revise v2 only if PowerPoint/UI/motion issues remain;
3. when approved, lock the master visual/motion baseline;
4. produce Lesson 2 using that approved standard and its own concept-fit resource comparison;
5. produce Lessons 3–4;
6. final rendered chapter-wide audit and classroom-ready package.

## New-chat recovery order — current pilot

Read:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
5. `SIMULATION_RESOURCE_ROUTING.md`
6. `ARTIFACT_PERSISTENCE.md`
7. active chapter `STATUS.md`
8. Lesson 1 v2 production QA/source/dynamic manifest if approval is still pending
9. deeper policy files only if required

## Next authorized action

**User PowerPoint smoke test + visual/motion review of Lesson 1 v2.**

Do not start Lesson 2 full production until Lesson 1 v2 is approved or revised to approval.
