# Lesson 2 High-Risk Visual Pack — Direct Pixel QA

Date: 2026-09-08
Status: **LATEST_DIRECT_EXPORT: PAGES_1_TO_6_ACCEPTABLE — HRV_07_FAIL — V2_1_CONTROLLED_COMPONENT_MIGRATION_NEXT**

## Scope and precedence

Current Canva design reference:

`DAHUl-r85fw`

This file now records both the earlier direct-QA failure history and the latest directly inspected export. The latest direct export supersedes earlier page-level dispositions when they conflict.

Canonical current state remains `CURRENT_STATE.md`.

## Earlier direct export — historical regression evidence

Earlier inspected export:

`Lesson 2 High-Risk Visual Pack — Reference Locked v2_20260908_172119_0000.pdf`

That export failed with material issues including:

- HRV-03 fish context not sufficiently recognizable;
- HRV-06 text overlap;
- HRV-07 low-contrast/readability problems;
- minor readability caveats on other pages.

Subsequent repair rounds addressed those issues and the user identified additional defects including incorrect angle arcs, terminology, weak mirage representation and optical-fibre confusion. These findings are preserved as regression cases.

## Latest directly inspected export

Latest user-supplied export:

`Lesson 2 High-Risk Visual Pack — Reference Locked v2_20260908_182041_0000.pdf`

Page count:

`7`

Direct-pixel disposition after Repair Round 3:

### HRV-01 — apparent position/depth

**MATERIALLY ACCEPTABLE**

- apparent-depth concept remains understandable;
- real vs apparent position relationship remains acceptable;
- no new material blocker identified in the latest export.

### HRV-02 — coin visibility

**MATERIALLY ACCEPTABLE**

- before/after physical context remains recognizable;
- refraction/visibility concept remains usable;
- no new material blocker identified.

### HRV-03 — fish apparent depth

**MATERIALLY ACCEPTABLE**

- fish is recognizable at classroom-view scale;
- apparent-depth topology is retained;
- no new material blocker identified.

### HRV-04 — mirage

**MATERIALLY ACCEPTABLE**

- the context now visibly communicates a water-like road mirage;
- the previously clipped over-photo label is gone;
- the explanatory mechanism remains gradient/gradual-bending based rather than a hard mirror boundary.

### HRV-05 — critical angle

**MATERIALLY ACCEPTABLE AS RENDERED REFERENCE — PORT TO CONTROLLED COMPONENT**

- `i = C` is shown relative to the normal;
- `r = 90°` state is readable;
- the student-facing revised slide uses `হালকা মাধ্যম`;
- no new material visual blocker identified.

Production System v2.1 requires this R3 visual to be ported to a source-controlled reusable component with semantic tests before the full Lesson 2 controlled build.

### HRV-06 — full internal reflection

**MATERIALLY ACCEPTABLE AS RENDERED REFERENCE — PORT TO CONTROLLED COMPONENT**

- `i > C` is shown relative to the normal;
- no outside refracted ray is shown in the idealized state;
- the student-facing revised slide uses `হালকা মাধ্যম`;
- previous material overlap is no longer the current blocker.

Production System v2.1 requires controlled component port before full Lesson 2 build.

### HRV-07 — optical fibre

**FAIL / UNRESOLVED**

Latest rendered page still showed lower explanatory text overlap/crowding. This fails projector-readability/no-overlap requirements even though the physical fibre photo and repeated-reflection concept had improved.

A cleaner HRV-07 v5 replacement was prepared later in a Canva draft, but it was not established as a committed/final direct-pixel PASS. Do not treat it as current saved truth.

## Current science/production disposition

The move to Production System v2.1 does **not** invalidate pages 1–6 as useful validated references.

Migration classification:

- HRV-01..04: `REUSE_AS_REFERENCE`;
- HRV-05: `PORT_TO_CONTROLLED_COMPONENT`;
- HRV-06: `PORT_TO_CONTROLLED_COMPONENT`;
- HRV-07: `REBUILD/PORT_TO_CONTROLLED_COMPONENT` first.

Canonical migration record:

`PRODUCTION_SYSTEM_V2_1_MIGRATION_2026-09-08.md`

## Hard block

Do not call the high-risk pack fully approved yet.
Do not call Lesson 2 classroom-ready.
Do not start Lesson 3.
Do not resume repeated Canva raster micro-patching as the primary production method.

## Next authorized action

1. rebuild/port HRV-07 as a clean source-controlled component;
2. port HRV-05/06 to reusable controlled components;
3. assemble a controlled PptxGenJS high-risk validation pack while retaining validated HRV-01..04 references/assets;
4. run semantic tests, automated layout/text checks and direct pixel QA;
5. internally repair/rebuild until PASS;
6. show the internally-passed pack once for user acceptance;
7. proceed to full Lesson 2 controlled assembly without restarting validated lesson work.
