# Lesson 1 Production QA — 2026-09-06

Lesson: `আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম`
Production route: **Controlled PptxGenJS** per `D-036`
Status: **FIRST CONTROLLED BUILD COMPLETE — USER_POWERPOINT_REPAIR_WARNING_FOUND — REPAIRED_PPTX_PROVIDED**

## Important post-delivery issue

On 2026-09-06, the user opened the initial PPTX in Microsoft PowerPoint on Windows and PowerPoint showed:

> PowerPoint found a problem with content ... PowerPoint can attempt to repair the presentation.

This means the initial PPTX passed ZIP/XML parsing, LibreOffice rendering, `slides_test.py`, PDF generation and visual QA, but still triggered Microsoft PowerPoint's stricter repair check.

Action taken:

- the original PPTX was opened/resaved through LibreOffice to normalize the OpenXML package;
- the repaired PPTX passed `slides_test.py`;
- the repaired PPTX rendered successfully to slide images;
- the rendered montage was visually inspected;
- the original verified PDF fallback remains unchanged and usable.

Repaired artifact supplied to user:

- `Class8_Science_Ch11_Lesson1_Refraction_Basics_REPAIRED.pptx`

Repaired PPTX SHA-256:

- `f5d3d16f724bc5ae2557c008356b28d6482ee0fd0a694c0572cfbb2bfbafe769`

Production implication:

- The original PPTX must be treated as **superseded for classroom PowerPoint use**.
- The repaired PPTX should be used for PowerPoint review/classroom testing.
- Lesson 2 onward must include a Microsoft-PowerPoint-compatibility check if possible, or at minimum a LibreOffice normalize/resave step plus user-side PowerPoint smoke test before classroom-ready lock.

## Built artifacts

Generated classroom artifacts in the active production runtime:

Initial artifacts:

- `Class8_Science_Ch11_Lesson1_Refraction_Basics.pptx` — superseded for PowerPoint use because it triggered a Microsoft repair warning
- `Class8_Science_Ch11_Lesson1_Refraction_Basics.pdf` — still valid fallback

Current user-facing repaired PPTX:

- `Class8_Science_Ch11_Lesson1_Refraction_Basics_REPAIRED.pptx`

SHA-256:

- Original PPTX: `baf43046f54165e7bc705c897a02206a8966e3c9294cd3d86d2b1a50f62919c9`
- Repaired PPTX: `f5d3d16f724bc5ae2557c008356b28d6482ee0fd0a694c0572cfbb2bfbafe769`
- PDF: `a85cc0821c73b9074a827968ecb8834aa0c7bd90dbd185ea248fe9f102ab3b6a`

Note: GitHub storyboard/source records remain canonical. Binary classroom artifacts are generated deliverables; this record preserves exact filenames/fingerprints and the production/QA state. Lesson 1 still needs reproducibility normalization before final chapter `CLASSROOM_READY` status because the first-build generator source was not committed before artifact creation.

## Deck structure

16 slides total:

- 14 CORE slides (`L1-S01`–`L1-S14`)
- 2 FLEX slides (`L1-F01`–`L1-F02`)

Frozen timing remains:

- CORE: 43 min
- FLEX: 7 min
- planned: 50 min
- contingency: 10 min

## Production implementation

### Deterministic visuals built

- seeing/light-to-eye process
- chapter-relevant light-properties schematic
- optical-medium comparison
- pencil-in-water demo fallback illustration
- interface / point of incidence / normal diagram
- reflection vs refraction comparison
- speed-change / optical-density qualitative bridge
- normal-incidence comparison
- rarer→denser bending rule
- denser→rarer bending rule
- parallel-sided glass-slab FLEX geometry
- summary/exit/practice visual structures

No uncontrolled AI-labelled optics diagram is used.

## Scientific visual QA

### PASS — ray vocabulary

- incidence point clearly marked;
- normal is perpendicular to interface;
- warning retained that angles are measured from the normal, not the surface.

### PASS — reflection vs refraction

- reflection returns into the first medium;
- refracted ray enters the second medium;
- wording preserves the normal-incidence exception.

### PASS — speed-change bridge

- optical density remains qualitative;
- `Optical density ≠ mass density` is explicit;
- no unsourced material-number example is used.

### PASS — normal incidence

- normal-incidence ray remains undeviated in direction;
- slide explicitly separates direction from speed change.

### PASS — rarer→denser

- oblique refracted ray bends toward the normal.

### PASS — denser→rarer

- oblique refracted ray bends away from the normal.

### PASS — parallel-sided slab FLEX

- slab faces are parallel;
- incident and emergent rays are parallel in the drawn geometry;
- emergent-angle equality is explicitly bound to this parallel-sided geometry and not generalized.

## Typography / notation QA

Controlled font stack:

- Bangla: `Noto Sans Bengali`
- Latin/scientific notation: `Noto Sans` where needed

Verified visually after rendering:

- Bangla conjuncts and vowel marks are readable;
- mixed Bangla/English is stable;
- `i = 0°`, `10⁸`, `≠`, arrows and Latin scientific labels render correctly;
- no Beautiful.ai proprietary-font dependency remains.

PDF text layer is substantially more usable than the native-AI RT-01 outputs; representative Bangla and English strings are extractable with `pdftotext`.

## Layout / projector QA

- 16:9 widescreen: PASS
- `slides_test.py`: PASS — no overflow detected
- repaired PPTX render montage inspected: PASS_WITH_NOTES
- PDF render montage inspected: PASS_WITH_NOTES
- high-risk labels/rays remain legible at the rendered slide level
- no slide requires internet to teach CORE content

Nonblocking note:

- a few small secondary/support labels are intentionally lighter/smaller than the main teaching text; if real classroom projection proves weak, numeric visual baselines should be raised from this first-pilot evidence rather than shrinking/adding more content.

## Overlap diagnostics

PptxGenJS helper diagnostics reported a small number of expected geometry/background intersections (for example, pencil crossing water, ray crossing interface, text placed on a colored medium band). These were visually inspected and are intentional, not clipping/content collisions.

No unintended severe text-to-text overlap remains. `slides_test.py` reports no overflow.

## PDF fallback QA

PDF generated from the controlled PPTX via LibreOffice.

Preflight:

- pages: 16
- encrypted: no
- openable: yes
- likely scanned: no

Rendered PDF visually matches the controlled PPTX closely at the current QA level.

## Remaining Lesson 1 decisions before classroom-ready lock

1. User should open the repaired PPTX in Microsoft PowerPoint and confirm the repair warning is gone.
2. Decide whether Canva finishing materially improves this controlled deck; this is optional, not required.
3. If Canva finishing is used, rerun post-import visual/export QA before replacing the direct controlled deck.
4. Real classroom/projector use should inform final numeric font-size baseline for the reusable master theme.
5. Optional PhET link check remains nonblocking because PhET is FLEX-only and static fallbacks exist.
6. Lesson 1 reproducibility should be normalized before final chapter `CLASSROOM_READY` lock.

## Production verdict

`REPAIRED PPTX PROVIDED — USER POWERPOINT SMOKE TEST PENDING — CONTENT/SCIENCE QA STILL PASS_WITH_NONBLOCKING_NOTES.`

No content/storyboard unfreeze is required.
