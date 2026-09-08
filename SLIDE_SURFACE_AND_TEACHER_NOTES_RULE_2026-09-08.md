# Slide Surface and Teacher-Notes Separation Rule — 2026-09-08

Status: **ACTIVE — PRODUCTION SYSTEM V2.1 ADDENDUM**

## Trigger

During user review of the controlled Lesson 2 R3 validation pack v0.2, the user identified a production-design gap:

- the empty-vessel/coin panel did not clearly show what the picture meant;
- the mirage scientific explanation diagram was not sufficiently accurate/clear;
- visible slide text such as `বোর্ডে বলার মূল কথা` was inappropriate because the teacher will open the slide and explain it directly;
- the slide itself should carry the necessary visual, animation, video, simulation and essential information, while teacher narration belongs outside the visible slide surface.

## Canonical rule

The visible slide is the **student-facing learning surface**, not a teacher script.

Therefore, visible slide content must include:

- necessary diagrams;
- necessary labels;
- concise student-facing information;
- photos/video/animation/simulation where pedagogically useful;
- visual states needed for the student to follow the concept.

Visible slide content must **not** include teacher-operation labels such as:

- `বোর্ডে বলার মূল কথা`;
- `শিক্ষক বলবেন`;
- `এখানে বোঝাও`;
- internal QA wording;
- tool/workflow labels;
- generic teaching instructions that are meant only for the teacher.

Teacher prompts, narration cues, board-work suggestions and extended explanations belong in speaker notes/teacher notes, not in visible slide text.

## Student-facing information rule

Slides should not be empty visual wallpapers. They should contain enough concise information for a student to follow the explanation while the teacher teaches.

Allowed visible information:

- concept labels;
- short facts;
- observation vs cause;
- formula/symbol labels;
- key misconception correction;
- safety-critical note;
- model/scale disclosure;
- brief source/generation disclosure when relevant.

Avoid:

- long textbook paragraphs;
- teacher narration scripts;
- redundant bullet lists that the teacher will simply read aloud;
- hidden assumptions that make the diagram unclear without narration.

## Visual clarity rule

Every student-facing diagram must answer visually:

1. What object/phenomenon is being shown?
2. What changes between the compared states?
3. Which lines/rays/arrows are real paths and which are construction aids?
4. What misconception is being corrected?
5. What should the student infer before teacher explanation deepens it?

If a visual fails to communicate its basic purpose without a long verbal rescue, rebuild the visual.

## Applied correction to Lesson 2 validation pack

The controlled validation pack v0.3 applies this rule by:

- replacing visible `বোর্ডে বলার মূল কথা` boxes with `স্লাইডে থাকা প্রয়োজনীয় তথ্য`;
- moving teacher-only directions into speaker notes;
- rebuilding HRV-02 so the empty-vessel side explicitly shows the rim blocking the straight sight line and the water-added side shows a refracted ray reaching the eye;
- rebuilding the HRV-04 scientific mechanism panel to show cooler/denser upper air, warmer/lighter air near the road, a gradually curved ray, and a dashed apparent-extension line that explains why the road looks water-like;
- preserving concise student-facing facts instead of visible teacher script.

## QA implication

Future slide QA must fail a slide if:

- the main visual cannot be interpreted at basic level;
- a visible text box is actually a teacher script rather than student-facing content;
- required media/visual information is missing and the slide depends solely on teacher narration to make sense;
- a mechanism diagram is visually attractive but does not represent the scientific mechanism correctly.

This addendum refines `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md` v2.1 and must be considered during new-chat recovery and lesson production.
