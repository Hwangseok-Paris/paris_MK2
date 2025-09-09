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
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#0f6c48" /* 메인 딥그린 – San Remo Green 보다 살짝 밝음 */,
          600: "#0d5f40",
          700: "#0b5238",
          800: "#084530",
          900: "#06382a",
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
        wiggle: "wiggle 1s ease-in-out 3",
      },
    },
  },
};
