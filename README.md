# KAUSHAL — THE SERIES

A cinematic, streaming-inspired portfolio for **Kaushal Kumar Singh**: Student Leader, Campus Community Builder & Event Coordinator at Presidency University, Bengaluru.
Every section is an episode, every leadership milestone is an Original, and the whole site plays like a series.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Highlights
- **2× Club President:** CogniCore Club & Metaverse Society Club (Presidency School of Information Science)
- **30+ University Events:** Student Coordinator managing stage operations, logistics, and crowd engagement
- **28+ NSS Events:** Student Coordinator directing on-ground social welfare initiatives & volunteer mobilization
- **Media Leadership:** Former Media Head — NSS (November 2024 – August 2026)
- **Education:** Bachelor of Computer Applications (BCA) • Presidency University, Bengaluru (Class of 2027)

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, GitHub Pages or any static host.

## Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).**

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, Instagram | `profile` |
| Leadership productions / originals | `projects` |
| Achievements & certifications | `achievements`, `certifications` |
| Skills and evidence cross-references | `skillCategories`, `skillEvidence` |
| Seasons and episodes (My Journey) | `seasons` |
| Top 10 row | `topPicks` |
| ▶ Play Intro highlight reel | `introSlides` |
| Profile order (Recruiter / Event Lead / Media & PR) | `viewerProfiles` |
| Opening studio card text | `profile.originalLabel` |

## Stack
**React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.**
