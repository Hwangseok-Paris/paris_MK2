"use client";

import { useRef, useState } from "react";
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

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
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.div key={p.id} variants={item}>
            <ProjectCard project={p} onOpen={onOpen} />
          </motion.div>
        ))}
      </motion.div>

      <ProjectPanel
        open={modalState}
        project={selectedProject}
        onClose={onClose}
      />
    </>
  );
}
