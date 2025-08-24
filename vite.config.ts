import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/pwa-cleanarch-githubpages/',
  plugins: [react()]
});