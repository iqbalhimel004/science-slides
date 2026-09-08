# Chapter Production Workflow

Version: 5.0
Last revised: 2026-09-08
Status: **ACTIVE — PRODUCTION SYSTEM V2.1**

## Phase 0 — Safety and state recovery

1. Verify repo = `iqbalhimel004/science-slides`.
2. Read `CURRENT_STATE.md`.
3. Read `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`.
4. Read `NEW_CHAT_START.md` and `AGENTS.md`.
5. Read active chapter `STATUS.md`, terminology/diagram contracts and current lesson files.
6. Read supporting source/renderer/compatibility policies relevant to the task.
7. Treat GitHub as canonical operational memory; chat history is not sufficient.

Universal rule: **Finish -> record -> then continue.**

## Phase 1 — Chapter intake and source integrity

Verify chapter identity, edition/year where possible, page continuity, missing/cropped material, Bangla/equation/table/diagram readability, and text-layer/OCR status. Visually verify important wording when extraction is uncertain.

Checkpoint source identity/integrity and state.

## Phase 2 — Full chapter analysis

Record:

- scope/outcomes/prerequisites;
- concepts/subconcepts;
- definitions/laws/formulas/units;
- diagrams/processes;
- experiments/activities;
- numericals;
- misconceptions;
- exam-facing opportunities;
- instructional load;
- textbook ambiguities/errors;
- source freshness class (`STABLE`, `REVISION_SENSITIVE`, `CURRENT_DATA`);
- R1/R2/R3 risk map;
- experiment/demo safety map;
- visual/media/simulation opportunity map;
- reusable component/golden-master opportunities.

Checkpoint chapter analysis/source issues/state.

## Phase 3 — Lesson count and split

Split by logical instructional boundaries and realistic load, not page count.

Default 60-min architecture:

- CORE ~40–45 min;
- FLEX ~5–10 min;
- CORE+FLEX ~50–55 min;
- contingency 5–10 min;
- STRETCH appendix/enrichment only.

Obtain user approval of lesson split before final deck production and record immediately.

## Phase 4 — Source verification and scientific reconciliation

Use NCTB for syllabus/exam context, not automatic truth. Verify material science against authoritative sources. Resolve/record conflicts.

For revision-sensitive/current-data claims, record date/edition/last check.

For calculations/formulas/graphs, verify units, conversions, answers and dimensional consistency where appropriate.

Checkpoint source map/issues.

## Phase 5 — Lesson planning

Plan learning outcomes, CORE/FLEX/STRETCH, retrieval, sequence, teacher/student actions, checks, practice, misconceptions, summary/exit and timing.

For live demos/activities, include safety status and fallback.

For models/schematics, note simplification or `not to scale` where needed.

## Phase 6 — Resource discovery

Search authoritative/trusted existing resources and approved reusable components before custom generation.

Record source/creator, date, purpose, risk, licensing, accessibility, planned time, setup friction, fallback and last verification date where relevant.

## Phase 7 — Storyboard + structured specification

For every slide/state record:

- slide ID/title;
- CORE/FLEX/STRETCH;
- learning purpose;
- frozen/approved copy;
- concept type;
- R1/R2/R3;
- visual/media route;
- R3 invariants;
- source refs/freshness;
- teacher/student action;
- timing;
- dynamic mode;
- safety/accessibility/model notes where relevant;
- fallback;
- transition.

Dynamic modes include `STATIC_INTENTIONAL`, `STAGED_REVEAL`, `PREDICT_THEN_REVEAL`, `NATIVE_ANIMATION`, `INTERACTIVE_NAVIGATION`, `LIVE_DEMO`, `SIMULATION`, `VIDEO/ANIMATION_RESOURCE`.

Update coverage matrix.

## Phase 8 — Targeted independent review

Use an independent second review when it adds real value, especially:

- new R3 component family before golden-master approval;
- conflicting sources;
- subtle/contested concepts;
- repeated material component failure;
- high-risk model/idealization.

Gemini may be used via `GEMINI_REVIEW_WORKFLOW.md`, but findings must be reconciled against authoritative evidence before implementation.

Do not duplicate full authoring merely for redundancy.

## Phase 9 — Content QA and freeze

Apply G1–G7 including source freshness, quantitative checks, safety, model limits and structured-spec completeness.

Freeze exact student-facing copy/spec only after applicable gates pass.

## Phase 10 — Component routing and reuse

Before building:

1. check approved component/golden-master library;
2. reuse unchanged approved components when suitable;
3. port existing validated lesson visuals into controlled source when needed;
4. create new R3 component only when no suitable approved component exists;
5. give new R3 families semantic tests and targeted independent review before golden-master status.

## Phase 11 — Controlled production

1. read frozen spec/copy/resources/locks;
2. build/assemble R3 components deterministically or through the appropriate specialized structured engine;
3. assemble 16:9 PPTX with PptxGenJS;
4. keep science-critical labels editable/native where practical;
5. implement planned staged states/interaction/media;
6. include `[Sources]` notes for externally sourced non-trivial claims/assets;
7. render actual slides;
8. run automated structural/text/layout/quantitative checks;
9. run semantic science assertions;
10. inspect R3 pages individually;
11. run post-render student-inference science review;
12. run accessibility/projector review;
13. apply repair circuit breaker if needed;
14. perform only selective revalidation after changes;
15. optionally use Canva for finishing only if it materially improves low-risk visual presentation;
16. if Canva is used, rerun affected science/render/export QA.

## Phase 12 — Internal acceptance before user review

Before showing a pack/deck to the user:

- automated QA passed;
- semantic science QA passed;
- R3 direct pixel QA passed;
- safety/model/accessibility checks passed where applicable;
- internal repair/rebuild completed;
- second internal QA completed.

User review is for final acceptance or subjective classroom/design preference, not primary defect detection.

## Phase 13 — Compatibility, export and offline QA

Test exact classroom artifacts.

When Microsoft PowerPoint is available:

- open exact PPTX;
- no repair/recovery warning;
- verify editability;
- verify links/buttons/reveal/animation/media;
- after normalization/resave, retest affected behavior.

If PowerPoint testing is unavailable, record `DELIVERY_COMPATIBILITY_PENDING`.

Also verify PDF/static fallback, Bangla/notation, crops, labels, media launch and offline resilience.

## Phase 14 — Persistence / regression checkpoint

Record:

- source/build spec/code;
- output names/fingerprints;
- component source/tests/golden references;
- asset provenance/licensing;
- dynamic manifest;
- compatibility/export result;
- current QA status.

When an approved R3 component changed, perform targeted golden-master regression review before reuse.

## Phase 15 — Chapter-wide audit

Verify coverage, duplication, prerequisites, bridges, source conflicts, terminology continuity, timing, visual consistency, safety/fallbacks, current-data freshness and artifact traceability.

## Phase 16 — Completion and handoff

Use precise status ladder:

`DRAFT -> CONTENT_VERIFIED -> CONTENT_FROZEN -> BUILT -> INTERNAL_QA_PASS -> USER_ACCEPTED -> DELIVERY_VERIFIED -> CLASSROOM_READY`

Update lesson/chapter QA, `STATUS.md`, `CURRENT_STATE.md` and durable decisions when needed.

## Phase 17 — Post-class calibration

Record actual timing, confusion points, resource failures, safety/setup issues, PowerPoint/playback issues and effective visual/interactive elements. Use real classroom evidence to calibrate future production.

## Selective invalidation rule

Do not rerun every phase after a small edit. Follow the selective-revalidation table in `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md` and rerun only the affected downstream gates.

## Current Chapter 11 override

Lesson 1 is completed/user-approved baseline and is preserved.

Lesson 2 does not restart. Continue from its current high-risk migration: HRV-07 controlled rebuild first, HRV-05/06 controlled component port, HRV-01..04 retained as validated references unless regression evidence appears, then internally-passed high-risk pack -> user acceptance -> full Lesson 2 assembly.
