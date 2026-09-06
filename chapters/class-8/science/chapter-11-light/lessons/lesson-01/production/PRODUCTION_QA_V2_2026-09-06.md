# Lesson 1 Production QA — Visual-Engagement Prototype v2

Date: 2026-09-06
Lesson: Class 8 Science, Chapter 11 — আলো, Lesson 1
Route: controlled PptxGenJS source → deterministic diagrams → LibreOffice normalized PPTX → PDF fallback
Status: **POWERPOINT/LINK SMOKE TEST PASS ON PRIOR V2 — BANGLA/TEXTBOOK-LANGUAGE REVISION BUILT — USER REVIEW OF REVISED FILE PENDING**

## User review checkpoint

The user confirmed that the prior v2 PPTX:

- opens correctly in Microsoft PowerPoint without the earlier repair problem;
- opens both simulation hyperlinks successfully.

The user then identified three material presentation issues:

1. the two parallel-sided glass-slab staged slides were not self-explanatory;
2. student-facing science terminology used too much English instead of Bangla/book language;
3. the pencil-water slide was labelled `Live demo` even though the slide itself contained no live element.

These findings are accepted and were corrected before visual baseline approval.

Canonical language policy created from this feedback:

`/CLASSROOM_LANGUAGE_POLICY.md`

## Current revised user-facing artifacts

- PPTX: `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_FINAL_PPTX_SAFE.pptx`
- PDF: `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_FINAL_PPTX_SAFE.pdf`

Current SHA-256 fingerprints:

- PPTX: `f6fe06a932c8db0295a82bec3dc48bb8581134e8b62c29dee18f7c62122db32c`
- PDF: `bab2b8674cd7a8ae1b26cc4046b85988f86f7b6dd8a4f81e5bc59a3f1861ce58`

Reproducibility records:

- base build source: `production/build_lesson1_v2.js`
- Bangla/textbook-language patch source: `production/patch_lesson1_v2_bangla_textbook_language.py`
- dynamic manifest: `production/DYNAMIC_MANIFEST.md`
- simulation comparison: `production/SIMULATION_CANDIDATE_COMPARISON_2026-09-06.md`

## Bangla / textbook-language revision

Student-facing instructional wording is now Bangla-first.

Implemented examples include:

- `বিভেদতল (Interface)` on first introduction;
- `আপতন বিন্দু (Point of incidence)`;
- `অভিলম্ব (Normal)`;
- `আপতন কোণ (i)`;
- `আপতিত রশ্মি`;
- `প্রতিসরণ কোণ (r)`;
- `প্রতিসরিত রশ্মি`;
- `প্রতিফলিত রশ্মি`;
- `লম্ব আপতন`;
- `আলোকীয় ঘনত্ব`;
- Bangla prediction/check/instruction wording instead of generic English UI phrases.

English remains only where useful/optional, especially proper resource names such as `PhET Bending Light` and `Physics Classroom — Refraction Interactive`.

## Glass-slab clarification

The FLEX glass-slab pair is now explicitly staged:

- `ধাপ ১ — আগে অনুমান`;
- `ধাপ ২ — উত্তর`.

Visible labels now identify:

- কাচের পাত;
- বায়ু;
- প্রথম বিভেদতল;
- দ্বিতীয় বিভেদতল;
- আপতিত রশ্মি;
- প্রতিসরিত রশ্মি;
- নির্গত রশ্মি;
- the thin orange line as the parallel reference/helper line.

This makes the pedagogical purpose of the two slides explicit rather than presenting two unexplained near-duplicate diagrams.

## Pencil-water classroom activity clarification

The static slide is no longer described as `Live demo`.

It is now labelled as a **শ্রেণিকক্ষ কার্যক্রম** and explicitly instructs the teacher to demonstrate using a transparent glass, water and a partially immersed pencil. If materials are unavailable, the static diagram is the fallback.

Therefore the slide no longer falsely implies that it contains embedded/live media.

## Dynamic implementation

Implemented modes remain:

- `PREDICT_THEN_REVEAL`: seeing hook, medium classification, reflection/refraction, normal incidence, bending rules, exit check;
- `STAGED_REVEAL`: light-to-eye sequence, chapter properties, ray vocabulary, slab geometry;
- classroom physical demonstration: pencil/straw in water with static fallback;
- `SIMULATION`: FLEX PhET primary launch + Physics Classroom alternate;
- external launch buttons only; no complex branching.

Native PowerPoint animation remains unnecessary because staged slide states provide the instructional reveal with stronger compatibility/PDF fallback reliability.

## Technical QA — revised artifact

### PPTX

- `slides_test.py`: PASS — no overflow detected;
- LibreOffice-normalized PPTX created;
- normalized PPTX rendered successfully;
- full montage visually inspected;
- hyperlink relationships remain present for both external simulation resources.

### PDF

- pages: 28;
- encrypted: no;
- openable: yes;
- rendered successfully;
- PDF montage visually inspected.

## Science/content QA

PASS at prototype level.

Checked:

- seeing/light-to-eye sequence;
- refraction introduced after observation;
- বিভেদতল / আপতন বিন্দু / অভিলম্ব vocabulary;
- আপতন কোণ and প্রতিসরণ কোণ now explicitly labelled;
- angles measured from the normal, not the surface;
- normal-incidence exception retained;
- optical density separated from mass density;
- rarer→denser toward-normal rule;
- denser→rarer away-from-normal rule;
- parallel-sided slab geometry guardrail.

## Remaining hard gates

The revised artifact still requires user-side review before it becomes the master baseline:

1. open the **revised** PPTX in Microsoft PowerPoint;
2. confirm no repair warning;
3. verify both simulation buttons still open;
4. review the clarified glass-slab pair;
5. review the Bangla terminology/textbook-language treatment;
6. approve or request further UI/design changes.

## Verdict

`REVISED V2 BUILT — INTERNAL SCIENCE/EXPORT QA PASS — PRIOR V2 POWERPOINT/LINK SMOKE TEST PASS — REVISED ARTIFACT USER REVIEW PENDING.`

Lesson 2 remains on hold until the Lesson 1 visual/language baseline is approved.
