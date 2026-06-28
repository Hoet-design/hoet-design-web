import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://www.hoet-design.com',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/compare') && !page.endsWith('/home/'),
    }),
  ],
  // Dev-only proxy (no effect on the static build) so the compare tool can load the live site
  // same-origin via /live-proxy/... and synchronise its scroll with the dev iframe.
  vite: {
    server: {
      proxy: {
        '/live-proxy': {
          target: 'https://www.hoet-design.com',
          changeOrigin: true,
          secure: true,
          rewrite: (p) => p.replace(/^\/live-proxy/, ''),
        },
      },
    },
  },
});
