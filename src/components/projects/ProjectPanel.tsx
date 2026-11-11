"use client";

import { useEffect, useId, useRef, useState, type RefObject } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, LinkIcon, X } from "lucide-react";
import type { Project } from "@/constants/projects";
import { projectDisplayTitle, projectDisplayCompany, projectOriginalTitle, projectTitleLanguage } from "@/constants/project-presentation";

type Props = {
  open: boolean;
  project?: Project | null;
  onClose: () => void;
  returnFocusRef?: RefObject<HTMLButtonElement | null>;
};

export default function ProjectPanel({ open, project, onClose, returnFocusRef }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && project && <ProjectDialog key="project-dialog" project={project} onClose={onClose} returnFocusRef={returnFocusRef} />}
    </AnimatePresence>, document.body,
  );
}

function ProjectDialog({ project, onClose, returnFocusRef }: Omit<Props, "open" | "project"> & { project: Project }) {
  const titleId = useId();
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef(onClose);
  const reduceMotion = useReducedMotion();

  useEffect(() => { closeRef.current = onClose; }, [onClose]);

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const returnTarget = returnFocusRef?.current ?? previousFocus;
    const previousOverflow = document.body.style.overflow;
    // The dialog is portaled outside main, so the rest of the page is inert.
    const background = Array.from(document.querySelectorAll<HTMLElement>("body > header, body > main, body > footer"));
    const previousInert = background.map((element) => element.inert);
    background.forEach((element) => { element.inert = true; });
    document.body.style.overflow = "hidden";
    const focusable = () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ) ?? []).filter((element) => element.getClientRects().length > 0);
    const timer = window.setTimeout(() => focusable()[0]?.focus(), 0);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current();
      } else if (event.key === "Tab") {
        const items = focusable();
        const first = items[0];
        const last = items[items.length - 1];
        if (!first) { event.preventDefault(); return; }
        if (!dialogRef.current?.contains(document.activeElement) ||
          (event.shiftKey && document.activeElement === first) ||
          (!event.shiftKey && document.activeElement === last)) {
          event.preventDefault();
          (event.shiftKey ? last : first).focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      background.forEach((element, index) => { element.inert = previousInert[index]; });
      const target = returnTarget;
      if (target?.isConnected && target !== document.body) target.focus({ preventScroll: true });
      else document.querySelector<HTMLElement>('.filters button[aria-pressed="true"]')?.focus({ preventScroll: true });
    };
  }, [returnFocusRef]);

  // A URL change can replace the selected project while the panel stays open.
  useEffect(() => {
    dialogRef.current?.scrollTo({ top: 0 });
  }, [project.id]);

  return (
    <motion.div className="folio folio-projects folio-modal-root"
      initial={{ opacity: reduceMotion ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : .2 }}>
      <div className="viewport"><div className="site">
        <div className="modal-layer" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
          <motion.section ref={dialogRef} className="dialog" role="dialog" aria-modal="true" aria-labelledby={titleId} data-project={project.id}
            initial={reduceMotion ? false : { y: 28, scale: .985 }} animate={{ y: 0, scale: 1 }}
            exit={{ y: reduceMotion ? 0 : 18, scale: reduceMotion ? 1 : .99 }}
            transition={{ duration: reduceMotion ? 0 : .24, ease: [.22, 1, .36, 1] }}>
            <div className="panel-toolbar">
              <button className="panel-close" type="button" aria-label="프로젝트 상세 닫기" onClick={onClose}><X aria-hidden="true" /></button>
            </div>
            <div className="panel-hero">
              {projectDisplayCompany(project) && <p className="panel-eyebrow">{projectDisplayCompany(project)}</p>}
              <h2 className="panel-title" id={titleId} lang={projectTitleLanguage(project.id)}>{projectDisplayTitle(project)}</h2>
              <p className="panel-korean">{projectOriginalTitle(project)}</p>
              <div className="panel-meta"><span>{project.period}</span><span>{project.category === "AI" ? "AI Agent" : project.category}</span></div>
            </div>
            <div className="panel-role-block">
              <p className="section-label">담당 역할</p>
              <p className="panel-role">{project.role}</p>
              <p className="panel-summary">{project.summary}</p>
            </div>
            {project.highlights.length > 0 && <section className="contributions">
              <h3>주요 기여</h3>
              <ol className="contribution-list">{project.highlights.map((text, index) => <li key={index}><span>{text}</span></li>)}</ol>
            </section>}
            <section className="panel-stack-block"><h3 className="section-label">사용 기술</h3><p className="panel-stack">{project.stack.join(" · ")}</p></section>
            <div className="panel-footer">
              <button type="button" onClick={onClose}><ArrowLeft aria-hidden="true" />목록으로</button>
              <a href={`/projects?project=${encodeURIComponent(project.id)}`}>프로젝트 링크<LinkIcon aria-hidden="true" /></a>
            </div>
          </motion.section>
        </div>
      </div></div>
    </motion.div>
  );
}
