# Vercel Deployment Guide

## Import

Import the GitHub repository into Vercel:

```txt
khaled931/asmae-maison
```

## Project settings

| Setting | Value |
| --- | --- |
| Framework Preset | Next.js |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Development Command | `npm run dev` |
| Output Directory | Default |

## Environment variables

Recommended:

```bash
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=bonjour@maisonasmae.com
```

## After deployment

1. Open `/fr` and verify French default content.
2. Test `/en` and `/ar`.
3. Test mobile navigation and theme toggle.
4. Replace temporary email and domain values.
5. Add final logo, imagery, and brand assets when available.
