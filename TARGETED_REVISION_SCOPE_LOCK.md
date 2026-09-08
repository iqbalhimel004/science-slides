# Targeted Revision Scope Lock

Version: 1.0
Date adopted: 2026-09-08
Status: **ACTIVE — HARD PRODUCTION RULE**

## Purpose

This rule was added after Lesson 2 regression incidents where a user requested one narrowly targeted correction but unrelated visuals were also changed and became worse.

The purpose is to prevent collateral edits, preserve accepted work, and keep iterative slide production fast and predictable.

## Hard rule

When the user gives a targeted correction such as:

- `শুধু কোণ ঠিক কর`;
- `শুধু এই ছবিটা বদলাও`;
- `চিত্র ছাড়া আর কিছুই পরিবর্তন করবেনা`;
- `শুধু বানানটা ঠিক কর`;

that instruction defines a **hard edit boundary**.

Do not make opportunistic improvements outside that boundary.

## Required workflow

1. Start from the latest accepted/reviewed artifact, not from an older draft.
2. Identify the exact affected slide(s), element(s), text or component(s).
3. Change only those requested targets.
4. Preserve all unrelated slide text, layout, notes, terminology, order, images, links, animation and media.
5. Revalidate only the affected chain using the selective-invalidation policy.
6. Compare untouched slides against the prior artifact when practical.
7. If the renderer/tool forces a collateral change, stop and explain the dependency before making it unless the collateral change is purely internal and provably pixel-identical.
8. Record the exact scope and regression check in the QA checkpoint.

## Pixel-preservation rule

For a targeted revision, unaffected slides should remain pixel-identical to the previous accepted artifact whenever technically practical.

Recommended verification:

- render old and new deck;
- hash rendered slide PNGs;
- confirm only requested slide(s) changed;
- individually inspect requested slide(s).

If pixel identity is not possible because of a toolchain/export change, document why and run broader regression QA before user review.

## No silent redesign

A targeted correction is not permission to:

- restyle the deck;
- replace unrelated diagrams;
- rewrite nearby text;
- change terminology;
- merge/split slides;
- alter animations/media;
- change slide order;
- make aesthetic cleanups that were not requested.

If a broader redesign appears materially necessary, propose it separately after the requested correction is completed.

## External-review rule

Feedback from Gemini, another AI, reviewer, website or teacher is advisory until independently checked against the canonical source/science contracts.

Apply only the verified parts of external feedback. Do not change scientifically correct or user-accepted content merely because an external reviewer suggested a different presentation choice.

## Precedence

This file refines:

- `SCIENCE_SLIDES_PRODUCTION_SYSTEM_V2.md`;
- the selective-revalidation rule;
- the repair circuit breaker;
- the user-review rule.

For targeted edits, this hard scope lock must be applied before any edit is made.
