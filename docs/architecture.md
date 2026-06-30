# Architecture

Maison Asmae is built as a multilingual Next.js application with a lightweight content layer.

## Principles

- Premium editorial feel, not a generic template.
- Mobile-first interface.
- French as default language.
- Arabic RTL support from the beginning.
- No CMS in phase one; content remains structured and version-controlled.
- Ready for Vercel import from GitHub.

## Route structure

```txt
src/app/page.tsx                    # redirects to /fr
src/app/[locale]/layout.tsx         # locale-aware shell
src/app/[locale]/page.tsx           # home
src/app/[locale]/services/page.tsx
src/app/[locale]/programmes/page.tsx
src/app/[locale]/corporate/page.tsx
src/app/[locale]/letters/page.tsx
src/app/[locale]/letters/[slug]/page.tsx
src/app/[locale]/contact/page.tsx
```

## Content layer

All copy and structured page content lives in:

```txt
src/content/site.ts
```

This includes navigation, home page copy, services, programmes, corporate content, contact text, and journal posts.

## Styling

The visual system is implemented in:

```txt
src/app/globals.css
```

It uses CSS custom properties for theming and a restrained palette inspired by quiet luxury: ivory, ink, warm taupe, sand, and muted gold.

## Theme system

The dark/light toggle is handled by `src/components/ThemeToggle.tsx` and stores preference in `localStorage`.

## Internationalization

The locale system is intentionally simple:

```txt
src/lib/i18n.ts
```

Supported locales are `fr`, `en`, and `ar`.
