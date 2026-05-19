# AETHER Rewrite Audit (Baseline)

## Current File Tree

```text
web/
  docs/
  index.html
  metadata.json
  package.json
  src/
    App.tsx
    index.css
    main.tsx
    components/
      Expertise.tsx
      Footer.tsx
      Hero.tsx
      InquiryModal.tsx
      Layout.tsx
      Nav.tsx
      ServicesGrid.tsx
      ui/
        Button.tsx
        Input.tsx
        Textarea.tsx
    config/
      navigation.ts
    lib/
      utils.ts
    pages/
      Cases.tsx
      Contact.tsx
      Expertise.tsx
      Home.tsx
      Journal.tsx
      NotFound.tsx
      Studio.tsx
    test/
      AppParity.test.tsx
      Button.test.tsx
      InquiryModal.test.tsx
      InquiryModalParity.test.tsx
      LayoutParity.test.tsx
      Navigation.test.tsx
      Routing.test.tsx
      setup.ts
  tsconfig.json
  vite.config.ts
```

## Route Map

- `/` -> Home
- `/studio` -> Studio
- `/expertise` -> Expertise
- `/cases` -> Cases
- `/journal` -> Journal
- `/contact` -> Contact
- `*` -> NotFound

## Component Inventory

- Layout shell: `Layout`, `Nav`, `Footer`, `InquiryModal`
- Home sections: `Hero`, `ServicesGrid`, `Expertise`
- UI primitives: `Button`, `Input`, `Textarea`
- Utility: `cn` (`clsx` + `tailwind-merge`)

## Modal/Dialog Inventory

- `InquiryModal` (global, opened from nav)
- 3 states: Step 1 (project details), Step 2 (contact), Step 3 (success)
- Close points: top-right close icon and success `CONTINUE`

## Form Inventory

- Inquiry modal form (`react-hook-form` + `zod`):
  - `budget` required
  - `timeline` required
  - `description` min 10
  - `name` min 2
  - `email` valid email
  - `company` optional
- Contact page form:
  - Presentational inputs only
  - Submit prevented (`onSubmit={e => e.preventDefault()}`)
  - CTA button is `type="button"`

## Animation/Motion Inventory

- Page hero/header entrance animations (`motion`)
- In-view reveal animations across sections/cards
- Modal enter/exit + per-step transitions + success pulse/glow
- Button hover/tap scale interactions
- CSS `status-orb` breathe animation

## Dependency Audit

- Framework/runtime: React 19, React Router 7, Vite 6
- Styling: Tailwind CSS v4 (`@tailwindcss/vite`), utility merge (`clsx`, `tailwind-merge`)
- Forms/validation: `react-hook-form`, `zod`, `@hookform/resolvers`
- Motion/icons: `motion`, `lucide-react`
- Testing: Vitest, Testing Library, jsdom, jest-dom
- Non-UI/server deps currently present but not used in frontend rendering path: `express`, `dotenv`, `@google/genai`

## Technical Debt Identified

- Initial tests were shallow and missed route/content/flow parity checks.
- Test setup mocks were duplicated per test file.
- `jsdom` runtime compatibility mismatch caused failing test workers.
- `tsconfig` lacked strict mode and JS allowance was overly permissive.
- Navigation/footer static lists were hardcoded in component bodies.
- Some dev-only comments/config text had encoding artifacts in `vite.config.ts`.

## User-Visible Behaviors To Preserve Exactly

- Route structure and rendered page content per route.
- Fixed top nav with active-link styling behavior.
- Footer structure, links, labels, and newsletter form presence.
- Inquiry modal open/close behavior and 3-step flow.
- Inquiry validation messages and gating between steps.
- Button labels and link labels/copy across pages.
- Responsive classes/breakpoint behavior as currently implemented.
- Motion feel (entry transitions, in-view reveals, button interactions, status orb).
- 404 experience wording and layout.
