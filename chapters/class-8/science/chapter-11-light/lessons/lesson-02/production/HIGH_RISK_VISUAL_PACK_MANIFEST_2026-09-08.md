# Lesson 2 High-Risk Visual Pack Manifest

Date: 2026-09-08
Status: **BUILT_IN_CANVA — USER_REVIEW_PENDING — FULL_LESSON_2_REBUILD_BLOCKED**

## Scope

This is the separate pre-deck High-Risk Visual Pack required by `/REFERENCE_LOCKED_VISUAL_PIPELINE.md` and durable decision `D-042`.

It is **not** the full Lesson 2 classroom deck.

The full Lesson 2 rebuild remains blocked until the user approves this visual pack.

## Canva design

Design ID:

`DAHUl9F8yQc`

Title:

`Lesson 2 High-Risk Visual Pack — Reference Locked v2`

Current review URL captured during build:

`https://www.canva.com/d/Nka2rWEPnKHDCm8`

Note: Canva may rotate signed/share URLs. The stable internal design identifier is the design ID above.

Page count:

`7`

Canva checks completed:

- `get-design-pages`: returned exactly 7 pages;
- `get-design-content`: visible text extracted and reviewed for Bangla-first wording;
- `get-presenter-notes`: source notes exist on all 7 pages.

## Source/reference lock

Authoritative reference lock:

`HIGH_RISK_REFERENCE_LOCK_2026-09-08.md`

All visuals below are built against that lock.

## Visual IDs in pack

| Page | ID | Concept | Visual form | Status |
|---:|---|---|---|---|
| 1 | HRV-01 | আপাত অবস্থান / আপাত গভীরতা | pure deterministic schematic | built; user review pending |
| 2 | HRV-02 | পানি দিলে মুদ্রা দেখা যায় | real demonstration images + deterministic schematic | built; user review pending |
| 3 | HRV-03 | মাছের আপাত গভীরতা | realistic fish context + deterministic schematic | built; user review pending |
| 4 | HRV-04 | মরীচিকা | real road-mirage context + gradient schematic | built; user review pending |
| 5 | HRV-05 | সংকট কোণ | pure deterministic schematic | built; user review pending |
| 6 | HRV-06 | পূর্ণ অভ্যন্তরীণ প্রতিফলন | pure deterministic schematic | built; user review pending |
| 7 | HRV-07 | অপটিক্যাল ফাইবার | real fibre context + deterministic cutaway | built; user review pending |

## Asset and source notes

### HRV-01 — আপাত অবস্থান

Science/reference:

- OpenStax University Physics Vol. 3 §2.3 Images Formed by Refraction.

Implementation:

- deterministic schematic only;
- two real rays;
- two dashed backward-extension/construction lines;
- apparent position above the real object but below water surface.

### HRV-02 — মুদ্রা

Context/reference:

- University of Iowa Physics — Refraction: Penny & Cup;
- Idaho State University — Disappearing/Reappearing Coin.

Implementation:

- two real demonstration images for before/after context;
- separate deterministic schematic showing blocked direct line and refracted ray.

### HRV-03 — মাছ

Context/reference:

- Wikimedia Commons File: `Fish underwater.jpg` — CC0;
- OpenStax University Physics Vol. 3 §2.3;
- Physics Classroom, Refraction and Sight.

Implementation:

- recognizable real fish/context image;
- separate deterministic two-ray apparent-depth construction.

### HRV-04 — মরীচিকা

Context/reference:

- Wikimedia Commons File: `Roadmirage.jpg` — public domain;
- Harvard Natural Sciences Lecture Demonstrations — Hot Road Mirage;
- HyperPhysics — Mirages / Atmospheric Refraction.

Implementation:

- real hot-road mirage context image;
- separate deterministic gradient-air ray schematic;
- no hard mirror-like boundary.

### HRV-05 — সংকট কোণ

Science/reference:

- OpenStax University Physics Vol. 3 §1.4 Total Internal Reflection, Figure 1.14(b).

Implementation:

- deterministic schematic;
- `i = C`;
- `r = 90°` along interface;
- reflected ray remains in the denser/incident medium;
- explicitly not yet full internal reflection.

### HRV-06 — পূর্ণ অভ্যন্তরীণ প্রতিফলন

Science/reference:

- OpenStax University Physics Vol. 3 §1.4 Total Internal Reflection, Figure 1.14(c).

Implementation:

- deterministic schematic;
- light travels from denser to rarer medium;
- `i > C`;
- no outside refracted/transmitted ray;
- reflected ray remains in the denser/incident medium.

### HRV-07 — অপটিক্যাল ফাইবার

Context/reference:

- Wikimedia Commons File: `Fiber Optical Cable.jpg` — CC0;
- OpenStax University Physics Vol. 3 §1.4;
- OpenStax Physics §16.2.

Implementation:

- real fibre context image;
- deterministic cutaway showing repeated internal reflection;
- visible text says fibre guides/carries light, not stores light.

## Bangla-first text audit

Visible text was extracted from Canva and reviewed.

Result:

`PASS_WITH_SYMBOL_EXCEPTIONS`

Allowed exceptions:

- `i`, `r`, `C`, `90°` as introduced scientific symbols;
- `CC0` as licensing marker;
- `(core)` and `(cladding)` as optional supporting English terms on the fibre page.

No standalone `TIR` is used.

No `boundary`, `bending`, `ray`, `diagram`, `store`, `guide`-style English production fragments remain in the visible classroom wording.

## Page/blank check

Canva `get-design-pages` returned 7 page records with thumbnails.

Result:

`PASS_AT_CANVA_PAGE_METADATA_LEVEL`

User visual review is still required before this can become approved.

## Current gate

The user must review the seven visuals and confirm whether they are:

1. recognizable enough as real/context visuals where applicable;
2. scientifically clear;
3. Bangla-first and classroom-readable;
4. suitable as the reference for full Lesson 2 rebuild.

Until then:

- do not assemble the full Lesson 2 deck;
- do not start Lesson 3;
- do not call Lesson 2 classroom-ready.
