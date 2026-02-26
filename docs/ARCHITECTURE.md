# Adullam Academy Website - Architecture Documentation

## Overview

This is the official website for Adullam Academy, a Christian coding and innovation school for kids ages 8-18. The site is built with **Astro** and **Tailwind CSS v4**, featuring a modern SaaS-inspired design with rich animations.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Astro | 5.x | Static site generator with component islands |
| Tailwind CSS | 4.x | Utility-first CSS framework |
| TypeScript | Strict | Type safety |
| Astro Content Collections | - | Markdown-driven content management |

---

## Project Structure

```
/
├── public/                    # Static assets
│   ├── logos/                 # Logo files (PNG)
│   ├── images/
│   │   ├── projects/          # Project showcase images
│   │   └── testimonials/      # Testimonial avatars
│   └── videos/                # Hero video/GIF (future)
│
├── src/
│   ├── components/            # Reusable Astro components
│   │   ├── AnnouncementBar.astro
│   │   ├── CTA.astro
│   │   ├── CoreValue.astro
│   │   ├── FAQ.astro
│   │   ├── FeatureCard.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── ProjectShowcase.astro
│   │   ├── SectionHeader.astro
│   │   ├── Stats.astro
│   │   └── Testimonial.astro
│   │
│   ├── content/               # Astro content collections
│   │   ├── config.ts          # Collection schemas
│   │   ├── faq/               # FAQ markdown files
│   │   ├── testimonials/      # Testimonial markdown files
│   │   └── projects/          # Project showcase markdown
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro   # Main page wrapper
│   │
│   ├── pages/                 # Page routes
│   │   ├── index.astro        # Homepage (/)
│   │   ├── bootcamp.astro     # Program page (/bootcamp)
│   │   ├── about.astro        # About page (/about)
│   │   └── contact.astro      # Contact page (/contact)
│   │
│   └── styles/
│       └── global.css         # Tailwind + custom CSS
│
├── docs/                      # Documentation & reference
│   ├── core.md                # Mission, vision, values
│   ├── faq.md                 # FAQ source content
│   ├── testimonials.md        # Testimonial template
│   ├── logos/                 # Original logo files
│   └── ARCHITECTURE.md        # This file
│
├── astro.config.mjs           # Astro configuration
├── package.json
└── tsconfig.json
```

---

## Design System

### Color Palette

```css
/* Navy (Primary) - Trust, professionalism */
--color-navy-950: #050d1a
--color-navy-900: #0a1628
--color-navy-800: #0f2744
--color-navy-700: #1a365d
--color-navy-600: #234876
--color-navy-500: #2d5a8f

/* Gold (Accent) - Kingdom, excellence */
--color-gold-600: #b8942f
--color-gold-500: #d4a853
--color-gold-400: #e5bc6a
--color-gold-300: #f0d08a
--color-gold-200: #f7e4b8

/* Cream (Background) - Warmth, welcome */
--color-cream: #faf8f5
--color-cream-dark: #f5f0e8

/* Electric Blue (Interactive) - Tech, innovation */
--color-electric-500: #3b82f6
--color-electric-400: #60a5fa
```

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold/Extra-bold weights, tight line-height
- **Body**: Regular weight, relaxed line-height

### Animation Classes

| Class | Effect |
|-------|--------|
| `animate-on-scroll` | Fade-in-up on viewport entry |
| `animate-on-scroll-left` | Fade-in from left |
| `animate-on-scroll-right` | Fade-in from right |
| `animate-on-scroll-scale` | Scale-in effect |
| `animate-float` | Continuous floating motion |
| `animate-bounce-soft` | Gentle bounce |
| `card-hover` | Lift + shadow on hover |
| `card-glow` | Gold glow on hover |

### Utility Classes

| Class | Purpose |
|-------|---------|
| `.glass` | Light glassmorphism |
| `.glass-dark` | Dark glassmorphism |
| `.glass-gold` | Gold-tinted glassmorphism |
| `.gradient-navy` | Navy gradient background |
| `.gradient-gold` | Gold gradient background |
| `.gradient-hero` | Hero section gradient |
| `.gradient-text` | Gold gradient text |
| `.btn-primary` | Gold primary button |
| `.btn-secondary` | Outline secondary button |
| `.btn-outline-gold` | Gold outline button |

---

## Component Reference

### Layout Components

#### `BaseLayout.astro`
Main page wrapper. Includes header, footer, announcement bar, and scroll animation observer.

**Props:**
- `title` (string): Page title
- `description` (string): Meta description
- `image` (string): OG image URL
- `transparentHeader` (boolean): Transparent header on scroll
- `showAnnouncement` (boolean): Show announcement bar

#### `Header.astro`
Responsive navigation with mobile menu and CTA buttons.

**Props:**
- `transparent` (boolean): Start with transparent background

#### `Footer.astro`
Site footer with contact info, social links, and quick navigation.

#### `AnnouncementBar.astro`
Dismissible banner for announcements.

**Props:**
- `message` (string): Announcement text
- `link` (string): CTA URL
- `linkText` (string): CTA button text
- `dismissible` (boolean): Allow dismissal

### UI Components

#### `Hero.astro`
Full-screen hero with animated background.

**Props:**
- `headline`, `subtext`: Text content
- `primaryCTA`, `primaryLink`: Primary button
- `secondaryCTA`, `secondaryLink`: Secondary button
- `videoSrc` (string): Optional video background
- `showParticles` (boolean): Show floating particles

#### `FeatureCard.astro`
Glassmorphic feature card with number badge.

**Props:**
- `title`, `description`: Content
- `number` (number): Badge number
- `delay` (number): Animation delay

#### `Testimonial.astro`
Testimonial card with avatar and quote.

**Props:**
- `quote`, `name`, `role`: Content
- `image` (string): Avatar URL
- `delay` (number): Animation delay

#### `FAQ.astro`
Accordion FAQ component.

**Props:**
- `items` (array): FAQ objects with question/answer
- `allowMultiple` (boolean): Allow multiple open
- `title` (string): Section title

#### `CoreValue.astro`
Expandable core value card with Scripture.

**Props:**
- `title`, `verse`, `reference`: Content
- `delay` (number): Animation delay

#### `Stats.astro`
Animated statistics display.

**Props:**
- `stats` (array): Stat objects with value/label/suffix

#### `ProjectShowcase.astro`
Grid display for student projects.

**Props:**
- `projects` (array): Project objects
- `showFilters` (boolean): Show category filters

#### `CTA.astro`
Call-to-action section.

**Props:**
- `headline`, `subtext`: Content
- `primaryCTA`, `primaryLink`: Primary button
- `secondaryCTA`, `secondaryLink`: Secondary button
- `variant`: 'gradient' | 'image' | 'minimal'

#### `SectionHeader.astro`
Reusable section heading.

**Props:**
- `eyebrow`, `title`, `description`: Content
- `centered` (boolean): Center align
- `gradient` (boolean): Gradient text
- `light` (boolean): Light color scheme

---

## Content Collections

### FAQ Collection (`src/content/faq/`)

**Schema:**
```typescript
{
  question: string,
  order?: number,        // Display order
  category?: 'general' | 'program' | 'spiritual' | 'logistics',
  published?: boolean
}
```

**File content:** The answer text (supports markdown).

### Testimonials Collection (`src/content/testimonials/`)

**Schema:**
```typescript
{
  name: string,
  role: 'Parent' | 'Student' | 'Pastor' | 'Community Member',
  age?: number,          // For students
  image?: string,        // Avatar filename
  order?: number,
  featured?: boolean,
  published?: boolean
}
```

**File content:** The quote text.

### Projects Collection (`src/content/projects/`)

**Schema:**
```typescript
{
  title: string,
  category: '3D Game' | '2D Game' | 'Mobile App' | 'Website' | 'AI Project',
  description: string,
  image?: string,
  creators?: string[],
  session?: string,
  order?: number,
  featured?: boolean,
  published?: boolean
}
```

---

## Page Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `index.astro` | Homepage with hero, approach, testimonials |
| `/bootcamp` | `bootcamp.astro` | Program details, schedule, projects |
| `/about` | `about.astro` | Mission, founder, values, FAQ |
| `/contact` | `contact.astro` | Contact info, location, social |

---

## External Links

| Purpose | URL |
|---------|-----|
| Registration Form | https://obaodelana.fillout.com/aa |
| Launch Course | # (placeholder) |
| Instagram | https://www.instagram.com/_adullam.academy_ |
| LinkedIn | https://www.linkedin.com/company/adullamacademy |

---

## Development

### Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Adding Content

1. **FAQ**: Add `.md` file to `src/content/faq/`
2. **Testimonial**: Add `.md` file to `src/content/testimonials/`
3. **Project**: Add `.md` file to `src/content/projects/`

See `docs/testimonials.md` for content templates.

### Updating Styles

Global styles and Tailwind configuration are in `src/styles/global.css`.
Custom colors, fonts, and animations are defined in the `@theme` block.

---

## Key Features

1. **Markdown-driven content**: All dynamic content (FAQs, testimonials, projects) lives in markdown files
2. **Rich animations**: Scroll-triggered animations, hover effects, floating particles
3. **Glassmorphism design**: Modern, SaaS-inspired card designs
4. **Responsive**: Mobile-first design with hamburger menu
5. **Accessible**: Skip links, ARIA attributes, keyboard navigation
6. **View transitions**: Smooth page transitions via Astro
7. **Performance**: Static site generation, optimized assets

---

## Future Enhancements

- [ ] Add hero video/GIF background
- [ ] Implement project image gallery
- [ ] Add testimonial photos
- [ ] Newsletter signup integration
- [ ] Google Maps embed on contact page
- [ ] Course platform integration (Launch Course button)
- [ ] Blog/news section
- [ ] Student portal login

---

*Documentation last updated: February 2026*
