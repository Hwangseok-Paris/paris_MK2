"use client";

export default function ContactIntro() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        프로젝트 협업, 프런트엔드 컨설팅, 관리자 페이지/운영 UX 개선 문의 환영합니다. 아래 폼으로
        연락을 남기면 빠르게 회신드릴게요.
      </p>
      <ul className="mt-4 text-sm text-gray-700 dark:text-gray-300 space-y-1">
        <li>• 선호 스택: Next.js, TypeScript, Tailwind, Vue 3, Pinia</li>
        <li>• 관심 분야: 이미지 업로드 파이프라인(S3), Drag/Sort, 검색 UX, 실시간/음성</li>
      </ul>
    </div>
  );
}
