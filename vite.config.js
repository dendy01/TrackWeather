import { fileURLToPath, URL } from "node:url";
import externalGlobals from "rollup-plugin-external-globals";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["vue", "element-plus", "vue-demi"],
      plugins: [
        externalGlobals({
          vue: "Vue",
          "element-plus": "ElementPlus",
          "vue-demi": "VueDemi",
        }),
      ],
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
