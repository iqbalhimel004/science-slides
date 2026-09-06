# Lesson 1 v2 Real-Glass Correction QA

Date: 2026-09-06
Lesson: Class 8 Science, Chapter 11 — আলো, Lesson 1
Status: **REALISTIC GLASS-SLAB CORRECTION BUILT — USER REVIEW PENDING**

## Trigger

User reviewed the Bangla textbook-language v2 deck and confirmed:

- PowerPoint opens correctly;
- simulation links open;
- terminology/clarity is now mostly acceptable.

Remaining issue:

- the parallel-sided glass-slab slides did not look like real glass;
- physical images/diagrams should be realistic, not flat schematic material blocks, unless deliberately abstract.

## Policy added

New canonical policy:

`/PHYSICAL_VISUAL_REALISM_POLICY.md`

Core production consequence:

Physical apparatus visuals should be realistic/recognizable. For optics, use a realistic object base plus deterministic scientific ray overlays.

## Correction made

Corrected slides:

- slide 26: `সমান্তরাল-পৃষ্ঠ কাচের পাত — ধাপ ১: পথ অনুমান`
- slide 27: `সমান্তরাল-পৃষ্ঠ কাচের পাত — ধাপ ২: উত্তর ও ব্যাখ্যা`

Changed from:

- flat transparent blue parallelogram slab;
- schematic-only visual.

Changed to:

- realistic transparent thick glass-slab visual with reflective/refractive edge cues;
- deterministic overlay rays and Bangla labels;
- prediction state and answer state remain separate;
- first/second বিভেদতল labels retained;
- আপতিত রশ্মি, প্রতিসরিত রশ্মি, নির্গত রশ্মি retained;
- geometry-bound rule retained.

## Current user-facing artifacts

- PPTX: `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_RealGlass_PPTX_SAFE.pptx`
- PDF: `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_RealGlass_PPTX_SAFE.pdf`

SHA-256:

- PPTX: `1041598ab9e3ec4979e3a85c579b8a73917b61b3371f3ef4e0ce88e3c69a65c6`
- PDF: `f1ff2994dbfb0d6dc8d00cd202ec5fe17d6ea5bf0e17b11314b88a20c1785a4b`
- realistic glass base image: `46d3562ed4a29d2942b7b976e682e5a8ae8a8a5c64496643083cae5d5169fb1b`
- patch script: `f26898e77947718ef72df37bafb5abd01ed25040ead489151b780c922830875d`

## Asset source

Glass visual source:

- generated internally as a photorealistic glass-slab illustration;
- prompt: single thick transparent rectangular glass slab on deep navy-black background, three-quarter perspective, visible beveled edges, cyan rim glints, internal refraction/reflections, no text or other objects;
- not used as science geometry authority;
- deterministic ray overlays are drawn separately.

## QA performed

### PPTX package / render

- PPTX package ZIP integrity: PASS
- LibreOffice-normalized PPTX produced: PASS
- PPTX rendered to 28 slide images: PASS
- slides 26-27 visually inspected: PASS at prototype level

`slides_test.py` was not relied on for this correction because slides 26-27 are full-slide raster replacements and all other text slides had already passed in the previous v2 QA. Render/PDF inspection is the controlling check for the revised slides.

### PDF fallback

PDF preflight:

- pages: 28
- encrypted: no
- openable: yes
- likely scanned: no

PDF rendered to images: PASS.

### Science integrity

PASS at prototype level.

Retained:

- incident ray enters first interface;
- refracted ray travels through the glass slab;
- emergent ray leaves second interface;
- incident and emergent rays are represented as parallel in the answer slide;
- lateral shift may occur;
- rule remains explicitly geometry-bound to a parallel-sided glass slab and is not generalized to every boundary.

### Bangla/student-facing language

PASS at prototype level.

Labels are Bangla-first:

- কাচের পাত
- প্রথম বিভেদতল
- দ্বিতীয় বিভেদতল
- আপতিত রশ্মি
- প্রতিসরিত রশ্মি
- নির্গত রশ্মি
- সমান্তরাল সহায়ক রেখা

## Remaining hard gate

User must open/test the new `RealGlass` PPTX and approve whether:

1. the new glass-slab visual now looks sufficiently realistic;
2. slide 26-27 are understandable in Slide Show mode;
3. PowerPoint still opens without repair warning;
4. the overall Lesson 1 v2 visual direction is approved for Lesson 2 inheritance.

Lesson 2 remains on hold until this approval or further revision.
