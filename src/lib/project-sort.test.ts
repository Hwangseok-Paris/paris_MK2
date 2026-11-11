import { sortProjectsByDate } from "./project-sort";

const projects = [
  { id: "long", period: "2024.07~2026.08" },
  { id: "day", period: "2026.06.11~08.31" },
  { id: "month", period: "2026.08~10" },
  { id: "earlier-day", period: "2026.06.10~06.11 (초기 개발)" },
];

it("종료일이 아닌 시작일로 월/일 혼합 기간을 최신순 정렬한다", () => {
  expect(sortProjectsByDate(projects, "newest").map(p => p.id)).toEqual(["month", "day", "earlier-day", "long"]);
  expect(projects.map(p => p.id)).toEqual(["long", "day", "month", "earlier-day"]);
});

it("오래된순에서는 같은 날짜 비교를 반대로 적용한다", () => {
  expect(sortProjectsByDate(projects, "oldest").map(p => p.id)).toEqual(["long", "earlier-day", "day", "month"]);
});

it.each(["newest", "oldest"] as const)("%s에서도 미확인·유효하지 않은 날짜는 마지막에 두고 같은 날짜 순서를 유지한다", order => {
  const input = [
    { id: "unknown", period: "미정" },
    { id: "first", period: "2026.08~10" },
    { id: "invalid", period: "2026.02.30~03" },
    { id: "second", period: "2026.08.01~10" },
  ];
  expect(sortProjectsByDate(input, order).map(p => p.id)).toEqual(["first", "second", "unknown", "invalid"]);
});
