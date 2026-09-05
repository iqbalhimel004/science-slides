# NCTB Science Slides

Canonical workspace for creating source-verified, visually engaging, classroom-ready science presentations for Classes 8–10.

## Current canonical state

- Plan version: **3.0**
- First real chapter: **not started yet**
- The first completed chapter is also the **pilot/calibration chapter** for renderer choice, Bangla typography, equations, artifact format, tool routing, workflow friction and classroom timing.
- GitHub is the durable source of truth; chat history is temporary working context.

## Absolute repository safety boundary

The only repository authorized for writes for this project is:

`iqbalhimel004/science-slides`

Do not write to any other connected repository unless the user separately names and authorizes it.

## Mandatory new-chat bootstrap for the FIRST pilot chapter

Read in this order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `FABLE_AUDIT_RECONCILIATION_2026-09-05.md`
4. `CLASSROOM_PROFILE.md`
5. then only the deeper policy/template files needed for the immediate stage

The Fable reconciliation is mandatory before the first pilot chapter because it records which external-audit findings were accepted, rejected, partially accepted, and still pending validation.

After the first pilot is complete and its pending decisions are resolved, `CURRENT_STATE.md` may reduce this bootstrap again.

## Core production model

- The user supplies one complete NCTB science chapter as PDF or ordered screenshots.
- Verify completeness, order, readability and text-layer/OCR reliability first.
- Analyze the entire visible chapter before deciding presentation count.
- Split by instructional load and logical concept boundaries, not page count.
- Obtain user approval of the lesson split before final deck production.
- Each lesson must fit inside one 60-minute class.
- Current timing architecture: CORE ~40–45 min + FLEX ~5–10 min = 50–55 planned minutes, leaving 5–10 min unallocated contingency; STRETCH is appendix-only.
- Important definitions, laws, formulas, units and exam-sensitive wording are source-traceable and checked against the visible source page/image when extraction is uncertain.
- Existing trusted resources are preferred before custom simulation/video/diagram generation.

## Tool roles — current v3 position

- **ChatGPT:** lead for chapter analysis, lesson architecture, pedagogy, storyboard, source reconciliation, QA coordination and GitHub state maintenance through the connected write-capable GitHub integration.
- **NotebookLM:** conditional source-grounded extraction/citation and student revision support when it adds value; never more authoritative than the visible textbook page.
- **Gemini AI Pro:** independent review/research at high-value gates, not duplicate primary authoring by default.
- **Beautiful.ai:** candidate full-deck renderer; not permanently default before RT-01.
- **Canva:** candidate full-deck renderer and specialist visual tool; not limited to asset-only work.
- **Hyperagent:** specialist build/QA/interactive engine for programmatic SVG/equation assets, custom HTML/JS, deterministic checks and genuine custom-media gaps.

## Renderer rule

Before the first final deck, run **RT-01** using the same representative Bangla/science content in Beautiful.ai and Canva, with another practical fallback only if needed. Compare Bangla rendering, equations, diagram labels, visual quality, editability, export fidelity, projector readability and workflow friction.

Do not permanently declare a default renderer before this test.

## Classroom-ready package

GitHub source/storyboard remains canonical. Each classroom-ready lesson should have:

1. primary delivery deck
2. PDF fallback
3. static/offline fallback for every classroom-critical online/animated element
4. source/storyboard/resource records in GitHub

## Detailed files

- `PROJECT_MASTER.md` — master principles
- `WORKFLOW.md` — end-to-end production workflow
- `SOURCE_POLICY.md` — source/definition/provenance rules
- `TOOL_ROUTING.md` — tool and renderer routing
- `QUALITY_GATES.md` — release gates
- `SLIDE_STYLE_GUIDE.md` + `VISUAL_ENGAGEMENT_SYSTEM.md` — visual system
- `DECISIONS.md` — durable decisions
- `FABLE_AUDIT_RECONCILIATION_2026-09-05.md` — external-audit reconciliation and pilot pending items
- `templates/` — working templates
- `chapters/` — chapter-specific production records
