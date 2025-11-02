"use client";

export default function AboutIntro() {
  return (
    <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-6 md:gap-10 items-start">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          안녕하세요.
          <br />
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
            프론트엔드 개발자 김황석
          </span>
          입니다.
        </h1>

        <div className="my-16 space-y-4 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            기계공학을 전공하고 엔터테인먼트 업계를 거쳐, 지금은{" "}
            <strong className="text-gray-900 dark:text-gray-100">
              사용자 경험을 기술로 구현하는 개발자
            </strong>
            로 성장했습니다.
          </p>

          <p>
            (주)코드클릭 소속으로 챗봇, CRM 솔루션(Kakao i Connect Always) 개발, 고객사 커스터마이징
            등 다양한{" "}
            <strong className="text-gray-900 dark:text-gray-100">
              실시간 커뮤니케이션 프로젝트
            </strong>
            를 완수하였으며, 프론트엔드 리딩과 코드 리뷰를 통해 품질과 일정을 함께 관리했습니다.
          </p>

          <p>
            현재는 국내 최대 공연·페스티벌 커뮤니티(
            <span
              className="text-red-400 font-semibold hover:cursor-pointer underline decoration-wavy"
              onClick={() => window.open("https://www.instagram.com/fstvl.life")}>
              @fstvl.life
            </span>
            ) 앱 런칭을 목표로, <strong>기획과 웹 어드민 개발</strong>을 담당하고 있습니다. 지난
            엔터테인먼트 경력, 현재의 주력 기술을 연결해 사용자에게{" "}
            <strong>감각적이고 효율적인 UX</strong>를 제공하고자 합니다.
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {[
            "실시간 상담 솔루션(Connect Always)",
            "고객사 커스터마이징·모듈화",
            "AI 음성 상담(ChatGPT + STT/TTS)",
            "CI/CD 자동화(Jenkins·GitLab)",
            "Admin UX·운영 효율화",
            "React + TypeScript + Tailwind",
            "Vue3 + Pinia + Vite",
            "S3 Presigned 이미지 파이프라인",
            "검색 및 상태 관리 최적화",
            "팀 리딩·Notion 기반 협업 문화",
          ].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1 text-xs md:text-sm text-gray-700 dark:text-gray-200">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* <aside className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 md:p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur">
        <h3 className="text-base md:text-lg font-semibold">Now & Next</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>• 홈 화면 운영: ActiveBannerList 통합, 현재시간 기준 상태/가로 스크롤 UX</li>
          <li>• 이미지 파이프라인: S3 Presigned URL + Optimistic UI</li>
          <li>• 포트폴리오: Next.js + Tailwind, 다국어/다크모드, Drawer 상세(모바일 풀스크린)</li>
          <li>• Voice/실시간 로드맵: VAD → Whisper STT → 번역/교정 → TTS</li>
        </ul>
      </aside> */}
    </div>
  );
}
