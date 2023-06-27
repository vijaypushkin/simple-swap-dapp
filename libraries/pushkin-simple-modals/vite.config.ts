import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import typescript from '@rollup/plugin-typescript';
import typescriptPaths from 'rollup-plugin-typescript-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  build: {
    lib: {
      entry: path.resolve('src', 'src/components/main.tsx'),
      name: 'pushkin-simple-modals-01',
      fileName: (format) => `main.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          sourceMap: false,
          declaration: true,
          outDir: 'dist',
        }),
      ],
    },
  },
});
