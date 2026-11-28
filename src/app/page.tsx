export const dynamic = "force-dynamic";

import HomeNavigation from "@/components/home/HomeNavigation";
import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import ProjectsPreviewSkeleton from "@/components/home/ProjectsPreviewSkeleton";

export default function Home() {
  return (
    <HomeNavigation effect="sweep">
      <Hero />
      <Suspense fallback={<ProjectsPreviewSkeleton />}>
        <ProjectsPreview />
      </Suspense>
    </HomeNavigation>
  );
}
