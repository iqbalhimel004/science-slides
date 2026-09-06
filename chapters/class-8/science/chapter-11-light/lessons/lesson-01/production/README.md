# Lesson 1 v2 Controlled Production

Status: **SCAFFOLD_READY — BUILD_NOT_STARTED**
Date: 2026-09-06

## Purpose

This directory is the durable/reproducible source area for the Lesson 1 visual-engagement prototype v2.

The v2 build must preserve the frozen science/content while correcting two pilot failures:

1. initial Microsoft PowerPoint repair warning;
2. under-implemented animation/simulation/interactive/UI visual engagement.

## Canonical inputs

- `../STORYBOARD.md`
- `../RESOURCES.md`
- `../DESIGN_ENGAGEMENT_REVISION_2026-09-06.md`
- `../PRODUCTION_QA_2026-09-06.md`
- `../../../SOURCE_MAP.md`
- `../../../SOURCE_ISSUES.md`

Project policies:

- `/RENDERER_ROUTING.md`
- `/PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
- `/ARTIFACT_PERSISTENCE.md`
- `/SLIDE_STYLE_GUIDE.md`
- `/VISUAL_ENGAGEMENT_SYSTEM.md`
- `/QUALITY_GATES.md`

## Required files for v2 checkpoint

Before Lesson 1 v2 is considered durably produced, this directory should contain or reference:

- `build.js` or equivalent reproducible generator source;
- `DYNAMIC_MANIFEST.md`;
- `ASSET_MANIFEST.md` if nontrivial assets are used;
- deterministic SVG/source assets where useful;
- build/export instructions;
- final artifact checksums in production QA.

Do not commit font files, credentials or secrets.

## Mandatory build route

1. build controlled 16:9 PPTX with PptxGenJS;
2. preserve frozen wording/scientific geometry;
3. use deterministic SVG/shape visuals for high-risk optics;
4. implement purposeful staged reveal/prediction/simulation support according to `DYNAMIC_MANIFEST.md`;
5. run render/overflow/science/typography/UI QA;
6. optionally use Canva only for controlled visual finishing;
7. generate PDF/static fallback;
8. test exact user-facing PPTX in Microsoft PowerPoint;
9. repair warning must be NO;
10. test planned buttons/links/reveal/animation behaviour;
11. obtain user approval of overall UI/motion direction;
12. record fingerprints and QA before Lesson 2 begins.

## Compatibility principle

For science-critical progressive explanation, prefer staged duplicate-slide reveal states over fragile native animation when the instructional effect is equivalent.

Native PowerPoint animation is allowed only when it adds real value and is verified in the exact classroom artifact.

## Current next action

Populate `DYNAMIC_MANIFEST.md`, define the v2 visual system, then create `build.js` and produce the first Lesson 1 v2 artifact for user review.
