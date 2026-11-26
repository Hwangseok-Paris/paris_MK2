import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProjects } from "@/lib/db";

const featuredProjects = [
  { id: "samsung-cia", title: "삼성전자 Content Intelligence AI" },
  { id: "osstem-hybrid", title: "오스템 모바일 앱 프레임워크" },
  { id: "nh-investment", title: "NH투자증권 챗봇" },
];

export default async function ProjectsPreview() {
  const projects = await getProjects();
  const featured = featuredProjects.filter(({ id }) =>
    projects.some((project) => project.id === id),
  );
  return (
    <section className="mt-10 max-[700px]:mt-8" aria-labelledby="selected-work-title">
      <h2
        className="mb-2.5 text-[13px] font-medium text-[var(--personal-muted)]"
        id="selected-work-title"
        lang="en">
        Featured
      </h2>
      <ol className="m-0 list-none p-0">
        {featured.map(({ id, title }) => (
          <li key={id}>
            <Link
              className="inline-block py-1 text-[15px] leading-[1.65] font-normal break-keep hover:underline hover:underline-offset-[5px] max-[650px]:text-xs [@media(pointer:coarse)]:inline-flex [@media(pointer:coarse)]:min-h-11 [@media(pointer:coarse)]:items-center"
              href={`/projects?project=${id}`}>
              {title}
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
