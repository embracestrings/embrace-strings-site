@AGENTS.md

# Embrace Strings Website

## Project
Rebuilding embracestrings.com from scratch in Next.js. The old HTML site is at `Embrace Strings Website/` — use it as reference for copy, content, and design decisions, but don't copy it verbatim. The goal is a significantly upgraded version.

## Business
Embrace Strings designs ergonomic music products. Flagship: a tool-free adjustable chinrest for violin and viola. Founded by Turner Rey (CEO, 6'5" violinist who suffered a neck injury in college). Sold through partner shops and direct.

## Tech Stack
- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Framer Motion (install if not present: `npm install framer-motion`)
- No Aceternity UI yet — add components as needed per-page

## Brand
- **Cream:** `#f2f2f3` (background)
- **Navy:** `#16335b` (primary text/UI)
- **Gold:** `#ba9e78` (accents, hover states, active links)
- **Display font:** Cormorant Garamond (CSS var: `--font-cormorant`) — headings, logo, nav, buttons
- **Body font:** Montserrat (CSS var: `--font-montserrat`) — paragraph text, captions
- Tone: experienced string player and founder. Personal, never corporate. No emojis in B2B content.

## What's Already Built
- `app/layout.tsx` — fonts (Montserrat + Cormorant Garamond), metadata, Header + Footer wired in
- `app/globals.css` — brand color tokens, base styles
- `app/components/Header.tsx` — sticky, scroll-aware, brandmark logo centered, desktop nav left, Chinrest dropdown, mobile hamburger
- `app/components/Footer.tsx` — 3-column: social icons (Instagram/Facebook/TikTok/LinkedIn) + copyright left, brandmark center, contact info right
- `app/page.tsx` — placeholder only, needs building
- `public/` — all images copied from old site (brandmark, hero photos, team headshots, shop partner logos, etc.)

## Pages to Build
- `/` — Home (hero, features, chinrest carousel, shop partners marquee, email signup)
- `/chinrest` — Chinrest overview (hero, difference copy, 4-model grid, FAQ accordion, reviews, trial CTA)
- `/chinrest/original`, `/chinrest/bean`, `/chinrest/morawetz`, `/chinrest/tall` — individual product pages
- `/about` — Story (Turner's personal narrative), team cards, mission/values
- `/setup` — Setup guide (PDF embed + video)
- `/testing` — 14-day trial program details
- `/contact` — Contact form, free fitting info, wholesale inquiry

## Key Content (from old site)
- Contact: info@embracestrings.com · (210) 371-2757
- Social: instagram.com/embracestrings · facebook.com/people/Embrace-Strings/61565017010129 · tiktok.com/@embracestrings · linkedin.com/company/embrace-strings
- Shop partners: Terra Nova Violins, Westbank String Shop, Texas Violin Shop, Lisle Violin Shop, Sam's Strings
- Team: Turner Rey (CEO), Declan McPhillips (Director of Engineering), Akemi Nunez (Marketing Intern), Brooke Eppley (Marketing Intern)
- Email signup endpoint: https://script.google.com/macros/s/AKfycbyB8RtLNtgxdHRmOgyHSpjGOgVceIKH_iNr5KAZlaCE4tu2VtN_ZCi-qPGUAupOmEPz/exec

## Key Images in /public
- `embrace-strings-brandmark.png` — logo mark (used in header + footer)
- `embrace-strings-logo-white.png` — white version for dark backgrounds
- `embrace-violin-chinrest-side.JPG` — hero image (chinrest on violin, side view)
- `adjustable-violin-chinrest.JPG` — product photo
- `turner-chinrest-about-embrace.jpg` — Turner with violin (About page)
- `turner-embrac-founder-headshot.jpg` — Turner headshot (team card)
- `declan-embrace-strings-engineer.jpg`, `akemi-headshot.jpg`, `brooke-headshot.jpg` — team headshots
- `violin-chinrest-contact.jpg` — contact page image
- `terra_nova_violins_logo.jpg`, `westbank_string_shop_logo.jpg`, `texas_violin_shop_logo.png`, `lisle_violin_shop_logo.avif`, `sams_strings_logo.png` — shop partner logos
- `Chinrest Setup Document.pdf` — setup guide PDF

## Git / Hosting
- Repo: github.com/embracestrings/embrace-strings-site
- Hosting: Vercel (auto-deploys from main branch)
- Domain: embracestrings.com

## Conventions
- All components in `app/components/`
- Page-specific sub-components in `app/components/[page]/` if they get complex
- Use Next.js `Image` for all images (not `<img>`)
- Tailwind utility classes preferred; avoid inline styles except for CSS variables
- `"use client"` only where hooks/interactivity are needed
