"use client";

export default function AboutIntro() {
  return (
    <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-6 md:gap-10 items-start">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">About</h1>

        <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
          기계공학과 졸업. 엔터테인먼트 업계를 거쳐 프론트엔드 개발자로 성장중인 김황석입니다.
        </p>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
          다양한 경험을 기반으로 사용자에게 보다 다채롭고 편안한 환경을 제공하기 위한 개발을
          지향합니다.
        </p>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
          (주)코드클릭 소속으로 챗봇, CRM 솔루션, 솔루션 커스터마이징(파견) 등 다수의 프로젝트를
          완수하였으며, 팀 리딩, 프로젝트 프론트 리딩 역할을 수행하였습니다.
        </p>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
          국내 최대 페스티벌&공연 덕후 커뮤니티 페스티벌 라이프(
          <span
            className="text-[red] font-semibold hover:cursor-pointer"
            onClick={() => window.open("https://www.instagram.com/fstvl.life")}>
            @fstvl.life
          </span>
          ) 앱 런칭을 위해 프로젝트를 진행중으로, 기획 및 웹 어드민 개발을 담당하고 있습니다.
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
