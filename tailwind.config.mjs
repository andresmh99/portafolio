import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Onest Variable", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "custom-linear":
          "linear-gradient(to bottom, #0f1216, #182430, #1b374d, #184b6b, #00618b)",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 3s steps(30) infinite alternate, blink .7s infinite",
      },
    },
  },
  plugins: [],
};
