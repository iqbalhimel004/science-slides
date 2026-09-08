# Lesson 2 Production System v2.1 Migration Override

Date: 2026-09-08
Status: **ACTIVE — SUPERSEDES STALE V2 PRODUCTION STATUS WORDING**

## Purpose

Preserve all valid Lesson 2 work while preventing historical v2 build/QA files from being mistaken for the current production authority.

## No-reset rule

Do not restart Lesson 2.

Retain:

- analysis/storyboard;
- source reconciliation;
- `SLIDE_COPY_V2.md` as historical copy evidence;
- current Chapter 11 terminology lock;
- diagram/reference contracts;
- physical/context assets that passed direct review;
- user-corrected science decisions;
- historical failed artifacts as regression evidence.

## Current student-facing terminology override

Historical Lesson 2 v2 files contain `বিরল মাধ্যম` in critical-angle/TIR copy.

For all new/revised Lesson 2 production after this migration, the current chapter lock applies:

- `ঘন মাধ্যম`
- `হালকা মাধ্যম`

Scientific meaning of `হালকা মাধ্যম` here: lower optical density / lower refractive index than the incident dense medium.

This override applies to all student-facing critical-angle/TIR/classification/summary states. Historical v2 copy must not be rendered unchanged into the new controlled deck.

Before full Lesson 2 assembly, create a fresh exact copy lock/structured spec from the validated v2 content plus this override. Do not rewrite already-valid content unnecessarily.

## High-risk visual current evidence

Latest directly inspected user export:

`Lesson 2 High-Risk Visual Pack — Reference Locked v2_20260908_182041_0000.pdf`

Current direct-pixel disposition:

- HRV-01: materially acceptable;
- HRV-02: materially acceptable;
- HRV-03: materially acceptable; fish recognizable;
- HRV-04: materially acceptable; mirage communicated, clipped photo label removed;
- HRV-05: materially acceptable; angle from normal, `r = 90°`, current student-facing `হালকা মাধ্যম`;
- HRV-06: materially acceptable; angle from normal, no outside refracted ray, current student-facing `হালকা মাধ্যম`;
- HRV-07: unresolved due lower explanatory text overlap/crowding.

A later HRV-07 v5 Canva draft was prepared but was not established as a committed direct-pixel PASS. It is not current authority.

## V2.1 migration classification

| HRV | Migration action | Reason |
|---|---|---|
| HRV-01 | REUSE_AS_REFERENCE | validated science/render reference |
| HRV-02 | REUSE_AS_REFERENCE | retain accepted coin/context assets |
| HRV-03 | REUSE_AS_REFERENCE | retain accepted fish/context + topology |
| HRV-04 | REUSE_AS_REFERENCE | retain accepted mirage context/mechanism |
| HRV-05 | PORT_TO_CONTROLLED_COMPONENT | R3; needs reusable source-controlled critical-angle component |
| HRV-06 | PORT_TO_CONTROLLED_COMPONENT | R3; needs reusable source-controlled TIR component |
| HRV-07 | REBUILD/PORT_TO_CONTROLLED_COMPONENT FIRST | unresolved and repeated raster patching failed to converge |

## Semantic requirements added by v2.1

HRV-05/06:

- angle arcs must be defined by incident ray + normal endpoints;
- normal/interface perpendicularity must be testable;
- ray medium membership must be testable;
- TIR transmitted-ray count = 0.

HRV-07:

- core/cladding distinction if shown;
- reflection vertices lie on core-cladding boundary;
- ray remains inside core in simplified TIR path;
- no segment incorrectly propagates through cladding;
- all labels must remain separate from ray path and from each other.

Canonical contract: chapter `DIAGRAM_CONTRACTS.md` v1.1+.

## Historical files and precedence

The following remain useful evidence but their old status lines are historical/superseded for current production:

- `BUILD_SPEC_V2_2026-09-07.md`;
- `DYNAMIC_MANIFEST.md` v2 status;
- `PRODUCTION_QA_V2_2026-09-07.md`;
- `HIGH_RISK_VISUAL_PACK_PIXEL_QA_2026-09-08.md` entries that refer only to the earlier `172119` export;
- `SLIDE_COPY_V2.md` where terminology conflicts with the current chapter lock.

Current precedence:

1. root `CURRENT_STATE.md`;
2. `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md` v2.1+;
3. this migration override;
4. chapter `TERMINOLOGY_LOCK.md` and `DIAGRAM_CONTRACTS.md`;
5. latest direct-render QA evidence;
6. historical v2 artifacts.

## Next production sequence

1. source-control HRV-07 component first;
2. port HRV-05 and HRV-06 controlled components;
3. create controlled high-risk validation pack in PptxGenJS using retained HRV-01..04 references/assets;
4. run automated structural/text/layout checks;
5. run semantic science tests;
6. render and inspect every R3 page individually;
7. use repair circuit breaker until internal PASS;
8. show one internally-passed pack for user acceptance;
9. create current full Lesson 2 structured spec/copy lock;
10. assemble full controlled Lesson 2 from validated prior work;
11. run compatibility/export/offline QA;
12. checkpoint before Lesson 3.
