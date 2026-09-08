# New Chat Recovery Protocol

Version: 5.1
Last revised: 2026-09-08
Status: **ACTIVE — SCIENCE SLIDES PRODUCTION SYSTEM V2.1**

## 1. Repository boundary

Authorized write repository:

`iqbalhimel004/science-slides`

Do not write to any other connected repository.

## 2. Mandatory recovery order

For active production work, read in this order:

1. `CURRENT_STATE.md`
2. `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
3. `AGENTS.md`
4. `OPERATING_BRIEF.md`
5. `QUALITY_GATES.md`
6. `REFERENCE_LOCKED_VISUAL_PIPELINE.md`
7. `ACCURACY_ENFORCEMENT.md`
8. `RENDERER_ROUTING.md`
9. `VISUAL_ASSET_ROUTING.md`
10. `CLASSROOM_LANGUAGE_POLICY.md`
11. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
12. `SIMULATION_RESOURCE_ROUTING.md`
13. `ARTIFACT_PERSISTENCE.md`
14. active chapter `STATUS.md`
15. active chapter `TERMINOLOGY_LOCK.md` if present
16. active chapter/lesson `DIAGRAM_CONTRACTS.md` or semantic contracts if present
17. active lesson `STORYBOARD.md`, `RESOURCES.md`, latest copy lock/structured spec/dynamic manifest/latest QA/failure record
18. deeper historical files only when needed

Do not depend on prior chat memory for current state, copy, terminology, science geometry, user approval, artifact identity or next action.

## 3. Precedence

If files conflict:

1. `CURRENT_STATE.md`
2. `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
3. later dated durable decision/addendum
4. active chapter terminology/diagram/semantic contracts
5. `NEW_CHAT_START.md` / `AGENTS.md`
6. current source/renderer/compatibility policies
7. active chapter `STATUS.md`
8. latest stage-specific QA/failure record
9. older historical build/audit records

A later user rejection or direct-pixel failure supersedes an older internal PASS.

## 4. No-reset rule

A production-system revision does not invalidate still-correct prior work.

For an in-progress lesson:

- preserve verified research, source reconciliation, storyboard, copy, terminology, accepted assets and accepted science;
- classify production artifacts as `REUSE_AS_IS`, `REUSE_AS_REFERENCE`, `PORT_TO_CONTROLLED_COMPONENT`, `REPAIR`, or `RETIRE`;
- rebuild only defective/fragile/unreproducible layers;
- continue from the nearest valid checkpoint.

Current Chapter 11:

- Lesson 1 = completed/user-approved baseline, preserve;
- Lesson 2 = continue without reset from current high-risk migration;
- Lesson 3+ = use v2.1 from the start.

## 5. Risk-routed production

Classify visual/scientific representations as R1/R2/R3.

R3 visuals carry scientific meaning through geometry/topology/scale/position/notation/structure and require controlled science authority, semantic contracts and individual rendered inspection.

Unconstrained generative AI must not decide R3 science.

## 6. Mandatory science controls

Before `INTERNAL_QA_PASS`, apply as relevant:

- authoritative science verification;
- source freshness class: `STABLE`, `REVISION_SENSITIVE`, or `CURRENT_DATA`;
- exact student-facing copy/structured spec;
- terminology lock + lint;
- quantitative/unit/dimensional checks;
- safety review for experiments/demos;
- model/idealization/scale disclosure where needed;
- semantic/diagram contracts for R3;
- automated structural/text/layout QA;
- direct pixel QA of all R3 slides;
- post-render student-inference science review;
- accessibility/multimodal review;
- compatibility/export/offline QA.

A montage-only review or `slides_test.py` PASS is never sufficient science QA.

## 7. Accessibility and classroom safety

Critical meaning must not rely only on color, motion or audio. Verify contrast, readable labels, line-style/text redundancy, captions/summary for important media, and static/final states for essential animation meaning.

Any live experiment/demo with plausible heat, chemical, electrical, glass, laser/bright-light, pressure, biological, sharp-object or mechanical risk requires explicit safety review. If safety cannot be established, use a safer/static alternative.

## 8. Visual/media routing

Use the adaptive router in Production System v2.1.

Priority for contextual scientific imagery:

1. authoritative real/open/licensed image;
2. authoritative educational/scientific illustration;
3. controlled AI-generated context when appropriate;
4. controlled schematic when clearer.

Keep science-critical labels/geometry/notation controlled and editable where practical.

## 9. Repair circuit breaker

- first material failure -> source-level repair;
- second material failure -> clean rebuild, no micro-patching;
- rebuild still fails -> change representation route;
- ~20–30 minutes of non-converging repair -> route change.

## 10. Selective revalidation

Do not rerun every expensive stage after a small change. Use the selective-invalidation matrix in Production System v2.1 and recheck the affected chain only.

## 11. User review

The user is not the primary internal QA detector.

Before user review: build -> automated QA -> semantic science QA -> pixel QA -> internal repair -> second internal QA.

Ask the user mainly for final acceptance, subjective visual choice or approval of a new visual family. Connector-required save confirmation is an exception.

## 12. Dynamics/simulation

Preferred science-critical progression:

1. `PREDICT_THEN_REVEAL`
2. `STAGED_REVEAL`
3. deterministic diagram states
4. native animation only if materially useful and testable
5. video/animation for continuous motion
6. simulation for parameter manipulation

Every classroom-critical online/dynamic resource needs a static/offline fallback.

## 13. PowerPoint/export

PowerPoint repair/recovery warning = hard FAIL.

If exact PowerPoint testing is unavailable, use explicit status `DELIVERY_COMPATIBILITY_PENDING`; never claim a tested PASS.

Verify PDF/static fallback separately.

## 14. Golden-master regression

When a reusable R3 component changes, rerender and compare with its approved golden reference. Material geometry/label/readability changes require targeted re-QA.

A new R3 component family receives targeted independent second review before becoming a reusable golden master.

## 15. Status ladder

Use:

`DRAFT -> CONTENT_VERIFIED -> CONTENT_FROZEN -> BUILT -> INTERNAL_QA_PASS -> USER_ACCEPTED -> DELIVERY_VERIFIED -> CLASSROOM_READY`

Use explicit pending/fail states instead of overstating completion.

## 16. Current Lesson 2 next action

Do not restart Lesson 2 and do not return to Canva raster micro-patching as primary production.

Current migration sequence:

1. recover current Lesson 2 locks/specs/QA;
2. rebuild/port HRV-07 as controlled optical-fibre component;
3. port HRV-05/06 into reusable controlled optics components;
4. retain HRV-01..04 validated references/assets unless regression evidence appears;
5. build controlled high-risk validation pack with PptxGenJS + deterministic science layers + editable labels;
6. run automated, semantic and direct-pixel QA internally until PASS;
7. show one internally-passed pack for user acceptance;
8. assemble full Lesson 2 from already-validated work;
9. run full compatibility/export/offline QA;
10. checkpoint before Lesson 3.

## 17. End-of-stage rule

**Finish -> record -> then continue.**

A fresh chat must be able to continue from GitHub without the previous transcript.
