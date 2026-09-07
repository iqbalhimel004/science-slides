# Accuracy Enforcement Workflow — Science Slides

Version: 1.0
Date: 2026-09-07
Status: **ACTIVE — MANDATORY BEFORE INTERNAL QA PASS**

## Purpose

Reduce avoidable language, diagram, terminology and production mistakes while keeping production fast enough for routine lesson creation.

This workflow was created after Lesson 2 v1 passed prototype QA but user review exposed material failures in ray geometry, mixed English/Bangla wording, unexplained acronyms, unclear sentence fragments and diagram-to-explanation mismatch.

The project target is not a claim of perfect accuracy. The operational target is **high-confidence, mostly machine-assisted correctness with explicit hard stops for high-risk content**, so the remaining manual correction burden is small.

## Core production model

For every lesson:

**verified content/storyboard -> locked student-facing copy -> terminology lint -> controlled high-risk diagrams -> diagram-contract checks -> rendered high-risk audit -> PowerPoint/PDF QA -> user review -> checkpoint**

No stage may be skipped merely because the deck renders or looks attractive.

## Gate A — Student-facing copy lock

Before PPTX generation, create and freeze a lesson-local file:

`production/SLIDE_COPY_V*.md`

It must contain the exact visible student-facing wording for every slide.

Rules:

- use complete, understandable Bangla sentences/questions;
- use chapter terminology lock when one exists;
- do not invent shorter wording during deck generation;
- do not introduce unexplained acronyms;
- English proper names/resources are allowed only where needed;
- symbols such as `i`, `r`, `C` may appear only after their Bangla meaning has been introduced.

Production code should copy from the locked wording conceptually, not paraphrase it casually.

## Gate B — Terminology lock

Each active science chapter should maintain a terminology file when technical vocabulary is significant, for example:

`TERMINOLOGY_LOCK.md`

The lock defines:

- preferred Bangla term;
- optional English support term;
- allowed symbols;
- prohibited shortcuts/acronyms;
- transliterations that are acceptable in Bangla.

If the textbook's Bangla term conflicts with current science, follow source policy: preserve exam-facing wording where needed while teaching the verified scientific concept clearly.

## Gate C — Student-text linter

Where programmatic production is used, run a simple visible-text linter against the actual PPTX.

Minimum checks:

- prohibited English words/acronyms absent from student-facing text;
- only allowlisted proper resource names remain English;
- required symbols/terms are used consistently;
- obvious legacy fragments such as `TIR`, `boundary`, `ray diagram`, `Exit Check`, `Hinge check`, `Live demo`, `store`, `guide`, `data transmission` do not appear unless explicitly allowlisted.

If lint fails, internal QA cannot be PASS.

The linter is a guardrail, not a substitute for Bengali-language review.

## Gate D — Diagram contracts

For high-risk science visuals, define explicit invariants in a chapter-level or lesson-level `DIAGRAM_CONTRACTS.md`.

Examples:

- apparent-depth diagrams require at least two real rays and two dashed backward extensions;
- at the critical angle the refracted ray lies along the interface and the reflected ray remains in the incident medium;
- full internal reflection has no transmitted refracted ray in the idealized diagram;
- mirage uses gradual bending rather than one mirror-like hard boundary.

Any diagram that fails a contract fails production regardless of visual polish.

## Gate E — Programmatic geometry assertions

Whenever a high-risk diagram is generated from coordinates, store/check key geometry programmatically when practical.

Useful assertions include:

- endpoint remains on correct side of an interface;
- required ray count is present;
- apparent image lies between surface and real object for the intended case;
- critical-angle refracted ray is parallel to the interface;
- full-internal-reflection state contains no transmitted ray;
- normal is perpendicular to the interface;
- required labels exist.

Use reusable helper functions/contracts rather than manually rebuilding fragile geometry every lesson.

## Gate F — High-risk rendered-slide audit

A montage is not sufficient evidence for science-critical visuals.

Identify high-risk slides before production. For each one:

1. render the exact slide at readable resolution;
2. inspect it individually;
3. compare against the diagram contract;
4. record PASS/FAIL with the required invariant list.

Typical high-risk slides:

- ray diagrams;
- lens constructions;
- apparent image/depth;
- critical angle/full internal reflection;
- circuits;
- labelled anatomy;
- graphs/scales where geometry carries meaning;
- chemical equations/structures where symbols matter.

## Gate G — Standalone readability

Every student-facing question/explanation must be understandable without relying on invisible teacher context.

FAIL examples:

- `কম → বেশি ঘন মাধ্যমে রশ্মি?`
- `অভিলম্ব বরাবর পড়লে দিক?`
- `প্রতিটি diagram-এ transmitted ray আছে কি না classify করো`

PASS style:

- `আলো আলোকীয়ভাবে বিরল মাধ্যম থেকে ঘন মাধ্যমে গেলে প্রতিসরিত রশ্মি অভিলম্বের কোন দিকে বেঁকে যায়?`
- `লম্ব আপতনে রশ্মির দিক পরিবর্তন হয় কি? মাধ্যম বদলালে বেগের কী হতে পারে?`

Short labels may remain short; instructional sentences/questions must be complete.

## Gate H — Definition-before-symbol/acronym rule

Do not use a symbol/acronym before its meaning has been introduced.

Examples:

- first introduce `আপতন কোণ (i)`;
- first introduce `প্রতিসরণ কোণ (r)`;
- first introduce `সংকট কোণ (C)`.

For student-facing Class 8 material, prefer the full Bangla term `পূর্ণ অভ্যন্তরীণ প্রতিফলন`; do not use standalone `TIR` as the main term.

## Gate I — Visual-source separation

Follow `VISUAL_ASSET_ROUTING.md`:

- realistic physical base asset: verified existing image / Canva / connected external visual source;
- scientific authority layer: deterministic PptxGenJS/SVG/controlled overlay;
- never let generated imagery decide ray geometry, labels, angles, graphs, circuits or scientific topology.

## Gate J — PowerPoint and export reliability

Follow `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md` and `ARTIFACT_PERSISTENCE.md`.

A final PPTX is not classroom-ready until:

- exact artifact opens in Microsoft PowerPoint without repair warning when user-side testing is available;
- links/buttons work;
- staged reveal order is correct;
- PDF fallback renders correctly;
- fingerprints and reproducible source are recorded.

## Internal QA wording rule

Do not write `INTERNAL QA PASS` unless all applicable hard checks have passed.

Use precise status labels instead:

- `BUILT — TEXT_LINT_PENDING`
- `BUILT — DIAGRAM_CONTRACT_FAIL`
- `BUILT — HIGH_RISK_RENDER_REVIEW_PENDING`
- `INTERNAL_QA_PASS — USER_POWERPOINT_REVIEW_PENDING`

A deck that only passes overflow/render tests is **not** science-QA complete.

## Required lesson-local production artifacts

For a high-risk science lesson, preserve as applicable:

- `SLIDE_COPY_V*.md`
- `DYNAMIC_MANIFEST.md`
- build/generator source
- student-text lint script/config
- diagram-contract checker/spec
- production QA report
- artifact fingerprints
- source/asset provenance

## New-chat rule

Before producing a lesson, a new chat must read:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `ACCURACY_ENFORCEMENT.md`
4. chapter `TERMINOLOGY_LOCK.md` if present
5. chapter/lesson `DIAGRAM_CONTRACTS.md` if present
6. active lesson `STORYBOARD.md`, `RESOURCES.md`, `SLIDE_COPY_V*.md`
7. task-relevant production policies

This is mandatory for production work; do not depend on memory from an older chat.

## Efficiency principle

The purpose of these controls is to reduce rework, not create bureaucracy.

Prefer:

- reusable diagram helpers;
- small deterministic scripts;
- exact copy locks;
- automated lint/assertions;
- focused review of only high-risk slides;

rather than repeatedly auditing every low-risk slide from scratch.

## Lesson 2 v1 disposition

Lesson 2 v1 is a documented failure case and must not be reused as a classroom-ready reference. It may remain as historical evidence of why these safeguards were added.

Lesson 2 v2 and later lessons must satisfy this workflow before internal QA PASS.
