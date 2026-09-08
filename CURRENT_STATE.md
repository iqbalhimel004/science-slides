# Current State

Last updated: 2026-09-08

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Canonical production architecture

**Science Slides Production System v2.1 is ACTIVE and audit-hardened.**

Read first:

- `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
- `SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`

Core rule:

**Do not reset valid prior work. Continue from the latest valid checkpoint and rebuild only defective/fragile production layers.**

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Current status:

**LESSON_1_BASELINE_APPROVED — LESSON_2_CONTINUES_WITHOUT_RESET — CONTROLLED_R3_PACK_V0_3_USER_ACCEPTED — CURRENT_COPY_SPEC_V2_1_LOCKED — FULL_LESSON_2_V0_2_SUPERSEDED_AFTER_USER_GEMINI_REVIEW — FULL_LESSON_2_CONTROLLED_BUILD_V0_3_INTERNAL_QA_PASS — USER_FINAL_REVIEW_NEXT — CLASSROOM_READY_PENDING — LESSON_3_ON_HOLD**

## Lesson 1

**COMPLETED / USER-APPROVED BASELINE — PRESERVE**

## Lesson 2 accepted high-risk foundation

The user accepted the controlled high-risk validation pack v0.3. That accepted pack remains the science/visual basis for the lesson, except where later targeted full-deck review required a clearer student-facing surface.

## Current copy/spec

Canonical current spec:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/LESSON_2_COPY_SPEC_V2_1_2026-09-08.md`

Current student-facing terminology:

- `ঘন মাধ্যম`
- `হালকা মাধ্যম`

Visible slides are student-facing; teacher narration/operational prompts belong in notes.

## Full Lesson 2 v0.2 disposition

`Lesson2_Controlled_Full_v0_2` is now **SUPERSEDED AS FINAL-REVIEW CANDIDATE**.

Trigger:

The user supplied a Gemini Pro review identifying a typo/clarity issue on the fish apparent-depth slide, excessive reflected-ray emphasis on the critical-angle slide, a need for clearer mirage mechanism wording, shorthand incidence/refraction wording, redundant three-state slides, and a request to add a broadband fibre example.

## Current full Lesson 2 controlled build v0.3

Artifacts:

- `Lesson2_Controlled_Full_v0_3.pptx`
- `Lesson2_Controlled_Full_v0_3.pdf`

QA checkpoint:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/FULL_LESSON_2_CONTROLLED_BUILD_V0_3_QA_2026-09-08.md`

Slide/PDF page count:

`18`

### Corrections incorporated

- fish apparent-depth slide rebuilt; correct visible term `দাগকাটা সহায়ক রেখা` used;
- critical-angle slide rebuilt to focus on `i = C`, `r = 90°`, and the grazing refracted ray; visible reflected-ray emphasis removed;
- mirage slide rebuilt with temperature/optical-density gradient plus carefully worded TIR-like upward-turning explanation, without a hard mirror-like air boundary;
- increasing-incidence slide now uses the full sentence `আপতন কোণ (i) বাড়লে প্রতিসরণ কোণ (r) বাড়ে` rather than shorthand `ছোট i / বড় i` labels;
- previous separate three-state question and answer slides merged into one three-column comparison (`i<C`, `i=C`, `i>C`), reducing repetition;
- optical-fibre uses slide now includes `ব্রডব্যান্ড ইন্টারনেট`, while retaining endoscope and long-distance communication examples;
- optional PhET Bending Light link and static/offline fallback retained.

### Internal v0.3 QA

- PptxGenJS controlled build: PASS;
- `slides_test.py`: PASS — no overflow;
- render: PASS — 18 PNG slides;
- PDF export: PASS — 18 pages;
- semantic report: PASS_CANDIDATE;
- full montage inspected;
- corrected fish, mirage, incidence, critical-angle, three-state comparison, and fibre-use slides individually inspected.

Artifact fingerprints:

- PPTX SHA-256: `7f3638168a9529e008daba6bd5ec2b424678b60f7caaffb20fa830f14829d683`
- PDF SHA-256: `08f2c67837b5fb647c562bab7a2571dc0f1b58b533b20056956af4d381527921`
- montage SHA-256: `5676337624d48da9a580de1e05de9a4c1b75c158f48adb21296f695efe535242`

Library copies:

- `/Science Slides/Lesson2_Controlled_Full_v0_3.pptx`
- `/Science Slides/Lesson2_Controlled_Full_v0_3.pdf`

## Current gate

**USER FINAL REVIEW OF FULL LESSON 2 V0.3 IS NEXT.**

Do not mark `CLASSROOM_READY` yet.
Do not start Lesson 3 yet.

If the user finds another targeted defect, revise only the affected slide/component and selectively revalidate; do not restart Lesson 2.

## Execution-time pending gates

- exact Microsoft PowerPoint opening/playback in a real PowerPoint environment;
- actual classroom/projector behavior;
- live network availability for optional online resources;
- real post-class timing calibration.

## Universal stage rule

**Finish -> record -> then continue.**

## Frozen timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |
