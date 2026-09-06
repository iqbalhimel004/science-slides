# RT-01 Renderer Calibration — Class 8 Science, Chapter 11: আলো

Date: 2026-09-06
Status: **COMPLETE — CONTROLLED_PPTX + CANVA_FINISHING ROUTE SELECTED**

## Purpose

Calibrate the first-chapter renderer route before final lesson production. Compare Beautiful.ai and Canva on the same representative Bangla/science stress content and choose the production route from evidence rather than vendor assumptions.

This was a renderer/workflow test, not a content review.

## Calibration content

A controlled 7-slide 16:9 reference stress deck was generated with PptxGenJS and validated with the project slide QA tools.

Stress areas:

1. Bangla conjuncts and vowel marks;
2. mixed Bangla + English scientific text;
3. `×`, `≈`, `°`, `i`, `r`, `C`;
4. Unicode sub/sup notation: `10⁸`, `H₂O`, `CO₂`, `Na₂S₂O₃`;
5. deterministic ray labels/arrows at critical angle;
6. dense eye-camera comparison table;
7. film-camera process labels;
8. back-row/projector readability and editability.

Reference artifact:
`RT01_reference_stress_deck.pptx`

Reference QA:
- `slides_test.py`: PASS, no overflow;
- montage visual check: PASS at reference level;
- deterministic scientific geometry remained under project control.

---

## Canva controlled-import arm

The controlled PptxGenJS reference deck was imported into Canva.

- Canva design ID: `DAHUWoy1XVQ`
- title: `RT-01 বাংলা Science Calibration — Canva`
- page count: 7
- dimensions: 1920 × 1080
- editable Canva design created: Yes

Text-content verification after import passed for critical strings including:

- `শ্রেণি`
- `পূর্ণ অভ্যন্তরীণ প্রতিফলন`
- `তড়িৎচৌম্বক বিকিরণ`
- `i = C হলে r = 90°`
- `c ≈ 3.0 × 10⁸ m/s`
- `H₂O, CO₂, AgBr, Na₂S₂O₃`
- `আপতিত রশ্মি`
- `প্রতিফলিত রশ্মি`
- `critical angle ≠ TIR yet; TIR occurs only when i > C`

Verdict:

**PASS AS A CONTROLLED IMPORT / EDITING / FINISHING ROUTE.**

Important distinction:

- Canva is not being trusted to author the science-critical geometry/content;
- the controlled source deck remains the content/layout authority;
- Canva may be used after import for manual polish, hosting, or finishing where post-import QA passes.

---

## Canva native-AI arm

Native Canva generation was run on the same seven-slide outline.

- native design ID: `DAHUWooiXrI`
- title: `Bangla Science Renderer Calibration Slides`
- page count: 7
- dimensions: 1920 × 1080
- user-side PDF export received and rendered for inspection

### Findings

#### Bangla / notation

- large Bangla headings generally rendered visibly;
- `c ≈ 3.0 × 10⁸ m/s`, `i = C হলে r = 90°`, and chemical subscripts remained visible;
- several body/table/checklist regions were too small for reliable back-row projection;
- extracted PDF Bangla text layer was weak/garbled even where the visual glyph looked acceptable.

#### Template pollution

Native generation inserted unrelated artifacts not requested by the brief:

- `SALFORD & CO.`;
- `PRESENTATION`;
- `www.reallygreatsite.com`.

#### Scientific visual reliability

The critical-angle ray slide did not meet deterministic-science requirements:

- poor contrast;
- ambiguous geometry;
- insufficiently clear `i=C` state;
- high cleanup/verification burden.

### Canva-native verdict

**FAIL AS THE DEFAULT END-TO-END SCIENCE-DECK GENERATOR.**

It remains useful for:

- manual visual finishing;
- editing imported controlled decks;
- bespoke low-risk design components;
- classroom presentation/export where final QA passes.

---

## Beautiful.ai native arm

Beautiful.ai generated the same seven-slide stress deck through the connected structured presentation generator.

- presentation ID: `-P0mse7pXEZ1AiPYVjNq`
- title: `RT-01 বাংলা Science Calibration`
- exact-text preservation requested: Yes
- editor support: Yes
- export support: PDF + editable PPTX
- user-side PDF and editable PPTX were obtained and inspected

### Export / editability findings

- `slides_test.py` on the editable PPTX: PASS; no slide overflow detected;
- the PPTX is genuinely editable text/shapes rather than a flattened image deck;
- exported PPTX directly references `Satoshi Black` and `DM Mono Regular`;
- Beautiful.ai also supplied font packages to the user during editable export;
- without those fonts installed on another PowerPoint machine, font substitution may change layout; PDF avoids that portability issue.

### Bangla / projector readability

Strengths:

- overall layout is clean and restrained;
- large Bangla headings render visibly well in the PDF;
- most table/body structure is more projector-friendly than the native Canva result;
- export presentation hierarchy is generally consistent.

Limitations:

- extracted PDF Bangla text layer is fragmented/garbled despite acceptable visual rendering;
- some footer/explanatory text is still smaller than preferred for classroom projection.

### Exact-text / notation failure

The TIR row did **not** preserve the requested comparison symbols.

The actual exported PPTX contains:

`i &amp;lt; C, i = C, i &amp;gt; C`

and the rendered PDF/PPTX visibly shows `&lt;` / `&gt;`-style escaped text instead of the intended `<` / `>` symbols.

This is an export/content-generation fidelity failure in a science notation stress case.

### Scientific-diagram failure

The requested critical-angle slide was supposed to contain a deterministic diagram with:

- horizontal interface;
- dashed normal;
- incident ray;
- reflected ray;
- grazing refracted ray at `r=90°`;
- `i=C` label.

Beautiful.ai instead produced a text/bullet explanation slide. The required ray diagram was absent.

This alone prevents Beautiful.ai native generation from being trusted as the science-critical full-deck renderer.

### Content drift / scope regression

Despite exact-text preservation being requested, Beautiful.ai rewrote verified content in ways that are unacceptable without slide-level revalidation.

Examples found in the exported deck:

1. critical-angle explanation introduced `আংশিক প্রতিফলিত` wording for the reflected ray, even though the reconciled Class-8 plan deliberately avoids Fresnel/reflected-power characterization;
2. film exposure text described the latent image using wording equivalent to light `reflection` on silver-halide film, which is not the intended exposure mechanism framing;
3. terminology and wording were broadly rewritten rather than preserved literally.

### Beautiful.ai verdict

**BETTER THAN NATIVE CANVA FOR CLEAN STANDARD LAYOUT, BUT FAILS THE MANDATORY SCIENCE-CONTROL GATE.**

It may be used only for:

- low-risk layout exploration;
- visual inspiration;
- non-critical standard slides whose text is revalidated before use.

It must not be the unattended full-deck author/renderer for science-critical lessons.

---

## Comparative result

| Route | Bangla visual | Notation fidelity | Projector layout | Science-critical diagrams | Editability | Cleanup / drift risk | Final role |
|---|---|---|---|---|---|---|---|
| Canva native AI | usable headings, weak small text | mostly retained | weak | FAIL | strong | high | not default |
| Beautiful.ai native | generally cleaner | FAIL on escaped `<`/`>` case | better | FAIL / omitted required diagram | strong, font-dependent | material content-rewrite risk | low-risk prototype only |
| Controlled PptxGenJS → Canva import | controlled | controlled | controlled | controlled/deterministic | strong | lowest if source deck QA passes | **PRIMARY PRODUCTION ROUTE** |
| Controlled PptxGenJS direct PPTX/PDF | controlled | controlled | controlled | controlled/deterministic | strongest source control | low | **FALLBACK / DELIVERY ROUTE** |

Scalar score is not used as the deciding criterion because a high overall design score cannot compensate for failure on mandatory scientific-meaning/diagram gates.

---

## RT-01 final decision

### Default production route

**Controlled PptxGenJS authoring/rendering with deterministic SVG/shape science visuals.**

When Canva adds useful value, import that controlled PPTX into Canva for manual finishing/editing/hosting, then run post-import visual/export QA.

### Default finishing environment

**Canva controlled-import route**, not Canva native AI generation.

### Classroom fallback

**Direct controlled PPTX + verified PDF fallback.**

The PDF remains mandatory for portability/offline safety.

### Beautiful.ai role after RT-01

Beautiful.ai is no longer a candidate unattended full-deck renderer for this science workflow. It remains optional for low-risk layout prototyping only, and any content it rewrites must be revalidated against the frozen storyboard.

### Canva native-AI role after RT-01

Canva native AI is not the default authoring route. It may be used for low-risk visual inspiration/components, but not for deterministic scientific diagrams or final verified wording without controlled replacement/QA.

---

## Typography / notation implications

1. Do not make final chapter delivery depend on proprietary/non-installed Beautiful.ai fonts.
2. Use a controlled font stack that supports Bangla reliably in the generated PPTX/PDF and test the actual export.
3. Native Unicode is acceptable for straightforward notation when verified (`°`, `10⁸`, `H₂O`, etc.).
4. Complex or renderer-sensitive equations/chemistry remain eligible for controlled SVG/LaTeX fallback.
5. High-risk ray/optics diagrams must be deterministic SVG/shape constructions and visually inspected after render.

---

## RT-01 completion verdict

`RT_01_COMPLETE — CONTROLLED_PPTX_PRIMARY — CANVA_CONTROLLED_IMPORT_FINISHING — DIRECT_PPTX_PDF_FALLBACK`

## Next action

Proceed to Lesson 1 production:

1. build deterministic high-risk visuals from the frozen storyboard/resource specification;
2. assemble the controlled 16:9 PPTX;
3. render and run scientific/typographic/projector QA;
4. optionally import to Canva for finishing only if it improves the result without changing content;
5. export and verify PDF fallback;
6. checkpoint before Lesson 2 production.
