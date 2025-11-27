"use client";

import { motion } from "framer-motion";

export default function ProjectsHeader() {
  return (
    <header className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <div className="mt-2 flex flex-col text-sm opacity-80">
          <span>참여했던 프로젝트 중 주요 역할을 수행한 프로젝트를 소개드립니다.</span>
          <span>카드를 클릭하여 상세 하이라이트를 확인해주세요.</span>
        </div>
      </motion.div>
    </header>
  );
}
