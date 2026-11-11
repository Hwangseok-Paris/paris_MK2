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
    <article className={`project ${p.id === "samsung-cia" ? "samsung" : p.id === "osstem-hybrid" ? "osstem" : "nh"}`} data-project={p.id} key={p.id} aria-labelledby={`home-${p.id}`}>
      <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
      <div className="project-head">
        <div lang="en">
          <p className="eyebrow"><span className="brand-mark" aria-hidden="true" />{p.eyebrow}</p>
          <h3 className="project-title" id={`home-${p.id}`}>
            {p.id === "osstem-hybrid" ? <>Mobile App<br />Framework</> : projectDisplayTitle(p)}
          </h3>
        </div>
        <span className="period">{p.period}</span>
      </div>
      <div className="project-reading">
        <div>
          <p className="role-label">담당 역할</p>
          <p className="role">{p.signal}</p>
          <p className="project-korean">{projectOriginalTitle(p)}</p>
        </div>
        <p className="summary-copy">{p.desc}</p>
      </div>
      <div className="project-end">
        <p className="stack">{p.stack.join(" · ")}</p>
        <Link className="detail-link" href={p.path} aria-label={`${projectOriginalTitle(p)} 상세 보기`}>상세 보기<ArrowUpRight aria-hidden="true" /></Link>
      </div>
    </article>
  ));
}
