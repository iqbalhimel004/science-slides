# Production QA — Template v2.1

Lesson:
Build version:
Date:
Status: DRAFT / FAIL / INTERNAL_QA_PASS / USER_ACCEPTED / DELIVERY_VERIFIED / CLASSROOM_READY

## Artifact identity

- PPTX filename:
- PPTX SHA-256:
- PDF filename:
- PDF SHA-256:
- generator/source path:
- structured spec/copy-lock path:
- font stack:
- Canva finishing used?: YES / NO
- Canva reference if used:

## Scientific/content integrity

- [ ] frozen wording preserved
- [ ] source freshness/current-data checks complete where relevant
- [ ] terminology lock/lint passed
- [ ] R3 semantic contracts passed
- [ ] post-render student-inference review passed
- [ ] formulas/units/calculations/graphs verified where applicable
- [ ] model/idealization/scale disclosures correct where needed
- [ ] no science drift after finishing/export

## Safety

- live experiment/demo present?: YES / NO
- safety review: PASS / FAIL / NA
- teacher-only/student action boundary clear: PASS / FAIL / NA
- safer/static fallback: PASS / FAIL / NA

## Automated/layout QA

- expected slide manifest: PASS / FAIL
- blank/missing/duplicate slide check: PASS / FAIL
- text lint: PASS / FAIL / NA
- overflow: PASS / FAIL
- unintended overlap: PASS / FAIL
- out-of-bounds: PASS / FAIL
- asset/link existence: PASS / FAIL / NA

## Direct pixel QA

- montage overview: PASS / FAIL
- every R3 slide inspected individually: PASS / FAIL / NA
- projector readability: PASS / FAIL
- image recognizability/crop: PASS / FAIL / NA
- Bangla glyph/line break: PASS / FAIL
- diagram-label relation: PASS / FAIL / NA
- color-independent critical meaning: PASS / FAIL

## Accessibility / multimodal

- contrast: PASS / FAIL
- critical meaning not color-only: PASS / FAIL
- essential animation has static/final-state meaning: PASS / FAIL / NA
- important video/audio captions/transcript/teacher summary: PASS / FAIL / NA
- distracting/flashing motion review: PASS / FAIL / NA

## Dynamic implementation

- staged/predict reveal implemented where planned: PASS / FAIL / NA
- native animation inventory:
- interactive navigation/buttons:
- simulation/video:
- hyperlinks/QRs tested: PASS / FAIL / NA
- static/offline fallback tested: PASS / FAIL / NA
- `DYNAMIC_MANIFEST.md` current: YES / NO / NA

## Microsoft PowerPoint compatibility

- POWERPOINT_OPEN: PASS / FAIL / NOT_TESTED
- REPAIR_WARNING: YES / NO / UNKNOWN
- EDITABILITY: PASS / FAIL / PARTIAL / NOT_TESTED
- NORMALIZED_RESAVE: YES / NO
- RETEST_AFTER_RESAVE: PASS / FAIL / NA / NOT_TESTED
- PLAYBACK_REVEAL_INTERACTION: PASS / FAIL / NA / NOT_TESTED

If exact PowerPoint testing is unavailable, final status cannot be `DELIVERY_VERIFIED`; use `DELIVERY_COMPATIBILITY_PENDING` where appropriate.

## Export / fallback

- [ ] PPTX render checked
- [ ] PDF render checked
- [ ] equations/symbols checked
- [ ] crops/labels checked
- [ ] static/offline fallbacks checked
- [ ] PDF preserves essential meaning

## Reproducibility / golden regression

- [ ] build/generator source committed
- [ ] asset/source manifest committed if applicable
- [ ] deterministic component source/tests committed if applicable
- [ ] changed reusable R3 component compared against golden reference
- [ ] output fingerprints recorded
- [ ] toolchain/export method recorded

## Selective revalidation record

- change made:
- affected gate chain:
- checks rerun:
- unaffected expensive checks intentionally not rerun:

## Final gate verdict

- G3 Science:
- G6A Safety:
- G10/G10A Visual + accessibility:
- G11 Compatibility/export:
- G14 Reproducibility/regression:

Final verdict:

Next action:

Canonical policies:
- `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`
- `QUALITY_GATES.md`
- `PRODUCTION_COMPATIBILITY_ENGAGEMENT.md`
- `ARTIFACT_PERSISTENCE.md`
