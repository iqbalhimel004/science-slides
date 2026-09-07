# Chapter 11 Diagram Contracts — আলো

Version: 1.0
Date: 2026-09-07
Status: **ACTIVE — HARD QA FOR HIGH-RISK OPTICS DIAGRAMS**

## Purpose

Prevent science-critical ray diagrams from being visually plausible but physically wrong.

This file defines mandatory invariants for high-risk diagrams in Chapter 11. Production QA must check these before an artifact can be called internally passing.

## General ray-diagram rules

1. Use Bangla-first labels from `TERMINOLOGY_LOCK.md`.
2. Show the বিভেদতল and অভিলম্ব wherever angles or bending direction are taught.
3. Measure আপতন কোণ and প্রতিসরণ কোণ from the অভিলম্ব, not the surface.
4. Solid rays show real light paths.
5. Dashed rays show construction/backward extensions only; they must be labelled as সহায়ক রেখা where needed.
6. Generated/photorealistic base visuals must not decide science geometry; rays and labels must be controlled overlays.

## Contract A — Apparent position / apparent depth

Mandatory:

- at least two real refracted rays from the object to the eye;
- at least two dashed backward-extension lines;
- the apparent point is where backward extensions meet/appear to meet;
- the apparent point for an object in water is below the surface but shallower than the real object;
- text states that the object itself does not physically move.

FAIL if:

- only one ray is used to locate apparent position;
- dashed construction lines are absent;
- dashed lines are described as real light path.

## Contract B — Coin becoming visible after water is added

Mandatory:

- before/after contrast or equivalent explanation;
- before condition: direct line of sight is blocked by the vessel/rim;
- after condition: ray from coin refracts at water-air surface and reaches eye;
- text states that the coin does not rise; the ray path changes.

FAIL if:

- the slide only shows one ray without explaining blocked line-of-sight;
- the apparent-rising effect is implied as a physical movement.

## Contract C — Fish apparent depth

Mandatory:

- at least two real rays from fish/object;
- dashed backward extensions;
- apparent fish/object is shallower than real fish/object;
- eye/observer is shown in air.

FAIL if:

- only one ray is used to justify apparent depth;
- real fish and apparent fish positions are not visually distinguishable.

## Contract D — Mirage

Mandatory:

- show gradual ray bending through air layers/temperature-gradient context;
- avoid a single hard mirror-like boundary;
- text says the road is not actually wet/water-covered;
- if dashed apparent extension is used, it is explanatory only.

FAIL if:

- mirage is shown as a ray bouncing from one solid boundary like a mirror;
- text simply says `total internal reflection` without the gradient clarification.

## Contract E — Critical angle

For light going from ঘন মাধ্যম to বিরল মাধ্যম:

At `i = C`:

- incident ray starts in the denser/incident medium;
- refracted ray travels along the interface: `r = 90°`;
- reflected ray remains in the original denser/incident medium;
- the slide states this is the সংকট অবস্থা, not full internal reflection.

FAIL if:

- reflected ray is drawn in the rarer/external medium;
- reflected ray crosses the interface;
- `i = C` is called full internal reflection.

## Contract F — Full internal reflection

For পূর্ণ অভ্যন্তরীণ প্রতিফলন:

- condition 1: light travels from denser to rarer medium;
- condition 2: `i > C`;
- reflected ray remains in the denser/incident medium;
- no transmitted/refracted ray is drawn outside the interface in the idealized ray diagram.

FAIL if:

- any refracted/transmitted ray is shown in the rarer medium for `i > C`;
- reflected ray is drawn in the wrong medium;
- standalone `TIR` replaces the Bangla term.

## Contract G — Optical fibre

Mandatory:

- show repeated internal reflection inside the fibre;
- text says the fibre guides light; it does not store light;
- if core/cladding is discussed, mark it as enrichment unless needed by the textbook scope;
- ray remains inside the fibre in the simplified diagram.

FAIL if:

- the slide says the fibre stores light;
- repeated reflection is not shown;
- English terms dominate the visible explanation.

## Production rule

Any slide touching Contracts A–G is a **high-risk slide**.

Before delivery:

1. run any available diagram-contract script;
2. render the slide and inspect it visually;
3. record required geometry vs observed render in production QA;
4. fail the deck if any required invariant is missing.
