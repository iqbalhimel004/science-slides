# Lesson 2 v1 Reproducible Build Specification

Date: 2026-09-06
Status: **ACTIVE FOR CURRENT V1 ARTIFACT**

## Production route

`Controlled PptxGenJS -> LibreOffice normalization -> slides_test/render QA -> PDF fallback`

## Runtime build source fingerprint

`build_lesson2_v1.js`

SHA-256:

`8622ba578848f76b10995477a33f5d3fffd142ad452b1c9199cccf521ed5e467`

The exact runtime source should be preserved/reconstructed from this specification if needed in a new execution environment.

## Slide size / typography

- 16:9 widescreen
- Bangla font: `Noto Sans Bengali`
- Latin/scientific symbols: `Noto Sans`
- dark navy optics theme inherited from approved Lesson 1 baseline
- cyan/yellow/green/orange used as controlled semantic accents

## Physical slide sequence

1. L2-S01a retrieval questions
2. L2-S01b retrieval answers
3. L2-S02 actual vs apparent position
4. L2-S03 actual ray vs backward dashed construction
5. L2-S04 pencil/stick in water
6. L2-S05 coin visibility
7. L2-S06 fish apparent depth
8. L2-S07 mirage gradient
9. L2-S08a incidence-angle prediction
10. L2-S08b incidence-angle reveal
11. L2-S09 critical angle `r=90°`
12. L2-S10 TIR two conditions
13. L2-S11a three-state hinge prediction
14. L2-S11b three-state answer
15. L2-S12 optical fibre introduction
16. L2-S12b optical fibre repeated-TIR cutaway
17. L2-S13 uses
18. L2-S14a summary/exit question
19. L2-S14b exit answer
20. L2-F01 simulation links
21. L2-F02a practice prediction
22. L2-F02b practice answer

## Deterministic science geometry

### Apparent position

- solid lines = real light rays;
- dashed lines = backward extensions only;
- apparent point lies where backward extensions appear to originate;
- object itself does not physically move.

### Mirage

- use a gradual bend/segmented curve through a temperature/refractive-index gradient;
- do not draw one hard mirror-like boundary;
- dashed apparent extension is explanatory only.

### Critical angle

At `i = C`:

- incident ray in higher-index medium;
- reflected ray remains in first medium;
- refracted ray lies along interface;
- `r = 90°`;
- explicitly state this is not yet TIR.

### TIR

- higher-index/denser -> lower-index/rarer;
- `i > C`;
- no transmitted refracted ray in idealized geometric-optics model.

### Fibre

- repeated internal reflections guide light;
- do not depict light as stored;
- optional core/cladding note only as non-assessed enrichment.

## Dynamic implementation

Use staged duplicate-slide reveal rather than fragile native animation:

- retrieval predict/answer;
- increasing incidence predict/answer;
- three-state hinge predict/answer;
- summary/exit question/answer;
- FLEX practice question/answer.

## Simulation routing

FLEX only:

- PhET Bending Light
- The Physics Classroom Refraction Interactive

Static CORE fallback always remains available.

## Visual asset routing

Follow `VISUAL_ASSET_ROUTING.md`.

Current v1 uses deterministic PptxGenJS/SVG-style illustrations and does not consume ChatGPT-native image generation.

If a reviewer/user rejects any physical-object depiction as too schematic, replace only that base visual through:

1. verified existing real/open/licensed image; or
2. connected Canva/Canva AI/Canva Pro visual generation;
3. controlled scientific overlays retained in PptxGenJS.

Do not hand over ray geometry or labels to generative image tools.

## Exact current artifact fingerprints

PPTX:
`157b5f8ae2fb21a26dbf514d42ca149c9079c1fb42502327de841a6c8d250ba5`

PDF:
`ab639041ca653ec3b0de7c645872869cdaec0bd16a2064d333566d66b2f31212`

## QA record

`PRODUCTION_QA_V1_2026-09-06.md`
