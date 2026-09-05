# Chapter Analysis — Class 8 Science, Chapter 11: আলো

Date: 2026-09-05
Status: ANALYSIS_COMPLETE_SPLIT_APPROVED
Source baseline: NCTB Class 8 Science, 2026 school year; revised October 2025
Canonical source record: `sources/class-8/science/2026/SOURCE_RECORD.md`

## A. Input integrity / source identity

- Chapter identity: একাদশ অধ্যায় — আলো
- Class: 8
- Subject: বিজ্ঞান (Science)
- Full 2026 textbook PDF supplied by the user and inspected.
- Printed chapter range: pp.108–118.
- Working-copy PDF range: pp.113–123.
- Source type: image/scanned PDF with unreliable/absent native text extraction.
- Raw working-copy PDF page count: 162.
- ChatGPT ingestion layer exposed 150 pages; therefore parser page counts are not authoritative for this file.
- Visible rendered textbook pages remain authoritative for source wording.
- No material chapter-page loss was found.
- G0 result: PASS_WITH_NOTES.

Important interpretation: the recent print/revision metadata establishes source identity only. It does **not** establish that the underlying scientific content was substantively modernized. Under project policy, NCTB controls curriculum/scope/exam context, while current authoritative scientific sources control scientific correctness.

## Explicit chapter learning outcomes

The chapter opener states that students should be able to:

1. explain with diagrams everyday phenomena involving refraction of light;
2. explain total internal reflection;
3. explain the working of optical fibre;
4. explain the working of a magnifying glass;
5. explain the working of spectacles;
6. compare the human eye with a camera;
7. appreciate the contribution of light in everyday activities.

### Source-internal discrepancy

The opener includes `চশমার কাজ ব্যাখ্যা করতে পারব`, but the full chapter body through printed p.118 contains no spectacles-working subsection. This is tracked as `SI-11-001` in `SOURCE_ISSUES.md`.

## B. Chapter-wide dependency map

Approved teaching dependency sequence:

1. **Light foundation** — supplementary prerequisite
   - what light is, at Class-8 level
   - minimal wave/photon overview
   - how seeing occurs
   - chapter-relevant properties of light
   - optical medium and transparent/translucent/opaque recap
   - straight-line ray model in a homogeneous transparent medium

2. **Interface/ray foundation** — supplementary + NCTB bridge
   - boundary/interface
   - point of incidence
   - normal
   - angle measurement from the normal
   - reflection versus refraction
   - qualitative speed-change idea
   - optical density versus mass density
   - normal-incidence exception

3. **Refraction observation and rules**
   - pencil-in-water activity
   - incident ray
   - refracted ray
   - angle of incidence
   - angle of refraction
   - optically rarer → denser: toward normal
   - optically denser → rarer: away from normal
   - incident ray, refracted ray and normal lie in the same plane
   - parallel-sided slab geometry clarification

4. **Everyday refraction / apparent position**
   - immersed stick
   - coin visibility
   - fish apparent depth / aiming implication
   - actual versus apparent position
   - backward extension of rays
   - mirage, qualitatively

5. **Critical angle and total internal reflection**
   - denser → rarer progression
   - refracted angle increases with incidence angle
   - critical-angle condition: `r = 90°`
   - TIR only above critical angle and only toward a lower refractive-index medium

6. **Optical fibre**
   - light guidance by repeated total internal reflection
   - medical/observation context in textbook
   - telecommunication context

7. **Convex-lens prerequisite and magnifying glass**
   - converging action
   - focus and focal length
   - real/virtual, erect/inverted, magnified/reduced image vocabulary
   - object within focal length → virtual, upright, enlarged image

8. **Human eye**
   - eyeball
   - sclera
   - cornea
   - choroid
   - iris
   - pupil
   - lens
   - retina
   - aqueous humour
   - vitreous humour
   - retinal image
   - light regulation
   - accommodation/focusing

9. **Spectacles — source-gap repair**
   - NCTB learning outcome exists but body explanation is absent
   - only a concise scientifically verified supplementary corrective-lens principle is eligible for CORE/FLEX use
   - detailed eye-defect numericals/lens power are outside CORE

10. **Photographic camera**
    - camera body
    - lens
    - aperture/diaphragm
    - shutter
    - image formation
    - exposure
    - textbook film/photographic-plate chemistry
    - development/fixing/negative
    - explicit distinction from modern digital cameras

11. **Eye-camera comparison and synthesis**
    - compare by optical function, not literal structural identity
    - chapter-wide concept map
    - textbook exercise/ray reasoning distributed across lessons

## C. Prerequisites / bridge concepts

The following are intentionally supplied because they are necessary or high-value for understanding but are not all explicit textbook body content:

- light as electromagnetic radiation at an age-appropriate level;
- minimal wave/photon framing without quantum mathematics;
- how seeing occurs;
- straight-line ray model;
- optical medium/interface/normal;
- reflection versus refraction;
- qualitative speed change and refraction;
- optical density ≠ mass density;
- normal-incidence no-deviation case;
- actual versus apparent position;
- convex-lens converging action, focus and focal length;
- real/virtual and orientation/magnification vocabulary;
- accommodation;
- concise spectacle-correction principle.

These items must be labelled as prerequisite/supplementary support where relevant and must not be represented as verbatim NCTB text.

## D. Definitions / source-sensitive terms

| Item | Teaching role | Verification/treatment |
|---|---|---|
| আলোর প্রতিসরণ (refraction) | Main phenomenon | Use NCTB-compatible exam wording plus current-science clarification that speed changes across media and directional deviation is not guaranteed at normal incidence |
| আপতিত রশ্মি | Ray vocabulary | Diagram-dependent |
| আপতন বিন্দু | Ray vocabulary | Diagram-dependent |
| অভিলম্ব / normal | Ray vocabulary | Angle reference line |
| আপতন কোণ `i` | Ray vocabulary | Measured from normal, not surface |
| প্রতিসরিত রশ্মি | Ray vocabulary | Diagram-dependent |
| প্রতিসরণ কোণ `r` | Ray vocabulary | Measured from normal |
| optical density | Supplementary clarification | Qualitative only; distinguish from mass density |
| apparent position | Bridge/application | Explain using backward ray extension |
| সংকট কোণ | NCTB core | Incidence angle in higher-index medium for which refracted angle is 90° |
| পূর্ণ অভ্যন্তরীণ প্রতিফলন | NCTB core | Requires higher-index→lower-index direction and `i > C` |
| focus / focal length | L3 prerequisite | Conceptual only; no lens formula CORE |
| real / virtual image | L3 prerequisite | Only distinctions needed by magnifier/eye/camera |
| pupil | Eye | Opening in iris, not a solid black structure |
| accommodation | Eye bridge | Qualitative change in optical power/focusing |
| exposure | Camera | Film-camera context in textbook; duration/act of admitting light |

## E. Laws / qualitative relationships

1. Incident ray, refracted ray and normal at the point of incidence lie in the same plane.
2. For oblique incidence from optically lower-index/rarer to higher-index/denser medium, the ray bends toward the normal; in the shown case `r < i`.
3. For oblique incidence from higher-index/denser to lower-index/rarer medium, the ray bends away from the normal; in the shown case `r > i`.
4. At normal incidence the ray does not change direction although its speed changes.
5. Equal incident/emergent angle is taught only for the demonstrated parallel-sided slab geometry; it is not a universal arbitrary-interface rule.
6. At the critical angle, the refracted ray travels along the interface: `r = 90°`.
7. TIR occurs only when light travels toward a lower refractive-index medium and the incidence angle exceeds the critical angle.

No Snell-law numerical calculations are required in CORE.

## F. Diagrams / visual models required

1. Light/seeing hook.
2. Optical medium / interface / normal.
3. Reflection versus refraction.
4. Normal incidence versus oblique incidence.
5. Pencil-in-water observation and ray reconstruction.
6. Rarer→denser and denser→rarer ray diagrams.
7. Parallel-sided glass slab.
8. Stick/coin/fish apparent-position constructions.
9. Mirage qualitative ray path.
10. Critical-angle progression: `i < C`, `i = C`, `i > C`.
11. Optical-fibre cutaway.
12. Convex-lens focus/focal-length prerequisite.
13. Magnifying-glass virtual-image construction.
14. Human-eye cross-section.
15. Optional concise spectacle-correction visual.
16. Film-camera cutaway / ray diagram.
17. Eye-camera functional comparison.
18. Projector-safe versions of textbook exercise diagrams.

## G. Activities / demonstrations

- Pencil in water — strong CORE live demo with static fallback.
- Glass-block ray tracing — useful FLEX/teacher-demo option because setup and tracing can consume time.
- Coin visibility/apparent depth — strong low-cost application demo; keep compact.
- PhET Bending Light — useful optional teacher-controlled visualization for refraction/TIR; static fallback required.
- Mirage — use diagram/animation rather than attempted classroom recreation.

## H. Major misconceptions / difficult areas

1. Refraction means light always bends.
2. Angles are measured from the surface rather than the normal.
3. Optical density means ordinary mass density/heaviness.
4. The boundary itself mechanically “pushes” light.
5. Dense→rare always produces TIR.
6. At the critical angle TIR has already occurred.
7. Fish/coin physically rises.
8. Mirage is literal water or simple reflection from a wet road.
9. Optical fibre stores light.
10. Convex lens always produces the same image type.
11. Magnifying glass magnifies at any object distance.
12. Pupil is a solid black object.
13. Eye lens alone controls admitted light.
14. Spectacles physically make the eye/object bigger/smaller rather than altering ray convergence/divergence.
15. Eye and camera are structurally identical.
16. Eyelid and shutter are exact equivalents.
17. Digital cameras use film developer/fixer chemistry.
18. Retina stores a photograph like film.

## I. Current source-risk register

See `SOURCE_ISSUES.md` and `SOURCE_MAP.md`.

Key items:

- `SI-11-001`: spectacles outcome/body gap — scientific supplement verified; NCTB companion-source gap remains.
- `SI-11-002`: normal-incidence nuance — resolved.
- `SI-11-003`: incident/emergent-angle equality — resolved as parallel-sided-slab geometry dependent.
- `SI-11-004`: film-camera chemistry — verified but context-specific.

Additional slide-level verification remains mandatory for mirage wording, optical-density wording, eye simplifications and any diagram labels.

## J. Approved instructional load and lesson count

The user approved **4 presentations**, not the earlier three-lesson draft.

Planned total across four classes: approximately **209 minutes CORE + FLEX**, excluding unallocated contingency and STRETCH.

| Lesson | Working title | CORE | FLEX | Planned total |
|---|---|---:|---:|---:|
| 1 | আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম | 44 | 8 | 52 min |
| 2 | প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন | 44 | 8 | 52 min |
| 3 | উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা | 45 | 8 | 53 min |
| 4 | আলোক-চিত্রগ্রাহী ক্যামেরা, চোখের সাথে তুলনা ও অধ্যায় সংশ্লেষ | 44 | 8 | 52 min |

This follows the project timing model of roughly 40–45 min CORE + 5–10 min FLEX, leaving 5–10 min unallocated contingency in each 60-minute class.

## K. Approved lesson boundaries

### Lesson 1 — আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম

Covers:
- light/seeing foundation
- minimal wave/photon overview
- chapter-relevant properties
- optical medium
- straight-line ray model
- interface/normal/angle measurement
- reflection vs refraction
- speed change / optical density
- normal-incidence exception
- pencil-in-water demo
- refraction terminology
- qualitative bending rules

Boundary rationale: students first need a stable ray/refraction model before apparent depth, critical angle and TIR.

### Lesson 2 — প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন

Covers:
- actual vs apparent position
- stick/coin/fish applications
- mirage
- progressive denser→rarer ray behavior
- critical angle
- TIR conditions
- optical fibre

Boundary rationale: apparent-position phenomena apply ordinary refraction, then critical angle/TIR extends the same denser→rarer reasoning and optical fibre is its immediate application.

### Lesson 3 — উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা

Covers:
- convex-lens prerequisite
- focus/focal length
- essential image vocabulary
- magnifying glass
- human eye
- iris/pupil light control
- accommodation
- concise supplementary spectacles principle

Boundary rationale: magnifier, eye and corrective lenses all depend on basic lens/image concepts; prerequisite instruction prevents isolated memorization.

### Lesson 4 — আলোক-চিত্রগ্রাহী ক্যামেরা, চোখের সাথে তুলনা ও অধ্যায় সংশ্লেষ

Covers:
- camera parts/functions
- real inverted image formation
- aperture/diaphragm
- shutter/exposure
- film-camera development/fixing process
- eye-camera functional comparison
- whole-chapter synthesis
- exam-facing application

Boundary rationale: camera is easiest after students already understand convex-lens image formation and the eye; comparison then closes the chapter coherently.

## L. Deliberately excluded from CORE

Unless later evidence requires otherwise:

- full electromagnetic spectrum
- wavelength/frequency calculations
- photon-energy equation `E=hf`
- Snell-law calculations
- refractive-index calculations
- lens formula and lens-power calculations
- numerical critical-angle problems
- detailed myopia/hypermetropia derivation
- numerical optical-fibre/NA treatment
- detailed digital-camera electronics

These may appear only in FLEX/STRETCH or a future linked lesson where justified.

## M. Exam-facing opportunities

- define/describe refraction, critical angle and TIR;
- label incident/refracted ray, normal, `i`, `r`;
- predict bending direction;
- explain apparent-depth applications;
- explain TIR and optical fibre;
- explain magnifying-glass working;
- identify eye parts/functions;
- compare eye and camera;
- interpret textbook ray diagrams and contextual questions.

Exam familiarity must not override scientific correctness. Where NCTB wording is outdated or misleading, teach current science and separately note the exam-context wording when necessary.

## N. First-pilot calibration relevance

Strong tests:

- Bangla conjunct rendering and mixed Bangla/English terminology;
- `90°`, `i`, `r`, prime marks and ray labels;
- projector readability of dense anatomy/ray labels;
- diagram-heavy renderer quality;
- Beautiful.ai vs Canva export/editability;
- Hyperagent value for deterministic SVG ray paths;
- Gemini value for independent science/pedagogy review;
- 50–55 minute planned timing realism.

Weak test:

- this chapter does not strongly stress complex equations or chemistry notation, so RT-01 still needs a representative notation stress item beyond the chapter itself.

## O. Current gate

- Full chapter analysis: COMPLETE.
- Four-lesson split: APPROVED BY USER.
- Source reconciliation pass 1: COMPLETE.
- Four detailed lesson-plan drafts: COMPLETE.
- Next required stage: Gemini Review Gate A, independent validation/reconciliation, then storyboarding.
- Do not freeze or render final decks before required review/QA/RT-01 gates pass.
