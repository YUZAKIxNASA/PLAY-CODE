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
        typescriptPage: resolve(__dirname, 'pages/typescript.html'),
        typescriptLesson: resolve(__dirname, 'pages/typescript-lesson.html'),
        jqueryPage: resolve(__dirname, 'pages/jquery.html'),
        jqueryLesson: resolve(__dirname, 'pages/jquery-lesson.html'),
        projectsPage: resolve(__dirname, 'pages/projects.html'),
        editorPage: resolve(__dirname, 'pages/editor.html'),
        section5Entry: resolve(__dirname, 'pages/section5-entry.html'),
        section6Entry: resolve(__dirname, 'pages/section6-entry.html'),
        section301Entry: resolve(__dirname, 'pages/section-301-350-entry.html'),
        section7Entry: resolve(__dirname, 'pages/section7-entry.html'),
        section8Entry: resolve(__dirname, 'pages/section8-entry.html'),
        section9Entry: resolve(__dirname, 'pages/section9-entry.html'),
        section10Entry: resolve(__dirname, 'pages/section10-entry.html'),
        section11Entry: resolve(__dirname, 'pages/section11-entry.html'),
        section12Entry: resolve(__dirname, 'pages/section12-entry.html'),
        section13Entry: resolve(__dirname, 'pages/section13-entry.html'),
        section14Entry: resolve(__dirname, 'pages/section14-entry.html'),
        section15Entry: resolve(__dirname, 'pages/section15-entry.html'),
        section16Entry: resolve(__dirname, 'pages/section16-entry.html'),
        section17Entry: resolve(__dirname, 'pages/section17-entry.html'),
        section19Entry: resolve(__dirname, 'pages/section19-entry.html'),
        section20Entry: resolve(__dirname, 'pages/section20-entry.html')
      }
    }
  }
});
