# Resource / Asset Map — Lesson 4

Date: 2026-09-06
Lesson: `আলোক-চিত্রগ্রাহী ক্যামেরা, চোখের সাথে তুলনা ও অধ্যায় সংশ্লেষ`
Status: RESOURCE_MAP_DRAFT_COMPLETE

All CORE resources must work offline. Scientific diagrams should be deterministic/custom where labels, ray paths, image orientation or mechanism matter.

## R4-01 — Photographic/film camera cutaway

- Lesson: 4
- Target slides: L4-S02, L4-S03
- Type: diagram
- Topic/purpose: locate textbook camera parts and show the optical path from object to image plane
- Visual purpose: Locate / Explain
- Source/creator/organization: custom redraw grounded in NCTB p.115 and OpenStax camera optics (S19)
- Existing or custom: custom deterministic diagram
- Why selected: textbook scan is not projector-optimized and must not be treated as a modern digital-camera schematic
- Scientific suitability: high if final ray geometry/labels are checked
- Age/class suitability: high
- Planned classroom time: embedded in storyboard
- Reuse mode: custom redraw
- Visible attribution required?: source note in speaker notes/source record, not on-slide unless needed
- License/usage status: custom asset based on general scientific structure; do not copy proprietary illustration styling
- Accessibility note: large labels; meaning must not depend on color alone
- Static/offline fallback: primary asset is static
- Fallback location/reference: lesson asset folder after build
- QA status: SPEC_COMPLETE — BUILD/RENDER_QA_PENDING

Required labels/features:
- lens system
- aperture/diaphragm
- shutter
- film/photographic plate image plane
- body/light-tight box
- incoming rays
- real inverted image at receiving plane

## R4-02 — Camera image-formation ray diagram

- Lesson: 4
- Target slide: L4-S04
- Type: diagram
- Topic/purpose: show that a converging lens forms a real inverted image on film/sensor plane
- Visual purpose: Explain / Sequence
- Source/creator/organization: custom deterministic ray construction grounded in S8/S19
- Existing or custom: custom
- Why selected: ray direction/orientation is high-risk scientific content and should not rely on decorative stock art
- Scientific suitability: high after inspection
- Age/class suitability: high
- Planned classroom time: embedded
- Reuse mode: custom SVG/static image
- Visible attribution required?: no, but source provenance recorded
- Static/offline fallback: primary static asset
- QA status: SPEC_COMPLETE — RAY_GEOMETRY_QA_PENDING

Required checks:
- object outside focal length in the simplified camera model
- real rays actually converge at image plane
- image is inverted
- no false claim that camera lens always produces same image size

## R4-03 — Aperture, shutter and exposure sequence

- Lesson: 4
- Target slides: L4-S05, L4-S06
- Type: process diagram / comparison
- Topic/purpose: distinguish amount of light admitted from duration of exposure
- Visual purpose: Compare / Sequence
- Source/creator/organization: custom, grounded in textbook camera treatment + S19
- Existing or custom: custom
- Why selected: directly targets the misconception that lens or aperture controls exposure duration
- Scientific suitability: high
- Age/class suitability: high
- Reuse mode: custom
- Static/offline fallback: primary static staged sequence
- QA status: SPEC_COMPLETE — BUILD_QA_PENDING

Required conceptual separation:
- aperture/diaphragm controls opening size/light amount rate
- shutter controls the time interval light reaches the recording plane
- exposure depends on admitted light over time; keep qualitative

## R4-04 — Black-and-white film development/fixing process

- Lesson: 4
- Target slide: L4-S07
- Type: process diagram
- Topic/purpose: contextualize the NCTB silver-halide/developer/hypo/negative sequence as film-camera chemistry
- Visual purpose: Sequence / Explain
- Source/creator/organization: custom process diagram grounded in Kodak processing documentation (S14) and Chemistry LibreTexts (S15)
- Existing or custom: custom
- Why selected: the textbook wording is older-film-specific and needs a clear modern context label
- Scientific suitability: high if chemistry language stays qualitative
- Age/class suitability: high when limited to 3–4 steps
- Planned classroom time: embedded
- Reuse mode: custom redraw
- Visible attribution required?: no on slide; source notes required
- Static/offline fallback: primary static asset
- QA status: SPEC_COMPLETE — CHEMISTRY_LABEL_QA_PENDING

Required sequence:
1. light exposure creates latent image pattern in silver-halide film/emulsion
2. developer converts/reduces exposed grains to metallic silver in the simplified black-and-white process
3. fixer/hypo removes remaining undeveloped/unexposed silver halide
4. remaining silver pattern is the negative

Guardrail:
- explicit banner: `Film camera chemistry — modern digital cameras do not use this process`

## R4-05 — Eye vs camera functional comparison

- Lesson: 4
- Target slides: L4-S08, L4-S09, L4-S10
- Type: comparison diagram/table
- Topic/purpose: compare shared optical functions while showing analogy limits
- Visual purpose: Compare / Explain
- Source/creator/organization: custom, grounded in NCTB p.116 plus S16/S17/S19 and SI-11-006/SI-11-007
- Existing or custom: custom
- Why selected: one-to-one textbook analogy can create mechanistic misconceptions
- Scientific suitability: high after label review
- Age/class suitability: high
- Reuse mode: custom
- Static/offline fallback: primary static asset
- QA status: SPEC_COMPLETE — ANALOGY_QA_PENDING

Functional mappings:
- camera lens system ↔ cornea + crystalline lens focusing system
- aperture/diaphragm ↔ iris/pupil light-control system
- film/sensor plane ↔ retina as receiving surface
- focusing function shared, mechanism different

Explicit analogy limits:
- eyelid is not a true optical shutter equivalent
- retina is not a photographic film storage sheet
- eye accommodates mainly by changing crystalline-lens shape/optical power
- conventional camera systems may focus by lens/lens-group movement relative to image plane; do not universalize one camera mechanism

## R4-06 — Chapter-wide concept map

- Lesson: 4
- Target slide: L4-S12
- Type: concept map
- Topic/purpose: synthesize all four lessons without adding new content
- Visual purpose: Summarize / Locate
- Source/creator/organization: custom from approved chapter analysis and coverage matrix
- Existing or custom: custom
- Why selected: chapter synthesis needs explicit dependency chain, not another paragraph summary
- Scientific suitability: high if all nodes reflect approved content only
- Age/class suitability: high
- Reuse mode: custom
- Static/offline fallback: primary static asset
- QA status: SPEC_COMPLETE — CHAPTER_CONTINUITY_QA_PENDING

Required chain:
`Light/seeing → refraction → apparent position → critical angle/TIR → optical fibre → lens/image concepts → magnifier → eye → spectacles supplement → camera → eye-camera comparison`

## R4-07 — Exam-facing camera/eye application redraw

- Lesson: 4
- Target slide: L4-S13 and FLEX L4-F01/L4-F02
- Type: practice diagram/question
- Topic/purpose: projector-safe practice based on NCTB chapter exercise concepts
- Visual purpose: Practice / Predict
- Source/creator/organization: custom redraw after visible verification of NCTB pp.117–118 / PDF pp.122–123
- Existing or custom: custom
- Why selected: scanned textbook exercise visuals may be too small/ambiguous for projection
- Scientific suitability: pending final visible-page geometry check
- Age/class suitability: high
- Reuse mode: custom redraw
- Static/offline fallback: primary static asset
- QA status: PENDING_VISIBLE_SOURCE_RECHECK_BEFORE_FREEZE

## R4-08 — Modern digital camera enrichment panel

- Lesson: 4
- Target: STRETCH only, or a tiny clarification callout if needed
- Type: comparison/modern context
- Topic/purpose: clarify that modern digital cameras record images electronically rather than using silver-halide film chemistry
- Visual purpose: Compare
- Source/creator/organization: authoritative modern camera source to be pinned if this enrichment is actually rendered
- Existing or custom: TBD
- Why selected: prevents film-camera content being mistaken for contemporary default operation
- Scientific suitability: conceptually sound; exact sensor detail not yet required
- Age/class suitability: high if limited to one sentence
- Reuse mode: custom/authoritative image only if needed
- Static/offline fallback: static panel
- QA status: OPTIONAL_STRETCH — SOURCE_PIN_IF_USED

## Resource build priority

1. R4-01 camera cutaway
2. R4-02 camera ray formation
3. R4-05 eye-camera comparison
4. R4-03 aperture/shutter/exposure
5. R4-04 film chemistry process
6. R4-06 chapter concept map
7. R4-07 practice redraw
8. R4-08 optional digital-camera enrichment

## Final resource rule

Do not freeze Lesson 4 until:
- camera ray geometry is inspected;
- film-chemistry labels are checked against S14/S15;
- eye-camera analogy limits are explicit;
- NCTB exercise redraw is checked against the visible page;
- no visual implies that digital cameras use film chemistry;
- all CORE assets have offline/static availability.
