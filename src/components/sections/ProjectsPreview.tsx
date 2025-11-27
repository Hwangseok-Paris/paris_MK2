import Container from "@/components/layout/Container";
import Link from "next/link";
import ProjectCards, { type ProjectCardItem } from "@/components/sections/ProjectCards";

export default function ProjectsPreview() {
  const projects: ProjectCardItem[] = [
    {
      title: "페스티벌라이프",
      desc: "국내 최대 공연/페스티벌 커뮤니티 '페스티벌 라이프' 앱 개발 프로젝트",
      image: "/logo/festivalLife.svg",
      path: "",
    },
  ];

  return (
    <section className=" border-gray-200 py-16 dark:border-gray-700">
      <Container>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold ">Featured Projects</h2>
          <Link href="/projects" className="text-primary-500 hover:underline">
            View all →
          </Link>
        </div>

        <ProjectCards projects={projects} />
      </Container>
    </section>
  );
}
