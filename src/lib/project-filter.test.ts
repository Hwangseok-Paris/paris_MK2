import { projects, type Project } from "@/constants/projects";
import { matchesFilter, type FilterId } from "./project-filter";

// 구조 정리 전 공개 목록에서 확인한 분류 결과입니다. 정렬은 별도 정책입니다.
const expectedGroups: Record<FilterId, string[]> = {
  all: [
    "samsung-cia",
    "samsung-parser-viewer",
    "lg-ecrm",
    "osstem-hybrid",
    "scb-connectalways",
    "realtime-voice-translate",
    "kyobo-direct",
    "festivallife-admin",
    "amore-bts",
    "kyobo-talktalk",
    "kakaoi-connect-always",
    "hana-bank",
    "nh-investment",
  ],
  featured: [
    "samsung-cia",
    "samsung-parser-viewer",
    "osstem-hybrid",
    "kyobo-talktalk",
    "nh-investment",
  ],
  ownership: [
    "samsung-cia",
    "samsung-parser-viewer",
    "osstem-hybrid",
    "kyobo-direct",
    "kyobo-talktalk",
    "nh-investment",
  ],
  realtime: [
    "scb-connectalways",
    "realtime-voice-translate",
    "kyobo-direct",
    "kyobo-talktalk",
    "kakaoi-connect-always",
    "hana-bank",
    "nh-investment",
  ],
  finance: [
    "samsung-parser-viewer",
    "scb-connectalways",
    "kyobo-direct",
    "kyobo-talktalk",
    "hana-bank",
    "nh-investment",
  ],
  hybrid: ["osstem-hybrid", "kyobo-talktalk"],
  ai: ["samsung-cia", "lg-ecrm", "realtime-voice-translate"],
};

it.each(Object.keys(expectedGroups) as FilterId[])(
  "%s 필터의 기존 프로젝트 분류 결과를 유지한다",
  (filter) => {
    const matchingIds = projects.filter((project) => matchesFilter(project, filter)).map(({ id }) => id);
    expect(matchingIds).toEqual(expectedGroups[filter]);
  },
);

const webProject: Project = {
  id: "web-console",
  title: "관리자 콘솔",
  period: "2026.01~02",
  role: "프론트엔드 개발",
  category: "Web",
  stack: ["React", "Tailwind CSS"],
  summary: "운영 데이터를 조회하고 수정하는 화면입니다.",
  highlights: [],
};

it("본문의 AI 개발 도구 활용만으로 AI 서비스에 포함하지 않는다", () => {
  const project = {
    ...webProject,
    summary: "AI를 활용해 화면 구현 방법을 검토했습니다.",
    highlights: ["AI의 도움으로 회귀 테스트를 보완했습니다."],
  };

  expect(matchesFilter(project, "ai")).toBe(false);
  expect(matchesFilter({ ...project, title: "AI 분석 콘솔" }, "ai")).toBe(true);
});

it("Mail·Tailwind 안의 글자를 AI 서비스 표시로 오인하지 않는다", () => {
  expect(matchesFilter({ ...webProject, title: "Mail 관리 콘솔" }, "ai")).toBe(false);
  expect(matchesFilter({ ...webProject, stack: ["React", "AI"] }, "ai")).toBe(true);
});
