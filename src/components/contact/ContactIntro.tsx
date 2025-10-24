"use client";

export default function ContactIntro() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">채용/인터뷰 문의</h1>
      <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        방문해 주셔서 감사합니다. 아래 양식으로{" "}
        <span className="font-medium">담당자 성함, 회사/조직, 포지션(JD)</span>을 남겨 주시면 가능한
        한 빠르게 회신드리겠습니다.
      </p>

      <ul className="mt-4 text-sm text-gray-700 dark:text-gray-300 space-y-1">
        <li>• 선호 직무: 프론트엔드(React, Vue, Next.js)</li>
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href="/resume.pdf"
          className="inline-flex items-center rounded-xl border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          target="_blank"
          rel="noreferrer">
          이력서(PDF)
        </a>
        <a
          href="mailto:hello@watlzparis.com"
          className="inline-flex items-center rounded-xl border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          이메일로 문의
        </a>
      </div>

      {/* <div className="mt-5 rounded-xl border border-gray-200 dark:border-gray-800 p-3 text-xs text-gray-600 dark:text-gray-400">
        <p className="font-medium mb-1">안내</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>포지션명 또는 JD 링크를 함께 남겨주시면 더 빠르게 검토할 수 있어요.</li>
          <li>필요 시 포트폴리오/깃허브 등 레퍼런스를 추가로 공유드립니다.</li>
        </ul>
      </div> */}
    </div>
  );
}
