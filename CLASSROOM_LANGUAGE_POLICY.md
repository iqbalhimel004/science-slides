# Classroom Language Policy

Version: 1.0
Date: 2026-09-06
Status: **ACTIVE — MANDATORY FOR STUDENT-FACING SCIENCE SLIDES**

## Purpose

Prevent mixed-language classroom slides from drifting away from NCTB/book terminology and the user's preferred teaching language.

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

Preferred replacements:

- `অনুমান করো`
- `লম্ব আপতন`
- `রশ্মি কোথায় যাবে?`
- `বেগ বদলায়`
- `প্রতিসরণ = ...`
- `শ্রেণিকক্ষ কার্যক্রম / প্রদর্শনী`
- `শেষ যাচাই`

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

For science-critical diagrams, the visible labels must use the Bangla textbook terms. English can appear once in parentheses where useful.

A ray-optics vocabulary diagram should not be considered complete if the required topic includes the terms but the diagram omits them. For refraction basics, verify as relevant:

- বিভেদতল
- অভিলম্ব
- আপতন বিন্দু
- আপতন কোণ
- আপতিত রশ্মি
- প্রতিসরণ কোণ
- প্রতিসরিত রশ্মি

## QA gate

Before `CLASSROOM_READY`, production QA must check:

1. student-facing explanatory text is Bangla-first;
2. textbook terminology is used consistently;
3. unnecessary English fragments are removed;
4. English proper names/resources remain only where appropriate;
5. diagram labels include the required Bangla terms;
6. physical-demo slides are not falsely presented as embedded/live content;
7. staged reveal pairs are clear about prediction vs answer when ambiguity is possible.

## First-pilot evidence

This policy was created after user review of Lesson 1 v2 identified:

- unclear unlabeled purpose of the two glass-slab staged slides;
- excessive English in student-facing science terminology;
- missing explicit `আপতন কোণ` / `প্রতিসরণ কোণ` terminology in the ray-vocabulary implementation;
- a static instruction slide being labelled `Live demo` even though it contained no live element.

The corrected Lesson 1 build is the first implementation baseline for this policy.
