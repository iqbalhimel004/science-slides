# Master Plan Audit - 2026-09-05

## Scope

Audit of the Science Slides operating plan with emphasis on classroom attention, visual engagement, scientific rigor, timing, accessibility, production reliability, and tool coordination.

## Overall assessment

The original foundation was strong on source discipline, timing, chapter decomposition, repository continuity, and scientific QA. The largest gap was that visual quality was defined mostly as readability and correctness, not as a deliberate student-engagement system. Several production controls were also implicit rather than explicit.

## Gaps found and corrections

### A1 - Visual engagement was under-specified

Gap: `SLIDE_STYLE_GUIDE.md` required clarity and projector readability but did not define how to make slides consistently attractive, modern, age-appropriate, and attention-retaining.

Correction: add a dedicated visual-engagement system with visual rhythm, layout variety, focal hierarchy, subject-aware visual motifs, restrained motion, and engagement checkpoints.

### A2 - No explicit cognitive-load control

Gap: text density was discouraged, but there was no explicit check against split attention, redundant on-screen prose, excessive simultaneous labels, or decorative clutter.

Correction: add cognitive-load rules and a QA gate for coherence, signaling, segmentation, and redundancy control.

### A3 - No attention-reset cadence

Gap: student interaction existed, but there was no target cadence for attention resets during a 50-55 minute lesson.

Correction: plan a meaningful attention reset approximately every 7-10 minutes where pedagogically appropriate, using prediction, quick question, reveal, mini-demo, visual change, pair response, or short practice. This is a design heuristic, not a rigid timer.

### A4 - Animation policy was incomplete

Gap: external video/simulation policy existed, but slide-level animation/motion was not governed.

Correction: motion must reveal structure, sequence, causality, or emphasis; decorative motion is minimized. Every animated/interactive element needs a static fallback.

### A5 - No quantitative visual-accessibility baseline

Gap: high contrast was required but no baseline was recorded.

Correction: target WCAG-style contrast where practical: about 4.5:1 for normal text and 3:1 for large text/UI-like visual labels. Do not rely on color alone. Classroom projection may demand even stronger contrast.

### A6 - No explicit Bangla font/rendering/export check

Gap: typography was specified conceptually, but Bangla rendering can break across Beautiful.ai, Canva, PPTX, PDF, and projectors.

Correction: final QA must verify Bangla glyph rendering, line breaks, conjuncts, equations, symbols, and font substitution in the actual exported format.

### A7 - No design-token/master-theme discipline

Gap: consistency was desired but not operationalized.

Correction: first completed chapter calibrates a reusable master visual system: typography scale, spacing, background families, accent palette, subject accents, card/diagram styles, icon style, image treatment, and standard slide families. Changes become durable decisions.

### A8 - No class-level visual calibration

Gap: Classes 8, 9, and 10 were treated visually the same.

Correction: keep one overall identity but tune density and sophistication by grade: Class 8 more concrete/visual; Class 9 balanced; Class 10 may carry slightly denser equations, diagrams, and exam-facing structures without becoming text-heavy.

### A9 - No formal engagement-quality gate

Gap: visual usability was mixed with general QA.

Correction: add a separate engagement/design gate covering visual hierarchy, attractiveness, variation without chaos, attention flow, age appropriateness, meaningful imagery, and absence of decorative overload.

### A10 - No release-format QA

Gap: a deck could look correct in the editor but fail after export.

Correction: validate the actual classroom artifact (Beautiful.ai playback and/or exported PDF/PPTX as used), including links, QR codes, equations, videos, animations, image crops, and projector legibility.

### A11 - No offline/technical contingency standard

Gap: online-resource fallback existed only generally.

Correction: every external interactive/video needed for core instruction must have a classroom fallback: screenshot sequence, static diagram, cached/linked alternative, or teacher explanation path.

### A12 - Asset provenance and rights needed stronger operationalization

Gap: licensing notes existed but selection records did not require attribution placement or reuse mode.

Correction: asset records must state source, creator/organization where known, URL, license/usage status, whether linked/embedded/copied, and visible attribution requirement.

### A13 - No explicit design-content separation during render iteration

Gap: content freeze existed, but aesthetic iteration could still drift content.

Correction: after content freeze, design revisions may change layout, crop, emphasis, sequencing within an approved slide family, or visual treatment, but any wording/science change must reopen content QA.

### A14 - No formal student-facing readability test

Gap: projector readability was subjective.

Correction: perform a back-of-room test mindset: title, key term, formula, axis label, and diagram labels must remain readable at normal classroom projection. If a visual requires zooming to teach, redesign it.

### A15 - No explicit "visual purpose" field in storyboard

Gap: storyboards requested a visual/resource but not why it exists.

Correction: every nontrivial visual should declare one purpose: explain, compare, locate, sequence, quantify, predict, practice, or motivate. Pure decoration must be rare.

## Result

The plan should be revised to Version 2.0 with visual engagement treated as a first-class quality dimension alongside scientific accuracy, timing, and source traceability.
