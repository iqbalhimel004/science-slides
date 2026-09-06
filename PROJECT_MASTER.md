# Project Master Specification

Version: 4.0
Last revised: 2026-09-06
Status: **ACTIVE — POST-RT-01**

## Mission

Create source-verified, NCTB-aligned, visually compelling and classroom-reliable science presentations for Classes 8–10.

Each lesson should help students notice, understand, remember, apply and participate while remaining realistic for a single 60-minute class.

## Priority order

When trade-offs exist, prioritize:

1. scientific/source accuracy
2. pedagogical clarity and cognitive-load control
3. realistic classroom timing
4. student attention and visual engagement
5. visual polish

Aesthetic appeal may never override correctness, readability or reproducibility.

## Core production unit

- The user supplies one complete textbook chapter as PDF or ordered screenshots.
- Analyze the complete chapter before deciding presentation count.
- A chapter may produce one or several lesson decks.
- Split by instructional load and logical concept boundaries, not page count.
- Keep one complete chapter in one production chat when practical.
- If the chat becomes operationally too large, create a durable GitHub stage checkpoint before continuing in a new chat.

## 60-minute lesson architecture

Every lesson must fit inside a 60-minute class including teacher explanation, board work, student responses, activities, media, transitions, practice and exit check.

Default planning model:

- CORE: about 40–45 minutes
- FLEX: about 5–10 minutes
- planned CORE + FLEX: about 50–55 minutes
- contingency: 5–10 minutes intentionally unallocated
- STRETCH: appendix/enrichment only

Do not solve timing failure by speaking unrealistically fast, shrinking slide text or deleting the exit check.

## Chapter analysis requirements

Before lesson splitting identify:

- chapter identity and edition/year where possible;
- source completeness/readability/text-layer status;
- learning outcomes;
- prerequisites;
- key concepts;
- definitions/laws/formulas/units;
- diagrams/processes;
- experiments/activities;
- worked examples/numericals;
- likely misconceptions;
- exam-facing practice opportunities;
- visual complexity;
- instructional load;
- potentially outdated/ambiguous/scientifically weak claims.

## Source standard

NCTB textbook/curriculum/teacher guide is the primary **syllabus/scope/exam-context** source.

It is not automatic scientific authority.

Important definitions, laws, formulas, units, diagrams, processes and causal claims must be traceable and scientifically verified against current authoritative sources. When NCTB is outdated/ambiguous/wrong:

- preserve what students may encounter in the textbook/exam context;
- teach the scientifically correct explanation;
- record the mismatch in source issue/map records.

Established Bangladeshi education sources may support local wording/convention and explanation ideas but are not independent scientific authority by default.

## Pedagogical standard

A lesson should normally include:

- retrieval/prior-knowledge opener;
- coherent concept sequence;
- purposeful visual/example;
- meaningful student response within major segments;
- hinge/check-for-understanding where useful;
- guided practice/application;
- misconception correction where relevant;
- summary + exit check.

Avoid long passive stretches. Do not use a rigid biological 7–10-minute attention-span rule.

## Visual engagement standard

Decks should:

- maintain a clear focal hierarchy;
- use attractive, modern, age-appropriate layouts;
- prefer explanatory diagrams/process visuals/comparisons/worked steps over text blocks;
- avoid long runs of identical layouts;
- segment complex ideas;
- use signaling such as arrows/grouping/numbering/highlighting;
- avoid decorative clutter;
- use motion only when it explains sequence/change/direction/causality/reveal;
- provide static fallbacks for classroom-critical animation/interaction.

## Grade calibration

- Class 8: more concrete visuals, shorter text blocks, stronger guidance
- Class 9: balanced visuals, definitions, applications, diagrams and equations
- Class 10: slightly higher conceptual/exam-facing density where justified

## Renderer / production policy — resolved by RT-01

Canonical routing file:

`RENDERER_ROUTING.md`

Durable decision:

`DECISIONS.md` → `D-036`

Default production route:

**Controlled PptxGenJS authoring/rendering → deterministic SVG/shape scientific visuals → rendered QA → optional Canva controlled-import finishing → verified PPTX + verified PDF fallback.**

### PptxGenJS

Primary route for:

- frozen wording;
- Bangla layout/typography;
- projector-safe sizing/hierarchy;
- deterministic scientific geometry;
- final editable source PPTX.

### Canva

Optional finishing/editing/hosting after controlled PPTX import.

Canva native AI is not the science authority and must not replace high-risk scientific wording/geometry without controlled QA.

### Beautiful.ai

Low-risk layout exploration/prototyping only after RT-01. Not the unattended full-deck science renderer.

### Hyperagent

Specialist deterministic SVG/equation/interactive/QA work when it has a comparative advantage.

## Existing-resource-first policy

Search trusted existing simulations, videos, animations, diagrams and authoritative visuals before creating custom equivalents.

Custom generation is justified when existing resources are scientifically unsuitable, too complex, inaccessible, language-inappropriate or fail a specific teaching objective.

## Artifact persistence / reproducibility

Canonical policy:

`ARTIFACT_PERSISTENCE.md`

A controlled deck should have enough durable source/build information in GitHub to reproduce or verify it later.

From Lesson 2 onward, production checkpoint requires:

- reproducible generator/build source/specification;
- output filenames;
- SHA-256 fingerprints;
- font/toolchain record;
- asset/source manifest where relevant;
- production QA.

Do not commit secrets or font binaries.

## Classroom artifact package

A classroom-ready lesson should include:

1. controlled editable PPTX;
2. verified PDF fallback;
3. static/offline fallback for classroom-critical online/animated elements;
4. source/storyboard/resource/production-QA records in GitHub;
5. reproducibility/build records;
6. post-import QA if Canva finishing is used.

## GitHub as canonical memory

This repository is the durable source of truth. Chat history is temporary working context.

New-chat recovery should begin with:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. active chapter `STATUS.md`
5. active lesson files

## Repository write boundary

Writes are authorized only to:

`iqbalhimel004/science-slides`

Every GitHub write must verify this exact repository identity before execution.

## Final chapter completion standard

A chapter may be marked complete only after:

- full source coverage is confirmed;
- lesson split is approved and recorded;
- important definitions/formulas/units are verified;
- every lesson fits the timing model;
- storyboards/decks are complete;
- scientific/source/pedagogy/cognitive-load QA passes;
- visual-engagement QA passes;
- Bangla/equation/projector/export QA passes;
- resource fallback checks pass;
- chapter-wide coverage and continuity checks pass;
- controlled artifacts are durable/reproducible per `ARTIFACT_PERSISTENCE.md`;
- repository state is updated.
