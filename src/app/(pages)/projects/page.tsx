import { portfolioViewport, portfolioSurface, projectsTypography, projectsGutter } from "@/components/layout/portfolioStyles";
export const dynamic = "force-dynamic";

import ProjectsContainer from "@/components/projects/ProjectsContainer";

export default function ProjectsPage() {
  return (
    <div className={`folio folio-projects ${portfolioSurface}`}>
      <div className={`viewport @container/projects ${portfolioViewport}`}><div className={`site bg-paper ${projectsTypography}`}><div className={`underlay ${projectsGutter}`}>
        <ProjectsContainer />
      </div></div></div>
    </div>
  );
}
