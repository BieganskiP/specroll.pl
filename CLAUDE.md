# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Specroll.pl** is a Polish local business website for a window treatment installation company (rolety, żaluzje, plisy, bramy garażowe, markizy, moskitiery) based in Wałbrzych, Poland. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Deployed on Vercel.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

### Routing (Next.js App Router)

- `/` — Home page with hero and benefits
- `/produkty` — Product listing
- `/produkty/[slug]` — Dynamic product pages (`rolety`, `zaluzje`, `plisy`, `bramy`, `markizy`, `moskitiery`)
- `/uslugi`, `/realizacje`, `/obszar-dzialania` — Static marketing pages
- `/kontakt` — Contact form page
- `/api/contact` — POST endpoint (sends emails via Nodemailer/SMTP)

### Contact Form Flow

`ContactForm.tsx` (client) → POST `/api/contact/route.ts` → Nodemailer → sends two emails: confirmation to user + notification to admin. Email HTML is generated in `src/utils/email/templates.ts`.

### Product Data

All product page content lives in a single large file: `src/app/produkty/[slug]/page.tsx`. Products are keyed by slug and include title, description, features, FAQ, image gallery, and category data. This is the authoritative source for all product content.

### Structured Data / SEO

`src/components/StructuredData.tsx` contains all JSON-LD schemas (Organization, LocalBusiness, Product, FAQ, HowTo, BreadcrumbList, Service). Company metadata (address, phones, hours, geo coordinates, NIP/VAT) is centralized here.

### Styling

Tailwind CSS with custom extensions in `tailwind.config.ts`:
- Custom color scheme under `primary` and `dark` keys
- Custom animations: `fade-in`, `slide-up`, `scale-in`, `float`
- Custom component classes in `src/styles/globals.css`: `.card-modern`, `.btn-modern-primary`, `.gradient-text`

### Client vs Server Components

- **Client** (`"use client"`): `Navigation.tsx`, `Header.tsx`, `ContactForm.tsx`, `MobileMenu.tsx`, `ZoomableImage.tsx`
- **Server**: layout, page files, `Footer.tsx`, `StructuredData.tsx`
- `ProgressSteps` and `MobileMenu` use `dynamic()` with `{ ssr: false }`

### Key Config

- `next.config.mjs`: image optimization (AVIF/WebP), react-spring package import optimization, www→non-www redirect
- `tsconfig.json`: path alias `@/*` → `./src/*`
- Environment variables (`.env.local`): SMTP credentials for Hostingowa (hb.pl), PostHog analytics key

### External Integrations

- **Email**: Hostingowa SMTP via Nodemailer
- **Analytics**: PostHog (EU instance) + Vercel Analytics + Speed Insights
- **Consent**: Usercentrics CMP (loaded in layout)
- **Hosting**: Vercel
