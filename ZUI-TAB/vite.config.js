import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { viteMockServe } from "vite-plugin-mock";
import path from "path";

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  // css: {},
  // esbuild: {},
  alias: {
    "@": path.join(__dirname, "src"),
    comps: path.join(__dirname, "src/components"),
    views: path.join(__dirname, "src/views"),
    routes: path.join(__dirname, "src/router"),
    styles: path.join(__dirname, "src/styles"),
  },
  plugins: [
    vue(),
    vueJsx(),
    viteMockServe({
      supportTs: false,
    }),
  ],
});
