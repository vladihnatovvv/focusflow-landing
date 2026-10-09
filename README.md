# FocusFlow — Landing Page

Responsive landing page for **FocusFlow**, a (fictional) mobile app for productivity and deep focus.

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev) for dev server and production build
- [Tailwind CSS 3](https://tailwindcss.com) for styling
- [lucide-react](https://lucide.dev) for icons

## Sections

| Section       | Highlights                                                                 |
| ------------- | -------------------------------------------------------------------------- |
| Header        | Sticky, blurred on scroll, logo, menu, "Get Started", animated mobile menu |
| Hero          | Headline, description, CTAs, stats, app illustration built in code        |
| Features      | 6 features with icons, hover states                                        |
| How it works  | 3 numbered steps with a connector line on tablet/desktop                   |
| Pricing       | 3 plans, monthly / yearly toggle, highlighted "Pro" plan                    |
| Testimonials  | 3 reviews with ratings                                                     |
| Footer        | Contact info, newsletter form, link groups, social links, copyright        |

## Responsive & accessibility details

- Mobile-first layout tested at 390px (mobile), 820px (tablet) and 1440px (desktop) with no horizontal scroll
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`, `address`, `figure/blockquote`)
- Skip link, visible focus rings, `aria-expanded` / `aria-pressed` on interactive controls
- Mobile menu closes on link click, `Escape` and when resizing to desktop
- Respects `prefers-reduced-motion`

## Project structure

```
src/
├── components/      # One component per section + shared UI (Logo, SectionHeading, PhoneMockup)
├── data/content.ts  # All copy and typed data (nav, features, steps, plans, testimonials)
├── App.tsx          # Page composition
├── index.css        # Tailwind layers + small set of reusable component classes
└── main.tsx
```

Content lives in `src/data/content.ts`, so copy and pricing can be changed without touching markup.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # preview the production build
npm run lint
```

## Deployment

**Vercel:** import the repository at [vercel.com/new](https://vercel.com/new) — the Vite preset is detected automatically (build: `npm run build`, output: `dist`).

**Netlify:** import the repository — settings are read from `netlify.toml`.
