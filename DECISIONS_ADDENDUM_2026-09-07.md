# Durable Decisions Addendum — 2026-09-07

Status: **ACTIVE — READ WITH `DECISIONS.md`**

This addendum records durable decisions created after the original `DECISIONS.md` sequence through D-039.

## D-040 — Visual asset generation is external/authoritative-first with controlled science overlay

Routine production should prefer verified authoritative/real/open/licensed visuals when they fit. Generated imagery may support realistic/context visuals but must not determine science-critical geometry, labels, equations, scales, circuits or topology.

Controlled PptxGenJS/SVG/specialized structured routes remain authoritative for science-critical overlays.

Canonical policy: `VISUAL_ASSET_ROUTING.md` and Production System v2.1.

## D-041 — Copy lock + terminology lint + semantic/diagram contracts are hard accuracy gates

A deck cannot receive internal PASS merely because it renders or passes overflow tests.

For technical/high-risk lessons, require exact copy/spec, terminology lock, text lint where practical, semantic/diagram contracts, programmatic assertions where practical, individual rendered review and final compatibility/export QA.

## D-042 — High-risk visual gate before full deck release

After a high-risk visual failure, do not release the full classroom deck until the high-risk visuals are reference-locked, internally tested/rendered, and user-accepted after internal PASS.

No AI/stock visual may decide critical rays, normals, angles, labels, scales, equations or scientific topology.

## D-043 — Adopt Science Slides Production System v2; continue without reset

Canonical architecture:

**Scientific truth -> structured specification -> R1/R2/R3 routing -> specialized visual route -> controlled PptxGenJS assembly -> automated QA -> semantic science QA -> direct pixel QA -> compatibility/export QA -> user acceptance -> GitHub checkpoint.**

No-reset rule:

- valid prior work is preserved;
- Lesson 1 remains completed/user-approved baseline;
- Lesson 2 continues from the latest valid checkpoint;
- rebuild only defective/fragile production layers;
- Lesson 3+ uses the revised system from the start.

Canonical policy: `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`.

## D-044 — Production System v2.1 audit hardening

Decision:

After a full plan/repository audit, Production System v2 is hardened to v2.1. The following are now explicit mandatory controls where applicable:

1. source freshness classification: `STABLE`, `REVISION_SENSITIVE`, `CURRENT_DATA`;
2. quantitative/numerical integrity including unit, conversion, dimensional, graph and independent calculation checks;
3. experiment/demo safety review and safer/static fallback;
4. model/idealization/scale transparency;
5. accessibility/multimodal clarity — critical meaning cannot depend only on color, motion or audio;
6. R3 semantic tests must check relationships such as angle endpoints and boundary membership, not presence only;
7. golden-master regression review for changed reusable R3 components;
8. targeted independent second review before a new R3 component family becomes a reusable golden master;
9. selective invalidation/revalidation so small changes rerun only the scientifically affected gate chain;
10. explicit status ladder and `DELIVERY_COMPATIBILITY_PENDING` when exact PowerPoint testing is unavailable;
11. user review occurs after internal automated + semantic + pixel QA;
12. no-reset migration remains mandatory.

Repository audit also confirmed and corrected material stale-policy conflicts, including startup order, Lesson 1 historical first-pilot wording, Chapter 11 terminology drift and stale Lesson 2 pixel-QA status.

Canonical policy:

`SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md` v2.1+

Current Lesson 2 migration record:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/PRODUCTION_SYSTEM_V2_1_MIGRATION_2026-09-08.md`

## Precedence

For work after 2026-09-08, use:

1. `CURRENT_STATE.md`;
2. `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md` v2.1+;
3. D-044 / later dated durable decisions;
4. current chapter terminology/semantic contracts;
5. current supporting policies;
6. latest stage-specific QA;
7. historical v1/v2 artifacts.
