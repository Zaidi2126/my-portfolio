// vite.config.js
import {
  vitePlugin as remix
} from "file:///Users/zaidi/Documents/Freelance/portfolio/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///Users/zaidi/Documents/Freelance/portfolio/node_modules/vite/dist/node/index.js";
import jsconfigPaths from "file:///Users/zaidi/Documents/Freelance/portfolio/node_modules/vite-jsconfig-paths/dist/index.mjs";
import mdx from "file:///Users/zaidi/Documents/Freelance/portfolio/node_modules/@mdx-js/rollup/index.js";
import remarkFrontmatter from "file:///Users/zaidi/Documents/Freelance/portfolio/node_modules/remark-frontmatter/index.js";
import remarkMdxFrontmatter from "file:///Users/zaidi/Documents/Freelance/portfolio/node_modules/remark-mdx-frontmatter/index.js";
import rehypeImgSize from "file:///Users/zaidi/Documents/Freelance/portfolio/node_modules/rehype-img-size/index.js";
import rehypeSlug from "file:///Users/zaidi/Documents/Freelance/portfolio/node_modules/rehype-slug/index.js";
import rehypePrism from "file:///Users/zaidi/Documents/Freelance/portfolio/node_modules/@mapbox/rehype-prism/index.js";
var vite_config_default = defineConfig({
  assetsInclude: ["**/*.glb", "**/*.hdr", "**/*.glsl"],
  build: {
    assetsInlineLimit: 1024,
    rollupOptions: {
      output: {
        format: "es"
      }
    }
  },
  ssr: {
    noExternal: ["react-dom/server"]
  },
  server: {
    port: 7777
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: "public" }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: "@mdx-js/react"
    }),
    remix({
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/home/route.js", { index: true });
        });
      }
    }),
    jsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvemFpZGkvRG9jdW1lbnRzL0ZyZWVsYW5jZS9wb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy96YWlkaS9Eb2N1bWVudHMvRnJlZWxhbmNlL3BvcnRmb2xpby92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvemFpZGkvRG9jdW1lbnRzL0ZyZWVsYW5jZS9wb3J0Zm9saW8vdml0ZS5jb25maWcuanNcIjtpbXBvcnQge1xuICB2aXRlUGx1Z2luIGFzIHJlbWl4LFxufSBmcm9tICdAcmVtaXgtcnVuL2Rldic7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBqc2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtanNjb25maWctcGF0aHMnO1xuaW1wb3J0IG1keCBmcm9tICdAbWR4LWpzL3JvbGx1cCc7XG5pbXBvcnQgcmVtYXJrRnJvbnRtYXR0ZXIgZnJvbSAncmVtYXJrLWZyb250bWF0dGVyJztcbmltcG9ydCByZW1hcmtNZHhGcm9udG1hdHRlciBmcm9tICdyZW1hcmstbWR4LWZyb250bWF0dGVyJztcbmltcG9ydCByZWh5cGVJbWdTaXplIGZyb20gJ3JlaHlwZS1pbWctc2l6ZSc7XG5pbXBvcnQgcmVoeXBlU2x1ZyBmcm9tICdyZWh5cGUtc2x1Zyc7XG5pbXBvcnQgcmVoeXBlUHJpc20gZnJvbSAnQG1hcGJveC9yZWh5cGUtcHJpc20nO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBhc3NldHNJbmNsdWRlOiBbJyoqLyouZ2xiJywgJyoqLyouaGRyJywgJyoqLyouZ2xzbCddLFxuICBidWlsZDoge1xuICAgIGFzc2V0c0lubGluZUxpbWl0OiAxMDI0LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBmb3JtYXQ6ICdlcydcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNzcjoge1xuICAgIG5vRXh0ZXJuYWw6IFsncmVhY3QtZG9tL3NlcnZlciddXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDc3NzcsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBtZHgoe1xuICAgICAgcmVoeXBlUGx1Z2luczogW1tyZWh5cGVJbWdTaXplLCB7IGRpcjogJ3B1YmxpYycgfV0sIHJlaHlwZVNsdWcsIHJlaHlwZVByaXNtXSxcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtyZW1hcmtGcm9udG1hdHRlciwgcmVtYXJrTWR4RnJvbnRtYXR0ZXJdLFxuICAgICAgcHJvdmlkZXJJbXBvcnRTb3VyY2U6ICdAbWR4LWpzL3JlYWN0JyxcbiAgICB9KSxcbiAgICByZW1peCh7XG4gICAgICByb3V0ZXMoZGVmaW5lUm91dGVzKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmVSb3V0ZXMocm91dGUgPT4ge1xuICAgICAgICAgIHJvdXRlKCcvJywgJ3JvdXRlcy9ob21lL3JvdXRlLmpzJywgeyBpbmRleDogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pLFxuICAgIGpzY29uZmlnUGF0aHMoKSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVDtBQUFBLEVBQzlTLGNBQWM7QUFBQSxPQUNUO0FBQ1AsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sdUJBQXVCO0FBQzlCLE9BQU8sMEJBQTBCO0FBQ2pDLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8saUJBQWlCO0FBRXhCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLGVBQWUsQ0FBQyxZQUFZLFlBQVksV0FBVztBQUFBLEVBQ25ELE9BQU87QUFBQSxJQUNMLG1CQUFtQjtBQUFBLElBQ25CLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFlBQVksQ0FBQyxrQkFBa0I7QUFBQSxFQUNqQztBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLGVBQWUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxLQUFLLFNBQVMsQ0FBQyxHQUFHLFlBQVksV0FBVztBQUFBLE1BQzNFLGVBQWUsQ0FBQyxtQkFBbUIsb0JBQW9CO0FBQUEsTUFDdkQsc0JBQXNCO0FBQUEsSUFDeEIsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLE1BQ0osT0FBTyxjQUFjO0FBQ25CLGVBQU8sYUFBYSxXQUFTO0FBQzNCLGdCQUFNLEtBQUssd0JBQXdCLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFBQSxRQUNwRCxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
