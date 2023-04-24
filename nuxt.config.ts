import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({

  ssr: false,
  pages: true,

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "icon",
          href: "/favicon.svg",
          type: "image/svg+xml",
        },
      ],
    },
  },

  css: [
    "~/assets/css/tailwind.css",
    "~/assets/css/fonts/spartan.css",
    "~/assets/css/fonts/poppins.css",
    "~/assets/css/global.css",
  ],

  modules: [
    "@nuxtjs/tailwindcss",
  ],

  nitro: {
    preset: "node-server",
    compressPublicAssets: { brotli: false, gzip: true },
    logLevel: 2,
  },

  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
  },

  vite: {
    plugins: [
      svgLoader({
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      }),
    ],
  },

});
