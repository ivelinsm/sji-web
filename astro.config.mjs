import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: isProd ? 'https://ivelinsm.github.io' : undefined,
  base: isProd ? '/sji-web' : '/',
});