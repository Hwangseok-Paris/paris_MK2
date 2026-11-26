# Paris 포트폴리오

Next.js App Router·TypeScript·React·Tailwind CSS 기반 개인 포트폴리오입니다.

## 실행과 검증

```bash
npm ci
npm run dev
```

로컬 화면: http://localhost:3000/

```bash
npm run lint
npm test -- --runInBand
npm run build
```

프로젝트 데이터는 `src/lib/db.ts`의 `getProjects()`로 조회합니다. `USE_DB=false`이면 로컬 데이터를 사용합니다. DB 사용 조건과 대체 데이터 정책은 [현재 구현](docs/project-context.md)을 참고하세요. 환경변수의 실제 값은 저장소에 기록하지 않습니다.

## 현재 상태 — 2026-11-26

- 홈 기반 커밋: `7091fa3` — 소개 중심 홈 시안 실제 적용 및 모바일 하단 고정 메뉴 구현.
- 홈: 데스크톱 소개/탐색 1.8:1 분할, 우측 About·Projects·Contact 동일 높이 3단, 시안2 sweep 효과.
- 모바일: 650px 미만에서 하단 고정 메뉴와 전체 폭 소개. 모바일·hover 미지원 환경에서는 색상 확산 없음.
- 테마: 다크 기본, 변경 버튼 제거. 홈 스타일은 Tailwind, 별도 CSS에는 키프레임 2개만 유지.
- 11/26 소개 위치·여백·글자 조정을 포함해 현재 홈 화면을 마무리했습니다. 지원 전 통합 점검과 운영 확인은 후속 작업입니다.

## 문서 안내

| 문서 | 용도 |
|---|---|
| [현재 구현](docs/project-context.md) | 화면·데이터·구조의 현재 사실 |
| [작업계획](docs/portfolio-improvement-plan.md) | 남은 작업과 완료 기준, 경력 원자료 |
| [결정 기록](docs/decisions.md) | 확정·제안·대체된 디자인 결정 |
| [작업 이력](docs/task-log.md) | 수행 내용과 당시 검증 결과 |
| [작업 절차](workflows/portfolio-cycle.md) | 역할별 진행과 Notion 기록 규칙 |
| [작업 규칙](AGENTS.md) | 저장소 변경 시 지켜야 할 기준 |

`work/previews/`는 디자인 검토 이력입니다. 실제 화면의 기준은 `src/`와 현재 구현 문서이며, 과거 시안 파일이 최신 디자인을 의미하지 않습니다.

## 운영 반영

운영 DB·원격 push·배포는 로컬 UI 작업과 별도 범위입니다. 데이터 소스와 배포 환경을 확인한 뒤 진행합니다. 현재 운영 반영 여부를 로컬 커밋만으로 판단하지 않습니다.
