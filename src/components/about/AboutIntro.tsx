export default function AboutIntro() {
  return (
    <section className="about-intro" aria-label="자기소개">
      <div className="identity pt-1.5 pb-[25px] profile-sm:pt-0 profile-sm:pb-[21px]">
        <h2 className="text-[19px] leading-[1.6] font-medium profile-sm:text-[17px]">김황석</h2>
        <p className="mt-1 text-[13px] text-muted profile-sm:text-xs profile-sm:leading-[1.9]">프론트엔드 개발자</p>
      </div>
      <div className="intro-copy max-w-[41em] [&_p]:text-[17px] [&_p]:leading-[1.95] [&_p]:break-keep [&_p+p]:mt-[18px] profile-sm:[&_p]:text-base profile-sm:[&_p]:leading-[1.9] profile-sm:[&_p+p]:mt-4">
        <p>상담 서비스와 데이터 분석·검수 도구의 화면 구조와 기능을 설계하고 개발해 왔습니다.</p>
        <p>직접 개발하면서 기획·디자인·백엔드와 구현 방향을 협의하고, 프로젝트에 따라 개발팀을 이끌며 업무와 기술 방향을 조율했습니다.</p>
      </div>
    </section>
  );
}
