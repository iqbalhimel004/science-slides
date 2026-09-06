# Lesson 1 v2 Dynamic Implementation Manifest

Date: 2026-09-06
Status: **PLANNED — IMPLEMENTATION_PENDING**
Lesson: `আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম`

## Principle

The first controlled build was too static. Lesson 1 v2 must preserve the frozen science but implement purposeful dynamic teaching states.

For science-critical progressive construction, prefer staged duplicate-slide reveal states over fragile native animation when the teaching effect is equivalent.

Simulation choice is **multi-source and concept-fit driven**. PhET is a candidate, not an automatic default. Follow `/SIMULATION_RESOURCE_ROUTING.md`.

## Slide-level dynamic plan

| Slide | Mode | Instructional purpose | Planned implementation | PowerPoint risk | Static/PDF fallback |
|---|---|---|---|---|---|
| L1-S01 | PREDICT_THEN_REVEAL | hook/seeing | show dark scene/question first; reveal illuminated comparison/answer cue next | low | final comparison state |
| L1-S02 | STAGED_REVEAL | seeing sequence | source → object → reflected/emitted light → eye in 2–3 states | low | final complete process |
| L1-S03 | STATIC_INTENTIONAL | concise light definition | no animation needed; strong focal visual + small non-assessed photon note | none | same |
| L1-S04 | STAGED_REVEAL | chapter properties | reveal branches progressively, emphasizing medium change/refraction last | low | complete branch map |
| L1-S05 | PREDICT_THEN_REVEAL | medium recap | quick classification prompt before labels/categories reveal | low | final comparison cards |
| L1-S06 | LIVE_DEMO | phenomenon first | pencil/straw-in-water classroom demo; slide gives observe/predict prompt | none | high-contrast static fallback visual |
| L1-S07 | STAGED_REVEAL | ray vocabulary | interface → incidence point → normal → incident ray → labels | low | complete labelled diagram |
| L1-S08 | PREDICT_THEN_REVEAL | reflection vs refraction | unlabeled/partial ray prompt, then reveal labels and contrast | low | final paired diagram |
| L1-S09 | STAGED_REVEAL | speed-change causal bridge | medium boundary first, then speed/optical-density cues, then direction result | low | final complete explanatory state |
| L1-S10 | PREDICT_THEN_REVEAL | normal-incidence misconception | ask whether direction changes; reveal `i = 0°` straight path + speed-change note | low | final comparison state |
| L1-S11 | PREDICT_THEN_REVEAL | rarer→denser rule | show incident ray/normal only; students predict; reveal refracted ray toward normal | low | final ray diagram |
| L1-S12 | PREDICT_THEN_REVEAL | denser→rarer rule | show incident ray/normal only; students predict; reveal refracted ray away from normal | low | final ray diagram |
| L1-S13 | INTERACTIVE_NAVIGATION | concept-chain recap | optional clickable concept nodes/back-to-slide navigation if robust; otherwise staged reveal | medium | static concept chain |
| L1-S14 | PREDICT_THEN_REVEAL | exit check | questions appear first; answer key is teacher-controlled later state or hidden notes | low | question-only PDF preferred; answer version optional |
| L1-F01 | STAGED_REVEAL | slab geometry | build incident → refracted → emergent path in stages; final parallel emergence comparison | low | complete slab diagram |
| L1-F02 | SIMULATION / VIDEO_ANIMATION_RESOURCE | optional dynamic refraction support | launch the **best verified refraction simulation selected after candidate comparison**, with a prediction prompt and short debrief | external-link risk | L1-S09–S12 deterministic static states |

## Native PowerPoint animation policy for v2

Default: **NONE REQUIRED** for science-critical content if staged states deliver the same instructional effect.

Native animation may be added only for low-risk emphasis/reveal if:

- it materially improves presentation flow;
- it does not carry unique scientific meaning unavailable in the static state;
- exact PowerPoint playback is tested;
- behavior is retested after any normalization/resave.

Decorative spins/bounces are prohibited.

## Simulation candidate-selection plan

`L1-F02` does **not** hard-code PhET.

Before final v2 build, compare at minimum:

1. **PhET — Bending Light**
   - strong visual exploration of refraction;
   - familiar, research-based simulation;
   - CC BY-NC 4.0 regular HTML simulation licensing with attribution.

2. **The Physics Classroom — Refraction Interactive**
   - physics-specific refraction tool;
   - allows changing media and measuring angles with a protractor;
   - relevant for refraction and later TIR progression;
   - classroom activity/concept-check support exists.

3. **GeoGebra — suitable verified refraction/ray activity if one adds a real advantage**
   - potentially strong for adjustable geometry and angle/ray visualization;
   - community-created items require item-level scientific QA and licensing/attribution review.

Additional reputable candidates may be considered under `/SIMULATION_RESOURCE_ROUTING.md`.

Selection criteria:

- exact fit to Lesson 1 objective;
- Class 8 simplicity;
- ray/angle visual clarity;
- projector readability;
- teacher-demo friction;
- loading/device constraints;
- licensing/attribution;
- static/offline fallback;
- whether the resource adds something the staged deterministic slides do not already teach well.

Role:
- FLEX/teacher support only;
- not required for CORE;
- prediction prompt before launch;
- short debrief afterward.

Final selected provider/title/URL/attribution will be recorded in `RESOURCES.md` and this manifest before classroom-ready lock.

Fallback:
L1-S09–S12 staged deterministic diagrams.

## Interactive navigation plan

Optional low-risk features:

- home/section icon only if it does not clutter the interface;
- back-to-summary button on FLEX/resource slides;
- selected simulation launch button;
- no complex branching required for CORE.

Every button must be tested in Microsoft PowerPoint.

## PowerPoint compatibility checklist

Before v2 is approved:

- [ ] exact PPTX opens in Microsoft PowerPoint without repair warning
- [ ] staged reveal sequence order is correct
- [ ] hyperlinks/buttons work
- [ ] any native animation works as intended
- [ ] any normalization/resave did not remove dynamic behavior
- [ ] PDF fallback preserves essential science without dynamic features

## Visual engagement checklist

- [ ] strong opening visual
- [ ] coherent physics/light visual identity
- [ ] prediction slides visually distinct from explanation slides
- [ ] ray diagrams large and focal
- [ ] no repetitive box-heavy appearance
- [ ] simulation launch slide looks purposeful, not like a link dump
- [ ] exit slide visually distinct and readable
- [ ] user approves overall UI/motion direction before Lesson 2 begins

Canonical policies:
- `/PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
- `/SIMULATION_RESOURCE_ROUTING.md`
