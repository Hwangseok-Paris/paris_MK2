// src/components/projects/ProjectPanel.tsx
"use client";

import { useEffect, useMemo } from "react";
import { XIcon } from "lucide-react";
import type { Project } from "@/constants/projects";

type Props = {
  open: boolean;
  project?: Project | null;
  onClose: () => void;
};

export default function ProjectPanel({ open, project, onClose }: Props) {
  const screenY = useMemo(() => {
    return document.documentElement.clientHeight;
  }, []);

  // ESC 닫기
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // 스크롤 잠금
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  const Content = () => (
    <div className="p-5 md:p-6 space-y-4 overflow-y-auto m-1">
      {project ? (
        <>
          <div className="text-sm opacity-80 mb-1">[{project.company}]</div>
          <h2 className="text-lg md:text-xl font-semibold">{project.title}</h2>
          <p className=" opacity-80">{project.summary}</p>

          <div className="text-sm opacity-80 space-y-1">
            <div>기간: {project.period}</div>
            <div>역할: {project.role}</div>
            <div>카테고리: {project.category}</div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.map((s) => (
              <span key={s} className="rounded-full border px-3 py-1 text-[11px] opacity-80">
                {s}
              </span>
            ))}
          </div>

          <ul className="list-disc pl-5 text-sm space-y-1">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </>
      ) : (
        <div className="text-sm opacity-70">프로젝트 정보를 불러오는 중…</div>
      )}
    </div>
  );

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* 모바일: 바텀시트 */}
      <section
        role="dialog"
        aria-modal="true"
        className={`fixed inset-x-0 bottom-0 z-50 pb-30 block md:hidden
                    bg-white dark:bg-zinc-900 rounded-t-2xl shadow-lg
                    transition-transform duration-300 ${
                      open ? "translate-y-0" : "translate-y-full"
                    }`}>
        <button
          aria-label="닫기"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">
          <XIcon size={18} />
        </button>

        <div className="max-h-[72vh]" onClick={stop}>
          <Content />
        </div>
      </section>

      {/* 데스크탑: 센터 모달 (overlay 클릭 닫기 유지) */}
      <section
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 z-50 hidden md:flex items-center justify-center
                    transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}>
        <div
          onClick={stop}
          className={`relative w-full max-w-[720px] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl
                      border border-black/10 dark:border-white/10
                      transition-transform duration-300 ${open ? "scale-100" : "scale-95"}`}>
          <button
            aria-label="닫기"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">
            <XIcon size={18} />
          </button>

          <div className="max-h-[78vh]">
            <Content />
          </div>
        </div>
      </section>
    </>
  );
}
