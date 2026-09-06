# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science
- Chapter: 11 — আলো
- Last updated: 2026-09-06
- Current status: **CONTENT_STORYBOARD_FROZEN — RT_01_COMPLETE — LESSON_1_SIMULATION_SELECTION_COMPLETE — LESSON_1_V2_BUILT_AND_INTERNAL_QA_PASS — USER_POWERPOINT_SMOKE_TEST_AND_VISUAL_APPROVAL_PENDING — LESSON_2_ON_HOLD**

## Durable workflow rules

- external-tool prompts are one-click copy-ready;
- Gemini reviews use fresh downloadable single-file bundles;
- Gate B is targeted implementation QA, not Gate A repetition;
- renderer route is locked by `D-036` / `RENDERER_ROUTING.md`;
- controlled production follows `ARTIFACT_PERSISTENCE.md`;
- compatibility/animation/simulation/UI requirements follow `/PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`;
- simulation provider selection follows `/SIMULATION_RESOURCE_ROUTING.md`;
- universal stage rule: **Finish → record → then continue.**

## Review / freeze state

- Gate A: completed + reconciled
- Gate B: completed + reconciled
- Final pre-freeze QA: `PASS — CONTENT/STORYBOARD FREEZE APPROVED`
- No content unfreeze is required for Lesson 1 v2.

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

Chapter planned CORE + FLEX total: **202 minutes**.

## RT-01 renderer calibration

Status: **COMPLETE**

Final route:

- primary authoring/rendering: controlled PptxGenJS
- science-critical visuals: deterministic SVG/shape construction
- optional finishing: Canva after controlled PPTX import
- classroom delivery/fallback: controlled PPTX + verified PDF
- Beautiful.ai: low-risk layout prototype/inspiration only
- native Canva AI: low-risk visual inspiration/components only

## Lesson 1 v2 production

Status: **BUILT — INTERNAL QA PASS — USER APPROVAL GATE PENDING**

Current user-facing artifacts:

- `Class8_Science_Ch11_Lesson1_v2_Visual_Engagement_PPTX_SAFE.pptx`
- `Class8_Science_Ch11_Lesson1_v2_Visual_Engagement_PPTX_SAFE.pdf`

Fingerprints:

- PPTX: `6b0173457053ba42f5fd1fadbf212f56ec6b8a716a5d4e2d1aee85b695819413`
- PDF: `9af37c18c8ef00693107092b7382cfa4a0651a17995f3d2c7185ee0afc2a6caa`
- build source: `48b47ad6e715dd38eb87ee613541677567c72d7442cd969e91a8e72727e73772`

Durable production records:

- `lessons/lesson-01/production/build_lesson1_v2.js`
- `lessons/lesson-01/production/PRODUCTION_QA_V2_2026-09-06.md`
- `lessons/lesson-01/production/ARTIFACT_MANIFEST_V2_2026-09-06.md`
- `lessons/lesson-01/production/DYNAMIC_MANIFEST.md`
- `lessons/lesson-01/production/SIMULATION_CANDIDATE_COMPARISON_2026-09-06.md`

## Lesson 1 v2 dynamic implementation

Implemented:

- predict/reveal hook;
- staged light-source → object → eye sequence;
- medium classification prediction/reveal;
- pencil-water live-demo slide with static fallback;
- staged ray vocabulary construction;
- reflection/refraction prediction/reveal;
- normal-incidence prediction/reveal;
- rarer→denser and denser→rarer prediction/reveal;
- staged glass-slab FLEX sequence;
- simulation/resource launch slide;
- PhET Bending Light primary target;
- The Physics Classroom Refraction Interactive alternate;
- deterministic static fallback for science-critical content.

Native PowerPoint animation is not required in this version; staged duplicate slides are the preferred compatibility-safe dynamic mechanism.

## Internal QA result

### PPTX

- `slides_test.py`: PASS — no overflow detected
- normalized/resaved with LibreOffice before user delivery
- normalized PPTX rendered successfully
- rendered montage visually inspected

### PDF

- 28 pages
- openable
- unencrypted
- likely scanned: no
- PDF rendered successfully and visually inspected

### Science

Prototype-level PASS:

- light-to-eye path;
- ray vocabulary;
- angle-from-normal rule;
- normal-incidence exception;
- optical density ≠ mass density;
- rarer→denser bends toward normal;
- denser→rarer bends away from normal;
- slab geometry guardrail preserved.

## Simulation selection

Multi-source comparison completed.

Primary Lesson 1 option:

**PhET — Bending Light**

Secondary alternate:

**The Physics Classroom — Refraction Interactive**

GeoGebra remains a reserve geometry option if a specific verified applet adds value.

This selection does not make PhET the default for later lessons.

## Remaining Lesson 1 hard gates

Before Lesson 1 can establish the master visual/motion standard:

1. user opens the exact v2 PPTX in Microsoft PowerPoint;
2. repair/recovery warning must be absent;
3. staged reveal sequence must play in the intended order;
4. simulation hyperlinks should be tested;
5. user evaluates UI/color/visual attractiveness;
6. user approves the visual/motion direction or requests revision.

## Remaining chapter production

1. user tests/reviews Lesson 1 v2;
2. revise v2 if required;
3. lock master visual/motion baseline after approval;
4. produce Lesson 2 using the approved baseline;
5. produce Lessons 3–4;
6. final rendered chapter-wide audit and classroom-ready package.

## Next authorized stage

**User PowerPoint smoke test + visual/motion review of Lesson 1 v2.**

Do not start Lesson 2 full production until Lesson 1 v2 is approved or revised to approval.
