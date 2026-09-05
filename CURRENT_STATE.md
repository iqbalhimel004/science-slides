# Current State

Last updated: 2026-09-05

## Project status

Plan v3.0 remains the canonical production plan, with durable policy refinements recorded in `OPERATING_BRIEF.md` v3.2, `SOURCE_POLICY.md` v3.1, `WORKFLOW.md` v3.1 and `DECISIONS.md` D-031/D-032.

The first real chapter is in the pilot workflow. Full chapter analysis is complete, the revised **four-lesson split has been explicitly approved by the user**, source reconciliation pass 1 is complete, the coverage matrix has been remapped to four lessons, and detailed lesson-plan drafts exist for all four lessons.

## Canonical repository

`iqbalhimel004/science-slides`

This is the only repository authorized for writes for this project.

## Durable source-authority rule

NCTB is used as the primary syllabus/chapter/exam-context source, but **not as automatic scientific authority**.

- never infer scientific currentness from a recent print/revision year alone;
- verify material scientific claims against current authoritative sources;
- when NCTB is outdated, ambiguous, misleading or wrong, record the textbook statement and the verified current science separately;
- teach the scientifically correct/current explanation;
- preserve NCTB/exam wording separately when students may encounter it;
- record verified mismatches in `SOURCE_ISSUES.md` / `SOURCE_MAP.md`.

## Universal checkpoint rule

**Finish → record → then continue.**

A meaningful task/stage is not operationally complete until its durable result is saved to GitHub. After analysis, verification, lesson planning, Gemini review/reconciliation, storyboard, resource mapping, QA, RT-01, rendering, export QA or other durable work:

- save/update the relevant artifact;
- update chapter/lesson `STATUS.md` and `CURRENT_STATE.md` when applicable;
- update `DECISIONS.md` when a durable rule changes;
- update Fable reconciliation when a pilot item is resolved/materially reclassified.

## Active textbook baseline

The user supplied the full **2026 Class 8 Science** PDF.

Canonical source record:

`sources/class-8/science/2026/SOURCE_RECORD.md`

Book identity verified from front matter:

- `বিজ্ঞান — অষ্টম শ্রেণি`
- National Curriculum and Textbook Board, Bangladesh
- for the 2026 school year
- revised October 2025

Important interpretation: this publication/revision metadata is source identity only; it does not establish that all underlying scientific content was substantively updated.

The working copy is an image/scanned PDF with unreliable/absent native text extraction. Raw PDF inspection reports 162 pages, while the ChatGPT file-ingestion layer exposed 150 pages. Therefore visible rendered pages plus raw-PDF preflight are authoritative for page integrity; OCR/extractor page counts are advisory only.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical chapter path:

`chapters/class-8/science/chapter-11-light/`

Current status:

`GEMINI_GATE_A_BUNDLE_READY_EXTERNAL_RUN_PENDING`

Key files:

- `STATUS.md`
- `CHAPTER_ANALYSIS.md`
- `COVERAGE_MATRIX.md`
- `SOURCE_ISSUES.md`
- `SOURCE_MAP.md`
- `LESSON_SPLIT_PROPOSAL_V2.md`
- `lessons/lesson-01/LESSON_PLAN.md`
- `lessons/lesson-02/LESSON_PLAN.md`
- `lessons/lesson-03/LESSON_PLAN.md`
- `lessons/lesson-04/LESSON_PLAN.md`
- `reviews/GEMINI_GATE_A_PROMPT.md`
- `reviews/GEMINI_GATE_A_BUNDLE_MANIFEST.md`

## Important stale-state correction completed

`CHAPTER_ANALYSIS.md` previously retained the original three-lesson recommendation from the first screenshot-only analysis. It has now been rebased to:

- the full 2026 textbook baseline;
- the user-approved four-lesson architecture;
- current source-authority policy;
- current source issues and review gate state.

The Gemini bundle was generated only after this correction.

## Approved lesson split

1. **আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম** — CORE 44 + FLEX 8 = 52 min
2. **প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন** — CORE 44 + FLEX 8 = 52 min
3. **উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা** — CORE 45 + FLEX 8 = 53 min
4. **আলোক-চিত্রগ্রাহী ক্যামেরা, চোখের সাথে তুলনা ও অধ্যায় সংশ্লেষ** — CORE 44 + FLEX 8 = 52 min

## Gemini Gate A state

Direct Gemini access from this ChatGPT workspace is unavailable. The user's Gemini session also failed to read both the compressed repository import and public GitHub/raw GitHub URLs.

Therefore a **single consolidated Markdown transport bundle** was generated for direct file upload to Gemini:

`GEMINI_GATE_A_BUNDLE.md`

Delivery snapshot:

- size: 77,451 bytes
- SHA-256: `277087d105fe114bb95f531e8653d6c0c20454f541f1b51e8e5bf8063ed2e26f`
- manifest: `reviews/GEMINI_GATE_A_BUNDLE_MANIFEST.md`

The bundle contains the Gate A prompt, corrected chapter analysis, approved lesson split, coverage matrix, source issues, source map and all four lesson plans.

The bundle is a transport artifact only; canonical editable content remains the individual GitHub files. Regenerate the bundle if any included canonical file changes.

Recommended Gemini instruction:

> Read the attached `GEMINI_GATE_A_BUNDLE.md` completely. Perform the full independent Gate A review exactly according to the instructions contained inside the file. Do not skip any required section. Independently verify material scientific claims using current authoritative sources.

## Renderer status

No permanent default renderer is locked. RT-01 remains later, after content freeze prerequisites.

## Next authorized action

1. User uploads `GEMINI_GATE_A_BUNDLE.md` to Gemini and runs Gate A.
2. User returns Gemini's full response here.
3. ChatGPT saves the raw review in GitHub.
4. ChatGPT independently validates every material finding.
5. Record `ACCEPT / PARTIAL / REJECT` dispositions and update affected canonical files.
6. Checkpoint `STATUS.md` and `CURRENT_STATE.md` immediately.
7. Only then begin Lesson 1 storyboard.

Do not begin storyboard/content freeze/rendering until the Gate A review is returned and reconciled, unless the user explicitly changes this gate requirement.
