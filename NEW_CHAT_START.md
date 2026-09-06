# New Chat Recovery Protocol

Version: 4.2
Last revised: 2026-09-06
Status: **ACTIVE — POST-RT-01 / POST-PILOT-COMPATIBILITY / CANVA-FIRST VISUAL ROUTING**

## 1. Verify repository identity first

Authorized write repository:

`iqbalhimel004/science-slides`

Do not write to any other connected repository.

## 2. Current first-pilot recovery sequence

For the active first pilot chapter, read in this order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. `VISUAL_ASSET_ROUTING.md`
5. `PHYSICAL_VISUAL_REALISM_POLICY.md`
6. `CLASSROOM_LANGUAGE_POLICY.md`
7. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
8. `SIMULATION_RESOURCE_ROUTING.md`
9. `ARTIFACT_PERSISTENCE.md`
10. active chapter `STATUS.md`
11. active lesson storyboard/resources/latest production QA and production manifests
12. deeper policy/template files only when the current task requires them

Do **not** restart renderer selection. RT-01 is complete.

## 3. Canonical state / precedence

GitHub is the durable source of truth. If old chat history or older repository wording conflicts with current policy, use this precedence:

1. `CURRENT_STATE.md`
2. `RENDERER_ROUTING.md`
3. `VISUAL_ASSET_ROUTING.md`
4. `PHYSICAL_VISUAL_REALISM_POLICY.md`
5. `CLASSROOM_LANGUAGE_POLICY.md`
6. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
7. active chapter `STATUS.md`
8. latest stage-specific QA/reconciliation record
9. older historical planning/audit documents

Historical pre-RT-01 or pre-pilot-production wording must not override current routing, compatibility, language, realism or visual-asset rules.

## 4. Renderer route — already decided

Current default deck-production route:

**Controlled PptxGenJS authoring/rendering → deterministic scientific overlays/geometry → rendered QA → optional Canva controlled-import finishing → verified PPTX + verified PDF fallback.**

- PptxGenJS: primary science-deck authoring/rendering route.
- Canva: optional finishing/editing after controlled import; native AI is not the science authority.
- Beautiful.ai: low-risk prototype/layout inspiration only.

## 5. Visual asset route — refined after Lesson 1 pilot

For photos/realistic physical-object visuals, the default is **not ChatGPT-native image generation**.

Use this priority:

1. verified existing real/authoritative/open/licensed visual when suitable;
2. connected Canva / Canva AI / Canva Pro generation or licensed asset library;
3. another connected/legal external visual source/generator when advantageous;
4. programmatic/SVG/Hyperagent construction for deterministic scientific visuals;
5. ChatGPT-native image generation only when the user explicitly asks for it or explicitly approves an exception because the other routes are unsuitable/unavailable.

The preferred pattern is:

**Canva/external source = realistic physical base**

**PptxGenJS/SVG = science-critical rays, normals, angles, labels, scales, notation and geometry**

Canva AI may generate unlabeled realistic glass, lenses, mirrors, camera/apparatus, fibre, real-world scenes and orthographic base visuals. It must not be trusted to author final science-critical ray paths, labels, angles, graphs, circuit topology, equations or exact anatomical relationships.

Canonical policy:

`VISUAL_ASSET_ROUTING.md`

## 6. Physical realism + scientific clarity

Real physical objects should look recognizably real when practical, but photorealism never outranks scientific clarity.

When geometry matters:

- prefer straight-on / orthographic / side / cross-sectional realistic views;
- avoid dramatic perspective that conflicts with deterministic overlays;
- use a hybrid realistic-object + schematic layout when that is clearer;
- use pure deterministic schematic geometry when realism would distract.

Lesson 1 glass-slab evidence established this rule: flat schematic looked artificial; 3D perspective looked realistic but conflicted with 2D optics; orthographic realistic glass + deterministic rays was accepted.

Canonical policy:

`PHYSICAL_VISUAL_REALISM_POLICY.md`

## 7. Bangla-first classroom language

Student-facing slides use textbook-facing Bangla first. English is optional, normally only as a first parenthetical introduction or proper resource/product name.

Examples:

- বিভেদতল (Interface)
- আপতন বিন্দু
- অভিলম্ব (Normal)
- আপতন কোণ (i)
- আপতিত রশ্মি
- প্রতিসরণ কোণ (r)
- প্রতিসরিত রশ্মি
- প্রতিফলিত রশ্মি
- লম্ব আপতন
- আলোকীয় ঘনত্ব

Canonical policy:

`CLASSROOM_LANGUAGE_POLICY.md`

## 8. Pilot compatibility and visual-engagement controls

The first Lesson 1 build exposed two important failures:

1. Microsoft PowerPoint initially showed a repair warning despite internal/render checks;
2. the deck was science-correct but too static/utilitarian.

Mandatory implications:

- PowerPoint repair/recovery warning = hard FAIL;
- test the exact user-facing PPTX in Microsoft PowerPoint when available;
- after normalization/resave, retest reveal/animation/interaction/link behaviour;
- storyboard-planned dynamic teaching elements must not silently disappear;
- static presentation must be intentional;
- staged deterministic reveals are preferred over fragile native animation when pedagogically equivalent;
- every important online/interactive element needs a static fallback.

Canonical policy:

`PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`

## 9. Simulation rule

Simulation selection is multi-source and concept-fit driven, not PhET-only.

Candidates may include PhET, The Physics Classroom, GeoGebra, Open Source Physics/ComPADRE and other reputable sources. Compare per concept and choose the best verified option. Do not add multiple simulations merely for variety.

Canonical policy:

`SIMULATION_RESOURCE_ROUTING.md`

## 10. Source/science rule

NCTB controls curriculum/scope/exam context, not automatic scientific truth. Material scientific claims are verified against current authoritative sources; mismatches are documented.

## 11. Timing rule

For a 60-minute class:

- CORE: about 40–45 min
- FLEX: about 5–10 min
- planned CORE + FLEX: about 50–55 min
- contingency: 5–10 min unallocated
- STRETCH: appendix/enrichment only

Media setup, interaction, prediction/reveal and simulation debrief count as real time.

## 12. Artifact persistence rule

Follow `ARTIFACT_PERSISTENCE.md`.

For controlled production preserve:

- generator/build source or reproducible specification;
- artifact fingerprints;
- asset provenance/generation route;
- deterministic visual source/specs;
- dynamic implementation manifest where relevant;
- PowerPoint compatibility status;
- export/fallback QA.

## 13. External prompt rule

Any external-tool prompt must be one self-contained fenced code block.

## 14. End-of-stage checkpoint

**Finish → record → then continue.**

The next chat must be able to continue from GitHub without needing the previous transcript.
