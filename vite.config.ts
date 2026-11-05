import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' keeps asset paths relative, so the build works on GitHub Pages
// (desmondkoo8068.github.io/my-website/) or any custom domain without changes.
export default defineConfig({
  plugins: [react()],
  base: './',
});
