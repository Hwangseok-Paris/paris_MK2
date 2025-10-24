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
    title: "신규 앱(하이브리드) 서비스 통합 프로젝트",
    company: "오스템임플란트",
    period: "2025.07 ~ 진행중",
    role: "웹-네이티브 브릿지 연동, Android APP 개발, 웹(Vue3) 개발",
    category: "Hybrid APP",
    stack: ["Kotlin", "Vue3"],
    summary:
      "기존 Full-WebView 앱을 네이티브 GNB 셸과 웹 콘텐츠 영역을 분리하는 Partial Hybrid 구조로 개편",
    highlights: [
      "신규 앱 디버깅 및 개발",
      "네이티브-웹 인터페이스 재설계",
      "기존 서비스 모바일 개편 가이드",
    ],
  },
  {
    id: "scb-connectalways",
    title: "SC제일은행 Kakao i Connect Always 솔루션 커스터마이징",
    company: "SC제일은행",
    period: "2025.04 ~ 2025.06",
    role: "프론트엔드 전담",
    category: "Finance",
    stack: ["Vue3", "Pinia", "Tailwind", "Stomp.js", "Vite"],
    summary: "요구사항에 맞춘 솔루션 UI/UX 커스터마이징, FE 통합 연동 및 기능 구현",
    highlights: ["상담 UI/UX 커스터마이징 및 접근성 강화", "내부 정책·보안 기준을 반영한 개발"],
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
      "ChatGPT·Whisper 기반의 실시간 음성 인식(STT), 합성(TTS), 통역 및 음성 대화형 챗봇 서비스를 구현.",
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
    title: "페스티벌라이프 앱 기획&개발",
    company: "페스티벌라이프",
    period: "2024.07 ~ 진행중",
    role: "기획, 웹 어드민 개발",
    category: "Admin",
    stack: ["React", "TypeScript", "React-Query", "Zustand", "Tailwind", "AWS", "Docker"],
    summary:
      "국내 최대 공연·페스티벌 커뮤니티 앱 ‘Festival Life’의 기획 및 어드민 개발을 담당. 엔터 업계 경험을 반영한 전반적인 기획과 설계.",
    highlights: [
      "React + TypeScript 기반 고성능 어드민 페이지 개발",
      "AWS EC2/S3 + Docker로 안정적 배포 환경 구축",
      "효율적인 운영을 위한 UX 설계",
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
      "Jira/Confluence 협업 프로세스 활용",
    ],
  },
  {
    id: "kyobo-talktalk",
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
    id: "kakaoi-connect-always",
    title: "카카오 i 커넥트 올웨이즈 솔루션 개발",
    company: "코드클릭",
    period: "2023.05 ~ 2023.09",
    role: "프론트엔드 개발",
    category: "CRM",
    stack: ["Vue3", "Pinia", "Tailwind", "Stomp.js", "Vite"],
    summary: "카카오톡 기반 상담 솔루션 ‘Connect Always’ 프론트엔드 개발",
    highlights: ["관리자 페이지 및 캘린더 기능 개발", "Pinia 상태관리 구조화 및 공통 컴포넌트화"],
  },
  {
    id: "nh-investment",
    title: "NH 투자증권 챗봇 프로젝트",
    company: "NH투자증권",
    period: "2022.03 ~ 2024.10",
    role: "개발 PL",
    category: "Finance",
    stack: ["Java", "JavaScript", "Skill-Builder", "Oracle", "Docker-Compose"],
    summary:
      "카카오톡 기반 챗봇 시스템 구축 프로젝트의 FE/BE 개발 PL역할 수행. 일정 및 인력 관리, API 연동 구조 설계 총괄.",
    highlights: [
      "Kakao i Skill Builder를 활용한 챗봇 개발",
      "레거시 API 연동 구조 설계 및 개발",
      "운영 프로세스 표준화 및 품질 관리",
      "FE/BE 통합 개발 프로세스, 일정 관리",
    ],
  },
];
