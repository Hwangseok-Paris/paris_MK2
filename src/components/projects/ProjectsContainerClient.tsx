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

type Props = {
  projects: Project[];
};

const filters = [
  { id: "all", label: "전체" },
  { id: "featured", label: "대표" },
  { id: "ownership", label: "리딩·단독" },
  { id: "realtime", label: "실시간 상담" },
  { id: "finance", label: "금융·보험" },
  { id: "hybrid", label: "Hybrid·App" },
  { id: "ai", label: "AI·Voice" },
] as const;

type FilterId = (typeof filters)[number]["id"];
type SortOrder = "featured" | "newest" | "oldest";

const projectText = (project: Project) =>
  [
    project.title,
    project.company,
    project.period,
    project.role,
    project.category,
    project.summary,
    project.stack.join(" "),
    project.highlights.join(" "),
  ]
    .join(" ")
    .toLowerCase();

const matchesFilter = (project: Project, filter: FilterId) => {
  const text = projectText(project);
  // 개발 과정의 AI 활용은 AI 서비스 분류와 구분합니다.
  const aiText = [project.title, project.category, ...project.stack].join(" ").toLowerCase();
  const hasAiToken = /(^|[^a-z])ai([^a-z]|$)/.test(aiText);

  switch (filter) {
    case "featured":
      return featuredProjectIds.includes(project.id);
    case "ownership":
      return text.includes("단독") || text.includes("리딩") || text.includes("pl");
    case "realtime":
      return (
        text.includes("실시간") ||
        text.includes("상담") ||
        text.includes("챗봇") ||
        text.includes("connect always")
      );
    case "finance":
      return (
        project.category === "Finance" ||
        project.category === "Insurance" ||
        text.includes("은행") ||
        text.includes("보험") ||
        text.includes("투자증권")
      );
    case "hybrid":
      return (
        text.includes("hybrid") ||
        text.includes("webview") ||
        text.includes("android") ||
        text.includes("ios") ||
        text.includes("앱") ||
        text.includes("브릿지")
      );
    case "ai":
      return (
        project.category === "AI/Voice" ||
        hasAiToken ||
        text.includes("voice") ||
        text.includes("stt") ||
        text.includes("tts") ||
        text.includes("whisper") ||
        text.includes("음성")
      );
    case "all":
    default:
      return true;
  }
};

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
      router[historyMode](nextUrl, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const onOpen = useCallback(
    (p: Project, trigger: HTMLButtonElement) => {
      setHoveredProject(null);
      triggerRef.current = trigger;
      updateProjectQuery(p.id, "push");
    },
    [updateProjectQuery],
  );

  const onClose = useCallback(() => {
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
      <ProjectPanel
        open={Boolean(selectedProject)}
        project={selectedProject}
        onClose={onClose}
        returnFocusRef={triggerRef}
      />
    </>
  );
}
