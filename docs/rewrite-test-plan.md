# Rewrite Test Plan (Parity-First)

## Scope

This suite captures current behavior before deeper refactors. Assertions target existing output and interaction behavior, not aspirational improvements.

## Route Rendering

- Verify each route renders its current page-signature content:
  - `/` -> home hero copy
  - `/studio` -> studio headline
  - `/expertise` -> expertise headline
  - `/cases` -> cases headline
  - `/journal` -> journal headline
  - `/contact` -> contact headline
  - unknown route -> `Signal Lost` 404

## Navigation Behavior

- Verify nav links are present (Studio, Expertise, Cases, Journal, Contact).
- Verify `START PROJECT` in nav opens Inquiry modal.

## Visible Content Presence

- Verify key static copy for route signatures remains present.
- Verify global layout shell renders expected shared content blocks.

## Modal Open/Close Behavior

- Closed state returns `null`.
- Open state renders context panel and step 1 form.
- Close button dismisses modal.
- Success-step `CONTINUE` triggers close callback.

## Multi-Step Form Behavior

- Step 1 only advances when `budget`, `timeline`, `description` are all present.
- Progresses from Step 1 -> Step 2 with required fields populated.
- Completes Step 2 submission and reaches success Step 3.

## Validation States

- Keep existing zod validation messages and required gating behavior.
- Preserve email/name constraints on final submit flow.

## Button/Link Actions

- Keep button click behavior and variant rendering checks (`Button` primitive).
- Keep route links and CTA labels unchanged.

## Responsive Expectations (testable)

- Verify DOM/content parity independent of viewport.
- Preserve current class-driven breakpoint behavior (validated through component markup parity + route tests).

## Tooling Baseline

- Vitest + jsdom + Testing Library + jest-dom.
- Shared setup mocks: `matchMedia`, `IntersectionObserver`, `scrollTo`.

## Current Baseline Coverage

- `19` passing tests across:
  - route parity
  - navigation presence
  - modal lifecycle
  - modal multi-step progression
  - button primitive behavior
