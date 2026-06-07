import Container from "@/components/layout/Container";
import Link from "next/link";
import ProjectCards, { type ProjectCardItem } from "@/components/sections/ProjectCards";
import { getProjects } from "@/lib/db";

const homeFeaturedProjectIds = ["osstem-hybrid", "kyobo-talktalk", "festivallife-admin"];

const homeFeaturedCopy: Record<string, Pick<ProjectCardItem, "signal" | "image">> = {
  "osstem-hybrid": {
    signal: "Hybrid App 전환을 단독으로 설계·구현",
  },
  "kyobo-talktalk": {
    signal: "실시간 상담 솔루션을 리딩하며 운영 구조 개선",
  },
  "festivallife-admin": {
    signal: "서비스 기획부터 어드민 개발까지 제품 관점 참여",
    image: "logo/festivalLife.svg",
  },
};

export default async function ProjectsPreview() {
  const projects = await getProjects();
  const featured: ProjectCardItem[] = homeFeaturedProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean)
    .map((p) => ({
      title: p!.title,
      eyebrow: `${p!.company ?? "Project"} / ${p!.category}`,
      signal: homeFeaturedCopy[p!.id]?.signal ?? p!.role,
      desc: p!.summary,
      path: `/projects?project=${p!.id}`,
      image: homeFeaturedCopy[p!.id]?.image,
      stack: p!.stack.slice(0, 4),
    }));
  return (
    <section className=" border-gray-200 py-16 dark:border-gray-700">
      <Container>
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Career Highlights</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 opacity-75">
              단독 구현, 팀 리딩, 제품 기획까지 이어지는 대표 프로젝트입니다.
            </p>
          </div>
          <Link href="/projects" className="text-sm font-medium text-primary-500 hover:underline">
            View all →
          </Link>
        </div>

        <ProjectCards projects={featured} />
      </Container>
    </section>
  );
}
