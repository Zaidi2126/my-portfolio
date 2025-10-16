// vite.config.js
import {
  vitePlugin as remix
} from "file:///Users/zaidi/Documents/Freelance/portfolio/node_modules/@remix-run/dev/dist/index.js";
import { vercelPreset } from "file:///Users/zaidi/Documents/Freelance/portfolio/node_modules/@vercel/remix/vite.js";
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
  optimizeDeps: {
    include: ["react-dom/server"]
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production")
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
      presets: [vercelPreset()],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvemFpZGkvRG9jdW1lbnRzL0ZyZWVsYW5jZS9wb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy96YWlkaS9Eb2N1bWVudHMvRnJlZWxhbmNlL3BvcnRmb2xpby92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvemFpZGkvRG9jdW1lbnRzL0ZyZWVsYW5jZS9wb3J0Zm9saW8vdml0ZS5jb25maWcuanNcIjtpbXBvcnQge1xuICB2aXRlUGx1Z2luIGFzIHJlbWl4LFxufSBmcm9tICdAcmVtaXgtcnVuL2Rldic7XG5pbXBvcnQgeyB2ZXJjZWxQcmVzZXQgfSBmcm9tICdAdmVyY2VsL3JlbWl4L3ZpdGUnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQganNjb25maWdQYXRocyBmcm9tICd2aXRlLWpzY29uZmlnLXBhdGhzJztcbmltcG9ydCBtZHggZnJvbSAnQG1keC1qcy9yb2xsdXAnO1xuaW1wb3J0IHJlbWFya0Zyb250bWF0dGVyIGZyb20gJ3JlbWFyay1mcm9udG1hdHRlcic7XG5pbXBvcnQgcmVtYXJrTWR4RnJvbnRtYXR0ZXIgZnJvbSAncmVtYXJrLW1keC1mcm9udG1hdHRlcic7XG5pbXBvcnQgcmVoeXBlSW1nU2l6ZSBmcm9tICdyZWh5cGUtaW1nLXNpemUnO1xuaW1wb3J0IHJlaHlwZVNsdWcgZnJvbSAncmVoeXBlLXNsdWcnO1xuaW1wb3J0IHJlaHlwZVByaXNtIGZyb20gJ0BtYXBib3gvcmVoeXBlLXByaXNtJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYXNzZXRzSW5jbHVkZTogWycqKi8qLmdsYicsICcqKi8qLmhkcicsICcqKi8qLmdsc2wnXSxcbiAgYnVpbGQ6IHtcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogMTAyNCxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZm9ybWF0OiAnZXMnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzc3I6IHtcbiAgICBub0V4dGVybmFsOiBbJ3JlYWN0LWRvbS9zZXJ2ZXInXVxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbJ3JlYWN0LWRvbS9zZXJ2ZXInXVxuICB9LFxuICBkZWZpbmU6IHtcbiAgICAncHJvY2Vzcy5lbnYuTk9ERV9FTlYnOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAncHJvZHVjdGlvbicpXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDc3NzcsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBtZHgoe1xuICAgICAgcmVoeXBlUGx1Z2luczogW1tyZWh5cGVJbWdTaXplLCB7IGRpcjogJ3B1YmxpYycgfV0sIHJlaHlwZVNsdWcsIHJlaHlwZVByaXNtXSxcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtyZW1hcmtGcm9udG1hdHRlciwgcmVtYXJrTWR4RnJvbnRtYXR0ZXJdLFxuICAgICAgcHJvdmlkZXJJbXBvcnRTb3VyY2U6ICdAbWR4LWpzL3JlYWN0JyxcbiAgICB9KSxcbiAgICByZW1peCh7XG4gICAgICBwcmVzZXRzOiBbdmVyY2VsUHJlc2V0KCldLFxuICAgICAgcm91dGVzKGRlZmluZVJvdXRlcykge1xuICAgICAgICByZXR1cm4gZGVmaW5lUm91dGVzKHJvdXRlID0+IHtcbiAgICAgICAgICByb3V0ZSgnLycsICdyb3V0ZXMvaG9tZS9yb3V0ZS5qcycsIHsgaW5kZXg6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBqc2NvbmZpZ1BhdGhzKCksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1Q7QUFBQSxFQUM5UyxjQUFjO0FBQUEsT0FDVDtBQUNQLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sU0FBUztBQUNoQixPQUFPLHVCQUF1QjtBQUM5QixPQUFPLDBCQUEwQjtBQUNqQyxPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGlCQUFpQjtBQUV4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixlQUFlLENBQUMsWUFBWSxZQUFZLFdBQVc7QUFBQSxFQUNuRCxPQUFPO0FBQUEsSUFDTCxtQkFBbUI7QUFBQSxJQUNuQixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxZQUFZLENBQUMsa0JBQWtCO0FBQUEsRUFDakM7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxrQkFBa0I7QUFBQSxFQUM5QjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sd0JBQXdCLEtBQUssVUFBVSxRQUFRLElBQUksWUFBWSxZQUFZO0FBQUEsRUFDN0U7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixlQUFlLENBQUMsQ0FBQyxlQUFlLEVBQUUsS0FBSyxTQUFTLENBQUMsR0FBRyxZQUFZLFdBQVc7QUFBQSxNQUMzRSxlQUFlLENBQUMsbUJBQW1CLG9CQUFvQjtBQUFBLE1BQ3ZELHNCQUFzQjtBQUFBLElBQ3hCLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxNQUNKLFNBQVMsQ0FBQyxhQUFhLENBQUM7QUFBQSxNQUN4QixPQUFPLGNBQWM7QUFDbkIsZUFBTyxhQUFhLFdBQVM7QUFDM0IsZ0JBQU0sS0FBSyx3QkFBd0IsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUFBLFFBQ3BELENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsRUFDaEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
