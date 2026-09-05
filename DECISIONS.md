# Durable Decisions

## D-001 — GitHub is canonical project memory
Decision: Use `iqbalhimel004/science-slides` as the durable source of truth. Chat history is temporary working context.

## D-002 — Absolute repository write boundary
Decision: Science Slides work may write only to `iqbalhimel004/science-slides`.

## D-003 — One chapter is the normal production scope
Decision: Default to one complete textbook chapter per production chat. If context becomes operationally too large, checkpoint the exact stage in GitHub before continuing in a new chat.

## D-004 — Lesson count follows full chapter analysis
Decision: Analyze the complete chapter before deciding presentation count. Split by instructional load and concept boundaries, not page count.

## D-005 — 60-minute architecture uses CORE/FLEX/contingency
Decision: For a 60-minute class, plan approximately 40–45 minutes CORE + 5–10 minutes FLEX, targeting 50–55 planned minutes and leaving 5–10 minutes unallocated contingency. STRETCH is appendix-only.

Reason: Avoid the earlier ambiguity where “50–55 planned + 5–10 buffer” could be misread as 55–65 total.

## D-006 — NCTB-first source hierarchy
Decision: NCTB textbook/curriculum/teacher guide is the primary syllabus authority. Established Bangladeshi sources may corroborate wording and explanation. Authoritative international sources may validate science and provide suitable resources.

## D-007 — Critical science is source-traceable
Decision: Important definitions, laws, formulas, units and syllabus-critical claims must not rely only on model memory when reliable source material exists.

## D-008 — Existing resources before custom generation
Decision: Search trusted existing simulations, animations, videos and diagrams before creating custom equivalents.

## D-009 — Renderer is chosen by calibration, not assumption
Decision: Beautiful.ai and Canva are both candidate full-deck renderers. Before the first final deck, compare them using RT-01 for Bangla, equations, labels, editability, export quality, projector readability and workflow friction. Record the resulting default/fallback after testing.

## D-010 — Canva may be full-deck or specialist
Decision: Canva may be used for full visual/diagram-heavy lessons or as a specialist for infographics, worksheets, posters, diagrams and bespoke visuals, depending on RT-01 and lesson needs.

## D-011 — Hyperagent is a specialist build/QA/interactive engine
Decision: Hyperagent may be used for programmatic SVG/equation assets, deterministic QA, resource/link checks, custom HTML/JS interaction and genuinely needed custom media. It is not the default pedagogy author and generated labelled scientific visuals require strict verification.

## D-012 — Gemini is an independent reviewer, not automatic authority
Decision: Gemini may review lesson decomposition, difficult science, misconception handling, exam-sensitive wording, missing coverage and targeted external research. Findings must be independently validated before canonical changes.

## D-013 — Chapter-wide final coverage audit is mandatory
Decision: After all lesson decks are complete, compare them back to the original chapter and classify every meaningful subsection as covered, supplementary, homework/self-study or intentionally omitted with reason.

## D-014 — Visual engagement is a first-class requirement
Decision: A deck must be visually attractive, modern, age-appropriate and attention-retaining while remaining scientifically rigorous and cognitively clear.

## D-015 — Attention management is segment/response based
Decision: Do not enforce a rigid 7–10-minute “attention span” timer. Instead, avoid long passive teacher-only stretches and normally end each major teaching segment with a meaningful student response. Roughly 10 minutes is a heuristic ceiling for unchanged passive exposition, not a biological rule.

## D-016 — Cognitive-load control is explicit
Decision: Control redundancy, decorative clutter, split attention and overloaded slides; segment complex material when needed.

## D-017 — Every nontrivial visual needs an instructional purpose
Decision: Storyboards classify visuals as Motivate, Explain, Compare, Locate, Sequence, Quantify, Predict, Practice or Summarize.

## D-018 — Motion must be pedagogically justified
Decision: Use animation/motion only to explain sequence, change, causality, direction, progressive construction or meaningful reveal. Important motion/interaction requires a static fallback.

## D-019 — Master visual system is calibrated from the first completed chapter
Decision: The first completed chapter establishes reusable typography, spacing, palette, subject cues, illustration style, equation/diagram treatment and slide families, informed by RT-01.

## D-020 — Actual classroom artifact must pass export/playback QA
Decision: A deck is not classroom-ready until the real delivery format has been checked for Bangla rendering, equations, crops, labels, links/QRs, media, animation and fallbacks.

## D-021 — Grade-level visual density is calibrated
Decision: Keep one project identity but tune density by grade: Class 8 more concrete/visual, Class 9 balanced, Class 10 slightly denser where justified.

## D-022 — Scanned/image source is a first-class intake case
Decision: Do not assume NCTB PDFs have reliable text. Classify text-layer status at intake; OCR may assist, but critical wording must be verified against the visible page/image when extraction is uncertain.

## D-023 — Compact recovery brief reduces stale-context risk
Decision: `OPERATING_BRIEF.md` is the primary new-chat recovery document, followed by `CURRENT_STATE.md` and the active chapter/lesson files. Deeper policy files are read only when needed.

## D-024 — Classroom-ready package includes a PDF fallback
Decision: GitHub storyboard/content is canonical. Every classroom-ready lesson should include the primary delivery deck plus a PDF fallback and static/offline fallbacks for critical online/animated elements.

## D-025 — Equations require a controlled fallback path
Decision: If the chosen renderer handles complex equations/chemistry notation unreliably, preserve the source expression in the storyboard and render through a controlled method such as LaTeX/MathJax to SVG/PNG, then visually verify the export.

## D-026 — Secondary proprietary wording should not be copied wholesale
Decision: Sources such as 10 Minute School may inform local wording/convention and explanation, but avoid unnecessary verbatim reuse of proprietary secondary-source prose. Keep source provenance and write original classroom explanations grounded in verified science.

## D-027 — Connected-tool reality overrides generic vendor assumptions
Decision: Tool-routing decisions must reflect the capabilities actually available in this workspace. Current verified state includes write-capable GitHub actions, connected Beautiful.ai presentation creation/export actions, and connected Canva presentation-generation/editing workflows.

## D-028 — Textbook editions are versioned source baselines, not overwritten
Decision: For each supplied current NCTB textbook, maintain a versioned `SOURCE_RECORD.md` containing class/subject/year/revision metadata, source links, working-copy fingerprint, pagination mapping and ingestion reliability. Do not overwrite the previous edition when a later textbook appears. Use edition-to-edition diff to identify affected chapters/decks.

Reason: This makes future maintenance reproducible and lets us update only slides whose source content changed.

## D-029 — Curriculum index + chapter coverage matrix provide edit traceability
Decision: Maintain a lightweight `CURRICULUM_INDEX.md` as the project-wide navigation/status layer. For every active/produced chapter, maintain `COVERAGE_MATRIX.md` mapping textbook topics/pages to lesson/slide coverage and `SOURCE_ISSUES.md` separating textbook wording from scientific assessment, verified clarification/correction and classroom treatment.

Reason: Future edits should be able to answer quickly: what the chapter contains, what was taught, where it appears in decks, what source issues exist, and exactly which artifacts are affected by a textbook change.

## D-030 — Do not commit full current textbooks to Git by default
Decision: Keep full textbook PDFs outside the Git repository by default. Store durable metadata, government/authorized source links where available, checksums of inspected working copies, page mappings and derived source records in GitHub. Commit the raw textbook only if there is a specific legal/storage/operational reason to do so.

Reason: Git should remain a maintainable project/source-traceability repository rather than a binary textbook archive.
