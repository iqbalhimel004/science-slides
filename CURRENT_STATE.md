# Current State

Last updated: 2026-09-06

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Durable rules

- NCTB controls syllabus/exam context, not automatic scientific truth.
- Material science is checked against current authoritative sources.
- **Finish -> record -> then continue.**
- Renderer route is locked by `D-036` / `RENDERER_ROUTING.md`.
- PowerPoint smoke testing is a hard compatibility gate (`D-037`).
- Dynamic engagement and attractive classroom UI are hard production gates (`D-038`).
- Simulation selection is multi-source and concept-fit driven, not PhET-only (`D-039`).
- Student-facing language is Bangla-first by `CLASSROOM_LANGUAGE_POLICY.md`.
- Physical apparatus visuals follow `PHYSICAL_VISUAL_REALISM_POLICY.md`.
- `ARTIFACT_PERSISTENCE.md` controls reproducibility.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical path:
`chapters/class-8/science/chapter-11-light/`

Current status:

**CONTENT_STORYBOARD_FROZEN — RT_01_COMPLETE — LESSON_1_REALGLASS_CORRECTION_BUILT — USER_REVIEW_OF_REALGLASS_ARTIFACT_PENDING — LESSON_2_ON_HOLD**

## Latest user feedback — accepted and implemented

The user confirmed the previous revised Lesson 1 v2:

- opened correctly in Microsoft PowerPoint;
- simulation links opened correctly;
- all remaining content/design was acceptable except the glass-slab visual.

Remaining issue identified:

- the parallel-sided glass slab looked like a flat artificial shape, not real glass.

Implemented correction:

- added `PHYSICAL_VISUAL_REALISM_POLICY.md`;
- replaced the glass-slab FLEX pair with a realistic glass-slab visual base plus deterministic ray overlays;
- retained Bangla-first terminology and the same scientific rule;
- kept the staged pair: path prediction -> answer/explanation.

## Current Lesson 1 user-facing artifacts

Use these latest files, not the earlier v2/Bangla-only builds:

- PPTX: `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_RealGlass_PPTX_SAFE.pptx`
- PDF: `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_RealGlass_PPTX_SAFE.pdf`

Fingerprints:

- PPTX: `1041598ab9e3ec4979e3a85c579b8a73917b61b3371f3ef4e0ce88e3c69a65c6`
- PDF: `f1ff2994dbfb0d6dc8d00cd202ec5fe17d6ea5bf0e17b11314b88a20c1785a4b`

Latest QA record:

`chapters/class-8/science/chapter-11-light/lessons/lesson-01/production/PRODUCTION_QA_V2_REALGLASS_2026-09-06.md`

Relevant policies:

- `CLASSROOM_LANGUAGE_POLICY.md`
- `PHYSICAL_VISUAL_REALISM_POLICY.md`
- `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
- `SIMULATION_RESOURCE_ROUTING.md`
- `RENDERER_ROUTING.md`

## Lesson 1 current state

### Science/content

PASS at prototype level.

Retained:

- refraction after observation;
- interface / point of incidence / normal vocabulary;
- angles measured from normal;
- normal-incidence exception;
- optical density vs mass density distinction;
- rarer-to-denser and denser-to-rarer rules;
- parallel-sided slab geometry guardrail.

### Dynamic/interaction

Implemented:

- prediction/reveal states;
- staged ray construction;
- classroom activity slide;
- PhET Bending Light primary simulation link;
- Physics Classroom Refraction Interactive alternate link;
- deterministic static fallbacks.

### Latest correction

Slides 26-27 now use realistic glass visual treatment instead of a flat schematic slab.

## Remaining hard gates before Lesson 2

User must review the latest `RealGlass` PPTX and confirm:

1. Microsoft PowerPoint opens it without repair warning;
2. slide 26-27 now look sufficiently realistic and understandable;
3. staged reveal order remains acceptable;
4. simulation links remain functional;
5. the Lesson 1 visual/motion direction is approved as the baseline for Lesson 2.

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

## Next authorized action

**User review of Lesson 1 real-glass corrected v2 artifact.**

Do not start Lesson 2 full production until this is approved or revised to approval.
