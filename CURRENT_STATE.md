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

**CONTENT_STORYBOARD_FROZEN — RT_01_COMPLETE — LESSON_1_POWERPOINT_COMPATIBILITY_RECOVERED — MULTI_SOURCE_SIMULATION_ROUTING_ADOPTED — LESSON_1_VISUAL_ENGAGEMENT_V2_REQUIRED — LESSON_2_ON_HOLD**

## New hard production controls — added after Lesson 1 pilot

The first Lesson 1 controlled build exposed two production gaps:

1. Microsoft PowerPoint initially showed a repair warning even though ZIP/XML, LibreOffice, render and PDF checks had passed;
2. the deck was scientifically correct but too static/utilitarian and did not adequately implement the planned animation/simulation/interactive/visual-engagement layer.

These are now permanently controlled by:

`PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`

and reinforced in the quality gates/workflow/templates.

### PowerPoint hard gate

For the exact user-facing PPTX, when Microsoft PowerPoint is available:

- open/test in Microsoft PowerPoint;
- repair/recovery warning must be **NO**;
- editability must remain intact where expected;
- planned reveal/animation/interaction/buttons/links must be tested;
- if LibreOffice or another tool normalizes/resaves the file, PowerPoint playback must be retested afterward.

Passing package/render/PDF tests alone is no longer sufficient.

### Dynamic-engagement hard gate

A concept-heavy lesson must not become static by accident.

For relevant segments, production explicitly chooses one of:

- `STATIC_INTENTIONAL`
- `STAGED_REVEAL`
- `PREDICT_THEN_REVEAL`
- `NATIVE_ANIMATION`
- `INTERACTIVE_NAVIGATION`
- `LIVE_DEMO`
- `SIMULATION`
- `VIDEO/ANIMATION_RESOURCE`

For science-critical progressive construction, staged deterministic reveal states are preferred when they provide the same instructional value with better compatibility/PDF fallback reliability.

### Visual-attractiveness hard gate

A scientifically correct but materially unattractive, box-heavy, repetitive or utilitarian first-pilot deck fails G10 and cannot be `CLASSROOM_READY`.

Lesson 1 v2 must establish the user-approved master UI/motion direction before Lessons 2–4 inherit the design system.

### Multi-source simulation rule

PhET is **not** the automatic simulation provider.

For each concept, compare multiple reputable candidates when practical and select the best fit. Candidate ecosystems include:

- PhET;
- The Physics Classroom Physics Interactives;
- GeoGebra;
- Open Source Physics / ComPADRE;
- other reputable university/professional/government/established educational platforms;
- custom Hyperagent/HTML/JS only when existing resources do not adequately serve the objective.

Selection is based on scientific correctness, concept fit, grade suitability, interaction/measurement quality, projector clarity, setup friction, device/login constraints, licensing, language burden, timing and fallback quality.

Canonical policy:
`SIMULATION_RESOURCE_ROUTING.md`

For Chapter 11:

- Lesson 1/2 refraction resource selection must compare PhET Bending Light with The Physics Classroom Refraction Interactive and suitable verified GeoGebra options when useful;
- Lesson 3 lens exploration should compare The Physics Classroom Optics Bench with suitable verified GeoGebra/other reputable lens interactives;
- do not include multiple simulations just for variety.

## Review / freeze state

- Gemini Gate A: completed + reconciled
- Gemini Gate B: completed + reconciled
- Final pre-freeze QA: `PASS — CONTENT/STORYBOARD FREEZE APPROVED`
- No content unfreeze is required for Lesson 1 v2.
- No additional Gemini planning review is required unless production introduces a material science/content regression.

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

Final route:

**Controlled PptxGenJS → deterministic SVG/shape science visuals → rendered QA → optional Canva controlled-import finishing → verified PPTX + verified PDF fallback.**

- PptxGenJS: primary controlled production.
- Canva: optional finishing after controlled import only when it materially improves polish without science drift.
- Beautiful.ai/native Canva AI: not unattended science-critical full-deck authors.

## Lesson 1 production checkpoint

### Science/content

PASS.

### Microsoft PowerPoint compatibility

Initial PPTX triggered a repair warning.

A normalized/repaired PPTX was created, and the user confirmed it now opens correctly in Microsoft PowerPoint.

Current repaired PPTX SHA-256:

`f5d3d16f724bc5ae2557c008356b28d6482ee0fd0a694c0572cfbb2bfbafe769`

PDF fallback SHA-256:

`a85cc0821c73b9074a827968ecb8834aa0c7bd90dbd185ea248fe9f102ab3b6a`

### Design/engagement

**FAIL FOR CLASSROOM_READY — v2 REQUIRED.**

The current deck is a science-correct controlled prototype, not the final visual/motion standard.

Canonical revision plan:

`chapters/class-8/science/chapter-11-light/lessons/lesson-01/DESIGN_ENGAGEMENT_REVISION_2026-09-06.md`

Lesson 1 v2 dynamic manifest:

`chapters/class-8/science/chapter-11-light/lessons/lesson-01/production/DYNAMIC_MANIFEST.md`

The manifest no longer hard-codes PhET. The final FLEX simulation will be selected after comparing relevant providers under `SIMULATION_RESOURCE_ROUTING.md`.

## What remains for the chapter

1. compare/select the best-fit Lesson 1 refraction simulation resource;
2. build Lesson 1 visual-engagement prototype v2;
3. run science + G10 visual-engagement + G11 PowerPoint/playback/export QA;
4. obtain user approval of the master UI/motion direction;
5. persist Lesson 1 v2 build source, dynamic manifest and final fingerprints;
6. produce Lesson 2 using the approved master standard;
7. produce Lessons 3–4;
8. final rendered chapter-wide audit and classroom-ready package.

## New-chat recovery order — current pilot

Read:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
5. `SIMULATION_RESOURCE_ROUTING.md`
6. `ARTIFACT_PERSISTENCE.md`
7. active chapter `STATUS.md`
8. active lesson storyboard/resources/latest QA/design revision/dynamic manifest
9. deeper policy files only if required

## Next authorized action

**Select the best-fit Lesson 1 refraction simulation from multiple reputable candidates, then build Lesson 1 visual-engagement prototype v2.**

Do not start Lesson 2 full production until the Lesson 1 v2 visual/motion direction is approved.
