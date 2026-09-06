# Curriculum / Production Index

Purpose: one durable map of what exists in each textbook chapter, what Science Slides has produced, what remains uncovered, and which source/version each production is based on.

## Current source baseline

| Class | Subject | School year / revision | Source record | Status |
|---|---|---|---|---|
| 8 | Science | 2026 school year; revised October 2025 | `sources/class-8/science/2026/SOURCE_RECORD.md` | ACTIVE_TIER_1_BASELINE |

## Class 8 — Science — 2026

| Ch. | Chapter | Printed pages | Chapter analysis | Lesson/deck status | Coverage map | Source issues | Last reviewed |
|---:|---|---:|---|---|---|---|---|
| 1 | প্রাণিজগতের শ্রেণিবিন্যাস | 1–12 | NOT_STARTED | NOT_STARTED | — | — | — |
| 2 | জীবের বৃদ্ধি ও বংশগতি | 13–23 | NOT_STARTED | NOT_STARTED | — | — | — |
| 3 | ব্যাপন, অভিস্রবণ ও প্রস্বেদন | 24–33 | NOT_STARTED | NOT_STARTED | — | — | — |
| 4 | উদ্ভিদের বংশ বৃদ্ধি | 34–44 | NOT_STARTED | NOT_STARTED | — | — | — |
| 5 | সমন্বয় ও নিঃসরণ | 45–54 | NOT_STARTED | NOT_STARTED | — | — | — |
| 6 | পরমাণুর গঠন | 55–64 | NOT_STARTED | NOT_STARTED | — | — | — |
| 7 | পৃথিবী ও মহাকর্ষ | 65–74 | NOT_STARTED | NOT_STARTED | — | — | — |
| 8 | রাসায়নিক বিক্রিয়া | 75–88 | NOT_STARTED | NOT_STARTED | — | — | — |
| 9 | বর্তনী ও চলবিদ্যুৎ | 89–97 | NOT_STARTED | NOT_STARTED | — | — | — |
| 10 | অম্ল, ক্ষারক ও লবণ | 98–107 | NOT_STARTED | NOT_STARTED | — | — | — |
| 11 | আলো | 108–118 | COMPLETE | **CONTENT_FROZEN; L1 RENDERED/QA PASS_WITH_NOTES; L2 PRODUCTION NEXT** | `chapters/class-8/science/chapter-11-light/COVERAGE_MATRIX.md` | `chapters/class-8/science/chapter-11-light/SOURCE_ISSUES.md` | 2026-09-06 |
| 12 | মহাকাশ ও উপগ্রহ | 119–128 | NOT_STARTED | NOT_STARTED | — | — | — |
| 13 | খাদ্য ও পুষ্টি | 129–146 | NOT_STARTED | NOT_STARTED | — | — | — |
| 14 | পরিবেশ এবং বাস্তুতন্ত্র | 147–156 | NOT_STARTED | NOT_STARTED | — | — | — |

## Chapter 11 production note

Current canonical state:

- 4-lesson split approved;
- all four storyboards mapped;
- Gemini Gate A and targeted Gate B completed/reconciled;
- content/storyboard freeze approved;
- RT-01 complete;
- primary route = controlled PptxGenJS;
- Canva = optional controlled-import finishing;
- Beautiful.ai/native Canva AI are not unattended science full-deck routes;
- Lesson 1 controlled PPTX/PDF production passed with nonblocking notes;
- Lesson 2 production is next.

See `CURRENT_STATE.md` and chapter `STATUS.md` for exact live state.

## Class 9

No textbook/source baseline registered yet.

## Class 10

No textbook/source baseline registered yet.

## Status vocabulary

- `NOT_STARTED` — source exists but chapter has not entered production.
- `ANALYSIS_COMPLETE` — full chapter intake/concept analysis complete.
- `SPLIT_PROPOSED` — lesson boundaries proposed, awaiting approval.
- `SPLIT_APPROVED` — user approved lesson boundaries.
- `STORYBOARDING` — lesson/storyboard production underway.
- `CONTENT_FROZEN` — scientific/source/pedagogical content frozen.
- `RENDERED` — primary deck rendered but final QA may remain.
- `CLASSROOM_READY` — all applicable quality/export/fallback/reproducibility gates passed.
- `POST_CLASS_REVIEWED` — actual classroom timing/feedback recorded.

## Maintenance rule

This index is a navigation/status layer only. Do not duplicate detailed chapter content here. Detailed concept inventory belongs in `CHAPTER_ANALYSIS.md`; source discrepancies/corrections belong in `SOURCE_ISSUES.md`; topic-to-lesson/slide traceability belongs in `COVERAGE_MATRIX.md`; source provenance belongs in `SOURCE_RECORD.md` / `SOURCE_MAP.md`.

When a new textbook edition arrives, add a new versioned source record first. Do not overwrite historical source identity. Then diff the new edition against the active baseline and update only affected chapter/lesson/slide records.
