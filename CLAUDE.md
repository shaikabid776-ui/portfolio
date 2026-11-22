# Portfolio – Abid Shaik

One-page personal portfolio. Dark, editorial, minimal.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + lucide-react. Deployed on Vercel.

## Structure

- src/app – layout, page, globals.css, plus generated metadata files (opengraph-image, icon, apple-icon, sitemap, robots)
- src/components – one file per section (Navbar, Hero, Stats, About, Journey, HowIWork, Work, Contact, Footer) and their client parts (WorkAreaAccordion, CopyEmailButton, MotionProvider, MotionToggle, SkipLink)
- src/components/ui – small reusable pieces (Button, Container, CountUp, Reveal, ScrambleText, SectionHeading, SectionLabel, GitHubIcon, LinkedInIcon) and shared class strings in styles.ts
- src/hooks – small reusable client hooks (useActiveSection)
- src/lib – non-component helpers (siteUrl, formatIndex, motionPreference and revealState head scripts, brandColors, imageFonts, monogramImage)
- src/data/content.ts – ALL text content lives here, never hard-coded in components
- assets/fonts – TTF files read by the generated images (next/og needs TTF, not woff2)

## Code rules

- Small, readable components; one job each
- Clear names; no abbreviations
- Comments only to explain why, never what
- No unused code, imports or packages
- No placeholder text, no emojis in code
- Prefer Tailwind classes; avoid inline styles
- Server components by default; add "use client" only where needed (animation, state)
- Respect prefers-reduced-motion
- Keep it simple: no state libraries, no extra dependencies without asking me
- Also follow the Next.js notes in AGENTS.md

## Working with me

- Plan first, then wait for my approval
- Change only what the task needs
- After changes, explain what you did in 3-5 short points
