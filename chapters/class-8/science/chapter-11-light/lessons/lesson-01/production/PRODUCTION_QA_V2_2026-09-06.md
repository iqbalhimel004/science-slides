# Lesson 1 Production QA — Visual-Engagement Prototype v2

Date: 2026-09-06
Lesson: Class 8 Science, Chapter 11 — আলো, Lesson 1
Route: controlled PptxGenJS source → deterministic diagrams → LibreOffice normalized PPTX → PDF fallback
Status: **V2 BUILT — USER POWERPOINT SMOKE TEST + VISUAL APPROVAL PENDING**

## User-facing artifacts

- PPTX: `Class8_Science_Ch11_Lesson1_v2_Visual_Engagement_PPTX_SAFE.pptx`
- PDF: `Class8_Science_Ch11_Lesson1_v2_Visual_Engagement_PPTX_SAFE.pdf`
- Source: `production/build_lesson1_v2.js`

## SHA-256 fingerprints

- PPTX: `6b0173457053ba42f5fd1fadbf212f56ec6b8a716a5d4e2d1aee85b695819413`
- PDF: `9af37c18c8ef00693107092b7382cfa4a0651a17995f3d2c7185ee0afc2a6caa`
- Build source: `48b47ad6e715dd38eb87ee613541677567c72d7442cd969e91a8e72727e73772`
- Render montage: `4aa03410b86932ef92b0794a5b8e2e0a937632d680a48c177280b1e4775b65cc`

## Structure

- Physical slides: 28
- Dynamic strategy: staged duplicate-slide reveal states, not fragile native animation
- Content scope: frozen Lesson 1 science/content; no content unfreeze
- CORE learning: offline-capable
- FLEX simulation: PhET Bending Light primary launch target, Physics Classroom Refraction Interactive alternate

## Dynamic implementation

Implemented modes:

- `PREDICT_THEN_REVEAL`: seeing hook, medium classification, reflection/refraction, normal incidence, bending rules, exit check
- `STAGED_REVEAL`: light-to-eye sequence, chapter properties, ray vocabulary, slab geometry
- `LIVE_DEMO`: pencil/straw-in-water observation slide with static fallback visual
- `SIMULATION`: FLEX PhET launch support with prediction task, debrief cue and static fallback
- `INTERACTIVE_NAVIGATION`: limited to external launch buttons; complex branching intentionally not used

Native animation: none required. Staged slides preserve the same pedagogical effect with stronger PDF/static fallback reliability.

## Simulation selection

Primary: PhET Bending Light

Rationale: selected after multi-source comparison because it best fits Lesson 1 qualitative refraction basics, has Bengali availability, supports offline use, has clear classroom licensing, and avoids unnecessary Snell-law mathematics.

Secondary alternate: The Physics Classroom Refraction Interactive, retained for measurement-heavy/protractor-based investigation.

Canonical comparison:
`production/SIMULATION_CANDIDATE_COMPARISON_2026-09-06.md`

## Technical QA

### PPTX package/render/overflow

- `slides_test.py`: PASS — no overflow detected
- LibreOffice normalized/resaved PPTX created to reduce Microsoft PowerPoint repair risk
- normalized PPTX rendered successfully to images
- render montage visually inspected

### PDF fallback

- PDF generated from normalized PPTX with LibreOffice
- PDF preflight:
  - pages: 28
  - encrypted: no
  - openable: yes
  - likely scanned: no
- PDF rendered successfully to images
- PDF montage visually inspected

### Diagnostic notes

PptxGenJS helper overlap diagnostics produced non-severe overlap warnings mostly from intended scientific geometry:

- lamp icon parts overlapping by design;
- rays crossing interfaces;
- rays crossing transparent medium regions;
- slab ray paths crossing slab body;
- diagram labels near ray constructions.

No severe overlap warnings remained after correction.

## Science/content QA

PASS at prototype level.

Checked:

- seeing sequence: light path from source/object to eye;
- refraction introduced after observation;
- ray vocabulary: interface, point of incidence, normal, incident and refracted ray;
- angles are measured from normal, not surface;
- normal-incidence exception retained;
- optical density separated from mass density;
- rarer→denser bends toward normal;
- denser→rarer bends away from normal;
- slab equality is explicitly geometry-bound.

## Visual-engagement QA

Improved from v1:

- stronger dark physics/light identity;
- improved contrast and visual rhythm;
- staged explain/reveal sequence rather than one static deck;
- prediction prompts visually distinct;
- larger deterministic ray diagrams;
- live demo and simulation support included;
- repeated box-heavy static feel reduced.

Still pending:

- user visual/motion approval;
- Microsoft PowerPoint user-side open test;
- hyperlink/button playback test in PowerPoint;
- real projector readability judgment.

## PowerPoint compatibility gate

Internal result:

- normalized PPTX generated and render-tested.

Hard gate still pending:

- user must open the exact PPTX in Microsoft PowerPoint;
- repair warning must be absent;
- hyperlinks/buttons must be tested;
- staged slide order should be checked in Slide Show mode.

## Verdict

`V2 BUILT — SCIENCE QA PASS — EXPORT QA PASS — USER POWERPOINT SMOKE TEST + VISUAL APPROVAL PENDING`

Lesson 2 remains on hold until user approves the Lesson 1 v2 visual/motion direction.
