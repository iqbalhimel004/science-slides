# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science
- Chapter: 11 — আলো
- Last updated: 2026-09-06
- Current status: **CONTENT_STORYBOARD_FROZEN — RT_01_COMPLETE — LESSON_1_POWERPOINT_COMPATIBILITY_RECOVERED — LESSON_1_VISUAL_ENGAGEMENT_V2_REQUIRED — LESSON_2_ON_HOLD**

## Durable workflow rules

- external-tool prompts are one-click copy-ready;
- Gemini reviews use fresh downloadable single-file bundles;
- Gate B is targeted implementation QA, not Gate A repetition;
- renderer route is locked by `D-036` / `RENDERER_ROUTING.md`;
- controlled production follows `ARTIFACT_PERSISTENCE.md`;
- compatibility/animation/simulation/UI requirements follow `/PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`;
- universal stage rule: **Finish → record → then continue.**

## Review / freeze state

- Gate A: completed + reconciled
- Gate B: completed + reconciled
- Final pre-freeze QA: `PASS — CONTENT/STORYBOARD FREEZE APPROVED`
- No content unfreeze is required for Lesson 1 v2.

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

Chapter planned CORE + FLEX total: **202 minutes**.

## RT-01 renderer calibration

Status: **COMPLETE**

Final route:

- primary authoring/rendering: controlled PptxGenJS
- science-critical visuals: deterministic SVG/shape construction
- optional finishing: Canva after controlled PPTX import
- classroom delivery/fallback: controlled PPTX + verified PDF
- Beautiful.ai: low-risk layout prototype/inspiration only
- native Canva AI: low-risk visual inspiration/components only

## New production reliability hard gates

The first Lesson 1 pilot revealed two production failures that are now permanently controlled:

1. the first PPTX triggered a Microsoft PowerPoint repair warning despite passing internal/render checks;
2. the deck was scientifically correct but too static/utilitarian and under-implemented the intended animation/simulation/interactive/visual-engagement layer.

Canonical control:

`/PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`

Key consequences:

- a PPTX repair warning is a hard compatibility FAIL;
- Microsoft PowerPoint smoke test is required for the exact user-facing PPTX when available;
- normalization/resave must be followed by playback re-test when animation/interaction exists;
- concept-heavy lessons may not become static by accident;
- storyboard-planned progressive reveal/interaction/simulation must be implemented or intentionally reclassified with reason;
- G10 now rejects materially unattractive/utilitarian first-pilot decks;
- Lesson 1 v2 must receive user visual/motion approval before Lessons 2–4 inherit the style.

## Lesson 1 production state

### Science/content

PASS. Frozen science/content remains valid.

### Microsoft PowerPoint compatibility

- initial PPTX: failed user-side PowerPoint open with repair warning;
- normalized/repaired PPTX: user confirmed it opens correctly in Microsoft PowerPoint;
- repaired PPTX SHA-256: `f5d3d16f724bc5ae2557c008356b28d6482ee0fd0a694c0572cfbb2bfbafe769`;
- PDF fallback SHA-256: `a85cc0821c73b9074a827968ecb8834aa0c7bd90dbd185ea248fe9f102ab3b6a`.

### Visual/motion/interaction

**FAIL FOR CLASSROOM_READY — REVISION REQUIRED.**

The current build is a science-correct controlled prototype, not the final master visual standard.

Required v2 improvements are defined in:

`lessons/lesson-01/DESIGN_ENGAGEMENT_REVISION_2026-09-06.md`

and governed by:

`/PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`

Targets include:

- stronger UI/color/visual identity;
- improved hook and slide rhythm;
- purposeful staged reveal / predict-then-reveal;
- optional PhET Bending Light launch support with static fallback;
- interactive/hyperlink support only where pedagogically useful;
- PowerPoint playback compatibility;
- verified PDF/static fallback;
- reproducible build source committed under artifact-persistence policy.

## Remaining chapter production

1. build Lesson 1 visual-engagement prototype v2;
2. run science/visual/PowerPoint/playback/PDF QA;
3. obtain user approval of the master visual/motion direction;
4. persist Lesson 1 v2 reproducible production source and dynamic manifest;
5. produce Lesson 2 using the approved baseline;
6. produce Lessons 3–4;
7. final rendered chapter-wide audit and classroom-ready package.

## Next authorized stage

**Lesson 1 visual-engagement prototype v2.**

Do not start Lesson 2 full production until Lesson 1 v2's visual/motion direction is approved.
