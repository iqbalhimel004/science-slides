# Production Compatibility and Engagement Policy

Version: 1.2
Date: 2026-09-08
Status: **ACTIVE — MANDATORY FOR CLASSROOM-READY DECKS**

## Purpose

Ensure exact classroom artifacts are compatible, readable, engaging and resilient after rendering/export.

## PowerPoint compatibility gate

A PPTX is not classroom-ready merely because it is valid OpenXML, opens in LibreOffice, passes overflow checks or renders to PDF/PNG.

When Microsoft PowerPoint is available, test the exact user-facing PPTX:

1. open without repair/recovery warning;
2. verify editable text/shapes where expected;
3. verify hyperlinks/buttons;
4. verify staged reveal/native animation/media/interaction;
5. after any normalization/resave, retest affected behavior;
6. record exact artifact fingerprint and result.

Repair/recovery warning = hard FAIL.

If PowerPoint testing is unavailable, record `DELIVERY_COMPATIBILITY_PENDING`; do not claim a tested PASS.

## Normalization rule

LibreOffice or other resave/normalization may be used when needed, but it is not automatically safe for animation/transitions/media. Rerun affected playback/interaction QA after normalization.

## Dynamic-engagement gate

A concept-heavy lesson must not become static by accident.

Allowed implementation modes:

- `STATIC_INTENTIONAL`
- `STAGED_REVEAL`
- `PREDICT_THEN_REVEAL`
- `NATIVE_ANIMATION`
- `INTERACTIVE_NAVIGATION`
- `LIVE_DEMO`
- `SIMULATION`
- `VIDEO/ANIMATION_RESOURCE`

Preferred science-critical progression:

1. predict-then-reveal;
2. staged duplicate states;
3. deterministic diagram states;
4. native animation only when it materially improves learning and is testable.

## Simulation / interactive rule

Use interactive resources only when they teach something materially better than static explanation.

Each classroom-critical item needs:

- instructional purpose;
- prediction/observation prompt;
- planned setup/use time;
- debrief/check;
- verified source/link;
- static/offline fallback.

CORE must not depend on internet unless reliability is explicitly established.

## Visual/UI gate

Actual rendered deck must show:

- coherent subject identity;
- clear focal hierarchy;
- projector-readable text/labels;
- controlled density/whitespace;
- useful layout variety;
- purposeful large visuals;
- no decorative clutter or repeated generic cards dominating the lesson;
- no science drift introduced by polishing.

## Accessibility / multimodal gate

Critical meaning must not depend solely on color, motion or audio.

Check:

- strong contrast;
- line style/shape/text redundancy for critical color coding;
- essential labels readable without zoom;
- captions/transcript/teacher summary where important media meaning is audio/language-dependent;
- static/final state preserves essential animation meaning;
- no unnecessary flashing/distracting motion.

## PDF/static/offline gate

Verify separately:

- Bangla line breaks/glyphs;
- equations/symbols;
- image crops;
- diagram labels;
- links/QRs where applicable;
- media/simulation fallback;
- essential meaning survives in PDF/static form.

## Current first-pilot disposition

Historical wording requiring a new Lesson 1 rebuild before Lesson 2 is superseded by `CURRENT_STATE.md` and Production System v2.1.

Current state:

**Lesson 1 is completed/user-approved baseline and is preserved.**

Do not rebuild Lesson 1 merely to satisfy superseded first-pilot language. Future changes are targeted and evidence-driven.

## Production QA record

Record:

- exact PPTX/PDF filenames + SHA-256;
- PowerPoint open/repair/editability result;
- normalization/resave and retest status;
- dynamic implementation inventory;
- link/media/fallback status;
- projector/accessibility result;
- visual acceptance;
- science integrity after finishing/export.

## Classroom-ready hard stop

No `CLASSROOM_READY` if any applicable item remains unresolved:

- repair/recovery warning;
- untested essential playback/interaction where testing is available;
- projector-readability failure;
- essential color/audio/motion accessibility failure;
- missing PDF/static fallback;
- science drift after finishing/export;
- missing reproducibility record.

Canonical architecture: `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`.
