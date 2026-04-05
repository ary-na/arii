// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": new URL("./src/components", import.meta.url).pathname,
        "@layouts": new URL("./src/layouts", import.meta.url).pathname,
        "@lib": new URL("./src/lib", import.meta.url).pathname,
      },
    },
  },
});
