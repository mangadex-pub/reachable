import { Config } from "tailwindcss";

export default {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        header: ["Spartan", "sans-serif"],
      },
    }
  }
} as Config;
