export const dynamic = "force-dynamic";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import ProjectsPreviewSkeleton from "@/components/sections/ProjectsPreviewSkeleton";

export default function Home() {
  return (
    <div className="folio folio-home">
      <div className="viewport"><div className="site">
        <Hero />
        <Suspense fallback={<ProjectsPreviewSkeleton />}>
          <ProjectsPreview />
        </Suspense>
        <section className="about" id="about-paris" aria-labelledby="about-title">
          <div>
            <h2 id="about-title" lang="en">About Paris.</h2>
            <Link href="/about" className="detail-link">소개 더 보기<ArrowUpRight aria-hidden="true" /></Link>
          </div>
          <p>상담 서비스와 데이터 분석·검수 도구의 화면 구조와 기능을 설계하고 개발해 왔습니다. 직접 개발하면서 기획·디자인·백엔드와 구현 방향을 협의하고, 프로젝트에 따라 개발팀을 이끌며 업무와 기술 방향을 조율했습니다.</p>
        </section>
      </div></div>
    </div>
  );
}
