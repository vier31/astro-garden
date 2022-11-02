import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import vue from "@astrojs/vue";
import serviceWorker from "astrojs-service-worker";


// https://astro.build/config
export default defineConfig({
  integrations: [
    serviceWorker(), 
    mdx(),
    vue()
  ],
});