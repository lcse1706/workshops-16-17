/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  cacheDir: '../node_modules/.vite/admin-panel',

  // https://docs.railway.app/guides/fixing-common-errors
  // When you deploy and expose a web application on Railway,
  // we expect your web server to be available at host 0.0.0.0
  // and a port that we provide in the form of a PORT variable.
  // The PORT variable is automatically injected by Railway into your application's environment.
  server: {
    port: process.env.PORT ? +process.env.PORT : 4200,
    host: '0.0.0.0',
  },

  // do not use this in production
  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
