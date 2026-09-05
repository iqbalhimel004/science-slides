# QA — Lesson 1 Storyboard

## Identity

- Chapter: Class 8 Science, Chapter 11 — আলো
- Lesson: 1 — আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম
- Version: Storyboard draft v1 after Gemini Gate A reconciliation
- Reviewer: ChatGPT lead/internal QA
- Date: 2026-09-05

## Gate results

| Gate | Result | Evidence / notes |
|---|---|---|
| G0 Input integrity | PASS_WITH_NOTES | Full chapter PDF available; scanned/image source; visible rendered page authoritative. |
| G1 Curriculum and scope | PASS | NCTB p.109–111 core mapped; supplementary foundations explicitly separated. |
| G2 Source verification | PASS_FOR_STORYBOARD | Critical L1 science mapped to S2/S3/S11/S12/S13 and resolved source issues. Final exact slide wording still rechecked before freeze. |
| G3 Scientific accuracy | PASS_FOR_STORYBOARD | Normal-incidence exception, optical-density distinction and slab geometry guardrail included. |
| G4 Realistic 60-minute timing | PASS | CORE 43 + FLEX 7 = 50 min; 10 min contingency retained. |
| G5 Pedagogy and cognitive load | PASS | Phenomenon-first demo; progressive vocabulary; prediction/hinge/exit checks; photon note kept minimal/non-assessed. |
| G6 Resource suitability / fallback | PASS_WITH_NOTES | CORE requires no internet; live pencil demo has static fallback. Custom ray diagrams still require build/visual QA. |
| G7 Storyboard readiness | PASS | Slide IDs, purpose, content, visual role, student response, timing, sources, fallbacks and transitions recorded. |
| G8 Content freeze | FAIL / NOT_DUE | Gate B and final G1–G7 pass still required. |
| G9 Renderer calibration | N/A / PENDING | RT-01 later. |
| G10 Visual engagement / classroom usability | PASS_FOR_STORYBOARD | Layout rhythm intentionally varied; projector validation pending renderer. |
| G11 Export / playback / offline reliability | N/A / PENDING | No rendered artifact yet. |
| G12 Chapter-wide coverage | N/A / PENDING | Only Lesson 1 storyboard complete. |
| G13 Cross-lesson continuity / duplication | PASS_FOR_CURRENT_STAGE | L1 stops before critical angle/TIR; clean bridge to L2. Full audit later. |
| G14 Final chapter completion | N/A / PENDING | Not due. |
| G15 Post-class calibration | PENDING | Not taught yet. |

## Critical findings

No blocker prevents advancing from Lesson 1 storyboard draft to resource/visual planning and later chapter-wide storyboarding.

Before content freeze:

1. verify the final Bangla wording of `আলো কী` does not ambiguously equate all electromagnetic radiation with visible light;
2. verify every ray diagram label/direction after drawing;
3. keep the optical-density explanation qualitative and avoid unsourced numerical examples;
4. ensure L1-F01 explicitly binds equal incident/emergent angle to parallel-sided slab geometry;
5. recheck exact NCTB exam-facing wording against visible pages where used.

## Non-critical improvements

- Consider whether L1-S03 should keep the photon note on the same slide or move the note entirely to L1-F02 after renderer/cognitive-load testing.
- If S08 feels crowded during rendering, split the visual into staged states without increasing total classroom time.
- A short board sketch can reinforce the normal and angle reference if projector labels are hard to see.

## Timing check

- CORE planned time: 43 min
- FLEX planned time: 7 min
- CORE + FLEX: 50 min
- Contingency retained: 10 min
- STRETCH required for lesson success?: No
- Questions/board work/media setup/transitions counted?: Yes at storyboard planning level; live demo uses simple pre-positioned materials.
- Unrealistic pacing assumptions?: None identified; S06/S08 are the main watch points in real classroom calibration.

## Scientific/source checks

- Definitions source-traceable: Yes, pending final wording freeze.
- Critical OCR/extracted wording visually checked where uncertain: Chapter source was visually inspected; final exam-facing wording requires slide-level recheck.
- Laws/formulas/units verified: Qualitative rules verified; no numerical formulas in CORE.
- Calculations checked: N/A.
- Diagram labels/directions checked: specification checked; actual rendered diagrams not yet built.
- Material source conflicts resolved: Yes for L1 known issues SI-11-002 and SI-11-003.
- Equation/source expression preserved where needed: `i`, `r`, `0°`, speed-of-light FLEX value specified.

## Pedagogy and cognitive load

- Retrieval/prior knowledge activated?: Yes — S01/S02.
- Learning sequence logical?: Yes — seeing/light → properties/medium → phenomenon → ray vocabulary → cause → rules → exit.
- Major segments include meaningful student response?: Yes.
- Hinge/check-for-understanding useful and present where needed?: Yes — S08, S10, S12, S14.
- Guided practice/application present?: Yes — ray identification/prediction and FLEX slab reasoning.
- Misconceptions addressed where relevant?: Yes.
- Summary + exit check retained?: Yes — S13/S14.
- Textbook dumping avoided?: Yes.
- Complex material segmented?: Yes.
- Redundant on-screen prose controlled?: Planned yes.
- Long passive teacher-only stretches avoided?: Yes.

## Visual engagement / UI

- Overall attractiveness: storyboard supports strong visual-first treatment; renderer test pending.
- Age appropriateness: Class 8 concrete examples and clean ray diagrams.
- Clear focal hierarchy on each slide?: specified yes; render QA pending.
- Layout variation without chaos?: yes by storyboard design.
- Visuals have declared teaching purpose?: yes.
- Decorative clutter absent?: yes by specification.
- Grade-density profile appropriate?: yes at draft stage.
- Motion/animation pedagogically justified?: only progressive construction/reveal; static fallback required.

## Renderer calibration / first-pilot checks

- Beautiful.ai RT-01 result: PENDING
- Canva RT-01 result: PENDING
- Bangla conjunct rendering comparison: PENDING
- Equation/notation comparison: PENDING
- Editability comparison: PENDING
- Export fidelity comparison: PENDING
- Projector-readability comparison: PENDING
- Workflow friction/time comparison: PENDING
- Selected default/fallback renderer decision: PENDING
- Any Hyperagent SVG/equation/QA support used and value gained: NOT YET
- NotebookLM usefulness on actual source: NOT TESTED / optional
- Gemini review usefulness/cadence: Gate A useful; targeted findings validated selectively. Gate B required later.

## Accessibility / projector

- Back-of-room readability: specification emphasizes large single-focus diagrams; actual test pending.
- Contrast: renderer QA pending.
- Color-independent meaning: ray direction/labels must not depend on color alone.
- Bangla glyph/conjunct rendering: RT-01 pending.
- Equation/symbol rendering: `i`, `r`, degree sign to be included in RT-01/export QA.
- Diagram label size: actual renderer QA pending.
- Any key visual requires zooming?: should not; fail if rendered version does.

## Resource resilience

- Online links checked: no online resource required for CORE.
- QR codes checked: N/A.
- Core media/simulation fallback available: yes; live demo → static photo, progressive diagrams → staged static versions.
- Licensing/attribution recorded: custom/static assets TBD; external photo, if used, must have legal source or be custom-generated.
- Unauthorized downloaded video clips avoided?: Yes / none planned.

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

- Persist this QA and storyboard mapping, then continue Lesson 2 storyboard/resource planning. Do not content-freeze or render final decks yet.
