# Lesson 1 Production QA — 2026-09-06

Lesson: `আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম`
Production route: **Controlled PptxGenJS** per `D-036`
Status: **FIRST CONTROLLED BUILD COMPLETE — PASS_WITH_NONBLOCKING_NOTES**

## Built artifacts

Generated classroom artifacts in the active production runtime:

- `Class8_Science_Ch11_Lesson1_Refraction_Basics.pptx`
- `Class8_Science_Ch11_Lesson1_Refraction_Basics.pdf`

SHA-256:

- PPTX: `baf43046f54165e7bc705c897a02206a8966e3c9294cd3d86d2b1a50f62919c9`
- PDF: `a85cc0821c73b9074a827968ecb8834aa0c7bd90dbd185ea248fe9f102ab3b6a`

Note: GitHub storyboard/source records remain canonical. Binary classroom artifacts are generated deliverables; this record preserves their exact filenames/fingerprints and the production/QA state.

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
- rendered slide montage inspected: PASS_WITH_NOTES
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

1. Decide whether Canva finishing materially improves this controlled deck; this is optional, not required.
2. If Canva finishing is used, rerun post-import visual/export QA before replacing the direct controlled deck.
3. Real classroom/projector use should inform final numeric font-size baseline for the reusable master theme.
4. Optional PhET link check remains nonblocking because PhET is FLEX-only and static fallbacks exist.

## Production verdict

`PASS_WITH_NONBLOCKING_NOTES — CONTROLLED PPTX/PDF BUILD IS READY FOR USER REVIEW AND CAN PROCEED TO OPTIONAL FINISHING OR LESSON 2 AFTER CHECKPOINT.`

No content/storyboard unfreeze is required.
