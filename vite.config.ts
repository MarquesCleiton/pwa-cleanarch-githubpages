import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/pwa-cleanarch-githubpages/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/service-worker.js',
          dest: '' // copia para raiz do dist
        }
      ]
    })
  ]
});
