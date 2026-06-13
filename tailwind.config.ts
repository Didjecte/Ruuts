import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        light: "#F9F6F0",
        "light-darker": "#EFEBE5",
        primary: "#88A95B",
        secondary: "#dbb124ff",
        "dark-secondary": "#ffce2dff",
        dark: "#2C302E",
        accent: "#B33C26",
      },
      fontFamily: {
        heading: ["Norican", "cursive"],
        body: ["Montserrat", "system-ui", "sans-serif"],
        logo: ["Kalnia", "serif"],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
};
