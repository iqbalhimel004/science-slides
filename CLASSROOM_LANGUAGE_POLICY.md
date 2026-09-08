# Classroom Language Policy

Version: 1.2
Date: 2026-09-08
Status: **ACTIVE — MANDATORY FOR STUDENT-FACING SCIENCE SLIDES**

## Core rule

Student-facing teaching text must be Bangla-first, textbook-aware and scientifically correct.

The active chapter `TERMINOLOGY_LOCK.md` is the authority for exact student-facing scientific terms. Generic examples in this root policy never override a chapter-specific lock or a later user-approved terminology decision.

English may normally appear only:

- as optional parenthetical support on first meaningful introduction;
- as a proper resource/product name;
- where a standard scientific symbol/notation has already been introduced in Bangla.

## Definition-before-symbol/acronym

Introduce meaning before repeated symbol use, e.g.:

- `আপতন কোণ (i)`;
- `প্রতিসরণ কোণ (r)`;
- `সংকট কোণ (C)`.

Do not use unexplained English acronyms such as standalone `TIR` as the primary Class-8 term when a locked Bangla term exists.

## Standalone readability

Questions/instructions/explanations must make sense without the teacher mentally supplying missing verbs/objects. Short diagram labels may be short; prompts must remain complete and clear.

## Copy lock

Before final production, freeze exact visible wording in a current `SLIDE_COPY_V*.md` or equivalent structured lesson specification.

If wording changes after freeze:

1. update the current copy/spec authority;
2. run terminology/text lint where practical;
3. rerun affected layout/render/science-meaning checks under selective revalidation.

Historical copy files remain historical and do not override later chapter locks/migration records.

## Student-facing language checks

Before internal PASS:

- Bangla-first explanatory text;
- current chapter terminology;
- no unnecessary English fragments;
- symbols/acronyms introduced before use;
- diagram labels match the chapter lock;
- complete prompts/instructions;
- generated/raster images do not contain uncontrolled scientific wording when editable text is practical;
- terminology linter passes where applicable;
- manual high-risk readability review passes.

## Dynamic/demo wording

Teacher-led physical activity should be labelled in clear Bangla such as `শ্রেণিকক্ষ কার্যক্রম` / `শ্রেণিকক্ষ প্রদর্শনী`, not falsely presented as embedded/live media.

Staged reveals should make prediction/answer/explanation roles clear when near-duplicate states could confuse.

## Chapter-specific precedence example

For Class 8 Chapter 11, current `TERMINOLOGY_LOCK.md` uses the user-approved student-facing `হালকা মাধ্যম` for the lower-optical-density/lower-index side in revised Lesson 2. Older generic/historical `বিরল মাধ্যম` wording does not override that lock.

Canonical architecture: `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`.
