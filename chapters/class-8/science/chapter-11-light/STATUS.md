# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science (বিজ্ঞান)
- Chapter: 11 — আলো
- Current status: **GEMINI_GATE_A_RECONCILED — STORYBOARD_READY**
- Last updated: 2026-09-05

## Source intake

- Complete 2026 textbook received: Yes, full PDF supplied by the user.
- Canonical Tier-1 source record: `sources/class-8/science/2026/SOURCE_RECORD.md`
- School-year designation: 2026; book front matter says revised October 2025.
- Chapter printed page range: 108–118.
- Working-copy PDF page range: 113–123.
- Input integrity gate: PASS_WITH_NOTES.
- Source type: image/scanned PDF with unreliable/absent native text extraction.
- Raw working-copy PDF page count: 162.
- ChatGPT file-ingestion layer exposed 150 pages, so extractor page counts must not be treated as authoritative for this file.
- Critical wording verification: visible rendered textbook pages are authoritative; do not rely on OCR-only text.

## Analysis and split

- Chapter analysis: COMPLETE and rebased to full 2026 source.
- Approved lesson count: **4**.
- Lesson split approved by user: **Yes — 2026-09-05**.
- Gemini Gate A did not require a material replan.
- Approved split record: `LESSON_SPLIT_PROPOSAL_V2.md` — now includes Gate A refinements.
- Coverage matrix: `COVERAGE_MATRIX.md` — Gate A reconciled and storyboard-ready.
- Source issue register: `SOURCE_ISSUES.md`.
- Source map: `SOURCE_MAP.md` — source reconciliation pass 2 complete.

## Current production split

| Lesson | Working title | Status | CORE | FLEX | Planned |
|---|---|---|---:|---:|---:|
| 1 | আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম | GATE_A_RECONCILED_PLAN | 43 min | 7 min | 50 min |
| 2 | প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন | GATE_A_RECONCILED_PLAN | 44 min | 8 min | 52 min |
| 3 | উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা | GATE_A_RECONCILED_PLAN | 42 min | 8 min | 50 min |
| 4 | আলোক-চিত্রগ্রাহী ক্যামেরা, চোখের সাথে তুলনা ও অধ্যায় সংশ্লেষ | GATE_A_RECONCILED_PLAN | 44 min | 8 min | 52 min |

Estimated total planned load: approximately **204 minutes CORE + FLEX** across four classes.

## Gemini Gate A

Raw external review:
- `reviews/GEMINI_GATE_A_RAW_2026-09-05.md`

Independent reconciliation:
- `reviews/GEMINI_GATE_A_RECONCILIATION_2026-09-05.md`

External verdict:
- `PASS_WITH_TARGETED_CHANGES`

Canonical reconciliation verdict:
- **ACCEPT WITH TARGETED CHANGES; NO MATERIAL REPLAN REQUIRED**

### Accepted / partially accepted changes

1. L1 phenomenon-first reorder: pencil-in-water before abstract causal mechanism.
2. L1 wave-particle material reduced; photon note remains brief/non-assessed because the user explicitly wanted “আলো কী দিয়ে তৈরি” addressed.
3. L2 mirage visual/explanation clarified as refractive-index-gradient/progressive bending rather than a single hard mirror boundary.
4. L3 minimum concave/diverging-lens prerequisite added before myopia spectacles treatment.
5. L3 cornea recognized as the major initial focusing surface; crystalline lens fine-tunes through accommodation.
6. L4 eye-camera focusing comparison narrowed: shared function, different mechanism; no universal claim about all camera focusing designs.
7. Gemini kerosene/water numeric example **not adopted** because the specific values were not source-pinned in the review.

## Source reconciliation status

- `SI-11-001` spectacles outcome/body gap: VERIFIED_SOURCE_GAP / PARTIALLY_RESOLVED.
- `SI-11-002` normal-incidence nuance: RESOLVED.
- `SI-11-003` equal incident/emergent angle: RESOLVED as parallel-sided slab geometry dependent.
- `SI-11-004` film-camera chemistry: RESOLVED_WITH_CONTEXT_LABEL.
- `SI-11-005` mirage hard-boundary visualization risk: RESOLVED with gradient clarification.
- `SI-11-006` cornea/lens focusing roles: RESOLVED.
- `SI-11-007` eye-camera focusing analogy limit: RESOLVED.

## Chapter-wide QA

- G0 Input integrity: PASS_WITH_NOTES.
- G1 Curriculum/scope analysis: PASS.
- G2 Critical source verification: PASS_FOR_STORYBOARD; spectacles NCTB-body gap remains documented, not scientifically unresolved.
- G3 Scientific accuracy: PASS_FOR_STORYBOARD; slide-level wording/diagram verification still required before freeze.
- G4 Timing: PASS_FOR_STORYBOARD after Gate A refinements.
- G5 Pedagogy/cognitive load: PASS_FOR_STORYBOARD; must be rechecked at storyboard level.
- Coverage audit: MAPPED_TO_4_LESSONS.
- Duplication audit: no material duplication identified in Gate A.
- Cross-lesson continuity: PASS.

## Gemini cadence evidence

Gate A produced several useful targeted findings and at least one overgeneralized recommendation that required correction. This supports the current policy: Gemini is valuable as an independent reviewer at high-value gates, but findings must be independently validated rather than adopted automatically.

Gate B remains required after all four storyboards/resource mappings are complete and before content freeze.

## Next authorized action

1. Read `templates/STORYBOARD_TEMPLATE.md` before actual storyboard authoring.
2. Develop Lesson 1 storyboard from the reconciled plan.
3. Assign concrete slide IDs into `COVERAGE_MATRIX.md` as storyboard sections stabilize.
4. Continue Lessons 2–4 storyboards and trusted-resource mapping.
5. Run chapter-wide storyboard audit.
6. Run Gemini Gate B before content freeze.
7. Pass G1–G7, freeze content, then RT-01 and rendering.

Do not render final decks yet.
