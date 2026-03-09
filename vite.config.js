import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/pages/about.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
        gallery: resolve(__dirname, 'src/pages/gallery.html'),
        events: resolve(__dirname, 'src/pages/events.html'),
        adminEvents: resolve(__dirname, 'src/pages/admin-events.html'),
      },
    },
  },
});
