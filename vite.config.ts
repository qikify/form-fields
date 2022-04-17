import { fileURLToPath, URL } from 'url';
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
// import vueTyeImports from 'vite-plugin-vue-type-imports';
// import eslintPlugin from '@nabla/vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7001,
  },
  // plugins: [
  //   vue(),
  //   svgLoader(),
  //   eslintPlugin({
  //     eslintOptions: {
  //       cache: false,
  //     },
  //   }),
  // ],
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url)),
  //   },
  //   dedupe: [
  //     'vue',
  //   ],
  // },
  plugins: [
    vue(),
    // vueTyeImports(),
    svgLoader(),
    checker({
      overlay: false,
      vueTsc: true,
      typescript: true,
      eslint: {
        lintCommand: 'eslint . --ext .vue,.js,.cjs,.ts,.tsx --ignore-path .eslintignore --quiet .',
      },
    }),
    dts({
      staticImport: true,
      outputDir: 'dist/types',
      exclude: ['dist', 'build'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/', import.meta.url)),
      '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
      types: fileURLToPath(new URL('./types', import.meta.url)),
    },
    dedupe: ['vue'],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/vue-fields.ts'),
      name: 'VueFields',
      fileName: (format) => `vue-fields.${format}.js`,
    },
    cssCodeSplit: false,
    cssTarget: 'chrome61',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
  },
});
