"use client";

import { useEffect, useRef } from "react";

const desktopQuery = "(min-width: 650px)";
const positionKey = "portfolio:home-scroll";

/** PC의 내부 스크롤 접근성과 페이지 이동 후 읽던 위치를 관리합니다. */
export default function useHomeScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    const scroll = element;

    const desktop = window.matchMedia(desktopQuery);
    const home = scroll.closest(".split-home");
    let pendingPosition: number | null = null;

    function remember() {
      if (!desktop.matches || pendingPosition !== null || !scroll.isConnected) return;
      try {
        sessionStorage.setItem(positionKey, String(scroll.scrollTop));
      } catch {
        // 저장소를 사용할 수 없어도 스크롤과 페이지 이동은 그대로 동작합니다.
      }
    }

    function restore() {
      if (!desktop.matches || pendingPosition === null) return;
      scroll.scrollTop = pendingPosition;
      if (Math.abs(scroll.scrollTop - pendingPosition) < 1) pendingPosition = null;
    }

    function updateMode() {
      if (!desktop.matches) {
        scroll.removeAttribute("tabindex");
        pendingPosition = null;
        return;
      }
      scroll.tabIndex = 0;
      try {
        const saved = Number(sessionStorage.getItem(positionKey));
        pendingPosition = Number.isFinite(saved) && saved >= 0 ? saved : 0;
      } catch {
        pendingPosition = 0;
      }
      restore();
    }

    function stopRestoring() {
      // 콘텐츠 로딩 중 사용자가 직접 이동하면 저장 위치보다 사용자 입력을 우선합니다.
      pendingPosition = null;
    }

    // Featured 스트리밍·폰트 로딩으로 높이가 늦게 늘어나는 경우에도 위치를 복원합니다.
    const observer = new ResizeObserver(restore);
    if (scroll.firstElementChild) observer.observe(scroll.firstElementChild);
    updateMode();
    desktop.addEventListener("change", updateMode);
    scroll.addEventListener("scroll", remember, { passive: true });
    scroll.addEventListener("wheel", stopRestoring, { passive: true });
    scroll.addEventListener("pointerdown", stopRestoring);
    scroll.addEventListener("keydown", stopRestoring);
    home?.addEventListener("click", remember, true);
    window.addEventListener("pagehide", remember);

    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", updateMode);
      scroll.removeEventListener("scroll", remember);
      scroll.removeEventListener("wheel", stopRestoring);
      scroll.removeEventListener("pointerdown", stopRestoring);
      scroll.removeEventListener("keydown", stopRestoring);
      home?.removeEventListener("click", remember, true);
      window.removeEventListener("pagehide", remember);
    };
  }, []);

  return scrollRef;
}
