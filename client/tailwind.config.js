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
        "transparent-black": "rgba(19, 25, 28, 0.5)",
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
      // Keyframes
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360)" },
        },
        color_change: {
          "0%": { color: "#FCFCFC" },
          "17%": { color: "#B83135" },
          "33%": { color: "#FCFCFC" },
          "50%": { color: "#E29295" },
          "67%": { color: "#FCFCFC" },
          "83%": { color: "#5D191B" },
          "100%": { color: "#FCFCFC" },
        },
      },
      animation: {
        "pizza-spin": "spin 12s linear infinite",
        "text-color-change": "color_change 4s linear infinite",
      },
    },
  },
  plugins: [],
};

