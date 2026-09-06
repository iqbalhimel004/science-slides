# Simulation and Interactive Resource Routing

Version: 1.0
Date: 2026-09-06
Status: **ACTIVE — MULTI-SOURCE, NOT PHET-ONLY**

## Purpose

Prevent the project from treating any single simulation provider as the automatic default. PhET is a strong resource, but it is only one candidate among several reputable simulation/interactive ecosystems.

The selection principle is:

> **Choose the best verified resource for the specific concept, class level, classroom conditions and teaching objective — not the most familiar brand.**

## Core rule

For every lesson concept where a simulation/interactive could materially improve learning:

1. search multiple reputable providers when practical;
2. compare the most relevant candidates;
3. choose the resource that best fits the exact learning objective;
4. record why it was selected;
5. keep a static/offline fallback for classroom-critical use;
6. do not make CORE learning depend on internet unless classroom reliability is explicitly confirmed.

No provider receives permanent first priority merely because it was used earlier.

## Preferred candidate pool

The following are reputable starting points, subject to per-resource verification:

### PhET Interactive Simulations

Strengths:
- research-based educational simulations;
- strong visual design and learner interaction;
- broad physics/chemistry coverage;
- regular HTML simulations licensed CC BY-NC 4.0 for non-commercial use with attribution;
- many simulations have practical classroom/offline support.

Use when:
- the simulation closely matches the lesson objective;
- the interface is age-appropriate;
- its variables/visual model are simpler or clearer than alternatives.

### The Physics Classroom — Physics Interactives

Strengths:
- dedicated physics interactives;
- strong alignment with classroom questioning and concept-checking;
- refraction interactive includes adjustable media and measurement support;
- optics-bench interactive supports lens/image exploration;
- mobile/tablet/Chromebook-friendly resources are available.

Use when:
- a physics-specific interactive gives better concept visibility than a general simulation;
- a built-in measurement/protractor/ray-tool or concept checker improves the lesson.

### GeoGebra

Strengths:
- highly interactive and customizable;
- very large resource library for math and science;
- useful for geometry-heavy physics such as rays, angles, lenses, graphs and parameter changes;
- non-commercial classroom use is permitted under GeoGebra's current licensing terms, with attribution requirements where applicable.

Caution:
- many resources are community-created;
- scientific correctness and grade suitability must be checked individually;
- do not assume every public GeoGebra activity is authoritative.

Use when:
- adjustable geometry/parameters are central to the concept;
- a specific verified applet is more direct than PhET or another source;
- a custom adaptation is pedagogically valuable and licensing permits it.

### Open Source Physics / ComPADRE OSP

Strengths:
- physics-education and computational-modeling focus;
- developed/curated by physics educators;
- useful for higher-control or model-based exploration.

Caution:
- some resources may be more advanced than Class 8 needs;
- interface complexity and classroom setup must be checked.

Use when:
- the model is scientifically strong and age-appropriate;
- the lesson needs a simulation not well served by simpler providers.

### Other reputable providers

Other sites may be used when they are clearly better for the exact topic, including university, professional-science, museum, government, or established educational platforms.

They must pass the same verification criteria below. This list is intentionally **open**, not exhaustive.

## Selection criteria

Compare candidate resources on:

1. **Scientific correctness** — model/labels/relationships must be accurate enough for the intended explanation.
2. **Exact concept fit** — resource should teach the target concept, not just look related.
3. **Class-level suitability** — avoid unnecessary variables/math/terminology.
4. **Visual clarity** — important relationships should be visible at projector scale.
5. **Interaction quality** — controls should support prediction, manipulation and observation.
6. **Setup friction** — login, paywall, loading time, device restrictions and navigation overhead.
7. **Browser/device compatibility** — especially teacher laptop/projector and common mobile/tablet use where relevant.
8. **Offline/static fallback** — classroom-critical learning must survive internet failure.
9. **Licensing/reuse** — use, screenshot, embed, adaptation and attribution rules must be respected.
10. **Privacy/ad clutter** — avoid intrusive sign-in/data collection/ads when a cleaner alternative exists.
11. **Language burden** — English UI is acceptable when controls are simple; otherwise prefer resources students can understand through teacher guidance or Bangla support.
12. **Timing** — launch + manipulation + debrief must fit the lesson budget.

## Resource-role classification

Every accepted simulation/interactive should be classified as one of:

- `CORE_SUPPORT` — useful in CORE but static fallback fully preserves the learning goal;
- `FLEX` — useful if time/technology permits;
- `STRETCH` — enrichment only;
- `TEACHER_DEMO` — teacher manipulates while students predict/observe;
- `STUDENT_INTERACTIVE` — students manipulate directly where devices/classroom setup allow.

## Required storyboard/resource record

For each selected simulation/interactive, record:

- provider/site;
- exact resource title and URL/reference;
- concept/slide target;
- role classification;
- why this resource was chosen over the main alternatives;
- variables/controls students should use;
- prediction/observation prompt;
- planned duration;
- debrief/check question;
- licensing/attribution note;
- device/login/internet constraints;
- static/offline fallback;
- last verification date.

## Chapter 11 — Light pilot implication

Do not assume `PhET Bending Light` is automatically the final simulation choice merely because it was already mapped.

Before Lesson 1 v2 / Lesson 2 final production, compare at minimum the relevant options from:

- PhET Bending Light;
- The Physics Classroom Refraction Interactive;
- suitable verified GeoGebra ray/refraction resources if they add a real advantage.

For lenses in Lesson 3, compare at minimum:

- The Physics Classroom Optics Bench;
- suitable verified GeoGebra lens applets;
- any relevant PhET/other reputable option available at production time.

Choose per concept, not per brand.

## No-duplication rule

Do not place multiple simulations in one lesson merely because they are available.

Use one best-fit resource when one is sufficient. A second simulation should be included only if it contributes a different instructional function, such as:

- one for qualitative exploration and one for measurement;
- one teacher demo and one student practice;
- one online resource and one local/custom fallback.

## Custom interactive rule

If no existing simulation is suitable, Hyperagent/custom HTML/JS may be used for a targeted interaction.

Custom generation is justified only when:

- existing options are scientifically unsuitable;
- too complex for the grade;
- inaccessible or unreliable;
- language/interaction does not fit the objective;
- or a specific syllabus-aligned interaction is genuinely missing.

Custom interactives must receive the same scientific, compatibility and fallback QA as external resources.

## Canonical relation

This file operationalizes:

- `D-008` existing resources before custom generation;
- `D-011` Hyperagent specialist interactive role;
- `D-018` pedagogically justified motion;
- `D-024` static/offline fallback;
- `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`;
- new durable decision `D-039`.
