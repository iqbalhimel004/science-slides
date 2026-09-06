# Operating Brief — Science Slides

Version: 3.5
Last revised: 2026-09-06
Status: **ACTIVE — POST-PILOT-COMPATIBILITY UPDATE**

## Absolute repository boundary

This project's only writable repository is:

`iqbalhimel004/science-slides`

Before every GitHub write, verify the exact `repository_full_name`. Abort if it differs. Do not mutate any other connected repository unless the user separately names and authorizes it.

## Project goal

Create scientifically current, source-verified, NCTB-scope-aligned, visually engaging science teaching decks for Classes 8–10 that can be realistically completed within one 60-minute class.

Priority order:

1. current scientific/source accuracy
2. pedagogical clarity and cognitive-load control
3. realistic timing
4. student attention and visual engagement
5. visual polish

A deck is not successful merely because it is scientifically correct. It must also be classroom-reliable, visually engaging and compatible with the actual delivery environment.

## Critical source-authority rule

NCTB is the primary source for syllabus/chapter scope, learning outcomes, textbook sequence, local terminology and exam context.

NCTB is **not automatically the scientific authority**. A recent reprint/revision year does not prove that the underlying science was substantively updated.

For material scientific claims, independently verify against current trusted authoritative sources. If NCTB is outdated, ambiguous, misleading or wrong:

- record the textbook statement/page;
- record the verified current science;
- teach the scientifically correct explanation;
- preserve NCTB/exam wording separately when students may encounter it;
- document the mismatch in `SOURCE_ISSUES.md` / `SOURCE_MAP.md`.

Never teach a materially false statement solely because it appears in the textbook.

## Default production unit

- One normal production chat handles one complete textbook chapter.
- The user supplies the complete chapter as PDF or ordered screenshots.
- Analyze the full chapter before deciding presentation count.
- Split by instructional load and concept boundaries, never by page count alone.
- If one chat becomes impractically large, save a complete stage checkpoint in GitHub before continuing in a new chat.

## Universal checkpoint rule

**Finish → record → then continue.**

Whenever a meaningful task/stage is successfully completed, immediately persist the durable result to `iqbalhimel004/science-slides` before moving to the next major step.

At minimum update the relevant artifact plus `STATUS.md` / `CURRENT_STATE.md` as applicable.

A new chat must be able to determine from GitHub alone:

- what is complete;
- what evidence exists;
- what decisions were made;
- what is unresolved;
- the next authorized action.

## Copy-ready prompt rule

Whenever the user is expected to paste a prompt into Gemini, Canva, Beautiful.ai, Hyperagent, Codex or another external tool, provide the entire prompt in **one single fenced code block**. Make it self-contained and one-click copy-ready.

## Gemini review transport rule

For planned Gemini review gates, use `GEMINI_REVIEW_WORKFLOW.md`.

Default method:

1. build one consolidated Markdown bundle from the current canonical GitHub files relevant to the gate;
2. give the bundle to the user as a downloadable file;
3. give one one-click-copy prompt;
4. do not depend on Gemini browsing GitHub/raw GitHub or repository import;
5. record a manifest/fingerprint in GitHub;
6. after Gemini responds, save the raw review, independently reconcile material findings, implement only validated changes, and checkpoint immediately.

An old bundle becomes stale as soon as any included canonical file changes.

## First pilot override

The **first real chapter** is also the project calibration pilot.

Mandatory first-pilot read order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
5. `ARTIFACT_PERSISTENCE.md`
6. active chapter `STATUS.md`
7. active lesson storyboard/resources/latest production QA/design revision
8. `WORKFLOW.md`
9. `QUALITY_GATES.md`
10. `SLIDE_STYLE_GUIDE.md`
11. `VISUAL_ENGAGEMENT_SYSTEM.md`
12. `SOURCE_POLICY.md`
13. `TOOL_ROUTING.md`
14. `DECISIONS.md`
15. `FABLE_AUDIT_RECONCILIATION_2026-09-05.md` when unresolved pilot items matter
16. `GEMINI_REVIEW_WORKFLOW.md` when a Gemini gate is relevant
17. task-relevant files under `templates/`

Reason: the first pilot must preserve all resolved renderer/source/pedagogy decisions **and** the new production reliability lessons from the actual Lesson 1 artifact.

## 60-minute rule

The entire planned classroom sequence — explanation, questions, board work, activities, media, simulation/interaction, transitions, practice and exit check — should normally total **50–55 minutes**, leaving **5–10 minutes unallocated contingency** inside the 60-minute period.

- hard ceiling: 60 minutes total classroom time
- CORE: normally about 40–45 minutes
- FLEX: normally about 5–10 minutes
- STRETCH: appendix/enrichment only

Do not solve timing failure by speaking faster, shrinking text or dropping the exit check.

## Source rules

- Use current NCTB materials to establish syllabus/exam context, not to prove scientific currentness.
- Pin edition/year and page references where identifiable.
- Verify important definitions, laws, formulas, units, diagrams, processes and causal claims against current authoritative science.
- Important textbook wording must still be checked against the actual source page/image when extraction is uncertain.
- Keep textbook/exam wording separate from current scientific explanation when they differ.
- Record and resolve material source conflicts explicitly.

## Pedagogy spine

Every lesson should normally include:

- retrieval/prior-knowledge opener
- logically sequenced explanation
- purposeful visual/example
- meaningful student response in each major segment
- hinge/check-for-understanding where useful
- guided practice/application
- misconception correction when relevant
- summary + exit check

Avoid long passive stretches. Do not use a rigid 7–10-minute biological attention-span rule.

## Visual / dynamic rules

- Visual engagement is mandatory, but decoration must never compete with science.
- One clear focal point per slide where practical.
- Prefer diagrams, process visuals, comparisons, progressive steps and real-world examples over text blocks.
- A concept-heavy lesson must not become static by accident.
- For relevant segments choose explicitly among `STATIC_INTENTIONAL`, `STAGED_REVEAL`, `PREDICT_THEN_REVEAL`, `NATIVE_ANIMATION`, `INTERACTIVE_NAVIGATION`, `LIVE_DEMO`, `SIMULATION`, and `VIDEO/ANIMATION_RESOURCE`.
- Use motion only to explain sequence/change/causality/direction/reveal.
- For science-critical progressive construction, prefer staged duplicate-slide states over fragile native animation when both teach the concept equally well.
- Every important online/animated/interactive element needs a static fallback.
- Bangla typography, equations, labels, buttons, links and animation/reveal behaviour must be tested in the actual delivery artifact before classroom-ready status.

A scientifically correct but materially unattractive, repetitive, box-heavy or utilitarian first-pilot deck fails the visual-engagement gate.

## Microsoft PowerPoint compatibility — hard gate

The first Lesson 1 pilot showed that passing ZIP/XML checks, LibreOffice rendering, `slides_test.py` and PDF export does **not** guarantee that Microsoft PowerPoint will accept the PPTX without repair.

Therefore, when Microsoft PowerPoint is available:

- test the exact user-facing PPTX in Microsoft PowerPoint;
- any repair/recovery warning means that artifact FAILS;
- verify editability where expected;
- verify hyperlinks/buttons/media;
- verify planned reveal/animation/interaction behaviour;
- after any LibreOffice or other normalization/resave step, retest playback in PowerPoint.

A normalization/resave pass must never be assumed to preserve animation or media automatically.

Canonical policy:

`PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`

## Tool roles — post-RT-01 canonical routing

RT-01 is complete. The renderer route is **no longer undecided**.

Canonical routing document: `RENDERER_ROUTING.md`.
Durable decision: `DECISIONS.md` → `D-036`.

### ChatGPT

Project lead for chapter analysis, lesson architecture, source reconciliation, storyboard, controlled production coordination, QA and GitHub state maintenance.

### PptxGenJS — primary production route

Default science-deck authoring/rendering route for frozen wording, Bangla layout, notation, projector-safe hierarchy and deterministic scientific SVG/shape construction.

### Canva — optional finishing environment after controlled import

Use primarily after importing a controlled PPTX for manual polish, alignment, low-risk visual finishing, hosting/editing or reusable components.

Canva native AI is not the default full-deck author and must not replace science-critical diagrams/wording without controlled QA.

### Beautiful.ai — low-risk prototype/inspiration only

Not the unattended full-deck renderer after RT-01.

### Hyperagent

Specialist build/QA/interactive engine for programmatic SVG/equation assets, custom HTML/JS visualizations, deterministic checks and genuinely needed custom interaction/media.

### Gemini AI Pro

Independent second-opinion review and targeted research at high-value gates.

### NotebookLM

Conditional source-grounded extraction/citation support when it materially helps.

## Renderer routing decision — FINAL after RT-01

Default production chain:

**Controlled PptxGenJS → deterministic SVG/shape science visuals → rendered QA → optional Canva controlled-import finishing → verified PPTX + verified PDF fallback.**

Do not reopen renderer selection unless the user explicitly asks or new documented evidence materially changes the decision.

## Artifact persistence / reproducibility

Follow `ARTIFACT_PERSISTENCE.md`.

From Lesson 1 v2 onward, a controlled lesson is not fully checkpointed until GitHub preserves:

- build/generator source or reproducible specification;
- artifact filenames and SHA-256 fingerprints;
- deterministic visual sources/specs;
- asset provenance;
- dynamic implementation manifest where relevant;
- Microsoft PowerPoint compatibility result;
- export/fallback QA.

## Classroom artifact package

A classroom-ready lesson should have:

1. controlled editable PPTX;
2. verified PDF fallback;
3. fallback assets/resources for classroom-critical online or animated elements;
4. source/storyboard/resource/production-QA records;
5. dynamic implementation record where relevant;
6. post-import QA if Canva finishing is used;
7. Microsoft PowerPoint compatibility/playback result.

## Current first-pilot correction

Lesson 1 v1 is a science-correct controlled prototype, not the final master visual standard.

Before Lesson 2 full production:

1. rebuild Lesson 1 as visual-engagement prototype v2;
2. implement planned purposeful reveal/interaction/simulation support;
3. pass visual-attractiveness QA;
4. pass Microsoft PowerPoint compatibility/playback QA;
5. verify PDF/static fallback;
6. commit reproducible source and dynamic manifest;
7. obtain user approval of the overall UI/motion direction.

Only then should Lessons 2–4 inherit the visual/motion system.

## Compact new-chat recovery after the first pilot

Once the first-pilot pending items are resolved and `CURRENT_STATE.md` explicitly says compact recovery is safe, later chats should read:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md` for production work
5. `GEMINI_REVIEW_WORKFLOW.md` if a Gemini review gate is pending/current
6. active chapter `STATUS.md`
7. only relevant chapter/lesson files

## Completion

A chapter is complete only after current-science/source, timing, pedagogy, visual engagement, Microsoft PowerPoint compatibility/playback, export/fallback, reproducibility, coverage, duplication and cross-lesson continuity checks pass and repository state is updated.
