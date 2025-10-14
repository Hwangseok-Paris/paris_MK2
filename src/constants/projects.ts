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

export const projects: Project[] = [
  {
    id: "osstem-hybrid",
    title: "앱(하이브리드) 서비스 통합 프로젝트",
    company: "오스템임플란트",
    period: "2025.07 ~ 진행중",
    role: "웹-네이티브 브릿지 연동, 가이드 정리",
    category: "Hybrid",
    stack: ["Vue3", "Pinia", "Vite"],
    summary:
      "네이티브 앱과 웹(Vue) 간 브릿지 통신을 설계·구현하고, 하이브리드 서비스 통합 가이드를 정리.",
    highlights: [
      "앱-웹 브릿지 프로토콜 정의 및 공통 모듈화",
      "서비스별 통합 운영 가이드 제작",
      "하이브리드 환경 운영 이슈 대응 체계화",
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
    summary:
      "은행 환경에 맞춰 CRM 상담 UI/UX를 커스터마이징하고 실시간 이벤트(웹소켓) 안정성을 개선.",
    highlights: [
      "상담 UI/UX 커스터마이징 및 접근성 강화",
      "실시간 이벤트(Stomp.js) 처리 안정화",
      "내부 정책·보안 기준을 반영한 설계",
    ],
  },
  {
    id: "realtime-voice-translate",
    title: "실시간 음성 통역·채팅(AI, STT/TTS) 서비스 개발",
    company: "POC",
    period: "2025.02 ~ 2025.03",
    role: "FE/BE 개발",
    category: "AI/Voice",
    stack: ["React", "Vue3", "TypeScript", "Tailwind", "OpenAI Whisper", "OpenAI TTS"],
    summary:
      "ChatGPT·Whisper 기반의 실시간 음성 인식(STT), 합성(TTS), 통역 및 대화형 챗봇 서비스를 구현.",
    highlights: [
      "실시간 음성 인식·합성 파이프라인 설계",
      "대화형 챗봇 UX 및 처리 흐름 구축",
      "React → Vue3 마이그레이션 경험",
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
      "카카오톡 기반 상담 솔루션(Connect Always)을 고객사 정책에 맞춰 커스터마이징하고 성능을 최적화.",
    highlights: [
      "상태관리(Pinia) 구조 개선 및 성능 최적화",
      "실시간 메시징 안정성 향상",
      "컴포넌트화로 재사용성 확보",
    ],
  },
  {
    id: "festivallife-admin",
    title: "페스티벌라이프 앱 개발",
    company: "사이드 프로젝트",
    period: "2024.07 ~ 진행중",
    role: "기획, 웹 어드민 개발",
    category: "Admin",
    stack: ["React", "TypeScript", "React-Query", "Zustand", "Tailwind", "AWS", "Docker"],
    summary:
      "국내 최대 공연·페스티벌 커뮤니티 앱 ‘Festival Life’의 기획 및 어드민 개발을 담당. 엔터 업계 경험을 반영한 UX 중심 설계.",
    highlights: [
      "React + TypeScript 기반 고성능 어드민 페이지 개발",
      "AWS EC2/S3 + Docker로 안정적 배포 환경 구축",
      "Tailwind로 일관된 디자인 시스템 구현",
    ],
  },
  {
    id: "amore-bts",
    title: "BTS(Beauty Tech Solution) 운영 (마이스킨솔루션)",
    company: "Amorepacific",
    period: "2024.04 ~ 2024.07",
    role: "FE 개발/운영",
    category: "Beauty",
    stack: ["Next.js", "TypeScript", "Tailwind", "Jenkins", "PostgreSQL", "GitLab"],
    summary: "유전자 분석 기반 맞춤 뷰티 서비스의 신규 기능·프로모션 화면 개발 및 운영을 담당.",
    highlights: [
      "Next.js 기반 신규 기능·프로모션 화면 개발",
      "운영 안정화 및 사용자 피드백 반영 UI 개선",
      "Jira/Confluence 협업 프로세스 정착",
    ],
  },
  {
    id: "kyobo-toktok",
    title: "교보톡톡 상담 솔루션",
    company: "교보생명",
    period: "2023.09 ~ 2024.03",
    role: "프론트엔드 3인 팀 리딩",
    category: "Insurance",
    stack: ["Vue3", "Pinia", "Tailwind", "Stomp.js", "Vite", "SVN"],
    summary:
      "카카오톡 상담 솔루션 ‘Connect Always’ 프로젝트 리딩. 하이브리드(WebView) 환경 대응 및 브릿지 통신 구현.",
    highlights: [
      "일정·리스크 관리 및 코드 리뷰 리딩",
      "Pinia 상태관리 구조화 및 공통 컴포넌트화",
      "WebView-React Native 브릿지 통신 구현",
    ],
  },
  {
    id: "nh-investment",
    title: "NH 투자증권 챗봇 프로젝트",
    company: "NH투자증권",
    period: "2022.03 ~ 2024.10",
    role: "개발 PL",
    category: "Finance",
    stack: ["Vue3", "JavaScript", "Java", "Skill-Builder", "Oracle", "Docker-Compose"],
    summary:
      "카카오톡 기반 챗봇 시스템 구축 프로젝트의 FE/BE 개발 PL로 참여. 일정 및 인력 관리, API 연동 구조 설계 총괄.",
    highlights: [
      "챗봇 대화 흐름 및 API 연동 구조 설계",
      "운영 프로세스 표준화 및 품질 관리",
      "FE/BE 통합 릴리즈 관리",
    ],
  },
];
