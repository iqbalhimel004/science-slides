# Lesson 2 Controlled R3 Validation Pack v0.3 QA — 2026-09-08

Status: **REVISED_AFTER_USER_REVIEW — INTERNAL_QA_PASS — USER_REVIEW_REQUIRED**

## Why v0.2 was not accepted

User review identified three material design/science-communication defects in v0.2:

1. HRV-02 empty-vessel diagram did not clearly communicate what was being shown;
2. HRV-04 mirage mechanism diagram did not communicate the scientific explanation correctly/clearly enough;
3. visible `বোর্ডে বলার মূল কথা` boxes were teacher-script UI, not appropriate student-facing lesson content.

Therefore v0.2 internal PASS was insufficient and is superseded as a user-review candidate.

## v0.3 corrections

### Global slide-surface correction

- removed visible `বোর্ডে বলার মূল কথা` framing;
- replaced it with concise student-facing `স্লাইডে থাকা প্রয়োজনীয় তথ্য` where an information panel is useful;
- teacher narration/prompts are moved to speaker notes;
- slide surface remains student-facing: necessary diagrams, labels, concise facts, media/context and mechanism visuals.

Canonical rule:

`SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`

### HRV-02 — coin visibility

Rebuilt the visual so the comparison is explicit:

- left: `খালি পাত্রে মুদ্রা দেখা যায় না`;
- straight sight line from coin toward eye is shown dashed/red and visibly blocked by the vessel rim;
- right: `পানি দিলে মুদ্রা দেখা যায়`;
- water surface is shown;
- ray from coin reaches the water-air surface, refracts, then reaches the eye;
- coin remains at the same physical position.

### HRV-04 — mirage mechanism

Rebuilt the science mechanism panel so it now shows:

- cooler / optically denser air higher above the road;
- warmer / optically lighter air adjacent to the road;
- light from sky/distant object entering the gradient;
- a smooth curved path representing continuous refraction through the vertical refractive-index gradient;
- ray reaching the observer after turning upward;
- a dashed backward extension from the incoming ray direction toward a virtual/apparent position below the road line;
- explicit statement that the road is not actually water-covered;
- no single hard mirror-like optical boundary.

The contextual mirage scene remains separate from the deterministic mechanism model.

## Artifact identity

- PPTX: `Lesson2_R3_Optics_Controlled_Validation_v0_3.pptx`
- PDF: `Lesson2_R3_Optics_Controlled_Validation_v0_3.pdf`
- montage: `montage_v0_3.png`
- semantic report: `semantic_report_v0_3.json`
- build script: `build_l2_r3_validation_pack_v03.js`

SHA-256:

- PPTX: `757f48036696b6d5c28aad25a69c77294686995f867affb864d9e18d1d1ccbbb`
- PDF: `72fda1d8838f2d09076dc07ce3a6ddbb34eb0254232d0c08815fb8c506325d5c`
- montage: `160c30494f733b0663d87f82c883cc73f023258af06b851b1ee6663e87ac8317`
- semantic report: `7bdb2440ed50dd9d057fe2f2c6ceeb59e1634d1ae6b203c4d37b9a988ef1d8bf`
- build script: `e90df4656e5128d5280cd5ab94ee41e5aede27884801a5a8e5a6f534e7998112`

## Automated QA

- `slides_test.py`: PASS — no overflow detected;
- render: PASS — 7 slides;
- PDF export: PASS — 7 pages;
- direct montage review: PASS after targeted HRV-04 label-position refinement;
- student-facing terminology remains consistent with Chapter 11 terminology lock.

## Semantic QA v0.3

- HRV-01: PASS;
- HRV-02: PASS — blocked empty-vessel line of sight + refracted water-added path + stationary coin;
- HRV-03: PASS;
- HRV-04: PASS — thermal-gradient model, gradual bending, upward final ray to eye, backward apparent extension, no water/mirror boundary;
- HRV-05: PASS;
- HRV-06: PASS;
- HRV-07: PASS.

## Current disposition

**V0_3_INTERNAL_QA_PASS_AFTER_USER_DRIVEN_REBUILD — USER_REVIEW_REQUIRED**

Do not call the high-risk pack user-approved until the user accepts v0.3 or gives further targeted corrections.
Do not assemble the full Lesson 2 deck until this gate is accepted.
