# Lesson 1 Production QA — 2026-09-06

Lesson: `আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম`
Production route: **Controlled PptxGenJS** per `D-036`
Status: **SCIENCE/COMPATIBILITY PASS — DESIGN/ENGAGEMENT REVISION REQUIRED BEFORE CLASSROOM_READY**

## Current production verdict

The repaired PPTX now opens correctly in Microsoft PowerPoint.

However, user review identified a material production-quality gap:

- the deck does not yet implement the originally planned level of purposeful animation/progressive reveal/simulation support;
- the current UI/design/color system is not attractive enough to serve as the reusable project visual standard.

Therefore the Lesson 1 build is now classified as:

**science-correct controlled prototype, not final classroom-ready visual build.**

Canonical revision plan:
`DESIGN_ENGAGEMENT_REVISION_2026-09-06.md`

## PowerPoint compatibility issue and repair

The initial PPTX triggered Microsoft PowerPoint's repair warning.

Action taken:

- normalized/resaved through LibreOffice;
- repaired PPTX passed `slides_test.py`;
- repaired PPTX rendered successfully;
- user confirmed on 2026-09-06 that the repaired PPTX opens correctly in Microsoft PowerPoint.

Current repaired artifact:

- `Class8_Science_Ch11_Lesson1_Refraction_Basics_REPAIRED.pptx`
- SHA-256: `f5d3d16f724bc5ae2557c008356b28d6482ee0fd0a694c0572cfbb2bfbafe769`

Original PPTX is superseded for PowerPoint use.

PDF fallback remains valid:

- `Class8_Science_Ch11_Lesson1_Refraction_Basics.pdf`
- SHA-256: `a85cc0821c73b9074a827968ecb8834aa0c7bd90dbd185ea248fe9f102ab3b6a`

## Deck structure

16 slides total:

- 14 CORE (`L1-S01`–`L1-S14`)
- 2 FLEX (`L1-F01`–`L1-F02`)

Frozen timing:

- CORE: 43 min
- FLEX: 7 min
- planned: 50 min
- contingency: 10 min

## Scientific / content QA

PASS:

- deterministic ray vocabulary and geometry;
- reflection vs refraction distinction;
- normal-incidence exception;
- optical density remains qualitative and is distinguished from mass density;
- rarer→denser and denser→rarer direction rules;
- parallel-sided slab geometry is correctly bounded;
- no uncontrolled AI-labelled optics diagram is used.

No content/storyboard unfreeze is required.

## Typography / export QA

PASS_WITH_NOTES:

- Noto Sans Bengali / Noto Sans controlled stack;
- Bangla conjuncts readable;
- mixed Bangla/English stable;
- `i = 0°`, `10⁸`, `≠` and arrows render correctly;
- 16:9 widescreen;
- no slide overflow;
- repaired PPTX renders successfully;
- PDF is openable, non-scanned, unencrypted;
- CORE is offline-capable.

## Design / engagement QA

**FAIL FOR FINAL CLASSROOM_READY STANDARD.**

Material shortcomings:

1. purposeful progressive reveal/animation specified or implied by the storyboard was largely flattened into static completed states;
2. optional PhET Bending Light support from `RESOURCES.md` was not integrated into the deck;
3. UI/color/layout rhythm is too utilitarian for the project's stated visually compelling standard;
4. the deck does not yet establish the reusable first-chapter master visual system.

Required revision targets are documented in:

`DESIGN_ENGAGEMENT_REVISION_2026-09-06.md`

## Planned dynamic/interactive elements that should be implemented where useful

- L1-S02: source → object → eye progressive sequence;
- L1-S07: interface → incidence point → normal → ray/labels reveal;
- L1-S08: staged reflection/refraction comparison;
- L1-S09/L1-S10: staged speed/direction explanation;
- L1-S11/L1-S12: prediction → ray-path/rule reveal;
- L1-F01: staged glass-slab path;
- optional PhET Bending Light launch/support slide with prediction prompt + static fallback.

Animation must remain instructional rather than decorative.

## Reproducibility note

Lesson 1 was produced before `ARTIFACT_PERSISTENCE.md` was formalized. Its exact original generator source was not durably committed.

The visual-engagement v2 rebuild should also normalize Lesson 1 reproducibility under the new policy.

## Next action

**Do not proceed directly to Lesson 2 production.**

First create Lesson 1 visual-engagement prototype v2, obtain user approval of the visual/motion standard, then use that approved standard for Lessons 2–4.
