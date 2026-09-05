# New Chat Recovery Protocol

Use this file whenever a new chat starts work on the Science Slides project.

## 1. Verify repository identity first

Authorized write repository:

`iqbalhimel004/science-slides`

Do not write to any other connected repository.

## 2. Recover canonical project state

Read, in order:

1. `AGENTS.md`
2. `PROJECT_MASTER.md`
3. `CURRENT_STATE.md`
4. `WORKFLOW.md`
5. `SOURCE_POLICY.md`
6. `QUALITY_GATES.md`
7. `SLIDE_STYLE_GUIDE.md`
8. `VISUAL_ENGAGEMENT_SYSTEM.md`
9. `TOOL_ROUTING.md`
10. `DECISIONS.md`

Read `PLAN_AUDIT_2026-09-05.md` when reviewing or changing the master workflow/design system.

Then read only the files for the active chapter/lesson identified in `CURRENT_STATE.md`.

## 3. Do not reconstruct state from old chat history

Use the repository as the source of truth. If an old conversation conflicts with current repository state, treat the repository as authoritative unless the user explicitly instructs otherwise.

## 4. One chat = one chapter

A production chat should handle one complete chapter from intake through lesson split, lesson/deck production, QA, and chapter-level completion. Do not mix unrelated chapters unless the user explicitly requests it.

## 5. Chapter intake requirement

If the active chapter has not yet been ingested, wait for the user to provide the complete chapter PDF or ordered screenshots. Then perform input integrity checks before content planning.

## 6. Visual-engagement requirement

Do not treat attractiveness as optional polish. Apply the visual-engagement system during storyboard and rendering:

- clear focal hierarchy
- age-appropriate modern UI
- controlled cognitive load
- meaningful visual variety
- purposeful attention resets where useful
- visual-purpose classification
- restrained pedagogical motion
- static fallbacks for core interactive/online media
- grade-level density calibration

## 7. Final artifact requirement

Do not call a lesson classroom-ready solely from the editor preview. Validate the actual delivery artifact/playback for Bangla rendering, equations, labels, links/QRs, crops, media, contrast, and projector usability.

## 8. End-of-chat handoff

Before a chapter chat is considered safely handed off, update:

- `CURRENT_STATE.md`
- the chapter `STATUS.md`
- chapter/lesson QA files as applicable
- `DECISIONS.md` for durable new decisions
- any source/resource records affected by the work
- any approved master-theme/design-system changes

The next chat should be able to continue from repository state without needing a summary copied from the previous chat.
