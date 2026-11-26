import { portfolioViewport, portfolioSurface, profileTypography, profileGutter } from "@/components/layout/portfolioStyles";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AboutIntro from "@/components/about/AboutIntro";
import Stacks from "@/components/about/Stacks";
import PageHeading from "@/components/layout/PageHeading";

export default function AboutPage() {
  return (
    <div className={`folio folio-profile folio-profile-page flex flex-1 flex-col ${portfolioSurface}`}>
      <div className={`viewport @container/profile flex flex-1 flex-col ${portfolioViewport}`}><div className={`site flex flex-1 flex-col bg-paper ${profileTypography} ${profileGutter}`}>
        <PageHeading title="About" />
        <div className="about-layout pt-0 mb-[35px] grid grid-cols-[.95fr_1.05fr] gap-14 profile-md:grid-cols-[.9fr_1.1fr] profile-md:gap-8 profile-sm:mb-6 profile-sm:grid-cols-1 profile-sm:gap-7">
          <AboutIntro />
          <Stacks />
        </div>
        <div className="page-end flex items-center justify-between gap-5 pt-1 pb-6 profile-sm:pt-0 profile-sm:pb-[19px] [&_a]:flex [&_a]:min-h-11 [&_a]:items-center [&_a]:gap-4 [&_a]:text-[13px] [&_a]:hover:underline [&_a]:hover:underline-offset-[5px] profile-sm:[&_a]:text-xs profile-sm:[&_a]:leading-[1.9] [&_svg]:size-[18px] [&_svg]:shrink-0">
          <Link href="/projects">전체 프로젝트<ArrowUpRight aria-hidden="true" /></Link>
          <Link href="/contact">연락하기<ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div></div>
    </div>
  );
}
