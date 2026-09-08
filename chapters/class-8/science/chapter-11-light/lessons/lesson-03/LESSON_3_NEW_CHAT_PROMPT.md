# Canonical New-Chat Prompt — Lesson 3

Use this prompt at the start of a fresh ChatGPT chat for Science Slides Lesson 3.

```text
Science Slides project — Class 8 Science, Chapter 11: আলো — Lesson 3 শুরু কর।

Canonical repository:
iqbalhimel004/science-slides

IMPORTANT WRITE BOUNDARY:
এই project-এর জন্য write permission শুধুমাত্র `iqbalhimel004/science-slides` repo-তে। অন্য কোনো connected GitHub repo-তে কোনো write/change/commit/issue/PR/branch/delete করবে না।

আগের chat history-এর ওপর নির্ভর করবে না। GitHub-কে canonical source of truth ধরে প্রথমে recovery কর।

Mandatory read/recovery order:
1. CURRENT_STATE.md
2. SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md
3. TARGETED_REVISION_SCOPE_LOCK.md
4. SLIDE_SURFACE_AND_TEACHER_NOTES_RULE_2026-09-08.md
5. NEW_CHAT_START.md
6. AGENTS.md
7. QUALITY_GATES.md
8. RENDERER_ROUTING.md
9. VISUAL_ASSET_ROUTING.md
10. CLASSROOM_LANGUAGE_POLICY.md
11. PRODUCTION_COMPATIBILITY_ENGAGEMENT.md
12. chapters/class-8/science/chapter-11-light/STATUS.md
13. chapters/class-8/science/chapter-11-light/TERMINOLOGY_LOCK.md
14. chapters/class-8/science/chapter-11-light/DIAGRAM_CONTRACTS.md
15. chapters/class-8/science/chapter-11-light/SOURCE_MAP.md
16. chapters/class-8/science/chapter-11-light/SOURCE_ISSUES.md
17. chapters/class-8/science/chapter-11-light/lessons/lesson-03/LESSON_PLAN.md
18. chapters/class-8/science/chapter-11-light/lessons/lesson-03/STORYBOARD.md
19. chapters/class-8/science/chapter-11-light/lessons/lesson-03/RESOURCES.md
20. chapters/class-8/science/chapter-11-light/lessons/lesson-03/QA.md
21. chapters/class-8/science/chapter-11-light/lessons/lesson-03/SEMANTIC_CONTRACTS_V2_1.md
22. chapters/class-8/science/chapter-11-light/lessons/lesson-03/production/LESSON_3_PRODUCTION_HANDOFF_2026-09-09.md

Current continuity:
- Lesson 1 completed/user-approved baseline — preserve.
- Lesson 2 latest artifact `Lesson2_Controlled_Full_v0_5` user accepted as sufficient to continue; do not reopen unless explicitly asked or classroom evidence requires targeted correction.
- Lesson 2 exact PowerPoint/projector/post-class delivery gates may still be pending; do not falsely mark them passed.
- Lesson 3 is now the active next work.
- Lesson 4 remains on hold.

Lesson 3 topic:
`উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা`

Core production principles:
- Production System v2.1 অনুসরণ করবে।
- Visible slide = student-facing learning surface; teacher narration/board-work guidance goes to speaker notes.
- Bangla-first classroom wording ব্যবহার করবে।
- R3 science visuals deterministic/controlled হবে; generative AI science authority হবে না।
- Final rendered pixels determine visual PASS/FAIL; montage-only QA যথেষ্ট নয়।
- Every new/materially changed R3 slide individually render করে inspect করবে।
- `slides_test.py` PASS science accuracy প্রমাণ করে না; semantic contracts + direct pixel QA বাধ্যতামূলক।
- External reviewer/Gemini feedback advisory only; authoritative science/contract দিয়ে independently verify না করে apply করবে না।
- Targeted revision দিলে `TARGETED_REVISION_SCOPE_LOCK.md` কঠোরভাবে মানবে; user যদি বলে শুধু একটি বিষয় ঠিক করতে, অন্য কিছু পরিবর্তন করবে না।
- No visible internal labels: FLEX, L3-Sxx, QA status, teacher-script labels etc.
- Canva optional finishing/context tool only; primary science-authoring route নয়।

Lesson 3 important scientific guardrails:
- convex/converging lens: parallel rays converge toward principal focus;
- concave/diverging lens: parallel rays diverge;
- CORE-এ lens formula/sign convention/power calculation নয়;
- real vs virtual image: real rays vs dashed backward extensions correctly shown;
- magnifying glass: object focal length-এর ভেতরে; image virtual, erect, enlarged;
- pupil is an opening in iris, not a solid black object;
- cornea provides most initial refractive focusing;
- crystalline lens fine-tunes focus by accommodation;
- accommodation diagram must not imply lens translation toward/away from retina;
- retina is light-sensitive receiving layer;
- myopia correction = diverging/concave lens;
- hyperopia correction = converging/convex lens;
- spectacles content is supplementary support for an NCTB learning-outcome/body-text gap.

Do NOT immediately build the full Lesson 3 deck.

First stage:
1. existing Lesson 3 plan/storyboard/resources/QA audit কর Production System v2.1 এবং Lesson 2 lessons-learned অনুযায়ী;
2. NCTB/source-gap/current-science wording verify কর;
3. exact Bangla-first structured copy/spec তৈরি বা update কর;
4. Lesson 3 semantic/diagram contracts review/complete কর;
5. small controlled R3 validation pack plan কর, minimum:
   - converging/diverging lens + focus/focal length
   - real vs virtual image convention
   - magnifying-glass ray construction
   - human-eye cross-section
   - accommodation
   - myopia/hyperopia corrective-lens concept
6. তারপর internal build → automated QA → semantic QA → individual pixel QA → repair/rebuild until PASS;
7. only internally-passed validation pack user-এর review-এ দেখাবে;
8. validation-pack acceptance-এর পর full Lesson 3 PPTX/PDF assemble করবে।

প্রথমে GitHub recovery + Lesson 3 audit কর এবং সংক্ষেপে আমাকে বল:
- current exact state,
- existing Lesson 3 plan-এ কোনো gap/conflict আছে কিনা,
- কোন R3 visuals first validation pack-এ যাবে,
- exact next production checkpoint কী।

Unnecessary clarification জিজ্ঞেস করবে না যদি GitHub থেকেই resolve করা যায়। Finish -> record -> then continue.
```
