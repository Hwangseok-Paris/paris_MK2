export const dynamic = "force-dynamic";

import dynamicImport from "next/dynamic";
import SkillSet from "../components/home/SkillSet";
import HeroSkeleton from "@/components/sections/HeroSkeleton";
import ProjectsPreviewSkeleton from "@/components/sections/ProjectsPreviewSkeleton";

const DynamicHero = dynamicImport(() => import("@/components/sections/Hero"), {
  loading: () => <HeroSkeleton />,
});

const DynamicProjectsPreview = dynamicImport(() => import("@/components/sections/ProjectsPreview"), {
  loading: () => <ProjectsPreviewSkeleton />,
});

// import History from "../components/home/History";

export default function Home() {
  return (
    <>
      <DynamicHero />
      {/* <History /> */}
      <SkillSet />
      <DynamicProjectsPreview />
    </>
  );
}
