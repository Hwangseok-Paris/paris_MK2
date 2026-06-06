"use client";

import { motion } from "framer-motion";

export default function ProjectsHeader() {
  const focusChips = ["Hybrid App", "실시간 상담", "금융/보험", "리딩·단독", "React/Vue", "운영·배포"];

  return (
    <header className="mb-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 opacity-80 md:text-base">
          실시간 상담·CRM·하이브리드 앱·운영형 서비스에서 요구사항 정리부터 구현, 검증,
          배포 대응까지 수행한 프론트엔드 개발자입니다.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {focusChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-medium text-black/75 dark:border-white/15 dark:bg-white/[0.06] dark:text-white/80">
              {chip}
            </span>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
