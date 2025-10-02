"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

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
  const yearMobileRef = useRef<HTMLDivElement>(null);
  const mobileBoxRef = useRef<HTMLDivElement>(null);
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
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1,
              markers: false,
              onEnter: () => swapEnter(year, idx),
              onEnterBack: () => swapPCEnterBack(year, idx),
              onLeaveBack: () => swapPCLeaveBack(year, idx),
              onLeave: () => swapPCLeave(year, idx),
            });
          });

          function swapEnter(year: string, idx: number) {
            // console.log("onEnter");
            if (!boxRef.current) return;
            gsap.fromTo(
              boxRef.current,
              { x: -400, y: 0, opacity: 0 }, // ▶ 위에서 아래로 슬라이드‑in
              { x: 0, y: 0, opacity: 1 },
            );
            boxRef.current.innerHTML = history.find((h) => h.year === year)!.detail; // 박스안에 내용 삽입
            // if (yearDesktopRef.current) yearDesktopRef.current.textContent = year; // 연도 변경

            if (yearDesktopRef.current) {
              gsap.to(yearDesktopRef.current, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                  yearDesktopRef.current!.textContent = year;
                  gsap.fromTo(
                    yearDesktopRef.current,
                    { y: 10, opacity: 0 },
                    { opacity: 1, y: 1, duration: 0.6 },
                  );
                },
              });
            }
          }
          function swapPCLeaveBack(year: string, idx: number) {
            // console.log("LeaveBack");
            if (!boxRef.current) return;
            gsap.fromTo(
              boxRef.current,
              { x: 0, y: 0, opacity: 1 }, // ▶ 위에서 아래로 슬라이드‑in
              { x: -400, y: 0, opacity: 0 },
            );
            boxRef.current.innerHTML = history.find((h) => h.year === year)!.detail; // 박스안에 내용 삽입
            // if (yearDesktopRef.current) yearDesktopRef.current.textContent = year; // 연도 변경
            if (yearDesktopRef.current) {
              gsap.to(yearDesktopRef.current, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                  yearDesktopRef.current!.textContent = "";
                  gsap.fromTo(
                    yearDesktopRef.current,
                    { y: 10, opacity: 0 },
                    { opacity: 1, y: 1, duration: 0.6 },
                  );
                },
              });
            }
          }

          function swapPCLeave(year: string, idx: number) {
            // console.log("Leave");
            if (!boxRef.current) return;
            gsap.fromTo(boxRef.current, { x: 0, y: 0, opacity: 1 }, { x: 400, y: 0, opacity: 0 });
            boxRef.current.innerHTML = history.find((h) => h.year === year)!.detail; // 박스안에 내용 삽입
            // if (yearDesktopRef.current) yearDesktopRef.current.textContent = ""; // 연도 변경
            if (yearDesktopRef.current) {
              gsap.to(yearDesktopRef.current, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                  yearDesktopRef.current!.textContent = "";
                  gsap.fromTo(
                    yearDesktopRef.current,
                    { y: 10, opacity: 0 },
                    { opacity: 1, y: 1, duration: 0.6 },
                  );
                },
              });
            }
          }
          function swapPCEnterBack(year: string, idx: number) {
            // console.log("EnterBack");
            if (!boxRef.current) return;
            gsap.fromTo(boxRef.current, { x: 400, y: 0, opacity: 0 }, { x: 0, y: 0, opacity: 1 });
            boxRef.current.innerHTML = history.find((h) => h.year === year)!.detail; // 박스안에 내용 삽입
            // if (yearDesktopRef.current) yearDesktopRef.current.textContent = year; // 연도 변경
            if (yearDesktopRef.current) {
              gsap.to(yearDesktopRef.current, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                  yearDesktopRef.current!.textContent = year;
                  gsap.fromTo(
                    yearDesktopRef.current,
                    { y: 10, opacity: 0 },
                    { opacity: 1, y: 1, duration: 0.6 },
                  );
                },
              });
            }
          }
        }

        if (ctx.conditions!.isMobile) {
          history.forEach(({ year }, idx) => {
            ScrollTrigger.create({
              trigger: `#y${year}`,
              start: "top bottom",
              end: "bottom bottom",
              markers: false,
              scrub: 1,
              snap: 1 / (history.length - 1),
              onEnter: () => swapEnter(year, idx),
              onEnterBack: () => swapPCEnterBack(year, idx),
              onLeaveBack: () => swapPCLeaveBack(year, idx),
              onLeave: () => swapPCLeave(year, idx),
            });
          });

          function swapEnter(year: string, idx: number) {
            // console.log("onEnter");
            if (!mobileBoxRef.current) return;
            gsap.fromTo(
              mobileBoxRef.current,
              { x: -400, y: 0, opacity: 0 }, // ▶ 위에서 아래로 슬라이드‑in
              { x: 0, y: 0, opacity: 1, duration: 2, ease: "power3.out" },
            );
            mobileBoxRef.current.innerHTML = history.find((h) => h.year === year)!.detail; // 박스안에 내용 삽입
            // if (yearDesktopRef.current) yearDesktopRef.current.textContent = year; // 연도 변경

            if (yearMobileRef.current) {
              gsap.to(yearMobileRef.current, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                  yearMobileRef.current!.textContent = year;
                  gsap.fromTo(
                    yearMobileRef.current,
                    { y: 10, opacity: 0 },
                    { opacity: 1, y: 1, duration: 0.6 },
                  );
                },
              });
            }
          }

          function swapPCLeaveBack(year: string, idx: number) {
            // console.log("LeaveBack");
            if (!mobileBoxRef.current) return;
            gsap.fromTo(
              mobileBoxRef.current,
              { x: 0, y: 0, opacity: 1 }, // ▶ 위에서 아래로 슬라이드‑in
              { x: -400, y: 0, opacity: 0 },
            );
            mobileBoxRef.current.innerHTML = history.find((h) => h.year === year)!.detail; // 박스안에 내용 삽입
            // if (yearDesktopRef.current) yearDesktopRef.current.textContent = year; // 연도 변경
            if (yearMobileRef.current) {
              gsap.to(yearMobileRef.current, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                  yearMobileRef.current!.textContent = "";
                  gsap.fromTo(
                    yearMobileRef.current,
                    { y: 10, opacity: 0 },
                    { opacity: 1, y: 1, duration: 0.6 },
                  );
                },
              });
            }
          }

          function swapPCLeave(year: string, idx: number) {
            // console.log("Leave");
            if (!mobileBoxRef.current) return;
            gsap.fromTo(
              mobileBoxRef.current,
              { x: 0, y: 0, opacity: 1 },
              { x: 400, y: 0, opacity: 0 },
            );
            mobileBoxRef.current.innerHTML = history.find((h) => h.year === year)!.detail; // 박스안에 내용 삽입
            // if (yearDesktopRef.current) yearDesktopRef.current.textContent = ""; // 연도 변경
            if (yearMobileRef.current) {
              gsap.to(yearMobileRef.current, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                  yearMobileRef.current!.textContent = "";
                  gsap.fromTo(
                    yearMobileRef.current,
                    { y: 10, opacity: 0 },
                    { opacity: 1, y: 1, duration: 0.6 },
                  );
                },
              });
            }
          }
          function swapPCEnterBack(year: string, idx: number) {
            // console.log("EnterBack");
            if (!mobileBoxRef.current) return;
            gsap.fromTo(
              mobileBoxRef.current,
              { x: 400, y: 0, opacity: 0 },
              { x: 0, y: 0, opacity: 1 },
            );
            mobileBoxRef.current.innerHTML = history.find((h) => h.year === year)!.detail; // 박스안에 내용 삽입
            // if (yearDesktopRef.current) yearDesktopRef.current.textContent = year; // 연도 변경
            if (yearMobileRef.current) {
              gsap.to(yearMobileRef.current, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                  yearMobileRef.current!.textContent = year;
                  gsap.fromTo(
                    yearMobileRef.current,
                    { y: 10, opacity: 0 },
                    { opacity: 1, y: 1, duration: 0.6 },
                  );
                },
              });
            }
          }

          // function updateMobile(year: string) {
          //   if (yearMobileRef.current) yearMobileRef.current.textContent = year;
          // }
        }
      },
    );
    return () => mm.revert();
  }, []);

  return (
    <section className="min-h-[calc(100vh-56px)] mx-5 py-24 pb-60">
      <div ref={containerRef} className="md:grid md:gap-8 md:grid-cols-[150px_1fr]">
        {/* 연도 */}
        <div
          ref={yearDesktopRef}
          className="hidden sticky top-24 flex-col gap-6 text-3xl font-bold text-right pr-5 md:block h-full text-primary-500 dark:text-pink-400"></div>

        {/* 모바일 상단 고정 배지 */}
        <div
          ref={yearMobileRef}
          className="sticky top-20 z-20 mb-8 block self-start text-2xl font-bold text-center md:hidden ">
          {history[0].year}
        </div>

        {/* 상세 박스 (PC) */}
        <div
          ref={boxRef}
          className="sticky top-24 min-h-[600px] rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-900 opacity-0 hidden md:block"
        />
        <div
          ref={mobileBoxRef}
          className="sticky top-34 min-h-[600px] rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-900 opacity-0 md:hidden"
        />

        {/* 스크롤 트리거 섹션 + 모바일 카드 */}
        <div className="col-span-2 flex flex-col gap-10">
          {history.map(({ year }) => (
            <section
              key={year}
              id={`y${year}`}
              className="min-h-200 flex items-start md:items-center"></section>
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
