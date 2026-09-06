# New Chat Recovery Protocol

Version: 4.1
Last revised: 2026-09-06
Status: **ACTIVE — POST-RT-01 / POST-PILOT-COMPATIBILITY UPDATE**

## 1. Verify repository identity first

Authorized write repository:

`iqbalhimel004/science-slides`

Do not write to any other connected repository.

## 2. Current first-pilot recovery sequence

For the active first pilot chapter, read in this order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
5. `ARTIFACT_PERSISTENCE.md`
6. active chapter `STATUS.md`
7. active lesson `STORYBOARD.md`, `RESOURCES.md`, latest production QA, and any design-engagement revision record
8. deeper policy/template files only when the current task requires them

Do **not** restart renderer selection. RT-01 is complete.

## 3. Canonical state / precedence

GitHub is the durable source of truth. If old chat history or an older repository section conflicts with current canonical state, use this precedence:

1. `CURRENT_STATE.md`
2. `RENDERER_ROUTING.md`
3. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
4. `ARTIFACT_PERSISTENCE.md`
5. active chapter `STATUS.md`
6. latest stage-specific QA/reconciliation record
7. older historical planning/audit documents

Historical pre-RT-01 or pre-pilot-production wording must not override current routing/compatibility/engagement rules.

## 4. Renderer route — already decided

Current default production route:

**Controlled PptxGenJS authoring/rendering → deterministic SVG/shape scientific visuals → rendered QA → optional Canva controlled-import finishing → verified PPTX + verified PDF fallback.**

- PptxGenJS: primary science-deck authoring/rendering route.
- Canva: optional finishing/editing after controlled import; native AI is not the science authority.
- Beautiful.ai: low-risk prototype/layout inspiration only.

## 5. Pilot compatibility and visual-engagement correction

The first Lesson 1 controlled build revealed two important production failures:

1. Microsoft PowerPoint initially showed a repair warning even though internal/LibreOffice/render tests had passed;
2. the deck was science-correct but too static/utilitarian and underused the planned animation/simulation/interactive/visual-engagement layer.

These are now controlled by:

`PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`

Mandatory implications:

- a PowerPoint repair/recovery warning is a hard failure for that PPTX;
- when PowerPoint is available, test the exact user-facing PPTX in Microsoft PowerPoint;
- after any normalize/resave operation, retest planned animation/reveal/interaction behaviour;
- storyboard-planned dynamic teaching elements must not disappear during production;
- static presentation must be intentional, not accidental;
- the first-pilot master UI/motion direction must be user-approved before it is propagated to later lessons.

## 6. Active first pilot

Active chapter:

`chapters/class-8/science/chapter-11-light/`

Current state is in `CURRENT_STATE.md` and chapter `STATUS.md`.

Current next stage:

**Lesson 1 visual-engagement prototype v2.**

Lesson 2 full production is on hold until Lesson 1 v2 establishes an approved UI/motion standard.

## 7. Lesson 1 compatibility history

- initial controlled PPTX: triggered Microsoft PowerPoint repair warning;
- repaired/normalized PPTX: user confirmed it opens correctly in Microsoft PowerPoint;
- repaired PPTX fingerprint and incident details are in `lessons/lesson-01/PRODUCTION_QA_2026-09-06.md`;
- current v1 deck is not `CLASSROOM_READY` because visual/motion/interactive quality needs revision.

## 8. Source/science rule

NCTB controls curriculum/scope/exam context, not automatic scientific truth. Material scientific claims are verified against current authoritative sources; mismatches are documented.

## 9. Timing rule

For a 60-minute class:

- CORE: about 40–45 min
- FLEX: about 5–10 min
- planned CORE + FLEX: about 50–55 min
- contingency: 5–10 min unallocated
- STRETCH: appendix/enrichment only

Media setup, interaction, prediction/reveal and simulation debrief count as real time.

## 10. Dynamic implementation rule

For concept-heavy segments use, where appropriate:

- `STAGED_REVEAL`
- `PREDICT_THEN_REVEAL`
- `LIVE_DEMO`
- `SIMULATION`
- `INTERACTIVE_NAVIGATION`
- `NATIVE_ANIMATION` only when reliable/testable
- `STATIC_INTENTIONAL` when static is genuinely better

For science-critical progressive construction, staged duplicate-slide states are preferred over fragile native animation when they achieve the same instructional goal.

Every important dynamic/online element needs a static/offline fallback.

## 11. Artifact persistence rule

Follow `ARTIFACT_PERSISTENCE.md`.

From Lesson 1 v2 onward, preserve:

- generator/build source;
- artifact fingerprints;
- dynamic implementation manifest where applicable;
- PowerPoint compatibility status;
- export/fallback QA.

## 12. External prompt rule

Any external-tool prompt must be one self-contained fenced code block.

## 13. End-of-stage checkpoint

**Finish → record → then continue.**

The next chat must be able to continue from GitHub without needing the previous transcript.
