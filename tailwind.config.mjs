/* eslint-disable */

export default {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#1B1B1B",
        white: "#F5F5F5",
        primary: {
          50: "#fff1f2",
          100: "#ffe4e8",
          200: "#fecdd5",
          300: "#fda4b2",
          400: "#fb7185",
          500: "#c7364a",
          600: "#b4233b",
          700: "#981b32",
          800: "#7f1d2f",
          900: "#4c0d18",
        },
      },
      keyframes: {
        // 0° ↔ 10° 왔다갔다
        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        // 이름: [keyframes] [duration] [timing] [repeat]
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
};
