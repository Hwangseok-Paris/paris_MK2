// src/components/projects/ProjectDrawer.tsx
"use client";
import { useEffect } from "react";
import { XIcon } from "lucide-react";
import type { Project } from "@/constants/projects";

type Props = { open: boolean; project?: Project | null; onClose: () => void };

export default function ProjectDrawer({ open, project, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      {/* dim */}
      <div
        aria-hidden
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* panel: mobile full, md+ right drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed inset-x-0 bottom-0 top-auto md:inset-y-0 md:right-0 md:top-0 md:bottom-0
                    md:w-[520px] w-full bg-white dark:bg-zinc-900 border-t md:border-l
                    border-black/10 dark:border-white/10 rounded-t-2xl md:rounded-none
                    transition-transform
                    ${
                      open
                        ? "translate-y-0 md:translate-x-0"
                        : "translate-y-full md:translate-x-full"
                    }`}>
        <header className="flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10">
          <h2 className="text-lg font-semibold">{project?.title ?? "프로젝트"}</h2>
          <button
            aria-label="닫기"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">
            <XIcon size={18} />
          </button>
        </header>

        <div className="p-5 space-y-4 overflow-y-auto h-[calc(100%-56px)] md:h-full">
          {project && (
            <>
              <p className="text-sm opacity-80">{project.summary}</p>
              <div className="text-xs opacity-70">
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
          )}
        </div>
      </aside>
    </>
  );
}
