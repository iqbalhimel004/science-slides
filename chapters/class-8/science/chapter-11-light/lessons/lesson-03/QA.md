# QA — Lesson 3 Startup / Storyboard Reconciliation

Version: 2.1 startup reconciliation
Date: 2026-09-09
Status: **STORYBOARD_SOURCE_BASE_VALID — V2_1_AUDIT_REQUIRED_BEFORE_CONTENT_FREEZE — R3_VALIDATION_PACK_NEXT**

## Identity

- Chapter: Class 8 Science, Chapter 11 — আলো
- Lesson: 3 — উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা
- Class period: 60 min
- Planned CORE: 42 min
- Planned FLEX: 8 min
- Contingency: 10 min

## Precedence / supersession note

This file supersedes the old 2026-09-05 `Required next action` that said to proceed to Lesson 4 planning.

Current canonical direction is:

- Lesson 2 v0.5 is accepted for continuation;
- Lesson 3 is now the active next work;
- Lesson 4 remains on hold;
- full Lesson 3 build must not begin until the v2.1 startup audit, structured copy/spec and R3 validation stage are complete.

Read with:

- `/CURRENT_STATE.md`
- `/SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
- `/TARGETED_REVISION_SCOPE_LOCK.md`
- `/SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`
- `SEMANTIC_CONTRACTS_V2_1.md`
- `production/LESSON_3_PRODUCTION_HANDOFF_2026-09-09.md`

## Existing storyboard/source-base disposition

The existing `LESSON_PLAN.md`, `STORYBOARD.md` and `RESOURCES.md` remain useful and should be reused, not recreated from zero.

They were prepared before the final Lesson 2 workflow lessons were fully known, so they must be audited against Production System v2.1 before content freeze.

## Current gate summary

| Area | Current state | Required before build |
|---|---|---|
| NCTB scope | PASS_WITH_NOTES | visually recheck critical magnifier/eye wording where needed |
| authoritative science | PASS_FOR_STORYBOARD | targeted re-verification before copy freeze |
| timing | PASS | keep 42 CORE + 8 FLEX + 10 contingency |
| pedagogy | PASS_FOR_STORYBOARD | convert visible surfaces to student-facing Bangla-first copy |
| resource map | PASS_FOR_STORYBOARD | validate actual R3 visuals before full build |
| content freeze | NOT YET | v2.1 audit + structured copy/spec first |
| R3 semantic contracts | NOW DEFINED | use `SEMANTIC_CONTRACTS_V2_1.md` |
| renderer | NOT YET FOR L3 | build validation pack first |
| direct pixel QA | NOT YET | individual R3 inspection mandatory |
| full PPTX/PDF | BLOCKED | validation-pack acceptance first |

## Critical scientific checks before content freeze

1. Magnifying-glass diagram:
   - convex lens;
   - object inside focal length;
   - outgoing rays diverge;
   - dashed backward extensions meet on object side;
   - virtual, erect, enlarged image.

2. Human-eye diagram:
   - pupil is an opening in iris;
   - cornea is correctly positioned and not treated as merely a window;
   - cornea provides most initial refractive focusing;
   - crystalline lens fine-tunes focus;
   - retina/anterior/posterior structures are placed correctly enough for Class 8.

3. Accommodation:
   - do not imply lens translation toward/away from retina;
   - show shape/optical-power change qualitatively.

4. Spectacles:
   - myopia -> diverging/concave lens;
   - hyperopia -> converging/convex lens;
   - keep supplementary/source-gap status explicit in notes/source record;
   - no numerical lens power in CORE.

5. Real/virtual image convention:
   - actual rays solid;
   - virtual backward extensions dashed;
   - dashed construction lines are not real light paths.

## Lesson 2 workflow lessons now mandatory in Lesson 3 QA

- final rendered pixels are authoritative for visual PASS/FAIL;
- `slides_test.py`/overflow PASS does not prove science correctness;
- individually inspect every new/materially changed R3 slide;
- targeted user edits are hard scope locks; do not modify unrelated content;
- external AI/reviewer feedback is advisory until independently verified;
- no visible teacher-script boxes or internal workflow labels;
- scientific geometry/topology should be deterministic/controlled;
- keep labels/copy editable and separate from fragile raster science diagrams where practical;
- use selective revalidation, not full-deck rebuilds for narrow fixes.

## Accessibility / projector requirements

Before R3 user review:

- essential labels readable at projector scale;
- critical meaning not color-only;
- solid/dashed ray distinction survives grayscale/poor projection;
- anatomy labels do not overlap or cross ambiguously;
- Bangla conjunct/glyph rendering directly inspected;
- no essential visual requires zooming.

## Resource resilience

Current plan remains offline-capable.

No external video/simulation is required for CORE. If a dynamic resource is later added, it must materially improve learning and have a static/offline fallback.

## Next required action

1. Audit `LESSON_PLAN.md`, `STORYBOARD.md`, `RESOURCES.md` against Production System v2.1 and this QA.
2. Verify critical source/science wording.
3. Create/update exact Bangla-first structured copy/spec.
4. Use `SEMANTIC_CONTRACTS_V2_1.md` for R3 build requirements.
5. Build a compact R3 validation pack containing at minimum:
   - converging/diverging lens + focus/focal length;
   - real vs virtual image;
   - magnifying-glass construction;
   - human-eye cross-section;
   - accommodation;
   - myopia/hyperopia correction.
6. Run automated QA + semantic QA + individual direct pixel QA internally.
7. Repair/rebuild until internal PASS.
8. Show one internally-passed validation pack to the user.
9. Only after user acceptance, assemble the full Lesson 3 deck.

## Current decision

**READY_FOR_V2_1_STARTUP_AUDIT — NOT CONTENT_FROZEN — NOT FULL_BUILD_READY**
