# Lesson 2 Failure Registry and Regression Tests

Version: 1.0
Date adopted: 2026-09-09
Status: **ACTIVE — MANDATORY KNOWN-FAILURE REGRESSION SOURCE**

## Purpose

Lesson 2 exposed several concrete production failures that must not be allowed to recur in Lesson 3 or later Science Slides work.

This file converts those failures into explicit prevention and regression gates.

A fresh production chat must not merely know that Lesson 2 had problems. It must actively test new work against these known failure patterns.

This file works together with:

- `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`;
- `TARGETED_REVISION_SCOPE_LOCK.md`;
- `SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md`;
- `QUALITY_GATES.md`;
- chapter/lesson semantic and diagram contracts.

---

# 1. How to use this registry

Before building a new R3 validation pack or a full lesson deck:

1. identify which failure patterns below could apply;
2. add the relevant checks to the active lesson prebuild/regression checklist;
3. build only after those checks have a defined verification method;
4. after rendering, rerun the applicable checks against actual pixels;
5. record PASS/FAIL evidence in the lesson QA checkpoint.

A regression check is not satisfied by saying “the plan mentions it.” It must be evidenced by source geometry, automated checks, rendered inspection, or exact artifact comparison as appropriate.

---

# 2. Failure registry

## F-001 — Science-critical geometry looked plausible but was wrong

Observed examples:

- incidence-angle arcs were not clearly/correctly drawn from the normal;
- generic arc/connector shapes gave a misleading visual even when the intended concept was correct.

Root cause:

- presence-oriented QA instead of relationship-oriented QA;
- reliance on generic editor/PowerPoint arc shapes for scientific geometry.

Prevention:

- construct R3 angle/ray geometry deterministically from the actual ray/reference lines;
- semantic tests must verify the relationship, not just object presence;
- inspect the final rendered pixels individually.

Regression test:

- for every angle visual, verify arc endpoints lie on the intended two lines/rays;
- verify the stated angle is measured from the correct reference line;
- verify labels do not imply a different angle than the drawn geometry.

Hard FAIL if:

- angle arc is decorative, detached, ambiguous, or measured from the interface when the normal is required.

---

## F-002 — Critical-angle and TIR states were visually conflated

Observed examples:

- critical-angle slide gave unnecessary reflected-ray emphasis that could blur the distinction from total internal reflection;
- earlier TIR diagrams had label/geometry problems.

Root cause:

- too many simultaneous phenomena shown on one instructional surface;
- insufficient state-specific semantic contract.

Prevention:

- define separate contracts for `i < C`, `i = C`, and `i > C`;
- critical-angle teaching surface should emphasize `r = 90°` and the grazing refracted ray;
- TIR surface must show no transmitted/refracted ray outside.

Regression test:

- `i = C`: refracted ray lies along interface; `r = 90°` readable; not presented as TIR;
- `i > C`: no transmitted/refracted ray; reflected ray remains in dense medium;
- visible wording does not blur the two states.

---

## F-003 — Optical-fibre diagram was scientifically/visually confusing

Observed examples:

- ray reflection points did not clearly sit on the core–cladding boundary;
- core/cladding labels overlapped or had poor contrast;
- explanatory text became cluttered/haphazard.

Root cause:

- composite raster diagram with baked labels;
- insufficient boundary-topology testing.

Prevention:

- deterministic core/cladding geometry;
- reflection vertices constrained to the boundary;
- student-facing labels separate/editable where practical;
- high-contrast text and no ray/text overlap.

Regression test:

- every reflection vertex is on the core–cladding boundary;
- simplified ray remains inside the core;
- no label covers the ray or another essential label;
- core/cladding distinction is readable without color alone.

---

## F-004 — Context image did not actually show the claimed phenomenon

Observed examples:

- road image showed a hot/dry road but no visible mirage;
- generic underwater fish image did not show a recognizable focal fish at classroom scale.

Root cause:

- image relevance judged from metadata/search intent rather than final classroom pixels;
- context image accepted because it was thematically related, not because it communicated the intended phenomenon.

Prevention:

- define a visual-purpose acceptance statement before asset selection;
- check recognizability at final slide scale;
- reject merely related images that do not visibly support the claim.

Regression test:

- ask: “Can a student identify the intended object/phenomenon from the rendered slide before verbal rescue?”
- if no, replace/re-route the visual.

---

## F-005 — Comparison visual did not communicate what changed

Observed example:

- empty-vessel/coin visual did not make it clear why the coin was invisible before water and visible after water.

Root cause:

- comparison states were visually under-specified;
- blocked line of sight and refracted path were not explicit enough.

Prevention:

Every comparison visual must show:

1. the same object/system in both states;
2. the variable/change between states;
3. the causal visual mechanism;
4. the student inference.

Regression test:

- for before/after visuals, verify a student can tell what changed and why;
- for the coin case specifically: straight sight line is blocked by the rim before; after water, refracted path reaches the eye; coin position does not move.

---

## F-006 — Mirage scientific mechanism was oversimplified or drawn misleadingly

Observed examples:

- initial mechanism did not adequately communicate the temperature-gradient explanation;
- risk of depicting a hard mirror-like reflecting boundary near the road.

Root cause:

- trying to summarize a graded-index phenomenon with a single simplistic boundary;
- insufficient mechanism-specific contract.

Prevention:

- represent the air-temperature/refractive-index gradient as gradual bending;
- if discussing the limiting TIR-like behavior near the hottest lower layers, do not replace the gradient with a literal mirror boundary;
- distinguish apparent water-like image from actual water.

Regression test:

- no hard mirror-like line is used as the physical cause;
- ray path bends progressively through the gradient;
- backward/apparent extension is visually distinguished if used;
- slide explicitly avoids implying the road is wet.

---

## F-007 — Terminology drift occurred across revisions

Observed example:

- `বিরল মাধ্যম` and `হালকা মাধ্যম` drifted across student-facing slides.

Root cause:

- labels baked into multiple assets and edited independently;
- terminology lock not enforced at render/build time.

Prevention:

- terminology must come from active chapter lock/structured spec;
- student-facing text should remain editable where practical;
- run terminology lint/search before render and after targeted edits.

Regression test:

- no prohibited/old term appears in current production unless intentionally quoted/explained;
- labels, bullets and diagram text use the same canonical term.

---

## F-008 — Raster scientific assets baked text and geometry together

Observed examples:

- optical-fibre and TIR images required repeated full-asset replacement for small label fixes;
- text overlap and contrast defects were hard to repair safely.

Root cause:

- labels, geometry and context combined into one raster artifact.

Prevention:

Preferred layer separation:

- scientific geometry = deterministic SVG/native/vector;
- labels = native/editable text where practical;
- context photo = raster;
- teacher narration = notes.

Regression test:

- before approving a new R3 component family, verify small wording/label changes do not require regenerating the entire scientific visual unless technically unavoidable.

---

## F-009 — Editor/metadata QA was treated as stronger evidence than rendered pixels

Observed examples:

- overlap/clipping defects appeared in exported PDF despite editor-side assumptions;
- some earlier QA claims were based on structure/metadata rather than direct raster inspection.

Root cause:

- conflation of mechanical/object-model checks with final visual QA.

Prevention:

- actual rendered pixels are the final visual authority;
- `slides_test.py`, metadata, element bounds, or editor thumbnails are supporting evidence only.

Regression test:

- every new/materially changed R3 slide is individually rendered and inspected;
- final PDF/PPTX render has no clipping, overlap, blank asset, unreadable label or misleading geometry.

---

## F-010 — User was forced to act as primary QA detector

Observed examples:

The user identified:

- wrong angle construction;
- missing mirage phenomenon;
- clipped text;
- terminology mismatch;
- optical-fibre errors;
- unclear comparison visual;
- inappropriate teacher-facing slide text.

Root cause:

- user review happened before sufficient adversarial internal review.

Prevention:

Before user review:

1. automated mechanical QA;
2. semantic science QA;
3. direct individual pixel QA;
4. adversarial student-inference review;
5. internal repair;
6. second internal review.

Regression test:

- user should receive an internally-passed candidate, not a debugging draft.

---

## F-011 — Visible slide contained teacher-script/workflow language

Observed example:

- `বোর্ডে বলার মূল কথা` appeared on the visible slide.

Root cause:

- teacher-operation guidance mixed with student-facing content.

Prevention:

- visible slide = student-facing learning surface;
- teacher narration, board-work suggestions, internal IDs and QA notes go to speaker notes/GitHub only.

Regression test:

Search visible slide copy for prohibited workflow/teacher-script labels such as:

- `শিক্ষক বলবেন`;
- `বোর্ডে বলার মূল কথা`;
- `FLEX`;
- `Lx-Sxx`;
- `QA PASS/FAIL`;
- internal production instructions.

Hard FAIL if visible.

---

## F-012 — Bangla typo/label corruption survived into review

Observed example:

- `শাগকাটা সহায়ক রেখা` instead of `দাগকাটা সহায়ক রেখা`.

Root cause:

- no final visible-text proofread tied to rendered output.

Prevention:

- freeze exact student copy before build;
- run text extraction/lint where possible;
- visually proofread all visible labels on R3 slides after render.

Regression test:

- compare rendered visible wording against structured copy/terminology lock;
- proofread Bangla labels separately from science geometry.

---

## F-013 — Overloaded/repetitive state teaching reduced clarity

Observed example:

- `i<C`, `i=C`, `i>C` were spread across multiple repetitive slides when a compact comparison could communicate the relationship more clearly.

Root cause:

- build sequence followed incremental production artifacts rather than final pedagogical economy.

Prevention:

- after science is correct, run a duplication/density pass;
- merge states only when comparison improves understanding and does not make the slide unreadable.

Regression test:

- ask whether adjacent slides repeat the same visual/copy without adding a new cognitive step;
- if yes, merge or stage more efficiently.

This is a soft optimization gate, not a reason to collapse genuinely useful staged-reveal teaching.

---

## F-014 — External AI/reviewer feedback was at risk of being applied uncritically

Observed case:

- Gemini supplied several useful corrections, but some recommendations were pedagogical choices rather than absolute scientific requirements.

Root cause:

- external review can sound authoritative even when it mixes fact, simplification and preference.

Prevention:

- classify each external finding as `FACTUAL_ERROR`, `SCIENCE_CLARIFICATION`, `PEDAGOGICAL_OPTION`, or `UNSUPPORTED`;
- independently verify factual/scientific claims against canonical sources/contracts;
- preserve user-accepted correct work unless there is real evidence for change.

Regression test:

- no external-review recommendation is applied solely because another AI suggested it.

---

## F-015 — Targeted correction caused collateral regressions

Observed example:

- user requested only angle correction, but fish/mirage visuals were also changed and became worse.

Root cause:

- correction was performed through a broader rebuild path rather than an exact edit boundary.

Prevention:

- `TARGETED_REVISION_SCOPE_LOCK.md` is mandatory;
- start from latest accepted artifact;
- change only explicitly requested slide/component;
- compare unaffected rendered slides against prior artifact.

Regression test:

- render old/new deck;
- hash/compare unaffected slides when practical;
- only requested slide(s) should differ unless collateral change is documented and approved.

Hard FAIL if unrelated accepted content changes silently.

---

## F-016 — Repair loop consumed unreasonable time

Observed example:

- repeated Canva micro-patching of a small high-risk visual pack took far too long.

Root cause:

- wrong production route retained after repeated failure.

Prevention:

- first material failure -> source-level repair;
- second failure -> clean controlled rebuild;
- rebuild failure or ~20–30 minutes non-converging repair -> change representation route;
- do not continue endless manual patching.

Regression test:

- QA checkpoint records whether repair circuit breaker was triggered and, if so, what route changed.

---

# 3. Mandatory pre-user-review regression gate

Before any Lesson 3+ R3 validation pack or final full deck is shown to the user, answer these questions explicitly in the QA record:

1. Did every applicable R3 visual pass its semantic contract?
2. Did every new/materially changed R3 slide receive individual rendered-pixel inspection?
3. Are angle/reference relationships geometrically correct, not merely present?
4. Are dashed/construction lines visually distinct from real paths?
5. Does every context image visibly show the claimed object/phenomenon at classroom scale?
6. Does every comparison visual communicate what changed and why?
7. Are canonical terms consistent throughout visible text and diagrams?
8. Are labels readable, non-overlapping and separate from geometry where practical?
9. Is teacher-only/workflow language absent from visible slide surfaces?
10. Has visible Bangla copy been proofread after render?
11. Has an adversarial student-inference review been performed?
12. Was any external reviewer suggestion independently verified before application?
13. If the work was a targeted revision, were unaffected slides preserved and compared where practical?
14. Did any visual enter a repeated repair loop, and if so was the circuit breaker/route change applied?
15. Are delivery/runtime gates reported honestly rather than assumed?

Any applicable unanswered item blocks `INTERNAL_QA_PASS`.

---

# 4. Lesson 3 regression focus

For Lesson 3, apply this registry especially to:

- converging/diverging lens ray geometry;
- focus/focal-length placement;
- real vs virtual solid/dashed ray convention;
- magnifying-glass object-within-focus geometry;
- human-eye anatomy label placement;
- pupil-as-opening representation;
- cornea/lens focusing hierarchy;
- accommodation without lens translation;
- myopia/hyperopia corrective-lens direction;
- Bangla-first terminology;
- visible-slide vs teacher-notes separation.

The Lesson 3-specific checklist must reference this registry before the first validation pack is built.

---

# 5. Durable principle

**Known failures are not just history. They are regression tests. A new lesson is not internally ready until it demonstrates that the applicable known failure patterns have not recurred.**
