import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://orionomia.pl',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
    },
  },
});
