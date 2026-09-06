# Dynamic Implementation Manifest — Template

Lesson:
Date:
Build version:
Status: DRAFT / IMPLEMENTED / QA_PASS

## Purpose

Record every intentional dynamic teaching element so production/rebuilds do not silently flatten the lesson into a static deck.

## Dynamic implementation table

| Slide/segment | Mode | Instructional purpose | Implementation | PowerPoint dependency | Static/offline fallback | QA |
|---|---|---|---|---|---|---|
| Example | STAGED_REVEAL | progressive construction | duplicate slide states | low | final static state | pending |

Allowed modes:

- `STATIC_INTENTIONAL`
- `STAGED_REVEAL`
- `PREDICT_THEN_REVEAL`
- `NATIVE_ANIMATION`
- `INTERACTIVE_NAVIGATION`
- `LIVE_DEMO`
- `SIMULATION`
- `VIDEO/ANIMATION_RESOURCE`

## Native animation inventory

For each native animation, record:

- slide ID;
- object/element;
- trigger/order;
- purpose;
- PowerPoint playback QA result;
- behavior after any normalization/resave.

If none, write `NONE`.

## Staged reveal inventory

List each sequence and the intended order of states.

## Hyperlink / button / navigation inventory

Record:

- source slide;
- target URL/slide;
- purpose;
- tested result;
- fallback.

## Simulation / video / interactive resources

For each resource record:

- target slide;
- official source;
- purpose;
- student prediction/observation prompt;
- planned time;
- link/button/QR status;
- licensing/attribution note;
- static/offline fallback;
- post-resource debrief/check.

## Static-intentional rationale

For important concept slides that remain static, briefly state why static presentation is pedagogically preferable.

## Final QA

- [ ] no storyboard-planned dynamic element was accidentally omitted
- [ ] PowerPoint playback tested where applicable
- [ ] post-normalization/resave playback retested where applicable
- [ ] links/buttons tested
- [ ] simulation/video launch tested
- [ ] static/offline fallbacks usable
- [ ] PDF preserves essential meaning without animation
- [ ] dynamic effects are instructional, not decorative

Canonical policy:
`PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
