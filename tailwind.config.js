/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        royalblue: "#0265cb",
        gainsboro: {
          "100": "#e2e2e2",
          "200": "#d9d9d9",
        },
        dimgray: "#513d35",
        // crimson: "#ff4062",
        // whitesmoke: "#f8f8f8",
        // lightslategray: "#829ca4",
        // seagreen: "#199675",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "inknut-antiqua": "'Inknut Antiqua'",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
