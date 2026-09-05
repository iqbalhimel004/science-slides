# QA — Lesson 2 Storyboard

## Identity

- Chapter: Class 8 Science, Chapter 11 — আলো
- Lesson: 2 — প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন
- Version: Storyboard draft v1 after Gemini Gate A reconciliation
- Reviewer: ChatGPT lead/internal QA
- Date: 2026-09-05

## Gate results

| Gate | Result | Evidence / notes |
|---|---|---|
| G0 Input integrity | PASS_WITH_NOTES | Full scanned/image textbook available; visible rendered source pages authoritative. |
| G1 Curriculum and scope | PASS | NCTB applications, critical angle/TIR and optical fibre all mapped; supplementary mirage clarification remains explicitly separate. |
| G2 Source verification | PASS_FOR_STORYBOARD | Apparent-position, critical-angle/TIR, mirage clarification and fibre mechanism are source-mapped. Final slide wording/diagram labels still require pre-freeze check. |
| G3 Scientific accuracy | PASS_FOR_STORYBOARD | Critical-angle threshold, two-condition TIR rule, gradient mirage model and fibre guidance are correctly constrained. |
| G4 Realistic 60-minute timing | PASS | CORE 44 + FLEX 8 = 52 min; 8 min contingency retained. |
| G5 Pedagogy and cognitive load | PASS | Retrieval → apparent position applications → mirage → critical-angle progression → TIR → fibre → exit; frequent prediction/hinge responses. |
| G6 Resource suitability / fallback | PASS_WITH_NOTES | CORE is fully offline; PhET is FLEX only with static fallback. All custom ray diagrams still need build/render QA. |
| G7 Storyboard readiness | PASS | Slide IDs, content, visuals, student actions, sources, transitions, timing and fallbacks specified. |
| G8 Content freeze | FAIL / NOT_DUE | Gate B and final G1–G7 pass still required. |
| G9 Renderer calibration | N/A / PENDING | RT-01 later. |
| G10 Visual engagement / classroom usability | PASS_FOR_STORYBOARD | Strong visual sequence and varied layouts; actual projector test pending. |
| G11 Export / playback / offline reliability | N/A / PENDING | No rendered artifact yet. |
| G12 Chapter-wide coverage | N/A / PENDING | Lessons 3–4 storyboards not yet complete. |
| G13 Cross-lesson continuity / duplication | PASS_FOR_CURRENT_STAGE | Clean dependency from L1 refraction to L2 applications/TIR, with a clear bridge to L3 optics instruments. |
| G14 Final chapter completion | N/A / PENDING | Not due. |
| G15 Post-class calibration | PENDING | Not taught yet. |

## Critical findings

No blocker prevents advancing to Lesson 3 storyboard.

Before content freeze:

1. inspect all apparent-position diagrams to ensure dashed backward extensions are never drawn as real rays;
2. ensure mirage visual shows a refractive-index/temperature gradient rather than a single hard reflecting boundary;
3. ensure `i = C` is visually distinct from `i > C` and does not imply TIR at the critical angle;
4. verify optical-fibre arrows and internal reflections are geometrically plausible;
5. visually recheck the NCTB exercise geometry used for `L2-F02` against the source page before finalizing the custom redraw.

## Non-critical improvements

- If S02/S03 feels slow in classroom testing, merge the verbal explanation while keeping both visual states.
- If mirage takes longer than four minutes, keep the qualitative CORE slide and move any extended ray debrief to FLEX without sacrificing TIR time.
- Core/cladding may remain a tiny supplementary note only if it does not distract from repeated TIR.

## Timing check

- CORE planned time: 44 min
- FLEX planned time: 8 min
- CORE + FLEX: 52 min
- Contingency retained: 8 min
- STRETCH required for lesson success?: No
- Questions/board work/media setup/transitions counted?: Yes at storyboard level.
- Unrealistic pacing assumptions?: Main watch point is the S08–S11 critical-angle/TIR sequence; however 15 min is intentionally reserved for it.

## Scientific/source checks

- Definitions source-traceable: Yes.
- Critical OCR/extracted wording visually checked where uncertain: chapter source previously inspected; final exam-facing wording and exercise redraw require slide-level recheck.
- Laws/formulas/units verified: `r = 90°` at critical angle; `i > C` for TIR under higher-index→lower-index condition.
- Calculations checked: N/A; no numerical Snell-law/critical-angle calculations in CORE.
- Diagram labels/directions checked: specification checked; rendered assets pending.
- Material source conflicts resolved: known mirage clarification is documented as SI-11-005.
- Equation/source expression preserved where needed: `i`, `r`, `C`, `90°`.

## Pedagogy and cognitive load

- Retrieval/prior knowledge activated?: Yes — S01.
- Learning sequence logical?: Yes — apparent position applications → atmospheric refraction → denser→rarer progression → critical angle → TIR → fibre.
- Major segments include meaningful student response?: Yes.
- Hinge/check-for-understanding useful and present where needed?: Yes — S09, S10, S11, S14.
- Guided practice/application present?: Yes — stick/coin/fish and FLEX ray classification.
- Misconceptions addressed where relevant?: Yes.
- Summary + exit check retained?: Yes.
- Textbook dumping avoided?: Yes.
- Complex material segmented?: Yes, especially S08–S11.
- Redundant on-screen prose controlled?: Planned yes.
- Long passive teacher-only stretches avoided?: Yes.

## Visual engagement / UI

- Overall attractiveness: strong potential through familiar phenomena and progressive ray visuals.
- Age appropriateness: Class 8 concrete examples; no unnecessary mathematics.
- Clear focal hierarchy on each slide?: specified yes; render QA pending.
- Layout variation without chaos?: yes.
- Visuals have declared teaching purpose?: yes.
- Decorative clutter absent?: yes by specification.
- Grade-density profile appropriate?: yes at storyboard stage.
- Motion/animation pedagogically justified?: only progressive construction/prediction; static fallback defined.

## Resource resilience

- Online links checked: PhET candidate identified for FLEX; classroom launch still requires device test.
- QR codes checked: N/A.
- Core media/simulation fallback available: Yes; all CORE visuals are static/custom.
- Licensing/attribution recorded: PhET attribution/licensing note recorded in `RESOURCES.md`; custom diagrams are project-created.
- Unauthorized downloaded video clips avoided?: Yes; none planned.

## Final artifact check

- Primary delivery format tested: No.
- PDF fallback available and checked: No, not rendered yet.
- Font substitution issues: PENDING.
- Image crop issues: PENDING.
- Media/animation behaviour: PENDING.
- Scientific content drift after rendering?: PENDING.
- Offline/static fallback works?: specified, not built/tested yet.

## Final decision

`PASS_WITH_NONBLOCKING_NOTES` for **storyboard draft stage only**.

## Required next action

- Persist Lesson 2 coverage mapping and chapter state, then continue Lesson 3 storyboard/resource planning. Do not content-freeze or render final decks yet.
