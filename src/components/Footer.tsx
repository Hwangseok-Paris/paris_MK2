"use client";

import { usePathname } from "next/navigation";
import Container from "@/components/layout/Container";
import Link from "next/link";

function LegacyFooter() {
  return (
    <footer className="border-t border-gray-200 py-8 dark:border-gray-700 ">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400 md:flex-row">
          <p>© {new Date().getFullYear()} Paris. All rights reserved.</p>

          <nav className="flex gap-4">
            <Link href="https://github.com/Hwangseok-Paris" target="_blank" rel="noopener">
              GitHub
            </Link>
            <Link href="https://blog.naver.com/hwangseok89" target="_blank" rel="noopener">
              Blog
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}


export default function Footer() {
  const pathname = usePathname();
  const profile = pathname === "/about" || pathname === "/contact";
  if (pathname !== "/" && pathname !== "/projects" && !profile) return <LegacyFooter />;
  return (
    <footer className={`folio folio-shell-footer ${profile ? "folio-profile" : pathname === "/" ? "folio-home" : "folio-projects"}`}>
      <div className="viewport"><div className={pathname === "/" ? "site" : "site underlay"}>
        <div className="copyright">
          <p>© {new Date().getFullYear()} Paris. All rights reserved.</p>
          {pathname !== "/contact" && <nav aria-label="외부 링크">
            <Link href="https://github.com/Hwangseok-Paris" target="_blank" rel="noopener noreferrer">GitHub</Link>
            <Link href="https://blog.naver.com/hwangseok89" target="_blank" rel="noopener noreferrer">Blog</Link>
          </nav>}
        </div>
      </div></div>
    </footer>
  );
}
