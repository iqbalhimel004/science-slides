# Agent Operating Rules

## Absolute write boundary

For this project, writes are authorized only to:

`iqbalhimel004/science-slides`

Before every GitHub write, verify the exact `repository_full_name`. If it is not exactly `iqbalhimel004/science-slides`, abort the write.

Do not modify, commit to, create issues/PRs in, delete from, or otherwise mutate any other connected repository while working on this project unless the user gives a separate explicit instruction naming that repository.

## Canonical memory

This repository is the durable source of truth for the Science Slides project. Chat history is temporary context. When repository state and old chat history disagree, prefer the current repository unless the user explicitly overrides it.

## One-chat-one-chapter rule

A normal production chat handles one complete textbook chapter only. Do not mix chapter production across multiple chapters in the same chat unless the user explicitly requests an exception.

## Required chapter intake behavior

When the user supplies a chapter PDF or screenshots:

1. Verify completeness, order, readability, chapter identity, and page continuity before planning lessons.
2. Do not silently infer missing or unreadable textbook content.
3. Analyze the full chapter before deciding the number of presentations.
4. Determine the lesson split from instructional load and logical concept boundaries, not page count.
5. Target 50-55 minutes of planned teaching per presentation; 60 minutes is a hard ceiling.
6. Obtain/record user approval of the proposed lesson split before final deck production.

## Source discipline

- NCTB textbook/curriculum/teacher guide is primary for syllabus-critical wording and scope.
- Established Bangladeshi educational sources such as 10 Minute School may corroborate definitions and explanations.
- International authoritative sources may be used for supplementary validation.
- Important definitions, laws, formulas, units, and syllabus-critical claims must be source-traceable.
- Do not present model-memory-only wording as an authoritative textbook definition when a reliable source is available.
- If sources conflict materially, flag the conflict and resolve it explicitly rather than silently choosing one.

## Asset discipline

Search for suitable trusted existing simulations, animations, videos, and diagrams before generating custom equivalents. Prefer reuse when scientifically correct, age-appropriate, accessible, and classroom-suitable. Generate custom media only when it fills a real instructional gap or materially improves teaching.

## Tool roles

- ChatGPT: lead orchestration, pedagogy, lesson architecture, source reconciliation, QA, project state.
- NotebookLM: source-grounded extraction from uploaded materials.
- Gemini: independent/adversarial review and targeted second-opinion fact checking.
- Beautiful.ai: primary final deck rendering after content freeze.
- Canva: supplementary visual design for infographics, worksheets, diagrams, posters, and custom visual layouts.
- Hyperagent: custom simulation/interactive/advanced media only when justified.

## Completion discipline

A chapter is not complete until chapter-wide coverage, duplication, timing, scientific accuracy, source traceability, visual usability, and cross-lesson continuity have all been checked and the repository state has been updated.
