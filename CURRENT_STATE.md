# Current State

Last updated: 2026-09-06

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Durable rules

- NCTB controls syllabus/exam context, not automatic scientific truth.
- Material science is checked against current authoritative sources.
- **Finish → record → then continue.**
- External-tool prompts are one self-contained fenced code block (`D-033`).
- Gemini review bundles follow `D-034`; Gate B remains targeted (`D-035`).
- Renderer route is locked by `D-036` / `RENDERER_ROUTING.md`.
- Microsoft PowerPoint smoke testing is a hard compatibility gate (`D-037`).
- Dynamic engagement and attractive classroom UI are hard production gates (`D-038`).
- Simulation selection is multi-source and concept-fit driven, not PhET-only (`D-039`).
- `CLASSROOM_LANGUAGE_POLICY.md` is now the mandatory Bangla-first student-facing terminology policy.
- `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md` controls compatibility + dynamic/interactive/UI production.
- `ARTIFACT_PERSISTENCE.md` controls reproducibility.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical path:
`chapters/class-8/science/chapter-11-light/`

Current status:

**CONTENT_STORYBOARD_FROZEN — RT_01_COMPLETE — LESSON_1_SIMULATION_SELECTION_COMPLETE — PRIOR_V2_POWERPOINT_AND_LINK_SMOKE_TEST_PASS — LESSON_1_BANGLA_TEXTBOOK_LANGUAGE_REVISION_BUILT — USER_REVIEW_OF_REVISED_ARTIFACT_PENDING — LESSON_2_ON_HOLD**

## Latest user feedback — accepted and implemented

The user confirmed that the previous Lesson 1 v2:

- opens correctly in Microsoft PowerPoint;
- no longer shows the earlier repair problem;
- both simulation links open successfully.

The user then identified three material issues:

1. the two parallel-sided glass-slab staged slides were not self-explanatory;
2. student-facing slides used too much English instead of Bangla/book terminology;
3. the pencil-water slide said `Live demo` even though the slide contained no live element.

These findings are accepted.

## Bangla-first language baseline

New canonical policy:

`CLASSROOM_LANGUAGE_POLICY.md`

Student-facing text is now Bangla-first and textbook-facing. English is optional and normally limited to a first parenthetical introduction or proper resource/product names.

Required optics terminology is now explicitly represented in Bangla where relevant, including:

- বিভেদতল (Interface)
- আপতন বিন্দু (Point of incidence)
- অভিলম্ব (Normal)
- আপতন কোণ (i)
- আপতিত রশ্মি
- প্রতিসরণ কোণ (r)
- প্রতিসরিত রশ্মি
- প্রতিফলিত রশ্মি
- লম্ব আপতন
- আলোকীয় ঘনত্ব
- বিরল মাধ্যম / ঘন মাধ্যম

Generic English teaching UI such as `Prediction`, `Live demo`, `Exit Check`, `speed`, `ray`, `normal incidence` is no longer the default student-facing language.

## Glass-slab staged pair — clarified

The FLEX pair is now explicitly marked:

- `ধাপ ১ — আগে অনুমান`
- `ধাপ ২ — উত্তর`

Visible labels identify the glass slab, air regions, first/second interfaces, incident ray, refracted ray, emergent ray, and the parallel helper/reference line.

The pair is meant to teach the sequence:

**predict the ray path → reveal the refracted/emergent path → observe that the emergent ray is parallel to the incident ray for the parallel-sided slab geometry, with possible lateral shift.**

## Pencil-water activity — corrected

The slide is now labelled as a **শ্রেণিকক্ষ কার্যক্রম**, not `Live demo`.

It instructs the teacher to use a transparent glass, water and a partially immersed pencil. The on-slide diagram is explicitly the fallback when materials are unavailable.

## Current revised Lesson 1 artifacts

- PPTX: `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_FINAL_PPTX_SAFE.pptx`
- PDF: `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_FINAL_PPTX_SAFE.pdf`

Fingerprints:

- PPTX: `f6fe06a932c8db0295a82bec3dc48bb8581134e8b62c29dee18f7c62122db32c`
- PDF: `bab2b8674cd7a8ae1b26cc4046b85988f86f7b6dd8a4f81e5bc59a3f1861ce58`

Reproducibility records:

- `lessons/lesson-01/production/build_lesson1_v2.js`
- `lessons/lesson-01/production/patch_lesson1_v2_bangla_textbook_language.py`
- `lessons/lesson-01/production/PRODUCTION_QA_V2_2026-09-06.md`
- `lessons/lesson-01/production/DYNAMIC_MANIFEST.md`
- `lessons/lesson-01/production/SIMULATION_CANDIDATE_COMPARISON_2026-09-06.md`

## Revised-artifact internal QA

### PPTX

- `slides_test.py`: PASS — no overflow;
- LibreOffice-normalized PPTX created;
- normalized PPTX renders successfully;
- full rendered montage inspected;
- both external simulation hyperlink relationships remain in the PPTX.

### PDF

- 28 pages;
- openable;
- unencrypted;
- rendered successfully and visually inspected.

### Science / terminology

PASS at prototype level for:

- light-to-eye sequence;
- বিভেদতল / আপতন বিন্দু / অভিলম্ব;
- আপতন কোণ / প্রতিসরণ কোণ;
- angles measured from the normal;
- normal-incidence exception;
- optical density ≠ mass density;
- rarer→denser toward-normal rule;
- denser→rarer away-from-normal rule;
- parallel-sided slab geometry guardrail.

## Simulation selection — Lesson 1

Primary:

**PhET — Bending Light**

Secondary alternate:

**The Physics Classroom — Refraction Interactive**

GeoGebra remains a reserve geometry option where a verified applet offers a specific advantage.

This does not make PhET the chapter default.

## Renderer route — locked

**Controlled PptxGenJS → deterministic SVG/shape science visuals → rendered QA → optional Canva controlled-import finishing → verified PPTX + verified PDF fallback.**

## Remaining hard gates before Lesson 2

The revised artifact must now be reviewed by the user:

1. open the revised PPTX in Microsoft PowerPoint;
2. confirm no repair warning;
3. confirm both simulation links still open;
4. judge whether the Bangla/textbook terminology is now correct and natural;
5. judge whether the glass-slab staged pair is now understandable;
6. approve or request further UI/design revisions.

Lesson 2 remains on hold until the Lesson 1 visual/language baseline is approved.

## New-chat recovery order — current pilot

Read:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. `CLASSROOM_LANGUAGE_POLICY.md`
5. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
6. `SIMULATION_RESOURCE_ROUTING.md`
7. `ARTIFACT_PERSISTENCE.md`
8. active chapter `STATUS.md`
9. Lesson 1 v2 production QA/source/dynamic manifest while approval is pending

## Next authorized action

**User review of the revised Bangla/textbook-language Lesson 1 v2 artifact.**

Do not start Lesson 2 full production until the revised Lesson 1 baseline is approved.
