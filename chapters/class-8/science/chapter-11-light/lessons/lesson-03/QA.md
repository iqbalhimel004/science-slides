# QA — Lesson 3 Storyboard

## Identity

- Chapter: Class 8 Science, Chapter 11 — আলো
- Lesson: 3 — উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা
- Version: Storyboard draft v1 after Gemini Gate A reconciliation
- Reviewer: ChatGPT lead/internal QA
- Date: 2026-09-05

## Gate results

| Gate | Result | Evidence / notes |
|---|---|---|
| G0 Input integrity | PASS_WITH_NOTES | Full chapter source available; scanned/image PDF; visible page remains authoritative for NCTB wording. |
| G1 Curriculum and scope | PASS | Magnifying glass + eye mapped; spectacles handled as documented source-gap supplement. |
| G2 Source verification | PASS_FOR_STORYBOARD | Lens, eye, accommodation and spectacles claims traced to S7/S8/S9/S10/S16/S17/S18. |
| G3 Scientific accuracy | PASS_FOR_STORYBOARD | Cornea/lens focusing roles, diverging-lens prerequisite, magnifier object placement and pupil-as-opening guardrails included. |
| G4 Realistic 60-minute timing | PASS | CORE 42 + FLEX 8 = 50 min; 10 min contingency retained. |
| G5 Pedagogy and cognitive load | PASS | Lens prerequisites minimal; eye anatomy grouped functionally; frequent hinge/retrieval prompts; spectacles tightly bounded. |
| G6 Resource suitability / fallback | PASS_WITH_NOTES | CORE can run fully offline; all key visuals have custom/static fallback plans. Actual diagrams still require build and visual QA. |
| G7 Storyboard readiness | PASS | Slide IDs, purpose, content, visual role, student response, timing, source links and transitions recorded. |
| G8 Content freeze | FAIL / NOT_DUE | Gate B and final G1–G7 pass still required. |
| G9 Renderer calibration | N/A / PENDING | RT-01 later. |
| G10 Visual engagement / classroom usability | PASS_FOR_STORYBOARD | Visual rhythm varies and anatomy is staged; projector validation pending renderer. |
| G11 Export / playback / offline reliability | N/A / PENDING | No rendered artifact yet. |
| G12 Chapter-wide coverage | N/A / PENDING | Lessons 1–3 mapped after checkpoint; Lesson 4 pending. |
| G13 Cross-lesson continuity / duplication | PASS_FOR_CURRENT_STAGE | L3 prepares the exact lens/eye concepts required by L4 camera comparison. |
| G14 Final chapter completion | N/A / PENDING | Not due. |
| G15 Post-class calibration | PENDING | Not taught yet. |

## Critical findings

No blocker prevents advancing from Lesson 3 storyboard draft to Lesson 4 storyboard.

Before content freeze:

1. inspect the final magnifying-glass ray diagram to ensure the object is inside focal length and the virtual image is placed correctly;
2. inspect eye diagram labels/anatomy and ensure the cornea is not visually de-emphasized as merely a window;
3. verify accommodation visuals do not imply lens translation toward/away from retina;
4. keep spectacles explicitly labelled supplementary/source-gap repair;
5. verify myopia/hyperopia ray sketches after drawing and avoid adding numerical lens power.

## Non-critical improvements

- If L3-S08 feels label-heavy on projector, reveal support/media labels in two states without increasing classroom time.
- The choroid wording should remain functional and simple; no histology expansion is needed.
- If class pace is slow, L3-F02 remains optional and L3-S12 can stay one-sentence conceptual.

## Timing check

- CORE planned time: 42 min
- FLEX planned time: 8 min
- CORE + FLEX: 50 min
- Contingency retained: 10 min
- STRETCH required for lesson success?: No
- Questions/board work/transitions counted?: Yes at storyboard level.
- Unrealistic pacing assumptions?: Main watch points are S06 magnifier and S07–S11 eye sequence; functional grouping reduces overload risk.

## Scientific/source checks

- Definitions source-traceable: Yes.
- Critical OCR/extracted wording visually checked where uncertain: NCTB eye/magnifier pages already visually inspected; final exam-facing wording recheck still required before freeze.
- Laws/formulas/units verified: no formulas/numerical units required in CORE.
- Calculations checked: N/A.
- Diagram labels/directions checked: specifications checked; actual rendered vectors pending.
- Material source conflicts resolved: SI-11-001, SI-11-006 addressed; SI-11-007 prepared for L4.
- Equation/source expression preserved where needed: focus `F`; no equation burden.

## Pedagogy and cognitive load

- Retrieval/prior knowledge activated?: Yes — S01.
- Learning sequence logical?: Yes — lens action → focus → image vocabulary → magnifier → eye functional groups → accommodation → spectacles.
- Major segments include meaningful student response?: Yes.
- Hinge/check-for-understanding present?: Yes — S04, S06, S09, S10, S12, S13.
- Guided practice/application present?: Yes — vocabulary classification, eye pathway, spectacles matching; FLEX labelling.
- Misconceptions addressed?: Yes.
- Summary + exit check retained?: Yes — S13.
- Textbook dumping avoided?: Yes.
- Complex material segmented?: Yes — especially eye anatomy.
- Redundant prose controlled?: planned yes.
- Long passive teacher-only stretches avoided?: Yes.

## Visual engagement / UI

- Overall attractiveness: strong diagram-first structure; render QA pending.
- Age appropriateness: high at storyboard stage.
- Clear focal hierarchy on each slide?: specified yes.
- Layout variation without chaos?: yes.
- Visuals have declared teaching purpose?: yes.
- Decorative clutter absent?: yes by specification.
- Grade-density profile appropriate?: yes.
- Motion/animation pedagogically justified?: only progressive ray/label reveal; static fallback specified.

## Accessibility / projector

- Back-of-room readability: large simplified diagrams planned.
- Contrast: renderer QA pending.
- Color-independent meaning: mandatory; labels/ray direction must remain interpretable without color.
- Bangla glyph/conjunct rendering: RT-01 pending.
- Diagram label size: actual renderer QA pending.
- Any key visual requires zooming?: should not; fail if it does.

## Resource resilience

- Online links checked: no online resource required for CORE.
- Core media/simulation fallback available: yes; all core resources are static/custom diagrams.
- Licensing/attribution recorded: original redraws preferred; external source attribution retained in GitHub.
- Unauthorized downloaded video clips avoided?: Yes / none planned.

## Final artifact check

- Primary delivery format tested: No.
- PDF fallback available and checked: No, not rendered yet.
- Font substitution issues: PENDING.
- Image crop issues: PENDING.
- Scientific content drift after rendering?: PENDING.
- Offline/static fallback works?: specified, not built/tested yet.

## Final decision

`PASS_WITH_NONBLOCKING_NOTES` for **storyboard draft stage only**.

## Required next action

- Map Lesson 3 slide IDs into `COVERAGE_MATRIX.md`, checkpoint chapter/current state, then continue Lesson 4 storyboard/resource planning. Do not content-freeze or render final decks yet.
