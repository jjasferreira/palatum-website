/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      "4xl": "92.59px",
      "3xl": "69.46px",
      "2xl": "52.11px",
      "xl": "39.09px",
      "lg": "29.33px",
      "md": "22.00px",
      "sm": "16.50px",
      "xs": "12.38px",
      "2xs": "9.29px",
    },
    fontFamily: {
      mirage: ["MADE Mirage", "serif"],
      sugarsnow: ["Sugar Snow", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      "denim": "#1D1B2F",
      "dairycream": "#F4E3BF",
      "jungle": "#1C3E24",
      "jungle-2": "#24512F",
      "butterscotch": "#F4B14F",
      "tabasco": "#A2281A",
      "platinum": "#E6E6E6",
      "platinum-2": "#F2F2F2",
    },
    extend: {},
  },
  plugins: [],
};
