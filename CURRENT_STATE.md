# Current State

Last updated: 2026-09-05

## Project status

Plan v3.0 refinement in progress after an external Hyperagent/Fable 5.1 adversarial audit. Valid findings are being incorporated; incorrect or environment-mismatched findings are not adopted automatically.

## Canonical repository

`iqbalhimel004/science-slides`

This is the only repository authorized for writes for this project.

## Important validation notes from the external audit

Accepted as material improvements:

- make the 60-minute timing model explicit as CORE + FLEX + contingency
- add a classroom profile instead of guessing hardware/connectivity details
- treat scanned/image-based source intake as a first-class case; critical wording must be verified against the visible source page
- test Bangla typography, equations, labels and exports before declaring a default renderer
- make renderer selection conditional on real output tests rather than permanent vendor preference
- reduce new-chat recovery overhead through a compact `OPERATING_BRIEF.md`
- strengthen offline/static fallback policy
- strengthen retrieval, hinge-question and exit-check structure
- reduce reliance on folklore-style fixed attention-span rules

Rejected/corrected audit assumptions:

- ChatGPT in this environment DOES have a connected GitHub integration with write actions; current project writes are being performed through that connector. Therefore GitHub maintenance is not transferred exclusively to Hyperagent.
- Beautiful.ai IS connected in this environment and exposes presentation creation/review/export actions. Therefore the audit claim that there is no ChatGPT/Beautiful.ai integration does not apply to this workspace.
- Canva IS connected and exposes presentation-generation and editing workflows. It remains a viable full-deck candidate, not only an asset tool.

## New canonical setup files

- `OPERATING_BRIEF.md` — compact new-chat recovery and non-negotiables
- `CLASSROOM_PROFILE.md` — timing/hardware/connectivity facts and unknowns

## Active chapter

None yet.

## Renderer status

No permanent default renderer is locked yet.

Before the first final deck, run renderer calibration (RT-01) using the same Bangla/science stress-test content through:

- Beautiful.ai
- Canva
- another practical fallback if needed

Compare Bangla rendering, equations, diagrams, editability, workflow friction, export quality and projector readability. Then record the selected default/fallback in `DECISIONS.md`.

## Timing status

Confirmed project requirement: one deck must fit within one 60-minute class.

Current planning model:

- CORE: approximately 40-45 minutes of non-skippable instruction
- FLEX: approximately 5-10 minutes of useful but skippable practice/example
- planned CORE + FLEX: approximately 50-55 minutes
- contingency: 5-10 minutes left unallocated within the 60-minute class
- STRETCH: appendix/enrichment only, not part of the planned core lesson

## Waiting for

1. user-provided first complete Class 8-10 science chapter as PDF or ordered screenshots
2. classroom-profile details when available
3. RT-01 renderer calibration during the first pilot chapter

## Next required action

When the first chapter arrives:

1. verify completeness/order/readability and whether the source has a reliable text layer
2. analyze the complete visible chapter before lesson splitting
3. identify curriculum outcomes, definitions, laws, formulas, diagrams, activities, numericals and misconceptions
4. verify critical wording against the actual page/image
5. estimate instructional load using CORE/FLEX/STRETCH
6. propose the number and boundaries of <=60-minute presentations
7. obtain user approval of the split
8. build lesson plans/storyboards/resources
9. run independent review where high-value
10. freeze content
11. perform RT-01 if not yet completed, then render
12. perform science/source/timing/pedagogy/visual/export/offline-fallback QA
13. perform chapter-wide coverage and continuity audit
14. update repository state
