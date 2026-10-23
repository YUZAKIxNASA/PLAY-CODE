import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
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
        cssLesson: resolve(__dirname, 'pages/css-lesson.html'),
        jsPage: resolve(__dirname, 'pages/javascript.html'),
        jsLesson: resolve(__dirname, 'pages/javascript-lesson.html'),
        phpPage: resolve(__dirname, 'pages/php.html'),
        phpLesson: resolve(__dirname, 'pages/php-lesson.html'),
        pythonPage: resolve(__dirname, 'pages/python.html'),
        pythonLesson: resolve(__dirname, 'pages/python-lesson.html'),
        sqlPage: resolve(__dirname, 'pages/sql.html'),
        sqlLesson: resolve(__dirname, 'pages/sql-lesson.html'),
        projectsPage: resolve(__dirname, 'pages/projects.html'),
        editorPage: resolve(__dirname, 'pages/editor.html')
      }
    }
  }
});
