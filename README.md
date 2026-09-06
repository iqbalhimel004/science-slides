# NCTB Science Slides

Canonical workspace for creating source-verified, visually engaging, classroom-ready science presentations for Classes 8–10.

## Current canonical state

- Active first pilot: **Class 8 Science — Chapter 11: আলো**
- Chapter analysis/split/storyboards: complete and content-frozen
- Gemini Gate A: complete + reconciled
- targeted Gemini Gate B: complete + reconciled
- RT-01 renderer calibration: complete
- Lesson 1 controlled PPTX/PDF production: complete, `PASS_WITH_NONBLOCKING_NOTES`
- Next authorized stage: **Lesson 2 controlled production**
- GitHub is the durable source of truth; chat history is temporary working context.

For exact live state, always read `CURRENT_STATE.md`.

## Absolute repository safety boundary

The only repository authorized for writes for this project is:

`iqbalhimel004/science-slides`

Do not write to any other connected repository unless the user separately names and authorizes it.

## New-chat bootstrap

Read in this order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. active chapter `STATUS.md`
5. active lesson storyboard/resources/latest production QA
6. deeper policy/template files only when needed

`NEW_CHAT_START.md` contains the full recovery protocol.

## Core production model

- The user supplies one complete NCTB science chapter as PDF or ordered screenshots.
- Verify completeness, order, readability and text-layer/OCR reliability first.
- Analyze the entire visible chapter before deciding lesson count.
- Split by instructional load and logical concept boundaries, not page count.
- Obtain user approval of the split before final deck production.
- Each lesson must fit inside one 60-minute class.
- Current timing architecture: CORE ~40–45 min + FLEX ~5–10 min = 50–55 planned minutes, leaving 5–10 min unallocated contingency; STRETCH is appendix-only.
- NCTB controls syllabus/scope/exam context, not automatic scientific truth.
- Material scientific claims are independently checked against current authoritative sources.

## Renderer / production route — locked after RT-01

Canonical routing document:

`RENDERER_ROUTING.md`

Default production chain:

**Controlled PptxGenJS → deterministic SVG/shape scientific visuals → rendered QA → optional Canva controlled-import finishing → verified PPTX + verified PDF fallback.**

### Tool roles

- **ChatGPT:** lead for chapter analysis, lesson architecture, pedagogy, storyboard, source reconciliation, production coordination, QA and GitHub state maintenance.
- **PptxGenJS:** primary controlled science-deck authoring/rendering route.
- **Canva:** optional controlled-import finishing/editing/hosting; native AI is not the source of truth for science-critical wording/diagrams.
- **Beautiful.ai:** low-risk layout exploration/prototyping only; not unattended full-deck science production.
- **Hyperagent:** specialist deterministic SVG/equation/interactive/QA work where useful.
- **Gemini AI Pro:** targeted independent review/research, not duplicate primary authoring.
- **NotebookLM:** conditional source-grounded support when it materially helps.

Do not rerun renderer selection by default. RT-01 is complete and recorded in `DECISIONS.md` → `D-036`.

## Artifact persistence

Read `ARTIFACT_PERSISTENCE.md`.

From Lesson 2 onward, a controlled build is not durably checkpointed until the repository retains reproducible source/build records plus final filenames/fingerprints and production QA.

Lesson 1 is a documented pilot exception: its final filenames, SHA-256 fingerprints and QA are preserved, but its exact original generator source was not committed. That gap must be normalized before the chapter is marked fully classroom-ready.

## Classroom-ready package

Each classroom-ready lesson should have:

1. controlled editable PPTX;
2. verified PDF fallback;
3. static/offline fallback for every classroom-critical online/animated element;
4. source/storyboard/resource/production-QA records in GitHub;
5. reproducibility/build records required by `ARTIFACT_PERSISTENCE.md`;
6. post-import QA if Canva finishing is used.

## Detailed files

- `OPERATING_BRIEF.md` — compact canonical operating brief
- `CURRENT_STATE.md` — exact live project state and next action
- `NEW_CHAT_START.md` — new-chat recovery protocol
- `RENDERER_ROUTING.md` — post-RT-01 renderer/tool decision
- `ARTIFACT_PERSISTENCE.md` — reproducibility/durable artifact policy
- `PROJECT_MASTER.md` — master principles
- `WORKFLOW.md` — end-to-end production workflow
- `SOURCE_POLICY.md` — source/science/provenance rules
- `TOOL_ROUTING.md` — tool routing
- `QUALITY_GATES.md` — release gates
- `SLIDE_STYLE_GUIDE.md` + `VISUAL_ENGAGEMENT_SYSTEM.md` — visual system
- `DECISIONS.md` — durable decisions
- `FABLE_AUDIT_RECONCILIATION_2026-09-05.md` — historical first-pilot audit reconciliation
- `GEMINI_REVIEW_WORKFLOW.md` — canonical Gemini bundle/review process
- `chapters/` — chapter-specific production records

## Precedence rule

If older historical files contain pre-RT-01 wording such as `renderer undecided`, `Beautiful.ai/Canva candidate full-deck renderers`, or `RT-01 pending`, that wording is superseded by:

1. `CURRENT_STATE.md`
2. `RENDERER_ROUTING.md`
3. `DECISIONS.md` → `D-036`
4. active chapter `STATUS.md`
5. current `WORKFLOW.md` / `TOOL_ROUTING.md`
