# Artifact Persistence and Reproducibility Policy

Version: 1.1
Date: 2026-09-06
Status: **ACTIVE**

## Purpose

Prevent a controlled lesson deck from becoming unrecoverable or unverifiable when a temporary runtime expires, and ensure that the exact classroom-facing artifact can be reproduced and compatibility-tested.

A PPTX/PDF that existed only in a transient execution environment is not considered durably reproducible.

## Canonical principle

GitHub remains the canonical project memory for source/specification/state. Binary classroom artifacts may be delivered outside GitHub, but the repository must retain enough information and source material to reproduce or verify them.

## Minimum durable record for every controlled lesson build

For each production-ready lesson, preserve in GitHub:

1. frozen `STORYBOARD.md`;
2. `RESOURCES.md` / source map references;
3. latest production QA record;
4. exact output filenames;
5. SHA-256 fingerprints for final PPTX and PDF;
6. generator/toolchain identity and relevant versions where available;
7. font stack used;
8. source/generation code or a reproducible build specification;
9. deterministic scientific-visual source/specification when separate;
10. nontrivial local asset manifest and licensing/provenance note;
11. dynamic implementation manifest where the deck uses staged reveal, animation, hyperlinks, simulation, video, or interactive navigation;
12. export method and QA result;
13. Microsoft PowerPoint smoke-test result for the exact user-facing PPTX when PowerPoint is available;
14. whether any normalize/resave operation occurred and whether playback/interaction was retested afterward.

## Preferred source layout

Use a lesson-local production/source area such as:

`chapters/<class>/<subject>/<chapter>/lessons/lesson-XX/production/`

Recommended contents:

- `build.js` or equivalent controlled generator source;
- `README.md` with build/reproduction instructions;
- `ASSET_MANIFEST.md` for external/local assets;
- `DYNAMIC_MANIFEST.md` for staged reveal/animation/interaction/simulation decisions when applicable;
- deterministic SVG/source files when practical;
- optional checksum manifest.

Do not commit private credentials, proprietary font files, or secrets.

## Binary artifact policy

The repository does not require every generated PPTX/PDF binary to be committed if another durable delivery location is used. However, the exact binary must be traceable by:

- filename;
- SHA-256;
- generation date/version;
- durable destination/reference when available;
- compatibility/playback status.

If binaries are not stored in GitHub, the repository must still retain reproducible source/build instructions.

## Microsoft PowerPoint compatibility record

Because the first Lesson 1 pilot triggered a Microsoft PowerPoint repair warning despite passing internal ZIP/XML/LibreOffice/render checks, PowerPoint compatibility is now a durable production attribute.

For each current PPTX record:

- `POWERPOINT_OPEN`: PASS / FAIL / NOT_TESTED;
- `REPAIR_WARNING`: YES / NO / UNKNOWN;
- `EDITABILITY`: PASS / FAIL / PARTIAL / NOT_TESTED;
- `PLAYBACK_REVEAL_INTERACTION`: PASS / FAIL / NA / NOT_TESTED;
- `NORMALIZED_RESAVE`: YES / NO;
- `RETEST_AFTER_RESAVE`: PASS / FAIL / NA / NOT_TESTED.

A failing or unretested artifact may be a prototype, but it cannot be the final `CLASSROOM_READY` PPTX.

## Dynamic implementation persistence

If a lesson uses or plans:

- staged duplicate-slide reveals;
- native PowerPoint animation;
- hyperlinks/buttons;
- branching navigation;
- simulation launch;
- video/animation resource;
- live-demo prompts tied to specific slide states;

then the build record must state where and why these are used and what static/offline fallback exists.

This prevents a future rebuild from silently flattening an intentionally dynamic lesson into a static deck.

## Canva finishing rule

If a controlled PPTX is imported into Canva and materially edited:

- keep the controlled pre-Canva source as the scientific/content authority;
- record the Canva design reference when available;
- record which changes were visual-only;
- rerun post-import science/notation/layout/export QA;
- rerun Microsoft PowerPoint smoke test if the final delivery returns to PPTX;
- fingerprint the final exported PPTX/PDF.

A Canva-only final state without a reproducible controlled source is not sufficient for science-critical production.

## Beautiful.ai rule

Beautiful.ai is not the controlled production source after RT-01. If a low-risk layout concept is borrowed, reproduce the final verified content in the controlled source and treat Beautiful.ai as inspiration/prototype only.

## Lesson 1 pilot exception and normalization

The first Lesson 1 controlled deck was generated before this policy was formalized.

Durably recorded:

- filenames and SHA-256 fingerprints;
- 16-slide structure;
- font stack;
- deterministic visual QA;
- PDF/export QA;
- initial PowerPoint repair-warning incident;
- repaired PPTX fingerprint and successful user-side PowerPoint opening.

Remaining gap:

- exact original generator source was not committed;
- the first visual implementation was under-engaging and largely static.

Disposition:

Lesson 1 v2 must normalize both reproducibility and dynamic/visual implementation under this policy before the chapter can be marked fully `CLASSROOM_READY`.

## Stage-completion rule

From Lesson 1 v2 onward, controlled production is not considered fully checkpointed until the reproducibility/source, compatibility, dynamic-state, and QA records are committed.

Apply:

**Finish → record → then continue.**

## New-chat implication

A future chat should be able to determine:

- which artifact is current;
- how it was produced;
- which source/specification generated it;
- whether Canva finishing occurred;
- which dynamic/interactive features were intentional;
- whether Microsoft PowerPoint opened it without repair;
- what SHA-256 identifies the final artifact;
- what remains provisional.

Also read `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md` for the mandatory classroom-readiness gates.
