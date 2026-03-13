/**
 * Hero Trust Indicators Data
 * 
 * Centralized data for trust indicators displayed in the hero section.
 * Easy to update and maintain across the site.
 */

export interface HeroIndicator {
  value: string;
  subValue?: string;
  label: string;
  icon?: string;
}

export const HERO_INDICATORS: HeroIndicator[] = [
  {
    value: "8-18",
    label: "Ages",
  },
  {
    value: "8",
    label: "Weeks",
  },
  {
    value: "100%",
    label: "Online",
  },
  {
    value: "$100",
    subValue: "CAD",
    label: "Registration",
    icon: `
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.55-7.55L19 8l-9 9z"/>
    `,
  },
  {
    value: "faith",
    label: "Faith-Based",
    icon: `
      <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm-1 6h2v6h-2V8zm0 8h2v2h-2v-2z"/>
    `,
  },
];
