/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, ts}"],
  theme: {
    extend: {
      // Color palette.
      colors: {
        pink: "#E29295",
        red: "#B83135",
        "dark-red": "#5D191B",
        blue: "#31B9B5",
        black: "#13191C",
        gray: "#F0F0F0",
        white: "#FCFCFC",
      },
      // Background gradient.
      backgroundImage: () => ({
        "gradient-red":
          "linear-gradient(90deg, #B83135, #E29295, #5D191B, #B83135)",
      }),
      // Fonts.
      fontFamily: {
        amatic: ["Amatic SC", "cursive"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

