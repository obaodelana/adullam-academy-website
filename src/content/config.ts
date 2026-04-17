/**
 * Astro Content Collections Configuration
 *
 * Defines schemas for content collections used throughout the site:
 * - FAQ: Frequently asked questions
 * - Testimonials: Parent and student testimonials
 * - Projects: Student project showcases
 *
 * Collections are stored in src/content/{collection-name}/ as markdown files.
 * Each file's frontmatter is validated against the schema defined here.
 */

import { defineCollection, z } from "astro:content";

/**
 * FAQ Collection
 *
 * Stores frequently asked questions with answers.
 * Answers can contain HTML for formatting.
 */
const faqCollection = defineCollection({
  type: "content",
  schema: z.object({
    // The question text
    question: z.string(),
    // Display order (lower = first)
    order: z.number().optional().default(99),
    // Category for grouping (optional)
    category: z
      .enum(["general", "program", "spiritual", "logistics", "pricing"])
      .optional()
      .default("general"),
    // Whether to show this FAQ
    published: z.boolean().optional().default(true),
  }),
});

/**
 * Testimonials Collection
 *
 * Stores testimonials from parents, students, and others.
 * Content of the file is the quote text.
 */
const testimonialsCollection = defineCollection({
  type: "content",
  schema: z.object({
    // Person's name (can be first name only for privacy)
    name: z.string(),
    // Their role/relationship
    role: z.enum(["Parent", "Student", "Pastor", "Community Member"]),
    // Optional: student's age (for student testimonials)
    age: z.number().optional(),
    // Optional: avatar image filename (stored in public/images/testimonials/)
    image: z.string().optional(),
    // Display order (lower = first)
    order: z.number().optional().default(99),
    // Whether to feature this testimonial prominently
    featured: z.boolean().optional().default(false),
    // Whether to show this testimonial
    published: z.boolean().optional().default(true),
  }),
});

/**
 * Projects Collection
 *
 * Stores student project showcases for the portfolio section.
 */
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    // Project title
    title: z.string(),
    // Project category
    category: z.enum([
      "3D Game",
      "2D Game",
      "Mobile App",
      "Website",
      "AI Project",
    ]),
    // Short description (displayed in grid)
    description: z.string(),
    // Image filename (stored in public/images/projects/)
    image: z.string().optional(),
    // Student/team names (optional)
    creators: z.array(z.string()).optional(),
    // Bootcamp session (e.g., "Fall 2025")
    session: z.string().optional(),
    // Display order
    order: z.number().optional().default(99),
    // Whether to feature this project
    featured: z.boolean().optional().default(false),
    // Whether to show this project
    published: z.boolean().optional().default(true),
  }),
});

/**
 * Hero Indicators Collection
 *
 * Stores trust indicators displayed in the hero section.
 * Each file represents one indicator with value, label, and optional icon.
 */
const heroIndicatorsCollection = defineCollection({
  type: "content",
  schema: z.object({
    // The value to display (e.g., "8-18", "100%")
    value: z.string(),
    // Optional sub-value (e.g., "CAD" for currency)
    subValue: z.string().optional(),
    // Label text below the value
    label: z.string(),
    // Optional SVG path data for icon
    icon: z.string().optional(),
    // Display order (lower = first)
    order: z.number().optional().default(99),
    // Whether to show this indicator
    published: z.boolean().optional().default(true),
  }),
});

/**
 * Jobs Collection
 *
 * Stores job listings for the /career page.
 * Each file represents one open position.
 */
const jobsCollection = defineCollection({
  type: "content",
  schema: z.object({
    // Job title
    title: z.string(),
    // Employment type
    type: z.enum(["part-time", "full-time", "contract", "volunteer"]),
    // Location (e.g. "Remote")
    location: z.string().optional(),
    // Short pitch shown on the listing card
    summary: z.string(),
    // 3 key qualities for this role
    qualities: z.array(
      z.object({
        label: z.string(),
        description: z.string(),
      }),
    ),
    // What success looks like in this role
    successLooks: z.string(),
    // Working style description
    workingStyle: z.string(),
    // Compensation range (e.g. "~$25–30/hr")
    compensationRange: z.string(),
    // Additional compensation notes
    compensationNotes: z.string().optional(),
    // "You'll be a great fit if..." bullet points
    fitSignals: z.array(z.string()),
    // Why build with us / Benefits
    benefits: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
      )
      .optional(),
    // Areas of responsibility (optional)
    responsibilities: z.array(z.string()).optional(),
    // Display order (lower = first)
    order: z.number().optional().default(99),
    // Whether to show this listing
    published: z.boolean().optional().default(true),
  }),
});

// Export collections
export const collections = {
  faq: faqCollection,
  testimonials: testimonialsCollection,
  projects: projectsCollection,
  heroIndicators: heroIndicatorsCollection,
  jobs: jobsCollection,
};
