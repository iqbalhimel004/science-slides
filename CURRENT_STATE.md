# Current State

Last updated: 2026-09-06

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Durable rules

- NCTB controls syllabus/exam context, not automatic scientific truth.
- Material science is checked against current authoritative sources.
- **Finish → record → then continue.**
- External-tool prompts are one self-contained fenced code block for one-click copy (`D-033`).
- Planned Gemini reviews use fresh downloadable single-file bundles (`D-034`).
- Gate B is targeted implementation QA, not a second Gate A (`D-035`).
- RT-01 renderer route is locked by evidence (`D-036`).
- `RENDERER_ROUTING.md` is the canonical renderer-routing record.
- `ARTIFACT_PERSISTENCE.md` is the canonical controlled-deck reproducibility policy.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical path:
`chapters/class-8/science/chapter-11-light/`

Current status:

**CONTENT_STORYBOARD_FROZEN — RT_01_COMPLETE — LESSON_1_CONTROLLED_BUILD_PASS_WITH_NOTES — REPOSITORY_CONSISTENCY_CLEANUP_COMPLETE — LESSON_2_PRODUCTION_NEXT**

## Review / freeze state

- Gemini Gate A: completed + reconciled
- Gemini Gate B: completed + reconciled
- Final pre-freeze QA: `PASS — CONTENT/STORYBOARD FREEZE APPROVED`
- No further Gemini planning review is required unless production introduces a material regression.

## Frozen lesson timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

Chapter planned CORE + FLEX total: **202 minutes**.

## RT-01 final route — LOCKED

Canonical routing file:
`RENDERER_ROUTING.md`

Canonical evidence record:
`chapters/class-8/science/chapter-11-light/RT01_RENDERER_CALIBRATION_2026-09-06.md`

Durable decision:
`DECISIONS.md` → `D-036`

Final verdict:
`RT_01_COMPLETE — CONTROLLED_PPTX_PRIMARY — CANVA_CONTROLLED_IMPORT_FINISHING — DIRECT_PPTX_PDF_FALLBACK`

Primary authoring/rendering: **controlled PptxGenJS**.

Optional finishing: **Canva after controlled PPTX import**, only when it materially improves visual polish without changing verified science.

Beautiful.ai/native Canva AI are not unattended full-deck science authoring routes.

Classroom delivery/fallback: **controlled PPTX + verified PDF**.

## Repository consistency cleanup — completed 2026-09-06

The repository was re-audited after RT-01 and Lesson 1 production.

High-risk stale/conflicting operational files were corrected:

- `NEW_CHAT_START.md` → post-RT-01 recovery order;
- `AGENTS.md` → post-RT-01 tool routing and artifact-persistence rule;
- `WORKFLOW.md` → controlled PptxGenJS production flow replaces candidate-renderer phase;
- `PROJECT_MASTER.md` → renderer policy and reproducibility updated;
- `SLIDE_STYLE_GUIDE.md` → post-RT-01 typography/renderer/notation rules;
- `README.md` → active Chapter 11 state and current renderer route;
- `CURRICULUM_INDEX.md` → Chapter 11 content-frozen / L1-produced status;
- `GEMINI_REVIEW_PROTOCOL.md` → explicitly marked legacy; `GEMINI_REVIEW_WORKFLOW.md` is operational authority;
- `ARTIFACT_PERSISTENCE.md` → new durable reproducibility policy.

Repository consistency audit record:

`REPOSITORY_CONSISTENCY_AUDIT_2026-09-06.md`

### Historical-stage metadata rule

Some lesson-level storyboard/QA files intentionally preserve the stage at which they were authored, e.g. `DRAFT`, `PRE_FREEZE`, or `RT-01 pending` in older QA text.

These are **historical stage-local records**, not current operational state.

Use current-state precedence:

1. `CURRENT_STATE.md`
2. `RENDERER_ROUTING.md`
3. `DECISIONS.md`
4. active chapter `STATUS.md`
5. latest production QA / reconciliation record
6. older storyboard-stage QA/history

Do not infer that Gate B, content freeze or RT-01 is still pending from an older stage-local file.

## Lesson 1 production checkpoint

Canonical QA record:
`chapters/class-8/science/chapter-11-light/lessons/lesson-01/PRODUCTION_QA_2026-09-06.md`

Status:
`PASS_WITH_NONBLOCKING_NOTES`

Built:
- 16-slide controlled PPTX
- 16-page PDF fallback
- 14 CORE + 2 FLEX

Artifact fingerprints:
- PPTX SHA-256: `baf43046f54165e7bc705c897a02206a8966e3c9294cd3d86d2b1a50f62919c9`
- PDF SHA-256: `a85cc0821c73b9074a827968ecb8834aa0c7bd90dbd185ea248fe9f102ab3b6a`

Verified:
- deterministic ray/optics diagrams;
- normal-incidence exception;
- optical density ≠ mass density guardrail;
- parallel-sided slab geometry;
- controlled Noto Sans Bengali / Noto Sans typography;
- `slides_test.py`: PASS, no overflow;
- PPTX/PDF rendered inspection;
- PDF preflight: 16 pages, openable, non-scanned, unencrypted;
- CORE offline capability.

### Lesson 1 reproducibility exception

Lesson 1 was produced before `ARTIFACT_PERSISTENCE.md` was formalized.

Its filenames, SHA-256 fingerprints and QA are durable, but the exact original PptxGenJS generator source was not committed.

This does not invalidate its content/scientific QA. Before the chapter is finally marked `CLASSROOM_READY`, Lesson 1 must be normalized by preserving a reconstructed reproducible generator/build specification or by regenerating a final controlled version whose source is committed under the new policy.

From Lesson 2 onward, this exception does not apply.

## What remains for the chapter

1. Lesson 2 controlled PPTX/PDF production + QA + reproducible source record;
2. Lesson 3 controlled PPTX/PDF production + QA + reproducible source record;
3. Lesson 4 controlled PPTX/PDF production + QA + reproducible source record;
4. normalize Lesson 1 reproducibility before final classroom-ready lock;
5. verify remaining offline/static fallbacks;
6. final rendered chapter-wide continuity/coverage audit;
7. finalize classroom-ready package and reusable visual baselines.

## New-chat recovery order — current pilot

Read:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. active chapter `STATUS.md`
5. active lesson storyboard/resources/latest production QA
6. `ARTIFACT_PERSISTENCE.md` for production work
7. deeper policy files only if required

`NEW_CHAT_START.md` contains the full recovery protocol.

## Next authorized action

Proceed to **Lesson 2 controlled production** using the frozen storyboard/resource map, the locked PptxGenJS-first route, and the new artifact-persistence policy.
