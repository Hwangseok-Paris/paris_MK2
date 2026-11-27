export default function Hero() {
  return (
    <section aria-labelledby="personal-heading">
      <h1 className="m-0 font-['Chakra_Petch',sans-serif] text-[clamp(30px,4vw,54px)] leading-[1.15] font-semibold tracking-[-.025em] max-[650px]:text-[clamp(24px,5.8vw,36px)] max-[650px]:[overflow-wrap:anywhere]" id="personal-heading" lang="en">Hwangseok Kim</h1>
      <p className="mt-2.5 font-['Chakra_Petch',sans-serif] text-lg leading-[1.4] font-semibold tracking-normal text-[#50595f] dark:text-[#bbc1c5] max-[700px]:mt-2 max-[700px]:text-base max-[650px]:text-sm" lang="en">Frontend Developer</p>
      <div className="mt-7 space-y-4 text-base leading-[1.8] tracking-[-.018em] break-keep [overflow-wrap:break-word] max-[700px]:mt-6 max-[700px]:text-[15px]">
        <p>프론트엔드 개발자로 다양한 프로젝트의 화면 개발과 서비스 연동을 맡아 왔습니다. 챗봇과 상담 서비스, AI 분석 화면, 문서 검수 도구 등을 개발했습니다. 기획자·디자이너와 화면 구성을 구체화하고, 백엔드·Agent 개발자와 데이터와 기능이 연결되는 방식을 협의하며 구현했습니다.</p>
        <p>Android·iOS 앱과 모바일 웹 연동도 맡아 AI 도구를 활용하고, 코드를 직접 검토하고 수정하며 동작을 검증했습니다. 개발 PL을 맡아 챗봇 주요 로직을 개발하고 상담 이력 아키텍처를 재구성했으며, 팀의 업무와 일정을 관리하고 외주 개발자 및 솔루션 개발사와 협의했습니다.</p>
        <p>
          사용자가 어떤 상황에서 서비스를 쓰는지 먼저 생각하고,{" "}
          <br className="hidden min-[1024px]:block" />
          그에 맞는 기술과 구현 방식을 고민하며 사용하기 편하고 안정적인 서비스를 만들어 가고자 합니다.
        </p>
      </div>
    </section>
  );
}
