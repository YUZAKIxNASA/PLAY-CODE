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
        notFound: resolve(__dirname, '404.html'),
        pagesIndex: resolve(__dirname, 'pages/index.html'),
        htmlCatalog: resolve(__dirname, 'pages/html.html'),
        htmlLesson: resolve(__dirname, 'pages/html-lesson.html'),
        cssPage: resolve(__dirname, 'pages/css.html'),
        jsPage: resolve(__dirname, 'pages/javascript.html'),
        projectsPage: resolve(__dirname, 'pages/projects.html'),
        editorPage: resolve(__dirname, 'pages/editor.html')
      }
    }
  }
});
