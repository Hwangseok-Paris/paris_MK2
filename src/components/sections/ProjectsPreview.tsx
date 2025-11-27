import Container from "@/components/layout/Container";
import Link from "next/link";
import ProjectCards, { type ProjectCardItem } from "@/components/sections/ProjectCards";
import { getProjects } from "@/lib/db";

export default async function ProjectsPreview() {
  const projects = await getProjects();
  const featured: ProjectCardItem[] = projects
    .filter((p) => p.id === "festivallife-admin")
    .map((p) => ({
      title: p.title,
      desc: p.summary,
      path: "/projects",
      image: "logo/festivalLife.svg",
    }));
  return (
    <section className=" border-gray-200 py-16 dark:border-gray-700">
      <Container>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold ">Featured Projects</h2>
          <Link href="/projects" className="text-primary-500 hover:underline">
            View all →
          </Link>
        </div>

        <ProjectCards projects={featured} />
      </Container>
    </section>
  );
}
