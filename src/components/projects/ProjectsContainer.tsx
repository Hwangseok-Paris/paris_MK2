"use client";

import ProjectCard from "./ProjectCard";
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

export default function ProjectsContailner() {
  const [modalState, setModalState] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>();

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
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
      </div>
      <div className="mt-6  ">
        {/* 카드(리스트)) 영역 */}
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}>
          {projects &&
            projects.map((project, idx) => {
              return (
                <motion.li key={idx} variants={item}>
                  <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                </motion.li>
              );
            })}
        </motion.ul>
        {/* 카드(리스트)) 영역 */}
      </div>
      {/* 모달 영역 */}
      <ProjectModal
        open={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      {/* // 모달 영역 */}
    </>
  );
}
