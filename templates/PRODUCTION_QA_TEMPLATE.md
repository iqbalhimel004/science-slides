# Production QA — Template

Lesson:
Build version:
Date:
Status: DRAFT / FAIL / PASS_WITH_NOTES / CLASSROOM_READY

## Artifact identity

- PPTX filename:
- PPTX SHA-256:
- PDF filename:
- PDF SHA-256:
- generator/source path:
- font stack:
- Canva finishing used?: YES / NO
- Canva design reference if used:

## Scientific/content integrity

- [ ] frozen wording preserved
- [ ] high-risk diagrams scientifically correct
- [ ] notation/units/formulas correct
- [ ] no content drift after visual finishing

## Microsoft PowerPoint compatibility

- POWERPOINT_OPEN: PASS / FAIL / NOT_TESTED
- REPAIR_WARNING: YES / NO / UNKNOWN
- EDITABILITY: PASS / FAIL / PARTIAL / NOT_TESTED
- NORMALIZED_RESAVE: YES / NO
- RETEST_AFTER_RESAVE: PASS / FAIL / NA / NOT_TESTED
- PLAYBACK_REVEAL_INTERACTION: PASS / FAIL / NA / NOT_TESTED

A repair/recovery warning is a hard FAIL for the current PPTX.

## Dynamic implementation

- progressive reveal used where planned: PASS / FAIL / NA
- staged reveal sequences:
- native animation inventory:
- interactive navigation/buttons:
- live demo support:
- simulation/video resources:
- hyperlinks/QRs tested: PASS / FAIL / NA
- static/offline fallback tested: PASS / FAIL
- `DYNAMIC_MANIFEST.md` updated: YES / NO

## Visual engagement / UI

- hook impact: PASS / FAIL
- coherent subject palette/identity: PASS / FAIL
- focal hierarchy: PASS / FAIL
- layout variety: PASS / FAIL
- projector readability: PASS / FAIL
- diagram/image integration: PASS / FAIL
- repetitive card/box review: PASS / FAIL
- observation/prediction/rule/practice/simulation/exit states visually differentiated where appropriate: PASS / FAIL / NA
- first-pilot user visual approval: APPROVED / NOT_APPROVED / NA

A scientifically correct but materially unattractive/utilitarian first-pilot deck cannot pass final visual QA.

## Export / fallback

- [ ] PPTX render checked
- [ ] PDF render checked
- [ ] Bangla rendering checked
- [ ] equations/symbols checked
- [ ] crops/labels checked
- [ ] static/offline fallbacks checked
- [ ] PDF preserves essential meaning without animation

## Reproducibility

- [ ] build/generator source committed
- [ ] asset manifest committed if applicable
- [ ] dynamic manifest committed if applicable
- [ ] output filenames/fingerprints recorded
- [ ] toolchain/export method recorded

## Final gate verdict

- G3 Science:
- G10 Visual engagement:
- G11 PowerPoint/export/playback:
- G14 Reproducibility:

Final verdict:

Next action:

Canonical policies:
- `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
- `ARTIFACT_PERSISTENCE.md`
- `QUALITY_GATES.md`
