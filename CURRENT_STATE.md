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
- `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md` is the canonical PowerPoint-compatibility + animation/simulation/interactive/UI production policy.
- `ARTIFACT_PERSISTENCE.md` is the canonical controlled-deck reproducibility policy.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical path:
`chapters/class-8/science/chapter-11-light/`

Current status:

**CONTENT_STORYBOARD_FROZEN — RT_01_COMPLETE — LESSON_1_POWERPOINT_COMPATIBILITY_RECOVERED — LESSON_1_VISUAL_ENGAGEMENT_V2_REQUIRED — LESSON_2_ON_HOLD**

## New hard production controls — added after Lesson 1 pilot

The first Lesson 1 controlled build exposed two production gaps:

1. Microsoft PowerPoint initially showed a repair warning even though ZIP/XML, LibreOffice, render and PDF checks had passed;
2. the deck was scientifically correct but too static/utilitarian and did not adequately implement the planned animation/simulation/interactive/visual-engagement layer.

These are now permanently controlled by:

`PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`

and reinforced in:

- `QUALITY_GATES.md` v4.0;
- `WORKFLOW.md` v4.1;
- `ARTIFACT_PERSISTENCE.md` v1.1;
- `NEW_CHAT_START.md` v4.1;
- `AGENTS.md` v4.1;
- chapter `STATUS.md`.

### PowerPoint hard gate

For the exact user-facing PPTX, when Microsoft PowerPoint is available:

- open/test in Microsoft PowerPoint;
- repair/recovery warning must be **NO**;
- editability must remain intact where expected;
- planned reveal/animation/interaction/buttons/links must be tested;
- if LibreOffice or another tool normalizes/resaves the file, PowerPoint playback must be retested afterward.

Passing `slides_test.py`, ZIP/XML parsing, LibreOffice opening, PDF conversion, or rendered-image QA alone is no longer sufficient.

### Dynamic-engagement hard gate

A concept-heavy lesson must not become static by accident.

For relevant segments, production must explicitly choose one of:

- `STATIC_INTENTIONAL`
- `STAGED_REVEAL`
- `PREDICT_THEN_REVEAL`
- `NATIVE_ANIMATION`
- `INTERACTIVE_NAVIGATION`
- `LIVE_DEMO`
- `SIMULATION`
- `VIDEO/ANIMATION_RESOURCE`

For science-critical progressive construction, staged duplicate-slide reveal states are preferred when they provide the same instructional value with better compatibility/PDF fallback reliability.

### Visual-attractiveness hard gate

A scientifically correct but materially unattractive, box-heavy, repetitive or utilitarian first-pilot deck fails G10 and cannot be `CLASSROOM_READY`.

Lesson 1 v2 must establish the user-approved master UI/motion direction before Lessons 2–4 inherit the design system.

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

Planned v2 includes:

- stronger opening/hook;
- more attractive physics visual identity and palette;
- better hierarchy/whitespace/visual rhythm;
- staged ray construction and prediction→reveal states;
- optional PhET Bending Light launch support with prediction/debrief/static fallback;
- interactive navigation only where useful;
- PowerPoint compatibility/playback test;
- verified PDF/static fallback;
- reproducible build source + dynamic manifest committed.

## What remains for the chapter

1. build Lesson 1 visual-engagement prototype v2;
2. run science + G10 visual-engagement + G11 PowerPoint/playback/export QA;
3. obtain user approval of the master UI/motion direction;
4. persist Lesson 1 v2 build source, dynamic manifest and final fingerprints;
5. produce Lesson 2 using the approved master standard;
6. produce Lessons 3–4;
7. final rendered chapter-wide audit and classroom-ready package.

## New-chat recovery order — current pilot

Read:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
5. `ARTIFACT_PERSISTENCE.md`
6. active chapter `STATUS.md`
7. active lesson storyboard/resources/latest QA/design revision
8. deeper policy files only if required

## Next authorized action

**Lesson 1 visual-engagement prototype v2.**

Do not start Lesson 2 full production until the Lesson 1 v2 visual/motion direction is approved.
