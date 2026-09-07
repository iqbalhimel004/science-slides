# New Chat Recovery Protocol

Version: 4.3
Last revised: 2026-09-07
Status: **ACTIVE — ACCURACY-ENFORCEMENT / CANVA-FIRST VISUAL ROUTING**

## 1. Verify repository identity first

Authorized write repository:

`iqbalhimel004/science-slides`

Do not write to any other connected repository.

## 2. Mandatory production recovery sequence

For any active production lesson, read in this order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `ACCURACY_ENFORCEMENT.md`
4. `QUALITY_GATES.md`
5. `RENDERER_ROUTING.md`
6. `VISUAL_ASSET_ROUTING.md`
7. `PHYSICAL_VISUAL_REALISM_POLICY.md`
8. `CLASSROOM_LANGUAGE_POLICY.md`
9. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
10. `SIMULATION_RESOURCE_ROUTING.md`
11. `ARTIFACT_PERSISTENCE.md`
12. active chapter `STATUS.md`
13. active chapter `TERMINOLOGY_LOCK.md` if present
14. active chapter/lesson `DIAGRAM_CONTRACTS.md` if present
15. active lesson `STORYBOARD.md`, `RESOURCES.md`, latest `production/SLIDE_COPY_V*.md`, dynamic manifest, latest production QA
16. deeper policy/template files only when needed

Do **not** depend on prior chat memory for technical terminology, slide copy or high-risk diagram geometry.

## 3. Canonical precedence

If old chat history or older repository wording conflicts with current policy, use this precedence:

1. `CURRENT_STATE.md`
2. `ACCURACY_ENFORCEMENT.md`
3. active chapter `TERMINOLOGY_LOCK.md`
4. active chapter/lesson `DIAGRAM_CONTRACTS.md`
5. `RENDERER_ROUTING.md`
6. `VISUAL_ASSET_ROUTING.md`
7. `CLASSROOM_LANGUAGE_POLICY.md`
8. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
9. active chapter `STATUS.md`
10. latest stage-specific QA/reconciliation record
11. older historical planning/audit documents

Historical prototype/v1 files must not override a later failure reconciliation or v2 record.

## 4. Accuracy-enforcement rule — mandatory

Before a science deck may be called `INTERNAL_QA_PASS`:

1. freeze exact student-facing copy in `production/SLIDE_COPY_V*.md`;
2. follow chapter `TERMINOLOGY_LOCK.md`;
3. run student-facing terminology lint where practical;
4. enforce high-risk `DIAGRAM_CONTRACTS.md`;
5. run programmatic geometry assertions where practical;
6. render and inspect each high-risk slide individually;
7. run overflow/render/export checks;
8. test exact PPTX in Microsoft PowerPoint when user-side PowerPoint is available.

A montage-only review or `slides_test.py` PASS is never sufficient science QA.

Canonical workflow:

`ACCURACY_ENFORCEMENT.md`

## 5. Bangla-first classroom language

Student-facing slides use textbook-facing Bangla first.

- full Bangla term is primary;
- English is optional parenthetical support or a proper resource name;
- symbols such as `i`, `r`, `C` are introduced after their Bangla meaning;
- standalone English acronyms such as `TIR` are not allowed as the primary Class-8 teaching term;
- questions/instructions must be complete, standalone-readable sentences.

Canonical policy:

`CLASSROOM_LANGUAGE_POLICY.md`

## 6. Renderer route — already decided

Current default deck-production route:

**Controlled PptxGenJS -> deterministic scientific overlays/geometry -> accuracy/render QA -> optional Canva controlled-import finishing -> verified PPTX + verified PDF fallback.**

- PptxGenJS: primary science-deck authoring/rendering route.
- Canva: realistic visual asset generation/finishing where useful; not science authority.
- Beautiful.ai: low-risk prototype/layout inspiration only.

## 7. Visual asset route

For photos/realistic physical-object visuals, default priority:

1. verified existing real/authoritative/open/licensed visual;
2. connected Canva / Canva AI / Canva Pro;
3. another connected/legal external visual source/generator;
4. programmatic/SVG/Hyperagent deterministic construction;
5. ChatGPT-native image generation only by explicit user request/approved exception.

Preferred separation:

**Canva/external source = realistic physical base**

**PptxGenJS/SVG = rays, normals, angles, labels, scales, graphs, notation and other science-critical geometry**

## 8. Physical realism + science clarity

Real physical objects should look recognizably real when practical, but photorealism never outranks scientific clarity.

When geometry matters:

- prefer straight-on / orthographic / side / cross-sectional views;
- avoid perspective that conflicts with 2D overlays;
- use realistic-object + deterministic schematic hybrid when clearer;
- use pure schematic geometry when realism would reduce clarity.

## 9. PowerPoint compatibility / dynamic engagement

- PowerPoint repair/recovery warning = hard FAIL;
- test exact user-facing PPTX when available;
- after normalization/resave, retest links/reveal/interaction;
- staged deterministic reveals are preferred over fragile native animation when equivalent;
- every important online/interactive element needs a static fallback;
- concept-heavy lessons must not become static by accident.

## 10. Simulation rule

Simulation selection is multi-source and concept-fit driven, not PhET-only.

Compare reputable options such as PhET, The Physics Classroom, GeoGebra, Open Source Physics/ComPADRE and other suitable sources. Use one best-fit resource unless a second serves a distinct instructional role.

## 11. Source/science rule

NCTB controls curriculum/scope/exam context, not automatic scientific truth. Material scientific claims are verified against current authoritative sources; mismatches are documented.

## 12. Timing rule

For a 60-minute class:

- CORE: about 40–45 min
- FLEX: about 5–10 min
- planned CORE + FLEX: about 50–55 min
- contingency: 5–10 min unallocated
- STRETCH: appendix/enrichment only

## 13. Artifact persistence

Follow `ARTIFACT_PERSISTENCE.md`.

For high-risk controlled production preserve:

- exact slide-copy lock;
- generator/build source or reproducible specification;
- artifact fingerprints;
- terminology lint/checker source;
- diagram-contract source/checker;
- asset provenance;
- dynamic implementation manifest;
- PowerPoint compatibility status;
- export/fallback QA.

## 14. End-of-stage checkpoint

**Finish -> record -> then continue.**

The next chat must be able to continue from GitHub without needing the previous transcript.
