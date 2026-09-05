# Chapter-wide Storyboard / Resource / Duplication Audit — Class 8 Science, Chapter 11: আলো

Date: 2026-09-06
Status: PRE_GEMINI_GATE_B_AUDIT_COMPLETE_WITH_TARGETED_NOTES
Scope: Lessons 1–4 storyboard drafts, resource maps, coverage matrix, source issues and Gate-A-reconciled science plan

## Executive verdict

**PASS_TO_GEMINI_GATE_B_WITH_TARGETED_NOTES**

All four lessons now have slide-level storyboards and resource maps. The approved four-lesson dependency chain remains coherent, no textbook-body topic is unmapped, and no material duplication requires lesson-boundary changes. The main remaining issues are pre-freeze verification tasks: actual scientific diagram geometry, final digital-camera source pinning if L4-S11 stays CORE, NCTB exercise redraw verification, and renderer-level density/readability checks.

## Timing audit

| Lesson | CORE | FLEX | Planned | Contingency | Verdict |
|---|---:|---:|---:|---:|---|
| L1 | 43 | 7 | 50 | 10 | PASS |
| L2 | 44 | 8 | 52 | 8 | PASS |
| L3 | 42 | 8 | 50 | 10 | PASS |
| L4 | 46 | 8 | 54 | 6 | PASS_WITH_NOTE |

Chapter planned CORE + FLEX total: **206 minutes** across four classes.

L4 is closest to the planning ceiling. Do not add more CORE content there before Gate B. If later rendering/classroom simulation reveals overload, first candidates to compress/move are the explicit film-vs-digital comparison (L4-S11) or part of the whole-chapter synthesis, but only after preserving the required misconception guardrail.

## Dependency / continuity audit

### L1 → L2
PASS.

- L1 establishes medium/interface/normal, ray vocabulary, bending direction, optical-density clarification and normal-incidence exception.
- L2 uses these directly for apparent position, critical angle and TIR without unnecessary reteaching.

### L2 → L3
PASS.

- L2 closes TIR/optical fibre.
- L3 intentionally shifts from refraction at interfaces to lens/image prerequisites.
- No hidden dependency on numerical refractive index or Snell law is introduced.

### L3 → L4
PASS.

- L3 supplies real/virtual image vocabulary, converging-lens behavior and eye focusing.
- L4 retrieves `real/inverted` before camera image formation and then compares camera with the eye.
- Gate-A correction on eye-camera mechanism is preserved.

## Duplication audit

No material duplication requiring removal.

### Purposeful retrieval/reuse

- `real/virtual` and lens behavior from L3 are retrieved briefly in L4-S01/L4-S04 — justified prerequisite retrieval.
- cornea/lens focusing role appears in L3 and again in L4 comparison — justified because L4 is explicitly comparative.
- TIR condition appears in L2 several times across build → hinge → fibre application — justified conceptual consolidation, not redundant lecture.
- chapter summary/exit content repeats key concepts by design and should remain concise.

### Watch for rendering-level redundancy

- Avoid repeating identical explanatory prose on L3-S09, L3-S10 and L4-S09. Use visuals and short labels rather than near-duplicate paragraphs.
- Avoid repeating full film-camera chemistry on L4-S11; S11 should only distinguish film vs digital recording.

## Coverage audit

`COVERAGE_MATRIX.md` now maps all textbook-body items C11-001 through C11-021 to concrete slides or an explicit source-gap treatment.

Key results:

- refraction concept/rules: covered in L1;
- everyday apparent-position applications: covered in L2;
- mirage: covered with current-science clarification in L2;
- critical angle/TIR/optical fibre: covered in L2;
- magnifying glass/lens prerequisite: covered in L3;
- human eye: covered in L3 with cornea/lens clarification;
- spectacles outcome gap: handled in L3 as clearly labelled verified supplement;
- film camera: covered in L4 with context label;
- eye-camera comparison: covered in L4 with analogy limits;
- chapter exercises/practice: distributed across exits/FLEX/guided practice.

No textbook-body topic is currently missing from the storyboard map.

## Source / science audit before Gate B

### Resolved and retained

- SI-11-001 spectacles source gap: handled as supplementary, not falsely attributed to textbook body.
- SI-11-002 normal-incidence nuance: retained in L1.
- SI-11-003 slab geometry limit: retained in L1 FLEX.
- SI-11-004 film-camera context: retained in L4.
- SI-11-005 mirage gradient clarification: retained in L2.
- SI-11-006 cornea/lens focusing roles: retained in L3/L4.
- SI-11-007 eye-camera analogy limit: retained in L4.

### Still requiring pre-freeze evidence/inspection

1. final drawn ray geometry for L1/L2/L3/L4;
2. final eye anatomy labels and accommodation illustration;
3. final myopia/hyperopia corrective-lens ray diagrams;
4. final film-processing wording after visual compression;
5. current authoritative source pin for the simple digital-camera electronic-recording statement if L4-S11 remains CORE;
6. NCTB exercise-based redraws checked against visible source pages.

## Pedagogy / cognitive-load audit

PASS_FOR_GATE_B.

Strengths:

- L1 uses phenomenon-first refraction observation after Gate A reconciliation;
- L2 progressively builds apparent position → critical angle → TIR;
- L3 groups eye anatomy by function rather than label dumping;
- L4 splits shared function from analogy limits rather than using a one-to-one comparison table alone;
- all four lessons have retrieval/response/hinge/summary/exit structures;
- no lesson requires STRETCH for successful completion.

Watch points:

- L3 eye visuals may still become label-dense after rendering; large-font staging is required.
- L4 film chemistry + comparison + synthesis creates the densest lesson; renderer must not shrink text to fit.
- decorative visuals must not compete with ray/anatomy/process explanations.

## Resource audit

All four lessons now have explicit resource maps:

- L1: `lessons/lesson-01/RESOURCES.md`
- L2: `lessons/lesson-02/RESOURCES.md`
- L3: `lessons/lesson-03/RESOURCES.md`
- L4: `lessons/lesson-04/RESOURCES.md`

CORE is offline-capable across all lessons.

Online/interactive resources are optional/FLEX only. Static fallbacks are specified for critical diagrams/interactions.

High-risk scientific visuals are designated custom/deterministic rather than relying on generic stock art.

## Visual rhythm audit

PASS at storyboard level.

The chapter deliberately varies:

- visual hook
- live demonstration
- progressive ray diagrams
- comparison panels
- apparent-position constructions
- gradient mirage diagram
- TIR sequence
- fibre cutaway
- lens/image constructions
- staged eye anatomy
- process diagram for film chemistry
- eye-camera functional comparison
- final concept map

Risk: actual renderer may over-normalize layouts. RT-01 and later visual QA must preserve functional variation without creating stylistic chaos.

## Gate B review targets

Gemini Gate B should focus specifically on:

1. slide-level scientific wording and ray/diagram specifications;
2. whether L1 photon note is still too prominent for Class 8;
3. mirage wording/visual model;
4. critical angle vs TIR distinction;
5. magnifier object-position and image-type wording;
6. eye anatomy/focusing/accommodation wording;
7. spectacles source-gap supplement boundaries;
8. camera aperture/shutter/exposure distinctions;
9. film-camera chemistry accuracy/context;
10. eye-camera analogy limits;
11. L4 density/timing risk;
12. cross-lesson duplication or missing prerequisite;
13. any remaining outdated-textbook statement that slipped into the storyboard;
14. missing coverage relative to the chapter and current science.

## Final pre-Gate-B action status

- [x] all four lesson plans exist
- [x] all four storyboards exist
- [x] all four resource maps exist
- [x] all four storyboard-level QA records exist
- [x] all textbook-body coverage rows mapped to slide IDs/dispositions
- [x] chapter-wide continuity/duplication audit complete
- [x] timing recomputed after L4 storyboard refinement
- [ ] Gemini Gate B bundle generated from current canonical files
- [ ] Gemini Gate B external review returned
- [ ] Gate B findings independently reconciled
- [ ] final G1–G7 pass and content freeze

## Next authorized action

Generate a **fresh single-file downloadable Gemini Gate B review bundle** from the current canonical GitHub state, following `GEMINI_REVIEW_WORKFLOW.md`. The bundle must include this audit, all four storyboards/resource maps/QA records, chapter analysis, source map/issues, coverage matrix, current state and the Gate B instructions. After the user runs Gemini and returns the response, save the raw review and independently reconcile every material finding before content freeze.
