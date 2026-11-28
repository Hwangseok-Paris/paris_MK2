"use client";

import { useEffect, useId, useRef, useState, type RefObject } from "react";
import { portfolioSurface, projectsTypography } from "@/components/layout/portfolioStyles";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import type { Project } from "@/constants/projects";
import {
  projectContributionTitle,
  projectDisplayTitle,
  projectCompanyLabel,
  projectTitleLanguage,
} from "@/constants/project-presentation";

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
      {/* 프로젝트가 바뀌어도 다이얼로그를 유지해 포커스·배경 잠금이 중간에 해제되지 않도록 합니다. */}
      {open && project && (
        <ProjectDialog
          key="project-dialog"
          project={project}
          onClose={onClose}
          returnFocusRef={returnFocusRef}
        />
      )}
    </AnimatePresence>,
    document.body,
  );
}

function ProjectDialog({ project, onClose, returnFocusRef }: Omit<Props, "open" | "project"> & { project: Project }) {
  const titleId = useId();
  const company = projectCompanyLabel(project);
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef(onClose);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);

  // 퇴장 애니메이션이 끝나 다이얼로그가 제거될 때까지 포커스·배경 잠금을 유지합니다.
  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const returnTarget = returnFocusRef?.current ?? previousFocus;
    const previousOverflow = document.body.style.overflow;
    // 포털로 main 밖에 표시하므로 나머지 페이지 영역의 조작을 막습니다.
    const background = Array.from(
      document.querySelectorAll<HTMLElement>("body > header, body > main, body > footer"),
    );
    const previousInert = background.map((element) => element.inert);
    background.forEach((element) => {
      element.inert = true;
    });
    document.body.style.overflow = "hidden";
    const focusable = () =>
      Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((element) => element.getClientRects().length > 0);
    const timer = window.setTimeout(() => focusable()[0]?.focus(), 0);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current();
      } else if (event.key === "Tab") {
        const items = focusable();
        const first = items[0];
        const last = items[items.length - 1];
        if (!first) {
          event.preventDefault();
          return;
        }
        if (
          !dialogRef.current?.contains(document.activeElement) ||
          (event.shiftKey && document.activeElement === first) ||
          (!event.shiftKey && document.activeElement === last)
        ) {
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
      background.forEach((element, index) => {
        element.inert = previousInert[index];
      });
      const target = returnTarget;
      if (target?.isConnected && target !== document.body) target.focus({ preventScroll: true });
      else document.querySelector<HTMLElement>('.filters button[aria-pressed="true"]')?.focus({ preventScroll: true });
    };
  }, [returnFocusRef]);

  // 열린 상태에서 URL로 프로젝트가 바뀌면 새 내용의 처음부터 읽도록 합니다.
  useEffect(() => {
    dialogRef.current?.scrollTo({ top: 0 });
  }, [project.id]);

  return (
    <motion.div
      className={`folio folio-projects folio-modal-root fixed inset-0 z-50 ${portfolioSurface}`}
      initial={{ opacity: reduceMotion ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : .2 }}>
      <div className="viewport @container/projects mx-auto h-full w-full max-w-none">
        <div className={`site h-full bg-transparent ${projectsTypography}`}>
          <div
            className="modal-layer absolute inset-0 grid min-h-0 place-items-center bg-veil p-8 narrow:items-end narrow:p-0"
            onClick={(event) => {
              if (event.target === event.currentTarget) onClose();
            }}>
            <motion.section
              ref={dialogRef}
              className="dialog relative max-h-[min(86dvh,1100px)] w-full max-w-[860px] overflow-y-auto overscroll-contain border border-rule bg-paper px-[38px] pt-0 pb-7 text-ink shadow-[0_18px_60px_light-dark(#00000024,#00000060)] [scrollbar-gutter:stable] projects-sm:max-w-none projects-sm:rounded-t-[14px] projects-sm:border-0 projects-sm:px-5 projects-sm:pb-[22px] narrow:max-h-[90dvh] narrow:pb-[max(22px,env(safe-area-inset-bottom))]"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              data-project={project.id}
              initial={reduceMotion ? false : { y: 28, scale: .985 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: reduceMotion ? 0 : 18, scale: reduceMotion ? 1 : .99 }}
              transition={{ duration: reduceMotion ? 0 : .24, ease: [.22, 1, .36, 1] }}>
              {/* 고정 닫기 도구 */}
              <div className="panel-toolbar sticky top-0 z-1 flex min-h-[60px] items-center justify-end bg-paper projects-sm:min-h-14">
                <button
                  className="panel-close flex min-h-11 w-11 items-center justify-center border-0 bg-transparent p-0 text-base leading-[1.7] [&_svg]:size-[26px] [&_svg]:shrink-0"
                  type="button"
                  aria-label="프로젝트 상세 닫기"
                  onClick={onClose}>
                  <X aria-hidden="true" />
                </button>
              </div>

              {/* 프로젝트 개요 */}
              <div className="panel-hero border-b border-rule pt-2 pb-[22px] projects-sm:pb-[23px]">
                {company && (
                  <p className="panel-eyebrow mb-3 text-[13px] tracking-[.04em] text-muted">
                    {company}
                  </p>
                )}
                <h2
                  className="panel-title max-w-[18em] font-project-title text-[40px] leading-[1.15] font-medium tracking-[-.035em] text-balance break-keep [overflow-wrap:anywhere] projects-sm:text-[30px]"
                  id={titleId}
                  lang={projectTitleLanguage(project)}>
                  {projectDisplayTitle(project)}
                </h2>
                <div className="panel-meta mt-[18px] flex flex-wrap gap-x-[25px] gap-y-[9px] text-sm leading-[1.7] text-muted projects-sm:mt-[15px] projects-sm:gap-x-[17px] projects-sm:gap-y-2">
                  <span>{project.period}</span>
                  <span>{project.category === "AI" ? "AI Agent" : project.category}</span>
                </div>
              </div>

              {/* 담당 역할과 설명 */}
              <div className="panel-role-block pt-[25px] pb-[22px] projects-sm:pt-[23px]">
                <p className="section-label mb-2.5 text-xs leading-[1.7] font-medium text-muted">
                  담당 역할
                </p>
                <p className="panel-role max-w-[25em] text-xl leading-[1.5] font-semibold tracking-[-.04em] break-keep projects-sm:text-lg">
                  {project.role}
                </p>
                <p className="panel-summary mt-[19px] text-base leading-[1.95] break-keep projects-sm:leading-[1.9]">
                  {project.summary}
                </p>
              </div>

              {/* 주요 기여 */}
              {project.highlights.length > 0 && (
                <section className="contributions border-t border-rule pt-[23px] pb-[7px]">
                  <h3 className="mb-2.5 text-[15px] font-semibold">주요 기여</h3>
                  <ol className="contribution-list m-0 list-none p-0">
                    {project.highlights.map((text, index) => {
                      const title = projectContributionTitle(project.id, text);
                      return (
                        <li
                          key={index}
                          className="grid grid-cols-[150px_minmax(0,1fr)] gap-x-7 border-b border-rule/55 py-[22px] first:pt-3 last:border-0 projects-sm:grid-cols-1 projects-sm:gap-y-2 projects-sm:py-5">
                          {title && (
                            <h4 className="pt-0.5 text-[15px] leading-[1.75] font-semibold break-keep text-ink">
                              {title}
                            </h4>
                          )}
                          <p className={`text-base leading-[1.95] break-keep projects-sm:leading-[1.9] ${title ? "" : "col-span-full"}`}>
                            {text}
                          </p>
                        </li>
                      );
                    })}
                  </ol>
                </section>
              )}

              {/* 사용 기술 */}
              <section className="panel-stack-block mt-4 border-t border-rule pt-[22px] pb-[18px]">
                <h3 className="section-label mb-2.5 text-xs leading-[1.7] font-medium text-muted">
                  사용 기술
                </h3>
                <p className="panel-stack text-[13px] leading-[1.9] tracking-normal break-keep">
                  {project.stack.join(" · ")}
                </p>
              </section>

              {/* 필터·정렬을 유지한 채 목록으로 복귀 */}
              <div className="panel-footer flex items-center pt-[5px] [&_button]:flex [&_button]:min-h-11 [&_button]:items-center [&_button]:gap-2.5 [&_button]:border-0 [&_button]:bg-transparent [&_button]:p-0 [&_button]:text-[13px] [&_button]:hover:underline [&_button]:hover:underline-offset-[5px] [&_svg]:size-[18px] [&_svg]:shrink-0">
                <button type="button" onClick={onClose}>
                  <ArrowLeft aria-hidden="true" />목록으로
                </button>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
