export default function AboutCareer() {
  return (
    <section
      className="about-career @container/career max-w-[650px] @min-[1280px]/profile:max-w-none"
      aria-labelledby="career-heading">
      <h2
        id="career-heading"
        className="mb-[18px] font-chakra text-[22px] leading-[1.6] font-medium"
        lang="en">
        Experience
      </h2>
      <dl className="space-y-5 border-t border-rule pt-4">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-1 @max-[420px]/career:grid-cols-1">
          <dt className="text-lg leading-[1.6] font-medium">
            코드클릭
            <span className="mt-1 block text-sm leading-[1.8] font-normal text-muted">
              프론트엔드 개발
            </span>
          </dt>
          <dd className="font-chakra text-sm leading-[1.8] whitespace-nowrap text-muted tabular-nums">
            <time dateTime="2021-11">2021.11</time> – 현재
          </dd>
        </div>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-1 @max-[420px]/career:grid-cols-1">
          <dt className="text-lg leading-[1.6] font-medium">
            해피로봇레코드
            <span className="mt-1 block text-sm leading-[1.8] font-normal text-muted">
              A&amp;R · 음반·공연 기획, 제작
            </span>
          </dt>
          <dd className="font-chakra text-sm leading-[1.8] whitespace-nowrap text-muted tabular-nums">
            <time dateTime="2016-02">2016.02</time> – <time dateTime="2019-04">2019.04</time>
          </dd>
        </div>
      </dl>
    </section>
  );
}
