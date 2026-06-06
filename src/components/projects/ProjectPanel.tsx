// src/components/projects/ProjectPanel.tsx
"use client";

import { useEffect, useId, useRef } from "react";
import { XIcon } from "lucide-react";
import type { Project } from "@/constants/projects";

type Props = {
  open: boolean;
  project?: Project | null;
  onClose: () => void;
};

export default function ProjectPanel({ open, project, onClose }: Props) {
  const titleIdBase = useId();
  const mobileTitleId = `${titleIdBase}-mobile`;
  const desktopTitleId = `${titleIdBase}-desktop`;
  const panelRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getActiveDialog = () => {
      const dialogs = Array.from(
        panelRootRef.current?.querySelectorAll<HTMLElement>('[role="dialog"]') ?? [],
      );
      return dialogs.find((dialog) => dialog.getClientRects().length > 0);
    };

    const getFocusable = () => {
      const dialog = getActiveDialog();
      if (!dialog) return [];

      return Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.getClientRects().length > 0);
    };

    window.setTimeout(() => getFocusable()[0]?.focus(), 0);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  const Content = ({ titleId, className = "" }: { titleId: string; className?: string }) => (
    <div className={`m-1 space-y-4 overflow-y-auto p-5 pb-8 md:p-6 ${className}`}>
      {project ? (
        <>
          <div className="mb-1 flex flex-wrap items-center gap-2 text-sm opacity-80">
            <span>[{project.company}]</span>
            <span className="rounded-full border px-2 py-0.5 text-[11px]">{project.category}</span>
          </div>
          <h2 id={titleId} className="text-lg md:text-xl font-semibold pr-10">
            {project.title}
          </h2>
          <p className="opacity-80">{project.summary}</p>

          <div className="rounded-xl border border-black/10 p-3 text-sm dark:border-white/10">
            <div className="mb-1 text-xs font-semibold uppercase opacity-60">Role</div>
            <div className="opacity-85">{project.role}</div>
          </div>

          <div className="text-sm opacity-80 space-y-1">
            <div>기간: {project.period}</div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold">Key Contributions</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="rounded-full border px-3 py-1 text-[11px] opacity-80">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="text-sm opacity-70">프로젝트 정보를 불러오는 중…</div>
      )}
    </div>
  );

  if (!open) return null;

  return (
    <div ref={panelRootRef}>
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 z-40 bg-black/40 transition-opacity opacity-100"
      />

      {/* 모바일: 바텀시트 */}
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={mobileTitleId}
        className="fixed inset-x-0 bottom-0 z-50 block md:hidden
                    bg-white dark:bg-zinc-900 rounded-t-2xl shadow-lg
                    transition-transform duration-300 translate-y-0">
        <button
          aria-label="닫기"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">
          <XIcon size={18} />
        </button>

        <div onClick={stop}>
          <Content titleId={mobileTitleId} className="max-h-[78dvh]" />
        </div>
      </section>

      {/* 데스크탑: 센터 모달 (overlay 클릭 닫기 유지) */}
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={desktopTitleId}
        className="fixed inset-0 z-50 hidden md:flex items-center justify-center
                    transition-opacity opacity-100"
        onClick={onClose}>
        <div
          onClick={stop}
          className="relative w-full max-w-[720px] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl
                      border border-black/10 dark:border-white/10
                      transition-transform duration-300 scale-100">
          <button
            aria-label="닫기"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">
            <XIcon size={18} />
          </button>

          <div className="max-h-[78vh]">
            <Content titleId={desktopTitleId} className="max-h-[78vh]" />
          </div>
        </div>
      </section>
    </div>
  );
}
