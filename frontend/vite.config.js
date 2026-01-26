import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    manifest: true,
    assetsDir: '',
    rollupOptions: {
      input: resolve(__dirname, 'src/main.js'),
    },
  },
});
