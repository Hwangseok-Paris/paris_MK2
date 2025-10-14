"use client";

const items = [
  {
    title: "실시간 상담 솔루션 개발",
    desc: "카카오톡 기반 사내 솔루션 ‘Connect Always’의 모듈 설계 및 고객사 커스터마이징",
    stat: "재사용성 ↑, 유지보수 ↓",
  },
  {
    title: "프로젝트 리딩",
    desc: "3인 프론트엔드 팀을 이끌며 일정·품질·리스크를 주도적으로 관리",
    stat: "안정적 일정 준수율 100%",
  },
  {
    title: "금융권 챗봇 구축 리딩",
    desc: "NH투자증권 챗봇 프로젝트 PL역할 수행, 상담 이력 시스템 및 API 연동 설계",
    stat: "상담 효율·시스템 안정성 ↑",
  },
  {
    title: "AI 음성 상담 구현",
    desc: "ChatGPT API와 STT/TTS를 결합해 음성 기반 AI 상담 기능을 구축",
    stat: "상담 효율·사용자 만족도 ↑",
  },
  {
    title: "CI/CD 자동화",
    desc: "Jenkins·GitLab 파이프라인으로 배포 프로세스를 자동화",
    stat: "배포 시간 ↓ 50%",
  },
];

export default function Highlights() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold">Highlights</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-800/60 backdrop-blur">
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-lg font-semibold">{it.title}</h3>
              <span className="text-xs md:text-sm rounded-lg border border-primary-500/40 px-2 py-1 text-primary-600 dark:text-primary-400">
                {it.stat}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
