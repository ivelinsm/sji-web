import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Defaults target the production Cloudflare domain. A preview build (e.g. the
  // GitHub Pages workflow) can override these via env vars without touching prod.
  site: process.env.PAGES_SITE || 'https://sjigrup.com',
  base: process.env.PAGES_BASE || '/',
  integrations: [sitemap()],
});
