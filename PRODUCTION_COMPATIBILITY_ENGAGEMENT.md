# Production Compatibility and Engagement Policy

Version: 1.0
Date: 2026-09-06
Status: **ACTIVE — MANDATORY FOR CLASSROOM-READY DECKS**

## Purpose

Prevent two pilot failures from recurring:

1. a PPTX that passes internal/render checks but Microsoft PowerPoint still asks to repair;
2. a scientifically correct deck that is too static, visually utilitarian, or underuses purposeful animation/simulation/interaction despite the project requirement for engaging classroom slides.

This policy applies to Lesson 1 v2 and all subsequent controlled lesson production.

---

## A. Microsoft PowerPoint compatibility gate

A PPTX is **not** considered classroom-ready merely because it:

- is a valid ZIP/OpenXML package;
- opens in LibreOffice;
- passes `slides_test.py`;
- renders to images/PDF.

### Required compatibility sequence

For every final/near-final PPTX:

1. generate the controlled PPTX from committed/reproducible source;
2. run package/render/overflow QA;
3. open/test the exact user-facing artifact in Microsoft PowerPoint when a PowerPoint environment is available;
4. confirm there is **no repair/recovery warning**;
5. verify editable text/shapes remain intact where editability is expected;
6. verify hyperlinks/buttons/media launch paths used in class;
7. verify all planned reveal/interaction behaviour in PowerPoint;
8. verify the PDF/static fallback separately;
9. record the exact artifact fingerprint and result in production QA.

### If Microsoft PowerPoint shows a repair warning

The artifact fails the compatibility gate.

Required response:

- do not mark it classroom-ready;
- preserve the failing artifact fingerprint for traceability;
- normalize/rebuild the package;
- rerun scientific/layout/render QA;
- retest the repaired artifact in Microsoft PowerPoint;
- only the artifact that passes the PowerPoint smoke test may become current.

### LibreOffice normalization rule

LibreOffice resave may be used to normalize an OpenXML package when appropriate, but it is **not automatically safe for animation/transitions/media**.

If a deck contains native animation, transitions, hyperlinks, embedded media, or other interactive behaviour:

- never assume a LibreOffice resave preserved them;
- retest those behaviours afterward in Microsoft PowerPoint;
- if the normalization strips or changes required behaviour, rebuild using a PowerPoint-compatible route instead.

For compatibility-sensitive progressive teaching sequences, staged duplicate-slide reveal states are preferred over fragile native animation when both accomplish the same instructional goal.

---

## B. Dynamic-engagement planning gate

A lesson must not become static by accident.

Before production, every storyboard must have a **dynamic implementation decision** for each teaching segment where movement/reveal/interaction could materially improve learning.

Allowed decisions:

- `STATIC_INTENTIONAL` — static is genuinely best; brief reason recorded;
- `STAGED_REVEAL` — duplicate/sequential slide states used for progressive explanation;
- `NATIVE_ANIMATION` — PowerPoint-native animation only when the production path can preserve/test it reliably;
- `INTERACTIVE_NAVIGATION` — hyperlink/button/branching interaction;
- `LIVE_DEMO` — teacher/student physical demonstration;
- `SIMULATION` — external or embedded simulation with observation/prediction task;
- `VIDEO/ANIMATION_RESOURCE` — trusted instructional media;
- `PREDICT_THEN_REVEAL` — student commits to an answer before the visual/result is shown.

### Default preference for this project

For science-critical progressive explanation:

1. staged reveal / predict-then-reveal;
2. deterministic diagram states;
3. native animation only when it adds real value and passes PowerPoint playback QA.

This hierarchy preserves both pedagogy and compatibility.

### No-motion is allowed, but must be intentional

Not every slide needs animation.

A lesson may contain many static slides when static presentation is pedagogically superior. However, if an entire concept-heavy lesson has no meaningful reveal, interaction, demo, simulation, prediction, or dynamic resource, production QA must explicitly justify why.

For the first pilot, a completely static implementation of a storyboard that already specifies progressive construction or optional simulation is considered a production miss.

---

## C. Simulation / interactive rule

Use simulation/interactive media only when it teaches something materially better than a static explanation.

For each simulation or interactive resource:

- state the instructional purpose;
- ask students what to predict/observe before launch;
- keep launch time within the lesson budget;
- include one debrief/check afterward;
- keep a static/offline fallback;
- do not make CORE learning depend on internet unless classroom reliability is explicitly confirmed.

For PhET or other external simulations:

- use the official legal source;
- record attribution/licensing where required;
- include a launch link/button or QR only after link QA;
- keep static slide states that preserve the concept if the simulation cannot launch.

---

## D. UI / visual-attractiveness gate

Scientific correctness is necessary but not sufficient.

The final classroom deck must also look intentionally designed rather than like a utilitarian technical report.

### Required visual qualities

At lesson level, verify:

- a strong, visually compelling opening/hook where appropriate;
- a coherent subject identity and palette;
- clear focal hierarchy;
- generous whitespace and balanced composition;
- large explanatory visuals;
- visual rhythm across slide families;
- distinct treatment for observation, prediction, explanation, rule, misconception, practice, simulation and exit slides;
- limited use of repetitive box/card layouts;
- purposeful full-width/large imagery or illustration where it improves context;
- restrained accents, gradients, glow/depth or other styling only when they improve hierarchy;
- projector-safe contrast and label size;
- no decorative element that competes with scientific meaning.

### Anti-patterns

A deck fails the visual-engagement gate if it is materially dominated by:

- repetitive white rectangles/cards;
- generic template blocks;
- large unused empty areas without visual purpose;
- dense text with token icons;
- flat diagram dumps without focal guidance;
- random stock decoration;
- tiny secondary labels that carry essential meaning;
- inconsistent palettes or illustration styles.

---

## E. First-pilot master-style approval

Lesson 1 v2 is the master visual/motion prototype for the project.

Before Lesson 2 full production:

1. build Lesson 1 v2 with the frozen science/content;
2. include the planned purposeful reveal/interaction/simulation support;
3. verify Microsoft PowerPoint compatibility;
4. verify PDF/static fallback;
5. run visual-attractiveness QA;
6. obtain user approval of the overall UI/motion direction.

Only after that approval should Lessons 2–4 inherit the master visual/motion system.

This prevents propagating an unattractive or overly static design across the chapter.

---

## F. Production QA record requirements

Every lesson production QA must explicitly report:

### Compatibility

- exact current PPTX filename and SHA-256;
- Microsoft PowerPoint smoke-test result;
- repair warning: YES/NO;
- editability result;
- normalization/resave step if used;
- PowerPoint playback re-test if normalization occurred.

### Dynamic implementation

- progressive reveal used where planned: PASS/FAIL/NA;
- native animation count/type if any;
- staged-reveal sequences;
- simulation/video/interactive resources included;
- hyperlinks/buttons tested;
- static/offline fallback tested.

### Visual engagement

- hook impact;
- palette/subject identity;
- layout variety;
- projector readability;
- card/box repetition review;
- image/diagram integration;
- user visual approval status for first-pilot baseline.

### Science integrity after polish

- no wording drift;
- no diagram-geometry drift;
- no Canva/other finishing tool silently altered verified science.

---

## G. Classroom-ready hard stop

A lesson cannot receive `CLASSROOM_READY` if any of these remain unresolved:

- Microsoft PowerPoint repair/recovery warning;
- essential animation/reveal/interactive behaviour untested;
- simulation link or fallback not verified when the resource is intended for class use;
- projector readability failure;
- visually unattractive/unfinished first-pilot design awaiting user approval;
- science/content drift introduced during visual finishing;
- missing verified PDF/static fallback;
- missing reproducibility record.

---

## Canonical relations

This file operationalizes and strengthens:

- `D-014` visual engagement;
- `D-018` pedagogically justified motion;
- `D-019` first-chapter master visual calibration;
- `D-020` actual artifact playback QA;
- `D-024` PDF/static fallback;
- `D-036` controlled PptxGenJS-first renderer route;
- new decisions `D-037` and `D-038`.

Also read:

- `QUALITY_GATES.md`
- `WORKFLOW.md`
- `SLIDE_STYLE_GUIDE.md`
- `VISUAL_ENGAGEMENT_SYSTEM.md`
- `ARTIFACT_PERSISTENCE.md`
- `RENDERER_ROUTING.md`
