# Lesson 3 Production Handoff — 2026-09-09

Status: **READY_FOR_NEW_CHAT_START — PRODUCTION_SYSTEM_V2_1**

## Purpose

This file is the canonical fresh-chat handoff for starting Class 8 Science Chapter 11 Lesson 3 after Lesson 2 v0.5 was judged by the user as `মোটামুটি ঠিক আছে` and the user explicitly instructed that Lesson 3 will begin in a new chat.

The new chat must not depend on previous transcript memory. Read this file together with the mandatory recovery files.

## Repository boundary

Authorized writes only to:

`iqbalhimel004/science-slides`

Do not write to any other connected repository.

## Chapter continuity

- Lesson 1: completed/user-approved baseline; preserve.
- Lesson 2: latest artifact family is `Lesson2_Controlled_Full_v0_5`.
- Lesson 2 is acceptable enough to move on to Lesson 3, but exact Microsoft PowerPoint smoke test, real projector behavior, and post-class timing remain execution-time pending; do not retroactively claim those tests passed.
- Lesson 3 may now start in a new chat under Production System v2.1.

## Latest Lesson 2 artifact identity

- PPTX: `Lesson2_Controlled_Full_v0_5.pptx`
- PDF: `Lesson2_Controlled_Full_v0_5.pdf`
- Library:
  - `/Science Slides/Lesson2_Controlled_Full_v0_5.pptx`
  - `/Science Slides/Lesson2_Controlled_Full_v0_5.pdf`
- QA record:
  - `../lesson-02/production/FULL_LESSON_2_CONTROLLED_BUILD_V0_5_QA_2026-09-08.md`

Lesson 2 v0.5 lessons that must carry forward:

1. visible slide = student-facing learning surface; teacher narration belongs in notes;
2. diagrams must communicate their basic meaning visually without long verbal rescue;
3. science-critical geometry must be deterministic and semantically tested;
4. final rendered pixels, not editor metadata, determine visual PASS/FAIL;
5. user-targeted revision requests are hard scope locks; do not make collateral changes;
6. external reviewer/AI feedback is advisory and must be independently checked;
7. when the user says only one thing is wrong, change only that target and verify unaffected slides remain unchanged when practical;
8. diagrams and student-facing labels should be separate/editable where practical, not baked together into fragile raster assets;
9. avoid visible internal workflow language such as `FLEX`, `L3-Sxx`, `শিক্ষক বলবেন`, `বোর্ডে বলার মূল কথা`;
10. Bangla-first terminology and projector readability are mandatory.

## Mandatory Lesson 3 source files

Before producing any Lesson 3 artifact, read at minimum:

1. `/CURRENT_STATE.md`
2. `/SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
3. `/TARGETED_REVISION_SCOPE_LOCK.md`
4. `/SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`
5. `/AGENTS.md`
6. `/QUALITY_GATES.md`
7. `/RENDERER_ROUTING.md`
8. `/VISUAL_ASSET_ROUTING.md`
9. `/CLASSROOM_LANGUAGE_POLICY.md`
10. `/PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
11. `/chapters/class-8/science/chapter-11-light/STATUS.md`
12. `/chapters/class-8/science/chapter-11-light/TERMINOLOGY_LOCK.md`
13. `/chapters/class-8/science/chapter-11-light/DIAGRAM_CONTRACTS.md`
14. Lesson 3 `LESSON_PLAN.md`
15. Lesson 3 `STORYBOARD.md`
16. Lesson 3 `RESOURCES.md`
17. Lesson 3 `QA.md`
18. chapter `SOURCE_MAP.md`
19. chapter `SOURCE_ISSUES.md`

Historical files may be consulted only when necessary.

## Lesson 3 current planned scope

Canonical topic:

**উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা**

Target duration:

- 60 min class;
- CORE 42 min;
- FLEX 8 min;
- contingency 10 min.

Do not expand into a full lens-formula/sign-convention/power-calculation unit.

## Lesson 3 scientific content boundaries

### Lens prerequisites

Teach only what is needed for magnifier, eye and spectacles:

- convex/converging lens brings parallel rays toward a focus;
- concave/diverging lens spreads parallel rays;
- focus and focal length conceptually;
- no numerical lens formula, sign convention or power calculation in CORE.

### Image vocabulary

Use only the essential distinctions:

- real vs virtual;
- erect vs inverted;
- magnified vs reduced.

Virtual-image diagrams require dashed backward extensions; dashed lines are construction aids, not real light paths.

### Magnifying glass

Hard scientific contract:

- convex lens;
- object inside focal length;
- outgoing real rays diverge;
- dashed backward extensions meet on object side;
- image is virtual, erect and enlarged;
- never imply a convex lens always magnifies regardless of object position.

### Human eye

Teach by functional groups, not isolated memorization.

Hard science guardrails:

- pupil is an opening in the iris, not a solid black object;
- cornea provides most of the eye's initial refractive focusing;
- crystalline lens fine-tunes focus by changing shape/optical power during accommodation;
- do not imply eye focus is achieved by moving the lens toward/away from the retina;
- retina is the light-sensitive receiving layer; avoid film-camera oversimplification that implies it stores a photograph;
- use simplified anatomy only if labels/positions are scientifically defensible and visibly disclosed as simplified where needed.

### Spectacles

This is supplementary/current-science support for an NCTB learning-outcome gap.

CORE treatment:

- spectacles add an optical element before the eye;
- myopia: diverging/concave corrective lens;
- hyperopia: converging/convex corrective lens;
- qualitative only;
- no power calculation;
- do not falsely claim the explanatory subsection exists in the NCTB body when it does not.

## Lesson 3 R3 visual families requiring controlled validation

Before building the full Lesson 3 deck, create a small controlled validation pack containing at least these high-risk families:

1. R3-01 — converging vs diverging lens + focus/focal length;
2. R3-02 — real vs virtual image convention;
3. R3-03 — magnifying-glass ray construction;
4. R3-04 — human-eye cross-section / functional-group anatomy;
5. R3-05 — accommodation two-state comparison;
6. R3-06 — myopia/hyperopia corrective-lens concept.

The validation pack should be internally QA'd before user review.

## Lesson 3 semantic contracts

### R3-01 — convex/converging lens

- incident rays are parallel to principal axis where that model is used;
- emergent rays converge toward the principal focus;
- focus lies on principal axis;
- focal length is shown from optical center/thin-lens center to focus in the simplified model;
- no accidental claim that every arbitrary ray passes through focus.

### R3-01 — concave/diverging lens

- incident parallel rays diverge after the lens;
- backward extensions may indicate virtual focus if shown;
- no real convergence on the outgoing side.

### R3-02 — real image

- actual rays converge at image location;
- screen-capture possibility may be stated conceptually.

### R3-02 — virtual image

- actual rays do not meet at the perceived image location;
- dashed backward extensions appear to meet there;
- dashed construction lines must not look like real rays.

### R3-03 — magnifier

- object lies between convex lens and focal point;
- at least two controlled principal-ray constructions are consistent;
- actual outgoing rays diverge;
- dashed extensions meet on object side;
- virtual image is erect and enlarged;
- ray arrow directions are correct.

### R3-04 — eye anatomy

At minimum, check position/relationship of:

- cornea;
- iris;
- pupil opening;
- crystalline lens;
- aqueous humour;
- vitreous humour;
- retina;
- sclera;
- choroid where included.

Cornea must not be visually reduced to a decorative transparent cover; its optical role must remain clear.

### R3-05 — accommodation

- retina position is fixed in the simplified comparison;
- lens shape/optical power changes;
- diagram must not imply lens translation toward/away from retina;
- near/far state labels must match the lens-shape depiction used.

### R3-06 — spectacles

- myopia correction uses diverging lens;
- hyperopia correction uses converging lens;
- if focus-before/behind-retina diagrams are used, placement must be correct;
- correction arrows/rays must not accidentally reverse the defect;
- supplementary label/provenance must be preserved.

## Visual/media policy for Lesson 3

- R3 ray geometry/anatomy topology: deterministic/custom authoritative redraw, not generative AI authority.
- Real contextual images may be used where helpful, but not as a substitute for correct lens/anatomy diagrams.
- Anatomy may use an authoritative source-derived redraw or carefully controlled simplified diagram; do not generate a photorealistic eye and trust it without validation.
- No external video or simulation is required for CORE according to current `RESOURCES.md`; only add one if it materially improves learning and has static/offline fallback.
- If animation is useful, prefer staged duplicate-slide states for science-critical sequences.

## Slide-surface rule for Lesson 3

Visible slides should contain:

- necessary diagrams/images;
- concise student-facing labels/facts;
- comparisons/visual states;
- media links only when pedagogically useful.

Do not visibly include:

- teacher scripts;
- internal slide IDs;
- QA status;
- workflow labels;
- unnecessary English when a clear Bangla term is available.

Teacher explanations, prompts and board-work suggestions belong in speaker notes.

## Production order for Lesson 3

1. Recover state and read the mandatory files.
2. Audit Lesson 3 plan/storyboard/resources against Production System v2.1 and the Lesson 2 lessons learned.
3. Verify critical NCTB wording/source gaps before content freeze.
4. Create/update a Lesson 3 structured copy/spec with Bangla-first student-facing wording.
5. Create Lesson 3-specific semantic/diagram contracts if chapter-wide contracts are insufficient.
6. Build R3 validation pack first.
7. Run automated QA + semantic tests + direct individual pixel QA on every R3 slide.
8. Internally repair/rebuild until PASS.
9. Show the user one internally-passed R3 validation pack for visual/science acceptance.
10. Only after validation-pack acceptance, assemble the full Lesson 3 controlled PPTX/PDF.
11. Run full structural/text/layout/science/pixel/accessibility/export QA.
12. Save final artifacts to Library and durable source/QA/state to GitHub.
13. Do not call `CLASSROOM_READY` unless all applicable delivery gates are actually passed.

## Lesson 2 regression lessons that are mandatory in Lesson 3

### A. Do not trust generic arc/connector shapes for critical geometry

Where angles or ray relationships matter, construct them deterministically from the actual ray/reference geometry and inspect the final rendered pixels.

### B. Do not replace accepted visuals while fixing an unrelated issue

The user explicitly rejected this behavior during Lesson 2. `TARGETED_REVISION_SCOPE_LOCK.md` is now a hard rule.

### C. Do not rely on montage-only QA

Inspect every new R3 slide individually at actual rendered scale.

### D. Do not let a renderer PASS substitute for science PASS

`slides_test.py` checks mechanical overflow; it does not prove scientific correctness.

### E. External AI review is useful but not authoritative

Gemini helped identify real Lesson 2 issues, but future external feedback must be independently verified before applying.

### F. Preserve accepted content and selectively revalidate

A small correction should not restart or redesign the whole lesson.

## Fresh-chat first deliverable

The new chat should **not immediately build the full Lesson 3 deck**.

First deliverable should be a concise audit/report confirming:

- Lesson 3 scope still matches current production system;
- critical source/science gaps are identified;
- proposed R3 validation-pack slide list;
- any storyboard wording that needs updating before build;
- exact next build checkpoint.

After that internal audit, proceed without unnecessary clarification if the repository already resolves the required details.
