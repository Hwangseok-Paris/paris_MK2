"use client";

import { useState } from "react";
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

export default function ProjectsContainerClient({ projects }: Props) {
  const [modalState, setModalState] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>();

  const onOpen = (p: Project) => {
    setSelectedProject(p);
    setModalState(true);
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.div key={p.id} variants={item}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => onOpen(p)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen(p)}
              className="block w-full text-left outline-none"
              aria-haspopup="dialog"
              aria-label={`${p.title} 상세 보기`}>
              <ProjectCard project={p} onClick={onOpen} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <ProjectPanel
        open={modalState}
        project={selectedProject}
        onClose={() => setModalState(false)}
      />
    </>
  );
}
