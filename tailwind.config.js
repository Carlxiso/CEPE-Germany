/**@type {import('tailwindcss').Config}*/

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf8ef",
          100: "#f9efdb",
          200: "#f2dab2",
          300: "#eac387",
          400: "#e1a156",
          500: "#da8835",
          600: "#cc702a",
          700: "#a95725",
          800: "#884624",
          900: "#6e3b20",
          950: "#3b1d0f",
        },
        secundary: {
          50: "#eff9ff",
          100: "#def2ff",
          200: "#b6e8ff",
          300: "#75d8ff",
          400: "#2cc4ff",
          500: "#009fe3",
          600: "#008ad4",
          700: "#006eab",
          800: "#005d8d",
          900: "#064d74",
          950: "#04314d",
        },
        geyser: {
          50: "#f9fbfb",
          100: "#f3f5f6",
          200: "#e5e9eb",
          300: "#d6dee0",
          400: "#9babb0",
          500: "#6a7b81",
          600: "#496065",
          700: "#354d53",
          800: "#1d3439",
          900: "#0f2129",
          950: "#020e13",
        },
      },
    },
  },
  plugins: [],
};
