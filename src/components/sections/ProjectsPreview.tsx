import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProjectCards, { type ProjectCardItem } from "@/components/sections/ProjectCards";
import { getProjects } from "@/lib/db";
import type { Project } from "@/constants/projects";

const homeFeaturedProjectIds = ["samsung-cia", "osstem-hybrid", "nh-investment"];

const homeFeaturedCopy: Record<string, Pick<ProjectCardItem, "desc" | "signal" | "eyebrow" | "stack">> = {
  "samsung-cia": {
    eyebrow: "SAMSUNG ELECTRONICS",
    stack: ["React", "TypeScript", "Recharts"],
    desc: "대화형 분석 화면과 콘텐츠 대시보드를 초기부터 개발했습니다. 위젯·템플릿과 Agent 응답 규약을 설계하고, 백엔드·Agent 개발자들과 연동 방식을 협의했습니다.",
    signal: "프론트엔드 단독 개발·응답 구조 설계",
  },
  "osstem-hybrid": {
    eyebrow: "OSSTEM IMPLANT",
    stack: ["Kotlin", "Swift", "Vue3"],
    desc: "기존 웹뷰 앱을 네이티브 메뉴와 웹 화면이 결합된 구조로 전환했습니다. Android·iOS 앱과 모바일 웹을 연결하는 브릿지를 구현하고, 앱 동작을 검증했습니다.",
    signal: "앱·모바일 웹 연동 개발 단독 담당",
  },
  "nh-investment": {
    eyebrow: "NH INVESTMENT & SECURITIES",
    stack: ["Java", "JavaScript", "Skill-Builder"],
    desc: "챗봇 주요 로직을 구현하고, 상담 이력 저장·조회를 위한 아키텍처를 재구성했습니다. 개발 PL로 팀의 업무·일정을 관리하고 외주 개발자·솔루션 개발사와 협의했습니다.",
    signal: "개발 PL·주요 로직 개발·아키텍처 재구성",
  },
};

export default async function ProjectsPreview() {
  const projects = await getProjects();
  const featured: ProjectCardItem[] = homeFeaturedProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project))
    .map((p) => ({
      id: p.id,
      title: p.title,
      period: p.period,
      eyebrow: homeFeaturedCopy[p.id].eyebrow,
      signal: homeFeaturedCopy[p.id]?.signal ?? p.role,
      desc: homeFeaturedCopy[p.id]?.desc ?? p.summary,
      path: `/projects?project=${p.id}`,
      stack: homeFeaturedCopy[p.id].stack
        .filter((technology) => p.stack.includes(technology))
        .map((technology) => technology === "Skill-Builder" ? "Skill Builder" : technology),
    }));
  return (
    <>
      <section id="selected-work" aria-labelledby="selected-work-title">
        <div className="section-label">
          <h2 id="selected-work-title">대표 프로젝트</h2>
          <span>{featured.length ? `01 — ${String(featured.length).padStart(2, "0")}` : "00"}</span>
        </div>
        <ProjectCards projects={featured} />
      </section>
      <div className="footer">
        <span>대표 작업 {featured.length}건</span>
        <Link href="/projects">전체 프로젝트<ArrowUpRight aria-hidden="true" /></Link>
      </div>
    </>
  );
}
