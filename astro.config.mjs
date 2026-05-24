import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://sjigrup.com',
  base: '/',
  adapter: cloudflare()
});