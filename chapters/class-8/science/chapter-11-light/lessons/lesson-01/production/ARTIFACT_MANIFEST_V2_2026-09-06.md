# Lesson 1 v2 Artifact Manifest

Date: 2026-09-06
Status: ACTIVE V2 PROTOTYPE — USER APPROVAL PENDING

## Files generated in active runtime

| Artifact | Purpose | SHA-256 |
|---|---|---|
| `Class8_Science_Ch11_Lesson1_v2_Visual_Engagement_PPTX_SAFE.pptx` | user-facing editable PPTX, LibreOffice-normalized | `6b0173457053ba42f5fd1fadbf212f56ec6b8a716a5d4e2d1aee85b695819413` |
| `Class8_Science_Ch11_Lesson1_v2_Visual_Engagement_PPTX_SAFE.pdf` | verified PDF/static fallback | `9af37c18c8ef00693107092b7382cfa4a0651a17995f3d2c7185ee0afc2a6caa` |
| `build_lesson1_v2.js` | reproducible controlled source | `48b47ad6e715dd38eb87ee613541677567c72d7442cd969e91a8e72727e73772` |
| `l1_v2_safe_montage.png` | visual inspection montage | `4aa03410b86932ef92b0794a5b8e2e0a937632d680a48c177280b1e4775b65cc` |

## Production notes

- Native PowerPoint animation is intentionally not used in v2.
- Dynamic teaching is implemented through staged duplicate-slide reveal states.
- PhET and Physics Classroom links are hyperlinks in the simulation slide.
- CORE is offline-capable; simulation is FLEX only.
- Exact Microsoft PowerPoint repair-warning test is user-side pending.

## Rebuild command

From a configured environment with Node/PptxGenJS and LibreOffice:

```bash
node production/build_lesson1_v2.js
libreoffice --headless --convert-to pptx --outdir normalized production/Class8_Science_Ch11_Lesson1_v2_Visual_Engagement.pptx
libreoffice --headless --convert-to pdf --outdir pdfout Class8_Science_Ch11_Lesson1_v2_Visual_Engagement_PPTX_SAFE.pptx
```
