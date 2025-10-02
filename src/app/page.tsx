import Hero from "@/components/sections/Hero";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import SkillSet from "../components/home/SkillSet";
// import History from "../components/home/History";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <History /> */}
      <SkillSet />
      <ProjectsPreview />
    </>
  );
}
