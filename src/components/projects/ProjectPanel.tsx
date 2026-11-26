"use client";

import { useEffect, useId, useRef, useState, type RefObject } from "react";
import { portfolioSurface, projectsTypography } from "@/components/layout/portfolioStyles";
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
    <motion.div className={`folio folio-projects folio-modal-root fixed inset-0 z-50 ${portfolioSurface}`}
      initial={{ opacity: reduceMotion ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : .2 }}>
      <div className="viewport @container/projects mx-auto h-full w-full max-w-none"><div className={`site h-full bg-transparent ${projectsTypography}`}>
        <div className="modal-layer absolute inset-0 grid min-h-0 place-items-center bg-veil p-8 narrow:items-end narrow:p-0" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
          <motion.section ref={dialogRef} className="dialog relative max-h-[min(86dvh,1100px)] w-full max-w-[860px] overflow-y-auto overscroll-contain border border-rule bg-paper px-[38px] pt-0 pb-7 text-ink shadow-[0_18px_60px_light-dark(#00000024,#00000060)] [scrollbar-gutter:stable] projects-sm:max-w-none projects-sm:rounded-t-[14px] projects-sm:border-0 projects-sm:px-5 projects-sm:pb-[22px] narrow:max-h-[90dvh] narrow:pb-[max(22px,env(safe-area-inset-bottom))]" role="dialog" aria-modal="true" aria-labelledby={titleId} data-project={project.id}
            initial={reduceMotion ? false : { y: 28, scale: .985 }} animate={{ y: 0, scale: 1 }}
            exit={{ y: reduceMotion ? 0 : 18, scale: reduceMotion ? 1 : .99 }}
            transition={{ duration: reduceMotion ? 0 : .24, ease: [.22, 1, .36, 1] }}>
            <div className="panel-toolbar sticky top-0 z-1 flex min-h-[60px] items-center justify-end bg-paper projects-sm:min-h-14">
              <button className="panel-close flex min-h-11 w-11 items-center justify-center border-0 bg-transparent p-0 text-base leading-[1.7] [&_svg]:size-[26px] [&_svg]:shrink-0" type="button" aria-label="프로젝트 상세 닫기" onClick={onClose}><X aria-hidden="true" /></button>
            </div>
            <div className="panel-hero border-b border-rule pt-2 pb-[22px] projects-sm:pb-[23px]">
              {projectDisplayCompany(project) && <p className="panel-eyebrow mb-3 text-[13px] tracking-[.04em] text-muted">{projectDisplayCompany(project)}</p>}
              <h2 className="panel-title max-w-[18em] font-panel text-[40px] leading-[1.15] font-medium tracking-[-.035em] text-balance [overflow-wrap:anywhere] projects-sm:text-[30px]" id={titleId} lang={projectTitleLanguage(project.id)}>{projectDisplayTitle(project)}</h2>
              <p className="panel-korean mt-2.5 text-sm leading-[1.7] font-normal break-keep text-muted projects-sm:text-[13px]">{projectOriginalTitle(project)}</p>
              <div className="panel-meta mt-[18px] flex flex-wrap gap-x-[25px] gap-y-[9px] text-sm leading-[1.7] text-muted projects-sm:mt-[15px] projects-sm:gap-x-[17px] projects-sm:gap-y-2"><span>{project.period}</span><span>{project.category === "AI" ? "AI Agent" : project.category}</span></div>
            </div>
            <div className="panel-role-block pt-[25px] pb-[22px] projects-sm:pt-[23px]">
              <p className="section-label mb-2.5 text-xs leading-[1.7] font-medium text-muted">담당 역할</p>
              <p className="panel-role max-w-[25em] text-xl leading-[1.5] font-semibold tracking-[-.04em] break-keep projects-sm:text-lg">{project.role}</p>
              <p className="panel-summary mt-[19px] text-base leading-[1.95] break-keep projects-sm:leading-[1.9]">{project.summary}</p>
            </div>
            {project.highlights.length > 0 && <section className="contributions border-t border-rule pt-[23px] pb-[7px]">
              <h3 className="mb-2.5 text-[15px] font-semibold">주요 기여</h3>
              <ol className="contribution-list list-none p-0 [counter-reset:work] [&_li]:grid [&_li]:grid-cols-[23px_minmax(0,1fr)] [&_li]:gap-4 [&_li]:py-3 [&_li]:text-base [&_li]:leading-[1.95] [&_li]:break-keep [&_li]:[counter-increment:work] [&_li]:before:font-index [&_li]:before:text-[11px] [&_li]:before:leading-[2.8] [&_li]:before:text-muted [&_li]:before:content-[counter(work,decimal-leading-zero)] projects-sm:[&_li]:grid-cols-[18px_minmax(0,1fr)] projects-sm:[&_li]:gap-3 projects-sm:[&_li]:leading-[1.9]">{project.highlights.map((text, index) => <li key={index}><span>{text}</span></li>)}</ol>
            </section>}
            <section className="panel-stack-block mt-4 border-t border-rule pt-[22px] pb-[18px]"><h3 className="section-label mb-2.5 text-xs leading-[1.7] font-medium text-muted">사용 기술</h3><p className="panel-stack text-[13px] leading-[1.9] tracking-normal break-keep">{project.stack.join(" · ")}</p></section>
            <div className="panel-footer flex items-center justify-between gap-5 pt-[5px] [&_:is(a,button)]:flex [&_:is(a,button)]:min-h-11 [&_:is(a,button)]:items-center [&_:is(a,button)]:gap-2.5 [&_:is(a,button)]:border-0 [&_:is(a,button)]:bg-transparent [&_:is(a,button)]:p-0 [&_:is(a,button)]:text-[13px] [&_a]:hover:underline [&_a]:hover:underline-offset-[5px] [&_svg]:size-[18px] [&_svg]:shrink-0">
              <button type="button" onClick={onClose}><ArrowLeft aria-hidden="true" />목록으로</button>
              <a href={`/projects?project=${encodeURIComponent(project.id)}`}>프로젝트 링크<LinkIcon aria-hidden="true" /></a>
            </div>
          </motion.section>
        </div>
      </div></div>
    </motion.div>
  );
}
