export const dynamic = "force-dynamic";

import ProjectsHeader from "@/components/projects/ProjectsHeader";
import ProjectsContainer from "@/components/projects/ProjectsContainer";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-7 py-12">
      <ProjectsHeader />
      <ProjectsContainer />
    </main>
  );
}
