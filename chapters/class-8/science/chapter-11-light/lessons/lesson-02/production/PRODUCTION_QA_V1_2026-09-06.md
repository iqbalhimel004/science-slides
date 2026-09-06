# Lesson 2 Production QA — v1

Date: 2026-09-06
Lesson: `প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন`
Status: **BUILT — INTERNAL QA PASS — USER POWERPOINT/VISUAL REVIEW PENDING**

## Current artifacts

- PPTX: `Class8_Science_Ch11_Lesson2_ApparentPosition_TIR_PPTX_SAFE.pptx`
- PDF: `Class8_Science_Ch11_Lesson2_ApparentPosition_TIR_PPTX_SAFE.pdf`

Fingerprints:

- PPTX: `157b5f8ae2fb21a26dbf514d42ca149c9079c1fb42502327de841a6c8d250ba5`
- PDF: `ab639041ca653ec3b0de7c645872869cdaec0bd16a2064d333566d66b2f31212`
- build source/runtime copy: `8622ba578848f76b10995477a33f5d3fffd142ad452b1c9199cccf521ed5e467`

## Structure

- 22 physical slides
- 14 CORE storyboard topics represented through staged/predict-reveal states
- 2 FLEX activities represented through simulation and practice slides
- CORE remains offline-capable

## Dynamic implementation

Implemented:

- retrieval predict → answer reveal;
- increasing-incidence-angle predict → reveal;
- `i<C / i=C / i>C` hinge predict → answer;
- summary/exit predict → answer;
- TIR practice predict → answer;
- FLEX simulation launch slide.

No native PowerPoint animation is required. Staged duplicate-slide states are used for compatibility and PDF fallback reliability.

## Science QA

Focused internal checks passed for:

- actual vs apparent position;
- solid actual ray vs dashed backward extension;
- pencil/stick apparent displacement;
- coin visibility after adding water;
- fish apparent depth;
- mirage presented as gradual refractive-index/temperature-gradient bending, not a single mirror-like boundary;
- denser-to-rarer increasing incidence angle;
- critical angle at `r = 90°`;
- reflected ray retained at `i = C`;
- `i = C` explicitly separated from TIR;
- TIR requires denser-to-rarer propagation and `i > C`;
- three-state comparison (`i<C`, `i=C`, `i>C`);
- optical fibre shown as repeated internal reflection/guiding rather than light storage.

## Language QA

Student-facing text is Bangla-first.

English remains mainly for:

- standard symbols (`i`, `r`, `C`, `TIR`);
- proper resource/product names such as PhET;
- unavoidable short technical terms where the Bangla explanation is adjacent.

## Visual QA

Visual direction inherits Lesson 1:

- dark optics/physics identity;
- large focal diagrams;
- high contrast;
- prediction and answer states visually distinct;
- deterministic ray geometry;
- no uncontrolled AI-labelled science diagram;
- no ChatGPT-native image generation used for Lesson 2.

Important note:

The deck deliberately uses controlled schematic/illustrative visuals for several concept slides because exact ray geometry is the instructional priority. Where a future physical-object photo materially improves learning, `VISUAL_ASSET_ROUTING.md` requires verified existing/Canva-first asset sourcing and controlled overlays.

## Technical QA

- LibreOffice normalization: PASS
- `slides_test.py`: PASS — no overflow
- PPTX render: PASS
- montage inspection: PASS at prototype level
- PDF export: PASS
- PDF pages: 22
- PDF encrypted: no
- PDF render: PASS

PptxGenJS diagnostics reported a few intentional ray/interface/image overlaps. No severe unintended text overlap remained in the final build.

## Simulation

FLEX slide includes:

- PhET Bending Light primary link;
- The Physics Classroom Refraction Interactive alternate.

CORE does not depend on either link.

## Remaining hard gates

Before Lesson 2 can be `CLASSROOM_READY`, user should confirm:

1. exact PPTX opens in Microsoft PowerPoint without repair warning;
2. staged reveal order feels natural;
3. simulation links open;
4. key slides are visually attractive and projector-readable;
5. apparent-position, critical-angle/TIR, mirage and optical-fibre visuals are clear enough;
6. any physical-object visual that still feels too schematic should be replaced under `VISUAL_ASSET_ROUTING.md` before final lock.

## Verdict

`LESSON_2_V1_BUILT — SCIENCE/EXPORT_INTERNAL_QA_PASS — USER_POWERPOINT_AND_VISUAL_REVIEW_PENDING`
