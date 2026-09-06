# Current State

Last updated: 2026-09-06

## Canonical repository

`iqbalhimel004/science-slides`

Only this repository is authorized for Science Slides writes.

## Durable rules

- NCTB controls syllabus/exam context, not automatic scientific truth.
- Material science is checked against current authoritative sources.
- **Finish → record → then continue.**
- External-tool prompts are one self-contained fenced code block for one-click copy (`D-033`).
- Planned Gemini reviews use fresh downloadable single-file bundles (`D-034`).
- Gate B is targeted implementation QA, not a second Gate A (`D-035`).
- RT-01 renderer route is locked by evidence (`D-036`).
- `RENDERER_ROUTING.md` is the canonical no-confusion renderer-routing document for future chats.

## Active chapter

**Class 8 Science — Chapter 11: আলো**

Canonical path:
`chapters/class-8/science/chapter-11-light/`

Current status:
**CONTENT_STORYBOARD_FROZEN — RT_01_COMPLETE — LESSON_1_CONTROLLED_BUILD_PASS_WITH_NOTES — LESSON_2_PRODUCTION_NEXT**

## Review / freeze state

- Gemini Gate A: completed + reconciled
- Gemini Gate B: completed + reconciled
- Final pre-freeze QA: `PASS — CONTENT/STORYBOARD FREEZE APPROVED`
- No further Gemini planning review is required unless production introduces a material regression.

## Frozen lesson timing

| Lesson | CORE | FLEX | Planned | Contingency |
|---|---:|---:|---:|---:|
| L1 | 43 | 7 | 50 | 10 |
| L2 | 44 | 8 | 52 | 8 |
| L3 | 42 | 8 | 50 | 10 |
| L4 | 42 | 8 | 50 | 10 |

Chapter planned CORE + FLEX total: **202 minutes**.

## RT-01 final route — LOCKED

Canonical routing file:
`RENDERER_ROUTING.md`

Canonical evidence record:
`chapters/class-8/science/chapter-11-light/RT01_RENDERER_CALIBRATION_2026-09-06.md`

Durable decision:
`DECISIONS.md` → `D-036`

Final verdict:
`RT_01_COMPLETE — CONTROLLED_PPTX_PRIMARY — CANVA_CONTROLLED_IMPORT_FINISHING — DIRECT_PPTX_PDF_FALLBACK`

### Primary authoring/rendering

**Controlled PptxGenJS**

Use it for:
- frozen wording;
- Bangla typography/layout;
- projector-safe sizing/hierarchy;
- deterministic SVG/shape scientific visuals;
- critical notation/diagram placement;
- source editable PPTX.

### Optional finishing

**Canva after controlled PPTX import**

Use only when it materially improves polish/editing/hosting without changing verified science.

Canva native AI is not the default full-deck author and should not replace high-risk scientific diagrams or frozen wording.

### Beautiful.ai

**Not an unattended full-deck science renderer.**

Permitted role:
- low-risk layout exploration;
- visual inspiration/prototyping.

Any reused wording/diagram must be reconciled back to the frozen storyboard and revalidated.

### Classroom delivery/fallback

**Controlled PPTX + verified PDF fallback**

PDF remains mandatory for portability/offline safety.

## Why the renderer decision was made

### Canva native AI — failed as default author

RT-01 found:
- notation generally survived;
- large Bangla headings were often readable;
- but body/table/checklist text was often too small for projector use;
- unrelated template artifacts appeared (`SALFORD & CO.`, `PRESENTATION`, `www.reallygreatsite.com`);
- the critical-angle ray diagram was visually ambiguous and not deterministic enough;
- generated styling sometimes outranked instructional hierarchy.

Conclusion:
**Canva remains useful as a controlled finishing/editing environment, not as the uncontrolled source of science content.**

### Beautiful.ai — failed mandatory science-control gates

RT-01 found:
- cleaner standard layouts than native Canva in several slides;
- editable PPTX and PDF export work;
- but requested deterministic critical-angle diagram was omitted;
- `<`/`>` notation was exported as escaped text in the TIR stress case;
- verified wording was rewritten despite exact-text preservation being requested;
- material content drift appeared in critical-angle and film-exposure wording;
- editable export depended on Beautiful.ai font packages for exact typography/portability.

Conclusion:
**Beautiful.ai may inspire/prototype layouts but is not trusted as the final unattended science author/renderer.**

### Controlled PptxGenJS — selected

RT-01 showed the controlled route gives:
- direct control of frozen wording;
- deterministic scientific geometry;
- explicit projector font/layout control;
- reproducible PPTX/PDF output;
- actual export QA before classroom use;
- optional Canva finishing without surrendering scientific authority.

## No-confusion precedence rule for future chats

If any older/historical file says:

- Beautiful.ai and Canva are still equal full-deck candidates;
- renderer is not yet selected;
- RT-01 is pending;
- Beautiful.ai should be the default renderer;
- Canva native AI should generate the whole final science deck;

that wording is **historical and superseded**.

Future chats must use this precedence order:

1. `RENDERER_ROUTING.md`
2. `DECISIONS.md` → `D-036`
3. this `CURRENT_STATE.md`
4. `TOOL_ROUTING.md`
5. chapter RT-01 evidence record

Do not reopen renderer selection unless:
- the user explicitly asks to reconsider it, or
- new documented evidence from actual classroom use materially changes the decision.

## Lesson 1 production checkpoint

Canonical QA record:
`chapters/class-8/science/chapter-11-light/lessons/lesson-01/PRODUCTION_QA_2026-09-06.md`

Status:
`PASS_WITH_NONBLOCKING_NOTES`

Built:
- 16-slide controlled PPTX
- 16-page PDF fallback
- 14 CORE + 2 FLEX

Artifact fingerprints:
- PPTX SHA-256: `baf43046f54165e7bc705c897a02206a8966e3c9294cd3d86d2b1a50f62919c9`
- PDF SHA-256: `a85cc0821c73b9074a827968ecb8834aa0c7bd90dbd185ea248fe9f102ab3b6a`

Production QA completed:
- deterministic ray/optics diagrams built;
- rarer→denser and denser→rarer geometry checked;
- normal-incidence exception explicit;
- optical density ≠ mass density guardrail retained;
- parallel-sided slab geometry remains bounded;
- Bangla rendered using controlled Noto Sans Bengali stack;
- `slides_test.py`: PASS, no overflow;
- PPTX montage inspected;
- PDF montage inspected;
- PDF preflight: 16 pages, openable, non-scanned, unencrypted;
- CORE remains offline-capable.

Nonblocking notes:
- exact reusable numeric projector font baseline will be refined from first real classroom use / continued pilot evidence;
- optional Canva finishing is not required;
- PhET remains FLEX-only and does not block Lesson 1.

## What remains for the chapter

- Lesson 2 controlled PPTX/PDF production + QA;
- Lesson 3 controlled PPTX/PDF production + QA;
- Lesson 4 controlled PPTX/PDF production + QA;
- verify remaining offline/static fallbacks;
- final rendered chapter-wide continuity/coverage audit;
- finalize classroom-ready package and reusable master-theme baselines.

## New-chat recovery order — current pilot

A new chat continuing this project should read, in this order:

1. `OPERATING_BRIEF.md`
2. `CURRENT_STATE.md`
3. `RENDERER_ROUTING.md`
4. active chapter `STATUS.md`
5. active lesson storyboard/resources/production QA
6. deeper policy files only if the current task requires them

This is intended to eliminate ambiguity from older pre-RT-01 documents.

## Next authorized action

Proceed to **Lesson 2 controlled production** using the frozen storyboard/resource map and the locked PptxGenJS-first route.
