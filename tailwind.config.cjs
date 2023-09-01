const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      dark: "#1c1917",
      light: "#fafaf9",
      bodytext: "#e7e5e4",
      headingtext: "#fafaf9",
    },
    extend: {
      fontFamily: {
        sans: ["Lato", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
