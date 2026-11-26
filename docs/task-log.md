# Task Log

Use this file to record completed work and future follow-up candidates. Add the newest entry at the top.

## Template

```md
## YYYY-MM-DD - Task Title

Role Flow:
- PM:
- Planner:
- Developer:
- QA:

Summary:
- What changed?

Files:
- Created:
- Modified:
- Not touched:

Verification:
- What was checked?

Open Questions:
- What remains unclear?

Next Candidates:
- What should be considered next?
```

## Log

## 2026-11-26 - PC 모서리 메뉴 콘텐츠 정렬

- PM/Planner: 메뉴는 화면 기준 right 값, 본문은 중앙 viewport와 페이지별 gutter를 사용해 어긋나는 것을 확인했다. 사용자 지시대로 레이아웃 기준을 공유해 수정하며 모바일 위치는 보존한다.
- Developer: RootLayout에 최대 너비 변수를 두고 portfolioViewport를 공통화했다. Header를 같은 너비의 고정 컨테이너에 배치하고 Projects/About/Contact의 본문 gutter를 사용했다. 메뉴가 없는 영역은 pointer-events-none으로 본문 조작을 유지한다. 펼친 패널도 버튼과 같은 오른쪽 끝을 따른다.
- 수정: src/app/layout.tsx, src/components/layout/portfolioStyles.ts, Header·Footer, About/Contact/Projects 페이지·Projects loading, 결정·현재 문맥·작업 로그. 서비스 코드 변경 있음. 사용자 수정·Tailwind 원칙 유지, 의존성·데이터 변경 없음.
- QA: lint와 Header 테스트4개 통과. 1920·1440·1116·1115·1100·768·761·760·390·320px에서 3개 페이지 총30개 조합 확인. PC 콘텐츠/버튼/패널 오른쪽 경계 일치, 모바일 기존 우측 여백 유지, 가로 넘침 없음, 전체 화면 scrim·바깥 클릭 닫기·상세 열기/닫기의 헤더 inert 복귀 확인. PC 캡처 확인. TypeScript 포함 프로덕션 빌드와 diff 공백 검사 통과.
- 후속: 기존 공유·운영 확인은 유지. 커밋·push·배포·Notion 갱신 없음.

## 2026-11-26 - 전체 UI Tailwind 전환 완료

- PM/Planner: 사용자가 파일 단위 대응을 지적하고 전체 전환을 명시적으로 지시했다. 저장소 전체 TSX/CSS와 실제 Projects 구현을 확인하고 현재 디자인·기능·사용자 수정 보존을 완료 기준으로 삼았다.
- Developer: Projects 목록·상세·필터·정렬·로딩, About·Contact, 공통 메뉴·푸터·셸과 잔존 구형 ProjectCards의 스타일을 Tailwind로 이전했다. 이미 Tailwind인 홈 등은 유지했다. 공통 테마/반응형 variant와 두 홈 keyframe을 globals.css에 모으고 공통 셸 유틸리티를 portfolioStyles.ts로 공유했다.
- 삭제: src/app/folio.css, profile.css, header.css, personal-home.css. 생성: src/components/layout/portfolioStyles.ts, docs/tailwind-migration-qa.md.
- 수정: src/app/globals.css·layout.tsx와 About/Contact/Projects 페이지·loading, Header·Footer·PageHeading, AboutIntro·Stacks·ContactBox, ProjectCard·ProjectPanel·ProjectsContainerClient·ProjectsContainerSkeleton, sections/ProjectCards. AGENTS·README·현재 문맥·결정·계획·작업 로그도 정리했다. 서비스 코드 변경 있음. 기존 사용자 수정과 이전 미커밋 변경을 보존했다.
- QA: lint, 5개 스위트/16개 테스트, 최종 프로덕션 빌드, diff 공백 검사 통과. 6개 화면 폭의 4개 페이지와 Projects 메뉴/상세를 포함한36개 상태를 변경 전과 비교했다. 필터·정렬·키보드·query·history·실제 페이지 이동·연락처 복사·테마·모션 감소 검증 통과. 상세는 [tailwind-migration-qa.md](tailwind-migration-qa.md).
- 후속: 현재 요청의 스타일 전환은 완료. 공유 메타데이터·운영 데이터·배포 확인은 기존 후속으로 유지한다. 새 의존성·Notion·커밋·push·배포 변경 없음.

## 2026-11-26 - PageHeading을 Tailwind로 전환

- 사용자 지적에 따라 PageHeading의 별도 CSS를 Tailwind 클래스로 이전했다. 사용하지 않는 상단 이름 문구의 주석과 스타일을 제거하고 현재 표시 상태를 유지했다.
- 수정: `src/components/layout/PageHeading.tsx`, `src/app/header.css`, `src/app/profile.css`, `src/app/(pages)/about/page.tsx` 및 결정·현재 문맥·작업 로그. 서비스 코드 변경 있음. About의 이전 padding-top 선언과 제목 인접 선택자 대신 본문 `pt-0` 사용.
- 검증: lint·diff 공백 검사 통과. 브라우저에서 About/Projects 각각 1440·761·760·390·320px의 변경 전후 제목/연도/컨테이너/About 본문 위치·크기·글꼴·행간·여백·색상 등 10개 조합 수치가 동일함을 확인했다. 라이브러리 추가 없음.
- 후속: 다른 기존 영역의 전체 Tailwind 전환은 이번 수정에 포함하지 않았다. 기존 공유·운영 점검은 유지한다.

## 2026-11-26 - 펼친 메뉴 현재 문구 제거

- 사용자 요청으로 `src/components/Header.tsx`의 ‘현재’ 표시와 `src/app/header.css`의 전용 스타일을 제거했다. 서비스 코드 변경 있음. 현재 페이지 색상과 `aria-current`는 유지한다.
- 검증: Header 테스트4개와 `git diff --check` 통과. 추가 디자인 변경은 사용자 피드백에 따라 진행하며 기존 운영 점검은 후속으로 유지한다.

## 2026-11-26 - 모서리 메뉴 서비스 적용 및 크기 보완

- PM/Planner: 사용자의 “코드 적용해줘” 승인을 받아 비홈 공통 메뉴와 선택한 Projects 본문 배치에 범위를 맞췄다. 이후 메뉴 숫자 제거·펼침 크기 축소 요청을 같은 구현에 반영했다.
- Developer: About·Projects·Contact 가로 헤더를 단일 모서리 버튼과 실제 네 경로 링크로 교체했다. About/Projects 제목을 본문으로 이동하고 Projects에 로드된 기간 기준 연도 범위와 기간 우선 목록을 적용했다. 홈·프로젝트 데이터·기존 상세 패널은 보존했다.
- 펼친 메뉴 숫자 제거, PC 패널300×234px/모바일 최대272×210px으로 축소. 목적지 이름은 하단 정렬하며 현재 페이지·hover·키보드 표시를 유지했다. 닫힌 링크 inert, Escape/바깥 클릭/포커스 이탈 닫기, ArrowDown 첫 링크 진입, 경로 전환 초기화, 모션 감소를 지원한다.
- 생성: `src/components/layout/PageHeading.tsx`, `src/components/Header.test.tsx`.
- 수정: `src/components/Header.tsx`, `src/app/header.css`, `src/app/folio.css`, `src/app/globals.css`, About 페이지, Projects loading·ProjectsContainer·ProjectsContainerClient·ProjectCard와 현재 문맥·결정·계획·작업 로그. 서비스 코드 변경 있음. 패키지·락파일·운영 데이터·Notion 변경 없음.
- QA(최초 적용): lint, 5개 스위트/16개 테스트, 프로덕션 빌드 통과. 1440×900·768×1024·390×844·320×568에서 About/Projects/Contact의 단일 h1·가로 넘침 없음·메뉴 영역·Escape 확인. 실제 네 경로 이동·홈 메뉴 유지, ArrowDown/Tab 닫기, 대표 필터·오래된 순 정렬 상태 보존, 상세 포커스/배경 inert/닫기, 직접 딥링크, 상세 열린 상태에서 모바일 전환, 모션 감소, JavaScript 오류 없음 확인.
- QA(숫자 제거·크기 축소 후): lint와 전체16개 테스트 재통과. 1440×900·390×844·320×568·667×375에서 숫자 없음·4개 링크·실제 축소 치수·글자 잘림/가로 넘침 없음·Escape 닫기 확인. PC·모바일 캡처 시각 확인, JavaScript 오류 없음. 후속 수정은 마크업 한 요소 제거와 CSS 크기 조정이므로 프로덕션 빌드는 최초 적용 통과 기록을 유지했다.
- 후속: 사용자 화면 피드백, 기존 지원 전 통합 점검의 나머지 항목과 공유·운영 데이터·배포 확인. 커밋·push·배포는 수행하지 않았다.

## 2026-11-26 - 단일 모서리 메뉴 버튼 시안 정리

- 사용자 요청으로 ‘엇갈린 네 조각’을 제외하고 이전 ‘모서리에서 펼치기’만 남긴 PC·모바일 시안을 `projects-corner-button.html`로 제작했다. 기존 대화 전용 시안 폴더에 저장했다.
- 기존 Projects 본문을 유지하고 우측 상단 버튼 하나로 네 메뉴를 열고 닫는다. 다른 메뉴 형태의 선택기는 제거했다. 페이지 선택은 시안 피드백만 제공하며 실제 이동하지 않는다.
- PC·모바일 열기/닫기, Escape, 320px 메뉴 폭, 13개 프로젝트 유지 확인. 서비스 코드·의존성·Notion 변경 없음. 실제 적용은 별도 승인 범위다.

## 2026-11-26 - ‘엇갈린 네 조각’ 심벌형 메뉴 시안

- ‘접혀 있는 홈’ 거절 후 사용자가 정지 상태의 조형이 좋은 작은 메뉴를 선호한다고 확인했다. 네 직사각형이 맞물리는 메뉴를 PC·모바일로 제작했다.
- 기존 하단 내비게이션 시안의 목록·필터·정렬·상세를 유지하고 메뉴를 교체했다. 메뉴와 겹치지 않도록 PC 연도 위치, 모바일 상단 이름 줄바꿈·연도 배치를 조정했다.
- 현재 작업 조각만 파란색이며 각 조각의 아이콘으로 홈·소개·작업·연락을 표시한다. Hover/focus 이름 표시, 클릭 시 선택 피드백을 제공한다. 실제 경로 이동이나 큰 화면 전환은 없다.
- 파일: 대화 전용 시안 폴더의 `projects-interlocking-menu.html`. 기존 시안은 보존했다.
- 검증: PC·모바일 4개 링크 선택과 키보드 순서, 선택 전후 본문 동일성·13건 유지, 320px 제목·이름과 메뉴의 비중첩, 본문 넘침 없음, 모든 조각 최소 44px 클릭 영역, 아이콘 대비와 화면 캡처 확인. JavaScript 오류 없음.
- 서비스 코드·의존성·Notion 변경 없음. 정지 상태의 메뉴 형태에 대한 사용자 피드백을 받은 뒤 후속 범위를 정한다.

## 2026-11-26 - ‘접혀 있는 홈’ PC·모바일 메뉴 시안

- 사용자 요청으로 하단 내비게이션 시안의 본문을 유지하고 메뉴·전환만 바꾼 `projects-folded-home.html`을 기존 대화 전용 시안 폴더에 추가했다. 이전 비교본은 보존했다.
- 닫힌 세 막대가 PC에서는 홈과 동일한 1.8:1 분할의 우측 3단 메뉴로, 모바일에서는 전체 화면 3단 메뉴로 펼쳐진다. 현재 Projects 막대와 메뉴의 현재 위치 표시, Home·닫기 경로를 제공한다.
- PC는 면 채움 380ms와 260ms 뒤 시작하는 좌측 600ms 색상 확산을 연결했다. 선택 시 해당 면이 전체 화면을 덮은 뒤 걷히며 같은 Projects 본문으로 돌아온다. 실제 경로 이동이나 다른 페이지 디자인은 포함하지 않는다.
- 검증: 원본 하단 내비게이션 시안과 본문 텍스트 동일성, PC·모바일 각 4개 목적지의 전환·복귀, 키보드 포커스 순환과 Escape, 전환 중 취소, 320px 메뉴 글자·본문 넘침, 모션 감소 동작, JavaScript 오류 없음 확인. 필터·정렬·스크롤 상태 보존도 확인했다.
- 서비스 코드·의존성·Notion 변경 없음. 구현 승인으로 확대하지 않으며 다음 단계는 사용자 시안 피드백과 필요 시 동작·속도 보완이다.

## 2026-11-26 - 하단 내비게이션 시안 기반 메뉴 동작 3종 비교

- 사용자 요청으로 ‘하단 내비게이션’ 시안의 Projects 본문을 그대로 사용하고 아래 메뉴만 제거한 PC·모바일 비교본 3종을 제작했다. 서비스 구현 승인은 포함하지 않는다.
- 모서리에서 펼치기(네 면 확장), 네 장 펼치기(겹친 판의 펼침·선택), 글자 펼치기(페이지 이름의 상하 전환)를 우측 상단에 구성했다. 클릭/탭 열기·닫기, 항목 선택 반응, 바깥 클릭·Escape 닫기와 키보드 조작을 제공한다.
- 항목 선택은 시안 안의 반응만 보여주며 실제 경로 이동 없이 Projects 본문을 유지한다. 현재 페이지 표시는 Projects로 유지하고 선택 결과는 시안 밖 보조 라벨로 구분한다.
- 파일: 기존 대화 전용 폴더의 `projects-menu-comparison.html`; 미리보기·검증 캡처도 같은 폴더에 저장했다. 기존 3종 시안과 마름모 시안은 보존했다.
- 검증: PC·모바일 6개 화면의 메뉴 열기/선택/닫기, Enter·ArrowDown·Escape, 4개 항목 노출, 13건 목록 보존 및 본문 텍스트 동일성 확인. 모바일 320px 메뉴·본문 넘침 없음, 링크 44px 이상, 모션 감소 시 전환 제거, JavaScript 오류 없음. PC 미리보기에서 메뉴 포커스 시 화면이 옆으로 밀리지 않도록 축소 방식을 보완했다.
- 서비스 코드·의존성·Notion 변경 없음. 다음 단계는 사용자의 메뉴 방향 선택과 동작·크기 보완이며 실제 서비스 적용은 별도 승인 범위다.

## 2026-11-26 - 하단 내비게이션 시안의 마름모 메뉴 대안

- 사용자 제안: 우측 상단 마름모를 네 영역으로 나누고 각 페이지의 아이콘을 배치한다. 후속 설명으로 오픈 인덱스가 아닌 ‘하단 내비게이션’ 시안의 아래 메뉴를 대체하려는 목적임을 확인했다.
- 해당 시안의 기간 중심 목록을 유지하고 하단 메뉴를 제거한 PC·모바일 비교본을 `projects-diamond-menu.html`로 제작했다. 위치는 위 시안과 동일한 대화 전용 폴더다.
- 홈·소개·작업·연락 아이콘, 현재 작업 영역 강조, PC hover/focus 이름 표시, 모바일 이름 병기를 제안했다. 모바일 각 링크는 회전 전 44×44px이다. 페이지 이동 자체는 시안에서 실행하지 않는다.
- 검증: PC·390px·320px 화면과 아이콘 렌더링 확인. 320px 제목과 메뉴 간격을 보완했다. 서비스 적용·최종 디자인 승인은 미정이며 서비스 코드·Notion 변경 없음.

## 2026-11-26 - Projects 헤더 없는 PC·모바일 시안 3종

- PM/Planner: 사용자가 다른 페이지의 헤더 제거를 검토하며 Projects 기준 PC·모바일 시안을 각각 3개 요청했다. 시안 제작 범위이며 서비스 적용은 승인되지 않았다.
- 제작: 오픈 인덱스(본문 제목과 작은 메뉴), 사이드 목차(좌측 탐색·우측 목록), 하단 내비게이션(기간 중심 목록·하단 메뉴)을 각각 PC 1280×800/모바일 390×780으로 구성했다. 현재 홈의 다크 색상과 Chakra Petch/Pretendard를 이어간다.
- 실제 로컬 공개 13건의 제목·회사·기간·소개·기술을 사용했다. 기존 7개 필터와 정렬을 재현하고 상세는 비교용으로만 구현했다. 운영 데이터 조회, 실제 경로 이동·딥링크 검증, 기존 ProjectPanel 변경은 하지 않았다.
- 시안 위치: `/Users/paris/.codex/visualizations/2026/11/26/01a21688-eafe-7d93-8962-9ae93ae8fe34/projects-headerless.html`. 동일 폴더의 데이터·미리보기·화면 캡처는 검토 보조 파일이다.
- 검증: 브라우저에서 PC·모바일 화면 검토, 6개 화면의 13건 표시·대표 5건/AI 3건 필터·정렬·상세 열기/Escape 닫기 확인. 모바일 320px 본문 가로 넘침 없음, JavaScript 오류 없음. 서비스 코드 변경 없음.
- 후속: 사용자 선호 시안과 보완점 확인. 선택 후 실제 콘텐츠의 반응형 구성을 확정하고 별도 승인 범위로 적용한다. 기존 지원 전 통합 점검·운영 확인은 계속 남아 있다. Notion 상태는 변경하지 않았다.

## 2026-11-26 - 홈 화면 마무리 및 커밋 준비

- 사용자 요청에 따라 현재 홈 디자인을 마무리하고 관련 변경을 커밋한다. 직접 수정한 좌우 여백(mx-15/24px 패딩), 대문자 메뉴, 이메일 표시 및 Featured·전체 작업13px 설정을 보존했다.
- 기존 HomeNavigation 테스트의 링크 이름을 현재 ABOUT·PROJECTS·CONTACT 표기에 맞췄다. 이전 이름을 찾던3개 실패가 해소됐으며 상호작용 검증 내용은 유지했다.
- README·현재 구현·결정·계획 문서를 홈 마무리 상태에 맞췄다. 앞선 미커밋 문서 정리도 함께 포함한다. 서비스 코드 변경 있음.
- 검증: 전체 lint, 테스트4개 스위트/12개, TypeScript 검사를 포함한 프로덕션 빌드 통과. 최종 코드의1440×900·1280×720·768×1024·650×700·1440×500·390×844·320×568 화면에서 가로 넘침 없음. 모바일390px 캡처에서 최종 여백·대문자 메뉴 확인. 짧은 화면에서는 자연스러운 세로 스크롤을 유지한다.
- 기존 검증 이후 사용자가 좌우 여백을 조정했으므로 모바일 본문은 이전보다 좁다. 현재 최종값을 보존했으며 추가 스타일 수정은 수행하지 않았다.
- 후속: 지원 전 통합 점검과 공유·데이터·운영 확인. 추가 홈 디자인·문구 변경은 별도 요청 시 진행한다. Notion·원격 push·배포는 수행하지 않는다.

## 2026-11-26 - 홈 소개 영역을 About 윗선에 정렬

- PM/Planner: 현재 세로 중앙 배치를 확인하고 이름부터 시작하는 소개 영역을 우측 About 글자 윗선에 맞추는 범위를 제안했다. 사용자 “응 그 방향으로 적용해줘” 승인 후 구현했다.
- Developer: HomeNavigation의 중앙 정렬을 상단 정렬로 변경하고 화면 높이/메뉴 행 높이 기준 상단 여백을 적용했다. 최소48px을 확보하고 모바일 기존44px 여백은 유지했다.
- 수정: src/components/home/HomeNavigation.tsx, docs/decisions.md, docs/project-context.md, docs/task-log.md. 기존 미커밋 문서 변경을 보존했다. 서비스 코드 변경 있음. 의존성·Notion·배포 변경 없음.
- QA: 적용 전 브라우저 임시 스타일로 실제 콘텐츠의 PC/모바일 시안을 검토했다. 적용 후1440×900·1280×720·768×1024·650×700에서 이름/About 행 상단 좌표가 일치했다. 1440×500은 최소 여백48px 및 자연스러운 세로 스크롤을 확인했다. 390×844·320×568에서 소개 상단44px을 유지하며 모든 검사 폭에서 가로 넘침이 없었다. 데스크톱·650px 경계 화면 캡처 검토, 대상 ESLint 및 기존 HomeNavigation 테스트3개 통과.
- 후속: 실제 화면에서 위치 피드백. 기존 소개 문구 최종 확정·지원 전 통합 점검·운영 점검은 별도 후속으로 유지한다.

## 2026-11-26 - 현재 구현 기준 문서 정리

- Git에서 사용자 커밋7091fa3과 작업 시작 시 clean 상태를 확인했다.
- README를 실행·검증·문서 안내 중심으로 갱신했다. project-context의 테마 버튼 설명을 바로잡고 decisions에 현재 유효한 결정을 요약했다.
- 이전 상단 메뉴·radial 기본·초기 홈 결정을 대체 이력으로 표시했다. 작업계획 앞에 소개글 확정·지원 전 통합 점검·운영 확인을 정리했다.
- 문서만 변경. 서비스 코드·Notion·운영 DB·push·배포 변경 없음.
- 검증: 현재 소스와 홈 비율·메뉴 위치·전환 시간·테마 버튼·viewport 설정 대조, Markdown 상대 링크 및 diff check. 테스트·빌드는 이번 문서 작업에서 재실행하지 않았다.

### 이력 읽는 법

아래 항목은 각 작업 당시 상태와 검증 결과다. 예전 시안의 값이나 중간 배치는 현재 요구사항이 아니며, 최신 구현은 project-context와 decisions의 현재 요약을 따른다.

## 2026-11-25 - 모바일 하단 고정 메뉴와 테마 버튼 제거

- 홈 모바일 메뉴를 하단 fixed3열로 이동하고 얇은 구분선·safe-area 여백·본문 하단65px+safe-area 여백을 적용했다. viewport-fit=cover를 설정했다.
- 홈 및 공통 헤더의 테마 변경 버튼을 제거했다. 기존 SSR/ThemeProvider 기본 dark는 유지한다.
- 변경: HomeNavigation.tsx, Header.tsx, layout.tsx, HomeNavigation.test.tsx. 브라우저에서 fixed 위치·하단 여백·dark 클래스·토글 없음 확인. 테스트12개/대상 lint 통과.

## 2026-11-25 - 모바일 색상 확산 제거

- HomeNavigation에서650px 미만 또는 hover 미지원 환경에서는 색상 전환을 시작하지 않도록 수정했다. 모바일 전환 시 기존 타이머·색상 레이어도 정리한다.
- 링크 이동과 키보드 포커스는 유지한다. 데스크톱 hover 효과는 기존대로 유지한다.
- 검증: 모바일409px에서 Projects 포커스 시 활성 색상/레이어0개 확인. 모바일 포커스 회귀 테스트 추가.

## 2026-11-25 - 모바일 홈 상단 가로 메뉴

- 사용자 요청으로650px 미만에서 About·Projects·Contact를 상단 동일 폭3열로 배치하고 소개 영역을 전체 폭으로 변경했다. 모바일 메뉴 화살표는 숨기고 본문 좌우 여백24px을 적용했다.
- HomeNavigation.tsx 수정. 현재 데스크톱1.8:1 비율과 우측 세로3단은 유지했다. DOM도 메뉴 우선으로 정렬했다.
- 검증: 대상 ESLint 및 diff check 통과. 브라우저에서 모바일 메뉴 동일 y좌표/동일 폭/넘침 없음, 데스크톱 우측 동일 높이3단 확인.

## 2026-11-25 - 홈 스타일 Tailwind 전환

- 사용자 요청으로 HomeNavigation, Hero, ProjectsPreview, ProjectsPreviewSkeleton의 배치·서체·색상·반응형·상태 스타일을 Tailwind 유틸리티로 이동했다.
- personal-home.css는 두 개의 clip-path 키프레임만 유지하고 사용하지 않는 이전 홈 스타일을 제거했다. 테마 색상은 dark 변형으로 명시했다.
- 시안2 sweep, 260ms 시작 지연, 600ms 전환, 기존 레이어 유지 로직은 동일하다. 서비스 코드 변경 있음.
- 검증: 테스트11개 및 lint 통과. 로컬 모바일·데스크톱에서 가로 넘침 없음, 60:40 및 동일 높이3단, 다크 색상과 sweep 적용 확인.

## 2026-11-25 - 시안2 적용 및 전환 간격 단축

- page.tsx의 홈 효과를 sweep으로 변경. HomeNavigation.tsx의 좌측 시작 지연380→260ms, personal-home.css의 sweep 지속시간720→600ms로 조정했다.
- 기존 전환 테스트의 대기 기준을 갱신했다. 4개 스위트/11개 테스트·대상 ESLint·diff check 통과. 로컬 브라우저에서 sweep 및600ms 적용 확인.
- 서비스 코드 변경 있음. 배포 없음. 후속은 실제 체감 속도 피드백이다.

## 2026-11-25 - 전체 높이 홈 분할 및 순차 색상 전환 적용

- 승인된 시안1을 기본으로 홈 좌측 소개/우측 About·Projects·Contact 3등분(60:40)을 적용했다. 시안2 sweep은 컴포넌트 옵션으로 보존했다.
- 기본 배경은 중립색이며 선택한 우측 블록만 380ms 동안 채운 뒤 좌측 전체에 720ms 색상 확산을 시작한다. 홈 전용 헤더·푸터는 제거하고 테마 전환은 좌측에 유지한다.
- 새 색상이 덮기 전 기존 색상 레이어를 제거하지 않도록 수정했다. 빠른 항목 이동 시 대기 중인 이전 색상 전환은 취소한다.
- 주요 파일: HomeNavigation.tsx, HomeNavigation.test.tsx, personal-home.css, page.tsx, Hero.tsx, Header.tsx, Footer.tsx.
- 검증: 4개 테스트 스위트/11개 테스트 통과, lint 및 프로덕션 빌드 통과. 로컬 모바일361px/데스크톱1200px에서 우측 동일 높이·가로 넘침 없음·Projects 이동 확인.
- 소개 문구 후속 확정 및 운영 배포는 별도 작업이다.


## 2026-11-25 - 소개 중심 홈 시안 실제 적용

- 사용자 “적용해줘” 승인으로 11/17 홈 시안과 11/25 수정사항을 실제 홈에 반영했다.
- Hwangseok Kim·Frontend Developer, Chakra Petch/Pretendard, 소개 한 문단, 본문 PC16px/모바일15px, About·Contact·Featured 및 대표 작업3줄 적용. 소개글 내용은 기존 승인 문구 유지, 추가 수정은 사용자 고민 중이다.
- 기존 getProjects 데이터 소스와 대표3건 순서·상세 딥링크 유지. 홈 전용 헤더·푸터 배치를 적용하고 테마 전환은 유지했다. 다른 페이지 구성·운영 DB·배포 변경 없음.
- 수정: page.tsx, layout.tsx, globals.css, Header.tsx, Footer.tsx, Hero.tsx, ProjectsPreview.tsx, ProjectsPreviewSkeleton.tsx. 추가: personal-home.css.
- 검증: lint 통과, 기존 테스트3개 스위트/9개 통과, 프로덕션 빌드 통과. 로컬 브라우저 홈·CIA 상세 진입 확인, 데스크톱 본문16px/모바일15px 및 가로 넘침 없음 확인. 개발 서버의 신규 CSS import 캐시 오류는 layout 직접 import로 해결했다.
- 후속: 사용자 소개글 확정, 운영 데이터·공유 메타데이터·배포 검증. 폰트는 시안과 동일한 외부 CDN을 사용한다.


## 2026-11-17 - 디자인 에이전트 검토 및 홈 타이포그래피 정리

- 사용자 명시 요청으로 디자인 검토 에이전트를 사용했다. 캡션처럼 작았던 직무와 읽기 흐름을 끊는 간격을 주요 문제로 확인했다.
- 홈 시안 직무18/16px·이름과 간격10/8px, 소개 한 문단·폭560px·행간1.8, 작업명15px/400, 링크13px/500, 헤더 이름18/17px로 정리했다. 폐기된 CSS 중복도 제거했다.
- 대화 시안 폴더의 `home-personal-index.html` 수정, `home-refined-type.css` 생성, 직전 시안은 `home-before-type-refinement.html`로 보존했다.
- Chromium1024/390/320px 폰트 로드·직무 크기·단일 문단·가로 넘침 없음·작업 연결 대상 안내·JS 오류 없음 확인. 데스크톱/모바일 캡처 검토. 서비스 코드·의존성 변경 없음.
- 다음: 사용자 시안 피드백. 실제 사이트 적용은 별도 승인 범위다.

## 2026-11-17 - 직무 서체 통일

- 홈 시안의 Frontend Developer에 Chakra Petch600을 적용했다. 기존 크기·색·간격과 한글 Pretendard는 유지했다.
- CSS 적용 내용·diff check 확인. 서비스 코드 변경 없음. 다음은 시안 검토다.

## 2026-11-17 - 홈 직무 영문 표기 반영

- 기본 홈 시안 `home-personal-index.html`의 직무를 Frontend Developer로 변경하고 영문 언어 속성을 지정했다.
- 이름 Chakra Petch·본문 Pretendard 및 레이아웃 유지. 문구 치환 결과·diff check 확인. 서비스 코드 변경 없음.
- 다음: 시안 피드백 또는 명시적 승인 후 실제 적용.

## 2026-11-12 - Pretendard 홈 시안 반영 및 직무 표기 검토

- 사용자 요청으로 기본 홈 시안에 Pretendard를 적용했다. 이름 Chakra Petch600 유지, 본문400·작업명14px/500. Pretendard 공식 문서의 버전 고정 CDN을 시안에서만 사용한다.
- Chromium1024/390/320px 두 폰트 실제 로드·가로 넘침 없음 확인, 모바일 캡처 검토. 서비스 코드·패키지·배포 변경 없음.
- 프론트엔드 직무 표기는 사용자 질문에 대한 검토 단계이며 임의 변경하지 않았다. 확인 경력의 FE 중심과 앱 연동·아키텍처 재구성·PL 책임을 함께 고려한다. 다음은 직무 표기 방향 또는 시안 검토다.

## 2026-11-12 - 형태 차이가 큰 한글4종 추가 비교

- 기존 한글 후보가 비슷해 보인다는 피드백에 고운바탕·주아체·도현체·개구를 같은 직무/소개 문구로 비교했다. 명조·둥근 제목체·각진 제목체·손글씨의 형태 차이를 보여주며 모든 서체를 본문용 추천으로 취급하지 않는다.
- 산출물: 대화 시안 폴더 `korean-font-distinct.html`. Chromium900/320px 실제 폰트 로드·가로 넘침 없음 확인, 캡처 검토.
- 서비스 코드·기본 홈 시안 변경 없음. 한글 서체는 미선택이다.

## 2026-11-12 - 한글 본문 서체 추천 비교

- Chakra Petch와 어울리는 한글 서체 요청에 IBM Plex Sans KR·Gothic A1·고운돋움400을 실제 승인 소개로 비교했다. 한글 서체는 아직 미선택이다.
- 산출물: 대화 시안 폴더 `korean-font-pairings.html`. 영문 이름은 Chakra Petch600으로 통일했다.
- Chromium900/320px에서4종 실제 폰트 로드·가로 넘침 없음 확인, 데스크톱 캡처 검토. 기본 홈·서비스 코드·의존성 변경 없음.
- 다음: 사용자 한글 서체 선택 후 홈 시안에 반영한다.

## 2026-11-12 - Chakra Petch 선택 반영

- 사용자가3종 홈 비교에서 Chakra Petch를 선택했다. 기본 홈 시안 `home-personal-index.html`의 이름을 Chakra Petch600으로 갱신했다. 직전 비교에서 검증한54px/모바일 반응형 크기를 동일 적용했다.
- 결정·작업 기록 갱신, diff check 확인. 서비스 코드·의존성·배포 변경 없음.
- 다음은 홈 시안의 남은 디자인 검토 또는 사용자 승인 후 서비스 적용이다.

## 2026-11-12 - 최종 후보3종 홈 적용 비교

- 사용자 요청에 따라 Barlow Condensed600·Chakra Petch600·Righteous400을 각각 소개 제목에 적용한 홈 시안3개를 만들었다. 이름 외 소개 문구·목록·헤더·본문 폭과 배치는 동일하다.
- 산출물: 대화 시안 폴더의 `home-font-candidates.html`. 캐러셀로 전환하고 각 안의 화면 폭을 조절할 수 있다. 기존 시안은 보존한다.
- Chromium3안×1024/390/320px에서 넘침·JS 오류 없음, 동일 폭에서3안 높이 동일함 확인. 모바일3안 캡처 검토. 메뉴/작업은 기존 시안처럼 연결 대상 안내만 제공한다.
- 서비스 코드·의존성·배포 변경 없음. 다음은 사용자 서체 선택 및 시안 검토다.

## 2026-11-12 - Righteous 후보 추가와 신규4종 비교

- 사용자 후보3종을 decisions에 기록하고 Oxanium600·DM Sans700·Paytone One400·Space Mono700 이름 비교 시안을 `name-font-four.html`에 생성했다.
- Chromium900/320px 실제 폰트 로드·가로 넘침 확인. 서비스 코드·패키지 변경 없음. 다음은 사용자 후보 검토다.

## 2026-11-12 - 서체 후보 보존 및 추가 탐색

- Barlow Condensed·Chakra Petch를 사용자 중간 선호로 기록했다. 유사 서체에 한정하지 않고 Urbanist·DM Serif Display·IBM Plex Mono·Comfortaa·Righteous·Black Ops One 비교 시안을 생성했다.
- 산출물: 대화 시안 폴더의 `name-font-explore.html`. 앞선 추가6종은 `name-font-more.html`에 보존한다. 홈 시안과 서비스 코드는 변경하지 않았다.
- 다음은 사용자 추가 선택이며 최종 적용은 미승인이다.

## 2026-11-12 - 이름 서체 비교 시안

- 사용자 피드백: 직접 그린 단선 레터링도 얇은 기본 폰트처럼 보인다. 굵고 특징 있는 대안 또는 선택 가능한 폰트 목록을 요청했다.
- Google Fonts의 Syne700, Space Grotesk600, Sora600, Unbounded600으로 실제 이름을 비교하는 `name-font-comparison.html`을 대화 시안 폴더에 생성했다. 기존 홈은 선택 전 유지한다.
- Chromium900/390/320px에서 실제 라틴 폰트 로드·가로 넘침 없음 확인, 데스크톱 캡처 검토. 폰트는 비교 시안에서만 로드하며 서비스 코드·패키지·폰트 파일 설치 변경 없음.
- 다음: 사용자 서체 선택 후 홈 시안에 반영한다. 이전 단선 레터링은 미채택으로 보관한다.

## 2026-11-12 - Hwangseok Kim 전용 레터링 제작

- 기존 폰트 외곽선을 가져오지 않고 글자별 중심선 경로를 직접 작성했다. 단선 획과 단층 a/g, 대소문자 K/k의 사선을 사용했다. 기존 이탤릭·마침표 장식은 제거했다.
- 대화 시안 폴더의 `hwangseok-kim-lettering.svg`와 `draw-lettering.py`, 확대 PNG를 생성하고 `home-personal-index.html` 소개 제목에 적용했다. 접근 가능한 이름 텍스트를 유지한다.
- Chromium1024/390/320px 넘침 없음. 확대 레터링·모바일 캡처 시각 검토 완료. 서비스 코드·의존성 변경 없음. 다음은 레터링 인상에 대한 사용자 검토다.

## 2026-11-12 - 홈 이름의 서체 대비 시안

- 사용자 요청에 따라 이름에 세리프 서체와 성의 이탤릭, 작은 색상 마침표를 적용해 소개 본문과 대비를 만들었다. 기존 시스템 Georgia/Times 계열을 사용한 제안이며 새 폰트 파일·라이브러리를 추가하지 않았다.
- 간결한 대표 작업 목록은 유지한다. 사용자 지정 레터링은 제작하지 않았으며 시안 검토 이후 선택할 수 있다. 서비스 코드 변경 없음.

## 2026-11-12 - 대표 작업을 텍스트 링크 목록으로 축소

- 사용자 피드백: 직전 시안이 이전 목록 구조를 유지해 레퍼런스의 간결함을 반영하지 못했다.
- 홈 시안에서 역할 설명·개별 화살표·행 배경·넓은 행 간격을 제거했다. 대표 작업은 작은 제목 링크3줄, 전체 작업 링크는 목록 아래에 배치했다. 터치 환경의 클릭 영역은 유지한다.
- 서비스 코드 변경 없음. 시안 검토 후 실제 적용은 별도다.

## 2026-11-12 - 홈 시안 실명 표기

- 사용자 요청에 따라 `home-personal-index.html`의 표시 이름3곳을 Hwangseok Kim으로 변경했다. 모바일의 긴 이름을 위해 제목 크기와 헤더 줄바꿈을 조정했다.
- 서비스 코드 변경 없음. 이름 결정은 decisions에 기록했다. 실제 사이트 적용은 후속 범위다.

## 2026-11-12 - Jhey 참고 소개 중심 홈 시안

- 사용자 요청: Jhey의 좁은 소개 본문 아래 간결한 대표 작업 목록을 참고해 새 홈 시안을 제작한다.
- 시안: 중앙600px 읽기 폭, Paris/직무/승인 소개, 대표3건의 제목·기존 역할만 표시. 긴 설명·기술 목록은 홈 시안에서 제외하는 제안이며 실제 상세 연결 대상은 보존한다. 이전3열 시안은 보존한다.
- 산출물: `/Users/paris/.codex/visualizations/2026/11/12/01a1ce8c-1ea5-7013-9df6-1b35ab471690/home-personal-index.html`.
- Chromium1024/390/320px 넘침 없음·JS 오류 없음·연결 대상 안내 확인, 데스크톱/모바일 캡처 검토. 시안은 메뉴·작업 클릭 시 대상만 안내한다.
- 서비스 코드·의존성·배포 변경 없음. 다음은 사용자 시안 검토이며 실제 적용은 미승인이다. 기존 운영·콘텐츠 후속은 유지한다.

## 2026-11-12 - 소개 우선 홈 레이아웃 시안

- PM: 사용자가 큰 프로젝트 제목과 반복되는 세로 배치를 개선하고, 소개 다음에 대표 작업을 보여주는 시안을 요청했다. Projects는 현재 기준을 유지한다.
- Planner/시안: 승인 자기소개를 상단으로 이동하고 대표 3건을 데스크톱 3열, 모바일 1열로 구성했다. 제목 기본26px, 기존 승인 설명·역할·순서 유지. 서비스 적용은 미승인이다.
- 산출물: `/Users/paris/.codex/visualizations/2026/11/12/01a1ce8c-1ea5-7013-9df6-1b35ab471690/home-introduction-first.html`. 화면 폭·제목 크기 조절 제공. 상세/메뉴는 연결 대상 안내만 표시한다.
- QA: Chromium 1024/390/320px 가로 넘침 없음, 3열/1열 전환 및 연결 안내 확인. 1024/390px 캡처 시각 검토. 서비스 코드·의존성·배포 변경 없음.
- 다음: 소개 비중과 대표 작업 밀도에 대한 사용자 검토 후 적용 범위를 결정한다. 기존 Projects 세부 내용·운영 DB/배포 후속은 유지한다.

## 2026-11-11 - 신규 포트폴리오 로컬 브랜치 분리

- 사용자 요청으로 `codex/project-card-redesign`을 `ver2`로 변경했다. 현재 작업 폴더와 기존 로컬 서버는 유지한다.
- 원격 main은 `b3c288b`, 새 디자인 커밋은 로컬에만 있음을 확인했다. `https://paris.me.kr` HTTP200·Vercel 응답·이전 Career Highlights 화면·신규 folio 클래스 부재·등록 Vercel 주소와 동일 정적 자산 확인.
- 사용자가 신규 버전이 공개 주소에 배포되지 않았음을 확인했다. 운영 롤백·push·배포 없이 현재 공개 버전을 유지한다. 서비스 코드 미변경. 이후 ver2는 로컬에서만 점진적으로 개선한다.

## 2026-11-11 - 승인된 사이트 디자인 커밋 준비

- 사용자가 현재 Projects 디자인을 기준으로 점진적으로 다듬기로 확정하고 커밋을 요청했다. 홈·About·Contact·공통 헤더 및 Projects의 누적 서비스 변경과 관련 문서를 함께 기록한다.
- Projects 배경 이동은 시작 지연 없이1000ms이며 좌우 여백24/16px를 유지한다. 세부 콘텐츠 수정은 다음 작업으로 남긴다.
- 기존 별도 변경인 `AGENTS.md`, `workflows/portfolio-cycle.md`, `tailwind.config.mjs`는 이번 커밋에서 제외한다. push·배포는 포함하지 않는다.

## 2026-11-11 - 배경 이동 시간1000ms 조정

- 사용자 요청으로 `ProjectCard.tsx`의 이동 시간을500ms에서1000ms로 늘렸다. 시작 지연 없음, 모션 감소 즉시 전환 유지. 서비스 코드 변경, diff check 확인. 추가 작업·배포 없음.

## 2026-11-11 - 배경 이동 시간500ms 조정

- 사용자 요청으로 `ProjectCard.tsx`의 이동 시간을300ms에서500ms로 늘렸다. 시작 지연 없음, 모션 감소 즉시 전환 유지. 서비스 코드 변경, diff check 확인. 추가 작업·배포 없음.

## 2026-11-11 - 배경 전환300ms 의미 정정

- 사용자 의도는 시작 지연이 아닌 느린 이동이었다. `ProjectCard.tsx`에서 delay를 제거하고 duration을300ms로 변경했다. 모션 감소 즉시 전환과 좌우 여백은 유지한다.
- 서비스 코드 변경, diff check 확인. 이전300ms 지연 결정은 대체한다. 추가 작업·배포 없음.

## 2026-11-11 - 배경 이동 지연300ms 지정

- 사용자 추가 요청으로 `ProjectCard.tsx`의 배경 이동 지연을60ms에서300ms로 변경했다. 좌우 여백24/16px와 이동 시간240ms는 유지한다. 모션 감소에서는 지연0ms. 서비스 코드 변경, diff check 확인. 추가 작업·배포 없음.

## 2026-11-11 - hover 행 여백·지연 조정

- 사용자 요청으로 `src/app/folio.css`의 행 좌우 여백을24px/모바일16px로, `ProjectCard.tsx`의 배경 전환 지연을0.06초로 조정했다. 서비스 코드 변경이며 모션 감소에서는 지연도 제거한다.
- 1440/390/320px 좌우 여백·가로 넘침 없음과 배경 이동 완료 확인. 타입 검사·lint 확인. 새 의존성·배포 없음. 추가 요청 미해결 없음.

## 2026-11-11 - 프로젝트 행 hover 배경 이동

- PM/Planner: 사용자 요청에 따라 밑줄 대신 행 전체 배경과 행 사이의 부드러운 이동을 적용한다. 기존 Framer Motion과 테마 색상을 사용하고 필터·정렬·상세를 보존한다.
- 서비스 수정: `src/components/projects/ProjectCard.tsx`, `ProjectsContainerClient.tsx`, `src/app/folio.css`. 공유 배경의0.24초 전환, 키보드 포커스 추적, 모션 감소 즉시 전환, 터치 hover 제외 구현. 결정·현재 구현·계획 갱신.
- QA: 타입 검사·lint 통과. Chromium에서 행 전체 크기·이동 중간 좌표·최종 위치·단일 배경·목록 이탈 제거·Tab 이동·상세 Enter/Escape와 포커스 복귀·라이트/다크 배경·모션 감소 즉시 이동·390px 터치 후 강조 잔류 없음 확인. JS 오류0건, 두 테마 캡처 검토.
- 검증 스크립트 `/tmp/project-hover-qa.cjs`, 캡처 `/tmp/project-hover-dark.png`, `/tmp/project-hover-light.png`. 새 의존성·배포 없음. 현재 요청 미해결 없음; 기존 운영 검증 후속 유지.

## 2026-11-11 - 최신순·다크 기본값과 Projects 중복 정보 정리

- 사용자 요청에 따라 기본 정렬을 최신순으로 변경하고 전체/결과 개수와 중간 선을 제거했다. 필터와 정렬을 한 줄로 묶고 그룹 개수만 화면에 남겼다. 서버 HTML과 ThemeProvider 초기값을 다크로 맞췄다.
- 서비스 수정: `ProjectsContainerClient.tsx`, `src/app/folio.css`, `src/context/ThemeContext.tsx`, `src/app/layout.tsx`. 미사용 `ProjectsHeader.tsx` 삭제. 결정·현재 구현·계획·검증 기록 갱신.
- QA: 타입 검사·lint·기존9 tests 통과. 1440/768/390/320px 배치·선/중복 개수 제거·넘침 없음, 최신 기본순·대표 필터·정렬 전환 확인. OS 라이트 환경에서도4페이지 다크 초기 표시, JS 비활성 SSR 다크, 수동 전환·라우팅 유지·새로고침 다크 확인. JS 오류0건, 캡처 검토 완료.
- 현재 요청 미해결 없음. 기존 운영 검증·배포 후속 유지. 새 라이브러리·테마 저장 정책·배포 없음.

## 2026-11-11 - 필터·전체 개수 한 줄 배치 및 날짜 정렬

- PM/Planner: 제목 제거 후 남은 전체 개수와 필터의 서로 다른 줄을 정리하고, 추가 요청한 날짜별 정렬을 기존 목록에 적용한다. 기본 대표순과 기존 필터·상세 동작을 보존한다.
- Developer: 필터와 전체 개수를 같은 줄로 묶고 모바일 필터는 가로 스크롤한다. 결과 개수 행 오른쪽에 대표순·최신순·오래된순 선택을 추가했다. 시작일 기준으로 필터 결과 전체를 정렬한다.
- 서비스 수정: `src/components/projects/ProjectsHeader.tsx`, `ProjectsContainerClient.tsx`, `src/app/folio.css`. 신규: `src/lib/project-sort.ts`, `project-sort.test.ts`. 결정·현재 구현·계획·QA 문서 갱신.
- QA: TypeScript·lint·Jest9 tests·프로덕션 빌드 통과. 1440/768/390/320px 동일 행 정렬·넘침 없음, 양방향 날짜순·필터 조합·대표순 복원·상세 Escape/뒤로 가기 후 선택 유지 확인. 캡처 검토, JS 오류0건.
- Next: 현재 요청의 미해결 항목 없음. 기존 테마·접근성·운영 검증 후속 유지. 서비스 코드 변경이며 새 의존성·커밋·배포 없음.

## 2026-11-11 - 상세 날짜·분류 글자 확대

- 직전 날짜·AI Agent 표기에 대한 사용자 요청으로 `src/app/folio.css`의 panel-meta를12px에서14px로 확대했다. 데스크톱·모바일에 동일 적용. 서비스 CSS 변경이며 다른 제목 크기는 유지했다.
- 브라우저 computed style과 diff check 확인. 배포 없음.

## 2026-11-11 - 상세 메타 문구 수정

- 사용자 요청에 따라 `ProjectPanel.tsx`에서 기간 접두어를 제거하고 AI 분류 표시를 AI Agent로 변경했다. 원본 데이터·필터는 변경하지 않았다.
- 결정·작업 기록 갱신. 서비스 문구 변경이며 diff check와 브라우저 표시를 확인했다. 배포 없음.

## 2026-11-11 - 목록·상세 프로젝트명 비율 조정

- PM/Developer: 프로젝트명이 커서 전체 균형이 맞지 않는다는 피드백에 따라 목록32/26px, 상세40/30px, 담당 역할20/18px로 조정했다. 제목 행간·자간·최대폭과 회사명/한글 제목 간격을 함께 정리했다.
- Modified: `src/app/folio.css`, 결정·작업 기록. CSS 서비스 변경이며 홈 구성·내용·동작은 보존했다.
- QA: 1440/768/390/320px에서 실제 글자 크기·패널/페이지 넘침·Escape 닫힘 확인, 데스크톱·모바일 캡처 검토. diff check 통과. CSS만 수정해 새 테스트나 전체 빌드는 반복하지 않았다.
- Next: 기존 테마·접근성·운영 검증 후속 유지. 배포 없음.

## 2026-11-11 - 상세 팝업 닫기·회사명 위치 수정

- PM/Developer: 사용자 요청으로 닫기 텍스트를 제거하고 X를18px에서26px로 확대했다. 회사명을 툴바에서 프로젝트 제목 바로 위로 옮겨 정렬·간격을 통일했다.
- Modified: `src/components/projects/ProjectPanel.tsx`, `src/app/folio.css`, 결정·작업 기록. 서비스 코드 변경 있음.
- QA: TypeScript·lint 통과. 1440/390/320px에서 아이콘 크기·텍스트 부재·44px 클릭 영역·회사명과 제목의 기준선/14px 간격·닫힘 후 배경 잠금 해제 확인. 모바일 캡처 검토, JS 오류0건. 새 테스트·라이브러리·배포 없음.
- Next: 기존 전역 테마·접근성·운영 검증 후속 유지.

## 2026-11-11 - About·Projects 본문 제목 제거 및 헤더 메뉴명 적용

- PM/Planner: 사용자가 본문 About./Projects.를 제거하고 헤더 왼쪽을 홈에서만 Paris, 다른 화면에서는 해당 메뉴명으로 바꾸도록 요청했다. Contact 중앙 구성과 기존 네 메뉴는 유지한다.
- Developer: Header의 왼쪽 라벨을 경로별로 표시한다. About/Projects h1을 헤더로 이동하고 본문·로딩 제목 및 관련 CSS를 제거했다. About 상단 여백을 조정했다.
- Modified: Header.tsx, ProjectsHeader.tsx, About page.tsx, Projects loading.tsx, header.css·folio.css·profile.css, 결정·현재 사실·계획·작업 기록.
- QA: TypeScript·lint·build, 1440/390/320px ×4페이지 헤더명·단일 h1·네 메뉴 노출/간격·라우팅·Contact 텍스트 중심 검증. 서비스 코드 변경 있음. 기존 실행 서버 유지, 배포 없음.
- Next: 기존 전역 테마·접근성·운영 검증 후속 유지.

## 2026-11-11 - Projects 정보 분리·팝업 전환·공통 헤더 정리

- PM: 사용자 요청은 제목 크기/서체 조정, 상세 애니메이션, CIA 정식명·회사명 변경, 목록에는 프로젝트 소개만 노출, 페이지별 헤더와 라우팅 통일이다. 제목 축소로 진행하고 기존 내용·필터·패널 동작을 보존한다.
- Planner/Developer: Projects 제목32–46px. 표시 계층에13건 서비스 소개를 분리하고 목록 역할을 제거했다. Content Intelligence AI·SAMSUNG ELECTRONICS·OSSTEM IMPLANT를 홈/목록/상세에 반영했다. 기존 Framer Motion으로 패널 열림/닫힘을 추가하고 exit 완료까지 포커스·배경 잠금을 유지한다.
- Header: LegacyHeader와 페이지별 CSS 분기를 제거하고 Header/header.css로 통일했다. 네 메뉴를 모바일에서도 항상 표시하며 동일 절대 경로로 이동한다. 홈의 앵커 링크 예외도 제거했다.
- Tracking: Notion TASK-259와 TASK-260에 추가 수정·검증 결과를 기록하고 쓰기 성공을 확인했다. 기존 완료 상태를 유지했다.
- QA: 타입·lint·기존5 tests·최종build·diff check, standalone20개 화면조합, 필터7종, 역할/소개 분리·명칭·키보드·포커스·history·패널 크기변경·내부스크롤·모션감소·다크 검증. JS 오류/가로 넘침 없음. 캡처 검토 완료. 파일·검증은 `docs/projects-refinement-qa.md`.
- Boundary: 기존 미커밋 작업과 사용자3000번 서버 유지. 서비스 코드 변경 있음. 새 의존성·운영 DB 변경·커밋·배포 없음.
- Next: 기존 테마 정책·전역 접근성·메타데이터/운영 DB/배포 후속을 유지한다. 새 DB 프로젝트 추가 시 목록용 소개를 함께 정리한다.

## 2026-11-11 - About·Contact 승인 시안 서비스 적용 완료

- PM: 사용자가 About 좌우 분할과 Contact 최신 중앙 정렬 시안의 실제 사이트 적용을 승인했다. 추가 디자인 결정 없이 확인된 레이아웃·문구·이메일을 구현하는 범위다.
- Planner/Developer: 기존 AboutIntro/Stacks/ContactBox와 두 페이지를 갱신하고 `src/app/profile.css`를 추가했다. Header/Footer를 두 경로에 연결하고 작은 로고·현재 위치 표시·Contact 소셜 없는 푸터를 적용했다. Contact는 가용 화면을 채우며 이메일 텍스트만 중앙 정렬한다. 복사 실패 시 주소 선택·직접 복사 안내를 제공한다.
- Files: 신규 `src/app/profile.css`, `src/components/contact/ContactBox.test.tsx`, `docs/about-contact-implementation-qa.md`. 수정 서비스8개 및 문서4개는 QA 문서에 목록화했다. 기존 미커밋 변경·홈/Projects·데이터·의존성을 보존했다.
- QA: TypeScript·lint·Jest 2 suites/5 tests·build·diff check 통과. 320/390/768/1024/1440px 두 페이지 넘침 없음, 이메일 중심0px 오차, About 동일 문단 크기·반응형 순서, 실제 Chromium 클립보드 쓰기/읽기·거부·미지원 확인. 다크·모션 감소·내비게이션·Projects 딥링크/Escape·홈 대표3건 회귀 확인. 캡처 검토, JS 오류0건.
- Production QA: standalone 정적 파일을 복사하기 전에 서버를 시작해 초기404가 발생했다. 정적 파일 복사 후 서버를 재시작해 자산과 두 페이지·실제 복사를 재검증했다. 모바일 검증 스크립트의 context viewport 지정도 수정해 390px 확인을 완료했다. 제품 소스 결함으로 남은 항목은 없다.
- Tracking: Notion TASK-260의 승인·구현 결과·체크리스트·완료 상태를 갱신하고 각 쓰기 성공 응답을 확인했다. 로컬 구현 완료이며 커밋·운영 DB 변경·배포는 하지 않았다.
- Next: 기존7단계 테마 저장/시스템 정책·전역 접근성, 8단계 메타데이터·운영 DB·배포. 실제 메일 앱 및 실기기 Safari/Android 검증과 CIA 프로젝트 데이터 GCP 대조는 후속으로 남긴다.

## 2026-11-11 - Contact 중앙 정렬 지정안 반영

- PM/Planner: 사용자가 전체 화면 중앙의 Contact 제목, 아래 이메일·복사 아이콘만 지정했다.
- Modified: `contact-simple.html`, 검증 preview·centered 캡처, 결정·작업 기록. 제목과 이메일/복사 행을 중앙에 배치하고 기존 밑줄·화살표·보이는 복사 문구 제거.
- QA: 1024/390/320px에서 수평·수직 중앙 정렬과 넘침 없음, 복사 아이콘의 접근 가능한 이름·성공 모의 흐름, JS 오류 없음 확인. 모바일 캡처 확인.
- 추가 정정: 이메일 텍스트만 중앙에 맞추고 복사 아이콘을 오른쪽에 별도 배치했다. 1024/390/320px에서 텍스트 중심 오차0px·아이콘 오른쪽 배치·넘침 없음을 확인했다.
- Next: 지정 구성의 서비스 적용. 이번에는 시안만 변경했으며 서비스 코드·Notion 상태 변경 없음.

## 2026-11-11 - Contact 카드 제거

- PM/Planner: 사용자가 카드형 표현을 거절했다. 박스 장식을 제거하고 제목·이메일 정렬과 간격으로 구성한다.
- Modified: `contact-simple.html`, 검증용 preview와 `unframed-1440.png`·`unframed-390.png`, 결정·계획·작업 기록. 데스크톱 좌우 정렬·모바일 세로 배치, 이메일 밑줄·화살표·복사 동작 유지.
- QA: 320/390/768/1024/1440px 넘침 없음, 이메일 영역 배경·외곽선·곡률 없음, 키보드 메일 행동·복사 피드백·JS 오류 없음 확인. 두 크기 캡처 검토.
- Boundary/Next: 서비스 코드 변경 없음. Contact 수정 시안 검토가 다음 단계이며 Notion 상태 변경 없음.

## 2026-11-11 - Contact 헤더 축소·이메일 영역 보완

- PM/Planner: 헤더 Paris. 축소와 Contact·이메일 디자인 보완 요청. 작은 글자·이메일 전용 구성을 유지하는 시안 수정이다.
- Developer: 대화 폴더 `contact-simple.html`과 검증용 preview·캡처 수정. 헤더24/22px, 이메일 영역의 테두리·배경·아이콘, 링크 호버 및 복사 성공 상태를 보완했다. 결정·계획·작업 기록 갱신.
- QA: 320/390/768/1024/1440px에서 넘침 없음. 이메일 링크1개·소셜0개, 헤더 크기, 키보드 링크, 복사 성공/거부 모의 흐름, 다크·모션 감소 확인. 데스크톱·모바일 캡처 검토.
- Boundary/Next: 서비스 코드 변경 없음. Contact 시안 검토와 서비스 적용이 다음 단계다. 작은 시안 수정으로 Notion 상태는 갱신하지 않았다.

## 2026-11-11 - Contact 작은 제목·이메일 전용 시안

- PM/Planner: 사용자 요청에 따라 큰 제목·이메일 표현을 버리고 이메일만 남긴다. 블로그·인스타그램뿐 아니라 GitHub도 연락 영역과 Contact 푸터에서 제외한다.
- Developer: `contact-simple.html` 신규. 작은 Contact 제목, 이메일 링크, 주소 복사만 표시한다. 큰 CTA·색면·이름 반복을 제거했다. 문서 `docs/decisions.md`, `docs/portfolio-improvement-plan.md`, `docs/task-log.md`에 최신 방향을 기록했다.
- QA: 320/390/768/1024/1440px 넘침 없음. 제목 최대24px/이메일 최대18px, main 이메일 링크 1개·소셜 링크 0개 확인. 키보드, 다크, 복사 성공/거부 모의 흐름 통과. 모바일 캡처 검토. 서비스 변경 없음.
- Tracking/Next: Notion TASK-260에 변경 방향과 검증을 기록하고 성공 응답을 확인했다. 단순화 시안 검토 후 서비스 적용 범위를 정한다. 홈·Projects·About 확정안 유지.

## 2026-11-11 - Contact 참조 조사 및 행동 중심 시안 2종

- PM: 사용자가 다른 개발자 포트폴리오를 참고한 Contact 시안을 요청했다. 홈·Projects와 About 좌우 분할 확정안 유지가 범위다.
- Research/Design agent: 공식 Paco·Rauno·Dennis·Brittany v4 사이트를 읽고 브라우저 캡처를 검토했다. Rauno 복사 표기는 문서/DOM 근거이며 실제 연락 버튼 시각·동작 검증과 구별했다. Brittany v4는 초기 로딩 후 실제 Contact 영역을 다시 캡처했다. 디자인 에이전트가 두 방향을 제안하고 최종 데스크톱·모바일 캡처를 재검토했다.
- Planner/Developer: 이메일 주소 중심/메일 버튼 중심 두 Contact 시안을 제작했다. 새 문의 폼·전화·과장 문구 없이 확정 이메일·메일 작성·주소 복사·기존 외부 링크만 사용한다. Clipboard API 성공 후 완료 표시, 실패 시 주소 선택 안내를 제공한다.
- Created: 대화 폴더 `contact-reference-concepts.html`, `contact-reference-review/`의 참조/시안 캡처·preview·검증 JSON, `docs/contact-design-references.md`. Modified: `docs/decisions.md`, `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- QA: 두 안 5개 너비(320/390/768/1024/1440px)에서 넘침·JS 오류 없음. 키보드 메일 행동, 이메일/연결 대상, 테마·모션 감소, 모바일 읽기 순서 확인. 복사 성공·거부를 모의 실행해 주소 전달·성공표시·실패 시 선택을 확인했다. 실제 OS 클립보드 쓰기 검증으로 보고하지 않는다.
- Boundary: 서비스·설정 50개 파일 해시 동일, 기존 확정 시안 미수정, 서비스 코드·의존성·DB·배포 변경 없음. diff check 통과. Notion TASK-260에 조사·시안·검증을 기록하고 쓰기 성공을 확인했다. 분석중 유지.
- Next: Contact 방향 선택 후 서비스 적용 범위 확정. 실제 메일 앱 실행·브라우저 권한 검증은 구현 단계에 남긴다.

## 2026-11-11 - About 좌우 분할 선택 기록

- 사용자 결정: About은 선택한 좌우 분할 레이아웃으로 확정하고 Contact는 별도로 디자인한다. 홈·Projects 확정안 유지.
- Modified: `docs/decisions.md`, `docs/portfolio-improvement-plan.md`, `docs/task-log.md`. Notion TASK-260에도 선택 범위와 남은 Contact 검토를 기록하고 쓰기 성공을 확인했다.
- Verification: 선택된 시안 이름과 사용자 발언을 대조하고 About 승인과 Contact 미확정을 구분했다. 문서 변경만 수행했으며 서비스 코드·시안 원본 변경 없음.
- Next: Contact 별도 디자인 검토. About 레이아웃 선택을 두 페이지 일괄 구현 승인으로 확대하지 않는다.

## 2026-11-11 - 범위 정정 및 About·Contact 전용 두 시안

- PM: 사용자가 홈 디자인은 이미 확정됐고 재검토 대상은 About·Contact라고 정정했다. 직전 전체 재설계는 에이전트의 범위 오해였음을 인정하고 홈·Projects 제안을 철회했다. 디자인 에이전트에도 정정 범위를 전달했다.
- Planner/Developer: 기존 헤더·서체·바탕색을 유지한 About·Contact 전용 시안 두 개를 새로 만들었다. A 섹션 대비(소개 아래 단일 기술 색면), B 좌우 분할(소개/기술·보조 정보/이메일 병렬). 모바일 Contact는 이름→이메일→링크 순서다. 프로젝트 재탕과 본문 큰 Paris. 없이 확인된 소개·기술·이메일을 유지한다.
- Created: 대화 폴더 `about-contact-focused.html`, `about-contact-focused-review/`의 preview·캡처·results.json. Modified: `docs/design-review-2026-11-11.md`의 범위 철회 표시, `docs/decisions.md`, `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- QA: 두 안 × 두 페이지 × 320/390/768/1024/1440px 총 20조합 넘침·JS 오류 없음. 소개 두 문단의 동일 크기·굵기·행간, 모바일 이메일 우선 순서, 키보드 페이지 전환, 이메일 링크, 기술 정보, 다크·모션 감소를 확인했다. 데스크톱 About·모바일 Contact 캡처를 검토했다.
- Boundary: 홈·Projects 서비스/승인 시안 변경 없음. 다른 서비스 코드·의존성·DB·배포 변경 없음. Notion TASK-260에 범위 정정과 최신 전용 시안을 기록했고 성공 응답을 확인했다. 분석중 유지.
- Next: About·Contact의 두 배치안만 검토한다. 홈·Projects 디자인은 확정 상태로 유지하며 전체 재설계 안은 최신 검토 대상이 아니다.

## 2026-11-11 - 디자인 에이전트 전체 분석과 탐색 가능한 대안 2종

- PM: 사용자가 전체 디자인이 단조롭다고 평가하고 디자인 에이전트 호출·재분석·시안을 명시적으로 요청했다. 앞선 About 프로젝트 내용 반복 지적도 함께 반영했다. 이번 범위는 분석·시안이며 서비스 구현이 아니다.
- Design agent: 전용 에이전트가 기존 코드/시안/캡처를 독립 분석하고 새 HTML·데스크톱 캡처까지 재검토했다. 큰 제목 중심의 반복 행, 홈/목록의 낮은 차별성, About 중복, 약한 선택 상태를 지적했다. 2차 지적에 따라 CIA 제목 축소·역할 본문 위치 조정, Projects 한국어 원제·CIA 풀네임 복구, B About 정렬을 반영했다.
- Planner/Developer: 비대칭 쇼케이스와 프로젝트 내비게이터 두 안을 만들었다. 각각 홈·Projects·상세·About·Contact를 탐색한다. A는 3건 역할·요약 상시 노출, B는 목록 선택에 따른 미리보기 전환이다. About ‘해온 일’을 삭제하고 사용자 확인 기술·이메일과 거절 문구 제거를 유지했다.
- Created: 대화 폴더 `portfolio-design-reset.html`, `design-reset-review/preview.html`·각 페이지/폭/테마 캡처·검증 JSON, `docs/design-review-2026-11-11.md`.
- Modified: `docs/decisions.md`, `docs/portfolio-improvement-plan.md`, `docs/task-log.md`. 기존 서비스와 이전 시안 파일은 수정하지 않았다.
- QA: 두 안 × 4페이지 × 320/390/768/1024/1440px 총 40조합에서 넘침·브라우저 오류 없음. 필터 7종(13/5/6/7/6/2/3), 상세 13건 각각 열기·Escape·포커스 복귀, B의 키보드 선택, 이메일·동일 문단 스타일·테마·모션 감소를 확인했다. 공개 프로젝트 13건은 사용자 확인 GCP 추가 외 기존 데이터와 정확히 같다. 서비스·설정 50개 파일 해시 동일, src 신규 파일 없음, diff check 통과. 데스크톱·모바일 캡처를 검토했다.
- Tracking: Notion TASK-260에 디자인 재검토·확정 기술·시안·검증 내용을 추가했고 성공 응답을 확인했다. 분석중과 미완료 구현 체크리스트를 유지한다.
- Limits/Next: 두 안의 방향과 B 선택형 홈의 타당성을 사용자 검토한다. 실제 라우터/딥링크 history·고정 뷰포트 패널 스크롤은 승인된 서비스 구현 단계에서 검증한다. 기존 적용 완료 기록을 새 디자인 승인으로 확대하지 않는다. 운영 DB·배포 등 기존 후속은 유지한다.

## 2026-11-11 - About·Contact 본문 장식 제거 및 확인 기술 추가

- PM: 첨부 화면에서 지목한 본문의 Paris. 반복, 소개 문단 크기 차이, Contact의 `다른 곳에서도` 표현을 수정하도록 요청받았다. Git·GitLab·SVN 사용 및 삼성 CIA의 GCP 개발·배포 경험도 사용자 확인을 받았다.
- Planner/Developer: 두 본문에서 큰 Paris.를 제거하고 김황석·프론트엔드 개발자로 정리했다. 소개 두 문단의 크기·굵기·행간·자간을 통일하고 외부 링크 제목은 `링크`로 변경했다. 버전 관리에 Git·GitLab·SVN, 개발·배포에 GCP·AWS·Docker와 확인된 사용 프로젝트를 표시했다.
- Modified: 대화 시안 `about-contact-type-index.html` 및 검증용 preview·캡처·결과 JSON, `docs/decisions.md`, `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- QA: 320/390/768/1024/1440px 두 페이지 넘침·브라우저 오류 없음. 페이지·폭·테마·키보드·링크 대상 기존 검증 통과. 소개 문단 computed style은 데스크톱 둘 다 17px/400, 모바일 둘 다 16px/400이며 행간·자간도 같음을 확인했다. 본문 Paris. 부재, `링크`, GitLab·SVN·GCP 반영을 확인하고 데스크톱 소개·모바일 Contact 캡처를 검토했다.
- Boundary: 서비스·설정 파일 50개 해시가 기존과 동일하다. 서비스 코드·의존성·DB·배포 변경 없음. 시안 수정이므로 서비스 build·lint는 재실행하지 않았다.
- Next: 시안 검토와 승인 범위의 About·Contact 적용. CIA 프로젝트 기술 데이터에 GCP 추가를 서비스 적용 때 함께 검토한다. 세부 GCP 서비스나 운영 책임은 확인된 사실로 확대하지 않는다.

## 2026-11-11 - About 사용 기술을 채용 검토 관점으로 재구성

- PM: 사용자가 `웹 화면`의 혼합 분류와 `스타일링` 용어를 지적하고 IT 채용 담당자 관점의 구성을 요청했다. 기술 종류를 빠르게 구분하고 실제 사용 프로젝트·범위를 파악하는 것을 목표로 정했다.
- Planner/Developer: 기존 About 시안의 사용 기술 부분을 언어 / 프레임워크·라이브러리 / 상태 관리·데이터 조회 / CSS 프레임워크 / 버전 관리 / 개발·배포 환경으로 재구성했다. React·Vue 3·Next.js의 공개 프로젝트 사례, Kotlin·Swift의 오스템 사용 범위, AWS·Docker의 Festival Life 환경 구성 경험을 표기했다. 모바일은 분류명 위·기술명 아래로 읽는다. 숙련도·사용 연수는 추가하지 않았다.
- Modified: 대화 시안 `about-contact-type-index.html`, 검증용 `about-contact-review/preview.html`·캡처·결과 JSON, 저장소 `docs/decisions.md`, `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- QA: 공개 프로젝트 stack 및 요약과 대조했다. Chromium의 320/390/768/1024/1440px 넘침 없음, 페이지·화면 폭·테마 전환, 링크 대상·키보드·모션 감소와 JS 오류 없음 확인. 모바일 캡처를 시각 검토했다. 서비스·설정 파일 50개의 기존 해시 동일, Contact·경험 본문이 직전 시안과 동일함을 확인했다. diff check 통과.
- Boundary: 서비스 코드·의존성·DB·배포 변경 없음. 서비스 변경이 없어 build·lint는 재실행하지 않았다. TASK-260의 분석중 상태를 조회했고 이번 세부 시안 수정으로 상태를 변경하지 않았다.
- Next: 수정 시안의 문구·배치 검토. About·Contact 서비스 적용과 기존 후속 항목은 아직 남아 있다.

## 2026-11-10 - About·Contact 현재 화면 검토 및 반응형 시안

- PM: 현재 About·Contact를 먼저 확인하고 승인된 홈·Projects와 어울리는 데스크톱·모바일 시안을 요청받았다. 대표 이메일은 `hwangseokparis@gmail.com`, 전화번호 제외·이메일만 표시로 사용자 확인을 받았다. 이번 범위는 시안이며 서비스 구현 승인은 포함하지 않는다.
- Current: 현재 About의 Festival Life 진행 중 설명과 미확인 성과 수치·기술 태그 반복을 확인했다. Contact는 표시 이메일/링크 불일치, h1 없음·main 2개, 중복 저작권과 320px의 17px 가로 넘침을 확인했다. 390px에서는 넘침이 없었다.
- Planner/Developer: 타입 인덱스 서체·색상·구분선·헤더를 이어받았다. About은 승인 자기소개 → 실제 담당 업무 4종과 프로젝트 6건 연결 → 용도별 기술, Contact는 확정 이메일 → 기존 보조 링크 → 다른 페이지 연결로 구성했다. 오스템 AI 활용·직접 검토·수정·검증, NH PL 인계·교보 3인 팀, Festival Life 참여 종료를 유지한다. 재편집 문구와 배치는 검토 제안이다.
- Created outside repository: 대화 시안 폴더의 `about-contact-type-index.html`, `about-contact-review/preview.html`, 현재 화면 및 시안 PNG와 `current-results.json`·`proposal-results.json`.
- Modified: `docs/decisions.md`, `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- QA: Chromium에서 두 시안을 320/390/768/1024/1440px 실제 본문 너비로 확인했다. 가로 넘침·JS 오류 없음, 각 페이지에 보이는 h1 하나. 페이지/폭/테마 전환·키보드 Enter·이메일 표기/대상·프로젝트 ID 6건·모션 감소를 확인하고 데스크톱·모바일·다크 캡처를 검토했다. 링크는 이동 대신 연결 대상을 표시한다.
- Boundary: 시작 시점의 서비스·설정 등 50개 파일 해시가 모두 동일하고 src 신규 파일도 없다. 서비스 코드·의존성·DB·배포·커밋 변경 없음. 서비스 변경이 없어 build/lint/단위 테스트는 재실행하지 않았다. 현재 서비스의 연락처와 넘침은 아직 수정되지 않았다.
- Tracking: Notion TASK-260 상태를 분석중으로 변경하고 현재 검토·시안·확정 연락처·QA 기록을 추가했다. 두 쓰기의 성공 응답을 확인했다. 구현 체크리스트는 미완료로 유지한다.
- Next: About 문구와 두 페이지 배치 검토 후 승인된 범위의 서비스 적용. 전역 테마 저장 정책·접근성·운영 DB·검색/공유·배포는 기존 후속 단계다.


## 2026-11-10 - 승인 타입 인덱스 홈·Projects 서비스 적용

- PM: 사용자가 홈·전체 목록·상세 시안을 승인하고 구현을 요청했다. 재승인 없이 해당 범위로 진행했다. 기존 데이터/필터/딥링크·다른 페이지 보존, DB·배포 후순위 유지가 경계다.
- Planner: 기존 컴포넌트를 갱신하고 스코프 CSS·표시용 제목 맵만 추가한다. 홈 대표 3건 뒤 소개, 목록 대표 5건 + 나머지 8건 중복 제거, 실제 패널 내부 스크롤·포커스/URL 흐름 검증을 계획했다.
- Developer: 승인된 글자·여백·색상과 모바일 구성을 실제 Next.js 페이지에 적용했다. 단일 ProjectPanel에 sticky 닫기, 내부 스크롤, 배경 inert, 본문 잠금과 포커스 복귀를 구현했다. 홈/Projects의 헤더/푸터·로딩 화면을 맞췄고 기존 About/Contact는 보존했다.
- Files: 서비스 신규 2개(`src/app/folio.css`, `src/constants/project-presentation.ts`), 수정 15개. 전체 목록은 신규 `docs/type-index-implementation-qa.md`에 기록했다. 계획·결정·프로젝트 문맥·작업 기록도 갱신했다.
- QA: lint(경고 0), tsc, 기존 Jest 2건, 최종 프로덕션 build, diff check 통과. standalone 서버의 320/390/768/1024/1440px, 7개 필터, 13건 직접 상세/전체 문구, 홈 링크 3건, 키보드/뒤로·앞으로/포커스 복원, 다른 query 보존, 테마·모션 감소와 브라우저 오류 0건을 확인했다. 모바일 wheel 스크롤/본문 잠금 및 열린 패널의 1440×600 크기 전환도 검증했다. 캡처로 홈/목록/상세의 데스크톱·모바일·다크를 검토했다.
- Boundary: 경력 데이터·DB/API·의존성·기존 무관 미커밋 변경 보존을 스냅샷과 비교했다. 커밋·push·운영 DB 쓰기·배포 없음.
- Follow-up: Contact 320px에서 17px 넘침을 새로 확인했으며 변경 전 코드에서도 동일했다. TASK-260 후보로 남긴다. About/Contact 콘텐츠, 테마 저장/전역 접근성, 운영 DB·검색/공유·배포는 후속 단계다.
- Tracking: Notion TASK-257/258/259 체크리스트·상태(완료)·완료일(2026-11-10)·결과 기록의 쓰기 성공 응답을 확인했다. TASK-260에 기존 Contact 320px 이슈를 추가했고 제안됨 상태를 유지했다.

## 2026-11-09 - 전체 프로젝트 목록·상세 패널 반응형 시안

- PM: 타입 인덱스 방향으로 전체 목록과 상세 패널을 확장하는 요청을 확인했다. 현재 `ProjectsContainerClient`, `ProjectCard`, `ProjectPanel`, 공개 데이터 13건과 대표 5건을 읽고 필터·URL 계약·패널 동작을 확인했다.
- Planner/Developer: 대표 5건과 나머지 8건을 중복 없는 열린 목록으로 구성했다. 기존 7개 필터 판정을 사용하고 각 행에서 상세를 열게 했다. 상세는 역할·소개·주요 기여·사용 기술 순서이며 영문 Hero, CIA 풀네임과 승인된 모든 한국어 데이터·기존 ID를 유지한다. 데스크톱 중앙 패널과 모바일 하단 패널을 시각화했다.
- QA: 기존 코드에서 추출한 필터 함수와 결과 집합을 대조했다(전체 13, 대표 5, 리딩·단독 6, 실시간 상담 7, 금융·보험 6, Hybrid·App 2, AI·Voice 3). 13건의 제목·역할·소개·기간·기여·기술·URL 대상을 대조하고 빈 기여 섹션 생략을 확인했다. 1440·1024·768·390·320px 목록/주요 패널, 320px 모든 13개 패널의 넘침·내용 잘림을 확인했다. Enter 열기, Tab/Shift+Tab 포커스 순환, Escape/배경/버튼 닫기, 트리거 포커스 복귀, 필터 유지, 폭·테마 전환, 모션 감소, JS 오류를 점검했다. 가로 넘침·JS 오류 없음. 모바일 필터를 4열 두 줄로 정돈하고 캡처를 시각 검토했다.
- Created outside repository: 대화 시안 폴더의 `projects-type-index.html`, `projects-type-index-review.html`, `projects-list-*.png`, `projects-panel-*.png`, 밝기별 패널 PNG.
- Modified: `docs/decisions.md`, `docs/task-log.md`, `docs/portfolio-improvement-plan.md`. 기존 홈·브랜드·대안 시안 원본 및 서비스 코드·의존성·DB·배포 변경 없음.
- Limits: 대화형 시안은 패널 전체를 자연 높이로 노출하고 링크 대상을 확인한다. 서비스 라우터의 실제 뒤로 가기·딥링크 진입 및 고정 뷰포트 내부 스크롤/본문 잠금은 구현 시 검증한다. 서비스 빌드·테스트는 변경이 없어 실행하지 않았다.
- Follow-up: 홈·목록·상세 디자인을 함께 검토한 뒤 구현 범위 확정. TASK-257은 디자인 승인 전 분석중 유지. DB·배포는 계속 후순위다.

## 2026-11-09 - 타입 인덱스 담당 역할 강조 및 요약 기본 노출

- PM: 타입 인덱스를 우선 방향으로 두고 역할이 더 잘 보이도록 하며 요약 노출을 다듬는 시안 요청을 확인했다. 서비스 구현·내용 재작성은 범위에 포함하지 않는다.
- Planner/Developer: 담당 역할을 22~25px·600 굵기로 강조하고 역할 표기를 추가했다. 데스크톱은 역할/요약 병렬, 모바일은 전체 본문 폭의 세로 흐름으로 구성했다. 요약 펼치기를 없애고 3건의 승인 요약을 처음부터 모두 표시한다. 기존 대안·보류한 브랜드 시안은 수정하지 않았다.
- QA: 1440·1024·768·600·390·320px에서 승인 제목·역할·요약·기간·순서·링크 ID를 대조했다. 요약 3건이 기본 표시되고 잘림이 없는지, 역할 22px 이상/요약 16px인지 확인했다. 가로 넘침·JS 오류 없음. 화면 폭/밝기 전환, 키보드 링크·테마 조작, 모션 감소 환경을 확인하고 데스크톱·모바일·다크 캡처를 시각 검토했다.
- Created outside repository: 대화 시안 폴더의 `home-type-index-refined.html`, `home-type-index-refined-review.html`, `refined-index-*.png`.
- Modified: `docs/decisions.md`, `docs/task-log.md`, `docs/portfolio-improvement-plan.md`. 서비스 코드·의존성·DB·배포 변경 없음. 서비스 빌드/테스트는 실행하지 않았다.
- Follow-up: 보완 디자인 검토 후 전체 목록·기존 상세 패널 검토. TASK-257은 분석중 유지. 보류한 브랜드 전시형과 이전 두 대안은 원본 보존.

## 2026-11-09 - 기존 시안 홀드 및 비카드형 홈 대안 2개

- PM: 직전 브랜드 전시형을 후보로 보존·보류하고 카드형이 아닌 시안 2개를 추가해 달라는 요청을 확인했다. 공개 내용·영문 Hero·브랜드 확인 결과와 모바일/데스크톱 검토 범위를 유지했다.
- Planner/Developer: `타입 인덱스`와 `에디토리얼`을 제작했다. 전자는 큰 작업명과 네이티브 요약 펼치기, 후자는 비대칭 편집 지면과 상시 노출 본문으로 구분한다. 기존 시안과 서비스 코드는 수정하지 않았다. 이전에 조사한 글자·읽기 위계를 활용했고 이번에는 추가 웹 조사를 하지 않았다.
- QA: 두 안을 1440·1024·768·390·320px에서 확인했다. 승인 제목·역할·요약·기간·ID 대조, 화면 폭/밝기/시안 전환, 네이티브 요약 펼치기와 Enter, 링크 대상, 가로 넘침·JS 오류를 검증했다. 모바일의 링크 읽기 순서와 헤더 줄바꿈, 에디토리얼 하단 본문 정렬을 보완했다. 실제 캡처로 데스크톱·모바일·다크를 검토했다.
- Created outside repository: 대화 시안 폴더의 `home-open-layouts.html`, `home-open-layouts-review.html`, `open-index-*.png`, `open-journal-*.png`.
- Modified: `docs/decisions.md`, `docs/task-log.md`, `docs/portfolio-improvement-plan.md`. 서비스 코드·의존성·DB·배포 변경 없음. 이전 브랜드 전시형 원본은 보존했다.
- Follow-up: 보류한 브랜드 전시형과 새 두 안의 디자인 비교. 최종 디자인 선택, 전체 목록·기존 상세 패널 검토는 남아 있다. TASK-257은 분석중을 유지한다.

## 2026-11-06 - 브랜드 확인 및 영문 표지 기반 홈 시안 정돈

- PM: CIA 풀네임, 오스템·NH 키컬러 오류, 프로젝트 Hero 영문화, 카드와 전체 UI의 연결감 개선 및 추가 레퍼런스 조사를 요청받았다. 홈 시안 수정 범위에서 진행했다.
- Planner: Gavin Nelson·Paco Coursey·Benji Taylor·Seán Halpin의 현재 데스크톱/모바일 화면을 조사했다. 직접 적용한 근거는 Seán의 표지 여백·일관된 모서리와 Paco의 텍스트 위계다. 오스템 공식 브랜드 가이드, NH 공식 CI 웹 색상표 및 NH투자증권 공식 사이트를 확인했다.
- Developer: 새 `home-brand-gallery.html`에 CIA 풀네임과 영문 표지, 오스템 오렌지·NH 파랑/노랑을 적용했다. 이어 붙인 색면을 간격 있는 표지로 바꾸고 설명 영역을 공통 배경으로 통합했다. 표지 높이·외곽 여백·본문 시작선·상세 링크를 정렬하고 모바일 전환 높이를 유지했다. 기존 시안은 보존했다.
- QA: 1440·1024·768·620·390·320px, 모바일 3건 전환, 키보드 Enter, 밝기/화면 폭 전환, 모션 감소, 링크 대상, 승인 한국어 문구·기간·ID, CIA 풀네임·영문 표지·색상 값을 확인했다. 데스크톱 설명 시작선과 모바일 높이, 표지 내부 경계 및 가로 넘침을 점검했다. 가로 넘침·JS 오류 없음. 라이트/다크와 주요 폭의 캡처를 시각 검토했다.
- Created outside repository: 대화 시안 폴더의 `home-brand-gallery.html`, `home-brand-gallery-review.html`, `brand-*.png`, `references-round2/` 조사 자료.
- Modified: `docs/decisions.md`, `docs/task-log.md`, `docs/portfolio-improvement-plan.md`. 서비스 코드·의존성·DB·배포 변경 없음. 서비스 빌드/테스트는 변경이 없어 반복하지 않았다.
- Follow-up: 수정 디자인의 사용자 검토, 전체 목록·기존 상세 패널 시안. TASK-257은 분석중을 유지한다.

## 2026-11-06 - 디자인 반복 지적 후 프로젝트 전시형 재설계

- PM: 사용자는 직전 시안이 기존과 같고 발전이 없다고 지적했다. 공개 텍스트 제약은 유지하면서 최초 화면·탐색·시각적 중심을 바꾸는 수정으로 진행했다.
- Planner/Developer: 큰 자기소개를 아래로 옮기고, 대표 3건을 색면·작업명 조판으로 펼쳤다. 데스크톱은 3건을 동시에 보여주고 모바일은 프로젝트 선택기로 한 장씩 읽는다. 선택 시 모바일 영역 높이를 유지한다. 새로운 고객사 자료·문구·이미지·폰트를 추가하지 않았다.
- QA: 기존 C/D 및 직전 텍스트 폴리오와 화면 구성·정보 위치를 비교했다. 1440·1024·768·620·390·320px, 모바일 3건 선택·키보드·링크 대상, 밝기/폭 전환, 모션 감소, 승인 제목·기간·역할·요약·ID 대조를 확인했다. 가로 넘침·JS 오류 없음. 역할 영역의 기준선과 모바일 카드 경계를 보완하고 재검증했다.
- Created outside repository: 대화 시안 폴더의 `home-work-gallery.html`, `home-work-gallery-review.html`, `gallery-*.png`.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`. 직전 시안은 거절로 기록하고 보존한다. 서비스 코드·의존성 변경 없음.
- Follow-up: 새 전시형의 사용자 디자인 검토, 전체 목록·기존 상세 패널. 기술 검증을 디자인 승인으로 취급하지 않는다. TASK-257은 분석중, DB·배포는 후순위 유지.

## 2026-11-06 - 공개 텍스트 전용 홈 반응형 시안

- PM: 공개 제한이 많은 B2B 경력을 텍스트만으로 보여주는 시안이 요청 범위다. 승인 소개·홈 3건과 공개 제한을 재확인했다. 기존 레퍼런스로 방향이 충분해 추가 조사는 하지 않았다.
- Planner/Developer: 글자 중심 표지·바로가기 목차·넓은 세로 챕터를 구성했다. 모바일은 제목·기간·역할·요약 순서로 재편집하고 설명을 항상 노출한다. 이미지나 고객사 자료를 사용하지 않았다.
- Created outside repository: 대화 시안 폴더의 `home-text-folio.html`, `home-text-folio-review.html`, `text-folio-*.png`.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`. 서비스 파일·의존성·기존 시안은 변경하지 않았다.
- QA: 1440·1024·768·390·320px의 화면 경계, 문구 정확성, 대표 순서·기간·링크 ID, 데스크톱/모바일 전환, 목차 키보드 조작, 링크 대상 안내, 밝기 전환 검증. 모바일 자기소개 제목 줄바꿈을 수정한 뒤 전체 폭을 재검증했다. 가로 넘침·JS 오류 없음. 데스크톱·태블릿·모바일·다크 캡처를 시각 검토했다. 서비스 빌드·테스트는 변경이 없어 반복하지 않았다.
- Follow-up: 사용자 디자인 피드백, 전체 목록·기존 상세 패널 시안. TASK-257은 분석중을 유지하고 DB·배포는 계속 후순위다.

## 2026-11-05 - 개발자 포트폴리오 레퍼런스 조사 및 방향 재설정

- PM: A~E가 여전히 평범하다는 피드백을 받아 실제 레퍼런스부터 확인하는 조사로 전환했다. 목표는 시각적 개성과 경력 정보의 읽기 흐름을 함께 개선하는 것이다.
- Planner: Olivier·Dennis를 시각 방향의 주 참고, Brittany를 정보 위계 참고로 제안했다. Rauno·Emil·Robb 및 Bruno와의 차이를 비교하고 적용 여부를 계획에 기록했다. 이름·직무의 조판, 넓은 프로젝트 챕터, 역할·요약 기본 노출을 다음 시안 기준으로 제안했다.
- Developer: 서비스 구현 없음. 조사 캡처와 기존 계획·결정·작업 기록만 작성했다. 새 완성 시안은 이번에 제작하지 않았다.
- QA: 실제 6개 사이트를 1440px·390px로 캡처·시각 검토했다. Rauno 가로 탐색·Olivier 작업 목록·Dennis Work 페이지 확인. Bruno는 공식 설명만 확인했으며 3D 체험 검증으로 표현하지 않는다. Dennis 홈 스크롤 자동화 제약을 기록했다.
- Created outside repository: 대화 시안 폴더의 `references/` PNG와 조사 URL·페이지 제목을 담은 `research.json`.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`. 서비스 코드·의존성 변경 없음. 기존 미커밋 변경을 보존한다.
- Follow-up: 레퍼런스 기반 반응형 홈 시안, 전체 목록·기존 상세 패널, 최종 디자인 확인. TASK-257은 분석중이며 DB·배포 이연을 유지한다.

## 2026-11-05 - 홈 구조 전면 재검토 D/E 시안

- PM: 기존 배치를 유지하려는 접근을 바꾸라는 사용자 지시를 반영했다. 구조 변경이 가능한 시안 작업이며 서비스 구현은 범위 밖이다.
- Planner/Developer: D는 프로젝트 선택 중심 첫 화면, E는 항목별 경력 비교 화면으로 설계했다. 자기소개를 아래로 옮기고 모바일 탐색도 별도로 구성했다.
- Created: 대화형 `/Users/paris/.codex/visualizations/2026/11/05/01a1a9f0-de37-7002-8619-5384d381b1fa/home-new-structures.html`, 같은 폴더의 검토 문서 및 explorer/comparison PNG.
- Modified: 계획·결정·본 작업 기록. 서비스 파일과 A/B/C 원본은 시작 시 해시와 대조해 변경 없음.
- QA: 1440·1024·768·390·320px 검사, 프로젝트 3건 선택·키보드·상세 링크 대상, 비교 항목 3종·행 정렬·밝기 전환 확인. 가로 넘침·JS 오류 없음. 승인 홈 문구·소개와 정확히 대조했고 데스크톱·모바일 이미지를 검토했다. 문서 공백 검사 통과. 서비스 빌드는 반복하지 않았다.
- Notion TASK-257에 재검토 지시·D/E 결과를 기록했다. 최종 디자인과 전체 목록/기존 상세 패널 검토는 남아 있으며 DB·배포는 계속 후순위다.

## 2026-11-05 - 시안 A 보존 및 홈 B·C 제작

Role Flow:
- PM: 기존 시안을 A로 남기고 채용 검토의 가독성과 디자인 완성도를 높인 대안을 요청받았다. 승인 문구·대표 순서·공개 제한을 유지한다.
- Planner: B는 소개/프로젝트의 병렬 배치, C는 큰 제목/세 열 프로젝트 비교로 차별화한다. 데스크톱·모바일 모두 같은 승인 정보를 제공한다.
- Developer: 별도 대화형 비교 시안, 검토용 렌더링, 폭별 PNG를 생성했다. 기존 A와 서비스 코드는 수정하지 않았다.
- QA: B/C 모두 1440·1024·768·390·320px에서 가로 넘침·JS 오류·대표 순서·소개 표시를 검사했다. 기본 안 선택, 폭 전환, 모바일 메뉴, 밝기 전환과 링크 피드백을 확인했다. 각 안의 데스크톱·모바일 이미지를 검토하고 내비게이션 클래스의 미리보기 공통 스타일 충돌을 고친 뒤 재검증했다.

Files:
- Created outside repository: `/Users/paris/.codex/visualizations/2026/11/05/01a1a9f0-de37-7002-8619-5384d381b1fa/home-design-options.html`, `home-design-options-review.html`, `casebook-*.png`, `typography-*.png`.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- A 원본과 기존 서비스·설정·의존성 파일은 시작 시 해시 대조로 보존 확인. `git diff --check` 통과. 서비스 빌드·테스트는 재실행하지 않았다.

Status / Follow-up:
- Notion TASK-257에 A 보존과 B/C 시안·검증·남은 검토를 기록했다. 디자인은 선택 전 제안 상태다.
- 사용자가 선호하는 방향을 정하면 홈 시안을 구체화하고 전체 목록·기존 상세 패널을 이어서 검토한다. DB·배포는 계속 후순위다.

## 2026-11-05 - 홈 첫 화면·대표 프로젝트 3건 시안 제작

Role Flow:
- PM: 승인 문구를 유지한 홈 첫 화면과 대표 3건의 모바일·데스크톱 시안이 요청 범위다. 기존 홈은 Hero → SkillSet → ProjectsPreview 순서임을 확인했다.
- Planner: 소개 다음에 대표 작업을 배치하고 두 열/한 열 구성과 글자·여백 위계를 검토할 수 있는 시안으로 한정했다. 의존성 추가·서비스 구현 없음.
- Developer: 대화형 시안과 검토용 렌더링·폭별 PNG를 생성했다. 화면 크기 전환, 모바일 메뉴, 밝기 전환, 링크 대상 확인을 로컬에서 동작하게 했다.
- QA: 1440·1024·768·390·320px에서 가로 넘침과 JS 오류 없음. 대표 순서, 메뉴 열기/닫기, 화면 전환, 링크 대상 피드백, 밝기 전환 검증 및 데스크톱·모바일 이미지 검토. 검증 후 모바일 소개의 직군 이름 묶음 줄바꿈을 보완하고 다시 점검했다.

Files:
- Created outside service repository: `/Users/paris/.codex/visualizations/2026/11/05/01a1a9f0-de37-7002-8619-5384d381b1fa/home-layout-proposal.html`, `home-layout-review.html`, 폭별 검토 PNG.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- 서비스 코드·설정·의존성·공개 이미지·기존 미커밋 변경은 수정하지 않았다. 시작 시 파일 해시와 대조했다. `git diff --check` 통과. 서비스 테스트·빌드는 변경 범위가 아니므로 반복하지 않았다.

Status / Follow-up:
- Notion TASK-257을 분석중으로 갱신하고 시안 범위·산출물·검증·후속을 기록했다. 사용자 디자인 확인은 남아 있다.
- 홈 피드백 반영 후 전체 목록·기존 상세 패널을 검토한다. 기술 스택의 최종 배치, About·Contact, 접근성·모션, DB·배포는 기존 후속 계획에 유지한다.

## 2026-11-05 - DB·배포 이연 및 다음 작업 확인

- 사용자 요청으로 운영 DB·배포는 후순위로 이연했다. 다음은 TASK-257 실제 콘텐츠 디자인 검토이며 홈 첫 화면·대표 3건부터 보는 순서를 권장한다.
- 계획·결정·작업 기록과 Notion TASK-256에 이연 지시를 기록했다. 완료되지 않은 DB 작업을 완료로 바꾸지 않았다.
- 서비스 코드 변경 없음. 기록과 기존 3단계 선행 조건을 대조하고 문서 공백 검사를 수행했다. 시안 제작·추가 구현은 시작하지 않았다.

## 2026-11-05 - 승인 콘텐츠 사이트 데이터 반영 및 로컬 검증

Role Flow:
- PM: 자기소개 확정과 사이트 데이터 반영의 명시적 승인을 확인했다. 공개 13건·대표 5건·홈 3건과 기존 필터/패널/링크 유지가 범위다.
- Planner: 기존 Project 계약을 유지하고 홈 요약만 기존 홈 전용 매핑으로 분리했다. 미커밋 카드 스타일을 보존하고 콘텐츠 표시 조건만 조정했다.
- Developer: 자기소개·프로젝트 문구·기간·대표 순서를 반영하고 과장·중복 기여 문장을 제거했다. 새 라이브러리·이미지·상세 UI는 추가하지 않았다.
- QA: 아래 로컬 검증을 통과했다. 운영 DB 원본 확인은 미완료로 구분한다.

Files:
- Service modified: `src/constants/projects.ts`, `src/components/sections/Hero.tsx`, `src/components/sections/ProjectsPreview.tsx`, `src/components/sections/ProjectCards.tsx`, `src/components/projects/ProjectsContainerClient.tsx`, `src/components/projects/ProjectCard.tsx`, `src/components/projects/ProjectPanel.tsx`.
- Docs modified: `docs/portfolio-improvement-plan.md`, `docs/project-context.md`, `docs/decisions.md`, `docs/task-log.md`.
- 기존 변경을 보존했다. `AGENTS.md`, `tailwind.config.mjs`, `workflows/portfolio-cycle.md`, 의존성·lockfile·DB 로더·API·배포 설정은 이번 구현에서 수정하지 않았다.

Summary:
- 삼성전자 CIA·삼성증권 파서 뷰어·LG전자 eCRM을 추가해 공개 데이터 13건으로 정리했다. 기존 10건 ID를 유지했다. SC 2026 유지보수와 Roche는 제외했다.
- 대표는 삼성전자 CIA·오스템·NH·교보톡톡·삼성증권, 홈은 앞의 3건 순서다. 홈·상세에 각각 승인된 소개를 유지했다.
- 대표 외 8건은 승인된 소개만 표시한다. 카드의 빈 기여 영역은 소개로 대체하고 상세의 빈 기여 제목은 숨겼다. 홈 소개의 3줄 제한을 제거했다.
- AI 서비스 분류와 AI 개발 도구 활용을 구분해 오스템이 AI 필터에 섞이지 않게 했다.

Verification:
- `npm run lint`, `npx tsc --noEmit`, `npm test -- --runInBand`(기존 2건), `npm run build`, `git diff --check` 통과.
- 기존 환경에 있던 Playwright로 390·768·1440px에서 홈 순서, 전체 13건·대표 5건, 필터 7종, 13건 전체 상세 링크와 승인 요약·기여 문구를 확인했다. Enter 열기·Tab 포커스 유지·Escape 닫기·트리거 포커스 복귀·본문 스크롤 잠금/복원을 확인했다. 가로 넘침과 브라우저 실행 오류 없음.
- 홈 3건의 실제 링크 클릭으로 각 상세 패널 이동을 추가 확인했다. 스크린샷을 생성해 홈·카드·상세의 모바일/태블릿/데스크톱 표시를 검토했다. 검증 스크립트·이미지는 임시 경로 `/tmp/paris-content-update`에만 보관했다.
- 로컬 `/api/projects`의 13건이 constants와 일치한다. 격리된 로더 검증에서 DB 미사용·URL 없음·쿼리 실패는 fallback을 사용하고 성공 시 DB 행만 반환함을 확인했다. 실제 운영 DB 테스트로 표현하지 않는다.
- 설정 값을 노출하지 않고 유효 로컬 설정 USE_DB=false를 확인했다. 설정된 DB 읽기 연결은 ECONNREFUSED로 실패했다. DB 행·운영 환경은 확인하지 못했고 쓰기·배포·커밋은 하지 않았다.
- Notion TASK-256 체크리스트와 승인/구현 결과·운영 후속 항목을 갱신했고 성공 응답을 확인했다. 운영 원본 확인이 남아 분석중을 유지한다.

Next Candidates:
- 운영 데이터 원본과 연결을 확인한 뒤 DB 사용 환경에 승인 13건을 반영하고 배포 결과를 검증한다. 현재 DB 조회 성공 시 로컬 데이터가 합쳐지지 않으므로 constants 수정만으로 운영 DB 반영을 주장할 수 없다.
- 다음 디자인 단계(TASK-257)는 별도 계획 범위이며 이번 콘텐츠 반영으로 자동 착수하지 않는다. About·Skills·헤더 등 나머지 콘텐츠/디자인·접근성·배포 정비는 기존 후속 단계에 유지한다.

## 2026-11-05 - 자료 정리 완료 기준 점검과 Task 상태 정합화

Summary:
- 사용자 상태 질문에 따라 TASK-255·256의 현재 속성과 완료 기준을 확인했다.
- TASK-255는 확인 사실·미확인 항목·개인 기여·공개 범위의 구분 및 사용자 확인을 충족했다. 기존 분석중 상태와 상단 미완료 요약을 갱신하고 완료 처리한 성공 응답을 확인했다.
- 정확한 일자·일부 과거 구현 기법·기존 기록의 재검증은 미확인으로 남길 수 있는 항목이며, 원자료 Task를 계속 미완료로 유지할 사유로 삼지 않았다.
- TASK-256은 자기소개 확정과 실제 데이터 반영·기능 검증·DB/로컬 원본 차이 확인이 남아 있어 분석중을 유지한다.

Files:
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`. 신규 파일·서비스 코드 변경 없음.

Verification:
- Notion 현재 완료 조건·누적 사용자 확인·문구 승인을 대조했다. 문서 공백·파일 해시 검사 수행. 코드 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 자기소개를 확정한 뒤 승인된 콘텐츠의 실제 데이터 반영 범위를 구체화한다.

## 2026-11-05 - 채용·글쓰기 관점 에이전트로 홈 자기소개 보완

Summary:
- 사용자의 명시적 요청에 따라 채용 검토 관점과 한국어 카피 편집 관점의 에이전트 2개를 활용했다. 각 에이전트는 파일 수정 없이 메시지·표현을 검토했다.
- 공통 추천인 직접 설계·구현과 팀의 기술 방향 조율 경험을 중심으로 자기소개를 수정했다. 기술 목록과 역할의 반복 나열을 줄였다.
- 제안 문구를 실제 경력에 대조하고 과거 거절한 슬로건·과장된 네이티브 전문성·전체 프로젝트 총괄 표현을 제외했다. 자기소개는 계속 검토 초안이다.

Files:
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`. 신규 파일·서비스 코드 변경 없음.

Verification:
- 두 에이전트 의견·사용자 확인 경력·거절 표현 대조, 문서 공백·파일 해시 검사. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 추천 자기소개 문구를 검토한다. 불필요하게 여러 안이나 기존 프로젝트 전체 문구를 재출력하지 않는다.

## 2026-11-05 - 나머지 소개 승인 및 홈 자기소개 초안 작성

Summary:
- 나머지 8건의 제목·소개 문구 승인을 기록했다. 기존 기간·역할을 새롭게 재검증한 것으로 처리하지 않았다.
- 현재 Hero의 인사·직무 문구와 과거 거절 표현을 확인한 뒤 프론트엔드 개발 경험, 프로젝트별 앱 연동·구조 설계·팀 리딩에 근거한 자기소개 초안을 작성했다.
- 추상적인 슬로건·약속·불필요한 연차/성과 수치 없이 제목 한 문장과 설명 두 문장으로 정리했다. 자기소개는 미승인 상태다.

Files:
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`. 신규 파일·서비스 코드 변경 없음.

Verification:
- Hero 현재 구현·거절 문구·확인된 기여 대조, 문서 공백·파일 해시 검사. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 홈 자기소개 문구를 검토한다. 이후 실제 콘텐츠를 적용한 디자인 검토와 서비스 구현 범위는 별도로 정한다.

## 2026-11-05 - 대표 상세 승인 및 나머지 8건 소개 편집

Summary:
- 사용자 승인에 따라 대표 5건 상세를 확정하고 원문을 재출력하지 않았다.
- 현재 프로젝트 데이터와 확인된 원자료를 대조해 LG·SC 기존 구축·음성 PoC·교보 다이렉트·Festival Life·아모레퍼시픽·카카오 솔루션·하나톡 소개를 편집했다.
- ‘국내 최대’, 근거가 부족한 성능·안정성·비용·속도 향상과 반복된 기술 나열을 제거했다. Festival Life는 기획·관리자 웹 범위를 제목에 명시했다.
- LG 승인 문구와 공개 제한을 유지하고 SC 후속 유지보수는 기존 구축 소개에 합치지 않았다. 나머지 편집안은 아직 최종 승인 전이다.

Files:
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`. 신규 파일·서비스 코드 변경 없음.

Verification:
- 기존 데이터·사용자 확인 내용·공개 범위를 대조하고 문서 공백·파일 해시로 변경 범위를 확인했다. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 나머지 소개 편집안을 검토하고 홈 자기소개 문구를 정리한다. 서비스 데이터 반영은 별도 범위다.

## 2026-11-05 - 대표 5건 상세 소개의 불필요한 문장 점검

Summary:
- NH 정상 조회 확인과 한 달 인수인계 경위, 업무 분배 반복을 공개 초안에서 제거했다. 원자료는 유지했다.
- 삼성전자의 중복 협의·장황한 오류 처리 표현, 오스템의 도입부 업무 반복, 교보톡톡의 채널·팀 리딩·웹 개발 반복을 줄였다.
- 삼성증권의 구체적 근거 설명 없는 일반적인 구조 정리 문장을 공개 초안에서 제외했다. 해당 작업 근거는 원자료에 유지했다.
- 외주 조율·여러 직군 협업·PC/앱 범위·AI 활용과 직접 검토/수정/검증 등 중요한 역할 구분은 유지했다. Notion TASK-256의 해당 초안도 수정하고 성공 응답을 확인했다.

Files:
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`. 신규 파일·서비스 코드 변경 없음.

Verification:
- 수정 초안과 원자료의 구분, 역할 보존, 문서 공백·파일 해시를 확인했다. 문서 작업으로 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 전체 재출력 없이 남은 문구 검토를 진행한다. 후속 편집은 변경점 중심으로 보고한다.

## 2026-11-05 - 교보톡톡 사용자·고객 채널 구분 정정

Role Flow:
- PM: 교보톡톡 PC 웹·모바일 앱의 사용자는 FP이고 일반 고객은 카카오톡으로 대화한다는 사용자 정정을 확인했다.
- Planner: 원자료와 상세 초안의 서비스 소개를 수정하고 기존 개발·협업 책임은 유지했다.
- Developer: 계획·작업 기록을 갱신했다.
- QA: 사용자 구분과 문구 대조, 문서 공백·파일 해시 검사를 수행했다.

Summary:
- FP와 고객이 같은 앱·웹을 사용한다는 잘못된 설명을 바로잡았다.
- FP의 상담 화면과 고객의 카카오톡 채널을 구분해 상세 초안에 반영했다. 제목과 나머지 기여 범위는 유지한다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB·원본 소스.

Verification:
- 사용자 주석 대조, `git diff --check`, 파일 해시 비교. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 수정한 서비스 소개를 포함해 대표 상세 초안을 검토한다.

## 2026-11-05 - 대표 5건 상세의 형식적 마무리 제거 및 재제시

Role Flow:
- PM: 오픈·완료만 알리는 문장을 제외하고 대표 5건을 다시 보여달라는 요청을 확인했다.
- Planner: 승인 홈·원자료는 유지하고 공개 상세 초안의 기여 중심 서술을 정리했다.
- Developer: 계획 상세 초안·결정·작업 기록과 Notion TASK-256의 해당 본문을 갱신했다.
- QA: 원자료 상태 보존, 사용자 피드백 반영과 문서 공백·파일 해시를 확인했다.

Summary:
- 삼성전자·교보톡톡·삼성증권의 일반적인 오픈/실사용 마무리와 NH의 완료 문장을 공개 초안에서 제외했다.
- NH의 실제 구조 반영·상담원 정상 조회 결과는 유지했다. 외주 조율, 교보의 PC·앱 및 여러 직군 협업, 통합한 오스템 AI 활용 설명도 유지했다.
- 역할 분담은 원자료에 남기고 공개 초안의 방어적인 부연은 줄였다. 상세 전체는 여전히 사용자 검토 초안이다.
- Notion 본문 수정 성공을 확인했다. 서비스 구현·배포는 수행하지 않았다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB·원본 프로젝트 및 기존 변경.

Verification:
- 원자료와 승인 홈 문구 보존, 초안 금지 문장 제외 및 구체적 결과 유지 확인. `git diff --check`와 파일 해시 비교. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 대표 5건 상세의 문구를 검토하고 나머지 프로젝트·자기소개 편집을 진행한다.

## 2026-11-05 - 대표 상세 초안의 사용자 주석 5건 반영

Role Flow:
- PM: 외주 조율·PC 서비스·여러 직군 협업의 누락과 AI 문구 중복·단일 이슈 과강조를 확인했다.
- Planner: 승인 홈 문구는 유지하고 NH·오스템·교보톡톡 상세 초안만 수정했다.
- Developer: 계획의 원자료·상세 초안, 결정·작업 기록과 Notion TASK-256 본문을 갱신했다.
- QA: 주석 5건과 수정 문구를 대조하고 문서 공백·파일 해시 검사를 수행했다.

Summary:
- NH의 외주 개발 소통·조율을 명시했다. 구현 주체를 본인으로 바꾸지는 않았다.
- 오스템 AI 활용 설명을 반복된 단독 담당 문장 없이 본문으로 통합했다. AI 활용과 직접 검토·수정·검증 사실은 유지했다.
- 교보톡톡의 PC 웹·모바일 앱 범위와 기획·디자인·퍼블리싱·BE·앱 개발자 협업을 추가했다. 키보드 개별 사례는 공개 초안에서 제외했다.
- Notion의 해당 초안 5개 부분을 수정하고 성공 응답을 확인했다. 수정 문구는 검토 전이며 전체 완료 처리하지 않았다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB·원본 프로젝트 및 기존 변경.

Verification:
- 사용자 주석 대조, `git diff --check`, 작업 전후 파일 해시 비교. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 수정한 상세 설명을 검토하고 나머지 대표 문구의 협업 기여·서비스 범위를 점검한다.

## 2026-11-05 - 홈 3건 문구 승인 및 대표 5건 상세 초안 작성

Role Flow:
- PM: 홈 문구 전체 승인과 대표 상세 설명 편집 요청을 확인했다.
- Planner: 현재 ProjectPanel의 요약·역할·기간·기여·기술 구조를 확인하고 UI 변경 없이 문구 편집으로 범위를 정했다.
- Developer: 계획에 홈 승인 원문과 대표 5건 상세 초안을 작성하고 승인 결정을 기록했다.
- QA: 사용자 확인·기존 소스 근거와 문구를 대조하고 문서 공백·파일 해시로 변경 범위를 확인했다.

Summary:
- 홈 제목·소개·역할은 삼성전자 CIA → 오스템 → NH투자증권 순서로 승인됐다.
- 대표 5건 상세 초안에 역할·주요 작업·판단·결과와 개인/팀 구현 구분을 담았다. 오스템 AI 활용 문구는 승인 원문을 유지했다.
- 삼성전자 화면 공개 제외, 삼성증권 별도 유사 데모 조건을 편집 메모로 분리했다. 미확인 기법·정량 성과를 추가하지 않았다.
- Notion TASK-256을 분석중으로 전환하고 대표 선정 체크 및 승인 홈 문구·상세 초안을 기록했다. 쓰기 성공 응답을 확인했다. TASK-255에는 편집 작업 연결을 남겼으며 전체 완료로 처리하지 않았다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB·패키지/잠금 파일·원본 프로젝트 및 기존의 무관한 변경.

Verification:
- ProjectPanel 현재 구조 확인, 사용자 승인 원문·역할·기간·공개 범위 대조, `git diff --check`, 작업 전후 파일 해시 비교.
- 문서 작업으로 앱 실행·코드 테스트·빌드·배포는 수행하지 않았다.

Open Questions:
- 확장한 상세 초안의 표현과 공개 범위 검토. 삼성전자·오스템의 기존 승인 문구 외 추가 설명은 초안이다.
- 나머지 프로젝트 문구·홈 자기소개와 후속 데이터 반영 범위.

Next Candidates:
- 대표 상세 초안을 하나씩 검토하고 실제 콘텐츠에 맞춘 디자인 검토의 선행 조건을 정리한다.

## 2026-11-05 - NH 홈 문구 승인 및 홈 3건 재제시

Role Flow:
- PM: 수정한 NH 홈 문구의 사용자 승인을 확인했다.
- Planner: 기존 삼성전자·오스템 초안과 승인된 NH 문구를 확정된 홈 순서로 제시했다.
- Developer: 계획·결정·작업 기록에 NH 승인 문구를 저장했다.
- QA: 승인 원문과 문서 대조, 문서 공백·파일 해시 검사를 수행했다.

Summary:
- NH 홈 소개와 역할에서 아키텍처 재구성 표현을 확정했다.
- 홈 3건 순서는 삼성전자 CIA → 오스템 → NH투자증권이다. 이번 NH 승인을 삼성전자·오스템 홈 초안 전체 승인으로 확대하지 않는다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB 및 기존 변경.

Verification:
- 사용자 승인 원문 대조, `git diff --check`, 파일 해시 비교. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 홈 3건 문구를 검토한 뒤 나머지 대표 프로젝트 상세 설명을 정리한다.

## 2026-11-05 - NH 홈 문구의 아키텍처 재구성 범위 정정

Role Flow:
- PM: 사용자가 NH 기여를 DB 재설계보다 아키텍처 재구성으로 표현해야 한다고 정정했다.
- Planner: 원자료와 대표 비교 설명을 보완하고 홈 수정 초안을 미승인으로 기록했다.
- Developer: 계획·작업 기록을 수정했다.
- QA: 사용자 정정 대조, 문서 공백·파일 해시 검사를 수행했다.

Summary:
- 상담 이력 저장·조회 관련 아키텍처 재구성으로 표현한다. 구체적인 서비스 구성요소나 전체 시스템 재구축 범위를 추정하지 않는다.
- 본인 설계·챗봇 주요 로직 개발과 외주 개발자의 상담이력서비스 백엔드 구현은 계속 구분한다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB·원본 프로젝트.

Verification:
- 사용자 주석 대조, `git diff --check`, 파일 해시 비교. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 수정한 NH 문구와 홈 3건 초안을 검토한다.

## 2026-11-05 - 오스템 공개 문구 승인과 다음 콘텐츠 작업 정리

Role Flow:
- PM: 수정한 오스템 문구의 사용자 승인을 확인하고 다음 작업을 검토했다.
- Planner: TASK-256의 문구 편집 범위에 맞춰 홈 3건, 나머지 대표 2건, 전체 프로젝트와 소개 문구 순서를 제안했다.
- Developer: 계획·결정·작업 기록에 승인 상태와 문구를 반영했다.
- QA: 승인 원문 대조, 문서 공백·파일 해시 검사를 수행했다.

Summary:
- AI 활용과 직접 코드 검토·세부 수정·실행 검증을 함께 설명하는 오스템 상세 문구를 승인받았다.
- Notion TASK-256은 제안됨 상태이며 서비스 데이터 반영까지 포함한 작업이다. 문구 승인만으로 구현 승인이나 완료 처리하지 않는다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB 및 기존의 무관한 변경.

Verification:
- 승인 원문 대조, `git diff --check`, 파일 해시 비교. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 삼성전자 CIA·오스템·NH투자증권의 홈 제목·소개와 주요 기여부터 편집한다.
- 교보톡톡·삼성증권 상세, 나머지 프로젝트 요약 및 홈 자기소개를 순서대로 검토한다. 미확인 사실은 해당 문구 작업에서만 필요한 만큼 확인한다.

## 2026-11-05 - 오스템 직접 코드 검토·수정 기여 보완 및 문구 수정

Role Flow:
- PM: 사용자가 iOS 설명의 축약으로 본인 기여가 빠진 점을 지적하고 코드별 검토·직접 세부 수정을 확인했다.
- Planner: 기존 문장을 거절 기록에 남기고 AI 활용과 직접 수행을 함께 설명하는 초안을 작성했다.
- Developer: 계획·결정·작업 기록을 갱신했다.
- QA: 사용자 정정과 문구 일관성, 문서 공백·파일 해시를 확인했다.

Summary:
- 학습·Android 선행 개발 순서는 원자료로 유지한다. 공개 설명은 코드 검토·수정 방향 결정·직접 세부 수정·앱 실행 검증을 포함하도록 보완했다.
- 기존 축약 문장은 재사용하지 않고 새 문구는 미승인 초안으로 유지한다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB·원본 소스.

Verification:
- 사용자 주석과 사실 대조, `git diff --check`, 파일 해시 비교. 앱 실행·테스트·빌드는 수행하지 않았다.

Next Candidates:
- 수정한 오스템 공개 문구를 검토한다.

## 2026-11-05 - 오스템 Android 학습·iOS 확장 과정 보완

Role Flow:
- PM: 앱 개발을 새로 학습한 과정, Android 선행 개발과 AI를 통한 iOS 작업, 본인 실행·검증을 확인했다.
- Planner: 기존 네이티브 숙련도를 전제하지 않는 상세 설명안을 작성하고 미승인으로 유지했다.
- Developer: 계획 원자료와 작업 기록을 보완했다.
- QA: 사용자 설명 대조와 문서 공백·파일 해시 검사를 수행했다.

Summary:
- 영상 강의로 Android 개발을 학습하고 테스트폰이 있는 Android부터 개발했다. 이후 Android 구현을 참고하도록 AI에 요청하며 iOS 작업을 진행했다.
- 앱 실행·검증은 모두 본인이 수행했다. 앞서 확인한 제안 검토·수정 방향 결정도 함께 기록한다.
- 공개 문구는 학습 과정·AI 활용과 본인 책임을 함께 설명하는 초안이며 아직 승인되지 않았다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB·원본 앱 소스.

Verification:
- 사용자 발언 대조, `git diff --check`, 파일 해시 비교. 이번 작업에서는 앱 실행·테스트·빌드를 수행하지 않았다.

Next Candidates:
- 수정한 오스템 설명을 공개 콘텐츠 편집에 반영할지 검토한다. 홈 선정·순서는 유지한다.

## 2026-11-05 - 오스템 AI 활용 범위와 개인 판단·검증 확인

Role Flow:
- PM: AI 활용이 코드 작성·구조 설계·문제 해결 방향까지 포함됐으며 본인이 검토·수정 방향 결정·실제 앱 테스트를 맡았다는 사실을 확인했다.
- Planner: AI 활용과 단독 담당의 책임 범위를 구분한 공개 문구를 제안 상태로 기록했다.
- Developer: 계획 원자료·작업 기록을 갱신했다.
- QA: 사용자 발언 대조와 문서 공백·파일 해시 검사를 수행했다.

Summary:
- 오스템을 모든 코드·설계를 혼자 고안한 작업으로 과장하지 않고, AI를 활용하면서 개발을 맡아 검토·수정 방향 결정·실제 앱 테스트를 직접 수행한 경험으로 정리한다.
- 공개 상세 설명에 AI 활용과 본인 역할을 함께 명시하는 안은 미승인 제안이다. 기존 홈 선정·순서는 유지한다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB·원본 앱 소스.

Verification:
- 사용자 발언과 문구 대조, `git diff --check`, 파일 해시 비교. 이번에는 앱 테스트·빌드를 실행하지 않았다.

Next Candidates:
- 제안한 공개 표현을 사용자와 검토하고 승인된 내용으로 프로젝트 문구를 편집한다.

## 2026-11-05 - 홈 순서 확정 및 오스템 AI 활용 사실 추가

Role Flow:
- PM: 홈 3건 순서 승인과 오스템 AI 에이전트 활용에 관한 사용자 보완을 확인했다.
- Planner: 선정 확정과 AI 활용 방식의 추가 확인을 구분했다.
- Developer: 계획·결정·작업 기록을 갱신했다.
- QA: 승인 범위·발언 대조, 문서 공백과 파일 해시로 변경 범위를 확인했다.

Summary:
- 홈 순서는 삼성전자 CIA → 오스템 → NH투자증권으로 확정했다.
- 오스템 앱 개발에 AI 에이전트를 많이 활용했다는 사실을 원자료에 추가했다. 활용 방식·개인 판단/검증 범위 및 공개 표현은 추가 확인한다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB·원본 소스.

Verification:
- 사용자 발언 대조, `git diff --check`, 작업 전후 파일 해시 비교. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 오스템 AI 활용과 본인 역할을 구분해 설명한 후 공개 문구를 검토한다.

## 2026-11-05 - 대표 5건·홈 3건 구성 확정 및 홈 후보 제안

Role Flow:
- PM: 대표 프로젝트 5건과 홈 노출 3건에 대한 사용자 승인을 확인했다.
- Planner: 책임 범위와 경험의 차이를 기준으로 NH투자증권·오스템·삼성전자 CIA 홈 추천안을 제시하고 미승인으로 구분했다.
- Developer: 계획·결정·작업 기록에 선정 상태를 반영했다.
- QA: 승인 범위와 추천안을 구분하고 문서 공백·파일 해시로 변경 범위를 확인했다.

Summary:
- 대표 5건은 NH투자증권·교보톡톡·오스템·삼성전자 CIA·삼성증권 파서 뷰어다.
- 홈에는 3건을 보여주되 대상·순서·UI는 미확정이다. 이번 변경은 문서만 해당한다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB 및 기존 변경.

Verification:
- 사용자 승인 대조, `git diff --check`, 작업 전후 파일 해시 비교. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 홈 3건의 대상과 순서를 검토하고 실제 공개 문구를 정리한다.

## 2026-11-05 - NH투자증권 구현 분담·정상 반영·기간 확인

Role Flow:
- PM: DB 설계와 상담이력서비스·챗봇 구현 주체를 구분하고 결과·실제 참여 기간을 확인했다.
- Planner: 전체 참여 기간을 PL 기간으로 확대하지 않고 대표 후보 비교 자료를 보완했다.
- Developer: 계획 원자료·작업 기록을 갱신했다.
- QA: 사용자 정정과 결과·기간을 대조하고 문서 공백·파일 해시를 확인했다.

Summary:
- DB 구조 설계는 본인, 상담이력서비스 백엔드는 외주 개발자, 챗봇 주요 로직은 본인이 직접 구현하고 나머지를 팀원에게 분배한 것으로 구분했다.
- 재설계 반영 후 상담원 화면에서 정상 조회를 직접 확인했으며 프로젝트도 마무리됐다.
- 전체 참여 기간은 2022.03~2024.10이다. PL 전환 시점과 세부 구현 기법은 추정하지 않는다.
- NH투자증권·교보톡톡·오스템·삼성전자 CIA·삼성증권 5건을 주요 후보로 검토하는 보완안을 제안 상태로 기록했다. 최종 선정·홈 노출 개수는 미확정이다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB 및 기존의 무관한 변경.

Verification:
- 사용자 발언 대조, `git diff --check`, 작업 전후 파일 해시 비교. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 확인된 개인 기여를 바탕으로 대표 후보 구성을 검토하고 공개 문구를 정리한다.

## 2026-11-05 - NH투자증권 PL 인계·팀 책임·구조 문제 확인

Role Flow:
- PM: 초기 개발자 합류 후 PL 인계 과정과 팀 구성·책임, DB 구조 및 API 연동 문제를 사용자에게 확인했다.
- Planner: 최초 구축 전체 책임과 개인 기여를 구분하고 구현 분담·결과는 미확인으로 유지했다.
- Developer: 경력 원자료와 작업 기록을 갱신했다.
- QA: 사용자 진술과 기록을 대조하고 문서 공백·파일 해시로 변경 범위를 확인했다.

Summary:
- 기존 PL 퇴사로 약 한 달 인수인계 후 역할을 이어받았다. 기본 개발팀은 본인 포함 4명이며 지원 인력 2명은 일시 합류였다.
- 업무 분담·일정 관리·협의·기술 방향 결정 및 기존 구조 재설계를 맡았다.
- 챗봇 이력의 저장·상담원 화면 표시 요구에 맞지 않는 DB를 재구성했다고 확인했다. 상세 구현 분담·적용 결과는 미확인이다.
- 사용자별 서비스 제공을 위한 여러 API 연동을 Skill Builder에서 구성했고 도구 버그 검증·카카오엔터프라이즈 개발자 피드백을 반복했다. 도구 자체 개발이나 모든 버그 해결로 표현하지 않는다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB·원본 프로젝트.

Verification:
- 사용자 발언 대조, `git diff --check`, 파일 해시 비교. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- DB 재설계의 개인 구현 범위·운영 결과와 실제 기간을 확인해 대표 후보 비교에 반영한다.

## 2026-11-05 - 교보톡톡 팀 리딩과 다이렉트 단독 담당·기간 확인

Role Flow:
- PM: 팀 구성·리딩 업무와 두 프로젝트의 실제 참여 기간을 사용자에게 확인했다.
- Planner: 교보톡톡의 팀 리딩과 다이렉트의 단독 개발 경험을 구분해 대표 후보 비교 자료를 보완했다.
- Developer: 원자료·작업 기록을 갱신했다.
- QA: 사용자 답변과 기간·역할을 대조하고 문서 공백 및 파일 해시로 변경 범위를 확인했다.

Summary:
- 교보톡톡: 2023.09~2024.03, 본인 포함 FE 3명 팀 리딩. 업무 분담·일정 관리·코드 리뷰·기술 방향 결정과 직접 개발·연동을 수행했다.
- 교보 다이렉트: 2024.08~2025.01, FE 단독 담당. 웹 커스터마이징 프로젝트로 별도 기록한다.
- 대표 프로젝트의 최종 선정·순서·개수는 미확정이다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB 및 기존의 무관한 변경.

Verification:
- 사용자 답변 대조, `git diff --check`, 작업 전후 파일 해시 비교. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- NH투자증권에서 맡은 개인 개발·PL 책임을 확인해 대표 후보를 비교한다.

## 2026-11-05 - 교보톡톡·다이렉트 범위 및 앱 연동 역할 확인

Role Flow:
- PM: 두 프로젝트의 순서·범위, 개인 웹 개발·연동 책임과 별도 앱 개발자 존재를 확인했다.
- Planner: 프로젝트 전체 앱 개발과 개인 기여를 구분하고 기억나지 않는 해결 기법은 미확인으로 남겼다.
- Developer: 계획 원자료와 작업 기록을 갱신했다.
- QA: 발언과 기록을 대조하고 문서 공백·파일 해시로 변경 범위를 확인했다.

Summary:
- 교보톡톡 오픈 후 같은 솔루션 기반 교보 다이렉트를 별도로 진행했다. 전자는 웹·하이브리드 앱, 후자는 웹 커스터마이징 범위였다.
- 본인은 웹·앱·서버 연동과 브릿지 통신 방향 결정을 담당했고 React Native 앱 개발자는 별도로 있었다.
- OS별 키보드 노출 시 채팅 입력창으로 인한 화면 깨짐을 어려운 사례로 확인했다. 해결 방법은 기억나지 않으며 해결 기법·결과를 추정하지 않았다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·원본 소스·운영 DB.

Verification:
- 사용자 발언 대조, `git diff --check`, 파일 해시 비교. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 기존 기록에 있는 교보톡톡 팀 리딩 범위를 확인하고 NH투자증권과 함께 대표 후보를 비교한다.

## 2026-11-05 - 삼성증권 데모 조건 보완 및 대표 후보 재검토

Role Flow:
- PM: 삼성증권 동일 화면 공개 불가와 NH투자증권·교보생명에서 맡은 업무 비중이 컸다는 사용자 보완을 반영했다.
- Planner: 별도 유사 데모 조건과 대표 후보 비교 방향을 정리하고 홈 3건 선정을 미확정으로 유지했다.
- Developer: 계획·결정·작업 기록을 갱신했다.
- QA: 사용자 발언과 문서의 일관성, 문서 공백·파일 해시로 변경 범위를 확인했다.

Summary:
- 삼성증권은 데이터와 화면 구성을 모두 바꾼 별도 데모로 검토하며 실제 납품 화면과 구분한다.
- NH투자증권과 교보생명을 주요 후보로 함께 검토한다. 대표 프로젝트의 최종 개수·순서·선정은 미확정이다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·운영 DB·원본 솔루션.

Verification:
- 사용자 정정과 기록 대조, `git diff --check`, 파일 해시 비교. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 비중이 컸던 교보생명 프로젝트를 확인하고 NH투자증권·교보생명의 자료에 근거해 대표 후보를 비교한다.

## 2026-11-05 - Roche 원자료 보관·공개 제외 확정

Role Flow:
- PM: 실제 수행한 작업이 없는 Roche를 공개에서 제외한다는 사용자 결정을 확인했다.
- Planner: 기존 게재 보류 제안을 공개 제외 확정으로 갱신하고 원자료는 유지했다.
- Developer: 계획·결정·작업 기록을 갱신했다.
- QA: 사용자 결정과 문서의 일관성 및 문서만 변경했는지 확인했다.

Summary:
- Roche는 실제 작업 없음으로 원자료만 보관하며 공개 경력·대표 프로젝트에 포함하지 않는다.
- 전체 경력 자료 수집은 최종 확인·미확인 항목 점검 전까지 완료 처리하지 않는다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·운영 DB 및 기존의 무관한 변경.

Verification:
- 사용자 결정과 문서를 대조했다. `git diff --check`와 작업 전후 파일 해시 비교를 수행했다.
- 문서 작업으로 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 원자료의 확인·미확인 항목을 최종 점검하고 공개 문구 편집 및 대표 프로젝트 검토의 선행 조건을 정리한다.

## 2026-11-05 - Festival Life 참여 종료 시점 확인

Role Flow:
- PM: 현재 참여 종료 및 종료 시점 2026년 8월을 사용자에게 확인했다.
- Planner: 월 단위 경력 원자료만 갱신하고 서비스 데이터 반영은 후속 범위로 남겼다.
- Developer: 계획·작업 기록과 Notion TASK-255 진행 기록을 갱신했다.
- QA: 사용자 발언, 기존 데이터와 문서 변경 범위를 대조했다.

Summary:
- Festival Life 참여 종료 시점을 2026년 8월로 기록했다. 서비스 운영 종료로 해석하지 않는다.
- Notion 기록 추가의 성공 응답을 확인했다. TASK-255 전체는 분석중으로 유지한다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·운영 DB 및 기존의 무관한 변경.

Verification:
- 기존 프로젝트 데이터와 사용자 확인 내용을 대조했다. `git diff --check` 및 파일 해시 비교로 문서만 변경했는지 확인했다.
- 문서 작업으로 테스트·빌드는 실행하지 않았다.

Next Candidates:
- 실제 작업이 없었던 Roche의 공개 제외 여부를 확정하고 남은 원자료 확인 항목을 점검한다.

## 2026-11-05 - 삼성전자 CIA 화면 공개 제외 기록

Role Flow:
- PM: 가상 데이터로 교체해도 삼성전자 화면을 공개하지 않겠다는 사용자 의사를 확인했다.
- Planner: 승인된 텍스트는 유지하고 화면 캡처·데모를 공개 범위에서 제외했다.
- Developer: 계획·결정·작업 기록에 공개 제한을 반영했다.
- QA: 문서 공백과 파일 해시를 확인하고 서비스 코드 변경 없이 기록했는지 점검했다.

Summary:
- 삼성전자 공개 범위는 승인된 고객사명과 작업 설명으로 유지한다. 가상 데이터 화면도 공개하지 않는다.
- 이전 기록의 화면 공개 조건 확인 과제는 이번 결정으로 해소했다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB·원본 화면·데이터.

Verification:
- 사용자 의사와 기록을 대조하고 `git diff --check` 및 작업 전후 파일 해시를 확인했다. 테스트·빌드는 실행하지 않았다.

Next Candidates:
- Festival Life 등 남은 경력의 현재 상태 확인. 전체 경력 자료 수집은 아직 미완료다.

## 2026-11-05 - 삼성전자 CIA 공개용 텍스트 승인과 참여 기간 확정

Role Flow:
- PM: 고객사명과 제시한 설명의 공개 승인, 2026년 10월 종료를 사용자에게 확인했다.
- Planner: 참여 기간을 2026.08~10으로 표기하고 텍스트와 화면 자료의 공개 범위를 구분했다.
- Developer: 계획·결정·작업 기록과 Notion TASK-255에 승인 문구 및 기간을 반영했다.
- QA: 승인 원문과 기간을 대조하고 문서 공백 검사와 파일 해시 비교로 변경 범위를 확인했다.

Summary:
- ‘삼성전자 CIA 프론트엔드 개발’ 제목과 제시한 작업 설명을 공개용 텍스트로 확정했다.
- 실제 참여 기간은 2026년 8월~10월이다. 정확한 일자는 추정하지 않았다.
- Notion 요약 수정·진행 기록 추가의 성공 응답을 확인했다. 전체 자료 수집은 분석중으로 유지한다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB·패키지/잠금 파일 및 기존의 무관한 변경.

Verification:
- 사용자 승인 원문·기간과 저장 내용을 대조했다. `git diff --check` 및 변경 전후 파일 해시를 확인했다.
- 문서 작업으로 테스트·빌드는 실행하지 않았다.

Open Questions:
- 삼성전자 화면 자료 공개 조건. 내부 소스·실데이터 공개를 승인받은 것으로 간주하지 않는다.
- Festival Life 등 나머지 경력의 미확인 내용.

Next Candidates:
- 삼성전자 화면 자료의 공개 가능 여부를 하나씩 확인한다. 실제 데모 제작·게시·대표 선정은 후속 범위다.

## 2026-11-05 - 삼성전자 CIA 개인 기여·개발 종료·실사용 확인

Role Flow:
- PM: 사용자에게 초기 FE 전담, 설계·협의 범위, 실제 참여 시작과 운영 상태를 하나씩 확인했다.
- Planner: FE 구현과 BE·Agent 설계 참여를 구분하고, 확인되지 않은 날짜와 공개 범위는 남겨두도록 정리했다.
- Developer: 경력 원자료와 Notion TASK-255의 요약·진행 기록을 갱신했다.
- QA: 사용자 발언과 기록의 일관성, 문서 공백 및 파일 해시로 변경 범위를 확인했다.

Summary:
- 초기부터 FE 단독 담당, 위젯·템플릿·Agent 응답 규약의 직접 설계·협의를 확인했다.
- BE·Agent 구현은 다른 개발자들이 담당했다. 본인은 멀티턴의 슬롯 응답 선택과 대화 이력 관련 설계·방향 논의에 참여했다.
- 2026년 8월 참여 시작. 사용자 확인 기준 개발은 종료됐고 오픈 후 실제 사용 중이다. 정확한 시작일·종료 월일·오픈일은 추정하지 않았다.
- Notion 요약 수정과 진행 기록 추가의 성공 응답을 확인했다. TASK-255는 분석중으로 유지했다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- Not touched: 서비스 코드·DB·패키지/잠금 파일 및 기존의 무관한 변경.

Verification:
- 사용자 확인 내용과 원자료·Notion 기록을 대조했다. `git diff --check`와 작업 전후 파일 해시 비교로 문서만 변경했는지 확인했다.
- 문서 작업이므로 테스트·빌드·브라우저 QA는 실행하지 않았다.

Open Questions:
- 삼성전자 공개 이름·문구·화면/자료 범위 및 정확한 종료 월일.
- Festival Life 등 남은 경력의 미확인 내용.

Next Candidates:
- 삼성전자 공개용 설명의 구체적인 범위를 제시하고 고객사명과 함께 공개 가능한지 확인한다.
- 전체 경력 자료 수집과 대표 작업 선정은 계속 미완료로 유지한다.

## 2026-11-05 - 삼성전자 CIA Notion·로컬 근거 조사

Role Flow:
- PM: 사용자 요청에 따라 CIA 자료를 먼저 조사하고, 이미 자료에 있는 기능 설명은 재질문하지 않도록 개인 책임 범위와 구분했다.
- Planner: Notion 분류 레코드·핵심 Task 실행 기록과 현재 FE 코드·작업 이력·계약·ADR을 대조했다. 서비스 구현·배포·기존 CIA Task 처리는 범위에서 제외했다.
- Developer: 포트폴리오 계획과 작업 기록 문서에 근거·미확인 항목을 남겼다. CIA 코드는 읽기만 했다.
- QA: 최초 100개 이후 추가 72개를 조회해 누락 없이 분류 목록을 확인하고, 문서 공백 검사와 파일 해시 비교로 이번 변경 범위를 점검했다.

Summary:
- FE 경로 `/Users/paris/Documents/Codeclick/SEC_CIA/FE/samsung-cia-frontend` 및 상위 문서, 별도 BE의 책임 구분을 확인했다.
- Notion CIA 레코드 172개를 조회했다. 계획·분석·보류·통합 작업과 구현을 구분하며 개인 성과 건수로 사용하지 않는다.
- 위젯·템플릿·응답 계약과 Playground, 채팅·SSE, 조건 슬롯·이력, 대시보드·실 API 조회, 응답 검증·부분 fallback과 구조 정비의 구현 근거를 확보했다.
- 초기 Roadmap·일부 상태와 현재 코드의 차이를 확인했다. 과거 오픈 목표일·배포 파일·Git 푸시·모의 검증으로 실제 운영 완료를 추정하지 않는다.
- FE 초기 전담 여부·개인 기능 설계 책임·Agent/BE 기여, 실제 기간·운영 상태·공개 범위는 사용자 확인이 필요하다.
- Notion TASK-255에 조사 근거와 미확인 항목을 추가하고 성공 응답을 확인했다. CIA의 원래 Task 상태와 이 경력 수집 Task의 전체 완료 여부는 변경하지 않았다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- Not touched: 포트폴리오 및 CIA 서비스 코드·데이터·DB·패키지/잠금 파일과 기존의 무관한 변경.

Verification:
- Notion 두 구간 조회 및 TASK-121·135·169·185·204 본문, FE 문서·현재 Registry·validator·SSE/API client·Git을 대조했다.
- 문서 공백 검사와 포트폴리오·CIA FE 파일 해시 비교. 이번에는 API 호출·브라우저 QA·테스트·빌드·배포를 수행하지 않았다.

Open Questions:
- FE 분담과 개인 설계·개발 책임, Agent/BE 기여, 실제 기간·상태와 공개 범위.

Next Candidates:
- FE 초기 구성부터의 전담 여부부터 하나씩 질문한다.
- CIA 원자료를 확인한 뒤 나머지 경력 상태와 전체 공개 문구·대표 선정의 선행 조건을 점검한다. TASK-255 전체는 아직 미완료다.

## 2026-11-05 - LG전자 참여 기간·실사용 확인과 공개 문구 승인

Role Flow:
- PM: 실제 개발은 2026.06.10~06.11이며 이후 간헐적 회의·배포 지원이었다는 사용자 확인을 받았다. 서비스 오픈·실사용 및 고도화 예정 상태도 확인했다.
- Planner: 제시한 공개용 문구와 고객사명에 대한 동의를 확보하고, 텍스트 승인과 내부 자료·화면 공개 범위를 분리했다.
- Developer: 계획·결정·작업 기록 문서에 사실과 승인 문구를 기록했다.
- QA: 승인된 문구를 원문과 대조하고 문서 공백 검사·작업 전후 해시 비교로 문서만 변경했는지 확인했다.

Summary:
- LG전자 초기 React 마이그레이션의 실제 기간과 이후 지원 범위·사용 상태를 원자료에 반영했다.
- ‘LG전자 eCRM AI Agent 화면 React 전환’ 제목, 기존 Streamlit 화면 이식·단계별 결과 조회/편집·기록관리·UAT·API 연동과 후속 회의/배포 지원을 설명한 문구를 승인받았다.
- 내부 소스·API 주소·프롬프트·캠페인 데이터·화면 캡처는 이번 공개 승인 범위가 아니다.
- 고도화 예정은 현재 서비스 상태이며 본인의 고도화 개발 참여로 기록하지 않았다. 대표 작업 선정·서비스 데이터 반영·실제 게시는 수행하지 않았다.
- Notion TASK-255의 개요와 LG전자 항목을 갱신하고 실제 기간·사용 상태·승인 문구 및 공개 범위를 추가했다. 쓰기 성공 응답을 확인했으며 전체 완료로 처리하지 않았다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 포트폴리오·LG 서비스 코드·샘플·DB·패키지/잠금 파일 및 기존의 무관한 변경.

Verification:
- 사용자 발언과 승인 텍스트, 기간·후속 지원·공개 범위 표기의 일관성을 확인했다.
- 문서 공백 검사와 파일 해시 비교. 문서 작업으로 테스트·빌드·브라우저 QA는 실행하지 않았다.

Open Questions:
- 삼성전자 상세 경력, Festival Life 진행 상태 및 나머지 경력의 미확인 내용.
- LG전자 BE 기여나 화면 자료를 공개 범위에 추가할 경우 그때 확인할 세부 내용.

Next Candidates:
- 삼성전자 Content Intelligent AI Agent 경력 자료 정리.
- 전체 원자료를 확인한 뒤 대표 작업·소개 및 나머지 프로젝트 문구를 편집한다. TASK-255 전체는 아직 완료가 아니다.

## 2026-11-05 - LG전자 Streamlit·React 마이그레이션 로컬 근거 조사

Role Flow:
- PM: 사용자가 제공한 LG 프론트 경로를 조사하고 코드로 확인 가능한 내용은 재질문하지 않도록 정리했다.
- Planner: 초기 본인 커밋과 후속 팀 커밋, 계획서와 실제 소스를 구분했다. 실제 기간·인계 범위·사용 결과·공개 조건만 후속 확인 대상으로 남겼다.
- Developer: 포트폴리오 계획·작업 기록 문서만 갱신했다. LG 프론트와 인접 원본 소스는 읽기만 했다.
- QA: Git·문서·실제 의존성 및 원본 Streamlit import를 대조하고 문서 공백·작업 전후 파일 해시로 변경 범위를 확인했다.

Summary:
- `/Users/paris/Documents/Codeclick/LG_eCRM/lge_eCRM_front`에서 초기 마이그레이션 자료와 본인 작성자 Git 기록을 확보했다.
- 기존 화면 도구는 Streamlit로 확인했다. 초기 React 마이그레이션에는 앱 기반뿐 아니라 eCRM 단계별 화면·API 연동·상태관리·기록관리·UAT 이식이 포함된다.
- 인접 원본 백엔드의 본인 기록에는 기존 로직의 FastAPI 노출·프롬프트 응답 필드 추가가 있다. 정확한 개인 책임 범위는 확인을 남기며 에이전트 자체 개발로 확대하지 않는다.
- 본인 커밋 조회 날짜는 2026.06.10~06.11이고 이후 다른 개발자들의 변경이 이어진다. 커밋 날짜를 실제 참여 기간으로 확정하거나 현재 앱 전체를 본인 성과로 쓰지 않는다.
- `src/pages/EcrmPage.tsx`의 기존 미커밋 변경은 보존했다.
- Notion TASK-255에 근거·기여 구분·미확인 항목을 추가하고 성공 응답을 확인했다. 전체 완료로 처리하지 않았다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- Not touched: 포트폴리오·LG 서비스 코드, 데이터, DB, 패키지/잠금 파일 및 기존의 무관한 변경.

Verification:
- 마이그레이션 계획·작업 현황, 현재 라우팅·API·store·의존성, 초기 커밋과 작성자별 변경 범위를 대조했다.
- 문서 공백 검사와 포트폴리오·LG 프론트 파일 해시 비교를 수행했다. 코드 실행·API 호출·테스트·빌드는 하지 않았다.

Open Questions:
- 실제 참여 기간, 인계 후 담당 범위와 기존 API 노출 작업의 본인 범위, 실제 사용/결과, 공개 범위.

Next Candidates:
- 실제 LG전자 작업 참여 기간부터 하나씩 확인한다. 자료로 확인한 화면 용도·기술을 반복 질문하지 않는다.

## 2026-11-05 - 삼성증권 개인 기여·기간·공개 조건 확인

Role Flow:
- PM: 사용자에게 개인 책임 범위·기간·운영 반영·중요하게 다룬 문제·공개 조건을 하나씩 확인했다.
- Planner: 조사 근거와 새로 확인한 사용자 진술을 합치고 기존 샘플 문서 공개 금지 및 가상 데이터 사용 조건을 분리했다.
- Developer: 계획·결정·작업 기록 문서만 갱신했다.
- QA: 사용자 진술과 기록을 대조하고 문서 공백 검사 및 작업 전후 파일 해시 비교로 변경 범위를 확인했다.

Summary:
- 실제 참여 기간은 2026.06.11~2026.08.31이며 FE는 초기 구축부터 단독 담당했다.
- BE 기여는 초기 FastAPI 샘플 API 작성 후 다른 개발자에게 인계·협업한 범위다.
- 고객사 운영 반영·실사용을 확인했다. 화면 구조 정리와 데이터 유형별 적절한 화면 표현을 중요하게 다뤘으며 FE 구현은 대부분 본인이 판단해 해결했다.
- 고객사명·담당 작업은 공개 가능하다. 기존 샘플 문서는 공개하지 않으며, 화면 자료가 필요하면 별도 가상 데이터로 교체한다.
- 공개 문구 편집·대표 선정·가상 데이터 및 데모 화면 제작은 후속 범위에 남겼다. LG전자 상세 정리와 1단계 전체는 아직 미완료다.
- Notion TASK-255에 개인 기여·기간·공개 조건을 추가하고 성공 응답을 확인했다. Task 전체 상태는 `분석중`으로 유지한다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 포트폴리오·Parser 서비스 코드, 샘플 문서, 운영 DB, 패키지/잠금 파일 및 기존의 무관한 변경.

Verification:
- 사용자 확인 내용과 문서의 기간·개인 기여·공개 범위를 대조했다.
- 문서 공백 검사와 파일 해시 비교를 수행했다. 문서 작업으로 테스트·빌드·브라우저 QA는 재실행하지 않았다.

Open Questions:
- LG전자 화면·기능·기간·결과·공개 범위, 삼성전자 상세 경력과 기타 미확인 경력.

Next Candidates:
- LG전자에서 React로 옮긴 화면의 실제 용도를 이어서 확인한다.
- 삼성증권의 데모 자료는 해당 화면 제작 단계에서 가상 데이터로 준비한다.

## 2026-11-05 - 삼성증권 파서 뷰어 Notion·로컬 근거 조사

Role Flow:
- PM: 사용자의 자료 확인 요청에 따라 기존 Notion과 PC의 소스·작업 이력을 조회했다. 개인 책임 범위는 근거와 사용자 확인을 구분한다.
- Planner: 프로젝트 분류로 Notion 작업을 모은 뒤 FE 기록·핵심 Task 본문, 작업 히스토리·소스·Git을 대조했다.
- Developer: 포트폴리오 계획과 작업 기록 문서만 갱신했다. 조사 대상 Parser 소스는 수정하지 않았다.
- QA: 과거 계획과 실행 결과, 현재 코드의 주요 기능을 구분하고 문서 공백 검사를 수행했다.

Summary:
- `/Users/paris/Documents/Codeclick/Parser`에서 FE·BE 소스, `frontend/작업_히스토리.md`, `WORK_HISTORY.md`와 운영가이드 파일을 찾았다.
- Notion의 삼성증권 파서 분류 레코드 64개를 확인했다. 중복·통합·분석 항목이 있어 구현 성과 건수로 쓰지 않는다.
- 비교 뷰어·원본 하이라이트, 저신뢰 검수·요소 편집, 수정/신고/신뢰 연동, 수정이력·전후 비교, FE 구조 정비의 구현 근거를 확보했다.
- TASK-119와 Git `f96ce43`, 로컬 작업 기록에서 구조 정비 완료가 연결된다. 과거 115개 테스트 통과 기록을 이번 검증 결과로 표현하지 않았다.
- TASK-134는 운영가이드 작성 계획 완료다. 로컬 Word/PDF 파일 존재와 최종 인수·납품 완료는 구분한다.
- 구현 근거를 확보했지만 초기 FE 구축·전담 여부와 BE 개인 기여, 참여 기간·운영 결과·공개 범위는 아직 사용자 확인이 필요하다. LG전자 상세 질문도 남아 있다.
- Notion TASK-255에 조사 근거·미확인 항목과 관련 Task 링크를 추가하고 성공 응답을 확인했다. 삼성증권의 원래 작업 Task 상태는 변경하지 않았다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- Not touched: 포트폴리오 및 Parser 서비스 코드·데이터·DB·패키지/잠금 파일, 기존의 무관한 변경.

Verification:
- Notion 검색·분류 조회와 핵심 Task 본문, 로컬 README·작업 이력·package.json·현재 FE 소스·Git 이력을 대조했다.
- 문서 공백 검사를 수행했다. 이번 조사는 코드 실행 검증이 아니며 테스트·빌드·브라우저 QA는 재실행하지 않았다.

Open Questions:
- 초기 FE 구축부터의 본인 책임 범위, BE 기여, 실제 기간·운영 결과·공개 범위.

Next Candidates:
- 자료에 없는 개인 책임 범위부터 하나씩 확인한다. 이미 근거가 있는 기능 목록을 사용자에게 다시 전부 설명하도록 요구하지 않는다.

## 2026-11-05 - 삼성증권 파서 뷰어 경력 수집 목록 추가

Role Flow:
- PM: 사용자가 추가로 알린 삼성증권 파서 뷰어 참여 사실을 확인했다. LG전자 작업 정리는 미완료로 유지한다.
- Planner: 기존 1단계 경력 수집 목록에 추가하고 상세 확인 항목을 분리했다.
- Developer: 계획과 작업 기록 문서만 수정했다.
- QA: 참여 사실과 미확인 상세를 구분하고 문서 공백 검사를 수행했다.

Summary:
- 삼성증권 파서 뷰어 참여를 경력 수집 목록에 추가했다. 파서 자체 개발, 역할, 기간, 성과나 공개 가능 여부는 추정하지 않았다.
- 현재 경력 수집 목록은 5건이다. LG전자 화면 마이그레이션의 미응답 질문도 유지했다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- Not touched: 서비스 코드, 프로젝트 데이터, 운영 DB, 패키지/잠금 파일 및 기존의 무관한 변경.

Verification:
- 사용자 발언과 기록을 대조하고 문서 공백 검사를 수행했다. 문서 작업으로 테스트·빌드는 실행하지 않았다.

Open Questions:
- 삼성증권 작업의 실제 본인 기여와 기간·결과·공개 범위.
- LG전자 전환 화면·기능과 나머지 경력의 미확인 항목.

Next Candidates:
- 삼성증권 작업의 실제 수행 범위를 먼저 질문하고 LG전자 경력 정리도 이어간다.

## 2026-11-05 - SC제일은행 유지보수 원자료 정리와 LG전자 상세 확인 착수

Role Flow:
- PM: SC제일은행 상담톡 유지보수의 기간·실제 수행 세 건·공개 제외 결정을 확인하고 LG전자 작업 정리를 시작했다.
- Planner: 경력 원자료는 계획 1단계에, 공개 제외 결정은 결정 기록에 남기도록 범위를 정했다. 1단계 전체 완료로 처리하지 않는다.
- Developer: 계획·결정·작업 기록 문서만 갱신했다. 기존 미커밋 변경을 보존했다.
- QA: 사용자 확인 내용과 기록, 현재 프로젝트 상수의 기존 구축 항목을 대조했다. 작업 전후 파일 해시와 문서 공백 검사를 수행했다.

Summary:
- SC제일은행 상담톡 유지보수(2026.06.02~09.30)는 원자료로만 남기고 공개에서 제외한다. 기존 공개 구축 이력의 삭제나 유지보수 내용 합침은 수행하지 않는다.
- API 취약점 수정·재점검 확인, 지점명 검색 구현·운영 반영, 지점 누락 원인 확인·담당자 전달을 구분해 기록했다.
- 오스템 종료 시점은 사용자 확인으로 2026년 5월이다. 코드의 진행 중 표기는 향후 승인된 데이터 반영 범위에 남겼다.
- LG전자 기여는 기존 에이전트 개발자들의 Python 화면을 React로 마이그레이션한 것으로 구체화했다. 기존 화면 도구명과 상세 범위는 미확인이다.
- Notion TASK-255의 해당 개요와 진행 기록을 갱신하고 상태를 `분석중`으로 변경했다. 각 쓰기의 성공 응답을 확인했으며 전체 완료로 처리하지 않았다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 서비스 코드, 프로젝트 데이터, 운영 DB, 자산, 패키지/잠금 파일 및 기존의 무관한 변경.

Verification:
- 사용자 확인 내용 및 이전 공개 화면 확인 결과와 기록을 대조했다. 지점 검색 화면 자체는 직접 확인하지 않은 것으로 명시했다.
- 문서 공백 검사 및 작업 전후 파일 해시 비교. 문서만 변경하므로 테스트·빌드는 재실행하지 않는다.

Open Questions:
- LG전자 전환 화면·기능, 연동 범위, 기간, 결과, 기술 및 공개 범위.
- 삼성전자 상세 경력, Festival Life 진행 상태 및 나머지 경력 확인은 아직 남아 있다.

Next Candidates:
- LG전자 화면 마이그레이션 내용을 하나씩 확인한다.
- TASK-255는 경력 수집 진행 중이며, 이후 문구·대표 작업·디자인 검토는 기존 선행 조건을 따른다.

## 2026-11-04 - 포트폴리오 개선 8단계 Notion Task 등록

Role Flow:
- PM: 사용자의 명시적인 8단계 Task 등록 요청과 포트폴리오 분류를 확인했다.
- Planner: 기존 단계별 범위·완료 조건·검증 기준을 옮기고 선행 작업을 연결했다.
- Developer: Notion Task 8건을 생성하고 저장소의 연결 정보 및 등록 상태 문서를 갱신했다. 서비스 구현은 수행하지 않았다.
- QA: 중복 조회, 생성 결과, 8개 페이지의 본문/속성, 선행 링크 갱신 결과, 최종 데이터 조회 및 로컬 문서 변경 범위를 확인했다.

Summary:
- 기존 Tasks 데이터베이스에서 중복 작업이 없음을 확인하고 TASK-255부터 TASK-262까지 생성했다.
- 프로젝트는 모두 `포트폴리오`, 상태는 모두 `제안됨`, 등록일은 `2026-11-04`로 기록했다. 마감일·완료일·우선순위는 지정하지 않았다.
- 목적, 작업 체크리스트, 선행 Task 링크, 관련 파일, 완료 조건, 검증 및 저장소 기준 문서를 포함했다.
- 신규 경력 4건의 개요와 확인된 참여 범위, 상세 정보는 해당 작업 때 확인하는 조건을 포함했다.
- 계획에 8개 Task 링크를 연결하고 workflow의 Task 미등록 상태를 갱신했다.

Tasks:
- [TASK-255 — 오스템 이후 작업과 기존 경력 자료 정리](https://app.notion.com/p/40ed44c2a3948119be45ebd511ae66cf?pvs=204)
- [TASK-256 — 소개·프로젝트 문구 정리 및 경력 데이터 반영](https://app.notion.com/p/40ed44c2a394814cb990ee4e6e8fa766?pvs=204)
- [TASK-257 — 실제 콘텐츠를 넣은 디자인안 검토](https://app.notion.com/p/40ed44c2a3948188886bfb8b017c54cc?pvs=204)
- [TASK-258 — 공통 스타일과 홈 개선](https://app.notion.com/p/40ed44c2a3948147ba87c99df23214d8?pvs=204)
- [TASK-259 — Projects 목록과 기존 상세 패널 개선](https://app.notion.com/p/40ed44c2a3948154a38bcbd5bceb8de8?pvs=204)
- [TASK-260 — About·Contact와 내비게이션 정리](https://app.notion.com/p/40ed44c2a39481808d55d41d039ed628?pvs=204)
- [TASK-261 — 테마·모션·접근성 통합 점검](https://app.notion.com/p/40ed44c2a39481a88d9ac63f54f18196?pvs=204)
- [TASK-262 — 검색·공유·데이터·배포 점검](https://app.notion.com/p/40ed44c2a3948193804bdd389e3dd5d0?pvs=204)

Files:
- Created: Notion Task 8건. 로컬 신규 파일 없음.
- Modified: `docs/portfolio-improvement-plan.md`, `workflows/portfolio-cycle.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 서비스 코드, 프로젝트 데이터, 정적 자산, 패키지/잠금 파일, 운영 DB 및 기존의 무관한 변경.

Verification:
- 현재 Notion 스키마와 포트폴리오 분류를 확인했고 등록 전 중복 조회는 0건이었다.
- 생성된 8개 페이지를 읽어 목적·작업 내용·검증·완료 조건과 분류/상태를 확인했다.
- 선행 링크의 갱신 성공 응답을 확인했다. 복수 선행 작업의 줄바꿈 정규화로 한 번 실패한 갱신은 저장된 내용을 다시 읽어 해당 1건과 나머지 항목만 수정했고, Task를 중복 생성하지 않았다.
- 최종 조회에서 정확히 8건, 프로젝트/상태, 저장소 경로, 등록일 및 비어 있는 마감일/완료일을 확인했다.
- 로컬 문서 diff 공백과 링크/ID 대응, 작업 전후 파일 해시를 확인했다. 서비스 변경이 없어 테스트·빌드는 재실행하지 않았다.

Open Questions:
- 신규 경력 상세 정보와 최종 문구·시안·구현 범위는 해당 Task 착수 시 확인한다.

Next Candidates:
- 다음 작업은 TASK-255의 경력 자료 정리다. 신규 작업 개요는 이미 확보했으므로 상세 내용은 그 작업을 시작할 때 받는다.
- 나머지 7개 단계는 선행 작업과 승인 범위를 확인하며 진행한다. 이번 등록으로 각 단계를 완료 처리하지 않았다.

## 2026-11-04 - 프로젝트 작업 지침과 Notion 관리 규칙 기록

Role Flow:
- PM: 사용자 요청을 이 저장소의 지속적인 작업 지침 기록으로 한정하고, 기존 대화에서 확인된 선호와 Notion 분류 생성 결과를 검토했다.
- Planner: 기본 지침은 AGENTS, 상세 절차와 연결 정보는 workflow, 작업계획은 plan, 결정과 결과는 각 기록 문서에 배치했다.
- Developer: 문서 5개를 수정했다. 서비스 코드, 운영 DB, Notion Task 레코드는 변경하지 않았다.
- QA: 문서 간 참조와 등록 상태 표기, diff 공백 검사, 작업 시작 시 파일 해시와의 비교로 변경 범위를 확인했다.

Summary:
- 사실에 기반한 문구, 반복 카드·장식·모션 검토, 실제 기여 범위, 신규 경력의 상세 확인 시점을 작업 지침에 추가했다.
- 기존 계획·결정·최근 작업 기록을 읽고 이어서 진행하도록 했다.
- Notion Tasks 위치와 `프로젝트 = 포트폴리오`, 등록/상태 갱신 규칙, 로컬 문서와의 역할을 기록했다.
- 포트폴리오 분류는 생성됐지만 단계별 Task는 아직 생성되지 않았음을 명시했다.
- 거절된 소개 문구 원문을 결정 기록에 남겨 다음 작업에서 재사용하지 않도록 했다.

Files:
- Created: None.
- Modified: `AGENTS.md`, `workflows/portfolio-cycle.md`, `docs/portfolio-improvement-plan.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: 서비스 코드, 정적 자산, 패키지/잠금 파일, 기존의 다른 변경, Notion 레코드, 운영 DB.

Verification:
- 시작 지침·문서 역할·계획·Notion 분류 및 Task 미등록 상태의 일관성을 검토했다.
- diff 공백 검사, 계획 문서 공백 검사, 문서 참조 및 작업 전후 파일 해시를 확인했다.
- 문서 작업이므로 테스트·빌드는 재실행하지 않았다.

Open Questions:
- 포트폴리오 Task 등록 및 단계별 구현은 아직 수행하지 않았다.
- 신규 경력의 기간·구체적인 기여·공개 범위 등은 해당 콘텐츠 작업 시 확인한다.

Next Candidates:
- 요청 시 기존 Tasks에 포트폴리오 작업을 등록하고 단계별 계획과 연결한다.
- 기존 8단계 계획의 미완료 항목을 다음 관련 작업에서 확인한다.

## 2026-11-04 - 오스템 이후 작업 목록과 참여 범위 기록

Role Flow:
- PM: 신규 작업 4건과 개략적인 참여 범위를 확인했다. 세부 정보는 해당 작업을 진행할 때 받기로 했다.
- Planner: 개선 계획의 1단계 상태와 작업별 처리 방침, 후속 확인 시점을 갱신했다.
- Developer: 계획 및 작업 기록 문서만 수정했다.
- QA: 사용자 제공 내용과 기록을 대조하고 문서 변경 범위 및 공백 오류를 확인했다.

Summary:
- SC제일은행 Connect Always 유지보수, LG전자 eCRM AI Agent 초기 React 구성, 삼성전자 Content Intelligent AI Agent FE·기능 설계를 추가 후보로 기록했다.
- Roche 디지털휴먼 유지보수는 명단 등록만 있고 실제 작업이 없다는 사실을 기록하고, 공개 포트폴리오 게재 보류를 제안했다.
- 기간·성과·공개 가능 범위는 추정하지 않았다. LG전자 참여를 전체 FE 개발로 확대하지 않았다.
- 기존 SC제일은행 구축/커스터마이징과 후속 유지보수를 구분해 확인하도록 했다.

Files:
- Created: None.
- Modified: `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- Not touched: 서비스 코드, 프로젝트 데이터, 운영 DB, 패키지 파일 및 기존의 다른 변경.

Verification:
- 사용자 설명과 신규 작업 표의 대응, 미확인 정보 표기 및 문서 diff 공백 검사를 확인했다.
- 문서 변경이므로 테스트·빌드는 재실행하지 않았다.

Open Questions:
- 각 작업의 기간·구체적인 기여·결과/상태·자료 경로·공개 범위는 해당 작업 착수 시 확인한다.
- 오스템과 Festival Life의 진행 상태는 아직 미확인이다.

Next Candidates:
- 향후 경력 콘텐츠 정리 시 확보한 목록에서 작업별 상세 정보를 확인한다.
- 나머지 디자인·문구·데이터·운영 개선 항목은 기존 8단계 계획에 유지한다.

## 2026-11-04 - 포트폴리오 단계별 개선 계획 작성

Role Flow:
- PM: 추상적인 소개 문구에 대한 사용자 피드백과 오스템 이후 작업 추가 요청을 확인했다. 신규 경력 정보는 질문하고 미확인으로 남겼다.
- Planner: 자료 정리, 콘텐츠/데이터, 시안, 홈, Projects, About/Contact, 테마/접근성, 운영 점검의 8단계와 완료 기준을 작성했다.
- Developer: 계획과 확정된 사용자 선호를 문서에 기록했다. 서비스 구현은 수행하지 않았다.
- QA: 실제 데이터 모델·조회·대표 프로젝트 지정 위치와 계획을 대조하고 문서 변경 범위를 확인했다.

Summary:
- 단계별 대상 파일, 선행 조건, 검증 및 미해결 항목을 계획 문서에 정리했다.
- 로컬 상수 수정만으로 운영 DB가 갱신되지 않는 점과 기존 상세 패널/딥링크 유지 조건을 포함했다.
- 새로운 프로젝트와 성과, 최종 문구 및 디자인을 임의로 확정하지 않았다.

Files:
- Created: `docs/portfolio-improvement-plan.md`.
- Modified: `docs/decisions.md`, `docs/task-log.md` (기존 변경 보존).
- Not touched: 서비스 코드, 프로젝트 데이터, 패키지/잠금 파일, 정적 자산, 운영 DB.

Verification:
- 저장소 규칙, 구현 파일, 결정 및 이전 작업 기록과 계획을 대조했다.
- 문서 diff 공백 검사와 변경 파일 범위를 확인했다. 문서 작업이므로 테스트·빌드는 재실행하지 않았다.

Open Questions:
- 오스템 이후 프로젝트의 이름·기간·역할·기여·결과 및 공개 가능한 자료.
- 기존 진행 중 프로젝트의 현재 상태, 정확한 이메일, 우선 지원 직무.
- 최종 시안과 단계별 구현 범위는 아직 승인되지 않았다.

Next Candidates:
- 계획 1단계: 신규 경력 자료를 정리하고 오스템의 현재 상태를 확인한다.
- 이후 기존 비오스템 설명 보강과 대표 프로젝트 재선정을 진행한다.
- 디자인, 접근성, 데이터/배포, 문서 정리 항목은 계획 문서에 미완료로 유지한다.

## 2026-06-08 - Redesign Project Cards

Role Flow:
- PM: Confirmed the goal is to make project cards more compelling for recruiters while shifting the key color from green to a restrained red.
- Planner: Scoped the change to existing card components and Tailwind color tokens without adding libraries, changing routes, or changing project data.
- Developer: Reworked home cards into case-study highlights, reworked Projects cards into recruiter evidence cards, removed card tilt behavior, and updated the primary color palette.
- QA: Verified static checks, production build, and browser behavior on home and Projects pages.

Summary:
- Changed the primary Tailwind palette from green to a muted red scale.
- Updated home `Career Highlights` cards with capability labels: Solo Ownership, Team Leading, and Product Thinking.
- Rebuilt Projects grid cards around company, period, category, project title, role, two contribution bullets, and stack chips.
- Removed decorative 3D tilt behavior from Projects cards.

Files:
- Created: None.
- Modified: `tailwind.config.mjs`, `src/components/projects/ProjectCard.tsx`, `src/components/sections/ProjectCards.tsx`, `src/components/sections/ProjectsPreview.tsx`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: Project data, routes, package files, lockfiles, public assets.

Verification:
- `npx tsc --noEmit`
- `npm run lint`
- `npm test -- --runInBand`
- `npm run build`
- Browser QA on `http://localhost:3000/`: checked home `Career Highlights` case-study cards, red accent treatment, logo visibility, and project deep links.
- Browser QA on `http://localhost:3000/projects`: checked recruiter evidence cards, featured card layout, and project detail panel deep-link behavior.

Open Questions:
- None for this scope.

Next Candidates:
- Refine non-Osstem project copy so the new evidence-card bullets read more consistently.
- Review the detail panel after copy refinement.

## 2026-06-07 - Add Project Detail Deep Links

Role Flow:
- PM: Confirmed the desired user flow: home project highlights should preserve project-specific intent instead of linking only to the generic Projects page.
- Planner: Scoped the work to URL-query detail links, existing ProjectPanel reuse, home preview copy/card updates, and documentation.
- Developer: Connected `project` query state to the Projects detail panel, updated Projects card clicks to write project IDs into the URL, and expanded home highlights to three representative project cards.
- QA: Verified static checks plus browser flows for home-to-detail, close behavior, internal Projects card clicks, and invalid project IDs.

Summary:
- Home `Career Highlights` now shows Osstem, Kyobo TalkTalk, and Festivallife representative projects.
- Home project cards link to `/projects?project={projectId}`.
- Projects page opens `ProjectPanel` automatically when the `project` query matches an existing project ID.
- Projects page card clicks update the URL to the selected project deep link.
- Closing the panel removes the `project` query and returns to `/projects`.

Files:
- Created: None.
- Modified: `src/components/sections/ProjectsPreview.tsx`, `src/components/sections/ProjectCards.tsx`, `src/components/projects/ProjectsContainerClient.tsx`, `docs/project-context.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: Project data, routes, package files, lockfiles, public assets.

Verification:
- `npx tsc --noEmit`
- `npm run lint`
- `npm test -- --runInBand`
- `npm run build`
- Browser QA on `http://localhost:3000/`: confirmed three home highlight links and Osstem card opens `/projects?project=osstem-hybrid`.
- Browser QA on `http://localhost:3000/projects`: confirmed closing detail returns to `/projects`, internal Kyobo card click opens `/projects?project=kyobo-talktalk`, and invalid project ID shows the list without a dialog.

Open Questions:
- Whether non-Osstem project copy should be refined before expanding detail-panel structure.

Next Candidates:
- Refine non-Osstem project copy after the separate agent provides updated project data.
- Consider detail-panel IA improvements only after copy quality is strong enough to support problem, contribution, and result sections.

## 2026-06-07 - Clean Build Warnings

Role Flow:
- PM: Confirmed the next maintenance scope should address the existing Next workspace-root, baseline-browser-mapping, and Tailwind module-type build warnings.
- Planner: Scoped the work to build configuration, package metadata, Tailwind config loading, and documentation updates without changing UI, routes, project data, or service behavior.
- Developer: Set an explicit Turbopack root, updated Baseline browser data handling, renamed the Tailwind config to `.mjs`, and updated lint/CSS config references.
- QA: Verified TypeScript, lint, Jest, and production build output.

Summary:
- Added `turbopack.root` to `next.config.ts` so Next.js no longer infers the wrong workspace root from nearby lockfiles.
- Added `baseline-browser-mapping` as a dev dependency and updated it to `2.10.34`.
- Renamed `tailwind.config.ts` to `tailwind.config.mjs` and updated `globals.css` plus the lint script to use the new path.
- Recorded the durable build-warning cleanup decision.

Files:
- Created: `tailwind.config.mjs`.
- Modified: `next.config.ts`, `package.json`, `package-lock.json`, `src/app/globals.css`, `docs/decisions.md`, `docs/task-log.md`.
- Removed: `tailwind.config.ts`.
- Not touched: Project data, Projects UI, routes, service code, public assets.

Verification:
- `npm run dev`, then requested `/` and `/projects`; both returned `200 OK` after clearing stale `.next/dev` cache from the earlier `.mts` attempt.
- `npx tsc --noEmit`
- `npm run lint`
- `npm test -- --runInBand`
- `npm run build` succeeds without the previous Next workspace-root, baseline-browser-mapping, or Tailwind module-type warnings.

Open Questions:
- None for this scope.

Next Candidates:
- Refine non-Osstem project copy after the separate agent provides updated project data.
- Consider dependency audit remediation separately from this warning-cleanup scope.

## 2026-06-07 - Clean Existing Lint Warnings

Role Flow:
- PM: Confirmed Projects copy work is deferred and selected the existing lint warnings as the next maintenance task.
- Planner: Scoped the work to warning cleanup without changing project data, UI structure, package files, or adding libraries.
- Developer: Removed unused imports/state/parameters, removed an obsolete eslint-disable comment, and moved BackgroundCanvas constants/helpers outside the component to satisfy hook dependency rules.
- QA: Verified lint, TypeScript, tests, and production build.

Summary:
- Removed the unused `History` import from the About page.
- Removed unused local theme state from `ThemeToggle`.
- Removed unused `idx` callback parameters from the home `History` animation logic.
- Stabilized `BackgroundCanvas` effect dependencies by moving static tunables, color palettes, and helpers to module scope.
- Removed an obsolete eslint-disable comment from `src/lib/db.ts`.

Files:
- Created: None.
- Modified: `src/app/(pages)/about/page.tsx`, `src/components/common/ThemeToggle.tsx`, `src/components/home/History.tsx`, `src/components/sections/BackgroundCanvas.tsx`, `src/lib/db.ts`, `docs/task-log.md`.
- Not touched: Project data, Projects UI, routes, package files, lockfiles, public assets.

Verification:
- `npm run lint` passes with 0 warnings.
- `npx tsc --noEmit`
- `npm test -- --runInBand`
- `npm run build` succeeds with existing Next workspace-root, baseline-browser-mapping, and Tailwind module-type warnings.

Open Questions:
- None for this scope.

Next Candidates:
- Resolve the existing Next workspace root inference warning caused by multiple lockfiles.
- Decide whether to address baseline-browser-mapping and Tailwind module-type build warnings separately.
- Refine non-Osstem project copy after the separate agent provides updated project data.

## 2026-06-07 - Projects Responsive QA and Visual Fixes

Role Flow:
- PM: Confirmed that non-Osstem project copy refinement is deferred until separate project data is provided, and scoped this cycle to Projects responsive QA.
- Planner: Focused verification on `/projects` desktop, tablet, and mobile behavior without changing the data model, filters, or adding libraries.
- Developer: Fixed the missing light-mode page background/text baseline, improved Projects card surface visibility, and constrained ProjectPanel content scrolling on mobile.
- QA: Verified responsive layouts, filter behavior, dialog focus/close behavior, mobile bottom-sheet scrolling, static checks, tests, and build.

Summary:
- Added explicit light-mode `body` background and text color so Projects content does not render as black text over a transparent/dark browser background.
- Added a visible light-mode gradient surface to project cards while keeping the existing dark-mode style.
- Removed excessive mobile bottom-sheet padding and applied max-height directly to ProjectPanel content so long project details scroll internally.
- Confirmed mobile Stack content is reachable by scrolling inside the bottom sheet.

Files:
- Created: None.
- Modified: `src/app/layout.tsx`, `src/components/projects/ProjectCard.tsx`, `src/components/projects/ProjectPanel.tsx`, `docs/task-log.md`.
- Not touched: `src/constants/projects.ts`, project copy for non-Osstem entries, filters, routes, package files, lockfiles, public assets.

Verification:
- Browser QA on `/projects` at 1440x900, 768x1024, and 375x812.
- Checked no horizontal overflow in desktop, tablet, and mobile viewports.
- Checked Featured card layout, filter wrapping, filter active state, desktop dialog open/close, body scroll lock, close-button focus, and focus restoration.
- Checked mobile bottom-sheet open/close and internal scroll to the Stack section.
- `npx tsc --noEmit`
- `npm run lint` passes with 12 existing warnings.
- `npm test -- --runInBand`
- `npm run build` succeeds with existing Next workspace-root, baseline-browser-mapping, and Tailwind module-type warnings.

Open Questions:
- None for this QA scope.

Next Candidates:
- Refine non-Osstem project copy after the separate agent provides updated project data.
- Clean existing lint warnings in About, ThemeToggle, History, BackgroundCanvas, and `src/lib/db.ts`.
- Resolve the existing Next workspace root inference warning caused by multiple lockfiles.
- Consider structured project metadata later only if component-level filtering and copy management become hard to maintain.

## 2026-06-06 - Improve Projects Information Architecture

Role Flow:
- PM: Confirmed the first information-architecture scope: featured projects, career-axis filters, frontend positioning, and no project data model change today.
- Planner: Kept the existing `Project` data shape and scoped the implementation to component-internal constants plus display order changes.
- Developer: Added a role-focused Projects header, Featured Projects section, filter controls, and reordered project cards/details for recruiter scanning.
- QA: Verified static checks, tests, build, and browser behavior for the Projects page.

Summary:
- Added career-positioning copy and focus chips to the Projects header.
- Added Featured Projects for Osstem, Festivallife, Kyobo TalkTalk, and NH Investment.
- Added filters: All, representative, ownership/solo work, realtime consulting, finance/insurance, hybrid/app, and AI/Voice.
- Reordered cards and detail panels so company/category, title, role, summary, contributions, stack, and period are easier to scan.
- Kept the existing project data model and avoided new libraries.

Files:
- Created: None.
- Modified: `src/components/projects/ProjectsHeader.tsx`, `src/components/projects/ProjectsContainerClient.tsx`, `src/components/projects/ProjectCard.tsx`, `src/components/projects/ProjectPanel.tsx`, `docs/task-log.md`.
- Not touched: `src/constants/projects.ts`, routes, package files, lockfiles, public assets.

Verification:
- `npx tsc --noEmit`
- `npm run lint`
- `npm test -- --runInBand`
- `npm run build`
- Browser QA on `/projects` for featured projects, filters, dialog open/close, focus restoration, and desktop overflow.
- Reviewed responsive Tailwind classes for wrapping filters and one-column mobile grids; direct mobile viewport QA was not available in the current in-app browser session.

Open Questions:
- Whether each project should later expose structured fields such as problem, role, contribution, result, ownership level, and impact.

Next Candidates:
- Add richer project metadata only when the current component-level filtering becomes hard to maintain.
- Refine copy for non-Osstem projects so each card has a sharper problem, role, contribution, and result narrative.
- Run direct mobile viewport QA in a resizable browser or device preview before finalizing visual polish.
- Review Projects visual density after real browser QA and decide whether Featured should be 2-column or 4-column on wide screens.

## 2026-06-06 - Record Korean Commit Message Rule

Role Flow:
- PM: Confirmed that commit messages should be Korean and include useful content where possible.
- Planner: Scoped the change to repository workflow documentation.
- Developer: Added commit message guidance to `AGENTS.md` and recorded the durable decision.
- QA: Checked that this is documentation-only and should not affect service code.

Summary:
- Future commits should use Korean commit messages by default.
- Commit bodies should summarize important changes, reasons, verification, or follow-up notes when relevant.
- Unrelated `.DS_Store` changes should stay out of commits unless explicitly requested.

Files:
- Created: None.
- Modified: `AGENTS.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: `src`, `app`, `components`, `styles`, `public`, lockfiles.

Verification:
- Documentation review only.

Open Questions:
- None.

Next Candidates:
- Apply this commit style to the current Projects quick fixes commit.

## 2026-06-06 - Refine Osstem Project Career Data

Role Flow:
- PM: Confirmed that career data should be clarified before changing the Projects information architecture.
- Planner: Scoped the change to the existing `Project` data shape without adding new fields or changing UI structure.
- Developer: Updated the Osstem hybrid app project copy to reflect solo ownership of the Android/iOS app and mobile web integration scope, bridge work, deployment support, and handoff documentation.
- QA: Checked that the content stays within the existing project data contract.

Summary:
- Repositioned the Osstem project as an existing Full WebView app refactor into a Partial Hybrid structure.
- Refined the public project title to `오스템 모바일 앱 프레임워크 구축`.
- Added Kotlin, Swift, SwiftUI, WKWebView, WebView Bridge, and TestFlight to the displayed stack.
- Clarified that the work included sole responsibility for the Android/iOS app and mobile web integration scope, from requirements through design, implementation, verification, deployment support, web channel guide support, and AOS/iOS handoff documentation.

Files:
- Created: None.
- Modified: `src/constants/projects.ts`, `docs/task-log.md`.
- Not touched: UI components, routes, `getProjects()` data flow, package files, lockfiles.

Verification:
- Confirmed the iOS source evidence from `/Users/paris/Documents/Codeclick/osstem/osstem-app_ios` before writing the portfolio copy.

Open Questions:
- Whether to explicitly mention AI-assisted iOS workflow in the public portfolio copy. Current copy omits it to avoid distracting from the accountable work scope.

Next Candidates:
- Restructure Projects page around career data: featured projects, role/impact-first cards, and detailed sections for problem, role, contribution, and result.
- Add richer project fields later only if the UI needs them, such as `impact`, `problem`, `contribution`, `result`, and `featured`.

## 2026-06-06 - Projects Quick Accessibility Fixes

Role Flow:
- PM: Confirmed the first implementation scope: remove `/privacy`, keep the current ProjectPanel structure, include home featured card linking, and fix validation scripts.
- Planner: Scoped changes to existing Projects, home preview, Footer, package scripts, and Jest configuration without adding libraries.
- Developer: Removed nested project card controls, improved ProjectPanel dialog behavior, linked the featured project card, removed the missing privacy link, and fixed lint/test generated-file scanning.
- QA: Ran static checks, tests, build, and browser checks for desktop and mobile Projects interactions.

Summary:
- Projects cards now use one native button per project instead of a `role="button"` wrapper around another button.
- ProjectPanel now renders only while open, has dialog labels, focuses the close button on open, traps Tab within the active dialog, locks body scroll, and restores focus to the triggering card on close.
- Home featured project cards now link to `/projects` when a `path` is provided.
- Footer no longer links to the missing `/privacy` route.
- `npm run lint` now runs ESLint against source/config files instead of generated `.next` output.
- Jest now ignores `.next` output to avoid haste-map package collisions after builds.

Files:
- Created: None.
- Modified: `src/components/projects/ProjectsContainerClient.tsx`, `src/components/projects/ProjectCard.tsx`, `src/components/projects/ProjectPanel.tsx`, `src/components/sections/ProjectCards.tsx`, `src/components/Footer.tsx`, `package.json`, `jest.config.ts`, `docs/task-log.md`.
- Not touched: Project data model, `getProjects()` data flow, routes, lockfiles, public assets.

Verification:
- `npx tsc --noEmit`
- `npm run lint` passes with 12 existing warnings.
- `npm test -- --runInBand`
- `npm run build`
- Browser QA on `/projects`: no nested project buttons, no closed dialog in DOM, dialog label exists, focus moves to close button, Escape close restores focus to the triggering card.
- Browser QA on mobile `/projects`: no horizontal overflow at 375px, one visible bottom-sheet dialog, close restores focus.
- Browser QA on `/`: featured project card links to `/projects`; no `/privacy` links remain.

Open Questions:
- None for this scope.

Next Candidates:
- Decide and implement Projects information architecture improvements: representative project emphasis, category/stack filtering, current-project signaling, and stronger outcome summaries.
- Clean existing lint warnings in About, ThemeToggle, History, BackgroundCanvas, and `src/lib/db.ts`.
- Address performance/accessibility risks in `BackgroundCanvas`, especially `prefers-reduced-motion` and resize handling.
- Resolve build warning about Next workspace root inference caused by multiple lockfiles.
- Review About/Contact semantic structure, including `ul` child structure and nested `main`.

## 2026-06-06 - Document PM Approval and Follow-up Workflow

Role Flow:
- PM: Confirmed that future work should start with stronger PM questioning, current-state verification, and unresolved-item tracking.
- Planner: Scoped the change to repository workflow documentation only.
- Developer: Updated `AGENTS.md` and recorded the durable workflow decision.
- QA: Verified the change is documentation-only and does not touch service code.

Summary:
- Added a rule that implementation starts only after explicit user approval.
- Added a rule that PM must keep track of deferred issues and raise them again in the next related planning step.

Files:
- Created: None.
- Modified: `AGENTS.md`, `docs/decisions.md`, `docs/task-log.md`.
- Not touched: `src`, `app`, `components`, `styles`, `public`, `package.json`, lockfiles.

Verification:
- Reviewed the edited documentation for scope and consistency with the existing portfolio cycle.

Open Questions:
- None.

Next Candidates:
- Use this workflow when planning the Projects quick fixes branch.
