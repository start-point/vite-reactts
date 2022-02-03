import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': '/src',
      img: '/src/images',
    },
  },
  build: {
    outDir: 'build',
    target: 'es2015',
  },
});
