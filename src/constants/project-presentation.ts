import type { Project } from "./projects";

// Display titles approved in the type-index mockups; career data stays in Project.
const titles: Record<string, string> = {
  "samsung-cia": "Content Intelligence AI",
  "osstem-hybrid": "Mobile App Framework",
  "nh-investment": "Chatbot",
  "kyobo-talktalk": "Kyobo TalkTalk",
  "samsung-parser-viewer": "Parser Viewer",
  "lg-ecrm": "eCRM AI Agent",
  "scb-connectalways": "Consultation Customization",
  "realtime-voice-translate": "Voice & Chat PoC",
  "kyobo-direct": "Direct Chat",
  "festivallife-admin": "Festival Life",
  "amore-bts": "My Skin Solution",
  "kakaoi-connect-always": "Connect Always",
  "hana-bank": "Hana Talk MVP",
};

export const projectDisplayTitle = (project: Pick<Project, "id" | "title">) =>
  titles[project.id] ?? project.title;

export const projectOriginalTitle = (project: Pick<Project, "id" | "title">) =>
  project.id === "samsung-cia" ? "삼성전자 Content Intelligence AI" : project.title;

export const projectTitleLanguage = (id: string) => titles[id] ? "en" : "ko";
export const projectDisplayCompany = (project: Pick<Project, "id" | "company">) => {
  if (project.id === "samsung-cia") return "SAMSUNG ELECTRONICS";
  if (project.id === "osstem-hybrid") return "OSSTEM IMPLANT";
  return project.company;
};

// Service introductions for the list. Personal responsibilities stay in the detail panel.
const overviews: Record<string, string> = {
  "samsung-cia": "콘텐츠 제작·활용·성과 정보를 대화형 분석 화면과 대시보드에서 확인하는 서비스입니다.",
  "osstem-hybrid": "네이티브 메뉴와 웹 화면을 결합한 Android·iOS 모바일 앱 프레임워크입니다. 앱과 웹 사이의 인증·화면 제어·기능 연동을 지원합니다.",
  "nh-investment": "사용자 정보에 맞는 서비스를 제공하는 NH투자증권 챗봇입니다. 채팅 상담과 대화 이력 저장, 상담원 화면에서의 이력 조회를 연결합니다.",
  "kyobo-talktalk": "FP가 PC 웹과 모바일 하이브리드 앱에서 카카오톡 고객 상담을 진행하는 서비스입니다.",
  "samsung-parser-viewer": "문서 원본과 파서가 추출한 데이터를 나란히 비교하고 검수·수정하는 뷰어입니다. 원본 위치 확인과 수정이력 비교를 지원합니다.",
  "lg-ecrm": "캠페인 단계별 결과를 조회·편집하고 기록을 관리하는 eCRM AI Agent 화면입니다.",
  "scb-connectalways": "기존 상담 솔루션을 SC제일은행의 요구사항에 맞게 구성한 고객 상담 서비스입니다.",
  "realtime-voice-translate": "음성 인식·합성을 활용한 통역과 대화형 챗봇의 동작을 검증하는 PoC입니다.",
  "kyobo-direct": "기존 상담 솔루션을 바탕으로 교보 다이렉트의 서비스 범위에 맞게 구성한 웹 채팅 상담 서비스입니다.",
  "festivallife-admin": "공연·페스티벌 관계자와 관객을 위한 Festival Life 서비스와 운영용 관리자 웹입니다.",
  "amore-bts": "유전자 분석 결과를 바탕으로 개인에게 맞는 뷰티 정보를 제공하는 서비스입니다.",
  "kakaoi-connect-always": "카카오톡 기반 고객 상담 솔루션입니다. 상담 운영을 위한 관리자 페이지와 캘린더 기능을 제공합니다.",
  "hana-bank": "카카오톡 채널을 통해 상담과 콘텐츠를 연결하는 하나은행 서비스의 MVP입니다. 콘텐츠 목록과 티스토리·카카오맵 연동 기능을 제공합니다.",
};

export const projectOverview = (project: Pick<Project, "id" | "summary">) =>
  overviews[project.id] ?? project.summary;
