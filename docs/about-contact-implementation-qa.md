# About·Contact 서비스 적용 검증

일자: 2026-11-11

## 승인 범위와 구현

- About: `about-contact-focused.html`의 좌우 분할. 승인 소개와 기술 목록을 그대로 옮겼다. 모바일에서는 소개→기술 순서다. 본문 큰 Paris., 프로젝트 요약 재탕, 기존 성과·기술 카드와 등장 효과는 제외했다.
- Contact: `contact-simple.html`의 최신 지정안. 가용 화면 높이를 채우고 작은 Contact 제목과 이메일 텍스트를 중앙에 배치한다. 복사 아이콘은 정렬 너비에서 제외해 이메일 오른쪽에 둔다.
- 이메일 표시·mailto·복사 값 모두 `hwangseokparis@gmail.com`. 전화·소셜 링크·추가 소개 제거. Contact 푸터는 저작권만 표시한다.
- About/Contact 헤더 Paris.는 데스크톱24px·모바일22px. 시안의 인라인 메뉴와 현재 페이지 표시를 적용했다. 루트 main 하나만 사용한다.
- 홈·Projects 구현과 데이터는 보존했다. 기존 미커밋 작업을 되돌리지 않았다. 새 라이브러리·설정·운영 DB·배포 변경 없음.

## 검증 결과

- TypeScript `npx tsc --noEmit`, `npm run lint`, `git diff --check` 통과.
- `npm test -- --runInBand`: 2 suites / 5 tests 통과. Contact 신규 3건은 완료 전 성공 표시 방지·중복 실행 방지, 권한 거부 시 선택/안내, API 부재 시 선택/안내를 검증한다.
- `USE_DB=false npm run build` 성공. standalone 서버에서도 두 페이지·정적 자산·헤더·복사 동작을 확인했다.
- Chromium 1440/1024/768/390/320px 두 페이지: 가로 넘침 없음, main/h1 각각1개, 메뉴의 현재 위치 정확. About 두 문단 글자 크기 일치, 기술 내용 및 반응형 순서 확인.
- Contact 높이900px 환경에서 문서 높이900px, 이메일 수평 중심 오차0px, 제목/이메일 묶음의 가용 영역 수직 중심 오차0.01px 미만. 아이콘은 이메일 오른쪽. Contact의 외부 소셜 링크0개.
- Enter로 복사 실행 후 실제 Chromium Clipboard API에 저장된 주소를 다시 읽어 일치 확인. 권한 거부 모의 흐름은 성공을 표시하지 않고 주소를 선택하며 안내한다.
- 다크 테마·모션 감소, About↔Contact 링크·브라우저 뒤로 가기, Projects 딥링크와 Escape 닫기, 홈 대표 프로젝트3건 확인. 브라우저 JS 오류0건.
- About 데스크톱·모바일 및 Contact 모바일 캡처 검토. 기존 Contact 320px 가로 넘침 해결.

## 변경 파일

- 신규: `src/app/profile.css`, `src/components/contact/ContactBox.test.tsx`, 본 문서.
- 수정: `src/app/(pages)/about/page.tsx`, `src/app/(pages)/contact/page.tsx`, `src/components/about/AboutIntro.tsx`, `src/components/about/Stacks.tsx`, `src/components/contact/ContactBox.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/app/globals.css`.
- 기록: `docs/project-context.md`, `docs/decisions.md`, `docs/portfolio-improvement-plan.md`, `docs/task-log.md`.
- 검증 자료: 대화 시안 폴더 `profile-implementation-qa/`의 폭별 PNG·`results.json`. 임시 실행 스크립트는 `/tmp/paris-profile-qa/check.cjs`.

## 후속과 한계

- 운영 배포는 실행하지 않았다. 운영 DB·메타데이터·배포 점검은 기존 8단계 후속이다.
- 테마 저장/시스템 설정 정책과 사이트 전체 접근성 점검은 기존 7단계 후속이다. 실제 메일 앱 실행·실기기 Safari/Android는 미검증이다.
- Projects 기술 데이터에 GCP를 추가하는 작업은 이번 About/Contact 적용에 포함하지 않았다. 사용자 확인 경험은 About에 반영했으며 데이터 후속에서 대조한다.
