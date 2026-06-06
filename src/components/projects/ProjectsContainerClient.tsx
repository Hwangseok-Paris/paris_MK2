"use client";

import { useMemo, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import type { Project } from "@/constants/projects";
import ProjectCard from "./ProjectCard";
import ProjectPanel from "./ProjectPanel";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

type Props = {
  projects: Project[];
};

const featuredProjectIds = ["osstem-hybrid", "festivallife-admin", "kyobo-talktalk", "nh-investment"];

const filters = [
  { id: "all", label: "All" },
  { id: "featured", label: "대표" },
  { id: "ownership", label: "리딩·단독" },
  { id: "realtime", label: "실시간 상담" },
  { id: "finance", label: "금융·보험" },
  { id: "hybrid", label: "Hybrid·App" },
  { id: "ai", label: "AI·Voice" },
] as const;

type FilterId = (typeof filters)[number]["id"];

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
  const hasAiToken = /(^|[^a-z])ai([^a-z]|$)/.test(text);

  switch (filter) {
    case "featured":
      return featuredProjectIds.includes(project.id);
    case "ownership":
      return text.includes("단독") || text.includes("리딩") || text.includes("pl");
    case "realtime":
      return text.includes("실시간") || text.includes("상담") || text.includes("챗봇") || text.includes("connect always");
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
  const [modalState, setModalState] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const featuredProjects = useMemo(
    () => featuredProjectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean) as Project[],
    [projects],
  );

  const filteredProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, activeFilter)),
    [activeFilter, projects],
  );

  const onOpen = (p: Project, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelectedProject(p);
    setModalState(true);
  };

  const onClose = () => {
    setModalState(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  return (
    <>
      <section className="mb-12">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Featured Projects</h2>
            <p className="mt-1 text-sm opacity-70">책임 범위와 성장 방향을 가장 잘 보여주는 대표 프로젝트입니다.</p>
          </div>
          <span className="hidden text-xs opacity-60 md:inline">{featuredProjects.length} selected</span>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((p) => (
            <motion.div key={p.id} variants={item}>
              <ProjectCard project={p} onOpen={onOpen} emphasis />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section>
        <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">All Projects</h2>
            <p className="mt-1 text-sm opacity-70">역할, 도메인, 기술 확장성을 기준으로 프로젝트를 살펴볼 수 있습니다.</p>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="프로젝트 필터">
            {filters.map((filter) => {
              const selected = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    selected
                      ? "border-primary-500 bg-primary-500 text-white"
                      : "border-black/10 bg-black/[0.03] text-black/70 hover:border-primary-500/60 dark:border-white/15 dark:bg-white/[0.06] dark:text-white/75"
                  }`}>
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={activeFilter}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <motion.div key={p.id} variants={item}>
              <ProjectCard project={p} onOpen={onOpen} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <ProjectPanel
        open={modalState}
        project={selectedProject}
        onClose={onClose}
      />
    </>
  );
}
