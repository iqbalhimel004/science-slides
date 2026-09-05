# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science
- Chapter: 11 — আলো
- Last updated: 2026-09-06
- Current status: **GATE_B_RECONCILED — FINAL_G1_G7_PASS — CONTENT_STORYBOARD_FROZEN — RT_01_NEXT**

## Durable workflow rules

- external-tool prompts are one-click copy-ready;
- Gemini reviews use fresh downloadable single-file bundles;
- Gate B is targeted implementation QA, not Gate A repetition;
- universal stage rule: **Finish → record → then continue.**

## Review gates

### Gate A
Completed + independently reconciled.
Result: targeted corrections; no material replan.

### Gate B
Completed + independently reconciled.
External verdict: `PASS_WITH_TARGETED_CHANGES`.
Canonical verdict: `ACCEPT WITH TARGETED CHANGES; NO MATERIAL REPLAN REQUIRED`.

Files:
- `reviews/GEMINI_GATE_B_RAW_2026-09-06.md`
- `reviews/GEMINI_GATE_B_RECONCILIATION_2026-09-06.md`

## Gate-B changes implemented

- L2-S09/R2-03: critical-angle panel requires grazing refracted ray **and** reflected ray; TIR remains only for `i>C`; no reflected-power fraction taught.
- L3 magnifier finding rejected because dashed backward extensions were already explicit in L3-S06/R3-03.
- L4 dedicated digital-camera CORE slide removed.
- L4 digital distinction reduced to one sentence on film-chemistry slide.
- L4 detailed digital-sensor content is STRETCH only.
- L4 standalone concept-map lecture merged into final synthesis/exit.
- L4 timing reduced from 54 planned minutes to 50.

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

Chapter planned CORE + FLEX total: **202 minutes**.

## Final pre-freeze QA

Canonical record:
`FINAL_PRE_FREEZE_QA_2026-09-06.md`

Result:
`PASS — CONTENT/STORYBOARD FREEZE APPROVED`

All textbook-body topics are mapped. No material prerequisite, continuity or duplication blocker remains.

## Freeze boundary

Frozen unless a later build reveals a material defect:
- four-lesson architecture;
- slide IDs/sequence;
- CORE/FLEX classification;
- storyboard scientific wording/guardrails;
- source-gap labels;
- timing architecture;
- resource specifications.

Not yet classroom-ready:
- high-risk diagrams still need actual build + scientific inspection;
- RT-01 not yet run;
- renderer not yet locked;
- export/projector/offline QA pending;
- PDF fallbacks pending.

## Next authorized stage

1. Run **RT-01** representative Bangla/science renderer calibration through Beautiful.ai and Canva.
2. Compare Bangla conjuncts, mixed Bangla/English, symbols, sub/sup/equation handling, editability, export fidelity, projector readability and workflow friction.
3. Record renderer default/fallback decision in `DECISIONS.md`.
4. Build deterministic high-risk visuals.
5. Render lessons and run scientific visual/export/offline/projector QA.
6. Produce PDF/static fallbacks and classroom-ready package.

No further Gemini planning review is required unless later production introduces a material content/science regression.
