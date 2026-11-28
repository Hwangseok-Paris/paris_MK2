import { featuredProjectIds, type Project } from "@/constants/projects";

export const filters = [
  { id: "all", label: "전체" },
  { id: "featured", label: "대표" },
  { id: "ownership", label: "리딩·단독" },
  { id: "realtime", label: "실시간 상담" },
  { id: "finance", label: "금융·보험" },
  { id: "hybrid", label: "Hybrid·App" },
  { id: "ai", label: "AI·Voice" },
] as const;

export type FilterId = (typeof filters)[number]["id"];

const projectText = (project: Project) =>
  [
    project.title,
    project.company,
    project.period,
    project.role,
    project.category,
    project.summary,
    project.stack.join(" "),
    project.highlights.join(" "),
  ]
    .join(" ")
    .toLowerCase();

export const matchesFilter = (project: Project, filter: FilterId) => {
  const text = projectText(project);
  // 개발 과정의 AI 활용은 AI 서비스 분류와 구분합니다.
  const aiText = [project.title, project.category, ...project.stack].join(" ").toLowerCase();
  const hasAiToken = /(^|[^a-z])ai([^a-z]|$)/.test(aiText);

  switch (filter) {
    case "featured":
      return featuredProjectIds.includes(project.id);
    case "ownership":
      return text.includes("단독") || text.includes("리딩") || text.includes("pl");
    case "realtime":
      return (
        text.includes("실시간") ||
        text.includes("상담") ||
        text.includes("챗봇") ||
        text.includes("connect always")
      );
    case "finance":
      return (
        project.category === "Finance" ||
        project.category === "Insurance" ||
        text.includes("은행") ||
        text.includes("보험") ||
        text.includes("투자증권")
      );
    case "hybrid":
      return (
        text.includes("hybrid") ||
        text.includes("webview") ||
        text.includes("android") ||
        text.includes("ios") ||
        text.includes("앱") ||
        text.includes("브릿지")
      );
    case "ai":
      return (
        project.category === "AI/Voice" ||
        hasAiToken ||
        text.includes("voice") ||
        text.includes("stt") ||
        text.includes("tts") ||
        text.includes("whisper") ||
        text.includes("음성")
      );
    case "all":
    default:
      return true;
  }
};
