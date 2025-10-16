import {
  vitePlugin as remix,
} from '@remix-run/dev';
import { vercelPreset } from '@vercel/remix/vite';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
  build: {
    assetsInlineLimit: 1024,
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  },
  ssr: {
    noExternal: ['react-dom/server', 'react-dom'],
    external: []
  },
  optimizeDeps: {
    include: ['react-dom/server', 'react-dom']
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  },
  server: {
    port: 7777,
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
    remix({
      presets: [vercelPreset()],
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/', 'routes/home/route.js', { index: true });
        });
      },
    }),
    jsconfigPaths(),
  ],
});
