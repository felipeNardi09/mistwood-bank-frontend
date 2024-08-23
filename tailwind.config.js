/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nanum-gothic": ['"Nanum Gothic"', "sans-serif"],
      },
      colors: {
        primary: "#40A278",
        secondary: "#437861",
        tertiary: "#0FF793",
        dark: "#2E3331",
      },
      animation: {
        "fade-in": "fade-in 1s ease-in",
        "move-in-right": "move-in-right 1s ease-in",
        "move-in-left": "move-in-left 1s ease-in",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
        "move-in-right": {
          "0%": {
            transform: "translateX(-1rem)",
          },

          "100%": {
            transform: "translateX(0)",
          },
        },
        "move-in-left": {
          "0%": {
            transform: "translateX(1rem)",
          },

          "100%": {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
