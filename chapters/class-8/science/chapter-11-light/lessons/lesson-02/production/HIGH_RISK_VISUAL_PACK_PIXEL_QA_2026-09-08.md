# Lesson 2 High-Risk Visual Pack — Pixel-Level QA

Date: 2026-09-08
Status: **DIRECT_PIXEL_QA_FAIL — REPAIR_ROUND_2_REQUIRED — USER_REVIEW_DEFERRED — FULL_LESSON_2_BLOCKED**

## Scope

Current Canva design:

`DAHUl-r85fw`

Directly inspected export supplied by the user:

`Lesson 2 High-Risk Visual Pack — Reference Locked v2_20260908_172119_0000.pdf`

The PDF contains exactly seven rendered pages. Each page was rendered to PNG at 200 DPI and visually inspected. This is the first post-repair checkpoint with direct access to final rendered pixels rather than metadata/structure alone.

## Overall result

**FAIL**

The transport/broken-image problem is resolved, and the science-critical geometry is mostly intact, but the pack is not yet classroom-ready because material visual/readability defects remain.

## Page-by-page direct pixel QA

### HRV-01 — apparent position / apparent depth

Result: **CONCEPT PASS — READABILITY REPAIR RECOMMENDED**

Observed:

- two refracted real-light paths reach the eye;
- two dashed backward extensions are visible;
- apparent point is shallower than the real object and remains below the water surface;
- the object-does-not-move message is present;
- however the green `আপাত অবস্থান` and construction-line labels have weak contrast against the water region and partly compete with the ray geometry.

Disposition:

- science topology acceptable;
- improve label contrast/placement before classroom approval.

### HRV-02 — coin visibility after adding water

Result: **PASS WITH MINOR READABILITY CAVEAT**

Observed:

- both physical demonstration panels render;
- the empty-vessel / water-added contrast is recognizable;
- the coin is visibly present in the water-added panel;
- the science diagram shows a blocked/direct sight-path concept and a refracted path reaching the eye;
- the footer correctly states that the coin does not move and the light path changes;
- the photo caption is low-contrast against the photographic background but does not block the core concept.

Disposition:

- no material science defect;
- minor caption-readability improvement desirable.

### HRV-03 — fish apparent depth

Result: **FAIL — PHYSICAL VISUAL + READABILITY**

Observed:

- deterministic ray geometry is present: two real ray paths, backward extensions, eye in air, apparent point shallower than the real fish;
- however the left physical/context photograph does not present a clearly recognizable focal fish at classroom viewing scale; it reads primarily as a generic underwater scene with tiny distant fish;
- the right-side `আপাত অবস্থান` / construction-line labels are also low-contrast and visually crowded near the ray geometry.

Why this matters:

The visual-pack gate explicitly requires a recognizable fish physical/context panel, not merely a technically valid underwater background.

Required repair:

1. replace the current fish context photo with a raster image containing one clearly recognizable underwater fish or a small clearly visible group;
2. preserve the deterministic ray diagram separately;
3. improve the contrast/placement of apparent-position/construction labels if the deterministic diagram is rebuilt.

### HRV-04 — mirage

Result: **PASS**

Observed:

- hot/dry road context image renders correctly;
- the image is presented as context rather than falsely asserted as direct mirage evidence;
- the scientific diagram shows a gradual smooth ray curve through a temperature-gradient context rather than a single mirror-like boundary;
- the apparent-source extension is explanatory only;
- no material clipping or broken layer was observed after the HRV-04 label correction.

Disposition:

- acceptable for the high-risk pack.

### HRV-05 — critical angle

Result: **PASS**

Observed:

- incident ray starts in the denser medium;
- normal is shown;
- `i = C` is measured from the normal;
- refracted ray runs along the interface with `r = 90°`;
- reflected ray remains in the denser medium;
- text correctly says this is not yet full internal reflection;
- no material overlap/clipping observed.

Disposition:

- pass.

### HRV-06 — full internal reflection

Result: **FAIL — MATERIAL TEXT OVERLAP**

Observed:

- science geometry itself is correct: denser-to-rarer incidence, `i > C`, reflected ray remains in the denser medium, no transmitted ray is drawn;
- however the key label `বাইরে প্রতিসরিত রশ্মি নেই` is materially overlapped/obscured by the green two-condition box in the upper-right portion of the diagram;
- this violates the no-overlap and projector-readability gates.

Required repair:

1. rebuild/reposition the condition box and the `বাইরে প্রতিসরিত রশ্মি নেই` label so both are fully readable;
2. preserve the current incident/reflected-ray geometry and `i > C` condition.

### HRV-07 — optical fibre

Result: **FAIL — PROJECTOR READABILITY**

Observed:

- physical fibre/cable photograph renders and is recognizable;
- repeated internal reflection is clearly depicted by the zig-zag ray within the fibre core;
- the footer correctly states that the fibre guides/carries light and does not store it;
- however the `কোর (core) — আলো চলার প্রধান অঞ্চল` label is white over a very light cyan core and has insufficient contrast at projector scale;
- the core/cladding terminology is optional enrichment, but once visible it must remain readable.

Required repair:

1. increase contrast of the core label (e.g. darker text or a darker label plate) without changing the science diagram;
2. retain the repeated-reflection geometry and Bangla-first hierarchy.

## Geometry contract check

The canonical controlled-build checker previously returned:

`DIAGRAM_CONTRACTS_L2_V2: PASS`

Direct pixel inspection is consistent with that result for topology. The current FAIL is caused by physical-visual recognizability and rendered readability/overlap defects, not by a newly discovered critical-angle/TIR/apparent-depth geometry failure.

## Repair-round-2 target set

Mandatory repair before another direct pixel QA:

- HRV-03 — replace underwater context photo with clearly recognizable fish;
- HRV-06 — remove material overlap between the no-transmitted-ray label and condition box;
- HRV-07 — fix low-contrast core label.

Recommended polish in the same round:

- HRV-01 — improve green diagram-label contrast/placement;
- HRV-02 — improve physical-photo caption contrast;
- HRV-03 — improve apparent-position/construction-label contrast if rebuilding the deterministic panel.

HRV-04 and HRV-05 should remain unchanged unless an incidental regression is discovered.

## Current disposition

**DIRECT_PIXEL_QA_FAIL — REPAIR_ROUND_2_NEXT**

Do not call the High-Risk Visual Pack approved.
Do not assemble full Lesson 2 v3.
Do not start Lesson 3.

## Next authorized action

Repair the mandatory HRV-03, HRV-06 and HRV-07 defects, optionally include the listed readability polish for HRV-01/02/03, then export all seven pages again and repeat direct pixel-level QA before user visual/science approval.
