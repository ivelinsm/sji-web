import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sjigrup.com',
  base: '/',
  integrations: [sitemap()],
});
