import { portfolioViewport, portfolioSurface, profileTypography, profileGutter } from "@/components/layout/portfolioStyles";
import AboutIntro from "@/components/about/AboutIntro";
import AboutCareer from "@/components/about/AboutCareer";
import AboutTechStack from "@/components/about/AboutTechStack";
import PageHeading from "@/components/layout/PageHeading";

export default function AboutPage() {
  return (
    <div className={`folio folio-profile folio-profile-page flex flex-1 flex-col ${portfolioSurface}`}>
      <div className={`viewport @container/profile flex flex-1 flex-col ${portfolioViewport}`}>
        <div className={`site flex flex-1 flex-col bg-paper ${profileTypography} ${profileGutter}`}>
          <PageHeading title="ABOUT" />
          <div className="about-layout mb-10 grid grid-cols-1 gap-24 profile-sm:mb-8 profile-sm:gap-16 @min-[1280px]/profile:grid-cols-2 @min-[1280px]/profile:items-start @min-[1280px]/profile:gap-x-16">
            <AboutIntro />
            <div className="about-details flex flex-col gap-24 profile-sm:gap-16 @min-[1280px]/profile:gap-14">
              <AboutCareer />
              <AboutTechStack />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
