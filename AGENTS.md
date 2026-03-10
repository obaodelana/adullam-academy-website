# AGENTS.md

Field guide for any agent working inside the Adullam Academy website repo (`astro` + `tailwindcss`). Use it to stay aligned with current architecture, coding standards, and workflow practices.

## Quick Commands
1. `npm install` – install dependencies (run once per clone/update).
2. `npm run dev` – launch Astro dev server at `localhost:4321`; ideal for visual QA.
3. `npm run build` – produce static build in `dist/`.
4. `npm run preview` – serve the production build locally.
5. `npm run astro check` – optional sanity check covering content collections and type safety (there is no dedicated lint script).

> There are no automated unit tests or lint commands. For “single test” equivalents, verify specific scenarios manually in `npm run dev`, or run `npm run astro check -- --watch` while editing content-heavy code.

## Workflow Expectations
- Default branch: follow Git best practices; create feature branches unless pair-programming in-place.
- Keep existing user changes intact; never reset unrelated files.
- Comment only when logic is non-obvious; otherwise rely on naming.
- Run `npm run dev` before submitting changes to check layout, animations, and content pull-through.
- If adding dependencies or changing build settings, document the reasoning in PR/commit descriptions.
- Commit regularly as you complete meaningful chunks of work so other agents can sync without giant diffs. Each commit should cover one logical change set (content update, component refactor, etc.).
- Committing workflow: run `git status`, stage only related files, craft a concise message explaining why the change matters, then `git commit -m "your message"`. Share the resulting status/output with the user when asked.

## Architecture Snapshot
- Astro 5.17+ project with only `.astro` components (no React/Vue/Svelte).
- Tailwind CSS v4 configured entirely within `src/styles/global.css` via the `@theme` block; no `tailwind.config.js`.
- `src/layouts/BaseLayout.astro` wraps every page, handles global metadata, header/footer, skip link, announcement bar, scroll animation observer, and view transitions.
- Content lives under `src/content/` using Astro Content Collections; markdown entries drive FAQs, testimonials, and projects.
- Image service is forced to `astro/assets/services/noop` to avoid `sharp` dependency churn; prefer `public/` assets or `<img>` tags over `<Image>`.

## Pages & Routing
- `/` → `src/pages/index.astro`
- `/bootcamp` → `src/pages/bootcamp.astro`
- `/about` → `src/pages/about.astro`
- `/contact` → `src/pages/contact.astro`
- Additional routes follow Astro’s filesystem conventions; wrap new pages with `BaseLayout`.

## Content Collections
- `src/content/config.ts` defines three collections:
  - `faq`: `question`, `order?`, `category?` (`general|program|spiritual|logistics`), `published?`, body = answer.
  - `testimonials`: `name`, `role` (`Parent|Student|Pastor|Community Member`), optional `age`, `image`, `order`, `featured`, `published`, body = quote.
  - `projects`: `title`, `category` (`3D Game|2D Game|Mobile App|Website|AI Project`), `description`, optional `image`, `creators[]`, `session`, `order`, `featured`, `published`.
- Markdown lives under `src/content/{collection}/`. Keep filenames kebab-case; order content via `order` frontmatter instead of manual sorting.
- **Important**: Use `.mdx` extension for content collections to enable proper markdown rendering. Render content using `await faq.render()` and pass `Content` to components.

## Coding Standards
- Prefer TypeScript frontmatter in `.astro` files. Declare `interface Props` and destructure defaults from `Astro.props`.
- Imports order: core Astro imports (`astro:xyz`), third-party packages, global styles, local components, utilities, data/constants.
- Use `const` for static arrays/objects (e.g., nav links, hero cards). Only use `let` when mutation is needed (e.g., toggling UI state in inline scripts).
- Avoid implicit `any`. When data structures are obvious (e.g., array literals), rely on type inference but keep structure consistent.
- For data fetching, use `await getCollection(...)` with inline filters to keep unpublished entries out of production builds.
- Maintain descriptive names: `ComponentName.astro` (PascalCase), CSS helpers in kebab-case, content files kebab-case.
- Do not introduce non-Astro frameworks; logic should be client-light and server-rendered when possible.

## Error Handling & Data Safety
- Provide sensible fallbacks for optional content (e.g., default hero copy, guard image paths, check booleans before rendering sections).
- When reading frontmatter fields, default to safe values (`??` or destructured defaults). Avoid runtime `undefined` by validating lengths before iterating.
- Inline scripts should gate DOM access (check `document` availability) and re-initialize on `astro:page-load` for view transitions.
- Keep console noise out of production—remove `console.log` unless debugging locally.

## Styling & Theming
- Tailwind utilities are the default for component-level styling—compose layouts, spacing, motion, and state styles inline in `.astro` files.
- `src/styles/global.css` is reserved for theme tokens, `@apply`-based global utilities (buttons, gradients, glass, animations), and palette definitions via `@theme`. Add new CSS here only when multiple pages need the helper.
- Use defined CSS variables/colors: `navy-*` for primary surfaces, `gold-*` for accents, `cream` backgrounds, `electric-*` for tech highlights.
- Reusable utility classes:
  - Buttons: `.btn-primary`, `.btn-secondary`, `.btn-outline-gold` (include hover/active transitions).
  - Glassmorphism: `.glass`, `.glass-dark`, `.glass-gold`.
  - Gradients: `.gradient-navy`, `.gradient-gold`, `.gradient-hero`, `.gradient-text`, `.gradient-animated`.
  - Animations: `.animate-on-scroll*`, `.card-hover`, `.card-glow`, `.stagger-*`.
- Extend styles through `@theme` additions rather than ad-hoc hex values; keep gradients consistent with palette and reuse Tailwind tokens whenever possible.
- Backgrounds rarely flat—use gradients, shapes, blur blobs, or noise overlays for depth, matching existing visual language.

## Layout & Components
- `BaseLayout` ensures meta tags, fonts (Inter + Plus Jakarta Sans), favicon, announcement bar, header/footer, scroll observer, and smooth-scroll polyfill; new layouts should extend/compose it, not replace.
- Components (e.g., `Header`, `Hero`, `FeatureCard`, `Testimonial`, `CTA`) follow an `--- frontmatter ---` region with top-level `const` data and HTML below.
- Prop drilling is explicit; pass `light={true}` or `delay={index * 0.1}` style props directly.
- Keep DOM structure semantic (`<section>`, `<header>`, `<nav>`, `<main>`). Use skip links for accessibility and `aria` attributes for interactive controls (mobile menu button states, etc.).

## Scripts & Interactivity
- Inline scripts belong at the bottom of `.astro` files. Wrap logic in named functions (`initHeader`) and call on `DOMContentLoaded` plus `astro:page-load` for view transitions.
- Animation observers: IntersectionObserver defined in `BaseLayout` tracks `.animate-on-scroll*` classes. When creating new animation classes, add them to the observer’s array.
- For smooth scrolling, rely on provided polyfill targeting anchors starting with `#`.

## Formatting & Tooling
- Formatting follows Prettier-like defaults (2 spaces, semicolons via TypeScript frontmatter, double quotes in HTML attributes).
- Align attributes vertically for readability when there are multiple props.
- Inline SVG icons should keep `stroke-linecap`, `stroke-linejoin`, `stroke-width` to match existing style.
- No Cursor or Copilot rule files exist in this repo (`.cursor/`, `.cursorrules`, `.github/copilot-instructions.md` are absent); follow this document plus `CLAUDE.md` for guidance.

## Accessibility & UX
- Keep skip-to-content links and use focus-visible styles for keyboard navigation.
- Buttons/links must have discernible text and accessible hover/focus states (Tailwind utilities already provide color transitions—maintain contrast).
- For dynamic sections, maintain animation delays via `style="animation-delay: ..."` or `.stagger-*` classes to preserve staggered reveals.
- Use semantic headings in order (no jumping from `h2` to `h4`).

## Assets & Media
- Store logos under `public/logos/`, testimonial/project images under `public/images/`. Reference them with `/logos/...` or `/images/...` paths.
- Optimize assets externally before committing; there is no in-repo optimizer.
- When adding images, match current naming conventions (`logo-transparent-scaled.png`).
- For OG tags, set defaults in `BaseLayout`; override via page `Astro.props` when needed.

## QA & Deployment Checklist
1. Install dependencies if package-lock updates (usually not needed thanks to minimal deps).
2. Implement changes respecting the sections above.
3. Run `npm run dev` and visually inspect affected pages (desktop + mobile).
4. Run `npm run astro check` before shipping schema/content updates.
5. Confirm build succeeds via `npm run build` for structural changes.
6. Document manual testing steps in PR descriptions since no automated suite exists.
7. Deployments are handled automatically via `.github/workflows/deploy.yml`, which builds on pushes to `main` and publishes `dist/` to GitHub Pages using the official `actions/deploy-pages` workflow. No manual deployment steps are required unless the workflow fails.

Staying within these guardrails keeps the site’s intentional design, faith-centered storytelling, and light-weight Astro stack intact. Happy shipping!
