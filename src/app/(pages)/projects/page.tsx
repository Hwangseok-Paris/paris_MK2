export const dynamic = "force-dynamic";

import ProjectsContainer from "@/components/projects/ProjectsContainer";

export default function ProjectsPage() {
  return (
    <div className="folio folio-projects">
      <div className="viewport"><div className="site"><div className="underlay">
        <ProjectsContainer />
      </div></div></div>
    </div>
  );
}
