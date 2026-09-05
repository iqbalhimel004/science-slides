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

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical path:
`chapters/class-8/science/chapter-11-light/`

Current status:
**GATE_B_RECONCILED — FINAL_G1_G7_PASS — CONTENT_STORYBOARD_FROZEN — RT_01_NEXT**

## Review state

Gate A: completed + reconciled.

Gate B: completed + reconciled.

Files:
- `reviews/GEMINI_GATE_B_RAW_2026-09-06.md`
- `reviews/GEMINI_GATE_B_RECONCILIATION_2026-09-06.md`

Gate B external verdict:
`PASS_WITH_TARGETED_CHANGES`

Canonical Gate B result:
**ACCEPT WITH TARGETED CHANGES; NO MATERIAL REPLAN REQUIRED**

## Implemented Gate-B changes

1. **Critical angle visual**
   - L2-S09/R2-03 now explicitly includes reflected ray at `i=C` together with grazing refracted ray (`r=90°`).
   - TIR remains only for `i>C`.
   - No Fresnel/reflected-power fraction is taught.

2. **Magnifier finding**
   - Rejected as already implemented.
   - L3-S06/R3-03 already required solid actual rays + dashed backward extensions for the virtual image.

3. **Lesson 4 compression**
   - removed dedicated digital-camera CORE slide;
   - retained one-sentence digital contrast on film-chemistry slide;
   - detailed digital sensor material moved to STRETCH;
   - standalone chapter concept map merged into final synthesis/exit;
   - L4 reduced from 46 CORE + 8 FLEX = 54 to **42 CORE + 8 FLEX = 50**.

## Frozen lesson timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

Chapter planned CORE + FLEX total: **202 minutes**.

## Final pre-freeze QA

Canonical file:
`chapters/class-8/science/chapter-11-light/FINAL_PRE_FREEZE_QA_2026-09-06.md`

Result:
`PASS — CONTENT/STORYBOARD FREEZE APPROVED`

All textbook-body topics remain mapped. No material prerequisite, duplication, continuity, scientific wording or timing blocker remains at storyboard/content level.

## What is frozen

Unless later production reveals a material scientific/usability defect:
- four-lesson architecture;
- slide IDs and sequence;
- CORE/FLEX classification;
- storyboard scientific wording and misconception guardrails;
- source-gap/supplement labels;
- timing architecture;
- resource specifications.

## What is still pending

The chapter is **not classroom-ready yet**.

Pending:
- RT-01 renderer calibration;
- default/fallback renderer decision;
- deterministic scientific visual construction;
- rendered diagram/anatomy/process QA;
- Bangla/notation/export/projector QA;
- offline/static fallback verification;
- PDF fallback generation/verification;
- final rendered chapter audit.

## Next authorized action

Run **RT-01** using representative Bangla/science content through Beautiful.ai and Canva. Compare:

- Bangla conjunct rendering;
- mixed Bangla/English scientific text;
- `i`, `r`, `90°`, subscripts/superscripts/equation notation;
- scientific diagram labels;
- editability;
- export fidelity;
- projector readability;
- workflow friction/time.

Then record the default/fallback renderer decision in `DECISIONS.md` before first final-deck rendering.

No further Gemini planning review is required unless a later production step introduces a material content/science regression.
