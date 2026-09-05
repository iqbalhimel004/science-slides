# NCTB Science Slides

Canonical workspace for creating source-verified, classroom-ready science presentations for Classes 8-10.

## Core operating model

- One chat works on one complete textbook chapter.
- The user first provides the complete chapter as a PDF or ordered screenshots.
- The chapter is analyzed before any slide deck is created.
- The analysis determines how many presentations are required.
- Each presentation targets 50-55 minutes of planned instruction and has a hard ceiling of 60 minutes.
- If a chapter cannot be taught properly within one presentation, it is split into multiple logically sequenced lessons.
- NCTB textbook/curriculum is the primary authority for syllabus-critical content. Established sources such as 10 Minute School may be used for corroboration and classroom-friendly wording. Authoritative international sources are used when appropriate.
- Important definitions, laws, formulas, and syllabus-critical claims must be source-traceable; they must not rely only on model memory when an authoritative source is available.
- Existing trusted simulations, videos, and animations are preferred over custom generation. Custom assets are created only when they add clear instructional value or fill a genuine gap.
- GitHub is the canonical project memory. Chat history is temporary working context.

## Tool roles

- ChatGPT: project lead, curriculum analyst, lesson architect, source/QA coordinator, final reconciliation.
- NotebookLM: source-grounded extraction and study of uploaded textbook/reference material.
- Gemini AI Pro: independent/adversarial review, difficult fact checks, missing-topic checks, and targeted external research.
- Beautiful.ai: primary final presentation design/rendering system after content freeze.
- Canva: secondary visual-production tool for infographics, worksheets, special diagrams, posters, and slides that need custom visual treatment.
- Hyperagent: custom simulations, interactive visualizations, advanced assets, or short media only when existing trusted resources are insufficient.

## Repository safety boundary

The only repository authorized for writes for this project is:

`iqbalhimel004/science-slides`

Never write to any other connected repository as part of this project.

## Start here

1. `AGENTS.md`
2. `NEW_CHAT_START.md`
3. `PROJECT_MASTER.md`
4. `CURRENT_STATE.md`
5. `WORKFLOW.md`
6. `SOURCE_POLICY.md`
7. `QUALITY_GATES.md`
8. `SLIDE_STYLE_GUIDE.md`
9. `TOOL_ROUTING.md`
10. `DECISIONS.md`

Chapter-specific work lives under `chapters/` and is created only after a complete chapter is supplied and analyzed.
