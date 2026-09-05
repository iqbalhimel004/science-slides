# Gemini Review Gate B — Targeted Pre-Freeze Audit

Date prepared: 2026-09-06
Status: READY_FOR_BUNDLE
Chapter: Class 8 Science — Chapter 11: আলো
Repository: `iqbalhimel004/science-slides`

## Purpose

Gate B is a **targeted implementation audit**, not a second full Gate A review.

Gate A already reviewed and reconciled the four-lesson architecture, major scientific framing, prerequisite order, timing model, misconceptions and key outdated-textbook risks. Do **not** spend the review re-proving established science or redesigning the chapter from scratch.

Gate B exists because the project now has slide-level storyboards, visual specifications, resource maps, concrete slide IDs and recomputed timing that did not exist at Gate A.

## Core non-duplication rule

Previously verified/reconciled science should be treated as established **unless** a current storyboard/resource specification:

- contradicts it;
- weakens or omits an accepted Gate-A correction;
- introduces a new scientifically risky statement/diagram;
- creates a new prerequisite/coverage/duplication problem;
- or uses a visual/analogy that could materially mislead students.

If none of those conditions applies, say `NO NEW ISSUE` rather than re-auditing the topic.

## What to review now

Focus only on the implementation layer:

1. **Gate-A regression check** — Did any accepted Gate-A correction get lost or weakened in the current storyboards?
2. **Slide-level science drift** — Does any storyboard wording, diagram specification or analogy now create a new scientific problem?
3. **Visual-model risk** — Could the planned ray, eye, lens, mirage, fibre, camera or film-processing visual encode a misconception even if the prose is correct?
4. **Coverage** — Is every meaningful NCTB body topic still mapped to a concrete slide/disposition?
5. **Duplication** — Is there any unnecessary cross-lesson repetition that would waste classroom time?
6. **Prerequisite order / continuity** — Does each concept still appear after what students need to understand it?
7. **Timing** — Are the slide-level times plausible, especially Lesson 4 at 54 planned minutes?
8. **Cognitive load** — Are any specific slides/segments likely to become too dense when rendered?
9. **Resource/fallback risk** — Is any CORE learning dependent on fragile internet/media or an unverified external visual?
10. **NCTB vs current science** — Did any outdated/simplified textbook treatment slip back into the storyboard without the agreed clarification?
11. **Pre-freeze blockers only** — Identify only issues that should be fixed before content freeze. Cosmetic renderer choices belong later unless they affect scientific meaning/readability.

## Topics already reconciled at Gate A

Do not re-open these without a new implementation-specific reason:

- four-lesson architecture;
- phenomenon-first reorder in Lesson 1;
- normal-incidence exception;
- optical density ≠ mass density;
- parallel-sided slab geometry limit;
- mirage as refractive-index-gradient/progressive-bending phenomenon rather than a single hard mirror boundary;
- minimum diverging-lens prerequisite before myopia correction;
- cornea as major initial focusing surface and crystalline lens as accommodation/fine-focus element;
- spectacles as a clearly labelled supplementary source-gap repair;
- film-camera chemistry as context-specific, not modern digital-camera chemistry;
- eye-camera comparison as shared function with non-identical mechanism;
- Gemini suggestions are not automatically authoritative.

## Current timing baseline

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 46 | 8 | 54 | 6 |

Lesson 4 is intentionally closest to the ceiling. Do not recommend adding more CORE content there. If you believe it will overrun, name the exact slide/segment to compress or move and why.

## Evidence rule

For a **new material scientific criticism**, cite a current authoritative source. Prefer recognized universities, high-quality open textbooks, professional scientific/medical organizations, major public scientific agencies or primary literature when truly necessary.

Do not cite a source merely to restate a Gate-A finding already recorded in the bundle.

Do not treat Gemini itself as authority.

## Required output format

Return exactly these sections.

### 1. Executive verdict
Choose one:

- `PASS_TO_CONTENT_FREEZE`
- `PASS_WITH_TARGETED_CHANGES`
- `HOLD_FOR_MATERIAL_FIX`

Give 3–6 sentences focused on **new implementation findings only**.

### 2. Gate-A regression check
A table:

| Gate-A correction | Current implementation status | Regression? | Exact slide(s) if relevant | Action |
|---|---|---|---|---|

Use `PRESERVED`, `WEAKENED`, `MISSING`, or `NOT_APPLICABLE`.

### 3. Pre-freeze implementation findings

| ID | Severity | Lesson/slide | New finding | Why it matters | Minimal recommended fix | Evidence if scientific |
|---|---|---|---|---|---|---|

Severity:
- `BLOCKER`
- `HIGH`
- `MEDIUM`
- `LOW`

Only `BLOCKER`/`HIGH` should normally prevent content freeze.

### 4. Coverage / prerequisite / duplication audit
State only newly observed gaps or confirm `NO NEW ISSUE` for:

- missing coverage;
- prerequisite order;
- cross-lesson continuity;
- unnecessary duplication.

### 5. Timing and cognitive-load audit
For Lessons 1–4:

- planned time;
- realistic risk: LOW / MEDIUM / HIGH;
- exact likely overrun/density slide(s), if any;
- minimal change if needed.

### 6. Visual / diagram / resource risk audit
Check the planned implementation for:

- ray geometry;
- dashed-vs-real ray distinction;
- mirage gradient;
- critical-angle/TIR sequence;
- magnifier construction;
- eye anatomy/accommodation;
- corrective lenses;
- camera real/inverted image;
- aperture vs shutter/exposure;
- film processing;
- eye-camera analogy;
- offline/static fallback.

Report only concrete risks. Do not critique aesthetics that RT-01/render QA will test later.

### 7. Keep-as-is
Name important implementation choices that should not be disturbed before freeze.

### 8. Final pre-freeze action list
Give only the smallest ordered list of changes genuinely needed before content freeze.

If none are material, write `No material pre-freeze changes required.`

### 9. Confidence / evidence gaps
State any point that cannot be judged from the bundle, especially because the actual rendered diagrams do not exist yet.

## Reviewer constraints

- This is **not Gate A again**.
- Do not re-plan the four lessons without a new material implementation problem.
- Do not expand Class 8 scope.
- Do not re-audit settled science unless a storyboard creates a new conflict.
- Prefer a few high-value fixes over many stylistic suggestions.
- Distinguish storyboard/content problems from later renderer/export QA problems.
- Actual drawn diagrams are not yet available; judge the **diagram specifications**, not pixels that do not exist.
- This is a read-only independent review. Do not assume repository write authority.

## After Gemini returns

ChatGPT will:

1. save the raw Gate B review in GitHub;
2. independently validate every material new finding;
3. record `ACCEPT / PARTIAL / REJECT` dispositions;
4. implement only validated changes;
5. rerun relevant G1–G7 checks;
6. checkpoint chapter state;
7. content-freeze only after remaining blockers are resolved.
