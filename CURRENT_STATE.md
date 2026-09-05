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

`GEMINI_GATE_A_PACKAGE_READY_EXTERNAL_RUN_PENDING`

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

## Approved lesson split

1. **আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম** — CORE 44 + FLEX 8 = 52 min
2. **প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন** — CORE 44 + FLEX 8 = 52 min
3. **উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা** — CORE 45 + FLEX 8 = 53 min
4. **আলোক-চিত্রগ্রাহী ক্যামেরা, চোখের সাথে তুলনা ও অধ্যায় সংশ্লেষ** — CORE 44 + FLEX 8 = 52 min

## Gemini Gate A state

The exact external review package has been prepared and saved at:

`chapters/class-8/science/chapter-11-light/reviews/GEMINI_GATE_A_PROMPT.md`

It instructs Gemini to review:

- decomposition/scope sanity
- missing prerequisites / duplication
- timing plausibility
- misconception coverage
- difficult-science risk
- outdated-textbook risk
- exam-sensitive wording risk
- current scientific authority versus NCTB framing

The prompt requires a structured verdict and external evidence, and explicitly forbids automatic adoption of Gemini findings.

### External-tool limitation

No direct Gemini/Gemini AI Pro connector is available in this ChatGPT workspace. Plugin discovery was checked and did not expose a usable Gemini integration. Therefore the Gate A **review itself has not yet run** here.

Storyboard work is paused at this gate. The next valid actions are either:

1. run `reviews/GEMINI_GATE_A_PROMPT.md` in the user's Gemini account and return the response here; or
2. if a Gemini integration becomes available later, run the same package through it.

After the response is supplied, ChatGPT must save the raw review, independently validate material findings, record accept/partial/reject dispositions, update affected plans/source records, checkpoint state, and only then start Lesson 1 storyboard.

## Renderer status

No permanent default renderer is locked. RT-01 remains later, after content freeze prerequisites.

## Next authorized action

**Obtain the actual Gemini Gate A review output using the prepared package.**

Do not begin storyboard/content freeze/rendering until that review is returned and reconciled, unless the user explicitly changes this gate requirement.
