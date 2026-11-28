import type { Project } from "./projects";

// Keep the recorded project name recognizable across home, list and detail.
export const projectDisplayTitle = (project: Pick<Project, "id" | "title">) =>
  project.title;

export const projectTitleLanguage = (project: Pick<Project, "id" | "title">) =>
  /[가-힣]/.test(projectDisplayTitle(project)) ? "ko" : "en";
export const projectDisplayCompany = (project: Pick<Project, "id" | "company">) => {
  if (project.id === "amore-bts") return "아모레퍼시픽";
  return project.company;
};

const normalizeName = (value: string) => value.normalize("NFKC").replace(/\s+/g, "").toLowerCase();
const companyAliases: Record<string, string[]> = {
  "오스템임플란트": ["오스템"],
  "교보생명": ["교보"],
  "페스티벌라이프": ["Festival Life"],
};

export const projectCompanyLabel = (project: Pick<Project, "id" | "title" | "company">) => {
  const company = projectDisplayCompany(project);
  if (!company) return undefined;
  const title = normalizeName(projectDisplayTitle(project));
  const names = [company, ...(companyAliases[normalizeName(company)] ?? [])];
  return names.some((name) => title.includes(normalizeName(name))) ? undefined : company;
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

// Match the approved sentence, not its array position: older DB copy must not
// acquire a heading intended for a different contribution.
const contributionTitles: Record<string, Record<string, string>> = {
  "samsung-cia": {
    "Agent가 반환하는 데이터를 화면에 표시하기 위한 위젯·템플릿 구조와 응답 규약을 설계했습니다.": "응답 구조 설계",
    "질문과 분석 결과를 연결하는 채팅 화면, SSE 기반 진행 상태·결과 표시, 콘텐츠 검색·필터·상세 조회를 구현했습니다.": "대화와 분석 화면",
    "백엔드·Agent 개발자들과 연동 방식, 멀티턴 대화의 슬롯 응답 선택과 대화 이력 처리 방향을 협의했습니다.": "Agent 연동 협의",
    "Agent 응답의 형식을 검증하고, 일부 결과에 오류가 발생해도 나머지 내용은 확인할 수 있도록 오류 처리를 구현했습니다.": "부분 오류 대응",
  },
  "samsung-parser-viewer": {
    "원본 문서와 파싱 결과를 나란히 표시하고, 선택한 요소의 원본 위치를 확인할 수 있는 하이라이트와 페이지 이동을 구현했습니다.": "원본 대조",
    "신뢰도가 낮은 항목을 찾는 필터, 유형별 데이터 편집, 수정 반영과 수정이력·변경 전후 비교를 구현했습니다.": "편집과 수정 이력",
    "초기 FastAPI 샘플 API를 작성한 뒤 백엔드 개발자에게 인계하고 연동을 협의했습니다.": "API 연동 협업",
    "AI를 활용해 문서 요소의 표시·편집 동작에 대한 Vitest 기반 회귀 테스트를 보완하고, 기존 동작이 유지되는지 확인하며 API·타입·화면 컴포넌트의 역할을 분리했습니다.": "회귀 테스트와 구조 개선",
  },
  "osstem-hybrid": {
    "네이티브 상단 메뉴·하단 툴바와 웹 화면을 연결하고, 표시 제어·위치 요청·전체화면·버전 확인과 강제 업데이트 등의 브릿지 연동을 구현했습니다.": "웹·앱 브릿지",
    "딥링크·유니버설 링크·외부 앱 실행, SSO·쿠키 동기화 등 앱 진입과 인증에 필요한 동작을 구현·검증했습니다.": "진입과 인증",
    "배포 대응을 맡고, 모바일 웹 개편 가이드와 Android·iOS 개발·운영 인수인계 문서를 작성했습니다.": "배포와 인수인계",
    "구조 설계·코드 작성·문제 해결에는 AI 에이전트를 활용했습니다. 코드를 직접 검토해 수정 방향을 정하고 필요한 세부 사항을 수정했으며, 앱 실행과 동작 검증도 직접 수행했습니다.": "AI 활용과 검증",
  },
  "festivallife-admin": {
    "관리자 화면에 필요한 데이터 항목과 구조를 정리하고, 백엔드에서 제공할 API 응답 형식을 정의해 개발자에게 전달했습니다.": "데이터와 API 응답 설계",
  },
  "kyobo-talktalk": {
    "업무 분담·일정 관리·코드 리뷰·기술 방향 결정을 맡았습니다.": "팀 리딩",
    "실시간 채팅과 API 연동·비동기 처리를 구현하고, Pinia로 화면 상태를 관리했습니다.": "채팅과 상태 관리",
    "기획자·디자이너·퍼블리셔·백엔드 및 앱 개발자와 화면·기능의 구현 방향을 협의했습니다.": "구현 방향 협의",
    "앱 개발자와 웹·앱 브릿지 통신 방향을 정하고 서버 연동과 함께 구현했습니다.": "웹·앱 연동",
  },
  "nh-investment": {
    "채팅 진입 시 사용자 정보에 맞는 서비스를 제공하도록 Skill Builder에서 여러 API를 연동했습니다.": "맞춤 서비스 연동",
    "대화 이력의 저장과 상담원 화면 조회에 맞지 않던 기존 구조를 검토하고 관련 아키텍처를 재구성했습니다. 상담이력서비스를 구현하는 외주 개발자가 원활하게 작업할 수 있도록 소통하며 개발 과정을 조율했습니다.": "상담 이력 구조 개선",
    "개발 도구에서 발생한 버그를 검증하고 카카오엔터프라이즈 개발자에게 피드백하며 연동 문제를 협의했습니다.": "도구 오류 검증",
  },
};

export const projectContributionTitle = (projectId: string, contribution: string) =>
  contributionTitles[projectId]?.[contribution];
