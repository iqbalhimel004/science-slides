# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science (বিজ্ঞান)
- Chapter: 11 — আলো
- Current status: **ALL_4_STORYBOARDS_MAPPED — CHAPTER_AUDIT_COMPLETE — GEMINI_GATE_B_NEXT**
- Last updated: 2026-09-06

## Durable workflow rules now active

- External-tool prompts must be delivered in one self-contained fenced code block for one-click copying.
- Planned Gemini review gates use a fresh single consolidated Markdown bundle generated from current canonical GitHub files.
- The user downloads/uploads that bundle to Gemini and runs the supplied one-click-copy prompt.
- Do not depend on Gemini browsing GitHub/importing the repository.
- Old Gemini bundles become stale when any included canonical file changes.
- Canonical procedure: root `GEMINI_REVIEW_WORKFLOW.md`.
- Universal stage rule: **Finish → record → then continue.**

## Source intake

- Complete 2026 textbook received: Yes, full PDF supplied by the user.
- Canonical source record: `sources/class-8/science/2026/SOURCE_RECORD.md`
- Printed Chapter 11 range: 108–118.
- Working-copy PDF range: 113–123.
- Source type: scanned/image PDF; visible rendered pages authoritative for critical wording.

## Analysis / source / planning state

- Full chapter analysis: COMPLETE.
- Approved lesson count: **4**.
- Gemini Gate A: COMPLETED + RECONCILED.
- Source reconciliation pass 2: COMPLETE.
- All four lesson plans: current and storyboard-reconciled where needed.
- All four storyboards: DRAFT_COMPLETE.
- All four resource maps: DRAFT_COMPLETE.
- All four storyboard QA records: PASS_WITH_NONBLOCKING_NOTES.
- Coverage matrix: all four lessons mapped to concrete slide IDs/dispositions.
- Chapter-wide storyboard/resource/duplication audit: COMPLETE.

## Current production split

| Lesson | Working title | Storyboard status | CORE | FLEX | Planned | Contingency |
|---|---|---|---:|---:|---:|---:|
| 1 | আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম | DRAFT_COMPLETE / QA_PASS_WITH_NOTES | 43 | 7 | 50 | 10 |
| 2 | প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন | DRAFT_COMPLETE / RESOURCE_MAP_COMPLETE / QA_PASS_WITH_NOTES | 44 | 8 | 52 | 8 |
| 3 | উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা | DRAFT_COMPLETE / RESOURCE_MAP_COMPLETE / QA_PASS_WITH_NOTES | 42 | 8 | 50 | 10 |
| 4 | আলোক-চিত্রগ্রাহী ক্যামেরা, চোখের সাথে তুলনা ও অধ্যায় সংশ্লেষ | DRAFT_COMPLETE / RESOURCE_MAP_COMPLETE / QA_PASS_WITH_NOTES | 46 | 8 | 54 | 6 |

Chapter planned CORE + FLEX total: **206 minutes** across four classes.

Lesson 4 storyboard detail superseded the older 44-minute CORE estimate. The current 46+8=54-minute plan remains within the 50–55 minute target but leaves only 6 minutes contingency. Do not add more CORE content to L4 before Gate B.

## Lesson checkpoints

### Lesson 1
- `lessons/lesson-01/LESSON_PLAN.md`
- `lessons/lesson-01/STORYBOARD.md`
- `lessons/lesson-01/RESOURCES.md`
- `lessons/lesson-01/QA.md`
- 14 CORE + 2 FLEX slides

### Lesson 2
- `lessons/lesson-02/LESSON_PLAN.md`
- `lessons/lesson-02/STORYBOARD.md`
- `lessons/lesson-02/RESOURCES.md`
- `lessons/lesson-02/QA.md`
- 14 CORE + 2 FLEX slides

### Lesson 3
- `lessons/lesson-03/LESSON_PLAN.md`
- `lessons/lesson-03/STORYBOARD.md`
- `lessons/lesson-03/RESOURCES.md`
- `lessons/lesson-03/QA.md`
- 13 CORE + 2 FLEX slides

### Lesson 4
- `lessons/lesson-04/LESSON_PLAN.md`
- `lessons/lesson-04/STORYBOARD.md`
- `lessons/lesson-04/RESOURCES.md`
- `lessons/lesson-04/QA.md`
- 14 CORE + 2 FLEX slides

Key L4 decisions:
- textbook photographic/film camera is explicitly context-labelled;
- real/inverted camera image is explained from lens optics;
- aperture and shutter functions are separated;
- developer/fixer/hypo chemistry remains black-and-white film context;
- eye-camera comparison is functional, not one-to-one structural identity;
- accommodation and camera focusing are explicitly different mechanisms;
- eyelid ≠ exact shutter and retina ≠ photographic film;
- film-vs-digital distinction is minimal; a current authoritative digital-camera source must be pinned before freeze if L4-S11 remains CORE.

## Chapter-wide audit

Canonical audit:
`CHAPTER_STORYBOARD_AUDIT.md`

Verdict:
**PASS_TO_GEMINI_GATE_B_WITH_TARGETED_NOTES**

Findings:
- no material lesson-boundary change required;
- no textbook-body topic remains unmapped;
- no material duplication requires removal;
- purposeful retrieval/reuse is justified;
- all four CORE lessons are offline-capable;
- high-risk science visuals are specified as deterministic/custom;
- final rendered diagrams and labels remain pre-freeze QA items.

## Source reconciliation status

- `SI-11-001` spectacles outcome/body gap: VERIFIED_SOURCE_GAP / PARTIALLY_RESOLVED.
- `SI-11-002` normal-incidence nuance: RESOLVED.
- `SI-11-003` equal incident/emergent angle: RESOLVED as parallel-sided slab geometry dependent.
- `SI-11-004` film-camera chemistry: RESOLVED_WITH_CONTEXT_LABEL.
- `SI-11-005` mirage hard-boundary visualization risk: RESOLVED with gradient clarification.
- `SI-11-006` cornea/lens focusing roles: RESOLVED.
- `SI-11-007` eye-camera focusing analogy limit: RESOLVED.

## Remaining pre-freeze verification items

1. final ray geometry after assets are drawn;
2. final eye anatomy/accommodation/corrective-lens diagrams;
3. film-processing wording after visual compression;
4. pin current authoritative digital-camera source if L4-S11 stays CORE;
5. visually verify NCTB exercise-based redraws;
6. Gemini Gate B external review + independent reconciliation;
7. final G1–G7 pass and content freeze.

## Gemini cadence

Gate A is completed and reconciled.

**Gate B is now the next authorized stage.** It must use a fresh single downloadable Markdown bundle generated from the current canonical files according to `GEMINI_REVIEW_WORKFLOW.md`.

## Next authorized action

1. Generate fresh `GEMINI_GATE_B_BUNDLE.md` from current canonical files.
2. Record bundle manifest/fingerprint in GitHub.
3. Give the user a downloadable bundle and one one-click-copy Gemini prompt.
4. User runs Gemini Gate B and returns full response.
5. Save raw Gate B review, independently validate all material findings, and record ACCEPT/PARTIAL/REJECT.
6. Implement validated changes and checkpoint immediately.
7. Run final G1–G7, then content freeze.
8. Run RT-01, select renderer routing, render and export-QA.

Do not render final decks yet.
