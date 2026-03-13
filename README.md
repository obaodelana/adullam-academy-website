# Adullam Academy Website

Official repository for [Adullam Academy](https://adullamacademy.com), a faith-centered coding bootcamp for kids ages 8-18. The site is built with **Astro 5** and **Tailwind CSS v4**, deploys to GitHub Pages, and sources rich content from Astro Content Collections.

## Stack

- **Framework:** Astro (static output)
- **Styling:** Tailwind CSS v4 with tokens defined in `src/styles/global.css`
- **Content:** Markdown collections (`faq`, `testimonials`, `projects`, `heroIndicators`)
- **Deployment:** GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)

## Project Structure

```
/
├── public/                 # Static assets (logos, images, videos)
├── src/
│   ├── components/         # Reusable .astro components
│   ├── content/            # Markdown entries validated by content collections
│   │   ├── config.ts       # Collection schemas
│   │   ├── faq/            # FAQ entries (.md)
│   │   ├── heroIndicators/ # Hero trust indicator entries (.md)
│   │   ├── projects/       # Project showcase entries (.md)
│   │   └── testimonials/   # Testimonial entries (.md)
│   ├── data/               # Static data (links.ts)
│   ├── layouts/            # BaseLayout wraps every page
│   ├── pages/              # Route-based pages (/, /bootcamp, /about, /contact)
│   └── styles/global.css   # Tailwind @theme tokens + shared utilities
├── astro.config.mjs        # Astro config (site URL, Tailwind plugin, noop image service)
├── package.json
└── .github/workflows/deploy.yml  # CI/CD pipeline
```

## Commands

Run everything from the repository root:

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies (Node 20 recommended) |
| `npm run dev` | Start the Astro dev server at `http://localhost:4321` |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro check` | Validate content collections and types (requires `@astrojs/check`) |

## Deployment

1. Merge or push to `main`.
2. GitHub Actions workflow `.github/workflows/deploy.yml` installs deps, runs `npm run build`, uploads `dist/`, and deploys via `actions/deploy-pages`.
3. GitHub Pages hosts the built site at `https://adullamacademy.com`.

If the workflow fails, re-run it from the Actions tab after addressing the error.

## Content & Customization

| Section | Collection Path | Frontmatter Highlights |
| --- | --- | --- |
| FAQs | `src/content/faq/*.md` | `question`, `order`, `category`, `published` |
| Testimonials | `src/content/testimonials/*.md` | `name`, `role`, `age?`, `image`, `order`, `featured`, `published` |
| Projects | `src/content/projects/*.md` | `title`, `category`, `description`, `image?`, `creators[]`, `session`, `order`, `featured`, `published` |
| Hero Indicators | `src/content/heroIndicators/*.md` | `value`, `subValue?`, `label`, `icon?`, `order`, `published` |

- Schemas live in `src/content/config.ts`; frontmatter must match the defined shapes.
- Place shared images under `public/images/` and logos under `public/logos/`.
- `BaseLayout.astro` wraps every page, injecting metadata, header/footer, announcement bar, animation observer, and view transitions.

## Styling Notes

- Tailwind utilities are preferred inside components. Use `global.css` only for shared tokens/utilities.
- Color palette and typography tokens (`navy-*`, `gold-*`, `cream`, `electric-*`) are defined in the `@theme` block.
- Reusable utility classes: `.btn-primary`, `.glass`, `.gradient-*`, `.animate-on-scroll*`, `.card-hover`, `.card-glow`.
