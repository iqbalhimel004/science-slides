# Lesson 2 Production QA — v2

Date: 2026-09-07
Lesson: `প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন`
Status: **INTERNAL_QA_PASS — USER_POWERPOINT_AND_VISUAL_REVIEW_PENDING**

## Why v2 exists

Lesson 2 v1 passed prototype render/overflow QA but user review exposed material failures:

- unclear fragmentary Bangla questions;
- unnecessary English/mixed-language student-facing text;
- unexplained `TIR` acronym;
- apparent-position/fish diagrams using insufficient ray construction;
- critical-angle reflected ray drawn in the wrong medium;
- full-internal-reflection geometry errors;
- a hinge question referring to diagrams that were not actually shown.

V1 must be treated as **superseded / not classroom-ready**.

## Current artifacts

PPTX:
`Class8_Science_Ch11_Lesson2_v2_Bangla_Accurate_PPTX_SAFE.pptx`

SHA-256:
`4136eb757aed1d1992a1238fce48b6fc9ffcca3fed40a7404c2eef38ab845814`

PDF:
`Class8_Science_Ch11_Lesson2_v2_Bangla_Accurate_PPTX_SAFE.pdf`

SHA-256:
`52e3ff2916992a4284749382bbf797794c75309184eb41ae4d1eb898188e6355`

## New hard safeguards applied

- chapter `TERMINOLOGY_LOCK.md`
- chapter `DIAGRAM_CONTRACTS.md`
- root `ACCURACY_ENFORCEMENT.md`
- frozen `production/SLIDE_COPY_V2.md`
- root `tools/student_text_lint.py`
- lesson `production/check_l2_geometry_contracts.py`

## Copy / language QA

`SLIDE_COPY_V2.md` was frozen before the final v2 artifact.

Checked:

- full understandable Bangla questions replace fragmentary shorthand;
- student-facing terminology is Bangla-first;
- no standalone `TIR` appears;
- `পূর্ণ অভ্যন্তরীণ প্রতিফলন` is the primary visible term;
- `i`, `r`, `C` appear only as scientific symbols alongside/after Bangla terminology;
- English proper resource names are limited to PhET / Physics Classroom simulation buttons;
- student-facing `boundary`, `bending`, `ray diagram`, `Exit Check`, `Hinge check`, `transmitted ray`, `store`, `guide`, `data transmission` were removed/rephrased.

Automated result:

`BANGLA_TERMINOLOGY_LINT: PASS`

## High-risk science QA

### Apparent position

PASS.

- two real rays are used;
- two backward dashed construction lines are used;
- apparent position is shallower than the real object but remains below the surface;
- dashed construction lines are explicitly described as not being real light paths.

### Coin visibility

PASS at Class-8 qualitative level.

- before state shows line-of-sight obstruction;
- after state shows refraction allowing light from the coin to reach the eye;
- no claim that the coin physically rises.

### Fish apparent depth

PASS.

- two real rays are used;
- backward extensions locate a shallower apparent position;
- real fish and apparent fish are distinct.

### Mirage

PASS at qualitative level.

- ray path is shown as gradual/multi-segment bending;
- no single hard mirror-like boundary is used;
- slide explicitly says the road is not actual water.

### Increasing incidence angle

PASS.

- higher-index/denser to lower-index/rarer propagation is retained;
- increasing incidence angle drives the refracted direction toward the interface / `r = 90°` threshold.

### Critical angle

PASS.

At `i = C`:

- incident ray starts in denser medium;
- refracted ray travels along the interface;
- `r = 90°` is visible;
- reflected ray remains in the original denser medium;
- slide explicitly states this is not yet full internal reflection.

### Full internal reflection

PASS.

- denser -> rarer condition is explicit;
- `i > C` condition is explicit;
- reflected ray remains in denser incident medium;
- no transmitted refracted ray is shown outside in the idealized diagram.

### Three-state comparison

PASS.

- `i < C`: refraction exists;
- `i = C`: critical state with grazing refraction;
- `i > C`: full internal reflection only;
- actual miniature diagrams are shown on the answer slide.

### Optical fibre

PASS at lesson level.

- repeated internal reflection is shown;
- slide says the fibre guides light and does not store it.

Automated geometry result:

`DIAGRAM_CONTRACTS_L2_V2: PASS`

## Rendered high-risk visual audit

Focused high-risk slides were rendered separately and inspected:

- apparent position;
- backward tracing;
- coin visibility;
- fish apparent depth;
- mirage;
- incidence-angle progression;
- critical angle;
- full internal reflection;
- three-state answer;
- optical fibre.

Result:

`PASS_WITH_USER_VISUAL_REVIEW_PENDING`

No science-critical geometry issue like the v1 reflected-ray error was observed in the focused v2 render.

## Technical QA

- LibreOffice normalization: PASS
- `slides_test.py`: PASS — no overflow
- PPTX render: PASS
- full montage inspection: PASS at internal level
- PDF export: PASS
- PDF pages: 22
- PDF encrypted: no
- PDF render: PASS
- simulation hyperlink relationships are present in the final normalized PPTX

## Dynamic implementation

Staged duplicate-slide reveals retained for reliability:

- retrieval question -> answer;
- incidence-angle prediction -> reveal;
- three-state classification -> answer;
- summary/exit prompt -> answer;
- practice prompt -> answer.

No native PowerPoint animation is required for the science-critical sequence.

## Remaining hard gate

The exact current PPTX must still be checked by the user in Microsoft PowerPoint for:

1. no repair/recovery warning;
2. simulation buttons open;
3. staged sequence feels natural;
4. high-risk diagrams are clear on the user's display/projector;
5. any remaining wording/visual issue is reported before Lesson 3.

## Verdict

`LESSON_2_V2_INTERNAL_QA_PASS — ACCURACY_SAFEGUARDS_ACTIVE — USER_POWERPOINT_AND_VISUAL_REVIEW_PENDING`
