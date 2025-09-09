"use client";

import ProjectCard from "./ProjectCard";
import { Project, projects } from "@/constants/projects";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

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
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {/* 카드(리스트)) 영역 */}
        {projects &&
          projects.map((project, idx) => {
            return (
              <ProjectCard
                project={project}
                key={idx}
                onClick={() => setSelectedProject(project)}
              />
            );
          })}

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
