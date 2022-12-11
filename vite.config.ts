import react from '@vitejs/plugin-react';
import path from 'node:path';
import { packageDirectorySync } from 'pkg-dir';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

const packageRoot = packageDirectorySync();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  resolve: {
    alias: {
      '@/app': path.resolve(packageRoot, './src/app'),
      '@/pages': path.resolve(packageRoot, './src/pages'),
      '@/widgets': path.resolve(packageRoot, './src/widgets'),
      '@/features': path.resolve(packageRoot, './src/features'),
      '@/entities': path.resolve(packageRoot, './src/entities'),
      '@/shared': path.resolve(packageRoot, './src/shared/'),
    },
  },
});
