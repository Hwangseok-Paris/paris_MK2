# Projects·헤더 추가 수정 검증

일자: 2026-11-11

## 적용 범위

- 사용자 요청에 따라 Projects. 제목을 최대108px에서46px, 모바일32px로 줄였다.
- 목록은 제목·회사·기간·프로젝트 소개·기술을 표시한다. 개인 담당 업무는 기존 상세 패널의 역할·설명·기여에서 읽는다. 확인된13건의 소개는 `project-presentation.ts`에 분리했으며 원래 역할·기여는 보존했다.
- Content Intelligence AI 정식 이름을 홈·목록·상세와 접근 가능한 링크 이름에 적용했다. 기존 DB 제목이 CIA여도 표시 계층에서 정식 이름을 사용한다. SAMSUNG ELECTRONICS·OSSTEM IMPLANT를 해당 프로젝트에만 적용했다. 삼성증권 표기는 유지한다.
- Header를 하나로 통합했다. 홈·작업·소개·연락이 모든 페이지와 모바일에서 같은 순서와 경로로 표시된다. 홈 앵커 링크 분기, LegacyHeader와 페이지별 헤더 CSS를 제거했다.
- 기존 Framer Motion으로 상세 등장·닫힘 전환을 적용했다. 배경은0.2초 투명도, 패널은0.24초 이동·미세 확대 전환이다. 모션 감소에서는 즉시 전환한다. exit가 끝날 때까지 배경 inert·스크롤 잠금·포커스 처리가 유지된다.
- 모바일 Hybrid·App 필터가 단어 중간에서 끊기지 않도록 줄바꿈 위치를 정했다.

## 검증

- TypeScript·lint·기존 Jest 2 suites/5 tests·최종 프로덕션 빌드·diff check 통과.
- standalone 서버에서 1440/1024/768/390/320px × 홈/Projects/About/Contact 총20조합 확인. 가로 넘침 없음, 네 메뉴와 경로 동일, 현재 위치 표시 정확.
- 목록13건 소개, 역할 미노출, 요청 명칭과 제목 크기 확인. 필터 결과13/5/6/7/6/2/3 유지.
- Enter로 상세 열기, 포커스 순환·복원, Escape·닫기 버튼, 추가 query 보존, 브라우저 뒤로/앞으로, 열린 패널 크기 전환 후 단일 dialog 유지 확인.
- 모바일 wheel 입력에서 상세 내부만 스크롤하고 페이지 위치는 유지됨을 확인했다. 닫힘 전환 중 배경 잠금을 유지하고 완료 후 해제한다.
- 다크 테마·모션 감소·메뉴 링크 실제 이동 확인. 브라우저 JS 오류0건. 데스크톱·모바일 Projects 화면을 시각 검토했다.
- 사용자 실행 중인3000번 dev 서버는 유지했다. 별도 standalone 검증 서버만 실행·정리했다.

## 파일

- 신규: `src/app/header.css`, 본 문서.
- 수정: `src/components/Header.tsx`, `src/app/globals.css`, `src/app/folio.css`, `src/app/profile.css`, `src/constants/project-presentation.ts`, `src/constants/projects.ts`, `src/components/projects/ProjectCard.tsx`, `src/components/projects/ProjectPanel.tsx`, `src/components/projects/ProjectsContainerClient.tsx`, `src/components/sections/ProjectCards.tsx`, `src/components/sections/ProjectsPreview.tsx`.
- 문서: 결정·현재 구현·개선 계획·작업 기록 갱신.
- 캡처/결과: 대화 폴더 `projects-refinement-qa/`. 실행 스크립트: `/tmp/paris-projects-refine/`.

## 경계와 후속

- 기존 미커밋 변경을 보존했다. 새 라이브러리·운영 DB 쓰기·커밋·배포 없음. 프로젝트 ID와 데이터 로딩 계약은 유지했다.
- 확인된13건 밖의 새 DB 프로젝트는 원래 summary로 대체된다. 신규 등록 시 프로젝트 소개와 기여 분리를 함께 검토한다.
- 기존 후속: 테마 저장/시스템 정책·전역 접근성, 운영 DB·메타데이터·배포 검증, CIA의 GCP 프로젝트 기술 데이터 대조. 실기기 전체 검증을 완료했다고 주장하지 않는다.

## 추가 검증 — 필터 행 및 시작일 정렬 (2026-11-11)

후속 변경: 기본값은 최신순으로 대체되었고 상단 전체/결과 개수는 제거되었다. 아래 기록은 당시 검증 결과다.

- 서비스 수정: `ProjectsHeader.tsx`, `ProjectsContainerClient.tsx`, `src/app/folio.css`. 신규: `src/lib/project-sort.ts`, `src/lib/project-sort.test.ts`.
- 기본 대표순, 시작일 최신순·오래된순 제공. 날짜순은 대표/기록 구분 없이 필터 결과 전체에 적용한다.
- TypeScript·lint·Jest 3 suites/9 tests·`USE_DB=false npm run build` 통과. 단위 테스트는 월/일 혼합, 시작일과 종료일 구분, 입력 보존, 동일 날짜 안정성, 잘못된 날짜·미정의 후순위를 검증했다.
- localhost:3000 Chromium에서13건 양방향 순서, AI 필터 교집합, 대표순 복원, 상세 Escape/뒤로 가기 후 필터·정렬 유지 확인. JS 오류0건.
- 1440/768/390/320px에서 필터·전체 개수 중심선 오차0px, 페이지 가로 넘침 없음. 모바일 숨겨진 필터 선택 및 복귀 확인. 1440/320px 캡처 시각 검토 완료.
- 실행 스크립트 `/tmp/project-sort-qa.cjs`, 캡처 `/tmp/project-sort-1440.png`, `/tmp/project-sort-320.png`. 새 라이브러리·DB 변경·배포 없음.

## 추가 검증 — 최신순·다크 기본값과 중복 정보 제거 (2026-11-11)

- TypeScript·lint·기존9 tests 통과. 기본 최신순, 대표 필터5건, 오래된순·대표순 전환 확인.
- 1440/768/390/320px에서 필터/정렬 동일 행, 전체/결과 개수 DOM 제거, controls 테두리0px, 문서 가로 넘침 없음. 그룹 개수와 스크린리더 결과 안내는 유지한다.
- OS 라이트 환경에서4페이지 초기 다크, JS 비활성 상태의 서버 HTML/색상도 다크 확인. 수동 라이트 전환과 클라이언트 라우팅 유지, 새로고침 다크 복귀 확인.
- JS 오류0건. 스크립트 `/tmp/projects-defaults-qa.cjs`, 캡처 `/tmp/projects-defaults-1440.png`, `/tmp/projects-defaults-320.png` 시각 검토 완료.
