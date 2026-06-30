# Maison Asmae

A refined multilingual MVP platform for Maison Asmae: a cultural intelligence, hospitality, and executive refinement house.

The platform is designed as a quiet-luxury showcase and conversion website, with structured editorial content and a production-ready foundation for Vercel.

## Stack

- Next.js App Router
- TypeScript
- CSS custom properties and responsive layout system
- File-based multilingual content
- French default locale with English and Arabic routes
- Light / dark mode toggle
- Vercel-ready configuration

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` and you will be redirected to `/fr`.

## Scripts

```bash
npm run dev        # Start local development server
npm run build      # Production build
npm run start      # Start production server
npm run typecheck  # TypeScript validation
npm run lint       # ESLint validation
```

## Languages

| Locale | Route | Direction | Status |
| --- | --- | --- | --- |
| French | `/fr` | LTR | Default |
| English | `/en` | LTR | Enabled |
| Arabic | `/ar` | RTL | Enabled |

## Main routes

- `/fr`, `/en`, `/ar`
- `/[locale]/services`
- `/[locale]/programmes`
- `/[locale]/corporate`
- `/[locale]/letters`
- `/[locale]/letters/[slug]`
- `/[locale]/contact`

## Content management

The first phase does not use a CMS. Content is managed through structured TypeScript files:

```txt
src/content/site.ts
```

This keeps the platform lightweight while preserving a clean path toward a future CMS.

## Vercel deployment

1. Import `khaled931/asmae-maison` into Vercel.
2. Framework preset: `Next.js`.
3. Build command: `npm run build`.
4. Output directory: leave default.
5. Add environment variables if needed:

```bash
NEXT_PUBLIC_SITE_URL=https://your-vercel-url.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=bonjour@maisonasmae.com
```

## Notes

- The contact form is intentionally simple for MVP and uses email as the primary conversion path.
- Editorial content is structured under “Letters from Maison Asmae”.
- Brand visuals are implemented as a temporary quiet-luxury identity until final logo, photography, and typography are available.
