"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/layout/Container";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-200  backdrop-blur dark:border-gray-700 ">
      <Container>
        <div className="flex h-14 items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="text-lg font-bold w-20">
            Paris<span className="text-primary-500">.</span>
          </Link>

          {/* 데스크톱 내비게이션 */}
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <Link
              href="/about"
              className={`hover:text-primary-500 ${
                pathname.includes("about") ? "font-bold text-primary-500" : ""
              }`}>
              About
            </Link>
            <Link
              href="/projects"
              className={`hover:text-primary-500 ${
                pathname.includes("projects") ? "font-bold text-primary-500" : ""
              }`}>
              Projects
            </Link>
            <Link
              href="/contact"
              className={`hover:text-primary-500 ${
                pathname.includes("contact") ? "font-bold text-primary-500" : ""
              }`}>
              Contact
            </Link>
          </nav>

          <div className="flex items-center justify-end gap-4 w-20">
            <ThemeToggle />

            {/* 모바일 햄버거 */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="relative h-6 w-6 md:hidden">
              {/* 3‑line 아이콘 → X 아이콘 전환 */}
              <span
                className={`absolute inset-x-0 top-1 h-0.5 bg-gray-800 transition-transform dark:bg-gray-100 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-gray-800 transition-opacity dark:bg-gray-100 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-1 h-0.5 bg-gray-800 transition-transform dark:bg-gray-100 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </Container>

      {/* 모바일 드롭다운 메뉴 */}
      {open && (
        <nav className="md:hidden border-b border-gray-200 bg-white/95 dark:border-gray-700 dark:bg-gray-900/95 absolute w-full">
          <Container>
            <ul className="flex flex-col space-y-2 py-4 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={`${pathname === "/" ? "text-green-500 font-bold" : ""}`}>
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className={` ${pathname === "/about" ? "text-green-500 font-bold" : ""}`}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  onClick={() => setOpen(false)}
                  className={`${pathname === "/projects" ? "text-green-500 font-bold" : ""}`}>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={`${pathname === "/contact" ? "text-green-500 font-bold" : ""}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
