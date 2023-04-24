export default defineNuxtConfig({

  ssr: false,
  pages: true,

  css: [
    "~/assets/css/tailwind.css",
    "~/assets/css/fonts/spartan.css",
    "~/assets/css/fonts/poppins.css",
  ],

  nitro: {
    preset: "node-server",
    compressPublicAssets: { brotli: false, gzip: true },
    logLevel: 2,
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
  },

});
