# Lesson 1 Design / Engagement Revision — 2026-09-06

Status: **REQUIRED BEFORE CLASSROOM_READY**

## Trigger

After opening the repaired Lesson 1 PPTX successfully in Microsoft PowerPoint, the user reported two material shortcomings:

1. the deck contains no meaningful animation/simulation/interactive element;
2. the visual design/UI/color system is not attractive enough for the original project objective.

This feedback is valid and is treated as a production-quality gap, not as a change to the frozen science/content plan.

## Canonical interpretation

The current Lesson 1 build is a **science-correct controlled prototype**, not the final visual/engagement standard for the project.

The original project plan explicitly requires:

- visually compelling classroom decks;
- purposeful layout variation;
- meaningful visual storytelling;
- progressive construction/reveal where it improves understanding;
- simulation/video/interactive use where it teaches better than a static slide;
- static/offline fallback for every classroom-critical dynamic element;
- a reusable master visual system calibrated from the first chapter.

The current build under-implements those requirements.

## What was correctly implemented

- frozen scientific wording;
- deterministic ray geometry;
- offline-capable CORE;
- Bangla font/render reliability;
- PPTX/PDF export path;
- PowerPoint repair/compatibility recovery;
- projector-safe structural layout at a basic level.

These should be preserved.

## What was under-implemented

### A. Motion / progressive reveal

The storyboard itself anticipated progressive visual construction, especially in optics/ray slides. The current PPTX mostly presents completed static diagrams.

Target improvement:

- L1-S02: reveal source → object → eye sequence stepwise;
- L1-S07: progressively reveal interface → incidence point → normal → incident ray → labels;
- L1-S08: progressive reflection-vs-refraction comparison;
- L1-S09/L1-S10: staged speed/direction comparison;
- L1-S11/L1-S12: prediction first, then reveal refracted ray and rule;
- L1-F01: build glass-slab path in stages.

Motion must be instructional, not decorative.

### B. Simulation / interactive support

`RESOURCES.md` already includes PhET Bending Light as optional FLEX/teacher support (`R1-09`). It was not integrated into the first controlled PPTX.

Required revision:

- include one clean optional PhET launch slide/button in FLEX or teacher-support area;
- include a clear prediction prompt before launch;
- include a static fallback path so the lesson remains fully teachable offline;
- do not make internet connectivity a CORE dependency.

### C. Visual/UI attractiveness

The first controlled build prioritized scientific determinism and compatibility but did not yet establish the intended high-engagement master visual identity.

Required revision goals:

- stronger opening/hook slide visual impact;
- more purposeful use of full-width imagery/illustration where relevant;
- richer but restrained physics visual identity;
- improved accent palette and contrast hierarchy;
- more consistent card/callout/diagram styling;
- better visual rhythm across consecutive slides;
- less utilitarian/box-heavy appearance;
- stronger focal hierarchy and whitespace balance;
- visual differentiation among observation, explanation, prediction, rule, misconception and exit-check slides;
- maintain projector readability and scientific precision.

### D. Optional Canva finishing

Canva may now be useful for **controlled finishing**, because the content/diagram authority remains the controlled PPTX.

If Canva is used:

- import the controlled PPTX;
- do not allow Canva AI to rewrite frozen wording;
- do not replace deterministic scientific diagrams with generated approximations;
- use Canva only for polish, layout refinement, iconography/backgrounds/low-risk visual assets;
- rerun post-import science/notation/projector/export QA.

## Final quality rule

Lesson 1 must not be marked `CLASSROOM_READY` until all of the following pass:

1. scientific correctness;
2. PowerPoint compatibility;
3. Bangla/notation fidelity;
4. projector readability;
5. visual attractiveness/engagement review;
6. purposeful motion/progressive-reveal review;
7. simulation/interactive support included where it adds instructional value, with static fallback;
8. PPTX + PDF fallback verification;
9. reproducibility/artifact-persistence normalization.

## Immediate next action

Do **not** proceed directly to Lesson 2 production yet.

First revise Lesson 1 into a **visual-engagement prototype v2** that preserves the frozen content but improves UI/design, adds purposeful progressive reveal/animation, and integrates the optional PhET support appropriately.

After user approval of this revised visual standard, use it as the master style baseline for Lessons 2–4.
