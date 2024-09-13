/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans"]
    },
    extend: {
      width: {
        "19/20": "95%",
      }
    },
  },
  plugins: [],
};
