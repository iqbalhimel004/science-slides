# Lesson 3 Startup Audit — 2026-09-09

Status: **STARTUP_AUDIT_COMPLETE — STRUCTURED_VALIDATION_SPEC_READY — R3_INTERNAL_BUILD_NEXT**

## Scope

Class 8 Science — Chapter 11: আলো — Lesson 3

Topic:

**উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা**

This checkpoint records the mandatory v2.1 recovery/audit before any Lesson 3 full-deck build.

## Canonical state recovered

- Lesson 1 = completed / user-approved baseline; preserve.
- Lesson 2 = `Lesson2_Controlled_Full_v0_5` accepted as sufficient to continue; exact PowerPoint/projector/post-class delivery gates remain pending unless separately tested.
- Lesson 3 = active next work.
- Lesson 4 = on hold.
- Full Lesson 3 PPTX/PDF remains blocked until the R3 validation pack passes internal QA and is accepted by the user.
- Authorized writes remain limited to `iqbalhimel004/science-slides`.

## Files audited

Mandatory recovery and Lesson 3 files were read in the requested order, including:

- `/CURRENT_STATE.md`
- `/SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
- `/TARGETED_REVISION_SCOPE_LOCK.md`
- `/SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`
- `/NEW_CHAT_START.md`
- `/AGENTS.md`
- `/QUALITY_GATES.md`
- `/RENDERER_ROUTING.md`
- `/VISUAL_ASSET_ROUTING.md`
- `/CLASSROOM_LANGUAGE_POLICY.md`
- `/PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
- chapter `STATUS.md`, `TERMINOLOGY_LOCK.md`, `DIAGRAM_CONTRACTS.md`, `SOURCE_MAP.md`, `SOURCE_ISSUES.md`
- Lesson 3 `LESSON_PLAN.md`, `STORYBOARD.md`, `RESOURCES.md`, `QA.md`, `SEMANTIC_CONTRACTS_V2_1.md`
- Lesson 3 production handoff
- `/LESSON_2_FAILURE_REGISTRY_AND_REGRESSION_TESTS.md`
- Lesson 3 `PREBUILD_REGRESSION_CHECKLIST_V2_1.md`

## Audit disposition

### 1. Lesson scope and timing

**PASS FOR VALIDATION STAGE**

The existing 42 min CORE + 8 min FLEX + 10 min contingency plan remains consistent with the 60-minute production policy. The lesson correctly limits lens theory to concepts required for magnifier, human eye and spectacles.

No lens formula, sign convention or power calculation should enter CORE.

### 2. Source/science verification

**PASS WITH NCTB SOURCE-GAP NOTE**

Current authoritative optics sources rechecked during this startup confirm:

- parallel rays through a converging/convex lens converge toward a focal point;
- a diverging/concave lens makes parallel rays diverge, with only backward extensions indicating a virtual focus;
- a convex lens used with the object within one focal length forms a virtual, upright, enlarged image;
- cornea provides most eye focusing power while the crystalline lens supplies finer adjustable focus;
- accommodation changes optical power/focal length with essentially fixed lens-to-retina image distance in the simplified model;
- myopia correction uses a diverging spectacle lens;
- hyperopia correction uses a converging spectacle lens.

Scientific verification references retained in `SOURCE_MAP.md`: S7, S8, S10, S16, S17, S18.

NCTB source issue remains unchanged:

- spectacles are declared in the learning outcome;
- the explanatory body subsection is absent;
- therefore spectacle correction remains concise supplementary current-science support, not claimed as copied NCTB body text.

### 3. Existing storyboard gaps/conflicts

The storyboard is scientifically useful but is not yet production-frozen. The following v2.1 conflicts/gaps were identified:

#### A. Outdated renderer status

The storyboard header still says `Renderer status: NOT_TESTED — RT-01 pending`.

This is stale. Canonical renderer routing is already decided: controlled PptxGenJS-first with deterministic science visuals; Canva is optional finishing only.

This stale metadata must not influence production.

#### B. Bangla-first visible-copy drift

Several storyboard examples remain mixed English/Bangla, e.g. `transparent lens`, `parallel rays`, `support`, `solid structure`, `fine focus`, `Supplementary`.

The storyboard may remain planning evidence, but the validation build must use the new Bangla-first structured spec.

#### C. Student-surface source/workflow wording

`L3-S12` proposed a visible source-gap label in mixed English (`Supplementary: NCTB outcome আছে, chapter body explanation নেই`).

The source-gap itself is real and must be preserved, but detailed provenance/status wording belongs in speaker notes/GitHub. The student-facing surface should teach the correction idea without exposing production/source-status jargon.

#### D. R3 production evidence still absent

No Lesson 3 R3 component has yet passed:

- deterministic build;
- automated mechanical QA;
- semantic contract QA;
- individual rendered-pixel QA;
- adversarial student-inference review;
- second internal QA.

Therefore no Lesson 3 visual can yet be called internally passed.

### 4. Structured validation-pack copy/spec

Created and frozen for internal build:

`../VALIDATION_PACK_STRUCTURED_SPEC_V2_1.md`

The visible copy is Bangla-first and separates student-facing content from teacher/source notes.

### 5. Semantic/diagram contracts

Existing `SEMANTIC_CONTRACTS_V2_1.md` is sufficiently complete for the first validation pack and is now the hard Lesson 3 R3 authority together with chapter `DIAGRAM_CONTRACTS.md`.

No new science contract family is required before the first build, provided the build directly tests SC-L3-01 through SC-L3-11 as applicable.

### 6. Applicable Lesson 2 regression checks

Primary applicable failure classes for Lesson 3 validation are:

- F-001 — relationship-based science geometry;
- F-004/F-005 — visual meaning/comparison clarity where applicable;
- F-007 — terminology drift;
- F-008 — avoid baking labels and geometry together;
- F-009 — final rendered pixels are authoritative;
- F-010 — user must not be primary defect detector;
- F-011 — no visible teacher/workflow language;
- F-012 — rendered Bangla proofread;
- F-014 — external feedback independently verified;
- F-015 — later targeted edits must preserve unrelated content;
- F-016 — repair circuit breaker.

The existing `PREBUILD_REGRESSION_CHECKLIST_V2_1.md` already operationalizes these checks and remains mandatory.

## First controlled R3 validation pack

The first validation pack will contain seven student-facing validation slides covering six mandatory R3 families:

1. **উত্তল বনাম অবতল লেন্স** — converging/diverging behavior;
2. **প্রধান ফোকাস ও ফোকাস দূরত্ব**;
3. **বাস্তব বনাম অবাস্তব প্রতিবিম্ব** — solid rays vs dashed backward extensions;
4. **বিবর্ধক কাচ** — object inside focal length, virtual/erect/enlarged image;
5. **মানব চক্ষুর সরলীকৃত ছেদনচিত্র** — pupil opening, cornea/lens roles, retina and major structures;
6. **উপযোজন** — fixed retina position, lens-shape/optical-power change without translation;
7. **মায়োপিয়া/হাইপারোপিয়া সংশোধন** — diverging vs converging spectacle lens.

The lens-action and focus concepts are separated into two slides because combining all required geometry and labels on one projector surface would increase R3 density and reduce diagnostic value during validation.

## Exact next production checkpoint

**Build `Lesson3_R3_Validation_Pack_v0_1` only — not the full Lesson 3 deck.**

Required sequence:

1. implement the seven validation slides with controlled PptxGenJS + deterministic SVG/native shapes;
2. add speaker-note `[Sources]` blocks;
3. run structural/text/layout checks including `slides_test.py`;
4. run semantic-contract checks;
5. render every validation slide individually;
6. inspect each rendered PNG for science, Bangla, geometry, projector readability and accessibility;
7. run Lesson 2 known-failure regression checklist;
8. perform adversarial student-inference review;
9. repair/rebuild until all applicable checks pass;
10. run second internal QA;
11. only then present the internally passed validation pack to the user.

Full Lesson 3 PPTX/PDF remains **BLOCKED** until validation-pack user acceptance.

## Stage rule

**Finish -> record -> then continue.**

This audit stage is now finished and recorded. The next work item is the internal R3 validation-pack build.
