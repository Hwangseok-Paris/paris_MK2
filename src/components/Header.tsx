"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "홈", title: "Paris" },
  { href: "/projects", label: "작업", title: "Projects" },
  { href: "/about", label: "소개", title: "About" },
  { href: "/contact", label: "연락", title: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  const pageTitle = navigation.find(({ href }) => href === pathname)?.title ?? "Not found";
  const headingInHeader = pathname === "/projects" || pathname === "/about";
  return (
    <header className={`folio folio-header${pathname === "/" ? " personal-header" : ""}`}>
      <div className="header-inner">
        {pathname === "/" ? null : headingInHeader ? (
          <h1 className="page-name" lang="en">{pageTitle}</h1>
        ) : (
          <span className="page-name" lang="en">{pageTitle}</span>
        )}
        <nav aria-label="주 메뉴">
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
