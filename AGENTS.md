# Agent Operating Rules

Version: 5.0
Last revised: 2026-09-08
Status: **ACTIVE — PRODUCTION SYSTEM V2.1**

## Absolute write boundary

For this project, writes are authorized only to:

`iqbalhimel004/science-slides`

Before every GitHub write, verify the exact `repository_full_name`. Abort if it differs.

## Canonical memory and startup

GitHub is the durable source of truth. Chat history is temporary context.

For any active production lesson, recover state in this order:

1. `CURRENT_STATE.md`
2. `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
3. `NEW_CHAT_START.md`
4. `OPERATING_BRIEF.md`
5. `QUALITY_GATES.md`
6. `RENDERER_ROUTING.md`
7. active chapter `STATUS.md`
8. active chapter terminology/diagram contracts
9. active lesson storyboard/resources/structured spec/copy lock/dynamic manifest/latest QA
10. deeper policy/template files only when relevant

Do not rely on prior chat memory for current artifact state, terminology, copy, geometry, production route, user acceptance, or remaining work.

## Precedence rule

If older files conflict, prefer:

1. `CURRENT_STATE.md`
2. `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
3. `NEW_CHAT_START.md`
4. later dated durable decision/addendum
5. chapter/lesson terminology and semantic/diagram contracts
6. current renderer/source/compatibility policies
7. chapter `STATUS.md`
8. latest stage-specific QA/failure record
9. historical planning/audit artifacts

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
- Lesson 2: continue without reset from current high-risk visual migration;
- Lesson 3+: use Production System v2.1 from the start.

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
4. direct pixel QA;
5. internal repair/rebuild;
6. second internal QA.

Ask the user mainly for final acceptance, subjective design choice, or approval of a new visual family. Connector-required save confirmation is an exception.

## Compatibility and persistence

- exact final PPTX must be PowerPoint-tested when available; repair/recovery warning = FAIL;
- static/PDF fallback is mandatory for classroom-critical dynamic/online elements;
- source/build/component/test/provenance/fingerprint records must be durable in GitHub;
- do not commit font binaries, credentials or secrets.

## External-prompt rule

Any prompt the user must paste into an external tool must be provided as one self-contained fenced code block.

## Completion discipline

Use precise state labels. `CLASSROOM_READY` requires all applicable hard gates.

Universal stage rule:

**Finish -> record -> then continue.**
