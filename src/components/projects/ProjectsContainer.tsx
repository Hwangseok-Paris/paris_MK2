import { getProjects } from "@/lib/db";
import ProjectsContainerClient from "./ProjectsContainerClient";
import PageHeading from "@/components/layout/PageHeading";

export default async function ProjectsContainer() {
  const projects = await getProjects();
  const years = projects.flatMap(({ period }) => (period.match(/\b\d{4}\b/g) ?? []).map(Number));
  const period = years.length ? `${Math.min(...years)} — ${Math.max(...years)}` : undefined;
  return (
    <>
      <PageHeading title="PROJECTS" period={period} />
      <ProjectsContainerClient projects={projects} />
    </>
  );
}
