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
- `RENDERER_ROUTING.md` is the canonical renderer-routing record.
- `ARTIFACT_PERSISTENCE.md` is the canonical controlled-deck reproducibility policy.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical path:
`chapters/class-8/science/chapter-11-light/`

Current status:

**CONTENT_STORYBOARD_FROZEN — RT_01_COMPLETE — LESSON_1_SCIENCE_COMPATIBILITY_PASS — LESSON_1_DESIGN_ENGAGEMENT_REVISION_REQUIRED — LESSON_2_ON_HOLD**

## Latest user review — material production finding

The repaired Lesson 1 PPTX now opens correctly in Microsoft PowerPoint.

The user then identified two material shortcomings in the actual deck:

1. no meaningful animation/simulation/interactive implementation is present;
2. the UI/design/color system is not attractive enough for the original project objective.

This feedback is accepted as valid.

The current Lesson 1 build is therefore a **science-correct controlled prototype**, not the final classroom-ready visual standard.

Canonical revision plan:

`chapters/class-8/science/chapter-11-light/lessons/lesson-01/DESIGN_ENGAGEMENT_REVISION_2026-09-06.md`

Latest Lesson 1 production QA:

`chapters/class-8/science/chapter-11-light/lessons/lesson-01/PRODUCTION_QA_2026-09-06.md`

## Review / freeze state

- Gemini Gate A: completed + reconciled
- Gemini Gate B: completed + reconciled
- Final pre-freeze QA: `PASS — CONTENT/STORYBOARD FREEZE APPROVED`
- No content unfreeze is required for the design/engagement revision.
- No further Gemini planning review is required unless production introduces a material science/content regression.

## Frozen lesson timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

Chapter planned CORE + FLEX total: **202 minutes**.

## RT-01 final route — LOCKED

Canonical routing file:
`RENDERER_ROUTING.md`

Canonical evidence record:
`chapters/class-8/science/chapter-11-light/RT01_RENDERER_CALIBRATION_2026-09-06.md`

Durable decision:
`DECISIONS.md` → `D-036`

Final verdict:
`RT_01_COMPLETE — CONTROLLED_PPTX_PRIMARY — CANVA_CONTROLLED_IMPORT_FINISHING — DIRECT_PPTX_PDF_FALLBACK`

Primary authoring/rendering: **controlled PptxGenJS**.

Optional finishing: **Canva after controlled PPTX import**, only when it materially improves visual polish without changing verified science.

Beautiful.ai/native Canva AI are not unattended full-deck science authoring routes.

Classroom delivery/fallback: **controlled PPTX + verified PDF**.

## Repository consistency cleanup

Status: complete.

Post-RT-01 stale operational files were refreshed. Current recovery/production authority includes:

- `NEW_CHAT_START.md`
- `AGENTS.md`
- `WORKFLOW.md`
- `PROJECT_MASTER.md`
- `SLIDE_STYLE_GUIDE.md`
- `README.md`
- `CURRICULUM_INDEX.md`
- `RENDERER_ROUTING.md`
- `ARTIFACT_PERSISTENCE.md`

Consistency audit:

`REPOSITORY_CONSISTENCY_AUDIT_2026-09-06.md`

Historical storyboard-stage headers such as `DRAFT`, `PRE_FREEZE`, or `RT-01 pending` do not override current state.

## Lesson 1 production checkpoint

### Science/content

PASS.

Verified:

- deterministic ray/optics diagrams;
- normal-incidence exception;
- optical density ≠ mass density;
- parallel-sided slab geometry;
- controlled Bangla typography;
- no uncontrolled AI-labelled optics diagram.

### PowerPoint compatibility

Initial PPTX triggered Microsoft PowerPoint repair warning.

A normalized/repaired version was generated and the user confirmed it now opens correctly in Microsoft PowerPoint.

Current repaired PPTX fingerprint:

`f5d3d16f724bc5ae2557c008356b28d6482ee0fd0a694c0572cfbb2bfbafe769`

PDF fallback remains valid:

`a85cc0821c73b9074a827968ecb8834aa0c7bd90dbd185ea248fe9f102ab3b6a`

### Design/engagement

**REVISION REQUIRED BEFORE CLASSROOM_READY.**

The first controlled build under-implemented the original project requirements for:

- attractive/high-engagement UI;
- visual rhythm;
- purposeful progressive reveal/animation;
- simulation/interactive support where pedagogically useful.

The storyboard/resource plan already supports these ideas. The production implementation was too static/utilitarian.

Planned v2 targets include:

- progressive reveal for ray construction and comparison slides;
- prediction → reveal patterns;
- optional PhET Bending Light support with static fallback;
- stronger physics visual identity/palette;
- improved hook, hierarchy, cards/callouts, whitespace, illustration/image use;
- optional controlled Canva finishing if it improves polish without changing science.

## Lesson 1 reproducibility exception

Lesson 1 was produced before `ARTIFACT_PERSISTENCE.md` was formalized.

The visual-engagement v2 rebuild should normalize Lesson 1 reproducibility by preserving its generator/build source and exact artifact fingerprints.

## What remains for the chapter

1. rebuild Lesson 1 as visual-engagement prototype v2 with purposeful motion/interaction and stronger UI;
2. user approves the resulting master visual/motion standard;
3. persist Lesson 1 v2 reproducible source + PPTX/PDF QA;
4. Lesson 2 controlled production using the approved visual standard;
5. Lesson 3 controlled production;
6. Lesson 4 controlled production;
7. verify remaining offline/static fallbacks;
8. final rendered chapter-wide continuity/coverage audit;
9. finalize classroom-ready package and reusable visual baselines.

## New-chat recovery order — current pilot

Read:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. active chapter `STATUS.md`
5. active lesson storyboard/resources/latest production QA
6. `ARTIFACT_PERSISTENCE.md` for production work
7. deeper policy files only if required

`NEW_CHAT_START.md` contains the full recovery protocol.

## Next authorized action

**Revise Lesson 1 into visual-engagement prototype v2 before Lesson 2 production.**

Preserve frozen science/content, improve UI/design, add purposeful progressive reveal/animation, integrate optional PhET support appropriately, verify PowerPoint/PDF export, and use the approved result as the visual baseline for Lessons 2–4.
