# Storyboard — Lesson 2: প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন

## Lesson metadata

- Chapter: Class 8 Science, Chapter 11 — আলো
- Lesson: 2 of 4
- Class period: 60 min
- Planned CORE: 44 min
- Planned FLEX: 8 min
- Unallocated contingency: 8 min
- Content status: **GATE_B_RECONCILED — CONTENT_STORYBOARD_FROZEN — V2_ACCURACY_ENFORCEMENT_ACTIVE**
- Resource map: `RESOURCES.md`
- Student-facing copy lock: `production/SLIDE_COPY_V2.md`
- Diagram contracts: chapter `DIAGRAM_CONTRACTS.md`

## Storyboard principles

- reuse Lesson 1 ray/normal vocabulary using Bangla-first terminology;
- apparent position uses at least two solid real rays + dashed backward extensions;
- mirage uses a temperature/refractive-index gradient, not a hard mirror boundary;
- critical angle is the threshold `r = 90°`, not full internal reflection itself;
- at `i = C`, show both the grazing refracted ray and the reflected ray;
- full internal reflection requires higher-index→lower-index propagation and `i > C`;
- student-facing slides use `পূর্ণ অভ্যন্তরীণ প্রতিফলন`, not standalone `TIR`;
- CORE remains offline-capable.

## CORE slides

### L2-S01 — Retrieval
3 min. Normal, denser→rarer bending, normal incidence.

Production wording must use complete Bangla questions from `production/SLIDE_COPY_V2.md`.

### L2-S02 — Actual vs apparent position
3 min. Object does not physically move; apparent position is where refracted rays seem to originate.

Visual contract:
- at least two real rays;
- at least two dashed backward extensions;
- apparent position shallower than real object.

### L2-S03 — Backward ray tracing
3 min. Solid = actual rays; dashed = backward construction lines, not real light paths.

### L2-S04 — Immersed stick/pencil
2 min. Apparent displacement/raised appearance from refraction.

### L2-S05 — Coin visibility
3 min. Refraction allows light from coin to reach eye; apparent shallower position.

Visual contract:
- before/after or equivalent blocked-line-of-sight comparison;
- after-water ray refracts and reaches eye;
- coin does not physically rise.

### L2-S06 — Fish apparent depth
3 min. Fish appears shallower than actual position.

Visual contract:
- at least two real rays;
- backward extensions locate apparent fish;
- real/apparent fish clearly distinct.

### L2-S07 — Mirage
4 min. Hot ground → refractive-index gradient → progressive ray bending → apparent image; no literal water and no single mirror-like boundary.

### L2-S08 — Increasing incidence angle
4 min. From higher-index to lower-index medium, increasing `i` increases `r`; refracted ray approaches interface.

### L2-S09 — Critical angle: `r = 90°`
4 min.

Core content:
- critical angle `C` is the incidence angle in the higher-index medium for which the refracted angle is `90°`;
- the refracted ray travels along the interface;
- **this is not yet full internal reflection**;
- the diagram must also show the reflected ray in the first medium, obeying the law of reflection;
- do not label or quantify reflected power/fraction at this level.

Visual spec:
- one incident ray;
- one reflected ray in first/incident medium;
- one grazing refracted ray along interface;
- clear normal and `C`, `r=90°` labels;
- no color-only meaning.

### L2-S10 — পূর্ণ অভ্যন্তরীণ প্রতিফলন: two conditions
4 min.

- higher-index/optically denser → lower-index/rarer;
- `i > C`;
- then full internal reflection occurs;
- no transmitted refracted ray in the idealized ray diagram.

### L2-S11 — Three-state hinge
3 min.

- `i < C`: reflection + refraction;
- `i = C`: reflected ray + grazing refracted ray, `r=90°`;
- `i > C`: full internal reflection; no transmitted refracted ray in the idealized model.

### L2-S12 — Optical fibre
4 min. Repeated full internal reflection guides light; fibre does not store light.

### L2-S13 — Uses
2 min. Medical/endoscope context + communication/data transmission expressed in Bangla-first student-facing wording.

### L2-S14 — Summary + exit
3 min. Refraction → apparent position → critical angle → full internal reflection → optical fibre.

## FLEX

### L2-F01 — Simulation
4 min. Teacher-controlled qualitative `i<C / i=C / i>C` prediction using the best verified simulation route; static fallback remains the three-state deterministic diagrams.

### L2-F02 — Textbook-style practice
4 min. Projector-safe custom redraw; final geometry checked against visible NCTB page and current full-internal-reflection rules.

## Timing

- CORE: 44 min
- FLEX: 8 min
- Total planned: 52 min
- Contingency: 8 min

## Accuracy-enforcement checks

Before a rendered build can be marked internally passing:

- [x] exact student-facing copy locked
- [x] Bangla terminology lint available/run for v2
- [x] apparent-position two-ray contract
- [x] fish two-ray contract
- [x] coin before/after line-of-sight contract
- [x] mirage gradient direction/model
- [x] reflected ray remains in incident medium at `i=C`
- [x] `i=C` separated from `i>C`
- [x] no transmitted ray for `i>C`
- [x] optical-fibre internal-reflection arrows checked
- [x] focused high-risk rendered review performed for v2

Canonical enforcement:

- `/ACCURACY_ENFORCEMENT.md`
- chapter `/TERMINOLOGY_LOCK.md`
- chapter `/DIAGRAM_CONTRACTS.md`
