"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Entry {
  year: string;
  detail: string;
}

const history: Entry[] = [
  { year: "2021", detail: "Started as Front‑end Dev at XYZ Corp" },
  { year: "2022", detail: "Migrated legacy Vue2 ↦ Vue3 + Pinia" },
  { year: "2023", detail: "Led React‑TS component library project" },
  { year: "2024", detail: "Adopted Tailwind & TurboPack, perf ↑ 35%" },
  { year: "2025", detail: "Building Paris‑MK2 portfolio with Next 14" },
];

export default function Timeline() {
  const yearDesktopRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (ctx) => {
        if (ctx.conditions!.isDesktop) {
          history.forEach(({ year }, idx) => {
            ScrollTrigger.create({
              trigger: `#y${year}`,
              start: "top center",
              end: "bottom center",
              scrub: 1,
              markers: true,
              onEnter: () => swapPC(year, idx),
              onEnterBack: () => swapPC(year, idx),
              onLeaveBack: () => swapPCReverse(year, idx),
              onLeave: () => swapPCReverse(year, idx),
            });
          });

          function swapPC(year: string, idx: number) {
            if (!boxRef.current) return;
            gsap.fromTo(
              boxRef.current,
              { x: 100, y: 100, opacity: 0 }, // ▶ 위에서 아래로 슬라이드‑in
              { x: 0, y: 0, opacity: 1 },
            );
            boxRef.current.innerHTML = history.find((h) => h.year === year)!.detail; // 박스안에 내용 삽입
            if (yearDesktopRef.current) yearDesktopRef.current.textContent = year; // 연도 변경
          }

          function swapPCReverse(year: string, idx: number) {
            console.log("leave");
            if (!boxRef.current) return;
            gsap.fromTo(boxRef.current, { x: 0, y: 0, opacity: 1 }, { x: 100, y: 100, opacity: 0 });
            boxRef.current.innerHTML = history.find((h) => h.year === year)!.detail; // 박스안에 내용 삽입
            if (yearDesktopRef.current) yearDesktopRef.current.textContent = year; // 연도 변경
          }
        }
      },
    );
    return () => mm.revert();
  }, []);

  //   useEffect(() => {
  //     console.log("renderd");
  //     gsap.fromTo(
  //       boxRef.current,
  //       { x: 100, y: 100, opacity: 0 },
  //       {
  //         y: 0,
  //         x: 0,
  //         opacity: 1,
  //         scrollTrigger: {
  //           trigger: `#y${year}`,
  //           start: "top 800px",
  //           end: "center center",
  //           markers: true,
  //           scrub: true,
  //           toggleActions: "restart pause reverse pause",
  //         },
  //       },
  //     );
  //   }, []);

  return (
    <section className="min-h-[calc(100vh-56px)] mx-5 py-24 bg-amber-200">
      <div ref={containerRef} className="grid gap-8 md:grid-cols-[150px_1fr]">
        {/* 연도 */}
        <div
          ref={yearDesktopRef}
          className="sticky top-24 flex flex-col gap6 text-xl font-bold text-right border-r pr-5 ">
          2021
        </div>
        {/* 상세 박스 (PC) */}
        <div
          ref={boxRef}
          className="hidden min-h-[200px] rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-900 md:block opacity-0"
        />

        {/* 스크롤 트리거 섹션 + 모바일 카드 */}
        <div className="col-span-2 flex flex-col gap-20">
          {history.map(({ year, detail }) => (
            <section
              key={year}
              id={`y${year}`}
              className="min-h-10 flex items-start md:items-center">
              {/* 모바일 카드 */}
              <div className="block w-full rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-900 md:hidden opacity-0">
                <p className="text-sm">{detail}</p>
              </div>
            </section>
          ))}
        </div>
        {/* // 연도 */}
        {/* 우측 본문 고정 박스 */}
        {/* <div ref={boxRef} className="min-h-[200px] self-start" /> */}
        {/* // 우측 본문 고정 박스 */}
        {/* 스크롤 트리거 섹션 */}
      </div>
    </section>
  );
}

/*
  UX
  ─ PC : 좌측에도 연도 배지를 하나만 sticky 로 고정, ScrollTrigger 로 텍스트 교체.
  ─ Mobile : 상단 배지 고정, 동일 로직.
  ─ DetailBox 슬라이드‑in 좌↔우는 그대로.
*/
