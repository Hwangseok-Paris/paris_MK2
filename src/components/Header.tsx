"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useRef, useState } from "react";
import { portfolioViewport, portfolioSurface, projectsGutter, profileGutter } from "@/components/layout/portfolioStyles";
import { ArrowUpRight, X } from "lucide-react";

const navigation = [
  {
    href: "/",
    label: "홈",
    title: "HOME",
    area: "home",
    colors: "[--face:#d7d6cb] [--on-face:#272b2c]",
    origin: "origin-[200%_0]",
    delay: "[transition-delay:45ms,0s,0s,0s]",
  },
  {
    href: "/about",
    label: "소개",
    title: "ABOUT",
    area: "about",
    colors: "[--face:#b9df91] [--on-face:#20341b]",
    origin: "origin-top-right",
    delay: "",
  },
  {
    href: "/projects",
    label: "작업",
    title: "PROJECTS",
    area: "projects",
    colors: "[--face:#8ebcfa] [--on-face:#183356]",
    origin: "origin-[200%_-100%]",
    delay: "[transition-delay:90ms,0s,0s,0s]",
  },
  {
    href: "/contact",
    label: "연락",
    title: "CONTACT",
    area: "contact",
    colors: "[--face:#f2a57f] [--on-face:#4d2a1a]",
    origin: "origin-[100%_-100%]",
    delay: "[transition-delay:55ms,0s,0s,0s]",
  },
];

export default function Header() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  // A route change also resets the menu, including browser back/forward.
  return <CornerMenu key={pathname} pathname={pathname} />;
}

function CornerMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  function close(restoreFocus = false) {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus({ preventScroll: true });
  }

  return (
    <header
      className={`folio corner-navigation pointer-events-none fixed inset-x-0 top-[max(26px,env(safe-area-inset-top))] z-40 h-12 font-[Pretendard,-apple-system,sans-serif] text-ink narrow:top-[max(22px,env(safe-area-inset-top))] narrow:h-11 ${portfolioViewport} ${portfolioSurface} ${pathname === "/projects" ? "@container/projects" : "@container/profile"}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          close(true);
        }
      }}>
      <div className={`narrow:contents ${pathname === "/projects" ? projectsGutter : profileGutter}`}>
        <div className="pointer-events-auto relative ml-auto h-12 w-[150px] narrow:absolute narrow:right-[max(16px,env(safe-area-inset-right))] narrow:size-11">
          <div
            className={`corner-shade fixed inset-0 -z-1 bg-[#06080b80] transition-opacity duration-300 ease-[ease] ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
            aria-hidden="true"
            onClick={() => close(true)}
          />
          <button
            type="button"
            className="corner-toggle relative flex h-12 w-full items-center justify-end gap-[13px] border-0 px-3.5 py-0 font-chakra text-[13px] leading-none font-medium tracking-[.025em] focus-visible:outline-offset-[5px] narrow:size-11 narrow:justify-center narrow:p-0 [&_svg]:size-5 [&_svg]:stroke-[1.5]"
            ref={toggleRef}
            aria-label={open ? "페이지 메뉴 닫기" : "페이지 메뉴 열기"}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((previous) => !previous)}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setOpen(true);
                requestAnimationFrame(() => firstLinkRef.current?.focus({ preventScroll: true }));
              }
            }}>
            <span className="corner-toggle-label narrow:hidden" lang="en">
              {open ? "CLOSE" : "MENU"}
            </span>
            {open ? (
              <X aria-hidden="true" />
            ) : (
              <span
                className="corner-symbol m-0.5 grid grid-cols-[repeat(2,6px)] grid-rows-[repeat(2,6px)] gap-[3px]"
                aria-hidden="true">
                {navigation.map(({ href }) => (
                  <span
                    key={href}
                    className={`border ${pathname === href ? "border-menu-symbol bg-menu-symbol opacity-100" : "border-current opacity-70"}`}
                  />
                ))}
              </span>
            )}
          </button>
          <nav
            id={panelId}
            className={`corner-panel absolute top-[60px] right-0 grid w-[min(300px,calc(100vw-32px))] grid-cols-2 gap-0.5 transition-[visibility] duration-0 narrow:top-[58px] narrow:w-[min(272px,calc(100vw-32px))] short-screen:max-h-[calc(100dvh-96px)] short-screen:overflow-y-auto short-screen:overscroll-contain ${open ? "visible pointer-events-auto delay-0" : "invisible pointer-events-none delay-[540ms]"}`}
            aria-label="주 메뉴"
            aria-hidden={!open}
            inert={!open}>
            {navigation.map(({ href, label, title, area, colors, origin, delay }, index) => (
              <Link
                key={href}
                ref={index === 0 ? firstLinkRef : undefined}
                className={`corner-link group relative flex h-[116px] flex-col items-start justify-end overflow-hidden p-4 no-underline transition-[transform,opacity,background,color] duration-[540ms,200ms,250ms,250ms] ease-[cubic-bezier(.22,1,.36,1),ease,ease,ease] hover:bg-[var(--face)] hover:text-[var(--on-face)] focus-visible:bg-[var(--face)] focus-visible:text-[var(--on-face)] focus-visible:outline-offset-[-5px] narrow:h-[104px] narrow:p-3.5 short-screen:h-[100px] ${colors} ${origin} ${pathname === href ? "bg-menu-current text-menu-current-ink" : "bg-menu-face text-ink"} ${open ? `[transform:scale(1)] opacity-100 ${delay}` : "[transform:scale(.06)] opacity-0"}`}
                data-area={area}
                href={href}
                aria-label={label}
                aria-current={pathname === href ? "page" : undefined}
                onClick={(event) => {
                  if (
                    event.button === 0 &&
                    !event.metaKey &&
                    !event.ctrlKey &&
                    !event.shiftKey &&
                    !event.altKey
                  )
                    close(pathname === href);
                }}>
                <span
                  className={`corner-destination font-chakra text-[21px] leading-[1.2] font-medium tracking-[-.035em] transition-[transform] duration-[540ms] ease-[cubic-bezier(.22,1,.36,1)] narrow:text-[19px] ${open ? "[transform:none]" : "[transform:translateY(12px)]"}`}
                  lang="en">
                  {title}
                </span>
                <ArrowUpRight
                  className="corner-arrow absolute top-3.5 right-3.5 size-5 opacity-0 [transform:translate(-5px,5px)] transition-[transform,opacity] duration-250 ease-[ease] group-hover:opacity-100 group-hover:[transform:none] group-focus-visible:opacity-100 group-focus-visible:[transform:none]"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
