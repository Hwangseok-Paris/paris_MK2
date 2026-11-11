"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/constants/projects";
import {
  projectDisplayTitle,
  projectDisplayCompany,
  projectOriginalTitle,
  projectOverview,
  projectTitleLanguage,
} from "@/constants/project-presentation";

type Props = {
  project: Project;
  index: number;
  onOpen: (project: Project, trigger: HTMLButtonElement) => void;
  highlighted: boolean;
  onHover: (id: string) => void;
  onKeyboardFocus: (id: string | null) => void;
};

export default function ProjectCard({
  project: p,
  index,
  onOpen,
  highlighted,
  onHover,
  onKeyboardFocus,
}: Props) {
  const reducedMotion = useReducedMotion();
  return (
    <article
      className="project-row"
      data-project={p.id}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") onHover(p.id);
      }}>
      {highlighted && (
        <motion.div
          className="row-highlight"
          layoutId="project-row-highlight"
          aria-hidden="true"
          initial={false}
          transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
      <button
        type="button"
        className="row-trigger"
        aria-haspopup="dialog"
        aria-label={`${projectOriginalTitle(p)} 상세 보기`}
        onClick={(event) => onOpen(p, event.currentTarget)}
        onFocus={(event) =>
          onKeyboardFocus(event.currentTarget.matches(":focus-visible") ? p.id : null)
        }>
        <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="row-identity">
          <span className="row-company">
            <span className="brand-mark" aria-hidden="true" />
            {projectDisplayCompany(p)}
          </span>
          <span className="row-title" lang={projectTitleLanguage(p.id)}>
            {projectDisplayTitle(p)}
          </span>
          <span className="row-period">{p.period}</span>
        </span>
        <span className="row-reading">
          <span className="row-summary">{projectOverview(p)}</span>
          <span className="row-stack">{p.stack.slice(0, 4).join(" · ")}</span>
        </span>
        <span className="row-arrow">
          <ArrowUpRight aria-hidden="true" />
        </span>
      </button>
    </article>
  );
}
