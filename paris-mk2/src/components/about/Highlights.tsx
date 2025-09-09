"use client";

const items = [
  {
    title: "운영 효율화",
    desc: "배너 스케줄·드래그 정렬·일괄 처리로 운영 시간 단축",
    stat: "Ops 시간 ↓ ~30%",
  },
  {
    title: "이미지 파이프라인",
    desc: "S3 Presigned URL + Optimistic UI로 등록/수정 경험 개선",
    stat: "등록 실패율 ↓",
  },
  {
    title: "검색 품질",
    desc: "이름/닉네임/제목/내용 교차 키워드 검색 최적화",
    stat: "탐색 시간 ↓",
  },
  {
    title: "UI 일관성",
    desc: "다크모드/반응형/스크롤 UX 표준화",
    stat: "이탈 ↓, 가독성 ↑",
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
