import { defineConfig } from "vite";
import { name, version } from "./package.json";

export default defineConfig({
  define: {
    pkgJson: { name, version },
  },
});