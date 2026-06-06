"use client";

import { Moon, Sun } from "lucide-react";

import { useThemeContext } from "@/context/ThemeContext";

/**
 *  ⏺ 작동 방식
 *  1. <html class="dark"> 토글
 *  2. 파비콘 src 교체  (public/favicon-light.svg / -dark.svg 두 개 준비)
 *  3. 아이콘(🌞·🌙) 스위치
 */
export default function ThemeToggle() {
  const { mode, toggle } = useThemeContext();

  // const toggle = () => {
  //   const html = document.documentElement;
  //   html.classList.toggle("dark");
  //   const nowDark = html.classList.contains("dark");
  //   setDark(nowDark);

  //   /* 파비콘 교체 */
  //   const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  //   if (favicon) {
  //     favicon.href = nowDark ? "/favicon-dark.svg" : "/favicon-light.svg";
  //   }
  // };

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="h-6 w-6 text-gray-800 dark:text-gray-100 cursor-pointer">
      {mode === "dark" ? (
        <Moon className="h-6 w-6" color="#FFFF00" fill="#FFFF00" />
      ) : (
        <Sun className="h-6 w-6" color="#CE0018" fill="#CE0018" />
      )}
    </button>
  );
}
