export const dynamic = "force-dynamic";

import HomeNavigation from "@/components/home/HomeNavigation";
import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import ProjectsPreviewSkeleton from "@/components/sections/ProjectsPreviewSkeleton";

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
