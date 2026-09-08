# Lesson 2 Controlled R3 Optics Validation Pack QA — 2026-09-08

Status: **INTERNAL_QA_PASS — USER_REVIEW_NEXT — FULL_LESSON_2_BLOCKED**

Production architecture:

`SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md` v2.1

## Scope

This checkpoint records the first full seven-page controlled high-risk validation pack built after the v2.1 production-system audit.

It does **not** approve the full Lesson 2 classroom deck yet. It creates an internally-passed validation pack for user acceptance before full Lesson 2 assembly.

## Artifact identity

Local generated artifacts:

- PPTX: `Lesson2_R3_Optics_Controlled_Validation_v0_2.pptx`
- PDF: `Lesson2_R3_Optics_Controlled_Validation_v0_2.pdf`
- render folder: `Lesson2_R3_Optics_Controlled_Validation_v0_2/`
- montage: `montage_v0_2.png`
- semantic report: `semantic_report_v0_2.json`

SHA-256:

- PPTX: `32e1ff790c46fcf20b469c64a5867a4dd358b5cdfd7b9b949cda5afb3ae9dbb9`
- PDF: `5346b57614da1d88461a4405a969c871cae2254bb949be4266fad6f83d827cbb`
- montage: `6d5e2018cb04070c3d40aea8be7c6cc257169c8d8536fc11647daf00de078a65`
- semantic report JSON: `146159fc73b24d79431e641f26c6393fc850fa763555e3c846ce35e28bc7db7f`
- runtime build script: `63a2d39fc2165a0692fd5cdef1cde0dd3e6729184cb2f564f69a880648ce584b`

PDF check:

- pages: `7`
- encrypted: `no`
- page size: `960.009 x 540 pt`

## Seven-page pack mapping

1. HRV-01 — apparent position / apparent depth;
2. HRV-02 — coin visibility after water is added;
3. HRV-03 — fish apparent depth;
4. HRV-04 — mirage;
5. HRV-05 — critical angle;
6. HRV-06 — full internal reflection;
7. HRV-07 — optical fibre.

## Build route

- PptxGenJS controlled assembly;
- deterministic SVG geometry source, rasterized to PNG before PPTX insertion because LibreOffice did not reliably render embedded SVG data URIs;
- Noto Sans Bengali rendering checked in final slide PNGs;
- HRV-04 context uses a clearly disclosed generated explanatory mirage scene and a separate deterministic science mechanism panel;
- HRV-05/06/07 use controlled deterministic components rather than Canva raster micro-patching.

## Automated QA

### Layout / overflow

Command:

`slides_test.py Lesson2_R3_Optics_Controlled_Validation_v0_2.pptx`

Result:

`PASS — no overflow detected`

PptxGenJS helper diagnostics:

- overlap warnings from the first draft were corrected by increasing title/subtitle spacing;
- final build emitted no overlap/out-of-bounds warnings from the helper calls.

### Render

Command:

`render_slides.py Lesson2_R3_Optics_Controlled_Validation_v0_2.pptx`

Result:

`PASS — seven PNG slides rendered`

Montage generated:

`montage_v0_2.png`

### PDF export

LibreOffice headless PDF export succeeded.

PDF page count is exactly `7`.

## Semantic science QA

Semantic report status: **PASS**

Assertions recorded for each page:

- HRV-01: two real rays; two dashed backward extensions; apparent point shallower than real point;
- HRV-02: blocked line of sight before; refracted path after; coin does not move;
- HRV-03: two real rays; apparent fish shallower; dashed construction lines;
- HRV-04: gradual bending; no hard mirror boundary; road is not real water;
- HRV-05: `i = C` measured from the normal; `r = 90°` along the interface; reflected ray remains in dense medium;
- HRV-06: `i > C` measured from the normal; transmitted ray count zero; reflected ray remains in dense medium;
- HRV-07: reflection vertices lie on the core–cladding boundary; ray remains inside the core; labels do not overlap the ray path.

## Direct pixel QA

Every rendered slide was inspected after PNG render.

Result: **PASS FOR INTERNAL USER-REVIEW CANDIDATE**

Page findings:

- HRV-01: diagram visible and readable; apparent point is shallower than real point; no material label overlap;
- HRV-02: before/after vessel comparison visible; coin and refracted path readable; no material overlap;
- HRV-03: fish schematic and apparent-depth construction visible; two real rays and two backward extensions readable;
- HRV-04: mirage context visible; separate mechanism panel shows gradual ray bending; generated-image disclosure visible; no clipped over-photo label;
- HRV-05: critical-angle construction readable; angle arc attaches to incident ray and normal; `r = 90°` interface-parallel ray readable; `হালকা মাধ্যম` used;
- HRV-06: TIR construction readable; `i > C` measured from normal; no outside refracted ray; `হালকা মাধ্যম` used; earlier overlap issue absent;
- HRV-07: optical-fibre component readable; ray reflects at core–cladding boundary; core/cladding labels do not cover the ray; earlier lower-text overlap/crowding issue absent.

## Language QA

- Student-facing copy is Bangla-first;
- no standalone `TIR`;
- current `হালকা মাধ্যম` terminology appears on critical-angle/TIR pages;
- earlier English fragments in the right-side teaching bullets were corrected before this QA checkpoint;
- HRV-04 generated-image disclosure was changed from mixed English to Bangla: `কৃত্রিমভাবে তৈরি ব্যাখ্যামূলক দৃশ্য — বাস্তব ছবি নয়`.

## Remaining hard gates

This pack is **not** final Lesson 2.

Remaining before full Lesson 2 build:

1. user acceptance of this internally-passed high-risk validation pack;
2. current exact Lesson 2 copy lock / structured spec using v2.1 terminology override;
3. full Lesson 2 controlled PPTX assembly;
4. full lesson automated/text/layout/semantic/pixel QA;
5. Microsoft PowerPoint exact-artifact smoke test when available;
6. PDF/offline fallback verification;
7. final user acceptance before `CLASSROOM_READY`.

## Current disposition

**CONTROLLED_R3_VALIDATION_PACK_V0_2_INTERNAL_QA_PASS — USER_REVIEW_NEXT**

Full Lesson 2 remains blocked until user acceptance of the validation pack.
Do not start Lesson 3 yet.
