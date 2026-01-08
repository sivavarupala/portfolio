// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sivavarupala.github.io',
  base: '/portfolio',
  integrations: [mdx(), sitemap()],
});
