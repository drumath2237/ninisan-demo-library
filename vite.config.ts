import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name: "ninisan-demo",
      fileName: "index",
      formats: ["es", "umd"],
    },
  },
});

