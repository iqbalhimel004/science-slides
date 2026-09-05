# New Chat Recovery Protocol

Version: 3.1
Last revised: 2026-09-05

## 1. Verify repository identity first

Authorized write repository:

`iqbalhimel004/science-slides`

Do not write to any other connected repository.

## 2. Mandatory recovery sequence for the FIRST pilot chapter

Read in this exact order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `FABLE_AUDIT_RECONCILIATION_2026-09-05.md`
4. `CLASSROOM_PROFILE.md`
5. `PROJECT_MASTER.md`
6. `WORKFLOW.md`
7. `SOURCE_POLICY.md`
8. `TOOL_ROUTING.md`
9. `QUALITY_GATES.md`
10. `SLIDE_STYLE_GUIDE.md`
11. `VISUAL_ENGAGEMENT_SYSTEM.md`
12. `DECISIONS.md`
13. relevant files under `templates/`

For the first pilot chapter, do **not** use the minimal-recovery shortcut. The objective is to carry forward every unresolved renderer/tool/typography/equation/workflow decision from the Fable audit reconciliation.

After the first pilot chapter is complete and those pending decisions are resolved, future chats may return to the compact recovery sequence defined in `OPERATING_BRIEF.md`.

## 3. Canonical-state rule

Use the repository as the source of truth. If an old conversation conflicts with current repository state, prefer the current repository unless the user explicitly overrides it.

## 4. Chapter scope

Default: one production chat handles one complete textbook chapter.

If context becomes operationally too large, do not rely on an ad-hoc conversational summary. Save the exact stage/status and required handoff state in GitHub before continuing in a new chat.

## 5. First chapter is also the pilot/calibration chapter

The first real chapter must evaluate, where applicable:

- Beautiful.ai vs Canva full-deck quality/workflow
- whether hybrid rendering is worth the complexity
- Bangla typography and conjunct reliability
- equation/chemistry notation workflow
- export fidelity and PDF fallback
- projector readability
- Hyperagent SVG/equation/QA usefulness
- NotebookLM usefulness on the actual supplied source
- Gemini review cadence/value
- source text-layer/OCR/vision reliability
- timing realism of CORE/FLEX/contingency
- which policy/template files are genuinely useful vs redundant

Do not lock long-term renderer/tool defaults before evidence from this pilot.

## 6. Chapter intake

If no chapter is active, wait for the user to provide the complete chapter PDF or ordered screenshots.

Then:

- verify chapter identity, edition/year if identifiable, completeness, page order and readability
- classify text layer: reliable / partial / scanned-image / screenshots
- do not silently infer missing/cropped/unreadable material
- analyze the complete visible chapter before lesson splitting
- verify important definitions/laws/formulas/units against the visible page/image when extraction is uncertain

## 7. First deliverable

Do **not** immediately generate slides.

First produce:

1. input-integrity result
2. full chapter analysis/concept map
3. definitions/laws/formulas/diagrams/activities/numericals/misconceptions inventory
4. instructional-load estimate
5. justified number of <=60-minute presentations
6. proposed CORE/FLEX/STRETCH boundaries and continuity between lessons

Obtain user approval of the split before final deck production.

## 8. Timing rule

For the current confirmed 60-minute requirement:

- CORE ~40–45 min
- FLEX ~5–10 min
- CORE + FLEX target ~50–55 min
- 5–10 min contingency remains unallocated
- STRETCH is appendix-only

Every question, student response, board-writing segment, media setup/debrief, activity and transition counts as time.

## 9. Renderer calibration requirement

Before the first final deck, run RT-01 using representative Bangla/science content in Beautiful.ai and Canva; add a fallback renderer only if needed.

Compare:

- Bangla conjuncts/mixed Bangla-English
- equations, subscripts/superscripts and symbols
- diagram labels
- visual quality
- editability
- export quality
- projector readability
- workflow time/friction

Record the result in `DECISIONS.md` and `CURRENT_STATE.md`.

## 10. End-of-stage handoff

Update as applicable:

- `CURRENT_STATE.md`
- active chapter `STATUS.md`
- chapter/lesson source/storyboard/QA/resource files
- `DECISIONS.md` for durable changes
- `FABLE_AUDIT_RECONCILIATION_2026-09-05.md` only if a pending pilot item is resolved or materially reclassified

The next chat must be able to continue from GitHub without needing the previous chat transcript.
