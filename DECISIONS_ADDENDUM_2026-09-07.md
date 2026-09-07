# Durable Decisions Addendum — 2026-09-07

Status: **ACTIVE — READ WITH `DECISIONS.md`**

This addendum records durable decisions created after the original `DECISIONS.md` sequence through D-039. It exists so new chats cannot miss the post-pilot refinements while the canonical decisions file remains historically intact.

## D-040 — Visual asset generation is Canva/external-first, not ChatGPT-image-first

Decision:

Routine Science Slides image generation must not consume ChatGPT-native image-generation quota by default.

Priority:

1. verified existing real/authoritative/open/licensed visual;
2. connected Canva / Canva AI / Canva Pro visual generation or licensed assets;
3. another connected/legal external visual source/generator;
4. deterministic SVG/programmatic/Hyperagent construction where science geometry is primary;
5. ChatGPT-native image generation only by explicit user request or explicit approved exception.

Role separation:

- Canva/external source: realistic physical/context base imagery;
- PptxGenJS/SVG/control layer: rays, normals, angles, labels, scales, equations, graphs, circuits and other science-critical geometry.

Photorealism must not override scientific clarity. Where geometry must align to a physical object, prefer orthographic/straight-on/side/cross-sectional views.

Canonical policy:

`VISUAL_ASSET_ROUTING.md`

## D-041 — Copy lock + terminology lint + diagram contracts are hard accuracy gates

Decision:

A science deck cannot be called `INTERNAL_QA_PASS` merely because it renders, passes overflow tests or looks visually polished.

For high-risk lessons, the production chain must include:

1. exact student-facing copy frozen in `production/SLIDE_COPY_V*.md`;
2. chapter terminology lock when relevant;
3. student-facing terminology/acronym lint where practical;
4. explicit diagram contracts for high-risk science visuals;
5. programmatic geometry assertions where practical;
6. individual rendered review of high-risk slides;
7. PowerPoint/export/offline QA.

Standalone-readable Bangla questions/instructions are mandatory. Unexplained English acronyms or mixed-language production fragments are hard failures when the chapter has a Bangla textbook term.

Reason:

Lesson 2 v1 passed prototype render/overflow QA but user review found material errors, including insufficient apparent-position construction, reflected-ray geometry in the wrong medium, full-internal-reflection errors, unexplained `TIR`, mixed English/Bangla and fragmentary questions.

Canonical workflow:

`ACCURACY_ENFORCEMENT.md`

Chapter 11 implementations:

- `chapters/class-8/science/chapter-11-light/TERMINOLOGY_LOCK.md`
- `chapters/class-8/science/chapter-11-light/DIAGRAM_CONTRACTS.md`

## D-042 — High-risk visual pack must be approved before full deck rebuild

Decision:

After a high-risk visual failure or in first-pilot calibration, a full classroom deck must not be assembled or released until a separate High-Risk Visual Pack is produced and approved.

The pack must lock the scientific reference/topology first, then build visuals using the approved separation:

- realistic physical/context base: verified existing image or Canva/external visual source where useful;
- science-critical layer: deterministic controlled PptxGenJS/SVG overlay;
- no AI-generated or stock visual may decide rays, normals, angles, labels, scales, equations or scientific topology.

The pack must explicitly check:

1. visual recognizability of physical objects/context;
2. scientific geometry/invariant correctness;
3. Bangla-first terminology;
4. projector readability;
5. absence of unexpected blank/missing rendered pages;
6. static/offline fallback for any external/dynamic element.

Reason:

Lesson 2 v2 passed internal text/render checks but user review still found that coin/fish/mirage/context visuals were not classroom-clear and a blank rendered page appeared. Therefore the existing `INTERNAL_QA_PASS` state was too strong and must be revoked.

Canonical policy:

`REFERENCE_LOCKED_VISUAL_PIPELINE.md`

## Precedence

For production work after 2026-09-07, D-040, D-041 and D-042 refine older generic routing/QA wording. If an older file implies that montage/render PASS alone is enough, or that full deck assembly may precede high-risk visual approval after a visual failure, these decisions supersede that implication.
