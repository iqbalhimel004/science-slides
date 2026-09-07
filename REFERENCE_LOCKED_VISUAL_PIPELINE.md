# Reference-Locked Visual Pipeline

Version: 1.0
Date: 2026-09-07
Status: **ACTIVE — HARD GATE FOR HIGH-RISK SCIENCE VISUALS**

## Purpose

Prevent a lesson deck from passing text/render/overflow checks while the actual classroom visuals remain scientifically unclear, physically unrecognizable, or inconsistent with the approved visual plan.

This policy was created after the Class 8 Science Chapter 11 Lesson 2 v2 user review found that several apparent-position visuals still used flat/unclear schematic objects, a blank rendered page appeared, and high-risk visual approval had not been completed before full deck assembly.

## Core rule

For lessons with high-risk science visuals, do **not** assemble or release the full classroom deck until a separate **High-Risk Visual Pack** has been produced, rendered, inspected, and approved.

The visual pack is a pre-deck gate, not optional polish.

## What counts as high-risk

A visual is high-risk when the diagram or image carries scientific meaning that students must interpret correctly.

Examples:

- apparent position / apparent depth;
- real ray vs dashed construction line;
- coin becoming visible after water is added;
- fish appearing shallower;
- mirage / temperature-gradient refraction;
- critical angle;
- full internal reflection;
- optical fibre internal reflection;
- lens ray construction;
- eye/camera image formation;
- circuit topology;
- chemical structures/equations;
- graph or scale-based reasoning.

## Reference lock before drawing

Before drawing a high-risk visual, lock the reference topology:

1. name the concept and intended claim;
2. identify the authoritative/reference basis;
3. list the required visible invariants;
4. decide whether the best classroom form is:
   - realistic base + deterministic overlay;
   - two-panel realistic/context + deterministic schematic;
   - pure deterministic schematic;
   - live demonstration plus static fallback;
5. write the exact Bangla-first visible labels before production.

Do not let an AI image, stock photo, design template, or renderer decide ray paths, normals, angles, labels, equations, object positions, or scientific topology.

## Realistic base + deterministic science layer

For physical/context visuals:

- use verified existing real/open/licensed images first when suitable;
- use Canva / Canva AI / Canva Pro or another approved external visual source for realistic physical-object base imagery when needed;
- avoid routine ChatGPT-native image generation unless the user explicitly approves an exception;
- base images must contain no trusted science labels, rays, arrows, equations, or angles;
- add all science-critical rays, construction lines, labels, normals, angles and symbols through the controlled PptxGenJS/SVG layer;
- when a photo perspective conflicts with 2D geometry, use a separate deterministic schematic or a two-panel hybrid.

## Visual recognizability gate

A physical object/context visual must be recognizable at classroom projection size.

FAIL examples:

- fish cannot be recognized as fish;
- coin cannot be recognized as a coin;
- water looks like a generic blue rectangle when the slide is meant to show a real situation;
- glass/lens/fibre/camera looks flat, toy-like or physically implausible;
- road mirage looks like a literal water boundary instead of a hot-road illusion/gradient context.

## High-Risk Visual Pack contents

For each high-risk visual, the pack must include:

- slide/visual ID;
- concept;
- approved student-facing Bangla wording;
- base asset route and provenance;
- reference/science basis;
- required invariants;
- rendered visual at classroom-view size;
- PASS/FAIL checklist;
- notes on whether it will enter CORE, FLEX, or static fallback.

## Blank/missing slide hard stop

Before a full lesson deck can proceed, run an expected-slide manifest check:

- every planned slide ID must render to a non-blank page;
- no unexpected blank page may appear;
- no high-risk visual slide may be missing;
- physical slide count must match the build manifest unless intentionally documented.

A blank page in the exported PDF/PPTX is an automatic FAIL, even if page count and overflow checks pass.

## Approval rule

For first-pilot lessons and any lesson after a visual failure:

1. build only the High-Risk Visual Pack first;
2. deliver the visual pack to the user for visual/science review;
3. revise until accepted;
4. only then assemble the full lesson deck.

Do not proceed to Lesson 3 or full Lesson 2 rebuild while Lesson 2 high-risk visual pack is unapproved.

## Relation to existing policies

This file refines and must be read with:

- `ACCURACY_ENFORCEMENT.md`
- `QUALITY_GATES.md`
- `VISUAL_ASSET_ROUTING.md`
- `PHYSICAL_VISUAL_REALISM_POLICY.md`
- `CLASSROOM_LANGUAGE_POLICY.md`
- `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
- active chapter `TERMINOLOGY_LOCK.md`
- active chapter `DIAGRAM_CONTRACTS.md`

## Precedence

If an older production QA says a deck passed but user visual review later identifies unrecognizable or scientifically unclear high-risk visuals, this policy supersedes the older pass status. The deck returns to rebuild-required state.
