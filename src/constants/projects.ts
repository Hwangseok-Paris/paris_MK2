export type Project = {
  id: string;
  title: string;
  company?: string;
  period: string;
  role: string;
  category: string;
  stack: string[];
  summary: string;
  highlights: string[];
};

// 공개 승인된 대표 순서. 기존 ID는 상세 링크를 위해 유지합니다.
export const featuredProjectIds = ["samsung-cia", "osstem-hybrid", "nh-investment", "kyobo-talktalk", "samsung-parser-viewer"];

export const projects: Project[] = [
  {
    id: "samsung-cia",
    title: "삼성전자 Content Intelligence AI",
    company: "삼성전자",
    period: "2026.08~10",
    role: "프론트엔드 단독 개발·응답 구조 설계",
    category: "AI",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "React Router", "Vitest"],
    summary:
      "콘텐츠 제작·활용·성과 정보를 대화형 분석 화면과 대시보드에서 확인하는 서비스입니다. 프론트엔드를 초기 구성부터 단독 담당했습니다.",
    highlights: [
      "Agent가 반환하는 데이터를 화면에 표시하기 위한 위젯·템플릿 구조와 응답 규약을 설계했습니다.",
      "질문과 분석 결과를 연결하는 채팅 화면, SSE 기반 진행 상태·결과 표시, 콘텐츠 검색·필터·상세 조회를 구현했습니다.",
      "백엔드·Agent 개발자들과 연동 방식, 멀티턴 대화의 슬롯 응답 선택과 대화 이력 처리 방향을 협의했습니다.",
      "Agent 응답의 형식을 검증하고, 일부 결과에 오류가 발생해도 나머지 내용은 확인할 수 있도록 오류 처리를 구현했습니다.",
    ],
  },
  {
    id: "samsung-parser-viewer",
    title: "삼성증권 파서 뷰어",
    company: "삼성증권",
    period: "2026.06.11~08.31",
    role: "프론트엔드 단독 개발·초기 샘플 API 작성 및 인계",
    category: "Finance",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "PDF.js", "KaTeX", "Vitest"],
    summary:
      "문서 원본과 파서가 추출한 데이터를 비교하고 검수·수정하는 뷰어입니다. 프론트엔드를 초기부터 단독 담당하며 화면 구조와 데이터 유형별 표현 방식을 결정했습니다. 사용 편의성을 높이기 위한 기능과 UI 개선안도 먼저 제안하고 구현했습니다.",
    highlights: [
      "원본 문서와 파싱 결과를 나란히 표시하고, 선택한 요소의 원본 위치를 확인할 수 있는 하이라이트와 페이지 이동을 구현했습니다.",
      "신뢰도가 낮은 항목을 찾는 필터, 유형별 데이터 편집, 수정 반영과 수정이력·변경 전후 비교를 구현했습니다.",
      "초기 FastAPI 샘플 API를 작성한 뒤 백엔드 개발자에게 인계하고 연동을 협의했습니다.",
      "AI를 활용해 문서 요소의 표시·편집 동작에 대한 Vitest 기반 회귀 테스트를 보완하고, 기존 동작이 유지되는지 확인하며 API·타입·화면 컴포넌트의 역할을 분리했습니다.",
    ],
  },
  {
    id: "lg-ecrm",
    title: "LG전자 eCRM AI Agent 화면 React 전환",
    company: "LG전자",
    period: "2026.06.10~06.11 (초기 개발)",
    role: "React 화면 전환·API 연동",
    category: "AI",
    stack: ["React", "TypeScript", "Zustand", "Tailwind CSS"],
    summary:
      "기존 Streamlit 화면을 React로 이식하고, 캠페인 단계별 결과 조회·편집, 기록관리, UAT 화면과 API 연동을 구현했습니다. 초기 마이그레이션 이후에는 회의 참석과 배포를 지원했습니다.",
    highlights: [],
  },
  {
    id: "osstem-hybrid",
    title: "오스템 모바일 앱 프레임워크 구축",
    company: "오스템임플란트",
    period: "2025.07~2026.05",
    role: "Android·iOS 앱 및 모바일 웹 연동 개발 단독 담당",
    category: "Hybrid APP",
    stack: ["Kotlin", "Swift", "SwiftUI", "WKWebView", "Vue3", "WebView Bridge", "TestFlight"],
    summary:
      "채널별로 분산 운영하던 공통 UI를 앱 중심으로 통합해, 같은 내용을 여러 채널에서 반복 수정해야 했던 구조를 개선했습니다. 기존 Full WebView 앱을 네이티브 메뉴와 웹 화면이 결합된 Partial Hybrid 구조로 전환했습니다.",
    highlights: [
      "네이티브 상단 메뉴·하단 툴바와 웹 화면을 연결하고, 표시 제어·위치 요청·전체화면·버전 확인과 강제 업데이트 등의 브릿지 연동을 구현했습니다.",
      "딥링크·유니버설 링크·외부 앱 실행, SSO·쿠키 동기화 등 앱 진입과 인증에 필요한 동작을 구현·검증했습니다.",
      "배포 대응을 맡고, 모바일 웹 개편 가이드와 Android·iOS 개발·운영 인수인계 문서를 작성했습니다.",
      "구조 설계·코드 작성·문제 해결에는 AI 에이전트를 활용했습니다. 코드를 직접 검토해 수정 방향을 정하고 필요한 세부 사항을 수정했으며, 앱 실행과 동작 검증도 직접 수행했습니다.",
    ],
  },
  {
    id: "scb-connectalways",
    title: "SC제일은행 상담 솔루션 커스터마이징",
    company: "SC제일은행",
    period: "2025.04~2025.06",
    role: "프론트엔드 전담",
    category: "Finance",
    stack: ["Vue3", "Pinia", "Tailwind", "Stomp.js", "Vite"],
    summary:
      "기존 상담 솔루션의 프론트엔드를 전담해 고객사 요구사항에 맞게 상담 UI를 수정하고 기능과 API 연동을 구현했습니다.",
    highlights: [],
  },
  {
    id: "realtime-voice-translate",
    title: "음성 통역·채팅 서비스 PoC",
    company: "코드클릭",
    period: "2025.02~2025.03",
    role: "프론트엔드·백엔드 개발",
    category: "AI/Voice",
    stack: ["React", "Vue3", "TypeScript", "Tailwind", "OpenAI Whisper", "OpenAI TTS"],
    summary:
      "음성 인식·합성을 활용한 통역과 대화형 챗봇의 프론트엔드·백엔드를 개발했습니다. 음성 처리 흐름을 구성하고 React 기반 화면을 Vue로 전환했습니다.",
    highlights: [],
  },
  {
    id: "kyobo-direct",
    title: "교보 다이렉트 채팅 상담",
    company: "교보생명",
    period: "2024.08~2025.01",
    role: "프론트엔드 단독 개발",
    category: "Insurance",
    stack: ["Vue3", "Pinia", "Tailwind", "Stomp.js", "Vite"],
    summary:
      "기존 상담 솔루션을 바탕으로 교보 다이렉트의 웹 프론트엔드를 단독 담당했습니다. 서비스 범위에 맞게 필요한 기능을 커스터마이징하고 불필요한 기능을 제외했습니다.",
    highlights: [],
  },
  {
    id: "festivallife-admin",
    title: "Festival Life 서비스 기획·관리자 웹 개발",
    company: "페스티벌라이프",
    period: "2024.07~2026.08",
    role: "서비스 기획·관리자 웹 개발",
    category: "Admin",
    stack: ["React", "TypeScript", "React-Query", "Zustand", "Tailwind", "AWS", "Docker"],
    summary:
      "공연·페스티벌 업계 경험을 바탕으로, 직장 업무시간 외에 서비스 기획과 개발에 참여했습니다. 관계자와 관객의 이용 상황을 고려해 필요한 기능과 이용 흐름을 검토했습니다. React 기반 관리자 웹을 개발하고 AWS·Docker를 활용한 개발·배포 환경을 구성했습니다.",
    highlights: [
      "관리자 화면에 필요한 데이터 항목과 구조를 정리하고, 백엔드에서 제공할 API 응답 형식을 정의해 개발자에게 전달했습니다.",
    ],
  },
  {
    id: "amore-bts",
    title: "아모레퍼시픽 마이스킨솔루션 개발·운영",
    company: "Amorepacific",
    period: "2024.04~2024.07",
    role: "프론트엔드 개발·운영",
    category: "Beauty",
    stack: ["Next.js", "TypeScript", "Tailwind", "Jenkins", "PostgreSQL", "GitLab"],
    summary:
      "유전자 분석 기반 맞춤 뷰티 서비스의 프론트엔드 개발·운영을 맡았습니다. 신규 기능과 프로모션 화면, 분석 API 연동을 구현하고 사용자 피드백에 따른 UI 수정과 버그 대응을 수행했습니다.",
    highlights: [],
  },
  {
    id: "kyobo-talktalk",
    title: "교보톡톡 상담 솔루션",
    company: "교보생명",
    period: "2023.09~2024.03",
    role: "프론트엔드 3인 팀 리딩·웹 개발·웹/앱/서버 연동",
    category: "Insurance",
    stack: ["Vue3", "Pinia", "Tailwind", "Stomp.js", "Vite", "SVN"],
    summary:
      "FP가 PC 웹과 모바일 하이브리드 앱에서 카카오톡 고객 상담을 진행하는 서비스입니다. 본인 포함 프론트엔드 3명 팀을 리딩하며 PC·모바일 웹 UI 개발과 웹·앱·서버 간 연동을 맡았습니다.",
    highlights: [
      "업무 분담·일정 관리·코드 리뷰·기술 방향 결정을 맡았습니다.",
      "실시간 채팅과 API 연동·비동기 처리를 구현하고, Pinia로 화면 상태를 관리했습니다.",
      "기획자·디자이너·퍼블리셔·백엔드 및 앱 개발자와 화면·기능의 구현 방향을 협의했습니다.",
      "앱 개발자와 웹·앱 브릿지 통신 방향을 정하고 서버 연동과 함께 구현했습니다.",
    ],
  },
  {
    id: "kakaoi-connect-always",
    title: "카카오 i Connect Always 솔루션 개발",
    company: "코드클릭",
    period: "2023.07~2023.10",
    role: "프론트엔드 개발",
    category: "CRM",
    stack: ["Vue3", "Pinia", "Tailwind", "Stomp.js", "Vite"],
    summary:
      "카카오톡 기반 상담 솔루션의 관리자 페이지와 캘린더 기능을 개발했습니다. Pinia 상태관리와 공통 컴포넌트를 구성했습니다.",
    highlights: [],
  },
  {
    id: "hana-bank",
    title: "하나은행 하나톡 MVP",
    company: "하나은행",
    period: "2023.02~2023.07",
    role: "프론트엔드 개발",
    category: "Finance",
    stack: ["JavaScript", "Vue.js", "Vuex", "Github"],
    summary:
      "카카오톡 채널 기반 상담·콘텐츠 연계 서비스의 프론트엔드를 개발했습니다. 콘텐츠 목록의 무한 스크롤과 티스토리·카카오맵 API 연동을 구현하고, 컴포넌트 구조 정리와 XSS 이슈 대응을 수행했습니다.",
    highlights: [],
  },
  {
    id: "nh-investment",
    title: "NH투자증권 챗봇 구축",
    company: "NH투자증권",
    period: "2022.02~2022.10",
    role: "개발 PL·주요 로직 개발·아키텍처 재구성",
    category: "Finance",
    stack: ["Java", "JavaScript", "Skill-Builder", "Oracle", "Docker-Compose"],
    summary:
      "구축 초기에 개발자로 합류한 뒤 개발 PL 역할을 이어받았습니다. 본인 포함 4명 개발팀의 업무 분담·일정 관리·기술 방향 결정을 맡으며 챗봇 주요 로직을 직접 구현했습니다.",
    highlights: [
      "채팅 진입 시 사용자 정보에 맞는 서비스를 제공하도록 Skill Builder에서 여러 API를 연동했습니다.",
      "대화 이력의 저장과 상담원 화면 조회에 맞지 않던 기존 구조를 검토하고 관련 아키텍처를 재구성했습니다. 상담이력서비스를 구현하는 외주 개발자가 원활하게 작업할 수 있도록 소통하며 개발 과정을 조율했습니다.",
      "개발 도구에서 발생한 버그를 검증하고 카카오엔터프라이즈 개발자에게 피드백하며 연동 문제를 협의했습니다.",
    ],
  },
];
