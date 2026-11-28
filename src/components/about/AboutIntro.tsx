export default function AboutIntro() {
  return (
    <section className="about-intro max-w-[650px]" aria-label="소개">
      <div className="identity mb-[18px]">
        <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1.5 profile-sm:gap-x-3 profile-sm:gap-y-0.5">
          <h2 className="text-[32px] leading-[1.6] font-medium profile-sm:text-[28px]">김황석</h2>
          <span className="font-chakra text-lg leading-[1.6] text-muted profile-sm:text-base" lang="en">Hwangseok Kim</span>
        </div>
        <p className="mt-[3px] font-chakra text-base leading-[1.8] text-muted profile-sm:text-[15px]" lang="en">Frontend Developer</p>
      </div>
      <div className="intro-copy space-y-4 text-[17px] leading-[1.9] break-keep profile-sm:text-base">
        <p>화면을 만들 때는 기획자·디자이너와 어떤 내용을 어떻게 보여줄지 함께 정합니다. 백엔드 개발자와 데이터가 오가는 방식을 맞추고, 그 내용을 실제로 동작하는 화면과 기능으로 옮기는 것이 제 일입니다.</p>
        <p>웹과 앱을 연결한 프로젝트에서는 각 환경에서 기능이 제대로 이어지는지 직접 확인하며 개발을 진행했습니다. 팀을 이끄는 역할을 맡았을 때도 직접 코드를 작성하면서, 개발자들과 업무를 나누고 구현 방향을 맞췄습니다.</p>
      </div>
    </section>
  );
}
