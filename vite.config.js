import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        htmlCatalog: resolve(__dirname, 'pages/html.html'),
        htmlLesson: resolve(__dirname, 'pages/html-lesson.html')
      }
    }
  }
});
