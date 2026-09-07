# Lesson 2 Dynamic Implementation Manifest

Date: 2026-09-07
Status: **V2_INTERNAL_QA_PASS — USER_POWERPOINT_REVIEW_PENDING**
Lesson: `প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন`

## Principle

Lesson 2 v2 follows the Lesson 1 approved baseline and the new accuracy-enforcement workflow:

- Bangla-first textbook terminology;
- exact student-facing copy frozen before final build;
- staged duplicate-slide reveal states where they replace fragile animation;
- deterministic high-risk ray geometry;
- diagram contracts for apparent position / critical angle / full internal reflection;
- simulation links as FLEX only;
- PDF/static fallback remains meaningful.

## Slide-level dynamic implementation

| Physical slide(s) | Mode | Purpose | Static/PDF fallback |
|---:|---|---|---|
| 1-2 | PREDICT_THEN_REVEAL | retrieve bending direction, normal-incidence behavior, angle-from-normal rule | answer slide included |
| 3 | STATIC_INTENTIONAL | lesson roadmap | same |
| 4 | STATIC_EXPLANATORY | actual vs apparent position using two rays + backward extensions | complete diagram |
| 5 | STATIC_EXPLANATORY | distinguish real rays from dashed construction lines | complete diagram |
| 6 | LIVE_DEMO_CONTEXT / STATIC_FALLBACK | pencil/straw classroom demonstration | static visual included |
| 7 | STATIC_EXPLANATORY | coin visibility before/after water | before/after comparison |
| 8 | STATIC_EXPLANATORY | fish apparent depth using two rays + backward extensions | complete diagram |
| 9 | STATIC_EXPLANATORY | mirage as gradual atmospheric bending | complete gradient/multi-segment visual |
| 10-11 | PREDICT_THEN_REVEAL | increasing incidence angle toward the critical-angle condition | answer slide included |
| 12 | STATIC_EXPLANATORY | সংকট কোণ, `r = 90°`, reflected ray remains in incident medium | complete diagram |
| 13 | STATIC_EXPLANATORY | পূর্ণ অভ্যন্তরীণ প্রতিফলনের two conditions | complete diagram and rule boxes |
| 14-15 | PREDICT_THEN_REVEAL | classify `i<C`, `i=C`, `i>C` | answer diagrams included |
| 16 | STATIC_EXPLANATORY | optical fibre and repeated internal reflection | complete diagram |
| 17 | STATIC_EXPLANATORY | uses: endoscope and optical-fibre communication | complete slide |
| 18-19 | PREDICT_THEN_REVEAL | summary + final check | answer slide included |
| 20 | SIMULATION_LINKS | PhET primary and Physics Classroom alternate | CORE static diagrams remain complete |
| 21-22 | PRACTICE_REVEAL | textbook-style three-state classification practice | answer slide included |

## Native PowerPoint animation policy

No native PowerPoint animation is required in v2.

Reason:

- staged duplicate slides provide the same teaching value more reliably;
- PDF fallback remains useful;
- science-critical geometry is fixed and inspectable on every state.

## Simulation links

FLEX only:

1. `PhET Bending Light`
2. `Physics Classroom Refraction Interactive`

CORE does not depend on internet.

## Accuracy controls

Before v2 internal QA PASS:

- exact copy lock: PASS
- Bangla terminology lint: PASS
- lesson geometry contracts: PASS
- focused high-risk rendered review: PASS_WITH_USER_REVIEW_PENDING
- overflow test: PASS
- PDF fallback: PASS

## Visual-asset routing

No ChatGPT-native image generation was used for Lesson 2 v2.

High-risk science diagrams are deterministic. If a later polish pass requires more photorealistic physical/context visuals, use verified existing/Canva/external base assets while preserving the controlled scientific overlays.

## PowerPoint compatibility checklist

- [ ] User opens exact v2 PPTX in Microsoft PowerPoint without repair warning
- [ ] Staged reveal order feels natural
- [ ] Simulation links open
- [ ] PDF fallback remains readable
- [ ] User accepts high-risk diagram clarity

## User review gate

Lesson 2 v2 is not `CLASSROOM_READY` until the user confirms PowerPoint smoke test and visual acceptance.
