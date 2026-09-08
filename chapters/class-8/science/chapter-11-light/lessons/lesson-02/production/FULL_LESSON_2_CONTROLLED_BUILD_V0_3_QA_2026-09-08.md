# Full Lesson 2 Controlled Build v0.3 QA — 2026-09-08

Status: **INTERNAL_QA_PASS — USER_FINAL_REVIEW_NEXT — CLASSROOM_READY_PENDING**

## Trigger

The user supplied a Gemini Pro review of `Lesson2_Controlled_Full_v0_2.pdf` and requested that the identified issues be corrected.

## Disposition of v0.2

`Lesson2_Controlled_Full_v0_2` is now **SUPERSEDED AS FINAL-REVIEW CANDIDATE**.

Reason: targeted user/Gemini review found content-language and pedagogy issues requiring revision.

## Corrected artifact family

- PPTX: `Lesson2_Controlled_Full_v0_3.pptx`
- PDF: `Lesson2_Controlled_Full_v0_3.pdf`
- montage: `montage_full_v0_3.png`
- semantic report: `Lesson2_Controlled_Full_v0_3_semantic_report.json`

Library copies:

- `/Science Slides/Lesson2_Controlled_Full_v0_3.pptx`
- `/Science Slides/Lesson2_Controlled_Full_v0_3.pdf`

## Fingerprints

- PPTX SHA-256: `7f3638168a9529e008daba6bd5ec2b424678b60f7caaffb20fa830f14829d683`
- PDF SHA-256: `08f2c67837b5fb647c562bab7a2571dc0f1b58b533b20056956af4d381527921`
- montage SHA-256: `5676337624d48da9a580de1e05de9a4c1b75c158f48adb21296f695efe535242`
- semantic report SHA-256: `96a200281ed27740dd11fca693bb339c5ea014a1090c171dadd0cfd2e2824e81`
- build source SHA-256: `470b42551954d06f439fa7ba871f109da1e0c7e2ec14feb87cd5550f60cd82f7`

## Slide count

- PPTX slides: `18`
- PDF pages: `18`

Change from v0.2: the previous separate three-state question and answer slides were merged into one comparative table, reducing repetition.

## User/Gemini review items addressed

### 1. Fish slide wording

Action: rebuilt the fish apparent-depth slide.

Result:

- `দাগকাটা সহায়ক রেখা` is explicitly used;
- no `শাগকাটা` typo remains in the visible corrected fish slide;
- the diagram distinguishes real fish, apparent fish, real rays and dashed construction lines.

### 2. Critical-angle focus

Action: rebuilt the critical-angle slide.

Result:

- visible explanation focuses on `r = 90°` and the refracted ray running along the interface;
- visible reflected-ray emphasis was removed from the critical-angle slide to avoid confusing it with full internal reflection;
- the slide still states that this is not yet full internal reflection and that full internal reflection starts for `i > C`.

Pedagogical note: Reflection at a boundary can occur physically, but for this Class 8 surface it is not emphasized visibly.

### 3. Mirage mechanism

Action: rebuilt the mirage slide.

Result:

- the slide now states that near the hot lower air layer the ray can turn upward with full-internal-reflection-like behavior when the effective incidence condition exceeds the critical condition;
- the explanation keeps the gradient-air model and does **not** draw a single hard mirror-like boundary;
- the slide still warns that the road is not actually covered with water.

### 4. Incidence/refraction wording

Action: rebuilt the increasing-incidence slide.

Result:

- replaced shorthand labels such as `ছোট i → r কম` and `বড় i → r বেশি` with the clearer sentence: `আপতন কোণ (i) বাড়লে প্রতিসরণ কোণ (r) বাড়ে`;
- retained the transition to the critical-angle concept.

### 5. Three-state repetition

Action: merged the previous two separate three-state slides into one comparative table.

Result:

- `i < C`, `i = C`, and `i > C` are now shown in one three-column comparison;
- final slide sequence is cleaner and reduced to 18 slides.

### 6. Optical-fibre relevance

Action: rebuilt the uses slide.

Result:

- added `ব্রডব্যান্ড ইন্টারনেট` as a student-familiar example;
- retained endoscope and long-distance communication examples;
- retained caution that optical fibre guides light and does not store light.

## Automated QA

- `slides_test.py`: PASS — no overflow detected.
- render: PASS — 18 PNG slides rendered.
- PDF export: PASS — 18 pages.
- semantic report: PASS_CANDIDATE.

## Rendered visual QA

Direct inspection performed on:

- full montage `montage_full_v0_3.png`;
- corrected fish slide;
- corrected mirage slide;
- corrected increasing-incidence slide;
- corrected critical-angle slide;
- merged three-state comparison slide;
- corrected optical-fibre uses slide.

Internal result: **PASS FOR USER FINAL REVIEW CANDIDATE**.

## Known pending delivery gates

Do not mark Lesson 2 `CLASSROOM_READY` until:

1. user final visual/science acceptance is received;
2. exact Microsoft PowerPoint opening/playback is tested if a real PowerPoint environment is available;
3. classroom projector/device behavior is checked if required;
4. final PDF/offline fallback is accepted.

## Current disposition

**FULL_LESSON_2_CONTROLLED_BUILD_V0_3_INTERNAL_QA_PASS — USER_FINAL_REVIEW_NEXT**

Do not start Lesson 3 until v0.3 is accepted or further targeted corrections are requested.
