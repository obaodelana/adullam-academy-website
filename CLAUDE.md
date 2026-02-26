# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build to ./dist/
npm run preview  # Preview production build
```

No lint or test commands are configured.

## Architecture

This is the **Adullam Academy** website — a Christian coding school for kids ages 8-18. Built with **Astro 5** (static site generation) and **Tailwind CSS v4**.

### Key architectural patterns

- **Content Collections**: All dynamic content (FAQs, testimonials, projects) lives in markdown files under `src/content/`. Schemas are defined in `src/content/config.ts`. To add content, create a `.md` file in the appropriate subdirectory.
- **Layouts**: `src/layouts/BaseLayout.astro` wraps every page. It handles the header, footer, announcement bar, scroll animation observer, and meta tags.
- **No framework components**: The site uses only Astro components (`.astro` files) — no React/Vue/Svelte.
- **Styles**: All custom styles live in `src/styles/global.css`, which includes the Tailwind `@theme` block defining the full color palette, fonts, and animation keyframes. No `tailwind.config.js` — configuration is CSS-first via `@theme`.
- **Image service**: Set to `astro/assets/services/noop` to avoid sharp dependency issues (see `astro.config.mjs`).

### Design system

Custom Tailwind colors (defined in `@theme` in `global.css`):
- `navy-*` — primary (dark backgrounds, headings)
- `gold-*` — accent (CTAs, highlights)
- `cream` / `cream-dark` — light backgrounds
- `electric-*` — interactive/tech accents

Reusable utility classes (defined in `global.css`):
- `.glass`, `.glass-dark`, `.glass-gold` — glassmorphism cards
- `.gradient-navy`, `.gradient-gold`, `.gradient-hero`, `.gradient-text`
- `.btn-primary`, `.btn-secondary`, `.btn-outline-gold`
- `.animate-on-scroll`, `.animate-on-scroll-left`, `.animate-on-scroll-right`, `.animate-on-scroll-scale` — scroll-triggered fade-in animations (activated by JS observer in BaseLayout)
- `.card-hover`, `.card-glow` — hover effects

### Pages

| Route | File |
|-------|------|
| `/` | `src/pages/index.astro` |
| `/bootcamp` | `src/pages/bootcamp.astro` |
| `/about` | `src/pages/about.astro` |
| `/contact` | `src/pages/contact.astro` |

### Content collection schemas

- **FAQ** (`src/content/faq/`): frontmatter `question`, `order?`, `category?`, `published?`; body = answer
- **Testimonials** (`src/content/testimonials/`): frontmatter `name`, `role`, `age?`, `image?`, `order?`, `featured?`, `published?`; body = quote
- **Projects** (`src/content/projects/`): frontmatter `title`, `category`, `description`, `image?`, `creators?`, `session?`, `order?`, `featured?`, `published?`

Static assets referenced by content live in `public/images/` (projects, testimonials) and `public/logos/`.
