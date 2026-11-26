# 전체 UI Tailwind 전환 검증 — 2026-11-26

## 범위와 결과

사용자가 특정 파일만 전환하지 말고 전체를 전환하도록 지시했다. 현재 화면과 사용자 수정 내용을 기준으로 스타일 구현만 변경했다. 서비스 코드 변경 있음. 새 라이브러리·데이터·API·운영 DB·배포 변경 없음.

- Projects 목록/필터/정렬/상세 패널/로딩, About/기술 목록, Contact/복사 상태, 공통 메뉴/푸터/셸을 Tailwind 유틸리티로 이전했다.
- 기존 홈과 이미 Tailwind인 컴포넌트는 유지했다. 미사용 구형 `sections/ProjectCards.tsx`도 별도 CSS 의존성을 제거했다. 구형 컴포넌트를 현재 화면에 추가하지 않았다.
- `folio.css`, `profile.css`, `header.css`, `personal-home.css`를 제거했다. `globals.css`에는 import, Tailwind theme/variant, 홈 전용 keyframe만 남았다. `@apply`나 다른 선택자 CSS 파일로 옮기지 않았다.
- 공통 셸 유틸리티는 `components/layout/portfolioStyles.ts`에서 공유한다. 반복되는 About 기술 행은 같은 파일의 `TechItem`으로 묶었다.
- 사용자 수정인 PROJECTS/PROJECT 표기, 제목 옆 대괄호 연도와 정렬, 상단 이름 미표시, 목록 hover 0.6초를 보존했다.

## 화면 비교

변경 직전 브라우저에서 레이아웃·타이포그래피·색상·여백 수치를 저장하고 전환 후 비교했다.

| 대상 | 폭 | 확인 |
|---|---|---|
| 홈·About·Projects·Contact | 1440, 1100, 768, 760, 390, 320px | 24개 페이지 화면의 기존 배치·글꼴·행간·색상·여백 유지 |
| Projects 메뉴 열림·상세 열림 | 같은 6개 폭 | 12개 추가 상태의 패널 위치·크기·본문 배치 유지 |
| 짧은/좁은 메뉴 | 667×375, 320×568 | 메뉴 영역이 뷰포트 안에 있으며 글자·링크 유지 |
| 로딩 UI | 1440, 390, 320px | JS 미실행 상태로 실제 Suspense fallback의 3개 행·여백·제목 막대·가로 넘침 없음 확인 |

안정된 화면의 위치·크기 및 표시되는 스타일은 이전과 일치했다. 비교 중 표시되지 않는 0px 테두리 색, Tailwind의 투명 그림자 레이어 직렬화, 닫힘 애니메이션 측정 시점의 0.12px 이하 차이는 시각적 회귀와 구분했다. PC About과 모바일 Projects 메뉴 캡처도 확인했다.

개발 서버가 삭제된 CSS import를 계속 제공하는 것을 확인해 재시작한 뒤 검증했다. 최초 캐시가 섞인 결과로 통과 처리하지 않았다.

## 동작 검증

- 1440/390/320px: 공개 13개 목록, 7개 필터, 대표5개·AI3개, 정렬, 상세 닫기 후 필터/정렬 보존.
- 메뉴: ArrowDown으로 첫 링크 진입, Escape 포커스 복귀, 바깥 클릭 닫기, 실제 About→Contact→Home 이동, 홈 메뉴3개 유지.
- 상세: Enter 열기, query 반영, 배경 inert, Tab/Shift+Tab 순환, Escape와 트리거 포커스 복귀, 뒤로/앞으로, 직접 딥링크, 열린 상태에서 PC→모바일 전환.
- 홈에서 오스템 상세 링크 연결.
- Contact: 격리된 브라우저의 Clipboard API 성공/실패 분기를 주입해 성공 안내, 실패 안내와 주소 선택 확인.
- light/dark 색상 전환 확인. 메뉴 펼침 타일 지연45/0/90/55ms 및 540ms transform 유지. reduced-motion에서 transition duration0/property none, 상세 열기·닫기 정상.
- 브라우저 JavaScript 오류 없음.

## 코드 검사

- `npm run lint`: 통과.
- `npm test -- --runInBand`: 5개 스위트 / 16개 테스트 통과.
- 최종 스타일 보완 후 `npm run build`: TypeScript 포함 통과.
- `git diff --check`: 통과.
- `src`의 자체 CSS 파일은 `globals.css` 하나이며 삭제 파일 import, `@apply`, 컴포넌트 `<style>`/정적 inline style 없음.

## 남은 범위

실제 브라우저 검증은 Chromium 기준이다. 현재 화면에 연결하지 않는 구형 컴포넌트는 코드·빌드 검증만 수행했다. 운영 데이터·공유 메타데이터·배포 점검은 기존 후속 작업으로 유지한다. Notion 상태 변경·커밋·push·배포는 수행하지 않았다.
