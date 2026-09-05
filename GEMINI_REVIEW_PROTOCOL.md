# Gemini Independent Review Protocol

Gemini is an optional independent/adversarial reviewer. It does not replace primary sources or automatically change canonical project state.

## When to use

Use Gemini when it can materially improve confidence, especially for:

- master-workflow gap analysis
- difficult or ambiguous science
- chapter decomposition sanity checks
- missing-topic detection
- source conflicts
- misconception detection
- final chapter coverage review

## Required review posture

Ask Gemini to find problems, not to endorse the plan.

Suggested master-plan audit prompt:

> Act as an independent curriculum, pedagogy, scientific-accuracy, classroom-practicality, and production-workflow auditor. Review the supplied Science Slides project plan adversarially. Find missing controls, contradictions, failure modes, unnecessary complexity, source-verification weaknesses, timing risks, accessibility issues, copyright/resource risks, and places where the process could still produce scientifically incorrect or impractical classroom slides. Do not praise the plan. Rank findings by severity and explain the concrete failure each finding could cause. Do not rewrite the entire plan unless a rewrite is necessary to fix a specific high-severity problem.

Suggested chapter audit prompt:

> Independently audit this chapter analysis and lesson split against the supplied source material. Identify any omitted concept, incorrect dependency, unrealistic 60-minute timing assumption, scientific ambiguity, exam-facing wording risk, likely student misconception, unnecessary repetition, or lesson boundary that harms understanding. Treat the source material as primary. Return findings ranked by severity with exact evidence/location when possible.

## Acceptance rule

For every Gemini finding:

1. independently verify it against the textbook and/or authoritative sources
2. classify it as valid, partially valid, invalid, or unresolved
3. update canonical files only for validated findings
4. record durable changes in `DECISIONS.md` when they alter project policy

Model agreement alone is not evidence.
