# Physical Visual Realism Policy

Version: 1.1
Date: 2026-09-06
Status: **ACTIVE — FIRST PILOT VISUAL STANDARD**

## Purpose

Prevent physical apparatus visuals from looking artificial, flat, toy-like, or scientifically misleading.

This policy was refined after Lesson 1 v2 review:

- the first glass slab looked like a flat blue shape rather than real glass;
- a later photorealistic perspective glass slab looked real but conflicted with the 2D optics geometry;
- the accepted solution was a realistic straight-on/orthographic glass base with deterministic ray/normal/label overlays.

## Core rule

For physical objects/apparatus shown to students, the visual should look like the real object as far as practical while preserving scientific clarity.

Examples:

- glass should look transparent, thick, reflective and refractive;
- water should look like water;
- lenses should look like transparent optical lenses, not generic shapes;
- mirrors should show reflective-surface cues;
- fibre/camera/eye/experiment apparatus should be recognizable as real apparatus;
- schematic-only drawings should be used when abstract geometry or simplified scientific structure is the real teaching target.

## Default asset source — Canva/external first

Routine realistic image generation should **not** consume ChatGPT-native image-generation quota.

When a new realistic base visual is required, use this order:

1. verified existing real/authoritative/open/licensed visual when it already fits;
2. connected Canva / Canva AI / Canva Pro generation or asset library;
3. another connected or legally usable external visual source/generator when it offers a clear advantage;
4. custom programmatic/SVG construction for deterministic scientific visuals;
5. ChatGPT-native image generation only when the user explicitly asks for it or explicitly approves an exception because the above routes are unsuitable/unavailable.

Canonical detailed routing:

`VISUAL_ASSET_ROUTING.md`

## Realistic + deterministic science overlay model

For optics and other geometry-sensitive topics, the preferred model is:

1. obtain/create a realistic physical-object base visual through Canva or another approved external source;
2. request/use an appropriate scientific viewing plane, such as straight-on, orthographic or cross-sectional view when geometry matters;
3. avoid generated text, arrows, angles, labels or measurement markings in the base image;
4. overlay deterministic, scientifically checked ray paths, labels, normals, angles and guide lines in PptxGenJS/SVG/controlled drawing;
5. keep student-facing terminology Bangla-first;
6. visually inspect the final rendered slide;
7. preserve asset provenance in the lesson resource/QA record.

## Photorealism never overrides science

A realistic image that makes the scientific geometry ambiguous fails QA.

If perspective conflicts with the concept:

- use orthographic/side/cross-sectional realistic imagery;
- or use a hybrid layout with a realistic object plus a deterministic schematic;
- or use a clearly intentional schematic if it teaches the concept more accurately.

## Canva AI rule

Canva AI may be used for:

- realistic glass, lens, mirror, camera, optical fibre, apparatus and real-world objects;
- photorealistic backgrounds/contextual scenes;
- non-labelled physical-object illustrations;
- orthographic/side-view base imagery for later scientific overlays.

Canva AI must not be treated as the final authority for:

- ray paths;
- normals;
- angles;
- scientific labels;
- graphs/scales;
- circuit topology;
- anatomical positional relationships where exactness matters;
- equations/notation;
- any science-critical causal geometry.

These remain controlled/deterministic and independently verified.

## Schematic exception

A schematic diagram is allowed and often preferred when:

- teaching abstract ray vocabulary;
- showing an exact geometric relation;
- drawing force/vector relationships;
- showing circuit logic;
- presenting graph axes/scales;
- simplifying a process step where realism would distract;
- providing a board-drawing equivalent.

If a schematic represents a physical object, it must either be clearly labelled as schematic or have enough physical cues that students immediately recognize the object.

## Anti-patterns

Avoid:

- flat generic shapes standing in for real apparatus when realism is pedagogically useful;
- visually dramatic 3D perspective that conflicts with 2D science geometry;
- generated labels/arrows/rays being trusted without reconstruction;
- toy-like lenses/mirrors/glass;
- beautiful but scientifically ambiguous imagery;
- images where essential Bangla labels or overlays are hard to read;
- routine use of ChatGPT-native image generation when Canva/other scalable routes are available.

## Lesson 1 evidence

The accepted Lesson 1 glass-slab pattern is:

- realistic straight-on/orthographic glass slab base;
- deterministic first/second বিভেদতল;
- deterministic অভিলম্ব lines;
- deterministic আপতিত, প্রতিসরিত and নির্গত রশ্মি;
- staged prediction → answer pair;
- Bangla-first labels;
- incident/emergent parallelism shown only for parallel-sided slab geometry.

## Relation to other policies

This file complements:

- `VISUAL_ASSET_ROUTING.md`
- `VISUAL_ENGAGEMENT_SYSTEM.md`
- `SLIDE_STYLE_GUIDE.md`
- `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
- `RENDERER_ROUTING.md`
- `CLASSROOM_LANGUAGE_POLICY.md`

Scientific accuracy remains the higher authority. Realism must never introduce a wrong path, wrong label, wrong proportion, or wrong classroom claim.
