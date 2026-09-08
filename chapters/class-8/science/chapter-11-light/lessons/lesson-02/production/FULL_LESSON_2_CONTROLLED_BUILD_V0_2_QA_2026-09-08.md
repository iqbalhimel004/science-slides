# Full Lesson 2 Controlled Build v0.2 QA — 2026-09-08

Status: **INTERNAL_QA_PASS — USER_FINAL_REVIEW_NEXT — CLASSROOM_READY_PENDING**

This build supersedes full build v0.1 as the current review candidate.

## Why v0.2 exists

After the first full v0.1 assembly, targeted individual inspection of newly generated slides found a material visual defect that montage/overflow QA did not catch:

- the larger-incidence label on the `সংকট কোণের পথে` slide was visibly cropped at the right edge.

The selective-revalidation rule was applied. The affected visual was corrected and the full deck was rerendered.

Additional student-surface refinements were made before final review:

- title slide changed to Bangla-first (`৮ম শ্রেণির বিজ্ঞান`, `পাঠ ২`);
- internal `L2-Sxx` slide IDs were removed from newly generated visible slide surfaces;
- the optional slide no longer shows internal `FLEX` wording as a student-facing label;
- the official PhET `Bending Light` resource is provided as a clickable optional simulation button, with a static/offline fallback;
- the clipped increasing-incidence label was shortened to `বড় i → r বেশি`, while the adjacent visible explanation states that the refracted ray approaches the interface.

## Artifact identity

- PPTX: `Lesson2_Controlled_Full_v0_2.pptx`
- PDF: `Lesson2_Controlled_Full_v0_2.pdf`
- render folder: `Lesson2_Controlled_Full_v0_2/`
- montage: `montage_full_v0_2.png`
- semantic report: `Lesson2_Controlled_Full_v0_2_semantic_report.json`
- source: `build_lesson2_controlled_v0_2.js`

Slide / PDF page count: `19`

SHA-256:

- PPTX: `d758683a7760ea51468b1b0c1485f2f085a8e2843848d60ed27e2007bdfa0d7a`
- PDF: `fb11a4a79d469c2b49031576345beb023d53842dddd5f3fe01cc264973f2214c`
- montage: `de1caa0b76cc6696e86da85f8444346cce201edd1786e436c6d3f9bb7f50ef7f`
- semantic report: `b51cebccb0f3f9fe8e4e74fc9b79fec2ffd68cf63e9cc19e03a4370fbc62bbcb`
- build source: `6c5b3429bcb584fc580fb358b391caa23de0efc67ecd99d3a39e9a3c8439c170`

GitHub source path:

`chapters/class-8/science/chapter-11-light/lessons/lesson-02/production/build_lesson2_controlled_v0_2.js`

## Automated QA

### Overflow

`slides_test.py Lesson2_Controlled_Full_v0_2.pptx`

Result:

**PASS — no overflow detected**

### Render

`render_slides.py Lesson2_Controlled_Full_v0_2.pptx`

Result:

**PASS — 19 slides rendered**

### PDF

LibreOffice headless export succeeded.

Page count:

`19`

## Direct pixel / selective R3 inspection

The full montage was inspected after the v0.2 rerender.

Newly generated or materially changed R3/R3-adjacent slides were also inspected individually, including:

- real ray vs dashed construction-line explanation;
- pencil/straw apparent-bending explanation;
- increasing-incidence progression;
- three-state classification question;
- three-state answer;
- optional simulation/practice slide.

Result:

**PASS for user final-review candidate**

Confirmed after correction:

- no clipped larger-incidence label;
- `বড় i → r বেশি` is fully visible;
- critical-angle/TIR controlled visuals from the accepted v0.3 pack remain unchanged;
- HRV-02 coin before/after explanation remains the accepted corrected version;
- HRV-04 mirage context/mechanism remains the accepted corrected version;
- HRV-07 core–cladding boundary reflection remains the accepted controlled version;
- newly generated visible slides no longer show internal slide IDs;
- title slide is Bangla-first;
- teacher-only operational instructions remain in speaker notes rather than visible script boxes.

## Simulation resource

Optional official resource:

`https://phet.colorado.edu/en/simulations/bending-light`

The lesson does not depend on this internet resource. The preceding static three-state slides are the offline fallback.

## Reproducibility note

The v0.2 PptxGenJS source is now stored in GitHub. It currently expects the accepted v0.3 validation-pack rendered inputs to be materialized in the production environment. The accepted v0.3 artifacts are also preserved in the ChatGPT Library and identified in canonical state/QA records. Controlled HRV-05/06/07 component source remains independently stored under `/components/optics/`.

## Remaining gates

Do not mark Lesson 2 `CLASSROOM_READY` yet.

Still required:

1. user final visual/science acceptance of full v0.2;
2. exact Microsoft PowerPoint smoke test when a real PowerPoint environment is available;
3. final PDF/offline package verification;
4. classroom projector/timing calibration when used in practice.

## Disposition

**FULL_LESSON_2_CONTROLLED_BUILD_V0_2_INTERNAL_QA_PASS — USER_FINAL_REVIEW_NEXT**

Lesson 3 remains on hold until Lesson 2 acceptance/checkpoint.
