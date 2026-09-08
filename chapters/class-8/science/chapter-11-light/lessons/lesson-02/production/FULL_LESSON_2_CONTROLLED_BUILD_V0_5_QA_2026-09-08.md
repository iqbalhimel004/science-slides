# Full Lesson 2 Controlled Build v0.5 QA — 2026-09-08

Status: **INTERNAL_QA_PASS — USER_FINAL_REVIEW_NEXT — CLASSROOM_READY_PENDING**

## Trigger

The user explicitly requested an image-only correction after v0.4:

- restore/fix the fish apparent-depth visual;
- restore/fix the mirage visual;
- do **not** change anything except those images.

## Scope discipline

v0.5 is built from v0.4.

Only the visual panels on:

- slide 9 — fish apparent depth;
- slide 10 — mirage;

were changed.

The slide 11 and 12 angle corrections from v0.4 were preserved unchanged.

No titles, subtitles, bullets, notes, terminology, slide order, timing, or any other visible/non-visible lesson content was intentionally edited.

## Restoration source

The fish and mirage panel visuals were restored from the earlier v0.2 rendered panels, which the user preferred visually over the later replacement drawings.

Restoration was applied as image-panel overlays, leaving the surrounding v0.4 slide text/layout untouched.

## Verification that nothing else changed visually

Rendered-slide SHA comparison between v0.4 and v0.5:

- slides 1–8: identical;
- slide 9: changed — fish visual only;
- slide 10: changed — mirage visual panels only;
- slides 11–18: identical.

Therefore the corrected angle slides 11–12 are pixel-identical to v0.4.

## Automated QA

- `slides_test.py`: PASS — no overflow detected.
- render: PASS — 18 PNG slides rendered.
- PDF export: PASS — 18 pages.

## Direct rendered QA

Individually inspected:

- slide 9 — restored fish apparent-depth visual;
- slide 10 — restored mirage visual.

Both render without blank/missing panels or clipping.

## Artifacts

- `Lesson2_Controlled_Full_v0_5.pptx`
- `Lesson2_Controlled_Full_v0_5.pdf`
- `montage_full_v0_5.png`

SHA-256:

- PPTX: `5990cf5886584e1f49d40dd5bf8bca35ad97b1ad7db397c4aeec05a790b2fa88`
- PDF: `bb111b4e1a6c677adf7da398746b395d9cd7a222aa9e2892c2f95071584a7112`
- montage: `8c5844dab77a9c78c7c37f538308564996a6a69386a7fd86650fa0ddae04f326`

Library copies:

- `/Science Slides/Lesson2_Controlled_Full_v0_5.pptx`
- `/Science Slides/Lesson2_Controlled_Full_v0_5.pdf`

## Current disposition

**FULL_LESSON_2_CONTROLLED_BUILD_V0_5_INTERNAL_QA_PASS — USER_FINAL_REVIEW_NEXT**

Do not start Lesson 3 or mark Lesson 2 classroom-ready until the user accepts v0.5 or requests another targeted correction.
