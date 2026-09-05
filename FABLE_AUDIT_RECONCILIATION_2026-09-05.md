# Fable 5.1 Audit Reconciliation — 2026-09-05

Purpose: preserve what the external Hyperagent/Fable 5.1 audit found, what this project accepted, what was rejected because it did not match the actual connected environment, and what remains to be tested during the first real chapter.

This file is not a blind adoption of the audit. Canonical project rules remain in `OPERATING_BRIEF.md`, `PROJECT_MASTER.md`, `WORKFLOW.md`, `SOURCE_POLICY.md`, `TOOL_ROUTING.md`, `QUALITY_GATES.md`, `DECISIONS.md`, and `CURRENT_STATE.md`.

## Executive outcome

External audit verdict: **MATERIAL REVISION RECOMMENDED**.

Project response: **validated findings adopted selectively; environment-mismatched claims rejected; several tool/renderer decisions intentionally left pending until the first real chapter provides evidence.**

The first completed chapter is therefore also a **pilot/calibration chapter**. It will test the actual production chain, Bangla rendering, equations, editability, export reliability, classroom usability and tool friction before a permanent default combination is locked.

## Finding-by-finding reconciliation

| Fable finding | Project disposition | Current status / implementation |
|---|---|---|
| F-01 timing arithmetic contradiction | **ACCEPTED, corrected** | 60-minute requirement is confirmed by the user. Plan now uses CORE ~40–45 + FLEX ~5–10 = 50–55 planned minutes, leaving 5–10 unallocated contingency. STRETCH is appendix-only. |
| F-02 scanned/image PDF intake risk | **PARTIALLY ACCEPTED** | Do not assume any supplied NCTB PDF has a reliable text layer. Classify each actual source. OCR may assist, but critical wording is verified against the visible page/image. The universal claim that every NCTB PDF is scanned is not treated as a project fact. |
| F-03 ChatGPT cannot maintain GitHub | **REJECTED for this environment** | This ChatGPT workspace has a connected write-capable GitHub integration. Writes remain allowed only to `iqbalhimel004/science-slides`. Hyperagent is not made the exclusive repo writer. |
| F-04 Bangla typography unspecified | **ACCEPTED; TEST PENDING** | RT-01 renderer calibration is required before locking a default renderer. Bangla conjuncts, mixed Bangla/English, labels, export and projector rendering must be tested. Exact final font stack remains a calibration decision. |
| F-05 equation/subscript/superscript method missing | **ACCEPTED; IMPLEMENTED AS FALLBACK POLICY** | Preserve source expression in storyboard; if renderer is unreliable, use controlled LaTeX/MathJax → SVG/PNG and visually verify. Final preferred method depends on RT-01/first chapter. |
| F-06 canonical classroom artifact undecided | **PARTIALLY ACCEPTED** | GitHub storyboard/content remains canonical source of truth. Every classroom-ready lesson requires a PDF fallback. Primary delivery format remains pending renderer calibration; PDF is not the editable source of truth. |
| F-07 edition/exam format not pinned | **PARTIALLY ACCEPTED** | Edition/year and source page are now pinned where identifiable. Exam-format practice should be aligned when relevant, but no rigid rule forces the same CQ/MCQ pattern into every lesson regardless of subject/grade/pedagogical need. |
| F-08 Tier-2 source role/copyright ambiguity | **ACCEPTED** | Tier 2 (e.g. 10 Minute School) is for local wording/convention, examples and explanation ideas; it does not independently validate scientific truth. Avoid unnecessary verbatim proprietary copying. Tier 3 supports scientific validation. |
| F-09 documentation duplication/stale risk | **ACCEPTED IN PRINCIPLE; PARTIAL CLEANUP COMPLETE** | `OPERATING_BRIEF.md` is now the compact recovery entry point. Full merge/delete of older policy files is intentionally pending until the first pilot proves no useful rule would be lost. |
| F-10 one-chat-one-chapter vs context reality | **PARTIALLY ACCEPTED** | One complete chapter remains the normal production scope per user preference. If context becomes impractically large, checkpoint exact state in GitHub and continue in a new chat. Stage-scoped chats are fallback, not mandatory architecture. |
| F-11 Beautiful.ai default based on unverified assumptions | **ACCEPTED; generic connector claim rejected** | Beautiful.ai is actually connected in this workspace. It is now a candidate full-deck renderer, not permanently default. RT-01 decides based on real Bangla/science output. |
| F-12 Canva Education/trial dependency | **PENDING USER/ACCOUNT VERIFICATION** | Canva is connected and is a viable full-deck renderer plus specialist visual tool. Canva for Education eligibility/status should be verified separately; the project must not depend on an unverified entitlement. |
| F-13 Hyperagent underused/misrouted | **ACCEPTED IN PART** | Hyperagent role expanded to programmatic SVG/equation assets, deterministic QA, link/resource checks, custom HTML/JS interaction and genuine media gaps. It is not the default pedagogy author or exclusive GitHub writer. AI-labelled scientific diagrams still require strict verification/redraw. |
| F-14 pedagogy missing retrieval/hinge/exit/refutation | **ACCEPTED IN CORE FORM** | Retrieval/prior knowledge, meaningful student response, hinge/check where useful, guided practice, misconception correction and exit check are now part of the lesson spine. Exam-format/CQ elements are contextual rather than forced into every lesson. |
| F-15 rigid 7–10 min attention-reset heuristic weakly grounded | **ACCEPTED** | Replaced with segment/response logic: avoid long passive teacher-only stretches; roughly 10 min is only a heuristic ceiling for unchanged exposition, not a biological attention-span rule. |
| F-16 no numeric visual baselines | **PENDING PILOT CALIBRATION** | The first chapter/RT-01 will establish practical font sizes, density, spacing and projector-safe baselines using actual renderer/export/projector behaviour. Do not lock arbitrary numbers before testing. |
| F-17 chapter paths/artifact storage/templates inconsistent | **PARTIALLY PENDING** | Existing templates remain usable. Exact chapter folder and artifact convention will be instantiated with the first real chapter, then standardized based on actual workflow friction. |
| F-18 Gemini review scope unbounded | **PARTIALLY ACCEPTED** | Gemini is a targeted independent reviewer/research layer at high-value gates, not a duplicate author. Do not force expensive duplicate review when risk is low. Exact cadence is chapter-dependent. |
| F-19 video excerpt wording/ToS risk | **ACCEPTED** | Do not create unauthorized downloaded excerpts. Prefer timestamped source segments/legal embeds and static fallback for classroom-critical online media. |
| F-20 stale branch / branch policy | **LOW PRIORITY / PENDING** | Not required before first chapter. Do not delete branches solely for neatness without confirming no value remains. |
| F-21 quality-priority order missing | **ACCEPTED** | Priority is: scientific/source accuracy → pedagogical clarity & cognitive load → realistic timing → attention/visual engagement → polish. |
| F-22 multi-account Hyperagent promo assumptions | **ACCEPTED AS CAUTION** | Do not architect the workflow around uncertain promo terms or multi-account assumptions. Use Hyperagent where it materially improves output; account/credit terms remain external uncertainty. |
| F-23 curriculum index metadata thin | **PARTIALLY PENDING** | Add/standardize subject, class, chapter and edition metadata as real chapters are ingested; avoid speculative bulk population before sources are supplied. |

## What was explicitly rejected/corrected from the audit

1. **ChatGPT GitHub write limitation** — not applicable here. The connected GitHub integration exposes write actions in this workspace.
2. **No ChatGPT ↔ Beautiful.ai integration** — not applicable here. Beautiful.ai is connected and exposes presentation creation/review/export capabilities.
3. **Canva only as an asset tool** — not adopted. Canva is also a candidate full-deck renderer because the connected Canva integration supports presentation workflows.
4. **Stage-scoped chats must replace one-chat-one-chapter** — not adopted as the default. User preference remains one chapter per normal production chat, with GitHub checkpoint fallback if context becomes too large.
5. **PDF as the sole canonical artifact** — not adopted. GitHub source/storyboard is canonical; PDF is mandatory fallback/archival output, while primary delivery format depends on real renderer calibration.
6. **Universal claims about all NCTB PDFs being scanned** — not adopted as a blanket rule. Each supplied source is classified at intake.

## Accepted improvements now reflected in Plan v3.0

- corrected 60-minute arithmetic using CORE/FLEX/contingency
- compact `OPERATING_BRIEF.md` recovery path
- `CLASSROOM_PROFILE.md` for unknown classroom facts instead of guessing
- scanned/image-source classification and visible-page verification of critical wording
- conditional renderer selection rather than vendor assumption
- RT-01 Bangla/science renderer calibration
- PDF/static fallback policy
- controlled equation-rendering fallback
- stronger Tier-2/Tier-3 separation
- expanded Hyperagent build/QA/interactive role
- retrieval → response/hinge → practice → exit pedagogy spine
- segment/response attention-management rule
- source/video licensing discipline
- explicit project quality-priority order

## Pending items that the first pilot chapter should resolve

### P0 — resolve during/just before first final deck

1. **RT-01 renderer calibration:** same representative Bangla/science content in Beautiful.ai and Canva; optionally a practical fallback renderer if needed.
2. **Default renderer decision:** Beautiful.ai vs Canva vs conditional routing by lesson type.
3. **Bangla typography:** final reliable font choices, conjunct rendering and export behaviour.
4. **Equation/chemistry notation path:** determine which content can remain native and when SVG fallback is required.
5. **Primary classroom delivery format:** live/native deck vs exported format; PDF remains mandatory fallback.
6. **Actual source ingestion behaviour:** test the first real chapter PDF for text layer/OCR/vision reliability; test NotebookLM only if useful.
7. **Classroom profile:** fill actual projector/device/internet/audio/phone constraints when the user provides them.

### P1 — evaluate from the first chapter workflow

8. Canva full-deck workflow quality and friction.
9. Beautiful.ai full-deck workflow quality and friction.
10. Whether hybrid Canva assets inside another renderer improve output enough to justify complexity.
11. Hyperagent programmatic SVG/equation/QA value versus added workflow overhead.
12. Exact chapter-folder/template convention based on real files produced.
13. Numeric visual baselines (font sizes, density, spacing) based on actual projection/export.
14. Gemini review cadence that gives useful independent findings without duplicating work.
15. NotebookLM role: optional vs high-value for long/dense chapters after real source testing.

### P2 — after classroom use

16. Compare estimated vs actual teaching time.
17. Record which slide types held attention and which caused confusion.
18. Record resource/link/media failures.
19. Calibrate future CORE/FLEX estimates and visual density.
20. Lock the reusable master theme and renderer-routing defaults only after evidence exists.

## First-chapter pilot success criteria

The first chapter is not only a content deliverable. It is successful if it produces enough evidence to answer:

- Which renderer gives the best Bangla/science result with the least friction?
- Which tool combination produces the best visual quality without sacrificing scientific control?
- Which equation/diagram workflow is reliable?
- Is the 50–55 planned-minute model realistic in the user's classroom?
- Which external-resource strategy works offline/under real connectivity?
- Which QA checks catch real errors versus create unnecessary overhead?
- Which parts of the current documentation/templates are actually useful and which can be safely consolidated?

After the pilot, update `DECISIONS.md`, `CURRENT_STATE.md`, tool routing and design rules from evidence rather than vendor assumptions.
