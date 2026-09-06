# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science
- Chapter: 11 — আলো
- Last updated: 2026-09-06
- Current status: **CONTENT_STORYBOARD_FROZEN — RT_01_COMPLETE — LESSON_1_SIMULATION_SELECTION_COMPLETE — PRIOR_V2_POWERPOINT_AND_LINK_SMOKE_TEST_PASS — LESSON_1_BANGLA_TEXTBOOK_LANGUAGE_REVISION_BUILT — USER_REVIEW_OF_REVISED_ARTIFACT_PENDING — LESSON_2_ON_HOLD**

## Durable workflow rules

- external-tool prompts are one-click copy-ready;
- Gemini reviews use fresh downloadable single-file bundles;
- Gate B is targeted implementation QA, not Gate A repetition;
- renderer route is locked by `D-036` / `RENDERER_ROUTING.md`;
- controlled production follows `ARTIFACT_PERSISTENCE.md`;
- compatibility/animation/simulation/UI requirements follow `/PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`;
- simulation provider selection follows `/SIMULATION_RESOURCE_ROUTING.md`;
- student-facing language/terminology follows `/CLASSROOM_LANGUAGE_POLICY.md`;
- universal stage rule: **Finish → record → then continue.**

## Review / freeze state

- Gate A: completed + reconciled
- Gate B: completed + reconciled
- Final pre-freeze QA: `PASS — CONTENT/STORYBOARD FREEZE APPROVED`
- No content unfreeze is required for Lesson 1 v2 language/clarity revision.

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

Chapter planned CORE + FLEX total: **202 minutes**.

## Renderer route

RT-01 is complete.

Final route:

- primary authoring/rendering: controlled PptxGenJS;
- science-critical visuals: deterministic SVG/shape construction;
- optional finishing: Canva after controlled PPTX import;
- classroom delivery/fallback: controlled PPTX + verified PDF;
- Beautiful.ai/native Canva AI are not unattended science-critical full-deck authors.

## Lesson 1 v2 — prior user smoke-test result

The previous v2 build:

- opened correctly in Microsoft PowerPoint;
- did not reproduce the original repair-warning failure;
- successfully opened both simulation links.

## Lesson 1 v2 — user language/clarity findings

User identified:

1. the two glass-slab staged slides were not self-explanatory;
2. too much English appeared in student-facing science terminology;
3. a static pencil-water instruction slide was labelled `Live demo` despite containing no live element.

These findings were accepted and corrected.

## Current revised Lesson 1 artifact

Current user-facing files:

- `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_FINAL_PPTX_SAFE.pptx`
- `Class8_Science_Ch11_Lesson1_v2_Bangla_Textbook_FINAL_PPTX_SAFE.pdf`

Fingerprints:

- PPTX: `f6fe06a932c8db0295a82bec3dc48bb8581134e8b62c29dee18f7c62122db32c`
- PDF: `bab2b8674cd7a8ae1b26cc4046b85988f86f7b6dd8a4f81e5bc59a3f1861ce58`

Durable production records:

- `lessons/lesson-01/production/build_lesson1_v2.js`
- `lessons/lesson-01/production/patch_lesson1_v2_bangla_textbook_language.py`
- `lessons/lesson-01/production/PRODUCTION_QA_V2_2026-09-06.md`
- `lessons/lesson-01/production/DYNAMIC_MANIFEST.md`
- `lessons/lesson-01/production/SIMULATION_CANDIDATE_COMPARISON_2026-09-06.md`

## Bangla / textbook-language correction

Student-facing science terms are now Bangla-first.

Key optics vocabulary is explicitly shown in Bangla:

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

English remains optional/parenthetical or limited to proper resource names.

Canonical policy:

`/CLASSROOM_LANGUAGE_POLICY.md`

## Glass-slab pair — clarified

The pair now clearly states its function:

- `ধাপ ১ — আগে অনুমান`
- `ধাপ ২ — উত্তর`

It labels the air/glass regions, first/second interfaces, incident/refracted/emergent rays and parallel helper line.

## Pencil-water activity — corrected

The slide is now a `শ্রেণিকক্ষ কার্যক্রম`, not a purported embedded live demo.

Teacher action and static fallback are explicitly stated.

## Revised artifact internal QA

### PPTX

- `slides_test.py`: PASS — no overflow;
- normalized/resaved with LibreOffice;
- rendered successfully;
- montage visually inspected;
- both external simulation hyperlink relationships remain present.

### PDF

- 28 pages;
- openable;
- unencrypted;
- rendered successfully and visually inspected.

### Science / terminology

PASS at prototype level:

- light-to-eye path;
- ray vocabulary;
- আপতন কোণ / প্রতিসরণ কোণ explicitly visible;
- angle-from-normal rule;
- normal-incidence exception;
- optical density ≠ mass density;
- rarer→denser bends toward normal;
- denser→rarer bends away from normal;
- slab geometry guardrail preserved.

## Simulation selection

Primary Lesson 1 option:

**PhET — Bending Light**

Secondary alternate:

**The Physics Classroom — Refraction Interactive**

This does not make PhET the default for later lessons.

## Remaining Lesson 1 hard gates

Before the revised Lesson 1 can establish the master visual/language/motion baseline:

1. user opens the revised PPTX in Microsoft PowerPoint;
2. confirms no repair/recovery warning;
3. confirms both simulation buttons still open;
4. checks that Bangla/textbook terminology now feels correct;
5. checks that the glass-slab staged pair is understandable;
6. approves or requests further design/UI revisions.

## Remaining chapter production

1. user reviews the revised Lesson 1 v2 artifact;
2. revise again if required;
3. lock the master visual/language/motion baseline after approval;
4. produce Lesson 2 using the approved baseline;
5. produce Lessons 3–4;
6. final rendered chapter-wide audit and classroom-ready package.

## Next authorized stage

**User review of revised Bangla/textbook-language Lesson 1 v2.**

Do not start Lesson 2 full production until the revised Lesson 1 baseline is approved.
