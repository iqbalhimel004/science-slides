# Full Lesson 2 Controlled Build v0.4 QA — 2026-09-08

Status: **INTERNAL_QA_PASS — USER_FINAL_REVIEW_NEXT — CLASSROOM_READY_PENDING**

## Trigger

The user reviewed `Lesson2_Controlled_Full_v0_3` and identified one targeted defect:

> On the increasing-incidence and critical-angle slides, the angle arcs were not drawn clearly enough. Draw the angles correctly. Everything else is acceptable.

## Disposition of v0.3

`Lesson2_Controlled_Full_v0_3` is now **SUPERSEDED AS FINAL-REVIEW CANDIDATE** only for the targeted angle-arc rendering defect.

All other v0.3 content/science corrections remain accepted/reused:

- fish typo fix and apparent-depth diagram;
- critical-angle focus on `r = 90°` and the grazing refracted ray;
- mirage mechanism wording;
- full sentence `আপতন কোণ (i) বাড়লে প্রতিসরণ কোণ (r) বাড়ে`;
- merged three-state comparison;
- broadband internet as optical-fibre use.

## Corrected artifact family

- PPTX: `Lesson2_Controlled_Full_v0_4.pptx`
- PDF: `Lesson2_Controlled_Full_v0_4.pdf`
- montage: `montage_full_v0_4.png`
- semantic report: `Lesson2_Controlled_Full_v0_4_semantic_report.json`

Library copies:

- `/Science Slides/Lesson2_Controlled_Full_v0_4.pptx`
- `/Science Slides/Lesson2_Controlled_Full_v0_4.pdf`

## Fingerprints

- PPTX SHA-256: `13aa67430e6d3712460c4a62122a0602575b28b99e815cedeaf20eef45c3b4f6`
- PDF SHA-256: `5468cbae6d0a76371a498d536e2195cd24db1f3ced62cd4577bddae8c12681ca`
- montage SHA-256: `62eacfcfc91a4cf823022cc73f76c762d43a2c7d403218fdc6341b9b8a5563fb`
- semantic report SHA-256: `e6c90167ce1e0e5ea445cfba16e8dae5aeba802273314e99b6870ed50c9fd9e5`
- local build source SHA-256: `1e4f844e12da9e2a2a1ffd9d321073778f61e58ccc4f98d51d0690f36266a1bd`

## Slide count

- PPTX slides: `18`
- PDF pages: `18`

## Targeted correction

### Slide 11 — `সংকট কোণের পথে: আপতন কোণ বাড়ালে কী হয়?`

Corrected by replacing the earlier generic PowerPoint arc shapes with deterministic segmented angle arcs:

- purple `i` arc is drawn below the interface between the incident ray and the normal;
- orange `r` arc is drawn above the interface between the normal and the refracted ray;
- both arcs are larger, high-contrast, and visually connected to the intended lines.

### Slide 12 — `সংকট কোণ (C): প্রতিসরণ কোণ r = 90°`

Corrected by replacing the earlier generic PowerPoint arc shapes with deterministic segmented angle arcs:

- purple `i = C` arc is explicitly drawn between the incident ray and the normal;
- orange `r = 90°` arc is drawn as a clear right angle between the normal and the grazing refracted ray along the interface;
- the slide still avoids visible reflected-ray emphasis, preserving the user/Gemini correction from v0.3.

## Automated QA

- `slides_test.py`: PASS — no overflow detected.
- render: PASS — 18 PNG slides rendered.
- PDF export: PASS — 18 pages.

## Direct rendered QA

Direct individual inspection was performed on the two affected slides:

- slide 11: corrected `i` and `r` arcs are visible and correctly referenced to the normal;
- slide 12: corrected `i = C` and `r = 90°` arcs are visible and correctly referenced to the normal/interface.

Internal result: **PASS FOR USER FINAL REVIEW CANDIDATE**.

## Known pending delivery gates

Do not mark Lesson 2 `CLASSROOM_READY` until:

1. user final visual/science acceptance is received;
2. exact Microsoft PowerPoint opening/playback is tested if a real PowerPoint environment is available;
3. classroom projector/device behavior is checked if required;
4. final PDF/offline fallback is accepted.

## Current disposition

**FULL_LESSON_2_CONTROLLED_BUILD_V0_4_INTERNAL_QA_PASS — USER_FINAL_REVIEW_NEXT**

Do not start Lesson 3 until v0.4 is accepted or further targeted corrections are requested.
