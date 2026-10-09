# FocusFlow — Landing Page

Responsive landing page for **FocusFlow**, a (fictional) mobile app for productivity and deep focus.

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev) for dev server and production build
- [Sass (SCSS)](https://sass-lang.com) with BEM naming for styling
- [lucide-react](https://lucide.dev) for icons
- Prettier for formatting (4 spaces, double quotes, 150 chars)

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
├── components/          # One component per block + shared UI (Logo, Title, Phone)
├── data/content.ts      # All copy and typed data (nav, features, steps, plans, reviews, footer links)
├── scss/
│   ├── base/            # _vars (colors, fonts, shadows), _reset, _repeat (title, buttons, helpers)
│   ├── blocks/          # One partial per BEM block: _header, _hero, _steps, _pricing ...
│   └── main.scss        # Imports base and blocks
├── utils/classNames.ts  # Joins BEM classes with state classes (active, scrolled, popular)
├── App.tsx
└── main.tsx
```

Styles are desktop-first: each block file ends with `@media (hover: hover)` and `max-width` queries for 1025px (tablet), 768px and 528px (mobile).

Content lives in `src/data/content.ts`, so copy and pricing can be changed without touching markup.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # preview the production build
npm run lint
npm run format    # prettier
```

## Deployment

**Vercel:** import the repository at [vercel.com/new](https://vercel.com/new) — the Vite preset is detected automatically (build: `npm run build`, output: `dist`).

**Netlify:** import the repository — settings are read from `netlify.toml`.
