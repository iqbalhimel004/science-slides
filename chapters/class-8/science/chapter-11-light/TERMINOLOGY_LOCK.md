# Chapter 11 Terminology Lock — আলো

Version: 1.1
Date: 2026-09-08
Status: **ACTIVE — MANDATORY FOR STUDENT-FACING SLIDES**

## Purpose

Prevent production-time terminology drift and preserve the user-approved Chapter 11 classroom wording.

This chapter-local lock overrides generic examples in root language policies.

## Core rule

Student-facing text is Bangla-first and textbook-facing, while remaining scientifically correct.

English is allowed only as optional parenthetical support/proper resource name or for scientific symbols after the Bangla meaning is introduced.

## Locked terms

| Concept | Student-facing primary term | Scientific/optional support |
|---|---|---|
| Interface / boundary | বিভেদতল | `Interface` only if useful on first introduction |
| Normal | অভিলম্ব | `Normal` only if useful on first introduction |
| Point of incidence | আপতন বিন্দু | — |
| Incident ray | আপতিত রশ্মি | — |
| Refracted ray | প্রতিসরিত রশ্মি | — |
| Reflected ray | প্রতিফলিত রশ্মি | — |
| Angle of incidence | আপতন কোণ `(i)` | introduce before repeated `i` |
| Angle of refraction | প্রতিসরণ কোণ `(r)` | introduce before repeated `r` |
| Critical angle | সংকট কোণ `(C)` | introduce before repeated `C` |
| Total internal reflection | পূর্ণ অভ্যন্তরীণ প্রতিফলন | no standalone `TIR` |
| Apparent position | আপাত অবস্থান | — |
| Real position | বাস্তব অবস্থান | — |
| Backward extension | দাগকাটা সহায়ক রেখা / পেছনের দিকে বাড়ানো সহায়ক রেখা | explicitly not real light path |
| Optically denser medium | আলোকীয়ভাবে ঘন মাধ্যম / ঘন মাধ্যম | — |
| Optically less-dense / lower-index medium | আলোকীয়ভাবে হালকা মাধ্যম / হালকা মাধ্যম | **current approved student-facing Chapter 11 term** |
| Optical density | আলোকীয় ঘনত্ব | — |
| Mirage | মরীচিকা | — |
| Optical fibre | অপটিক্যাল ফাইবার | Bangla transliteration accepted |
| Endoscope | এন্ডোস্কোপ | Bangla transliteration accepted |
| Core | কোর | optional enrichment |
| Cladding | ক্ল্যাডিং | optional enrichment |

## Important terminology reconciliation

Older Chapter 11 artifacts/reference locks may contain `বিরল মাধ্যম` / `আলোকীয়ভাবে বিরল মাধ্যম`.

For new/revised **student-facing** Lesson 2 production after 2026-09-08, use `হালকা মাধ্যম` / `আলোকীয়ভাবে হালকা মাধ্যম` in accordance with the user-approved wording.

Scientific meaning remains:

**the second medium has lower optical density / lower refractive index than the incident denser medium.**

If the NCTB source explicitly uses `বিরল মাধ্যম`, that wording may be preserved in a textbook/exam note, but it must not silently override this production lock.

## Prohibited student-facing shortcuts

Do not use as primary visible teaching prose:

- `TIR`
- `boundary`
- `bending`
- `ray diagram`
- `transmitted ray`
- `Exit Check`
- `Hinge check`
- `Live demo`
- `Normal incidence`
- unexplained `store`, `guide`, `data transmission`
- `বিরল মাধ্যম` in revised Lesson 2 student-facing copy unless explicitly quoting textbook/exam wording

## Symbol rule

Introduce before repeated use:

- `আপতন কোণ (i)`
- `প্রতিসরণ কোণ (r)`
- `সংকট কোণ (C)`

Allowed after introduction:

- `i < C`
- `i = C`
- `i > C`
- `r = 90°`

Angles must be visually measured from the অভিলম্ব where required by the science.

## Copy-lock rule

Every revised production lesson must use a current copy lock/structured spec. Historical `SLIDE_COPY_V2.md` remains evidence of the old v2 build and must not be treated as current without the v2.1 migration override.

## QA

Before internal PASS:

1. run student-text lint where practical;
2. inspect all R3 slides for Bangla-first wording;
3. confirm no unexplained acronym;
4. confirm locked terms are used;
5. confirm `হালকা মাধ্যম` is used in current Lesson 2 critical-angle/TIR student-facing content;
6. verify terminology remains scientifically meaningful in context.
