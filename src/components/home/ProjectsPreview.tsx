import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProjects } from "@/lib/db";
import { projectDisplayTitle } from "@/constants/project-presentation";

const featuredProjects = [
  { id: "samsung-cia", role: "프론트엔드 단독 개발 · 응답 규약 설계" },
  { id: "osstem-hybrid", role: "Android·iOS 단독 개발 · 웹 연동" },
  { id: "nh-investment", role: "개발 PL · 주요 로직 구현 · 아키텍처 재구성" },
];

export default async function ProjectsPreview() {
  const projects = await getProjects();
  const featured = featuredProjects.flatMap(({ id, role }) => {
    const project = projects.find((item) => item.id === id);
    return project ? [{ id, role, title: projectDisplayTitle(project) }] : [];
  });
  return (
    <section className="mt-10 max-[700px]:mt-8" aria-labelledby="selected-work-title">
      <h2
        className="mb-2.5 text-[13px] font-medium text-[var(--personal-muted)]"
        id="selected-work-title"
        lang="en">
        Featured
      </h2>
      <ol className="m-0 list-none space-y-2 p-0">
        {featured.map(({ id, title, role }) => (
          <li key={id}>
            <Link
              className="group block py-1 text-[15px] leading-[1.65] font-normal break-keep max-[650px]:text-[13px]"
              href={`/projects?project=${id}`}>
              <span className="font-project-title group-hover:underline group-hover:underline-offset-[5px]">{title}</span>
              <span className="mt-0.5 block text-[12px] leading-[1.65] font-normal text-[var(--personal-muted)]">{role}</span>
            </Link>
          </li>
        ))}
      </ol>
      <Link
        className="mt-3 inline-flex min-h-11 items-center gap-[5px] text-[13px] text-[var(--personal-muted)] hover:underline hover:underline-offset-[5px] [&_svg]:size-3.5"
        href="/projects">
        전체 작업
        <ArrowUpRight aria-hidden="true" />
      </Link>
    </section>
  );
}
