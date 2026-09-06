# Artifact Persistence and Reproducibility Policy

Version: 1.0
Date: 2026-09-06
Status: **ACTIVE**

## Purpose

Prevent a controlled lesson deck from becoming unrecoverable when a temporary runtime expires.

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
10. any nontrivial local asset manifest and licensing/provenance note;
11. export method and QA result.

## Preferred source layout

For new controlled builds, use a lesson-local production/source area such as:

`chapters/<class>/<subject>/<chapter>/lessons/lesson-XX/production/`

Recommended contents:

- `build.js` or equivalent controlled generator source;
- `README.md` with build/reproduction instructions;
- `ASSET_MANIFEST.md` when external/local assets are used;
- deterministic SVG/source files when practical;
- optional checksum manifest.

Do not commit private credentials, proprietary font files, or secrets.

## Binary artifact policy

The repository does not require every generated PPTX/PDF binary to be committed if another durable delivery location is used. However, the exact binary must be traceable by:

- filename;
- SHA-256;
- generation date/version;
- durable destination/reference when available.

If binaries are not stored in GitHub, the repository must still retain reproducible source/build instructions.

## Canva finishing rule

If a controlled PPTX is imported into Canva and materially edited:

- keep the controlled pre-Canva source as the scientific/content authority;
- record the Canva design reference when available;
- record which changes were visual-only;
- rerun post-import science/notation/layout/export QA;
- fingerprint the final exported PPTX/PDF.

A Canva-only final state without a reproducible controlled source is not sufficient for science-critical production.

## Beautiful.ai rule

Beautiful.ai is not the controlled production source after RT-01. If a low-risk layout concept is borrowed, reproduce the final verified content in the controlled source and treat Beautiful.ai as inspiration/prototype only.

## Lesson 1 pilot exception

The first Lesson 1 controlled deck was generated before this policy was formalized.

Durably recorded:

- final filenames;
- PPTX/PDF SHA-256 fingerprints;
- 16-slide structure;
- font stack;
- deterministic visual QA;
- PDF/export QA.

Gap:

- the exact original PptxGenJS generation source was not committed to GitHub.

Disposition:

- this does **not** invalidate the Lesson 1 science/content QA;
- before the chapter is marked fully `CLASSROOM_READY`, Lesson 1 should be normalized by either committing a reconstructed reproducible generator/build specification or generating a final controlled version whose source is durably stored under this policy.

## Stage-completion rule

From Lesson 2 onward, controlled production is not considered fully checkpointed until the reproducibility/source record is committed.

Apply the universal rule:

**Finish → record → then continue.**

## New-chat implication

A future chat should be able to determine:

- which artifact is current;
- how it was produced;
- which source/specification generated it;
- whether Canva finishing occurred;
- what SHA-256 identifies the final artifact;
- what remains non-reproducible or provisional.
