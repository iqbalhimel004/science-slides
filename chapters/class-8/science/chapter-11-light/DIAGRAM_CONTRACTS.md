# Chapter 11 Diagram Contracts — আলো

Version: 1.1
Date: 2026-09-08
Status: **ACTIVE — HARD QA FOR R3 OPTICS VISUALS**

## Purpose

Prevent science-critical optics diagrams from being visually plausible but scientifically wrong. These contracts are semantic: they check relationships, not merely whether lines/arcs/labels exist.

## General rules

1. Use Chapter 11 `TERMINOLOGY_LOCK.md`.
2. Show বিভেদতল and অভিলম্ব wherever angle/bending direction is taught.
3. Measure আপতন কোণ and প্রতিসরণ কোণ from the অভিলম্ব, not the surface.
4. Angle-arc endpoints must actually lie on the two lines/rays that define the angle.
5. Solid rays = real light paths; dashed lines = construction/backward extensions only.
6. Generated/photorealistic imagery must not decide science geometry.
7. If a diagram is schematic/not to scale and scale could mislead, label it accordingly.

## Contract A — Apparent position/depth

Mandatory:

- at least two real refracted rays from object to eye;
- at least two dashed backward extensions;
- apparent point from intersection/apparent intersection of backward extensions;
- apparent point below surface but shallower than real object;
- object does not physically move.

FAIL if one ray alone is used to locate apparent position, construction lines are absent/mislabeled, or apparent point is physically wrong.

## Contract B — Coin becoming visible after water is added

Mandatory:

- before/after contrast;
- before: direct sight line blocked by vessel/rim;
- after: ray from coin refracts at water-air surface and reaches eye;
- coin does not rise; ray path changes.

## Contract C — Fish apparent depth

Mandatory:

- recognizable real/context fish when a realistic panel is used;
- eye in air;
- at least two real rays;
- dashed backward extensions;
- apparent fish shallower than real fish;
- real/apparent positions visibly distinct.

## Contract D — Mirage

Mandatory:

- hot/dry road context;
- relatively warmer air nearest road and cooler air above;
- gradual/smooth bending through a refractive-index gradient;
- no single hard mirror-like boundary;
- road is not actually water-covered;
- optional dashed apparent extension is explanatory only.

## Contract E — Critical angle

For light from `ঘন মাধ্যম` to `হালকা মাধ্যম` (lower optical density/refractive index):

At `i = C`:

- incident ray begins in dense medium;
- interface and perpendicular normal meet at incidence point;
- the visible `i = C` arc is geometrically between the incident ray and the normal;
- refracted ray lies exactly along the interface;
- `r = 90°` is measured from the normal to the interface-parallel refracted ray;
- reflected ray remains in the dense incident medium;
- reflected ray obeys the law of reflection in the simplified geometry;
- slide states this is the critical state, not full internal reflection.

FAIL if angle is measured from surface, the arc attaches to the wrong lines, reflected ray crosses into the light medium, or grazing ray is not along the interface.

## Contract F — Full internal reflection

For `পূর্ণ অভ্যন্তরীণ প্রতিফলন`:

- light travels `ঘন মাধ্যম -> হালকা মাধ্যম`;
- `i > C`;
- visible angle arc is between incident ray and normal;
- reflected ray stays in dense medium;
- reflection angle equals incidence angle in simplified geometry;
- no outside transmitted/refracted ray in the idealized diagram;
- both conditions are visible/stated.

FAIL if any transmitted ray is shown outside, angle is measured from surface, or reflected ray is in the wrong medium.

## Contract G — Optical fibre

Mandatory for a simplified TIR fibre model:

- core and cladding are clearly distinguishable if both are shown;
- when refractive-index relation is taught, `n_core > n_cladding`;
- light ray remains inside the core in the simplified guided-light diagram;
- every intended reflection point lies on a core-cladding boundary;
- repeated reflections are visible;
- no ray segment incorrectly propagates through cladding in the simplified TIR path;
- reflection geometry is physically plausible at each boundary contact;
- labels/callouts do not cover the ray path or each other;
- text states fibre guides/carries light, not stores it;
- core/cladding wording remains optional enrichment unless required by scope.

FAIL if reflection vertices float inside the core rather than meet the boundary, the ray crosses into cladding as part of the claimed TIR path, repeated reflection is absent, or labels make the science unreadable.

## Semantic-test implementation rule

Presence-only assertions are insufficient for Contracts E–G.

Where practical, programmatic tests must check coordinates/relationships such as:

- incidence point coincidence;
- perpendicularity of normal/interface;
- angle arc endpoints;
- ray half-plane/medium membership;
- `r = 90°` interface alignment;
- zero transmitted-ray count for TIR;
- fibre reflection-point distance to core boundary within tolerance.

## Production rule

Any slide using Contracts A–G is R3.

Before internal PASS:

1. run semantic/geometry checker where practical;
2. render the actual slide;
3. inspect it individually at classroom-view size;
4. compare rendered science against these invariants;
5. run post-render student-inference review;
6. fail if any required invariant is wrong or unreadable.
