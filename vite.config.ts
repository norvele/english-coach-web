// import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "docs",
  },
  // resolve: {
  //   alias: [
  //     {
  //       find: "@",
  //       replacement: path.resolve(__dirname, "./src"),
  //     },
  //   ],
  //   mainFields: ["main", "module"],
  // },
});
