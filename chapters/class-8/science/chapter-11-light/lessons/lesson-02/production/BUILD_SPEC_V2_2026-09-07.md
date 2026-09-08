# Lesson 2 v2 Reproducible Build Specification — Historical Record

Date: 2026-09-07
Status: **HISTORICAL / SUPERSEDED FOR CURRENT PRODUCTION**

## Current authority

Do not use this file as the current build instruction.

Current production authority:

1. root `CURRENT_STATE.md`;
2. root `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md` v2.1+;
3. `PRODUCTION_SYSTEM_V2_1_MIGRATION_2026-09-08.md`;
4. chapter `TERMINOLOGY_LOCK.md` + `DIAGRAM_CONTRACTS.md`;
5. current copy/spec to be created before full Lesson 2 v2.1 assembly.

This file is retained to preserve the v2 artifact/toolchain evidence and should not be interpreted as a current QA PASS.

## Historical v2 route

`Frozen lesson content/storyboard -> SLIDE_COPY_V2.md -> controlled PptxGenJS -> terminology lint -> geometry-contract checker -> LibreOffice normalization -> slides_test/render QA -> PDF fallback -> user PowerPoint smoke test`

## Historical toolchain

- Authoring: PptxGenJS
- PPTX normalization/export: LibreOffice 25.2.3.2
- Slide overflow QA: `slides_test.py`
- Render QA: `render_slides.py`
- PDF fallback: LibreOffice Impress
- Bangla font: `Noto Sans Bengali`
- Latin/scientific symbols: `Noto Sans`
- Layout: 16:9

## Historical artifact fingerprints

PPTX:
`Class8_Science_Ch11_Lesson2_v2_Bangla_Accurate_PPTX_SAFE.pptx`

SHA-256:
`4136eb757aed1d1992a1238fce48b6fc9ffcca3fed40a7404c2eef38ab845814`

PDF:
`Class8_Science_Ch11_Lesson2_v2_Bangla_Accurate_PPTX_SAFE.pdf`

SHA-256:
`52e3ff2916992a4284749382bbf797794c75309184eb41ae4d1eb898188e6355`

Historical runtime generator source SHA-256:
`68e8be73dee501a0b80f252e1f1538e476a31b166b2256f91a353be5dee81bc9`

Historical terminology lint SHA-256:
`860d13edc589ef2496747ddda10c900f85b870896264deba1fa0fb7756586469`

Historical lesson diagram checker SHA-256:
`6a930999413b8c63af9d08ad1bf84adcbb3fae7bc63fa756c660b333fce7c998`

## Historical 22-slide sequence

The v2 deck contained retrieval question/answer, lesson roadmap, apparent-position and construction-line explanations, pencil demo, coin/fish apparent-depth examples, mirage, critical-angle prediction/reveal, critical angle, full internal reflection, three-state classification, optical fibre, uses, summary/answer, FLEX simulation and FLEX practice/answer.

This sequence/content remains reusable only after reconciliation with current v2.1 terminology/semantic contracts.

## Why superseded

Later user/direct-render review showed that v2 internal checks were insufficient. Material visual defects were discovered after this build, including geometry/terminology/recognizability/overlap issues. Production System v2.1 now requires stronger semantic tests, direct-pixel QA, updated `হালকা মাধ্যম` terminology, repair circuit breaker, accessibility/safety/freshness controls and controlled component migration.

## What remains reusable

- historical artifact fingerprints/toolchain;
- lesson sequence and pedagogical structure where still valid;
- old QA failures as regression evidence;
- source references;
- staged-reveal design intent;
- non-affected verified content after reconciliation.

## Current next action

Follow `PRODUCTION_SYSTEM_V2_1_MIGRATION_2026-09-08.md`; do not regenerate this historical artifact or restart Lesson 2.
