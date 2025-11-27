// ThemeContext.tsx
"use client";
import { createContext, useContext, useState, useEffect } from "react";

type ThemeMode = "light" | "dark";

export interface ThemeContextValue {
  mode: ThemeMode;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  // 다크모드 클래스 토글
  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [mode]);

  const toggle = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  //   /* 파비콘 교체 */
  // const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  // if (favicon) {
  //   favicon.href = mode === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg";
  // }
  return <ThemeContext.Provider value={{ mode, toggle }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeContext must be used within ThemeProvider");
  return ctx;
};
