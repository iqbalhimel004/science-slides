# QA — Lesson 3 Startup / Storyboard Reconciliation

Version: 2.1 startup reconciliation
Date: 2026-09-09
Status: **V2_1_STARTUP_AUDIT_COMPLETE — VALIDATION_PACK_SPEC_READY — R3_INTERNAL_BUILD_NEXT — FULL_DECK_BLOCKED**

## Identity

- Chapter: Class 8 Science, Chapter 11 — আলো
- Lesson: 3 — উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা
- Class period: 60 min
- Planned CORE: 42 min
- Planned FLEX: 8 min
- Contingency: 10 min

## Precedence / supersession note

Current canonical direction is:

- Lesson 2 v0.5 is accepted for continuation;
- Lesson 3 is active;
- Lesson 4 remains on hold;
- full Lesson 3 build must not begin until the R3 validation stage is complete and user-accepted.

Read with:

- `/CURRENT_STATE.md`
- `/SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
- `/LESSON_2_FAILURE_REGISTRY_AND_REGRESSION_TESTS.md`
- `/TARGETED_REVISION_SCOPE_LOCK.md`
- `/SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`
- `SEMANTIC_CONTRACTS_V2_1.md`
- `PREBUILD_REGRESSION_CHECKLIST_V2_1.md`
- `VALIDATION_PACK_STRUCTURED_SPEC_V2_1.md`
- `production/LESSON_3_STARTUP_AUDIT_2026-09-09.md`
- `production/LESSON_3_PRODUCTION_HANDOFF_2026-09-09.md`

## Existing storyboard/source-base disposition

The existing `LESSON_PLAN.md`, `STORYBOARD.md` and `RESOURCES.md` remain useful source/planning evidence and must be reused rather than recreated from zero.

The v2.1 startup audit is complete. The audit identified stale renderer metadata, mixed English/Bangla visible-copy examples and student-surface source-status wording in the old storyboard. These do not block the lesson plan itself, but the validation build must use the new Bangla-first structured spec rather than copying old visible wording literally.

## Current gate summary

| Area | Current state | Required next |
|---|---|---|
| NCTB scope | PASS_WITH_SOURCE_GAP_NOTE | preserve spectacles gap provenance in notes/GitHub |
| authoritative science | PASS_FOR_VALIDATION_BUILD | semantic-check actual R3 visuals |
| timing | PASS | keep 42 CORE + 8 FLEX + 10 contingency |
| pedagogy | PASS_FOR_VALIDATION_BUILD | use student-facing Bangla-first copy |
| resource map | PASS_FOR_VALIDATION_BUILD | create/validate actual R3 visuals |
| validation-pack copy/spec | READY | use `VALIDATION_PACK_STRUCTURED_SPEC_V2_1.md` |
| R3 semantic contracts | READY | use `SEMANTIC_CONTRACTS_V2_1.md` |
| known-failure regression | READY / NOT EXECUTED | execute `PREBUILD_REGRESSION_CHECKLIST_V2_1.md` during build/QA |
| renderer route | DECIDED | controlled PptxGenJS + deterministic SVG/native shapes |
| direct pixel QA | NOT YET | individual R3 inspection mandatory after build |
| validation-pack user review | BLOCKED | internal PASS required first |
| full PPTX/PDF | BLOCKED | validation-pack user acceptance first |

## Critical scientific checks for the validation pack

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
   - show shape/optical-power change qualitatively;
   - retina position fixed in the simplified comparison.

4. Spectacles:
   - myopia -> diverging/concave lens;
   - hyperopia -> converging/convex lens;
   - keep source-gap provenance in notes/source record;
   - no numerical lens power in CORE.

5. Real/virtual image convention:
   - actual rays solid;
   - virtual backward extensions dashed;
   - dashed construction lines are not real light paths.

6. Converging/diverging prerequisite:
   - parallel incident rays actually parallel to principal axis in the demonstration state;
   - convex rays converge toward a principal focus;
   - concave rays diverge with no false real focus on outgoing side.

## Lesson 2 workflow lessons mandatory in Lesson 3 QA

- final rendered pixels are authoritative for visual PASS/FAIL;
- `slides_test.py`/overflow PASS does not prove science correctness;
- individually inspect every new/materially changed R3 slide;
- targeted user edits are hard scope locks; do not modify unrelated content;
- external AI/reviewer feedback is advisory until independently verified;
- no visible teacher-script boxes or internal workflow labels;
- scientific geometry/topology must be deterministic/controlled;
- keep labels/copy editable and separate from fragile raster science diagrams where practical;
- use selective revalidation, not full-deck rebuilds for narrow fixes;
- apply F-001/F-004/F-005/F-007/F-008/F-009/F-010/F-011/F-012/F-014/F-015/F-016 as relevant.

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

## Completed startup actions

- [x] Mandatory GitHub recovery completed.
- [x] Lesson 3 plan/storyboard/resources audited against Production System v2.1.
- [x] Lesson 2 failure registry reviewed and mapped to Lesson 3.
- [x] Critical source/current-science wording rechecked.
- [x] Lesson 3 semantic contracts reviewed; no additional contract family required before first build.
- [x] Bangla-first validation-pack structured copy/spec created and frozen for internal build.
- [x] Startup audit recorded in `production/LESSON_3_STARTUP_AUDIT_2026-09-09.md`.

## Next required action

Build **`Lesson3_R3_Validation_Pack_v0_1` only** with seven validation slides covering:

1. converging/diverging lens action;
2. principal focus/focal length;
3. real vs virtual image convention;
4. magnifying-glass construction;
5. human-eye cross-section;
6. accommodation;
7. myopia/hyperopia correction.

Then run:

1. automated mechanical QA;
2. semantic-contract QA;
3. individual rendered-pixel QA of every slide;
4. known-failure regression QA;
5. adversarial student-inference review;
6. repair/rebuild until PASS;
7. second internal QA;
8. only then user review.

## Current decision

**PASS_FOR_R3_VALIDATION_BUILD — NOT_PASS_FOR_USER_REVIEW — NOT_FULL_BUILD_READY**
