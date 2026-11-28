"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/constants/projects";
import {
  projectDisplayTitle,
  projectCompanyLabel,
  projectOverview,
  projectTitleLanguage,
} from "@/constants/project-presentation";

type Props = {
  project: Project;
  onOpen: (project: Project, trigger: HTMLButtonElement) => void;
  highlighted: boolean;
  onHover: (id: string) => void;
  onKeyboardFocus: (id: string | null) => void;
};

export default function ProjectCard({
  project: p,
  onOpen,
  highlighted,
  onHover,
  onKeyboardFocus,
}: Props) {
  const reducedMotion = useReducedMotion();
  const company = projectCompanyLabel(p);
  const periodWithNote = p.period.match(/^(.+?)(\s+)(\([^)]*\)|\[[^\]]*\])$/);
  return (
    <article
      className="project-row relative border-b border-rule"
      data-project={p.id}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") onHover(p.id);
      }}>
      {highlighted && (
        <motion.div
          className="row-highlight pointer-events-none absolute inset-0 -z-1 bg-row-hover"
          layoutId="project-row-highlight"
          aria-hidden="true"
          initial={false}
          transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
      <button
        type="button"
        className="row-trigger grid w-full grid-cols-[130px_minmax(0,1fr)_20px] gap-5 border-0 bg-transparent py-[27px] text-left projects-md:grid-cols-[115px_minmax(0,1fr)_18px] projects-sm:grid-cols-[minmax(0,1fr)_18px] projects-sm:gap-x-4 projects-sm:gap-y-[13px] projects-sm:py-[25px]"
        aria-haspopup="dialog"
        aria-label={`${projectDisplayTitle(p)} 상세 보기`}
        onClick={(event) => onOpen(p, event.currentTarget)}
        onFocus={(event) =>
          onKeyboardFocus(event.currentTarget.matches(":focus-visible") ? p.id : null)
        }>
        <span className="row-period col-start-1 row-start-1 font-project-title text-[11px] leading-[1.6] font-normal tracking-normal text-muted projects-sm:mt-0">
          {periodWithNote ? <>
            <span className="inline-block whitespace-nowrap">{periodWithNote[1]}</span>
            {periodWithNote[2]}
            <span className="inline-block whitespace-nowrap">{periodWithNote[3]}</span>
          </> : p.period}
        </span>
        <span className="row-identity col-start-2 row-start-1 flex flex-col items-start projects-sm:col-start-1 projects-sm:row-start-2">
          {company && <span className="row-company mt-[9px] text-[11px] leading-[1.5] tracking-[.04em] text-muted">
            {company}
          </span>}
          <span className="row-title -order-1 font-project-title text-[31px] leading-[1.2] font-medium tracking-[-.035em] text-balance break-keep [overflow-wrap:anywhere] projects-sm:mt-0 projects-sm:text-[29px]" lang={projectTitleLanguage(p)}>
            {projectDisplayTitle(p)}
          </span>
        </span>
        <span className="row-reading col-start-2 row-start-2 -mt-2 flex flex-col items-start projects-sm:col-start-1 projects-sm:row-start-3 projects-sm:mt-0">
          <span className="row-summary mt-0 text-sm leading-[1.75] break-keep projects-sm:text-[13px]">{projectOverview(p)}</span>
          <span className="row-stack mt-3.5 text-[11px] leading-[1.8] tracking-normal text-muted projects-sm:mt-2.5">{p.stack.slice(0, 4).join(" · ")}</span>
        </span>
        <span className="row-arrow col-start-3 row-start-1 pt-[3px] projects-sm:col-start-2 projects-sm:row-start-2 [&_svg]:size-[18px] [&_svg]:shrink-0">
          <ArrowUpRight aria-hidden="true" />
        </span>
      </button>
    </article>
  );
}
