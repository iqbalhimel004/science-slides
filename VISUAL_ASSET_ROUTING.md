# Visual Asset Routing Policy — Science Slides

Version: 1.0
Date: 2026-09-06
Status: **ACTIVE — CANVA-FIRST EXTERNAL VISUAL GENERATION / CONTROLLED SCIENCE OVERLAY**

## Purpose

Define how photos, realistic object visuals, diagrams and generated visual assets should be sourced or created for Science Slides after the Lesson 1 pilot.

This policy exists to prevent two recurring failures:

1. physical objects/apparatus looking flat, toy-like or obviously artificial;
2. a photorealistic image becoming scientifically ambiguous because generated perspective, labels or ray geometry are allowed to determine the science.

It also prevents routine dependence on ChatGPT-native image generation when connected external visual tools such as Canva can provide scalable asset generation without consuming the user's limited ChatGPT image quota.

## Canonical decision

For future Science Slides, **ChatGPT native image generation is not the default visual-asset generator.**

When a new photo/realistic visual is needed, use this order:

1. **verified existing real/authoritative image or open/licensed educational visual**, when it already fits the teaching need;
2. **connected Canva / Canva AI / Canva Pro asset workflow** for photorealistic or polished physical-object/background visuals;
3. another connected or legally usable visual source/generator when it offers a clear advantage;
4. custom programmatic/SVG/Hyperagent construction for deterministic scientific visuals or interactives;
5. **ChatGPT-native image generation only if the user explicitly asks for it or explicitly approves an exception after the above routes are unsuitable/unavailable.**

The default should therefore be understood as:

**Canva/external visual source for realistic base assets + controlled PptxGenJS/scientific overlay for labels, rays, geometry and notation.**

## Important distinction: Canva AI is allowed for base imagery, not science authority

RT-01 rejected Canva native AI as an unattended full-deck science author because it could rewrite wording, create ambiguous diagrams and prioritize theme over scientific hierarchy.

That does **not** mean Canva AI cannot be used for visual assets.

Canva AI may be used for:

- realistic glass, lens, mirror, camera, fibre, laboratory apparatus and real-world objects;
- photorealistic backgrounds or contextual scenes;
- non-labelled physical-object illustrations;
- decorative but low-risk visual components;
- realistic orthographic/side-view base images when scientific geometry will be overlaid separately.

Canva AI must **not** be trusted to author final science-critical:

- ray paths;
- normals;
- angles;
- labels;
- scales;
- graphs;
- circuit topology;
- anatomical positions where exact relationships matter;
- equations/notation;
- causal scientific diagrams without independent reconstruction/verification.

## Realistic-object + deterministic-science model

Preferred workflow for physical science visuals:

1. identify the instructional purpose and required viewing plane;
2. choose or generate a realistic physical-object base in Canva or another approved external source;
3. if geometry matters, request/choose an **orthographic, straight-on or appropriate cross-sectional view**, not a visually dramatic perspective that distorts the teaching plane;
4. remove/avoid generated text, labels, arrows and measurement marks from the base image;
5. build all science-critical overlays deterministically in PptxGenJS/SVG/controlled drawing;
6. use Bangla-first textbook terminology on student-facing labels;
7. render the final slide and inspect whether realism and scientific geometry agree visually;
8. preserve a static/offline fallback where relevant;
9. record asset provenance/generation route in the lesson resource/QA record.

## Visual realism rule

When a slide depicts a real physical object, apparatus or phenomenon, it should look recognizably real as far as practical.

Examples:

- glass must visually read as transparent glass with thickness/edge/reflection cues;
- water must read as water, not a generic blue rectangle unless intentionally schematic;
- lenses must show optical-material cues;
- mirrors should visibly read as reflective surfaces;
- optical fibre should look like real fibre/cable where the physical object is being introduced;
- cameras/apparatus should resemble real devices;
- eye visuals should use medically/scientifically credible structure rather than decorative fantasy anatomy.

## Scientific-clarity rule

Photorealism never outranks scientific clarity.

When a realistic perspective conflicts with the geometry being taught:

- use an orthographic/side/cross-sectional realistic view;
- or use a hybrid slide with a realistic object on one side and a clearly labelled deterministic schematic on the other;
- or use a controlled schematic if that is pedagogically superior.

A visual that is beautiful but makes the science ambiguous fails QA.

## Diagram realism rule

Not every diagram should be photorealistic.

For abstract scientific geometry—ray construction, force vectors, circuit logic, graph axes, angle relationships, molecular notation—deterministic schematic representation is often the correct choice.

However, when the diagram represents a physical object, avoid flat generic placeholders that make the object hard to recognize. Use either:

- realistic base + controlled overlay; or
- a clearly intentional textbook-style schematic with sufficient physical cues.

## Canva-first generation procedure

When generation is needed and Canva is connected/available:

1. use Canva AI/image generation or Canva's licensed visual library for the physical base asset;
2. prompt for no text, no labels, no arrows, no equations unless the element is purely decorative;
3. request the exact viewpoint needed for science (for example `straight-on side view`, `orthographic`, `cross-section-ready`, `transparent background` where supported);
4. inspect the generated asset for physical plausibility;
5. do not accept a generated object that changes the scientific meaning;
6. export/use the asset as a base only;
7. add verified scientific overlays in the controlled PPTX route;
8. rerender and QA the final composite.

## Existing-image-first nuance

If a high-quality real photograph or authoritative scientific illustration already exists legally and is more accurate than an AI-generated substitute, prefer the existing source.

Examples may include:

- official lab/apparatus photographs;
- university/government/scientific-agency imagery;
- Wikimedia Commons or other appropriately licensed sources;
- authoritative anatomy/astronomy/earth-science imagery;
- manufacturer imagery when it is the best representation and reuse/use conditions permit classroom use.

Do not generate a synthetic replacement merely because generation is convenient when a better verified real source is available.

## ChatGPT-native image generation restriction

Default rule:

**Do not consume ChatGPT image-generation quota for routine Science Slides asset production.**

ChatGPT-native image generation may be used only when:

- the user explicitly asks for ChatGPT to generate the image; or
- Canva/other suitable connected/existing routes fail and the user explicitly approves the exception.

This restriction is about workflow scalability and quota preservation, not about capability.

## Lesson 1 pilot evidence

The Lesson 1 glass-slab sequence established the preferred pattern:

- a flat schematic glass shape looked artificial;
- a photorealistic 3D perspective glass slab looked real but conflicted with 2D ray geometry;
- the accepted direction is a realistic straight-on/orthographic glass base with deterministic ray/normal/label overlays.

This becomes the default pattern for future optics slides where a physical object and precise geometry must coexist.

## QA checklist for every generated/selected visual

Before classroom-ready status, verify:

- does the object look like the real object?
- is the viewing plane appropriate for the scientific concept?
- are all critical labels/geometry controlled rather than AI-invented?
- is the visual scientifically plausible?
- do perspective and overlays agree?
- is Bangla-first student-facing terminology used?
- is projector readability adequate?
- is asset provenance recorded?
- is licensing/attribution handled when required?
- is the final composite verified after rendering/export?

## Canonical relations

This policy refines and should be read with:

- `PHYSICAL_VISUAL_REALISM_POLICY.md`
- `RENDERER_ROUTING.md`
- `TOOL_ROUTING.md`
- `VISUAL_ENGAGEMENT_SYSTEM.md`
- `SLIDE_STYLE_GUIDE.md`
- `CLASSROOM_LANGUAGE_POLICY.md`
- `ARTIFACT_PERSISTENCE.md`
- `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`

Durable decision: `DECISIONS.md` → `D-040`.
