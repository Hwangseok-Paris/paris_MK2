"use client";

export default function AboutIntro() {
  return (
    <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-6 md:gap-10 items-start">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">About Paris</h1>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
          비전공 출신 3년 차 프런트엔드 개발자. 운영 중인 공연 정보 앱의
          <span className="font-medium"> 관리자 페이지(배너 스케줄·이미지 파이프라인·검색)</span>를
          총괄하며
          <span className="font-medium"> Next.js · Vue3 · TypeScript · Tailwind</span> 중심으로
          실사용자 경험을 다듬습니다. 배포는 AWS(S3/EC2)와 도커로, 정책/버전은 최신성을 중시합니다.
          포트폴리오는 <span className="font-medium">미니멀·다크모드·반응형</span>을 기본 원칙으로
          전개합니다.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Admin UX 운영",
            "이미지 업로드(S3/Presigned)",
            "Drag & Sort(@dnd-kit)",
            "검색 UX 최적화",
            "Next.js + TS",
            "Vue3 + Pinia",
          ].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1 text-xs md:text-sm text-gray-700 dark:text-gray-200">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <aside className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 md:p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur">
        <h3 className="text-base md:text-lg font-semibold">Now & Next</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>• 홈 화면 운영: ActiveBannerList 통합, 현재시간 기준 상태/가로 스크롤 UX</li>
          <li>• 이미지 파이프라인: S3 Presigned URL + Optimistic UI</li>
          <li>• 포트폴리오: Next.js + Tailwind, 다국어/다크모드, Drawer 상세(모바일 풀스크린)</li>
          <li>• Voice/실시간 로드맵: VAD → Whisper STT → 번역/교정 → TTS</li>
        </ul>
      </aside>
    </div>
  );
}
