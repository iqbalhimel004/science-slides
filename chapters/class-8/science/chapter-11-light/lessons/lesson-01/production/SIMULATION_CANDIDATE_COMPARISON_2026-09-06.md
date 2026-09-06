# Lesson 1 Refraction Simulation Candidate Comparison

Date: 2026-09-06
Status: **COMPLETE — PRIMARY + SECONDARY ROUTES SELECTED**
Lesson: `আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম`

Canonical policy:
`/SIMULATION_RESOURCE_ROUTING.md`

## Purpose

Select the best existing simulation/interactive for Lesson 1 after the project explicitly moved away from a PhET-only assumption.

This comparison is for the optional FLEX/teacher-support dynamic resource. CORE teaching remains offline-capable through deterministic staged slides.

## Candidate set

### Candidate A — PhET: Bending Light

Official source:
`https://phet.colorado.edu/en/simulations/bending-light`

Verified strengths:

- purpose-built interactive for light bending/refraction;
- current HTML simulation route exists;
- Bengali (`বাংলা`) translation exists for Bending Light;
- regular HTML simulation can be used offline after download;
- regular HTML simulations are licensed for non-commercial classroom use under PhET's current CC BY-NC 4.0 policy with required attribution;
- polished visual interaction and strong suitability for teacher-led prediction/observation;
- no need to make CORE dependent on internet.

Relevant classroom role:

- vary incidence angle/material conditions;
- ask students to predict bending direction before change;
- visually confirm toward-normal / away-from-normal behaviour;
- optionally connect to later TIR without teaching TIR in Lesson 1.

Main cautions:

- can expose more controls/concepts than Lesson 1 needs, so teacher must keep the task narrow;
- attribution is required when used/shared;
- do not let the simulation replace the deterministic ray vocabulary slides.

### Candidate B — The Physics Classroom: Refraction Interactive

Official site:
`https://www.physicsclassroom.com`

Verified strengths:

- dedicated Refraction Interactive exists in its Physics Interactives collection;
- official activity sheet describes moving the laser, changing top/bottom substances and using a protractor to measure angles;
- The Physics Classroom itself recommends the Refraction Interactive for refraction, optical-density/speed, direction-of-bending, critical-angle and TIR learning sequences;
- current HTML5 version is described as working on most devices;
- teachers are explicitly permitted to use site pages/activities live in classroom demonstration or interactive lesson format.

Relevant classroom role:

- stronger than PhET when the instructional goal is a structured measurement/investigation using a protractor;
- useful later for Lesson 2 TIR/critical-angle exploration;
- strong candidate for a teacher-led evidence/data activity.

Main cautions:

- normal use is live through the website; the site's general copyright/usage policy prohibits downloading/rehosting site content unless a section-specific right says otherwise;
- interface/materials are English-first;
- therefore weaker than PhET for offline-first/Bangla-first classroom deployment in this project.

### Candidate C — GeoGebra: Reflection and Refraction / Light Refraction applets

Candidate examples:

- `https://www.geogebra.org/m/bmdsvvzf`
- `https://www.geogebra.org/m/QCDUSyHa`

Verified strengths:

- adjustable refractive indices and angle/source position;
- clear geometry-oriented ray visualization;
- potentially useful for teacher-controlled angle/ray demonstrations;
- GeoGebra permits non-commercial classroom teaching under its current license terms.

Main cautions:

- the candidate materials are community-created rather than one centrally maintained optics simulation;
- item-level scientific QA is mandatory;
- English/math-oriented controls can add unnecessary cognitive load for Class 8;
- visual polish and classroom guidance are less consistently curated than PhET or The Physics Classroom.

### Candidate D — Open Source Physics / ComPADRE indexed optics resources

Observed resource class:

- ComPADRE indexes refraction/lens interactives and historical optics simulations, including The Physics Classroom collection and older Java-based simulations.

Disposition for Lesson 1:

- useful discovery/curation layer;
- no stronger directly deployable Lesson 1 candidate was found than A/B/C;
- older Java-dependent items are not preferred for a modern classroom compatibility baseline.

## Weighted classroom-fit comparison

Scale: 1 = weak, 5 = strong.

| Criterion | Weight | PhET Bending Light | Physics Classroom Refraction | GeoGebra refraction applet |
|---|---:|---:|---:|---:|
| Scientific fit to L1 refraction basics | 5 | 5 | 5 | 5 |
| Class 8 simplicity / cognitive load | 5 | 5 | 4 | 3 |
| Visual clarity / engagement | 4 | 5 | 4 | 4 |
| Prediction/observation value | 4 | 5 | 5 | 4 |
| Angle/measurement investigation | 3 | 4 | 5 | 5 |
| Bengali/localization advantage | 4 | 5 | 1 | 2 |
| Offline resilience | 5 | 5 | 1 | 3 |
| Device/browser practicality | 4 | 5 | 4 | 4 |
| Licensing/use clarity for classroom | 4 | 5 | 4 | 4 |
| Teacher setup friction | 4 | 5 | 4 | 4 |
| **Weighted total / 210** | | **202** | **159** | **158** |

The numeric score is a decision aid, not a substitute for teacher judgment.

## Selection

### Primary Lesson 1 simulation

**PhET — Bending Light**

Why it wins for this specific lesson:

1. exact conceptual fit is strong;
2. Bengali translation materially reduces language friction for Class 8;
3. offline use is available, matching the project's classroom-reliability policy;
4. visual quality is strong for prediction → observation;
5. licensing/attribution is clear;
6. it can be kept narrow enough to reinforce L1-S09–L1-S12 without adding Snell-law math.

Role:

- FLEX/teacher support only;
- one short prediction-driven demo, not a full lab;
- launch after students already understand the normal and bending-direction rules;
- target duration: about 2–4 min if used;
- static fallback: L1-S09–L1-S12 staged deterministic diagrams.

Required attribution:

`Simulation by PhET Interactive Simulations, University of Colorado Boulder, licensed under CC BY-NC 4.0 (https://phet.colorado.edu).`

### Secondary / alternate Lesson 1 resource

**The Physics Classroom — Refraction Interactive**

Use when:

- teacher wants students to measure angles with a protractor;
- a more structured investigation is preferable;
- reliable live internet is available;
- English interface is acceptable.

Do not download/rehost the interactive under the site's general usage policy. Use the official live site.

### Reserve / specialist geometry option

**GeoGebra verified refraction applet**

Use only when adjustable ray geometry offers a specific advantage over the primary/secondary option. Re-QA the exact selected community applet before classroom use.

## Chapter-wide implication

Multi-source policy remains active.

The selection of PhET for Lesson 1 does **not** make PhET the chapter default.

Likely later candidates:

- Lesson 2 critical angle/TIR: compare PhET and The Physics Classroom Refraction Interactive again; The Physics Classroom may have a stronger measurement/critical-angle role.
- Lesson 3 lenses: The Physics Classroom **Optics Bench — Lenses** is a strong candidate because it supports moving an object, converging/diverging lenses, light rays and image characteristics.
- GeoGebra remains useful for geometry-specific teacher demonstrations when a verified applet provides a cleaner exact control.

## Final Lesson 1 implementation decision

`L1-F02` will use **PhET Bending Light as the primary launch target**, with:

1. one prediction prompt before launch;
2. a narrow observation task;
3. a short debrief;
4. static deterministic fallback;
5. optional teacher-note reference to The Physics Classroom Refraction Interactive for a measurement-heavy alternative.

This decision is evidence-based and can be revised only if actual device/classroom testing exposes a material problem.
