# Decisions

Use this file to record durable project decisions. Add the newest decision at the top.

## Template

```md
## YYYY-MM-DD - Decision Title

Status: Proposed | Accepted | Rejected | Superseded

Context:
- What problem or opportunity led to this decision?

Decision:
- What was decided?

Rationale:
- Why is this the right choice for now?

Impact:
- What files, UX areas, workflows, or constraints are affected?

Follow-up:
- What should be checked or done later?
```

## 현재 유효한 결정 — 2026-11-26

- 데스크톱: 소개/메뉴 1.8:1, 우측 동일 높이 3단. 이름부터 시작하는 소개 영역의 윗선을 About 글자 윗선에 맞춘다(짧은 화면은 최소 상단 여백48px). 시안2 sweep 사용.
- 전환: 우측380ms, 좌측은260ms 뒤 시작해600ms 동안 진행. 이전 색상은 새 레이어가 덮을 때까지 유지.
- 모바일: 650px 미만에서는 하단 고정3열, safe-area와 본문 가림 방지 여백 적용. 모바일·hover 미지원 환경은 색상 확산 없음.
- 스타일: 홈은 Tailwind. 다크 기본이며 홈·공통 헤더의 테마 버튼 제거.
- 소개: 기존 문구를 유지하고 사용자가 현재 홈 화면을 마무리하기로 했다. 추가 문구 변경은 별도 요청 시 진행한다. 대표 작업은 CIA → 오스템 → NH.
- 운영 DB·push·배포는 별도 범위. 아래 기록은 당시 결정의 이력이며, 현재 구현은 [project-context.md](project-context.md)를 기준으로 확인한다.

## Decision Log

## 2026-11-26 - 현재 홈 화면 마무리

Status: Accepted

- 사용자가 현재 홈 화면을 마무리하고 커밋하도록 요청했다. 직접 조정한 좌우 여백, 대문자 메뉴, Featured·전체 작업 글자 크기를 포함한다.
- 추가 홈 디자인·문구 수정은 별도 요청 시 진행한다. 지원 전 통합 점검과 운영 확인은 후속으로 유지한다.

## 2026-11-26 - 홈 소개 영역 상단 정렬

Status: Accepted

- 사용자 승인으로 데스크톱 소개 영역을 위로 올려 이름의 윗선을 우측 About 글자의 윗선에 대략 맞춘다.
- 화면 높이와 메뉴 글자 크기를 반영한 상단 여백을 사용하며 최소48px을 확보한다. 콘텐츠가 화면보다 길면 자연스럽게 스크롤한다.
- 모바일의 기존 상단44px 여백과 하단 고정 메뉴를 유지한다.

## 2026-11-25 - 모바일 하단 고정 메뉴 및 다크 기본

Status: Accepted

- 사용자 승인으로 홈 모바일 메뉴는 하단 고정한다. safe-area와 콘텐츠 가림 방지 여백을 포함하며 색상 확산은 사용하지 않는다.
- 다크 기본을 유지하고 홈·공통 헤더의 변경 버튼을 제거한다. 테마 컴포넌트 자체는 향후 재사용 가능하도록 남긴다.

## 2026-11-25 - 모바일은 정적 메뉴 사용

Status: Accepted

- 모바일 및 hover 미지원 환경에는 색상 확산 효과를 적용하지 않는다. 메뉴는 탭으로 즉시 이동하며 키보드 포커스 표시를 유지한다.

## 2026-11-25 - 모바일 홈 가로 내비게이션

Status: Superseded (일부)

상단 배치는 같은 날 승인된 하단 고정 메뉴로 대체.

- 650px 미만에서는 우측 영역을 없애고 상단 About·Projects·Contact 가로3열과 전체 폭 소개 영역을 사용한다. 데스크톱 배치는 유지한다.

## 2026-11-25 - 홈 스타일 Tailwind 사용

Status: Accepted

- 홈의 기존 디자인과 동작은 유지하면서 스타일을 컴포넌트의 Tailwind 클래스로 이전한다.
- personal-home.css에는 사용자 정의 clip-path 키프레임만 둔다. 다른 페이지의 CSS 전환은 이번 범위에 포함하지 않는다.

## 2026-11-25 - 시안2 sweep 전환과 연결 속도 조정

Status: Accepted

- 사용자 요청으로 홈을 시안2 sweep으로 변경한다.
- 좌측 시작 지연을 380ms에서 260ms로 줄여 우측 채움 후반부와 120ms 겹치게 한다. 좌측 sweep은 600ms로 설정한다.
- 기존 색상 유지 및 빠른 항목 이동 시 예약 취소 방식은 유지한다.

## 2026-11-25 - 홈 3블록 탐색 및 순차 색상 전환

Status: Superseded (일부)

기본 효과·비율·전환 시점은 이후 sweep/1.8:1/260ms로 대체. 3블록 구조와 레이어 유지 원칙은 유효.

- 사용자 시안 적용 요청에 따라 좌측 소개와 우측 About·Projects·Contact 동일 높이 3단 구성을 적용한다. 좌우 폭은 60:40이며 홈 헤더/푸터의 반복 이름은 제거한다.
- 사용자가 선호한 시안1 radial을 기본값으로 적용하고 시안2 sweep은 코드 옵션으로 남긴다.
- Hover 시 선택한 우측 항목만 채우고, 그 전환이 끝난 뒤 좌측 전체 색상을 확산한다. 다른 우측 항목은 기본색을 유지한다.
- 깜빡임을 방지하도록 이전 좌측 색상을 새 레이어가 완전히 덮을 때까지 유지하며 reduced-motion에서는 즉시 전환한다.


## 2026-11-25 - 소개 중심 홈 서비스 적용 승인

Status: Superseded (일부)

초기 링크 배치와 테마 버튼은 이후 분할 홈 및 버튼 제거 결정으로 대체. 소개·서체·대표 작업 원칙은 유효.

- 사용자 “적용해줘” 지시로 최신 홈 시안 서비스 반영 승인. 소개글은 기존 내용 유지하며 후속 수정 대기.
- 본문 PC16px/모바일15px와 About·Contact·Featured 표기를 확정했다. 간결한 대표3건 목록과 기존 상세 연결을 유지한다.
- 홈에서 Hwangseok Kim·Frontend Developer와 선택한 Chakra Petch/Pretendard 서체를 적용한다. 기존 테마 전환 기능은 유지한다.
- 운영 push·배포는 이번 적용에 포함하지 않는다.

## 2026-11-17 - 직무 강조와 소개 문단 흐름 정리

Status: Accepted (수정 방향), Proposed (구체 시안)

- 사용자가 직무 글씨 확대와 소개의 중간 빈 줄 제거, 디자인 에이전트 검토를 요청했다.
- 소개는 기존 두 문장을 한 문단으로 연결한다. 이름/직무 Chakra Petch·한글 Pretendard·간결한 작업3줄은 유지한다.
- 직무18px/모바일16px, 읽기 폭560px, 링크·작업·푸터 위계 정리는 검토 시안에 반영했다. 서비스 구현은 포함하지 않는다.

## 2026-11-17 - 직무 표기도 Chakra Petch 적용

Status: Accepted (시안 적용)

- 사용자 요청으로 Frontend Developer에도 이름과 같은 Chakra Petch600을 적용한다. 한글 본문은 Pretendard를 유지한다.

## 2026-11-17 - 홈 직무 표기 Frontend Developer 확정

Status: Accepted (시안 적용)

- 사용자 요청으로 이름 아래 직무 표기를 Frontend Developer로 변경한다. 소프트웨어 개발자 표기는 채택하지 않는다.
- Chakra Petch 이름·Pretendard 본문·기존 소개와 간결한 대표 작업 목록을 유지한다. 서비스 적용 승인은 별도다.

## 2026-11-12 - 홈 시안 Chakra Petch·Pretendard 조합 승인

Status: Accepted (시안 적용), Proposed (서비스 적용)

- 사용자 요청으로 소개 이름은 Chakra Petch600, 한글은 Pretendard로 홈 시안에 적용한다. 본문400·프로젝트명500으로 구분한다.
- 사용자가 프론트엔드 개발자라는 직무 정의의 적합성을 질문했다. 직무 문구 변경은 아직 결정하지 않았으며 시안은 기존 표기를 유지한다.
- 실제 서비스 코드·패키지·배포 변경은 포함하지 않는다.

## 2026-11-12 - 홈 소개 이름 서체 Chakra Petch 선택

Status: Accepted (서체 선택), Proposed (실제 서비스 적용)

- 사용자 비교 결과 홈 소개의 Hwangseok Kim 이름에 Chakra Petch600을 선택했다. 기본 홈 시안에 반영하고 비교 시안은 보존한다.
- 선택 범위는 소개 이름 서체다. 본문·헤더·푸터 전체 서체 변경이나 실제 서비스 구현 승인으로 확대하지 않는다.

## 2026-11-12 - 이름 서체 후보에 Righteous 추가

Status: Proposed (사용자 중간 선호, 최종 선택 아님)

- 사용자 요청으로 Righteous를 추가한다. 현재 후보는 Barlow Condensed·Chakra Petch·Righteous다.
- 추가 추천은4개로 한정한다. 최종 서체 선택·서비스 적용은 아직 미승인이다.

## 2026-11-12 - 이름 서체 중간 후보

Status: Proposed (사용자 중간 선호, 최종 선택 아님)

- 사용자는 Barlow Condensed와 Chakra Petch를 긍정적으로 평가했다. 둘을 후보로 보존하되 비슷한 서체에 한정하지 않고 추가 탐색한다.
- 특정 서체 설치·서비스 적용 승인은 아직 없다.

## 2026-11-12 - 기존 세리프 이름 시안 거절 및 전용 레터링 요청

Status: Rejected (기존 세리프 조합), Proposed (새 레터링)

- 사용자는 Georgia/이탤릭/색상 마침표 조합을 거절했다. 이를 최종 이름 디자인으로 재사용하지 않는다.
- 화려하지 않으면서 개성 있는 Hwangseok Kim 전용 레터링 제작을 요청했다. 직접 그린 단선 벡터 시안을 제시하며 최종 디자인·서비스 적용은 미승인이다.

## 2026-11-12 - 포트폴리오 표시 이름 변경

Status: Accepted (사용자 요청)

- 지원서와 연결되는 포트폴리오의 표시 이름은 Paris 대신 Hwangseok Kim을 사용한다.
- 현재 홈 시안의 헤더·소개 제목·푸터에 반영했다. 실제 서비스 적용은 아직 수행하지 않았다. 이메일·도메인 변경을 뜻하지 않는다.

## 2026-11-12 - 홈 재검토 범위와 소개 우선 방향

Status: Accepted (시안 방향), Proposed (구체 배치·서비스 적용)

- 사용자가 홈 재검토를 요청했다. 이전 홈 유지 결정은 이번 홈 시안 작업에 한해 대체한다. Projects는 유지한다.
- 큰 프로젝트 제목과 세로 반복을 줄이고 첫 화면에 소개, 그 아래 대표 작업을 배치한다.
- 데스크톱3열·모바일1열, 제목26px는 검토 시안이며 서비스 구현 승인이 아니다. 승인된 콘텐츠와 대표3건 순서는 유지한다.

## 2026-11-11 - ver2 로컬 전용 개발과 운영 버전 분리

Status: Accepted (사용자 지시)

- 새 포트폴리오 작업 브랜치는 `ver2`로 명명하고 로컬에서만 확인한다. 사용자 배포 승인 전 원격 push·main 병합·Vercel 프리뷰/운영 배포를 하지 않는다.
- 공개 주소는 `https://paris.me.kr`. 확인 당시 Vercel에서 이전 디자인을 제공하며 등록된 Vercel 주소와 정적 자산이 일치했다. 새 디자인 커밋은 원격에 없으므로 운영 롤백은 수행하지 않았다.

## 2026-11-11 - Projects 디자인 기준 확정

Status: Accepted (사용자 확정·커밋 요청)

- 현재 Projects 목록·필터·정렬·상세 패널·행 배경 이동을 앞으로의 디자인 기준으로 삼는다. 전체 재설계 대신 이 구성을 바탕으로 점진적으로 다듬는다.
- 프로젝트 세부 내용 수정은 별도 후속이다. 이번 커밋 요청으로 미확정 내용을 임의로 수정하지 않는다.

## 2026-11-11 - 행 좌우 여백과 배경 이동 지연

Status: Accepted (사용자 수정 요청)

- 프로젝트 행 콘텐츠에 데스크톱24px·모바일16px 좌우 여백을 항상 적용해 hover 시 글자가 움직이지 않게 한다.
- 사용자 정정: 지연 없이 즉시 시작하며, 최종 추가 요청에 따라1000ms 동안 이동한다. 모션 감소에서는 즉시 전환한다.

## 2026-11-11 - 프로젝트 행 전체 배경과 이동 전환

Status: Accepted (사용자 구현 요청)

- 제목 hover 밑줄을 제거하고 행 전체에 기존 테마의 hover 배경을 표시한다. 기존 Framer Motion의 공유 레이아웃으로 다른 행까지0.24초 동안 이동한다.
- 키보드 포커스도 같은 강조를 사용하며 기존 포커스 외곽선은 유지한다. 모션 감소에서는 즉시 전환하고 터치에는 hover를 남기지 않는다. 상세가 열리면 배경 강조를 숨긴다.

## 2026-11-11 - 최신순·다크 기본값과 중복 개수 제거

Status: Accepted (사용자 수정 요청, 직전 대표순 기본값·개수 배치 결정 대체)

- Projects 기본 정렬을 시작일 최신순으로 바꾼다. 오래된순·대표순은 선택 옵션으로 유지한다.
- 우상단 전체 개수와 아래 결과 개수, 그 사이 가로 구분선을 제거한다. 필터와 정렬 선택을 한 줄에 두고 그룹 제목의 개수만 시각적으로 유지한다. 스크린리더용 결과 안내는 유지한다.
- 사이트 기본 화면 모드는 다크다. 서버 HTML과 ThemeProvider의 초기 상태를 일치시켜 첫 표시도 어둡게 한다. 수동 전환은 유지하며 새 테마 저장 정책은 추가하지 않는다.

## 2026-11-11 - 프로젝트 필터·전체 개수 정렬과 날짜순 선택

Status: Accepted (사용자 구현 요청)

- 필터와 전체 프로젝트 개수를 한 줄에 배치한다. 모바일에서는 필터만 가로로 스크롤하고 전체 개수는 오른쪽에 유지한다.
- 기존 대표순을 기본값으로 두고 최신순·오래된순 선택을 추가한다. 날짜순은 프로젝트 시작일 기준으로 선택한 필터 결과 전체에 적용하며 대표/기록 그룹을 합친다.
- 월까지만 있는 시작일은 해당 월 1일로 비교한다. 날짜가 같으면 원래 순서를 유지하고 미확인·잘못된 날짜는 양쪽 정렬 모두 마지막에 둔다. 원본 기간 표기는 변경하지 않는다.
- 정렬 선택은 결과 개수 행 오른쪽에 두고 기존 상세 열기·닫기·뒤로 가기에서 필터와 선택 상태를 유지한다. 새로 진입하면 기본 대표순으로 시작한다.

## 2026-11-11 - 상세 기간·AI 분류 표기

Status: Accepted (사용자 수정 요청)

- 상세 메타 정보에서 `기간` 접두어를 제거하고 기간 값만 표시한다. 분류가 `AI`인 경우 `AI Agent`로 표시한다. 원본 분류와 필터 동작, AI/Voice 등 다른 분류는 유지한다.

## 2026-11-11 - 프로젝트 제목 크기와 상세 위계 축소

Status: Accepted (사용자 균형 조정 요청)

- 목록 프로젝트명은 데스크톱32px·모바일26px, 상세 제목은40px·30px로 낮춘다. 담당 역할은20px·18px, 본문16px로 위계를 정리한다.
- 긴 정식 이름에 맞춰 제목 행간과 자간을 완화하고, 회사명/한글 제목과의 간격을12px/10px로 조정한다. 제목 최대폭을 늘려 불필요한 줄바꿈을 줄인다. 홈의 승인된 대표 작업 구성은 이번 수정 범위가 아니다.

## 2026-11-11 - 상세 닫기 아이콘과 회사명 위치 정리

Status: Accepted (사용자 수정 요청)

- 상세 팝업 닫기는 보이는 텍스트 없이26px X만 표시한다. 클릭 영역44px와 접근 가능한 이름 `프로젝트 상세 닫기`는 유지한다.
- 회사명은 닫기 툴바에서 프로젝트 제목 바로 위로 이동한다. 제목과 같은 왼쪽 기준선,14px 간격으로 묶는다. 툴바 구분선을 없애고 상단 여백을 줄인다.

## 2026-11-11 - 페이지 제목을 헤더 왼쪽으로 이동

Status: Accepted (사용자 구현 요청)

- 홈의 헤더 왼쪽은 `Paris`, 나머지는 해당 메뉴의 `Projects`·`About`·`Contact`로 표시한다. 끝의 마침표는 붙이지 않는다.
- 본문의 `About.`·`Projects.`와 About의 중복 소개 라벨을 제거한다. Projects 로딩 화면에서도 큰 제목을 제거한다. 페이지 제목 제거 후 본문 상단 간격을 정리한다.
- About/Projects의 h1은 헤더에 두어 제목 의미를 유지한다. 홈과 Contact는 기존 본문 h1을 유지하고 Contact 중앙의 제목·이메일 배치는 변경하지 않는다. 네 메뉴·현재 위치·동일 라우팅은 유지한다.

## 2026-11-11 - Projects 정보 분리·명칭·전환과 헤더 통일

Status: Accepted (사용자 수정·구현 요청)

- Projects. 제목은 기존 최대108px에서 최대46px, 모바일32px로 축소한다. 새로운 폰트 의존성이나 페이지별 헤더 이름 교체 없이 제목 비율을 조정한다.
- Projects 목록은 프로젝트가 어떤 서비스인지 소개한다. 담당 역할·개인 기여 중심 설명은 선택 후 기존 상세 패널에서 보여준다. 확인된13건의 소개를 표시 계층에 분리하고 원래 역할·기여 데이터는 보존한다.
- CIA의 표시 이름은 Content Intelligence AI로 통일한다. 관련 회사는 SAMSUNG ELECTRONICS, 오스템은 OSSTEM IMPLANT로 표기한다. 홈·목록·상세에 적용하며 삼성증권에는 전자 회사명을 적용하지 않는다.
- 모든 페이지의 헤더는 단일 컴포넌트와 스타일을 사용한다. 작은 Paris.와 홈·작업·소개·연락을 같은 순서로 항상 표시하고 각각 `/`, `/projects`, `/about`, `/contact`로 연결한다. 홈에서 다른 경로 대신 섹션 앵커를 쓰던 분기와 모바일 숨김·LegacyHeader를 제거한다.
- 기존 상세 패널에 짧은 등장·닫힘 애니메이션을 추가한다. 닫힘이 끝날 때까지 배경 잠금·포커스 처리를 유지하고 모션 감소 환경에서는 즉시 전환한다. 필터·딥링크·내부 스크롤·키보드 동작을 유지한다.
- 기존 Framer Motion 사용, 새 의존성 없음. 운영 DB 변경·배포는 포함하지 않는다.

## 2026-11-11 - About 좌우 분할·Contact 중앙 정렬 서비스 적용

Status: Accepted, 로컬 구현·검증 완료

- 사용자가 About은 `about-contact-focused.html`의 좌우 분할, Contact는 `contact-simple.html`의 최신 중앙 정렬 구성으로 실제 사이트 적용을 명시 승인했다.
- About은 승인 소개 두 문단을 같은 크기로 표시하고 여섯 기술 분류와 Git·GitLab·SVN, CIA의 GCP 경험을 반영한다. 프로젝트 내용 반복·성과 카드·등장 효과는 제거한다.
- Contact는 헤더·푸터를 제외한 가용 화면을 채운다. 작은 제목 아래 이메일 텍스트 자체를 중앙에 맞추고 복사 아이콘은 오른쪽에 별도 배치한다. 전화·소셜·카드·부가 소개는 없다.
- 두 페이지에 작은 Paris. 헤더와 시안의 인라인 내비게이션을 적용한다. 홈·Projects 화면 및 프로젝트 데이터·필터·상세 패널은 유지한다.
- 기존 React/Next.js/Lucide와 ThemeProvider를 사용한다. 새 의존성 없음. Clipboard API 성공 후만 완료 표시, 실패 시 주소 선택과 직접 복사 안내.
- 로컬 소스 적용과 검증은 완료했다. 운영 DB 변경·커밋·배포는 포함하지 않는다. 검증은 `docs/about-contact-implementation-qa.md`에 기록했다.

## 2026-11-11 - Contact 전체 화면 중앙 정렬

Status: Accepted (사용자 지정 구성)

- Contact는 화면을 채우고 본문을 수평·수직 중앙에 배치한다. 작은 `Contact` 제목 아래 `hwangseokparis@gmail.com`과 바로 옆 복사 아이콘만 둔다.
- 둘째 줄의 중앙 정렬 기준은 이메일 텍스트 자체다. 복사 아이콘은 텍스트 오른쪽에 별도로 붙이며 정렬 너비에 포함하지 않는다.
- 카드, 밑줄, 화살표, 복사 버튼의 보이는 문구를 제거한다. 공통 헤더 축소와 이메일만 제공하는 범위는 유지한다.
- `contact-simple.html` 시안에 반영했다. 대화 미리보기는 높이720px의 화면을 표현하며 서비스 적용 시 실제 가용 화면 높이를 사용한다. 서비스 코드 미변경.

## 2026-11-11 - Contact 카드형 표현 거절

Status: Accepted (카드 제거), 수정 배치는 Proposed

- 사용자가 Contact 이메일을 카드로 감싼 처리를 거절했다. 직전 테두리·배경·둥근 모서리 제안을 철회한다.
- `contact-simple.html`은 데스크톱에서 작은 제목과 이메일을 좌우로 정렬하고, 모바일에서는 위아래로 배치한다. 이메일의 밑줄·화살표와 작은 복사 동작만 남긴다. 카드·장식용 메일 아이콘·중복 이메일 라벨을 제거했다.
- 헤더 축소와 이메일 전용 범위를 유지하며 서비스 코드는 변경하지 않는다.

## 2026-11-11 - Contact 시안의 헤더 축소와 이메일 표현 보완

Status: Accepted (수정 요청), 세부 표현은 Proposed

- 사용자 요청에 따라 `contact-simple.html`의 헤더 Paris.를 데스크톱24px·모바일22px로 줄였다. 서비스 공통 헤더에는 아직 적용하지 않았다.
- 작은 Contact 제목과 일반 크기 이메일을 유지하면서, 이메일 영역에 얇은 테두리·은은한 배경·메일 아이콘을 추가했다. 메일 링크의 화살표·호버와 주소 복사 성공 상태를 구분한다.
- 이메일만 제공하는 범위와 확정된 홈·Projects·About 디자인은 유지한다. 이번 변경은 시안 보완이다.

## 2026-11-11 - Contact를 작은 제목과 이메일만으로 단순화

Status: Accepted (사용자 수정 요청), 서비스 적용 미승인

- 사용자는 Contact 제목과 이메일을 과도하게 크게 표시하는 방식을 거절하고 단순하게 구성하도록 요청했다. 블로그·인스타그램을 빼고 이메일만 남기라고 명시했다.
- 연락 영역의 GitHub도 이메일만 남기는 범위에 따라 함께 제외한다. 이전의 외부 링크 유지 제안을 대체하며 Contact 푸터에도 소셜 링크를 넣지 않는다.
- `contact-simple.html`은 Contact 제목 24px(모바일22px), 이메일 18px(모바일17px)로 구성한다. 큰 메일 버튼·색면·별도 이름/직무·인사 문구를 없애고 이메일 링크와 작은 주소 복사 버튼만 둔다.
- 공통 헤더 및 확정된 홈·Projects·About은 유지한다. 이번 변경은 시안이며 실제 서비스 코드 적용은 아직이다.

## 2026-11-11 - Contact 외부 포트폴리오 참고 시안

Status: Accepted (Contact 조사·시안 요청), 두 시안은 Proposed

- 사용자가 다른 개발자 포트폴리오를 참고한 Contact 시안을 요청했다. 홈·Projects와 About 좌우 분할은 확정 상태로 유지한다.
- Paco Coursey의 간결한 연락 정보, Rauno의 Email/Copied 표기, Dennis Snellenberg의 연락처/보조 정보 구분, Brittany Chiang v4의 단일 메일 CTA를 조사했다. 확인 범위와 적용 원칙은 `docs/contact-design-references.md`에 기록했다.
- `contact-reference-concepts.html`에 이메일 주소 중심안과 메일 버튼 중심안을 만들었다. 두 안 모두 이메일 보내기와 주소 복사를 제공하고 복사 성공 이후에만 완료를 표시한다. 거부 시 주소 선택으로 대체한다.
- 문의 폼·전화번호·새 영업 문구·응답 약속은 추가하지 않는다. 현재 선택은 Contact 검토 제안이며 서비스 코드 변경은 포함하지 않는다.

## 2026-11-11 - About 좌우 분할 레이아웃 확정

Status: Accepted (About 레이아웃), Contact는 별도 검토

- 사용자는 `about-contact-focused.html`의 선택된 `좌우 분할` 안으로 About 레이아웃을 확정했다. 데스크톱은 소개와 사용 기술을 좌우로 배치하고 모바일은 소개→기술 순서로 쌓는다.
- Contact는 다르게 진행한다고 명시했다. 같은 시안의 Contact 배치를 About 승인에 포함하지 않는다.
- 홈·Projects의 확정 디자인을 유지한다. 이번 결정은 About 레이아웃 선택이며 서비스 적용 작업은 아직 시작하지 않는다.

## 2026-11-11 - 재설계 범위를 About·Contact로 정정

Status: Accepted (사용자 명시 정정), About·Contact 두 배치안은 Proposed

- 사용자는 홈 디자인은 이미 확정됐으며 재미없다는 평가는 About·Contact를 뜻했다고 정정했다. 직전 전체 사이트 재설계는 에이전트가 범위를 잘못 확대한 작업이다. 홈·Projects 변경 제안은 철회하고 기존 승인 디자인을 유지한다.
- 새 시안 `about-contact-focused.html`은 About·Contact만 포함한다. 공통 헤더·내비게이션·서체·바탕색은 기존 승인안을 기준으로 유지한다. 홈·작업 링크는 기존 경로 연결 대상만 표시한다.
- `섹션 대비`는 소개 아래 기술을 단일 색면으로 묶고 Contact 이메일에도 같은 색면을 사용한다. `좌우 분할`은 소개/기술과 보조 정보/이메일을 각각 병렬로 배치한다. 모바일은 소개→기술, 이름→이메일→외부 링크 순서다.
- About ‘해온 일’ 제거, 본문 큰 Paris. 제거, 소개 두 문단 동등 크기, 확정 기술·이메일 및 거절 표현 제거를 유지한다. 서비스 구현 승인으로 확대하지 않는다.

## 2026-11-11 - 전체 디자인 재검토와 About 중복 제거

Status: Accepted (디자인 에이전트 분석·새 시안 요청), 두 대안은 Proposed

- 사용자는 About의 ‘해온 일’이 Projects 재탕임을 지적하고 전체 디자인이 단조롭다고 평가했다. 디자인 에이전트를 호출해 다시 분석하고 시안을 제시하도록 명시적으로 요청했다.
- 전용 디자인 에이전트의 1차 분석과 새 시안 2차 검토를 수행했다. 기존 큰 제목·구분선·동일 행 반복을 줄이고 페이지의 목적과 탐색 방식이 구별되도록 한다.
- 새 `비대칭 쇼케이스`는 3개 대표 작업의 역할·요약을 동시에 보여준다. `프로젝트 내비게이터`는 작은 좌측 내비게이션과 선택 작업 미리보기를 사용한다. B의 요약 선택 노출은 기존 기본 노출에서 달라지는 검토 제안이다.
- About의 프로젝트별 ‘해온 일’은 새 시안에서 제거하고 승인 자기소개·사용 기술만 남긴다. 독자적인 경력 이야기나 일하는 기준을 임의로 만들지 않는다.
- 현재 적용된 홈·Projects와 이전 시안은 보존한다. 새 디자인 승인·서비스 적용을 완료로 처리하지 않는다. 공개 제한·승인 문구·필터·프로젝트 ID·확정 연락처를 유지한다.
- 분석과 검증 세부 내용: `docs/design-review-2026-11-11.md`.

## 2026-11-11 - 본문 이름 장식 제거와 기술 경험 추가

Status: Accepted (사용자 요청 수정), About·Contact 전체 서비스 적용은 미승인

- 사용자는 About·Contact 본문의 큰 `Paris.` 반복 표시와 소개 두 문단의 불필요한 크기 차이를 거절했다. 본문은 김황석·프론트엔드 개발자만 표시하고 두 소개 문단의 글자 크기·굵기·행간·자간을 동일하게 맞춘다. 첨부 이미지가 지목한 본문 영역이 대상이며 공통 헤더 로고는 유지한다.
- Contact의 `다른 곳에서도` 문구는 거절된 표현으로 기록하고 다시 사용하지 않는다. 해당 외부 링크 목록은 `링크`로 표시한다.
- 사용자 확인 경력: Git·GitLab·SVN 사용 경험이 있으며 삼성전자 CIA 개발·배포에 GCP를 사용했다. 시안의 버전 관리 및 개발·배포 환경에 추가한다. GCP의 세부 서비스·운영 책임·구축 범위는 추정하지 않는다.
- 이번에는 시안과 문서에 반영한다. CIA 서비스 데이터에 GCP를 추가하는 정합성 작업은 다음 승인된 서비스 적용 범위에서 검토한다.

## 2026-11-11 - 채용 검토 관점의 사용 기술 구성

Status: Accepted (수정 방향), 구체적 시안 문구·배치는 Proposed

- 사용자는 `웹 화면` 아래 언어와 프레임워크가 섞인 구성을 지적하고 `스타일링`이라는 분류명을 거절했다. IT 채용 담당자 입장에서 구성하도록 요청했다. 단순히 용어를 바꾸는 대신 기술 종류와 실제 사용 경험을 함께 읽을 수 있게 한다.
- 시안은 언어 / 프레임워크·라이브러리 / 상태 관리·데이터 조회 / CSS 프레임워크 / 버전 관리 / 개발·배포 환경으로 정리한다. React와 프레임워크를 포괄하는 분류명을 사용하고 Tailwind CSS를 언어 CSS 자체와 동일시하지 않는다.
- TypeScript·JavaScript를 먼저 표시하고 Kotlin·Swift의 오스템 앱 개발 사용 범위를 명시한다. React·Vue 3·Next.js는 공개 프로젝트 데이터의 사용 사례를 함께 표시한다. 숙련도·사용 연수·주력 순위는 추정하지 않는다.
- WebView Bridge는 제품별 기술 나열에서 제외하고 기존 웹·앱 연동 경험과 프로젝트 상세로 설명한다. Pinia·Zustand와 React Query의 용도를 구분하고 Git은 버전 관리로 분리한다.
- About 사용 기술 부분의 시안 수정이며 서비스 적용 승인은 포함하지 않는다. Contact와 기존 경험 본문은 보존한다.


## 2026-11-10 - About·Contact 시안 착수 및 대표 연락처 확정

Status: Accepted (시안 제작 범위·연락처), 디자인과 About 재편집 문구는 Proposed

- 사용자는 현재 About·Contact 화면을 먼저 확인하고 홈·Projects와 어울리는 모바일·데스크톱 시안을 요청했다. 서비스 구현은 이번 범위에 포함하지 않는다.
- 대표 이메일 표기는 사용자 확인으로 `hwangseokparis@gmail.com`으로 확정했다. 기존 화면의 점 있는 주소와 링크의 점 없는 주소 차이를 새 시안에서 통일한다. 사용자는 전화번호 대신 이메일만 표시하기로 결정했다. 기존 GitHub·Blog·Instagram 연결은 보조 링크로 제안하며 새 연락 수단이나 답변 기한을 만들지 않는다.
- 현재 About의 Festival Life 진행 중 설명은 확인된 2026.08 참여 종료와 다르다. 성과 카드의 일정 준수율 100%·배포 시간 50% 감소 등은 근거가 확인되지 않아 새 시안에서 제외한다. 원본 서비스 코드는 이번에 변경하지 않는다.
- About 시안: 승인 자기소개 → 실제 맡은 일 네 가지(화면 구조/데이터 표현, 웹·앱 연동, 팀 리딩/협의, 서비스 기획/관리자 웹)와 기존 상세 링크 → 사용 기술. 오스템 AI 활용/직접 검토·수정·검증과 NH의 PL 인계·교보 3인 팀 구분을 유지한다. Festival Life는 확인된 참여 기간으로 표시한다. 새로운 고용 이력·성과·자격·채용 상태는 추정하지 않는다.
- Contact 시안: 큰 이메일과 이메일 보내기 → 기존 외부 링크 → 다른 페이지 연결. 전화·중첩 카드·그라데이션·중복 저작권을 제거한 제안이다. 실제 메시지를 보내거나 메일 앱을 실행하지 않고 링크 연결 대상만 확인한다.
- 두 화면의 서체·색상·구분선·헤더는 승인된 타입 인덱스 규칙을 따른다. 시안의 내용 재편집·배치는 사용자 검토 전이며 서비스 적용 승인은 별도다.


## 2026-11-10 - 타입 인덱스 시안 승인 및 서비스 적용

Status: Accepted

- 사용자가 홈 `home-type-index-refined.html`과 목록·상세 `projects-type-index.html`을 승인하고 실제 사이트 적용을 요청했다. 디자인 검토(TASK-257)를 완료하고 홈(TASK-258)·Projects(TASK-259)를 구현한다.
- 홈은 짧은 소개 → 대표 3건 → 전체 프로젝트 연결 → 승인 자기소개 순서다. 기술은 각 작업의 텍스트로 표시하고 기존 홈의 기술 로고 카드·배경/반복 모션을 이 화면에서 제거한다. About의 기술 정보와 기존 컴포넌트 파일은 보존한다.
- 목록은 대표 5건과 나머지 8건을 중복 없이 표시하며 기존 필터 7종·프로젝트 ID·쿼리 딥링크와 데이터 조회 계약을 유지한다. 영문 표제는 승인 시안의 표시용 이름으로 분리하며 원래 경력 데이터는 변경하지 않는다.
- 기존 ProjectPanel을 시안에 맞춰 변경하고 실제 고정 뷰포트에서 스크롤·본문 잠금·Escape·포커스 제한/복귀·뒤로 가기를 검증한다.
- 대상: 홈/Projects 페이지·기존 Hero/ProjectCards/ProjectsPreview/ProjectsHeader/ProjectCard/ProjectPanel 및 스켈레톤, 범위가 제한된 스타일, 해당 경로의 헤더/푸터 표시. 기존 다른 페이지와 데이터·의존성 변경은 제외한다.
- 검증: lint·타입 검사·기존 테스트·빌드 및 320/390/768/1440px, 라이트/다크·모션 감소, 필터 결과·13건 상세·홈 링크·직접 진입·뒤로 가기·모바일 스크롤. 운영 DB·배포는 앞서 정한 후순위로 유지한다.

## 2026-11-09 - 타입 인덱스 전체 목록·상세 패널 시안 확장

Status: Accepted (타입 인덱스 방향의 목록·상세 시안 요청), 디자인은 Proposed

- 사용자는 홈 타입 인덱스 방향을 전체 프로젝트 목록과 상세 패널로 확장해 모바일·데스크톱 시안을 요청했다. 실제 서비스 구현·DB·배포 승인은 포함하지 않는다.
- 목록은 공개 데이터 13건을 사용한다. 대표 5건을 승인 순서로 먼저 표시하고 나머지 8건을 기존 데이터 순서로 이어 배치한다. 현재 구현의 대표/전체 중복 노출은 시안에서 제거하되 기존 7개 필터의 판정 로직은 유지한다. `All` 표시만 `전체`로 번역한다.
- 목록 행은 영문 작업명·한국어 제목·기간과 역할·소개를 나란히 배치하며 모바일은 세로로 읽는다. 새 영어 표기는 승인된 한국어 작업명의 시안용 번역이고 고객사의 공식 영문 제품명을 새로 확정한 것이 아니다.
- 상세는 기존 데스크톱 중앙 패널·모바일 하단 패널 형태를 유지한다. 영문 Hero → 담당 역할/소개 → 주요 기여 → 사용 기술 순서로 읽고, 기여 항목이 없는 프로젝트는 빈 섹션을 만들지 않는다. 전체 승인 문구·오스템 AI 활용 설명·13개 기존 ID를 유지한다.
- 시안에서 필터·열기/닫기·Escape·포커스 제한/복귀를 확인한다. 대화형 미리보기는 긴 상세를 자연 높이로 모두 보여주며 실제 고정 뷰포트의 내부 스크롤·본문 스크롤 잠금·라우터 뒤로 가기는 서비스 구현 단계의 검증 항목으로 남긴다. 프로젝트 링크는 기존 `/projects?project={id}` 대상 확인이며 호스트 사이트로 이동하지 않는다.

## 2026-11-09 - 타입 인덱스 우선 방향 및 역할·요약 위계 보완

Status: Accepted (타입 인덱스 기준 보완 요청), 보완 디자인은 Proposed

- 사용자는 타입 인덱스가 더 낫다고 평가하고 이 안을 기준으로 담당 역할과 요약 노출을 다듬어 모바일·데스크톱으로 다시 보여 달라고 요청했다. 타입 인덱스를 작업 방향으로 삼되 서비스 구현 승인으로 확대하지 않는다.
- 담당 역할을 작은 보조 문구에서 주요 정보로 올린다. `담당 역할` 표기 아래 22~25px의 굵은 문구를 배치하고, 한국어 프로젝트 제목과 기술 목록은 보조 정보로 구분한다. 기존 승인 문구는 그대로 유지한다.
- 이번 제안은 세 프로젝트의 승인 요약을 모두 기본 노출한다. 별도 펼치기 없이 읽게 하며 말줄임·임의 축약을 적용하지 않는다. 데스크톱에서는 역할과 요약을 나란히, 모바일에서는 역할 다음에 요약을 놓고 본문 들여쓰기를 제거한다.
- 영문 작업명·CIA 풀네임·대표 순서·기간·기존 링크 ID와 카드 없는 표현을 유지한다. 직전 두 대안과 보류한 브랜드 전시형 원본은 보존한다. 전체 목록·기존 상세 패널은 후속 검토 범위다.

## 2026-11-09 - 브랜드 전시형 보존·보류 및 비카드형 대안 2개

Status: Accepted (기존 안 보류·대안 제작 요청), 새 디자인은 Proposed

- 사용자는 직전 `home-brand-gallery.html`이 그나마 낫다고 평가하고 일단 홀드하도록 요청했다. 원본을 수정하지 않고 후보로 보존한다. 최종 선택이나 서비스 구현 승인으로 처리하지 않는다.
- 카드형 표현을 피한 대안은 정확히 2개다. `타입 인덱스`는 큰 영문 작업명·기간·역할을 세로로 훑고 작업 요약을 펼친다. `에디토리얼`은 삼성전자 작업과 소개를 비대칭 지면으로 배치하고 오스템·NH를 다음 두 칼럼으로 읽는다. 모바일은 한 열로 재배치한다.
- 두 안 모두 카드 배경·둥근 외곽·이미지 없이 타이포그래피·여백·구분선으로 구성한다. CIA 풀네임, 영문 Hero, 승인된 한국어 내용·대표 순서·기간·링크 ID를 유지한다. 확인된 브랜드 색은 작은 식별 표시에만 사용한다.
- 새로운 안의 요약 펼치기는 홈 시안의 탐색 제안이며 실제 프로젝트 상세 패널을 대체하지 않는다. 전체 목록·기존 상세 패널 시안과 서비스 구현은 후속 범위다. 기존 안만 보류하며 TASK-257의 대안 검토는 계속한다.

## 2026-11-06 - 영문 프로젝트 표지·브랜드 색상 및 홈 연결감 수정

Status: Accepted (사용자 수정 요구), 수정 디자인은 Proposed

- CIA 표지에 `Content Intelligence AI`를 항상 표시한다. 프로젝트별 Hero는 영문으로 구성하고 승인된 한국어 제목·역할·요약은 설명 영역에 유지한다.
- 직전 전시형의 임의 연두색·회색을 교체한다. 오스템은 [공식 가이드](https://osstem.eu/cs/branding/)의 Orange `#EB6100`. NH는 [공식 그룹 CI](https://www.nhfngroup.com/user/indexSub.do?codyMenuSeq=884086974&siteId=nhfngroup)의 NH Blue/Pantone 300C 및 NH Yellow/Pantone 1235C를 사용한다. 시안 RGB `#005BAC`·`#FABE00`은 해당 공식 웹 색상표의 이미지에서 추출한 값이며, 문서에 명시된 공식 HEX 값이라고 주장하지 않는다. 삼성 표지의 남색은 포트폴리오 조판용 색상이다.
- [Seán Halpin](https://www.seanhalpin.xyz/)의 표지 간격·모서리 일관성과 [Paco Coursey](https://paco.me/)의 텍스트 위계를 참고한다. 영문 표지에만 브랜드 색을 집중하고, 한국어 설명은 페이지의 공통 배경에서 읽도록 구성한다. 헤더·대표 영역·자기소개 좌우 기준선과 제목·역할·요약·링크의 정렬을 통일한다.
- 공개 텍스트·대표 순서·기간·기여와 공개 제한은 유지한다. 영문 표지는 기존 작업명의 번역이며 새 성과나 고객사 제품 UI를 추가하지 않는다. 수정 시안은 최종 디자인 승인이나 서비스 구현 승인으로 취급하지 않는다. 전체 목록·기존 상세 패널은 후속 범위다.

## 2026-11-06 - 기존 목록형 시안 거절 및 프로젝트 전시형 재설계

Status: Rejected (직전 텍스트 폴리오), 새 전시형은 Proposed

- 사용자는 직전 시안이 이전과 같고 레퍼런스 조사 이후 발전이 없다고 지적했다. 좌우 자기소개와 세로 프로젝트 목록을 유지한 채 서체·색만 바꾼 접근이 문제였음을 확인했다. 텍스트 전용 공개 범위는 계속 유지한다.
- 새 제안은 큰 자기소개 표지를 없애고 대표 작업 3건을 첫 화면의 중심으로 펼친다. 데스크톱에서 모든 역할·요약을 동시에 볼 수 있고, 모바일에서는 프로젝트 이름으로 한 장씩 전환한다. 자기소개 본문은 아래로 이동한다.
- 앞서 확인한 Rauno의 글자·색면 전시 원리를 참고했다. CIA, 오스템, NH투자증권의 승인 제목을 서로 다른 조판으로 보여준다. 파란색·연두색·회색은 포트폴리오의 시안 색이며 고객사 로고·공식 브랜드 자산이 아니다. 소개 우선의 기존 안과 첫 화면의 내용·구성·모바일 탐색이 다르다.
- 제목·기간·역할·요약과 순서를 유지한다. 서비스 UI나 고객사 화면을 재현하지 않는다. 디자인 확인 전 제안 상태이며 실제 사이트·필터·딥링크·상세 패널·DB·배포 변경을 승인한 의미는 아니다.

## 2026-11-06 - 공개 승인 텍스트만으로 홈 시안 구성

Status: Accepted (텍스트 전용 시안 제작 범위), 디자인은 Rejected (후속 피드백)

- 사용자는 B2B·내부용 프로젝트의 공개 제한을 고려해 공개 승인된 텍스트만으로 데스크톱·모바일 시안을 다시 만들도록 요청했다. 화면 이미지·데모·고객사 원자료 없이 완성되는 구성을 기준으로 한다.
- 기존 조사에서 확인한 글자 중심 표지·넓은 작업 목록·역할 정보 위계를 적용했다. 승인 자기소개와 홈 3건의 제목·역할·요약·기간·기술을 유지한다. 삼성전자 CIA → 오스템 → NH투자증권 순서는 그대로다.
- 새 제안은 세리프 이름, 산세리프 프로젝트 제목, 파란 역할 문장과 번호, 구분선으로 위계를 만드는 텍스트 폴리오다. 역할·요약은 항상 보이며 모바일에서는 한 열로 재배치한다. 가짜 화면이나 공개 제한 안내문을 포트폴리오 내용으로 추가하지 않는다.
- 시안의 상세 링크는 기존 ID를 유지하며 연결 대상만 확인한다. 기존 상세 패널·필터·서비스 내비게이션 구현은 변경하지 않는다. 오스템 AI 활용 설명 등 기존 상세 데이터도 유지한다.
- 실제 사이트 구현·최종 디자인 승인·DB·배포 승인을 포함하지 않는다. A~E와 조사 자료는 보존한다.

## 2026-11-05 - 실제 개발자 포트폴리오 조사 후 디자인 방향 재설정

Status: Accepted (레퍼런스 조사 요청), 디자인 방향은 Proposed

- 사용자는 D/E까지 평범하다고 평가하고 잘 만든 개발자 포트폴리오를 먼저 조사한 뒤 디자인을 다시 잡도록 요청했다. 기존 A~E를 최종안으로 전제하지 않는다.
- 실제 사이트의 현재 데스크톱·모바일 화면을 확인했다. 다음 제안의 주 참고는 Olivier Larose의 글자 중심 표지 구성과 Dennis Snellenberg의 작업 목록이며, Brittany Chiang의 역할·기간·기여 정보 위계를 함께 참고한다. Rauno Freiberg의 가로 전시 구조는 차별화 사례로 검토하되 그대로 적용하지 않는 방향이다.
- 제안: 짧은 표지와 작업 목차를 연결하고, 삼성전자 CIA → 오스템 → NH투자증권을 넓은 세로 챕터로 펼친다. 큰 프로젝트 제목과 작은 역할·기간을 대비하고 승인 소개의 읽는 폭을 제한한다. 이름의 타이포그래피, 여백 비율, 제목과 본문의 대비를 하나의 시각 규칙으로 설계한다.
- 원본 사진·일러스트·사이트를 복제하는 안은 아니다. 기존 승인 문구·공개 제한과 서비스 동작을 유지한다. 채용 적합성은 읽기 흐름에 대한 설계 판단이며 실제 채용 반응을 검증했다는 의미가 아니다.
- 이번 결과는 조사와 디자인 방향 제안이다. 새 반응형 시안·디자인 승인·서비스 구현은 완료로 처리하지 않는다. DB·배포 이연도 유지한다.

## 2026-11-05 - 기존 구조 제약 없는 홈 시안 재검토

Status: Accepted (시안 범위), D/E 디자인은 Proposed

- 사용자는 기존 구조를 포함하려는 접근을 지적하고 구조가 완전히 달라도 된다고 명시했다. 기존 배치·섹션 순서·탐색 방식을 시안의 제약으로 두지 않는다.
- 승인 경력·공개 제한은 유지한다. 신규 UI 구조 제안은 이번 시안 범위에서 허용되지만 실제 서비스 구현·데이터 계약 변경·기존 상세 동작 폐기를 승인한 것은 아니다.
- D는 프로젝트 선택을 홈의 중심으로, E는 경력의 항목별 비교를 중심으로 재구성했다. A/B/C는 보존하고 어느 안도 최종 선택으로 취급하지 않는다.

## 2026-11-05 - 시안 A 보존 및 B·C 대안 비교

Status: Proposed

- 확정된 범위: 사용자가 기존 홈 시안을 A로 지칭하고 다른 디자인을 요청했다. A 원본을 보존한다. A를 최종 디자인으로 승인한 의미는 아니다.
- 사용자 기준: 흔한 구성에서 벗어나되 채용 검토자가 담당 업무를 읽기 좋고 시각적으로 완성도 높은 디자인을 원한다.
- 제안 B는 소개와 프로젝트를 병렬로 읽는 케이스북, C는 강한 제목 영역과 프로젝트 3열 비교 구조다. 모바일은 각 안의 정보 순서를 유지하며 한 열로 전환한다.
- B를 우선 추천하되 이는 정보 접근성·책임 범위 전달에 대한 설계 판단이다. 사용자 선택, 전체 목록·상세 패널 검토와 실제 사이트 구현은 남아 있다.

## 2026-11-05 - 홈 첫 화면·대표 3건 반응형 시안

Status: Proposed

- 시안 제작은 사용자가 요청했다. 디자인안 자체와 사이트 구현은 아직 승인되지 않았다.
- 자기소개 바로 아래 대표 3건을 배치하고, 데스크톱은 좌우 두 열·모바일은 한 열로 읽는 구성을 제안한다. 기술 스택을 대표 작업보다 후순위로 옮기는 방향만 제시한다.
- 프로젝트별 승인 요약·역할·제목과 순서를 유지한다. 이미지 없는 텍스트 중심 구분선 목록, 기존 적색 계열 강조, 짧은 기술 보조 정보를 사용한다.
- 첫 화면의 대표 영역 이동·소개 더 보기 링크, 제목 크기·여백·색상은 시안 제안이다. 기존 상세 패널과 연결 ID를 교체하지 않는다.
- 자료 공개 제한과 DB·배포 이연을 유지한다. 목록·상세 시안은 아직 미착수이며 이 부분까지 완료로 처리하지 않는다.

## 2026-11-05 - 운영 DB·배포 후순위 조정

Status: Accepted

- 사용자가 DB와 배포를 나중에 진행하기로 했다. 완료된 문구·로컬 반영과 미완료 운영 후속을 구분하고 디자인 검토의 선행 조건으로 막지 않는다.
- 다음 권장 순서는 TASK-257의 실제 콘텐츠 디자인 검토다. 홈 첫 화면·대표 3건을 먼저 검토한 뒤 목록·기존 상세 패널로 확장한다. 다음 단계의 시안 제작·서비스 구현을 이번 순서 질문만으로 착수하지 않는다.

## 2026-11-05 - 자기소개 확정 및 승인 콘텐츠 사이트 반영

Status: Accepted

Decision:
- 사용자가 자기소개 문구를 확정하고 승인된 콘텐츠의 사이트 데이터 반영을 명시적으로 요청했다. 앞선 문구만 승인·구현 미승인 상태를 이번 콘텐츠 범위에서 대체한다.
- 기존 Project 필드를 유지해 공개 13건을 반영한다. 대표 5건·홈 3건 순서는 승인안을 따른다. 기존 10건의 ID를 유지하고 신규 ID는 samsung-cia, samsung-parser-viewer, lg-ecrm으로 정한다.
- 상세 소개는 summary, 기여와 오스템 AI 활용 설명은 highlights에 담고 홈 요약·역할은 기존 홈 전용 매핑에 별도로 연결한다. 나머지 8건은 승인 소개를 summary로 사용하고 이전 미승인 기여 문장을 제거한다. 카드에서는 빈 기여 대신 요약, 패널에서는 빈 기여 제목을 숨긴다.
- Hero의 기존 제목·설명 영역을 사용하며 홈 소개가 잘리지 않도록 한다. AI 서비스와 AI 코딩 도구 활용을 필터에서 구분한다. 공개 제외 프로젝트·화면·원본 자료는 추가하지 않는다.
- DB 원본·조회 정책을 임의로 바꾸지 않는다. 로컬 설정은 USE_DB=false이며 DB 연결은 ECONNREFUSED로 실패했다. 운영 원본 확인·DB 반영·배포는 남은 작업으로 구분한다.

## 2026-11-05 - 나머지 8건 소개 문구 승인

Status: Accepted

Decision:
- 사용자가 나머지 8건의 제목·소개 문구를 승인했다. 계획의 ‘나머지 공개 프로젝트 소개 문구’ 표를 기준으로 사용한다.
- 대표 5건·홈 3건의 기존 승인과 공개 제한을 유지한다. 기존 기간·역할 전체의 신규 검증이나 서비스 코드 구현 승인으로 확대하지 않는다.
- 다음 작업은 홈 자기소개 문구 편집이며 제시하는 자기소개는 사용자 검토 전 초안이다.

## 2026-11-05 - 대표 5건 상세 문구 확정 및 나머지 소개 편집

Status: Accepted

Decision:
- 사용자가 불필요한 문장을 정리한 대표 5건 상세 설명을 확정했다. 계획의 승인된 상세 설명을 기준으로 사용한다.
- 나머지 공개 8건도 서비스 목적·담당 업무 중심으로 편집한다. 확인되지 않은 성능·비용·속도 개선, 최상급 표현과 반복 문구를 제거한다.
- 나머지 소개는 편집 초안이며 LG전자 기존 승인 문구는 유지한다. SC 유지보수와 Roche 공개 제외, 프로젝트별 자료 공개 제한도 유지한다.
- 문구 편집 승인과 서비스 코드·DB 구현 승인은 구분한다.

## 2026-11-05 - 상세 소개에서 검수 기록·반복 설명 제거

Status: Accepted

Decision:
- NH의 정상 조회 확인 문장도 공개 소개에서 제외하고 원자료에만 유지한다. 이전의 ‘구체적인 결과이므로 유지’ 판단을 대체한다.
- 소개는 서비스 목적·개인 책임·주요 판단·구현·협업에 집중한다. 인수인계 기간 같은 진행 경위, 반복된 업무 나열, 구체적 내용이 부족한 일반 문장은 줄인다.
- 후속 응답은 사용자가 요청하지 않으면 전체 문구를 재출력하거나 재출력을 제안하지 않는다. 변경점 중심으로 간결하게 보고한다.

## 2026-11-05 - 대표 상세의 형식적인 완료·오픈 문장 제외

Status: Accepted

Context:
- 사용자는 ‘서비스는 오픈됐습니다’ 같은 문장의 필요성을 물었고, 형식적인 마무리를 제외하는 방향에 동의했다.

Decision:
- 대표 상세 설명에서 오픈·사용·프로젝트 완료만 알리는 독립적인 마무리 문장은 제외한다. 실제 상태의 사실은 원자료에 유지한다.
- NH의 재구성 반영 후 상담원 화면 정상 조회처럼 수행한 작업과 연결된 구체적 결과는 유지한다.
- 개인/팀 범위는 정확한 역할 서술로 드러내고, 하지 않은 일을 나열하는 방어적인 문장이나 공개 본문의 편집 안내는 줄인다.

Impact:
- 대표 5건 상세 초안을 정리한다. 승인된 홈 문구·대표 선정·공개 제한은 유지하며 서비스 코드는 변경하지 않는다.

Follow-up:
- 수정한 대표 5건 상세 초안을 검토한다.

## 2026-11-05 - 상세 설명의 협업 기여·서비스 범위 보완

Status: Accepted

Context:
- 사용자는 외주 구현 주체만 적은 NH 문구, 중복된 오스템 AI 설명, 앱만 부각한 교보톡톡 소개와 협업 범위, 키보드 단일 사례에 이의를 제기했다.

Decision:
- NH는 외주 개발자가 원활하게 작업하도록 소통·조율한 기여를 설명한다. 직접 구현 주체에 대한 사실 구분은 원자료에 유지한다.
- 오스템은 승인된 AI 활용 사실을 유지하면서 단독 담당 문장과 편집 안내를 중복하지 않고 본문에 통합한다. 수정된 문장 자체는 검토 초안이다.
- 교보톡톡은 PC 웹·모바일 하이브리드 앱의 서비스 범위와 기획자·디자이너·퍼블리셔·백엔드·앱 개발자와의 협업을 명시한다.
- 교보톡톡 키보드 문제는 원자료에만 남기고 공개 상세에서 제외한다. 사례 하나를 전체 성과처럼 부각하지 않는다.
- 역할을 구분할 때 본인의 협의·조율·검증 책임도 함께 설명한다. 구체적인 수행 사실을 넘어 새 책임이나 성과를 만들지 않는다.

Impact:
- 대표 프로젝트 상세 설명의 편집 기준에 적용한다. 승인된 홈 문구·선정 순서는 유지하며 서비스 구현은 수행하지 않는다.

Follow-up:
- 수정한 NH·오스템·교보톡톡 상세 문구를 검토한다.

## 2026-11-05 - 홈 3건 제목·소개·역할 문구 승인

Status: Accepted

Context:
- 사용자가 삼성전자·오스템·NH투자증권 순서로 제시한 홈 문구 표 전체를 승인하고 대표 프로젝트 상세 설명 정리를 요청했다.

Decision:
- 계획 문서의 ‘홈 3건 공개 문구’ 표에 기록한 제목·소개·역할을 승인 원문으로 유지한다.
- 오스템의 AI 활용과 직접 검토·수정·검증 과정은 기존 승인된 상세 설명에 유지한다. NH는 DB 재설계 대신 아키텍처 재구성으로 표현한다.
- 대표 5건 상세 문구 편집을 진행한다. 새로 확장한 상세 설명은 검토 초안이며 UI·서비스 코드·DB 구현은 이번 범위가 아니다.

Follow-up:
- 대표 5건 상세 초안을 하나씩 검토하고 나머지 프로젝트·자기소개 문구를 정리한다.

## 2026-11-05 - NH투자증권 홈 소개 수정 문구 승인

Status: Accepted

Context:
- 사용자가 DB 재설계로 좁혀 쓴 표현을 아키텍처 재구성으로 정정했고 수정 문구에 동의했다.

Decision:
- 홈 소개: “챗봇 주요 로직을 구현하고, 상담 이력 저장·조회를 위한 아키텍처를 재구성했습니다. 개발 PL로 팀의 업무·일정을 관리하고 외주 개발자·솔루션 개발사와 협의했습니다.”
- 역할: “개발 PL·주요 로직 개발·아키텍처 재구성”.
- 상담이력서비스 백엔드 구현은 외주 개발자의 기여로 구분한다. 전체 서비스 코드 직접 구현으로 확대하지 않는다.

Impact:
- NH 홈 문구에 적용한다. 실제 서비스 코드·DB 반영은 이번 작업에 포함하지 않는다.

Follow-up:
- 삼성전자·오스템의 홈 초안과 나란히 검토한다.

## 2026-11-05 - 오스템 AI 활용·직접 개발 역할 공개 문구 승인

Status: Accepted

Context:
- AI 활용만 강조한 기존 문구를 보완해 직접 코드 검토·수정 방향 결정·세부 수정·앱 실행 검증을 포함했고 사용자가 수정 문구에 동의했다.

Decision:
- 아래 문구를 오스템 상세 공개 설명으로 확정한다.

> Android·iOS 앱과 모바일 웹 연동 개발을 단독 담당했습니다. 구조 설계·코드 작성·문제 해결에 AI 에이전트를 활용하면서 코드를 직접 검토하고 수정 방향을 결정했습니다. 필요한 세부 사항은 직접 수정했으며, 앱 실행과 동작 검증도 수행했습니다.

Impact:
- 상세 설명의 AI 활용·개인 기여 표현에 적용한다. 기존 앱 구조 전환·브릿지 등 확인된 업무를 삭제하는 결정은 아니다.
- 문구 승인과 실제 서비스 코드·DB 반영·게시를 구분한다.

Follow-up:
- 홈 3건의 제목·짧은 소개·주요 기여를 같은 기준으로 편집하고 나머지 대표 2건과 전체 프로젝트 문구로 확장한다.

## 2026-11-05 - 오스템 iOS 개발 과정의 축약 표현 거절

Status: Rejected

Context:
- 제안 문장: “Android 개발을 학습하며 먼저 구현한 뒤, 이를 참고해 AI 에이전트와 함께 iOS 개발을 진행했습니다.”
- 사용자는 이 문장이 iOS를 에이전트에게 Android 복제하듯 맡긴 것으로 읽힐 수 있다고 지적했다. 실제로는 코드를 하나씩 확인하고 간단하거나 세부적인 부분은 직접 수정했다고 보완했다.

Decision:
- 위 문장을 공개 설명에 그대로 재사용하지 않는다. 학습·Android 선행 개발이라는 사실은 원자료에 유지한다.
- 공개 설명은 AI 활용 범위와 직접 코드 검토·수정 방향 결정·세부 수정·앱 실행 검증을 함께 담는다. 후속 수정 문구는 같은 날짜의 공개 문구 승인 결정으로 확정했다.

Impact:
- 오스템 공개 문구 편집에 적용하며 홈 선정·순서는 유지한다. 서비스 코드는 변경하지 않는다.

## 2026-11-05 - 홈 대표 프로젝트와 순서 확정

Status: Accepted

Decision:
- 홈 대표 프로젝트는 삼성전자 CIA → 오스템 → NH투자증권 순서로 확정한다.
- 대표 프로젝트 전체 5건 선정과 각 프로젝트의 공개 조건은 유지한다.
- 이 결정은 콘텐츠 선정·순서에 관한 것이며 서비스 코드·DB 구현이나 게시를 실행한 것은 아니다.

Follow-up:
- 오스템의 AI 에이전트 활용 범위와 본인 책임을 확인해 공개 설명을 다듬는다. 이후 실제 문구·디자인을 검토한다.

## 2026-11-05 - 대표 프로젝트 5건 및 홈 3건 구성 승인

Status: Accepted

Context:
- 최근 작업 외에도 NH투자증권과 교보톡톡의 개발·리딩 책임을 확인해 대표 후보를 비교했다.
- 사용자가 대표는 5건으로 하고 홈에서 보여줄 3건을 고르자고 요청했다.

Decision:
- 대표 프로젝트는 NH투자증권·교보톡톡·오스템·삼성전자 CIA·삼성증권 파서 뷰어 5건으로 확정한다.
- 홈에는 대표 중 3건을 보여준다. 이후 같은 날짜의 홈 순서 확정 결정으로 삼성전자 CIA → 오스템 → NH투자증권을 선정했다.
- 프로젝트별 기존 공개 조건을 유지한다. 선정 승인을 서비스 코드 구현·DB 변경·게시 승인으로 해석하지 않는다.

Impact:
- 후속 문구 편집과 디자인 검토의 기준으로 사용한다. 현재 서비스 데이터는 변경하지 않는다.

Follow-up:
- 홈 대상·순서는 위 후속 결정으로 확정했으며, 실제 공개 문구와 디자인을 검토한다.

## 2026-11-05 - 삼성증권 데모 공개 조건 보완

Status: Accepted

Context:
- 사용자는 회사에 제공한 솔루션이므로 화면을 완전히 동일하게 공개할 수 없으며 비슷한 형태로 바꿔야 한다고 정정했다.

Decision:
- 가상 문서·데이터만 교체한 동일 화면을 공개하지 않는다. 화면 구성·표현도 바꾼 별도 유사 데모로 검토한다.
- 데모는 실제 납품 화면과 명확히 구분한다. 구체적인 데모안이나 소스 공개·실제 제작·게시는 이번에 승인된 것으로 보지 않는다.

Impact:
- 앞선 삼성증권 가상 데이터 조건을 보완한다. 고객사명과 담당 작업 설명의 공개 가능 여부는 유지한다.

Follow-up:
- 데모 작업 시 변경한 화면안과 자료 범위를 검토한다.

## 2026-11-05 - Roche 공개 포트폴리오 제외 확정

Status: Accepted

Context:
- Roche 디지털휴먼 유지보수는 명단에 이름만 있었고 실제 수행한 작업은 없었다.
- 원자료로만 보관하고 공개에서 제외하자는 제안에 사용자가 동의했다.

Decision:
- Roche는 원자료에 실제 작업 없음으로 남기고 공개 포트폴리오에서 제외한다.
- 수행한 프로젝트나 개인 기여·성과로 작성하지 않는다. 이전의 게재 보류 제안은 이번 공개 제외 확정으로 대체한다.

Impact:
- 공개 경력·대표 프로젝트 선정 대상에 포함하지 않는다. 서비스 코드나 운영 데이터는 이번에 변경하지 않는다.

Follow-up:
- 수집한 원자료의 확인·미확인 항목을 최종 점검한 뒤 공개 문구 편집 범위를 정리한다.

## 2026-11-05 - 삼성전자 CIA 화면 공개 제외

Status: Accepted

Context:
- 가상 데이터로 교체한 화면의 공개 가능 여부를 확인했으나 사용자는 공개하면 안 될 것 같다고 답했다.

Decision:
- 삼성전자 CIA 화면 캡처·데모는 가상 데이터로 교체하더라도 공개 포트폴리오에서 제외한다.
- 앞서 승인한 고객사명과 작업 설명만 공개 범위로 유지한다. 내부 소스·실데이터의 공개 승인도 없다.

Impact:
- 삼성전자 공개 화면 제작·게시를 진행하지 않는다. 기존 텍스트 승인과 참여 기간은 유지한다.

Follow-up:
- 나머지 경력의 미확인 내용을 이어서 확인한다.

## 2026-11-05 - 삼성전자 CIA 공개용 텍스트와 기간 확정

Status: Accepted

Context:
- 사용자에게 초기 FE 단독 담당, 설계·협의와 BE·Agent 구현의 역할 구분, 개발 종료·운영 사용을 확인하고 구체적인 공개 문구를 제시했다.
- 사용자는 ‘삼성전자’ 이름과 제시한 설명의 공개를 승인하고 종료 시점을 2026년 10월로 확인했다.

Decision:
- 계획 문서의 ‘삼성전자 CIA 프론트엔드 개발’ 제목과 승인 문구를 공개용 텍스트로 사용한다. 참여 기간은 2026.08~10으로 표기한다.
- BE·Agent 구현은 다른 개발자들의 역할로 구분한다. 본인의 일부 설계·방향 협의를 전체 BE·Agent 개발로 확대하지 않는다.
- 이번 승인은 고객사명과 작업 설명에 대한 것이다. 화면 캡처·내부 소스·실데이터의 공개 범위는 별도 확인한다.

Impact:
- 경력 원자료와 후속 콘텐츠 편집에 적용한다. 서비스 코드·DB 반영과 실제 게시·대표 작업 선정은 아직 수행하지 않았다.

Follow-up:
- 화면 자료 공개 조건과 나머지 경력의 미확인 항목을 확인한다.

## 2026-11-05 - LG전자 초기 마이그레이션 공개용 텍스트 승인

Status: Accepted

Context:
- 소스와 사용자 확인으로 Streamlit→React 초기 마이그레이션, 실제 개발 기간(2026.06.10~06.11), 이후 회의·배포 지원 및 서비스 오픈·실사용을 확인했다.
- 사용자가 공개할 작업 내용의 범위를 물었고, 구체적인 문구·기술 목록과 공개 범위를 제시한 뒤 동의를 받았다.

Decision:
- `docs/portfolio-improvement-plan.md`에 기록한 ‘LG전자 eCRM AI Agent 화면 React 전환’ 문구와 고객사명을 공개용 텍스트로 승인한다.
- 기여는 기존 화면의 초기 React 이식과 연동, 이후 회의 참석·배포 지원 범위로 쓴다. AI Agent 자체 개발이나 후속 팀 개발·고도화를 본인 성과로 확대하지 않는다.
- 내부 소스·API 주소·프롬프트·캠페인 데이터·화면 캡처는 이번 승인 범위에 포함하지 않는다. 화면 자료는 필요 시 별도 확인한다.

Rationale:
- 실제 기여를 짧고 구체적으로 설명하고, 사용자가 확인한 공개 범위를 지킨다.

Impact:
- 향후 콘텐츠·데이터 반영 시 사용할 승인 문구와 원자료에 적용한다. 이번에는 문서만 갱신하며 서비스 코드·DB·공개 화면에 반영하지 않는다.

Follow-up:
- 전체 경력을 비교한 대표 작업 선정은 후속 단계에서 진행한다. 삼성전자 등 남은 경력 원자료를 먼저 확인한다.

## 2026-11-05 - 삼성증권 작업 공개 범위와 데모 데이터 조건

Status: Accepted

Context:
- 사용자가 삼성증권 뷰어의 초기 FE 단독 구축, FastAPI 샘플 API 작성·인계 후 협업, 실제 참여 기간과 운영 사용 사실을 확인했다.
- 고객사명과 담당 작업 공개는 가능하지만 기존 샘플 문서는 사용할 수 없고 다른 데이터로 교체해야 한다고 명시했다.

Decision:
- 고객사명과 확인된 개인 기여 범위로 공개 문구를 검토할 수 있다. 전체 파서나 BE를 단독 개발한 것으로 표현하지 않는다.
- 현재 소스에 포함된 샘플 문서는 공개용 화면에 사용하지 않는다. 공개 화면이 필요할 때 별도로 만든 가상 문서·데이터와 원본과 다르게 구성한 화면으로 유사 데모를 검토한다. 데이터만 교체한 동일 화면 공개는 허용 범위가 아니다.
- 별도 데모는 실제 납품 화면과 구분하며 고객사 실문서나 운영 수치의 증거로 제시하지 않는다.

Rationale:
- 구현한 기능을 설명하면서 사용자가 제한한 자료 공개 범위를 지킨다.

Impact:
- 경력 문구와 향후 화면 시안·포트폴리오 자료 제작에 적용한다. 이번에는 문서만 갱신하며 샘플·소스·운영 데이터를 변경하지 않는다.

Follow-up:
- 공개 문구와 대표 작업은 전체 경력 정리 후 검토한다. 가상 데이터 제작·캡처는 해당 자료 작업 범위에서 진행한다.

## 2026-11-05 - SC제일은행 상담톡 유지보수 공개 제외

Status: Accepted

Context:
- 사용자가 2026.06.02~2026.09.30 상담톡 후속 유지보수 세 건의 사실관계를 확인했다.
- 기존 구축과 별도인 작업으로 구분한 뒤 공개 필요성을 검토했고, 최종적으로 원자료로만 남기고 공개에서 제외하도록 요청했다.

Decision:
- 해당 유지보수 이력은 `docs/portfolio-improvement-plan.md`의 경력 원자료에 보관한다.
- 공개 프로젝트로 추가하거나 기존 구축 프로젝트의 공개 내용에 합치지 않는다. 기존 구축 프로젝트 자체를 삭제하는 결정은 아니다.
- 실제 수행한 수정·개발·원인 확인과 담당자 전달을 구분하고, 미확인 보안 처리 방식이나 최종 데이터 반영 결과는 단정하지 않는다.

Rationale:
- 사용자가 실제 기여와 별도 공개 항목의 필요성을 검토한 뒤 공개 제외를 선택했다.

Impact:
- 경력 원자료와 향후 공개 콘텐츠 선정 기준에 적용한다. 이번 기록은 문서 작업이며 서비스 코드·운영 DB를 변경하지 않는다.

Follow-up:
- 이후 LG전자 기본 사실과 공개용 텍스트는 같은 날짜의 ‘LG전자 초기 마이그레이션 공개용 텍스트 승인’ 결정으로 확인했다. 실제 게재·대표 작업 선정은 후속 단계다.

## 2026-11-04 - Notion 포트폴리오 분류와 저장소 작업 지침

Status: Accepted

Context:
- 사용자가 Notion Tasks의 프로젝트 분류에 `포트폴리오`를 추가하도록 요청했고, 생성 결과를 확인했다.
- 이후 이 프로젝트의 작업 지침에 앞으로 필요한 내용을 남겨달라고 요청했다.

Decision:
- 이 저장소의 Notion Task는 기존 Tasks 데이터베이스의 `프로젝트 = 포트폴리오`를 사용한다.
- 경력 사실 확인, 구체적인 문구, 내용에 맞는 디자인, 세부 정보 확인 시점, 단계별 작업 범위를 `AGENTS.md`에 기록한다.
- 작업 범위와 완료 기준은 저장소 계획, 진행 상태는 Notion에서 관리하며 의미 있는 진행 시점에 맞춘다.
- Task 등록 시 중복 및 현재 속성을 확인하고, 제안 단계 작업은 `제안됨`으로 기록한다. 승인·마감일·완료 여부는 임의로 만들지 않는다.
- 분류 생성과 지침 기록은 서비스 구현 승인 또는 실제 Task 등록 완료를 뜻하지 않는다.

Rationale:
- 다음 세션에서도 사용자 선호와 작업 상태를 이어가고, 다른 프로젝트의 Task와 구분해야 한다.
- 계획, 외부 작업 기록, 실제 구현 결과를 혼동하지 않아야 한다.

Impact:
- `AGENTS.md`, `workflows/portfolio-cycle.md`, `docs/portfolio-improvement-plan.md` 및 향후 Notion Task 관리에 적용한다.

Follow-up:
- 2026-11-04 사용자 요청으로 8단계 Task(TASK-255~TASK-262)를 등록하고 계획과 작업 기록에 링크를 남겼다. 이후 각 Task의 실제 진행 상태를 관리한다.

## 2026-11-04 - 사실에 기반한 문구와 디자인 검토 기준

Status: Accepted

Context:
- 사용자는 반복적인 박스형 레이아웃과 상투적인 인터랙션을 줄이고 싶다고 요청했다.
- 사용자는 제안했던 문구 `웹과 앱의 경계를 연결하고, 서비스가 운영되는 곳까지 책임집니다.`를 AI스러운 표현으로 지적했다.

Decision:
- 해당 소개 문구는 사용하지 않는다. 확인된 담당 업무와 경험을 평이한 문장으로 작성하고 사용자 말투로 검토한다.
- 반복 카드·배지, 내용과 관계없는 장식 및 모션을 이후 디자인 검토 항목으로 삼는다.
- 오스템 이후 작업을 개선 계획의 경력 자료 수집 범위에 포함한다. 사실 확인 전 프로젝트명·기간·성과를 만들지 않는다.
- 이 기준은 작업계획 전체나 특정 시안, 서비스 코드 구현에 대한 승인을 뜻하지 않는다.

Rationale:
- 공개 문구와 화면 구성은 실제 경력의 차이를 구체적으로 전달해야 한다.
- 추가 경력에 따라 대표 작업과 소개 내용이 달라질 수 있다.

Impact:
- 소개 문구, 프로젝트 편집 및 디자인안 검토에 적용한다.
- 단계별 제안은 `docs/portfolio-improvement-plan.md`에 기록한다.

Follow-up:
- 신규 경력 자료를 확인한 뒤 문구와 대표 프로젝트를 정하고 디자인안을 검토한다.

## 2026-06-08 - Recruiter-Focused Project Cards

Status: Accepted

Context:
- The project cards needed to make responsibility, contribution, and career positioning easier for recruiters to scan.
- The previous green key color did not match the desired visual direction for the refreshed card design.

Decision:
- Use a restrained red primary palette for portfolio accents.
- Use a Featured Case Study card style for home `Career Highlights`.
- Use a Recruiter Evidence card style for Projects page cards.
- Remove decorative 3D tilt behavior from project cards in favor of clearer content hierarchy and subtle hover states.

Rationale:
- Recruiters need to understand ownership and impact before inspecting the full detail panel.
- Home cards should sell the representative career signal, while Projects cards should support fast comparison.
- A mature red accent creates stronger visual identity without relying on loud gradients or decorative effects.

Impact:
- Affects Tailwind primary colors, home highlight cards, and Projects grid cards.
- Does not change project data, routes, detail panel behavior, or dependencies.

Follow-up:
- Re-check visual rhythm after non-Osstem copy is refined.
- Consider detail-panel IA improvements only when project copy has clearer problem, contribution, and result language.

## 2026-06-07 - Project Detail Deep Links

Status: Accepted

Context:
- Home Featured project cards previously linked only to `/projects`, which dropped the user's project-specific intent.
- Projects page cards opened details through local React state only, so specific project details could not be addressed by URL.

Decision:
- Use `/projects?project={projectId}` as the deep-link format for opening a project detail panel.
- Keep the existing `ProjectPanel` UI and state-driven card interaction, but synchronize open project state with the URL query.
- Home project highlight cards should link to the relevant project deep link instead of the generic Projects page.

Rationale:
- Recruiters can move from a home highlight directly into the relevant evidence without losing context.
- The Projects page remains the canonical place for details, filters, and the full project set.
- Reusing the existing panel avoids adding a new modal, drawer, or duplicate home-detail UI.

Impact:
- Affects home project preview links and Projects page detail-open behavior.
- Enables direct sharing of project detail URLs.

Follow-up:
- Consider adding richer project fields later if the detail panel needs stronger problem, contribution, and result sections.

## 2026-06-07 - Build Warning Configuration Cleanup

Status: Accepted

Context:
- `npm run build` emitted warnings for Next.js workspace root inference, stale `baseline-browser-mapping` data, and Tailwind config module type detection.
- The warnings did not break the build, but they made verification output noisy and could hide future build issues.

Decision:
- Set `turbopack.root` explicitly in `next.config.ts`.
- Track `baseline-browser-mapping` directly as a dev dependency so the Baseline browser data can be kept current.
- Rename the Tailwind config from `tailwind.config.ts` to `tailwind.config.mjs` instead of adding `"type": "module"` to the whole package.

Rationale:
- Explicit Turbopack root keeps Next.js from selecting the wrong parent directory when multiple lockfiles exist nearby.
- Directly tracking `baseline-browser-mapping` resolves the stale-data warning without changing runtime application code.
- Using `.mjs` scopes ESM treatment to the Tailwind config and avoids broader side effects on scripts such as the standalone start command and Jest's Next config loading.

Impact:
- Affects build configuration, lint target configuration, Tailwind config loading, and package metadata.
- Does not change portfolio UI, project data, routing, or service behavior.

Follow-up:
- Keep `baseline-browser-mapping` updated during dependency maintenance.
- Re-check build output after future Next.js or Tailwind upgrades.

## 2026-06-06 - Korean Commit Messages with Body

Status: Accepted

Context:
- The portfolio repository should keep commit history readable for the user.
- Short English-only commit messages can hide useful implementation context.

Decision:
- Codex should write commit messages in Korean by default.
- Commits should preferably include a concise Korean title and a body that summarizes the important changes, reasons, verification, or follow-up notes.
- Unrelated local metadata changes such as `.DS_Store` should not be included unless explicitly requested.

Rationale:
- Korean commit messages fit the user's working style and make repository history easier to review.
- A body with meaningful content preserves the reasoning behind portfolio changes without requiring the user to inspect every diff.

Impact:
- Applies to future commits in this repository.
- Affects Codex git workflow and final reports.

Follow-up:
- Keep commit messages scoped to the actual staged changes.

## 2026-06-06 - PM Approval Gate and Follow-up Tracking

Status: Accepted

Context:
- Portfolio improvement work can involve several UX, accessibility, structure, performance, and maintainability issues at once.
- If Codex starts implementation too early, it may miss decisions the user has not made yet or leave lower-priority items invisible after completing only the first set of fixes.

Decision:
- Codex must run the PM step before implementation work: clarify the goal, verify the current implementation, identify missing decisions, and ask the user enough questions to catch likely omissions.
- Codex must wait for explicit user approval before starting Developer work.
- When only part of a larger issue list is implemented, Codex must keep the unresolved items visible as follow-up candidates and mention them again during the next related planning step.

Rationale:
- This keeps main portfolio work intentional, avoids accidental scope expansion, and helps the user make decisions with enough context.
- Follow-up tracking prevents important but deferred work from being forgotten across sessions.

Impact:
- Affects `AGENTS.md`, PM planning behavior, task summaries, and follow-up recommendations.
- Applies to Projects section work and general portfolio improvements.

Follow-up:
- Use `docs/task-log.md` to record completed work and remaining candidates after each implementation cycle.
