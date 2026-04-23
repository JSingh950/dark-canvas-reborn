import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindPlugin from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [TanStackRouterVite(), react(), tailwindPlugin(), cloudflare()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    external: ["@cloudflare/workers-types"],
  },
});
