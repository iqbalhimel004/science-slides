# Lesson 3 R3 Validation Pack v0.9 — User Rejection Record

Date: 2026-09-09
Status: **FAIL — USER_REJECTED — CLEAN_REBUILD_REQUIRED**

## User evidence

The user reviewed rendered/exported slides and reported that the science diagrams were not correct.

## Disposition

The previous internal PASS claim for `Lesson3_R3_Validation_Pack_v0_9` is invalid and must not be used as a production checkpoint.

Full Lesson 3 assembly remains blocked.

## Confirmed failure classes from the reviewed render

- lens profiles/optical geometry were visually inconsistent and not defensible as controlled science diagrams;
- focal-length depiction was not anchored cleanly along the principal axis from the optical center to the principal focus;
- real-vs-virtual image construction did not communicate the required ray relationships robustly;
- magnifying-glass construction did not meet the required controlled thin-lens ray-construction standard;
- human-eye anatomy/topology was oversimplified to the point of misleading structure relationships;
- accommodation comparison was not sufficiently anatomically/optically controlled;
- myopia/hyperopia correction ray systems were not reliable enough for classroom use.

## Root-cause correction

Do not micro-patch v0.9.

Rebuild all seven R3 visual families from semantic contracts using deterministic geometry/topology. Treat the v0.9 visual implementation as rejected, while preserving only validated copy/source/contract work.

## Required rebuild gate

1. Build new R3 diagrams from scratch.
2. Verify geometry numerically/relationally before PPTX assembly.
3. Render each slide individually.
4. Perform direct science pixel inspection against `SEMANTIC_CONTRACTS_V2_1.md`.
5. Do not mark PASS until the diagrams themselves—not merely text/layout—are scientifically correct.
6. Show only the rebuilt internally-passed pack to the user.

Current decision: **R3_REBUILD_IN_PROGRESS — FULL_DECK_BLOCKED**.
