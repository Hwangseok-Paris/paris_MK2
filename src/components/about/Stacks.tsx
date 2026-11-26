import type { ReactNode } from "react";

function TechItem({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="tech-item grid grid-cols-[120px_minmax(0,1fr)] gap-5 border-t border-rule py-4 profile-md:grid-cols-1 profile-md:gap-[7px]">
      <dt className="pt-[3px] text-xs leading-[1.9] text-muted">{label}</dt>
      <dd className="text-base leading-[1.8] break-keep [&_small]:mt-[7px] [&_small]:block [&_small]:text-xs [&_small]:leading-[1.9] [&_small]:text-muted">
        {children}
      </dd>
    </div>
  );
}

export default function Stacks() {
  return (
    <section className="tech-section bg-tint px-7 py-6 profile-sm:-mx-5 profile-sm:px-5" aria-labelledby="tech-heading">
      <h2 id="tech-heading" className="mb-[18px] text-[22px] font-medium profile-sm:text-[21px]">사용 기술</h2>
      <dl className="tech-grid">
        <TechItem label="언어">
          TypeScript · JavaScript<br />Kotlin · Swift<small>Kotlin·Swift는 오스템 앱 개발에 사용</small>
        </TechItem>
        <TechItem label="프레임워크·라이브러리">React · Vue 3 · Next.js</TechItem>
        <TechItem label="상태 관리·데이터 조회">Pinia · Zustand<br />React Query</TechItem>
        <TechItem label="CSS 프레임워크">Tailwind CSS</TechItem>
        <TechItem label="버전 관리">Git · GitLab · SVN</TechItem>
        <TechItem label="개발·배포 환경">
          GCP · AWS · Docker<small>GCP — 삼성전자 CIA<br />AWS·Docker — Festival Life</small>
        </TechItem>
      </dl>
    </section>
  );
}
