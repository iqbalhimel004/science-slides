# Agent Operating Rules

Version: 5.2
Last revised: 2026-09-09
Status: **ACTIVE — PRODUCTION SYSTEM V2.1 — LESSON 3 STARTUP — REGRESSION-HARDENED**

## Absolute write boundary

For this project, writes are authorized only to:

`iqbalhimel004/science-slides`

Before every GitHub write, verify the exact `repository_full_name`. Abort if it differs.

## Canonical memory and startup

GitHub is the durable source of truth. Chat history is temporary context.

For any active production lesson, recover state in this order:

1. `CURRENT_STATE.md`
2. `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
3. `LESSON_2_FAILURE_REGISTRY_AND_REGRESSION_TESTS.md`
4. `TARGETED_REVISION_SCOPE_LOCK.md`
5. `SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`
6. `NEW_CHAT_START.md`
7. `OPERATING_BRIEF.md`
8. `QUALITY_GATES.md`
9. `RENDERER_ROUTING.md`
10. active chapter `STATUS.md`
11. active chapter terminology/diagram contracts
12. active lesson plan/storyboard/resources/QA/structured spec/semantic contracts/handoff/latest production QA
13. deeper policy/template files only when relevant

Do not rely on prior chat memory for current artifact state, terminology, copy, geometry, production route, user acceptance, or remaining work.

## Precedence rule

If older files conflict, prefer:

1. `CURRENT_STATE.md`
2. `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
3. `LESSON_2_FAILURE_REGISTRY_AND_REGRESSION_TESTS.md` for known failure prevention
4. `TARGETED_REVISION_SCOPE_LOCK.md` for targeted edits
5. later dated durable decision/addendum
6. active chapter/lesson terminology and semantic/diagram contracts
7. current lesson handoff/structured spec
8. `NEW_CHAT_START.md`
9. current renderer/source/compatibility policies
10. chapter `STATUS.md`
11. latest stage-specific QA/failure record
12. historical planning/audit artifacts

A later user rejection or direct-pixel failure supersedes an older internal PASS.

## No-reset rule

A workflow revision does not cancel valid completed work.

For in-progress lessons:

- preserve verified analysis, sources, storyboard, copy, terminology, accepted assets and accepted science;
- classify prior production as `REUSE_AS_IS`, `REUSE_AS_REFERENCE`, `PORT_TO_CONTROLLED_COMPONENT`, `REPAIR`, or `RETIRE`;
- rebuild only defective/fragile/unreproducible layers;
- continue from the nearest valid checkpoint.

Current Chapter 11:

- Lesson 1: completed/user-approved baseline; preserve;
- Lesson 2: `Lesson2_Controlled_Full_v0_5` accepted as sufficient to continue; do not reopen unless user/classroom evidence requires a targeted correction;
- Lesson 3: authorized next work under Production System v2.1;
- Lesson 4: on hold.

## Known-failure regression rule

`LESSON_2_FAILURE_REGISTRY_AND_REGRESSION_TESTS.md` is mandatory before any new R3 validation pack or final deck is shown to the user.

Required behavior:

1. identify which F-xxx failure patterns apply to the active lesson;
2. add those checks to the lesson prebuild/QA checklist;
3. verify each applicable check through semantic/source geometry, rendered pixels, or exact artifact comparison;
4. record PASS/FAIL evidence;
5. any applicable unanswered regression item blocks `INTERNAL_QA_PASS`.

Known failures are executable/checkable regression gates, not background reading.

## Targeted-revision hard scope lock

When the user requests a narrow correction, treat it as a hard edit boundary.

Examples:

- `শুধু কোণ ঠিক কর`;
- `শুধু ছবিটা বদলাও`;
- `চিত্র ছাড়া অন্য কিছু পরিবর্তন করবেনা`.

Required behavior:

1. start from latest accepted/reviewed artifact;
2. change only requested target(s);
3. preserve all unrelated text/layout/notes/images/media/order;
4. revalidate only the affected chain;
5. compare unaffected rendered slides with prior artifact when practical;
6. do not make opportunistic redesigns or nearby cleanups.

If a broader change is necessary, propose it separately.

## Chapter intake non-negotiables

When a chapter PDF/screenshots are supplied:

1. verify identity/completeness/page order/readability/text-layer status;
2. do not silently infer missing/cropped/unreadable content;
3. analyze the complete visible chapter before deciding lesson count;
4. split by instructional load and concept boundaries, not page count;
5. visually verify critical textbook wording when extraction is uncertain;
6. create science/freshness/risk/safety/media maps before production;
7. obtain user approval of the lesson split before final deck production.

## 60-minute rule

- CORE: ~40–45 min
- FLEX: ~5–10 min
- CORE + FLEX: ~50–55 min planned
- contingency: 5–10 min intentionally unallocated
- STRETCH: appendix/enrichment only

Count questions, responses, board work, activities, media/simulation setup and debrief, transitions and exit checks as real time.

## Source discipline

- NCTB controls syllabus/scope/exam context, not automatic scientific truth.
- Material scientific claims require current authoritative verification as appropriate.
- Freshness and authority are separate: classify source-dependent claims as `STABLE`, `REVISION_SENSITIVE`, or `CURRENT_DATA`.
- Keep exam-facing wording separate from corrected/current-science explanation when necessary.
- Record source conflicts explicitly.
- Gemini/other AI/reviewer findings are advisory until independently verified against authoritative science/contracts.
- Classify external suggestions as `FACTUAL_ERROR`, `SCIENCE_CLARIFICATION`, `PEDAGOGICAL_OPTION`, or `UNSUPPORTED` before applying.

## Risk-routed production

Classify production visuals:

- R1 low risk;
- R2 medium risk;
- R3 high risk.

R3 visuals must use controlled/deterministic science authority and semantic tests. Unconstrained AI may provide context but must not decide geometry/topology/notation/scale/structure.

## Safety, models and accessibility

- live experiments/demos with plausible hazards require an explicit safety review;
- misleading simplifications require model/idealization/`not to scale` disclosure where appropriate;
- critical meaning must not depend only on color, motion or audio;
- verify contrast, readable labels and static/final states for essential dynamic meaning.

## Tool routing

- ChatGPT: lead content/pedagogy/source/QA/state coordination.
- PptxGenJS: primary controlled assembly/authoring route.
- Specialized SVG/code/chart/chemistry/anatomy routes: R3 asset generation as appropriate.
- Canva: optional finishing/context asset tool; not science authority.
- Beautiful.ai: low-risk prototyping/inspiration only.
- Hyperagent: specialist deterministic SVG/equation/interactive/QA work where useful.
- Gemini: targeted independent review/research at high-value gates; not duplicate primary authoring.
- NotebookLM: conditional source-grounded support.

## Repair circuit breaker

- first material failure -> source-level repair;
- second material failure -> stop micro-patching and clean rebuild;
- rebuild still fails -> change representation route;
- ~20–30 minutes of non-converging repair -> route-change trigger.

## Selective revalidation

Do not rerun every expensive QA stage after every change. Revalidate the affected chain only, using the selective-invalidation table in `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`.

## User-review rule

The user is not the primary internal defect detector.

Before user review:

1. build;
2. automated QA;
3. semantic science QA;
4. direct individual pixel QA of R3 slides;
5. known-failure regression QA;
6. adversarial student-inference review;
7. internal repair/rebuild;
8. second internal QA.

Ask the user mainly for final acceptance, subjective design choice, or approval of a new visual family. Connector-required save confirmation is an exception.

## Lesson 3 startup rule

Before full Lesson 3 assembly:

1. audit existing `LESSON_PLAN.md`, `STORYBOARD.md`, `RESOURCES.md`, `QA.md` against Production System v2.1 and the Lesson 2 failure registry;
2. verify NCTB/source-gap wording and current science;
3. create/update a Bangla-first structured copy/spec;
4. create lesson-specific semantic/diagram contracts where needed;
5. create a Lesson 3 prebuild regression checklist referencing applicable F-xxx items;
6. build and internally validate a compact R3 pack for lens action/focus, real-vs-virtual, magnifier, eye anatomy, accommodation, and spectacle correction;
7. show one internally-passed R3 pack for user acceptance;
8. only then assemble full Lesson 3.

Mandatory Lesson 3 guardrails include:

- magnifier object inside focal length;
- virtual image uses dashed backward extensions;
- pupil is an opening;
- cornea performs most initial refractive focusing;
- crystalline lens fine-tunes by accommodation;
- accommodation must not imply lens translation toward/away from retina;
- myopia uses diverging/concave correction;
- hyperopia uses converging/convex correction;
- spectacles content remains clearly supplementary to the NCTB body gap.

## Compatibility and persistence

- exact final PPTX must be PowerPoint-tested when available; repair/recovery warning = FAIL;
- if real PowerPoint testing is unavailable, use `DELIVERY_COMPATIBILITY_PENDING`;
- static/PDF fallback is mandatory for classroom-critical dynamic/online elements;
- source/build/component/test/provenance/fingerprint records must be durable in GitHub;
- do not commit font binaries, credentials or secrets.

## External-prompt rule

Any prompt the user must paste into an external tool must be provided as one self-contained fenced code block.

## Completion discipline

Use precise state labels. `CLASSROOM_READY` requires all applicable hard gates.

Universal stage rule:

**Finish -> record -> then continue.**
