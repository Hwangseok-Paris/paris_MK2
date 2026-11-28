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

## 코드를 읽는 순서

| 영역 | 진입점과 주요 역할 |
|---|---|
| 공통 화면 | `src/app/layout.tsx` → `Header`·`Footer`, `components/layout/`의 공통 제목·Tailwind 스타일 |
| 홈 | `src/app/page.tsx` → `home/HomeNavigation`(탐색·모션), `home/Hero`(소개), `home/ProjectsPreview`(대표 프로젝트) |
| About | `src/app/(pages)/about/page.tsx` → `about/AboutIntro`·`AboutCareer`·`AboutTechStack` |
| Projects | `src/app/(pages)/projects/page.tsx` → `ProjectsContainer`(서버 조회) → `ProjectsContainerClient`(필터·정렬·URL 선택) → `ProjectCard`·`ProjectPanel`(목록 항목·상세 다이얼로그) |
| Contact | `src/app/(pages)/contact/page.tsx` → `contact/ContactBox`(연락처·이메일 복사) |
| 프로젝트 데이터 | `constants/projects.ts`(자료·타입), `constants/project-presentation.ts`(표시 규칙), `lib/db.ts`(조회), `lib/project-filter.ts`(분류), `lib/project-sort.ts`(정렬) |

표의 컴포넌트 경로는 `src/components/` 기준입니다. 홈과 Projects의 조회는 서버에서 처리하며, 상호작용이 필요한 컴포넌트만 클라이언트 경계를 갖습니다. UI 스타일은 TSX의 Tailwind 유틸리티에 두고 `src/app/globals.css`에는 폰트·테마·반응형 variant·키프레임을 둡니다.

홈 컴포넌트는 `home/`에 모으고, 화면에서 쓰지 않는 구형·백업 컴포넌트 14개는 정리했습니다. 필터 정책은 UI 상태 관리와 분리되어 있으며, 관련 회귀 테스트는 `lib/project-filter.test.ts`에 있습니다. 구조 정리 범위와 남은 후보는 [작업계획](docs/portfolio-improvement-plan.md)을 참고하세요.

## 현재 상태 — 2026-11-26

- 홈 기반 커밋: `7091fa3` — 소개 중심 홈 시안 실제 적용 및 모바일 하단 고정 메뉴 구현.
- 홈: 데스크톱 소개/탐색 1.8:1 분할, 우측 About·Projects·Contact 동일 높이 3단, 시안2 sweep 효과.
- 모바일: 650px 미만에서 하단 고정 메뉴와 전체 폭 소개. 모바일·hover 미지원 환경에서는 색상 확산 없음.
- 테마: 다크 기본, 변경 버튼 제거. 전체 UI 스타일은 Tailwind. `globals.css`에는 공통 테마·반응형 variant·홈 키프레임만 유지하며 컴포넌트별 CSS는 사용하지 않습니다.
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
