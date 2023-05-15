/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    gradientColorStops: {
      primaryBlue: "#00B4D8",
      white: "#FFFFFF",
    },
    extend: {
      backgroundImage: {},
      colors: {
        primaryBlue: "#00B4D8",
        secondaryBlue: "#55e0fc",
        white: "#FFFFFF",
        primaryGray: "#9E9E9E",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
