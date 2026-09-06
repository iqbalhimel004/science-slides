# Lesson 2 Dynamic Implementation Manifest

Date: 2026-09-06
Status: **BUILT_INTERNAL_QA_PASS — USER_SMOKE_TEST_PENDING**
Lesson: `প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন`

## Principle

Lesson 2 follows the Lesson 1 approved baseline:

- Bangla-first textbook terminology;
- attractive dark physics/light visual identity;
- staged duplicate-slide reveal states where they replace fragile animation;
- deterministic science diagrams for ray geometry;
- realistic/recognizable physical cues where useful;
- simulation links as FLEX only;
- PDF/static fallback remains meaningful.

## Slide-level dynamic plan implemented

| Physical slide(s) | Lesson code | Mode | Purpose | Static/PDF fallback |
|---:|---|---|---|---|
| 1-2 | L2-S01 | PREDICT_THEN_REVEAL | retrieve normal, bending direction, angle-from-normal rule | answer slide included |
| 3 | L2-S02 | STATIC_EXPLANATORY | actual vs apparent position introduction | complete ray construction |
| 4 | L2-S03 | STATIC_EXPLANATORY | solid actual ray vs dashed backward construction | complete labelled diagram |
| 5 | L2-S04 | LIVE_DEMO_CONTEXT / STATIC_FALLBACK | pencil/stick apparent bending | static classroom fallback diagram |
| 6 | L2-S05 | STATIC_EXPLANATORY | coin visibility/apparent shallower position | complete ray diagram |
| 7 | L2-S06 | STATIC_EXPLANATORY | fish apparent depth | complete ray diagram |
| 8 | L2-S07 | STATIC_EXPLANATORY | mirage as gradient bending, not hard mirror boundary | gradient road visual + curved ray path |
| 9-10 | L2-S08 | PREDICT_THEN_REVEAL | increasing incidence angle in denser-to-rarer path | answer slide included |
| 11 | L2-S09 | STATIC_EXPLANATORY | critical angle, r=90°, reflected ray present | complete diagram |
| 12 | L2-S10 | STATIC_EXPLANATORY | two TIR conditions | complete diagram and rule boxes |
| 13-14 | L2-S11 | PREDICT_THEN_REVEAL | classify i<C, i=C, i>C | answer slide included |
| 15-16 | L2-S12 | STATIC_EXPLANATORY | optical fibre and repeated TIR | cutaway/zigzag ray fallback |
| 17 | L2-S13 | STATIC_EXPLANATORY | uses: endoscope and data transmission | complete slide |
| 18-19 | L2-S14 | PREDICT_THEN_REVEAL | summary + exit answer | answer slide included |
| 20 | L2-F01 | SIMULATION_LINKS | PhET primary and Physics Classroom alternate | CORE static diagrams remain complete |
| 21-22 | L2-F02 | PRACTICE_REVEAL | textbook-style TIR classification practice | answer slide included |

## Native animation policy

No native PowerPoint animation is required in this build.

Reason:
- all dynamic teaching moves are handled through staged duplicate slides;
- this preserves PDF usefulness and reduces PowerPoint compatibility risk;
- science-critical ray geometry remains deterministic on each state.

## Simulation links

FLEX only:

1. PhET Bending Light
2. The Physics Classroom Refraction Interactive

CORE does not depend on internet.

## Visual-asset routing

No new ChatGPT-native image generation was used for Lesson 2.

The deck uses controlled PptxGenJS/SVG-style deterministic diagrams with realistic visual cues. Future physical-object base assets that require true photorealism should use `VISUAL_ASSET_ROUTING.md`: verified existing asset or connected Canva/Canva AI first, then controlled science overlays.

## PowerPoint compatibility checklist

- [ ] User opens exact PPTX in Microsoft PowerPoint without repair warning
- [ ] Staged reveal order feels natural
- [ ] Simulation links open
- [ ] PDF fallback remains readable

## User review gate

Lesson 2 is not `CLASSROOM_READY` until the user confirms PowerPoint smoke test and visual acceptance.
