import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

// import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [remarkReadingTime],
        shikiConfig: {
            wrap: true,
            theme: 'one-dark-pro'
        }
    },
});