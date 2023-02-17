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
        orange: "#fab659",
        "dark-orange": "#ec8d00",
        "light-blue": "#92d8ff",
        blue: "#72cef7",
        black: "#13191C",
        "transparent-black": "rgba(19, 25, 28, 0.5)",
        gray: "#F0F0F0",
        white: "#FCFCFC",
        "transparent-white": "rgba(252, 252, 252, 0.5)",
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
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(16deg)" },
          "20%": { transform: "rotate(-20deg)" },
          "30%": { transform: "rotate(16deg)" },
          "40%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(16deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        color_change_2: {
          "0%": { backgroundColor: "#72cef7" },
          "10%": { backgroundColor: "#92d8ff" },
          "20%": { backgroundColor: "#72cef7" },
          "30%": { backgroundColor: "#92d8ff" },
          "40%": { backgroundColor: "#72cef7" },
          "50%": { backgroundColor: "#92d8ff" },
          "60%": { backgroundColor: "#72cef7" },
          "100%": { backgroundColor: "#72cef7" },
        },
        bob: {
          "0%": { transform: "translateY(0)" },
          "10%": { transform: "translateY(10px)" },
          "20%": { transform: "translateY(-10px)" },
          "30%": { transform: "translateY(10px)" },
          "40%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(10px)" },
          "60%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
        },
        color_change_3: {
          "0%": { backgroundColor: "#fab659" },
          "10%": { backgroundColor: "#ec8d00" },
          "20%": { backgroundColor: "#fab659" },
          "30%": { backgroundColor: "#ec8d00" },
          "40%": { backgroundColor: "#fab659" },
          "50%": { backgroundColor: "#ec8d00" },
          "60%": { backgroundColor: "#fab659" },
          "100%": { backgroundColor: "#fab659" },
        },
      },
      animation: {
        "pizza-spin": "spin 12s linear infinite",
        "text-color-change": "color_change 4s linear infinite",
        "salad-wave": "wave 4s linear infinite",
        "salad-color-change": "color_change_3 4s linear infinite",
        "bread-bob": "bob 4s linear infinite",
        "bread-color-change": "color_change_2 4s linear infinite",
      },
    },
  },
  plugins: [],
};

