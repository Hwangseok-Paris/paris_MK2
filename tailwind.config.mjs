const tailwindConfig = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  // OS 설정과 관계없이 html의 .dark 클래스로 테마를 선택합니다.
  darkMode: "class",
};

export default tailwindConfig;
