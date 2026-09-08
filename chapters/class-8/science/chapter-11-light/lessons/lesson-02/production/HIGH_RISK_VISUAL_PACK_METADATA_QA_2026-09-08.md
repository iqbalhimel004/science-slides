# Lesson 2 High-Risk Visual Pack — Metadata/Text QA

Date: 2026-09-08
Status: **METADATA_TEXT_QA_PASS — USER_VISUAL_REVIEW_STILL_REQUIRED — FULL_LESSON_2_BLOCKED**

## Scope

This checkpoint verifies only the current Canva review pack metadata and visible text content. It does **not** approve the pack visually and does **not** unblock full Lesson 2 rebuild.

Current Canva design ID:

`DAHUl-r85fw`

Canva title:

`Lesson 2 High-Risk Visual Pack — Reference Locked v2`

Canva reported page count:

`7`

Current Canva URL returned by fetch:

`https://www.canva.com/d/7hkFeRCtaUJFXpL`

## Checks completed in this stage

### 1. Page-count / blank-risk metadata check

Canva `get-design-pages` returned exactly seven page records, indexed 1 through 7, each with thumbnail metadata.

Result:

`PASS_AT_CANVA_METADATA_LEVEL`

Caveat:

Thumbnail metadata alone does not prove that every placed image is visually correct at classroom scale. User visual review remains mandatory.

### 2. Text extraction check

Canva `fetch` returned visible text for all seven high-risk visual pages.

Result:

`PASS_AT_TEXT_EXTRACTION_LEVEL`

Findings:

- No standalone `TIR` in visible extracted text.
- Core visible wording is Bangla-first.
- Scientific symbols `i`, `C`, `r`, `90°` remain as allowed symbol exceptions.
- `CC0` appears only as an asset-license marker.
- `core/cladding` appear only as optional fibre support terms where relevant.

### 3. High-risk visual coverage check

The extracted text confirms all seven required pages exist:

1. HRV-01 — apparent position / apparent depth;
2. HRV-02 — coin visibility after water is added;
3. HRV-03 — fish apparent depth;
4. HRV-04 — road mirage;
5. HRV-05 — critical angle;
6. HRV-06 — full internal reflection;
7. HRV-07 — optical fibre.

Result:

`PASS`

## Not yet approved

This checkpoint does **not** verify final visual quality, object recognizability, or detailed diagram geometry from the exported/thumbnail pixels. The user must still inspect the Canva review pack visually.

Until user approval:

- do not assemble full Lesson 2 v3;
- do not start Lesson 3;
- do not mark Lesson 2 classroom-ready.

## Next authorized action

Ask the user to review the current seven-page Canva High-Risk Visual Pack. If the user approves, proceed to full Lesson 2 v3 assembly using the approved visuals. If the user rejects any visual, revise only the failed visual(s), keep the full lesson blocked, and record the revision.
