"use client";

import { useRef } from "react";
import type { Project } from "@/constants/projects";

interface Props {
  project: Project;
  onOpen: (project: Project, trigger: HTMLButtonElement) => void;
  emphasis?: boolean;
}

export default function ProjectCard({ project, onOpen, emphasis = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const cardClassName = `flex flex-col border shadow-xl min-w-[230px] border-black/4 dark:border-white/10 bg-gradient-to-br dark:from-white/6 dark:to-white/2 p-5 backdrop-blur-sm rounded-2xl transition-all duration-150 will-change-transform ${
    emphasis ? "min-h-[270px]" : "sm:min-h-[230px]"
  } [transform:perspective(900px)_rotateX(var(--rx))_rotateY(var(--ry))_translate3d(var(--tx),var(--ty),0)]`;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = (y / rect.height - 0.5) * -10; // -3~3deg
    const ry = (x / rect.width - 0.5) * 10;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--tx", `${(ry / 6) * 8}px`);
    el.style.setProperty("--ty", `${(rx / -6) * 8}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--tx", `0px`);
    el.style.setProperty("--ty", `0px`);
  };

  return (
    <>
      <button
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="group relative w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded-2xl"
        onClick={(e) => onOpen(project, e.currentTarget)}
        aria-haspopup="dialog"
        aria-label={`${project.title} 상세 보기`}>
        <div
          ref={ref}
          className={cardClassName}>
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs opacity-75">
            <span className="font-semibold">[ {project.company} ]</span>
            <span className="rounded-full border border-black/10 px-2 py-0.5 dark:border-white/20">
              {project.category}
            </span>
          </div>
          <h3 className="text-md font-semibold line-clamp-2 leading-snug">{project.title}</h3>
          <p className="mt-3 line-clamp-2 text-sm font-medium text-primary-700 dark:text-primary-300">
            {project.role}
          </p>
          <p className="mt-3 mb-4 line-clamp-3 text-sm opacity-80">{project.summary}</p>

          <div className="mt-auto flex flex-wrap gap-1.5">
            {project.stack.slice(0, emphasis ? 4 : 2).map((t) => (
              <span
                key={t}
                className="rounded-full bg-foreground/10 px-3 py-1 text-[11px] border-[1px] border-black/20 dark:border-white/50">
                {t}
              </span>
            ))}
            {project.stack.length > (emphasis ? 4 : 2) && (
              <span className="rounded-full bg-foreground/10 px-3 py-1 text-[11px] border-[1px] border-black/20 dark:border-white/50">
                +{project.stack.length - (emphasis ? 4 : 2)}
              </span>
            )}
          </div>
          <div className="mt-4 text-xs opacity-60">{project.period}</div>
        </div>
        {/* <div
          className="pointer-events-none absolute inset-0 rounded-2xl
                        opacity-0 transition-opacity duration-200
                        group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(500px 180px at var(--mx,50%) var(--my,50%), #f365231f, transparent 60%)",
          }}
        /> */}
      </button>
    </>
  );
}
