# 타입 인덱스 서비스 적용 검증

일자: 2026-11-10

## 승인과 결과

- 승인 대상: `home-type-index-refined.html`, `projects-type-index.html`. 사용자가 두 시안을 확정하고 실제 사이트 적용을 요청했다.
- 홈: 짧은 소개 → 삼성전자 CIA·오스템·NH 대표 작업 → 전체 목록 연결 → 승인 자기소개. 역할·요약은 기본 노출하며 작업별 기술은 텍스트로 표시한다.
- 목록: 대표 5건 + 나머지 8건, 중복 없는 13개 행. 기존 7개 필터의 판정과 데이터 순서를 유지한다.
- 상세: 기존 ProjectPanel을 갱신했다. 데스크톱 중앙 패널·모바일 하단 패널, 영문 표제 → 역할/소개 → 주요 기여 → 기술 순서. 데이터가 없는 기여 섹션은 생략한다.
- 서비스 구현을 완료했고 승인 범위의 로컬 QA를 통과했다. 운영 반영·DB 검증·배포 완료를 뜻하지 않는다.

## 구현 경계

- 새 라이브러리/폰트/이미지 없음. 기존 프로젝트 데이터, getProjects/DB/API 계약과 package.json·lockfile은 변경하지 않았다.
- 표시용 영문 표제는 `project-presentation.ts`에 분리했다. 알려지지 않은 DB 프로젝트는 원래 제목으로 표시한다. 경력·기간·역할·기여 문구는 유지한다.
- 홈 기술 표기의 Skill-Builder → Skill Builder는 승인 시안의 표시명이며 원본 데이터는 그대로다.
- 시안의 화면 폭/밝기 검토 도구와 연결 대상 안내는 서비스 UI에 넣지 않았다. 실제 링크와 기존 ThemeProvider를 사용한다.
- 헤더/푸터는 홈·Projects 경로에서만 시안의 표현을 사용한다. 기존 외부 링크·저작권을 유지하고 About/Contact의 기존 화면을 보존했다.
- 상세는 하나의 dialog를 body에 포털로 표시한다. 배경 inert·본문 스크롤 잠금·포커스 순환/복원은 열림 수명에 맞춰 처리하며 좁은 화면과 넓은 화면 사이를 바꿔도 패널을 유지한다. 닫기 버튼은 내부 스크롤 중에도 상단에 유지한다.
- 기존 미커밋 변경을 시작 시점 스냅샷과 비교해 보존했다. 이 작업에서 커밋·push·배포는 실행하지 않았다.

## 검증

- `npm run lint`: 경고/오류 없음.
- `npx tsc --noEmit`: 통과.
- `npm test -- --runInBand`: 기존 1 suite, 2 tests 통과.
- `USE_DB=false npm run build`: 최종 코드 프로덕션 빌드 성공. standalone 서버로 최종 브라우저 검증.
- `git diff --check`: 통과.
- 기존 환경의 Playwright/Chromium 사용. 새 테스트 의존성을 설치하지 않았다. 브라우저 `pageerror` 0건.
- 1440·1024·768·390·320px: 홈 대표 순서, 요약 기본 노출, NH 기술 표기, 목록 중복 없음, 주요 상세와 수평 넘침 확인. 320px에서는 13개 모든 상세의 역할·소개·기여·전체 기술을 데이터와 대조했다.
- 필터 결과: 전체 13 / 대표 5 / 리딩·단독 6 / 실시간 상담 7 / 금융·보험 6 / Hybrid·App 2 / AI·Voice 3. 오스템이 AI 서비스로 섞이지 않음을 확인했다.
- 홈 3개 링크로 실제 상세 진입. 13건 각각의 직접 URL 진입, 닫기 후 다른 query 보존, 잘못된 ID의 목록 표시 확인.
- Enter 열기, Tab/Shift+Tab 순환, Escape/버튼/목록으로/배경 닫기, 목록 트리거 포커스 복귀, 브라우저 뒤로/앞으로 가기와 필터 유지 확인.
- 390×700에서 실제 wheel 입력으로 패널만 스크롤하고 문서 위치가 유지되는지 확인했다. 열린 패널을 1440×600으로 변경한 뒤 단일 dialog·내부 스크롤·포커스 순환이 유지됨을 확인했다.
- 라이트/다크, 모션 감소, 데스크톱·모바일 캡처 확인. 스크롤/본문 잠금 복원과 배경 inert 해제 확인.
- About/Contact 390·1440px 넘침 없음. About 320px도 통과. Contact 320px은 아래 기존 이슈로 분리한다.

## 후속 항목과 한계

- Contact 320px에서 clientWidth 320 / scrollWidth 337로 17px 가로 넘침. 변경 전 스냅샷을 별도 서버에서 실행해 동일 수치를 재현했다. 이번 변경의 회귀가 아니며 TASK-260에서 수정 후보로 추적한다. 390px 미재현이라는 이전 기록과 구분한다.
- About·Contact 콘텐츠 정리, 테마 저장/시스템 정책 및 전역 접근성 통합 점검, 운영 DB·검색/공유·배포는 기존 후속 단계다.
- 로컬 대체 데이터 13건을 검증했으며 실제 운영 DB의 내용이나 운영 배포는 검증하지 않았다.
- Chromium 자동화/시각 검증 결과다. 실기기 Safari/Android 브라우저 전체 검증으로 확대하지 않는다.

## 파일

신규 서비스 파일:
- `src/app/folio.css`
- `src/constants/project-presentation.ts`

수정 서비스 파일:
- `src/app/(pages)/projects/loading.tsx`
- `src/app/(pages)/projects/page.tsx`
- `src/app/globals.css`
- `src/app/page.tsx`
- `src/components/Footer.tsx`
- `src/components/Header.tsx`
- `src/components/projects/ProjectCard.tsx`
- `src/components/projects/ProjectPanel.tsx`
- `src/components/projects/ProjectsContainerClient.tsx`
- `src/components/projects/ProjectsContainerSkeleton.tsx`
- `src/components/projects/ProjectsHeader.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/ProjectCards.tsx`
- `src/components/sections/ProjectsPreview.tsx`
- `src/components/sections/ProjectsPreviewSkeleton.tsx`

문서: `docs/decisions.md`, `docs/project-context.md`, `docs/portfolio-improvement-plan.md`, `docs/task-log.md` 갱신 및 본 문서 신규 작성.

## 검증 자료

- 캡처/결과: `/Users/paris/.codex/visualizations/2026/11/10/01a1c478-6b2f-7e71-b459-5fc019889e7d/implementation-qa/` (home/projects/panel 폭별 PNG, `results.json`).
- 임시 실행 스크립트: `/tmp/paris-type-index-qa/`. 임시 경로는 장기 보관을 보장하지 않는다.
- 작업 연결: TASK-257 디자인 승인 완료, TASK-258 홈 적용 완료, TASK-259 목록·상세 적용 완료. TASK-256의 운영 데이터 확인은 이 완료 범위에 포함하지 않는다.
