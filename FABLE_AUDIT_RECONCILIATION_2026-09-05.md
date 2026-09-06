# Fable 5.1 Audit Reconciliation — 2026-09-05

Purpose: preserve what the external Hyperagent/Fable 5.1 audit found, what this project accepted, what was rejected because it did not match the actual connected environment, and what remains to be tested during the first real chapter.

This file is not a blind adoption of the audit. Canonical project rules remain in `OPERATING_BRIEF.md`, `PROJECT_MASTER.md`, `WORKFLOW.md`, `SOURCE_POLICY.md`, `TOOL_ROUTING.md`, `QUALITY_GATES.md`, `DECISIONS.md`, and `CURRENT_STATE.md`.

## Executive outcome

External audit verdict: **MATERIAL REVISION RECOMMENDED**.

Project response: **validated findings adopted selectively; environment-mismatched claims rejected; first-pilot renderer/typography evidence now materially resolves several previously pending items.**

The first completed chapter remains the calibration pilot. RT-01 has now tested real Bangla rendering, notation, editability, export behaviour, projector readability and renderer drift before final deck production.

## Finding-by-finding reconciliation

| Fable finding | Project disposition | Current status / implementation |
|---|---|---|
| F-01 timing arithmetic contradiction | **ACCEPTED, corrected** | 60-minute requirement is confirmed by the user. Plan now uses CORE ~40–45 + FLEX ~5–10 = 50–55 planned minutes, leaving 5–10 unallocated contingency. STRETCH is appendix-only. |
| F-02 scanned/image PDF intake risk | **PARTIALLY ACCEPTED; FIRST-PILOT EVIDENCE OBTAINED** | Do not assume every NCTB PDF is scanned. The actual 2026 Class 8 Science source was tested and is image/scanned with unreliable/absent native extraction. Raw PDF inspection reports 162 pages while the ChatGPT file-ingestion layer exposed 150; visible rendering plus raw preflight is therefore authoritative for this source. |
| F-03 ChatGPT cannot maintain GitHub | **REJECTED for this environment** | This ChatGPT workspace has a connected write-capable GitHub integration. Writes remain allowed only to `iqbalhimel004/science-slides`. Hyperagent is not made the exclusive repo writer. |
| F-04 Bangla typography unspecified | **ACCEPTED; RT-01 MATERIAL EVIDENCE OBTAINED** | RT-01 shows visually acceptable Bangla is achievable, but native AI renderer text layers/portability are inconsistent. Final decks will use a controlled PptxGenJS font stack and actual export QA rather than depend on vendor-native font handling. |
| F-05 equation/subscript/superscript method missing | **ACCEPTED; RT-01 REFINED** | Simple Unicode notation may remain native only after export verification. RT-01 exposed escaped `<`/`>` in Beautiful.ai while `10⁸`, `H₂O`, `Na₂S₂O₃` survived. Complex/renderer-sensitive notation uses controlled LaTeX/MathJax/SVG/PNG fallback. |
| F-06 canonical classroom artifact undecided | **PARTIALLY ACCEPTED; PRIMARY ROUTE NOW RESOLVED** | GitHub storyboard/content remains canonical. Primary production is controlled PPTX; direct PPTX + verified PDF is the classroom delivery/fallback route. Optional Canva finishing may be used after controlled import. PDF remains mandatory fallback. |
| F-07 edition/exam format not pinned | **PARTIALLY ACCEPTED; FIRST SOURCE NOW PINNED** | The 2026 Class 8 Science baseline is versioned with revision metadata, page mapping and checksum. Exam-format practice remains contextual rather than forced into every lesson. |
| F-08 Tier-2 source role/copyright ambiguity | **ACCEPTED** | Tier 2 (e.g. 10 Minute School) is for local wording/convention, examples and explanation ideas; it does not independently validate scientific truth. Avoid unnecessary verbatim proprietary copying. Tier 3 supports scientific validation. |
| F-09 documentation duplication/stale risk | **ACCEPTED IN PRINCIPLE; PARTIAL CLEANUP COMPLETE** | `OPERATING_BRIEF.md` is now the compact recovery entry point. Full merge/delete of older policy files remains deferred until first-pilot production completes. New curriculum/coverage files are deliberately navigation/traceability layers. |
| F-10 one-chat-one-chapter vs context reality | **PARTIALLY ACCEPTED** | One complete chapter remains the normal production scope per user preference. If context becomes impractically large, checkpoint exact state in GitHub and continue in a new chat. Stage-scoped chats are fallback, not mandatory architecture. |
| F-11 Beautiful.ai default based on unverified assumptions | **ACCEPTED; RESOLVED BY RT-01** | Beautiful.ai is connected and was tested. It produced cleaner standard layouts than native Canva, but omitted the required critical-angle diagram, escaped `<`/`>` notation, rewrote verified wording with material drift, and introduced font portability dependence. It is **not** the unattended science full-deck renderer. |
| F-12 Canva Education/trial dependency | **PENDING USER/ACCOUNT VERIFICATION** | Canva is connected. RT-01 shows native Canva AI is not the default science authoring route, but Canva remains useful as the controlled-import finishing/editing/hosting environment. Education entitlement is not required for the core architecture. |
| F-13 Hyperagent underused/misrouted | **ACCEPTED IN PART** | Hyperagent role remains programmatic SVG/equation assets, deterministic QA, link/resource checks, custom HTML/JS interaction and genuine media gaps. Controlled PptxGenJS now covers the default deck authoring route; Hyperagent remains specialist rather than mandatory. |
| F-14 pedagogy missing retrieval/hinge/exit/refutation | **ACCEPTED IN CORE FORM** | Retrieval/prior knowledge, meaningful student response, hinge/check where useful, guided practice, misconception correction and exit check are part of the lesson spine. |
| F-15 rigid 7–10 min attention-reset heuristic weakly grounded | **ACCEPTED** | Replaced with segment/response logic: avoid long passive teacher-only stretches; roughly 10 min is only a heuristic ceiling for unchanged exposition, not a biological attention-span rule. |
| F-16 no numeric visual baselines | **PARTIALLY RESOLVED BY RT-01; FINAL VALUES PENDING LESSON 1** | RT-01 clearly rejects projector-small body/table text and decorative layouts that sacrifice hierarchy. Exact reusable numeric font/density baselines will be set from the first controlled Lesson 1 build/render. |
| F-17 chapter paths/artifact storage/templates inconsistent | **PARTIALLY RESOLVED BY PILOT** | Real workflow has instantiated chapter/source/coverage paths. RT-01 now establishes controlled PPTX + PDF delivery architecture; final artifact folder naming still awaits first lesson output. |
| F-18 Gemini review scope unbounded | **RESOLVED FOR FIRST-PILOT CADENCE** | Gate A and targeted Gate B both completed. Gate B was explicitly narrowed to implementation risk, not a second full science review. No further Gemini planning review is required unless production introduces a material regression. |
| F-19 video excerpt wording/ToS risk | **ACCEPTED** | Do not create unauthorized downloaded excerpts. Prefer timestamped source segments/legal embeds and static fallback for classroom-critical online media. |
| F-20 stale branch / branch policy | **LOW PRIORITY / PENDING** | Not required before first chapter. Do not delete branches solely for neatness without confirming no value remains. |
| F-21 quality-priority order missing | **ACCEPTED** | Priority is: scientific/source accuracy → pedagogical clarity & cognitive load → realistic timing → attention/visual engagement → polish. |
| F-22 multi-account Hyperagent promo assumptions | **ACCEPTED AS CAUTION** | Do not architect the workflow around uncertain promo terms or multi-account assumptions. Use Hyperagent where it materially improves output; account/credit terms remain external uncertainty. |
| F-23 curriculum index metadata thin | **RESOLVED FOR 2026 CLASS 8 SCIENCE BASELINE** | `CURRICULUM_INDEX.md` is populated from the supplied 2026 Class 8 Science source, with chapter titles, printed page ranges, production status and traceability records. |

## What was explicitly rejected/corrected from the audit

1. **ChatGPT GitHub write limitation** — not applicable here. The connected GitHub integration exposes write actions in this workspace.
2. **No ChatGPT ↔ Beautiful.ai integration** — not applicable here. Beautiful.ai is connected and exposes presentation creation/review/export capabilities.
3. **Canva only as an asset tool** — not adopted. Canva is useful as a controlled-import finishing/editing environment, though RT-01 rejects native Canva AI as the default science authoring route.
4. **Stage-scoped chats must replace one-chat-one-chapter** — not adopted as the default. User preference remains one chapter per normal production chat, with GitHub checkpoint fallback if context becomes too large.
5. **PDF as the sole canonical artifact** — not adopted. GitHub source/storyboard is canonical; controlled PPTX is the primary delivery source and PDF is mandatory fallback.
6. **Universal claims about all NCTB PDFs being scanned** — not adopted as a blanket rule. Each supplied source is classified at intake.

## Accepted improvements now reflected in the project

- corrected 60-minute arithmetic using CORE/FLEX/contingency
- compact `OPERATING_BRIEF.md` recovery path
- scanned/image-source classification and visible-page verification of critical wording
- evidence-based renderer selection
- RT-01 Bangla/science renderer calibration
- controlled PptxGenJS primary production route
- Canva controlled-import finishing route
- direct PPTX + mandatory PDF fallback
- controlled equation-rendering fallback
- stronger Tier-2/Tier-3 separation
- expanded Hyperagent build/QA/interactive role
- retrieval → response/hinge → practice → exit pedagogy spine
- segment/response attention-management rule
- source/video licensing discipline
- explicit project quality-priority order
- versioned textbook source records and edition fingerprints
- curriculum index + chapter coverage/source-issue traceability
- explicit Gemini Gate A/targeted Gate B cadence with independent reconciliation

## Pending items that the first pilot chapter should resolve

### P0 — resolve during/just before first final deck

1. **RT-01 renderer calibration: RESOLVED.** Controlled PptxGenJS is primary; Canva controlled import is optional finishing; Beautiful.ai/native Canva AI are not unattended science full-deck renderers.
2. **Default renderer decision: RESOLVED.** See `D-036` and `RT01_RENDERER_CALIBRATION_2026-09-06.md`.
3. **Bangla typography: PARTIALLY RESOLVED.** Controlled font stack/export QA required; exact reusable font baseline to be set from Lesson 1 production.
4. **Equation/chemistry notation path: RESOLVED IN PRINCIPLE.** Simple Unicode after export verification; complex/renderer-sensitive notation uses controlled SVG/LaTeX fallback.
5. **Primary classroom delivery format: RESOLVED.** Controlled PPTX + verified PDF fallback; Canva may host/finish after controlled import.
6. **Actual source ingestion behaviour: RESOLVED FOR THE 2026 CLASS 8 SCIENCE WORKING COPY.** Image/scanned; visible rendered pages authoritative for critical wording.
7. **Classroom profile:** fill actual projector/device/internet/audio/phone constraints when the user provides them.

### P1 — evaluate from the first chapter workflow

8. **Canva full-deck workflow quality: MATERIALLY RESOLVED.** Native AI rejected as default; controlled import retained for finishing.
9. **Beautiful.ai full-deck workflow quality: RESOLVED.** Not unattended science renderer; low-risk prototype role only.
10. **Hybrid workflow value: PARTIALLY RESOLVED.** Controlled PPTX → Canva import is retained as optional finishing; Lesson 1 will show whether finishing adds enough value to justify routine use.
11. Hyperagent programmatic SVG/equation/QA value versus added workflow overhead.
12. **Chapter/source folder convention: PARTIALLY RESOLVED.** Final artifact/export folder naming awaits first production deck.
13. Numeric visual baselines based on actual controlled Lesson 1 render/projector inspection.
14. **Gemini review cadence: RESOLVED FOR FIRST-PILOT PLANNING.** Gate A + targeted Gate B complete; no more planning review unless production regression appears.
15. NotebookLM role: optional vs high-value for long/dense chapters after real source testing.

### P2 — after classroom use

16. Compare estimated vs actual teaching time.
17. Record which slide types held attention and which caused confusion.
18. Record resource/link/media failures.
19. Calibrate future CORE/FLEX estimates and visual density.
20. Lock the reusable master theme only after Lesson 1–4 production and classroom evidence exist.

## First-chapter pilot success criteria

The first chapter is successful if it produces enough evidence to answer:

- Which renderer/tool route gives the best Bangla/science result with the least unacceptable risk? **RT-01 answer: controlled PptxGenJS primary, Canva controlled finishing optional.**
- Which tool combination produces the best visual quality without sacrificing scientific control?
- Which equation/diagram workflow is reliable?
- Is the 50–55 planned-minute model realistic in the user's classroom?
- Which external-resource strategy works offline/under real connectivity?
- Which QA checks catch real errors versus create unnecessary overhead?
- Which parts of the current documentation/templates are actually useful and which can be safely consolidated?

After the pilot, update `DECISIONS.md`, `CURRENT_STATE.md`, tool routing and design rules from evidence rather than vendor assumptions.
