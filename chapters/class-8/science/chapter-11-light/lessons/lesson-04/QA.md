# QA — Lesson 4 Storyboard

## Identity

- Chapter: Class 8 Science, Chapter 11 — আলো
- Lesson: 4 — আলোক-চিত্রগ্রাহী ক্যামেরা, চোখের সাথে তুলনা ও অধ্যায় সংশ্লেষ
- Version: Storyboard draft v1 after Gemini Gate A reconciliation
- Reviewer: ChatGPT lead/internal QA
- Date: 2026-09-06

## Gate results

| Gate | Result | Evidence / notes |
|---|---|---|
| G0 Input integrity | PASS_WITH_NOTES | Full chapter source available; scanned/image PDF; visible page authoritative. |
| G1 Curriculum and scope | PASS | NCTB pp.115–118 covered; film-camera context and comparison retained. |
| G2 Source verification | PASS_FOR_STORYBOARD | Camera optics S8/S19; film chemistry S14/S15; eye clarification S16/S17. One current digital-camera source still to be pinned before freeze if L4-S11 remains CORE. |
| G3 Scientific accuracy | PASS_FOR_STORYBOARD | Real/inverted camera image, aperture/shutter distinction, film chemistry, eye-camera analogy limits specified correctly at storyboard level. |
| G4 Realistic 60-minute timing | PASS_WITH_NOTE | Storyboard re-estimate: CORE 46 + FLEX 8 = 54 min; 6 min contingency. Older 44-min plan was rebased. |
| G5 Pedagogy and cognitive load | PASS | Retrieval, mechanism-first build, misconception checks, comparison, guided practice, synthesis and exit all present. |
| G6 Resource suitability / fallback | PASS_WITH_NOTES | CORE fully offline; all high-risk scientific visuals specified as deterministic/custom. Final build QA pending. |
| G7 Storyboard readiness | PASS | Slide IDs, purpose, content, visual role, student response, timing, sources and fallbacks recorded. |
| G8 Content freeze | FAIL / NOT_DUE | Gate B and chapter-wide audit still pending. |
| G9 Renderer calibration | N/A / PENDING | RT-01 later. |
| G10 Visual engagement / classroom usability | PASS_FOR_STORYBOARD | Layout rhythm varied; actual projector check pending. |
| G11 Export / playback / offline reliability | N/A / PENDING | No rendered artifact yet. |
| G12 Chapter-wide coverage | PASS_FOR_MAPPING_STAGE | Lesson 4 closes remaining camera/comparison coverage; final chapter audit still required. |
| G13 Cross-lesson continuity / duplication | PASS_FOR_CURRENT_STAGE | Strong bridge from L3 lens/eye concepts; full four-lesson duplication audit pending. |
| G14 Final chapter completion | N/A / PENDING | Not due. |
| G15 Post-class calibration | PENDING | Not taught yet. |

## Critical findings before content freeze

1. Final camera ray diagram must be inspected for real-ray convergence and image inversion.
2. L4-S07 chemistry wording must be checked again against Kodak/chemistry sources after visual design.
3. If L4-S11 remains CORE, pin a current authoritative source for the digital-camera electronic recording statement.
4. NCTB exercise-based redraws must be visually compared against the source page before freeze.
5. Eye-camera comparison must retain `similar function, different mechanism`; do not let renderer simplify it into false one-to-one equivalence.
6. The 46-minute CORE estimate is accepted for this lesson because total planned time remains 54 minutes; do not add more CORE content.

## Non-critical improvements

- If the 4-step film chemistry process renders too densely, use staged reveal/static sequence rather than smaller text.
- If L4-S12 concept map is visually crowded, use a two-row flow while preserving one continuous dependency chain.
- L4-S11 may be moved to FLEX if a suitably current digital-camera source cannot be pinned quickly before freeze; the film-vs-digital misconception can still be handled briefly in teacher notes.

## Timing check

- CORE planned time: 46 min
- FLEX planned time: 8 min
- CORE + FLEX: 54 min
- Contingency retained: 6 min
- STRETCH required for lesson success?: No
- Questions/board work/media setup/transitions counted?: Yes at storyboard estimate level.
- Unrealistic pacing assumptions?: Watch L4-S07 chemistry and L4-S12 chapter synthesis; no additional CORE content should be inserted.

## Scientific/source checks

- Definitions source-traceable: Yes at storyboard stage.
- Critical OCR/extracted wording visually checked where uncertain: source pages previously inspected; final exam-facing redraw/wording requires recheck.
- Laws/formulas/units verified: no numerical formulas required.
- Calculations checked: N/A.
- Diagram labels/directions checked: specifications only; built diagrams pending inspection.
- Material source conflicts resolved: known camera/eye/film issues are documented in SI-11-004/SI-11-006/SI-11-007.
- Equation/source expression preserved where needed: N/A beyond lens/ray labels.

## Pedagogy and cognitive load

- Retrieval/prior knowledge activated?: Yes — L4-S01.
- Learning sequence logical?: Yes — image prerequisite → camera parts/path → aperture/shutter → film chemistry → eye-camera comparison → synthesis → application.
- Major segments include meaningful student response?: Yes.
- Hinge/check-for-understanding useful and present?: Yes — S04/S05/S06/S07/S09/S10/S14.
- Guided practice/application present?: Yes — S13 and FLEX slides.
- Misconceptions addressed?: Yes, especially film vs digital, eyelid/shutter, retina/film and focus mechanisms.
- Summary + exit check retained?: Yes — S12/S14.
- Textbook dumping avoided?: Yes.
- Complex material segmented?: Yes.
- Redundant on-screen prose controlled?: planned yes.
- Long passive teacher-only stretches avoided?: yes.

## Visual engagement / UI

- Overall attractiveness: strong potential due to cutaway/process/comparison/concept-map variety.
- Age appropriateness: Class 8 conceptual level maintained.
- Clear focal hierarchy on each slide?: specified yes; render QA pending.
- Layout variation without chaos?: yes.
- Visuals have declared teaching purpose?: yes.
- Decorative clutter absent?: by specification.
- Grade-density profile appropriate?: yes at storyboard stage.
- Motion/animation pedagogically justified?: only staged ray/process reveals; static fallback required.

## Resource resilience

- Online links checked: no online dependency for CORE.
- QR codes checked: N/A.
- Core media/simulation fallback available: yes, all static.
- Licensing/attribution recorded: custom assets planned; external modern-camera evidence/source note pending if L4-S11 stays CORE.
- Unauthorized downloaded video clips avoided?: Yes.

## Final decision

`PASS_WITH_NONBLOCKING_NOTES` for **storyboard draft stage only**.

## Required next action

- Map Lesson 4 slide IDs into `COVERAGE_MATRIX.md`.
- Update chapter/root status.
- Run chapter-wide storyboard/resource/duplication audit across Lessons 1–4.
- Then prepare fresh Gemini Gate B bundle; do not content-freeze or render yet.
