import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectDisplayTitle, projectOriginalTitle } from "@/constants/project-presentation";

export type ProjectCardItem = {
  id: string;
  title: string;
  eyebrow: string;
  period: string;
  signal: string;
  desc: string;
  path: string;
  stack: string[];
};

export default function ProjectCards({ projects }: { projects: ProjectCardItem[] }) {
  return projects.map((p, index) => (
    <article className="project grid grid-cols-[45px_minmax(0,1fr)] gap-x-[27px] border-b border-rule pt-[30px] pb-[35px] font-profile leading-[1.7] tracking-[-.025em] text-ink folio-md:grid-cols-[38px_minmax(0,1fr)] folio-md:gap-x-5 folio-sm:grid-cols-[23px_minmax(0,1fr)] folio-sm:gap-x-[13px] folio-sm:pt-[25px] folio-sm:pb-[26px] [&_*]:min-w-0" data-project={p.id} key={p.id} aria-labelledby={`home-${p.id}`}>
      <span className="project-number col-start-1 row-[1/4] pt-0.5 font-index text-[13px] leading-[1.6] text-muted folio-sm:row-start-1 folio-sm:pt-px folio-sm:text-[11px]">{String(index + 1).padStart(2, "0")}</span>
      <div className="project-head col-start-2 flex items-start justify-between gap-6 folio-sm:block">
        <div lang="en">
          <p className="eyebrow text-[11px] leading-[1.5] font-[550] tracking-[.09em] folio-sm:tracking-[.055em]"><span className={`brand-mark mr-2 inline-block size-[7px] align-[1px] ${p.id === "samsung-cia" ? "bg-[light-dark(#152752,#aebbe0)]" : p.id === "osstem-hybrid" ? "bg-[#eb6100]" : "bg-[#005bac] shadow-[3px_3px_0_#fabe00]"}`} aria-hidden="true" />{p.eyebrow}</p>
          <h3 className={`project-title mt-[18px] font-panel font-medium tracking-[-.065em] folio-sm:mt-[17px] folio-sm:text-[10.2cqw] folio-sm:leading-[1.06] ${p.id === "samsung-cia" ? "max-w-[11em] text-[clamp(46px,6.7cqw,92px)] leading-[1.04]" : "text-[clamp(50px,7.3cqw,104px)] leading-[1.02]"}`} id={`home-${p.id}`}>
            {p.id === "osstem-hybrid" ? <>Mobile App<br />Framework</> : projectDisplayTitle(p)}
          </h3>
        </div>
        <span className="period font-index text-xs leading-[1.6] tracking-normal whitespace-nowrap text-muted folio-sm:mt-3 folio-sm:block folio-sm:text-[11px]">{p.period}</span>
      </div>
      <div className="project-reading col-start-2 mt-[35px] grid grid-cols-[1fr_1.18fr] items-start gap-14 folio-md:grid-cols-[1fr_1.15fr] folio-md:gap-[35px] folio-tablet:mt-[29px] folio-tablet:grid-cols-1 folio-tablet:gap-[19px] folio-sm:col-span-full folio-sm:mt-[26px]">
        <div>
          <p className="role-label mb-2.5 text-[11px] leading-[1.5] tracking-normal text-muted folio-sm:mb-[7px]">담당 역할</p>
          <p className="role max-w-[19em] text-[25px] leading-[1.5] font-semibold tracking-[-.045em] text-pretty break-keep folio-md:text-[23px] folio-sm:max-w-[18em] folio-sm:text-[22px]">{p.signal}</p>
          <p className="project-korean mt-[15px] text-[13px] leading-[1.65] font-normal break-keep text-muted folio-tablet:mt-2 folio-sm:mt-[9px] folio-sm:text-xs">{projectOriginalTitle(p)}</p>
        </div>
        <p className="summary-copy text-base leading-[1.95] text-pretty break-keep folio-tablet:max-w-[43em] folio-sm:leading-[1.9]">{p.desc}</p>
      </div>
      <div className="project-end col-start-2 mt-5 flex items-center justify-between gap-6 folio-sm:col-span-full folio-sm:mt-4 folio-sm:flex-col folio-sm:items-start folio-sm:gap-[7px]">
        <p className="stack text-xs leading-[1.8] tracking-normal text-muted">{p.stack.join(" · ")}</p>
        <Link className="detail-link inline-flex min-h-11 items-center gap-[18px] text-[13px] whitespace-nowrap hover:underline hover:underline-offset-[5px] focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-current focus-visible:outline-offset-[5px] [&_svg]:size-[18px] [&_svg]:shrink-0" href={p.path} aria-label={`${projectOriginalTitle(p)} 상세 보기`}>상세 보기<ArrowUpRight aria-hidden="true" /></Link>
      </div>
    </article>
  ));
}
