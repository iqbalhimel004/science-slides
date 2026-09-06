# Canonical Renderer Routing — Science Slides

Version: 1.0
Date: 2026-09-06
Status: **ACTIVE — SUPERSEDES PRE-RT-01 CANDIDATE ASSUMPTIONS**

## Purpose

This file is the concise, durable answer to one question:

> For Science Slides production, which renderer/tool route should be used after RT-01?

It exists specifically to prevent future chats from reviving the older pre-calibration assumption that Beautiful.ai and Canva are still equal full-deck candidates.

## Canonical decision

The default production route is:

**Controlled PptxGenJS authoring/rendering → deterministic SVG/shape scientific visuals → rendered QA → optional Canva controlled-import finishing → verified PPTX + verified PDF fallback.**

This is the production default unless the user explicitly changes it or later evidence from real classroom use justifies a documented revision.

## Tool roles after RT-01

### 1. PptxGenJS — PRIMARY AUTHORING / RENDERING ROUTE

Use controlled PptxGenJS for:

- frozen storyboard wording;
- Bangla text and mixed Bangla-English content;
- projector-first font sizing and visual hierarchy;
- scientific notation that has been verified in export;
- deterministic ray diagrams;
- lens, eye, camera, circuit, anatomy and other label-sensitive scientific visuals;
- final editable source PPTX;
- direct PDF fallback generation/verification.

Scientific geometry and critical wording must remain under project control.

### 2. Canva — OPTIONAL FINISHING / EDITING ENVIRONMENT

Canva is **not** the default science-content authoring engine.

Preferred Canva use:

- import a controlled PPTX that has already passed content/science QA;
- manual visual polish;
- spacing/alignment refinement;
- low-risk infographics/callouts;
- hosting/presenting/editing;
- reusable visual components.

If Canva finishing is used:

1. the controlled PPTX remains the scientific/content authority;
2. Canva must not silently rewrite frozen science;
3. high-risk scientific diagrams must not be replaced by unconstrained native-AI versions;
4. post-import Bangla/notation/diagram/layout QA is mandatory;
5. final exported artifact must again be checked before classroom-ready status.

### 3. Beautiful.ai — LOW-RISK PROTOTYPING ONLY

Beautiful.ai is **not** the unattended full-deck renderer for this project after RT-01.

Allowed uses:

- low-risk layout exploration;
- visual inspiration;
- prototype arrangement of non-critical content.

Any Beautiful.ai wording/diagram reused in a final deck must be reconciled back to the frozen storyboard and independently revalidated.

### 4. Canva native AI — NOT THE DEFAULT FULL-DECK AUTHOR

Native Canva AI may be used for low-risk visual inspiration/components only.

Do not rely on it for:

- frozen scientific wording;
- high-risk labelled scientific diagrams;
- ray geometry;
- projector-safe default typography without manual QA;
- final science-critical lesson generation.

## Why this decision was made

RT-01 tested representative Bangla/science stress content through Beautiful.ai and Canva and compared both against a controlled PptxGenJS route.

### Canva native-AI findings

Positive:

- major Unicode notation generally survived;
- native design remained editable;
- large Bangla headings were often visually acceptable.

Material problems:

- several body/table/checklist areas were too small for projector-first classroom use;
- unrelated template artifacts appeared (`SALFORD & CO.`, `PRESENTATION`, `www.reallygreatsite.com`);
- critical-angle ray geometry was visually ambiguous and not deterministic enough;
- generated styling sometimes took priority over instructional hierarchy.

Conclusion:

**Canva native AI failed as the default unattended science-deck generator, but Canva remained useful as a controlled finishing/editing environment.**

### Beautiful.ai findings

Positive:

- cleaner standard layouts than Canva native AI in the calibration deck;
- editable PPTX export available;
- PDF export available;
- overall visual hierarchy was often stronger than native Canva.

Material problems:

- the requested deterministic critical-angle ray diagram was omitted and replaced by text;
- the TIR notation test exported `<`/`>` as escaped text (`&lt;` / `&gt;`-style output);
- verified science wording was rewritten despite exact-text preservation being requested;
- content drift appeared in critical-angle wording and film-exposure wording;
- editable export depended on Beautiful.ai font packages, creating portability risk if those fonts are not installed on the destination machine.

Conclusion:

**Beautiful.ai was visually cleaner in some standard layouts but failed mandatory scientific-control, exact-text, notation and deterministic-diagram gates.**

### Controlled PptxGenJS findings

Advantages:

- frozen wording remains under direct project control;
- deterministic scientific geometry is possible;
- projector font sizes/layout can be explicitly controlled;
- Bangla/notation can be checked in the actual PPTX and PDF;
- no AI renderer is allowed to silently rewrite verified science;
- direct editable PPTX and PDF fallback are available;
- the same controlled PPTX can still be imported into Canva when manual finishing adds value.

Conclusion:

**Controlled PptxGenJS best satisfied the project's hard requirements: scientific accuracy, deterministic diagrams, notation fidelity, projector usability and reproducibility.**

## Mandatory production chain

For a normal lesson after content freeze:

1. read frozen storyboard/resource/QA files;
2. build high-risk scientific visuals deterministically;
3. assemble the controlled 16:9 PPTX in PptxGenJS;
4. render actual slides;
5. inspect scientific geometry, Bangla, notation, layout and projector readability;
6. optionally import to Canva only if finishing adds clear value;
7. if Canva is used, run post-import QA;
8. generate/verify PDF fallback;
9. checkpoint lesson production in GitHub;
10. only then continue to the next lesson.

## High-risk visual rule

The following should normally be deterministic SVG/shape/code-generated or carefully redrawn from verified science, not unconstrained generative-AI diagrams:

- ray/refraction/TIR diagrams;
- lens ray constructions;
- eye/camera optical paths;
- circuits;
- anatomy/process diagrams where labels/relative positions matter;
- graphs/scales where geometry carries meaning;
- equation/notation layouts where a renderer may alter symbols.

## Notation rule

- straightforward Unicode such as `°`, `10⁸`, `H₂O`, `CO₂` may remain native text only after actual export verification;
- comparison symbols and renderer-sensitive notation must be checked in the final artifact;
- complex equations/chemistry may use controlled LaTeX/MathJax → SVG/PNG when needed;
- the source expression remains preserved in the storyboard/source record.

## Classroom delivery rule

A lesson is not classroom-ready from editor appearance alone.

Required delivery package:

- controlled editable PPTX;
- verified PDF fallback;
- static/offline fallbacks for classroom-critical online/animated items;
- rendered/export QA record.

## Precedence / no-confusion rule

This file and `D-036` in `DECISIONS.md` represent the **post-RT-01 final routing decision**.

Any older wording elsewhere that says:

- `Beautiful.ai and Canva are candidate full-deck renderers`,
- `renderer not yet decided`,
- `RT-01 pending`,
- or similar pre-calibration language,

must be read as historical/superseded unless a later dated durable decision explicitly replaces this file.

New chats should not reopen Beautiful.ai-vs-Canva selection by default. The next production work should use the controlled PptxGenJS-first route.

## Evidence records

Primary RT-01 evidence:

`chapters/class-8/science/chapter-11-light/RT01_RENDERER_CALIBRATION_2026-09-06.md`

Durable decision:

`DECISIONS.md` → `D-036`

Current production state:

`CURRENT_STATE.md`
