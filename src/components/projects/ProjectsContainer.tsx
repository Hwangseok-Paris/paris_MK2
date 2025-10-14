"use client";

import ProjectCard from "./ProjectCard";
import ProjectPanel from "./ProjectPanel";

import { Project, projects } from "@/constants/projects";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { motion, Variants } from "framer-motion";

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

export default function ProjectsContainer() {
  const [modalState, setModalState] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>();

  const onOpen = (p: Project) => {
    setSelectedProject(p);
    setModalState(true);
  };

  return (
    <>
      {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between"> */}
      {/* 필터, 검색영역 */}
      {/* <div className="flex bg-[blue]/1 w-full py-2 justify-between">
          <div>
            <p>필터 영역</p>
          </div>
          <div>
            <p>검색 영역</p>
          </div>
        </div> */}
      {/* // 필터, 검색영역 */}
      {/* </div> */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.div key={p.id} variants={item}>
            <div
              onClick={() => onOpen(p)}
              className="block w-full text-left"
              aria-haspopup="dialog"
              aria-label={`${p.title} 상세 보기`}>
              <ProjectCard project={p} onClick={() => setSelectedProject(p)} />
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* 모달 영역 */}

      <ProjectPanel
        open={modalState}
        project={selectedProject}
        onClose={() => setModalState(false)}
      />
      {/* <ProjectModal
        open={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      /> */}
      {/* // 모달 영역 */}
    </>
  );
}
