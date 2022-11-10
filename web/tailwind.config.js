const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    extend: {
      spacing: {
        maxWidth: {
          "4/5": "80%",
          "3/4": "75%",
        },
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "3xl": "0 0 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-sm": {
          /* IE and Edge */
          // "-ms-overflow-style": "none",

          /* Firefox */
          // "scrollbar-width": "10px",

          /* Safari and Chrome */
          // "&::-webkit-scrollbar": {
          //   // display: "none",
          //   width: "10px",
          //   // background: "red",
          // },

          /* width */

          "&::-webkit-scrollbar": {
            width: "8px",
          },

          // /* Track */
          // "&::-webkit-scrollbar-track": {
          //   boxShadow: "inset 0 0 5px grey",
          //   borderRadius: "10px",
          // },

          // /* Handle */
          "&::-webkit-scrollbar-thumb": {
            background: "lightgray",
          },

          // /* Handle on hover */
          // "&::-webkit-scrollbar-thumb:hover":{
          //   background: "#b30000",
          // },
        },
      });
    }),
  ],
  darkMode: "class",
};
