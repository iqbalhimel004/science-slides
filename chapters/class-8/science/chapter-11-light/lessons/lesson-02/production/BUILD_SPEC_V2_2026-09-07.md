# Lesson 2 v2 Reproducible Build Specification

Date: 2026-09-07
Status: **ACTIVE FOR CURRENT V2 ARTIFACT**

## Production route

`Frozen lesson content/storyboard -> SLIDE_COPY_V2.md -> controlled PptxGenJS -> terminology lint -> geometry-contract checker -> LibreOffice normalization -> slides_test/render QA -> PDF fallback -> user PowerPoint smoke test`

## Toolchain

- Authoring: PptxGenJS
- Slide QA helpers: `/home/oai/skills/slides/pptxgenjs_helpers`
- PPTX normalization/export: LibreOffice 25.2.3.2
- Slide overflow QA: `slides_test.py`
- Render QA: `render_slides.py`
- PDF fallback: LibreOffice Impress PDF export
- Bangla font: `Noto Sans Bengali`
- Latin/scientific symbols: `Noto Sans`
- Layout: 16:9 widescreen

## Current artifact fingerprints

PPTX:
`Class8_Science_Ch11_Lesson2_v2_Bangla_Accurate_PPTX_SAFE.pptx`

SHA-256:
`4136eb757aed1d1992a1238fce48b6fc9ffcca3fed40a7404c2eef38ab845814`

PDF:
`Class8_Science_Ch11_Lesson2_v2_Bangla_Accurate_PPTX_SAFE.pdf`

SHA-256:
`52e3ff2916992a4284749382bbf797794c75309184eb41ae4d1eb898188e6355`

Runtime generator source SHA-256:
`68e8be73dee501a0b80f252e1f1538e476a31b166b2256f91a353be5dee81bc9`

Terminology lint script SHA-256 for this run:
`860d13edc589ef2496747ddda10c900f85b870896264deba1fa0fb7756586469`

Lesson-specific diagram checker SHA-256:
`6a930999413b8c63af9d08ad1bf84adcbb3fae7bc63fa756c660b333fce7c998`

## Durable source/spec files

- `production/SLIDE_COPY_V2.md`
- `production/check_l2_geometry_contracts.py`
- root `tools/student_text_lint.py`
- chapter `TERMINOLOGY_LOCK.md`
- chapter `DIAGRAM_CONTRACTS.md`
- root `ACCURACY_ENFORCEMENT.md`

The exact current generator source was produced in the controlled runtime for this build. The durable specification below records the exact lesson sequence, geometry contracts, terminology/copy lock, theme/toolchain, artifact fingerprint and checker sources needed to reproduce/verify this v2. For future lessons, commit generator source directly whenever practical.

## Physical slide sequence

1. Retrieval questions — full Bangla questions
2. Retrieval answers
3. Lesson roadmap
4. Actual vs apparent position — two real rays + two backward extensions
5. Real rays vs dashed backward extensions
6. Pencil/straw classroom demonstration + static fallback
7. Coin visibility before/after water
8. Fish apparent depth — two real rays + backward extensions
9. Mirage — gradual multi-segment bending, no hard mirror boundary
10. Increasing incidence angle prediction
11. Increasing incidence angle reveal toward `r=90°`
12. Critical angle `C` — `r=90°`, reflected ray remains in incident medium
13. Full internal reflection — two conditions, no transmitted ray
14. Three-state classification prompt
15. Three-state answer diagrams
16. Optical fibre — repeated internal reflection
17. Uses — endoscope / optical fibre communication
18. Summary/exit prompt
19. Summary/exit answer
20. FLEX simulation links
21. FLEX classification practice
22. FLEX practice answer

## Deterministic geometry invariants

### Apparent position

- at least two real rays from object to surface/eye;
- at least two dashed backward extensions;
- apparent point is shallower than real object but below the water surface;
- dashed lines are construction lines, not real light paths.

### Coin visibility

- before state indicates blocked line of sight;
- after state shows ray refracting at water-air surface and reaching eye;
- no claim that the coin physically rises.

### Fish apparent depth

- at least two real rays;
- backward extensions meet/appear to meet at a shallower apparent position;
- real and apparent fish positions are distinct.

### Mirage

- gradual multi-segment ray bending;
- no hard mirror-like air boundary;
- road is explicitly not real water.

### Critical angle

At `i = C`:

- incident ray is in the denser medium;
- refracted ray lies along the interface, `r=90°`;
- reflected ray remains in the same denser incident medium;
- not yet full internal reflection.

### Full internal reflection

- light travels denser -> rarer;
- `i > C`;
- reflected ray remains in denser incident medium;
- no transmitted/refracted ray appears outside the interface in the idealized diagram.

### Optical fibre

- repeated internal reflections guide light;
- slide explicitly says fibre does not store light.

## Language rules applied

- student-facing Bangla-first terminology;
- no standalone `TIR`;
- no student-facing `boundary`, `bending`, `ray diagram`, `Exit Check`, `Hinge check`, `transmitted ray`, `store`, `guide`, `data transmission`;
- proper resource names may remain English;
- `i`, `r`, `C` are used only as scientific symbols alongside Bangla concept terms.

## Dynamic implementation

Use staged duplicate-slide states instead of fragile native animation:

- retrieval question -> answer;
- incidence-angle prediction -> reveal;
- three-state classification -> answer;
- summary/exit prompt -> answer;
- practice prompt -> answer.

## Simulation routing

FLEX only:

- PhET Bending Light
- The Physics Classroom Refraction Interactive

CORE remains offline-capable.

## Visual asset routing

No ChatGPT-native image generation was used in v2.

High-risk scientific geometry is deterministic. Physical/context scenes remain simplified where that improves clarity. If a later visual-polish pass adds photorealistic bases, follow `VISUAL_ASSET_ROUTING.md`: verified existing/Canva/external base asset only, with controlled science overlays preserved.

## QA commands/results

- `slides_test.py`: PASS — no overflow
- student-facing terminology lint: PASS
- Lesson 2 geometry contracts: PASS
- PPTX rendered successfully
- high-risk slide montage inspected individually/focused
- PDF exported successfully
- PDF pages: 22
- PDF encrypted: no
- PDF render: PASS

## Remaining user-side hard gate

Microsoft PowerPoint smoke test is still required for the exact current PPTX before `CLASSROOM_READY`:

- opens without repair warning;
- staged sequence is acceptable;
- simulation links open;
- visible diagrams/readability are acceptable.
