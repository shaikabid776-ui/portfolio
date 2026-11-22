# Portfolio – Abid Shaik

One-page personal portfolio. Dark, editorial, minimal.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + lucide-react. Deployed on Vercel.

## Structure

- src/app – layout, page, globals.css
- src/components – one file per section (Navbar, Hero, About, Journey, HowIWork, Work, Contact, Footer)
- src/components/ui – small reusable pieces (SectionLabel, Button, Reveal)
- src/hooks – small reusable client hooks (useActiveSection)
- src/data/content.ts – ALL text content lives here, never hard-coded in components

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
