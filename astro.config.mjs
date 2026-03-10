// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://adullamacademy.com',
  // Use the no-op image service to avoid sharp dependency issues
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});
