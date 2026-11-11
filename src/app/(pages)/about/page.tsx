import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AboutIntro from "@/components/about/AboutIntro";
import Stacks from "@/components/about/Stacks";

export default function AboutPage() {
  return (
    <div className="folio folio-profile folio-profile-page">
      <div className="viewport"><div className="site">
        <div className="about-layout">
          <AboutIntro />
          <Stacks />
        </div>
        <div className="page-end">
          <Link href="/projects">전체 프로젝트<ArrowUpRight aria-hidden="true" /></Link>
          <Link href="/contact">연락하기<ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div></div>
    </div>
  );
}
