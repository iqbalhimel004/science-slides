# Quality Gates

Version: 5.0
Last revised: 2026-09-08
Status: **ACTIVE — PRODUCTION SYSTEM V2.1**

A lesson/chapter advances only when every applicable gate passes. Rendering, overflow checks, attractive design or metadata alone never prove scientific correctness.

## G0 — Input integrity

PASS only if chapter/source identity, order, completeness, readability and text-layer/OCR status are known; missing/cropped/uncertain material is resolved or explicitly documented.

## G1 — Curriculum and scope

PASS only if the lesson maps to the intended NCTB/current curriculum scope, important outcomes/subsections are represented, prerequisites are identified and unnecessary depth is controlled.

## G2 — Source verification and freshness

PASS only if:

- key definitions/laws/formulas/units/claims are source-traceable;
- critical extracted textbook wording is visually checked when uncertain;
- source conflicts are resolved/flagged;
- NCTB scope authority is separated from scientific authority;
- material claims are classified as `STABLE`, `REVISION_SENSITIVE` or `CURRENT_DATA` where relevant;
- revision-sensitive/current-data claims have an appropriate date/edition/last-check record.

Recent publication date alone is not evidence of scientific correctness.

## G3 — Scientific accuracy

PASS only if concepts, causal explanations, process direction, labels, formulas, units, diagrams and simplifications are correct and do not materially mislead.

### G3A — Student-facing copy and terminology

PASS only if:

- exact visible copy is frozen in `SLIDE_COPY_V*.md` or equivalent structured spec;
- chapter terminology lock is followed;
- symbols/acronyms are introduced before use;
- Bangla-first rules are followed;
- automated text lint passes where practical;
- questions/instructions are standalone-readable.

### G3B — R3 semantic/diagram contracts

For R3 visuals, PASS only if:

- explicit invariants/semantic contracts exist;
- geometry/topology assertions pass where practical;
- angle definitions are checked by endpoints/reference line, not merely by the presence of an arc;
- each R3 slide is rendered and individually inspected;
- post-render student-inference science review agrees with intended science.

Wrong/missing invariant = automatic FAIL.

### G3C — Quantitative/numerical integrity

Where applicable, PASS only if:

- formula/law choice is correct;
- units/conversions are correct;
- dimensional consistency is checked where meaningful;
- worked answers are independently recomputed;
- signs/rounding/precision are appropriate;
- graph axes/units/scales/data/trends are verified.

### G3D — Model/idealization/scale transparency

PASS only if a simplification does not materially falsify the phenomenon. When needed, label visuals as `সরলীকৃত চিত্র`, `স্কেল অনুযায়ী নয়`, idealized model, schematic, etc.

## G4 — Realistic 60-minute timing

PASS only if CORE is normally ~40–45 min, FLEX ~5–10 min, CORE+FLEX ~50–55 min, 5–10 min contingency remains, STRETCH is non-essential, and all responses/board work/activities/media setup/debrief/transitions/exit checks are counted.

## G5 — Pedagogy and cognitive load

PASS only if learning sequence is age-appropriate, prior knowledge is activated, meaningful student response/check/practice is present where useful, misconceptions are addressed, summary/exit retained, and text is not a textbook dump.

## G6 — Resource suitability, licensing and resilience

PASS only if external resources are scientifically suitable, relevant, age-appropriate, classroom-usable, legally/reasonably reusable, provenance is recorded and classroom-critical resources have a practical fallback.

### G6A — Experiment/demo safety

For live experiments/demonstrations, PASS only if plausible hazards have been reviewed, teacher/student permissions are clear, required PPE/setup/disposal is stated where relevant, unsafe variants are excluded and a safer/static fallback exists when needed.

If safety cannot be established, the live activity cannot be CORE/FLEX.

## G7 — Storyboard/structured-spec readiness

PASS only if each slide/state has enough specification to render without inventing science, including:

- segment;
- purpose/learning goal;
- exact/approved content;
- R1/R2/R3 risk;
- visual route;
- required invariants for R3;
- sources/freshness where relevant;
- timing;
- teacher/student action;
- dynamic mode;
- fallback;
- safety/accessibility/model notes where relevant.

## G8 — Content freeze

PASS only after G1–G7 are satisfied and no unresolved material content change remains. Visual finishing must not silently alter frozen science.

## G9 — Renderer/tool routing

Current canonical architecture is `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`. PptxGenJS is primary controlled assembly; specialized scientific engines are routed by concept; Canva is optional finishing/context support, not science authority.

Repeat renderer calibration only if tool behavior materially changes or the user explicitly requests reconsideration.

## G10 — Visual engagement and classroom usability

PASS only if actual rendered slides have clear hierarchy, projector-readable text/labels, controlled density, purposeful visuals, coherent rhythm/layout variety, scientifically correct diagrams and intentional dynamic treatment where useful.

A correct but materially unreadable/utilitarian deck fails G10. An attractive but scientifically wrong deck fails G3/G3B.

### G10A — Accessibility and multimodal clarity

PASS only if critical meaning does not rely solely on color, motion or audio. As applicable verify:

- high contrast;
- color-independent line/style/text cues;
- essential labels readable without zoom;
- captions/transcript/teacher summary for important audio/video meaning;
- static/final state preserves essential animation meaning;
- no unnecessary flashing/distracting motion.

## G11 — PowerPoint compatibility, export, playback and offline reliability

PASS only if exact classroom delivery artifacts are checked.

When Microsoft PowerPoint is available:

- exact PPTX opens without repair/recovery warning;
- editability is preserved where expected;
- links/buttons/reveal/animation/media work;
- any normalized/resaved artifact is retested.

If PowerPoint testing is unavailable, status is `DELIVERY_COMPATIBILITY_PENDING`, not PASS.

Also verify Bangla/notation, image crops, diagram labels, media/simulation launch, PDF fallback and offline/static fallback.

## G12 — Chapter-wide coverage

Every meaningful textbook subsection must be classified as Covered, Supplementary, Homework/self-study, or Intentionally omitted with reason.

## G13 — Cross-lesson continuity and duplication

PASS only if order/prerequisites/bridges are coherent, duplication is purposeful or removed, and the visual/motion system is consistent without forcing identical slides.

## G14 — Artifact persistence, component regression and reproducibility

PASS only if production is durably recoverable:

- current artifact filenames/fingerprints;
- build/generator source/spec;
- deterministic component sources/tests;
- asset provenance/licensing;
- export method;
- compatibility status;
- dynamic/fallback status;
- copy/terminology/semantic-contract records.

For changed reusable R3 components, targeted golden-master regression review is required before reuse.

## G15 — Final lesson/chapter completion

PASS only when all applicable lesson gates, coverage/continuity, compatibility, visual acceptance, fallbacks and reproducibility requirements pass and repository state is updated.

## Optional G16 — Post-class calibration

After teaching, record actual timing, confusion points, resource/compatibility failures and successful visual/interactive elements. Use classroom evidence to calibrate future work.

## Selective revalidation rule

After a change, rerun only the affected gate chain, using the selective-invalidation matrix in Production System v2.1. This prevents both under-testing and wasteful full re-audits.

## Mandatory production references

- `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
- `ACCURACY_ENFORCEMENT.md`
- `CLASSROOM_LANGUAGE_POLICY.md`
- `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
- `ARTIFACT_PERSISTENCE.md`
- active chapter terminology/diagram/semantic contracts.
