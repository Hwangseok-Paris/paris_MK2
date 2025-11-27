import { getProjects } from "@/lib/db";
import ProjectsContainerClient from "./ProjectsContainerClient";

export default async function ProjectsContainer() {
  const projects = await getProjects();
  return <ProjectsContainerClient projects={projects} />;
}
