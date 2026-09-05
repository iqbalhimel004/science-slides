---
source_id: NCTB-C8-SCI-2026-REV2025-10
class: 8
subject: Science
school_year: 2026
publisher: National Curriculum and Textbook Board, Bangladesh
source_status: PRIMARY_TIER_1
---

# Source Record — NCTB Class 8 Science, 2026 school year

## Identity

- Book: `বিজ্ঞান — অষ্টম শ্রেণি`
- Authority/publisher: জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB), বাংলাদেশ
- School-year designation: **2026 school year revised version**
- Publication history shown in the book: first publication August 2012; revised September 2014; revised October 2018; revised October 2025.
- Working filename: `Secondary (BV)-2026_Class 8_Science_compressed.pdf`

## Source locations

- Primary official source: `https://drive.egovcloud.gov.bd/index.php/s/0bOss47EGDKxsPp`
- User-provided Google Drive mirror: `https://drive.google.com/file/d/1AGw55GcRsk55gygZqyDttxAfPoP6GnM7/view?usp=drivesdk`
- Repository policy: do **not** commit the full textbook PDF to Git by default. Store durable metadata, official/mirror links, checksum of the working copy, page mapping and verification notes instead.

## Working-copy fingerprint

The uploaded working copy inspected on 2026-09-05 has:

- File size: `43,242,770 bytes`
- SHA-256: `4f44e4aeafa7f00f82091644aa0d986abfd6aea9e40f46c31ff8ba29df1a67e2`
- Raw PDF page count: `162`
- PDF version: `1.6`

The checksum identifies the uploaded working copy. It should not be claimed as the remote official file checksum unless the remote bytes are independently downloaded and matched.

## Pagination map

- Front matter occupies PDF pages 1–5.
- Printed textbook page 1 begins at PDF page 6.
- Printed page 156 corresponds to PDF page 161.
- PDF page 162 is the back cover/end matter.
- Therefore, for the main numbered textbook pages in this copy: `PDF page = printed page + 5`.
- Chapter 11 `আলো`: printed pages 108–118 correspond to PDF pages 113–123.

Always record both printed textbook page and PDF page when practical. Printed page is the classroom/exam-facing reference; PDF page is the deterministic file-navigation reference.

## Ingestion / extraction status

Classification for this actual source: **image/scanned PDF with unreliable or absent native text extraction**.

Observed during the first pilot:

- direct text extraction from a representative Chapter 11 page produced no usable text;
- visible page rendering is clear and suitable for manual/vision verification;
- the ChatGPT file-ingestion layer produced partial OCR on some pages, but not reliably across the whole book;
- the file-ingestion layer reported 150 pages while direct raw-PDF inspection reported 162 pages.

Operational consequence: do not trust extractor page count, OCR text or text-layer availability as the sole source of truth. Preflight the raw PDF and verify critical wording/diagrams against rendered page images.

## Table of contents — 2026 Class 8 Science

| Ch. | Chapter | Printed pages | Production status |
|---:|---|---:|---|
| 1 | প্রাণিজগতের শ্রেণিবিন্যাস | 1–12 | NOT_STARTED |
| 2 | জীবের বৃদ্ধি ও বংশগতি | 13–23 | NOT_STARTED |
| 3 | ব্যাপন, অভিস্রবণ ও প্রস্বেদন | 24–33 | NOT_STARTED |
| 4 | উদ্ভিদের বংশ বৃদ্ধি | 34–44 | NOT_STARTED |
| 5 | সমন্বয় ও নিঃসরণ | 45–54 | NOT_STARTED |
| 6 | পরমাণুর গঠন | 55–64 | NOT_STARTED |
| 7 | পৃথিবী ও মহাকর্ষ | 65–74 | NOT_STARTED |
| 8 | রাসায়নিক বিক্রিয়া | 75–88 | NOT_STARTED |
| 9 | বর্তনী ও চলবিদ্যুৎ | 89–97 | NOT_STARTED |
| 10 | অম্ল, ক্ষারক ও লবণ | 98–107 | NOT_STARTED |
| 11 | আলো | 108–118 | ANALYSIS_COMPLETE_SPLIT_PENDING_APPROVAL |
| 12 | মহাকাশ ও উপগ্রহ | 119–128 | NOT_STARTED |
| 13 | খাদ্য ও পুষ্টি | 129–146 | NOT_STARTED |
| 14 | পরিবেশ এবং বাস্তুতন্ত্র | 147–156 | NOT_STARTED |

## Version-change workflow

When a later NCTB edition/revision is obtained:

1. create a separate year/version source record;
2. fingerprint the new PDF;
3. compare table of contents, learning outcomes, page ranges, definitions, laws/formulas/units, diagrams, activities and exercise changes;
4. identify only the affected chapter/lesson/slide records through `COVERAGE_MATRIX.md`;
5. update impacted decks rather than rebuilding every deck blindly;
6. preserve the old source record for historical reproducibility.
