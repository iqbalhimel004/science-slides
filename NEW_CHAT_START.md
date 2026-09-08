# New Chat Recovery Protocol

Version: 5.3
Last revised: 2026-09-09
Status: **ACTIVE — SCIENCE SLIDES PRODUCTION SYSTEM V2.1 — LESSON 3 STARTUP — REGRESSION-HARDENED**

## 1. Repository boundary

Authorized write repository:

`iqbalhimel004/science-slides`

Do not write to any other connected repository.

## 2. Mandatory recovery order

For active production work, read in this order:

1. `CURRENT_STATE.md`
2. `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
3. `LESSON_2_FAILURE_REGISTRY_AND_REGRESSION_TESTS.md`
4. `TARGETED_REVISION_SCOPE_LOCK.md`
5. `SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`
6. `AGENTS.md`
7. `OPERATING_BRIEF.md`
8. `QUALITY_GATES.md`
9. `REFERENCE_LOCKED_VISUAL_PIPELINE.md`
10. `ACCURACY_ENFORCEMENT.md`
11. `RENDERER_ROUTING.md`
12. `VISUAL_ASSET_ROUTING.md`
13. `CLASSROOM_LANGUAGE_POLICY.md`
14. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
15. `SIMULATION_RESOURCE_ROUTING.md`
16. `ARTIFACT_PERSISTENCE.md`
17. active chapter `STATUS.md`
18. active chapter `TERMINOLOGY_LOCK.md`
19. active chapter `DIAGRAM_CONTRACTS.md`
20. active lesson `LESSON_PLAN.md`
21. active lesson `STORYBOARD.md`
22. active lesson `RESOURCES.md`
23. active lesson `QA.md`
24. active lesson semantic contracts
25. active lesson production handoff
26. chapter `SOURCE_MAP.md`
27. chapter `SOURCE_ISSUES.md`
28. deeper historical files only when needed

Do not depend on prior chat memory for current state, user acceptance, copy, terminology, science geometry, artifact identity or next action.

## 3. Precedence

If files conflict:

1. `CURRENT_STATE.md`
2. `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
3. `LESSON_2_FAILURE_REGISTRY_AND_REGRESSION_TESTS.md` for known failure prevention
4. `TARGETED_REVISION_SCOPE_LOCK.md` for targeted edits
5. later dated durable decision/addendum
6. active chapter terminology/diagram/semantic contracts
7. active lesson handoff/current structured spec
8. `NEW_CHAT_START.md` / `AGENTS.md`
9. current renderer/source/compatibility policies
10. active chapter `STATUS.md`
11. latest stage-specific QA/failure record
12. older historical build/audit records

A later user rejection/direct-pixel failure supersedes an older internal PASS.

## 4. Current Chapter 11 state

- Lesson 1 = completed/user-approved baseline; preserve.
- Lesson 2 = latest accepted-for-continuation artifact is `Lesson2_Controlled_Full_v0_5`; do not reopen unless the user requests a targeted correction or classroom evidence reveals a defect.
- Lesson 2 exact PowerPoint/projector/post-class gates remain pending unless explicitly tested later.
- Lesson 3 = authorized next work.
- Lesson 4 = on hold.

## 5. No-reset rule

A production-system revision does not invalidate still-correct prior work.

For an in-progress lesson:

- preserve verified research, source reconciliation, storyboard, copy, terminology, accepted assets and accepted science;
- classify production artifacts as `REUSE_AS_IS`, `REUSE_AS_REFERENCE`, `PORT_TO_CONTROLLED_COMPONENT`, `REPAIR`, or `RETIRE`;
- rebuild only defective/fragile/unreproducible layers;
- continue from the nearest valid checkpoint.

## 6. Known-failure regression rule

Before any new R3 validation pack or final deck is shown to the user:

1. read `LESSON_2_FAILURE_REGISTRY_AND_REGRESSION_TESTS.md`;
2. identify which known failure patterns apply to the active lesson;
3. include those checks in the active QA record;
4. verify them against source geometry, semantic contracts, rendered pixels, or artifact comparison as appropriate;
5. any applicable unanswered regression item blocks `INTERNAL_QA_PASS`.

Known Lesson 2 failures are regression tests, not merely historical notes.

## 7. Risk-routed production

Classify visual/scientific representations as R1/R2/R3.

R3 visuals carry scientific meaning through geometry/topology/scale/position/notation/structure and require controlled science authority, semantic contracts and individual rendered inspection.

Unconstrained generative AI must not decide R3 science.

## 8. Mandatory science controls

Before `INTERNAL_QA_PASS`, apply as relevant:

- authoritative science verification;
- source freshness class;
- exact student-facing copy/structured spec;
- terminology lock + lint;
- quantitative/unit/dimensional checks;
- safety review where needed;
- model/idealization/scale disclosure where needed;
- semantic/diagram contracts for R3;
- automated structural/text/layout QA;
- direct individual pixel QA of all R3 slides;
- post-render student-inference science review;
- accessibility/multimodal review;
- known-failure regression gate;
- compatibility/export/offline QA.

Montage-only review or `slides_test.py` PASS is never sufficient science QA.

## 9. Slide-surface rule

Visible slide = student-facing learning surface.

Show necessary diagrams/images, concise facts, labels, comparisons and media where useful.

Do not show teacher scripts, internal slide IDs, QA labels, workflow jargon, `শিক্ষক বলবেন`, `বোর্ডে বলার মূল কথা`, or visible `FLEX` labels.

Teacher narration/board-work guidance belongs in speaker notes.

## 10. Targeted-revision scope lock

When the user requests one narrow correction, treat it as a hard boundary.

- change only the requested target;
- preserve unrelated slides/content;
- compare unaffected rendered slides against the prior artifact when practical;
- if the tool would force collateral changes, stop and explain before making them.

## 11. External-review rule

Gemini/other AI/reviewer findings are useful but advisory.

Independently verify against authoritative science/contracts before applying. Classify recommendations as factual error, science clarification, pedagogical option, or unsupported suggestion. Do not change user-accepted correct material solely because another AI prefers a different presentation.

## 12. Dynamics/simulation

Preferred order:

1. `PREDICT_THEN_REVEAL`
2. `STAGED_REVEAL`
3. deterministic diagram states
4. native animation only if useful/testable
5. video/animation for continuous motion
6. simulation for parameter manipulation

Any classroom-critical online/dynamic element requires a static/offline fallback.

## 13. Lesson 3 startup sequence

Do not immediately assemble the full Lesson 3 deck.

First:

1. audit existing Lesson 3 `LESSON_PLAN.md`, `STORYBOARD.md`, `RESOURCES.md`, `QA.md` against Production System v2.1 and the Lesson 2 regression registry;
2. verify NCTB/source-gap wording and current science;
3. create/update a Bangla-first structured copy/spec;
4. create Lesson 3-specific semantic/diagram contracts where chapter contracts are insufficient;
5. create a Lesson 3 prebuild regression checklist referencing applicable F-xxx items from `LESSON_2_FAILURE_REGISTRY_AND_REGRESSION_TESTS.md`;
6. build a small R3 validation pack containing at least:
   - converging/diverging lens + focus/focal length;
   - real vs virtual image convention;
   - magnifying-glass ray construction;
   - human-eye cross-section;
   - accommodation;
   - myopia/hyperopia corrective-lens concept;
7. run automated + semantic + individual pixel + regression QA internally until PASS;
8. show one internally-passed validation pack for user acceptance;
9. after acceptance, build the full Lesson 3 controlled PPTX/PDF;
10. run full structural/text/science/pixel/accessibility/regression/export QA;
11. record and checkpoint before Lesson 4.

## 14. Lesson 3 hard science reminders

- convex/converging: parallel rays toward focus;
- concave/diverging: parallel rays spread;
- no lens formula/sign convention/power calculation in CORE;
- real vs virtual must use correct solid-ray/dashed-extension convention;
- magnifier: object inside focal length; virtual, erect, enlarged image;
- pupil is an opening in iris;
- cornea supplies most initial refractive focusing;
- crystalline lens fine-tunes focus by accommodation;
- accommodation must not imply lens translation toward/away from retina;
- retina is light-sensitive receiving layer;
- myopia correction = diverging/concave lens;
- hyperopia correction = converging/convex lens;
- spectacles material is supplementary support for an NCTB learning-outcome gap.

## 15. PowerPoint/export

PowerPoint repair/recovery warning = hard FAIL.

If exact PowerPoint testing is unavailable, use `DELIVERY_COMPATIBILITY_PENDING`; never claim a tested PASS.

Verify PDF/static fallback separately.

## 16. End-of-stage rule

**Finish -> record -> then continue.**

A fresh chat must be able to continue from GitHub without the previous transcript.
