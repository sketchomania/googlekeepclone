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
    colors: {
      transparent: "transparent",
      inherit: "inherit",
      default: "#0000",
      black: "#000000",
      white: "#ffffff",
      red: "#F28B82",
      orange: "#FBBC04",
      yellow: "#FFF475",
      green: "#CCFF90",
      teal: "#A7FFEB",
      blue: "#CBF0F8",
      darkblue: "#AECBFA",
      purple: "#D7AEFB",
      pink: "#FDCFE8",
      brown: "#E6C9A8",
      grey: "#E8EAED",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
      },
      yellow: {
        50: "#FFF475",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-sm": {
          /* Firefox */
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            width: "9px",
          },

          /* Track */
          "&::-webkit-scrollbar-track:hover": {
            border: "1px solid #c4c4c4",
          },

          // /* Handle */
          "&::-webkit-scrollbar-thumb": {
            background: "#d2d2d2",
          },

          /* Handle on hover */
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#939393",
          },
        },
      });
    }),
  ],
  darkMode: "class",
};
