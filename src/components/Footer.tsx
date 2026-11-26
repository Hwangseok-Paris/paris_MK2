"use client";

import { usePathname } from "next/navigation";
import { portfolioViewport, portfolioSurface, projectsTypography, profileTypography, projectsGutter, profileGutter } from "@/components/layout/portfolioStyles";
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
  if (pathname === "/") return null;
  const profile = pathname === "/about" || pathname === "/contact";
  if (pathname !== "/" && pathname !== "/projects" && !profile) return <LegacyFooter />;
  return (
    <footer className={`folio folio-shell-footer ${portfolioSurface} ${profile ? "folio-profile" : "folio-projects"}`}>
      <div className={`viewport ${portfolioViewport} ${profile ? "@container/profile" : "@container/projects"}`}>
        <div className={`site underlay bg-paper ${profile ? `${profileTypography} ${profileGutter} py-0` : `${projectsTypography} ${projectsGutter} py-[22px]`}`}>
          <div className={`copyright flex flex-wrap justify-between gap-4 border-t border-rule text-xs text-muted ${profile ? "items-center leading-[1.9] pt-[22px] pb-[26px] profile-sm:pt-[19px] profile-sm:pb-[22px] profile-sm:text-[11px]" : "pt-5 leading-[1.7]"}`}>
            <p className="flex items-center">© {new Date().getFullYear()} Paris. All rights reserved.</p>
            {pathname !== "/contact" && <nav className="flex gap-5" aria-label="외부 링크">
              <Link className="inline-flex min-h-11 items-center hover:underline hover:underline-offset-[5px]" href="https://github.com/Hwangseok-Paris" target="_blank" rel="noopener noreferrer">GitHub</Link>
              <Link className="inline-flex min-h-11 items-center hover:underline hover:underline-offset-[5px]" href="https://blog.naver.com/hwangseok89" target="_blank" rel="noopener noreferrer">Blog</Link>
            </nav>}
          </div>
        </div>
      </div>
    </footer>
  );
}
