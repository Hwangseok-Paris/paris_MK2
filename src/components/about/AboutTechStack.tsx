import type { ReactNode } from "react";

function TechItem({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="tech-item border-t border-rule pt-3">
      <dt className="mb-1.5 text-sm leading-[1.85] text-muted">{label}</dt>
      <dd className="text-[17px] leading-[1.8] break-keep [&_small]:mt-1.5 [&_small]:block [&_small]:text-[13px] [&_small]:leading-[1.8] [&_small]:text-muted">
        {children}
      </dd>
    </div>
  );
}

export default function AboutTechStack() {
  return (
    <section className="tech-section @container/about max-w-[900px]" aria-labelledby="tech-heading">
      <h2
        id="tech-heading"
        className="mb-[18px] font-chakra text-[22px] leading-[1.6] font-medium"
        lang="en">
        Tech Stack
      </h2>
      <dl className="tech-grid grid grid-cols-2 gap-x-12 gap-y-6 @max-[680px]/about:gap-x-6 @max-[680px]/about:gap-y-[22px] @max-[460px]/about:grid-cols-1">
        <TechItem label="언어">
          TypeScript · JavaScript
          <br />
          Kotlin · Swift
        </TechItem>
        <TechItem label="프레임워크·라이브러리">React · Vue 3 · Next.js</TechItem>
        <TechItem label="상태 관리·데이터 조회">
          Pinia · Zustand
          <br />
          React Query
        </TechItem>
        <TechItem label="CSS 프레임워크">Tailwind CSS</TechItem>
        <TechItem label="버전 관리">Git · GitLab · SVN</TechItem>
        <TechItem label="개발·배포 환경">GCP · AWS · Docker</TechItem>
      </dl>
    </section>
  );
}
