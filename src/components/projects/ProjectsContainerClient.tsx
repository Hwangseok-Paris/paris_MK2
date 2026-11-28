"use client";

import { useCallback, useId, useMemo, useRef, useState } from "react";
import { LayoutGroup } from "framer-motion";
import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { featuredProjectIds, type Project } from "@/constants/projects";
import ProjectCard from "./ProjectCard";
import ProjectPanel from "./ProjectPanel";
import { sortProjectsByDate } from "@/lib/project-sort";
import { filters, matchesFilter, type FilterId } from "@/lib/project-filter";

type Props = {
  projects: Project[];
};

type SortOrder = "featured" | "newest" | "oldest";

export default function ProjectsContainerClient({ projects }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [focusedProject, setFocusedProject] = useState<string | null>(null);
  const highlightGroup = useId();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // URL을 기준으로 선택해 직접 링크와 브라우저 뒤로 가기에도 같은 상세를 표시합니다.
  const selectedProjectId = searchParams.get("project");

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? null,
    [projects, selectedProjectId],
  );

  const filteredProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, activeFilter)),
    [activeFilter, projects],
  );

  const updateProjectQuery = useCallback(
    (projectId?: string, historyMode: "push" | "replace" = "replace") => {
      const nextParams = new URLSearchParams(searchParams.toString());

      if (projectId) {
        nextParams.set("project", projectId);
      } else {
        nextParams.delete("project");
      }

      const nextQuery = nextParams.toString();
      const nextUrl = nextQuery ? `${pathname}?${nextQuery}` : pathname;
      // 상세를 열고 닫아도 사용자가 보고 있던 목록의 스크롤 위치를 유지합니다.
      router[historyMode](nextUrl, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const onOpen = useCallback(
    (p: Project, trigger: HTMLButtonElement) => {
      setHoveredProject(null);
      triggerRef.current = trigger;
      // 진입 이력을 추가해 브라우저 뒤로 가기로 상세를 닫을 수 있게 합니다.
      updateProjectQuery(p.id, "push");
    },
    [updateProjectQuery],
  );

  const onClose = useCallback(() => {
    // 현재 상세 URL을 목록 URL로 교체해 닫기 동작 자체는 새 이력으로 쌓지 않습니다.
    updateProjectQuery();
  }, [updateProjectQuery]);

  const primary = featuredProjectIds
    .map((id) => filteredProjects.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project));
  const others = filteredProjects.filter((project) => !featuredProjectIds.includes(project.id));
  const groups =
    sortOrder === "featured"
      ? [
          { title: "대표 프로젝트", items: primary },
          { title: "프로젝트 기록", items: others },
        ]
      : [{ title: "PROJECT", items: sortProjectsByDate(filteredProjects, sortOrder) }];

  return (
    <>
      {/* 필터와 정렬 */}
      <div className="project-controls flex items-center justify-between gap-6 pt-0 projects-sm:flex-wrap projects-sm:gap-[3px]">
        <nav className="filters flex flex-1 gap-6 overflow-x-auto [scrollbar-width:thin] projects-sm:basis-full projects-sm:gap-x-[19px] projects-sm:gap-y-0" aria-label="프로젝트 필터">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className="min-h-[46px] shrink-0 border-0 border-b-2 border-transparent bg-transparent py-3 text-[13px] whitespace-nowrap text-muted aria-pressed:border-ink aria-pressed:font-[650] aria-pressed:text-ink projects-sm:min-h-11 projects-sm:py-2.5 projects-sm:text-xs projects-sm:leading-[1.7]"
              type="button"
              aria-pressed={activeFilter === filter.id}
              onClick={() => {
                setHoveredProject(null);
                setActiveFilter(filter.id);
              }}>
              {filter.label}
            </button>
          ))}
        </nav>
        <label className="project-sort shrink-0 projects-sm:ml-auto">
          <span className="sr-only">프로젝트 시작일 기준 정렬</span>
          <select
            className="min-h-11 cursor-pointer border-0 bg-paper px-1 py-0 text-[13px] text-ink"
            value={sortOrder}
            onChange={(event) => {
              setHoveredProject(null);
              setSortOrder(event.target.value as SortOrder);
            }}>
            <option value="newest">최신순</option>
            <option value="oldest">오래된순</option>
            <option value="featured">대표순</option>
          </select>
        </label>
      </div>
      <p className="sr-only" aria-live="polite">
        {filteredProjects.length}개 프로젝트 ·{" "}
        {sortOrder === "featured"
          ? "대표순"
          : sortOrder === "newest"
            ? "시작일 최신순"
            : "시작일 오래된순"}
      </p>
      {/* 목록과 키보드·포인터 강조 */}
      <LayoutGroup id={highlightGroup}>
        <div
          className="project-list isolate"
          onPointerLeave={() => setHoveredProject(null)}
          onBlurCapture={(event) => {
            if (
              !(event.relatedTarget instanceof Element) ||
              !event.relatedTarget.closest(".row-trigger")
            )
              setFocusedProject(null);
          }}>
          {groups.map(
            ({ title, items }) =>
              items.length > 0 && (
                <section key={title} aria-label={title}>
                  <div className="group-heading flex items-center justify-between gap-[15px] border-b border-rule pt-6 pb-[13px] projects-sm:pt-[21px]">
                    <h2 className="text-[11px] font-normal text-muted">{title}</h2>
                    <span className="font-index text-xs leading-[1.5] text-muted">{String(items.length).padStart(2, "0")}</span>
                  </div>
                  {items.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onOpen={onOpen}
                      highlighted={
                        !selectedProject && (hoveredProject ?? focusedProject) === project.id
                      }
                      onHover={setHoveredProject}
                      onKeyboardFocus={(id) => {
                        setHoveredProject(null);
                        setFocusedProject(id);
                      }}
                    />
                  ))}
                </section>
              ),
          )}
        </div>
      </LayoutGroup>
      {filteredProjects.length === 0 && <p className="empty py-10 text-base">해당하는 프로젝트가 없습니다.</p>}
      <div className="page-footer flex items-center justify-between gap-5 pt-6 pb-8 text-[13px] [&_a]:flex [&_a]:min-h-11 [&_a]:items-center [&_a]:gap-3.5 [&_a]:hover:underline [&_a]:hover:underline-offset-[5px] [&_svg]:size-[18px] [&_svg]:shrink-0">
        <Link href="/">
          홈으로
          <ArrowUpLeft aria-hidden="true" />
        </Link>
        <Link href="/contact">
          연락하기
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
      {/* URL로 선택한 프로젝트 상세 */}
      <ProjectPanel
        open={Boolean(selectedProject)}
        project={selectedProject}
        onClose={onClose}
        returnFocusRef={triggerRef}
      />
    </>
  );
}
