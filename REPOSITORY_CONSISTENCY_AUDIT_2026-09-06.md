# Repository Consistency Audit — 2026-09-06

Status: **CLEANUP_COMPLETE — NO CURRENT OPERATIONAL CONFLICT REMAINS**

Repository checked:

`iqbalhimel004/science-slides`

Purpose: verify that post-RT-01/current-production state is recoverable from GitHub without a new chat accidentally following stale pre-RT-01 instructions.

## Executive result

The repository had several stale root-level operational files that still described Beautiful.ai/Canva as undecided candidate full-deck renderers or said RT-01 was pending. It also lacked a durable policy for preserving reproducible controlled-deck build sources.

Those operational gaps have been corrected.

Current canonical next action remains:

**Lesson 2 controlled production using PptxGenJS-first routing.**

## Findings and dispositions

| ID | Severity | Finding | Disposition |
|---|---|---|---|
| RC-01 | HIGH | `NEW_CHAT_START.md` still instructed future chats to run RT-01 | **RESOLVED** — rewritten post-RT-01 with current recovery/precedence |
| RC-02 | HIGH | `AGENTS.md` still treated Beautiful.ai/Canva as candidate full-deck renderers | **RESOLVED** — PptxGenJS primary; Canva finishing; Beautiful.ai prototype only |
| RC-03 | HIGH | `WORKFLOW.md` Phase 10/11 still described renderer calibration/selection as pending | **RESOLVED** — workflow now records RT-01 complete and controlled-production sequence |
| RC-04 | HIGH | Lesson 1 exact generator source was not durably committed | **CONTROLLED GAP RECORDED** — `ARTIFACT_PERSISTENCE.md` created; Lesson 1 marked pilot exception to normalize before final chapter lock |
| RC-05 | MEDIUM-HIGH | `README.md` said first chapter not started and renderer undecided | **RESOLVED** — current Chapter 11 state and locked route recorded |
| RC-06 | MEDIUM | `PROJECT_MASTER.md` still had pre-RT-01 renderer-candidate policy | **RESOLVED** — post-RT-01 architecture + reproducibility added |
| RC-07 | MEDIUM | `SLIDE_STYLE_GUIDE.md` said final Bangla font/renderer not locked | **RESOLVED** — controlled Noto stack and post-RT-01 routing recorded |
| RC-08 | MEDIUM | `CURRICULUM_INDEX.md` showed only split-approved status | **RESOLVED** — content-frozen/L1-produced/L2-next state recorded |
| RC-09 | LOW-MEDIUM | `GEMINI_REVIEW_PROTOCOL.md` could compete with bundle workflow | **RESOLVED** — explicitly marked legacy; `GEMINI_REVIEW_WORKFLOW.md` is operational authority |
| RC-10 | MEDIUM | Older lesson storyboard/QA headers retain `DRAFT`, `PRE_FREEZE`, `RT-01 pending` | **INTENTIONALLY HISTORICAL** — current precedence rule now explicitly prevents them overriding live state |
| RC-11 | LOW-MEDIUM | Fable reconciliation contains historical pending language from earlier pilot stages | **INTENTIONALLY HISTORICAL / CONTROLLED** — it is an audit-history record; current state/routing files have higher precedence |

## Files updated/created by cleanup

### Created

- `ARTIFACT_PERSISTENCE.md`
- `REPOSITORY_CONSISTENCY_AUDIT_2026-09-06.md`

### Updated

- `NEW_CHAT_START.md`
- `AGENTS.md`
- `WORKFLOW.md`
- `PROJECT_MASTER.md`
- `SLIDE_STYLE_GUIDE.md`
- `README.md`
- `CURRICULUM_INDEX.md`
- `GEMINI_REVIEW_PROTOCOL.md`
- `CURRENT_STATE.md`
- `chapters/class-8/science/chapter-11-light/STATUS.md`

## Canonical precedence after cleanup

For live operational state:

1. `CURRENT_STATE.md`
2. `RENDERER_ROUTING.md`
3. `DECISIONS.md`
4. active chapter `STATUS.md`
5. latest stage-specific production QA / review reconciliation
6. `WORKFLOW.md` / `TOOL_ROUTING.md`
7. older storyboard-stage QA / historical audits

For a new chat specifically:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. active chapter `STATUS.md`
5. active lesson storyboard/resources/latest production QA
6. `ARTIFACT_PERSISTENCE.md` when producing artifacts
7. deeper policy/history only when required

## Renderer consistency check

Current files consistently support:

**Controlled PptxGenJS → deterministic scientific SVG/shape visuals → rendered QA → optional Canva controlled-import finishing → verified PPTX + PDF fallback.**

Beautiful.ai is not the unattended science full-deck renderer.

Canva native AI is not the science-content authority.

## Artifact persistence gap — exact status

Lesson 1 has durable:

- filenames;
- SHA-256 fingerprints;
- production QA;
- slide structure;
- font stack;
- scientific visual verification;
- export/preflight result.

But its exact original PptxGenJS build source was not committed.

This is now an explicit pilot exception, not an invisible gap.

Before Chapter 11 can become fully `CLASSROOM_READY`, normalize Lesson 1 by either:

1. committing a reconstructed reproducible generator/build specification; or
2. regenerating the final controlled Lesson 1 version from source that is then committed.

From Lesson 2 onward, reproducible source/build records are mandatory at production checkpoint.

## Historical file policy

Audit/reconciliation/storyboard-stage documents are not rewritten merely to erase history. A historical record may legitimately say `PENDING` if that was true at the time it was created.

Such wording is not a current blocker when:

- the file is clearly stage-local/historical;
- a later canonical record resolves the item;
- the precedence rule is explicit.

This preserves auditability without creating operational ambiguity.

## Final cleanup verdict

**PASS — repository operational state is now consistent enough for new-chat recovery and Lesson 2 production.**

No renderer-selection rerun, Gemini planning rerun, or content unfreeze is required.

Next authorized stage:

**Lesson 2 controlled PPTX/PDF production + QA + durable reproducibility source record.**
