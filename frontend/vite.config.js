import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      crypto: path.resolve('node_modules', 'crypto-browserify')
    }
  },
  build: {
    target: 'esnext',
  },
});
