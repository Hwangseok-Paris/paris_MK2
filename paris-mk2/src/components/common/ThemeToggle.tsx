// components/ThemeToggle.tsx
"use client";

export default function ThemeToggle() {
  const handleToggle = () => {
    console.log("toggle Activated");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      <button className="p-2 bg-gray-200" onClick={handleToggle}>
        Toggle theme
      </button>
      <div className="bg-white dark:bg-gray-900 text-[black] dark:text-[white] p-4">
        다크모드 테스트
      </div>
    </div>
  );
}
