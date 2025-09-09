"use client";

const items = [
  { label: "Email", href: "mailto:hello@watlzparis.com" },
  { label: "GitHub", href: "https://github.com/watlzparis" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/watlzparis" },
  { label: "X (Twitter)", href: "https://x.com/watlzparis" },
  { label: "Instagram", href: "https://instagram.com/watlzparis" },
];

export default function SocialList() {
  return (
    <div>
      <h3 className="text-base md:text-lg font-semibold">Elsewhere</h3>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200 hover:underline">
              <span>{it.label}</span>
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="size-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform">
                <path d="M11 3h6v6h-2V6.41l-8.3 8.3-1.4-1.42 8.3-8.3H11V3Z" fill="currentColor" />
              </svg>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-5 rounded-xl border border-gray-200 dark:border-gray-800 p-3 text-xs text-gray-600 dark:text-gray-400">
        <p className="font-medium mb-1">Quick tips</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>가능하면 프로젝트 링크/레퍼런스와 함께 문의해 주세요.</li>
          <li>기술 스택, 일정, 예산 범위가 있으면 더 정확히 답변드려요.</li>
        </ul>
      </div>
    </div>
  );
}
