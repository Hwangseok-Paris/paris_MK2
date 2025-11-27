import dynamic from "next/dynamic";
import SkillSet from "../components/home/SkillSet";
import HeroSkeleton from "@/components/sections/HeroSkeleton";
import ProjectsPreviewSkeleton from "@/components/sections/ProjectsPreviewSkeleton";

const DynamicHero = dynamic(() => import("@/components/sections/Hero"), {
  loading: () => <HeroSkeleton />,
});

const DynamicProjectsPreview = dynamic(() => import("@/components/sections/ProjectsPreview"), {
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
