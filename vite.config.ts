// vite.config.ts
import { defineConfig } from 'vite';
export default defineConfig({
  ssr: {
    noExternal: ['mongodb', 'mongoose', 'bson', 'mongodb/*']
  }
});
