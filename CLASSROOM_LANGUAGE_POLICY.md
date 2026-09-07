# Classroom Language Policy

Version: 1.1
Date: 2026-09-07
Status: **ACTIVE — MANDATORY FOR STUDENT-FACING SCIENCE SLIDES**

## Purpose

Prevent mixed-language classroom slides from drifting away from NCTB/book terminology and the user's preferred teaching language, and prevent production-time shorthand from making sentences difficult to understand.

## Core rule

Student-facing teaching text must be **Bangla-first and textbook-facing**.

Use the Bangla term as the primary visible label. English is optional and should normally appear only in parentheses on the first meaningful introduction when it genuinely helps.

Examples:

- `বিভেদতল (Interface)`
- `অভিলম্ব (Normal)`
- `আপতন বিন্দু (Point of incidence)`
- `আপতন কোণ (i)`
- `আপতিত রশ্মি`
- `প্রতিসরণ কোণ (r)`
- `প্রতিসরিত রশ্মি`
- `প্রতিফলিত রশ্মি`
- `লম্ব আপতন`
- `আলোকীয় ঘনত্ব`
- `বিরল মাধ্যম`
- `ঘন মাধ্যম`

Do not make the English term the main heading with Bangla as a secondary translation unless there is a specific pedagogical reason.

## Definition-before-symbol/acronym rule

A symbol or acronym must not appear before its meaning has been introduced.

Examples:

- introduce `আপতন কোণ (i)` before using `i` repeatedly;
- introduce `প্রতিসরণ কোণ (r)` before using `r` repeatedly;
- introduce `সংকট কোণ (C)` before using `C` repeatedly.

For Class 8 student-facing material, prefer the full Bangla term `পূর্ণ অভ্যন্তরীণ প্রতিফলন`. Do not use standalone `TIR` as the main visible term.

An English acronym is not treated the same as a mathematical symbol.

## What may remain English

English may remain when it is a proper product/resource name or where translation would reduce clarity, for example:

- `PhET Bending Light`
- `Physics Classroom — Refraction Interactive`

Even in those cases, the surrounding instruction/prompt must remain Bangla.

## Mixed-language anti-patterns

Avoid student-facing phrases such as:

- `Prediction: ...`
- `Normal incidence: ...`
- `Ray কোথায় যাবে?`
- `speed বদলায়`
- `Refraction = ...`
- `Live demo`
- `Exit Check`
- `TIR`
- `boundary`
- `bending`
- `ray diagram`
- `transmitted ray`
- `store`, `guide`, `data transmission` as English classroom prose

Preferred replacements:

- `অনুমান করো`
- `লম্ব আপতন`
- `রশ্মি কোথায় যাবে?`
- `বেগ বদলায়`
- `প্রতিসরণ = ...`
- `শ্রেণিকক্ষ কার্যক্রম / প্রদর্শনী`
- `শেষ যাচাই`
- `পূর্ণ অভ্যন্তরীণ প্রতিফলন`
- `বিভেদতল`
- `রশ্মি বাঁকে`
- `রশ্মিচিত্র`
- `বাইরের দিকে প্রতিসরিত রশ্মি`
- `সংরক্ষণ করে না`, `পথ নির্দেশ করে`, `তথ্য আদান-প্রদান`

## Standalone-readability rule

Student-facing questions and explanatory sentences must make sense on their own. Do not rely on the teacher mentally filling missing verbs/objects.

FAIL examples:

- `কম → বেশি ঘন মাধ্যমে রশ্মি?`
- `অভিলম্ব বরাবর পড়লে দিক?`
- `কোন diagram-এ transmitted ray আছে?`

Preferred:

- `আলো আলোকীয়ভাবে বিরল মাধ্যম থেকে ঘন মাধ্যমে গেলে প্রতিসরিত রশ্মি অভিলম্বের কোন দিকে বেঁকে যায়?`
- `লম্ব আপতনে রশ্মির দিক পরিবর্তন হয় কি? মাধ্যম বদলালে বেগের কী হতে পারে?`
- `প্রতিটি অবস্থায় প্রতিসরণ থাকবে, সংকট অবস্থা হবে, নাকি পূর্ণ অভ্যন্তরীণ প্রতিফলন হবে?`

Short diagram labels may remain short. Instructions/questions must be complete.

## Slide-copy lock

For a new/revised production lesson, create/freeze exact visible wording before the final deck build:

`production/SLIDE_COPY_V*.md`

The deck-building stage must not freely paraphrase or shorten that wording.

If wording needs to change after copy freeze, update the copy file and treat the deck as needing re-QA.

## Classroom demo wording

A slide itself must not be labelled `Live demo` unless it actually contains or launches a live/embedded element.

For a teacher-led physical demonstration, use wording such as:

`শ্রেণিকক্ষ কার্যক্রম` or `শ্রেণিকক্ষ প্রদর্শনী`.

The slide should explicitly state the teacher action, required materials, student observation prompt, and static fallback if materials are unavailable.

## Progressive-reveal wording

Staged duplicate slides should clearly identify their role when the sequence could otherwise be confusing:

- `ধাপ ১ — আগে অনুমান`
- `ধাপ ২ — উত্তর`
- `ধাপ ৩ — ব্যাখ্যা`

Do not rely on unlabeled near-duplicate slides for a science concept where the teacher/student may not immediately understand why both states exist.

## Diagram labeling rule

For science-critical diagrams, visible labels must use the Bangla textbook terms. English can appear once in parentheses where useful.

A ray-optics vocabulary diagram should not be considered complete if the required topic includes the terms but the diagram omits them. Verify as relevant:

- বিভেদতল
- অভিলম্ব
- আপতন বিন্দু
- আপতন কোণ
- আপতিত রশ্মি
- প্রতিসরণ কোণ
- প্রতিসরিত রশ্মি
- প্রতিফলিত রশ্মি
- সংকট কোণ
- পূর্ণ অভ্যন্তরীণ প্রতিফলন

## Automated lint rule

For programmatically generated decks, run a student-facing text lint when practical.

The linter should flag known unwanted English fragments/acronyms while allowlisting proper resource names and agreed scientific symbols.

A linter PASS does not prove language quality; it prevents common drift. Manual Bangla readability review is still required for high-risk slides.

Canonical generic linter:

`tools/student_text_lint.py`

## QA gate

Before `CLASSROOM_READY`, production QA must check:

1. student-facing explanatory text is Bangla-first;
2. textbook terminology is used consistently;
3. unnecessary English fragments are removed;
4. English proper names/resources remain only where appropriate;
5. symbols/acronyms were introduced before use;
6. diagram labels include required Bangla terms;
7. physical-demo slides are not falsely presented as embedded/live content;
8. staged reveal pairs are clear about prediction vs answer when ambiguity is possible;
9. questions/instructions are standalone-readable;
10. exact slide copy is frozen for production lessons;
11. automated terminology lint passes where applicable.

## Chapter terminology lock

When a chapter has many technical terms, maintain a chapter-local `TERMINOLOGY_LOCK.md`. It takes precedence over ad-hoc production wording.

## Evidence

This policy was first created after Lesson 1 v2 identified mixed-language/clarity issues, and strengthened after Lesson 2 v1 exposed additional failures:

- fragmentary Bangla questions;
- standalone `TIR` despite Bangla-first policy;
- English fragments such as `boundary`, `bending`, `store`, `guide`, `data transmission`;
- a QA process that incorrectly treated `TIR` like a standard mathematical symbol.

Lesson 2 v2 is the first build under the strengthened copy-lock + lint workflow.
