# Operating Brief — Science Slides

Version: 3.4
Last revised: 2026-09-06

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

## Critical source-authority rule

NCTB is the primary source for:

- syllabus/chapter scope
- learning outcomes
- textbook sequence
- local terminology and exam context

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
- If one chat becomes impractically large, save a complete stage checkpoint in GitHub before continuing in a new chat; this is a fallback, not the default.

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

Do not rely on prior chat history as the only record of completed work.

## Copy-ready prompt rule

Whenever the user is expected to paste a prompt into Gemini, Canva, Beautiful.ai, Hyperagent, Codex or another external tool:

- provide the entire prompt in **one single fenced code block**;
- make it self-contained and one-click copy-ready;
- do not split one prompt across multiple code blocks;
- do not require the user to merge surrounding prose into the prompt;
- keep explanations outside the prompt block;
- include exact filenames/paths and expected output format inside the prompt when useful.

This is a durable project UX rule, not a chat-specific preference.

## Gemini review transport rule

For planned Gemini review gates, use `GEMINI_REVIEW_WORKFLOW.md`.

Default method:

1. build one consolidated Markdown bundle from the **current canonical GitHub files** relevant to the gate;
2. give the bundle to the user as a downloadable file;
3. give one one-click-copy prompt telling Gemini to read the attachment and perform the exact review;
4. do not depend on Gemini browsing GitHub/raw GitHub or repository import;
5. record a manifest/fingerprint for the bundle in GitHub;
6. after Gemini responds, save the raw review, independently reconcile material findings, implement only validated changes, and checkpoint immediately.

An old bundle becomes stale as soon as any included canonical file changes. Future chats must generate a fresh bundle for Gemini Gate B or any later Gemini review gate unless the user explicitly changes this workflow.

## First pilot override

The **first real chapter** is also the project calibration pilot. For that chapter only, do not rely solely on this compact brief.

Mandatory first-pilot read order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. `FABLE_AUDIT_RECONCILIATION_2026-09-05.md`
5. `CLASSROOM_PROFILE.md`
6. `PROJECT_MASTER.md`
7. `WORKFLOW.md`
8. `SOURCE_POLICY.md`
9. `TOOL_ROUTING.md`
10. `QUALITY_GATES.md`
11. `SLIDE_STYLE_GUIDE.md`
12. `VISUAL_ENGAGEMENT_SYSTEM.md`
13. `DECISIONS.md`
14. `GEMINI_REVIEW_WORKFLOW.md` when any Gemini gate is relevant
15. task-relevant files under `templates/`

Reason: the first pilot must carry forward every accepted/rejected/pending Fable-audit item and must not accidentally restore superseded assumptions such as Beautiful.ai as unconditional default or rigid 7–10-minute attention resets.

`RENDERER_ROUTING.md` is now mandatory in the first-pilot recovery sequence because RT-01 has resolved the renderer/tool path and older pre-RT-01 candidate language remains in some historical records.

After the first pilot resolves the remaining typography/classroom/workflow questions, later chapters may return to the compact recovery sequence near the end of this file.

## 60-minute rule

The entire planned classroom sequence — explanation, questions, board work, activities, media, transitions, practice and exit check — should normally total **50–55 minutes**, leaving **5–10 minutes unallocated contingency** inside the 60-minute period.

- hard ceiling: 60 minutes total classroom time
- CORE: non-skippable learning, normally about 40–45 minutes
- FLEX: useful but skippable practice/example, normally about 5–10 minutes
- STRETCH: appendix/enrichment only; never required for the core lesson

Do not solve timing failure by speaking faster, shrinking text or dropping the exit check.

## Source rules

- Use current NCTB materials to establish syllabus/exam context, not to prove scientific currentness.
- Pin edition/year and page references where identifiable.
- Verify important definitions, laws, formulas, units, diagrams, processes and causal claims against current authoritative science.
- Important textbook wording must still be checked against the actual source page/image, not model memory alone.
- Text extraction/OCR may assist, but the visible page is authoritative for what the textbook actually says when extraction is uncertain.
- Established Bangladeshi sources such as 10 Minute School may corroborate local wording/convention and explanation ideas; they are not independent scientific authority by default.
- Current authoritative international/domain sources validate science and may supply licensed resources.
- Keep textbook/exam wording separate from current scientific explanation when they differ.
- Record and resolve material source conflicts explicitly.

## Pedagogy spine

Every lesson should normally include:

- retrieval/prior-knowledge opener
- logically sequenced explanation
- purposeful visual/example
- at least one meaningful student response in each major segment
- a mid-lesson hinge/check-for-understanding where useful
- guided practice/application
- misconception correction when relevant
- summary + exit check

Avoid long passive stretches. Do not use a rigid 7–10-minute biological attention-span rule; instead, major segments should normally end with a meaningful student response, and teacher-only exposition should not remain cognitively unchanged for roughly more than 10 minutes when a useful response can be inserted.

## Visual rules

- Visual engagement is mandatory, but decoration must never compete with science.
- One clear focal point per slide where practical.
- Prefer diagrams, process visuals, comparisons, progressive steps and real-world examples over text blocks.
- Use motion only to explain sequence/change/causality/direction/reveal.
- Every important online/animated/interactive element needs a static fallback.
- Bangla typography, equations and labels must be tested in the actual exported/delivery artifact before classroom-ready status.

## Tool roles — post-RT-01 canonical routing

RT-01 is complete. The renderer route is **no longer undecided**.

Canonical routing document: `RENDERER_ROUTING.md`.
Durable decision: `DECISIONS.md` → `D-036`.

### ChatGPT

Project lead for chapter analysis, lesson architecture, source reconciliation, storyboard, controlled production coordination, QA and GitHub state maintenance.

### PptxGenJS — primary production route

**Default science-deck authoring/rendering route.**

Use controlled PptxGenJS for frozen wording, Bangla layout, notation, projector-safe hierarchy and deterministic scientific SVG/shape construction.

### Canva — optional finishing environment after controlled import

Use Canva primarily after importing a controlled PPTX for manual polish, alignment, low-risk visual finishing, hosting/editing or reusable components.

Canva native AI is **not** the default full-deck author and must not replace science-critical diagrams/wording without controlled QA.

### Beautiful.ai — low-risk prototype/inspiration only

Beautiful.ai is **not** the unattended full-deck renderer after RT-01.

It may be used for low-risk layout exploration or inspiration only. Any reused wording/diagram must be reconciled back to the frozen storyboard and revalidated.

### Hyperagent

Specialist build/QA/interactive engine for programmatic SVG/equation assets, custom HTML/JS visualizations, deterministic link/asset checks and genuinely needed custom interaction/media.

### Gemini AI Pro

Independent second-opinion review and targeted research at high-value gates, not duplicate authoring by default. Planned reviews use downloadable single-file bundles per `GEMINI_REVIEW_WORKFLOW.md`.

### NotebookLM

Conditional source-grounded extraction/citation and student revision materials when it materially helps; never replaces visible source verification or authoritative scientific checking.

Existing trusted simulations, videos, diagrams and educational resources should normally be searched before custom generation.

## Renderer routing decision — FINAL after RT-01

The default production chain is:

**Controlled PptxGenJS → deterministic SVG/shape science visuals → rendered QA → optional Canva controlled-import finishing → verified PPTX + verified PDF fallback.**

Why:

- Canva native AI preserved much notation but produced projector-small text, unrelated template artifacts and an unreliable critical-angle diagram;
- Beautiful.ai produced cleaner standard layouts but omitted the requested deterministic critical-angle diagram, escaped `<`/`>` notation, rewrote frozen wording and introduced material content drift;
- controlled PptxGenJS kept scientific wording/geometry under direct control and still allowed Canva finishing after import.

### No-confusion precedence rule

Any older file or historical section saying:

- Beautiful.ai and Canva are still equal full-deck candidates;
- renderer decision is pending;
- RT-01 is still pending;
- Beautiful.ai is the default renderer;

is superseded by:

1. `RENDERER_ROUTING.md`;
2. `DECISIONS.md` → `D-036`;
3. the post-RT-01 section of `CURRENT_STATE.md`;
4. the completed chapter RT-01 evidence record.

Do **not** reopen renderer selection in a new chat unless the user explicitly asks to reconsider it or new documented evidence materially changes the decision.

## Equation / notation route after RT-01

- straightforward native Unicode such as `°`, `10⁸`, `H₂O`, `CO₂` may remain text only after actual export verification;
- comparison symbols and renderer-sensitive notation must be checked in the final artifact;
- complex equations/chemistry may use controlled LaTeX/MathJax → SVG/PNG when needed;
- source expressions remain preserved in storyboard/source records.

## Classroom artifact package

GitHub storyboard/content remains the canonical source of truth. A classroom-ready lesson should have:

1. controlled editable PPTX;
2. verified PDF fallback;
3. fallback assets/resources for any classroom-critical online or animated element;
4. source/storyboard/resource/production-QA records in GitHub;
5. post-import QA if Canva finishing is used.

## First-pilot evidence still to capture

RT-01 has already resolved:

- default renderer/tool route;
- Canva native vs controlled-import role;
- Beautiful.ai full-deck role;
- controlled diagram requirement;
- need for verified PPTX + PDF fallback.

Still refine from the first completed chapter/classroom evidence:

- final reusable Bangla typography and numeric visual baselines;
- exact primary classroom playback preference;
- Hyperagent SVG/equation/QA value versus workflow overhead;
- NotebookLM usefulness on real source intake;
- realism of timing estimates in live classroom use;
- which policy/template files can be safely consolidated after the pilot.

## Compact new-chat recovery after the first pilot

Once the first-pilot pending items are resolved and `CURRENT_STATE.md` explicitly says compact recovery is safe, later chats should read in this order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. `GEMINI_REVIEW_WORKFLOW.md` if a Gemini review gate is pending/current
5. active chapter `STATUS.md` if one exists
6. only the relevant chapter/lesson files

Read deeper policy files only when the task requires them.

## Completion

A chapter is complete only after current-science/source, timing, pedagogy, visual, export/playback, fallback, coverage, duplication and cross-lesson continuity checks pass and repository state is updated.
