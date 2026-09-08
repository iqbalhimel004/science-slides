# Artifact Persistence and Reproducibility Policy

Version: 1.2
Date: 2026-09-08
Status: **ACTIVE — PRODUCTION SYSTEM V2.1**

## Purpose

Ensure classroom-facing artifacts and science-critical components remain recoverable, reproducible and verifiable after temporary runtimes/chats end.

GitHub is canonical project memory for source/specification/state. Binary PPTX/PDF delivery may occur elsewhere, but GitHub must preserve enough evidence to reproduce or verify the build.

## Minimum durable record for controlled production

Preserve as applicable:

1. frozen storyboard/structured spec/current copy lock;
2. source map/issues and freshness records;
3. current production QA;
4. exact output filenames;
5. SHA-256 fingerprints for final PPTX/PDF;
6. generator/toolchain versions;
7. font stack;
8. build/generator source or reproducible spec;
9. deterministic R3 component source/spec;
10. semantic/geometry tests;
11. component golden reference where reusable;
12. nontrivial asset manifest + provenance/license;
13. dynamic manifest;
14. export method/result;
15. PowerPoint compatibility status when available;
16. normalize/resave + retest status;
17. safety/model/accessibility notes when they affect delivery.

Do not commit credentials, secrets or proprietary font binaries.

## Preferred structure

Lesson-local:

```text
production/
  spec/
  src/
  assets/
  tests/
  renders/
  dist/
  QA/
```

Shared approved R3 components may live under `components/` with source + tests + golden render + usage notes.

## Binary artifact policy

The repo need not contain every PPTX/PDF binary if another durable delivery location is used, but current binaries must be traceable by filename, checksum, generation date/version, destination/reference and compatibility status.

## Component golden-master rule

For reusable R3 components record:

- component ID/name;
- source version/checksum;
- semantic test version;
- approved rendered golden reference;
- authoritative science basis;
- terminology assumptions;
- approved date/status.

If source/geometry/labels materially change, rerender and run targeted regression QA before reuse.

## PowerPoint compatibility record

For each final/current PPTX record:

- `POWERPOINT_OPEN`: PASS / FAIL / NOT_TESTED
- `REPAIR_WARNING`: YES / NO / UNKNOWN
- `EDITABILITY`: PASS / FAIL / PARTIAL / NOT_TESTED
- `PLAYBACK_REVEAL_INTERACTION`: PASS / FAIL / NA / NOT_TESTED
- `NORMALIZED_RESAVE`: YES / NO
- `RETEST_AFTER_RESAVE`: PASS / FAIL / NA / NOT_TESTED

If exact PowerPoint testing is unavailable, use `DELIVERY_COMPATIBILITY_PENDING`; do not promote the artifact to a tested delivery PASS.

## Dynamic implementation persistence

If a lesson uses staged states, animation, links/buttons, simulation, video or interactive navigation, record where/why, required order, dependencies and static/offline fallback.

## Canva finishing rule

If a controlled deck is materially edited in Canva:

- controlled pre-Canva source remains science/content authority;
- record Canva reference and visual-only changes;
- rerun affected science/layout/render/export QA;
- if final delivery returns to PPTX, rerun PowerPoint compatibility checks as applicable;
- fingerprint final exported artifact.

A Canva-only state is insufficient for science-critical reproducibility.

## Historical Lesson 1 exception — no-reset clarification

Lesson 1 was produced during the first pilot and its exact original generator source was not fully preserved. Its known fingerprints/QA/compatibility evidence remain historical records.

Current canonical disposition from `CURRENT_STATE.md`:

**Lesson 1 is completed/user-approved baseline and is preserved.**

The historical source gap does **not** trigger an automatic rebuild under Production System v2.1. If Lesson 1 is materially revised later, the revised build must satisfy current reproducibility requirements from that point forward.

## Selective invalidation persistence

After a change, record what changed and which downstream QA chain was rerun. Do not falsely imply the whole artifact was re-audited if only a targeted regression was necessary.

## Stage completion

**Finish -> record -> then continue.**

A fresh chat should be able to determine:

- current artifact/component;
- how it was produced;
- authoritative source/spec;
- QA/compatibility status;
- whether a visual is a reusable golden master;
- what remains pending;
- next authorized action.

Canonical architecture: `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`.
