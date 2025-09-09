export type Project = {
  id: string;
  title: string;
  company?: string;
  period: string;
  role: string;
  category: "Finance" | "Insurance" | "Beauty" | "AI/Voice" | "Hybrid" | "Chatbot";
  stack: string[];
  summary: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "osstem-hybrid",
    title: "앱(하이브리드) 서비스 통합 프로젝트",
    company: "오스템 임플란트",
    period: "2025.07 ~ 진행중",
    role: "웹-네이티브 브릿지 연동, 가이드 정리",
    category: "Hybrid",
    stack: ["Vue3", "Pinia", "Vite"],
    summary: "네이티브 앱-웹(Vue) 간 브릿지 통신을 설계/구현하고 서비스 통합 가이드를 정리.",
    highlights: [
      "앱-웹 브릿지 프로토콜 정리 및 구현",
      "서비스별 앱 통합 가이드 정리",
      "하이브리드 운영 이슈 대응 체계화",
    ],
  },
  {
    id: "scb-connectalways",
    title: "CRM(Connect Always) 커스터마이징",
    company: "SC제일은행",
    period: "2025.04 ~ 2025.06",
    role: "프론트엔드 전담",
    category: "Finance",
    stack: ["Vue3", "Pinia", "Tailwind", "Stomp.js", "Vite"],
    summary: "은행 환경에 맞는 CRM 상담 UI/UX와 실시간 처리 흐름을 커스터마이징.",
    highlights: [
      "상담 UI/UX 커스터마이징",
      "실시간(웹소켓) 이벤트 처리 안정화",
      "은행 내부 정책/보안 고려한 화면 설계",
    ],
  },
  {
    id: "realtime-voice-translate",
    title: "실시간 음성 통역/채팅(AI, STT/TTS) 서비스 개발",
    company: "Side Project",
    period: "2025.02 ~ 2025.03",
    role: "FE/BE 개발",
    category: "AI/Voice",
    stack: ["React", "Vue3", "TypeScript", "Tailwind", "OpenAI Whisper/TTS"],
    summary: "ChatGPT·Whisper 기반 실시간 음성 STT/TTS, 통역, 음성 대화형 챗봇 구현.",
    highlights: [
      "실시간 음성 인식(STT)·합성(TTS) 파이프라인",
      "대화형 챗봇 UX 설계",
      "React→Vue 마이그레이션 경험",
    ],
  },
  {
    id: "kyobo-direct",
    title: "교보 다이렉트 실시간 채팅 상담",
    company: "교보생명",
    period: "2024.08 ~ 2025.01",
    role: "프론트엔드 전담",
    category: "Insurance",
    stack: ["Vue3", "Pinia", "Tailwind", "Stomp.js", "Vite"],
    summary:
      "카카오톡 기반 상담 솔루션(Connect Always)을 고객사 환경에 맞춰 커스터마이징 및 성능 최적화.",
    highlights: [
      "상태관리(Pinia) 구조화 및 최적화",
      "실시간 메시징 안정성/성능 개선",
      "컴포넌트화로 재사용성 향상",
    ],
  },
  {
    id: "amore-bts",
    title: "BTS(Beauty Tech Solution) 운영 (마이스킨솔루션)",
    company: "Amorepacific",
    period: "2024.04 ~ 2024.07",
    role: "FE 개발/운영",
    category: "Beauty",
    stack: ["Next.js", "TypeScript", "Tailwind", "Jenkins", "PostgreSQL"],
    summary:
      "유전자 분석 기반 맞춤 뷰티 서비스의 웹 기능 개발 및 운영, 신규 분석 API/프로모션 화면 연동.",
    highlights: [
      "Next.js 기반 기능/프로모션 개발",
      "운영 안정화 및 버그 수정",
      "Jira/Confluence 협업 프로세스 적용",
    ],
  },
  {
    id: "kyobo-toktok",
    title: "교보톡톡 상담 솔루션",
    company: "교보생명",
    period: "2023.09 ~ 2024.03",
    role: "프론트엔드 3인 팀 리딩",
    category: "Insurance",
    stack: ["Vue3", "Pinia", "Tailwind", "Stomp.js", "Vite"],
    summary:
      "3인 팀 리딩으로 일정/리스크 관리, WebView 기반 하이브리드 환경 대응 및 브릿지 통신 구현.",
    highlights: [
      "팀 리딩(일정/리스크/코드리뷰)",
      "WebView-React Native 브릿지 통신",
      "공통 컴포넌트화로 생산성 향상",
    ],
  },
  // 필요 시: NH투자증권 챗봇(PL)도 추가 가능
];
