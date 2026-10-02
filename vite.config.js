import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-portfolio-filters/',
  plugins: [react()],
});
