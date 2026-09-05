# Gemini Review Gate A — Prompt Package

Date prepared: 2026-09-05
Status: READY_FOR_EXTERNAL_GEMINI_RUN
Chapter: Class 8 Science — Chapter 11: আলো
Repository: `iqbalhimel004/science-slides`

## Purpose

Run one independent Gemini review **before storyboard investment**. Gemini is a reviewer, not a co-author and not an authority whose findings are adopted automatically.

The review must test whether the approved four-lesson architecture is scientifically current, pedagogically coherent, realistically timed and complete enough to justify storyboarding.

## Critical source-authority rule

Treat NCTB as the curriculum/scope/exam-context source, **not as final scientific authority**.

The underlying textbook content may preserve older science across yearly reprints. Therefore:

- do not assume a recent print/revision year means the science was substantively updated;
- independently verify material science claims with current authoritative sources;
- when NCTB is outdated, ambiguous, misleading or wrong, identify the mismatch explicitly;
- distinguish `NCTB/exam wording` from `scientifically current classroom treatment`;
- prefer current authoritative science for what students are taught.

Preferred verification sources include recognized universities, high-quality open textbooks, professional scientific societies, major public scientific/health agencies, peer-reviewed/primary sources where appropriate, and other domain-appropriate authoritative references.

Avoid relying on random blogs, coaching pages, SEO summaries or unsourced social posts as scientific authority.

## Canonical files Gemini must review

Read these files from the repository before issuing a verdict:

1. `chapters/class-8/science/chapter-11-light/CHAPTER_ANALYSIS.md`
2. `chapters/class-8/science/chapter-11-light/LESSON_SPLIT_PROPOSAL_V2.md`
3. `chapters/class-8/science/chapter-11-light/COVERAGE_MATRIX.md`
4. `chapters/class-8/science/chapter-11-light/SOURCE_ISSUES.md`
5. `chapters/class-8/science/chapter-11-light/SOURCE_MAP.md`
6. `chapters/class-8/science/chapter-11-light/lessons/lesson-01/LESSON_PLAN.md`
7. `chapters/class-8/science/chapter-11-light/lessons/lesson-02/LESSON_PLAN.md`
8. `chapters/class-8/science/chapter-11-light/lessons/lesson-03/LESSON_PLAN.md`
9. `chapters/class-8/science/chapter-11-light/lessons/lesson-04/LESSON_PLAN.md`

Project policy context if needed:

- `OPERATING_BRIEF.md`
- `SOURCE_POLICY.md`
- `WORKFLOW.md`
- `QUALITY_GATES.md`
- `TOOL_ROUTING.md`
- `DECISIONS.md`
- `CURRENT_STATE.md`

## Approved lesson architecture that must not be casually rewritten

### Lesson 1
`আলো থেকে প্রতিসরণ: ভিত্তি, মাধ্যম, রশ্মি ও নিয়ম`

Planned: CORE 44 + FLEX 8 = 52 min

### Lesson 2
`প্রতিসরণের ফল, আপাত অবস্থান, সংকট কোণ ও পূর্ণ অভ্যন্তরীণ প্রতিফলন`

Planned: CORE 44 + FLEX 8 = 52 min

### Lesson 3
`উত্তল লেন্স, বিবর্ধক কাচ, মানব চক্ষু ও চশমার ধারণা`

Planned: CORE 45 + FLEX 8 = 53 min

### Lesson 4
`আলোক-চিত্রগ্রাহী ক্যামেরা, চোখের সাথে তুলনা ও অধ্যায় সংশ্লেষ`

Planned: CORE 44 + FLEX 8 = 52 min

The user has already approved the four-lesson split. Recommend changing the lesson count/boundaries only if there is a **material** scientific, pedagogical or timing reason.

## Specific review questions

### A. Decomposition and scope

1. Does the four-lesson dependency chain make sense?
2. Are any essential prerequisites missing before a dependent concept appears?
3. Is any topic placed in a lesson where it creates avoidable cognitive load?
4. Is there unnecessary duplication between lessons?
5. Is any major NCTB chapter element missing from the plan?
6. Are any supplementary additions unnecessary or too advanced for Class 8?

### B. Scientific currency and accuracy

Audit especially:

- what light is / wave-particle wording
- visible-light framing
- optical medium / optical density language
- speed-change explanation of refraction
- normal-incidence exception
- apparent position / backward-ray construction
- mirage explanation
- critical angle
- total internal reflection conditions
- optical fibre explanation
- convex-lens prerequisite
- real vs virtual image
- magnifying-glass object position
- human-eye structure/function
- accommodation
- spectacle correction principle
- eye-camera analogies
- photographic/film-camera development and fixing chemistry

For each questionable claim:

- quote or identify the exact planned claim;
- classify it as `CORRECT`, `CORRECT_BUT_SIMPLIFIED`, `OUTDATED`, `AMBIGUOUS`, `MISLEADING`, or `WRONG`;
- provide a current authoritative source;
- give a concise corrected/safer classroom treatment.

### C. Outdated-textbook risk

Look specifically for places where the lesson plan may still be too loyal to old textbook framing.

Examples:

- film camera treated as the normal contemporary camera model;
- oversimplified eye-camera equivalence;
- outdated terminology or incomplete optics explanations;
- any textbook wording that is exam-familiar but scientifically misleading.

Do **not** recommend removing exam-context awareness. Instead recommend a dual treatment when useful:

`Textbook/exam wording` + `Current scientific clarification`.

### D. Timing plausibility

Each class is 60 min.

Project timing rule:

- CORE ~40–45 min
- FLEX ~5–10 min
- planned CORE + FLEX ~50–55 min
- 5–10 min contingency intentionally unallocated

Count realistic time for:

- questions and student responses
- board writing
- demos
- media/simulation launch and debrief
- transitions
- diagram explanation
- guided practice
- exit check

Flag any lesson that is likely to overrun even if the arithmetic currently says 52–53 minutes.

### E. Pedagogy and misconception coverage

Check whether each lesson has enough:

- retrieval/prior knowledge activation
- explanatory visual opportunity
- meaningful student response
- hinge/check-for-understanding
- misconception refutation
- guided application/practice
- summary/exit check

Identify any high-risk misconception that is missing.

### F. Storyboard-readiness risks

Before storyboarding, identify anything that must be fixed first, especially:

- unstable scientific wording
- source conflict
- bad lesson boundary
- missing prerequisite
- unrealistic timing
- missing visual model
- unresolved misconception
- unnecessary content that should move to FLEX/STRETCH

## Required output format

Return the review in exactly this structure:

### 1. Executive verdict
Choose one:

- `PASS_TO_STORYBOARD`
- `PASS_WITH_TARGETED_CHANGES`
- `MATERIAL_REPLAN_REQUIRED`

Give 3–6 sentences of rationale.

### 2. Blocking findings
A table:

| ID | Severity | Lesson | Finding | Why it matters | Recommended change | Authoritative evidence |
|---|---|---|---|---|---|---|

Severity must be one of:

- `BLOCKER`
- `HIGH`
- `MEDIUM`
- `LOW`

Only `BLOCKER`/`HIGH` findings should normally stop storyboarding.

### 3. Scientific currency audit
A concise list/table of any planned claims that are outdated, ambiguous, misleading or in need of tighter wording.

### 4. Scope / prerequisite / duplication audit
State:

- missing prerequisites
- unnecessary additions
- duplicated concepts
- misplaced concepts
- missing chapter coverage

### 5. Timing audit
For Lessons 1–4 separately, give:

- current planned time
- your realistic estimate/risk
- which segment is most likely to overrun
- what to move to FLEX/STRETCH if needed

### 6. Misconception and pedagogy audit
List only material gaps or improvements.

### 7. NCTB outdated/error candidates
For each candidate, separate:

- textbook/exam-context statement
- current scientific assessment
- recommended classroom treatment
- source

### 8. Keep-as-is findings
Explicitly name important parts of the current plan that should **not** be changed.

### 9. Final pre-storyboard action list
Give a short ordered list of only the changes that should be completed before storyboarding.

### 10. Confidence and source quality
State any uncertainty, inaccessible source, or issue where stronger evidence is needed.

## Reviewer constraints

- Do not rewrite the whole course for stylistic preference.
- Do not inflate Class 8 scope with university-level optics.
- Do not treat NCTB as scientific authority merely because it is the official textbook.
- Do not treat Gemini itself as authority; cite external evidence.
- Prefer few high-value changes over many cosmetic suggestions.
- Distinguish `must fix before storyboard` from `nice to improve later`.
- If the existing plan is already sound, say so clearly.

## What happens after Gemini responds

Gemini's output is **not** automatically canonical.

ChatGPT must:

1. save the raw Gemini review in GitHub;
2. validate every material finding independently against authoritative sources and the actual NCTB pages;
3. accept / partially accept / reject each finding with reasons;
4. update source issues/lesson plans only for validated changes;
5. checkpoint `STATUS.md` and `CURRENT_STATE.md` immediately;
6. only then begin Lesson 1 storyboard.
