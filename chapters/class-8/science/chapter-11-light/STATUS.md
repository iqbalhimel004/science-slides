# Chapter Status — Class 8 Science, Chapter 11: আলো

- Class: 8
- Subject: Science (বিজ্ঞান)
- Chapter: 11 — আলো
- Current status: **GEMINI_GATE_B_TARGETED_BUNDLE_READY — EXTERNAL_RUN_PENDING**
- Last updated: 2026-09-06

## Durable workflow rules

- One-click external prompts only.
- Gemini reviews use fresh downloadable single-file bundles.
- Gate B is targeted implementation QA, not a second Gate A.
- Universal stage rule: **Finish → record → then continue.**

## Current production state

All four lesson plans, storyboards, resource maps and storyboard QA records exist. Coverage mapping and chapter-wide storyboard/resource/duplication audit are complete.

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 46 | 8 | 54 | 6 |

Chapter planned CORE + FLEX total: **206 minutes**.

## Gate A

Completed and reconciled. No material replan required.

Accepted corrections remain preserved in the storyboards, including phenomenon-first L1 sequencing, normal-incidence nuance, mirage gradient treatment, diverging-lens prerequisite, cornea/lens focusing clarification, spectacles source-gap label, film-camera context and eye-camera analogy limits.

## Chapter-wide audit

`CHAPTER_STORYBOARD_AUDIT.md`

Verdict:
**PASS_TO_GEMINI_GATE_B_WITH_TARGETED_NOTES**

No missing textbook-body topic or material duplication was identified.

## Gate B scope

Gate B reviews only new implementation-level risk:

- Gate-A regression;
- slide-level scientific drift;
- visual/diagram misconception risk;
- coverage/prerequisite/duplication;
- timing/cognitive load;
- resource/fallback risk;
- pre-freeze blockers.

Previously reconciled science should not be re-audited unless a current storyboard creates a new contradiction, omission, regression or misleading implementation.

Canonical targeted instructions:
`reviews/GEMINI_GATE_B_TARGETED_PROMPT.md`

## Current Gate B bundle

Filename:
`GEMINI_GATE_B_TARGETED_BUNDLE.md`

Manifest:
`reviews/GEMINI_GATE_B_BUNDLE_MANIFEST.md`

Fingerprint:
- size: `18,656 bytes`
- SHA-256: `3d4e7b78700399cf3baaa46693f21f1ef5a796057c7023a5d919c27b34145fa8`

Bundle is stale if any review-relevant canonical file changes before the external review.

## Next authorized action

1. User uploads the targeted Gate B bundle to Gemini.
2. User returns Gemini's full review text.
3. Save raw review in `reviews/`.
4. Independently validate all material new findings.
5. Record `ACCEPT / PARTIAL / REJECT` and implement only validated changes.
6. Checkpoint chapter state.
7. Run final G1–G7 and content freeze.
8. Then RT-01 → renderer choice → rendering/export/offline/projector QA.

Do not render final decks yet.
